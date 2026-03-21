#!/usr/bin/env python3
"""BTC Futures real-time price feed: Binance + Bybit → Parquet."""
from __future__ import annotations

import asyncio
import logging
import os
import platform
import signal
import sys
import time

import yaml

from feeds.binance import BinanceFeed
from feeds.bybit import BybitFeed
from writer import ParquetWriter

DEFAULT_CONFIG = {
    "output_dir": "./data",
    "rotation_seconds": 3600,
    "flush_interval_seconds": 10,
    "buffer_max_records": 50_000,
    "queue_maxsize": 100_000,
    "writer": {
        "compression": "snappy",
        "temp_suffix": ".part",
    },
    "feeds": {
        "binance": {
            "enabled": True,
            "public_url": "wss://fstream.binance.com/public/stream?streams=btcusdt@bookTicker",
            "market_url": "wss://fstream.binance.com/market/stream?streams=btcusdt@markPrice@1s/btcusdt@aggTrade",
        },
        "bybit": {
            "enabled": True,
            "url": "wss://stream.bybit.com/v5/public/linear",
            "subscribe_args": ["tickers.BTCUSDT"],
            "ping_interval_seconds": 20,
        },
    },
    "logging": {
        "level": "INFO",
        "stats_interval_seconds": 30,
    },
}


def load_config() -> dict:
    config_path = os.path.join(os.path.dirname(__file__), "config.yaml")
    config = dict(DEFAULT_CONFIG)
    if os.path.exists(config_path):
        with open(config_path) as f:
            user_cfg = yaml.safe_load(f) or {}
        _deep_merge(config, user_cfg)
    return config


def _deep_merge(base: dict, override: dict) -> None:
    for k, v in override.items():
        if isinstance(v, dict) and isinstance(base.get(k), dict):
            _deep_merge(base[k], v)
        else:
            base[k] = v


def setup_logging(level: str) -> None:
    logging.basicConfig(
        level=getattr(logging, level.upper(), logging.INFO),
        format="%(asctime)s [%(name)s] %(levelname)s %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        stream=sys.stderr,
    )


async def _stats_loop(
    feeds: list,
    writer: ParquetWriter,
    queue: asyncio.Queue,
    stop_event: asyncio.Event,
    interval: int,
) -> None:
    logger = logging.getLogger("stats")
    while not stop_event.is_set():
        await asyncio.sleep(interval)
        parts = [f"queue={queue.qsize()}"]
        for feed in feeds:
            stats = feed.get_stats()
            if isinstance(stats, list):
                for s in stats:
                    parts.append(f"{s['feed']}(recv={s['received']} drop={s['dropped']})")
            else:
                parts.append(f"{stats['feed']}(recv={stats['received']} drop={stats['dropped']})")
        ws = writer.get_stats()
        parts.append(f"writer(written={ws['records_written']} buf={ws['buffer_size']} ok={ws['flush_success']} err={ws['flush_fail']})")
        logger.info(" | ".join(parts))


async def main() -> None:
    config = load_config()
    setup_logging(config["logging"]["level"])
    logger = logging.getLogger("main")

    queue: asyncio.Queue = asyncio.Queue(maxsize=config["queue_maxsize"])
    stop_event = asyncio.Event()

    # Signal handling
    if platform.system() != "Windows":
        loop = asyncio.get_running_loop()
        for sig in (signal.SIGINT, signal.SIGTERM):
            loop.add_signal_handler(sig, lambda: stop_event.set())

    writer_cfg = config.get("writer", {})
    writer = ParquetWriter(
        output_dir=config["output_dir"],
        rotation_seconds=config["rotation_seconds"],
        flush_interval_seconds=config["flush_interval_seconds"],
        buffer_max_records=config["buffer_max_records"],
        compression=writer_cfg.get("compression", "snappy"),
        temp_suffix=writer_cfg.get("temp_suffix", ".part"),
    )

    feeds_cfg = config["feeds"]
    feeds = []
    tasks: list[asyncio.Task] = []

    if feeds_cfg["binance"].get("enabled", True):
        bcfg = feeds_cfg["binance"]
        binance = BinanceFeed(
            public_url=bcfg["public_url"],
            market_url=bcfg["market_url"],
            queue=queue,
            stop_event=stop_event,
        )
        feeds.append(binance)
        tasks.append(asyncio.create_task(binance.run()))
        logger.info("Binance feeds enabled (/public + /market)")

    if feeds_cfg["bybit"].get("enabled", True):
        bcfg = feeds_cfg["bybit"]
        bybit = BybitFeed(
            name="bybit",
            url=bcfg["url"],
            queue=queue,
            stop_event=stop_event,
            subscribe_args=bcfg.get("subscribe_args"),
            ping_interval=bcfg.get("ping_interval_seconds", 20),
        )
        feeds.append(bybit)
        tasks.append(asyncio.create_task(bybit.run()))
        logger.info("Bybit feed enabled (ping every %ds)", bcfg.get("ping_interval_seconds", 20))

    if not tasks:
        logger.error("No feeds enabled, exiting")
        return

    # Writer task
    writer_task = asyncio.create_task(writer.run(queue, stop_event))

    # Stats task
    stats_interval = config["logging"].get("stats_interval_seconds", 30)
    stats_task = asyncio.create_task(
        _stats_loop(feeds, writer, queue, stop_event, stats_interval)
    )

    # Wait for stop signal
    try:
        await stop_event.wait()
    except asyncio.CancelledError:
        stop_event.set()

    logger.info("Shutdown signal received")

    # 1. Stop feeds (they check stop_event)
    logger.info("Stopping %d feed tasks...", len(tasks))
    for t in tasks:
        t.cancel()
    await asyncio.gather(*tasks, return_exceptions=True)

    # 2. Writer drains queue and flushes (it checks stop_event which is now set)
    logger.info("Waiting for writer to drain and flush...")
    await writer_task

    # 3. Stop stats
    stats_task.cancel()
    await asyncio.gather(stats_task, return_exceptions=True)

    logger.info("Shutdown complete")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        pass

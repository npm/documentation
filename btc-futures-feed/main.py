#!/usr/bin/env python3
"""BTC Futures real-time price feed: Binance + Bybit → Parquet."""
from __future__ import annotations

import asyncio
import logging
import os
import platform
import signal
import sys

import yaml

from feeds.binance import BinanceBookTickerFeed, BinanceMarketFeed
from feeds.bybit import BybitFeed
from writer import ParquetWriter

DEFAULT_CONFIG = {
    "output_dir": "./data",
    "rotation_seconds": 3600,
    "flush_interval_seconds": 10,
    "buffer_max_records": 50_000,
    "feeds": {
        "binance": {
            "enabled": True,
            "public_url": "wss://fstream.binance.com/public/ws/btcusdt@bookTicker",
            "market_url": "wss://fstream.binance.com/market/stream?streams=btcusdt@markPrice@1s/btcusdt@aggTrade",
        },
        "bybit": {
            "enabled": True,
            "url": "wss://stream.bybit.com/v5/public/linear",
            "ping_interval_seconds": 20,
        },
    },
    "logging": {"level": "INFO"},
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


async def main() -> None:
    config = load_config()
    setup_logging(config["logging"]["level"])
    logger = logging.getLogger("main")

    queue: asyncio.Queue = asyncio.Queue(maxsize=100_000)

    writer = ParquetWriter(
        output_dir=config["output_dir"],
        rotation_seconds=config["rotation_seconds"],
        flush_interval_seconds=config["flush_interval_seconds"],
        buffer_max_records=config["buffer_max_records"],
    )

    shutdown_event = asyncio.Event()

    # Signal handling: Unix uses loop signals, Windows falls back to KeyboardInterrupt
    if platform.system() != "Windows":
        loop = asyncio.get_running_loop()
        for sig in (signal.SIGINT, signal.SIGTERM):
            loop.add_signal_handler(sig, lambda: shutdown_event.set())

    feeds_cfg = config["feeds"]
    tasks: list[asyncio.Task] = []

    if feeds_cfg["binance"].get("enabled", True):
        bcfg = feeds_cfg["binance"]
        book_feed = BinanceBookTickerFeed("binance.public", bcfg["public_url"], queue)
        market_feed = BinanceMarketFeed("binance.market", bcfg["market_url"], queue)
        tasks.append(asyncio.create_task(book_feed.run()))
        tasks.append(asyncio.create_task(market_feed.run()))
        logger.info("Binance feeds enabled (/public + /market)")

    if feeds_cfg["bybit"].get("enabled", True):
        bcfg = feeds_cfg["bybit"]
        ping_interval = bcfg.get("ping_interval_seconds", 20)
        feed = BybitFeed("bybit", bcfg["url"], queue, ping_interval=ping_interval)
        tasks.append(asyncio.create_task(feed.run()))
        logger.info("Bybit feed enabled (ping every %ds)", ping_interval)

    if not tasks:
        logger.error("No feeds enabled, exiting")
        return

    tasks.append(asyncio.create_task(writer.run(queue)))

    try:
        await shutdown_event.wait()
    except asyncio.CancelledError:
        pass

    logger.info("Shutdown signal received, cancelling %d tasks...", len(tasks))
    for t in tasks:
        t.cancel()
    await asyncio.gather(*tasks, return_exceptions=True)
    logger.info("Shutdown complete")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        pass

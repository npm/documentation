from __future__ import annotations

import asyncio
import json
import logging

from feeds.base import BaseFeed
from schema import TickRecord, ms_to_datetime, now_utc

SYMBOL = "BTCUSDT"


class BinanceFeed:
    """Binance USDS-M futures: 2 connections (/public + /market) in one feed.

    /public combined stream: btcusdt@bookTicker
    /market combined stream: btcusdt@markPrice@1s + btcusdt@aggTrade
    """

    def __init__(
        self,
        public_url: str,
        market_url: str,
        queue: asyncio.Queue,
        stop_event: asyncio.Event,
    ) -> None:
        self._public = _BinancePublicFeed("binance.public", public_url, queue, stop_event)
        self._market = _BinanceMarketFeed("binance.market", market_url, queue, stop_event)
        self.logger = logging.getLogger("binance")

    async def run(self) -> None:
        self.logger.info("Starting Binance feeds (/public + /market)")
        async with asyncio.TaskGroup() as tg:
            tg.create_task(self._public.run())
            tg.create_task(self._market.run())

    def get_stats(self) -> list[dict]:
        return [self._public.get_stats(), self._market.get_stats()]


class _BinancePublicFeed(BaseFeed):
    """bookTicker via /public combined stream."""

    async def _subscribe(self, ws) -> None:
        pass

    def _parse_message(self, raw: str) -> list[TickRecord] | None:
        msg = json.loads(raw)
        stream = msg.get("stream", "")
        data = msg.get("data")
        if data is None:
            return None

        if not stream.endswith("@bookTicker"):
            return None

        ts = now_utc()
        return [TickRecord(
            timestamp=ts,
            exchange_event_ts=ms_to_datetime(data["E"]) if "E" in data else None,
            exchange_tx_ts=ms_to_datetime(data["T"]) if "T" in data else None,
            exchange="binance",
            symbol=SYMBOL,
            record_type="bbo",
            source_stream="binance:bookTicker",
            sequence=int(data["u"]) if "u" in data else None,
            best_bid_price=float(data["b"]),
            best_bid_qty=float(data["B"]),
            best_ask_price=float(data["a"]),
            best_ask_qty=float(data["A"]),
        )]


class _BinanceMarketFeed(BaseFeed):
    """markPrice + aggTrade via /market combined stream."""

    async def _subscribe(self, ws) -> None:
        pass

    def _parse_message(self, raw: str) -> list[TickRecord] | None:
        msg = json.loads(raw)
        stream = msg.get("stream", "")
        data = msg.get("data")
        if data is None:
            return None

        ts = now_utc()
        event_ts = ms_to_datetime(data["E"]) if "E" in data else None

        if "markPrice" in stream:
            return [TickRecord(
                timestamp=ts,
                exchange_event_ts=event_ts,
                exchange_tx_ts=None,
                exchange="binance",
                symbol=SYMBOL,
                record_type="mark",
                source_stream="binance:markPrice",
                mark_price=float(data["p"]),
                index_price=float(data["i"]),
                funding_rate=float(data["r"]),
            )]

        if stream.endswith("@aggTrade"):
            return [TickRecord(
                timestamp=ts,
                exchange_event_ts=event_ts,
                exchange_tx_ts=ms_to_datetime(data["T"]) if "T" in data else None,
                exchange="binance",
                symbol=SYMBOL,
                record_type="trade",
                source_stream="binance:aggTrade",
                last_price=float(data["p"]),
                last_qty=float(data["q"]),
            )]

        return None

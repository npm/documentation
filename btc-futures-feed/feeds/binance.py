from __future__ import annotations

import json

from feeds.base import BaseFeed
from schema import TickRecord, ms_to_datetime, now_utc

SYMBOL = "BTCUSDT"


class BinanceBookTickerFeed(BaseFeed):
    """Binance USDS-M futures /public: bookTicker (high-frequency BBO).

    Single stream via /public/ws/... — data arrives unwrapped (no combined stream wrapper).
    """

    async def _subscribe(self, ws) -> None:
        pass

    def _parse_message(self, raw: str) -> list[TickRecord] | None:
        data = json.loads(raw)

        # Single stream: data comes directly, no {"stream":...,"data":...} wrapper
        if "b" not in data:
            return None

        ts = now_utc()
        event_ts = ms_to_datetime(data["E"]) if "E" in data else None
        tx_ts = ms_to_datetime(data["T"]) if "T" in data else None

        return [TickRecord(
            timestamp=ts,
            exchange_event_ts=event_ts,
            exchange_tx_ts=tx_ts,
            exchange="binance",
            symbol=SYMBOL,
            record_type="bbo",
            source_stream="bookTicker",
            best_bid_price=float(data["b"]),
            best_bid_qty=float(data["B"]),
            best_ask_price=float(data["a"]),
            best_ask_qty=float(data["A"]),
        )]


class BinanceMarketFeed(BaseFeed):
    """Binance USDS-M futures /market: markPrice + aggTrade."""

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
                source_stream="markPrice",
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
                source_stream="aggTrade",
                last_price=float(data["p"]),
                last_qty=float(data["q"]),
            )]

        return None

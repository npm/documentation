from __future__ import annotations

import json

from feeds.base import BaseFeed
from schema import TickRecord, ms_to_datetime, now_utc

SYMBOL = "BTCUSDT"


class BinanceFeed(BaseFeed):
    """Binance USDS-margined futures: bookTicker + markPrice combined stream."""

    async def _subscribe(self, ws) -> None:
        # Streams are specified in the URL path, no subscription message needed.
        pass

    def _parse_message(self, raw: str) -> list[TickRecord] | None:
        msg = json.loads(raw)
        stream = msg.get("stream", "")
        data = msg.get("data")
        if data is None:
            return None

        ts = now_utc()
        exchange_ts = ms_to_datetime(data.get("E", 0))

        if stream.endswith("@bookTicker"):
            return [TickRecord(
                timestamp=ts,
                exchange_ts=exchange_ts,
                exchange="binance",
                symbol=SYMBOL,
                best_bid_price=float(data["b"]),
                best_bid_qty=float(data["B"]),
                best_ask_price=float(data["a"]),
                best_ask_qty=float(data["A"]),
            )]

        if "markPrice" in stream:
            return [TickRecord(
                timestamp=ts,
                exchange_ts=exchange_ts,
                exchange="binance",
                symbol=SYMBOL,
                mark_price=float(data["p"]),
                index_price=float(data["i"]),
                funding_rate=float(data["r"]),
            )]

        return None

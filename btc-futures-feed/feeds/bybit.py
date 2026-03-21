from __future__ import annotations

import asyncio
import json

from feeds.base import BaseFeed
from schema import TickRecord, ms_to_datetime, now_utc

SYMBOL = "BTCUSDT"
DEFAULT_PING_INTERVAL = 20


class BybitFeed(BaseFeed):
    """Bybit V5 linear perpetual: tickers stream with snapshot/delta handling."""

    def __init__(
        self,
        name: str,
        url: str,
        queue: asyncio.Queue,
        stop_event: asyncio.Event,
        subscribe_args: list[str] | None = None,
        ping_interval: int = DEFAULT_PING_INTERVAL,
    ) -> None:
        super().__init__(name, url, queue, stop_event)
        self._subscribe_args = subscribe_args or [f"tickers.{SYMBOL}"]
        self._ping_interval = ping_interval
        self._last_snapshot: dict | None = None
        self._ping_task: asyncio.Task | None = None

    async def _subscribe(self, ws) -> None:
        self._last_snapshot = None
        await ws.send(json.dumps({
            "op": "subscribe",
            "args": self._subscribe_args,
        }))
        if self._ping_task is not None:
            self._ping_task.cancel()
        self._ping_task = asyncio.create_task(self._ping_loop(ws))

    async def _ping_loop(self, ws) -> None:
        try:
            while True:
                await asyncio.sleep(self._ping_interval)
                await ws.send(json.dumps({"op": "ping"}))
        except asyncio.CancelledError:
            pass
        except Exception:
            self.logger.warning("Ping loop error", exc_info=True)

    async def _listen(self, ws) -> None:
        try:
            await super()._listen(ws)
        finally:
            if self._ping_task is not None:
                self._ping_task.cancel()
                self._ping_task = None

    def _parse_message(self, raw: str) -> list[TickRecord] | None:
        msg = json.loads(raw)

        # Skip op responses (subscribe confirm, pong, etc.)
        if "op" in msg:
            return None

        topic = msg.get("topic", "")
        if not topic.startswith("tickers."):
            return None

        msg_type = msg.get("type")
        data = msg.get("data")
        if data is None:
            return None

        if msg_type == "snapshot":
            self._last_snapshot = dict(data)
        elif msg_type == "delta":
            if self._last_snapshot is None:
                self.logger.debug("Delta before snapshot, skipping")
                return None
            self._last_snapshot.update(data)
        else:
            return None

        state = self._last_snapshot
        ts = now_utc()
        exchange_event_ts = ms_to_datetime(msg["ts"]) if "ts" in msg else None
        seq = int(msg["cs"]) if "cs" in msg else None

        return [TickRecord(
            timestamp=ts,
            exchange_event_ts=exchange_event_ts,
            exchange_tx_ts=None,
            exchange="bybit",
            symbol=SYMBOL,
            record_type="ticker",
            source_stream=f"bybit:{topic}",
            sequence=seq,
            best_bid_price=_float_or_none(state.get("bid1Price")),
            best_bid_qty=_float_or_none(state.get("bid1Size")),
            best_ask_price=_float_or_none(state.get("ask1Price")),
            best_ask_qty=_float_or_none(state.get("ask1Size")),
            last_price=_float_or_none(state.get("lastPrice")),
            mark_price=_float_or_none(state.get("markPrice")),
            index_price=_float_or_none(state.get("indexPrice")),
            funding_rate=_float_or_none(state.get("fundingRate")),
        )]


def _float_or_none(v) -> float | None:
    if v is None or v == "":
        return None
    return float(v)

from __future__ import annotations

import time
from dataclasses import dataclass, fields
from datetime import datetime, timezone

import pyarrow as pa

ARROW_SCHEMA = pa.schema([
    ("timestamp", pa.timestamp("us", tz="UTC")),
    ("exchange_event_ts", pa.timestamp("ms", tz="UTC")),
    ("exchange_tx_ts", pa.timestamp("ms", tz="UTC")),
    ("exchange", pa.utf8()),
    ("symbol", pa.utf8()),
    ("record_type", pa.utf8()),
    ("source_stream", pa.utf8()),
    ("sequence", pa.int64()),
    ("best_bid_price", pa.float64()),
    ("best_bid_qty", pa.float64()),
    ("best_ask_price", pa.float64()),
    ("best_ask_qty", pa.float64()),
    ("last_price", pa.float64()),
    ("last_qty", pa.float64()),
    ("mark_price", pa.float64()),
    ("index_price", pa.float64()),
    ("funding_rate", pa.float64()),
])


@dataclass(slots=True)
class TickRecord:
    timestamp: datetime
    exchange_event_ts: datetime | None = None
    exchange_tx_ts: datetime | None = None
    exchange: str = ""
    symbol: str = ""
    record_type: str = ""
    source_stream: str = ""
    sequence: int | None = None
    best_bid_price: float | None = None
    best_bid_qty: float | None = None
    best_ask_price: float | None = None
    best_ask_qty: float | None = None
    last_price: float | None = None
    last_qty: float | None = None
    mark_price: float | None = None
    index_price: float | None = None
    funding_rate: float | None = None


def now_utc() -> datetime:
    return datetime.fromtimestamp(time.time(), tz=timezone.utc)


def ms_to_datetime(ms: int | str) -> datetime:
    return datetime.fromtimestamp(int(ms) / 1000, tz=timezone.utc)


def records_to_table(records: list[TickRecord]) -> pa.Table:
    columns: dict[str, list] = {f.name: [] for f in fields(TickRecord)}
    for r in records:
        for f in fields(TickRecord):
            columns[f.name].append(getattr(r, f.name))
    return pa.table(columns, schema=ARROW_SCHEMA)

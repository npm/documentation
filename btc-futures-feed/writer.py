from __future__ import annotations

import asyncio
import logging
import os
import time
from datetime import datetime, timezone

import pyarrow.parquet as pq

from schema import ARROW_SCHEMA, TickRecord, records_to_table

logger = logging.getLogger("writer")


class ParquetWriter:
    def __init__(
        self,
        output_dir: str = "./data",
        rotation_seconds: int = 3600,
        flush_interval_seconds: int = 10,
        buffer_max_records: int = 50_000,
    ) -> None:
        self.output_dir = output_dir
        self.rotation_seconds = rotation_seconds
        self.flush_interval = flush_interval_seconds
        self.buffer_max = buffer_max_records

        self._buffer: list[TickRecord] = []
        self._writer: pq.ParquetWriter | None = None
        self._file_path: str | None = None
        self._period_start: float = 0
        self._last_flush: float = 0

    async def run(self, queue: asyncio.Queue) -> None:
        os.makedirs(self.output_dir, exist_ok=True)
        self._rotate_file()
        self._last_flush = time.time()

        try:
            while True:
                try:
                    record = await asyncio.wait_for(queue.get(), timeout=0.5)
                    self._buffer.append(record)
                except asyncio.TimeoutError:
                    pass

                now = time.time()

                # Check rotation
                if now - self._period_start >= self.rotation_seconds:
                    self._flush()
                    self._rotate_file()

                # Check flush conditions
                elif (
                    len(self._buffer) >= self.buffer_max
                    or (self._buffer and now - self._last_flush >= self.flush_interval)
                ):
                    self._flush()

        except asyncio.CancelledError:
            logger.info("Writer shutting down, flushing remaining %d records", len(self._buffer))
            self._flush()
            self._close_writer()

    def _rotate_file(self) -> None:
        self._close_writer()
        ts = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
        self._file_path = os.path.join(self.output_dir, f"btcusdt_{ts}.parquet")
        self._writer = pq.ParquetWriter(self._file_path, ARROW_SCHEMA, compression="snappy")
        self._period_start = time.time()
        logger.info("New file: %s", self._file_path)

    def _flush(self) -> None:
        if not self._buffer:
            return
        if self._writer is None:
            self._rotate_file()
        try:
            table = records_to_table(self._buffer)
            self._writer.write_table(table)
            logger.info("Flushed %d records to %s", len(self._buffer), self._file_path)
        except Exception:
            logger.exception("Failed to flush %d records", len(self._buffer))
            return
        self._buffer.clear()
        self._last_flush = time.time()

    def _close_writer(self) -> None:
        if self._writer is not None:
            try:
                self._writer.close()
            except Exception:
                logger.exception("Error closing parquet writer")
            self._writer = None

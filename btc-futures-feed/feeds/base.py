from __future__ import annotations

import asyncio
import json
import logging
import time
from abc import ABC, abstractmethod

from websockets.asyncio.client import connect
from websockets.exceptions import ConnectionClosed

from schema import TickRecord


class BaseFeed(ABC):
    def __init__(
        self,
        name: str,
        url: str,
        queue: asyncio.Queue,
        stop_event: asyncio.Event,
    ) -> None:
        self.name = name
        self.url = url
        self.queue = queue
        self.stop_event = stop_event
        self.logger = logging.getLogger(name)
        self._msg_count = 0
        self._drop_count = 0
        self._last_recv_time: float = 0

    async def run(self) -> None:
        while not self.stop_event.is_set():
            try:
                async for ws in connect(self.url, logger=self.logger):
                    try:
                        self.logger.info("Connected to %s", self.url)
                        self._msg_count = 0
                        await self._subscribe(ws)
                        await self._listen(ws)
                    except ConnectionClosed as e:
                        self.logger.warning("Connection closed: %s. Reconnecting...", e)
                    except Exception:
                        self.logger.exception("Unexpected error. Reconnecting...")
                    if self.stop_event.is_set():
                        break
            except asyncio.CancelledError:
                raise
            except Exception:
                self.logger.exception("Connection attempt failed. Retrying...")

    async def _listen(self, ws) -> None:
        async for raw in ws:
            if self.stop_event.is_set():
                return
            try:
                records = self._parse_message(raw)
            except Exception:
                self.logger.warning("Failed to parse message: %s", raw[:200])
                continue
            if records is None:
                continue
            self._last_recv_time = time.time()
            for record in records:
                try:
                    self.queue.put_nowait(record)
                except asyncio.QueueFull:
                    self._drop_count += 1
                    if self._drop_count % 1000 == 1:
                        self.logger.warning("Queue full, total dropped: %d", self._drop_count)
                self._msg_count += 1

    def get_stats(self) -> dict:
        return {
            "feed": self.name,
            "received": self._msg_count,
            "dropped": self._drop_count,
            "last_recv": self._last_recv_time,
        }

    @abstractmethod
    async def _subscribe(self, ws) -> None:
        ...

    @abstractmethod
    def _parse_message(self, raw: str) -> list[TickRecord] | None:
        ...

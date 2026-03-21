from __future__ import annotations

import asyncio
import json
import logging
from abc import ABC, abstractmethod

from websockets.asyncio.client import connect
from websockets.exceptions import ConnectionClosed

from schema import TickRecord


class BaseFeed(ABC):
    def __init__(self, name: str, url: str, queue: asyncio.Queue) -> None:
        self.name = name
        self.url = url
        self.queue = queue
        self.logger = logging.getLogger(name)
        self._msg_count = 0

    async def run(self) -> None:
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

    async def _listen(self, ws) -> None:
        async for raw in ws:
            try:
                records = self._parse_message(raw)
            except Exception:
                self.logger.warning("Failed to parse message: %s", raw[:200])
                continue
            if records is None:
                continue
            for record in records:
                try:
                    self.queue.put_nowait(record)
                except asyncio.QueueFull:
                    self.logger.warning("Queue full, dropping message")
                self._msg_count += 1
                if self._msg_count % 10000 == 0:
                    self.logger.info("Received %d messages", self._msg_count)

    @abstractmethod
    async def _subscribe(self, ws) -> None:
        ...

    @abstractmethod
    def _parse_message(self, raw: str) -> list[TickRecord] | None:
        ...

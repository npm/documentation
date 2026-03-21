# BTC Futures Price Feed — 設計ドキュメント

## 概要

Binance / Bybit の BTC/USDT 先物 WebSocket ストリームをリアルタイムに受信し、Parquet ファイルに書き出すデータ収集基盤。

## アーキテクチャ

```
[Binance /public WS]  ─→ bookTicker ─┐
[Binance /market WS]  ─→ markPrice  ─┤
                         + aggTrade  ─┤
                                      ├─→ asyncio.Queue ─→ ParquetWriter ─→ .parquet files
[Bybit WS]            ─→ tickers   ──┘
```

- Binance は /public（高頻度BBO）と /market（markPrice + aggTrade）で接続を分離
- 各取引所フィードは `BaseFeed` を継承した独立クラス
- `asyncio.Queue` で疎結合に接続し、フィードとライターを分離
- pyarrow の `ParquetWriter` で row group 単位の追記書き込み

## 設計判断と経緯

### 0. Binance /public と /market の接続分離（優先度0）

**問題**: Binance は 2026 年の案内で WebSocket base URL を /public（高頻度 public data）、/market（regular market data）、/private に分離することを強く推奨。1 本の combined stream で全ストリームをまとめる構成は、現行は動いても将来の前提にしにくい。

**対応**:
- `/public/ws/btcusdt@bookTicker` — BBO（高頻度データ）
- `/market/stream?streams=btcusdt@markPrice@1s/btcusdt@aggTrade` — markPrice + aggTrade

**判断理由**: bookTicker は high-frequency public data に分類され、markPrice/aggTrade は regular market data に分類される。これに従って接続を分けた。`BinanceFeed` 1クラスを `BinanceBookTickerFeed` と `BinanceMarketFeed` に分割。

### 1. Binance の last_price 問題（優先度1）

**問題**: `bookTicker` は best bid/ask のみ、`markPrice` は mark/index/funding のみ返す。last_price は常に NULL になる。

**対応**: `btcusdt@aggTrade` ストリームを /market 接続に追加。直近約定の price/qty を取得。

**判断理由**: `@ticker`（2秒ごとの代表値）ではなく `@aggTrade` を選んだのは、リアルタイム約定データの方が分析精度が高いため。ただし aggTrade はメッセージ量が多いので、Queue サイズと書き込み負荷に注意が必要。

### 2. record_type / source_stream カラム（優先度2）

**問題**: nullable カラムだけでは「BBO イベントだから last_price が NULL」なのか「データ欠損で NULL」なのか区別できない。

**対応**: `record_type`（bbo / mark / trade / ticker）と `source_stream`（bookTicker / markPrice / aggTrade / tickers.BTCUSDT）を追加。

**ルール**:
- Binance bookTicker → `record_type="bbo"`
- Binance markPrice → `record_type="mark"`
- Binance aggTrade → `record_type="trade"`
- Bybit tickers → `record_type="ticker"`（snapshot/delta マージ後の完全な状態）

### 3. 時刻カラムの分離（優先度3）

**問題**: `exchange_ts` 1本では Binance の event time (E) と transaction time (T) の区別がつかず、遅延測定やイベント順序検証ができない。

**対応**: `exchange_event_ts`（イベント発生時刻）と `exchange_tx_ts`（トランザクション時刻、nullable）に分離。

| exchange | exchange_event_ts | exchange_tx_ts |
|----------|------------------|---------------|
| Binance bookTicker | E | T |
| Binance markPrice | E | NULL |
| Binance aggTrade | E | T |
| Bybit tickers | ts (トップレベル) | NULL |

### 4. Partial file 対策（優先度4）

**問題**: 書き込み中の .parquet ファイルを下流プロセスが読むと、不完全なデータを処理してしまう。

**対応**: 書き込み中は `.parquet.part` 拡張子を使い、`close()` 完了後に `.parquet` へ `rename`。下流は `.parquet` のみを対象にすれば安全。

### 5. 監視メトリクスと異常終了ガード（優先度5）

**問題**: データ欠損に気づけない「サイレント障害」のリスク。加えて、ディスクフルなどで flush が連続失敗するとバッファが膨張しメモリ枯渇に至る。

**対応**:
- **BaseFeed**: `_drop_count`（Queue 満杯で破棄した件数）、`_msg_count`（受信件数）、`_last_recv_time`（最終受信時刻）
- **ParquetWriter**: `_flush_success` / `_flush_fail` / `_consecutive_failures` / `_total_records_written`
- 5 回連続 flush 失敗でバッファ強制破棄（`MAX_CONSECUTIVE_FLUSH_FAILURES`）
- 10,000 メッセージごと / 1,000 drop ごとにログ出力

### 6. Windows 対応とシャットダウン改善

**問題**: `loop.add_signal_handler()` は Windows 未サポート。SIGINT/SIGTERM 一本足だと Windows で止められないプロセスになる。

**対応**: `platform.system() != "Windows"` でガードし、`asyncio.run(main())` を `try/except KeyboardInterrupt` でラップ。

### 7. Bybit ping_interval の設定化

**問題**: 20 秒固定のハードコードは、公式ドキュメントで明示された数値ではなく、将来変更される可能性がある。

**対応**: `config.yaml` の `feeds.bybit.ping_interval_seconds` で設定可能に。デフォルト 20 秒。

## WebSocket 接続の注意点

### Binance
- 24 時間で接続が切断される（サーバー仕様）
- サーバーが 3 分ごとに ping frame を送信、10 分以内に pong が返らないと切断
- `websockets` ライブラリがフレームレベルの ping/pong を自動処理するため、アプリ側の対応は不要
- /public の単一ストリーム (`/ws/...`) はラップなし、/market の combined stream (`/stream?streams=...`) は `{"stream":"...","data":...}` でラップされる
- **注意**: /public の bookTicker は単一ストリーム接続なので、JSON は直接データ。/market の combined stream はラッパーを剥がす必要あり

### Bybit
- `tickers.BTCUSDT` は snapshot + delta で更新（100ms 間隔）
- ping 間隔は config で設定可能（`_ping_loop` で実装）
- subscribe ack / pong は `"op" in msg` で検出しスキップ
- プロトコルレベル heartbeat（websockets ライブラリ）とアプリレベル ping（`{"op":"ping"}`）は二重になるが、Bybit が要求するのはアプリレベル

## Parquet ファイル設計

- 圧縮: Snappy
- ローテーション: 1 時間ごとに新ファイル
- フラッシュ: 10 秒ごと or バッファ 50,000 件到達時
- 命名: `btcusdt_YYYYMMDD_HHMMSS.parquet`（書き込み中は `.part` 付き）
- 連続 5 回 flush 失敗時はバッファ破棄（メモリ保護）

## 今後の改善候補

- [ ] メトリクスの Prometheus exporter 化
- [ ] 複数シンボル対応
- [ ] Binance の listenKey を使った userData stream 対応
- [ ] ファイルサイズベースのローテーション追加
- [ ] 欠損検知アラート（一定時間メッセージが来ない場合の通知）
- [ ] 取引所追加時の共通インターフェース拡充
- [ ] exchange_update_id / sequence カラムの追加

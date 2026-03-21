# BTC Futures Price Feed — 設計ドキュメント

## 概要

Binance / Bybit の BTC/USDT 先物 WebSocket ストリームをリアルタイムに受信し、Parquet ファイルに書き出すデータ収集基盤。公開マーケットデータのみ取得するため API Key は不要。

## アーキテクチャ

```
[Binance /public WS]  ─→ bookTicker ─┐
[Binance /market WS]  ─→ markPrice  ─┤
                         + aggTrade  ─┤
                                      ├─→ asyncio.Queue ─→ ParquetWriter ─→ .parquet files
[Bybit /public WS]    ─→ tickers   ──┘
```

- `BinanceFeed` が内部で2タスク（/public + /market）を `TaskGroup` で管理
- `BybitFeed` は1接続で tickers を snapshot/delta マージ
- 各フィードは `BaseFeed` を継承し、`stop_event` で協調的に停止
- `asyncio.Queue` で疎結合に接続し、フィードとライターを分離
- pyarrow の `ParquetWriter` で row group 単位の追記書き込み

## 停止順序

1. `stop_event.set()` — 全コンポーネントに停止を通知
2. feed タスクを cancel — WebSocket 接続を閉じる
3. writer が queue をドレイン → 残りを flush → ファイル close → rename
4. stats タスクを cancel

## 設計判断と経緯

### 0. Binance /public と /market の接続分離

**問題**: Binance は 2026 年の案内で WebSocket base URL を /public（高頻度 public data）、/market（regular market data）、/private に分離。1 本の combined stream で全ストリームをまとめる構成は将来の前提にしにくい。

**対応**:
- `/public/stream?streams=btcusdt@bookTicker` — BBO（combined stream 形式で統一）
- `/market/stream?streams=btcusdt@markPrice@1s/btcusdt@aggTrade` — markPrice + aggTrade

**判断理由**: 両方を combined stream 形式にすることで、パーサーのラッパー解除処理（`{"stream":"...","data":...}`）を統一。`/ws/` 単一ストリーム形式だとパーサーが分岐して煩雑になる。

### 1. Binance の last_price 問題

**問題**: `bookTicker` は best bid/ask のみ、`markPrice` は mark/index/funding のみ返す。last_price は常に NULL。

**対応**: `btcusdt@aggTrade` を /market 接続に追加。直近約定の price/qty を取得。

**判断理由**: `@ticker`（2秒ごと代表値）ではなく `@aggTrade`（リアルタイム約定）を選択。分析精度が高いが、メッセージ量が多いので Queue サイズと書き込み負荷に注意。

### 2. record_type / source_stream カラム

**問題**: nullable カラムだけでは「BBO だから last_price が NULL」か「データ欠損で NULL」か区別不能。

**対応**: `record_type`（bbo / mark / trade / ticker）と `source_stream`（binance:bookTicker 等）を追加。

**ルール**:

| 接続 | record_type | source_stream |
|------|-------------|---------------|
| Binance /public bookTicker | bbo | binance:bookTicker |
| Binance /market markPrice | mark | binance:markPrice |
| Binance /market aggTrade | trade | binance:aggTrade |
| Bybit tickers | ticker | bybit:tickers.BTCUSDT |

### 3. 時刻カラムの分離

**問題**: `exchange_ts` 1本では Binance の event time (E) と transaction time (T) の区別がつかず、遅延測定が不可能。

**対応**: `exchange_event_ts` + `exchange_tx_ts`（nullable）に分離。

| 接続 | exchange_event_ts | exchange_tx_ts |
|------|------------------|---------------|
| Binance bookTicker | E | T |
| Binance markPrice | E | NULL |
| Binance aggTrade | E | T |
| Bybit tickers | ts | NULL |

### 4. sequence カラム

**問題**: イベントの順序保証やギャップ検知ができない。

**対応**: `sequence`（int64 nullable）を追加。Binance bookTicker の `u`、Bybit tickers の `cs` を格納。

### 5. Partial file 対策

**対応**: 書き込み中は `.parquet.part`、close 後に `.parquet` へ rename。`temp_suffix` は config で設定可能。

### 6. 監視メトリクスと異常終了ガード

**対応**:
- `BaseFeed.get_stats()`: 受信件数、drop 件数、最終受信時刻
- `ParquetWriter.get_stats()`: 書き込みレコード数、flush 成功/失敗、バッファサイズ
- `_stats_loop`: config の `stats_interval_seconds`（デフォルト 30 秒）ごとにまとめてログ出力
- 5 回連続 flush 失敗でバッファ強制破棄（`MAX_CONSECUTIVE_FLUSH_FAILURES`）

### 7. Windows 対応

**対応**: `platform.system() != "Windows"` で signal handler をガード。`asyncio.run(main())` を `try/except KeyboardInterrupt` でラップ。

### 8. Bybit 設定の外部化

- `subscribe_args`: 購読トピックを config で指定可能
- `ping_interval_seconds`: heartbeat 間隔を config で設定可能（デフォルト 20 秒）

## WebSocket 接続の注意点

### Binance
- 24 時間で接続が切断される（サーバー仕様）
- サーバーが 3 分ごとに ping frame を送信、10 分以内に pong が返らないと切断
- `websockets` ライブラリがフレームレベルの ping/pong を自動処理
- Combined stream は `{"stream":"...","data":...}` でラップされる
- 公開マーケットデータのみ使用するため API Key は不要

### Bybit
- `tickers.BTCUSDT` は snapshot + delta で更新（100ms 間隔）
- アプリレベル `{"op":"ping"}` が必要（プロトコルレベル heartbeat とは別）
- subscribe ack / pong は `"op" in msg` で検出しスキップ
- public topics は認証不要

## Parquet ファイル設計

- 圧縮: Snappy（config で変更可能）
- ローテーション: 1 時間ごとに新ファイル
- フラッシュ: 10 秒ごと or バッファ 50,000 件到達時
- 命名: `btcusdt_YYYYMMDD_HHMMSS.parquet`（書き込み中は `.part` 付き）
- 連続 5 回 flush 失敗時はバッファ破棄（メモリ保護）

## 今後の改善候補

- [ ] メトリクスの Prometheus exporter 化
- [ ] 複数シンボル対応
- [ ] ファイルサイズベースのローテーション追加
- [ ] 欠損検知アラート（一定時間メッセージが来ない場合の通知）
- [ ] 取引所追加時の共通インターフェース拡充
- [ ] exchange_update_id カラムの追加検討
- [ ] reconnect backoff の config 反映（現在 websockets ライブラリのデフォルト）

# CLAUDE.md

## プロジェクト構成

このリポジトリは npm ドキュメントサイト（Gatsby）と `btc-futures-feed/`（Python 非同期 WebSocket データ収集基盤）を含む。

## btc-futures-feed 開発ガイドライン

### 絶対に守るべきルール

1. **新しいストリームを追加したら record_type を必ず定義する** — nullable カラムだけでは「イベント種別による NULL」と「データ欠損」の区別がつかない
2. **時刻は exchange_event_ts と exchange_tx_ts を分けて格納する** — 1 本にまとめると遅延測定・イベント順序検証が不可能になる
3. **Binance の last_price は bookTicker/markPrice からは取れない** — aggTrade か ticker の購読が必要
4. **書き込み中ファイルは .parquet.part にする** — 下流が不完全ファイルを読むリスクを防ぐ
5. **Queue drop / flush 失敗はメトリクスで追跡する** — サイレント障害は最悪の障害

### WebSocket 実装の注意

- Binance: 24h で強制切断。Combined stream は `{"stream":"...","data":...}` ラッパーを剥がす必要あり
- Bybit: 20 秒ごとの `{"op":"ping"}` 必須。tickers は snapshot/delta マージが必要
- エラーハンドリングは REST の HTTP ステータスコード（429/5xx）ではなく、WebSocket 固有の事象（接続失敗、ハンドシェイク失敗、切断、購読応答失敗、壊れた JSON）を意識する

### スキーマ変更時

- `schema.py` の `ARROW_SCHEMA` と `TickRecord` dataclass を両方更新すること
- 新カラム追加時は既存 Parquet ファイルとの互換性を考慮する（nullable にする）

### 設計詳細

`btc-futures-feed/DESIGN.md` に経緯・判断理由・改善候補を記載。

# Nagiport Motion Kit — 作例制作 進捗記録

更新: 2026-10-20 ／ 担当: 作例（公開Webページ）
Push先: https://github.com/kyonHuO/nagiport-motion-kit
表示先: https://kyonhuo.github.io/nagiport-motion-kit/ （トップの Templates セクション）
手順: website-cloner 型（参考サイト調査→トークン抽出→独自化制作→幅検証→公開→記録）

## 進捗

| # | タイプ | 作例 | 保存先 | ステータス |
| --- | --- | --- | --- | --- |
| 01 | HERO／スクロール演出 | MIKAZUKI（架空） | `docs/examples/01-hero/` | 公開済み |
| 02 | LANDING／1ページ構成 | HAGOROMO（架空） | `docs/examples/02-landing/` | 公開済み |
| 03 | PRICING／料金表 | 未着手 | `docs/examples/03-pricing/` | 次 |
| 04 | FAQ／よくある質問 | 未着手 | `docs/examples/04-faq/` | 次 |
| 05 | CONTACT／問い合わせ | 未着手（フォームは送信無効化前提） | `docs/examples/05-contact/` | 次 |
| 06 | PORTFOLIO／実績3点 | 未着手 | `docs/examples/06-portfolio/` | 次 |

## 01 HERO — 完了記録

- 参考サイト: linear.app（構成・余白・配色・動きの設計を抽出。素材・コード・文言・ブランド未使用）
- 独自化: 架空ブランド「MIKAZUKI」、文言全新規、架空の社名・機能・日付。フッターに架空明記
- 保存先: `docs/examples/01-hero/index.html`（研究ノート `RESEARCH.md`）
- 公開URL: https://kyonhuo.github.io/nagiport-motion-kit/examples/01-hero/
- トップ掲載: Templates カード01（`docs/index.html`）から直接開ける。ナビ確認済み
- 検証（Windows 上の Chrome ヘッドレス、2026-10-20）: 390 / 768 / 1440px で横はみ出しなし。17/17 チェック合格（スクロール演出・セクション出現・ページ内リンク全動作・reduced-motion・フォーム0・メールリンク0・外部リンク0）
- 既存ページ保全: 変更は `docs/index.html` のカード01と関連CSSのみ。他34ページ・variants・frik-motion・ルート側は未変更。リグレッション53/53合格
- 秘密情報: なし（純静的。APIキー・トークン・分析コードなし）

## 02 LANDING — 完了記録

- 参考サイト: vercel.com（構成・余白・配色・動きの設計を抽出。素材・コード・文言・ブランド未使用）
- 独自化: 架空ブランド「HAGOROMO」、文言全新規、架空の機能・日付。フッターに架空明記
- 保存先: `docs/examples/02-landing/index.html`（研究ノート `RESEARCH.md`）
- 公開URL: https://kyonhuo.github.io/nagiport-motion-kit/examples/02-landing/
- トップ掲載: Templates カード02 から直接開ける
- 検証（Windows 上の Chrome ヘッドレス、2026-10-20）: 390 / 768 / 1440px で横はみ出しなし。15/15 チェック合格（セクション出現・ページ内リンク全動作・マーキー・reduced-motion・フォーム0・メールリンク0・外部リンク0）

## 次の作業

1. 作例03（PRICING 料金表）の参考サイト調査→制作→検証→公開→カード03への掲載
2. 04〜06 を同手順で順に作成
3. 各作例の公開後、トップの FAQ「スマホ対応していますか」の文言を実測値に更新（必要時）

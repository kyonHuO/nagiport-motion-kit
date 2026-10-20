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
| 03 | PRICING／料金表 | KOMOREBI（架空） | `docs/examples/03-pricing/` | 公開済み |
| 04 | FAQ／よくある質問 | HOSHIZORA（架空） | `docs/examples/04-faq/` | 公開済み |
| 05 | CONTACT／問い合わせ | TSUKIGI STUDIO（架空・フォーム無効化） | `docs/examples/05-contact/` | 公開済み |
| 06 | PORTFOLIO／実績3点 | KAWA（架空） | `docs/examples/06-portfolio/` | 公開済み |

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

## 03 PRICING — 完了記録

- 参考サイト: Stripe の料金ページほか（構成・余白・配色・動きの設計を抽出。素材・コード・文言・ブランド未使用）
- 独自化: 架空ブランド「KOMOREBI」、架空の料金・機能。月払い／年払い切替は動作。フッターに架空明記
- 保存先: `docs/examples/03-pricing/index.html`（研究ノート `RESEARCH.md`）
- 公開URL: https://kyonhuo.github.io/nagiport-motion-kit/examples/03-pricing/
- 検証（Windows 上の Chrome ヘッドレス、2026-10-20）: 390 / 768 / 1440px で横はみ出しなし。14/14 合格（料金切替・比較表・FAQ・リンク全動作・reduced-motion・フォーム0・メールリンク0・外部リンク0）

## 04 FAQ — 完了記録

- 参考サイト: 海外スタジオ・SaaS の FAQ 構成（2026-10-20 調査。素材・コード・文言・ブランド未使用）
- 独自化: 架空ブランド「HOSHIZORA」、架空の質問6つ。二カラム＋固定見出し＋アコーディオン
- 保存先: `docs/examples/04-faq/index.html`（研究ノート `RESEARCH.md`）
- 公開URL: https://kyonhuo.github.io/nagiport-motion-kit/examples/04-faq/
- 検証（Windows 上の Chrome ヘッドレス、2026-10-20）: 390 / 768 / 1440px で横はみ出しなし。14/14 合格（アコーディオン・固定カラム・リンク全動作・reduced-motion・フォーム0・メールリンク0・外部リンク0）

## 05 CONTACT — 完了記録

- 参考サイト: Locomotive（モントリオールの制作所、2026-10-20 取得。素材・コード・文言・ブランド未使用）
- 独自化: 架空制作所「TSUKIGI STUDIO」、架空の住所・メール（.example 予約ドメイン）
- フォーム無効化: fieldset の disabled ＋ 各入力の disabled 属性 ＋ 送信無効。入力しても送信されないことを確認
- 保存先: `docs/examples/05-contact/index.html`（研究ノート `RESEARCH.md`）
- 公開URL: https://kyonhuo.github.io/nagiport-motion-kit/examples/05-contact/
- 検証（Windows 上の Chrome ヘッドレス、2026-10-20）: 390 / 768 / 1440px で横はみ出しなし。20/20 合格（フォーム無効・全入力無効・送信しても遷移しない・実在メール0・メールリンク0・外部リンク0・reduced-motion）

## 06 PORTFOLIO — 完了記録

- 参考サイト: Locomotive（モントリオールの制作所、2026-10-20 取得。素材・コード・文言・ブランド未使用）
- 独自化: 架空ブランド「KAWA」、架空の実績3点（三日月の湯／川上珈琲／夜空の図書館）
- 保存先: `docs/examples/06-portfolio/index.html`（研究ノート `RESEARCH.md`）
- 公開URL: https://kyonhuo.github.io/nagiport-motion-kit/examples/06-portfolio/
- 検証（Windows 上の Chrome ヘッドレス、2026-10-20）: 390 / 768 / 1440px で横はみ出しなし。14/14 合格（単語入れ替わり・実績ホバー・リンク全動作・reduced-motion・フォーム0・メールリンク0・外部リンク0）

## 全6作の公開完了

- 6種類すべてをトップの Templates カードから直接開ける形にしました
- 参考サイト: Linear・Vercel・Stripe・Locomotive（海外・変わったサイトを含み、多様な構成・配色・動き）
- 各作例は独自フォルダ・架空ブランド・架空文言。秘密情報・実在サービスへの誤誘導なし
- 既存34ページ・variants・frik-motion・ルート側は未変更。変更は docs/index.html のカードと docs/examples/ の追加のみ

## 次の作業

1. 必要であれば、作例の追加バリエーション（別参考サイト）を作成
2. トップの FAQ「スマホ対応していますか」の文言を実測値に更新（必要時）
3. 実機（iOS/Android・Safari）での確認は未実施（ヘッドレス Chrome のみ）

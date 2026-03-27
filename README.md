# Trylogue Homepage

Trylogue のホームページ用リポジトリです。  
静的なランディングページとして構成されており、サービス概要、特徴、アプリ導線、問い合わせ導線を 1 ページで案内します。

This repository contains the homepage for Trylogue.  
It is a static landing page that introduces the service, its features, app entry points, and contact information in a single page.

## 概要

- 対象: `Trylogue` の紹介サイト
- 構成: HTML / CSS / JavaScript のシンプルな静的サイト
- 主な内容: サービス紹介、特徴紹介、アプリ導線、問い合わせ導線
- 多言語切り替え: 日本語 / 英語

## Overview

- Purpose: a landing page for `Trylogue`
- Stack: a simple static site built with HTML, CSS, and JavaScript
- Main content: service introduction, feature highlights, app links, and contact information
- Language switch: Japanese / English

## 公開ページ

- URL: `https://trylogue.github.io/trylogue-homepage/`

## Live URL

- URL: `https://trylogue.github.io/trylogue-homepage/`

## ファイル構成

- `index.html`
  ホームページ本体です。セクション構成、メタ情報、表示内容の中心を持ちます。

- `script.js`
  スムーズスクロールと言語切り替えの処理を担当します。

- `style.css`
  サイト全体のスタイル定義です。
  現在は `index.html` 内にもスタイル定義があり、将来的にはどちらかに寄せる整理余地があります。

- `Cromo-icon.png`
  アプリ導線で使用しているアイコン画像です。

- `michilog-icon.png`
  アプリ導線で使用しているアイコン画像です。

## File Structure

- `index.html`  
  The main homepage file. It contains the page structure, metadata, and most displayed content.

- `script.js`  
  Handles smooth scrolling and language switching.

- `style.css`  
  Contains the site-wide stylesheet.  
  There are also inline styles inside `index.html`, so future cleanup could consolidate styles into one place.

- `Cromo-icon.png`  
  App icon image used in the app links section.

- `michilog-icon.png`  
  App icon image used in the app links section.

## ローカル確認方法

特別なビルドは不要です。  
`index.html` をブラウザで開くだけで確認できます。

例:

```bash
open index.html
```

簡易サーバーで確認したい場合:

```bash
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` ゚開いて確認してください。

## Local Preview

No build step is required.  
You can preview the site by simply opening `index.html` in a browser.

Example:

```bash
open index.html
```

If you prefer using a simple local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## 更新時のポイント

- 文言を変更する場合: 表示テキストは主に `index.html` と `script.js` の翻訳辞書を確認します。
- デザインを変更する場合: `index.html` 内の `<style>` と `style.css` の両方にスタイルが存在するため、重複や競合に注意します。
- アプリ導線を変更する場合: アイコン画像、リンク先、アプリ名の表記をセットで確認します。

## Notes for Updates

- When updating copy: check both `index.html` and the translation dictionary in `script.js`.
- When updating design: be aware that styles currently exist in both the inline `<style>` block in `index.html` and in `style.css`.
- When updating app links: review the icon image, destination URL, and displayed app name together.

## 今後の改善候補

- スタイル定義を `style.css` に統一する
- 翻訳対象を整理して多言語文言の管理を明確にする
- 公開手順やデプロイ先が固まっている場合は README に追記する

## Possible Improvements

- Consolidate all styles into `style.css`
- Clarify how multilingual copy is managed
- Add deployment and publishing steps once the hosting flow is fixed

## License

必要に応じて追記してください。

Add a license here if needed.

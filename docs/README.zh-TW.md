
<img src="./images/1131.png" width = "405" height = "511" alt="NapCat" align=right />

<div align="center">

# Firefly
> 一款清新美觀的 Astro 部落格主題模板
> 
> ![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)
![Astro](https://img.shields.io/badge/Astro-5.16.3-orange)
</div>


---
🚀 快速指南：
[**🖥️線上預覽**](https://firefly.cuteleaf.cn/) /
[**📝使用文檔**](https://docs-firefly.cuteleaf.cn/) /
[**🍀我的部落格**](https://blog.cuteleaf.cn) 

📖 README：
**[简体中文](../README.md)** | **[繁體中文](README.zh-TW.md)** | **[English](../README.en.md)** | **[日本語](README.ja.md)** | **[Русский](README.ru.md)**

⚡ 靜態站點生成: 基於Astro的超快載入速度和SEO優化

🎨 現代化設計: 簡潔美觀的介面，支援自訂主題色

📱 行動裝置友善: 完美的響應式體驗，行動端專項優化

🔧 高度可配置: 大部分功能模組均可透過配置檔案自訂

<img alt="firefly" src="./images/1.webp" />

>[!TIP]
>在重要的版面配置上，Firefly創新性地增加了左右雙側邊欄、文章網格(雙列)版面配置，
>
>增加了站點統計、日曆元件、文章目錄等小元件，讓側邊欄更加豐富，
>
>同時也保留了 Furwai 的版面配置系統，可在配置檔案中自由切換。
>
>**更多版面配置及示範請查看：[Firefly 版面配置系統詳解](https://firefly.cuteleaf.cn/posts/firefly-layout-system/)**

## ✨ 功能特性

### 核心功能

- [x] **Astro + Tailwind CSS** - 基於現代技術堆疊的超快靜態站點生成
- [x] **流暢動畫** - Swup 頁面過渡動畫，提供絲滑的瀏覽體驗
- [x] **響應式設計** - 完美適配桌面端、平板和行動裝置
- [x] **多語言支援** - i18n 國際化，支援簡體中文、繁體中文、英文、日文、俄語
- [x] **全文搜尋** - 基於 Pagefind 的客戶端搜尋，支援文章內容索引。同時支援 MeiliSearch 搜尋引擎

### 個性化
- [x] **側邊欄** - 支援配置單側邊欄、雙側邊欄，支援前台自由切換
- [x] **文章版面配置** - 支援配置(單列)列表、網格(二列)版面配置，支援前台自由切換
- [x] **字型管理** - 支援自訂字型，豐富的字型選擇器
- [x] **頁尾配置** - HTML 內容注入，完全自訂
- [x] **導覽列自訂** - Logo、標題、連結全面自訂
- [x] **桌布模式切換** - 橫幅桌布、全螢幕桌布、純色背景，支援前台自由切換
- [x] **主題色自訂** - 360° 色相調節，支援亮色/暗色/跟隨系統三種模式，支援前台自由切換

### 頁面元件
- [x] **留言板** - 支援留言頁面，整合留言系統
- [x] **公告欄** - 頂部公告提示，支援關閉和自訂樣式
- [x] **看板娘** - 支援 Spine 和 Live2D 兩種動畫引擎
- [x] **站點統計** - 顯示文章、分類、標籤數目、文章總字數、執行時長、最後更新時間
- [x] **站點日曆** - 顯示當月日曆，以及當月的發布文章
- [x] **贊助頁面** - 多種支付方式、收款碼展示、贊助者列表、文章內贊助按鈕
- [x] **櫻花特效** - 支援櫻花特效，全螢幕櫻花效果
- [x] **友情連結** - 精美的友鏈展示卡片
- [x] **廣告元件** - 支援自訂側邊欄廣告內容
- [x] **番組計畫** - 基於 Bangumi API 的追番和遊戲記錄展示
- [x] **留言系統** - 整合 Twikoo、Waline、Giscus、Disqus、Artalk 留言系統
- [x] **訪問量統計** - 支援呼叫 Waline、Twikoo 自帶的訪問量追蹤
- [x] **音樂播放器** - 基於 APlayer，支援本地音樂和 Meting API 線上音樂

### 內容增強
- [x] **圖片燈箱** - Fancybox 圖片預覽功能
- [x] **浮動目錄** - 動態顯示文章目錄，支援錨點跳轉，在側邊欄目錄隱藏後顯示
- [x] **信箱保護** - 讓自動化爬蟲程式無法直接爬取信箱地址，避免垃圾郵件騷擾
- [x] **側邊欄目錄** - 動態顯示文章目錄，支援錨點跳轉
- [x] **增強程式碼區塊** - 基於 Expressive Code，支援程式碼摺疊、行號、語言標識
- [x] **數學公式支援** - KaTeX 渲染引擎，支援行內和區塊級公式
- [x] **Markdown擴充** - [Markdown extended features](https://github.com/saicaca/fuwari?tab=readme-ov-file#-markdown-extended-syntax)
- [x] **文章隨機封面圖** - 支援透過 API 獲取隨機封面圖

### SEO
- [x] **SEO 優化** - 完整的 meta 標籤和結構化資料
- [x] **RSS 訂閱** - 自動生成 RSS Feed
- [x] **站點地圖** - 自動生成 XML Sitemap，支援頁面篩選配置


## 📝計畫中...

- [ ] **重構 Live2D 看板娘**
- [ ] **優化網格版面配置的文章封面**
- [ ] **持續優化動畫流暢度**
- [ ] 更多功能持續完善中...

如果你有好用的功能和優化，請提交 [Pull Request](https://github.com/CuteLeaf/Firefly/pulls)

## 🚀 快速開始

### 環境要求

- Node.js ≤ 22
- pnpm ≤ 9

### 本地開發部署

1. **克隆儲存庫：**
   ```bash
   git clone https://github.com/Cuteleaf/Firefly.git
   cd Firefly
   ```
   **先 [Fork](https://github.com/CuteLeaf/Firefly/fork) 到自己儲存庫再克隆（推薦）**
   ```bash
   git clone https://github.com/you-github-name/Firefly.git
   cd Firefly
   ```
3. **安裝依賴：**
   ```bash
   # 如果沒有安裝 pnpm，先安裝
   npm install -g pnpm
   
   # 安裝專案依賴
   pnpm install
   ```

4. **配置部落格：**
   - 編輯 `src/config/` 目錄下的配置檔案自訂部落格設定

5. **啟動開發伺服器：**
   ```bash
   pnpm dev
   ```
   部落格將在 `http://localhost:4321` 可用

### 平台託管部署
- **參考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)將部落格部署至 Vercel, Netlify, GitHub Pages, Cloudflare Pages, EdgeOne Pages 等。**

   框架預設： `Astro`

   根目錄： `./`

   輸出目錄： `dist`

   建置命令： `pnpm run build`

   安裝命令： `pnpm install`

## 📖 配置說明

> 📚 **詳細配置文檔**: 查看 [Firefly使用文檔](https://docs-firefly.cuteleaf.cn/) 獲取完整的配置指南

### 設定網站語言

要設定部落格的預設語言，請編輯 `src/config/siteConfig.ts` 檔案：

```typescript
// 定義站點語言
const SITE_LANG = "zh_CN";
```

**支援的語言代碼：**
- `zh_CN` - 簡體中文
- `zh_TW` - 繁體中文
- `en` - 英文
- `ja` - 日文
- `ru` - 俄文


### 配置檔案結構

```
src/
├── config/
│   ├── index.ts              # 配置索引檔案
│   ├── siteConfig.ts         # 站點基礎配置
│   ├── profileConfig.ts      # 使用者資料配置
│   ├── commentConfig.ts      # 留言系統配置
│   ├── announcementConfig.ts # 公告配置
│   ├── licenseConfig.ts      # 授權配置
│   ├── footerConfig.ts       # 頁尾配置
│   ├── footer-content.html   # 頁尾 HTML 內容
│   ├── expressiveCodeConfig.ts # 程式碼高亮配置
│   ├── sakuraConfig.ts       # 櫻花特效配置
│   ├── fontConfig.ts         # 字型配置
│   ├── sidebarConfig.ts      # 側邊欄版面配置配置
│   ├── navBarConfig.ts       # 導覽列配置
│   ├── musicConfig.ts        # 音樂播放器配置
│   ├── pioConfig.ts          # 看板娘配置
│   ├── adConfig.ts           # 廣告配置
│   ├── friendsConfig.ts      # 友鏈配置
│   ├── sponsorConfig.ts      # 贊助配置
│   └── coverImageConfig.ts   # 文章隨機封面圖配置
```


## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # 或使用 "api" 來啟用隨機封面圖
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # 僅當文章語言與 `siteConfig.ts` 中的網站語言不同時需要設定
---
```

## 🧞 指令

下列指令均需要在專案根目錄執行：

| Command                           | Action                            |
|:----------------------------------|:----------------------------------|
| `pnpm install` 並 `pnpm add sharp` | 安裝依賴                              |
| `pnpm dev`                        | 在 `localhost:4321` 啟動本地開發伺服器      |
| `pnpm build`                      | 建置網站至 `./dist/`                   |
| `pnpm preview`                    | 本地預覽已建置的網站                        |
| `pnpm new-post <filename>`        | 建立新文章                             |
| `pnpm astro ...`                  | 執行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`               | 顯示 Astro CLI 說明                   |

## 🙏 致謝

- 非常感謝 [saicaca](https://github.com/saicaca) 開發的 [Fuwari](https://github.com/saicaca/fuwari) 模板，Firefly 就是基於這個模板二次開發
- 參考了部落格主 [霞葉](https://kasuha.com) 分享的 [Bangumi 收藏展示頁面方案](https://kasuha.com/posts/fuwari-enhance-ep2/)
- 參考了 [Mizuki](https://github.com/matsuzaka-yuki/Mizuki) 的橫幅標題/多級選單導覽列/櫻花特效/KaTeX/Fancybox方案
- 使用了 [Astro](https://astro.build) 和 [Tailwind CSS](https://tailwindcss.com) 建置
- 使用了 [MetingJS](https://github.com/metowolf/MetingJS) 和 [APlayer](https://github.com/MoePlayer/APlayer) 音樂播放器
- 使用了b站up [公公的日常](https://space.bilibili.com/3546750017080050) 提供的Q版 `流螢` 看板娘切片資料模型
- 圖示來自 [Iconify](https://iconify.design/)
- 流螢部分相關圖片素材版權歸遊戲 [《崩壞：星穹鐵道》](https://sr.mihoyo.com/) 開發商 [米哈遊](https://www.mihoyo.com/) 所有。

## 🍀 貢獻者

感謝以下貢獻者對本專案做出的貢獻，如有問題或建議，請提交 [Issue](https://github.com/CuteLeaf/Firefly/issues) 或 [Pull Request](https://github.com/CuteLeaf/Firefly/pulls)。

<a href="https://github.com/CuteLeaf/Firefly/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=CuteLeaf/Firefly" />
</a>

![Alt](https://repobeats.axiom.co/api/embed/6139639d8e88da4d3dc9d45fd43f4e4b2d580086.svg "Repobeats analytics image")

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=CuteLeaf/Firefly&type=Date)](https://star-history.com/#CuteLeaf/Firefly&Date)


<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


<img src="./docs/images/1131.png" width = "405" height = "511" alt="NapCat" align=right />

<div align="center">

# Firefly
> 一款清新美观的 Astro 博客主题模板
> 
> ![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)
![Astro](https://img.shields.io/badge/Astro-5.16.3-orange)
</div>


---
🚀 快速指南：
[**🖥️在线预览**](https://firefly.cuteleaf.cn/) /
[**📝使用文档**](https://docs-firefly.cuteleaf.cn/) /
[**🍀我的博客**](https://blog.cuteleaf.cn) 

📖 README：
**[简体中文](README.md)** | **[English](README.en.md)** | **[日本語](docs/README.ja.md)** | **[Русский](docs/README.ru.md)**

⚡ 静态站点生成: 基于Astro的超快加载速度和SEO优化

🎨 现代化设计: 简洁美观的界面，支持自定义主题色

📱 移动友好: 完美的响应式体验，移动端专项优化

🔧 高度可配置: 大部分功能模块均可通过配置文件自定义

<img alt="firefly" src="./docs/images/1.webp" />

>[!TIP]
>在重要的布局上，Firefly 创新性地增加了左右双侧边栏、文章网格(双列)布局，
>
>增加了站点统计、日历组件、文章目录等小组件，让侧边栏更加丰富，
>
>同时也保留了 Furwai 的布局，可在配置文件中自由切换。
>
>**更多布局配置及演示请查看：[Firefly 布局系统详解](https://firefly.cuteleaf.cn/posts/firefly-layout-system/)**

## ✨ 功能特性

### 核心功能

- [x] **Astro + Tailwind CSS** - 基于现代技术栈的超快静态站点生成
- [x] **流畅动画** - Swup 页面过渡动画，提供丝滑的浏览体验
- [x] **响应式设计** - 完美适配桌面端、平板和移动设备
- [x] **多语言支持** - i18n 国际化，支持简体中文、繁体中文、英文、日文、俄语
- [x] **全文搜索** - 基于 Pagefind 的客户端搜索，支持文章内容索引。同时支持 MeiliSearch 搜索引擎

### 个性化
- [x] **侧边栏** - 支持配置单侧边栏、双侧边栏，支持前台自由切换
- [x] **文章布局** - 支持配置(单列)列表、网格(二列)布局，支持前台自由切换
- [x] **字体管理** - 支持自定义字体，丰富的字体选择器
- [x] **页脚配置** - HTML 内容注入，完全自定义
- [x] **导航栏自定义** - Logo、标题、链接全面自定义
- [x] **壁纸模式切换** - 横幅壁纸、全屏壁纸、纯色背景，支持前台自由切换
- [x] **主题色自定义** - 360° 色相调节，支持亮色/暗色/跟随系统三种模式，支持前台自由切换

### 页面组件
- [x] **留言板** - 支持留言页面，集成评论系统
- [x] **公告栏** - 顶部公告提示，支持关闭和自定义样式
- [x] **看板娘** - 支持 Spine 和 Live2D 两种动画引擎
- [x] **站点统计** - 显示文章、分类、标签数目、文章总字数、运行时长、最后更新时间
- [x] **站点日历** - 显示当月日历，以及当月的发布文章
- [x] **赞助页面** - 多种支付方式、收款码展示、赞助者列表、文章内赞助按钮
- [x] **樱花特效** - 支持樱花特效，全屏樱花效果
- [x] **友情链接** - 精美的友链展示卡片
- [x] **广告组件** - 支持自定义侧边栏广告内容
- [x] **番组计划** - 基于 Bangumi API 的追番和游戏记录展示
- [x] **评论系统** - 集成 Twikoo、Waline、Giscus、Disqus、Artalk 评论系统
- [x] **访问量统计** - 支持调用 Waline、Twikoo 自带的访问量追踪
- [x] **音乐播放器** - 基于 APlayer，支持本地音乐和 Meting API 在线音乐

### 内容增强
- [x] **图片灯箱** - Fancybox 图片预览功能
- [x] **浮动目录** - 动态显示文章目录，支持锚点跳转，在侧边栏目录隐藏后显示
- [x] **邮箱保护** - 让自动化爬虫程序无法直接爬到邮箱地址，被垃圾邮件骚扰
- [x] **侧边栏目录** - 动态显示文章目录，支持锚点跳转
- [x] **增强代码块** - 基于 Expressive Code，支持代码折叠、行号、语言标识
- [x] **数学公式支持** - KaTeX 渲染引擎，支持行内和块级公式
- [x] **Markdown扩展** - [Markdown extended features](https://github.com/saicaca/fuwari?tab=readme-ov-file#-markdown-extended-syntax)
- [x] **文章随机封面图** - 支持通过 API 获取随机封面图

### SEO
- [x] **SEO 优化** - 完整的 meta 标签和结构化数据
- [x] **RSS 订阅** - 自动生成 RSS Feed
- [x] **站点地图** - 自动生成 XML Sitemap，支持页面过滤配置


## 📝计划中...

- [ ] **重构 Live2D 看板娘**
- [ ] **优化网格布局的文章封面**
- [ ] **持续优化动画流畅度**
- [ ] 更多功能持续完善中...

如果你有好用的功能和优化，请提交 [Pull Request](https://github.com/CuteLeaf/Firefly/pulls)

## 🚀 快速开始

### 环境要求

- Node.js ≤ 22
- pnpm ≤ 9

### 本地开发部署

1. **克隆仓库：**
   ```bash
   git clone https://github.com/Cuteleaf/Firefly.git
   cd Firefly
   ```
   **先 [Fork](https://github.com/CuteLeaf/Firefly/fork) 到自己仓库在克隆（推荐）**
   ```bash
   git clone https://github.com/you-github-name/Firefly.git
   cd Firefly
   ```
3. **安装依赖：**
   ```bash
   # 如果没有安装 pnpm，先安装
   npm install -g pnpm
   
   # 安装项目依赖
   pnpm install
   ```

4. **配置博客：**
   - 编辑 `src/config/` 目录下的配置文件自定义博客设置

5. **启动开发服务器：**
   ```bash
   pnpm dev
   ```
   博客将在 `http://localhost:4321` 可用

### 平台托管部署
- **参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages, Cloudflare Pages, EdgeOne Pages 等。**

   框架预设： `Astro`

   根目录： `./`

   输出目录： `dist`

   构建命令： `pnpm run build`

   安装命令： `pnpm install`


## 📖 配置说明

> 📚 **详细配置文档**: 查看 [Firefly使用文档](https://docs-firefly.cuteleaf.cn/) 获取完整的配置指南

### 设置网站语言

要设置博客的默认语言，请编辑 `src/config/siteConfig.ts` 文件：

```typescript
// 定义站点语言
const SITE_LANG = "zh_CN";
```

**支持的语言代码：**
- `zh_CN` - 简体中文
- `zh_TW` - 繁体中文
- `en` - 英文
- `ja` - 日文
- `ru` - 俄文


### 配置文件结构

```
src/
├── config/
│   ├── index.ts              # 配置索引文件
│   ├── siteConfig.ts         # 站点基础配置
│   ├── profileConfig.ts      # 用户资料配置
│   ├── commentConfig.ts      # 评论系统配置
│   ├── announcementConfig.ts # 公告配置
│   ├── licenseConfig.ts      # 许可证配置
│   ├── footerConfig.ts       # 页脚配置
│   ├── footer-content.html   # 页脚 HTML 内容
│   ├── expressiveCodeConfig.ts # 代码高亮配置
│   ├── sakuraConfig.ts       # 樱花特效配置
│   ├── fontConfig.ts         # 字体配置
│   ├── sidebarConfig.ts      # 侧边栏布局配置
│   ├── navBarConfig.ts       # 导航栏配置
│   ├── musicConfig.ts        # 音乐播放器配置
│   ├── pioConfig.ts          # 看板娘配置
│   ├── adConfig.ts           # 广告配置
│   ├── friendsConfig.ts      # 友链配置
│   ├── sponsorConfig.ts      # 赞助配置
│   └── coverImageConfig.ts  # 文章随机封面图配置
```


## ⚙️ 文章 Frontmatter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg  # 或使用 "api" 来启用随机封面图
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN      # 仅当文章语言与 `siteConfig.ts` 中的网站语言不同时需要设置
---
```

## 🧞 指令

下列指令均需要在项目根目录执行：

| Command                           | Action                            |
|:----------------------------------|:----------------------------------|
| `pnpm install` 并 `pnpm add sharp` | 安装依赖                              |
| `pnpm dev`                        | 在 `localhost:4321` 启动本地开发服务器      |
| `pnpm build`                      | 构建网站至 `./dist/`                   |
| `pnpm preview`                    | 本地预览已构建的网站                        |
| `pnpm new-post <filename>`        | 创建新文章                             |
| `pnpm astro ...`                  | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`               | 显示 Astro CLI 帮助                   |

## 🙏 致谢

- 非常感谢 [saicaca](https://github.com/saicaca) 开发的 [Fuwari](https://github.com/saicaca/fuwari) 模板，Firefly 就是基于这个模板二次开发
- 参考了博主 [霞葉](https://kasuha.com) 分享的 [Bangumi 收藏展示](https://kasuha.com/posts/fuwari-enhance-ep2/) 和 [邮箱保护/图片标题](https://kasuha.com/posts/fuwari-enhance-ep1/) 方案
- 参考了 [Mizuki](https://github.com/matsuzaka-yuki/Mizuki) 的横幅标题/多级菜单导航栏/樱花特效/KaTeX/Fancybox方案
- 使用了 [Astro](https://astro.build) 和 [Tailwind CSS](https://tailwindcss.com) 构建
- 使用了 [MetingJS](https://github.com/metowolf/MetingJS) 和 [APlayer](https://github.com/MoePlayer/APlayer) 音乐播放器
- 使用了b站up [公公的日常](https://space.bilibili.com/3546750017080050) 提供的Q版 `流萤` 看板娘切片数据模型
- 图标来自 [Iconify](https://iconify.design/)
- 流萤部分相关图片素材版权归游戏 [《崩坏：星穹铁道》](https://sr.mihoyo.com/) 开发商 [米哈游](https://www.mihoyo.com/) 所有。

## 🍀 贡献者

感谢以下贡献者对本项目做出的贡献，如有问题或建议，请提交 [Issue](https://github.com/CuteLeaf/Firefly/issues) 或 [Pull Request](https://github.com/CuteLeaf/Firefly/pulls)。

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

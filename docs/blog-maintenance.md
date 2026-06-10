# Firefly 博客维护指南

本文档面向日常写作和站点配置维护。项目代码结构请参考 [项目结构](./project-structure.md)。

## 新增文章

### 推荐目录

每篇新文章使用独立目录：

```text
src/content/posts/
└── <section>/
    └── <article-slug>/
        ├── index.md
        ├── cover.webp
        └── diagram.webp
```

规则：

- `<section>` 使用下表中的英文目录名；页面显示名称由 frontmatter 的 `category` 决定。
- `<article-slug>` 使用小写英文、数字和连字符。
- 文章图片与文章放在同一目录，便于迁移和删除。
- `index.md` 会映射为文章目录本身，例如
  `projects/chart-genius/index.md` 对应 `/posts/projects/chart-genius/`。

### 板块分类

个人文章使用以下六个长期板块：

| 显示分类 | 内容范围 | 目录 |
| --- | --- | --- |
| `格物录` | 数学、电路、信号等理论与课程笔记 | `theory/` |
| `技术札记` | Linux、编程、EDA 工具和调试经验 | `tech/` |
| `造物志` | 项目设计、实现、测试与复盘 | `projects/` |
| `观潮集` | 论文阅读、行业观察与前沿技术 | `insights/` |
| `浮光记` | 摄影、设计、书影音与生活作品 | `visuals/` |
| `碎碎念` | 建站日志、阶段总结和随笔 | `essays/` |

`examples/firefly/` 是主题功能示例区，统一使用分类 `主题文档` 并保持
`draft: true`，不属于个人博客的六个正式板块。

分类规则：

- 每篇文章只设置一个 `category`，避免近义分类并存。
- `category` 使用上表中的固定中文名称，不使用目录名或中英混合名称。
- `tags` 用于更细的主题，例如 `数学`、`常微分方程`、`Astro`。
- 不要把分类名称重复写入标签，除非它本身也是有检索价值的主题。

可以用脚本创建模板：

```bash
pnpm new-post tech/my-article/index
```

脚本会生成 `src/content/posts/tech/my-article/index.md`。生成后必须修改
`title`、`category`、`tags` 等字段。

### Frontmatter

最小推荐模板：

```yaml
---
title: 文章标题
published: 2026-06-09
updated: 2026-06-10
description: 文章摘要
pinned: false
tags: [Astro, TypeScript]
category: 技术札记
draft: true
image: ./cover.webp
lang: zh_CN
---
```

支持字段：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 页面标题和搜索标题 |
| `published` | 是 | 发布日期，格式 `YYYY-MM-DD` |
| `updated` | 否 | 最后更新日期 |
| `description` | 否 | 列表、SEO 和 RSS 摘要 |
| `pinned` | 否 | `true` 时在列表中置顶 |
| `tags` | 否 | 标签数组 |
| `category` | 否 | 页面显示的文章分类 |
| `draft` | 否 | `true` 时生产构建不发布 |
| `image` | 否 | `./cover.webp`、公开 URL、`api` 或空字符串 |
| `lang` | 否 | 与站点默认语言一致时可留空 |
| `author` | 否 | 覆盖默认作者 |
| `sourceLink` | 否 | 原文链接 |
| `licenseName` | 否 | 覆盖默认许可证名称 |
| `licenseUrl` | 否 | 覆盖默认许可证链接 |

`prevTitle`、`prevSlug`、`nextTitle`、`nextSlug` 是内部字段，由文章排序逻辑维护，不要在文章中手工填写。

### 图片写法

文章同目录图片：

```markdown
![说明文字](./diagram.webp)
```

站点公共图片：

```markdown
![说明文字](/assets/images/example.webp)
```

封面使用随机图片 API：

```yaml
image: api
```

随机封面服务与 fallback 在 `src/config/coverImageConfig.ts` 配置。

## 特殊页面

不需要新增 Astro 路由时，直接修改以下 Markdown：

| 页面 | 内容文件 |
| --- | --- |
| 关于 | `src/content/spec/about.md` |
| 友情链接说明 | `src/content/spec/friends.md` |
| 留言板说明 | `src/content/spec/guestbook.md` |

友情链接数据本身位于 `src/config/friendsConfig.ts`。

## 常用配置

| 需要修改的内容 | 文件 |
| --- | --- |
| 站点标题、描述、语言、网址 | `src/config/siteConfig.ts` |
| favicon、导航 Logo、壁纸 | `src/config/siteConfig.ts` |
| 页面开关、分页、文章列表布局 | `src/config/siteConfig.ts` |
| 作者名、头像、简介、社交链接 | `src/config/profileConfig.ts` |
| 导航菜单和搜索方式 | `src/config/navBarConfig.ts` |
| 左右侧栏和小部件顺序 | `src/config/sidebarConfig.ts` |
| 评论服务 | `src/config/commentConfig.ts` |
| 公告内容 | `src/config/announcementConfig.ts` |
| 音乐播放器 | `src/config/musicConfig.ts` |
| Live2D、Spine 看板娘 | `src/config/pioConfig.ts` |
| 樱花特效 | `src/config/sakuraConfig.ts` |
| 字体 | `src/config/fontConfig.ts` |
| 许可证 | `src/config/licenseConfig.ts` |
| 友情链接 | `src/config/friendsConfig.ts` |
| 赞助方式和赞助者 | `src/config/sponsorConfig.ts` |
| 广告 | `src/config/adConfig.ts` |
| 代码块主题 | `src/config/expressiveCodeConfig.ts` |
| 自定义页脚开关 | `src/config/footerConfig.ts` |
| 自定义页脚内容 | `src/config/footer-content.html` |

修改页面开关后，还应检查导航菜单是否符合预期；Sitemap 会根据页面开关自动过滤。

## 公共资源

常用位置：

```text
public/assets/images/          # 头像、Logo、壁纸和通用图片
public/assets/images/sponsor/  # 赞助二维码
public/assets/music/           # 本地音乐
public/assets/music/cover/     # 音乐封面
public/pio/                    # 看板娘 SDK 和模型
```

注意：

- `public/` 下文件名就是线上 URL 的一部分，已发布后不要随意改名。
- 不要直接编辑 `*.min.js`、`*.min.css`、source map 或模型二进制文件。
- 新资源加入后，用 `rg "文件名"` 确认旧资源是否仍被引用，再决定是否删除。

## 本地运行

安装环境：

```bash
nvm use
corepack enable
pnpm install --frozen-lockfile
```

开发与实时预览：

```bash
pnpm dev
```

默认访问 `http://localhost:4321`。保存文章或源码后会自动更新。

局域网访问：

```bash
pnpm dev --host
```

## 发布前检查

依次运行：

```bash
pnpm type-check
pnpm check
pnpm exec biome ci ./src
pnpm build
```

确认：

1. 新文章的 `draft` 已按发布意图设置。
2. 标题、摘要、日期、分类和标签正确。
3. 封面与正文图片无 404。
4. 桌面端和移动端页面显示正常。
5. `pnpm build` 成功，并显示 Pagefind 已完成索引。
6. `git status --short` 中没有 `dist/`、`.astro/` 或其他生成文件。

## 常见操作

创建文章：

```bash
pnpm new-post tech/my-article/index
```

预览生产构建：

```bash
pnpm build
pnpm preview
```

手动更新 MeiliSearch：

```bash
MEILI_MASTER_KEY=<master-key> pnpm index:meili
```

Pagefind 会在普通 `pnpm build` 完成后自动生成，不需要单独执行。

# AGENTS.md

本文档面向在本仓库工作的 AI Agent。开始修改前先阅读相关源码和配置；以仓库当前实现为准，不要仅凭 README 或通用 Astro 经验推断行为。

## 项目概览

Firefly 是一个静态 Astro 博客与主题项目，主要技术栈如下：

- Astro 5、TypeScript、Svelte 5
- Tailwind CSS 3、PostCSS、Stylus
- Astro Content Collections
- Swup 页面切换
- Expressive Code、Remark/Rehype Markdown 插件
- Pagefind 或 MeiliSearch 搜索
- Biome 格式化与静态检查
- Node.js 22、pnpm 9

网站采用静态生成，部署产物位于 `dist/`。构建阶段可能访问 Bangumi API、生成 OG 图片或建立搜索索引，具体取决于配置。

## 目录职责

- `src/pages/`：Astro 文件路由。文章路由是 `src/pages/posts/[...slug].astro`。
- `src/layouts/`：全局 HTML、导航、壁纸、侧边栏和主内容布局。
- `src/components/`：按 `layout`、`interactive`、`content`、`common`、`widget`、`misc`、`comment`、`pages`、`effects` 分类。
- `src/config/`：用户可编辑的主题配置。新增或修改配置时同步维护类型与统一导出。
- `src/types/config.ts`：配置和公共数据结构的主要类型定义。
- `src/content/posts/`：博客文章及文章局部资源。
- `src/content/spec/`：About、Friends、Guestbook 等特殊页面的 Markdown 内容。
- `src/content.config.ts`：Content Collections schema，是文章 frontmatter 的权威定义。
- `src/utils/`：内容、URL、布局、响应式、设置和浏览器行为等共享逻辑。
- `src/plugins/`：Remark、Rehype、Mermaid 和 Expressive Code 扩展。
- `src/i18n/`：翻译键、翻译入口和语言文件。
- `src/styles/`：全局 CSS、Stylus 和功能样式。
- `public/`：原样复制到输出目录的静态资源。
- `public/pio/`：Live2D/Spine 运行库、模型和媒体资源；体积大且包含第三方或二进制文件。
- `scripts/`：维护脚本，包括文章模板创建和 MeiliSearch 索引。
- `astro.config.mjs`：Astro integrations、Markdown 管线、Sitemap、Swup 和构建设置。

## 实现规则

### 组件与客户端代码

- 静态渲染优先使用 `.astro`；只有需要持久客户端状态或复杂交互时才使用 Svelte。
- Svelte 组件遵循 Svelte 5 现有写法，包括 `Snippet` 和 `{@render}`。不要引入 React 组件或另一套状态框架。
- 使用现有路径别名，例如 `@/`、`@components/`、`@utils/`、`@layouts/` 和 `@i18n/`。
- 优先复用 `src/components/common/` 与现有 CSS utility/class，不要为单一调用创建重复基础组件。
- 使用 `client:load`、`client:only` 等 hydration 指令前评估首屏成本；归档页已有 `client:only="svelte"` 的先例。
- 页面导航由 Swup 接管。涉及 DOM 查询、事件监听、第三方脚本或组件重初始化时，必须同时考虑首次加载和 Swup 页面切换，避免重复监听及重复实例。
- 浏览器 API、`window`、`document` 和 `localStorage` 只能在客户端执行路径中使用。

### 配置与类型

- 配置通常从 `src/config/index.ts` 统一导入；新增配置项时同步更新：
  1. 对应的 `src/config/*.ts`
  2. `src/types/config.ts`
  3. `src/config/index.ts` 的类型或值导出
  4. 所有依赖该配置的默认值和分支
- 不要在组件中复制站点配置常量。布局、页面开关、壁纸、侧边栏和搜索行为均应读取现有配置对象。
- 页面开关还会影响路由行为和 Sitemap；修改 `siteConfig.pages` 相关能力时检查两者。
- 保持配置默认值向后兼容。可选字段在消费端应有明确 fallback。

### 内容与 Markdown

- 文章必须满足 `src/content.config.ts` 中的 schema。核心 frontmatter 示例：

```yaml
---
title: Example
published: 2026-01-01
description: ""
image: ""
tags: []
category: ""
draft: false
lang: ""
---
```

- `published` 和 `updated` 应使用 YAML 可解析日期；生产构建会排除 `draft: true`，开发模式仍会显示草稿。
- `image: api` 会启用随机封面逻辑；相对图片可与文章放在同一目录。
- 文章排序、置顶及上一篇/下一篇关系集中在 `src/utils/content-utils.ts`，不要在页面中另建排序规则。
- 修改 Markdown 语法或输出 DOM 时，同时检查 `astro.config.mjs` 中 Remark/Rehype 插件顺序、文章样式、目录生成、Pagefind 标记和 RSS 输出。
- 新文章可使用 `pnpm new-post <path/name>` 创建；执行前确认目标文件不存在。

### 样式与响应式布局

- Tailwind 扫描 `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}`，暗色模式由 `.dark` class 控制。
- 优先使用现有 CSS 变量，如 `--primary`、`--page-bg`、`--radius-large`，并同时验证亮色和暗色主题。
- 布局支持单侧栏、双侧栏、列表/网格及多种壁纸模式。修改布局时至少检查桌面、平板和移动端，以及首页和非首页。
- 响应式侧边栏计算集中在 `src/utils/responsive-utils.ts`；不要在页面中硬编码另一套列宽规则。
- 全局布局文件较大。修改 `src/layouts/Layout.astro` 或 `MainGridLayout.astro` 时应限制改动范围，避免顺带重排或格式化整文件。

### 搜索、RSS 与构建行为

- `astro:build:done` 会运行搜索索引器。
- Pagefind 模式通过项目本地模块 API 索引 `dist/`；开发模式下 Pagefind 搜索不可用属于预期行为。
- MeiliSearch 模式需要 `MEILI_MASTER_KEY`，公开搜索地址和 key 来自导航搜索配置。不要提交真实私钥。
- `siteConfig.generateOgImages` 会显著增加构建时间；除非任务明确要求，不要为了验证临时开启。
- Bangumi 数据在构建时获取；开发模式只取有限数据。涉及外部 API 的失败应与本地代码错误区分。

## 静态资源规则

- 不要手工编辑已压缩的第三方文件，例如 `*.min.js`、`*.min.css`、source map、Live2D SDK。
- 不要无理由重编码、替换或批量格式化图片、音频、模型与 Spine/Live2D 文件。
- 新增静态站点资源通常放在 `public/assets/`；与单篇文章绑定的资源放在对应文章目录。
- 删除资源前先用 `rg` 搜索配置、Markdown、CSS 和组件引用。
- 保留文件名大小写和非 ASCII 名称；部署环境区分大小写。

## 编码规范

- TypeScript、Astro 和 Svelte 使用 tab 缩进、双引号，遵循 `biome.json`。
- 优先使用明确类型和现有类型定义，不使用无必要的 `any`、类型断言或重复接口。
- 注释只解释不直观的约束、兼容原因或生命周期问题，不复述代码。
- 面向用户的新增文本应接入 `src/i18n/`，并同步维护全部现有语言文件；不要只在组件内硬编码一种语言。
- URL 应通过 `src/utils/url-utils.ts` 的现有 helper 处理，以兼容 `BASE_URL` 和尾斜杠约定。
- 图标优先使用项目现有的 Iconify/`astro-icon` 方案和已安装图标集。

## 常用命令

在仓库根目录执行：

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm new-post <filename>
```

质量检查：

```bash
pnpm astro check
pnpm exec biome ci ./src
pnpm type-check
```

注意：

- `pnpm format` 会对 `src/` 执行 `biome format --write`。
- `pnpm lint` 会对 `src/` 执行 `biome check --write`。
- 上述两个命令会改写文件，不能作为无副作用的检查命令。只验证时使用 `biome ci ./src`。
- `pnpm build` 会写入 `dist/`，并触发搜索索引；这不是纯类型检查。

## 验证要求

根据改动范围执行最小但充分的验证：

- 文档或静态内容：检查 frontmatter、链接和相关页面构建。
- Astro/Svelte/TypeScript：至少运行 `pnpm check`。
- 样式或组件：运行 `pnpm check`，并人工检查受影响的亮/暗主题和响应式状态。
- 内容管线、路由、配置、搜索或构建集成：运行 `pnpm build`。
- 格式和 lint：运行 `pnpm exec biome ci ./src`。

当前仓库基线：

- `astro check`：通过。
- `biome ci ./src`：通过。
- `pnpm type-check` 使用 `tsc --noEmit`，应保持通过。

如果 pnpm 在受限环境中因用户目录 store 或网络访问失败，可直接调用已有的本地二进制进行等价检查，例如：

```bash
./node_modules/.bin/astro check
./node_modules/.bin/biome ci ./src
./node_modules/.bin/tsc --noEmit
```

## Git 与变更边界

- 开始和结束时检查 `git status --short`。
- 工作区可能包含用户未提交的修改。不要重置、覆盖、删除或格式化与任务无关的文件。
- 不提交 `dist/`、`.astro/`、`node_modules/`、环境变量文件或临时缓存。
- 不执行 `git reset --hard`、`git checkout --`、大范围删除或其他破坏性命令。
- 保持改动聚焦。不要借功能修改顺带重构大型布局、统一翻译、升级依赖或替换静态资源。

## 完成标准

完成任务前确认：

1. 实现遵循现有 Astro/Svelte 分层和配置模式。
2. 内容、类型、配置导出、i18n 和调用方保持同步。
3. 未修改与任务无关的用户文件或生成物。
4. 已运行适合改动范围的检查，并区分新增失败和既有基线问题。
5. 最终说明列出实际修改、验证结果以及无法执行的检查。

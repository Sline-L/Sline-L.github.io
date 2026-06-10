# Firefly 项目结构

本文档说明仓库整理后的目录职责、文件放置规则和命名约定。日常新增文章请同时阅读 [博客维护指南](./blog-maintenance.md)。

## 主干文件树

以下文件树省略了生成目录、依赖目录和大量第三方模型资源，仅保留日常开发与维护需要关注的内容。

```text
Firefly/
├── .github/workflows/          # CI、构建和 GitHub Pages 部署
├── docs/                       # 项目文档与多语言 README
│   ├── project-structure.md    # 本文档
│   ├── blog-maintenance.md     # 博客内容与配置维护指南
│   └── images/                 # 文档截图和赞助示例图片
├── public/                     # 按原路径发布的静态资源
│   ├── assets/
│   │   ├── css/                # 第三方或独立样式
│   │   ├── images/             # 站点头像、Logo、壁纸和通用图片
│   │   ├── js/                 # 第三方浏览器脚本
│   │   └── music/              # 音频与封面
│   ├── favicon/                # 默认明暗主题 favicon
│   └── pio/                    # Live2D、Spine SDK、模型和模型资源
├── scripts/
│   ├── new-post.js             # 创建文章 frontmatter 模板
│   └── index-to-meilisearch.mts # 手动建立 MeiliSearch 索引
├── src/
│   ├── components/
│   │   ├── comment/            # Twikoo、Waline、Giscus 等评论组件
│   │   ├── common/             # 基础组件、按钮、分页和共享样式
│   │   ├── content/            # 文章卡片、元数据和个人资料
│   │   ├── effects/            # Fancybox、樱花等视觉效果
│   │   ├── interactive/        # 搜索、主题和布局切换等交互
│   │   ├── layout/             # 导航栏、页脚和侧边栏
│   │   ├── misc/               # 图片、Markdown、许可证等辅助组件
│   │   ├── pages/              # 页面专用组件
│   │   └── widget/             # 日历、统计、音乐和看板娘等小部件
│   ├── config/
│   │   ├── index.ts            # 配置统一导出
│   │   ├── siteConfig.ts       # 站点、页面、壁纸和分页
│   │   ├── profileConfig.ts    # 作者资料和社交链接
│   │   ├── navBarConfig.ts     # 导航栏和搜索
│   │   ├── sidebarConfig.ts    # 侧边栏与小部件布局
│   │   ├── commentConfig.ts    # 评论系统
│   │   ├── musicConfig.ts      # 音乐播放器
│   │   ├── pioConfig.ts        # Live2D 和 Spine
│   │   ├── friendsConfig.ts    # 友情链接
│   │   ├── sponsorConfig.ts    # 赞助页面
│   │   ├── coverImageConfig.ts # 随机封面
│   │   ├── footerConfig.ts     # 自定义页脚开关
│   │   └── footer-content.html # 自定义页脚 HTML
│   ├── content/
│   │   ├── posts/              # 博客文章和文章专属资源
│   │   │   ├── essays/         # 碎碎念
│   │   │   ├── examples/       # 主题草稿与功能示例
│   │   │   ├── insights/       # 观潮集
│   │   │   ├── projects/       # 造物志
│   │   │   ├── tech/           # 技术札记
│   │   │   ├── theory/         # 格物录
│   │   │   └── visuals/        # 浮光记
│   │   └── spec/               # About、Friends、Guestbook 页面内容
│   ├── i18n/                   # 翻译键和语言文件
│   ├── integrations/
│   │   └── search-index.mts    # Astro 构建完成后的搜索索引集成
│   ├── layouts/                # 全局 HTML 与主网格布局
│   ├── pages/                  # Astro 文件路由
│   ├── plugins/                # Markdown、Mermaid、代码块插件
│   ├── styles/                 # 全局 CSS 和 Stylus
│   ├── types/                  # 配置与业务类型
│   ├── utils/                  # 内容、URL、布局和客户端工具
│   └── content.config.ts       # 文章 Content Collections schema
├── astro.config.mjs            # Astro、Markdown、Swup 和集成配置
├── biome.json                  # 格式化与 lint 规则
├── package.json                # 命令、依赖和运行环境
├── tailwind.config.cjs         # Tailwind 配置
└── tsconfig.json               # TypeScript 和路径别名
```

## 放置规则

### 文章与图片

- 新文章放在 `src/content/posts/<section>/<article-slug>/index.md`。
- 文章专属图片与 `index.md` 放在同一目录，Markdown 中使用 `./image.webp`。
- 文章目录与分类的固定映射见 [博客维护指南](./blog-maintenance.md)。
- `index.md` 的公开 URL 不包含 `index`，例如
  `theory/linear-algebra/index.md` 对应 `/posts/theory/linear-algebra/`。
- 多篇文章共用或由配置直接引用的图片放在 `public/assets/images/`。
- `public/` 中的路径会直接成为线上 URL，例如 `public/assets/images/avatar.webp` 对应 `/assets/images/avatar.webp`。

### 组件与逻辑

- 静态页面结构优先写成 Astro 组件。
- 需要客户端状态的交互组件放在 `src/components/interactive/`，可使用 Svelte。
- 页面专用组件放在 `src/components/pages/<page>/`，不要放入通用组件目录。
- 可跨组件复用的纯逻辑放在 `src/utils/`。
- Astro 构建生命周期扩展放在 `src/integrations/`。
- 可独立执行的维护命令放在根目录 `scripts/`。

### 配置

- 用户可调整的站点功能集中在 `src/config/`。
- 新增配置类型时同步更新 `src/types/config.ts`。
- 供其他模块使用的配置从 `src/config/index.ts` 统一导出。
- 不要在页面或组件中复制一份配置常量。

## 命名约定

- 工具、集成和脚本文件使用小写 kebab-case，例如 `toc-utils.ts`。
- Astro 和 Svelte 组件使用 PascalCase，例如 `PostMetadata.astro`。
- 配置文件保持 `<feature>Config.ts` 的既有模式。
- 新文章目录使用小写 kebab-case，例如 `signal-integrity-basics/`。
- 不在文章路径中使用大写字母、空格或中文；页面上的中文分类由 frontmatter
  控制。

## 不应随意重命名的路径

以下路径可能已经被网页、搜索引擎或外部服务引用：

- `src/content/posts/` 下已发布文章的相对路径
- `src/pages/` 下的路由文件
- `public/assets/` 和 `public/pio/` 下已发布资源
- 配置中以 `/assets/...` 或 `/pio/...` 开头的 URL

如果必须调整，应同时在 `astro.config.mjs` 添加旧地址到新地址的重定向，并检查
RSS、搜索、评论路径和外部链接，不能只移动文件。

## 生成目录

以下目录由工具生成，不应手工维护或提交：

- `node_modules/`
- `.astro/`
- `dist/`

运行 `pnpm build` 会重新生成 `dist/`，并在 `dist/pagefind/` 创建搜索索引。

<h1 align="center">
    宏维星智智慧科技工作室<br>官方网站源码
</h1>

<p align="center">
  基于 <b>Astro 5 + React 19 + Tailwind CSS 4</b> 构建的纯静态官网，深色现代视觉风格，数据驱动、开箱即用。
</p>

---

# 开发指南

本指南面向所有参与本仓库开发的人员，涵盖环境准备、目录结构、核心架构、常见开发任务、样式规范与构建部署。

## 目录

1. [项目简介与技术栈](#1-项目简介与技术栈)
2. [环境要求与快速开始](#2-环境要求与快速开始)
3. [目录结构详解](#3-目录结构详解)
4. [核心架构说明](#4-核心架构说明)
5. [常见开发任务](#5-常见开发任务)
6. [样式与视觉规范](#6-样式与视觉规范)
7. [构建与部署](#7-构建与部署)

---

## 1. 项目简介与技术栈

本仓库是宏维星智（MacroSTAR Studio）官方网站的源码，构建产物为**纯静态站点**（无服务端运行时），包含首页与 5 个产品详情页，共 6 个页面。

| 技术                                     | 版本            | 用途                                                |
| ---------------------------------------- | --------------- | --------------------------------------------------- |
| [Astro](https://astro.build/)            | ^5.8.0          | 静态站点框架（`output: static`），页面路由与构建    |
| [React](https://react.dev/)              | ^19.1.0         | 交互组件（目前仅 Header 在客户端水合）              |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.1.7          | 原子化样式，经 `@tailwindcss/vite` 插件接入         |
| [AOS](https://michalsnik.github.io/aos/) | 3.0.0-beta.6    | 滚动进入动画（`data-aos` 属性驱动）                 |
| TypeScript                               | Astro 内置      | 严格模式（`astro/tsconfigs/strict`）                |
| [Prettier](https://prettier.io/)         | ^3.5.3          | 代码格式化（含 astro / tailwind / import 排序插件） |
| [pnpm](https://pnpm.io/)                 | v9+（实测 v11） | 包管理器                                            |

---

## 2. 环境要求与快速开始

### 环境要求

- **Node.js** 18 或更高版本
- **pnpm** 9 或更高版本（本项目在 pnpm v11 下开发验证）

### 常用命令

| 命令           | 说明                                              |
| -------------- | ------------------------------------------------- |
| `pnpm install` | 安装依赖                                          |
| `pnpm dev`     | 启动开发服务器，默认地址 `http://localhost:4321/` |
| `pnpm build`   | 构建静态站点，输出到 `dist/`（共 6 个页面）       |
| `pnpm preview` | 本地预览 `dist/` 构建产物                         |

### 关于 `pnpm-workspace.yaml` 的 `allowBuilds`

pnpm v10+ 默认**禁止依赖包在安装时执行构建脚本**（安全策略）。本项目的 `esbuild` 与 `sharp` 需要执行安装脚本才能正常工作，因此在 `pnpm-workspace.yaml` 中已使用 pnpm v11 的新格式显式放行：

```yaml
allowBuilds:
  esbuild: true
  sharp: true
```

该配置已随仓库提交，**删除 `node_modules` 重新安装时无需任何额外操作**。若未来新增了需要执行安装脚本的依赖，pnpm 会报 `ERR_PNPM_IGNORED_BUILDS` 错误，按提示把包名加入 `allowBuilds` 即可。

> 注意：旧版 `package.json` 中的 `pnpm.onlyBuiltDependencies` 字段在 pnpm v11 中已不再读取，请勿使用。

---

## 3. 目录结构详解

```
MS-WEB/
├── astro.config.mts          # Astro 配置：srcDir: "."、React 集成、Tailwind vite 插件
├── tsconfig.json             # TS 配置：strict 模式、"@/*" 路径别名指向仓库根目录
├── package.json              # 依赖与脚本
├── pnpm-workspace.yaml       # pnpm allowBuilds 配置（见上文）
├── .prettierrc               # Prettier 配置（astro / tailwind / import 排序插件）
│
├── pages/                    # 页面（文件即路由）
│   ├── index.astro           #   首页：Hero + ServiceCards
│   └── products/
│       └── [slug].astro      #   产品详情页动态路由，构建期生成 5 个页面
│
├── layouts/
│   └── Layout.astro          # 全局布局：<head> / Header / <slot> / Footer / AOSInit
│
├── components/
│   ├── AOSInit.astro         # AOS 初始化脚本（配合 View Transitions 重新触发）
│   ├── Hero.tsx              # 首页全屏 Hero（径向渐变 + 背景图动画）
│   ├── ServiceCards.tsx      # 首页 4 张服务卡片（含 #contact 锚点卡片）
│   ├── layout/
│   │   ├── Header.tsx        # 固定顶栏（唯一 client:load 组件）
│   │   └── Footer.tsx        # 页脚（四列链接 + 版权）
│   └── ui/
│       └── Button.tsx        # Button（白底）/ TransparentButton（半透明毛玻璃）
│
├── data/
│   └── site.ts               # ★ 全站唯一数据源：所有文案与结构化内容
│
├── styles/
│   └── global.css            # 全局样式：Tailwind 入口、主题变量、动画、gradient-text
│
├── assets/
│   └── images/               # 经构建管线处理的图片（hero.jpg、ai.png）
│
├── public/                   # 原样拷贝到站点根目录的静态资源
│   └── favicon.svg           #   站点图标
│
└── dist/                     # pnpm build 输出目录（勿手动修改，已被 git 忽略）
```

### 两个重要约定

- **`srcDir: "."`**：本项目没有 `src/` 目录，仓库根目录即源码目录（`pages/`、`components/` 等直接位于根目录），与 `astro.config.mts` 中的配置对应。
- **`@/*` 路径别名**：在 `tsconfig.json` 中配置，`@/` 指向仓库根目录。组件内推荐使用别名导入，例如：

  ```ts
  import heroImage from "@/assets/images/hero.jpg";
  import { PRODUCTS } from "@/data/site";
  ```

---

## 4. 核心架构说明

### 4.1 数据驱动：`data/site.ts` 是唯一数据源

**所有页面文案与结构化内容都集中在 [`data/site.ts`](./data/site.ts)**，修改此文件即可更新网站内容，无需改动任何组件。导出内容一览：

| 导出             | 类型        | 说明                                           |
| ---------------- | ----------- | ---------------------------------------------- |
| `SITE`           | 对象        | 站点名称、`<title>` 后缀、联系邮箱             |
| `HERO`           | 对象        | 首页 Hero 的标题 / 副标题 / 描述 / 按钮文案    |
| `CARDS`          | 对象        | 首页"我们的服务"标题与 4 张卡片数据            |
| `FOOTER`         | 对象        | 页脚描述、四列链接、版权信息                   |
| `PRODUCT_COMMON` | 对象        | 产品页共用文案（面包屑、区块标题、CTA 按钮等） |
| `PRODUCTS`       | `Product[]` | 5 个产品的完整数据（详见下表）                 |

`Product` 接口字段说明：

| 字段          | 类型               | 说明                                            |
| ------------- | ------------------ | ----------------------------------------------- |
| `slug`        | `string`           | URL 路径段，如 `lunar-x` → `/products/lunar-x/` |
| `title`       | `string`           | 产品名称                                        |
| `subtitle`    | `string`           | 副标题                                          |
| `tagline`     | `string`           | Hero 区徽章标语                                 |
| `desc`        | `string`           | 一句话产品介绍（可为空字符串）                  |
| `overviewSub` | `string`           | "产品概述"区副标题                              |
| `paragraphs`  | `string[]`         | 概述正文段落                                    |
| `advantage`   | `string`           | 核心优势文案                                    |
| `featuresSub` | `string`           | "核心特性"区副标题                              |
| `features`    | `ProductFeature[]` | 特性卡片：`{ icon, title, desc }`               |
| `specs`       | `ProductSpec[]`    | 技术参数表：`{ label, value }`                  |
| `ctaSub`      | `string`           | CTA 区副标题                                    |
| `email`       | `string`           | 该产品的咨询邮箱                                |

### 4.2 产品页生成：`getStaticPaths` 动态路由

[`pages/products/[slug].astro`](./pages/products/[slug].astro) 通过 `getStaticPaths()` 遍历 `PRODUCTS`，**构建期**为每个产品生成一个静态页面：

```ts
// pages/products/[slug].astro 的 frontmatter 中
export function getStaticPaths() {
  return PRODUCTS.map((product) => ({
    params: { slug: product.slug },
    props: { product },
  }));
}
```

因此新增 / 删除产品只需改 `data/site.ts`，路由自动增减。

### 4.3 组件水合策略：默认静态，按需交互

- 目前**只有 `Header.tsx` 使用 `client:load`**（在 `layouts/Layout.astro` 中声明），因为它需要客户端交互：滚动后的毛玻璃背景切换、产品下拉菜单、移动端汉堡菜单。
- 其余 React 组件（Hero、ServiceCards、Footer、Button）均为**服务端静态渲染**，不向浏览器发送组件 JS。
- 新写组件时请保持这一原则：**没有交互就不加 `client:*` 指令**；需要交互时优先 `client:load`（首屏可见）或 `client:visible`（滚动后才可见）。

### 4.4 页面过渡与 AOS 动画的配合

- `Layout.astro` 的 `<head>` 中引入了 Astro 的 `<ClientRouter />`（View Transitions），页面间跳转为平滑过渡而非整页刷新。
- 由于跳转不刷新页面，`components/AOSInit.astro` 监听 `astro:page-load` 事件，在每次页面过渡完成后重新初始化 AOS，保证新页面的滚动动画正常触发。修改 AOS 全局配置（时长、缓动等）请在该文件中进行。

---

## 5. 常见开发任务

### 5.1 新增一个产品

只需在 `data/site.ts` 的 `PRODUCTS` 数组末尾追加一个对象：

```ts
{
  slug: "new-product",          // 决定 URL：/products/new-product/
  title: "新产品",
  subtitle: "副标题",
  tagline: "标语",
  desc: "一句话介绍（可为空字符串）",
  overviewSub: "概述副标题",
  paragraphs: ["第一段正文。", "第二段正文。"],
  advantage: "核心优势文案",
  featuresSub: "特性区副标题",
  features: [
    { icon: "🚀", title: "特性一", desc: "特性描述" },
    { icon: "⚡", title: "特性二", desc: "特性描述" },
    { icon: "🧩", title: "特性三", desc: "特性描述" },
  ],
  specs: [{ label: "参数名", value: "参数值" }],
  ctaSub: "CTA 副标题",
  email: SITE.email,
},
```

保存后以下位置**全部自动更新**，无需改任何组件：

- 产品详情页 `/products/new-product/`（构建期生成）
- Header 的"产品"下拉菜单与移动端菜单
- 产品详情页底部的"其他产品"推荐网格

> 注意：页脚"服务"栏的产品链接是 `FOOTER.columns` 中手写的，如需展示新产品请手动添加一条。

### 5.2 修改文案 / 联系方式

全部在 `data/site.ts` 中：

- 全站联系邮箱：`SITE.email`（服务卡片的 mailto 按钮会联动）
- 首页标语：`HERO.*`
- 服务卡片：`CARDS.items`
- 页脚链接与版权：`FOOTER.*`
- 产品页共用文案（区块标题、按钮等）：`PRODUCT_COMMON.*`

### 5.3 新增普通页面

在 `pages/` 下新建 `.astro` 文件并用 Layout 包裹：

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout title="关于我们">
  <section class="container mx-auto px-4 pt-24">
    <!-- 页面内容 -->
  </section>
</Layout>
```

> 提示：Header 是 `fixed` 定位的，正文首屏请预留顶部内边距（如 `pt-24`），避免被顶栏遮挡。`title` prop 会渲染为 `页面标题 - 宏维星智 - 智慧科技工作室`。

### 5.4 修改导航

编辑 `components/layout/Header.tsx` 顶部的 `navItems` 数组：

```ts
const navItems = [
  { href: "/", label: "首页" },
  { href: "/products/lunar-x", label: "产品", dropdown: true }, // dropdown: 悬停展开产品列表
  { href: "/#services", label: "服务" },
  { href: "/#contact", label: "关于" },
];
```

- `dropdown: true` 的项会在桌面端渲染产品下拉菜单（数据来自 `PRODUCTS`）。
- 修改桌面端 / 移动端的"联系我们"按钮也在此文件中（分别位于 `hidden md:flex` 容器与移动折叠菜单底部）。

### 5.5 使用 AOS 滚动动画

在任意元素上添加 `data-aos` 属性即可：

```html
<div data-aos="fade-up">滚动进入时上浮渐显</div>
<div data-aos="fade-up" data-aos-delay="150">延迟 150ms 触发</div>
<div data-aos="zoom-in">缩放进入</div>
```

常用动画名：`fade-up`、`fade-in`、`zoom-in` 等，完整列表见 [AOS 文档](https://michalsnik.github.io/aos/)。

### 5.6 添加图片

| 场景                                | 放置位置         | 使用方式                                                        |
| ----------------------------------- | ---------------- | --------------------------------------------------------------- |
| 需要经构建管线处理（推荐）          | `assets/images/` | `import img from "@/assets/images/xxx.jpg"`，然后使用 `img.src` |
| 需要固定 URL 原样访问（favicon 等） | `public/`        | 直接以根路径引用，如 `/favicon.svg`                             |

---

## 6. 样式与视觉规范

### 6.1 深色主题与自定义 token

全局样式入口为 `styles/global.css`，核心约定：

- **背景色 `#11121c`、前景白色**，通过 `:root` 的 `--color-background` / `--color-foreground` 应用到 `body`。
- Tailwind 4 使用 CSS 的 `@theme` 块扩展 token（**不再有 tailwind.config.js**）：

  | Token             | 生成的工具类  | 说明                                       |
  | ----------------- | ------------- | ------------------------------------------ |
  | `--ease-bounce`   | `ease-bounce` | 弹性缓动 `cubic-bezier(0.84, 0, 0.165, 1)` |
  | `--container-8xl` | `max-w-8xl`   | 96rem 超宽容器                             |

  新增自定义颜色 / 缓动 / 尺寸时，请同样写入 `@theme` 块。

### 6.2 特色样式类

- **`gradient-text`**：蓝→紫→青循环流动的渐变文字（Hero 副标题、Logo 在用），直接加到任意文本元素上。
- **`banner-slide-in`**：Hero 背景图的入场动画（右下滑入 + 透明度渐变），仅供 Hero 类场景使用。

### 6.3 按钮规范

统一使用 `components/ui/Button.tsx` 导出的两种按钮（均渲染为 `<a>`，接收 `href` / `className`）：

- **`Button`** —— 白底黑字圆角，用于主要操作（如"了解产品"）。
- **`TransparentButton`** —— 半透明白 + 毛玻璃，用于次要操作（如"联系我们"）。

两者都自带 `ease-bounce` 过渡与 `hover:scale-105`，请勿在业务代码里手写重复的按钮样式。

### 6.4 过渡动效约定

全站交互过渡统一使用 `ease-bounce` + `duration-500`（借鉴 Class Widgets 官网的动效语言），悬停放大统一 `hover:scale-105`。

### 6.5 代码格式化

项目使用 Prettier，配置见 `.prettierrc`，已启用插件：

- `prettier-plugin-astro` —— 格式化 `.astro` 文件
- `prettier-plugin-tailwindcss` —— **自动排序 class**（请勿手动纠结 class 顺序）
- `@trivago/prettier-plugin-sort-imports` —— import 排序
- `prettier-plugin-css-order` / `prettier-plugin-sort-json`

提交前建议执行：

```sh
pnpm exec prettier --write .
```

---

## 7. 构建与部署

### 构建

```sh
pnpm build
```

产物输出到 `dist/`，为**纯静态文件**（6 个 HTML 页面 + `_astro/` 资源），可部署到任意静态托管平台：

- **GitHub Pages**：将 `dist/` 发布到 Pages（可配合 Actions 自动化）
- **Vercel / Netlify**：构建命令 `pnpm build`，输出目录 `dist`
- **任意静态服务器 / OSS + CDN**：直接上传 `dist/` 内容

> 当前仓库**未配置 CI/CD**，部署流程不在本指南范围内；若网站将部署在子路径下，需同步修改 `astro.config.mts` 中的 `base` 配置（当前为 `/`）。

### 已知待办

- LunarValleyX 产品缺少一句话描述（`desc` 为空），以及若干"待补充"占位文案（技术参数副标题等）位于 `data/site.ts`，补充文案时直接修改对应字段即可。

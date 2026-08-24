/* =========================================================
 * 站点数据层：所有页面文案与结构化内容集中在此
 * 修改此文件即可更新网站内容，无需改动组件
 * ========================================================= */

export interface ProductFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

/* ========== 产品页：区块化数据模型 ==========
 * 每个产品通过 sections 声明自己的区块组合与顺序，
 * 不同产品可拥有完全不同的页面结构与信息密度。
 * 修改此文件即可更新产品页，无需改动组件。 */

/** 内容区块类型（Hero / CTA / 其他产品为公共骨架，无需声明） */
export type ProductSection =
  | "overview"
  | "gallery"
  | "scenarios"
  | "ecosystem"
  | "features"
  | "code"
  | "specs"
  | "pricing"
  | "faq"
  | "links";

export interface ProductOverviewData {
  sub: string;
  paragraphs: string[];
  advantage: string;
}

export interface ProductGalleryItem {
  /** 占位图标（暂无真实图片时显示，填了 image 后自动被图片替换） */
  icon: string;
  title: string;
  desc?: string;
  /** 真实图片路径（可选）：如 "/images/lunar-x/dashboard.png" */
  image?: string;
}

export interface ProductGalleryData {
  sub: string;
  items: ProductGalleryItem[];
}

export interface ProductFeaturesData {
  sub: string;
  items: ProductFeature[];
}

export interface ProductCodeData {
  title: string;
  sub?: string;
  language: string;
  code: string;
  /** 上手步骤（可选，展示在代码块旁） */
  steps?: string[];
}

export interface ProductSpecsData {
  sub: string;
  items: ProductSpec[];
}

export interface ProductPricingTier {
  name: string;
  price: string;
  desc: string;
  features: string[];
  /** 高亮档位（推荐） */
  highlight?: boolean;
}

export interface ProductPricingData {
  sub: string;
  tiers: ProductPricingTier[];
}

export interface ProductFAQItem {
  q: string;
  a: string;
}

export interface ProductFAQData {
  sub: string;
  items: ProductFAQItem[];
}

export interface ProductLinkItem {
  text: string;
  desc?: string;
  href: string;
}

export interface ProductLinksData {
  sub: string;
  items: ProductLinkItem[];
}

export interface ProductScenarioItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ProductScenario {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  items: ProductScenarioItem[];
}

export interface ProductEcosystem {
  title: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
}

/** 产品主题色集合：深色 / 浅色各一组 CSS 变量值 */
export interface ProductThemeSet {
  /** Hero 径向渐变背景 */
  radial: string;
  /** CTA 径向渐变背景 */
  ctaRadial: string;
  /** gradient-text 三色渐变 */
  grad1: string;
  grad2: string;
  grad3: string;
  accent: string;
  accentHover: string;
}

export interface ProductTheme {
  dark: ProductThemeSet;
  light: ProductThemeSet;
}

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  /** 一句话产品介绍（可选） */
  desc?: string;
  /** 发布徽章（可选） */
  badge?: string;
  /** 下载地址（可选，提供后 Hero 会显示"立即下载"） */
  downloadHref?: string;
  /** 自定义 CTA 标题（可选） */
  ctaTitle?: string;
  /** 卡片背景图（可选）：填写后横向卡片会用图片替换默认渐变背景 */
  image?: string;
  /** 每页独立配色（深/浅两套） */
  theme: ProductTheme;
  /** 本页区块组合与顺序（公共骨架 Hero/CTA/其他产品固定渲染） */
  sections: ProductSection[];
  overview?: ProductOverviewData;
  gallery?: ProductGalleryData;
  scenarios?: ProductScenario[];
  ecosystem?: ProductEcosystem;
  features?: ProductFeaturesData;
  code?: ProductCodeData;
  specs?: ProductSpecsData;
  pricing?: ProductPricingData;
  faq?: ProductFAQData;
  links?: ProductLinksData;
  /** 反馈入口（可选）：在 CTA 区域渲染一个"意见反馈"按钮 */
  feedback?: ProductLinkItem;
  ctaSub: string;
  email: string;
}

export const SITE = {
  name: "MacroSTAR",
  title: "宏维星智 - 网络技术工作室",
  email: "contact@macrostar.top",
};

export const HERO = {
  title: "MacroSTAR Studio",
  subtitle: "宏维星智网络技术工作室",
  description: "漫天星光，终将汇聚宏维星河！",
  explore: "了解产品",
  contact: "联系我们",
};

/* ========== 关于我们 / 联系方式 ========== */
export interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  href: string;
}

export const ABOUT = {
  heading: "关于我们",
  sub: "无论是合作咨询、技术交流还是日常闲聊，我们都在这里。",
  /** 左侧介绍文案（请自行替换） */
  intro:
    "宏维星智网络技术工作室（MacroSTAR）是一个以创新为驱动力的学生技术团队。我们相信「漫天星光，终将汇聚宏维星河」——每一个小创意都值得被认真对待，每一位伙伴都是不可或缺的星光。欢迎通过右侧方式联系我们，期待与你相遇。",
  methods: [
    {
      icon: "📧",
      title: "邮箱",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      icon: "💬",
      title: "QQ 群 / 社区",
      value: "加入社区",
      href: "https://qm.qq.com/cgi-bin/qm/qr?k=Q9RfxqwwxEd3i5kR0X33qq_j0MCbQweF&jump_from=webapi&authKey=/0DTAX+4DdOwhC/L+wKvDBciKCzmzGCrfnH6sehyaYffEBjKMkskraVVWpyoMeGu",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "MacroSTAR-Org",
      href: "https://github.com/MacroSTAR-Org",
    },
    {
      icon: "📺",
      title: "BiliBili",
      value: "关注我们",
      href: "https://space.bilibili.com/1407673587",
    },
  ] as ContactMethod[],
  cta: {
    title: "商务合作",
    sub: "准备好项目了吗？联系我们的商务团队，开启合作。",
    emailBtn: "发送邮件",
    communityBtn: "加入社区",
  },
};

/* ========== 成员墙（hover 揭示照片墙） ========== */
export interface Member {
  /** 姓名 / 昵称 */
  name: string;
  /** 角色 / 职位（可选，留空则只显示姓名） */
  role?: string;
  /** 头像URL，留空则用首字母占位 */
  avatar?: string;
  /** 技能点 / 标签（可选，hover 时展开显示） */
  tags?: string[];
  /** 一句话 / 多行简介（可选，hover 时展开显示） */
  bio?: string;
}

/**
 * TEAM 成员墙数据
 * ------------------------------------------------------------
 * 填写说明：role / tags / bio 均为可选，按需补充即可。
 * 例：{ name: "夏辉", role: "前端负责人", tags: ["React", "设计"],
 *        bio: "热爱把想法变成产品。", avatar: "https://example.com/avatar/xiahui.jpg" }
 */
export const TEAM: { heading: string; sub: string; members: Member[] } = {
  heading: "团队成员 - Team Member",
  sub: "漫天星光，终将汇聚宏维星河——认识 MacroSTAR 背后的每一位伙伴。",
  members: [
    {
      name: "夏子涵",
      role: "首席执行官&创始人&董事长",
      tags: ["全栈"],
      bio: "Hello World.",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2473768771%7D&s=640",
    },
    {
      name: "Maozi",
      role: "副总裁",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2180312206%7D&s=640",
    },
    {
      name: "木易yany",
      role: "法务总监",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=1493383980%7D&s=640",
    },
    {
      name: "SR思锐 开发者",
      role: "合作伙伴&技术支持",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=169368309%7D&s=640",
    },
    {
      name: "wyf9",
      role: "合作伙伴&技术支持",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2191161566%7D&s=640",
    },
    {
      name: "是小何喵~",
      role: "软件工程师",
      tags: ["全栈"],
      bio: "喵喵喵",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2830305492%7D&s=640",
    },
    {
      name: "FUUSA",
      role: "软件工程师",
      tags: ["C++"],
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=137960472%7D&s=640",
    },
    {
      name: "J2rQ(y)",
      role: "软件工程师",
      tags: ["Python"],
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2414528438%7D&s=640",
    },
    {
      name: "ljc",
      role: "社区管理",
      tags: ["离线"],
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3558516573%7D&s=640",
    },
    {
      name: "RinLit",
      role: "美术设计",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3295014118%7D&s=640",
    },
    {
      name: "Starfire",
      role: "LunarValleyX 产品总监",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3428848818%7D&s=640",
    },
    {
      name: "Tom Chicken",
      role: "技术支持",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2674407845%7D&s=640",
    },
    {
      name: "吻一秒",
      role: "宏吾星耀-执行董事&创始人&艺人",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2383443986%7D&s=640",
    },
    {
      name: "左右更偏左",
      role: "宏吾星耀-艺人",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3388363828%7D&s=640",
    },
    {
      name: "屿川",
      role: "宏吾星耀-艺术总监&艺人",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=1903652434%7D&s=640",
    },
    {
      name: "困困鱼",
      role: "宏吾星耀-运营总监",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3211998128%7D&s=640",
    },
    {
      name: "羊村里的小羊",
      role: "宏吾星耀-作曲家",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2765941099%7D&s=640",
    },
    {
      name: "NIANIA",
      role: "宏吾星耀-艺人",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3407739763%7D&s=640",
    },
    {
      name: "可用性",
      role: "宏吾星耀-剪辑师",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=3816006721%7D&s=640",
    },
    {
      name: "林浅月",
      role: "吉祥物",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2058004404%7D&s=640",
    },
  ],
};

/* ========== 荣誉墙（Hall of Fame） ==========
 * 致敬那些曾对工作室做出过优秀贡献的人——
 * 他也许已经离开，亦或者没有，但我们会永远记住他。 */
export interface Honoree {
  /** 姓名 / 昵称 */
  name: string;
  /** 曾担任角色 / 职位 */
  role: string;
  /** 贡献描述（hover 时展开显示） */
  contribution: string;
  /** 在任年份（可选），如 "2024 - 2025" */
  period?: string;
  /** 状态徽章（可选），如 "创始人" / "已离任" / "荣誉成员" */
  badge?: string;
  /** 头像URL，留空则用首字母 + 金色渐变占位 */
  avatar?: string;
  /** 标签（可选） */
  tags?: string[];
}

/**
 * HONOR_WALL 荣誉墙数据
 * ------------------------------------------------------------
 * 以下为示例占位条目，替换为真实贡献者即可，
 * 图片素材放 public/ 目录后填入 avatar 路径（如 "/honor/xxx.jpg"）。
 */
export const HONOR_WALL: {
  heading: string;
  sub: string;
  members: Honoree[];
} = {
  heading: "荣誉墙 · Hall of Fame",
  sub: "感谢每一位曾为星河发光的人——无论身在何处，我们永远记得你。",
  members: [
    {
      name: "山止川行",
      role: "前 财务总监兼人力资源总监",
      contribution: "工作室最大资金投入者，中流砥柱。",
      period: "2024 - 2026",
      badge: "已离任",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2792216821%7D&s=640",
    },
    {
      name: "离栖瀾║LIKAN",
      role: "前 董事长",
      contribution: "来自前辈的指导，字字如金。",
      period: "2025 - 2026",
      badge: "已离任",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2726001724%7D&s=640",
    },
    {
      name: "后藤一里",
      role: "前 软件工程 高级副总裁",
      contribution: "工作室代码的开山鼻祖。",
      period: "2024 - 2026",
      badge: "已离任",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=1348472639%7D&s=640",
    },
  ],
};

/* ========== 友情链接（Logo 网格） ========== */
export interface FriendlyLink {
  /** 站点名称 */
  name: string;
  /** 链接地址 */
  url: string;
  /** 一句话描述（可选） */
  desc?: string;
  /** Logo图片路径（可选），如 "/logos/sr-studio.png" */
  logo?: string;
}

export const FRIENDLY_LINKS: {
  heading: string;
  sub: string;
  items: FriendlyLink[];
} = {
  heading: "友情链接",
  sub: "值得信赖的伙伴与资源。",
  items: [
    {
      name: "SR思锐 团队",
      url: "https://sr-studio.cn/",
      desc: "一个以创新创造为导向的青少年编程学习与实践社区，和伙伴们一起用代码创造未来。",
      logo: "/logos/sr-studio.png",
    },
    {
      name: "DCR 学生互助频道",
      url: "https://www.dcr2026.com/",
      desc: "一个温暖、免费、专业、易用的学生互助社区",
      logo: "/logos/dcr.png",
    },
    {
      name: "Class Widgets",
      url: "https://classwidgets.rinlit.cn/",
      desc: "多样的桌面课表",
      logo: "/logos/classwidgets.png",
    },
    {
      name: "SiiWay Team",
      url: "https://siiway.org/",
      desc: "在 AI 时代中构建开源软件。",
      logo: "/logos/siiway.png",
    },
    {
      name: "ColudAI",
      url: "https://coludai.cn/",
      desc: "创新，开启新世界；下一代人工智能解决方案",
      logo: "/logos/coludai.png",
    },
    {
      name: "Project Hazelita",
      url: "https://qm.qq.com/q/RoDLH2u7SY",
      desc: "一个友爱、开放、友好、多样的技术交流社群",
      logo: "/logos/hazelita.png",
    },
    {
      name: "Starfire United Team",
      url: "https://www.bilibili.com/opus/1095287012097785861",
      desc: "智慧优化体验，便利走进全民。",
      logo: "/logos/starfire.png",
    },
    {
      name: "apanzinc",
      url: "https://apanzinc.top/", 
      desc: "我是 apanzinc，一名初三学生，专注于前后端开发与人工智能应用的学习与实践。",
      logo: "https://static.apanzinc.top/apanzinc/logo.png",
    },
  ],
};

/* ========== 首页产品导航（横向滑动卡片）文案 ========== */
export const PRODUCTS_NAV = {
  heading: "探索我们的产品",
  sub: "点击卡片，深入了解每一款产品。",
};

export const FOOTER = {
  desc: "漫天星光，终将汇聚宏维星河",
  columns: [
    {
      title: "服务",
      items: [
        { text: "Lunar X", href: "/products/lunar-x" },
        { text: "林笙 · Linden", href: "/products/linden" },
        { text: "Vectra", href: "/products/vectra" },
        { text: "Lunar Bot 3", href: "/products/lunar-bot-3" },
        { text: "Lunar Valley XI", href: "/products/valley" },
      ],
    },
    {
      title: "工作室",
      items: [
        { text: "关于我们", href: "/#contact" },
        { text: "新闻动态", href: "#" },
        { text: "加入我们", href: "#" },
        { text: "合作伙伴", href: "#" },
      ],
    },
    {
      title: "资源",
      items: [
        { text: "技术博客", href: "#" },
        { text: "开源项目", href: "#" },
        { text: "文档中心", href: "#" },
        { text: "行业洞察", href: "#" },
      ],
    },
    {
      title: "联系",
      items: [
        { text: SITE.email, href: `mailto:${SITE.email}` },
        { text: "微信公众号", href: "#" },
        { text: "GitHub", href: "#" },
      ],
    },
  ],
  bottom: {
    copyright: "Copyright © 2024-2026 MacroSTAR Studio. All rights reserved.",
    links: [
      { text: "隐私政策", href: "#" },
      { text: "使用条款", href: "#" },
      { text: "网站地图", href: "#" },
    ],
  },
};

/* ========== 产品页共用文案 ========== */
export const PRODUCT_COMMON = {
  breadcrumbHome: "首页",
  tag: "产品",
  learnMore: "了解详情",
  consult: "联系咨询",
  overviewTitle: "产品概述",
  advTitle: "核心优势",
  featuresTitle: "核心特性",
  specsTitle: "技术参数",
  galleryTitle: "产品图集",
  pricingTitle: "版本与定价",
  faqTitle: "常见问题",
  linksTitle: "文档与资源",
  recommend: "推荐",
  ctaTitle: "准备好开始了吗？",
  ctaJoin: "加入社区了解",
  ctaJoinHref:
    "https://qm.qq.com/cgi-bin/qm/qr?k=Q9RfxqwwxEd3i5kR0X33qq_j0MCbQweF&jump_from=webapi&authKey=/0DTAX+4DdOwhC/L+wKvDBciKCzmzGCrfnH6sehyaYffEBjKMkskraVVWpyoMeGu",
  ctaBack: "返回联系我们",
  othersTitle: "其他产品",
  viewDetail: "查看详情 →",
};

/* ========== 产品主题（每个产品一套独立配色，深/浅各一组） ========== */
export const PRODUCT_THEMES: Record<string, ProductTheme> = {
  /* Lunar X —— 蓝 / 紫 */
  "lunar-x": {
    dark: {
      radial:
        "radial-gradient(ellipse at left bottom, #2b3a67 0%, #1c2340 50%, #3d2e5c 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #2b3a67 0%, #11121c 80%)",
      grad1: "#4f7cff",
      grad2: "#8b5cf6",
      grad3: "#26d0ce",
      accent: "#60a5fa",
      accentHover: "#93c5fd",
    },
    light: {
      radial:
        "radial-gradient(ellipse at left bottom, #dbe4ff 0%, #eef1fb 50%, #efe6fb 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #dbe4ff 0%, #f7f8fb 80%)",
      grad1: "#3b5bdb",
      grad2: "#7c3aed",
      grad3: "#0891b2",
      accent: "#2563eb",
      accentHover: "#1d4ed8",
    },
  },
  /* Linden —— 翠 / 青 */
  linden: {
    dark: {
      radial:
        "radial-gradient(ellipse at left bottom, #0e3f2c 0%, #11241c 50%, #16352b 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #0e3f2c 0%, #11121c 80%)",
      grad1: "#34d399",
      grad2: "#2dd4bf",
      grad3: "#22d3ee",
      accent: "#34d399",
      accentHover: "#6ee7b7",
    },
    light: {
      radial:
        "radial-gradient(ellipse at left bottom, #d5f5e6 0%, #eefbf4 50%, #e0f5ee 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #d5f5e6 0%, #f7f8fb 80%)",
      grad1: "#059669",
      grad2: "#0d9488",
      grad3: "#0891b2",
      accent: "#059669",
      accentHover: "#047857",
    },
  },
  /* Vectra —— 品红 / 紫 */
  vectra: {
    dark: {
      radial:
        "radial-gradient(ellipse at left bottom, #3c1033 0%, #241126 50%, #391f44 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #3c1033 0%, #11121c 80%)",
      grad1: "#f472b6",
      grad2: "#c084fc",
      grad3: "#a855f7",
      accent: "#e879f9",
      accentHover: "#f0abfc",
    },
    light: {
      radial:
        "radial-gradient(ellipse at left bottom, #fde3f2 0%, #fdf0fb 50%, #f3e5fb 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #fde3f2 0%, #f7f8fb 80%)",
      grad1: "#db2777",
      grad2: "#9333ea",
      grad3: "#a21caf",
      accent: "#c026d3",
      accentHover: "#a21caf",
    },
  },
  /* Lunar Bot 3 —— 琥珀 / 橙 */
  "lunar-bot-3": {
    dark: {
      radial:
        "radial-gradient(ellipse at left bottom, #3d2a10 0%, #231d14 50%, #3a2416 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #3d2a10 0%, #11121c 80%)",
      grad1: "#fbbf24",
      grad2: "#fb923c",
      grad3: "#f87171",
      accent: "#fbbf24",
      accentHover: "#fcd34d",
    },
    light: {
      radial:
        "radial-gradient(ellipse at left bottom, #fdf1d3 0%, #fdf8ee 50%, #fbe6df 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #fdf1d3 0%, #f7f8fb 80%)",
      grad1: "#d97706",
      grad2: "#ea580c",
      grad3: "#dc2626",
      accent: "#d97706",
      accentHover: "#b45309",
    },
  },
  /* LunarValleyX —— 天蓝 / 青 */
  lunarvalleyx: {
    dark: {
      radial:
        "radial-gradient(ellipse at left bottom, #10334a 0%, #122130 50%, #1b2c45 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #10334a 0%, #11121c 80%)",
      grad1: "#38bdf8",
      grad2: "#22d3ee",
      grad3: "#818cf8",
      accent: "#38bdf8",
      accentHover: "#7dd3fc",
    },
    light: {
      radial:
        "radial-gradient(ellipse at left bottom, #d8f0fd 0%, #eef8fd 50%, #e3ecfb 100%)",
      ctaRadial: "radial-gradient(ellipse at center, #d8f0fd 0%, #f7f8fb 80%)",
      grad1: "#0284c7",
      grad2: "#0891b2",
      grad3: "#4f46e5",
      accent: "#0284c7",
      accentHover: "#0369a1",
    },
  },
};

/* ========== 产品列表（每个产品一个独立页面） ==========
 * 内容结构通过 sections 逐页声明；以下为占位内容，
 * 各产品页面将随沟通逐页完善。 */
export const PRODUCTS: Product[] = [
  {
    slug: "lunar-x",
    title: "Lunar X",
    subtitle: "新势力，轻装上阵",
    tagline: "QQ 机器人框架",
    desc: "MacroSTAR 自主打造的新一代 QQ 机器人框架：模块化、轻量化，人人皆可上手的机器人开发体验。",
    theme: PRODUCT_THEMES["lunar-x"],
    sections: ["overview", "gallery", "features", "links", "specs"],
    overview: {
      sub: "基于 OneBot / Milky 协议的新一代 QQ 机器人框架，由 MacroSTAR 工作室自主打造。",
      paragraphs: [
        "Lunar X 是 MacroSTAR 工作室自主打造的新一代 QQ 机器人框架，原生对接 OneBot 与 Milky 协议。它摒弃了传统框架的复杂配置与臃肿体积，以模块化、轻量化为核心设计理念，让机器人的开发与维护变得前所未有的简单。",
        "无论你是经验丰富的开发者，还是第一次接触 QQ 机器人，Lunar X 都能让你快速上手：开箱即用的 WebUI 管理面板、即装即用的插件生态，配合现代简洁的设计语言，从安装到第一个可用机器人只需几分钟。",
      ],
      advantage:
        "与同类框架相比，Lunar X 采用模块化架构按需加载，核心更小、启动更快；内置 WebUI 让管理与配置全部可视化，无需手写复杂配置；现代的设计与交互显著降低上手门槛，让小白也能轻松驾驭自己的机器人。",
    },
    gallery: {
      sub: "Lunar X 由简洁现代的 WebUI 驱动，管理与监控尽在掌握。（截图素材待补充）",
      items: [
        { icon: "🖥️", title: "WebUI 管理面板", desc: "可视化配置与管理机器人" },
        { icon: "🧩", title: "Unisphere", desc: "全新统一插件市场" },
        { icon: "🔌", title: "协议接入", desc: "OneBot / Milky 连接状态" },
        { icon: "📊", title: "运行监控", desc: "实时查看框架运行状态" },
      ],
    },
    features: {
      sub: "从架构到体验，每一处都为了更简单的开发。",
      items: [
        {
          icon: "🧩",
          title: "模块化架构",
          desc: "按需加载模块，功能与体积自由掌控。",
        },
        {
          icon: "🖥️",
          title: "WebUI 管理面板",
          desc: "图形化管理机器人与插件，告别复杂配置。",
        },
        {
          icon: "✨",
          title: "现代设计",
          desc: "清爽的界面与交互，紧跟时代的开发体验。",
        },
        {
          icon: "🪶",
          title: "轻量化",
          desc: "精简核心、更小的体积，部署启动更迅速。",
        },
        {
          icon: "🔌",
          title: "协议兼容",
          desc: "原生对接 OneBot / Milky 协议。",
        },
        {
          icon: "🧒",
          title: "对小白友好",
          desc: "简单易懂的安装与配置流程，人人可上手。",
        },
      ],
    },
    links: {
      sub: "与我们一起共建星河。",
      items: [
        {
          text: "GitHub 仓库",
          desc: "MacroSTAR-Org/Lunar_X",
          href: "https://github.com/MacroSTAR-Org/Lunar_X",
        },
        {
          text: "Unisphere",
          desc: "全新统一插件市场",
          href: "https://github.com/MacroSTAR-Org/Unisphere",
        },
        { text: "文档中心", desc: "建设中，敬请期待", href: "#" },
      ],
    },
    specs: {
      sub: "待补充：产品的技术规格与参数。",
      items: [
        { label: "框架定位", value: "QQ 机器人框架" },
        { label: "支持协议", value: "OneBot / Milky" },
        { label: "架构", value: "模块化" },
        { label: "管理方式", value: "WebUI 管理面板 · 手动配置" },
        { label: "部署方式", value: "云端 / 本地" },
        { label: "支持平台", value: "Windows · Linux" },
        { label: "版本", value: "v1.0" },
      ],
    },
    ctaSub: "想用 Lunar X 搭建你的第一个机器人？或需要定制化插件与部署支持？",
    email: "contact@macrostar.top",
  },
  {
    slug: "linden",
    title: "林笙 · Linden",
    subtitle: "陪你，帮你，让你，做你",
    tagline: "桌面 AI 智能体",
    desc: "不止是帮你完成任务的智能体，更是长久陪伴在你身边的伙伴。",
    theme: PRODUCT_THEMES["linden"],
    sections: ["overview", "features", "specs"],
    overview: {
      sub: "AI Agent + Human：既帮你解决问题，也陪伴你的情绪。",
      paragraphs: [
        "林笙 · Linden 是 MacroSTAR 工作室正在立项的桌面端 AI 智能体。它不止是一个帮你完成任务的助手，更是一位长久陪伴在你身边的伙伴——我们希望它在帮你处理事务的同时，也能倾听你的心情、回应你的情绪，让每一次交互都带着温度。",
        "「陪你，帮你，让你，做你」——陪伴你度过每一天，帮你解决一个个难题，让你不被烦心事打扰，真正做你自己。目前产品仍在立项研发阶段，敬请期待。",
      ],
      advantage:
        "与纯粹的效率型 AI 助手不同，林笙把情感陪伴作为与任务执行同等重要的核心能力：既能高效帮你处理工作与生活中的琐事，也会在你低落时给予倾听与回应，让技术不再是冷冰冰的工具，而是真正懂你的伙伴。",
    },
    features: {
      sub: "以「人」为核心的产品理念。",
      items: [
        {
          icon: "💗",
          title: "情感陪伴",
          desc: "倾听你的心情，回应你的情绪，无时无刻的陪伴。",
        },
        {
          icon: "🤖",
          title: "AI 任务执行",
          desc: "像 Agent 一样自动帮你完成工作与生活琐事。",
        },
        {
          icon: "🌿",
          title: "守护安宁",
          desc: "帮你挡下烦心事，让你做你自己。",
        },
        {
          icon: "🖥️",
          title: "桌面端形态",
          desc: "常驻桌面的贴心伙伴，随时在身边。",
        },
      ],
    },
    specs: {
      sub: "项目立项中，以下为规划方向，最终以产品发布为准。",
      items: [
        { label: "产品形态", value: "桌面端 AI 智能体" },
        { label: "产品理念", value: "AI Agent + Human 陪伴" },
        { label: "核心特色", value: "情感模块 · 任务执行" },
        { label: "项目状态", value: "立项中，敬请期待" },
        { label: "版本", value: "未发布" },
      ],
    },
    ctaSub: "期待与林笙见面？告诉我们你的想法与需求，我们一起让它变得更好。",
    email: "contact@macrostar.top",
  },
  {
    slug: "vectra",
    title: "山止组件 Vectra",
    subtitle: "方寸之间",
    tagline: "Windows 桌面小组件引擎",
    badge: "Vectra 0.2 · 全新发布",
    desc: "把小组件放回桌面：Windows 桌面小组件引擎，支持插件、皮肤与 AI 侧边栏。",
    downloadHref: "https://github.com/MacroSTAR-Org/Vectra/releases",
    theme: PRODUCT_THEMES["vectra"],
    sections: ["scenarios", "ecosystem"],
    ctaTitle: "你的桌面，你自己来。",
    scenarios: [
      {
        id: "beauty",
        eyebrow: "场景 01 · 桌面美化",
        title: "桌面，就该长成你喜欢的样子",
        desc: "组件真正住在壁纸上，而不是浮在窗口上。",
        items: [
          {
            icon: "🖥️",
            title: "真·桌面层",
            desc: "组件常驻桌面壁纸，始终在所有窗口下面，不会被遮挡。",
          },
          {
            icon: "🌌",
            title: "壁纸级材料",
            desc: "云母、玻璃、纯色三档，模糊与着色取自实时壁纸，和桌面浑然一体。",
          },
          {
            icon: "🖌️",
            title: "皮肤系统",
            desc: "深色、浅色、自定义主题随时切换，玻璃模糊与着色单独可调。",
          },
          {
            icon: "🖱️",
            title: "拖得动，记得住",
            desc: "网格对齐、吸附引导线、多显示器独立记忆，插拔显示器也不乱。",
          },
        ],
      },
      {
        id: "efficiency",
        eyebrow: "场景 02 · 效率工具",
        title: "常用信息，一抬头就能看见",
        desc: "时钟、日历、待办、天气，放在桌面上随时可读。",
        items: [
          {
            icon: "🕐",
            title: "时钟",
            desc: "数字时钟与日期，支持秒针与 12/24 小时制。",
          },
          {
            icon: "📅",
            title: "日历",
            desc: "月历、农历、二十四节气与节假日。",
          },
          {
            icon: "✅",
            title: "待办",
            desc: "本地清单，隐藏已完成，数据存在本地。",
          },
          {
            icon: "☀️",
            title: "天气",
            desc: "Open-Meteo，无需 API Key，自动定位。",
          },
        ],
      },
      {
        id: "music",
        eyebrow: "场景 03 · 音乐歌词",
        title: "听歌的时候，歌词就在桌面上",
        desc: "读取系统正在播放的音乐，歌词跟着旋律滚动。",
        items: [
          {
            icon: "🎵",
            title: "系统媒体",
            desc: "读取系统播放状态，显示封面、进度与滚动歌词。",
          },
          {
            icon: "📜",
            title: "滚动歌词",
            desc: "歌词随播放进度滚动，支持多种尺寸与翻译。",
          },
          {
            icon: "🔎",
            title: "歌词来源",
            desc: "网易云优先，找不到再试 LRCLIB，欧美歌更全。",
          },
        ],
      },
      {
        id: "ai",
        eyebrow: "场景 04 · AI 助手",
        title: "按下快捷键，AI 就在身边",
        desc: "Ctrl + Alt + Space 呼出侧边栏，随时提问、解读文件、控制系统。",
        items: [
          {
            icon: "⌨️",
            title: "快速呼出",
            desc: "全局快捷键 Ctrl + Alt + Space，随时唤出与隐藏。",
          },
          {
            icon: "📄",
            title: "文件解读",
            desc: "支持 txt、md、json、csv、docx、xlsx、PDF 等文件。",
          },
          {
            icon: "🛠️",
            title: "工具调用",
            desc: "读文件、查系统、调音量，高风险操作需确认。",
          },
          {
            icon: "🤖",
            title: "多模型兼容",
            desc: "OpenAI 兼容接口，可自定义 baseUrl 与模型。",
          },
        ],
      },
    ],
    ecosystem: {
      title: "你的桌面，不止这几种组件",
      desc: "一个 manifest.json 加一个 index.js 就是一个新组件。QuickJS 沙箱隔离，插件之间互不干扰，任何人都能写自己的桌面组件。",
      ctaText: "开始写插件",
      ctaHref: "https://github.com/MacroSTAR-Org/Vectra/blob/main/PLUGIN_DEV.md",
    },
    ctaSub: "准备好体验 Vectra 0.2 了吗？",
    email: "contact@macrostar.top",
  },
  {
    slug: "lunar-bot-3",
    title: "Lunar Bot 3",
    subtitle: "大相径庭",
    tagline: "已归档项目",
    desc: "MacroSTAR 早期探索的智能机器人项目，现已归档，不再维护。",
    theme: PRODUCT_THEMES["lunar-bot-3"],
    sections: ["overview", "specs"],
    overview: {
      sub: "一段关于智能机器人的早期探索，现已画上句号。",
      paragraphs: [
        "Lunar Bot 3 是 MacroSTAR 工作室早期在智能机器人方向上的探索项目，曾致力于构建更易交互的机器人体验。该项目现已 Public Archive，正式停止开发与维护。",
        "感谢所有曾经关注与支持 Lunar Bot 3 的朋友。我们已将精力投入到新的产品之中，欢迎通过「其他产品」了解 MacroSTAR 当前的产品矩阵。",
      ],
      advantage:
        "虽然 Lunar Bot 3 已停止维护，但它留下的探索精神仍在延续——MacroSTAR 将继续在创新产品上前行，为你带来更多惊喜。",
    },
    specs: {
      sub: "项目已归档，以下为最终状态。",
      items: [
        { label: "项目状态", value: "已归档 (Archived)" },
        { label: "维护状态", value: "不再维护" },
        { label: "项目定位", value: "智能机器人探索项目" },
        { label: "版本", value: "最终版 (Final)" },
      ],
    },
    ctaSub: "Lunar Bot 3 已归档停更。来社区看看？",
    email: "contact@macrostar.top",
  },
  {
    slug: "Valley",
    title: "Lunar Valley XI",
    subtitle: "More Beautiful",
    tagline: "Windows 美化系统",
    desc: "由 Starfire Team 联合打造的 Windows 二次美化系统，更优美的界面，更流畅的体验。",
    theme: PRODUCT_THEMES["lunarvalleyx"],
    sections: ["overview", "gallery", "features", "specs"],
    overview: {
      sub: "由 Starfire Team 与 MacroSTAR 联合打造的 Windows 二次美化系统。",
      paragraphs: [
        "LunarValleyX 是由 Starfire Team 联合打造的 Windows 二次美化系统。它致力于提供更优美的系统界面，同时对系统进行一定量的优化，让你的 Windows 焕然一新。",
        "正如它的副标题「More Beautiful」——更优美，是 LunarValleyX 不变的追求。从视觉细节到运行体验，它都在努力让每一次使用都赏心悦目。",
      ],
      advantage:
        "LunarValleyX 将美观与性能合二为一：在带来更优美系统界面的同时兼顾系统优化，让美化不再以牺牲流畅为代价。",
    },
    gallery: {
      sub: "更优美的系统界面，眼见为实。（截图素材待补充）",
      items: [
        { icon: "🖼️", title: "桌面美化效果", desc: "界面截图待补充" },
        { icon: "🌅", title: "主题与壁纸", desc: "界面截图待补充" },
        { icon: "⚙️", title: "优化设置", desc: "界面截图待补充" },
        { icon: "🎉", title: "更多惊艳瞬间", desc: "界面截图待补充" },
      ],
    },
    features: {
      sub: "更优美，也更顺手。",
      items: [
        {
          icon: "🎨",
          title: "界面美化",
          desc: "从桌面到窗口，让 Windows 拥有更优美的外观。",
        },
        {
          icon: "⚡",
          title: "系统优化",
          desc: "对系统进行一定量的优化，使用更流畅。",
        },
        {
          icon: "🪟",
          title: "深度定制",
          desc: "基于 Windows 深度定制，贴合你的使用习惯。",
        },
        {
          icon: "✨",
          title: "开箱即用",
          desc: "简单几步完成美化，无需复杂配置。",
        },
      ],
    },
    specs: {
      sub: "以下为规划方向，最终以产品发布为准。",
      items: [
        { label: "产品形态", value: "Windows 二次美化系统" },
        { label: "联合打造", value: "Starfire Team · MacroSTAR" },
        { label: "核心能力", value: "界面美化 · 系统优化" },
        { label: "支持平台", value: "Windows" },
        { label: "版本", value: "待补充" },
      ],
    },
    feedback: {
      text: "意见反馈",
      href: "#",
    },
    ctaSub: "想让 Windows 更优美？欢迎体验 LunarValleyX，或告诉我们你的想法。",
    email: "contact@macrostar.top",
  },
];

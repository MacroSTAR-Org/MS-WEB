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

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  /** 一句话产品介绍（可为空） */
  desc: string;
  /** 卡片背景图（可选）：填写后横向卡片会用图片替换默认渐变背景 */
  image?: string;
  overviewSub: string;
  paragraphs: string[];
  advantage: string;
  featuresSub: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  ctaSub: string;
  email: string;
}

export const SITE = {
  name: "MacroSTAR",
  title: "宏维星智 - 智慧科技工作室",
  email: "contact@macrostar.top",
};

export const HERO = {
  title: "MacroSTAR Studio",
  subtitle: "宏维星智智慧科技工作室",
  description: "漫天星光，终将汇聚宏维星河！",
  explore: "了解产品",
  contact: "联系我们",
};

export interface ServiceCard {
  title: string;
  subtitle: string;
  id?: string;
  buttons: { text: string; href: string; type: "filled" | "outline" }[];
}

export const CARDS: { heading: string; sub: string; items: ServiceCard[] } = {
  heading: "我们的产品",
  sub: "从数据到落地，为你的项目保驾护航。",
  items: [
    {
      title: "大数据分析",
      subtitle: "让数据，替你做决策。",
      buttons: [
        { text: "进一步了解", href: "/#services", type: "filled" },
        { text: "开启合作", href: "/#contact", type: "outline" },
      ],
    },
    {
      title: "专业团队",
      subtitle: "平均 8 年行业经验。",
      buttons: [
        { text: "团队介绍", href: "/#contact", type: "filled" },
        { text: "联系我们", href: "/#contact", type: "outline" },
      ],
    },
    {
      title: "技术栈",
      subtitle: "我们信任并使用的工具。",
      buttons: [{ text: "进一步了解", href: "/#contact", type: "filled" }],
    },
    {
      title: "合作咨询",
      subtitle: "准备好项目了吗？",
      id: "contact",
      buttons: [
        { text: "发送邮件", href: `mailto:${SITE.email}`, type: "filled" },
        { text: "下载介绍", href: "/#contact", type: "outline" },
      ],
    },
  ],
};

/* ========== 成员墙（hover 揭示照片墙） ========== */
export interface Member {
  /** 姓名 / 昵称 */
  name: string;
  /** 角色 / 职位（可选，留空则只显示姓名） */
  role?: string;
  /** 头像路径，放在 public/team/ 下，引用形如 "/team/xxx.jpg"；留空则用首字母占位 */
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
 *        bio: "热爱把想法变成产品。", avatar: "/team/11夏辉.jpg" }
 */
export const TEAM: { heading: string; sub: string; members: Member[] } = {
  heading: "团队成员 - Team Member",
  sub: "漫天星光，终将汇聚宏维星河——认识 MacroSTAR 背后的每一位伙伴。",
  members: [
    { name: "夏子涵", role:"CEO", tags: ["全栈"], bio: "hello world", avatar: "/team/11夏辉.jpg" },
    { name: "离坎",role:"CTO", avatar: "/team/33离坎.jpg" },
    { name: "RBC", role:"软件工程 高级副总裁", avatar: "/team/12RBC.jpg" },
    { name: "山止川行", role:"财务总经理兼人事总经理", avatar: "/team/66山川.jpg" },
    { name: "FUUSA", avatar: "/team/10FUUSA.jpg" },
    { name: "SR", avatar: "/team/11SR.jpg" },
    { name: "jerry", avatar: "/team/13jerry.jpg" },
    { name: "🦷", avatar: "/team/14🦷.jpg" },
    { name: "ljc", avatar: "/team/15ljc.jpg" },
    { name: "rinlit", avatar: "/team/16rinlit.jpg" },
    { name: "starfire", avatar: "/team/17starfire.png" },
    { name: "tc", avatar: "/team/18tc.jpg" },
    { name: "wym", avatar: "/team/19wym.jpg" },
    { name: "kjy", avatar: "/team/20kjy.jpg" },
    { name: "sheep", avatar: "/team/21sheep.jpg" },
    { name: "nia", avatar: "/team/22nia.jpg" },
    { name: "kyx", avatar: "/team/23kyx.jpg" },
    { name: "林浅月", avatar: "/team/44林浅月.jpg" },
    { name: "yany", avatar: "/team/55yany.jpg" },
    { name: "山川", avatar: "/team/66山川.jpg" },
    { name: "wyf9", avatar: "/team/77wyf9.jpg" },
    { name: "maozi", avatar: "/team/88maozi.jpg" },
    { name: "PPT", avatar: "/team/99PPT.jpg" },
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
}

export const FRIENDLY_LINKS: { heading: string; sub: string; items: FriendlyLink[] } = {
  heading: "友情链接",
  sub: "值得信赖的伙伴与资源。",
  items: [
    { name: "合作伙伴 A", url: "https://example.com", desc: "待补充描述" },
    { name: "合作伙伴 B", url: "https://example.org", desc: "待补充描述" },
    { name: "合作伙伴 C", url: "https://example.net", desc: "待补充描述" },
    { name: "合作伙伴 D", url: "https://example.edu", desc: "待补充描述" },
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
        { text: "MacroWidgets", href: "/products/macrowidgets" },
        { text: "Lunar Bot 系列", href: "/products/lunar-bot-3" },
        { text: "LunarValleyX", href: "/products/lunarvalleyx" },
      ],
    },
    {
      title: "公司",
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
  specsSub: "待补充：产品的技术规格与参数。",
  ctaTitle: "准备好开始了吗？",
  ctaEmail: "发送邮件咨询",
  ctaBack: "返回联系我们",
  othersTitle: "其他产品",
  viewDetail: "查看详情 →",
};

/* ========== 产品列表（每个产品一个独立页面） ========== */
export const PRODUCTS: Product[] = [
  {
    slug: "lunar-x",
    title: "Lunar X",
    subtitle: "新势力，轻装上阵",
    tagline: "AI 平台",
    desc: "待补充：一句话产品介绍，突出核心价值。",
    overviewSub: "待补充：简要描述 Lunar X 的定位与核心价值。",
    paragraphs: ["待补充：产品详细介绍第一段。", "待补充：产品详细介绍第二段。"],
    advantage: "待补充：描述产品的关键优势。",
    featuresSub: "待补充：简要说明主要功能模块。",
    features: [
      { icon: "🤖", title: "智能核心", desc: "待补充。" },
      { icon: "⚡", title: "高性能", desc: "待补充。" },
      { icon: "🔧", title: "灵活集成", desc: "待补充。" },
    ],
    specs: [
      { label: "核心能力", value: "待补充" },
      { label: "支持接口", value: "OneBot / Milky" },
      { label: "部署方式", value: "云端 / 本地" },
      { label: "支持平台", value: "Web · Windows · Linux" },
      { label: "版本", value: "v1.0" },
    ],
    ctaSub: "了解更多关于 Lunar X 的信息，或获取定制化方案。",
    email: "contact@macrostar.top",
  },
  {
    slug: "linden",
    title: "林笙 · Linden",
    subtitle: "陪你，帮你，让你，做你",
    tagline: "Web 开发平台",
    desc: "待补充：一句话产品介绍，突出核心价值。",
    overviewSub: "待补充：简要描述林笙 Linden 的定位与核心价值。",
    paragraphs: ["待补充：产品详细介绍第一段。", "待补充：产品详细介绍第二段。"],
    advantage: "待补充：描述产品的关键优势。",
    featuresSub: "待补充：简要说明主要功能模块。",
    features: [
      { icon: "🌿", title: "简洁设计", desc: "待补充。" },
      { icon: "⚙️", title: "开发便捷", desc: "待补充。" },
      { icon: "📦", title: "组件丰富", desc: "待补充。" },
    ],
    specs: [
      { label: "技术栈", value: "待补充" },
      { label: "支持框架", value: "React · Vue · 原生" },
      { label: "部署方式", value: "云端 / 本地服务器" },
      { label: "浏览器支持", value: "Chrome · Safari · Firefox · Edge" },
      { label: "版本", value: "v1.0" },
    ],
    ctaSub: "了解更多关于 林笙 · Linden 的信息，或获取定制化方案。",
    email: "contact@macrostar.top",
  },
  {
    slug: "macrowidgets",
    title: "山止组件 MacroWidgets",
    subtitle: "方寸之间",
    tagline: "移动组件库",
    desc: "待补充：一句话产品介绍，突出核心价值。",
    overviewSub: "待补充：简要描述山止组件的定位与核心价值。",
    paragraphs: ["待补充：产品详细介绍第一段。", "待补充：产品详细介绍第二段。"],
    advantage: "待补充：描述产品的关键优势。",
    featuresSub: "待补充：简要说明主要功能模块。",
    features: [
      { icon: "📱", title: "跨平台", desc: "待补充。" },
      { icon: "🎨", title: "精美设计", desc: "待补充。" },
      { icon: "⚡", title: "高性能", desc: "待补充。" },
    ],
    specs: [
      { label: "组件数量", value: "待补充" },
      { label: "支持平台", value: "iOS · Android · Web" },
      { label: "框架支持", value: "Flutter · React Native · 原生" },
      { label: "主题切换", value: "支持浅色 / 深色模式" },
      { label: "版本", value: "v1.0" },
    ],
    ctaSub: "了解更多关于山止组件的信息，或获取定制化方案。",
    email: "contact@macrostar.top",
  },
  {
    slug: "lunar-bot-3",
    title: "Lunar Bot 3",
    subtitle: "大相径庭",
    tagline: "智能机器人",
    desc: "待补充：一句话产品介绍，突出核心价值。",
    overviewSub: "待补充：简要描述 Lunar Bot 3 的定位与核心价值。",
    paragraphs: ["待补充：产品详细介绍第一段。", "待补充：产品详细介绍第二段。"],
    advantage: "待补充：描述产品的关键优势。",
    featuresSub: "待补充：简要说明主要功能模块。",
    features: [
      { icon: "🤖", title: "智能交互", desc: "待补充。" },
      { icon: "👁️", title: "视觉识别", desc: "待补充。" },
      { icon: "🦾", title: "精准控制", desc: "待补充。" },
    ],
    specs: [
      { label: "处理器", value: "待补充" },
      { label: "传感器", value: "待补充：摄像头 · 激光雷达等" },
      { label: "续航时间", value: "待补充" },
      { label: "连接方式", value: "Wi-Fi · 蓝牙" },
      { label: "版本", value: "第三代 (Gen 3)" },
    ],
    ctaSub: "了解更多关于 Lunar Bot 3 的信息，或获取定制化方案。",
    email: "contact@macrostar.top",
  },
  {
    slug: "lunarvalleyx",
    title: "LunarValleyX",
    subtitle: "More Beautiful",
    tagline: "云端服务",
    desc: "",
    overviewSub: "待补充：简要描述 LunarValleyX 的定位与核心价值。",
    paragraphs: ["待补充：产品详细介绍第一段。", "待补充：产品详细介绍第二段。"],
    advantage: "待补充：描述产品的关键优势。",
    featuresSub: "待补充：简要说明主要功能模块。",
    features: [
      { icon: "☁️", title: "云端部署", desc: "待补充。" },
      { icon: "🔒", title: "安全可靠", desc: "待补充。" },
      { icon: "📈", title: "弹性扩展", desc: "待补充。" },
    ],
    specs: [
      { label: "服务类型", value: "待补充：IaaS / PaaS / SaaS" },
      { label: "可用区", value: "待补充" },
      { label: "存储", value: "待补充" },
      { label: "API 调用", value: "RESTful · GraphQL" },
      { label: "版本", value: "v1.0" },
    ],
    ctaSub: "了解更多关于 LunarValleyX 的信息，或获取定制化方案。",
    email: "contact@macrostar.top",
  },
];

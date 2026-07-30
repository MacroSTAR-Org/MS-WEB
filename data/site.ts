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
    { name: "夏子涵", role:"首席执行官&创始人", tags: ["全栈"], bio: "Hello World.", avatar: "https://q1.qlogo.cn/g?b=qq&nk=2473768771%7D&s=640" },
    { name: "离坎",role:"董事长", tags:  ["监工"], avatar: "https://q1.qlogo.cn/g?b=qq&nk=2726001724%7D&s=640" },
    { name: "后藤一里", role:"软件工程 高级副总裁", avatar: "https://q1.qlogo.cn/g?b=qq&nk=1348472639%7D&s=640" },
    { name: "Maozi", role:"副总裁", avatar: "https://q1.qlogo.cn/g?b=qq&nk=2180312206%7D&s=640" },
    { name: "山止川行", role:"财务总监兼人力资源总监", tags: ["银行"], avatar: "https://q1.qlogo.cn/g?b=qq&nk=2792216821%7D&s=640" },
    { name: "木易yany", role:"法务总监", avatar: "https://q1.qlogo.cn/g?b=qq&nk=1493383980%7D&s=640" },
    { name: "SR思锐 开发者", role:"合作伙伴&技术支持", avatar: "https://q1.qlogo.cn/g?b=qq&nk=169368309%7D&s=640" },
    { name: "wyf9", role:"合作伙伴&技术支持", avatar: "https://q1.qlogo.cn/g?b=qq&nk=2191161566%7D&s=640" },
    { name: "FUUSA", role:"软件工程师", tags: ["C++"], avatar: "https://q1.qlogo.cn/g?b=qq&nk=137960472%7D&s=640" },
    { name: "J2rQ(y)", role:"软件工程师", tags: ["Python"], avatar: "https://q1.qlogo.cn/g?b=qq&nk=2414528438%7D&s=640" },
    { name: "ljc", role:"社区管理",tags: ["离线"], avatar: "https://q1.qlogo.cn/g?b=qq&nk=3558516573%7D&s=640" },
    { name: "RinLit", role:"美术设计", avatar: "https://q1.qlogo.cn/g?b=qq&nk=3295014118%7D&s=640" },
    { name: "Starfire", role:"LunarValleyX 产品总监", avatar: "https://q1.qlogo.cn/g?b=qq&nk=3428848818%7D&s=640" },
    { name: "Tom Chicken", role:"技术支持", avatar: "https://q1.qlogo.cn/g?b=qq&nk=2674407845%7D&s=640" },
    { name: "吻一秒", role:"宏吾星耀-执行董事&创始人&艺人", avatar: "https://q1.qlogo.cn/g?b=qq&nk=2383443986%7D&s=640" },
    { name: "左右更偏左", role:"宏吾星耀-艺人", avatar: "https://q1.qlogo.cn/g?b=qq&nk=3388363828%7D&s=640" },
    { name: "屿川", role:"宏吾星耀-艺术总监&艺人", avatar: "https://q1.qlogo.cn/g?b=qq&nk=1903652434%7D&s=640" },
    { name: "困困鱼", role:"宏吾星耀-运营总监", avatar: "https://q1.qlogo.cn/g?b=qq&nk=3211998128%7D&s=640" },
    { name: "羊村里的小羊", role:"宏吾星耀-作曲家", avatar: "https://q1.qlogo.cn/g?b=qq&nk=2765941099%7D&s=640" },
    { name: "NIANIA", role:"宏吾星耀-艺人", avatar: "https://q1.qlogo.cn/g?b=qq&nk=3407739763%7D&s=640" },
    { name: "可用性", role:"宏吾星耀-剪辑师", avatar: "https://q1.qlogo.cn/g?b=qq&nk=3816006721%7D&s=640" },
    { name: "林浅月", role:"吉祥物", avatar: "https://q1.qlogo.cn/g?b=qq&nk=2221840752%7D&s=640" },
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

export const FRIENDLY_LINKS: { heading: string; sub: string; items: FriendlyLink[] } = {
  heading: "友情链接",
  sub: "值得信赖的伙伴与资源。",
  items: [
    { name: "SR思锐 团队", url: "https://sr-studio.cn/", desc: "一个以创新创造为导向的青少年编程学习与实践社区，和伙伴们一起用代码创造未来。", logo: "/logos/sr-studio.png" },
    { name: "DCR 学生互助频道", url: "https://www.dcr2026.com/", desc: "一个温暖、免费、专业、易用的学生互助社区", logo: "/logos/dcr.png" },
    { name: "Class Widgets", url: "https://classwidgets.rinlit.cn/", desc: "多样的桌面课表", logo: "/logos/classwidgets.png" },
    { name: "SiiWay Team", url: "https://siiway.org/", desc: "Building Open Source Software in the AI Era.", logo: "/logos/siiway.png" },
    { name: "ColudAI", url: "https://coludai.cn/", desc: "创新，开启新世界；下一代人工智能解决方案", logo: "/logos/coludai.png" },
    { name: "Project Hazelita", url: "https://qm.qq.com/q/RoDLH2u7SY", desc: "一个友爱、开放、友好、多样的技术交流社群", logo: "/logos/hazelita.png" },
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

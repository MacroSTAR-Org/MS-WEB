import { useRef } from "react";
import { PRODUCTS, PRODUCTS_NAV, PRODUCT_COMMON as C } from "@/data/site";

/**
 * 每张卡片的默认渐变背景预设（无 image 时使用）。
 * 后期若在 data/site.ts 的产品上填写 image 字段，图片会自动替换此渐变。
 * 注意：按 PRODUCTS 顺序一一对应，新增产品时把预设插到同一位置，
 * 否则后面所有卡片的配色会整体错位。
 */
const GRADIENTS = [
  // 方舟班级中心（已有封面图，此为兜底）
  "from-sky-600/40 via-blue-700/30 to-slate-700/40",
  // Lunar X
  "from-blue-600/40 via-indigo-700/30 to-purple-700/40",
  // 山止组件 Vectra
  "from-emerald-600/40 via-teal-700/30 to-cyan-700/40",
  // Lunar Bot 3
  "from-fuchsia-600/40 via-purple-700/30 to-indigo-700/40",
  // Lunar Valley XI
  "from-amber-600/40 via-orange-700/30 to-rose-700/40",
];

const ProductCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    // 每次滚动约一张卡片的宽度
    const amount = Math.max(el.clientWidth * 0.8, 320);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="products" className="scroll-mt-24">
      <div
        className="mb-8 flex items-end justify-between gap-4"
        data-reveal="fade-up"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold lg:text-4xl">
            {PRODUCTS_NAV.heading}
          </h2>
          <p className="text-lg text-subtle">{PRODUCTS_NAV.sub}</p>
        </div>
        {/* 桌面端左右箭头 */}
        <div className="hidden shrink-0 gap-3 md:flex">
          <button
            type="button"
            aria-label="上一个"
            onClick={() => scrollBy(-1)}
            className="ease-out flex h-11 w-11 items-center justify-center rounded-full border border-border bg-translucent text-xl text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-translucent-hover"
          >
            &#8249;
          </button>
          <button
            type="button"
            aria-label="下一个"
            onClick={() => scrollBy(1)}
            className="ease-out flex h-11 w-11 items-center justify-center rounded-full border border-border bg-translucent text-xl text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-translucent-hover"
          >
            &#8250;
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide -mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pb-4"
      >
        {PRODUCTS.map((p, idx) => (
          <a
            key={p.slug}
            href={`/products/${p.slug}`}
            className="ease-out group relative flex h-64 w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-72 lg:h-72 lg:w-80"
            data-reveal="fade-left"
            data-reveal-delay={Math.min(idx * 60, 240)}
          >
            {/* ===== 背景层：渐变（后期可用图片替换） ===== */}
            <div className="absolute inset-0">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className={`h-full w-full bg-gradient-to-br ${
                    GRADIENTS[idx % GRADIENTS.length]
                  }`}
                />
              )}
            </div>
            {/* 浅色模式下的提亮/降饱和层（深色模式为透明） */}
            <div className="pointer-events-none absolute inset-0 bg-card-wash" />
            {/* 暗色叠层：保证文字在图片/渐变上可读 */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* ===== 内容层（始终位于彩色/深色遮罩之上，固定浅色文字） ===== */}
            <div className="relative z-10 flex h-full flex-col p-6 text-white">
              <span className="w-fit rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs tracking-wide text-white backdrop-blur-sm">
                {p.tagline}
              </span>
              <div className="mt-auto flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.subtitle}</p>
                <span className="mt-2 text-sm text-blue-400 transition-colors group-hover:text-blue-300">
                  {C.viewDetail}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;

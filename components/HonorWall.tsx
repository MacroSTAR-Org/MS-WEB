import { HONOR_WALL } from "@/data/site";

/** 无照片时的金色占位渐变（按序轮换） */
const GRADIENTS = [
  "from-amber-500 to-yellow-600",
  "from-yellow-600 to-amber-700",
  "from-amber-600 to-orange-700",
  "from-yellow-500 to-amber-600",
];

/** 取姓名首个字符（正确处理 emoji/代理对） */
const firstChar = (s: string) => Array.from(s)[0] ?? "?";

const HonorWall = () => {
  return (
    <section id="honor-wall" className="scroll-mt-24">
      <div className="mb-12 flex flex-col gap-4" data-aos="fade-up">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          {HONOR_WALL.heading}
        </h2>
        <p className="text-lg text-subtle">{HONOR_WALL.sub}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {HONOR_WALL.members.map((m, idx) => {
          const hasReveal = Boolean(m.contribution || (m.tags && m.tags.length > 0));
          return (
            <div
              key={`${m.name}-${idx}`}
              tabIndex={0}
              className="ease-bounce group relative aspect-square overflow-hidden rounded-2xl border border-border outline-none transition-all duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-accent"
              data-aos="fade-up"
              data-aos-delay={Math.min(idx * 40, 400)}
            >
              {/* 照片 / 金色占位 */}
              {m.avatar ? (
                <img
                  src={encodeURI(m.avatar)}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus-within:scale-105"
                />
              ) : (
                <div
                  className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
                    GRADIENTS[idx % GRADIENTS.length]
                  } text-4xl font-semibold text-white`}
                >
                  <span className="drop-shadow-sm">{firstChar(m.name)}</span>
                </div>
              )}

              {/* 星星水印（无照片时暗示星光） */}
              {!m.avatar && (
                <span className="pointer-events-none absolute right-3 top-3 text-lg text-white/40">
                  ✦
                </span>
              )}

              {/* 暗色遮罩：底部常驻，hover/聚焦时加深 */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:via-black/40 group-focus-within:from-black/90 group-focus-within:via-black/40" />

              {/* 信息层（文字固定白色，深浅模式均可读） */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col p-3 text-white sm:p-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold sm:text-base">
                    {m.name}
                  </span>
                  {m.badge && (
                    <span className="rounded-full border border-amber-300/60 bg-amber-400/20 px-2 py-0.5 text-[10px] font-medium text-amber-200 backdrop-blur-sm">
                      {m.badge}
                    </span>
                  )}
                </div>
                {m.role && <span className="text-xs text-white/70">{m.role}</span>}

                {/* hover / 聚焦展开：贡献 + 年份 + 标签（grid-rows 0fr→1fr 平滑展开） */}
                {hasReveal && (
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
                    <div className="overflow-hidden">
                      {m.contribution && (
                        <p className="mt-2 text-xs leading-relaxed text-white/80">
                          {m.contribution}
                        </p>
                      )}
                      {m.period && (
                        <span className="mt-1.5 inline-block text-[11px] text-amber-200/90">
                          {m.period}
                        </span>
                      )}
                      {m.tags && m.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {m.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] backdrop-blur-sm"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HonorWall;

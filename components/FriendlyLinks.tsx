import { FRIENDLY_LINKS } from "@/data/site";

const firstChar = (s: string) => Array.from(s)[0] ?? "?";

const FriendlyLinks = () => (
  <section id="links" className="scroll-mt-24">
    <div className="mb-12 flex flex-col gap-4" data-aos="fade-up">
      <h2 className="text-3xl font-semibold lg:text-4xl">
        {FRIENDLY_LINKS.heading}
      </h2>
      <p className="text-lg text-subtle">{FRIENDLY_LINKS.sub}</p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {FRIENDLY_LINKS.items.map((link, idx) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ease-bounce group flex items-center gap-4 rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-card-hover focus-visible:ring-2 focus-visible:ring-accent"
          data-aos="fade-up"
          data-aos-delay={Math.min(idx * 80, 400)}
        >
          {/* Logo区域 */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card transition-transform duration-300 group-hover:scale-105">
            {link.logo ? (
              <img
                src={link.logo}
                alt={link.name}
                loading="lazy"
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <span className="text-2xl font-semibold text-muted">
                {firstChar(link.name)}
              </span>
            )}
          </div>

          {/* 文字区域 */}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span className="truncate text-sm font-semibold">{link.name}</span>
              <svg
                className="h-3.5 w-3.5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
            {link.desc && (
              <p className="line-clamp-2 text-xs leading-relaxed text-subtle">
                {link.desc}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FriendlyLinks;

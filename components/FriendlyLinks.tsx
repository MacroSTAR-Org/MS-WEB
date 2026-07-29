import { FRIENDLY_LINKS } from "@/data/site";

const GRADIENTS = [
  "from-violet-600 to-indigo-700",
  "from-rose-600 to-pink-700",
  "from-cyan-600 to-blue-700",
  "from-amber-600 to-orange-700",
  "from-emerald-600 to-teal-700",
  "from-fuchsia-600 to-purple-700",
];

const firstChar = (s: string) => Array.from(s)[0] ?? "?";

const FriendlyLinks = () => (
  <section id="links" className="scroll-mt-24">
    <div className="mb-12 flex flex-col gap-4" data-aos="fade-up">
      <h2 className="text-3xl font-semibold lg:text-4xl">
        {FRIENDLY_LINKS.heading}
      </h2>
      <p className="text-lg text-subtle">{FRIENDLY_LINKS.sub}</p>
    </div>

    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {FRIENDLY_LINKS.items.map((link, idx) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="ease-bounce group flex flex-col overflow-hidden rounded-2xl border border-border bg-card outline-none transition-all duration-300 hover:scale-[1.02] hover:bg-card-hover focus-visible:ring-2 focus-visible:ring-accent"
          data-aos="fade-up"
          data-aos-delay={Math.min(idx * 80, 400)}
        >
          {/* Logo 区：渐变首字母 */}
          <div
            className={`flex aspect-square items-center justify-center bg-gradient-to-br ${GRADIENTS[idx % GRADIENTS.length]} text-4xl font-semibold text-white transition-transform duration-300 group-hover:scale-105`}
          >
            {firstChar(link.name)}
          </div>

          {/* 文字区 */}
          <div className="flex flex-1 flex-col justify-center gap-1 px-5 py-4">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold">{link.name}</span>
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
              <p className="text-xs leading-relaxed text-subtle">{link.desc}</p>
            )}
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FriendlyLinks;

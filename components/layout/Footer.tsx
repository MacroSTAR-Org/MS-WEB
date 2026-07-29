import { FOOTER } from "@/data/site";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="max-w-8xl mx-auto px-8 py-16 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <span className="gradient-text text-xl font-bold">MacroSTAR</span>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {FOOTER.desc}
            </p>
          </div>
          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold tracking-wide text-gray-300">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.items.map((it) => (
                  <li key={it.text}>
                    <a
                      href={it.href}
                      className="text-sm break-all text-gray-400 transition-colors hover:text-white"
                    >
                      {it.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">{FOOTER.bottom.copyright}</p>
          <div className="flex gap-4">
            {FOOTER.bottom.links.map((l) => (
              <a
                key={l.text}
                href={l.href}
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                {l.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import ThemeToggle from "@/components/ui/ThemeToggle";
import { PRODUCTS } from "@/data/site";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/products/lunar-x", label: "产品", dropdown: true },
  { href: "/#contact", label: "关于我们" },
  { href: "/#team", label: "团队" },
  { href: "/#links", label: "友情链接" },
];

const productLinks = PRODUCTS.map((p) => ({
  href: `/products/${p.slug}`,
  label: p.title,
}));

const Header = ({ initialPath = "" }: { initialPath?: string }) => {
  const normalizePath = (path: string) => {
    // 移除尾部的斜杠，但保留根路径的斜杠
    if (path.length > 1 && path.endsWith("/")) {
      return path.slice(0, -1);
    }
    return path;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(normalizePath(initialPath));

  useEffect(() => {
    const path = normalizePath(new URL(window.location.href).pathname);
    setCurrentPath(path);

    const handlePopstate = () => {
      const nextPath = normalizePath(new URL(window.location.href).pathname);
      setCurrentPath(nextPath);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const isActive = (href: string) =>
    currentPath === normalizePath(href.replace(/#.*$/, "") || "/");

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div
        aria-hidden="true"
        className="header-frost pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-elevated/90 via-elevated/50 to-transparent shadow-sm backdrop-blur-md"
      />
      <nav className="relative z-10 container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/">
          <div className="flex items-center space-x-2">
            <span className="gradient-text-static text-xl font-bold">MacroSTAR</span>
          </div>
        </a>
        <div className="hidden items-center space-x-6 md:flex">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="group relative">
                <a
                  href={item.href}
                  className={`text-muted hover:text-accent relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 ${
                    isActive(item.href)
                      ? "after:scale-x-100"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="border-border bg-elevated invisible absolute left-1/2 z-50 mt-2 w-56 translate-y-1 -translate-x-1/2 rounded-xl border p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {productLinks.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="text-muted hover:bg-translucent-hover hover:text-foreground block rounded-lg px-3 py-2 text-sm transition-colors"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <a
            href="/#contact"
            className="ease-out bg-translucent text-foreground hover:bg-translucent-hover rounded-full px-4 py-1.5 text-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            联系我们
          </a>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted focus:outline-none"
            aria-label="切换菜单"
          >
            <svg
              className="h-6 w-6 transition-transform duration-200 ease-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`relative z-10 overflow-hidden shadow-sm transition-all duration-200 ease-out md:hidden ${
          isOpen
            ? "bg-elevated max-h-[calc(100vh-64px)] opacity-100 backdrop-blur-md"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-2 px-4 pb-4">
          {navItems
            .filter((item) => !item.dropdown)
            .map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted hover:text-accent block py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          <div className="border-border mt-2 border-t pt-2">
            <p className="text-subtle py-1 text-sm">产品</p>
            {productLinks.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="text-muted hover:text-accent block py-2 pl-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {p.label}
              </a>
            ))}
          </div>
          <div className="border-border mt-2 border-t pt-2">
            <ThemeToggle variant="row" />
          </div>
          <a
            href="/#contact"
            className="bg-translucent text-foreground hover:bg-translucent-hover mt-2 block rounded-full px-4 py-2 text-center text-sm backdrop-blur-sm transition-colors"
            onClick={() => setIsOpen(false)}
          >
            联系我们
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";

import { PRODUCTS } from "@/data/site";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/products/lunar-x", label: "产品", dropdown: true },
  { href: "/#services", label: "服务" },
  { href: "/#contact", label: "关于" },
];

const productLinks = PRODUCTS.map((p) => ({
  href: `/products/${p.slug}`,
  label: p.title,
}));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [overHero, setOverHero] = useState(true);

  const normalizePath = (path: string) => {
    // 移除尾部的斜杠，但保留根路径的斜杠
    if (path.length > 1 && path.endsWith("/")) {
      return path.slice(0, -1);
    }
    return path;
  };

  useEffect(() => {
    setCurrentPath(normalizePath(new URL(window.location.href).pathname));

    const handlePopstate = () => {
      setCurrentPath(normalizePath(new URL(window.location.href).pathname));
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOverHero(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    currentPath === normalizePath(href.replace(/#.*$/, "") || "/");

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full ${overHero ? "" : "bg-gray-900/80 shadow-sm backdrop-blur-md"}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/">
          <div className="flex items-center space-x-2">
            <span className="gradient-text text-xl font-bold">MacroSTAR</span>
          </div>
        </a>
        <div className="hidden items-center space-x-6 md:flex">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <div key={item.href} className="group relative">
                <a
                  href={item.href}
                  className={`relative text-gray-200 transition-colors hover:text-blue-400 ${
                    isActive(item.href)
                      ? "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#7dd3fc] after:transition-all after:content-['']"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="invisible absolute left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-gray-900/95 p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {productLinks.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
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
            className="ease-bounce rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white/20"
          >
            联系我们
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none"
            aria-label="切换菜单"
          >
            <svg
              className="h-6 w-6 transition-all duration-300 ease-in-out"
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
        className={`overflow-hidden shadow-sm transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[calc(100vh-64px)] bg-gray-900/90 opacity-100 backdrop-blur-md"
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
                className="block py-2 text-gray-200 transition-colors hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          <div className="mt-2 border-t border-gray-600 pt-2">
            <p className="py-1 text-sm text-gray-400">产品</p>
            {productLinks.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="block py-2 pl-3 text-gray-200 transition-colors hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {p.label}
              </a>
            ))}
          </div>
          <a
            href="/#contact"
            className="mt-2 block rounded-full bg-white/10 px-4 py-2 text-center text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
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

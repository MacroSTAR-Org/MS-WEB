import type { JSX } from "react";
import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const ORDER: Theme[] = ["system", "light", "dark"];

const LABELS: Record<Theme, string> = {
  system: "跟随系统",
  light: "浅色",
  dark: "深色",
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === "light" || theme === "dark") {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  } else {
    root.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }
};

const readTheme = (): Theme => {
  try {
    const t = localStorage.getItem("theme");
    if (t === "light" || t === "dark") return t;
  } catch (e) {
    /* ignore */
  }
  return "system";
};

const icons: Record<Theme, JSX.Element> = {
  system: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  light: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ),
  dark: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
};

/**
 * 主题切换：循环「跟随系统 → 浅色 → 深色」。
 * @param variant "icon" 桌面端圆形图标按钮；"row" 移动菜单整行按钮。
 */
const ThemeToggle = ({ variant = "icon" }: { variant?: "icon" | "row" }) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    setTheme(next);
    applyTheme(next);
  };

  // 未挂载前用 system 占位，避免水合不一致
  const current = mounted ? theme : "system";

  if (variant === "row") {
    return (
      <button
        type="button"
        onClick={cycle}
        aria-label={`主题：${LABELS[current]}`}
        className="ease-out flex w-full items-center justify-between rounded-lg px-3 py-2 text-muted transition-colors hover:bg-translucent-hover hover:text-foreground"
      >
        <span className="flex items-center gap-2">
          <span
            key={current}
            className="theme-icon-animate flex h-5 w-5 items-center justify-center"
          >
            {icons[current]}
          </span>
          主题
        </span>
        <span className="text-sm text-subtle">{LABELS[current]}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`主题：${LABELS[current]}（点击切换）`}
      title={`主题：${LABELS[current]}`}
      className="ease-out flex h-9 w-9 items-center justify-center rounded-full border border-border bg-translucent text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-translucent-hover hover:shadow-lg"
    >
      <span
        key={current}
        className="theme-icon-animate flex h-5 w-5 items-center justify-center"
      >
        {icons[current]}
      </span>
    </button>
  );
};

export default ThemeToggle;

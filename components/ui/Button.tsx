import type { JSX, ReactNode } from "react";

export const Button = ({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}): JSX.Element => {
  return (
    <a
      href={href}
      className={`ease-out rounded-md bg-foreground px-4 py-2 text-background transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:px-6 lg:py-4 ${className ?? ""}`}
    >
      {children}
    </a>
  );
};

export const TransparentButton = ({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className?: string;
}): JSX.Element => {
  return (
    <a
      href={href}
      className={`ease-out rounded-md border border-border bg-translucent px-4 py-2 text-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-translucent-hover hover:shadow-lg lg:px-6 lg:py-4 ${className ?? ""}`}
    >
      {children}
    </a>
  );
};

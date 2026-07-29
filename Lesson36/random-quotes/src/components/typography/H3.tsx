import type { ReactNode } from "react";

export interface H3Interface {
  element: "h1" | "p" | "span";
  children: ReactNode;
  className?: string;
}

export function H3({ element, children, className = "" }: H3Interface) {
  const sharedClassName = [
    "text-2xl font-semibold leading-tight tracking-tight text-foreground",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  switch (element) {
    case "p":
      return <p className={sharedClassName}>{children}</p>;

    case "span":
      return <span className={sharedClassName}>{children}</span>;

    case "h1":
      return <h1 className={sharedClassName}>{children}</h1>;

    default:
      return <h3 className={sharedClassName}>{children}</h3>;
  }
}

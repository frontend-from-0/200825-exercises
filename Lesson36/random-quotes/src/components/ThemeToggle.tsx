"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    const isDark =
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);

    setTheme(isDark ? "dark" : "light");
    setIsMounted(true);
  }, []);

  function handleThemeToggle() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  if (!isMounted) {
    return <div className="size-11 shrink-0" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="
        flex size-11 shrink-0 items-center justify-center
        rounded-xl
        border border-border
        bg-card
        text-card-foreground
        shadow-sm
        transition-all duration-200
        hover:bg-accent
        hover:text-accent-foreground
        hover:shadow-md
        active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-ring
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
      "
    >
      {isDark ? (
        <SunMedium className="size-5" />
      ) : (
        <MoonStar className="size-5" />
      )}
    </button>
  );
}

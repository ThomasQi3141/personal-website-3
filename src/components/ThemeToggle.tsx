"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      localStorage.getItem("theme")) as Theme | null;
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
      setTheme(saved);
      setMounted(true);
      return;
    }
    setTheme(null);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  const isDark = mounted
    ? document.documentElement.getAttribute("data-theme") === "dark" ||
      (theme === null &&
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    : null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="h-10 w-10 rounded-full border themed-border transition-colors flex items-center justify-center themed-hover cursor-default hover:cursor-pointer"
      style={{ lineHeight: 0 }}>
      {isDark === null ? (
        // Neutral placeholder icon to avoid hydration mismatch
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground">
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ) : isDark ? (
        // Sun icon
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground">
          <path
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        // Moon icon
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground">
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3c0 .34.02.68.06 1.01a7 7 0 0 0 8.72 8.72c.33.04.67.06 1.01.06Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

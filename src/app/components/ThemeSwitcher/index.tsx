"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

type Props = {
  className?: string;
};

const COLOR_THEMES = ["light", "dark", "system"] as const;

export function ThemeSwitcher({ className = "" }: Props) {
  const { theme: activeTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isActiveTheme = useCallback(
    (theme: string) => theme === activeTheme,
    [activeTheme]
  );

  const switchTheme = useCallback(
    (newTheme: "light" | "dark" | "system") => () => setTheme(newTheme),
    [setTheme]
  );

  return (
    <aside
      className={`w-full flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm ${className}`}
    >
      <p className="font-medium">Choose theme:</p>
      <div className="flex flex-row items-center gap-1">
        {COLOR_THEMES.map((theme) => (
          <button
            key={theme}
            onClick={switchTheme(theme)}
            disabled={mounted ? isActiveTheme(theme) : undefined}
            className="capitalize rounded-md px-1 py-0.5 border-solid border-[1px] border-white [&:not(:disabled)]:hover:underline disabled:text-zinc-600 disabled:bg-zinc-50 disabled:border-zinc-400 dark:border-black dark:disabled:text-zinc-100 dark:disabled:bg-zinc-800 dark:disabled:border-zinc-500"
          >
            {theme}
          </button>
        ))}
      </div>
    </aside>
  );
}

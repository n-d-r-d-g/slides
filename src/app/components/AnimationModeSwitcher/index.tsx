"use client";

import { useAnimationMode } from "@/app/context/AnimationMode";
import { AnimationMode } from "@/app/types";
import { useCallback } from "react";
import { ANIMATION_MODES } from "../../utils/constants";

type Props = {
  className?: string;
};

export function AnimationModeSwitcher({ className = "" }: Props) {
  const { animationMode, setAnimationMode } = useAnimationMode();

  const switchAnimationMode = useCallback(
    (mode: AnimationMode) => () => setAnimationMode(mode),
    [setAnimationMode]
  );

  const isActiveAnimationMode = useCallback(
    (mode: AnimationMode) => mode === animationMode,
    [animationMode]
  );

  return (
    <aside
      className={`w-full flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm ${className}`}
    >
      <p className="font-medium">Animations:</p>
      <div className="flex flex-row items-center gap-1">
        {ANIMATION_MODES.map((mode) => (
          <button
            key={mode}
            onClick={switchAnimationMode(mode)}
            disabled={isActiveAnimationMode(mode)}
            className="capitalize rounded-md px-1 py-0.5 border-solid border-[1px] border-white [&:not(:disabled)]:hover:underline disabled:text-zinc-600 disabled:bg-zinc-50 disabled:border-zinc-400 dark:border-black dark:disabled:text-zinc-100 dark:disabled:bg-zinc-800 dark:disabled:border-zinc-500"
          >
            {mode}
          </button>
        ))}
      </div>
    </aside>
  );
}

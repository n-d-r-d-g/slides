"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ANIMATION_MODE_STORAGE_KEY } from "../constants";
import { AnimationMode } from "../types";

type TAnimationModeContext = {
  animationMode: AnimationMode;
  setAnimationMode: (mode: AnimationMode) => void;
};

const AnimationModeContext = createContext<TAnimationModeContext | undefined>(
  undefined
);

export function AnimationModeProvider({ children }: PropsWithChildren) {
  const [animationMode, setAnimationMode] = useState<AnimationMode>("system");

  const handleStorageUpdate = useCallback(() => {
    const modeFromLocalStorage = (localStorage.getItem(
      ANIMATION_MODE_STORAGE_KEY
    ) ?? "system") as AnimationMode;

    setAnimationMode(modeFromLocalStorage);
  }, []);

  useEffect(() => {
    window.addEventListener("storage", handleStorageUpdate);

    const parsedLocalStorageValue = (localStorage.getItem(
      ANIMATION_MODE_STORAGE_KEY
    ) ?? "system") as AnimationMode;

    setAnimationMode(parsedLocalStorageValue as AnimationMode);

    return () => {
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, [handleStorageUpdate]);

  const handleAnimationModeChange = useCallback((newMode: AnimationMode) => {
    setAnimationMode(newMode);
    localStorage.setItem(ANIMATION_MODE_STORAGE_KEY, newMode);
  }, []);

  return (
    <AnimationModeContext.Provider
      value={{ animationMode, setAnimationMode: handleAnimationModeChange }}
    >
      {children}
    </AnimationModeContext.Provider>
  );
}

export function useAnimationMode() {
  const ctx = useContext(AnimationModeContext);

  if (!ctx)
    throw new Error(
      "useAnimationMode must be used within an AnimationModeProvider!"
    );

  return ctx;
}

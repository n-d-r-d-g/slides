"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { Box, FullScreen } from "spectacle";
import { useRegisterActions } from "kbar";
import { useRouter } from "next/navigation";
import { useAnimationMode } from "@/app/context/AnimationMode";
import { DECK_THEMES } from "../../utils/constants";

type Props = {
  slideNumber: number;
  numberOfSlides: number;
};

export function DeckTemplate({
  slideNumber,
  numberOfSlides,
}: Props): ReactNode {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { animationMode, setAnimationMode } = useAnimationMode();
  const router = useRouter();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];

  useRegisterActions(
    [
      {
        id: "go-to-toc",
        name: "Go to TOC",
        keywords: "toc",
        section: "Misc",
        perform: () => router.push("/"),
      },
      {
        id: "toggle-theme",
        name: `Toggle theme (${theme})`,
        keywords: "theme scheme dark light system auto",
        section: "Misc",
        perform: () =>
          setTheme((prevTheme) => {
            if (prevTheme === "system") return "light";
            if (prevTheme === "light") return "dark";
            return "system";
          }),
      },
      {
        id: "toggle-animations",
        name: `Toggle animations (${animationMode})`,
        keywords: "animations",
        section: "Misc",
        perform: () =>
          setAnimationMode(
            (() => {
              if (animationMode === "system") return "off";
              if (animationMode === "off") return "on";
              return "system";
            })(),
          ),
      },
    ],
    [theme, animationMode],
  );

  return (
    <footer className="print:hidden w-full flex flex-row justify-between items-center px-8 absolute bottom-7 z-10">
      <Box title={"Toggle fullscreen"} className="cursor-pointer">
        <FullScreen size={20} color={deckTheme.colors.quaternary} />
      </Box>
      <p className="text-sm">
        {slideNumber}/{numberOfSlides}
      </p>
    </footer>
  );
}

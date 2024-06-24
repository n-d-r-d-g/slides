"use client";

import { DECK_THEMES } from "@/app/constants";
import { useTheme } from "next-themes";
import { Box, FullScreen, Progress } from "spectacle";

type Props = {
  slideNumber: number;
  numberOfSlides: number;
  theme: (typeof DECK_THEMES)["light" | "dark"];
};

export function DeckTemplate({ slideNumber, numberOfSlides }: Props) {
  const { resolvedTheme } = useTheme();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];
  const actionsColor = deckTheme.colors.quaternary;

  return (
    <footer className="w-full flex flex-row justify-between items-center px-8 absolute bottom-7">
      <Box className="cursor-pointer">
        <FullScreen size={20} color={actionsColor} />
      </Box>
      <Progress size={8} color={actionsColor} />
    </footer>
  );
}

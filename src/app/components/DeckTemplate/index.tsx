"use client";

import { DECK_THEMES } from "../../constants";
import { useTheme } from "next-themes";
import { Box, FullScreen } from "spectacle";

type Props = {
  slideNumber: number;
  numberOfSlides: number;
};

export function DeckTemplate({ slideNumber, numberOfSlides }: Props) {
  const { resolvedTheme } = useTheme();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];

  return (
    <footer className="w-full flex flex-row justify-between items-center px-8 absolute bottom-7 z-10">
      <Box title={"Toggle fullscreen"} className="cursor-pointer">
        <FullScreen size={20} color={deckTheme.colors.quaternary} />
      </Box>
      <p className="text-sm">
        {slideNumber}/{numberOfSlides}
      </p>
    </footer>
  );
}

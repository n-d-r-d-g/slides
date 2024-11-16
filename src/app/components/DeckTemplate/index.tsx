"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { Box, FullScreen } from "spectacle";
import { DECK_THEMES } from "../../constants";

type Props = {
  slideNumber: number;
  numberOfSlides: number;
};

export function DeckTemplate({
  slideNumber,
  numberOfSlides,
}: Props): ReactNode {
  const { resolvedTheme } = useTheme();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];

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

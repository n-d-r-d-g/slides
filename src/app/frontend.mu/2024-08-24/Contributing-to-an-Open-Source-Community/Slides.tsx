"use client";

import { DeckTemplate } from "@/app/components/DeckTemplate";
import { DECK_THEMES } from "@/app/constants";
import { useTheme } from "next-themes";
import { Deck, Heading, Slide } from "spectacle";

export function ContributingToAnOpenSourceCommunitySlides() {
  const { resolvedTheme } = useTheme();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];

  return (
    <Deck
      theme={deckTheme}
      template={({ slideNumber, numberOfSlides }) => (
        <DeckTemplate
          slideNumber={slideNumber}
          numberOfSlides={numberOfSlides}
          theme={deckTheme}
        />
      )}
    >
      <Slide>
        <Heading>Welcome to Slide #1</Heading>
      </Slide>
      <Slide>
        <Heading>Welcome to Slide #2</Heading>
      </Slide>
      <Slide>
        <Heading>Welcome to Slide #3</Heading>
      </Slide>
    </Deck>
  );
}

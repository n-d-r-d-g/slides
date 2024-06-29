"use client";

import { DeckTemplate } from "@/app/components/DeckTemplate";
import { QAndASlide } from "@/app/components/slides/QAndASlide";
import { useTheme } from "next-themes";
import { Deck } from "spectacle";
import { WelcomeSlide } from "./WelcomeSlide";
import { DECK_THEMES } from "../../../../constants";
import { ConclusionSlide } from "./ConclusionSlide";
import { OpenSourceCharacteristicsSlide } from "./OpenSourceCharacteristicsSlide";
import { OpenSourceContributionSlide } from "./OpenSourceContributionSlide";
import { OpenSourceDefinitionSlide } from "./OpenSourceDefinitionSlide";
import { PersonalOpenSourceProjectsSlide } from "./PersonalOpenSourceProjectsSlide";
import { SelfIntroSlide } from "../../../../components/slides/SelfIntroSlide";

export function ContributingToAnOpenSourceCommunitySlides() {
  const { resolvedTheme } = useTheme();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];

  return (
    <Deck
      theme={deckTheme}
      template={({ slideNumber, numberOfSlides }) => {
        return (
          <DeckTemplate
            slideNumber={slideNumber}
            numberOfSlides={numberOfSlides}
          />
        );
      }}
      className="leading-snug text-balance"
    >
      <WelcomeSlide />
      <SelfIntroSlide />
      <OpenSourceDefinitionSlide />
      <OpenSourceContributionSlide />
      <OpenSourceCharacteristicsSlide />
      <PersonalOpenSourceProjectsSlide />
      <ConclusionSlide />
      <QAndASlide />
    </Deck>
  );
}

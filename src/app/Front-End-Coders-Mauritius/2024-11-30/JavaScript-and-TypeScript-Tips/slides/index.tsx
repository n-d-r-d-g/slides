"use client";

import { DeckTemplate } from "@/app/components/DeckTemplate";
import { QAndASlide } from "@/app/components/slides/QAndASlide";
import { useAnimationMode } from "@/app/context/AnimationMode";
import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Deck } from "spectacle";
import { SelfIntroSlide } from "../../../../components/slides/SelfIntroSlide";
import { DECK_THEMES, NO_DECK_TRANSITION } from "../../../../constants";
// import { ConclusionSlide } from "./ConclusionSlide";
// import { OpenSourceCharacteristicsSlide } from "./OpenSourceCharacteristicsSlide";
// import { OpenSourceContributionSlide } from "./OpenSourceContributionSlide";
// import { OpenSourceContributionsSlide } from "./OpenSourceContributionsSlide";
// import { OpenSourceDefinitionSlide } from "./OpenSourceDefinitionSlide";
// import { PersonalOpenSourceProjectsSlide } from "./PersonalOpenSourceProjectsSlide";
import { WelcomeSlide } from "./WelcomeSlide";

export function JavaScriptAndTypeScriptTipsSlides() {
  const { resolvedTheme } = useTheme();
  const { animationMode } = useAnimationMode();
  const prefersReducedMotion = usePrefersReducedMotion();
  const deckTheme =
    DECK_THEMES[(resolvedTheme ?? "light") as keyof typeof DECK_THEMES];

  const deckTransition = useCallback(() => {
    if (animationMode === "system")
      return prefersReducedMotion ? NO_DECK_TRANSITION : undefined;

    if (animationMode === "off") return NO_DECK_TRANSITION;

    return undefined;
  }, [animationMode, prefersReducedMotion]);

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
      transition={deckTransition()}
      className="leading-snug text-balance"
    >
      {/* #1 */}
      <WelcomeSlide />
      {/* #2 */}
      <SelfIntroSlide />
      {/* #3 */}
      {/* <OpenSourceDefinitionSlide /> */}
      {/* #4 */}
      {/* <OpenSourceContributionSlide /> */}
      {/* #5 */}
      {/* <OpenSourceCharacteristicsSlide /> */}
      {/* #6 */}
      {/* <PersonalOpenSourceProjectsSlide /> */}
      {/* #7 */}
      {/* <OpenSourceContributionsSlide /> */}
      {/* #8 */}
      {/* <ConclusionSlide /> */}
      {/* #9 */}
      <QAndASlide />
    </Deck>
  );
}

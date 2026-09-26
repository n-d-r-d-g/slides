"use client";

import { DeckTemplate } from "@/app/components/DeckTemplate";
import { useAnimationMode } from "@/app/context/AnimationMode";
import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Deck } from "spectacle";
import { DECK_THEMES, NO_DECK_TRANSITION } from "@/app/utils/constants";
import { SelfIntroSlide } from "../../../../components/slides/SelfIntroSlide";
import { WelcomeSlide } from "./WelcomeSlide";
import { BackstorySlide } from "./BackstorySlide";
import { PlanSlide } from "./PlanSlide";
import { BuildAProofOfConceptSlide } from "./BuildAProofOfConceptSlide";
import { BenefitsSlide } from "./BenefitsSlide";
import { ScaleSlide } from "./ScaleSlide";
import { AFewWiseWordsSlide } from "./AFewWiseWordsSlide";
import { QAndASlide } from "@/app/components/slides/QAndASlide";

export function BuildingAnOfficialOnlineKreolMorisienDictionarySlides() {
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
      template={DeckTemplate}
      transition={deckTransition()}
      className="leading-snug text-balance"
    >
      {/* #1 */}
      <WelcomeSlide />
      {/* #2 */}
      <SelfIntroSlide />
      {/* #3 */}
      <BackstorySlide />
      {/* #4 */}
      <PlanSlide />
      {/* #5 */}
      <BuildAProofOfConceptSlide />
      {/* #6 */}
      <BenefitsSlide />
      {/* #7 */}
      <ScaleSlide />
      {/* #8 */}
      <AFewWiseWordsSlide />
      {/* #9 */}
      <QAndASlide />
    </Deck>
  );
}

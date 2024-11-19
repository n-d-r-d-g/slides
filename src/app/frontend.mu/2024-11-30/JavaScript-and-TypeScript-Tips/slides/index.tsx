"use client";

import { DeckTemplate } from "@/app/components/DeckTemplate";
import { QAndASlide } from "@/app/components/slides/QAndASlide";
import { useAnimationMode } from "@/app/context/AnimationMode";
import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Deck } from "spectacle";
import { SelfIntroSlide } from "../../../../components/slides/SelfIntroSlide";
import { DECK_THEMES, NO_DECK_TRANSITION } from "../../../../utils/constants";
import { ArrayDestructuringByIndexSlide } from "./ArrayDestructuringByIndexSlide";
import { CompoundFieldsConcatenationSlide } from "./CompoundFieldsConcatenationSlide";
import { ObjectGettersAndSettersSlide } from "./ObjectGettersAndSettersSlide";
import { ReturnTypeSlide } from "./ReturnTypeSlide";
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
      template={DeckTemplate}
      transition={deckTransition()}
      className="leading-snug text-balance"
    >
      {/* #1 */}
      <WelcomeSlide />
      {/* #2 */}
      <SelfIntroSlide />
      {/* #3 */}
      <ArrayDestructuringByIndexSlide />
      {/* #4 */}
      <CompoundFieldsConcatenationSlide />
      {/* #5 */}
      <ObjectGettersAndSettersSlide />
      {/* #6 */}
      <ReturnTypeSlide />
      {/* #7 */}
      {/*TODO: TS - Array[number]["property"] */}
      {/* #8 */}
      {/*TODO: TS - satisfies */}
      {/* #9 */}
      <QAndASlide />
    </Deck>
  );
}

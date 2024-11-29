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
import { ArrayOfObjectsTypeSlide } from "./ArrayOfObjectsTypeSlide";
import { CastingSlide } from "./CastingSlide";
import { CompoundFieldsConcatenationSlide } from "./CompoundFieldsConcatenationSlide";
import { ConstAssertionSlide } from "./ConstAssertionSlide";
import { LinksSlide } from "./LinksSlide";
import { ObjectGettersAndSettersSlide } from "./ObjectGettersAndSettersSlide";
import { ObjectTypingSlide } from "./ObjectTypingSlide";
import { ReturnTypeSlide } from "./ReturnTypeSlide";
import { SatisfiesOperatorSlide } from "./SatisfiesOperatorSlide";
import { TypeInferenceSlide } from "./TypeInferenceSlide";
import { VariableAnnotationSlide } from "./VariableAnnotationSlide";
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
      <ArrayOfObjectsTypeSlide />
      {/* #8 */}
      <ObjectTypingSlide />
      {/* #9 */}
      <TypeInferenceSlide />
      {/* #10 */}
      <CastingSlide />
      {/* #11 */}
      <ConstAssertionSlide />
      {/* #12 */}
      <VariableAnnotationSlide />
      {/* #13 */}
      <SatisfiesOperatorSlide />
      {/* #14 */}
      <LinksSlide />
      {/* #15 */}
      <QAndASlide />
    </Deck>
  );
}

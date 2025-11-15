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
import { WelcomeSlide } from "./WelcomeSlide/WelcomeSlide";
import { GitLensInteractiveRebaseSlide } from "./GitLensInteractiveRebaseSlide/GitLensInteractiveRebaseSlide";
import { FixupCommitsSlide } from "./FixupCommitsSlide/FixupCommitsSlide";
import { SplitCommitsSlide } from "./SplitCommitsSlide/SplitCommitsSlide";
import { PatchSlide } from "./PatchSlide/PatchSlide";
import { ExplorerViewSlide } from "./ExplorerViewSlide/ExplorerViewSlide";
import { SearchViewSlide } from "./SearchViewSlide/SearchViewSlide";
import { SourceControlViewSlide } from "./SourceControlViewSlide/SourceControlViewSlide";
import { ExtensionsViewSlide } from "./ExtensionsViewSlide/ExtensionsViewSlide";
import { SwitchWindowsSlide } from "./SwitchWindowsSlide/SwitchWindowsSlide";
import { ZenModeSlide } from "./ZenModeSlide/ZenModeSlide";
import { TabNavigationSlide } from "./TabNavigationSlide/TabNavigationSlide";
import { CloseTabSlide } from "./CloseTabSlide/CloseTabSlide";
import { MoveLineSlide } from "./MoveLineSlide/MoveLineSlide";
import { DuplicateLineSlide } from "./DuplicateLineSlide/DuplicateLineSlide";
import { MultilineSelectSlide } from "./MultilineSelectSlide/MultilineSelectSlide";
import { GoToFileSlide } from "./GoToFileSlide/GoToFileSlide";
import { GoToLineSlide } from "./GoToLineSlide/GoToLineSlide";
import { GoToSymbolSlide } from "./GoToSymbolSlide/GoToSymbolSlide";
import { TopBottomNavigationSlide } from "./TopBottomNavigationSlide/TopBottomNavigationSlide";
import { ChangeCaseSlide } from "./ChangeCaseSlide/ChangeCaseSlide";
import { SortLinesSlide } from "./SortLinesSlide/SortLinesSlide";
import { SortImportsSlide } from "./OrganizeImportsSlide/OrganizeImportsSlide";
import { WrapSlide } from "./WrapSlide/WrapSlide";
import { DiffFilesSlide } from "./DiffFilesSlide/DiffFilesSlide";
import { SelectOccurrencesSlide } from "./SelectOccurrencesSlide/SelectOccurrencesSlide";
import { RestoreTerminalSlide } from "./RestoreTerminalSlide/RestoreTerminalSlide";
import { RenameSymbolSlide } from "./RenameSymbolSlide/RenameSymbolSlide";

export function DeveloperProductivityTipsSlides() {
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
      <GitLensInteractiveRebaseSlide />
      {/* #4 */}
      <FixupCommitsSlide />
      {/* #5 */}
      <SplitCommitsSlide />
      {/* #6 */}
      <PatchSlide />
      {/* #7 */}
      <ExplorerViewSlide />
      {/* #8 */}
      <SearchViewSlide />
      {/* #9 */}
      <SourceControlViewSlide />
      {/* #10 */}
      <ExtensionsViewSlide />
      {/* #11 */}
      <SwitchWindowsSlide />
      {/* #12 */}
      <ZenModeSlide />
      {/* #13 */}
      <TabNavigationSlide />
      {/* #14 */}
      <CloseTabSlide />
      {/* #15 */}
      <MoveLineSlide />
      {/* #16 */}
      <DuplicateLineSlide />
      {/* #17 */}
      <MultilineSelectSlide />
      {/* #18 */}
      <GoToFileSlide />
      {/* #19 */}
      <GoToLineSlide />
      {/* #20 */}
      <GoToSymbolSlide />
      {/* #21 */}
      <TopBottomNavigationSlide />
      {/* #22 */}
      <ChangeCaseSlide />
      {/* #23 */}
      <SortLinesSlide />
      {/* #24 */}
      <SortImportsSlide />
      {/* #25 */}
      <WrapSlide />
      {/* #26 */}
      <DiffFilesSlide />
      {/* #27 */}
      <SelectOccurrencesSlide />
      {/* #28 */}
      <RestoreTerminalSlide />
      {/* #29 */}
      <RenameSymbolSlide />
      {/* #30 */}
      <QAndASlide />
    </Deck>
  );
}

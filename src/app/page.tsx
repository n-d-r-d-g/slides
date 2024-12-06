import { readdirSync } from "node:fs";
import { AnimationModeSwitcher } from "./components/AnimationModeSwitcher";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { TocNodes } from "./components/TocNodes";
import {
  UNPUBLISHED_PAGE_ENDING_PREFIX,
  PAGE_PATH_ENDING,
} from "./utils/constants";
import { TOC } from "./utils/classes/TOC";

function retrieveTOCNodes() {
  const appFilePaths = readdirSync("./src/app", { recursive: true });
  const tocFilePaths = appFilePaths.filter((filePath) => {
    const isHomePagePath = filePath === PAGE_PATH_ENDING;
    const isPagePath = (filePath as string).endsWith(PAGE_PATH_ENDING);
    const isPageUnpublished = (filePath as string).endsWith(
      UNPUBLISHED_PAGE_ENDING_PREFIX
    );
    const shouldPathBeInTOC =
      !isHomePagePath && isPagePath && !isPageUnpublished;

    return shouldPathBeInTOC;
  });
  const toc = new TOC();

  tocFilePaths.forEach((filePath) => {
    const filePathWithoutPageEnding = (filePath as string).replace(
      `${process.env.OS_SPECIFIC_PATH_SEPARATOR ?? "/"}${PAGE_PATH_ENDING}`,
      ""
    );

    toc.addNodeByFilePath(filePathWithoutPageEnding);
  });

  return toc;
}

export default async function Home() {
  try {
    const toc = retrieveTOCNodes();
    const tocNodes = toc.nodes;

    return (
      <main className="flex min-h-screen flex-col px-4 py-12 lg:p-24 bg-inherit">
        <ThemeSwitcher className="mb-2" />
        <AnimationModeSwitcher className="mb-6" />
        <h1 className="mb-6 lg:mb-8">{"Table of contents"}</h1>
        <TocNodes nodes={tocNodes} />
      </main>
    );
  } catch (e) {
    console.log("Error while building table of contents :>> ", e);
  }
}

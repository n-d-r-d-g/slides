import { readdirSync } from "node:fs";
import { SlidesTOC } from "./components/SlidesTOC";
import { PAGE_PATH_ENDING } from "./constants";
import { TOC } from "./utils/classes/TOC";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function retrieveTOCNodes() {
  const appFilePaths = readdirSync("./src/app", { recursive: true });
  const tocFilePaths = appFilePaths.filter((filePath) => {
    const isHomePagePath = filePath === PAGE_PATH_ENDING;
    const isPagePath = (filePath as string).endsWith(PAGE_PATH_ENDING);
    const shouldPathBeInTOC = !isHomePagePath && isPagePath;

    return shouldPathBeInTOC;
  });
  const toc = new TOC();

  tocFilePaths.forEach((filePath) => {
    const filePathWithoutPageEnding = (filePath as string).replace(
      `/${PAGE_PATH_ENDING}`,
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
        <ThemeSwitcher className="mb-6" />
        <h1 className="mb-6 lg:mb-8">Table of contents</h1>
        <SlidesTOC nodes={tocNodes} />
      </main>
    );
  } catch (e) {
    console.log("Error while building table of contents :>> ", e);
  }
}

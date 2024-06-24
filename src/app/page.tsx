import { readdirSync } from "node:fs";
import { PAGE_PATH_ENDING } from "./constants";
import { TalkData } from "./types";
import { TalksTOC } from "./components/TalksTOC";

export default async function Home() {
  const talks = readdirSync("./src/app", { recursive: true })
    // const talks = [
    //   "a/b/c/page.tsx",
    //   "a/b/d/page.tsx",
    //   "a/b/page.tsx",
    //   "a/b/c/e/page.tsx",
    //   "a/b/c/f/page.tsx",
    // ]
    .filter((filePath) => {
      const isHomePagePath = filePath === PAGE_PATH_ENDING;
      const isPagePath = (filePath as string).endsWith(PAGE_PATH_ENDING);
      const isValidPath = !isHomePagePath && isPagePath;

      return isValidPath;
    })
    .reduce((prevTOC, filePath) => {
      const pathParts = (filePath as string).split("/");

      let tempTOC = prevTOC;

      pathParts.forEach((part, index) => {
        if (index >= pathParts.length - 1) return;

        if (index === pathParts.length - 2)
          return tempTOC.set(
            part,
            (filePath as string).replace(`/${PAGE_PATH_ENDING}`, "")
          );

        if (tempTOC instanceof Map && !tempTOC.has(part)) {
          tempTOC.set(part, new Map<string, TalkData>());
        }

        const nestedTOC = tempTOC.get(part);

        if (nestedTOC instanceof Map) {
          tempTOC = nestedTOC;
        }
      });

      return prevTOC;
    }, new Map<string, TalkData>());

  return (
    <main className="flex min-h-screen flex-col px-4 py-12 lg:p-24 bg-inherit">
      <h1 className="mb-6 lg:mb-8">Table of contents</h1>
      <TalksTOC talks={talks} />
    </main>
  );
}

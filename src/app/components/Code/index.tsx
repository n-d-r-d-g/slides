"use client";

import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import { useTheme } from "next-themes";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  IoCopyOutline,
  IoLockClosedOutline,
  IoLockOpenOutline,
} from "react-icons/io5";
import type { BundledLanguage, BundledTheme } from "shiki";
import { codeToHtml } from "shiki";

type Props = {
  children: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  defaultFontSize?: number;
  filename?: string;
};

type CopyToClipboardProps = {
  code: string;
};

function CopyToClipboard({ code }: CopyToClipboardProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      console.log("Copied to clipboard");
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };

  return (
    <button
      title={"Copy code"}
      onClick={copyToClipboard}
      className="grid place-content-center hover:text-blue-800 dark:hover:text-blue-300 motion-safe:transition-all"
    >
      <IoCopyOutline size={20} />
    </button>
  );
}

export function Code({
  lang = "javascript",
  defaultFontSize = 28,
  filename,
  children,
}: Props) {
  const { resolvedTheme } = useTheme();
  const [htmlCode, setHTMLCode] = useState("");
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [isLocked, setIsLocked] = useState(true);
  const strCode = useRef(children);
  const tempHTMLCode = useRef("");

  const retrieveHighlightedCode = useCallback(
    async (code: string) => {
      const newHTMLCode = await codeToHtml(code, {
        lang,
        theme: resolvedTheme === "dark" ? "dark-plus" : "min-light",
        transformers: [
          transformerNotationHighlight(),
          transformerNotationDiff(),
        ],
      });

      return newHTMLCode;
    },
    [lang, resolvedTheme]
  );

  useEffect(() => {
    async function convertCode() {
      const highlightedCode = await retrieveHighlightedCode(strCode.current);
      tempHTMLCode.current = highlightedCode;

      setHTMLCode(highlightedCode);
    }

    convertCode();
  }, [retrieveHighlightedCode]);

  const handleCodeChange = useCallback(
    async (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newStrCode = e.target.value ?? "";
      const highlightedCode = await retrieveHighlightedCode(newStrCode);

      strCode.current = newStrCode;
      tempHTMLCode.current = highlightedCode;
    },
    [retrieveHighlightedCode]
  );

  const handleFontSizeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFontSize(+e.currentTarget.value),
    []
  );

  const handleLockCodeChange = useCallback(async () => {
    if (isLocked) {
      setHTMLCode(strCode.current);
    } else {
      const highlightedCode = await retrieveHighlightedCode(strCode.current);
      tempHTMLCode.current = highlightedCode;

      setHTMLCode(highlightedCode);
    }

    setIsLocked((prevVal) => !prevVal);
  }, [isLocked, retrieveHighlightedCode]);

  return (
    <div className="flex flex-col max-w-full rounded-lg w-fit max-h-full">
      <div className="flex items-center justify-between bg-gradient-to-r bg-neutral-200 dark:bg-neutral-900 py-2 pl-2 pr-4 text-sm rounded-t-lg">
        {!!filename && (
          <span
            className="text-neutral-600 dark:text-neutral-400 italic font-medium px-2 py-2"
            style={{ fontSize }}
          >
            {filename}
          </span>
        )}
        <div className="flex flex-row items-center gap-3 ml-auto">
          <input
            type="number"
            min={1}
            max={100}
            value={fontSize}
            onChange={handleFontSizeChange}
            className="rounded-sm"
          />
          <button
            title={isLocked ? "Edit code" : "Lock code"}
            onClick={handleLockCodeChange}
            className="grid place-content-center hover:text-blue-800 dark:hover:text-blue-300 motion-safe:transition-all"
          >
            {isLocked ? (
              <IoLockOpenOutline size={20} />
            ) : (
              <IoLockClosedOutline size={20} />
            )}
          </button>
          <CopyToClipboard code={strCode.current} />
        </div>
      </div>
      {isLocked && (
        <div
          className="min-h-0 grow rounded-b-lg text-sm whitespace-pre-line overflow-y-auto [&_.line]:relative [&_.diff]:after:absolute [&_.diff]:after:content-[''] [&_.diff]:after:w-[0.75ch] [&_.diff]:after:h-full [&_.diff]:after:left-0 [&_.diff]:after:top-0 [&_.diff.remove]:after:bg-red-700 dark:[&_.diff.remove]:after:bg-red-800 [&_.diff.add]:after:bg-green-600 dark:[&_.diff.add]:after:bg-green-700 [&_.line]:inline-block [&_.line]:w-full [&_.line]:leading-loose [&_.diff.remove]:bg-red-400/10 dark:[&_.diff.remove]:bg-red-600/10 [&_.diff.add]:bg-green-700/10 dark:[&_.diff.add]:bg-green-500/15 [&_.highlighted]:bg-blue-500/15 dark:[&_.highlighted]:bg-blue-700/25 [&>pre]:overflow-x-auto [&>pre]:!bg-neutral-100 dark:[&>pre]:!bg-neutral-800 [&>pre]:py-3 [&_.line]:px-4 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
          dangerouslySetInnerHTML={{ __html: htmlCode }}
          style={{ fontSize }}
        ></div>
      )}
      {!isLocked && (
        <textarea
          defaultValue={strCode.current}
          onChange={handleCodeChange}
          rows={4}
          cols={60}
          className="leading-loose font-mono resize px-4"
          style={{ fontSize }}
        ></textarea>
      )}
    </div>
  );
}

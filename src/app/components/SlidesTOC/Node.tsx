import { TOCNode } from "@/app/utils/classes/TOCNode";
import { ChildNodes } from "./ChildNodes";
import Link from "next/link";
import { useCallback } from "react";

type NodeProps = {
  node: TOCNode;
  isRoot?: true;
};

export function Node({ node, isRoot }: NodeProps) {
  const retrieveFormattedLabel = useCallback(() => {
    let formattedLabel = node.label;
    const isDate = !!Date.parse(formattedLabel);
    const containsDashes = formattedLabel.includes("-");

    if (isDate) {
      const locale: Intl.LocalesArgument = "en-GB";
      const config: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
      };
      formattedLabel = new Date(formattedLabel).toLocaleDateString(
        locale,
        config
      );
    } else if (containsDashes) {
      const parts = formattedLabel.split("-");
      formattedLabel = parts.join(" ");
    }

    return formattedLabel;
  }, [node.label]);

  return (
    <div
      className={`bg-inherit flex flex-col items-start gap-1 relative isolate before:content=[''] before:absolute before:left-[0.5ch] before:top-[3ch] before:bg-gray-300 dark:before:bg-zinc-700 before:w-px before:h-[calc(100%-3.5ch)] before:rounded-full before:z-[-1] ${
        isRoot ? "" : "ms-5"
      }`}
    >
      {node.link ? (
        <Link href={node.link} className="bg-inherit">
          {retrieveFormattedLabel()}
        </Link>
      ) : (
        <p className="bg-inherit">{retrieveFormattedLabel()}</p>
      )}
      {node.hasChildren && <ChildNodes nodes={node.children!} />}
    </div>
  );
}

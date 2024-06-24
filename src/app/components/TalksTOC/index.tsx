import Link from "next/link";
import { useCallback } from "react";
import { TalkData } from "../../types";

type TalksTOCProps = {
  talks: TalkData;
};

type RootTalkProps = {
  label?: never;
  isRoot: true;
};

type NestedTalkProps = {
  label: string;
  isRoot?: false;
};

type TalkProps = {
  talks: TalkData;
  link?: string;
} & (NestedTalkProps | RootTalkProps);

type NestedTalksProps = {
  talks: TalkData;
  isIndented?: boolean;
};

function NestedTalks({ talks, isIndented }: NestedTalksProps) {
  const isMap = talks instanceof Map;
  const labels = isMap ? [...talks.keys()] : [];

  return labels.map((nestedLabel) => {
    const nestedTalksOrLink = (talks as Map<string, TalkData>).get(
      nestedLabel
    )!;
    const nestedTalks =
      nestedTalksOrLink instanceof Map ? nestedTalksOrLink : new Map();
    const link =
      typeof nestedTalksOrLink === "string" ? nestedTalksOrLink : undefined;

    return (
      <div
        key={nestedLabel}
        className={`bg-inherit flex flex-col items-start gap-1 relative isolate before:content=[''] before:absolute before:left-[0.5ch] before:top-[3ch] before:bg-gray-300 dark:before:bg-zinc-700 before:w-px before:h-[calc(100%-3.5ch)] before:rounded-full before:z-[-1] ${
          isIndented ? "ms-5" : ""
        }`}
      >
        <Talk label={nestedLabel} talks={nestedTalks} link={link} />
      </div>
    );
  });
}

function Talk({ talks, link, isRoot, ...props }: TalkProps) {
  const retrieveFormattedLabel = useCallback(() => {
    let formattedLabel = props.label!;
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
  }, [props.label]);

  return (
    <>
      {!isRoot &&
        (link ? (
          <Link href={link}>{retrieveFormattedLabel()}</Link>
        ) : (
          <p className="bg-inherit">{retrieveFormattedLabel()}</p>
        ))}
      <NestedTalks talks={talks} isIndented={!isRoot} />
    </>
  );
}

export function TalksTOC({ talks }: TalksTOCProps) {
  return <Talk talks={talks} isRoot />;
}

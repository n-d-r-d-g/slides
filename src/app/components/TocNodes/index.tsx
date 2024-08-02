import { TOCNode } from "@/app/utils/classes/TOCNode";
import { TocNode } from "./TocNode";

type SlidesTOCProps = {
  nodes: Map<string, TOCNode>;
};

export function TocNodes({ nodes }: SlidesTOCProps) {
  return [...nodes.values()].map((node) => (
    <TocNode key={node.label} node={node} />
  ));
}

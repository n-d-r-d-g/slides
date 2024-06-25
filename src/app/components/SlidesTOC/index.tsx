import { TOCNode } from "@/app/utils/classes/TOCNode";
import { Node } from "./Node";

type SlidesTOCProps = {
  nodes: Map<string, TOCNode>;
};

export function SlidesTOC({ nodes }: SlidesTOCProps) {
  return [...nodes.values()].map((node) => (
    <Node key={node.label} node={node} isRoot />
  ));
}

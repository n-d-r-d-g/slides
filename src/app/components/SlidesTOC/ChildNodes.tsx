import { TOCNode } from "@/app/utils/classes/TOCNode";
import { Node } from "./Node";

type ChildNodesProps = {
  nodes: Map<string, TOCNode>;
};

export function ChildNodes({ nodes }: ChildNodesProps) {
  const tocNodes = [...nodes!.values()];

  return tocNodes.map((childNode) => (
    <Node key={childNode.label} node={childNode} />
  ));
}

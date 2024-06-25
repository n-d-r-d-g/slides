import { TOCNode } from "./TOCNode";

type TOCProps = {
  nodes?: Map<string, TOCNode>;
};

function addChildNodesRecursively(
  currentNode: TOCNode,
  index: number,
  pathParts: Array<string>
) {
  const isLastPathPart = index === pathParts.length - 1;

  if (isLastPathPart) {
    currentNode.link = pathParts.join("/");
    return;
  }

  let childNode: TOCNode;
  const childNodeLabelIndex = index + 1;
  let childNodeLabel = pathParts[childNodeLabelIndex];

  if (!currentNode.hasChildren) {
    currentNode.children = new Map();
  }

  if (currentNode.children!.has(childNodeLabel)) {
    childNode = currentNode.children!.get(childNodeLabel)!;
  } else {
    childNode = new TOCNode({ label: childNodeLabel });
    currentNode.addChildren(childNode);
  }

  addChildNodesRecursively(childNode, childNodeLabelIndex, pathParts);
}

export class TOC {
  #nodes: Required<TOCProps>["nodes"];

  constructor({ nodes }: Required<TOCProps> = { nodes: new Map() }) {
    this.#nodes = nodes;
  }

  get nodes() {
    return this.#nodes;
  }

  set nodes(nodes: Required<TOCProps>["nodes"]) {
    this.#nodes = nodes;
  }

  addNodeByFilePath(path: string) {
    const pathParts = path.split("/");

    if (pathParts.length === 0) return;

    let startNode;
    let firstPathPart = pathParts[0];

    if (this.#nodes.has(firstPathPart)) {
      startNode = this.#nodes.get(firstPathPart)!;
    } else {
      startNode = new TOCNode({ label: firstPathPart });
      this.#nodes.set(firstPathPart, startNode);
    }

    addChildNodesRecursively(startNode, 0, pathParts);
  }
}

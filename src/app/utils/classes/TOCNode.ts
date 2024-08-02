import util from "util";

type TOCNodeProps = {
  label: string;
  children?: Map<string, TOCNode>;
  link?: string;
  isRoot?: boolean;
};

export class TOCNode {
  #label: TOCNodeProps["label"];
  #children?: TOCNodeProps["children"];
  #link?: TOCNodeProps["link"];
  #isRoot?: TOCNodeProps["isRoot"];

  constructor({ label, children = new Map(), link, isRoot }: TOCNodeProps) {
    this.#label = label;
    this.#children = children;
    this.#link = link;
    this.#isRoot = isRoot;
  }

  get label() {
    return this.#label;
  }

  get children() {
    return this.#children;
  }

  get link() {
    return this.#link;
  }

  get isRoot() {
    return this.#isRoot;
  }

  get hasChildren() {
    return (this.#children?.size ?? 0) > 0;
  }

  set label(label: TOCNodeProps["label"]) {
    this.#label = label;
  }

  set children(children: TOCNodeProps["children"]) {
    this.#children = children;
  }

  set link(link: TOCNodeProps["link"]) {
    this.#link = link;
  }

  set isRoot(isRoot: TOCNodeProps["isRoot"]) {
    this.#isRoot = isRoot;
  }

  addChildren(...children: Array<TOCNode>) {
    if (children.length > 0) {
      if (!this.#children) {
        this.#children = new Map();
      }

      children.forEach((child) => this.#children!.set(child.label, child));
    }
  }

  removeChildren(...childLabels: Array<string>) {
    childLabels.forEach((childLabel) => this.#children?.delete(childLabel));
  }

  // Override console.log message
  [util.inspect.custom]() {
    return `TOCNode{${this.label} (children: ${this.children?.size ?? 0})}`;
  }
}

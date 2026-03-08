import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";

function getNodeValue(node) {
  return node.children
    .map((child) => child.value ?? getNodeValue(child))
    .join("");
}

export default function remarkTableOfContents() {
  return (tree, file) => {
    const toc = [];
    const slugger = new GithubSlugger();

    visit(tree, "heading", (node, index, parent) => {
      // Only consider top level headings
      if (parent.type !== "root") return;

      const depth = node.depth;
      const title = getNodeValue(node);
      const id = slugger.slug(title);

      const href = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      toc.push({ depth, title, href: `#${id}` });
    });

    file.data.astro.frontmatter.tableOfContents = toc;
  };
}
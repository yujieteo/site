import { NODES, ROOTS } from "./theorem-data.ts";
import { escapeText } from "./theorem-rank.ts";

function nodeOf(id: number): (typeof NODES)[number] | undefined {
  return NODES.find((node) => node[0] === id);
}

export function tree(root: number, depth: number, known: ReadonlySet<number>): string {
  const path = new Set<number>();
  const stack: { id: number; depth: number; leave: boolean }[] = [{ id: root, depth, leave: false }];
  const out = ["<ul>"];
  while (stack.length) {
    const item = stack.pop();
    if (!item) break;
    if (item.leave) { path.delete(item.id); out.push("</ul></li>"); continue; }
    const node = nodeOf(item.id);
    if (!node) continue;
    const cycle = path.has(item.id);
    const marked = known.has(item.id);
    out.push(`<li><label><input type="checkbox" data-known="${item.id}"${marked ? " checked" : ""}> ${escapeText(node[1])}</label>${cycle ? " (cycle)" : ""}`);
    if (item.depth <= 0 || marked || cycle || node[2].length === 0) { out.push("</li>"); continue; }
    path.add(item.id);
    out.push("<ul>");
    stack.push({ ...item, leave: true });
    for (let i = node[2].length - 1; i >= 0; i--) stack.push({ id: node[2][i] ?? -1, depth: item.depth - 1, leave: false });
  }
  return `${out.join("")}</ul>`;
}

export function treeFigure(id: string): string {
  const options = ROOTS.map((root) => `<option value="${root}">${escapeText(nodeOf(root)?.[1] ?? "")}</option>`).join("");
  return `<div role="group" aria-label="ALT"><div class="controls"><label for="${id}-root">Result</label><select id="${id}-root" data-root>${options}</select><label for="${id}-depth">Depth</label><input id="${id}-depth" type="range" min="1" max="4" value="3" data-depth><output>3</output></div><div data-tree>${tree(ROOTS[0], 3, new Set())}</div><p>Tick what you know. The branch stops there.</p></div>`;
}

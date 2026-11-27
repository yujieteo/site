import { foodFigure } from "./kit/food.ts";
import { lifeFigure, lifeText } from "./kit/life.ts";
import { backedText } from "./kit/food-backed.ts";
import { figureWidth } from "./kit/scale.ts";
import { escapeHtml } from "./kit/html.ts";

export const FIGURE_KINDS: readonly string[] = ["food", "life", "definitions"];

export function figureHtml(kind: string, id: string, alt: string, caption: string, wide: boolean, view: string): string {
  if (kind === "definitions") return definitionsFigure(id, alt, caption);
  const drawn = kind === "life" ? lifeFigure(id) : foodFigure(view, id, figureWidth(wide));
  const body = drawn.split('aria-label="ALT"').join(`aria-label="${escapeHtml(alt)}"`);
  return `<figure id="${id}" data-kind="${kind}"${view === "" ? "" : ` data-view="${view}"`}${wide ? " data-wide" : ""}><div class="frame">${body}</div><figcaption>${caption}</figcaption></figure>`;
}

// The list of a post's entries. Its script draws the list from the post's data/ folder, which the build copies next
// to the page. Without the script, the reader gets the subject pages that the split post lists under "Sections".
function definitionsFigure(id: string, alt: string, caption: string): string {
  const slug = id.replace(/-\d+$/, "");
  const fallback = `<noscript><p>The list needs JavaScript. Every entry is also on its subject page, listed under <a href="#sections">Sections</a>.</p></noscript>`;
  return `<figure id="${id}" data-kind="definitions" data-data="/essays/${slug}/data/"><div class="defs" role="region" aria-label="${escapeHtml(alt)}"><p class="muted defs-wait">Loading the list…</p>${fallback}</div><figcaption>${caption}</figcaption></figure>`;
}

// The data of a figure as Markdown lines, for the text version. Most figures have none.
export function figureText(kind: string, view = ""): string[] {
  if (kind === "food" && view === "backed") return backedText();
  return kind === "life" ? lifeText() : [];
}

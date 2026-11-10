import { foodFigure } from "./kit/food.ts";
import { priceFigure } from "./kit/price-chart.ts";
import { figureWidth } from "./kit/scale.ts";

export const FIGURE_KINDS: readonly string[] = ["prices", "food"];

function escapeAttribute(text: string): string {
  return text.split("&").join("&amp;").split('"').join("&quot;").split("<").join("&lt;");
}

export function figureHtml(kind: string, id: string, alt: string, caption: string, wide: boolean, view: string): string {
  const drawn = kind === "prices" ? priceFigure(id, figureWidth(wide)) : foodFigure(view, id, figureWidth(wide));
  const body = drawn.split('aria-label="ALT"').join(`aria-label="${escapeAttribute(alt)}"`);
  return `<figure id="${id}" data-kind="${kind}"${view === "" ? "" : ` data-view="${view}"`}${wide ? " data-wide" : ""}><div class="frame">${body}</div><figcaption>${caption}</figcaption></figure>`;
}

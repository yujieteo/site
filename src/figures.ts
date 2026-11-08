import { priceFigure } from "./kit/price-chart.ts";
import { figureWidth } from "./kit/scale.ts";

export const FIGURE_KINDS: readonly string[] = ["schematic", "prices"];

function schematic(svg: string): string {
  const drawn = svg.trim().split("<svg").join('<svg role="img" aria-label="ALT"');
  return `${drawn}<div class="controls"><button class="button" type="button" data-next>Next</button></div><p class="step-label" aria-live="polite" data-step-label></p>`;
}

function escapeAttribute(text: string): string {
  return text.split("&").join("&amp;").split('"').join("&quot;").split("<").join("&lt;");
}

export function figureHtml(kind: string, id: string, alt: string, caption: string, svg: string, wide: boolean): string {
  const drawn = kind === "prices" ? priceFigure(id, figureWidth(wide)) : schematic(svg);
  const body = drawn.split("ALT").join(escapeAttribute(alt));
  return `<figure id="${id}" data-kind="${kind}"${wide ? " data-wide" : ""}><div class="frame">${body}</div><figcaption>${caption}</figcaption></figure>`;
}

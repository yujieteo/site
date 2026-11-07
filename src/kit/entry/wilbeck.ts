import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { marker, wilbeckFigure, wilbeckNote, wilbeckSvg } from "../wilbeck.ts";

function wireWilbeck(figure: Element): void {
  hydrate(figure, wilbeckFigure);
  const input = figure.querySelector("input[data-wilbeck]");
  const out = figure.querySelector("output");
  if (!(input instanceof HTMLInputElement) || !out) return;
  let chart = plotWidth(figure);
  input.addEventListener("input", () => {
    const v = Number(input.value);
    const at = figure.querySelector("[data-marker]");
    if (at) at.innerHTML = marker(chart, v);
    out.textContent = wilbeckNote(v);
  });
  watch(figure, (width) => {
    chart = width;
    hideTooltips(figure);
    swapChart(figure, wilbeckSvg(width, Number(input.value)));
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=wilbeck]")) wireWilbeck(figure);

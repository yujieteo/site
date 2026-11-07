import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { metalCursor, metalFigure, metalNote, metalSvg } from "../metal.ts";

function wireMetal(figure: Element): void {
  hydrate(figure, metalFigure);
  const input = figure.querySelector("input[data-metal]");
  const out = figure.querySelector("output");
  if (!(input instanceof HTMLInputElement) || !out) return;
  let chart = plotWidth(figure);
  input.addEventListener("input", () => {
    const strain = Number(input.value) / 100;
    const at = figure.querySelector("[data-marker]");
    if (at) at.innerHTML = metalCursor(chart, strain);
    out.textContent = metalNote(strain);
  });
  watch(figure, (width) => {
    chart = width;
    hideTooltips(figure);
    swapChart(figure, metalSvg(width, Number(input.value) / 100));
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=metal]")) wireMetal(figure);

import { convergeFigure, convergeNote, convergeSvg } from "../converge.ts";
import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";

function wireConverge(figure: Element): void {
  hydrate(figure, convergeFigure);
  const input = figure.querySelector("input[data-converge]");
  const out = figure.querySelector("output");
  if (!(input instanceof HTMLInputElement) || !out) return;
  const draw = (width: number): void => {
    hideTooltips(figure);
    swapChart(figure, convergeSvg(width, Number(input.value)));
    out.textContent = convergeNote(Number(input.value));
  };
  input.addEventListener("input", () => draw(plotWidth(figure)));
  watch(figure, draw);
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=converge]")) wireConverge(figure);

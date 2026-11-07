import { faithfulBins, faithfulSvg } from "../faithful.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";

function wireFaithful(figure: Element): void {
  const width = figure.querySelector("input[data-faithful-width]");
  const shift = figure.querySelector("input[data-faithful-shift]");
  const out = figure.querySelector("output");
  if (!(width instanceof HTMLInputElement) || !(shift instanceof HTMLInputElement) || !out) return;
  let chart = plotWidth(figure);
  const draw = (): void => {
    hideTooltips(figure);
    const next = faithfulBins(Number(width.value), Number(shift.value), chart);
    const bins = figure.querySelector("[data-bins]");
    if (bins) bins.innerHTML = next.svg;
    out.textContent = next.note;
  };
  width.addEventListener("input", draw);
  shift.addEventListener("input", draw);
  watch(figure, (next) => {
    chart = next;
    hideTooltips(figure);
    swapChart(figure, faithfulSvg(figure.id, chart, Number(width.value), Number(shift.value)));
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=faithful]")) wireFaithful(figure);

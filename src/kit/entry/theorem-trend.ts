import { trendSvg } from "../theorem-trend.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";

function wire(figure: Element): void {
  const result = figure.querySelector<HTMLSelectElement>("[data-result]");
  const field = figure.querySelector<HTMLSelectElement>("[data-field]");
  if (!result || !field) return;
  let width = plotWidth(figure);
  function draw(): void {
    if (!result || !field) return;
    hideTooltips(figure);
    swapChart(figure, trendSvg(width, Number(result.value), Number(field.value)));
  }
  result.addEventListener("change", draw);
  field.addEventListener("change", draw);
  watch(figure, (next) => { width = next; draw(); });
  wireTooltips(figure);
}
for (const figure of document.querySelectorAll("figure[data-kind=theorem-trend]")) wire(figure);

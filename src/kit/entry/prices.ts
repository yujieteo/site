import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { priceNote, priceSvg } from "../price-chart.ts";

function wirePrices(figure: Element): void {
  const box = figure.querySelector<HTMLSelectElement>("select[data-item]");
  const note = figure.querySelector("[data-note]");
  if (!box) return;
  let chart = plotWidth(figure);
  const draw = (): void => {
    const index = Number(box.value);
    hideTooltips(figure);
    swapChart(figure, priceSvg(index, chart));
    if (note) note.textContent = priceNote(index);
  };
  box.addEventListener("change", draw);
  watch(figure, (width) => {
    chart = width;
    draw();
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=prices]")) wirePrices(figure);

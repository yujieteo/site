import { mixParts, mixSvg } from "../berkeley.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";

function mixWords(t: number): string {
  if (t === 0) return "themselves";
  if (t === 1) return "men";
  return `${Math.round(t * 100)}% like men`;
}

function wireMix(figure: Element): void {
  const input = figure.querySelector("input[data-mix]");
  const out = figure.querySelector("output");
  if (!(input instanceof HTMLInputElement) || !out) return;
  let chart = plotWidth(figure);
  input.addEventListener("input", () => {
    const t = Number(input.value);
    const next = mixParts(t, chart);
    const bar = figure.querySelector("[data-mix-bar]");
    const dot = figure.querySelector("[data-mix-dot]");
    if (bar) bar.innerHTML = next.bar;
    if (dot) dot.innerHTML = next.dot;
    out.textContent = mixWords(t);
  });
  watch(figure, (width) => {
    chart = width;
    hideTooltips(figure);
    swapChart(figure, mixSvg(width, Number(input.value)));
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=mix]")) wireMix(figure);

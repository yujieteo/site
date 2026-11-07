import { barHeight, CHART_HEIGHT, COMPOUND_START } from "../chart.ts";
import { YEARS, fillBalances } from "../compound.hot.ts";

function setBar(bar: Element | undefined, balance: number): void {
  const h = barHeight(balance);
  bar?.setAttribute("y", String(CHART_HEIGHT - h));
  bar?.setAttribute("height", String(h));
}

function wireSliders(): void {
  const balances = new Float64Array(YEARS);
  for (const input of document.querySelectorAll("input[data-compound]")) {
    if (!(input instanceof HTMLInputElement)) continue;
    const figure = input.closest("figure");
    const bars = figure?.querySelector("svg[data-bars]")?.children;
    const out = figure?.querySelector("output");
    if (!bars || !out) continue;
    input.addEventListener("input", () => {
      const rate = Number(input.value);
      fillBalances(balances, COMPOUND_START, rate);
      for (let year = 0; year < YEARS; year++) setBar(bars[year], balances[year] ?? 0);
      out.textContent = `${rate}%: ${(balances[YEARS - 1] ?? 0).toFixed(2)} after ${YEARS} years`;
    });
  }
}

wireSliders();

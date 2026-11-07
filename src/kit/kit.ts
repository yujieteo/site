import { barHeight, CHART_HEIGHT, COMPOUND_START } from "./chart.ts";
import { YEARS, fillBalances } from "./compound.hot.ts";
import { wireFigures } from "./wire.ts";

function closeNotes(except: Element | null): void {
  for (const fn of document.querySelectorAll(".fn[data-open]")) {
    if (fn === except) continue;
    fn.removeAttribute("data-open");
    fn.querySelector(".fn-ref")?.setAttribute("aria-expanded", "false");
  }
}

function toggleNote(fn: Element): void {
  const open = fn.hasAttribute("data-open");
  closeNotes(fn);
  if (open) fn.removeAttribute("data-open");
  else fn.setAttribute("data-open", "");
  fn.querySelector(".fn-ref")?.setAttribute("aria-expanded", String(!open));
}

function wireNotes(): void {
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const fn = target?.closest(".fn") ?? null;
    if (fn && target?.closest(".fn-ref")) toggleNote(fn);
    else closeNotes(null);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNotes(null);
  });
}

function wirePause(): void {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (const button of document.querySelectorAll(".fig-pause")) {
    const figure = button.closest("figure");
    if (!figure) continue;
    const set = (paused: boolean): void => {
      if (paused) figure.setAttribute("data-paused", "");
      else figure.removeAttribute("data-paused");
      button.setAttribute("aria-pressed", String(paused));
      button.textContent = paused ? "Play" : "Pause";
    };
    set(reduced);
    button.addEventListener("click", () => set(!figure.hasAttribute("data-paused")));
  }
}

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

wireNotes();
wirePause();
wireSliders();
wireFigures();

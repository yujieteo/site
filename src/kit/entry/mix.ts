import { mixParts } from "../berkeley.ts";

function mixWords(t: number): string {
  if (t === 0) return "themselves";
  if (t === 1) return "men";
  return `${Math.round(t * 100)}% like men`;
}

function wireMix(figure: Element): void {
  const input = figure.querySelector("input[data-mix]");
  const bar = figure.querySelector("[data-mix-bar]");
  const dot = figure.querySelector("[data-mix-dot]");
  const out = figure.querySelector("output");
  if (!(input instanceof HTMLInputElement) || !bar || !dot || !out) return;
  input.addEventListener("input", () => {
    const t = Number(input.value);
    const next = mixParts(t);
    bar.innerHTML = next.bar;
    dot.innerHTML = next.dot;
    out.textContent = mixWords(t);
  });
}

for (const figure of document.querySelectorAll("figure[data-kind=mix]")) wireMix(figure);

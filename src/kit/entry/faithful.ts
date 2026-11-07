import { faithfulBins } from "../faithful.ts";

function wireFaithful(figure: Element): void {
  const width = figure.querySelector("input[data-faithful-width]");
  const shift = figure.querySelector("input[data-faithful-shift]");
  const bins = figure.querySelector("[data-bins]");
  const out = figure.querySelector("output");
  if (!(width instanceof HTMLInputElement) || !(shift instanceof HTMLInputElement) || !bins || !out) return;
  const draw = (): void => {
    const next = faithfulBins(Number(width.value), Number(shift.value));
    bins.innerHTML = next.svg;
    out.textContent = next.note;
  };
  width.addEventListener("input", draw);
  shift.addEventListener("input", draw);
}

for (const figure of document.querySelectorAll("figure[data-kind=faithful]")) wireFaithful(figure);

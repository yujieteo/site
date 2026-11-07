import { allKept, anscombeFit } from "./anscombe.ts";
import { mixParts } from "./berkeley.ts";
import { faithfulBins } from "./faithful.ts";

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

function redrawSet(group: Element, kept: Uint8Array): void {
  const next = anscombeFit(Number(group.getAttribute("data-set")), kept);
  const fit = group.querySelector("[data-fit]");
  const note = group.querySelector("[data-note]");
  if (fit) fit.innerHTML = next.line;
  if (note) note.textContent = next.note;
  for (const point of group.querySelectorAll(".pt")) {
    const kept1 = kept[Number(point.getAttribute("data-i"))] === 1;
    point.setAttribute("data-dropped", String(!kept1));
    point.setAttribute("aria-pressed", String(!kept1));
  }
}

function wireSet(group: Element, reset: Element | null): void {
  const kept = allKept();
  const toggle = (point: Element): void => {
    const i = Number(point.getAttribute("data-i"));
    kept[i] = kept[i] === 1 ? 0 : 1;
    redrawSet(group, kept);
  };
  group.addEventListener("click", (event) => {
    const point = event.target instanceof Element ? event.target.closest(".pt") : null;
    if (point) toggle(point);
  });
  group.addEventListener("keydown", (event) => {
    const point = event.target instanceof Element ? event.target.closest(".pt") : null;
    if (!point || !(event instanceof KeyboardEvent) || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    toggle(point);
  });
  reset?.addEventListener("click", () => {
    kept.fill(1);
    redrawSet(group, kept);
  });
}

function wireBerkeley(figure: Element): void {
  const view = figure.querySelector("[data-view]");
  const buttons = figure.querySelectorAll("button[data-berkeley]");
  for (const button of buttons) {
    button.addEventListener("click", () => {
      view?.setAttribute("data-view", button.getAttribute("data-berkeley") ?? "pooled");
      for (const other of buttons) other.setAttribute("data-active", String(other === button));
    });
  }
}

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

export function wireFigures(): void {
  for (const figure of document.querySelectorAll("figure[data-kind=faithful]")) wireFaithful(figure);
  for (const figure of document.querySelectorAll("figure[data-kind=anscombe]")) {
    for (const group of figure.querySelectorAll("g[data-set]")) wireSet(group, figure.querySelector("[data-anscombe-reset]"));
  }
  for (const figure of document.querySelectorAll("figure[data-kind=berkeley]")) wireBerkeley(figure);
  for (const figure of document.querySelectorAll("figure[data-kind=mix]")) wireMix(figure);
}

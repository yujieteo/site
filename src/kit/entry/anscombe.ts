import { allKept, anscombeFit } from "../anscombe.ts";

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

for (const figure of document.querySelectorAll("figure[data-kind=anscombe]")) {
  for (const group of figure.querySelectorAll("g[data-set]")) wireSet(group, figure.querySelector("[data-anscombe-reset]"));
}

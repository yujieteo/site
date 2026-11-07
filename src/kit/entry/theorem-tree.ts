import { tree } from "../theorem-tree.ts";

function wire(figure: Element): void {
  const root = figure.querySelector<HTMLSelectElement>("[data-root]");
  const depth = figure.querySelector<HTMLInputElement>("[data-depth]");
  const target = figure.querySelector<HTMLElement>("[data-tree]");
  if (!root || !depth || !target) return;
  const known = new Set<number>();
  function draw(): void {
    if (!root || !depth || !target) return;
    target.innerHTML = tree(Number(root.value), Number(depth.value), known);
    if (depth.nextElementSibling) depth.nextElementSibling.textContent = depth.value;
  }
  root.addEventListener("change", draw);
  depth.addEventListener("input", draw);
  target.addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.dataset["known"] === undefined || input.dataset["known"] === "") return;
    if (input.checked) known.add(Number(input.dataset["known"]));
    else known.delete(Number(input.dataset["known"]));
    const selected = input.dataset["known"];
    draw();
    target.querySelector<HTMLInputElement>(`[data-known="${selected}"]`)?.focus();
  });
}
for (const figure of document.querySelectorAll("figure[data-kind=theorem-tree]")) wire(figure);

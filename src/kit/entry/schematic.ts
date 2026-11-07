function wireSchematic(figure: Element): void {
  const button = figure.querySelector("[data-next]");
  const label = figure.querySelector("[data-step-label]");
  const parts = figure.querySelectorAll("svg [data-label]");
  if (!button || !label || parts.length === 0) return;
  let at = -1;
  const show = (): void => {
    parts.forEach((part, i) => {
      part.toggleAttribute("data-shown", i <= at);
      part.toggleAttribute("data-current", i === at);
    });
    label.textContent = at < 0 ? "Press Next to see the first part." : `${at + 1} of ${parts.length}: ${parts[at]?.getAttribute("data-label") ?? ""}`;
    button.textContent = at === parts.length - 1 ? "Start over" : "Next";
  };
  figure.setAttribute("data-steps", "");
  button.addEventListener("click", () => {
    at = at === parts.length - 1 ? -1 : at + 1;
    show();
  });
  show();
}

for (const figure of document.querySelectorAll("figure[data-kind=schematic]")) wireSchematic(figure);

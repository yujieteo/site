
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

wirePause();

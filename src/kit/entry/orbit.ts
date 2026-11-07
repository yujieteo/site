
function wirePause(): void {
  const query = matchMedia("(prefers-reduced-motion: reduce)");
  for (const button of document.querySelectorAll(".fig-pause")) {
    const figure = button.closest("figure");
    if (!figure) continue;
    const set = (paused: boolean): void => {
      if (paused) figure.setAttribute("data-paused", "");
      else figure.removeAttribute("data-paused");
      button.setAttribute("aria-pressed", String(paused));
      button.textContent = paused ? "Play" : "Pause";
    };
    set(query.matches);
    query.addEventListener("change", (event) => set(event.matches));
    button.addEventListener("click", () => set(!figure.hasAttribute("data-paused")));
  }
}

wirePause();

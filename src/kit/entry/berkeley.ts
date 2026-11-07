
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

for (const figure of document.querySelectorAll("figure[data-kind=berkeley]")) wireBerkeley(figure);

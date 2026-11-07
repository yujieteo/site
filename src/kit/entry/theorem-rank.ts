import { ranking } from "../theorem-rank.ts";

for (const figure of document.querySelectorAll("figure[data-kind=theorem-rank]")) {
  const sliders = [...figure.querySelectorAll<HTMLInputElement>("input[data-weight]")];
  const list = figure.querySelector("[data-ranking]");
  for (const slider of sliders) slider.addEventListener("input", () => {
    const output = slider.nextElementSibling;
    if (output) output.textContent = slider.value;
    if (list) list.innerHTML = ranking(sliders.map((s) => Number(s.value)));
  });
}

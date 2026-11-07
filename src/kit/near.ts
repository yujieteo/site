const MARGIN = "800px 0px";

function failed(figure: HTMLElement): void {
  const slot = figure.querySelector("[data-lazy]");
  if (slot) slot.textContent = "This figure did not load. Reload the page to try again.";
}

export function whenNear(kind: string, load: (figure: HTMLElement) => Promise<void>): void {
  const seen = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const figure = entry.target;
      if (!entry.isIntersecting || !(figure instanceof HTMLElement)) continue;
      seen.unobserve(figure);
      load(figure).catch(() => {
        failed(figure);
      });
    }
  }, { rootMargin: MARGIN });
  for (const figure of document.querySelectorAll(`figure[data-kind=${kind}]`)) seen.observe(figure);
}

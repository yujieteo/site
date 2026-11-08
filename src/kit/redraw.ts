export function plotWidth(figure: Element): number {
  const frame = figure.querySelector(".frame");
  if (!frame) return 0;
  const style = getComputedStyle(frame);
  return Math.floor(frame.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight));
}

export function swapChart(figure: Element, html: string): void {
  const old = figure.querySelector("svg.chart");
  if (!old) return;
  const label = old.getAttribute("aria-label") ?? "";
  old.outerHTML = html;
  figure.querySelector("svg.chart")?.setAttribute("aria-label", label);
}

export function watch(figure: Element, redraw: (width: number) => void): void {
  const frame = figure.querySelector(".frame");
  let last = Number(figure.querySelector("svg.chart")?.getAttribute("width") ?? 0);
  if (!frame) return;
  new ResizeObserver(() => {
    const width = plotWidth(figure);
    if (width <= 0 || width === last) return;
    last = width;
    redraw(width);
  }).observe(frame);
}

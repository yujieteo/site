import { plotWidth } from "./redraw.ts";

function escapeAttribute(text: string): string {
  return text.split("&").join("&amp;").split('"').join("&quot;").split("<").join("&lt;");
}

export function hydrate(figure: Element, inner: (id: string, width: number) => string): void {
  const frame = figure.querySelector(".frame[data-lazy], .frame[role=img]");
  if (!frame || !figure.hasAttribute("data-lazy")) return;
  const alt = frame.getAttribute("aria-label") ?? "";
  frame.removeAttribute("role");
  frame.removeAttribute("aria-label");
  frame.removeAttribute("style");
  figure.removeAttribute("data-lazy");
  frame.innerHTML = inner(figure.id, plotWidth(figure)).replace("ALT", escapeAttribute(alt));
}

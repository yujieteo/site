const DELAY = 300;
const WARM = 400;
const LIFT = 8;
const EDGE = 4;

interface Tip {
  frame: Element;
  node: HTMLElement;
  timer: number;
  closedAt: number;
}

function markOf(event: Event): Element | null {
  return event.target instanceof Element ? event.target.closest("[data-tip]") : null;
}

function mouse(event: Event): boolean {
  return event instanceof PointerEvent && event.pointerType === "mouse";
}

function show(t: Tip, mark: Element, instant: boolean): void {
  clearTimeout(t.timer);
  t.node.textContent = mark.getAttribute("data-tip") ?? "";
  const box = t.frame.getBoundingClientRect();
  const at = mark.getBoundingClientRect();
  const centre = at.left + at.width / 2 - box.left;
  const left = Math.min(Math.max(centre - t.node.offsetWidth / 2, EDGE), Math.max(box.width - t.node.offsetWidth - EDGE, EDGE));
  t.node.toggleAttribute("data-instant", instant);
  t.node.style.left = `${left}px`;
  t.node.style.top = `${at.top - box.top - t.node.offsetHeight - LIFT}px`;
  t.node.style.transformOrigin = `${centre - left}px 100%`;
  t.node.setAttribute("data-open", "");
}

function hide(t: Tip): void {
  clearTimeout(t.timer);
  if (t.node.hasAttribute("data-open")) t.closedAt = performance.now();
  t.node.removeAttribute("data-open");
}

function hover(t: Tip, mark: Element): void {
  clearTimeout(t.timer);
  const warm = t.node.hasAttribute("data-open") || performance.now() - t.closedAt < WARM;
  if (warm) show(t, mark, true);
  else t.timer = window.setTimeout(() => show(t, mark, false), DELAY);
}

const tips = new WeakMap<Element, Tip>();

export function wireTooltips(figure: Element): void {
  const frame = figure.querySelector(".frame");
  if (!frame) return;
  const node = document.createElement("div");
  node.className = "tip";
  node.setAttribute("role", "tooltip");
  frame.append(node);
  const t: Tip = { frame, node, timer: 0, closedAt: -WARM };
  tips.set(figure, t);
  const fine = matchMedia("(hover: hover) and (pointer: fine)");
  frame.addEventListener("pointerover", (event) => {
    const mark = markOf(event);
    if (mark && fine.matches && mouse(event)) hover(t, mark);
  });
  frame.addEventListener("pointerout", (event) => {
    if (mouse(event)) hide(t);
  });
  frame.addEventListener("pointerdown", (event) => {
    const mark = markOf(event);
    if (mark && !mouse(event)) show(t, mark, false);
  });
  frame.addEventListener("focusin", (event) => {
    const mark = markOf(event);
    if (mark) show(t, mark, true);
  });
  frame.addEventListener("focusout", () => hide(t));
  document.addEventListener("pointerdown", (event) => {
    const mark = markOf(event);
    if (!mouse(event) && !(mark && frame.contains(mark))) hide(t);
  });
}

export function hideTooltips(figure: Element): void {
  const t = tips.get(figure);
  if (t) hide(t);
}

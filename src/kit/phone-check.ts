const MIN_TEXT = 10.95;
const SLACK = 0.6;

interface Box {
  el: Element;
  r: DOMRect;
  name: string;
}

function name(el: Element): string {
  const text = el.textContent.trim().slice(0, 28);
  return `${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ""}[${text}]`;
}

function shown(el: Element): DOMRect | null {
  if (el.closest(".tip, defs, [hidden]")) return null;
  const r = el.getBoundingClientRect();
  if (r.width === 0 && r.height === 0) return null;
  return r;
}

function overflow(figure: Element, column: DOMRect): string[] {
  const out: string[] = [];
  for (const el of figure.querySelectorAll("*")) {
    const r = shown(el);
    if (r && (r.right > column.right + SLACK || r.left < column.left - SLACK)) out.push(`runs past the column: ${name(el)} ${Math.round(r.left)}..${Math.round(r.right)} of ${Math.round(column.left)}..${Math.round(column.right)}`);
  }
  return out.slice(0, 6);
}

function labels(figure: Element): Box[] {
  const out: Box[] = [];
  for (const el of figure.querySelectorAll("svg text, label, select, button, output, .note, .step-label, figcaption")) {
    const r = shown(el);
    if (r && el.textContent.trim() !== "" || el instanceof HTMLSelectElement) if (r) out.push({ el, r, name: name(el) });
  }
  return out;
}

function touch(a: DOMRect, b: DOMRect): boolean {
  const w = Math.min(a.right, b.right) - Math.max(a.left, b.left);
  const h = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
  return w > 1 && h > 1;
}

function overlap(figure: Element): string[] {
  const boxes = labels(figure);
  const out: string[] = [];
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i];
      const b = boxes[j];
      if (a && b && !a.el.contains(b.el) && !b.el.contains(a.el) && touch(a.r, b.r)) out.push(`labels overlap: ${a.name} and ${b.name}`);
    }
  }
  return out.slice(0, 6);
}

function small(figure: Element): string[] {
  const out: string[] = [];
  for (const el of figure.querySelectorAll("svg text")) {
    const svg = el.closest("svg");
    const view = svg?.viewBox.baseVal.width ?? 0;
    const scale = svg && view > 0 ? svg.getBoundingClientRect().width / view : 1;
    const size = parseFloat(getComputedStyle(el).fontSize) * scale;
    if (shown(el) && size < MIN_TEXT) out.push(`text under 11 px (${size.toFixed(1)}): ${name(el)}`);
  }
  return out.slice(0, 6);
}

function check(index: number): string[] {
  const figure = document.querySelectorAll("main.page figure")[index];
  const column = document.querySelector("main.page article")?.getBoundingClientRect();
  if (!figure || !column) return ["no figure"];
  const found = [...overflow(figure, column), ...overlap(figure), ...small(figure)];
  if (document.documentElement.scrollWidth > window.innerWidth + 1) found.push("the page scrolls sideways");
  return found;
}

function report(): void {
  const found: string[] = [];
  const figures = document.querySelectorAll("main.page figure");
  for (let i = 0; i < figures.length; i++) {
    for (const line of check(i)) found.push(`${location.pathname.split("/").at(-2)} ${figures[i]?.id} at ${window.innerWidth}px: ${line}`);
  }
  window.parent.postMessage(found, "*");
}

function wait(): void {
  if (document.querySelector("main.page figure[data-lazy]")) return;
  watcher.disconnect();
  setTimeout(report, 300);
}

const watcher = new MutationObserver(wait);

function load(): void {
  const kinds = new Set<string>();
  for (const figure of document.querySelectorAll("main.page figure[data-lazy]")) kinds.add(figure.getAttribute("data-kind") ?? "");
  for (const kind of kinds) {
    const script = document.createElement("script");
    script.type = "module";
    script.src = `../../kit/${kind}.js`;
    document.head.append(script);
  }
}

function begin(): void {
  load();
  watcher.observe(document.body, { attributes: true, subtree: true, attributeFilter: ["data-lazy"] });
  wait();
}

function host(width: number): void {
  const frame = document.createElement("iframe");
  frame.src = `${location.pathname}#${width}`;
  frame.style.cssText = `width:${width}px;height:40000px;border:0`;
  document.body.replaceChildren(frame);
  window.addEventListener("message", (event) => {
    const result = document.createElement("pre");
    result.id = "phone-result";
    result.textContent = JSON.stringify(event.data);
    document.body.append(result);
  });
}

function start(): void {
  if (window.top === window) host(Number(new URLSearchParams(location.search).get("w")));
  else if (Number(location.hash.slice(1)) > 0) begin();
}

window.addEventListener("load", start);

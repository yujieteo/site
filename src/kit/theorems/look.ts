const LOOK = `
figure[data-kind^=theorem] .frame { --fig: var(--series-1); --fig-soft: color-mix(in srgb, var(--fig) 12%, var(--card)); text-align: left; }
.t-eyebrow { margin: 0; font: 500 0.6875rem/1.4 var(--mono); letter-spacing: 0.08em; text-transform: uppercase; color: var(--fig); }
.t-title { margin: 4px 0 16px; font-size: 1.0625rem; font-weight: 600; letter-spacing: -0.01em; line-height: 1.35; text-wrap: balance; }
.t-stats { display: flex; flex-wrap: wrap; gap: 8px 28px; margin: 0 0 16px; }
.t-stat b { display: block; font-size: 1.625rem; font-weight: 600; line-height: 1.15; letter-spacing: -0.03em; color: var(--fig); font-variant-numeric: tabular-nums; }
.t-stat span { display: block; font-size: 0.75rem; line-height: 1.4; color: var(--muted); max-width: 22ch; }
.t-seg { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 16px; }
.t-note { margin: 12px 0 0; font-size: 0.8125rem; line-height: 1.5; color: var(--muted); min-height: 1.5em; }
.t-note b { color: var(--ink); font-weight: 550; }
.t-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin: 0 0 12px; font-size: var(--small); }
.t-row input[type=range] { width: 160px; accent-color: var(--fig); }
.t-row output { font-variant-numeric: tabular-nums; color: var(--muted); min-width: 3ch; }
.t-key { display: inline-flex; align-items: center; gap: 6px; font-size: 0.75rem; color: var(--muted); margin-right: 14px; }
.t-key i { width: 10px; height: 10px; border-radius: 2px; display: inline-block; }
figure[data-kind^=theorem] .chart { display: block; margin: 0; }
`;

export function addStyle(id: string, css: string): void {
  if (document.querySelector(`style[data-style="${id}"]`)) return;
  const node = document.createElement("style");
  node.dataset["style"] = id;
  node.textContent = css;
  document.head.append(node);
}

export function escapeText(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

export function head(eyebrow: string, title: string): string {
  return `<p class="t-eyebrow">${eyebrow}</p><h3 class="t-title">${title}</h3>`;
}

export function stat(value: string, label: string): string {
  return `<div class="t-stat"><b>${value}</b><span>${label}</span></div>`;
}

export function choices(name: string, labels: readonly string[], active: number): string {
  const buttons = labels.map((label, i) => `<button class="button" type="button" data-${name}="${i}" data-active="${i === active}">${escapeText(label)}</button>`);
  return `<div class="t-seg" role="group">${buttons.join("")}</div>`;
}

export function setActive(root: Element, name: string, active: number): void {
  for (const button of root.querySelectorAll(`[data-${name}]`)) button.setAttribute("data-active", String(button.getAttribute(`data-${name}`) === String(active)));
}

export function mount(figure: HTMLElement, colour: number, html: string): HTMLElement | null {
  addStyle("theorems", LOOK);
  const slot = figure.querySelector("[data-lazy]");
  const frame = figure.querySelector(".frame");
  if (!slot || !(frame instanceof HTMLElement)) return null;
  frame.style.setProperty("--fig", `var(--series-${colour})`);
  const label = slot.getAttribute("aria-label") ?? "";
  const root = document.createElement("div");
  root.setAttribute("role", "group");
  root.setAttribute("aria-label", label);
  root.innerHTML = html;
  slot.replaceWith(root);
  return root;
}

export function whole(n: number): string {
  return n.toLocaleString("en-US");
}

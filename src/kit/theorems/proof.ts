import { PROOFS, type Proof } from "./data-proof.ts";
import { VERIFIED } from "./data-proof-checks.ts";
import { addStyle, choices, escapeText, head, mount, refocus, setActive, stat, whole } from "./look.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { svgHead } from "../scale.ts";

const CSS = `
.w-map .edge { fill: none; stroke: var(--underline-hover); stroke-width: 1.5; }
.w-map .edge[data-done] { stroke: var(--fig); }
.w-map .step rect { fill: var(--card); stroke: var(--line); stroke-width: 1; }
.w-map .step text { fill: var(--muted); font-size: 12px; }
.w-map .step .n { font: 600 10.5px var(--mono); letter-spacing: 0.06em; }
.w-map .step[data-state] text.cite { fill: var(--fig); font: 500 10.5px var(--mono); }
.w-map .step[data-state=later] { opacity: 0.6; }
.w-nav { margin-top: 14px; }
.w-map .step[data-state=done] rect { fill: var(--fig-soft); stroke: color-mix(in srgb, var(--fig) 45%, var(--card)); }
.w-map .step[data-state=done] text, .w-map .step[data-state=now] text { fill: var(--ink); }
.w-map .step[data-state=now] rect { fill: var(--fig-soft); stroke: var(--fig); stroke-width: 2; }
.w-map .step[data-used] rect { stroke: var(--fig); stroke-width: 2; stroke-dasharray: 4 3; }
.w-map .step[data-used] { opacity: 1; }
.w-statement { margin: 0 0 14px; font-size: 0.9375rem; line-height: 1.5; }
.w-hyps { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin: 0 0 14px; font-size: 0.75rem; color: var(--muted); }
.w-hyps .button[data-active=true] { background: var(--fig); color: var(--card); }
.w-text { margin: 14px 0 0; padding: 12px 14px; border-radius: var(--radius); background: var(--fig-soft); font-size: 0.875rem; line-height: 1.55; min-height: 5.5em; }
.w-text b { font-weight: 600; }
.w-text span { display: block; margin-top: 4px; color: var(--muted); }
.w-source { margin: 10px 0 0; font-size: 0.75rem; color: var(--muted); overflow-wrap: anywhere; }
@media (prefers-reduced-motion: no-preference) {
  .w-map .step, .w-map .step rect, .w-map .edge { transition: opacity var(--dur-med, 200ms) ease, fill var(--dur-med, 200ms) ease, stroke var(--dur-med, 200ms) ease; }
}
`;

const NARROW = 560;

export function levels(proof: Proof): number[] {
  const down = proof.steps.map(() => 0);
  for (let pass = 0; pass < proof.steps.length; pass++) {
    for (const [a, b] of proof.edges) down[a] = Math.max(down[a] ?? 0, (down[b] ?? 0) + 1);
  }
  const most = Math.max(...down);
  return down.map((d) => most - d);
}

export function wrap(text: string, most: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    if (line && line.length + word.length + 1 > most) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
}

interface Box { x: number; y: number; w: number; h: number }

const LIFT = 34;

function room(w: number): number {
  return Math.max(8, Math.floor((w - 20) / 6.4));
}

function boxes(proof: Proof, width: number): Box[] {
  const level = levels(proof);
  const depth = Math.max(...level) + 1;
  const slot = level.map((l, i) => level.slice(0, i).filter((m) => m === l).length);
  const across = Math.max(...slot) + 1;
  const tall = width < NARROW;
  const w = tall ? (width - LIFT - (across - 1) * 12) / across : (width - (depth - 1) * 28) / depth;
  const lines = Math.max(...proof.steps.map((p) => Math.min(4, wrap(p.slogan, room(w)).length)));
  const h = 36 + lines * 15 + (proof.steps.some((p) => p.cites) ? 16 : 0);
  return level.map((l, i) => {
    const s = slot[i] ?? 0;
    return tall ? { x: s * (w + 12), y: l * (h + 26), w, h } : { x: l * (w + 28), y: LIFT + s * (h + 18), w, h };
  });
}

function stateOf(i: number, now: number): string {
  return i < now ? "done" : i === now ? "now" : "later";
}

function stepMark(proof: Proof, i: number, b: Box, now: number, used: readonly number[]): string {
  const step = proof.steps[i];
  if (!step) return "";
  const lines = wrap(step.slogan, room(b.w)).slice(0, 4);
  const text = lines.map((l, k) => `<text x="${b.x + 10}" y="${b.y + 38 + k * 15}">${escapeText(l)}</text>`).join("");
  const cite = step.cites ? `<text class="cite" x="${b.x + 10}" y="${b.y + b.h - 10}">cites ${escapeText(step.cites)}</text>` : "";
  const flag = used.includes(i) ? " data-used" : "";
  const tip = `Step ${i + 1}: ${step.slogan}${step.cites ? ` It cites ${step.cites}.` : ""}`;
  return `<g class="step" data-state="${stateOf(i, now)}"${flag} data-tip="${escapeText(tip)}"><rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="8"/><text class="n" x="${b.x + 10}" y="${b.y + 18}">STEP ${i + 1}</text>${cite}${text}</g>`;
}

function skipMark(a: Box, b: Box, tall: boolean, flag: string): string {
  if (tall) {
    const x = Math.max(a.x + a.w, b.x + b.w);
    return `<path class="edge"${flag} d="M${a.x + a.w} ${a.y + a.h / 2} C${x + LIFT - 6} ${a.y + a.h / 2} ${x + LIFT - 6} ${b.y + b.h / 2} ${b.x + b.w + 2} ${b.y + b.h / 2}" marker-end="url(#w-arrow)"/>`;
  }
  const y = Math.min(a.y, b.y);
  return `<path class="edge"${flag} d="M${a.x + a.w / 2} ${a.y} C${a.x + a.w / 2} ${y - LIFT + 4} ${b.x + b.w / 2} ${y - LIFT + 4} ${b.x + b.w / 2} ${b.y - 2}" marker-end="url(#w-arrow)"/>`;
}

function edgeMark(a: Box, b: Box, tall: boolean, done: boolean): string {
  const flag = done ? " data-done" : "";
  const gap = tall ? b.y - (a.y + a.h) : b.x - (a.x + a.w);
  if (gap > 40) return skipMark(a, b, tall, flag);
  if (tall) {
    const x1 = a.x + a.w / 2;
    const x2 = b.x + b.w / 2;
    const m = (a.y + a.h + b.y) / 2;
    return `<path class="edge"${flag} d="M${x1} ${a.y + a.h} C${x1} ${m} ${x2} ${m} ${x2} ${b.y - 2}" marker-end="url(#w-arrow)"/>`;
  }
  const y1 = a.y + a.h / 2;
  const y2 = b.y + b.h / 2;
  const m = (a.x + a.w + b.x) / 2;
  return `<path class="edge"${flag} d="M${a.x + a.w} ${y1} C${m} ${y1} ${m} ${y2} ${b.x - 2} ${y2}" marker-end="url(#w-arrow)"/>`;
}

function chart(proof: Proof, width: number, now: number, used: readonly number[]): string {
  const box = boxes(proof, width);
  const height = Math.max(...box.map((b) => b.y + b.h)) + 4;
  const tall = width < NARROW;
  const arrow = `<defs><marker id="w-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="var(--underline-hover)"/></marker></defs>`;
  const edges = proof.edges.map(([a, b]) => {
    const from = box[a];
    const to = box[b];
    return from && to ? edgeMark(from, to, tall, b <= now) : "";
  });
  const steps = box.map((b, i) => stepMark(proof, i, b, now, used));
  const alt = `${proof.theorem}: ${proof.steps.length} proof steps joined by arrows from each step to the steps that need it`;
  return `${svgHead(width, height)}${arrow}<g class="w-map">${edges.join("")}${steps.join("")}</g></svg>`.replace("ALT", escapeText(alt));
}

interface View { proof: number; now: number; hyp: number }

function proofOf(view: View): Proof {
  return PROOFS[view.proof] ?? PROOFS[0];
}

function note(view: View): string {
  const proof = proofOf(view);
  const hyp = proof.hypotheses[view.hyp];
  if (hyp) return `<b>Why “${escapeText(hyp.text)}” is needed.</b> ${escapeText(hyp.why)}<span>Used in step ${hyp.steps.map((s) => s + 1).join(" and step ")}. Without it, those steps fail.</span>`;
  const step = proof.steps[view.now];
  if (!step) return "";
  return `<b>Step ${view.now + 1} of ${proof.steps.length}.</b> ${escapeText(step.slogan)}<span>${escapeText(step.detail)}</span>`;
}

function hyps(proof: Proof, active: number): string {
  const chips = proof.hypotheses.map((h, i) => `<button class="button" type="button" data-hyp="${i}" data-active="${i === active}" aria-pressed="${i === active}">${escapeText(h.text)}</button>`);
  return `Hypotheses, press one to see where it is used:${chips.join("")}`;
}

function draw(figure: HTMLElement, root: Element, view: View): void {
  const proof = proofOf(view);
  const used = proof.hypotheses[view.hyp]?.steps ?? [];
  const set = (sel: string, html: string): void => {
    const node = root.querySelector(sel);
    if (node) node.innerHTML = html;
  };
  hideTooltips(figure);
  set("[data-statement]", `<b>${escapeText(proof.theorem)}.</b> ${escapeText(proof.statement)}`);
  set("[data-hyps]", hyps(proof, view.hyp));
  set("[data-chart]", chart(proof, plotWidth(figure), view.now, used));
  set("[data-text]", note(view));
  set("[data-source]", `Proof: ${escapeText(proof.name)}. It follows the Lean proof <code>${escapeText(proof.decl)}</code> in mathlib.`);
  root.querySelector<HTMLButtonElement>("[data-back]")?.toggleAttribute("disabled", view.now === 0);
  root.querySelector<HTMLButtonElement>("[data-next]")?.toggleAttribute("disabled", view.now >= proof.steps.length - 1);
  setActive(root, "proof", view.proof);
}

function redraw(figure: HTMLElement, root: Element, view: View): void {
  const had = document.activeElement;
  draw(figure, root, view);
  refocus(root, had);
}

function act(target: Element, view: View): boolean {
  const pick = target.closest("[data-proof]");
  const hyp = target.closest("[data-hyp]");
  if (pick) Object.assign(view, { proof: Number(pick.getAttribute("data-proof")), now: 0, hyp: -1 });
  else if (hyp) view.hyp = Number(hyp.getAttribute("data-hyp")) === view.hyp ? -1 : Number(hyp.getAttribute("data-hyp"));
  else if (target.closest("[data-back]")) Object.assign(view, { now: Math.max(0, view.now - 1), hyp: -1 });
  else if (target.closest("[data-next]")) Object.assign(view, { now: Math.min(proofOf(view).steps.length - 1, view.now + 1), hyp: -1 });
  else return false;
  return true;
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-proof", CSS);
  const [authored, , lean] = VERIFIED;
  const stats = `<div class="t-stats">${stat(whole(authored), "proofs written out step by step, each hypothesis tied to its steps")}${stat(whole(lean), "of them checked line by line against a Lean proof")}</div>`;
  const pick = choices("proof", PROOFS.map((p) => p.theorem), 0);
  const nav = `<div class="t-seg w-nav"><button class="button" type="button" data-back>Back</button><button class="button" type="button" data-next>Next step</button></div>`;
  const html = `${head("Reading a proof", "Every hypothesis has a job, and you can point to the step that does it")}${stats}${pick}<p class="w-statement" data-statement></p><div class="w-hyps" data-hyps></div><div data-chart></div>${nav}<p class="w-text" data-text aria-live="polite"></p><p class="w-source" data-source></p>`;
  const root = mount(figure, 4, html);
  if (!root) return;
  const view: View = { proof: 0, now: 0, hyp: -1 };
  root.addEventListener("click", (event) => {
    if (event.target instanceof Element && act(event.target, view)) redraw(figure, root, view);
  });
  watch(figure, () => { redraw(figure, root, view); });
  draw(figure, root, view);
  wireTooltips(figure);
}

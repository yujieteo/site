import { CANDIDATES } from "./data-scores.ts";
import { addStyle, escapeText, head, mount, stat, whole } from "./look.ts";
import { ranked } from "./scores.ts";

const CSS = `
.l-bars { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 3px 28px; }
.l-bars li { display: grid; grid-template-columns: minmax(0, 1fr) 72px 3.2em; align-items: center; gap: 8px; font-size: 0.8125rem; line-height: 1.3; min-height: 22px; }
.l-bars .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.l-bars .track { height: 8px; border-radius: 4px; background: var(--fig-soft); overflow: hidden; }
.l-bars .fill { height: 100%; border-radius: 4px; background: var(--fig); transform-origin: left; }
.l-bars li[data-zero] { color: var(--muted); }
.l-bars .pct { text-align: right; font-variant-numeric: tabular-nums; color: var(--muted); }
.l-controls { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; margin: 0 0 16px; font-size: var(--small); }
.l-controls output { margin-left: 4px; color: var(--muted); font-variant-numeric: tabular-nums; }
`;

const DRAWS = 1000;
const DURATION = 4000;
const TICK = 32;
const SEED = 20261107;

export function mulberry32(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let z = state;
    z = Math.imul(z ^ (z >>> 15), z | 1);
    z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
  };
}

export function drawWeights(next: () => number): number[] {
  const out: number[] = [];
  for (let i = 0; i < 7; i++) out.push(-Math.log(1 - next()));
  return out;
}

export function tally(counts: Map<string, number>, next: () => number, draws: number): void {
  for (let d = 0; d < draws; d++) {
    const rows = ranked(drawWeights(next)).slice(0, 10);
    for (const row of rows) counts.set(row.name, (counts.get(row.name) ?? 0) + 1);
  }
}

export function shares(seed: number, draws: number): Map<string, number> {
  const counts = new Map<string, number>();
  tally(counts, mulberry32(seed), draws);
  const out = new Map<string, number>();
  for (const [name, n] of counts) out.set(name, n / draws);
  return out;
}

interface State {
  counts: Map<string, number>;
  done: number;
  next: () => number;
  paused: boolean;
  running: boolean;
  last: number;
  carry: number;
  timer: number;
}

function fresh(): State {
  return { counts: new Map(), done: 0, next: mulberry32(SEED), paused: false, running: false, last: 0, carry: 0, timer: 0 };
}

function bars(s: State): string {
  const rows = CANDIDATES.map(([name]) => ({ name, share: s.done > 0 ? (s.counts.get(name) ?? 0) / s.done : 0 }));
  rows.sort((a, b) => b.share - a.share || a.name.localeCompare(b.name));
  return rows.map((r) => `<li${r.share === 0 ? " data-zero" : ""}><span class="name" title="${escapeText(r.name)}">${escapeText(r.name)}</span><span class="track"><span class="fill" style="display:block;width:${(100 * r.share).toFixed(1)}%"></span></span><span class="pct">${s.done > 0 ? `${Math.round(100 * r.share)}%` : "–"}</span></li>`).join("");
}

function render(root: Element, s: State): void {
  const list = root.querySelector("[data-bars]");
  const count = root.querySelector("[data-count]");
  const seen = root.querySelector("[data-seen]");
  const pause = root.querySelector("[data-pause]");
  if (list) list.innerHTML = bars(s);
  if (count) count.textContent = `${whole(s.done)} of ${whole(DRAWS)} draws`;
  if (seen) seen.textContent = String(s.counts.size);
  if (pause instanceof HTMLButtonElement) {
    pause.disabled = !s.running;
    pause.setAttribute("aria-pressed", String(s.paused));
    pause.textContent = s.paused ? "Play" : "Pause";
  }
}

function frame(root: Element, s: State): void {
  const now = performance.now();
  s.carry += ((now - s.last) * DRAWS) / DURATION;
  const step = Math.min(Math.floor(s.carry), DRAWS - s.done);
  s.carry -= step;
  tally(s.counts, s.next, step);
  s.done += step;
  s.last = now;
  if (s.done >= DRAWS) stop(s);
  render(root, s);
}

function stop(s: State): void {
  clearInterval(s.timer);
  s.running = false;
}

function schedule(root: Element, s: State): void {
  s.last = performance.now();
  s.timer = window.setInterval(() => {
    frame(root, s);
  }, TICK);
}

function start(root: Element, s: State): void {
  stop(s);
  Object.assign(s, fresh());
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    tally(s.counts, s.next, DRAWS);
    s.done = DRAWS;
    render(root, s);
    return;
  }
  s.running = true;
  render(root, s);
  schedule(root, s);
}

function wire(root: Element, s: State): void {
  root.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest("button") : null;
    if (!target) return;
    if (target.hasAttribute("data-run")) start(root, s);
    if (target.hasAttribute("data-pause") && s.running) {
      s.paused = !s.paused;
      if (s.paused) clearInterval(s.timer);
      else schedule(root, s);
      render(root, s);
    }
    if (target.hasAttribute("data-reset")) {
      stop(s);
      Object.assign(s, fresh());
      render(root, s);
    }
  });
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-lottery", CSS);
  const stats = `<div class="t-stats">${stat(String(CANDIDATES.length), "results can ever enter the top ten")}${stat("5", "sit in the top ten under every draw")}${stat('<output data-seen>0</output>', "different results have appeared so far")}</div>`;
  const controls = `<div class="l-controls"><button class="button" type="button" data-run>Draw ${whole(DRAWS)} weightings</button><button class="button fig-pause" type="button" data-pause aria-pressed="false" disabled>Pause</button><button class="button" type="button" data-reset>Reset</button><output data-count aria-live="polite"></output></div>`;
  const html = `${head("A lottery of weights", `${CANDIDATES.length - 5} results share the other five seats`)}${stats}${controls}<ol class="l-bars" data-bars></ol><p class="t-note">Each draw picks seven random weights, uniform over every way to split 100 between the dials. A bar is the share of draws whose top ten holds that result.</p>`;
  const root = mount(figure, 2, html);
  if (!root) return;
  const s = fresh();
  wire(root, s);
  render(root, s);
}

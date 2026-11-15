import { BACKED, MODEL, type Backed } from "./food-model.ts";

export type BackedSort = "value" | "backing";

export interface BackedState {
  sort: BackedSort;
  kind: string;
}

const KIND: Record<Backed["k"], string> = { h: "Hawker", r: "Restaurant", c: "Cafe", f: "Fast food" };

function esc(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function money(value: number): string {
  return `S$${value.toFixed(2)}`;
}

function ordinal(n: number): string {
  const r = Math.round(n);
  const teen = r % 100 >= 11 && r % 100 <= 13;
  const tail = teen ? "th" : r % 10 === 1 ? "st" : r % 10 === 2 ? "nd" : r % 10 === 3 ? "rd" : "th";
  return `${r}${tail}`;
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function monthName(stamp: string): string {
  const [year, month] = stamp.split("-");
  return `${MONTHS[Number(month) - 1] ?? ""} ${year ?? ""}`;
}

function span(lo: number, hi: number): string {
  return lo === hi ? `${lo}` : `${lo}–${hi}`;
}

function list(names: readonly string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

function rankOf(item: Backed, sort: BackedSort): readonly number[] {
  return sort === "value" ? item.rv : item.rb;
}

function tiedOf(item: Backed, sort: BackedSort): boolean {
  return (sort === "value" ? item.xv : item.xb) === 1;
}

function topOf(item: Backed, sort: BackedSort): number {
  return sort === "value" ? item.tv : item.tb;
}

function percent(p: number): string {
  if (p < 0.01) return "under 1%";
  if (p > 0.99) return "over 99%";
  return `${Math.round(p * 100)}%`;
}

function track(item: Backed): string {
  const [lo = 0, mid = 0, hi = 0] = item.q;
  return `<span class="food-track" aria-hidden="true"><span class="food-range" data-k="${item.k}" data-css="left:${lo.toFixed(1)}%;width:${Math.max(1, hi - lo).toFixed(1)}%"></span><i class="food-tick" data-css="left:${mid.toFixed(1)}%"></i></span>`;
}

function row(item: Backed, sort: BackedSort): string {
  const [lo = 0, mid = 0, hi = 0] = rankOf(item, sort);
  const [qlo = 0, qmid = 0, qhi = 0] = item.q;
  const [plo = 0, pmid = 0, phi = 0] = item.po;
  const shared = item.pr[1] ?? 0;
  const [vlo = 0, vmid = 0, vhi = 0] = item.v;
  const named = item.by.length > 0 ? `Named by ${esc(list(item.by))}.` : "No outlet in the study names it.";
  const michelin = item.m >= 0 ? `<li>Chance of a Bib Gourmand or star on the next Michelin list, from backing alone: ${percent(item.m)}.</li>` : "";
  const label = `Rank ${span(lo, hi)}, most likely ${mid}`;
  return `<li><details class="food-item"><summary class="food-row food-best press"><span class="food-score" aria-label="${esc(label)}">${span(lo, hi)}</span><span class="food-body"><span class="food-name">${esc(item.n)}</span><span class="food-sub">${esc(item.cu)} · ${KIND[item.k]}</span><span class="food-sub">Backing ${ordinal(qmid)} percentile · top 5 in ${percent(topOf(item, sort))} of draws</span></span><span class="food-end"><span class="food-price">${money(pmid)}</span><span class="food-sub">typical dish</span></span>${track(item)}</summary><div class="food-open"><ul class="food-notes"><li>${named}</li><li>Backing between the ${ordinal(qlo)} and ${ordinal(qhi)} percentile, 8 times in 10.</li><li>Its dishes have a median of ${money(pmid)} and run from ${money(plo)} to ${money(phi)}, in ${monthName(MODEL.cpi)} dollars.</li><li>Priced on the dish mix shared by every place here, it comes to ${money(shared)}. Value uses this price, so a thosai stall and a steakhouse are compared on the same dishes.</li><li>Value ${vmid.toFixed(1)} percentile points per S$10 of the shared mix, between ${vlo.toFixed(1)} and ${vhi.toFixed(1)}.</li><li>Rank on ${sort === "value" ? "value" : "backing"} between ${lo} and ${hi} of ${MODEL.places}, 8 times in 10.</li>${michelin}</ul></div></details></li>`;
}

function header(text: string): string {
  return `<li class="food-group">${esc(text)}</li>`;
}

export function backedRows(state: BackedState): { html: string; total: number } {
  const key = (item: Backed): number => rankOf(item, state.sort)[1] ?? 0;
  const items = BACKED.filter((item) => state.kind === "all" || item.k === state.kind).sort((a, b) => Number(tiedOf(b, state.sort)) - Number(tiedOf(a, state.sort)) || key(a) - key(b) || (rankOf(a, state.sort)[0] ?? 0) - (rankOf(b, state.sort)[0] ?? 0) || a.n.localeCompare(b.n));
  let html = "";
  let last = "";
  for (const item of items) {
    const group = tiedOf(item, state.sort) ? "Tied for first: each beats the leader in at least 1 draw in 5" : "The rest, by most likely rank";
    if (group !== last) html += header(group);
    last = group;
    html += row(item, state.sort);
  }
  return { html, total: items.length };
}

function select(id: string, label: string, name: string, options: readonly (readonly [string, string])[]): string {
  return `<div class="food-select"><label for="${id}-${name}">${label}</label><select id="${id}-${name}" data-${name}>${options.map(([value, text]) => `<option value="${value}">${esc(text)}</option>`).join("")}</select></div>`;
}

export function backedFigure(id: string): string {
  const first = backedRows({ sort: "value", kind: "all" });
  const sort = select(id, "Rank by", "rank", [["value", "Value for money"], ["backing", "Backing alone"]]);
  const kinds = select(id, "Show", "kind", [["all", "All places"], ["h", "Hawker"], ["r", "Restaurant"], ["c", "Cafe"]]);
  return `<div class="food-pair">${sort}${kinds}</div><p class="food-pick" aria-live="polite" data-count>${first.total} places. The number on the left is the rank, 8 times in 10.</p><ol class="food-rows food-backed" data-rows>${first.html}</ol>`;
}

export function backedText(): string[] {
  const lines = ["| Place | Backing percentile (80%) | Typical dish | Shared dish mix | Value rank (80%) | Backing rank (80%) |", "| --- | --- | --- | --- | --- | --- |"];
  for (const item of [...BACKED].sort((a, b) => (a.rv[1] ?? 0) - (b.rv[1] ?? 0))) {
    lines.push(`| ${item.n} | ${Math.round(item.q[1] ?? 0)} (${Math.round(item.q[0] ?? 0)}–${Math.round(item.q[2] ?? 0)}) | ${money(item.po[1] ?? 0)} | ${money(item.pr[1] ?? 0)} | ${span(item.rv[0] ?? 0, item.rv[2] ?? 0)} | ${span(item.rb[0] ?? 0, item.rb[2] ?? 0)} |`);
  }
  return lines;
}

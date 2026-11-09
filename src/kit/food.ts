import { CENTRES, EXTRA, OUTLINE, PLACES, PRICED, SOURCES, type Kind, type Place, type Priced } from "./food-data.ts";
import { at, scale, svgHead, type Scale } from "./scale.ts";

export type BestSort = "rating" | "price";

export interface Filter {
  words: string;
  kind: string;
  budget: number;
}

export interface Dot {
  x: number;
  y: number;
  place: Place;
}

const NAMES: Record<Kind, string> = { h: "Hawker", r: "Restaurant", c: "Cafe", f: "Fast food" };
const COLOURS: Record<Kind, string> = { h: "var(--series-1)", r: "var(--series-2)", c: "var(--series-3)", f: "var(--series-4)" };
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TOP_PRICE = 30;
const PRICE_TICKS = [1, 2, 5, 10, 20, 30];
const SHORT: Record<string, string> = { "Munchi Pancakes": "Munchi", "Social Bite": "Social Bite", TANYU: "Tanyu", "Captain Kim Korean BBQ": "Captain Kim", "Keng Eng Kee Seafood": "Keng Eng Kee", "Ah Gong Ban Mian": "Ah Gong" };
const LATITUDE = Math.cos((1.354 * Math.PI) / 180);
export const PAGE = 40;

function esc(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function money(value: number): string {
  return `S$${value.toFixed(2)}`;
}

function monthOf(stamp: string): string {
  const [year, month] = stamp.split("-");
  return `${MONTHS[Number(month) - 1] ?? ""} ${year ?? ""}`;
}

function mapsUrl(name: string, place: string): string {
  return `https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(`${name} ${place} Singapore`)}`;
}

function swatch(kind: Kind): string {
  return `<i class="food-dot" style="background:${COLOURS[kind]}"></i>`;
}

function rated(): Priced[] {
  return PRICED.filter((item) => item.r > 0 && item.g === 1);
}

function ratingNote(item: Priced): string {
  const source = SOURCES[item.rs];
  const when = source ? monthOf(source[1]) : "";
  const count = item.rv > 0 ? ` · ${item.rv.toLocaleString("en-SG")}${item.rv === 4000 ? "+" : ""} reviews` : "";
  return `Google · ${when}${count}`;
}

function bibTag(item: Priced): string {
  return item.b === 1 ? `<span class="food-tag">Bib Gourmand</span>` : "";
}

function bestRow(item: Priced): string {
  const width = Math.max(2, (item.y / TOP_PRICE) * 100).toFixed(1);
  return `<li><a class="food-row food-best press" href="${mapsUrl(item.n, item.p)}" target="_blank" rel="noopener"><span class="food-score">${item.r.toFixed(1)}</span><span class="food-body"><span class="food-name">${esc(item.n)}</span>${bibTag(item)}<span class="food-sub">${esc(item.d)} · ${esc(item.p)}</span><span class="food-sub">${ratingNote(item)}</span></span><span class="food-price">${money(item.y)}</span><span class="food-track"><span style="width:${width}%;background:${COLOURS[item.k]}"></span></span></a></li>`;
}

export function bestRows(sort: BestSort): string {
  const list = rated().sort((a, b) => (sort === "rating" ? b.r - a.r || a.y - b.y : a.y - b.y || b.r - a.r));
  return list.map(bestRow).join("");
}

function legend(kinds: readonly Kind[]): string {
  return `<p class="food-key">${kinds.map((kind) => `<span>${swatch(kind)}${NAMES[kind]}</span>`).join("")}</p>`;
}

function buttons(group: string, options: readonly (readonly [string, string])[]): string {
  const items = options.map(([value, label], index) => `<button class="button" type="button" data-value="${value}" data-active="${index === 0}" aria-pressed="${index === 0}">${label}</button>`);
  return `<div class="food-tools" role="group" aria-label="${group}">${items.join("")}</div>`;
}

function bestFigure(): string {
  return `${buttons("Sort by", [["rating", "Highest rated"], ["price", "Lowest cost"]])}${legend(["h", "r", "c"])}<ol class="food-rows" data-rows>${bestRows("rating")}</ol>`;
}

function logScale(left: number, right: number): Scale {
  return scale(Math.log(1), Math.log(TOP_PRICE * 1.08), left, right);
}

function text(x: number, y: number, anchor: string, body: string, ink = "var(--muted)"): string {
  return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" style="fill:${ink}">${esc(body)}</text>`;
}

function priceAxis(x: Scale, top: number, bottom: number): string {
  let out = "";
  for (const tick of PRICE_TICKS) {
    const left = at(x, Math.log(tick));
    out += `<line x1="${left.toFixed(1)}" x2="${left.toFixed(1)}" y1="${top}" y2="${bottom}" stroke="var(--line)"></line>${text(left, bottom + 18, "middle", `S$${tick}`)}`;
  }
  return out;
}

function ratingAxis(y: Scale, left: number, right: number): string {
  let out = "";
  for (const tick of [3, 3.5, 4, 4.5, 5]) {
    const top = at(y, tick);
    out += `<line x1="${left}" x2="${right}" y1="${top.toFixed(1)}" y2="${top.toFixed(1)}" stroke="var(--line)"></line>${text(left - 6, top + 4, "end", tick.toFixed(1))}`;
  }
  return out;
}

function scatterPoint(item: Priced, x: Scale, y: Scale, width: number): string {
  const cx = at(x, Math.log(item.y));
  const cy = at(y, item.r);
  const short = SHORT[item.n];
  const anchor = cx > width * 0.72 ? "end" : "start";
  const shift = anchor === "end" ? 4 : -4;
  const label = short === undefined ? "" : text(cx + shift, cy - 11, anchor, short, "var(--ink)");
  const tip = esc(`${item.n}: ${item.r.toFixed(1)} on Google, ${money(item.y)}`);
  return `<g data-tip="${tip}" tabindex="0"><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="16" fill="transparent"></circle><circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="5" fill="${COLOURS[item.k]}" stroke="var(--card)" stroke-width="2"></circle></g>${label}`;
}

export function scatterSvg(width: number): string {
  const height = 320;
  const left = 34;
  const right = width - 10;
  const bottom = height - 26;
  const x = logScale(left, right);
  const y = scale(3, 5, bottom, 22);
  const points = rated().map((item) => scatterPoint(item, x, y, width)).join("");
  return `${svgHead(width, height)}${ratingAxis(y, left, right)}${priceAxis(x, 22, bottom)}${points}</svg>`;
}

function middle(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);
  const high = sorted[half] ?? 0;
  return sorted.length % 2 === 1 ? high : ((sorted[half - 1] ?? 0) + high) / 2;
}

function band(kind: Kind, top: number, x: Scale): string {
  const items = PRICED.filter((item) => item.k === kind);
  const median = middle(items.map((item) => item.y));
  const centre = top + 48;
  const line = at(x, Math.log(median));
  let dots = "";
  items.forEach((item, index) => {
    const jitter = (((index * 0.618) % 1) - 0.5) * 30;
    const tip = esc(`${item.n}: ${money(item.y)}, ${item.d}`);
    dots += `<g data-tip="${tip}"><circle cx="${at(x, Math.log(item.y)).toFixed(1)}" cy="${(centre + jitter).toFixed(1)}" r="9" fill="transparent"></circle><circle cx="${at(x, Math.log(item.y)).toFixed(1)}" cy="${(centre + jitter).toFixed(1)}" r="4" fill="${COLOURS[kind]}" stroke="var(--card)"></circle></g>`;
  });
  const title = text(x.r0, top + 12, "start", `${NAMES[kind]}: ${items.length} places, median ${money(median)}`, "var(--ink)");
  return `${title}${dots}<line x1="${line.toFixed(1)}" x2="${line.toFixed(1)}" y1="${centre - 22}" y2="${centre + 22}" stroke="var(--ink)" stroke-width="2"></line>`;
}

export function spreadSvg(width: number): string {
  const step = 88;
  const kinds: readonly Kind[] = ["h", "c", "r"];
  const bottom = kinds.length * step;
  const x = logScale(10, width - 10);
  let out = priceAxis(x, 20, bottom);
  kinds.forEach((kind, index) => {
    out += band(kind, index * step, x);
  });
  return `${svgHead(width, bottom + 26)}${out}</svg>`;
}

function mapBounds(): { west: number; east: number; south: number; north: number } {
  const lons = OUTLINE.map((point) => point[0]);
  const lats = OUTLINE.map((point) => point[1]);
  return { west: Math.min(...lons), east: Math.max(...lons), south: Math.min(...lats), north: Math.max(...lats) };
}

function projector(width: number): { height: number; project: (lon: number, lat: number) => readonly [number, number] } {
  const box = mapBounds();
  const pad = 12;
  const unit = (width - 2 * pad) / ((box.east - box.west) * LATITUDE);
  const height = Math.ceil((box.north - box.south) * unit + 2 * pad);
  return { height, project: (lon, lat) => [pad + (lon - box.west) * LATITUDE * unit, height - pad - (lat - box.south) * unit] };
}

export function mapDots(width: number, kind: string): Dot[] {
  const { project } = projector(width);
  const dots: Dot[] = [];
  for (const place of PLACES) {
    if (kind !== "all" && place.k !== kind) continue;
    const [x, y] = project(place.lon, place.lat);
    dots.push({ x, y, place });
  }
  return dots;
}

function centreName(name: string): string {
  if (name.includes("Round Market")) return "Round Market";
  if (name.includes("Our Tampines Hub")) return "Our Tampines Hub";
  return "Tampines North, being built";
}

function centreMarks(width: number): string {
  const { project } = projector(width);
  let out = "";
  for (const centre of CENTRES) {
    const [x, y] = project(centre.lon, centre.lat);
    const built = centre.st.startsWith("Existing");
    const anchor = x > width * 0.6 ? "end" : "start";
    const gap = anchor === "end" ? -13 : 13;
    out += `<rect x="${(x - 6).toFixed(1)}" y="${(y - 6).toFixed(1)}" width="12" height="12" transform="rotate(45 ${x.toFixed(1)} ${y.toFixed(1)})" fill="${built ? "var(--ink)" : "var(--card)"}" stroke="var(--ink)" stroke-width="1.5"></rect><text class="food-halo" x="${(x + gap).toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}" style="fill:var(--ink)">${centreName(centre.n)}</text>`;
  }
  return out;
}

export function mapSvg(width: number, kind: string, chosen: string): string {
  const { height, project } = projector(width);
  const points = OUTLINE.map((point) => {
    const [x, y] = project(point[0], point[1]);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  let dots = "";
  let ring = "";
  for (const dot of mapDots(width, kind)) {
    dots += `<circle cx="${dot.x.toFixed(1)}" cy="${dot.y.toFixed(1)}" r="4" fill="${COLOURS[dot.place.k]}" stroke="var(--card)"></circle>`;
    if (dot.place.id === chosen) ring = `<circle cx="${dot.x.toFixed(1)}" cy="${dot.y.toFixed(1)}" r="9" fill="none" stroke="var(--ink)" stroke-width="2"></circle>`;
  }
  return `${svgHead(width, height)}<polygon points="${points}" fill="var(--chip)" stroke="var(--underline)"></polygon>${dots}${centreMarks(width)}${ring}</svg>`;
}

function countOf(kind: Kind): number {
  return PLACES.filter((place) => place.k === kind).length;
}

function mapOption(kind: Kind, label: string): readonly [string, string] {
  return [kind, `${swatch(kind)}${label} ${countOf(kind)}`];
}

export const MAP_HINT = "Tap a dot to name the place.";

function mapFigure(width: number): string {
  const options = [["all", `All ${PLACES.length}`], mapOption("h", "Food courts"), mapOption("r", "Restaurants"), mapOption("c", "Cafes"), mapOption("f", "Fast food")] as const;
  return `${buttons("Show", options)}${mapSvg(width, "all", "")}<p class="food-pick" aria-live="polite" data-pick>${MAP_HINT}</p>`;
}

export function pickHtml(place: Place): string {
  const parts = [NAMES[place.k], place.c, place.a].filter((part) => part !== "");
  return `<strong>${esc(place.n)}</strong> · ${esc(parts.join(" · "))} · <a href="${mapsUrl(place.n, place.a === "" ? "Tampines" : place.a)}" target="_blank" rel="noopener">Open in Maps</a>`;
}

function cuisineFigure(): string {
  const counts = new Map<string, number>();
  for (const place of PLACES) if (place.c !== "") counts.set(place.c, (counts.get(place.c) ?? 0) + 1);
  const ranked = [...counts].sort((a, b) => b[1] - a[1]).slice(0, 10);
  const top = ranked[0]?.[1] ?? 1;
  const rows = ranked.map(([name, count]) => `<li class="food-count"><span>${esc(name)}</span><span class="food-track"><span style="width:${((count / top) * 100).toFixed(1)}%;background:var(--series-1)"></span></span><span>${count}</span></li>`);
  return `<ol class="food-rows">${rows.join("")}</ol>`;
}

interface Entry {
  name: string;
  kind: Kind;
  detail: string;
  place: string;
  price: number;
  item?: Priced;
}

function fromPriced(item: Priced): Entry {
  return { name: item.n, kind: item.k, detail: item.d, place: item.p, price: item.y, item };
}

function fromPlace(place: Place): Entry {
  return { name: place.n, kind: place.k, detail: place.c, place: place.a === "" ? "Tampines" : place.a, price: 0 };
}

const ENTRIES: readonly Entry[] = [...PRICED.map(fromPriced), ...EXTRA.map(fromPlace)];

function matches(entry: Entry, filter: Filter, words: string): boolean {
  if (filter.kind !== "all" && entry.kind !== filter.kind) return false;
  if (filter.budget > 0 && (entry.price === 0 || entry.price > filter.budget)) return false;
  return words === "" || `${entry.name} ${entry.detail} ${entry.place}`.toLowerCase().includes(words);
}

function findRow(entry: Entry): string {
  const parts = [NAMES[entry.kind], entry.detail, entry.place].filter((part) => part !== "").map(esc);
  const item = entry.item;
  const score = item && item.r > 0 ? `<span class="food-sub">${item.r.toFixed(1)} ${item.g === 1 ? "Google" : "Halal Boleh"}</span>` : "";
  const price = entry.price > 0 ? `<span class="food-price">${money(entry.price)}</span>` : `<span class="food-sub">No price</span>`;
  return `<li><a class="food-row press" href="${mapsUrl(entry.name, entry.place)}" target="_blank" rel="noopener"><span class="food-body"><span class="food-name">${esc(entry.name)}</span>${item ? bibTag(item) : ""}<span class="food-sub">${parts.join(" · ")}</span></span><span class="food-end">${price}${score}</span></a></li>`;
}

export function findRows(filter: Filter, shown: number): { html: string; total: number } {
  const words = filter.words.trim().toLowerCase();
  const found = ENTRIES.filter((entry) => matches(entry, filter, words));
  if (filter.budget > 0) found.sort((a, b) => a.price - b.price);
  return { html: found.slice(0, shown).map(findRow).join(""), total: found.length };
}

export function countLine(shown: number, total: number): string {
  if (total === 0) return "Nothing matches. Try fewer words or a wider budget.";
  return `Showing ${Math.min(shown, total)} of ${total}.`;
}

function findFigure(id: string): string {
  const kinds = buttons("Type", [["all", "All"], ["h", "Hawker"], ["r", "Restaurant"], ["c", "Cafe"], ["f", "Fast food"]]);
  const budget = buttons("Budget", [["0", "Any price"], ["5", "Up to S$5"], ["10", "Up to S$10"], ["20", "Up to S$20"]]);
  const first = findRows({ words: "", kind: "all", budget: 0 }, PAGE);
  const box = `<label class="food-label" for="${id}-q">Find a place or dish</label><input id="${id}-q" class="food-search" type="search" enterkeyhint="search" autocomplete="off" autocorrect="off" data-q>`;
  return `${box}${kinds}${budget}<p class="food-pick" aria-live="polite" data-count>${countLine(PAGE, first.total)}</p><ol class="food-rows" data-rows>${first.html}</ol><div class="controls"><button class="button" type="button" data-more>Show more</button></div>`;
}

export function foodFigure(view: string, id: string, width: number): string {
  if (view === "best") return bestFigure();
  if (view === "scatter") return `${legend(["h", "r", "c"])}${scatterSvg(width)}`;
  if (view === "spread") return spreadSvg(width);
  if (view === "map") return mapFigure(width);
  if (view === "cuisine") return cuisineFigure();
  if (view === "find") return findFigure(id);
  throw new Error(`unknown food view "${view}"`);
}

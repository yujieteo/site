import { BOUNDARY, CENTRES, EXTRAS, MALLS, PARKS, RAIL, ROADS, SPREADS, STATIONS, type Kind, type Mapped, type Rating, type Spread } from "./food-data.ts";
import { at, scale, svgHead, textWidth, type Scale } from "./scale.ts";

export type Sort = "cuisine" | "rating" | "cost";

export interface ListState {
  sort: Sort;
  group: string;
  cuisine: string;
  shown: number;
}

export interface FindState {
  words: string;
  kind: string;
  budget: number;
  cuisine: string;
  shown: number;
}

interface MapPoint {
  name: string;
  kind: Kind;
  lon: number;
  lat: number;
  detail: string;
  price: number;
}

export interface Marker {
  x: number;
  y: number;
  points: MapPoint[];
  area: string;
}

const NAMES: Record<Kind, string> = { h: "Hawker or coffee shop", r: "Restaurant", c: "Cafe", f: "Fast food" };
const COLOURS: Record<Kind, string> = { h: "var(--series-1)", r: "var(--series-2)", c: "var(--series-3)", f: "var(--series-4)" };
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TRACK_TOP = 60;
const PRICE_TICKS = [2, 5, 10, 20, 40];
const LATITUDE = Math.cos((1.354 * Math.PI) / 180);
const MENU_LIMIT = 14;
const JOIN_PX = 24;
export const PAGE = 30;
export const MAP_HINT = "Tap an area to zoom in.";
export const ZOOM_HINT = "Tap a dot or a number to see what is there.";
const PICK_LIMIT = 40;
const TALL = 1.15;
const EDGE = 14;

type Box = readonly [number, number, number, number];
const WHOLE: Box = [103.9255, 1.3345, 103.9665, 1.3775];
const AREAS: Record<string, readonly [string, number, number]> = {
  central: ["Central", 103.942, 1.3535],
  south: ["South", 103.947, 1.3455],
  west: ["West", 103.932, 1.3485],
  east: ["East", 103.9555, 1.3555],
  north: ["North", 103.9365, 1.3685],
};

function esc(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function money(value: number): string {
  return `S$${value.toFixed(2)}`;
}

function monthOf(stamp: string): string {
  if (stamp === "") return "undated";
  const [year, month] = stamp.split("-");
  return month === undefined ? (year ?? "") : `${MONTHS[Number(month) - 1] ?? ""} ${year ?? ""}`;
}

function mapsUrl(name: string, place: string): string {
  return `https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(`${name} ${place} Singapore`)}`;
}

function swatch(kind: Kind): string {
  return `<i class="food-dot" style="background:${COLOURS[kind]}"></i>`;
}

function rating(item: Spread): Rating | null {
  return item.g ?? item.o;
}

function tier(item: Spread): number {
  return item.g ? 0 : item.o ? 1 : 2;
}

function byRating(a: Spread, b: Spread): number {
  return tier(a) - tier(b) || (rating(b)?.s ?? 0) - (rating(a)?.s ?? 0) || (rating(b)?.c ?? 0) - (rating(a)?.c ?? 0) || a.n.localeCompare(b.n);
}

function cost(item: Spread): number {
  return item.typ > 0 ? item.typ : item.high > 0 ? item.high : Number.MAX_VALUE;
}

function groupOf(item: Spread): string {
  return item.sh === 1 ? "shared" : item.f === "s" ? "snack" : item.f === "d" ? "drink" : "meal";
}

function ratingLine(item: Spread): string {
  const best = rating(item);
  if (!best) return "No rating found";
  const count = best.c > 0 ? ` · ${best.c.toLocaleString("en-SG")}${best.c === 4000 ? "+" : ""} reviews` : "";
  return `${best.p} · ${monthOf(best.d)}${count}`;
}

function logPosition(value: number): number {
  return Math.min(100, Math.max(0, (Math.log(value) / Math.log(TRACK_TOP)) * 100));
}

function rangeTrack(item: Spread): string {
  if (item.low <= 0) return "";
  const left = logPosition(item.low);
  const width = Math.max(1, logPosition(item.high) - left);
  const tick = item.typ > 0 ? `<i class="food-tick" style="left:${logPosition(item.typ).toFixed(1)}%"></i>` : "";
  return `<span class="food-track"><span class="food-range" style="left:${left.toFixed(1)}%;width:${width.toFixed(1)}%;background:${COLOURS[item.k]}"></span>${tick}</span>`;
}

function priceBlock(item: Spread): string {
  const unit = item.sh === 1 ? "per dish" : item.f === "s" ? "typical item" : item.f === "d" ? "typical drink" : "typical main";
  if (item.typ > 0) return `<span class="food-price">${money(item.typ)}</span><span class="food-sub">${unit}</span>`;
  if (item.low > 0) return `<span class="food-price food-thin">${item.low === item.high ? money(item.low) : `${money(item.low)}–${item.high.toFixed(2)}`}</span><span class="food-sub">too few dishes</span>`;
  return `<span class="food-sub">No verified price</span>`;
}

function menuList(item: Spread): string {
  const rows = item.items.slice(0, MENU_LIMIT).map(([dish, price, date, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(dish)}</a><span>${money(price)}</span><small>${monthOf(date)}</small></li>`);
  const more = item.items.length > MENU_LIMIT ? `<p class="food-sub">And ${item.items.length - MENU_LIMIT} more dishes.</p>` : "";
  const other = (item.other ?? []).map(([dish, price, date, url, kind]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(dish)} (${esc(kind)})</a><span>${money(price)}</span><small>${monthOf(date)}</small></li>`);
  const compared = rows.length > 0 ? `<ul class="food-menu">${rows.join("")}</ul>${more}` : `<p class="food-sub">I found no comparable dated price from 2023 or later.</p>`;
  return compared + (other.length ? `<p class="food-sub">Other items, not included in this comparison</p><ul class="food-menu">${other.join("")}</ul>` : "");
}

function statusNote(item: Spread): string {
  return item.st === "unknown" ? `<p class="food-sub">I could not confirm this place is still open.</p>` : item.st === "moved" ? `<p class="food-sub">This place has moved. Check the address.</p>` : "";
}

function row(item: Spread): string {
  const best = rating(item);
  const score = best ? best.s.toFixed(1) : "–";
  const where = [item.cu, `${item.p}${item.u === "" ? "" : ` ${item.u}`}`].filter((part) => part !== "").map(esc).join(" · ");
  const bib = item.b === 1 ? `<span class="food-tag">Bib Gourmand</span>` : "";
  const range = item.low > 0 && item.typ > 0 ? ` · ${money(item.low)} to ${money(item.high)}` : "";
  return `<li><details class="food-item"><summary class="food-row food-best press"><span class="food-score${item.g ? "" : " food-other"}">${score}</span><span class="food-body"><span class="food-name">${esc(item.n)}</span>${bib}<span class="food-sub">${where}</span><span class="food-sub">${esc(ratingLine(item))}${range}</span></span><span class="food-end">${priceBlock(item)}</span>${rangeTrack(item)}</summary><div class="food-open">${statusNote(item)}${menuList(item)}<a class="button press" href="${mapsUrl(item.n, item.p)}" target="_blank" rel="noopener">Open in Maps</a></div></details></li>`;
}

function header(text: string): string {
  return `<li class="food-group">${esc(text)}</li>`;
}

function ranked(state: Pick<ListState, "sort" | "group" | "cuisine">): Spread[] {
  const items = SPREADS.filter((item) => groupOf(item) === state.group && (state.cuisine === "all" || item.cu === state.cuisine) && (item.typ > 0 || item.low > 0 || rating(item) !== null));
  if (state.sort === "cost") return items.sort((a, b) => cost(a) - cost(b) || byRating(a, b));
  if (state.sort === "rating") return items.sort(byRating);
  return items.sort((a, b) => a.cu.localeCompare(b.cu) || byRating(a, b));
}

function headingFor(item: Spread, sort: Sort): string {
  if (sort === "cuisine") return item.cu;
  if (sort === "rating") return tier(item) === 0 ? "Google ratings" : tier(item) === 1 ? "Other platforms, not comparable with Google" : "No rating found";
  return "";
}

export function listRows(state: ListState): { html: string; total: number } {
  const items = ranked(state);
  let html = "";
  let last = "";
  for (const item of items.slice(0, state.shown)) {
    const heading = headingFor(item, state.sort);
    if (heading !== "" && heading !== last) html += header(heading);
    last = heading;
    html += row(item);
  }
  return { html, total: items.length };
}

function buttons(group: string, name: string, options: readonly (readonly [string, string])[]): string {
  const items = options.map(([value, label], index) => `<button class="button" type="button" data-value="${value}" data-active="${index === 0}" aria-pressed="${index === 0}">${label}</button>`);
  return `<div class="food-tools" role="group" aria-label="${group}" data-group="${name}">${items.join("")}</div>`;
}

function cuisines(): string[] {
  const all = new Set<string>();
  for (const item of SPREADS) if (item.cu !== "") all.add(item.cu);
  for (const item of EXTRAS) if (item.cu !== "") all.add(item.cu);
  return [...all].sort((a, b) => a.localeCompare(b));
}

function cuisineSelect(id: string): string {
  return `<div class="food-select"><label for="${id}-c">Cuisine</label><select id="${id}-c" data-cuisine><option value="all">All cuisines</option>${cuisines().map((name) => `<option>${esc(name)}</option>`).join("")}</select></div>`;
}

export function countLine(shown: number, total: number): string {
  if (total === 0) return "Nothing matches. Try another cuisine or a wider filter.";
  return `Showing ${Math.min(shown, total)} of ${total}.`;
}

function legend(kinds: readonly Kind[]): string {
  return `<p class="food-key">${kinds.map((kind) => `<span>${swatch(kind)}${NAMES[kind]}</span>`).join("")}</p>`;
}

function listFigure(id: string): string {
  const state: ListState = { sort: "cuisine", group: "meal", cuisine: "all", shown: PAGE };
  const first = listRows(state);
  const sort = select(id, "Sort by", "sort", [["cuisine", "Cuisine, rating"], ["rating", "Rating"], ["cost", "Typical cost"]]);
  const group = select(id, "Show", "group", [["meal", "Meals"], ["snack", "Snacks"], ["drink", "Drinks"], ["shared", "Shared dishes"]]);
  return `<div class="food-pair">${sort}${group}</div>${cuisineSelect(id)}${legend(["h", "r", "c"])}<p class="food-pick" aria-live="polite" data-count>${countLine(PAGE, first.total)}</p><ol class="food-rows" data-rows>${first.html}</ol><div class="controls"><button class="button" type="button" data-more>Show more</button></div>`;
}

function text(x: number, y: number, anchor: string, body: string, ink = "var(--muted)"): string {
  return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" style="fill:${ink}">${esc(body)}</text>`;
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);
  const high = sorted[half] ?? 0;
  return sorted.length % 2 === 1 ? high : ((sorted[half - 1] ?? 0) + high) / 2;
}

function perPerson(item: Spread): boolean {
  return item.typ > 0 && item.sh === 0;
}

function priceScale(left: number, right: number): Scale {
  return scale(Math.log(1.5), Math.log(50), left, right);
}

function priceAxis(x: Scale, top: number, bottom: number): string {
  let out = "";
  for (const tick of PRICE_TICKS) {
    const left = at(x, Math.log(tick));
    out += `<line x1="${left.toFixed(1)}" x2="${left.toFixed(1)}" y1="${top}" y2="${bottom}" stroke="var(--line)"></line>${text(left, bottom + 18, "middle", `S$${tick}`)}`;
  }
  return out;
}

function band(title: string, items: Spread[], top: number, x: Scale): string {
  const middle = median(items.map((item) => item.typ));
  const centre = top + 48;
  const line = at(x, Math.log(middle));
  // Every tap area lies under every dot. A tap on a dot then gives that dot, and not a neighbour whose wider tap area covers it.
  // The median line takes no taps, so a dot under it still answers.
  let areas = "";
  let dots = "";
  items.forEach((item, index) => {
    const jitter = (((index * 0.618) % 1) - 0.5) * 30;
    const left = at(x, Math.log(item.typ)).toFixed(1);
    const y = (centre + jitter).toFixed(1);
    const tip = esc(`${item.n}: typical ${money(item.typ)}, ${money(item.low)} to ${money(item.high)}`);
    areas += `<circle cx="${left}" cy="${y}" r="9" fill="transparent" data-tip="${tip}"></circle>`;
    dots += `<circle cx="${left}" cy="${y}" r="4" fill="${COLOURS[item.k]}" stroke="var(--card)" data-tip="${tip}"></circle>`;
  });
  const label = text(x.r0, top + 12, "start", `${title}: ${items.length} places, median ${money(middle)}`, "var(--ink)");
  return `${label}${areas}${dots}<line x1="${line.toFixed(1)}" x2="${line.toFixed(1)}" y1="${centre - 22}" y2="${centre + 22}" stroke="var(--ink)" stroke-width="2" pointer-events="none"></line>`;
}

export function spreadSvg(width: number): string {
  const step = 88;
  const meals = SPREADS.filter((item) => perPerson(item) && item.f === "m");
  const bands: readonly (readonly [string, Spread[]])[] = [
    ["Hawker meals", meals.filter((item) => item.k === "h")],
    ["Restaurant meals", meals.filter((item) => item.k === "r")],
    ["Cafe meals", meals.filter((item) => item.k === "c")],
    ["Snacks and desserts", SPREADS.filter((item) => perPerson(item) && item.f === "s")],
  ];
  const bottom = bands.length * step;
  const x = priceScale(10, width - 10);
  let out = priceAxis(x, 20, bottom);
  bands.forEach(([title, items], index) => {
    out += band(title, items, index * step, x);
  });
  return `${svgHead(width, bottom + 26)}${out}</svg>`;
}

function cuisineFigure(): string {
  const groups = new Map<string, Spread[]>();
  for (const item of SPREADS) {
    if (!perPerson(item) || item.f !== "m") continue;
    groups.set(item.cu, [...(groups.get(item.cu) ?? []), item]);
  }
  const rows = [...groups].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).map(([name, items]) => {
    const values = items.map((item) => item.typ);
    const top = [...items].sort(byRating)[0];
    const best = top ? rating(top) : null;
    const lead = top && best ? `Best rated: ${esc(top.n)}, ${best.s.toFixed(1)} on ${esc(best.p)}` : "No rated place with a comparable price";
    const left = logPosition(Math.min(...values));
    const span = Math.max(1, logPosition(Math.max(...values)) - left);
    return `<li class="food-count"><span class="food-name">${esc(name)}</span><span class="food-price">${money(median(values))}</span><span class="food-track"><span class="food-range" style="left:${left.toFixed(1)}%;width:${span.toFixed(1)}%;background:var(--series-1)"></span><i class="food-tick" style="left:${logPosition(median(values)).toFixed(1)}%"></i></span><span class="food-sub food-wide">${items.length} ${items.length === 1 ? "place" : "places"} · ${lead}</span></li>`;
  });
  return `<ol class="food-rows">${rows.join("")}</ol>`;
}

function allPoints(): MapPoint[] {
  const points: MapPoint[] = [];
  for (const item of SPREADS) {
    if (item.lat === 0) continue;
    const price = item.typ > 0 ? ` · ${item.sh === 1 ? "per dish" : "typical"} ${money(item.typ)}` : "";
    points.push({ name: item.n, kind: item.k, lon: item.lon, lat: item.lat, detail: `${item.cu}${price}`, price: item.typ });
  }
  for (const item of EXTRAS) {
    const old = item.y > 0 && item.y < 2022 ? ` · last edited ${item.y}` : "";
    points.push({ name: item.n, kind: item.k, lon: item.lon, lat: item.lat, detail: `${[item.cu, item.a].filter((part) => part !== "").join(" · ")}${old}`, price: 0 });
  }
  return points;
}

const POINTS = allPoints();

function nearestArea(point: MapPoint): string {
  let best = "central";
  let far = Number.MAX_VALUE;
  for (const [key, value] of Object.entries(AREAS)) {
    const distance = ((value[1] - point.lon) * LATITUDE) ** 2 + (value[2] - point.lat) ** 2;
    if (distance < far) {
      far = distance;
      best = key;
    }
  }
  return best;
}

const AREA_OF = new Map<MapPoint, string>(POINTS.map((point) => [point, nearestArea(point)]));

function boxOf(area: string): Box {
  if (area === "all") return WHOLE;
  const members = POINTS.filter((point) => AREA_OF.get(point) === area);
  const pad = 0.0012;
  let west = Math.min(...members.map((point) => point.lon)) - pad;
  let east = Math.max(...members.map((point) => point.lon)) + pad;
  let south = Math.min(...members.map((point) => point.lat)) - pad;
  let north = Math.max(...members.map((point) => point.lat)) + pad;
  const wide = (east - west) * LATITUDE;
  const tall = north - south;
  if (tall < wide * TALL) {
    const grow = (wide * TALL - tall) / 2;
    south -= grow;
    north += grow;
  } else {
    const grow = (tall / TALL - wide) / 2 / LATITUDE;
    west -= grow;
    east += grow;
  }
  return [west, south, east, north];
}

function projector(width: number, area: string): { height: number; project: (lon: number, lat: number) => readonly [number, number] } {
  const [west, south, east, north] = boxOf(area);
  const unit = width / ((east - west) * LATITUDE);
  const height = Math.ceil((north - south) * unit);
  return { height, project: (lon, lat) => [(lon - west) * LATITUDE * unit, height - (lat - south) * unit] };
}

function areaPins(width: number, kind: string): Marker[] {
  const { project } = projector(width, "all");
  const pins: Marker[] = [];
  for (const [key] of Object.entries(AREAS)) {
    const points = POINTS.filter((point) => AREA_OF.get(point) === key && (kind === "all" || point.kind === kind));
    if (points.length === 0) continue;
    const lon = points.reduce((sum, point) => sum + point.lon, 0) / points.length;
    const lat = points.reduce((sum, point) => sum + point.lat, 0) / points.length;
    const [x, y] = project(lon, lat);
    pins.push({ x, y, points, area: key });
  }
  return pins;
}

export function markers(width: number, area: string, kind: string): Marker[] {
  if (area === "all") return areaPins(width, kind);
  const { height, project } = projector(width, area);
  const found: Marker[] = [];
  for (const point of POINTS) {
    if (kind !== "all" && point.kind !== kind) continue;
    const [x, y] = project(point.lon, point.lat);
    if (x < EDGE || y < EDGE || x > width - EDGE || y > height - EDGE) continue;
    const near = found.find((marker) => (marker.x - x) ** 2 + (marker.y - y) ** 2 < JOIN_PX * JOIN_PX);
    if (near) {
      near.x = (near.x * near.points.length + x) / (near.points.length + 1);
      near.y = (near.y * near.points.length + y) / (near.points.length + 1);
      near.points.push(point);
    } else found.push({ x, y, points: [point], area: "" });
  }
  return found;
}

function linePath(line: readonly (readonly [number, number])[], project: (lon: number, lat: number) => readonly [number, number]): string {
  let path = "";
  line.forEach((point, index) => {
    const [x, y] = project(point[0], point[1]);
    path += `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  });
  return path;
}

function layer(lines: readonly (readonly (readonly [number, number])[])[], project: (lon: number, lat: number) => readonly [number, number]): string {
  return lines.map((line) => linePath(line, project)).join("");
}

function baseMap(width: number, height: number, area: string, project: (lon: number, lat: number) => readonly [number, number]): string {
  const zoomed = area !== "all";
  const widths = zoomed ? [5, 3.5, 2.5, 1.5] : [3, 1.75, 1, 0];
  let roads = "";
  ROADS.forEach((lines, rank) => {
    if ((widths[rank] ?? 0) === 0) return;
    roads += `<path d="${layer(lines, project)}" fill="none" stroke="var(--gray7)" stroke-width="${widths[rank] ?? 1}" stroke-linecap="round" stroke-linejoin="round"></path>`;
  });
  const parks = `<path d="${layer(PARKS, project)}Z" fill="var(--gray3)"></path>`;
  const rail = `<path d="${layer(RAIL, project)}" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 3"></path>`;
  const edge = `<path d="${linePath(BOUNDARY, project)}Z" fill="none" stroke="var(--underline-hover)" stroke-width="1" stroke-dasharray="3 3"></path>`;
  return `<clipPath id="food-clip"><rect width="${width}" height="${height}"></rect></clipPath><g clip-path="url(#food-clip)"><rect width="${width}" height="${height}" fill="var(--chip)"></rect>${parks}${roads}${rail}${edge}</g>`;
}

interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

function overlaps(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
}

function placeLabel(name: string, x: number, y: number, blocked: Rect[], width: number, height: number): string {
  const w = textWidth(name) + 6;
  const h = 14;
  const spots: readonly (readonly [number, number])[] = [[x + 10, y - 7], [x - 10 - w, y - 7], [x - w / 2, y - 24], [x - w / 2, y + 10], [x + 10, y - 22], [x - 10 - w, y + 8], [x - w / 2, y - 40], [x - w / 2, y + 26], [x + 22, y - 7], [x - 22 - w, y - 7]];
  for (const [left, top] of spots) {
    const box = { x: left, y: top, w, h };
    if (left < 2 || top < 2 || left + w > width - 2 || top + h > height - 2 || blocked.some((other) => overlaps(box, other))) continue;
    blocked.push(box);
    return `<text class="food-halo" x="${(left + 3).toFixed(1)}" y="${(top + 11).toFixed(1)}">${esc(name)}</text>`;
  }
  return "";
}

function landmarks(area: string, project: (lon: number, lat: number) => readonly [number, number], width: number, height: number, list: Marker[]): string {
  let out = "";
  const blocked: Rect[] = list.map((marker) => {
    const radius = marker.area !== "" ? 30 : marker.points.length > 1 ? 13 : 6;
    return { x: marker.x - radius, y: marker.y - radius, w: radius * 2, h: radius * 2 };
  });
  for (const [name, lon, lat] of STATIONS) {
    const [x, y] = project(lon, lat);
    if (x < 6 || y < 6 || x > width - 6 || y > height - 6) continue;
    out += `<rect x="${(x - 5).toFixed(1)}" y="${(y - 5).toFixed(1)}" width="10" height="10" rx="2" fill="var(--card)" stroke="var(--ink)" stroke-width="1.5"></rect>`;
    blocked.push({ x: x - 6, y: y - 6, w: 12, h: 12 });
    if (area !== "all") out += placeLabel(`${name} MRT`, x, y, blocked, width, height);
  }
  if (area === "all") return out;
  for (const centre of CENTRES) {
    const [x, y] = project(centre.lon, centre.lat);
    const label = centre.st.startsWith("Existing") ? (centre.n.includes("Round") ? "Round Market" : "Our Tampines Hub") : "Tampines North Hawker Centre (planned)";
    out += placeLabel(label, x, y, blocked, width, height);
  }
  for (const [name, lon, lat] of MALLS) {
    const [x, y] = project(lon, lat);
    out += placeLabel(name, x, y, blocked, width, height);
  }
  return out;
}

function markerMark(marker: Marker, index: number): string {
  const x = marker.x.toFixed(1);
  const y = marker.y.toFixed(1);
  const count = marker.points.length;
  const first = marker.points[0];
  if (marker.area !== "") {
    const name = AREAS[marker.area]?.[0] ?? "";
    return `<g data-i="${index}" role="button" tabindex="0" aria-label="Zoom to ${esc(name)}, ${count} places"><circle cx="${x}" cy="${y}" r="24" fill="var(--ink)" stroke="var(--card)" stroke-width="2"></circle><text x="${x}" y="${(marker.y + 5).toFixed(1)}" text-anchor="middle" style="fill:var(--card);font-weight:600;font-size:15px">${count}</text><text class="food-halo" x="${x}" y="${(marker.y + 40).toFixed(1)}" text-anchor="middle">${esc(name)}</text></g>`;
  }
  const label = count === 1 && first ? first.name : `${count} places`;
  const radius = count === 1 ? 5 : Math.min(13, 8 + Math.log2(count));
  const ring = `<circle class="food-ring" cx="${x}" cy="${y}" r="${(radius + 4).toFixed(1)}" fill="none" stroke="var(--ink)" stroke-width="2"></circle>`;
  if (count === 1 && first) return `<g data-i="${index}" role="button" tabindex="0" aria-label="${esc(label)}"><circle cx="${x}" cy="${y}" r="${radius}" fill="${COLOURS[first.kind]}" stroke="var(--card)" stroke-width="1.5"></circle>${ring}</g>`;
  return `<g data-i="${index}" role="button" tabindex="0" aria-label="${esc(label)}"><circle cx="${x}" cy="${y}" r="${radius.toFixed(1)}" fill="var(--ink)" stroke="var(--card)" stroke-width="1.5"></circle><text x="${x}" y="${(marker.y + 4).toFixed(1)}" text-anchor="middle" style="fill:var(--card);font-weight:600">${count}</text>${ring}</g>`;
}

export function mapSvg(width: number, area: string, kind: string, full: boolean): string {
  const { height, project } = projector(width, area);
  if (!full) return `${svgHead(width, height)}<rect width="${width}" height="${height}" fill="var(--chip)"></rect></svg>`;
  const list = markers(width, area, kind);
  const marks = list.map(markerMark).join("");
  return `${svgHead(width, height)}${baseMap(width, height, area, project)}${landmarks(area, project, width, height, list)}${marks}</svg>`.replace('role="img"', 'role="group"');
}

export function pickHtml(marker: Marker): string {
  const sorted = [...marker.points].sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));
  const rows = sorted.slice(0, PICK_LIMIT).map((point) => `<li>${swatch(point.kind)}<a href="${mapsUrl(point.name, "Tampines")}" target="_blank" rel="noopener">${esc(point.name)}</a><span class="food-sub">${esc(point.detail)}</span></li>`);
  const more = sorted.length > PICK_LIMIT ? `<p class="food-sub">And ${sorted.length - PICK_LIMIT} more. Use the search below to find them.</p>` : "";
  return `<strong>${sorted.length} ${sorted.length === 1 ? "place" : "places"} here</strong><ul class="food-picks">${rows.join("")}</ul>${more}`;
}

function select(id: string, label: string, name: string, options: readonly (readonly [string, string])[]): string {
  return `<div class="food-select"><label for="${id}-${name}">${label}</label><select id="${id}-${name}" data-${name}>${options.map(([value, text_]) => `<option value="${value}">${esc(text_)}</option>`).join("")}</select></div>`;
}

function mapFigure(id: string, width: number): string {
  const areas = [["all", "All areas"], ...Object.entries(AREAS).map(([key, value]) => [key, value[0]] as const)] as const;
  const short: Record<Kind, string> = { h: "Hawker", r: "Restaurant", c: "Cafe", f: "Fast food" };
  const kinds = [["all", "All types"], ...(["h", "r", "c", "f"] as const).map((kind) => [kind, `${short[kind]} (${POINTS.filter((point) => point.kind === kind).length})`] as const)] as const;
  return `<div class="food-pair">${select(id, "Area", "area", areas)}${select(id, "Type", "type", kinds)}</div><div class="food-mapbar"><button class="button" type="button" data-back hidden>Back to all areas</button></div>${mapSvg(width, "all", "all", false)}<p class="food-key food-map-key"><span>${swatch("h")}Hawker</span><span>${swatch("r")}Restaurant</span><span>${swatch("c")}Cafe</span><span>${swatch("f")}Fast food</span><span><i class="food-dot" style="background:var(--ink)"></i>Several places</span><span><i class="food-square"></i>MRT</span></p><div class="food-pick" aria-live="polite" data-pick>${MAP_HINT}</div>`;
}

function extraRow(item: Mapped): string {
  const old = item.y > 0 && item.y < 2022 ? ` · map entry last edited ${item.y}` : "";
  const parts = [NAMES[item.k], item.cu, item.a === "" ? "Tampines" : item.a].filter((part) => part !== "").map(esc).join(" · ");
  return `<li><a class="food-row press" href="${mapsUrl(item.n, item.a === "" ? "Tampines" : item.a)}" target="_blank" rel="noopener"><span class="food-body"><span class="food-name">${esc(item.n)}</span><span class="food-sub">${parts}${old}</span></span><span class="food-end"><span class="food-sub">No menu checked</span></span></a></li>`;
}

export function findRows(state: FindState): { html: string; total: number } {
  const words = state.words.trim().toLowerCase();
  const fits = (kind: string, cuisine: string, price: number, haystack: string): boolean => (state.kind === "all" || kind === state.kind) && (state.cuisine === "all" || cuisine === state.cuisine) && (state.budget === 0 || (price > 0 && price <= state.budget)) && (words === "" || haystack.toLowerCase().includes(words));
  const spreads = SPREADS.filter((item) => fits(item.k, item.cu, item.sh === 1 ? 0 : item.typ, `${item.n} ${item.cu} ${item.p} ${[...item.items, ...(item.other ?? [])].map((menu) => menu[0]).join(" ")}`));
  spreads.sort(state.budget > 0 ? (a, b) => a.typ - b.typ : byRating);
  const extras = state.budget > 0 ? [] : EXTRAS.filter((item) => fits(item.k, item.cu, 0, `${item.n} ${item.cu} ${item.a}`));
  const rows = [...spreads.map(row), ...extras.map(extraRow)];
  return { html: rows.slice(0, state.shown).join(""), total: rows.length };
}

function findFigure(id: string): string {
  const kinds = buttons("Type", "kind", [["all", "All"], ["h", "Hawker"], ["r", "Restaurant"], ["c", "Cafe"], ["f", "Fast food"]]);
  const budget = buttons("Budget", "budget", [["0", "Any price"], ["5", "Typical up to S$5"], ["10", "Up to S$10"], ["20", "Up to S$20"]]);
  const first = findRows({ words: "", kind: "all", budget: 0, cuisine: "all", shown: PAGE });
  const box = `<label class="food-label" for="${id}-q">Find a place or dish</label><input id="${id}-q" class="food-search" type="search" enterkeyhint="search" autocomplete="off" autocorrect="off" autocapitalize="off" data-q>`;
  return `${box}${kinds}${budget}${cuisineSelect(id)}<p class="food-pick" aria-live="polite" data-count>${countLine(PAGE, first.total)}</p><ol class="food-rows" data-rows>${first.html}</ol><div class="controls"><button class="button" type="button" data-more>Show more</button></div>`;
}

export function foodFigure(view: string, id: string, width: number): string {
  if (view === "list") return listFigure(id);
  if (view === "spread") return spreadSvg(width);
  if (view === "map") return mapFigure(id, width);
  if (view === "cuisine") return cuisineFigure();
  if (view === "find") return findFigure(id);
  throw new Error(`unknown food view "${view}"`);
}

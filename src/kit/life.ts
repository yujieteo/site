import { LIFE, MONTH_TABLE, STRONGEST, type LifeCategory, type Move, type Official, type Pick, type Series, type Shelf } from "./life-data.ts";
import { LAST_MONTH, PRICES, type PriceItem } from "./price-data.ts";

// The list of every group of goods and services, and the price calendar. A group row shows its best move and
// a strip of dots, one for each official price and its change in a year. Open, it gives what to do, the best
// picks, what to check, the shop prices and the official prices. The markup is short on purpose: 558 shop rows
// go into the page.

const REACH = 15;
const AXIS: readonly number[] = [-15, -10, -5, 0, 5, 10, 15];
const SPARK_WIDTH = 96;
const SPARK_HEIGHT = 36;
const SPARK_GRID = 3;
const SPARK_STEP = 3;
const BASE = 1000;
const SPARK_LOW = 550;
const SPARK_HIGH = 1300;
const BAR_HEIGHT = 28;
const BAR_GAP = 3;
const CELL_REACH = 80;
const CELL_FLOOR = 0.1;
const CELL_DEEP = 0.6;
const SHOPS_SHOWN = 3;
const WIDE_PRICE = 30;
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
// Headings that the post had before it became one list. Links to them still land on the right figure.
const OLD_LIST = ["explore-any-item", "how-to-read-the-tables", "everything-else-in-daily-life"];
const OLD_CALENDAR = ["the-price-calendar"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LETTERS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

interface Buy {
  shelf: Shelf;
  main: string;
  value: number;
  high: number;
  low: string;
  top: string;
  tail: string;
}

interface Group {
  name: string;
  buys: Buy[];
  ranked: boolean;
}

// One official figure of a group, for the dots of its row: an average price or a price index.
interface Change {
  name: string;
  year: string;
}

function esc(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function linked(text: string): string {
  return esc(text).replace(LINK, '<a href="$2">$1 ↗</a>');
}

function seriesAt(name: string): number {
  const found = PRICES.findIndex((item) => item.name === name);
  if (found < 0) throw new Error(`life: no official series is named "${name}"`);
  return found;
}

function seriesItem(name: string): PriceItem {
  const item = PRICES[seriesAt(name)];
  if (!item) throw new Error(`life: no official series is named "${name}"`);
  return item;
}

function percent(text: string): number {
  return Number.parseFloat(text);
}

function signed(value: number): string {
  const text = value.toFixed(1).replace(/^-0\.0$/, "0.0");
  return value > 0 && text !== "0.0" ? `+${text}%` : `${text}%`;
}

function amount(text: string): number {
  return Number(text.replaceAll(",", ""));
}

// "Bills & Housing" reads as "Bills and housing", in the style of the other headings of the post.
function title(name: string): string {
  return name.replaceAll(" & ", " and ").replace(/(?<=\s)[A-Z](?=[a-z])/g, (letter) => letter.toLowerCase());
}

// "Hen Eggs (Per 10)" is the good "Hen Eggs" in the pack "per 10".
function packOf(name: string): { good: string; pack: string } {
  const found = /^(.*) \(([^()]*)\)$/.exec(name);
  return found ? { good: found[1] ?? name, pack: (found[2] ?? "").toLowerCase() } : { good: name, pack: "" };
}

// The figure a row is ranked on: its unit price where the row has one, and its price where it does not.
// The tail is the unit, such as "/pc" or " per month". A plain price has no tail. The low and top figures keep
// the digits of the source, so a summary reads the same as its rows.
function buyOf(shelf: Shelf): Buy {
  const byUnit = /\d/.test(shelf[6]);
  const main = byUnit ? shelf[6] : shelf[4];
  const found = /^(?:(?:about|around|from)\s+)?S\$([\d,]+(?:\.\d+)?)(?:\s+to\s+S\$([\d,]+(?:\.\d+)?))?(.*)$/i.exec(main);
  const low = found?.[1] ?? "";
  const top = found?.[2] ?? low;
  const tail = byUnit ? ((found?.[3] ?? "").split(";")[0] ?? "").replace(/\([^)]*\)/g, "").trimEnd() : "";
  return { shelf, main, value: found ? amount(low) : Number.NaN, high: found ? amount(top) : Number.NaN, low, top, tail };
}

// Rows are ranked only when every row of the item has a figure in the same unit.
function groupsOf(category: LifeCategory): Group[] {
  const groups: Group[] = [];
  for (const shelf of category.shelf) {
    let group = groups.find((g) => g.name === shelf[0]);
    if (!group) {
      group = { name: shelf[0], buys: [], ranked: false };
      groups.push(group);
    }
    group.buys.push(buyOf(shelf));
  }
  for (const group of groups) {
    const tail = (group.buys[0]?.tail ?? "").toLowerCase();
    group.ranked = group.buys.length > 1 && group.buys.every((buy) => Number.isFinite(buy.value) && buy.tail.toLowerCase() === tail);
    if (group.ranked) group.buys.sort((a, b) => a.value - b.value);
  }
  return groups;
}

function chevron(): string {
  return `<i class="life-chev"></i>`;
}

function buyDetail(buy: Buy): string {
  const { shelf } = buy;
  const pack = /^\d+$/.test(shelf[5]);
  const covers = shelf[5] === "1" ? "" : pack ? `${shelf[5]} for ${shelf[4]}` : shelf[5];
  const price = pack || buy.main.startsWith(shelf[4]) ? "" : shelf[4];
  return [shelf[3], covers, price, shelf[7] === 1 ? "listing" : ""].filter((part) => part !== "").map(esc).join(" · ");
}

// A row with the item as its name stands alone. A row inside an opened item starts with the product.
function buyRow(buy: Buy, label: string): string {
  const { shelf } = buy;
  const link = `<a href="${esc(shelf[2])}">${esc(shelf[1])} ↗</a>`;
  const name = label === "" ? `<b>${link}</b>` : `<b>${esc(label)}</b><small>${link}</small>`;
  const wide = buy.main.length > WIDE_PRICE;
  const price = wide ? `<span>${esc(buy.main)}</span>` : `<span class="life-end">${esc(buy.main)}</span>`;
  return `<li class="life-row life-buy${shelf[7] === 1 ? " life-listing" : ""}">${name}${price}<small>${buyDetail(buy)}</small></li>`;
}

function track(group: Group, top: number): string {
  const marks = group.buys.map((buy) => `<i${buy.shelf[7] === 1 ? ' class="life-hollow"' : ""} style="left:${((buy.value / top) * 100).toFixed(1)}%"></i>`);
  return `<span class="life-track">${marks.join("")}</span>`;
}

function shopList(group: Group): string {
  const shops: string[] = [];
  for (const buy of group.buys) if (!shops.includes(buy.shelf[3])) shops.push(buy.shelf[3]);
  const more = shops.length > SHOPS_SHOWN ? ` and ${shops.length - SHOPS_SHOWN} more` : "";
  return `${group.buys.length} prices · ${shops.slice(0, SHOPS_SHOWN).join(", ")}${more}`;
}

function groupRow(group: Group): string {
  const first = group.buys[0];
  if (!first) return "";
  if (group.buys.length === 1) return buyRow(first, group.name);
  const last = group.buys.reduce((best, buy) => (buy.high > best.high ? buy : best), first);
  const top = last.high;
  const spread = group.ranked && top > first.value;
  const end = group.ranked ? `<span class="life-end">S$${first.low}${esc(first.tail)}${spread ? `<small>to S$${last.top}</small>` : ""}</span>` : "";
  const summary = `<summary class="life-row"><b>${esc(group.name)}${chevron()}</b>${end}<small>${esc(shopList(group))}</small>${spread ? track(group, top) : ""}</summary>`;
  return `<li><details class="life-item">${summary}<ol class="life-rows life-nest">${group.buys.map((buy) => buyRow(buy, "")).join("")}</ol></details></li>`;
}

// A move's figure is a tag after its lead, so the text keeps the full width.
function moveRow(move: Move): string {
  const worth = move.worth === "" ? "" : ` <em class="life-tag">${esc(move.worth)}</em>`;
  return `<li class="life-row"><b>${esc(move.lead)}${worth}</b><span>${linked(move.text)}</span></li>`;
}

function pickRow(pick: Pick): string {
  return `<li class="life-row"><b>${esc(pick[0])}</b><span>${esc(pick[1])}</span><small>${linked(pick[2])}</small></li>`;
}

function sparkY(value: number): number {
  const held = Math.max(SPARK_LOW, Math.min(SPARK_HIGH, value));
  return Math.round((SPARK_HEIGHT - 3 - ((held - SPARK_LOW) / (SPARK_HIGH - SPARK_LOW)) * (SPARK_HEIGHT - 6)) * SPARK_GRID);
}

function sparkX(month: number): number {
  return Math.round((3 + (month / LAST_MONTH) * (SPARK_WIDTH - 6)) * SPARK_GRID);
}

// One scale for every small chart of an index, index 55 to 130, so a steep line is a large change. Two series
// leave it and are cut at the edge. The path is in whole steps of a third of a pixel, one point a quarter, to
// keep it short. It closes along the 2024 level, and the fill shades the gap to that level. The dash length is
// the length of the line, so the stroke stops before the closing edges.
function spark(item: PriceItem): string {
  const level = sparkY(BASE);
  let path = "";
  let length = 0;
  let first = 0;
  let x = 0;
  let y = 0;
  for (let k = (item.cents.length - 1) % SPARK_STEP; k < item.cents.length; k += SPARK_STEP) {
    const nextX = sparkX(item.start + k);
    const nextY = sparkY(item.cents[k] ?? 0);
    if (path === "") first = nextX;
    else length += Math.hypot(nextX - x, nextY - y);
    path += path === "" ? `M${nextX} ${nextY}` : `l${nextX - x} ${nextY - y}`;
    x = nextX;
    y = nextY;
  }
  return `<svg class="life-spark" viewBox="0 0 ${SPARK_WIDTH * SPARK_GRID} ${SPARK_HEIGHT * SPARK_GRID}"><path d="${path}V${level}H${first}Z" stroke-dasharray="${Math.floor(length)} 9999"></path><circle cx="${x}" cy="${y}" r="7"></circle></svg>`;
}

function monthAt(text: string): number {
  return MONTHS.findIndex((month) => text.startsWith(month));
}

// Twelve bars, one a month, for a good with a steady month pattern: how far each month sits from the level of
// its year. Like the full chart, each good has its own scale, so the bars give the shape and the text gives
// the size. The cheapest month is blue and the dearest is orange.
function monthBars(item: PriceItem, pattern: string): string {
  const [lowText = "", highText = ""] = pattern.split(", ");
  const low = monthAt(lowText);
  const high = monthAt(highText);
  const middle = BAR_HEIGHT / 2;
  const reach = Math.max(1, ...item.season.map(Math.abs));
  const bars = ["", "", ""];
  for (let month = 0; month < 12; month++) {
    const value = item.season[month] ?? 0;
    const size = Math.max(1, Math.round((Math.abs(value) / reach) * (middle - 1)));
    const kind = month === low ? 1 : month === high ? 2 : 0;
    bars[kind] += `M${1 + month * 8} ${value > 0 ? middle - size : middle}h6v${size}h-6z`;
  }
  return `<svg class="life-months" viewBox="0 0 ${SPARK_WIDTH} ${BAR_HEIGHT}"><path d="${bars[0]}"></path><path class="life-low" d="${bars[1]}"></path><path class="life-high" d="${bars[2]}"></path></svg>`;
}

// A price row opens to its full chart. The script draws the chart when the row first opens.
function priceRow(name: string, visual: string, end: string, sub: string, kind: string): string {
  const summary = `<summary class="life-row life-series${visual === "" ? " life-plain" : ""}"><b>${esc(packOf(name).good)}${chevron()}</b>${visual}${end}<small>${esc(sub)}</small></summary>`;
  return `<li><details class="life-item life-price ${kind}" data-s="${seriesAt(name)}">${summary}<div class="life-chart"><p class="life-note">The chart of this price since 2015 loads here.</p></div></details></li>`;
}

function rangeOf(forecast: string): string {
  return /\((.+)\)/.exec(forecast)?.[1] ?? "";
}

function officialRow(row: Official): string {
  const [name, now, year, , forecast, deal, pattern] = row;
  const steady = pattern.includes(" low");
  const gap = Number(/\((\d+)%\)/.exec(pattern)?.[1] ?? 0);
  const sub = [packOf(name).pack, `${year} in a year`, `forecast ${rangeOf(forecast)}`, steady ? pattern : ""].filter((part) => part !== "").join(" · ");
  const end = `<span class="life-end">${esc(now)}${deal === "" ? "" : `<small>deal at ${esc(deal)}</small>`}</span>`;
  return priceRow(name, steady && gap >= BAR_GAP ? monthBars(seriesItem(name), pattern) : "", end, sub, "life-average");
}

function outlook(series: Series): string {
  const now = Number.parseFloat(series[1]);
  const range = /\(([\d.]+) to ([\d.]+)\)/.exec(series[4]);
  if (!range) return "";
  return `forecast ${signed((Number(range[1]) / now - 1) * 100)} to ${signed((Number(range[2]) / now - 1) * 100)}`;
}

function seriesRow(series: Series): string {
  const since = series[3] === "n/a" ? "began in 2024" : `${series[3]} since 2015`;
  const pattern = series[5].includes(" low") ? series[5] : "";
  const sub = [since, outlook(series), pattern].filter((part) => part !== "").join(" · ");
  const end = `<span class="life-end">${esc(series[2])}<small>in a year</small></span>`;
  return priceRow(series[0], spark(seriesItem(series[0])), end, sub, "life-index");
}

function byRise(a: Series, b: Series): number {
  return percent(b[2]) - percent(a[2]);
}

const SHOP_KEY = `<p class="life-key"><span><i></i>price from the shop's page</span><span><i class="life-hollow"></i>from a search listing</span></p>`;

function part(heading: string, key: string, rows: string, after: string): string {
  return rows === "" ? "" : `<section><h4>${esc(heading)}</h4>${key}<ol class="life-rows">${rows}</ol>${after}</section>`;
}

function changesOf(category: LifeCategory): Change[] {
  const averages = category.official.map((row) => ({ name: packOf(row[0]).good, year: row[2] }));
  return [...averages, ...category.series.map((row) => ({ name: row[0], year: row[2] }))];
}

// The dot of the price that rose most is larger, to tie it to the figure on the right of the row.
function strip(changes: Change[], top: Change): string {
  const marks = changes.map((change) => {
    const real = percent(change.year);
    const held = Math.max(-REACH, Math.min(REACH, real));
    const tone = held > 0 ? "life-up" : held < 0 ? "life-down" : "life-flat";
    const kind = real !== held ? " life-over" : change === top ? " life-top" : "";
    return `<i class="${tone}${kind}" style="left:${(50 + (held / REACH) * 50).toFixed(1)}%"></i>`;
  });
  return `<span class="life-strip">${marks.join("")}</span>`;
}

function lead(category: LifeCategory): string {
  const move = category.moves[0];
  if (move) return move.worth === "" ? move.lead : `${move.lead} · ${move.worth}`;
  return `${category.shelf.length} shop prices`;
}

function categoryRow(category: LifeCategory): string {
  const groups = groupsOf(category);
  const changes = changesOf(category);
  const top = changes.reduce<Change | undefined>((best, change) => (!best || percent(change.year) > percent(best.year) ? change : best), undefined);
  const end = top ? `<span class="life-end">${esc(top.year)}<small>${esc(top.name)}</small></span>` : "";
  const summary = `<summary class="life-row"><b>${esc(title(category.name))}${chevron()}</b>${end}<small>${esc(lead(category))}</small>${top ? strip(changes, top) : ""}</summary>`;
  const notes = category.notes.map((note) => `<p class="life-note">${linked(note)}</p>`).join("");
  const moves = part("What to do", "", category.moves.map(moveRow).join(""), notes);
  const picks = part("Best quality for the price", "", category.picks.map(pickRow).join(""), "");
  const checks = part("What to check on the pack", "", category.checks.map(moveRow).join(""), "");
  const shops = part(`Shop prices · ${category.shelf.length} in ${groups.length} items`, SHOP_KEY, groups.map(groupRow).join(""), "");
  const prices = category.official.map(officialRow).join("") + [...category.series].sort(byRise).map(seriesRow).join("");
  const official = part("Official prices · year to Sep 2026", "", prices, "");
  return `<li><details class="life-cat" id="${category.id}" data-cat="${esc(category.name)}">${summary}<div class="life-open">${moves}${picks}${checks}${shops}${official}</div></details></li>`;
}

function anchors(ids: readonly string[]): string {
  return ids.map((id) => `<span class="life-anchor" id="${id}"></span>`).join("");
}

function total(pick: (category: LifeCategory) => number): number {
  return LIFE.reduce((sum, category) => sum + pick(category), 0);
}

function listFigure(id: string): string {
  let rows = "";
  let area = "";
  for (const category of LIFE) {
    if (category.area !== area) rows += `<li class="life-area">${esc(category.area)}</li>`;
    area = category.area;
    rows += categoryRow(category);
  }
  const find = `<div class="life-find"><label for="${id}-q">Find</label><input id="${id}-q" type="search" data-q placeholder="Type eggs, taxi, sofa" autocomplete="off" enterkeyhint="search"></div>`;
  const counts = `${LIFE.length} groups, ${total((c) => c.moves.length + c.checks.length + c.picks.length)} things to do or check, ${total((c) => c.shelf.length)} shop prices, ${total((c) => c.official.length + c.series.length)} official prices.`;
  const count = `<p class="life-count" data-count aria-live="polite">${counts}</p>`;
  const key = `<p class="life-key"><span><i class="life-up"></i>an official price, up in a year</span><span><i class="life-down"></i>down</span></p>`;
  const labels = AXIS.map((tick) => `<span style="left:${(50 + (tick / REACH) * 50).toFixed(1)}%">${tick > 0 ? "+" : ""}${tick}${Math.abs(tick) === REACH ? "%" : ""}</span>`);
  const axis = `<p class="life-axis" aria-hidden="true">${labels.join("")}</p>`;
  const base = (sparkY(BASE) / SPARK_GRID).toFixed(1);
  return `${anchors(OLD_LIST)}${find}${count}${key}${axis}<ol class="life-cats" aria-label="ALT" style="--life-base:${base}px">${rows}</ol>`;
}

// The price calendar: one row for each of the strongest month patterns, with a cell a month. A cell is blue
// where the good is cheaper than the level of its year and orange where it is dearer, and deeper for more,
// up to 8% either way. Text on a deep cell is white.
function calendarRow(row: readonly [string, string, string, string, string]): string {
  const item = seriesItem(row[0]);
  const low = monthAt(row[1]);
  const high = monthAt(row[2]);
  let cells = "";
  for (let month = 0; month < 12; month++) {
    const value = item.season[month] ?? 0;
    const depth = CELL_FLOOR + (1 - CELL_FLOOR) * Math.min(1, Math.abs(value) / CELL_REACH);
    const kind = `${month === low || month === high ? " life-edge" : ""}${depth > CELL_DEEP ? " life-deep" : ""}`;
    cells += `<i class="${value < 0 ? "life-down" : "life-up"}${kind}" style="--d:${depth.toFixed(2)}">${LETTERS[month] ?? ""}</i>`;
  }
  const months = `${row[1].slice(0, 3)} low, ${row[2].slice(0, 3)} high`;
  return `<li class="life-row"><b>${esc(packOf(row[0]).good)}</b><span class="life-end">${esc(row[3])}<small>${months}</small></span><small>held in ${esc(row[4])} years</small><span class="life-cells" role="img" aria-label="Cheapest in ${row[1]}, dearest in ${row[2]}">${cells}</span></li>`;
}

function calendarFigure(): string {
  const key = `<p class="life-key"><span><i class="life-down"></i>cheaper than the year's level</span><span><i class="life-up"></i>dearer</span><span>The figure is the gap between the cheapest and the dearest month.</span></p>`;
  return `${anchors(OLD_CALENDAR)}${key}<ol class="life-rows life-cal" aria-label="ALT">${STRONGEST.map(calendarRow).join("")}</ol>`;
}

export function lifeFigure(id: string, view: string): string {
  return view === "calendar" ? calendarFigure() : listFigure(id);
}

function cell(text: string): string {
  return text.replaceAll("|", "/");
}

function marked(text: string): string {
  return text.replace(LINK, "[$1 ↗]($2)");
}

function table(head: readonly string[], rows: readonly (readonly string[])[]): string[] {
  if (rows.length === 0) return [];
  return ["", `| ${head.join(" | ")} |`, `|${head.map(() => "---").join("|")}|`, ...rows.map((row) => `| ${row.map(cell).join(" | ")} |`)];
}

function shelfCells(shelf: Shelf): string[] {
  return [shelf[0], `[${shelf[1]} ↗](${shelf[2]})`, shelf[3], shelf[4], shelf[5], `${shelf[6]}${shelf[7] === 1 ? " (listing)" : ""}`];
}

function listText(): string[] {
  const lines: string[] = [];
  for (const category of LIFE) {
    lines.push("", `### ${title(category.name)}`, "", `Part of: ${category.area}.`, "");
    for (const move of category.moves) lines.push(`- **${move.lead}**${move.worth === "" ? "" : ` (${move.worth})`}. ${marked(move.text)}`);
    for (const note of category.notes) lines.push("", marked(note));
    lines.push(...table(["Good", "Pick", "Why"], category.picks.map((pick) => [pick[0], pick[1], marked(pick[2])])));
    if (category.checks.length > 0) lines.push("", "What to check on the pack:", "");
    for (const check of category.checks) lines.push(`- **${check.lead}:** ${marked(check.text)}`);
    lines.push(...table(["Item", "Sep 2026", "1 year", "Long run a year", "Sep 2027 forecast", "Good deal at", "Month pattern"], category.official));
    lines.push(...table(["Official series", "Index, Sep 2026", "1 year", "Since Sep 2015", "Sep 2027 forecast", "Month pattern"], category.series));
    lines.push(...table(["Item", "Product", "Shop", "Price", "Covers", "Unit price"], groupsOf(category).flatMap((group) => group.buys.map((buy) => shelfCells(buy.shelf)))));
  }
  return lines;
}

function calendarText(): string[] {
  const months = ["", "The same patterns by month, for gaps of 3% or more. The figure in brackets is the gap between that good's cheapest and dearest month.", ...table(["Month", "Usually cheapest", "Usually dearest"], MONTH_TABLE)];
  return [...table(["Item", "Cheapest", "Dearest", "Gap", "Years it held"], STRONGEST), ...months, ""];
}

// The same data as Markdown, for the text version of the post and the agent API.
export function lifeText(view: string): string[] {
  return view === "calendar" ? calendarText() : listText();
}

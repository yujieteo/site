import { LIFE, type LifeCategory, type Move, type Series, type Shelf } from "./life-data.ts";
import { LAST_MONTH, PRICES, type PriceItem } from "./price-data.ts";

// The list of daily-life groups. A group row shows its best move and a strip of dots, one for each
// official index and its change in a year. Open, it gives the moves, the shop prices and the indexes.
// The markup is short on purpose: 367 shop rows go into the page.

const REACH = 15;
const AXIS: readonly number[] = [-15, -10, -5, 0, 5, 10, 15];
const SPARK_WIDTH = 96;
const SPARK_HEIGHT = 36;
const SPARK_GRID = 3;
const SPARK_STEP = 3;
const BASE = 1000;
const SPARK_LOW = 550;
const SPARK_HIGH = 1300;
const SHOPS_SHOWN = 3;
const WIDE_PRICE = 30;
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

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

const BY_NAME = new Map<string, PriceItem>(PRICES.map((item) => [item.name, item]));

function esc(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function linked(text: string): string {
  return esc(text).replace(LINK, '<a href="$2">$1 ↗</a>');
}

function seriesItem(name: string): PriceItem {
  const found = BY_NAME.get(name);
  if (!found) throw new Error(`life: no official series is named "${name}"`);
  return found;
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

// The figure a row is ranked on: its unit price where the row has one, and its price where it does not.
// The tail is the unit, such as "/pc" or " per month". A plain price has no tail. The low and top figures keep
// the digits of the source, so a summary reads the same as its rows.
function buyOf(shelf: Shelf): Buy {
  const byUnit = /\d/.test(shelf[6]);
  const main = byUnit ? shelf[6] : shelf[4];
  const found = /^(?:(?:about|around|from)\s+)?S\$([\d,]+(?:\.\d+)?)(?:\s+to\s+S\$([\d,]+(?:\.\d+)?))?(.*)$/i.exec(main);
  const low = found?.[1] ?? "";
  const top = found?.[2] ?? low;
  const tail = byUnit ? (found?.[3] ?? "").replace(/\([^)]*\)/g, "").trimEnd() : "";
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

function moveRow(move: Move): string {
  const worth = move.worth === "" ? "" : ` <em class="life-tag">${esc(move.worth)}</em>`;
  return `<li class="life-row"><b>${esc(move.lead)}${worth}</b><span>${linked(move.text)}</span></li>`;
}

function sparkY(value: number): number {
  const held = Math.max(SPARK_LOW, Math.min(SPARK_HIGH, value));
  return Math.round((SPARK_HEIGHT - 3 - ((held - SPARK_LOW) / (SPARK_HIGH - SPARK_LOW)) * (SPARK_HEIGHT - 6)) * SPARK_GRID);
}

function sparkX(month: number): number {
  return Math.round((3 + (month / LAST_MONTH) * (SPARK_WIDTH - 6)) * SPARK_GRID);
}

// One scale for every small chart, index 55 to 130, so a steep line is a large change. Two series leave it
// and are cut at the edge. The path is in whole steps of a third of a pixel, one point a quarter, to keep
// it short. It closes along the 2024 level, and the fill shades the gap to that level. The dash length is
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
  return `<li class="life-row life-series"><b>${esc(series[0])}</b>${spark(seriesItem(series[0]))}<span class="life-end">${esc(series[2])}<small>in a year</small></span><small>${esc(sub)}</small></li>`;
}

function byRise(a: Series, b: Series): number {
  return percent(b[2]) - percent(a[2]);
}

const SHOP_KEY = `<p class="life-key"><span><i></i>price from the shop's page</span><span><i class="life-hollow"></i>from a search listing</span></p>`;

function part(title: string, key: string, rows: string, after: string): string {
  return rows === "" ? "" : `<section><h4>${esc(title)}</h4>${key}<ol class="life-rows">${rows}</ol>${after}</section>`;
}

// The dot of the index that rose most is larger, to tie it to the figure on the right of the row.
function strip(category: LifeCategory, top: Series): string {
  const marks = category.series.map((series) => {
    const real = percent(series[2]);
    const change = Math.max(-REACH, Math.min(REACH, real));
    const tone = change > 0 ? "life-up" : change < 0 ? "life-down" : "life-flat";
    const kind = real !== change ? " life-over" : series === top ? " life-top" : "";
    return `<i class="${tone}${kind}" style="left:${(50 + (change / REACH) * 50).toFixed(1)}%"></i>`;
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
  const series = [...category.series].sort(byRise);
  const top = series[0];
  const end = top ? `<span class="life-end">${esc(top[2])}<small>${esc(top[0])}</small></span>` : "";
  const summary = `<summary class="life-row"><b>${esc(category.name)}${chevron()}</b>${end}<small>${esc(lead(category))}</small>${top ? strip(category, top) : ""}</summary>`;
  const note = category.note === "" ? "" : `<p class="life-note">${esc(category.note)}</p>`;
  const moves = part("What to do", "", category.moves.map(moveRow).join(""), note);
  const shops = part(`Shop prices · ${category.shelf.length} in ${groups.length} items`, SHOP_KEY, groups.map(groupRow).join(""), "");
  const official = part("Official price index · year to Sep 2026", "", series.map(seriesRow).join(""), "");
  return `<li><details class="life-cat" id="${category.id}" data-cat="${esc(category.name)}">${summary}<div class="life-open">${moves}${shops}${official}</div></details></li>`;
}

function topRise(category: LifeCategory): number {
  return category.series.length === 0 ? Number.NEGATIVE_INFINITY : Math.max(...category.series.map((series) => percent(series[2])));
}

function total(pick: (category: LifeCategory) => number): number {
  return LIFE.reduce((sum, category) => sum + pick(category), 0);
}

export function lifeFigure(id: string): string {
  const ordered = [...LIFE].sort((a, b) => topRise(b) - topRise(a));
  const find = `<div class="life-find"><label for="${id}-q">Find</label><input id="${id}-q" type="search" data-q placeholder="Type taxi, broadband, gym" autocomplete="off" enterkeyhint="search"></div>`;
  const count = `<p class="life-count" data-count aria-live="polite">${LIFE.length} groups, ${total((c) => c.moves.length)} things to do, ${total((c) => c.shelf.length)} shop prices. Biggest rise first.</p>`;
  const key = `<p class="life-key"><span><i class="life-up"></i>an official index, up in a year</span><span><i class="life-down"></i>down</span></p>`;
  const labels = AXIS.map((tick) => `<span style="left:${(50 + (tick / REACH) * 50).toFixed(1)}%">${tick > 0 ? "+" : ""}${tick}${Math.abs(tick) === REACH ? "%" : ""}</span>`);
  const axis = `<p class="life-axis" aria-hidden="true">${labels.join("")}</p>`;
  const base = (sparkY(BASE) / SPARK_GRID).toFixed(1);
  return `${find}${count}${key}${axis}<ol class="life-cats" aria-label="ALT" style="--life-base:${base}px">${ordered.map(categoryRow).join("")}</ol>`;
}

function cell(text: string): string {
  return text.replaceAll("|", "/");
}

function moveText(move: Move): string {
  const worth = move.worth === "" ? "" : ` (${move.worth})`;
  return `- **${move.lead}**${worth}. ${move.text.replace(LINK, "[$1 ↗]($2)")}`;
}

// The same data as Markdown, for the text version of the post and the agent API.
export function lifeText(): string[] {
  const lines: string[] = [];
  for (const category of LIFE) {
    lines.push("", `### ${category.name}`, "");
    for (const move of category.moves) lines.push(moveText(move));
    if (category.note !== "") lines.push(`- ${category.note}`);
    if (category.series.length > 0) lines.push("", "| Official series | Index, Sep 2026 | 1 year | Since Sep 2015 | Sep 2027 forecast | Month pattern |", "|---|---|---|---|---|---|");
    for (const series of category.series) lines.push(`| ${series.map(cell).join(" | ")} |`);
    lines.push("", "| Item | Product | Shop | Price | Covers | Unit price |", "|---|---|---|---|---|---|");
    for (const group of groupsOf(category)) {
      for (const { shelf } of group.buys) lines.push(`| ${cell(shelf[0])} | [${cell(shelf[1])} ↗](${shelf[2]}) | ${cell(shelf[3])} | ${cell(shelf[4])} | ${cell(shelf[5])} | ${cell(shelf[6])}${shelf[7] === 1 ? " (listing)" : ""} |`);
    }
  }
  return lines;
}

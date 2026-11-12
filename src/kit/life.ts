import { GOOD_CHECKS, LEVERS, LIFE, MONTH_TABLE, REHOME, SPENDING, STRONGEST, type LifeCategory, type Move, type Official, type Series, type Shelf } from "./life-data.ts";
import { LAST_MONTH, PRICES, type PriceItem } from "./price-data.ts";
import type { Note } from "../notes.ts";

// The page answers one question: what is the best quality for the price? This draws its one list.
// The rows are the 12 spending groups of the household survey, biggest share first. A group opens to its
// advice under the four levers, in order: check quality, take the lowest price that passes, buy at the right
// time, buy the right amount. Under the advice sits the evidence: shop prices and official prices.
// A product is the pick of its item by rule alone: the cheapest unit price that passes the item's check.
// The markup is short on purpose: 558 shop rows go into the page.

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
const CALENDAR_HOME = "Food at home";
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;
// Headings that the post had before it became one list. Links to them still land on the list.
const OLD_LIST = ["explore-any-item", "how-to-read-the-tables", "everything-else-in-daily-life", "look-up-an-item", "the-price-calendar", "when-to-buy"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LETTERS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

type Verdict = "pass" | "fail" | "recorded" | "unknown" | "none";

interface Buy {
  shelf: Shelf;
  main: string;
  value: number;
  high: number;
  low: string;
  top: string;
  tail: string;
  verdict: Verdict;
  fact: string;
  source: string;
  seen: string;
}

// The notes that agents write for this page: product checks, products and advice. The build sets them before
// it draws a post. notes/PART.tsv holds them, and src/notes.ts holds their rules.
export interface LifeNotes {
  checks: readonly Note[];
  products: readonly Note[];
  advice: readonly Note[];
}

let notes: LifeNotes = { checks: [], products: [], advice: [] };

export function useLifeNotes(next: LifeNotes): void {
  notes = next;
}

// One shop item, such as "Toothpaste", with the products found for it.
interface Group {
  name: string;
  buys: Buy[];
  ranked: boolean;
  check: string;
  passes: boolean;
  pick: Buy | undefined;
}

interface GoodSet {
  name: string;
  id: string;
  groups: Group[];
}

// One spending group with everything that belongs to it.
interface Bucket {
  name: string;
  id: string;
  dollars: number;
  share: number;
  moves: Move[];
  notes: string[];
  sets: GoodSet[];
  official: Official[];
  series: Series[];
}

function esc(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function linked(text: string): string {
  return esc(text).replace(LINK, '<a href="$2">$1 ↗</a>');
}

function slug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
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

// The id of a shop item in the notes, such as "toothpaste".
function itemId(name: string): string {
  return slug(name).slice(0, 80).replace(/-$/, "");
}

// The id of a product in the notes: its item and its name.
function productId(shelf: Shelf): string {
  return slug(`${shelf[0]} ${shelf[1]}`).slice(0, 80).replace(/-$/, "");
}

function verdictOf(shelf: Shelf, read: Note | undefined): Verdict {
  const verdict = read?.fields.verdict;
  if (verdict === "pass" || verdict === "fail" || verdict === "recorded") return verdict;
  return GOOD_CHECKS[shelf[0]] ? "unknown" : "none";
}

function shortDate(date: string): string {
  const [year, month, day] = date.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1] ?? ""} ${year ?? ""}`;
}

// The unit that the rows of an item share, such as "/100 g" or " per month". Empty where they share none.
function unitOf(rows: readonly Shelf[]): string {
  const tails = rows.map((row) => buyOf(row, "").tail);
  const first = tails[0] ?? "";
  return tails.every((tail) => tail.toLowerCase() === first.toLowerCase()) ? first : "";
}

// The amount a pack states, in grams or millilitres, such as "6 x 330ml" or "1.5 kg". Undefined where it
// states none at its start.
function amountOf(pack: string): { of: string; size: number } | undefined {
  const found = /^(?:(\d+)\s*[x×]\s*)?(\d+(?:\.\d+)?)\s*(kg|g|ml|l)\b/i.exec(pack.trim());
  if (!found) return undefined;
  const size = Number(found[1] ?? 1) * Number(found[2]);
  const unit = (found[3] ?? "").toLowerCase();
  return unit === "kg" ? { of: "g", size: size * 1000 } : unit === "l" ? { of: "ml", size: size * 1000 } : { of: unit, size };
}

// The unit prices that follow from a price and a pack by weight or volume.
const UNIT_SIZES: Record<string, { of: string; size: number }> = { "/kg": { of: "g", size: 1000 }, "/100 g": { of: "g", size: 100 }, "/g": { of: "g", size: 1 }, "/l": { of: "ml", size: 1000 }, "/100 ml": { of: "ml", size: 100 }, "/ml": { of: "ml", size: 1 } };
const PER_SLACK = 0.02;

// Stops a unit price that does not follow from the price and the pack. A wrong one would change the pick.
function checkPer(note: Note, unit: string): void {
  const { price = "", pack = "", per = "" } = note.fields;
  const base = UNIT_SIZES[unit.trim().toLowerCase()];
  const amount = amountOf(pack);
  if (!base || !amount || amount.of !== base.of) return;
  const right = (Number(price) / amount.size) * base.size;
  if (Math.abs(Number(per) - right) > right * PER_SLACK) throw new Error(`notes/products.tsv: "${note.text}" has per=${per}, but S$${price} for ${pack} is S$${right.toFixed(4)}${unit}`);
}

// The shop rows of a set of goods, with the product notes applied. A note with the link of a row replaces
// that row. Any other note adds a row to its item. The map gives the day a noted row was seen.
function shelfOf(category: LifeCategory, products: readonly Note[]): { rows: Shelf[]; seen: Map<Shelf, string> } {
  const rows = [...category.shelf];
  const seen = new Map<Shelf, string>();
  for (const note of products) {
    const same = category.shelf.filter((row) => itemId(row[0]) === note.id);
    const first = same[0];
    if (!first) continue;
    const { price = "", pack = "", per = "", shop = "", url = "", date = "", until = "" } = note.fields;
    const unit = unitOf(same);
    if (unit !== "" && per === "") throw new Error(`notes/products.tsv: "${note.text}" needs the field per, its unit price for "${unit.trim()}"`);
    if (unit === "" && per !== "") throw new Error(`notes/products.tsv: "${note.text}" must not have the field per, as the item ${note.id} has no shared unit`);
    checkPer(note, unit);
    const matches = (row: Shelf): boolean => row[0] === first[0] && row[2] === url;
    const at = rows.findIndex(matches);
    if (at !== rows.findLastIndex(matches)) {
      throw new Error(`notes/products.tsv: item ${note.id} has multiple listings at ${url}. Update the specific listing in the base data.`);
    }
    // A refreshed product keeps its name, so the id of its check stays the same.
    const name = rows[at]?.[1] ?? note.text;
    const row: Shelf = [first[0], name, url, shop, `S$${price}${until === "" ? "" : ` (till ${shortDate(until)})`}`, pack, per === "" ? "n/a" : `S$${per}${unit}`, 0];
    if (at < 0) rows.push(row);
    else rows[at] = row;
    seen.set(row, date);
  }
  return { rows, seen };
}

// The figure a row is ranked on: its unit price where the row has one, and its price where it does not.
// The tail is the unit, such as "/pc" or " per month". A plain price has no tail. The low and top figures keep
// the digits of the source, so a summary reads the same as its rows.
function buyOf(shelf: Shelf, seen: string): Buy {
  const byUnit = /\d/.test(shelf[6]);
  const main = byUnit ? shelf[6] : shelf[4];
  const found = /^(?:(?:about|around|from)\s+)?S\$([\d,]+(?:\.\d+)?)(?:\s+to\s+S\$([\d,]+(?:\.\d+)?))?(.*)$/i.exec(main);
  const low = found?.[1] ?? "";
  const top = found?.[2] ?? low;
  const tail = byUnit ? ((found?.[3] ?? "").split(";")[0] ?? "").replace(/\([^)]*\)/g, "").trimEnd() : "";
  const id = productId(shelf);
  const read = notes.checks.find((note) => note.id === id);
  return { shelf, main, value: found ? amount(low) : Number.NaN, high: found ? amount(top) : Number.NaN, low, top, tail, verdict: verdictOf(shelf, read), fact: read?.text ?? "", source: read?.fields.url ?? "", seen };
}

// Rows are ranked only when every row of the item has a figure in the same unit. The pick is the cheapest
// product that passes the item's check. An item with no pass mark has no pick, only a lowest price: its
// products may not be equals. An item whose check no product shows has no pick either.
function groupsOf(category: LifeCategory): Group[] {
  const groups: Group[] = [];
  const { rows, seen } = shelfOf(category, notes.products);
  for (const shelf of rows) {
    let group = groups.find((g) => g.name === shelf[0]);
    if (!group) {
      const check = GOOD_CHECKS[shelf[0]];
      group = { name: shelf[0], buys: [], ranked: false, check: check?.[0] ?? "", passes: check?.[1] === "pass", pick: undefined };
      groups.push(group);
    }
    group.buys.push(buyOf(shelf, seen.get(shelf) ?? ""));
  }
  for (const group of groups) {
    const tail = (group.buys[0]?.tail ?? "").toLowerCase();
    group.ranked = group.buys.length > 1 && group.buys.every((buy) => Number.isFinite(buy.value) && buy.tail.toLowerCase() === tail);
    const passing = group.buys.filter((buy) => buy.verdict === "pass");
    if (group.ranked) group.buys.sort((a, b) => a.value - b.value);
    // Where prices cannot be ranked, a lone product that passes is still the pick.
    if (group.passes && (group.ranked || passing.length === 1)) group.pick = group.buys.find((buy) => buy.verdict === "pass");
  }
  return groups;
}

function bucketOf(buckets: Bucket[], key: string, fallback: string): Bucket {
  const name = REHOME[key] ?? fallback;
  const found = buckets.find((bucket) => bucket.name === name);
  if (!found) throw new Error(`life: "${key}" belongs to no spending group named "${name}"`);
  return found;
}

// Puts every move, shop item and official price into its one spending group.
function bucketsOf(): Bucket[] {
  const buckets: Bucket[] = SPENDING.map(([name, dollars, share]) => ({ name, id: slug(name), dollars, share, moves: [], notes: [], sets: [], official: [], series: [] }));
  for (const category of LIFE) {
    for (const move of [...category.moves, ...category.checks]) bucketOf(buckets, move.lead, category.spend).moves.push(move);
    bucketOf(buckets, "", category.spend).notes.push(...category.notes);
    for (const row of category.official) bucketOf(buckets, row[0], category.spend).official.push(row);
    for (const row of category.series) bucketOf(buckets, row[0], category.spend).series.push(row);
    for (const group of groupsOf(category)) {
      const bucket = bucketOf(buckets, group.name, category.spend);
      let set = bucket.sets.find((s) => s.name === category.name);
      if (!set) {
        set = { name: category.name, id: bucket.name === category.spend ? category.id : "", groups: [] };
        bucket.sets.push(set);
      }
      set.groups.push(group);
    }
  }
  // Advice from notes follows the advice of the post, highest points first.
  for (const note of [...notes.advice].sort((a, b) => b.points - a.points)) {
    const lever = LEVERS.find(([key]) => key === note.fields.lever)?.[0];
    const bucket = buckets.find((b) => b.id === note.id);
    if (!lever || !bucket) continue;
    bucket.moves.push({ lever, lead: note.text, text: `${note.fields.why ?? ""} [Source](${note.fields.url ?? ""})`, worth: note.fields.worth ?? "" });
  }
  return buckets;
}

function chevron(): string {
  return `<i class="life-chev"></i>`;
}

const DOT: Record<Verdict, string> = { pass: " life-pass", fail: " life-fail", recorded: "", unknown: " life-hollow", none: "" };

function factOf(buy: Buy): string {
  if (buy.verdict === "none") return "";
  if (buy.verdict === "unknown") return "check not shown on the page";
  const source = buy.source !== "" && buy.source !== buy.shelf[2] ? ` (<a href="${esc(buy.source)}">source ↗</a>)` : "";
  const lead = buy.verdict === "pass" ? "passes: " : buy.verdict === "fail" ? "fails: " : "";
  return `${lead}${esc(buy.fact)}${source}`;
}

function buyDetail(buy: Buy): string {
  const { shelf } = buy;
  const pack = /^\d+$/.test(shelf[5]);
  const covers = shelf[5] === "1" ? "" : pack ? `${shelf[5]} for ${shelf[4]}` : shelf[5];
  const price = pack || buy.main.startsWith(shelf[4]) ? "" : shelf[4];
  const parts = [shelf[3], covers, price, shelf[7] === 1 ? "listing" : "", buy.seen === "" ? "" : `read ${shortDate(buy.seen)}`].filter((part) => part !== "").map(esc);
  return [...parts, factOf(buy)].filter((part) => part !== "").join(" · ");
}

// A row with the item as its name stands alone. A row inside an opened item starts with the product.
function buyRow(buy: Buy, label: string, picked: boolean): string {
  const { shelf } = buy;
  const link = `<a href="${esc(shelf[2])}">${esc(shelf[1])} ↗</a>`;
  const name = label === "" ? `<b>${link}</b>` : `<b>${esc(label)}</b><small>${link}</small>`;
  const wide = buy.main.length > WIDE_PRICE;
  const price = wide ? `<span>${esc(buy.main)}</span>` : `<span class="life-end">${esc(buy.main)}${picked ? "<small>the pick</small>" : ""}</span>`;
  return `<li class="life-row life-buy${DOT[buy.verdict]}">${name}${price}<small>${buyDetail(buy)}</small></li>`;
}

function track(group: Group, top: number): string {
  const marks = group.buys.map((buy) => {
    const kind = `${DOT[buy.verdict]}${buy === group.pick ? " life-ring" : ""}`.trim();
    return `<i${kind === "" ? "" : ` class="${kind}"`} style="left:${((buy.value / top) * 100).toFixed(1)}%"></i>`;
  });
  return `<span class="life-track">${marks.join("")}</span>`;
}

function shopList(group: Group): string {
  const shops: string[] = [];
  for (const buy of group.buys) if (!shops.includes(buy.shelf[3])) shops.push(buy.shelf[3]);
  const more = shops.length > SHOPS_SHOWN ? ` and ${shops.length - SHOPS_SHOWN} more` : "";
  return `${shops.slice(0, SHOPS_SHOWN).join(", ")}${more}`;
}

// Why the pick is the pick, in a few words.
function basisOf(group: Group): string {
  const passing = group.buys.filter((buy) => buy.verdict === "pass").length;
  return passing === 1 ? "the only one that passes" : `cheapest of ${passing} that pass`;
}

// The figure on the right of an item: the pick, or the lowest price where the item has no pass mark.
function priceOf(group: Group, first: Buy): string {
  if (group.pick) return `${group.ranked ? `S$${group.pick.low}${esc(group.pick.tail)}` : esc(group.pick.main)}<small>${basisOf(group)}</small>`;
  if (!group.ranked) return "";
  if (group.passes) return `No pick<small>no product shows the check</small>`;
  return `S$${first.low}${esc(first.tail)}<small>lowest of ${group.buys.length}</small>`;
}

function checkLine(group: Group): string {
  if (group.check === "") return `${group.buys.length} prices · ${shopList(group)}`;
  if (!group.passes) {
    const read = group.buys.filter((buy) => buy.verdict === "recorded").length;
    return `Recorded: ${group.check} · read for ${read} of ${group.buys.length}`;
  }
  const passing = group.buys.filter((buy) => buy.verdict === "pass").length;
  return `Check: ${group.check} · ${passing} of ${group.buys.length} pass`;
}

function groupRow(group: Group): string {
  const first = group.buys[0];
  if (!first) return "";
  if (group.buys.length === 1) return buyRow(first, group.name, false);
  const top = Math.max(...group.buys.map((buy) => buy.high));
  const last = group.buys.reduce((best, buy) => (buy.high > best.high ? buy : best), first);
  const spread = group.ranked && top > first.value;
  const price = priceOf(group, first);
  const end = price === "" ? "" : `<span class="life-end">${price}</span>`;
  const range = spread ? ` · up to S$${last.top}` : "";
  const summary = `<summary class="life-row"><b>${esc(group.name)}${chevron()}</b>${end}<small>${esc(`${checkLine(group)}${range}`)}</small>${spread ? track(group, top) : ""}</summary>`;
  return `<li><details class="life-item">${summary}<ol class="life-rows life-nest">${group.buys.map((buy) => buyRow(buy, "", buy === group.pick)).join("")}</ol></details></li>`;
}

// A break-even point as a line: the left half is where paying each time is cheaper, the right half is where
// the pass pays. A dot marks a typical use, where the post gives one.
function evenLine(even: readonly [number, number, string]): string {
  const [point, typical, unit] = even;
  const at = ((typical / (point * 2)) * 100).toFixed(1);
  const dot = typical > 0 ? `<i style="left:${at}%"></i><small style="left:${at}%">${typical}</small>` : "";
  return `<span class="life-even" role="img" aria-label="The pass pays from ${point} ${esc(unit)}${typical > 0 ? `. A typical use is ${typical}` : ""}.">${dot}<small style="left:50%">${point} ${esc(unit)}</small></span>`;
}

// A move: the thing to do, a tag with its figure, then the reason. The tag follows the lead, so the text keeps
// the full width.
function moveRow(move: Move, extra: string): string {
  const worth = move.worth === "" ? "" : ` <em class="life-tag">${esc(move.worth)}</em>`;
  return `<li class="life-row"><b>${esc(move.lead)}${worth}</b><span>${linked(move.text)}</span>${move.even ? evenLine(move.even) : ""}${extra}</li>`;
}

function monthAt(text: string): number {
  return MONTHS.findIndex((month) => text.startsWith(month));
}

// A month pattern as advice: buy in the cheapest month. Its twelve cells show each month against the level of
// the year: blue below, orange above, deeper for more, up to 8% either way. A ring marks the two months.
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
  const good = packOf(row[0]).good.toLowerCase().replace("spanish", "Spanish");
  const move: Move = { lever: "when", lead: `Buy ${good} in ${row[1]}, not ${row[2]}`, text: `The gap between the two months is ${row[3]}. The pattern held in ${row[4]} years.`, worth: `gap ${row[3]}` };
  return moveRow(move, `<span class="life-cells" role="img" aria-label="Cheapest in ${row[1]}, dearest in ${row[2]}">${cells}</span>`);
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

const SHOP_KEY = `<p class="life-key"><span><i class="life-pass"></i>passes the check</span><span><i class="life-hollow"></i>check not shown</span><span><i class="life-fail"></i>fails</span><span><i></i>no check for this item</span><span><i class="life-ring"></i>the pick</span></p>`;

function part(heading: string, id: string, key: string, rows: string, after: string): string {
  return `<section${id === "" ? "" : ` id="${id}"`}><h4>${heading}</h4>${key}${rows === "" ? "" : `<ol class="life-rows">${rows}</ol>`}${after}</section>`;
}

// The four levers of a group, always all four and always in order. An empty one says so.
function leverParts(bucket: Bucket): string {
  let out = "";
  LEVERS.forEach(([lever, name], index) => {
    const calendar = lever === "when" && bucket.name === CALENDAR_HOME ? STRONGEST.map(calendarRow).join("") : "";
    const rows = bucket.moves.filter((move) => move.lever === lever).map((move) => moveRow(move, "")).join("") + calendar;
    out += part(`<i class="life-step">${index + 1}</i>${esc(name)}`, "", "", rows, rows === "" ? `<p class="life-note">None found.</p>` : "");
  });
  return out;
}

// The advice shown on the closed row: the first one that carries a figure, or else the first one.
function leadOf(bucket: Bucket): string {
  const move = bucket.moves.find((m) => m.worth !== "") ?? bucket.moves[0];
  if (!move) return "No advice found yet";
  return move.worth === "" ? move.lead : `${move.lead} · ${move.worth}`;
}

function shopCount(bucket: Bucket): number {
  return bucket.sets.reduce((sum, set) => sum + set.groups.reduce((n, group) => n + group.buys.length, 0), 0);
}

function bucketRow(bucket: Bucket, widest: number): string {
  const end = `<span class="life-end">${bucket.share.toFixed(1)}%<small>S$${bucket.dollars} a month</small></span>`;
  const summary = `<summary class="life-row"><b>${esc(bucket.name)}${chevron()}</b>${end}<small>${esc(leadOf(bucket))}</small><span class="life-share"><i style="width:${((bucket.share / widest) * 100).toFixed(1)}%"></i></span></summary>`;
  const notes = bucket.notes.length === 0 ? "" : part("Good to know", "", "", "", bucket.notes.map((note) => `<p class="life-note">${linked(note)}</p>`).join(""));
  let shops = "";
  bucket.sets.forEach((set, index) => {
    const count = set.groups.reduce((n, group) => n + group.buys.length, 0);
    shops += part(esc(`Shop prices · ${title(set.name)} · ${count} in ${set.groups.length} items`), set.id, index === 0 ? SHOP_KEY : "", set.groups.map(groupRow).join(""), "");
  });
  const prices = bucket.official.map(officialRow).join("") + [...bucket.series].sort(byRise).map(seriesRow).join("");
  const official = prices === "" ? "" : part("Official prices · year to Sep 2026", "", "", prices, "");
  return `<li><details class="life-cat" id="${bucket.id}">${summary}<div class="life-open">${leverParts(bucket)}${notes}${shops}${official}</div></details></li>`;
}

export function lifeFigure(id: string): string {
  const buckets = bucketsOf();
  const widest = Math.max(...buckets.map((bucket) => bucket.share));
  const anchors = OLD_LIST.map((old) => `<span class="life-anchor" id="${old}"></span>`).join("");
  const find = `<div class="life-find"><label for="${id}-q">Find</label><input id="${id}-q" type="search" data-q placeholder="Type eggs, taxi, sofa" autocomplete="off" enterkeyhint="search"></div>`;
  const moves = buckets.reduce((sum, bucket) => sum + bucket.moves.length, 0) + STRONGEST.length;
  const shops = buckets.reduce((sum, bucket) => sum + shopCount(bucket), 0);
  const official = buckets.reduce((sum, bucket) => sum + bucket.official.length + bucket.series.length, 0);
  const count = `<p class="life-count" data-count aria-live="polite">${buckets.length} spending groups, ${moves} things to do, ${shops} shop prices, ${official} official prices.</p>`;
  const base = (sparkY(BASE) / SPARK_GRID).toFixed(1);
  return `${anchors}${find}${count}<ol class="life-cats" aria-label="ALT" style="--life-base:${base}px">${buckets.map((bucket) => bucketRow(bucket, widest)).join("")}</ol>`;
}

// The ids that a note may use: the products of items that have a quality check, every shop item, and every
// spending group. A product comes with how its check is answered, and a group with the advice the post gives
// it, in lower case. Two things with one id stop the build.
export function lifeIds(products: readonly Note[]): { checks: Map<string, "pass" | "record">; products: Set<string>; advice: Map<string, Set<string>> } {
  const items = new Map<string, string>();
  const checked = new Map<string, "pass" | "record">();
  const advice = new Map(SPENDING.map(([name]) => [slug(name), new Set<string>()]));
  for (const category of LIFE) {
    for (const row of category.shelf) {
      const id = itemId(row[0]);
      if ((items.get(id) ?? row[0]) !== row[0]) throw new Error(`life: the items "${items.get(id)}" and "${row[0]}" share the id ${id}`);
      items.set(id, row[0]);
    }
    for (const row of shelfOf(category, products).rows) {
      const answer = GOOD_CHECKS[row[0]]?.[1];
      if (!answer) continue;
      const id = productId(row);
      if (checked.has(id)) throw new Error(`life: two products share the id ${id}`);
      checked.set(id, answer);
    }
    for (const move of [...category.moves, ...category.checks]) advice.get(slug(REHOME[move.lead] ?? category.spend))?.add(move.lead.toLowerCase());
  }
  return { checks: checked, products: new Set(items.keys()), advice };
}

function tsv(rows: readonly (readonly string[])[]): string {
  return `${rows.map((row) => row.map((text) => text.replace(/[\t\n]/g, " ")).join("\t")).join("\n")}\n`;
}

// The list an agent reads before it writes a check: every product of an item that has a quality check.
export function checksList(): string {
  const rows = [["id", "item", "product", "shop", "url", "check", "answer", "now"]];
  for (const bucket of bucketsOf()) {
    for (const set of bucket.sets) {
      for (const group of set.groups) {
        if (group.check === "") continue;
        for (const buy of group.buys) rows.push([productId(buy.shelf), group.name, buy.shelf[1], buy.shelf[3], buy.shelf[2], group.check, group.passes ? "pass or fail" : "recorded", buy.verdict === "unknown" ? "" : `${buy.verdict}: ${buy.fact}`]);
      }
    }
  }
  return tsv(rows);
}

// The list an agent reads before it writes a product: every product on the page, under the id of its item.
export function productsList(): string {
  const rows = [["id", "item", "group", "unit", "product", "shop", "price", "pack", "unit_price", "url"]];
  for (const bucket of bucketsOf()) {
    for (const set of bucket.sets) {
      for (const group of set.groups) {
        const unit = unitOf(group.buys.map((buy) => buy.shelf)).trim();
        for (const { shelf } of group.buys) rows.push([itemId(group.name), group.name, bucket.name, unit, shelf[1], shelf[3], shelf[4], shelf[5], shelf[6], shelf[2]]);
      }
    }
  }
  return tsv(rows);
}

// The list an agent reads before it writes advice: every spending group and the advice it has.
export function adviceList(): string {
  const rows = [["id", "group", "share", "lever", "advice"]];
  for (const bucket of bucketsOf()) {
    const share = `${bucket.share.toFixed(1)}%`;
    if (bucket.moves.length === 0) rows.push([bucket.id, bucket.name, share, "", ""]);
    for (const move of bucket.moves) rows.push([bucket.id, bucket.name, share, move.lever, move.lead]);
  }
  return tsv(rows);
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

function verdictText(buy: Buy): string {
  if (buy.verdict === "none") return "no check for this item";
  if (buy.verdict === "unknown") return "check not shown on the page";
  return `${buy.verdict === "recorded" ? "" : `${buy.verdict}: `}${buy.fact}`;
}

function shelfCells(group: Group, buy: Buy): string[] {
  const { shelf } = buy;
  const check = `${verdictText(buy)}${buy === group.pick ? "; the pick" : ""}`;
  return [shelf[0], `[${shelf[1]} ↗](${shelf[2]})`, shelf[3], shelf[4], shelf[5], `${shelf[6]}${shelf[7] === 1 ? " (listing)" : ""}`, check];
}

// The same data as Markdown, for the text version of the post and the agent API.
export function lifeText(): string[] {
  const lines: string[] = [];
  for (const bucket of bucketsOf()) {
    lines.push("", `### ${bucket.name}`, "", `Share of household spending: ${bucket.share.toFixed(1)}%, S$${bucket.dollars} a month.`);
    LEVERS.forEach(([lever, name], index) => {
      const moves = bucket.moves.filter((move) => move.lever === lever);
      const calendar = lever === "when" && bucket.name === CALENDAR_HOME;
      lines.push("", `${index + 1}. ${name}:`, "");
      if (moves.length === 0 && !calendar) lines.push("- None found.");
      for (const move of moves) lines.push(`- **${move.lead}**${move.worth === "" ? "" : ` (${move.worth})`}. ${marked(move.text)}`);
      if (calendar) {
        lines.push(...table(["Item", "Cheapest", "Dearest", "Gap", "Years it held"], STRONGEST));
        lines.push("", "The same patterns by month, for gaps of 3% or more. The figure in brackets is the gap between that good's cheapest and dearest month.");
        lines.push(...table(["Month", "Usually cheapest", "Usually dearest"], MONTH_TABLE));
      }
    });
    for (const note of bucket.notes) lines.push("", marked(note));
    lines.push(...table(["Item", "Sep 2026", "1 year", "Long run a year", "Sep 2027 forecast", "Good deal at", "Month pattern"], bucket.official));
    lines.push(...table(["Official series", "Index, Sep 2026", "1 year", "Since Sep 2015", "Sep 2027 forecast", "Month pattern"], bucket.series));
    const rows = bucket.sets.flatMap((set) => set.groups.flatMap((group) => group.buys.map((buy) => shelfCells(group, buy))));
    lines.push(...table(["Item", "Product", "Shop", "Price", "Covers", "Unit price", "Quality check"], rows));
  }
  return lines;
}

import { PRICES, type PriceItem } from "./price-data.ts";
import { at, fitCount, scale, svgHead, tickStep, ticks, type Scale } from "./scale.ts";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LETTERS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const GROUPS: readonly (readonly [string, string])[] = [["pantry", "Pantry and drinks"], ["protein", "Meat and seafood"], ["produce", "Fruit and vegetables"], ["hawker", "Hawker food"], ["home", "Household"], ["fuel", "Fuel"]];
const BASE_YEAR = 2015;
const LAST_MONTH = 140;
const AHEAD = 12;
const BREAKS = [48, 108];
const LEFT = 48;
const RIGHT = 12;
const LINE_TOP = 12;
const LINE_BOTTOM = 220;
const BAR_MID = 300;
const BAR_REACH = 36;
const HEIGHT = 368;

interface Plot {
  x: Scale;
  y: Scale;
  item: PriceItem;
  width: number;
}

function money(cents: number): string {
  return `S$${(cents / 100).toFixed(2)}`;
}

function monthName(month: number): string {
  return `${MONTHS[month % 12] ?? ""} ${BASE_YEAR + Math.floor(month / 12)}`;
}

function plotOf(item: PriceItem, width: number): Plot {
  const all = [...item.cents, item.low, item.high];
  const pad = (Math.max(...all) - Math.min(...all)) * 0.08 + 1;
  const x = scale(item.start, LAST_MONTH + AHEAD, LEFT, width - RIGHT);
  const y = scale(Math.min(...all) - pad, Math.max(...all) + pad, LINE_BOTTOM, LINE_TOP);
  return { x, y, item, width };
}

function pricePoint(p: Plot, month: number, cents: number): string {
  return `${at(p.x, month).toFixed(1)} ${at(p.y, cents).toFixed(1)}`;
}

function history(p: Plot): string {
  let path = "";
  let marks = "";
  for (let k = 0; k < p.item.cents.length; k++) {
    const month = p.item.start + k;
    const cents = p.item.cents[k] ?? 0;
    path += `${k === 0 || BREAKS.includes(month) ? "M" : "L"}${pricePoint(p, month, cents)}`;
    marks += `<circle cx="${at(p.x, month).toFixed(1)}" cy="${at(p.y, cents).toFixed(1)}" r="4" fill="transparent" data-tip="${monthName(month)}: ${money(cents)}"></circle>`;
  }
  return `<path d="${path}" fill="none" stroke="var(--series-1)" stroke-width="2"></path>${marks}`;
}

function forecast(p: Plot): string {
  const now = p.item.cents.at(-1) ?? 0;
  const end = LAST_MONTH + AHEAD;
  const band = `${pricePoint(p, LAST_MONTH, now)} ${pricePoint(p, end, p.item.high)} ${pricePoint(p, end, p.item.low)}`;
  const tip = `Sep 2027 forecast: ${money(p.item.mid)}, likely ${money(p.item.low)} to ${money(p.item.high)}`;
  return `<polygon points="${band}" fill="var(--series-2)" fill-opacity="0.18"></polygon><path d="M${pricePoint(p, LAST_MONTH, now)}L${pricePoint(p, end, p.item.mid)}" fill="none" stroke="var(--series-2)" stroke-width="2" stroke-dasharray="4 4"></path><circle cx="${at(p.x, end).toFixed(1)}" cy="${at(p.y, p.item.mid).toFixed(1)}" r="5" fill="var(--series-2)" data-tip="${tip}"></circle>`;
}

function label(x: number, y: number, anchor: string, text: string): string {
  return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" font-size="12" fill="var(--muted)">${text}</text>`;
}

function priceAxis(p: Plot): string {
  let out = "";
  for (const cents of ticks(p.y.d0, p.y.d1, 5)) {
    const y = at(p.y, cents);
    out += `<line x1="${LEFT}" x2="${p.width - RIGHT}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--line)"></line>${label(LEFT - 6, y + 4, "end", (cents / 100).toFixed(2))}`;
  }
  return out;
}

function yearAxis(p: Plot): string {
  const room = p.width - LEFT - RIGHT;
  const years = (LAST_MONTH + AHEAD - p.item.start) / 12;
  const step = Math.max(1, Math.ceil(tickStep(years, fitCount(room, "2026"))));
  let out = "";
  for (let year = Math.ceil(p.item.start / 12); year * 12 <= LAST_MONTH + AHEAD; year += step) out += label(at(p.x, year * 12), LINE_BOTTOM + 18, "middle", String(BASE_YEAR + year));
  for (const month of BREAKS) if (month > p.item.start) out += `<line x1="${at(p.x, month).toFixed(1)}" x2="${at(p.x, month).toFixed(1)}" y1="${LINE_TOP}" y2="${LINE_BOTTOM}" stroke="var(--line)" stroke-dasharray="2 3"></line>`;
  return out;
}

function monthBar(p: Plot, month: number, tenths: number, slot: number, reach: number): string {
  const left = LEFT + slot * month;
  const size = (Math.abs(tenths) / reach) * BAR_REACH;
  const top = tenths > 0 ? BAR_MID - size : BAR_MID;
  const tip = `${MONTHS[month] ?? ""}: ${(tenths / 10).toFixed(1)}% against the year's level`;
  const fill = p.item.steady ? "var(--series-4)" : "var(--muted)";
  return `<rect x="${(left + 2).toFixed(1)}" y="${top.toFixed(1)}" width="${(slot - 4).toFixed(1)}" height="${Math.max(size, 1).toFixed(1)}" fill="${fill}" data-tip="${tip}"></rect>${label(left + slot / 2, BAR_MID + BAR_REACH + 18, "middle", LETTERS[month] ?? "")}`;
}

function seasons(p: Plot): string {
  if (p.item.season.length === 0) return label(p.width / 2, BAR_MID, "middle", "Under three years of data, so no month pattern yet");
  const slot = (p.width - LEFT - RIGHT) / 12;
  const reach = Math.max(10, ...p.item.season.map(Math.abs));
  let out = `<line x1="${LEFT}" x2="${p.width - RIGHT}" y1="${BAR_MID}" y2="${BAR_MID}" stroke="var(--line)"></line>`;
  for (let month = 0; month < 12; month++) out += monthBar(p, month, p.item.season[month] ?? 0, slot, reach);
  return out;
}

export function itemAt(index: number): PriceItem {
  const item = PRICES[index] ?? PRICES[0];
  if (!item) throw new Error("no price data");
  return item;
}

export function priceSvg(index: number, width: number): string {
  const p = plotOf(itemAt(index), width);
  return `${svgHead(width, HEIGHT)}${priceAxis(p)}${yearAxis(p)}${history(p)}${forecast(p)}${seasons(p)}</svg>`;
}

function seasonNote(item: PriceItem): string {
  if (item.season.length === 0 || !item.steady) return "No steady month pattern.";
  const low = item.season.indexOf(Math.min(...item.season));
  const high = item.season.indexOf(Math.max(...item.season));
  return `Usually cheapest in ${MONTHS[low] ?? ""} and dearest in ${MONTHS[high] ?? ""}.`;
}

export function priceNote(index: number): string {
  const item = itemAt(index);
  const now = item.cents.at(-1) ?? 0;
  const deal = item.deal > 0 ? ` A good deal is ${money(item.deal)} or less.` : "";
  return `${money(now)} in ${monthName(LAST_MONTH)}. Sep 2027 forecast ${money(item.mid)}, likely ${money(item.low)} to ${money(item.high)}.${deal} ${seasonNote(item)}`;
}

function optionsIn(group: string, chosen: number): string {
  let out = "";
  for (let k = 0; k < PRICES.length; k++) {
    const item = PRICES[k];
    if (item?.group === group) out += `<option value="${k}"${k === chosen ? " selected" : ""}>${item.name.replace("&", "&amp;")}</option>`;
  }
  return out;
}

function choices(chosen: number): string {
  let out = "";
  for (const [group, title] of GROUPS) out += `<optgroup label="${title}">${optionsIn(group, chosen)}</optgroup>`;
  return out;
}

export function priceFigure(id: string, width: number): string {
  const chosen = Math.max(0, PRICES.findIndex((item) => item.name.startsWith("Hen Eggs")));
  return `${priceSvg(chosen, width)}<div class="controls"><span class="control"><label for="${id}-item">Item</label><select id="${id}-item" data-item>${choices(chosen)}</select></span></div><p class="note" data-note aria-live="polite">${priceNote(chosen)}</p>`;
}

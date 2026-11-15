// Reads every saved day of shop replies into one row per product per day, with a unit price.
//
//   bun scripts/prices/history.ts > history.tsv     # all rows, as a table
//   bun scripts/prices/history.ts --summary         # rows per day and good, and what could not be read
//
// The rules here can change; the raw files do not. Rerun to apply a new rule to every day.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { DIR } from "./collect.ts";

export interface Row {
  day: string;
  shop: string;
  good: string;
  id: string;
  barcode: string;
  name: string;
  brand: string;
  pack: string;
  // Unit: "kg", "L" or "egg". size is how many units the pack holds.
  unit: string;
  size: number;
  regular: number; // the shop's own "was" price (mrp)
  paid: number; // the price of one pack today, before multi-buy offers
  perUnit: number; // paid / size
  offer: string; // offer text, such as "*Buy 2* At $4.90"
  offerFrom: string;
  offerTill: string;
  multiBuy: boolean; // an offer that needs more than one pack
  inStock: boolean;
  origin: string;
  kind: string; // a finer group inside the good, such as "whole" chicken or "3-in-1" coffee
}

const UNIT: Record<string, [string, number]> = { g: ["kg", 0.001], gm: ["kg", 0.001], kg: ["kg", 1], ml: ["L", 0.001], l: ["L", 1], ltr: ["L", 1] };

// "5 KG", "1.89L", "20 x 16g", "13 + 3 x 31.6g", "5L + 1L". Returns undefined when the text has no size.
export function packSize(text: string): { unit: string; size: number } | undefined {
  const t = text.toLowerCase().replace(/,/g, ".").replace(/\s+/g, " ");
  const amount = String.raw`(\d+(?:\.\d+)?)\s?(kg|gm|g|ml|ltr|l)\b`;
  const bonus = t.match(new RegExp(String.raw`(\d+)\s?\+\s?(\d+)\s?x\s?${amount}`));
  if (bonus) {
    const [u, f] = UNIT[bonus[4] ?? ""] ?? ["", 0];
    return { unit: u, size: (Number(bonus[1]) + Number(bonus[2])) * Number(bonus[3]) * f };
  }
  const multi = t.match(new RegExp(String.raw`(\d+)\s?(?:x|×)\s?${amount}`));
  if (multi) {
    const [u, f] = UNIT[multi[3] ?? ""] ?? ["", 0];
    return { unit: u, size: Number(multi[1]) * Number(multi[2]) * f };
  }
  const parts = [...t.matchAll(new RegExp(amount, "g"))];
  if (parts.length === 0) return undefined;
  // "5L + 1L" adds up; "550g (10 per pack)" has one amount.
  let unit = "";
  let size = 0;
  for (const part of parts) {
    const [u, f] = UNIT[part[2] ?? ""] ?? ["", 0];
    if (unit && u !== unit) return undefined;
    unit = u;
    size += Number(part[1]) * f;
  }
  return { unit, size };
}

export function eggCount(text: string): number | undefined {
  const t = text.toLowerCase();
  const m = t.match(/(\d+)\s?(?:per pack|pcs|pieces|eggs|s\b|'s\b)/) ?? t.match(/\((\d+)\)/);
  return m ? Number(m[1]) : undefined;
}

function kindOf(good: string, name: string): string {
  const n = name.toLowerCase();
  if (good === "chicken") return /whole|poulet|kampong chicken\b(?!.*(wing|thigh|breast|drum))/.test(n) && !/wing|thigh|breast|drum|fillet|leg|feet|bone|minced/.test(n) ? "whole" : /breast/.test(n) ? "breast" : /wing/.test(n) ? "wing" : /thigh|drum|leg/.test(n) ? "leg" : "other";
  if (good === "coffee") return /concentrate|ready to drink|\bcan\b/.test(n) ? "liquid" : /3\s?-?in\s?-?1|2\s?-?in\s?-?1|white coffee|latte|mocha|cappuccino/.test(n) ? "mix" : "pure";
  if (good === "rice") return /basmati/.test(n) ? "basmati" : /hom mali|fragrant|jasmine/.test(n) ? "fragrant" : /japanese|calrose|sushi/.test(n) ? "japonica" : /brown|red|black|wild/.test(n) ? "wholegrain" : "white";
  if (good === "eggs") return /free.?range|organic|cage.?free/.test(n) ? "free-range" : "caged";
  if (good === "milk") return /smoothie|flavoured|chocolate|strawberry|banana|coffee/.test(n) ? "flavoured" : "plain";
  if (good === "bread") return /wholemeal|whole ?grain|multigrain/.test(n) ? "wholemeal" : "white";
  if (good === "oil") return /olive|sesame|mustard|rice bran|avocado|coconut|ghee/.test(n) ? "specialty" : "everyday";
  return "";
}

interface Raw {
  id: number;
  name: string;
  barcodes?: string[];
  brand?: { name?: string };
  final_price?: number;
  has_stock?: boolean;
  metaData?: Record<string, unknown>;
  storeSpecificData?: { mrp?: string; discount?: string }[];
  offers?: { shortDescriptionA?: string; description?: string; validFrom?: string; validTill?: string; rule?: { buy?: Record<string, { q?: number }> } }[];
}

function fairprice(day: string, good: string, raw: Raw): Row | "unread" {
  const meta = raw.metaData ?? {};
  const pack = String(meta.DisplayUnit ?? "");
  const store = raw.storeSpecificData?.[0] ?? {};
  const regular = Number(store.mrp ?? raw.final_price ?? 0);
  const paid = Number(raw.final_price ?? regular);
  let unit = "";
  let size = 0;
  if (good === "eggs") {
    const count = eggCount(pack) ?? eggCount(raw.name);
    if (count) [unit, size] = ["egg", count];
  } else {
    const got = packSize(pack) ?? packSize(raw.name);
    if (got) [unit, size] = [got.unit, got.size];
  }
  if (!unit || !(size > 0) || !(paid > 0)) return "unread";
  const offer = (raw.offers ?? [])[0];
  const quantity = offer?.rule?.buy ? Math.max(...Object.values(offer.rule.buy).map((b) => b.q ?? 1)) : 1;
  return {
    day,
    shop: "FairPrice",
    good,
    id: String(raw.id),
    barcode: raw.barcodes?.[0] ?? "",
    name: raw.name.replace(/\s+/g, " ").trim(),
    brand: raw.brand?.name ?? "",
    pack,
    unit,
    size: Number(size.toFixed(4)),
    regular,
    paid,
    perUnit: Number((paid / size).toFixed(4)),
    offer: (offer?.shortDescriptionA ?? offer?.description ?? "").replace(/\s+/g, " ").trim(),
    offerFrom: (offer?.validFrom ?? "").slice(0, 10),
    offerTill: (offer?.validTill ?? "").slice(0, 10),
    multiBuy: quantity > 1,
    inStock: raw.has_stock !== false,
    origin: String(meta["Country of Origin"] ?? ""),
    kind: kindOf(good, raw.name),
  };
}

export function readHistory(): { rows: Row[]; unread: { day: string; good: string; name: string; pack: string }[] } {
  const rows: Row[] = [];
  const unread: { day: string; good: string; name: string; pack: string }[] = [];
  const base = `${DIR}/fairprice`;
  if (!existsSync(base)) return { rows, unread };
  for (const day of readdirSync(base).filter((d) => /^\d{4}-\d\d-\d\d$/.test(d)).sort()) {
    const seen = new Set<string>();
    for (const file of readdirSync(`${base}/${day}`).sort()) {
      if (!file.endsWith(".json.gz")) continue;
      const record = JSON.parse(new TextDecoder().decode(Bun.gunzipSync(readFileSync(`${base}/${day}/${file}`)))) as { good: string; products: Raw[] };
      for (const raw of record.products) {
        // A product can sit in two categories of one good, such as canola and cooking oil.
        if (seen.has(String(raw.id))) continue;
        seen.add(String(raw.id));
        const row = fairprice(day, record.good, raw);
        if (row === "unread") unread.push({ day, good: record.good, name: raw.name, pack: String(raw.metaData?.DisplayUnit ?? "") });
        else rows.push(row);
      }
    }
  }
  return { rows, unread };
}

if (import.meta.main) {
  const { rows, unread } = readHistory();
  if (Bun.argv.includes("--summary")) {
    const count = new Map<string, number>();
    for (const row of rows) count.set(`${row.day} ${row.good}`, (count.get(`${row.day} ${row.good}`) ?? 0) + 1);
    for (const [key, n] of count) console.log(`${key}\t${n}`);
    console.log(`unread: ${unread.length}`);
    for (const u of unread.slice(0, 40)) console.log(`  ${u.good}\t${u.pack}\t${u.name}`);
  } else {
    const keys = Object.keys(rows[0] ?? {}) as (keyof Row)[];
    console.log(keys.join("\t"));
    for (const row of rows) console.log(keys.map((k) => String(row[k])).join("\t"));
  }
}

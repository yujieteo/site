// Writes tests/questions/questions.jsonl: 30 questions whose answers this script derives from the source
// data (src/kit data, notes/*.tsv, posts/*/post.md). It does not import src/tables.ts or the row builders,
// so a bug in the API cannot also be in its answer key. Picks are fixed rules, so a rerun on the same data
// gives the same questions. Run: bun tests/questions/derive.ts
import { readFileSync, writeFileSync } from "node:fs";
import { LAST_MONTH, PRICES } from "../../src/kit/price-data.ts";
import { SPREADS } from "../../src/kit/food-data.ts";
import { SPENDING } from "../../src/kit/life-data.ts";

export interface Question {
  id: string;
  question: string;
  answer: string | number;
  kind: "number" | "integer" | "date" | "text";
  // The date an answer should cite with the figure: the day or month the fact was read.
  as_of: string;
  // Where in the API the answer lives, for the report only. Never shown to a model.
  where: string;
}

type Note = { id: string; text: string; f: Record<string, string> };
function notes(part: string): Note[] {
  return readFileSync(`notes/${part}.tsv`, "utf8").split("\n").filter((l) => l !== "" && !l.startsWith("#")).map((line) => {
    const [id = "", , text = "", ...rest] = line.split("\t");
    return { id, text, f: Object.fromEntries(rest.map((c) => [c.slice(0, c.indexOf("=")), c.slice(c.indexOf("=") + 1)])) };
  });
}
const front = (slug: string, key: string) => new RegExp(`^${key}: (.*)$`, "m").exec(readFileSync(`posts/${slug}/post.md`, "utf8"))?.[1] ?? "";

const out: Question[] = [];
const add = (q: Question) => out.push(q);
const month = `${2015 + Math.floor(LAST_MONTH / 12)}-${String((LAST_MONTH % 12) + 1).padStart(2, "0")}`;

// Official prices: every 20th dollar item that is current, and one good-deal price.
const current = PRICES.filter((p) => p.unit === "S$" && p.start + p.cents.length - 1 === LAST_MONTH);
for (const at of [0, 20, 40, 60, 80]) {
  const p = current[at];
  if (!p) continue;
  add({ id: `price-${at}`, question: `What was the official average retail price of ${p.name} in Singapore in ${month}?`, answer: (p.cents.at(-1) ?? 0) / 100, kind: "number", as_of: month, where: "api/prices.txt average_sgd" });
}
{
  const p = current[10];
  if (p) add({ id: "deal-10", question: `At what price does ${p.name} count as a good deal in Singapore?`, answer: p.deal / 100, kind: "number", as_of: month, where: "api/prices.txt good_deal_at_sgd" });
}

// Tampines food.
const priced = SPREADS.filter((s) => s.typ > 0).sort((a, b) => a.n.localeCompare(b.n));
for (const s of priced.slice(0, 2)) add({ id: `typical-${s.n}`, question: `What is the typical price of a ${s.sh === 1 ? "shared dish" : s.f === "d" ? "drink" : s.f === "s" ? "snack" : "main"} at ${s.n} (${s.p}) in Tampines?`, answer: s.typ, kind: "number", as_of: s.asof, where: "api/tampines-food/places.txt typical_sgd" });
{
  const s = priced[5];
  if (s) add({ id: `low-${s.n}`, question: `What is the cheapest compared dish price at ${s.n} (${s.p}) in Tampines?`, answer: s.low, kind: "number", as_of: s.asof, where: "api/tampines-food/places.txt low_sgd" });
}
add({ id: "bib-count", question: "How many of the Tampines food places on teoyujie.org are Michelin Bib Gourmand?", answer: SPREADS.filter((s) => s.b === 1).length, kind: "integer", as_of: "", where: "api/tampines-food/places.txt bib_gourmand" });
add({ id: "place-count", question: "How many places to eat in Tampines does teoyujie.org list?", answer: SPREADS.length, kind: "integer", as_of: "", where: "api/tampines-food/places.txt rows" });
{
  const dishes = SPREADS.flatMap((s) => s.items.map(([dish, price, date]) => ({ s, dish, price, date })));
  const dear = [...dishes].sort((a, b) => b.price - a.price || a.dish.localeCompare(b.dish))[0];
  const mid = dishes[Math.floor(dishes.length / 2)];
  for (const d of [dear, mid]) if (d) add({ id: `dish-${d.dish}`, question: `How much does ${d.dish} cost at ${d.s.n} (${d.s.p}) in Tampines?`, answer: d.price, kind: "number", as_of: d.date, where: "api/tampines-food/dishes.txt price_sgd" });
  const rated = SPREADS.filter((s) => s.g).sort((a, b) => (b.g?.c ?? 0) - (a.g?.c ?? 0))[0];
  if (rated?.g) add({ id: `rating-${rated.n}`, question: `What Google rating does ${rated.n} (${rated.p}) in Tampines have?`, answer: rated.g.s, kind: "number", as_of: rated.g.d, where: "api/tampines-food/places.txt google_rating" });
}

// Shop prices that agents noted: the first, the middle and the last noted product with a date.
{
  const seen = notes("products").filter((n) => n.f.date);
  for (const n of [seen[0], seen[Math.floor(seen.length / 2)], seen.at(-1)]) if (n) add({ id: `product-${n.id}-${n.f.shop}`, question: `What price did teoyujie.org record for "${n.text}" (${n.f.pack}) at ${n.f.shop}?`, answer: Number(n.f.price), kind: "number", as_of: n.f.date ?? "", where: "api/products.txt price_low_sgd" });
}

// Quality checks: the first pass and the first fail.
for (const verdict of ["pass", "fail"]) {
  const n = notes("checks").find((c) => c.f.verdict === verdict);
  if (n) add({ id: `check-${n.id}`, question: `On teoyujie.org, did the product with check id ${n.id} pass or fail its quality check?`, answer: verdict, kind: "text", as_of: n.f.date ?? "", where: "api/checks.txt verdict" });
}

// Calls on prices.
{
  const calls = notes("calls");
  for (const c of [calls[0], calls.at(-1)]) if (c) add({ id: `call-${c.id}`, question: `What is the middle forecast of the Singapore CPI series ${c.f.series} for ${c.f.month} in the dated calls on teoyujie.org?`, answer: Number(c.f.mid), kind: "number", as_of: c.f.made ?? "", where: "api/calls.txt mid" });
  add({ id: "call-count", question: "How many dated calls on Singapore prices does teoyujie.org have on record?", answer: calls.length, kind: "integer", as_of: "", where: "api/calls.txt rows" });
}

// The bet ledger.
{
  const bets = notes("forecasts");
  for (const b of [bets[0], bets[Math.floor(bets.length / 2)]]) if (b) add({ id: `bet-price-${b.id}`, question: `In the forecasters' bet ledger on teoyujie.org, what was the market's YES price when ${b.f.by} made bet ${b.id}?`, answer: Number(b.f.price), kind: "number", as_of: b.f.price_at?.slice(0, 10) ?? "", where: "api/bets.txt price" });
  for (const b of [bets[1], bets.at(-1)]) if (b) add({ id: `bet-due-${b.id}`, question: `When is bet ${b.id} by ${b.f.by} in the forecasters' ledger on teoyujie.org due?`, answer: b.f.due ?? "", kind: "date", as_of: "", where: "api/bets.txt due" });
}

// Spending groups.
for (const at of [0, 5]) {
  const g = SPENDING[at];
  if (g) add({ id: `share-${g[0]}`, question: `What share of Singapore household spending goes to ${g[0].toLowerCase()}, according to teoyujie.org?`, answer: g[2], kind: "number", as_of: "2023", where: "api/advice.txt share" });
}

// Posts.
add({ id: "papers", question: "How many papers and notes are in the mathematics reading list on teoyujie.org?", answer: readFileSync("posts/mathematics-reading-list/post.md", "utf8").split("\n").filter((l) => /^- \[/.test(l)).length, kind: "integer", as_of: "", where: "api/mathematics-reading-list/index.txt" });
add({ id: "tampines-date", question: "When was the post on Tampines food on teoyujie.org published?", answer: front("tampines-food", "date"), kind: "date", as_of: "", where: "api/tampines-food/index.txt" });

if (out.length !== 30) throw new Error(`derive: ${out.length} questions, not 30`);
writeFileSync("tests/questions/questions.jsonl", `${out.map((q) => JSON.stringify(q)).join("\n")}\n`);
console.log(`wrote ${out.length} questions`);

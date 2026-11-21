import { SPREADS } from "./kit/food-data.ts";
import { adviceRows, checkRows, productRows, type Row, type Value } from "./kit/life.ts";
import { LAST_MONTH } from "./kit/price-data.ts";
import { priceRows, REPO, scoreCalls, SITE, type Deal, type Note } from "./notes.ts";
import type { Bet } from "./bets.ts";
import { lineDay } from "./blame.ts";

// Every table of the agent API, in one place: its columns with types, and its rows as numbers, strings,
// booleans or null. The same definition writes the TSV and its entry in /api/datapackage.json, so the two
// cannot disagree. Columns are only ever added, at the end; tests/schema.test.ts holds them to that.

export type Type = "string" | "number" | "integer" | "boolean" | "date" | "datetime";

export interface Column {
  name: string;
  type: Type;
  description: string;
  required?: boolean;
  pattern?: string;
  enum?: readonly string[];
}

export interface Table {
  name: string;
  path: string;
  title: string;
  description: string;
  // Where the rows come from, as the datapackage "sources" field.
  sources: readonly { title: string; path: string }[];
  primaryKey?: readonly string[];
  columns: readonly Column[];
  rows: Row[];
}

// A date at the precision the source gives: a year, a month or a day.
const WHEN = "^\\d{4}(-\\d\\d(-\\d\\d)?)?$";
const AS_OF: Column = { name: "as_of", type: "string", pattern: WHEN, required: true, description: "The day the newest fact in the row was read from its source, at the precision the source gives: YYYY, YYYY-MM or YYYY-MM-DD. Cite it with the row." };
const asOf = (description: string, required = true): Column => ({ ...AS_OF, required, description: `${AS_OF.description} ${description}` });
const source = (description: string, required = true): Column => ({ name: "source", type: "string", required, description: `An https link to where the row's facts were read. ${description}` });
const SGD = (name: string, description: string, required = false): Column => ({ name, type: "number", required, description: `${description} In Singapore dollars, as a plain number.` });

const life = (path: string) => ({ title: "Base data of the Singapore prices post", path: `${REPO}/blob/main/${path}` });
const notesFile = (part: string) => ({ title: `notes/${part}.tsv, written by agents through git`, path: `${SITE}/notes/${part}.txt` });

function priceMonth(): string {
  // Month 0 of the official series is January 2015.
  const year = 2015 + Math.floor(LAST_MONTH / 12);
  return `${year}-${String((LAST_MONTH % 12) + 1).padStart(2, "0")}`;
}

const PRICE_TABLE = "https://tablebuilder.singstat.gov.sg/table/TS/M213761";
const CPI_TABLE = "https://tablebuilder.singstat.gov.sg/table/TS/M213751";

function prices(): Table {
  const month = priceMonth();
  return {
    name: "prices", path: "api/prices.txt", title: "Price list",
    description: `The latest official average retail price of each good that SingStat prices in dollars, and the price that counts as a good deal. Every row is the month ${month}.`,
    sources: [{ title: "SingStat table M213761, average retail prices", path: PRICE_TABLE }],
    primaryKey: ["id"],
    columns: [
      { name: "id", type: "string", required: true, description: "The id to use in notes/prices.tsv." },
      { name: "item", type: "string", required: true, description: "The good and its unit, as SingStat names it." },
      SGD("average_sgd", "The official average price for the month in as_of.", true),
      SGD("good_deal_at_sgd", "A price at or under this is a good deal: the low end of what the item's own history and season predict.", true),
      asOf("The month of the official figure."),
      source("SingStat table M213761."),
    ],
    rows: priceRows().map((row) => ({ id: row.id, item: row.name, average_sgd: row.average, good_deal_at_sgd: row.deal, as_of: month, source: PRICE_TABLE })),
  };
}

function products(): Table {
  return {
    name: "products", path: "api/products.txt", title: "Products",
    description: "One row per product listing on the Singapore prices post. The id identifies the item and repeats. The row's source is its url column. The display columns price and unit_price are kept as the page shows them; the _sgd columns give the same figures as numbers.",
    sources: [life("src/kit/life-data.ts"), notesFile("products")],
    columns: [
      { name: "id", type: "string", required: true, description: "The item id, for notes/products.tsv. Repeats across the products of one item." },
      { name: "item", type: "string", required: true, description: "The item, such as Toothpaste." },
      { name: "group", type: "string", required: true, description: "The spending group the item belongs to, as in advice.txt." },
      { name: "unit", type: "string", description: "The unit that unit_price is per, shared by every row of the item. Empty where the item has none." },
      { name: "product", type: "string", required: true, description: "The product as the shop names it." },
      { name: "shop", type: "string", required: true, description: "The shop." },
      { name: "price", type: "string", required: true, description: "The price as the page shows it. Can hold a range, an offer end date or several amounts. Use price_low_sgd and price_high_sgd for arithmetic." },
      { name: "pack", type: "string", required: true, description: "What the price covers." },
      { name: "unit_price", type: "string", required: true, description: "The unit price as the page shows it, or n/a." },
      { name: "url", type: "string", required: true, description: "The product page." },
      SGD("price_low_sgd", "The price, or the low end of a range. Empty where price holds no single figure or range: a multi-buy, a fee plus a rate, several tiers, or a pre-GST figure."),
      SGD("price_high_sgd", "The high end of a range; equal to price_low_sgd for one price. Empty where the price is open-ended (\"From S$5\") or holds no figure."),
      SGD("unit_price_low_sgd", "The unit price, per unit_price_per, or the low end of a range. Empty where unit_price holds no single figure or range. Compare rows only where unit_price_per is the same: some items mix units."),
      SGD("unit_price_high_sgd", "The high end of the unit price range; equal to unit_price_low_sgd for one figure."),
      asOf("For a row from notes, the day the agent saw the price. For a base row, 2026-11 (read on 8 and 9 November 2026), or the day its line in life-data.ts changed after 11 November, when it was read again."),
      { name: "pick", type: "boolean", required: true, description: "true for the item's pick: the cheapest product that passes its quality check, excluding offers past their recorded end date in Singapore on the build day. At most one per item." },
      { name: "listing", type: "boolean", required: true, description: "true where the price is from a search listing, not an opened product page." },
      { name: "unit_price_per", type: "string", description: "What unit_price_low_sgd is per, as the display string gives it, such as /kg or /100 ml. Empty where there is no unit price figure." },
      { name: "until", type: "date", description: "The last day of an offer price, for rows from notes. A base row's offer end, if any, is only in the price display string, without a year." },
    ],
    rows: productRows(),
  };
}

function checks(): Table {
  return {
    name: "checks", path: "api/checks.txt", title: "Product checks",
    description: "Every product whose item has a quality check, the check, and what a product page showed, if an agent has read one.",
    sources: [life("src/kit/life-data.ts"), notesFile("checks")],
    primaryKey: ["id"],
    columns: [
      { name: "id", type: "string", required: true, description: "The product id, for notes/checks.tsv." },
      { name: "item", type: "string", required: true, description: "The item." },
      { name: "product", type: "string", required: true, description: "The product." },
      { name: "shop", type: "string", required: true, description: "The shop." },
      { name: "url", type: "string", required: true, description: "The product page." },
      { name: "check", type: "string", required: true, description: "What to look for." },
      { name: "answer", type: "string", required: true, enum: ["pass or fail", "recorded"], description: "How a check of this item is answered." },
      { name: "now", type: "string", description: "The verdict and fact as one display string. Empty where no page has been read. Use verdict and fact." },
      { name: "verdict", type: "string", enum: ["pass", "fail", "recorded"], description: "The verdict. Empty where no page has been read." },
      { name: "fact", type: "string", description: "The fact as the page states it. Empty where no page has been read." },
      asOf("The later of the day the product was listed and the day its check was read."),
      source("The page the check was read on, or the product page where no check has been read."),
      { name: "verdict_as_of", type: "date", description: "The day the check was read: cite it with verdict and fact. Empty where no page has been read." },
    ],
    rows: checkRows(),
  };
}

function advice(): Table {
  return {
    name: "advice", path: "api/advice.txt", title: "Advice",
    description: "The 12 spending groups of the Singapore prices post and each piece of advice in them, with its reason and source. A group with no advice has one row with empty advice.",
    sources: [life("src/kit/life-data.ts"), notesFile("advice"), { title: "SingStat table M212981, household expenditure", path: "https://tablebuilder.singstat.gov.sg/table/TS/M212981" }],
    columns: [
      { name: "id", type: "string", required: true, description: "The group id, for notes/advice.tsv." },
      { name: "group", type: "string", required: true, description: "The spending group, from the Household Expenditure Survey 2023." },
      { name: "share", type: "number", required: true, description: "The group's share of household spending, in percent, such as 16.3." },
      { name: "lever", type: "string", enum: ["check", "pick", "when", "much"], description: "check: a quality check; pick: the lowest price that passes; when: timing; much: the amount to buy." },
      { name: "advice", type: "string", description: "The thing to do." },
      { name: "why", type: "string", description: "The reason, with its figure where the source gives one." },
      { name: "worth", type: "string", description: "What following it is worth, in a few words, where the post gives a figure." },
      { ...AS_OF, required: false, description: "The day the advice was written or last changed: the day its line last changed in git (notes/advice.tsv for advice from notes, src/kit/life-data.ts for the post's own), or 2026-11 for the post's own advice not changed since the post moved into that file on 11 November 2026. Figures inside why keep the date their source gives. Empty only for a group with no advice." },
      source("The page the reason comes from. Advice the post gives without a link cites the post itself. Empty only for a group with no advice.", false),
      { name: "share_as_of", type: "string", pattern: WHEN, required: true, description: "The year of the survey that share comes from: cite it with share." },
    ],
    rows: adviceRows(),
  };
}

function calls(calls: Note[], outcomes: Note[]): Table {
  const scored = scoreCalls(calls, outcomes);
  const script = `${REPO}/blob/main/scripts/prices/passthrough.py`;
  return {
    name: "calls", path: "api/calls.txt", title: "Calls on Singapore prices",
    description: "Dated 80% ranges for Singapore CPI series, each made before its month from the model named, never changed after it is merged. Outcomes are read from SingStat table M213751 when the month is published. Index values: 2024 = 100.",
    sources: [notesFile("calls"), notesFile("outcomes"), { title: "SingStat table M213751, consumer price index", path: CPI_TABLE }],
    primaryKey: ["id"],
    columns: [
      { name: "id", type: "string", required: true, description: "The call id: the good and the month." },
      { name: "series", type: "string", required: true, description: "The CPI series number in table M213751, such as 1.01.4.4 for eggs." },
      { name: "month", type: "string", required: true, pattern: "^\\d{4}-\\d\\d$", description: "The month the call is about, YYYY-MM." },
      { name: "low", type: "number", required: true, description: "The bottom of the 80% range, as an index value." },
      { name: "mid", type: "number", required: true, description: "The model point forecast, as an index value; not fitted as the median." },
      { name: "high", type: "number", required: true, description: "The top of the 80% range, as an index value." },
      { name: "start_value", type: "number", description: "The index value the call starts from, as its text states." },
      { name: "start_month", type: "string", pattern: "^\\d{4}-\\d\\d$", description: "The month of start_value, YYYY-MM." },
      { name: "model", type: "string", required: true, description: "The forecast that made it, as named in scripts/prices/passthrough.py." },
      { name: "made", type: "date", required: true, description: "The day the call was made." },
      { name: "actual", type: "number", description: "The published index value for the month. Empty while the call is open." },
      { name: "inside", type: "boolean", description: "true where actual is within low to high. Empty while the call is open." },
      asOf("The day the outcome was read, or the day the call was made while it is open."),
      source("The SingStat table for an outcome, or the script that made an open call."),
      { name: "good", type: "string", description: "The good the series measures, as the call names it, such as eggs." },
    ],
    rows: scored.rows.map(({ call, outcome, inside }) => {
      const f = call.fields;
      const start = /from ([\d.]+) in (\d{4}-\d\d)/.exec(call.text);
      const good = /^The CPI for (.+?) in \d{4}-\d\d/.exec(call.text)?.[1] ?? null;
      return { good, id: call.id, series: f.series ?? "", month: f.month ?? "", low: Number(f.low), mid: Number(f.mid), high: Number(f.high), start_value: start ? Number(start[1]) : null, start_month: start?.[2] ?? null, model: f.model ?? "", made: f.made ?? "", actual: outcome ? Number(outcome.fields.actual) : null, inside: inside ?? null, as_of: outcome?.fields.date ?? f.made ?? "", source: outcome?.fields.url ?? script };
    }),
  };
}

function deals(seen: Deal[]): Table {
  return {
    name: "deals", path: "api/deals.txt", title: "Deals seen now",
    description: "Shelf prices agents saw in Singapore shops in the last 30 days, against the latest official average for the same unit. Largest saving first. Nobody checked these by hand.",
    sources: [notesFile("prices"), { title: "SingStat table M213761, average retail prices", path: PRICE_TABLE }],
    columns: [
      { name: "id", type: "string", required: true, description: "The item id, as in prices.txt." },
      { name: "item", type: "string", required: true, description: "The good and its unit." },
      SGD("price_sgd", "The shelf price for the unit in item.", true),
      SGD("average_sgd", "The official average, as in prices.txt.", true),
      { name: "below_average_pct", type: "integer", required: true, description: "How far the shelf price is below the average, in whole percent. Negative where it is above." },
      { name: "good_deal", type: "boolean", required: true, description: "true where price_sgd is at or under good_deal_at_sgd in prices.txt." },
      { name: "shop", type: "string", required: true, description: "The shop." },
      { name: "note", type: "string", required: true, description: "The product and pack seen, and any condition." },
      { name: "until", type: "date", description: "The last day of the offer, where the page gives one." },
      asOf("The day the agent saw the price."),
      source("The product page."),
    ],
    rows: seen.map((deal) => ({ id: deal.row.id, item: deal.row.name, price_sgd: deal.price, average_sgd: deal.row.average, below_average_pct: deal.below, good_deal: deal.good, shop: deal.note.fields.shop ?? "", note: deal.note.text, until: deal.note.fields.until ?? null, as_of: deal.note.fields.date ?? "", source: deal.note.fields.url ?? "" })),
  };
}

const BET_COLUMNS: readonly Column[] = [
  { name: "id", type: "string", required: true, description: "The bet id." },
  { name: "by", type: "string", required: true, description: "The person, by the name they give on the site." },
  { name: "made", type: "datetime", required: true, description: "When the item was posted, UTC." },
  { name: "url", type: "string", required: true, description: "The comment or post." },
  { name: "archive", type: "string", required: true, description: "The first archive.org snapshot after posting." },
  { name: "sha256", type: "string", required: true, description: "SHA-256 of the item's text on the record day, as scripts/bets/bets.py defines it." },
  { name: "edited", type: "date", description: "The last edit the site reports, if more than a day after posting." },
  { name: "quote", type: "string", required: true, description: "The person's words that make the claim, exactly." },
  { name: "claim", type: "string", required: true, description: "The question the market resolves, as the market words it." },
  { name: "p", type: "number", description: "The chance of YES the person stated, 0 to 1. Empty where they stated none." },
  { name: "side", type: "string", enum: ["yes", "no"], description: "The side taken, where no chance was stated." },
  { name: "market", type: "string", required: true, description: "The market that prices the claim." },
  { name: "price", type: "number", required: true, description: "The market's YES price just before the item was posted, 0 to 1." },
  { name: "price_at", type: "datetime", required: true, description: "When that price was set, UTC." },
  { name: "source", type: "string", required: true, description: "The only source that settles the bet: the market's own resolution. (In this table, source is the settling source, not where the row was read; url and archive are that.)" },
  { name: "due", type: "date", required: true, description: "The day the source closes." },
  { name: "fermi", type: "string", required: true, description: "none, or the physical limit the claim implies and its amount." },
  { name: "fermi_url", type: "string", description: "The source of the limit." },
  { name: "outcome", type: "string", required: true, enum: ["open", "yes", "no", "void"], description: "open, or how the source resolved." },
  { name: "settled", type: "date", description: "The day the source resolved." },
  { name: "evidence", type: "string", description: "The page of the source that shows the resolution." },
  { name: "factor", type: "number", description: "The multiplier applied to the running score, unrounded. Only the first bet per person and market uses the price rule; settled repeats are 1. Empty while open or void." },
  { name: "running_e", type: "number", required: true, description: "The person's running product of applied factors so far, unrounded. Conditional pricing can justify an e-value interpretation; marginal calibration alone is insufficient." },
  { name: "revises", type: "string", description: "The id of an earlier bet by the same person that this one revises." },
  { name: "correction", type: "string", description: "What changed after a dispute, and why." },
  asOf("The day the bet settled, or the day its line in notes/forecasts.tsv last changed while it is open."),
  { name: "repeat_of", type: "string", description: "ID of the earliest row by the same person for the exact recorded market URL; empty for the first row." },
];

function bets(scored: Bet[]): Table {
  return {
    name: "bets", path: "api/bets.txt", title: "Scored bets",
    description: "The bet ledger of the 40 ranked forecasters in time order, with each settled bet's applied factor and each person's running product. /forecasters.html is built from it.",
    sources: [notesFile("forecasts")],
    primaryKey: ["id"],
    columns: BET_COLUMNS,
    rows: scored.map((bet) => {
      const f = bet.note.fields;
      const row: Row = {};
      for (const column of BET_COLUMNS) row[column.name] = f[column.name] ?? null;
      const num = (v: string | undefined) => (v === undefined || v === "" ? null : Number(v));
      return { ...row, id: bet.note.id, quote: bet.note.text, p: num(f.p), price: num(f.price), fermi: bet.fermi.text, fermi_url: bet.fermi.url === "" ? null : bet.fermi.url, factor: bet.factor, running_e: bet.running, repeat_of: bet.repeatOf, as_of: f.settled ?? lineDay("notes/forecasts.tsv", [`${bet.note.id}\t`]) };
    }),
  };
}

const PRICE_IS = (item: (typeof SPREADS)[number]) => (item.sh === 1 ? "shared dish" : item.f === "s" ? "snack" : item.f === "d" ? "drink" : "main");
const nonZero = (n: number) => (n === 0 ? null : n);

function places(): Table {
  const kind = { h: "hawker", r: "restaurant", c: "cafe", f: "fast food" };
  return {
    name: "tampines-places", path: "api/tampines-food/places.txt", title: "Tampines food places",
    description: "Places to eat in Tampines. Join to tampines-dishes on name, venue and unit. typical_sgd, low_sgd and high_sgd are empty where no dish price is compared.",
    sources: [life("src/kit/food-data.ts")],
    columns: [
      { name: "name", type: "string", required: true, description: "The place." },
      { name: "type", type: "string", required: true, enum: Object.values(kind), description: "The kind of place." },
      { name: "cuisine", type: "string", required: true, description: "The cuisine." },
      { name: "venue", type: "string", required: true, description: "The hawker centre, mall or street." },
      { name: "unit", type: "string", description: "The stall or shop unit. Can be empty." },
      { name: "status", type: "string", required: true, description: "open, or what else is known." },
      { name: "price_is", type: "string", required: true, enum: ["main", "snack", "drink", "shared dish"], description: "What typical_sgd prices." },
      SGD("typical_sgd", "The typical price of a compared dish. Empty where there is none."),
      SGD("low_sgd", "The lowest compared dish price. Empty where there is none."),
      SGD("high_sgd", "The highest compared dish price. Empty where there is none."),
      { name: "prices_as_of", type: "string", pattern: WHEN, description: "The newest compared dish date. Empty where there is none." },
      { name: "google_rating", type: "number", description: "The Google rating, 1 to 5." },
      { name: "google_reviews", type: "integer", description: "The number of Google reviews." },
      { name: "bib_gourmand", type: "string", required: true, enum: ["yes", "no"], description: "Whether Michelin lists it as Bib Gourmand." },
      { name: "google_rating_as_of", type: "string", pattern: WHEN, description: "When the rating was read." },
      { name: "google_rating_source", type: "string", description: "Where the rating was read." },
      asOf("prices_as_of where the place has a compared price, else google_rating_as_of. The rating has its own date and source columns. Empty where no fact in the row has a date.", false),
      source("The page of the newest compared dish price, else the rating source. A place's other dish prices and their sources are in tampines-dishes.", false),
    ],
    rows: SPREADS.map((item) => {
      const dated = [...item.items].filter(([, , date]) => date === item.asof);
      const priceSource = dated[0]?.[3] ?? null;
      const rated = item.g?.d ?? "";
      const asof = item.asof !== "" ? item.asof : rated;
      const sourceUrl = asof === "" ? null : asof === item.asof ? priceSource : (item.g?.u ?? null);
      return { name: item.n, type: kind[item.k], cuisine: item.cu, venue: item.p, unit: item.u, status: item.st, price_is: PRICE_IS(item), typical_sgd: nonZero(item.typ), low_sgd: nonZero(item.low), high_sgd: nonZero(item.high), prices_as_of: item.asof === "" ? null : item.asof, google_rating: item.g?.s ?? null, google_reviews: item.g?.c ?? null, bib_gourmand: item.b === 1 ? "yes" : "no", google_rating_as_of: item.g?.d || null, google_rating_source: item.g?.u || null, as_of: asof === "" ? null : asof, source: sourceUrl };
    }),
  };
}

function dishes(): Table {
  const rows: Row[] = [];
  for (const item of SPREADS) {
    for (const [dish, price, date, src] of item.items) rows.push({ name: item.n, venue: item.p, unit: item.u, price_is: PRICE_IS(item), dish, price_sgd: price, price_as_of: date, source: src, as_of: date });
    for (const [dish, price, date, src, kind] of item.other ?? []) rows.push({ name: item.n, venue: item.p, unit: item.u, price_is: `${kind} (not compared)`, dish, price_sgd: price, price_as_of: date, source: src, as_of: date });
  }
  return {
    name: "tampines-dishes", path: "api/tampines-food/dishes.txt", title: "Tampines food dish prices",
    description: "One row per dated menu item. A price_is ending in (not compared) is left out of the place's typical price. See How I built this in the Tampines food post for charges and serving sizes.",
    sources: [life("src/kit/food-data.ts")],
    columns: [
      { name: "name", type: "string", required: true, description: "The place, as in tampines-places." },
      { name: "venue", type: "string", required: true, description: "The venue." },
      { name: "unit", type: "string", description: "The stall or shop unit. Can be empty." },
      { name: "price_is", type: "string", required: true, description: "main, snack, drink or shared dish, or one of those with (not compared), or serving unclear (not compared)." },
      { name: "dish", type: "string", required: true, description: "The menu item." },
      SGD("price_sgd", "The price on the menu.", true),
      { name: "price_as_of", type: "string", required: true, pattern: WHEN, description: "When the price was seen, at the precision the source gives." },
      source("The page the price was read on."),
      asOf("The same as price_as_of."),
    ],
    rows,
  };
}

// The three hourly or weekly feeds that the server writes. They have comment lines and no header row.
// Their hashes are in /feeds-manifest.json, which the server writes with them.
export const FEEDS: readonly { name: string; path: string; title: string; description: string; columns: readonly Column[] }[] = [
  {
    name: "reading", path: `${SITE}/reading.txt`, title: "Reading feed",
    description: "About 70 links on mathematics, politics, Hacker News and EDMW, newest first after notes. Rebuilt by the server each hour; the first comment line gives the build time. Its as_of is the date column and its source is the link column.",
    columns: [{ name: "id", type: "string", required: true, description: "The id for notes/reading.tsv." }, { name: "date", type: "date", required: true, description: "The item's date." }, { name: "source", type: "string", required: true, description: "The site or forum." }, { name: "title", type: "string", required: true, description: "The title." }, { name: "link", type: "string", required: true, description: "The item." }],
  },
  {
    name: "forecasters-feed", path: `${SITE}/forecasters.txt`, title: "Forecasters feed",
    description: "New comments and posts by the 40 ranked forecasters that may make or revise a checkable claim and are not in the bet ledger yet, for an agent to record or pass over. Rebuilt by the server each hour.",
    columns: [{ name: "id", type: "string", required: true, description: "The item id." }, { name: "date", type: "date", required: true, description: "The item's date." }, { name: "source", type: "string", required: true, description: "The person and the site." }, { name: "title", type: "string", required: true, description: "The title." }, { name: "link", type: "string", required: true, description: "The item." }, { name: "match", type: "string", required: true, description: "Why it is a candidate: up to 300 characters around the words that look like a claim, or \"links a market\"." }],
  },
  {
    name: "singapore-policy-actionables", path: `${SITE}/singapore-policy-actionables.txt`, title: "Singapore policy actionables",
    description: "New Singapore government documents, ranked by what a resident can act on. Rebuilt by the server each Saturday; the first comment line gives the fetch date.",
    columns: [{ name: "id", type: "string", required: true, description: "The id for notes/policy.tsv." }, { name: "score", type: "number", required: true, description: "The rank score after notes." }, { name: "date", type: "date", required: true, description: "The document's date." }, { name: "source", type: "string", required: true, description: "The agency." }, { name: "kind", type: "string", required: true, description: "The kind of document." }, { name: "lenses", type: "string", description: "What a resident can act on." }, { name: "why", type: "string", description: "Why it ranks." }, { name: "title", type: "string", required: true, description: "The title." }, { name: "link", type: "string", required: true, description: "The document." }],
  },
];

export function tables(input: { calls: Note[]; outcomes: Note[]; seen: Deal[]; bets: Bet[] }): Table[] {
  return [prices(), products(), checks(), advice(), calls(input.calls, input.outcomes), deals(input.seen), bets(input.bets), places(), dishes()];
}

function cell(value: Value): string {
  if (value === null) return "";
  return String(value).replace(/[\t\n\r]/g, " ");
}

// Checks every row against its columns, so a wrong type never reaches the site.
export function tableTsv(table: Table): string {
  const names = table.columns.map((column) => column.name);
  const lines = [names.join("\t")];
  table.rows.forEach((row, at) => {
    const extra = Object.keys(row).filter((key) => !names.includes(key));
    if (extra.length > 0) throw new Error(`${table.path} row ${at + 1}: no column is named ${extra.join(", ")}`);
    for (const column of table.columns) {
      const value = row[column.name] ?? null;
      const where = `${table.path} row ${at + 1}, ${column.name}`;
      if (value === null || value === "") {
        if (column.required) throw new Error(`${where}: is empty, but the column is required`);
        continue;
      }
      const ok = column.type === "number" ? typeof value === "number" && Number.isFinite(value)
        : column.type === "integer" ? Number.isInteger(value)
        : column.type === "boolean" ? typeof value === "boolean"
        : column.type === "date" ? typeof value === "string" && /^\d{4}-\d\d-\d\d$/.test(value)
        : column.type === "datetime" ? typeof value === "string" && /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ$/.test(value)
        : typeof value === "string";
      if (!ok) throw new Error(`${where}: ${JSON.stringify(value)} is not a ${column.type}`);
      if (column.pattern && !new RegExp(column.pattern).test(String(value))) throw new Error(`${where}: ${JSON.stringify(value)} does not match ${column.pattern}`);
      if (column.enum && !column.enum.includes(String(value))) throw new Error(`${where}: ${JSON.stringify(value)} is not one of ${column.enum.join(", ")}`);
    }
    lines.push(names.map((name) => cell(row[name] ?? null)).join("\t"));
  });
  return `${lines.join("\n")}\n`;
}

export function asOfRange(table: Table): { oldest: string; newest: string } | null {
  const days = table.rows.map((row) => row.as_of).filter((day): day is string => typeof day === "string" && day !== "").sort();
  return days.length === 0 ? null : { oldest: days[0] ?? "", newest: days[days.length - 1] ?? "" };
}

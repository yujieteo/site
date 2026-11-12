import { mkdirSync, writeFileSync } from "node:fs";
import { textLines, textVersion, type Post } from "./post.ts";
import { SPREADS } from "./kit/food-data.ts";
import { SITE } from "./notes.ts";

// The agent API: static text files for language models. A weak model reads
// /llms.txt, then one post index, then only the sections it needs.

export { SITE };
const PART_CHARS = 8000;
const CHARS_PER_TOKEN = 4;

export interface Part {
  file: string;
  label: string;
  holds: string;
  tokens: number;
  text: string;
}

export interface PostApi {
  post: Post;
  tokens: number;
  parts: Part[];
}

interface Resource {
  href: string;
  title: string;
  about: string;
  postSlug?: string;
}

const DATA: readonly Resource[] = [
  { href: "/api/tampines-food/places.txt", title: "Tampines food places", postSlug: "tampines-food", about: `TSV with ${SPREADS.length} places. Join to the dishes file on name, venue and unit. A typical_sgd value of 0 means there is no typical price. prices_as_of gives the newest compared dish date.` },
  { href: "/api/tampines-food/dishes.txt", title: "Tampines food dish prices", postSlug: "tampines-food", about: "TSV with one row per dated menu item. unit is the stall or store identifier and can be empty. price_sgd is numeric, and price_as_of has year, month or day precision. A price_is value ending in (not compared) excludes the row from the place’s typical price. See How I built this in the Tampines food post for dates, charges and serving sizes." },
  { href: "/hn-forecasters.opml", title: "Hacker News forecasters", about: "OPML list of the RSS feeds of the ranked commenters. Goes with the post on Hacker News forecasters." },
  { href: "/lw-forecasters.opml", title: "LessWrong forecasters", about: "OPML list of the comment and post feeds of the ranked writers. Goes with the post on LessWrong forecasters." },
];

const LIVE: readonly Resource[] = [
  { href: "/singapore-policy-actionables.txt", title: "Singapore policy actionables", about: "TSV with a header. New Singapore government documents, ranked by what a resident can act on. The server rebuilds it each Saturday." },
  { href: "/reading.txt", title: "Reading feed", about: "TSV with a header. About 70 links on mathematics, politics, Hacker News and EDMW. The server rebuilds it each hour." },
  { href: "/forecasters.txt", title: "Forecasters feed", about: "TSV with a header. The latest comments and posts from the 20 ranked Hacker News forecasters and the 20 ranked LessWrong forecasters. The server rebuilds it each hour." },
  { href: "/notes/forecasts.txt", title: "Forecasts", about: "TSV. Forecasts by those people, each with its date, link and outcome: open, right, partly or wrong." },
  { href: "/api/deals.txt", title: "Deals seen now", about: "Shelf prices seen in Singapore shops in the last 30 days, against the official average price." },
  { href: "/api/prices.txt", title: "Price list", about: "TSV. The latest official average price of 84 goods and the price that counts as a good deal." },
  { href: "/api/products.txt", title: "Products", postSlug: "singapore-value-buys", about: "TSV with one row per product listing on the Singapore prices post. id identifies the item group and can repeat. price and unit_price are display strings that can contain ranges, promotion dates or multiple amounts. The export has no per-row observation date." },
  { href: "/api/checks.txt", title: "Product checks", about: "TSV with a header. The products whose item has a quality check, the check, and what a page showed." },
  { href: "/api/advice.txt", title: "Advice", about: "TSV with a header. The 12 spending groups of the Singapore prices post and the advice in each, by lever." },
];

function tokens(text: string): number {
  return Math.ceil(text.length / CHARS_PER_TOKEN);
}

function sectionId(heading: string): string {
  return heading.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function sections(lines: string[]): { heading: string; lines: string[] }[] {
  const found = [{ heading: "Introduction", lines: [] as string[] }];
  for (const line of lines) {
    if (line.startsWith("## ")) found.push({ heading: line.slice(3).trim(), lines: [] });
    else found[found.length - 1]?.lines.push(line);
  }
  return found.filter((section) => section.lines.join("").trim() !== "");
}

function blockChars(lines: string[], from: number): number {
  let size = 0;
  for (let at = from; at < lines.length; at++) {
    if (at > from && (lines[at] ?? "").startsWith("### ")) break;
    size += (lines[at] ?? "").length + 1;
  }
  return size;
}

// Cuts a long section into parts. It cuts before a third-level heading where
// it can, and repeats the header of a table that it has to cut.
function pack(lines: string[]): string[][] {
  const parts: string[][] = [];
  let part: string[] = [];
  let size = 0;
  let header: string[] = [];
  for (let at = 0; at < lines.length; at++) {
    const line = lines[at] ?? "";
    const next = lines[at + 1] ?? "";
    if (!line.startsWith("|")) header = [];
    else if (header.length === 0 && next.startsWith("|-")) header = [line, next];
    const need = line.startsWith("### ") ? blockChars(lines, at) : line.length + 1;
    if (size > 0 && size + need > PART_CHARS) {
      parts.push(part);
      part = header.length > 0 && !header.includes(line) ? [...header] : [];
      size = 0;
    }
    part.push(line);
    size += line.length + 1;
  }
  if (part.join("").trim() !== "") parts.push(part);
  return parts;
}

function holds(lines: string[]): string {
  const found: string[] = [];
  for (const line of lines) {
    const bold = line.length < 80 ? /^\*\*(.+?)\*\*/.exec(line) : null;
    if (line.startsWith("### ")) found.push(line.slice(4).trim());
    else if (bold) found.push(bold[1] ?? "");
    if (found.length > 0 || line.trim() === "" || line.startsWith("|-") || line.startsWith("| Item")) continue;
    const text = (line.startsWith("|") ? (line.split("|")[1] ?? "") : line).replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/[*_#>↗]/g, "").replace(/^- /, "").trim();
    if (text === "") continue;
    const short = text.length > 60 ? `${text.slice(0, 60).trimEnd()}…` : text;
    found.push(line.startsWith("|") ? `table rows from "${short}"` : short);
  }
  return found.join("; ");
}

export function postApi(post: Post): PostApi {
  const index = `${SITE}/api/${post.slug}/index.txt`;
  const parts: Part[] = [];
  const seen = new Set<string>(["index", "whole-post"]);
  let total = 0;
  for (const section of sections(textLines(post.source))) {
    const id = sectionId(section.heading);
    if (id === "" || seen.has(id)) throw new Error(`${post.slug}: the section "${section.heading}" needs a name of its own`);
    seen.add(id);
    const cut = pack(section.lines);
    for (let n = 0; n < cut.length; n++) {
      const many = cut.length > 1;
      const label = many ? `${section.heading}, part ${n + 1} of ${cut.length}` : section.heading;
      const file = many ? `${id}-${n + 1}.txt` : `${id}.txt`;
      const body = (cut[n] ?? []).join("\n").trim();
      const after = n + 1 < cut.length ? `\n\nNext part: ${SITE}/api/${post.slug}/${id}-${n + 2}.txt` : "";
      const text = `From "${post.title}" (${post.date}). Section list: ${index}\n\n## ${label}\n\n${body}${after}\n`;
      parts.push({ file, label, holds: many ? holds(cut[n] ?? []) : "", tokens: tokens(text), text });
      total += tokens(body);
    }
  }
  return { post, tokens: total, parts };
}

function count(n: number): string {
  return n.toLocaleString("en-US");
}

function postIndex(api: PostApi): string {
  const { post } = api;
  const lines = [`# ${post.title}`, "", `Date: ${post.date}`, `Page for people: ${SITE}/essays/${post.slug}/`, `Whole post in one file: ${SITE}/api/${post.slug}/whole-post.txt (about ${count(api.tokens)} tokens)`, "", "## Summary", ""];
  for (const item of post.summary) lines.push(`- ${item}`);
  const resources = [...DATA, ...LIVE].filter((item) => item.postSlug === post.slug);
  if (resources.length > 0) lines.push("", "## Data", "", ...resourceLines(resources));
  lines.push("", "## Sections", "", "Fetch only the sections you need. Each line gives the size in tokens.", "");
  for (const part of api.parts) {
    const inside = part.holds === "" ? "" : ` Holds: ${part.holds}`;
    lines.push(`- [${part.label}](${SITE}/api/${post.slug}/${part.file}): about ${count(part.tokens)} tokens.${inside}`);
  }
  return `${lines.join("\n")}\n`;
}

function resourceLines(list: readonly Resource[]): string[] {
  return list.map((item) => `- [${item.title}](${SITE}${item.href}): ${item.about}`);
}

function llmsText(apis: PostApi[]): string {
  const lines = [
    "# teoyujie.org",
    "",
    "> Posts and data by Yu Jie Teo: Singapore prices, food and policy, a mathematics reading list, a coaching toolkit and a forecaster ranking. Every address below is public text. Use HTTPS GET. There is no key, no login and no script.",
    "",
    "How to use this site:",
    "",
    "1. Find the post you need in the list below.",
    "2. Fetch its link. You get a summary and a list of sections, each with its size in tokens.",
    "3. Fetch only the sections that answer the question. Do not fetch the whole post unless you need all of it.",
    "4. In your answer, give the source address and its observation date when available. For a post, also give the publication date.",
    "",
    "Token sizes are estimates: the number of characters divided by 4.",
    "",
    "## Posts",
    "",
  ];
  for (const api of apis) lines.push(`- [${api.post.title}](${SITE}/api/${api.post.slug}/index.txt): ${api.post.summary[0] ?? ""} Dated ${api.post.date}. ${api.parts.length} section files, about ${count(api.tokens)} tokens in all.`);
  lines.push("", "## Data", "", ...resourceLines(DATA), "", "## Live", "", ...resourceLines(LIVE), "", "## Optional", "");
  lines.splice(lines.length - 3, 0, "", "## Write", "", `- [How to write notes](${SITE}/api/notes.txt): an agent can adjust the policy ranking, the reading feed, the forecasts, the deals, and the products, product checks and advice of the Singapore prices post by adding lines to a file in git. Read this first.`);
  lines.push(`- [Index as JSON](${SITE}/api/index.json): the same lists for a program.`, `- [Page for people](${SITE}/api/): this API explained, with every address.`);
  return `${lines.join("\n")}\n`;
}

function indexJson(apis: PostApi[]): string {
  const posts = apis.map((api) => ({
    slug: api.post.slug,
    title: api.post.title,
    date: api.post.date,
    summary: api.post.summary,
    tokens: api.tokens,
    index: `${SITE}/api/${api.post.slug}/index.txt`,
    full: `${SITE}/api/${api.post.slug}/whole-post.txt`,
    sections: api.parts.map((part) => ({ title: part.label, tokens: part.tokens, url: `${SITE}/api/${api.post.slug}/${part.file}` })),
  }));
  const resource = (item: Resource) => ({ title: item.title, url: `${SITE}${item.href}`, about: item.about });
  return `${JSON.stringify({ site: SITE, start: `${SITE}/llms.txt`, write: `${SITE}/api/notes.txt`, posts, data: DATA.map(resource), live: LIVE.map(resource) }, null, 1)}\n`;
}

function cell(value: string | number): string {
  return String(value).replace(/[\t\n]/g, " ");
}

function foodTsv(): string {
  const type = { h: "hawker", r: "restaurant", c: "cafe", f: "fast food" };
  const rows = [["name", "type", "cuisine", "venue", "unit", "status", "price_is", "typical_sgd", "low_sgd", "high_sgd", "prices_as_of", "google_rating", "google_reviews", "bib_gourmand", "google_rating_as_of", "google_rating_source"].join("\t")];
  for (const item of SPREADS) {
    const priceIs = item.sh === 1 ? "shared dish" : item.f === "s" ? "snack" : item.f === "d" ? "drink" : "main";
    const row = [item.n, type[item.k], item.cu, item.p, item.u, item.st, priceIs, item.typ, item.low, item.high, item.asof, item.g?.s ?? "", item.g?.c ?? "", item.b === 1 ? "yes" : "no", item.g?.d ?? "", item.g?.u ?? ""];
    rows.push(row.map(cell).join("\t"));
  }
  return `${rows.join("\n")}\n`;
}

function foodDishesTsv(): string {
  const rows = [["name", "venue", "unit", "price_is", "dish", "price_sgd", "price_as_of", "source"].join("\t")];
  for (const item of SPREADS) {
    const priceIs = item.sh === 1 ? "shared dish" : item.f === "s" ? "snack" : item.f === "d" ? "drink" : "main";
    for (const [dish, price, date, source] of item.items) {
      rows.push([item.n, item.p, item.u, priceIs, dish, price, date, source].map(cell).join("\t"));
    }
    for (const [dish, price, date, source, kind] of item.other ?? []) {
      rows.push([item.n, item.p, item.u, `${kind} (not compared)`, dish, price, date, source].map(cell).join("\t"));
    }
  }
  return `${rows.join("\n")}\n`;
}

export function writeApi(out: string, apis: PostApi[]): void {
  for (const api of apis) {
    const dir = `${out}/api/${api.post.slug}`;
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/index.txt`, postIndex(api));
    writeFileSync(`${dir}/whole-post.txt`, textVersion(api.post));
    for (const part of api.parts) writeFileSync(`${dir}/${part.file}`, part.text);
  }
  mkdirSync(`${out}/api/tampines-food`, { recursive: true });
  writeFileSync(`${out}/api/tampines-food/places.txt`, foodTsv());
  writeFileSync(`${out}/api/tampines-food/dishes.txt`, foodDishesTsv());
  writeFileSync(`${out}/api/index.json`, indexJson(apis));
  writeFileSync(`${out}/llms.txt`, llmsText(apis));
}

export const API_DATA = DATA;
export const API_LIVE = LIVE;

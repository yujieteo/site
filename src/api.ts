import { createHash } from "node:crypto";
import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { figureKinds, textLines, textVersion, type Post } from "./post.ts";
import { REPO, SITE } from "./notes.ts";
import { asOfRange, FEEDS, tableTsv, type Column, type Table } from "./tables.ts";
import { headCommit, lastChanged } from "./blame.ts";

// The agent API: static text files for agents that cannot ask a follow-up question and will cite what they
// read. Every file is listed in /api/manifest.json with its size, SHA-256 and as-of date, and every table
// is typed in /api/datapackage.json. A post is cut into one file per heading, never by length.

export { SITE };

// The version of the tables in datapackage.json. A new column raises the minor number. A column is never
// renamed, retyped or removed; tests/schema.test.ts checks that against tests/schema-frozen.json.
export const SCHEMA_VERSION = "1.3.1";

export const CHANGELOG: readonly { version: string; date: string; changes: readonly string[] }[] = [
  {
    version: "1.3.1",
    date: "2026-11-25",
    changes: [
      "prices: good_deal_at_sgd is no longer required. It is empty for the goods that have no good-deal price (the three petrol grades, LPG and diesel), where 1.3.0 gave 0. deals: good_deal is false for those goods.",
    ],
  },
  {
    version: "1.3.0",
    date: "2026-11-22",
    changes: [
      "singapore-policy-actionables gains note, the note for the document: what to do and by when, or the one fact worth knowing and that there is nothing to do. It is required, so a row that has no note yet fails validation.",
    ],
  },
  {
    version: "1.2.0",
    date: "2026-11-20",
    changes: [
      "bets gains repeat_of, the ID of a person's first row on the same recorded market. A settled repeat keeps its quote and outcome but uses a neutral factor of 1.",
    ],
  },
  {
    version: "1.1.0",
    date: "2026-11-15",
    changes: [
      "checks gains verdict_as_of, the day the check was read. as_of stays the later of that and the listing day.",
      "advice gains share_as_of, the survey year of share (2023).",
      "forecasters-feed gains match, which the server has written since the bets-only feed-update was installed on 2026-11-15. 1.0.0 did not list it, so that feed failed validation under 1.0.0.",
      "llms.txt: cite a fact's own date column where it has one (price_at, verdict_as_of, share_as_of, prices_as_of, google_rating_as_of), and the row's as_of otherwise.",
    ],
  },
  {
    version: "1.0.0",
    date: "2026-11-15",
    changes: [
      "First typed release. From here on, columns are only added, at the end of a table.",
      "Every table gains an as_of column, and a source column where it had none. products uses its url column as source. bets keeps its own source column, which names the settling source.",
      "products gains price_low_sgd, price_high_sgd, unit_price_low_sgd, unit_price_high_sgd, pick, listing, unit_price_per and until. calls gains good.",
      "checks gains verdict and fact. advice gains why, worth, as_of and source.",
      "Breaking, once, before the freeze: advice.share is a number (16.3), not a string (16.3%).",
      "Breaking, once, before the freeze: tampines-places typical_sgd, low_sgd and high_sgd are empty where there is no price, not 0.",
      "Breaking, once, before the freeze: bets.factor and bets.running_e are unrounded, not 4 significant figures.",
      "Breaking, once, before the freeze: calls.txt and deals.txt are TSV tables, not Markdown. The call sentence is gone; its start value has its own columns.",
      "Cut: /api/index.json (the manifest and this file replace it).",
    ],
  },
];

export interface Part {
  file: string;
  label: string;
  depth: 2 | 3;
  text: string;
}

export interface PostApi {
  post: Post;
  asOf: string;
  parts: Part[];
}

function sectionId(heading: string): string {
  return heading.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

interface Section {
  heading: string;
  depth: 2 | 3;
  parent: string;
  lines: string[];
}

// One section per second- and third-level heading. The text before a post's first heading is its
// introduction; the text of a second-level section before its first subsection stays with it.
function sections(lines: string[]): Section[] {
  const found: Section[] = [{ heading: "Introduction", depth: 2, parent: "", lines: [] }];
  let parent = "Introduction";
  let fence = false;
  for (const line of lines) {
    if (line.startsWith("```")) fence = !fence;
    if (!fence && line.startsWith("## ")) {
      parent = line.slice(3).trim();
      found.push({ heading: parent, depth: 2, parent: "", lines: [] });
    } else if (!fence && line.startsWith("### ")) found.push({ heading: line.slice(4).trim(), depth: 3, parent, lines: [] });
    else found[found.length - 1]?.lines.push(line);
  }
  return found;
}

// The day the post's text or the data its figures draw on last changed. Code changes do not count.
const FIGURE_DATA: Record<string, readonly string[]> = {
  life: ["src/kit/life-data.ts", "src/kit/price-data.ts", "notes/products.tsv", "notes/checks.tsv", "notes/advice.tsv"],
  food: ["src/kit/food-data.ts", "src/kit/food-model.ts"],
};
function postAsOf(post: Post, postsDir: string): string {
  const days = [lastChanged(`${postsDir}/${post.slug}`)];
  for (const kind of figureKinds(post.source)) days.push(...(FIGURE_DATA[kind] ?? []).map(lastChanged));
  return days.sort().at(-1) ?? post.date;
}

export function postApi(post: Post, postsDir = "posts"): PostApi {
  const index = `${SITE}/api/${post.slug}/index.txt`;
  const asOf = postAsOf(post, postsDir);
  const parts: Part[] = [];
  const seen = new Set<string>(["index", "whole-post"]);
  for (const section of sections(textLines(post.source))) {
    const body = section.lines.join("\n").trim();
    if (body === "") continue;
    const id = section.depth === 3 ? `${sectionId(section.parent)}--${sectionId(section.heading)}` : sectionId(section.heading);
    if (id === "" || seen.has(id)) throw new Error(`${post.slug}: the section "${section.heading}" needs a name of its own`);
    seen.add(id);
    const label = section.depth === 3 ? `${section.parent}: ${section.heading}` : section.heading;
    const text = `From "${post.title}", published ${post.date}, text as of ${asOf}. Section list: ${index}\n\n${"#".repeat(section.depth)} ${label}\n\n${body}\n`;
    parts.push({ file: `${id}.txt`, label, depth: section.depth, text });
  }
  return { post, asOf, parts };
}

function bytes(text: string): number {
  return Buffer.byteLength(text, "utf8");
}

function size(n: number): string {
  return n < 10000 ? `${n.toLocaleString("en-US")} bytes` : `${Math.round(n / 1000).toLocaleString("en-US")} kB`;
}

// Which tables belong to which post, for its index.
const POST_TABLES: Record<string, readonly string[]> = {
  "singapore-value-buys": ["prices", "products", "checks", "advice", "calls", "deals"],
  "tampines-food": ["tampines-places", "tampines-dishes"],
  "hn-forecasters": ["bets"],
  "lw-forecasters": ["bets"],
};

function postIndex(api: PostApi, tablesOf: Table[]): string {
  const { post } = api;
  const whole = bytes(textVersion(post));
  const lines = [`# ${post.title}`, "", `Published: ${post.date}`, `Text as of: ${api.asOf}`, `Page for people: ${SITE}/essays/${post.slug}/`, `Whole post in one file: ${SITE}/api/${post.slug}/whole-post.txt (${size(whole)})`, "", "## Summary", ""];
  for (const item of post.summary) lines.push(`- ${item}`);
  if (tablesOf.length > 0) {
    lines.push("", "## Tables", "", `Typed in ${SITE}/api/datapackage.json. Every row has as_of and source: cite both.`, "");
    for (const table of tablesOf) lines.push(`- [${table.title}](${SITE}/${table.path}): ${table.rows.length} rows. ${table.description}`);
  }
  lines.push("", "## Sections", "", "Fetch only the sections you need. Each line gives the file size.", "");
  for (const part of api.parts) lines.push(`${part.depth === 3 ? "  " : ""}- [${part.label}](${SITE}/api/${post.slug}/${part.file}): ${size(bytes(part.text))}`);
  return `${lines.join("\n")}\n`;
}

function llmsText(apis: PostApi[], all: Table[], files: Map<string, string>): string {
  const lines = [
    "# teoyujie.org",
    "",
    "> Posts and data by Yu Jie Teo: Singapore prices, food and policy, a mathematics reading list, a coaching toolkit and a forecaster ranking. Every address below is public text over HTTPS GET, with no key and no login.",
    "",
    "How to use this site:",
    "",
    "1. Find the post or table you need below.",
    "2. For a post, fetch its index. It lists one file per heading, with its size. Fetch only the sections that answer the question.",
    "3. For a table, every row has as_of (the day its newest fact was read) and source (where it was read; in products, the url column; in bets, url and archive, as source there names the settling source). Column types and meanings are in /api/datapackage.json.",
    "4. In your answer, give the address you read and the date of the fact you used: its own date column where the row has one (price_at, verdict_as_of, share_as_of, prices_as_of, google_rating_as_of), else the row's as_of. For a post, its text-as-of date.",
    "",
    `Every file, with its bytes, SHA-256 and as-of date: ${SITE}/api/manifest.json. Files change only on deploy, except the live tables, which the server rebuilds.`,
    "",
    "## Posts",
    "",
  ];
  for (const api of apis) lines.push(`- [${api.post.title}](${SITE}/api/${api.post.slug}/index.txt): ${api.post.summary[0] ?? ""} Published ${api.post.date}, text as of ${api.asOf}. ${api.parts.length} section files.`);
  lines.push("", "## Tables", "", "Tab-separated, with a header row. A large table is one file: if your fetch tool truncates, you lose rows without notice, so check the row count.", "");
  for (const table of all) {
    const range = asOfRange(table);
    const when = range ? `, as of ${range.oldest === range.newest ? range.newest : `${range.oldest} to ${range.newest}`}` : "";
    const first = /^.*?\.(?=\s|$)/.exec(table.description)?.[0] ?? table.description;
    lines.push(`- [${table.title}](${SITE}/${table.path}): ${table.rows.length} rows, ${size(bytes(files.get(table.path) ?? ""))}${when}. ${first}`);
  }
  lines.push("", "## Live tables", "", `Written by the server, not on deploy. Tab-separated, no header row; lines that start with # are comments, and the first gives the build time. Hashes: ${SITE}/feeds-manifest.json.`, "");
  for (const feed of FEEDS) lines.push(`- [${feed.title}](${feed.path}): ${feed.description} Columns: ${feed.columns.map((c) => c.name).join(", ")}.`);
  lines.push("", "## Write", "", `- [How to write notes](${SITE}/api/notes.txt): writing needs git access. An agent adds lines to notes/PART.tsv in ${REPO} and opens a pull request; the owner merges and deploys. There is no write endpoint. Read this first.`);
  lines.push("", "## Optional", "", `- [Table schemas](${SITE}/api/datapackage.json): Frictionless Table Schema for every table above, with a changelog.`, `- [Page for people](${SITE}/api/): this API explained.`);
  return `${lines.join("\n")}\n`;
}

function field(column: Column): Record<string, unknown> {
  const constraints: Record<string, unknown> = {};
  if (column.required) constraints.required = true;
  if (column.pattern) constraints.pattern = column.pattern;
  if (column.enum) constraints.enum = column.enum;
  const out: Record<string, unknown> = { name: column.name, type: column.type, description: column.description };
  if (column.type === "datetime") out.format = "%Y-%m-%dT%H:%M:%SZ";
  if (Object.keys(constraints).length > 0) out.constraints = constraints;
  return out;
}

// TSV cells never hold a tab or a line break, and are never quoted: a quote mark is text.
const DIALECT = { delimiter: "\t", quoteChar: "\u0000", doubleQuote: false, header: true };

function sha256(data: string | Buffer): string {
  return createHash("sha256").update(data).digest("hex");
}

function datapackage(all: Table[], files: Map<string, string>, built: string): string {
  const resources = all.map((table) => {
    const body = files.get(table.path) ?? "";
    return {
      name: table.name, path: table.path.replace(/^api\//, ""), title: table.title, description: table.description,
      profile: "tabular-data-resource", format: "csv", mediatype: "text/tab-separated-values", encoding: "utf-8",
      bytes: bytes(body), hash: `sha256:${sha256(body)}`, dialect: DIALECT, sources: table.sources,
      schema: { fields: table.columns.map(field), missingValues: [""], ...(table.primaryKey ? { primaryKey: table.primaryKey } : {}) },
    };
  });
  const feeds = FEEDS.map((feed) => ({
    name: feed.name, path: feed.path, title: feed.title, description: feed.description,
    profile: "tabular-data-resource", format: "csv", mediatype: "text/tab-separated-values", encoding: "utf-8",
    dialect: { ...DIALECT, header: false, commentChar: "#" },
    schema: { fields: feed.columns.map(field), missingValues: [""] },
  }));
  const pack = {
    profile: "tabular-data-package", name: "teoyujie-org", title: "teoyujie.org tables", version: SCHEMA_VERSION, created: built,
    homepage: `${SITE}/api/`, description: "Every table of teoyujie.org. Each row of a deployed table has as_of and source. The live tables are rebuilt by the server and carry their hashes in /feeds-manifest.json.",
    resources: [...resources, ...feeds], changelog: CHANGELOG,
  };
  return `${JSON.stringify(pack, null, 1)}\n`;
}

function walk(dir: string, base = dir): string[] {
  const found: string[] = [];
  for (const name of readdirSync(dir)) {
    const path = `${dir}/${name}`;
    if (statSync(path).isDirectory()) found.push(...walk(path, base));
    else found.push(path.slice(base.length + 1));
  }
  return found;
}

// Every file of the API with its size, hash, format and as-of date. The manifest cannot hold its own hash.
function manifest(out: string, apis: PostApi[], all: Table[], built: ReturnType<typeof headCommit>): string {
  const paths = ["llms.txt", "robots.txt", ...walk(`${out}/api`).map((p) => `api/${p}`), ...walk(`${out}/notes`).map((p) => `notes/${p}`)].filter((p) => p !== "api/manifest.json").sort();
  const byTable = new Map(all.map((table) => [table.path, table]));
  const day = built.at.slice(0, 10);
  const files = paths.map((path) => {
    const data = readFileSync(`${out}/${path}`);
    const table = byTable.get(path);
    const post = apis.find((api) => path.startsWith(`api/${api.post.slug}/`));
    const part = /^notes\/(\w+)\.txt$/.exec(path)?.[1];
    let format: string;
    let asOf: unknown;
    if (table) [format, asOf] = [`tsv; schema ${SITE}/api/datapackage.json#${table.name}`, asOfRange(table)];
    else if (post) [format, asOf] = [path.endsWith("/index.txt") ? "text; post index" : "text; Markdown section", post.asOf];
    else if (part) [format, asOf] = [`notes lines; rules ${SITE}/api/notes.txt#${part}`, lastChanged(`notes/${part}.tsv`)];
    else if (path === "api/notes.txt") [format, asOf] = ["text; rules for notes", lastChanged("src/notes.ts")];
    else if (path.endsWith(".json")) [format, asOf] = ["json", day];
    else if (path.endsWith(".html")) [format, asOf] = ["html; for people", day];
    else [format, asOf] = ["text", day];
    return { path: `/${path}`, bytes: data.length, sha256: sha256(data), format, as_of: asOf };
  });
  const note = "For a table, as_of is the oldest and newest row as_of. For a post file, it is the day the post or the data its figures draw on last changed. The manifest does not hold its own hash. The live tables are in /feeds-manifest.json.";
  return `${JSON.stringify({ site: SITE, built_at: built.at, commit: built.commit, note, files }, null, 1)}\n`;
}

// A post's section files share api/SLUG/ with any table whose path is there, such as
// api/tampines-food/places.txt. Stops the build if a section or the index would overwrite a table.
export function checkApiPaths(apis: PostApi[], all: Table[]): void {
  const tablePaths = new Set(all.map((table) => table.path));
  for (const api of apis) {
    for (const file of ["index.txt", "whole-post.txt", ...api.parts.map((part) => part.file)]) {
      const path = `api/${api.post.slug}/${file}`;
      if (tablePaths.has(path)) throw new Error(`${api.post.slug}: the file ${path} is also a table; rename the section`);
    }
  }
}

export function writeApi(out: string, apis: PostApi[], all: Table[]): void {
  checkApiPaths(apis, all);
  const built = headCommit();
  const files = new Map<string, string>();
  for (const table of all) {
    const body = tableTsv(table);
    files.set(table.path, body);
    mkdirSync(`${out}/${table.path.replace(/\/[^/]+$/, "")}`, { recursive: true });
    writeFileSync(`${out}/${table.path}`, body);
  }
  for (const api of apis) {
    const dir = `${out}/api/${api.post.slug}`;
    mkdirSync(dir, { recursive: true });
    const tablesOf = all.filter((table) => POST_TABLES[api.post.slug]?.includes(table.name));
    writeFileSync(`${dir}/index.txt`, postIndex(api, tablesOf));
    writeFileSync(`${dir}/whole-post.txt`, textVersion(api.post));
    for (const part of api.parts) writeFileSync(`${dir}/${part.file}`, part.text);
  }
  writeFileSync(`${out}/llms.txt`, llmsText(apis, all, files));
  writeFileSync(`${out}/api/datapackage.json`, datapackage(all, files, built.at));
}

// Last, after every other file of the API is written.
export function writeManifest(out: string, apis: PostApi[], all: Table[]): void {
  writeFileSync(`${out}/api/manifest.json`, manifest(out, apis, all, headCommit()));
}

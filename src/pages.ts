import { SITE, type PostApi } from "./api.ts";
import { FEEDS, type Table } from "./tables.ts";
import { PARTS, scoreCalls, type Deal, type Note } from "./notes.ts";
import { readingMinutes, type Heading, type Paper, type Post } from "./post.ts";

const HEAD = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="only light">
<meta name="theme-color" content="#fdfdfc">
<link rel="icon" href="data:,">
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
<link rel="alternate" type="application/rss+xml" title="Reading feed" href="/feed.xml">`;

const FOOT = `<footer class="wrap"><ul>
<li>Email: <a href="mailto:contact@teoyujie.org">contact@teoyujie.org</a> · <a href="/contact.asc">OpenPGP key</a> (fingerprint <code>5E76 96A3 DDD7 6435 07DD 3EB8 F24F 7F0D 78EB E270</code>)</li>
<li>Code: <a href="https://github.com/yujieteo">GitHub ↗</a></li>
<li>Reading: <a href="/reading.html">Latest</a> · <a href="/feed.xml">RSS feed</a></li>
<li>Singapore policy actionables: <a href="/singapore-policy-actionables.html">Ranking</a> · <a href="/singapore-policy-actionables.xml">RSS feed</a></li>
<li>For AI agents: <a href="/api/">API</a> · <a href="/llms.txt">llms.txt</a></li>
</ul></footer>`;

function escapeText(text: string): string {
  return text.replace(/&(?![a-z]+;|#\d+;)/g, "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function shell(title: string, description: string, header: string, main: string, scripts: string[], head = ""): string {
  let tail = "";
  for (const src of scripts) tail += `<script type="module" src="/${src}"></script>\n`;
  return `<!doctype html>
<html lang="en">
<head>
${HEAD}
<title>${escapeText(title)}</title>
<meta name="description" content="${escapeText(description)}">
${head}</head>
<body>
${header}
${markTables(main)}
${FOOT}
${tail}</body>
</html>
`;
}

// A date in a table. The time element keeps it on one line: see "main.page td time" in static/style.css.
function day(date: string): string {
  return date === "" ? "" : `<time datetime="${date}">${date}</time>`;
}

const HEADER = `<header class="wrap"><a class="name" href="/">Yu Jie Teo</a></header>`;
// The home page has no article, so the name is its one h1. h1 takes the look of its parent: see static/style.css.
const HOME_HEADER = `<header class="wrap"><h1><a class="name" href="/">Yu Jie Teo</a></h1></header>`;

// A number, a money amount or a percentage, and a range of two of them. A date is not a number here: it stays on the left.
const NUMBER = String.raw`[−+~≈]?(?:S\$|US\$|\$)?\d[\d,]*(?:\.\d+)?%?`;
const NUMBER_CELL = new RegExp(`^${NUMBER}(?:\\s*(?:→|–|&ndash;)\\s*${NUMBER}|\\s+(?:to|-)\\s+${NUMBER})?$`);

// Rules for tables: a column whose filled body cells are all numbers gets class="num" on every cell, its head too,
// so it lines up on the right and a number never breaks over two lines. A table of six columns or more gets
// data-wide: on a wide screen it may use the width of a wide figure. tabindex="0" lets a keyboard scroll a table
// that is wider than a phone screen (WCAG 2.1.1).
export function markTables(html: string): string {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, (table, inner: string) => {
    const rows = [...inner.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((row) =>
      [...(row[1] ?? "").matchAll(/<(td|th)>([\s\S]*?)<\/\1>/g)].map((cell) => ({ head: cell[1] === "th", text: (cell[2] ?? "").replace(/<[^>]+>/g, "").trim() })));
    const width = Math.max(0, ...rows.map((row) => row.length));
    const body = rows.filter((row) => !row.some((cell) => cell.head));
    const numeric = Array.from({ length: width }, (_, i) => {
      const filled = body.map((row) => row[i]?.text ?? "").filter((text) => text !== "" && text !== "–" && text !== "—");
      return filled.length > 0 && filled.every((text) => NUMBER_CELL.test(text));
    });
    const marked = inner.replace(/<tr>([\s\S]*?)<\/tr>/g, (_row, cells: string) => {
      let i = 0;
      return `<tr>${cells.replace(/<(td|th)>/g, (_tag, tag: string) => (numeric[i++] ? `<${tag} class="num">` : `<${tag}>`))}</tr>`;
    });
    return `<table tabindex="0"${width >= 6 ? " data-wide" : ""}>${marked}</table>`;
  });
}

interface Entry {
  href: string;
  title: string;
  date: string;
  summary: string;
}

const PAGES: readonly Entry[] = [
  { href: "/tampines-errands/", title: "Tampines errands", date: "2026-11-09", summary: "Service shops in Tampines, with phone numbers, a map and the prices I could find." },
];

function item(entry: Entry): string {
  return `<li><a href="${entry.href}"><h3>${entry.title}</h3><span class="kind">${entry.date}</span><p>${entry.summary}</p></a></li>`;
}

export function homePage(posts: Post[]): string {
  const entries: Entry[] = [...PAGES];
  for (const post of posts) entries.push({ href: `/essays/${post.slug}/`, title: post.title, date: post.date, summary: post.summary[0] ?? "" });
  entries.sort((a, b) => b.date.localeCompare(a.date));
  const items = entries.map(item);
  const list = items.length > 0 ? `<ol class="featured">${items.join("\n")}</ol>` : `<p class="muted">No posts yet.</p>`;
  const main = `<main class="wrap"><section id="posts"><h2>Posts</h2>${list}</section></main>`;
  return shell("Yu Jie Teo", "Posts by Yu Jie Teo.", HOME_HEADER, main, []);
}

function contents(headings: Heading[]): string {
  const links: string[] = [];
  for (const h of headings) links.push(`<li><a href="#${h.id}">${h.text}</a></li>`);
  return `<nav class="toc" aria-label="Contents"><h2>Contents</h2><ol>${links.join("")}</ol></nav>`;
}

function summaryBlock(post: Post): string {
  const items: string[] = [];
  for (const line of post.summary) items.push(`<li>${line}</li>`);
  return `<section class="summary" aria-label="Summary"><h2>Summary</h2><ul>${items.join("")}</ul></section>`;
}

export function postPage(post: Post, bodyHtml: string, headings: Heading[], kinds: string[]): string {
  const minutes = readingMinutes(post.source);
  const meta = `<p class="meta muted"><time datetime="${post.date}">${post.date}</time> · ${minutes} min read · <a href="/essays/${post.slug}/index.md">Text version</a></p>`;
  const scripts = ["kit/kit.js"];
  for (const kind of kinds) scripts.push(`kit/${kind}.js`);
  const article = `<article><h1>${post.title}</h1>${meta}${summaryBlock(post)}${contents(headings)}${bodyHtml}</article>`;
  return shell(post.title, post.summary[0] ?? "", HEADER, `<main class="wrap page">${article}</main>`, scripts);
}

export function paperPage(post: Post, paper: Paper, bodyHtml: string): string {
  const minutes = readingMinutes(paper.source);
  const back = `/essays/${post.slug}/`;
  const meta = `<p class="meta muted">${escapeText(paper.byline)} · ${minutes} min read · <a href="${escapeText(paper.url)}" rel="noopener noreferrer">Source ↗</a> · <a href="${back}">${post.title}</a></p>`;
  const slogan = `<section class="summary" aria-label="Slogan"><h2>Slogan</h2><ul><li>${escapeText(paper.slogan)}</li></ul></section>`;
  const basis = paper.basis === "" ? "" : ` It is based on ${escapeText(paper.basis)}.`;
  const note = `<p class="muted">An AI model wrote this summary. Nobody checked it by hand.${basis} Check each statement against the source before you rely on it.</p>`;
  const article = `<article><h1>${escapeText(paper.title)}</h1>${meta}${slogan}${bodyHtml}${note}</article>`;
  return shell(paper.title, paper.slogan, HEADER, `<main class="wrap page">${article}</main>`, []);
}

export function apiPage(apis: PostApi[], all: Table[]): string {
  const rows: string[] = [];
  for (const api of apis) rows.push(`<tr><td><a href="/api/${api.post.slug}/index.txt">${escapeText(api.post.title)}</a></td><td>${day(api.post.date)}</td><td>${day(api.asOf)}</td><td>${api.parts.length}</td></tr>`);
  const posts = `<table><thead><tr><th>Post index</th><th>Published</th><th>Text as of</th><th>Section files</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
  const tableRows = all.map((table) => `<tr><td><a href="/${table.path}"><code>/${table.path}</code></a></td><td>${escapeText(table.title)}</td><td>${table.rows.length}</td></tr>`);
  const feedRows = FEEDS.map((feed) => `<tr><td><a href="${feed.path}"><code>${feed.path.replace(SITE, "")}</code></a></td><td>${escapeText(feed.title)}, rebuilt by the server</td><td></td></tr>`);
  const article = `<article><h1>API for AI agents</h1>
<p>This site has a text version for agents that cannot ask a follow-up question and will cite what they read. It is a set of static files: no key, no login. Every file has a size, a SHA-256 and an as-of date in <a href="/api/manifest.json"><code>/api/manifest.json</code></a>, and every table has typed columns in <a href="/api/datapackage.json"><code>/api/datapackage.json</code></a> (Frictionless Table Schema).</p>
<h2 id="use">How an agent reads it</h2>
<ol>
<li>Fetch <a href="/llms.txt"><code>/llms.txt</code></a>. It lists every post and table in one line each.</li>
<li>For a post, fetch its index, <code>/api/POST/index.txt</code>. It lists one file per heading with its size. Fetch only the sections needed.</li>
<li>For a table, read the rows needed. Every row has <code>as_of</code>, the day its newest fact was read, and <code>source</code>, where. An answer cites both.</li>
</ol>
<p>To point an agent here, give it this line: <code>Read https://teoyujie.org/llms.txt and follow its steps.</code></p>
<h2 id="posts">Posts</h2>
${posts}
<h2 id="tables">Tables</h2>
<table><thead><tr><th>Address</th><th>What it holds</th><th>Rows</th></tr></thead><tbody>${tableRows.join("")}${feedRows.join("")}</tbody></table>
<h2 id="write">How an agent writes</h2>
<p>Writing needs git access. There is no write endpoint. An agent adds lines to a file in <a href="https://github.com/yujieteo/site">the site repository ↗</a> and opens a pull request; the owner merges and deploys. The build checks every line and stops on a bad one. <a href="/api/notes.txt"><code>/api/notes.txt</code></a> has the full format.</p>
${notesTable()}
<p>To set an agent to work, give it this line with the part you want: <code>Read https://teoyujie.org/api/notes.txt and write notes for PART.</code></p>
<h2 id="rules">What stays the same</h2>
<ul>
<li>A table column is never renamed, retyped or removed. New columns go at the end. The changelog is in <code>datapackage.json</code>.</li>
<li>The address of a section comes from its heading. It changes only if the heading changes.</li>
<li>A file changes only on deploy, except the live tables. <code>Last-Modified</code> and <code>If-Modified-Since</code> work; there is no ETag, so compare the SHA-256 in the manifest instead.</li>
</ul></article>`;
  return shell("API for AI agents", "A text version of this site for agents: typed tables and one file per heading, each with a hash and an as-of date.", HEADER, `<main class="wrap page">${article}</main>`, []);
}

function notesTable(): string {
  const rows: string[] = [];
  for (const part of PARTS) rows.push(`<tr><td>${part.name}</td><td>${escapeText(part.does)}</td><td><a href="${part.read}"><code>${part.read}</code></a></td><td><a href="/notes/${part.name}.txt"><code>notes/${part.name}.tsv</code></a></td></tr>`);
  return `<table><thead><tr><th>Part</th><th>What a note does</th><th>List to read</th><th>File to change</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
}

function money(value: number): string {
  return `S$${value.toFixed(2)}`;
}

function below(deal: Deal): string {
  return deal.below >= 0 ? `${deal.below}% below` : `${-deal.below}% above`;
}


export function dealsPage(seen: Deal[]): string {
  const rows: string[] = [];
  for (const deal of seen) {
    const f = deal.note.fields;
    rows.push(`<tr><td><a href="${escapeText(f.url ?? "")}" rel="noopener noreferrer">${escapeText(deal.row.name)}</a><br><span class="muted">${escapeText(deal.note.text)}</span></td><td>${money(deal.price)}</td><td>${money(deal.row.average)}</td><td>${deal.good ? "<strong>" : ""}${below(deal)}${deal.good ? "</strong>" : ""}</td><td>${escapeText(f.shop ?? "")}</td><td>${day(f.date ?? "")}</td></tr>`);
  }
  const table = rows.length > 0 ? `<table><thead><tr><th>Item</th><th>Shelf price</th><th>Average</th><th>Against average</th><th>Shop</th><th>Seen</th></tr></thead><tbody>${rows.join("")}</tbody></table>` : `<p class="muted">No prices have been noted yet.</p>`;
  const article = `<article><h1>Deals seen now</h1>
<p>These are shelf prices that an AI agent saw in a Singapore shop in the last 30 days. Each is set against the latest official average for the same unit, from <a href="/essays/singapore-value-buys/">the post on what Singapore buys</a>. Bold marks a good deal: a price at least 10% below the average. Nobody checked these by hand, so open the link before you buy.</p>
${table}
<p class="muted">Agents add prices as <a href="/api/notes.txt">notes</a>. <a href="/api/deals.txt">Text version</a></p></article>`;
  return shell("Deals seen now", "Shelf prices seen in Singapore shops in the last 30 days, against the official average.", HEADER, `<main class="wrap page">${article}</main>`, []);
}

export function forecastsPage(): string {
  const article = `<article><h1>Forecasts to check</h1>
<p>This list is now <a href="/forecasters.html">the forecasters page</a>: every bet there has that day's market price, the source that settles it and a due date.</p></article>`;
  return shell("Forecasts to check", "This list moved to the forecasters page.", HEADER, `<main class="wrap page">${article}</main>`, []);
}

function scoreLine(score: ReturnType<typeof scoreCalls>): string {
  if (score.resolved === 0) return "No call has an outcome yet.";
  return `${score.resolved} of ${score.rows.length} calls have an outcome. ${score.inside} of ${score.resolved} fell inside their 80% range, where about ${Math.round(score.resolved * 0.8)} would if the ranges were right. The middle guess missed by ${score.miss.toFixed(2)}% on average. Pinball loss: ${score.pinball.toFixed(3)}% (lower is better).`;
}

function verdict(row: ReturnType<typeof scoreCalls>["rows"][number]): string {
  if (!row.outcome) return "open";
  return `${row.inside ? "inside" : "outside"}, ${row.outcome.fields.actual}`;
}


export function callsPage(calls: Note[], outcomes: Note[]): string {
  const score = scoreCalls(calls, outcomes);
  const rows: string[] = [];
  for (const row of score.rows) {
    const f = row.call.fields;
    rows.push(`<tr><td>${escapeText(row.call.text)}<br><span class="muted">${escapeText(f.model ?? "")}, CPI ${escapeText(f.series ?? "")}</span></td><td>${escapeText(f.month ?? "")}</td><td>${f.low}&ndash;${f.high}</td><td>${day(f.made ?? "")}</td><td>${escapeText(verdict(row))}</td></tr>`);
  }
  const table = rows.length > 0 ? `<table><thead><tr><th>Call</th><th>Month</th><th>80% range</th><th>Made</th><th>Outcome</th></tr></thead><tbody>${rows.join("")}</tbody></table>` : `<p class="muted">No calls yet.</p>`;
  const article = `<article><h1>Calls on Singapore prices</h1>
<p>These are dated calls from <a href="/essays/singapore-value-buys/">the post on what Singapore buys</a>. Each says where a consumer price index will be in a given month, as an 80% range. Each was made before its month and is not changed after. When SingStat publishes the month, a script reads the value and the call is scored here. If the ranges are right, about 8 in 10 outcomes fall inside them.</p>
<p><strong>${escapeText(scoreLine(score))}</strong></p>
${table}
<p class="muted">Index values: 2024 = 100. Source of outcomes: <a href="https://tablebuilder.singstat.gov.sg/table/TS/M213751" rel="noopener noreferrer">SingStat table M213751 ↗</a>. <a href="/api/calls.txt">Text version</a></p></article>`;
  return shell("Calls on Singapore prices", "Dated 80% ranges for Singapore consumer prices, scored when SingStat publishes the month.", HEADER, `<main class="wrap page">${article}</main>`, []);
}

// httpd answers errors with these files (errdocs in the server's httpd.conf), at any address, /f/ included.
// It fills in $RESPONSE_CODE and $HTTP_ERROR itself, so the generic page fits a 403 as well as a 500.
const NOINDEX = `<meta name="robots" content="noindex">\n`;

export function notFoundPage(): string {
  const article = `<article><h1>Page not found</h1>
<p class="meta muted">404</p>
<p>There is nothing at this address. Shared links under /f/ stop working when their time is up, which is 30 days unless the link said otherwise.</p>
<p><a href="/">Go to the home page</a></p></article>`;
  return shell("Page not found", "There is nothing at this address.", HEADER, `<main class="wrap page">${article}</main>`, [], NOINDEX);
}

export function errorPage(): string {
  const article = `<article><h1>$HTTP_ERROR</h1>
<p class="meta muted">$RESPONSE_CODE</p>
<p>The server did not give you this page.</p>
<p><a href="/">Go to the home page</a></p></article>`;
  return shell("$RESPONSE_CODE $HTTP_ERROR", "The server did not give you this page.", HEADER, `<main class="wrap page">${article}</main>`, [], NOINDEX);
}

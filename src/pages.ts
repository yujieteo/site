import { API_DATA, API_LIVE, type PostApi } from "./api.ts";
import { PARTS, type Deal, type Note } from "./notes.ts";
import { readingMinutes, type Heading, type Post } from "./post.ts";

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

function shell(title: string, description: string, header: string, main: string, scripts: string[]): string {
  let tail = "";
  for (const src of scripts) tail += `<script type="module" src="/${src}"></script>\n`;
  return `<!doctype html>
<html lang="en">
<head>
${HEAD}
<title>${escapeText(title)}</title>
<meta name="description" content="${escapeText(description)}">
</head>
<body>
${header}
${main}
${FOOT}
${tail}</body>
</html>
`;
}

const HEADER = `<header class="wrap"><a class="name" href="/">Yu Jie Teo</a><span class="tagline">Mechanical Engineer</span></header>`;

interface Entry {
  href: string;
  title: string;
  date: string;
  summary: string;
}

const PAGES: readonly Entry[] = [
  { href: "/khan-stacks-free-recall/", title: "Algebraic stacks free recall", date: "2026-11-09", summary: "57 cues on A Modern Introduction to Algebraic Stacks by Adeel A. Khan. Write from memory, then mark your answer against the notes." },
  { href: "/khan-stacks-drill/", title: "Algebraic stacks drill", date: "2026-11-09", summary: "1,347 questions on A Modern Introduction to Algebraic Stacks by Adeel A. Khan, with no prerequisites." },
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
  return shell("Yu Jie Teo", "Posts by Yu Jie Teo, Mechanical Engineer.", HEADER, main, []);
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

export function apiPage(apis: PostApi[]): string {
  const rows: string[] = [];
  for (const api of apis) {
    const base = `/api/${api.post.slug}`;
    rows.push(`<tr><td><a href="${base}/index.txt">${api.post.title}</a></td><td>${api.post.date}</td><td>${api.parts.length}</td><td>${api.tokens.toLocaleString("en-US")}</td></tr>`);
  }
  const posts = `<table><thead><tr><th>Post index</th><th>Date</th><th>Section files</th><th>Tokens in all</th></tr></thead><tbody>${rows.join("")}</tbody></table>`;
  const others: string[] = [];
  for (const item of [...API_DATA, ...API_LIVE]) others.push(`<li><a href="${item.href}"><code>${item.href}</code></a>: ${escapeText(item.about)}</li>`);
  const article = `<article><h1>API for AI agents</h1>
<p>This site has a text version for language models. It is a set of static files, so there is no key, no login and no rate limit beyond the server's own. Small models can use it: each file is short, and each list says how many tokens a file costs before the model fetches it.</p>
<h2 id="use">How an agent uses it</h2>
<ol>
<li>Fetch <a href="/llms.txt"><code>/llms.txt</code></a>. It lists every post in one line each.</li>
<li>Fetch the index of one post, <code>/api/POST/index.txt</code>. It holds the summary and the section list.</li>
<li>Fetch only the sections it needs, <code>/api/POST/SECTION.txt</code>. No section file is much longer than 2,000 tokens. A long section comes in numbered parts, and each part links to the next.</li>
</ol>
<p>To point an agent here, give it this line: <code>Read https://teoyujie.org/llms.txt and follow its steps.</code></p>
<h2 id="posts">Posts</h2>
${posts}
<h2 id="other">Data and live files</h2>
<ul>${others.join("")}</ul>
<p>A program can read the same lists from <a href="/api/index.json"><code>/api/index.json</code></a>.</p>
<h2 id="write">How an agent writes</h2>
<p>An agent can adjust four parts of the site with notes. Fixed rules build each part, and a note moves one item or adds a sentence to it. Git is the only way to write: the agent adds lines to a file in <a href="https://github.com/yujieteo/site">the site repository ↗</a> and opens a pull request. The build checks every line. <a href="/api/notes.txt"><code>/api/notes.txt</code></a> has the full format.</p>
${notesTable()}
<p>To set an agent to work, give it this line with the part you want: <code>Read https://teoyujie.org/api/notes.txt and write notes for PART.</code></p>
<h2 id="rules">What stays the same</h2>
<ul>
<li>The address of a section comes from its heading. It changes only if the heading changes.</li>
<li>Token counts are estimates: the number of characters divided by 4.</li>
<li>Every file names its post and date. Prices, ratings and forecasts are right for that date only.</li>
</ul></article>`;
  return shell("API for AI agents", "A text version of this site for language models, in short files with token counts.", HEADER, `<main class="wrap page">${article}</main>`, []);
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

export function dealsText(seen: Deal[]): string {
  const lines = ["# Deals seen now", "", "Shelf prices that agents saw in Singapore shops in the last 30 days, against the latest official average for the same unit. A good deal is at or under the deal price of the item. Largest saving first.", ""];
  if (seen.length === 0) lines.push("No prices have been noted yet.");
  else lines.push("| Item | Shelf price | Average | Against average | Good deal | Shop | Seen | Note | Link |", "|---|---|---|---|---|---|---|---|---|");
  for (const deal of seen) {
    const f = deal.note.fields;
    lines.push(`| ${deal.row.name} | ${money(deal.price)} | ${money(deal.row.average)} | ${below(deal)} | ${deal.good ? "yes" : "no"} | ${f.shop ?? ""} | ${f.date ?? ""} | ${deal.note.text.replaceAll("|", "/")} | ${f.url ?? ""} |`);
  }
  return `${lines.join("\n")}\n`;
}

export function dealsPage(seen: Deal[]): string {
  const rows: string[] = [];
  for (const deal of seen) {
    const f = deal.note.fields;
    rows.push(`<tr><td><a href="${escapeText(f.url ?? "")}" rel="noopener noreferrer">${escapeText(deal.row.name)}</a><br><span class="muted">${escapeText(deal.note.text)}</span></td><td>${money(deal.price)}</td><td>${money(deal.row.average)}</td><td>${deal.good ? "<strong>" : ""}${below(deal)}${deal.good ? "</strong>" : ""}</td><td>${escapeText(f.shop ?? "")}</td><td>${f.date ?? ""}</td></tr>`);
  }
  const table = rows.length > 0 ? `<table><thead><tr><th>Item</th><th>Shelf price</th><th>Average</th><th>Against average</th><th>Shop</th><th>Seen</th></tr></thead><tbody>${rows.join("")}</tbody></table>` : `<p class="muted">No prices have been noted yet.</p>`;
  const article = `<article><h1>Deals seen now</h1>
<p>These are shelf prices that an AI agent saw in a Singapore shop in the last 30 days. Each is set against the latest official average for the same unit, from <a href="/essays/singapore-value-buys/">the post on what Singapore buys</a>. Bold marks a good deal: a price at least 10% below the average. Nobody checked these by hand, so open the link before you buy.</p>
${table}
<p class="muted">Agents add prices as <a href="/api/notes.txt">notes</a>. <a href="/api/deals.txt">Text version</a></p></article>`;
  return shell("Deals seen now", "Shelf prices seen in Singapore shops in the last 30 days, against the official average.", HEADER, `<main class="wrap page">${article}</main>`, []);
}

export function forecastsPage(notes: Note[]): string {
  const rows: string[] = [];
  for (const note of notes) {
    const f = note.fields;
    rows.push(`<tr><td><a href="${escapeText(f.url ?? "")}" rel="noopener noreferrer">${escapeText(note.text)}</a></td><td>${escapeText(f.by ?? "")}</td><td>${f.made ?? ""}</td><td>${f.due ?? ""}</td><td>${f.outcome ?? ""}</td></tr>`);
  }
  const table = rows.length > 0 ? `<table><thead><tr><th>Forecast</th><th>By</th><th>Made</th><th>Due</th><th>Outcome</th></tr></thead><tbody>${rows.join("")}</tbody></table>` : `<p class="muted">No forecasts have been noted yet.</p>`;
  const article = `<article><h1>Forecasts to check</h1>
<p>These are forecasts by the people in <a href="/essays/hn-forecasters/">the forecasting ranking</a>. Open ones come first. An AI agent picks them from <a href="/forecasters.html">the forecasters feed</a> and marks the outcome when one can be checked. Most were not checked by hand, so some will be wrong.</p>
${table}
<p class="muted">Agents add forecasts as <a href="/api/notes.txt">notes</a>. <a href="/notes/forecasts.txt">Text version</a></p></article>`;
  return shell("Forecasts to check", "Open and settled forecasts by the ranked Hacker News commenters.", HEADER, `<main class="wrap page">${article}</main>`, []);
}

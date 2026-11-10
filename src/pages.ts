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

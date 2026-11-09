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
</ul></footer>`;

function shell(title: string, description: string, header: string, main: string, scripts: string[]): string {
  let tail = "";
  for (const src of scripts) tail += `<script type="module" src="/${src}"></script>\n`;
  return `<!doctype html>
<html lang="en">
<head>
${HEAD}
<title>${title}</title>
<meta name="description" content="${description}">
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

function postItem(post: Post): string {
  return `<li><a href="/essays/${post.slug}/"><h3>${post.title}</h3><span class="kind">${post.date}</span><p>${post.summary[0] ?? ""}</p></a></li>`;
}

export function homePage(posts: Post[]): string {
  const items: string[] = [`<li><a href="/khan-stacks-drill/"><h3>Algebraic stacks drill</h3><span class="kind">2026-11-09</span><p>1,347 questions on A Modern Introduction to Algebraic Stacks by Adeel A. Khan, with no prerequisites.</p></a></li>`, `<li><a href="/tampines-errands/"><h3>Tampines errands</h3><span class="kind">2026-11-09</span><p>Service shops in Tampines, with phone numbers, a map and the prices I could find.</p></a></li>`];
  for (const post of posts) items.push(postItem(post));
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

import { readingMinutes, type Heading, type Post } from "./post.ts";

const HEAD = `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="only light">
<meta name="theme-color" content="#fdfdfc">
<link rel="icon" href="data:,">
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">`;

const FOOT = `<footer class="wrap"><ul>
<li>Email: <a href="mailto:contact@teoyujie.org">contact@teoyujie.org</a></li>
<li>Code: <a href="https://github.com/yujieteo">GitHub ↗</a></li>
</ul></footer>`;

function shell(title: string, description: string, header: string, main: string, script: boolean): string {
  const tail = script ? '<script type="module" src="/kit.js"></script>\n' : "";
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
  const items: string[] = [];
  for (const post of posts) items.push(postItem(post));
  const list = items.length > 0 ? `<ol class="featured">${items.join("\n")}</ol>` : `<p class="muted">No posts yet.</p>`;
  const main = `<main class="wrap"><section id="posts"><h2>Posts</h2>${list}</section></main>`;
  return shell("Yu Jie Teo", "Posts by Yu Jie Teo, Mechanical Engineer.", HEADER, main, false);
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

export function postPage(post: Post, bodyHtml: string, headings: Heading[]): string {
  const minutes = readingMinutes(post.source);
  const meta = `<p class="meta muted"><time datetime="${post.date}">${post.date}</time> · ${minutes} min read · <a href="/essays/${post.slug}/index.md">Text version</a></p>`;
  const article = `<article><h1>${post.title}</h1>${meta}${summaryBlock(post)}${contents(headings)}${bodyHtml}</article>`;
  return shell(post.title, post.summary[0] ?? "", HEADER, `<main class="wrap page">${article}</main>`, true);
}

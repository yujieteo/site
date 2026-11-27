import { relative, resolve, sep } from "node:path";
import { cpSync, existsSync, mkdirSync, renameSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { apiPage, callsPage, dealsPage, errorPage, forecastsPage, homePage, notFoundPage, paperPage, postPage, sectionPage } from "./pages.ts";
import { SITE, deals, loadNotes, notesGuide, today, type Note } from "./notes.ts";
import { postApi, writeApi, writeManifest } from "./api.ts";
import { checkBets, scoreBets } from "./bets.ts";
import { tables } from "./tables.ts";
import { figureKinds, figures, footnoteHtml, footnotes, headings, linkPapers, loadPapers, parsePost, textVersion, type Paper, type Post } from "./post.ts";
import { FIGURE_KINDS } from "./figures.ts";
import { useLifeNotes } from "./kit/life.ts";

function loadPosts(dir: string, drafts: boolean): Post[] {
  const posts: Post[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const post = parsePost(slug, readFileSync(`${dir}/${slug}/post.md`, "utf8"));
    if (drafts || !post.draft) posts.push(post);
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

function renderBody(post: Post): { html: string; toc: ReturnType<typeof headings> } {
  const split = footnotes(post.source);
  const withFigures = figures(split.body, post.slug);
  const html = footnoteHtml(Bun.markdown.html(withFigures, { headings: { ids: true } }), split.notes);
  return { html, toc: headings(html) };
}

async function buildAssets(out: string): Promise<void> {
  cpSync("static/fonts", `${out}/fonts`, { recursive: true });
  cpSync("static/public", out, { recursive: true });
  // The comments hold the sources of the rules. They stay in static/ for people who edit the CSS; readers do not download them.
  const css = readFileSync("static/kowalski.css", "utf8") + readFileSync("static/style.css", "utf8");
  writeFileSync(`${out}/style.css`, css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\n\s*\n/g, "\n"));
  const entrypoints = ["src/kit/entry/kit.ts"];
  for (const kind of FIGURE_KINDS) entrypoints.push(`src/kit/entry/${kind}.ts`);
  const built = await Bun.build({ entrypoints, outdir: `${out}/kit`, root: "src/kit/entry", minify: true, splitting: true, target: "browser" });
  if (!built.success) throw new Error("the kit did not build");
}

async function main(): Promise<void> {
  let drafts = false;
  let out = "dist";
  let postsDir = "posts";
  const args = Bun.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--drafts") drafts = true;
    else if (arg === "--out" || arg === "--posts") {
      const value = args[++i];
      if (!value || value.startsWith("--")) throw new Error(`${arg} needs a directory`);
      if (arg === "--out") out = value;
      else postsDir = value;
    } else throw new Error(`unknown option: ${arg}`);
  }
  const posts = loadPosts(postsDir, drafts);
  const outside = (from: string, to: string) => {
    const path = relative(resolve(from), resolve(to));
    return path === ".." || path.startsWith(`..${sep}`);
  };
  if (!outside(out, postsDir) || !outside(postsDir, out)) throw new Error("--out and --posts must be separate directories");
  if (existsSync(out) && readdirSync(out).length > 0) {
    const manifest = `${out}/api/manifest.json`;
    if (!existsSync(manifest) || JSON.parse(readFileSync(manifest, "utf8")).site !== SITE) {
      throw new Error(`refusing to clear ${out}: choose an empty directory or a previous site build`);
    }
  }
  mkdirSync(out, { recursive: true });
  const staging = `${out}/.site-build`;
  mkdirSync(staging);
  try {
    await renderSite(staging, postsDir, posts);
    for (const name of readdirSync(out)) {
      if (name !== ".site-build") rmSync(`${out}/${name}`, { recursive: true, force: true });
    }
    for (const name of readdirSync(staging)) renameSync(`${staging}/${name}`, `${out}/${name}`);
  } finally {
    rmSync(staging, { recursive: true, force: true });
  }
  console.log(`built ${posts.length} post(s) into ${out}`);
}

async function renderSite(out: string, postsDir: string, posts: Post[]): Promise<void> {
  await buildAssets(out);
  // The notes come first: the Singapore prices post draws its product checks, products and advice from them.
  const notes = loadNotes("notes", out);
  useLifeNotes({ checks: notes.checks ?? [], products: notes.products ?? [], advice: notes.advice ?? [] });
  writeFileSync(`${out}/index.html`, homePage(posts));
  mkdirSync(`${out}/errdocs`, { recursive: true });
  writeFileSync(`${out}/errdocs/404.html`, notFoundPage());
  writeFileSync(`${out}/errdocs/err.html`, errorPage());
  for (const post of posts) {
    const papers = loadPapers(`${postsDir}/${post.slug}/papers`, post);
    post.source = linkPapers(post, papers);
    writePost(out, post);
    for (const paper of papers) writePaper(out, post, paper);
  }
  const apis = posts.map((post) => postApi(post, postsDir));
  const all = writeNotes(out, notes);
  writeApi(out, apis, all);
  writeFileSync(`${out}/api/index.html`, apiPage(apis, all));
  writeManifest(out, apis, all);
}

// The pages and tables drawn from the notes. The tables go to writeApi with the rest of the API.
function writeNotes(out: string, notes: Record<string, Note[]>): ReturnType<typeof tables> {
  const seen = deals(notes.prices ?? [], today());
  mkdirSync(`${out}/api`, { recursive: true });
  writeFileSync(`${out}/api/notes.txt`, notesGuide());
  mkdirSync(`${out}/deals`, { recursive: true });
  writeFileSync(`${out}/deals/index.html`, dealsPage(seen));
  mkdirSync(`${out}/calls`, { recursive: true });
  writeFileSync(`${out}/calls/index.html`, callsPage(notes.calls ?? [], notes.outcomes ?? []));
  mkdirSync(`${out}/forecasts`, { recursive: true });
  // The bets move to /forecasters.html, which the server builds from api/bets.txt. The old address points there.
  checkBets(notes.forecasts ?? []);
  writeFileSync(`${out}/forecasts/index.html`, forecastsPage());
  return tables({ calls: notes.calls ?? [], outcomes: notes.outcomes ?? [], seen, bets: scoreBets(notes.forecasts ?? []) });
}

function writePost(out: string, post: Post): void {
  const body = renderBody(post);
  const kinds = figureKinds(post.source);
  const dir = `${out}/essays/${post.slug}`;
  mkdirSync(dir, { recursive: true });
  if (post.split) {
    const split = splitSections(body.html, post.slug);
    writeFileSync(`${dir}/index.html`, postPage(post, split.main, headings(split.main), kinds));
    split.sections.forEach((section, i) => {
      mkdirSync(`${dir}/${section.id}`, { recursive: true });
      writeFileSync(`${dir}/${section.id}/index.html`, sectionPage(post, section.title, section.html, split.sections[i - 1], split.sections[i + 1]));
    });
  } else {
    writeFileSync(`${dir}/index.html`, postPage(post, body.html, body.toc, kinds));
  }
  writeFileSync(`${dir}/index.md`, textVersion(post));
}

// A long post can be too big for one page. With "split: true", each h2 section that holds h3 entries moves to
// /essays/<slug>/<section id>/, and the main page keeps the other sections and lists the moved ones in their place.
// Every link to an id is rewritten to the page that now holds that id. The text version and the API still have the whole post.
function splitSections(html: string, slug: string): { main: string; sections: { id: string; title: string; html: string }[] } {
  const main: string[] = [];
  const sections: { id: string; title: string; html: string; count: number }[] = [];
  let listAt = -1;
  for (const chunk of html.split(/(?=<h2 id=")/)) {
    const head = /^<h2 id="([^"]+)">(.*?)<\/h2>/.exec(chunk);
    const count = (chunk.match(/<h3[\s>]/g) ?? []).length;
    if (head === null || count === 0) {
      main.push(chunk);
      continue;
    }
    if (listAt < 0) listAt = main.length;
    sections.push({ id: head[1] ?? "", title: head[2] ?? "", html: chunk.slice(head[0].length), count });
  }
  // The page each id lives on: "" is the main page.
  const page = new Map<string, string>();
  for (const id of main.join("").matchAll(/\sid="([^"]+)"/g)) page.set(id[1] ?? "", "");
  for (const section of sections) for (const id of section.html.matchAll(/\sid="([^"]+)"/g)) page.set(id[1] ?? "", section.id);
  const relink = (text: string, here: string) =>
    text.replace(/href="#([^"]+)"/g, (link, id: string) => {
      const there = page.get(id);
      if (there === undefined || there === here) return link;
      return `href="/essays/${slug}/${there === "" ? "" : `${there}/`}#${id}"`;
    });
  const items = sections.map((s) => `<li><a href="/essays/${slug}/${s.id}/">${s.title}</a> <span class="muted">· ${s.count} ${s.count === 1 ? "entry" : "entries"}</span></li>`);
  const list = `<h2 id="sections">Sections</h2>\n<ol>${items.join("")}</ol>\n`;
  if (sections.length > 0) main.splice(listAt, 0, list);
  return { main: relink(main.join(""), ""), sections: sections.map((s) => ({ id: s.id, title: s.title, html: relink(s.html, s.id) })) };
}

function writePaper(out: string, post: Post, paper: Paper): void {
  const dir = `${out}/essays/${post.slug}/${paper.slug}`;
  mkdirSync(dir, { recursive: true });
  const html = Bun.markdown.html(paper.source, { headings: { ids: true } });
  writeFileSync(`${dir}/index.html`, paperPage(post, paper, html));
}

await main();

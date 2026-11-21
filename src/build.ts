import { relative, resolve, sep } from "node:path";
import { cpSync, existsSync, mkdirSync, renameSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { apiPage, callsPage, dealsPage, errorPage, forecastsPage, homePage, notFoundPage, paperPage, postPage } from "./pages.ts";
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
  const css = readFileSync("static/kowalski.css", "utf8") + readFileSync("static/style.css", "utf8");
  writeFileSync(`${out}/style.css`, css);
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
  writeFileSync(`${dir}/index.html`, postPage(post, body.html, body.toc, kinds));
  writeFileSync(`${dir}/index.md`, textVersion(post));
}

function writePaper(out: string, post: Post, paper: Paper): void {
  const dir = `${out}/essays/${post.slug}/${paper.slug}`;
  mkdirSync(dir, { recursive: true });
  const html = Bun.markdown.html(paper.source, { headings: { ids: true } });
  writeFileSync(`${dir}/index.html`, paperPage(post, paper, html));
}

await main();

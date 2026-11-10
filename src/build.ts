import { relative, resolve } from "node:path";
import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { homePage, postPage } from "./pages.ts";
import { figureKinds, figures, footnoteHtml, footnotes, headings, parsePost, textVersion, type Post } from "./post.ts";
import { FIGURE_KINDS } from "./figures.ts";

function insertNewestFirst(posts: Post[], post: Post): void {
  let at = 0;
  while (at < posts.length && (posts[at]?.date ?? "") >= post.date) at++;
  posts.splice(at, 0, post);
}

function loadPosts(dir: string, drafts: boolean): Post[] {
  const posts: Post[] = [];
  if (!existsSync(dir)) return posts;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const post = parsePost(slug, readFileSync(`${dir}/${slug}/post.md`, "utf8"));
    if (drafts || !post.draft) insertNewestFirst(posts, post);
  }
  return posts;
}

function renderBody(post: Post, postsDir: string): { html: string; toc: ReturnType<typeof headings> } {
  const split = footnotes(post.source);
  const withFigures = figures(split.body, post.slug, postsDir);
  const html = footnoteHtml(Bun.markdown.html(withFigures, { headings: { ids: true } }), split.notes);
  return { html, toc: headings(html) };
}

async function buildAssets(out: string): Promise<void> {
  cpSync("static/fonts", `${out}/fonts`, { recursive: true });
  cpSync("static/public", out, { recursive: true });
  mkdirSync(`${out}/shared`);
  copyFileSync("static/kowalski.css", `${out}/shared/kowalski.css`);
  const css = readFileSync("static/kowalski.css", "utf8") + readFileSync("static/style.css", "utf8");
  writeFileSync(`${out}/style.css`, css);
  const entrypoints = ["src/kit/entry/kit.ts"];
  for (const kind of FIGURE_KINDS) entrypoints.push(`src/kit/entry/${kind}.ts`);
  const built = await Bun.build({ entrypoints, outdir: `${out}/kit`, root: "src/kit/entry", minify: true, splitting: true, target: "browser" });
  if (!built.success) throw new Error("the kit did not build");
}

async function main(): Promise<void> {
  const drafts = Bun.argv.includes("--drafts");
  const outIndex = Bun.argv.indexOf("--out");
  const out = outIndex > 0 ? (Bun.argv[outIndex + 1] ?? "dist") : "dist";
  const postsIndex = Bun.argv.indexOf("--posts");
  const postsDir = postsIndex > 0 ? (Bun.argv[postsIndex + 1] ?? "posts") : "posts";
  if (!relative(resolve(out), resolve(postsDir)).startsWith("..")) throw new Error(`--out ${out} must not hold the posts in ${postsDir}`);
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  await buildAssets(out);
  const posts = loadPosts(postsDir, drafts);
  writeFileSync(`${out}/index.html`, homePage(posts));
  for (const post of posts) writePost(out, post, postsDir);
  console.log(`built ${posts.length} post(s) into ${out}`);
}

function writePost(out: string, post: Post, postsDir: string): void {
  const body = renderBody(post, postsDir);
  const kinds = figureKinds(post.source);
  const dir = `${out}/essays/${post.slug}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, postPage(post, body.html, body.toc, kinds));
  writeFileSync(`${dir}/index.md`, textVersion(post));
}

await main();

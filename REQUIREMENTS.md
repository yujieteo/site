# Requirements

Source: the author's words in SITE-22 and SITE-23, on 2026-11-06.
When the site and this file disagree, change the site.

## Purpose

1. The site publishes posts. It does nothing else.
2. A post is a Markdown file in `posts/NAME/post.md`.
3. The build makes one page and one text version for each post.

## URLs

1. `/` lists the posts, newest first. It says "No posts yet." when there are none.
2. A post is at `/essays/NAME/`. Its text version is at `/essays/NAME/index.md`.
3. The OpenPGP key of <contact@teoyujie.org> is at `/contact.asc`. The footer of each page links to it.
4. WKD serves the key from `/.well-known/openpgpkey/`. The files are in `static/public/`.
5. The tools are at `/play/goosestrike/`, `/play/theorems/explorer/` and `/play/theorems/learner/`. The files are in `play/`. They are copies of the tool builds, and the rules skip them.
6. Every other URL returns 404.

## Tools

1. A tool is one static page that runs in the browser. It works at 390 px and on a desktop.
2. The page of a tool is not counted against a post limit. A post never loads it. The post links it in its data section.
3. A tool that needs a server has no page here. Its post links the repository.

## Post kit

1. Each post has a summary block, a contents list and a reading time.
2. A footnote opens on hover. A tap keeps it open. Escape closes it.
3. Each moving figure has one pause button.
4. A figure can have a slider that recomputes a value.
5. Each figure has a caption and alt text. The build fails if one is missing.
6. Each post has a download limit in KB of first load. The build fails over it.
7. The limit is the first load rounded up to the next 10 KB. It is 80 KB for the posts now.
8. Each figure kind has its own script, `/kit/KIND.js`. A post loads only the kinds it uses.
9. A schematic figure is `::figure kind=schematic src=NAME.svg`, with the SVG in the post folder. Its labelled parts are `<g data-label="TEXT">`. A Next button shows them one at a time.
10. The specimen post is a draft. It is built in evals and never deployed.
11. A chart is drawn again at the width it gets. One unit is one pixel and labels stay 12 px. Ticks and labels that would touch are thinned or shortened.
12. Chart panels drop to one column when narrow.
13. A figure with `wide=true` is up to 960 px wide, or as wide as the screen when that is less.
14. A chart mark has a tooltip. It sits above the mark and opens after a short delay, then at once for its neighbours. A tap shows it on a phone.

## Look

1. The look is emilkowal.ski, light only. Tokens are in `static/kowalski.css`.
2. Hover styles apply only under `(hover: hover) and (pointer: fine)`.
3. Chart colours are the tokens `--series-1` to `--series-4`: Radix blue, orange, violet and grass, step 11. A figure never writes a hex colour.

## Build

1. `bun src/build.ts` builds `dist/`. Add `--drafts` to build drafts.
2. `src/kit/` is code for the browser. It may use function values: the `fnvalue` rule is off there.
3. `./gate` checks the rules, the evals and the hot runs.

## Deploy

1. Commit to `main`. Turn on the VPN. Run `scripts/deploy.sh`.
2. The deploy runs the gate, builds, sends `dist/` and tests `/`.

## Removed

1. The old posts, the apps, the privacy and support pages and the log are gone.
2. They stay in git history. The tag `pre-rebuild` marks the last old version.

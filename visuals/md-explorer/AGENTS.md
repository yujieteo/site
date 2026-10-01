# AGENTS.md: Markdown Explorer

Paste or drop standard markdown and explore it offline: a tab per file, a section tree, in-tab and cross-tab links, backlinks, inline `#tags` and Ctrl/Cmd+K search. Live at <https://teoyujie.org/visuals/md-explorer/>.

## Source of truth

This folder is `visuals/md-explorer/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/md-explorer), and that is the source of truth. The standalone repository [yujieteo/md-explorer](https://github.com/yujieteo/md-explorer) is a read-only, exact mirror of this folder: make every change upstream in yujieteo/site, never in the mirror.

## Files and data

See [README.md](README.md). `index.html` is the whole tool with no build step: edit it directly. `<script id="marked-lib">` is marked v18.0.14, `<script id="mdx-core">` the pure core (`self.MdxCore`; no DOM or storage) and `<script id="mdx-ui">` the page and the WebMCP tools. `raw.json` (published as `data.json`) must equal the core's `META`. The tests are in this folder, in [tests/md-explorer.test.mjs](tests/md-explorer.test.mjs).

## Build, test and verify

From this folder (in the mirror too):

```sh
node --test tests/
```

From the root of a yujieteo/site checkout: `node --test visuals/md-explorer/tests/`. To update marked, follow the README.

## Conventions

- `index.html` is one self-contained HTML file with marked inlined; it makes no runtime network requests. The only remote loads are `https:` images written in the user's own markdown, and a Content-Security-Policy meta tag enforces the link and image rules.
- Raw HTML is shown as text; only `http:`, `https:`, `mailto:` and in-app `#` links are live.
- Tests use Node's built-in `node --test` runner only; never add Vitest, Jest or a `package.json`.
- The page has no beamdswitch deck; one added later must use the site's unchanged shared template, which declares `voice: bf_emma`.

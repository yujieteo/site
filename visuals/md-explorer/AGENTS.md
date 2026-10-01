# AGENTS.md: Markdown Explorer

Paste or drop standard markdown and explore it offline: a tab per file, a section tree, in-tab and cross-tab links, backlinks, inline `#tags` and Ctrl/Cmd+K search. Live at <https://teoyujie.org/visuals/md-explorer/>.

## Source of truth

The standalone repository [yujieteo/md-explorer](https://github.com/yujieteo/md-explorer) is where this visualisation and its tests develop and where CI runs them. `visuals/md-explorer/` in [yujieteo/site](https://github.com/yujieteo/site/tree/main/visuals/md-explorer) is a port of its page files, refreshed when the visualisation is updated, and the site runs no logic tests for it. Porting copies the folder minus `tests/` and `.github/`.

## Files and data

See [README.md](README.md). `index.html` is the whole tool with no build step: edit it directly. `<script id="marked-lib">` is marked v18.0.14, `<script id="mdx-core">` the pure core (`self.MdxCore`; no DOM or storage) and `<script id="mdx-ui">` the page and the WebMCP tools. `raw.json` (published as `data.json`) must equal the core's `META`. The tests are in `tests/md-explorer.test.mjs` of yujieteo/md-explorer.

## Build, test and verify

From the root of a yujieteo/md-explorer checkout:

```sh
node --test tests/
```

To update marked, follow the README.

## Conventions

- `index.html` is one self-contained HTML file with marked inlined; it makes no runtime network requests. The only remote loads are `https:` images written in the user's own markdown, and a Content-Security-Policy meta tag enforces the link and image rules.
- Raw HTML is shown as text; only `http:`, `https:`, `mailto:` and in-app `#` links are live.
- Tests use Node's built-in `node --test` runner only; never add Vitest, Jest or a `package.json`.
- The page has no beamdswitch deck; one added later must use the site's unchanged shared template, which declares `voice: bf_emma`.

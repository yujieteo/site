# Add or change a visualization

A visualization is published from one of two places. Everything new is built in this repository.

- **In this repository (the default):** its own folder `visuals/<slug>/`: `index.html`, `raw.json` (published as `data.json`), a `README.md` saying what each file is and how to rebuild, often a `LICENSE`, and any build script or sources. Its stub's `html_path` and `data_path` start with `visuals/<slug>/`. Never put sources under the generated `site/`.
- **In the public [`visuals`](https://github.com/yujieteo/visuals) repository:** `viz/<slug>/index.html` and `data/<slug>/raw.json` (or `.csv`), published at the commit pinned in `data/visuals/<slug>.pin`. Older data visualizations such as `haze-singapore` live there.

Some folders under `visuals/` track or vendor another repository (for example `beamdiag` and `beamdswitch`) or have a public mirror. The folder's `README.md` names the upstream and says how to update it; follow it rather than editing the copy freely.

## Steps

1. For a tool built here, create or edit `visuals/<slug>/`. When `index.html` is generated (a `build.py` or `build.mjs` beside a `template.html` or `src/`), edit the sources and rerun the build; never edit or hand-merge the generated `index.html`. Keep the calculation in a pure engine (a `<script id="<slug>-engine">` block or an `engine.js` with no DOM access) so Node can load it.
2. For a pinned visualization, land the change in the `visuals` repository first, then write the full 40-character commit hash, on one line, to `data/visuals/<slug>.pin`. Set `VISUALS_REPO` to that checkout when it is not a sibling directory.
3. Add or edit `data/visuals/<slug>.yaml` with `slug`, `title`, `summary`, `source_url`, `fetched`, `html_path`, `data_path`, `webmcp_tools` (at least three), `tags`, and `category`, plus optional `links` (see [Link related items](../reference/links.md)). `schema/visualization.schema.json` is the authority; copy a neighbouring stub such as `data/visuals/mohr.yaml`. The Visuals page lists visuals newest `fetched` first, with same-day visuals in slug order.
4. Reuse tags already used by other visuals or notes (lowercase, hyphenated); the Visuals page shows them as filters, so add a new tag only for a genuinely new subject.
5. A tool built here may list `assets` (further files in `visuals/<slug>/`, published beside its `index.html`) and `downloads` (a JSON file whose `downloads` list pins files too large for Git, such as model weights, by `path`, `url`, `sha256` and `bytes`; the build fetches them). Never commit those large files; `data/visuals/beamdswitch.yaml` is the example, and the [README](../../README.md#build) describes the download cache.
6. Test a tool with Node's built-in runner: `tests/<slug>.test.mjs` loads the engine from `index.html` (see `tests/mohr.test.mjs`) and checks results against the tool's own values and its references. Python checks go in `tests/test_<slug>.py`. Never add Vitest or another test framework.
7. For a narrated beamdswitch report, follow [Narrated reports](#narrated-reports) below.
8. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication.

## Narrated reports

A visualization that offers a narrated report for [beamdswitch](https://teoyujie.org/visuals/beamdswitch/) writes it with the site's standard report template, so every talk reads alike: [`templates/beamdswitch.js`](../../templates/beamdswitch.js) (`deck(report)` turns a report of plain data into a beamdswitch Markdown deck with narration on every slide) and its skeleton [`templates/beamdswitch-report.md`](../../templates/beamdswitch-report.md). Copy `beamdswitch.js` unchanged into `visuals/<slug>/`, inline it in the page, and have a test assert the copy is still identical to `templates/beamdswitch.js`; the visualization supplies only its own numbers, formatted as its page shows them. Beamdiag is the example: `BeamDiag.beamReport` in `visuals/beamdiag/engine.js` builds the report, and `tests/beamdiag-beamdswitch.test.mjs` parses its decks with beamdswitch's own parsers (read-only copies in `tests/fixtures/beamdswitch/`).

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).

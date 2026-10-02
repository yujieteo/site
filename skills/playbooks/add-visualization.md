# Add or change a visualization

A visualization is published from one of two places. Everything new is built and tested in its own standalone repository first, then ported here (see [New tools start in their own repository](#new-tools-start-in-their-own-repository)).

Every visualization inherits the canonical parent specification, the [`interactive-visual-spec`](https://github.com/yujieteo/skills/tree/main/interactive-visual-spec) skill in `yujieteo/skills`: the artifact contract, state and export, interaction and accessibility, pedagogy, visual grammar, test ownership and the definition of done. This playbook covers only how a visualization reaches this site; read that skill for the requirements themselves rather than restating them here.

- **Ported from its standalone repository (the default):** the public repository `yujieteo/<slug>` is the source of truth. The visualization, its logic tests and its CI live there; this repository's folder `visuals/<slug>/` is a port of the page files, made by copying the repository minus `tests/` and `.github/`: `index.html`, `raw.json` (published as `data.json`), a `README.md` saying what each file is and how to rebuild, an MIT `LICENSE`, and any build script or sources. Its stub's `html_path` and `data_path` start with `visuals/<slug>/`. Never put sources under the generated `site/`.
- **In the public [`visuals`](https://github.com/yujieteo/visuals) repository:** `viz/<slug>/index.html` and `data/<slug>/raw.json` (or `.csv`), published at the commit pinned in `data/visuals/<slug>.pin`. Older data visualizations such as `haze-singapore` live there.

Two older folders predate this: `beamdswitch` vendors another repository, and its `README.md` names the upstream and says how to update it (follow it rather than editing the copy freely); `fbd` is still built here. A ported folder's `AGENTS.md` names `yujieteo/<slug>`. The folder carries `AGENTS.md` (for agents changing it, identical in both copies), `SKILLS.md` (for agents using it) and an MIT `LICENSE`, and links only to files inside itself; `tests/test_visual_folder_docs.py` checks them, and a change to a page's WebMCP tools, exports or commands updates them too.

## New tools start in their own repository

Every new tool, and every unlanded one whose tests were written here, develops in a public standalone repository `yujieteo/<slug>` (created by the owner) before it reaches this site:

1. Put the folder's files at the repository root and its tests in `tests/`, with paths adjusted to the root. Copy (never symlink) the helpers and fixtures they import, such as `tests/beamdswitch-deck-checks.mjs`, `tests/fixtures/beamdswitch/` and read-only copies of `templates/beamdswitch.js` and `templates/beamdswitch-report.md`. A check of the catalogue stub stays here, not there.
2. Add `AGENTS.md` (saying the repository is where the tool and its tests develop and the site's folder is a port of its page files minus `tests/` and `.github/`), `SKILLS.md`, an MIT `LICENSE` (Copyright (c) 2026 Yu Jie Teo) and `.github/workflows/ci.yml` running `node --test 'tests/*.test.{mjs,cjs}'` on Node 22, plus Python unittest or a `--check` build only when the tool has them. [yujieteo/mohr](https://github.com/yujieteo/mohr) is the model.
3. Run the tests there, including the browser checks that stand in for the technical E2E repository (see [Three test layers](#three-test-layers)) and the first [no-mistakes run](#end-to-end-testing-and-the-two-pipeline-runs), push, and confirm the repository's CI passes. Fix real bugs there first.
4. Port it here: `visuals/<slug>/` is the repository minus `tests/` and `.github/`, byte for byte, with its stub in `data/visuals/<slug>.yaml`. Add no logic tests here; add the slug to `PORTS` in `tests/test_visual_ports.py`, which checks the port.

Later changes follow the same order: change and test the standalone repository, then port the page files here.

## Steps

1. Build and test in the standalone repository first. A new visualization needs the owner to create the public `yujieteo/<slug>` repository; ask for it rather than building in `visuals/<slug>/`, and set it up as [New tools start in their own repository](#new-tools-start-in-their-own-repository) says. Make the change there, with its logic tests in its `tests/` and its CI in `.github/`, and get its unit, logic and stand-in browser tests passing there, then run the first [no-mistakes pass](#end-to-end-testing-and-the-two-pipeline-runs). When `index.html` is generated (a `build.py` or `build.mjs` beside a `template.html` or `src/`), edit the sources and rerun the build; never edit or hand-merge the generated `index.html`. Keep the calculation in a pure engine (a `<script id="<slug>-engine">` block or an `engine.js` with no DOM access) so Node can load it.
2. Then open a pull request here that ports the page files into `visuals/<slug>/` (the repository minus `tests/` and `.github/`) and adds or edits its catalogue stub (step 4). For a new visualization, add the slug to `PORTS` in `tests/test_visual_ports.py`. Never copy the logic tests here. Run the second [no-mistakes pass](#end-to-end-testing-and-the-two-pipeline-runs) on this pull request, unless it is a straight port on the [fast path](../verify.md#review-tier).
3. For a pinned visualization, land the change in the `visuals` repository first, then write the full 40-character commit hash, on one line, to `data/visuals/<slug>.pin`. Set `VISUALS_REPO` to that checkout when it is not a sibling directory.
4. Add or edit `data/visuals/<slug>.yaml` with `slug`, `title`, `summary`, `source_url`, `fetched`, `html_path`, `data_path`, `webmcp_tools` (at least three), `tags`, and `category`, plus optional `links` (see [Link related items](../reference/links.md)). `schema/visualization.schema.json` is the authority; copy a neighbouring stub such as `data/visuals/mohr.yaml`. The Visuals page lists visuals newest `fetched` first, with same-day visuals in slug order.
5. Reuse tags already used by other visuals or notes (lowercase, hyphenated); the Visuals page shows them as filters, so add a new tag only for a genuinely new subject.
6. A tool may list `assets` (further files in `visuals/<slug>/`, published beside its `index.html`) and `downloads` (a JSON file whose `downloads` list pins files too large for Git, such as model weights, by `path`, `url`, `sha256` and `bytes`; the build fetches them). Never commit those large files; `data/visuals/beamdswitch.yaml` is the example, and the [README](../../README.md#build) describes the download cache.
7. Test the logic with Node's built-in runner in the standalone repository: `tests/<slug>.test.mjs` loads the engine from `index.html` (see [the Mohr test](https://github.com/yujieteo/mohr/blob/main/tests/mohr.test.mjs) in yujieteo/mohr) and checks results against the tool's own values and its references; Python checks go in `tests/test_<slug>.py`. Never add Vitest or another test framework. Here, add only site checks: how the site publishes the port (`tests/test_visual_ports.py`), not what the page computes. Unit and logic tests alone are not enough: every change is also tested in the browser and site layers (see [End-to-end testing and the two pipeline runs](#end-to-end-testing-and-the-two-pipeline-runs)). Keep every site test cheap; see [Site test cost](#site-test-cost).
8. For a narrated beamdswitch report, follow [Narrated reports](#narrated-reports) below.
9. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication.

## End-to-end testing and the two pipeline runs

### Three test layers

Each behaviour has one owning repository, as the canonical specification's [test ownership](https://github.com/yujieteo/skills/tree/main/interactive-visual-spec/references/test-ownership.md) (§26 to §37) requires:

1. **Model: the visualization's repository `yujieteo/<slug>`.** Unit, model, fixture, schema, deterministic-generation and static artifact tests.
2. **Browser product: a dedicated technical E2E repository.** Real-browser tests of the generated HTML, pointed directly at the artifact without deploying the site. This repository is pending: it has not been created yet. Until it exists, the visualization repository's browser checks stand in for it temporarily; when it is created they move there, never here.
3. **Website integration: this repository.** Only whether the site exposes and integrates the port (catalogue stub, published files, routes, the Visuals page), through [Stage A](../verify.md#stage-a-pre-deploy) and, after a deploy, [Stage B](../verify-post-deploy.md). This repository never copies the model or browser tests.

### The two pipeline runs

The no-mistakes pipeline runs twice per change, or only the first time for a straight port:

1. **In `yujieteo/<slug>`**, before the site pull request. It runs the repository's unit and logic tests and the browser checks that stand in for the technical E2E repository. As a smoke check of the interface between the two repositories, it also builds a shallow clone of `yujieteo/site` with the change ported in and browses that one visualization's page in the site shell (catalogue stub, WebMCP tools, published `data.json`): take a shallow clone (`git clone --depth 1 https://github.com/yujieteo/site`), port the change into it, and build and browse only that page; never run the full site build or the site's test suite there, and add no site tests to that repository.
2. **On the site pull request** that ports it, unless the pull request is a straight port on the [fast path](../verify.md#review-tier): its diff is only the byte-identical port and its catalogue stub, so Stage A and the pull request's CI, which must pass before it lands ([fast-path landing](../verify.md#fast-path-landing)), cover it. Only the site-level tests run: [Stage A](../verify.md#stage-a-pre-deploy) (validate, build, the Python and Node suites, including `tests/test_visual_ports.py`), which checks the port in the built site. The logic and browser tests are not repeated here, and the first run does not repeat the site suite: each check runs in exactly one of the two.

## Site test cost

Plan for many more visualizations, tests and parallel workers than today; the site suite is already a bottleneck, so its current running time is not a benchmark to stay under.

- The site suite's total time is a budget that must not grow with the number of visualizations. A per-visualization site check is constant-cost and data-driven: one entry in a list such as `PORTS`, with no per-visualization build or browser step on the site.
- Heavy tests live in the visualization's own repository, and browser end-to-end tests in the technical E2E repository (until it exists, in the visualization's repository as a stand-in), where they run only when the visualization changes.
- Never put rebuilds, subprocess builds, full-corpus scans, browser launches or network access in a site test.
- Time every site test you add, for example `time .venv/bin/python -m unittest tests.test_visual_ports` or `time node --test tests/<file>.test.mjs`, and keep each well under a second. A pull request that adds site test time lists each added test with its time, and says how much it adds to the suite and why.

## Narrated reports

A visualization that offers a narrated report for [beamdswitch](https://teoyujie.org/visuals/beamdswitch/) writes it with the site's standard report template, so every talk reads alike: [`templates/beamdswitch.js`](../../templates/beamdswitch.js) (`deck(report)` turns a report of plain data into a beamdswitch Markdown deck with narration on every slide; every deck declares a narration voice in its front matter, British female `bf_emma` unless the report's `meta.voice` names another, so narration plays without the reader choosing one) and its skeleton [`templates/beamdswitch-report.md`](../../templates/beamdswitch-report.md). Copy `beamdswitch.js` unchanged into `visuals/<slug>/`, inline it in the page, and have a test assert the copy is still identical to `templates/beamdswitch.js`; the visualization supplies only its own numbers, formatted as its page shows them. Beamdiag is the example: `BeamDiag.beamReport` in `visuals/beamdiag/engine.js` builds the report. The site's deck tests, such as `tests/fbd-beamdswitch.test.mjs`, parse the decks with beamdswitch's own parsers through `tests/beamdswitch-deck-checks.mjs` (read-only copies in `tests/fixtures/beamdswitch/`).

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).

# Add or change a visualization

Every public visualization lives in its own folder `viz/<slug>/` of the public [yujieteo/visuals](https://github.com/yujieteo/visuals) repository: its page, data, builder, its own tests and its `visual.json`, the catalogue entry this site publishes. The site builds every one of them from a checkout of that repository (`VISUALS_REPO` or a sibling checkout, see the [README](../../README.md#build)) as it is checked out: there are no ports, pins or catalogue stubs for them here, so adding or changing one is a pull request to yujieteo/visuals only, following its `SKILLS.md`, and the next build and deploy of this site publish it at `teoyujie.org/visuals/<slug>/`.

Every visualization inherits the canonical parent specification, the [`interactive-visual-spec`](https://github.com/yujieteo/skills/tree/main/interactive-visual-spec) skill in `yujieteo/skills`: the artifact contract, state and export, interaction and accessibility, pedagogy, visual grammar, test ownership and the definition of done. This playbook covers only how a visualization reaches this site.

Two private visualizations stay folders of this repository, because their sources are private and yujieteo/visuals is public: `beamdswitch` vendors the built page of the private yujieteo/beamdswitch (its `README.md` names the upstream and says how to update it), and `connes-qft` is a port of the private yujieteo/connes-qft's page files (its `AGENTS.md` says where it develops). Each has a catalogue stub `data/visuals/<slug>.yaml` whose `html_path` and `data_path` start with `visuals/<slug>/`; `tests/test_visual_ports.py` and `tests/test_visual_folder_docs.py` check them. A change to one of them is made upstream first, then copied here unchanged.

## Steps

1. For a public visualization, work in yujieteo/visuals: its `SKILLS.md` says how to add or change `viz/<slug>/` and its checks, and its CI runs only the visuals a change touches. Nothing changes here; a new visualization appears on the Visuals page at the next build.
2. To publish, deploy this site after the yujieteo/visuals pull request merges (see [Deploy generated files](deploy.md)): the build reads the visuals checkout as it is, so update it to the commit to publish first, and record the visuals commit the build prints with the deploy.
3. For `beamdswitch` or `connes-qft`, copy the upstream change into `visuals/<slug>/` byte for byte and edit `data/visuals/<slug>.yaml` if its catalogue fields change. `schema/visualization.schema.json` is the authority for a stub; the same fields fill a `visual.json` in yujieteo/visuals.
4. Reuse tags already used by other visuals or notes (lowercase, hyphenated); the Visuals page shows them as filters, so add a new tag only for a genuinely new subject.
5. A visualization may list `assets` (further files of its folder, published beside its `index.html`) and `downloads` (a JSON file whose `downloads` list pins files too large for Git, such as model weights, by `path`, `url`, `sha256` and `bytes`; the build fetches them). Never commit those large files; `data/visuals/beamdswitch.yaml` is the example, and the [README](../../README.md#build) describes the download cache.
6. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication.

## Test ownership

Each behaviour has one owning repository, as the canonical specification's [test ownership](https://github.com/yujieteo/skills/tree/main/interactive-visual-spec/references/test-ownership.md) (§26 to §37) requires:

1. **Model and page: yujieteo/visuals.** Each visualization's unit, model, fixture, deck and browser tests live in its folder there and run only when it changes.
2. **Browser product: the technical E2E checks**, pointed directly at the artifact without deploying the site.
3. **Website integration: this repository.** Only whether the site publishes and integrates each visualization (its catalogue entry, the published page, data and assets, routes and the Visuals page), through [Stage A](../verify.md#stage-a-pre-deploy) and, after a deploy, [Stage B](../verify-post-deploy.md). This repository never copies the model or browser tests.

## Site test cost

Plan for many more visualizations, tests and parallel workers than today; the site suite is already a bottleneck, so its current running time is not a benchmark to stay under.

- The site suite's total time is a budget that must not grow with the number of visualizations. A per-visualization site check is constant-cost and data-driven, such as comparing a published file with its source, with no per-visualization build or browser step on the site.
- Heavy tests live in the visualization's folder in yujieteo/visuals, where they run only when the visualization changes.
- Never put rebuilds, subprocess builds, full-corpus scans, browser launches or network access in a site test.
- Time every site test you add, for example `time .venv/bin/python -m unittest tests.test_visualizations` or `time node --test tests/<file>.test.mjs`, and keep each well under a second. A pull request that adds site test time lists each added test with its time, and says how much it adds to the suite and why.

## Narrated reports

A visualization that offers a narrated report for [beamdswitch](https://teoyujie.org/visuals/beamdswitch/) writes it with the site's standard report template, so every talk reads alike: [`templates/beamdswitch.js`](../../templates/beamdswitch.js) (`deck(report)` turns a report of plain data into a beamdswitch Markdown deck with narration on every slide; every deck declares a narration voice in its front matter, British female `bf_emma` unless the report's `meta.voice` names another, so narration plays without the reader choosing one) and its skeleton [`templates/beamdswitch-report.md`](../../templates/beamdswitch-report.md). Each visualization's folder carries `beamdswitch.js`, an unchanged copy of the template, inlined in its page; `tests/beamdswitch-voice.test.mjs` here checks every copy, in this repository and in the visuals checkout, against `templates/beamdswitch.js`. When the template changes, update the copies here in the same change, and have yujieteo/visuals copy it into its visuals first, from this change's branch, as its `SKILLS.md` says; that pull request merges before this one. The visualization supplies only its own numbers, formatted as its page shows them; its deck tests live in its folder and parse the decks with beamdswitch's own parsers.

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).

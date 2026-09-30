# Add or republish a visualization

Visualization HTML and data live in the separate public [`visuals`](https://github.com/yujieteo/visuals) repository (`viz/<slug>/index.html`, `data/<slug>/raw.json` or `.csv`). This repository holds only the metadata stub and the pinned visuals commit.

A visualization built in this repository instead keeps its sources in `visuals/<slug>/` (never under the generated `site/`), and its stub points `html_path` and `data_path` at `visuals/<slug>/...`; the build resolves those paths against this repository, so steps 1, 3 and 4 do not apply. Such a visualization may also list `assets` (further files in `visuals/<slug>/`, published beside its `index.html`) and `downloads` (a JSON file whose `downloads` list pins files too large for Git, such as model weights, by `path`, `url`, `sha256` and `bytes`; the build fetches them). Never commit those large files; `data/visuals/beamdswitch.yaml` is the example, and the [README](../../README.md#build) describes the download cache.

1. Land the visualization in the `visuals` repository first; note the commit that contains it.
2. Add or edit `data/visuals/<slug>.yaml` with `slug`, `title`, `summary`, `source_url`, `fetched`, `html_path`, `data_path`, `webmcp_tools` (at least three), `tags`, and `category`, plus optional `links` (see [Link related items](../reference/links.md)). `schema/visualization.schema.json` is the authority; copy a neighbouring stub such as `data/visuals/haze-singapore.yaml`. Reuse a tag already used by another visual or note where one fits, because the Visuals page shows them as filters. The page lists visuals newest `fetched` first, with same-day visuals in slug order.
3. Point the build at the checkout: `export VISUALS_REPO=<path to visuals>` when it is not a sibling directory.
4. Write the full 40-character commit hash from step 1, on one line, to `data/visuals/<slug>.pin`. The build and CI publish the HTML and data at that commit, whatever the checkout has checked out; each visualization has its own pin file, so pull requests for different visualizations do not conflict.
5. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).

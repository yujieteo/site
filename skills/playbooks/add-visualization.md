# Add or republish a visualization

Visualization HTML and data live in the separate public [`visuals`](https://github.com/yujieteo/visuals) repository (`viz/<slug>/index.html`, `data/<slug>/raw.json` or `.csv`). This repository holds only the metadata stub.

1. Land the visualization in the `visuals` repository first; note the commit that contains it.
2. Add or edit `data/visuals/<slug>.yaml` with `slug`, `title`, `summary`, `source_url`, `fetched`, `html_path`, `data_path`, `webmcp_tools` (at least three), `tags`, and `category`. `schema/visualization.schema.json` is the authority; copy a neighbouring stub such as `data/visuals/haze-singapore.yaml`.
3. Point the build at the checkout: `export VISUALS_REPO=<path to visuals>` when it is not a sibling directory.
4. Update the `visuals` checkout `ref` in `.github/workflows/ci.yml` to the commit from step 1, so CI compares against the matching output.
5. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [Keep the diff scoped](../principles/minimal-diff-scope.md).

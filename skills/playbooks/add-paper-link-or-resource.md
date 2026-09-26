# Add a paper link or resource

Choose one path.

## Parse URL and note blocks

1. Put each source in its own blank-line-separated block. Each block must contain a URL and note text.
2. Run `scripts/parse_notes.py <input-file> <temporary-yaml-file>`. Never use a canonical file as the destination because the parser overwrites it.
3. Require the parser summary to report `skipped 0`.
4. Review titles, categories, URLs, and notes in the temporary YAML. Remove records already present in the canonical YAML.
5. Append the reviewed records to either `data/paper-links/*.yaml` or `data/resources/*.yaml`.

## Add YAML by hand

1. Add a record to the relevant canonical YAML file.
2. For a paper link, provide `title`, `url`, `category`, and `note`.
3. For a resource, provide `title`, `url`, and `category`. Add `note` when useful.
4. Add `tags` only when they differ from the category fallback.

Run [Stage A](../verify.md#stage-a-pre-deploy). Then follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Minimal diff scope](../principles/minimal-diff-scope.md).

# Add a paper link or resource

Choose one path.

## Parse URL and note blocks

1. Put each source in its own blank-line-separated block. Each block must contain a URL and note text.
2. Run `.venv/bin/python scripts/parse_notes.py <input-file> <temporary-yaml-file>`. Never use a canonical file as the destination because the parser overwrites it.
3. Require the parser summary to report `skipped 0`.
4. Review titles, categories, URLs, and notes in the temporary YAML. Remove records already present in the canonical YAML.
5. Append the reviewed records to either `data/paper-links/*.yaml` or `data/resources/*.yaml`.
6. For paper links, run the two commands in step 5 of the next section.

## Add YAML by hand

1. Add a record to the relevant canonical YAML file.
2. For a paper link, provide `title`, `url`, `category`, and `note`.
3. For a resource, provide `title`, `url`, and `category`. Add `note` when useful.
4. For a resource, add `tags` only when they differ from the category fallback.
5. For a paper link, optionally add `authors` (a list) and `year`. Then run `.venv/bin/python scripts/paper_tags.py --write` and `.venv/bin/python scripts/papers.py export`. These commands refresh the tags and `exports/paper-links.toon`.

Run [Stage A](../verify.md#stage-a-pre-deploy). Then follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Minimal diff scope](../principles/minimal-diff-scope.md).

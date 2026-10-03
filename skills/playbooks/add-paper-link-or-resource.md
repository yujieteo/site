# Add a paper link or resource

`scripts/add_links.py` takes `paper` (for `data/paper-links/paper-links.yaml`) or `resource` (for `data/resources/resources.yaml`), and an input file: blank-line-separated blocks that each hold a URL and note text, or a YAML list of records. Each record needs `title`, `url`, and `category`, and a paper link also a `note`; the script checks them against `schema/paper-links.schema.json` or `schema/resources.schema.json`. It refuses a block it cannot parse (the parser's `skipped` count must be 0) and a URL already in `data/paper-links/` or `data/resources/`, so a record is appended once.

1. Run `.venv/bin/python scripts/add_links.py <paper|resource> <input-file> --review <review.yaml>`, with `<review.yaml>` outside `data/`. It writes the parsed records there; it never writes a canonical file in this step.
2. Judgment: review the titles, categories, URLs, and notes in `<review.yaml>` and edit them. For a resource, add `tags` only when they differ from the category fallback. For a paper link, optionally add `authors` (a list) and `year`. To add one record by hand, write it as a one-item YAML list in the same kind of file.
3. Run `.venv/bin/python scripts/add_links.py <paper|resource> <review.yaml>`. It appends the reviewed records to the canonical YAML file. For paper links it then runs `.venv/bin/python scripts/paper_tags.py --write` and `.venv/bin/python scripts/papers.py export`, which refresh the tags and `exports/paper-links.toon`; the tag refresh takes several minutes on the full list. Add `--check` to print the records without appending them.
4. Run [Stage A](../verify.md#stage-a-pre-deploy). Then follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Minimal diff scope](../principles/minimal-diff-scope.md).

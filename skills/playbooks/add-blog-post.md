# Add a blog post

1. Run `.venv/bin/python scripts/new_post.py <slug> --title "<title>" --summary "<summary>" --category <category> --tag <tag> [--tag <tag> ...]`. It writes `data/blog/<slug>.md` with the `title`, `date` (today, or `--date YYYY-MM-DD`), `summary`, `category`, `tags` and `slug` front matter that `schema/blog.schema.json` requires, and an empty body. Add `--check` to print the file without writing it. It refuses an invalid slug or date and an existing post with other front matter; run again, it changes nothing.
2. Judgment: choose the title, summary, category and tags. Titles, summaries, categories, and tags are searchable. Use `category` as the tag when no more specific tag applies. The script accepts only a tag that another post already uses or a canonical tag (or alias) in `data/note-tags.json`; a tag for a genuinely new topic needs `--new-tag <tag>` as well, so make that choice deliberately.
3. Judgment: write the post body below the closing front-matter delimiter.
4. Run [Stage A](../verify.md#stage-a-pre-deploy). Then follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Minimal diff scope](../principles/minimal-diff-scope.md).

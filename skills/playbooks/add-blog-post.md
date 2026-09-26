# Add a blog post

1. Create one Markdown file in `data/blog/`.
2. Add the required `title`, `date`, `summary`, `category`, and `tags` fields to its YAML frontmatter. Use `YYYY-MM-DD` or an empty string for `date`.
3. Use `category` as the tag when no more specific tag applies.
4. Put the post body below the closing frontmatter delimiter.
5. Run [Stage A](../verify.md#stage-a-pre-deploy). Then follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Minimal diff scope](../principles/minimal-diff-scope.md).

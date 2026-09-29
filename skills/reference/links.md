# Link related items

A visualization (`data/visuals/<slug>.yaml`), media item (`data/podcasts/<id>.yaml`) or blog post (frontmatter in `data/blog/<slug>.md`) may carry `links` to other Corpus Records:

```yaml
links:
  - rel: resolves
    target: note:f19a4c6c267a88589593f70b893d21fb3a2d955614d67a8f6e457848ac20ce36
```

| `rel` | Meaning | Shown on the target as |
| --- | --- | --- |
| `resolves` | Answers an open question (usually a `todo` note) | Resolved by |
| `extends` | Builds on the target | Extended by |
| `uses` | Uses data, a method or a result from the target | Used by |
| `related` | Loosely connected | Related |

- `target` is a Corpus Record id: `note:<64 hex>` (find it with `scripts/notes.py search <words>`), `blog:<slug>`, `visualization:<slug>`, `podcast:<id>`, `video:<id>`, or a `paper:`/`resource:` id from `site/corpus.json`.
- Write each link once, on the newer item. The build adds the reverse link to the target and fails when a target does not exist.
- Notes cannot carry links (they are append-only). A note resolved this way shows as Resolved on `open-questions.html`.

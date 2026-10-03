# Add a note

Every note lives in the single file `data/notes.md`; never split it into other files. Two branches that edit it can conflict (see [docs/architecture.md](../../docs/architecture.md)), so land notes changes one at a time.

1. Inspect `data/notes.md`, including all dated headings and the requested date section.
2. Add each note as a separate Markdown paragraph at the top of the matching `## YYYY-MM-DD` section.
3. If the date is absent, insert one heading in descending date order. Do not duplicate a date heading. `scripts/validate.py` fails on a duplicate date or a heading above an older one.
4. Inspect `data/note-tags.json`. Reuse canonical tags whose descriptions fit, remove redundant tags, and replace aliases or deprecated tags with their canonical replacement.
5. Add a canonical tag only when it names a genuinely distinct recurring topic, project, status, or action. Add its class, selection description, aliases, and `replaced_by` value to the registry in the same change. A `math.*` tag must be an offline arXiv mathematics category listed by the registry.
6. Give every note at least one trailing canonical tag. Tag names are lowercase and can contain letters, numbers, underscores, hyphens, and dots. `todo` alone is valid. When an agent writes a note rather than the author, add `#agent-written` alongside its other tags; apply this going forward and do not retag older notes.
7. Give every new `todo` a date, written as `31 October 2026` or `2026-10-31`, and a done-condition phrased `done when <observable outcome>`. `scripts/validate.py` rejects a `#todo` note missing either one under a heading dated on or after 2026-10-03; notes under older headings are exempt.
8. Close a `todo` as either resolved or dropped, or park it, without rewriting the older note's text.
   - **Resolved** means it was answered. Record the answer where it lives (add a `resolves` link to the note on the answering visual, media item or blog post, see [Link related items](../reference/links.md), or add a new dated note that says what resolved it), or add a dated closing note that lists the resolved items, each with its answer or a link to it.
   - **Dropped** means it was abandoned without an answer. Add a dated closing note that lists each dropped item as `Dropped: <item> - <one-line reason>`. Never call an abandoned todo resolved.
   - **Parked** means paused until a set date, neither resolved nor dropped. Add a dated note that starts `Parked until <date>: <item>`, with the reason, and tag it `#parked`. On the resume date, add a new dated `#todo` for it or drop it.
   - Unless a `resolves` link closes it, remove only the `#todo` tag from each original, leaving its text unchanged. The Open questions page shows the result. Apply this going forward; do not re-label todos closed before this rule.
9. Keep one heading per date. Blank lines separate notes, and trailing hashtags become filters rather than displayed prose (use hyphens for multi-word tags). The build publishes newest-first, with stable links such as `notes.html#2026-09-24`.
10. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication.

Principles: [Preserve user content](../principles/preserve-user-content.md) and [Minimal diff scope](../principles/minimal-diff-scope.md).

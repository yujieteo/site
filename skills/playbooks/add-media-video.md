# Add an explainer video

1. Put the assets in `data/podcasts/video/`: `<id>.mp4`, `<id>.vtt` captions, and a `<id>.jpg` (or `.png`) poster. `<id>` is `<YYYY-MM-DD>-<slug>`.
2. Run `.venv/bin/python scripts/add_video.py <id> --title "<title>" --summary "<summary>" --focus-tag <tag> [--focus-tag <tag> ...]`. It writes `data/podcasts/<id>.yaml` with `id`, `date` (from the id), `title`, `summary`, `focus_tags`, `duration_seconds` (read from the MP4's own header), and the `video`, `captions` and `poster` paths relative to `data/podcasts/`, and checks the record against `schema/podcasts.schema.json`. Video items carry no `voice`, `notes`, or `audio`. Add `--check` to print the record without writing it. It refuses a missing asset, an unknown focus tag and an existing record that differs; run again, it changes nothing.
3. Judgment: write the title and summary, and choose the focus tags from the canonical tags in `data/note-tags.json`.
4. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication; include `site/media/video/*` in the upload set.

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [No secrets in the repository](../principles/no-secrets-in-repo.md).

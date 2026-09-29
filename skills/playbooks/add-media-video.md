# Add an explainer video

1. Put the assets in `data/podcasts/video/`: `<id>.mp4`, `<id>.vtt` captions, and a `<id>.jpg` (or `.png`) poster. `<id>` is `<YYYY-MM-DD>-<slug>`.
2. Add `data/podcasts/<id>.yaml` with `id`, `date`, `title`, `summary`, `focus_tags`, `duration_seconds`, `video`, `captions`, and `poster`. The last three are paths relative to `data/podcasts/` (`video/<id>.mp4`, and so on). Video items carry no `voice`, `notes`, or `audio`. `schema/podcasts.schema.json` is the authority; copy `data/podcasts/2026-09-29-fpl-where-the-points-hide.yaml`.
3. Run [Stage A](../verify.md#stage-a-pre-deploy). Follow [Deploy generated files](deploy.md) when the request includes publication; include `site/media/video/*` in the upload set.

Principles: [Generated files are read-only](../principles/generated-files-are-read-only.md) and [No secrets in the repository](../principles/no-secrets-in-repo.md).

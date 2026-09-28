# Deploy generated files

1. Run [Stage A](../verify.md#stage-a-pre-deploy). Stop if it fails.
2. Resolve the Git branch and SCP destination from the request or secure local configuration. Never write resolved values into the repository.
3. Push the branch requested by the user. Do not substitute a different branch.
4. Derive the upload set from the reviewed post-build diff under `site/`. The changed files can include `notes.html`, `blog.html`, `papers.html`, `index.html`, `about.html`, `visuals.html`, `blog/<slug>.html`, `podcast/**` (pages and audio), and `visuals/**` (pages and `data.json`).
5. If public content changed, upload `site/corpus.json` first. Then upload every changed file under a unique temporary name, including non-HTML assets such as `site/podcast/audio/*.mp3` and `site/visuals/*/data.json`.
6. Follow [Atomic safe deploy](../principles/atomic-safe-deploy.md) for the complete upload set. Install every file with a web-readable mode (0644, or the mode the host documents) as part of the atomic install. Never rely on the upload tool's default mode: `scp` preserves a restrictive local mode, so a 0600 generated file stays unreadable to the web server.
7. Run [Stage B](../verify.md#stage-b-post-deploy).

Principles: [No secrets in the repository](../principles/no-secrets-in-repo.md), [Atomic safe deploy](../principles/atomic-safe-deploy.md), and [Generated files are read-only](../principles/generated-files-are-read-only.md).

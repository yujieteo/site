# Deploy generated files

1. Run [Stage A](../verify.md#stage-a-pre-deploy). Stop if it fails.
2. Resolve the Git branch and SCP destination from the request or secure local configuration. Never write resolved values into the repository.
3. Push the branch requested by the user. Do not substitute a different branch.
4. Derive the upload set: `.venv/bin/python scripts/site_diff.py <base>`, where `<base>` is the commit whose build is live (the last deployed commit), resolved like the destination in step 2. `site/` is not committed, so the script rebuilds `<base>` and compares it file by file with the fresh `site/` from Stage A. It prints one `A` (added), `M` (modified) or `D` (no longer generated) row per file, `site/corpus.json` first. When unsure of `<base>`, choose an older commit: that only adds files whose bytes are already live.
5. Review that list. The upload set is every `A` and `M` path. Leave `D` paths on the host; never remove remote files. The changed files can include `notes.html`, `blog.html`, `papers.html`, `index.html`, `about.html`, `open-questions.html`, `colophon.html`, `visuals.html`, `blog/<slug>.html`, `media/**` (pages, audio, and video), `podcast/**` (legacy redirect pages and audio), and `visuals/**` (pages and `data.json`).
6. If public content changed, upload `site/corpus.json` first. Then upload every changed file under a unique temporary name, including non-HTML assets such as `site/media/audio/*.mp3`, `site/media/video/*.mp4`, `site/media/video/*.vtt`, `site/media/video/*.jpg`, and `site/visuals/*/data.json`.
7. Follow [Atomic safe deploy](../principles/atomic-safe-deploy.md) for the complete upload set. Install every file with a web-readable mode (0644, or the mode the host documents) as part of the atomic install. Never rely on the upload tool's default mode: `scp` preserves a restrictive local mode, so a 0600 generated file stays unreadable to the web server.
8. Run [Stage B](../verify-post-deploy.md).

Principles: [No secrets in the repository](../principles/no-secrets-in-repo.md), [Atomic safe deploy](../principles/atomic-safe-deploy.md), and [Generated files are read-only](../principles/generated-files-are-read-only.md).

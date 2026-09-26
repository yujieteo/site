# Search notes

1. Run `.venv/bin/python scripts/notes.py search "TERMS" --tag TAG --json`. Every term and tag must match; repeat `--tag` as needed.
2. If strict search misses relevant notes, retry once with fewer atoms or `--any`. Do not begin by dumping broad results.
3. Read compact `id`, `date`, `tags`, and `excerpt` results. Use `--limit N` up to 100 only when necessary.
4. Retrieve full prose only for selected records with `.venv/bin/python scripts/notes.py get ID --json`.

The command reads canonical `data/notes.md` directly. It does not require a build, generated corpus, QMD, or network access.

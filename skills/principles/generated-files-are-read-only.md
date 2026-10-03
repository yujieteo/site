# Generated files are read-only

`data/notes.md` is the sole source of truth for notes. `scripts/build.py` regenerates `site/`. Never hand-edit generated output such as `site/notes.html`. Change the source outside `site/`, then regenerate the output.

`site/` is ignored by Git and never committed (see [README.md](../../README.md#build)), so a rebase never conflicts on it. If a rebase or merge reports a conflict under `site/`, the branch committed build output; do not resolve it. Remove it from the index with `git rm -r --cached site`, then run `git rebase --continue` (or commit, outside a rebase). `tests/test_independent_changes.py` fails any branch that tracks a file under `site/`.

Some generated files are committed: `exports/paper-links.toon` here, and in yujieteo/visuals the `index.html` of a visualization with its own build script. Never hand-edit or hand-merge them. On a merge conflict, take either side, then rerun the command that writes the file from the merged sources.

Deploy only generated files relevant to the change. Include `site/corpus.json` whenever public content changes.

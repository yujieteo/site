# Generated files are read-only

`data/notes.md` is the sole source of truth for notes. `scripts/build.py` regenerates `site/`. Never hand-edit generated output such as `site/notes.html`. Change the source outside `site/`, then regenerate the output.

Some generated files are committed: `exports/paper-links.bib` and `exports/paper-links.toon`, and the `index.html` of a visualization with its own build script. Never hand-edit or hand-merge them. On a merge conflict, take either side, then rerun the command that writes the file from the merged sources.

Deploy only generated files relevant to the change. Include `site/corpus.json` whenever public content changes.

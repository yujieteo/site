# Generated files are read-only

`data/notes.md` is the sole source of truth for notes. `scripts/build.py` regenerates `site/`. Never hand-edit generated output such as `site/notes.html`. Change the source outside `site/`, then regenerate the output.

Deploy only generated files relevant to the change. Include `site/corpus.json` whenever public content changes.

# Deploy to the site

The laboratory is developed in this repository, where CI runs all of its tests. The personal site repository carries a port of the page files at `visuals/connes-qft/` and publishes `index.html` and `raw.json` (as `data.json`); it runs no logic tests for it.

1. Run [Verify](verify.md) here, and merge the change in this repository first.
2. Port it: in the site repository, replace the contents of `visuals/connes-qft/` with a copy of this repository minus `tests/` and `.github/` (and minus `.git`). Copy files; never symlink.
3. The catalogue entry is `data/visuals/connes-qft.yaml` (`html_path: visuals/connes-qft/index.html`, `data_path: visuals/connes-qft/raw.json`, the eight WebMCP tool names, tags from the site's existing vocabulary). Update its `summary` and `fetched` date when the tool changes.
4. Follow the site's own playbook for visualizations built in a standalone repository: rebuild the site, run its tests, and commit the regenerated site output separately from the ported files.
5. When the site's shared `templates/beamdswitch.js` or `templates/beamdswitch-report.md` changes, bring it here: copy it to `beamdswitch.js` and to `tests/fixtures/beamdswitch/`, run `python build.py`, and verify before porting back.

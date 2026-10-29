# site

The website at teoyujie.org: a home page of selected explorations, the beam diagram tool, the
privacy and support pages of Lullapixie and Marklove, the OpenPGP key of contact@teoyujie.org, and the
template of the log at `/log`.
`REQUIREMENTS.md` says what the site must do.

| Path | Holds |
| --- | --- |
| `public/` | Everything the server serves, as it is served. |
| `beamdiag/` | The beam diagram creator, a Goose program that builds to WebAssembly. `beamdiag/REQUIREMENTS.md` is its contract. |
| `public/fonts/` | The site fonts, Inter (Google Fonts v20, variable) and IBM Plex Mono (weight 400), with their OFL licences. |
| `public/shared/kowalski.css` | The tokens and interaction rules of the site look. `public/style.css` imports it. |
| `public/play/beamdiag/` | The built beam page. `index.html` and `beamdiag.wasm*` come from `scripts/build-beam.sh`. Never edit them by hand. |
| `media-plan.md` | The master copy of the media plan. The pond app edits it. |
| `scripts/build-beam.sh [folder]` | Builds the beam page into `public/play/beamdiag/` or into the folder. |
| `scripts/check.sh` | Pages and WKD key files exist, links resolve, the home page keeps its links and each selected exploration has a kind, a title and a link, the log template has one entries slot, `beamdiag/` builds the beam page. |
| `scripts/deploy.sh` | Runs the check, sends `public/` as a tar archive to deploy@10.8.0.1 over the VPN, then tests the URLs. |

The beam build needs `emcc`, `cc` and `gzip`. It uses the Goose C committed in `beamdiag/c/`. It stops if `beamdiag/c.sha256` does not match the Goose inputs: then set `GOOSE` to make the C again.

The site before 2026-10-18 (notebooks, stories, Play tools, the engine) is at the tag `old-site`.

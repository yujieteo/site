# site

The website at teoyujie.org: a home page of selected explorations, the beam diagram tool, the
privacy and support pages of Lullapixie and Marklove, the OpenPGP key of contact@teoyujie.org, and the
template of the log at `/log`.
`REQUIREMENTS.md` says what the site must do.

| Path | Holds |
| --- | --- |
| `public/` | Everything the server serves, as it is served. |
| `beamdiag/` | The beam diagram creator, a Rust crate that builds to WebAssembly. `beamdiag/REQUIREMENTS.md` is its contract. |
| `public/fonts/` | The site fonts, Source Serif 4 (weight 400, all optical sizes) and DM Sans, Latin, from Fontsource 5.3.0, with their OFL licences. |
| `public/play/beamdiag/` | The built beam page. `index.html` and `beamdiag.wasm*` come from `scripts/build-beam.sh`. Never edit them by hand. |
| `media-plan.md` | The master copy of the media plan. The pond app edits it. |
| `scripts/build-beam.sh [folder]` | Builds the beam page into `public/play/beamdiag/` or into the folder. |
| `scripts/check.sh` | Pages and WKD key files exist, links resolve, the home page keeps its links and each selected exploration has a kind, a title and a link, the log template has one entries slot, `beamdiag/` builds the beam page and a PDF. |
| `scripts/deploy.sh` | Runs the check, sends `public/` as a tar archive to deploy@10.8.0.1 over the VPN, then tests the URLs. |

`rust-toolchain.toml` pins the Rust compiler and the WebAssembly target. The beam build also needs `gzip`.

The site before 2026-10-18 (notebooks, stories, Play tools, the engine) is at the tag `old-site`.

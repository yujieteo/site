# site

The website at teoyujie.org: the beam diagram tool, the privacy and support pages of
Lullapixie and Marklove, and the OpenPGP key of contact@teoyujie.org. `REQUIREMENTS.md` says
what the site must do.

| Path | Holds |
| --- | --- |
| `public/` | Everything the server serves, as it is served. |
| `beamdiag/` | The beam diagram creator, a Rust crate that builds to WebAssembly. `beamdiag/REQUIREMENTS.md` is its contract. |
| `public/play/beamdiag/` | The built beam page. `index.html` and `beamdiag.wasm*` come from `scripts/build-beam.sh`. Never edit them by hand. |
| `scripts/build-beam.sh [folder]` | Builds the beam page into `public/play/beamdiag/` or into the folder. |
| `scripts/check.sh` | Pages exist, links resolve, `beamdiag/` builds the beam page and a PDF. |
| `scripts/deploy.sh [--yes]` | Runs the check, then rsyncs `public/` to the server. Without `--yes`, a dry run. |

The deploy target is `SITE_DEST`, or one line `user@host:/path/to/webroot` in `.deploy` (not committed).

`rust-toolchain.toml` pins the Rust compiler and the WebAssembly target. The beam build also needs `gzip`.

The site before 2026-10-18 (notebooks, stories, Play tools, the engine) is at the tag `old-site`.

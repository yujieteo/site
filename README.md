# site

The website at teoyujie.org: the beam diagram tool, and the privacy and support pages of
Lullapixie and Marklove. `REQUIREMENTS.md` says what the site must do.

| Path | Holds |
| --- | --- |
| `public/` | Everything the server serves, as it is served. |
| `public/play/beamdiag/index.html` | The beam page, copied from `../visuals`. Never edit it here. |
| `beam.lock` | The visuals commit and the SHA-256 of the beam page. |
| `scripts/pin-beam.sh [commit]` | Copies the beam page from `../visuals` and writes `beam.lock`. |
| `scripts/check.sh` | Pages exist, beam page matches `beam.lock`, links resolve, the beam crate makes a PDF. |
| `scripts/deploy.sh [--yes]` | Runs the check, then rsyncs `public/` to the server. Without `--yes`, a dry run. |

The deploy target is `SITE_DEST`, or one line `user@host:/path/to/webroot` in `.deploy` (not committed).

The site before 2026-10-18 (notebooks, stories, Play tools, the engine) is at the tag `old-site`.

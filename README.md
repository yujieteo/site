# site

This is the personal website of Teo Yu Jie, at https://teoyujie.org/. It holds a home page of selected explorations, the beam diagram tool, the
privacy and support pages of Lullapixie and Marklove, the OpenPGP key of contact@teoyujie.org, and the
template of the log at `/log`.
`REQUIREMENTS.md` says what the site must do.

| Path | Holds |
| --- | --- |
| `public/` | Everything the server serves, as it is served. |
| `beamdiag/` | The beam diagram creator, a Goose program that builds to WebAssembly. `beamdiag/REQUIREMENTS.md` is its contract. |
| `wallpaper/` | The wallpaper maker, a Goose program (`wallpaper.goose`) with a C host (`host.c`) that builds to WebAssembly. `wasm.sha256` is the hash of its sources. |
| `public/fonts/` | The site fonts, Inter (Google Fonts v20, variable) and IBM Plex Mono (weight 400), with their OFL licences. |
| `public/shared/kowalski.css` | The tokens and interaction rules of the site look. `public/style.css` imports it. |
| `public/play/beamdiag/` | The built beam page. `index.html` and `beamdiag.wasm.gz` come from `scripts/build-beam.sh`. Never edit them by hand. |
| `public/play/wallpaper/` | The wallpaper page. `wallpaper.wasm.gz` comes from `scripts/build-wallpaper.sh`. Never edit it by hand. |
| `media-plan.md` | The master copy of the media plan. The pond app edits it. |
| `scripts/build-beam.sh [folder]` | Builds the beam page into `public/play/beamdiag/` or into the folder. |
| `scripts/build-wallpaper.sh` | Builds the wallpaper module with `goose` and `emcc` and writes `wallpaper/wasm.sha256`. |
| `scripts/check.sh` | Pages and WKD key files exist, links resolve, the home page keeps its links and each selected exploration has a kind, a title and a link, the log template has one entries slot, each essay figure has a caption and alt text, the home page first load is 100 KB gzipped or less, `scripts/*.sh` and `wallpaper/` have no comments, `beamdiag/` builds the beam page, the wallpaper module matches its sources and `wallpaper/test.mjs` passes. It needs `python3`, `node` and the beam build tools. |
| `scripts/deploy.sh` | Runs the check, sends `public/` as a tar archive to deploy@10.8.0.1 over the VPN, then tests the URLs. Files that are not in `public/` go away from the server, so old URLs return 404. |

The beam build needs `emcc`, `cc` and `gzip`. It uses the Goose C committed in `beamdiag/c/`. It stops if `beamdiag/c.sha256` does not match the Goose inputs: then set `GOOSE` to make the C again.

The wallpaper build needs `goose` (v2026.3) and `emcc`. Set `GOOSE` and `EMCC` to use other binaries. The page writes six sRGB colours (ground first) into `wp_colours()`, gets room for the pixels from `wp_pixels()` and calls `wp_draw`. The wallpaper is the ground colour and five soft areas, mixed in Oklab, then a weak neutral grain. The seed sets the two sine phases that bend the areas, and the grain. Area coordinates go from 0 to 1 across the image. The sRGB to Oklab matrices are from Björn Ottosson, https://bottosson.github.io/posts/oklab/. The random numbers come from splitmix64, https://prng.di.unimi.it/splitmix64.c.

The site before 2026-10-18 (notebooks, stories, Play tools, the engine) is at the tag `old-site`.

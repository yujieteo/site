# Agents

1. Read README.md. Change sources, never `dist/`.
2. Rules, simulation, drawing and the notebook engine live in Rust (`engine/`); the DOM, Canvas and controls live in `web/host.js`, which only executes what Rust returns. Never duplicate a rule on both sides.
3. A page is a notebook: `content/stories/<slug>/index.md`, assets beside it. Use the existing scenes; add a scene to `engine/src/scene.rs` only when no existing one tells it. One scene, one motion rule.
4. The engine and the builder depend on nothing beyond `serde_json`. A notebook's cells may declare pinned crates (`= "=x.y.z"`) in a ```` ```toml ```` fence; commit the `Cargo.lock` the build writes beside the notebook. No JS frameworks, no runtime fetches. Fonts are the committed subsets in `fonts/` (from `scripts/fonts.sh`), never system or remote fonts.
5. The repository stays under 25,000 lines and the engine under 2,000 code lines (`scripts/loc.sh`). Short code wins.
6. `nix develop -c ./build.sh` (or `./build.sh` under rustup) must pass before a commit, and `scripts/repro.sh` must find two clean builds identical. Never commit private notes data.

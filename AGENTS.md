# Agents

1. Read README.md. Change sources, never `dist/`.
2. Domain rules, simulation and procedural motion live in Rust (`engine/`); the DOM, Canvas and controls live in `web/host.js`. Never duplicate a rule on both sides.
3. A new story is a `.story` file using the existing scenes; add a scene to the engine only when no existing one tells it. One scene, one motion rule.
4. No dependencies beyond `serde_json`. No JS frameworks, no external fonts, no runtime fetches.
5. The whole repository stays under 25,000 lines (`scripts/loc.sh`). Short code wins.
6. `nix develop -c ./build.sh` (or `./build.sh` under rustup) must pass before a commit. Never commit private notes data.

# newsite

Three doors: **Notes**, **Stories**, **Playground**. Extreme minimalism; every page is one self-contained HTML file.

## Build

```sh
nix develop -c ./build.sh [path/to/uniichat/memory.json]
```

Tests both crates, compiles `engine` to `wasm32-unknown-unknown`, then writes `dist/`.
The toolchain is pinned once, in `rust-toolchain.toml`. `flake.nix` builds that exact toolchain and wasm target from it
(nixpkgs 26.05 + rust-overlay); with direnv, `echo "use flake" > .envrc` enters the shell automatically.
Without Nix, rustup reads the same file, and CI uses that path.
Open `dist/index.html` directly; nothing is fetched at runtime.

## Layout

| Path | Owns |
| --- | --- |
| `engine/` | Rust → WebAssembly. Story frames are a pure function of seed, scene, time, scroll progress and pointer; the home cast (scene 6) is a small spring simulation you can poke. Interface v3 is documented at the top of `lib.rs`. |
| `web/host.js` | The browser boundary: one clock, one scheduler, Canvas drawing, Pause, reduced motion, story chapters. |
| `web/shell.html`, `web/style.css` | The one page shell every page shares. |
| `site/` | The builder: parses stories, sanitises notes, inlines the wasm as base64. |
| `content/stories/*.story` | One file per story: header, `## Chapter` + `scene: N` + text, optional `# Notes`. |

Notes are read at build time from a UniiChat export (default `../site/data/uniichat/memory.json`), never committed here.
Each line is sanitised again: session tags dropped, paths and emails redacted, any line with a credential pattern refused.

## Budget

The whole site stays under 25,000 lines (`scripts/loc.sh`, run in CI). Prefer deleting to adding.

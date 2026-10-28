#!/bin/sh
# Build the beam page from beamdiag/ into a folder, by default public/play/beamdiag.
# It writes index.html, beamdiag.wasm and beamdiag.wasm.gz; fonts/ and katex/ are committed there.
#
# The program is Goose (beamdiag/src/*.goose). Goose makes C, and the C is committed in beamdiag/c/,
# so a machine without Goose can build: it needs emcc (Emscripten), cc and gzip.
# To make the C again after a change to beamdiag/src or beamdiag/raw.json, set GOOSE to the goose
# binary (v2026.3): GOOSE=/path/to/goose scripts/build-beam.sh
# beamdiag/c.sha256 holds the hash of the Goose inputs for the committed C. Without GOOSE, the build stops if it differs.
set -eu
cd "$(dirname "$0")/.."
out=${1:-public/play/beamdiag}
src=beamdiag/src
gen=beamdiag/c
emcc=${EMCC:-$(command -v emcc || printf /nix/store/xngbhym5r9y657i2lyajh9xd5yg9jsnz-emscripten-6.0.9/bin/emcc)}
export EM_CACHE="${EM_CACHE:-$HOME/.cache/beamdiag-emcache}"
hash=$(cat "$src"/*.goose "$src"/body.html "$src"/page_base.css "$src"/page_style.css "$src"/page_host.js beamdiag/raw.json | shasum -a 256 | cut -d' ' -f1)
if [ -n "${GOOSE:-}" ]; then
  (cd "$src" && "$GOOSE" --standalone --header "../c/beamdiag.h" -o "../c/beamdiag.c" wasm.goose &&
    "$GOOSE" --standalone -o "../c/page.c" page.goose)
  echo "$hash" > beamdiag/c.sha256
elif [ "$hash" != "$(cat beamdiag/c.sha256)" ]; then
  echo "build-beam: beamdiag/c/ is older than beamdiag/src or beamdiag/raw.json. Rebuild with GOOSE=/path/to/goose scripts/build-beam.sh" >&2
  exit 1
fi
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
# Each Goose data stack gets 512 KB of the module's memory. The module has no entry point: the page calls alloc, handle and out_len.
"$emcc" -Oz -flto -sMALLOC=emmalloc "-DGS_STACK_RESERVE=(512ull<<10)" -I"$gen" "$src/host.c" "$gen/beamdiag.c" "$src/shim.c" \
  -o "$tmp/beamdiag.wasm" --no-entry -sSTANDALONE_WASM -sALLOW_MEMORY_GROWTH=1 \
  -sEXPORTED_FUNCTIONS=_alloc,_handle,_out_len -sERROR_ON_UNDEFINED_SYMBOLS=1
cc -O1 -w "$gen/page.c" "$src/shim.c" -lm -o "$tmp/page"
mkdir -p "$out"
"$tmp/page" "$out/index.html"
cp "$tmp/beamdiag.wasm" "$out/beamdiag.wasm"
gzip -n -9 -c "$tmp/beamdiag.wasm" > "$out/beamdiag.wasm.gz"

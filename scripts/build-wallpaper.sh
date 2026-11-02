#!/bin/sh
# Build the wallpaper module from wallpaper/ into public/play/wallpaper/wallpaper.wasm.gz.
# The program is Goose (wallpaper/wallpaper.goose). Goose makes C, and emcc (Emscripten) makes the C into
# WebAssembly. It needs goose (v2026.3) and emcc: GOOSE=/path/to/goose EMCC=/path/to/emcc scripts/build-wallpaper.sh
# wallpaper/wasm.sha256 holds the hash of the sources of the committed module. scripts/check.sh compares it.
set -eu
cd "$(dirname "$0")/.."
goose=${GOOSE:-goose}
emcc=${EMCC:-emcc}
export EM_CACHE="${EM_CACHE:-$HOME/.cache/beamdiag-emcache}"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
"$goose" --standalone -q --header "$tmp/wallpaper.h" -o "$tmp/wallpaper.c" wallpaper/wallpaper.goose
# The module has no entry point: the page calls the four functions it exports.
"$emcc" -O3 -flto -sMALLOC=emmalloc "-DGS_STACK_RESERVE=(4ull<<20)" -I"$tmp" wallpaper/host.c "$tmp/wallpaper.c" \
  -o "$tmp/wallpaper.wasm" --no-entry -sSTANDALONE_WASM -sALLOW_MEMORY_GROWTH=1 -sMAXIMUM_MEMORY=4GB \
  -sEXPORTED_FUNCTIONS=_wp_colours,_wp_pixels,_wp_draw,_wp_colour -sERROR_ON_UNDEFINED_SYMBOLS=1
gzip -n -9 -c "$tmp/wallpaper.wasm" > public/play/wallpaper/wallpaper.wasm.gz
cat wallpaper/wallpaper.goose wallpaper/host.c | shasum -a 256 | cut -d' ' -f1 > wallpaper/wasm.sha256

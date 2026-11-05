#!/bin/sh
set -eu
export LC_ALL=C
cd "$(dirname "$0")/.."
out=${1:-public/play/beamdiag}
src=beamdiag/src
gen=beamdiag/c
emcc=${EMCC:-$(command -v emcc || printf /nix/store/xngbhym5r9y657i2lyajh9xd5yg9jsnz-emscripten-6.0.9/bin/emcc)}
export EM_CACHE="${EM_CACHE:-$HOME/.cache/beamdiag-emcache}"
hash=$(cat "$src"/*.goose "$src"/body.html "$src"/page_base.css "$src"/page_style.css "$src"/commands.ts "$src"/page_host.ts beamdiag/raw.json | shasum -a 256 | cut -d' ' -f1)
if [ -n "${GOOSE:-}" ]; then
  GOOSE_PINNED_VERSION=v2026.3
  case $("$GOOSE" --version) in
    "goose $GOOSE_PINNED_VERSION"*) ;;
    *) echo "build-beam: needs goose $GOOSE_PINNED_VERSION, found: $("$GOOSE" --version)" >&2; exit 1 ;;
  esac
  BUN_PINNED_VERSION=1.4.4
  [ "$(bun --version)" = "$BUN_PINNED_VERSION" ] || { echo "build-beam: needs bun $BUN_PINNED_VERSION, found: $(bun --version)" >&2; exit 1; }
  bun build "$src/page_host.ts" --format=iife --target=browser --minify-whitespace --minify-syntax --outfile "$src/page_host.js" >/dev/null
  (cd "$src" && "$GOOSE" --standalone --header "../c/beamdiag.h" -o "../c/beamdiag.c" wasm.goose &&
    "$GOOSE" --standalone -o "../c/page.c" page.goose)
  echo "$hash" > beamdiag/c.sha256
elif [ "$hash" != "$(cat beamdiag/c.sha256)" ]; then
  echo "build-beam: beamdiag/c/ is older than beamdiag/src or beamdiag/raw.json. Rebuild with GOOSE=/path/to/goose scripts/build-beam.sh" >&2
  exit 1
fi
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
"$emcc" -Oz -flto -sMALLOC=emmalloc "-DGS_STACK_RESERVE=(512ull<<10)" -I"$gen" "$src/host.c" "$gen/beamdiag.c" "$src/shim.c" \
  -o "$tmp/beamdiag.wasm" --no-entry -sSTANDALONE_WASM -sALLOW_MEMORY_GROWTH=1 \
  -sEXPORTED_FUNCTIONS=_alloc,_handle,_out_len -sERROR_ON_UNDEFINED_SYMBOLS=1
. scripts/cflags.sh
cc -O1 $GOOSE_C_WARNINGS "$gen/page.c" "$src/shim.c" -lm -o "$tmp/page"
mkdir -p "$out"
"$tmp/page" "$out/index.html"
gzip -n -9 -c "$tmp/beamdiag.wasm" > "$out/beamdiag.wasm.gz"

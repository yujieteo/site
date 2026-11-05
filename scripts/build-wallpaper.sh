#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
goose=${GOOSE:-goose}
emcc=${EMCC:-emcc}
export EM_CACHE="${EM_CACHE:-${HOME}/.cache/beamdiag-emcache}"
tmp=$(mktemp -d)
trap 'rm -rf "${tmp}"' EXIT HUP INT TERM
GOOSE_PINNED_VERSION=v2026.3
goose_version=$("${goose}" --version)
case ${goose_version} in
  "goose ${GOOSE_PINNED_VERSION}"*) ;;
  *) echo "build-wallpaper: needs goose ${GOOSE_PINNED_VERSION}, found: ${goose_version}" >&2; exit 1 ;;
esac
"${goose}" --standalone -q --header "${tmp}/wallpaper.h" -o "${tmp}/wallpaper.c" wallpaper/wallpaper.goose
"${emcc}" -O3 -flto -sMALLOC=emmalloc "-DGS_STACK_RESERVE=(4ull<<20)" -I"${tmp}" wallpaper/host.c "${tmp}/wallpaper.c" \
  -o "${tmp}/wallpaper.wasm" --no-entry -sSTANDALONE_WASM -sALLOW_MEMORY_GROWTH=1 -sMAXIMUM_MEMORY=4GB \
  -sEXPORTED_FUNCTIONS=_wp_colours,_wp_pixels,_wp_draw,_wp_colour -sERROR_ON_UNDEFINED_SYMBOLS=1
gzip -n -9 -c "${tmp}/wallpaper.wasm" > public/play/wallpaper/wallpaper.wasm.gz
cat wallpaper/wallpaper.goose wallpaper/host.c | shasum -a 256 | cut -d' ' -f1 > wallpaper/wasm.sha256

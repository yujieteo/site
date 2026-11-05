#!/bin/sh
set -eu
export LC_ALL=C
cd "$(dirname "$0")/.."
comments=$({ grep -nE '(^|[[:space:]])(#|//|/\*)' scripts/*.sh wallpaper/*.goose wallpaper/*.c | grep -vE '^[^:]+:(1:#!|[0-9]+:#include )|// (Oklab, after Björn Ottosson|splitmix64, after Sebastiano Vigna):'
  grep -nE '(^|[[:space:]])(//|/\*)' beamdiag/src/*.goose beamdiag/src/*.c beamdiag/src/page_style.css beamdiag/test.goose |
    grep -vE "Roark's series|Dekker's product"
  grep -nE '(^|[[:space:]])#' beamdiag/reference.py; } || true)
[ -z "$comments" ] || { echo "$comments" >&2
  echo 'check: comments are not allowed in scripts/*.sh, wallpaper/ and beamdiag/ (TypeScript comments need an https:// source in scripts/check-site.ts). Name the code better or write a test. The source credits that stay: Sonner, Roark, Dekker, Oklab and splitmix64.' >&2; exit 1; }
bun install --frozen-lockfile >/dev/null
node_modules/.bin/tsc --noEmit
node_modules/.bin/knip
jpl=$(bun scripts/jpl.ts)
[ -z "$jpl" ] || { echo "$jpl" >&2; exit 1; }
bun scripts/check-site.ts
[ "$(cat wallpaper/wallpaper.goose wallpaper/host.c | shasum -a 256 | cut -d' ' -f1)" = "$(cat wallpaper/wasm.sha256)" ] ||
  { echo 'check: wallpaper/ changed after the last build. Run scripts/build-wallpaper.sh' >&2; exit 1; }
[ $(( $(gzip -9 -c public/play/wallpaper/index.html | wc -c) + $(wc -c < public/play/wallpaper/wallpaper.wasm.gz) )) -le 40960 ] ||
  { echo 'check: the wallpaper page is over its 40 KB budget' >&2; exit 1; }
bun test
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
scripts/build-beam.sh "$tmp"
test_hash=$(cat beamdiag/test.goose beamdiag/src/*.goose beamdiag/src/body.html beamdiag/fixtures.json beamdiag/reference.json beamdiag/random.json beamdiag/raw.json | shasum -a 256 | cut -d' ' -f1)
if [ -n "${GOOSE:-}" ]; then
  "$GOOSE" --standalone -q -o beamdiag/c/test.c beamdiag/test.goose
  echo "$test_hash" > beamdiag/c/test.sha256
elif [ "$test_hash" != "$(cat beamdiag/c/test.sha256)" ]; then
  echo 'check: beamdiag/c/test.c is older than beamdiag/test.goose or its inputs. Rebuild with GOOSE=/path/to/goose scripts/check.sh' >&2
  exit 1
fi
GOOSE_PACKED_STRUCT_MISALIGNED_STORES=-fno-sanitize=alignment
cc -O1 -w -g -fsanitize=undefined,address -fno-sanitize-recover=all $GOOSE_PACKED_STRUCT_MISALIGNED_STORES beamdiag/c/test.c beamdiag/src/shim.c -lm -o "$tmp/test"
"$tmp/test"
for f in index.html beamdiag.wasm.gz; do [ -s "$tmp/$f" ]; done
cmp -s "$tmp/index.html" public/play/beamdiag/index.html ||
  { echo 'check: public/play/beamdiag/index.html is not the page that beamdiag/c/ builds. Run scripts/build-beam.sh' >&2; exit 1; }
echo 'check: ok'
if [ "${1:-}" = "--replay" ]; then
  shift
  export REPLAY_CACHE="${REPLAY_CACHE:-$HOME/.cache/site-replay}"
  rm -rf "$REPLAY_CACHE"
  REPLAY_CAPTURE=1 bun test
  bun scripts/replay.ts "$@"
fi

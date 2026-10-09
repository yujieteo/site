#!/bin/sh
# Exact reproducibility: build twice from a clean state and compare every output's hash.
# Args go to the builder (CI passes none, so no private notes are read).
set -eu
cd "$(dirname "$0")/.."
sums() { (cd dist && find . -type f | LC_ALL=C sort | xargs sha256sum); }
a=$(mktemp)
rm -rf target dist && ./build.sh "$@" >/dev/null && sums >"$a"
rm -rf target dist && ./build.sh "$@" >/dev/null
if sums | diff "$a" -; then echo "reproducible: $(wc -l <"$a") files"; else echo "outputs differ" >&2; exit 1; fi

#!/bin/sh
# Budgets. The repository stays under 25,000 lines of text; lockfiles and binary payloads
# (fonts, images) are not counted, and their bytes are reported instead. The notebook engine
# stays under 2,000 code lines (no blank, comment or test lines) across Rust, JavaScript, CSS
# and HTML. Not engine: the dot scenes (engine/src/scene.rs, artifact content) and the site's
# own builder (site/src/main.rs: notes, doors, index).
set -eu
cd "$(dirname "$0")/.."
n=$(git ls-files | grep -v -e 'Cargo.lock$' -e '^flake.lock$' -e '\.otf$' -e '\.png$' | xargs cat | wc -l)
e=$(for f in engine/src/*.rs site/src/*.rs web/*; do
  case $f in engine/src/scene.rs | site/src/main.rs) continue ;; esac
  sed '/^#\[cfg(test)\]/,$d' "$f" | grep -cvE '^[[:space:]]*($|//|/\*|\*)' || true
done | awk '{s += $1} END {print s}')
echo "$n / 25000 lines; engine $e / 2000 code lines"
echo "payload: fonts $(cat fonts/*.otf | wc -c) bytes"
[ ! -d dist ] || echo "dist: $(find dist -type f | xargs cat | wc -c) bytes in $(find dist -type f | wc -l) files"
[ "$n" -le 25000 ] && [ "$e" -lt 2000 ]

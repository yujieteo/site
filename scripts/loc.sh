#!/bin/sh
# Budgets. The repository stays under 25,000 lines of text; lockfiles and binary payloads
# (fonts, images) are not counted, and their bytes are reported instead. The notebook engine
# stays under 3,000 code lines (no blank, comment or test lines) across Rust, JavaScript, CSS
# and HTML. Not engine: the dot scenes (engine/src/scene.rs, artifact content), the site's own
# builder and shell (site/src/main.rs: notes, doors, index; web/style.css, web/shell.html, web/notes.js) and the
# thumbnail generator (engine/src/thumb.rs), which has its own budget of 500.
set -eu
cd "$(dirname "$0")/.."
n=$(git ls-files | grep -v -e 'Cargo.lock$' -e '^flake.lock$' -e '\.otf$' -e '\.png$' | xargs cat | wc -l)
code() { for f; do sed '/^#\[cfg(test)\]/,$d' "$f" | grep -cvE '^[[:space:]]*($|//|/\*|\*)' || true; done | awk '{s += $1} END {print s}'; }
e=$(code $(ls engine/src/*.rs site/src/*.rs web/* | grep -vxE 'engine/src/(scene|thumb)\.rs|site/src/main\.rs|web/(style\.css|shell\.html|notes\.js)'))
t=$(code engine/src/thumb.rs)
echo "$n / 25000 lines; engine $e / 3000 code lines; thumbnails $t / 500"
echo "payload: fonts $(cat fonts/*.otf | wc -c) bytes"
[ ! -d dist ] || echo "dist: $(find dist -type f | xargs cat | wc -c) bytes in $(find dist -type f | wc -l) files"
[ "$n" -le 25000 ] && [ "$e" -lt 3000 ] && [ "$t" -le 500 ]

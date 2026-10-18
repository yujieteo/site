#!/bin/sh
# The one check before a deploy: the pages exist, the beam page matches beam.lock, every local
# link resolves, and the beam crate makes one example PDF.
set -eu
cd "$(dirname "$0")/.."
fail=0
for f in index.html style.css lullapixie/privacy.html lullapixie/support.html \
         marklove/privacy.html marklove/support.html play/beamdiag/index.html; do
  [ -s "public/$f" ] || { echo "missing: public/$f"; fail=1; }
done
want=$(sed -n 's/^sha256 //p' beam.lock)
have=$(shasum -a 256 public/play/beamdiag/index.html | cut -d' ' -f1)
[ "$want" = "$have" ] || { echo "beam page does not match beam.lock: run scripts/pin-beam.sh"; fail=1; }
for page in $(cd public && find . -name '*.html'); do
  dir=$(dirname "$page")
  for link in $(grep -o -E '(href|src)="[^"#?]+' "public/$page" | sed -E 's/^(href|src)="//' | grep -v -E '^(https?:|mailto:|data:|//)' | sort -u); do
    case "$link" in /*) t="public$link" ;; *) t="public/$dir/$link" ;; esac
    case "$t" in */) t="${t}index.html" ;; esac
    [ -e "$t" ] || { echo "broken link in $page: $link"; fail=1; }
  done
done
v=${VISUALS:-../visuals}
out=$(mktemp)
if (cd "$v" && cargo run -q --release -p beamdiag --bin pdf -- "$out") && [ "$(head -c 5 "$out")" = "%PDF-" ]; then
  echo "example PDF: $(wc -c < "$out") bytes"
else
  echo "the beam crate did not make an example PDF (cargo run -p beamdiag --bin pdf in $v)"; fail=1
fi
rm -f "$out"
[ $fail = 0 ] && echo "check: ok"
exit $fail

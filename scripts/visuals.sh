#!/bin/sh
# Fetches the yujieteo/visuals files pinned in visuals.lock into visuals/ (not committed) and checks
# every hash. Files already present and matching are kept, so a build that has them needs no network.
set -eu
cd "$(dirname "$0")/.."
commit=$(sed -n 's/^commit //p' visuals.lock)
ok() { [ -f "$1" ] && [ "$(sha256sum <"$1" | cut -c1-64)" = "$2" ]; }
grep -v -e '^#' -e '^commit ' visuals.lock | while read -r sum path; do
  f=visuals/$path
  ok "$f" "$sum" && continue
  mkdir -p "$(dirname "$f")"
  curl -fsSL --retry 3 -o "$f" "https://raw.githubusercontent.com/yujieteo/visuals/$commit/$path"
  ok "$f" "$sum" || { rm -f "$f"; echo "visuals: $path does not match visuals.lock" >&2; exit 1; }
done

#!/bin/sh
# Fetches the narration files pinned in kokoro.lock into kokoro/ (not committed) and checks every
# hash. Files already present and matching are kept. The build serves kokoro/ beside the site
# only when every pinned file is present.
set -eu
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
grep -v '^#' kokoro.lock | while read -r sum path url member; do
  f=kokoro/$path
  echo "$sum  $f" | sha256sum -c --status 2>/dev/null && continue
  mkdir -p "$(dirname "$f")"
  a=$tmp/$(echo "$url" | sha256sum | cut -c1-16)
  [ -f "$a" ] || curl -fsSL --retry 3 -o "$a" "$url"
  if [ "$member" = - ]; then cp "$a" "$f"; else tar -xzOf "$a" "$member" > "$f"; fi
  echo "$sum  $f" | sha256sum -c --quiet || { rm -f "$f"; echo "kokoro: $path does not match kokoro.lock" >&2; exit 1; }
done
echo "kokoro: every pinned file present and verified"

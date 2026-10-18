#!/bin/sh
# Copy the complete beam folder at a commit and pin each file.
set -eu
cd "$(dirname "$0")/.."
v=${VISUALS:-/Users/yj/src/visuals}
c=$(git -C "$v" rev-parse "${1:-HEAD}^{commit}")
tmp=$(mktemp -d /tmp/site-beam-deploy-r1/pin.XXXXXX)
trap 'rm -rf "$tmp"' EXIT HUP INT TERM
git -C "$v" archive "$c" viz/beamdiag/dist > "$tmp/beam.tar"
tar -xf "$tmp/beam.tar" -C "$tmp"
[ -s "$tmp/viz/beamdiag/dist/index.html" ]
rm -rf public/play/beamdiag
cp -R "$tmp/viz/beamdiag/dist" public/play/beamdiag
printf 'commit %s\n' "$c" > beam.lock
find public/play/beamdiag -type f | LC_ALL=C sort | while IFS= read -r f; do
  h=$(shasum -a 256 "$f" | cut -d' ' -f1)
  printf 'sha256 %s %s\n' "$h" "$f"
done >> beam.lock
printf 'Pinned %s (%s files)\n' "$c" "$(grep -c '^sha256 ' beam.lock)"

#!/bin/sh
# Copy the beam page from ../visuals at a commit (default: its HEAD) and pin it in beam.lock.
set -eu
cd "$(dirname "$0")/.."
v=${VISUALS:-../visuals}
c=$(git -C "$v" rev-parse "${1:-HEAD}")
git -C "$v" show "$c:viz/beamdiag/index.html" > public/play/beamdiag/index.html
h=$(shasum -a 256 public/play/beamdiag/index.html | cut -d' ' -f1)
printf 'commit %s\nsha256 %s\n' "$c" "$h" > beam.lock
cat beam.lock

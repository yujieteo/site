#!/usr/bin/env bash
set -eu
cd "$(dirname "$0")/.."
dirty=$(git status --porcelain)
[[ -z "${dirty}" ]] || { echo "Commit first."; exit 1; }
head=$(git rev-parse HEAD)
./gate
bun src/build.ts
dirty=$(git status --porcelain)
now=$(git rev-parse HEAD)
[[ -z "${dirty}" && "${now}" = "${head}" ]] || { echo "The tree changed during the gate. Run again."; exit 1; }
listed=$(find dist -type f)
mapfile -t sent <<< "${listed}"
echo "deploy: sending ${#sent[@]} files"
archive=$(mktemp)
bin/pack dist "${archive}"
ssh deploy@10.8.0.1 site < "${archive}"
rm -f "${archive}"
code=$(curl -s -o /dev/null -w '%{http_code}' https://teoyujie.org/)
[[ "${code}" = 200 ]] || { echo "/ returned ${code}"; exit 1; }
echo "deployed ${head:0:7}"

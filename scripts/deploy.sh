#!/usr/bin/env bash
set -eu
cd "$(dirname "$0")/.."
dirty=$(git status --porcelain)
[[ -z "${dirty}" ]] || { echo "Commit first."; exit 1; }
./gate
bun src/build.ts
listed=$(find dist -type f)
mapfile -t sent <<< "${listed}"
echo "deploy: sending ${#sent[@]} files"
archive=$(mktemp)
bin/pack dist "${archive}"
ssh deploy@10.8.0.1 site < "${archive}"
rm -f "${archive}"
code=$(curl -s -o /dev/null -w '%{http_code}' https://teoyujie.org/)
[[ "${code}" = 200 ]] || { echo "/ returned ${code}"; exit 1; }
head=$(git rev-parse --short HEAD)
echo "deployed ${head}"

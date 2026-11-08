#!/usr/bin/env bash
set -eu
cd "$(dirname "$0")/.."
dirty=$(git status --porcelain)
[[ -z "${dirty}" ]] || { echo "Commit first."; exit 1; }
head=$(git rev-parse HEAD)
bun src/build.ts
archive=$(mktemp)
COPYFILE_DISABLE=1 tar --no-xattrs -czf "${archive}" -C dist .
ssh deploy@10.8.0.1 site < "${archive}"
rm -f "${archive}"
code=$(curl -s -o /dev/null -w '%{http_code}' https://teoyujie.org/)
[[ "${code}" = 200 ]] || { echo "/ returned ${code}"; exit 1; }
echo "deployed ${head:0:7}"

#!/usr/bin/env bash
set -eu
cd "$(dirname "$0")/.."
[ -z "$(git status --porcelain)" ] || { echo "Commit first."; exit 1; }
./gate
bun src/build.ts
echo "deploy: sending $(find dist -type f | wc -l | tr -d ' ') files"
tar --no-mac-metadata -czf - -C dist . | ssh deploy@10.8.0.1 site
code=$(curl -s -o /dev/null -w '%{http_code}' https://teoyujie.org/)
[ "$code" = 200 ] || { echo "/ returned $code"; exit 1; }
echo "deployed $(git rev-parse --short HEAD)"

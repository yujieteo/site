#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
[ -z "$(git status --porcelain)" ] || { echo "Commit first."; exit 1; }
scripts/check.sh
echo "deploy: replacing the site with the $(find public -type f | wc -l | tr -d ' ') files in public/; URLs of files not in public/ will return 404"
tar --no-mac-metadata -czf - -C public . | ssh deploy@10.8.0.1 site
for path in / $(cat fixed-urls.txt); do
  code=$(curl -s -o /dev/null -w '%{http_code}' "https://teoyujie.org$path")
  [ "$code" = 200 ] || { echo "$path returned $code"; exit 1; }
done
echo "deployed $(git rev-parse --short HEAD)"

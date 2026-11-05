#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
status=$(git status --porcelain)
[ -z "${status}" ] || { echo "Commit first."; exit 1; }
scripts/check.sh
file_count=$(find public -type f | wc -l | tr -d ' ')
echo "deploy: replacing the site with the ${file_count} files in public/; URLs of files not in public/ will return 404"
tar --no-mac-metadata -czf - -C public . | ssh deploy@10.8.0.1 site
for path in / $(cat fixed-urls.txt); do
  code=$(curl -s -o /dev/null -w '%{http_code}' "https://teoyujie.org${path}")
  [ "${code}" = 200 ] || { echo "${path} returned ${code}"; exit 1; }
done
head=$(git rev-parse --short HEAD)
echo "deployed ${head}"

#!/bin/sh
# Check, then replace the site on the server with public/; files that are not in public/ go away,
# so old URLs return 404. The server is reached only over the VPN.
set -eu
cd "$(dirname "$0")/.."
[ -z "$(git status --porcelain)" ] || { echo "Commit first."; exit 1; }
scripts/check.sh
tar --no-mac-metadata -czf - -C public . | ssh deploy@10.8.0.1 site
for path in / /lullapixie/privacy.html /lullapixie/support.html /marklove/privacy.html \
  /marklove/support.html /play/beamdiag/; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "https://teoyujie.org$path")
  [ "$code" = 200 ] || { echo "$path returned $code"; exit 1; }
done
echo "deployed $(git rev-parse --short HEAD)"

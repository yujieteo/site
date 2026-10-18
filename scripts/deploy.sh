#!/bin/sh
# Check, then copy public/ to the server; files that are not in public/ are deleted there, so old
# URLs return 404. Without --yes it only shows what would change.
set -eu
cd "$(dirname "$0")/.."
dest=${SITE_DEST:-$(cat .deploy 2>/dev/null || true)}
[ -n "$dest" ] || { echo "Set SITE_DEST, or write user@host:/path/to/webroot to .deploy"; exit 1; }
[ -z "$(git status --porcelain)" ] || { echo "Commit first."; exit 1; }
scripts/check.sh
if [ "${1:-}" = --yes ]; then
  rsync -rlptz --delete --chmod=D755,F644 public/ "$dest/"
  echo "deployed $(git rev-parse --short HEAD) to $dest"
else
  rsync -rlptzn --delete --itemize-changes public/ "$dest/"
  echo "Dry run. Run scripts/deploy.sh --yes to deploy."
fi

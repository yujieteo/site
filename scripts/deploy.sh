#!/usr/bin/env bash
# Build the site and send it to the server, then check the live site.
# scripts/deploy.sh          sends HEAD. The working tree must be clean.
# scripts/deploy.sh COMMIT   sends an older commit, built in a fresh clone. This is the rollback.
set -eu
cd "$(dirname "$0")/.."
site=https://teoyujie.org
archive=$(mktemp)
clone=""
trap 'rm -rf "${archive}" ${clone:+"${clone}"}' EXIT
if [[ $# -gt 0 ]]; then
  clone=$(mktemp -d)
  git clone -q . "${clone}"
  git -C "${clone}" checkout -q "$1"
  src=${clone}
else
  dirty=$(git status --porcelain)
  [[ -z "${dirty}" ]] || { echo "Commit first."; exit 1; }
  src=.
fi
head=$(git -C "${src}" rev-parse HEAD)
# The tests build the site into a temporary folder and run the release checks. A failing test stops the deploy
# before anything is sent.
(cd "${src}" && bun test && bun src/build.ts)
COPYFILE_DISABLE=1 tar --no-xattrs -czf "${archive}" -C "${src}/dist" .
ssh deploy@10.8.0.1 site < "${archive}"

# The key pages: the home page, every post, the agent entry points, and the pages the server's jobs build.
pages=(/ /llms.txt /api/ /api/manifest.json /deals/ /calls/ /reading.html /forecasters.html /singapore-policy-actionables.html)
for dir in "${src}"/dist/essays/*/; do pages+=("/essays/$(basename "${dir}")/"); done
failed=0
for path in "${pages[@]}"; do
  headers=$(curl -sS -o /dev/null -D - --max-time 20 "${site}${path}" | tr -d '\r' | tr '[:upper:]' '[:lower:]')
  status=$(head -n 1 <<< "${headers}" | cut -d ' ' -f 2)
  if [[ "${status}" != 200 ]]; then
    echo "FAIL ${path}: HTTP ${status}"
    failed=1
    continue
  fi
  for header in content-security-policy strict-transport-security x-content-type-options cache-control last-modified; do
    grep -q "^${header}:" <<< "${headers}" || { echo "FAIL ${path}: no ${header} header"; failed=1; }
  done
done
# A repeat request is answered with 304, so a reader's cache works.
modified=$(curl -sS -o /dev/null -D - "${site}/" | tr -d '\r' | sed -n 's/^[Ll]ast-[Mm]odified: //p')
code=$(curl -sS -o /dev/null -w '%{http_code}' -H "If-Modified-Since: ${modified}" "${site}/")
[[ "${code}" = 304 ]] || { echo "FAIL /: a repeat request got ${code}, not 304"; failed=1; }
# The live manifest names the commit that was just sent.
live=$(curl -sS "${site}/api/manifest.json" | sed -n 's/^ *"commit": "\([0-9a-f]*\)".*/\1/p')
[[ "${live}" = "${head}" ]] || { echo "FAIL /api/manifest.json names ${live:0:7}, not ${head:0:7}"; failed=1; }
[[ "${failed}" = 0 ]] || exit 1
echo "deployed ${head:0:7}: ${#pages[@]} key pages answer with their headers"

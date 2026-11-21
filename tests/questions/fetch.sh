#!/bin/sh
# The only tool a model gets in run_claude.py: HTTP GET one URL under https://teoyujie.org/ and print it.
# Every call is logged to $FETCH_LOG with its bytes and SHA-256, and the body kept once in $FETCH_BODIES.
# $SITE_BASE serves the site instead of teoyujie.org (the old or new build on this machine).
set -u
url=${1:-}
case ${url} in
https://teoyujie.org/*) ;;
*) echo "Refused: only https://teoyujie.org/ can be fetched."; exit 2 ;;
esac
case ${url} in *[!A-Za-z0-9._~:/?#@!\$\&\'\(\)*+,\;=%-]*) echo "Refused: not a plain URL."; exit 2 ;; esac
target="${SITE_BASE:-https://teoyujie.org}${url#https://teoyujie.org}"
body=$(mktemp "${TMPDIR:-/tmp}/fetch.XXXXXX")
trap 'rm -f "${body}"' EXIT
status=$(curl -s -o "${body}" -w '%{http_code}' --max-time 30 -A teoyujie-question-run "${target}")
[ "${status}" = 000 ] && status=0
bytes=$(wc -c < "${body}" | tr -d ' ')
sha=$(shasum -a 256 "${body}" | cut -d' ' -f1)
[ -n "${FETCH_BODIES:-}" ] && cp "${body}" "${FETCH_BODIES}/${sha}"
[ -n "${FETCH_LOG:-}" ] && printf '{"url": "%s", "status": %s, "bytes": %s, "sha256": "%s"}\n' "${url}" "${status:-0}" "${bytes}" "${sha}" >> "${FETCH_LOG}"
[ "${status}" = 200 ] || echo "HTTP ${status}"
cat "${body}"

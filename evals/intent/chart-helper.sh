#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need node
need bun

main() {
  local out page css
  out=$(node evals/kit/scale.ts 2>&1) || fail "chart helper eval failed: ${out}"
  has "${out}" "PASS panels drop to one column when narrow"
  has "${out}" "PASS labels that touch a kept label are dropped"
  out=$(mktemp -d)
  bun src/build.ts --out "${out}" > /dev/null || fail "build failed"
  page=$(cat "${out}/essays/charts-choose-first/index.html")
  has "${page}" 'data-wide'
  has "${page}" 'women: 89 of 108 admitted'
  has "${page}" 'viewBox="0 0 912 '
  has "${page}" 'viewBox="0 0 596 '
  [[ "${page}" != *'</title></'* ]] || fail "a mark still uses the browser title for its tip"
  [[ "$(grep -c '\(fill\|stroke\)="#' "${out}/essays/charts-choose-first/index.html" || true)" -eq 0 ]] || fail "a figure writes a hex colour"
  css=$(cat "${out}/style.css")
  has "${css}" '--series-4: var(--grass)'
  [[ -s "${out}/kit/faithful.js" ]] || fail "no script for the faithful kind"
  echo OK
}

main

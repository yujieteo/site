#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local out page text
  out=$(mktemp -d)
  bun src/build.ts --out "${out}" > /dev/null || fail "build failed"
  page=$(cat "${out}/essays/charts-choose-first/index.html")
  has "${page}" '0.50 min wide: 2 peaks'
  has "${page}" 'n 11 · r 0.82 · y = 3.00 + 0.50x'
  has "${page}" 'women 30.4%'
  has "${page}" 'men 44.5%'
  has "${page}" '89 of 108 admitted'
  text=$(cat "${out}/essays/charts-choose-first/index.md")
  has "${text}" 'Figure: Anscombe'
  echo OK
}

main

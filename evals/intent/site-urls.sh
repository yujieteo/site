#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local out files
  out=$(mktemp -d)
  bun src/build.ts --out "$out" > /dev/null || fail "build failed"
  files=$(cd "$out" && find . -type f | sort)
  has "$files" './index.html'
  has "$(cat "$out/index.html")" 'No posts yet'
  [ ! -e "$out/essays/specimen" ] || fail "the specimen draft was deployed"
  if grep -qE 'lullapixie|marklove|/play/|/log' <<< "$files$(cat "$out/index.html")"; then fail "a removed page or link is back"; fi
  echo OK
}

main

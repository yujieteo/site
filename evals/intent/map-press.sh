#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun
need chromium

main() {
  local out dist
  dist=$(mktemp -d)
  bun src/build.ts --out "${dist}" > /dev/null || fail "build failed"
  out=$(bun evals/kit/press.ts "${dist}" 2>&1) || fail "press eval failed: ${out}"
  rm -rf "${dist}" "${dist}"-press*
  [[ "${out}" == "OK" ]] || fail "${out}"
  echo OK
}

main

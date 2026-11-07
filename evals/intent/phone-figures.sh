#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local out dist
  dist=$(mktemp -d)
  bun src/build.ts --out "${dist}" > /dev/null || fail "build failed"
  out=$(bun evals/kit/phone.ts "${dist}" 2>&1) || fail "phone eval failed: ${out}"
  rm -rf "${dist}" "${dist}"-phone-*
  [[ "${out}" == "OK" ]] || fail "${out}"
  echo OK
}

main

#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun
out=$(bun evals/kit/states.ts 2>&1) || fail "states eval crashed: ${out}"
[[ "${out}" == "OK" ]] || fail "${out}"
echo OK

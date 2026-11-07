#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun
bun evals/kit/theorems.ts || fail "theorems figure behavior"
echo OK

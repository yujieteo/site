#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun
bun evals/kit/live.ts || fail "the live solver run does not stop or fail cleanly"
echo OK

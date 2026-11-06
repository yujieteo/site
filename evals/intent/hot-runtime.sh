#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"

main() {
  local out
  need node
  out=$(bin/hotrun node evals/hot/steady.mjs) || fail "steady program failed: $out"
  has "$out" "does not prove zero GC"
  out=$(HOTRUN_LARGE=2000000 bin/hotrun node evals/hot/alloc.mjs) && fail "allocating program passed: $out"
  has "$out" "the hot path allocates"
  echo OK
}

main

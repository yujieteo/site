#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local got
  got=$(bun evals/kit/vision.ts double) || fail "the double commit case failed to run"
  [[ "${got}" = "1:2 / 2" ]] || fail "two quick clicks on Record verdict must record one verdict and move on once, got ${got}"
  got=$(bun evals/kit/vision.ts none) || fail "the no bridge case failed to run"
  [[ "${got}" = "false:false:false" ]] || fail "with no link to the agent the page must not say sent, got ${got}"
  got=$(bun evals/kit/vision.ts rejecting) || fail "the failing bridge case failed to run"
  [[ "${got}" = "false:false:false" ]] || fail "when sending fails the page must not say sent and must allow a retry, got ${got}"
  got=$(bun evals/kit/vision.ts working) || fail "the working bridge case failed to run"
  [[ "${got}" = "true:true:true" ]] || fail "when sending works the page must say sent, got ${got}"
  echo OK
}

main

#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local got
  got=$(bun evals/kit/cdp.ts routes) || fail "two servers in one process failed"
  [[ "${got}" = a,b ]] || fail "each server must serve its own folder, got ${got}"
  got=$(bun evals/kit/cdp.ts exception) || fail "the exception case failed"
  has "${got}" "Error: x"
  got=$(bun evals/kit/cdp.ts silent) || fail "the silent case failed"
  has "${got}" "no reply"
  got=$(bun evals/kit/cdp.ts dropped) || fail "the dropped case failed"
  has "${got}" "connection closed"
  got=$(bun evals/kit/cdp.ts launch) || fail "the launch case failed"
  [[ "${got}" = true:0:false ]] || fail "a failed launch must reject and leave no profile or browser, got ${got}"
  echo OK
}

main

#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local got
  got=$(bun evals/kit/sfig-style.ts) || fail "the figure style case failed to run"
  [[ "${got}" = true:00000 ]] || fail "a journal figure after a patent figure must get the journal style, and a new patent figure must start with zero forced counts, got ${got}"
  echo OK
}

main

#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local path got
  path=$(bun evals/kit/browser.ts) || fail "the gate needs a browser: see README.md"
  [[ -x "${path}" ]] || fail "the browser is not executable"
  got=$(CHROMIUM="${path}" bun evals/kit/browser.ts) || fail "the explicit browser path failed"
  [[ "${got}" = "${path}" ]] || fail "the explicit browser path was not used"
  if CHROMIUM="${path}/missing" bun evals/kit/browser.ts > /dev/null 2>&1; then
    fail "a bad browser path did not fail closed"
  fi
  echo OK
}

main

#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need python3

expect() {
  local got
  got=$(python3 -I evals/kit/sfig_blender.py "$1" 2> /dev/null)
  [[ "${got}" = "$2" ]] || fail "$3, got ${got}"
}

main() {
  local clean=False:True:0:2
  expect render "${clean}" "a render error must unhide tinted objects and keep materials as they were"
  expect setup "${clean}" "a failed holdout setup must restore Surface links and remove new nodes"
  expect repeat "${clean}:${clean}:${clean}" "repeated passes must not accumulate materials or nodes"
  expect device-gpu error "forcing gpu with no GPU must fail"
  expect device-auto CPU "auto with no GPU must fall back to CPU"
  expect device-cpu CPU "cpu mode must use CPU"
  echo OK
}

main

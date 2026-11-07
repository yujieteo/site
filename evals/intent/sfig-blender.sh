#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need python3

run() {
  python3 -I evals/kit/sfig_blender.py "$1" 2> /dev/null | tail -n 1
}

main() {
  local clean=False:True:0:2
  [[ "$(run render)" = "${clean}" ]] || fail "a render error must unhide tinted objects and keep materials as they were, got $(run render)"
  [[ "$(run setup)" = "${clean}" ]] || fail "a failed holdout setup must restore Surface links and remove new nodes, got $(run setup)"
  [[ "$(run repeat)" = "${clean}:${clean}:${clean}" ]] || fail "repeated passes must not accumulate materials or nodes, got $(run repeat)"
  [[ "$(run device-gpu)" = error ]] || fail "forcing gpu with no GPU must fail, got $(run device-gpu)"
  [[ "$(run device-auto)" = CPU ]] || fail "auto with no GPU must fall back to CPU, got $(run device-auto)"
  [[ "$(run device-cpu)" = CPU ]] || fail "cpu mode must use CPU, got $(run device-cpu)"
  echo OK
}

main

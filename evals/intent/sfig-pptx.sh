#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need python3

main() {
  local dir got
  dir=$(mktemp -d)
  got=$(python3 -I evals/kit/sfig_pptx.py "${dir}/odd.pptx" a.svg a.png b.svg 2> /dev/null | tr '\n' ' ')
  [[ "${got}" = "exit:True deck:False " ]] || fail "an SVG with no PNG must stop the deck, got ${got}"
  got=$(python3 -I evals/kit/sfig_pptx.py "${dir}/lone.pptx" b.svg 2> /dev/null | tr '\n' ' ')
  [[ "${got}" = "exit:True deck:False " ]] || fail "a lone SVG must stop the deck, got ${got}"
  echo OK
}

main

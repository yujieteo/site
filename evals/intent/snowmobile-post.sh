#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need node
need bun

main() {
  local out page text
  out=$(node evals/kit/stack.ts 2>&1) || fail "snowmobile eval failed: ${out}"
  has "${out}" "PASS the fitted map keeps 61% of the spread"
  has "${out}" "PASS the survey shares and the 73 links"
  out=$(mktemp -d)
  bun src/build.ts --out "${out}" > /dev/null || fail "build failed"
  [[ ! -e "${out}/essays/snowmobile" ]] || fail "a draft was built without --drafts"
  rm -rf "${out}"
  out=$(mktemp -d)
  bun src/build.ts --drafts --out "${out}" > /dev/null || fail "draft build failed"
  page=$(cat "${out}/essays/snowmobile/index.html")
  text=$(cat "${out}/essays/snowmobile/index.md")
  for kind in map matrix pair stack problems; do
    has "${page}" "data-kind=\"${kind}\" data-lazy"
  done
  [[ "${page}" != *'src="/kit/map.js"'* ]] || fail "the page loads the map before it is seen"
  has "${page}" '<math'
  has "${text}" 'Figure: The 27 paradigms and 11 real repositories'
  echo OK
}

main

#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need node
need bun

main() {
  local out page text kit
  out=$(node evals/kit/strike.ts 2>&1) || fail "strike eval failed: ${out}"
  has "${out}" "PASS the wasm file loaded from TypeScript runs the 9 mm strike"
  has "${out}" "PASS the recorded deflection curve ends where a fresh run ends"
  out=$(mktemp -d)
  bun src/build.ts --out "${out}" > /dev/null || fail "build failed"
  [[ -e "${out}/essays/goosestrike" ]] || fail "the published post is missing from the build"
  rm -rf "${out}"
  out=$(mktemp -d)
  bun src/build.ts --drafts --out "${out}" > /dev/null || fail "draft build failed"
  page=$(cat "${out}/essays/goosestrike/index.html")
  text=$(cat "${out}/essays/goosestrike/index.md")
  kit=$(cat "${out}/kit/kit.js")
  has "${page}" 'data-kind="strike" data-lazy'
  [[ "${page}" != *'src="/kit/strike.js"'* ]] || fail "the page loads the strike figure before it is seen"
  has "${kit}" 'import(`/kit/'
  [[ -s "${out}/kit/strike.wasm" ]] || fail "the solver file is not served"
  glue="$(find "${out}" -name '*.mjs' -o -name 'strike.js.map' || true)"
  [[ -z "${glue}" ]] || fail "glue code is served"
  has "${page}" '<math'
  has "${text}" 'Figure: One strike at 180 m/s'
  echo OK
}

main

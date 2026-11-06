#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need bun

main() {
  local got
  got=$(bun -e 'import { fillBalances } from "./src/kit/compound.hot.ts"; const o = new Float64Array(10); fillBalances(o, 100, 5); console.log(o[9]?.toFixed(4)); fillBalances(o, 100, 0); console.log(o[9])')
  has "$got" '^162.8895$'
  has "$got" '^100$'
  echo OK
}

main

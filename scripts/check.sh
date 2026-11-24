#!/usr/bin/env bash
# Runs every check: the Bun tests (they build the site into a temporary folder), the Python tests, shellcheck,
# ruff and the type check. It runs them all, names each that fails, and exits non-zero if any failed.
# It writes nothing into the repository.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1
export PYTHONDONTWRITEBYTECODE=1

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
failed=()

run() {
  local name=$1
  shift
  echo "== $name"
  if ! "$@"; then failed+=("$name"); fi
}

# A Python test that skips counts as a failure, because a missing package makes tests skip.
python_tests() {
  local out
  out=$("$@" 2>&1)
  local code=$?
  printf '%s\n' "$out" | tail -n 3
  if [ "$code" -ne 0 ]; then printf '%s\n' "$out"; return 1; fi
  if printf '%s\n' "$out" | grep -q 'skipped='; then echo "Some tests skipped."; return 1; fi
}

# TypeScript and the Bun types are pinned. They go into a temporary folder, not into the repository.
type_check() {
  printf '{"private":true,"dependencies":{"typescript":"5.9.3","@types/bun":"1.4.4","@types/node":"26.6.6","undici-types":"8.9.0"}}\n' >"$tmp/package.json"
  (cd "$tmp" && bun install --silent) || return 1
  bun "$tmp/node_modules/typescript/bin/tsc" -p tsconfig.json --typeRoots "$tmp/node_modules/@types"
}

run "bun test" bun test
run "prices tests" python_tests uv run --no-project --with-requirements scripts/prices/requirements.txt python -m unittest discover -s scripts/prices
run "tampines tests" python_tests uv run --no-project --with beautifulsoup4 python -m unittest discover -s scripts/tampines
run "questions tests" python_tests python3 -m unittest discover -s tests/questions
run "shellcheck" shellcheck scripts/check.sh scripts/deploy.sh tests/questions/fetch.sh
run "ruff" uvx ruff@0.14.0 check --no-cache --select F scripts tests
run "type check" type_check

if [ "${#failed[@]}" -gt 0 ]; then
  echo "Failed: ${failed[*]}"
  exit 1
fi
echo "All checks passed."

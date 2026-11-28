#!/usr/bin/env bash
# Runs every check: the Bun tests (they build the site into a temporary folder), the Python tests, shellcheck,
# ruff and the type check. It runs them all, names each that fails, and exits non-zero if any failed.
# It writes nothing into the repository.
#
# By default, uv fetches the Python packages and ruff. Two settings replace uv, for a machine where wheels from PyPI
# do not run, such as the NixOS CI runner:
#   CHECK_PYTHON  a Python that has numpy, openpyxl and beautifulsoup4
#   CHECK_RUFF    a ruff program
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1
export PYTHONDONTWRITEBYTECODE=1

failed=()

if [ -n "${CHECK_PYTHON:-}" ]; then
  prices_python=("$CHECK_PYTHON")
  tampines_python=("$CHECK_PYTHON")
else
  prices_python=(uv run --no-project --with-requirements scripts/prices/requirements.txt python)
  tampines_python=(uv run --no-project --with beautifulsoup4 python)
fi
if [ -n "${CHECK_RUFF:-}" ]; then ruff=("$CHECK_RUFF"); else ruff=(uvx ruff@0.14.0); fi

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

type_check() {
  if [ ! -x node_modules/.bin/tsc ]; then
    bun install --frozen-lockfile --silent || return 1
  fi
  bun node_modules/.bin/tsc -p tsconfig.json
}

run "bun test" bun test
run "prices tests" python_tests "${prices_python[@]}" -m unittest discover -s scripts/prices
run "tampines tests" python_tests "${tampines_python[@]}" -m unittest discover -s scripts/tampines
run "questions tests" python_tests "${CHECK_PYTHON:-python3}" -m unittest discover -s tests/questions
run "shellcheck" shellcheck scripts/check.sh scripts/deploy.sh tests/questions/fetch.sh
run "ruff" "${ruff[@]}" check --no-cache --select F scripts tests
run "type check" type_check

if [ "${#failed[@]}" -gt 0 ]; then
  echo "Failed: ${failed[*]}"
  exit 1
fi
echo "All checks passed."

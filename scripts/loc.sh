#!/bin/sh
# The whole site has a budget of 25,000 lines. Lockfiles are generated and not counted.
set -eu
cd "$(dirname "$0")/.."
n=$(git ls-files | grep -v -e '^Cargo.lock$' -e '^flake.lock$' | xargs cat | wc -l)
echo "$n / 25000 lines"
[ "$n" -le 25000 ]

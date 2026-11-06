#!/bin/sh
set -eu
export LC_ALL=C
cd "$(dirname "$0")/.."
comments=$({ grep -nE '(^|[[:space:]])(#|//|/\*)' scripts/*.sh wallpaper/*.goose wallpaper/*.c | grep -vE '^[^:]+:(1:#!|[0-9]+:#include )|// (Oklab, after Björn Ottosson|splitmix64, after Sebastiano Vigna)(:| \()'
  grep -nE '(^|[[:space:]])(//|/\*)' beamdiag/src/*.goose beamdiag/src/*.c beamdiag/src/page_style.css beamdiag/test.goose |
    grep -vE "Roark's series|Dekker's product"
  grep -nE '(^|[[:space:]])#' beamdiag/reference.py; } || true)
[ -z "${comments}" ] || { echo "${comments}" >&2
  echo 'check: comments are not allowed in scripts/*.sh, wallpaper/ and beamdiag/ (TypeScript comments need an https:// source in scripts/check-site.ts). Name the code better or write a test. The source credits that stay: Sonner, Roark, Dekker, Oklab and splitmix64.' >&2; exit 1; }
shell_files=$(git ls-files | while read -r f; do
  case ${f} in
    (*.sh) echo "${f}" ;;
    (*) head -n 1 "${f}" | grep -aE '^#!.*(sh|bash|ksh)( |$)' >/dev/null && echo "${f}" || true ;;
  esac
done)
printf '%s\n' "${shell_files}" | xargs uvx --from shellcheck-py==0.11.0.1 shellcheck -o all
bun install --frozen-lockfile >/dev/null
node_modules/.bin/tsc --noEmit
node_modules/.bin/knip
jpl=$(bun scripts/jpl.ts)
[ -z "${jpl}" ] || { echo "${jpl}" >&2; exit 1; }
bun scripts/check-site.ts
wallpaper_hash=$(cat wallpaper/wallpaper.goose wallpaper/host.c | shasum -a 256 | cut -d' ' -f1)
wallpaper_built=$(cat wallpaper/wasm.sha256)
[ "${wallpaper_hash}" = "${wallpaper_built}" ] ||
  { echo 'check: wallpaper/ changed after the last build. Run scripts/build-wallpaper.sh' >&2; exit 1; }
page_bytes=$(gzip -9 -c public/play/wallpaper/index.html | wc -c)
wasm_bytes=$(wc -c < public/play/wallpaper/wallpaper.wasm.gz)
[ $(( page_bytes + wasm_bytes )) -le 40960 ] ||
  { echo 'check: the wallpaper page is over its 40 KB budget' >&2; exit 1; }
bun test
tmp=$(mktemp -d)
trap 'rm -rf "${tmp}"' EXIT HUP INT TERM
scripts/build-beam.sh "${tmp}"
test_hash=$(cat beamdiag/test.goose beamdiag/src/*.goose beamdiag/src/body.html beamdiag/fixtures.json beamdiag/reference.json beamdiag/random.json beamdiag/raw.json | shasum -a 256 | cut -d' ' -f1)
built_test_hash=$(cat beamdiag/c/test.sha256)
if [ -n "${GOOSE:-}" ]; then
  "${GOOSE}" --standalone -o beamdiag/c/test.c beamdiag/test.goose
  echo "${test_hash}" > beamdiag/c/test.sha256
elif [ "${test_hash}" != "${built_test_hash}" ]; then
  echo 'check: beamdiag/c/test.c is older than beamdiag/test.goose or its inputs. Rebuild with GOOSE=/path/to/goose scripts/check.sh' >&2
  exit 1
fi
GOOSE_PACKED_STRUCT_MISALIGNED_STORES=-fno-sanitize=alignment
. scripts/cflags.sh
goose_cc cc -O1 -g -fsanitize=undefined,address -fno-sanitize-recover=all "${GOOSE_PACKED_STRUCT_MISALIGNED_STORES}" beamdiag/c/test.c beamdiag/src/shim.c -lm -o "${tmp}/test"
analyze() { clang -w --analyze -Xclang -analyzer-output=text -Xclang -analyzer-disable-checker -Xclang deadcode.DeadStores "-DGS_STACK_RESERVE=(512ull<<10)" -Ibeamdiag/c "$@" 2>&1 |
  sed -n 's/^\([^:]*\):[0-9]*:[0-9]*: warning: \(.*\)$/\1: \2/p'; }
for f in beamdiag/c/test.c beamdiag/c/page.c beamdiag/c/beamdiag.c; do analyze "${f}" > "${tmp}/$(basename "${f}").analysis" & done
for f in beamdiag/src/shim.c beamdiag/src/host.c; do clang -Wall -Wextra -Wpedantic -Werror -Ibeamdiag/c -fsyntax-only "${f}"; done
goose_cc clang -O1 "-DGS_STACK_RESERVE=(512ull<<10)" -Ibeamdiag/c -fsyntax-only beamdiag/c/beamdiag.c
wait
cat "${tmp}"/*.analysis | sort -u > "${tmp}/analysis.txt"
diff -u beamdiag/analyzer-known.txt "${tmp}/analysis.txt" ||
  { echo 'check: clang --analyze findings differ from beamdiag/analyzer-known.txt. Fix the new ones; remove the fixed ones from the list. The list only shrinks.' >&2; exit 1; }
"${tmp}/test"
for f in index.html beamdiag.wasm.gz; do [ -s "${tmp}/${f}" ]; done
cmp -s "${tmp}/index.html" public/play/beamdiag/index.html ||
  { echo 'check: public/play/beamdiag/index.html is not the page that beamdiag/c/ builds. Run scripts/build-beam.sh' >&2; exit 1; }
checker_goose=${GOOSE:-}
if [ -z "${checker_goose}" ]; then
  goose_os=$(uname -s)
  goose_arch=$(uname -m)
  goose_platform=${goose_os}-${goose_arch}
  goose_release=$(awk '$1 == "version" { print $2 }' goose.lock)
  goose_archive=$(awk -v platform="${goose_platform}" '$1 == platform { print $3 }' goose.lock)
  goose_artifact=$(awk -v platform="${goose_platform}" '$1 == platform { print $4 }' goose.lock)
  [ -n "${goose_archive}" ] && [ -n "${goose_artifact}" ] ||
    { echo "check: no official Goose artifact for ${goose_platform} in goose.lock" >&2; exit 1; }
  curl -fsSL "https://github.com/aardappel/goose/releases/download/${goose_release}/goose-${goose_release}-${goose_artifact}.tar.gz" -o "${tmp}/goose.tar.gz"
  printf '%s  %s\n' "${goose_archive}" "${tmp}/goose.tar.gz" | shasum -a 256 -c -
  tar -xzf "${tmp}/goose.tar.gz" -C "${tmp}"
  checker_goose=${tmp}/goose-${goose_release}-${goose_artifact}/goose
fi
require_goose "${checker_goose}"
curl -fsSL https://api.github.com/repos/yujieteo/goosemarklint/tarball/803793d42e1877416b17b0afc31887ba940a6114 -o "${tmp}/goosemarklint.tar.gz"
printf '%s  %s\n' e3b0fe189ae509878462570fe58d247a9dc20df4de25751dc698488968a79990 "${tmp}/goosemarklint.tar.gz" | shasum -a 256 -c -
mkdir "${tmp}/goosemarklint"
tar -xzf "${tmp}/goosemarklint.tar.gz" -C "${tmp}/goosemarklint" --strip-components=1
(cd "${tmp}/goosemarklint" && GOOSE_HOME="${tmp}/goose-home" "${checker_goose}" build src/main.goose -o "${tmp}/goosemarklint-bin")
"${tmp}/goosemarklint-bin" check .
echo 'check: ok'
if [ "${1:-}" = "--replay" ]; then
  shift
  export REPLAY_CACHE="${REPLAY_CACHE:-${HOME}/.cache/site-replay}"
  rm -rf "${REPLAY_CACHE}"
  REPLAY_CAPTURE=1 bun test
  bun scripts/replay.ts "$@"
fi

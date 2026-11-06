#!/bin/sh
require_goose() {
  goose_path=$(command -v "$1")
  goose_os=$(uname -s)
  goose_arch=$(uname -m)
  goose_platform=${goose_os}-${goose_arch}
  goose_digest=$(awk -v platform="${goose_platform}" '$1 == platform { print $2 }' goose.lock)
  goose_runtime=$(awk '$1 == "runtime" { print $2 }' goose.lock)
  [ -n "${goose_digest}" ] && [ -n "${goose_runtime}" ] ||
    { echo "goose: no official compiler pin for ${goose_platform} in goose.lock" >&2; return 1; }
  goose_actual=$(shasum -a 256 "${goose_path}" | cut -d' ' -f1)
  [ "${goose_actual}" = "${goose_digest}" ] ||
    { echo "goose: ${goose_path} is not the official compiler pinned in goose.lock" >&2; return 1; }
  goose_version=$("${goose_path}" version)
  [ "${goose_version}" = "goose runtime ${goose_runtime}" ] ||
    { echo "goose: runtime differs from goose.lock: ${goose_version}" >&2; return 1; }
}
goose_cc() {
  tool=$1
  shift
  "${tool}" -Wall -Wextra -Wpedantic -Werror -Wno-unused-variable -Wno-unused-function -Wno-unused-parameter -Wno-unused-but-set-variable -Wno-unterminated-string-initialization -Wno-unused-label -Wno-parentheses-equality "$@"
}

#!/bin/sh
# Regenerate fonts/*.otf: subsets of pinned upstream fonts (nixpkgs 26.05), cut with HarfBuzz.
# The committed files are the payload; this script only proves where they came from.
set -eu
cd "$(dirname "$0")/.."
U=https://releases.nixos.org/nixos/26.05/nixos-26.05.11576.7c8764b7c7b0/nixexprs.tar.xz
P='import (fetchTarball { url = "'$U'"; sha256 = "1fzrxmr2qi7fy76wh9v0l1a7vdvscxn4p2d5ng9rhpcnrhdil6zy"; }) {}'
out() { nix-build --no-out-link -E "with $P; $1"; }
hb=$(out harfbuzz.dev)/bin/hb-subset
TEXT=20-7E,A0-FF,131,152-153,160-161,178,17D-17E,391-3A9,3B1-3C9,2013-2014,2018-201D,2022,2026,2032-2033,2190-2193,2212,2248,2260,2264-2265,221E,00B7
cut() { "$hb" "$1" --no-hinting --layout-features=kern,liga --unicodes="$TEXT" -o "fonts/$2.otf"; }
cut "$(out fira-sans)/share/fonts/opentype/FiraSans-Regular.otf" sans
cut "$(out fira-mono)/share/fonts/opentype/FiraMono-Regular.otf" mono
cut "$(out libertinus)/share/fonts/opentype/LibertinusSerif-Regular.otf" book
cut "$(out lmodern)/share/fonts/opentype/public/lm/lmroman10-regular.otf" tex
"$hb" "$(out fira-math)/share/fonts/opentype/FiraMath-Regular.otf" --no-hinting \
  --unicodes="$TEXT,2200-22FF,210E,2308-230B,27E8-27E9,1D434-1D467,1D6E2-1D71B" -o fonts/math.otf
sha256sum fonts/*.otf

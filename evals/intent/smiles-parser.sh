#!/usr/bin/env bash
. "$(dirname "$0")/../lib.sh"
need python3

blender=.claude/skills/schematic-figure/foundation/blender

expect() {
  local got
  got=$(python3 -I -c 'import sys
sys.path.insert(0, sys.argv[1])
from mol3d_smiles import parse_smiles
try:
    parse_smiles(sys.argv[2])
except ValueError:
    print("rejected")
else:
    print("accepted")' "${blender}" "$2")
  [[ "${got}" = "$1" ]] || fail "SMILES $2 was ${got}, expected $1"
}

main() {
  local smiles
  for smiles in 'C(C' 'C()' 'C)C' '=CC' 'CC=' 'C-=C' 'C.=C' 'C11' 'C1C1' 'C=1CCCCC-1'; do
    expect rejected "${smiles}"
  done
  for smiles in CC 'C(C)C' 'C(=O)O' c1ccccc1 C1CC1 'C=1CCCCC=1' 'C=1CCCCC1' 'C1CCCCC=1' '[Na+].[Cl-]' 'C#N' 'C/C=C/C'; do
    expect accepted "${smiles}"
  done
  echo OK
}

main

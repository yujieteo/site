#!/usr/bin/env python3
"""Type-check the site's JavaScript with tsc: JSDoc types, checked as tsconfig.json sets out.

The files stay JavaScript and nothing is emitted. The checker and the Node type definitions are pinned
below and installed with npm install --no-save into .typecheck/ (ignored by Git), so the repository keeps no
package.json. --install installs them when they are missing or at other versions; without it the check
needs them already installed.

Usage: scripts/typecheck.py [--install]
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TOOLS = ROOT / ".typecheck"
# The one place the versions are pinned; @types/node follows the Node version CI uses.
PACKAGES = {"typescript": "7.0.2", "@types/node": "22.20.5"}
TSC = TOOLS / "node_modules" / ".bin" / "tsc"


def installed():
    """Whether every pinned package is installed in .typecheck/ at its pinned version."""
    for name, version in PACKAGES.items():
        manifest = TOOLS / "node_modules" / name / "package.json"
        try:
            if json.loads(manifest.read_text(encoding="utf-8"))["version"] != version:
                return False
        except (OSError, ValueError, KeyError):
            return False
    return True


def install():
    TOOLS.mkdir(exist_ok=True)
    specs = [f"{name}@{version}" for name, version in PACKAGES.items()]
    subprocess.run(
        ["npm", "install", "--no-save", "--no-audit", "--no-fund", "--prefix", str(TOOLS), *specs],
        check=True,
    )


def check():
    """Run tsc over tsconfig.json; return True when it reports no errors."""
    return subprocess.run([str(TSC), "-p", str(ROOT / "tsconfig.json"), "--noEmit"], cwd=ROOT).returncode == 0


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--install", action="store_true", help="install the pinned tools first if needed")
    args = parser.parse_args()
    if args.install and not installed():
        install()
    if not installed():
        print("The pinned type-checking tools are not installed; run scripts/typecheck.py --install.", file=sys.stderr)
        return 2
    return 0 if check() else 1


if __name__ == "__main__":
    sys.exit(main())

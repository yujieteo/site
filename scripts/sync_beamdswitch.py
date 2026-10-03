#!/usr/bin/env python3
"""Copy templates/beamdswitch.js into every visualization folder of this repository that carries it.

A folder visuals/<slug>/ that has a beamdswitch.js gets an unchanged copy of the template, and the
template inlined in its page, the body of <script id="beamdswitch"> in visuals/<slug>/index.html,
becomes the template followed by one newline, as each port's build writes it.
tests/beamdswitch-voice.test.mjs checks the copies; the copies in yujieteo/visuals change there.

With --check it writes nothing, lists each copy that differs, and exits non-zero when one does. Run
again, it changes nothing.

Usage: scripts/sync_beamdswitch.py [--check]
"""

import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INLINE = re.compile(r'(<script id="beamdswitch">\n)(.*?)(</script>)', re.DOTALL)


def planned(root=ROOT):
    """(path, current text, synced text) of each copy, in path order."""
    template = (root / "templates" / "beamdswitch.js").read_text(encoding="utf-8")
    plans = []
    for copy in sorted((root / "visuals").glob("*/beamdswitch.js")):
        plans.append((copy, copy.read_text(encoding="utf-8"), template))
        page = copy.parent / "index.html"
        if page.is_file():
            text = page.read_text(encoding="utf-8")
            blocks = INLINE.findall(text)
            if len(blocks) > 1:
                raise ValueError(f"{page.relative_to(root)} has more than one <script id=\"beamdswitch\">")
            if blocks:
                synced = INLINE.sub(lambda match: f"{match[1]}{template}\n{match[3]}", text)
                plans.append((page, text, synced))
    return plans


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("--check", action="store_true", help="write nothing; fail when a copy differs")
    parser.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = parser.parse_args(argv)
    try:
        plans = planned(args.root)
    except ValueError as exc:
        print(f"[FAIL] {exc}", file=sys.stderr)
        return 1
    stale = [(path, synced) for path, current, synced in plans if current != synced]
    for path, synced in stale:
        label = path.relative_to(args.root)
        if args.check:
            print(f"[FAIL] {label} differs from templates/beamdswitch.js")
        else:
            path.write_text(synced, encoding="utf-8")
            print(f"updated {label}")
    if not stale:
        print(f"{len(plans)} copies match templates/beamdswitch.js")
    return 1 if args.check and stale else 0


if __name__ == "__main__":
    sys.exit(main())

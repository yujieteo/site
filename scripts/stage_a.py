#!/usr/bin/env python3
"""Run Stage A of skills/verify.md: each pre-deploy command in order, one report row each.

The commands are the ones skills/verify.md lists, unchanged; this script adds no check of its own.
It prints one `stage,check,status,evidence` row per command, with the last line the command printed
as the evidence, stops at the first failure, marks the remaining checks NOT RUN, and exits non-zero
when a check fails. --base passes on to repo_check.py and run_tests.py, as on a pull request; omit
it on main. Reviewing the generated changes with scripts/site_diff.py stays a judgment after it.

Usage: scripts/stage_a.py [--base REF] [--no-npm-ci]
"""

import argparse
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PYTHON = ".venv/bin/python"


def steps(base=None, npm_ci=True):
    """(check name, command) of each Stage A command, in the order skills/verify.md runs them."""
    since = ["--base", base] if base else []
    return [
        ("validate", [PYTHON, "scripts/validate.py"]),
        ("repo-check", [PYTHON, "scripts/repo_check.py", *since]),
        ("ruff", [".venv/bin/ruff", "check"]),
        ("build", [PYTHON, "scripts/build.py"]),
        *([("npm-ci", ["npm", "ci"])] if npm_ci else []),
        ("typecheck", ["npm", "run", "typecheck"]),
        ("tests", [PYTHON, "scripts/run_tests.py", *since]),
    ]


def run(plan, root=ROOT, out=sys.stdout):
    """Run each (check, command) of plan, print its row, and return True when all pass."""
    print("stage,check,status,evidence", file=out)
    for index, (check, command) in enumerate(plan):
        try:
            result = subprocess.run(command, cwd=root, capture_output=True, text=True)
            output, code = result.stdout + result.stderr, result.returncode
        except OSError as exc:
            output, code = str(exc), 127
        lines = [line.strip() for line in output.splitlines() if line.strip()]
        evidence = (lines[-1] if lines else f"exit {code}").replace(",", ";")
        print(f"A,{check},{'PASS' if code == 0 else 'FAIL'},{evidence}", file=out)
        if code != 0:
            for later, _ in plan[index + 1:]:
                print(f"A,{later},NOT RUN,stopped after {check} failed", file=out)
            return False
    return True


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("--base", help="the ref a pull request compares against, such as origin/main")
    parser.add_argument("--no-npm-ci", action="store_true", help="skip npm ci when node_modules is already installed")
    args = parser.parse_args(argv)
    return 0 if run(steps(args.base, not args.no_npm_ci)) else 1


if __name__ == "__main__":
    sys.exit(main())

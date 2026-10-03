#!/usr/bin/env python3
"""Run the site's test suites, report their wall time and slowest tests, and enforce the time budget.

The Python suite runs with unittest (discovering tests/test_*.py) and the Node suite with node --test
(tests/*.test.{mjs,cjs}), exactly as before; this script only times them. Each suite must finish within
its budget in tests/time-budget.json, and a suite over budget fails with its slowest tests named. The
budget is fixed, not scaled by the number of visualisations: per-visualisation checks must stay
constant-cost, and heavy tests belong in each visualisation's folder in yujieteo/visuals.

With --base, the per-visualisation checks (tests/visual_selection.py) cover only the visualisation folders
changed against that ref: visuals/<slug>/ and data/visuals/<slug>.yaml. A change to the tests, the
build scripts, the templates, CI or the requirements covers every folder, as does a run without --base
(pushes to main) or one whose changes cannot be listed. Cross-cutting tests always run.

Usage: scripts/run_tests.py [python] [node] [--base REF]
"""

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile
import time
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SLOWEST = 10
BUDGET = ROOT / "tests" / "time-budget.json"
# A changed path that selects one visualisation folder for the per-folder checks.
VISUAL_PATH = re.compile(r"visuals/([^/]+)/|data/visuals/([^/]+)\.yaml$")
# A change under any of these can affect every folder's checks, so it selects them all.
COVERS_ALL = ("tests/", "scripts/", "templates/", ".github/", "requirements.txt")


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, check=True, capture_output=True, text=True).stdout


def selection(base):
    """Return SITE_TEST_VISUALS's value for changes against ``base``, or None to cover every folder."""
    if base is None:
        return None, "every folder (no --base)"
    try:
        merge_base = git("merge-base", base, "HEAD").strip()
        # Committed and uncommitted changes since the merge base, plus untracked files.
        changed = git("diff", "-z", "--name-only", "--no-renames", merge_base).split("\0")
        changed += git("ls-files", "-z", "--others", "--exclude-standard").split("\0")
    except (OSError, subprocess.CalledProcessError) as error:
        detail = getattr(error, "stderr", "") or error
        return None, f"every folder (cannot list changes against {base}: {str(detail).strip()})"
    value = selected_slugs(path for path in changed if path)
    if value is None:
        return None, f"every folder (tests, scripts, templates, CI or requirements changed against {base})"
    return value, f"{value.replace(',', ', ') or 'no folders'} (changed against {base})"


def selected_slugs(changed):
    """Return the comma-separated slugs the changed paths select, or None when they select every folder."""
    changed = list(changed)
    if any(path.startswith(COVERS_ALL) for path in changed):
        return None
    return ",".join(sorted({match[1] or match[2] for path in changed if (match := VISUAL_PATH.match(path))}))


def module_name(suite):
    for test in suite:
        if isinstance(test, unittest.TestSuite):
            if name := module_name(test):
                return name
        else:
            return test.id().split(".")[0]
    return None


class TimedModule(unittest.TestSuite):
    """One test module, timed from its first test to its last, including its class and module set-up."""

    seconds = {}

    def run(self, result, debug=False):
        name = module_name(self)  # before the run, which releases each test as it finishes
        start = time.perf_counter()
        super().run(result, debug)
        if name:
            TimedModule.seconds[name] = time.perf_counter() - start
        return result


def run_python():
    """Run the unittest suite; return (passed, slowest modules, slowest tests) with times in seconds."""
    os.chdir(ROOT)
    tests = ROOT / "tests"
    discovered = unittest.TestLoader().discover(str(tests), pattern="test_*.py", top_level_dir=str(tests))
    suite = unittest.TestSuite(TimedModule([module]) for module in discovered)
    result = unittest.TextTestRunner(verbosity=1).run(suite)
    modules = sorted(TimedModule.seconds.items(), key=lambda item: -item[1])
    durations = sorted(result.collectedDurations, key=lambda item: -item[1])
    return result.wasSuccessful(), modules[:SLOWEST], durations[:SLOWEST]


def run_node():
    """Run node --test with its spec reporter; return (passed, slowest files, slowest tests)."""
    with tempfile.TemporaryDirectory() as directory:
        log = Path(directory) / "durations.jsonl"
        command = [
            "node", "--test",
            "--test-reporter=spec", "--test-reporter-destination=stdout",
            "--test-reporter=./scripts/node_test_durations.mjs", f"--test-reporter-destination={log}",
            "tests/*.test.{mjs,cjs}",
        ]
        passed = subprocess.run(command, cwd=ROOT).returncode == 0
        records = [json.loads(line) for line in log.read_text(encoding="utf-8").splitlines()] if log.exists() else []
    files, tests = {}, []
    for record in records:
        if record["nesting"] == 0:
            name = Path(record["file"]).name
            files[name] = files.get(name, 0) + record["seconds"]
            tests.append((f"{name}: {record['name']}", record["seconds"]))
    return (
        passed,
        sorted(files.items(), key=lambda item: -item[1])[:SLOWEST],
        sorted(tests, key=lambda item: -item[1])[:SLOWEST],
    )


def report(suite, seconds, budget, groups, tests):
    lines = [f"{suite} suite: {seconds:.1f} s of its {budget} s budget ({100 * seconds / budget:.0f}%)"]
    for title, rows in (("slowest modules" if suite == "python" else "slowest files", groups), ("slowest tests", tests)):
        lines.append(f"  {title}:")
        lines += [f"    {elapsed:7.2f} s  {name}" for name, elapsed in rows]
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("suites", nargs="*", choices=["python", "node"], help="the suites to run (default both)")
    parser.add_argument("--base", help="select per-visualisation checks by the changes against this ref")
    args = parser.parse_args()

    budgets = json.loads(BUDGET.read_text(encoding="utf-8"))
    value, described = selection(args.base)
    if value is None:
        os.environ.pop("SITE_TEST_VISUALS", None)
    else:
        os.environ["SITE_TEST_VISUALS"] = value
    print(f"per-visualisation checks: {described}", flush=True)

    reports, failures = [], []
    for suite in dict.fromkeys(args.suites or ["python", "node"]):
        start = time.perf_counter()
        passed, groups, tests = (run_python if suite == "python" else run_node)()
        seconds = time.perf_counter() - start
        budget = budgets[f"{suite}_seconds"]
        reports.append(report(suite, seconds, budget, groups, tests))
        if not passed:
            failures.append(f"the {suite} tests failed")
        if seconds > budget:
            slow = "".join(f"\n  {elapsed:.2f} s  {name}" for name, elapsed in tests[:5])
            failures.append(
                f"the {suite} suite took {seconds:.1f} s, over its {budget} s budget in "
                f"{BUDGET.relative_to(ROOT)}; its slowest tests:{slow}"
            )

    text = "\n".join(reports)
    print("\n" + text, flush=True)
    if summary := os.environ.get("GITHUB_STEP_SUMMARY"):
        with open(summary, "a", encoding="utf-8") as handle:
            handle.write(f"```text\nper-visualisation checks: {described}\n{text}\n```\n")
    for failure in failures:
        print(f"FAIL: {failure}", file=sys.stderr)
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())

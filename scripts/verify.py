#!/usr/bin/env python3
"""verify-axi: one-call verdicts for Stage A and the type check, in TOON (skills/verify.md).

`stage-a` runs the Stage A steps in the order of skills/verify.md: validate, repo_check, ruff, build,
typecheck, the Python tests and the Node tests. It stops at the first failed step, as Stage A does,
and prints the verdict, the failed tests with their file:line, each step's status and time, the test
time budget and the review tier. Each step's full output goes to a log under `.verify/`; the result
names the log, and nothing else of it reaches stdout.

`typecheck` runs `npm run typecheck` with `--pretty false --listFiles` and prints the error counts by
code and by file, and the first errors, in a stable order. `--file` and `--since` narrow the counts.

`last` prints the verdict of the last `stage-a` run, and marks it stale when the commit or the working
tree changed since.

No false pass: a filter or scope option prints the filtered count next to the total, and the verdict
and exit code follow the total unless `--scoped-verdict` is given; the result then says so and counts
what lies outside the scope. A filter that matches nothing, a missing path or an unknown ref is a usage
error. Exit codes: 0 pass, 1 fail, 2 usage or environment error.

Usage: scripts/verify.py stage-a [--base REF] [--only STEP,...] [--scoped-verdict]
       scripts/verify.py typecheck [--summary] [--file PATH]... [--since REF] [--first N] [--scoped-verdict]
       scripts/verify.py last
"""

import argparse
import hashlib
import os
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

import toon  # noqa: E402

LOG_DIR = ROOT / ".verify"
PYTHON = sys.executable
# The failed tests each step lists at most; the steps table counts them all.
FAILURES_SHOWN = 20
# Extensions tsc checks here (tsconfig.json include).
TYPED = (".js", ".mjs", ".cjs", ".ts", ".mts", ".cts")


class UsageError(Exception):
    """A usage or environment error: exit 2."""


def git(*args):
    result = subprocess.run(["git", *args], cwd=ROOT, capture_output=True, text=True)
    if result.returncode:
        raise UsageError(f"git {' '.join(args)}: {result.stderr.strip() or 'failed'}")
    return result.stdout


def check_ref(ref):
    """Fail with a usage error when ``ref`` names no commit."""
    if subprocess.run(["git", "rev-parse", "--verify", "--quiet", f"{ref}^{{commit}}"], cwd=ROOT,
                      capture_output=True).returncode:
        raise UsageError(f"unknown ref {ref}")


def rel(path):
    """Return ``path`` relative to the repository root, with forward slashes."""
    path = Path(path)
    if path.is_absolute():
        try:
            path = path.resolve().relative_to(ROOT)
        except ValueError:
            return path.as_posix()
    return path.as_posix()


# ---------- type check ----------

TSC_ERROR = re.compile(r"^(?P<file>.+?)\((?P<line>\d+),(?P<col>\d+)\): error (?P<code>TS\d+): (?P<message>.*)$")
TSC_GLOBAL = re.compile(r"^error (?P<code>TS\d+): (?P<message>.*)$")


def parse_tsc(text):
    """Parse `tsc --pretty false --listFiles` output into (errors, checked files outside node_modules)."""
    errors, files = [], []
    for line in text.splitlines():
        if match := TSC_ERROR.match(line):
            errors.append({"file": rel(match["file"]), "line": int(match["line"]), "col": int(match["col"]),
                           "code": match["code"], "message": match["message"]})
        elif match := TSC_GLOBAL.match(line):
            errors.append({"file": "-", "line": 0, "col": 0, "code": match["code"], "message": match["message"]})
        elif os.path.isabs(line.strip()) and "/node_modules/" not in line:
            files.append(rel(line.strip()))
    errors.sort(key=lambda e: (e["file"], e["line"], e["col"], e["code"], e["message"]))
    return errors, sorted(set(files))


def run_tsc(log):
    """Run the pinned tsc through npm, with the full output in ``log``; return (exit code, output)."""
    if not (ROOT / "node_modules" / "typescript").is_dir():
        raise UsageError("typescript is not installed: run npm ci")
    npm = shutil.which("npm")
    if not npm:
        raise UsageError("npm is not on PATH")
    with open(log, "w", encoding="utf-8") as handle:
        code = subprocess.run([npm, "run", "--silent", "typecheck", "--", "--pretty", "false", "--listFiles"],
                              cwd=ROOT, stdout=handle, stderr=subprocess.STDOUT).returncode
    return code, Path(log).read_text(encoding="utf-8")


def changed_since(ref):
    check_ref(ref)
    changed = git("diff", "-z", "--name-only", "--no-renames", ref).split("\0")
    changed += git("ls-files", "-z", "--others", "--exclude-standard").split("\0")
    return sorted({path for path in changed if path})


def in_scope(file, paths):
    return any(file == path or file.startswith(path.rstrip("/") + "/") for path in paths)


def summarize_typecheck(errors, checked, files=(), since=None, changed=None, first=20, scoped=False):
    """Return (TOON document, exit code) for the parsed tsc errors and the checked files."""
    paths, labels = [], []
    if files:
        for path in files:
            if not (ROOT / path).exists():
                raise UsageError(f"no such path: {path}")
            path = rel(ROOT / path)
            if not any(in_scope(file, [path]) for file in checked):
                raise UsageError(f"{path} matches no type-checked file (tsconfig.json include)")
            paths.append(path)
        labels.append("file " + " ".join(paths))
    if since is not None:
        changed = [path for path in changed if path in checked]
        if not changed:
            raise UsageError(f"no type-checked file changed since {since}")
        paths = [path for path in changed if not paths or in_scope(path, paths)]
        if not paths:
            raise UsageError(f"no type-checked file under the --file paths changed since {since}")
        labels.append(f"since {since}")
    errors = sorted(errors, key=lambda e: (e["file"], e["line"], e["col"], e["code"], e["message"]))
    filtered = [e for e in errors if not labels or in_scope(e["file"], paths)]

    by_code, by_file = {}, {}
    for error in filtered:
        by_code.setdefault(error["code"], []).append(error)
        by_file[error["file"]] = by_file.get(error["file"], 0) + 1
    counted = filtered if scoped else errors
    verdict = "fail" if counted else "pass"
    document = {"verdict": verdict, "totals": {"errors": len(errors), "files_with_errors": len({e["file"] for e in errors}),
                                               "files_checked": len(checked)}}
    if labels:
        outside = len(errors) - len(filtered)
        document["scope"] = {
            "filter": "; ".join(labels),
            "files_in_scope": sum(1 for file in checked if in_scope(file, paths)),
            "errors_in_scope": len(filtered),
            "errors_outside_scope": outside,
            "verdict_basis": (f"scoped: {outside} errors outside the scope are not counted" if scoped
                              else f"total: all {len(errors)} errors count, in scope or not"),
        }
    document["by_code"] = [{"code": code, "count": len(rows), "example": f"{rows[0]['file']}:{rows[0]['line']}"}
                           for code, rows in sorted(by_code.items(), key=lambda item: (-len(item[1]), item[0]))]
    document["by_file"] = [{"file": file, "count": count}
                           for file, count in sorted(by_file.items(), key=lambda item: (-item[1], item[0]))]
    document["first"] = [{"file_line": f"{e['file']}:{e['line']}", "code": e["code"], "message": e["message"]}
                         for e in filtered[:first]]
    return document, 1 if counted else 0


def typecheck(args):
    LOG_DIR.mkdir(exist_ok=True)
    log = LOG_DIR / "typecheck.log"
    if args.since is not None:
        check_ref(args.since)
    code, text = run_tsc(log)
    errors, checked = parse_tsc(text)
    if code and not errors:
        raise UsageError(f"tsc exited {code} with no parseable error: read {rel(log)}")
    changed = changed_since(args.since) if args.since is not None else None
    document, exit_code = summarize_typecheck(errors, checked, args.file or (), args.since, changed,
                                              args.first, args.scoped_verdict)
    document["log"] = rel(log)
    hints = []
    if document["by_file"]:
        hints.append(f"Run `scripts/verify.py typecheck --file {document['by_file'][0]['file']}` to see one file")
    if exit_code:
        hints.append(f"Read {rel(log)} for every error and its continuation lines")
    document["help"] = hints or ["Run `scripts/verify.py stage-a --base origin/main` for the whole of Stage A"]
    return document, exit_code


# ---------- Stage A ----------


def failure(step, test, file_line, message):
    return {"step": step, "test": test, "file_line": file_line, "message": message.strip()[:200]}


def parse_unittest(text, step="python"):
    """Return the failed tests of a unittest run, each with the test file's line that raised."""
    found = []
    blocks = re.split(r"^={10,}$", text, flags=re.MULTILINE)
    for block in blocks[1:]:
        head = re.match(r"\s*(?:FAIL|ERROR): (\S+) \(([^)]+)\)", block)
        if not head:
            continue
        frames = re.findall(r'^\s*File "([^"]+)", line (\d+)', block, flags=re.MULTILINE)
        local = [(file, line) for file, line in frames if rel(file).startswith("tests/")] or frames
        file_line = f"{rel(local[-1][0])}:{local[-1][1]}" if local else "-"
        body = block.split("Traceback (most recent call last):")[-1].splitlines()
        message = next((line for line in body if line.strip() and not line.startswith((" ", "-"))), "")
        found.append(failure(step, f"{head[2]}", file_line, message))
    return found


def parse_node(text, step="node"):
    """Return the failed tests from the spec reporter's `failing tests` section."""
    found = []
    section = text.split("✖ failing tests:", 1)
    if len(section) < 2:
        return found
    lines = section[1].splitlines()
    for index, line in enumerate(lines):
        if match := re.match(r"^test at (.+?):(\d+):\d+$", line.strip()):
            name = message = ""
            if index + 1 < len(lines):
                name = re.sub(r"\s*\([\d.]+m?s\)$", "", lines[index + 1].strip().lstrip("✖").strip())
            if index + 2 < len(lines):
                message = lines[index + 2]
            found.append(failure(step, name, f"{rel(match[1])}:{match[2]}", message))
    return found


def parse_suite_budget(text):
    """Return the suite time rows that scripts/run_tests.py prints, each with its slowest test."""
    rows, lines = [], text.splitlines()
    for index, line in enumerate(lines):
        if match := re.match(r"^(python|node) suite: ([\d.]+) s of its (\d+) s budget", line):
            row = {"suite": match[1], "seconds": float(match[2]), "limit_seconds": int(match[3]),
                   "slowest_test": "-", "slowest_seconds": 0.0}
            rest = lines[index + 1:]
            if "  slowest tests:" in rest:
                after = rest[rest.index("  slowest tests:") + 1:]
                if after and (slow := re.match(r"^\s+([\d.]+) s  (.+)$", after[0])):
                    row["slowest_test"], row["slowest_seconds"] = slow[2].strip(), float(slow[1])
            rows.append(row)
    return rows


def parse_tests(step, text):
    found = parse_unittest(text, step) if step == "python" else parse_node(text, step)
    for match in re.finditer(r"^FAIL: (the \w+ suite took .*)$", text, flags=re.MULTILINE):
        found.append(failure(step, "time budget", "tests/time-budget.json", match[1]))
    return found


def parse_lines(step, pattern):
    def parse(text):
        return [failure(step, match["test"] if "test" in match.groupdict() else "-", match["where"] or "-",
                        match["message"]) for match in re.finditer(pattern, text, flags=re.MULTILINE)]
    return parse


def parse_typecheck_step(text):
    errors, _ = parse_tsc(text)
    return [failure("typecheck", e["code"], f"{e['file']}:{e['line']}", e["message"]) for e in errors]


def ruff():
    for candidate in (ROOT / ".venv" / "bin" / "ruff", shutil.which("ruff")):
        if candidate and Path(candidate).exists():
            return [str(candidate), "check", "--output-format", "concise"]
    raise UsageError("ruff is not installed: run .venv/bin/pip install -r requirements-lint.txt")


def npm_typecheck():
    if not (ROOT / "node_modules" / "typescript").is_dir():
        raise UsageError("typescript is not installed: run npm ci")
    if not shutil.which("npm"):
        raise UsageError("npm is not on PATH")
    return [shutil.which("npm"), "run", "--silent", "typecheck", "--", "--pretty", "false"]


def base_args(base):
    return ["--base", base] if base else []


# Each step: (name, a function of --base that returns the command, a parser of its output into failures).
STEPS = [
    ("validate", lambda base: [PYTHON, "scripts/validate.py"],
     parse_lines("validate", r"^\[FAIL\] (?P<where>)(?P<message>.*)$")),
    ("repo_check", lambda base: [PYTHON, "scripts/repo_check.py", *base_args(base)],
     parse_lines("repo_check", r"^\w+,(?P<test>[\w-]+),FAIL,(?P<where>)(?P<message>.*)$")),
    ("ruff", lambda base: ruff(),
     parse_lines("ruff", r"^(?P<where>[^\s:]+:\d+):\d+: (?P<test>[A-Z]+\d+) (?P<message>.*)$")),
    ("build", lambda base: [PYTHON, "scripts/build.py"],
     parse_lines("build", r"^(?P<where>)(?P<message>(?:\w+Error|Error|FAIL|error)\b.*)$")),
    ("typecheck", lambda base: npm_typecheck(), parse_typecheck_step),
    ("python", lambda base: [PYTHON, "scripts/run_tests.py", "python", *base_args(base)],
     lambda text: parse_tests("python", text)),
    ("node", lambda base: [PYTHON, "scripts/run_tests.py", "node", *base_args(base)],
     lambda text: parse_tests("node", text)),
]


def last_line(text):
    lines = [line for line in text.splitlines() if line.strip()]
    return lines[-1] if lines else "no output"


def tree_state():
    """Return the commit and a hash of the uncommitted changes, so `last` can tell a stale verdict."""
    head = git("rev-parse", "HEAD").strip()
    digest = hashlib.sha256(git("diff", "HEAD", "--binary").encode())
    for path in sorted(filter(None, git("ls-files", "-z", "--others", "--exclude-standard").split("\0"))):
        digest.update(path.encode() + b"\0")
        if (ROOT / path).is_file():
            digest.update((ROOT / path).read_bytes())
    return head, digest.hexdigest()[:16]


def stage_a(args):
    names = [name for name, _, _ in STEPS]
    only = names
    if args.only is not None:
        only = [name.strip() for name in args.only.split(",") if name.strip()]
        unknown = sorted(set(only) - set(names))
        if unknown or not only:
            raise UsageError(f"unknown step {', '.join(unknown) or '(none)'}; the steps are {','.join(names)}")
    if args.scoped_verdict and args.only is None:
        raise UsageError("--scoped-verdict needs --only")
    if args.base:
        check_ref(args.base)
    commands = {name: command(args.base) for name, command, _ in STEPS if name in only}
    head, dirty = tree_state()

    out_dir = LOG_DIR / "stage-a"
    shutil.rmtree(out_dir, ignore_errors=True)
    out_dir.mkdir(parents=True)
    steps, failures, outputs, stopped = [], [], {}, None
    for name, _, parse in STEPS:
        if name not in only:
            steps.append({"step": name, "status": "skipped", "duration_ms": 0, "failed": 0})
            continue
        if stopped:
            steps.append({"step": name, "status": "not-run", "duration_ms": 0, "failed": 0})
            continue
        log = out_dir / f"{name}.log"
        start = time.perf_counter()
        with open(log, "w", encoding="utf-8") as handle:
            code = subprocess.run(commands[name], cwd=ROOT, stdout=handle, stderr=subprocess.STDOUT).returncode
        elapsed = round(1000 * (time.perf_counter() - start))
        text = log.read_text(encoding="utf-8", errors="replace")
        outputs[name] = text
        found = parse(text) if code else []
        if code and not found:
            found = [failure(name, "-", "-", f"exit {code}: {last_line(text)}")]
        failures += found
        steps.append({"step": name, "status": "fail" if code else "pass", "duration_ms": elapsed,
                      "failed": len(found)})
        if code:
            stopped = name

    ran = [row for row in steps if row["status"] in ("pass", "fail")]
    outside = [row["step"] for row in steps if row["status"] == "skipped"]
    if stopped:
        verdict = "fail"
    elif outside and not args.scoped_verdict:
        verdict = "incomplete"
    else:
        verdict = "pass"
    document = {"verdict": verdict}
    if args.only is not None:
        document["scope"] = {
            "only": ",".join(only),
            "steps_run": len(ran),
            "steps_total": len(STEPS),
            "steps_outside_scope": len(outside),
            "verdict_basis": (f"scoped: {len(outside)} steps outside the scope were not run and are not counted"
                              if args.scoped_verdict else
                              f"total: {len(outside)} steps were not run, so Stage A is not passed"),
        }
    shown, per_step = [], {}
    for row in failures:
        per_step[row["step"]] = per_step.get(row["step"], 0) + 1
        if per_step[row["step"]] <= FAILURES_SHOWN:
            shown.append(row)
    document["failures"] = shown
    document["steps"] = steps
    budget = parse_suite_budget(outputs.get("python", "") + "\n" + outputs.get("node", ""))
    if budget:
        document["budget"] = budget
    tier = re.search(r"^\w+,review-tier,\w+,(.*)$", outputs.get("repo_check", ""), flags=re.MULTILINE)
    if tier:
        document["tier"] = tier[1]
    document["head"] = head
    document["logs"] = rel(out_dir)
    hints = []
    if stopped:
        hints.append(f"Read {rel(out_dir / (stopped + '.log'))} for the full output of {stopped}")
        rest = ",".join(row["step"] for row in steps if row["status"] in ("fail", "not-run"))
        hints.append(f"Run `scripts/verify.py stage-a{' --base ' + args.base if args.base else ''} "
                     f"--only {rest} --scoped-verdict` after a fix, then the whole of Stage A")
        if stopped == "typecheck":
            hints.append("Run `scripts/verify.py typecheck` for the errors by code and by file")
    elif verdict == "incomplete":
        hints.append("Run without --only for the Stage A verdict, or add --scoped-verdict to judge only the scope")
    else:
        hints.append("Open the pull request: Stage A passed" if verdict == "pass" and not outside
                     else "Run without --only before you open the pull request")
    document["help"] = hints
    exit_code = 0 if verdict == "pass" else 1
    (LOG_DIR / "last.toon").write_text(
        toon.encode({**document, "exit": exit_code, "tree": dirty}) + "\n", encoding="utf-8")
    return document, exit_code


def last(_args):
    path = LOG_DIR / "last.toon"
    if not path.exists():
        raise UsageError("no stage-a run is recorded: run scripts/verify.py stage-a")
    document = toon.decode(path.read_text(encoding="utf-8"))
    exit_code, recorded = document.pop("exit"), document.pop("tree")
    head, dirty = tree_state()
    if (document["head"], recorded) != (head, dirty):
        document = {"verdict": "stale", "recorded_verdict": document["verdict"], **{
            key: value for key, value in document.items() if key != "verdict"}}
        document["help"] = ["The commit or working tree changed since this run: run scripts/verify.py stage-a again"]
        exit_code = 1
    return document, exit_code


def main(argv=None):
    parser = argparse.ArgumentParser(prog="verify-axi", description=__doc__.split("\n\n")[0])
    commands = parser.add_subparsers(dest="command", required=True)
    stage = commands.add_parser("stage-a", help="run Stage A and print one verdict")
    stage.add_argument("--base", help="the ref for the review tier and the per-visualisation test selection")
    stage.add_argument("--only", help="comma-separated steps to run: " + ",".join(name for name, _, _ in STEPS))
    stage.add_argument("--scoped-verdict", action="store_true", help="judge only the --only steps")
    check = commands.add_parser("typecheck", help="run tsc and print the errors by code and by file")
    check.add_argument("--summary", action="store_true", help="the aggregate view (the default and only view)")
    check.add_argument("--file", action="append", help="count only errors in this file or folder (repeatable)")
    check.add_argument("--since", help="count only errors in files changed since this ref")
    check.add_argument("--first", type=int, default=20, help="how many errors to list (default 20)")
    check.add_argument("--scoped-verdict", action="store_true", help="judge only the errors in the scope")
    commands.add_parser("last", help="print the verdict of the last stage-a run")
    try:
        args = parser.parse_args(argv)
    except SystemExit as error:
        return 2 if error.code else 0
    try:
        if getattr(args, "scoped_verdict", False) and args.command == "typecheck" and not (args.file or args.since):
            raise UsageError("--scoped-verdict needs --file or --since")
        if args.command == "typecheck" and args.first < 0:
            raise UsageError("--first must be 0 or more")
        document, exit_code = {"stage-a": stage_a, "typecheck": typecheck, "last": last}[args.command](args)
    except UsageError as error:
        print(toon.encode({"verdict": "error", "error": str(error),
                           "help": ["Run `scripts/verify.py --help` for the commands and options"]}))
        return 2
    print(toon.encode(document))
    return exit_code


if __name__ == "__main__":
    sys.exit(main())

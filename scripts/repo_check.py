#!/usr/bin/env python3
"""Repository checks that review used to make by reading (Stage A, and CI).

`artifacts` fails when Git tracks a build or OS artifact (`__pycache__/`, `*.pyc`, `.DS_Store`, an
AppleDouble `._*` file, `Thumbs.db`) or when `.gitignore` stops ignoring one, so a stray file never
reaches a commit or a deploy.

`source-grep` reports a test that reads a code file (a script under `static/`, `templates/` or
`scripts/`, or a page under `visuals/`) and matches its text (`assertIn`, `assertRegex`,
`assert.match`, `assert.ok(text.includes(...))`): such a test passes whatever the code does. Its
existing cases are listed in `tests/source-grep-allowlist.txt`; a new one is rewritten to run the
code, or listed there with the reason it cannot. For now a new case is only reported, until a replay
against past pull requests shows no false positives; an allow-list entry with no reason, or one that
no longer matches, fails.

`tier` prints the review tier of the changes against `--base`: `fast` only when every changed path
is content or a private visualization copy, else `full` with the paths that need the full pipeline
(see skills/verify.md#review-tier).

Each check prints `stage,check,status,evidence` rows, as skills/verify.md reports them, and the
script exits non-zero on a failure. With no check named, it runs `artifacts` and `source-grep`, and
`tier` too when `--base` is given.

Usage: scripts/repo_check.py [artifacts] [source-grep] [tier] [--base REF]
"""

import argparse
import ast
import re
import subprocess
import sys
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]
ALLOWLIST = "tests/source-grep-allowlist.txt"

# Folders and files that a build, an editor or the OS leaves behind and that Git must never track.
ARTIFACT_NAMES = {"__pycache__", ".DS_Store", "Thumbs.db"}
ARTIFACT_SUFFIXES = (".pyc", ".pyo")
# One example of each artifact; .gitignore must ignore every one.
IGNORED_EXAMPLES = ("scripts/__pycache__/build.cpython-313.pyc", "scripts/build.pyc", "data/.DS_Store",
                    "data/blog/._post.md")

# A path of a code file: a script, or a visualization page with its inlined scripts. Not generated
# site/ output or data; CSS and HTML templates are declarative, so without a browser their text is
# what a site test can check.
SOURCE_PATH = re.compile(
    r"(?:^|/)(?:(?:static|templates|scripts)/[\w./${}-]*\.(?:js|mjs|cjs|py)|visuals/[\w./${}-]*\.(?:html|js|mjs))$"
)
# The generated site/ copies them.
GENERATED = re.compile(r"(?:^|/)site/")
TEXT_ASSERTS = {"assertIn", "assertNotIn", "assertRegex", "assertNotRegex"}
JS_TEST = re.compile(r"^\s*(?:test|it)(?:\.\w+)?\(\s*(['\"`])(.*?)\1", re.MULTILINE)
JS_SOURCE = re.compile(r"""(['"`])([^'"`\n]*\.(?:js|mjs|cjs|py|html))\1""")
# A variable set on one line, and an assertion that matches text: its arguments to the end of the line.
JS_ASSIGN = re.compile(r"\b(?:const|let|var)\s+(\w+)\s*=\s*(.*)")
JS_TEXT_ASSERT = re.compile(r"\bassert\.(match|doesNotMatch|ok)\((.*)")

# Paths a fast-path pull request may change: content, and the two private visualization copies.
FAST_CONTENT = re.compile(
    r"data/(?:notes\.md|note-tags\.json|calibrator/raw\.toon|visuals/[^/]+\.yaml"
    r"|(?:blog|decks|podcasts|paper-links|resources)/.+)$"
    r"|exports/paper-links\.toon$"
)
FAST_COPY = re.compile(r"visuals/(beamdswitch|connes-qft)/")


def git(*args, stdin=None):
    return subprocess.run(["git", *args], cwd=ROOT, check=True, capture_output=True, text=True, input=stdin).stdout


def artifact(path):
    """Why Git must not track ``path``, or None."""
    for part in PurePosixPath(path).parts:
        if part.startswith("._"):
            return "AppleDouble file"
        if part in ARTIFACT_NAMES or part.endswith(ARTIFACT_SUFFIXES):
            return "build or OS artifact"
    return None


def check_artifacts():
    tracked = [path for path in git("ls-files", "-z").split("\0") if path]
    failures = [(path, reason) for path in tracked if (reason := artifact(path))]
    ignored = set(git("check-ignore", "--no-index", "--stdin", stdin="\n".join(IGNORED_EXAMPLES)).splitlines())
    failures += [(path, "not ignored by .gitignore") for path in IGNORED_EXAMPLES if path not in ignored]
    return report("artifacts", failures, f"{len(tracked)} tracked files; .gitignore ignores the artifacts")


def python_source_greps(text, filename):
    """(test id, line) of each Python test that matches the text of a code file it read."""
    tree = ast.parse(text, filename)
    found = []
    for cls in (node for node in tree.body if isinstance(node, ast.ClassDef)):
        methods = [node for node in cls.body if isinstance(node, ast.FunctionDef)]
        # Attributes that setUp or setUpClass fill from a code file.
        shared = set().union(*(source_names(node) for node in methods if node.name in {"setUp", "setUpClass"}))
        for method in methods:
            if not method.name.startswith("test"):
                continue
            names = shared | source_names(method)
            if any(isinstance(call.func, ast.Attribute) and call.func.attr in TEXT_ASSERTS
                   and any(uses(arg, names) for arg in call.args)
                   for call in ast.walk(method) if isinstance(call, ast.Call)):
                found.append((f"{Path(filename).stem}.{cls.name}.{method.name}", method.lineno))
    return found


def source_names(function):
    """The variable and attribute names that ``function`` assigns the text of a code file to."""
    names = set()
    for node in ast.walk(function):
        if isinstance(node, ast.Assign) and reads_source(node.value):
            for target in node.targets:
                if isinstance(target, ast.Name):
                    names.add(target.id)
                elif isinstance(target, ast.Attribute):
                    names.add(target.attr)
    return names


def reads_source(node):
    """Whether ``node`` reads a code file: a read_text(), read_bytes() or open() of a path whose
    string parts, joined by "/", name one."""
    for call in (child for child in ast.walk(node) if isinstance(child, ast.Call)):
        name = call.func.attr if isinstance(call.func, ast.Attribute) else getattr(call.func, "id", "")
        if name not in {"read_text", "read_bytes", "open"}:
            continue
        path = call.func.value if isinstance(call.func, ast.Attribute) and name != "open" else (call.args or [call])[0]
        strings = [child for child in ast.walk(path) if isinstance(child, ast.Constant) and isinstance(child.value, str)]
        parts = [child.value for child in sorted(strings, key=lambda child: (child.lineno, child.col_offset))]
        if code_path("/".join(parts)) or any(code_path(part) for part in parts):
            return True
    return False


def uses(node, names):
    return any(isinstance(child, ast.Name) and child.id in names
               or isinstance(child, ast.Attribute) and child.attr in names for child in ast.walk(node))


def js_source_greps(text, filename):
    """(test id, line) of each Node test that matches the text of a code file it read."""
    names = {match[1] for match in JS_ASSIGN.finditer(text) if js_reads_source(match[2])}
    tainted = re.compile(rf"\b(?:{'|'.join(map(re.escape, sorted(names)))})\b") if names else None
    starts = list(JS_TEST.finditer(text))
    found = []
    for index, start in enumerate(starts):
        body = text[start.start():starts[index + 1].start() if index + 1 < len(starts) else len(text)]
        for match in JS_TEXT_ASSERT.finditer(body):
            arguments = match[2]
            if match[1] == "ok" and ".includes(" not in arguments:
                continue
            if js_reads_source(arguments) or tainted and tainted.search(arguments):
                found.append((f"{Path(filename).name}: {start[2]}", text.count("\n", 0, start.start()) + 1))
                break
    return found


def js_reads_source(code):
    return any(code_path(match[2]) for match in JS_SOURCE.finditer(code)) and "read" in code


def code_path(path):
    return bool(SOURCE_PATH.search(path)) and not GENERATED.search(path)


def source_greps(paths, root=ROOT):
    found = []
    for path in paths:
        text = path.read_text(encoding="utf-8")
        relative = path.relative_to(root).as_posix()
        scan = python_source_greps if path.suffix == ".py" else js_source_greps
        found += [(test, f"{relative}:{line}") for test, line in scan(text, relative)]
    return found


def allowlisted(path):
    """The test ids in the allow-list with their reasons: one per line, `<test id>  # <reason>`."""
    lines = path.read_text(encoding="utf-8").splitlines() if path.exists() else []
    entries = [[part.strip() for part in line.split("#", 1)] + [""] for line in lines]
    return {entry[0]: entry[1] for entry in entries if entry[0]}


def check_source_greps(root=ROOT):
    tests = sorted([*root.glob("tests/test_*.py"), *root.glob("tests/*.test.mjs"), *root.glob("tests/*.test.cjs")])
    found = source_greps(tests, root)
    allowed = allowlisted(root / ALLOWLIST)
    failures = [(ALLOWLIST, f"{test} gives no reason") for test, reason in allowed.items() if not reason]
    failures += [(ALLOWLIST, f"{test} no longer matches; remove it")
                 for test in sorted(allowed.keys() - {test for test, _ in found})]
    new = [(where, test) for test, where in found if test not in allowed]
    for where, test in new:
        print(f"A,source-grep,PASS,report only: {where}: {test} asserts on the text of a code file; run the code instead")
    return report("source-grep", failures,
                  f"{len(tests)} test files; {len(found) - len(new)} allow-listed source-grep tests")


def tier(changed):
    """("fast" or "full", the paths that decide it)."""
    full = [path for path in changed if not (FAST_CONTENT.match(path) or FAST_COPY.match(path))]
    if full:
        return "full", full
    return "fast", sorted({f"visuals/{match[1]}/" for path in changed if (match := FAST_COPY.match(path))})


def check_tier(base):
    merge_base = git("merge-base", base, "HEAD").strip()
    changed = [path for path in git("diff", "-z", "--name-only", "--no-renames", merge_base).split("\0") if path]
    changed += [path for path in git("ls-files", "-z", "--others", "--exclude-standard").split("\0") if path]
    level, paths = tier(sorted(set(changed)))
    if level == "full":
        shown = ", ".join(paths[:5]) + (f" and {len(paths) - 5} more" if len(paths) > 5 else "")
        print(f"A,review-tier,PASS,full pipeline: {shown}")
    elif paths:
        print(f"A,review-tier,PASS,fast path if {', '.join(paths)} is an unchanged upstream copy;"
              " name that commit in the pull request")
    else:
        print(f"A,review-tier,PASS,fast path: {len(changed)} content paths")
    return True


def report(check, failures, passed):
    if failures:
        for subject, reason in failures:
            print(f"A,{check},FAIL,{subject}: {reason}")
    else:
        print(f"A,{check},PASS,{passed}")
    return not failures


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("checks", nargs="*", choices=["artifacts", "source-grep", "tier"],
                        help="the checks to run (default artifacts and source-grep, and tier with --base)")
    parser.add_argument("--base", help="the ref the review tier compares against")
    args = parser.parse_args()
    checks = args.checks or ["artifacts", "source-grep", *(["tier"] if args.base else [])]
    if "tier" in checks and not args.base:
        parser.error("tier needs --base")
    results = []
    for check in dict.fromkeys(checks):
        if check == "artifacts":
            results.append(check_artifacts())
        elif check == "source-grep":
            results.append(check_source_greps())
        else:
            results.append(check_tier(args.base))
    return 0 if all(results) else 1


if __name__ == "__main__":
    sys.exit(main())

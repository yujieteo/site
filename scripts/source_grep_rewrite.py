#!/usr/bin/env python3
"""Rewrite source-grep tests into tests that run the code, where the pattern is clear; list the rest.

scripts/repo_check.py source-grep finds a test that reads a code file and matches its text. This
script rewrites one clear pattern and lists every other case for a person:

  A Python test that reads scripts/<module>.py and asserts self.assertIn("NAME = <literal>", text),
  with NAME an upper-case constant and <literal> a Python literal, becomes
  self.assertEqual(<module>.NAME, <literal>): it imports the module and checks the value the code
  holds. The read of the file goes when nothing else in the test uses it. The test file must already
  put scripts/ on sys.path; the script adds `import <module>` when it is missing.

Node tests, and Python tests with any other text assertion, are listed with the reason. A test that
tests/source-grep-allowlist.txt keeps is listed with its allow-list reason. With --check it writes
nothing and lists the rewrites it would make. Run again, it changes nothing.

Usage: scripts/source_grep_rewrite.py [--check]
"""

import argparse
import ast
import re
import sys
from pathlib import Path

import repo_check

ROOT = Path(__file__).resolve().parent.parent
CONSTANT = re.compile(r"^([A-Z][A-Z0-9_]*)\s*=\s*(.+)$", re.DOTALL)
SCRIPT = re.compile(r"(?:^|/)scripts/(\w+)\.py$")


def read_module(node):
    """The scripts/ module name whose file node reads, or None."""
    for call in (child for child in ast.walk(node) if isinstance(child, ast.Call)):
        name = call.func.attr if isinstance(call.func, ast.Attribute) else getattr(call.func, "id", "")
        if name not in {"read_text", "read_bytes", "open"}:
            continue
        path = call.func.value if isinstance(call.func, ast.Attribute) and name != "open" else (call.args or [call])[0]
        strings = [child for child in ast.walk(path) if isinstance(child, ast.Constant) and isinstance(child.value, str)]
        parts = [child.value for child in sorted(strings, key=lambda child: (child.lineno, child.col_offset))]
        for candidate in ["/".join(parts), *parts]:
            if match := SCRIPT.search(candidate):
                return match[1]
    return None


def clear_rewrite(call, names):
    """(module-free replacement text template, constant name) for a clear assertion, else None."""
    if not (isinstance(call.func, ast.Attribute) and call.func.attr == "assertIn" and len(call.args) == 2):
        return None
    needle, haystack = call.args
    if not (isinstance(needle, ast.Constant) and isinstance(needle.value, str)):
        return None
    if not (isinstance(haystack, ast.Name) and haystack.id in names or isinstance(haystack, ast.Attribute) and haystack.attr in names):
        return None
    match = CONSTANT.match(needle.value.strip())
    if not match:
        return None
    try:
        ast.literal_eval(match[2])
    except (ValueError, SyntaxError):
        return None
    return match[1], match[2]


def plan_file(path, root=ROOT, skip=()):
    """(new text or None, rewrites, cases left) for one Python test file."""
    text = path.read_text(encoding="utf-8")
    relative = path.relative_to(root).as_posix()
    found = {test: line for test, line in repo_check.python_source_greps(text, relative)}
    if not found:
        return None, [], []
    tree = ast.parse(text)
    lines = text.splitlines(keepends=True)
    offsets = [0]
    for line in lines:
        offsets.append(offsets[-1] + len(line))
    position = lambda line, col: offsets[line - 1] + len(lines[line - 1].encode()[:col].decode())  # noqa: E731
    edits, rewrites, left, modules = [], [], [], set()
    for cls in (node for node in tree.body if isinstance(node, ast.ClassDef)):
        for method in (node for node in cls.body if isinstance(node, ast.FunctionDef)):
            test = f"{path.stem}.{cls.name}.{method.name}"
            if test not in found or test in skip:
                continue
            assigns = [node for node in ast.walk(method) if isinstance(node, ast.Assign) and repo_check.reads_source(node.value)]
            names = repo_check.source_names(method)
            module = next((read_module(node.value) for node in assigns if read_module(node.value)), None)
            texts = [call for call in ast.walk(method) if isinstance(call, ast.Call) and isinstance(call.func, ast.Attribute)
                     and call.func.attr in repo_check.TEXT_ASSERTS and any(repo_check.uses(arg, names) for arg in call.args)]
            planned = [clear_rewrite(call, names) for call in texts]
            if not assigns or module is None or None in planned:
                left.append(f"{relative}:{found[test]}: {test}: not the NAME = literal pattern on a scripts/ module it reads in the test")
                continue
            for call, (constant, literal) in zip(texts, planned):
                start = position(call.lineno, call.col_offset)
                end = position(call.end_lineno, call.end_col_offset)
                edits.append((start, end, f"self.assertEqual({module}.{constant}, {literal})"))
            used_elsewhere = [node for node in ast.walk(method) if isinstance(node, ast.Name) and node.id in names
                              and not any(node in ast.walk(call) for call in texts) and not any(node in ast.walk(a) for a in assigns)]
            if not used_elsewhere:
                for node in assigns:
                    edits.append((offsets[node.lineno - 1], offsets[node.end_lineno], ""))
            modules.add(module)
            rewrites.append(f"{relative}:{found[test]}: {test}: asserts {module}'s constants by importing it")
    if not edits:
        return None, rewrites, left
    imported = {alias.name for node in tree.body if isinstance(node, ast.Import) for alias in node.names}
    if "sys.path.insert" not in text or 'ROOT / "scripts"' not in text:
        left += [entry.replace(": asserts", ": cannot rewrite, the file does not put scripts/ on sys.path; it asserts") for entry in rewrites]
        return None, [], left
    missing = sorted(modules - imported)
    if missing:
        # After the sys.path line, so the import finds scripts/: below the imports already there.
        anchor = next(node for node in tree.body if "sys.path.insert" in ast.unparse(node))
        later = [node for node in tree.body if isinstance(node, (ast.Import, ast.ImportFrom)) and node.lineno > anchor.lineno]
        after = max(later, key=lambda node: node.end_lineno) if later else anchor
        lines_added = "".join(f"import {module}  # noqa: E402\n" for module in missing)
        edits.append((offsets[after.end_lineno], offsets[after.end_lineno], lines_added if later else "\n" + lines_added))
    for start, end, replacement in sorted(edits, reverse=True):
        text = text[:start] + replacement + text[end:]
    return text, rewrites, left


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("--check", action="store_true", help="write nothing; list the rewrites it would make")
    parser.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = parser.parse_args(argv)
    root = args.root
    allowed = repo_check.allowlisted(root / repo_check.ALLOWLIST)
    rewrites, left = [], []
    for path in sorted(root.glob("tests/test_*.py")):
        relative = path.relative_to(root).as_posix()
        kept = [test for test, _ in repo_check.python_source_greps(path.read_text(encoding="utf-8"), relative) if test in allowed]
        text, done, rest = plan_file(path, root, set(kept))
        rest += [f"{relative}: {test}: allow-listed: {allowed[test]}" for test in kept]
        if text is not None and not args.check:
            path.write_text(text, encoding="utf-8")
        rewrites += done
        left += rest
    for test, where in repo_check.source_greps(sorted([*root.glob("tests/*.test.mjs"), *root.glob("tests/*.test.cjs")]), root):
        reason = f"allow-listed: {allowed[test]}" if test in allowed else "a Node test; rewrite it by hand"
        left.append(f"{where}: {test}: {reason}")
    for entry in rewrites:
        print(f"{'would rewrite' if args.check else 'rewrote'} {entry}")
    for entry in left:
        print(f"not changed: {entry}")
    if not rewrites and not left:
        print("no source-grep tests; nothing to do")
    return 0


if __name__ == "__main__":
    sys.exit(main())

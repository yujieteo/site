#!/usr/bin/env python3
"""Add JSDoc types where `npm run typecheck` reports a gap that a fixed rule can fill; list the rest.

It reads tsc's diagnostics (it runs `node_modules/.bin/tsc -p tsconfig.json --noEmit --pretty false`,
or reads a saved copy with --from) and applies one rule:

  TS7006 (a parameter implicitly has an 'any' type) on the line that starts its function, for a
  parameter name that the same file's @param tags already give exactly one type: add `@param {T}
  name` with that type to the function's JSDoc, creating a one-line JSDoc above the function when
  it has none. The file's own convention decides the type, never a guess.

Every other diagnostic needs a person to choose the type, so the script lists it and changes
nothing. A parameter that already has an @param is not edited again but listed, since tsc still
reports it (for example an arrow function inside the line's expression); a second run changes nothing. With
--check it writes nothing and lists the edits it would make.

Usage: scripts/jsdoc_types.py [--from TSC_OUTPUT] [--check]
"""

import argparse
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIAGNOSTIC = re.compile(r"^(?P<path>[^\s(][^(]*)\((?P<line>\d+),(?P<col>\d+)\): error (?P<code>TS\d+): (?P<message>.*)$")
IMPLICIT_ANY = re.compile(r"^Parameter '(?P<name>[\w$]+)' implicitly has an 'any' type\.$")
# A line that starts a function: a declaration, an arrow function or a method.
FUNCTION_LINE = re.compile(r"\bfunction\b|=>|^\s*(?:static\s+|async\s+)*[\w$]+\s*\(")
# An @param tag with its type and name, as the file's own JSDoc writes them.
PARAM_TAG = re.compile(r"@param\s+\{(?P<type>[^{}]+)\}\s+\[?(?P<name>[\w$]+)")


def diagnostics(text):
    return [match.groupdict() for line in text.splitlines() if (match := DIAGNOSTIC.match(line.strip()))]


def documented_types(text):
    """{parameter name: its type} for each name that the file's @param tags give exactly one type."""
    types = defaultdict(set)
    for match in PARAM_TAG.finditer(text):
        types[match["name"]].add(match["type"].strip())
    return {name: next(iter(found)) for name, found in types.items() if len(found) == 1}


def jsdoc_above(lines, index):
    """(first line, last line) of the JSDoc block that ends right above lines[index], or None."""
    end = index - 1
    if end < 0 or not lines[end].rstrip().endswith("*/"):
        return None
    start = end
    while start >= 0 and "/**" not in lines[start]:
        if start < end and "*/" in lines[start]:
            return None
        start -= 1
    return (start, end) if start >= 0 else None


def add_params(lines, index, params):
    """Add @param tags for params, [(name, type)], to the JSDoc of the function on lines[index]; return those added."""
    block = jsdoc_above(lines, index)
    text = "\n".join(lines[block[0]:block[1] + 1]) if block else ""
    params = [(name, type_name) for name, type_name in params if not re.search(rf"@param\s+\{{[^}}]*\}}\s+\[?{re.escape(name)}\b", text)]
    if not params:
        return params
    tags = [f"@param {{{type_name}}} {name}" for name, type_name in params]
    indent = re.match(r"\s*", lines[index])[0]
    if not block:
        lines.insert(index, f"{indent}/** {' '.join(tags)} */")
    elif block[0] == block[1]:
        line = lines[block[0]]
        cut = line.rstrip().rindex("*/")
        lines[block[0]] = f"{line[:cut].rstrip()} {' '.join(tags)} */"
    else:
        star = re.match(r"\s*", lines[block[1]])[0]
        for offset, tag in enumerate(tags):
            lines.insert(block[1] + offset, f"{star}* {tag}")
    return params


def plan(text, root=ROOT):
    """(edited files {path: new text}, edits as strings, diagnostics left for a person)."""
    fixable = defaultdict(lambda: defaultdict(list))
    left = []
    for item in diagnostics(text):
        path = root / item["path"]
        named = IMPLICIT_ANY.match(item["message"])
        type_name = None
        if item["code"] == "TS7006" and named and path.is_file():
            text_of_file = path.read_text(encoding="utf-8")
            if FUNCTION_LINE.search(text_of_file.splitlines()[int(item["line"]) - 1]):
                type_name = documented_types(text_of_file).get(named["name"])
        label = f"{item['path']}({item['line']},{item['col']}): {item['code']} {item['message']}"
        if type_name:
            fixable[path][int(item["line"])].append((named["name"], type_name, label))
        else:
            left.append(label)
    files, edits = {}, []
    for path, by_line in fixable.items():
        original = path.read_text(encoding="utf-8")
        lines = original.splitlines()
        for line in sorted(by_line, reverse=True):
            added = add_params(lines, line - 1, [(name, type_name) for name, type_name, _ in by_line[line]])
            if added:
                names = ", ".join(f"{name}: {type_name}" for name, type_name in added)
                edits.append(f"{path.relative_to(root)}:{line}: @param {names}")
            left += [label for name, _, label in by_line[line] if name not in dict(added)]
        updated = "\n".join(lines) + ("\n" if original.endswith("\n") else "")
        if updated != original:
            files[path] = updated
    return files, sorted(edits), left


def run_tsc(root):
    tsc = root / "node_modules" / ".bin" / "tsc"
    if not tsc.exists():
        raise SystemExit("[FAIL] node_modules/.bin/tsc is missing; run npm ci first")
    result = subprocess.run([str(tsc), "-p", "tsconfig.json", "--noEmit", "--pretty", "false"],
                            cwd=root, capture_output=True, text=True)
    return result.stdout


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.split("\n", 1)[0])
    parser.add_argument("--from", dest="source", type=Path, help="read saved tsc output instead of running tsc")
    parser.add_argument("--check", action="store_true", help="write nothing; list the edits it would make")
    parser.add_argument("--root", type=Path, default=ROOT, help=argparse.SUPPRESS)
    args = parser.parse_args(argv)
    text = args.source.read_text(encoding="utf-8") if args.source else run_tsc(args.root)
    files, edits, left = plan(text, args.root)
    for path, updated in files.items():
        if not args.check:
            path.write_text(updated, encoding="utf-8")
    for edit in edits:
        print(f"{'would add' if args.check else 'added'} {edit}")
    for item in left:
        print(f"not changed, choose the type by hand: {item}")
    if not edits and not left:
        print("tsc reports no type gaps; nothing to do")
    return 0


if __name__ == "__main__":
    sys.exit(main())

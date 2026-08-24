#!/usr/bin/env python3
"""
Parse raw notes files (notes2.txt / problems.txt style) into structured
YAML exercise-bank records under data/exercises/.

Input shape (repeated blocks):

    https://example.com/foo.pdf, some title, optional trailing note
        - Some question? (Hint: some hint text)
        - (Page 4) Another question. (Hint: another hint)
        - (Slide 12) Yet another question?

Each top-level non-indented line starting with "http" begins a new
resource block. Lines starting with "\t-" or "    -" (after stripping
leading whitespace, a literal "-") within that block are exercises,
until the next resource line or blank-line-then-URL.
"""

import os
import re
import sys
import yaml
import argparse
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_OUT = os.path.join(ROOT, "data", "exercises")

URL_LINE_RE = re.compile(r"^(https?://\S+)\s*,\s*(.*)$")
BULLET_RE = re.compile(r"^\s*-\s*(.*)$")

# Matches a leading locator marker like "(Page 4)" or "(Slide 12)" or
# "(Page 4, Exercise 1.2.3.)" -- we only pull out the first Page/Slide token.
LOCATOR_RE = re.compile(
    r"^\(\s*(Page|Slide)\s*([0-9]+[A-Za-z]?(?:\s*/\s*[0-9]+)?)\s*(?:,[^)]*)?\)\s*",
    re.IGNORECASE,
)

# Matches a trailing/inline hint clause: "(Hint: ...)" -- greedy to the
# matching close paren, allowing nested parens up to depth 2.
HINT_RE = re.compile(r"\(\s*Hint\s*:\s*(.*)\)\s*$", re.IGNORECASE | re.DOTALL)


def slugify(url):
    parsed = urlparse(url)
    path = (parsed.netloc + parsed.path).strip("/")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", path).strip("-").lower()
    return slug[:80] or "resource"


def extract_locator(text):
    """Pull a leading (Page N) / (Slide N) marker off the front of text."""
    m = LOCATOR_RE.match(text)
    if not m:
        return None, text
    kind = m.group(1).lower()
    value = m.group(2).strip()
    remainder = text[m.end():].strip()
    number = None
    digits = re.match(r"^[0-9]+", value)
    if digits:
        number = int(digits.group(0))
    return {"kind": kind, "value": value, "number": number}, remainder


def extract_hint(text):
    """Pull a trailing (Hint: ...) clause off the end of text.

    Handles one level of nested parens inside the hint by balancing.
    """
    text = text.rstrip()
    if not text.endswith(")"):
        return None, text

    # Find the matching "(Hint:" by scanning from the back with paren
    # depth tracking, since hints may themselves contain parens.
    lower = text.lower()
    search_from = 0
    best_start = None
    while True:
        idx = lower.find("(hint", search_from)
        if idx == -1:
            break
        # Check this "(hint" has balanced parens through end of string
        depth = 0
        ok = False
        for j in range(idx, len(text)):
            if text[j] == "(":
                depth += 1
            elif text[j] == ")":
                depth -= 1
                if depth == 0 and j == len(text) - 1:
                    ok = True
                    break
                if depth == 0:
                    break
        if ok:
            best_start = idx
        search_from = idx + 1

    if best_start is None:
        return None, text

    hint_clause = text[best_start:]
    remainder = text[:best_start].rstrip()
    m = re.match(r"\(\s*Hint\s*:\s*(.*)\)\s*$", hint_clause, re.IGNORECASE | re.DOTALL)
    if not m:
        return None, text
    hint = m.group(1).strip()
    return hint, remainder


def parse_exercise_line(raw_text):
    text = raw_text.strip()
    locator, text = extract_locator(text)
    hint, text = extract_hint(text)
    text = text.strip().rstrip(".")
    if text and not text.endswith(("?", ".", ")")):
        pass  # leave as-is; punctuation is inconsistent in source notes
    return text, hint, locator


def parse_blocks(lines):
    """Yield (url, title, note, [raw exercise lines]) blocks."""
    block = None
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
        m = URL_LINE_RE.match(stripped)
        if m:
            if block is not None:
                yield block
            url, rest = m.group(1), m.group(2)
            parts = [p.strip() for p in rest.split(",")]
            title = parts[0] if parts else ""
            note = ", ".join(parts[1:]) if len(parts) > 1 else ""
            block = {"url": url, "title": title, "note": note, "raw": []}
            continue
        bm = BULLET_RE.match(line)
        if bm and block is not None:
            block["raw"].append(bm.group(1))
            continue
        # Continuation of a previous bullet (wrapped line) or resource
        # note with no bullets yet -- append to last bullet if any.
        if block is not None and block["raw"]:
            block["raw"][-1] += " " + stripped
        elif block is not None:
            block["note"] = (block["note"] + " " + stripped).strip()
    if block is not None:
        yield block


def build_record(block, source_file):
    url, title, note = block["url"], block["title"], block["note"]
    slug = slugify(url)

    exercises = []
    locator_kinds_seen = set()
    seen_locator_counts = {}

    for raw in block["raw"]:
        text, hint, locator = parse_exercise_line(raw)
        if not text:
            continue

        sub_index = None
        if locator:
            locator_kinds_seen.add(locator["kind"])
            key = (locator["kind"], locator["value"])
            sub_index = seen_locator_counts.get(key, 0)
            seen_locator_counts[key] = sub_index + 1
        else:
            locator_kinds_seen.add("none")

        ex_id = f"{slug}#{len(exercises):03d}"
        search_text = " ".join(filter(None, [text, hint or ""])).lower()

        exercises.append({
            "id": ex_id,
            "text": text,
            "hint": hint,
            "locator": locator,
            "sub_index": sub_index,
            "search_text": search_text,
        })

    if not exercises:
        return None

    if locator_kinds_seen <= {"none"}:
        locator_kind = "none"
    elif len(locator_kinds_seen - {"none"}) == 1:
        locator_kind = next(iter(locator_kinds_seen - {"none"}))
    else:
        locator_kind = "mixed"

    return {
        "url": url,
        "title": title or url,
        "note": note or None,
        "tags": [],
        "source_file": source_file,
        "locator_kind": locator_kind,
        "exercises": exercises,
    }


def dump_record(record, out_dir):
    slug = slugify(record["url"])
    path = os.path.join(out_dir, f"{slug}.yaml")
    # Clean Nones for tidier YAML (schema allows null explicitly though)
    with open(path, "w") as f:
        yaml.safe_dump(
            record, f, sort_keys=False, allow_unicode=True,
            default_flow_style=False, width=100,
        )
    return path


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("inputs", nargs="+", help="Raw notes .txt files to parse")
    ap.add_argument("--out", default=DEFAULT_OUT, help="Output directory for YAML records")
    args = ap.parse_args()

    os.makedirs(args.out, exist_ok=True)

    total_resources = 0
    total_exercises = 0

    for path in args.inputs:
        source_file = os.path.basename(path)
        with open(path, encoding="utf-8") as f:
            lines = f.readlines()

        for block in parse_blocks(lines):
            record = build_record(block, source_file)
            if record is None:
                continue
            out_path = dump_record(record, args.out)
            total_resources += 1
            total_exercises += len(record["exercises"])
            print(f"wrote {out_path} ({len(record['exercises'])} exercises)")

    print(f"\nDone: {total_resources} resources, {total_exercises} exercises.")


if __name__ == "__main__":
    main()
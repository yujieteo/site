#!/usr/bin/env python3
"""Validate YAML data files against matching JSON Schemas."""

import json
import re
import sys
from pathlib import Path

import jsonschema
import yaml

from calibration import CalibrationError, load_raw
from notes import NotesError, load_notes, split_frontmatter


ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
SCHEMA = ROOT / "schema"
# New #todo notes must state a date and a done-condition; sections dated
# before this rule are exempt, so existing notes are never rechecked.
TODO_RULE_SINCE = "2026-10-03"
MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December"
TODO_DATE = re.compile(rf"\b\d{{4}}-\d{{2}}-\d{{2}}\b|\b\d{{1,2}} (?:{MONTHS}) \d{{4}}\b")
TODO_DONE = re.compile(r"\bdone when\b", re.IGNORECASE)
NOTE_HEADING = re.compile(r"^## (\d{4}-\d{2}-\d{2})\s*$", re.MULTILINE)


def load_document(path):
    text = path.read_text(encoding="utf-8")
    if path.suffix == ".md":
        try:
            text, _ = split_frontmatter(text)
        except ValueError as exc:
            return None, str(exc)
    try:
        document = yaml.safe_load(text)
    except yaml.YAMLError as exc:
        return None, f"could not parse YAML ({exc})"
    return json.loads(json.dumps(document, default=str)), None


def undated_todos(document, since=TODO_RULE_SINCE):
    """Return diagnostics for #todo notes dated on or after ``since`` that lack
    a date or a "done when" condition. Entries are newest-first, so the scan
    stops at the first older section and its cost stays flat as notes grow."""
    diagnostics = []
    for entry in document["entries"]:
        if entry["date"] < since:
            break
        for index, note in enumerate(entry["notes"], 1):
            if "todo" not in note["tags"]:
                continue
            missing = [label for label, pattern in (("a date", TODO_DATE), ('a "done when" condition', TODO_DONE))
                       if not pattern.search(note["content"])]
            if missing:
                diagnostics.append(f"data/notes.md [{entry['date']} note {index}]: #todo needs {' and '.join(missing)}")
    return diagnostics


def misordered_headings(text):
    """Return diagnostics for each data/notes.md date heading newer than the one above it: the
    headings run newest first, so a new date goes in its place, not at the end."""
    dates = NOTE_HEADING.findall(text)
    return [f"data/notes.md [{newer}]: headings run newest first; move this heading above [{older}]"
            for older, newer in zip(dates, dates[1:]) if newer > older]


def validate_file(path, validator):
    label = path.relative_to(DATA)
    document, load_error = load_document(path)
    if load_error:
        print(f"[FAIL] {label}: {load_error}")
        return 1

    errors = 0
    records = document if isinstance(document, list) else ([] if document is None else [document])
    for index, record in enumerate(records):
        for error in sorted(validator.iter_errors(record), key=lambda item: list(item.path)):
            location = ".".join(str(part) for part in error.path)
            suffix = f" at {location}" if location else ""
            print(f"[FAIL] {label} record {index}{suffix}: {error.message}")
            errors += 1
    return errors


def validate_all():
    errors = 0
    try:
        document, _ = load_notes(DATA / "notes.md", DATA / "note-tags.json")
    except NotesError as exc:
        for diagnostic in exc.diagnostics:
            print(f"[FAIL] {diagnostic}")
        errors += len(exc.diagnostics)
    else:
        diagnostics = undated_todos(document) + misordered_headings((DATA / "notes.md").read_text(encoding="utf-8"))
        for diagnostic in diagnostics:
            print(f"[FAIL] {diagnostic}")
            errors += 1
    try:
        load_raw()
    except (CalibrationError, OSError) as exc:
        for line in str(exc).splitlines():
            print(f"[FAIL] {line}")
            errors += 1
    for schema_path in sorted(SCHEMA.glob("*.schema.json")):
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
        try:
            jsonschema.Draft7Validator.check_schema(schema)
        except jsonschema.SchemaError as exc:
            print(f"[FAIL] {schema_path.name}: invalid schema ({exc.message})")
            errors += 1
            continue
        validator = jsonschema.Draft7Validator(schema)

        data_name = schema_path.name.removesuffix(".schema.json")
        data_dir = DATA / ("visuals" if data_name == "visualization" else data_name)
        if not data_dir.is_dir():
            print(f"[FAIL] {schema_path.name}: missing data directory {data_dir.relative_to(ROOT)}")
            errors += 1
            continue
        patterns = ("*.md",) if data_dir.name == "blog" else ("*.yaml", "*.yml")
        paths = sorted(path for pattern in patterns for path in data_dir.glob(pattern))
        for path in paths:
            errors += validate_file(path, validator)
    return errors


def main():
    errors = validate_all()
    if errors:
        print(f"\n{errors} validation error(s).")
        return 1
    print("All data files valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

#!/usr/bin/env python3
"""Validate YAML data files against matching JSON Schemas."""

import json
import sys
from pathlib import Path

import jsonschema
import yaml


ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
SCHEMA = ROOT / "schema"


def load_document(path):
    try:
        text = path.read_text(encoding="utf-8")
        if path.suffix == ".md":
            if not text.startswith("---"):
                return None, "missing YAML frontmatter"
            parts = text.split("---", 2)
            if len(parts) != 3:
                return None, "unterminated YAML frontmatter"
            text = parts[1]
        return yaml.safe_load(text), None
    except yaml.YAMLError as exc:
        return None, f"could not parse YAML ({exc})"


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
    for schema_path in sorted(SCHEMA.glob("*.schema.json")):
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
        try:
            jsonschema.Draft7Validator.check_schema(schema)
        except jsonschema.SchemaError as exc:
            print(f"[FAIL] {schema_path.name}: invalid schema ({exc.message})")
            errors += 1
            continue
        validator = jsonschema.Draft7Validator(schema)

        data_dir = DATA / schema_path.name.removesuffix(".schema.json")
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

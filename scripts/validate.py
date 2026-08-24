#!/usr/bin/env python3
"""Validate all YAML data files against their JSON Schemas, plus a few
extra structural invariants for the exercises data set."""

import os
import sys
import json
import yaml
import jsonschema

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
SCHEMA = os.path.join(ROOT, "schema")


def validate_schema():
    errors = 0
    for subdir in sorted(os.listdir(DATA)):
        schema_path = os.path.join(SCHEMA, f"{subdir}.schema.json")
        if not os.path.exists(schema_path):
            continue
        with open(schema_path) as f:
            schema = json.load(f)

        dirpath = os.path.join(DATA, subdir)
        for fname in sorted(os.listdir(dirpath)):
            if not fname.endswith((".yaml", ".yml")):
                continue
            with open(os.path.join(dirpath, fname)) as f:
                data = yaml.safe_load(f)
            records = data if isinstance(data, list) else [data]
            for i, record in enumerate(records):
                try:
                    jsonschema.validate(record, schema)
                except jsonschema.ValidationError as e:
                    print(f"[FAIL] {subdir}/{fname} record {i}: {e.message}")
                    errors += 1
    return errors


def validate_exercises_invariants():
    """Extra checks specific to data/exercises: unique ids within a
    resource, non-empty text, and locator_kind consistency."""
    errors = 0
    dirpath = os.path.join(DATA, "exercises")
    if not os.path.isdir(dirpath):
        return 0

    for fname in sorted(os.listdir(dirpath)):
        if not fname.endswith((".yaml", ".yml")):
            continue
        path = os.path.join(dirpath, fname)
        with open(path) as f:
            record = yaml.safe_load(f)

        seen_ids = set()
        kinds = set()
        for ex in record.get("exercises", []):
            if not ex.get("text", "").strip():
                print(f"[FAIL] exercises/{fname}: empty exercise text (id={ex.get('id')})")
                errors += 1
            if ex["id"] in seen_ids:
                print(f"[FAIL] exercises/{fname}: duplicate exercise id {ex['id']}")
                errors += 1
            seen_ids.add(ex["id"])
            loc = ex.get("locator")
            kinds.add(loc["kind"] if loc else "none")

        declared = record.get("locator_kind")
        actual = "none" if kinds <= {"none"} else (
            next(iter(kinds - {"none"})) if len(kinds - {"none"}) == 1 else "mixed"
        )
        if declared != actual:
            print(f"[FAIL] exercises/{fname}: locator_kind={declared!r} but derived={actual!r}")
            errors += 1

    return errors


def main():
    errors = validate_schema()
    errors += validate_exercises_invariants()

    if errors:
        print(f"\n{errors} validation error(s).")
        sys.exit(1)
    print("All data files valid.")


if __name__ == "__main__":
    main()
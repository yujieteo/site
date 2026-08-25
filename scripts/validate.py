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


def load_yaml_safe(path, label):
    """Load a YAML file, reporting a parse error as a normal [FAIL]
    line instead of letting it crash the whole validation run. Returns
    (data, error_count) -- data is None if loading failed."""
    try:
        with open(path) as f:
            return yaml.safe_load(f), 0
    except yaml.YAMLError as e:
        print(f"[FAIL] {label}: could not parse YAML ({e})")
        return None, 1


def as_records(data):
    """Normalize a loaded YAML document to a list of records, exactly
    like the site generator's load_all() does. A file's top level may
    be either a single mapping or a list of mappings -- both
    validate_schema() and validate_exercises_invariants() need to
    agree on this, otherwise a perfectly valid multi-record file
    crashes one of them."""
    if data is None:
        return []
    return data if isinstance(data, list) else [data]


def validate_schema():
    errors = 0
    for subdir in sorted(os.listdir(DATA)):
        dirpath = os.path.join(DATA, subdir)
        if not os.path.isdir(dirpath):
            # Skip stray files (.DS_Store, README, etc.) living directly
            # under data/ instead of crashing on os.listdir() below.
            continue

        schema_path = os.path.join(SCHEMA, f"{subdir}.schema.json")
        if not os.path.exists(schema_path):
            continue
        with open(schema_path) as f:
            schema = json.load(f)

        for fname in sorted(os.listdir(dirpath)):
            if not fname.endswith((".yaml", ".yml")):
                continue
            label = f"{subdir}/{fname}"
            data, load_errors = load_yaml_safe(os.path.join(dirpath, fname), label)
            errors += load_errors
            if load_errors:
                continue

            records = as_records(data)
            for i, record in enumerate(records):
                try:
                    jsonschema.validate(record, schema)
                except jsonschema.ValidationError as e:
                    print(f"[FAIL] {label} record {i}: {e.message}")
                    errors += 1
                except jsonschema.SchemaError as e:
                    print(f"[FAIL] {label} record {i}: invalid schema {schema_path}: {e.message}")
                    errors += 1
    return errors


def validate_one_exercise_resource(record, label, errors_out):
    """Run the id/text/locator_kind checks for a single resource
    record. Pulled out of validate_exercises_invariants() so it can be
    called once per record whether the file's top level was a single
    dict or a list of dicts -- this is also what fixes the
    'seen_ids' / 'kinds' scoping to be per-resource, not per-file."""
    if not isinstance(record, dict):
        print(f"[FAIL] {label}: expected a resource mapping, got {type(record).__name__}")
        errors_out[0] += 1
        return

    seen_ids = set()
    kinds = set()
    exercises = record.get("exercises", [])
    if not isinstance(exercises, list):
        print(f"[FAIL] {label}: 'exercises' is not a list")
        errors_out[0] += 1
        return

    for ex in exercises:
        if not isinstance(ex, dict):
            print(f"[FAIL] {label}: exercise entry is not a mapping ({ex!r})")
            errors_out[0] += 1
            continue

        text = ex.get("text")
        if not isinstance(text, str) or not text.strip():
            print(f"[FAIL] {label}: empty exercise text (id={ex.get('id')!r})")
            errors_out[0] += 1

        ex_id = ex.get("id")
        if ex_id is None:
            print(f"[FAIL] {label}: exercise missing 'id'")
            errors_out[0] += 1
        elif ex_id in seen_ids:
            print(f"[FAIL] {label}: duplicate exercise id {ex_id!r}")
            errors_out[0] += 1
        else:
            seen_ids.add(ex_id)

        loc = ex.get("locator")
        if loc is None:
            kinds.add("none")
        elif isinstance(loc, dict) and "kind" in loc:
            kinds.add(loc["kind"])
        else:
            print(f"[FAIL] {label}: exercise (id={ex_id!r}) has a malformed 'locator'")
            errors_out[0] += 1
            kinds.add("none")

    if not exercises:
        # Nothing to derive a locator_kind from -- checking declared
        # vs. derived here would just be a false positive.
        return

    declared = record.get("locator_kind")
    actual = "none" if kinds <= {"none"} else (
        next(iter(kinds - {"none"})) if len(kinds - {"none"}) == 1 else "mixed"
    )
    if declared != actual:
        print(f"[FAIL] {label}: locator_kind={declared!r} but derived={actual!r}")
        errors_out[0] += 1


def validate_exercises_invariants():
    """Extra checks specific to data/exercises: unique ids within a
    resource, non-empty text, and locator_kind consistency."""
    errors = [0]  # boxed so the helper above can mutate it in place
    dirpath = os.path.join(DATA, "exercises")
    if not os.path.isdir(dirpath):
        return 0

    for fname in sorted(os.listdir(dirpath)):
        if not fname.endswith((".yaml", ".yml")):
            continue
        path = os.path.join(dirpath, fname)
        label_base = f"exercises/{fname}"
        data, load_errors = load_yaml_safe(path, label_base)
        errors[0] += load_errors
        if load_errors:
            continue

        records = as_records(data)
        if len(records) == 1:
            validate_one_exercise_resource(records[0], label_base, errors)
        else:
            for i, record in enumerate(records):
                validate_one_exercise_resource(record, f"{label_base} record {i}", errors)

    return errors[0]


def main():
    errors = validate_schema()
    errors += validate_exercises_invariants()

    if errors:
        print(f"\n{errors} validation error(s).")
        sys.exit(1)
    print("All data files valid.")


if __name__ == "__main__":
    main()
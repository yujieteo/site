#!/usr/bin/env python3

"""
Remove exercise entries that do not contain a valid "(Hint: ...)" clause.

The input .txt file is modified IN PLACE.

Example input:

    https://example.com/foo.pdf, Some title

        - What is 2 + 2? (Hint: Think about addition.)
        - What is 3 + 3?
        - (Page 4) Solve x^2 = 4. (Hint: Consider both roots.)
        - Explain this theorem.

becomes:

    https://example.com/foo.pdf, Some title

        - What is 2 + 2? (Hint: Think about addition.)
        - (Page 4) Solve x^2 = 4. (Hint: Consider both roots.)

Usage:

    python remove_no_hint.py exercise.txt --backup

Multiple files:

    python remove_no_hint.py notes2.txt problems.txt

Optional backup:

    python remove_no_hint.py notes2.txt --backup
"""

import argparse
import os
import re
import shutil


# ---------------------------------------------------------------------------
# Patterns
# ---------------------------------------------------------------------------

# Resource lines.
#
# Supports both:
#
#   https://example.com/foo.pdf, Title
#
# and:
#
#   [https://example.com/foo.pdf](https://example.com/foo.pdf), Title
#
URL_LINE_RE = re.compile(
    r"^(?:\[)?https?://\S+"
)


# Exercise bullet.
#
# Matches:
#
#   - Question
#       - Question
#   \- Question
#
BULLET_RE = re.compile(
    r"^(\s*)-+\s+(.*)$"
)


# ---------------------------------------------------------------------------
# Hint detection
# ---------------------------------------------------------------------------

def has_hint(text):
    """
    Return True if text contains a valid "(Hint: ...)" clause.

    Matching is case-insensitive.

    Examples:

        (Hint: Use induction.)       -> True
        (hint: Use induction.)       -> True
        (HINT: Use induction.)       -> True
        (Hint: )                     -> False
        no hint                      -> False

    Parentheses inside the hint are supported.
    """

    # Find the beginning of "(Hint:"
    match = re.search(
        r"\(\s*hint\s*:",
        text,
        re.IGNORECASE,
    )

    if match is None:
        return False

    start = match.start()

    # Balance parentheses from the opening '(' of "(Hint:".
    depth = 0

    for i in range(start, len(text)):

        char = text[i]

        if char == "(":
            depth += 1

        elif char == ")":
            depth -= 1

            if depth == 0:

                # Extract everything between "(Hint:" and
                # the matching closing parenthesis.
                hint_clause = text[start:i + 1]

                content_match = re.match(
                    r"^\(\s*hint\s*:\s*(.*?)\s*\)$",
                    hint_clause,
                    re.IGNORECASE | re.DOTALL,
                )

                if content_match is None:
                    return False

                hint_content = content_match.group(1).strip()

                return bool(hint_content)

    # No matching closing parenthesis.
    return False


# ---------------------------------------------------------------------------
# Line classification
# ---------------------------------------------------------------------------

def is_resource_line(line):
    """Return True if this line starts a new URL/resource block."""

    return bool(URL_LINE_RE.match(line.strip()))


def is_bullet_line(line):
    """Return True if this line begins a new exercise bullet."""

    return bool(BULLET_RE.match(line))


# ---------------------------------------------------------------------------
# Main filtering logic
# ---------------------------------------------------------------------------

def filter_file(path):
    """
    Remove no-hint exercises from a file.

    The file is modified in place.

    Returns:
        (kept, removed)
    """

    with open(
        path,
        "r",
        encoding="utf-8",
        newline="",
    ) as f:
        lines = f.readlines()

    output = []

    # Lines belonging to the current exercise.
    current_exercise = None

    kept = 0
    removed = 0

    def flush_exercise():
        """
        Decide whether the current exercise should be kept.
        """

        nonlocal current_exercise
        nonlocal kept
        nonlocal removed

        if current_exercise is None:
            return

        text = "".join(
            current_exercise["lines"]
        )

        if has_hint(text):
            output.extend(
                current_exercise["lines"]
            )
            kept += 1

        else:
            removed += 1

        current_exercise = None

    for line in lines:

        # ---------------------------------------------------------------
        # New resource block
        # ---------------------------------------------------------------

        if is_resource_line(line):

            # Finish previous exercise first.
            flush_exercise()

            # Keep resource line.
            output.append(line)

            continue

        # ---------------------------------------------------------------
        # New exercise
        # ---------------------------------------------------------------

        if is_bullet_line(line):

            # Finish previous exercise.
            flush_exercise()

            # Start new exercise.
            current_exercise = {
                "lines": [line],
            }

            continue

        # ---------------------------------------------------------------
        # Continuation line
        # ---------------------------------------------------------------

        if current_exercise is not None:

            current_exercise["lines"].append(line)

            continue

        # ---------------------------------------------------------------
        # Anything outside an exercise is preserved.
        # ---------------------------------------------------------------

        output.append(line)

    # Flush final exercise.
    flush_exercise()

    # Write the modified file back.
    with open(
        path,
        "w",
        encoding="utf-8",
        newline="",
    ) as f:
        f.writelines(output)

    return kept, removed


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():

    parser = argparse.ArgumentParser(
        description=(
            "Remove exercise entries without "
            "(Hint: ...) from .txt files in place."
        )
    )

    parser.add_argument(
        "inputs",
        nargs="+",
        help="Input .txt files to modify in place.",
    )

    parser.add_argument(
        "--backup",
        action="store_true",
        help="Create a .bak backup before modifying each file.",
    )

    args = parser.parse_args()

    total_kept = 0
    total_removed = 0

    for path in args.inputs:

        if not os.path.isfile(path):
            print(
                f"ERROR: File not found: {path}"
            )
            continue

        # ---------------------------------------------------------------
        # Optional backup
        # ---------------------------------------------------------------

        if args.backup:

            backup_path = path + ".bak"

            shutil.copy2(
                path,
                backup_path,
            )

            print(
                f"Backup: {backup_path}"
            )

        # ---------------------------------------------------------------
        # Filter file
        # ---------------------------------------------------------------

        kept, removed = filter_file(path)

        total_kept += kept
        total_removed += removed

        print(
            f"{path}: "
            f"kept {kept}, "
            f"removed {removed}"
        )

    print()
    print(
        f"Done: kept {total_kept} exercises, "
        f"removed {total_removed} exercises."
    )


if __name__ == "__main__":
    main()

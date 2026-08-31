#!/usr/bin/env python3

"""
Parse exercises.txt into an Anki .apkg exercise bank.

Expected input format:

    [https://example.com/foo.pdf](https://example.com/foo.pdf), Some title, optional note

        - Some question? (Hint: some hint text)

        - (Page 4) Another question. (Hint: another hint)

        - (Slide 12) Yet another question?

Each top-level non-indented line starting with "http", or a Markdown
link containing an http(s) URL, begins a new resource block.

Exercise lines begin with "-" after stripping leading whitespace.

Continuation lines are appended to the preceding exercise.

The resulting Anki deck contains one card per exercise.

Card front:
    Exercise question

Card back:
    Hint, if present
    Source resource
    Page/Slide locator

LaTeX:
    $x^2$
    $$x^2$$
    \\(x^2\\)
    \\[x^2\\]

are converted/preserved for Anki's MathJax rendering.

Tags:
    exercise-bank
    source_<input-file>
    url_<url-derived-slug>
    domain_<domain>
    page / slide
    page_<number> / slide_<number>

Usage:

    python exercises_to_anki.py

or:

    python exercises_to_anki.py exercises.txt

or:

    python exercises_to_anki.py exercises.txt \
        --out exercises.apkg \
        --deck "Exercise Bank"
"""


import os
import re
import hashlib
import argparse
from urllib.parse import urlparse

import genanki


# ============================================================================
# Configuration
# ============================================================================

DEFAULT_INPUT = "exercises.txt"
DEFAULT_OUT = "exercises.apkg"
DEFAULT_DECK = "Exercise Bank"


# ============================================================================
# Regular expressions
# ============================================================================

# Markdown resource line:
#
#   [https://example.com/foo.pdf](https://example.com/foo.pdf), Some title
#
# Plain resource line:
#
#   https://example.com/foo.pdf, Some title
#
# We deliberately keep the title/note parsing separate from URL parsing.
MARKDOWN_URL_LINE_RE = re.compile(
    r"^\s*"
    r"\["
    r"(https?://[^\]\s]+)"
    r"\]"
    r"\("
    r"(https?://[^)\s]+)"
    r"\)"
    r"\s*,\s*"
    r"(.*)"
    r"$",
    re.IGNORECASE,
)

PLAIN_URL_LINE_RE = re.compile(
    r"^\s*"
    r"(https?://\S+?)"
    r"\s*,\s*"
    r"(.*)"
    r"$",
    re.IGNORECASE,
)

# Exercise bullet.
#
# Matches:
#
#   - Question
#       - Question
#   * Question
#
BULLET_RE = re.compile(
    r"^\s*-\s*(.*)$"
)

# Leading locator:
#
#   (Page 4)
#   (Page 4A)
#   (Page 4 / 5)
#   (Slide 12)
#   (Page 4, Exercise 1.2.3.)
#
# We retain only the first Page/Slide token, as in the original script.
LOCATOR_RE = re.compile(
    r"^\s*"
    r"\(\s*"
    r"(Page|Slide)"
    r"\s*"
    r"([0-9]+[A-Za-z]?(?:\s*/\s*[0-9]+)?)"
    r"\s*"
    r"(?:,[^)]*)?"
    r"\)"
    r"\s*",
    re.IGNORECASE,
)


# ============================================================================
# IDs
# ============================================================================

def stable_id(text, namespace):
    """
    Generate a deterministic positive integer suitable for genanki.

    Deterministic IDs are useful because rebuilding the deck from the same
    source produces the same note identity.
    """

    digest = hashlib.sha256(
        f"{namespace}:{text}".encode("utf-8")
    ).hexdigest()

    # Keep safely below signed 64-bit integer limit.
    return int(digest[:15], 16)


# ============================================================================
# Slug/tag helpers
# ============================================================================

def slugify(text, max_length=80):
    """
    Convert arbitrary text into a stable ASCII-ish slug.

    Example:

        https://example.com/Real Analysis/notes.pdf

    becomes:

        example-com-real-analysis-notes-pdf
    """

    text = text.strip()

    slug = re.sub(
        r"[^a-zA-Z0-9]+",
        "-",
        text,
    )

    slug = slug.strip("-").lower()

    if not slug:
        slug = "resource"

    return slug[:max_length]


def url_tag(url):
    """
    Make the principal Anki tag for a resource URL.

    Example:

        https://example.com/lectures/analysis.pdf

    becomes:

        url_example-com-lectures-analysis-pdf
    """

    return "url_" + slugify(url, max_length=100)


def domain_tag(url):
    """
    Extract the domain and turn it into an Anki tag.
    """

    parsed = urlparse(url)

    domain = parsed.netloc.lower()

    if not domain:
        return None

    return "domain_" + slugify(domain, max_length=60)


def source_tag(source_file):
    """
    Turn the input filename into an Anki tag.
    """

    name = os.path.splitext(
        os.path.basename(source_file)
    )[0]

    return "source_" + slugify(name, max_length=60)


def locator_tags(locator):
    """
    Generate tags for Page/Slide locators.

    Examples:

        Page 42
            page
            page_42

        Slide 12
            slide
            slide_12
    """

    if not locator:
        return []

    kind = locator["kind"].lower()
    value = locator["value"]

    tags = [kind]

    # For "4 / 5", make a safe tag.
    value_slug = slugify(value, max_length=30)

    if value_slug:
        tags.append(f"{kind}_{value_slug}")

    return tags


# ============================================================================
# Locator parsing
# ============================================================================

def extract_locator(text):
    """
    Pull a leading Page/Slide locator off the front of an exercise.

    Returns:

        (locator, remainder)

    where locator is:

        {
            "kind": "page",
            "value": "4",
            "number": 4
        }

    """

    match = LOCATOR_RE.match(text)

    if not match:
        return None, text

    kind = match.group(1).lower()
    value = match.group(2).strip()

    remainder = text[match.end():].strip()

    number = None

    digits = re.match(
        r"^[0-9]+",
        value,
    )

    if digits:
        number = int(digits.group(0))

    locator = {
        "kind": kind,
        "value": value,
        "number": number,
    }

    return locator, remainder


# ============================================================================
# Hint parsing
# ============================================================================

def extract_hint(text):
    """
    Extract a '(Hint: ...)' clause from anywhere in the exercise.

    Parentheses inside the hint are balanced.

    Example:

        Prove X. (Hint: use (or construct) Y.)

    becomes:

        text = "Prove X."
        hint = "use (or construct) Y."
    """

    lower = text.lower()

    idx = lower.find("(hint")

    if idx == -1:
        return None, text

    depth = 0
    end_idx = None

    for j in range(idx, len(text)):

        if text[j] == "(":
            depth += 1

        elif text[j] == ")":
            depth -= 1

            if depth == 0:
                end_idx = j + 1
                break

    # Unmatched parentheses.
    if end_idx is None:
        return None, text

    hint_clause = text[idx:end_idx]

    before = text[:idx].rstrip()
    after = text[end_idx:].lstrip()

    remainder = f"{before} {after}".strip()

    hint_content = re.sub(
        r"^\(\s*hint\s*:\s*",
        "",
        hint_clause,
        flags=re.IGNORECASE,
    )

    if hint_content.endswith(")"):
        hint_content = hint_content[:-1]

    return hint_content.strip(), remainder


# ============================================================================
# LaTeX / MathJax handling
# ============================================================================

def normalize_latex(text):
    """
    Normalize common LaTeX delimiters for Anki.

    Supported input:

        $x^2$

        $$x^2$$

        \\(x^2\\)

        \\[x^2\\]

    Anki uses MathJax, and \\(...\\) / \\[...\\] are the safest explicit
    delimiters.

    We therefore convert:

        $$ ... $$

    to:

        \\[ ... \\]

    and:

        $ ... $

    to:

        \\( ... \\)

    Existing \\(...\\) and \\[...\\] are left alone.

    IMPORTANT:
    This intentionally does not attempt to parse arbitrary LaTeX. It only
    changes the delimiters.
    """

    if not text:
        return text

    # ------------------------------------------------------------
    # Display math: $$ ... $$
    # ------------------------------------------------------------

    text = re.sub(
        r"\$\$(.+?)\$\$",
        lambda m: r"\[" + m.group(1) + r"\]",
        text,
        flags=re.DOTALL,
    )

    # ------------------------------------------------------------
    # Inline math: $ ... $
    #
    # Avoid matching "$" when it is escaped.
    # ------------------------------------------------------------

    text = re.sub(
        r"(?<!\\)\$(?!\$)(.+?)(?<!\\)\$(?!\$)",
        lambda m: r"\(" + m.group(1) + r"\)",
        text,
        flags=re.DOTALL,
    )

    return text


# ============================================================================
# Exercise-line parser
# ============================================================================

def parse_exercise_line(raw_text):
    """
    Parse a single raw exercise.

    Returns:

        text, hint, locator
    """

    text = raw_text.strip()

    locator, text = extract_locator(text)

    hint, text = extract_hint(text)

    text = text.strip()

    # Remove a terminal period exactly as the original script did.
    text = text.rstrip(".")

    text = normalize_latex(text)

    if hint:
        hint = normalize_latex(hint)

    return text, hint, locator


# ============================================================================
# Resource block parser
# ============================================================================

def parse_blocks(lines):
    """
    Yield resource blocks.

    Each block has:

        {
            "url": ...,
            "title": ...,
            "note": ...,
            "raw": [...]
        }

    """

    block = None

    for line in lines:

        stripped = line.strip()

        # ------------------------------------------------------------
        # Ignore blank lines.
        # ------------------------------------------------------------

        if not stripped:
            continue

        # ------------------------------------------------------------
        # Markdown URL line.
        # ------------------------------------------------------------

        markdown_match = MARKDOWN_URL_LINE_RE.match(
            stripped
        )

        if markdown_match:

            if block is not None:
                yield block

            visible_url = markdown_match.group(1)
            actual_url = markdown_match.group(2)
            rest = markdown_match.group(3)

            # Prefer the actual href.
            url = actual_url or visible_url

            parts = [
                p.strip()
                for p in rest.split(",")
            ]

            title = parts[0] if parts else ""

            note = (
                ", ".join(parts[1:])
                if len(parts) > 1
                else ""
            )

            block = {
                "url": url,
                "title": title,
                "note": note,
                "raw": [],
            }

            continue

        # ------------------------------------------------------------
        # Plain URL line.
        # ------------------------------------------------------------

        plain_match = PLAIN_URL_LINE_RE.match(
            stripped
        )

        if plain_match:

            if block is not None:
                yield block

            url = plain_match.group(1)
            rest = plain_match.group(2)

            parts = [
                p.strip()
                for p in rest.split(",")
            ]

            title = parts[0] if parts else ""

            note = (
                ", ".join(parts[1:])
                if len(parts) > 1
                else ""
            )

            block = {
                "url": url,
                "title": title,
                "note": note,
                "raw": [],
            }

            continue

        # ------------------------------------------------------------
        # Exercise bullet.
        # ------------------------------------------------------------

        bullet_match = BULLET_RE.match(line)

        if bullet_match and block is not None:

            block["raw"].append(
                bullet_match.group(1)
            )

            continue

        # ------------------------------------------------------------
        # Continuation line.
        #
        # If there is already an exercise, append to it.
        # Otherwise treat it as part of the resource note.
        # ------------------------------------------------------------

        if block is not None and block["raw"]:

            block["raw"][-1] += " " + stripped

        elif block is not None:

            block["note"] = (
                block["note"] + " " + stripped
            ).strip()

    # Last block.
    if block is not None:
        yield block


# ============================================================================
# Anki model
# ============================================================================

def make_model():
    """
    Construct the Anki note model.

    The question and hint fields contain MathJax-compatible LaTeX.
    """

    model_id = stable_id(
        "Exercise Bank MathJax Model",
        "anki-model",
    )

    return genanki.Model(
        model_id,
        "Exercise Bank — MathJax",
        fields=[
            {
                "name": "Question"
            },
            {
                "name": "Hint"
            },
            {
                "name": "Source"
            },
            {
                "name": "Locator"
            },
        ],
        templates=[
            {
                "name": "Exercise",
                "qfmt": """
<div class="question">
{{Question}}
</div>
""",
                "afmt": """
<div class="question">
{{Question}}
</div>

<hr>

{{#Hint}}
<div class="hint-title">
Hint
</div>

<div class="hint">
{{Hint}}
</div>
{{/Hint}}

{{#Source}}
<div class="source">
{{Source}}
</div>
{{/Source}}

{{#Locator}}
<div class="locator">
{{Locator}}
</div>
{{/Locator}}
""",
            }
        ],
        css="""
.card {
    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Arial,
        sans-serif;

    font-size: 22px;
    text-align: left;
    color: #222;
    background-color: #fff;

    padding: 24px;
    line-height: 1.6;
}

.question {
    font-size: 24px;
    line-height: 1.6;
}

.hint-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}

.hint {
    font-size: 20px;
    line-height: 1.6;
}

.source {
    margin-top: 28px;
    font-size: 13px;
}

.source a {
    text-decoration: none;
}

.locator {
    margin-top: 6px;
    font-size: 13px;
    color: #777;
}

/*
 * Make display mathematics breathe a little.
 */

mjx-container[display="true"] {
    margin: 1em 0 !important;
}
""",
    )


# ============================================================================
# Tags
# ============================================================================

def make_tags(
    url,
    source_file,
    locator,
):
    """
    Construct all Anki tags for an exercise.

    Every card receives the URL tag, which is the main organizational tag.
    """

    tags = [
        "exercise-bank",
        url_tag(url),
        source_tag(source_file),
    ]

    domain = domain_tag(url)

    if domain:
        tags.append(domain)

    tags.extend(
        locator_tags(locator)
    )

    # Anki does not like spaces in tags.
    # Deduplicate while preserving order.
    result = []

    seen = set()

    for tag in tags:

        tag = re.sub(
            r"\s+",
            "_",
            tag.strip(),
        )

        if not tag:
            continue

        if tag not in seen:
            result.append(tag)
            seen.add(tag)

    return result


# ============================================================================
# Card construction
# ============================================================================

def make_note(
    model,
    block,
    exercise,
    source_file,
):
    """
    Construct one Anki note from one parsed exercise.
    """

    url = block["url"]
    title = block["title"] or url

    question = exercise["text"]
    hint = exercise["hint"]
    locator = exercise["locator"]

    # ------------------------------------------------------------
    # Source field.
    #
    # HTML is intentionally used here because Anki fields support HTML.
    # ------------------------------------------------------------

    escaped_title = (
        title
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )

    escaped_url = (
        url
        .replace("&", "&amp;")
        .replace('"', "&quot;")
    )

    source = (
        f'<a href="{escaped_url}">'
        f"{escaped_title}"
        f"</a>"
    )

    # ------------------------------------------------------------
    # Locator.
    # ------------------------------------------------------------

    if locator:

        locator_text = (
            f"{locator['kind'].capitalize()} "
            f"{locator['value']}"
        )

    else:

        locator_text = ""

    # ------------------------------------------------------------
    # Stable note identity.
    #
    # Include URL because the same exercise text from two different
    # resources should normally be considered different cards.
    # ------------------------------------------------------------

    identity = "\n".join([
        url,
        question,
        hint or "",
        locator_text,
    ])

    guid = str(
        stable_id(
            identity,
            "anki-note",
        )
    )

    tags = make_tags(
        url=url,
        source_file=source_file,
        locator=locator,
    )

    note = genanki.Note(
        model=model,
        fields=[
            question,
            hint or "",
            source,
            locator_text,
        ],
        guid=guid,
        tags=tags,
    )

    return note


# ============================================================================
# Deck construction
# ============================================================================

def build_deck(
    input_files,
    deck_name,
):
    """
    Parse all input files and build the Anki deck.
    """

    deck_id = stable_id(
        deck_name,
        "anki-deck",
    )

    deck = genanki.Deck(
        deck_id,
        deck_name,
    )

    model = make_model()

    total_resources = 0
    total_exercises = 0

    for path in input_files:

        source_file = os.path.basename(path)

        print(
            f"Reading {path}..."
        )

        with open(
            path,
            encoding="utf-8",
        ) as f:

            lines = f.readlines()

        file_resources = 0
        file_exercises = 0

        for block in parse_blocks(lines):

            parsed_exercises = []

            for raw in block["raw"]:

                text, hint, locator = (
                    parse_exercise_line(raw)
                )

                if not text:
                    continue

                parsed_exercises.append({
                    "text": text,
                    "hint": hint,
                    "locator": locator,
                })

            if not parsed_exercises:
                continue

            total_resources += 1
            file_resources += 1

            print(
                f"  {block['title'] or block['url']}"
            )

            print(
                f"    {block['url']}"
            )

            for exercise in parsed_exercises:

                note = make_note(
                    model=model,
                    block=block,
                    exercise=exercise,
                    source_file=source_file,
                )

                deck.add_note(note)

                total_exercises += 1
                file_exercises += 1

        print(
            f"  -> {file_resources} resources, "
            f"{file_exercises} exercises"
        )

    return (
        deck,
        total_resources,
        total_exercises,
    )


# ============================================================================
# Main
# ============================================================================

def main():

    parser = argparse.ArgumentParser(
        description=__doc__
    )

    parser.add_argument(
        "inputs",
        nargs="*",
        default=None,
        help=(
            "Input exercises.txt file(s). "
            "Defaults to exercises.txt."
        ),
    )

    parser.add_argument(
        "--out",
        default=DEFAULT_OUT,
        help=(
            f"Output Anki package "
            f"(default: {DEFAULT_OUT})"
        ),
    )

    parser.add_argument(
        "--deck",
        default=DEFAULT_DECK,
        help=(
            f"Anki deck name "
            f"(default: {DEFAULT_DECK})"
        ),
    )

    args = parser.parse_args()

    # ------------------------------------------------------------
    # Default input.
    # ------------------------------------------------------------

    inputs = (
        args.inputs
        if args.inputs
        else [DEFAULT_INPUT]
    )

    # ------------------------------------------------------------
    # Check files.
    # ------------------------------------------------------------

    for path in inputs:

        if not os.path.isfile(path):

            print(
                f"ERROR: input file not found: {path}"
            )

            return 1

    # ------------------------------------------------------------
    # Build deck.
    # ------------------------------------------------------------

    deck, resources, exercises = build_deck(
        input_files=inputs,
        deck_name=args.deck,
    )

    # ------------------------------------------------------------
    # Make output directory if necessary.
    # ------------------------------------------------------------

    output_path = os.path.abspath(
        args.out
    )

    output_dir = os.path.dirname(
        output_path
    )

    if output_dir:
        os.makedirs(
            output_dir,
            exist_ok=True,
        )

    # ------------------------------------------------------------
    # Write .apkg.
    # ------------------------------------------------------------

    genanki.Package(deck).write_to_file(
        output_path
    )

    print()
    print("=" * 60)
    print("Anki deck created")
    print("=" * 60)
    print(f"Output:     {output_path}")
    print(f"Deck:       {args.deck}")
    print(f"Resources:  {resources}")
    print(f"Exercises:  {exercises}")
    print("=" * 60)

    return 0


if __name__ == "__main__":
    raise SystemExit(
        main()
    )
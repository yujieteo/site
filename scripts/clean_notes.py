#!/usr/bin/env python3
"""Mechanical cleanup pass over notes.txt: normalizes whitespace, punctuation,
and capitalization without touching the technical content or wording itself.

What this fixes (safe, rule-based):
  - collapses repeated/irregular whitespace
  - fixes stray space before commas/periods, double punctuation
  - capitalizes the first letter of each note and of each new sentence
    (skipping known abbreviations like "e.g.", "i.e.", "cf.", "etc.",
    and decimal numbers, so math notation isn't mangled)
  - ensures each note ends with terminal punctuation
  - protects any URL that appears *inside* a note (a secondary link the
    note references) from being touched by spacing/capitalization at
    all, and wraps it in backticks so downstream markdown/strikethrough
    renderers don't misinterpret stray "~" or "_" characters in it as
    formatting

What this does NOT do:
  - it does not rewrite phrasing, fix grammar mid-sentence, or alter
    the technical meaning of any note. True grammar/prose editing at
    2700+ entries needs either manual pass-by-pass review or an LLM
    call per entry (out of scope for a single offline script).
"""

import re
import sys

ABBREVIATIONS = {"e.g.", "i.e.", "cf.", "etc.", "vs.", "resp.", "cont."}
URL_RE = re.compile(r'https?://\S+')


def protect_urls(text):
    """Pull embedded URLs out of the text and replace with placeholders so
    the rest of the cleanup never touches them."""
    urls = []

    def stash(m):
        url = m.group(0).rstrip(').,;')
        urls.append(url)
        return f"\x00{len(urls) - 1}\x00"

    return URL_RE.sub(stash, text), urls


def restore_urls(text, urls):
    for i, url in enumerate(urls):
        text = text.replace(f"\x00{i}\x00", f"`{url}`")
    return text


def fix_spacing(text):
    text = re.sub(r'\s+', ' ', text).strip()
    text = re.sub(r'\s+([,.;:!?])', r'\1', text)          # no space before punctuation
    text = re.sub(r'([,.;:!?])(?=[^\s\d\x00])', r'\1 ', text)  # space after punctuation
    text = re.sub(r',{2,}', ',', text)
    text = re.sub(r'\.{4,}', '...', text)
    return text.strip()


def capitalize_sentences(text):
    tokens = re.split(r'(?<=[.!?]) (?=[A-Za-z\x00])', text)
    out = []
    for tok in tokens:
        if not tok:
            continue
        prev_word = out[-1].rsplit(' ', 1)[-1].lower() if out else ""
        if prev_word in ABBREVIATIONS:
            out.append(tok)
            continue
        if tok[0].islower():
            tok = tok[0].upper() + tok[1:]
        out.append(tok)
    result = " ".join(out)
    if result and result[0].islower():
        result = result[0].upper() + result[1:]
    return result


def ensure_terminal_punctuation(text):
    text = text.strip()
    if text and text[-1] not in ".!?`":
        text += "."
    return text


def clean_note(note):
    if not note.strip():
        return note
    note, urls = protect_urls(note)
    note = fix_spacing(note)
    note = capitalize_sentences(note)
    note = restore_urls(note, urls)
    note = ensure_terminal_punctuation(note)
    return note


def parse_block(block):
    block = block.strip()
    if not block:
        return None
    m = re.match(r'(https?://\S+?)(?:,\s*|\s+)(.*)$', block, re.DOTALL)
    if not m:
        return None
    url, note = m.group(1), m.group(2).strip()
    url = url.rstrip(').,;')
    return url, note


def main(src, dst):
    with open(src) as f:
        content = f.read()
    blocks = [b for b in content.split('\n\n') if b.strip()]

    cleaned_blocks = []
    skipped = 0
    for b in blocks:
        parsed = parse_block(b)
        if not parsed:
            skipped += 1
            continue
        url, note = parsed
        note = clean_note(note)
        cleaned_blocks.append(f"{url}, {note}")

    with open(dst, 'w') as f:
        f.write("\n\n".join(cleaned_blocks) + "\n")

    print(f"Cleaned {len(cleaned_blocks)} entries, skipped {skipped} unparsable blocks, wrote {dst}")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])

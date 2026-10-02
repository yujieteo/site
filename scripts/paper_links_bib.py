#!/usr/bin/env python3
"""Compile data/paper-links/*.yaml into a BibTeX/biblatex .bib file.

Every paper link becomes one ``@misc`` entry with ``title``, ``url``,
``keywords`` (the record's tags) and ``abstract`` (the record's note).
arXiv links also get ``eprint``, ``archivePrefix`` and ``primaryClass``;
records with ``authors``/``year`` get ``author``/``year``.

Official arXiv metadata (authors, title, year, categories, DOI) can be cached
from the arXiv API, which needs network access to export.arxiv.org:

    python scripts/paper_links_bib.py --fetch-arxiv   # refresh data/arxiv-cache.json
    python scripts/paper_links_bib.py                 # write exports/paper-links.bib
    python scripts/paper_links_bib.py --check         # fail if the .bib is stale

Cached metadata takes precedence over inferred values when writing entries.
"""

import argparse
import json
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

import yaml

sys.path.insert(0, str(Path(__file__).resolve().parent))
from paper_tags import ARXIV_CACHE, arxiv_id, load_arxiv_cache, primary_class  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "paper-links"
OUTPUT = ROOT / "exports" / "paper-links.bib"
ARXIV_API = "http://export.arxiv.org/api/query"
ATOM = {"a": "http://www.w3.org/2005/Atom", "arxiv": "http://arxiv.org/schemas/atom"}
STOP_WORDS = {"a", "an", "the", "on", "of", "and", "for", "in", "to", "via", "with", "from", "by", "at"}


def load_papers():
    records = []
    for path in sorted(DATA.glob("*.y*ml")):
        data = yaml.safe_load(path.read_text(encoding="utf-8")) or []
        records.extend(data if isinstance(data, list) else [data])
    return records


# --- arXiv metadata -----------------------------------------------------

def fetch_arxiv(ids, cache, batch_size=100, pause=3.0):
    """Fetch metadata for ids missing from cache; arXiv asks for 3 s between calls."""
    missing = sorted(set(ids) - set(cache))
    for start in range(0, len(missing), batch_size):
        batch = missing[start:start + batch_size]
        query = urllib.parse.urlencode({"id_list": ",".join(batch), "max_results": len(batch)})
        with urllib.request.urlopen(f"{ARXIV_API}?{query}", timeout=60) as response:
            root = ET.fromstring(response.read())
        for entry in root.findall("a:entry", ATOM):
            identifier = arxiv_id(entry.findtext("a:id", "", ATOM))
            if not identifier:
                continue
            primary = entry.find("arxiv:primary_category", ATOM)
            categories = [c.get("term") for c in entry.findall("a:category", ATOM)]
            primary_term = primary.get("term") if primary is not None else None
            if primary_term in categories:
                categories.remove(primary_term)
            cache[identifier] = {
                "title": " ".join(entry.findtext("a:title", "", ATOM).split()),
                "authors": [a.findtext("a:name", "", ATOM) for a in entry.findall("a:author", ATOM)],
                "year": int(entry.findtext("a:published", "0000", ATOM)[:4]),
                "categories": [c for c in [primary_term, *categories] if c],
                "doi": entry.findtext("arxiv:doi", None, ATOM),
                "journal_ref": entry.findtext("arxiv:journal_ref", None, ATOM),
            }
        print(f"fetched {min(start + batch_size, len(missing))}/{len(missing)} arXiv records", file=sys.stderr)
        if start + batch_size < len(missing):
            time.sleep(pause)
    return cache


def year_from_arxiv_id(identifier):
    """New-style 2107.01234 -> 2021; old-style math/0401222 -> 2004."""
    digits = identifier.split("/")[-1]
    yy = int(digits[:2])
    return (1900 if yy >= 91 else 2000) + yy


# --- BibTeX formatting --------------------------------------------------

def escape_text(text):
    """Make free text safe inside a BibTeX field while keeping $...$ math.

    ``%``, ``#`` and ``&`` are escaped everywhere (``%`` would start a comment
    in the .bbl file); ``_`` and ``^`` only outside math. An unmatched ``$``
    is escaped, and unbalanced braces are escaped or closed.
    """
    text = str(text)
    dollars = [m.start() for m in re.finditer(r"(?<!\\)\$", text)]
    if len(dollars) % 2:
        last = dollars[-1]
        text = text[:last] + "\\" + text[last:]

    out = []
    in_math = False
    depth = 0
    i = 0
    while i < len(text):
        char = text[i]
        if char == "\\":
            out.append(text[i:i + 2] if i + 1 < len(text) else "\\textbackslash{}")
            i += 2
            continue
        if char == "$":
            in_math = not in_math
            out.append(char)
        elif char in "%#&":
            out.append("\\" + char)
        elif char == "_" and not in_math:
            out.append("\\_")
        elif char == "^" and not in_math:
            out.append("\\textasciicircum{}")
        elif char == "{":
            depth += 1
            out.append(char)
        elif char == "}":
            if depth == 0:
                out.append("\\}")
            else:
                depth -= 1
                out.append(char)
        else:
            out.append(char)
        i += 1
    return "".join(out) + "}" * depth


def escape_url_argument(url):
    """Escape a URL for use inside \\url{...} in another field's argument."""
    return re.sub(r"([%#])", r"\\\1", url.replace("{", "%7B").replace("}", "%7D"))


def format_author(name):
    name = name.strip()
    if name in {"et al.", "others"}:
        return "others"
    # Corporate authors stay one unit.
    if re.search(r"\b(?:community|team|group|collaboration|consortium)\b", name, re.IGNORECASE):
        return "{" + name + "}"
    return name


def ascii_slug(text):
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^A-Za-z0-9]", "", text)


def citation_key(record, authors, year, used):
    title_words = [w for w in re.findall(r"[A-Za-z0-9]+", unicodedata.normalize("NFKD", record["title"]).encode("ascii", "ignore").decode())
                   if w.lower() not in STOP_WORDS]
    first_word = title_words[0].lower() if title_words else "untitled"
    if authors and authors[0] not in {"et al.", "others"}:
        last = re.sub(r"[{}]", "", authors[0]).split()[-1]
        base = f"{ascii_slug(last).lower()}{year or ''}{first_word}"
    else:
        base = "".join(w.lower() for w in title_words[:3]) or "untitled"
        if year:
            base += str(year)
    base = base or "entry"
    key = base
    suffix = ord("a")
    while key in used:
        key = f"{base}{chr(suffix)}"
        suffix += 1
    used.add(key)
    return key


def bib_entry(record, cache, used):
    identifier = arxiv_id(record.get("url", ""))
    meta = cache.get(identifier, {}) if identifier else {}
    authors = meta.get("authors") or record.get("authors") or []
    year = meta.get("year") or record.get("year") or (year_from_arxiv_id(identifier) if identifier else None)
    title = meta.get("title") or record["title"]
    tags = record.get("tags") or []
    if isinstance(tags, str):
        tags = [tag.strip() for tag in tags.split(",") if tag.strip()]

    key = citation_key(record, authors, year, used)
    fields = [("title", "{" + escape_text(title) + "}")]
    if authors:
        fields.append(("author", " and ".join(format_author(a) for a in authors)))
    else:
        # Sort key for author-less entries in BibTeX styles such as plain.
        fields.append(("key", escape_text(title)))
    if year:
        fields.append(("year", str(year)))
    if identifier:
        classes = meta.get("categories") or []
        fields += [
            ("eprint", identifier),
            ("archivePrefix", "arXiv"),
        ]
        primary = classes[0] if classes else primary_class(tags)
        if primary:
            fields.append(("primaryClass", primary))
    if meta.get("doi"):
        fields.append(("doi", meta["doi"]))
    if meta.get("journal_ref"):
        fields.append(("note", escape_text(meta["journal_ref"])))
    fields.append(("url", record["url"].replace("{", "%7B").replace("}", "%7D")))
    fields.append(("howpublished", "\\url{" + escape_url_argument(record["url"]) + "}"))
    if tags:
        fields.append(("keywords", escape_text(", ".join(tags))))
    if record.get("note"):
        fields.append(("abstract", escape_text(" ".join(str(record["note"]).split()))))

    width = max(len(name) for name, _ in fields)
    body = ",\n".join(f"  {name.ljust(width)} = {{{value}}}" for name, value in fields)
    return f"@misc{{{key},\n{body}\n}}"


def render_bib(records, cache):
    used = set()
    header = (
        "% Generated by scripts/paper_links_bib.py from data/paper-links/*.yaml.\n"
        "% Do not edit by hand; edit the YAML and regenerate.\n"
        f"% {len(records)} entries. Encoding: UTF-8 (use biber, or \\usepackage[utf8]{{inputenc}} with bibtex).\n"
    )
    return header + "\n" + "\n\n".join(bib_entry(r, cache, used) for r in records) + "\n"


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("-o", "--output", type=Path, default=OUTPUT, help=f"output .bib path (default: {OUTPUT.relative_to(ROOT)})")
    parser.add_argument("--fetch-arxiv", action="store_true", help="fetch missing arXiv metadata into data/arxiv-cache.json first")
    parser.add_argument("--check", action="store_true", help="exit 1 if the output file is out of date")
    args = parser.parse_args(argv)

    records = load_papers()
    cache = load_arxiv_cache()
    if args.fetch_arxiv:
        ids = [i for i in (arxiv_id(r.get("url", "")) for r in records) if i]
        cache = fetch_arxiv(ids, cache)
        ARXIV_CACHE.write_text(json.dumps(cache, indent=1, sort_keys=True, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"cached metadata for {len(cache)} arXiv papers in {ARXIV_CACHE.relative_to(ROOT)}")

    text = render_bib(records, cache)
    output = args.output if args.output.is_absolute() else Path.cwd() / args.output
    if args.check:
        current = output.read_text(encoding="utf-8") if output.exists() else ""
        if current != text:
            print(f"{output} is out of date; run python scripts/paper_links_bib.py")
            return 1
        print(f"{output} is up to date ({len(records)} entries)")
        return 0
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(text, encoding="utf-8")
    print(f"wrote {len(records)} entries to {output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

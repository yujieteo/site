"""Check that every quote in data/entries/*.json appears in its saved source (METHOD.md section 3).

Usage: uv run python -I src/checkquotes.py [ID ...]
Writes data/quotecheck.tsv and exits 1 if any quote fails.
"""
import hashlib
import html
import json
import os
import re
import sys
import unicodedata
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
DATA = HERE / "data"
STORE = Path(os.environ.get("AA_DATA", Path.home() / "data/library/datasets/anecdote-audit"))

SAME = str.maketrans({"‘": "'", "’": "'", "‚": "'", "‛": "'", "′": "'", "`": "'",
                      "“": '"', "”": '"', "„": '"', "″": '"', "«": '"', "»": '"',
                      "–": "-", "—": "-", "‒": "-", "−": "-", "­": "", " ": " "})


def norm(t):
    t = unicodedata.normalize("NFKC", t).translate(SAME).lower()
    t = re.sub(r"-\s*\n\s*", "", t)  # words split across lines
    t = t.replace("…", "...")
    t = re.sub(r"[\"'*_]", "", t)  # quote marks and markdown emphasis
    return re.sub(r"\s+", " ", t).strip()


def text_of(path):
    raw = path.read_bytes()
    if raw[:4] == b"%PDF":
        alt = path.with_name(path.name + ".txt")
        if not alt.exists():
            alt = path.with_suffix(".txt")
        return alt.read_text(errors="replace") if alt.exists() else ""
    t = raw.decode("utf-8", errors="replace")
    if "<html" in t[:5000].lower() or "<body" in t.lower() or "<p" in t[:20000].lower():
        t = re.sub(r"(?is)<(script|style)\b.*?</\1>", " ", t)
        t = re.sub(r"<[^>]+>", " ", t)
        t = html.unescape(t)
    return t


def parts(quote):
    """A quote may skip words with '...'; each piece must appear, in order."""
    return [p for p in (x.strip() for x in norm(quote).split("...")) if len(p) >= 3]


def check(src):
    q, f = src.get("quote") or "", src.get("file") or ""
    if not q:
        return "no quote", ""
    if not f:
        return "FAIL no file", ""
    p = STORE / f
    if not p.exists():
        return "FAIL file missing", ""
    sha = hashlib.sha256(p.read_bytes()).hexdigest()
    if src.get("sha256") and src["sha256"] != sha:
        return "FAIL sha256 differs", sha
    body = norm(text_of(p))
    pos = 0
    for piece in parts(q):
        i = body.find(piece, pos)
        if i < 0:
            return "FAIL quote not found: " + piece[:60], sha
        pos = i + len(piece)
    return "ok", sha


def sources(e):
    yield "earliest_telling", e.get("earliest_telling") or {}
    for i, o in enumerate(e.get("original") or []):
        yield f"original[{i}]", o
    if e.get("teller_correction"):
        yield "teller_correction", e["teller_correction"]
    yield "lesson_verdict.source", (e.get("lesson_verdict") or {}).get("source") or {}


def main():
    ids = set(sys.argv[1:])
    rows, bad = [], 0
    for p in sorted((DATA / "entries").glob("*.json")):
        e = json.loads(p.read_text())
        if ids and e["id"] not in ids:
            continue
        for name, src in sources(e):
            status, sha = check(src)
            if status.startswith("FAIL"):
                bad += 1
            rows.append((e["id"], name, status, src.get("file", ""), sha))
    if not ids:
        with open(DATA / "quotecheck.tsv", "w") as f:
            f.write("id\tsource\tstatus\tfile\tsha256\n")
            for r in rows:
                f.write("\t".join(r) + "\n")
    for r in rows:
        if r[2] != "ok":
            print("\t".join(r[:3]))
    print(f"{len(rows)} sources, {bad} failed")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()

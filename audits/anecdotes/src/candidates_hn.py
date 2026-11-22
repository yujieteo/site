"""Stage 2 candidate pool: what Hacker News has flagged as a myth, legend or apocryphal story (DEVIATIONS.md 6).

Usage: uv run python -I src/candidates_hn.py
Uses the public Algolia Hacker News search, which anyone can rerun. Writes every raw response to
AA_DATA/hn-pool/, and data/hn_pool.tsv (one row per item: id, kind, author, date, points, the phrase that found it).
The item texts stay in AA_DATA/hn-pool/items.jsonl.
"""
import json
import os
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
DATA = HERE / "data"
STORE = Path(os.environ.get("AA_DATA", Path.home() / "data/library/datasets/anecdote-audit")) / "hn-pool"
UA = "anecdote-audit/1.0 (research script)"
API = "https://hn.algolia.com/api/v1/search_by_date?"

# Story titles with at least 20 points that contain one of these phrases.
TITLE_PHRASES = ["myth", "myths", "apocryphal", "never happened", "urban legend", "debunked", "the true story",
                 "the real story", "didn't happen", "did not happen", "legend of", "misquoted", "never said"]
# Comments that contain one of these phrases.
COMMENT_PHRASES = ["apocryphal", "urban legend", "never actually happened", "is a myth", "didn't actually happen"]


def get(params):
    url = API + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return url, r.read()
        except Exception as e:  # noqa: BLE001
            print("retry", url, e, file=sys.stderr)
            time.sleep(15 * (attempt + 1))
    raise RuntimeError(url)


def crawl(phrase, kind, extra):
    """Page backwards in time, 1000 hits a page, until no hits are left."""
    out, before, page = [], None, 0
    while True:
        nf = list(extra)
        if before:
            nf.append(f"created_at_i<{before}")
        params = dict(query=f'"{phrase}"', tags=kind, hitsPerPage=1000, numericFilters=",".join(nf))
        if kind == "story":
            params["restrictSearchableAttributes"] = "title"
        _, body = get(params)
        STORE.mkdir(parents=True, exist_ok=True)
        (STORE / f"{kind}-{phrase.replace(' ', '_').replace(chr(39), '')}-{page}.json").write_bytes(body)
        hits = json.loads(body)["hits"]
        out.extend(hits)
        time.sleep(2)
        if len(hits) < 1000:
            return out
        before, page = hits[-1]["created_at_i"], page + 1


def main():
    items = {}
    for p in TITLE_PHRASES:
        for h in crawl(p, "story", ["points>=20"]):
            items.setdefault(h["objectID"], dict(id=h["objectID"], kind="story", author=h.get("author"),
                                                 date=h.get("created_at", "")[:10], points=h.get("points") or 0,
                                                 phrase=p, title=h.get("title") or "", url=h.get("url") or "",
                                                 text=(h.get("story_text") or "")[:1500]))
        print("story", p, len(items), flush=True)
    for p in COMMENT_PHRASES:
        for h in crawl(p, "comment", []):
            items.setdefault(h["objectID"], dict(id=h["objectID"], kind="comment", author=h.get("author"),
                                                 date=h.get("created_at", "")[:10], points=0, phrase=p,
                                                 title=h.get("story_title") or "", url="",
                                                 text=(h.get("comment_text") or "")[:2500]))
        print("comment", p, len(items), flush=True)
    rows = sorted(items.values(), key=lambda r: (r["kind"], r["date"], r["id"]))
    with open(STORE / "items.jsonl", "w") as f:
        for r in rows:
            f.write(json.dumps(r) + "\n")
    with open(DATA / "hn_pool.tsv", "w") as f:
        f.write("id\tkind\tauthor\tdate\tpoints\tphrase\n")
        for r in rows:
            f.write("\t".join(str(r[k]) for k in ("id", "kind", "author", "date", "points", "phrase")) + "\n")
    print(len(rows), "items")


if __name__ == "__main__":
    main()

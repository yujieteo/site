"""Count tellings of each candidate anecdote in two search collections (METHOD.md section 5).

Usage (AA_DATA is a folder for texts kept out of git):
  uv run python -I src/count.py test     # mechanics check on a query that is not a candidate
  uv run python -I src/count.py count    # both collections, every candidate
  uv run python -I src/count.py sample   # the fixed hand-check sample

Writes to data/: counts_raw.tsv (one row per anecdote and collection), hits.tsv (every hit), hitcheck_sample.tsv.
Writes to AA_DATA: every raw search response, and the hit snippets.
"""
import hashlib
import json
import os
import random
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
DATA = HERE / "data"
STORE = Path(os.environ.get("AA_DATA", Path.home() / "data/library/datasets/anecdote-audit"))
SEED = 20261122
SAMPLE = 10
MAX_HITS = 2000  # hits read per query and collection; the rest are scaled (see book_counts)
UA = "anecdote-audit/1.0 (research script)"
PAUSE = 3  # seconds between requests to one host

_HL = re.compile(r"\{\{\{|\}\}\}|<[^>]+>")


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.read()
        except Exception as e:  # noqa: BLE001
            print("retry", url, e, file=sys.stderr)
            time.sleep(20 * (attempt + 1))
    raise RuntimeError(f"search failed: {url}")


def save(coll, qid, q, page, body):
    d = STORE / "raw" / coll
    d.mkdir(parents=True, exist_ok=True)
    (d / f"{qid}-{hashlib.sha256(q.encode()).hexdigest()[:8]}-p{page}.json").write_bytes(body)


def first(fields, key):
    v = fields.get(key) or [""]
    return v[0] if isinstance(v, list) else v


def work_key(creator, title):
    """Editions of one book share a key: the creator's surname and the title before any subtitle."""
    surname = re.sub(r"[^a-z]", "", (creator or "").split(",")[0].lower())
    t = re.sub(r"[^a-z0-9 ]", "", (title or "").lower().split(":")[0].split(" / ")[0])
    return surname + "|" + " ".join(t.split())[:40]


def books(qid, q):
    """Open Library 'search inside': the full text of the Internet Archive's scanned books."""
    hits, page, total = [], 1, 0
    while True:
        url = "https://openlibrary.org/search/inside.json?" + urllib.parse.urlencode(dict(q=q, limit=100, page=page))
        body = get(url)
        save("books", qid, q, page, body)
        d = json.loads(body)
        total = d["hits"]["total"]
        total = total["value"] if isinstance(total, dict) else total
        for h in d["hits"]["hits"]:
            fl = h["fields"]
            ident = first(fl, "identifier") or h["_id"].split("|")[0]
            hits.append(dict(key=ident, unit=work_key(first(fl, "meta_creatorSorter"), first(fl, "meta_titleSorter")),
                             title=first(fl, "meta_title"), creator=first(fl, "meta_creator"), year=first(fl, "meta_year"),
                             url=f"https://archive.org/details/{ident}",
                             snippet=_HL.sub("", " … ".join((h.get("highlight") or {}).get("text") or []))))
        time.sleep(PAUSE)
        if page * 100 >= min(total, MAX_HITS) or not d["hits"]["hits"]:
            return hits, total
        page += 1


def wikipedia(qid, q):
    """English Wikipedia full-text search over articles (namespace 0)."""
    hits, offset, total = [], 0, 0
    while True:
        url = "https://en.wikipedia.org/w/api.php?" + urllib.parse.urlencode(dict(
            action="query", list="search", srsearch=q, srnamespace=0, srwhat="text", srlimit=500,
            sroffset=offset, srprop="snippet|timestamp", format="json"))
        body = get(url)
        save("wikipedia", qid, q, offset // 500 + 1, body)
        d = json.loads(body)
        total = d["query"]["searchinfo"]["totalhits"]
        for h in d["query"]["search"]:
            t = h["title"]
            hits.append(dict(key=t, unit=t, title=t, creator="", year=h.get("timestamp", "")[:10],
                             url="https://en.wikipedia.org/wiki/" + urllib.parse.quote(t.replace(" ", "_")),
                             snippet=_HL.sub("", h.get("snippet", ""))))
        time.sleep(PAUSE)
        offset += 500
        if "continue" not in d or offset >= min(total, MAX_HITS):
            return hits, total


COLLECTIONS = {"books": books, "wikipedia": wikipedia}


def count(queries):
    rows, all_hits = [], []
    for qid, v in queries.items():
        for coll, fn in COLLECTIONS.items():
            seen, reported, read = {}, 0, 0
            for q in v["search"]:
                hits, total = fn(qid, q)
                reported += total
                read += len(hits)
                for h in hits:
                    seen.setdefault(h["key"], dict(h, id=qid, collection=coll, query=q))
            units = {h["unit"] for h in seen.values()}
            # When a query has more hits than were read, scale the distinct units by hits reported / hits read.
            scale = max(1.0, reported / read) if read else 1.0
            rows.append(dict(id=qid, collection=coll, reported=reported, read=read, distinct=len(seen),
                             units=len(units), units_scaled=round(len(units) * scale), queried=time.strftime("%Y-%m-%d")))
            all_hits.extend(seen.values())
            print(coll, qid, reported, len(seen), len(units), flush=True)
    return rows, all_hits


def write_tsv(path, rows, cols):
    with open(path, "w") as f:
        f.write("\t".join(cols) + "\n")
        for r in rows:
            f.write("\t".join(str(r.get(c, "")).replace("\t", " ").replace("\n", " ") for c in cols) + "\n")


def sample():
    """Up to 10 hits per anecdote and collection, one per unit (book or article), from a fixed seed."""
    hits = [json.loads(x) for x in (STORE / "hits.jsonl").read_text().splitlines()]
    out = []
    for qid in load_queries():
        for coll in COLLECTIONS:
            by_unit = {}
            for h in hits:
                if h["id"] == qid and h["collection"] == coll:
                    by_unit.setdefault(h["unit"], h)
            keys = sorted(by_unit)
            for u in random.Random(f"{SEED}-{qid}-{coll}").sample(keys, min(SAMPLE, len(keys))):
                h = by_unit[u]
                out.append(dict(collection=coll, id=qid, key=h["key"], url=h["url"],
                                text=f"{h['title']} ({h['creator']} {h['year']}): {h['snippet']}"))
    with open(STORE / "hitcheck_sample.jsonl", "w") as f:
        for r in out:
            f.write(json.dumps(r) + "\n")
    write_tsv(DATA / "hitcheck_sample.tsv", out, ["collection", "id", "key", "url"])
    print(len(out), "hits in the sample")


def load_queries():
    q = json.loads((DATA / "queries.json").read_text())
    q.pop("_rules", None)
    return q


def main():
    global STORE
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "test":
        STORE = STORE / "test"
        rows, _ = count({"lighthouse-test": {"search": ["\"lighthouse keeper\" \"tin of sardines\""]}})
        for r in rows:
            print(r)
    elif cmd == "count":
        rows, hits = count(load_queries())
        cols = ["id", "collection", "reported", "read", "distinct", "units", "units_scaled", "queried"]
        write_tsv(DATA / "counts_raw.tsv", rows, cols)
        write_tsv(DATA / "hits.tsv", hits, ["id", "collection", "query", "key", "unit", "year"])
        with open(STORE / "hits.jsonl", "w") as f:
            for h in hits:
                f.write(json.dumps(h) + "\n")
    elif cmd == "sample":
        sample()
    else:
        print(__doc__)


if __name__ == "__main__":
    main()

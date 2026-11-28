"""Monthly check: resolve and score the frozen forecasts in research/tampines/forecasts.tsv.

    uv run --no-project --with beautifulsoup4 python scripts/tampines/check.py

It looks for:
1. new articles from outlets with a WordPress search API (Eatbook, Seth Lui, Daniel Food Diary,
   ieatishootipost) published from 2026-11-16, gives each a scope by a fixed rule, and scores the
   named_by forecasts for the places in that scope;
2. final ACRA statuses (ceased, struck off, dissolved and the like) for the matched entities;
3. OpenStreetMap changes for the matched elements (deleted, renamed, or a disused:/was: prefix);
4. reviewed 2027 MICHELIN Guide Singapore Bib Gourmand and star outcomes.

It appends to research/tampines/scores.tsv and research/tampines/new_articles.tsv and rewrites
research/tampines/status.tsv (one row per place: closed evidence so far). It never edits
forecasts.tsv. Outlets without a search API (Miss Tam Chiak, HungryGoWhere, the small blogs)
are not covered.
"""
from __future__ import annotations

import csv
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date
from pathlib import Path

from bs4 import BeautifulSoup

sys.path.insert(0, str(Path(__file__).parent))
import guides  # noqa: E402
from closures import first_seen, read_event_dates, settle  # noqa: E402
from michelin import read_selection  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
RES = ROOT / "research/tampines"
RAW = RES / "raw"
# Places found closed after the freeze but closed before it began: their closure forecasts are not scored.
CLOSED_BEFORE_FREEZE = {"p019": "Xing Yun Kway Chap, reported closed by Miss Tam Chiak in 2016"}
TODAY = date.today().isoformat()
START = "2026-11-16"
END = "2027-11-15"
WP = {"Eatbook": "eatbook.sg", "Seth Lui": "sethlui.com", "Daniel Food Diary": "danielfooddiary.com", "ieatishootipost": "ieatishootipost.sg"}
VENUES = {"round market": "Round Market", "our tampines hub": "Our Tampines Hub", "oth": "Our Tampines Hub", "tampines mall": "Tampines Mall", "tampines 1": "Tampines 1", "tampines one": "Tampines 1", "century square": "Century Square"}
UA = guides.UA


def read(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    with path.open(newline="") as f:
        return [r for r in csv.DictReader((line for line in f if not line.startswith("#")), delimiter="\t")]


def append(path: Path, header: list[str], rows: list[list]) -> None:
    new = not path.exists()
    with path.open("a", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        if new:
            w.writerow(header)
        w.writerows(rows)


_last: dict[str, float] = {}


def get_json(url: str, tries: int = 6):
    """GET JSON at most one request every 3 seconds per host, backing off on HTTP 429."""
    host = urllib.parse.urlsplit(url).netloc
    for attempt in range(tries):
        wait = 3.0 - (time.time() - _last.get(host, 0))
        if wait > 0:
            time.sleep(wait)
        _last[host] = time.time()
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=40) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            if e.code != 429 or attempt == tries - 1:
                raise
            time.sleep(10 * 2 ** attempt)


def brier(pairs: list[tuple[float, int]]) -> float:
    return sum((p - y) ** 2 for p, y in pairs) / len(pairs) if pairs else float("nan")


def scope_of(title: str) -> str | None:
    """Fixed rule for a new article's scope. None means a single-place article, which is not scored."""
    t = title.lower()
    for key, venue in VENUES.items():
        if re.search(rf"\b{re.escape(key)}\b", t):
            return f"venue={venue}"
    if "tampines" not in t:
        return None
    listy = re.search(r"\b\d+\b|guide|best|where to eat|food in|places", t)
    if not listy:
        return None
    if "hawker" in t:
        return "kind=h"
    if "cafe" in t:
        return "kind=c"
    return "all"


def article_pages(host: str):
    query = urllib.parse.urlencode({
        "search": "tampines", "after": START + "T00:00:00", "before": END + "T23:59:59",
        "per_page": 50, "_fields": "date,link,title", "order": "asc", "orderby": "date",
    })
    page = 1
    while True:
        try:
            posts = get_json(f"https://{host}/wp-json/wp/v2/posts?{query}&page={page}")
        except urllib.error.HTTPError as error:
            if page > 1 and error.code == 400 and json.loads(error.read()).get("code") == "rest_post_invalid_page_number":
                return
            raise
        yield from posts
        if len(posts) < 50:
            return
        page += 1


def new_articles(places, known: set[str]) -> list[list]:
    pats = guides.build_patterns(places)
    _, areas = guides.read_urls()
    out = []
    for outlet, host in WP.items():
        try:
            posts = list(article_pages(host))
        except Exception as e:  # an outlet that is down is skipped this month
            print(f"  {outlet}: {e}", file=sys.stderr)
            continue
        for post in posts:
            url, day = post["link"], post["date"][:10]
            if url in known or day > END:
                continue
            title = BeautifulSoup(post["title"]["rendered"], "html.parser").get_text()
            html, info = guides.fetch(url)
            if info.get("status") != 200 or not html:
                continue
            text = guides.body_text(BeautifulSoup(html, "html.parser"))
            if not text.strip():
                continue
            sponsored, _ = guides.sponsorship(text)
            scope = scope_of(title)
            named = guides.find_mentions(text, places, pats, scope or "all")
            inside = [p["id"] for p in places if scope and guides.in_scope(p, scope, areas)]
            known.add(url)
            out.append([TODAY, outlet, url, day, title, scope or "single", int(bool(sponsored)), " ".join(sorted(named)), " ".join(inside)])
    return out


def score_articles(rows: list[dict[str, str]], forecasts: list[dict[str, str]]) -> list[list]:
    by = {(f["outlet"], f["id"]): f for f in forecasts if f["target"] == "named_by"}
    model, base = [], []
    for r in rows:
        if r["sponsored"] == "1" or r["scope"] == "single":
            continue
        named = set(r["named"].split())
        for pid in r["in_scope"].split():
            f = by.get((r["outlet"], pid)) or by.get(("(any other outlet)", pid))
            if f:
                y = int(pid in named)
                model.append((float(f["p_model"]), y))
                base.append((float(f["p_baseline"]), y))
    return [[TODAY, "named_by", len(model), *score_line(model, base), f"{len({r['url'] for r in rows})} new articles seen so far"]]


def score_line(model, base) -> list:
    bm, bb = brier(model), brier(base)
    skill = 1 - bm / bb if model and bb > 0 else float("nan")
    return [f"{bm:.4f}", f"{bb:.4f}", f"{skill:.3f}"]


def acra_dataset_ids() -> dict[str, str]:
    meta = get_json("https://api-production.data.gov.sg/v2/public/api/collections/2/metadata")["data"]["collectionMetadata"]
    out = {}
    for ds in meta["childDatasets"]:
        name = get_json(f"https://api-production.data.gov.sg/v2/public/api/datasets/{ds}/metadata")["data"]["name"]
        m = re.search(r"\(([A-Z]|Others)\)|'([A-Z]|Others)'|\b([A-Z])\)?$", name)
        key = next((g for g in m.groups() if g), "Others") if m else "Others"
        out[key] = ds
    return out


ACRA_FAILED: list[str] = []
# How the closure rule's "ceased or struck off" reads ACRA's statuses, spelled as in the
# data.gov.sg ACRA datasets. The list is in the 21 November 2026 entry from issue #138 under
# Deviations in research/tampines/prereg.md. A closure is a final status: the business no longer exists.
ACRA_CLOSED = {
    "Struck Off",
    "Struck Off (Early Dissolution)",
    "Struck Off (Early Dissolution - simplified winding up)",
    "Removed (Dissolved)",
    "Ceased Registration",
    "Terminated",
    "Cancelled",
    "Cancelled (Non-Renewal)",
}
ACRA_CLOSED_PREFIX = "Dissolved"  # "Dissolved", "Dissolved - Members Voluntary Winding Up", and so on
# Not closures: the business still exists, or the status can still change back.
ACRA_OPEN = {
    "Live",
    "Live Company",
    "Gazetted To Be Struck Off",
    "Registration expired and has not been renewed",
    "Ceased Registration (Transferred to Singapore)",
}
ACRA_OPEN_PREFIX = "In Liquidation"


def acra_closure_kind(status: str) -> str:
    """Return "closed" for a final ACRA status, "open" for a known other status, else "unknown"."""
    if status in ACRA_CLOSED or status.startswith(ACRA_CLOSED_PREFIX):
        return "closed"
    if status in ACRA_OPEN or status.startswith(ACRA_OPEN_PREFIX):
        return "open"
    return "unknown"


def acra_status(rows: list[dict[str, str]]) -> dict[str, str]:
    ACRA_FAILED.clear()
    chosen = rows
    if not chosen:
        return {}
    ids = acra_dataset_ids()
    out = {}
    for r in chosen:
        letter = r["entity_name"][:1].upper()
        ds = ids.get(letter if letter.isalpha() else "Others", ids.get("Others"))
        q = urllib.parse.urlencode({"resource_id": ds, "filters": json.dumps({"uen": r["uen"]})})
        try:
            records = get_json(f"https://data.gov.sg/api/action/datastore_search?{q}")["result"]["records"]
            if records == []:
                raise ValueError("no matching record; closure unresolved")
            if not isinstance(records, list) or len(records) != 1 or not isinstance(records[0], dict):
                raise ValueError("expected a single matching record; closure unresolved")
            status = records[0].get("entity_status_description")
            if not isinstance(status, str) or not status.strip():
                raise ValueError("missing or invalid status; closure unresolved")
        except Exception as e:
            print(f"  ACRA {r['uen']}: {e}", file=sys.stderr)
            ACRA_FAILED.append(r["place_id"])
            continue
        if status == r["status"]:
            continue
        kind = acra_closure_kind(status)
        if kind == "closed":
            out[r["place_id"]] = f"ACRA {r['status']} -> {status}"
        elif kind == "open":
            print(f"  ACRA {r['uen']}: status {status!r} is not a closure", file=sys.stderr)
        else:
            print(f"  ACRA {r['uen']}: unknown status {status!r}, not counted as a closure; review it", file=sys.stderr)
    return out


def osm_status(rows: list[dict[str, str]]) -> dict[str, str]:
    out = {}
    for r in rows:
        url = f"https://api.openstreetmap.org/api/0.6/{r['osm_type']}/{r['osm_id']}.json"
        try:
            el = get_json(url)["elements"][0]
        except urllib.error.HTTPError as e:
            if e.code == 410:
                out[r["place_id"]] = "OSM element deleted"
            continue
        except Exception as e:
            print(f"  OSM {r['osm_type']}/{r['osm_id']}: {e}", file=sys.stderr)
            continue
        tags = el.get("tags", {})
        if any(k.startswith(("disused:", "was:")) for k in tags):
            out[r["place_id"]] = "OSM disused/was prefix"
        elif tags.get("name", "") != r["osm_name"]:
            out[r["place_id"]] = f"OSM name {r['osm_name']!r} -> {tags.get('name', '')!r}"
    return out


def main() -> None:
    places = guides.load_places()
    forecasts = read(RES / "forecasts.tsv")
    if not forecasts:
        sys.exit("no frozen forecasts yet")
    known = {u["url"] for u in guides.read_urls()[0]} | {r["url"] for r in read(RES / "new_articles.tsv")}
    fresh = new_articles(places, known)
    append(RES / "new_articles.tsv", ["seen", "outlet", "url", "published", "title", "scope", "sponsored", "named", "in_scope"], fresh)
    rows = read(RES / "new_articles.tsv")
    scores = score_articles(rows, forecasts)

    closed = {}
    closed.update(osm_status(read(RAW / "osm.tsv")))
    for pid, why in acra_status(read(RES / "derived/acra_watch.tsv")).items():
        closed[pid] = f"{closed[pid]}; {why}" if pid in closed else why
    prev = {r["id"]: r for r in read(RES / "status.tsv")}
    status_rows = []
    for p in places:
        why = closed.get(p["id"]) or prev.get(p["id"], {}).get("evidence", "")
        status_rows.append([p["id"], p["name"], why, first_seen(prev.get(p["id"], {}), why, TODAY)])
    with (RES / "status.tsv").open("w", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(["id", "name", "evidence", "first_seen"])
        w.writerows(status_rows)
    if TODAY >= END:
        scored = [f for f in forecasts if f["target"] == "closed_by" and f["id"] not in CLOSED_BEFORE_FREEZE]
        dates = read_event_dates(RES / "closure-dates-reviewed.tsv", {f["id"] for f in scored})
        y, waiting = settle([f["id"] for f in scored], {r[0]: (r[2], r[3]) for r in status_rows}, dates, END)
        if waiting:
            scores.append([TODAY, "closed_by", len(waiting), "", "", "", f"awaiting reviewed closure dates for: {' '.join(waiting)}"])
        else:
            pairs = [(float(f["p_model"]), y[f["id"]]) for f in scored]
            base = [(float(f["p_baseline"]), y[f["id"]]) for f in scored]
            scores.append([TODAY, "closed_by", len(pairs), *score_line(pairs, base), "resolved"])
    else:
        scores.append([TODAY, "closed_by", sum(1 for r in status_rows if r[2]), "", "", "", f"places with closure evidence so far; ACRA lookups failed this run: {len(ACRA_FAILED)}; resolves {END}"])

    mf = [f for f in forecasts if f["target"] == "michelin_next"]
    selection = read_selection(RES / "michelin-2027-reviewed.json", 2027, {f["id"] for f in mf})
    if selection is not None:
        listed, sources = selection
        pairs = [(float(f["p_model"]), int(f["id"] in listed)) for f in mf]
        base = [(float(f["p_baseline"]), int(f["id"] in listed)) for f in mf]
        scores.append([TODAY, "michelin_next", len(pairs), *score_line(pairs, base), f"from {' '.join(sources)}; Tampines entries: {' '.join(sorted(listed)) or 'none'}"])
    else:
        scores.append([TODAY, "michelin_next", 0, "", "", "", "awaiting reviewed 2027 Bib Gourmand and star lists"])
    append(RES / "scores.tsv", ["run", "target", "n", "brier_model", "brier_baseline", "skill", "note"], scores)
    for s in scores:
        print("\t".join(str(x) for x in s))


if __name__ == "__main__":
    main()

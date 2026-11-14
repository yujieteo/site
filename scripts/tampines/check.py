"""Monthly check: resolve and score the frozen forecasts in research/tampines/forecasts.tsv.

    uv run --no-project --with beautifulsoup4 python scripts/tampines/check.py

It looks for:
1. new articles from outlets with a WordPress search API (Eatbook, Seth Lui, Daniel Food Diary,
   ieatishootipost) published from 2026-11-16, gives each a scope by a fixed rule, and scores the
   named_by forecasts for the places in that scope;
2. ACRA status changes for the matched entities;
3. OpenStreetMap changes for the matched elements (deleted, renamed, or a disused:/was: prefix);
4. a 2027 MICHELIN Guide Singapore Bib Gourmand list.

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
import urllib.parse
import urllib.request
from datetime import date
from pathlib import Path

from bs4 import BeautifulSoup

sys.path.insert(0, str(Path(__file__).parent))
import guides  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
RES = ROOT / "research/tampines"
RAW = RES / "raw"
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


def get_json(url: str):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=40) as r:
        return json.loads(r.read())


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


def new_articles(places, known: set[str]) -> list[list]:
    pats = guides.build_patterns(places)
    _, areas = guides.read_urls()
    out = []
    for outlet, host in WP.items():
        try:
            posts = get_json(f"https://{host}/wp-json/wp/v2/posts?search=tampines&after={START}T00:00:00&per_page=50&_fields=date,link,title")
        except Exception as e:  # an outlet that is down is skipped this month
            print(f"  {outlet}: {e}", file=sys.stderr)
            continue
        for post in posts:
            url, day = post["link"], post["date"][:10]
            if url in known or day > END:
                continue
            title = BeautifulSoup(post["title"]["rendered"], "html.parser").get_text()
            html, _ = guides.fetch(url)
            text = guides.body_text(BeautifulSoup(html, "html.parser")) if html else ""
            sponsored, _ = guides.sponsorship(text)
            scope = scope_of(title)
            named = guides.find_mentions(text, places, pats, url, scope or "all") if text else {}
            inside = [p["id"] for p in places if scope and guides.in_scope(p, scope, areas)]
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


def acra_status(rows: list[dict[str, str]]) -> dict[str, str]:
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
            rec = get_json(f"https://data.gov.sg/api/action/datastore_search?{q}")["result"]["records"]
        except Exception as e:
            print(f"  ACRA {r['uen']}: {e}", file=sys.stderr)
            continue
        status = rec[0]["entity_status_description"] if rec else "not found"
        if status != r["status"]:
            out[r["place_id"]] = f"ACRA {r['status']} -> {status}"
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
        except Exception:
            continue
        tags = el.get("tags", {})
        if any(k.startswith(("disused:", "was:")) for k in tags):
            out[r["place_id"]] = "OSM disused/was prefix"
        elif tags.get("name", "") != r["osm_name"]:
            out[r["place_id"]] = f"OSM name {r['osm_name']!r} -> {tags.get('name', '')!r}"
    return out


def michelin_2027(places) -> tuple[bool, set[str], str]:
    """Look for coverage of a 2027 Singapore Bib Gourmand list on the outlets' search APIs."""
    pats = guides.build_patterns(places)
    for outlet, host in WP.items():
        try:
            posts = get_json(f"https://{host}/wp-json/wp/v2/posts?search=bib%20gourmand%202027&per_page=10&_fields=link,title")
        except Exception:
            continue
        for post in posts:
            title = BeautifulSoup(post["title"]["rendered"], "html.parser").get_text().lower()
            if "bib gourmand" in title and "2027" in title and "singapore" in title:
                html, _ = guides.fetch(post["link"])
                text = guides.body_text(BeautifulSoup(html, "html.parser"))
                # The page names stalls across Singapore; a name counts only near a Tampines address.
                found = set(guides.find_mentions(text, places, pats, post["link"], "all"))
                low = guides.norm(text)
                near = {pid for pid in found if any(abs(m.start() - t.start()) < 300 for m in pats[pid].finditer(low) for t in re.finditer(r"tampines|\b52\d{4}\b", low))}
                return True, near, post["link"]
    return False, set(), ""


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
        status_rows.append([p["id"], p["name"], why, prev.get(p["id"], {}).get("first_seen", TODAY) if why else ""])
    with (RES / "status.tsv").open("w", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(["id", "name", "evidence", "first_seen"])
        w.writerows(status_rows)
    if TODAY >= END:
        ev = {r[0]: r[2] for r in status_rows}
        pairs = [(float(f["p_model"]), int(bool(ev.get(f["id"])))) for f in forecasts if f["target"] == "closed_by"]
        base = [(float(f["p_baseline"]), int(bool(ev.get(f["id"])))) for f in forecasts if f["target"] == "closed_by"]
        scores.append([TODAY, "closed_by", len(pairs), *score_line(pairs, base), "resolved"])
    else:
        scores.append([TODAY, "closed_by", sum(1 for r in status_rows if r[2]), "", "", "", f"places with closure evidence so far; resolves {END}"])

    seen, listed, source = michelin_2027(places)
    if seen:
        mf = [f for f in forecasts if f["target"] == "michelin_next"]
        pairs = [(float(f["p_model"]), int(f["id"] in listed)) for f in mf]
        base = [(float(f["p_baseline"]), int(f["id"] in listed)) for f in mf]
        scores.append([TODAY, "michelin_next", len(pairs), *score_line(pairs, base), f"from {source}; Tampines entries: {' '.join(sorted(listed)) or 'none'}"])
    else:
        scores.append([TODAY, "michelin_next", 0, "", "", "", "2027 list not found yet"])
    append(RES / "scores.tsv", ["run", "target", "n", "brier_model", "brier_baseline", "skill", "note"], scores)
    for s in scores:
        print("\t".join(str(x) for x in s))


if __name__ == "__main__":
    main()

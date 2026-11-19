"""Turn the raw files in research/tampines/raw into model inputs, applying the coded filters.

Every exclusion is a rule here, counted in the filter report written next to the outputs.
"""
from __future__ import annotations

import csv
import re
from collections import Counter, defaultdict
from collections.abc import Set
from dataclasses import dataclass
from datetime import date
from pathlib import Path
from urllib.parse import urlsplit

import numpy as np

from dishtypes import TYPES, dish_type, is_buffet
from model import KINDS, Inputs
from places import spreads

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / "research/tampines/raw"
FIT_DAY = date(2026, 11, 15)
DELIVERY = ("foodpanda.", "grab.com", "deliveroo.", "food.grab")
CPI_SERIES = {"h": "hawker", "r": "restaurant", "c": "restaurant", "f": "fastfood"}


def areas() -> dict[str, set[str]]:
    """Sub-area place lists, kept as `# area=NAME: p000-p019 p095 ...` comments in guide_urls.tsv."""
    out: dict[str, set[str]] = {}
    path = Path(__file__).with_name("guide_urls.tsv")
    for line in path.read_text().splitlines() if path.exists() else []:
        m = re.match(r"# area=(\w+):\s*(.*)", line)
        if not m:
            continue
        ids: set[str] = set()
        for token in m[2].split():
            if "-" in token:
                lo, hi = (int(t[1:]) for t in token.split("-"))
                ids |= {f"p{i:03d}" for i in range(lo, hi + 1)}
            else:
                ids.add(token)
        out[m[1]] = ids
    return out


AREAS = areas()


def read(name: str) -> list[dict[str, str]]:
    path = RAW / name
    if not path.exists():
        return []
    with path.open(newline="") as f:
        return [row for row in csv.DictReader(f, delimiter="\t") if not (row.get(next(iter(row)), "") or "").startswith("#")]


@dataclass
class Place:
    id: str
    name: str
    kind: str
    cuisine: str
    venue: str
    place: str
    unit: str
    status: str
    typical: float
    shared: int
    form: str
    bib: int


def places() -> list[Place]:
    out = []
    for r in read("places.tsv"):
        out.append(Place(r["id"], r["name"], r["kind"], r["cuisine"], r["venue"], r["place"], r["unit"], r["status"], float(r["typical_sgd"]), int(r["shared"]), r["form"], int(r["bib_2026"])))
    return out


def month_of(stamp: str) -> str:
    parts = stamp.split("-")
    if len(parts) == 1:
        return f"{parts[0]}-06"
    return f"{parts[0]}-{parts[1]}"


def cpi() -> tuple[dict[tuple[str, str], float], str]:
    table = {(r["series"], r["month"]): float(r["index"]) for r in read("cpi.tsv")}
    latest = max(month for _, month in table)
    return table, latest


def gst_fixes() -> dict[tuple[str, str, str], float]:
    return {(r["place_name"], r["dish"], r["date"]): float(r["corrected_price"]) for r in read("gst2023.tsv") if r["mark"] in ("++", "+")}


def items(report: Counter, omit_domains: Set[str] = frozenset()) -> list[tuple[int, int, float, str, str, float]]:
    """(place index, type index, log deflated price, dish, date, deflated price) for every compared row that passes."""
    table, latest = cpi()
    fixes = gst_fixes()
    out = []
    for p, x in enumerate(spreads()):
        report["rows set aside on the page (other)"] += len(x.get("other") or [])
        for dish, price, stamp, url in x["items"]:
            report["compared rows read"] += 1
            if omit_domains and urlsplit(url).hostname.removeprefix("www.") in omit_domains:
                report["dropped: held-out publication"] += 1
                continue
            if stamp == "" or stamp < "2023":
                report["dropped: undated or before 2023"] += 1
                continue
            if any(host in url for host in DELIVERY):
                report["dropped: delivery source"] += 1
                continue
            if price <= 0:
                report["dropped: no price"] += 1
                continue
            if is_buffet(dish):
                report["dropped: buffet or sharing platter, not a main"] += 1
                continue
            fixed = fixes.get((x["n"], dish, stamp))
            if fixed is not None and abs(fixed - price) > 1e-9:
                report["GST corrected (2023, 8%)"] += 1
                price = fixed
            series = CPI_SERIES[x["k"]]
            month = min(month_of(stamp), latest)
            base = table.get((series, month))
            if base is None:
                report["dropped: no CPI for month"] += 1
                continue
            real = price * table[(series, latest)] / base
            out.append((p, TYPES.index(dish_type(dish, x["cu"])), float(np.log(real)), dish, stamp, real))
            report["rows used"] += 1
    return out


def scope_filter(scope: str):
    if scope.startswith("single="):
        return None
    rules = [] if scope in ("", "all") else [part.split("=", 1) for part in scope.split(";")]

    def keep(pl: Place) -> bool:
        for key, value in rules:
            allowed = value.split(",")
            if key == "area":
                if not any(pl.id in AREAS.get(v, set()) for v in allowed):
                    return False
            elif getattr(pl, key) not in allowed:
                return False
        return True

    return keep


def guide_pairs(pls: list[Place], report: Counter) -> tuple[list[str], list[tuple[int, int, int]], dict]:
    articles = read("articles.tsv")
    named = defaultdict(set)
    for m in read("mentions.tsv"):
        named[m["article_id"]].add(m["place_id"])
    index = {pl.id: i for i, pl in enumerate(pls)}
    scope: dict[str, set[int]] = defaultdict(set)
    hit: dict[str, set[int]] = defaultdict(set)
    for a in articles:
        report["articles read"] += 1
        if a["sponsored"] == "1":
            report["articles dropped: sponsored"] += 1
            continue
        keep = scope_filter(a["scope"])
        if keep is None:
            report["articles kept but not modelled: single place"] += 1
            continue
        report["articles modelled"] += 1
        inside = {i for i, pl in enumerate(pls) if keep(pl)}
        found = {index[pid] for pid in named[a["article_id"]] if pid in index}
        report["mentions outside the stated scope (treated as in scope)"] += len(found - inside)
        scope[a["outlet"]] |= inside | found
        hit[a["outlet"]] |= found
    outlets = sorted(o for o in scope if scope[o])
    pairs = [(p, g, int(p in hit[o])) for g, o in enumerate(outlets) for p in sorted(scope[o])]
    # Michelin: one item, all places, the 2026 list.
    lists = {r["year"]: r for r in read("michelin_lists.tsv")}
    meta = {"michelin_2026_checked": lists.get("2026", {}).get("checked") == "1"}
    if meta["michelin_2026_checked"]:
        listed = {r["place_id"] for r in read("michelin.tsv") if r["year"] == "2026" and r["distinction"] in ("bib", "star")}
        g = len(outlets)
        outlets.append("Michelin")
        pairs += [(i, g, int(pl.id in listed)) for i, pl in enumerate(pls)]
    else:
        report["Michelin 2026 not fully checked: item left out"] += 1
    return outlets, pairs, meta


def years_since(day: str) -> float | None:
    m = re.match(r"(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?", day or "")
    if not m:
        return None
    start = date(int(m[1]), int(m[2] or 6), int(m[3] or 15))
    return max((FIT_DAY - start).days / 365.25, 0.25)


GENERIC = set("pte ltd llp limited co company restaurant restaurants kitchen cafe café food foods house eating enterprise enterprises trading the and of tampines sg singapore group holdings management f&b fnb seafood western thai indian express bakery creamery coffee shop stall delights concept concepts".split())


def tokens(name: str) -> set[str]:
    words = re.findall(r"[a-z0-9']+", name.lower().replace("&", " "))
    clean = {w.strip("'") for w in words}
    return {w[:-1] if w.endswith("s") and len(w) > 3 else w for w in clean if len(w) > 1 and w not in GENERIC}


def same_name(a: str, b: str) -> bool:
    """One name's distinctive words all appear in the other's."""
    ta, tb = tokens(a), tokens(b)
    return bool(ta) and bool(tb) and (ta <= tb or tb <= ta)


def acra_matches(pls: list[Place], report: Counter | None = None) -> dict[str, list[dict[str, str]]]:
    """Valid ACRA matches under the tightened rule (see the 15 November deviation in prereg.md):
    same postal code (from the collection), a food and beverage SSIC (56xxx), and the same name
    by distinctive words. Unit-only matches do not count. Ceased entities stay: an earlier
    registration under the same name at this postal code dates the place."""
    by_id = {pl.id: pl for pl in pls}
    out: dict[str, list[dict[str, str]]] = defaultdict(list)
    for r in read("acra.tsv"):
        pl = by_id.get(r["place_id"])
        if pl is None:
            continue
        if not r.get("ssic", "").startswith("56"):
            if report is not None:
                report["ACRA candidates dropped: not food and beverage"] += 1
            continue
        if same_name(pl.name, r["entity_name"]):
            out[pl.id].append(r)
        elif report is not None:
            report["ACRA candidates dropped: different name"] += 1
    return out


def survival(pls: list[Place], report: Counter, omit_outlet: str | None = None) -> tuple[list[tuple[int, float]], list[tuple[int, float]], np.ndarray]:
    acra = acra_matches(pls, report)
    floors: dict[str, list[float]] = defaultdict(list)
    for r in read("osm.tsv"):
        if float(r.get("name_score") or 0) < 0.8:
            continue
        y = years_since(r.get("first_version", "")[:10])
        if y:
            floors[r["place_id"]].append(y)
    published = {a["article_id"]: a["published"] for a in read("articles.tsv") if a["outlet"] != omit_outlet}
    for m in read("mentions.tsv"):
        y = years_since(published.get(m["article_id"], ""))
        if y:
            floors[m["place_id"]].append(y)
    exact, cens = [], []
    age_now = np.full(len(pls), np.nan)
    for i, pl in enumerate(pls):
        if pl.status == "moved":
            report["survival: moved, left out"] += 1
            continue
        if pl.status == "closed":
            report["survival: closed before the study, left out"] += 1
            continue
        ages = [y for r in acra.get(pl.id, []) if (y := years_since(r["registration_date"]))]
        floor = max(floors[pl.id], default=0.0)
        if ages and max(ages) < floor:
            # A dated guide shows the place before its earliest registration: a re-registration.
            report[f"survival: ACRA date earlier than a guide, kept as a lower bound ({pl.kind})"] += 1
            floors[pl.id].append(max(ages))
            ages = []
        if ages:
            y = max(ages)
            exact.append((i, float(np.log(y))))
            age_now[i] = y
            report[f"survival: ACRA date ({pl.kind})"] += 1
        elif floors[pl.id]:
            f = max(floors[pl.id])
            cens.append((i, float(np.log(f))))
            age_now[i] = f
            report[f"survival: lower bound only ({pl.kind})"] += 1
        else:
            report[f"survival: no evidence ({pl.kind})"] += 1
    return exact, cens, age_now


def write_acra_watch(pls: list[Place]) -> None:
    """The live valid match per place, for the monthly closure check."""
    rows = []
    for pid, ms in sorted(acra_matches(pls).items()):
        live = [r for r in ms if r["status"].startswith("Live")]
        if live:
            best = max(live, key=lambda r: (float(r["name_score"] or 0), r["registration_date"]))
            rows.append([pid, best["uen"], best["entity_name"], best["status"], best["registration_date"]])
    out = ROOT / "research/tampines/derived/acra_watch.tsv"
    out.parent.mkdir(parents=True, exist_ok=True)
    with out.open("w", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(["place_id", "uen", "entity_name", "status", "registration_date"])
        w.writerows(rows)


def assemble(*, omit_menu_and_age_from: str | None = None, write_watch: bool = True) -> tuple[Inputs, dict]:
    report: Counter = Counter()
    pls = places()
    domains = {urlsplit(a["url"]).hostname.removeprefix("www.") for a in read("articles.tsv")
               if a["outlet"] == omit_menu_and_age_from}
    rows = items(report, domains)
    outlets, pairs, meta = guide_pairs(pls, report)
    exact, cens, age_now = survival(pls, report, omit_menu_and_age_from)
    if write_watch:
        write_acra_watch(pls)
    kind = np.array([KINDS.index(pl.kind) for pl in pls])

    def col(seq, j, dtype):
        return np.array([r[j] for r in seq], dtype=dtype)

    data = Inputs(
        n_places=len(pls), kind=kind, outlets=outlets,
        pair_place=col(pairs, 0, int), pair_outlet=col(pairs, 1, int), pair_named=col(pairs, 2, int),
        surv_place=col(exact, 0, int), surv_log=col(exact, 1, float),
        cens_place=col(cens, 0, int), cens_log=col(cens, 1, float),
        item_place=col(rows, 0, int), item_type=col(rows, 1, int), item_log=col(rows, 2, float),
        types=list(TYPES),
    )
    meta.update({"places": pls, "rows": rows, "report": report, "age_now": age_now, "cpi_month": cpi()[1]})
    return data, meta


if __name__ == "__main__":
    data, meta = assemble()
    for key, value in sorted(meta["report"].items()):
        print(f"{value:5d}  {key}")
    print("outlets", data.outlets, "pairs", len(data.pair_named), "named", int(data.pair_named.sum()) if len(data.pair_named) else 0)
    print("CPI month", meta["cpi_month"], "items", len(data.item_log), "exact ages", len(data.surv_log), "floors", len(data.cens_log))

"""Survival inputs for the Tampines food study (prereg.md, Inputs item 3).

Reproduces, from public APIs only:
  research/tampines/raw/postal.tsv           OneMap postal code, block, road, level, unit per place
  research/tampines/raw/acra.tsv             ACRA entities matched to each place (pre-registered rule)
  research/tampines/raw/osm.tsv              matching OpenStreetMap element and its version history
  research/tampines/raw/acra_tampines_fnb.tsv every ACRA entity in Tampines with primary SSIC 56xxx
  research/tampines/raw/survival_rates.tsv   closure figures quoted in README-survival.md

Run:  SURVIVAL_CACHE=/some/cache/dir uv run --with rapidfuzz python scripts/tampines/survival.py
All downloads and raw API responses go to the cache directory, never into the repo.
Re-running reuses the cache; delete it to refetch.

Sources: OneMap (SLA), ACRA Information on Corporate Entities and URA Master Plan 2025 planning area
boundaries (data.gov.sg, Open Data Licence), OpenStreetMap API (ODbL).
"""
import csv, json, math, os, re, sys, time, urllib.error, urllib.parse, urllib.request
from collections import Counter, defaultdict
from datetime import date
from pathlib import Path

from rapidfuzz import fuzz, utils

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / "research/tampines/raw"
CACHE = Path(os.environ.get("SURVIVAL_CACHE", Path.home() / ".cache/tampines-survival"))
UA = "tampines-food-study/1.0 (research script; python-urllib)"
ACRA_COLLECTION = "https://api-production.data.gov.sg/v2/public/api/collections/2/metadata"
ONEMAP = "https://www.onemap.gov.sg/api/common/elastic/search"
OSM = "https://api.openstreetmap.org/api/0.6"
URA_PLANNING_AREAS = "d_2cc750190544007400b2cfd5d7f53209"  # Master Plan 2025 Planning Area Boundary (No Sea)
SNAPSHOT = None  # set from the ACRA metadata lastUpdatedAt
NAME_MIN = 0.6
OSM_RADIUS_M = 150
FOOD_AMENITY = {"restaurant", "fast_food", "cafe", "food_court", "ice_cream", "bar", "pub", "biergarten"}
FOOD_SHOP = {"bakery", "pastry", "confectionery", "coffee", "tea", "beverages", "deli", "chocolate", "dairy", "bubble_tea"}
LIVE = {"Live", "Live Company", "Registered"}
NOT_A_CLOSURE = {"Converted To LLP", "Amalgamated", "Removed (Applied To Be Revoked)", "Suspended"}  # left out of the rates

_last_call = defaultdict(float)


def log(*a):
    print(*a, file=sys.stderr, flush=True)


def polite(host, gap):
    wait = _last_call[host] + gap - time.monotonic()
    if wait > 0:
        time.sleep(wait)
    _last_call[host] = time.monotonic()


def fetch(url, cache_file=None, gap=0.5, want_json=True, tries=8):
    """GET with on-disk cache, a minimum gap per host and exponential back-off on 429/5xx/garbled replies."""
    if cache_file is not None and cache_file.exists():
        data = cache_file.read_bytes()
        return json.loads(data) if want_json else data
    host = urllib.parse.urlparse(url).netloc
    delay = 2.0
    for attempt in range(tries):
        polite(host, gap)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=120) as r:
                data = r.read()
            out = json.loads(data) if want_json else data
            if cache_file is not None:
                cache_file.parent.mkdir(parents=True, exist_ok=True)
                cache_file.write_bytes(data)
            return out
        except urllib.error.HTTPError as e:
            if e.code in (404, 410) and not want_json:
                raise
            if e.code in (404, 410):
                return None
            if e.code not in (429, 500, 502, 503, 504):
                raise
            ra = e.headers.get("Retry-After")
            log(f"  HTTP {e.code} from {host}; backing off {ra or delay}s")
            time.sleep(float(ra) if ra and ra.isdigit() else delay)
        except (json.JSONDecodeError, urllib.error.URLError, TimeoutError, ConnectionError) as e:
            log(f"  {type(e).__name__} from {host}; backing off {delay}s")
            time.sleep(delay)
        delay = min(delay * 2, 120)
    raise RuntimeError(f"giving up on {url}")


def score(a, b):
    """Token-set name similarity in [0, 1], case and punctuation folded (rapidfuzz default_process)."""
    if not a or not b:
        return 0.0
    return fuzz.token_set_ratio(a, b, processor=utils.default_process) / 100.0


def metres(lat1, lon1, lat2, lon2):
    p = math.pi / 180
    x = (lon2 - lon1) * p * math.cos((lat1 + lat2) / 2 * p)
    y = (lat2 - lat1) * p
    return 6371000 * math.hypot(x, y)


def write_tsv(path, header, rows):
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(header)
        w.writerows(rows)
    log(f"{len(rows)} rows -> {path.relative_to(ROOT)}")


def places():
    with (RAW / "places.tsv").open(encoding="utf-8") as f:
        return list(csv.DictReader(f, delimiter="\t"))


# ---------------------------------------------------------------- units

def norm_part(s):
    s = s.strip().upper()
    m = re.fullmatch(r"([A-Z]*)0*(\d+)([A-Z]*)", s)
    return f"{m.group(1)}{int(m.group(2))}{m.group(3)}" if m else s


def parse_unit(u):
    """'#01-39' -> ('01', ['39']); '#05-05/06/07 (x)' -> ('05', ['05','06','07']); '#B1-K2 to K3' -> ('B1', ['K2','K3'])."""
    m = re.search(r"#?\s*(B?\d+)\s*-\s*([A-Z]*\d+[A-Z]?(?:\s*(?:/|to|&|,)\s*[A-Z]*\d+[A-Z]?)*)", u or "", re.I)
    if not m:
        return "", []
    level = m.group(1).upper()
    units = []
    for x in (x.upper() for x in re.split(r"\s*(?:/|to|&|,)\s*", m.group(2), flags=re.I) if x):
        prev = re.match(r"[A-Z]+", units[-1]) if units else None
        units.append(prev.group(0) + x if prev and x.isdigit() else x)  # 'K17/18' -> K17, K18
    return level, units


# ---------------------------------------------------------------- OpenStreetMap

def osm_map(lat, lon, half=0.0014):
    """All OSM data in a box of about 2 x 155 m around a point (OSM API map call)."""
    bbox = f"{lon - half:.5f},{lat - half:.5f},{lon + half:.5f},{lat + half:.5f}"
    return fetch(f"{OSM}/map.json?bbox={bbox}", CACHE / "osm/map" / f"{bbox}.json", gap=1.5)


def element_coords(data):
    nodes = {e["id"]: (e["lat"], e["lon"]) for e in data["elements"] if e["type"] == "node" and "lat" in e}
    out = {}
    for e in data["elements"]:
        if e["type"] == "node" and "lat" in e:
            out[("node", e["id"])] = (e["lat"], e["lon"])
        elif e["type"] == "way":
            pts = [nodes[n] for n in e.get("nodes", []) if n in nodes]
            if pts:
                out[("way", e["id"])] = (sum(p[0] for p in pts) / len(pts), sum(p[1] for p in pts) / len(pts))
    return out


def is_food(tags):
    for k, v in tags.items():
        base = k.split(":")[-1]
        if base == "amenity" and v in FOOD_AMENITY:
            return True
        if base == "shop" and v in FOOD_SHOP:
            return True
    return "cuisine" in tags


def osm_names(tags):
    return [v for k, v in tags.items() if k in ("name", "name:en", "brand", "old_name", "was:name", "disused:name", "official_name", "alt_name")]


def tampines_polygon():
    """URA Master Plan 2025 planning area boundary (no sea), data.gov.sg, as rings of (lat, lon)."""
    path = CACHE / "ura/mp2025_planning_area.geojson"
    if not path.exists():
        base = f"https://api-open.data.gov.sg/v1/public/api/datasets/{URA_PLANNING_AREAS}"
        fetch(f"{base}/initiate-download", gap=3)
        for _ in range(60):
            d = fetch(f"{base}/poll-download", gap=3)["data"]
            if d.get("url"):
                break
            time.sleep(5)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(fetch(d["url"], want_json=False))
    feats = [f for f in json.loads(path.read_text())["features"] if f["properties"].get("PLN_AREA_N") == "TAMPINES"]
    assert len(feats) == 1, "expected one TAMPINES planning area"
    geom = feats[0]["geometry"]
    polys = [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]
    return [[(pt[1], pt[0]) for pt in ring] for poly in polys for ring in poly]


def inside(rings, lat, lon):
    hit = False
    for ring in rings:
        for (y1, x1), (y2, x2) in zip(ring, ring[1:]):
            if (y1 > lat) != (y2 > lat) and lon < (x2 - x1) * (lat - y1) / (y2 - y1) + x1:
                hit = not hit
    return hit


# ---------------------------------------------------------------- OneMap

def onemap(q, pages=3):
    results = []
    for page in range(1, pages + 1):
        url = f"{ONEMAP}?" + urllib.parse.urlencode({"searchVal": q, "returnGeom": "Y", "getAddrDetails": "Y", "pageNum": page})
        key = re.sub(r"[^A-Za-z0-9]+", "_", q).strip("_")[:80] + f"_p{page}.json"
        d = fetch(url, CACHE / "onemap" / key, gap=1.0)
        results += d.get("results", [])
        if page >= int(d.get("totalNumPages") or 1):
            break
    return results


def nearest_onemap(q, lat, lon, max_m):
    best = None
    for r in onemap(q):
        if r.get("POSTAL") in (None, "", "NIL"):
            continue
        d = metres(lat, lon, float(r["LATITUDE"]), float(r["LONGITUDE"]))
        if d <= max_m and (best is None or d < best[0]):
            best = (d, r)
    return best


def stage_postal(rows):
    """One OneMap lookup per distinct (place, lat, lon); results nearest the place's coordinates win.

    Fallbacks when the place string is a name OneMap does not index: (1) the nearest OSM element within
    60 m carrying addr:housenumber + addr:street, looked up again in OneMap; (2) another place with
    identical coordinates that OneMap resolved directly. Places are processed in file order."""
    out, memo = [], {}
    for p in rows:
        lat, lon = float(p["lat"]), float(p["lon"])
        k = (p["place"], p["lat"], p["lon"])
        if k not in memo:
            q, hit, how = p["place"], nearest_onemap(p["place"], lat, lon, 150), "onemap:place"
            if hit is None:
                data = osm_map(lat, lon)
                coords = element_coords(data)
                cands = []
                for e in data["elements"]:
                    t = e.get("tags", {})
                    c = coords.get((e["type"], e["id"]))
                    if c and t.get("addr:housenumber") and t.get("addr:street"):
                        cands.append((metres(lat, lon, *c), f'{t["addr:housenumber"]} {t["addr:street"]}'))
                for d, addr in sorted(cands):
                    if d > 60:
                        break
                    hit2 = nearest_onemap(addr, lat, lon, 150)
                    if hit2:
                        q, hit, how = addr, hit2, f"osm-address({d:.0f}m)->onemap"
                        break
            if hit is None:  # same coordinates as a place resolved directly by OneMap
                for k2, v2 in memo.items():
                    if k2[1:] == k[1:] and v2[1] is not None and v2[2] == "onemap:place":
                        q, hit, how = v2[0], v2[1], f"same-coordinates-as:{k2[0]}"
                        break
            memo[k] = (q, hit, how)
        q, hit, how = memo[k]
        level, units = parse_unit(p["unit"])
        if hit:
            d, r = hit
            res = f'{how}: {r["SEARCHVAL"]} | {r["ADDRESS"]} | {d:.0f}m'
            out.append([p["id"], r["POSTAL"], r["BLK_NO"], r["ROAD_NAME"], level, "/".join(units), q, res])
        else:
            out.append([p["id"], "", "", "", level, "/".join(units), q, "no OneMap result within 150 m"])
    write_tsv(RAW / "postal.tsv", ["place_id", "postal", "block", "road", "level", "unit", "onemap_query", "onemap_result"], out)
    return out


# ---------------------------------------------------------------- ACRA

def acra_files():
    global SNAPSHOT
    meta = fetch(ACRA_COLLECTION, CACHE / "acra/collection.json")["data"]["collectionMetadata"]
    files = []
    for ds in meta["childDatasets"]:
        dmeta = fetch(f"https://api-production.data.gov.sg/v2/public/api/datasets/{ds}/metadata", CACHE / f"acra/{ds}.meta.json")["data"]
        SNAPSHOT = max(SNAPSHOT or "", dmeta["lastUpdatedAt"][:10])
        path = CACHE / f"acra/{ds}.csv"
        if not path.exists():
            base = f"https://api-open.data.gov.sg/v1/public/api/datasets/{ds}"
            fetch(f"{base}/initiate-download", gap=3)
            for _ in range(60):
                d = fetch(f"{base}/poll-download", gap=3)["data"]
                if d.get("status") == "DOWNLOAD_SUCCESS" and d.get("url"):
                    break
                time.sleep(5)
            else:
                raise RuntimeError(f"download of {ds} never became ready")
            log(f"  downloading {dmeta['name']} ({dmeta['datasetSize'] / 1e6:.0f} MB)")
            tmp = path.with_suffix(".part")
            req = urllib.request.Request(d["url"], headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=600) as r, tmp.open("wb") as f:
                while chunk := r.read(1 << 20):
                    f.write(chunk)
            tmp.rename(path)
        files.append((ds, dmeta["name"], path))
    return files


def acra_rows(postals, sectors):
    """Stream every ACRA CSV once; keep rows whose postal code is a place's or lies in the given sectors."""
    cache = CACHE / "acra/filtered.json"
    files = acra_files()
    key = {"postals": sorted(postals), "sectors": sorted(sectors), "files": [str(p.stat().st_size) for _, _, p in files]}
    if cache.exists():
        c = json.loads(cache.read_text())
        if c["key"] == key:
            return c["rows"], c["fields"], c["total"]
    keep, total, fields = [], 0, None
    for ds, name, path in files:
        with path.open(encoding="utf-8", newline="") as f:
            rd = csv.DictReader(f)
            fields = rd.fieldnames
            for r in rd:
                total += 1
                pc = (r.get("postal_code") or "").strip()
                if pc in postals or (len(pc) == 6 and pc[:2] in sectors):
                    r = {k: v for k, v in r.items() if v not in ("", "na", None) and not k.startswith(("uen_of_audit", "name_of_audit"))}
                    keep.append(r)
        log(f"  scanned {name}: {total} rows so far, {len(keep)} kept")
    cache.write_text(json.dumps({"key": key, "rows": keep, "fields": fields, "total": total}))
    return keep, fields, total


def is_live(status):
    return status in LIVE or status.startswith("Live")


def stage_acra(rows, postal_rows, acra):
    by_postal = defaultdict(list)
    for r in acra:
        by_postal[r.get("postal_code", "")].append(r)
    pinfo = {r[0]: r for r in postal_rows}
    out = []
    for p in rows:
        _, postal, _, _, level, unit, _, _ = pinfo[p["id"]]
        units = {norm_part(u) for u in unit.split("/") if u}
        cands = []
        for e in by_postal.get(postal, []) if postal else []:
            lv, un = e.get("level_no", ""), e.get("unit_no", "")
            unit_hit = bool(level and units and norm_part(lv) == norm_part(level) and norm_part(un) in units)
            s = score(e.get("entity_name", ""), p["name"])
            name_hit = s >= NAME_MIN
            if not (unit_hit or name_hit):
                continue
            rule = "unit+name" if unit_hit and name_hit else ("unit" if unit_hit else "name")
            cands.append((e, rule, s, unit_hit))
        # chosen: unit match, then live status, then similarity; ties -> F&B SSIC (56xxx), then latest registration
        cands.sort(key=lambda c: (c[3], is_live(c[0].get("entity_status_description", "")), c[2],
                                  c[0].get("primary_ssic_code", "").startswith("56"),
                                  c[0].get("registration_incorporation_date", "")), reverse=True)
        for i, (e, rule, s, _) in enumerate(cands):
            out.append([p["id"], e["uen"], e.get("entity_name", ""), e.get("entity_type_description", ""),
                        e.get("entity_status_description", ""), e.get("registration_incorporation_date", ""), "",
                        e.get("level_no", ""), e.get("unit_no", ""), e.get("postal_code", ""), rule, f"{s:.2f}",
                        1 if i == 0 else 0, e.get("primary_ssic_code", "")])
    write_tsv(RAW / "acra.tsv", ["place_id", "uen", "entity_name", "entity_type", "status", "registration_date", "status_date",
                                 "level_no", "unit_no", "postal", "match_rule", "name_score", "chosen", "ssic"], out)
    return out


def stage_fnb(acra, rings):
    """Tampines F&B universe: primary SSIC 56xxx, postal code geocoded (OneMap) inside the Tampines planning area."""
    fnb = [r for r in acra if r.get("primary_ssic_code", "").startswith("56") and len(r.get("postal_code", "")) == 6]
    # Which postal sectors does Tampines use? Geocode every distinct F&B postal code in sector 52, and an evenly
    # sample (first, middle, last) of every 3-digit prefix in the neighbouring sectors; a prefix with any sampled
    # code inside the polygon is geocoded in full.
    def geocode(pc):
        hits = [x for x in onemap(pc, pages=1) if x.get("POSTAL") == pc]
        return (float(hits[0]["LATITUDE"]), float(hits[0]["LONGITUDE"])) if hits else None
    by_prefix = defaultdict(list)
    for pc in sorted({r["postal_code"] for r in fnb}):
        by_prefix[pc[:3]].append(pc)
    geo = {}
    for pre, pcs in sorted(by_prefix.items()):
        todo = pcs if pre[:2] == "52" else sorted({pcs[0], pcs[len(pcs) // 2], pcs[-1]})
        for pc in todo:
            geo[pc] = geocode(pc)
        if pre[:2] != "52" and any(geo[pc] and inside(rings, *geo[pc]) for pc in todo):
            for pc in pcs:
                if pc not in geo:
                    geo[pc] = geocode(pc)
    fnb = [r for r in fnb if r["postal_code"] in geo]
    sector = defaultdict(Counter)
    for pc, c in geo.items():
        sector[pc[:2]]["ungeocoded" if c is None else ("in" if inside(rings, *c) else "out")] += 1
    out = []
    for r in fnb:
        c = geo[r["postal_code"]]
        if c is not None and inside(rings, *c):
            rule = "ssic56+postal-in-polygon"
        elif c is None and r["postal_code"][:2] == "52":
            rule = "ssic56+sector52-ungeocoded"
        else:
            continue
        out.append([r["uen"], r.get("entity_name", ""), r.get("entity_type_description", ""), r.get("entity_status_description", ""),
                    r.get("registration_incorporation_date", ""), "", r["postal_code"], r["primary_ssic_code"], rule])
    out.sort(key=lambda x: (x[4], x[0]))
    write_tsv(RAW / "acra_tampines_fnb.tsv", ["uen", "entity_name", "entity_type", "status", "registration_date", "status_date",
                                              "postal", "ssic", "rule"], out)
    return out, sector


def rates(fnb, snapshot):
    """What the snapshot supports: per registration cohort, the share no longer live at the snapshot, and the
    constant-hazard rate that fits those current-status observations (each entity observed once, alive or not)."""
    T = date.fromisoformat(snapshot)
    # SSIC 2020 classes, as the descriptions in the data itself label them
    kinds = {"all 56xxx": lambda s: True,
             "restaurant (56111 restaurants)": lambda s: s == "56111",
             "cafe (56112 cafes, coffee houses, snack bars)": lambda s: s == "56112",
             "fast food (56121 fast food outlets)": lambda s: s == "56121",
             "hawker (56140 food stalls)": lambda s: s == "56140",
             "coffee shop / food court operator (56122)": lambda s: s == "56122",
             "other (56123 kiosks, 56130 pubs, 56200 caterers)": lambda s: s in ("56123", "56130", "56200")}
    out = []
    for kname, kf in kinds.items():
        obs = []
        for r in fnb:
            reg = r[4]
            if not reg or not kf(r[7]):
                continue
            d = date.fromisoformat(reg)
            if d.year < 2016 or d > T:
                continue
            age = max((T - d).days / 365.25, 1 / 365.25)
            if r[3] in NOT_A_CLOSURE:
                continue
            obs.append((d.year, age, not is_live(r[3])))
        for y in range(2016, T.year + 1):
            c = [o for o in obs if o[0] == y]
            if c:
                out.append([kname, f"cohort {y}", len(c), sum(o[2] for o in c), f"{sum(o[2] for o in c) / len(c):.3f}", f"{sum(o[1] for o in c) / len(c):.2f}", "", ""])
        # MLE of h for current-status data: alive -> exp(-h a), dead -> 1 - exp(-h a). Golden-section on log h.
        def nll(h):
            return -sum(math.log(1 - math.exp(-h * a)) if dead else -h * a for _, a, dead in obs)
        if obs and any(o[2] for o in obs) and not all(o[2] for o in obs):
            lo, hi = math.log(1e-4), math.log(5.0)
            g = (math.sqrt(5) - 1) / 2
            for _ in range(200):
                a, b = hi - g * (hi - lo), lo + g * (hi - lo)
                if nll(math.exp(a)) < nll(math.exp(b)):
                    hi = b
                else:
                    lo = a
            h = math.exp((lo + hi) / 2)
            out.append([kname, "registered 2016+, constant hazard", len(obs), sum(o[2] for o in obs),
                        f"{sum(o[2] for o in obs) / len(obs):.3f}", f"{sum(o[1] for o in obs) / len(obs):.2f}", f"{h:.4f}", f"{1 - math.exp(-h):.3f}"])
    write_tsv(RAW / "survival_rates.tsv", ["kind", "group", "entities", "not_live_at_snapshot", "share_not_live", "mean_age_at_snapshot_y",
                                           "hazard_per_entity_year", "annual_closure_prob"], out)
    return out


# ---------------------------------------------------------------- OSM matching

def stage_osm(rows):
    out = []
    for p in rows:
        lat, lon = float(p["lat"]), float(p["lon"])
        data = osm_map(lat, lon)
        coords = element_coords(data)
        best = None
        for e in data["elements"]:
            t = e.get("tags", {})
            c = coords.get((e["type"], e["id"]))
            if not c or not is_food(t):
                continue
            d = metres(lat, lon, *c)
            if d > OSM_RADIUS_M:
                continue
            s = max((score(n, p["name"]) for n in osm_names(t)), default=0)
            if s >= NAME_MIN and (best is None or (d, -s) < (best[0], -best[1])):
                best = (d, s, e)
        if best is None:
            continue
        d, s, e = best
        hist = fetch(f"{OSM}/{e['type']}/{e['id']}/history.json", CACHE / f"osm/history/{e['type']}{e['id']}.json", gap=1.5)["elements"]
        names = {v.get("tags", {}).get("name", "").strip().casefold() for v in hist} - {""}
        last = hist[-1]
        lt = last.get("tags", {})
        disused = int(last.get("visible") is False or any(k.startswith(("disused:", "was:", "abandoned:", "removed:")) for k in lt))
        out.append([p["id"], e["type"], e["id"], e.get("tags", {}).get("name", ""), f"{d:.0f}", f"{s:.2f}",
                    hist[0]["timestamp"], last["timestamp"], int(len(names) > 1), disused])
    write_tsv(RAW / "osm.tsv", ["place_id", "osm_type", "osm_id", "osm_name", "distance_m", "name_score", "first_version",
                                "last_version", "name_changed", "disused"], out)
    return out


def main():
    CACHE.mkdir(parents=True, exist_ok=True)
    rows = places()
    postal_rows = stage_postal(rows)
    rings = tampines_polygon()
    postals = {r[1] for r in postal_rows if r[1]}
    acra, fields, total = acra_rows(postals, {"46", "47", "48", "49", "50", "51", "52", "53", "54", "82"})
    log(f"ACRA: {total} entities scanned; fields: {', '.join(f for f in fields if not f.startswith(('former', 'uen_of', 'name_of')))}")
    log(f"ACRA snapshot (latest dataset update): {SNAPSHOT}")
    log("ACRA status values in kept rows:", dict(Counter(r.get("entity_status_description", "") for r in acra)))
    stage_acra(rows, postal_rows, acra)
    fnb, sector = stage_fnb(acra, rings)
    log("F&B postal codes by sector (in / out of Tampines polygon):", {k: dict(v) for k, v in sorted(sector.items())})
    rates(fnb, SNAPSHOT)
    stage_osm(rows)
    summary(rows)


def summary(rows):
    """Counts quoted in README-survival.md, read back from the written TSVs."""
    rd = lambda n: list(csv.DictReader((RAW / n).open(encoding="utf-8"), delimiter="\t"))
    acra, osm = rd("acra.tsv"), rd("osm.tsv")
    chosen = {a["place_id"]: a for a in acra if a["chosen"] == "1"}
    om = {o["place_id"]: o for o in osm}
    for k in "hrcf":
        ids = [p["id"] for p in rows if p["kind"] == k]
        m = [chosen[i] for i in ids if i in chosen]
        rule = Counter(a["match_rule"] for a in m)
        log(f"kind {k}: {len(ids)} places | ACRA chosen {len(m)} (unit+name {rule['unit+name']}, unit {rule['unit']}, name {rule['name']}); "
            f"of which live {sum(is_live(a['status']) for a in m)}, SSIC 56 {sum(a['ssic'].startswith('56') for a in m)}, "
            f"live and SSIC 56 {sum(is_live(a['status']) and a['ssic'].startswith('56') for a in m)} | unmatched {len(ids) - len(m)} | "
            f"OSM matched {sum(i in om for i in ids)} (score >= 0.8: {sum(i in om and float(om[i]['name_score']) >= 0.8 for i in ids)})")
    log(f"ACRA candidate rows {len(acra)}: " + ", ".join(f"{k} {v}" for k, v in Counter(a["match_rule"] for a in acra).items()))

if __name__ == "__main__":
    main()

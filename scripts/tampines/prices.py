"""Price inputs for the Tampines study (prereg "Inputs" items 4 and 5).

  A  SingStat M213751 CPI series            -> research/tampines/raw/cpi.tsv
  B  SingStat average retail prices, dishes -> research/tampines/raw/singstat_dishes.tsv
  C  GST audit of items dated 2023          -> research/tampines/raw/gst2023.tsv

Stdlib only; HTTP goes through curl (SingStat refuses urllib's default client).
Downloads are cached in $PRICES_CACHE (default: <tmpdir>/tampines-prices-cache), never in the repo.
Usage: python3 scripts/tampines/prices.py [A] [B] [C]   (no argument runs all three)
"""
import csv, html, json, os, re, subprocess, sys, tempfile
from datetime import date
from hashlib import sha1
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RAW = ROOT / "research/tampines/raw"
CACHE = Path(os.environ.get("PRICES_CACHE", Path(tempfile.gettempdir()) / "tampines-prices-cache"))
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36"
SINGSTAT = "https://tablebuilder.singstat.gov.sg/api/table"


def fetch(url, refresh=False):
    """GET url through curl, cached by URL hash. Returns (status, bytes)."""
    CACHE.mkdir(parents=True, exist_ok=True)
    key = CACHE / sha1(url.encode()).hexdigest()
    if key.exists() and not refresh:
        meta = json.loads(key.with_suffix(".json").read_text())
        return meta["status"], key.read_bytes()
    p = subprocess.run(["curl", "-s", "-L", "--compressed", "-m", "120", "-A", UA, "-o", str(key), "-w", "%{http_code}", url],
                       capture_output=True, text=True)
    status = int(p.stdout or 0)
    if not key.exists():
        key.write_bytes(b"")
    key.with_suffix(".json").write_text(json.dumps({"url": url, "status": status, "fetched": date.today().isoformat()}))
    return status, key.read_bytes()


def write_tsv(name, header, rows):
    out = RAW / name
    with out.open("w", newline="") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(header)
        w.writerows(rows)
    print(f"{len(rows)} rows -> {out.relative_to(ROOT)}", file=sys.stderr)


# ---------- SingStat Table Builder ----------

def singstat(table, series=None):
    """All cells of a table (or one series). The API pages over cells, 5,000 at a time;
    `offset` counts cells in row-major order. Returns {seriesNo: {label, uom, cols{period: value}}}."""
    rows, off = {}, 0
    while True:
        q = f"offset={off}&limit=5000" + (f"&seriesNoORrowNo={series}" if series else "")
        status, body = fetch(f"{SINGSTAT}/tabledata/{table}?{q}")
        data = json.loads(body)["Data"]
        n = sum(len(r["columns"]) for r in data["row"])
        if n == 0:
            return rows
        for r in data["row"]:
            x = rows.setdefault(r["seriesNo"], {"label": r["rowText"], "uom": r["uoM"], "cols": {}})
            x["cols"].update({c["key"]: c["value"] for c in r["columns"]})
        off += n


MON = {m: i for i, m in enumerate("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(), 1)}


def ym(key):  # "2023 Jan" -> "2023-01"; "2023" -> "2023"
    y, *m = key.split()
    return f"{y}-{MON[m[0]]:02d}" if m else y


# A. CPI. M213751 is COICOP 2018-based: there is no "Hawker Food" / "Restaurant Food" / "Fast Food" label.
# These are the nearest series that cover 2023 onward (see README-prices.md).
CPI_TABLE = "M213751"
CPI_SERIES = {"all": "1", "hawker": "1.11.3", "restaurant": "1.11.1", "fastfood": "1.11.2"}


def task_a():
    out = []
    for name, sno in CPI_SERIES.items():
        x = singstat(CPI_TABLE, sno)[sno]
        for k, v in x["cols"].items():
            m = ym(k)
            if m >= "2023-01" and v not in ("", "na", "-"):
                out.append([m, name, v, x["label"], CPI_TABLE])
    out.sort(key=lambda r: (list(CPI_SERIES).index(r[1]), r[0]))
    write_tsv("cpi.tsv", ["month", "series", "index", "label", "table"], out)


# B. Average retail prices of selected consumer items. Prepared food and drinks are the rows whose unit
# is a bowl, plate, piece or cup, plus the canned drink served with ice.
DISH_TABLES = ["M213761", "M213821"]  # monthly, annual
PREPARED = re.compile(r"\((Per (Bowl|Plate|Piece|Cup|Can))\)$")


def task_b():
    out = []
    for t in DISH_TABLES:
        for sno, x in singstat(t).items():
            m = PREPARED.search(x["label"])
            if not m or (m.group(2) == "Can" and "With Ice" not in x["label"]):
                continue
            for k, v in x["cols"].items():
                p = ym(k)
                if p >= "2019" and v not in ("", "na", "-"):
                    out.append([p, x["label"], v, m.group(1).lower(), t])
    write_tsv("singstat_dishes.tsv", ["period", "dish", "avg_price_sgd", "unit", "table"], out)


# ---------- C. GST audit ----------

def spreads():
    text = (ROOT / "src/kit/food-data.ts").read_text()
    return json.loads(re.search(r"export const SPREADS: readonly Spread\[\] = (\[.*?\]);\n", text, re.S).group(1))


def page_text(b):
    t = b.decode("utf-8", "replace")
    t = re.sub(r"(?is)<(script|style|noscript).*?</\1>", " ", t)
    t = re.sub(r"(?i)<br\s*/?>|</p>|</li>|</h\d>|</div>", "\n", t)
    t = html.unescape(re.sub(r"<[^>]+>", " ", t))
    return re.sub(r"[ \t\xa0]+", " ", t)


def published(b):
    m = re.search(rb'"datePublished":"(\d{4}-\d\d-\d\d)', b)
    return m.group(1).decode() if m else ""


def wayback_2023(url):
    """2023 captures of url (one per month), newest first."""
    q = url.split("://", 1)[1].rstrip("/").removesuffix("/amp")
    status, body = fetch(f"https://web.archive.org/cdx/search/cdx?url={q}/&from=2023&to=2023&output=json"
                         f"&filter=statuscode:200&collapse=timestamp:6")
    try:
        rows = json.loads(body or b"[]")[1:]
    except json.JSONDecodeError:
        rows = []
    return [f"https://web.archive.org/web/{r[1]}id_/{r[2]}" for r in reversed(rows)]


# Name the dish has on the source page, where the site's label differs.
ALIASES = {
    "Pork Noodle (bak chor mee), from": "Pork Noodle",
    "Chrysanthemum Honey ice cream": "Chrysanthemum Honey",
    "Gelato, standard scoop": "Standard Scoop",
    "Gelato, premium scoop": "Premium Scoop",
}
# Place rules from the "Conversions" paragraph of posts/tampines-food/post.md:
# listed prices already include these charges, so a missing mark is not a missing charge.
PLACE_RULES = {"Heartland by Enjoy": "2.88% service, no GST", "Craze Kitchen": "10% service, no GST",
               "The Tree Cafe": "9% GST, no service"}
PRICE = re.compile(r"S?\$\s?(\d+(?:\.\d{1,2})?)(\s?\+\+|\s?\+(?!\+)|\s?nett\b)?", re.I)
# Facts found by hand while checking the rows (dates from each page's datePublished).
EXTRA_NOTES = {
    ("Tai Wah Pork Noodle", "https://eatbook.sg/tampines-1-food-guide/"):
        "guide first archived 2024-11, version dated 2024-10-03; Eatbook's Hawkers' Street article dated 2024-07-12",
    ("Jin Kimchi Express", "https://eatbook.sg/tampines-hawker-food/"):
        "Eatbook's Tampines outlet review (same price, no mark) dated 2023-12-15",
    ("Butahage", "https://eatbook.sg/butahage-century-square/"): "source says menu reportedly same as Suntec outlet",
    ("Tongue Tip Lanzhou Beef Noodles", "https://sethlui.com/century-square-food-guide-singapore/"):
        "source prints no marks for any place on the page",
}
FACTOR = {"++": 1.199, "+": 1.09, "nett": 1.0, "none": 1.0}
FIX = {"++": 1.188 / 1.199, "+": 1.08 / 1.09}


def find_price(text, dish, stored):
    """First mention of the dish whose nearby price, with its mark's factor, gives the stored price."""
    name = ALIASES.get(dish, dish)
    first = None
    for m in re.finditer(re.escape(name), text, re.I):
        window = text[m.end(): m.end() + 160]
        for p in PRICE.finditer(window):
            mark = (p.group(2) or "").strip().lower() or "none"
            price = float(p.group(1))
            ev = " ".join((text[m.start(): m.end()] + " … " + p.group(0)).split()[:10])
            hit = (price, mark, ev)
            first = first or hit
            if abs(round(price * FACTOR[mark], 2) - stored) <= 0.011:
                return hit, True
    return first, False


def task_c():
    rows = []
    for x in spreads():
        items = [(i, None) for i in x["items"]] + [(i[:4], i[4]) for i in x.get("other") or []]
        for (dish, stored, d, url), kind in items:
            if not d.startswith("2023"):
                continue
            pages = [(url, "live page")] + [(w, "Wayback " + w.split("/web/")[1][:8]) for w in wayback_2023(url)]
            best = None
            for purl, label in pages:
                status, body = fetch(purl)
                if status != 200 or not body:
                    continue
                hit, ok = find_price(page_text(body), dish, stored)
                if hit and (ok or best is None):
                    best = (hit, ok, label, published(body))
                if ok and label != "live page":
                    break  # prefer a 2023 capture that holds the dish
            notes = [f"other: {kind}"] if kind else []
            if best is None:
                rows.append([x["n"], dish, stored, d, url, "", "unclear", "", stored, "; ".join(notes + ["dish not found on source or 2023 captures"])])
                continue
            (price, mark, ev), ok, label, pub = best
            if not ok:
                mark = "unclear"
                notes.append("printed price does not reproduce stored price")
            notes.append(f"read from {label}" + (f", page dated {pub}" if pub else ""))
            if label == "live page" and pub > "2023-12-31":
                notes.append("no 2023 capture holds the dish")
            notes += [EXTRA_NOTES[(x["n"], url)]] if (x["n"], url) in EXTRA_NOTES else []
            if x["n"] in PLACE_RULES:
                notes.append("post place rule: " + PLACE_RULES[x["n"]])
            corrected = round(stored * FIX[mark], 2) if mark in FIX else stored
            rows.append([x["n"], dish, stored, d, url, f"{price:.2f}", mark, ev, f"{corrected:.2f}", "; ".join(notes)])
    write_tsv("gst2023.tsv", ["place_name", "dish", "stored_price", "date", "source_url", "printed_price", "mark",
                              "evidence", "corrected_price", "note"], rows)


if __name__ == "__main__":
    todo = [a.upper() for a in sys.argv[1:]] or ["A", "B", "C"]
    for t in todo:
        {"A": task_a, "B": task_b, "C": task_c}[t]()

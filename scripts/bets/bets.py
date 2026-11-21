# /// script
# requires-python = ">=3.12"
# ///
"""The forecast ledger behind /forecasters.html: notes/forecasts.tsv.

A line there is one bet: a checkable claim that one of the 40 ranked people made or revised, with
the quote, the exact time, an archive.org snapshot, a SHA-256 of the text, that day's market price,
the source that settles it and its due date. This script builds such lines from raw APIs, so no
field is typed by hand. Standard library only.

    python3 -I scripts/bets/bets.py seed DUMPS OUT      # windows around market links, for the AI step
    python3 -I scripts/bets/bets.py record PROPOSALS    # proposals -> new lines in notes/forecasts.tsv
    python3 -I scripts/bets/bets.py resolve             # settle open lines from their named source
    python3 -I scripts/bets/bets.py check               # does each archive snapshot hold its quote?

Rules (also on the page):
- text of an item: the HTML its site's API serves, block tags as spaces, other tags removed, entities
  decoded, runs of white space as one space. sha256 is of that text in UTF-8 on the record day.
- the quote must appear in that text exactly.
- price: the market's YES price after the last trade before the item was posted. If the market had no
  trade before, the price before its first trade, if that trade came the same day. Otherwise no price
  and no line.
- source: the market itself. A line is settled only by that market's resolution: YES or NO, and a
  cancelled or partial (MKT) resolution is void.
- due: the market's close date (UTC).
- an item whose address names an evaluation or grading of earlier predictions makes no new claim.
"""

import gzip
import hashlib
import html
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
LEDGER = ROOT / "notes" / "forecasts.tsv"
ARCHIVES = ROOT / "research" / "bets" / "archives.json"
UA = "teoyujie-bets/1.0 (+https://teoyujie.org/forecasters.html)"

HN = ["stcredzero", "wmf", "gojomo", "adventured", "jonnathanson", "earl", "Zigurd", "gbog", "nostrademons",
      "potatolicious", "dasil003", "snowwrestler", "nl", "jsjenkins168", "Samuel_Michon", "bane", "bryanlarsen",
      "SwellJoe", "tptacek", "btilly"]
LW = [("Zvi", "N9zj5qpTfqmbn9dro"), ("gwern", "BtbwfsEyeT4P2eqXu"), ("Daniel Kokotajlo", "YLFQfGzNdGA4NFcKS"),
      ("Matthew Barnett", "TWDkQT6f9mgyNXQ4p"), ("Rohin Shah", "du6SPHKnnPrPmxWNT"), ("Richard_Kennaway", "tumpuMka2DnK7zW73"),
      ("paulfchristiano", "gb44edJjXhte8DA3A"), ("knb", "YEwEAL5Mu6YxaX4rD"), ("Costanza", "cXudnoTp54SYgqfgF"),
      ("jsteinhardt", "EF8W65G6RaXxZjLBX"), ("Mati_Roy", "Tw9etd8rMnHLeSQ9q"), ("orthonormal", "4fh2AAe3n7oBviyxx"),
      ("Cthulhoo", "9Bn8KsjZrr5DmFNHW"), ("mfb", "Ze9tyaDB9MZDh9XKZ"), ("JoshuaZ", "fmTiLqp6mmXeLjwfN"),
      ("Liam Donovan", "HeRKphdWzJhkfWuJh"), ("Dagon", "3EiFeonpTS34c3vzZ"), ("Kevin", "8GnKujYLZ2ZZLs5zk"),
      ("TheRev", "Qf7dawgKSDMJ3BjkN"), ("AspiringKnitter", "wyuRmEzfzp3zGgSNK")]
# Manifold opened in December 2021. Polymarket and Kalshi are older, but no seed item predates Manifold.
SEED_FROM = "2021-12-01"
# An item that grades earlier predictions reprints them at late prices: it makes no new claim.
GRADING = re.compile(r"evaluat|grading|graded", re.I)
MARKET = re.compile(r"https?://(?:www\.)?(?:manifold\.markets|polymarket\.com|kalshi\.com)/[^\s\"'<>)\]]+")

# --- Text -----------------------------------------------------------------------------------------
BLOCK = re.compile(r"<(?:/?p|br|/?li|/?ol|/?ul|/?blockquote|/?h\d|/?div|/?pre|/?tr|/?td|hr)\b[^>]*>", re.I)


def text_of(source_html: str) -> str:
    t = BLOCK.sub(" ", source_html or "")
    t = html.unescape(re.sub(r"<[^>]*>", "", t))
    return " ".join(t.split())


def sha256(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def iso(t: float) -> str:
    return datetime.fromtimestamp(t, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def epoch(s: str) -> float:
    return datetime.fromisoformat(s.replace("Z", "+00:00")).timestamp()


def day(t: float) -> str:
    return iso(t)[:10]


# --- HTTP -----------------------------------------------------------------------------------------
_last: dict[str, float] = {}
PAUSE = {"www.lesswrong.com": 2.0, "hn.algolia.com": 1.0, "web.archive.org": 5.0, "archive.org": 2.0}


def fetch(url: str, data: bytes | None = None, headers: dict | None = None, raw: bool = False, tries: int = 4):
    host = url.split("/")[2]
    for attempt in range(tries):
        wait = _last.get(host, 0) + PAUSE.get(host, 0.5) - time.time()
        if wait > 0:
            time.sleep(wait)
        _last[host] = time.time()
        req = urllib.request.Request(url, data=data, headers={"User-Agent": UA, **(headers or {})})
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                body = r.read()
                return (body, r.geturl(), dict(r.headers)) if raw else json.loads(body)
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, ConnectionError) as e:
            if getattr(e, "code", None) in (400, 401, 403, 404, 410):
                raise
            time.sleep(10 * 2**attempt)
    raise RuntimeError(f"gave up on {url}")


def lw(query: str) -> dict:
    body = json.dumps({"query": query}).encode()
    for attempt in range(5):
        r = fetch("https://www.lesswrong.com/graphql", data=body, headers={"content-type": "application/json"})
        if r.get("data") and all(v is not None for v in r["data"].values()):
            return r["data"]
        time.sleep(10 * (attempt + 1))
    raise RuntimeError(f"LessWrong keeps failing: {query[:80]}")


# --- Items: the text as its site serves it now ------------------------------------------------------
def item(url: str) -> dict:
    """{by, html, made, edited}: the item's author, HTML, when it was posted and when last edited (or None)."""
    u = urllib.parse.urlparse(url)
    if u.netloc == "news.ycombinator.com":
        hid = urllib.parse.parse_qs(u.query)["id"][0]
        r = fetch(f"https://hn.algolia.com/api/v1/items/{hid}")
        return {"by": r.get("author"), "html": r.get("text") or "", "made": r["created_at_i"], "edited": None}
    if u.netloc == "www.lesswrong.com":
        cid = urllib.parse.parse_qs(u.query).get("commentId", [None])[0]
        if cid:
            r = lw(f'{{ comment(input:{{selector:{{_id:"{cid}"}}}}) {{ result {{ userId postedAt contents {{ html editedAt }} }} }} }}')["comment"]["result"]
        else:
            pid = u.path.split("/")[2]
            r = lw(f'{{ post(input:{{selector:{{_id:"{pid}"}}}}) {{ result {{ userId postedAt contents {{ html editedAt }} }} }} }}')["post"]["result"]
        made = epoch(r["postedAt"])
        edited = (r.get("contents") or {}).get("editedAt")
        edited = epoch(edited) if edited and epoch(edited) - made > 86400 else None
        by = next((name for name, uid in LW if uid == r.get("userId")), None)
        return {"by": by, "html": (r.get("contents") or {}).get("html") or "", "made": made, "edited": edited}
    raise ValueError(f"no reader for {url}")


# --- Markets ----------------------------------------------------------------------------------------
def market(url: str) -> dict | None:
    """{platform, key, question, close, resolved, resolution, resolved_at, url} for a binary market."""
    u = urllib.parse.urlparse(url)
    parts = [p for p in u.path.split("/") if p]
    if u.netloc.endswith("manifold.markets") and len(parts) >= 2:
        try:
            m = fetch(f"https://api.manifold.markets/v0/slug/{parts[1]}")
        except urllib.error.HTTPError:
            return None
        if m.get("outcomeType") != "BINARY":
            return None
        res = {"YES": "yes", "NO": "no", "CANCEL": "void", "MKT": "void"}.get(m.get("resolution") or "")
        return {"platform": "manifold", "key": m["id"], "question": m["question"], "close": m.get("closeTime", 0) / 1000,
                "resolution": res, "resolved_at": (m.get("resolutionTime") or 0) / 1000,
                "url": f"https://manifold.markets/{parts[0]}/{parts[1]}"}
    if u.netloc.endswith("polymarket.com") and len(parts) >= 2 and parts[0] in ("event", "market"):
        try:
            events = fetch(f"https://gamma-api.polymarket.com/events?slug={parts[1]}")
        except urllib.error.HTTPError:
            return None
        markets = [m for e in events for m in e.get("markets", [])]
        if len(parts) >= 3:
            markets = [m for m in markets if m.get("slug") == parts[2]]
        if len(markets) != 1:
            return None
        m = markets[0]
        tokens = json.loads(m.get("clobTokenIds") or "[]")
        prices = json.loads(m.get("outcomePrices") or "[]")
        res = None
        if m.get("closed") and prices in (["1", "0"], ["0", "1"]):
            res = "yes" if prices[0] == "1" else "no"
        return {"platform": "polymarket", "key": tokens[0] if tokens else "", "question": m["question"],
                "close": epoch(m["endDate"]) if m.get("endDate") else 0, "resolution": res,
                "resolved_at": epoch(m["closedTime"].replace(" ", "T").split("+")[0] + "Z") if res and m.get("closedTime") else 0,
                "url": f"https://polymarket.com/event/{parts[1]}" + (f"/{parts[2]}" if len(parts) >= 3 else "")}
    return None


def end_of_day(t: float) -> float:
    d = datetime.fromtimestamp(t, tz=timezone.utc).date() + timedelta(days=1)
    return datetime(d.year, d.month, d.day, tzinfo=timezone.utc).timestamp()


def price(m: dict, t: float) -> tuple[float, float] | None:
    """(YES price, time of that price) just before t, by the rule in the docstring."""
    if m["platform"] == "manifold":
        ms = int(t * 1000)
        before = fetch(f"https://api.manifold.markets/v0/bets?contractId={m['key']}&beforeTime={ms}&limit=1")
        if before:
            return before[0]["probAfter"], before[0]["createdTime"] / 1000
        first = fetch(f"https://api.manifold.markets/v0/bets?contractId={m['key']}&afterTime={ms}&limit=1&order=asc")
        if first and first[0]["createdTime"] / 1000 < end_of_day(t):
            return first[0]["probBefore"], first[0]["createdTime"] / 1000
        return None
    if m["platform"] == "polymarket" and m["key"]:
        h = fetch(f"https://clob.polymarket.com/prices-history?market={m['key']}&startTs={int(t) - 7 * 86400}"
                  f"&endTs={int(end_of_day(t))}&fidelity=60").get("history", [])
        before = [x for x in h if x["t"] <= t]
        if before:
            return before[-1]["p"], before[-1]["t"]
        return None  # A later price sample cannot establish the pre-post price.
    return None


# --- Archive.org ------------------------------------------------------------------------------------
def archive(url: str, made: float) -> str:
    """The first snapshot at or after the posting time, or a new one made now."""
    known = json.loads(ARCHIVES.read_text()) if ARCHIVES.exists() else {}
    if url in known:
        return known[url]
    since = datetime.fromtimestamp(made, tz=timezone.utc).strftime("%Y%m%d%H%M%S")
    q = urllib.parse.urlencode({"url": url, "from": since, "limit": "1", "output": "json", "filter": "statuscode:200"})
    rows = fetch(f"https://web.archive.org/cdx/search/cdx?{q}")
    if len(rows) > 1:
        snap = f"https://web.archive.org/web/{rows[1][1]}/{rows[1][2]}"
    else:
        _, final, headers = fetch(f"https://web.archive.org/save/{url}", raw=True)
        loc = headers.get("Content-Location") or urllib.parse.urlparse(final).path
        m = re.search(r"/web/(\d{14})/", loc if loc.startswith("/") else urllib.parse.urlparse(loc).path)
        if not m:
            raise RuntimeError(f"archive.org gave no snapshot for {url}")
        snap = f"https://web.archive.org/web/{m.group(1)}/{url}"
    known[url] = snap
    ARCHIVES.parent.mkdir(parents=True, exist_ok=True)
    ARCHIVES.write_text(json.dumps(known, indent=1, sort_keys=True) + "\n")
    return snap


# --- Ledger lines -------------------------------------------------------------------------------------
def bet_id(url: str, market_url: str) -> str:
    return hashlib.md5(f"{url} {market_url}".encode()).hexdigest()[:8]


def clean(s: str, limit: int = 300) -> str:
    s = " ".join(s.replace("<", "‹").replace(">", "›").split())
    return s if len(s) <= limit else s[: limit - 1].rsplit(" ", 1)[0] + "…"


def read_ledger() -> list[str]:
    return LEDGER.read_text(encoding="utf-8").splitlines() if LEDGER.exists() else []


def fields_of(line: str) -> tuple[list[str], dict[str, str]]:
    cells = line.split("\t")
    return cells[:3], dict(c.split("=", 1) for c in cells[3:])


def line_of(head: list[str], f: dict[str, str]) -> str:
    order = ["by", "url", "made", "edited", "sha256", "archive", "claim", "p", "side", "market", "price", "price_at",
             "source", "due", "fermi", "outcome", "settled", "evidence", "revises", "correction"]
    return "\t".join(head + [f"{k}={f[k]}" for k in order if f.get(k) not in (None, "")])


def record(proposals: Path):
    """Each proposal: {by, url, quote, market, p (0-1 or null), side (yes/no or null), fermi?, revises?}."""
    lines = read_ledger()
    have = {fields_of(l)[0][0] for l in lines if l and not l.startswith("#")}
    out, skipped = [], []
    items: dict[str, dict] = {}
    for prop in (json.loads(l) for l in proposals.read_text().splitlines() if l.strip()):
        why = None
        m = None if GRADING.search(urllib.parse.urlparse(prop["url"]).path) else market(prop["market"])
        if GRADING.search(urllib.parse.urlparse(prop["url"]).path):
            why = "the item grades earlier predictions"
        elif not m:
            why = "not a binary Manifold or Polymarket market"
        else:
            bid = bet_id(prop["url"], m["url"])
            if bid in have:
                continue
            it = items.get(prop["url"]) or items.setdefault(prop["url"], item(prop["url"]))
            text = text_of(it["html"])
            quote = " ".join(html.unescape(prop["quote"]).split())
            if prop.get("by") != it["by"] or it["by"] not in HN + [name for name, _ in LW]:
                why = "proposal must name the ranked author of the item"
            elif not quote or quote not in text:
                why = "quote not in the text"
            elif len(quote) > 300 or re.search(r"[<>\x00-\x1f]", quote):
                why = "quote longer than 300 characters or holds < or >"
            elif m["close"] and m["close"] < it["made"]:
                why = "market closed before the item"
            elif m["resolution"] and m["resolved_at"] and m["resolved_at"] < it["made"]:
                why = "market resolved before the item"
            elif prop.get("p") is None and prop.get("side") not in ("yes", "no"):
                why = "neither a stated probability nor a side"
            else:
                pr = price(m, it["made"])
                if pr is None:
                    why = "no price that day"
        if why:
            skipped.append({**prop, "why": why})
            print("skip:", why, prop["url"], prop["market"], file=sys.stderr)
            continue
        p = prop.get("p")
        f = {"by": it["by"], "url": prop["url"], "made": iso(it["made"]), "edited": day(it["edited"]) if it["edited"] else "",
             "sha256": sha256(text), "archive": archive(prop["url"], it["made"]), "claim": clean(m["question"]),
             "p": f"{min(max(p, 0.0001), 0.9999):.4f}".rstrip("0") if p is not None else "", "side": "" if p is not None else prop["side"],
             "market": m["url"], "price": f"{min(max(pr[0], 0.0001), 0.9999):.4f}".rstrip("0"), "price_at": iso(pr[1]),
             "source": m["url"], "due": day(m["close"]) if m["close"] else "", "fermi": prop.get("fermi") or "none",
             "outcome": m["resolution"] or "open", "revises": prop.get("revises") or ""}
        if m["resolution"] and not m["resolved_at"]:
            skipped.append({**prop, "why": "market has no resolution date"})
            continue
        if m["resolution"]:
            f["settled"], f["evidence"] = day(m["resolved_at"]), m["url"]
        if not f["due"]:
            skipped.append({**prop, "why": "market has no close date"})
            continue
        out.append(line_of([bid, "0", quote], f))
        have.add(bid)
    if not lines:
        lines = ["# One bet per line: id, points, quote, then key=value fields, split by tabs. Built by scripts/bets/bets.py."]
    LEDGER.write_text("\n".join(lines + out) + "\n", encoding="utf-8")
    (proposals.parent / (proposals.stem + ".skipped.jsonl")).write_text("".join(json.dumps(s) + "\n" for s in skipped))
    print(f"recorded {len(out)}, skipped {len(skipped)}", file=sys.stderr)


def resolve():
    """Settles open lines from their source, which is always the market."""
    lines, changed = read_ledger(), 0
    for i, line in enumerate(lines):
        if not line or line.startswith("#"):
            continue
        head, f = fields_of(line)
        if f.get("outcome") != "open":
            continue
        m = market(f["source"])
        if m and m["resolution"] and m["resolved_at"]:
            f.update(outcome=m["resolution"], settled=day(m["resolved_at"]), evidence=m["url"])
            lines[i] = line_of(head, f)
            changed += 1
    LEDGER.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"settled {changed}", file=sys.stderr)


def check():
    """Fetches each snapshot once and reports lines whose quote it lacks."""
    bad, pages = 0, {}
    for line in read_ledger():
        if not line or line.startswith("#"):
            continue
        head, f = fields_of(line)
        snap = f["archive"]
        if snap not in pages:
            raw = re.sub(r"/web/(\d{14})/", r"/web/\1id_/", snap, count=1)
            body = fetch(raw, raw=True)[0]
            if body[:2] == b"\x1f\x8b":  # an id_ snapshot keeps the original gzip encoding
                body = gzip.decompress(body)
            pages[snap] = "".join(text_of(body.decode("utf-8", "replace")).split())
        if "".join(head[2].split()) not in pages[snap]:
            bad += 1
            print(f"{head[0]}: quote not in {snap}")
    print(f"{bad} of the snapshots lack their quote", file=sys.stderr)
    sys.exit(1 if bad else 0)


# --- Seed: windows around market links in the saved histories -----------------------------------------
def seed(dumps: Path, out: Path):
    out.mkdir(parents=True, exist_ok=True)
    units = []
    def add(by, url, made, source_html):
        if made < SEED_FROM or not MARKET.search(source_html or ""):
            return
        marked = re.sub(r'<a\b[^>]*href="([^"]+)"[^>]*>(.*?)</a>',
                        lambda m: f"{m.group(2)} [link: {m.group(1)}]" if MARKET.match(html.unescape(m.group(1))) else m.group(2),
                        source_html, flags=re.S | re.I)
        text = text_of(marked)
        spans = []
        for m in re.finditer(r"\[link: [^\]]+\]", text):
            a, b = max(0, m.start() - 600), min(len(text), m.end() + 2000)
            if spans and a <= spans[-1][1]:
                spans[-1][1] = b
            else:
                spans.append([a, b])
        units.append({"key": hashlib.md5(url.encode()).hexdigest()[:12], "by": by, "url": url, "made": made,
                      "windows": [text[a:b] for a, b in spans]})
    for name in HN:
        path = dumps / "hn-api" / f"{name}.jsonl"
        for row in (json.loads(l) for l in path.read_text().split("\n") if l.strip()):
            add(name, f"https://news.ycombinator.com/item?id={row['objectID']}", row["created_at"],
                row.get("comment_text") or row.get("story_text") or "")
    for name, uid in LW:
        for kind in ("posts", "comments"):
            path = dumps / "lw-api" / f"{uid}.{kind}.jsonl"
            for row in (json.loads(l) for l in path.read_text().split("\n") if l.strip()):
                add(name, row["pageUrl"], row["postedAt"], (row.get("contents") or {}).get("html") or "")
    units.sort(key=lambda u: u["made"])
    batch, size, n = [], 0, 0
    for u in units:
        batch.append(u)
        size += sum(len(w) for w in u["windows"])
        if size > 120_000:
            (out / f"batch-{n:02d}.jsonl").write_text("".join(json.dumps(x) + "\n" for x in batch))
            batch, size, n = [], 0, n + 1
    if batch:
        (out / f"batch-{n:02d}.jsonl").write_text("".join(json.dumps(x) + "\n" for x in batch))
        n += 1
    print(f"{len(units)} items with a market link in {n} batches", file=sys.stderr)


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else ""
    if cmd == "seed":
        seed(Path(sys.argv[2]), Path(sys.argv[3]))
    elif cmd == "record":
        record(Path(sys.argv[2]))
    elif cmd == "resolve":
        resolve()
    elif cmd == "check":
        check()
    else:
        sys.exit(__doc__)

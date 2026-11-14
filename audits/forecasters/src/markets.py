# /// script
# requires-python = ">=3.12"
# ///
"""Reference prices: market search, AI match batches, prices on the day, and ALFRED.

  markets.py search   forecasts that need a price -> $FA_DUMPS/derived/market_candidates.jsonl
                      and match batches in $FA_DUMPS/derived/match_batches/
  markets.py prices   data/matches/*.jsonl -> data/prices.tsv
  markets.py alfred   forecasts with a FRED series -> data/alfred.tsv (needs FRED_API_KEY)
"""

import csv
import json
import os
import random
import sys
import urllib.parse
from datetime import datetime, timedelta, timezone
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import DATA, MARKET_START, dumps_dir, get, read_jsonl, write_jsonl  # noqa: E402

SEED = 20261115
PER_PLATFORM = 10
MATCH_BATCH = 40


def ts(s):
    return datetime.fromisoformat(s.replace("Z", "+00:00")).timestamp()


def end_of_day(t):
    d = datetime.fromtimestamp(t, tz=timezone.utc).date() + timedelta(days=1)
    return datetime(d.year, d.month, d.day, tzinfo=timezone.utc).timestamp()


def reachable():
    on = {"manifold", "polymarket", "kalshi"}
    if os.environ.get("METACULUS_TOKEN"):
        on.add("metaculus")
    return on


# --- Search ------------------------------------------------------------------------------------
def s_manifold(term, t):
    q = urllib.parse.urlencode({"term": term, "limit": PER_PLATFORM, "filter": "all", "contractType": "BINARY"})
    out = []
    for m in get(f"https://api.manifold.markets/v0/search-markets?{q}", 0.5):
        opened, closes = m["createdTime"] / 1000, (m.get("resolutionTime") or m.get("closeTime") or 0) / 1000
        out.append(dict(platform="manifold", id=m["id"], question=m["question"], opened=opened, closes=closes,
                        url=m.get("url", "")))
    return out


def s_polymarket(term, t):
    q = urllib.parse.urlencode({"q": term, "limit_per_type": PER_PLATFORM, "keep_closed_markets": 1,
                                "events_status": "all"})
    out = []
    for e in get(f"https://gamma-api.polymarket.com/public-search?{q}", 0.5).get("events", []) or []:
        for m in e.get("markets", []) or []:
            if not m.get("startDate") or not m.get("clobTokenIds"):
                continue
            outcomes = json.loads(m.get("outcomes") or "[]")
            if outcomes[:2] != ["Yes", "No"]:
                continue
            out.append(dict(platform="polymarket", id=json.loads(m["clobTokenIds"])[0],
                            question=m.get("question") or e.get("title"), opened=ts(m["startDate"]),
                            closes=ts(m["endDate"]) if m.get("endDate") else 0,
                            url=f"https://polymarket.com/event/{e.get('slug', '')}"))
    return out


def s_kalshi(term, t):
    q = urllib.parse.urlencode({"query": term, "include_closed": "true"})
    out = []
    for s in get(f"https://api.elections.kalshi.com/v1/search/series?{q}", 1.0).get("current_page", [])[:PER_PLATFORM]:
        ev = get(f"https://api.elections.kalshi.com/trade-api/v2/events/{s['event_ticker']}?with_nested_markets=true",
                 1.0)
        for m in (ev.get("event") or {}).get("markets") or ev.get("markets") or []:
            out.append(dict(platform="kalshi", id=f"{s['series_ticker']}/{m['ticker']}", question=m.get("title", ""),
                            opened=ts(m["open_time"]), closes=ts(m["close_time"]),
                            url=f"https://kalshi.com/markets/{s['series_ticker'].lower()}"))
    return out


def s_metaculus(term, t):
    q = urllib.parse.urlencode({"search": term, "limit": PER_PLATFORM, "forecast_type": "binary"})
    h = {"Authorization": f"Token {os.environ['METACULUS_TOKEN']}"}
    out = []
    for p in get(f"https://www.metaculus.com/api/posts/?{q}", 1.0, headers=h).get("results", []):
        qn = p.get("question") or {}
        if not qn.get("open_time"):
            continue
        out.append(dict(platform="metaculus", id=str(p["id"]), question=p.get("title", ""), opened=ts(qn["open_time"]),
                        closes=ts(qn.get("actual_resolve_time") or qn.get("scheduled_resolve_time")),
                        url=f"https://www.metaculus.com/questions/{p['id']}/"))
    return out


SEARCH = {"manifold": s_manifold, "polymarket": s_polymarket, "kalshi": s_kalshi, "metaculus": s_metaculus}


def forecasts():
    """Every AI-listed forecast that could be scored: settled true, false or partly."""
    index = {r["token"]: r["unit"] for r in csv.DictReader(open(DATA / "batch_index.tsv"), delimiter="\t")}
    units = {u["id"]: u for u in read_jsonl(dumps_dir() / "derived" / "units.jsonl")}
    units.update({u["id"]: u for u in read_jsonl(DATA / "planted.jsonl")})
    for f in sorted((DATA / "verdicts").glob("*.jsonl")):
        for v in read_jsonl(f):
            uid = index.get(v.get("token"))
            if uid is None:
                continue
            for i, fc in enumerate(v.get("forecasts") or []):
                yield dict(fid=f"{uid}#{i}", unit=units[uid], **fc)


def search():
    on = reachable()
    starts = {p: ts(MARKET_START[p] + "T00:00:00Z") for p in on}
    cands, need = [], []
    for fc in forecasts():
        if fc.get("outcome") not in ("true", "false", "partly") or not fc.get("search"):
            continue
        t = ts(fc["unit"]["made"])
        found = []
        for p in sorted(on):
            if t < starts[p]:
                continue
            try:
                hits = SEARCH[p](fc["search"], t)
            except Exception as e:  # a platform that fails gives no candidates for this call
                print(f"search {p} failed: {e}", file=sys.stderr)
                continue
            found += [h for h in hits if h["opened"] < end_of_day(t) and (not h["closes"] or h["closes"] >= t)]
        cands.append(dict(fid=fc["fid"], made=fc["unit"]["made"], claim=fc["claim"], due=fc.get("due"),
                          markets=found))
        if found:
            need.append(cands[-1])
    d = dumps_dir() / "derived"
    write_jsonl(d / "market_candidates.jsonl", cands)
    random.Random(SEED).shuffle(need)
    out = d / "match_batches"
    out.mkdir(parents=True, exist_ok=True)
    for i in range(0, len(need), MATCH_BATCH):
        rows = [dict(fid=c["fid"], made=c["made"][:10], claim=c["claim"], due=c["due"],
                     markets=[dict(key=f"{m['platform']}:{m['id']}", question=m["question"],
                                   opened=datetime.fromtimestamp(m["opened"], tz=timezone.utc).strftime("%Y-%m-%d"),
                                   closes=datetime.fromtimestamp(m["closes"], tz=timezone.utc).strftime("%Y-%m-%d")
                                   if m["closes"] else None) for m in c["markets"]])
                for c in need[i:i + MATCH_BATCH]]
        write_jsonl(out / f"match-{i // MATCH_BATCH:03d}.jsonl", rows)
    print(f"{len(cands)} forecasts searched, {len(need)} with candidate markets")


# --- Prices -----------------------------------------------------------------------------------
def p_manifold(mid, t):
    ms = int(t * 1000)
    before = get(f"https://api.manifold.markets/v0/bets?contractId={mid}&beforeTime={ms}&limit=1", 0.5)
    if before:
        return before[0]["probAfter"]
    first = get(f"https://api.manifold.markets/v0/bets?contractId={mid}&afterTime={ms}&limit=1&order=asc", 0.5)
    if first and first[0]["createdTime"] / 1000 < end_of_day(t):
        return first[0]["probBefore"]
    return None


def p_polymarket(token, t):
    h = get(f"https://clob.polymarket.com/prices-history?market={token}&startTs={int(t) - 7 * 86400}"
            f"&endTs={int(end_of_day(t))}&fidelity=60", 0.5).get("history", [])
    before = [x for x in h if x["t"] <= t]
    if before:
        return before[-1]["p"]
    return h[0]["p"] if h else None


def p_kalshi(key, t):
    series, ticker = key.split("/")
    c = get(f"https://api.elections.kalshi.com/trade-api/v2/series/{series}/markets/{ticker}/candlesticks"
            f"?start_ts={int(t) - 7 * 86400}&end_ts={int(end_of_day(t))}&period_interval=60", 1.0).get("candlesticks", [])
    pts = [(x["end_period_ts"], x["price"].get("close_dollars")) for x in c if x["price"].get("close_dollars")]
    before = [p for e, p in pts if e <= t + 3600]
    if before:
        return float(before[-1])
    return float(pts[0][1]) if pts else None


def p_metaculus(pid, t):
    h = {"Authorization": f"Token {os.environ['METACULUS_TOKEN']}"}
    post = get(f"https://www.metaculus.com/api/posts/{pid}/", 1.0, headers=h)
    hist = (((post.get("question") or {}).get("aggregations") or {}).get("recency_weighted") or {}).get("history", [])
    pts = [(x["start_time"], x["centers"][0]) for x in hist if x.get("centers")]
    before = [c for s, c in pts if s <= t]
    if before:
        return before[-1]
    later = [c for s, c in pts if s < end_of_day(t)]
    return later[0] if later else None


PRICE = {"manifold": p_manifold, "polymarket": p_polymarket, "kalshi": p_kalshi, "metaculus": p_metaculus}


def prices():
    made = {c["fid"]: c["made"] for c in read_jsonl(dumps_dir() / "derived" / "market_candidates.jsonl")}
    rows = []
    for f in sorted((DATA / "matches").glob("*.jsonl")):
        for m in read_jsonl(f):
            if not m.get("market") or m["fid"] not in made:
                continue
            platform, mid = m["market"].split(":", 1)
            if platform not in reachable():
                continue
            try:
                price = PRICE[platform](mid, ts(made[m["fid"]]))
            except Exception as e:
                print(f"price {m['market']} failed: {e}", file=sys.stderr)
                price = None
            if price is None:
                continue
            ref = price if m.get("yes_means_true", True) else 1 - price
            rows.append(dict(fid=m["fid"], market=m["market"], price=round(price, 4), ref=round(ref, 4)))
    write(DATA / "prices.tsv", rows)


# --- ALFRED -------------------------------------------------------------------------------------
def alfred():
    key = os.environ.get("FRED_API_KEY")
    rows = []
    if not key:
        print("no FRED_API_KEY: ALFRED gives no references")
        write(DATA / "alfred.tsv", rows)
        return
    for fc in forecasts():
        fr = fc.get("fred")
        if not fr or fc.get("outcome") not in ("true", "false", "partly"):
            continue
        day = fc["unit"]["made"][:10]
        q = urllib.parse.urlencode({"series_id": fr["series"], "realtime_start": day, "realtime_end": day,
                                    "api_key": key, "file_type": "json"})
        try:
            obs = get(f"https://api.stlouisfed.org/fred/series/observations?{q}", 1.0)["observations"]
        except Exception as e:
            print(f"alfred {fr['series']} failed: {e}", file=sys.stderr)
            continue
        pts = [(datetime.fromisoformat(o["date"]), float(o["value"])) for o in obs if o["value"] not in (".", "")]
        if len(pts) < 24:
            continue
        last_date, last = pts[-1]
        target = datetime.fromisoformat(fr["date"])
        horizon = (target - last_date).days
        cutoff = last_date - timedelta(days=365 * 20)
        series = [(d, v) for d, v in pts if d >= cutoff]
        changes = []
        j = 0
        for i, (d0, v0) in enumerate(series):
            while j < len(series) and (series[j][0] - d0).days < horizon:
                j += 1
            if j < len(series):
                changes.append(series[j][1] - v0)
        if not changes:
            continue
        hits = sum(1 for c in changes if (last + c > fr["level"]) == bool(fr["above"]))
        prob = hits / len(changes)
        rows.append(dict(fid=fc["fid"], series=fr["series"], vintage=day, last=last, horizon_days=horizon,
                         ref=round(min(max(prob, 0.01), 0.99), 4), n_changes=len(changes)))
    write(DATA / "alfred.tsv", rows)


def write(path, rows):
    keys = []
    for r in rows:
        keys += [k for k in r if k not in keys]
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, keys or ["fid"], delimiter="\t", lineterminator="\n")
        w.writeheader()
        w.writerows(rows)


if __name__ == "__main__":
    {"search": search, "prices": prices, "alfred": alfred}[sys.argv[1]]()

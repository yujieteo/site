# /// script
# requires-python = ">=3.12"
# dependencies = ["duckdb==1.3.0", "pyarrow==20.0.0", "pytz==2025.2"]
# ///
"""Apply candidate rule C to the dumps and to the 40 people's API histories, and cut units.

Writes, under $FA_DUMPS/derived (texts stay out of git):
  units.jsonl       every unit: id, site, sample, author, made, title, text, sha256, flags
Writes, under data/ (no texts):
  search_population.tsv  site, account, candidates, in_pool
  units_index.tsv        unit id, site, sample, author, made, sha256, stated, macro, market_era
  flow.tsv               counts at each step
  crawl_gaps.tsv, edits.tsv  dump against API for the 40
"""

import collections
import csv
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

import duckdb
import pyarrow.parquet as pq

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import (CANDIDATE, DATA, FREEZE, HN_IN, HN_PEOPLE, LW_IN, LW_PEOPLE, MACRO,  # noqa: E402
                    PREDICTION_THREAD, STATED, dumps_dir, plain, read_jsonl, sha256, windows, write_jsonl)

HN_POOL_MIN = 8
# A coarse first pass for DuckDB; the exact rule is CANDIDATE on the plain text.
COARSE = r"(?i)(predict|forecast|\bbet\b|wager|put money|betting|mark my words|calling it|%|odds)"


def ts(s: str) -> float:
    return datetime.fromisoformat(s.replace("Z", "+00:00")).timestamp()


def iso(t: float) -> str:
    return datetime.fromtimestamp(t, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def cut(text: str, in_thread: bool) -> list[str]:
    """A comment under a prediction thread is one unit, its first 4,000 characters."""
    if in_thread:
        return [text[:4000]]
    return windows(text, CANDIDATE)


# --- Hacker News, in-sample, from the dump --------------------------------------------------
def hn_dump(d: Path):
    glob = str(d / "hn-dump" / "data" / "*" / "*.parquet")
    con = duckdb.connect()
    lo, hi = HN_IN
    rows = con.execute(f"""
        select id, "by", epoch(time) as t, text, parent from read_parquet('{glob}')
        where type = 2 and deleted = 0 and dead = 0 and "by" <> ''
          and time >= TIMESTAMP '{lo}' and time < TIMESTAMP '{hi}'
          and regexp_matches(text, '{COARSE}')
    """).fetchall()
    per_account = collections.Counter()
    cands = []
    for item_id, by, t, text, parent in rows:
        body = plain(text)
        if CANDIDATE.search(body):
            per_account[by] += 1
            cands.append((item_id, by, t, body, parent))
    pool = {a for a, c in per_account.items() if c >= HN_POOL_MIN} | set(HN_PEOPLE)
    pooled = [c for c in cands if c[1] in pool]
    titles = hn_titles(con, glob, {c[0]: c[4] for c in pooled})
    units = []
    for item_id, by, t, body, _ in pooled:
        for k, w in enumerate(cut(body, False)):
            units.append(unit("hn", "in", item_id, k, by, t, titles.get(item_id, ""), w,
                              f"https://news.ycombinator.com/item?id={item_id}"))
    total = con.execute(f"""select count(*), count(distinct "by") from read_parquet('{glob}')
        where type = 2 and deleted = 0 and dead = 0 and time >= TIMESTAMP '{lo}' and time < TIMESTAMP '{hi}'""").fetchone()
    flow = dict(comments=total[0], commenters=total[1], candidates=len(cands), accounts=len(per_account),
                pool=len(pool), pool_candidates=len(pooled), units=len(units))
    return units, per_account, pool, flow


def hn_titles(con, glob, parent_of: dict) -> dict:
    """Climb each candidate's parent chain to its story and take the story title."""
    con.execute("create temp table cur (cid ubigint, pid ubigint)")
    con.executemany("insert into cur values (?, ?)", list(parent_of.items()))
    con.execute(f"create temp table items as select id, parent, type, title from read_parquet('{glob}')")
    titles = {}
    for _ in range(40):
        got = con.execute("""select c.cid, i.parent, i.type, i.title from cur c join items i on i.id = c.pid""").fetchall()
        nxt = []
        for cid, parent, typ, title in got:
            if typ == 1 or not parent:
                titles[cid] = title or ""
            else:
                nxt.append((cid, parent))
        con.execute("delete from cur")
        if not nxt:
            break
        con.executemany("insert into cur values (?, ?)", nxt)
    return titles


# --- LessWrong, in-sample, from the dump ----------------------------------------------------
def lw_dump(d: Path):
    lo, hi = (ts(x + "T00:00:00Z") for x in LW_IN)
    per_author = collections.Counter()
    names = {}
    cands = []
    total_items = 0
    authors_all = set()
    for f in sorted((d / "lw-dump" / "data" / "raw").glob("*.parquet")):
        pf = pq.ParquetFile(f)
        for batch in pf.iter_batches(batch_size=200, columns=["post", "comments"]):
            for row in batch.to_pylist():
                post = row["post"] or {}
                title = post.get("title") or ""
                thread = bool(PREDICTION_THREAD.search(title))
                items = []
                pu = post.get("user") or {}
                if post.get("postedAt") and pu.get("_id"):
                    items.append(("post", post["_id"], pu, post["postedAt"], post.get("htmlBody") or "", False,
                                  post.get("pageUrl") or ""))
                for c in row["comments"] or []:
                    cu = c.get("user") or {}
                    if c.get("deleted") or not cu.get("_id") or not c.get("postedAt"):
                        continue
                    items.append(("comment", c["_id"], cu, c["postedAt"], c.get("htmlBody") or "", thread,
                                  c.get("pageUrl") or ""))
                for kind, item_id, user, posted, body_html, in_thread, url in items:
                    t = ts(posted)
                    if not lo <= t < hi:
                        continue
                    total_items += 1
                    authors_all.add(user["_id"])
                    body = plain(body_html)
                    if CANDIDATE.search(body) or in_thread:
                        per_author[user["_id"]] += 1
                        names[user["_id"]] = user.get("displayName") or user.get("username") or user["_id"]
                        cands.append((item_id, user["_id"], t, title, body, in_thread, url))
    pool = set(per_author) | {uid for _, uid in LW_PEOPLE}
    units = []
    for item_id, uid, t, title, body, in_thread, url in cands:
        for k, w in enumerate(cut(body, in_thread)):
            units.append(unit("lw", "in", item_id, k, uid, t, title, w, url))
    flow = dict(items=total_items, authors=len(authors_all), candidates=len(cands), accounts=len(per_author),
                pool=len(pool), pool_candidates=len(cands), units=len(units))
    return units, per_author, pool, flow, names


# --- Out-of-sample, from the APIs -----------------------------------------------------------
def hn_api(d: Path):
    units, gaps, edits = [], [], []
    start = ts(HN_IN[1] + "T00:00:00Z")
    end = ts(FREEZE + "T00:00:00Z")
    for u in HN_PEOPLE:
        p = d / "hn-api" / f"{u}.jsonl"
        for h in read_jsonl(p):
            if "comment" not in h.get("_tags", []):
                continue
            t = h["created_at_i"]
            if not start <= t < end:
                continue
            body = plain(h.get("comment_text") or "")
            if CANDIDATE.search(body):
                for k, w in enumerate(cut(body, False)):
                    units.append(unit("hn", "out", int(h["objectID"]), k, u, t, h.get("story_title") or "", w,
                                      f"https://news.ycombinator.com/item?id={h['objectID']}"))
    return units


def lw_api(d: Path):
    units = []
    start = ts(LW_IN[1] + "T00:00:00Z")
    end = ts(FREEZE + "T00:00:00Z")
    for name, uid in LW_PEOPLE:
        for kind in ("comments", "posts"):
            p = d / "lw-api" / f"{uid}.{kind}.jsonl"
            for r in read_jsonl(p):
                if r.get("deleted") or (kind == "posts" and r.get("draft")):
                    continue
                t = ts(r["postedAt"])
                if not start <= t < end:
                    continue
                title = (r.get("post") or {}).get("title") if kind == "comments" else r.get("title")
                title = title or ""
                body = plain((r.get("contents") or {}).get("html") or "")
                in_thread = kind == "comments" and bool(PREDICTION_THREAD.search(title))
                if CANDIDATE.search(body) or in_thread:
                    for k, w in enumerate(cut(body, in_thread)):
                        units.append(unit("lw", "out", r["_id"], k, uid, t, title, w, r.get("pageUrl") or ""))
    return units


def unit(site, sample, item_id, k, author, t, title, text, url):
    return dict(id=f"{site}:{item_id}:{k}", site=site, sample=sample, item=str(item_id), author=author,
                made=iso(t), title=title, text=text, url=url, sha256=sha256(text),
                stated=bool(STATED.search(text)), macro=bool(MACRO.search(text)))


# --- Crawl gaps and edits for the 40, in-sample ---------------------------------------------
def hn_gaps(d: Path, dump_units):
    """Items of the 20 in the dump window: in the dump, in Algolia, or both; and text changes."""
    glob = str(d / "hn-dump" / "data" / "*" / "*.parquet")
    con = duckdb.connect()
    lo, hi = HN_IN
    people = ",".join("'" + u + "'" for u in HN_PEOPLE)
    dump = {r[0]: (r[1], r[2]) for r in con.execute(f"""
        select id, "by", text from read_parquet('{glob}') where type = 2 and deleted = 0 and dead = 0
        and "by" in ({people}) and time >= TIMESTAMP '{lo}' and time < TIMESTAMP '{hi}'""").fetchall()}
    a, b = ts(lo + "T00:00:00Z"), ts(hi + "T00:00:00Z")
    api = {}
    for u in HN_PEOPLE:
        for h in read_jsonl(d / "hn-api" / f"{u}.jsonl"):
            if "comment" in h.get("_tags", []) and a <= h["created_at_i"] < b:
                api[int(h["objectID"])] = (u, h.get("comment_text") or "")
    rows, edits = [], []
    for u in HN_PEOPLE:
        mine_d = {i for i, (by, _) in dump.items() if by == u}
        mine_a = {i for i, (by, _) in api.items() if by == u}
        both = mine_d & mine_a
        changed = sum(1 for i in both if plain(dump[i][1]) != plain(api[i][1]))
        rows.append(dict(site="hn", person=u, dump=len(mine_d), api=len(mine_a), both=len(both),
                         only_dump=len(mine_d - mine_a), only_api=len(mine_a - mine_d), text_differs=changed))
    cand_items = {int(x["item"]) for x in dump_units if x["author"] in HN_PEOPLE}
    for i in sorted(cand_items):
        if i in dump and i in api:
            same = plain(dump[i][1]) == plain(api[i][1])
            edits.append(dict(site="hn", item=i, person=dump[i][0], in_api=1, text_same=int(same),
                              version="", edited_after_hours=""))
        elif i in dump:
            edits.append(dict(site="hn", item=i, person=dump[i][0], in_api=0, text_same="", version="",
                              edited_after_hours=""))
    return rows, edits


def lw_gaps(d: Path, dump_units):
    lo, hi = (ts(x + "T00:00:00Z") for x in LW_IN)
    ids = {uid for _, uid in LW_PEOPLE}
    dump_items = collections.defaultdict(set)
    # Every dump item of the 20 in the window.
    for f in sorted((d / "lw-dump" / "data" / "raw").glob("*.parquet")):
        for batch in pq.ParquetFile(f).iter_batches(batch_size=200, columns=["post", "comments"]):
            for row in batch.to_pylist():
                post = row["post"] or {}
                pu = (post.get("user") or {}).get("_id")
                if pu in ids and post.get("postedAt") and lo <= ts(post["postedAt"]) < hi:
                    dump_items[pu].add(post["_id"])
                for c in row["comments"] or []:
                    cu = (c.get("user") or {}).get("_id")
                    if cu in ids and not c.get("deleted") and c.get("postedAt") and lo <= ts(c["postedAt"]) < hi:
                        dump_items[cu].add(c["_id"])
    rows, edits = [], []
    api_meta = {}
    for name, uid in LW_PEOPLE:
        mine_a = set()
        for kind in ("comments", "posts"):
            for r in read_jsonl(d / "lw-api" / f"{uid}.{kind}.jsonl"):
                t = ts(r["postedAt"])
                if lo <= t < hi and not r.get("deleted"):
                    mine_a.add(r["_id"])
                c = r.get("contents") or {}
                api_meta[r["_id"]] = (t, c.get("editedAt"), c.get("version"))
        mine_d = dump_items[uid]
        rows.append(dict(site="lw", person=name, dump=len(mine_d), api=len(mine_a), both=len(mine_d & mine_a),
                         only_dump=len(mine_d - mine_a), only_api=len(mine_a - mine_d), text_differs=""))
    for x in dump_units:
        if x["author"] not in ids or x["id"].split(":")[-1] != "0":
            continue
        meta = api_meta.get(x["item"])
        if not meta:
            edits.append(dict(site="lw", item=x["item"], person=x["author"], in_api=0, text_same="", version="",
                              edited_after_hours=""))
            continue
        t, edited, version = meta
        after = (ts(edited) - t) / 3600 if edited else ""
        edits.append(dict(site="lw", item=x["item"], person=x["author"], in_api=1, text_same="",
                          version=version or "", edited_after_hours=round(after, 2) if after != "" else ""))
    return rows, edits


def write_tsv(path, rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    keys = []
    for r in rows:
        keys += [k for k in r if k not in keys]
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, keys, delimiter="\t", lineterminator="\n")
        w.writeheader()
        w.writerows(rows)


def main():
    d = dumps_dir()
    hn_units, hn_counts, hn_pool, hn_flow = hn_dump(d)
    print("hn dump", hn_flow, flush=True)
    lw_units, lw_counts, lw_pool, lw_flow, lw_names = lw_dump(d)
    print("lw dump", lw_flow, flush=True)
    out_units = hn_api(d) + lw_api(d)
    print("api units", len(out_units), flush=True)
    units = hn_units + lw_units + out_units
    write_jsonl(d / "derived" / "units.jsonl", units)
    pop = [dict(site="hn", account=a, candidates=c, in_pool=int(a in hn_pool)) for a, c in sorted(hn_counts.items())]
    pop += [dict(site="lw", account=a, candidates=c, in_pool=int(a in lw_pool)) for a, c in sorted(lw_counts.items())]
    write_tsv(DATA / "search_population.tsv", pop)
    write_tsv(DATA / "units_index.tsv", [{k: u[k] for k in ("id", "site", "sample", "author", "made", "url",
                                                             "sha256", "stated", "macro")} for u in units])
    flow = [dict(site="hn", step=k, count=v) for k, v in hn_flow.items()]
    flow += [dict(site="lw", step=k, count=v) for k, v in lw_flow.items()]
    flow += [dict(site=s, step="published_candidates", count=n) for s, n in (("hn", 3048), ("lw", 3843))]
    flow += [dict(site=s, step="out_of_sample_units", count=sum(1 for u in out_units if u["site"] == s))
             for s in ("hn", "lw")]
    write_tsv(DATA / "flow.tsv", flow)
    g1, e1 = hn_gaps(d, hn_units)
    g2, e2 = lw_gaps(d, lw_units)
    write_tsv(DATA / "crawl_gaps.tsv", g1 + g2)
    write_tsv(DATA / "edits.tsv", e1 + e2)


if __name__ == "__main__":
    main()

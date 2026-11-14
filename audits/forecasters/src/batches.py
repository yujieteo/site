# /// script
# requires-python = ">=3.12"
# dependencies = ["duckdb==1.3.0", "pyarrow==20.0.0", "pytz==2025.2"]
# ///
"""Prefilter F, the recall sample, and blind AI batches.

Reads $FA_DUMPS/derived/units.jsonl and data/planted.jsonl.
Writes $FA_DUMPS/derived/batches/batch-NNN.jsonl (what the AI sees: token, site, date, thread, text),
data/batch_index.tsv (token -> unit), data/prefilter.tsv (counts) and data/run_env.json.
"""

import hashlib
import json
import os
import random
import sys
from datetime import datetime
from pathlib import Path

import duckdb
import pyarrow.parquet as pq

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import (CANDIDATE, DATA, HN_IN, HN_PEOPLE, LW_IN, LW_PEOPLE, MARKET_START,  # noqa: E402
                    PREDICTION_THREAD, dumps_dir, plain, read_jsonl, sha256, write_jsonl)

SEED = 20261115
BATCH = 100
RECALL_PER_SITE = 150
SITE = {"hn": "Hacker News", "lw": "LessWrong"}


def sources():
    on = ["manifold", "polymarket", "kalshi"] + (["metaculus"] if os.environ.get("METACULUS_TOKEN") else [])
    return on, bool(os.environ.get("FRED_API_KEY"))


def eligible(u, market_start, fred):
    return u["stated"] or u["made"][:10] >= market_start or (fred and u["macro"])


def recall_sample(d: Path, rng: random.Random):
    """Random in-sample texts of the 40 that rule C did not pick."""
    out = []
    glob = str(d / "hn-dump" / "data" / "*" / "*.parquet")
    people = ",".join("'" + u + "'" for u in HN_PEOPLE)
    lo, hi = HN_IN
    rows = duckdb.connect().execute(f"""
        select id, "by", strftime(time, '%Y-%m-%dT%H:%M:%SZ'), text from read_parquet('{glob}')
        where type = 2 and deleted = 0 and dead = 0 and "by" in ({people})
          and time >= TIMESTAMP '{lo}' and time < TIMESTAMP '{hi}' order by id""").fetchall()
    rows = [r for r in rows if not CANDIDATE.search(plain(r[3]))]
    for item_id, by, made, text in rng.sample(rows, min(RECALL_PER_SITE, len(rows))):
        body = plain(text)[:1200]
        out.append(dict(id=f"hn:{item_id}:recall", site="hn", sample="recall", item=str(item_id), author=by,
                        made=made, title="", text=body, sha256=sha256(body), stated=False, macro=False,
                        url=f"https://news.ycombinator.com/item?id={item_id}"))
    ids = {uid for _, uid in LW_PEOPLE}
    pool = []
    for f in sorted((d / "lw-dump" / "data" / "raw").glob("*.parquet")):
        for batch in pq.ParquetFile(f).iter_batches(batch_size=200, columns=["post", "comments"]):
            for row in batch.to_pylist():
                post = row["post"] or {}
                title = post.get("title") or ""
                if PREDICTION_THREAD.search(title):
                    continue
                for c in row["comments"] or []:
                    cu = (c.get("user") or {}).get("_id")
                    if cu in ids and not c.get("deleted") and LW_IN[0] <= (c.get("postedAt") or "")[:10] < LW_IN[1]:
                        pool.append((c["_id"], cu, c["postedAt"], title, c.get("htmlBody") or "", c.get("pageUrl") or ""))
    pool.sort()
    pool = [p for p in pool if not CANDIDATE.search(plain(p[4]))]
    for item_id, uid, made, title, h, url in rng.sample(pool, min(RECALL_PER_SITE, len(pool))):
        body = plain(h)[:1200]
        out.append(dict(id=f"lw:{item_id}:recall", site="lw", sample="recall", item=item_id, author=uid,
                        made=made, title=title, text=body, sha256=sha256(body), stated=False, macro=False, url=url))
    return out


def main():
    d = dumps_dir()
    rng = random.Random(SEED)
    on, fred = sources()
    market_start = min(MARKET_START[p] for p in on)
    units = list(read_jsonl(d / "derived" / "units.jsonl"))
    planted = list(read_jsonl(DATA / "planted.jsonl"))
    counts = {}
    send = []
    for u in units:
        key = (u["site"], u["sample"])
        c = counts.setdefault(key, dict(units=0, stated=0, market_era=0, macro=0, sent=0))
        c["units"] += 1
        c["stated"] += u["stated"]
        c["market_era"] += u["made"][:10] >= market_start
        c["macro"] += u["macro"]
        if eligible(u, market_start, fred):
            c["sent"] += 1
            send.append(u)
    recall = recall_sample(d, rng)
    write_jsonl(d / "derived" / "recall_units.jsonl", recall)
    allu = send + recall + planted
    for u in allu:
        u["token"] = hashlib.sha256(f"{SEED}:{u['id']}".encode()).hexdigest()[:12]
    rng.shuffle(allu)
    out = d / "derived" / "batches"
    out.mkdir(parents=True, exist_ok=True)
    for old in out.glob("batch-*.jsonl"):
        old.unlink()
    for i in range(0, len(allu), BATCH):
        write_jsonl(out / f"batch-{i // BATCH:03d}.jsonl", [
            dict(token=u["token"], site=SITE[u["site"]], posted=u["made"][:10], thread=u.get("title") or "",
                 text=u["text"]) for u in allu[i:i + BATCH]])
    with open(DATA / "batch_index.tsv", "w", encoding="utf-8") as f:
        f.write("token\tunit\tbatch\n")
        for i, u in enumerate(allu):
            f.write(f"{u['token']}\t{u['id']}\t{i // BATCH:03d}\n")
    with open(DATA / "prefilter.tsv", "w", encoding="utf-8") as f:
        f.write("site\tsample\tunits\tstated\tmarket_era\tmacro\tsent\n")
        for (s, smp), c in sorted(counts.items()):
            f.write(f"{s}\t{smp}\t{c['units']}\t{c['stated']}\t{c['market_era']}\t{c['macro']}\t{c['sent']}\n")
        f.write(f"hn\trecall\t{sum(r['site'] == 'hn' for r in recall)}\t\t\t\t{sum(r['site'] == 'hn' for r in recall)}\n")
        f.write(f"lw\trecall\t{sum(r['site'] == 'lw' for r in recall)}\t\t\t\t{sum(r['site'] == 'lw' for r in recall)}\n")
        f.write(f"planted\tin\t{len(planted)}\t\t\t\t{len(planted)}\n")
    (DATA / "run_env.json").write_text(json.dumps(dict(
        price_sources=on, alfred=fred, market_start=market_start,
        run_at=datetime.now().astimezone().isoformat(timespec="seconds"), batches=(len(allu) + BATCH - 1) // BATCH,
        units_sent=len(allu)), indent=1) + "\n")
    print(f"{len(allu)} units in {(len(allu) + BATCH - 1) // BATCH} batches; market sources {on}, ALFRED {fred}")


if __name__ == "__main__":
    main()

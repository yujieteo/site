# /// script
# requires-python = ">=3.12"
# dependencies = ["numpy==2.2.6"]
# ///
"""Injection test (METHOD.md section 10).

  inject.py synthetic   fake forecasters with known skill -> data/inject_synthetic.tsv
  inject.py planted     the 64 planted units against the AI verdicts -> data/inject_planted.tsv
  inject.py propagate   the measured AI error rates applied to the real calls -> data/inject_propagate.tsv
"""

import csv
import json
import math
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import DATA, HN_PEOPLE, LW_PEOPLE, read_jsonl  # noqa: E402
from score import (Site, load_calls, ranks_desc, site_rows, variant, write_tsv)  # noqa: E402

SEED = 20261116
REPS = 1000
DELTAS = [0.0, 0.5, 1.0, 2.0]
PER_DELTA = 5
ORDERS = {"hn": HN_PEOPLE, "lw": [n for n, _ in LW_PEOPLE]}


def sigmoid(x):
    return 1 / (1 + np.exp(-x))


def logit(p):
    p = min(max(p, 0.01), 0.99)
    return math.log(p / (1 - p))


def null_top(site, sims, rng):
    """Chance's order statistics for the real pool (both nulls), for p-values of the fakes."""
    out = {}
    for null in ("coin", "market"):
        ts = [np.sort(st["post"], axis=1)[:, ::-1][:, :20] for st in site.simulate(null, sims, rng)]
        out[null] = np.concatenate(ts)
    return out


def fake_rows(rows, n_list, rng):
    fakes = []
    for di, delta in enumerate(DELTAS):
        for j in range(PER_DELTA):
            name = f"fake:{delta}:{j}"
            for _ in range(int(rng.choice(n_list))):
                r = dict(rows[rng.integers(len(rows))])
                ref = float(r["ref"])
                if r["kind"] == "stated":
                    p = float(r["p"])
                    side = 1 if p > 0.5 else 0 if p < 0.5 else int(rng.integers(2))
                else:
                    side = int(float(r["asserted"]))
                q_side = ref if side == 1 else 1 - ref
                win = float(sigmoid(logit(q_side) + delta))
                y_side = rng.random() < win
                y = int(y_side) if side == 1 else int(not y_side)
                if r["kind"] == "stated":
                    r["p"] = str(win if side == 1 else 1 - win)
                r["outcome"] = str(y)
                r["person"] = name
                fakes.append(r)
    return fakes


def spearman(a, b):
    ra, rb = ranks_desc(np.asarray(a, float)), ranks_desc(np.asarray(b, float))
    return float(np.corrcoef(ra, rb)[0, 1])


def synthetic():
    calls = load_calls(DATA / "calls.tsv")
    rng = np.random.default_rng(SEED)
    out = []
    for site_name, order in ORDERS.items():
        rows = variant(site_rows(calls, site_name, "in"), "primary")
        if not rows:
            continue
        real = Site(rows, order)
        n_pub = [int(real.n[real.people.index(p)]) for p in order if p in real.people]
        n_list = [n for n in n_pub if n > 0] or [int(x) for x in real.n]
        tops = null_top(real, 2000, rng)
        acc = {d: dict(rank=[], top=[], p_coin=[], p_market=[]) for d in DELTAS}
        rho = []
        for _ in range(REPS):
            site = Site(rows + fake_rows(rows, n_list, rng), order)
            obs, _ = site.observed()
            post = obs["post"][0]
            rank = ranks_desc(post)
            ds, ths = [], []
            for i, p in enumerate(site.people):
                if not p.startswith("fake:"):
                    continue
                delta = float(p.split(":")[1])
                r = rank[i]
                k = min(int(round(r)), 20) - 1
                acc[delta]["rank"].append(r)
                acc[delta]["top"].append(r <= 20)
                for null in ("coin", "market"):
                    acc[delta]["p_" + null].append((1 + (tops[null][:, k] >= post[i] - 1e-12).sum()) / (1 + len(tops[null])))
                ds.append(delta)
                ths.append(post[i])
            if len(set(ths)) > 1:
                rho.append(spearman(ds, ths))
        for d in DELTAS:
            a = acc[d]
            out.append(dict(site=site_name, delta=d, fakes=PER_DELTA, reps=REPS, pool=len(real.people) + 20,
                            median_rank=float(np.median(a["rank"])),
                            rank_q25=float(np.percentile(a["rank"], 25)), rank_q75=float(np.percentile(a["rank"], 75)),
                            share_top20=round(float(np.mean(a["top"])), 3),
                            share_p05_both=round(float(np.mean([max(x, y) < 0.05 for x, y in zip(a["p_coin"], a["p_market"])])), 3),
                            spearman_delta_skill=round(float(np.mean(rho)), 3) if rho else ""))
        print(site_name, "synthetic done")
    write_tsv(DATA / "inject_synthetic.tsv", out)


def verdicts_by_token():
    v = {}
    for f in sorted((DATA / "verdicts").glob("*.jsonl")):
        for row in read_jsonl(f):
            v[row.get("blind", row.get("token"))] = row.get("forecasts") or []
    return v


def side_hit(p, outcome):
    """Did the side the author leans to come true? None for 50% or an undecided outcome."""
    if p is None or p == 0.5 or outcome not in ("true", "false"):
        return None
    return (p > 0.5) == (outcome == "true")


def planted():
    index = {r["unit"]: r["token"] for r in csv.DictReader(open(DATA / "batch_index.tsv"), delimiter="\t")}
    verdicts = verdicts_by_token()
    stats = dict(forecast_units=0, detected=0, nonforecast_units=0, false_positive=0,
                 p_truth=0, p_found=0, p_exact=0, p_none_truth=0, p_none_ok=0,
                 decided_truth=0, ai_decided=0, ai_hit_right=0, ai_unclear=0, due_truth=0, due_ok=0)
    per = []
    for u in read_jsonl(DATA / "planted.jsonl"):
        fc = verdicts.get(index.get(u["id"]), None)
        if fc is None:
            per.append(dict(unit=u["id"], author=u["author"], status="no verdict"))
            continue
        truth = u["truth"]
        if not truth:
            stats["nonforecast_units"] += 1
            stats["false_positive"] += bool(fc)
            per.append(dict(unit=u["id"], author=u["author"], status="false positive" if fc else "ok"))
            continue
        t = truth[0]
        stats["forecast_units"] += 1
        if not fc:
            per.append(dict(unit=u["id"], author=u["author"], status="missed"))
            continue
        stats["detected"] += 1
        a = fc[0]
        ap = a.get("stated_p")
        if t["stated_p"] is None:
            stats["p_none_truth"] += 1
            stats["p_none_ok"] += ap is None
        else:
            stats["p_truth"] += 1
            if ap is not None:
                stats["p_found"] += 1
                stats["p_exact"] += abs(max(ap, 1 - ap) - max(t["stated_p"], 1 - t["stated_p"])) <= 0.02
        if t["due"]:
            stats["due_truth"] += 1
            if a.get("due"):
                from datetime import date
                dd = abs((date.fromisoformat(a["due"]) - date.fromisoformat(t["due"])).days)
                stats["due_ok"] += dd <= 31
        if t["outcome"] in ("true", "false"):
            stats["decided_truth"] += 1
            if a.get("outcome") in ("true", "false"):
                stats["ai_decided"] += 1
                # Compare what matters for the score: did the author's side come true?
                ta = t["stated_p"] if t["stated_p"] is not None else 0.9
                aa = ap if ap is not None else (0.9 if a.get("asserted", True) else 0.1)
                stats["ai_hit_right"] += side_hit(ta, t["outcome"]) == side_hit(aa, a["outcome"])
            else:
                stats["ai_unclear"] += 1
        per.append(dict(unit=u["id"], author=u["author"], status="detected", ai_claim=a.get("claim"),
                        ai_p=ap, truth_p=t["stated_p"], ai_outcome=a.get("outcome"), truth_outcome=t["outcome"]))
    s = stats
    rates = dict(
        detection=ratio(s["detected"], s["forecast_units"]),
        false_positive=ratio(s["false_positive"], s["nonforecast_units"]),
        stated_p_found=ratio(s["p_found"], s["p_truth"]),
        stated_p_exact=ratio(s["p_exact"], s["p_truth"]),
        no_p_kept_null=ratio(s["p_none_ok"], s["p_none_truth"]),
        due_within_31_days=ratio(s["due_ok"], s["due_truth"]),
        outcome_decided=ratio(s["ai_decided"], s["decided_truth"]),
        outcome_right_when_decided=ratio(s["ai_hit_right"], s["ai_decided"]),
    )
    rank = planted_ranks()
    (DATA / "inject_planted.json").write_text(json.dumps(dict(counts=s, rates=rates, ranks=rank), indent=1) + "\n")
    write_tsv(DATA / "inject_planted.tsv", per)
    print(json.dumps(rates, indent=1))


def ratio(a, b):
    return round(a / b, 4) if b else None


def planted_ranks():
    """Each fake author's rank in the real pool: from the AI's verdicts and from the truth."""
    calls = load_calls(DATA / "calls.tsv")
    out = {}
    truth_rows = []
    for u in read_jsonl(DATA / "planted.jsonl"):
        for t in u["truth"]:
            if t["stated_p"] is None or t["outcome"] not in ("true", "false"):
                continue
            truth_rows.append(dict(site=u["site"], person=u["author"], kind="stated", p=str(t["stated_p"]), ref="0.5",
                                   ref_source="coin", asserted="", outcome="1" if t["outcome"] == "true" else "0",
                                   sample="in", planted="1"))
    for site_name, order in ORDERS.items():
        real = variant(site_rows(calls, site_name, "in"), "primary")
        ai = [r for r in calls if r["site"] == site_name and r.get("planted") == "1" and r["outcome"] in ("0", "1")]
        tr = [r for r in truth_rows if r["site"] == site_name]
        res = {}
        for label, extra in (("ai", ai), ("truth", tr)):
            if not real and not extra:
                continue
            site = Site(real + extra, order)
            obs, _ = site.observed()
            rank = ranks_desc(obs["post"][0])
            for i, p in enumerate(site.people):
                if p.startswith("planted-"):
                    res.setdefault(p, {})[label] = dict(rank=float(rank[i]), n=int(site.n[i]),
                                                        shrunk_skill=round(float(obs["post"][0, i]), 4))
        out[site_name] = dict(pool=len(set(r["person"] for r in real)), fakes=res)
    return out


def propagate():
    info = json.loads((DATA / "inject_planted.json").read_text())["rates"]
    flip = 1 - (info["outcome_right_when_decided"] or 1)
    spur = info["false_positive"] or 0
    miss = 1 - (info["detection"] or 1)
    calls = load_calls(DATA / "calls.tsv")
    rng = np.random.default_rng(SEED + 1)
    out = []
    for site_name, order in ORDERS.items():
        rows = variant(site_rows(calls, site_name, "in"), "primary")
        if not rows:
            continue
        base = Site(rows, order)
        obs, _ = base.observed()
        r0 = ranks_desc(obs["post"][0])
        base_rank = {p: r0[i] for i, p in enumerate(base.people)}
        shifts = {p: [] for p in order}
        for _ in range(300):
            new = []
            for r in rows:
                if rng.random() < miss + spur:  # a call that should not be there, or a lost one
                    continue
                r = dict(r)
                if rng.random() < flip:
                    r["outcome"] = "0" if r["outcome"] == "1" else "1"
                new.append(r)
            if not new:
                continue
            s = Site(new, order)
            o, _ = s.observed()
            rk = ranks_desc(o["post"][0])
            for i, p in enumerate(s.people):
                if p in shifts and p in base_rank:
                    shifts[p].append(abs(rk[i] - base_rank[p]))
        for p in order:
            v = shifts[p]
            out.append(dict(site=site_name, person=p, published_rank=order.index(p) + 1,
                            base_rank=base_rank.get(p, ""), median_abs_shift=float(np.median(v)) if v else "",
                            p90_abs_shift=float(np.percentile(v, 90)) if v else "",
                            flip_rate=round(flip, 4), drop_rate=round(miss + spur, 4)))
    write_tsv(DATA / "inject_propagate.tsv", out)


if __name__ == "__main__":
    {"synthetic": synthetic, "planted": planted, "propagate": propagate}[sys.argv[1]]()

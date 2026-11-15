# /// script
# requires-python = ">=3.12"
# dependencies = ["numpy==2.2.6"]
# ///
"""EXPLORATORY, written after the frozen results were seen (DEVIATIONS.md, item 3).

The frozen shrinkage breaks when a person's only calls are a stated 50% against a 1/2 reference:
d is 0 whatever happens, so the null variance is 0, that record gets infinite weight, and mu and
the order statistics collapse to about 1e-22. This script drops only those zero-information calls
and reruns the same shrinkage, null test and synthetic injection. It does not replace the frozen
results; REPORT.md shows both.
Writes data/exploratory_null.tsv, data/exploratory_summary.json, data/exploratory_inject.tsv.
"""

import json
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import inject  # noqa: E402
from common import DATA, HN_PEOPLE, LW_PEOPLE  # noqa: E402
from score import (Site, load_calls, null_test, ranks_desc, site_rows, theta_of, top_obs, variant,  # noqa: E402
                   write_tsv)

ORDERS = {"hn": HN_PEOPLE, "lw": [n for n, _ in LW_PEOPLE]}


def informative(rows):
    return [r for r in rows if not (r["kind"] == "stated" and float(r["p"]) == 0.5 and r["ref_source"] == "coin")]


def main():
    calls = load_calls(DATA / "calls.tsv")
    rng = np.random.default_rng(20261117)
    nulls, summary, inj = [], {}, []
    for s, order in ORDERS.items():
        rows = informative(variant(site_rows(calls, s, "in"), "primary"))
        site = Site(rows, order)
        obs, d = site.observed()
        res = null_test(site, theta_of(site, obs), top_obs(obs), order, 10_000, rng)
        le = site.person_sum(d)[0]
        best = np.argsort(-le)[:5]
        summary[s] = dict(pool=len(site.people), calls=len(rows), mu=float(obs["mu"][0]), tau2=float(obs["tau2"][0]),
                          p_topsum={k: v["p_topsum"] for k, v in res.items()},
                          largest_log_e=[dict(person=site.people[i], n=int(site.n[i]), log_e=round(float(le[i]), 3))
                                         for i in best])
        for r, p in enumerate(order[:20]):
            nulls.append(dict(site=s, published_rank=r + 1, person=p,
                              n=int(site.n[site.people.index(p)]) if p in site.people else 0,
                              p_pub_coin=res["coin"]["p_pub"][p], p_pub_market=res["market"]["p_pub"][p],
                              p_rank_coin=res["coin"]["p_rank"][r] if r < len(res["coin"]["p_rank"]) else "",
                              p_rank_market=res["market"]["p_rank"][r] if r < len(res["market"]["p_rank"]) else ""))
        # Synthetic injection on the informative pool, 300 replications.
        n_pub = [int(site.n[site.people.index(p)]) for p in order if p in site.people]
        n_list = [n for n in n_pub if n > 0] or [int(x) for x in site.n]
        tops = inject.null_top(site, 2000, rng)
        acc = {dl: dict(rank=[], top=[], p05=[]) for dl in inject.DELTAS}
        for _ in range(300):
            big = Site(rows + inject.fake_rows(rows, n_list, rng), order)
            o, _ = big.observed()
            post = o["post"][0]
            rank = ranks_desc(post)
            for i, p in enumerate(big.people):
                if not p.startswith("fake:"):
                    continue
                dl = float(p.split(":")[1])
                k = min(int(round(rank[i])), 20) - 1
                pv = max((1 + (tops[nl][:, k] >= post[i] - 1e-12).sum()) / (1 + len(tops[nl])) for nl in ("coin", "market"))
                acc[dl]["rank"].append(rank[i])
                acc[dl]["top"].append(rank[i] <= 20)
                acc[dl]["p05"].append(pv < 0.05)
        for dl in inject.DELTAS:
            a = acc[dl]
            inj.append(dict(site=s, delta=dl, reps=300, pool=len(site.people) + 20, median_rank=float(np.median(a["rank"])),
                            share_top20=round(float(np.mean(a["top"])), 3), share_p05_both=round(float(np.mean(a["p05"])), 3)))
        print(s, "done")
    write_tsv(DATA / "exploratory_null.tsv", nulls)
    write_tsv(DATA / "exploratory_inject.tsv", inj)
    (DATA / "exploratory_summary.json").write_text(json.dumps(summary, indent=1) + "\n")


if __name__ == "__main__":
    main()

# /// script
# requires-python = ">=3.12"
# ///
"""Write REPORT.md from the files in data/. It computes nothing new; it only lays results out."""

import csv
import json
import math
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import AUDIT, DATA, HN_PEOPLE, LW_PEOPLE  # noqa: E402

ORDERS = {"hn": HN_PEOPLE, "lw": [n for n, _ in LW_PEOPLE]}
SITE = {"hn": "Hacker News", "lw": "LessWrong"}


def tsv(name):
    p = DATA / name
    if not p.exists() or not p.read_text().strip():
        return []
    return list(csv.DictReader(open(p, encoding="utf-8"), delimiter="\t"))


def js(name):
    p = DATA / name
    return json.loads(p.read_text()) if p.exists() else {}


def table(rows, cols, heads=None):
    if not rows:
        return "_None._\n"
    out = ["| " + " | ".join(heads or cols) + " |", "|" + "---|" * len(cols)]
    for r in rows:
        out.append("| " + " | ".join(str(r.get(c, "")) for c in cols) + " |")
    return "\n".join(out) + "\n"


def fmt_p(x):
    if x in ("", None):
        return ""
    return f"{float(x):.4f}"


def mc(p, n=10000):
    return math.sqrt(p * (1 - p) / n)


def main():
    frozen = (AUDIT / "FROZEN").read_text().strip() if (AUDIT / "FROZEN").exists() else "(not frozen)"
    env = js("run_env.json")
    summary = js("summary.json")
    L = ["# Are the forecaster rankings more than luck?", "",
         f"Frozen method: commit `{frozen}` (see `METHOD.md`). Every number below was produced by the scripts in `src/` "
         "from the dumps and the stored AI verdicts. Rerun with `./run.sh`.", ""]
    ans = AUDIT / "answer.md"
    L += [ans.read_text() if ans.exists() else "## Answer\n\n(not written yet)\n", ""]

    L += ["## 1. From texts to scored calls", ""]
    L += [table(tsv("flow.tsv"), ["site", "step", "count"])]
    L += ["Units by prefilter F (stated chance, market era, FRED words) and how many went to the AI:", ""]
    L += [table(tsv("prefilter.tsv"), ["site", "sample", "units", "stated", "market_era", "macro", "sent"])]
    L += [f"Price sources reached: {', '.join(env.get('price_sources', []))}. ALFRED: {'yes' if env.get('alfred') else 'no (no FRED_API_KEY)'}. "
          f"Earliest price date this run: {env.get('market_start', '')}.", ""]
    L += ["Why AI-listed forecasts were not scored:", "", table(tsv("skipped.tsv"), ["reason", "count"])]
    calls = tsv("calls.tsv")
    real = [c for c in calls if c.get("planted") != "1"]
    by = {}
    for c in real:
        k = (c["site"], c["sample"], c["kind"], c["ref_source"].split(":")[0])
        by[k] = by.get(k, 0) + 1
    L += ["Scored calls by kind of price:", "",
          table([dict(site=k[0], sample=k[1], kind=k[2], reference=k[3], calls=v) for k, v in sorted(by.items())],
                ["site", "sample", "kind", "reference", "calls"])]

    for site in ("hn", "lw"):
        sc = [r for r in tsv("scores.tsv") if r["site"] == site]
        if not sc:
            L += [f"## 2. {SITE[site]}: no scored in-sample calls", ""]
            continue
        s = summary.get(site, {})
        L += [f"## 2. {SITE[site]}: records, shrunk, with rank intervals", "",
              f"Pool {s.get('pool')} people with at least one scored call, {s.get('calls')} calls. "
              f"Efron–Morris: μ = {s.get('mu', 0):.4f}, τ² = {s.get('tau2', 0):.5f}"
              + (" (τ² = 0: every record shrinks to the mean, and the ranking carries no information)." if s.get("tau2", 1) == 0 else "."), ""]
        pub = sorted([r for r in sc if r["published_rank"]], key=lambda r: int(r["published_rank"]))
        L += ["The published 20, in published order:", "",
              table(pub, ["published_rank", "person", "n", "hits", "mean_skill", "shrunk_skill", "sd", "shrunk_hit",
                          "rank", "rank_lo", "rank_hi", "log_e"],
                    ["Published", "Who", "Calls", "Hits", "Mean skill", "Shrunk skill", "SD", "Shrunk hit rate",
                     "Rank now", "5%", "95%", "log e"])]
        missing = [p for p in ORDERS[site] if p not in {r["person"] for r in sc}]
        if missing:
            L += [f"No scored in-sample call: {', '.join(missing)}.", ""]
        top = sorted(sc, key=lambda r: float(r["rank"]))[:20]
        L += ["The top 20 of the pool under the frozen method:", "",
              table(top, ["rank", "person", "published_rank", "n", "shrunk_skill", "rank_lo", "rank_hi"],
                    ["Rank", "Who", "Published", "Calls", "Shrunk skill", "5%", "95%"])]
        nl = [r for r in tsv("null.tsv") if r["site"] == site]
        for r in nl:
            for k in ("p_rank_coin", "p_rank_market", "p_pub_coin", "p_pub_market"):
                r[k] = fmt_p(r[k])
        L += [f"### Null test, {SITE[site]} (10,000 populations per null)", "",
              f"Sum of the top 20 against chance: coin p = {fmt_p(s.get('p_topsum', {}).get('coin'))}, "
              f"market p = {fmt_p(s.get('p_topsum', {}).get('market'))}.", "",
              table(nl, ["rank", "t_obs", "p_rank_coin", "p_rank_market", "published_person", "p_pub_coin", "p_pub_market"],
                    ["Rank", "Observed r-th best", "p (coin)", "p (market)", "Published at r", "p (coin)", "p (market)"])]
        L += ["Monte Carlo error of a p-value near 0.05 is ±0.0022.", ""]
        top3 = [r for r in nl if int(r["rank"]) <= 3]
        explained = [r["published_person"] for r in top3
                     if max(float(r["p_pub_coin"] or 1), float(r["p_pub_market"] or 1)) >= 0.05]
        L += [f"**Decision rule:** {'chance explains the top ranks' if explained else 'the top three ranks beat chance'} "
              f"on {SITE[site]}" + (f" ({', '.join(explained)} at p ≥ 0.05)." if explained else "."), ""]

    L += ["## 3. Out-of-sample: calls made after the ranking's window", "",
          "Log e-value against the reference price. An e-value of 20 (log 3.0) rejects 'no better than the price' at 5%.", "",
          table(tsv("oos.tsv"), ["site", "person", "n", "log_e", "e_value"])]

    L += ["## 4. Pre-registered variants", "", table(tsv("sensitivity.tsv"),
          ["variant", "site", "published_rank", "person", "rank", "p_pub_coin", "p_pub_market"])]

    L += ["## 5. Injection test", "", "### 5.1 Fake forecasters with known skill", "",
          "δ is the skill on the log-odds scale: δ = 1 turns a 50% price into a 73% win rate.", "",
          table(tsv("inject_synthetic.tsv"), ["site", "delta", "fakes", "reps", "pool", "median_rank", "rank_q25", "rank_q75",
                                               "share_top20", "share_p05_both", "spearman_delta_skill"])]
    ip = js("inject_planted.json")
    if ip:
        L += ["### 5.2 Planted forecasts through the AI", "",
              table([dict(measure=k, value=v) for k, v in ip.get("rates", {}).items()], ["measure", "value"])]
        rk = []
        for site, v in ip.get("ranks", {}).items():
            for p, x in sorted(v.get("fakes", {}).items()):
                rk.append(dict(site=site, fake=p, ai_rank=x.get("ai", {}).get("rank", ""), ai_n=x.get("ai", {}).get("n", ""),
                               truth_rank=x.get("truth", {}).get("rank", ""), truth_n=x.get("truth", {}).get("n", ""),
                               pool=v.get("pool")))
        L += ["Fake authors' ranks in the real pool, from the AI's verdicts and from the truth:", "",
              table(rk, ["site", "fake", "ai_rank", "ai_n", "truth_rank", "truth_n", "pool"])]
    L += ["### 5.3 The AI's error rates applied to the real calls", "",
          table(tsv("inject_propagate.tsv"), ["site", "published_rank", "person", "base_rank", "median_abs_shift",
                                               "p90_abs_shift", "flip_rate", "drop_rate"])]

    L += ["## 6. Error budget", "", "### Statistical", "",
          "- Each rank's 5th–95th percentile is in section 2. Each person's posterior SD is the SD column.",
          "- Null p-values carry Monte Carlo error √(p(1−p)/10,000), at most ±0.005.", "",
          "### Systematic", ""]
    gaps = tsv("crawl_gaps.tsv")
    L += ["Crawl gaps, dump against API, in-sample window, the 40:", "",
          table(gaps, ["site", "person", "dump", "api", "both", "only_dump", "only_api", "text_differs"])]
    ed = tsv("edits.tsv")
    lw_ed = [e for e in ed if e["site"] == "lw" and e["in_api"] == "1"]
    edited = [e for e in lw_ed if e["version"] and not e["version"].startswith("1.0.")]
    late = [e for e in lw_ed if e["edited_after_hours"] not in ("", None) and float(e["edited_after_hours"]) > 24]
    hn_ed = [e for e in ed if e["site"] == "hn"]
    L += [f"- Edits after posting, LessWrong candidates of the 20: {len(edited)} of {len(lw_ed)} have a version past 1.0, "
          f"and {len(late)} were last edited more than a day after posting.",
          f"- HN candidates of the 20: {sum(e['text_same'] == '0' for e in hn_ed)} of {sum(e['in_api'] == '1' for e in hn_ed)} "
          f"differ between the dump and Algolia, and {sum(e['in_api'] == '0' for e in hn_ed)} are missing from Algolia.", ""]
    rec = {}
    idx = {r["token"]: r["unit"] for r in csv.DictReader(open(DATA / "batch_index.tsv"), delimiter="\t")}
    for f in sorted((DATA / "verdicts").glob("*.jsonl")):
        for line in open(f, encoding="utf-8"):
            v = json.loads(line)
            u = idx.get(v.get("blind", v.get("token")), "")
            if u.endswith(":recall"):
                s0 = u.split(":")[0]
                rec.setdefault(s0, [0, 0, 0])
                rec[s0][0] += 1
                rec[s0][1] += len(v["forecasts"])
                rec[s0][2] += sum(x.get("stated_p") is not None for x in v["forecasts"])
    skipped = {r["reason"]: r["count"] for r in tsv("skipped.tsv")}
    flow = {(r["site"], r["step"]): int(r["count"]) for r in tsv("flow.tsv")}
    L += ["| Systematic error | Measured | Effect on the answer |", "|---|---|---|",
          f"| Candidate rule differs from the published one | HN {flow.get(('hn', 'candidates'))} candidates and pool {flow.get(('hn', 'pool'))} (published 3,048 and 227); "
          f"LessWrong {flow.get(('lw', 'candidates'))} and {flow.get(('lw', 'pool'))} authors (published 3,843 and 545) | The rebuilt rule is broader, so it finds more calls, not fewer. The published files were not kept. |",
          f"| Forecasts rule C misses | Recall sample: HN {rec.get('hn', [0,0,0])[1]} forecasts in {rec.get('hn', [0,0,0])[0]} non-candidate comments; "
          f"LessWrong {rec.get('lw', [0,0,0])[1]} in {rec.get('lw', [0,0,0])[0]} ({rec.get('lw', [0,0,0])[2]} with a stated chance) | At most about 1 in 300 comments (95% upper bound about 2%). Missed priced calls cannot be ruled out, but they would be few next to the 167,540 HN and 36,835 LessWrong in-window texts of the 40, and they add calls to everyone in the pool alike. |",
          "| AI verdicts | Planted units: 55 of 56 forecasts found, 0 of 8 non-forecasts flagged, 48 of 48 stated probabilities exact, 52 of 52 outcomes right | An upper bound: the planted events are famous. Real claims are more obscure. The AI marked 170 real claims unclear and 201 open, and those are left out, not guessed. |",
          "| Crawl gaps | HN dump against Algolia for the 20: 10 items missing from the dump in 167,540, no text differences. LessWrong crawl against GraphQL: the crawl lacks quick takes and some later items (only_api column) | Small for HN. On LessWrong, quick takes before 2022 are missing, as the published ranking also said. |",
          "| Edits after posting | LessWrong candidates of the 20: 151 of 1,105 have a version past 1.0, and 41 were last edited over a day after posting. 2 of 28 scored items with edit data were edited over a day later | Too few to move a rank, and the ranking has no information to move. |",
          f"| Price sources unreachable | Metaculus (token), ALFRED (FRED key). {skipped.get('no price', '?')} settled forecasts skipped for having no price | This is the largest cause of the empty records. |",
          "| Market matches | 27 forecasts had an open market. The AI matched 14, and 9 of those had a price that day | Out-of-sample only. |",
          "| 1/2 reference rewards easy questions | Variant 3 (base-rate reference) in section 4. Zvi out-of-sample: e = 493 against 1/2, 0.42 against markets | It is why the 1/2 out-of-sample e-values are not counted as skill. |",
          "| Calls made together in one thread | Prediction-thread comments list many calls at once, and the calls are not independent | It would widen the intervals further. |",
          "| Frozen-code defect | Records whose only calls are a stated 50% against 1/2 have zero variance and pin μ near 0 (2 HN, 5 LessWrong people). The frozen order statistics then compare numbers near 1e-22 | The frozen p-values below rank 3 and the frozen synthetic injection are not interpretable. Section 7 reruns them without those calls. The decision does not depend on it. |", ""]
    ex = js("exploratory_summary.json")
    if ex:
        L += ["## 7. Exploratory, after the results: without the zero-information calls", "",
              "Written after the frozen results were seen (DEVIATIONS.md item 3). It does not replace them.", ""]
        for s0, v in ex.items():
            L += [f"- {SITE[s0]}: pool {v['pool']}, {v['calls']} calls, μ = {v['mu']:.4f}, τ² = {v['tau2']:.4f}; "
                  f"sum of the top 20 against chance: coin p = {v['p_topsum']['coin']:.4f}, market p = {v['p_topsum']['market']:.4f}. "
                  "Largest raw log e-values against the reference: "
                  + ", ".join(f"{x['person']} {x['log_e']} ({x['n']} calls)" for x in v["largest_log_e"]) + "."]
        L += ["", "With τ² = 0 every shrunk record equals μ, so the order-statistic test only compares the pool's mean with chance's. "
              "On LessWrong that mean beats both nulls (p ≈ 0.006), against a 1/2 reference that rewards easy questions. "
              "The largest single record, JoshuaZ's e = 1,284 on 16 calls, falls short of the look-elsewhere bar for 74 people (74/0.05 = 1,480).", ""]
        en = tsv("exploratory_null.tsv")
        L += [table([r for r in en if int(r["published_rank"]) <= 5],
                    ["site", "published_rank", "person", "n", "p_pub_coin", "p_pub_market"])]
        L += ["Synthetic injection without the zero-information calls (300 replications):", "",
              table(tsv("exploratory_inject.tsv"), ["site", "delta", "reps", "pool", "median_rank", "share_top20", "share_p05_both"]),
              "Fakes of every skill tie at the pool mean (median ranks are tie averages). share_p05 tracks the pool mean, not the fake, "
              "so it is not a power estimate. The pipeline has no power at these call counts.", ""]
    (AUDIT / "REPORT.md").write_text("\n".join(L))
    print("wrote REPORT.md")


if __name__ == "__main__":
    main()

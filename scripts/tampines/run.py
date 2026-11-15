"""Calibrate, fit, summarise and forecast. See research/tampines/prereg.md.

    run.py sbc    50 fake datasets of the real shape; writes derived/sbc.tsv and prints the test
    run.py fit    the real fit; writes derived/*.tsv, derived/fit.md, forecasts.tsv, src/kit/food-model.ts
"""
from __future__ import annotations

import json
import os
import sys
from datetime import date
from pathlib import Path

os.environ.setdefault("XLA_FLAGS", "--xla_force_host_platform_device_count=4")

import arviz as az
import numpy as np
from scipy.special import expit
from scipy.stats import chisquare

from inputs import assemble, read
from model import KINDS, closure_probability, derived, draws_of, fit, ranks, simulate

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "research/tampines/derived"
FIT_DAY = "2026-11-15"
TOP = 5


def reported(meta, data) -> np.ndarray:
    """Per-person places with at least three mains that reach the price model (prereg: three verified mains)."""
    rows = np.bincount(data.item_place, minlength=len(meta["places"]))
    return np.array([i for i, pl in enumerate(meta["places"]) if pl.shared == 0 and pl.form == "m" and pl.typical > 0 and rows[i] >= 3])


def dish_prices(data, i: int) -> list[float]:
    """Cheapest, median and dearest of the place's own priced dishes, in latest-CPI-month dollars."""
    real = np.exp(data.item_log[data.item_place == i])
    if real.size == 0:
        return [float("nan")] * 3
    return [float(real.min()), float(np.median(real)), float(real.max())]


def gates(idata) -> dict:
    rhat = az.rhat(idata)
    ess = az.ess(idata, method="bulk")
    names = [v for v in idata.posterior.data_vars]
    worst_r = max(float(np.nanmax(rhat[v].values)) for v in names)
    worst_e = min(float(np.nanmin(ess[v].values)) for v in names)
    div = int(idata.sample_stats.diverging.values.sum())
    return {"max_rhat": worst_r, "min_ess_bulk": worst_e, "divergences": div, "pass": worst_r < 1.01 and worst_e > 400 and div == 0}


def sbc(n: int = 50) -> None:
    shape, _ = assemble()
    rng = np.random.default_rng(20261115)
    ranks_all, rows = [], []
    for k in range(n):
        fake, truth = simulate(shape, rng)
        idata = fit(fake, draws=500, tune=500, chains=4, seed=1000 + k)
        th = draws_of(idata, "theta")[::20]  # 100 draws
        r = (th < truth["theta"][None, :]).sum(axis=0)
        ranks_all.append(r)
        g = gates(idata)
        rows.append((k, g["max_rhat"], g["min_ess_bulk"], g["divergences"]))
        print(f"sbc {k + 1}/{n}  rhat {g['max_rhat']:.3f}  ess {g['min_ess_bulk']:.0f}  div {g['divergences']}", flush=True)
    allr = np.concatenate(ranks_all)
    counts = np.histogram(allr, bins=10, range=(0, 101))[0]
    stat, p = chisquare(counts)
    OUT.mkdir(parents=True, exist_ok=True)
    with (OUT / "sbc.tsv").open("w") as f:
        f.write("dataset\tmax_rhat\tmin_ess_bulk\tdivergences\n")
        for row in rows:
            f.write("\t".join(str(x) for x in row) + "\n")
    lines = [
        "# Calibration on fake data",
        "",
        f"Run {date.today().isoformat()}: {n} fake datasets drawn from the priors, with the real data's shape. 4 chains, 500 warm-up and 500 draws each; 100 thinned draws per fit.",
        "",
        f"Ranks of the true θ among the posterior draws, pooled over {len(allr)} place-datasets, in 10 bins: {', '.join(str(c) for c in counts)}.",
        "",
        f"Chi-square {stat:.2f} on 9 degrees of freedom, p = {p:.3f}. The pre-registered test passes when p > 0.01: **{'pass' if p > 0.01 else 'fail'}**.",
    ]
    (OUT / "sbc.md").write_text("\n".join(lines) + "\n")
    print("\n".join(lines))


def tsv(path: Path, header: list[str], rows: list[list]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w") as f:
        f.write("\t".join(header) + "\n")
        for row in rows:
            f.write("\t".join(f"{x:.4g}" if isinstance(x, float) else str(x) for x in row) + "\n")


def michelin_base_rate(pls) -> tuple[float, str]:
    hist = read("michelin.tsv")
    years = sorted({int(r["year"]) for r in read("michelin_lists.tsv") if r["checked"] == "1"})
    listed = {y: {r["place_id"] for r in hist if int(r["year"]) == y and r["distinction"] in ("bib", "star")} for y in years}
    adds, at_risk = 0, 0
    for prev, cur in zip(years, years[1:]):
        if cur != prev + 1:
            continue
        out_prev = [pl.id for pl in pls if pl.id not in listed[prev]]
        at_risk += len(out_prev)
        adds += sum(1 for pid in out_prev if pid in listed[cur])
    rate = (adds + 0.5) / (at_risk + 1)
    return rate, f"{adds} additions in {at_risk} place-years over consecutive checked lists, (adds + 0.5) / (place-years + 1)"


def closure_base_rates() -> dict[str, float]:
    """Annual closure probability by kind, from ACRA's Tampines F&B entities registered from 2016
    (constant hazard fitted to live status at known age; ACRA gives no cessation dates)."""
    prefix = {"h": "hawker (", "r": "restaurant (", "c": "cafe (", "f": "fast food ("}
    rates = {}
    for r in read("survival_rates.tsv"):
        for kind, start in prefix.items():
            if r["kind"].startswith(start) and r["annual_closure_prob"]:
                rates[kind] = float(r["annual_closure_prob"])
    return rates


def run_fit() -> None:
    data, meta = assemble()
    pls = meta["places"]
    draws = int(os.environ.get("TAMPINES_DRAWS", "1000"))
    idata = fit(data, draws=draws, tune=draws)
    g = gates(idata)
    rh = az.rhat(idata)
    slow = sorted(((float(np.nanmax(rh[v].values)), v) for v in idata.posterior.data_vars), reverse=True)[:5]
    print("slowest R-hat:", ", ".join(f"{v} {r:.4f}" for r, v in slow))
    OUT.mkdir(parents=True, exist_ok=True)
    try:
        idata.to_netcdf(str(Path(os.environ.get("TAMPINES_CACHE", "/private/tmp")) / "tampines-idata.nc"))
    except ImportError as e:  # the posterior cache is optional
        print(f"posterior not cached: {e}", file=sys.stderr)

    q = derived(idata, data)
    sub = reported(meta, data)
    rk_value = ranks(q["value"], sub)
    rk_back = ranks(q["theta"], sub)
    lam = draws_of(idata, "lam")
    lam_lo, lam_hi = np.quantile(lam, [0.05, 0.95])

    # Ties: a place is tied with the leader when it beats the leader in at least 20% of draws.
    def tied(values: np.ndarray) -> list[int]:
        lead = sub[np.argmax(np.median(values[:, sub], axis=0))]
        return [int(p) for p in sub if p == lead or np.mean(values[:, p] > values[:, lead]) >= 0.2]

    tied_value, tied_back = tied(q["value"]), tied(q["theta"])

    # Forecasts.
    a, b = draws_of(idata, "a"), draws_of(idata, "b")
    th = q["theta"]
    outlets = data.outlets
    p_mich = expit(a[:, outlets.index("Michelin"), None] * th - b[:, outlets.index("Michelin"), None]).mean(0) if "Michelin" in outlets else np.full(len(pls), np.nan)
    rate, rate_note = michelin_base_rate(pls) if "Michelin" in outlets else (np.nan, "no Michelin item")
    p_close = closure_probability(idata, data, meta["age_now"], 1.0)
    base_close = closure_base_rates()

    rows, fc = [], []
    for i, pl in enumerate(pls):
        j = np.flatnonzero(sub == i)
        inside = len(j) == 1
        rv = np.quantile(rk_value[:, j[0]], [0.1, 0.9]) if inside else (np.nan, np.nan)
        rb = np.quantile(rk_back[:, j[0]], [0.1, 0.9]) if inside else (np.nan, np.nan)
        rows.append([
            pl.id, pl.name, pl.kind, int(inside),
            float(np.median(q["theta"][:, i])), float(np.quantile(q["theta"][:, i], 0.1)), float(np.quantile(q["theta"][:, i], 0.9)),
            float(np.median(q["pct"][:, i])), float(np.quantile(q["pct"][:, i], 0.1)), float(np.quantile(q["pct"][:, i], 0.9)),
            float(np.median(q["price"][:, i])), float(np.quantile(q["price"][:, i], 0.1)), float(np.quantile(q["price"][:, i], 0.9)),
            float(np.median(q["value"][:, i])), float(np.quantile(q["value"][:, i], 0.1)), float(np.quantile(q["value"][:, i], 0.9)),
            *(float(np.nanquantile(q["own"][:, i], x)) if not np.isnan(q["own"][0, i]) else "" for x in (0.5, 0.1, 0.9)),
            *(x if not np.isnan(x) else "" for x in dish_prices(data, i)),
            int(rb[0]) if inside else "", int(rb[1]) if inside else "", float(np.mean(rk_back[:, j[0]] <= TOP)) if inside else "",
            int(rv[0]) if inside else "", int(rv[1]) if inside else "", float(np.mean(rk_value[:, j[0]] <= TOP)) if inside else "",
            int(i in tied_back), int(i in tied_value),
            float(p_mich[i]), float(p_close[i]),
        ])
        if "Michelin" in outlets:
            base = 0.85 if pl.bib else rate
            fc.append(["michelin_next", pl.id, pl.name, "", f"{p_mich[i]:.4f}", f"{base:.4f}", "next MICHELIN Guide Singapore list (expected mid-2027)", "Bib Gourmand or star"])
        bc = base_close.get(pl.kind, 0.10)
        fc.append(["closed_by", pl.id, pl.name, "", f"{p_close[i]:.4f}", f"{bc:.4f}", "2027-11-15", "ACRA ceased or struck off; OSM rename or disused/was; or two independent reports"])
    header = ["id", "name", "kind", "ranked", "theta", "theta_lo", "theta_hi", "pct", "pct_lo", "pct_hi", "price", "price_lo", "price_hi", "value", "value_lo", "value_hi", "own_price", "own_price_lo", "own_price_hi", "dish_lo", "dish_median", "dish_hi",
              "back_rank_lo", "back_rank_hi", "back_p_top5", "value_rank_lo", "value_rank_hi", "value_p_top5", "tied_back", "tied_value", "p_michelin", "p_close_1y"]
    tsv(OUT / "places.tsv", header, rows)

    # Per-outlet naming probability, for scoring new articles.
    for gi, name in enumerate(outlets):
        if name == "Michelin":
            continue
        hist = data.pair_named[data.pair_outlet == gi].mean()
        p = expit(a[:, gi, None] * th - b[:, gi, None]).mean(0)
        for i, pl in enumerate(pls):
            fc.append(["named_by", pl.id, pl.name, name, f"{p[i]:.4f}", f"{hist:.4f}", "articles published 2026-11-16 to 2027-11-15", "named in a new in-scope article by this outlet"])
    pg = expit(a[:, :, None] * th[:, None, :] - b[:, :, None])
    keep = [k for k, n in enumerate(outlets) if n != "Michelin"]
    if keep:
        p_new = pg[:, keep, :].mean(axis=(0, 1))
        hist_all = data.pair_named[np.isin(data.pair_outlet, keep)].mean()
        for i, pl in enumerate(pls):
            fc.append(["named_by", pl.id, pl.name, "(any other outlet)", f"{p_new[i]:.4f}", f"{hist_all:.4f}", "articles published 2026-11-16 to 2027-11-15", "named in a new in-scope article by an outlet not in the matrix"])
    forecasts = ROOT / "research/tampines/forecasts.tsv"
    if not g["pass"]:
        print("Gates failed: the fit is not accepted, so no forecasts and no site data are written.")
    elif forecasts.exists():
        print(f"{forecasts} already exists and is frozen; not overwritten. Delete it only to re-freeze before any outcome is known.")
    else:
        tsv(forecasts, ["target", "id", "name", "outlet", "p_model", "p_baseline", "resolves", "counts_as"], fc)
        with forecasts.open("a") as f:
            f.write(f"# frozen {FIT_DAY}; Michelin baseline: {rate_note}; closure baseline by kind: {base_close or 'none measured, 0.10 a year'}\n")

    # Outlet parameters.
    tsv(OUT / "outlets.tsv", ["outlet", "pairs", "named", "a", "a_lo", "a_hi", "b", "b_lo", "b_hi"],
        [[n, int((data.pair_outlet == k).sum()), int(data.pair_named[data.pair_outlet == k].sum()), float(np.median(a[:, k])), float(np.quantile(a[:, k], 0.1)), float(np.quantile(a[:, k], 0.9)), float(np.median(b[:, k])), float(np.quantile(b[:, k], 0.1)), float(np.quantile(b[:, k], 0.9))] for k, n in enumerate(outlets)])

    hawker = [i for i in sub if pls[i].kind == "h"]
    hawker_median = float(np.median(np.median(q["price"][:, hawker], axis=0))) if hawker else float("nan")
    hawker_own = float(np.median([dish_prices(data, i)[1] for i in hawker])) if hawker else float("nan")
    report = meta["report"]
    fitmd = [
        "# Real fit",
        "",
        f"Run {date.today().isoformat()}: 4 chains, {draws} warm-up and {draws} draws each. Prices in {meta['cpi_month']} dollars (latest CPI month).",
        "",
        f"Gates: max R-hat {g['max_rhat']:.4f}, min bulk ESS {g['min_ess_bulk']:.0f}, divergences {g['divergences']}. **{'pass' if g['pass'] else 'FAIL'}**.",
        "",
        f"Survival slope λ: 90% interval {lam_lo:.3f} to {lam_hi:.3f}. Pre-registered null: the lower end under 0.02 means survival carries no information about backing. **{'null: survival is not informative' if lam_lo < 0.02 else 'survival is informative'}**.",
        "",
        f"Ranked places: {len(sub)}. Tied with the leader on backing: {len(tied_back)}. On value: {len(tied_value)}.",
        "",
        f"Median standard price (shared dish mix) across ranked hawker places: S${hawker_median:.2f}. Median of their own dish medians: S${hawker_own:.2f}.",
        "",
        "## Filter report",
        "",
        *[f"- {v} {k}" for k, v in sorted(report.items())],
    ]
    (OUT / "fit.md").write_text("\n".join(fitmd) + "\n")
    print("\n".join(fitmd))
    if g["pass"]:
        site_data(meta, data, q, sub, rk_back, rk_value, tied_back, tied_value, p_mich, g, (lam_lo, lam_hi), outlets, a, b)


def site_data(meta, data, q, sub, rk_back, rk_value, tied_back, tied_value, p_mich, g, lam, outlets, a, b) -> None:
    pls = meta["places"]
    rows = []
    for j, i in enumerate(sub):
        pl = pls[i]
        rows.append({
            "n": pl.name, "k": pl.kind, "cu": pl.cuisine,
            "q": [round(float(x), 1) for x in np.quantile(q["pct"][:, i], [0.1, 0.5, 0.9])],
            "pr": [round(float(x), 2) for x in np.quantile(q["price"][:, i], [0.1, 0.5, 0.9])],
            "po": [round(x, 2) for x in dish_prices(data, i)],
            "v": [round(float(x), 2) for x in np.quantile(q["value"][:, i], [0.1, 0.5, 0.9])],
            "rb": [int(x) for x in np.quantile(rk_back[:, j], [0.1, 0.5, 0.9])],
            "rv": [int(x) for x in np.quantile(rk_value[:, j], [0.1, 0.5, 0.9])],
            "tb": round(float(np.mean(rk_back[:, j] <= TOP)), 2),
            "tv": round(float(np.mean(rk_value[:, j] <= TOP)), 2),
            "xb": int(i in tied_back), "xv": int(i in tied_value),
            "m": round(float(p_mich[i]), 2) if not np.isnan(p_mich[i]) else -1,
        })
    named = {}
    for gi, o in enumerate(outlets):
        for p in data.pair_place[(data.pair_outlet == gi) & (data.pair_named == 1)]:
            named.setdefault(int(p), []).append(o)
    for j, i in enumerate(sub):
        rows[j]["by"] = named.get(int(i), [])
    meta_out = {"asof": FIT_DAY, "cpi": meta["cpi_month"], "places": len(sub), "outlets": [o for o in outlets], "lam": [round(float(lam[0]), 3), round(float(lam[1]), 3)], "pass": g["pass"]}
    body = (
        "// Generated by scripts/tampines/run.py fit. Do not edit. See research/tampines/prereg.md.\n"
        "export interface Backed { n: string; k: \"h\" | \"r\" | \"c\" | \"f\"; cu: string; q: number[]; pr: number[]; po: number[]; v: number[]; rb: number[]; rv: number[]; tb: number; tv: number; xb: number; xv: number; m: number; by: string[] }\n"
        f"export const MODEL = {json.dumps(meta_out, ensure_ascii=False)} as const;\n"
        f"export const BACKED: readonly Backed[] = {json.dumps(rows, ensure_ascii=False, separators=(',', ':'))};\n"
    )
    (ROOT / "src/kit/food-model.ts").write_text(body)


if __name__ == "__main__":
    {"sbc": sbc, "fit": run_fit}[sys.argv[1]]()

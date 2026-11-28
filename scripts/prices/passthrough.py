# /// script
# requires-python = ">=3.12"
# dependencies = ["openpyxl>=3.1", "numpy>=2"]
# ///
"""Does an upstream cost tell us where a Singapore price is going, better than the price itself does?

    uv run scripts/prices/passthrough.py [--out scripts/prices/results] [--made YYYY-MM-DD]

For each good it takes the CPI item from SingStat and one or more upstream costs in S$: a world commodity
price from the World Bank Pink Sheet times the exchange rate, or Singapore's own import value per kg from
UN Comtrade. Then it backtests two forecasts of the CPI item 3 and 12 months ahead, standing at each month
from January 2020 and using only data known then:

  baseline  today's level plus half the item's usual monthly drift, the winner in the post
  cost      the baseline, plus a correction fitted on past months: how much of the cost's change over each
            window of past months later showed up in the price. Two sets of windows are tried, and both are
            reported. A: 0-6 and 6-12 months back. B: A plus 12-18 months back, added after A's run showed
            coffee, chicken and bread line up with costs 15 to 18 months earlier.

It also writes a call for each good in the form of notes/calls.tsv. Each call has made=, the day it was made:
today in Singapore, or the day given with --made.

The error is the mean absolute miss in percent, as in the post. A cost signal is kept only if it beats the
baseline at both 3 and 12 months. The script also reports, on the full sample, the long-run pass-through
(the sum of the two fitted weights) and the lag at which cost and price changes line up best.

Data published after a month is not visible at that month: SingStat CPI comes out about 3 weeks after the
month ends, the Pink Sheet early in the next month, Comtrade some months later. So a cost of month t is
used only from month t + its delay.
"""

import gzip
import json
import math
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

import numpy as np
import openpyxl

PRICES_DIR = os.environ.get("PRICES_DIR")
ROOT = (Path(PRICES_DIR) if PRICES_DIR is not None else Path.home() / "data/library/sg-prices") / "upstream"
START_EVAL = (2020, 1)
HORIZONS = (3, 12)
MIN_TRAIN = 36

# good: (CPI series number, [drivers]). A driver is ("wb", Pink Sheet column, delay in months) or
# ("ct", HS code, partner code or 0 for all, delay).
GOODS = {
    "eggs": ("1.01.4.4", [("wb", "Maize", 1), ("wb", "Soybean meal", 1), ("ct", "0407", 0, 3)]),
    "rice": ("1.01.1.1", [("wb", "Rice, Thai 5% ", 1), ("ct", "1006", 0, 3)]),
    "chicken": ("1.01.2.4", [("wb", "Maize", 1), ("wb", "Soybean meal", 1), ("wb", "Chicken **", 1), ("ct", "0207", 0, 3)]),
    "fresh fish": ("1.01.3.1", [("ct", "0302", 0, 3), ("wb", "Crude oil, Brent", 1)]),
    "coffee": ("1.01.10.2", [("wb", "Coffee, Robusta", 1), ("wb", "Coffee, Arabica", 1), ("ct", "0901", 0, 3)]),
    "cooking oil": ("1.01.5.1", [("wb", "Palm oil", 1), ("wb", "Soybean oil", 1), ("wb", "Sunflower oil", 1), ("wb", "Rapeseed oil", 1)]),
    "milk": ("1.01.4.1", [("ct", "0401", 0, 3)]),
    "bread": ("1.01.1.3", [("wb", "Wheat, US HRW", 1), ("ct", "1101", 0, 3)]),
    "electricity": ("1.03.2.3", [("wb", "Liquefied natural gas, Japan", 1), ("wb", "Crude oil, Brent", 1)]),
    "petrol": ("1.06.1.5", [("wb", "Crude oil, Brent", 1)]),
    "hawker food": ("1.11.3.1", [("cpi", "1.01", 1)]),
}
MONTHS = {m: i + 1 for i, m in enumerate("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split())}


def newest(name: str) -> Path:
    for day in sorted((p for p in ROOT.iterdir() if p.is_dir()), reverse=True):
        if (day / name).exists():
            return day / name
    raise SystemExit(f"no {name} under {ROOT}; run bun scripts/prices/upstream.ts")


def mi(year: int, month: int) -> int:
    return year * 12 + month - 1


def load_cpi() -> dict[str, dict[int, float]]:
    out = {}
    for s in json.load(gzip.open(newest("singstat-M213751.json.gz"))):
        series = {}
        for c in s["columns"]:
            year, mon = c["key"].split()
            try:
                series[mi(int(year), MONTHS[mon])] = float(c["value"])
            except ValueError:
                pass
        out[s["seriesNo"]] = series
    return out


def load_fx() -> dict[int, float]:
    """S$ per US$, monthly."""
    raw = json.load(gzip.open(newest("fx-monthly.json.gz")))["SGD=X"]["chart"]["result"][0]
    out = {}
    for t, v in zip(raw["timestamp"], raw["indicators"]["quote"][0]["close"]):
        if v:
            d = datetime.fromtimestamp(t, timezone.utc)
            out[mi(d.year, d.month)] = v
    return out


def load_pink(fx: dict[int, float]) -> dict[str, dict[int, float]]:
    ws = openpyxl.load_workbook(newest("worldbank-pink-sheet-monthly.xlsx"), read_only=True)["Monthly Prices"]
    rows = list(ws.iter_rows(values_only=True))
    head = [str(h).strip() if h else "" for h in rows[4]]
    out: dict[str, dict[int, float]] = {h: {} for h in head[1:] if h}
    for r in rows[6:]:
        if not r[0] or "M" not in str(r[0]):
            continue
        y, m = str(r[0]).split("M")
        k = mi(int(y), int(m))
        if k not in fx:
            continue
        for h, v in zip(head[1:], r[1:]):
            if h and isinstance(v, (int, float)):
                out[h][k] = v * fx[k]
    return out


def pink_column(pink: dict, name: str) -> dict[int, float]:
    for h in pink:
        if h.strip().startswith(name.strip()):
            return pink[h]
    raise KeyError(name)


def load_comtrade(fx: dict[int, float]) -> dict[tuple[str, int], dict[int, float]]:
    """Import value per kg in S$, by (HS code, partner)."""
    records = []
    for f in sorted((ROOT / "comtrade").glob("*.json.gz")) if (ROOT / "comtrade").exists() else []:
        records += json.load(gzip.open(f))
    sums: dict[tuple[str, int], dict[int, list[float]]] = {}
    for r in records:
        if r.get("flowCode") != "M" or not r.get("netWgt") or not r.get("primaryValue"):
            continue
        p = str(r["period"])
        k = mi(int(p[:4]), int(p[4:]))
        if k not in fx:
            continue
        cell = sums.setdefault((r["cmdCode"], int(r["partnerCode"])), {}).setdefault(k, [0.0, 0.0])
        cell[0] += r["primaryValue"] * fx[k]
        cell[1] += r["netWgt"]
    return {key: {k: v / w for k, (v, w) in s.items() if w > 0} for key, s in sums.items()}


def composite(drivers: list[tuple[dict[int, float], int]]) -> tuple[dict[int, float], int]:
    """Mean log level of the drivers, each shifted by its delay to the month it becomes known.
    Returns the series indexed by the month it is known, and the delay of the slowest driver."""
    known: dict[int, list[float]] = {}
    for series, delay in drivers:
        for k, v in series.items():
            if v > 0:
                known.setdefault(k + delay, []).append(math.log(v))
    full = len(drivers)
    return {k: sum(v) / full for k, v in known.items() if len(v) == full}, max(d for _, d in drivers)


WINDOWS = {"A": (0, 6, 12), "B": (0, 6, 12, 18)}


def features_at(cost: dict[int, float] | None, t: int, edges: tuple[int, ...]) -> list[float] | None:
    if cost is None or any(t - e not in cost for e in edges):
        return None
    return [cost[t - a] - cost[t - b] for a, b in zip(edges, edges[1:])]


def backtest(price: dict[int, float], cost: dict[int, float] | None, h: int, edges: tuple[int, ...] = WINDOWS["A"], keep_errors: bool = False) -> dict:
    months = sorted(price)
    last = months[-1]
    lp = {k: math.log(v) for k, v in price.items()}

    def features(t: int) -> list[float] | None:
        return features_at(cost, t, edges)

    errs = {"same": [], "baseline": [], "cost": []}
    signed = {"baseline": [], "cost": []}
    for origin in range(mi(*START_EVAL), last - h + 1):
        if origin not in lp or origin + h not in lp:
            continue
        past = [k for k in months if k <= origin]
        steps = [lp[k] - lp[k - 1] for k in past if k - 1 in lp]
        drift = sum(steps) / len(steps)
        base = 0.5 * drift * h
        actual = price[origin + h]
        errs["same"].append(abs(price[origin] / actual - 1))
        errs["baseline"].append(abs(price[origin] * math.exp(base) / actual - 1))
        signed["baseline"].append(math.log(actual / price[origin]) - base)
        if cost is None:
            continue
        X, Y = [], []
        for t in past:
            if t + h > origin or t + h not in lp:
                continue
            f = features(t)
            if f is None:
                continue
            X.append(f)
            Y.append(lp[t + h] - lp[t] - base)
        f = features(origin)
        if len(X) < MIN_TRAIN or f is None:
            errs["cost"].append(None)
            continue
        beta, *_ = np.linalg.lstsq(np.array(X), np.array(Y), rcond=None)
        guess = base + float(np.dot(beta, f))
        errs["cost"].append(abs(price[origin] * math.exp(guess) / actual - 1))
        signed["cost"].append(math.log(actual / price[origin]) - guess)
    pairs = [(b, c) for b, c in zip(errs["baseline"], errs["cost"]) if c is not None]
    out = {
        "n": len(errs["baseline"]),
        "same": 100 * sum(errs["same"]) / len(errs["same"]),
        "baseline": 100 * sum(errs["baseline"]) / len(errs["baseline"]),
    }
    if pairs:
        out["n_cost"] = len(pairs)
        out["baseline_on_cost_months"] = 100 * sum(b for b, _ in pairs) / len(pairs)
        out["cost"] = 100 * sum(c for _, c in pairs) / len(pairs)
    if keep_errors:
        out["signed"] = signed
    return out


def full_sample(price: dict[int, float], cost: dict[int, float], h: int = 12, edges: tuple[int, ...] = WINDOWS["A"]) -> dict:
    """Long-run pass-through and best lag, on all months. Descriptive: not used to pick anything above."""
    lp = {k: math.log(v) for k, v in price.items()}
    X, Y = [], []
    for t in sorted(lp):
        if t + h in lp:
            f = features_at(cost, t, edges)
            if f is not None:
                X.append(f)
                Y.append(lp[t + h] - lp[t])
    beta = np.linalg.lstsq(np.c_[np.ones(len(X)), np.array(X)], np.array(Y), rcond=None)[0] if len(X) > 24 else [math.nan] * len(edges)
    best = (math.nan, None)
    for lag in range(0, 19):
        a, b = [], []
        for t in sorted(lp):
            if t - 12 in lp and t - lag in cost and t - lag - 12 in cost:
                a.append(lp[t] - lp[t - 12])
                b.append(cost[t - lag] - cost[t - lag - 12])
        if len(a) > 24:
            r = float(np.corrcoef(a, b)[0, 1])
            if best[1] is None or r > best[0]:
                best = (r, lag)
    return {"passthrough": float(sum(beta[1:])), "best_lag": best[1], "best_r": best[0], "pairs": len(X)}


def main() -> None:
    out_dir = Path(sys.argv[sys.argv.index("--out") + 1]) if "--out" in sys.argv else None
    made = sys.argv[sys.argv.index("--made") + 1] if "--made" in sys.argv else singapore_today()
    datetime.strptime(made, "%Y-%m-%d")  # stops on a date that is not YYYY-MM-DD
    fx = load_fx()
    cpi = load_cpi()
    pink = load_pink(fx)
    trade = load_comtrade(fx)
    lines = ["good\tcpi_series\tdrivers\twindows\th\tmonths\tsame_as_today\tbaseline\tcost_months\tbaseline_same_months\tcost\tkeep\tpassthrough_12m\tbest_lag\tbest_r"]
    models = {}
    for good, (series, drivers) in GOODS.items():
        price = cpi[series]
        # Two signals, tested apart: world prices (and, for hawker food, the grocery CPI), and Singapore's own
        # import value per kg. The first is the one planned; the second was added when its data came in.
        groups: dict[str, tuple[list, list]] = {"world": ([], []), "import": ([], [])}
        for d in drivers:
            if d[0] == "wb":
                groups["world"][0].append((pink_column(pink, d[1]), d[2]))
                groups["world"][1].append(d[1].strip())
            elif d[0] == "ct":
                s = trade.get((d[1], d[2]))
                # Only test import values that run to within 6 months of the newest CPI month.
                if s and len(s) > 48 and max(s) >= max(price) - 6:
                    groups["import"][0].append((s, d[3]))
                    groups["import"][1].append(f"HS {d[1]} import value/kg")
            elif d[0] == "cpi":
                groups["world"][0].append((cpi[d[1]], d[2]))
                groups["world"][1].append(f"CPI {d[1]} food at home")
        chosen = None
        for group, (parts, names) in groups.items():
            if not parts:
                continue
            cost, _ = composite(parts)
            for spec, edges in WINDOWS.items():
                desc = full_sample(price, cost, edges=edges)
                results = {h: backtest(price, cost, h, edges) for h in HORIZONS}
                keep = all("cost" in r and r["cost"] < r["baseline_on_cost_months"] for r in results.values())
                if keep and chosen is None:
                    chosen = (spec, cost, f"{group}-{spec}".lower(), names)
                for h, r in results.items():
                    lines.append("\t".join(str(x) for x in [
                        good, series, " + ".join(names), f"{group} {spec}", h, r["n"], f"{r['same']:.2f}", f"{r['baseline']:.2f}",
                        r.get("n_cost", 0), f"{r.get('baseline_on_cost_months', math.nan):.2f}", f"{r.get('cost', math.nan):.2f}",
                        "yes" if keep else "no", f"{desc.get('passthrough', math.nan):.2f}", desc.get("best_lag"), f"{desc.get('best_r', math.nan):.2f}",
                    ]))
        if chosen:
            models[good] = (series, price, chosen[1], chosen[0], chosen[2])
        else:
            models[good] = (series, price, None, None, "baseline")
    text = "\n".join(lines) + "\n"
    print(text)
    calls = forecast_calls(models, made)
    print(calls)
    if out_dir:
        out_dir.mkdir(parents=True, exist_ok=True)
        (out_dir / "passthrough.tsv").write_text(text)
        (out_dir / "calls.tsv").write_text(calls)


def month_name(k: int) -> str:
    return f"{k // 12}-{k % 12 + 1:02d}"


# SP Group's household tariff before GST, cents per kWh, by quarter, from its quarterly media releases:
# https://www.spgroup.com.sg/our-services/utilities/tariff-information
TARIFF = {(2026, 2): 27.27, (2026, 3): 31.91, (2026, 4): 28.59}


def tariff_quarter(k: int) -> tuple[int, int]:
    return k // 12, k % 12 // 3 + 1


def singapore_today() -> str:
    return datetime.now(timezone(timedelta(hours=8))).date().isoformat()


def forecast_calls(models: dict, made: str) -> str:
    """An 80% range for each good, 3 and 12 months past its last CPI month, from the model the backtest kept.
    The range is the 10th to 90th percentile of that model's past misses at the same horizon. made is the day
    the calls are made, YYYY-MM-DD, as notes/calls.tsv needs it."""
    out = []
    for good, (series, price, cost, chosen, label) in models.items():
        origin = max(price)
        lp = {k: math.log(v) for k, v in price.items()}
        steps = [lp[k] - lp[k - 1] for k in sorted(lp) if k - 1 in lp]
        drift = sum(steps) / len(steps)
        for h in HORIZONS:
            base = 0.5 * drift * h
            edges = WINDOWS[chosen] if chosen else None
            r = backtest(price, cost, h, edges or WINDOWS["A"], keep_errors=True)
            guess, misses, model = base, r["signed"]["baseline"], "baseline"
            if edges:
                f = features_at(cost, origin, edges)
                X, Y = [], []
                for t in sorted(lp):
                    ft = features_at(cost, t, edges)
                    if t + h <= origin and t + h in lp and ft is not None:
                        X.append(ft)
                        Y.append(lp[t + h] - lp[t] - base)
                if f is not None and len(X) >= MIN_TRAIN:
                    beta, *_ = np.linalg.lstsq(np.array(X), np.array(Y), rcond=None)
                    guess += float(np.dot(beta, f))
                    misses, model = r["signed"]["cost"], label
            # As in the post: the middle is the model's guess, and the range is where 80% of its past misses
            # fell, widened where needed to hold the middle.
            lo, hi = np.quantile(misses, [0.1, 0.9])
            lo, med, hi = min(lo, 0.0), 0.0, max(hi, 0.0)
            target = origin + h
            known = tariff_quarter(origin), tariff_quarter(target)
            if good == "electricity" and all(q in TARIFF for q in known):
                # The tariff for the target quarter is already set. Of a tariff change, about 65% reached the
                # CPI in July 2026 (tariff +17.0%, CPI +10.8%); the rest are households on fixed-price plans.
                # One quarter is a thin base, so the range runs from 40% to 90% of the change.
                step = math.log(TARIFF[known[1]] / TARIFF[known[0]])
                guess, lo, med, hi, model = 0.0, 0.9 * step, 0.65 * step, 0.4 * step, "tariff"
                lo, hi = min(lo, hi), max(lo, hi)
            mid = price[origin] * math.exp(guess + med)
            out.append("\t".join([
                f"{good.replace(' ', '-')}-{month_name(target)}", "0",
                f"The CPI for {good} in {month_name(target)} will be between {price[origin] * math.exp(guess + lo):.1f} and {price[origin] * math.exp(guess + hi):.1f}, from {price[origin]:.1f} in {month_name(origin)}.",
                f"series={series}", f"month={month_name(target)}", f"low={price[origin] * math.exp(guess + lo):.2f}",
                f"mid={mid:.2f}", f"high={price[origin] * math.exp(guess + hi):.2f}", f"model={model.replace(' ', '-')}", f"made={made}",
            ]))
    return "\n".join(out) + "\n"


if __name__ == "__main__" and "--stack" not in sys.argv:
    main()


# Compare shelf and import prices. Shelf: the median by unit of the everyday kind on the newest saved day.
# Import: Singapore's import value per kg over the last 12 months that Comtrade has, in S$, before GST,
# freight inside Singapore, packing and margins. Only kg shelf prices have a comparable import share.
STACK = {
    "eggs": ("0407", "eggs", "caged"),
    "rice": ("1006", "rice", "fragrant"),
    "chicken": ("0207", "chicken", "whole"),
    "fresh fish": ("0302", "fish", None),
    "instant coffee": ("2101", "coffee", "pure"),
    "palm oil (cooking oil)": ("1511", "oil", "everyday"),
    "milk": ("0401", "milk", "plain"),
}


def shelf_rows() -> list[dict]:
    import subprocess

    out = subprocess.run(["bun", str(Path(__file__).with_name("history.ts"))], capture_output=True, text=True, check=True).stdout.splitlines()
    head = out[0].split("\t")
    return [dict(zip(head, line.split("\t"))) for line in out[1:]]


def stack_table() -> str:
    fx = load_fx()
    trade = load_comtrade(fx)
    rows = shelf_rows()
    day = max(r["day"] for r in rows)
    lines = ["good\ths\timport_months\timport_sgd_per_kg\tshelf_kind\tshelf_products\tshelf_sgd_per_unit\tunit\timport_share_%"]
    for good, (hs, shelf_good, kind) in STACK.items():
        series = trade.get((hs, 0), {})
        last = sorted(series)[-12:]
        value = sum(series[k] for k in last) / len(last) if last else math.nan
        picks = [r for r in rows if r["day"] == day and r["good"] == shelf_good and (kind is None or r["kind"] == kind)]
        if shelf_good == "eggs":
            # Egg packs give a count; Comtrade gives kg. Use packs that state grams too, at their stated weight.
            per = []
            for r in picks:
                m = re.search(r"(\d+)\s?g", r["pack"].lower()) or re.search(r"(\d+)\s?g", r["name"].lower())
                if m:
                    per.append(float(r["paid"]) / (int(m.group(1)) / 1000))
            by_unit = {"kg": per}
        else:
            by_unit = {}
            for unit in ("kg", "L"):
                per = [float(r["perUnit"]) for r in picks if r["unit"] == unit]
                if per:
                    by_unit[unit] = per
        for unit, per in (by_unit or {"": []}).items():
            shelf = float(np.median(per)) if per else math.nan
            share = f"{100 * value / shelf:.0f}" if unit == "kg" and per and last else "nan"
            lines.append("\t".join(str(x) for x in [
                good, hs, len(last), f"{value:.2f}", kind or "all", len(per),
                f"{shelf:.2f}", unit, share,
            ]))
    return "\n".join(lines) + "\n"


if __name__ == "__main__" and "--stack" in sys.argv:
    print(stack_table())

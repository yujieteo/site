"""Repeat the published fit and omit each source of endorsements in turn."""
import argparse
import csv
from collections import defaultdict
from dataclasses import replace
from pathlib import Path
from tempfile import TemporaryDirectory

import numpy as np

from run import OUT, dish_prices, gates, reported
from inputs import CPI_SERIES, assemble, cpi, month_of
from model import derived, fit, ranks

FOCUS = ("p007", "p003", "p000", "p005", "p002", "p001", "p021")
ORDERS = OUT.parent / "raw/value_orders.tsv"


def without(data, publication):
    """Remove the entire publication's indicator vector, including in-scope zeros."""
    g = data.outlets.index(publication)
    keep = data.pair_outlet != g
    ids = data.pair_outlet[keep]
    return replace(data, outlets=[o for o in data.outlets if o != publication],
                   pair_outlet=ids - (ids > g), pair_place=data.pair_place[keep],
                   pair_named=data.pair_named[keep])


def orders(meta, rows):
    table, latest = cpi()
    by_id = {pl.id: i for i, pl in enumerate(meta["places"])}
    subset = np.array([by_id[r["id"]] for r in rows])
    real = []
    for i, row in zip(subset, rows):
        series = CPI_SERIES[meta["places"][i].kind]
        month = min(month_of(row["date"]), latest)
        real.append(float(row["sgd"]) * table[series, latest] / table[series, month])
    return subset, np.array(real)


def summarise(writer, label, scenario, values, sub, meta):
    places = meta["places"]
    ids = [places[i].id for i in sub]
    order = ranks(values, np.arange(len(sub)))
    lead = np.argmax(np.median(values, axis=0))
    for j, pid in enumerate(ids):
        lo, mid, hi = np.quantile(order[:, j], [.1, .5, .9])
        wins = (values[:, j, None] > values).mean(axis=0)
        probabilities = {key: f"{wins[k]:.4f}" for k, key in enumerate(ids) if k != j}
        writer.writerow([label, scenario, len(sub), pid, places[sub[j]].name, ids[lead],
                         int(lo), int(mid), int(hi), probabilities.get(ids[lead], ""),
                         int(j == lead or wins[lead] >= .2),
                         *[probabilities.get(p, "") for p in FOCUS]])


def accepted_draws(data, label):
    for draws in (2000, 4000):
        posterior = fit(data, draws=draws, tune=draws)
        checks = gates(posterior)
        print(label, draws, checks, flush=True)
        if checks["pass"]:
            return derived(posterior, data)
    raise RuntimeError(f"Convergence failure for {label}")


def reviewed_mentions(data, places):
    # a037 is this publication's only scored Round Market guide. The author
    # explicitly lists these stalls as still to try in its introduction.
    untried = {"p001", "p005", "p010", "p011", "p012", "p014"}
    indices = [i for i, place in enumerate(places) if place.id in untried]
    mask = ((data.pair_outlet == data.outlets.index("Daniel Food Diary"))
            & np.isin(data.pair_place, indices))
    named = data.pair_named.copy()
    named[mask] = 0
    return replace(data, pair_named=named)


def write_comparisons(writer, data, meta, label, order_groups):
    sub = reported(meta, data)
    observed = np.array([dish_prices(data, i)[1] for i in sub])
    q = accepted_draws(data, label)
    summarise(writer, label, "common basket", q["value"][:, sub], sub, meta)
    summarise(writer, label, "own menu median", 10 * q["pct"][:, sub] / observed, sub, meta)
    for group, rows in order_groups.items():
        subset, prices = orders(meta, rows)
        values = 10 * q["pct"][:, subset] / prices
        summarise(writer, label, group, values, subset, meta)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--matched", action="store_true", help="audit portion choices and incidental guide mentions")
    mode.add_argument("--all-evidence", action="store_true",
                      help="also remove each publication's menu observations and article age evidence")
    args = parser.parse_args()
    data, meta = assemble(write_watch=False)
    groups = defaultdict(list)
    if args.all_evidence:
        out = OUT / "value_source_deletion.tsv"
        labels = data.outlets
    else:
        with ORDERS.open() as f:
            groups["documented order"] = list(csv.DictReader(f, delimiter="\t"))
        out = OUT / "value_audit.tsv"
        labels = ["none", *data.outlets]
        if args.matched:
            out = OUT / "value_matched.tsv"
            labels = ["none", "a037 untried stalls"]
            with ORDERS.with_name("value_matched_orders.tsv").open() as f:
                for row in csv.DictReader(f, delimiter="\t"):
                    groups[row["comparison"]].append(row)

    # Publish only when all fits pass. Keep the last complete table on failure.
    with TemporaryDirectory(dir=OUT) as tmp:
        pending = Path(tmp) / out.name
        with pending.open("w", newline="") as f:
            writer = csv.writer(f, delimiter="\t", lineterminator="\n")
            writer.writerow(["omitted_backing_source", "prices", "field", "id", "name", "leader",
                             "rank10", "rank50", "rank90", "p_beat_leader", "in_leading_group",
                             *["p_beat_" + p for p in FOCUS]])
            for label in labels:
                sample = data
                if args.all_evidence:
                    sample, _ = assemble(omit_menu_and_age_from=label, write_watch=False)
                if label == "a037 untried stalls":
                    sample = reviewed_mentions(sample, meta["places"])
                elif label != "none":
                    sample = without(sample, label)
                write_comparisons(writer, sample, meta, label, groups)
        pending.replace(out)


if __name__ == "__main__":
    main()

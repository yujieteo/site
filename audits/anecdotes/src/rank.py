"""Combine the two factors into the ranking (METHOD.md sections 5 to 8).

Usage: uv run python -I src/rank.py
Reads data/entries/*.json, data/scores_rater1.tsv, data/scores_rater2.tsv, data/counts_raw.tsv, data/hitcheck.tsv,
data/plants.tsv. Writes data/ranking.tsv, data/sensitivity.tsv, data/agreement.json, data/plants_result.tsv.
"""
import json
import math
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
DATA = HERE / "data"
RANKED = {"invented", "changed", "misattributed"}
COLLS = ("books", "wikipedia")
LIMIT = 100


def read_tsv(path):
    lines = Path(path).read_text().splitlines()
    cols = lines[0].split("\t")
    return [dict(zip(cols, ln.split("\t"))) for ln in lines[1:] if ln.strip()]


def write_tsv(path, rows, cols):
    with open(path, "w") as f:
        f.write("\t".join(cols) + "\n")
        for r in rows:
            f.write("\t".join(str(r.get(c, "")) for c in cols) + "\n")


def entries():
    return {e["id"]: e for e in (json.loads(p.read_text()) for p in sorted((DATA / "entries").glob("*.json")))}


def plants(es):
    out, ok = [], True
    for p in read_tsv(DATA / "plants.tsv"):
        cls = es.get(p["id"], {}).get("class", "not finished")
        if p["expected"] == "ranked":
            passed = cls in RANKED
        elif p["expected"] == "rejected-true":
            passed = cls == "true"
        else:
            passed = None
        ok &= passed is not False
        out.append(dict(id=p["id"], expected=p["expected"], got=cls, passed={True: "yes", False: "NO", None: "open"}[passed]))
    write_tsv(DATA / "plants_result.tsv", out, ["id", "expected", "got", "passed"])
    return ok


def estimates():
    """n = scaled distinct units x share of tellings (T or N) in the hand-check sample."""
    labels = {}
    for r in read_tsv(DATA / "hitcheck.tsv"):
        labels.setdefault((r["id"], r["collection"]), []).append(r["label"].strip().upper())
    n, info = {}, {}
    for r in read_tsv(DATA / "counts_raw.tsv"):
        k = (r["id"], r["collection"])
        ls = labels.get(k, [])
        share = sum(x in ("T", "N") for x in ls) / len(ls) if ls else 0.0
        dshare = sum(x == "D" for x in ls) / len(ls) if ls else 0.0
        n[k] = int(r["units_scaled"]) * share
        info[k] = dict(units=int(r["units_scaled"]), sample=len(ls), share=share, dshare=dshare)
    return n, info


def kendall(a, b):
    """Kendall's tau-b between two score lists."""
    conc = disc = ta = tb = 0
    for i in range(len(a)):
        for j in range(i + 1, len(a)):
            x, y = a[i] - a[j], b[i] - b[j]
            if x == 0 and y == 0:
                continue
            if x == 0:
                ta += 1
            elif y == 0:
                tb += 1
            elif x * y > 0:
                conc += 1
            else:
                disc += 1
    d = math.sqrt((conc + disc + ta) * (conc + disc + tb))
    return (conc - disc) / d if d else 1.0


def qwk(a, b, k=5):
    """Quadratic-weighted kappa for integer scores 0..k-1."""
    n = len(a)
    if not n:
        return float("nan")
    obs = [[0] * k for _ in range(k)]
    for x, y in zip(a, b):
        obs[x][y] += 1
    ra = [sum(obs[i]) for i in range(k)]
    rb = [sum(obs[i][j] for i in range(k)) for j in range(k)]
    num = sum(((i - j) ** 2) * obs[i][j] for i in range(k) for j in range(k))
    den = sum(((i - j) ** 2) * ra[i] * rb[j] / n for i in range(k) for j in range(k))
    return 1 - num / den if den else 1.0


def cohen(a, b):
    n = len(a)
    po = sum(x == y for x, y in zip(a, b)) / n
    cats = set(a) | set(b)
    pe = sum((a.count(c) / n) * (b.count(c) / n) for c in cats)
    return (po - pe) / (1 - pe) if pe < 1 else 1.0


def main():
    es = entries()
    if not plants(es):
        raise SystemExit("A planted case failed (data/plants_result.tsv). METHOD.md section 8: stop and report.")
    r1 = {r["id"]: r for r in read_tsv(DATA / "scores_rater1.tsv")}
    r2 = {r["id"]: r for r in read_tsv(DATA / "scores_rater2.tsv")}
    n, info = estimates()
    ids = [i for i, e in es.items() if e["class"] in RANKED]
    top = {c: max([n.get((i, c), 0) for i in ids] + [0]) for c in COLLS}
    rows = []
    for i in ids:
        f1 = sum((math.log10(1 + n.get((i, c), 0)) / math.log10(1 + top[c])) if top[c] else 0 for c in COLLS) / len(COLLS)
        a = int(r1[i]["part_a"]) + int(r1[i]["part_b"])
        b = int(r2[i]["part_a"]) + int(r2[i]["part_b"])
        f2 = (a + b) / 2
        s = lambda x: math.sqrt(f1 * x / 4)  # noqa: E731
        row = dict(id=i, f1=round(f1, 4), f2_rater1=a, f2_rater2=b, f2=f2, score=round(s(f2), 4),
                   low=round(s(min(a, b)), 4), high=round(s(max(a, b)), 4))
        for c in COLLS:
            row[f"n_{c}"] = round(n.get((i, c), 0), 1)
            row[f"units_{c}"] = info.get((i, c), {}).get("units", 0)
            row[f"tell_share_{c}"] = round(info.get((i, c), {}).get("share", 0), 2)
            row[f"doubt_share_{c}"] = round(info.get((i, c), {}).get("dshare", 0), 2)
        rows.append(row)
    rows.sort(key=lambda r: (-r["score"], r["id"]))
    for r in rows:
        r["rank"] = 1 + sum(o["low"] > r["high"] for o in rows)
    for r in rows:
        r["tied"] = "yes" if sum(o["rank"] == r["rank"] for o in rows) > 1 else ""
    shown = rows[:LIMIT]
    cols = ["rank", "tied", "id", "score", "low", "high", "f1", "f2", "f2_rater1", "f2_rater2"] + \
        [f"{k}_{c}" for c in COLLS for k in ("n", "units", "tell_share", "doubt_share")]
    write_tsv(DATA / "ranking.tsv", shown, cols)

    # Weight changes.
    main_scores = [r["score"] for r in shown]
    variants = {
        "w=0.25": lambda r: r["f1"] ** 0.25 * (r["f2"] / 4) ** 0.75,
        "w=0.75": lambda r: r["f1"] ** 0.75 * (r["f2"] / 4) ** 0.25,
        "mean": lambda r: (r["f1"] + r["f2"] / 4) / 2,
    }
    main_pos = {r["id"]: k for k, r in enumerate(shown, 1)}
    sens = []
    for name, fn in variants.items():
        alt = [fn(r) for r in shown]
        order = sorted(shown, key=lambda r: (-fn(r), r["id"]))
        moves = [f"{r['id']}:{main_pos[r['id']]}->{k}" for k, r in enumerate(order, 1) if abs(main_pos[r["id"]] - k) >= 3]
        sens.append(dict(weights=name, kendall_tau=round(kendall(main_scores, alt), 3), moves_3_or_more="; ".join(moves)))
    write_tsv(DATA / "sensitivity.tsv", sens, ["weights", "kendall_tau", "moves_3_or_more"])

    both = [i for i in ids if i in r1 and i in r2]
    fa = [int(r1[i]["part_a"]) + int(r1[i]["part_b"]) for i in both]
    fb = [int(r2[i]["part_a"]) + int(r2[i]["part_b"]) for i in both]
    agree = dict(entries=len(both),
                 exact=round(sum(x == y for x, y in zip(fa, fb)) / len(both), 3),
                 within_1=round(sum(abs(x - y) <= 1 for x, y in zip(fa, fb)) / len(both), 3),
                 quadratic_kappa_f2=round(qwk(fa, fb), 3),
                 part_a_exact=round(sum(r1[i]["part_a"] == r2[i]["part_a"] for i in both) / len(both), 3),
                 cohen_kappa_part_b=round(cohen([r1[i]["part_b"] for i in both], [r2[i]["part_b"] for i in both]), 3))
    (DATA / "agreement.json").write_text(json.dumps(agree, indent=2) + "\n")
    print(json.dumps(agree), len(shown), "ranked")


if __name__ == "__main__":
    main()

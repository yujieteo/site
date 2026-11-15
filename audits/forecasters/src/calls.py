# /// script
# requires-python = ">=3.12"
# ///
"""Join verdicts, prices and ALFRED references into data/calls.tsv, one scored call per line.

Rule 4.3 of METHOD.md: a stated probability is scored against the day's market price or 1/2;
a call with no stated probability is a bet at the market price, else at the ALFRED reference,
else it is skipped. Rule 4.5: only outcomes settled by KNOWN_BY; one claim per person counted once.
"""

import csv
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import DATA, HN_IN, KNOWN_BY, LW_IN, LW_PEOPLE  # noqa: E402
from markets import forecasts  # noqa: E402

LW_NAME = {uid: name for name, uid in LW_PEOPLE}


def table(path, key="fid"):
    if not path.exists():
        return {}
    return {r[key]: r for r in csv.DictReader(open(path, encoding="utf-8"), delimiter="\t")}


def norm(claim):
    return re.sub(r"[^a-z0-9 ]", "", claim.lower()).strip()


def main():
    prices, alfred = table(DATA / "prices.tsv"), table(DATA / "alfred.tsv")
    rows, seen, skipped = [], set(), {}
    fcs = sorted(forecasts(), key=lambda f: (f["unit"]["made"], f["fid"]))
    for f in fcs:
        u = f["unit"]
        if u.get("sample") == "recall":
            continue  # the recall sample only measures what rule C misses
        why = None
        outcome = f.get("outcome")
        if outcome not in ("true", "false", "partly"):
            why = f"outcome {outcome}"
        elif not f.get("settled_on") or f["settled_on"] > KNOWN_BY:
            why = "settled after the AI's knowledge"
        if why:
            skipped[why] = skipped.get(why, 0) + 1
            continue
        person = u["author"] if u["site"] == "hn" else LW_NAME.get(u["author"], u["author"])
        key = (u["site"], person, norm(f["claim"]))
        if key in seen:
            skipped["repeat of an earlier claim"] = skipped.get("repeat of an earlier claim", 0) + 1
            continue
        stated = f.get("stated_p")
        price = prices.get(f["fid"])
        if stated is not None:
            kind, p = "stated", float(stated)
            ref, src = (float(price["ref"]), "market:" + price["market"]) if price else (0.5, "coin")
            asserted = 1 if p > 0.5 else 0 if p < 0.5 else ""
        elif price:
            kind, p, ref, src = "bet", "", float(price["ref"]), "market:" + price["market"]
            asserted = 1 if f.get("asserted", True) else 0
        elif f["fid"] in alfred:
            kind, p, ref, src = "bet", "", float(alfred[f["fid"]]["ref"]), "alfred:" + alfred[f["fid"]]["series"]
            asserted = 1 if f.get("asserted", True) else 0
        else:
            skipped["no price"] = skipped.get("no price", 0) + 1
            continue
        seen.add(key)
        window_end = (HN_IN if u["site"] == "hn" else LW_IN)[1]
        sample = u.get("sample") or ("in" if u["made"] < window_end else "out")
        rows.append(dict(site=u["site"], person=person, call_id=f["fid"], made=u["made"], sample=sample,
                         kind=kind, p=p, ref=ref, ref_source=src, asserted=asserted,
                         outcome={"true": "1", "false": "0", "partly": "partly"}[outcome],
                         due=f.get("due") or "", settled_on=f["settled_on"], claim=f["claim"],
                         source=f.get("source") or "", planted=int(bool(u.get("planted"))), url=u.get("url", "")))
    keys = list(rows[0].keys()) if rows else ["site"]
    with open(DATA / "calls.tsv", "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, keys, delimiter="\t", lineterminator="\n")
        w.writeheader()
        w.writerows(rows)
    with open(DATA / "skipped.tsv", "w", encoding="utf-8") as fh:
        fh.write("reason\tcount\n")
        for k, v in sorted(skipped.items()):
            fh.write(f"{k}\t{v}\n")
    print(f"{len(rows)} scored calls; skipped {skipped}")


if __name__ == "__main__":
    main()

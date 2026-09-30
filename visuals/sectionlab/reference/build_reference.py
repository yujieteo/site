"""Write the shared test fixtures and the Python reference results.

    python build_reference.py            write fixtures.json and reference.json
    python build_reference.py --check    fail if either file is out of date

fixtures.json    every case in cases.py: model and closed-form expectations
reference.json   per case: section properties from sectionref.py (exact primitive
                 decomposition) and, for plastic cases, the M–κ curve at nine
                 evenly spaced curvatures up to ε_lim and the σ0.2-block moment at
                 N = 0 (and at the applied N when it is not 0) from plasticref.py
                 (needs numpy and scipy)
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import cases as C  # noqa: E402
import sectionref as R  # noqa: E402

FIXTURES = HERE / "fixtures.json"
REFERENCE = HERE / "reference.json"


def sig(x, digits=15):
    return float(f"{x:.{digits}g}")


def reference():
    import plasticref as P
    out = {}
    for case in C.CASES:
        m = case["model"]
        props = {k: sig(v) for k, v in R.properties(m).items()}
        entry = {"properties": props}
        if case["plastic"]:
            angle = P.axis_angle(m, m["plastic"]["axis"])
            S = P.Section(m, angle)
            N = m["plastic"]["N"]
            curve = S.curve(N)
            entry["plastic"] = {
                "angle": sig(angle), "kappa_lim": sig(curve["kappa_lim"]), "M_lim": sig(curve["M_lim"]),
                "points": [{"kappa": sig(p["kappa"]), "M": sig(p["M"])} for p in curve["points"]],
                "Mp": sig(S.plastic_moment(0.0)["M"]),
                **({"MpN": sig(S.plastic_moment(N)["M"])} if N else {}),
            }
        out[case["id"]] = entry
    return {"generated_by": "reference/build_reference.py", "cases": out}


def fixtures():
    return {"generated_by": "reference/build_reference.py from reference/cases.py", "cases": C.CASES}


def dump(data):
    return json.dumps(data, indent=1, ensure_ascii=False) + "\n"


def close(a, b):
    if isinstance(a, dict):
        return isinstance(b, dict) and a.keys() == b.keys() and all(close(a[k], b[k]) for k in a)
    if isinstance(a, list):
        return isinstance(b, list) and len(a) == len(b) and all(close(x, y) for x, y in zip(a, b))
    if isinstance(a, float) or isinstance(b, float):
        return abs(a - b) <= 1e-9 * max(abs(a), abs(b), 1e-300) or abs(a - b) <= 1e-12
    return a == b


def main(argv=None):
    argv = sys.argv[1:] if argv is None else argv
    fx, ref = fixtures(), reference()
    if "--check" in argv:
        ok = True
        if not FIXTURES.exists() or json.loads(FIXTURES.read_text(encoding="utf-8")) != json.loads(dump(fx)):
            print("fixtures.json is out of date; run python build_reference.py", file=sys.stderr)
            ok = False
        if not REFERENCE.exists() or not close(json.loads(REFERENCE.read_text(encoding="utf-8")), json.loads(dump(ref))):
            print("reference.json is out of date; run python build_reference.py", file=sys.stderr)
            ok = False
        return 0 if ok else 1
    FIXTURES.write_text(dump(fx), encoding="utf-8")
    REFERENCE.write_text(dump(ref), encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())

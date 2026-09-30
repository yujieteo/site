#!/usr/bin/env python3
"""Derive every number and chart of the statically indeterminate beams talk.

The inputs are the two worked examples below (lengths, load, stiffness); every
other number on the slides is computed here in exact rational arithmetic and
written to data/numbers.tex, data/propped.csv and data/twospan.csv. `--verify`
recomputes, re-checks equilibrium and compatibility, and fails if a committed
output is stale. It writes nothing.

Units: kN, m, kN*m. Loads act downward; M is positive when sagging.
"""
import argparse
import sys
from fractions import Fraction as F
from pathlib import Path

HERE = Path(__file__).resolve().parent
DATA = HERE / "data"

# Example 1: propped cantilever, fixed at A (x = 0), roller at B (x = L).
L = F(6)
W = F(10)  # kN/m, uniform, downward
EI = F(16000)  # kN*m^2 (E = 200 GPa, I = 8e-5 m^4)

# Example 2: two-span continuous beam, pin at A, rollers at B and C.
L1, L2 = F(4), F(6)


def fmt(x, places=2):
    """Exact value as a short decimal: drop trailing zeros, keep up to `places`."""
    s = f"{float(x):.{places}f}".rstrip("0").rstrip(".")
    return "0" if s == "-0" else s


def propped():
    delta_w = W * L**4 / (8 * EI)  # tip deflection of the released cantilever under w
    flex = L**3 / (3 * EI)  # tip deflection per unit upward tip force
    RB = delta_w / flex  # compatibility: delta_w - RB * flex = 0
    RA = W * L - RB
    MA = RB * L - W * L**2 / 2  # moment at the wall, sagging positive (hogging here)
    xmax = RA / W  # zero shear
    Mmax = MA + RA * xmax - W * xmax**2 / 2
    # M(x) = MA + RA x - w x^2 / 2 = 0 at the point of contraflexure (other root is L)
    a, b, c = -W / 2, RA, MA
    disc = b * b - 4 * a * c
    roots = sorted(((-b + s) / (2 * a) for s in (disc_sqrt(disc), -disc_sqrt(disc))))
    xcf = roots[0]
    assert roots[1] == L
    # Equilibrium and compatibility checks.
    assert RA + RB == W * L
    assert MA + RA * L - W * L**2 / 2 == 0  # M(L) = 0 at the roller
    assert -MA + RB * L - W * L**2 / 2 == 0  # moments about A: wall couple, prop, load
    assert delta_w - RB * flex == 0
    assert RB == F(3, 8) * W * L and MA == -W * L**2 / 8 and Mmax == F(9, 128) * W * L**2
    cant_MA = -W * L**2 / 2  # the same load with no prop
    rows = ["x,prop,cant"]
    n = 60
    for i in range(n + 1):
        x = L * i / n
        m = MA + RA * x - W * x**2 / 2
        mc = cant_MA + W * L * x - W * x**2 / 2
        rows.append(f"{float(x):.3f},{float(m):.4f},{float(mc):.4f}")
    return {
        "delta_w": delta_w, "flex": flex, "RB": RB, "RA": RA, "MA": MA, "xmax": xmax,
        "Mmax": Mmax, "xcf": xcf, "cant_MA": cant_MA,
    }, "\n".join(rows) + "\n"


def disc_sqrt(d):
    """Exact square root of a rational perfect square."""
    num, den = d.numerator, d.denominator
    rn, rd = isqrt_exact(num), isqrt_exact(den)
    return F(rn, rd)


def isqrt_exact(n):
    import math

    r = math.isqrt(n)
    if r * r != n:
        raise ValueError(f"{n} is not a perfect square")
    return r


def twospan():
    # Three-moment equation with MA = MC = 0 and one uniform load on both spans:
    # 2 MB (L1 + L2) = -w L1^3 / 4 - w L2^3 / 4
    MB = -(W * L1**3 / 4 + W * L2**3 / 4) / (2 * (L1 + L2))
    RA = W * L1 / 2 + MB / L1
    RBl = W * L1 / 2 - MB / L1
    RC = W * L2 / 2 + MB / L2
    RBr = W * L2 / 2 - MB / L2
    RB = RBl + RBr
    assert RA + RB + RC == W * (L1 + L2)
    # Moment about A: RB L1 + RC (L1 + L2) = w (L1 + L2)^2 / 2
    assert RB * L1 + RC * (L1 + L2) == W * (L1 + L2) ** 2 / 2
    x1 = RA / W
    M1 = RA**2 / (2 * W)
    x2 = RC / W  # measured from C
    M2 = RC**2 / (2 * W)
    # Moment distribution at B, far ends pinned: modified stiffness 3EI/L.
    kBA, kBC = F(3) / L1, F(3) / L2
    dfBA, dfBC = kBA / (kBA + kBC), kBC / (kBA + kBC)
    femBA = W * L1**2 / 8  # propped fixed-end moments, clockwise positive on the member end
    femBC = -W * L2**2 / 8
    unbalance = femBA + femBC
    distBA, distBC = -unbalance * dfBA, -unbalance * dfBC
    mBA, mBC = femBA + distBA, femBC + distBC
    assert mBA == -mBC == -MB
    # Equal spans limit: MB = -w L^2 / 8.
    eq = -(W * L2**3 / 4 * 2) / (2 * (L2 + L2))
    assert eq == -W * L2**2 / 8
    rows = ["x,M"]
    n = 100
    for i in range(n + 1):
        x = (L1 + L2) * i / n
        m = RA * x - W * x**2 / 2 + (RB * (x - L1) if x > L1 else 0)
        rows.append(f"{float(x):.3f},{float(m):.4f}")
    return {
        "MB": MB, "RA": RA, "RB": RB, "RBl": RBl, "RBr": RBr, "RC": RC, "x1": x1, "M1": M1,
        "x2": x2, "M2": M2, "dfBA": dfBA, "dfBC": dfBC, "femBA": femBA, "femBC": femBC,
        "unbalance": unbalance, "distBA": distBA, "distBC": distBC, "mBA": mBA, "mBC": mBC,
        "rhs1": W * L1**3 / 4, "rhs2": W * L2**3 / 4,
    }, "\n".join(rows) + "\n"


def derive():
    p, pcsv = propped()
    t, tcsv = twospan()
    numbers = {
        "ibL": fmt(L), "ibW": fmt(W), "ibEI": f"{int(EI):,}".replace(",", "\\,"),
        "ibWL": fmt(W * L), "ibCantMA": fmt(-p["cant_MA"]),
        "ibDeltaW": fmt(p["delta_w"] * 1000), "ibRB": fmt(p["RB"]), "ibRA": fmt(p["RA"]),
        "ibMA": fmt(-p["MA"]), "ibXmax": fmt(p["xmax"]), "ibMmax": fmt(p["Mmax"], 4),
        "ibMmaxShort": fmt(p["Mmax"], 1), "ibXcf": fmt(p["xcf"]), "ibXmaxFromB": fmt(L - p["xmax"]),
        "ibLone": fmt(L1), "ibLtwo": fmt(L2), "ibLsum": fmt(L1 + L2), "ibWtotal": fmt(W * (L1 + L2)),
        "ibRhsOne": fmt(t["rhs1"]), "ibRhsTwo": fmt(t["rhs2"]), "ibRhsSum": fmt(t["rhs1"] + t["rhs2"]),
        "ibLhsCoef": fmt(2 * (L1 + L2)),
        "ibMB": fmt(-t["MB"]), "ibTRA": fmt(t["RA"]), "ibTRB": fmt(t["RB"]), "ibTRC": fmt(t["RC"]),
        "ibTRBl": fmt(t["RBl"]), "ibTRBr": fmt(t["RBr"]),
        "ibTxOne": fmt(t["x1"], 3), "ibTMOne": fmt(t["M1"]), "ibTxTwo": fmt(t["x2"]), "ibTMTwo": fmt(t["M2"]),
        "ibDFBA": fmt(t["dfBA"]), "ibDFBC": fmt(t["dfBC"]), "ibFEMBA": fmt(t["femBA"]),
        "ibFEMBC": fmt(t["femBC"]), "ibUnbal": fmt(t["unbalance"]), "ibUnbalAbs": fmt(abs(t["unbalance"])), "ibDistBA": fmt(t["distBA"]),
        "ibDistBC": fmt(t["distBC"]), "ibMBA": fmt(t["mBA"]), "ibMBC": fmt(t["mBC"]),
        "ibEqualMB": fmt(W * L2**2 / 8), "ibTxTwoFromA": fmt(L1 + L2 - t["x2"]),
        "ibTZeroOne": fmt(2 * t["RA"] / W), "ibTHogOne": fmt(L1 - 2 * t["RA"] / W),
    }
    tex = ["% Generated by derive.py. Do not edit."]
    tex += [f"\\newcommand{{\\{k}}}{{{v}}}" for k, v in numbers.items()]
    outputs = {"numbers.tex": "\n".join(tex) + "\n", "propped.csv": pcsv, "twospan.csv": tcsv}
    return outputs, p, t


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--verify", action="store_true", help="check outputs are current; write nothing")
    args = ap.parse_args()
    outputs, p, t = derive()
    stale = [n for n, text in outputs.items() if not (DATA / n).is_file() or (DATA / n).read_text() != text]
    if args.verify:
        if stale:
            sys.exit(f"stale: {', '.join(stale)}; run python3 {Path(__file__).name}")
        print(f"verified: RB = {float(p['RB']):g} kN, MB = {float(t['MB']):g} kN*m, {len(outputs)} outputs current")
        return
    DATA.mkdir(exist_ok=True)
    for name, text in outputs.items():
        (DATA / name).write_text(text)
    print(f"wrote {', '.join(outputs)}")


if __name__ == "__main__":
    main()

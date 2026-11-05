"""Independent reference solver for BEAMDIAG, in exact rational arithmetic.

The browser engine (engine.js) uses the direct stiffness method. This script
solves the same beams a different way, so agreement is evidence rather than a
repeated calculation: the unknown support reactions and the two integration
constants of EI v'' = M(x) are found from global equilibrium plus the support
conditions (v = 0 at every support, v' = 0 at every fixed support), with M(x)
written in Macaulay (singularity-function) form. Every input float converts
exactly to a Fraction and the linear system is solved exactly, so the only
rounding is the final conversion back to float.

It also reads the NASTRAN bulk data the browser exports (read_bdf), so a deck
can be turned back into a beam model and checked against the model it came
from.

Units and signs match engine.js: SI; x along the beam, +y up; couples and
rotations counter-clockwise positive; V = sum of upward forces left of the
section; M sagging positive.

    python reference.py
    python reference.py --check
"""

import json
import math
import sys
from fractions import Fraction
from itertools import pairwise
from pathlib import Path
from typing import Any, Literal

Obj = dict[str, Any]
Number = int | float | str | Fraction
Term = tuple[Fraction, Fraction, int]
Side = Literal["left", "right"]
Row = list[Fraction]
Key = tuple[str, int | None]

HERE = Path(__file__).resolve().parent


class SingularError(Exception):
    """The supports leave the beam free to move or over-constrained."""


def exact(x: Number) -> Fraction:
    """Convert a number to an exact fraction."""
    assert not isinstance(x, bool), "a flag is not a number"
    result = Fraction(x)
    assert result.denominator > 0, "a fraction has a positive denominator"
    return result


def mac(x: Fraction, a: Fraction, n: int) -> Fraction:
    """Macaulay bracket <x - a>^n, with <x - a>^0 = 1 for x >= a (right limit)."""
    assert n >= 0, "powers are not negative"
    assert a.denominator > 0, "positions are exact"
    if x < a:
        return Fraction(0)
    result = Fraction(1) if n == 0 else (x - a) ** n
    assert result >= 0, "a bracket past its position is not negative"
    return result


def solve_exact(matrix: list[Row], rhs: Row) -> Row:
    """Solve a square linear system exactly by Gauss-Jordan elimination."""
    n = len(rhs)
    assert len(matrix) == n, "a square system"
    assert all(len(row) == n for row in matrix), "every row has a column per unknown"
    a = [[*row, r] for row, r in zip(matrix, rhs, strict=True)]
    for c in range(n):
        p = next((r for r in range(c, n) if a[r][c] != 0), None)
        if p is None:
            msg = "singular system: the supports do not hold the beam"
            raise SingularError(msg)
        a[c], a[p] = a[p], a[c]
        for r in range(n):
            if r != c and a[r][c] != 0:
                m = a[r][c] / a[c][c]
                a[r] = [x - m * y for x, y in zip(a[r], a[c], strict=True)]
    solution = [a[i][n] / a[i][i] for i in range(n)]
    assert len(solution) == n, "a value per unknown"
    return solution


def _unknowns(supports: list[Obj]) -> list[Key]:
    """List the unknowns in order: a reaction per support, a moment per fixed support, then C1 and C2."""
    assert supports, "a beam needs supports"
    unknowns: list[Key] = []
    for i, s in enumerate(supports):
        unknowns.append(("R", i))
        if s["kind"] == "fixed":
            unknowns.append(("M", i))
    unknowns.extend([("C1", None), ("C2", None)])
    assert len(set(unknowns)) == len(unknowns), "every unknown is distinct"
    return unknowns


def known_terms(loads: list[Obj]) -> list[Term]:
    """Return the (coefficient, position, power) terms of EI v'' that the loads fix."""
    assert loads is not None, "loads come as a list"
    known: list[Term] = []
    for load in loads:
        if load["kind"] == "point":
            known.append((exact(load["F"]), exact(load["x"]), 1))
        elif load["kind"] == "moment":
            known.append((-exact(load["C"]), exact(load["x"]), 0))
        elif load["kind"] == "dist":
            x1, x2, q1, q2 = exact(load["x1"]), exact(load["x2"]), exact(load["q1"]), exact(load["q2"])
            s = (q2 - q1) / (x2 - x1)
            known.extend([(q1 / 2, x1, 2), (s / 6, x1, 3), (-q2 / 2, x2, 2), (-s / 6, x2, 3)])
    assert len(known) >= len(loads), "a load gives at least one term"
    return known


def _equilibrium(supports: list[Obj], index: dict[Key, int], n: int, load_force: Fraction, load_moment: Fraction) -> tuple[list[Row], Row]:
    """Build the two global equilibrium rows and their right-hand sides."""
    assert n == len(index), "one column per unknown"
    assert supports, "a beam needs supports"
    force_row, moment_row = [Fraction(0)] * n, [Fraction(0)] * n
    for i, s in enumerate(supports):
        force_row[index[("R", i)]] = Fraction(1)
        moment_row[index[("R", i)]] = s["x"]
        if s["kind"] == "fixed":
            moment_row[index[("M", i)]] = Fraction(1)
    return [force_row, moment_row], [-load_force, -load_moment]


def _condition_row(x: Fraction, *, derivative: bool, supports: list[Obj], index: dict[Key, int], known: list[Term]) -> tuple[Row, Fraction]:
    """One row of the support conditions: v(x) = 0, or v'(x) = 0 when derivative."""
    n = len(index)
    assert n > len(supports), "the unknowns outnumber the supports"
    assert supports, "a beam needs supports"
    row = [Fraction(0)] * n
    k = 1 if derivative else 2
    for i, s in enumerate(supports):
        row[index[("R", i)]] += integrate(1, s["x"], 1, k, x)
        if s["kind"] == "fixed":
            row[index[("M", i)]] += integrate(-1, s["x"], 0, k, x)
    if derivative:
        row[index[("C1", None)]] = Fraction(1)
    else:
        row[index[("C1", None)]] = x
        row[index[("C2", None)]] = Fraction(1)
    known_value = sum((integrate(c, a, p, k, x) for c, a, p in known), Fraction(0))
    return row, -known_value


def _support_conditions(supports: list[Obj], index: dict[Key, int], n: int, known: list[Term]) -> tuple[list[Row], Row]:
    """Build the deflection condition at every support and the slope condition at every fixed one."""
    assert n == len(index), "one column per unknown"
    assert supports, "a beam needs supports"
    rows: list[Row] = []
    rhs: Row = []
    for s in supports:
        r, b = _condition_row(s["x"], derivative=False, supports=supports, index=index, known=known)
        rows.append(r)
        rhs.append(b)
        if s["kind"] == "fixed":
            r, b = _condition_row(s["x"], derivative=True, supports=supports, index=index, known=known)
            rows.append(r)
            rhs.append(b)
    assert len(rows) == len(rhs), "a right-hand side per row"
    return rows, rhs


class Beam:
    """A solved beam. Terms are (coefficient, position, power) of EI v''."""

    def __init__(self, model: Obj) -> None:
        """Solve the model exactly, keeping the reactions and integration constants."""
        self.length = exact(model["length"])
        self.stiffness = exact(model["material"]["E"]) * exact(model["section"]["I"])
        self.supports = sorted(({"kind": s["kind"], "x": exact(s["x"])} for s in model["supports"]), key=lambda s: s["x"])
        self.loads: list[Obj] = model["loads"]
        assert self.length > 0, "the beam has a length"
        assert self.stiffness > 0, "the beam has a stiffness"
        unknowns = _unknowns(self.supports)
        index = {u: k for k, u in enumerate(unknowns)}
        n = len(unknowns)
        self.known = known_terms(self.loads)
        load_force, load_moment = self.load_resultants()
        rows, rhs = _equilibrium(self.supports, index, n, load_force, load_moment)
        more_rows, more_rhs = _support_conditions(self.supports, index, n, self.known)
        rows += more_rows
        rhs += more_rhs
        if len(rows) != n:
            msg = "unknowns and conditions do not match"
            raise SingularError(msg)
        solution = solve_exact(rows, rhs)
        self.reactions: list[Obj] = []
        for i, s in enumerate(self.supports):
            force = solution[index[("R", i)]]
            couple = solution[index[("M", i)]] if s["kind"] == "fixed" else Fraction(0)
            self.reactions.append({"kind": s["kind"], "x": s["x"], "Fy": force, "Mz": couple})
        self.c1 = solution[index[("C1", None)]]
        self.c2 = solution[index[("C2", None)]]
        self.terms: list[Term] = list(self.known)
        for r in self.reactions:
            self.terms.append((r["Fy"], r["x"], 1))
            self.terms.append((-r["Mz"], r["x"], 0))
        assert len(self.reactions) == len(self.supports), "one reaction per support"

    def load_resultants(self) -> tuple[Fraction, Fraction]:
        """Return the total force and its moment about the left end."""
        assert self.loads is not None, "loads come as a list"
        force = moment = Fraction(0)
        for load in self.loads:
            if load["kind"] == "point":
                force += exact(load["F"])
                moment += exact(load["F"]) * exact(load["x"])
            elif load["kind"] == "moment":
                moment += exact(load["C"])
            elif load["kind"] == "dist":
                x1, x2, q1, q2 = exact(load["x1"]), exact(load["x2"]), exact(load["q1"]), exact(load["q2"])
                b = x2 - x1
                force += (q1 + q2) * b / 2
                moment += q1 * b / 2 * (x1 + b / 3) + q2 * b / 2 * (x1 + 2 * b / 3)
        assert force.denominator > 0, "the force resultant is exact"
        assert moment.denominator > 0, "the moment resultant is exact"
        return force, moment

    def moment(self, x: Number, side: Side = "right") -> Fraction:
        """Bending moment; side="left" gives the limit from the left."""
        assert side in ("left", "right"), "a limit from one side"
        x = exact(x)
        result = sum((c * self._bracket(x, a, p, side) for c, a, p in self.terms), Fraction(0))
        assert result.denominator > 0, "the moment is exact"
        return result

    def shear(self, x: Number, side: Side = "right") -> Fraction:
        """Shear force; side="left" gives the limit from the left."""
        assert side in ("left", "right"), "a limit from one side"
        x = exact(x)
        total = Fraction(0)
        for c, a, p in self.terms:
            if p >= 1:
                total += c * p * self._bracket(x, a, p - 1, side)
        assert total.denominator > 0, "the shear is exact"
        return total

    @staticmethod
    def _bracket(x: Fraction, a: Fraction, n: int, side: Side) -> Fraction:
        assert side in ("left", "right"), "a limit from one side"
        assert n >= 0, "powers are not negative"
        if side == "left" and n == 0:
            return Fraction(1) if x > a else Fraction(0)
        return mac(x, a, n)

    def deflection(self, x: Number) -> Fraction:
        """Deflection v(x)."""
        assert self.stiffness > 0, "the beam has a stiffness"
        x = exact(x)
        result = (sum((integrate(c, a, p, 2, x) for c, a, p in self.terms), Fraction(0)) + self.c1 * x + self.c2) / self.stiffness
        assert result.denominator > 0, "the deflection is exact"
        return result

    def theta(self, x: Number) -> Fraction:
        """Rotation v'(x)."""
        assert self.stiffness > 0, "the beam has a stiffness"
        x = exact(x)
        result = (sum((integrate(c, a, p, 1, x) for c, a, p in self.terms), Fraction(0)) + self.c1) / self.stiffness
        assert result.denominator > 0, "the rotation is exact"
        return result


def integrate(c: Fraction | int, a: Fraction, p: int, k: int, x: Number) -> Fraction:
    """k-fold integral of c<x-a>^p evaluated at x."""
    assert p >= 0, "powers are not negative"
    assert k >= 1, "integrate at least once"
    power = p + k
    denominator = 1
    for m in range(p + 1, p + k + 1):
        denominator *= m
    assert denominator > 0, "the divisor is positive"
    return c * mac(exact(x), a, power) / denominator


def sample_points(model: Obj) -> list[Fraction]:
    """Every event position, quarter points of the beam and the midpoint between each neighbouring pair."""
    length = exact(model["length"])
    assert length > 0, "the beam has a length"
    assert "supports" in model, "a model has supports"
    found = {exact(0), length, length / 4, length / 2, 3 * length / 4}
    for s in model["supports"]:
        found.add(exact(s["x"]))
    for load in model["loads"]:
        for key in ("x", "x1", "x2"):
            if key in load:
                found.add(exact(load[key]))
    xs = sorted(found)
    points = sorted(xs + [(a + b) / 2 for a, b in pairwise(xs)])
    assert len(points) == 2 * len(xs) - 1, "a midpoint between each neighbouring pair"
    return points


def solve_fixture(model: Obj) -> Obj:
    """Solve one fixture and sample it at every event position."""
    assert "length" in model, "a model has a length"
    beam = Beam(model)
    length = beam.length
    points: list[Obj] = [
        {
            "x": float(x),
            "Vleft": float(beam.shear(x, "left")) if x > 0 else 0.0,
            "Vright": float(beam.shear(x, "right")) if x < length else 0.0,
            "Mleft": float(beam.moment(x, "left")) if x > 0 else 0.0,
            "Mright": float(beam.moment(x, "right")) if x < length else 0.0,
            "v": float(beam.deflection(x)),
            "theta": float(beam.theta(x)),
        }
        for x in sample_points(model)
    ]
    reactions = [{"kind": r["kind"], "x": float(r["x"]), "Fy": float(r["Fy"]), "Mz": float(r["Mz"])} for r in beam.reactions]
    assert len(reactions) == len(model["supports"]), "a reaction per support"
    assert points, "a beam has sample points"
    return {"reactions": reactions, "points": points}

def _fields(entry_lines: list[str]) -> list[str]:
    """Split one entry (a head line plus continuations) into its data fields."""
    assert entry_lines, "an entry has a head line"
    head = entry_lines[0]
    if "," in head:
        return [f.strip() for f in ",".join(entry_lines).split(",")]
    large = head[:8].rstrip().endswith("*")
    width = 16 if large else 8
    fields = [head[:8].strip().rstrip("*")]
    for line in entry_lines:
        body = line[8:8 + 4 * width] if large else line[8:72]
        count = 4 if large else 8
        body = body.ljust(count * width)
        fields += [body[j * width:(j + 1) * width].strip() for j in range(count)]
    return fields


def _real(text: str) -> float:
    assert text is not None, "a field is text"
    text = text.strip().upper().replace("D", "E")
    if not text:
        return 0.0
    if "E" not in text:
        for i in range(len(text) - 1, 0, -1):
            if text[i] in "+-" and text[i - 1] != "E":
                text = text[:i] + "E" + text[i:]
                break
    if "." not in text.split("E")[0]:
        msg = f"real field without a decimal point: {text!r}"
        raise ValueError(msg)
    result = float(text)
    assert not math.isnan(result), "a real field is a number"
    return result


def read_bdf(text: str) -> tuple[list[str], list[list[str]]]:
    """Parse a BEAMDIAG deck into its case control and bulk entries."""
    assert text is not None, "a deck is text"
    lines = [line.rstrip("\n") for line in text.splitlines()]
    begin = next(i for i, line in enumerate(lines) if line.strip().upper() == "BEGIN BULK")
    executive_case = [line for line in lines[:begin] if line.strip() and not line.startswith("$")]
    entries: list[list[str]] = []
    current: list[str] | None = None
    for line in lines[begin + 1:]:
        if not line.strip() or line.startswith("$"):
            continue
        if line.strip().upper() == "ENDDATA":
            break
        if line[:1] in ("*", "+", " ") and current is not None and not line[:8].strip().rstrip("*").isalpha():
            current.append(line)
            continue
        current = [line]
        entries.append(current)
    parsed = [_fields(e) for e in entries]
    assert len(parsed) == len(entries), "a field list per entry"
    return executive_case, parsed


def _case_control(executive_case: list[str]) -> dict[str, str]:
    """Read the KEY = VALUE lines of the case control, upper-cased."""
    assert executive_case is not None, "case control comes as lines"
    case: dict[str, str] = {}
    for line in executive_case:
        if "=" in line:
            key, value = (part.strip().upper() for part in line.split("=", 1))
            case[key] = value
    assert all(key == key.upper() for key in case), "keys are upper-cased"
    return case


def _geometry_entry(got: Obj, f: list[str]) -> bool:
    """Store a GRID, GRDSET, CBAR, MAT1 or PBAR entry; report whether it was one."""
    name = f[0].upper()
    assert name, "an entry has a name"
    if name == "GRID":
        got["grids"][int(f[1])] = {"cp": f[2], "xyz": tuple(_real(v) for v in f[3:6]), "cd": f[6], "ps": f[7]}
    elif name == "GRDSET":
        got["grdset"] = {"cp": f[2], "cd": f[6], "ps": f[7]}
    elif name == "CBAR":
        got["bars"].append({"eid": int(f[1]), "pid": int(f[2]), "ga": int(f[3]), "gb": int(f[4]), "v": tuple(_real(v) for v in f[5:8])})
    elif name == "MAT1":
        got["mat"] = {"mid": int(f[1]), "E": _real(f[2]), "G": f[3], "nu": _real(f[4])}
    elif name == "PBAR":
        got["prop"] = {"pid": int(f[1]), "mid": int(f[2]), "A": _real(f[3]), "I1": _real(f[4]), "I2": _real(f[5]), "J": _real(f[6])}
    else:
        return False
    return True


def _load_entry(got: Obj, f: list[str]) -> bool:
    """Store a SPC1, FORCE, MOMENT, PLOAD1 or PARAM entry; report whether it was one."""
    name = f[0].upper()
    assert name, "an entry has a name"
    if name == "SPC1":
        got["spc1"].append({"sid": int(f[1]), "c": f[2], "grids": [int(g) for g in f[3:] if g]})
    elif name == "FORCE":
        got["forces"].append({"sid": int(f[1]), "g": int(f[2]), "cid": int(f[3] or 0), "F": _real(f[4]), "n": tuple(_real(v) for v in f[5:8])})
    elif name == "MOMENT":
        got["moments"].append({"sid": int(f[1]), "g": int(f[2]), "cid": int(f[3] or 0), "M": _real(f[4]), "n": tuple(_real(v) for v in f[5:8])})
    elif name == "PLOAD1":
        got["ploads"].append({"sid": int(f[1]), "eid": int(f[2]), "type": f[3].upper(), "scale": f[4].upper(),
                              "x1": _real(f[5]), "p1": _real(f[6]), "x2": _real(f[7]), "p2": _real(f[8])})
    elif name == "PARAM":
        got["params"][f[1].upper()] = f[2]
    else:
        return False
    return True


def _collect(entries: list[list[str]]) -> Obj:
    """Sort the bulk entries into the lists the model is built from."""
    assert entries is not None, "entries come as a list"
    got: Obj = {"grids": {}, "bars": [], "spc1": [], "forces": [], "moments": [], "ploads": [],
                "mat": None, "prop": None, "params": {}, "grdset": {"cp": "", "cd": "", "ps": ""}}
    for f in entries:
        if not (_geometry_entry(got, f) or _load_entry(got, f)):
            msg = f"unexpected bulk entry {f[0].upper()}"
            raise ValueError(msg)
    assert len(got["bars"]) <= len(entries), "bars come from entries"
    return got


def _fill_grid_defaults(got: Obj) -> None:
    """Fill each GRID's blank fields from GRDSET and require basic X with PS=345."""
    assert got["grids"] is not None, "grids are collected"
    for g in got["grids"].values():
        for key in ("cp", "cd", "ps"):
            g[key] = g[key] or got["grdset"][key]
        if g["xyz"][1] != 0 or g["xyz"][2] != 0 or g["cp"] or g["cd"] or g["ps"] != "345":
            msg = "every GRID must lie on basic X with PS=345"
            raise ValueError(msg)
    assert all(g["ps"] == "345" for g in got["grids"].values()), "every grid is pinned in plane"


def _check_chain(got: Obj, xs: dict[int, float]) -> dict[int, Obj]:
    """Check the grids, material and bars, and return the bars by element id."""
    mat, prop = got["mat"], got["prop"]
    assert xs is not None, "grid positions are keyed by id"
    _fill_grid_defaults(got)
    if mat is None or prop is None or prop["mid"] != mat["mid"]:
        msg = "PBAR must reference the MAT1"
        raise ValueError(msg)
    bars_by_eid: dict[int, Obj] = {}
    for b in got["bars"]:
        if b["pid"] != prop["pid"] or b["v"] != (0.0, 1.0, 0.0):
            msg = "every CBAR must use the PBAR and orientation vector +Y"
            raise ValueError(msg)
        if not xs[b["gb"]] > xs[b["ga"]]:
            msg = "CBAR must run in +X"
            raise ValueError(msg)
        bars_by_eid[b["eid"]] = b
    chain = sorted((xs[b["ga"]], xs[b["gb"]]) for b in got["bars"])
    for (_a0, a1), (b0, _b1) in pairwise(chain):
        if a1 != b0:
            msg = "CBAR elements must form one continuous chain"
            raise ValueError(msg)
    return bars_by_eid


def _supports_from(got: Obj, spc_set: int, xs: dict[int, float], x0: float) -> list[Obj]:
    """Collect the supports the selected SPC1 set names."""
    assert xs is not None, "grid positions are keyed by id"
    assert x0 == min(xs.values()), "x0 is the left end"
    supports: list[Obj] = []
    for s in got["spc1"]:
        if s["sid"] != spc_set:
            continue
        kind = {"12": "pin", "126": "fixed"}.get(s["c"])
        if kind is None:
            msg = f"unexpected SPC1 components {s['c']}"
            raise ValueError(msg)
        supports.extend({"kind": kind, "x": xs[g] - x0} for g in s["grids"])
    return supports


def _loads_from(got: Obj, load_set: int, xs: dict[int, float], x0: float, bars_by_eid: dict[int, Obj]) -> list[Obj]:
    """Collect the point, moment and distributed loads the selected load set holds."""
    assert xs is not None, "grid positions are keyed by id"
    assert x0 == min(xs.values()), "x0 is the left end"
    loads: list[Obj] = []
    for f in got["forces"]:
        if f["sid"] != load_set or f["cid"] != 0 or f["n"] != (0.0, 1.0, 0.0):
            msg = "FORCE must act along basic +Y in the selected load set"
            raise ValueError(msg)
        loads.append({"kind": "point", "x": xs[f["g"]] - x0, "F": f["F"]})
    for m in got["moments"]:
        if m["sid"] != load_set or m["cid"] != 0 or m["n"] != (0.0, 0.0, 1.0):
            msg = "MOMENT must act about basic +Z in the selected load set"
            raise ValueError(msg)
        loads.append({"kind": "moment", "x": xs[m["g"]] - x0, "C": m["M"]})
    for p in got["ploads"]:
        if p["sid"] != load_set or p["type"] != "FY" or p["scale"] != "FR" or (p["x1"], p["x2"]) != (0.0, 1.0):
            msg = "PLOAD1 must be FY over the whole element with SCALE=FR"
            raise ValueError(msg)
        b = bars_by_eid[p["eid"]]
        loads.append({"kind": "dist", "x1": xs[b["ga"]] - x0, "x2": xs[b["gb"]] - x0, "q1": p["p1"], "q2": p["p2"]})
    return loads


def model_from_bdf(text: str) -> Obj:
    """Rebuild the planar beam model a BEAMDIAG deck encodes, checking its assumptions."""
    assert text is not None, "a deck is text"
    executive_case, entries = read_bdf(text)
    case = _case_control(executive_case)
    got = _collect(entries)
    spc_set, load_set = int(case["SPC"]), int(case["LOAD"])
    mat, prop, grids = got["mat"], got["prop"], got["grids"]
    xs = {gid: g["xyz"][0] for gid, g in grids.items()}
    bars_by_eid = _check_chain(got, xs)
    span = max(xs.values()) - min(xs.values())
    x0 = min(xs.values())
    supports = _supports_from(got, spc_set, xs, x0)
    loads = _loads_from(got, load_set, xs, x0, bars_by_eid)
    assert mat is not None, "the checks found the material"
    assert prop is not None, "the checks found the section"
    return {
        "case": case,
        "params": got["params"],
        "model": {
            "length": span,
            "material": {"E": mat["E"], "nu": mat["nu"]},
            "section": {"A": prop["A"], "I": prop["I1"], "Iy": prop["I2"], "J": prop["J"]},
            "supports": supports,
            "loads": loads,
        },
        "grids": len(grids),
        "elements": len(got["bars"]),
    }


def build_reference() -> Obj:
    """Solve every fixture."""
    fixtures = json.loads((HERE / "fixtures.json").read_text(encoding="utf-8"))
    cases: list[Obj] = [{"id": fixture["id"], **solve_fixture(fixture["model"])} for fixture in fixtures["cases"]]
    assert len(cases) == len(fixtures["cases"]), "a result per fixture"
    return {"generator": "reference.py (exact Macaulay integration)", "cases": cases}


def main(argv: list[str]) -> int:
    """Write reference.json, or with --check compare it."""
    assert argv is not None, "arguments come as a list"
    assert HERE.is_dir(), "the script sits in a folder"
    text = json.dumps(build_reference(), indent=1) + "\n"
    target = HERE / "reference.json"
    if "--check" in argv:
        if target.read_text(encoding="utf-8") != text:
            sys.stderr.write("reference.json is out of date; run python reference.py\n")
            return 1
        return 0
    target.write_text(text, encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

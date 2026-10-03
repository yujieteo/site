"""Check every number in the statically indeterminate beams recap.

The blog post, the dated notes (the podcast script) and the deck state results
for two worked examples. This test derives them in closed form, re-solves both
beams with the beam visualizer's exact-arithmetic reference solver and its
browser stiffness engine, and checks that the published text states the same
values.
"""

import json
import os
import re
import subprocess
import sys
import unittest
from fractions import Fraction as F
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
# The beam visualizer is the folder viz/beamdiag/ of the yujieteo/visuals checkout the build reads.
VISUALS_REPO = Path(os.environ.get("VISUALS_REPO", ROOT.parent / "visuals")).resolve()
VIZ = VISUALS_REPO / "viz" / "beamdiag"
sys.path.insert(0, str(VIZ))

import reference  # noqa: E402

KN = 1000  # the solvers work in N and N*m; the recap quotes kN and kN*m
W = F(10)  # kN/m
MATERIAL = {"E": 200e9, "nu": 0.3}
SECTION = {"A": 0.005, "I": 8e-5}
EI = F(200_000_000_000) * F(8, 100_000) / KN  # kN*m^2


def model(length, supports):
    return {
        "length": length,
        "material": MATERIAL,
        "section": SECTION,
        "supports": [{"kind": kind, "x": x} for kind, x in supports],
        "loads": [{"kind": "dist", "x1": 0, "x2": length, "q1": -10_000, "q2": -10_000}],
        "divisions": 4,
    }


PROPPED = model(6, [("fixed", 0), ("pin", 6)])
TWO_SPAN = model(10, [("pin", 0), ("pin", 4), ("pin", 10)])


def propped_closed_form(L=F(6)):
    delta_w = W * L**4 / (8 * EI)
    RB = delta_w / (L**3 / (3 * EI))
    RA = W * L - RB
    MA = RB * L - W * L**2 / 2  # moment at the wall, sagging positive
    xmax = RA / W
    return {
        "delta_w_mm": delta_w * 1000, "RB": RB, "RA": RA, "MA": MA, "xmax": xmax,
        "Mmax": MA + RA * xmax - W * xmax**2 / 2, "xcf": L / 4, "cantilever_MA": -W * L**2 / 2,
    }


def two_span_closed_form(L1=F(4), L2=F(6)):
    MB = -(W * L1**3 / 4 + W * L2**3 / 4) / (2 * (L1 + L2))
    RA, RC = W * L1 / 2 + MB / L1, W * L2 / 2 + MB / L2
    RB = W * (L1 + L2) - RA - RC
    # Moment distribution at B with far ends pinned: one balance, no carry-over.
    kBA, kBC = 3 / L1, 3 / L2
    femBA, femBC = W * L1**2 / 8, -W * L2**2 / 8
    mBA = femBA - (femBA + femBC) * kBA / (kBA + kBC)
    return {"MB": MB, "RA": RA, "RB": RB, "RC": RC, "mBA": mBA, "x1": RA / W, "M1": RA**2 / (2 * W),
            "x2": RC / W, "M2": RC**2 / (2 * W), "zero1": 2 * RA / W}


def kn(value):
    return value / KN


def solve_with_engine(models):
    script = (
        'const B = require(process.argv[1] + "/engine.js");'
        "const models = JSON.parse(process.argv[2]);"
        "process.stdout.write(JSON.stringify(models.map((m) => {"
        "  const r = B.solve(m);"
        "  return {reactions: r.reactions, points: m.probes.map((x) => B.at(r, x))};"
        "})));"
    )
    result = subprocess.run(
        ["node", "-e", script, str(VIZ), json.dumps(models)],
        capture_output=True, text=True, check=True,
    )
    return json.loads(result.stdout)


class ClosedFormTests(unittest.TestCase):
    def test_propped_cantilever(self):
        p = propped_closed_form()
        self.assertEqual(p["delta_w_mm"], F("101.25"))
        self.assertEqual(p["RB"], F("22.5"))
        self.assertEqual(p["RA"], F("37.5"))
        self.assertEqual(p["MA"], -45)
        self.assertEqual(p["xmax"], F("3.75"))
        self.assertEqual(p["Mmax"], F("25.3125"))
        self.assertEqual(p["Mmax"], F(9, 128) * W * 36)
        self.assertEqual(p["cantilever_MA"], -180)

    def test_two_span_three_moment_and_moment_distribution_agree(self):
        t = two_span_closed_form()
        self.assertEqual(t["MB"], -35)
        self.assertEqual(t["mBA"], 35)
        self.assertEqual(t["RA"], F("11.25"))
        self.assertEqual(t["RC"], F(145, 6))
        self.assertEqual(t["RB"], F(775, 12))
        self.assertEqual(t["RA"] + t["RB"] + t["RC"], 100)
        self.assertEqual(t["zero1"], F("2.25"))
        self.assertEqual(two_span_closed_form(F(6), F(6))["MB"], -45)  # equal spans: -wL^2/8


class ReferenceSolverTests(unittest.TestCase):
    def test_propped_cantilever_matches_reference_solver(self):
        p = propped_closed_form()
        beam = reference.Beam(PROPPED)
        wall, prop = beam.reactions
        self.assertEqual(kn(wall["Fy"]), p["RA"])
        self.assertEqual(kn(prop["Fy"]), p["RB"])
        self.assertEqual(kn(beam.M(F(0))), p["MA"])
        self.assertEqual(kn(beam.M(p["xmax"])), p["Mmax"])
        self.assertEqual(beam.M(p["xcf"]), 0)
        self.assertEqual(beam.v(F(6)), 0)
        self.assertEqual(beam.v(F(0)), 0)
        self.assertEqual(beam.theta(F(0)), 0)

    def test_two_span_matches_reference_solver(self):
        t = two_span_closed_form()
        beam = reference.Beam(TWO_SPAN)
        self.assertEqual([kn(r["Fy"]) for r in beam.reactions], [t["RA"], t["RB"], t["RC"]])
        self.assertEqual(kn(beam.M(F(4))), t["MB"])
        self.assertEqual(kn(beam.M(t["x1"])), t["M1"])
        self.assertEqual(kn(beam.M(10 - t["x2"])), t["M2"])
        for x in (0, 4, 10):
            self.assertEqual(beam.v(F(x)), 0)

    def test_browser_engine_agrees(self):
        p, t = propped_closed_form(), two_span_closed_form()
        propped = dict(PROPPED, probes=[0, float(p["xmax"])])
        two_span = dict(TWO_SPAN, probes=[4, float(t["x1"])])
        (pr, tr) = solve_with_engine([propped, two_span])
        self.assertAlmostEqual(pr["reactions"][1]["Fy"] / KN, float(p["RB"]), places=6)
        self.assertAlmostEqual(tr["reactions"][1]["Fy"] / KN, float(t["RB"]), places=6)
        self.assertAlmostEqual(pr["points"][1]["Mright"] / KN, float(p["Mmax"]), places=6)
        self.assertAlmostEqual(tr["points"][0]["Mright"] / KN, float(t["MB"]), places=6)


class PublishedTextTests(unittest.TestCase):
    STATED = ["101.25", "22.5", "37.5", "45", "180", "25.3125", "3.75", "1.5", "35", "11.25",
              "24.17", "64.58", "28.75", "35.83", "6.33", "1.125", "29.2", "2.42", "1.75", "0.6", "0.4"]

    def test_blog_post_states_the_checked_values(self):
        post = (ROOT / "data" / "blog" / "statically-indeterminate-beams.md").read_text(encoding="utf-8")
        numbers = set(re.findall(r"\d+(?:\.\d+)?", post))
        self.assertEqual([n for n in self.STATED if n not in numbers], [])
        self.assertIn("../decks/indeterminate-beams/index.html", post)
        self.assertIn("../visuals/beamdiag/index.html", post)

    def test_notes_state_the_checked_values(self):
        notes = (ROOT / "data" / "notes.md").read_text(encoding="utf-8")
        beam_notes = "\n".join(p for p in notes.split("\n\n") if p.rstrip().endswith("#structural-engineering"))
        numbers = set(re.findall(r"\d+(?:\.\d+)?", beam_notes))
        self.assertEqual([n for n in self.STATED if n not in numbers], [])

    def test_rounded_values_are_the_exact_results(self):
        p, t = propped_closed_form(), two_span_closed_form()
        for exact, stated in ((t["RC"], "24.17"), (t["RB"], "64.58"), (W * 6 / 2 - t["MB"] / 6, "35.83"),
                              (t["M1"], "6.33"), (t["M2"], "29.2"), (t["x2"], "2.42"), (p["Mmax"], "25.3125")):
            self.assertAlmostEqual(float(exact), float(stated), delta=0.005)


if __name__ == "__main__":
    unittest.main()

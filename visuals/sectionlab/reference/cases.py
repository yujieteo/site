"""Test sections with closed-form expectations.

Each case is a full Sectionlab model plus a list of expectations
(quantity, value, formula). build_reference.py writes them to fixtures.json for the
Node tests and solves them with the Python references into reference.json.
Quantities name properties (A, cx, cy, Ix, Iy, Ixy, I1, I2, Qx, Qy, Sx_top, …),
"J" (torsion), or plastic results ("Zp", "Mp", "Mel", "shapeFactor").
"""

import math

pi = math.pi
STEEL = {"id": "s355", "name": "Steel", "E": 210000, "sigma02": 355, "n": 25, "eps_lim": 0.015}
ALU = {"id": "al", "name": "Aluminium", "E": 70000, "sigma02": 240, "n": 10, "eps_lim": 0.01}
ALU_C = {"id": "alc", "name": "Aluminium, weaker in compression", "E": 70000, "sigma02": 240, "n": 10, "eps_lim": 0.01,
         "compression": {"E": 72000, "sigma02": 200, "n": 8, "eps_lim": 0.008}}


def part(pid, shape, dims, radii=None, x=0.0, y=0.0, orientation=0, material="s355", void=False):
    return {"id": pid, "name": pid, "shape": shape, "dims": dims, "radii": radii if radii is not None else [], "x": x, "y": y,
            "orientation": orientation, "material": None if void else material, "void": void}


def model(title, parts, materials=(STEEL,), E_base=None, axis="x", N=0.0, solve="zero-cross"):
    m = {"sectionlab": 1, "title": title, "materials": list(materials), "parts": parts, "plastic": {"axis": axis, "N": N, "solve": solve}}
    m["E_base"] = E_base if E_base is not None else materials[0]["E"]
    return m


def e(quantity, value, formula):
    return {"quantity": quantity, "value": value, "formula": formula}


def rect_case():
    b, h = 100.0, 200.0
    return {
        "id": "rect", "plastic": True,
        "model": model("Rectangle 100 x 200", [part("r", "rect", {"b": b, "h": h}, [0, 0, 0, 0], x=10, y=-5)]),
        "expect": [
            e("A", b * h, "b h"), e("cx", 10.0, "x"), e("cy", -5.0, "y"),
            e("Ix", b * h ** 3 / 12, "b h³/12"), e("Iy", h * b ** 3 / 12, "h b³/12"), e("Ixy", 0.0, "0"),
            e("Qx", b * h ** 2 / 8, "b h²/8"), e("Qy", h * b ** 2 / 8, "h b²/8"),
            e("Sx_top", b * h ** 2 / 6, "b h²/6"), e("Sx_bottom", b * h ** 2 / 6, "b h²/6"),
            e("Zp", b * h ** 2 / 4, "b h²/4"), e("Mel", 355 * b * h ** 2 / 6, "σ0.2 b h²/6"), e("shapeFactor", 1.5, "3/2"),
        ],
    }


def rect_turned_case():
    b, h = 100.0, 200.0
    return {
        "id": "rect-turned", "plastic": True,
        "model": model("Rectangle turned 90°", [part("r", "rect", {"b": b, "h": h}, [0, 0, 0, 0], orientation=90)], axis="y"),
        "expect": [e("Ix", h * b ** 3 / 12, "h b³/12 (turned)"), e("Iy", b * h ** 3 / 12, "b h³/12 (turned)"), e("Zp", b * h ** 2 / 4, "b h²/4 about y")],
    }


def rect_axial_case():
    b, h, N = 100.0, 200.0, -2.0e6
    Np = 355 * b * h
    n = N / Np
    return {
        "id": "rect-axial", "plastic": True,
        "model": model("Rectangle with N", [part("r", "rect", {"b": b, "h": h}, [0, 0, 0, 0])], N=N),
        "expect": [e("Mp", 355 * b * h ** 2 / 4 * (1 - n * n), "σ0.2 b h²/4 (1 − (N/N_p)²)")],
    }


def circle_case():
    d = 100.0
    return {
        "id": "circle", "plastic": True,
        "model": model("Circle d 100", [part("c", "circle", {"d": d})]),
        "expect": [
            e("A", pi * d * d / 4, "π d²/4"), e("Ix", pi * d ** 4 / 64, "π d⁴/64"), e("Iy", pi * d ** 4 / 64, "π d⁴/64"),
            e("Qx", d ** 3 / 12, "d³/12"), e("J", pi * d ** 4 / 32, "π d⁴/32"),
            e("Zp", d ** 3 / 6, "d³/6"), e("shapeFactor", 16 / (3 * pi), "16/(3π)"),
        ],
    }


def chs_case():
    D, t = 168.3, 8.0
    d = D - 2 * t
    return {
        "id": "chs", "plastic": True,
        "model": model("CHS 168.3 x 8", [part("c", "chs", {"d": D, "t": t}, material="al")], materials=(ALU,)),
        "expect": [
            e("A", pi * (D * D - d * d) / 4, "π (D² − d²)/4"), e("Ix", pi * (D ** 4 - d ** 4) / 64, "π (D⁴ − d⁴)/64"),
            e("Qx", (D ** 3 - d ** 3) / 12, "(D³ − d³)/12"), e("J", pi * (D ** 4 - d ** 4) / 32, "π (D⁴ − d⁴)/32"),
            e("Zp", (D ** 3 - d ** 3) / 6, "(D³ − d³)/6"),
        ],
    }


def semicircle_case():
    d = 100.0
    r = d / 2
    return {
        "id": "semicircle", "plastic": True,
        "model": model("Semicircle", [part("s", "semicircle", {"d": d})], axis="y"),
        "expect": [
            e("A", pi * r * r / 2, "π r²/2"), e("cy", -r / 2 + 4 * r / (3 * pi), "−r/2 + 4r/(3π) (bounding box centred)"),
            e("Ix", (pi / 8 - 8 / (9 * pi)) * r ** 4, "(π/8 − 8/(9π)) r⁴"), e("Iy", pi * r ** 4 / 8, "π r⁴/8"),
            e("J", (pi / 2 - 4 / pi) * r ** 4, "(π/2 − 4/π) r⁴"), e("Zp", 2 * r ** 3 / 3, "2r³/3 about the axis of symmetry"),
        ],
    }


def triangle_case():
    b, h, a = 120.0, 90.0, 30.0
    return {
        "id": "triangle", "plastic": False,
        "model": model("Triangle", [part("t", "triangle", {"b": b, "h": h, "a": a}, [0, 0, 0])]),
        "expect": [
            e("A", b * h / 2, "b h/2"), e("cy", -h / 2 + h / 3, "−h/2 + h/3"),
            e("Ix", b * h ** 3 / 36, "b h³/36"), e("Iy", (b ** 3 * h - b * b * h * a + b * h * a * a) / 36, "(b³h − b²ha + bha²)/36"),
            e("Ixy", b * h * h * (2 * a - b) / 72, "b h² (2a − b)/72"),
        ],
    }


def equilateral_case():
    s = 100.0
    return {
        "id": "equilateral", "plastic": False,
        "model": model("Equilateral triangle", [part("t", "triangle", {"b": s, "h": s * math.sqrt(3) / 2, "a": s / 2}, [0, 0, 0])]),
        "expect": [e("A", math.sqrt(3) / 4 * s * s, "√3 a²/4"), e("Ix", math.sqrt(3) / 96 * s ** 4, "√3 a⁴/96"), e("J", math.sqrt(3) * s ** 4 / 80, "√3 a⁴/80")],
    }


def rounded_rect_case():
    b, r = 100.0, 10.0
    return {
        "id": "rounded-square", "plastic": True,
        "model": model("Rounded square", [part("q", "rect", {"b": b, "h": b}, [r, r, r, r])]),
        "expect": [e("A", b * b - (4 - pi) * r * r, "b² − (4 − π) r²")],
    }


def rhs_sharp_case():
    b, h, t = 100.0, 200.0, 10.0
    bi, hi = b - 2 * t, h - 2 * t
    return {
        "id": "rhs-sharp", "plastic": True,
        "model": model("RHS sharp", [part("box", "rhs", {"b": b, "h": h, "t": t}, [0] * 8)]),
        "expect": [
            e("A", b * h - bi * hi, "b h − bᵢ hᵢ"), e("Ix", (b * h ** 3 - bi * hi ** 3) / 12, "(b h³ − bᵢ hᵢ³)/12"),
            e("Zp", (b * h * h - bi * hi * hi) / 4, "(b h² − bᵢ hᵢ²)/4"),
        ],
    }


def rhs_rounded_case():
    return {
        "id": "rhs-rounded", "plastic": True,
        "model": model("RHS 200 x 100 x 8", [part("box", "rhs", {"b": 100, "h": 200, "t": 8}, [16, 16, 16, 16, 8, 8, 8, 8])]),
        "expect": [],
    }


def tee_hole_case():
    bf, tf, tw, hw, d = 200.0, 20.0, 12.0, 200.0, 6.0
    A1, A2, A3 = bf * tf, tw * hw, pi * d * d / 4
    y1, y2, y3 = 110.0, 0.0, -40.0
    A = A1 + A2 - A3
    yc = (A1 * y1 - A3 * y3) / A
    Ix = bf * tf ** 3 / 12 + A1 * (y1 - yc) ** 2 + tw * hw ** 3 / 12 + A2 * yc ** 2 - (pi * d ** 4 / 64 + A3 * (y3 - yc) ** 2)
    return {
        "id": "tee-hole", "plastic": True,
        "model": model("Tee with hole", [part("flange", "rect", {"b": bf, "h": tf}, [0, 0, 0, 0], y=y1), part("web", "rect", {"b": tw, "h": hw}, [0, 0, 0, 0]),
                                          part("hole", "circle", {"d": d}, y=y3, void=True)]),
        "expect": [e("A", A, "A_f + A_w − A_hole"), e("cy", yc, "Σ A y / A"), e("Ix", Ix, "parallel-axis sum")],
    }


def composite_case():
    # Steel plate on aluminium box, transformed to aluminium.
    n = 210000 / 70000
    return {
        "id": "composite", "plastic": True,
        "model": model("Steel on aluminium", [part("box", "rhs", {"b": 120, "h": 160, "t": 6}, [0] * 8, material="al"),
                                               part("plate", "rect", {"b": 160, "h": 12}, [0, 0, 0, 0], y=86)],
                       materials=(ALU, STEEL), E_base=70000),
        "expect": [e("A", (120 * 160 - 108 * 148) + n * 160 * 12, "A_box + n A_plate, n = 3")],
    }


def angle_case():
    # Equal legs 100 x 10 built from two plates (unsymmetric: principal axes at 45°).
    return {
        "id": "angle", "plastic": True,
        "model": model("Angle 100 x 100 x 10", [part("v", "rect", {"b": 10, "h": 100}, [0, 0, 0, 0], x=5, y=50),
                                                part("h", "rect", {"b": 90, "h": 10}, [0, 0, 0, 0], x=55, y=5)], solve="fixed-axis"),
        "expect": [e("thetaDeg", 45.0, "equal legs: major axis at +45°, across the legs"), e("cx", (100 * 10 * 5 + 90 * 10 * 55) / 1900, "Σ A x / A")],
    }


def angle_zero_cross_case():
    c = angle_case()
    c = {"id": "angle-zero-cross", "plastic": False, "model": dict(c["model"]), "expect": []}
    c["model"]["plastic"] = {"axis": "x", "N": 0.0, "solve": "zero-cross"}
    return c


def mixed_case():
    parts = [
        part("f", "rect", {"b": 200, "h": 20}, [0, 0, 5, 5], y=110),
        part("w", "rhs", {"b": 50, "h": 200, "t": 6}, [12, 12, 12, 12, 6, 6, 6, 6], orientation=90),
        part("t", "triangle", {"b": 50, "h": 40, "a": 10}, [3, 4, 2], x=150, orientation=90, material="alc"),
        part("tv", "circle", {"d": 5}, x=150, void=True),
        part("sc", "semicircle", {"d": 40}, x=-150, orientation=90),
        part("c", "chs", {"d": 40, "t": 3}, x=-150, y=80, material="alc"),
        part("p", "polygon", {"n": 7, "d": 40}, [1, 2, 3, 4, 5, 6, 0], x=-150, y=-80),
        part("z", "trapezoid", {"b": 60, "bt": 20, "h": 30, "s": 10}, [2, 0, 3, 1], x=100, y=-100),
    ]
    return {"id": "mixed", "plastic": True, "model": model("Every phase-1 shape", parts, materials=(STEEL, ALU_C), E_base=200000, axis="minor", N=5.0e4, solve="fixed-axis"), "expect": []}


def polygon_case():
    n, d = 6, 100.0
    R = d / 2
    return {
        "id": "hexagon", "plastic": True,
        "model": model("Hexagon", [part("p", "polygon", {"n": n, "d": d}, [0] * n)], axis="major"),
        "expect": [e("A", 3 * math.sqrt(3) / 2 * R * R, "3√3/2 R²"), e("Ix", 5 * math.sqrt(3) / 16 * R ** 4, "5√3/16 R⁴")],
    }


CASES = [
    rect_case(), rect_turned_case(), rect_axial_case(), circle_case(), chs_case(), semicircle_case(), triangle_case(),
    equilateral_case(), rounded_rect_case(), rhs_sharp_case(), rhs_rounded_case(), tee_hole_case(), composite_case(),
    angle_case(), angle_zero_cross_case(), mixed_case(), polygon_case(),
]

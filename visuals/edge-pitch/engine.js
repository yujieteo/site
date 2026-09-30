/* EDGEPITCH engine: edge distance, end distance and pitch in riveted and
 * bolted sheet and plate joints.
 *
 * Not for certification. Exploration and preliminary sizing only.
 *
 * Joint: one checked sheet (a single-lap sheet, or the middle plate of a
 * double-shear joint) with `rows` rows of `perRow` fasteners. Row 0 is the
 * end row, at the end distance e_end from the free end; the outer fasteners of
 * every row sit at the side edge distance e_side from the side edges. Every
 * fastener takes an equal share of P. With the load across the rows the pitch
 * p sets the net-section strip and the inter-rivet buckling length; with the
 * load along the rows the row spacing g takes that role.
 *
 * Strength checks report allowable, applied and MS = allowable/applied − 1.
 * Geometric checks report MS_geom = actual/minimum − 1 and are kept apart, so
 * "meets the geometry rule" is never read as "passes strength".
 *
 * Units are canonical N, mm and MPa (N/mm²) everywhere in this file. The SI/US
 * toggle converts only at the input and output boundary.
 *
 * Everything here is a pure function of its arguments: no DOM, no clock, no
 * randomness. The page and the Node tests call the same code.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.EdgePitch = api;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const SCHEMA_VERSION = 1;
  const KIND = { inputs: "edge-pitch-inputs", results: "edge-pitch-results", vector: "edge-pitch-test-vector" };
  const DISCLAIMER = "Not for certification. Exploration and preliminary sizing only. Loads and allowables are yours; every result must be checked independently before it is relied on for design, manufacture or airworthiness.";

  /* ---------- Units ---------- */

  // Size of one display unit in canonical units (mm, N, MPa).
  const UNITS = {
    SI: { length: { sym: "mm", f: 1 }, force: { sym: "N", f: 1 }, stress: { sym: "MPa", f: 1 } },
    US: { length: { sym: "in", f: 25.4 }, force: { sym: "lbf", f: 4.4482216152605 }, stress: { sym: "ksi", f: 6.89475729316836 } },
  };
  const unitSym = (kind, sys) => (UNITS[sys] && UNITS[sys][kind] ? UNITS[sys][kind].sym : "");
  const toDisplay = (v, kind, sys) => (v == null || !UNITS[sys][kind] ? v : v / UNITS[sys][kind].f);
  const fromDisplay = (v, kind, sys) => (v == null || !UNITS[sys][kind] ? v : v * UNITS[sys][kind].f);

  /* ---------- Sources ---------- */

  const TAGS = {
    niu: { label: "Niu", note: "confirm against your copy" },
    nasa: { label: "NASA: RP-1228", note: "Barrett, Fastener Design Manual (1990)" },
    classical: { label: "classical", note: "textbook mechanics" },
    unsourced: { label: "unsourced default", note: "placeholder, not a book value" },
    user: { label: "user allowable", note: "entered by you" },
  };

  const SOURCES = [
    { id: "rp1228", tag: "nasa", cite: "Barrett, R. T., Fastener Design Manual, NASA Reference Publication 1228, March 1990. NTRS 19900009424.", url: "https://ntrs.nasa.gov/citations/19900009424",
      states: ["p. 21, 'Fastener Edge Distance and Spacing': nominal edge distance 2D from the hole centreline, minimum not less than 1.5D, nominal spacing 4D; buckling between fasteners can be a problem in thin material.",
        "p. 34, 'General Guidelines for Selecting Rivets and Lockbolts': nominal rivet edge distance 2D and linear spacing 4D; the 4D spacing can be increased if sealing or inter-rivet buckling is not a problem."] },
    { id: "niu", tag: "niu", cite: "Niu, M. C. Y., Airframe Stress Analysis and Sizing. Methods only; no table or figure is reproduced. Enter tabulated values from your own copy.", url: null, states: [] },
    { id: "classical", tag: "classical", cite: "Classical strength of materials: net-section tension, shear-out planes, the Cochrane s²/4g stagger rule, and Euler and Johnson column strength.", url: null, states: [] },
  ];

  /* ---------- Inputs ---------- */

  // kind: length | force | stress | ratio | count | enum. pos: must be > 0;
  // nonneg: must be ≥ 0; nullable: null means "derive". tags name TAGS keys.
  const FIELDS = [
    { path: "fastener.type", group: "Fastener", label: "Type", kind: "enum", options: [["solid-rivet", "Solid rivet"], ["blind-rivet", "Blind rivet"], ["bolt", "Bolt"]] },
    { path: "fastener.D", group: "Fastener", label: "Nominal diameter D", sym: "D", kind: "length", pos: true },
    { path: "fastener.Dh", group: "Fastener", label: "Hole diameter D_h", sym: "D_h", kind: "length", pos: true },
    { path: "fastener.head", group: "Fastener", label: "Head", kind: "enum", options: [["protruding", "Protruding"], ["countersunk", "Countersunk"]] },
    { path: "fastener.csk", group: "Fastener", label: "Countersink depth", sym: "c_s", kind: "length", nonneg: true, when: (x) => x.fastener.head === "countersunk" },
    { path: "sheet.t", group: "Sheet or plate", label: "Thickness t", sym: "t", kind: "length", pos: true },
    { path: "sheet.W", group: "Sheet or plate", label: "Width W", sym: "W", kind: "length", pos: true },
    { path: "sheet.shear", group: "Sheet or plate", label: "Layers", kind: "enum", options: [["single", "Single lap (single shear)"], ["double", "Middle plate (double shear)"]] },
    { path: "material.E", group: "Allowables", label: "Young's modulus E", sym: "E", kind: "stress", pos: true, tags: ["user"] },
    { path: "material.nu", group: "Allowables", label: "Poisson's ratio ν", sym: "ν", kind: "ratio", pos: true, tags: ["user"] },
    { path: "material.Ftu", group: "Allowables", label: "F_tu", sym: "F_tu", kind: "stress", pos: true, tags: ["user"] },
    { path: "material.Fty", group: "Allowables", label: "F_ty", sym: "F_ty", kind: "stress", pos: true, tags: ["user"] },
    { path: "material.Fcy", group: "Allowables", label: "F_cy", sym: "F_cy", kind: "stress", pos: true, tags: ["user"] },
    { path: "material.Fsu", group: "Allowables", label: "F_su", sym: "F_su", kind: "stress", pos: true, tags: ["user"] },
    { path: "material.Fbru15", group: "Allowables", label: "F_bru at e/D = 1.5", sym: "F_bru(1.5)", kind: "stress", pos: true, tags: ["user", "niu"] },
    { path: "material.Fbru20", group: "Allowables", label: "F_bru at e/D = 2.0", sym: "F_bru(2.0)", kind: "stress", pos: true, tags: ["user", "niu"] },
    { path: "geometry.pattern", group: "Geometry", label: "Pattern", kind: "enum", options: [["single", "Single row"], ["aligned", "Aligned rows"], ["staggered", "Staggered rows"]] },
    { path: "geometry.rows", group: "Geometry", label: "Rows", sym: "n_r", kind: "count" },
    { path: "geometry.perRow", group: "Geometry", label: "Fasteners per row", sym: "n_f", kind: "count" },
    { path: "geometry.eEnd", group: "Geometry", label: "End distance e_end", sym: "e_end", kind: "length", pos: true },
    { path: "geometry.eSide", group: "Geometry", label: "Side edge distance e_side", sym: "e_side", kind: "length", pos: true },
    { path: "geometry.p", group: "Geometry", label: "Pitch p", sym: "p", kind: "length", pos: true },
    { path: "geometry.g", group: "Geometry", label: "Row spacing g", sym: "g", kind: "length", pos: true, when: (x) => x.geometry.rows > 1 },
    { path: "load.P", group: "Load", label: "Total load P", sym: "P", kind: "force", pos: true },
    { path: "load.share", group: "Load", label: "Share per fastener", kind: "enum", options: [["equal", "Equal share"]] },
    { path: "load.direction", group: "Load", label: "Direction", kind: "enum", options: [["normal", "Across the rows"], ["parallel", "Along the rows"]] },
    { path: "load.sigmaSheet", group: "Load", label: "Compressive sheet stress σ", sym: "σ_c", kind: "stress", nonneg: true, nullable: true },
    { path: "buckling.c", group: "Inter-rivet buckling", label: "End fixity c", sym: "c", kind: "ratio", pos: true, tags: ["niu", "unsourced"] },
    { path: "rules.eDmin", group: "Geometry rules", label: "Minimum e/D", sym: "(e/D)_min", kind: "ratio", pos: true, tags: ["niu", "nasa"] },
    { path: "rules.eDnom", group: "Geometry rules", label: "Nominal e/D", sym: "(e/D)_nom", kind: "ratio", pos: true, tags: ["niu", "nasa"] },
    { path: "rules.pDmin", group: "Geometry rules", label: "Minimum p/D", sym: "(p/D)_min", kind: "ratio", pos: true, tags: ["niu", "unsourced"] },
    { path: "rules.pDtyp", group: "Geometry rules", label: "Typical p/D", sym: "(p/D)_typ", kind: "ratio", pos: true, tags: ["niu", "nasa"] },
    { path: "rules.gDmin", group: "Geometry rules", label: "Minimum g/D", sym: "(g/D)_min", kind: "ratio", pos: true, tags: ["niu", "unsourced"] },
    { path: "rules.cskMax", group: "Geometry rules", label: "Max countersink / t", sym: "c_s/t", kind: "ratio", pos: true, tags: ["unsourced"] },
    { path: "rules.marginal", group: "Geometry rules", label: "Marginal MS band", sym: "MS_m", kind: "ratio", nonneg: true, tags: ["unsourced"] },
  ];
  const FIELD = Object.fromEntries(FIELDS.map((f) => [f.path, f]));

  // The page starts from these numbers. Allowables are round placeholders, not
  // material data: replace them with your own.
  function example() {
    return {
      fastener: { type: "solid-rivet", D: 4.8, Dh: 4.9, head: "protruding", csk: 0 },
      sheet: { t: 1.6, W: 115.2, shear: "single" },
      material: { E: 70000, nu: 0.33, Ftu: 400, Fty: 300, Fcy: 300, Fsu: 250, Fbru15: 600, Fbru20: 750 },
      geometry: { pattern: "aligned", rows: 2, perRow: 5, eEnd: 9.6, eSide: 9.6, p: 24, g: 19.2 },
      load: { P: 10000, share: "equal", direction: "normal", sigmaSheet: null },
      buckling: { c: 1.0 },
      rules: { eDmin: 1.5, eDnom: 2.0, pDmin: 3.0, pDtyp: 4.0, gDmin: 3.0, cskMax: 2 / 3, marginal: 0.1 },
    };
  }

  // Which defaults are placeholders and which a source states.
  const DEFAULT_SOURCES = {
    "rules.eDmin": { tag: "nasa", text: "RP-1228 p. 21: minimum edge distance not less than 1.5D" },
    "rules.eDnom": { tag: "nasa", text: "RP-1228 pp. 21 and 34: nominal edge distance 2D" },
    "rules.pDtyp": { tag: "nasa", text: "RP-1228 pp. 21 and 34: nominal spacing 4D" },
    "rules.pDmin": { tag: "unsourced", text: "placeholder; RP-1228 gives a nominal, not a minimum, spacing" },
    "rules.gDmin": { tag: "unsourced", text: "placeholder" },
    "rules.cskMax": { tag: "unsourced", text: "placeholder (about 2/3 of t)" },
    "rules.marginal": { tag: "unsourced", text: "placeholder colour band for the schematic" },
    "buckling.c": { tag: "unsourced", text: "placeholder (pinned ends, c = 1)" },
    "material.*": { tag: "unsourced", text: "round placeholders, not material allowables" },
  };

  const get = (o, path) => path.split(".").reduce((a, k) => (a == null ? undefined : a[k]), o);
  function set(o, path, v) {
    const keys = path.split(".");
    let a = o;
    for (const k of keys.slice(0, -1)) a = a[k] = a[k] && typeof a[k] === "object" ? a[k] : {};
    a[keys[keys.length - 1]] = v;
  }

  // Fill missing keys from the example so partial files and tool calls work.
  function normalise(x) {
    const base = example();
    const out = example();
    for (const f of FIELDS) {
      const v = get(x || {}, f.path);
      set(out, f.path, v === undefined ? get(base, f.path) : v);
    }
    return out;
  }

  // Convert every dimensional field between canonical SI and display units.
  function convertInputs(x, sys, dir) {
    const out = JSON.parse(JSON.stringify(x));
    for (const f of FIELDS) {
      if (!["length", "force", "stress"].includes(f.kind)) continue;
      const v = get(out, f.path);
      if (typeof v === "number") set(out, f.path, dir === "toDisplay" ? toDisplay(v, f.kind, sys) : fromDisplay(v, f.kind, sys));
    }
    return out;
  }

  /* ---------- Validation ---------- */

  function validate(x) {
    const errors = [];
    const warnings = [];
    const err = (path, message) => errors.push({ path, message });
    if (!x || typeof x !== "object") return { errors: [{ path: null, message: "No input." }], warnings };
    for (const f of FIELDS) {
      const v = get(x, f.path);
      if (f.kind === "enum") {
        if (!f.options.some((o) => o[0] === v)) err(f.path, `${f.label}: choose one of ${f.options.map((o) => o[0]).join(", ")}.`);
        continue;
      }
      if (f.when && !safeWhen(f, x)) continue;
      if (f.nullable && v === null) continue;
      if (typeof v !== "number" || !Number.isFinite(v)) { err(f.path, `${f.label} is missing or not a number.`); continue; }
      if (f.kind === "count" && (!Number.isInteger(v) || v < 1)) err(f.path, `${f.label} must be a whole number of at least 1.`);
      else if (f.pos && v <= 0) err(f.path, `${f.label} must be positive.`);
      else if (f.nonneg && v < 0) err(f.path, `${f.label} must not be negative.`);
    }
    if (errors.length) return { errors, warnings };
    const { fastener: F, sheet: S, material: M, geometry: G, rules: R } = x;
    if (M.nu >= 0.5) err("material.nu", "Poisson's ratio must be below 0.5.");
    if (F.Dh >= G.p) err("geometry.p", "Hole diameter D_h must be smaller than the pitch p.");
    if (G.rows > 1 && F.Dh >= G.g) err("geometry.g", "Hole diameter D_h must be smaller than the row spacing g.");
    if (G.eEnd <= F.Dh / 2) err("geometry.eEnd", "End distance e_end must exceed the hole radius D_h/2.");
    if (G.eSide <= F.Dh / 2) err("geometry.eSide", "Side edge distance e_side must exceed the hole radius D_h/2.");
    if (F.head === "countersunk" && F.csk >= S.t) err("fastener.csk", "Countersink depth must be less than the thickness t.");
    if (G.pattern === "single" && G.rows !== 1) err("geometry.rows", "A single-row pattern has exactly one row.");
    if (alongRows(x) && G.rows < 2) err("load.direction", "Load along the rows needs at least two rows: the row spacing g sets the net-section strip and the inter-rivet buckling length.");
    const need = patternWidth(x);
    if (S.W < need * (1 - 1e-9)) err("sheet.W", `Width W is narrower than the pattern: 2·e_side + (n_f − 1)·p${stagger(x) ? " + p/2" : ""} = ${fmt(need)} mm.`);
    if (errors.length) return { errors, warnings };

    const w = (path, message) => warnings.push({ path, message });
    const eD = G.eEnd / F.D;
    if (eD < 1.5) w("geometry.eEnd", `e_end/D = ${fmt(eD)} is below 1.5, outside the tabulated range for bearing; F_bru is not extrapolated, so bearing is not evaluated.`);
    if (G.eSide / F.D < 1.5) w("geometry.eSide", `e_side/D = ${fmt(G.eSide / F.D)} is below 1.5.`);
    if (G.p / F.D < R.pDmin) w("geometry.p", `p/D = ${fmt(G.p / F.D)} is below the entered minimum ${fmt(R.pDmin)}.`);
    if (G.rows > 1 && G.g / F.D < R.gDmin) w("geometry.g", `g/D = ${fmt(G.g / F.D)} is below the entered minimum ${fmt(R.gDmin)}.`);
    if (G.eEnd / F.D < R.eDmin) w("geometry.eEnd", `e_end/D = ${fmt(eD)} is below the entered minimum ${fmt(R.eDmin)}.`);
    if (G.eSide / F.D < R.eDmin) w("geometry.eSide", `e_side/D = ${fmt(G.eSide / F.D)} is below the entered minimum ${fmt(R.eDmin)}.`);
    if (F.head === "countersunk" && F.csk > R.cskMax * S.t) w("fastener.csk", `Countersink depth is ${fmt(F.csk / S.t)}·t, deeper than the entered limit ${fmt(R.cskMax)}·t.`);
    if (F.Dh < F.D) w("fastener.Dh", "Hole diameter D_h is smaller than the nominal diameter D.");
    const sig = sheetStress(x);
    if (sig > M.Fcy) w("load.sigmaSheet", `Compressive sheet stress ${fmt(sig)} MPa is above F_cy = ${fmt(M.Fcy)} MPa; no pitch prevents inter-rivet buckling.`);
    const bearingStress = x.load.P / (G.rows * G.perRow) / (F.D * S.t);
    if (bearingStress > M.Fcy) w("load.P", `Applied bearing stress ${fmt(bearingStress)} MPa is above F_cy = ${fmt(M.Fcy)} MPa.`);
    if (G.pattern !== "single" && G.rows < 2) w("geometry.rows", `The ${G.pattern} pattern assumes at least two rows; with one row it is checked as a single row.`);
    if (G.perRow < 2) w("geometry.perRow", "Fewer than two fasteners per row: net section uses the plate width W − D_h, not the pitch.");
    if (G.rows * G.perRow < 2) w("geometry.perRow", "A single fastener: the pattern checks assume more than one.");
    if (G.rows > 1 && G.g / F.D < 1.5) w("geometry.g", `g/D = ${fmt(G.g / F.D)} is below 1.5, outside the tabulated range for interior-row bearing; F_bru is not extrapolated, so interior-row bearing is not evaluated.`);
    else if (G.rows > 1 && G.g / F.D < 2) w("geometry.g", `g/D = ${fmt(G.g / F.D)}: interior-row bearing uses F_bru at e/D = g/D.`);
    if (alongRows(x)) w("load.direction", "Load along the rows: net section, inter-rivet buckling and maximum spacing use the row spacing g; bearing, shear-out and side edge still take the rows across the load. Treat those as nominal.");
    if (x.material.Fbru20 < x.material.Fbru15) w("material.Fbru20", "F_bru at e/D = 2.0 is below the value at 1.5.");
    if (S.W > need * (1 + 1e-6)) w("sheet.W", `Width W exceeds 2·e_side + (n_f − 1)·p${stagger(x) ? " + p/2" : ""} = ${fmt(need)} mm; the side ligament is checked at e_side.`);
    return { errors, warnings };
  }

  function safeWhen(f, x) {
    try { return f.when(x); } catch (e) { return true; }
  }

  const stagger = (x) => x.geometry.pattern === "staggered" && x.geometry.rows > 1;
  const alongRows = (x) => x.load.direction === "parallel";
  // Fastener spacing across the load: the net-section strip width and the
  // inter-rivet buckling length. n is the number of strips sharing P.
  const spacing = (x) => (alongRows(x) ? { sym: "g", L: x.geometry.g, n: x.geometry.rows } : { sym: "p", L: x.geometry.p, n: x.geometry.perRow });
  const patternWidth = (x) => 2 * x.geometry.eSide + (x.geometry.perRow - 1) * x.geometry.p + (stagger(x) ? x.geometry.p / 2 : 0);
  const sheetStress = (x) => (x.load.sigmaSheet == null ? x.load.P / (x.sheet.W * x.sheet.t) : x.load.sigmaSheet);

  /* ---------- Formulas ---------- */

  // Linear between the user's two values; no extrapolation below 1.5, and the
  // e/D = 2.0 value is held above 2.0.
  function fbru(eD, F15, F20) {
    if (!(eD >= 1.5)) return null;
    if (eD >= 2) return F20;
    if (eD === 1.5) return F15;
    return F15 + ((eD - 1.5) / 0.5) * (F20 - F15);
  }

  // Shared column-strength function: Euler with a Johnson parabola below
  // σ_E = F_cy/2. slenderness = L/ρ; fixity c divides the effective length by √c.
  function columnStrength(E, Fcy, slenderness, c) {
    const le = slenderness / Math.sqrt(c);
    const sigmaE = le > 0 ? (Math.PI * Math.PI * E) / (le * le) : Infinity;
    if (sigmaE <= Fcy / 2) return { sigma: sigmaE, branch: "euler", sigmaE, le };
    return { sigma: Fcy - (Fcy * Fcy * le * le) / (4 * Math.PI * Math.PI * E), branch: "johnson", sigmaE, le };
  }

  // Slenderness L/ρ at which the column strength equals sigma (0 when sigma ≥ F_cy).
  function slendernessFor(E, Fcy, sigma, c) {
    if (!(sigma > 0)) return Infinity;
    if (sigma >= Fcy) return 0;
    const le = sigma <= Fcy / 2 ? Math.PI * Math.sqrt(E / sigma) : ((2 * Math.PI) / Fcy) * Math.sqrt(E * (Fcy - sigma));
    return le * Math.sqrt(c);
  }

  const rho = (t) => t / Math.sqrt(12);
  const ms = (allowable, applied) => (allowable == null || !(applied > 0) ? null : allowable / applied - 1);

  function bearing(eDist, x) {
    const { fastener: F, sheet: S, material: M } = x;
    const eD = eDist / F.D;
    const f = fbru(eD, M.Fbru15, M.Fbru20);
    return { eD, Fbru: f, allowable: f == null ? null : f * F.D * S.t };
  }

  // Net width per pitch strip; staggered rows also try the zig-zag path through
  // one hole in each row (Cochrane: stagger g along the load, gauge p/2 across it).
  // Along the rows the strip is g wide and the straight g − D_h is used.
  function netWidth(x) {
    const { fastener: F, geometry: G, sheet: S } = x;
    if (alongRows(x)) return { width: G.g - F.Dh, path: "straight, g − D_h", straight: G.g - F.Dh, zigzag: null };
    if (G.perRow < 2) return { width: S.W - F.Dh, path: "plate width W − D_h", straight: S.W - F.Dh, zigzag: null };
    const straight = G.p - F.Dh;
    if (!stagger(x)) return { width: straight, path: "straight, p − D_h", straight, zigzag: null };
    const zigzag = G.p - 2 * F.Dh + (G.g * G.g) / G.p;
    return zigzag < straight ? { width: zigzag, path: "zig-zag, p − 2D_h + g²/p", straight, zigzag } : { width: straight, path: "straight, p − D_h", straight, zigzag };
  }

  function netSection(x) {
    const { geometry: G, sheet: S, material: M, load: L } = x;
    const n = netWidth(x);
    const applied = alongRows(x) || G.perRow > 1 ? L.P / spacing(x).n : L.P;
    return { ...n, applied, allowable: n.width > 0 ? M.Ftu * n.width * S.t : 0, stress: n.width > 0 ? applied / (n.width * S.t) : Infinity };
  }

  function buckling(len, x) {
    const { sheet: S, material: M, buckling: B } = x;
    const slender = len / rho(S.t);
    return { slenderness: slender, pt: len / S.t, ...columnStrength(M.E, M.Fcy, slender, B.c) };
  }

  function maxPitch(x) {
    const sigma = sheetStress(x);
    return slendernessFor(x.material.E, x.material.Fcy, sigma, x.buckling.c) * rho(x.sheet.t);
  }

  /* ---------- Solve ---------- */

  function check(id, title, kind, allowable, applied, source, formula, extra) {
    return { id, title, kind, allowable, applied, ms: ms(allowable, applied), source, formula, ...extra };
  }

  function solve(input) {
    const x = input;
    const { errors, warnings } = validate(x);
    if (errors.length) return { ok: false, errors, warnings: [] };
    const { fastener: F, sheet: S, material: M, geometry: G, load: L, rules: R } = x;
    const n = G.rows * G.perRow;
    const Pf = L.P / n;
    const strip = G.perRow < 2 ? L.P : L.P / G.perRow;

    const br = bearing(G.eEnd, x);
    const bi = G.rows > 1 ? bearing(G.g, x) : null;
    const sp = spacing(x);
    const soPlane = G.eEnd - F.Dh / 2;
    const net = netSection(x);
    const sideA = (G.eSide - F.Dh / 2) * S.t;
    const sigma = sheetStress(x);
    const bk = buckling(sp.L, x);
    const pMax = maxPitch(x);

    const strength = [
      check("bearing", "Bearing (end row)", "force", br.allowable, Pf, ["niu", "user"], "P_br = F_bru(e/D)·D·t, F_bru linear between e/D = 1.5 and 2.0",
        { eD: br.eD, Fbru: br.Fbru, status: br.Fbru == null ? "outside tabulated range" : null }),
      bi && check("bearingInterior", "Bearing (interior rows)", "force", bi.allowable, Pf, ["niu", "user"], "P_br = F_bru(g/D)·D·t, interior rows take e/D = g/D",
        { eD: bi.eD, Fbru: bi.Fbru, status: bi.Fbru == null ? "outside tabulated range" : null }),
      check("shearOut", "Shear-out (end distance)", "force", 2 * soPlane * S.t * M.Fsu, Pf, ["classical", "niu"], "P_so = 2·(e_end − D_h/2)·t·F_su",
        { plane: soPlane, note: "Plane length e_end − D_h/2: confirm the convention against your copy." }),
      check("netSection", "Net section between holes", "force", net.allowable, net.applied, ["classical"], alongRows(x) ? "σ_net = (P/n_r) / ((g − D_h)·t), load along the rows" : stagger(x) ? "σ_net = (P/n_f) / (w_net·t), w_net = min(p − D_h, p − 2D_h + g²/p)" : "σ_net = (P/n_f) / ((p − D_h)·t)",
        { width: net.width, path: net.path, stress: net.stress, straight: net.straight, zigzag: net.zigzag }),
      check("sideEdge", "Side-edge net section", "force", M.Ftu * sideA, strip / 2, ["classical"], "(P/n_f)/2 across (e_side − D_h/2)·t against F_tu",
        { area: sideA, note: "Each ligament beside the edge hole takes half its strip load (tool convention)." }),
      check("interRivet", "Inter-rivet buckling", "stress", sigma > 0 ? bk.sigma : null, sigma, ["classical"], `σ_ir from Euler/Johnson with L = ${sp.sym}, ρ = t/√12, fixity c`,
        { branch: bk.branch, slenderness: bk.slenderness, sigmaE: bk.sigmaE, derived: L.sigmaSheet == null, status: sigma > 0 ? null : "no compressive sheet stress" }),
      check("maxPitch", alongRows(x) ? "Maximum row spacing" : "Maximum pitch", "length", sigma > 0 ? pMax : null, sp.L, ["classical"], `${sp.sym}_max where σ_ir(${sp.sym}_max) = applied sheet stress`,
        { status: sigma > 0 ? null : "no compressive sheet stress", governs: false, note: "A length ratio that restates the inter-rivet buckling condition, so it does not set the governing mode." }),
    ].filter(Boolean);
    const mp = strength.find((c) => c.id === "maxPitch");
    if (mp.ms != null && mp.ms < 0) warnings.push({ path: "geometry." + sp.sym, message: `σ_ir = ${fmt(bk.sigma)} MPa is below the applied sheet stress ${fmt(sigma)} MPa at ${sp.sym} = ${fmt(sp.L)} mm; the maximum ${sp.sym === "p" ? "pitch" : "row spacing"} is ${fmt(pMax)} mm.` });

    const geometric = [
      geomCheck("eEndD", "End distance e_end/D", G.eEnd / F.D, R.eDmin, R.eDnom, ["niu", "nasa"]),
      geomCheck("eSideD", "Side edge distance e_side/D", G.eSide / F.D, R.eDmin, R.eDnom, ["niu", "nasa"]),
      geomCheck("pD", "Pitch p/D", G.p / F.D, R.pDmin, R.pDtyp, ["niu", "nasa"]),
    ];
    if (G.rows > 1) geometric.push(geomCheck("gD", "Row spacing g/D", G.g / F.D, R.gDmin, null, ["niu"]));
    if (stagger(x)) geometric.push(geomCheck("diagD", "Diagonal spacing √(g² + (p/2)²)/D", Math.hypot(G.g, G.p / 2) / F.D, R.pDmin, null, ["niu"]));

    const holes = holeMargins(x, strength);
    return {
      ok: true, errors: [], warnings, inputs: x,
      derived: { n, Pf, strip, spacing: { sym: sp.sym, L: sp.L, direction: L.direction }, sigmaSheet: sigma, sigmaDerived: L.sigmaSheet == null, rho: rho(S.t), patternWidth: patternWidth(x) },
      strength, geometric,
      governing: governing(strength), governingGeom: governing(geometric),
      holes,
    };
  }

  function geomCheck(id, title, actual, min, typical, source) {
    return { id, title, kind: "ratio", actual, minimum: min, typical, ms: actual / min - 1, ratioToTypical: typical ? actual / typical : null, source };
  }

  function governing(list) {
    let best = null;
    for (const c of list) if (c.ms != null && c.governs !== false && (best == null || c.ms < best.ms)) best = c;
    return best ? { id: best.id, title: best.title, ms: best.ms } : null;
  }

  // Every hole with its own governing margin. End-row holes carry bearing and
  // shear-out at e_end; interior rows carry bearing at e/D = g/D; edge-column
  // holes carry the side-edge check; all carry net section and buckling.
  function holeMargins(x, strength) {
    const G = x.geometry;
    const by = Object.fromEntries(strength.map((c) => [c.id, c]));
    const holes = [];
    for (let r = 0; r < G.rows; r++) {
      for (let i = 0; i < G.perRow; i++) {
        const shift = stagger(x) && r % 2 === 1 ? G.p / 2 : 0;
        const list = [["netSection", by.netSection.ms], ["interRivet", by.interRivet.ms]];
        if (r === 0) list.push(["bearing", by.bearing.ms], ["shearOut", by.shearOut.ms]);
        else list.push(["bearingInterior", by.bearingInterior.ms]);
        const y = G.eSide + i * G.p + shift;
        if (Math.min(y, x.sheet.W - y) <= G.eSide * (1 + 1e-9)) list.push(["sideEdge", by.sideEdge.ms]);
        let gov = null;
        for (const [id, m] of list) if (m != null && (gov == null || m < gov.ms)) gov = { id, ms: m };
        const status = gov == null ? "unknown" : gov.ms < 0 ? "fail" : gov.ms < x.rules.marginal ? "marginal" : "pass";
        holes.push({ row: r, index: i, x: G.eEnd + r * G.g, y, governing: gov, status });
      }
    }
    return holes;
  }

  /* ---------- Sweeps for the plots ---------- */

  function sweepED(x, steps = 60, lo = 1.0, hi = 3.0) {
    const pts = [];
    const Pf = x.load.P / (x.geometry.rows * x.geometry.perRow);
    for (let k = 0; k <= steps; k++) {
      const eD = lo + ((hi - lo) * k) / steps;
      const e = eD * x.fastener.D;
      const br = bearing(e, x);
      const plane = e - x.fastener.Dh / 2;
      pts.push({ eD, bearing: ms(br.allowable, Pf), shearOut: plane > 0 ? ms(2 * plane * x.sheet.t * x.material.Fsu, Pf) : null });
    }
    return pts;
  }

  // Sweeps the spacing that sets net section and buckling: p across the rows, g along them.
  function sweepPitch(x, steps = 60) {
    const sp = spacing(x);
    const lo = x.fastener.Dh * 1.05;
    const hi = Math.max(sp.L * 2, x.fastener.D * 10);
    const sigma = sheetStress(x);
    const pts = [];
    for (let k = 0; k <= steps; k++) {
      const p = lo + ((hi - lo) * k) / steps;
      const y = { ...x, geometry: { ...x.geometry, [sp.sym]: p } };
      const net = netSection(y);
      pts.push({ p, netSection: ms(net.allowable, net.applied), interRivet: sigma > 0 ? ms(buckling(p, x).sigma, sigma) : null });
    }
    return pts;
  }

  function sweepSlenderness(x, steps = 80) {
    const hi = Math.max((spacing(x).L / x.sheet.t) * 2, 40);
    const pts = [];
    for (let k = 0; k <= steps; k++) {
      const pt = (hi * k) / steps;
      pts.push({ pt, ...buckling(pt * x.sheet.t, x) });
    }
    return pts;
  }

  /* ---------- Assumptions ---------- */

  const ASSUMPTIONS = [
    "Equal load share: every fastener carries P / (n_r · n_f). Load transfer, fastener flexibility and end-fastener peaking are not modelled.",
    "The checked sheet carries the full fastener load: a single-lap sheet, or the middle plate of a double-shear joint. For an outer plate of a double-shear joint, enter half the load.",
    "Row 0, at e_end from the free end, takes bearing and shear-out at e_end; interior rows take bearing at e/D = g/D. Bearing, shear-out and side edge always take the rows across the load.",
    "Load direction: across the rows (default), the pitch p sets the net-section strip and the inter-rivet buckling length; along the rows, the row spacing g takes both roles (strip g − D_h carrying P/n_r, buckling length g, maximum row spacing).",
    "F_bru is linear between your values at e/D = 1.5 and 2.0, is held at the 2.0 value above 2.0, and is not extrapolated below 1.5.",
    "Net section between holes carries the whole strip load at the end row: P/n_f across the rows, P/n_r along them. Across the rows, staggered rows also try the zig-zag path through one hole of each row (Cochrane s²/4g); along the rows the straight path g − D_h is used.",
    "Side-edge net section: each ligament beside the edge hole takes half of its pitch strip's load, (P/n_f)/2.",
    "Inter-rivet buckling treats the sheet between fasteners as a column of length p (load across the rows) or g (load along the rows), radius of gyration t/√12 and end fixity c, under the compressive sheet stress (entered, or P/(W·t) when left blank).",
    "Single-lap and double-shear joints only: no lugs, eccentric loading or prying; no fatigue, fastener strength, preload or torque.",
  ];

  const FORMULAS = [
    { id: "eD", check: "Edge distance ratio", text: "MS_geom = (e/D) / (e/D)_min − 1", source: ["niu", "nasa"], note: "RP-1228 p. 21 states a 1.5D minimum and a 2D nominal edge distance." },
    { id: "pD", check: "Pitch ratio", text: "MS_geom = (p/D) / (p/D)_min − 1; also p/D ÷ typical", source: ["niu", "nasa"], note: "RP-1228 pp. 21 and 34 state a 4D nominal spacing; the minimum is an unsourced default." },
    { id: "bearing", check: "Bearing", text: "P_br = F_bru(e/D) · D · t", source: ["niu", "user"], note: "Confirm against your copy. F_bru values are yours. End row at e/D = e_end/D; interior rows at e/D = g/D." },
    { id: "shearOut", check: "Shear-out", text: "P_so = 2 · (e_end − D_h/2) · t · F_su", source: ["classical"], note: "Two shear planes. The plane-length convention: confirm against your copy (Niu)." },
    { id: "netSection", check: "Net section", text: "σ_net = (P/n_f) / ((p − D_h) · t) ≤ F_tu", source: ["classical"], note: "Load across the rows. Staggered rows: w_net = min(p − D_h, p − 2D_h + g²/p). Load along the rows: σ_net = (P/n_r) / ((g − D_h) · t)." },
    { id: "sideEdge", check: "Side-edge net section", text: "(P/n_f)/2 / ((e_side − D_h/2) · t) ≤ F_tu", source: ["classical"], note: "" },
    { id: "interRivet", check: "Inter-rivet buckling", text: "σ_E = π²E/(p/(ρ√c))²; Johnson σ = F_cy − F_cy²(p/(ρ√c))²/(4π²E) when σ_E > F_cy/2; ρ = t/√12", source: ["classical", "niu"], note: "Load across the rows; along the rows g replaces p. Fixity c: confirm against your copy." },
    { id: "maxPitch", check: "Maximum pitch", text: "p_max solves σ_ir(p_max) = σ_applied", source: ["classical"], note: "Along the rows, g_max against g. RP-1228 p. 34: spacing above 4D is acceptable only if sealing or inter-rivet buckling is not a problem." },
  ];

  /* ---------- Export and import ---------- */

  function inputsJSON(x, displayUnits = "SI") {
    return { schemaVersion: SCHEMA_VERSION, kind: KIND.inputs, disclaimer: DISCLAIMER, units: { length: "mm", force: "N", stress: "MPa" }, displayUnits, inputs: x };
  }

  function resultsJSON(x, displayUnits = "SI") {
    const r = solve(x);
    return {
      ...inputsJSON(x, displayUnits), kind: KIND.results,
      ok: r.ok, errors: r.errors, warnings: r.warnings,
      results: r.ok ? { derived: r.derived, strength: r.strength, geometric: r.geometric, governing: r.governing, governingGeom: r.governingGeom, holes: r.holes } : null,
      assumptions: ASSUMPTIONS, formulas: FORMULAS, sources: SOURCES,
    };
  }

  // Accepts inputs JSON, results JSON or a test vector; always canonical SI.
  function parseImport(text) {
    let o;
    try { o = typeof text === "string" ? JSON.parse(text) : text; } catch (e) { throw new Error("Not valid JSON: " + e.message); }
    if (!o || typeof o !== "object" || Array.isArray(o)) throw new Error("Expected a JSON object.");
    if (o.kind != null && !Object.values(KIND).includes(o.kind)) throw new Error(`Unknown file kind "${o.kind}".`);
    if (o.schemaVersion != null && o.schemaVersion > SCHEMA_VERSION) throw new Error(`schemaVersion ${o.schemaVersion} is newer than this tool (${SCHEMA_VERSION}).`);
    if (!o.inputs || typeof o.inputs !== "object") throw new Error("The file has no inputs object.");
    const displayUnits = o.displayUnits === "US" ? "US" : "SI";
    const out = { kind: o.kind || KIND.inputs, inputs: normalise(o.inputs), displayUnits };
    if (out.kind === KIND.vector) {
      if (!Array.isArray(o.expected) || !o.expected.length) throw new Error("A test vector needs a non-empty expected array.");
      out.vector = { name: String(o.name || "User test vector"), inputs: out.inputs, expected: o.expected };
    }
    return out;
  }

  // Expected paths name a result field, e.g. "strength.bearing.allowable" or
  // "geometric.pD.ms"; array entries are looked up by id. tol is relative
  // (absolute when the expected value is 0).
  function lookup(result, path) {
    let a = result;
    for (const k of path.split(".")) {
      if (a == null) return undefined;
      a = Array.isArray(a) ? a.find((c) => c.id === k) : a[k];
    }
    return a;
  }

  function runVector(v) {
    const r = solve(normalise(v.inputs));
    return v.expected.map((e, i) => {
      const name = `${v.name}: ${e.path || "#" + i}`;
      if (!r.ok) return { name, pass: false, detail: "inputs rejected: " + r.errors.map((q) => q.message).join(" ") };
      const got = lookup(r, String(e.path));
      const tol = e.tol == null ? 1e-3 : e.tol;
      const pass = typeof got === "number" && typeof e.value === "number" && Math.abs(got - e.value) <= tol * (e.value === 0 ? 1 : Math.abs(e.value));
      return { name, pass, detail: `got ${fmt(got)}, expected ${fmt(e.value)} (±${tol})` };
    });
  }

  function toMarkdown(x, displayUnits = "SI") {
    const r = solve(x);
    const sys = displayUnits;
    const u = (v, kind) => (v == null ? "—" : `${fmt(toDisplay(v, kind, sys))} ${unitSym(kind, sys)}`.trim());
    const m = (v) => (v == null ? "—" : fmt(v));
    const tags = (list) => list.map((t) => (t === "niu" ? "Niu (confirm against your copy)" : TAGS[t].label)).join(", ");
    const L = [];
    L.push("# Fastener edge margin and pitch report", "", `> **${DISCLAIMER}**`, "");
    L.push(`Units shown: ${sys === "US" ? "in, lbf, ksi" : "mm, N, MPa"}. Stored values are canonical SI (mm, N, MPa).`, "");
    L.push("## Inputs", "", "| Input | Value | Source |", "| --- | --- | --- |");
    for (const f of FIELDS) {
      if (f.when && !safeWhen(f, x)) continue;
      const v = get(x, f.path);
      const shown = f.kind === "enum" ? (f.options.find((o) => o[0] === v) || [v, v])[1] : v === null && f.nullable ? "derived from P/(W·t)" : ["length", "force", "stress"].includes(f.kind) ? u(v, f.kind) : m(v);
      const ds = DEFAULT_SOURCES[f.path] || (f.path.startsWith("material.") ? DEFAULT_SOURCES["material.*"] : null);
      L.push(`| ${f.label} | ${shown} | ${[f.tags ? tags(f.tags) : "", ds ? `default: ${TAGS[ds.tag].label}` : ""].filter(Boolean).join("; ") || "—"} |`);
    }
    L.push("");
    if (!r.ok) {
      L.push("## Errors", "", ...r.errors.map((e) => `- ${e.message}`), "");
    } else {
      L.push("## Strength margins", "", "| Check | Allowable | Applied | MS | Source |", "| --- | --- | --- | --- | --- |");
      for (const c of r.strength) L.push(`| ${c.title} | ${c.allowable == null ? c.status || "—" : u(c.allowable, c.kind)} | ${u(c.applied, c.kind)} | ${m(c.ms)} | ${tags(c.source)} |`);
      L.push("", `Load ${r.derived.spacing.direction === "parallel" ? "along" : "across"} the rows: net section, inter-rivet buckling and maximum spacing use ${r.derived.spacing.sym} = ${u(r.derived.spacing.L, "length")}.`);
      L.push("", `Governing strength mode: **${r.governing ? `${r.governing.title}, MS = ${fmt(r.governing.ms)}` : "none evaluated"}**.`, "");
      L.push("## Geometric margins", "", "Meeting a geometry rule is not the same as passing strength.", "", "| Check | Actual | Minimum | MS_geom | Actual ÷ typical | Source |", "| --- | --- | --- | --- | --- | --- |");
      for (const c of r.geometric) L.push(`| ${c.title} | ${m(c.actual)} | ${m(c.minimum)} | ${m(c.ms)} | ${m(c.ratioToTypical)} | ${tags(c.source)} |`);
      L.push("", `Governing geometric rule: **${r.governingGeom.title}, MS_geom = ${fmt(r.governingGeom.ms)}**.`, "");
    }
    L.push("## Warnings", "", ...(r.warnings.length ? r.warnings.map((w) => `- ${w.message}`) : ["- None."]), "");
    L.push("## Formulas and sources", "", ...FORMULAS.map((f) => `- **${f.check}** — \`${f.text}\` — ${tags(f.source)}${f.note ? `. ${f.note}` : ""}`), "");
    L.push(...SOURCES.map((s) => `- ${s.cite}${s.states.length ? " States: " + s.states.join(" ") : ""}`), "");
    L.push("Defaults tagged *unsourced default* are placeholders, not book values.", "");
    L.push("## Assumptions", "", ...ASSUMPTIONS.map((a) => `- ${a}`), "");
    L.push("---", "", `*${DISCLAIMER}*`, "");
    return L.join("\n");
  }

  /* ---------- Self-tests ---------- */

  // Hand calculation for the example joint, worked by hand:
  //   P_f = 10000/10 = 1000 N; bearing e/D = 9.6/4.8 = 2.0 → 750·4.8·1.6 = 5760 N
  //   interior bearing g/D = 19.2/4.8 = 4.0 → held at 750 → 5760 N
  //   shear-out 2·(9.6 − 2.45)·1.6·250 = 5720 N
  //   net section (24 − 4.9)·1.6·400 = 12224 N against 10000/5 = 2000 N
  //   side edge (9.6 − 2.45)·1.6·400 = 4576 N against 2000/2 = 1000 N
  //   σ = 10000/(115.2·1.6) = 54.253472… MPa; L/ρ = 24·√12/1.6 = 51.9615…
  //   σ_E = π²·70000/2700 = 255.88 > 150 → Johnson 300 − 300²·2700/(4π²·70000) = 212.0677… MPa
  const HAND = [
    ["strength.bearing.allowable", 5760], ["strength.bearingInterior.allowable", 5760], ["strength.shearOut.allowable", 5720],
    ["strength.netSection.allowable", 12224], ["strength.netSection.applied", 2000],
    ["strength.sideEdge.allowable", 4576], ["strength.sideEdge.applied", 1000],
    ["derived.sigmaSheet", 10000 / (115.2 * 1.6)],
    ["strength.interRivet.allowable", 300 - (300 * 300 * 2700) / (4 * Math.PI * Math.PI * 70000)],
    ["geometric.eEndD.ms", 2 / 1.5 - 1], ["geometric.pD.ms", 5 / 3 - 1],
  ];

  function selfTests(vectors = []) {
    const results = [];
    const test = (name, pass, detail = "") => results.push({ name, pass: !!pass, detail });
    const close = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));

    const x = example();
    const r = solve(x);
    test("example joint solves without errors", r.ok, r.ok ? "" : r.errors.map((e) => e.message).join(" "));
    for (const [path, want] of HAND) {
      const got = r.ok ? lookup(r, path) : NaN;
      test(`hand calculation: ${path}`, close(got, want), `got ${fmt(got)}, expected ${fmt(want)}`);
    }
    const z = { ...x, geometry: { ...x.geometry, pattern: "staggered", g: 8 }, sheet: { ...x.sheet, W: 127.2 } };
    const rz = solve(z);
    test("staggered net section takes the zig-zag path when g²/p < D_h", rz.ok && close(lookup(rz, "strength.netSection.width"), 24 - 9.8 + 64 / 24), rz.ok ? `w_net = ${fmt(lookup(rz, "strength.netSection.width"))}` : "");

    for (const [eD, want] of [[1.5, x.material.Fbru15], [2.0, x.material.Fbru20]]) {
      const got = fbru(eD, x.material.Fbru15, x.material.Fbru20);
      test(`bearing interpolation reproduces F_bru at e/D = ${eD} exactly`, got === want, `got ${got}, expected ${want}`);
    }
    test("bearing interpolation is linear at e/D = 1.75", close(fbru(1.75, 600, 750), 675), `got ${fbru(1.75, 600, 750)}`);
    test("bearing is not extrapolated below e/D = 1.5", fbru(1.49, 600, 750) === null);
    test("bearing holds the e/D = 2.0 value above 2.0", fbru(2.6, 600, 750) === 750);

    for (const kind of ["length", "force", "stress"]) {
      const v = 123.456;
      const back = fromDisplay(toDisplay(v, kind, "US"), kind, "US");
      test(`SI → US → SI round trip (${kind})`, close(back, v, 1e-12), `${v} → ${fmt(toDisplay(v, kind, "US"))} ${unitSym(kind, "US")} → ${back}`);
    }
    test("1 in = 25.4 mm, 1 ksi = 6.894757 MPa, 1 lbf = 4.448222 N", toDisplay(25.4, "length", "US") === 1 && close(fromDisplay(1, "stress", "US"), 6.89475729316836) && close(fromDisplay(1, "force", "US"), 4.4482216152605));
    const trip = convertInputs(convertInputs(x, "US", "toDisplay"), "US", "fromDisplay");
    test("whole input set round-trips through US display units", FIELDS.every((f) => { const a = get(trip, f.path), b = get(x, f.path); return typeof b === "number" ? close(a, b, 1e-12) : a === b; }));
    const back = parseImport(JSON.stringify(inputsJSON(x, "US")));
    test("inputs JSON export and import round-trip in canonical SI", JSON.stringify(back.inputs) === JSON.stringify(x) && back.displayUnits === "US");

    const E = 70000, Fcy = 300;
    const euler = columnStrength(E, Fcy, 150, 1);
    test("column function, Euler branch: σ = π²E/(L/ρ)²", euler.branch === "euler" && close(euler.sigma, (Math.PI * Math.PI * E) / (150 * 150)), `σ = ${fmt(euler.sigma)} MPa`);
    const johnson = columnStrength(E, Fcy, 40, 1);
    test("column function, Johnson branch: σ = F_cy − F_cy²(L/ρ)²/(4π²E)", johnson.branch === "johnson" && close(johnson.sigma, Fcy - (Fcy * Fcy * 1600) / (4 * Math.PI * Math.PI * E)), `σ = ${fmt(johnson.sigma)} MPa`);
    const lt = Math.PI * Math.sqrt((2 * E) / Fcy);
    test("column function is continuous at σ_E = F_cy/2", close(columnStrength(E, Fcy, lt * (1 - 1e-12), 1).sigma, Fcy / 2, 1e-9) && close(columnStrength(E, Fcy, lt * (1 + 1e-12), 1).sigma, Fcy / 2, 1e-9));
    test("fixity c scales the effective length by 1/√c", close(columnStrength(E, Fcy, 300, 4).sigma, columnStrength(E, Fcy, 150, 1).sigma));
    const ib = buckling(x.geometry.p, x);
    const direct = columnStrength(E, Fcy, x.geometry.p / (x.sheet.t / Math.sqrt(12)), x.buckling.c);
    test("inter-rivet buckling uses the column function with L = p and ρ = t/√12", close(ib.sigma, direct.sigma), `σ_ir = ${fmt(ib.sigma)} MPa`);
    for (const s of [60, 200]) {
      const L = slendernessFor(E, Fcy, s, 1);
      test(`maximum pitch inverts the column function (${s < Fcy / 2 ? "Euler" : "Johnson"})`, close(columnStrength(E, Fcy, L, 1).sigma, s, 1e-9), `L/ρ = ${fmt(L)}`);
    }

    for (const v of vectors) results.push(...runVector(v));
    return results;
  }

  function fmt(x) {
    if (x == null || !Number.isFinite(x)) return String(x);
    const a = Math.abs(x);
    if (a !== 0 && (a >= 1e6 || a < 1e-3)) return x.toExponential(3);
    return String(+x.toPrecision(4));
  }

  return {
    SCHEMA_VERSION, KIND, DISCLAIMER, UNITS, TAGS, SOURCES, FIELDS, FIELD, DEFAULT_SOURCES, ASSUMPTIONS, FORMULAS, HAND,
    unitSym, toDisplay, fromDisplay, convertInputs, example, normalise, validate, solve, fbru, columnStrength, slendernessFor,
    netWidth, maxPitch, sheetStress, spacing, sweepED, sweepPitch, sweepSlenderness, inputsJSON, resultsJSON, parseImport, lookup, runVector,
    toMarkdown, selfTests, get, set, fmt,
  };
});

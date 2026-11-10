source: https://arxiv.org/pdf/2508.04844
slogan: Higher Green's functions are single-valued periods of a motive, so the Gross-Zagier logarithms become a question about extensions of ℚ(−m−1) by ℚ(−m).
basis: the introduction and the main theorem statements

## Before you start

Seventy pages with motives, stacks and biextensions in the title can bring a quiet shame: "I do not have the background for this." That feeling is allowed. You do not need to remove it before opening the file. The introduction starts from log |j(z) − j(w)|<sup>2</sup>, which you can hold in your hand. If you want to see why a logarithm of an algebraic number has a geometric reason, this is a good place to look. Read for the pleasure of that one picture. Finishing is optional.

## The story

Take two points z, w in the upper half-plane. The function log |j(z) − j(w)|<sup>2</sup> is the logarithm of an algebraic number when z and w have complex multiplication (CM). Gross and Zagier conjectured the same for "higher" Green's functions, after applying a suitable combination of Hecke operators. These functions are sums of Legendre functions over a group Γ. Nothing in that definition looks like geometry. Analytic methods settled the case Γ<sub>0</sub>(N) (Li, and Bruinier, Li and Yang). Brown and Fonseca give a geometric reason. They build matrix-valued Green's functions and show they are single-valued periods of a relative cohomology group of a modular curve with coefficients. For CM points, Hecke operators and the CM action cut that group down to an extension of ℚ(−m−1) by ℚ(−m). Such extensions are expected to be twists of Kummer extensions, whose single-valued period is log |x|<sup>2</sup>.

## Main definitions

**Higher Green's function.** For a finite-index Γ ≤ SL<sub>2</sub>(ℤ) and Re(s) > 1, G<sub>Γ,s</sub>(z, w) = −2 Σ<sub>γ∈Γ</sub> Q<sub>s−1</sub>(1 + |z − γw|<sup>2</sup> / (2 Im(z) Im(γw))), where Q<sub>s−1</sub> is the Legendre function of the second kind. It is Γ × Γ-invariant, an eigenfunction of the hyperbolic Laplacian in each variable with eigenvalue s(s−1), and has a logarithmic singularity where z ∈ Γw.

**Matrix-valued Green's function.** For each integer k ≥ 1, a Γ × Γ-invariant function G<sub>Γ,k</sub> with values in real (k+1) × (k+1) matrices, defined by an explicit generating series (Definition 4.1).
- k = 2m even: the central entry is proportional to G<sub>Γ,m+1</sub>, and Maass raising and lowering operators give the other entries.
- k odd: the entries appear to be new.

**Single-valued period.** Take an object with Betti and de Rham cohomology and a comparison isomorphism. Transport complex conjugation from the Betti side to the de Rham side. The matrix of the resulting involution in a de Rham basis is the single-valued period matrix.

**Kummer extension.** The object K<sub>x</sub> = H<sup>1</sup>(ℙ<sup>1</sup> ∖ {0, ∞}, {1, x}). It sits between ℚ(0) and ℚ(−1) in a short exact sequence, and its single-valued period is log |x|<sup>2</sup>.

## Main results

**Theorem (Green's functions are periods; Theorem 1.1).** Let Y<sub>Γ</sub> be the modular curve as a stack, and V<sub>k</sub> the k-th symmetric power of the rational H<sup>1</sup> of the universal elliptic curve. For all but finitely many z, w, the matrix G<sub>Γ,k</sub>(z, w) is a block of the single-valued period matrix of M<sub>z,w</sub> = H<sup>1</sup><sub>cusp</sub>(Y<sub>Γ</sub> ∖ {w}, {z}; V<sub>k</sub>) in an explicit basis.
- Step 1: meromorphic modular forms with poles along Γw, built from rational Poincaré series, represent the de Rham classes.
- Step 2: the Green's matrix is a harmonic lift of these forms, which gives the conjugation.

**Theorem (the Gross-Zagier extension; Theorem 1.3).** Let z, w be CM points and k = 2m. The Hecke combination T and the CM action on the two elliptic curves isolate a subquotient of M<sub>z,w</sub> that is an extension of ℚ(−m−1) by ℚ(−m) in a category of realisations. Its single-valued period is proportional to the higher Green's function value at (z, w).

**Theorem (conditional proof in level 1; Theorem 1.5).** Let Γ = SL<sub>2</sub>(ℤ). Suppose the Hecke correspondence T acts by zero on the motive of cusp forms, built from the moduli stack of genus one curves with n marked points. Then for z, w with CM defined over a number field K, the extension above is Kummer in the triangulated category DM(K), and the Gross-Zagier conjecture holds.
- Step 1: Theorem 1.4 realises M<sub>z,w</sub> as a motive, using the compactified moduli stack with n marked points.
- Step 2: every extension of ℚ(−1) by ℚ(0) in DM(K) is Kummer, with no conjecture needed.

**Theorem (weight 4, level 1; Theorem 1.6).** The motive of the compactified moduli stack of genus one curves with 3 marked points is mixed Tate. So the cusp form motive for weight 4 vanishes, and the Gross-Zagier conjecture holds in weight 4 and level 1 for all CM points z, w.

## Note, then ignore

- Elliptic points. At points with extra stabiliser the rank of M<sub>z,w</sub> can drop, and the theorem needs a variant for a submatrix. Safe to skip on a first reading.
- Conjecture 1. The missing input is that a Hecke operator killing cusp forms of a given weight also kills their motive. It does not depend on z or w. Note that the general result is conditional on it, then skip the details.
- Phantom motives. When there are no cusp forms, one must still show the motive itself is zero and not a non-trivial motive with zero Betti realisation. Safe to skip.
- Two kinds of Poincaré series. The paper uses "rational" Poincaré series, with no exponential factor, unlike much of the modern literature. Safe to skip.
- Index shifts. Weight 2m + 2, parameter s = m + 1 and symmetric power k = 2m all describe the same case. Skip the bookkeeping at first.

## One next step

Open the paper and read equations (1.4) and (1.5) on page 3, with the paragraph between them. They show the Kummer extension next to its modular generalisation.

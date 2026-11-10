source: https://arxiv.org/pdf/math/0305090
slogan: Periods of a degenerating family have a limit depending on a tangent vector, and for the thrice punctured line the limits are multiple zeta values.
basis: the introduction and the main theorem statements

## Before you start

This is a 27-page expository paper, written for a birthday volume, and it reviews Hodge theory from the start. The feeling it may raise is worry that Schmid's theorems behind it are too hard to ever own. That is fine to feel. The paper asks you to own nothing. If you want to see how ζ(2) and its cousins fall out of a degeneration, Section 6 shows it in a few pages. Read for the picture. Finishing matters less.

## The story

The periods of a smooth projective variety carry geometry. For a curve they determine it. When a family X<sub>t</sub> degenerates as t → 0, periods grow like powers of log t, and monodromy mixes the cycles. So there is no naive limit. Schmid found the right one. Untwist the monodromy by multiplying flat sections by t<sup>−N</sup>, where N is the logarithm of monodromy. Then the Hodge filtration extends across t = 0. The limit is a mixed Hodge structure, whose weight filtration comes from N alone. Hain explains this, then runs the same idea on a fundamental group. Move the base point of ℙ<sup>1</sup> minus 0, 1, ∞ into the puncture 0 along a tangent vector. The divergent iterated integrals regularise, and what is left are multiple zeta values.

## Main definitions

**Polarised variation of Hodge structure.** Over a complex manifold B: a local system 𝕍 of finitely generated abelian groups, a flag of holomorphic subbundles F<sup>p</sup> of 𝕍 ⊗ O<sub>B</sub> that gives a Hodge structure of weight k on each fibre, and a flat bilinear form that polarises each fibre.
- Griffiths condition: the flat connection sends F<sup>p</sup> into F<sup>p−1</sup> ⊗ Ω<sup>1</sup>.

**Deligne's canonical extension.** Over the punctured disc, with unipotent monodromy T, set N = log T / 2πi. For multivalued flat sections φ<sub>j</sub>, the sections e<sub>j</sub>(t) = φ<sub>j</sub>(t)t<sup>−N</sup> are single valued. They frame an extension of the bundle to the whole disc. In this frame the connection is d − N dt/t.

**Monodromy weight filtration.** For a nilpotent N on a vector space V, the unique increasing filtration W(N) with N W<sub>n</sub> ⊂ W<sub>n−2</sub> such that N<sup>k</sup> maps Gr<sub>k</sub> isomorphically to Gr<sub>−k</sub>. For a variation of weight k one shifts the index by k.

**Multiple zeta numbers.** For integers n<sub>1</sub>, …, n<sub>r</sub> ≥ 1 with n<sub>r</sub> > 1, ζ(n<sub>1</sub>, …, n<sub>r</sub>) is the sum over 0 &lt; k<sub>1</sub> &lt; … &lt; k<sub>r</sub> of 1/(k<sub>1</sub><sup>n<sub>1</sub></sup> … k<sub>r</sub><sup>n<sub>r</sub></sup>). Hain calls them mixed zeta numbers. Their ℚ-span MZN is an algebra, and MZN<sub>ℂ</sub> = MZN ⊕ iπ·MZN.

## Main results

**Theorem (Nilpotent Orbit Theorem, Schmid; Theorems 7 and 9).** Let 𝕍 be a polarised variation of Hodge structure over the punctured disc with unipotent monodromy. The Hodge bundles F<sup>p</sup> extend to holomorphic subbundles of the canonical extension. Let V<sub>0</sub> be the fibre at 0 with the limit filtration F<sub>0</sub>. The "nilpotent orbit", with fibre (V<sub>0</sub>, F<sub>0</sub>, lattice t<sup>N</sup>V<sub>ℤ</sub>) over t, is a variation of Hodge structure for small |t| with the same Hodge numbers. It differs from the original by a holomorphic g(t) with g(0) = 1.
- Consequence: the lattice depends on the parameter t only through the tangent vector ∂/∂t (Lemma 8).

**Theorem (limit mixed Hodge structure, Schmid; Theorem 10).** For each t ∈ ℂ<sup>×</sup>, the triple (t<sup>N</sup>V<sub>ℤ</sub>, F<sub>0</sub>, W), with W the shifted monodromy weight filtration, is a mixed Hodge structure. N is defined over ℚ and is a morphism of mixed Hodge structures of type (−1, −1).
- Source: this follows from the SL<sub>2</sub>-orbit theorem, which the paper states only through its consequences.
- Companion (Theorem 13): a flat section lies in W<sub>m</sub> exactly when its squared Hodge norm is O((log 1/|t|)<sup>m−k</sup>) along rays.

**Theorem (periods at the tangential base point; Theorem 19).** The space of periods of the limit mixed Hodge structure on the completed group ring of π<sub>1</sub>(ℙ<sup>1</sup> − {0, 1, ∞}, ∂/∂t at 0) is exactly MZN<sub>ℂ</sub>. Hain calls this a folk theorem and sketches the proof.
- Step 1: the generating series of iterated integrals of dz/z and dz/(1 − z) along [0, 1], regularised at both ends, has multiple zeta numbers as coefficients.
- Step 2: loops around 0 and 1 contribute exp(±2πiX), which brings in powers of iπ.

## Note, then ignore

- Quasi-unipotent monodromy. In general the eigenvalues of T are roots of unity. Pulling back along t ↦ t<sup>e</sup> makes T unipotent, so the paper assumes this. Safe to skip on a first reading.
- One variable only. Schmid and Cattani–Kaplan–Schmid treat several variables, which is harder. The paper stays on the disc. Safe to skip.
- Ordering convention. Here the sum runs over 0 &lt; k<sub>1</sub> &lt; … &lt; k<sub>r</sub> and the last exponent must exceed 1. Other authors reverse the order. Safe to skip.
- Limits of mixed Hodge structures. The fundamental group carries a mixed, not pure, structure, so Section 6 needs a theory of limits beyond Schmid's. Hain cites it and moves on. Safe to skip.
- An open question. Section 7 asks whether every period of a mixed Tate motive over ℤ lies in MZN<sub>ℂ</sub>. The paper marks it as unresolved at the time. Safe to skip.

## One next step

Open the paper at Section 6.3 and read only Definition 18 and the iterated integral formula for ζ(n<sub>1</sub>, …, n<sub>r</sub>) that follows it.

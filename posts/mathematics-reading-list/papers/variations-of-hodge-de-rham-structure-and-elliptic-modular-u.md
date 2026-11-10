source: https://arxiv.org/pdf/math/9709234
slogan: Extensions built from the elliptic polylogarithm come from genuine units on the base, which proves the first case of the elliptic Zagier conjecture.
basis: the abstract and introduction

## Before you start

The paper is 36 pages, but it stands on three earlier works by the same author and opens with "motivic folklore". The feeling to expect is unease at walking into the middle of a conversation. That is a fair reaction. The paper says its Section 2 can be read alone. If you want to see how a Hodge-theoretic object produces an actual function, such as a Siegel unit, this is a short example. Go for the parts you like.

## The story

Folklore says that extensions of ℚ(0) by ℚ(1) among motivic sheaves on a scheme B are the units on B, tensored with ℚ. Motivic sheaves are not available. In realisations the group of extensions is far larger than the units. In earlier work Wildeshaus used the elliptic polylogarithm on an elliptic curve E over B to build a map ϕ from certain formal sums of sections to such extensions. Do they come from units? The key is a rigidity statement. Whether an extension comes from a unit can be tested after pulling back along quite general maps. This leaves three simple kinds of formal sum. For those, he computes the extension as an explicit holomorphic function built from the Siegel function, and shows that it is defined over the base field.

## Main definitions

**Variation of Hodge–de Rham structure.** Let X be smooth, separated and of finite type over a field k that embeds in ℂ. The data are a flat vector bundle on X with regular connection and weight and Hodge filtrations, and for each embedding σ of k in ℂ an admissible variation of mixed Hodge structure on X<sub>σ</sub>(ℂ). Comparison isomorphisms, conjugation involutions and polarisations tie them together.
- It is the category of mixed realisations with the ℓ-adic parts left out.

**The map κ<sub>X</sub>.** It sends a unit g on X to an extension of ℚ(0) by ℚ(1) of rank two. The connection sends the first basis vector e<sub>0</sub> to (dg/g) times the second, and the rational structure involves log g. The map is injective.
- Over ℂ, for variations of mixed Hodge structure alone, the analogous map is an isomorphism (2.3).

**The group ker(d).** Let E be an elliptic curve over B. Let L(E) be the ℚ-vector space with basis {s}, for sections s of E away from zero. Define d : L(E) → E(B) ⊗ E(B) ⊗ ℚ by {s} ↦ s ⊗ s.

**Siegel function.** A function Si(z, τ) on ℂ times the upper half-plane, off the lattice points. It is an explicit exponential factor times (1 − q<sub>z</sub>) Π<sub>n≥1</sub> (1 − q<sub>τ</sub><sup>n</sup>q<sub>z</sub>)(1 − q<sub>τ</sub><sup>n</sup>/q<sub>z</sub>), with q<sub>z</sub> = e<sup>2πiz</sup> and q<sub>τ</sub> = e<sup>2πiτ</sup>.

## Main results

**Theorem (main result; Theorem 3.2).** Let B be smooth, separated and of finite type over a field of characteristic 0, and E an elliptic curve over B. There is a homomorphism ϕ from ker(d) to the units on B tensored with ℚ. It is functorial in B. It is compatible with norms along isogenies whose kernel consists of sections. If B is the spectrum of a finite extension K of ℚ<sub>p</sub> or of ℝ, then log |ϕ(Σ q<sub>α</sub>{s<sub>α</sub>})| = Σ q<sub>α</sub>λ<sub>K</sub>(s<sub>α</sub>), where λ<sub>K</sub> is the local Néron height. The paper calls this the elliptic Zagier conjecture at the lowest step, k = 2.
- Step 1: after shrinking B, every element of ker(d) is a combination of {s} with s torsion, {s} − {s − t} with t torsion, and {s + t} + {s − t} − 2{s} − 2{t}.
- Step 2: for these three kinds, the function is explicit and descends to the base field. These are the elliptic modular units of the zeroth, first and second kind.

**Theorem (pullback; Theorem 2.4).** Let f : X → Y be a morphism of smooth, separated k-schemes of finite type that induces an isomorphism on the schemes of geometrically connected components. Then an extension of ℚ(0) by ℚ(1) on Y lies in the image of κ<sub>Y</sub> if and only if its pullback lies in the image of κ<sub>X</sub>.
- The cokernel of κ depends only on the scheme of connected components. The snake lemma finishes the proof.

**Theorem (torsion sections; Section 4).** For a torsion section s, the Hodge extension attached to ϕ({s}) is the function 1/Si composed with s and the map to the modular curve. So torsion sections give the classical Siegel units.

## Note, then ignore

- Tensoring with ℚ. Units appear only up to roots and torsion throughout. This is why powers such as the 12n-th power of a Siegel function show up. Safe to skip.
- Three proofs. The author gives two other proofs elsewhere, one with the Poincaré line bundle and one geometric. This one is sheaf-theoretic. Safe to skip.
- The real coordinates r<sub>1</sub>, r<sub>2</sub>. The exponential factor in Si is written with them and with the Bernoulli polynomial B<sub>2</sub>. It fixes the transformation law under the lattice. Safe to skip on a first reading.
- The superscript s. It marks a smooth, sheafified variant of the category. Safe to skip.
- Kato's Euler systems. The introduction notes that units of the first kind occur there. It is a pointer, not part of the argument. Safe to skip.

## One next step

Open the paper at page 2 and read only the three numbered steps of the proof outline in the Introduction.

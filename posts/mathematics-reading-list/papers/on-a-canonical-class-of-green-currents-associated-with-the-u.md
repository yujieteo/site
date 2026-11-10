source: https://people.maths.ox.ac.uk/rossler/mypage/pdf-files/beamer-conf-bismut.pdf
slogan: Siegel functions give units because they are Green functions for the origin of an elliptic curve, and every abelian scheme has such a Green current.
basis: the full text

## Before you start

These are 23 conference slides, with no proofs and a lot of hats on symbols: arithmetic Chow groups, Poincaré bundles, analytic torsion forms. The likely feeling is shame at not knowing the background behind each slide. You are allowed to feel that. The speaker was addressing specialists. If you want to know why elliptic units are units, the first ten slides answer that with one formula. Enjoy those. The rest can wait.

## The story

Cyclotomic units come from torsion points of the multiplicative group. Elliptic units come from torsion points of an elliptic curve, as values of a Siegel function. Why are those values units? The Néron-Tate height almost explains it. Tate wrote the height as a sum of local terms, and the archimedean term is the logarithm of the Siegel function. But the height is a single real number, an average over all places, so it cannot detect a unit. Mazur and Tate refined the height so that it takes values in a larger group that remembers every place. At a torsion point the refined height is torsion, and that forces the Siegel values to be units. Maillot and Rössler ask for the same picture on any abelian scheme. Arakelov theory supplies it: the Siegel function becomes a canonical Green current for the zero section.

## Main definitions

**Siegel function.** For E = ℂ/(ℤ + ℤτ), the function z ↦ e<sup>−z·η(z)/2</sup> σ(z) Δ(τ)<sup>1/12</sup>, where σ is the Weierstrass sigma function, η(z) is the quasi-period and Δ is the discriminant. Its value at a torsion point of composite order m is the elliptic unit of that point, when E has potential good reduction.

**Arakelov class group.** For a number field K, the group Ĉl(O<sub>K</sub>) is the sum of one copy of ℤ for each finite place and one copy of ℝ for each archimedean place, modulo the elements of K<sup>×</sup>. It sits in an exact sequence O<sub>K</sub><sup>×</sup> → ℝ<sup>(archimedean places)</sup> → Ĉl(O<sub>K</sub>) → Cl(O<sub>K</sub>) → 0.
- The first map is −2 times the Dirichlet regulator.
- There is a map Ĉl(O<sub>K</sub>) → Ĉl(ℤ) = ℝ.

**Green current.** For a cycle Z on a complex manifold, a current g<sub>Z</sub> such that (i/2π)∂∂̄g<sub>Z</sub> + δ<sub>Z</sub> is smooth, where δ<sub>Z</sub> is the Dirac current of Z. Pairs (Z, g<sub>Z</sub>) generate the arithmetic Chow groups ĈH of Gillet and Soulé, and ĈH<sup>1</sup>(Spec O<sub>K</sub>) = Ĉl(O<sub>K</sub>).

## Main results

**Theorem (Mazur-Tate, as recalled on the slides).** Let E be an elliptic curve with a Weierstrass model y<sup>2</sup> = x<sup>3</sup> + Ax + B over O<sub>K</sub>, and P a K-point that reduces into the smooth locus. There is a refined height MT(P) ∈ Ĉl(O<sub>K</sub>) with MT(mP) = m<sup>2</sup>·MT(P). It maps to [K : ℚ] times the Néron-Tate height in ℝ.
- Finite places: the component is a term from v(16(4A<sup>3</sup> + 27B<sup>2</sup>)) minus half of v(denominator of x(P)).
- Archimedean places: the component is −log|Siegel function at P|<sup>2</sup>.

**Corollary (elliptic units).** Let E have good reduction everywhere and let P be a K-rational torsion point of composite order m. Then m<sup>2</sup> times the archimedean part lies in the image of the regulator, so the Siegel value at P is a unit at each archimedean place.

**Theorem (existence and uniqueness of g<sub>A</sub>; Maillot-Rössler).** Let S be regular and of finite type over O<sub>K</sub>, and A → S an abelian scheme of relative dimension g with dual A<sup>∨</sup> and Poincaré bundle P. There is a real, conjugation invariant current g<sub>A</sub> of type (g − 1, g − 1) on A<sup>∨</sup>(ℂ) that is a Green current for the zero section, is fixed by pull-back along multiplication by n for all n ≥ 2, and whose arithmetic cycle class equals (−1)<sup>g</sup> times the degree g part of the push-forward of the arithmetic Chern character of P. These properties fix it up to ∂ and ∂̄ exact currents.
- Case g = 1: g<sub>A</sub> is −log|Siegel function|<sup>2</sup>, and pulling the class back along a section gives the Mazur-Tate height.
- Torsion sections that miss the zero section: the pull-back of g<sub>A</sub> lies, rationally, in the image of a regulator from motivic cohomology of S.

**Theorem (spectral interpretation and denominators).** Away from the zero section, g<sub>A</sub> equals a Todd class times the Bismut-Köhler higher analytic torsion form T of the Poincaré bundle. For an n-torsion section σ that misses the zero section, 2g·n·N<sub>2g</sub>·σ<sup>∗</sup>T lies in the image of the regulator from K<sub>1</sub>(S), where N<sub>2g</sub> is twice a Bernoulli denominator.
- Case g = 1: this is the second Kronecker limit formula, and 48·σ<sup>∗</sup>T is a regulator of units.

## Note, then ignore

- A versus its dual. The slides write both g<sub>A</sub> and g<sub>A∨</sub> for the same current, which lives on the dual abelian scheme. It is only notation. Safe to skip.
- The word "composite". Torsion points of prime power order give numbers that fail to be units at one prime, as with 1 − ζ. That is why m is composite. Skip on a first reading.
- Rational coefficients. The identities hold in arithmetic Chow groups tensored with ℚ, because push-forwards introduce denominators. This does not change the story.
- Choice of Kähler form. The torsion form depends on a form λ, but its degree g − 1 part does not. Safe to ignore.
- Base of dimension at most 1. There the current is the harmonic Green current and most results are due to Künnemann. Note it and move on.

## One next step

Open the slides and read only the slide "Interpretation of the formula of Mazur and Tate". It has three bullets, one for each term of the height.

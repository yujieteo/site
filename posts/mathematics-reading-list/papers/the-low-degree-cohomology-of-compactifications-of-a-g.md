source: https://otaibi.perso.math.cnrs.fr/oddcohAg.pdf
slogan: Below degree 24, compactified moduli of abelian varieties have cohomology built from a short, known list of level one Galois representations.
basis: the introduction and the main theorem statements

## Before you start

The introduction names Arthur–Langlands parameters, spin groups and intersection cohomology within three pages. The likely feeling is shame at missing background, as if you had walked into the wrong seminar. That reaction is natural. Let it sit. The main theorems need none of that machinery to read: a table with seven entries says when a point count is a polynomial in q. If you like the idea that a moduli space knows about Δ, read the theorems for pleasure.

## The story

A smooth proper stack over ℤ has cohomology that is unramified at every prime. Conjecturally such Galois representations come from level one automorphic representations, and Chenevier and Lannes classified those of motivic weight at most 22: there are 11 (Theorem 1.1 in the paper). So low-degree cohomology of such a stack can only use those 11 building blocks. Moduli of stable curves were tested this way. The next case is A<sub>g</sub>, the moduli of principally polarised abelian varieties, but A<sub>g</sub> is not proper and has many compactifications. The idea is to start with the singular Satake compactification, whose intersection cohomology is directly described by automorphic representations. Smooth toroidal compactifications are then cut into strata whose cohomology reduces to the Satake case.

## Main definitions

**Satake compactification.** A proper stack over ℤ containing A<sub>g</sub> as a dense open substack. It is stratified by A<sub>k</sub> for 0 ≤ k ≤ g and is highly singular, so the paper studies its intersection cohomology IH.
- With coefficients: IH<sup>k</sup> of V<sub>λ</sub> means the cohomology of the intermediate extension of V<sub>λ</sub> from A<sub>g</sub>.

**Local system V<sub>λ</sub>.** For a dominant weight λ = (λ<sub>1</sub> ≥ … ≥ λ<sub>g</sub> ≥ 0) of Sp<sub>2g</sub>, the lisse ℓ-adic sheaf on A<sub>g</sub> attached to the irreducible representation of highest weight λ. It has weight |λ| = λ<sub>1</sub> + … + λ<sub>g</sub>.

**Toroidal compactification.** A compactification of A<sub>g</sub>, or of the s-fold fibre power X<sub>g,s</sub> of the universal abelian variety, that depends on a choice of admissible cone decomposition. Faltings and Chai built these over ℤ.
- Smoothness: if the cone decomposition is simplicial, the compactification is smooth as a stack over ℤ.

**Tate.** A Galois representation is Tate when it is built only from Tate twists of the trivial representation. For a nonsingular toroidal compactification, the point count over 𝔽<sub>q</sub> is a polynomial in q exactly when the cohomology is Tate.

## Main results

**Theorem (Satake, constant coefficients; Theorem 1.3).** The groups IH<sup>k</sup> of the Satake compactification of A<sub>g</sub> with ℚ<sub>ℓ</sub> coefficients are computed for all g ≥ 1 and all k ≤ 23. They are pure of Tate type, with one exception: for (g, k) = (7, 22) the group is ℚ<sub>ℓ</sub>(−11)<sup>⊕10</sup> ⊕ Sym<sup>2</sup> of the Galois representation of Δ. In particular IH<sup>k</sup> vanishes for odd k ≤ 23.

**Theorem (Satake, twisted coefficients; Theorem 1.4).** For all but finitely many pairs (g, λ), in the range k + |λ| ≤ 23, the group IH<sup>k</sup> with coefficients in V<sub>λ</sub> is H<sup>k</sup> of the Lagrangian Grassmannian if λ = 0, and zero otherwise. The exceptions are tabulated, and their semisimplifications use only Tate twists of the Chenevier–Lannes representations and four more in weight 23.
- Step 1: decompose the intersection cohomology into pieces indexed by Arthur–Langlands parameters, by earlier work of Taïbi.
- Step 2: list the parameters that can occur in low weight, using the classification of level one representations.

**Theorem (toroidal; Theorem 1.7).** For k ≤ 23 and any nonsingular toroidal compactification of X<sub>g,s</sub>, the semisimplification of H<sup>k</sup> is a direct sum of Tate twists of irreducible constituents of the representations in Theorem 1.4.
- Step 1: stratify the compactification by cones of the cone decomposition.
- Step 2: express the cohomology of each stratum through intersection cohomology of Satake compactifications with twisted coefficients.

**Theorem (when is it Tate; Theorems 1.9 and 1.10).** Put c(g) = 10, 7, 6, 3, 2, 1 for g = 1, …, 6 and c(g) = 0 for g ≥ 7. Then the cohomology of X<sub>g,s</sub> is not Tate if and only if s ≥ c(g). The same holds for every nonsingular toroidal compactification of X<sub>g,s</sub>, whatever the choice of compactification.

## Note, then ignore

- Conditional on Arthur. The paper's disclaimer says the results rely on Arthur's endoscopic classification, which still depends on a weighted fundamental lemma in positive characteristic. Safe to skip on a first reading, but worth knowing.
- Semisimplification. Theorems 1.4 and 1.7 describe Galois representations only up to semisimplification. Safe to skip.
- Spin lifts. The Galois representation attached to a parameter is a spin lift, not the standard one, which is why the method reaches past weight 22 (Remark 1.6). Safe to skip.
- Singular standard compactifications. The perfect cone, second Voronoi and central cone compactifications are singular for g ≥ 5. Corollary 1.8 handles them through the top weight-graded piece. Safe to skip.
- Hodge version. Theorems 1.11 and 1.12 restate the results for Hodge structures and holomorphic forms. Safe to skip.

## One next step

Open the paper at page 4 and read Table 1 with Theorem 1.9, then Theorem 1.10 on page 5.

source: https://arxiv.org/pdf/1310.2508
slogan: Every cohomology group of every symplectic local system on the moduli of abelian surfaces is written out using elliptic and Siegel cusp forms.
basis: the introduction and the main theorem statements

## Before you start

The paper is only 19 pages, but its main theorem is a table of cases with unfamiliar symbols, and its proof cites a large body of work on automorphic representations of GSp(4). The feeling to expect is a small sinking one: "I cannot check any of this." That is fine to feel. The author wrote section 3 for readers without that background. If you want one higher-genus example understood as fully as modular curves, this is it. Enjoy seeing the answer. Verifying it can come later, or never.

## The story

For a modular curve, the cohomology of the local systems Sym<sup>k</sup> is understood completely. Cusp forms give the pure part, Eisenstein series give the rest, and Deligne attached Galois representations to the cusp forms. For abelian varieties of higher dimension there was no example known in the same detail. Petersen takes the simplest case, the moduli stack A<sub>2</sub> of principally polarised abelian surfaces at level one. Up to semi-simplification, cohomology splits into an Eisenstein part and an inner part. Harder had computed the Eisenstein part. The inner part sits between cuspidal cohomology and intersection cohomology, and Flicker's explicit description of the discrete spectrum of PGSp(4) determines both. They agree, so the answer follows. It confirms a conjecture of Faber and van der Geer.

## Main definitions

**The local systems 𝕍<sub>a,b</sub>.** Let f: X → A<sub>2</sub> be the universal abelian surface and 𝕍 = R<sup>1</sup>f<sub>\*</sub>ℚ<sub>ℓ</sub>, of rank 4 and weight 1, with a symplectic pairing. For integers a ≥ b ≥ 0, 𝕍<sub>a,b</sub> is the summand of 𝕍<sup>⊗(a+b)</sup> that corresponds to the irreducible representation of Sp(4) of highest weight (a, b).
- Example: 𝕍<sub>2,0</sub> = Sym<sup>2</sup>𝕍.
- Parity: inversion on the abelian surface acts by (−1)<sup>a+b</sup>, so there is no cohomology when a + b is odd.

**The building blocks.** s<sub>k</sub> is the dimension of the space of cusp forms of weight k for SL(2, ℤ), and S<sub>k</sub> is the sum of the 2-dimensional Galois representations of the eigenforms. s<sub>j,k</sub> and S<sub>j,k</sub> are the same for vector-valued Siegel cusp forms for Sp(4, ℤ) of type Sym<sup>j</sup> ⊗ det<sup>k</sup>, with 4-dimensional Galois representations (Weissauer).

**Inner cohomology.** The image of compactly supported cohomology in ordinary cohomology. It contains the cuspidal cohomology and is contained in the intersection cohomology. Eisenstein cohomology is the complementary part.

## Main results

**Theorem (cohomology of 𝕍<sub>a,b</sub>; Theorem 2.1).** Let (a, b) ≠ (0, 0) with a + b even. Then H<sub>c</sub><sup>k</sup>(A<sub>2</sub>, 𝕍<sub>a,b</sub>) vanishes unless k is 2, 3 or 4. In degree 4 it is s<sub>a+b+4</sub> copies of ℚ<sub>ℓ</sub>(−b−2) when a = b is even, and zero otherwise. In degrees 3 and 2 the theorem gives explicit formulas, up to semi-simplification. Degree 3 contains the Siegel cusp form part for type Sym<sup>a−b</sup> ⊗ det<sup>b+3</sup>, with Saito-Kurokawa Tate classes removed, plus terms from elliptic cusp forms and Tate classes. I do not reproduce the full case list here.
- Step 1: take the Eisenstein cohomology from Harder's computation.
- Step 2: compute cuspidal and intersection cohomology from Flicker's classification for PGSp(4), and see that the inner cohomology equals the cuspidal cohomology.

**Corollary (Ibukiyama's conjecture; section 2.1).** For Sp(4, ℤ), the bundles of vector-valued Siegel cusp forms of type Sym<sup>j</sup> ⊗ det<sup>k</sup> with j ≥ 0, k ≥ 3 have no higher cohomology on a toroidal compactification, with one exception at j = 0, k = 3. With Tsushima's Euler characteristic formula this gives the dimension formula in weight 3: Σ s<sub>j,3</sub>x<sup>j</sup> = x<sup>36</sup> / ((1 − x<sup>6</sup>)(1 − x<sup>8</sup>)(1 − x<sup>10</sup>)(1 − x<sup>12</sup>)).
- Step 1: the Faltings-Chai BGG complex relates the Hodge pieces of H<sub>c</sub> to coherent cohomology (Theorem 2.4).
- Step 2: read off the top Hodge piece from Theorem 2.1.

**Claim (Hodge version; Remark 2.2).** The author states that the same result holds in the category of mixed Hodge structures, with a slightly easier proof.

## Note, then ignore

- Semi-simplification. The theorem gives the Galois representations only up to semi-simplification. Remark 2.3 recalls a conjecture of Harder that non-trivial extensions do occur. Skip it on a first reading.
- The number s′<sub>k</sub>. This counts eigenforms of weight k whose central L-value vanishes. It appears only for k ≡ 0 mod 4 and is conjectured to be 0. Read it as 0 and skip it.
- Bars on S<sub>j,k</sub>. The theorem uses the part of S<sub>j,k</sub> that satisfies the Ramanujan conjecture. It differs from S<sub>j,k</sub> only for Saito-Kurokawa lifts (j = 0, k even). Skip it.
- Other conventions. Faber and van der Geer define s<sub>k</sub> and S<sub>k</sub> slightly differently, to include the trivial representation. This matters only if you compare formulas. Skip it.
- Stack, not variety. A<sub>2</sub> is a stack because every point has the automorphism −1. With ℚ<sub>ℓ</sub>-coefficients this causes no trouble. Skip it.

## One next step

Open the PDF at page 4 and read only parts (1) and (2) of Theorem 2.1, then check them against the parity remark on page 3.

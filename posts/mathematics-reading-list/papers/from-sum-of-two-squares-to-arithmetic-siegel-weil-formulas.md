source: https://www.math.columbia.edu/~chaoli/ASWSurvey.pdf
slogan: Counting ways to write n as two squares is the first case of a formula that now computes intersection numbers on Shimura varieties.
basis: the introduction and the main theorem statements

## Before you start

The title ends in a place most readers have never been, and the reference list runs to pages. A natural feeling is fear of the moment the survey leaves you behind. That moment will probably come, and it is fine when it does. The first fourteen pages need only modular forms and a little geometry. If you want to see why theta series and Eisenstein series keep meeting, read those pages for pleasure. The rest can wait.

## The story

Jacobi counted the ways to write n as a sum of two squares: r(n) is 4 times the number of divisors of n that are 1 mod 4, minus 4 times the number that are 3 mod 4. In the modern proof, θ² and a weight 1 Eisenstein series lie in the same one-dimensional space, so they are equal. The survey climbs a ladder built on this pattern, "theta object = Eisenstein object". Siegel and Weil replace x² + y² by any quadratic form. Hurwitz and Kudla replace point counts by intersection numbers of curves on a surface. Gross-Keating, Kudla and Rapoport move to arithmetic intersection numbers on integral models, and there the value of the Eisenstein series becomes its derivative. Li and Zhang proved that last identity for unitary Shimura varieties of every dimension.

## Main definitions

**Representation number and theta series.** For a positive definite lattice Λ of rank m with quadratic form Q, r<sub>Λ</sub>(n) counts x ∈ Λ with Q(x) = n, and θ<sub>Λ</sub> = Σ r<sub>Λ</sub>(n) q<sup>n</sup>. Siegel's version counts n-tuples of vectors with a given matrix T of inner products, and gives a Siegel modular form of weight m/2.

**Theta integral and Siegel Eisenstein series.** Take a quadratic space V over ℚ of even dimension m, and the pair G = Sp(2n), H = O(V). A Schwartz function φ on V(𝔸)<sup>n</sup> gives a theta function θ(g, h, φ) through the Weil representation. Integrating it over H(ℚ)\H(𝔸) gives the theta integral. The same φ gives an Eisenstein series E(g, s, φ) on G, with special point s<sub>0</sub> = (m − (n + 1))/2.

**Special divisors.** On X = Y × Y, with Y the modular curve, Z(m) parametrises pairs (E, E′) with an isogeny E → E′ of degree m. On orthogonal and unitary Shimura varieties the analogous cycles Z(T) are indexed by symmetric or hermitian matrices T.
- Arithmetic version: on a regular integral model, the T-part of the intersection of n divisors is a sum over primes p of local intersection numbers times log p.

## Main results

**Theorem (Siegel-Weil formula; Theorem 2.2.9).** Let α be the dimension of a maximal isotropic subspace of V. If α = 0, or α > 0 and m − α > n + 1, then E(g, s, φ) is holomorphic at s<sub>0</sub> and κ · ∫ θ(g, h, φ) dh = E(g, s<sub>0</sub>, φ), with κ = 1 if m > n + 1 and κ = 2 otherwise.
- Case: V positive definite recovers Siegel's formula, that the weighted average of θ<sub>Λ′</sub> over the genus of Λ (lattices isomorphic to Λ over ℝ and every ℤ<sub>p</sub>) is an Eisenstein series (Theorem 2.1.3).
- Case: m = 2, n = 1, Q = x² + y² recovers Jacobi's formula (Theorem 1.3.3).

**Theorem (Hurwitz class number relation; Theorem 3.1.5).** If m is not a perfect square, the sum of max(d, d′) over factorisations dd′ = m equals the sum of Hurwitz class numbers H(4m − t²) over integers t with 4m − t² > 0.
- Step 1: both sides equal the intersection number of Z(m) and Z(1) on Y × Y. The right side counts curves with complex multiplication.
- Step 2: the H(4m − t²) are Fourier coefficients of a weight 2 Siegel Eisenstein series on Sp(4) at s = 1/2. Kudla's Theorem 3.6.1 generalises this to compact Shimura varieties.

**Theorem (arithmetic Siegel-Weil, unitary case; Theorem 4.2.4, Li-Zhang).** For unitary Shimura varieties with a suitable regular integral model 𝒳, n = dim 𝒳, and positive definite hermitian T with diagonal m<sub>1</sub>, ..., m<sub>n</sub>, the T-part of the arithmetic intersection number of Z(m<sub>1</sub>), ..., Z(m<sub>n</sub>) equals the T-th Fourier coefficient of the derivative E′(τ, 0) of a Siegel Eisenstein series on U(n, n), up to a non-zero constant. The survey leaves the level conditions to the original paper.
- Step 1: reduce to a local identity Int(L) = ∂Den(L) between an intersection number on a Rapoport-Zink space and the central derivative of a local density (Theorem 5.3.1).
- Step 2: prove it by induction on n, comparing Fourier transforms of both sides (the "uncertainty principle").

**Theorem (towards Beilinson-Bloch; Theorem 6.7.3, Li-Liu).** For a cuspidal automorphic representation π of a unitary group satisfying the survey's Assumption 6.6.1, if L(s, π) vanishes to order exactly 1 at s = 1/2, then the π-part of the Chow group of homologically trivial cycles on the Shimura variety has rank at least 1, for small enough level.

## Note, then ignore

- Even m. The survey assumes m even so the weight m/2 is an integer. Odd m needs the metaplectic cover. Safe to skip on a first reading.
- "Up to a constant". Constants come from Haar measures. Safe to skip.
- Improper intersections. The n divisors often share components, and the correct intersection number is a derived one (Definition 5.1.3). Safe to skip.
- Non-singular T only. The proved formula concerns positive definite T. Singular and archimedean terms have separate statements, some still open. Safe to skip.

## One next step

Open the survey at Section 1.5 (page 3) and read to equation (1.5.1.4), θ² = E<sub>1</sub><sup>χ</sup>.

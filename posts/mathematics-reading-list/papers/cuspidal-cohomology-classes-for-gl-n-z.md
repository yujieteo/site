source: https://arxiv.org/pdf/2309.15944
slogan: Symmetric powers of one level-one modular form, moved to weight zero by a congruence, give the first cusp forms in the cohomology of GLₙ(ℤ).
basis: the introduction and the main theorem statements

## Before you start

The paper is only 12 pages, but it leans on a tower of recent theorems: symmetric power functoriality, automorphy lifting, Galois deformation rings. The likely feeling is shame at not knowing that tower. Let the feeling be there. Nobody reads these pages without taking the cited theorems on trust. If you want to see how one congruence between Galois representations settles a plain question about a group of integer matrices, the introduction tells that story in three pages. Enjoy those first.

## The story

There is no cusp form of weight 2 for SL<sub>2</sub>(ℤ). In cohomological terms, the cuspidal cohomology of GL<sub>2</sub>(ℤ) with constant coefficients vanishes. People asked if the same holds for GL<sub>n</sub>(ℤ) for every n. Analytic methods of Fermigier and Miller proved vanishing for 1 &lt; n &lt; 27. Nobody had a single non-zero class. The idea here is to start from a form that exists, in the wrong weight. Take a level-one eigenform f and its symmetric power Sym<sup>n−1</sup> f, which is automorphic by Newton and Thorne. For well-chosen f, p and n, the mod p Galois representation of Sym<sup>n−1</sup> f looks locally at p like a weight-zero one. A change of weight theorem then produces a genuine weight-zero form with the same reduction. The cases n = 79, 105 and 106 follow.

## Main definitions

**Level one and weight zero.** A cuspidal automorphic representation π of GL<sub>n</sub> over ℚ has level one if π<sub>p</sub> is unramified at every prime p. It has weight zero if π<sub>∞</sub> has the same infinitesimal character as the trivial representation.
- Galois side: conjecturally these match irreducible n-dimensional p-adic representations of the Galois group of ℚ, unramified away from p and crystalline at p with Hodge-Tate weights 0, 1, …, n − 1.

**Cuspidal cohomology.** GL<sub>n</sub>(ℤ) acts on the contractible symmetric space GL<sub>n</sub>(ℝ)/O(n). The cuspidal cohomology H<sup>\*</sup><sub>cusp</sub>(GL<sub>n</sub>(ℤ), ℂ) is the subspace of the cohomology of the quotient whose classes are represented by harmonic cusp forms.
- Link: it is non-zero exactly when a cuspidal π of level one and weight zero exists for GL<sub>n</sub> over ℚ.

**Ordinary and non-ordinary at p.** A level-one eigenform f is ordinary at p when p does not divide its p-th Fourier coefficient. In the ordinary case the mod p Galois representation of f, restricted to the decomposition group at p, is an extension of two characters. In the non-ordinary case with weight k &lt; p, it is irreducible.

## Main results

**Theorem (existence; Theorem B).** There are cuspidal automorphic representations of GL<sub>n</sub> over ℚ of level one and weight zero for n = 79, 105 and 106. So H<sup>\*</sup><sub>cusp</sub>(GL<sub>n</sub>(ℤ), ℂ) is non-zero for these n. With Miller's bound, the smallest n &gt; 1 with non-zero cuspidal cohomology lies between 27 and 79.

**Theorem (ordinary case; Theorem 2.1).** Let f be an eigenform of level SL<sub>2</sub>(ℤ) and weight k ≥ 2, and p &gt; 5 a prime. Assume the image of the mod p representation ρ̄<sub>f</sub> contains SL<sub>2</sub>(𝔽<sub>p</sub>), that p − 1 and k − 1 are coprime, that f is ordinary at p, and that ρ̄<sub>f</sub> restricted to the decomposition group at p is semisimple. Then for n = p − 1 and n = p − 2 there is a self-dual cuspidal π of level one and weight zero whose mod p representation is a twist of Sym<sup>n−1</sup> ρ̄<sub>f</sub>.
- Step 1: the two local characters differ by a power of the cyclotomic character of exponent prime to p − 1, so the symmetric power is locally a sum of the characters ε<sup>−i</sup> for i = 0, …, n − 1 (up to unramified twists). This is the shape of weight zero.
- Step 2: a deformation ring of weight-zero lifts has dimension at least 1 and is finite over the coefficient ring, so it has a point in characteristic zero. Automorphy lifting makes that point automorphic.

**Theorem (the case p = 107; Theorem 2.4).** Take f = ΔE<sub>4</sub><sup>2</sup>E<sub>6</sub>, the eigenform of weight 26, and p = 107. The hypotheses hold, so n = 105 and n = 106 work. Semisimplicity at 107 rests on a computation of Elkies: f has a companion form of weight 82.

**Theorem (non-ordinary case; Theorem 3.1 and Corollary 3.2).** Let p &gt; 5 and let f have level SL<sub>2</sub>(ℤ) and weight 2 ≤ k &lt; p, with k − 1 and p + 1 coprime and f non-ordinary at p. Then a self-dual cuspidal π of level one and weight zero exists for GL<sub>p</sub>, with mod p representation Sym<sup>p−1</sup> ρ̄<sub>f</sub>. A form of weight 38 that is non-ordinary at 79 gives n = 79.

## Note, then ignore

- GL<sub>n</sub>(ℤ) or SL<sub>n</sub>(ℤ). For odd n the two cuspidal cohomologies agree. For even n the SL one has twice the dimension. Either is non-zero exactly when the other is. Safe to skip.
- Self-dual and the groups GSp, GO. The lifts are built with a symplectic or orthogonal structure because the lifting theorems need it. Safe to skip.
- The imaginary quadratic field F. The proof passes to a unitary group over an auxiliary field and comes back. It is a device of the method. Safe to skip.
- "Adequate" image. This is a technical condition on the image of the residual representation, checked in Lemma 2.2. Safe to skip.
- Other n. The authors expect infinitely many n to work but cannot prove it. This does not affect the three cases. Safe to skip.

## One next step

Open the paper at page 3 and read the paragraph beginning "As an illustration", with its one displayed formula for Sym<sup>p−2</sup>.

source: https://arxiv.org/pdf/1003.1935
slogan: Point counting still computes the zeta function of a modular curve at bad primes, once each point is weighted by an explicit Hecke function.
basis: the introduction and the main theorem statements

## Before you start

This paper sits where three subjects meet: nearby cycles, the Bernstein centre and the trace formula. The likely feeling is shame at not knowing all three, with the fear that everyone else does. Few readers do, and the feeling is allowed to be there. If you want to see how counting points on a curve turns into a statement about automorphic representations, the introduction shows the whole chain in four pages. Read those for interest. Whether you go further matters less.

## The story

Langlands and Kottwitz computed the zeta function of a Shimura variety at a prime p of good reduction: count points over 𝔽<sub>p<sup>r</sup></sub>, write the count as orbital integrals, and compare with the Arthur-Selberg trace formula. At a prime dividing the level the reduction is bad and plain counting gives the wrong answer. The fix is to weight each point x of the good-level curve by the semisimple trace of Frobenius on the nearby cycles at x. Scholze computes this weight for the modular curve with level p<sup>n</sup>. It turns out to be a twisted orbital integral of one explicit function φ<sub>p,n</sub> on GL<sub>2</sub>(ℚ<sub>p<sup>r</sup></sub>), and this function is central in a Hecke algebra. A base-change identity for central functions then lets the old comparison run as before.

## Main definitions

**The curves.** Fix a prime p and an integer m ≥ 3 prime to p. M<sub>m</sub> is the moduli space of elliptic curves with level-m structure over ℤ[1/m]. The cover π<sub>n</sub>: M<sub>Γ(p<sup>n</sup>),m</sub> → M<sub>m</sub> adds a Drinfeld level-p<sup>n</sup> structure.
- After inverting p: a finite Galois cover with group GL<sub>2</sub>(ℤ/p<sup>n</sup>ℤ).

**Semisimple trace and nearby cycles.** F<sub>n</sub> is the push-forward of the constant sheaf ℚ<sub>ℓ</sub> along the generic fibre of π<sub>n</sub>, and RψF<sub>n</sub> is its complex of nearby cycles on the special fibre of M<sub>m</sub>. The semisimple trace tr<sup>ss</sup> is a variant of the trace of Frobenius that behaves well when inertia acts non-trivially. The semisimple local factor ζ<sub>p</sub><sup>ss</sup> is built from it.

**The function φ<sub>p,n</sub>.** A function on GL<sub>2</sub>(ℚ<sub>p<sup>r</sup></sub>), where ℚ<sub>p<sup>r</sup></sub> is the unramified extension of degree r. For n = 0 it is 1/(p<sup>r</sup> − 1) times the characteristic function of the double coset of diag(p, 1) under GL<sub>2</sub>(ℤ<sub>p<sup>r</sup></sub>). For n > 0 it vanishes unless det g has valuation 1, tr g is integral and p<sup>n−1</sup>g is integral, and there it takes explicit values such as −1 − p<sup>r</sup>.

**The element δ(x).** A point x of M<sub>m</sub> over 𝔽<sub>p<sup>r</sup></sub> gives an element δ of GL<sub>2</sub>(ℚ<sub>p<sup>r</sup></sub>), defined up to σ-conjugacy through crystalline cohomology. TO<sub>δσ</sub> denotes the twisted orbital integral at δ.

## Main results

**Theorem (nearby cycles; Theorem A).** Let X be regular and flat of relative dimension 1 over the ring of integers of a local field, with special fibre a union of regular divisors. At a point x lying on divisors D<sub>1</sub>, …, D<sub>i</sub>, the stalk of the k-th nearby cohomology sheaf is ℚ<sub>ℓ</sub> for k = 0, W<sub>1</sub>(−1) for k = 1, W<sub>2</sub>(−2) for k = 2 and zero otherwise. Here W<sub>1</sub> has the D<sub>t</sub> as a basis and W<sub>2</sub> is the kernel of the sum map W<sub>1</sub> → ℚ<sub>ℓ</sub>.
- Main input: Thomason's purity theorem.

**Theorem (the weight is an orbital integral; Theorem B).** The function φ<sub>p,n</sub> lies in the centre of the Hecke algebra of functions bi-invariant under the principal congruence subgroup of level p<sup>n</sup>. For x with δ = δ(x), tr<sup>ss</sup>(Φ<sub>p<sup>r</sup></sub> | (RψF<sub>n</sub>)<sub>x</sub>) = TO<sub>δσ</sub>(φ<sub>p,n</sub>) / TO<sub>δσ</sub>(φ<sub>p,0</sub>).
- Characterisation: on an irreducible π with vectors fixed by that subgroup, φ<sub>p,n</sub> acts by p<sup>r/2</sup> times the semisimple trace of Frobenius on the Weil-Deligne representation that local Langlands attaches to π.
- Order of proof: the paper defines φ<sub>p,n</sub> by this property and finds the explicit formula last, in Section 14.

**Theorem (base change for central functions; Theorem C).** Let f and φ be elements of the Bernstein centres of GL<sub>2</sub>(ℚ<sub>p</sub>) and GL<sub>2</sub>(ℚ<sub>p<sup>r</sup></sub>) that act by the same scalar on each tempered π and its base-change lift. If h and h′ have matching orbital and twisted orbital integrals, then so do f \* h and φ \* h′. The idempotents of the two principal congruence subgroups of level p<sup>n</sup> also match.

**Theorem (zeta function; Theorem D).** Let m be a product of two coprime integers, each at least 3. The Hasse-Weil zeta function of the compactified curve is a product, over discrete automorphic representations π of GL<sub>2</sub> whose archimedean component has trivial central and infinitesimal character, of powers of L(π, s − 1/2). The exponent is one half of the multiplicity m(π), times χ(π<sub>∞</sub>) = ±2, times the dimension of the vectors in π<sub>f</sub> fixed by the level-m subgroup K<sub>m</sub>.
- Step 1: Theorems B and C turn the Lefschetz count into orbital integrals at every prime.
- Step 2: compare with the Arthur-Selberg trace formula and handle the points at infinity.

## Note, then ignore

- Carayol's theorem. Carayol proved a stronger result earlier, with heavier tools. Scholze says so. The point here is the method. Safe to skip on a first reading.
- A conjecture of Haines and Kottwitz. Theorem B confirms it in this one case. Safe to skip.
- Non-compactness. M<sub>m</sub> is not proper, so the cusps need separate treatment (Theorem 7.11 and Section 11). Safe to skip.
- Haar measure. GL<sub>2</sub>(ℤ<sub>p<sup>r</sup></sub>) gets volume p<sup>r</sup> − 1. This only fixes constants. Safe to skip.
- A typo. The introduction writes GL<sub>n</sub> in the definition of the congruence subgroup. Read n = 2. Safe to skip.

## One next step

Open the paper at page 3 and read only the bulleted definition of φ<sub>p,n</sub> and the statement of Theorem B (ii) below it.

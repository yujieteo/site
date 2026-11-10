source: https://www-users.cse.umn.edu/~garrett/m/v/volumes.pdf
slogan: Sum a test function over the lattice, integrate it two ways, and the volume of SL<sub>n</sub>(ℤ)\SL<sub>n</sub>(ℝ) falls out as ζ(2)ζ(3)⋯ζ(n).
basis: the full text

## Before you start

The likely feeling here is impatience, or a small dread of bookkeeping. The idea is short, but the ten pages are full of Haar measure normalisations and block matrices that are tedious to check. It is fine to find that dull. If you want to see zeta values appear as volumes, with nothing harder than Poisson summation, this note delivers it in three pages for SL<sub>2</sub>. Enjoy that case. The induction and the symplectic case can wait for another day.

## The story

People want the volume of the space of lattices, SL<sub>n</sub>(ℤ)\SL<sub>n</sub>(ℝ). A fundamental domain is awkward to describe for large n, so direct integration is hopeless. Garrett follows Siegel and avoids the domain. Take a Schwartz function f on ℝ<sup>n</sup> and sum it over the lattice ℤ<sup>n</sup>g. Integrate that sum over the quotient. Unwinding gives two terms: f(0) times the unknown volume, and the Fourier transform value f̂(0) times ζ(n) times the volume one rank down. Poisson summation says the same integral equals the same expression with f and f̂ swapped. Subtract the two and the test function cancels. What remains is a recursion: the volume in rank n is ζ(n) times the volume in rank n − 1.

## Main definitions

**Measure on the quotient.** Let G be SL<sub>n</sub>(ℝ) and Γ be SL<sub>n</sub>(ℤ). A Haar measure on G gives a right G-invariant measure on Γ\G: write a function F on Γ\G as a sum of f(γg) over γ ∈ Γ and set the integral of F equal to the integral of f over G.

**Iwasawa normalisation.** Write G = P<sup>+</sup>·K, with K = SO(n) and P<sup>+</sup> the upper triangular matrices with positive diagonal. A Haar measure on K and a left Haar measure on P<sup>+</sup> together give a Haar measure on G.
- For n = 2: K has total measure 2π, and P<sup>+</sup> has measure dx dt / t<sup>3</sup> in the coordinates n(x)·diag(t, t<sup>−1</sup>).

**The lattice sum.** For a Schwartz function f on ℝ<sup>n</sup>, set F(g) = Σ f(vg) over row vectors v ∈ ℤ<sup>n</sup>. It is left Γ-invariant. Every non-zero v is ℓ·e·γ for a positive integer ℓ, the last basis vector e, and γ ∈ Γ, so the sum unwinds.

## Main results

**Theorem (SL<sub>2</sub>; Section 1).** With the normalisation above, vol(SL<sub>2</sub>(ℤ)\SL<sub>2</sub>(ℝ)) = ζ(2).
- Step 1: for rotation-invariant f, unwinding gives ∫ F = f(0)·vol + ζ(2)·f̂(0). The sum over ℓ produces ζ(2).
- Step 2: Poisson summation gives the same formula with f and f̂ swapped. Choose f with f(0) ≠ f̂(0) and solve.

**Theorem (SL<sub>n</sub>; Section 3).** With measures normalised inductively, vol(SL<sub>n</sub>(ℤ)\SL<sub>n</sub>(ℝ)) = ζ(2)ζ(3)ζ(4)⋯ζ(n).
- Step 1: the stabiliser of e contains a copy of SL<sub>n−1</sub>, so unwinding gives ∫ F = f(0)·vol<sub>n</sub> + vol<sub>n−1</sub>·ζ(n)·f̂(0).
- Step 2: Poisson summation and the automorphism g ↦ (g<sup>T</sup>)<sup>−1</sup>, which preserves Γ and the measure, give vol<sub>n</sub> = ζ(n)·vol<sub>n−1</sub>.

**Theorem (symplectic groups; Section 4).** For Sp<sub>n</sub> acting on ℝ<sup>2n</sup>, with K given total measure vol(S<sup>1</sup>)vol(S<sup>3</sup>)⋯vol(S<sup>2n−1</sup>), the volume of Sp<sub>n</sub>(ℤ)\Sp<sub>n</sub>(ℝ) is ζ(2)ζ(4)ζ(6)⋯ζ(2n).
- Step 1: Sp<sub>n</sub>(ℤ) acts transitively on primitive vectors of ℤ<sup>2n</sup>, and the stabiliser of one contains Sp<sub>n−1</sub>.
- Step 2: the same two-way evaluation gives vol<sub>n</sub> = ζ(2n)·vol<sub>n−1</sub>, starting from Sp<sub>1</sub> = SL<sub>2</sub>.

## Note, then ignore

- **"Up to elementary normalisations".** The clean product of zeta values depends on the chosen Haar measure. Another choice multiplies the answer by an explicit constant. Safe to skip on a first reading.
- **ζ(2) against π/3.** The classical area of the modular domain in the upper half-plane is π/3, not π<sup>2</sup>/6. Section 2 reconciles them: ±1 acts trivially, and the coordinate y = t<sup>2</sup> doubles the measure. Safe to skip.
- **Matching the inductive measures.** After the induction Garrett checks that the measure produced step by step agrees with the one fixed at the start. This is a page of exponents. Safe to skip.
- **Rotation-invariant f.** The test function is taken K-invariant so the integral over K contributes only a sphere volume. It is a convenience, not an idea. Safe to skip.
- **Other classical groups.** Garrett remarks that for other groups Poisson summation must be replaced by subtler tools. The note does not treat them. Safe to skip.

## One next step

Open the PDF and read only the first half page: the two displayed volume formulas and the sentence about odd zeta values between them.

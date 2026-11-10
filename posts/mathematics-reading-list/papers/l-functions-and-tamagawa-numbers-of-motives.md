source: https://virtualmath1.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf
slogan: Treat a motive like an algebraic group, measure its adelic points, and the L-value comes out exactly, with no rational fudge factor.
basis: the introduction and the main theorem statements

## Before you start

This is the Bloch–Kato paper: 68 pages, Fontaine's period rings from page five, and a name that half of arithmetic geometry cites. The feeling most likely to arrive is intimidation, with a little shame at not knowing p-adic Hodge theory. Let it sit there. It does not need fixing before you read. If you want to know what "the Bloch–Kato conjecture" for L-values says, the introduction tells you in four pages. Read those for pleasure. The rest is optional.

## The story

Deligne and Beilinson predicted special values of L-functions of motives, but only up to a rational multiple. The period or regulator on the other side depends on a choice of basis, so the ambiguity seemed built in. Bloch and Kato look at how the same problem is solved for algebraic groups. The volume of SL<sub>n</sub>(ℚ)\SL<sub>n</sub>(𝔸) is 1 for the Tamagawa measure, and unwinding this gives a product of zeta values exactly. The choice of basis cancels by the product formula. So they attach to a motive M groups A(ℚ<sub>p</sub>) for every p, with Haar measures, and a global group A(ℚ). The hard part is the p-adic group at p. Fontaine's rings B<sub>crys</sub> and B<sub>dR</sub> cut the right subgroup out of Galois cohomology and give an exponential map that carries the measure.

## Main definitions

**The local subgroups H<sup>1</sup><sub>e</sub> ⊂ H<sup>1</sup><sub>f</sub> ⊂ H<sup>1</sup><sub>g</sub> ⊂ H<sup>1</sup>(K, V).** K is a finite extension of ℚ<sub>p</sub>, and V is a finite-dimensional ℚ<sub>ℓ</sub>-representation of its Galois group. These are the exponential, finite and geometric parts (3.7).
- ℓ ≠ p: H<sup>1</sup><sub>e</sub> = 0, H<sup>1</sup><sub>g</sub> is everything, and H<sup>1</sup><sub>f</sub> is the classes that die over the maximal unramified extension.
- ℓ = p: H<sup>1</sup><sub>f</sub> is the kernel of H<sup>1</sup>(K, V) → H<sup>1</sup>(K, B<sub>crys</sub> ⊗ V). The other two use the Frobenius-fixed part of B<sub>crys</sub> and the ring B<sub>dR</sub>.

**Exponential map (Definition 3.10).** For a de Rham representation V, a connecting homomorphism DR(V)/DR(V)<sup>0</sup> → H<sup>1</sup><sub>e</sub>(K, V). It is surjective. For an abelian variety it is the usual exponential from the tangent space to A(K) ⊗ ℚ.

**Tamagawa measure and Tam(M).** For a motivic pair of weights ≤ −3 and a lattice M, put A(ℚ<sub>p</sub>) = H<sup>1</sup><sub>f</sub>(ℚ<sub>p</sub>, M ⊗ ℤ-hat). A trivialisation of a determinant gives a Haar measure on each A(ℚ<sub>p</sub>) through the exponential map. The product measure does not depend on the trivialisation. Tam(M) is the measure of (Π A(ℚ<sub>p</sub>))/A(ℚ), the product taken over all p including ∞.

**Ш(M).** The kernel of a localisation map (5.12) built from the global and local groups. For an abelian variety it is the Tate–Shafarevich group.

## Main results

**Theorem (local volumes; Theorem 4.1).** Let P(V, u)<sup>−1</sup> be the local L-factor and assume P(V, 1) ≠ 0.
- ℓ ≠ p, V unramified with stable lattice T: the order of H<sup>1</sup><sub>f</sub>(K, T) is the inverse of the ℓ-adic absolute value of P(V, 1).
- ℓ = p, K unramified over ℚ<sub>p</sub>, V crystalline with Hodge filtration of length less than p: the measure of H<sup>1</sup><sub>f</sub>(K, T) is the inverse of the p-adic absolute value of P(V, 1), for T the Fontaine–Laffaille lattice.

**Conjecture (Tamagawa number conjecture; Conjecture 5.15).** If the data come from a motive, then Ш(M) is finite and Tam(M) = #H<sup>0</sup>(ℚ, M\* ⊗ ℚ/ℤ(1)) / #Ш(M). Since almost all local volumes are Euler factors, this is an exact formula for the L-value at 0.

**Proposition (isogeny invariance; Proposition 5.14).** The ℓ-primary part of Ш(M) is finite for each ℓ. If Ш(M) is finite, the truth of the conjecture does not change when M is replaced by another Galois-stable lattice.

**Theorem (Riemann zeta function; Theorem 6.1).** Let r ≥ 2. For r even, the conjecture holds for the motive ℚ(r) up to a power of 2. For r odd, it holds up to a power of 2 if Conjecture 6.2 holds for the root of unity 1. That conjecture compares Beilinson's cyclotomic elements in K-theory with the Deligne–Soulé elements in Galois cohomology.

## Note, then ignore

- Power of 2. The authors blame it on trouble in Fontaine–Messing theory at the prime 2. It does not touch the story. Skip.
- A versus B. The introduction mentions groups B(ℚ<sub>p</sub>) for the variety over ℚ, next to A(ℚ<sub>p</sub>) for an integral model. The paper works with A because its local properties are proved. Skip B.
- A(ℚ) is postulated. The global group should be motivic cohomology, but the paper assumes its properties. Note this, then read on.
- Weights. The measure needs weights ≤ −3 for the Euler product to converge. Weights ≤ −1 need analytic continuation of the L-function. Skip on a first reading.
- CM elliptic curves. Section 7 reduces the ℓ-part of the conjecture for L(H<sup>1</sup>(E), 2) to two further statements and proves it for "regular" primes. It is a second example, safe to leave.
- Scan quality. The PDF is a scan and its text layer is poor, so searching it fails. Read the pages by eye.

## One next step

Open the PDF and read the first two pages of the introduction, up to the identity that writes ζ(2)ζ(3)…ζ(n) as the volume of SL<sub>n</sub>(ℤ)\SL<sub>n</sub>(ℝ).

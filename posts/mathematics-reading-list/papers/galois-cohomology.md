source: https://wstein.org/edu/2010/582e/refs/tate-galois_cohomology.pdf
slogan: Group cohomology turns questions about field extensions and elliptic curves into exact sequences, and over a local field those groups pair off perfectly.
basis: the full text

## Before you start

These notes are 13 pages, but they move fast and assume you have met derived functors and spectral sequences. The likely feeling is shame at the background you lack, made sharper because the author is Tate and the tone is casual. That feeling is allowed. If you want to see why cohomology earns its place in number theory, Section 3 shows it in two pages. Read for the pleasure of watching the tool work. Finishing can come later.

## The story

Number theorists wanted to control things like k<sup>×</sup> modulo m-th powers, or the points of an elliptic curve modulo m. These quotients are awkward on their own. The idea is to let the Galois group G act on a module A and to measure the failure of exactness of "take fixed points". The measurements are the groups H<sup>r</sup>(G, A). A short exact sequence of modules then gives a long exact sequence, and the awkward quotients appear inside it. Tate runs this on the m-th power map. He gets Kummer theory in a few lines, and then the weak Mordell-Weil theorem for an elliptic curve. The notes end over a local field, where the cohomology of a finite module is dual to that of its Cartier dual.

## Main definitions

**G-module and cohomology.** A G-module is an abelian group A with an additive action of a group G. The groups H<sup>r</sup>(G, A) are the right derived functors of A ↦ A<sup>G</sup>, the fixed elements. They can be computed from cochains, that is, functions from G<sup>r</sup> to A.
- H<sup>0</sup>(G, A) = A<sup>G</sup>, and H<sup>1</sup> is crossed homomorphisms modulo principal ones.
- H<sup>2</sup>(G, A) classifies group extensions of G by A with the given action.

**Galois cohomology.** For a field k with separable closure k<sup>sep</sup> and a commutative algebraic group C over k, write H<sup>r</sup>(k, C) for the cohomology of G<sub>k</sub> = Gal(k<sup>sep</sup>/k) acting on C(k<sup>sep</sup>). For infinite extensions one uses continuous cochains.
- C = 𝔾<sub>m</sub>: H<sup>1</sup> vanishes (Hilbert's Theorem 90) and H<sup>2</sup> is the Brauer group Br(k).

**Cartier dual.** For a finite G<sub>k</sub>-module A killed by m, with m nonzero in k, the Cartier dual is Hom(A, μ<sub>m</sub>(k<sup>sep</sup>)), with G acting by (σf)(a) = σ(f(σ<sup>-1</sup>a)).
- For an elliptic curve E, the Weil pairing identifies the m-torsion E<sub>m</sub> with its own Cartier dual.

**Shafarevich group.** For an elliptic curve E over a number field k, it is the kernel of the map from H<sup>1</sup>(k, E) to the product of the H<sup>1</sup>(k<sub>v</sub>, E) over all places v. Tate records the conjecture that it is finite.

## Main results

**Theorem (Kummer theory; Section 3).** Let m ≥ 1 be nonzero in k. Then H<sup>1</sup>(G<sub>k</sub>, μ<sub>m</sub>) ≅ k<sup>×</sup>/(k<sup>×</sup>)<sup>m</sup>. If k contains the m-th roots of unity, this group equals Hom<sub>cont</sub>(G<sub>k</sub>, μ<sub>m</sub>), and it describes the finite abelian extensions of k with group killed by m.
- Step 1: take the long exact sequence of the m-th power map on (k<sup>sep</sup>)<sup>×</sup>.
- Step 2: use Hilbert's Theorem 90 to kill the next term.

**Theorem (weak Mordell-Weil; Section 3).** Let E be an elliptic curve over a number field k. Then E(k)/mE(k) is finite. Tate proves this for k containing μ<sub>m</sub> and quotes one fact without proof: E(k<sub>S</sub>) is divisible by m, where k<sub>S</sub> is the maximal extension unramified outside a suitable finite set S of primes.
- Step 1: E(k)/mE(k) embeds in H<sup>1</sup>(k<sub>S</sub>/k, E<sub>m</sub>).
- Step 2: inflation-restriction reduces to the case where the m-torsion is rational, and then finiteness of the S-units modulo m-th powers finishes it.

**Theorem (local duality; Theorem 8.1).** Let k be a non-archimedean local field and A a finite G<sub>k</sub>-module of order prime to the characteristic of k, with Cartier dual A<sup>∗</sup>. The cup product gives a perfect pairing of finite groups H<sup>r</sup>(k, A) × H<sup>2−r</sup>(k, A<sup>∗</sup>) → Br(k) = ℚ/ℤ. Also H<sup>r</sup>(k, A) = 0 for r ≥ 3.
- Input: the Hasse invariant, which identifies Br(k) with ℚ/ℤ through the maximal unramified extension.
- Example: with A = ℤ/mℤ it gives G<sub>k</sub><sup>ab</sup> modulo m-th powers ≅ k<sup>×</sup>/(k<sup>×</sup>)<sup>m</sup>, and in the limit the Artin map k<sup>×</sup> → G<sub>k</sub><sup>ab</sup>.

**Theorem (duality for elliptic curves; Theorem 8.2).** Let E be an elliptic curve over a non-archimedean local field k. There is a perfect pairing E(k) × H<sup>1</sup>(k, E) → ℚ/ℤ between the profinite group E(k) and the discrete torsion group H<sup>1</sup>(k, E). The notes give only a sketch of the proof.
- Step 1: apply Theorem 8.1 to E<sub>m</sub>, which is self-dual by the Weil pairing.
- Step 2: compare the Kummer sequence with its dual, then pass to the limit over m.

## Note, then ignore

- Order of topics. Tate says the layout is inefficient because the notes record two talks, the second unplanned. Do not look for a hidden plan. Safe to skip.
- "For r ∈ ℤ". The notes let r be any integer, but only r = 0, 1, 2 carry content in the results. Safe to skip.
- Continuous cochains. For an infinite Galois group one uses cochains that factor through finite quotients, so the cohomology is a direct limit over finite layers. It changes no statement here. Safe to skip at first.
- The Hochschild-Serre spectral sequence (Theorem 6.3). Only its low-degree exact sequence, inflation-restriction, is used. Safe to skip the rest.
- Cartier duals in characteristic p. The dual of a p-group is then a group scheme, not a Galois module. This is why Theorem 8.1 asks for order prime to the characteristic. Safe to skip.

## One next step

Open the PDF at Section 3, "Kummer theory", and read the first long exact sequence down to the line H<sup>1</sup>(G<sub>k</sub>, μ<sub>m</sub>) ≅ k<sup>×</sup>/(k<sup>×</sup>)<sup>m</sup>.

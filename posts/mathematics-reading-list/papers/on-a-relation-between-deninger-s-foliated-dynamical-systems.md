source: https://arxiv.org/pdf/2508.15971
slogan: An explicit continuous map sends Deninger's flow space to the Connes–Consani adelic space, and the circle of each prime lands on its partner.
basis: the introduction and the main theorem statements

## Before you start

Two research programmes meet here, each with its own notation, and the paper recalls both at speed. You may feel you must first learn all of Deninger and all of Connes. That worry is natural. The new part is Section 3, which is three pages and uses only roots of unity and adèles. If you like the picture of primes as knots, this gives it a concrete form. Read for the picture. Checking every quotient can wait.

## The story

In the 1990s Deninger and Connes each proposed a space on which ℝ<sub>+</sub> flows, where each prime p appears as a closed orbit of length log p. Deninger's space comes from schemes and rational Witt vectors. The Connes–Consani space is a quotient of the adèles. Both aim at the explicit formulas of number theory. No link between them was known. Deninger had built a map from his space to the adèles and asked whether it relates to Connes' theory. Morishita shows that it does, for abelian extensions of ℚ. The map respects Galois actions, reverses the flow, and sends the orbits of p to the circle of p. The common thread is the linking homomorphism of p with the other primes, which is the monodromy around the circle on both sides.

## Main definitions

**Connes–Consani adelic space X<sub>K</sub>.** For an abelian extension K of ℚ with U<sub>K</sub> = Gal(ℚ<sup>ab</sup>/K) ⊂ ℤ̂<sup>×</sup>, set X<sub>K</sub> = ℚ<sup>×</sup>\𝔸/U<sub>K</sub>. The group ℝ<sub>+</sub> acts by multiplication on the real component.
- The circle C<sub>p</sub>: the orbit of adèles with a<sub>p</sub> = 0, a<sub>q</sub> = 1 for other primes q, and a<sub>∞</sub> > 0.

**Deninger system 𝔛<sub>K</sub>.** A point of the first-stage space is a pair (𝔭, P) with 𝔭 a point of Spec O<sub>K</sub> and P a ring map from the rational Witt vectors of the residue field κ(𝔭) to ℂ. Invert the Frobenius action of ℕ to get an action of ℚ<sub>+</sub>, then suspend along ℚ<sub>+</sub> ⊂ ℝ<sub>+</sub> to get a flow.
- Over an algebraically closed residue field, P is the same as a character κ(𝔭)<sup>×</sup> → ℂ<sup>×</sup>.
- The packet Γ<sub>p</sub>: the set of ℝ<sub>+</sub>-orbits lying over a prime p.

**Arithmetic linking homomorphism.** For a prime p, lk<sub>p</sub> is the diagonal map from p<sup>ℤ̂</sup> to the product of ℤ<sub>q</sub><sup>×</sup> over q ≠ p. Under class field theory it sends p to the Frobenius at p in the Galois group of the maximal abelian extension unramified at p.
- Mod 2 at an odd prime q, it gives a Legendre symbol.

## Main results

**Theorem (monodromy on the adelic side; Theorem 1.2.7, from Connes–Consani).** Let F be a finite abelian extension of ℚ and p a prime unramified in F. The preimage of C<sub>p</sub> in X<sub>F</sub> is the mapping torus Gal(F/ℚ) ×<sub>p<sup>ℤ</sup></sub> ℝ<sub>+</sub>, and the monodromy around C<sub>p</sub> is multiplication by the Artin symbol of p.
- Consequence: the preimage splits into circles exactly as (p) splits into primes of F.

**Theorem (monodromy on Deninger's side; Theorem 2.3.2).** With the same F and p, the preimage in 𝔛<sub>F</sub> of an orbit γ in Γ<sub>p</sub> is also Gal(F/ℚ) ×<sub>p<sup>ℤ</sup></sub> ℝ<sub>+</sub>, with monodromy the Artin symbol of p.
- Step 1: use Deninger's description of Γ<sub>p</sub> as a mapping torus of multiplication by lk<sub>p</sub>(p).
- Step 2: pass to the quotient by Gal(ℚ<sup>ab</sup>/F).

**Theorem (the bridge; Theorem 3.6).** For each finite abelian F there is a continuous map Ψ<sub>F</sub>: 𝔛<sub>F</sub> → X<sub>F</sub>. It is Gal(F/ℚ)-equivariant, anti-equivariant for the flows, and compatible with the covering maps down to ℚ and up to ℚ<sup>ab</sup>. Under Ψ<sub>ℚ</sub> every orbit in Γ<sub>p</sub> maps onto C<sub>p</sub>. If p is unramified in F, the preimage of the orbit maps onto the preimage of C<sub>p</sub>.
- Step 1: restrict P to roots of unity. This gives an endomorphism of μ<sub>∞</sub>, which is an element of ℤ̂. Inverting Frobenius turns ℤ̂ into the finite adèles.
- Step 2: over a prime above p the character only sees roots of unity of order prime to p, so the p-component is 0, as the definition of C<sub>p</sub> requires.

## Note, then ignore

- Anti-equivariance. The flows run in opposite directions because the paper identifies two twisted quotients by r ↦ r<sup>−1</sup>. Safe to skip on a first reading.
- Left and right twisted quotients. The Notations section fixes two meanings of A ×<sub>Z</sub> B. They matter only for signs. Safe to skip.
- Deninger's refinement. Deninger cuts his space down with extra conditions on P to get a better model. Remark 2.1.13 says this paper omits them. Safe to ignore.
- Noncommutative quotients. X<sub>K</sub> is a bad quotient as a topological space and is treated through a crossed product algebra. The theorem here is about plain continuous maps. Safe to skip.
- Abelian only. Everything is stated for subfields of ℚ<sup>ab</sup>, since the adelic spaces are defined through ℤ̂<sup>×</sup>. Note it and move on.

## One next step

Open the paper at Example 1.2.8 and read it. It shows the circle of p either splitting in two or doubling in length in ℚ(√q), according to a Legendre symbol.

source: https://arxiv.org/pdf/1011.2462
slogan: In a limit where Gamma functions become 1/s, Whittaker functions become both volumes of flag spaces and matrix elements over the tropical semifield.
basis: the introduction and the main theorem statements

## Before you start

This paper is 45 pages by mathematical physicists, and its introduction speaks of topological field theory, mirror symmetry and a "field ℚ<sub>1</sub>". The likely feeling is suspicion, and under it a worry that you cannot tell rigour from heuristics here. Both are reasonable, and you can keep them while reading. What you may want is a toy model of Langlands duality in which every object is a finite-dimensional integral you can compute. Section 3 gives one. Enjoy the explicit formulas, and leave the physics framing as background colour.

## The story

A Whittaker function for 𝔤𝔩<sub>ℓ+1</sub> has two integral formulas. The Mellin–Barnes formula is built from Gamma functions. The Givental formula integrates an exponential of exponentials. The authors had argued earlier that these two are exchanged by mirror symmetry of two-dimensional field theories, and that this is the Archimedean Langlands duality at the level of special functions. That setting needs infinite-dimensional integrals. Here they send the parameter ħ to ∞. Each Gamma factor Γ(z) degenerates to 1/z, each exponential wall becomes a step function, and the Toda chain becomes a particle bouncing in a Weyl chamber. The two formulas survive. One becomes an equivariant volume of the flag space. The other becomes a matrix element of a representation of GL<sub>ℓ+1</sub> over the tropical semifield.

## Main definitions

**Tropical semifield.** The set ℝ with tropical multiplication α ×̇ β = α + β and tropical addition α +̇ β = min(α, β) (Definition 7.1).
- Origin: on positive reals put a +<sub>ħ</sub> b = (a<sup>ħ</sup> + b<sup>ħ</sup>)<sup>1/ħ</sup>, write a = e<sup>−α</sup>, and let ħ → +∞.
- Matrices: every tropical matrix counts as invertible, so the matrix monoid is called GL<sub>ℓ+1</sub> of the semifield.

**Elementary Whittaker function.** Ψ<sup>(0)</sup><sub>λ</sub>(x), for λ and x in ℝ<sup>ℓ+1</sup>, is defined by the Mellin–Barnes integral for the classical Whittaker function with every factor Γ(z) replaced by 1/z (Definition 3.1).
- As a limit: Ψ<sup>(0)</sup><sub>λ</sub>(x) = lim ħ<sup>−ℓ(ℓ+1)/2</sup> Ψ<sub>λ</sub>(ħx, ħ) as ħ → ∞ (Proposition 3.2).

**Elementary L-factor.** For V = ℂ<sup>ℓ+1</sup> and a diagonal matrix with entries λ<sub>1</sub>, …, λ<sub>ℓ+1</sub>, L<sup>(0)</sup><sub>V</sub>(s, λ) = Π 1/(s − λ<sub>j</sub>) (Definition 3.3). It is the ħ → ∞ limit of the Archimedean L-factor Π ħ<sup>(is − iλ<sub>j</sub>)/ħ</sup> Γ((is − iλ<sub>j</sub>)/ħ), after rescaling (Proposition 3.6).

## Main results

**Theorem (closed formula; Proposition 3.1).** In the chamber x<sub>1</sub> ≥ x<sub>2</sub> ≥ … ≥ x<sub>ℓ+1</sub>, Ψ<sup>(0)</sup><sub>λ</sub>(x) = Σ (−1)<sup>l(s)</sup> exp(i Σ<sub>k</sub> λ<sub>s(k)</sub> x<sub>k</sub>) / Π<sub>i&lt;j</sub> i(λ<sub>i</sub> − λ<sub>j</sub>), summed over permutations s. Outside the chamber it is zero.
- Step: deform the contour and sum residues.
- Consequence (Proposition 3.5): Ψ<sup>(0)</sup> is an eigenfunction of every symmetric polynomial in the ∂/∂x<sub>i</sub> and vanishes on the walls x<sub>j</sub> = x<sub>j+1</sub>. This is the quantum billiard that replaces the Toda chain.

**Theorem (volume side; Proposition 5.1 and Lemma 5.1).** Ψ<sup>(0)</sup><sub>λ</sub>(x) is the U<sub>ℓ+1</sub>-equivariant symplectic volume of the flag space GL<sub>ℓ+1</sub>(ℂ)/B, with x fixing the symplectic form and λ the equivariant parameter. The elementary L-factor is the equivariant volume of ℂ<sup>ℓ+1</sup>.
- Step: the Harish-Chandra formula for orbit integrals evaluates the volume and returns the alternating sum above.

**Theorem (tropical side; Theorem 7.1).** The Givental-type integral for Ψ<sup>(0)</sup><sub>λ</sub>(x), an integral of exp(i Σ λ<sub>k</sub>(…)) against a product of step functions over ℝ<sup>ℓ(ℓ+1)/2</sup>, equals a matrix element ⟨ψ<sub>L</sub>, π<sup>(0)</sup><sub>λ</sub>(g(x)) ψ<sub>R</sub>⟩ of a principal series representation of the tropical monoid, with g(x) = diag(x<sub>1</sub>, …, x<sub>ℓ+1</sub>). The function extends to a submonoid of tropical GL<sub>ℓ+1</sub> and transforms by characters under tropical unipotent elements on both sides.

**Claim (p → 1; Section 4 and the abstract).** The elementary Whittaker functions also arise from the non-Archimedean Whittaker functions over ℚ<sub>p</sub> by a formal limit p → 1. The authors read this as a hint that tropical geometry describes geometry over a hypothetical ℚ<sub>1</sub>. This is an interpretation, not a theorem.

## Note, then ignore

- "Elementary Langlands correspondence". The paper proves the equality of two descriptions of special functions. A correspondence between representations in this setting is only expected. Safe to skip on a first reading.
- Topological field theory. The ħ → ∞ limit is motivated by reducing a two-dimensional theory to constant maps, but the paper takes limits directly in explicit integrals. Safe to skip.
- Factors of i and ħ. The normalising powers in the limits are conventions. Safe to skip.
- Baxter operators. An integral operator has Ψ<sup>(0)</sup> as eigenfunction with the elementary L-factor as eigenvalue. Its geometric meaning is worked out only for ℓ = 0 and 1. Safe to skip.
- Kurokawa. The elementary L-factors coincide with L-factors Kurokawa introduced earlier. Safe to skip.

## One next step

Open the paper at Definition 7.1 (Section 7) and read it with the short limit computation under it that turns ordinary addition into min.

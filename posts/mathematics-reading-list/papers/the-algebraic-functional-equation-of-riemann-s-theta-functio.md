source: https://www.numdam.org/item/10.5802/aif.3324.pdf
slogan: The transformation law of the theta function is an isomorphism of two line bundles on a moduli stack, so it holds over ℤ[1/2, i].
basis: the introduction and the main theorem statements

## Before you start

This one may raise a quiet shame about stacks. The title promises a classical theta function, and page two already speaks of moduli stacks, torsors and Picard groups. You are allowed to feel out of your depth there. Nothing is wrong with you or with the paper. If you want to know why a square root of τ/i can make sense without complex analysis, this paper answers it. Read it for the pleasure of that one translation. Finishing can wait.

## The story

Jacobi's theta function ϑ(τ) = Σ e<sup>πin²τ</sup> satisfies ϑ(−1/τ) = √(τ/i) ϑ(τ). The usual proof is Poisson summation, which is pure analysis. Algebraic geometers already describe modular forms as sections of line bundles on moduli spaces, and that view explains their arithmetic. A formula with a square root and a fourth root of unity did not fit.

Candelori works on the moduli stack of principally polarised abelian schemes with a theta characteristic. There ϑ is a section of a line bundle built from a bundle Θ on the universal abelian scheme. He builds a second line bundle, the theta multiplier bundle, from the 4-torsion points alone. It records the fourth roots of unity. The functional equation becomes one isomorphism between two line bundles, valid over ℤ[1/2, i]. Over ℂ it gives back the classical law.

## Main definitions

**Symplectic 4-group with theta characteristic.** A free ℤ/4ℤ-module V of rank 2g with a non-degenerate alternating form ψ, plus a quadratic form q on V/2V whose bilinear form is ψ mod 2. Its automorphism group Γ is the theta group.
- Even case: q vanishes on some g-dimensional subspace of V/2V.
- Odd case: no such subspace exists.

**Theta multiplier bundle M(Θ).** Let A → S be an abelian scheme over a base on which 2 is invertible and i exists, and Θ a normalised, symmetric, relatively ample line bundle of degree 1. The 4-torsion A[4], with its Weil pairing and the quadratic form coming from Θ, is a symplectic 4-group scheme with theta characteristic. Pushing its torsor of trivialisations along the character λ: Γ → μ<sub>4</sub> gives a μ<sub>4</sub>-torsor M(Θ) on S.

**Determinant bundle ∆(Θ).** The line bundle (π<sub>∗</sub>Θ)<sup>⊗2</sup> ⊗ ω on S, where π: A → S is the structure map and ω is the Hodge bundle. The theta function is a section of the dual of π<sub>∗</sub>Θ.

## Main results

**Theorem (the character λ; Theorem 2.4).** For a symplectic 4-group with theta characteristic (V, ψ, q) with theta group Γ, there is a unique homomorphism λ: Γ → ℤ/4ℤ such that λ restricts to 2·q on the kernel of reduction mod 2, λ reduces mod 2 to the Dickson invariant, and λ sends every anisotropic transvection to 1.
- Step 1: for g ≥ 5, a simple group with trivial Schur multiplier forces a quotient of Γ that is cyclic of order 4.
- Step 2: for smaller g, embed V in a larger space and restrict.

**Theorem (canonical key formula; Theorem 5.1).** Let S be a scheme over ℤ[1/2, i] and (A → S, Θ) as above. Then there is an isomorphism of line bundles ∆(Θ) ≅ M(Θ)<sup>−1</sup>, compatible with base change.
- Step 1: both sides are multiplicative under products of abelian schemes, and the Picard group of the moduli stack is very small, so few cases remain.
- Step 2: in genus 1, compare the two bundles through the order 4 automorphism of the curve y² = x³ − x.

**Claim (recovery of the classical law; Section 6).** Over ℂ, in the even case, the isomorphism of Theorem 5.1 is given analytically by the functional equation of Riemann's theta function ϑ<sub>g</sub> on the Siegel upper half-space. I did not read the proof in detail.

## Note, then ignore

- The base ring ℤ[1/2, i]. The construction needs 2 inverted and a fixed fourth root of unity to identify ℤ/4ℤ with μ<sub>4</sub>. Safe to skip on a first reading.
- Uniqueness of the isomorphism. It is unique only up to a unit of the base ring, because the stack has few global functions. Safe to skip.
- Even and odd characteristics. The moduli stack has two components, and the proof treats them separately. The story is the same on both. Safe to skip.
- Earlier results. Moret-Bailly showed ∆(Θ) is torsion, and Faltings and Chai showed its fourth power is trivial. This paper refines both. Safe to skip.
- Higher degree Θ. The sequel replaces line bundles by vector bundles and Weil representations. It is not needed here. Safe to skip.

## One next step

Open the PDF and read only the first page of the Introduction, down to formula (1.3), the isomorphism ∆(Θ) → M(Θ)<sup>−1</sup>.

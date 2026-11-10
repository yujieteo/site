source: https://arxiv.org/pdf/1904.00190
slogan: Iterating the Mellin integral of the theta function gives a zeta function of several variables that keeps Riemann's functional equation.
basis: the introduction and the main theorem statements

## Before you start

The first page speaks of motives, Frobenius traces and periods of mixed motives. That can raise a small dread: the sense that you need a whole theory before line one. You may let that dread sit there. The working parts are the theta function, the Mellin transform and integrals over a simplex. If you ever liked Riemann's proof of the functional equation, this is the same proof with more variables. Read for the pleasure of seeing it stretch. Finishing can wait.

## The story

Riemann wrote the completed zeta function ξ(s) = π<sup>−s/2</sup> Γ(s/2) ζ(s) as a Mellin transform of the theta function θ(t) = Σ e<sup>−πn²t²</sup>. The symmetry θ(1/t) = tθ(t) then gives ξ(s) = ξ(1 − s). People wanted the same for several variables. The multiple zeta functions of Euler have a meromorphic continuation, but no functional equation is known for them. Brown changes the object. He keeps the theta function and replaces the single integral by an iterated integral over 0 ≤ t<sub>1</sub> ≤ … ≤ t<sub>r</sub>. Iterated integrals reverse under t ↦ 1/t and multiply by shuffles, so the new function inherits a functional equation and shuffle identities for free. The same recipe works for any L-function with a theta function. Its values at integers turn out to include multiple zeta values.

## Main definitions

**Theta function of an L-function.** Let Λ(s) be a completed L-function with functional equation Λ(s) = εΛ(w − s), finitely many poles, all simple and at integers. Its theta function θ is the inverse Mellin transform, so θ(1/t) = ε t<sup>w</sup> θ(t). It splits as θ = θ<sup>∞</sup> + θ<sup>0</sup>, where θ<sup>∞</sup> is a polynomial in t and θ<sup>0</sup> decays exponentially as t → ∞.
- For ζ: θ(t) = Σ over n ∈ ℤ of e<sup>−πn²t²</sup>, θ<sup>∞</sup> = 1, w = 1, ε = 1.
- For a cusp form f of level 1 and weight 2k: θ is f restricted to the imaginary axis, θ<sup>∞</sup> = 0, w = 2k.

**Multiple Λ-function.** For theta functions θ<sub>1</sub>, …, θ<sub>r</sub>, define Λ(θ<sub>1</sub>, …, θ<sub>r</sub>; s<sub>1</sub>, …, s<sub>r</sub>) as the iterated integral from 0 to ∞ of the one-forms θ<sub>i</sub>(t) t<sup>s<sub>i</sub>−1</sup> dt, taken over 0 ≤ t<sub>1</sub> ≤ … ≤ t<sub>r</sub>.
- If every θ<sub>i</sub><sup>∞</sup> = 0, the integral converges for all s<sub>i</sub>.
- Otherwise it diverges at ∞, and Brown regularises it with a tangential base point (a unit tangent vector at ∞).

**Multiple Riemann ξ-function.** ξ(s<sub>1</sub>, …, s<sub>r</sub>) is the multiple Λ-function with every θ<sub>i</sub> equal to the theta function of ζ. For r = 1 it is the classical ξ(s).

**Totally critical values.** Integers n<sub>1</sub>, …, n<sub>r</sub> are totally critical if each n<sub>i</sub> is a critical point for θ<sub>i</sub> in Deligne's sense. For a modular form of weight w these are 1 ≤ n ≤ w − 1.

## Main results

**Theorem (general multiple Λ-functions; Theorem 3.1).** The functions Λ(θ<sub>1</sub>, …, θ<sub>r</sub>; s<sub>1</sub>, …, s<sub>r</sub>) are meromorphic on ℂ<sup>r</sup> with at most simple poles along hyperplanes that depend only on the polynomials θ<sub>i</sub><sup>∞</sup>. They satisfy Λ(θ<sub>1</sub>, …, θ<sub>r</sub>; s<sub>1</sub>, …, s<sub>r</sub>) = ε<sub>1</sub>…ε<sub>r</sub> Λ(θ<sub>r</sub>, …, θ<sub>1</sub>; w<sub>r</sub> − s<sub>r</sub>, …, w<sub>1</sub> − s<sub>1</sub>), and a product of two of them is the sum over shuffles.
- Step 1: cut the path from 0 to ∞ at t = 1. The piece from 1 to ∞ is holomorphic in all s<sub>i</sub>.
- Step 2: map the piece from 0 to 1 onto 1 to ∞ by t ↦ 1/t, using the inversion formula. The path reverses, so the order of the arguments reverses.

**Theorem (multiple ξ; Theorem 1.1).** ξ(s<sub>1</sub>, …, s<sub>r</sub>) is meromorphic on ℂ<sup>r</sup> and satisfies ξ(s<sub>1</sub>, …, s<sub>r</sub>) = ξ(1 − s<sub>r</sub>, …, 1 − s<sub>1</sub>), together with the shuffle product identities. It has simple poles along s<sub>1</sub> + … + s<sub>k</sub> = k and s<sub>k</sub> + … + s<sub>r</sub> = 0 for 1 ≤ k ≤ r. Each residue is, up to sign, a multiple ξ-function of shorter length divided by an explicit product of linear forms.

**Theorem (mixed Tate periods; Theorem 8.1).** Take two variants Λ<sub>±</sub>(s) of ξ(s)ξ(s − 1) with modified Euler factor at 2 and no pole at s = 1. The 2<sup>r</sup> central values π<sup>r</sup> Λ(θ<sub>±</sub>, …, θ<sub>±</sub>; 1, …, 1) are polynomials in log 2 with multiple zeta values as coefficients, homogeneous of weight r. Every multiple zeta value arises this way.
- Step 1: the projective line minus three points has a modular parametrisation.
- Step 2: under it, combinations of dz/z and dz/(1 − z) become theta functions of L-functions, so iterated integrals on the line become multiple Λ-values.

## Note, then ignore

- "Motive" used loosely. The L-function depends only on realisations, and its analytic properties are assumed, not proved. In every worked example the L-function is classical. Safe to skip.
- Not multiple zeta functions. For r > 1 the paper says ξ(s<sub>1</sub>, …, s<sub>r</sub>) and ζ(s<sub>1</sub>, …, s<sub>r</sub>) have no obvious relation. Nor are multiple Λ-functions Dirichlet series in general. Safe to skip.
- Tangential base points. The regularisation subtracts polynomial tails in a fixed combinatorial way. For cusp forms nothing needs subtracting. Safe to skip.
- Self-dual restriction. The exposition assumes the motive is self-dual to keep the functional equation simple. Section 3.3 removes this. Safe to skip.
- Speculation. Section 2.5 hopes that periods of general mixed motives are values of "mixed L-functions". The author marks this as a hope, with a warning for rank above 2. Safe to skip.

## One next step

Open the paper and read Example 2.2, then jump to Example 4.1. You will see Riemann's own formula for ξ(s) come out of the definition.

source: https://www.ias.edu/sites/default/files/video/IAS-ANTSeminar_0.pdf
slogan: Theta series of weight one half become sections of a vector bundle over the moduli of elliptic curves, so their modularity is visible over ℤ[1/m].
basis: the full text

## Before you start

These are 69 seminar slides, and the words "stack" and "gerbe" arrive about a third of the way in. The likely feeling is a small dread that you lack the algebraic geometry to earn the punchline. That feeling is allowed to sit there while you read. If you have ever wanted to know what "weight 1/2" means without a square root of cτ + d, this talk answers it. Slides read fast. Enjoy the first twenty, and treat the rest as optional.

## The story

The series θ(q) = Σ q<sup>n²</sup> = 1 + 2q + 2q<sup>4</sup> + ... has integer coefficients, and as a function of τ it is a modular form of weight 1/2. Can you say "modular of weight 1/2" about the power series itself, with no complex analysis? For integer weight k you can. A modular form is a section of ω<sup>⊗k</sup> on the moduli stack M<sub>1</sub> of elliptic curves, and its q-expansion is its pullback to the Tate curve over ℤ((q)). Two things block the same move for θ. There is no square root of ω on M<sub>1</sub>, and the natural object is not one series but the vector of m series θ<sub>m,ν</sub>, which transforms by the Weil representation. Candelori fixes both with one device: pass to a double cover of M<sub>1</sub> in the stack sense, a μ<sub>2</sub>-gerbe. Mumford's algebraic theta functions then supply the vector bundle.

## Main definitions

**Vector-valued modular form (analytic).** Let m be a positive even integer and ρ<sub>m</sub> the Weil representation of the metaplectic group Mp<sub>2</sub>(ℤ) on ℂ[ℤ/mℤ], attached to the quadratic form x ↦ mx²/2. A form of weight k/2 and index m is a holomorphic f from the upper half-plane to ℂ[ℤ/mℤ] with f(Mτ) = φ<sup>k</sup> ρ<sub>m</sub>(γ) f(τ) for all γ = (M, φ), where φ² = cτ + d.
- Example: the vector (θ<sub>m,ν</sub>)<sub>ν</sub>, with θ<sub>m,ν</sub>(q) = Σ q<sup>n²/2m</sup> over n ≡ ν mod m, has weight 1/2.

**Metaplectic stack.** A μ<sub>2</sub>-gerbe over M<sub>1</sub>. Such gerbes are classified by H<sup>2</sup>(M<sub>1</sub>, μ<sub>2</sub>).
- M<sub>1/2</sub>: the stack of pairs (E/S, (Q, ι)) with E an elliptic curve, Q a line bundle on S and ι an isomorphism Q<sup>⊗2</sup> ≅ ω<sub>E/S</sub>. It carries a tautological line bundle ω<sup>1/2</sup> whose square is the pullback of ω.
- K<sub>m</sub>, the Schrödinger gerbe: the stack of pairs (E/S, W<sub>H</sub>), with W<sub>H</sub> a Schrödinger representation as below. It carries a tautological bundle W<sub>m</sub> of rank m.

**Schrödinger representation.** Put L<sub>m</sub> = O<sub>E</sub>(m·e) ⊗ (Ω<sup>1</sup><sub>E/S</sub>)<sup>⊗m</sup>, and let G(L<sub>m</sub>) be its Heisenberg (theta) group, an extension of E[m] by 𝔾<sub>m</sub>. For a symmetric Lagrangian subgroup H of G(L<sub>m</sub>), W<sub>H</sub> is the locally free O<sub>S</sub>-module of functions f on G(L<sub>m</sub>) with f(hg) = f(g) for h in H and f(λg) = λf(g) for λ in 𝔾<sub>m</sub>.

**Geometric W<sub>m</sub>-valued modular form.** For k ∈ ℤ, a form of weight k/2 is a global section of W<sub>m</sub> ⊗ ω<sup>k/2</sup> over the metaplectic stack built from K<sub>m</sub> and M<sub>1/2</sub> (their product as μ<sub>2</sub>-gerbes over M<sub>1</sub>). All schemes are over ℤ[1/m].

## Main results

**Theorem (the forms live on M<sub>1</sub>; unnumbered in the slides).** Let k be odd. Then the sheaf W<sub>m</sub> ⊗ ω<sup>k/2</sup> descends to a locally free sheaf of rank m over M<sub>1</sub>.
- Why: each factor only exists on a double cover, but the two sign ambiguities cancel when k is odd.
- For even k the slides state that there are no non-zero W<sub>m</sub>-valued forms of weight k/2.

**Theorem (algebraic Eichler-Zagier; unnumbered).** Let J<sub>m</sub> be the sheaf on M<sub>1</sub> that sends E/S to the sections of π<sub>\*</sub>L<sub>m</sub>. There is a canonical isomorphism W<sub>m</sub> ⊗ ω<sup>−1/2</sup> ≅ J<sub>m</sub> of locally free sheaves of rank m over M<sub>1</sub>.
- Step 1: π<sub>\*</sub>L<sub>m</sub> is an irreducible representation of G(L<sub>m</sub>), locally free of rank m.
- Step 2: the Stone-von Neumann-Mackey theorem says such a representation is unique up to a line bundle. The slides give only this one-line proof.

**Claim (theta constants are modular forms).** Evaluating sections of L<sub>m</sub> along the zero section e gives a section θ<sub>null,m</sub> of the dual sheaf J<sub>m</sub><sup>\*</sup>. Its q-expansion is the vector (θ<sub>m,ν</sub>(q))<sub>ν</sub>. By the previous theorem J<sub>m</sub><sup>\*</sup> ≅ W<sub>m</sub><sup>\*</sup> ⊗ ω<sup>1/2</sup>, so θ<sub>null,m</sub> is a W<sub>m</sub><sup>\*</sup>-valued modular form of weight 1/2.

**Claim (analytic comparison).** Over an analytic base both K<sub>m</sub> and M<sub>1/2</sub> become the orbifold quotient of the upper half-plane by Mp<sub>2</sub>(ℤ). There ω<sup>k/2</sup> is given by the cocycle (M, φ) ↦ φ<sup>k</sup> and W<sub>m</sub> by ρ<sub>m</sub>, so the geometric definition recovers the analytic one.

## Note, then ignore

- Only two gerbes. Over an analytic base a metaplectic stack is either the Mp<sub>2</sub>(ℤ) quotient or the trivial one with group SL<sub>2</sub>(ℤ) × μ<sub>2</sub>. This explains why the construction is rigid. Safe to skip on a first reading.
- Dual bundle. The theta constant is valued in W<sub>m</sub><sup>\*</sup>, not W<sub>m</sub>, because it is a functional on sections. Safe to skip.
- Symmetric Lagrangians. The conditions on H (rank m, trivial intersection with 𝔾<sub>m</sub>, compatibility with the involution from [−1]) are there to make automorphisms of W<sub>H</sub> exactly μ<sub>2</sub>. Safe to skip.
- Inverting m. Working over ℤ[1/m] keeps E[m] étale. Safe to skip.
- No proofs. These are slides. The slides do not say where the proofs appear, so treat each statement as an announcement. Safe to skip, but worth knowing.

## One next step

Open the slides and go to the one headed "Modular forms of integral weight". Read it and the next slide on q-expansions, and stop when the Tate curve appears.

source: https://arxiv.org/pdf/2209.07471
slogan: A symmetry of a field theory is a topological theory one dimension up, so you can compute with defects once and reuse the answer everywhere.
basis: the introduction and the main theorem statements

## Before you start

This paper runs to about 75 pages and speaks the language of bordism categories, higher categories and the cobordism hypothesis. You may feel you are not allowed in until you know all of that. The feeling is understandable, and the authors themselves favour exposition over technical detail. If you know what a module over an algebra is, you already hold the main analogy. Enjoy the pictures of sandwiches and quiches first. The rest can come when you want it.

## The story

A group acting on a vector space is the old picture of symmetry. Physicists now meet "symmetries" of quantum field theories that have no inverses, or that act on lines and surfaces instead of points. They show up as topological defects, and relations between them were worked out theory by theory. Freed, Moore and Teleman separate the abstract symmetry from its action, just as an algebra A is separate from its modules. The abstract symmetry is a topological field theory σ in one dimension higher, with a topological boundary ρ. A theory F has the symmetry when F is a sandwich: σ on a slab, with ρ on one face and a boundary F̃ on the other. Defects living away from F̃ belong to (σ, ρ) alone. So you compute their products with topology, once, for all theories with that symmetry.

## Main definitions

**Quiche (Definition 3.1).** An n-dimensional quiche is a pair (σ, ρ), where σ is an (n+1)-dimensional topological field theory and ρ is a topological right boundary theory of σ. It plays the role of an algebra A with its right regular module.
- Finite group G: σ is finite gauge theory for G in n+1 dimensions, and ρ is its regular (Dirichlet) boundary.
- Fusion category Φ, n = 2: σ is the Turaev-Viro theory of Φ.

**Module structure (Definition 3.4).** A (σ, ρ)-module structure on an n-dimensional field theory F is a pair (F̃, θ). Here F̃ is a left boundary theory of σ, usually not topological, and θ is an isomorphism from the sandwich ρ ⊗<sub>σ</sub> F̃ to F.

**Augmentation and quotient (Definitions 3.18 and 3.22).** An augmentation ε is a right boundary theory of σ whose value on a point is an algebra homomorphism from σ(pt) to the unit. It is also called a Neumann boundary. The quotient of F by the symmetry is the sandwich ε ⊗<sub>σ</sub> F̃. Physicists call this gauging.

**Defects (Definition 4.1).** A (σ, ρ)-defect is a defect in the topological theory (σ, ρ). The isomorphism θ carries it to a topological defect in F.

## Main results

The paper favours examples over full proofs. Its framework rests on the cobordism hypothesis, and several statements are sketched.

**Claim (not every σ can act; Remark 3.3(4)).** A topological theory can serve in a quiche only if it has a nonzero topological boundary theory. The authors cite a theorem of Freed and Teleman that most fully local three-dimensional Reshetikhin-Turaev theories have none. So those theories cannot act as symmetries of a two-dimensional theory.

**Theorem (duality swaps Dirichlet and Neumann; Proposition 3.36).** Let σ be the finite homotopy theory built from a π-finite spectrum A, and let σ<sup>∨</sup> be the one built from a shift of its character dual. Let ζ be the canonical domain wall between them. Then the Dirichlet boundary of σ<sup>∨</sup>, composed with ζ, is isomorphic to the Neumann boundary ε of σ as a right σ-module.
- Step 1: each piece comes from a map of π-finite spaces, and composing them means taking a homotopy fibre product.
- Step 2: compute that fibre product. Consequence: the quotient of F carries the dual symmetry.

**Claim (quotients do not always exist; Example 3.21).** Take the finite homotopy theory of a π-finite space X, twisted by a cocycle λ with class [λ] in H<sup>n+1</sup>(X; ℂ<sup>×</sup>). The Neumann boundary built from the identity map of X exists exactly when [λ] = 0. So a Dijkgraaf-Witten theory with nontrivial twist has no augmentation, and you cannot gauge.

**Claim (duality defects; eqns. (5.23) and (5.25)).** Suppose F is isomorphic to its own quotient through φ. Let δ be the Dirichlet-to-Neumann wall and set Δ = φ ∘ δ. Then Δ<sup>\*</sup> ∘ Δ = δ<sup>\*</sup> ∘ δ, which is the quotient defect. The argument assumes a 2-category of theories and walls.
- Example: for the two-dimensional Ising model, with ψ the ℤ/2 defect, this gives Δ<sup>2</sup> = 1 + ψ.

## Note, then ignore

- Wick rotation. All theories here are Euclidean, and unitarity is left out. It does not affect the definitions, so skip it.
- Once-categorified theories. To cover infinite or Lie group symmetry, σ may be less than a full (n+1)-dimensional theory. Almost all examples use a full theory. Safe to skip.
- Left versus right modules. The side conventions mirror those for algebras and bimodules. Safe to skip.
- Codimension of compositions. The authors insist that composing two codimension ℓ defects gives a codimension ℓ defect. It corrects a common way of speaking and is safe to skip.
- Appendix A. It builds topological theories from π-finite spaces by a finite path integral. Use it as a reference when an example needs it.

## One next step

Open the paper and look at Figure 1 on page 2, then read the paragraph that starts "Our starting point here is an old idea".

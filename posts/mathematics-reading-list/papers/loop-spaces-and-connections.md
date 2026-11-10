source: https://arxiv.org/pdf/1002.3636
slogan: Sheaves on the derived loop space that respect loop rotation are sheaves on the original space with a flat connection.
basis: the introduction and the main theorem statements

## Before you start

The introduction alone is seventeen pages and it speaks in ∞-categories, Koszul duality and the Hopf fibration. You may feel slow, or feel that everyone else already knows what a derived loop space is. That is a normal response to this paper, and it does not need fixing. If you have ever wondered why the de Rham differential squares to zero, here it comes from a circle rotating. Hold on to that one picture and enjoy it. Reading to the end is a bonus.

## The story

In topology the free loop space LX = Map(S<sup>1</sup>, X) carries a circle action by rotation, and its fixed points are the constant loops. In algebra, Hochschild homology of functions on X is the algebra of differential forms, and the cyclic structure on it is the de Rham differential. People read this as: forms are functions on loops, and d is rotation. Ben-Zvi and Nadler make the statement literal in derived algebraic geometry, where Map(S<sup>1</sup>, X) exists. For a scheme X the loop space is the odd tangent bundle, and rotation is d. Then they pass from functions to sheaves. A sheaf on LX that is equivariant for rotation is a module over forms with d adjoined. After Koszul duality that is a D-module. Relax the circle to the free monoid ΩS<sup>2</sup>, and you get connections with curvature.

## Main definitions

**Derived loop space.** For a derived stack X over a ℚ-algebra k, LX = Map(S<sup>1</sup>, X), where the circle is the constant stack S<sup>1</sup> = Bℤ. The group S<sup>1</sup> acts on LX by rotating the source.
- Affine case: for X = Spec R, LX is Spec of the Hochschild chains R ⊗<sub>R⊗R</sub> R, the derived self-intersection of the diagonal.
- Stacks: L(BG) = G/G, the adjoint quotient.

**Odd tangent bundle.** T<sub>X</sub>[−1] = Spec Sym(Ω<sub>X</sub>[1]), with Ω<sub>X</sub> the cotangent complex. For smooth X its functions are the differential forms Ω<sub>X</sub><sup>−•</sup>, placed in non-positive degrees. It equals Map(B𝔾<sub>a</sub>, X).

**Affinization.** The affinization of a derived stack is the universal affine derived stack that receives a map from it. The affinization of S<sup>1</sup> is B𝔾<sub>a</sub>, since functions on both are k[η]/(η<sup>2</sup>) with η in degree 1.

**De Rham modules.** Ω<sub>X</sub><sup>−•</sup>[d] is the sheaf of dg algebras obtained from forms by adjoining an element d of degree −1 with [d, ω] = dω and d<sup>2</sup> = 0. A module over it is a de Rham module.
- Example: a sheaf E with flat connection ∇ gives the module E ⊗ Ω<sub>X</sub><sup>−•</sup>, with d acting by ∇ on E and by the de Rham differential on forms.

## Main results

**Proposition (loops are odd tangents; Propositions 1.1 and 1.2).** Let X be a derived scheme over k, quasi-compact with affine diagonal. The map S<sup>1</sup> → B𝔾<sub>a</sub> induces an equivalence T<sub>X</sub>[−1] = Map(B𝔾<sub>a</sub>, X) ≃ LX. Under it, loop rotation becomes translation by B𝔾<sub>a</sub>, and the resulting vector field of degree −1 is the de Rham differential.
- Consequence: a Hochschild–Kostant–Rosenberg equivalence between Hochschild chains of 𝒪<sub>X</sub> and Sym(Ω<sub>X</sub>[1]).

**Theorem (equivariant sheaves; Theorem 1.5).** For a smooth scheme X over k there is a canonical equivalence between S<sup>1</sup>-equivariant quasicoherent sheaves on LX and Ω<sub>X</sub><sup>−•</sup>[d]-modules. A graded version holds for B𝔾<sub>a</sub> ⋊ 𝔾<sub>m</sub>-equivariant sheaves.
- Step 1: affinization replaces the S<sup>1</sup>-action by a B𝔾<sub>a</sub>-action.
- Step 2: formality of cochains on the circle, tracked by the 𝔾<sub>m</sub>-weights, shows that this action is determined by d alone (Theorem 1.3).

**Corollary (D-modules; Corollary 1.15).** For a smooth underived scheme X, take sheaves on LX whose pushforward to X is perfect, with B𝔾<sub>a</sub> ⋊ 𝔾<sub>m</sub>-equivariance. After periodic localisation, that is inverting the degree 2 generator u of H<sup>\*</sup>(BS<sup>1</sup>), this category is equivalent to perfect D<sub>X</sub>-modules.
- Before localisation one gets modules over the Rees algebra of D<sub>X</sub>, which the authors match with Simpson's Hodge filtration (Corollaries 1.14 and 1.16).

**Theorem (curved version; Theorem 1.10).** For a derived scheme X, ΩS<sup>2</sup>-equivariant sheaves on LX are equivalent to modules over Ω<sub>X</sub><sup>−•</sup> ⊗ k[u]/(u<sup>2</sup>) with differential ω ↦ dω ⊗ u. For smooth X these are modules where d acts and d<sup>2</sup> need not vanish (Corollary 1.18).
- Reading: a sheaf with any connection gives such an object, and the leftover ΩS<sup>3</sup>-equivariance is multiplication by the curvature.

## Note, then ignore

- Characteristic zero. Everything is over a ℚ-algebra, because affinization and formality are rational homotopy theory. Safe to accept and skip.
- Finiteness in Koszul duality. Statements switch between complete modules and perfect ones. This is the usual price of Koszul duality and does not change the picture.
- Shears of grading. Cohomological degree and 𝔾<sub>m</sub>-weight can be traded against each other, which explains differing conventions. Safe to skip.
- Stacks are harder. Loops are not local in the étale topology, so for stacks the results hold for formal ("small") loops. That is Section 6, and it can wait.
- Two-paper series. The representation theory applications are in the sequel. Nothing here depends on them.

## One next step

Open the paper at Section 1.1 and read only the paragraph that models the circle as two points joined by two segments. It derives the self-intersection Δ ∩ Δ in a few sentences.

source: https://arxiv.org/pdf/2503.20906
slogan: Intersect shifted Lagrangians until the shift reaches zero, then apply Floer theory, and you get a candidate n-category of Fukaya type.
basis: the introduction and the main theorem statements

## Before you start

The title says "speculations", and the paper mixes Floer theory, shifted symplectic stacks and 3D mirror symmetry. The likely feeling is unease: you cannot tell which statements are proved, and you may not know all three fields. That unease is reasonable, and the authors share it openly. If you want a clear picture of what a Fukaya category is for, the first five pages give one. Enjoy the sketch. Nobody can finish this theory yet, the authors included.

## The story

The Fukaya category of a symplectic manifold has Lagrangians as objects and Floer cohomology as morphisms. Physicists want a 2-category of the same kind for the 3-dimensional A-model, and no definition has general acceptance. Pascaleff and Sibilla propose a recipe. Shifted symplectic geometry says that two Lagrangians in an n-shifted symplectic stack intersect in an (n−1)-shifted symplectic stack. So start with an (n−1)-shifted target, take Lagrangians as objects, and intersect again and again. Each step lowers the shift by one and gives one more layer of morphisms. At shift zero, stop and use Floer theory. The foundations do not exist yet. The authors therefore test the recipe on examples: a point, a shifted cotangent bundle, and the coadjoint quotient [𝔤\*/G] of a compact Lie group G.

## Main definitions

**Shifted symplectic stack and Lagrangian.** An n-shifted symplectic stack X carries a closed 2-form of degree n that identifies the tangent complex with the shifted cotangent complex. A map L → X can carry an n-shifted Lagrangian structure. The derived fibre product L<sub>0</sub> ×<sub>X</sub> L<sub>1</sub> of two Lagrangians is (n−1)-shifted symplectic.
- Here everything is meant in derived C<sup>∞</sup> geometry, not algebraic geometry.

**Higher Fukaya category nFuk(X) (axioms, not a construction).** For X an (n−1)-shifted symplectic stack, nFuk(X) is an (∞, n)-category whose objects are (n−1)-shifted Lagrangians L → X with extra data.
- Base case: 1Fuk(X) = Fuk(X), the usual Fukaya category of a symplectic manifold.
- Induction: Hom(L<sub>0</sub>, L<sub>1</sub>) = (n−1)Fuk(L<sub>0</sub> ×<sub>X</sub> L<sub>1</sub>).

**Shifted point and shifted cotangent stack.** The point with the zero form is n-shifted symplectic for every n, written pt[n]. For a manifold M, T\*[n]M is the cotangent bundle with fibres placed in degree n.

## Main results

**Claim (the point; Section 3).** Lagrangians in pt[1] are 0-shifted symplectic stacks, so ordinary symplectic manifolds are objects of 2Fuk(pt[1]). The Hom-category from M<sub>0</sub> to M<sub>1</sub> is Fuk(M̄<sub>0</sub> × M<sub>1</sub>), where the bar reverses the symplectic form. This is the Weinstein 2-category of symplectic manifolds, which is itself still under construction.

**Theorem (symplectic fibrations; Theorem 4.2, with a sketch of proof).** Let π : E → M be a submersion of smooth manifolds and s the zero section of T\*[1]M. Then 1-shifted Lagrangian structures on s∘π : E → T\*[1]M are equivalent to closed 2-forms on E that are non-degenerate on the fibres of π.
- Step 1: compare the tangent complex of E with the relative tangent complex of s∘π.
- Step 2: read the Lagrangian condition as fibrewise non-degeneracy.

**Theorem (fibrations with singularities; Theorem 4.8, with a sketch of proof).** If π : E → M has critical points and a closed 2-form τ on E is symplectic on ker(Dπ), then τ induces a Lagrangian structure on a map Sing(π) → T\*[1]M. Here Sing(π) is a derived thickening of E at the critical points. Lefschetz fibrations are the motivating case.

**Conjecture (local systems and schobers; Conjectures 4.6 and 4.11).** The 2-category of local systems of categories on M embeds fully faithfully in 2Fuk(T\*[1]M). For a stratified M, so does the 2-category of schobers.

## Note, then ignore

- Brane structures. Objects need "extra data" such as gradings and Pin structures, and the higher versions are not yet defined. Safe to skip on a first reading.
- C<sup>∞</sup> versus algebraic. The authors quote algebraic theorems and assume they carry over to derived smooth geometry. They say the results are, strictly, only analogous. Safe to skip.
- Shift mismatch. Most work on 3D mirror symmetry uses 0-shifted holomorphic symplectic targets, while this paper uses 1-shifted smooth ones. The examples are the authors' answer. Safe to skip.
- Teleman's action. Section 5 argues that the action of H<sub>\*</sub><sup>G</sup>(ΩG) on equivariant quantum cohomology of a Hamiltonian G-manifold follows from formal steps in 3Fuk(pt[2]). This is an argument, not a new proof. Safe to skip.
- Twisted zero sections. A closed 2-form β on M changes the Lagrangian structure on the zero section, and the Homs become Fukaya categories of magnetic cotangent bundles. Safe to skip.

## One next step

Open the paper at Section 2 and read only the two axioms for nFuk(X), then Example 2.1 just below them.

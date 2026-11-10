source: https://arxiv.org/pdf/2410.23115
slogan: Refined TC⁻ of rational K-theory is a ring of functions near the prismatic rays, so a rational input keeps information at every prime.
basis: the introduction and the main theorem statements

## Before you start

The first page already uses Efimov's rigidity theorem, localising motives, nuclear modules and analytic stacks. The likely feeling is the sense of standing outside a conversation between a few specialists. You may feel that, and nothing is wrong with you if you do. If you would like to see a picture of where p-adic information hides inside ℚ, Figure 1 on page 6 is that picture. Enjoy the picture and the questions in Section 1.2. Understanding the proofs is optional.

## The story

Topological Hochschild homology (THH) and its fixed points TC⁻ produce good cohomology theories for p-adic rings, such as prismatic cohomology. Feed them a rational ring and the output is rational too: THH(ℚ) is just ℚ. So nothing torsion survives, and no comparison with étale cohomology mod p is possible. Efimov proved that the category of localising motives is rigid. Efimov and Scholze noticed that any such invariant then factors through a "refined" version with values in nuclear objects, and the refinement remembers much more. The trouble is computing it. Meyer and Wagner give a recipe: approximate the rational ring by quotients such as 𝕊/m, and remove their contribution. For K-theory spectra ku and KU as base, the answer is a ring of overconvergent functions.

## Main definitions

**Rigid category.** A presentable stable symmetric monoidal ∞-category whose unit is compact and which is generated under colimits by sequential colimits along trace-class maps. A map X → Y is trace-class if it comes from a map 1 → X<sup>∨</sup> ⊗ Y.

**Refined invariant T<sup>ref</sup>.** Let T be a symmetric monoidal localising invariant from motives over E to D. Since the category of motives is rigid, T factors uniquely through the rigidification D<sup>rig</sup> of D. That factorisation is T<sup>ref</sup>.
- Good case: if D is locally rigid, D<sup>rig</sup> is the category of nuclear objects in Ind(D).
- Refined TC⁻: for a complex orientable base k, apply this to TC⁻(−/k), with values in nuclear modules over the S<sup>1</sup>-fixed points of k.

**q-Hodge complex.** The even homotopy of TC⁻((ku ⊗ 𝕊/m)/ku) is a q-deformation of the Hodge filtration on the derived q-de Rham complex of ℤ/m over ℤ. Inverting (q−1) along the filtration and completing gives the q-Hodge complex q-Hdg, which is the KU version.

**Killing a pro-idempotent.** Given a tower of algebras that is idempotent as a pro-object, one forms the cofibre of its dual into the unit. The result is an idempotent nuclear algebra: the "functions away from" the tower.

## Main results

**Theorem (recipe; Theorem 1.5 = 2.21).** Let E → X be a strongly continuous symmetric monoidal functor of rigid categories, with X smooth and proper over E and D locally rigid. Suppose V<sub>0</sub> ← V<sub>1</sub> ← … is a tower of dualisable E<sub>1</sub>-algebras in X satisfying a factorisation condition on V<sub>r+1</sub> ⊗ V<sub>r</sub> → V<sub>r</sub> ⊗ V<sub>r</sub>. Let U ⊂ X be the objects that receive no maps from V<sub>0</sub>. Then there is a cofibre sequence: the ind-system of duals of T(Mod over V<sub>r</sub>) → T(X) → T<sup>ref</sup>(U).
- Main case: Burklund's E<sub>1</sub>-structures on quotients 1/v<sup>n</sup> give such towers.
- Example: THH<sup>ref</sup>(𝕊[1/p]) is the cofibre of the ind-system of duals of THH(𝕊/p<sup>α</sup>) mapping to THH(𝕊).

**Theorem (answer over ku and KU; Theorem 1.9 = 3.14).** TC⁻<sup>,ref</sup>((ku ⊗ ℚ)/ku) and TC⁻<sup>,ref</sup>((KU ⊗ ℚ)/KU) are concentrated in even degrees. The KU version has even homotopy A<sub>KU</sub>[β<sup>±1</sup>], where A<sub>KU</sub> is the idempotent nuclear ℤ[[q−1]]-algebra obtained by killing the pro-system of q-Hodge complexes of ℤ/m. The ku version is the same with the q-Hodge filtrations.

**Theorem (geometric description; Theorem 1.10).** Work p-completely. Let X be the adic spectrum of ℤ<sub>p</sub>[[q−1]] minus the point p = 0, q = 1. Let Z be the union of the locus p = 0 and the loci where q is a primitive p<sup>n</sup>-th root of unity, for all n ≥ 0. Then π<sub>0</sub> of refined TC⁻ of KU<sub>p</sub> ⊗ ℚ over KU<sub>p</sub> is the ring of overconvergent functions on Z. This confirms a conjecture of Scholze and Efimov.
- Consequence: this ring is non-zero after p-completion, so THH<sup>ref</sup>(ℚ) has non-trivial p-complete part for every prime p.
- Theorem 1.11 gives the graded analogue for ku, with the p<sup>n</sup>-series of the formal group of ku in place of roots of unity.

## Note, then ignore

- Choice of base. The refinement depends heavily on the base category E. The authors call this a feature. Safe to skip at first.
- Set theory. Applying Ind to large categories is not allowed, but nuclear objects avoid the problem. Skip.
- The adic unit circle. For ku the grading is encoded by an action of a circle of units of norm 1, not the usual multiplicative group. Skip until Section 4.2.
- E<sub>1</sub>-structures on 𝕊/m. These exist only for suitable m, so the authors index by a cofinal set of integers. Skip.
- Versions. The link gives arXiv version 4, of October 2025. Theorem numbers may differ in earlier versions. Skip.

## One next step

Open the PDF at page 6, look at Figure 1, and read the two sentences under it that deduce that THH<sup>ref</sup>(ℚ) is non-zero p-adically.

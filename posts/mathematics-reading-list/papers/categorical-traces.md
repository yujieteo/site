source: https://chenhi.github.io/notes/traces.pdf
slogan: The trace of a matrix makes sense for a category of sheaves, and there it becomes sheaves on a loop space.
basis: the introduction and the main theorem statements

## Before you start

These are 20 pages of talk notes that move fast: dg categories, ∞-categories, ind-coherent sheaves and local Langlands all appear, often without definitions. The likely feeling is shame at not knowing the background. That feeling makes sense here, because the notes assume a room of specialists. You can have it and still read. What you may want is one clear idea: why Hochschild homology is a trace. The first two pages give that with ordinary algebras only. Enjoy those, and treat the rest as a map of where the idea goes.

## The story

For an algebra A and a bimodule M, the trace is M modulo the relations am = ma. Its derived version is Hochschild homology. People wanted the same construction one level up, for a monoidal category such as the affine Hecke category, because its trace should recover the affine Hecke algebra and its modules. The block is that a trace of categories is a colimit of categories, and such colimits are hard to compute. The unblocking idea is to define the trace abstractly, for any dualizable object in a symmetric monoidal category, and then compute in geometry. For sheaves on a stack X the answer is sheaves on the derived loop space of X. The picture: bend a line into a circle, and an event on the circle is the endomorphism.

## Main definitions

**Dualizable object and trace.** Let (U, ⊗, 1) be a symmetric monoidal category. An object X has a dual X<sup>∨</sup> if there are maps η : 1 → X<sup>∨</sup> ⊗ X and ε : X ⊗ X<sup>∨</sup> → 1 that satisfy the two zigzag ("Zorro") identities. For an endomorphism φ of a dualizable X, the trace tr(X, φ) is the composite ε ∘ (φ ⊗ id) ∘ η, an element of End(1).
- U = chain complexes: tr is the alternating sum of the usual traces on cohomology.
- U = dg categories: tr of Mod(A) with a bimodule M is the Hochschild homology HH(A, M).

**Derived loop space.** For a derived stack X, LX = Map(S<sup>1</sup>, X) = X ×<sub>X × X</sub> X, the derived self-intersection of the diagonal. For a self-map φ, the twisted version L<sub>φ</sub>X is the derived intersection of the graph of φ with the diagonal.

**Character.** Let U be a 2-category. A right-dualizable morphism from (1, id) to (X, φ), with a commuting structure, induces a map tr(1) → tr(X, φ). The image of the unit is the character [x, η] of the corresponding "finite-dimensional element" x of X.
- For a perfect A-module M, [M] lies in HH<sub>0</sub>(A) = A/[A, A].
- For a vector bundle E on a smooth scheme X, the notes say [E] is the Chern character in ⊕ H<sup>p</sup>(X, Ω<sup>p</sup>).

**Vertical and horizontal trace.** A monoidal category A has two traces. The vertical (1-categorical) trace HH(A) treats A as a plain category and gives a chain complex. The horizontal (2-categorical) trace Tr(A) treats A as an algebra among categories and gives a category.

## Main results

**Theorem (the two traces are compatible; Theorem 1.2.5, credited to Gaitsgory, Kazhdan, Rozenblyum, Varshavsky and to Campbell, Ponto).** Let A be a rigid monoidal category and M an A-module category. Then Hom<sub>Tr(A)</sub>([A], [M]) ≃ HH(M), as modules over End([A]) ≃ HH(A). The notes state this without proof.

**Theorem (trace of quasicoherent sheaves; Proposition 2.3.1 and Corollary 2.3.3, after Ben-Zvi, Francis, Nadler).** For perfect stacks X<sub>1</sub>, X<sub>2</sub>, Y, QC(X<sub>1</sub>) ⊗<sub>QC(Y)</sub> QC(X<sub>2</sub>) ≃ QC(X<sub>1</sub> ×<sub>Y</sub> X<sub>2</sub>). So for a perfect stack X with a self-map φ, the horizontal trace of (QC(X), φ\*) is QC(L<sub>φ</sub>X).
- Step 1: write the relative tensor product as a colimit, then pass to right adjoints to turn it into a limit.
- Step 2: identify both sides as modules for the same monad on QC(X<sub>1</sub> × X<sub>2</sub>), by base change.

**Theorem (trace of a convolution category; Theorem 2.4.7, credited to Ben-Zvi, Nadler, Preygel).** Let Z = X ×<sub>Y</sub> X with compatible proper self-maps φ. Then Tr(QC<sup>!</sup>(Z), φ\*) ≃ QC<sup>!</sup>(L<sub>φ</sub>Y) with a singular support condition Λ<sub>X/Y</sub>. The character map is pull-then-push along Z ← LY ×<sub>Y</sub> X → LY. The hypotheses on X and Y (smooth, X proper over Y) are given earlier in the section. I did not check them against the original paper.

**Theorem (affine Hecke category; Theorem 3.1.1, credited to Ben-Zvi, Chen, Helm, Nadler).** Let H be the affine Hecke category with its Frobenius action q\*, and assume q is not a root of unity. Then HH(H, q\*) ≃ H<sub>q</sub>, the affine Hecke algebra, and Tr(H, q\*) ≃ Coh(L<sub>q</sub>(N/G)) for the nilpotent cone N. The character of H is the coherent Springer sheaf S<sub>q</sub>, with End(S<sub>q</sub>) ≃ H<sub>q</sub>, so Mod(H<sub>q</sub>) embeds in QC<sup>!</sup>(L<sub>q</sub>(N/G)).

## Note, then ignore

- QC versus QC<sup>!</sup>. Ind-coherent sheaves replace quasicoherent ones so that the unit of a convolution category is compact and the category is rigid. Safe to skip on a first reading.
- Singular support. The condition Λ<sub>X/Y</sub> records which ind-coherent sheaves arise. The notes themselves skip its definition. Safe to skip.
- dg categories versus stable ∞-categories. The notes switch from one to the other when constructions become abstract. Safe to skip.
- S<sup>1</sup>-action. The trace of the identity carries a circle action, mentioned once and not used. Safe to skip.
- Informal status. Section 3.2 treats B(LG) as a stack "by pretending", and a footnote admits one point is unchecked. Read it as a sketch. Safe to skip.

## One next step

Open the notes at page 1 and read up to Example 0.0.1, where the trace of a bimodule map is the trace of a matrix.

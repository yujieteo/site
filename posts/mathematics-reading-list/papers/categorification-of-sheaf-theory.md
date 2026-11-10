source: https://arxiv.org/pdf/2511.09553
slogan: Any sheaf theory with six functors climbs to sheaves of n-categories, and that ladder hands you a topological field theory for free.
basis: the introduction and the main theorem statements

## Before you start

This note is 13 pages, yet every line leans on (∞, n)-categories, correspondences and presentable higher categories. The likely feeling is shame at not owning that background. It is fine to feel that. The author himself describes most objects informally in the introduction. If you want to see why field theories and sheaves keep meeting, this is a short route. Read for the pleasure of the pattern. Finishing can wait.

## The story

For quasi-coherent sheaves on a good stack X, there is a tidy formula: integrate the category QCoh(X) over a manifold M by factorisation homology and you get QCoh(Maps(M, X)). The engine is a Künneth formula, QCoh(Y) ⊗<sub>QCoh(S)</sub> QCoh(Z) = QCoh(Y ×<sub>S</sub> Z). For other sheaf theories the engine breaks. For ind-coherent sheaves the formula already fails for M a circle and X the affine line. Stefanich changes the target. He stops asking for a tensor product of categories and asks for a field theory with values in presentable higher categories. To build it he categorifies the sheaf theory itself: from Sh he makes 2Sh, 3Sh and so on, each a theory of sheaves of higher categories. Base change in the higher theory then does the job that Künneth did.

## Main definitions

**Category of correspondences Corr(C).** For an ∞-category C with finite limits, Corr(C) has the objects of C. A morphism from X to Y is a span X ← S → Y. Spans compose by fibre product, and the tensor product is X × Y.
- Higher version: nCorr(C) has the same objects, and its morphisms from X to Y form (n−1)Corr of the category of objects of C under X and over Y.

**Presentable six-functor formalism.** A lax symmetric monoidal functor Sh : Corr(C) → Pr, where Pr is the category of presentable ∞-categories and colimit-preserving functors. It packages pullback f\*, pushforward f<sub>!</sub>, base change and the exterior product. The right adjoints exist automatically in the presentable setting.

**Presentable (∞, n)-category.** Roughly, an (∞, n)-category with colimits whose Hom objects are presentable (∞, n−1)-categories. All of them form a symmetric monoidal (∞, n+1)-category nPr.

**The categorified theory nSh.** A functor from nCorr(C) that extends Sh. Inductively, (n+1)Sh(X) is freely generated under weighted colimits by objects nSh(Y/X), one for each map Y → X.
- Homs: Hom(nSh(Y/X), nSh(Z/X)) = nSh(Y ×<sub>X</sub> Z).

## Main results

**Theorem (categorified formalisms exist; Theorem 1.5).** Let C be an ∞-category with finite limits and Sh : Corr(C) → Pr a lax symmetric monoidal functor. Then there are presentable symmetric monoidal (∞, n+1)-categories nPr<sub>Sh</sub>, with the endomorphisms of the unit of nPr<sub>Sh</sub> equal to (n−1)Pr<sub>Sh</sub> for n ≥ 2, and symmetric monoidal functors nSh<sup>♯</sup> : nCorr(C) → nPr<sub>Sh</sub> that are compatible as n varies and recover Sh at the bottom.
- Step 1: give nCorr(C) the structure of a Corr(C)-enriched n-category (Section 2).
- Step 2: build nSh(X) from Sh by induction on n (Section 3).

**Theorem (field theories from a sheaf theory; Theorem 1.2).** With C and Sh as above, for every object X of C and every n ≥ 0 there is a symmetric monoidal functor from a cobordism category to (n+1)Pr<sub>Sh</sub> whose value on a closed n-manifold M has underlying ∞-category Sh(Maps(M, X)).
- Step 1: (n+1)Sh is a functor out of higher correspondences, by Theorem 1.5.
- Step 2: a general result of Calaque, Haugseng and Scheimbauer builds field theories valued in correspondences. Compose the two.

**Theorem (the quasi-coherent case; Theorem 1.1).** For every algebraic stack X over a base ring k and every n ≥ 0, there is such a field theory with value QCoh(Maps(M, X)) on closed n-manifolds M. No condition on X is needed.

**Corollary (Rozansky–Witten flavour; Corollary 1.3).** For X a smooth scheme over a field of characteristic zero, the IndCoh theory sends the circle to IndCoh(Maps(S<sup>1</sup>, X)) = QCoh(T\*[2]X).

## Note, then ignore

- Exotic targets. The theories land in nPr<sub>Sh</sub>, which can differ from nPr. A right adjoint Γ brings you back to nPr, at the cost of the symmetric monoidal structure. Safe to skip on a first reading.
- Presentability of Homs. A footnote warns that Homs of presentable (∞, n)-categories are not always presentable when n > 2, so the official definition is more careful. Safe to skip.
- Cobordism indexing. The source of the field theory is printed as nCob in Theorem 1.1 and (n+1)Cob in Theorem 1.2. I could not settle which is meant, so the statement above leaves it open. Safe to skip.
- Affineness. When X is good, (n+1)QCoh(X) is modules over QCoh(X), and the new theory matches the Morita one. This can fail outside characteristic zero. Safe to skip.
- Conventions. "Category" means ∞-category and "scheme" means spectral scheme throughout. Safe to skip.

## One next step

Open the paper and read only the first page and a half of the introduction, up to the sentence saying the IndCoh formula fails for the circle and the affine line.

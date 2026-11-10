source: https://arxiv.org/pdf/2506.11240
slogan: The Koszul sign rule is one of a family of twisted gradings, each classified by a map of spectra and detected by its braiding.
basis: the abstract and introduction

## Before you start

This paper runs to about 80 pages and its second half lives in chromatic homotopy theory, with Morava E-theory at every height. The likely feeling is fear of being too slow for it. You are allowed that fear. The first three pages need only graded vector spaces and the sign rule. If you ever wondered where the sign in a ⊗ b = (−1)<sup>|a||b|</sup> b ⊗ a comes from, the answer starts there. Read those pages for fun. The rest is optional.

## The story

Graded vector spaces have a tensor product, the Day convolution: degree m of A ⊗ B is the sum of A<sub>i</sub> ⊗ B<sub>j</sub> with i + j = m. Homology wants a different symmetry on the same tensor product, the Koszul sign. So one monoidal category carries two symmetric structures. Keidar and Ragimov ask for all of them, for objects of any presentably symmetric monoidal ∞-category C graded by a commutative monoid M. Their idea is to treat the graded category as a Thom construction. A map from M to the invertible C-linear categories, with a chosen trivialisation as an E<sub>1</sub>-map, twists the symmetry and leaves the tensor product alone. For ℤ-graded vector spaces over a field of characteristic not 2 this gives exactly two answers: the plain one and the Koszul one.

## Main definitions

**Twisted M-graded category.** A symmetric monoidal structure on Fun(M, C), together with an E<sub>1</sub>-monoidal isomorphism to the Day convolution. Only the braiding is allowed to change.

**Thom construction Gr<sup>φ</sup><sub>M</sub>C.** Let Mod<sub>C</sub><sup>×</sup> be the Picard spectrum of invertible C-linear presentable categories. Given a map φ : M → Mod<sub>C</sub><sup>×</sup> with an E<sub>1</sub>-nullhomotopy, take the colimit of φ over M. The result is a commutative C-algebra in presentable categories with an E<sub>1</sub>-isomorphism to Gr<sub>M</sub>C.
- Example: the composite ℤ → ℤ/2 → Σ<sup>2</sup>ℤ/2 → Σ<sup>2</sup>k<sup>×</sup> built from Sq<sup>2</sup> and −1 gives Koszul-graded vector spaces. Through ℤ/2 it gives super vector spaces.

**Braiding and braiding character.** For an object X, the symmetric group Σ<sub>m</sub> acts on X<sup>⊗m</sup>. This family of actions is the braiding of X. For dualisable X, the characters of these actions form the braiding character.
- Example: for the line in degree 1 of Koszul-graded vector spaces, Σ<sub>m</sub> acts by the sign representation.

## Main results

**Theorem (classification; Theorem A, stated as Theorem 2.2.9).** Let A be a discrete abelian group and C a semiadditive presentably symmetric monoidal category. Then φ ↦ Gr<sup>φ</sup><sub>A</sub>C is an equivalence between the space of maps A → Mod<sub>C</sub><sup>×</sup> with an E<sub>1</sub>-nullhomotopy and the space of twisted A-graded categories of objects in C.
- Case A = ℤ: the space is Map(τ<sub>≥1</sub>𝕊, C<sup>×</sup>). If the unit of C is discrete it is the set of group maps ℤ/2 → (units of the unit).
- Case of a field k: two structures if the characteristic is not 2, one if it is 2.

**Theorem (character from dimension; Theorem B, stated as Theorem 3.3.11).** Let D be presentably symmetric monoidal and W a dualisable object. The braiding character of W depends only on the monoidal dimension dim W, taken with the actions of all finite cyclic groups C<sub>k</sub> that restrict from its circle action.

**Proposition (the oriented extension; Proposition 1.3.8).** Let C be (𝕊<sub>(p)</sub>, n)-oriented. There is a twisted graded category C[ω], graded by the Pontryagin dual of the p-local stable stem π<sub>n+1</sub>, which is a Galois extension of C. Its braiding is trivial exactly when Mod<sub>C</sub> is (𝕊<sub>(p)</sub>, n+1)-orientable.
- Example: for C = Vect<sub>k</sub> at p = 2 this extension is super vector spaces, and its braiding is non-trivial.

**Theorem (Morava E-theory; Theorem C, stated as Theorem 5.3.44).** In the oriented extension of T(n)-local E<sub>n</sub>-modules, the braiding character of E<sub>n</sub> in degree α equals that of E<sub>n</sub> itself, except when p = 2, n ≤ 2 and α is not 2-divisible. In that case it equals that of the suspension ΣE<sub>n</sub>.

## Note, then ignore

- Size of Mod<sub>C</sub>. The category of C-linear categories is too large to be presentable, so the authors cut it off at a large cardinal. Safe to skip on a first reading.
- Homotopy graded categories. A weaker variant asks for the E<sub>1</sub>-isomorphism only on a truncated homotopy category. It is needed for the oriented extension. Safe to skip at first.
- Two trivialisations. Over super vector spaces the Koszul and plain ℤ-gradings agree as symmetric monoidal categories but differ in their chosen E<sub>1</sub>-isomorphism. Safe to skip.
- Independent work. Theorem B was also found by Maxime Ramzi. Safe to skip.
- Orientability conjecture. Theorem C is compatible with a conjecture of Barthel, Carmeli, Schlank and Yanovski. It does not prove it. Safe to skip.

## One next step

Open the paper and read only Example 1.0.2 and Example 1.0.3 on page 3, where the Koszul sign rule appears as a map of spectra.

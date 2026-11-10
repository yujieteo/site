source: https://guests.mpim-bonn.mpg.de/ferdinand/q-Thesis.pdf
slogan: Once the q-de Rham complex carries a q-deformed Hodge filtration, it descends to the Habiro ring and so makes sense near every root of unity.
basis: the introduction and the main theorem statements

## Before you start

This is a 230-page thesis that uses prismatic cohomology, topological Hochschild homology and genuine equivariant homotopy theory. The likely feeling is overwhelm, with some fear that every page needs a year of background. That fear fits the size of the thing, and it can stay. The opening 20 pages are written as a guided tour and ask for far less. If you want to know what "cohomology over the Habiro ring" could mean, the tour tells you. Enjoy the one-variable example of the q-derivative. The other 210 pages are there if you ever want them.

## The story

The de Rham complex has a q-deformation. On ℤ[x] the q-derivative sends x<sup>m</sup> to [m]<sub>q</sub> x<sup>m−1</sup>, with [m]<sub>q</sub> = 1 + q + ... + q<sup>m−1</sup>. Bhatt and Scholze showed that the resulting complex is canonical over ℤ[[q − 1]], so it lives near q = 1. Scholze asked whether a version lives over the Habiro ring, which sees all roots of unity. Wagner's earlier work found an obstruction: the natural candidate cannot be made functorial. The thesis finds what was missing. One needs extra data, a q-Hodge filtration. Given that, multiply the differentials by q − 1, so that x<sup>m</sup> goes to (q<sup>m</sup> − 1)x<sup>m−1</sup> and no root of unity is special. This q-Hodge complex descends to the Habiro ring. Such filtrations exist in many cases, and homotopy theory over the K-theory spectrum ku produces them.

## Main definitions

**Habiro ring.** H is the limit over m, ordered by divisibility, of the completions of ℤ[q] at (q<sup>m</sup> − 1). Equivalently it is the limit of ℤ[q]/((1 − q)(1 − q<sup>2</sup>)...(1 − q<sup>n</sup>)).
- Picture: H maps injectively to ℤ[ζ][[q − ζ]] for each root of unity ζ, so its elements have Taylor expansions at all roots of unity.

**q-de Rham complex (Theorem 1.9, Bhatt–Scholze).** A functor from smooth ℤ-algebras S to (q − 1)-complete commutative algebras over ℤ[[q − 1]], written q-Ω<sub>S/ℤ</sub>. Modulo q − 1 it is the de Rham complex of S.
- After p-completion it computes prismatic cohomology over the q-de Rham prism.

**q-Hodge filtration (Definition 1.14).** For S smooth over ℤ, a filtration on q-Ω<sub>S/ℤ</sub>, linear over ℤ[[q − 1]] with its (q − 1)-adic filtration, that reduces to the Hodge filtration modulo q − 1. After rationalisation, or after p-completion and inverting p, it must become the product of the Hodge filtration with the (q − 1)-adic filtration.

**q-Hodge complex.** The (q − 1)-completed colimit of fil<sup>0</sup> → fil<sup>1</sup> → fil<sup>2</sup> → ..., where each map is multiplication by q − 1.
- With coordinates: it is the q-de Rham complex with every differential multiplied by q − 1.

## Main results

**Theorem (Habiro descent; Theorem 1.16).** Consider pairs of a smooth ℤ-algebra S and a q-Hodge filtration on q-Ω<sub>S/ℤ</sub>. The q-Hodge complex of such a pair descends functorially to a Habiro-complete object over ℤ[q], and (q − 1)-completion recovers the original. Its cohomology modulo q<sup>m</sup> − 1 is the m-truncated q-de Rham–Witt complex. The q-de Rham complex is recovered from it by a décalage functor, so it descends too.

**Theorem (existence away from small primes; Theorem 1.17).** On smooth ℤ-algebras S in which all primes p ≤ dim(S/ℤ) are invertible, there is a functorial q-Hodge filtration. In relative dimension at most 1 no primes need inverting.
- Negative side (Theorem 1.13 and the discussion after Question 1.10): there is no functorial choice on all smooth ℤ-algebras compatible with the expected structure.

**Theorem (filtrations from ku; Theorem 1.25).** Let R be quasi-syntomic with 2 invertible, and suppose R lifts to a connective E<sub>2</sub>-ring spectrum S<sub>R</sub> with S<sub>R</sub> ⊗ ℤ ≃ R. Then the derived q-de Rham complex of R has a q-Hodge filtration whose completion is, up to shift, the associated graded of the S<sup>1</sup>-equivariant even filtration on TC<sup>−</sup>(ku ⊗ S<sub>R</sub>/ku).
- Model case (Theorem 1.23, Raksit, unpublished): for the polynomial ring ku[x] one gets the coordinate q-Hodge filtration of ℤ[x].
- Over KU (Theorem 1.32): the same recipe with KU gives the q-Hodge complex, and genuine equivariant structure gives its Habiro descent.

## Note, then ignore

- Base ring. The introduction works over ℤ. The body works over a Λ-ring A that is "perfectly covered". Safe to skip on a first reading.
- Derived versus underived. The precise definition (Definition 3.2) uses animated rings and the derived q-de Rham complex. Remark 3.6 says the difference does not matter here. Safe to skip.
- The prime 2. Theorems 1.25 and 1.32 assume 2 is invertible in R, and the thesis treats p = 2 in a separate section. Safe to skip.
- No functoriality in R. Spherical lifts cannot be chosen functorially, so Part II is not functorial. Part III, joint with Meyer, addresses ℚ-algebras through refined THH. Safe to skip at first.
- Coordinate dependence. The q-derivative changes under x ↦ x + 1. Only the complex in the derived category is canonical. Safe to skip the details.

## One next step

Open the thesis at paragraph 1.12 in the introduction (page 6) and read the plausibility argument after the definition: why x<sup>m</sup> ↦ (q<sup>m</sup> − 1)x<sup>m−1</sup> treats all roots of unity equally.

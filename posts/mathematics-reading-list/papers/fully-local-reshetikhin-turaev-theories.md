source: https://arxiv.org/pdf/2601.05518
slogan: Every Reshetikhin-Turaev theory gets a value on a point, once you add new summands to the 3-category of fusion categories.
basis: the introduction and the main theorem statements

## Before you start

This paper speaks in 3-categories, spectra and Witt groups, often in one sentence. The likely feeling is shame at not having all that background. That feeling is allowed, and it says nothing about you. Very few readers hold every prerequisite here. If you want to know what a 3-manifold invariant looks like when it is cut all the way down to points, the introduction tells you in six pages. Read for the plot and enjoy it. Finishing can wait.

## The story

Reshetikhin-Turaev and Witten built 3-dimensional topological field theories from a modular tensor category T. These theories assign data to circles, surfaces and 3-manifolds. The cobordism hypothesis asks for more: one object X assigned to a point that generates everything. Such an X should be a fusion category whose Drinfeld centre is T. That fails for most T. The obstruction is the class of T in the Witt group W of non-degenerate braided fusion categories. The authors do not look for X among fusion categories. They enlarge the 3-category F of fusion categories to a new one, EF, by adding one summand for each element of an extension of W by the sixth roots of unity. The missing point generators live in the new summands. No analysis is needed. The data in dimensions 1, 2, 3 already decide the answer.

## Main definitions

**Non-degenerate braided fusion category.** A braided fusion category T over ℂ whose only central objects (those that braid trivially with everything) are sums of the unit. Add a symmetric ribbon structure and you get a modular tensor category.
- Example: the Drinfeld centre Z(F) of any fusion category F.

**Witt group W.** The group of non-degenerate braided fusion categories under tensor product, modulo Drinfeld centres. The class [T] vanishes exactly when T ≅ Z(X) for a fusion category X.

**Fully local theory and point generator.** A fully local 3-dimensional theory is a symmetric monoidal functor from the bordism 3-category of framed manifolds of dimensions 0 to 3 into a symmetric monoidal 3-category with full duals. By the cobordism hypothesis its value X on a point determines it. X is the point generator.
- The braided category End(Id<sub>X</sub>) should recover T, the value on the circle.

**Central charge c.** The number that controls how the theory depends on a framing or on a p<sub>1</sub>-structure. One unit of framing change multiplies the invariant of a closed 3-manifold by exp(2πic/6). One unit of p<sub>1</sub>-structure change multiplies it by exp(2πic/24).

## Main results

**Theorem (the enlarged category; Theorem 1).** There is a symmetric monoidal 3-category EF with full duals, a direct sum of pieces F<sub>w</sub> indexed by an extension W̃ → W of the Witt group by μ<sub>6</sub>. Each piece is an invertible F-module, and distinct pieces have only zero morphisms between them. EF is initial among symmetric tensor 3-categories that have finite colimits, receive a colimit-preserving symmetric tensor functor from F, and contain a unique point generator for every 1/2/3-dimensional theory valued in linear categories.
- Step 1: for each Witt class w pick a representative T(w), and take F<sub>w</sub> to be fusion categories with a central action of T(w). This uses Walker's picture of a Reshetikhin-Turaev theory as a boundary of a 4-dimensional Crane-Yetter theory.
- Step 2: the choices of T(w) are not coherent. The obstruction to a symmetric tensor structure is a stable cohomology class, and it goes away uniquely after passing to the μ<sub>6</sub>-extension.

**Corollary (six invertible theories; Corollary 1.1).** The units of EF form a cyclic group of order 6. The framed 3-manifold invariants seen by invertible bosonic theories are the characters of the stable stem π<sub>3</sub><sup>s</sup> ≅ ℤ/24 that factor through ℤ/6.

**Theorem (fermionic case; Theorem 2).** The 3-category SF of fusion super-categories has an analogous enlargement ESF. Its summands are indexed by an extension of the super-Witt group by μ<sub>24</sub>. Here the full ℤ/24 appears.

**Theorem (modular structure and orientations; Theorem 5).** For X in EF, a modular structure on the braided fusion category that the theory assigns to the circle descends the theory uniquely to oriented manifolds with p<sub>1</sub>-structure.

## Note, then ignore

- Universality caveat. It is not known whether every non-degenerate braided fusion category admits a modular structure, so the authors qualify the claim that EF is universal for Reshetikhin-Turaev theories. Safe to skip on a first reading.
- No interfaces between summands. Witt-inequivalent theories admit no non-zero topological interfaces, so the new objects have no topological boundary theories. This follows from an earlier paper and is safe to skip.
- Framing versus p<sub>1</sub> versus signature. Several tangential structures appear, with factors of 2 and 4 between them. The authors prefer p<sub>1</sub>-structures. Safe to skip until you need a central charge.
- The sign ambiguity. One modular category gives two oriented theories with signature structure. They differ by an invertible theory of order two. Safe to skip.
- Normalisation of c. A footnote says some early literature is off by a factor of 2. Safe to skip.

## One next step

Open the paper and read only paragraphs (0.3) and (0.4) of the introduction: the statement of the problem and the eight listed properties of EF.

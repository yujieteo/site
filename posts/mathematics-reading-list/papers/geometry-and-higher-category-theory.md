source: https://people.mpim-bonn.mpg.de/scholze/Gestalten.pdf
slogan: Replace a ring by its whole tower of module categories, and the opposite category is already a topos, so geometry needs no chosen topology.
basis: the introduction and the main theorem statements

## Before you start

These notes run to about 120 pages and lean on Lurie's ∞-categories from the first page. The likely feeling is shame at the background you do not have. That feeling is allowed, and nothing here asks you to fix it first. Lecture I is nine pages and tells the whole plan in words. If you want to see why categories of sheaves can stand in for spaces, that lecture is the place. Read it for pleasure. The other twelve lectures can wait.

## The story

Geometry and algebra are dual. Gelfand, Stone, Hilbert and Grothendieck each match a kind of space with a kind of ring. The match breaks for spaces that are glued: the projective line has only constant global functions. Tannaka's repair is to keep the category of quasicoherent sheaves in place of the ring of functions. That recovers schemes and many stacks. It fails for the stack B<sup>2</sup>𝔾<sub>m</sub>, whose sheaves look like those of a point. Sheaves of categories see B<sup>2</sup>𝔾<sub>m</sub>, but then B<sup>3</sup>𝔾<sub>m</sub> escapes, and so on up. The idea of the notes is to keep every level at once. A Stefanich ring is a ring together with its modules, its linear categories, its linear 2-categories and so on. The opposite of the category of Stefanich rings turns out to behave as an ∞-topos. Its objects are called Gestalten.

## Main definitions

**The categories nPr.** Fix a regular cardinal κ, usually ℵ<sub>1</sub>. Let 1Pr be the ∞-category of κ-compactly generated presentable ∞-categories, with functors that preserve colimits and κ-compact objects. It is itself an object of 1Pr and is symmetric monoidal.
- Step 1: 2Pr is the category of modules over 1Pr inside 1Pr.
- Step 2: nPr is the category of modules over (n−1)Pr inside 1Pr (Definition 1.15, due to Aoki).

**Stefanich ring.** A sequence (A<sub>1</sub>, A<sub>2</sub>, ...) where A<sub>n</sub> is a commutative algebra in nPr, with equivalences A<sub>n</sub> ≃ End<sub>A<sub>n+1</sub></sub>(1), the endomorphisms of the unit one level up (Definition 1.18). They form an ∞-category StRing.
- Example: a commutative ring A gives (D(A), 1Pr<sub>A</sub>, 2Pr<sub>A</sub>, ...), its derived category, then A-linear categories, then A-linear 2-categories.

**Gestalt.** The ∞-category of Gestalten is Gest = StRing<sup>op</sup> (Definition 1.26). The Gestalt of a Stefanich ring A is A seen as a geometric object, as Spec does for a ring.

## Main results

**Theorem (schemes are seen by their sheaves; Theorem 1.8, cited from Brandenburg and Chirvasitu).** The functor X ↦ QCoh(X) from quasicompact quasiseparated schemes to symmetric monoidal presentable abelian categories is fully faithful. Theorem 1.9, cited from Stefanich, extends this to quasicompact quasiseparated Artin stacks with affine diagonal.

**Fact (nothing is lost; Fact 1.21).** Send an analytic stack X to (O(X), D<sub>qc</sub>(X), 1Pr<sub>X</sub>, 2Pr<sub>X</sub>, ...). A map of ℵ<sub>1</sub>-compact presheaves on analytic rings becomes an isomorphism of analytic stacks exactly when it becomes an isomorphism of Stefanich rings.

**Theorem (Gestalten form a topos; Theorem 1.24, Scholze and Stefanich).** For all practical purposes, StRing<sup>op</sup> is an ∞-topos in the sense of Lurie. The notes state it with this qualifier in Lecture I and make it precise in later lectures, which I did not read.
- Consequence 1: there is a canonical topology, whose covers are the effective epimorphisms. No choice among Zariski, étale, fpqc and the rest is needed.
- Consequence 2: all colimits already exist, so gluing needs no passage to sheaves.

**Claim (not every map of Gestalten is a map of stacks; Example 1.27).** Stacks map to Gestalten, and the map is fully faithful on reasonable subcategories by Tannakian theorems. It is not fully faithful in general. The notes give a map from a point to the classifying object of ℝ<sub>>0</sub> that comes from no map of algebraic stacks.

## Note, then ignore

- The cardinal κ. It is fixed so that a category of categories can contain itself, in a type-theoretic sense. Take κ = ℵ<sub>1</sub> and move on. Safe to skip on a first reading.
- "For all practical purposes". StRing is presentable, so its opposite cannot be presentable too. The qualifier covers this size point. Safe to skip at first.
- nPr as an (∞, 1)-category. Informally nPr is an (∞, n+1)-category, but the notes drop the non-invertible higher morphisms and recover them from enrichment. Safe to skip.
- Stability of A<sub>1</sub>. The original lecture asked that A<sub>1</sub> be stable, and the written notes drop this (Remark 1.19). Safe to skip.
- Presentable (∞, n)-categories without a cardinal bound. Aoki observed that they lack limits in general, which is why the bound is there. Safe to skip.

## One next step

Open the notes at Lecture I and read Example 1.13 on B<sup>2</sup>𝔾<sub>m</sub>, then the paragraph after it that passes to B<sup>3</sup>𝔾<sub>m</sub>.

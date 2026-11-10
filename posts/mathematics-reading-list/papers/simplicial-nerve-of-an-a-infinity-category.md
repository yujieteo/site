source: https://arxiv.org/pdf/1312.2127
slogan: An A∞-category has a nerve that is an ∞-category, so chain-level categories and Lurie's ∞-categories become one subject with an explicit dictionary.
basis: the introduction and the main theorem statements

## Before you start

This paper has 47 pages, and many of them carry sign conventions for A<sub>∞</sub> maps. The likely feeling is a small dread of signs: the sense that one slip will make everything wrong and you will not notice. That worry is reasonable, and you can let it sit there. If you want to know how dg-categories and ∞-categories talk to each other, this paper shows it by hand. Enjoy the picture of a simplex as a list of homotopies. The signs can wait.

## The story

Two languages describe "categories up to coherent homotopy". Algebraists use dg-categories and A<sub>∞</sub>-categories, where morphisms form chain complexes. Topologists use ∞-categories, which are simplicial sets with fillers for inner horns. People wanted a direct bridge. Lurie gave one for dg-categories, the dg-nerve, and remarked that it should extend to A<sub>∞</sub>-categories. Faonte carries this out. The idea is the one behind the ordinary nerve: an n-simplex is a functor out of a standard object. Here the standard object is the linear category on 0 → 1 → … → n, and the functor is an A<sub>∞</sub>-functor. So a 2-simplex is two morphisms, a third, and a degree −1 element that witnesses "third = composite". The paper then proves that pretriangulated dg-categories give stable ∞-categories.

## Main definitions

**A<sub>∞</sub>-category.** Fix a field K. An A<sub>∞</sub>-category has a set of objects, a ℤ-graded K-vector space Hom(x, y) for each pair, and maps m<sub>n</sub> of degree 2 − n on n composable morphisms, for n ≥ 1, satisfying the A<sub>∞</sub> relations. It also has strict units.
- Case m<sub>n</sub> = 0 for n > 2: a dg-category, with differential m<sub>1</sub> and composition m<sub>2</sub>.
- Case one object: an A<sub>∞</sub>-algebra.

**Simplicial nerve (Definition 2.2.3).** Let A<sub>∞</sub>[Δ<sup>n</sup>] have objects 0, …, n, with Hom(i, j) = K in degree 0 for i ≤ j and nothing otherwise, m<sub>2</sub> the evident composition and all other m<sub>k</sub> zero. The nerve N<sub>A∞</sub>(A) has as n-simplices the A<sub>∞</sub>-functors A<sub>∞</sub>[Δ<sup>n</sup>] → A.
- Concretely: objects x<sub>0</sub>, …, x<sub>n</sub> and, for each string i<sub>0</sub> &lt; … &lt; i<sub>k</sub>, an element of degree 1 − k in Hom(x<sub>i<sub>0</sub></sub>, x<sub>i<sub>k</sub></sub>), subject to one equation per string.
- For a dg-category D this is the small dg-nerve N<sup>sm</sup><sub>dg</sub>(D) (Definition 2.2.8).

**Big dg-nerve (Definition 3.3.1).** For a dg-category D, truncate each Hom complex, apply the Dold–Kan correspondence to get a simplicial category D<sub>Δ</sub>, and take its simplicial nerve. This is N<sup>big</sup><sub>dg</sub>(D).

**Pretriangulated dg-category (Definition 4.1.3, after Bondal and Kapranov).** A dg-category D in which every twisted complex is representable by an object of D. Then H<sup>0</sup>(D) is a triangulated category, with shifts and cones that come from twisted complexes (Proposition 4.1.6).

## Main results

**Theorem (the nerve is an ∞-category; Proposition 2.2.12).** For every A<sub>∞</sub>-category A over a field K, in the paper's strictly unital sense, the simplicial set N<sub>A∞</sub>(A) is an ∞-category. The construction is a functor from A<sub>∞</sub>-categories to simplicial sets (Proposition 2.2.7).
- Step 1: an inner horn Λ<sup>n</sup><sub>p</sub> gives all the data of an n-simplex except two elements: the top one and the one for the missing face.
- Step 2: set the top element to zero and solve the top equation for the missing face. An explicit formula does it.

**Theorem (two nerves agree; Proposition 3.3.2).** For a dg-category D, the big and small dg-nerves are equivalent ∞-categories. The homotopy category of the small nerve is H<sup>0</sup>(D).
- Step 1: describe the mapping space from 0 to m in the simplicial category of Δ<sup>m</sup> as an (m − 1)-cube cut into (m − 1)! simplices (Proposition 3.2.2).
- Step 2: use the cubes to turn a simplex of the big nerve into the list of elements that makes a simplex of the small nerve.

**Theorem (pretriangulated gives stable; Theorem 4.3.1).** If D is a pretriangulated dg-category, then N<sup>big</sup><sub>dg</sub>(D) is a stable ∞-category, and so is the small nerve. Moreover H<sup>0</sup>(D) and the homotopy category of the nerve are equivalent as triangulated categories.
- Step 1: the zero object of D gives a zero object of the nerve.
- Step 2: cones in D give fibres and cofibres, checked through homotopy limits and the Dold–Kan correspondence.

## Note, then ignore

- Sign conventions. The paper follows signs close to those of Lefèvre-Hasegawa, and other sources differ. They affect formulas and not the statements. Safe to skip on a first reading.
- Strict units. The simplices use strict unitality to kill terms with a repeated index. This keeps the simplicial identities clean. Safe to skip.
- Truncation in the big nerve. Dold–Kan applies to complexes in one half-line, so the Hom complexes are truncated first. The paper handles this in Section 3.1. Safe to skip.
- Earlier work. The paper says Hinich and Schechtman defined the small dg-nerve earlier, and that Lurie stated both dg-nerves and their main properties. The new parts are the A<sub>∞</sub> extension and the details. Safe to skip.
- Idempotent completion. A related result of Cohn assumes idempotent completeness on both sides. This paper does not need it. Safe to skip.

## One next step

Open the paper at Remark 2.2.4 (page 13) and write out what a 2-simplex of the nerve is: three objects, three morphisms and one element of degree −1.

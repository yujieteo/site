source: https://arxiv.org/pdf/1410.1466
slogan: The determinant line of a Tate vector space is the first layer of a K-theory torsor, and its classifying map is an index map.
basis: the introduction and the main theorem statements

## Before you start

The feeling to expect is disorientation. The words torsor, Tate object, exact category and infinite loop space arrive in the first two pages, and it can seem that the ground keeps moving. You can feel lost and still read on. Underneath is something an engineer may want: the index of a Fredholm operator, an integer you can compute, rebuilt in pure algebra for R((t)). Follow that one thread and enjoy the analogy. There is no need to finish the paper.

## The story

Loop groups have a famous central extension, the Kac–Moody extension. Kapranov saw that it comes from a "determinantal torsor": to each lattice in a space like k((t)) you attach a determinant line, and changing the lattice changes the line by a factor. Variants of this torsor appear across geometry. Kapranov and Drinfeld noticed that it looks like a shadow of algebraic K-theory, and Drinfeld asked for a rigorous account. Saito gave one by proving that K-theory of Tate objects deloops K-theory. This paper builds the same torsor in a second, explicit way, as an index map modelled on Fredholm operators. It then shows three things. The index map is an equivalence. It agrees with a boundary map in K-theory. Its lowest layers are the dimension torsor and the determinant torsor.

## Main definitions

**Tate object.** Let C be an idempotent complete exact category. An elementary Tate object is an object V of the category of Ind-Pro objects of C that has a lattice: an admissible subobject L that is a Pro-object, with quotient V/L an Ind-object. Tate(C) is the idempotent completion of the category of elementary Tate objects.
- Example: for a ring R, the module R((t)) is an elementary Tate object over finitely generated projective R-modules, with lattice R[[t]].
- Over a ring: countably generated Tate R-modules in Drinfeld's sense match Tate objects in finitely generated projective R-modules.

**Torsor for K-theory.** The K-theory space K<sub>C</sub> is a group object in spaces. A K<sub>C</sub>-torsor over a space X means a map X → BK<sub>C</sub>, called its classifying map. The paper always works with classifying maps.

**Index map.** The map Index: K<sub>Tate<sup>el</sup>(C)</sub> → BK<sub>C</sub> is the classifying map of the K-theory torsor, extended from the classifying space of elementary Tate objects to their whole K-theory space. The paper builds it from an explicit simplicial map.

## Main results

**Theorem (Saito's delooping; Theorem 1.1, quoted from Saito).** For every idempotent complete exact category C, there is an equivalence of non-connective K-theory spectra ΩK<sub>Tate<sup>el</sup>(C)</sub> ≃ K<sub>C</sub>.

**Theorem (the index map is an equivalence; Theorem 1.4).** Let C be an idempotent complete exact category. The K<sub>C</sub>-torsor on the classifying space of elementary Tate objects extends to the K-theory space of Tate<sup>el</sup>(C). Its classifying map Index agrees up to sign with the map induced by Saito's equivalence, so it is an equivalence of infinite loop spaces.
- Step 1: construct the classifying map simplicially, using lattices.
- Step 2: compare it with Saito's map.

**Theorem (boundary map; Theorem 1.6).** For a ring R, send finitely generated projective R((t))-modules to Tate R-modules by the functor T that takes R((t)) to itself. Then Index ∘ T agrees, up to a canonical homotopy, with −∂, where ∂: K<sub>R((t))</sub> → τ<sub>≥0</sub>ΣK<sub>R</sub> is the boundary map of the localisation sequence.

**Theorem (truncations; Theorems 1.2 and 1.8).** Let R be a commutative ring.
- Dimension: the 1-truncation of the index map on Tate R-modules, with target Bℤ, classifies the dimension torsor.
- Determinant: the 2-truncation, with target the classifying space of graded lines over R, classifies the graded determinantal torsor. Restricted to Aut(V), it gives the Kac–Moody extension by 𝔾<sub>m</sub> (Corollary 1.3).

## Note, then ignore

- Signs. The paper's index map equals minus Saito's torsor, and the triangle in Theorem 1.6 has −∂. The authors pin the sign of the boundary map down in Proposition 2.39. Safe to skip on a first reading.
- Elementary versus general Tate objects. Tate(C) is the idempotent completion of the elementary ones, and most statements are made for the elementary category. Safe to skip.
- Cardinality bounds. A cardinal κ limits the size of the Ind and Pro diagrams, so the categories stay manageable. Safe to skip.
- Non-connective K-theory. Saito's theorem needs K-theory with negative homotopy groups, which is why the connective cover τ<sub>≥0</sub> appears in Theorem 1.6. Safe to skip.
- Higher layers. The 3-truncation for 2-Tate objects gives a 2-gerbe that, over a field, matches one of Arkhipov and Kremnitzer. It belongs to double loop groups. Safe to skip.

## One next step

Open the paper and read Theorem 1.7 on page 4, which sets the Fredholm statement and the Tate statement side by side. It takes two minutes.

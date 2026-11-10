source: https://arxiv.org/pdf/2106.09428
slogan: Cutting marked cubes into marked simplices loses nothing, so the cubical and simplicial models of (∞, n)-categories describe the same theory.
basis: the introduction and the main theorem statements

## Before you start

This is a 60-page comparison paper, and most pages are combinatorics of faces, markings and anodyne maps. The likely feeling is boredom, mixed with doubt about whether a proof that two models agree is worth your evening. That doubt is reasonable and you can keep it. What the paper offers you is licence: after it, you may think of higher categories with cubes or with simplices, whichever suits the problem. The introduction says all of this in one page. Read that page for the idea and let the lemmas stay unread.

## The story

An (∞, n)-category has objects, morphisms, morphisms between morphisms and so on, with everything above dimension n invertible. Verity's complicial sets model this with simplicial sets in which some simplices are marked as "equivalences". Campion, Kapulkin and Maehara introduced comical sets, built from marked cubes, as an alternative that suits the Gray tensor product well. They conjectured that triangulation, which cuts each cube into simplices, makes the two models equivalent. A proof needs a functor going back. The idea here is to build simplices inside cubes: apply a cone construction to a point n times to get a cubical n-simplex. This gives a functor Q back from simplicial to cubical sets. Triangulating Q returns the identity up to weak equivalence, and Q is itself an equivalence, so triangulation is too.

## Main definitions

**Marked simplicial and cubical sets.** A marked simplicial set is a simplicial set with a chosen set of simplices of dimension ≥ 1, the marked ones, that contains all degenerate simplices (Definition 1.4). A marked cubical set is the same with cubes. Maps must send marked cells to marked cells.
- n-trivial: every cell of dimension above n is marked.

**Complicial set.** A marked simplicial set that is fibrant in Verity's model structure. Concretely it has fillers for complicial horns and extensions for complicial markings.
- Saturated: it also lifts against the saturation maps, which mark every cell that behaves as an equivalence.

**Comical set (Definition 2.5).** A marked cubical set with the right lifting property against all comical open box inclusions and elementary comical marking extensions. A comical open box is a cube missing its interior and one face, with markings fixed by Definition 2.1.

**Marked triangulation T (Definition 1.34).** The colimit-preserving functor from marked cubical sets to marked simplicial sets that sends the n-cube to (Δ<sup>1</sup>)<sup>n</sup> with a specified marking. Its right adjoint is called U.
- Example: the 3-cube becomes six 3-simplices, one per permutation of {1, 2, 3}. Five are marked and the one for the identity is not.

## Main results

**Theorem (comical model structures; Theorem 2.7).** The category of marked cubical sets carries four model structures: for comical sets, saturated comical sets, n-trivial comical sets and n-trivial saturated comical sets. In each, the cofibrations are the monomorphisms and the fibrant objects are the named comical sets. All four are monoidal for the lax Gray tensor product.
- Step: apply the Cisinski–Olschok construction (Theorem 1.2) with the marked 1-cube as interval, and check pushout-products of generators.

**Theorem (triangulation is left Quillen; Theorem 3.41).** The adjunction T ⊣ U is a Quillen adjunction from each comical model structure to the matching complicial one.
- Step: show that T sends comical open box inclusions and marking extensions to trivial cofibrations, by ordering the simplices of a triangulated cube and filling them one at a time.

**Theorem (cones give an equivalence; Theorem 5.23).** The functor Q from marked simplicial sets to marked cubical sets, with its right adjoint, is a Quillen equivalence between each complicial model structure and the matching comical one.
- Step 1: Q creates weak equivalences (Theorem 5.8).
- Step 2: for a comical set X the counit from Q of its right adjoint to X is anodyne (Proposition 5.21).

**Theorem (main theorem; Theorem 5.24).** T ⊣ U is a Quillen equivalence between the model structure for (n-trivial, saturated) comical sets and the one for (n-trivial, saturated) complicial sets. This includes n = ∞.
- Step: T Q is naturally weakly equivalent to the identity (Theorem 5.7), and Q is an equivalence on homotopy categories, so T is too.

## Note, then ignore

- A changed definition. The comical sets here differ from those of the earlier paper: the comical cubes carry more restrictive markings (Remark 2.3). The authors say it is not known whether the two model structures coincide. Safe to skip on a first reading, but remember the theorem is about the new definition.
- Connections. Cubical sets come in variants with or without connection maps. Section 2 is written to work in all of them. Safe to skip.
- Rezk maps. These replace the saturation maps on the cubical side and have a longer definition (Definition 2.4). Safe to skip.
- Fibrations. The model structures characterise only fibrations with fibrant codomain by lifting properties. Safe to skip.
- Operators on the right. The paper writes simplicial operators after the simplex, as in x∂<sub>i</sub>. Safe to skip.

## One next step

Open the paper at page 1 and read the introduction up to the end of the stated Theorem, about one page.

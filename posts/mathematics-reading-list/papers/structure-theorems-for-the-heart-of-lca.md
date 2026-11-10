source: https://arxiv.org/pdf/2512.03338
slogan: The formal cokernels that make locally compact abelian groups into an abelian category are honest Hausdorff groups, up to a lattice.
basis: the introduction and the main theorem statements

## Before you start

The title has "heart", the abstract has "t-structure", and the paper is about 47 pages. The likely feeling is a flinch at derived-category words when you came for topological groups. The flinch is fine. The main theorem is stated on page 2 in terms of subgroups of familiar groups such as ℚ inside ℝ. If you want to know what a quotient like ℝ/ℚ "should" be, this paper gives a concrete answer. Read the overview for the pleasure of the examples. The rest is there if you want it.

## The story

Locally compact abelian groups, LCA for short, do not form an abelian category. The map from ℝ with the discrete topology to ℝ is injective with dense image, and it is not an isomorphism, yet its cokernel in LCA is zero. Schneiders' theory repairs this by adding formal cokernels. The enlarged category is the left heart LH(LCA). People use it, but the new objects have looked like ghosts. Braunling and Ren give them bodies. Take a ghost, the formal cokernel of a dense injection X′ → X. Arrange X′ discrete and X compact. Now give X′ the subspace topology from X. This is a Hausdorff group, often not locally compact. Completing it and then forgetting its topology recovers the original map. The choices made differ only by lattices.

## Main definitions

**Left heart LH(LCA).** LCA is quasi-abelian: kernels and cokernels exist, but a map can be monic and epic without being an isomorphism. The left heart is the heart of a t-structure on the bounded derived category D<sup>b</sup>(LCA). It is abelian and contains LCA as a full subcategory.

**PGA.** The category of topological groups isomorphic to a subgroup, not necessarily closed, of a connected LCA group, with the subspace topology. Intrinsically these are the precompactly generated, locally precompact Hausdorff groups.
- In PGA: ℚ with the topology from ℝ, every compact abelian group and its subgroups, ℤ inside ℤ<sub>p</sub>.
- Not in PGA: ℚ with the discrete topology, ℚ<sub>p</sub>, the adèles, infinite-dimensional Banach spaces.

**Lattice isogeny.** A continuous homomorphism whose kernel and cokernel are both discrete and finitely generated. Inverting all of these in PGA gives the category PGA[S<sup>−1</sup>].

**Ghost.** The full subcategory of LH(LCA) of formal cokernels of maps X′ → X of LCA groups that are injective with dense image.

## Main results

**Theorem (Main Correspondence; Theorem 1, proved as Theorem 10.1).** Every object X of LH(LCA) is, in a unique way, an extension of a classical LCA group B by a ghost A. The ghosts form a quasi-abelian full subcategory, and there is an exact equivalence between Ghost and PGA with lattice isogenies inverted.
- Step 1: a group Z in PGA goes to the complex Z<sub>d</sub> → cZ, where Z<sub>d</sub> is Z made discrete and cZ is its completion.
- Step 2: conversely, represent a ghost by X′ → X with X′ discrete and X compact, and give X′ the subspace topology.

**Theorem (vector-free variant; Theorem 2).** Let LCA<sub>vf</sub> be the LCA groups with no real vector space as a direct summand. The same statement holds for LH(LCA<sub>vf</sub>), with PGA replaced by precompact Hausdorff abelian groups, and lattice isogenies replaced by maps with finite kernel and cokernel.

**Theorem (condensed picture; Theorem 11.2).** There are full inclusions LCA ⊂ LH(LCA) ⊂ Cond(Ab). So PGA up to lattice isogeny embeds fully faithfully and exactly in condensed abelian groups. It sends Z to the cokernel of Z<sub>d</sub> → cZ computed there.

**Theorem (weak-strong duality; Theorem 12.2).** In the vector-free case, the equivalence turns Pontryagin duality on ghosts into weak duality on precompact groups: Hom(X, 𝕋) with the weak topology. The paper calls its description of duality in general partial.

## Note, then ignore

- Direction of the extension. In the left heart the ghost is the subobject and the LCA group is the quotient. In the right heart the roles swap (Theorem 3). Safe to skip on a first reading.
- Discrete finitely generated groups. They lie in PGA but become zero once lattice isogenies are inverted. That is the price of well-definedness. Safe to skip.
- Completion without a metric. For non-metrisable groups the completion uses filters, after Raikov and Weil. The paper proves this functor exact. Safe to skip.
- cZ need not be compact. The complex Z<sub>d</sub> → cZ is only quasi-isomorphic to one with compact target, and that suffices. Safe to skip.
- Double life. The circle is both an LCA group and a ghost, and the two copies admit a non-split extension in the heart. Safe to skip, though it is a good example to return to.

## One next step

Open the paper at page 2 and read the paragraph after Theorem 1 that begins by describing which groups lie in PGA.

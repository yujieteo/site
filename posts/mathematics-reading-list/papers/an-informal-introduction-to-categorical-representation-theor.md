source: https://arxiv.org/pdf/2205.14578
slogan: A group can act on a category as well as on a vector space, and local geometric Langlands classifies such actions of loop groups.
basis: the introduction and the main theorem statements

## Before you start

This survey is 83 pages, and its introduction says the difficulty rises steadily, with the last section asking for prior familiarity. The likely feeling is fear of the point where you stop following. That fear is reasonable, since the author predicts the point exists. If you want to know what "a group acting on a category" means, Sections 2 and 3 answer with finite groups and flag varieties. Read those for enjoyment. How far you get past them does not matter.

## The story

A finite group H acting on a set X gives a representation on functions on X, and functions on H under convolution form the group algebra. Replace functions by D-modules and sets by varieties. Then D-modules on an algebraic group K form a monoidal category under convolution, and it acts on D-modules on any K-variety. That is a categorical representation. Beilinson–Bernstein localisation identifies 𝔤-modules with D-modules on the flag variety, and it is a map of categorical representations of G. Taking invariants for a subgroup H gives Harish-Chandra modules on one side and equivariant D-modules on the other. Next, replace G by the loop group LG. The local geometric Langlands conjecture describes all categorical representations of LG as families of categories over the space of Ǧ-connections on the punctured disc.

## Main definitions

**Categorical representation.** For an algebraic group K, a categorical representation is a dg-category C with an action of the monoidal category D-mod(K) under convolution.
- Geometric example: D-mod(X) for a K-variety X.
- Lie-theoretic example: the category 𝔨-mod of modules over the Lie algebra.

**Invariants.** C<sup>K</sup> is the category of D-mod(K)-linear functors from the trivial representation Vect to C. For C = D-mod(X) it is D-mod(X/K). For C = 𝔨′-mod along K → K′ it is the category of Harish-Chandra modules for the pair (𝔨′, K).

**Local systems on the punctured disc.** LocSys<sub>Ǧ</sub> is the quotient of connections d + 𝔤̌((t))dt by gauge transformations in the loop group of Ǧ.

**Sheaf of categories.** On an affine X, a quasi-coherent sheaf of categories is a dg-category linear over functions on X, that is, a module category over QCoh(X). One glues for general X. Its fibre at a point is an ordinary dg-category.

## Main results

**Theorem (Beilinson–Bernstein; Theorem 3.2.10).** Global sections give a t-exact equivalence from D-modules on the flag variety of G to 𝔤-modules with trivial central character.
- Compatibility (Theorem 3.3.13): for a subgroup H, H-equivariant D-modules correspond to Harish-Chandra modules for (𝔤, H).

**Theorem (localisation is equivariant; Beilinson–Drinfeld, Theorems 3.4.10 and 3.4.12).** For a K-variety X in the setting of Section 3.3.18, localisation and global sections form an adjunction between 𝔨-mod and D-mod(X) that commutes with the D-mod(K)-actions. Taking H-invariants gives an adjunction between 𝔨-mod<sup>H</sup> and D-mod(X)<sup>H</sup> that commutes with the action of the Hecke category D-mod(H\K/H).

**Conjecture (local geometric Langlands; equation (6.19)).** There is an equivalence of (∞, 2)-categories between categorical representations of the loop group, D-mod(LG)-mod, and ind-coherent sheaves of categories on LocSys<sub>Ǧ</sub> with nilpotent singular support.
- Expected matches: D-mod(Gr<sub>G</sub>) goes to QCoh(pt/Ǧ), the Whittaker category D-mod(LG/LN, ψ) to QCoh(LocSys<sub>Ǧ</sub>), and Kac–Moody modules at the critical level to QCoh of opers.
- What it says: Hom categories match. The underlying categories of C and its image need not be equivalent, as in a Morita equivalence.

**Theorem (localisation at the critical level; Section 6.9, conjectured by Frenkel–Gaitsgory, completed by Raskin–Yang).** For a central character χ given by an oper on the unpunctured disc, the functor from D-modules on the affine Grassmannian, tensored down over Rep(Ǧ) to Vect, to critical-level Kac–Moody modules with central character χ is an equivalence.
- Step 1: Frenkel–Gaitsgory built the functor from the Beilinson–Drinfeld Hecke eigen-property, and showed it is fully faithful on bounded-below objects.
- Step 2: Raskin–Yang proved essential surjectivity using a geometric form of Moy–Prasad theory.

## Note, then ignore

- dg-categories. Triangulated categories do not glue or tensor well, so Section 4.2 passes to dg-categories. Read "derived category with good formal properties". Safe to skip on a first reading.
- Invariants are not idempotent. Taking K-invariants twice does not return the same category, because K has cohomology (Remark 4.3.8). Safe to skip.
- QCoh versus IndCoh with nilpotent support. The first statement (6.1) uses quasi-coherent sheaves of categories. Matching Hom categories in the unramified case forces the correction (6.19). Safe to skip.
- 1-affineness. Whether sheaves of categories on LocSys<sub>Ǧ</sub> are the same as module categories over QCoh is a conjecture of Gaitsgory. Raskin proved full faithfulness. Safe to skip.
- Critical level. The affine Lie algebra is a central extension of 𝔤((t)), and the level where its centre becomes large is shifted from zero. Section 6.7 explains. Safe to skip.

## One next step

Open the PDF and read Section 2.3.2, the paragraph on a finite group acting on a finite set, then glance at Figure 1 in Section 6.

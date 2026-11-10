source: https://stacks.math.columbia.edu/tag/01GA
slogan: A hypercovering of X has the homology of a point over X, so it can stand in for X when you compute cohomology.
basis: the page itself

## Before you start

This section is four technical lemmas about simplicial presheaves, coskeleta and Kan fibrations, with no example in sight. The likely feeling is boredom, perhaps with some unease about the simplicial words. Boredom is a fair response to a reference text, and nothing is wrong with you for feeling it. If you want to understand why Čech-style computations give the right cohomology on any site, this is the lemma that makes it true. Look for the one idea and enjoy it. The details can stay unread.

## The story

On a topological space, a good open cover has a nerve that computes cohomology. On a general site, plain Čech covers are not enough, and Verdier replaced them with hypercoverings, where you may refine again at each simplicial level. To use a hypercovering K of X for cohomology, you need K to be a resolution: the complex built from K must have no homology except the free abelian sheaf on X in degree 0. This section proves that. The idea is to evaluate on each object U and get an ordinary map of simplicial sets. For a Čech nerve this map is a trivial Kan fibration, hence a homotopy equivalence, and taking free abelian groups keeps it one. Sheafification is exact, so the answer passes to sheaves. A tower of coskeleta reduces the general case to this one.

## Main definitions

**Free abelian sheaf.** For a presheaf of sets ℱ on a site 𝒞, ℤ<sub>ℱ</sub> is the presheaf U ↦ free abelian group on ℱ(U), and ℤ<sub>ℱ</sub><sup>#</sup> is its sheafification. Both constructions are left adjoints to forgetful functors.
- For an object X of 𝒞, ℤ<sub>X</sub> is the free abelian presheaf on the representable presheaf h<sub>X</sub>.

**Homology of a simplicial presheaf (Definition 25.4.1).** Let K be a simplicial object in presheaves of sets on 𝒞. Apply ℤ<sup>#</sup> in each degree and take the associated complex s(ℤ<sub>K</sub><sup>#</sup>), whose differential is the alternating sum of the face maps. Then H<sub>i</sub>(K) is the i-th homology sheaf of this complex.

**Čech nerve of a map.** For a morphism of presheaves ℱ → 𝒢, the simplicial presheaf whose n-th term is the (n + 1)-fold fibre product of ℱ over 𝒢.

**Hypercovering, as used here.** A simplicial object K over X in which K<sub>0</sub> covers X, K<sub>1</sub> covers K<sub>0</sub> × K<sub>0</sub>, and K<sub>n+1</sub> covers the degree n + 1 term of cosk<sub>n</sub> sk<sub>n</sub> K for each n ≥ 1. The precise definition is in Section 25.3, which I did not read. F(K) denotes the simplicial presheaf attached to K.

## Main results

**Lemma (Čech nerves are acyclic; Lemma 25.4.2).** Let ℱ → 𝒢 be a morphism of presheaves of sets that is surjective after sheafification, and let K be its Čech nerve. Then H<sub>i</sub>(K) = 0 for i > 0 and H<sub>0</sub>(K) = ℤ<sub>𝒢</sub><sup>#</sup>.
- Step 1: on each U, with A = ℱ(U) and B the image of A in 𝒢(U), the map from the nerve of A over B to the constant simplicial set B is a trivial Kan fibration, so a homotopy equivalence.
- Step 2: free abelian groups preserve homotopy equivalences, and sheafification is exact.

**Lemma (comparison; Lemma 25.4.3).** Let f : L → K be a morphism of simplicial presheaves and n ≥ 0. Assume L<sub>i</sub> → K<sub>i</sub> is an isomorphism for i &lt; n, that L<sub>n</sub> → K<sub>n</sub> is surjective after sheafification, and that both L and K equal their own cosk<sub>n</sub> sk<sub>n</sub>. Then H<sub>i</sub>(L) → H<sub>i</sub>(K) is an isomorphism for all i.

**Lemma (augmented criterion; Lemma 25.4.4).** Let K → 𝒢 be an augmented simplicial presheaf. Assume that, after sheafification, K<sub>0</sub> → 𝒢 is surjective, K<sub>1</sub> → K<sub>0</sub> ×<sub>𝒢</sub> K<sub>0</sub> is surjective, and K<sub>n+1</sub> → (cosk<sub>n</sub> sk<sub>n</sub> K)<sub>n+1</sub> is surjective for every n ≥ 1. Then H<sub>i</sub>(K) = 0 for i > 0 and H<sub>0</sub>(K) = ℤ<sub>𝒢</sub><sup>#</sup>.
- Step 1: form the tower K → … → K<sup>n</sup> → K<sup>n−1</sup> → … → K<sup>0</sup>, with K<sup>n</sup> = cosk<sub>n</sub> sk<sub>n</sub> K and K<sup>0</sup> the Čech nerve of K<sub>0</sub> → 𝒢.
- Step 2: Lemma 25.4.2 handles K<sup>0</sup>, and Lemma 25.4.3 shows each step of the tower preserves homology.

**Lemma (hypercoverings are acyclic; Lemma 25.4.5).** Let 𝒞 be a site with fibre products, X an object and K a hypercovering of X. Then the homology of F(K) is 0 in positive degrees and ℤ<sub>X</sub><sup>#</sup> in degree 0.

## Note, then ignore

- Presheaf image. The proofs replace 𝒢 by the image presheaf of ℱ → 𝒢, whose sheafification is the same. This makes the map surjective on sections. Safe to skip.
- Fixed degree. In Lemma 25.4.4, a fixed homology degree involves only finitely many levels of K, and K agrees with K<sup>n</sup> in low degrees. The page leaves this implicit. Safe to skip.
- Sites with fibre products. The last lemma assumes fibre products in 𝒞 because the definition of hypercovering in Section 25.3 uses them. Safe to skip.
- Homology, not cohomology. The section computes homology sheaves of a complex. The link to cohomology comes in the next section of the chapter. Safe to skip here.

## One next step

Open the page and read only the statement of Lemma 25.4.2 and the first paragraph of its proof, where the nerve becomes a trivial Kan fibration.

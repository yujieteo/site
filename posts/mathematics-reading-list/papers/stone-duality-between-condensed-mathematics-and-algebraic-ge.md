source: https://arxiv.org/pdf/2401.02568
slogan: Condensed sets embed fully faithfully into fpqc sheaves over any field, so questions about topology can be read as questions about algebraic geometry.
basis: the introduction and the main theorem statements

## Before you start

This paper asks you to hold two languages at once: condensed sets on one side, fpqc sheaves and algebraic spaces on the other. If you are unsure of either, the likely feeling is a small dread of getting lost in the dictionary. That is a fair reaction to a bilingual text, and nothing needs fixing. The paper lets you use the language you know better to learn the other. Enjoy the table on page 2 first. The proofs can wait.

## The story

Stone duality, from the 1930s, says a profinite set is the same thing as a Boolean ring: send a space S to the ring of continuous functions S → 𝔽<sub>2</sub>. A Boolean ring has a spectrum, so profinite sets are certain affine schemes over 𝔽<sub>2</sub>. Condensed sets are sheaves on profinite sets. Schemes, and more general spaces, are sheaves on affine schemes. Gregoric asks whether the duality extends to the sheaves. It does. Every condensed set becomes an fpqc sheaf, no information is lost, and colimits and finite limits are kept. Nothing is special about 𝔽<sub>2</sub>: any field k works, once Boolean rings are replaced by "Stone k-algebras". Topological notions then translate. Profinite becomes affine, and compact Hausdorff becomes an fpqc relative of an algebraic space.

## Main definitions

**Condensed set.** Up to set-theoretic care, a sheaf of sets on the category of profinite sets, where finite jointly surjective families are covers. A compactly generated weak Hausdorff space T gives the condensed set S ↦ Cont(S, T).

**Stone k-algebra (Definition 1.1).** A commutative k-algebra that is a filtered colimit of algebras k<sup>S</sup> = ⊕<sub>S</sub> k for finite sets S.
- Over 𝔽<sub>2</sub>: these are the Boolean rings, those with a = a<sup>2</sup> for all a.
- Over a separably closed field: these are the weakly étale k-algebras.

**Pearl (Definition 1.7).** The pearl A° of a k-algebra A is the value on A of the right adjoint to the inclusion of Stone k-algebras into k-algebras. Over a field, A° → A is injective, so the pearl is the largest Stone subalgebra, and Spec(A°) is homeomorphic to the space of connected components of Spec(A) (Proposition 1.12).

**fpqc sheaf over k.** A functor from k-algebras to sets that satisfies descent for faithfully flat maps. Schemes and algebraic spaces over k are examples.

## Main results

**Theorem (Stone duality for algebras; Theorem 1.2).** Let k be a ring whose only idempotents are 0 and 1. Then Stone k-algebras are anti-equivalent to profinite sets. The functors are A ↦ Hom<sub>k-alg</sub>(A, k) and S ↦ C(S, k), the continuous functions from S to the discrete set k. The paper credits this form to Antieau.
- Step 1: the functor S ↦ C(S, k) is essentially surjective by the definition of Stone algebras.
- Step 2: full faithfulness reduces to finite S, where algebra maps k<sup>S</sup> → k are the points of S because k has no idempotents but 0 and 1.

**Theorem (Stone duality for condensed sets; Theorem C in the introduction, Theorem 2.6).** Let k be a field. Stone duality induces an adjunction f\* : Cond ⇄ Shv<sup>fpqc</sup><sub>k</sub> : f<sub>\*</sub>. The left adjoint f\* is fully faithful and commutes with all finite limits.
- Left adjoint: f\*X is the fpqc sheafification of A ↦ X(π<sub>0</sub>|Spec A|). For a compactly generated Hausdorff space X this is A ↦ Hom<sub>Top</sub>(|Spec A|, X).
- Right adjoint: f<sub>\*</sub> sends an fpqc sheaf Y to the condensed set S ↦ Y(C(S, k)).

**Theorem (the dictionary; Theorem B in the introduction, stated there over 𝔽<sub>2</sub>).** Under the embedding, profinite sets correspond to affine schemes. Compact Hausdorff spaces correspond to "geometric spaces", roughly an fpqc version of algebraic spaces. Compactly generated weak Hausdorff spaces correspond to ind-geometric spaces. Open and closed embeddings go to open and closed immersions. The underlying set X(∗) is the set of 𝔽<sub>2</sub>-points, Hom<sub>Cond</sub>(X, 𝔽<sub>2</sub>) is the ring of global functions, and sheaves of 𝔽<sub>2</sub>-modules on X are the quasi-coherent sheaves. The paper proves these row by row in Section 3. I did not read those proofs, and some rows need k finite.

**Claim (recovering the pro-étale site).** Over a separably closed field, Stone algebras are the weakly étale algebras, so the theorem recovers the original approach to condensed sets through the pro-étale site of a point, due to Bhatt and Scholze.

## Note, then ignore

- Set-theoretic size. Profinite sets do not form a small category, so "sheaf on profinite sets" needs a cardinal bound or the light variant. Section 4 redoes the results in the light setting. Safe to skip on a first reading.
- π<sub>0</sub> means connected components. The paper follows the Stacks project and uses π<sub>0</sub> for connected components with the quotient topology, not path components. Safe to skip.
- Why a field. Theorem 1.2 holds over any connected ring, but the description of the duality as A ↦ |Spec A| (Proposition 1.10) needs a field. That is why the main theorem assumes one. Safe to skip.
- Finite k. A few rows of the dictionary need k to be finite. The embedding itself does not. Safe to skip.
- Higher categories. The paper works with sheaves of sets and only discusses a possible ∞-categorical version at the end. Safe to skip.

## One next step

Open the paper at page 2 and read the table in Theorem B, one row at a time, covering the right-hand column and guessing it first.

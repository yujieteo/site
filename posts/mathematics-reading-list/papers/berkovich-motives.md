source: https://arxiv.org/pdf/2412.03382
slogan: Motivic sheaves built directly on Banach rings work the same over ℂ and over p-adic fields, and cancellation holds over every base.
basis: the introduction and the main theorem statements

## Before you start

The word "motives" carries a reputation, and this paper adds Banach rings, arc-topologies and six functors on top. The likely feeling is dread that you need Voevodsky's whole theory first. Let that dread be there. It is a fair reaction to the name. In fact the paper aims to be self-contained and builds its category from two conditions on sheaves. If you want one setting where Betti, étale and motivic cohomology appear as cases of the same definition, the seven-page introduction gives it. Read it for interest, with no duty to continue.

## The story

Fargues and Scholze built Langlands parameters using ℓ-adic étale cohomology of diamonds, and wanted to know the parameters do not depend on ℓ. Grothendieck's answer to such questions is motives: one object behind all the ℓ-adic theories. Ayoub, Gallauer and Vezzani had rigid-analytic motives, built through formal models and reduction to the algebraic theory. Scholze builds the theory from scratch instead. He skips defining Berkovich spaces and puts a very fine topology, the arc-topology, on Banach rings. A motivic sheaf is then an arc-sheaf of complexes that is finitary and does not see the difference between a space and a unit ball over it. Over ℂ this gives plain complexes of abelian groups. With torsion coefficients over a p-adic field it gives étale sheaves. Over a discrete field it gives Voevodsky's étale motives. Two properties come out better than in older settings: cancellation over any base, and rigidity.

## Main definitions

**Banach ring and Berkovich spectrum.** A Banach ring is a ring A with a submultiplicative norm for which A is complete. Any ring is one with the discrete norm. M(A) is the compact Hausdorff space classifying maps from A to Banach fields, which are discrete, archimedean (ℝ or ℂ) or nonarchimedean.

**Arc-cover (Definition 1.1).** A family of maps A → B<sub>i</sub> of Banach rings such that finitely many of the maps M(B<sub>i</sub>) → M(A) are jointly surjective.

**Effective motivic sheaves (Definition 1.2).** For a small arc-stack X, D<sup>eff</sup><sub>mot</sub>(X) is the full subcategory of arc-hypersheaves on X with values in D(ℤ) that are finitary and ball-invariant.
- Ball-invariant: the values on Y and on the 1-dimensional unit ball over Y agree, for every Y over X.
- Finitary: commutes with filtered colimits on strictly totally disconnected Banach rings (uniform, M(A) profinite, residue fields algebraically closed and non-discrete).

**Tate twist and D<sub>mot</sub> (Definition 1.11).** ℤ(1) is the reduced free motivic sheaf on 𝔾<sub>m</sub>, shifted by −1. D<sub>mot</sub>(X) is D<sup>eff</sup><sub>mot</sub>(X) with ℤ(1) formally inverted.

## Main results

**Proposition (what a point sees; Proposition 1.5).** Let C be an algebraically closed non-discrete Banach field. If C = ℂ, effective motivic sheaves over C are D(ℤ). If C is nonarchimedean and n is invertible in its residue field, effective motivic sheaves with ℤ/n coefficients are D(ℤ/n). If the residue characteristic is p, then p is invertible in the category.
- Case: for C of mixed characteristic, tilting gives an equivalence between effective motives over C and over its tilt, a result first due to Vezzani.

**Theorem (cancellation; Theorem 1.9).** For any small arc-stack X, tensoring with ℤ(1) is a fully faithful functor on D<sup>eff</sup><sub>mot</sub>(X).
- Step 1: reduce formally to strictly totally disconnected spaces and then to geometric points.
- Step 2: at a point, follow Voevodsky's argument with a version of presheaves with transfers. The author calls this the hardest part of the paper.

**Theorem (structure; Theorem 1.12).** If X is a geometric point, D<sub>mot</sub>(X) is compactly generated and its compact objects are its dualizable objects. If X = M<sub>arc</sub>(A) for an analytic Banach ring A and X has finite cohomological dimension, then D<sub>mot</sub>(X) is rigid in the sense of Gaitsgory and Rozenblyum.

**Proposition (comparison; Proposition 1.13) and Theorem (nearby cycles; Theorem 1.14).** For a discrete algebraically closed field k, D<sub>mot</sub>(k) agrees with Voevodsky's étale motives over k. For k the algebraic closure of 𝔽<sub>p</sub> and C the completed algebraic closure of k((T)), a choice of roots of a pseudouniformiser gives an equivalence between D<sub>mot</sub>(C) and pairs (A, N) with A in D<sub>mot</sub>(k) and N: A → A ⊗ ℚ(−1) locally nilpotent.
- Step for 1.13: compute maps through rational Tate twists and algebraic K-theory (Theorem 1.7), which also controls Voevodsky's category.

## Note, then ignore

- Size of the site. Banach rings do not form a small category. The paper works with small arc-sheaves, a union over cardinal bounds κ. Safe to skip on a first reading.
- Not subcanonical. The arc-topology is so fine that representable functors are not sheaves, so M<sub>arc</sub>(A) means the sheafification. Safe to skip.
- Finitary, the fine print. Commuting with all filtered colimits clashes with being an arc-sheaf, so the condition is imposed only on strictly totally disconnected rings. Safe to skip.
- Étale version only. These are étale motives throughout. The comparison is with the étale form of Voevodsky's theory. Safe to skip.
- Adic variant. The paper notes that Ayoub, Gallauer and Vezzani give a parallel theory for adic spaces. The Berkovich choice is what gives cancellation everywhere and rigidity. Safe to skip.

## One next step

Open the paper and read only Definition 1.2 and Proposition 1.5 with the paragraph after it (pages 3 and 4).

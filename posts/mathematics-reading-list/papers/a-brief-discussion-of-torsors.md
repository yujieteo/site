source: https://alex-youcis.github.io/torsors.pdf
slogan: First cohomology classifies torsors, and torsors classify twisted forms, so H¹ counts objects that look alike locally but differ globally.
basis: the introduction and the main theorem statements

## Before you start

These are 31 pages of notes with "brief" in quotation marks, written over sites, the étale topology and the flat topology. The likely feeling is a tired sort of boredom: more foundations before anything happens. That is an understandable response, and you need not argue with it. The notes do answer a question worth wanting an answer to, namely what H<sup>1</sup> means. The motivation section answers it in two pages with no sites at all. Read that for pleasure. Treat the rest as a place to visit when a torsor turns up.

## The story

Students learn H<sup>0</sup> as global sections and H<sup>1</sup> as cocycles modulo coboundaries. The second definition computes well but explains little. The notes start again from gluing. H<sup>0</sup> of a cover is gluing data for sections of a sheaf. H<sup>1</sup> is gluing data one level up: data for gluing objects of a category, such as line bundles, where "isomorphic" is weaker than "equal". Fix an object x<sub>0</sub>. The objects that are locally isomorphic to x<sub>0</sub> are its twists, and the transition isomorphisms on overlaps form a 1-cocycle in the automorphism sheaf of x<sub>0</sub>. A torsor is the special case where x<sub>0</sub> is a group G acting on itself. So three things agree: Čech H<sup>1</sup> of G, G-torsors, and twists of anything whose automorphism sheaf is G.

## Main definitions

**G-torsor.** Let G be a sheaf of groups on a site C. A G-torsor is a sheaf of sets F with a G-action such that every object X has a cover {U<sub>i</sub> → X} with F(U<sub>i</sub>) non-empty, and G(X) acts simply transitively on F(X) whenever F(X) is non-empty.
- Equivalent form (Theorem 3.9): F is locally isomorphic to G acting on itself by left multiplication.
- Morphisms: every map of G-torsors is an isomorphism (Theorem 3.12).

**Principal G-bundle.** Let G be a flat algebraic X-group, that is, a flat affine group scheme of finite presentation over a scheme X. A principal G-bundle is a flat X-scheme Y of finite presentation with a G-action such that Y ×<sub>X</sub> G → Y ×<sub>X</sub> Y, (y, g) ↦ (y, gy), is an isomorphism.
- Equivalent form: Y becomes isomorphic to G with left multiplication after pulling back along a flat cover of X.

**Twist.** Let S be a stack over a site, X an object and F<sub>0</sub> an object of S over X. A twist of F<sub>0</sub> is an object over X that becomes isomorphic to F<sub>0</sub> on some cover of X. Twist(F<sub>0</sub>) is the pointed set of twists up to isomorphism.

## Main results

**Theorem (torsors are H<sup>1</sup>; Theorem 3.38).** For a sheaf of groups G on a site and an object T, the map Tors(T, G) → Ȟ<sup>1</sup>(T, G) is a bijection of pointed sets. If G is abelian it is an isomorphism of abelian groups.
- Step 1: choose local sections α<sub>i</sub> of the torsor. On overlaps they differ by unique elements s<sub>ij</sub> of G, and these form a cocycle.
- Step 2: for the inverse, glue the trivial torsors on the U<sub>i</sub> along the s<sub>ij</sub>.

**Theorem (torsors are spaces; Theorems 3.24 and 3.32).** For a flat algebraic X-group G, sending Y to its functor of points is an equivalence from principal G-bundles to G-torsors on the flat site of X. If G is also smooth, every flat G-torsor is already trivial on an étale cover, so the étale and flat topologies give the same torsors.
- Why: Y → X is smooth because G → X is, and a smooth map has sections étale locally.

**Theorem (examples; Theorems 4.2, 4.3 and 4.8).** Sending a vector bundle to its sheaf of frames gives a bijection between rank n vector bundles on X up to isomorphism and GL<sub>n</sub>-torsors on the flat site. For n = 1 this is an isomorphism of groups from Pic(X) to the 𝔾<sub>m</sub>-torsors. For a connected scheme X, a finite Galois cover Y → X with group G is a principal G-bundle.

**Theorem (twists are torsors; Theorem 5.1).** For a stack S over a site and an object F<sub>0</sub> over X, there are canonical bijections of pointed sets Ȟ<sup>1</sup>(X, Aut(F<sub>0</sub>)) → Twist(F<sub>0</sub>) and Tors(Aut(F<sub>0</sub>)) → Twist(F<sub>0</sub>).
- Case: twists of an affine T-scheme Y<sub>0</sub> in the flat topology are classified by Ȟ<sup>1</sup>(T, Aut(Y<sub>0</sub>)) (Theorem 5.2).
- Case: forms of an algebraic group G<sub>0</sub> are classified by Ȟ<sup>1</sup>(T, Aut(G<sub>0</sub>)) (Theorem 5.4).

## Note, then ignore

- Big and small flat sites. The notes write X<sub>Fl</sub> and X<sub>fl</sub> and prove the two give the same torsors (Corollary 3.26). Safe to skip on a first reading.
- Affineness of G. Representing a torsor by a scheme uses that G is affine over X. Without it you get an algebraic space (Remark 3.25). Safe to skip.
- Zariski triviality. Étale-local triviality rarely improves to Zariski-local. Theorem 3.33, credited to Grothendieck, says which groups allow it, and GL<sub>n</sub> and SL<sub>n</sub> are among them. Safe to skip.
- "Line bundles are 𝔾<sub>m</sub>-torsors". The line bundle is not itself the torsor. Its frame sheaf is (Remark 4.4). Safe to skip.
- Pointed sets. For non-abelian G, H<sup>1</sup> is only a set with a base point, the trivial torsor. Safe to skip.

## One next step

Open the notes at Section 1.2 (page 1) and read the first four paragraphs, up to the sentence that calls H<sup>1</sup> "1-gluing data".

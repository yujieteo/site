source: https://www.preschema.com/teaching/2020-ss/kdescent/
slogan: K-theory of a scheme glues along open covers once you treat it as a space, and one week of lectures builds every tool for that.
basis: the page itself

## Before you start

The course page lists nine sets of handwritten notes and assumes ∞-categories from the first hour. The likely feeling is dread that you must learn a whole new language before you get any K-theory. You can feel that and still open Lecture 0. It is four handwritten pages and needs only sheaves and vector bundles. If you want to know why K<sub>0</sub> alone is the wrong object, those pages answer it. Read them for interest. The other eight lectures are there if you want more.

## The story

Thomason and Trobaugh proved in 1990 that the K-theory of schemes satisfies descent: you can recover K(X) from an open cover. Their paper is long and written in older language. This one-week course from July 2020 retells it in modern terms.

The obstacle shows up at once. The rule X ↦ K<sub>0</sub>(X) is not a sheaf. Neither is the set of isomorphism classes of vector bundles, because bundles have automorphisms. The fix is to keep the automorphisms: the groupoid of vector bundles is a sheaf in a 2-categorical sense. Perfect complexes have higher automorphisms, so you pass to ∞-groupoids, that is, spaces. Then X ↦ Perf(X) is a sheaf, and so is X ↦ K(X). A Mayer–Vietoris sequence for K-groups follows.

## Main definitions

I read the course page and the Lecture 0 overview. The later lectures are scanned handwriting and I did not check their statements.

**K-theory of a scheme.** K(X) is the Waldhausen K-theory of the stable ∞-category Perf(X) of perfect complexes on X. It is a space with a commutative group structure up to homotopy.
- Affine case: K(Spec A) is the group completion of the groupoid of finitely generated projective A-modules.
- With the resolution property: K(X) agrees with Quillen's K-theory of vector bundles on X.

**Sheaf of sets.** A functor F on the open sets of X such that, for every open cover, F(X) is the limit of the diagram F(U<sub>i</sub>) ⇉ F(U<sub>i</sub> ∩ U<sub>j</sub>).

**Sheaf of ∞-groupoids.** The same condition with the limit taken over the full cosimplicial diagram of double, triple and higher intersections, in the ∞-category of spaces.

## Main results

**Claim (K<sub>0</sub> is not a sheaf; Lecture 0).** The presheaf X ↦ K<sub>0</sub>(X) of abelian groups is not a sheaf. The presheaf of isomorphism classes of vector bundles is not a sheaf of sets either.
- Reason: vector bundles have non-trivial automorphisms, and gluing needs them.

**Theorem (descent for perfect complexes; Lecture 0).** The rule X ↦ Perf(X)<sup>≃</sup>, the ∞-groupoid of perfect complexes, is a sheaf of ∞-groupoids.

**Theorem (Thomason; Lecture 0).** On quasi-compact quasi-separated schemes, X ↦ K(X) is a sheaf of ∞-groupoids for the Zariski topology.
- Corollary (Mayer–Vietoris): for a Zariski cover X = U ∪ V there is a long exact sequence ... → K<sub>n</sub>(X) → K<sub>n</sub>(U) ⊕ K<sub>n</sub>(V) → K<sub>n</sub>(U ∩ V) → K<sub>n−1</sub>(X) → ...
- Route, from the page's topic list: a localisation sequence for K-theory comes first, and Zariski descent follows from it.

**Claim (the plan of the course; course page).** The lectures go in this order: ∞-categories, animated modules, nonconnective animated modules, sheaves, quasi-coherent sheaves, the direct image functor, perfect complexes, K-theory. The last lecture reaches the localisation sequence and Zariski descent.

## Note, then ignore

- Notes are unedited scans. The page says so. Expect crossings-out and no index. Safe to skip worrying about it on a first reading.
- "Animated" modules. This is the course's name for the derived version of modules, built from simplicial objects. A bonus talk compares them with connective complexes. Safe to skip.
- Quasi-compact and quasi-separated. Thomason's theorem needs these finiteness conditions on X. Every noetherian scheme satisfies them. Safe to skip.
- The sequence continues below zero. The Mayer–Vietoris sequence runs into negative K-groups, which is why K-theory is treated as a spectrum later on. Safe to skip.
- A typed alternative exists. The page links LiveTeX notes by Milton Lin for readers who prefer type to handwriting. Safe to skip.
- Two courses share one title. The 2017/18 course is separate and goes further, to blow-ups. Safe to skip.

## One next step

Open the course page, click "Lect. 0: Overview", and read the first page only, down to the warning that K<sub>0</sub> is not a sheaf.

source: https://arxiv.org/pdf/1303.3328
slogan: A circle bundle turns a simply connected 4-manifold into a connected sum of copies of S<sup>2</sup> × S<sup>3</sup>, so one Betti number fixes its homotopy groups.
basis: the introduction and the main theorem statements

## Before you start

Four-manifolds have a reputation: Freedman, Donaldson, exotic smooth structures. You may feel a quiet fear that any paper on them needs gauge theory you do not have. It is fine to feel that. This paper needs none of it. Its engine is one circle bundle and a classification theorem of Smale from 1962. If you like seeing a hard-looking object become a familiar one after a single move, that is what is on offer here. Read Section 2 for pleasure. The spectral sequences later on can stay unread.

## The story

The intersection form of a simply connected closed 4-manifold M fixes its homotopy type, and such forms are intricate. So you might expect the homotopy groups of M to depend on the form in a delicate way. Basu and Basu show they do not. Pick a suitable class in H<sup>2</sup>(M; ℤ) and take the circle bundle E over M with that Chern class. A circle has no higher homotopy, so E and M share π<sub>j</sub> for j ≥ 3. E is a simply connected spin 5-manifold with free H<sub>2</sub>, and Smale classified those: E is a connected sum of copies of S<sup>2</sup> × S<sup>3</sup>. Only the second Betti number survives. The same bundle carries growth estimates from the loop space of E to the loop space of M, and Morse theory turns those into a count of periodic geodesics.

## Main definitions

**The associated 5-manifold E.** Let M be simply connected and closed with H<sub>2</sub>(M; ℤ) = ℤ<sup>k</sup>. Choose a class α that is part of a basis of H<sup>2</sup>(M; ℤ), and let E → M be the circle bundle with first Chern class α. Then E is simply connected and spin with H<sub>2</sub>(E; ℤ) = ℤ<sup>k−1</sup>.
- If M is spin: any basis element works.
- If M is not spin: take α to be an integral lift of the second Stiefel–Whitney class.

**Rationally hyperbolic.** A simply connected closed manifold is rationally elliptic if the ranks of its rational homotopy groups have a finite sum. Otherwise it is rationally hyperbolic.

**Bumpy metric.** A Riemannian metric for which every circle of closed geodesics is a non-degenerate critical submanifold of the energy function on the free loop space LM. Bumpy metrics are dense, and "generic metric" means this.

**Geometrically distinct.** Two periodic geodesics are geometrically distinct if they have different images, so rotations, reversals and iterates do not count as new.

## Main results

**Theorem (homotopy groups; Theorem A, Theorems 2.5 and 2.7).** Let M be a simply connected closed topological 4-manifold with second Betti number k ≥ 1. Then π<sub>j</sub>(M) = π<sub>j</sub>(#<sup>k−1</sup>(S<sup>2</sup> × S<sup>3</sup>)) for j ≥ 3. The stable homotopy groups of M are k copies of π<sup>s</sup><sub>n−2</sub>, plus k − 1 copies of π<sup>s</sup><sub>n−3</sub>, plus π<sup>s</sup><sub>n−5</sub>, where π<sup>s</sup> denotes the stable stems.
- Step 1: build E and use the long exact sequence of the fibration S<sup>1</sup> → E → M.
- Step 2: apply Smale's theorem to identify E with #<sup>k−1</sup>(S<sup>2</sup> × S<sup>3</sup>).

**Theorem (ranks; Theorem B, Theorem 4.9).** Let k ≥ 3. For each j ≥ 2 there is a polynomial P<sub>j</sub> of degree j with leading coefficient 1/j such that rank π<sub>j+1</sub>(M) = P<sub>j</sub>(k − 1). In particular M is rationally hyperbolic. Theorem 4.9 gives an explicit formula with a Möbius function sum.
- Step 1: compute the rational homology of the based loop space of E as a tensor algebra modulo one relation, using Koszul duality.
- Step 2: read off the ranks through the Milnor–Moore theorem.

**Theorem (geodesics; Theorem C, Theorem 3.9, Corollaries 3.10 and 3.18).** Let M be a simply connected closed smooth 4-manifold with second Betti number at least 3. For a generic metric, the number of geometrically distinct periodic geodesics of length at most ℓ grows at least exponentially in ℓ. The same holds for closed Reeb orbits on a generic fibrewise star-shaped hypersurface in T\*M.
- Step 1: the Betti numbers of LE grow exponentially by a result of Lambrechts, and a spectral sequence argument passes this to LM.
- Step 2: the Ballmann–Ziller estimate bounds the geodesic count below by Betti numbers of LM.

## Note, then ignore

- Topological versus smooth. Theorems A and B hold for topological 4-manifolds, and the paper proves the smooth case first. Theorem C needs a smooth manifold because it speaks of metrics. Safe to skip on a first reading.
- An index shift. The introduction writes P<sub>j</sub>(k − 1), while Section 4 uses its own indexing of the manifolds. I did not reconcile the two. Use the introduction's form. Safe to skip.
- The range of k. Part (i) of Theorem A needs k ≥ 1, and exponential growth needs k ≥ 3. Small k gives rationally elliptic cases such as S<sup>4</sup> and ℂP<sup>2</sup>. Safe to skip.
- Finite fundamental group. Section 3.1 extends the geodesic count to 4-manifolds with finite fundamental group by passing to the universal cover. Safe to skip.
- Gromov's conjecture. Theorem C confirms, in dimension four, a conjecture of Gromov on rationally hyperbolic manifolds. This is context. Safe to skip.

## One next step

Open the paper at Section 2 and read Theorem 2.2 (Smale) and Lemma 2.3 with the first half of its proof.

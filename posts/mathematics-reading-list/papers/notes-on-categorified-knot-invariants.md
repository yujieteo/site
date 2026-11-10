source: https://shmakov.us/docs/Khovanov.pdf
slogan: Knot polynomials are Euler characteristics of graded homology theories, so each coefficient becomes the dimension count of a vector space you can study.
basis: the introduction and the main theorem statements

## Before you start

These are 28 pages of notes from a two-week summer course, and they say openly that many results come without proof. The feeling they may raise is unease at being asked to take things on trust, or a sense of being rushed from knots to Hecke algebras to Hilbert schemes. That unease makes sense, and you can keep it with you as you read. What the notes offer is a map of how the Jones polynomial turns into homology. Enjoy the first two lectures as a complete small story. The later lectures are optional scenery.

## The story

The Jones polynomial of a link is computed by resolving each crossing in two ways and adding up powers of v + v<sup>−1</sup>, one for each circle, with signs. An alternating sum of dimensions looks like an Euler characteristic. Khovanov made this literal. Replace v + v<sup>−1</sup> by a graded vector space A of that graded dimension, namely the cohomology of the 2-sphere with a shift. Then the 2<sup>n</sup> resolutions of a diagram become the terms of a chain complex, and its homology is a link invariant. The notes then repeat the trick for the HOMFLY-PT polynomial. That polynomial comes from a trace on the Hecke algebra of S<sub>n</sub>. Soergel bimodules replace the Hecke algebra, Rouquier complexes replace braids, and Hochschild homology replaces the trace.

## Main definitions

**Khovanov complex (Definitions 2 and 3).** Let D be a diagram with n crossings and let A = H<sup>\*</sup>(S<sup>2</sup>, ℂ) shifted to have graded dimension v + v<sup>−1</sup>. The Khovanov bracket has in degree i the sum, over resolutions α ∈ {0,1}<sup>n</sup> with i ones, of A<sup>⊗c</sup>, where c is the number of circles in the resolution. The Khovanov complex is this bracket with shifts fixed by the numbers of positive and negative crossings.

**Soergel bimodules (Definition 12).** Let R = ℂ[x<sub>1</sub>, …, x<sub>n</sub>] with S<sub>n</sub> permuting variables, and let s<sub>i</sub> swap x<sub>i</sub> and x<sub>i+1</sub>. Put I<sub>s<sub>i</sub></sub> = R ⊗ R(−1), with the tensor product over the s<sub>i</sub>-invariants. SBim<sub>n</sub> is the smallest full subcategory of graded R-bimodules that contains R and the I<sub>s<sub>i</sub></sub> and is closed under sums, summands, tensor products and shifts.

**Rouquier complex.** For each simple braid generator there is a two-term complex of Soergel bimodules. The inverse generator goes to I<sub>s<sub>i</sub></sub> → R(−1), with differential the multiplication map. A braid b goes to the tensor product T<sub>b</sub> of the complexes of its letters.

**Khovanov–Rozansky homology (Definition 15).** Apply Hochschild homology HH<sub>\*</sub>(R, −) to each term of T<sub>b</sub> and take homology of the resulting complex. The result HHH(b) has three gradings: internal, Hochschild and homological.

## Main results

**Theorem (Khovanov; Theorem 2).** The Khovanov complex of an oriented link diagram is a link invariant, and its graded Euler characteristic is the Jones polynomial. The notes state this without proof.

**Theorem (Soergel; Theorems 9 and 10).** The bimodules I<sub>s<sub>i</sub></sub> satisfy the Kazhdan–Lusztig form of the Hecke relations up to isomorphism, for example I<sub>s<sub>i</sub></sub> ⊗ I<sub>s<sub>i</sub></sub> ≅ I<sub>s<sub>i</sub></sub>(1) ⊕ I<sub>s<sub>i</sub></sub>(−1). SBim<sub>n</sub> is Krull–Schmidt, its indecomposable objects up to isomorphism and shift correspond to the elements of S<sub>n</sub>, and its split Grothendieck group is isomorphic to the Hecke algebra H(S<sub>n</sub>) over ℤ[v, v<sup>−1</sup>].

**Theorem (Rouquier; Theorem 11).** The Rouquier complexes satisfy the braid relations up to homotopy equivalence in the homotopy category of bounded complexes of Soergel bimodules. So each braid gives a complex that is well defined up to homotopy.

**Theorem (Khovanov; Theorem 12).** If a link is the closure of a braid b, then HHH(b) is a link invariant up to a grading shift, and a suitable two-variable graded dimension recovers the HOMFLY-PT polynomial.
- Step 1: Hochschild homology behaves like a trace, which matches closing the braid.
- Step 2: the HOMFLY-PT polynomial is the Ocneanu trace on the Hecke algebra composed with the map from the braid group (Theorems 6 and 7).

**Conjecture (Gorsky–Neguț–Rasmussen; Conjecture 1).** There is a pair of adjoint functors between the homotopy category of Soergel bimodules and a derived category of torus-equivariant coherent sheaves on a dg version of the flag Hilbert scheme of points on the plane. HHH should factor through it as a derived pushforward. This is a conjecture in the notes.

## Note, then ignore

- Normalisation of the unknot. The notes give the unknot the value (a − a<sup>−1</sup>)/(v − v<sup>−1</sup>) and not 1, so that the HOMFLY-PT polynomial is multiplicative on disjoint unions. Safe to skip on a first reading.
- The substitution a = v<sup>−2</sup>. It turns HOMFLY-PT into the Jones polynomial in these conventions. Other sources use other variables. Safe to skip.
- Two presentations of the Hecke algebra. The standard generators T and the Kazhdan–Lusztig generators I = T + v are both used, since bimodules model the second and complexes model the first. Safe to skip.
- Category theory in Lectures 5, 8 and 10. The definitions of additive, monoidal and triangulated categories are recalled for reference. Safe to skip.
- Missing proofs and citations. The notes say so themselves and point to Bar-Natan and Khovanov for the real arguments. Safe to skip.

## One next step

Open the notes at Lecture 2 and read Lemma 1, the closed formula for the Kauffman bracket as a sum over the 2<sup>n</sup> resolutions.

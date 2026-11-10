source: https://www3.nd.edu/~andyp/papers/Steinberg.pdf
slogan: Integral bases generate the Steinberg module exactly when the class group is trivial, and that decides whether the top cohomology of SL<sub>n</sub> of a number ring vanishes.
basis: the introduction and the main theorem statements

## Before you start

You may feel a quiet worry that buildings, class groups and duality for arithmetic groups are three subjects you were meant to know already. Let the worry be there. The introduction defines every object it uses in a few lines each. If you like seeing arithmetic, here the class number, show up as topology, this paper gives a very clean example. Read the five theorem statements for the fun of how they fit together. The long induction in Section 2 can wait as long as you like.

## The story

Borel and Serre showed that the rational cohomology of SL<sub>n</sub>O<sub>K</sub> vanishes above a known degree ν<sub>n</sub>. Whether it is non-zero in degree ν<sub>n</sub> itself, with constant coefficients ℚ, stayed open apart from Euclidean rings, where Lee and Szczarba proved vanishing in 1976. Duality turns the question into one about the Steinberg module: the top cohomology is its coinvariants. So you need generators for that module that the integral group can move around. The authors show that apartments coming from bases of O<sup>n</sup> generate it when the class group is trivial, and fail to generate it when the class group is not. The picture: for n = 2 the orbits of GL<sub>2</sub>O on lines in K<sup>2</sup> are in bijection with the class group. Vanishing and non-vanishing of top cohomology follow.

## Main definitions

**Steinberg module.** For a field K, the Tits building T<sub>n</sub>(K) is the simplicial complex of flags of proper non-zero subspaces of K<sup>n</sup>. It is homotopy equivalent to a wedge of (n−2)-spheres. St<sub>n</sub>(K) is its reduced homology in degree n − 2, with ℤ coefficients, as a GL<sub>n</sub>K-module.

**Integral apartment.** A frame is a set of n lines L<sub>1</sub>, …, L<sub>n</sub> with direct sum K<sup>n</sup>. The subspaces spanned by proper non-empty subsets of the lines form a sphere in the building, the apartment, and its fundamental class lies in St<sub>n</sub>(K).
- General case: apartment classes generate St<sub>n</sub>(K), by the Solomon–Tits theorem.
- Integral case: for a Dedekind domain O with fraction field K, the frame is integral when O<sup>n</sup> is the direct sum of the L<sub>i</sub> ∩ O<sup>n</sup>.

**Dedekind domain of arithmetic type.** Let K be a global field and S a finite non-empty set of places, containing all infinite places when K is a number field. O<sub>S</sub> is the ring of elements of K that are integral at every place outside S.

**Complex of partial bases.** B<sub>n</sub>(O) is the simplicial complex whose simplices are subsets of bases of O<sup>n</sup>. Its top simplices, of dimension n − 1, are the bases.

## Main results

**Theorem (Integrality; Theorem A).** Let O be a Dedekind domain with trivial class group and fraction field K. Assume that O is Euclidean, or that O = O<sub>S</sub> is of arithmetic type with |S| > 1 and S containing a non-complex place. Then integral apartment classes span St<sub>n</sub>(K).
- Step 1: send each basis of O<sup>n</sup> to its apartment class. This gives a map from the top chains of B<sub>n</sub>(O) to St<sub>n</sub>(K).
- Step 2: this map is surjective once B<sub>n</sub>(O) is as highly connected as possible, which is Theorem E.

**Theorem (Non-integrality; Theorem B).** Let O be a Dedekind domain with fraction field K. If 1 &lt; |cl(O)| &lt; ∞ and n ≥ 2, then integral apartment classes do not generate St<sub>n</sub>(K).

**Theorem (Vanishing and non-vanishing; Theorems C and D).** Let O<sub>K</sub> be the ring of integers of a number field K and n ≥ 2.
- Case |cl(O<sub>K</sub>)| = 1, and K has a real embedding or O<sub>K</sub> is Euclidean: H<sup>ν<sub>n</sub></sup>(SL<sub>n</sub>O<sub>K</sub>; ℚ) = 0, and the same holds for GL<sub>n</sub>O<sub>K</sub> in its own top degree. Theorem C also covers twisted coefficients V<sub>λ</sub> once n ≥ 2 + ‖λ‖.
- General case: dim H<sup>ν<sub>n</sub></sup>(SL<sub>n</sub>O<sub>K</sub>; ℚ) ≥ (|cl(O<sub>K</sub>)| − 1)<sup>n−1</sup>.

**Theorem (Partial bases are Cohen–Macaulay; Theorem E).** Let O<sub>S</sub> be of arithmetic type with |S| > 1 and S containing a non-complex place. Then B<sub>n</sub>(O<sub>S</sub>) is Cohen–Macaulay of dimension n − 1 for all n ≥ 1. No hypothesis on the class group is needed.
- Step 1: induct on n, with a stronger statement about complexes of bases relative to an ideal.
- Step 2: the arithmetic hypotheses enter in the base case n = 2.

## Note, then ignore

- The excluded rings. The hypotheses on S rule out rings of integers of totally imaginary fields and positive characteristic rings with finitely many units, such as 𝔽<sub>q</sub>[T]. The paper says Theorem A need not hold there. Safe to skip on a first reading.
- Two top degrees. GL<sub>n</sub>O<sub>K</sub> has virtual cohomological dimension ν<sub>n</sub> − (r<sub>1</sub> + r<sub>2</sub> − 1), smaller than ν<sub>n</sub> for SL<sub>n</sub>O<sub>K</sub>, because of the units. Safe to skip.
- Bieri–Eckmann duality. SL<sub>n</sub>O<sub>K</sub> does not satisfy Poincaré duality, so the dual of top cohomology is H<sub>0</sub> with coefficients in St<sub>n</sub>(K) ⊗ ℚ, the coinvariants. Use it as a black box. Safe to skip.
- Signs of apartment classes. An apartment class is defined only up to ±1. This never matters for spanning statements. Safe to skip.
- Stable range. Van der Kallen's theorem gives connectivity of B<sub>n</sub>(O) one degree short of what Theorem E needs, and the paper explains why that gap needs new ideas. Safe to skip.

## One next step

Open the paper and read Section 1.4, "Relationship between Integrality and Vanishing/Non-Vanishing", up to equation (1.2). It is half a page and holds the whole logic.

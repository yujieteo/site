source: https://arxiv.org/pdf/1409.7445
slogan: Witt vectors rebuild ℤ<sub>p</sub> from 𝔽<sub>p</sub> by universal integer polynomials, so p-adic carrying becomes ordinary algebra that works over any ring.
basis: the introduction and the main theorem statements

## Before you start

This is a reference manual, 28 pages of polynomial identities with indices running over divisors. The likely feeling is boredom, with a little dread at the bookkeeping. Both are fine to have. Nothing here needs more than commutative algebra, and the author says so. You may want to stop treating the letter W as a black box in every p-adic paper you open. Section 1 does that on its own. Enjoy it, and treat the rest as a place to look things up.

## The story

The ring ℤ<sub>p</sub> has residue field 𝔽<sub>p</sub>, and each unramified extension of ℤ<sub>p</sub> is determined by its residue field. So one hopes to build the big ring from the small one. Every element is a series Σ τ(x<sub>n</sub>) p<sup>n</sup> with digits x<sub>n</sub> in the residue ring, where τ is the multiplicative Teichmüller lift. The block is addition: digits carry, and the carries look messy. Section 1 computes the first carry by hand, using the fact that x ≡ y mod p forces x<sup>p</sup> ≡ y<sup>p</sup> mod p<sup>2</sup>. Witt saw the pattern. Demand that certain "ghost" polynomials be additive and multiplicative, and the carries become fixed polynomials with integer coefficients. Those polynomials then define a ring W(A) for every ring A.

## Main definitions

**Strict p-ring (Definition 1.1).** A ring R that is complete and Hausdorff for the p-adic topology, in which p is not a zero divisor, and whose residue ring R/p is perfect.
- Example: ℤ<sub>p</sub>, or any unramified extension of it, where the Teichmüller representatives are 0 and the (q−1)st roots of unity.

**Witt polynomials and ghost components (Definition 2.4).** For n ≥ 1 the nth Witt polynomial is w<sub>n</sub> = Σ d · X<sub>d</sub><sup>n/d</sup>, summed over divisors d of n. For a vector x, the values w<sub>n</sub>(x) are its ghost components and the coordinates x<sub>n</sub> are its Witt components.
- Case p-typical: the index set is {1, p, p<sup>2</sup>, ...} and w<sub>p<sup>n</sup></sub> = X<sub>0</sub><sup>p<sup>n</sup></sup> + p X<sub>1</sub><sup>p<sup>n−1</sup></sup> + ... + p<sup>n</sup> X<sub>n</sub> in the usual numbering.

**Divisor-stable set and W<sub>P</sub>(A) (Definitions 2.1, 2.7).** A non-empty set P of positive integers is divisor-stable if it contains every divisor of each of its members. As a set, W<sub>P</sub>(A) is the product of copies of A indexed by P.
- Case P = all positive integers: the big Witt ring W(A).
- Case P = powers of p: the p-Witt ring W<sub>p</sub>(A), which most number theory papers call simply W(A).

**Frobenius and Verschiebung.** Natural maps F<sub>n</sub> and V<sub>n</sub> on W<sub>P</sub>(A). V<sub>n</sub> shifts coordinates, placing x<sub>m/n</sub> in position m and 0 where n does not divide m. It is additive. F<sub>n</sub> is a ring homomorphism, defined when nP ⊂ P.

## Main results

**Theorem (existence of the Witt rings; Theorem 2.6).** Let P be a divisor-stable set. There is a unique functor W<sub>P</sub> from rings to rings such that W<sub>P</sub>(A) is the product set A<sup>P</sup>, maps act coordinate by coordinate, and every w<sub>n</sub>: W<sub>P</sub>(A) → A with n in P is a ring homomorphism. The zero is (0, 0, ...) and the unit is (1, 0, 0, ...).
- Step 1: when the elements of P are invertible in A, the ghost map is a bijection, so the ring laws are forced.
- Step 2: the work is to show that the resulting sum and product polynomials have integer coefficients, so they make sense over every ring.

**Theorem (Witt vectors of a perfect ring; Theorem 2.13).** Let K be a perfect ring of characteristic p and R the strict p-ring with residue ring K. The map W<sub>p</sub>(K) → R sending (x<sub>1</sub>, x<sub>p</sub>, x<sub>p<sup>2</sup></sub>, ...) to Σ τ(x<sub>p<sup>n</sup></sub><sup>1/p<sup>n</sup></sup>) p<sup>n</sup> is a ring isomorphism.
- Case: W<sub>p</sub>(𝔽<sub>p</sub>) ≅ ℤ<sub>p</sub>.

**Theorem (relations between F and V; Propositions 5.10 and 5.12).** F<sub>n</sub> ∘ V<sub>n</sub> is multiplication by n, and V<sub>n</sub>(F<sub>n</sub>(x) y) = x V<sub>n</sub>(y). For a prime p, F<sub>p</sub>(x) ≡ x<sup>p</sup> modulo p W<sub>P</sub>(A).
- Caution: V<sub>n</sub> ∘ F<sub>n</sub> is not multiplication by n in general (Remark 5.11).

**Theorem (universal property; Theorem 6.6).** Let K be perfect of characteristic p, and let R be a p-ring with residue ring L. Every ring homomorphism K → L lifts to a unique continuous homomorphism W<sub>p</sub>(K) → R.

## Note, then ignore

- Indexing. The paper indexes p-Witt components by p<sup>n</sup>, while most authors index by n. The paper flags this itself in Remark 2.8. Safe to skip once you know it.
- The name "vector". Witt rings are rings, and in fact ring-valued functors. The word only recalls the finite-length truncations. Safe to skip.
- Not an algebra over the base. W<sub>p</sub>(𝔽<sub>p</sub>) = ℤ<sub>p</sub> is not an 𝔽<sub>p</sub>-algebra, so W does not preserve K-algebra structures. It is there to prevent a wrong guess, and is safe to skip.
- Hazewinkel's book. The author says nearly all results are in Hazewinkel's 1978 book and none are original. This matters only for citation, so skip it.
- Section 7. The Artin-Hasse exponential has p-integral coefficients and splits off the p-typical part of the big Witt ring. It is a separate topic and can wait.

## One next step

Open the PDF and read Section 1 from Definition 1.1 to the formula for S<sub>1</sub>, about two pages, following the carry computation with p = 2 in your head.

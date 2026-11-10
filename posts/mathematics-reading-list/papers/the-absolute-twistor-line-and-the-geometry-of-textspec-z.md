source: https://arxiv.org/pdf/2609.00299
slogan: Fold the projective line over 𝔽₁ by a signed inversion, and the archimedean point of Spec ℤ gets the twistor line as its complex points.
basis: the introduction and the main theorem statements

## Before you start

The abstract packs equivariant toposes, Hopf structures, twistors and a "pericyclic category" into ten lines. The likely feeling is a fear of being too slow, looking up every second word. That fear is allowed. Underneath, the paper does one concrete computation with two charts of a projective line and a square root of −1. If you want to know why the place at infinity of ℤ has no real points, it answers that. Take pleasure in the one page.

## The story

Arakelov geometry adds a point ∞ to Spec ℤ, but the point has no stalk. The authors' earlier papers gave each prime p a stalk over 𝔽<sub>1</sub>, built from the ordered group ℤ[1/p]. At ∞ the group is ℤ with no preferred order. So use both orders. The monoid algebras on ℤ<sub>≥0</sub> and ℤ<sub>≤0</sub> glue to a projective line over 𝔽<sub>1</sub>, and swapping the orders is an involution α. The authors make α act on functions by T ↦ −1/T. That needs a sign, so they extend 𝔽<sub>1</sub> to contain one, and adjoin a formal J with J<sup>2</sup> = −1. Folding by α and taking complex points gives a sphere on which complex conjugation acts as z ↦ −1/z̄, the twistor line. It has no real points.

## Main definitions

**𝔽<sub>1<sup>2</sup></sub>.** The 𝔽<sub>1</sub>-algebra of the pointed monoid {0, 1, ε} with ε<sup>2</sup> = 1. Every commutative ring R is an algebra over it by ε ↦ −1. It keeps the sign and nothing else of addition.

**The enriched line 𝒳.** The projective line over 𝔽<sub>1<sup>2</sup></sub> has two closed points + and − and a generic point η. Its charts are 𝔽<sub>1<sup>2</sup></sub>[T<sup>ℤ<sub>≥0</sub></sup>, J<sub>+</sub>] and 𝔽<sub>1<sup>2</sup></sub>[T<sup>ℤ<sub>≤0</sub></sup>, J<sub>−</sub>], with J<sub>±</sub><sup>2</sup> = ε.
- Gluing over η: T restricts to T, J<sub>+</sub> ↦ J and J<sub>−</sub> ↦ εJ.

**The archimedean component C<sub>∞</sub>.** The involution α swaps + and −, fixes η, and acts on functions by α<sup>\*</sup>(T) = εT<sup>−1</sup>, α<sup>\*</sup>(J) = εJ. C<sub>∞</sub> is the equivariant topos [𝒳/⟨α⟩] with this structure sheaf (Definition 1.1).
- Underlying space: one closed point γ and one generic point with isotropy ℤ/2.

**The global curve C̄.** The pushout of the finite curve (Spec ℤ)<sub>𝔽<sub>1</sub></sub>, with scalars extended to 𝔽<sub>1<sup>2</sup></sub>, and C<sub>∞</sub> along their generic points, where both stalks equal 𝔽<sub>1<sup>2</sup></sub> (Definition 7.1). The odd positive integers act by the Frobenius maps Fr<sub>n</sub>(s) = s<sup>n</sup>.
- Why odd: Fr<sub>n</sub> must fix ε = −1, and (−1)<sup>n</sup> = −1 only for odd n.

## Main results

**Proposition (points of the unfolded line; Proposition 3.2).** Let K be a field. If −1 is not a square in K, for example K = ℝ, then 𝒳(K) is empty. If K has characteristic other than 2 and contains a square root of −1, then 𝒳(K) is two disjoint copies of P<sup>1</sup>(K). If K has characteristic 2, then 𝒳(K) = P<sup>1</sup>(K).
- Step 1: a K-point of a chart is a pair (t, j) with j<sup>2</sup> = −1.
- Step 2: the gluing identifies (t, j) with (t<sup>−1</sup>, −j), so the choice of j splits the points into two lines.

**Theorem (twistor real structure; Theorem 1.2, proved as Theorem 5.1).** The set C<sub>∞</sub>(ℂ) is in canonical bijection with P<sup>1</sup>(ℂ). Complex conjugation acts on it as z ↦ −1/z̄, an anti-holomorphic involution with no fixed points.
- Step 1: α swaps the two copies of P<sup>1</sup>(ℂ), and so does conjugation, since it sends i to −i.
- Step 2: the conjugate of (z, i) is (z̄, −i). Its α-partner on the first copy is (−1/z̄, i).

**Proposition (global sections; Proposition 7.3).** Regard C̄ as an object of the topos of sets with an action of the odd positive integers. Then its global sections are the constants: Γ(C̄, O) = 𝔽<sub>1<sup>2</sup></sub>.
- Why: a global section must be fixed by every Fr<sub>n</sub>, and T<sup>n</sup> ≠ T, J<sup>3</sup> = εJ ≠ J.

**Proposition (odd Frobenius on the twistor line; Proposition 7.5).** For odd n, Fr<sub>n</sub> acts on C<sub>∞</sub>(ℂ) by z ↦ z<sup>n</sup> if n ≡ 1 mod 4 and by z ↦ −1/z<sup>n</sup> if n ≡ 3 mod 4. This action commutes with z ↦ −1/z̄.

## Note, then ignore

- Why −1/T and not 1/T. The authors choose the signed inversion, guided by a Weyl symmetry. The sign is what removes the real points. Safe to accept on a first reading.
- Multiplying points. Over 𝔽<sub>1<sup>2</sup></sub> the pointwise product of two points sends ε to +1, so Section 2 multiplies points by a coproduct instead. Safe to skip.
- Hodge theory. The introduction and Section 6 relate Fr<sub>n</sub> to Adams operations and the conjugate filtration on Simpson's twistor bundles. The paper presents this as an interpretation, with no numbered theorem. Safe to skip.
- The prime 2. Even n are excluded, and the authors read this as the ramification of 2 in ℤ[i]. Safe to skip.
- The extended topos S<sub>0</sub>. The introduction places everything inside a product of the arithmetic topos with the folded line, to match the Jacobian of the previous paper. Safe to skip.

## One next step

Open the paper at Section 3 and read Proposition 3.2 with its proof, a page and a half.

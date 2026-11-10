source: https://epub.uni-regensburg.de/26642/1/jannsen10.pdf
slogan: Motives built with numerical equivalence form a semi-simple abelian category, and no standard conjecture is needed to prove it.
basis: the full text

## Before you start

This note is six pages long, and that can raise its own worry: a short famous paper feels like one you ought to understand at once. You may not, and that is fine. The word "motive" carries a reputation, and some unease about it is normal. If you want one fact about motives that is proved and not conjectural, this is it. Read it for the pleasure of a short proof. Finishing is a bonus.

## The story

Grothendieck wanted a category of motives that behaves like representations of a group: abelian, and with every object a direct sum of simple ones. You build motives from smooth projective varieties and algebraic cycles, taken modulo some equivalence relation. People believed that semi-simplicity needed the standard conjectures, which are open. Jannsen shows it does not. Take the coarsest relation, numerical equivalence, where a cycle is zero if all its intersection numbers vanish. Then the endomorphism algebra of every motive is finite-dimensional and semi-simple. The one idea is a trace formula. A correspondence in the Jacobson radical acts nilpotently on cohomology, so all its traces vanish, so all its intersection numbers vanish, so it is numerically zero. Semi-simple algebras then give a semi-simple category by pure algebra.

## Main definitions

**Adequate equivalence relation.** A relation ∼ on F-linear algebraic cycles on smooth projective varieties over a field k, such that pull-back, push-forward and intersection are well defined modulo ∼. Here F is a field of characteristic zero. Write A<sup>j</sup>(X) for codimension j cycles modulo ∼.
- Numerical equivalence: a cycle is zero if its intersection number with every cycle of complementary dimension is zero. It is the coarsest adequate relation.
- Homological equivalence: a cycle is zero if its class in a fixed Weil cohomology is zero.

**Motive with respect to ∼.** A triple (X, p, m), with X a smooth projective variety, p a projector in the ring A<sup>dim X</sup>(X × X) of correspondences, and m an integer. Morphisms from (X, p, m) to (Y, q, n) are the correspondences q ∘ A<sup>dim X − m + n</sup>(X × Y) ∘ p. The category M<sub>k</sub> is F-linear and pseudo-abelian.

**Semi-simple abelian category.** An abelian category in which every object is a finite direct sum of simple objects.

**Künneth components of the diagonal.** For a Weil cohomology H, the classes π<sup>j</sup> in H<sup>2 dim X − j</sup>(X) ⊗ H<sup>j</sup>(X) that sum to the class of the diagonal. They are "algebraic" if they come from cycles.

## Main results

**Theorem (semi-simplicity; Theorem 1).** For a field k, a field F of characteristic zero and an adequate relation ∼, the following are equivalent. (a) M<sub>k</sub> is a semi-simple abelian category. (b) A<sup>dim X</sup>(X × X) is a finite-dimensional semi-simple F-algebra for every X. (c) The relation ∼ is numerical equivalence.
- Step 1, (c) implies (b): by the trace formula ⟨f · <sup>t</sup>g⟩ = Σ (−1)<sup>i</sup> Tr<sub>i</sub>(f ∘ g), an element of the radical has zero intersection number with everything, so it is zero.
- Step 2, (a) implies (c): in a semi-simple category every non-zero map from the unit motive into (X, id, j) splits, and a splitting is a cycle with intersection number 1.

**Lemma (algebra to category; Lemma 2).** Let C be an F-linear pseudo-abelian category in which End(M) is a finite-dimensional semi-simple F-algebra for every object M. Then C is a semi-simple abelian category.

**Corollary (the radical; Corollary 1).** If the Künneth components of the diagonal of X are algebraic, then the kernel of the map from correspondences modulo homological equivalence to correspondences modulo numerical equivalence is the Jacobson radical, and it is a nilpotent ideal.

**Corollary (Tannakian; Corollary 2).** If the Künneth components of the diagonal are algebraic for every variety over k, then motives modulo numerical equivalence form a semi-simple F-linear Tannakian category.
- Step 1: the Künneth components give every motive a ℤ-grading.
- Step 2: change the sign of the commutativity constraint by (−1)<sup>rs</sup> on degrees r and s. Ranks become non-negative, and a theorem of Deligne applies.

## Note, then ignore

- Unusual definition of motives. Jannsen uses triples (X, p, m) with one formula for morphisms, which he says is equivalent to the usual two-step construction. Safe to skip on a first reading.
- Reduction to ℚ<sub>ℓ</sub> coefficients. The proof extends scalars from ℚ to F and works with ℓ-adic cohomology, because the radical behaves well under base change. Safe to skip.
- No fibre functor without the sign change. With the naive commutativity constraint the rank of a motive can be negative, so the category cannot be Tannakian as it stands. Safe to skip until you reach Corollary 2.
- Where the Künneth hypothesis holds. The paper lists dimension at most 2, abelian varieties, and all varieties when k is algebraic over a finite field. Safe to skip.
- A corrected lemma. Remark 3 says Lemma 6.6 of Deligne and Milne is false and that Lemma 2 here replaces it. Safe to skip.

## One next step

Open the paper at page 448 and read only the statement of Theorem 1 and the five-line proof that (a) implies (c).

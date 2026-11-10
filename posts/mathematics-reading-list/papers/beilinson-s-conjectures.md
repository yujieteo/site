source: https://virtualmath1.stanford.edu/~conrad/BSDseminar/refs/BeilinsonintroII.pdf
slogan: A regulator map from K-theory to Hodge theory should have a determinant equal to the leading coefficient of an L-function, up to a rational number.
basis: the introduction and the main theorem statements

## Before you start

Most of this survey is conjecture, and the author says so on page 3. That can stir a particular discomfort: you cannot tell what to hold on to when the ground is "should" and "is expected". You are allowed to feel lost among motives that may not exist. If you want to know why the class number formula is the first case of something much larger, this is the map. Enjoy the pattern first. Checking details can come later, or never.

## The story

Dirichlet's formula says the leading coefficient of ζ<sub>F</sub>(s) at s = 0 is a regulator, the covolume of the units under the logarithm map, times simple rational factors. People wanted the same for other integers and for other L-functions. Lichtenbaum guessed that higher K-groups replace the units, and Borel proved this for number fields. Bloch found a regulator on K<sub>2</sub> of an elliptic curve. Beilinson's idea is to do this for every smooth projective variety X over ℚ. He takes a piece of the K-theory of X, calls it motivic cohomology, and maps it to Deligne cohomology, a real vector space built from Hodge theory. The dimension of the target equals the order of vanishing of the L-function. The determinant of the map should be the leading coefficient, up to ℚ<sup>\*</sup>.

## Main definitions

**Motive h<sup>i</sup>(X)(n) and its weight.** For X smooth projective over ℚ, the motive M = h<sup>i</sup>(X)(n) is used through its realisations: ℓ-adic, Betti and de Rham cohomology in degree i, twisted n times. Its weight is w = i − 2n. The L-function L(h<sup>i</sup>(X), s) is the Euler product of the characteristic polynomials of Frobenius on the ℓ-adic realisation.
- Functional equation: it is expected to relate s and i + 1 − s.

**Motivic cohomology (5.1.1).** H<sup>i</sup><sub>M</sub>(X, ℚ(j)) is the subspace of K<sub>2j−i</sub>(X) ⊗ ℚ on which the Adams operations act with weight j.
- Integral part: H<sup>i</sup><sub>M</sub>(X, ℚ(j))<sub>ℤ</sub> is the image of the K-theory of a proper flat model of X over ℤ.

**Deligne period map and its cokernel.** The map α<sub>M</sub> goes from the part of M<sub>B</sub> ⊗ ℝ fixed by complex conjugation to (M<sub>dR</sub>/F<sup>0</sup>) ⊗ ℝ. For negative weight it is injective. Its cokernel is the target of the regulator, and it equals an Ext<sup>1</sup> group of real mixed Hodge structures, written H<sup>i+1</sup>(X/ℝ, n) below.
- Rational structures: det Coker(α<sub>M</sub>) carries two ℚ-structures, D(M) and B(M), matched to the two sides of the functional equation.

**Regulator.** The map r from H<sup>i+1</sup><sub>M</sub>(X, ℚ(n))<sub>ℤ</sub> to H<sup>i+1</sup>(X/ℝ, n). On H<sup>1</sup><sub>M</sub>(X, ℚ(1)), which is the invertible functions tensored with ℚ, it sends f to log |f|.

## Main results

All three statements are conjectures. X is smooth projective over ℚ, and w = i − 2n &lt; 0.

**Conjecture (away from the centre; 6.1).** Assume w ≤ −3. Then r ⊗ ℝ is an isomorphism. The image under r of the determinant of motivic cohomology equals L(h<sup>i</sup>(X), n) · D(M), and also L<sup>\*</sup>(h<sup>i</sup>(X), i + 1 − n) · B(M), where L<sup>\*</sup> is the leading coefficient.
- Case: if M is critical, the target is zero and this reduces to Deligne's conjecture that L(M, 0) is a rational multiple of the period c<sup>+</sup>(M).

**Conjecture (near the centre; 6.3).** Assume w = −2, so i = 2n − 2. Then the statement of 6.1 holds after adding to the source the group N<sup>n−1</sup>(X) of codimension n − 1 cycles modulo homological equivalence, tensored with ℚ.
- Reason: the L-function can have a pole at s = n, and Tate's conjecture says its order is the dimension of N<sup>n−1</sup>(X).

**Conjecture (at the centre; 6.5).** Assume w = −1, so i = 2n − 1. Then the height pairing on homologically trivial cycles is non-degenerate. The order of vanishing of L(h<sup>2n−1</sup>(X), s) at s = n equals the dimension of CH<sup>n</sup>(X)<sub>0</sub> ⊗ ℚ. The leading coefficient is c<sup>+</sup> times the determinant of the height pairing, up to ℚ<sup>\*</sup>.
- Caveat: the survey says every proposed definition of the height pairing is conditional, except for n = 1.

**Claim (what is known; 6.6).** The survey says 6.1 is known essentially only for X = Spec(F) with F a number field. In many other cases one can check a weak form, with motivic cohomology replaced by a suitable ℚ-subspace.
- Step 1: construct elements in motivic cohomology.
- Step 2: compute their regulators and compare with the L-value.

## Note, then ignore

- Two rational structures. D(M) and B(M) differ by the factors in the functional equation, so the conjecture can be read at s = n or at s = i + 1 − n. Safe to skip on a first reading.
- Integral models. The subscript ℤ should not depend on the model, but this is itself conjectural when no regular model is known. Safe to skip.
- Mixed motives. Sections 3, 4 and 9 rewrite everything as Ext groups in a category of mixed motives whose existence is assumed. Safe to skip at first.
- Deligne cohomology or absolute Hodge cohomology. The survey uses both names for closely related targets. Safe to skip.
- Only up to ℚ<sup>\*</sup>. The exact rational factor is the subject of the Bloch and Kato conjecture, which the survey only mentions. Safe to skip.

## One next step

Open the survey at page 1 and read formula (0.1) and the two paragraphs after it. Then jump to Conjecture 6.1 on page 19 and compare the shapes.

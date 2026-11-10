source: https://arxiv.org/pdf/2409.19549
slogan: Let a Calabi-Yau motive move in a hypergeometric family, and its regulator becomes an explicit power series you can test against L-values.
basis: the abstract and introduction

## Before you start

This paper may raise the feeling of being under-prepared. It asks for Hodge theory, higher Chow groups, Picard-Fuchs equations and Beilinson's conjectures, and the main formulas fill half a page each. You can let that feeling stay without acting on it. The authors start from log of the golden ratio and a quadratic equation, which needs none of the above. If you like seeing an L-value appear from a series you can sum by hand, the early sections give that. Read those for pleasure. The 3-fold cases are a bonus.

## The story

Beilinson's conjectures say that special values of L-functions of a motive equal, up to a rational number, a regulator: a determinant of integrals attached to classes in motivic cohomology. To test this you must construct the classes and compute the integrals. For Calabi-Yau 3-folds with a rank 4 motive, almost nothing was computed. The authors stop looking at one variety. They put the motive X<sub>t</sub> in a one-parameter hypergeometric family. Then the wanted class is cut out by the total space of the family, and its regulator, as a function of t, solves an inhomogeneous Picard-Fuchs equation. That gives a series. The model case is the pair of roots of x<sup>2</sup> + (2 − 1/t)x + 1 = 0, where the regulator is −2 log t − 2 Σ C(2k,k) t<sup>k</sup>/k and specialises to Dirichlet regulators of real quadratic fields.

## Main definitions

**Higher Chow group and regulator.** CH<sup>p</sup>(X, r) is the homology of Bloch's complex of codimension p cycles on X × (ℙ<sup>1</sup> minus {1})<sup>r</sup> that meet the faces properly. Rationally these groups are the graded pieces of algebraic K-theory K<sub>r</sub>(X). The Abel-Jacobi map sends a class to Ext<sup>1</sup> of mixed Hodge structures from ℤ(0) to H<sup>2p−r−1</sup>(X)(p).
- Real version: project to real coefficients and take a determinant against Betti classes. This is the Beilinson regulator.

**Normal function.** For a family X<sub>t</sub> over U ⊂ ℙ<sup>1</sup>, a Hodge class on the total space gives a family of extension classes in Ext<sup>1</sup>(ℚ(0), H<sup>3</sup>(X<sub>t</sub>, ℚ(p))). This family is the normal function. A family of cycles produces one through the Abel-Jacobi map.

**Hypergeometric variation.** A variation of Hodge structure on 𝔾<sub>m</sub> whose period satisfies a hypergeometric equation with indices (a, b). By a result of Katz that the authors cite, the intersection cohomology IH<sup>1</sup>(𝔾<sub>m</sub>, H) is then one-dimensional, so it is of Tate type.
- Tuning: after the double cover z ↦ z<sup>2</sup>, the indices decide the weights, and so decide whether the expected cycle lies in K<sub>0</sub>, K<sub>2</sub> or K<sub>4</sub>.

## Main results

**Theorem (two K<sub>4</sub> classes; Theorem A, cf. Theorem 8.2).** Let X<sub>t</sub> ⊂ (ℙ<sup>1</sup>)<sup>4</sup> be the singular Calabi-Yau 3-fold family 1 = t Π (x<sub>i</sub>+1)<sup>2</sup>/x<sub>i</sub>, with hypergeometric data ((½)<sup>4</sup>, (1)<sup>4</sup>) and period Σ C(2k,k)<sup>4</sup> t<sup>k</sup>. For every t in (0, 1/256) there are two linearly independent cycles in CH<sup>4</sup>(X<sub>t</sub>, 4). Their regulator is an explicit 2 × 2 determinant of hypergeometric-type series in t and log t.
- Integrality: for t = 4<sup>−5</sup>, 4<sup>−6</sup>, 4<sup>−7</sup>, 4<sup>−8</sup> the cycles extend to an integral model.
- Use: at these four values the authors check Beilinson's conjecture numerically.

**Theorem (a K<sub>2</sub> class; Theorem B, cf. Theorem 10.2).** For a second family, built as a Hadamard fibre product of two elliptic families, and every t > 2<sup>−10</sup>, there is a cycle Z<sub>t</sub> in CH<sup>3</sup>(X<sub>t</sub>, 2) whose regulator is an explicit 2 × 2 determinant of series. The cycle extends to an integral model when t = n<sup>2</sup>/4<sup>k</sup> with n a positive integer and k an integer.
- Step 1: take known families of cycles on each elliptic family and form their product on X<sub>t</sub>.
- Step 2: continue the regulator analytically with Mellin-Barnes integrals.

**Theorem (normalised lift; Theorem C, cf. Theorem 5.5).** Let M be a weight n polarised ℚ-variation of motivic origin on U ⊂ ℙ<sup>1</sup> with all Hodge numbers 1, let μ be a section of the top Hodge line bundle with Picard-Fuchs operator L, and let ν be a non-zero admissible normal function from a cycle, non-singular on 𝔾<sub>m</sub>. Then ν has a multivalued lift whose pairing with μ is sent by L to a non-zero polynomial with algebraic coefficients. The paper lists further standing assumptions in its Section 4, which I did not check.

**Claim (numerical evidence).** For rational t where the cycles are integral, the ratio of the relevant derivative of L(M<sub>t</sub>, s) at 0 to the regulator r(t) is numerically rational. This is a computer check, not a proof.

## Note, then ignore

- "Mobile" in the title. It means the motive moves in a family. It is not a technical term. Safe to skip on a first reading.
- Integral or rational regulators. The conjectures concern real regulators, but the authors work with finer ones that vary holomorphically in t. Safe to skip.
- Double covers. Several families are pulled back along z ↦ z<sup>2</sup> to split the Tate classes by weight. Safe to skip.
- Standard conjectures on L. The numerical L-values assume analytic continuation and a functional equation for these Sp<sub>4</sub> motives. Safe to skip.
- Cycles are sometimes bypassed. Normal functions give the regulator without the cycle. The cycle is needed only to decide which t are integral. Safe to skip.

## One next step

Open the paper at Section 3.1 and read the half page on the quadratic equation, up to formula (3.2). It is the whole method with a pair of points in place of a 3-fold.

source: https://sites.math.duke.edu/~dasgupta/papers/Trilogies.pdf
slogan: Six formulas, each tying a p-adic L-value to the logarithm of a special global object, reduce to two families of three.
basis: the introduction and the main theorem statements

## Before you start

This survey is 40 pages by six authors, and its opening pages already use p-adic modular forms, Coleman integration and Fontaine's period rings. The likely feeling is overwhelm, with a worry that every paragraph needs a book you have not read. That reaction fits the text. It is not a verdict on you. If you want to see how people attack the Birch and Swinnerton-Dyer conjecture, the table in the Conclusion gives you the map on one page. Enjoy the pattern first. The details can stay unread.

## The story

People want to know when the L-function of an elliptic curve controls its rational points. The route due to Kolyvagin needs an Euler system: a family of Galois cohomology classes built from explicit global objects, tied to an L-value. Few are known, and each looks like a separate miracle. The survey lines up six. In each, a p-adic L-function is evaluated at a point outside the range where it interpolates classical values, and the answer is a p-adic logarithm or regulator of the global object. The first trilogy is circular units, elliptic units and Heegner points. The second is Beilinson-Kato elements, Beilinson-Flach elements and Gross-Kudla-Schoen diagonal cycles. Within each trilogy, the earlier cases arise from the last by replacing cusp forms with Eisenstein series.

## Main definitions

**Kubota-Leopoldt p-adic L-function.** Let χ be a primitive, non-trivial, even Dirichlet character of conductor N. Then L<sub>p</sub>(s, χ) is the p-adic analytic function on ℤ/(p−1)ℤ × ℤ<sub>p</sub> with L<sub>p</sub>(1−k, χ) = (1 − χ(p)p<sup>k−1</sup>) L(1−k, χ) for even k ≥ 2.
- Construction: it is the constant term of a p-adic family of Eisenstein series.

**Circular unit.** An expression 1 − ζ<sup>a</sup>, or a quotient of two such, where ζ is a primitive N-th root of unity. These are units in the cyclotomic field ℚ(ζ) that are compatible under norms up the tower of p-power cyclotomic fields.

**Heegner point.** Let K be an imaginary quadratic field with an ideal 𝔫 such that O<sub>K</sub>/𝔫 ≅ ℤ/Nℤ. The CM point (A, t<sub>𝔫</sub>) on X<sub>0</sub>(N) gives the class P<sub>K</sub> of (A, t<sub>𝔫</sub>) − (∞) in J<sub>0</sub>(N)(K). For an elliptic curve E of conductor N, P<sub>K,f</sub> is its image in E(K) under the modular parametrisation.

**Euler system.** The survey does not fix axioms. It uses the term for a family of global cohomology classes, with values in a p-adic Galois representation, that vary in a p-adic family and are tied to L-values.

## Main results

**Theorem (Leopoldt; Theorem 1.1).** Let χ be a non-trivial even primitive Dirichlet character of conductor N, and g(χ) its Gauss sum. Then L<sub>p</sub>(1, χ) = −(1 − χ(p)p<sup>-1</sup>) / g(χ<sup>-1</sup>) × Σ χ<sup>-1</sup>(a) log<sub>p</sub>(1 − ζ<sup>a</sup>), the sum over a from 1 to N−1.
- Step 1: both sides are constant terms of rigid analytic functions on the ordinary locus of a modular curve.
- Step 2: the two functions have the same higher q-expansion coefficients and the same non-trivial character, so they are equal.

**Theorem (p-adic Gross-Zagier, special case of Bertolini-Darmon-Prasanna; Theorem 1.4).** Let f be a normalised cuspidal eigenform of weight 2 on Γ<sub>0</sub>(N), attached to an elliptic curve E, with N prime to p. Let K and 𝔫 be as above. Then L<sub>p</sub>(f, K, 1, 1) = ((1 − a<sub>p</sub>(f) + p)/p)<sup>2</sup> log<sub>p</sub>(P<sub>K,f</sub>)<sup>2</sup>, where log<sub>p</sub> is the formal group logarithm on E. The section also assumes that p splits in K, and makes simplifying assumptions on K.
- Step 1: Waldspurger's formula writes the L-values as squares of values of derivatives of f at the CM point.
- Step 2: the p-adic limit is the Coleman primitive of the differential of f at that point, which is log<sub>p</sub> of the Heegner point.

**Theorem (a case of Birch and Swinnerton-Dyer; Theorem 2.9, proved in work the survey cites as [DR2]).** Let E be an elliptic curve over ℚ. Let ρ<sub>1</sub>, ρ<sub>2</sub> : G<sub>ℚ</sub> → GL<sub>2</sub>(ℂ) be continuous odd representations attached to weight one modular forms, with det ρ<sub>1</sub> · det ρ<sub>2</sub> = 1. Assume some σ acts through ρ<sub>1</sub> ⊗ ρ<sub>2</sub> with distinct eigenvalues. If L(E ⊗ ρ<sub>1</sub> ⊗ ρ<sub>2</sub>, 1) ≠ 0, then ρ<sub>1</sub> ⊗ ρ<sub>2</sub> does not occur in E(ℚ̄) ⊗ ℂ.
- Step 1: diagonal cycles on a triple product of modular curves give classes that vary in p-adic families.
- Step 2: the weight one specialisation is crystalline at p exactly when the L-value vanishes.

**Claim (the organising table; Conclusion).** Each of the six Euler systems has a p-adic L-function, a p-adic special value formula and, in five cases, an application to the Birch and Swinnerton-Dyer conjecture. Circular units have none.

## Note, then ignore

- Simplifying hypotheses on K. Sections 1.2 and 1.3 assume class number one, unit group ±1 and odd discriminant. They keep the formulas short. Safe to skip.
- Coleman primitives. These are p-adic antiderivatives of differentials, fixed by a Frobenius condition. Every proof uses them, but you can read "p-adic integral" and move on. Safe to skip at first.
- Bloch-Kato logarithm and dual exponential. These extend the p-adic logarithm to general Galois representations, using Fontaine's ring B<sub>dR</sub>. They restate the formulas in cohomology. Safe to skip.
- State of the art. The survey describes some of the Beilinson-Flach work as in progress at the time of writing. Later papers may have settled it. This does not change the picture.
- Another p-adic Gross-Zagier formula. Perrin-Riou's version uses p-adic heights and a derivative inside the interpolation range. The survey notes it and does not use it. Safe to skip.

## One next step

Open the PDF at the Conclusion (page 35) and read the six rows of the table, left to right.

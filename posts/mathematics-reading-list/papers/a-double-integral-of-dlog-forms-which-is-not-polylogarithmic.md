source: https://arxiv.org/pdf/2006.09413
slogan: Two dlog forms integrated on the curve y² = 1 + x³ give an L-value of a cusp form, so dlog integrands do not guarantee polylogarithms.
basis: the introduction and the main theorem statements

## Before you start

The paper is 25 pages and its first sentence is about Feynman integrals, while its proofs speak of motivic periods and mixed Hodge structures. The likely feeling is shame at standing between two fields and owning neither vocabulary. Many readers of this paper are in that position, physicists and mathematicians alike, and the feeling is allowed. If you want one concrete example of an elliptic curve hiding inside an innocent-looking integral, this is it. Read for the example and the pleasure of it. The category theory is optional.

## The story

Many Feynman integrals reduce to iterated integrals of forms d log f. When f is a rational function, such an integral is always a combination of multiple polylogarithms at algebraic points, and those are well understood. When f contains a square root, people still found polylogarithms in every case they tried. A folklore belief grew: dlog integrand in, polylogarithm out. Brown and Duhr give a counterexample of length two. One of the two forms contains √(1 + x³), and y² = 1 + x³ is an elliptic curve E, so no change of variables removes the root. They show the integral carries a non-trivial extension of H<sup>1</sup>(E) by a Tate-type object. Numerically the obstruction is the value at 2 of the L-function of the weight two cusp form η(τ)<sup>4</sup>.

## Main definitions

**Iterated integral.** For one-forms ω<sub>1</sub>, …, ω<sub>n</sub> and a path γ, pull the forms back to [0, 1] as f<sub>i</sub>(t) dt and integrate f<sub>1</sub>(t<sub>1</sub>) ⋯ f<sub>n</sub>(t<sub>n</sub>) over 0 ≤ t<sub>1</sub> ≤ ⋯ ≤ t<sub>n</sub> ≤ 1. It is homotopy invariant when it depends only on the homotopy class of γ.

**Multiple polylogarithm.** I(a<sub>1</sub>, …, a<sub>n</sub>; z) is the integral from 0 to z of I(a<sub>2</sub>, …, a<sub>n</sub>; t) dt/(t − a<sub>1</sub>), starting from I(; z) = 1. These are iterated integrals of dlog forms with rational arguments.

**The two integrals.** Let ρ = e<sup>−iπ/3</sup>. Both integrate (ρ − ρ̄)<sup>−1</sup> d log((x<sub>1</sub> − ρ)/(x<sub>1</sub> − ρ̄)) ∧ d log((√(1 + x<sub>2</sub>³) + 1)/(√(1 + x<sub>2</sub>³) − 1)).
- I: over the region 2 ≤ x<sub>1</sub> ≤ x<sub>2</sub> ≤ ∞.
- I<sub>E</sub>: twice the real part over −1 ≤ x<sub>1</sub> ≤ x<sub>2</sub> ≤ ∞.

**Motivic period.** A formal symbol [M, σ, ω]: an object M in a category of realisations, a Betti homology class σ and a de Rham class ω. The period map sends it to the number ∫<sub>σ</sub> ω. Relations between motivic periods are those forced by geometry. The paper uses "motive" in this loose sense.

## Main results

**Theorem (non-split extension; Lemma 5.1).** The integral I<sub>E</sub> is a period of an object N<sub>1</sub> that is an extension of H<sup>1</sup>(E) by a Dirichlet object ℚ<sub>χ</sub>(−2). This extension does not split.
- Step 1: if it split, the motivic version of I<sub>E</sub> would be a real period of H<sup>1</sup>(E) lying in F², and F²H<sup>1</sup>(E) = 0, so it would vanish.
- Step 2: Section 4 shows that I<sub>E</sub> is negative, so it is not zero. That is a contradiction.

**Theorem (not polylogarithmic; Corollaries 5.2 and 5.3).** The motivic versions of I<sub>E</sub> and I are algebraically independent over the ring of motivic periods of mixed Artin-Tate objects. In particular they are algebraically independent from motivic multiple polylogarithms at algebraic points.
- Step 1: a Galois conjugate of the motivic I<sub>E</sub> is a non-zero period of H<sup>1</sup>(E), of Hodge type (1, 0) and (0, 1). Artin-Tate periods have type (p, p) only.
- Step 2: the motivic I equals one sixth of the motivic I<sub>E</sub> plus an Artin-Tate period, so I inherits the obstruction.

**Consequence (conditional).** Assume the period conjecture, which says the period map is injective. Then the numbers I and I<sub>E</sub> themselves are not polynomial combinations of polylogarithm values at algebraic arguments.

**Claim (numerical; equations 1.11 and 1.12).** With f = η(τ)<sup>4</sup> the cusp form of weight two for Γ(6), the PSLQ algorithm finds I<sub>E</sub> equal to an explicit constant, built from π and √3, times the completed L-value Λ(f, 2). The Artin-Tate part is a multiple of the Clausen value Im Li<sub>2</sub>(e<sup>iπ/3</sup>). The authors do not prove these two evaluations here.

## Note, then ignore

- The integration cycle matters. The same integrand over a third cycle gives a polylogarithmic number. So the integrand alone decides nothing. Worth knowing, and safe to leave at that on a first reading.
- The category H. The proofs take place in a category of Betti and de Rham realisations, not in a true category of motives. Safe to skip.
- Torsion points. The lines y = ±1, x = ρ, x = ρ̄ meet E only at torsion points, which are cusps under the modular parametrisation by Γ(6). This is what makes the example computable. Safe to skip.
- Real part. Taking twice the real part in I<sub>E</sub> picks out the part invariant under complex conjugation. Safe to skip.
- Section 6. It rewrites I as a double integral of two weight two Eisenstein series. It supports the numerics and is not needed for the proof. Safe to skip.

## One next step

Open the paper at Section 1.3 (page 3) and read from equation (1.4) to equation (1.7). Then look at Figure 1 on page 7.

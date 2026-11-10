source: https://math.uchicago.edu/~may/VIGRE/VIGRE2007/REUPapers/FINALFULL/Raskin.pdf
slogan: For a curve over a finite field, the Riemann hypothesis reduces to one Cauchy-Schwarz inequality on the surface X × X.
basis: the introduction and the main theorem statements

## Before you start

This is a 20-page student report written in the language of schemes, line bundles and divisors. If that language is half-learned, you may feel a small dread of stalling on page 6. That is an understandable thing to feel, and there is no need to argue with it. The reward is concrete: a complete proof of a Riemann hypothesis that you can hold in your head. Start with the last page, where the proof closes in a few lines, and enjoy that. Go back for the rest only if you want to.

## The story

Weil conjectured three properties of the zeta function of a smooth projective variety over 𝔽<sub>q</sub>: rationality, a functional equation, and a Riemann hypothesis. For curves all three can be proved with classical tools, and Raskin does so, following lectures of Beilinson. Rationality and the functional equation come from counting effective divisors with the Riemann-Roch theorem and Serre duality. The Riemann hypothesis is harder. The key move is to turn it into an estimate: the curve has q<sup>n</sup> + O(q<sup>n/2</sup>) points over 𝔽<sub>q<sup>n</sup></sub>. Points over 𝔽<sub>q<sup>n</sup></sub> are fixed points of the n-th power of Frobenius. So the count is the intersection number of the diagonal with the graph of Frobenius on the surface X × X. The Hodge index theorem makes the intersection form negative definite away from two obvious classes, and Cauchy-Schwarz gives the error term.

## Main definitions

**Zeta function.** For X of finite type over 𝔽<sub>q</sub>, Z(X, t) is the product over closed points x of (1 − t<sup>deg x</sup>)<sup>−1</sup>, where the residue field at x has q<sup>deg x</sup> elements (Example 1.3).
- Point counts: t · d/dt log Z(X, t) = Σ |X(𝔽<sub>q<sup>n</sup></sub>)| t<sup>n</sup> (Proposition 1.5).

**Intersection number.** On a smooth projective surface Y over an algebraically closed field, for a smooth curve C and a divisor D, (C.D) is the degree of the line bundle O(D) restricted to C (Definition 5.5). It extends to all pairs of divisors by Euler characteristics and linearity.
- Transverse case: (C.D) is the number of intersection points (Proposition 5.3).

**Néron-Severi group.** NS(Y) is the group of divisors on Y modulo those whose intersection number with every divisor is 0 (Definition 5.9). The intersection form is nondegenerate on it.

**Frobenius endomorphism.** The absolute Frobenius of X<sub>0</sub> is the identity on points and a ↦ a<sup>q</sup> on functions. Its base change Fr to X, the curve over the algebraic closure, is the Frobenius endomorphism (Definition 6.1). Its fixed points under the n-th power are X(𝔽<sub>q<sup>n</sup></sub>).

## Main results

Throughout, X<sub>0</sub> is a smooth projective geometrically connected curve of genus g over 𝔽<sub>q</sub>.

**Theorem (Rationality; Theorems 2.6 and 2.7).** Z(X<sub>0</sub>, t) = f(t)/((1 − t)(1 − qt)), where f is a polynomial with rational coefficients, constant term 1 and degree at most 2g. Corollary 2.10 then shows the degree is exactly 2g.
- Step 1: group effective divisors by their line bundle. A line bundle L contributes (q<sup>h<sup>0</sup>(L)</sup> − 1)/(q − 1) divisors.
- Step 2: for degree above 2g − 2, Riemann-Roch gives h<sup>0</sup>(L) = deg L + 1 − g, so the tail is a geometric series.

**Theorem (Functional equation; Theorem 2.8).** Z(X<sub>0</sub>, q<sup>−1</sup>t<sup>−1</sup>) = q<sup>1−g</sup> t<sup>2−2g</sup> Z(X<sub>0</sub>, t). Consequently f(t) is the product of (1 − ω<sub>i</sub>t) for i from 1 to 2g, with the ω<sub>i</sub> ordered so that ω<sub>i</sub> ω<sub>2g+1−i</sub> = q (Corollary 2.10).

**Theorem (Riemann hypothesis for curves; Theorem 3.1).** |ω<sub>i</sub>| = q<sup>1/2</sup> for all i.
- Step 1 (Proposition 3.2): this is equivalent to |X<sub>0</sub>(𝔽<sub>q<sup>n</sup></sub>)| = q<sup>n</sup> + O(q<sup>n/2</sup>) as n → ∞. The pairing ω<sub>i</sub> ω<sub>2g+1−i</sub> = q turns an upper bound into an equality.
- Step 2 (Lemma 6.7): on Y = X × X, write the diagonal as [H] + [V] + u′, with H and V the horizontal and vertical curves. The pullback T by Fr × id satisfies (Tv, Tw) = q(v, w). The count is q<sup>n</sup> + 1 + (T<sup>n</sup>u′, u′), and Cauchy-Schwarz bounds the last term by a constant times q<sup>n/2</sup>.

**Theorem (Hodge index; Theorem 6.6).** On NS(Y) ⊗ ℚ the intersection form is positive definite on a subspace of dimension 1 and negative definite on a complement. Raskin quotes this from Mumford and does not prove it.

## Note, then ignore

- Convergence. Section 1.2 proves that the product for the zeta function converges for Re(s) > dim X. The proofs treat Z(X, t) as a formal power series. Safe to skip on a first reading.
- Lemma 1.1. A field that is finitely generated as a ring is finite. This only makes the definition of the zeta function legal. Safe to skip.
- X<sub>0</sub> and X. The curve over 𝔽<sub>q</sub> is X<sub>0</sub>, and X is its base change to the algebraic closure. Intersection theory needs the algebraically closed field. Safe to skip the bookkeeping.
- Section 4. Pull back and push forward of divisors are set up in general to prove one identity, that pulling back then pushing forward multiplies by the degree. Safe to skip.
- Singular curves. Definition 5.7 extends intersection numbers to singular curves through Euler characteristics. The main argument uses it only quietly. Safe to skip.

## One next step

Open the PDF at page 19 and read Lemma 6.7 and its proof, which ends at the top of page 20.

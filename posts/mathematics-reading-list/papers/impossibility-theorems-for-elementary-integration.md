source: https://www.claymath.org/library/academy/LectureNotes05/Conrad.pdf
slogan: Liouville's theorem turns "no elementary antiderivative" into a check on rational functions, so the Gaussian integral falls in a page.
basis: the introduction and the main theorem statements

## Before you start

These notes are 13 pages and ask only for calculus and polynomial rings over a field. The likely feeling is a quiet doubt: "I use the Gaussian integral every week and never knew why it has no formula." You are allowed to feel that. If you want to see an impossibility proof that you can check by hand, this is one. Read it for fun. Stopping after Example 4.6 is a fine place to stop.

## The story

Calculus students learn that the integral of e<sup>−x²</sup> has no formula, and nobody shows them why. The first block is that "formula" has no definition. Conrad fixes that. An elementary function is one that lives in a field built from ℂ(x) by adding, one at a time, exponentials, logarithms and roots of polynomial equations. Trigonometric functions come for free once you allow complex values. Liouville's theorem then says an elementary antiderivative can only have one shape: a combination of logarithms plus one more function, all from the field you started in. For integrands f·e<sup>g</sup> with f and g rational, this collapses to a question about one first-order differential equation over ℂ(x). A pole count answers it.

## Main definitions

**Elementary field (Definition 3.3).** A field K = ℂ(x, f<sub>1</sub>, ..., f<sub>n</sub>) of meromorphic functions on an interval, where each f<sub>j</sub> is an exponential or a logarithm of an element of K<sub>j−1</sub> = ℂ(x, f<sub>1</sub>, ..., f<sub>j−1</sub>), or is algebraic over K<sub>j−1</sub>. An elementary function is an element of some elementary field.
- Logarithm: a logarithm of a non-vanishing g is any solution of y′ = g′/g.
- Example: ℂ(x, sin x, cos x) = ℂ(x, e<sup>ix</sup>) is elementary.

**Integrable in elementary terms (Definition 3.8).** A meromorphic function f is integrable in elementary terms if f = g′ for some elementary function g.

## Main results

**Theorem (closed under derivative; Theorem 3.6).** Every elementary field is closed under differentiation. So a function with an elementary antiderivative is itself elementary.

**Theorem (Liouville; Theorem 4.1).** Let f be an elementary function and K an elementary field containing f. Then f is integrable in elementary terms if and only if f = Σ c<sub>j</sub> g<sub>j</sub>′/g<sub>j</sub> + h′ for some nonzero constants c<sub>j</sub> ∈ ℂ, nonzero g<sub>j</sub> ∈ K and some h ∈ K.
- Point: the g<sub>j</sub> and h lie in K itself. No new functions are needed beyond logarithms.
- Proof: the notes do not prove it. They refer to reference [1], sections 4 and 5.

**Theorem (criterion; Theorem 4.4).** Let f, g ∈ ℂ(X) with f ≠ 0 and g nonconstant. Then f(x)e<sup>g(x)</sup> is integrable in elementary terms if and only if some rational function R ∈ ℂ(X) satisfies R′ + g′R = f.
- Step 1: apply Liouville's theorem with K = ℂ(x, e<sup>g</sup>).
- Step 2: treat e<sup>g</sup> as a variable Y over ℂ(X) and compare both sides as polynomials in Y. If R exists, R·e<sup>g</sup> is the antiderivative.

**Theorem (two examples; Examples 4.6 and 4.7).** Neither e<sup>−x²</sup> nor e<sup>x</sup>/x is integrable in elementary terms. The second is the logarithmic integral ∫ dt/log t after t = e<sup>x</sup>.
- Gaussian: R′ − 2XR = 1 has no polynomial solution by degree. At a pole of order μ of R, the term R′ has a pole of order μ + 1 that nothing cancels.
- Logarithmic: R′ + R = 1/X forces a pole of R at 0, and then the left side has a pole of order at least 2.

## Note, then ignore

- Complex values. The notes use ℂ-valued functions of a real variable so that sines and arctangents become exponentials and logarithms. This only makes the impossibility results stronger. Safe to skip on a first reading.
- Intervals of definition. An expression such as a sixth root has different meanings on different intervals. The notes suppress this. Safe to skip.
- Functions versus formal ratios. The notes write ℂ(X) for abstract rational functions and ℂ(x) for actual functions, so that they can evaluate at complex points. Safe to skip.
- Elliptic integrals. Example 4.3 claims ∫ dx/√P(x) is not elementary for P of degree at least 3 with no repeated roots. The argument uses holomorphic 1-forms on a compact Riemann surface and is only sketched. Safe to skip.
- Real-only definitions fail. With real-valued functions and only exp, log and algebraic steps, 1/(1 + x²) would count as not integrable. That is why the complex setting is used. Safe to skip.

## One next step

Open the PDF at page 9 and read Example 4.6 only. It is the whole proof for e<sup>−x²</sup>, given Theorem 4.4.

source: https://www.math.mcgill.ca/goren/SeminarOnCohomology/mycohomologytalk.pdf
slogan: Gauss sums count points on diagonal hypersurfaces exactly, so the Weil conjectures for them follow from one identity and one absolute value.
basis: the full text

## Before you start

This is a 14-page seminar note made mostly of character sums with many indices. The likely feeling is tedium, or a worry that you will lose track of which sum is which. Either is fine to have. You do not need to verify each line. If you want to see the Weil conjectures hold with no cohomology at all, only finite sums of roots of unity, this note gives you that. Take pleasure in the one place where √q appears. The remaining pages can wait.

## The story

How many solutions does a<sub>0</sub>x<sub>0</sub><sup>m</sup> + … + a<sub>l</sub>x<sub>l</sub><sup>m</sup> = 0 have over a finite field F with q elements? Counting solutions of x<sup>m</sup> = α is easy with multiplicative characters: the answer is the sum of χ(α) over characters χ with χ<sup>m</sup> trivial. Adding several such terms forces sums of products of characters over a hyperplane. These are Jacobi sums, and they look hard. The unblocking idea is that every Jacobi sum is a ratio of Gauss sums, and every Gauss sum of a nontrivial character has absolute value exactly √q. So the point count is a main term plus explicit terms of known size. To pass from F to its extensions, the Hasse-Davenport relation says the Gauss sum over the extension of degree k is, up to sign, the k-th power. That makes the zeta function rational, with zeros of the predicted size.

## Main definitions

**Gauss sum.** Let ψ be the additive character of F given by ψ(α) = ζ<sub>p</sub><sup>tr(α)</sup>, with ζ<sub>p</sub> a primitive p-th root of unity and tr the trace to 𝔽<sub>p</sub>. For a multiplicative character χ, extended to 0, the Gauss sum is g(χ) = Σ χ(t)ψ(t) over t in F (Definition 2.3).

**Jacobi sum.** For characters χ<sub>1</sub>, …, χ<sub>l</sub> of F, J(χ<sub>1</sub>, …, χ<sub>l</sub>) is the sum of χ<sub>1</sub>(a<sub>1</sub>)…χ<sub>l</sub>(a<sub>l</sub>) over all tuples with a<sub>1</sub> + … + a<sub>l</sub> = 1 (Definition 3.2).
- Variant: J<sub>0</sub> is the same sum over tuples with a<sub>1</sub> + … + a<sub>l</sub> = 0.

**Zeta function of H.** Let N<sub>k</sub> be the number of points of the hypersurface H over the extension F<sub>k</sub> of degree k. Then Z(H/F, T) = exp(Σ N<sub>k</sub> T<sup>k</sup>/k).
- Lemma 5.1: Z is a ratio of products of (1 − α<sub>i</sub>T) over (1 − β<sub>j</sub>T) exactly when N<sub>k</sub> = Σ β<sub>j</sub><sup>k</sup> − Σ α<sub>i</sub><sup>k</sup> for all k.

## Main results

**Theorem (size of a Gauss sum; Proposition 2.4(c)).** If χ is nontrivial, then g(χ) times its complex conjugate is q, so |g(χ)| = √q.
- Step 1: sum |g<sub>α</sub>(χ)|<sup>2</sup> over all α in F, where g<sub>α</sub> twists ψ by α.
- Step 2: evaluate the sum once by g<sub>α</sub>(χ) = χ(α<sup>−1</sup>)g(χ) and once by orthogonality of additive characters.

**Theorem (Jacobi sums from Gauss sums; Proposition 3.3(d) and (e)).** If χ<sub>1</sub>, …, χ<sub>l</sub> and their product are all nontrivial, then J(χ<sub>1</sub>, …, χ<sub>l</sub>) = g(χ<sub>1</sub>)…g(χ<sub>l</sub>)/g(χ<sub>1</sub>…χ<sub>l</sub>), so |J| = q<sup>(l−1)/2</sup>. If the χ<sub>i</sub> are nontrivial and their product is trivial, then J = −g(χ<sub>1</sub>)…g(χ<sub>l</sub>)/q, so |J| = q<sup>(l−2)/2</sup>.

**Theorem (Hasse-Davenport; Theorem 5.2).** Let χ<sup>(k)</sup> be χ composed with the norm from F<sub>k</sub> to F. Then g(χ<sup>(k)</sup>) = (−1)<sup>k+1</sup> g(χ)<sup>k</sup>. The note cites Ireland and Rosen for the proof and does not give one.

**Theorem (Weil, diagonal hypersurfaces; Theorem 5.3).** Assume m divides q − 1 and all a<sub>i</sub> are nonzero. Let H be the hypersurface a<sub>0</sub>x<sub>0</sub><sup>m</sup> + … + a<sub>l</sub>x<sub>l</sub><sup>m</sup> = 0 in projective space of dimension l over F. Then Z(H/F, T) = P(T)<sup>(−1)<sup>l</sup></sup>/((1 − T)(1 − qT)…(1 − q<sup>l−1</sup>T)). Here P has integer coefficients and degree ((m − 1)<sup>l+1</sup> + (−1)<sup>l+1</sup>(m − 1))/m. Its zeros have absolute value q<sup>−(l−1)/2</sup>, and α ↦ 1/(q<sup>l−1</sup>α) permutes them, which gives the functional equation.
- Step 1: Corollary 4.2 writes N<sub>1</sub> as 1 + q + … + q<sup>l−1</sup> plus (1/q) times a sum of products g(χ<sub>0</sub>)…g(χ<sub>l</sub>), over nontrivial characters of order dividing m with trivial product.
- Step 2: Hasse-Davenport turns each term for F<sub>k</sub> into a k-th power, and Lemma 5.1 reads off P.

## Note, then ignore

- The assumption that m divides q − 1. Solutions of x<sup>m</sup> = α depend only on gcd(m, q − 1), so the note restricts to this case without losing anything for a single field. Safe to skip on a first reading.
- The value χ(0). The trivial character is set to 1 at 0 and every other character to 0. This convention makes the counting formula hold at α = 0. Safe to skip.
- Sign factors. Terms like χ(−1) and (−1)<sup>l+1</sup> appear throughout. They have absolute value 1 and do not affect any estimate. Safe to skip.
- Section 4 detour. The note proves quadratic reciprocity with a Jacobi sum of q copies of the Legendre symbol. It is a side application. Safe to skip.
- The functional equation in full. The explicit constant in Theorem 5.3(c) is left to the reader as a calculation. Safe to skip.

## One next step

Open the PDF at page 3 and read only Proposition 2.4(c) and the short proof of part (c) at the bottom of the page.

source: https://www.math.unipd.it/~lazda/resources/Teaching/Lectures.pdf
slogan: Count vector bundles on a curve over a finite field, substitute powers of t for the weights, and you read off Betti numbers of a moduli space.
basis: the full text

## Before you start

These are 16 pages of lecture notes from a shared course, and they jump from Lecture 3 to Lecture 10. The missing middle can make you uneasy: "have I lost the thread?" That unease is reasonable, and you may keep it. The gaps were other speakers' lectures, not something you failed to read. If you want to see a point count turn into topology in one worked case, the last four pages do it. Read those for pleasure. The rest is optional.

## The story

The Weil conjectures say that the number of points of a smooth projective variety over 𝔽<sub>q</sub> is controlled by its cohomology. Usually people use this from topology to arithmetic: the genus of a curve bounds its point count. Lazda runs it backwards. Take the moduli space of stable bundles of rank n and fixed determinant on a curve. Its Betti numbers are hard to see directly. But its points over 𝔽<sub>q</sub> are bundles, and Siegel's formula counts all bundles at once, weighted by automorphisms. The unstable ones are sorted by their Harder-Narasimhan type and removed by induction on the rank. What is left is a point count written in q and the Frobenius eigenvalues of the curve. Replace q by t<sup>2</sup> and each eigenvalue by −t, and the count becomes the Poincaré polynomial. For ℙ<sup>n</sup> the same recipe turns 1 + q + … + q<sup>n</sup> into 1 + t<sup>2</sup> + … + t<sup>2n</sup>.

## Main definitions

**Zeta function.** For a scheme X of finite type over ℤ, ζ<sub>X</sub>(s) is the product over closed points x of (1 − #k(x)<sup>−s</sup>)<sup>−1</sup>, where k(x) is the residue field.
- X = Spec ℤ: the Riemann zeta function.
- X over 𝔽<sub>q</sub>: with u = q<sup>−s</sup> it equals Z(X, u) = exp(Σ #X(𝔽<sub>q<sup>n</sup></sub>) u<sup>n</sup>/n).

**Weil cohomology theory.** A contravariant functor from smooth projective connected varieties over an algebraically closed field k to graded vector spaces over a field K of characteristic 0. It comes with a cup product, a trace map and a cycle class map. It must be finite dimensional, vanish outside degrees 0 to 2 dim X, and satisfy the Künneth formula and Poincaré duality.

**The count β(n, L).** For a smooth projective curve Y over 𝔽<sub>q</sub> and a line bundle L, β(n, L) is the sum of 1/#Aut(E) over semi-stable bundles E of rank n with determinant L.
- If n is coprime to deg L, semi-stable means stable and #Aut(E) = q − 1.
- So the moduli space N<sub>0</sub>(n, L) has (q − 1) · β(n, L) points over 𝔽<sub>q</sub>.

## Main results

The notes do not number their theorems.

**Theorem (Weil cohomology gives two Weil conjectures; Lectures 2 and 3).** If a Weil cohomology theory exists over the algebraic closure of 𝔽<sub>q</sub>, then for every smooth projective X over 𝔽<sub>q</sub> the function Z(X, u) is rational and satisfies a functional equation relating u and (q<sup>n</sup>u)<sup>−1</sup>, where n = dim X.
- Step 1: the Lefschetz trace formula writes #X(𝔽<sub>q<sup>m</sup></sub>) as an alternating sum of traces of Frobenius, so Z is an alternating product of characteristic polynomials.
- Step 2: Poincaré duality pairs H<sup>i</sup> with H<sup>2n−i</sup> and gives the functional equation.

**Theorem (Siegel's formula; Lecture 10).** Let Y be a smooth projective curve of genus g over 𝔽<sub>q</sub> and L a line bundle on Y. Sum 1/#Aut(E) over all isomorphism classes of rank n bundles E with determinant L, stable or not. The sum equals q<sup>(n<sup>2</sup>−1)(g−1)</sup>/(q − 1) times ζ<sub>Y</sub>(2) ζ<sub>Y</sub>(3) … ζ<sub>Y</sub>(n). The notes state this and do not prove it.

**Theorem (Desale-Ramanan; Lecture 10).** The number β(n, L) depends only on the degree k of L. The bundles of a fixed Harder-Narasimhan type contribute a product of the β(n<sub>i</sub>, k<sub>i</sub>) of the pieces, times a power of the point count of the Jacobian, divided by a power of q.
- Consequence: Siegel's formula becomes an induction on rank for β(n, k).

**Claim (rank 2, degree 1; end of the notes).** For n = 2, k = 1 and q odd, the unstable bundles are extensions of line bundles of degrees r + 1 and −r with r ≥ 0. Their total weight is a geometric series in q times #J(𝔽<sub>q</sub>). Subtracting it from Siegel's formula gives #N<sub>0</sub>(2, L) in terms of q and the Frobenius eigenvalues ω<sub>j</sub> of Y. Putting q = t<sup>2</sup> and −ω<sub>j</sub> = t then gives the Poincaré polynomial. The notes stop before writing the final polynomial.

## Note, then ignore

- Two zeta functions. ζ<sub>X</sub>(s) does not see the base field, while Z(X, u) does through u = q<sup>−s</sup>. They carry the same information. Safe to skip on a first reading.
- The Weil cohomology is not built. The notes say the course uses Monsky-Washnitzer cohomology and proves the trace formula directly, in lectures not included here. Safe to skip.
- Comparison over ℂ. The notes assert that the moduli space over 𝔽<sub>q</sub> has the same Betti numbers as the complex one. No proof is given. Safe to skip.
- Standard conjectures. They would imply the Riemann hypothesis part, and none is known. They are an aside here. Safe to skip.
- Typographical slips. A few indices and exponents in the notes are misprinted, for example a product running over i with factors indexed by j. Safe to skip.

## One next step

Open the notes at the last page and read the three-row table "Similarities with topological approach". It sets the point count next to the Atiyah-Bott method line by line.

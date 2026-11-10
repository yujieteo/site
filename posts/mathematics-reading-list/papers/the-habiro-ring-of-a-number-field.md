source: https://arxiv.org/pdf/2412.04241
slogan: Power series at every root of unity that glue after a Frobenius twist form a ring, and knot invariants live in line bundles over it.
basis: the introduction and the main theorem statements

## Before you start

Expect overwhelm at the range. Seventy pages, four authors, and the introduction moves from knot invariants to algebraic K-theory to p-adic dilogarithms to Donaldson-Thomas invariants within a few pages. Nobody holds all of those at once, and you do not need to. Feeling swamped is a fair response. If you like the idea that one power series can be re-expanded at every root of unity and still make sense, the first ten pages are for you. Read those for pleasure and leave the rest.

## The story

Garoufalidis and Zagier computed a power series Φ(h) from the Kashaev invariant of the figure eight knot. Its coefficients lie in ℚ(√−3) and have huge denominators. Yet the product Φ(h)Φ(−h), rewritten in q − 1 with q = e<sup>h</sup>, has denominators that are only powers of 3. Evaluated at a p-th root of unity, it matches the series from that root of unity, up to a Legendre symbol. Elements of Habiro's ring behave like this, but Habiro's ring has coefficients in ℤ and no such sign. Scholze had an abstract ring from q-de Rham cohomology that fits: it glues expansions through Frobenius, and the sign is Frobenius acting on √−3. The unsymmetrised Φ needs more. It lives in a rank one module, labelled by a class in K<sub>3</sub> of the field.

## Main definitions

**Habiro ring.** H is the inverse limit of ℤ[q]/((1 − q)(1 − q<sup>2</sup>)…(1 − q<sup>n</sup>)). An element has a power series expansion f<sub>m</sub>(x) in ℤ[ζ<sub>m</sub>][[x]] at each root of unity, with q = ζ<sub>m</sub> + x.
- Gluing: f<sub>m</sub>(x + ζ<sub>pm</sub> − ζ<sub>m</sub>) = f<sub>pm</sub>(x) in the p-adic completion, for every prime p. Habiro proved that this property describes the ring.

**Habiro ring of a number field (Definition 1.1).** Let K be a number field, Δ an integer divisible by its discriminant, and R = O<sub>K</sub>[1/Δ]. Then H<sub>R</sub> is the set of families f<sub>m</sub>(x) in R[ζ<sub>m</sub>][[x]] with f<sub>m</sub>(x + ζ<sub>pm</sub> − ζ<sub>m</sub>) = (φ<sub>p</sub> f<sub>pm</sub>)(x) for all primes p and all m. Here φ<sub>p</sub> is the Frobenius of the p-completion of R.

**The module H<sub>R,ξ</sub> (Definitions 1.3 and 1.4).** Fix ξ in K<sub>3</sub>(K). Elements are families of series over K[ζ<sub>m</sub>] whose leading term carries an m-th root of a unit ε<sub>m</sub>(ξ) determined by ξ.
- At each p: after adding the polar term D<sub>p</sub>(ξ)/(m<sup>2</sup> log q) to the logarithm, where D<sub>p</sub> is the p-adic dilogarithm, the family must satisfy a Frobenius congruence.
- Globally: f(q<sup>γ</sup>)<sup>γ</sup> f(q<sup>−1</sup>) must lie in the Habiro ring away from γ.

**Nahm sum.** For a symmetric integer N × N matrix A, the series F<sub>A</sub>(t, q) = Σ (−1)<sup>diag(A)·n</sup> q<sup>(nAn + diag(A)·n)/2</sup> t<sup>n</sup> / ((q; q)<sub>n<sub>1</sub></sub> … (q; q)<sub>n<sub>N</sub></sub>), summed over n in ℤ<sub>≥0</sub><sup>N</sup>.

## Main results

**Theorem (local rank one; Theorem 1).** Let Δ be divisible by the discriminant and by 6, and let p be prime to Δ. For each ξ in K<sub>3</sub>(K) the p-completed module is free of rank 1 over the p-completed Habiro ring.
- Step 1: build explicit invertible sections from the infinite Pochhammer symbol.
- Step 2: apply a logarithmic form of Dwork's lemma.

**Theorem (a regulator to the Picard group; Theorem 2).** H<sub>R,0</sub> = H<sub>R</sub>, and multiplication gives H<sub>R,ξ</sub> ⊗ H<sub>R,ξ′</sub> ≅ H<sub>R,ξ+ξ′</sub>. So each H<sub>R,ξ</sub> is an invertible module, and ξ ↦ H<sub>R,ξ</sub> is a group homomorphism K<sub>3</sub>(K) → Pic(H<sub>R</sub>).

**Theorem (two expansions agree; Theorem 3).** For every symmetric integer matrix A, the expansion of the Nahm sum F<sub>A</sub> at roots of unity equals the family defined by formal Gaussian integration.
- Step 1: both satisfy the same system of q-difference equations.
- Step 2: at q = 1 that system becomes the Nahm equations 1 − z<sub>j</sub> = (−1)<sup>A<sub>jj</sub></sup> t<sub>j</sub> Π z<sub>i</sub><sup>A<sub>ij</sub></sup>.

**Theorem (Chern-Simons series are sections; Theorem 5).** Let z be a non-degenerate solution of the Nahm equations for A, and ξ = Σ [z<sub>j</sub>] its class in the Bloch group of K = ℚ(z). Then the specialisation of the series to t = 1 lies in the module for ξ over R[δ<sup>−1/2</sup>], restricted to roots of unity of order prime to Δ.

## Note, then ignore

- Compatible roots of unity: the paper picks ζ<sub>m</sub> with ζ<sub>pm</sub> − ζ<sub>m</sub> p-adically small, which is not exp(2πi/m). Safe to skip on a first reading.
- The primes 2 and 3: a factor 1/24 from Li<sub>2</sub>(1) causes trouble, so the paper assumes 6 divides Δ. Safe to skip.
- Not a domain: with Δ ≠ 1, the ring H<sub>R</sub> is a product of many integral domains. Safe to skip.
- Bloch group versus K<sub>3</sub>: they agree after tensoring with ℚ, and the paper uses both. Safe to skip.
- Abelian fields: when K is abelian over ℚ, H<sub>R</sub> is just the base change of the Habiro ring of ℤ[1/Δ] to R. The Frobenius twist matters only beyond that case. Safe to skip.

## One next step

Read Section 1.2, "Integrality and congruence experiments". It is one page and contains the numbers that started the paper.

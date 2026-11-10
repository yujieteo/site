source: https://arxiv.org/pdf/1707.01230
slogan: Real analytic functions with two modular weights form an algebra where Eisenstein series can be integrated and cusp forms cannot.
basis: the introduction and the main theorem statements

## Before you start

The first page mentions motives, periods and string perturbation theory. The likely feeling is a fear of being under-equipped, as if the paper needs three other subjects first. It is fine to feel that. The author says he made the exposition as elementary as he could, and the body uses little beyond q-expansions and two differential operators. If you have wanted non-holomorphic modular forms that you can compute with by hand, this is 35 pages of exactly that. Read Section 2 for the pleasure of the calculus, and leave the motives for another day.

## The story

Physicists attach to each graph a lattice sum, a modular graph function. It is real analytic and SL<sub>2</sub>(ℤ)-invariant, but satisfies no simple Laplace equation, so the theory of Maaß forms does not capture it. Brown proposes a home for such functions. Allow a weight r in z and a weight s in the conjugate of z. Require an expansion in q, its conjugate, and L = −2π Im(z). On this algebra two operators ∂ and its conjugate move weights by (1, −1) and (−1, 1) and generate 𝔰𝔩<sub>2</sub>. The central question becomes: given f, can you solve ∂F = f inside the class? Holomorphic Eisenstein series can be integrated this way, and the answers are the real analytic Eisenstein series, with ζ(odd) in their constant terms. Cusp forms cannot. Repeating the integration builds "modular iterated integrals".

## Main definitions

**The space M<sub>r,s</sub> (Definition 2.1).** Real analytic f on the upper half plane with f(γz) = (cz + d)<sup>r</sup> (c z̄ + d)<sup>s</sup> f(z) for γ in SL<sub>2</sub>(ℤ), and an expansion as a sum of terms a L<sup>k</sup> q<sup>m</sup> q̄<sup>n</sup> with |k| ≤ N for some N and m, n ≥ 0.
- Constant part: the terms with m = n = 0, a Laurent polynomial in L.
- Only r + s even matters, since otherwise f = 0.

**The operators ∂ and ∂̄ (Definitions 2.4 and 2.8).** On M<sub>r,s</sub>, ∂ = (z − z̄) ∂/∂z + r and ∂̄ = (z̄ − z) ∂/∂z̄ + s. They map M<sub>r,s</sub> to M<sub>r+1,s−1</sub> and M<sub>r−1,s+1</sub>. Both kill L.

**Real analytic Eisenstein series E<sub>r,s</sub>.** For r, s ≥ 0 with w = r + s > 0 even, E<sub>r,s</sub> is a normalised sum over (m, n) ≠ (0, 0) of Im(z) / ((mz + n)<sup>r+1</sup> (m z̄ + n)<sup>s+1</sup>). It lies in M<sub>r,s</sub>.

**Modular iterated integrals MI<sub>k</sub> (Definition 3.9).** The largest filtered space inside M, in weights r, s ≥ 0, such that ∂ and ∂̄ send length k elements into length k elements plus (holomorphic or antiholomorphic modular forms, times powers of L) times length k − 1 elements.
- Length 0: MI<sub>0</sub> = ℂ[L<sup>−1</sup>] (Lemma 3.10).

## Main results

**Theorem (sl<sub>2</sub> action; Proposition 2.9).** With h acting on M<sub>r,s</sub> by r − s, one has [h, ∂] = 2∂, [h, ∂̄] = −2∂̄ and [∂, ∂̄] = h. All three commute with multiplication by L.

**Theorem (obstruction from cusp forms; Theorem 3.7 and Corollary 3.8).** If f in M<sub>r,s</sub> has a ∂-primitive in M, then the Petersson pairing of f with every holomorphic cusp form of weight r − s vanishes. So for a non-zero cusp form f and any k, the equation ∂F = L<sup>k</sup>f has no solution in M.
- Step 1: reduce to weights where ∂ is (z − z̄) ∂/∂z. A primitive F and a cusp form g then give an SL<sub>2</sub>(ℤ)-invariant 1-form whose derivative is the Petersson integrand.
- Step 2: apply Stokes on the fundamental domain. The boundary terms cancel by modularity and because g is cuspidal. Taking g = f gives the corollary.

**Theorem (Eisenstein primitives; Proposition 4.1 and Corollary 4.2).** For each even w ≥ 2 the E<sub>r,s</sub> with r + s = w are the unique functions in M, with poles in L of order at most w, satisfying ∂E<sub>w,0</sub> = L G<sub>w+2</sub> and ∂E<sub>r,s</sub> = (r + 1)E<sub>r+1,s−1</sub> for s ≥ 1, together with the conjugate equations. They satisfy ΔE<sub>r,s</sub> = −w E<sub>r,s</sub>. Their constant part is a rational multiple of L plus a rational multiple of ζ(w + 1) L<sup>−w</sup> (Proposition 4.3).

**Theorem (Laplace eigenfunctions; Theorem 5.1).** If F in M is an eigenfunction of the Laplacian, its eigenvalue is an integer. F is a combination, over ℂ[L, L<sup>−1</sup>], of the E<sub>r,s</sub>, almost holomorphic modular forms and their complex conjugates.

## Note, then ignore

- Sign of the Laplacian. Brown's Δ has the opposite sign from the physics papers he cites. Safe to skip on a first reading.
- G<sub>2</sub>. The weight 2 Eisenstein series is not modular, but G<sub>2</sub> − 1/(4L) is, and it lies in M<sub>2,0</sub>. Safe to skip.
- Rationality. ∂F = L G<sub>4</sub> has a unique solution, and its coefficients cannot all be rational because ζ(3) appears. Safe to skip.
- Sections 7 to 9. They re-express everything through vector-valued equivariant functions and build length 2 examples, where cusp forms enter as correction terms (Theorem 9.3). Safe to skip.
- Poles at the cusp. Cusp forms do get primitives if you allow poles at the cusp (Section 11). Safe to skip.

## One next step

Open the paper at Section 2.9, "A picture of M" (page 9 to 10), and find L, G<sub>4</sub> and the modified G<sub>2</sub> on the diagram.

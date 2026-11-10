source: https://dept.math.lsa.umich.edu/~mmustata/lecture4.pdf
slogan: For a curve over a finite field, Riemann–Roch, Serre duality and the Hodge index theorem prove all the Weil conjectures in seven pages.
basis: the full text

## Before you start

This lecture is only seven pages, but it leans on Hartshorne chapters IV and V and on two earlier lectures in the same course. The likely feeling is a small worry: "I should reread Riemann–Roch first." You can let that worry sit there without acting on it. Each tool is quoted as a one-line fact when it is used. If you want to see a Riemann hypothesis proved from start to finish, this is one you can hold in your head. Read it for the pleasure of the last page.

## The story

Weil conjectured that the zeta function of a variety over 𝔽<sub>q</sub> is rational, has a functional equation, and has zeros of a fixed absolute value. For a curve X, the zeta function is the generating function of effective divisors. Divisors in a fixed line bundle L form a projective space of dimension h<sup>0</sup>(L) − 1. Riemann–Roch gives h<sup>0</sup> exactly once the degree is at least 2g − 1, so the tail of the series is geometric and the function is rational. Serre duality pairs L with ω ⊗ L<sup>−1</sup> and gives the functional equation. The Riemann hypothesis becomes a bound on the number of points. That number is the intersection of the diagonal with the graph of Frobenius on X × X, and the Hodge index theorem bounds it.

## Main definitions

**Setting.** X is a smooth, projective, geometrically connected curve over k = 𝔽<sub>q</sub>, of genus g = h<sup>1</sup>(X, O<sub>X</sub>). Write N<sub>m</sub> for the number of points of X over 𝔽<sub>q<sup>m</sup></sub>.

**Zeta function.** Z(X, t) = exp(Σ N<sub>m</sub> t<sup>m</sup>/m). By an earlier lecture it equals Σ t<sup>deg D</sup> over all effective divisors D on X.
- Degree of a divisor Σ a<sub>i</sub>P<sub>i</sub>: Σ a<sub>i</sub>·[k(P<sub>i</sub>) : k].

**Class number h.** The number of line bundles of degree zero on X. It equals the number of 𝔽<sub>q</sub>-points of the Jacobian J(X), so it is finite and positive.

**Frobenius graph.** On the surface S = X̄ × X̄ over the algebraic closure, Γ is the graph of the q-Frobenius and Δ is the diagonal. They meet transversely, and (Γ · Δ) = N<sub>1</sub>.

## Main results

**Theorem (rationality; Theorem 1.1).** For X as above, Z(X, t) = f(t) / ((1 − t)(1 − qt)), with f in ℤ[t] of degree ≤ 2g, f(0) = 1 and f(1) = h.
- Step 1: split the sum over divisors at degree 2g − 1. Above it, each line bundle of degree m carries (q<sup>m−g+1</sup> − 1)/(q − 1) effective divisors, and there are h such bundles.
- Step 2: show line bundles of every degree exist, by comparing the order of the pole at t = 1 before and after a base field extension.

**Theorem (functional equation; Theorem 2.1).** Z(X, 1/(qt)) = q<sup>1−g</sup> t<sup>2−2g</sup> Z(X, t).
- Step 1: the tail of the series satisfies the equation by direct calculation.
- Step 2: for degrees 0 to 2g − 2, the bijection L ↦ ω<sub>X</sub> ⊗ L<sup>−1</sup> with Serre duality and Riemann–Roch gives the symmetry.

**Theorem (Riemann hypothesis; Theorem 3.1).** Write f(t) = Π (1 − ω<sub>i</sub>t) over i = 1, …, 2g. Each ω<sub>i</sub> is an algebraic integer with |ω<sub>i</sub>| = q<sup>1/2</sup>.
- Step 1: by Lemma 3.3 and the symmetry ω ↦ q/ω (Remark 2.2), it is enough to prove |N<sub>m</sub> − (q<sup>m</sup> + 1)| ≤ 2g·q<sup>m/2</sup>, and m = 1 suffices after base change.
- Step 2: apply the inequality below to D = aΔ + bΓ. Adjunction gives (Δ<sup>2</sup>) = 2 − 2g and (Γ<sup>2</sup>) = q(2 − 2g). The quadratic form g·a<sup>2</sup> − ab(q + 1 − N<sub>1</sub>) + gq·b<sup>2</sup> is then non-negative, so its discriminant is ≤ 0.

**Proposition (from the Hodge index theorem; Proposition 3.4).** Let S = C<sub>1</sub> × C<sub>2</sub> be a product of smooth projective curves over an algebraically closed field, with ℓ<sub>1</sub> = C<sub>1</sub> × pt and ℓ<sub>2</sub> = pt × C<sub>2</sub>. For every divisor D on S, (D<sup>2</sup>) ≤ 2(D · ℓ<sub>1</sub>)(D · ℓ<sub>2</sub>).
- Step 1: subtract from D the combination of ℓ<sub>1</sub> and ℓ<sub>2</sub> that makes it orthogonal to the ample class ℓ<sub>1</sub> + ℓ<sub>2</sub>. Hodge index says the result has self-intersection ≤ 0.

## Note, then ignore

- The integer e. The proof first allows degrees of line bundles to form eℤ and then shows e = 1. It is needed only inside Theorem 1.1. Safe to skip on a first reading.
- Base change to the algebraic closure. Cohomology dimensions do not change under it, so Hartshorne's results apply. Safe to skip.
- A misprint. Lemma 3.3 writes g<sup>1/2</sup> where q<sup>1/2</sup> is meant. Safe to skip.
- Betti numbers. Remark 2.3 checks that deg f = 2g matches the first Betti number of a complex lift. It is the fourth Weil conjecture and does not enter the other proofs. Safe to skip.
- Sources. Sections 1 and 2 follow Lorenzini's book, and Proposition 3.4 is an exercise in Hartshorne. Safe to skip.

## One next step

Open the PDF at page 6 and read only the "Proof of Theorem 3.1", from the surface S = X̄ × X̄ to the final inequality.

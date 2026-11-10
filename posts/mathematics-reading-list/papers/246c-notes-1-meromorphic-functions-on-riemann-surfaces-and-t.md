source: https://terrytao.wordpress.com/2018/03/28/246c-notes-1-meromorphic-functions-on-riemann-surfaces-and-the-riemann-roch-theorem/
slogan: Riemann–Roch counts the meromorphic functions with prescribed poles on a compact Riemann surface, using only the degree and the genus.
basis: the page itself

## Before you start

These are lecture notes with about fifty numbered items, some thirty of them exercises. The feeling they tend to raise is a quiet guilt: the sense that skipping an exercise means you have not really read them. You can let that guilt be there and skip the exercises anyway. If you want one formula that links topology to complex analysis, this page builds it from residues. Read for the pleasure of watching the count come out. Completeness is a bonus.

## The story

On the Riemann sphere every meromorphic function is rational, so you can choose zeros and poles freely as long as their numbers match. On a torus you cannot: no function has one simple pole and no others. So how many functions have poles no worse than a given pattern D? Call that space L(D). The obstruction comes from 1-forms. The residues of any meromorphic 1-form on a compact surface sum to zero, so each holomorphic 1-form puts one linear condition on the allowed principal parts. Counting those conditions gives an inequality. Applying the same inequality to the mirror pattern K − D, where K is the divisor of a 1-form, turns it into an equality. The only inputs left are the degree of D and the genus g.

## Main definitions

**Riemann surface.** A connected Hausdorff space with an atlas of charts to open subsets of ℂ whose transition maps are holomorphic. Examples in the notes: the Riemann sphere, complex tori ℂ/Λ, smooth projective plane curves.

**Divisor, degree and L(D) (Definition 12).** A divisor on a compact Riemann surface X is a finite formal sum D = Σ c<sub>P</sub>·(P) with integer c<sub>P</sub>. Its degree is Σ c<sub>P</sub>. A non-zero meromorphic function f has a principal divisor (f), which records its zeros positively and its poles negatively. L(D) is the vector space of meromorphic f with (f) + D ≥ 0, together with 0.
- c<sub>P</sub> positive: f may have a pole of order at most c<sub>P</sub> at P.
- c<sub>P</sub> negative: f must vanish to order at least −c<sub>P</sub> at P.

**Meromorphic 1-form and canonical divisor (Definition 22).** A meromorphic 1-form is a collection of expressions ω<sub>α</sub>(z) dz, one per chart, that transform by the chain rule. Its divisor is called a canonical divisor K. Any two 1-forms differ by a meromorphic function, so K is unique up to linear equivalence.

**Genus.** The topological genus g of the compact surface X, so that the Euler characteristic is 2 − 2g. The sphere has g = 0 and a torus has g = 1.

## Main results

**Proposition (residues and degree; Proposition 24).** Let X be a compact Riemann surface. The residues of any meromorphic 1-form on X sum to zero. Every principal divisor has degree zero.
- Step 1: by Stokes' theorem, the integral over small loops around all the poles is zero.
- Step 2: apply the first part to the 1-form df/f.

**Proposition (baby Riemann–Roch; Proposition 32).** Let K be a canonical divisor on a compact Riemann surface and D an effective divisor. Then dim L(D) − dim L(K − D) ≤ deg(D) + 1 − dim L(K).
- Step 1: pair each h in L(K) with a tuple of principal parts by summing residues. The pairing vanishes on the principal parts of functions in L(D).
- Step 2: linear algebra (row rank equals column rank) then produces enough elements of L(K − D).

**Theorem (Riemann–Roch; Theorem 34).** Let X be a compact Riemann surface of genus g, K a canonical divisor and D any divisor. Then dim L(D) − dim L(K − D) = deg(D) + 1 − g. The notes sketch the proof and do not prove every input.
- Step 1: three facts. A non-zero meromorphic 1-form exists, deg K = 2g − 2, and dim L(K) = g.
- Step 2: the baby version applied to D and to K − D, plus Riemann's inequality dim L(D) ≥ deg(D) + 1 − g (Proposition 42), handles the four cases of which spaces are zero.

**Theorem (Riemann–Hurwitz; Theorem 40).** Let f : X → Y be a non-constant holomorphic map of degree d between compact Riemann surfaces. Then χ(X) plus the sum of (ord<sub>P</sub> − 1) over the points P above the branch points equals d·χ(Y). The notes use it to show that deg K = −χ(X) = 2g − 2.

## Note, then ignore

- What is not proved. The lower bound dim L(K) ≥ g is quoted from Serre duality or Hodge theory, and proved only for smooth plane curves. Accept it on a first reading.
- Existence of 1-forms. A non-constant meromorphic 1-form comes from a harmonic function with two logarithmic poles (Proposition 36), which rests on Perron's method from earlier notes. Skip the construction.
- Second countability. The definition of a manifold here leaves it out, and the notes say it is not important for this discussion. Skip it.
- Convention for the zero function. Its order is +∞ everywhere, so that L(D) is a vector space. It is bookkeeping.
- Appendix on connectedness. Section 5 proves that an irreducible projective plane curve is connected, which is needed for it to be a Riemann surface. It is separate from Riemann–Roch and can wait.

## One next step

Scroll to Proposition 32 on the page and read its statement and the three observations that open its proof.

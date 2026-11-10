source: https://arxiv.org/pdf/0908.1458
slogan: Nudge the exponents of a hypergeometric equation off their resonant values, compute with gamma functions, and let the nudge go to zero to get ζ(2).
basis: the full text

## Before you start

This paper is 13 pages and moves fast. It assumes quantum cohomology, Fano threefolds, modular forms and hypergeometric D-modules, each in a line or two. The likely feeling is fear of being too slow to keep up. You may feel that. The author writes in sketches. If you like Apéry's proof that ζ(3) is irrational, this paper shows where such numbers live in geometry. Enjoy the trick first. Completeness can come later, or never.

## The story

Apéry proved ζ(3) irrational with a recurrence that has two solutions a<sub>n</sub> and b<sub>n</sub> whose ratio tends to ζ(3)/6. Beukers and Peters later found that the recurrence comes from a family of K3 surfaces. Golyshev had identified that family with the mirror of the Fano threefold V<sub>12</sub>. So each such threefold has its own recurrence and its own limit, the Apéry constant. For three of the five Mukai threefolds, modular forms give the answer. For the other two they do not. The new idea is to treat a number like ζ(2) as a resonance. The series log Γ(1 − t) = γt + Σ ζ(i)t<sup>i</sup>/i shows zeta values hiding inside the gamma function. So perturb the exponents, compute with gamma values and sines, then take the limit.

## Main definitions

**Recurrence of Apéry type.** A linear homogeneous recurrence with polynomial coefficients, with two rational solutions a<sub>n</sub> and b<sub>n</sub>, such that b<sub>n</sub>/a<sub>n</sub> → c·L(s<sub>0</sub>) as n → ∞. Here L is the L-function of a Dirichlet character, s<sub>0</sub> > 1 is an integer and c ∈ ℚ is non-zero. The limit is the Apéry limit, or Apéry constant.
- Normalisation here: a<sub>n</sub> is the integral solution with a<sub>0</sub> = 1, and b<sub>n</sub> has b<sub>0</sub> = 0, b<sub>1</sub> = 1.

**Quantum recurrence.** For a Fano threefold X of Picard rank one, count rational curves through three cycles, weighted by degree against −K. This gives a connection on H(X) ⊗ ℂ[t, t<sup>−1</sup>]. Write it as one scalar differential operator, read off the recurrence on power series coefficients, and regularise by multiplying u(n) by n!.

**Mukai threefolds.** The Picard rank one Fano threefolds V<sub>10</sub>, V<sub>12</sub>, V<sub>14</sub>, V<sub>16</sub>, V<sub>18</sub> that are complete intersections in Grassmannians of simple Lie groups other than projective spaces. For example V<sub>14</sub> is a section of G(2, 6) by a plane of codimension 5.

**Deresonating.** A hypergeometric D-module with rational exponents is motivic. When exponents coincide (resonance), Tate-type periods such as zeta values appear. Deresonating means: perturb the exponents to a non-resonant set, compute the now explicit gamma-value expression, and let the perturbation tend to 0.

## Main results

**Theorem (Apéry constants of Mukai threefolds; Theorem 2.4).** The quantum recurrences of V<sub>10</sub>, V<sub>12</sub>, V<sub>14</sub>, V<sub>16</sub>, V<sub>18</sub> are of Apéry type. The constants are ζ(2)/10, ζ(3)/6, ζ(2)/7, 7ζ(3)/32 and L(χ<sub>3</sub>, 3)/3. The argument of the L-function is 3 for the rational threefolds (V<sub>12</sub>, V<sub>16</sub>, V<sub>18</sub>) and 2 for the non-rational ones (V<sub>10</sub>, V<sub>14</sub>).
- Rational cases: the generating function of a<sub>n</sub> is a weight 2 modular form of level 6, 8 or 9, and a theorem of Beukers on Atkin–Lehner odd weight 4 forms gives the limit as L(F, 3).
- Non-rational cases: the quantum Lefschetz theorem reduces V<sub>10</sub> and V<sub>14</sub> to G(2, 5) and G(2, 6), then Theorem 4.1 applies.

**Theorem (Apéry constant of G(2, N); Theorem 4.1).** Let N ≥ 5 be an integer. The regularised quantum recurrence of the Grassmannian G(2, N) has solutions a and b (indexed by multiples of N) with limit ratio 6ζ(2)/(N<sup>2</sup>(N + 1)), which equals π<sup>2</sup>/(N<sup>2</sup>(N + 1)).
- Step 1: the quantum operator of G(2, N) is the second wedge power of the (pulled back) operator for projective space, a theorem of Bertram, Ciocan-Fontanine, Kim and Sabbah. Perturb four of its exponents by ±u and ±e.
- Step 2: the perturbed limit is a ratio of sines times gamma values. Let u, e → 0.

**Claim (sine formula; 4.3 and 4.4).** For the two perturbed wedge solutions R<sub>e</sub> and R<sub>u</sub>, the ratio of n-th coefficients tends to sin(2πe)/sin(2πu). The paper gives a sketch of proof for even N only, using Dubrovin's description of the monodromy of a product of Frobenius manifolds.

## Note, then ignore

- Proof status of the sine formula. The author sketches it for even N and says it looks probable for all N ≥ 0. V<sub>10</sub> uses N = 5, a case the paper does not write out. Note this, then skip it on a first reading.
- Rescaling under quantum Lefschetz. The factors 5/2 and 6 that turn 1/25 and 1/42 into 1/10 and 1/7 come from factorial ratios in Corollary 4.2. Safe to skip.
- "Gamma structure". This is the rational structure on a hypergeometric D-module from an earlier paper with Mellit. It is used as a black box. Safe to skip.
- Typos. The text has several small misprints in formulas (for instance in 1.4). They do not affect the results. Safe to skip.
- Gamma class and Dubrovin's conjecture. Section 1.2 links Apéry constants to the gamma class. This is motivation only and safe to skip.

## One next step

Open the paper and read only Section 1.2, "Deresonating", down to the four numbered steps.

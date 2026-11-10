source: https://otaibi.perso.math.cnrs.fr/dimtrace2.pdf
slogan: A computer can evaluate Arthur's trace formula in level one, and the output is exact dimension formulas for Siegel cusp forms up to genus 7.
basis: the abstract and introduction

## Before you start

This paper is about 80 pages and leans on Arthur's endoscopic classification, which is a whole book. You may feel shut out, as if you need that book before you are allowed to open this one. That feeling makes sense, and you can have it and still read the introduction. If you want to see the trace formula produce actual numbers, this is one place where it does. Read for the pleasure of watching an abstract identity become a table. Finishing is optional.

## The story

For modular forms of level one, the dimension of the space of cusp forms of weight k is a simple formula in k. People wanted the same for vector-valued Siegel cusp forms of genus n. Genus 2 was done by Igusa and Tsushima. Genus 3 had only a conjecture, by Bergström, Faber and van der Geer. The block is that the trace formula for Sp<sub>2n</sub> gives only an alternating sum over all automorphic representations, and its geometric side is a sum of orbital integrals nobody had computed. Taïbi does two things. He gives an algorithm that computes the geometric side exactly, as a sum of traces of torsion elements weighted by rational "masses". Then he uses Arthur's classification to peel off the contributions that come from smaller groups, by induction on rank. What remains counts the new self-dual cuspidal representations of GL<sub>N</sub>.

## Main definitions

**Siegel cusp forms S<sub>k</sub>(Γ<sub>n</sub>).** For integers k<sub>1</sub> ≥ … ≥ k<sub>n</sub>, the space of vector-valued cusp forms of genus n for the full modular group Γ<sub>n</sub> = Sp<sub>2n</sub>(ℤ), with weight the representation of GL<sub>n</sub>(ℂ) of highest weight k = (k<sub>1</sub>, …, k<sub>n</sub>).

**Level one, with given weights.** A cuspidal automorphic representation π of GL<sub>N</sub> over ℚ has level one if π<sub>p</sub> is unramified at every prime p. Its weights w<sub>1</sub> ≥ … ≥ w<sub>N</sub> are the eigenvalues of the infinitesimal character of π<sub>∞</sub>.

**The groups G.** A split classical group over ℤ whose real points have discrete series: SO<sub>2n+1</sub>, Sp<sub>2n</sub> or SO<sub>4n</sub>.

**Masses.** Rational numbers m<sub>c</sub>, one for each class c in a finite set of torsion conjugacy classes, such that the elliptic part of the geometric side for weight λ equals Σ m<sub>c</sub> · Tr(c | V<sub>λ</sub>). Here V<sub>λ</sub> is the algebraic representation of G with highest weight λ.
- Local input: orbital integrals of the characteristic function of G(ℤ<sub>p</sub>) at torsion elements.
- Global input: volumes of centralisers, from mass formulas and values of Dirichlet L-functions.

## Main results

**Theorem (dimension of Siegel cusp forms; Theorem A).** Let n ≥ 1. There is a finite family of triples (m<sub>a</sub>, P<sub>a</sub>, Λ<sub>a</sub>), with m<sub>a</sub> a positive integer, P<sub>a</sub> a polynomial in n variables over the cyclotomic field ℚ(ζ<sub>m<sub>a</sub></sub>), and Λ<sub>a</sub> a surjective homomorphism (ℤ/m<sub>a</sub>)<sup>n</sup> → ℤ/m<sub>a</sub>, such that for all k<sub>1</sub> ≥ … ≥ k<sub>n</sub> > n + 1, dim S<sub>k</sub>(Γ<sub>n</sub>) is the sum over a of the trace from ℚ(ζ<sub>m<sub>a</sub></sub>) to ℚ of P<sub>a</sub>(k) · ζ<sub>m<sub>a</sub></sub><sup>Λ<sub>a</sub>(k)</sup>. The family is explicit for n ≤ 7. For n = 3 it has 370 terms.
- Step 1: compute the geometric side for Sp<sub>2n</sub> and for smaller groups, then turn traces of torsion elements into such sums with Weyl's character formula.
- Step 2: use Arthur's multiplicity formula to isolate the representations whose component at the real place is the holomorphic discrete series.

**Theorem (counting on GL<sub>N</sub>; Theorem B).** Let N ≥ 2 and W ∈ {0, 1}, with W = 0 if N is odd, and n = ⌊N/2⌋. A family of the same shape, explicit for N ≤ 13 and N = 15, gives the number of level one cuspidal π on GL<sub>N</sub> over ℚ with weights w and with dual π<sup>∨</sup> ≅ π ⊗ |det|<sup>−W</sup>. The hypotheses are w<sub>i</sub> + w<sub>N+1−i</sub> = W for all i, and w<sub>i</sub> ≥ w<sub>i+1</sub> + 2 for 1 ≤ i ≤ n.

**Claim (introduction).** For k<sub>1</sub> > … > k<sub>n</sub> > n + 1, every eigenform in S<sub>k</sub>(Γ<sub>n</sub>) satisfies the Ramanujan conjecture. The paper derives this from its method together with results of Caraiani and Clozel.

## Note, then ignore

- Conditional on Arthur. Section 1.3 explains that the endoscopic half rests on Arthur's classification and on the results that book assumes. This affects the logical status and not the story. Safe to skip at first.
- The edge weight k<sub>n</sub> = n + 1. The dimension can still be computed there, but the formula is not the specialisation of Theorem A. Weights with k<sub>n</sub> ≤ n are out of reach. Safe to skip.
- Close weights. When some gap w<sub>i</sub> − w<sub>i+1</sub> is 1, the count needs extra error terms. Theorem 4.3.1 gives the precise version. Safe to skip.
- Parabolic terms. The non-elliptic terms of the geometric side reduce to elliptic terms for groups of lower rank. This is bookkeeping. Safe to skip.
- Computer limits. The algorithm works for every rank. The bounds n ≤ 7 and N ≤ 13 come from running time, not from the mathematics. Safe to skip.

## One next step

Open the paper at Section 1.1.1 on page 4 and read the genus 1 formula (1.1.1), then the statement of Theorem A on the next page.

source: https://arxiv.org/pdf/1001.0789
slogan: Perfect quadratic forms cut a space into finitely many cells, and counting them by machine gives the rational cohomology of SL<sub>N</sub>(ℤ) for N ≤ 7.
basis: the introduction and the main theorem statements

## Before you start

The feeling here may be distrust or distance: the answer rests on more than a year of computer time, and no reader can check two million cells by hand. It is fine to feel shut out by that. If you want to see how the cohomology of SL<sub>N</sub>(ℤ) can be computed at all, the method fits in three pages and is geometric. Read for the picture of the cells. Whether you reach the tables does not matter.

## The story

People want the cohomology groups of SL<sub>N</sub>(ℤ) with trivial coefficients. The cases N = 2, 3, 4 were known. The block is that the group is infinite and no small space carries a free action of it.

Voronoï's reduction theory supplies a space with a good cell structure. Take positive definite quadratic forms in N variables up to scaling. A form is perfect when its shortest integer vectors pin it down. There are finitely many perfect forms up to the action of the group, and each one spans a cell. For example, x² + xy + y² is perfect, with six minimal vectors, and x² + y² is not. The cells give a finite chain complex. Its homology is the homology of the group with Steinberg coefficients, and Borel–Serre duality turns that into cohomology. The authors run this for N = 5, 6, 7.

## Main definitions

**Perfect form.** Let h be a positive definite real quadratic form in N variables, and m(h) the finite set of nonzero integer vectors where h takes its minimum. The form h is perfect if every positive definite form with the same minimal vectors is proportional to h.

**Voronoï cell decomposition.** Let X<sub>N</sub>\* be the space of non-negative forms whose kernel is spanned by a proper rational subspace, taken up to positive scaling. Each integer vector v gives the rank one form x ↦ (v·x)². The cell σ(h) of a perfect form h is the convex hull of these forms for v in m(h).
- Voronoï proved that the cells σ(h) and their intersections form a cell decomposition of X<sub>N</sub>\*, invariant under Γ = SL<sub>N</sub>(ℤ) or GL<sub>N</sub>(ℤ).
- The space has dimension d(N) = N(N+1)/2 − 1.

**Voronoï complex.** In degree n it is the free abelian group on Γ-orbits of n-cells that meet the interior (the positive definite forms) and whose stabiliser preserves orientation. The differential sums over faces with signs.

**The classes S<sub>n</sub>.** S<sub>n</sub> is the class of finite abelian groups whose order has only prime factors at most n. "Modulo S<sub>n</sub>" means that such groups are ignored.

## Main results

**Theorem (homology of the Voronoï complex; Theorem 4.3).** Modulo S<sub>5</sub>, the complex of GL<sub>5</sub>(ℤ) has homology ℤ in degrees 9 and 14 and nothing else. The complex of GL<sub>6</sub>(ℤ) has ℤ in degrees 10, 11, 15. For GL<sub>7</sub>(ℤ), the rational homology is ℚ in degrees 12, 13, 18, 22, 27 and zero otherwise.
- Step 1: enumerate all cells up to the group action, starting from the known lists of perfect forms (Jaquet's for rank 7).
- Step 2: write the differentials as explicit integer matrices and compute their elementary divisors.

**Theorem (cohomology of modular groups; Theorem 7.3).** Modulo S<sub>5</sub>, H<sup>m</sup>(SL<sub>5</sub>(ℤ), ℤ) is ℤ for m = 0, 5 and zero otherwise. Modulo S<sub>7</sub>, H<sup>m</sup>(GL<sub>6</sub>(ℤ), ℤ) is ℤ for m = 0, 5, 8, and H<sup>m</sup>(SL<sub>6</sub>(ℤ), ℤ) is ℤ² for m = 5, ℤ for m = 0, 8, 9, 10, and zero otherwise. For N = 7, H<sup>m</sup>(SL<sub>7</sub>(ℤ), ℚ) is ℚ for m = 0, 5, 11, 14, 15 and zero otherwise.
- Step 1: modulo S<sub>N+1</sub>, the homology of the Voronoï complex in degree m equals H<sub>m−N+1</sub>(Γ, St<sub>N</sub>), where St<sub>N</sub> is the Steinberg module.
- Step 2: Borel–Serre duality identifies H<sub>n</sub>(Γ, St<sub>N</sub>) with cohomology in degree N(N−1)/2 − n with coefficients in the orientation module, again modulo S<sub>N+1</sub>.

**Theorem (top class; Theorem 5.1).** The top rational homology of the Voronoï complex of SL<sub>N</sub>(ℤ) has dimension 1. For N = 4, 5, 6, 7 it is represented by the sum of the top cells σ of the perfect forms, each weighted by 1 over the order of its stabiliser.

**Theorem (splitting; Theorem 6.1).** The Voronoï complex of GL<sub>5</sub>(ℤ) is isomorphic to a direct factor of that of GL<sub>6</sub>(ℤ), with degrees shifted by 1.

## Note, then ignore

- Small primes. All integral statements ignore torsion at primes up to N + 1, because a matrix of prime order p in GL<sub>N</sub> forces p ≤ N + 1 (Lemma 7.1). Safe to skip on a first reading.
- Orientation module. GL<sub>N</sub>(ℝ) preserves the orientation of the symmetric space only for odd N (Lemma 7.2). This is why SL<sub>6</sub> and GL<sub>6</sub> get separate answers. Safe to skip.
- Right action. The group acts on forms by h ↦ γ<sup>t</sup>hγ, a right action. It is a convention. Safe to skip.
- Checks on the computation. The authors test the output with a mass formula for the Euler characteristic and with the identity d∘d = 0. These support trust and do not enter the argument. Safe to skip.
- Rank 8 and 9. The table of perfect forms goes further (10916 classes in rank 8) than the cohomology results, which stop at N = 7. Safe to skip.

## One next step

Open the paper at Example 2.1 on page 3 and check by hand that x² + xy + y² has exactly six minimal vectors.

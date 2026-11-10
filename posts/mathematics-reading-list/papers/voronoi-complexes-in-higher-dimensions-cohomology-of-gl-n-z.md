source: https://arxiv.org/pdf/1910.11598
slogan: Listing the smallest cells of Voronoi's tiling of quadratic forms in ranks 8 to 11 is enough to prove that K<sub>8</sub>(ℤ) vanishes.
basis: the introduction and the main theorem statements

## Before you start

The likely feeling here is intimidation. The paper has tables of lattices, computer enumerations and a spectral sequence, and it may look like a result you can only take on trust. It is fine to feel that. You do not have to check a single table. If you want to see how a question about K-theory of the integers turns into counting polyhedra, this is a clear case. Read for the chain of reductions and enjoy it. Finishing can wait.

## The story

People want the cohomology of SL<sub>N</sub>(ℤ) and GL<sub>N</sub>(ℤ), and through it the K-groups of ℤ. The cases N ≤ 7 were known. For N = 8 the standard tool, Voronoi's cell complex built from perfect quadratic forms, is too large to compute in full. The idea of the paper is that you do not need all of it. The cells of lowest dimension can be listed by hand and by machine, using sublattices of small index for N = 8, 9 and linear programming for larger N. That bottom part of the complex has no homology in the range that matters. Borel–Serre duality turns this into vanishing of cohomology near the top degree. Quillen's rank filtration and a Hurewicz argument then give K<sub>8</sub>(ℤ) = 0.

## Main definitions

**Perfect form.** A positive definite real quadratic form in N variables is perfect when its set of integral minimal vectors determines it up to a scalar. Voronoi proved that there are finitely many perfect forms of rank N up to the action of SL<sub>N</sub>(ℤ).

**Voronoi complex.** Let X<sub>N</sub><sup>\*</sup> be the space of positive semidefinite real quadratic forms whose kernel is defined over ℚ, up to scaling. Each perfect form h gives a cell, the convex hull of the rank one forms attached to its minimal vectors. These cells and their intersections tile X<sub>N</sub><sup>\*</sup>, and the group Γ = SL<sub>N</sub>(ℤ) or GL<sub>N</sub>(ℤ) permutes them.
- Step 1: take one cell from each Γ-orbit that meets the interior and whose stabiliser preserves its orientation.
- Step 2: the free abelian groups on these cells, with a signed incidence differential, form the chain complex Vor<sub>Γ</sub>.

**Steinberg module.** St<sub>N</sub> is the one non-zero reduced homology group, in degree N − 2, of the Tits building of proper non-zero subspaces of ℚ<sup>N</sup>. It is the dualising module in Borel–Serre duality for Γ.

**The class S<sub>n</sub>.** S<sub>n</sub> is the class of finite abelian groups whose order has only prime factors ≤ n. "Modulo S<sub>n</sub>" means that you ignore such groups.

## Main results

**Proposition (Voronoi complex computes Steinberg homology; Proposition 1.5).** For N > 1 and all m, H<sub>m−N+1</sub>(Γ; St<sub>N</sub>) ≅ H<sub>m</sub>(Vor<sub>Γ</sub>) modulo S<sub>N+1</sub>.
- Step 1: the equivariant homology of X<sub>N</sub><sup>\*</sup> relative to its boundary equals the homology of Γ with coefficients in St<sub>N</sub>, shifted by N − 1.
- Step 2: cell stabilisers are finite with orders divisible only by primes ≤ N + 1, so the equivariant spectral sequence collapses to Vor<sub>Γ</sub> modulo S<sub>N+1</sub>.

**Theorem (the bottom of the complex is acyclic; Theorem 4.5).** Modulo S<sub>2</sub>, the groups H<sub>k</sub>(Vor<sub>GL<sub>N</sub>(ℤ)</sub>) are zero for N = 8 and k ≤ 12, and for N = 9, 10 and k &lt; 12.
- Step 1: enumerate the low-dimensional cells for each N.
- Step 2: every cell found has a stabiliser element that reverses its orientation, so it drops out of the complex.

**Corollary (cohomology near the top; Corollary 5.2).** With d = N(N−1)/2, the groups H<sup>d−k</sup>(GL<sub>N</sub>(ℤ); ℤ) are zero modulo S<sub>N+1</sub> for N = 8, 9, 10, 11 and 0 &lt; k ≤ 12 − N. The proof is Borel–Serre duality applied to the two results above.

**Theorem (K<sub>8</sub> of the integers; Theorem 6.4).** K<sub>8</sub>(ℤ) = 0.
- Step 1: Quillen's long exact sequences relate H<sub>\*</sub>(GL<sub>N</sub>(ℤ); St<sub>N</sub>) to the homology of the space BQ, whose homotopy groups are the K-groups of ℤ shifted by one. Together with Borel's rational computation this gives H<sub>9</sub>(BQ; ℤ) = 0 modulo S<sub>7</sub>. Arlettaz's bound on the kernel of the Hurewicz map then gives K<sub>8</sub>(ℤ) = 0 modulo S<sub>7</sub>.
- Step 2: the proved Quillen–Lichtenbaum conjecture rules out torsion at regular odd primes in K<sub>2j</sub>(ℤ), which removes the primes 3, 5 and 7. The paper's proof does not spell out the prime 2.

## Note, then ignore

- Working modulo S<sub>n</sub>. Small primes divide the orders of cell stabilisers, so every statement ignores torsion at those primes until the last step. Safe to skip on a first reading.
- Orientation-reversing stabilisers. Only cells whose stabiliser preserves orientation appear in the complex, which is why long lists of cells can give zero homology. Safe to skip.
- The case N = 11. The introduction calls the information for N = 11 conjectural in part, and Remark 4.6 says the list of 12-dimensional cells for N = 12 is not proved complete. This does not touch the K<sub>8</sub> result. Safe to skip.
- Kummer–Vandiver. Section 7 deduces that one eigenspace, C<sup>(p−5)</sup>, of the p-part of the class group of ℚ(ζ<sub>p</sub>) vanishes for all primes p > 3. It is an application, not part of the argument. Safe to skip.
- Earlier announcements. The triviality of K<sub>8</sub>(ℤ) had been announced before, and this paper supplies the enumeration. Safe to skip.

## One next step

Open the paper at Section 6.2 and read Theorem 6.4 with its four-line proof. Then glance at Table 5 in Section 5 to see the zeros that feed the proof.

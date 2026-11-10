source: https://arxiv.org/pdf/1605.01277
slogan: Conjecturally, the leading term of a zeta function at any integer is the volume of a cohomology complex, so special values become statements about lattices.
basis: the introduction and the main theorem statements

## Before you start

This paper runs to 108 pages, with two long appendices and five named conjectures assumed before the main one is stated. Expect to feel slow, and a little lost about what is proved and what is assumed. That is a fair response to how the paper is built, and you can read while feeling it. If you want one formula that contains the class number formula and Birch and Swinnerton-Dyer at once, it is in the first four pages. Enjoy those. The rest can wait.

## The story

Over a finite field, Lichtenbaum and Geisser described the order of vanishing and the leading coefficient of a zeta function at every integer through Weil-étale cohomology. People wanted the same for schemes over ℤ. The direct route failed: Lichtenbaum's integral groups for a ring of integers turned out to be non-zero in high degrees. Morin's idea, extended here to every integer n, is to define the complexes by duality instead of by a topos. Roughly, étale motivic cohomology in twist n is corrected by the dual of étale motivic cohomology in twist d − n. Under standard assumptions this yields perfect complexes of abelian groups. A second family, Weil-Arakelov cohomology, takes values in locally compact groups. The zeta value is then, conjecturally, a volume.

## Main definitions

**The standard assumptions.** X is a regular connected scheme of dimension d, proper over ℤ, and n is an integer. The paper assumes five conjectures for (X, n). L(n) and L(d − n) ask for finite generation of étale motivic cohomology in a certain range. B(n) is a form of Beilinson's conjecture: a perfect pairing between motivic cohomology with compact support and motivic cohomology, with real coefficients. AV(n) is Artin-Verdier duality with torsion coefficients. D<sub>p</sub>(n) compares p-adic motivic cohomology with de Rham cohomology.

**Weil-étale complex RΓ<sub>W,c</sub>(X, ℤ(n)).** A perfect complex of abelian groups, built from étale hypercohomology of Bloch's cycle complex ℤ(n) and the dual of the same for ℤ(d − n). No topos stands behind it.
- Over a finite field: it agrees with the cohomology of Lichtenbaum's Weil-étale topos.

**Weil-Arakelov complexes.** An exact triangle RΓ<sub>ar,c</sub>(X, ℤ(n)) → RΓ<sub>ar,c</sub>(X, ℝ̃(n)) → RΓ<sub>ar,c</sub>(X, ℝ̃/ℤ(n)) in the derived category of locally compact abelian groups. The middle groups are real vector spaces of finite dimension. The right-hand groups are compact commutative Lie groups.
- The real part needs no assumptions: it is built from motivic cohomology with real coefficients and Deligne cohomology.

**Fundamental line Δ(X/ℤ, n).** The free ℤ-module of rank one det RΓ<sub>W,c</sub>(X, ℤ(n)) ⊗ det RΓ<sub>dR</sub>(X/ℤ)/F<sup>n</sup>, where the second factor is derived de Rham cohomology modulo the n-th step of the Hodge filtration. An acyclic complex, given by cup product with a class θ, provides a trivialisation λ<sub>∞</sub> : ℝ ≅ Δ ⊗ ℝ.

## Main results

**Conjecture (vanishing order; Conjecture 5.10).** For every integer n, the order of ζ(X, s) at s = n is Σ (−1)<sup>i</sup> · i · dim<sub>ℝ</sub> H<sup>i</sup><sub>ar,c</sub>(X, ℝ̃(n)).

**Conjecture (leading coefficient; Conjecture 5.11).** Let ζ<sup>\*</sup>(X, n) be the leading Taylor coefficient at s = n. Then λ<sub>∞</sub> sends the lattice ζ<sup>\*</sup>(X, n)<sup>−1</sup> · C(X, n) · ℤ onto Δ(X/ℤ, n). Here C(X, n) is a non-zero rational correction factor defined through p-adic Hodge theory. This fixes ζ<sup>\*</sup>(X, n) up to sign.
- Equivalent form: the absolute value of ζ<sup>\*</sup>(X, n)<sup>−1</sup> is the alternating product of the volumes of the compact groups H<sup>i</sup><sub>ar,c</sub>(X, ℝ̃/ℤ(n)), with the measure fixed on the whole complex.

**Theorem (compatibility with Tamagawa numbers; Theorem 5.26).** Let X be smooth and projective over the ring of integers of a number field F. Assume L(n), L(d − n) and B(n), and a semisimplicity condition on certain crystalline complexes at each prime of F. Then Conjecture 5.11 for (X, n) is equivalent to the Tamagawa number conjecture of Bloch, Kato, Fontaine and Perrin-Riou for the motive h(X)(n), taken over all primes p.
- Step 1: after tensoring with ℚ, the line Δ is the fundamental line of Fontaine and Perrin-Riou.
- Step 2: compare the two integral structures prime by prime, using syntomic cohomology at p.

**Proposition (proven cases; Propositions 5.31 and 5.34).** Under the assumptions of type L and B, Conjecture 5.11 holds for X over a finite field and every n. For X = Spec O<sub>F</sub> it holds for n = 0, 1 with F arbitrary, and for every n when F is abelian over ℚ.
- Case n = 1 for Spec O<sub>F</sub>: the statement is the analytic class number formula.

## Note, then ignore

- Derived de Rham cohomology. Illusie's derived version replaces the naive one because X need not be smooth over ℤ. It also makes the correction factor simpler. Safe to skip on a first reading.
- The factor C(X, n). It is 1 for n ≤ 0 and over finite fields, and equals ((n − 1)!)<sup>−[F:ℚ]</sup> for Spec O<sub>F</sub> with n ≥ 1. Safe to skip.
- Notation RΓ<sub>W,c</sub>(X, −) against RΓ<sub>c</sub>(X<sub>W</sub>, −). The authors write the first because there is no topos X<sub>W</sub>. Whether one exists is open, even for Spec O<sub>F</sub> and n = 0. Safe to skip.
- Appendix A. It builds the Artin-Verdier étale topos and treats 2-primary parts in full. It is there for the proof of AV(n), and you can take it on trust.

## One next step

Open the PDF and read page 3 only: properties a) to d) of the complexes. Statement d) is the volume formula.

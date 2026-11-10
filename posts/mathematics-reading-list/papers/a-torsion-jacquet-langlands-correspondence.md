source: https://www.math.uchicago.edu/~fcale/papers/CaveShort.pdf
slogan: Two unrelated hyperbolic 3-manifolds built from the same number field have torsion homology of matching size, so torsion classes obey Langlands-style rules.
basis: the introduction and the main theorem statements

## Before you start

This is 207 pages, and a 75-page chapter of hard analysis sits in the middle. The likely feeling is overwhelm: a paper this size looks like a wall. That feeling fits the facts, and you can let it be there. If you want to see the Langlands programme reach the torsion in the homology of 3-manifolds, the five-page introduction already shows it. Read that for fun. Nothing after page 5 is owed.

## The story

Take an imaginary quadratic field F. The group PGL<sub>2</sub>(O<sub>F</sub>) acts on hyperbolic 3-space, and the quotient is a non-compact 3-manifold. A quaternion algebra over F gives a second, compact 3-manifold. The two groups are incommensurable. Yet the classical Jacquet-Langlands correspondence matches their complex homology, Hecke operators included. The trouble is that this complex homology is often zero, while H<sub>1</sub> with ℤ coefficients carries a large torsion subgroup. Can torsion be matched too? The idea is analytic torsion. The Cheeger-Müller theorem computes the size of torsion homology from Laplace eigenvalues, and the classical correspondence says the two manifolds have essentially the same spectrum. So the sizes of the torsion groups must agree, up to explicit corrections. One correction turns out to be K<sub>2</sub>(O<sub>F</sub>).

## Main definitions

**The Jacquet-Langlands pair.** Let F be imaginary quadratic, n an ideal of O<sub>F</sub>, and p, q primes not dividing n. Y<sub>0</sub>(n) is hyperbolic 3-space modulo the matrices in PGL<sub>2</sub>(O<sub>F</sub>) whose lower-left entry lies in n. Y′<sub>0</sub>(n) is the same quotient for the units of an Eichler order of level n in the quaternion algebra D ramified exactly at p and q.
- Split side: Y<sub>0</sub>(npq) has finite volume and is not compact.
- Non-split side: Y′<sub>0</sub>(n) is compact.

**New quotient.** The pq-new part of H<sub>1</sub>(Y<sub>0</sub>(npq), ℤ) is the quotient by all classes pulled back from the lower levels np and nq.

**Congruence and dual-essential homology.** Congruence homology is the part of H<sub>1</sub> that comes from congruence quotients of the arithmetic group, so it is "obvious" torsion. The dual-essential homology H<sub>1</sub><sup>E\*</sup>(Y, ℤ) is a variant of H<sub>1</sub> with that part cut out (Definition 6.7.2).

**Analytic and Reidemeister torsion.** Reidemeister torsion is an alternating product of sizes of torsion homology groups and volumes of the free parts. Analytic torsion is the matching product of regularised determinants of Laplacians. The Cheeger-Müller theorem says they are equal on a compact manifold.

## Main results

**Theorem (divisibility; Theorem A).** Suppose H<sub>1</sub>(Y<sub>0</sub>(npq), ℂ) = 0. Then the order of H<sub>1</sub><sup>E\*</sup>(Y′<sub>0</sub>(n), ℤ) divides the order of the pq-new part of H<sub>1</sub><sup>E\*</sup>(Y<sub>0</sub>(npq), ℤ), except possibly at orbifold primes, which are at most 3.
- Step 1: the classical correspondence gives equal Laplace spectra on the relevant pieces, so Cheeger-Müller gives equal Reidemeister torsion.
- Step 2: the congruence subgroup property for S-arithmetic SL<sub>2</sub> turns the leftover volume factors into congruence homology.

**Theorem (the gap is K-theory; Theorem A†).** With the same hypotheses and n trivial, the ratio |H<sub>1</sub><sup>E\*</sup>(Y<sub>0</sub>(pq), ℤ)<sup>pq-new</sup>| / |H<sub>1</sub><sup>E\*</sup>(Y′<sub>0</sub>(1), ℤ)| is divisible by the order of K<sub>2</sub>(O<sub>F</sub>), up to primes dividing 6·gcd(Np − 1, Nq − 1). So divisibility in Theorem A is not an equality in general.

**Theorem (extra torsion on the compact side; Theorem B).** Let l be a prime other than 2 and 3. Suppose H<sub>1</sub>(Y<sub>0</sub>(nq), ℤ<sub>l</sub>) = 0, that H<sub>1</sub>(Y<sub>0</sub>(np), ℤ<sub>l</sub>) and H<sub>1</sub>(Y<sub>0</sub>(npq), ℤ<sub>l</sub>) have no l-torsion, and that H<sub>1</sub>(Y′<sub>0</sub>(n), ℂ) = 0. Then l divides |H<sub>1</sub><sup>E\*</sup>(Y′<sub>0</sub>(n), ℤ)| if and only if l divides Δ, where (Np − 1)·Δ is the determinant of T<sub>q</sub><sup>2</sup> − (Nq + 1)<sup>2</sup> on H<sub>1</sub>(Y<sub>0</sub>(np), ℚ).

**Theorem (level raising; Theorem C).** Let [c] in H<sub>1</sub>(Y<sub>0</sub>(m), 𝔽<sub>l</sub>) be a non-Eisenstein Hecke eigenclass killed by T<sub>q</sub><sup>2</sup> − (Nq + 1)<sup>2</sup>. Then H<sub>1</sub>(Y<sub>0</sub>(mq), 𝔽<sub>l</sub>) contains a class with the same generalised Hecke eigenvalues away from q that does not come from level m. The introduction calls this statement "somewhat imprecise". The exact version is in § 4.3 and § 5.5.

## Note, then ignore

- Odd class number. The introduction assumes it so that the adelic quotient is one connected manifold. The body removes it. Safe to skip on a first reading.
- The primes 2 and 3. The groups have 2-torsion and 3-torsion, which makes the manifolds orbifolds and spoils some arguments. Read every statement as "away from 6" and move on.
- Numbers only. The theorems compare orders of groups. They say nothing about Hecke eigenvalues of torsion classes, and the authors say this themselves. Note it, then ignore it.
- Non-compact Cheeger-Müller. Chapter 5 exists because Y<sub>0</sub> has cusps, so harmonic forms need not be square-integrable and Eisenstein series enter. You can take its output on trust.
- Short version. This text is a cut-down form of a longer manuscript with more on regulators and Galois deformations. The difference does not affect Theorems A to C.

## One next step

Open the PDF at § 1.1.1 on page 2 and read only Theorem A and the paragraph after it that explains "pq-new".

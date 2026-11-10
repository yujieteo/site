source: https://arxiv.org/pdf/1810.10088
slogan: Taking algebraic K-theory twice of a finite field sees the β-family in the stable homotopy of spheres, one chromatic level above what K-theory sees once.
basis: the introduction and the main theorem statements

## Before you start

This paper is likely to raise the feeling of being out of your depth. It leans on chromatic homotopy theory, several spectral sequences and trace methods, all at once. That feeling is allowed, and it says nothing about you. What the paper offers is a pattern you may want to carry around: each round of K-theory raises the "height" of what you can detect by one. Read the introduction for that pattern and for pleasure. The computations can stay closed.

## The story

Quillen computed the K-groups of a finite field 𝔽<sub>q</sub>. Their orders match denominators of Bernoulli numbers, and they detect the α-family, the first periodic family in the stable homotopy groups of spheres. So K-theory of an object that sees only multiplication by p (height zero) sees height one. The Lichtenbaum–Quillen conjecture, now a theorem, makes this precise. Ausoni and Rognes proposed that the shift continues upward. The author states a concrete version: if a commutative ring spectrum R detects the n-th Greek letter family, then K(R) detects the next one. He proves the case n = 1 for R = K(𝔽<sub>q</sub>). The β-elements, which live at height two, have non-zero image in K(K(𝔽<sub>q</sub>)), and also in K(K(ℤ)).

## Main definitions

**Detecting a family.** A ring spectrum R detects a family of elements in π<sub>\*</sub>S, the stable homotopy groups of spheres, when each element has non-zero image under the unit map π<sub>\*</sub>S → π<sub>\*</sub>R.

**The α-family.** Fix an odd prime p. Let S/p be the cofibre of multiplication by p on the sphere spectrum, and let v<sub>1</sub> be its self-map of degree 2p − 2. The element α<sub>k</sub> ∈ π<sub>(2p−2)k−1</sub>S is the composite of three maps.
- Step 1: include the bottom cell into S/p and apply v<sub>1</sub> k times.
- Step 2: project to the top cell.

**The β-family.** Let V(1) be the cofibre of v<sub>1</sub> on S/p. For p ≥ 5 it has a self-map v<sub>2</sub> of degree 2p<sup>2</sup> − 2. The element β<sub>k</sub> is built the same way: include the bottom cell into V(1), apply v<sub>2</sub> k times, then project to the top cell. Larry Smith proved that these elements are non-zero.

**The standing choice of q.** Throughout, q is a prime power that generates the group of units of ℤ/p<sup>2</sup>. In particular q is prime to p. K(𝔽<sub>q</sub>)<sub>p</sub> means the p-completion of the K-theory spectrum.

## Main results

**Conjecture (Greek letter red-shift; Conjecture 1.1).** Suppose the n-th and (n+1)-st Greek letter families are non-trivial in π<sub>\*</sub>S at the prime p. If a commutative ring spectrum R detects the n-th family, then K(R) detects the (n+1)-st family.

**Theorem (β in K of K of a finite field; Theorem 1.2).** For every prime p ≥ 5 and q as above, the commutative ring spectrum K(K(𝔽<sub>q</sub>)<sub>p</sub>) detects the p-primary β-elements β<sub>k</sub> with k not divisible by p.
- Step 1: find v<sub>2</sub> and β<sub>1</sub>, then the further β<sub>k</sub>, in the V(1)-homotopy of topological negative cyclic homology TC<sup>−</sup> of K(𝔽<sub>q</sub>)<sub>p</sub>. The tools are a Hochschild–May spectral sequence and the homotopy fixed point spectral sequence.
- Step 2: the unit map of TC<sup>−</sup> factors through K-theory by the trace map, so classes that are non-zero in TC<sup>−</sup> are already non-zero in K-theory.

**Corollary (integers; Corollary 1.3).** For every prime p ≥ 5, the ring spectrum K(K(ℤ)) detects the same elements β<sub>k</sub>, k not divisible by p. The source says this follows from the method of proof of the theorem.

## Note, then ignore

- Only k prime to p. The elements β<sub>pk</sub> have zero Hurewicz image in V(1)-homotopy, so this method cannot see them. Safe to skip on a first reading.
- The restriction p ≥ 5. The self-map v<sub>2</sub> on V(1) exists for p ≥ 5, and at p = 3 only some β-elements are known to exist. Safe to skip.
- Modular forms. Behrens and Laures relate the β-family to integral modular forms with congruence conditions, which is why the abstract mentions them. The paper detects only the undivided part of the family. Safe to skip.
- Model of spectra. The paper fixes symmetric spectra with a particular model structure because one cited input needs it. Safe to skip.
- Versions. The arXiv file read here is version 4, from 2022, while the reading list gives 2018. Statements may differ from the first version. Safe to skip.

## One next step

Open the paper and read only Conjecture 1.1 and Theorem 1.2 on page 4, with the paragraph between them that explains the caveat.

source: https://arxiv.org/pdf/2211.13463
slogan: Replace profinite groups by Weil-style integral ones, and the reciprocity map for a variety over a p-adic field becomes an honest isomorphism.
basis: the introduction and the main theorem statements

## Before you start

The first page throws Bloch's cycle complex, Weil-étale cohomology and locally compact groups at you, and it leans on an earlier paper of the same authors. You may feel shut out, as if you came in halfway through a conversation. That is a reasonable thing to feel here. If you like class field theory, this shows what the statement K<sup>×</sup> ≅ W<sub>K</sub><sup>ab</sup> looks like for a whole variety. Enjoy the shape of Theorem 1.1. The machinery can stay a black box.

## The story

Local class field theory describes abelian extensions of a p-adic field K by the group K<sup>×</sup>. For a smooth proper variety X<sub>K</sub> over K, people built a reciprocity map ρ from a group of zero-cycles with coefficients, SK<sub>1</sub>(X<sub>K</sub>), to the abelianised fundamental group. It is never quite an isomorphism. For curves, Saito showed the kernel is divisible and the cokernel is a power of the profinite integers. For surfaces, Sato showed the kernel need not even be divisible. Geisser and Morin change both sides. On the left they use a cohomology with values in locally compact groups. On the right they use a Weil group version of π<sub>1</sub><sup>ab</sup>. A duality theorem from their earlier paper then makes the map an isomorphism, already in Weil's form for a point.

## Main definitions

Throughout, K is a finite extension of ℚ<sub>p</sub> with ring of integers O<sub>K</sub>. The model 𝒳 is a regular connected scheme of dimension d, proper and flat over O<sub>K</sub>, with reduced geometric fibres. X<sub>K</sub> is its generic fibre and X<sub>s</sub> its special fibre.

**Classical reciprocity map.** The map ρ from SK<sub>1</sub>(X<sub>K</sub>), which is motivic cohomology H<sup>2d−1</sup>(X<sub>K</sub>, ℤ(d)), to π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>).
- Geometric part: SK<sub>1</sub>(X<sub>K</sub>)<sup>0</sup> is the kernel of the norm to K<sup>×</sup>, and π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>)<sup>geo</sup> is the kernel of the map to the Galois group of K.

**Arithmetic cohomology H<sub>ar</sub>.** Take étale cohomology of Bloch's cycle complex ℤ(d) over the maximal unramified extension, then cohomology of the Weil group ℤ of the residue field instead of its Galois group. Truncate and complete to land in complexes of locally compact abelian groups. The cohomology of X<sub>K</sub> is a cofibre of the cohomology of the special fibre mapping to that of 𝒳.
- For a point: H<sub>ar</sub><sup>1</sup>(Spec K, ℤ(1)) = K<sup>×</sup> with its usual topology.

**Weil model of the fundamental group.** π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>)<sub>W</sub> is the fibre product of π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>) with the Weil version of the enlarged abelian fundamental group of X<sub>s</sub>, taken over π<sub>1</sub><sup>ab</sup>(X<sub>s</sub>).
- For a point: it is the abelianised Weil group of K.

## Main results

**Theorem (integral reciprocity; Theorem 1.1, which is Theorem 3.8).** Assume 𝒳 has good or strictly semi-stable reduction, and that the Weil-étale complex RΓ<sub>W</sub>(X<sub>s</sub>, ℤ<sup>c</sup>(0)) of the special fibre is a perfect complex of abelian groups. Then there is a unique functorial isomorphism of locally compact groups rec: H<sub>ar</sub><sup>2d−1</sup>(X<sub>K</sub>, ℤ(d)) → π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>)<sub>W</sub>. After profinite completion it gives the classical isomorphism from completed étale cohomology to π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>).
- Step 1: the duality theorem of the earlier paper (its Corollary 5.13) identifies H<sub>ar</sub><sup>2d−1</sup>(X<sub>K</sub>, ℤ(d)) with the Pontryagin dual of H<sub>ar</sub><sup>1</sup>(X<sub>K</sub>, ℝ/ℤ).
- Step 2: Proposition 3.7 identifies H<sub>ar</sub><sup>1</sup>(X<sub>K</sub>, ℝ/ℤ) with the characters of π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>)<sub>W</sub>. Dualise twice.

**Theorem (geometric part; Corollary 1.2, which is Corollary 3.14).** Under the same hypotheses, rec restricts to an isomorphism of finitely generated abelian groups from H<sub>ar</sub><sup>2d−1</sup>(X<sub>K</sub>, ℤ(d))<sup>0</sup> to π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>)<sup>geo</sup><sub>W</sub>. Its rank is the rank of the Weil-étale homology group H<sub>1</sub><sup>W</sup>(X<sub>s</sub>, ℤ) minus 1.

**Theorem (curves; Theorem 1.3, which is Theorem 6.2).** Let X<sub>K</sub> be a curve with good or strictly semi-stable reduction. Then the classical map on geometric parts factors as SK<sub>1</sub>(X<sub>K</sub>)<sup>0</sup> → H<sub>ar</sub><sup>3</sup>(X<sub>K</sub>, ℤ(2))<sup>0</sup> ≅ π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>)<sup>geo</sup><sub>W</sub> → π<sub>1</sub><sup>ab</sup>(X<sub>K</sub>)<sup>geo</sup>.
- Left map: its kernel is the maximal divisible subgroup, and its image is the torsion subgroup of the middle group.
- Right map: the inclusion of a finitely generated group into its profinite completion.

## Note, then ignore

- Perfect complex hypothesis. It asks that the Weil-étale cohomology of the special fibre be finitely generated and bounded. It keeps the arithmetic cohomology inside locally compact groups of finite rank (Proposition 2.9). Safe to skip at first.
- Truncation τ<sup>&gt;a</sup>. The Weil complex of 𝒳 is not known to be bounded below, so the authors cut it off far down. The choice of a does not matter. Safe to skip.
- Derived ∞-category of locally compact groups. This is where the topology on cohomology lives. Treat the groups as ordinary topological groups on a first reading.
- Enlarged fundamental group. It is a variant of π<sub>1</sub><sup>ab</sup>(X<sub>s</sub>) whose Weil version is a finitely generated abelian group, dense in π<sub>1</sub><sup>ab</sup>(X<sub>s</sub>). The details are safe to skip.
- Reduced fibres. The introduction assumes the geometric fibres of 𝒳 are reduced. It is a standing convention, safe to skip.

## One next step

Open the paper and read Theorem 1.1 and the three lines after it, where 𝒳 = Spec O<sub>K</sub> gives back K<sup>×</sup> ≅ W<sub>K</sub><sup>ab</sup>.

source: https://arxiv.org/pdf/2606.06604
slogan: One sheaf of monoids on Spec ℤ has, as its points over a perfectoid field, exactly the untilts that Scholze's heuristic asks for.
basis: the introduction and the main theorem statements

## Before you start

This paper joins two subjects with heavy reputations: geometry over 𝔽<sub>1</sub> and perfectoid fields. The likely feeling is shame at not knowing either background well enough. You are allowed to feel that, and it need not be fixed first. The central computation uses only a monoid homomorphism out of ℤ[1/p]. If you want to see where tilting comes from, look there, for the fun of watching a sequence of p-th roots appear.

## The story

Scholze suggested a heuristic: for an algebraically closed perfectoid field F of characteristic p, the untilts of F should stand in for the F-valued points of Spec ℤ. No space stood behind the slogan. Connes and Consani build one. In earlier work they sent a prime p to the group ℤ[1/p]. Here they pull a structure sheaf back along that map. The stalk at p becomes the monoid algebra on the non-negative part of ℤ[1/p], where T has all p-power roots. A point with values in a field is then a compatible sequence of p-th roots, which is an element of the tilt. Asking for p-adic continuity cuts this down to the open unit disc around 1. Dividing by the symmetries ℚ<sub>p</sub><sup>×</sup> leaves the untilts modulo Frobenius.

## Main definitions

**𝔽<sub>1</sub>-arithmetic site.** The topos of sets with an action of the multiplicative monoid of non-negative integers, with structure sheaf 𝔽<sub>1</sub>[T]. Here k acts by the Frobenius T<sup>n</sup> ↦ T<sup>nk</sup>. Its points are the totally ordered groups (H, H<sub>+</sub>) isomorphic to subgroups of ℚ, with the trivial group included.
- Stalk: at (H, H<sub>+</sub>) the stalk is the monoid algebra 𝔽<sub>1</sub>[T<sup>H<sub>+</sub></sup>].

**The 𝔽<sub>1</sub>-curve (Spec ℤ)<sub>𝔽<sub>1</sub></sub>.** The pair (Spec ℤ, F), where F is the pullback of that structure sheaf along the map Θ. Θ sends a prime p to ℤ[1/p] with its usual order, and the generic point to the trivial group.
- Stalk at p: F<sub>p</sub> = 𝔽<sub>1</sub>[T<sup>ℤ[1/p]<sub>+</sub></sup>], on which x ↦ x<sup>p</sup> is an automorphism.
- Stalk at the generic point: 𝔽<sub>1</sub>.

**Point at p, and local point.** A point at p with values in a field K is a monoid homomorphism χ from (ℤ[1/p]<sub>+</sub>, +) to (K, ·) with χ(0) = 1. It is local at a place v ∈ {p, ∞} when it is continuous for the topology that ℤ[1/p] gets from ℚ<sub>p</sub> or from ℝ. A local map extends uniquely to the completion (Proposition 3.6).

**Tilt.** For a field K, the tilt K<sup>♭</sup> is the inverse limit of K under x ↦ x<sup>p</sup>, a multiplicative monoid. For a perfectoid field C it becomes a perfectoid field of characteristic p. An untilt of a characteristic p field is a perfectoid field with that tilt.

## Main results

**Proposition (points are the tilt; Proposition 3.7).** For any field K with the coarse topology, χ ↦ (χ(1/p<sup>n</sup>))<sub>n</sub> is a bijection from the points of the curve at p with values in K onto K<sup>♭</sup>.
- Why: the relation 1/p<sup>n−1</sup> = p · 1/p<sup>n</sup> forces x<sub>n</sub><sup>p</sup> = x<sub>n−1</sub>.

**Theorem (perfectoid points; Theorems 3.9 and 3.17).** Let C be a perfectoid field of residue characteristic p, with maximal ideal m<sub>C</sub>. The local points at p with values in C are the group homomorphisms ℤ[1/p] → 1 + m<sub>C</sub>. The map above identifies them with the open unit disc 1 + m<sub>C<sup>♭</sup></sub> in the tilt, and this bijection respects the action of ℚ<sub>p</sub><sup>×</sup>. If C is algebraically closed, the points modulo ℚ<sub>p</sub><sup>×</sup> are the untilts of C<sup>♭</sup> modulo Frobenius. At each prime ℓ ≠ p the points form a single orbit.
- Step 1: continuity needs χ(1)<sup>p<sup>n</sup></sup> → 1, which holds exactly when χ(1) ∈ 1 + m<sub>C</sub>.
- Step 2: Lurie's description of untilts by cyclotomic embeddings turns disc points into untilts.

**Theorem (Scholze's heuristic; Theorem 3.16).** Let F be an algebraically closed perfectoid field of characteristic p. Modulo the symmetries of the stalks, the F-points of the curve collapse to one trivial point over each prime other than p. Over p they are in bijection with the untilts of F modulo Frobenius.

**Theorem (complex points; Propositions 4.1 and 4.4, Theorems 3 and 4 of the introduction).** Evaluate the curve over ℂ at p. For each place v ∈ {p, ∞} the non-trivial local points form a torsor under the local Weil group, ℚ<sub>p</sub><sup>×</sup> or ℂ<sup>×</sup>. The archimedean points are the maps t ↦ exp(zt) for z ∈ ℂ. Dividing the non-trivial ones by p<sup>ℤ</sup> gives the Tate curve E<sub>p</sub> = ℂ<sup>×</sup>/p<sup>ℤ</sup>.
- Decomposition: E<sub>p</sub> ≅ C<sub>p</sub> × X̃<sub>∞</sub>, where C<sub>p</sub> = ℝ<sub>+</sub><sup>×</sup>/p<sup>ℤ</sup> has length log p and X̃<sub>∞</sub> is a circle of length 2π that does not depend on p.

## Note, then ignore

- What an 𝔽<sub>1</sub>-algebra is. The paper uses "spherical algebras" of pointed monoids from the authors' earlier work. For this paper a map out of 𝔽<sub>1</sub>[T<sup>M</sup>] is a monoid map out of M. Safe to skip on a first reading.
- The adjoined zero. The topos uses non-negative integers so that the trivial group becomes a point, the image of the generic point. Safe to skip.
- The place ∞ over a perfectoid field. A totally disconnected field receives no non-trivial continuous map from ℝ, so only the p-adic topology matters there. Safe to skip.
- "Modulo Frobenius" and one extra point. The quotient gives the closed points of the Fargues–Fontaine curve together with a point for C<sup>♭</sup> itself. Safe to skip.
- Section 5. It links the scaling site to Gauss valuations on a period ring. It is not needed for the theorems above. Safe to skip.

## One next step

Open the paper at Section 3.4 and read the half page that ends with Proposition 3.7.

source: https://arxiv.org/pdf/2501.06560
slogan: Each prime p becomes a closed orbit of length log p in an adelic space, and Frobenius at p becomes the monodromy around that orbit.
basis: the introduction and the main theorem statements

## Before you start

The likely feeling here is intimidation. The first pages mention adeles, toposes, C\*-algebras and K-theory, and you may feel you need all four before you are allowed in. You do not, and it is fine to feel outnumbered anyway. If you want to see the "primes are knots" analogy turn into an actual space with actual loops, the first eight pages give you that. Read them for the picture. Finishing the paper is optional.

## The story

Class field theory describes the abelian extensions of ℚ through the idele class group. Grothendieck did something more geometric for all extensions: he turned Galois theory into a theory of covering spaces of schemes. Connes and Consani ask for the adelic version of that move. What space do the abelian extensions of ℚ cover?

Their answer is a quotient of the adeles called X<sub>ℚ</sub>. The positive reals act on it by scaling. Under this flow each prime p gives one closed orbit C<sub>p</sub>, a circle of length log p. A finite abelian extension L of ℚ gives a finite cover of X<sub>ℚ</sub>. Walk once around C<sub>p</sub>, lift the walk to the cover, and the sheets are permuted by the Frobenius at p. So primes behave like knots, and Frobenius is the holonomy around the knot.

## Main definitions

**Adele class space.** Y<sub>ℚ</sub> = ℚ<sup>×</sup>\𝔸<sub>ℚ</sub>, the adeles modulo multiplication by non-zero rationals. The idele class group C<sub>ℚ</sub> = ℚ<sup>×</sup>\GL<sub>1</sub>(𝔸<sub>ℚ</sub>) acts on it by multiplication.

**The space X<sub>ℚ</sub>.** X<sub>ℚ</sub> = ℚ<sup>×</sup>\𝔸<sub>ℚ</sub>/Ẑ<sup>×</sup>, the quotient of Y<sub>ℚ</sub> by the maximal compact subgroup Ẑ<sup>×</sup> of C<sub>ℚ</sub>. The remaining group ℝ<sub>+</sub><sup>×</sup> acts on it by scaling.
- Periodic orbits: for each prime p there is a closed orbit C<sub>p</sub> of length log p. The archimedean place gives a single fixed point.
- Generic orbit: the idele classes give one orbit η ≃ ℝ<sub>+</sub><sup>×</sup>, which is dense. It plays the part of the generic point of Spec ℤ.

**The cover attached to L.** Let L be a finite abelian extension of ℚ and W ⊂ Ẑ<sup>×</sup> the kernel of Ẑ<sup>×</sup> → Gal(L/ℚ). Put X<sub>ℚ</sub><sup>L</sup> = ℚ<sup>×</sup>\𝔸<sub>ℚ</sub>/W, with its projection π<sup>L</sup> to X<sub>ℚ</sub>.

**Linking of primes.** In the Mumford and Mazur dictionary a prime p is a knot Spec 𝔽<sub>p</sub> inside Spec ℤ. The linking of p with all other primes is the map r<sup>\*</sup>: π<sub>1</sub><sup>et</sup>(Spec 𝔽<sub>p</sub>) → π<sub>1</sub><sup>et</sup>(Spec ℤ<sub>(p)</sub>)<sup>ab</sup>.

## Main results

**Theorem (class field functor; Theorem 1).** L ↦ (π<sup>L</sup>: X<sub>ℚ</sub><sup>L</sup> → X<sub>ℚ</sub>) is a contravariant functor from finite abelian extensions of ℚ to finite covers of X<sub>ℚ</sub>. The cover ramifies exactly at the archimedean place and at the primes where L ramifies. For p outside that set, the monodromy of C<sub>p</sub> is Frob<sub>p</sub> ∈ Gal(L/ℚ), and the components of the preimage of C<sub>p</sub> are circles labelled by the places of L over p.
- Step 1: study the cover over one periodic orbit C<sub>p</sub> at a time.
- Step 2: read ramification and monodromy from the image of W at each place.

**Theorem (linking of primes; Theorem 2).** For a prime p, the preimage of C<sub>p</sub> in Y<sub>ℚ</sub> is canonically the mapping torus of multiplication by r<sup>\*</sup>(Frob<sub>p</sub>) on π<sub>1</sub><sup>et</sup>(Spec ℤ<sub>(p)</sub>)<sup>ab</sup>. The identification respects the idele class group action. The monodromy of C<sub>p</sub> in this preimage is r<sup>\*</sup> itself.
- Step 1: show π<sub>1</sub><sup>et</sup>(Spec ℤ<sub>(p)</sub>)<sup>ab</sup> ≅ Π<sub>q≠p</sub> ℤ<sub>q</sub><sup>×</sup> (Section 4).
- Step 2: r<sup>\*</sup>(Frob<sub>p</sub>) is the element p embedded diagonally. Since n ↦ p<sup>n</sup> ∈ ℤ<sub>q</sub><sup>×</sup> is injective, C<sub>p</sub> and C<sub>q</sub> link non-trivially.

**Theorem (sheaf of semilocal algebras; Theorem 3).** The crossed products of Bruhat-Schwartz algebras by units form a sheaf of algebras on Spec ℤ. Its sections over the complement of a finite set S of places (containing ∞) are S(𝔸<sub>S</sub>) ⋊ ℤ<sub>S</sub><sup>×</sup>. Its stalk at the generic point is S(𝔸<sub>ℚ</sub>) ⋊ ℚ<sup>×</sup>, and its global sections are S(ℝ) ⋊ {±1}.

## Note, then ignore

- Singular quotient. ℚ<sup>×</sup> acts ergodically on the adeles, so Y<sub>ℚ</sub> is badly behaved as a plain topological space. The authors handle this with noncommutative geometry and toposes. Safe to skip on a first reading.
- Scaling topos. X<sub>ℚ</sub> is also the set of points of a topos built from [0, ∞) and the positive integers. This matters for later work, not for Theorems 1 and 2. Skip it.
- Only ℚ, only abelian. The main results are stated for ℚ and for abelian extensions. Do not look for the non-abelian case here.
- K-theory computation. Section 5 computes K<sub>0</sub> ≃ ℤ<sup>3</sup> and K<sub>1</sub> ≃ ℤ<sup>2</sup> for the visible part with S = {p, q, ∞}. It is a consistency check. Skip it.
- The curve C. The table comparing X<sub>ℚ</sub> to a curve over a finite field is a heuristic guide, not a theorem. Read it as motivation.

## One next step

Open the paper at page 4 and look at Figure 1, then read Theorem 1 directly below it.

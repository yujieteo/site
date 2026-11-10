source: https://arxiv.org/pdf/2401.08401
slogan: Each prime p is a closed orbit of length log p, and lifting it to the adele class space shows how p links with the other primes.
basis: the full text

## Before you start

The likely feeling here is shame at vocabulary. The paper is ten pages, but it uses "scaling site", "adele class space" and "étale fundamental group" in its first paragraph, as if you had read twenty years of earlier papers. You have not, and that is fine. The proofs only use adeles and the Kronecker-Weber theorem. If you ever wanted the "primes are knots" analogy to be an actual picture, this gives one. Read it for the picture, and stop when you have it.

## The story

Mazur noticed that primes behave like knots in a 3-manifold. Two knots have a linking number: lift one knot to the maximal abelian cover of the complement of the other and read off the monodromy. For primes p and q, the stand-in for the linking number is the element p in the q-adic units ℤ<sub>q</sub><sup>×</sup>. But this was an analogy with no space in which a prime is a loop. Connes and Consani supply the space. In their space X<sub>ℚ</sub>, the scaling flow has one closed orbit C<sub>p</sub> of length log p for each prime. The adele class space sits over X<sub>ℚ</sub> like a maximal abelian cover. Lift C<sub>p</sub> to it, and the monodromy is multiplication by p, which is Frobenius at p. The loop and its linking are now geometry.

## Main definitions

**Adele class space.** The quotient X<sub>ℚ</sub><sup>ab</sup> = ℚ<sup>×</sup>\𝔸<sub>ℚ</sub> of the adeles of ℚ by multiplication by non-zero rationals. It is a non-commutative space: the quotient is badly non-Hausdorff.
- Semilocal version: for S = {p, q, ∞}, take Γ\(ℚ<sub>p</sub> × ℚ<sub>q</sub> × ℝ) with Γ = {±p<sup>m</sup>q<sup>n</sup>}.

**The space X<sub>ℚ</sub> (points of the scaling site).** The double quotient ℚ<sup>×</sup>\𝔸<sub>ℚ</sub>/Ẑ<sup>×</sup>, where Ẑ<sup>×</sup> is the group of units of the profinite integers. The positive reals ℝ<sub>+</sub><sup>×</sup> act on it by scaling. The map π from the adele class space to X<sub>ℚ</sub> plays the role of the maximal abelian cover.

**Periodic orbit C<sub>p</sub>.** The set of adele classes whose p-component is 0 and whose other finite components are units. It is one orbit of the scaling action, a circle ℝ<sub>+</sub><sup>×</sup>/p<sup>ℤ</sup> of length log p.
- Equivalent description: the rank one subgroups of ℝ isomorphic to ℤ[1/p].

**Mapping torus.** For a map g from a space G to itself, the quotient of G × ℝ that glues (x, t + 1) to (g(x), t). Going once around the circle direction applies g.

## Main results

**Theorem (lifting a prime; Theorem 1.1).** Let p be a prime. The inverse image π<sup>−1</sup>(C<sub>p</sub>) in the adele class space is canonically isomorphic to the mapping torus of multiplication by the image of Frobenius at p in the abelianised étale fundamental group of Spec ℤ<sub>(p)</sub>. The isomorphism respects the action of the idele class group.
- Step 1: compute directly that π<sup>−1</sup>(C<sub>p</sub>) is (ℝ<sub>+</sub><sup>×</sup> × Π<sub>q≠p</sub> ℤ<sub>q</sub><sup>×</sup>)/p<sup>ℤ</sup>, with p embedded diagonally.
- Step 2: identify Π<sub>q≠p</sub> ℤ<sub>q</sub><sup>×</sup> with that fundamental group by Kronecker-Weber. Frobenius raises roots of unity to the power p, so it acts as multiplication by p.

**Theorem (linking of two primes; Theorem 1.2).** Let p ≠ q be primes. The inverse image of C<sub>p</sub> in the semilocal adele class space Γ\(ℚ<sub>p</sub> × ℚ<sub>q</sub> × ℝ) is the mapping torus of Frobenius at p acting by multiplication on the abelianised étale fundamental group of Spec ℤ[1/q], which is ℤ<sub>q</sub><sup>×</sup>. So the monodromy is p ∈ ℤ<sub>q</sub><sup>×</sup>, the arithmetic linking number of p with q.
- Step 1: the idele class group orbits on the semilocal space are indexed by subsets of S, and the orbit for {p} is the lift of C<sub>p</sub> (Proposition 3.1).
- Step 2: the maximal abelian extension of ℚ ramified only at q has Galois group ℤ<sub>q</sub><sup>×</sup>.

**Proposition (a 3-dimensional resolution; Proposition 4.1).** The space Y = Γ\(ℚ<sub>p</sub> × ℚ<sub>q</sub> × ℝ × ℝ<sup>2</sup>) is locally compact of dimension 3. Translation by ℝ<sup>2</sup> gives a codimension 1 lamination whose leaf space is the semilocal adele class space.

## Note, then ignore

- "Scaling site" versus its points: the scaling site is a topos from earlier papers. This paper only uses its space of points X<sub>ℚ</sub>. Safe to skip on a first reading.
- Base points: abelianising the fundamental group removes the need to choose one. Safe to skip.
- Dimension 3: the authors stress that the 3 in Proposition 4.1 comes from choosing a pair of primes. It is not the cohomological dimension 3 of Spec ℤ from the knot analogy. Safe to skip.
- K-theory and C\*-algebras: Sections 3 and 4 describe each orbit's C\*-algebra and use the Baum-Connes map. This supports the non-commutative viewpoint but the two theorems do not need it. Safe to skip.
- Characteristic one: the orbit C<sub>p</sub> is described as an elliptic curve over a tropical semifield in earlier work. It is context only. Safe to skip.

## One next step

Open the paper at Section 2 and read the half-page proof of Theorem 1.1, up to equation (4).

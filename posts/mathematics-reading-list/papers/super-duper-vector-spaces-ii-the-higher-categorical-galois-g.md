source: https://categorified.net/SuperDuperVec2.pdf
slogan: The higher Galois group of ℝ is computed by surgery on topological field theories, and it comes out looking like the piecewise linear group.
basis: the full text

## Before you start

These are 13 pages of talk notes that open with a warning: unedited, verbose, work in progress, and with one calculation corrected after the talk. They also assume Part I, given by David Reutter. The feeling this may raise is the embarrassment of walking into the second half of a lecture, sure that everyone else followed the first. Let that be there. It is the honest position of most of the audience. If you want to see what a "Galois group" means one categorical level up, this is a lively place to look. Read it as you would listen to a good talk.

## The story

Deligne's theorem suggests that ℂ is not algebraically closed as a category: its closure is super vector spaces, sVec. Repeat the idea in every categorical dimension and you get a tower W, the higher separable closure of ℝ, built in Part I. This talk asks what the automorphism group Gal(W/ℝ) is. The method is an analogy. A topological field theory (TQFT) is like a manifold, a boundary condition is like a filling, and an interface is like a bordism. Manifold surgery kills homology below the middle dimension and leaves a quadratic form in the middle. Here one "condenses" operators below the middle dimension and is left with a finite abelian group carrying a form. So the homotopy groups of Gal sit in a long exact sequence with Witt groups, as in the surgery sequence for G/PL.

## Main definitions

**The tower W.** A sequence W<sub>0</sub> = ℂ, W<sub>1</sub> = sVec, W<sub>2</sub>, … of linear symmetric monoidal higher categories. Each W<sub>n</sub> extends the delooping ΣW<sub>n−1</sub> by the "missing roots of unity" in degree n. The notes write π<sup>n</sup>W for the simple objects of W<sub>n</sub> modulo connection by a non-zero morphism.

**Higher Galois group.** Gal = Aut<sub>ℝ</sub>(W). The notes state that π<sub>n</sub> Gal is the dual group hom(π<sup>n</sup>W, ℚ/ℤ).

**Anomalous TQFT.** A pair (Q, α) where α is an invertible n-dimensional TQFT valued in W and Q is a boundary condition for α. Two such pairs are equivalent if an interface joins them.
- Invertible TQFTs in dimension n form the group written π<sup>n</sup> I<sub>ℚ/ℤ</sub>.

**Witt group of finite abelian groups.** Finite abelian groups A with a non-degenerate ℚ/ℤ-valued symmetric (or skew-symmetric) form, under direct sum, modulo replacing A by Y<sup>⊥</sup>/Y for an isotropic subgroup Y.

## Main results

Everything here is announced in a talk on joint work in progress with Reutter. Treat each item as a claim with a sketch, not a written proof.

**Claim (odd dimensions; Section 4).** When n is odd, every anomalous (n − 1)-dimensional TQFT valued in W is joined by an interface to an invertible one. So a non-trivial odd-dimensional invertible theory has no topological boundary condition, and π<sup>n</sup> I<sub>ℚ/ℤ</sub> → π<sup>n</sup>W is injective.
- Step 1: operators of dimension at most (n − 3)/2 form an E<sub>∞</sub> algebra, and separable closure of W lets you condense them away.
- Step 2: a duality statement says no operators up to dimension (n − 2)/2 forces invertibility. For odd n the two bounds agree.

**Claim (even dimensions above 4; Section 5).** For n > 4, anomalous (n − 1)-dimensional TQFTs modulo interfaces form the group ℓ<sup>n</sup>: it is 0 for n odd, ℤ/2 for n ≡ 2 mod 4, and for n ≡ 0 mod 4 the Witt group of symmetric forms on finite abelian groups. That Witt group is a sum over primes p of ℤ/2 for p = 2, (ℤ/2)<sup>2</sup> for p ≡ 1 mod 4 and ℤ/4 for p ≡ 3 mod 4.

**Claim (surgery sequence; Sections 6 and 7).** There is a long exact sequence … → ℓ<sup>n</sup> → π<sup>n</sup> I<sub>ℚ/ℤ</sub> → π<sup>n</sup>W → ℓ<sup>n+1</sup> → …. Dually, for n > 4 the groups π<sub>n</sub> Gal fit in a sequence with the stable homotopy groups of spheres and the duals of the ℓ groups. A map from Ĝ/Gal to the dual of an L-theory spectrum ℓ, built from generalised Gauss sums, is an isomorphism on homotopy in degrees above 4. Here Ĝ is the profinitely completed automorphism group of the sphere spectrum.

**Claim (low degrees; Sections 8 and 9).** π<sub>1</sub> Gal = ℤ/2, acting by fermion parity, and π<sub>2</sub> Gal is trivial. π<sup>3</sup>W is an extension involving ℤ/24 and the torsion of the Witt group of slightly degenerate braided fusion categories, whose structure the notes take from Davydov, Nikshych and Ostrik.

**Conjecture.** There is a canonical map PL → Gal. Precisely: the PL j-homomorphism factors through the cyclotomic character, the action of Gal on the invertible theories.

## Note, then ignore

- The correction in Section 0. After the talk the author found that the degree 4 discrepancy has two homotopy groups, not one. It changes π<sub>5</sub> B Gal and not the plot. Safe to skip on a first reading.
- Upper and lower indices. Towers are graded cohomologically, so π<sup>k</sup> means π<sub>−k</sub>. This is bookkeeping. Safe to skip.
- Framed TQFT language. The author uses the cobordism hypothesis only to name objects and morphisms of W, and never evaluates a field theory on a manifold. Safe to skip.
- Arf–Kervaire exceptions. In dimensions ≡ 2 mod 4 the claim about boundary conditions has a handful of exceptions tied to the Hill–Hopkins–Ravenel theorem. Safe to skip.
- Fudged degree 0. The author says he fudges a factor √|A| and the degree 0 part of the comparison map. Safe to skip.

## One next step

Open the notes at Section 3 and read its first three paragraphs, where the dictionary between TQFTs and manifolds is set out.

source: https://arxiv.org/pdf/2308.01805
slogan: Give a finite cell complex a zeta function by using Adams operations as Frobenius, and its values at negative integers count K-local stable homotopy groups.
basis: the introduction and the main theorem statements

## Before you start

This paper asks for two fields at once: stable homotopy theory and L-functions of Dirichlet characters. The likely feeling is a quiet shame that you hold only half the background, whichever half that is. The author expects this and says so. He wrote it for readers on both sides, and explains basic points for each. If you want a concrete reason why zeta values show up in the homotopy groups of spheres, this is a gentle place to see it. Read for the analogy first. The torsion case can wait.

## The story

Adams, Baird and Ravenel computed the homotopy groups of the sphere after localising at complex K-theory, away from 2. The odd groups are cyclic, and their orders are the denominators of ζ(1 − n). People wanted the same kind of answer for other finite complexes, and had almost no examples. The idea is to copy the Hasse-Weil zeta function of a variety. Replace the variety by a finite CW-complex X. Replace étale cohomology by K-theory. Replace the Frobenius at p by the Adams operation Ψ<sup>p</sup>. The Euler product that results turns out to be a product of shifted Riemann zeta functions, one for each cell dimension. Its values at negative integers then give the orders of the localised homotopy groups. Torsion in K-theory needs extra L-function factors.

## Main definitions

**KU-localisation.** For a spectrum X, the Bousfield localisation L<sub>KU</sub>X is the universal spectrum under X that complex K-theory KU cannot tell apart from X. Its homotopy groups π<sub>\*</sub>(L<sub>KU</sub>X) are the part of stable homotopy that K-theory sees.

**Adams operation.** For a prime ℓ, the ℓ-adic units act on ℓ-complete K-theory. For a prime p ≠ ℓ, the element p acts as Ψ<sup>p</sup>. On the K-theory of an even sphere S<sup>2w</sup> it acts as multiplication by p<sup>w</sup>, up to the usual indexing.

**Provisional KU-local zeta function (Definition 2.1).** For a finite CW-complex X, take the product over all primes p of det(1 − p<sup>−s</sup>Ψ<sup>p</sup>) on the odd K-group divided by the same determinant on the even K-group. For each p the K-theory is completed at an auxiliary prime where it has no torsion. The product converges in a right half plane and is written ζ̇<sub>KU</sub>(s, X).
- Sanity check: for a smooth projective cellular variety V over ℚ whose complex points have rational cohomology in even degrees, it equals the Hasse-Weil zeta function of V.

**KU-local zeta function (Definition 3.6).** Assume KU<sup>\*</sup>(X) sits in even degrees and the torsion subgroup of KU<sup>0</sup>(X) has square-free order. Then ζ<sub>KU</sub>(s, X) is ζ̇<sub>KU</sub>(s, X) times a "torsion L-function": an Euler product over primes and over representations of the torsion subgroup induced from subgroups of prime order.

## Main results

**Theorem (Adams-Baird-Ravenel, recalled as Theorem 1.1).** After inverting 2, the KU-local sphere has π<sub>0</sub> = ℤ[1/2] and π<sub>−2</sub> = (ℚ/ℤ)[1/2]. For n &gt; 0 the group π<sub>2n−1</sub> is cyclic of order the denominator of ζ(1 − n), up to a power of 2, and π<sub>2n</sub> is zero.

**Theorem (shape of the function; Theorem 2.4).** For any finite CW-complex X, the product ζ̇<sub>KU</sub>(s, X) continues to a meromorphic function on ℂ. It equals the product over integers w of ζ(s − w) raised to the power β<sub>2w</sub> − β<sub>2w+1</sub>, where β<sub>n</sub> is the n-th Betti number of X.
- Step 1: rationally every attaching map is trivial, so Ψ<sup>p</sup> acts as on a wedge of spheres.
- Step 2: the Chern character turns each sphere into one shifted Euler factor.

**Theorem (special values, torsion-free case; Theorem 2.8).** Let P be the set containing 2 and the torsion primes of H<sup>\*</sup>(X; ℤ). Assume the cohomology with P inverted is in even degrees, and let DX be the Spanier-Whitehead dual. For odd degrees 2k − 1 above a bound set by the lowest cell, π<sub>2k−1</sub>(L<sub>KU</sub>DX) is finite. Its order is the product over w of the denominators of the weight-w factors at s = 1 − k, up to primes in P. It equals the denominator of ζ̇<sub>KU</sub>(1 − k, X) up to irregular primes and primes in P.
- Proof: one Atiyah-Hirzebruch spectral sequence, fed with the sphere computation above.

**Theorem (with torsion; Theorem 3.7).** Under the assumptions of Definition 3.6, the same count holds with the torsion L-factors included, up to powers of 2, exactly when the skeletal filtration on the torsion of KU<sup>0</sup>(X) splits completely as a filtration of modules over the Adams operations. The statement is an equivalence.

## Note, then ignore

- The prime 2. K-theory at 2 behaves differently, so every count is "up to powers of 2". Safe to skip.
- The auxiliary prime ℓ<sub>p</sub>. Each Euler factor uses K-theory completed at a prime for which p generates the units. The determinant does not depend on the choice. Safe to skip.
- The dual DX. The values of the zeta function of X count homotopy of the dual of X, because cohomology of X is homology of DX. For a sphere this is only a shift. Safe to skip.
- Irregular primes. A product of denominators can differ from the denominator of the product when numerators cancel. Irregular primes measure this. Safe to skip.
- "Provisional". The dotted function sees only rational K-theory. The name marks it as a first draft of the full definition. Safe to skip.

## One next step

Open the paper at Section 2.1 on page 8 and read the four bullet points before Definition 2.1, which state the dictionary from varieties to cell complexes.

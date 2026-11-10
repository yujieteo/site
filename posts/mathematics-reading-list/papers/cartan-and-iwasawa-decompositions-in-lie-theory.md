source: https://personal.math.ubc.ca/~reichst/Cartan+Iwasawa.pdf
slogan: Every semisimple Lie group splits like a matrix into a rotation part and a triangular part, so Gram-Schmidt works far beyond matrices.
basis: the full text

## Before you start

These are eleven pages by a first-year master's student, with typos and with two of the main theorems stated without proof. The feeling they may raise is irritation, or doubt about whether to trust the text. Both are reasonable, and you do not have to settle them first. If you want a picture of what K, A and N are before opening Knapp's book, this is a short way to get one. Read for the examples, GL(n, ℂ) and SL(2, ℝ). Checking every line is optional.

## The story

A square matrix splits into a symmetric part and a skew-symmetric part, and an invertible matrix factors as an orthogonal matrix times an upper triangular one. One wants the same two splittings for any semisimple Lie group, where there are no matrix entries to work with. The idea is to replace "minus conjugate transpose" by an abstract involution θ of the Lie algebra, chosen so that the Killing form twisted by θ becomes an inner product. The eigenspaces of θ give the Cartan decomposition. Diagonalising a maximal commuting family inside the −1 eigenspace gives restricted roots, and the positive root spaces add up to a nilpotent algebra n. The result is g = l ⊕ a ⊕ n and, for groups, G = KAN. For SL(2, ℝ) this turns the upper half-plane G/K into the group NA.

## Main definitions

**Cartan involution.** Let g be a real semisimple Lie algebra with Killing form B. An involution θ of g is a Cartan involution if B<sub>θ</sub>(X, Y) = −B(X, θY) is symmetric and positive definite (Definition 1).
- Model case: θ(X) = −X\* on a matrix Lie algebra closed under conjugate transpose.
- Complex case: conjugation with respect to a compact real form is a Cartan involution of the underlying real algebra (Proposition 2).

**Cartan decomposition.** The splitting g = l ⊕ p into the +1 and −1 eigenspaces of a Cartan involution. It satisfies [l, l] ⊂ l, [l, p] ⊂ p, [p, p] ⊂ l, and B is negative definite on l and positive definite on p (Definition 4).

**Restricted roots.** Choose a maximal abelian subspace a of p. The operators ad H for H ∈ a commute and are self-adjoint for B<sub>θ</sub>, so g splits into joint eigenspaces g<sub>λ</sub> with λ in the dual of a. The nonzero λ with g<sub>λ</sub> ≠ 0 are the restricted roots (Definition 7).

## Main results

**Theorem (Cartan involutions exist and are unique; Theorem 3).** Every real semisimple Lie algebra has a Cartan involution, and any two are conjugate by an inner automorphism. The proof assumes that the complexification has a compact real form (Theorem 1, quoted without proof).
- Step 1: for a Cartan involution θ and any involution σ, some inner automorphism φ makes φθφ<sup>-1</sup> commute with σ (Theorem 2).
- Step 2: apply this to the two conjugations of the complexification, then restrict to the real algebra. Two commuting Cartan involutions are equal by a sign argument.

**Theorem (global Cartan decomposition; Theorem 4, stated without proof).** Let G be a semisimple Lie group, θ a Cartan involution of its Lie algebra and K the analytic subgroup with Lie algebra l. Then θ lifts to an involution Θ of G with fixed group K, and the map K × p → G, (k, X) ↦ k exp(X), is a diffeomorphism.
- K is closed and contains the centre Z of G. K is compact exactly when Z is finite, and then K is a maximal compact subgroup.

**Theorem (Iwasawa decomposition of the Lie algebra; Theorem 5).** With a as above and n the sum of the g<sub>λ</sub> over positive restricted roots, g = l ⊕ a ⊕ n as vector spaces. Here a is abelian, n is nilpotent, a ⊕ n is solvable and [a ⊕ n, a ⊕ n] = n.
- Step 1: the sum is direct because θ swaps g<sub>λ</sub> and g<sub>−λ</sub>, so an element of l inside a ⊕ n lies in a ∩ l = 0.
- Step 2: the sum is everything because X<sub>−λ</sub> = (X<sub>−λ</sub> + θX<sub>−λ</sub>) − θX<sub>−λ</sub>, with the first term in l and the second in n.

**Theorem (Iwasawa decomposition of the group; Proposition 3 and Theorem 6).** For G = GL(n, ℂ), K = U(n), A the positive diagonal matrices and N the upper unitriangular matrices, multiplication A × N × K → G is a diffeomorphism, by Gram-Schmidt on the rows. In general (Theorem 6, stated without proof) the connected subgroups K, A, N with Lie algebras l, a, n give a diffeomorphism K × A × N → G, and A and N are simply connected.

## Note, then ignore

- The letter l. The notes write l for the +1 eigenspace. Most books write 𝔨, to match the group K. Safe to skip.
- "Complex" in Section 4. The notes say "complex semisimple" in the set-up for Lemma 2, Definition 9 and Theorem 6, although the lemma itself assumes g real and the SL(2, ℝ) example is real. Read the construction as one for real semisimple g. Safe to skip on a first reading.
- Order of the factors. The text writes NAK, ANK and KAN in different places. Each ordering gives a valid decomposition. Safe to skip.
- Choice of positivity. The set of positive restricted roots depends on an ordering of the dual of a, for instance a lexicographic one. A different choice gives a conjugate n. Safe to skip.

## One next step

Open the notes at page 7 and read Proposition 3 with its proof: the Iwasawa decomposition of GL(n, ℂ) done by Gram-Schmidt in half a page.

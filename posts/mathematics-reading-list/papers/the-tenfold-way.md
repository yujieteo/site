source: https://math.ucr.edu/home/baez/tenfold/tenfold_web.pdf
slogan: Ten symmetry classes of quantum systems, ten super division algebras and ten Morita classes of Clifford algebras are one list, so one table serves all.
basis: the full text

## Before you start

This is a 35-page slide deck, and half of its words come from physics: time reversal, charge conjugation, holes. The likely feeling is a small unease at being outside the trade, as if the mathematics were someone else's property. That unease is allowed to sit there. Nothing in the slides needs physics beyond the phrase "symmetry of a Hilbert space". If you have ever wondered why ℝ, ℂ and ℍ keep turning up together, these slides answer that in an evening. Read for the pleasure of the pattern. Finishing can wait.

## The story

Quantum states are unit vectors up to phase. Wigner's theorem says that a symmetry of states comes from a unitary or an antiunitary operator. An antiunitary J that squares to a scalar must have J<sup>2</sup> = 1 or J<sup>2</sup> = −1. In the first case J acts like complex conjugation and the Hilbert space is the complexification of a real one. In the second, i, J and iJ obey the quaternion relations. So irreducible representations come in three kinds: real, complex, quaternionic. This is Dyson's threefold way, and it mirrors Frobenius: ℝ, ℂ and ℍ are the only division algebras. Baez then splits the Hilbert space into an even and an odd part, particles and holes. Antiunitaries can now be even (T) or odd (C). The count rises from three to ten, and the ten kinds match the ten super division algebras.

## Main definitions

**Antiunitary operator.** A map J on a complex Hilbert space that is additive, satisfies J(cψ) = c̄ Jψ, and satisfies ⟨Jφ, Jψ⟩ = the complex conjugate of ⟨φ, ψ⟩.
- If J<sup>2</sup> = 1, the fixed vectors of J form a real Hilbert space.
- If J<sup>2</sup> = −1, J makes the space quaternionic.

**Super Hilbert space and graded representation.** A super Hilbert space is a Hilbert space written as H<sub>0</sub> ⊕ H<sub>1</sub>, the even and odd parts. A ℤ/2-graded group is a group G split into two disjoint subsets G<sub>0</sub> and G<sub>1</sub> with G<sub>i</sub>G<sub>j</sub> ⊂ G<sub>i+j</sub>. A unitary representation of G on H is graded if G<sub>i</sub> sends H<sub>j</sub> into H<sub>i+j</sub>.

**Super division algebra.** A superalgebra is a finite-dimensional real associative algebra A = A<sub>0</sub> ⊕ A<sub>1</sub> with unit, where A<sub>i</sub>A<sub>j</sub> ⊂ A<sub>i+j</sub>. It is a super division algebra if every non-zero element that is purely even or purely odd has an inverse.
- Example: ℂ with everything even, and ℂ with the imaginary numbers odd, are two different super division algebras.

**Clifford algebras and Morita equivalence.** Cliff<sub>n</sub> is the free real superalgebra on n anticommuting odd square roots of −1. Cliff<sub>−n</sub> uses square roots of +1. Two superalgebras are Morita equivalent if their categories of representations on super vector spaces are equivalent.

## Main results

The slides do not number their theorems.

**Theorem (threefold way; Dyson).** Let ρ be an irreducible unitary representation of a group G on a complex Hilbert space. Exactly one of three cases holds. Some antiunitary J with J<sup>2</sup> = 1 commutes with ρ (real). Some antiunitary J with J<sup>2</sup> = −1 commutes with ρ (quaternionic). No antiunitary commutes with ρ (complex).
- Example: the spin-j representation of SU(2) is real for integer j and quaternionic for half-integer j.
- Tensor rule: label the cases 1, −1, 0. Then types multiply under ⊗ as these numbers do.

**Theorem (tenfold way).** The irreducible unitary representations of a ℤ/2-graded group on a super Hilbert space come in ten types, sorted by the real-linear operators that commute with ρ.
- Nine types: an even antiunitary T with T<sup>2</sup> = 1, T<sup>2</sup> = −1 or no T, together with an odd antiunitary C with C<sup>2</sup> = 1, C<sup>2</sup> = −1 or no C.
- Tenth type: no such T or C, but an odd unitary S, which one may scale so that S<sup>2</sup> = 1.

**Theorem (Wall, Deligne).** There are exactly ten super division algebras. Eight are real: ℝ and ℍ with everything even, Cliff<sub>1</sub>, Cliff<sub>2</sub>, Cliff<sub>3</sub>, Cliff<sub>−1</sub>, Cliff<sub>−2</sub>, Cliff<sub>−3</sub>. Two are complex: ℂ with everything even, and the complex Clifford algebra on one odd generator.
- Periodicity: Cliff<sub>n+8</sub> is Morita equivalent to Cliff<sub>n</sub> over ℝ, and the complex Clifford algebras repeat with period 2. That gives 8 + 2 = 10 Morita classes.

**Claim (the dictionary).** The ten types of commutant, the ten Morita classes of real and complex Clifford algebras, and the ten super division algebras correspond one to one. Under ⊗ the types add in the commutative monoid ℤ/8 ⊔ ℤ/2. Two elements of ℤ/8 add mod 8. A sum that involves an element of ℤ/2 is taken mod 2 and lands in ℤ/2.

## Note, then ignore

- Sign convention for Clifford algebras. Here positive n means square roots of −1 and negative n means square roots of +1. Other authors reverse this. Safe to skip on a first reading.
- Cliff<sub>4</sub> is not a division algebra. It is only Morita equivalent to ℍ with everything even, which is why ℍ stands in its slot on the clock diagram. Safe to skip.
- C and T commute by assumption. The slides say this is the convention of condensed matter physics. It is an input, not a theorem. Safe to skip.
- Symmetric spaces. The opening slide lists ten families of compact symmetric spaces as a fourth incarnation. The slides do not develop it. Safe to skip.

## One next step

Open the PDF at the title slide and look at the clock diagram for two minutes: eight real Clifford algebras around the rim, two complex ones in the middle, each labelled with its values of T<sup>2</sup>, C<sup>2</sup> or S<sup>2</sup>.

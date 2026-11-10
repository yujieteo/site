source: https://legacy-www.math.harvard.edu/theses/senior/krulewski/krulewski.pdf
slogan: Phases of gapped free-fermion systems are components of ten spaces of operators, and Bott periodicity makes the list repeat with dimension.
basis: the introduction and the main theorem statements

## Before you start

This thesis asks for two backgrounds at once: algebraic topology and quantum mechanics with second quantisation. If you have one and not the other, you may feel like an outsider in half the chapters. That feeling is allowed. The author wrote for readers in exactly that position. If you want to see Bott periodicity do a job in a physical material, this is a friendly place to watch it. Enjoy the examples first. Completing the text is optional.

## The story

Physicists want a list of the possible phases of insulators and superconductors. Two systems are in the same phase when one Hamiltonian deforms to the other without closing the energy gap. Counting phases this way looks hopeless, because the space of Hamiltonians is huge. Kitaev's 2009 proposal, which the thesis explains, restricts to free fermions and sorts Hamiltonians by two symmetries: time reversal T and particle number conservation Q. Each symmetry acts like a Clifford algebra generator. The allowed Hamiltonians then form one of ten classifying spaces, eight real and two complex. Atiyah and Singer showed that these are the classifying spaces of KO-theory and K-theory. So a phase is a connected component, and the count is a K-group of a point. The Majorana chain gets an invariant in ℤ/2. The integer quantum Hall effect gets an integer.

## Main definitions

**Gapped Hamiltonian.** A Hamiltonian is gapped if its energy spectrum is discrete around zero (Definition 2.1.1). Phases are compared only among gapped Hamiltonians, and a phase transition is a point where the gap closes.

**Symmetry-protected topological phase.** An element of π<sub>0</sub> of a classifying space of Hamiltonians with given symmetries (Definition 2.1.3). Two Hamiltonians lie in the same phase when a path of gapped Hamiltonians with the same symmetries joins them.

**Classifying spaces R<sub>q</sub> and C<sub>q</sub>.** R<sub>q</sub> (q mod 8) and C<sub>q</sub> (q mod 2) are the ten spaces in Tables 3 and 4 of the thesis, taken in the limit of large matrix size. They satisfy R<sub>q+1</sub> ≃ ΩR<sub>q</sub> and C<sub>q+1</sub> ≃ ΩC<sub>q</sub>.
- Real case: R<sub>0</sub> is ℤ times a real Grassmannian, R<sub>1</sub> is O, and π<sub>0</sub>(R<sub>q</sub>) runs through ℤ, ℤ/2, ℤ/2, 0, ℤ, 0, 0, 0.
- Complex case: C<sub>0</sub> is ℤ times a complex Grassmannian, C<sub>1</sub> is U, with π<sub>0</sub> equal to ℤ and 0.

**Clifford extension problem.** Given a representation of a Clifford algebra with p generators, find the ways to add one more anticommuting generator. In the thesis the symmetries T and QT supply the given generators, and the spectrally flattened Hamiltonian is the new one.

## Main results

**Claim (physics argument; Kitaev's proposal, Section 1.1.2).** The phases of gapped free-fermion models in d dimensions with p negative symmetries are classified by π<sub>0</sub> of one of the spaces R<sub>q</sub> or C<sub>q</sub>, equivalently by a reduced KO-group or K-group of a point. The index q depends only on p − d, mod 8 or mod 2. The thesis motivates this and does not prove it.
- Case 1: with Q-symmetry only, the complex spaces C<sub>q</sub> apply.
- Case 2: with no symmetry, T only, or both T and Q, the real spaces R<sub>q</sub> apply.

**Theorem (Atiyah, Singer; Theorem 1.4.25).** For k ≥ 1, the space of real skew-adjoint Fredholm operators that anticommute with k − 1 Clifford generators, restricted to its non-contractible part when k ≡ 3 mod 4, is homotopy equivalent to the loop space of the same space for k − 1. So it is a classifying space for KO<sup>−k</sup>. Theorem 1.4.27 is the complex version, for K<sup>−k</sup>. The thesis quotes both without proof.
- Step 1: send an operator A to the path J<sub>k−1</sub> cos πt + A sin πt, for t from 0 to 1.
- Step 2: periodicity of Clifford algebras then leaves only 8 + 2 distinct spaces.

**Claim (zero dimensions; Claim 3.3.1).** Classifying free-fermion Hamiltonians in dimension 0 with p negative symmetries is the same as the Clifford extension problem with p negative generators. The thesis argues this through the cases p = 0, 1, 2.

**Claim (examples; Sections 4.1.3 and 5.1.3).** For the Majorana chain with parameters u and v, the gap closes exactly when |u| = |v|. The invariant is sign(Pf[iH(0)] Pf[iH(π)]) = sign(u² − v²), and it separates the trivial phase from the topological one. For the integer quantum Hall effect the invariant is the filling factor ν in π<sub>0</sub>(C<sub>0</sub>) = ℤ, computed as a Chern number of a bundle over the Brillouin torus.

## Note, then ignore

- Index conventions. The shift by 2 in the proposal comes from using negative Clifford generators (Remark 3.3.3), and the label of the Majorana chain's space differs between the outline and Section 4.1.3. Trust the tables and skip the bookkeeping at first.
- Looping versus periodicity. Remark 1.4.16 stresses that consecutive spaces are related by loop spaces, and Bott periodicity only closes the cycle. Safe to skip.
- Lattice models only. General systems need noncommutative geometry to define the index, and the thesis leaves that out. Safe to skip.
- Honeycomb model. It lacks Q-symmetry, so it is not exactly the quantum Hall effect, and its Chern number reads as edge mode direction. Safe to skip on a first reading.
- No interactions. Everything is for free fermions, and the fractional quantum Hall effect lies outside the scheme. Safe to skip.

## One next step

Open the thesis at the List of Tables (pages vii and viii) and read Tables 2 and 4 side by side. Then read the boxed "Kitaev's Proposal" on page 2.

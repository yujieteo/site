source: https://arxiv.org/pdf/1908.09677
slogan: On a complex curve, Hitchin's commuting differential operators should have honest eigenfunctions in a Hilbert space, labelled by opers with real monodromy.
basis: the introduction and the main theorem statements

## Before you start

Seventy-one pages in two halves: one geometric (stacks of bundles, opers, D-modules), one hard analysis (unbounded operators, Sobolev spaces). Few readers own both, so the likely feeling is being a stranger in half of it. That is allowed. If you want to see geometric Langlands turn back into a spectral problem with functions and eigenvalues, the seven-page introduction delivers it. Take what pleases you from it. Nothing obliges you to reach Part II.

## The story

Over a finite field, the Langlands correspondence is a spectral problem: Hecke operators act on L<sup>2</sup> functions on the set of G-bundles, and their eigenvalues match Galois data. Over ℂ, Beilinson and Drinfeld replaced functions by D-modules, and the theory became categorical. Langlands asked whether a function version exists for complex curves. Etingof, Frenkel and Kazhdan answer with differential operators in place of Hecke operators. The quantum Hitchin Hamiltonians are commuting holomorphic differential operators on Bun<sub>G</sub>. Add their complex conjugates, and let both act on half-densities, which form a Hilbert space. Holomorphic eigenvalues are opers for the dual group. A single-valued joint eigenfunction can exist only when the oper's monodromy is isomorphic to its complex conjugate. This reality condition was predicted by Teschner.

## Main definitions

**The Hilbert space H.** Let X be a smooth projective complex curve and G simple and simply connected. Let K<sup>1/2</sup> be the square root of the canonical bundle on Bun<sub>G</sub>, and Ω<sup>1/2</sup> = K<sup>1/2</sup> ⊗ (its complex conjugate), the bundle of half-densities. H is the completion of smooth compactly supported sections of Ω<sup>1/2</sup> over the open locus Bun°<sub>G</sub> of stable bundles whose automorphism group is the centre of G, under the pairing ∫ v·w̄.
- A variant Bun<sub>G</sub>(X, S) adds Borel reductions at a finite set S of points.

**The algebra A.** D<sub>G</sub> is the algebra of global holomorphic differential operators on K<sup>1/2</sup>, the quantum Hitchin Hamiltonians. A = D<sub>G</sub> ⊗ (its complex conjugate). With no marked points it is commutative. It acts on sections of Ω<sup>1/2</sup>. A<sub>ℝ</sub> is the real subalgebra fixed by the adjoint anti-involution. Its elements are symmetric operators.

**Opers and real opers.** An <sup>L</sup>G-oper on X is a holomorphic <sup>L</sup>G-bundle with a connection and a Borel reduction satisfying a transversality condition. For <sup>L</sup>G = PGL<sub>2</sub> it is a projective connection. An oper is real if its monodromy representation is isomorphic to the complex conjugate representation.
- For PGL<sub>2</sub>, genus above 1 and S empty, this means monodromy in PGL<sub>2</sub>(ℝ) up to conjugation.

## Main results

**Theorem (Beilinson and Drinfeld; Theorem 1.1, quoted).** D<sub>G</sub> is canonically isomorphic to the algebra of regular functions on the variety of <sup>L</sup>G-opers on X. So a joint eigenvalue of D<sub>G</sub> is an oper. With marked points there is an embedding of the corresponding oper functions into D<sub>G</sub>(X, S) (Theorem 1.3).

**Conjecture (Conjectures 1.9, 1.10, 1.11).** The algebra A<sub>ℝ</sub> is essentially self-adjoint on a suitable Schwartz space S(A) in H. The joint spectrum of A on H is discrete, so H is a completed direct sum of finite-dimensional eigenspaces. Every oper in the spectrum is real.
- The authors sketch why the third follows from the first two plus a conjecture of Beilinson and Drinfeld on irreducibility and regularity of the eigen-D-modules.

**Theorem (two proved cases; Theorem 1.12).** In the cases (1) G = GL<sub>1</sub>, X of genus greater than 0, S empty, and (2) G = SL<sub>2</sub>, X = ℙ<sup>1</sup>, |S| = 4, the three conjectures hold, and the spectrum equals the full set of real opers.
- Case 1: The eigenfunctions are Fourier harmonics on a torus. For an elliptic curve this is Theorem 5.2.
- Case 2: The problem reduces to one second-order operator L on ℙ<sup>1</sup> with four singular points and its adjoint. Theorem 12.1 shows their normalised joint eigenfunctions form an orthonormal basis of H. The paper gives three proofs.

**Question (Question 1.13).** Does the spectrum equal the set of real opers for general G, X and S? The paper leaves this open.

## Note, then ignore

- Simply connected G. Assumed so that Bun<sub>G</sub> is irreducible and K<sup>1/2</sup> is unique. For other G the bundle Ω<sup>1/2</sup> still does not depend on the choice. Safe to skip on a first reading.
- Genus restrictions. Genus above 1, or genus 1 with a marked point, or ℙ<sup>1</sup> with at least 3 points (in effect 4), so that the stable locus is open and dense. Skip it.
- Essentially self-adjoint algebra. Symmetric operators need not have a unique self-adjoint extension, and Section 11 gives counterexamples. That is why the Schwartz space S(A) enters. Skip the details.
- Stack versus variety. Bun°<sub>G</sub> is a gerbe for the centre of G over a smooth variety, and the paper works on the variety. Skip it.
- No Hecke operators here. Langlands proposed integral Hecke operators. The authors use differential operators here instead. Skip the comparison.

## One next step

Open the paper and read Subsection 1.3 on pages 2 to 4, stopping at "Borel reductions".

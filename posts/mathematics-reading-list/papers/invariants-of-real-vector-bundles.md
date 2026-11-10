source: https://arxiv.org/pdf/2310.05061
slogan: Finitely many Dirac indices, taken over chosen spin manifolds mapping into a space, decide whether two real vector bundles on it are stably equivalent.
basis: the introduction and the main theorem statements

## Before you start

At 83 pages, with Clifford modules, index theory and Anderson duality all in play, this paper is likely to raise overwhelm: three subjects, and you may feel you own none of them fully. That feeling is allowed. If you want a de Rham-style answer to "is this bundle trivial?", the introduction gives it in five pages. Enjoy the analogy first. The quaternionic machinery can wait, or never come.

## The story

De Rham's theorem says a closed form is exact when its integrals over a fixed set of cycles vanish. People wanted the same for real vector bundles: a list of numbers, fixed in advance, that decides stable triviality. Obstruction theory does not give this, because each obstruction is defined only once the earlier ones vanish. Freed had done the complex case with spin<sup>c</sup> cycles. The real case stalls on 2-torsion. Hu's idea is a duality theorem: classes in any cohomology theory are detected by periods over cycles for its Anderson dual. The Anderson dual of real K-theory KO is symplectic K-theory KSp. Its natural cycles are spin<sup>h</sup> manifolds, a quaternionic cousin of spin manifolds. The periods are indices of Dirac operators twisted by the bundle.

## Main definitions

**Spin cycle and torsion spin cycle.** A spin cycle in X is a closed spin manifold M with a map f : M → X. A ℤ<sub>k</sub>-spin cycle is a spin manifold with boundary whose boundary consists of k identical parts, glued together into one, with a map from the glued space to X.

**The invariants.** Pair a cycle f with a real bundle E on X by taking the index of the Dirac operator on M twisted by f<sup>\*</sup>E.
- Closed cycles: the index lies in ℤ or in ℤ/2, depending on dim M. These are the integer and parity invariants.
- ℤ<sub>k</sub>-cycles: the index, divided by εk and taken mod ℤ, lies in ℚ/ℤ. Here ε = 2 if dim M ≡ 4 mod 8 and ε = 1 otherwise. These are the angle invariants.

**Spin<sup>h</sup> structure (Definition 4.1).** For an oriented Riemannian bundle E, a spin<sup>h</sup> structure is equivalent to a rank 3 oriented bundle h<sub>E</sub> with w<sub>2</sub>(h<sub>E</sub>) = w<sub>2</sub>(E). The group Spin<sup>h</sup>(n) plays the role that Spin(n) plays for spin structures, with Sp(1) built in.

**Anderson dual.** For a cohomology theory h of finite type, the Anderson dual Dh is the homology theory that fits into a long exact sequence between Hom(h, ℚ) and Hom(h, ℚ/ℤ).
- Examples: the dual of ordinary cohomology is ordinary homology, the dual of KU is KU, and the dual of KO is KSp.

## Main results

**Theorem (characteristic variety, spin version; Theorem A, which is Theorem 6.9).** Let X be a compact manifold with corners, or a finite CW complex. There is a finite set of spin cycles and torsion spin cycles in X such that the integer, parity and angle invariants over this set determine every real vector bundle on X up to stable equivalence.
- Step 1: prove the spin<sup>h</sup> version (Theorem 6.8) first.
- Step 2: pass from spin<sup>h</sup> to spin by a geometric form of Bott periodicity.

**Theorem (spin<sup>h</sup> version; Theorem 6.8).** The same statement holds for a finite CW complex X with spin<sup>h</sup> cycles and torsion spin<sup>h</sup> cycles in place of spin ones.
- Step 1: spin<sup>h</sup> manifolds give enough cycles for KSp, and the abstract periods equal Dirac indices.
- Step 2: KO(X) is Noetherian, so finitely many cycles suffice.

**Theorem (periods detect cohomology classes; Theorem B, which is Theorem 2.7).** Let h be a cohomology theory of finite type and X a finite CW complex. Then h<sup>i</sup>(X) is naturally isomorphic to the group of homomorphisms Dh<sub>i</sub>(X; ℚ/ℤ) → ℚ/ℤ that lift to a homomorphism Dh<sub>i</sub>(X; ℚ) → ℚ. The same holds after localising at a set of primes.

## Note, then ignore

- Stable equivalence only: the invariants see the class in KO(X), not the bundle up to isomorphism. This is the natural setting for index theory and is safe to accept on a first reading.
- The factor ε: the extra 2 in dimensions ≡ 4 mod 8 reflects quaternionic structure on spinors. It is a normalisation and safe to skip.
- Boundary conditions: the index on a manifold with boundary uses an Atiyah-Patodi-Singer condition. It makes the angle invariant well defined and is safe to skip.
- Existence only: the theorem says a finite set of cycles exists for each X. The paper works out some examples in Section 6.4, which you can skip at first.
- Finite type: Theorem B needs h of a point to be finitely generated in each degree. KO satisfies this, so you can skip the point.

## One next step

Open the paper at Section 1.1 and read from the first paragraph to the statement of Theorem A, including Figure 1. That is two pages.

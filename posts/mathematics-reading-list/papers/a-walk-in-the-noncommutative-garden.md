source: https://arxiv.org/pdf/math/0601054
slogan: A bad quotient space still has a good noncommutative algebra of functions, and two dozen examples show what that algebra remembers.
basis: the introduction and the main theorem statements

## Before you start

At 106 pages and 26 sections, this survey invites overwhelm. You may also feel a pull to read it in order and understand each example before the next. Both feelings are reasonable, and neither has to be obeyed. The authors wrote it as a garden, a list of examples to wander in. If you want to know what "noncommutative space" means in practice, two or three examples will tell you. Pick the ones that please you. Completeness is not the point here.

## The story

Many natural spaces are quotients: leaves of a foliation, orbits of a group, lattices up to commensurability. Often the quotient is so badly behaved that every continuous function on it is constant. Classical geometry then sees a point. Connes's idea is to keep the equivalence relation instead of collapsing it. Take functions f(a, b) on pairs of equivalent points and multiply them like matrices. The algebra is noncommutative, and it is rich exactly when the quotient is bad. Two points glued together give the 2 × 2 matrices. An irrational rotation of the circle gives the noncommutative torus. Section 2 proposes four steps for studying any such space: compute cyclic cohomology, find a homotopy model, build a spectral triple, and analyse the thermodynamics. The rest of the text walks through examples, from the quantum Hall effect to the Riemann zeta function.

## Main definitions

**Noncommutative quotient.** For an equivalence relation ∼ on a space X, the algebra of functions f<sub>ab</sub> on the graph {(a, b) : a ∼ b} with convolution product (fg)<sub>ac</sub> = Σ<sub>b</sub> f<sub>ab</sub> g<sub>bc</sub>. It replaces the algebra of invariant functions on X.
- Nice quotient: the two algebras are Morita equivalent, so nothing changes.
- Bad quotient: they differ, and the convolution algebra carries the information.

**Spectral triple (A, H, D).** An algebra A of bounded operators on a Hilbert space H with a self-adjoint unbounded operator D such that [D, a] is bounded for a in a dense subalgebra and (D + λ)<sup>−1</sup> is compact for λ not real. D plays the inverse of the line element, ds = 1/D.
- Model case: functions on a compact spin manifold, spinors, and the Dirac operator.

**KMS<sub>β</sub> state.** Given a C\*-algebra with a time evolution σ<sub>t</sub>, a state φ is KMS at inverse temperature β if for all a, b there is a bounded function F, holomorphic on the strip 0 &lt; Im z &lt; β, with F(t) = φ(aσ<sub>t</sub>(b)) and F(t + iβ) = φ(σ<sub>t</sub>(b)a). These are the equilibrium states.

**ℚ-lattice.** A pair (Λ, φ) of a lattice Λ ⊂ ℝ<sup>n</sup> and a homomorphism φ : ℚ<sup>n</sup>/ℤ<sup>n</sup> → ℚΛ/Λ. Two are commensurable if ℚΛ<sub>1</sub> = ℚΛ<sub>2</sub> and φ<sub>1</sub> = φ<sub>2</sub> modulo Λ<sub>1</sub> + Λ<sub>2</sub>.
- Invertible case: φ is an isomorphism. Two invertible ℚ-lattices are commensurable only if equal.

## Main results

**Theorem (modules over the noncommutative torus; Theorem 6.1).** Let θ be irrational and A<sub>θ</sub> the algebra of the quotient of the circle by rotation through θ. Finite projective modules over A<sub>θ</sub> are classified up to isomorphism by pairs of integers (p, q) with p + qθ ≥ 0.
- Construction: the module for (p, q) comes from the closed geodesic of the torus of slope (p, q), used as a transversal to the foliation dx = θ dy.
- Meaning: p + qθ is the "dimension" of a vector bundle, and it takes irrational values.

**Claim (Bost-Connes system; Section 22, citing earlier work).** Commensurability classes of 1-dimensional ℚ-lattices up to scale give a C\*-algebra with a natural time evolution. Its partition function is ζ(β). There is a unique KMS state at high temperature. At low temperature the extremal KMS states are indexed by the units of the profinite integers, and at zero temperature their values on a rational subalgebra carry the action of Gal(ℚ<sup>ab</sup>/ℚ).

**Theorem (GL<sub>2</sub> system; Theorem 22.1).** For the analogous system of 2-dimensional ℚ-lattices, with partition function ζ(β)ζ(β − 1): there are no KMS<sub>β</sub> states for β ≤ 1, and for β > 2 the extremal KMS<sub>β</sub> states form the classical Shimura variety, the double quotient of GL<sub>2</sub>(𝔸) by GL<sub>2</sub>(ℚ) and ℂ<sup>\*</sup>.

**Theorem (Riemann hypothesis as positivity; Theorem 26.4).** For a global field K, all L-functions with Grössencharakter on K satisfy the Riemann hypothesis if and only if a certain trace pairing Tr(ϑ(f ⋆ f<sup>♯</sup>)) on a cohomology space H<sup>1</sup> is non-negative for all test functions f on the idele class group. This restates a criterion of Weil in the language of the adele class space. It does not prove the hypothesis.

## Note, then ignore

- Morita equivalence. Two algebras with the same module category count as the same space, which is why 2 × 2 matrices equal a point. Safe to skip on a first reading.
- Smooth subalgebras. The text keeps choosing a dense subalgebra stable under holomorphic functional calculus so that K-theory does not change. Safe to skip.
- Type II and type III. These von Neumann algebra types decide whether a finite-dimensional spectral triple exists or a time evolution is forced. Safe to skip.
- A slip in the KMS definition. The text writes the strip as 0 &lt; Re(z) &lt; iβ. Figure 1 shows the intended strip 0 &lt; Im z &lt; β. Safe to skip.
- Open problems. The authors say many examples have not been taken through all four steps of Section 2. Gaps you notice may be real gaps. Safe to skip.

## One next step

Open the paper at Section 4 (page 9) and read only Examples 4.1 and 4.2. They show in half a page when the noncommutative quotient gives something new.

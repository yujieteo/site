source: https://arxiv.org/pdf/2603.19161
slogan: Once electric charge is made discrete, electric-magnetic duality is a plain isomorphism of two complexes of differential forms that you can check by eye.
basis: the introduction and the main theorem statements

## Before you start

The title promises derived geometry, and the paper runs to about 75 pages with stacks, sheaves and BV language. You may feel a small dread of machinery you have not met. That feeling can stay while you read. The authors say the key ideas show up in explicit cochain complexes, and Section 1.1 does the whole 3-dimensional case that way. If you want to see what "duality" asserts as a precise statement, this is a gentle place. Enjoy the diagrams first. The rest can wait.

## The story

Physicists relate pairs of abelian gauge theories. In four dimensions, Maxwell theory is dual to itself with electric and magnetic fields swapped. In two dimensions a circle-valued field of radius R matches one of radius 1/R. In three dimensions electromagnetism matches a circle-valued scalar. The physical arguments are short, yet no mathematical account captured them. The authors write each classical theory as a sheaf of cochain complexes: gauge symmetries in negative degree, fields in degree zero, equations of motion in positive degree. The two dual theories then have different cohomology, so they are not equivalent. The fix is to add a potential for the Hodge dual of the field strength, and to let its constant shifts form a copy of ℤ in place of ℝ. After this "charge discretisation" the two complexes are isomorphic. The authors say plainly that this clarifies duality and does not settle it.

## Main definitions

**Maxwell p-form theory Mxw<sub>p,n</sub>⟨κ⟩ (Definition 3.5).** For a coupling κ ∈ ℝ, κ ≠ 0, this is the sheaf of complexes on oriented Riemannian (or Lorentzian) n-manifolds given locally by ℤ → Ω<sup>0</sup> → … → Ω<sup>p</sup> → Ω<sup>n−p</sup> → … → Ω<sup>n</sup>. The form Ω<sup>p</sup> sits in degree zero. The middle map is κ d⋆d and the others are d.
- Degree zero cohomology on ℝ<sup>n</sup>: p-forms A with d⋆dA = 0, modulo gauge.
- The copy of ℤ records that the gauge group is U(1) and not ℝ. This is the non-perturbative part.

**Charge-discretised theory Mxw°<sub>p,n</sub>⟨κ, e⟩ (Definition 5.1).** A complex with two rows joined at Ω<sup>n−p−1</sup>. One row is ℤ → Ω<sup>0</sup> → … → Ω<sup>p</sup> and ends with ⋆d. The other is ℤ → Ω<sup>0</sup> → … → Ω<sup>n−p−2</sup>, starts with multiplication by e and ends with −κd. Both Ω<sup>p</sup> and Ω<sup>n−p−2</sup> sit in degree zero.
- A degree zero cocycle is a pair (A, C) with ⋆dA = κ dC. So C is a potential for ⋆F, and Maxwell's equation follows.
- It maps to a model of Mxw<sub>p,n</sub>⟨κ⟩ by forgetting that electric charge is discrete.

**Derived stack presented by a complex.** A sheaf of cochain complexes of abelian groups gives, through truncation and the Dold–Kan correspondence, a sheaf with values in derived stacks that are abelian group objects. This lets the solution space carry smooth structure, not only a bare group.

## Main results

**Theorem (abelian duality; Theorem 5.3).** For all n, all 0 ≤ p ≤ n − 2 and all nonzero real κ and e, there is an isomorphism Mxw°<sub>p,n</sub>⟨κ, e⟩ ≅ Mxw°<sub>n−p−2,n</sub>⟨1/κ, 1/e⟩ of sheaves on oriented Riemannian (or Lorentzian) n-manifolds with values in derived stacks.
- Step 1: swap the two rows and apply the Hodge star to the shared end term.
- Step 2: rescale the forms by constants so the couplings become 1/κ and 1/e.

**Proposition (duality with a topological partner; Proposition 5.14).** The moduli stack presented by MxwBF<sub>p,n</sub>⟨κ⟩ is equivalent to Mxw<sub>n−p−2,n</sub>⟨1/κ⟩. Here MxwBF is Maxwell p-form theory coupled to a topological theory of BF type (Definition 5.12).
- Reading: without discretising charge, the (n−p−2)-form theory equals the p-form theory plus a topological sector.

**Theorem (compactification; Theorem 6.4).** Let X be an oriented Riemannian manifold and Y a closed oriented Riemannian manifold, with projection π: X × Y → X. The pushforward of Mxw°<sub>p,n</sub>⟨κ, e⟩ along π is quasi-isomorphic to a direct sum of four sheaves on X. They are lower-dimensional charge-discretised theories with charge lattices H<sup>ℓ</sup>(Y, ℤ), two families of shifted Deligne-type complexes, and shifted copies of the torsion in H<sup>•</sup>(Y, ℤ). I do not reproduce the index ranges here.
- Step 1: push forward the constant sheaf ℤ. This gives the cohomology of Y.
- Step 2: push forward the differential forms using Hodge theory on Y and the homological perturbation lemma.

## Note, then ignore

- Classical only. The theorem equates classical theories. The authors note that matching the usual parametrisations of the quantum theories may be subtle. Safe to skip on a first reading.
- Presymplectic, not symplectic. After charge discretisation the stack carries only a (−1)-shifted presymplectic structure, so the theory is not Lagrangian in the physicist's sense. Safe to skip.
- The index p. The p-form theory has field strength of degree p + 1, and duality swaps degree p + 1 with n − p − 1. That is where n − p − 2 comes from. Safe to skip once seen.
- Convention for U(1). The paper identifies U(1) with ℝ/ℤ through θ ↦ exp(2πiθ), so no factors of 2π appear in the complexes. Safe to skip.
- Section 2.2 and Appendix A. These set up derived stacks in detail. The authors invite you to treat them as a black box and work with complexes. Safe to skip.

## One next step

Open the paper at Section 1.1.3 and compare complexes (4) and (5) by eye. Then read the three bullet points after them that spell out the isomorphism.

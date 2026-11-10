source: https://www.math.columbia.edu/department/neumann/preprints/bloch9.pdf
slogan: Add up the shapes of the ideal tetrahedra of a hyperbolic 3-manifold and you get one algebraic invariant that knows volume and Chern-Simons.
basis: the introduction and the main theorem statements

## Before you start

The feeling to expect is a split kind of inadequacy: this paper sits between hyperbolic geometry and algebraic K-theory, and few readers are at home in both. You may feel you are missing half the background whichever side you come from. That is normal here. If you want to see why a volume of a 3-manifold has arithmetic meaning, the introduction and Section 2 show it with nothing more than cross ratios. Take those slowly and enjoy them.

## The story

A hyperbolic 3-manifold of finite volume can be cut into ideal tetrahedra. Each ideal tetrahedron has a shape, a single complex number z, its cross ratio. People knew how to get the volume from these numbers by summing a dilogarithm. But the list of z's depends on the cutting. Neumann and Yang put the sum Σ[z<sub>i</sub>] in a group where cutting and regluing is a relation: the Bloch group. Then the sum no longer depends on the triangulation. It is an invariant β(M). It lives in the Bloch group of a number field attached to M, which is a small group. And one map out of the Bloch group returns both the volume and the Chern-Simons invariant.

## Main definitions

**Ideal simplex parameter.** An ideal tetrahedron in ℍ<sup>3</sup> with vertices z<sub>1</sub>, ..., z<sub>4</sub> on ℂℙ<sup>1</sup> is determined up to congruence by its cross ratio z ∈ ℂ − {0, 1}. Even permutations of the vertices replace z by 1 − 1/z or 1/(1 − z).

**Pre-Bloch group and Bloch group.** For a field k, P(k) is the free abelian group on k − {0, 1} modulo the five term relation and the symmetry relations [x] = [1 − 1/x] = [1/(1 − x)] = −[1/x] = −[1 − x]. The Bloch group B(k) is the kernel of P(k) → k<sup>×</sup> ∧ k<sup>×</sup>, [z] ↦ 2(z ∧ (1 − z)).
- Over ℂ: the five term relation says an ideal simplex on four points can be replaced by the cone of its boundary to a fifth point.
- Over a number field k: modulo torsion, B(k) ≅ ℤ<sup>r</sup> where r is the number of complex places of k.

**Bloch invariant.** Take a degree one ideal triangulation of M with simplex parameters z<sub>1</sub>, ..., z<sub>n</sub>. Then β(M) = Σ [z<sub>i</sub>] ∈ P(ℂ).

**Invariant trace field.** For M = ℍ<sup>3</sup>/Γ, the field k(M) is generated over ℚ by the squares of traces of elements of Γ.

## Main results

Throughout, M is an oriented hyperbolic 3-manifold of finite volume.

**Theorem (well defined; Theorem 1.1).** β(M) does not depend on the ideal triangulation, and it lies in B(ℂ) ⊂ P(ℂ).
- Step 1: define a fundamental class of M in a relative homology group H<sub>3</sub>(PGL(2, ℂ), ℂℙ<sup>1</sup>; ℤ) and show it maps to β(M). Dupont and Sah identify that group with P(ℂ).
- Step 2: the condition Σ z<sub>i</sub> ∧ (1 − z<sub>i</sub>) = 0 puts β(M) in B(ℂ).

**Theorem (field of definition; Theorem 1.2).** In B(ℂ) ⊗ ℚ, the invariant β(M) lies in the subgroup B(k(M)) ⊗ ℚ.
- Non-compact case: β(M) is defined directly in B(k(M)), so no tensoring with ℚ is needed.
- Compact case: the authors do not know whether the ⊗ ℚ can be removed.

**Theorem (volume and Chern-Simons; Theorem 1.3).** The Bloch regulator ρ: B(ℂ) → ℂ/ℚ sends β(M) to a fixed constant multiple of vol(M) + i·CS(M). I could not read the constant reliably from the extracted text, so I do not state it.
- Consequence: β(M) determines CS(M) modulo rational multiples of π<sup>2</sup>. If k(M) is a quadratic extension of a totally real field, CS(M) is rational in that sense.

## Note, then ignore

- Degree one ideal triangulations. The paper allows a looser notion than a genuine ideal triangulation, including flat simplices with real z. This widens the theorem. Safe to skip on a first reading.
- Two five term relations. Suslin's and Dupont-Sah's versions differ by z ↦ 1/z and give isomorphic Bloch groups. The paper notes misprints in earlier formulations. Skip it.
- Torsion. Different definitions of the Bloch group differ by torsion, of order dividing 6 away from characteristic 2. Over ℂ they agree. Skip it.
- Mod 2-torsion sequence. The exact sequence 0 → μ → H<sub>3</sub>(PGL(2, ℂ); ℤ) → B(ℂ) → 0 holds modulo 2-torsion. It motivates the proof only. Skip it.
- Other representations. For a general homomorphism Γ → PGL(2, ℂ) the invariant lands in P(ℂ), not B(ℂ). This is a side topic. Skip it.

## One next step

Read Section 2.2 and Remark 2.4 on pages 3 and 4. They give the Bloch group and its meaning as cutting and pasting of ideal simplices.

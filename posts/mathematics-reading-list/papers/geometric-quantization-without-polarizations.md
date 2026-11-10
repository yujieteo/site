source: https://arxiv.org/pdf/2405.01513
slogan: A path integral turns functions into operators on all prequantum sections, so a polarization becomes one way to find a pure state.
basis: the introduction and the main theorem statements

## Before you start

This paper mixes symplectic groupoids, C\*-algebras and path integrals, and many steps are formal. The likely feeling is unease: you cannot tell which lines are theorems and which are hopes. That unease is reasonable, and the author shares it. He lists eight open questions. If the choice of a polarization in geometric quantization ever felt arbitrary to you, this is a short attempt to remove it. Read the T<sup>∗</sup>ℝ example for pleasure. The rest is optional.

## The story

Geometric quantization builds a Hilbert space from a symplectic manifold by taking sections of a prequantum line bundle that are constant along a polarization. The trouble is that polarizations do not always exist, different ones are hard to compare, and only a small set of functions gets quantized. For T<sup>∗</sup>ℝ with its Kähler polarizations, only affine functions survive. Lackman reverses the order. First build a C\*-algebra and a quantization map with no polarization, from the path integral of the Poisson sigma model. Let it act on the whole prequantum Hilbert space. Then polarized sections appear as irreducible subrepresentations. Schur's lemma then compares two of them for free. On T<sup>∗</sup>ℝ the formula is an integral of f against a phase given by the area of a polygon.

## Main definitions

**Quantization (Definition 0.2.1).** For a Poisson manifold M, a family of unital C\*-algebras M<sub>ħ</sub> and injective linear maps Q<sub>ħ</sub> from compactly supported smooth functions to M<sub>ħ</sub>, with image generating M<sub>ħ</sub>. There must be a star product ⋆ such that Q<sub>ħ</sub>(f)Q<sub>ħ</sub>(g) − Q<sub>ħ</sub>(f ⋆ g), truncated at order n, is small compared with ħ<sup>n</sup> in norm, for every n.

**Symplectic groupoid.** For (M, ω), the arrows of Π<sub>1</sub>(M) are paths in M up to homotopy with fixed endpoints. If M is simply connected it is M × M. When ω/2πħ is integral on spheres, it carries a multiplicative line bundle L<sub>1</sub> whose sections form a twisted convolution algebra.

**Quantization map (Definition 1.2.5, formal).** Q<sub>f</sub> is the section of L<sub>1</sub> whose value at a path γ is a path integral over contractible loops made of γ and a second arc γ′. The integrand is f at the midpoint of γ′ times exp(i/ħ × the symplectic area of a disc filling the loop).
- On T<sup>∗</sup>ℝ: Q<sub>f</sub>(u, v) = (1/2πħ) ∫ f(z) exp(i P<sub>0</sub>(u, v, z)/ħ) ω, with P<sub>0</sub> the signed area of the polygon with vertices 0, u, v, z.

**Pure state.** A unit vector in a representation of a C\*-algebra is pure if it generates an irreducible representation. Other vectors give mixed states.

## Main results

**Theorem (Schur comparison; Corollary 0.3.8).** Let H be a representation of a C\*-algebra and H<sub>1</sub>, H<sub>2</sub> irreducible subrepresentations that are not orthogonal. Let T : H<sub>1</sub> → H<sub>2</sub> come from restricting the inner product. Then T/√(T<sup>∗</sup>T) is a unitary equivalence, and it induces the unique projective equivalence that intertwines them.
- Use: if two polarizations both give irreducible subrepresentations of one quantization, and their sections pair non-trivially, the two are canonically equivalent.

**Claim (T<sup>∗</sup>ℝ; Section 0.1, with details in the author's earlier paper).** The map f ↦ Q<sub>f</sub> satisfies Q<sub>f⋆g</sub> = Q<sub>f</sub> ∗ Q<sub>g</sub> for the non-perturbative Moyal product ⋆ and twisted convolution ∗. It acts on L²(T<sup>∗</sup>ℝ) by an integral kernel with phase the area of a triangle. Sections polarized by any complex affine polarization form irreducible subrepresentations.
- Case: this recovers the position, momentum and Segal–Bargmann representations, and agrees with Weyl quantization.

**Claim (torus; Section 2).** For the torus T<sup>∗</sup>ℝ/2ℤ with symplectic form n times the standard one, n a positive integer, the same map gives e<sup>iπp</sup> ⋆ e<sup>iπq</sup> = e<sup>2πi/n</sup> e<sup>iπq</sup> ⋆ e<sup>iπp</sup>. This is the noncommutative torus. It acts on holomorphically polarized sections, a space of theta functions of dimension n.

**Claim (physics argument; Definition 1.2.5 and Appendix B).** For a general symplectic manifold with the integrality condition, the path integral defines Q<sub>f</sub> once a 2-cocycle on the local symplectic groupoid is chosen, for example from a symplectic connection. Convergence of the lattice version is open (Question 7).

## Note, then ignore

- Formal definitions. Definitions marked "formal" involve path integrals with no proof of convergence. The two examples are computed explicitly. Safe to skip on a first reading.
- Non-associativity. The author does not expect the path integral product to be associative beyond T<sup>∗</sup>ℝ<sup>n</sup> and its quotients. He uses it only to define operators. Safe to skip.
- Real polarizations. Real-polarized sections may not be normalizable. The paper proposes an inner product from the BKS pairing in place of half-forms. Safe to skip.
- The 2-groupoid. Section 1.1 works on a Lie 2-groupoid before descending to the symplectic groupoid. It is scaffolding for the definition. Safe to skip.
- Not every symplectomorphism lifts. The 2-cocycle cannot be chosen invariant under all symplectomorphisms. Safe to skip.

## One next step

Open the paper at Section 0.1 and read equation (0.1.1) and the sentence after it. Picture the polygon with vertices 0, u, v, z.

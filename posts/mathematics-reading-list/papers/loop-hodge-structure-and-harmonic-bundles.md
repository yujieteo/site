source: https://arxiv.org/pdf/1511.06258
slogan: A harmonic bundle is a variation of Hodge structure on a space of loops, so it gets a period map like the classical ones.
basis: the introduction and the main theorem statements

## Before you start

The paper mixes non-abelian Hodge theory with infinite-dimensional spaces carrying indefinite metrics, called Krein spaces. The likely feeling is unease: functional analysis may not be what you came for, and the word "Krein" may be new. That unease is fine. It does not need to go away first. If you have wanted harmonic bundles to feel as concrete as variations of Hodge structure, this paper offers that. The first four pages give the whole idea. Read them because the idea is pleasant, and stop when you like.

## The story

On a compact Kähler manifold, representations of the fundamental group correspond to Higgs bundles. The bridge between them is a harmonic bundle: a flat bundle with a special metric. Variations of Hodge structure are the simplest examples, and they come with a period map into a complex homogeneous space. General harmonic bundles had no such map. Their metrics live in a symmetric space that is not even a complex manifold. Daniel's idea uses the circle of flat connections D<sub>λ</sub> that every harmonic bundle has. Put them together as one flat connection on the bundle of L<sup>2</sup> loops in the fibres. Multiplication by λ plays the role of the shift in the Hodge filtration. The result is a "loop Hodge structure" that varies holomorphically, with a period map into an infinite-dimensional domain.

## Main definitions

**Harmonic bundle (Definition 1.15).** A flat bundle (E, D) on a complex manifold with a Hermitian metric h. Write D = ∇ + θ + θ\*, where ∇ is a metric connection, θ has type (1,0) and θ\* is its adjoint. The metric is harmonic if the operator ∂̄ + θ squares to zero.
- Then (E, ∂̄, θ) is a Higgs bundle: θ is holomorphic and θ ∧ θ = 0.
- For each λ on the unit circle, D<sub>λ</sub> = ∇ + λ<sup>−1</sup>θ + λθ\* is again flat.

**Loop Hodge structure (Definition 1.4).** A Krein space K (a space with a non-degenerate indefinite Hermitian form B that splits into a positive and a negative Hilbert space), an operator T with B(Tu, Tv) = −B(u, v), and a closed "outgoing" subspace W with TW ⊂ W.
- Conditions on W: the intersection of the T<sup>n</sup>W is zero, their union is dense, and B is positive on the orthogonal complement of TW in W.
- Hodge filtration: F<sup>i</sup>K = T<sup>i</sup>W.

**Canonical model (Proposition 1.6).** Every loop Hodge structure is isomorphic to L<sup>2</sup>(S<sup>1</sup>, H) for a Hilbert space H, with T multiplication by λ, W the functions with only non-negative Fourier modes, and B(f, g) the integral of h(f(λ), g(−λ)). The paper takes H finite-dimensional.

**Variation of loop Hodge structures (Definition 1.20).** A family of loop Hodge structures over a complex manifold with a flat connection D such that B and T are flat, ∂̄ preserves W, and D sends W into T<sup>−1</sup>W. The last two conditions copy holomorphicity and Griffiths transversality.

## Main results

**Theorem (equivalence; Theorem A = Theorem 1.22).** For a complex manifold X, the category of harmonic bundles on X is equivalent to the category of variations of loop Hodge structures on X.
- Step 1: send (E, D, h) to L<sup>2</sup>(S<sup>1</sup>, E) with the connection that acts as D<sub>λ</sub> at the loop parameter λ.
- Step 2: go back by taking E to be the orthogonal complement of TW in W, with metric B.

**Theorem (classical case; Theorem B).** The circle acts on variations of loop Hodge structures over X. The variations of classical Hodge structures are those that are isomorphic to every variation in their circle orbit.

**Theorem (period map; Theorem C).** There is a period domain for loop Hodge structures of fixed type. It is an infinite-dimensional complex manifold, homogeneous under a real form of the loop group of GL(n, ℂ). A harmonic bundle over X is the same as a holomorphic, horizontal, equivariant map from the universal cover of X to this domain.

**Theorem (energy class; Theorem E).** For a harmonic bundle, the (1,1)-form β = (1/4iπ) Tr(θ ∧ θ\*) is closed. The pullback of its class to the universal cover of X is an integral class. I read this statement only in the introduction, so check the normalisation in Section 3.3.
- Step 1: build a determinant line bundle on the period domain.
- Step 2: identify its curvature, pulled back by the period map, with β.

## Note, then ignore

- Krein spaces. An indefinite form can behave badly in infinite dimensions, so the paper demands a splitting into two Hilbert spaces. Safe to skip at first.
- Why indefinite. The form B pairs λ with −λ because D<sub>λ</sub> and D<sub>−λ</sub> are adjoint for h. This makes B flat. Skip the check.
- Harmonic versus pluriharmonic. The definition used is the pluriharmonic one. On compact Kähler manifolds the two agree. Skip.
- Regularity of loops. The loop group is taken "with some regularity" that the appendix fixes. Skip.
- Theorem D. The paper also proves that the Higgs foliation is integrable. It is a side application. Skip on a first reading.

## One next step

Open the PDF at page 12, Section 1.2.3, and read Lemma 1.18: the half-page check that each D<sub>λ</sub> is flat.

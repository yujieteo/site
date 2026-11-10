source: https://arxiv.org/pdf/1210.5100
slogan: A fully local topological field theory is determined by its value on a point, and any fully dualizable object can be that value.
basis: the introduction and the main theorem statements

## Before you start

The statement uses the phrase "symmetric monoidal (∞, n)-category with duals", and Freed himself calls the language off-putting if unfamiliar. The likely feeling is intimidation, with a little fear that you need physics as well. It is fine to feel both. This is a 36-page expository paper, and it reaches its theorem by two slow walks, one through bordism and one through quantum mechanics. If you want to see why manifolds and algebra meet in duality, it is a friendly place to look. Enjoy the pictures first. The precise statement in §6 will keep.

## The story

Oriented points up to bordism form the free abelian group on one generator, the positive point. Atiyah's topological field theories refine this. A theory is a functor from a bordism category to vector spaces that sends disjoint union to tensor product. Such a theory is computed by cutting manifolds along closed hypersurfaces, but the pieces are still complicated. People wanted to cut further, down to corners and finally to points. That needs higher categories, where k-dimensional bordisms are k-morphisms. Baez and Dolan conjectured the result: the framed bordism n-category is free on one point, subject only to duality. In one dimension this is linear algebra. A theory sends the positive point to a vector space V, the negative point to its dual, and the two half-circles to evaluation and coevaluation. So V must be finite dimensional.

## Main definitions

**Topological field theory (Definition 2.6).** An n-dimensional theory is a symmetric monoidal functor from the bordism category Bord<sub>⟨n−1,n⟩</sub> to a symmetric monoidal category such as complex vector spaces with ⊗. Objects are closed (n−1)-manifolds. Morphisms are n-dimensional bordisms up to diffeomorphism, composed by gluing.

**Extended theory (Definitions 5.5 and 5.6).** Bord<sub>n</sub> is the symmetric monoidal (∞, n)-category whose objects are compact 0-manifolds and whose k-morphisms, for 1 ≤ k ≤ n, are k-dimensional bordisms with corners. Above n the morphisms are diffeomorphisms and isotopies. An extended theory with values in a symmetric monoidal (∞, n)-category C is a homomorphism Bord<sub>n</sub> → C.
- Framed version: a k-bordism W in Bord<sub>n</sub><sup>fr</sup> carries a trivialisation of TW ⊕ ℝ<sup>n−k</sup>.

**Fully dualizable (Lemma 6.5).** An object x has a dual if there are evaluation and coevaluation maps satisfying the two S-shaped identities. A k-morphism is adjointable if it has unit and counit maps satisfying the analogous identities. C<sup>fd</sup> is the universal (∞, n)-category mapping to C in which every object is dualizable and every k-morphism, 1 ≤ k ≤ n−1, is adjointable.
- Example: in vector spaces, dualizable means finite dimensional.

## Main results

**Theorem (one-dimensional case; Theorem 4.9).** For every finite dimensional complex vector space V there is a 1-dimensional oriented topological field theory F with values in complex vector spaces such that F(pt<sub>+</sub>) = V.
- Step 1: a Morse function cuts a 1-dimensional bordism into local maxima and minima. Send these to the pairing V ⊗ V<sup>\*</sup> → ℂ and to the map ℂ → V ⊗ V<sup>\*</sup> that picks out the identity.
- Step 2: the only Cerf move cancels a maximum against a minimum, and the S-shaped identities say F does not change.

**Theorem (cobordism hypothesis, framed version; Theorem 6.8).** Let C be a symmetric monoidal (∞, n)-category. Then F ↦ F(pt<sub>+</sub>) is a homotopy equivalence from the space Hom(Bord<sub>n</sub><sup>fr</sup>, C) of framed extended theories to (C<sup>fd</sup>)<sup>∼</sup>, the space obtained from C<sup>fd</sup> by discarding non-invertible morphisms.
- Status: Freed attributes the proof to Hopkins and Lurie for n = 2 and to Lurie in general. He notes that only a detailed sketch had appeared when he wrote. He does not summarise the proof.
- Idea: Morse functions cut any bordism into elementary pieces, which are units and counits of dualities. A connectivity theorem of Igusa for spaces of generalised framed Morse functions shows the choices are coherent.

**Theorem (G-structure version; Theorem 6.11).** The orthogonal group O(n) acts on (C<sup>fd</sup>)<sup>∼</sup> by changing framings (Corollary 6.10). For a Lie group G with a homomorphism G → O(n), evaluation at the point is a homotopy equivalence from theories on G-manifolds to the homotopy fixed points of G on (C<sup>fd</sup>)<sup>∼</sup>.
- Example 6.13: for n = 2, oriented theories and C the 2-category of complex algebras, the fully dualizable objects are the finite dimensional semisimple algebras. A fixed point for SO(2) adds a non-degenerate trace.

## Note, then ignore

- "Definitions" of higher categories. Freed says his definitions of (∞, n)-categories and Bord<sub>n</sub> are descriptive only, and points to the literature for complete ones. Safe to skip on a first reading.
- Bordism versus cobordism. The newer word is bordism, and the hypothesis keeps the older name. Safe to skip.
- Unstable framings. The framings here are of the tangent bundle and are not stabilised, unlike the stable normal framings in Pontrjagin–Thom theory. Safe to skip.
- Homomorphism. Freed says "homomorphism" where most authors say "functor". Safe to skip.
- Fixed point as data. A homotopy fixed point is extra structure and not a property, which is why oriented theories need more than an object. Safe to skip at first.

## One next step

Open the paper at page 14 and read Theorem 4.9 with its ten-line proof, looking at Figures 10 to 12 as you go.

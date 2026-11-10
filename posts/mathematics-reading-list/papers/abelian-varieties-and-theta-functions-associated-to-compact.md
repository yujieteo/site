source: https://arxiv.org/pdf/1105.4108
slogan: A metric and a symplectic form on a lattice give an abelian variety, so every suitable Riemannian manifold gets a Jacobian.
basis: the introduction and the main theorem statements

## Before you start

The paper draws on index theory, K-theory, Hodge structures and superstring physics all at once. You may feel shame at not knowing some of these. Almost nobody knows all four, and the authors say so. They wrote review sections for that reason. It is fine to feel behind and read anyway. If you want to see how a Riemann surface's Jacobian generalises to higher dimensions, the core is one page of linear algebra. Enjoy that page first. The rest is optional.

## The story

Physicists write the partition function of Ramond–Ramond fields in type IIA string theory as a theta function divided by a determinant. A theta function needs an abelian variety and a line bundle on it. Moore and Witten produced both from the K-theory of a spin manifold, in language foreign to algebraic geometers. The authors ask what the construction really is, and whether it relates to the Weil intermediate Jacobian. Their answer is one lemma in linear algebra. A positive definite metric b and a symplectic form ω on a real vector space determine a unique complex structure J. Apply this to the cohomology of a compact Riemannian manifold, with the Hodge metric and the cup product. A surface gives back the classical Jacobian. Twisting by the Â-genus gives the Moore–Witten variety.

## Main definitions

**Hodge metric.** On a compact oriented Riemannian manifold (X, g), every real cohomology class has a unique harmonic representative. The Hodge metric is b(a, c) = ∫<sub>X</sub> α ∧ ∗β, where α and β are the harmonic forms in the classes a and c.

**The basic construction.** Take a lattice Λ, a metric b on V = Λ ⊗ ℝ and an integral symplectic form ω on Λ. Proposition 6.2 gives a unique complex structure J that preserves b and ω and makes ω(x, Jy) positive definite. The torus V/Λ with J and polarisation ω is the abelian variety J(Λ, b, ω).
- Step 1: write ω(x, y) = b(Ax, y). Then A is skew-adjoint for b.
- Step 2: take the polar decomposition A = QJ with Q positive. The factor J is the complex structure.

**Coherent pair.** A pair (b, ω) is coherent when the metric ω(x, Jy) equals the original b. Then b + iω is a hermitian metric for J.

**Normalised multiplier.** Let Λ(X) = ch(K(X)) in even rational cohomology. A multiplier is a class a in H<sup>4∗</sup>(X) such that the pairing (ξ, η) ↦ ∫<sub>X</sub> a ∧ ch(ξ ⊗ η) is integral on Λ(X). It is normalised when its degree zero part is 1.

## Main results

**Claim (Jacobian of a Riemannian manifold; section 7.1).** Let (X, g) be compact, oriented, of dimension 4q + 2. The lattice of integral middle cohomology modulo torsion, with the Hodge metric and the cup product, gives a principally polarised abelian variety. Its complex structure is the Hodge star.
- Case q = 0: this is the classical Jacobian of the Riemann surface that g defines.
- Case of a polarised complex projective manifold: a twisted version recovers the Weil intermediate Jacobian.

**Theorem (principal polarisation on K-theory; Lemma 7.6 and Corollary 7.7).** Let X be compact, oriented, with torsion-free integral cohomology and dimension 2 mod 4. Normalised multipliers exist, and for each one the twisted pairing is unimodular on Λ(X). With a matching twist of the Hodge metric, the result is a principally polarised abelian variety.
- Step 1: unimodularity is an older result of Atiyah and Hirzebruch, which rests on Poincaré duality.
- Step 2: for a spin manifold, a = Â(X) is a normalised multiplier, because the Atiyah–Singer index theorem shows the pairing computes an index of a Dirac operator.

**Theorem (period maps; Theorems 7.3 and 7.9).** Fix a smooth compact oriented manifold of dimension 4q + 2. The construction sends a conformal class of metrics to a point of a Siegel upper half space. So the space of conformal classes plays the role that Teichmüller space plays for surfaces. I state only this shape. The theorems themselves are commutative diagrams.

**Claim (physics argument; Proposition 8.2, after Moore and Witten).** Let X be a torsion-free compact spin manifold of dimension 2 mod 8. A homomorphism KO(X) → ℤ/2 picks out one line bundle with the given principal polarisation. The value at 0 of its normalised theta function, divided by a determinant for the non-zero modes, is the type IIA Ramond–Ramond partition function.

## Note, then ignore

- Dimension 2 mod 4. The cup product on even cohomology is symmetric, so the authors flip a sign on the degrees 2 mod 4 to make it skew. This needs dimension 2 mod 4. Safe to skip on a first reading.
- Pairing up degrees. Outside the middle degree an odd cohomology group can have odd rank, so H<sup>2k−1</sup> is combined with its Poincaré dual group. Safe to skip.
- Not holomorphic. The new abelian variety attached to even weight Hodge structures varies with parameters, but neither holomorphically nor anti-holomorphically, as with Weil Jacobians. Safe to skip.
- Real K-theory appendix. Choosing the line bundle uses a Thom isomorphism in real K-theory, proved in Appendix B. Safe to skip unless you want the theta function itself.
- Section 5. The physics background explains the motivation. The authors say the rest of the paper does not need it. Safe to skip.

## One next step

Open the paper at section 6.1 and read Proposition 6.2 with the first six lines of its proof.

source: https://arxiv.org/pdf/1905.06611
slogan: Étale-sheafified K-theory nearly equals Selmer K-theory, which depends only on the category of modules, so it keeps the good properties of both.
basis: the introduction and the main theorem statements

## Before you start

This is 89 pages in the language of ∞-topoi, spectral algebraic spaces and topological cyclic homology. The title word "hyperdescent" alone can bring up a fear of being too slow for the subject. You are free to feel that. Nothing here needs it to go away. If you want to understand why K-theory and étale cohomology are close, the four theorems on pages 3 to 5 state it cleanly. Read those for pleasure. Treat the technical sections as optional.

## The story

Algebraic K-theory satisfies Nisnevich descent but not étale descent. So one cannot compute it from étale cohomology directly. The old remedy is to force étale descent by sheafifying, which gives étale K-theory K<sup>et</sup>. Two problems follow. Sheafification of spectra is a transfinite process, so K<sup>et</sup> looks hard to compute. It also seems to forget that K-theory depends only on a category of modules. Clausen and Mathew show both losses are only apparent. K<sup>et</sup> agrees in degrees ≥ −1 with Selmer K-theory, which is glued from K(1)-localised K-theory and topological cyclic homology and is defined for categories. Along the way they separate sheaves from hypersheaves, and show that K<sup>et</sup> is a hypersheaf in finite-dimensional cases. So a descent spectral sequence from étale cohomology converges to it.

## Main definitions

**Étale K-theory.** K is non-connective K-theory of perfect complexes on quasi-compact quasi-separated (qcqs) spectral algebraic spaces. K<sup>et</sup> is its étale sheafification as a presheaf of spectra. This is plain sheafification, not hypersheafification.

**Hypersheaf and Postnikov sheaf.** A sheaf of spectra is hypercomplete (a hypersheaf) when it is determined by its homotopy group sheaves. A Postnikov sheaf is one that is equivalent to the inverse limit of its sheafified Postnikov tower.
- Warning: a non-zero sheaf of spectra can have all stalks zero. Example 4.15 gives one on the site of finite continuous ℤ<sub>p</sub>-sets.

**Selmer K-theory.** K<sup>Sel</sup> = L<sub>1</sub>K ×<sub>L<sub>1</sub>TC</sub> TC. Here L<sub>1</sub> is Bousfield localisation at complex K-theory, TC is topological cyclic homology, and the maps come from the cyclotomic trace K → TC. It depends only on the category of perfect complexes.

**The dimension d<sub>k</sub>.** Fix a prime p. For a field k of characteristic not p, d<sub>k</sub> is the mod p virtual Galois cohomological dimension. For k of characteristic p, d<sub>k</sub> = 1 + dim<sub>k</sub> Ω<sup>1</sup><sub>k/k<sup>p</sup></sub>.

## Main results

**Theorem (étale versus Selmer; Theorem 1.1).** For every qcqs spectral algebraic space X, the natural map K<sup>et</sup>(X) → K<sup>Sel</sup>(X) is an isomorphism on homotopy groups in degrees ≥ −1.
- Step 1: L<sub>1</sub>K, L<sub>1</sub>TC and TC all satisfy étale descent, so the map exists.
- Step 2: Nisnevich descent reduces to henselian local rings, rigidity reduces to fields, and the norm residue isomorphism theorem handles fields.

**Theorem (Lichtenbaum–Quillen type; Theorem 1.2).** Let X be qcqs of finite Krull dimension and p a prime. Then K(X) → K<sup>et</sup>(X) is an isomorphism on p-local homotopy groups in degrees ≥ max(sup d<sub>k(x)</sub> − 2, 0), the supremum over the residue fields of points x of X.

**Theorem (hyperdescent; Theorem 1.3).** Let X be qcqs of finite Krull dimension with a uniform bound on the virtual Galois cohomological dimension of its residue fields. Then K<sup>et</sup> is a Postnikov sheaf on X. So there is a conditionally convergent spectral sequence from H<sup>p</sup>(X<sub>et</sub>; π<sub>q</sub><sup>et</sup>K) to π<sub>q−p</sub>K<sup>et</sup>(X). Every étale sheaf of K<sup>et</sup>-modules on X is also a Postnikov sheaf.

**Theorem (filtered colimits; Theorem 1.5).** The functor R ↦ K<sup>et</sup>(Spec R) on commutative rings commutes with filtered colimits. So the stalks of K<sup>et</sup> are the K-theory of strictly henselian local rings.

## Note, then ignore

- E<sub>2</sub>-structure sheaves. The results hold when the structure sheaf is only an E<sub>2</sub>-ring, which costs extra work in Section 5. Think of an ordinary algebraic space over ℤ and skip this.
- Degrees ≥ −1. Theorem 1.1 says nothing in lower degrees, where the two theories can differ. Safe to skip on a first reading.
- Sheafify or hypersheafify. Older definitions of étale K-theory used the stronger hypersheafification, and Theorem 1.3 shows when the two agree. Safe to skip.
- Conditional convergence. The descent spectral sequence converges conditionally, which matters only when you compute with it. Safe to skip.
- Rational part. The homotopy sheaves of K/n have a simple description (Corollary 6.12), but rational K-theory stays largely unknown. Note it and move on.

## One next step

Open the paper at Section 1.1 and read Theorem 1.1 and the two paragraphs after it, which explain what "the best of both worlds" means.

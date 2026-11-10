source: https://arxiv.org/pdf/2504.14153
slogan: Arithmetic duality lifts from étale cohomology to K-theory spectra, with locally compact modules playing the compactly supported side.
basis: the introduction and the main theorem statements

## Before you start

The introduction assumes Poitou–Tate duality, K(1)-local homotopy theory, Anderson duals and Lurie tensor products of stable ∞-categories, all within four pages. Feeling lost, or a little ashamed at the pile of prerequisites, is a normal response here. You can let that be. If you would like to see class field theory restated as a duality between two kinds of modules, the paper offers that picture early. Read the introduction for the idea, and enjoy it. The other fifty pages can wait.

## The story

For the ring 𝒪<sub>S</sub> of S-integers of a number field, Poitou–Tate duality pairs étale cohomology with compactly supported étale cohomology. It makes Spec 𝒪<sub>S</sub> look 3-dimensional. Thomason's descent spectral sequence shows that the first side appears in K(1)-local K-theory. So people asked for a duality of K-theory spectra that gives the classical pairing on the E<sub>2</sub>-page. Blumberg and Mandell built one. The obstacle is the compactly supported side: what category has it as K-theory? Braunling's earlier answer was locally compact topological modules. Finitely generated modules and locally compact modules are then dual. This paper extends the result to a smooth proper scheme X over 𝒪<sub>S</sub>, by tensoring perfect complexes on X with locally compact 𝒪<sub>S</sub>-modules.

## Main definitions

**Arithmetic scheme.** Fix an odd prime p, a number field F and a set S of places containing the infinite ones, with 1/p in the ring 𝒪<sub>S</sub> of S-integers. An arithmetic scheme is a smooth, separated, finite type scheme π: X → Spec 𝒪<sub>S</sub> of constant relative dimension d ≥ 0. Theorem A also asks that S is finite and π is proper.

**Locally compact modules.** LCA<sub>𝒪<sub>S</sub></sub> is the category of topological 𝒪<sub>S</sub>-modules, possibly not finitely generated, in which 0 has a compact neighbourhood. LC<sub>𝒪<sub>S</sub></sub> is its quotient by the modules that are real vector spaces.
- Dimension one: Σ<sup>−1</sup>K(LC<sub>𝒪<sub>S</sub></sub>) models compactly supported K-theory, by the author's earlier paper.
- Higher dimension: LC<sub>X</sub> := Perf X ⊗<sub>𝒪<sub>S</sub></sub> LC<sub>𝒪<sub>S</sub></sub>, a Lurie tensor product of 𝒪<sub>S</sub>-linear stable ∞-categories.

**K(1)-localisation and the Anderson dual.** L<sub>K(1)</sub> is Bousfield localisation at the first Morava K-theory at p. I<sub>ℤ<sub>p</sub></sub> denotes the p-adic Anderson dual of the K(1)-local sphere. It is the target of the trace map and plays the role that ℤ/p<sup>r</sup> plays in the classical pairing.

**Higher-dimensional Poitou–Tate pairing.** For an étale sheaf ℱ of ℤ/p<sup>r</sup>-modules on X, with dual ℱ\* = RHom(ℱ, ℤ/p<sup>r</sup>(d+1)), Saito and Geisser–Schmidt give a perfect pairing of finite groups H<sup>s</sup>(X, ℱ) ⊗ H<sub>c</sub><sup>2d+3−s</sup>(X, ℱ\*) → ℤ/p<sup>r</sup>. The case d = 0 is the classical one.

## Main results

**Theorem (K-theoretic duality; Theorem A).** Let S be finite with 1/p in 𝒪<sub>S</sub>, and let π: X → Spec 𝒪<sub>S</sub> be a smooth proper arithmetic scheme. Then there is an exact pushforward functor ρ<sub>!</sub>: LC<sub>X</sub> → LC<sub>ℤ[1/p]</sub>, and the resulting pairing L<sub>K(1)</sub>K(Perf X) ⊗ L<sub>K(1)</sub>K(LC<sub>X</sub>) → I<sub>ℤ<sub>p</sub></sub> is perfect.
- Part 1: the pairing is the action of Perf X on LC<sub>X</sub>, followed by ρ<sub>!</sub> and the trace.
- Part 2: both sides have descent spectral sequences, the pairing is compatible with them, and on the E<sub>2</sub>-page it is the higher-dimensional Poitou–Tate pairing.

**Corollary (duality as an equivalence).** Under the same hypotheses, the pairing induces an equivalence from the Anderson dual I<sub>ℤ<sub>p</sub></sub> L<sub>K(1)</sub>K(X) to L<sub>K(1)</sub>K(LC<sub>X</sub>).

**Theorem (the naive definition fails; Theorem B).** Let S be the set of all places and X an integral separated scheme of finite type over F. Define a naive K-theory of locally compact 𝒪<sub>X</sub>-modules by Zariski co-descent from affine opens. Its value on any open U is a cofibre built only from K-theory of residue fields of closed points of U and of its completions U<sub>v</sub>, in a restricted product over all places.
- Consequence: once X has infinitely many closed points, the groups are far too big to be K(LC<sub>X</sub>).
- Proof input: earlier joint work of the author with Arndt. No smoothness or properness is needed.

## Note, then ignore

- p is odd. The prime 2 needs separate work, done in dimension one by Cho. Safe to skip on a first reading.
- Non-connective K-theory. "K-theory" always means the non-connective version, which matters for exact sequences of categories. Safe to skip.
- A conjecture inside Theorem A. The author conjectures that ρ<sub>!</sub> agrees with the étale pushforward along X → Spec ℤ[1/p], and checks only what the proof needs. Safe to skip.
- Properness. The definition of LC<sub>X</sub> is only correct for proper π, so the hypothesis cannot be dropped with these methods. Note it and move on.
- Not an independent proof. As with Blumberg–Mandell, the result is bootstrapped from the known cohomological duality. Safe to skip.

## One next step

Open the paper at page 4 and read Theorem A and the Corollary after it. Then read the three-line table of dualities (0.7) on page 3.

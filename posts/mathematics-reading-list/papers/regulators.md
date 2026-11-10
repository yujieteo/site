source: https://arxiv.org/pdf/math/0407308
slogan: A regulator turns K-theory classes into real numbers by integrating logarithms and polylogarithms, and those numbers are the special values of zeta functions.
basis: the introduction and the main theorem statements

## Before you start

This is a 40-page survey that touches K-theory, Deligne cohomology, motivic complexes and polylogarithms, with proofs mostly sent to other papers. The feeling it tends to raise is overwhelm at how many subjects meet in one place. That is a fair response to a survey of this kind. If you want to see why ζ<sub>F</sub>(2) is a sum of hyperbolic volumes, the first five pages already tell you. Read those for pleasure. The other chapters will keep.

## The story

The class number formula says the residue of the Dedekind zeta function ζ<sub>F</sub>(s) at s = 1 is, up to simple factors, the class number times the regulator. The regulator is the volume of the lattice of logarithms of units. People wanted the same for ζ<sub>F</sub>(n). Lichtenbaum guessed that higher K-groups replace units. Borel proved it up to a rational factor, but his regulator comes from an abstract cohomology class. Bloch then found that on K<sub>3</sub> the regulator is the dilogarithm. A class becomes a formal sum of numbers z, and the regulator adds volumes of ideal hyperbolic tetrahedra with cross-ratio z. Goncharov's survey pushes this picture up. It describes explicit complexes that should compute motivic cohomology, and explicit maps of complexes to Deligne cohomology, written with logarithms and polylogarithms.

## Main definitions

**Borel regulator.** For a number field F and n > 1, pairing with the Borel class in the continuous cohomology of GL<sub>2n−1</sub>(ℂ) gives a map K<sub>2n−1</sub>(ℂ) → ℝ(n − 1), where ℝ(n) = (2πi)<sup>n</sup>ℝ. Composing with all embeddings F → ℂ gives K<sub>2n−1</sub>(F) → (ℤ<sup>Hom(F,ℂ)</sup> ⊗ ℝ(n − 1))<sup>+</sup>, the invariants under complex conjugation.

**Bloch–Wigner function.** L<sub>2</sub>(z) = Im(Li<sub>2</sub>(z) + log(1 − z) log|z|). It is single valued on ℂℙ<sup>1</sup> and vanishes on the real line.
- Volume: L<sub>2</sub> of the cross-ratio of four points is the volume of the ideal hyperbolic tetrahedron on those points.
- Five-term relation: the alternating sum over five points of L<sub>2</sub> of the cross-ratios is 0.

**Polylogarithmic complex Γ(F, n).** For a field F, B<sub>n</sub>(F) is ℤ[ℙ<sup>1</sup>(F)] modulo a subgroup R<sub>n</sub>(F), defined inductively (Definition 4.1), that stands for the functional equations of the n-logarithm. The complex is B<sub>n</sub> → B<sub>n−1</sub> ⊗ F<sup>×</sup> → … → B<sub>2</sub> ⊗ Λ<sup>n−2</sup>F<sup>×</sup> → Λ<sup>n</sup>F<sup>×</sup>, with B<sub>n</sub> in degree 1.
- Differential: {x}<sub>n</sub> ↦ {x}<sub>n−1</sub> ⊗ x for n ≥ 3, and {x}<sub>2</sub> ↦ (1 − x) ∧ x.

**Arakelov motivic complex.** For a regular complex projective variety X, the cone, shifted by −1, of the regulator map from Bloch's weight n cycle complex to a (modified) weight n Deligne complex. Its cohomology groups are the higher Arakelov Chow groups.

## Main results

**Theorem (Borel; quoted in Section 1.3, no number).** For n > 1 the image of the Borel regulator on K<sub>2n−1</sub>(F) is a lattice. Its covolume R<sub>n</sub>(F) equals, up to a non-zero rational factor, the leading coefficient of ζ<sub>F</sub>(s) at s = 1 − n. The order of vanishing there is r<sub>1</sub> + r<sub>2</sub> for odd n and r<sub>2</sub> for even n.
- Case n = 2: with Suslin's description of K<sub>3</sub>, the regulator is L<sub>2</sub> on the kernel of B<sub>2</sub>(F) → Λ<sup>2</sup>F<sup>×</sup>. This gives a formula for ζ<sub>F</sub>(2).
- Case n = 3: the same works with a single-valued trilogarithm, which gives Zagier's conjecture for ζ<sub>F</sub>(3).

**Theorem (regulator on cycle complexes; Theorem-Construction 2.1).** Let X be a regular complex projective variety. There is a canonical homomorphism of complexes from Bloch's cycle complex Z<sup>•</sup>(X; n) to a complex of distributions C<sub>D</sub><sup>•</sup>(X; n) that computes weight n Deligne (absolute Hodge) cohomology.
- Step 1: a cycle Y in X × 𝔸<sup>k</sup> carries k coordinate functions. Take the explicit (k − 1)-form r<sub>k−1</sub> built from log|f| and d arg f.
- Step 2: integrate it over Y and push forward to X as a distribution.

**Theorem (weak Zagier conjecture; Theorem 4.3).** Let F be a number field. There is a map from H<sup>1</sup>(Γ(F, n) ⊗ ℚ) to K<sub>2n−1</sub>(F) ⊗ ℚ such that, for each embedding F → ℂ, the single-valued n-logarithm on the left agrees with the Borel regulator on the right. This was proved earlier by de Jeu and by Beilinson and Deligne. The survey gives another proof.

**Conjecture (Conjecture 4.2).** For any field F, H<sup>i</sup>(Γ(F, n)) ⊗ ℚ is the weight n graded piece, for the γ-filtration, of K<sub>2n−i</sub>(F) ⊗ ℚ.

## Note, then ignore

- "Up to ℚ<sup>×</sup>". Borel's theorem and Beilinson's conjectures give special values only up to a rational factor. The exact value is the business of Bloch and Kato. Safe to skip on a first reading.
- ℝ(n) twists. Writing ℝ(n) = (2πi)<sup>n</sup>ℝ keeps track of whether a value is real or imaginary. It is bookkeeping and safe to skip.
- Distributions instead of forms. The Deligne complex uses distributions so that integration over singular cycles makes sense. Safe to skip.
- Grassmannian polylogarithms. Chapter 3 defines a function on 2n hyperplanes that gives the Borel regulator for every n. For n > 3 it is not expressed through classical polylogarithms. Safe to skip at first.
- A sign. The author says he does not know the cohomological origin of the minus sign in the class number formula (6). Safe to skip.

## One next step

Open the paper and read only part 3 of the Introduction, from the definition of the dilogarithm to Lobachevsky's volume formula.

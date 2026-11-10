source: https://web.math.princeton.edu/~nmk/arizona34.pdf
slogan: Katz proves the curve case of Weil II in the style of Weil I: a family with big monodromy plus Rankin's squaring.
basis: the introduction and the main theorem statements

## Before you start

These are 43 typewritten pages from a winter school, and the reputation of Weil II is that it is much harder than Weil I. The likely feeling is fear of being too slow for it. You may feel that. Katz wrote these lectures for students and assumes no knowledge of either Weil paper, only standard facts about ℓ-adic sheaves. If you want to know where Hard Lefschetz and Sato–Tate over function fields come from, the answer starts here. Read Lecture I for pleasure. The rest is optional.

## The story

Deligne proved the Riemann hypothesis for smooth projective varieties in 1973 (Weil I). He then proved a large generalisation about sheaves (Weil II), which became the tool people use. Its proof was regarded as much harder. In 1984 Laumon simplified it with the Fourier transform. Katz simplifies once more. In Weil I, Deligne handled one hypersurface by placing it in the family of all hypersurfaces, which has big monodromy. Katz does the same with an L-function. He places the L-function of a sheaf on the affine line in a two-parameter family of Artin–Schreier twists. He shows the family has big monodromy. Rankin's squaring method then gives purity for the family, and a limit argument gives the bound for the original sheaf.

## Main definitions

**Lisse sheaf and its L-function.** A lisse ℚ̄<sub>ℓ</sub>-sheaf F on a connected normal scheme X is a continuous finite-dimensional representation of π<sub>1</sub>(X). Over a finite field k its L-function is the Euler product over closed points of 1/det(1 − T<sup>deg</sup>·Frobenius).
- On an affine curve with F lisse, L equals det(1 − TF | H<sup>1</sup><sub>c</sub>) / det(1 − TF | H<sup>2</sup><sub>c</sub>).

**ι-pure of weight w.** Fix a field embedding ι of ℚ̄<sub>ℓ</sub> into ℂ. F is ι-pure of weight w if at every point x with values in a finite extension E of k, every eigenvalue of Frobenius has ι-absolute value (#E)<sup>w/2</sup>.
- A Galois representation is ι-mixed of weight ≤ w if the eigenvalues of geometric Frobenius have absolute value ≤ (#k)<sup>w/2</sup>.

**Geometric monodromy group.** For a lisse sheaf with representation space V, G<sub>geom</sub> is the Zariski closure in GL(V) of the image of the geometric fundamental group, that is π<sub>1</sub> of the base change to the algebraic closure of k.

**Auxiliary sheaf.** For F lisse, geometrically irreducible and pure of weight 0 on the affine line, a non-trivial additive character ψ and a polynomial f of suitable degree N, the auxiliary sheaf on the plane has as stalks the groups H<sup>1</sup><sub>c</sub> of F twisted by the Artin–Schreier sheaf of f plus a two-parameter perturbation.

## Main results

**Theorem (Target Theorem, Deligne; Lecture I).** Let U be a smooth, geometrically connected curve over a finite field k, ℓ a prime invertible in k, and F a lisse sheaf on U that is ι-pure of weight w. Then H<sup>1</sup><sub>c</sub>(U ⊗ k̄, F) is ι-mixed of weight ≤ w + 1.
- Step 1: reduce to the affine line and to F geometrically irreducible of weight 0.
- Step 2: deduce the bound from the Purity Theorem by letting a twist sT<sup>N</sup> tend to s = 0. The Degeneration and Weight Drop lemmas show weights can only fall.

**Corollary (after the Target Theorem; cited as Weil II 3.2.3).** With C the complete non-singular model of U and j: U → C the inclusion, H<sup>i</sup>(C ⊗ k̄, j<sub>∗</sub>F) is ι-pure of weight w + i for i = 0, 1, 2. Also H<sup>1</sup>(U ⊗ k̄, F) is ι-mixed of weight ≥ w + 1.
- Step 1: apply the target theorem to the dual sheaf and use Poincaré duality.
- Step 2: H<sup>1</sup> of j<sub>∗</sub>F is the image of H<sup>1</sup><sub>c</sub> in H<sup>1</sup>, so both bounds apply.

**Theorem (Purity Theorem; Lecture II).** The auxiliary sheaf is lisse of rank (N − 1)·rank(F) on the plane and ι-pure of weight one.
- Step 1: the Monodromy Theorem. The sheaf is geometrically irreducible. In odd characteristic G<sub>geom</sub> is either finite irreducible or contains SL(V) with finite index. In characteristic 2 symplectic and orthogonal cases also occur.
- Step 2: Rankin's method, applied to tensor powers with non-negative traces.

**Claim (applications; Lecture IV).** Katz derives from the target theorem: Weil I (with some Lefschetz pencil theory), geometric semisimplicity of lisse pure sheaves, the Hard Lefschetz theorem, semisimplicity of G<sub>geom</sub>, Deligne's equidistribution theorem, and the Ramanujan conjecture. I read the list and the cited statements, not the proofs.

## Note, then ignore

- Font damage. The PDF renders ℓ as "…", ι as a quote mark, 𝔸 as "!" and the sheaf letters as accented capitals. It is an old font encoding. Safe to skip once you know the code.
- Geometric versus arithmetic Frobenius. Katz uses the geometric one, the inverse of x ↦ x<sup>#k</sup>. It fixes the sign of weights. Safe to skip.
- Weil group. The subgroup of elements of integer degree in π<sub>1</sub> appears in one reduction step. Safe to skip.
- Characteristic 2. The perturbation and the list of possible monodromy groups change. Safe to skip.
- What is not proved. The target theorem bounds the weights but does not say which occur. Katz says the finer results need Deligne's study of local monodromy. Safe to skip.

## One next step

Open the PDF and read only the Introduction on page 2, down to "Caveat emptor".

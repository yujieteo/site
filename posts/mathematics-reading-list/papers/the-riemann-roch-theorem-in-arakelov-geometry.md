source: https://perso.pages.math.cnrs.fr/users/gerard.freixas/articles/Freixas-CIMPA.pdf
slogan: Minkowski's lattice volume formula is a Riemann-Roch theorem for Spec of a ring of integers, and Gillet and Soulé extend it to all dimensions.
basis: the introduction and the main theorem statements

## Before you start

The notes run to 46 pages and the last third uses currents, analytic torsion and Quillen metrics. The likely feeling is fear of hitting a wall half way, after a friendly start. That fear is fair. The author skips the proof of the main theorem. If you want to see what a "curve" Spec ℤ would be, Section 1 gives it with nothing beyond a first course in number fields. Read that for pleasure first.

## The story

On a compact Riemann surface, Riemann-Roch computes χ(L) = deg L + 1 − g. A number ring O<sub>K</sub> looks like a curve, but Spec O<sub>K</sub> is not compact: the archimedean places are missing. The fix is to add a hermitian metric at each complex embedding. A line bundle with metrics has an arithmetic degree, a real number. Its module of sections becomes a lattice, and the covolume of that lattice plays the role of χ. Minkowski's computation of the covolume of an ideal then reads exactly as Riemann-Roch, with half the logarithm of the discriminant in place of g − 1. Gillet and Soulé carried this to higher dimensions. There the role of the lattice volume is played by the Quillen metric on the determinant of cohomology.

## Main definitions

**Hermitian line bundle on Spec O<sub>K</sub>.** A projective O<sub>K</sub>-module L of rank 1 with a hermitian metric on L ⊗<sub>σ</sub> ℂ for every embedding σ : K → ℂ, invariant under complex conjugation. Isometry classes form the arithmetic Picard group, which is isomorphic to the Arakelov class group.
- Arithmetic degree: for a nonzero s ∈ L, it is log #(L/O<sub>K</sub>s) − Σ<sub>σ</sub> log ‖s‖<sub>σ</sub>. The product formula makes it independent of s.

**Arithmetic variety and arithmetic Chow group.** An arithmetic variety is a regular, flat, quasi-projective scheme X over ℤ. The group ĈH<sup>i</sup>(X) is made of pairs (Z, g), where Z is a codimension i cycle and g is a Green current for Z on X(ℂ), modulo a suitable rational equivalence.
- A hermitian vector bundle E has classes ĉh(E) and ĉ<sub>1</sub>(E) in these groups.

**Quillen metric.** For a projective morphism f and a hermitian bundle E, the determinant of cohomology λ<sub>f</sub>(E) is a line bundle on the base. Its Quillen metric is the L<sup>2</sup> metric rescaled by the exponential of the holomorphic analytic torsion, a number built from the spectrum of the ∂̄ Laplacian.

## Main results

**Theorem (Minkowski; Theorem 1.2).** Let L be a hermitian line bundle on Spec O<sub>K</sub> and π : Spec O<sub>K</sub> → Spec ℤ the structure map. Then deĝ(π<sub>∗</sub>L) = deĝ(L) − ½ log|Δ<sub>K/ℚ</sub>|.
- Step 1: reduce to an ideal a ⊂ O<sub>K</sub> with the metrics coming from K. Changing the metric or scaling a changes both sides equally.
- Step 2: compare a with O<sub>K</sub> through the sequence 0 → a → O<sub>K</sub> → O<sub>K</sub>/a → 0, as in the proof for curves.

**Theorem (curvature formula; Theorem 2.3, Bismut-Freed and Bismut-Gillet-Soulé).** Let f : X → Y be a smooth proper morphism of smooth complex varieties, with a (1, 1) form that is Kähler on the fibres, and E a hermitian bundle. The first Chern form of λ<sub>f</sub>(E) with its Quillen metric equals the degree (1, 1) part of f<sub>∗</sub>(ch(E) td(T<sub>f</sub>)), as differential forms.

**Theorem (arithmetic Riemann-Roch; Theorem 4.1, Gillet-Soulé).** Let f : X → Y be a projective morphism of arithmetic varieties, with a fixed Kähler form on the complex fibres, and E a hermitian vector bundle on X. In ĈH(Y) ⊗ ℚ, the class ĉ<sub>1</sub>(λ<sub>f</sub>(E)) with the Quillen metric equals the degree 1 part of f<sub>∗</sub>(ĉh(E) t̂d(T<sub>f</sub>)), minus a purely archimedean term built from ch(E) td(T<sub>f</sub>) R(T<sub>f</sub>).
- Case X = Spec O<sub>K</sub>, Y = Spec ℤ: this is Minkowski's theorem.
- Proof: not given. Both known proofs rest on the immersion formula of Bismut and Lebeau.

**Theorem (Lerch-Chowla-Selberg, the closing example in Section 5.2).** Let E be an elliptic curve with complex multiplication by the ring of integers of an imaginary quadratic field K, with discriminant of absolute value D and quadratic character ε. Its Faltings height is h<sub>F</sub>(E) = −½·L′(0, ε)/L(0, ε) − ¼ log D + ½ log 2.
- Step 1: arithmetic Riemann-Roch for the sheaf of differentials, with the flat metric of volume 1, gives degree zero for the Quillen metric. So the height is a sum of analytic torsions.
- Step 2: the Laplacian on ℂ/a has eigenvalues given by norms of ideals, so the torsions sum to a derivative of the Dedekind zeta function at 0.

## Note, then ignore

- The R-genus. This extra characteristic class, with coefficients involving ζ′(−m), comes from how analytic torsion behaves under closed immersions. It vanishes in the elliptic curve example. Safe to skip.
- The factor ½ in the arithmetic degree on Spec ℤ. It appears because the archimedean datum is −log of a squared norm. The author warns it is often forgotten. Note it and move on.
- Theorem numbering. Later sections call Minkowski's theorem "Theorem 1.3", though it is stated as Theorem 1.2. It is the same result.
- Products of currents. Multiplying Green currents needs a logarithmic singularity and proper intersection, or a moving lemma that brings in denominators. This is why ℚ coefficients appear. Skip on a first reading.
- Normalisation of the Faltings height. The value in the example depends on the constant in the L<sup>2</sup> norm of a differential. Other texts differ by constants. It does not change the story.

## One next step

Open the notes at Section 1.4 and read Theorem 1.1 and Theorem 1.2 side by side: the curve version and the number field version of the same formula.

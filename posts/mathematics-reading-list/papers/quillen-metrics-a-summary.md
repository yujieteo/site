source: https://indico.global/event/9583/attachments/42067/78761/slides_Bismut.pdf
slogan: Analytic torsion corrects the L² metric on the determinant of cohomology, and the corrected metric has curvature given by Riemann–Roch.
basis: the full text

## Before you start

The file says 203 pages. That number can raise overwhelm before you open it. It is fine to feel that. The slides build up line by line, so there are only 44 distinct frames, and most hold six short lines. If you want to see how a Riemann–Roch formula can hold for differential forms, not only for classes, this is the outline by a main author. Browse for the pictures of the idea. Reaching frame 44 is optional.

## The story

The Riemann–Roch–Hirzebruch theorem computes the Euler characteristic of a holomorphic bundle E on a compact complex manifold X as an integral of characteristic classes. People wanted a finer object than a number. Take the determinant line λ of the cohomology of E. When X moves in a family, λ becomes a holomorphic line bundle on the base. It has an L² metric from harmonic forms, but that metric can jump where cohomology jumps. Quillen's idea is to multiply the L² metric by the exponential of the Ray–Singer analytic torsion, a regularised determinant of Laplacians. The jumps cancel. The resulting metric is smooth, and its curvature is the degree 2 part of the Riemann–Roch integrand. Bismut treats this metric as a refined Euler characteristic.

## Main definitions

**Determinant of cohomology.** For a holomorphic vector bundle E on a compact complex manifold X of dimension n, λ is the tensor product over i of (det H<sup>i</sup>(X, E)) raised to the power (−1)<sup>i</sup>. It is a complex line.
- In a family π : M → S, the lines glue to a holomorphic line bundle λ = det Rπ<sub>∗</sub>E on S (Knudsen–Mumford).

**Ray–Singer analytic torsion.** Choose Hermitian metrics on TX and E. Let □ be the Hodge Laplacian on (0, i)-forms with values in E, and ζ<sub>i</sub>(s) the trace of □<sup>−s</sup> on the non-zero spectrum. Put θ(s) = Σ<sub>i</sub> (−1)<sup>i+1</sup> i ζ<sub>i</sub>(s). The torsion is T = θ′(0).

**Quillen metric.** Hodge theory identifies cohomology with harmonic forms, which gives an L² metric | | on λ. The Quillen metric is ‖ ‖<sup>2</sup> = | |<sup>2</sup> exp(T).

**Bott–Chern class.** For two Hermitian metrics on a holomorphic bundle and a characteristic polynomial P, a form P̃, unique modulo ∂ and ∂̄ exact forms, with (∂̄∂/2iπ) P̃ equal to the difference of the two P-forms.

## Main results

**Theorem (curvature theorem; Bismut–Gillet–Soulé 1988).** Let π : M → S be a proper holomorphic submersion with fibre X, and E a holomorphic Hermitian bundle on M. The Quillen metric on λ = det Rπ<sub>∗</sub>E is smooth. If π is locally Kähler and the fibrewise metric is Kähler, then c<sub>1</sub>(λ, ‖ ‖) is the degree 2 part of the integral along the fibre of Td(TX, g<sup>TX</sup>) ch(E, g<sup>E</sup>).
- Step 1: view ∂̄ on M as a superconnection on the infinite-dimensional bundle of fibrewise forms, and carry over the finite-dimensional superconnection formalism.
- Step 2: combine Bismut–Freed's results in the smooth case with anomaly formulas, which say Quillen metrics vary by Bott–Chern classes.

**Theorem (embedding formula; Bismut–Lebeau).** Let i : Y → X be an embedding of compact complex manifolds, F a holomorphic bundle on Y, and (E, v) a complex of bundles on X resolving the direct image of F. The determinant lines λ(E) and λ(F) are canonically isomorphic. For Kähler metrics, the log of the squared ratio of the two Quillen metrics is the integral over X of an explicit local Bott–Chern current.

**Claim (elliptic curves).** Over the moduli space of elliptic curves, with flat metrics of volume 1, the Quillen metric on λ = det Rπ<sub>∗</sub>O is flat by the curvature theorem. The Quillen norm of dz is a constant times |η|<sup>2</sup>, with η the Dedekind eta function.
- Step 1: flatness gives a holomorphic function f(τ) with ‖dz‖ = |f(τ)|.
- Step 2: the embedding formula near the cusp identifies f with a constant times η<sup>2</sup>. Ray and Singer first got this from the Kronecker limit formula.

**Claim (applications).** In Arakelov geometry, torsion is the contribution of the infinite places to the arithmetic Riemann–Roch formula of Gillet–Soulé. Yoshikawa uses equivariant torsion on K3 surfaces with involution and finds a Borcherds modular form. BCOV torsion of Calabi–Yau manifolds enters mirror symmetry.

## Note, then ignore

- Signs in determinants. The slides ignore signs in det(E ⊕ F) = det E ⊗ det F. Canonical isomorphisms carry them. Safe to skip on a first reading.
- Zeta regularisation. The integral that would define torsion diverges, so the slides subtract the limit and continue in s. This is technique, not plot. Safe to skip.
- Coherent sheaves. In general Rπ<sub>∗</sub>E is not a vector bundle, yet its determinant is still a line bundle. Safe to skip.
- A misquotation. Bismut remarks that people often cite Bismut–Freed for the curvature theorem, though that work covers only the smooth category. Safe to skip.
- Kähler, not Calabi–Yau. The metric defining torsion needs to be Kähler in general, but special metrics are not needed. Safe to skip.

## One next step

Open the slides and go to the frame numbered 19 of 44, "The curvature theorem". Read its two statements and nothing else.

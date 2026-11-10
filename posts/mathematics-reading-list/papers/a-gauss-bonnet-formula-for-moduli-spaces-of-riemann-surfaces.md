source: https://arxiv.org/pdf/1312.5077
slogan: The Euler characteristic of moduli space is the integral of a curvature density, so a number built from zeta values is also a kind of volume.
basis: the introduction and the main theorem statements

## Before you start

This is a short differential geometry paper, but it leans on Teichmüller theory, the curve complex and a 1943 formula for polyhedra. You may feel unease at meeting three unfamiliar toolkits in fifteen pages. That unease is fair, and you can let it sit there. If you want to see why moduli of curves behave like the locally symmetric spaces of arithmetic groups, the introduction alone shows it. Read for the comparison you enjoy. The estimates can wait, or never come.

## The story

For a closed Riemannian manifold of even dimension, Gauss-Bonnet-Chern says that the Euler characteristic is the integral of a density computed from the curvature. Harder proved the same for the non-compact quotients of symmetric spaces by arithmetic groups, and this turns Euler characteristics such as χ(Sp(2n, ℤ)) = ζ(−1)ζ(−3)···ζ(1 − 2n) into volume computations. Harer and Zagier found a similar zeta value for the mapping class group: χ(Mod(S<sub>g,1</sub>)) = ζ(1 − 2g). So people asked for a Gauss-Bonnet formula on moduli space. Two things block it. Moduli space is not compact, and it has no canonical metric. Leuzinger picks McMullen's metric, which is complete with finite volume and bounded curvature. He exhausts moduli space by compact pieces with corners, where every closed geodesic has length at least ε. The boundary terms of the polyhedral Gauss-Bonnet formula then die as ε → 0.

## Main definitions

**Moduli space and its covers.** Let S = S<sub>g,p</sub> be a surface of genus g with p punctures and 3g − 3 + p > 0. The mapping class group Mod(S) acts properly discontinuously on Teichmüller space T(S), and the quotient is the moduli space of Riemann surfaces. The paper works on M(S) = Γ\T(S).
- The group Γ: a torsion-free subgroup of finite index in Mod(S) that consists of pure mapping classes, so that M(S) is a manifold and a finite cover of moduli space.
- Example: the kernel of the action of Mod(S) on H<sub>1</sub>(S, ℤ/mℤ) for m ≥ 3.

**McMullen metric.** A complete Kähler metric g<sub>M</sub> on moduli space, built by McMullen as a modification of the Weil-Petersson metric. It has finite volume and bounded sectional curvature, and it is quasi-isometric to the Teichmüller metric.

**Gauss-Bonnet-Chern form.** For a Riemannian manifold (M, g) of even dimension n, the form ω<sub>g</sub> = Ψ<sub>g</sub> dvol<sub>g</sub>, where Ψ<sub>g</sub> is a universal polynomial of degree n/2 in the components of the curvature tensor. On a closed manifold, χ(M) = ∫<sub>M</sub> ω<sub>g</sub>.

**Thick part.** For ε > 0, the set Thick<sub>ε</sub> M(S) of hyperbolic surfaces in M(S) on which every non-trivial simple closed geodesic has length at least ε. For small ε it is a compact manifold with corners, that is, a Riemannian polyhedron.
- Boundary faces: one face B<sub>ε</sub>(σ) for each simplex σ of the finite complex Γ\C(S), where C(S) is the complex of curves. On that face the curves of σ have length exactly ε.

## Main results

**Theorem (Gauss-Bonnet for moduli spaces; stated in Section 1, not numbered).** Let S = S<sub>g,p</sub> with 3g − 3 + p > 0. Let Γ ⊂ Mod(S) be a torsion-free subgroup of finite index consisting of pure elements, and M(S) = Γ\T(S). Then χ(M(S)) = ∫<sub>M(S)</sub> ω<sub>g<sub>M</sub></sub>, where ω<sub>g<sub>M</sub></sub> is the Gauss-Bonnet-Chern form of the McMullen metric.
- Step 1: apply the Allendoerfer-Weil formula for Riemannian polyhedra (Proposition 1) to each thick part. It gives the Euler characteristic as the interior integral plus integrals over the boundary faces.
- Step 2: show that the boundary faces have uniformly bounded second fundamental forms and volumes that tend to 0, so the boundary integrals vanish as ε → 0. The thick parts all have the topology of M(S).

**Theorem (partition and exhaustion; Proposition 2 and Corollary 1, from the author's earlier work).** For small ε, M(S) is the disjoint union of Thick<sub>ε</sub> M(S) and thin parts indexed by the simplices σ of Γ\C(S). Each thin part is diffeomorphic to B<sub>ε</sub>(σ) × (ℝ<sub>>0</sub>)<sup>|σ|</sup>, and B<sub>ε</sub>(σ) is a torus bundle over the thick part of the moduli space of the surface cut along σ. The thick parts exhaust M(S) as ε → 0.

**Theorem (Harer-Zagier, quoted as motivation).** For g > 1, the orbifold Euler characteristics are χ(Mod(S<sub>g,1</sub>)) = ζ(1 − 2g) and χ(Mod(S<sub>g,0</sub>)) = ζ(1 − 2g)/(2 − 2g). Here ζ(1 − 2g) = −B<sub>2g</sub>/2g is rational.

## Note, then ignore

- Finite covers. The theorem is for the manifold Γ\T(S), not the orbifold Mod(S)\T(S). Divide by the index of Γ to get the orbifold statement. Safe to skip on a first reading.
- Pure mapping classes. This condition on Γ makes the boundary strata honest products and bundles. Safe to skip.
- Not a new fact. The author says the formula already follows from a general theorem of Cheeger and Gromov, since the mapping class group is residually finite. The paper gives an independent and more direct proof. Safe to skip.
- Choice of metric. The Weil-Petersson metric is incomplete, so it is not used. Remark (1) says the formula may hold for other metrics quasi-isometric to the Teichmüller metric. Safe to skip.
- No volume estimates. Remark (2) says curvature bounds are too coarse to give asymptotic volumes, although the volume grows at least like g!. Safe to skip.

## One next step

Open the paper at page 2 and read the two displayed formulas for χ(Mod(S<sub>g,1</sub>)) and χ(Sp(2n, ℤ)) with the paragraph between them.

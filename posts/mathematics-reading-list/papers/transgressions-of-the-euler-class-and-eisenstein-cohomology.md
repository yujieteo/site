source: https://webusers.imj-prg.fr/~pierre.charollois/Takaginotes-revised-Sept2019.pdf
slogan: Sullivan's vanishing of the Euler class of a lattice bundle hides a cohomology class whose periods are zeta values and modular forms.
basis: the introduction and the main theorem statements

## Before you start

These are 52 pages of lecture notes that move from Thom classes to theta lifts to zeta values of totally real fields. The feeling most likely to arrive is overwhelm at the range: topology, differential forms, adeles and modular forms in one text. Nothing is wrong with you if that makes you want to close the file. The notes explain why rational numbers such as ζ(−k) can be read as topological invariants, which is a pleasant thing to know. The authors wrote the introduction as a story. Enjoy that story first, and let the sections come later if they come.

## The story

Take a real vector bundle of rank N whose fibres contain lattices ℤ<sup>N</sup>. Sullivan proved in 1975 that its Euler class vanishes rationally. The proof passes to the bundle of tori T with fibre ℝ<sup>N</sup>/ℤ<sup>N</sup> and shows that the m-torsion points minus m<sup>N</sup> copies of the zero section bound. The authors ask what this boundary relation leaves behind. It leaves a class z<sub>m</sub> of degree N − 1 on the complement of the torsion points. Bismut and Cheeger had written an explicit primitive of the Euler form. Building on that and on the Gaussian Thom form of Mathai and Quillen, the authors write z<sub>m</sub> as an explicit differential form, an Eisenstein series. Its periods are rational. Integrating it over the cycle given by the units of a totally real field gives the zeta value at s = 0. For N = 2 the form is built from the classical Eisenstein series E<sub>1</sub> and E<sub>2</sub>.

## Main definitions

**Thom class and Euler class.** For an oriented real vector bundle E of rank N over M, the Thom class is the image of 1 under the Thom isomorphism H<sup>•</sup>(M) → H<sup>•+N</sup>(E, E − E<sub>0</sub>), with E<sub>0</sub> the zero section. The Euler class e(E) ∈ H<sup>N</sup>(M) is its pullback along the zero section.

**Torus bundle T and T[m].** If the structure group of E reduces to SL<sub>N</sub>(ℤ), then E contains a bundle of lattices E<sub>ℤ</sub>. Set T = E/E<sub>ℤ</sub>, a group bundle with fibre ℝ<sup>N</sup>/ℤ<sup>N</sup>. T[m] is the submanifold of m-torsion points and {0} is the image of the zero section.

**Transgression.** A transgression of a closed form that represents the zero class is an explicit form whose exterior derivative is that form. Here it is a primitive of the Euler form, or of the Thom form pulled back to the sphere bundle.
- Local step: Mathai and Quillen give a canonical Gaussian Thom form and a canonical primitive of its pullback.
- Global step: summing over the lattice, as in a theta series, gives the form E<sub>ψ</sub> of degree N − 1 on T − {0}.

## Main results

**Theorem (Sullivan; Theorem 1).** Let M be a connected oriented manifold. The Euler class of an oriented SL<sub>N</sub>(ℤ) vector bundle on M vanishes rationally.
- Step 1: a non-zero multiple of T[m] − m<sup>N</sup>{0} is a boundary in T.
- Step 2: the zero section is Poincaré dual to the Thom class, and the notes deduce the vanishing of the Euler class from Step 1 in Section 2.

**Theorem (Eisenstein class and its form; Theorems 2 and 3).** For each positive integer m there is a distinguished class z<sub>m</sub> ∈ H<sup>N−1</sup>(T − T[m], ℚ) that maps to the class of T[m] − m<sup>N</sup>{0}. For T the universal family of metrised tori over Γ\X, with X the symmetric space of SL<sub>N</sub>(ℝ) and Γ a congruence subgroup of GL<sub>N</sub>(ℤ), the form m<sup>\*</sup>E<sub>ψ</sub> − m<sup>N</sup>E<sub>ψ</sub> is closed on T − T[m] and represents z<sub>m</sub> in real cohomology. The notes only sketch the proof of the second statement, in Section 10.
- Case N = 2: E<sub>ψ</sub> is the real part of a 1-form built from E<sub>2</sub>(τ, z)dτ and E<sub>1</sub>(τ, z)dz on the universal elliptic curve.

**Theorem (zeta values; Theorem 25 and Theorem 4).** Pull E<sub>ψ</sub> back along a non-zero torsion section fixed by Γ to get a closed (N − 1)-form on Γ\X. For a totally real field F of degree N and a totally odd Hecke character χ of finite order, the adelic version of this class has period −L(χ, 0) times local factors at the ramified places (Theorem 25). Rationality of z<sub>m</sub> then gives the Klingen–Siegel theorem. Its near integrality recovers the theorem of Deligne–Ribet and Cassou-Noguès: n(c)ζ(b, f, 0) − ζ(bc, f, 0) lies in ℤ[1/n(c)] for an integral ideal c coprime to fb<sup>−1</sup>.

**Theorem (lift to modular forms; Theorems 5 and 6).** Let Y be a modular curve with universal elliptic curve E. A Γ-invariant nowhere zero torsion section of E<sup>N</sup> of order prime to m gives a class in H<sup>N−1</sup>(Γ, M<sub>N</sub>(Y)), hence maps H<sub>N−1</sub>(Γ, ℤ) → M<sub>N</sub>(Y) to weight N modular forms. On the class of the units of a totally real field of degree N, the value is the diagonal restriction of a Hecke–Eisenstein form of weight (1, …, 1). The authors announce this, with full proofs deferred to later papers.

## Note, then ignore

- Work in progress. The notes say that few new results are stated in full and that proofs will appear in later papers with Venkatesh. This affects what you can cite, not the story. Safe to skip on a first reading.
- Dependence on m. The class z<sub>m</sub> depends on m, and Section 3.3 explains how the choices fit together. Safe to skip.
- "Almost integral". z<sub>m</sub> lies in cohomology with ℤ<sub>ℓ</sub> coefficients for every ℓ coprime to m. This refinement is what gives integrality of zeta values, and the story runs without it. Safe to skip.
- Only s = 0. The notes treat the zeta value at 0. Other non-positive integers need local coefficients, which are left out. Safe to skip.

## One next step

Open the notes and read Section 1.1 on page 2: Theorem 1, the paragraph on Sullivan's proof, and Theorem 2.

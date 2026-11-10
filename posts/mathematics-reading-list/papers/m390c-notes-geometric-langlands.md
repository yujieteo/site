source: https://adebray.github.io/lecture_notes/m390c_GL_2021_notes.pdf
slogan: Geometric Langlands is a Fourier transform for sheaves on bundles, and a four-dimensional field theory tells you which structures to expect.
basis: the introduction and the main theorem statements

## Before you start

These are 89 pages of live-typed notes from 31 lectures, and they move between number theory, physics and derived geometry. The likely feeling is a fear of being lost in three subjects at once. That fear is reasonable, and it can sit beside you while you read. The first lecture says outright that no physics or number theory is assumed. If you want to see why Langlands duality looks like a Fourier transform, these lectures show it one abelian example at a time. Read for the pictures. Coverage can wait.

## The story

Number theorists study functions on spaces such as SL<sub>2</sub>(ℤ)\ℍ. The Laplacian acts there, and so does a large commuting family of Hecke operators, one for each prime. The Langlands programme says the joint eigenvalues are Galois representations into a dual group G<sup>∨</sup>. Why would that be? Ben-Zvi's course answers by analogy. A number field behaves like a 3-manifold, and primes behave like knots. A theory that gives vector spaces to 3-manifolds is a four-dimensional topological field theory. In such a theory, Hecke operators are line operators, they commute for geometric reasons, and electric-magnetic duality swaps G with G<sup>∨</sup>. The course starts with the Fourier transform and Pontrjagin duality, proves the abelian case (class field theory), and then climbs to the geometric Satake theorem and the spectral action of local systems.

## Main definitions

**Bun<sub>G</sub>(C).** The moduli stack of principal G-bundles on a smooth projective curve C. Over 𝔽<sub>q</sub> its points form Weil's double quotient G(F)\G(𝔸)/G(O<sub>𝔸</sub>), where F is the function field of C (Theorem 17.4), so functions on it are unramified automorphic functions.

**Affine Grassmannian and the spherical category.** Let K be Laurent series and O be Taylor series. Gr<sub>G</sub> = G(K)/G(O) parametrises G-bundles on a curve with a trivialisation away from one point. Sph<sub>G</sub> is the category of G(O)-equivariant sheaves on Gr<sub>G</sub>, with convolution as its product.
- It acts on sheaves on Bun<sub>G</sub>(C) at each point x of C. These are the Hecke operators.

**Character local system.** A local system χ on Pic(C) with a multiplicative structure: its fibre at a tensor product of line bundles is the tensor product of the fibres, coherently (Definition 13.7).

**Hecke eigensheaf.** Let E be a G<sup>∨</sup>-local system on C. An E-eigensheaf is a sheaf F on Bun<sub>G</sub>(C) with coherent isomorphisms V<sub>x</sub> ∗ F ≅ (V<sub>x</sub>)<sub>E</sub> ⊗ F for every representation V of G<sup>∨</sup> and point x. The "eigenvalue" is the fibre of the associated bundle of E at x.

## Main results

**Theorem (unramified class field theory; Theorem 9.3).** For a curve C over a finite field, there is a map from Pic(C) to the abelianised étale fundamental group of C that is an isomorphism on profinite completions.

**Theorem (geometric class field theory; Lecture 13, unnumbered).** Pulling back along the Abel-Jacobi map AJ: Σ → Pic gives an equivalence between character local systems on Pic and rank-one local systems on the curve Σ.
- Step 1 (Deligne): a rank-one local system L on Σ gives a local system on each symmetric power Sym<sup>d</sup>(Σ), with fibre the tensor product of the fibres of L.
- Step 2: for d > 2g − 2 the map Sym<sup>d</sup>(Σ) → Pic<sup>d</sup> has projective spaces as fibres. These are simply connected, so the local system descends. Multiplicativity extends it to all degrees.

**Theorem (geometric Satake; Theorem 28.5).** (Sph<sub>G</sub>, ∗) is equivalent, as a symmetric monoidal category, to (Rep G<sup>∨</sup>, ⊗), where G<sup>∨</sup> is the Langlands dual group.
- Step 1: build a fibre functor Sph<sub>G</sub> → Vect by restricting to the semi-infinite orbits of N(K) and taking cohomology. It carries a grading by the lattice Λ = Gr<sub>T</sub>.
- Step 2: apply Tannakian reconstruction. The automorphism group of the fibre functor is G<sup>∨</sup>, with maximal torus the dual torus.

**Theorem (spectral action; Theorems 29.7, 29.8, 29.9).** Quasicoherent sheaves on Loc<sub>G<sup>∨</sup></sub>(C) act on sheaves on Bun<sub>G</sub>(C), compatibly with the Hecke operators. The notes credit three settings.
- de Rham (Gaitsgory): D-modules on Bun<sub>G</sub> and flat connections.
- Betti (Nadler-Yun) and restricted (Arinkin-Gaitsgory-Kazhdan-Raskin-Rozenblyum-Varshavsky): sheaves with nilpotent singular support.

## Note, then ignore

- TODO marks. The notes were typed live and say "TODO" where the writer missed a point. Nothing later depends on them. Safe to skip on a first reading.
- The naive conjecture. Lecture 29 states that Shv(Bun<sub>G</sub>) is equivalent to QC(Loc<sub>G<sup>∨</sup></sub>) and then says this form is false, because Loc is singular. The correction changes the category on the spectral side. Safe to skip.
- Three kinds of local system. Betti, de Rham and restricted versions differ as spaces, although they have the same points. Lecture 16 compares the first two. Safe to skip.
- ℂ versus ℚ<sub>ℓ</sub> coefficients. A footnote in Lecture 1 says the Galois side needs étale cohomology to be precise. Safe to skip.
- The knots and primes dictionary. The notes warn that it is not exact, and that no specific prime matches a specific knot. Treat it as a guide. Safe to skip.

## One next step

Open the PDF at page 4 and read the bulleted list that compares number fields, curves over 𝔽<sub>q</sub> and Riemann surfaces, then the paragraph on why 3-manifolds replace surfaces.

source: https://arxiv.org/pdf/1011.0403
slogan: Barnes's multiple Γ-functions are volumes of maps from a polydisk, so the disk picture of Γ extends to higher dimensions.
basis: the introduction and the main theorem statements

## Before you start

This is an extended conference talk, and the authors call it very preliminary. It leans on four earlier papers in its first paragraph. That can bring unease: you arrive in the middle of a conversation, with no firm theorem to hold. It is fine to feel unsettled by that. If you want to see a family of special functions fall out of a Gaussian integral, Section 1 gives you that. Read it for pleasure. Section 2 is optional.

## The story

Earlier work wrote the Γ-function as a regularised volume of the space of holomorphic maps from a disk to ℂ, and read that volume as a correlator in a two-dimensional topological field theory. This note tests higher dimensions. Replace the disk by a polydisk D<sup>r</sup>, with a torus of r circles rotating the coordinates. A holomorphic map is now a power series in r variables. The same Gaussian integral gives a regularised product over lattice points n in ℤ<sup>r</sup> with n ≥ 0, and that product is Barnes's multiple Γ-function. Kurokawa had proposed these as higher L-factors, so they now have a field theory description. The second half moves to four-dimensional gauge theory and writes a vortex counting function as a contour integral of Γ-functions.

## Main definitions

**Multiple Γ-function.** For ω = (ω<sub>1</sub>, …, ω<sub>r</sub>) with all ω<sub>a</sub> > 0, Γ<sub>r</sub>(s|ω) is the ζ-regularised product of (s + ⟨n, ω⟩)<sup>−1</sup> over all n in ℤ<sup>r</sup> with non-negative entries.
- r = 0: Γ<sub>0</sub>(s) = 1/s.
- r = 1: Γ<sub>1</sub>(s|ω) = (2π)<sup>−1/2</sup> ω<sup>s/ω − 1/2</sup> Γ(s/ω), a rescaled classical Γ.

**q-deformed multiple Γ-function.** Γ<sub>r</sub>(t|q) = Π 1/(1 − t q<sub>1</sub><sup>n<sub>1</sub></sup> ⋯ q<sub>r</sub><sup>n<sub>r</sub></sup>), over the same n, with all |q<sub>j</sub>| &lt; 1. The product converges absolutely, so no regularisation is needed.

**Equivariant volume of the space of maps.** Let M be the space of holomorphic maps from the polydisk D<sup>r</sup> to ℂ<sup>ℓ+1</sup>, with the symplectic form given by integrating over the product of boundary circles. The torus T<sup>r</sup> and the group U<sub>ℓ+1</sub> act with moment maps H<sub>a</sub> and H<sub>j</sub>. The volume Z(λ, ω) is the integral of exp(Ω − Σ λ<sub>j</sub>H<sub>j</sub> − Σ ω<sub>a</sub>H<sub>a</sub>) over M, defined by ζ-regularisation.

## Main results

The note has no numbered theorems. Its main claims are displayed formulas.

**Claim (multiple Γ as a volume; formula 1.31).** For ω<sub>a</sub> > 0, the equivariant volume is Z(λ, ω) = Π<sub>j=1</sub><sup>ℓ+1</sup> Γ<sub>r</sub>(λ<sub>j</sub>|ω). The authors say the calculation follows the r = 1 case of their earlier paper.
- Step 1: expand the map in monomials. The integral is Gaussian, and each monomial z<sup>n</sup> in the j-th coordinate contributes 1/(λ<sub>j</sub> + ⟨n, ω⟩).
- Step 2: the same integral is a correlator in a topological field theory on D<sup>r</sup> with quadratic action, built in Section 1.2.

**Claim (functional equations from resolutions; formulas 1.19 to 1.24).** Γ<sub>r</sub>(s|ω) / Γ<sub>r</sub>(s + ω<sub>i</sub>|ω) = Γ<sub>r−1</sub>(s| ω with ω<sub>i</sub> removed). In the q-version, an alternating product of 2<sup>r</sup> shifted values of Γ<sub>r</sub>(t|q) equals 1/(1 − t).
- Step 1: write Γ<sub>r</sub>(t|q) as the inverse determinant of 1 − t q<sup>d</sup> on the polynomial ring ℂ[z<sub>1</sub>, …, z<sub>r</sub>].
- Step 2: determinants multiply along exact sequences, so the Koszul resolution of the origin in ℂ<sup>r</sup> gives the relation.

**Claim (Mellin-Barnes integral for vortices; formula 2.35).** The vortex counting function, a limit of the equivariant instanton counting function, equals an N-fold contour integral of ratios of Γ<sub>1</sub>-functions. The contour encloses only the poles of the factors Γ<sub>1</sub>(a<sub>l</sub> − φ<sub>j</sub>|ω).
- Evaluating residues at φ<sub>j</sub> = a<sub>j</sub> + k<sub>j</sub>ω recovers the sum over vortex numbers term by term.

**Conjecture (higher duality).** The authors expect a higher-dimensional mirror or S-dual description that produces finite-dimensional integral formulas, and with it a higher analogue of the local Archimedean Langlands correspondence. They state this as a hope, not a result.

## Note, then ignore

- Modified Γ. The factor (2π)<sup>−1/2</sup> ω<sup>s/ω − 1/2</sup> in Γ<sub>1</sub> is there to make the functional equation clean. Safe to skip on a first reading.
- ζ-regularisation. The infinite products diverge and are defined through the derivative of a Barnes ζ-function at 0. Trust it and move on.
- Bernoulli terms. The Gauss-type integral for log Γ<sub>r</sub> carries a term with a multiple Bernoulli polynomial and Euler's constant. It is needed for exact equality only. Skip it.
- Only S<sup>1</sup> symmetry in part two. The four-manifolds considered have one circle of isometries, and the two-circle case is left for later work. This does not affect Section 1.
- Arithmetic meaning. Kurokawa's higher L-factors have no agreed arithmetic interpretation yet. The note does not supply one. Safe to leave open.

## One next step

Open the PDF at Section 1.1 and read formulas (1.1) to (1.4) only. Check by hand that Γ<sub>1</sub>(s|ω) / Γ<sub>1</sub>(s + ω|ω) = 1/s.

source: https://www.math.columbia.edu/~okounkov/IPMU_colloq.pdf
slogan: Integrals of Eisenstein series become characteristic classes on a cotangent bundle of a flag variety, and that settles which Eisenstein series enter the spectrum.
basis: the full text

## Before you start

This is a colloquium slide deck for physicists, with many pictures and few formulas. The feeling it may raise is distrust: "slides cannot teach me anything real, I am only skimming." You may feel that and read on anyway. The slides do state one theorem, by Kazhdan and Okounkov, and they prepare it with a worked example for SL(2). If you would like to see why the Riemann zeta function shows up when waves scatter on the space of lattices, this is a gentle route. Treat it as a talk to enjoy. There is nothing to finish.

## The story

Periodic functions live on a torus V/Γ, and exponentials indexed by the dual lattice diagonalise the Laplacian. Replace V by SL(n, ℝ) and Γ by SL(n, ℤ). The quotient is the space of lattices of volume 1, and it is not compact: for n = 2 it has a cusp, where lattices have a very short vector. So the Laplacian has discrete and continuous spectrum mixed. Part of it, the Eisenstein spectrum, comes in from the cusp through explicit functions E(λ, Ω). The question is which λ contribute. Langlands conjectured the answer for every split reductive group over a global field. The unblocking idea: an Eisenstein series counts rational points by height, which is the arithmetic twin of counting holomorphic curves by degree. So the integrals become characteristic classes, and the spectral decomposition becomes a decomposition of a space.

## Main definitions

**Space of lattices.** Points of SL(n, ℝ)/SL(n, ℤ) are lattices Ω ⊂ ℝ<sup>n</sup> of covolume 1. Dividing further by rotations SO(n, ℝ) gives lattices up to isometry.
- For n = 2: the strip |x| ≤ 1/2 above the unit circle, with its sides glued. It has two conical points and one cusp.

**Eisenstein series for SL(2).** E(λ, Ω) is half the sum of ‖ω‖<sup>−(λ+1)</sup> over primitive vectors ω of Ω. Far into the cusp, at distance t, it behaves like e<sup>(1+λ)t/2</sup> + (ξ(λ)/ξ(−λ)) e<sup>(1−λ)t/2</sup>, where ξ is essentially the Riemann zeta function.
- The sum runs over slopes r in ℙ<sup>1</sup>(ℚ), and ‖ω‖ is the height of r with respect to Ω.

**Eisenstein spectrum.** The part of the spectrum of the Laplacian on the quotient that lies in the span of Eisenstein series. The rest consists of bound states, which decay very fast in the cusp and which the slides call mysterious.

**The space X.** X = T\*(<sup>L</sup>G/<sup>L</sup>B), the cotangent bundle of the flag variety of the Langlands dual group <sup>L</sup>G.

## Main results

**Claim (SL(2) over ℚ; Part 3).** The Eisenstein spectrum has two pieces. The functions with λ purely imaginary are almost square-integrable and give the continuous spectrum, with eigenvalues λ<sup>2</sup>/4 − 1/4 at most −1/4. The pole of ξ at λ = 1 has residue the constant function, which is square-integrable.
- Restatement: E(λ) is in the spectrum exactly when diag(λ, −λ) = φ(diag(1, −1)) + X, for a Lie algebra map φ from sl(2, ℂ) to itself and an anti-Hermitian X commuting with the image of φ.
- The two cases are φ the identity with X = 0, and φ = 0 with X = diag(is, −is).

**Theorem (Kazhdan and Okounkov, as announced in the slides).** For an arbitrary split reductive group G over a global field F, the Eisenstein spectrum in L<sup>2</sup>(maximal compact\\G/Γ) is parametrised by homomorphisms φ from SL(2, ℂ) to <sup>L</sup>G(ℂ), as Langlands conjectured. The slides give no further hypotheses and no proof, so take the precise statement from the paper.
- Step 1: translate integrals of the form ∫ ψ Δ<sup>k</sup> ψ′ over G/Γ into integrals of characteristic classes over T\*(<sup>L</sup>B\\<sup>L</sup>G/<sup>L</sup>B).
- Step 2: decompose that space into pieces indexed by nilpotent elements e of the dual Lie algebra, built from fixed loci of e. The spectral decomposition follows this decomposition.

**Claim (metaprinciple; Part 4).** "All" integrals involving Eisenstein series for G can be written as characteristic classes of T\*(<sup>L</sup>G/<sup>L</sup>B). The slides present this as a guiding principle, not a theorem.

## Note, then ignore

- Earlier work. The slides credit results in this direction to Langlands, Mœglin and Waldspurger, Heiermann, and De Martino and Opdam. Useful for a literature search. Safe to skip on a first reading.
- The classes C<sub>1</sub> to C<sub>4</sub>. Four characteristic classes appear in the integral formula, and the slides say their exact form is not important here. Safe to skip.
- Three-dimensional mirror symmetry. It relates curve counts in T\*(G/B) and in the dual space, and motivates the appearance of the dual group. It is context for physicists. Safe to skip.
- The curve "Q". The last slides draw a complex curve imitating a global field, with a strip of length ln p for each prime and a disc for each archimedean place. It is a heuristic picture. Safe to skip.
- The Fermat slide. It recalls that elliptic curves match automorphic functions in Wiles' proof. It is motivation only. Safe to skip.

## One next step

Open the slides at Part 3 and read the two slides that expand E(λ, Ω) in the cusp and split the spectrum at λ ∈ iℝ and λ = 1.

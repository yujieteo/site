source: https://isft2023.sciencesconf.org/data/LTakhtajan.pdf
slogan: Add fermions to a particle on a hyperbolic surface, and the path integral for its heat trace collapses onto closed geodesics, giving Selberg's formula.
basis: the full text

## Before you start

These are conference slides for physicists: path integrals, supercharges, fermion zero modes, and no proofs. The likely feeling is unease, a sense that you cannot check any step. That unease is reasonable, because a slide deck leaves the checking to the two papers behind it. If you want a reason why trace formulas are sums over closed orbits, this talk offers one in a single mechanism. Read it as a story told at a blackboard. Enjoy the Poisson example, and let the rest go.

## The story

Physicists know one way to compute a path integral exactly. If the theory has a supersymmetry, the integral localises on a small set of classical paths. The standard version computes only the Witten index, a supertrace that counts ground states with signs. It gives the Atiyah–Singer index formula. The full partition function Tr e<sup>−βH</sup> seemed out of reach. Takhtajan, reporting joint work with Changha Choi, notes that when the fermions have zero modes the index vanishes, and inserting those zero modes into the supertrace turns it into the ordinary trace. A new localisation rule then applies. The path integral collapses onto classical trajectories, which are closed geodesics. On a circle this gives Poisson summation. On a compact Lie group it gives Eskin's heat kernel formula. On a compact hyperbolic surface it gives the Selberg trace formula.

## Main definitions

**Witten index.** For a supersymmetric quantum system with Hilbert space graded by fermion number F and Hamiltonian H equal to the square of a supercharge, the index is I = Str e<sup>−βH</sup> = Tr (−1)<sup>F</sup> e<sup>−βH</sup>. It is a path integral over periodic paths.

**Fermion zero mode.** The time average χ = (1/β) ∫ ψ(t) dt of a fermion field ψ over the period β. When such modes exist and decouple, the Witten index is 0.

**Localisation.** Let δ be the supersymmetry and V a functional with δ<sup>2</sup>V = 0. Adding λδV to the action does not change the path integral, for every real λ. Letting λ → ∞ concentrates the integral on the zero locus.
- Standard case: the integral localises on constant loops.
- New case: with zero modes χ<sub>1</sub>, …, χ<sub>n</sub> inserted, V must also contain no zero modes, and the integral localises on classical trajectories.

## Main results

**Claim (physics argument; new localisation principle).** Suppose the fermions decouple, have zero modes χ<sub>1</sub>, …, χ<sub>n</sub> whose product is a multiple of (−1)<sup>F</sup>, and the variation of each χ does not involve χ itself. Then the path integral of χ<sub>1</sub>···χ<sub>n</sub> e<sup>−S</sup> is unchanged when S is replaced by S + λδV, for V invariant and free of zero modes. If the fermionic Hamiltonian is 0, this integral equals the bosonic trace Tr e<sup>−βH</sup>.
- Step 1: the inserted zero modes cancel the sign (−1)<sup>F</sup>, so a supertrace becomes a trace.
- Step 2: send λ → ∞ and evaluate on the zero locus of V.

**Claim (physics argument; Poisson summation).** For a free particle on the circle ℝ/2πℤ, localisation on the paths with zero acceleration gives Σ e<sup>−n²β/2</sup> = √(2π/β) Σ e<sup>−2π²n²/β</sup>, both sums over n in ℤ. This is the Jacobi inversion formula.

**Claim (physics argument; Eskin formula).** For a particle on a compact simple Lie group G, the same method gives the heat kernel at a regular point e<sup>h</sup> of the maximal torus as a sum over the lattice Γ = {γ : e<sup>γ</sup> = 1}. Each term is a Gaussian in h + γ times a product over positive roots. Comparing with the expansion in characters gives Eskin's summation formula.

**Claim (physics argument; Selberg trace formula).** Take G = SL(2, ℝ), K = SO(2) and Γ discrete with X = Γ\G/K compact. A sigma model on Γ\G, gauged by K, has partition function Tr e<sup>−iTΔ/2</sup> on L<sup>2</sup>(X). The loop space of Γ\G splits by conjugacy classes of Γ, which gives a pre-trace formula. Localisation computes each class, and after Wick rotation the result is the Selberg trace formula. The slides state that all coefficients match.

## Note, then ignore

- The DeWitt term. Quantising on a group adds a constant multiple of the scalar curvature to the Hamiltonian. It only shifts the exponent. Safe to skip on a first reading.
- Lorentzian time. The hyperbolic case is done in real time T and rotated to β at the end. Safe to skip at first.
- Gauging by K. The model lives on Γ\G, so a gauge field and Wilson lines are needed to reach functions on X. Safe to skip at first.
- Regularised determinants. Factors such as (2π)<sup>ζ(0)</sup> and Pfaffians come from zeta regularisation of the measure. Safe to skip at first.
- Repeated slides. The PDF shows each slide several times as bullets build up. Safe to skip the repeats.

## One next step

Open the slides at "III. Examples, 1. Poisson summation formula" and follow the four lines that end with the Jacobi inversion formula.

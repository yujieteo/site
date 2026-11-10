source: https://www.math.uwo.ca/faculty/khalkhali/files/Nijmegen.pdf
slogan: Quillen's curvature formula for the determinant line bundle survives on the noncommutative two-torus, where a trace on symbols replaces integration.
basis: the full text

## Before you start

These are talk slides. They move fast, and half of them assume you already know pseudodifferential operators and the noncommutative torus. The likely feeling is being lost by slide ten, and a little embarrassed about it. That is a fair response to slides without the speaker. If you would like to see a classical curvature computation redone with no points to stand on, this is a short route. Enjoy the first half. The second half can stay a sketch.

## The story

You want a determinant for a Cauchy-Riemann operator D on a bundle over a Riemann surface. It should be holomorphic in D and vanish exactly when D fails to be invertible. The ζ-regularised determinant of D\*D exists, but its square root is not holomorphic in D. Quillen's way out is a line bundle over the space of all such operators. Its fibre at D is built from ker D and ker D\*. He gave it a metric using the ζ-determinant and showed its curvature is the natural Kähler form on that space. The slides then replace the surface by the noncommutative two-torus A<sub>θ</sub>. Connes' symbol calculus and the canonical trace of Kontsevich and Vishik do the work, and the curvature comes out in the same shape.

## Main definitions

**ζ-regularised determinant.** For Δ = D\*D with eigenvalues λ<sub>i</sub>, set ζ<sub>Δ</sub>(s) = Σ λ<sub>i</sub><sup>−s</sup> for Re(s) large. Assume it continues meromorphically and is regular at 0. Then log det<sub>ζ</sub>(Δ) = −ζ′<sub>Δ</sub>(0).

**Determinant line bundle.** Write λ for the top exterior power. Over the space of Fredholm operators T : H<sub>0</sub> → H<sub>1</sub> there is a line bundle DET with fibre λ(ker T)\* ⊗ λ(ker T\*).
- Step 1: cover the Fredholm operators by sets U<sub>F</sub>, for F finite-dimensional, where Im(T) + F is everything, and put the line λ(T<sup>−1</sup>F)\* ⊗ λ(F) over U<sub>F</sub>.
- Step 2: glue these lines over overlaps.

**Cauchy-Riemann operators on A<sub>θ</sub>.** Fix τ in the upper half plane and set ∂̄ = δ<sub>1</sub> + τδ<sub>2</sub>, where δ<sub>1</sub>, δ<sub>2</sub> are the two basic derivations. The operators studied are ∂̄ + α with α ∈ A<sub>θ</sub>.

**Canonical trace TR.** For a classical pseudodifferential operator on A<sub>θ</sub> of non-integer order, TR is the trace φ<sub>0</sub> applied to the cut-off integral of the symbol. The cut-off integral is the constant term in the expansion of the integral over a ball of radius R as R → ∞.

## Main results

**Theorem (Quillen, as stated on the slides).** There is a holomorphic line bundle DET over the Fredholm operators with the fibres above. Over the index-zero operators, the section that is 1 at invertible T and 0 otherwise is holomorphic.

**Theorem (Quillen, curvature).** Let 𝒜 be the affine space of operators ∂̄ + A on a smooth bundle E over a compact Riemann surface, with A a (0,1)-form valued in End(E). Pull DET back to 𝒜 and give it the metric defined by the ζ-determinant. Then its curvature is the Kähler form ω = ∂̄∂ ‖D − D<sub>0</sub>‖<sup>2</sup> of 𝒜.
- Consequence: multiplying the metric by exp(‖D − D<sub>0</sub>‖<sup>2</sup>) makes it flat, and a flat section gives a holomorphic function det(D, D<sub>0</sub>) on 𝒜.

**Theorem (trace property of TR).** TR is the analytic continuation of the ordinary trace on trace-class operators, and TR(AB) = TR(BA) when the orders of A and B do not sum to an integer.

**Theorem (Fathi, Ghorbanpour and Khalkhali).** For a holomorphic family D<sub>w</sub> = ∂̄ + α<sub>w</sub> of Cauchy-Riemann operators on the noncommutative two-torus, the curvature of the determinant line bundle is given by the second variation δ<sub>w̄</sub>δ<sub>w</sub> ζ′(0) = (1/(4π Im τ)) φ<sub>0</sub>(δ<sub>w</sub>D (δ<sub>w</sub>D)\*).
- Step 1: write ζ(z) = TR(Δ<sup>−z</sup>) and differentiate in w, which gives δ<sub>w</sub>ζ(z) = −z TR(δ<sub>w</sub>Δ Δ<sup>−z−1</sup>).
- Step 2: the second variation reduces to a Wodzicki residue of a term with log Δ, which the symbol calculus evaluates.

## Note, then ignore

- Gauge invariance. The slides say holomorphy and gauge invariance of the determinant cannot both hold, and they drop gauge invariance. Safe to skip on a first reading.
- The trace φ<sub>0</sub>. The slides use it without defining it. Read it as the trace on A<sub>θ</sub> that stands in for integration. Safe to skip.
- Log-polyhomogeneous symbols. Differentiating Δ<sup>−z</sup> in z produces log Δ, which is not a classical symbol, so a wider symbol class is needed. Safe to skip.
- Integer orders. TR is defined only for non-integer order, and at integer order the Wodzicki residue appears as a pole. Safe to skip.
- No proofs. The slides give statements and two short computations only. For proofs you need the paper by the three authors.

## One next step

Open the slides and read only the two slides titled "Regularized determinants" and "The determinant line". They take two minutes and set up everything else.

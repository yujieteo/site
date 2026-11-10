source: https://www.ihes.fr/~maxim/TEXTS/intersection_theory_6.pdf
slogan: Intersection numbers on moduli of curves are sums over ribbon graphs, so one matrix integral computes them all and the KdV equation follows.
basis: the introduction and the main theorem statements

## Before you start

This is a famous paper, a doctoral thesis that proved a conjecture of Witten, and it mixes moduli spaces, Feynman diagrams and integrable systems. Its reputation can raise a fear of being too slow for it. You can feel that and still open it. The central trick is a picture: cut a surface into strips and read off a graph. If you want to see how a hard intersection number turns into a count of graphs, Section 2 gives that in three pages. Stay with the pictures as long as they please you.

## The story

Physicists had two models of two-dimensional quantum gravity. One counts triangulated surfaces through matrix integrals and leads to the KdV equation. The other reduces to intersection numbers of certain line bundles on the compactified moduli space of curves. Witten conjectured that both give the same generating series. The trouble is that intersection numbers on moduli space are hard to compute. Kontsevich uses a theorem of Strebel: a curve with n marked points and n chosen positive numbers carries a unique quadratic differential, and its critical graph is a ribbon graph with edge lengths. So moduli space times ℝ<sub>+</sub><sup>n</sup> becomes a space of metric ribbon graphs, glued from simple cells. The intersection numbers become volumes of these cells. A Laplace transform turns the volumes into a sum over trivalent graphs, and that sum is the Feynman expansion of a matrix integral with a cubic term.

## Main definitions

**Intersection numbers ⟨τ<sub>d<sub>1</sub></sub> ... τ<sub>d<sub>n</sub></sub>⟩.** On the Deligne-Mumford compactification of the moduli space of genus g curves with n marked points, let L<sub>i</sub> be the line bundle whose fibre is the cotangent line of the curve at the i-th point. For d<sub>1</sub> + ... + d<sub>n</sub> = 3g − 3 + n, the number is the integral of the product of the c<sub>1</sub>(L<sub>i</sub>)<sup>d<sub>i</sub></sup>.
- Examples: ⟨τ<sub>0</sub>τ<sub>0</sub>τ<sub>0</sub>⟩ = 1 and ⟨τ<sub>1</sub>⟩ = 1/24.
- Generating series: F(t<sub>0</sub>, t<sub>1</sub>, ...) = ⟨exp(Σ t<sub>i</sub>τ<sub>i</sub>)⟩.

**Ribbon graph with metric.** A finite graph with a cyclic order on the edges at each vertex, all vertices of valency at least 3, and a positive length on each edge. Thicken the edges into ribbons to get a surface of genus g with n holes.

**Jenkins-Strebel differential.** A quadratic differential on a Riemann surface whose non-closed horizontal trajectories have measure zero. Its closed trajectories sweep out discs around the marked points, and the non-closed ones form the critical graph.

**The Gaussian measure dμ<sub>Λ</sub>.** For a positive definite Hermitian N × N matrix Λ, the probability measure on Hermitian matrices X with density proportional to exp(−tr(X<sup>2</sup>Λ)/2). Set t<sub>i</sub>(Λ) = −(2i − 1)!! tr Λ<sup>−(2i+1)</sup>.

## Main results

**Theorem (Strebel and the cell decomposition; Theorems 2.1 and 2.2).** Given a compact connected Riemann surface, n > 0 distinct points with negative Euler characteristic of the complement, and positive numbers p<sub>1</sub>, ..., p<sub>n</sub>, there is a unique Jenkins-Strebel differential whose maximal ring domains are punctured discs around the points with circumferences p<sub>i</sub>. The critical graph gives a bijection from moduli space times ℝ<sub>+</sub><sup>n</sup> to the space of metric ribbon graphs of genus g with n numbered holes.

**Theorem (main identity; Section 3.1).** For positive λ<sub>1</sub>, ..., λ<sub>n</sub>, the sum over d<sub>1</sub> + ... + d<sub>n</sub> = 3g − 3 + n of ⟨τ<sub>d<sub>1</sub></sub> ... τ<sub>d<sub>n</sub></sub>⟩ ∏ (2d<sub>i</sub> − 1)!! / λ<sub>i</sub><sup>2d<sub>i</sub>+1</sup> equals the sum over trivalent ribbon graphs Γ of genus g with n numbered faces of 2<sup>−V(Γ)</sup> / |Aut Γ| times the product over edges e of 2/(λ′ + λ″). Here V is the number of vertices and λ′, λ″ belong to the two faces beside e.
- Step 1: each c<sub>1</sub>(L<sub>i</sub>) is represented by an explicit 2-form in the edge lengths around the i-th face, so the intersection number is a volume of a fibre of the perimeter map.
- Step 2: take the Laplace transform in the perimeters. On each cell the integral is a product of elementary integrals, one per edge.

**Theorem (matrix Airy integral; Theorem 1.1).** The series F(t<sub>0</sub>(Λ), t<sub>1</sub>(Λ), ...) is an asymptotic expansion of log ∫ exp((i/2) tr X<sup>3</sup>) dμ<sub>Λ</sub>(X) as Λ<sup>−1</sup> → 0.

**Theorem (Witten's conjecture; Theorem 1.2).** The series exp(F), in the variables T<sub>2i+1</sub> = t<sub>i</sub>/(2i + 1)!!, is a τ-function for the KdV hierarchy. In particular U = ∂<sup>2</sup>F/∂t<sub>0</sub><sup>2</sup> satisfies the KdV equation ∂U/∂t<sub>1</sub> = U ∂U/∂t<sub>0</sub> + (1/12) ∂<sup>3</sup>U/∂t<sub>0</sub><sup>3</sup>.

## Note, then ignore

- Orbispaces. Moduli space has points with finite automorphism groups, so the paper uses "orbispaces" and rational numbers. Appendix A handles it. Safe to skip on a first reading.
- Extension to the boundary. The graph description is for smooth curves. Theorem 2.3 extends the circle bundles to the compactification, and the author calls its proof quite technical. Safe to skip.
- Orientation and powers of 2. The ratio of the symplectic volume to the edge-length measure is a power of 2, computed in Appendix C. Safe to skip.
- Size of the matrix. For fixed N only t<sub>0</sub>, ..., t<sub>N−1</sub> are independent, so high order terms need large N. Safe to skip.
- Formula caveat. The scanned PDF has no clean text layer. The displayed formulas above follow the standard form of the paper, so check signs against the scan before quoting them. Safe to skip.

## One next step

Open the paper at page 5 and look at Figures 1 and 2 with the paragraph between them: a graph becomes a surface glued from half-infinite strips.

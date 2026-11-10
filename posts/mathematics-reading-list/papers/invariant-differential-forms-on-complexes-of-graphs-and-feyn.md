source: https://arxiv.org/pdf/2101.04419
slogan: Every graph gets convergent integrals built from matrix-group cohomology, and these numbers can prove that a class in the graph complex is non-zero.
basis: the introduction and the main theorem statements

## Before you start

This paper touches graph complexes, Outer space, tropical curves, Borel's work on the general linear group, motives and Feynman integrals, in 54 pages. The likely feeling is shame at not knowing half of them. That feeling can sit beside you while you read. Brown himself marks Section 2.3 as not needed for the rest. If you have wondered why ζ(3) turns up when physicists integrate over a wheel-shaped graph, the answer is on page 10. Read for the pictures first.

## The story

Kontsevich's graph complex is spanned by graphs, and its differential contracts edges. Its homology is hard to compute. In degree zero this is dual to the Grothendieck-Teichmüller Lie algebra, which contains a free Lie algebra with one generator for each odd integer ≥ 3. Nobody had a geometric reason. Brown treats each graph as a simplex of edge lengths and writes differential forms on it. The forms come from the graph Laplacian matrix, by pulling back forms that Borel used for the cohomology of GL<sub>g</sub>. Integrating a form over the simplex gives a number, and the integral always converges. For the wheel with three spokes the first form gives 60ζ(3). A Stokes formula ties these numbers to the differential, so a non-zero number can certify a non-zero homology class.

## Main definitions

**Graph complex GC<sub>N</sub>.** Fix an even integer N. GC<sub>N</sub> is the ℚ-vector space spanned by pairs (G, η). Here G is a connected graph with no tadpoles and no vertices of degree ≤ 2, and η is an ordering of the edges up to even permutation. Reversing η changes the sign. The differential d sends G to the signed sum of the graphs G/e with one edge contracted.
- A graph with an automorphism that permutes its edges oddly is zero. So is any graph with a doubled edge.
- The degree of G is e<sub>G</sub> − N·h<sub>G</sub>, edges minus N times loops.

**Graph Laplacian and graph polynomial.** For a graph G with g loops, Λ<sub>G</sub> is a symmetric g × g matrix whose entries are linear in the edge variables α<sub>e</sub>. It depends on a basis of H<sub>1</sub>(G; ℤ). Its determinant Ψ<sub>G</sub> is the Kirchhoff polynomial, which is positive when all α<sub>e</sub> are positive.

**Canonical forms.** For k ≥ 1 set ω<sub>G</sub><sup>4k+1</sup> = tr((Λ<sub>G</sub><sup>−1</sup> dΛ<sub>G</sub>)<sup>4k+1</sup>). The canonical algebra Ω<sub>can</sub> is the exterior algebra over ℚ on the symbols ω<sup>5</sup>, ω<sup>9</sup>, ω<sup>13</sup>, …

**Canonical integral.** For ω ∈ Ω<sub>can</sub> of degree k and a graph G with k + 1 edges, I<sub>G</sub>(ω) = ∫ ω<sub>G</sub> over the open simplex σ<sub>G</sub> of positive edge lengths, taken up to scale.

## Main results

**Theorem (canonical forms are well defined; Theorem 2.1).** For all k ≥ 1, ω<sub>G</sub><sup>4k+1</sup> is a projective form on projective space minus the graph hypersurface Ψ<sub>G</sub> = 0. It does not depend on the basis of H<sub>1</sub>. Its restriction to the face α<sub>e</sub> = 0 is the form of G/e, and it is invariant under graph isomorphisms. It equals N<sub>G</sub>/Ψ<sub>G</sub><sup>k+1</sup> with N<sub>G</sub> polynomial over ℚ, so the pole has order at most k + 1.
- The pole bound is Theorem 6.3. It comes from many cancellations between numerator and denominator.

**Theorem (finiteness; Theorem 2.2, from Theorem 7.4).** The integral I<sub>G</sub>(ω) is finite for every canonical form ω and every connected graph G with deg ω + 1 edges.
- Step 1: blow up projective space along coordinate subspaces indexed by subgraphs γ. Each exceptional divisor is a product of the spaces for γ and for G/γ.
- Step 2: on that divisor a primitive form splits as (form of γ) ∧ 1 + 1 ∧ (form of G/γ). So it has no pole on the compactified simplex.

**Theorem (Stokes formula; equation (2.10)).** For every canonical form ω and graph G of the right size, 0 = I<sub>dG</sub>(ω) + I<sub>δG</sub>(ω) + I<sub>Δ′G</sub>(Δ′<sub>can</sub>ω). Here d contracts edges, δ deletes edges, and Δ′ is the reduced Connes-Kreimer coproduct, a sum over bridgeless subgraphs γ of γ ⊗ G/γ.
- The three terms are the three kinds of boundary face of the compactified simplex.
- Example 2.3: I<sub>W<sub>3</sub></sub>(ω<sup>5</sup>) = 60ζ(3) for the wheel with three spokes.

**Conjecture (Conjecture 2.5).** There is a non-canonical injective map of graded Lie algebras from the free Lie algebra on Ω<sub>can</sub> into the cohomology of GC<sub>2</sub>. The primitive forms ω<sup>4k+1</sup> generate a Lie subalgebra that lands in degree zero. Everything else lands in positive degree.

## Note, then ignore

- The choice of N. The complexes GC<sub>N</sub> for different even N are isomorphic, and only the grading changes. Brown works with GC<sub>0</sub> and draws tables for GC<sub>2</sub>. Safe to skip on a first reading.
- Three meanings of "marking". The literature uses the word for external half-edges, vertex weights and a basis of the fundamental group. Brown says weighting and framing for the last two. Safe to skip.
- Outer space is not a manifold. The reading of a family of forms as one form on a quotient of Outer space is informal. The definitions work graph by graph. Safe to skip.
- Wheels are conditional. That the canonical integrals of all odd wheels are non-zero is conjectural beyond the computed cases (Remark 2.4). The paper's theorems do not depend on it. Note and move on.
- The conjectured map is not onto. Brown expects graph cohomology to be far larger than the image, since its Euler characteristic seems to grow faster than exponentially (Section 2.11). Safe to skip.

## One next step

Open the paper at page 10 and read Theorem 2.2 and Example 2.3, about eight lines in all.

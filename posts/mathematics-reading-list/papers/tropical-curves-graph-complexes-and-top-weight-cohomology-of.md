source: https://arxiv.org/pdf/1805.10186
slogan: The top weight cohomology of the moduli space of curves is the homology of a space of metric graphs, so graph counting finds new classes.
basis: the introduction and the main theorem statements

## Before you start

The title holds three subjects at once: tropical curves, graph complexes and mixed Hodge theory. That can bring overwhelm, a sense that you would need three courses first. It is fine to feel that. The introduction asks much less than the title suggests. If you want to see a hard question about cohomology of M<sub>g</sub> answered by drawing wheel-shaped graphs, this is the place. Enjoy the picture first. Finishing the paper is a separate matter.

## The story

The rational cohomology of M<sub>g</sub>, the moduli space of genus g curves, is mostly unknown away from the stable range. People expected it to be small near the top degree 4g − 5. Church, Farb and Putman conjectured vanishing there. The obstacle is that no method produced unstable classes. The idea here is to look at the boundary of the compactification by stable curves. Its strata are indexed by graphs. Glue one simplex per graph and you get a space Δ<sub>g</sub> of metric graphs of total length 1. Deligne's weight theory says the homology of Δ<sub>g</sub> is one piece of the cohomology of M<sub>g</sub>. That homology is also Kontsevich's graph complex. Known classes there, starting with wheel graphs, give exponentially many classes in H<sup>4g−6</sup>(M<sub>g</sub>; ℚ). The conjectures fail.

## Main definitions

**Tropical curve and Δ<sub>g</sub>.** A stable tropical curve of genus g is a connected graph with a non-negative integer weight on each vertex and a positive length on each edge, subject to a stability condition. Its genus is the first Betti number plus the sum of the weights. Δ<sub>g</sub> is the space of such curves of total length 1, up to isometry, for g ≥ 2.
- It is the link of the cone point in the tropical moduli space M<sub>g</sub><sup>trop</sup>.
- It is also the dual complex of the boundary divisor in the Deligne-Mumford compactification of M<sub>g</sub>.

**Top weight cohomology.** The rational cohomology of a complex variety of dimension d has Deligne's weight filtration, with graded pieces in weights 0 to 2d. The weight 2d piece is the top weight cohomology. For M<sub>g</sub>, d = 3g − 3, so the top weight is 6g − 6.

**Graph complex G<sup>(g)</sup>.** A rational chain complex spanned by pairs [Γ, ω], where Γ is a connected graph of first Betti number g with all vertices of valence at least 3, and ω is an ordering of the edges. A graph isomorphism changes the sign by the sign of the edge permutation. The boundary is the alternating sum of contractions of non-loop edges.
- Degree: number of vertices minus (g + 1). The wheel graph with g spokes has degree 0.

## Main results

**Theorem (top weight equals tropical; Theorem 1.2).** For g ≥ 2 there is an isomorphism from the top weight piece Gr<sup>W</sup><sub>6g−6</sub> H<sup>6g−6−k</sup>(M<sub>g</sub>; ℚ) to the reduced homology H̃<sub>k−1</sub>(Δ<sub>g</sub>; ℚ).
- Step 1: Δ<sub>g</sub> is the dual complex of a normal crossings boundary, and such a complex computes top weight cohomology.
- Step 2: the isomorphism is induced by a proper map M<sub>g</sub> → M<sub>g</sub><sup>trop</sup> built from hyperbolic geometry.

**Theorem (tropical equals graph complex; Theorem 1.3).** For g ≥ 2, H<sub>k</sub>(G<sup>(g)</sup>) ≅ H̃<sub>2g+k−1</sub>(Δ<sub>g</sub>; ℚ). Together with Theorem 1.2 this gives a surjection H<sup>4g−6−k</sup>(M<sub>g</sub>; ℚ) → H<sub>k</sub>(G<sup>(g)</sup>).
- Step 1: Δ<sub>g</sub> is a "symmetric Δ-complex", so a cellular chain complex computes its rational homology.
- Step 2: a quasi-isomorphism maps those cellular chains to G<sup>(g)</sup>.

**Theorem (non-vanishing; Theorem 1.1).** H<sup>4g−6</sup>(M<sub>g</sub>; ℚ) is non-zero for g = 3, g = 5 and g ≥ 7. Its dimension exceeds β<sup>g</sup> plus a constant for every β &lt; β<sub>0</sub> ≈ 1.3247, the real root of t<sup>3</sup> − t − 1 = 0.
- Step 1: by Willwacher, the dual of the sum over g of H<sub>0</sub>(G<sup>(g)</sup>) is the Grothendieck-Teichmüller Lie algebra.
- Step 2: by Brown, that Lie algebra contains a free Lie algebra with one generator in each odd degree g ≥ 3. Count its dimension.

**Theorem (vanishing; Theorem 1.4).** H<sub>k</sub>(G<sup>(g)</sup>) = 0 for k &lt; 0. This was Willwacher's theorem. The new proof goes the other way, from Harer's virtual cohomological dimension 4g − 5 of M<sub>g</sub> and the known vanishing of H<sup>4g−5</sup>.

## Note, then ignore

- Two graph complexes. Kontsevich has an "even" and an "odd" version that differ by signs. This paper uses the one tied to Grothendieck-Teichmüller. Safe to skip at first.
- Grading conventions. Authors grade graphs differently. The paper picks the shift that puts wheels in degree 0. Skip the bookkeeping.
- Symmetric Δ-complexes. Simplices can be glued to themselves by permutations, so Δ<sub>g</sub> is not an ordinary Δ-complex. Section 3 handles this. Ignore it on a first reading.
- Stacks. M<sub>g</sub> is a Deligne-Mumford stack over ℂ. With rational coefficients this does not change the story.
- Genus g versus 2g. Kontsevich's older link relates genus g curves to genus 2g graphs through ribbon graphs. It is a different relation. Skip it.

## One next step

Open the paper at Example 2.5 and look at Figure 1, the wheel graph W<sub>5</sub>, with the short argument that it is a cycle.

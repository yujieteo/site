source: https://arxiv.org/pdf/math/0311149
slogan: Teichmüller space is the positive part of an algebraic moduli space, so total positivity extends it from 2×2 matrices to any split group.
basis: the introduction and the main theorem statements

## Before you start

The paper runs to more than 200 pages, and the introduction alone is over 30. Overwhelm is the likely feeling, and it makes sense at this size. You can feel it and still open page 1. If you want to see how a cross-ratio on a triangulated surface grows into a theory for every split group, the introduction gives you that in one sitting. Enjoy the PGL<sub>2</sub> example first. Nobody reads this one cover to cover on a first pass.

## The story

Teichmüller space parametrises hyperbolic metrics on a surface S, or equally the discrete faithful representations π<sub>1</sub>(S) → PSL<sub>2</sub>(ℝ). Discreteness is not an algebraic condition, so the subject sat in analysis and geometry. Fock and Goncharov make it algebraic, and replace PSL<sub>2</sub> by a split semisimple group G. For a surface with holes they add a little data to a local system: a flag near each hole. The new moduli space is rational. An ideal triangulation gives coordinates, and changing the triangulation changes coordinates by formulas with no minus signs. So "all coordinates positive" does not depend on the chart. The positive real points form the higher Teichmüller space. For PGL<sub>2</sub> the coordinates are cross-ratios of four points on ℙ<sup>1</sup>, one for each edge.

## Main definitions

**Framed and decorated local systems.** Let S be a compact oriented surface with n holes and some marked boundary points, written Ŝ. A framed G-local system is a G-local system L on S with a flat section of the flag bundle L/B over the punctured boundary. These form the moduli space 𝒳<sub>G,Ŝ</sub>. A decorated one has a flat section of L/U instead, with U = [B, B]. These form 𝒜<sub>G,Ŝ</sub>.
- 𝒳: G has trivial centre.
- 𝒜: G is simply connected.

**Positive configuration of flags.** A k-tuple of flags is positive if it can be written as (B<sup>+</sup>, B<sup>−</sup>, u<sub>1</sub>·B<sup>−</sup>, u<sub>1</sub>u<sub>2</sub>·B<sup>−</sup>, …) with each u<sub>i</sub> a totally positive element of U<sup>+</sup>, in Lusztig's sense (Definition 1.4).
- PGL<sub>2</sub>: points on the circle in cyclic order.

**Positive atlas.** A family of birational maps from split tori to a variety X whose transition maps are subtraction-free rational functions (Definition 1.7). Then X(ℝ<sub>&gt;0</sub>) makes sense: the real points with positive coordinates in one chart, hence in all.
- The same works for any semifield, for example the tropical semifields ℤ<sup>t</sup>, ℚ<sup>t</sup>, ℝ<sup>t</sup>, where (×, +) become (+, max).

**Higher Teichmüller spaces.** The sets of ℝ<sub>&gt;0</sub>-points of 𝒳<sub>G,Ŝ</sub> and of 𝒜<sub>G,Ŝ</sub> (Definition 1.8). The tropical points are the lamination spaces.

## Main results

**Theorem (decomposition; Theorem 1.1).** Let G have trivial centre and let T be an ideal triangulation of Ŝ. Restricting a framed local system to each triangle and reading one invariant in the Cartan group H on each internal edge gives a birational isomorphism from 𝒳<sub>G,Ŝ</sub> to a product of triangle spaces and copies of H. So 𝒳<sub>G,Ŝ</sub> is rational.
- PGL<sub>2</sub>: the triangle space is a point and H = 𝔾<sub>m</sub>. The edge invariant is a cross-ratio.

**Theorem (positivity; Theorems 1.4 and 1.5).** Let G be split semisimple and simply connected, G′ its adjoint group, and n &gt; 0. Then 𝒳<sub>G′,Ŝ</sub> and 𝒜<sub>G,Ŝ</sub> each have a positive atlas that is equivariant for the mapping class group. For PGL<sub>m</sub> and SL<sub>m</sub> the atlas is regular: the charts are open embeddings.
- Step 1: Lusztig's positive atlas on U<sup>+</sup> gives one on triples of flags, and the group S<sub>3</sub> acts on it by positive maps (Theorem 5.2).
- Step 2: check that a change of triangulation is a positive map.

**Theorem (positive representations; Theorems 1.9 and 1.10).** The monodromy of a positive local system on a surface with boundary is faithful. Around every non-trivial non-boundary loop it is positive hyperbolic. For GL<sub>n</sub> that means distinct positive real eigenvalues. For split real G with trivial centre the image is discrete.
- The summary states the same for closed surfaces, and that the space of positive representations is a topologically trivial domain of dimension −χ(S)·dim G.

**Theorem (the classical case; Theorem 1.7).** For a hyperbolic surface with n &gt; 0 holes, the positive part of 𝒳 for PGL<sub>2</sub> is the Teichmüller space with oriented boundary components, and the positive part of 𝒜 for SL<sub>2</sub> is Penner's decorated Teichmüller space. Both are ℝ<sup>6g−6+3n</sup>.

## Note, then ignore

- The element s<sub>G</sub>. For simply connected G with s<sub>G</sub> ≠ e, such as SL<sub>2k</sub>, the definition of 𝒜 needs a twist. The introduction leaves this case out. Safe to skip on a first reading.
- Stacks. The moduli spaces are stacks over ℚ, and only their generic parts are varieties. The coordinates live on the generic part. Safe to skip.
- Duality. The claim that 𝒜 for G and 𝒳 for the Langlands dual group are dual, with canonical bases, is a conjecture. The paper constructs the basis only for SL<sub>2</sub> and PGL<sub>2</sub>. Safe to skip at first.
- Cluster ensembles. The pair (𝒳, 𝒜) forms an "orbi-cluster ensemble", worked out for SL<sub>m</sub> in Section 10 and in a companion paper. Safe to skip.
- Hitchin's component. For closed S, Hitchin found a related component by other methods. Section 1.11 compares them. Safe to skip.

## One next step

Open the paper at the Example after Theorem 1.1 (page 12) and read the PGL<sub>2</sub> cross-ratio construction with Figure 1.3.

source: https://arxiv.org/pdf/math/0307303
slogan: Differential forms are functions on the space of odd curves, so odd surfaces give gorms, with two differentials and an integral computing the Euler characteristic.
basis: the introduction and the main theorem statements

## Before you start

The paper asks you to accept supermanifolds and odd coordinates from the first page, and the likely feeling is unease: am I allowed to compute with things I cannot picture? That unease is normal, and you can keep it while you read. If you have wondered where the de Rham differential and the degree of a form come from, Section 3 gives a two-page answer. The title is a joke and the authors write in that spirit. Read Sections 2 and 3 for enjoyment. The other sections can come later, or never.

## The story

Differential forms on a manifold M can be seen as functions on a supermanifold, the odd tangent bundle ΠTM. The authors start from a sharper fact: ΠTM is the space of all maps from the odd line ℝ<sup>0|1</sup> to M. The odd line has very few symmetries, namely translations and scalings. Translation acts on forms as the de Rham differential d. Scaling acts as the degree. So the de Rham complex is nothing but the action of Diff(ℝ<sup>0|1</sup>). This suggests replacing the odd line by the odd plane ℝ<sup>0|2</sup>. Functions on the space of maps ℝ<sup>0|2</sup> → M are called gorms. They carry two commuting differentials, an action of 2 × 2 matrices, and two extra operators that have no analogue for forms. Gorms can be integrated, and the integral of a closed gorm is a multiple of the Euler characteristic.

## Main definitions

**Differential gorms.** The algebra Ω<sub>[2]</sub>(M) is the universal graded-commutative bidifferential algebra containing C<sup>∞</sup>(M). A bidifferential algebra is a bicomplex with a compatible product, with differentials d<sub>1</sub> and d<sub>2</sub>.
- In coordinates x<sup>i</sup>: it is freely generated over functions by d<sub>1</sub>x<sup>i</sup>, d<sub>2</sub>x<sup>i</sup> and d<sub>1</sub>d<sub>2</sub>x<sup>i</sup>, of bidegrees (1,0), (0,1) and (1,1).
- As functions: gorms are the functions on (ΠT)<sup>2</sup>M, the supermanifold of all maps ℝ<sup>0|2</sup> → M.

**Differential worms of level n.** The same with n differentials. Equivalently, functions on the space of maps ℝ<sup>0|n</sup> → M. Forms are the case n = 1.

**Pseudodifferential gorm.** A smooth function on (ΠT)<sup>2</sup>M, which may depend non-polynomially on the even generators d<sub>1</sub>d<sub>2</sub>x<sup>i</sup>. Integration of gorms is the Berezin integral over all coordinates, and it needs such functions to converge.
- Example on M = ℝ: the integral of exp(−x<sup>2</sup> − (d<sub>1</sub>d<sub>2</sub>x)<sup>2</sup>) d<sub>1</sub>x d<sub>2</sub>x equals π.

## Main results

**Claim (forms from the odd line; Section 3.2).** Under the identification of Ω(M) with functions on ΠTM, the action of Diff(ℝ<sup>0|1</sup>) is equivalent to the de Rham differential together with the grading by degree. Cartan's formula L<sub>v</sub> = d i<sub>v</sub> + i<sub>v</sub> d is a commutator relation in a larger group that acts on the mapping space.

**Claim (symmetries of gorms; Section 4.1).** The Lie algebra of vector fields on ℝ<sup>0|2</sup> acts on gorms. It contains the two differentials d<sub>a</sub>, four operators E<sub>a</sub><sup>b</sup> that generate an action of gl(2), and two new operators R<sub>1</sub>, R<sub>2</sub>.
- Case: the cohomology of gorms with respect to d<sub>1</sub> or d<sub>2</sub> is the de Rham cohomology of M (Section 4.3).
- Case: the cohomology with respect to R<sub>1</sub> is Ω(M) itself (Section 4.3).

**Theorem (Euler characteristic; Section 6, formula (4)).** Let M be compact and connected of dimension m, and let γ be an integrable pseudodifferential gorm with d<sub>1</sub>γ = d<sub>2</sub>γ = 0. Then γ restricts to a constant on M, and ∫γ = (γ|<sub>M</sub> / 2) (−π)<sup>m/2</sup> S<sub>m</sub> χ(M), where S<sub>m</sub> is the area of the unit m-sphere.
- Step 1: for a Riemannian metric b put β = b<sub>ij</sub> d<sub>1</sub>x<sup>i</sup> d<sub>2</sub>x<sup>j</sup> and γ = exp(d<sub>1</sub>d<sub>2</sub>β). The integral reduces to the Pfaffian of the curvature.
- Step 2: a Stokes argument shows that only the constant γ|<sub>M</sub> matters.

**Claim (generalised spaces; Section 7).** For a contravariant functor F on supermanifolds, viewed as a generalised space, the forms on F are the functions on F(ℝ<sup>0|1</sup>), and gorms are the functions on F(ℝ<sup>0|2</sup>). The authors say this gives a short account of equivariant de Rham theory. I did not check the statements of Section 7 beyond this.

## Note, then ignore

- Not tensors. The generator d<sub>1</sub>d<sub>2</sub>x<sup>i</sup> transforms with second derivatives of the coordinate change. Gorms belong to second order geometry. Safe to skip on a first reading.
- Minus signs. Formulas such as (∂<sub>θ</sub>)<sup>♭</sup> = −d carry signs because the natural action is a right action. Safe to skip.
- Infinite dimensions. The authors treat mapping spaces as if finite-dimensional, which is true for odd sources. Safe to skip.
- Level 3 and above. The representation theory of Diff(ℝ<sup>0|n</sup>) is wild for n ≥ 3, by a result of Shomron that the paper cites, so the decomposition of worms stays open. Safe to skip.
- Stokes for gorms. The Berezin integral is invariant under Diff(ℝ<sup>0|2</sup>), which gives ∫u<sup>♭</sup>α = 0 for every vector field u on ℝ<sup>0|2</sup>. For forms the integral is only d-invariant. Safe to skip.

## One next step

Open the paper at Section 3.1 on page 4 and read the Taylor expansion x(θ) = x + θξ and the three lines after it, where ξ turns into dx.

source: https://arxiv.org/pdf/1312.2007
slogan: A scattering amplitude is the volume form of a region cut out by positive minors, so Feynman diagrams become triangulations of one shape.
basis: the introduction and the main theorem statements

## Before you start

This paper has a famous name and a physics vocabulary: superamplitudes, momentum twistors, BCFW recursion. You may feel shut out, as if the paper belongs to people with a field theory course behind them. That feeling is fair, and you can let it sit there. The geometry itself starts with the inside of a triangle. If you want to see how positive minors can replace diagrams, read for the pictures first. Finishing comes second.

## The story

Physicists compute gluon scattering by summing Feynman diagrams. The diagrams make locality and unitarity visible, but the sums are huge and the answers are short. In planar N = 4 super Yang-Mills the answers also carry an infinite-dimensional Yangian symmetry that no diagram shows. Earlier work built amplitudes from cells of the positive Grassmannian, but had to impose locality and unitarity by hand to know which cells to add. Hodges saw that the simplest tree amplitudes are volumes of a polytope. The authors extend that picture to every case. Start from a convex polygon: all positive combinations of its vertices. Replace points by k-planes and positive numbers by positive matrices. The result is one region, and the amplitude is its canonical form. Different diagram expansions are different triangulations.

## Main definitions

**Positive Grassmannian G<sub>+</sub>(k, n).** The set of k × n real matrices C, taken modulo GL(k), whose ordered maximal minors are all positive. For k = 1 it is the inside of a simplex in projective space.

**Tree amplituhedron A<sub>n,k,m</sub>(Z).** Fix a (k+m) × n matrix Z with all ordered maximal minors positive, and n ≥ k + m. The amplituhedron is the set of k-planes Y = C·Z in G(k, k+m), where C runs over G<sub>+</sub>(k, n).
- Case k = 1, m = 2: a convex polygon with vertices Z<sub>1</sub>, …, Z<sub>n</sub>.
- Case m = 4: the case for physics. It has dimension 4k and is a polytope only when k = 1.

**Loop amplituhedron A<sub>n,k,L</sub>(Z).** Add L two-planes D<sub>(1)</sub>, …, D<sub>(L)</sub> in the complement of C. Require positivity of the ordered maximal minors of C stacked with any subset of the D<sub>(i)</sub>. The amplituhedron is the image of this data under multiplication by Z: a k-plane Y with L two-planes in its 4-dimensional complement.

**Canonical form Ω.** A rational top-degree form on the amplituhedron with logarithmic singularities on all its boundaries.
- For a triangle with coordinates Y = Z<sub>3</sub> + α<sub>1</sub>Z<sub>1</sub> + α<sub>2</sub>Z<sub>2</sub> it is dα<sub>1</sub>dα<sub>2</sub>/(α<sub>1</sub>α<sub>2</sub>).
- In general, cut the region into cells with positive coordinates α<sub>i</sub> and add the forms Π dα<sub>i</sub>/α<sub>i</sub>.

## Main results

**Claim (boundaries from positivity; Section 4, equation 4.5).** For m = 4 the bracket ⟨Y Z<sub>i</sub> Z<sub>i+1</sub> Z<sub>j</sub> Z<sub>j+1</sub>⟩ is positive on the tree amplituhedron. So Y always has full rank k, and the codimension-one boundaries lie where one of these brackets goes to zero.
- Step 1: expand the bracket as a sum over minors of C times minors of Z.
- Step 2: for consecutive pairs every term in the sum is positive.

**Conjecture (amplitude from the form; Sections 7 and 10).** The tree superamplitude and the L-loop integrand of planar N = 4 super Yang-Mills come from Ω by setting Y to a fixed reference plane and integrating out auxiliary Grassmann variables. The authors state this as a conjecture that has passed many checks. It is not proved in the paper.

**Claim (BCFW terms are cells; Section 5, checked on examples).** The terms of the BCFW recursion correspond to 4k-dimensional cells of G<sub>+</sub>(k, n). The authors report extensive checks that their images do not overlap and cover the tree amplituhedron.
- Case k = 1: the cells (1, i, i+1, j, j+1) with i &lt; j give the known formula for NMHV tree amplitudes.
- Loop case: for n = 6, k = 1, L = 1 the 16 BCFW terms tile the space.

**Claim (locality and unitarity; Section 11).** The poles of Ω sit on the boundaries of the amplituhedron, which are exactly the poles that locality allows. On such a boundary the positive matrix C splits into a left block and a right block, which gives the factorisation that unitarity demands. This is a physics argument given in outline.

## Note, then ignore

- "Positive" also means non-negative. The authors use one word for the open region and its closure. Safe to skip on a first reading.
- Twisted cyclic symmetry. Moving the first column to the end costs a sign (−1)<sup>k−1</sup>, so the amplituhedron is cyclically invariant only for even m. Safe to skip.
- Grassmann variables. The geometry is purely bosonic, and supersymmetry enters only when the amplitude is read off from Ω. You can skip Section 7 at first.
- Momentum twistors. These are the coordinates that turn particle momenta into the columns of Z. The Notation paragraph defines them. Safe to skip if you only want the geometry.
- Integrand, not integral. At loop level the form is the integrand of the amplitude, before the loop integration. The paper does not integrate it. Safe to skip.

## One next step

Open the paper at Section 3 (pages 6 to 8) and read from the polygon picture down to the sentence that names the generalised tree amplituhedron.

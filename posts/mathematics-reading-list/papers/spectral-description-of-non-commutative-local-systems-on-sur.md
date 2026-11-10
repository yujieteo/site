source: https://arxiv.org/pdf/2108.04168
slogan: A rank m local system with flags on a surface is a line bundle on a graph, even when the scalars do not commute.
basis: the introduction and the main theorem statements

## Before you start

The title stacks "non-commutative", "cluster varieties" and "spectral", and the paper runs to 98 pages with stacks of dg-sheaves near the end. The likely feeling is shame at missing the cluster background. You may feel that, and it says nothing about whether you can read the first section. Section 1.1 is self-contained linear algebra over a skew field, with proofs and pictures. If you like seeing a hard-looking object turn into a drawing, it is there. Enjoy the honeycomb graph first. The cluster machinery is optional.

## The story

Fock and Goncharov gave coordinates on moduli of local systems on a surface with flags at the punctures. The coordinates are ratios of determinants, so they need a commutative field. Over a skew field R, such as the quaternions, there are no determinants, and conjugation spoils any hope of canonical numbers. The idea here is to stop asking for numbers. Three generic flags A, B, C in R<sup>m</sup> cut out lines A<sup>a</sup> ∩ B<sup>b</sup> ∩ C<sup>c</sup>. These lines sit on the vertices of a honeycomb graph drawn in a triangle, and neighbouring lines are canonically isomorphic. So the triple of flags is the same thing as a flat line bundle on the graph. Glue triangles and you describe local systems on a whole surface. Changing the triangulation changes the graph by local moves, and that is a non-commutative cluster structure.

## Main definitions

**Generic triple of flags.** A flag in an m-dimensional left R-vector space V is a chain V = F<sup>0</sup> ⊃ F<sup>1</sup> ⊃ … ⊃ F<sup>m</sup> = 0 with codim F<sup>i</sup> = i. A triple (A, B, C) is generic if V → V/A<sup>a</sup> ⊕ V/B<sup>b</sup> ⊕ V/C<sup>c</sup> is an isomorphism whenever a + b + c = m.

**The graph Γ<sub>m</sub> and flat line bundles.** Cut each side of a triangle into m equal parts and tile it by small triangles of two kinds. Γ<sub>m</sub> is the dual graph. It is bipartite, with white and black vertices. A flat R-line bundle on a graph assigns a one-dimensional R-space to each vertex and an isomorphism to each edge.
- White vertices: triples with a + b + c = m − 1, carrying the line A<sup>a</sup> ∩ B<sup>b</sup> ∩ C<sup>c</sup>.
- Black vertices: triples with a + b + c = m − 2, carrying the kernel of the sum map from the three neighbouring lines to the plane A<sup>a</sup> ∩ B<sup>b</sup> ∩ C<sup>c</sup>.

**Framed and decorated local systems.** A framed R-local system on a decorated surface S is a local system of finite-dimensional R-vector spaces with a flat section of the associated flag local system near each marked point. The groupoid of rank m ones is X<sub>m,S</sub>. A decorated flag also carries a non-zero vector in each successive quotient, and decorated local systems form A<sub>m,S</sub>.

**Zig-zag path.** A path on a ribbon graph that turns left and right alternately at successive vertices. Γ<sub>m</sub> has 3m of them.

## Main results

**Theorem (triples of flags; Theorem 1.2).** For a skew field R there is a canonical equivalence between the groupoid of generic triples of flags in m-dimensional R-vector spaces and the groupoid of flat R-line bundles on Γ<sub>m</sub>.
- Step 1: from flags to a line bundle, by the intersections above.
- Step 2: back again. V is the cokernel of the map from the sum of lines at internal black vertices to the sum of lines at white vertices. The distance to a corner of the triangle filters this cokernel and gives the flag at that corner.

**Theorem (surfaces glued from triangles; Theorem 1.8).** Let S be glued from triangles edge to edge with vertices deleted. It may be singular or non-orientable. Then X<sub>m,S</sub> is equivalent to the groupoid of flat line bundles on the glued graph Γ<sub>m</sub>(T). Also A<sub>m,S</sub> is equivalent to flat line bundles on Γ<sub>m</sub>(T) trivialised along every zig-zag. The local systems here are the generic ones for the triangulation.

**Theorem (spectral description; Theorem 1.11).** Let Γ be a GL<sub>m</sub>-graph on a decorated surface S, homotopy equivalent to S, with spectral surface Σ<sub>Γ</sub>. There is a canonical open embedding of the groupoid of flat R-line bundles on Σ<sub>Γ</sub> into X<sub>m,S</sub>.
- Step 1: identify both sides with moduli of admissible dg-sheaves attached to a family of cooriented curves on S.
- Step 2: an isotopy from the zig-zags of Γ to m small loops around each puncture gives the embedding. Two by two moves of graphs give the non-commutative cluster transformations between charts.

**Theorem (Laurent property; Theorem 1.9).** Each matrix entry of the monodromy of a framed local system along a loop is a finite signed sum of monodromies of the line bundle along paths on Γ<sub>m</sub>(T). In the decorated case each term is a product of edge coordinates Δ<sub>E</sub> and their inverses.

## Note, then ignore

- Left modules. An R-vector space means a free left R-module. This fixes the side on which scalars act. Safe to skip on a first reading.
- No canonical coordinates. For commutative R the monodromies around the holes of Γ<sub>m</sub> are the Fock-Goncharov triple ratios. For skew R they are defined only up to conjugation. Safe to skip.
- Quasideterminants. In the decorated case the edge coordinates are ratios of Gelfand-Retakh quasideterminants (Proposition 1.7). You need this only to compare with other papers. Safe to skip.
- Duality. The dual of a generic triple of flags need not be generic, so the paper avoids dualising. Safe to skip.

## One next step

Open the PDF at page 4 and look at Figure 1, the graphs Γ<sub>2</sub> and Γ<sub>3</sub>. Then read the statement of Theorem 1.2 on page 5.

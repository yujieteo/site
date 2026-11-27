### Metric bisection gives a parabola

**Remember:** Shift the tangent by one radius to get the directrix.

*True by definition.* MSC 01A20 (History of Greek and Roman mathematics), 51M04. arXiv math.HO, math.MG. Level 2: later undergraduate.

**Definition.** Consider a circle and its tangent line. Their horn-angle bisector consists of points in the circle’s closed half-plane and outside its open disk whose distances to circle and line agree.

**Problem.** The metric bisector is a parabola. Its focus is the circle’s center and its directrix is the tangent shifted one radius away from the circle.

**How the definition helps.** For each bisector point, adding the radius to both distances gives equal distances to the center and shifted line (our own derivation). Conversely, let y denote signed height above the tangent toward the center, and r the radius. On the focus-directrix parabola, equating squared distances gives x² = 4ry in coordinates centered at contact. Thus y ≥ 0, and the center distance y + r puts the point outside the open disk.

**Paper or page:** [Bisecting horn angles](https://arxiv.org/abs/2206.09499v1). It says: “The metric bisector of a horn angle formed by a circle and a tangent is the parabola with focus at the center of the circle, focal distance equal to the circle’s radius, and directrix parallel to the tangent.”

**Sources:**

- [Sergiy Koshkin, Bisecting horn angles](https://arxiv.org/abs/2206.09499v1)

### Shape symmetries move by conjugation

**Remember:** Carry a shape’s symmetries along with the shape.

*True by definition.* MSC 01A55 (History of mathematics in the 19th century), 51N25. arXiv math.HO, math.GR. Level 2: later undergraduate.

**Definition.** In his 1872 Erlangen program, Klein described a geometry by choosing a group of allowed transformations and studying what they preserve. For a given shape, its stabilizer consists of the allowed transformations that carry the whole shape onto itself.

**Problem.** Suppose g is an allowed transformation taking shape A onto shape B. The symmetries of B are exactly the transformations g h g⁻¹ for symmetries h of A.

**How the definition helps.** Choosing one group for the geometry lets us relate the symmetries of two shapes by a formula inside that group. In our own proof, g⁻¹ takes B back to A, h preserves A, and g returns A to B. Thus g h g⁻¹ preserves B. Applying the same argument to g⁻¹ accounts for every symmetry of B.

**nLab:** [Klein geometry](https://ncatlab.org/nlab/show/Klein+geometry). It says: “by which the geometric properties of configurations in space remain entirely unchanged”

**Sources:**

- [Felix Klein, Vergleichende Betrachtungen über neuere geometrische Forschungen (1872, journal publication 1893)](https://doi.org/10.1007/BF01446615)

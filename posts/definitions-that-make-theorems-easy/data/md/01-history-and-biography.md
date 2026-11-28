### Metric bisection gives a parabola

**Remember:** Add the radius to both distances to get a focus and directrix.

*True by definition.* MSC 01A20 (History of Greek and Roman mathematics), 51M04. arXiv math.HO, math.MG. Level 2: later undergraduate.

**Definition.** The bisector of the horn angle between a circle and a tangent line is the set of points equally far from the circle and the line, taken in the circle's closed half-plane and outside its open disk. For such a point, the distance to the circle is the distance to the center minus the radius.

**Problem.** The metric bisector is a parabola. Its focus is the circle’s center and its directrix is the tangent shifted one radius away from the circle.

**How the definition helps.** Adding the radius to both distances makes the point equally far from the center and from the tangent shifted one radius away (our own derivation). Conversely, with origin at the contact point, y the signed height toward the center and r the radius, the parabola is x² = 4ry. So y ≥ 0, and the center distance y + r puts the point outside the open disk.

**Paper or page:** [Bisecting horn angles](https://arxiv.org/abs/2206.09499v1). It says: “The metric bisector of a horn angle formed by a circle and a tangent is the parabola with focus at the center of the circle, focal distance equal to the circle’s radius, and directrix parallel to the tangent.”

**Sources:**

- [Sergiy Koshkin, Bisecting horn angles](https://arxiv.org/abs/2206.09499v1)

### Shape symmetries move by conjugation

**Remember:** Carry a shape’s symmetries along with the shape.

*True by definition.* MSC 01A55 (History of mathematics in the 19th century), 51N25. arXiv math.HO, math.GR. Level 2: later undergraduate.

**Definition.** A geometry, in Klein's Erlangen program, fixes one group of allowed transformations. The symmetries of a shape are the allowed transformations that carry the whole shape onto itself.

**Problem.** Suppose g is an allowed transformation taking shape A onto shape B. The symmetries of B are exactly the transformations g h g⁻¹ for symmetries h of A.

**How the definition helps.** All transformations lie in one group, so g h g⁻¹ is allowed and can be tested on B. g⁻¹ takes B to A, h keeps A, and g returns A to B, so g h g⁻¹ preserves B (our own proof). The same argument with g⁻¹ shows that every symmetry of B has this form.

**nLab:** [Klein geometry](https://ncatlab.org/nlab/show/Klein+geometry). It says: “by which the geometric properties of configurations in space remain entirely unchanged”

**Sources:**

- [Felix Klein, Vergleichende Betrachtungen über neuere geometrische Forschungen (1872, journal publication 1893)](https://doi.org/10.1007/BF01446615)

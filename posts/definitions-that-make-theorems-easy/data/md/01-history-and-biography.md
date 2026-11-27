### Metric bisection gives a parabola

**Remember:** Shift the tangent by one radius to get the directrix.

*True by definition.* MSC 01A20 (History of Greek and Roman mathematics), 51M04. arXiv math.HO, math.MG. Level 2: later undergraduate.

**Definition.** A circle and its tangent form a horn angle at their point of contact. On the circle’s side of the tangent, include the boundary and consider points outside or on the disk. Its metric bisector consists of those points equally distant from the circle and the tangent.

**Problem.** The metric bisector is a parabola. Its focus is the circle’s center and its directrix is the tangent shifted one radius away from the circle.

**How the definition helps.** Equal distances turn the bisector into a parabola by its focus and directrix definition (our own derivation). Move the tangent outward by one radius. Adding that radius to both original distances gives the distances to the center and to the shifted line. These are the fixed point and line that define the parabola. Conversely, a point equally distant from the center and shifted line lies on the circle’s side of the original tangent, including the tangent itself. Subtracting the radius recovers the original equality. Ordinary angle bisection sees only coincident tangent rays at contact.

**Paper or page:** [Bisecting horn angles](https://arxiv.org/abs/2206.09499v1). It says: “The metric bisector of a horn angle formed by a circle and a tangent is the parabola with focus at the center of the circle, focal distance equal to the circle’s radius, and directrix parallel to the tangent.”

**Sources:**

- [Sergiy Koshkin, Bisecting horn angles](https://arxiv.org/abs/2206.09499v1)

### Shape symmetries move by conjugation

**Remember:** Carry a shape’s symmetries along with the shape.

*Makes the theorem clean to state or prove.* MSC 01A55 (History of mathematics in the 19th century), 51N25. arXiv math.HO, math.GR. Level 2: later undergraduate.

**Definition.** In his 1872 Erlangen program, Klein described a geometry by choosing a group of allowed transformations and studying what they preserve. For a given shape, its stabilizer consists of the allowed transformations that carry the whole shape onto itself.

**Problem.** Suppose g is an allowed transformation taking shape A onto shape B. The symmetries of B are exactly the transformations g h g⁻¹ for symmetries h of A.

**How the definition helps.** Choosing one group for the geometry lets us relate the symmetries of two shapes by a formula inside that group. In our own proof, g⁻¹ takes B back to A, h preserves A, and g returns A to B. Thus g h g⁻¹ preserves B. Applying the same argument to g⁻¹ accounts for every symmetry of B.

**nLab:** [Klein geometry](https://ncatlab.org/nlab/show/Klein+geometry). It says: “by which the geometric properties of configurations in space remain entirely unchanged”

**Sources:**

- [Felix Klein, Vergleichende Betrachtungen über neuere geometrische Forschungen (1872, journal publication 1893)](https://doi.org/10.1007/BF01446615)

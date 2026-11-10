source: https://arxiv.org/pdf/0804.1654
slogan: A Dedekind zeta value of a totally real field is the volume of a hyperbolic manifold, and that manifold is a mixed Tate motive.
basis: the introduction and the main theorem statements

## Before you start

Forty pages that mix hyperbolic geometry, arithmetic groups and mixed Tate motives can raise a quiet shame: "I do not know all three, so I have no business here." That feeling is allowed. Nobody arrives knowing all three. If you want to see a zeta value turn into something you can cut into simplices, this paper shows it. Read for the picture first. Finishing can wait.

## The story

Zagier computed ζ<sub>K</sub>(2) by measuring the volume of a hyperbolic 3-manifold in two ways. The arithmetic side gives a zeta value. A triangulation by geodesic simplices gives a sum of dilogarithms. Goncharov then showed that a hyperbolic manifold of odd dimension defines a mixed Tate motive over the algebraic numbers, and that its volume is a regulator. Two things stayed out of reach: the simplices lived over an extension of the field, and nothing forced the answer to be a determinant. Brown joins the two approaches. For a totally real field k and odd n ≥ 3, an arithmetic group acts on a product of [k:ℚ] hyperbolic spaces. The quotient can be triangulated by products of simplices defined over k. The resulting motive is the determinant of the whole extension group, and its period is ζ<sub>k</sub>\*(1−n) up to a rational number.

## Main definitions

**Mixed Tate motives MT(k).** An abelian tensor category over a number field k whose simple objects are the Tate motives ℚ(n). Its extension groups are fixed by K-theory: Ext<sup>1</sup>(ℚ(0), ℚ(n)) ≅ K<sub>2n−1</sub>(k) ⊗ ℚ for n ≥ 1, and higher Ext groups vanish.
- By Borel, for n > 1 this group has dimension r<sub>1</sub> + r<sub>2</sub> if n is odd and r<sub>2</sub> if n is even.
- For k totally real it has dimension [k:ℚ] for odd n and is zero for even n.

**Quadric motive.** Take a smooth quadric Q in ℙ<sup>2n−1</sup> and 2n hyperplanes L<sub>i</sub> in general position with respect to Q. The relative cohomology H<sup>2n−1</sup>(ℙ<sup>2n−1</sup> \ Q, L \ (Q ∩ L)) is a mixed Tate motive.
- Picture: in the Klein model, a geodesic simplex in hyperbolic space is a Euclidean simplex inside a quadric. Its volume is a period of this motive.

**Product-hyperbolic manifold.** A quotient M = (H<sup>2n−1</sup> × … × H<sup>2n−1</sup>)/Γ of r = [k:ℚ] copies of hyperbolic space by a torsion-free subgroup Γ of finite index in SO(2n−1, 1)(O<sub>k</sub>).

**Dedekind zeta motive mot<sub>n</sub>(k).** The framed motive Σ mot(Δ<sub>1</sub>) ⊗ … ⊗ mot(Δ<sub>r</sub>), summed over the products of simplices in a triangulation of M. It is a subquotient of a sum of tensor products of quadric motives.

## Main results

**Theorem (the zeta motive; Theorem 1.1).** Let k be totally real and n ≥ 3 odd. Then mot<sub>n</sub>(k) lies in the determinant of Ext<sup>1</sup><sub>MT(k)</sub>(ℚ(0), ℚ(n)), and its image under the Hodge regulator is a non-zero rational multiple of ζ<sub>k</sub>\*(1−n), the leading Taylor coefficient of ζ<sub>k</sub> at s = 1−n.
- Step 1: the gluing relations of the triangulation put the motive in the r-fold tensor power of Ext<sup>1</sup>. A symmetry argument shows it is alternating.
- Step 2: a Tamagawa number argument gives vol(M) = α π<sup>nr</sup> ζ<sub>k</sub>\*(1−n) with α a non-zero rational.

**Theorem (quadrics generate; Theorem 1.2).** For k totally real, every element of Ext<sup>1</sup><sub>MT(k)</sub>(ℚ(0), ℚ(n)) comes from the subcategory built out of quadric motives. So every such extension is a subquotient of a direct sum of quadric motives.
- Step 1: by Theorem 1.1 the determinant element is non-zero.
- Step 2: Borel's rank count says the Ext group has rank exactly r, so the quadric extensions must span it.

**Corollary (volumes; Corollaries 1.3 and 1.4).** The periods of any such extension are ℚ-linear combinations of volumes of hyperbolic (2n−1)-simplices defined over k, after the normalising power of π. The value ζ<sub>k</sub>\*(1−n) is a rational multiple of a determinant of such volumes, each divided by π<sup>n</sup>.

## Note, then ignore

- Leading coefficient. The star in ζ<sub>k</sub>\*(1−n) means the first non-zero Taylor coefficient, because ζ<sub>k</sub> vanishes there. The functional equation ties it to ζ<sub>k</sub>(n). Safe to skip on a first reading.
- Framed motives. The paper extracts the right subquotient with "framed equivalence classes" (§5.1). This is bookkeeping that makes the sum over simplices well defined. Skip it at first.
- Vertices at infinity. Non-compact manifolds need simplices with one ideal vertex, and here the construction differs from Goncharov's. The story does not change. Skip.
- Weaker than Zagier's conjecture. The author says the determinant statement is in the spirit of Zagier's conjecture but weaker, since it uses simplex volumes and not classical polylogarithms. Note it and move on.
- The case n = 2. A similar argument works for every number field and recovers Zagier's theorem on ζ<sub>K</sub>(2) (§6.3). It sits beside the main line. Skip.

## One next step

Open the PDF and read only §1.1 on page 1, down to Humbert's volume formula for H<sup>3</sup>/Γ and the sentence on triangulating by geodesic simplices.

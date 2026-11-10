source: https://www.ihes.fr/~brown/DZM.pdf
slogan: Triangulate an arithmetic hyperbolic manifold over a totally real field, and the simplices assemble into a motive whose period is a zeta value.
basis: the introduction and the main theorem statements

## Before you start

This is the author's own copy of a paper that also sits on arXiv (0804.1654), and the reading list holds both. The likely feeling is a small irritation, or a worry about doing the same work twice. Either is fine to have. One reading serves both entries. If you want to know how K-theory classes of a number field can be drawn as hyperbolic simplices, this is the place. Take the route you enjoy, and let completeness come second.

## The story

Borel proved that the leading coefficient of the Dedekind zeta function at s = 1−n is, up to a rational factor, the covolume of a lattice coming from K<sub>2n−1</sub>(k). His proof is analytic and says nothing about which geometric objects carry these K-theory classes. A programme asks for more: build the category of mixed Tate motives over k from simple shapes, such as hyperplane arrangements, polylogarithm motives or quadrics, and so read zeta values as explicit periods. The first step is "generation": show the simple shapes span every extension of ℚ(0) by ℚ(n). Brown does this for quadrics when k is totally real. The shapes come from geometry. A hyperbolic simplex is a simplex inside a quadric, and an arithmetic quotient of a product of hyperbolic spaces glues such simplices into one motive, whose period is the zeta value.

## Main definitions

**Regulator and its lattice.** The Hodge realisation gives a map r<sub>H</sub> from Ext<sup>1</sup><sub>MT(k)</sub>(ℚ(0), ℚ(n)) ≅ K<sub>2n−1</sub>(k) ⊗ ℚ to a real vector space of dimension r<sub>1</sub> + r<sub>2</sub> (n odd) or r<sub>2</sub> (n even), for n > 1. The image of the Borel regulator is a ℚ-lattice. Its covolume is defined up to a non-zero rational.

**The subcategory C<sup>q</sup>(k).** The full subcategory of MT(k) spanned by quadric motives H<sup>2n−1</sup>(ℙ<sup>2n−1</sup> \ Q, L \ (Q ∩ L)), where Q is a smooth quadric and L is a union of 2n hyperplanes in general position. The quadric and hyperplanes are defined over the algebraic closure, and one keeps what is Galois-invariant over k.
- The generation problem: is the map φ<sup>q</sup> from Ext<sup>1</sup> in C<sup>q</sup>(k) to Ext<sup>1</sup> in MT(k) surjective?

**Dedekind zeta motive mot<sub>n</sub>(k).** For k totally real of degree r and odd n ≥ 3, take a torsion-free finite-index subgroup Γ of SO(2n−1, 1)(O<sub>k</sub>). It acts on r copies of hyperbolic space H<sup>2n−1</sup>. Triangulate the quotient by products of geodesic simplices defined over k. The motive is the sum, over the pieces, of tensor products of the simplex motives.

## Main results

**Theorem (motivic form of Borel's theorem; Theorem 1.1).** For k totally real and n ≥ 3 odd, mot<sub>n</sub>(k) lies in det Ext<sup>1</sup><sub>MT(k)</sub>(ℚ(0), ℚ(n)). Its image under the regulator r<sub>H</sub> is a non-zero rational multiple of ζ<sub>k</sub>\*(1−n).
- Step 1: the manifold has no boundary, so the gluing relations place the motive in a tensor product of Ext<sup>1</sup> groups. A symmetric group acting on the framing shows it is alternating.
- Step 2: the volume of the quotient equals a rational multiple of π<sup>nr</sup> ζ<sub>k</sub>\*(1−n), by a Tamagawa number computation.

**Theorem (generation by quadrics; Theorem 1.2).** If k is totally real, the map φ<sup>q</sup> is surjective. Every extension of ℚ(0) by ℚ(n) over k is a subquotient of a direct sum of quadric motives.
- Step 1: Theorem 1.1 gives a non-zero element of the top exterior power.
- Step 2: Borel's theorem says the rank of the Ext group is exactly r, which forces the quadric extensions to span.

**Corollary (zeta as a determinant; Corollary 1.4).** For k totally real and n ≥ 3 odd, ζ<sub>k</sub>\*(1−n) is a rational multiple of a determinant whose entries are π<sup>−n</sup> times volumes of hyperbolic (2n−1)-simplices defined over k.

## Note, then ignore

- Two copies. The arXiv version is dated January 2013. This copy differs in small wording and reference numbers in the passages compared. The theorem statements in the introduction match. Safe to ignore.
- Even n. For totally real k and even n the Ext group is zero, so there is nothing to build. That is the only reason n is odd. Skip.
- Two regulators. Borel's theorem uses the Borel regulator. This paper uses the Hodge regulator and stays inside MT(k). The comparison is a side issue on a first reading.
- Determinant not seen in the geometry. The author notes that the determinant statement needs Borel's rank count and does not seem to follow from the triangulation alone. Note it and move on.
- Other fields. The theorems also hold for certain quadratic extensions of k, and a version for n = 2 holds for every number field. Skip both at first.

## One next step

Open the PDF at §1.2 (page 3) and read the two short paragraphs headed "Hyperplanes" and "Quadrics and hyperplanes", which set up the maps φ<sup>h</sup> and φ<sup>q</sup>.

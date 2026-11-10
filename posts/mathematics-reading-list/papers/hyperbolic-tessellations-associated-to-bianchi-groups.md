source: https://arxiv.org/pdf/0908.1762
slogan: Perfect Hermitian forms over an imaginary quadratic field cut hyperbolic 3-space into ideal polytopes, and a computer search finds only eight shapes.
basis: the full text

## Before you start

This paper is eight pages, and half of them are tables. The likely feeling is a small let-down: there is no big theorem, and the background sits in three cited papers that you may not know. It is fine to feel a little short-changed, or a little lost. If you want a concrete picture of what a Bianchi group does to hyperbolic space, the tables are that picture. Look at one worked example for the pleasure of it. Whether you read the rest matters much less.

## The story

SL<sub>2</sub>(ℤ) acts on the upper half-plane, and the familiar tiling by ideal triangles makes that action computable. Replace ℤ by the ring of integers O of an imaginary quadratic field F = ℚ(√d). Now GL<sub>2</sub>(O) acts on hyperbolic 3-space, and people who compute modular forms over F want a tiling there too. Cremona and his students found such tilings for class number 1 and a few other fields. Yasaki uses one uniform recipe, due to Voronoi, Koecher and Ash. Positive definite binary Hermitian forms make a cone. The forms pinned down by their shortest vectors, the perfect forms, index the top-dimensional pieces of a decomposition of that cone. Each piece descends to an ideal polytope. Its vertices are cusps a/b read off from the shortest vectors (a, b). He runs this for many fields and lists the polytopes.

## Main definitions

**Binary Hermitian form over F.** A map φ: F<sup>2</sup> → ℚ of the form φ(x, y) = a x x̄ + b x ȳ + b̄ x̄ y + c y ȳ with a, c ∈ ℚ and b ∈ F, required to be positive definite. Such forms span a 4-dimensional real vector space V, and the positive definite ones form an open cone in it.

**Minimum and minimal vectors.** The minimum m(φ) is the smallest value of φ on non-zero vectors of O<sup>2</sup>. A minimal vector is a v ∈ O<sup>2</sup> with φ(v) = m(φ). The set of these is M(φ).

**Perfect form.** A form φ that is the only form with its minimum m(φ) and its set of minimal vectors M(φ).
- Count: each minimal vector gives one linear equation on V, so generically 4 minimal vectors pin φ down. Many perfect forms have more.

**Voronoi ideal polytope.** The image in hyperbolic 3-space of a top-dimensional cone of the Voronoi decomposition. These cones correspond to perfect forms. The vertices of the polytope are cusps, points of F together with ∞.

## Main results

The paper has no numbered theorems. Its results are computations, so they appear here as claims.

**Claim (range of the computation; Sections 1 and 4.2).** The method finds all GL<sub>2</sub>(O)-classes of Voronoi ideal polytopes for every imaginary quadratic field of class number 1 or 2, and for the fields of higher class number with d > −100. The author says nothing in theory stops the computation for larger class number or discriminant.
- Step 1: find one perfect form by brute force. Look among forms with minimal vectors (1, 0), (0, 1), (1, 1) and search for a fourth minimal vector (a, b). This gives a polytope with vertices ∞, 0, 1 and a/b among its vertices.
- Step 2: from that form, run Gunnells's algorithm in Magma to find all perfect forms up to GL<sub>2</sub>(O) and the full structure of the Voronoi polyhedron.

**Claim (eight shapes; Section 4.2, Table 2).** In the whole range only 8 combinatorial types occur: tetrahedron, octahedron, cuboctahedron, triangular prism, hexagonal cap, square pyramid, truncated tetrahedron and triangular dipyramid. The triangular dipyramid turns up much less often than the others. This is an observation about the data, not a theorem. The author notes that no reason is known why other convex polytopes could not occur.

**Claim (worked example; Section 4.1, Table 1).** For F = ℚ(√−14), of class number 4, there are 9 classes of polytopes of 3 types: 3 triangular prisms, 5 tetrahedra and 1 square pyramid. The paper lists the cusps at the vertices of each. All nine stabilisers are cyclic, of order 2, 4 or 6.

## Note, then ignore

- GL<sub>2</sub> or SL<sub>2</sub>. The classes are taken up to GL<sub>2</sub>(O), not the Bianchi group SL<sub>2</sub>(O) or its projective version. Counts can differ between the two. Safe to skip on a first reading.
- The abstract says "number field". The abstract and the first line speak of a general number field F, but everything computed is for imaginary quadratic F. Safe to skip.
- Positivity in the definition. Definition 2.1 builds positive definiteness into the word "form". The boundary of the cone, where the cusps live, is handled in the cited papers. Safe to skip.
- Class number lists. Section 2 recalls the nine fields of class number 1 and the eighteen of class number 2. They only fix the range of the tables. Safe to skip.
- Reading Tables 3 and 4. Each row is a field and each column a polytope type, with the number of classes in each cell. You do not need the individual numbers. Safe to skip.

## One next step

Open the paper at Section 4.1 on page 4 and read the list of polytopes for d = −14, then glance at Table 2 on page 5 to see the eight shapes.

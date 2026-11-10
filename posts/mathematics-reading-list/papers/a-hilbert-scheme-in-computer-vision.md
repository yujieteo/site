source: https://arxiv.org/pdf/1107.2875
slogan: All the pictures that n cameras can take of space form a threefold, and all such threefolds fill one component of a Hilbert scheme.
basis: the introduction and the main theorem statements

## Before you start

The title joins two fields, and you may feel a small dread that you need both: Hilbert schemes from algebraic geometry and epipolar geometry from vision. You need neither in advance, and it is fine to feel under-prepared anyway. A camera here is a 3 × 4 matrix, and the rest is polynomial algebra you can compute by hand for two cameras. If you want to see a moduli space that an engineer could use, this is one. Play with the two-camera case first. Finishing is optional.

## The story

A pinhole camera is a 3 × 4 matrix A of rank 3. It sends a point of projective 3-space ℙ<sup>3</sup> to a point of the image plane ℙ<sup>2</sup>. Take n cameras. A point of space gives n image points, so the possible n-tuples of pictures form a threefold V<sub>A</sub> inside (ℙ<sup>2</sup>)<sup>n</sup>. Vision researchers knew polynomial constraints that cut out this threefold as a set: bilinear ones for pairs of cameras, trilinear for triples, quadrilinear for fours. Nobody had shown that these give the full ideal, or what happens as cameras move and collide. The authors show the constraints are a Gröbner basis for every term order. Then they treat the ideal itself as a point of a multigraded Hilbert scheme. The camera configurations sweep out one irreducible component of dimension 11n − 15, and its boundary points are the degenerate limits.

## Main definitions

**Multiview variety and ideal.** For cameras A = (A<sub>1</sub>, ..., A<sub>n</sub>), the multiview variety V<sub>A</sub> is the closure of the image of the rational map ℙ<sup>3</sup> → (ℙ<sup>2</sup>)<sup>n</sup>, x ↦ (A<sub>1</sub>x, ..., A<sub>n</sub>x). The multiview ideal J<sub>A</sub> is its prime ideal in the polynomial ring K[x, y, z] in the 3n unknowns x<sub>i</sub>, y<sub>i</sub>, z<sub>i</sub>, over an algebraically closed field K.
- Focal point: the kernel f<sub>i</sub> of A<sub>i</sub>, where camera i sees nothing. V<sub>A</sub> is the blow-up of ℙ<sup>3</sup> at the focal points.
- Generic cameras: all 4 × 4 minors of the 4 × 3n matrix (A<sub>1</sub><sup>T</sup> ... A<sub>n</sub><sup>T</sup>) are non-zero.

**The matrices A<sub>σ</sub>.** For a subset σ of s cameras, stack the A<sub>i</sub> with i in σ into a 3s × (s + 4) matrix, and put the coordinate vector p<sub>i</sub> = (x<sub>i</sub>, y<sub>i</sub>, z<sub>i</sub>)<sup>T</sup> in its own extra column next to A<sub>i</sub>. Its maximal minors are multilinear of degree s.
- Two cameras: A<sub>σ</sub> is 6 × 6, and its determinant is the bilinear form of the fundamental matrix.

**Multigraded Hilbert scheme H<sub>n</sub>.** The projective scheme that parametrises all ℤ<sup>n</sup>-homogeneous ideals in K[x, y, z] with the same multigraded Hilbert function as a generic multiview ideal. That function sends (u<sub>1</sub>, ..., u<sub>n</sub>) to C(u<sub>1</sub> + ... + u<sub>n</sub> + 3, 3) − Σ<sub>i</sub> C(u<sub>i</sub> + 2, 3), with C the binomial coefficient.

**Compactified camera space Γ<sub>n</sub>.** The closure in H<sub>n</sub> of the set of multiview ideals J<sub>A</sub>. The map A ↦ J<sub>A</sub> is an injective rational map from a quotient of the Grassmannian Gr(4, 3n) by the torus (K<sup>\*</sup>)<sup>n</sup>, so Γ<sub>n</sub> has dimension 4(3n − 4) − (n − 1) = 11n − 15.

## Main results

**Theorem (universal Gröbner basis; Theorem 2.1).** If A is generic, the maximal minors of the matrices A<sub>σ</sub> with 2 ≤ |σ| ≤ 4 form a Gröbner basis of J<sub>A</sub> for every term order.
- Step 1: the minors vanish on V<sub>A</sub>, and their lexicographic leading terms generate the monomial ideal M<sub>n</sub> = ⟨x<sub>i</sub>x<sub>j</sub>, x<sub>i</sub>y<sub>j</sub>y<sub>k</sub>, y<sub>i</sub>y<sub>j</sub>y<sub>k</sub>y<sub>l</sub>⟩ over distinct indices.
- Step 2: realise V<sub>A</sub> as a projection of the diagonal ℙ<sup>3</sup> in (ℙ<sup>3</sup>)<sup>n</sup> and import the known initial ideal from Cartwright and Sturmfels, which shows M<sub>n</sub> is the whole initial ideal.

**Theorem (Hilbert function detects collisions; Theorem 3.7).** For cameras of rank 3, the ideal J<sub>A</sub> has the Hilbert function above if and only if the n focal points are pairwise distinct. So J<sub>A</sub> is a point of H<sub>n</sub> exactly when no two cameras sit at the same place.

**Theorem (the special point; Proposition 3.8 and Corollary 6.1).** M<sub>n</sub> is the unique Borel-fixed ideal with this Hilbert function. H<sub>n</sub> is connected, the point M<sub>n</sub> lies on every irreducible component, and every ideal on H<sub>n</sub> is radical and Cohen-Macaulay.

**Theorem (main result; Theorem 6.3).** For n ≥ 3, Γ<sub>n</sub> is an irreducible component of H<sub>n</sub>.
- Step 1: place the cameras on a line and let them merge. The limit is a binomial ideal and then a monomial ideal N<sub>n</sub>, both in Γ<sub>n</sub> (Theorem 5.1).
- Step 2: compute the tangent space of H<sub>n</sub> at N<sub>n</sub>. It has dimension 11n − 15, the dimension of Γ<sub>n</sub>, so nothing larger contains Γ<sub>n</sub>.

## Note, then ignore

- Two cameras. For n = 2, H<sub>2</sub> ≅ ℙ<sup>8</sup> and Γ<sub>2</sub> is only the cubic hypersurface of 3 × 3 matrices of rank at most 2. The main theorem fails there. Safe to skip on a first reading.
- Generic versus general position. The Gröbner basis needs the minor condition. The count of minimal generators, C(n, 2) bilinear and C(n, 3) trilinear, needs only that no four focal points are coplanar and no three collinear (Corollary 2.7). Safe to skip.
- A typo. The line after Theorem 6.3 writes H<sub>3</sub> ≃ ℙ<sup>8</sup> where H<sub>2</sub> is meant. Safe to skip.
- Other components. For n ≥ 3 the scheme H<sub>n</sub> has further components that are not camera configurations. Safe to skip.
- Section 4. The toric case of at most four cameras at coordinate points, with its 1068 mixed subdivisions, is a separate combinatorial study. Safe to skip.

## One next step

Open the paper at page 8 and look at Figure 2 and Example 3.2: the two-camera variety breaks into two triangular prisms glued along a square.

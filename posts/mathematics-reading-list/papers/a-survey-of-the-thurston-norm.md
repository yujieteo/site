source: https://arxiv.org/pdf/2108.08645
slogan: The Thurston norm measures the simplest surface in each homology class of a 3-manifold, and its unit ball is a polyhedron you can draw.
basis: the introduction and the main theorem statements

## Before you start

This survey names a dozen theories in its first two pages: Seiberg–Witten, Heegaard Floer, L<sup>2</sup>-torsion, profinite groups. You may feel small in front of that list. That feeling makes sense, and you can let it be there. Only Section 2 is needed for the story, and it uses nothing beyond homology and Euler characteristic. If you want to see how the genus of a knot grows into a geometric shape, this is the place. Read for the pictures of the polyhedra first. Finishing can wait.

## The story

A knot has a genus: the least genus of a surface that it bounds. People wanted the same measure for every 3-manifold M and every class φ in H<sup>1</sup>(M; ℤ). Each such class is dual to embedded surfaces, so you can ask for the simplest one. The obstacle is that "simplest surface" looks like a wild function of φ. Thurston's idea is that it is not wild at all. The minimal complexity is a seminorm, it takes integer values on the lattice, and so its unit ball is a polyhedron with finitely many faces. Some faces even record all the ways M fibres over the circle. For the Borromean rings the ball is an octahedron. The rest of the survey shows how other invariants (Alexander polynomials, Floer homology, torsions) bound or compute this norm.

## Main definitions

**Complexity of a surface.** For a surface S with components S<sub>1</sub>, …, S<sub>k</sub>, set χ<sub>−</sub>(S) = Σ max{−χ(S<sub>i</sub>), 0}. Spheres, discs, tori and annuli count as zero.

**Thurston norm.** For φ ∈ H<sup>1</sup>(M; ℤ), x<sub>M</sub>(φ) is the least χ<sub>−</sub>(S) over properly embedded surfaces S dual to φ. It extends uniquely to a seminorm on H<sup>1</sup>(M; ℝ).
- Knot case: for a non-trivial knot K in S<sup>3</sup> and a generator φ, the value is 2g(K) − 1.
- A surface is norm-minimising if it attains the minimum for its class.

**Fibred class.** A class φ ∈ H<sup>1</sup>(M; ℤ) is fibred if M fibres over the circle with fibres dual to φ. Equivalently, a closed 1-form with no zeros represents φ.

**Taut foliation.** A transversely oriented foliation of M by surfaces is taut if some closed curve crosses every leaf transversally. Taut foliations have no Reeb components.

## Main results

All manifolds are compact, connected and oriented.

**Theorem (seminorm and polyhedron; Theorem 2.1, Theorem 2.5, Corollary 2.6).** x<sub>M</sub> is a seminorm on H<sup>1</sup>(M; ℝ). Its unit ball is a convex polyhedron, possibly non-compact, with finitely many vertices, all in H<sup>1</sup>(M; ℚ).
- Step 1: disjoint parallel copies give homogeneity, and a cut-and-paste sum of two surfaces gives the triangle inequality.
- Step 2: integer values on the lattice force the dual ball to be a polytope with integral vertices.

**Theorem (fibred faces; Theorem 2.8).** Let M fibre over the circle with fibre of negative Euler characteristic. Then there are top-dimensional faces of the unit ball such that an integral class is fibred exactly when it lies in the interior of the cone on one of them.
- Example: for the Whitehead link the ball is a diamond, and all its faces are fibred.

**Theorem (leaves minimise, and conversely; Theorems 2.14 and 2.15).** Let M be irreducible with empty or toroidal boundary. Every compact leaf of a transversely oriented foliation without Reeb components (with each boundary torus transverse to it or a leaf) is norm-minimising. Conversely (Gabai), every norm-minimising surface in a non-trivial class is a leaf of a taut foliation of finite depth.
- Step 1 (Thurston): the Euler class of the tangent planes has dual norm at most 1.
- Step 2 (Gabai): cut M along the surface again and again, a sutured manifold hierarchy, until only balls remain. Then build the foliation back up.

**Theorem (Alexander norm bound, McMullen; Theorem 3.2).** Let M have empty or toroidal boundary. The Alexander polynomial defines a seminorm ‖·‖<sub>A</sub> on H<sup>1</sup>(M; ℝ). If b<sub>1</sub>(M) > 1 then x<sub>M</sub>(φ) ≥ ‖φ‖<sub>A</sub> for integral φ. If φ generates H<sup>1</sup>(M; ℤ) then x<sub>M</sub>(φ) ≥ ‖φ‖<sub>A</sub> − 1 − b<sub>3</sub>(M). Equality holds for fibred φ, apart from S<sup>1</sup> × S<sup>2</sup> and S<sup>1</sup> × D<sup>2</sup>.
- This extends the classical bound of knot genus by the degree of the Alexander polynomial.

## Note, then ignore

- Seminorm, not norm. The norm vanishes on classes dual to spheres, discs, tori and annuli. For hyperbolic M it is a true norm. Safe to skip on a first reading.
- Polyhedron versus polytope. The survey uses "polytope" for compact and "polyhedron" for possibly non-compact. This matters only when the seminorm is degenerate. Safe to skip.
- Cohomology versus homology. Some authors define the norm on H<sub>2</sub>(M, ∂M). Poincaré duality identifies the two. Safe to skip.
- The correction terms 1 + b<sub>3</sub>(M). They appear only when b<sub>1</sub> = 1 and come from factors of (t − 1) in the torsion. Safe to skip.
- Sections 4 to 8. Each gives another invariant that bounds or detects the norm. The survey states results without proofs there. Safe to skip until you need one.

## One next step

Open the survey at Section 2.2 and read only Examples 2.12 and 2.13: the norm balls of the Whitehead link and the Borromean rings.

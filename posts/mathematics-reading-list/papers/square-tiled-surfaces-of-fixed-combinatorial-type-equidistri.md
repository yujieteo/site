source: https://arxiv.org/pdf/1612.08374
slogan: Square-tiled surfaces with a fixed cylinder pattern spread evenly through a stratum, so counting one pattern measures the whole volume.
basis: the introduction and the main theorem statements

## Before you start

This paper is 60 pages with four authors, three appendices and a title that runs to three lines. Overwhelm is a natural response, and you are free to feel it. You do not need the whole paper. One idea carries it: surfaces glued from unit squares are the integer points of a moduli space. If you want to see a volume computed by counting Lego-like objects, and a zeta value fall out, that is here. Take pleasure in the square-tiled pictures first. Coverage comes second.

## The story

A stratum of Abelian differentials is a moduli space of flat surfaces with prescribed cone points. Its Masur–Veech volume feeds into billiard counting and Lyapunov exponents, so people want it. The known method counts integer points, and the integer points are square-tiled surfaces: covers of the square torus branched over one point. Counting all of them is hard. Each square-tiled surface splits into horizontal cylinders, and the gluing pattern is a finite piece of combinatorics. The authors show that surfaces with any fixed pattern, tiled by smaller and smaller squares, equidistribute in the stratum. So each pattern owns a fixed share of the volume. The simplest pattern, a single cylinder, has a share you can compute exactly, and it is a rational multiple of ζ(d). Estimating that share by experiment then gives volumes that are otherwise out of reach.

## Main definitions

**Stratum and Masur–Veech volume.** H(m<sub>1</sub>, …, m<sub>r</sub>) is the space of pairs (C, ω) with ω an Abelian differential with zeros of orders m<sub>i</sub>. Period coordinates model it on H<sup>1</sup>(S, {zeros}; ℂ), of complex dimension d = 2g + r − 1. The volume of the area-one hypersurface is 2d times the lattice volume of the cone under it.

**Square-tiled surface.** A point with period coordinates in ℤ ⊕ iℤ. Equivalently a cover of the standard torus, branched over one point.
- For quadratic differentials the analogue is a pillowcase cover of ℂP<sup>1</sup>, branched over four points.

**Separatrix diagram.** The graph of horizontal saddle connections of a surface with periodic horizontal foliation, with the data of how the cylinders attach to it. A stratum has finitely many.

**Essential lattice subset.** A set D<sub>ℤ</sub> of square-tiled surfaces in an invariant suborbifold L, stable under horizontal (or vertical) integer shears, for which the limit c(D<sub>ℤ</sub>) = 2d · lim a<sup>−d</sup> · #{S ∈ D<sub>ℤ</sub> : Area(S) ≤ a} exists and is positive.

## Main results

Throughout, L is a GL(2, ℝ)-invariant suborbifold defined over ℚ, for example a component of a stratum.

**Theorem (fixed diagram counts; Theorem 1.3).** For any separatrix diagram D realisable in L, the square-tiled surfaces in L with diagram D form an essential lattice subset.

**Theorem (equidistribution; Theorem 1.4).** Let D<sub>ℤ</sub> be an essential lattice subset in L and X<sub>1</sub> an open set in the area-one locus L<sub>1</sub>. The number of surfaces of D<sub>ℤ</sub> with at most a squares that project to X<sub>1</sub>, times 2d/a<sup>d</sup>, tends to c(D<sub>ℤ</sub>) · ν<sub>1</sub>(X<sub>1</sub>)/ν<sub>1</sub>(L<sub>1</sub>).
- Step 1: the counting measures of D<sub>ℤ</sub> are bounded by those of all square-tiled surfaces. So any weak limit is shear-invariant and in the Lebesgue class of Masur–Veech measure.
- Step 2: Masur–Veech measure is ergodic for the integer shears (Eskin–Mirzakhani plus Moore's ergodicity theorem). So the limit is a constant multiple of it.

**Theorem (horizontal and vertical are uncorrelated; Theorem 1.19).** For a horizontally invariant and a vertically invariant essential lattice subset, the density of surfaces in both is the product of the two separate densities.

**Theorem (one-cylinder contribution; Theorem 2.3, Corollary 2.4, Theorem 2.8).** The contribution c<sub>1</sub> of one-cylinder square-tiled surfaces to the volume of H(m<sub>1</sub>, …, m<sub>r</sub>) is an explicit character sum times ζ(d). It lies between (ζ(d)/(d+1)) · 4/Π(m<sub>i</sub>+1) and a like bound with d − 10/29 in place of d + 1.
- Minimal stratum: c<sub>1</sub>(2g−2) = 4ζ(2g) / (2g(2g−1)).
- Principal stratum: c<sub>1</sub>(1, …, 1) = 4ζ(4g−3) / ((4g−2) · 2<sup>2g−2</sup>).

The paper also states a conditional result (Theorem 2.10). The relative share p<sub>1</sub> = c<sub>1</sub>/Vol satisfies d · p<sub>1</sub> → 1 uniformly in large genus if and only if the Eskin–Zorich conjecture Vol ≈ 4/Π(m<sub>i</sub>+1) holds. For the principal stratum this is a theorem, by work of Chen, Möller and Zagier.

## Note, then ignore

- The factor 2d. It matches the traditional normalisation of Masur–Veech volume. Safe to skip on a first reading.
- Labelled zeros. Volume formulas assume the zeros are numbered. Unlabelled counts differ by symmetry factors. Safe to skip.
- Choice of integer lattice. For quadratic differentials two lattice conventions exist, and they change diagram-by-diagram contributions. Appendix B handles this. Safe to skip.
- Defined over ℚ. The hypothesis ensures L has integer points at all. Every stratum component satisfies it. Safe to skip.
- Connected components. Some strata are disconnected, and hyperelliptic components behave differently. The story is the same for each component. Safe to skip.

## One next step

Open the paper at Example 2.5 in Section 2.1 and read how the two diagrams of H(2) split its volume.

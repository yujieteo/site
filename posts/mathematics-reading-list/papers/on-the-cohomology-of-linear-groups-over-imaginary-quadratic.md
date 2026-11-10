source: https://arxiv.org/pdf/1307.1165
slogan: Perfect Hermitian forms cut a symmetric space into cells, so a computer can list the cohomology of GL<sub>3</sub> and GL<sub>4</sub> over imaginary quadratic integers.
basis: the introduction and the main theorem statements

## Before you start

Half of this paper is tables of stabiliser orders and elementary divisors. The likely feeling is boredom, with a little worry that you are missing a hidden argument between the rows. You are allowed to be bored by tables. If you want to see how a group like GL<sub>3</sub>(ℤ[i]) becomes a finite chain complex that a machine can handle, Sections 2 and 3 show it in eight pages. Read those for pleasure. The tables are there to look things up in.

## The story

Let O be the ring of integers of an imaginary quadratic field of discriminant D, and Γ = GL<sub>N</sub>(O). For N = 2 the cohomology is well studied. For N = 3 and 4 almost nothing was computed. The block is that Γ acts on a symmetric space of dimension N<sup>2</sup> − 1 with no obvious finite description. Voronoi's idea, extended by Ash and Koecher, removes it. Positive definite Hermitian forms whose minimal vectors pin them down ("perfect" forms) are finite in number up to Γ, and each gives a polyhedral cell. The cells tile the space. Picture N = 2 over ℤ: the upper half-plane tiled by ideal triangles. The authors run this for N = 3 with D ≥ −24 and N = 4 with D = −3, −4.

## Main definitions

**Perfect Hermitian form.** For a positive definite N × N Hermitian matrix A, the minimum m(A) is the least value of x\*Ax over nonzero x in O<sup>N</sup>, and the minimal vectors M(A) are the x that reach it. A is perfect if the rank-one matrices vv\* for v in M(A) span the real vector space of all Hermitian matrices.
- Equivalent: the minimum and the minimal vectors determine A.
- Finiteness: up to Γ and positive scaling there are finitely many perfect forms.

**Voronoi complex Vor<sub>N,D</sub>.** Take the cone of positive semi-definite Hermitian forms with kernel defined over the field, modulo positive scaling. The cones spanned by the vv\* for v in M(A), with A perfect, and their faces give a Γ-invariant cell structure. V<sub>n</sub> is the free abelian group on Γ-orbits of n-cells that meet the interior and whose stabiliser preserves orientation. The boundary map makes V<sub>∗</sub> a finite chain complex.

**Well-rounded retract.** A contractible cell complex W of dimension N<sup>2</sup> − N on which Γ acts with finite stabilisers. Its cells correspond to the Voronoi cells that meet the interior, with inclusions reversed (Theorem 2.7).

**Serre class S<sub>b</sub>.** The finite abelian groups whose order has only prime factors ≤ b. "Modulo S<sub>b</sub>" means that torsion at primes ≤ b is ignored.

## Main results

**Theorem (Voronoi homology is group cohomology; Theorem 3.7).** Let b be an upper bound on the primes p for which Γ = GL<sub>N</sub>(O) has an element of order p. Modulo S<sub>b</sub>, H<sub>n</sub>(Vor<sub>N,D</sub>) ≅ H<sup>N<sup>2</sup>−1−n</sup>(Γ, ℤ).
- Step 1: an equivariant spectral sequence identifies Voronoi homology with equivariant homology of the cone relative to its boundary.
- Step 2: that relative homology is homology with coefficients in the Steinberg module, and Borel–Serre duality turns it into cohomology.

**Theorem (Mass formula; Theorem 4.6).** The alternating sum over cell orbits σ of 1/|Stab(σ)| is zero. The authors use it as a check that the cell lists are complete.

**Theorem (GL<sub>3</sub>; Theorem 6.1).** For fundamental discriminants 0 > D ≥ −24, H<sub>n</sub>(Vor<sub>3,D</sub>) can have positive rank only for n = 2, 4, 5 and 8, and H<sub>8</sub> ≅ ℤ. A table gives the ranks. The number of perfect forms grows from 2 at D = −3 to 870 at D = −23.

**Theorem (GL<sub>4</sub>; Theorems 6.2 and 6.3).** For D = −3 or −4, H<sup>n</sup>(GL<sub>4</sub>(O<sub>D</sub>)) has positive rank only for n = 0, 3, 5, 6, 8 and 9. The rank is 1 in each of these degrees except n = 8, where it is 2. The only torsion primes in the Voronoi homology are 2, 3 and 5.

## Note, then ignore

- Small primes. The comparison in Theorem 3.7 loses torsion at primes dividing stabiliser orders. Proposition 3.10 lists them: 2 and 3 for GL<sub>3</sub>, also 5 for GL<sub>4</sub>, and 7 when D = −7. Safe to skip at first.
- Orientable cells only. Cells whose stabiliser reverses orientation contribute only 2-torsion, so the complex drops them. Safe to skip.
- Index shift. Voronoi homology in degree n matches cohomology in degree N<sup>2</sup> − 1 − n. This is why Theorem 6.2 and Theorem 6.3 list different numbers for the same computation. Safe to skip once noted.
- Rationality of perfect forms. Theorem 2.3 says a perfect form with minimum 1 has entries in the field. This holds for CM fields and can fail for general number fields. Safe to skip.
- Top class. Theorem 5.1 writes the generator of the top homology as a sum of top cells weighted by 1/|Stab|. It is verified only for the computed cases. Safe to skip.

## One next step

Open the PDF at Figure 1 on page 4 and read the paragraph around it, which explains the tiling and its dual tree for SL<sub>2</sub>(ℤ).

source: https://arxiv.org/pdf/1601.00576
slogan: Counting points on a non-compact Picard modular surface reduces to automorphic traces once the boundary terms of two trace formulas cancel.
basis: the introduction and the main theorem statements

## Before you start

This is 44 pages of trace formula bookkeeping, with notation borrowed from Laumon and Morel. The likely feeling is overwhelm at long formulas whose terms you cannot yet name. That is a fair response to this kind of paper, and you can let it be there. If you want to know how the zeta function of a Shimura variety gets written in automorphic terms, the three-page outline in §1.3 gives you the whole method. Enjoy the outline first. The computations can stay unread.

## The story

The aim is the Hasse–Weil L-function of a Picard modular surface, the Shimura variety of the unitary similitude group GU(2,1) of an imaginary quadratic field E. The L-function at a good prime counts points over finite fields. Ihara, Langlands and Kottwitz showed how to do this: write the point count as a sum of orbital integrals, then match it with the Arthur–Selberg trace formula. The block here is that the surface is not compact. So the count is a trace on cohomology with compact supports, and the trace formula has extra parabolic terms from the boundary. Laumon handled this for GSp(4). The author adapts Laumon's method to GU(2,1) by passing to twisted general linear groups. The parabolic terms for G and for its endoscopic group H mostly cancel, and what remains is a trace on an explicit virtual module.

## Main definitions

**Picard modular surface.** Let E be an imaginary quadratic field and G = GU(2,1) the group of unitary similitudes of a Hermitian form of signature (2,1) on E<sup>3</sup>. For a neat compact open subgroup K of G(𝔸<sub>f</sub>), the Shimura variety S<sub>K</sub>(G) is a smooth quasi-projective surface over E. It is not compact.

**The virtual module W<sub>ℓ</sub>.** W<sub>ℓ</sub> = Σ (−1)<sup>i</sup> H<sub>c</sub><sup>i</sup>(S<sub>K</sub>(G) over an algebraic closure of E, ℚ<sub>ℓ</sub>). The Galois group of E and the Hecke algebra of K-bi-invariant functions on G(𝔸<sub>f</sub>) act on it, and the two actions commute.

**The fixed point number N(j, f<sup>p</sup>).** Fix a good prime p: unramified in E, with K hyperspecial at p. N(j, f<sup>p</sup>) is the number of fixed points, with multiplicity, of the j-th power of Frobenius composed with the Hecke correspondence f<sup>p</sup> on the special fibre.
- For f<sup>p</sup> the unit element it is the number of points over the degree j extension of the residue field.
- For large j it equals the trace of Frobenius<sup>j</sup> × f<sup>p</sup> on W<sub>ℓ</sub> (a theorem of Pink, once called Deligne's conjecture).

**The endoscopic group H.** H = G(U(1) × U(1,1)). It is the only non-trivial elliptic endoscopic group of GU(2,1). Test functions on G transfer to test functions on H.

## Main results

**Theorem (stable point count; Corollary 2.4).** For G = GU(2,1) and H as above, N(j, f<sup>p</sup>) = ST<sub>e</sub><sup>G</sup>(f<sup>G</sup>) + ½ ST<sub>e</sub><sup>H</sup>(f<sup>H</sup>), where ST<sub>e</sub> is the elliptic part of the stable trace formula and f<sup>H</sup> is a transfer of f<sup>G</sup>. This is Kottwitz's formula specialised to this group.
- Step 1: Kottwitz's formula is a sum over elliptic endoscopic triples.
- Step 2: here only G and H occur.

**Theorem (parabolic part of the trace; Theorem 7.1).** Let p be a good prime, different from ℓ and split in E. For every Hecke function f<sup>p</sup> away from p and every j > 0, the parabolic part of the trace of Frobenius<sup>j</sup> × f<sup>p</sup> on W<sub>λ</sub> is an explicit sum over cuspidal automorphic representations π of the twisted diagonal torus. The sum has three groups of terms, sorted by the component of π at infinity. Two enter with a plus sign and one with a minus sign. Each term is an explicit expression in p<sup>j</sup> and Satake parameters, times a trace of an induced representation.
- Step 1: rewrite the point count through the geometric and then the spectral side of the non-invariant twisted trace formula, for G and for H, and split by Levi subsets.
- Step 2: compare the diagonal Levi terms for G and H, find the cancellations, and read the remainder as the trace on a virtual module M<sub>1</sub> + M<sub>2</sub> − M<sub>3</sub> of Galois and Hecke modules.

**What is not proved here.** The elliptic part of the trace and the final formula for the L-function are left to a later paper that the author announces. So this paper alone does not give the L-function.

## Note, then ignore

- Twisted groups: the author replaces the unitary groups by Res<sub>E/ℚ</sub> of their base change with the Galois twist θ, so that Laumon's method for linear groups applies. It is a translation step. Safe to skip on a first reading.
- Assumptions on test functions: the computation first needs special test functions at infinity, built from pseudocoefficients of discrete series. The last proof removes these assumptions. Safe to skip.
- Only split p: the paper treats primes that split in E, and says this suffices to determine the L-function. Safe to skip.
- Intersection cohomology: Morel computed the intersection cohomology of the Baily–Borel compactification for GU(p,q). The author stresses that the compact support result does not follow from hers in an obvious way. Safe to skip.
- The coefficient field F: W<sub>ℓ</sub> is tensored up to a completion F<sub>λ</sub> of a number field large enough to define the three Galois modules. Safe to skip.

## One next step

Open the paper and read only §1.3, "Structure of the Argument", on pages 3 and 4. It lists the six steps in plain words.

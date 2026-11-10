source: https://www.mn.uio.no/math/personer/vit/rognes/papers/even.pdf
slogan: Filter any commutative ring spectrum by its maps to even ones, and motivic spectral sequences appear for rings that have no algebraic geometry.
basis: the full text

## Before you start

These are 35 slides from a 2024 talk, and they move from spectra to syntomic cohomology of ko in about twenty minutes of reading. The feeling to expect is a fear of being too slow: each slide assumes the one before, and names pile up. Slides are compressed, so losing the thread is normal here, and nothing is wrong with you when it happens. If you want one picture of why "even" matters in homotopy theory, the middle three slides hold it. Enjoy those. The opening and the closing computation are optional.

## The story

Number theorists compute algebraic K-theory of fields with a motivic spectral sequence. Its input is Galois cohomology, cut off above the diagonal. Rognes asked in 2005 and 2014 whether ring spectra such as ku have a motivic cohomology of their own. The obstacle is that there is no geometry to define it with. Hahn, Raksit and Wilson found a homotopical route in 2022. An even ring spectrum, one with homotopy only in even degrees, has an obvious filtration: truncate at double speed. For any E<sub>∞</sub>-ring A, take all maps from A to even rings and take the limit of their filtrations. For the sphere this gives back the Adams–Novikov spectral sequence. For THH and TC it gives prismatic and syntomic cohomology. The talk ends by running the machine on real K-theory ko.

## Main definitions

**Even spectrum.** A spectrum B with π<sub>∗</sub>B = 0 in odd degrees. Its double-speed Whitehead filtration has weight w term τ<sub>≥2w</sub>B, and the associated graded in weight w is the Eilenberg–MacLane spectrum of π<sub>2w</sub>B shifted by 2w.
- Even: ku, KU, MU.
- Not even: ko, KO.

**Even filtration.** For an E<sub>∞</sub>-ring A, the weight w term fil<sup>w</sup><sub>ev</sub>A is the limit of τ<sub>≥2w</sub>B over all E<sub>∞</sub>-maps A → B with B even. This is the right Kan extension of the double-speed filtration from even E<sub>∞</sub>-rings to all E<sub>∞</sub>-rings. The result is an E<sub>∞</sub>-algebra in filtered spectra.

**Evenly faithfully flat.** An E<sub>∞</sub>-map A → B such that, for every E<sub>∞</sub>-map A → E with E even, the base change B ⊗<sub>A</sub> E is even and faithfully flat as an E-module.

**Chromatically quasisyntomic.** A connective E<sub>∞</sub>-ring A such that MU<sub>∗</sub>A is even and quasisyntomic as a ring. Examples on the slides: the sphere, MU, ko, ku, tmf, and HR for quasisyntomic R.

## Main results

**Claim (evenly faithfully flat descent; Hahn–Raksit–Wilson).** If A → B is evenly faithfully flat, then the even filtration of A is the limit of the even filtrations of the cosimplicial resolution B, B ⊗<sub>A</sub> B, and so on.
- Case B even: every term of the resolution is even, so the even filtration of A is the limit of plain double-speed truncations.

**Claim (Novikov spectral sequence).** The unit map from the sphere S to MU is evenly faithfully flat with MU even. So π<sub>∗</sub> of the associated graded of the even filtration of S is Ext over MU<sub>∗</sub>MU of MU<sub>∗</sub> with itself, the E<sub>2</sub>-page of the Adams–Novikov spectral sequence converging to π<sub>∗</sub>S.

**Theorem (motivic filtrations; cited as [HRW22]).** Define the motivic filtration of THH(A) as its even filtration, and those of TC<sup>−</sup>, TP and TC by the same limit over even rings with circle or cyclotomic structure. For A chromatically quasisyntomic these filtrations are exhaustive, and the motivic filtration of TC(A) is the equaliser of the two maps can and φ from that of TC<sup>−</sup>(A) to that of TP(A).
- Result: a conditionally convergent motivic spectral sequence from π<sub>n</sub> of the weight w graded piece of TC(A) to π<sub>n</sub>TC(A).
- Names: the homotopy of the graded pieces of TP and TC is the prismatic and syntomic cohomology of A.

**Claim (the case ko; Angelini-Knoll, Ausoni and Rognes, 2023).** The map THH(ko) → THH(ku/MU) is an evenly faithfully flat map of circle-equivariant E<sub>∞</sub>-rings with even target. This lets one compute the syntomic cohomology of ko with A(1)-coefficients and run the motivic spectral sequence.
- Consequences listed: K(ko) has height 2, the telescope conjecture holds for it at height 2, and the higher Lichtenbaum–Quillen property holds.

## Note, then ignore

- The first fourteen slides. They review spectra, periodicity, K-theory and the classical motivic spectral sequence for ℚ<sub>2</sub>. They are motivation. Safe to skip on a first reading if you know the area, and safe to skim if not.
- V(n) may not exist. Smith–Toda complexes need not exist as spectra, but analogues exist as algebras over the graded even filtration of the sphere. This is why the computation works there. Safe to skip.
- A(1) has no product. The spectrum A(1) carries no ring structure, so the talk passes through V(1) and V(2) coefficients to keep products. Safe to skip.
- Suppressed hypotheses. The slides say they suppress p-completion and bounded torsion in the quasisyntomic part. Safe to skip.
- Lost formulas. Several displayed limits are drawn as pictures on the slides. The definitions above give their content. Safe to skip.

## One next step

Open the slides and read only the three slides titled "Even filtration", "Evenly faithfully flat descent" and "Novikov spectral sequence", about halfway through.

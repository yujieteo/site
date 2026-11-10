source: https://arxiv.org/pdf/2205.02391
slogan: Two natural measures on a conjugacy orbit differ by a discriminant and an L-value, and for GL<sub>2</sub> you can compute every factor by hand.
basis: the introduction and the main theorem statements

## Before you start

This is a 48-page note about constants. The feeling it may raise is impatience: surely the choice of Haar measure cannot matter this much. It is fine to feel that. The author says she was surprised herself by how hard these calculations are to track in the literature. If you want to read trace formula papers without being lost each time a volume appears, this note pays you back. Treat it as a set of worked examples to enjoy one at a time. There is no need to finish it.

## The story

An orbital integral sums a test function over a conjugacy class in a p-adic group. To integrate you need a measure on the orbit, and there are two natural choices. One fixes Haar measures on the group G and on the centraliser torus T and takes the quotient. The other views the orbit as a fibre of the Steinberg map, which sends a matrix to its characteristic polynomial, and divides the measure on G by the measure on the base. Langlands, Frenkel and Ngô need the second choice, because they want to apply Poisson summation over the base. Most of the literature uses the first. The note computes the ratio. It is the square root of the Weyl discriminant, times a torus volume that turns out to be an Artin L-value. Summed over all places, these local factors rebuild the analytic class number formula.

## Main definitions

**Measure from a volume form.** On a p-adic field F the measure |dx| gives the ring of integers volume 1. A top-degree form ω on a variety V then gives a measure |ω| on V(F). For a smooth scheme X over the integers, the volume of the integral points is #X(k)/q<sup>dim X</sup>, where k is the residue field with q elements.

**The form ω<sub>T</sub> and the group T<sup>c</sup>.** For a torus T with character basis χ<sub>1</sub>, …, χ<sub>r</sub>, set ω<sub>T</sub> = dχ<sub>1</sub>/χ<sub>1</sub> ∧ … ∧ dχ<sub>r</sub>/χ<sub>r</sub>. T<sup>c</sup> is the maximal compact subgroup of T(F).
- Canonical measure: the one that gives the connected Néron model points T<sup>0</sup> volume 1.

**Geometric measure.** Let c : G → A<sub>G</sub> be the Steinberg map to the affine space of invariants. Its regular fibres are stable orbits. The form ω<sub>a</sub> on the fibre over a is defined by ω<sub>A<sub>G</sub></sub> ∧ ω<sub>a</sub> = ω<sub>G</sub>.
- For GL<sub>2</sub> on the Lie algebra: c(X) = (trace X, det X).

**Weyl discriminant.** For regular semisimple γ with centraliser T, D(γ) is the product of (1 − α(γ)) over all roots α. The note writes |Δ(γ)| = |D(γ)|<sup>1/2</sup>.

## Main results

**Theorem (torus volume as an L-value; Theorems 2.6 and 2.9).** If T splits over an unramified extension, then T<sup>0</sup> = T<sup>c</sup> and its volume for |ω<sub>T</sub>| equals #T<sup>0</sup><sub>κ</sub>(𝔽<sub>q</sub>)/q<sup>dim T</sup> = L(1, σ<sub>T</sub>)<sup>−1</sup>, where σ<sub>T</sub> is the Galois representation on the character lattice. For any T the canonical form gives T<sup>0</sup> the volume L(1, σ<sub>T</sub>)<sup>−1</sup>. The note quotes this from Bitan and does not prove it.
- Case split rank 1: the units have volume 1 − 1/q.
- Case norm-one torus of an unramified quadratic extension: volume 1 + 1/q.

**Theorem (geometric against quotient measure; Theorem 3.11).** Let G be split, semisimple and simply connected over a local field F, and let γ be regular semisimple with centraliser T. Then on the orbit of γ, |ω<sub>c(γ)</sub>| = |Δ(γ)| · |ω<sub>T\G</sub>|. This is relation (3.31) of Frenkel, Langlands and Ngô without their L-factor. The note gives a sketch and says it does not aim at rigorous general proofs.
- Step 1: both measures come from forms, so compare the forms on T. The Jacobian of c restricted to T is the product of the positive roots up to sign.
- Step 2: the Weyl integration formula supplies the remaining factor.

**Claim (geometric against canonical; equation (36)).** At every place, |ω<sub>a</sub>| = |Δ(γ)| · vol<sub>ω<sub>T</sub></sub>(T<sup>0</sup>)<sup>−1</sup> · μ<sup>can</sup><sub>T\G</sub>.

**Claim (GL<sub>2</sub>; Section 4.1).** For split regular γ in GL<sub>2</sub>(F) and f<sub>0</sub> the characteristic function of GL<sub>2</sub>(O<sub>F</sub>), the canonical orbital integral is O<sub>γ</sub>(f<sub>0</sub>) = |D(γ)|<sup>−1/2</sup>. The elliptic cases follow from Kottwitz's count of fixed points on the tree.

## Note, then ignore

- Self-dual measures. Frenkel, Langlands and Ngô normalise by a global character, so their local measures differ from this note's by a power of the discriminant of the field. Over ℚ the difference vanishes. Safe to skip.
- Residue characteristic 2. The examples assume p ≠ 2, and Section 5.2 redoes them for p = 2. Safe to skip at first.
- T<sup>0</sup> against T<sup>c</sup>. For ramified tori T<sup>0</sup> has finite index in T<sup>c</sup> and the two forms differ. This adds two more factors. Safe to skip.
- Stable orbits. For GL<sub>n</sub> a stable orbit is one rational orbit, so the distinction does no work in the examples. Safe to skip.
- The appendix by Koster. It compares the geometric measure with Kirillov's measure on coadjoint orbits for sl<sub>2</sub> and so<sub>3</sub>. It is a side topic. Safe to skip.

## One next step

Open the paper at Example 2.2 on page 4 and check the one-line computation that the units of F have volume 1 − 1/q.

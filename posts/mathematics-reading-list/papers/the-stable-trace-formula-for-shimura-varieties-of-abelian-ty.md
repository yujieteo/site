source: https://people.math.harvard.edu/~kisin/dvifiles/stabletrace.pdf
slogan: Counting points on a Shimura variety of abelian type over finite fields gives a sum of stable trace formulas for endoscopic groups.
basis: the abstract and introduction

## Before you start

This paper is 233 pages and assumes Shimura varieties, endoscopy and Galois gerbs. The likely feeling is being out of your depth, with some fear that even the statement will not parse. That feeling fits the facts, and nothing is wrong with you for having it. If you want to see where trace formulas meet the zeta functions of varieties, the first four pages of the introduction say it plainly. Read them for the shape of the result. There is no need to go further.

## The story

Langlands wanted to write the Hasse–Weil zeta function of a Shimura variety in terms of automorphic L-functions. His plan was to compare two trace formulas. One counts points of the variety over finite fields through Frobenius acting on cohomology. The other is the Arthur–Selberg trace formula. The two only match after both are stabilised, and Kottwitz turned this into a precise conjecture in 1990. He proved it for PEL type A and C. The block for larger classes was the point count, since most Shimura varieties are not moduli spaces of abelian varieties with simple extra structure. Kisin, Shin and Zhu describe the points through a refined form of the Langlands–Rapoport conjecture, prove that form for abelian type, and then stabilise. Kottwitz's conjecture follows at primes of hyperspecial level.

## Main definitions

**Shimura datum of abelian type.** A Shimura datum (G, X), with reflex field E, that is "isogenous" in a suitable sense to a datum of Hodge type, meaning one that embeds in a Siegel datum. The introduction does not restate the precise definition, so I give only this rough form. The authors stress that the data in applications are typically of abelian type and not of Hodge type.

**Frobenius–Hecke trace T(m, f).** Let ξ be an algebraic representation of G and H<sub>c</sub><sup>i</sup>(Sh, ξ) the compactly supported ℓ-adic cohomology, in the limit over levels. Let Φ be a geometric Frobenius at a place of E above a prime p ≠ ℓ. Then T(m, f) = Σ (−1)<sup>i</sup> tr(f × Φ<sup>m</sup> on H<sub>c</sub><sup>i</sup>(Sh, ξ)).
- The Hecke function f is a product of a function away from p and the characteristic function of a hyperspecial subgroup of G(ℚ<sub>p</sub>).
- For f the characteristic function of a level subgroup and ξ trivial, T(m, f) is tied to the Euler factor at p of the zeta function.

**Elliptic endoscopic datum.** A datum 𝔢 that includes a smaller group H, the endoscopic group. The introduction uses the notion without defining it, so I do not state the definition here. What matters: stable distributions on H, or on a z-extension H<sub>1</sub> of H, receive the terms that are not stable on G.

## Main results

**Theorem (stable trace formula; Theorem 1, proved as Theorem 8.3.11).** Let (G, X) be of abelian type, with f hyperspecial at p as above. For all sufficiently large m, T(m, f) = Σ ι(𝔢) ST<sub>ell</sub>(f<sup>H<sub>1</sub></sup>). The sum runs over elliptic endoscopic data 𝔢 for G up to isomorphism. Each ι(𝔢) is a rational constant, and ST<sub>ell</sub> is an elliptic stable distribution on H<sub>1</sub>. When G<sup>der</sup> is simply connected and the centre of G is cuspidal, it is the elliptic part of the stable trace formula for H.
- Step 1: the point counting formula (Theorem 2).
- Step 2: stabilisation (Theorem 3).

**Theorem (point counting formula; Theorem 2, proved as Theorem 6.3.6).** For (G, X) of abelian type and m large, T(m, f) is a sum over certain ℝ-elliptic elements γ<sub>0</sub> of G(ℚ) and refined "Kottwitz parameters" with vanishing invariant α. Each term is a product of a volume, an orbital integral of f away from p, a twisted orbital integral at p, and tr ξ(γ<sub>0</sub>). No hypothesis on G<sup>der</sup> or the centre is needed.
- Step 1: a "Langlands–Rapoport–τ" conjecture implies the formula, for any Shimura datum (Theorem 4).
- Step 2: that conjecture holds for abelian type, for the canonical integral models (Theorem 5).

**Theorem (stabilisation; Theorem 3, proved as Theorem 8.3.10).** The right side of the point counting formula equals Σ ι(𝔢) ST<sub>ell</sub>(f<sup>H<sub>1</sub></sup>). This step does not assume abelian type. It uses transfer of orbital integrals and the fundamental lemma.

**Conjecture (Langlands–Rapoport).** The points of the integral model over the algebraic closure of 𝔽<sub>q</sub> are in equivariant bijection with a union, over admissible morphisms φ of Galois gerbs, of double quotients I<sub>φ</sub>(ℚ)\X(φ)/K<sup>p</sup>. The authors say this remains open even for Siegel modular varieties. They prove a weaker "τ" version.

## Note, then ignore

- "Sufficiently large m". This makes the local terms in the Lefschetz–Verdier formula the naive ones (results of Fujiwara and Varshavsky). Safe to skip on a first reading.
- z-extensions and central characters. They handle the case where G<sup>der</sup> is not simply connected. Safe to skip at first.
- The elements τ(φ). The proved bijection twists each I<sub>φ</sub>(ℚ) by an element τ(φ), and two conditions on τ(φ) are enough for counting. Safe to skip at first.
- Compact support. The theorem is for compactly supported cohomology. The intersection cohomology version is not proved here. Safe to skip at first.
- Elliptic part only. Showing that non-elliptic terms cancel is left to later work. Safe to skip at first.

## One next step

Read §0.1 from the definition of T(m, f) to the statement of Theorem 1, about one page.

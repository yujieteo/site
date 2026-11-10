source: https://web.math.princeton.edu/~smorel/stabilisation.pdf
slogan: Morel computes and stabilises the Frobenius–Hecke trace on intersection cohomology of non-compact unitary Shimura varieties, and gets Galois representations satisfying Ramanujan–Petersson.
basis: the abstract and introduction

## Before you start

This is a research monograph of about 230 pages, and every chapter leans on Kottwitz, Arthur and the fundamental lemma. The likely feeling is dread that you are too slow for it, or that you need ten other books first. That feeling makes sense here. If you want to see how the geometry of a Shimura variety produces Galois representations for automorphic forms, the preface alone shows the route. Enjoy the preface. The chapters are optional.

## The story

Ihara, Langlands and Kottwitz had a method. Count the fixed points of Frobenius times a Hecke correspondence on a Shimura variety with the Grothendieck–Lefschetz formula. Compare the count with the Arthur–Selberg trace formula. The comparison writes the L-function of the variety in automorphic terms. Kottwitz carried this out for compact varieties. Two things block the general case. A non-compact variety needs the Baily–Borel compactification, which is singular, so one must use intersection cohomology, and the boundary adds new terms. And groups with endoscopy need the count to be stabilised. Sophie Morel treats both for unitary groups over ℚ. The boundary strata are smaller Shimura varieties, so their terms have the same shape, and she stabilises them on Kottwitz's model. Base change to GL<sub>n</sub> then turns the answer into Galois representations.

## Main definitions

**Shimura variety.** For a Shimura datum (G, X) and an open compact subgroup K of G(𝔸<sub>f</sub>), a quasi-projective variety M<sup>K</sup>(G, X) over the reflex field, with complex points G(ℚ)\\(X × G(𝔸<sub>f</sub>)/K). It is smooth when K is neat.
- In the main theorems G = GU(p, q), a unitary similitude group defined with an imaginary quadratic field E. The variety has dimension pq.

**Baily–Borel compactification and intersection complex.** A normal projective variety that contains M<sup>K</sup>(G, X) as an open dense subset. It is not smooth in general. Its intersection complex IC<sup>K</sup>V, with coefficients in an algebraic representation V of G, replaces ordinary cohomology.
- The boundary strata are indexed by admissible parabolic subgroups P and come from Shimura data for smaller groups G<sub>P</sub>.

**Hecke correspondence.** For g in G(𝔸<sub>f</sub>) and K′ ⊂ gKg<sup>−1</sup>, a finite morphism T<sub>g</sub> from level K′ to level K. It extends to the compactifications.

**Elliptic endoscopic groups.** For G = GU(p, q) these are the groups G(U\*(n<sub>1</sub>) × U\*(n<sub>2</sub>)) with n<sub>1</sub> + n<sub>2</sub> = p + q and n<sub>2</sub> even. Stabilising a trace means rewriting it as a sum of stable terms, one for each such group.

## Main results

**Theorem (stabilised fixed point formula; Corollary 6.3.2).** For the unitary groups over ℚ of the book, take the trace of a Hecke correspondence times a high enough power of Frobenius at a good place, on the intersection cohomology of the Baily–Borel compactification. This trace has a stable form, as Kottwitz conjectured. I read this in the preface only, so I do not give the formula.
- Step 1: Theorem 1.7.1 gives the unstabilised trace, with one group of terms for each boundary stratum.
- Step 2: stabilise the boundary terms. The hardest part is at the infinite place, a formula for stable discrete series characters (Proposition 3.4.1).

**Theorem (main result; Theorem 8.4.3).** The same trace equals a sum of twisted trace formula terms on products of general linear groups, for well-chosen test functions. Again I state only what the preface says.

**Theorem A (L-function; Corollary 8.4.5).** Let G = GU(p, q), K small enough and V irreducible. Let ℘ be a finite place of E above a prime where K is hyperspecial. Then log L<sub>℘</sub>(s, IC<sup>K</sup>V) is a finite sum of terms c · log L(s − pq/2, π<sub>H,℘</sub>, r<sub>H</sub>). Here H runs over the elliptic endoscopic groups, π<sub>H</sub> over automorphic representations of H(𝔸<sub>E</sub>), r<sub>H</sub> over an explicit finite set of representations of the L-group, and the c are complex numbers.

**Theorem B (Galois representations; Corollary 8.4.9, simplified).** Let n be a positive integer not divisible by 4. Let π be a cuspidal automorphic representation of GL<sub>n</sub>(𝔸<sub>E</sub>) that is regular algebraic and stable under g ↦ <sup>t</sup>g<sup>−1</sup>. Then there are a number field, an integer N ≥ 1 and λ-adic representations σ<sub>λ</sub> of the Galois group of E, pure of weight 1 − n, with log L<sub>℘</sub>(s, σ<sub>λ</sub>) = N · log L(s + (n−1)/2, π<sub>℘</sub>) at the unramified places.
- Consequence: π satisfies the Ramanujan–Petersson conjecture at every finite unramified place.

## Note, then ignore

- The fundamental lemma. The stabilisation needs it. For unitary groups it is known by Laumon–Ngô, Hales and Waldspurger, and in general by Ngô. Chapter 9 supplies the twisted case that the book uses. Safe to skip.
- The integer N. Theorem B gives σ<sub>λ</sub> whose L-factor is the N-th power of that of π, not a single clean representation. Safe to skip on a first reading.
- The case 4 | n. The preface says a weaker and longer statement holds there. Safe to skip.
- Kottwitz's unpublished manuscript. Chapter 5 uses it, and Section 7.1 shows how to make the results formally independent of it. Safe to skip.
- The condition on Levi quotients. Section 1.1 asks that each relevant Levi quotient splits as a product L<sub>P</sub> × G<sub>P</sub>. Unitary and symplectic groups satisfy it. Safe to skip.

## One next step

Open the PDF at the Preface, page vii, and read Theorem B and the paragraph after it that begins with the method of Ihara, Langlands and Kottwitz.

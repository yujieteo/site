source: https://people.mpim-bonn.mpg.de/scholze/ws202425_habiro.pdf
slogan: A two-page course plan explains why q-series from knot theory and q-deformed de Rham cohomology turned out to need the same ring.
basis: the full text

## Before you start

The feeling to expect is a small let-down, then maybe doubt. The link is a two-page course announcement, not lecture notes, and it lists a dozen topics you may not know. It is fine to feel that two pages cannot be worth much, or that the topic list is out of reach. Notice that the author says twice that he is "completely ignorant" of the knot side. If you want a map of this subject before reading the 70-page paper, this is the shortest one. Read it like a letter.

## The story

Scholze had conjectured a q-deformation of de Rham cohomology. It was built later, but only over ℤ[[q − 1]], that is, near q = 1. Near p-power roots of unity it seemed to make sense over ℤ and not only p-adically. So he asked whether it lives over the Habiro ring, which completes ℤ[q, q<sup>−1</sup>] at all roots of unity. He could build the right ring by hand for étale ℤ-algebras, saw no way to go to higher dimensions, and gave up. Separately, Garoufalidis and Zagier had power series from knot theory with expansions at every root of unity, coefficients in a number field, and no visible integrality. Then it turned out that the rings Scholze had set aside are the home of those series. The course works through this meeting with explicit q-series.

## Main definitions

**Habiro ring.** H is the inverse limit over n and m of ℤ[q, q<sup>−1</sup>]/(1 − q<sup>n</sup>)<sup>m</sup>. It is the completion of the Laurent polynomials at all roots of unity.

**Habiro ring of a number field.** A ring H<sub>K</sub> attached to a number field K, defined in the paper by Garoufalidis, Scholze, Wheeler and Zagier. The outline describes it as the Habiro ring of an étale ℤ-algebra and does not give the construction.

**q-Pochhammer symbol.** (x; q)<sub>∞</sub> = Π<sub>n≥0</sub> (1 − q<sup>n</sup>x). The outline names it as the basic q-series for the computations in the course.

## Main results

**Claim (a common home).** Habiro rings of étale ℤ-algebras, first built by hand as the realisation of Artin motives for q-de Rham cohomology, are the rings in which some of the Garoufalidis-Zagier power series live.
- Case before: the series have coefficients in a number field K, and certain multiplicative combinations are integral, yet they do not lie in a naive version of the Habiro ring over K.

**Claim (a regulator map).** There is a map K<sub>3</sub>(K) → Pic(H<sub>K</sub>) from the third algebraic K-group of K to the Picard group of its Habiro ring. The Garoufalidis-Zagier q-series live in these line bundles. The author states that he does not understand what the line bundles mean.

**Claim (announced, from Wagner's thesis).** Away from finitely many primes, q-de Rham cohomology and a refinement called q-Hodge cohomology are canonically defined over the Habiro ring. The route goes through Efimov's refined TC<sup>−</sup> relative to ku. The outline announces this as a planned topic and gives no statement with hypotheses.

**Claim (a hoped-for bridge).** q-deformed de Rham cohomology should connect the period rings of p-adic Hodge theory with those of complex Hodge theory. The series show good behaviour on both sides, which seems related to the Fargues-Fontaine curve and to the twistor projective line. This is a hope and a goal of the course, not a theorem.

## Note, then ignore

- Two definitions of H: this outline completes Laurent polynomials at (1 − q<sup>n</sup>)<sup>m</sup>. The paper uses polynomials modulo (1 − q)…(1 − q<sup>n</sup>). They give the same ring. Safe to skip on a first reading.
- "In preparation": the outline cites the paper before it appeared. It is now on arXiv as 2412.04241. Safe to skip.
- No lecture notes here: the PDF holds only the plan. Notes or recordings, if any, are elsewhere. Safe to skip.
- The topic list: dilogarithm, 5-term relation, Ramanujan's summation, Nahm sums, the Bloch group, regulators. These are tools for the computations and you do not need them to follow the plot. Safe to skip.

## One next step

Open the PDF and read the fourth and fifth paragraphs, from "Coming from a completely different direction" to "In a miraculous event". That takes two minutes.

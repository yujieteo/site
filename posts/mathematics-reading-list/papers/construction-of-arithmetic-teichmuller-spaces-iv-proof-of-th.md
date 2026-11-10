source: https://arxiv.org/pdf/2403.10430
slogan: Joshi claims to finish Mochizuki's route to abc by averaging a Tate parameter over deformations of one number field, in a preprint marked preliminary.
basis: the introduction and the main theorem statements

## Before you start

The feeling this one raises is unease. The subject is a public dispute, the preprint says "preliminary version for comments", and you may fear wasting time on something that will not stand. That worry is reasonable and you can keep it while you read. If you want to know what the abc argument is meant to look like in outline, Section 1.5 tells you in four pages. Read it as a story about an idea. You do not have to reach a verdict.

## The story

The abc-conjecture bounds the size of coprime integers with a + b = c by the product of the primes dividing abc. Mochizuki announced a proof in 2012. Few people could follow it, and Scholze and Stix argued that a central step, Corollary 3.12, cannot work. Joshi's series of papers rebuilds the theory on a different base: perfectoid fields and Berkovich spaces. In his version a fixed number field has a metrisable space of "deformations", and that space carries a global Frobenius map. The classical picture is Teichmüller theory, where one surface carries many complex structures. This fourth paper takes the claimed Corollary 3.12 from the third paper and runs the last, Diophantine part of the argument. The author states that the paper is still a work in progress.

## Main definitions

**abc-conjecture (Conjecture 2.1.1).** For each ε > 0 there is a constant C(ε) > 0 such that all coprime integers with a + b = c satisfy max(|a|, |b|, |c|) ≤ C(ε) · Π<sub>p | abc</sub> p<sup>1+ε</sup>.

**Vojta's height inequality for curves (Conjecture 2.5.1).** Let X be a smooth, projective, geometrically connected curve over a number field L, and D a reduced divisor with X − D hyperbolic. For each d ≥ 1 and ε > 0, the height attached to ω<sub>X</sub>(D) is at most (1 + ε)(log-diff<sub>X</sub> + log-con<sub>D</sub>), up to a bounded error, on points of X − D of degree ≤ d.
- Case (ℙ<sup>1</sup>, {0, 1, ∞}): this is the strong abc-conjecture (Conjecture 2.6.1), and d = 1 gives abc.

**Arithmeticoid and holomorphoid.** An arithmeticoid is Joshi's name for one deformation of the arithmetic of a number field L. It is a point y of a parameter space Y<sub>L</sub>. A holomorphoid of a variety X/L adds analytic spaces of X to that point. The definitions are in earlier papers of the series, not here.
- Global Frobenius: a map φ: Y<sub>L</sub> → Y<sub>L</sub>, which Joshi identifies with Mochizuki's log-link.

**Theta-values locus.** An adelic set that collects the Tate parameters of an elliptic curve across a chosen family of holomorphoids. Its volume is the quantity the proof bounds from both sides.

## Main results

All three items are claims of a preprint that depends on earlier preprints in the same series. I read the statements, not the proofs.

**Claim (Vojta's inequality; Theorem 7.1.1 and Theorem 2.10.1).** For X, D, d and ε as in the definition above, Vojta's height inequality holds on the points of X − D of degree ≤ d. Stated consequences: the strong abc-conjecture and abc, the arithmetic Szpiro inequality, and an effective Mordell conjecture for X/L.
- Step 1: by a 2010 theorem of Mochizuki, it is enough to treat ℙ<sup>1</sup> minus three points on "compactly bounded" subsets.
- Step 2: on such a subset, pass to elliptic curves with initial theta data and apply the first main bound.

**Claim (existence of initial theta data; Theorem 5.7.1).** Outside an exceptional set of bounded height, the elliptic curves attached to points of a compactly bounded subset carry the auxiliary data that the theory needs. This matches Mochizuki's Corollary 2.2(i, ii) in his fourth paper.

**Claim (main bounds; Theorems 6.1.1 and 6.10.1).** The log-volume of the theta-values locus has an upper bound of the form C · A, and Corollary 3.12 of the previous paper gives a lower bound A > 0. Together they force C ≥ 1, and that inequality is Vojta's inequality on the given subset.
- Step 1: the lower bound is imported from the third paper.
- Step 2: the upper bound is a sum over all primes of local estimates on differents and ramification.

## Note, then ignore

- Status. The preprint is version 2, labelled preliminary, and says it is a work in progress. Treat every "theorem" here as a claim under dispute. This point is not safe to skip. The rest are.
- Two theta loci. Joshi defines his own locus alongside Mochizuki's. The outline uses either. Skip the difference on a first reading.
- No real embeddings. The outline assumes for simplicity that L has no real embedding. It is a convenience. Skip it.
- Rosetta Stone. Translation between Joshi's and Mochizuki's terms lives in the third paper, Section 8. You do not need it for the outline.
- Scholze-Stix objections. Section 1.9 lists them and gives Joshi's replies. It is one side of the dispute. Skip it until you want the argument itself.

## One next step

Read Conjecture 2.1.1 and Theorem 2.10.1 in Section 2, then the first two paragraphs of Section 1.5.

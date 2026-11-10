source: https://arxiv.org/pdf/1609.06370
slogan: The same Hecke eigenvalues repeat across several cohomological degrees because a hidden motivic cohomology group shifts degrees, and that prediction can be tested on periods.
basis: the introduction and the main theorem statements

## Before you start

This paper is 90 pages long and leans on three large subjects at once: automorphic representations, motives and Beilinson's conjectures. The likely feeling is shame at not owning all that background. That feeling makes sense, and it can sit there while you read. Nobody holds all three comfortably. What you may want from the paper is one clean idea about why cohomology of arithmetic groups has a pattern in it. The first five pages give you that idea. Read them for the pleasure of the pattern, and let the rest wait.

## The story

Take an arithmetic group Γ, such as a congruence subgroup of SL<sub>n</sub>(ℤ). Hecke operators act on its cohomology. A tempered Hecke eigensystem does not appear in one degree. It appears in a run of degrees q, q + 1, …, q + δ, with multiplicities given by binomial coefficients, exactly as if an exterior algebra on a δ-dimensional space were acting. For Shimura varieties a Lefschetz SL<sub>2</sub> explains such repeats. In general nothing did. Prasanna and Venkatesh propose a source: the dual of a motivic cohomology group L attached to the adjoint motive of the eigensystem. They cannot build the action over ℚ. They can build it over ℂ, using real Lie theory and the regulator, and they conjecture that it preserves rational cohomology. The conjecture then predicts concrete relations between periods, and they check some.

## Main definitions

**The Π-part of cohomology.** Let G be a reductive ℚ-group with no central split torus, and Y = G(ℚ)\S × G(𝔸<sub>f</sub>)/K its arithmetic manifold at level K. A character χ of the unramified Hecke algebras picks out a finite set Π of automorphic representations, assumed cuspidal and tempered at ∞. H<sup>∗</sup>(Y, ℚ)<sub>Π</sub> is the χ-eigenspace.
- Size: dim H<sup>j</sup>(Y, ℝ)<sub>Π</sub> = k · binom(δ, j − q), with δ = rank G − rank K<sub>∞</sub> and q = (dim Y − δ)/2.
- Example: for G = SL<sub>2m</sub>, q = m<sup>2</sup> and δ = m − 1.

**The space 𝔞<sub>G</sub>.** A canonical complex vector space of dimension δ attached to the real group G(ℝ). It is the split part of a fundamental Cartan subalgebra. The exterior algebra ∧<sup>∗</sup>𝔞<sub>G</sub><sup>∗</sup> acts on the (𝔤, K)-cohomology of a tempered representation, raising degree, and H<sup>q</sup>(Y, ℂ)<sub>Π</sub> ⊗ ∧<sup>i</sup>𝔞<sub>G</sub><sup>∗</sup> → H<sup>q+i</sup>(Y, ℂ)<sub>Π</sub> is an isomorphism.

**The motivic group L.** Assume, as the Langlands programme predicts, that Π has an adjoint motive Ad<sup>∗</sup>Π over ℚ, of weight zero. Then L = H<sup>1</sup><sub>M</sub>((Ad<sup>∗</sup>Π)<sub>ℤ</sub>, ℚ(1)), a ℚ-vector space of motivic cohomology classes that extend to an integral model.
- Regulator: Beilinson's regulator gives a map L ⊗ ℂ → 𝔞<sub>G</sub>, conjecturally an isomorphism.
- Link to L-functions: Beilinson's conjecture ties this regulator to the adjoint L-function L(s, Π, Ad<sup>∗</sup>) at s = 1.

## Main results

**Conjecture (motivic action; Conjecture 1.2.1).** If an element of 𝔞<sub>G</sub><sup>∗</sup> lies in the rational dual L<sup>∗</sup> under the dual regulator map, then its action on H<sup>∗</sup>(Y, ℂ)<sub>Π</sub> preserves H<sup>∗</sup>(Y, ℚ)<sub>Π</sub>. So ∧<sup>∗</sup>L<sup>∗</sup> acts on rational cohomology, which is freely generated in degree q.
- Case of tori (§1.3): for an anisotropic torus the statement is true and easy. L is the unit-like group Δ ⊗ ℚ, the regulator is the logarithm, and the action is cup product with invariant 1-forms.

**Prediction (period of the lowest class; Prediction 1.4.1).** Suppose dim H<sup>q</sup>(Y, ℂ)<sub>Π</sub> = 1 and ω is a harmonic form generating H<sup>q</sup>(Y, ℚ)<sub>Π</sub>. Then the conjecture implies ⟨ω, ω⟩ equals vol(L) up to a non-zero rational number.
- Step 1: act on ω by a generator ν of the top exterior power of L<sup>∗</sup> to reach the dual degree, and use Poincaré duality.
- Step 2: the action is isometric, so the norm of ν, which is 1/vol(L), appears.

**Theorem (conditional check; Theorem 7.4.1, as summarised in §1.4).** Assume Beilinson's conjecture, the Ichino–Ikeda conjecture and stated working hypotheses on local period integrals. For the pairs PGL<sub>n+1</sub> × PGL<sub>n</sub> ⊃ GL<sub>n</sub> over ℚ or over an imaginary quadratic field, and SO<sub>n+1</sub> × SO<sub>n</sub> ⊃ SO<sub>n</sub> over an imaginary quadratic field, the period of ω over the cycle of the subgroup satisfies |∫<sub>γ</sub> ω|<sup>2</sup>/⟨ω, ω⟩ ∈ √ℚ · vol(L)<sup>−1</sup>. This agrees with the prediction up to a square root of a rational. I read only the informal statement in the introduction.

**Prediction (inner forms; Prediction 1.4.2).** For inner forms G and G′ with matching Π and Π′ and compatible metrics, the determinants of the lowest-degree period matrices agree up to ℚ<sup>×</sup> after raising each to the other's dimension. This statement does not mention motivic cohomology.

## Note, then ignore

- Adjoint versus coadjoint. The authors keep Ad and Ad<sup>∗</sup> apart to be canonical and to handle reductive groups. For semisimple G the Killing form identifies them. Safe to skip on a first reading.
- Y is not connected. It is a finite union of quotients Γ<sub>i</sub>\S, used because the full Hecke algebra acts on it. Safe to skip.
- The twisted real structure. A special real form of 𝔞<sub>G</sub><sup>∗</sup> (Definition 3.1.2) makes the statements hold for real cohomology too. Safe to skip.
- The factor √ℚ. Square classes appear in the period computation and the authors chose not to track them. Safe to skip.
- The p-adic version. The conjecture has a p-adic counterpart with a Bloch–Kato Selmer group in place of L. Other papers treat it. Safe to skip.

## One next step

Open the paper at §1.2 on page 3 and read from the start of that section to the indented sentence after Conjecture 1.2.1 on page 4.

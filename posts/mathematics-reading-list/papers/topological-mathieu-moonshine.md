source: https://arxiv.org/pdf/2006.02922
slogan: Mathieu moonshine may come from one class vanishing in twisted equivariant topological modular forms, and at odd primes a spectral sequence agrees.
basis: the introduction and the main theorem statements

## Before you start

This paper speaks two languages at once, quantum field theory and stable homotopy, and says so. The feeling it tends to raise is fear of being an outsider twice over: not a physicist, and not fluent in tmf. You can feel that and still read. If you like the idea that a strange list of numbers (45, 231, 770, ...) might have a topological cause, the introduction tells that story in five pages. Read those for interest. The 60 pages of computation are optional.

## The story

Eguchi, Ooguri and Tachikawa found a mock modular form H(τ) = 2q<sup>−1/8</sup>(−1 + 45q + 231q<sup>2</sup> + 770q<sup>3</sup> + ...) inside the elliptic genus of K3. Its coefficients are dimensions of representations of the Mathieu group M<sub>24</sub>. Twisted versions H<sub>g,h</sub> exist for all commuting pairs g, h in M<sub>24</sub>, yet M<sub>24</sub> acts on no K3 sigma model. So what produces them? Johnson-Freyd's idea: supersymmetric field theories in 1+1 dimensions should form a cohomology theory, conjecturally TMF. A theory S that is null in this cohomology, together with a choice of nullhomotopy, yields a mock modular form with shadow fixed by S. Do this M<sub>24</sub>-equivariantly and you get the H<sub>g,h</sub>. The paper names a candidate S and tests the needed vanishing by computing an Atiyah-Hirzebruch spectral sequence at the prime 3.

## Main definitions

**SQFT<sup>•</sup>.** The proposed cohomology theory whose cocycles are compact (1+1)-dimensional quantum field theories with minimal, N = (0,1), supersymmetry. The paper says plainly that this is not yet a rigorous definition.
- Degree: the central charges of a theory fix its cohomological degree.

**Twisted equivariant classes.** For a finite group G and an anomaly ω ∈ H<sup>4</sup>(G; ℤ), theories with G symmetry and anomaly ω should define groups SQFT<sup>•</sup><sub>ω</sub> of the classifying stack of G. The Borel version replaces the stack by the classifying space BG.

**The candidate S.** S = V<sup>f♮</sup> ⊗ Fer(3), in degree −27. Here V<sup>f♮</sup> is Duncan's holomorphic theory with symmetry group Conway's group Co<sub>1</sub> ⊃ M<sub>24</sub>, and Fer(3) is three antichiral free fermions.
- In TMF: Fer(3) should correspond to ν ∈ π<sub>3</sub>TMF and V<sup>f♮</sup> to the class {24Δ} in degree −24.

**tmf and TMF.** Two versions of topological modular forms. tmf is connective. A class that vanishes in tmf also vanishes in TMF.

## Main results

**Theorem (vanishing at odd primes; Theorem 1.8).** After inverting 2, the group H<sup>4</sup>(M<sub>24</sub>; ℤ[½]) is cyclic of order 3. If ω in it is nonzero, the ω-twisted tmf-cohomology of the space BM<sub>24</sub> in degree −27, with 2 inverted, is zero. For exactly one of the two nonzero ω, restriction to a point in degree −3 is nonzero.
- Step 1: compute H<sup>•</sup>(M<sub>24</sub>; 𝔽<sub>3</sub>) with its Steenrod operations (Section 3).
- Step 2: run the Atiyah-Hirzebruch spectral sequence at p = 3, where the main differential is the first Steenrod power twisted by ω (Section 4).

**Conjecture (the proposed source of the moonshine; Conjectures 1.4 and 1.6).** The class of S is zero in SQFT<sup>−27</sup><sub>ω</sub> for M<sub>24</sub>. In TMF terms: {24Δ} refines to a twisted Co<sub>1</sub>-equivariant class, and {24Δ}ν vanishes after restriction to M<sub>24</sub>. The author expects it not to vanish for Co<sub>1</sub> itself.

**Conjecture (field theories are TMF; Conjecture 1.5).** The spectrum SQFT<sup>•</sup> represents TMF<sup>•</sup>. This is a known conjecture with a long list of evidence, not a result of the paper.

**Claim (physics argument; Proposition 2.5).** The simplest candidate, 24 ⊗ Fer(3) with M<sub>24</sub> permuting 24 copies, is not M<sub>24</sub>-equivariantly nullhomotopic for any anomaly. This is why the paper turns to V<sup>f♮</sup>.

## Note, then ignore

- Evidence, not proof: Theorem 1.8 concerns Borel-equivariant tmf with 2 inverted, while the conjecture concerns genuine equivariant TMF. The author calls the result "perturbative" evidence. Keep the gap in mind and skip its details at first.
- The prime 2: the 2-local cohomology of M<sub>24</sub> is not known and tmf at 2 is complicated. The paper leaves it out, and you can too.
- Primes ≥ 5: with 6 inverted the answer sits in even degrees by earlier work of Thomas, so only p = 3 matters. Safe to skip.
- Degree conventions: degrees are cohomological, so π<sub>3</sub> appears as degree −3. It is bookkeeping and safe to skip.
- Supercohomology: anomalies of fermionic theories live in a refinement of H<sup>4</sup>(G; ℤ). The introduction ignores this, and so can you.
- Appendix A: it treats complexes with D<sup>3</sup> = 0 in place of D<sup>2</sup> = 0. Only the case used in Section 4 matters, and the rest is offered as entertainment.

## One next step

Open the paper at page 1 and read Questions 1.1 to 1.3. Then jump to Conjecture 1.4 on page 3 and see which of the three it tries to answer.

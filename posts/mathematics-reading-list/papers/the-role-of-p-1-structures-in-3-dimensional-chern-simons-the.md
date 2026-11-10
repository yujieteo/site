source: https://arxiv.org/pdf/2603.11291
slogan: Chern-Simons theory keeps a faint memory of the metric, and a trivialised first Pontrjagin class is the cheapest way to erase it.
basis: the introduction and the main theorem statements

## Before you start

This is an expository paper, but it opens with Yang-Mills theory, Wick rotation and sheaves of background fields. The likely feeling is a small dread: "I never learned the physics." You can have that feeling and read anyway. The middle sections are plain algebraic topology of classifying spaces. If you have ever wondered why 3-manifold invariants come with a "framing correction", the answer sits here in a few pages. Read what pleases you first. The rest can wait.

## The story

Witten's Chern-Simons invariants of 3-manifolds should come from physics: take 3-dimensional Yang-Mills theory with a Chern-Simons term and let the coupling go to infinity, so that all massive modes vanish. The limit is expected to be topological, but only projectively. As a linear theory it still depends slightly on the Riemannian metric. Witten's fix is a trade. Multiply by a second theory, built from the Chern-Simons invariant of the metric itself, whose metric dependence cancels the first. The price is that the second theory needs extra topological data on the 3-manifold. A framing works. A trivialisation of the first Pontrjagin class p<sub>1</sub> is the choice the authors call most natural, because the anomaly is written in terms of p<sub>1</sub>. The paper explains this trade, compares the possible structures, and counts the leftover ambiguity: a sixth root of unity.

## Main definitions

**Tangential structure.** A map X<sub>n</sub> → BO<sub>n</sub>. A structure on an n-manifold M is a lift of the classifying map of the tangent bundle through it. A stable structure is a map X → BO.
- Framing: X<sub>3</sub> is a point. Orientation and Spin structure: X is BSO or BSpin.

**(w<sub>1</sub>, p<sub>1</sub>)-structure.** An orientation together with a trivialisation of p<sub>1</sub>. Formally, X<sub>3</sub> is the homotopy fibre of p<sub>1</sub> from BSO<sub>3</sub> to the Eilenberg-MacLane space K(ℤ, 4). On an oriented 3-manifold M, the isomorphism classes form a torsor over H<sup>3</sup>(M; ℤ).
- With Spin in place of SO you get (w<sub>1</sub>, w<sub>2</sub>, p<sub>1</sub>)-structures.

**Invertible field theory.** A field theory whose state spaces are lines and whose partition functions are non-zero numbers. In the topological case it is a map out of a Madsen-Tillmann spectrum, so bordism groups classify it.

**The theory γ<sub>c</sub>.** For real c, an invertible theory on Riemannian oriented 3-manifolds with p<sub>1</sub>-structure, built from the Chern-Simons invariant of the Levi-Civita connection. Physicists call it gravitational Chern-Simons theory.

## Main results

**Conjecture (the long-distance limit; Conjecture 1.8).** For a compact Lie group G and a non-degenerate level λ in H<sup>4</sup>(BG; ℤ), Yang-Mills plus Chern-Simons defines a family of field theories. The limit of infinite coupling exists. Its projectivisation is topological. Its anomaly extends to a 4-dimensional invertible theory with partition function exp(2πi c(λ) p<sub>1</sub>(W)/24) on a closed oriented 4-manifold W.

**Claim (Witten's maneuver; equation 1.14).** The tensor product Z<sub>λ</sub> = F<sub>λ</sub> ⊗ γ<sub>−c(λ)</sub> of the limit theory with gravitational Chern-Simons does not depend on the metric. It is a linear topological theory of oriented 3-manifolds with p<sub>1</sub>-structure. It sees c only modulo 24. The claim rests on the conjecture above.

**Formula (central charge; equation 1.21).** For positive definite λ, c(λ) is the trace of the endomorphism S<sub>λ</sub> of the Lie algebra that compares the form of λ with the form of λ + h, where h is minus one-half the Killing form. For G = SU<sub>2</sub> at level k this gives c = 3k/(k+2).

**Proposition (local changes of structure; Proposition 2.33, Lemmas 2.12 and 2.24).** On S<sup>3</sup> each kind of structure can change by an integer. One unit of framing change equals four units of oriented p<sub>1</sub>-structure change. One unit of framing change equals two units of stable framing change. For p<sub>1</sub>-structures the unstable and stable changes agree.
- Step 1: compare π<sub>3</sub>SO<sub>3</sub> with π<sub>3</sub>SO through the Spin groups.
- Step 2: a spectral sequence shows that SO<sub>3</sub> → K(ℤ, 3) is multiplication by 2 on H<sub>3</sub>, and the Hurewicz map contributes another 2.

## Note, then ignore

- The μ<sub>6</sub> ambiguity. Invertible topological theories of (w<sub>1</sub>, p<sub>1</sub>)-manifolds in dimension 3 form a cyclic group of order 6, so the linear lift is fixed only up to that group. With unitarity it drops to order 3. Safe to skip on a first reading.
- Unstable versus stable. A 3-framing is not the same as a stable framing: S<sup>2</sup> has the second and not the first. For orientations, Spin structures and p<sub>1</sub>-structures the two notions agree. Safe to skip.
- Families. The authors insist that theories be evaluated on families of manifolds, smooth or holomorphic. This matters for the spinor section only. Safe to skip.
- The Spin variation. With Spin structures the anomaly depends on c only modulo 6 and the ambiguity group becomes μ<sub>48</sub> × μ<sub>2</sub>. Safe to skip.
- The last section. The same maneuver for the free Majorana-Weyl spinor gives the Adams e-invariant. It is a second example and safe to skip.

## One next step

Open the paper at section 1.1 and read Conjecture 1.8 and the two paragraphs around equation (1.14).

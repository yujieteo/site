source: https://people.maths.ox.ac.uk/tanj/notes/sssguide.pdf
slogan: Ten small fibrations teach the Serre spectral sequence by use, starting from nothing more than the cohomology of spheres.
basis: the full text

## Before you start

Spectral sequences have a reputation, and the feeling they raise is dread: grids of symbols, three indices, and the sense that everyone else already understands them. That dread is welcome here. It does not need fixing before you begin. If you want to compute the cohomology of ℂP<sup>n</sup> or SU(n) with your own pencil, these 14 pages hand you that. Play with Step 1 for fun. Reaching Step 10 is optional.

## The story

A fibration F → X → B ties three spaces together, and people want the cohomology of one from the other two. The tool is the Serre spectral sequence, but its definition is long and tells you little about how to use it. Jane Tan's notes, based on a lecture by André Henriques, skip the definition. They describe what a spectral sequence looks like: pages of groups on a grid, with arrows that get longer on each page. Then they run ten examples. The first is the Hopf fibration S<sup>1</sup> → S<sup>3</sup> → S<sup>2</sup>, where you already know every answer and work backwards to find the one arrow that must be an isomorphism. Each later step adds one feature: later pages, products, collapse, torsion, extension problems.

## Main definitions

**Pages and differentials.** A first-quadrant cohomological spectral sequence has pages E<sub>r</sub>. Each page is a grid of abelian groups E<sub>r</sub><sup>s,t</sup> with s, t ≥ 0, and maps d<sub>r</sub> from position (s, t) to position (s + r, t + 1 − r) with d<sub>r</sub> ∘ d<sub>r</sub> = 0.
- Turning the page (Property 1): E<sub>r+1</sub> at (s, t) is the kernel of the outgoing d<sub>r</sub> modulo the image of the incoming d<sub>r</sub>.
- E<sub>∞</sub>: at each position the groups stop changing once r > max(s, t) + 1. The stable value is E<sub>∞</sub><sup>s,t</sup>.

**Serre spectral sequence.** For a fibration F → X → B, the second page is E<sub>2</sub><sup>s,t</sup> = H<sup>s</sup>(B, H<sup>t</sup>(F)), and the sequence converges to H<sup>s+t</sup>(X). When H<sup>\*</sup>(B) or H<sup>\*</sup>(F) is free and finitely generated, E<sub>2</sub><sup>s,t</sup> = H<sup>s</sup>(B) ⊗ H<sup>t</sup>(F). So the base goes on the horizontal axis and the fibre on the vertical axis.

**Convergence (Property 3).** H<sup>n</sup>(X) has a filtration whose successive quotients are the groups E<sub>∞</sub><sup>s,t</sup> with s + t = n.
- Additive extension problem: the quotients alone may not determine the group H<sup>n</sup>(X).
- Multiplicative extension problem (Property 4): the ring on E<sub>∞</sub> is the associated graded of the ring H<sup>\*</sup>(X), so some products are lost.

## Main results

The notes say plainly that they give no proofs and no precise statements. The items below are their worked computations, in integral cohomology.

**Claim (Leibniz rule; Property 2).** Each page is a ring, on E<sub>2</sub> the product agrees up to sign with the cup product, and d<sub>r</sub>(ab) = d<sub>r</sub>(a)b + (−1)<sup>deg a</sup> a d<sub>r</sub>(b).

**Computation (projective space; Steps 3 and 4).** From S<sup>1</sup> → S<sup>2n+1</sup> → ℂP<sup>n</sup> one gets H<sup>\*</sup>(ℂP<sup>n</sup>) = ℤ[x]/x<sup>n+1</sup> with x in degree 2.
- Step 1: the total space has cohomology only in degrees 0 and 2n + 1, so each d<sub>2</sub> from row 1 to row 0 must be an isomorphism. The fact that ℂP<sup>n</sup> has dimension 2n stops the pattern.
- Step 2: with d<sub>2</sub>(a) = x, the Leibniz rule gives d<sub>2</sub>(ax<sup>k</sup>) = x<sup>k+1</sup>, so powers of x generate.

**Computation (loops on the 3-sphere; Step 5).** From ΩS<sup>3</sup> → PS<sup>3</sup> → S<sup>3</sup> with contractible path space PS<sup>3</sup>, H<sup>\*</sup>(ΩS<sup>3</sup>) is ℤ in each even degree, with a divided power ring structure: a<sup>n</sup> = n! · g, where a generates degree 2 and g generates degree 2n.

**Computation (special unitary groups; Steps 6 and 7).** From SU(n − 1) → SU(n) → S<sup>2n−1</sup> and induction, H<sup>\*</sup>(SU(n)) is the exterior algebra on generators a<sub>3</sub>, a<sub>5</sub>, …, a<sub>2n−1</sub>, with a<sub>i</sub> in degree i.
- n = 3, 4: no differential fits, so the sequence collapses for degree reasons.
- n ≥ 5: the possible differentials vanish on the generators, so they vanish on products by the Leibniz rule.

## Note, then ignore

- A slip in the opening. The text says groups "right of the vertical axis" vanish. It means left. Safe to skip.
- Coordinates in Step 2. The text lists ℤ at (0, 4) and (3, 0). The picture shows them at (4, 0) and (0, 3), base horizontal and fibre vertical. Trust the picture and move on.
- The torsion footnote. The tensor formula for E<sub>2</sub> needs one of the two cohomologies to be free and finitely generated. Every example here meets it. Safe to skip.
- Outside input. Step 8 uses Poincaré duality for ℝP<sup>3</sup>, and Step 9 uses the splitting U(n) = SU(n) × U(1) to settle H<sup>3</sup>(U(2)) = ℤ. The spectral sequence alone does not decide these. Note it and go on.
- Homological version. The notes mention that it exists and never use it. Safe to skip.

## One next step

Open the PDF at Step 1 on page 2 and copy the four-entry picture of the Hopf fibration by hand. Then say out loud why the one arrow d<sub>2</sub> must be an isomorphism.

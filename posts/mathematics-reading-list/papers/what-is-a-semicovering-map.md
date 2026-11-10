source: https://wildtopology.wordpress.com/2021/07/19/what-is-a-semicovering-map/amp/
slogan: Drop local triviality from a covering map, keep local homeomorphism and unique path lifting, and you still get lifting theory over wild spaces.
basis: the page itself

## Before you start

This is a short blog post, so the likely feeling is not overwhelm. It is more a quiet doubt: wild spaces such as the earring space can seem like a side street, and you may wonder if the time is well spent. You can hold that doubt and read anyway. If you ever wanted to know which parts of covering space theory are really needed, this post answers that. Read it for the pictures first.

## The story

Covering spaces tie topology to the fundamental group, but the classification needs a locally tame base: locally path-connected and semilocally simply connected. Over a space like the earring space, a shrinking wedge of circles, ordinary coverings are too rigid. Near the wild point, every sheet of a covering has to look the same. Brazas wanted a notion loose enough to classify by a topologised fundamental group. His answer keeps two properties of coverings and drops local triviality. The total space may unwind smaller and smaller loops as you move away from a basepoint. Paths still lift uniquely, and they lift continuously. From that one fact, lifting of homotopies follows. The post states, without proof, that semicoverings correspond to open subgroups of the topologised fundamental group.

## Main definitions

**Unique lifting of all paths rel. basepoint.** A map p : E → X has this property if for each path α : [0,1] → X and each point e ∈ E with p(e) = α(0), there is exactly one path β in E with β(0) = e and p∘β = α.

**Semicovering map.** A map p : E → X that is a local homeomorphism and has unique lifting of all paths rel. basepoint. No evenly covered neighbourhoods are required.
- Consequence: fibres are discrete, but p need not be a fibre bundle.

**Earring space.** The union of circles C<sub>n</sub>, n ≥ 1, shrinking to one common point b<sub>0</sub>. It is the standard example of a space that is not semilocally simply connected.

## Main results

**Claim (two-of-three).** Semicoverings are closed under composition. If f∘g = h, the spaces are path-connected, and two of f, g, h are semicoverings, then so is the third.
- Use: compose two coverings whose composite is not a covering. The composite is a semicovering that is not a covering.

**Claim (comparison with coverings).** Every covering map is a semicovering. If X is path-connected, locally path-connected and semilocally simply connected, and E is connected, then every semicovering E → X is a covering.
- Earring case: at each point e over b<sub>0</sub> there is a number m<sub>e</sub> such that a copy of the circles C<sub>n</sub>, n ≥ m<sub>e</sub>, sits at e. The semicovering is a covering if and only if the numbers m<sub>e</sub> are bounded.

**Lemma (continuous lifting).** If p : E → X is a semicovering, then for each e ∈ E the map P(E, e) → P(X, p(e)), β ↦ p∘β, between based path spaces with the compact-open topology is a homeomorphism.
- Step 1: unique path lifting makes the map a bijection.
- Step 2: the local homeomorphism property shows it sends basic open sets to open sets. The post gives a sketch only.

**Corollary (lifting discs).** If p : E → X is a semicovering, every based map from the closed disc D<sup>2</sup> to X lifts uniquely to E once you choose a point of the fibre. So path homotopies lift.
- Step 1: view a map of the disc as a loop in the based path space.
- Step 2: apply the inverse of the homeomorphism from the lemma.

## Note, then ignore

- A typo in the definition: the post writes the starting point as lying over α(e). It means α(0). Safe to pass over.
- Older definition: the original 2012 paper used a longer list of conditions, later shown to reduce to the one here. The post uses the short form, so you can skip the history.
- Groupoids: the original paper is written with topologically enriched groupoids. The post avoids them, and so can you on a first reading.
- Hurewicz fibrations: the post cites a result (Theorem 7.5 of Brazas and Mitra) that every semicovering is a Hurewicz fibration with discrete fibres. It places semicoverings in a hierarchy and is safe to skip.
- Open question: the author does not know a Hurewicz fibration with discrete fibres that fails to be a semicovering. It is an aside, safe to skip.

## One next step

Open the post and look only at the two pictures of semicoverings of the earring space, with their captions. Ask of each why no neighbourhood of the wild point is evenly covered.

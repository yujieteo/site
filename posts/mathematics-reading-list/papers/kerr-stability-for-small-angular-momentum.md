source: https://arxiv.org/pdf/2104.11857
slogan: A slowly rotating black hole, slightly disturbed, settles to a nearby Kerr black hole, so these solutions are stable and not artefacts.
basis: the introduction and the main theorem statements

## Before you start

This is an 800-page research monograph with its own vocabulary: PG structures, PT frames, GCM spheres. Fear of being too slow is the natural response, and so is a sense that general relativity at this level belongs to other people. Let both feelings be there. If you want to see how a proof of stability is organised, the first forty pages give you the whole architecture. Enjoy the map first. The territory can wait.

## The story

The Kerr metrics are rotating black hole solutions of the Einstein vacuum equations. For more than fifty years people have asked whether they survive a small push. A proof must show that the disturbed spacetime converges to some Kerr solution, and three things block it. The final mass and spin are not known in advance. The equations allow any change of coordinates, so "close to Kerr" has no fixed meaning. And the frame in which Kerr curvature looks simple is not tangent to any family of spheres. The authors answer the first two with one device. They place special spheres far out and late in time, on which chosen geometric quantities take their Schwarzschild values, and they measure everything from there backwards. A bootstrap argument then recovers decay for every quantity.

## Main definitions

**Kerr family and its stability.** Kerr(a, m), with |a| ≤ m, is the two-parameter family of stationary, axisymmetric solutions of the vacuum equations Ric(g) = 0. The stability conjecture says: vacuum data close to Kerr data have a development with complete future null infinity whose exterior approaches a nearby Kerr solution.

**GCM sphere and GCM hypersurface.** A generally covariant modulated sphere is a 2-sphere, chosen without reference to the initial data, on which specific quantities equal their Schwarzschild values up to ℓ = 1 modes. A GCM hypersurface Σ<sub>∗</sub> is a spacelike hypersurface foliated by such spheres (Definition 1.4.2).
- Example condition: the outgoing expansion satisfies tr χ = 2/r on each sphere.
- Mass and spin: m is the Hawking mass of the last sphere S<sub>∗</sub>, and a is read off from an ℓ = 1 mode of curl β on S<sub>∗</sub>.

**GCM admissible spacetime.** A finite piece of spacetime M made of an exterior region, an interior region and a top region, whose future boundary in the exterior is a GCM hypersurface Σ<sub>∗</sub>. The proof grows such pieces step by step.

**PG and PT structures.** Two kinds of null frame with a non-integrable horizontal plane field, modelled on the principal null frame of Kerr. Principal geodesic (PG) frames are used for decay estimates. Principal temporal (PT) frames are used for bounds at the top order of derivatives.

## Main results

**Theorem (Kerr stability, first version; Theorem 1.2.1).** Take a general asymptotically flat vacuum initial data set, close enough in a suitable topology to Kerr(a<sub>0</sub>, m<sub>0</sub>) data, with a<sub>0</sub>/m<sub>0</sub> small enough. Its future globally hyperbolic development has complete future null infinity and converges, in the causal past of null infinity, to a Kerr(a<sub>∞</sub>, m<sub>∞</sub>) with parameters close to (a<sub>0</sub>, m<sub>0</sub>). The precise version is in Section 3.4.3, which I did not read.
- Step 1: assume decay and boundedness for all frame components on a GCM admissible spacetime (the bootstrap assumptions), then improve them using only the size of the initial perturbation (Theorems M0 to M8).
- Step 2: extend the spacetime to a strictly larger GCM admissible one, and repeat by continuity.

**Claim (division of labour; Section 1.2.1).** This paper states the theorem, sets up the structures and proves the steps that concern the gauge and the transport of estimates: M0 and M3 to M7, and the part of M8 that controls the PT frame given curvature bounds. Theorems M1 and M2 and the curvature half of M8 are wave-type estimates. They are stated here and proved in the later paper of Giorgi, Klainerman and Szeftel. The construction of GCM spheres and hypersurfaces is in three separate papers.

**Theorem (polarised Schwarzschild case, earlier work; Theorem 1.1.1).** For axially symmetric, polarised perturbations of Schwarzschild data of mass m<sub>0</sub>, the development has complete future null infinity and converges to a Schwarzschild solution of nearby mass m<sub>∞</sub>. This is an earlier result of the same authors, and the present proof follows its outline.

## Note, then ignore

- "Small angular momentum". The abstract says this restriction enters only through the Morawetz-type estimates of the companion papers. You can read the geometric parts without thinking about it.
- Recoil. The spheres of the final foliation differ from those of the initial data layer because the centre of mass of the final black hole has shifted. This makes Theorem M0 delicate. Skip it at first.
- The top region. It is added only so that the finite spacetime is causally complete, and a local existence result handles it. Safe to ignore.
- Two frames at once. Estimates on spheres need integrable frames, so the proof keeps a second, sphere-adapted frame and change-of-frame formulas. This is bookkeeping on a first reading.
- Version. This summary used arXiv version 1 (April 2021), where some companion papers are still called forthcoming. The 2022 companion volume says the series is now complete.

## One next step

Open the PDF at page 22 and read Theorem 1.2.1 and the six numbered ingredients under it, with Figure 1.2 beside you.

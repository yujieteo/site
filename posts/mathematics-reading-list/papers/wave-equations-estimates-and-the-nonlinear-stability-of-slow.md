source: https://arxiv.org/pdf/2205.14808
slogan: Two curvature components of a perturbed, slowly rotating black hole obey wave equations whose energy decays, which closes the Kerr stability proof.
basis: the introduction and the main theorem statements

## Before you start

This volume runs to 912 pages, and its own contents list fills twenty of them. The likely feeling is overwhelm, plus a doubt that you can follow anything without the companion papers. That feeling fits the facts, and you can have it. If you want to know what a wave estimate on a black hole looks like, the introduction alone shows you. Read for the pleasure of the plot. Finishing is optional.

## The story

The Kerr metrics K(a, m) are explicit rotating black hole solutions of the Einstein vacuum equations. People want to know whether a small disturbance of one settles down to another Kerr solution. Klainerman and Szeftel organised a proof for small |a|/m into nine steps, Theorems M0 to M8, and left three of them as black boxes. This volume opens the boxes. The trouble is that the natural curvature variable A solves a Teukolsky equation, which has no usable energy. The idea is to differentiate A twice along a null direction. The result 𝔮 solves a generalised Regge–Wheeler equation, which does have an energy. Trapped light rays, the horizon and the rotating ergoregion each spoil the estimate somewhere. Suitably chosen vector fields, and one second-order operator borrowed from Carter, repair it without Fourier modes.

## Main definitions

**Horizontal structure.** A choice of two null vector fields e<sub>3</sub>, e<sub>4</sub> on spacetime, together with the plane field H orthogonal to both. Curvature and connection coefficients are defined by pairing with e<sub>3</sub>, e<sub>4</sub> and a basis of H.
- In Kerr: the principal null pair gives an H that is not integrable, so H is not tangent to any family of spheres.
- In Minkowski stability proofs: H is tangent to a foliation by spheres. Part I of this volume rebuilds the formalism without that assumption.

**Extreme curvature components A and A̲.** The complex horizontal 2-tensors built from α<sub>ab</sub> = R<sub>a4b4</sub> and its e<sub>3</sub> counterpart, A = α + i ∗α. Both vanish in exact Kerr, and each solves a nonlinear Teukolsky equation.

**The quantity 𝔮 (Theorem 1.6.1).** A complex 2-tensor 𝔮 = q̄ q<sup>3</sup>(∇<sub>3</sub>∇<sub>3</sub>A + C<sub>1</sub>∇<sub>3</sub>A + C<sub>2</sub>A), where q is the scalar r + ia cos θ, the derivatives are conformal ones, and C<sub>1</sub>, C<sub>2</sub> are explicit scalars. This is a nonlinear, physical-space Chandrasekhar transformation, and 𝔮 solves a generalised Regge–Wheeler (gRW) equation coupled to A.

**Trapping region.** The set where |T|/r<sup>3</sup> ≤ 1/10, with T = r<sup>3</sup> − 3mr<sup>2</sup> + a<sup>2</sup>r + ma<sup>2</sup>. For small a/m it contains every null geodesic that neither falls in nor escapes. The bulk energy norms lose strength there.

## Main results

**Theorem (Kerr stability for small |a|/m; Theorem 1.3.2).** Take general asymptotically flat vacuum initial data close enough, in a suitable topology, to Kerr(a<sub>0</sub>, m<sub>0</sub>) data with |a<sub>0</sub>|/m<sub>0</sub> small enough. Then its future development has complete future null infinity and converges, in the causal past of null infinity, to a nearby Kerr(a<sub>∞</sub>, m<sub>∞</sub>). The proof needs this volume together with the main paper and three papers on GCM spheres and hypersurfaces.

**Theorem (M1, decay of A and 𝔮; Theorem 1.5.2).** Assume the bootstrap bounds on the spacetime and initial data of size ε<sub>0</sub>, with ε<sub>0</sub> small. Then A and its derivatives up to order k<sub>L</sub> − 20 are bounded by ε<sub>0</sub> with explicit decaying weights in r and τ, at a rate δ<sub>extra</sub> better than the bootstrap rate δ<sub>dec</sub>. The flux of ∇<sub>3</sub>𝔮 through the part of Σ<sub>∗</sub> after time τ is at most a constant times ε<sub>0</sub><sup>2</sup> τ<sup>−2−2δ<sub>extra</sub></sup>.
- Step 1: prove energy, Morawetz and r<sup>p</sup>-weighted bounds for 𝔮 from the gRW equation.
- Step 2: recover A from 𝔮 by integrating the transport relation that defines 𝔮.

**Theorem (M2, decay of A̲ on the last slice; Theorem 1.5.3).** Assume in addition that r is large on Σ<sub>∗</sub> compared with a power of the final time. Then the integral over Σ<sub>∗</sub> of τ<sup>2+2δ<sub>dec</sub></sup> |d<sup>k</sup>A̲|<sup>2</sup> is at most a constant times ε<sub>0</sub><sup>2</sup>, for k up to k<sub>L</sub> − 40.

**Theorem (model Regge–Wheeler estimate; Theorem 1.6.4).** For real 2-tensor solutions ψ of the model equation with source N, and for weights δ ≤ p ≤ 2 − δ and 2 ≤ s ≤ k<sub>L</sub> derivatives, the supremum of the energy, the bulk integral and the flux on a time slab are together bounded by the initial energy plus a norm of the source.
- Step 1: a Morawetz estimate by the Andersson–Blue method, commuting with a nonlinear version of the Carter operator.
- Step 2: a red-shift vector field near the horizon and r<sup>p</sup> weights far away.

## Note, then ignore

- Theorem M8. Part III bounds the top-order derivatives of all curvature components (Theorem 1.5.4), which the bootstrap needs so that it does not lose derivatives. Skip it on a first reading.
- No gauge here. The estimates in this volume do not depend on a gauge choice. The gauge work (GCM spheres) lives in the companion papers, so you can skip it for now.
- Complex notation. Each real tensor is paired with its Hodge dual, as in A = α + i ∗α, to shorten the equations. It carries no extra content and is safe to skip.
- The constants k<sub>L</sub>, δ<sub>dec</sub>, δ<sub>extra</sub>. They count derivatives and fix decay rates for the bootstrap. Their exact values do not matter on a first reading.
- Where smallness of a enters. The introduction of the main paper says small |a|/m is used only for the Morawetz-type estimates. Note it and move on.

## One next step

Open the PDF at page 31 and read only Theorem 1.3.2 and the numbered list of seven ingredients that follows it.

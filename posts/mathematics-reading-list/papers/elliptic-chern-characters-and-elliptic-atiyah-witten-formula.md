source: https://arxiv.org/pdf/2601.18126
slogan: The holonomy of a loop-group gerbe module over double loops equals a Pfaffian on an elliptic curve, lifting the Atiyah–Witten formula from circles to tori.
basis: the abstract and introduction

## Before you start

Seventy pages stack gerbes on loop groups on equivariant cohomology on Chern–Simons theory. The likely feeling is overwhelm at how many prerequisites arrive at once. You can let that be there. Nobody holds all of these at the same time on a first pass. If you want to see what the index theorem looks like one level up, on loops of loops, this paper shows it. Follow the classical analogy for pleasure, and let the rest go.

## The story

The classical Atiyah–Witten formula lives on the loop space LX of a spin manifold X. There the supertrace of the spinor holonomy around γ equals a ζ-regularised Pfaffian of the covariant derivative along γ. Witten's work suggests a version one level up, on the double loop space L<sup>2</sup>X of maps from a torus. Two things block it. A spinor bundle on LX exists only when X has a string structure. And traces over infinite-dimensional loop group representations diverge when |q| = 1. The authors replace bundles by gerbe modules, and move q = e<sup>2πiτ</sup> inside the unit disc, where the traces converge. Then τ is the shape of an elliptic curve, and holonomy around the torus equals a Pfaffian on that curve.

## Main definitions

**Positive-energy representation.** A representation H of the centrally extended loop group of G at level k, with an energy decomposition H = ⊕<sub>n≥0</sub> H<sub>n</sub> into finite-dimensional G-representations. Here G is compact, connected and simply connected. These generate a representation ring at each level k.
- For G = Spin(2n) at level one, four virtual representations S<sub>ij</sub> form a basis. They match the four spin structures on an elliptic curve.

**Lifting gerbe and gerbe module.** Let P → X be a principal G-bundle with connection. The loop bundle LP → LX has structure group LG. The lifting gerbe on LX measures the obstruction to lifting LP to the central extension. Each H at level k gives an S<sup>1</sup>-equivariant gerbe module E with connection over the k-th power of this gerbe.
- If P has a string-G structure, E is an honest vector bundle of infinite rank.

**Elliptic Chern character.** Fix τ in the upper half-plane. On S<sup>1</sup>-invariant forms on LX take the differential D<sub>τ</sub> = d + τι<sub>K</sub> − kH, where K generates loop rotation and H is the 3-form curving of the gerbe. The elliptic Chern character of H is an even D<sub>τ</sub>-closed form on LX. Locally it is the trace over H of the exponential of a τ-deformed curvature.

**Elliptic holonomy.** A section Ehol<sub>H</sub>[τ] of the transgression line bundle of the lifting gerbe over L<sup>2</sup>X, invariant under the torus. It is the trace in H of parallel transport in one loop direction for a τ-deformed operator.
- The authors prove convergence only on gauged polystable double loops.

## Main results

**Theorem (elliptic Atiyah–Witten formula; Theorem 1.2).** Let X be a spin Riemannian manifold of dimension 2n and take G = Spin(2n) at level one. For each spin structure on the elliptic curve ℂ/(ℤ ⊕ τℤ), the Pfaffian line bundle on L<sup>2</sup>X, with its Bismut–Freed connection and Quillen metric, is isometric to the transgression line bundle of the lifting gerbe. On gauged polystable double loops, the isometry sends the Pfaffian section to q<sup>m</sup> · Ehol<sub>S</sub>[τ], where S is the matching virtual representation and q<sup>m</sup> is a modular anomaly factor.
- Step 1: identify both line bundles with the Chern–Simons prequantum line bundle.
- Step 2: prove the identity on the moduli space of semistable bundles on the elliptic curve, where the Pfaffians become Kac–Weyl characters. Then pull back to L<sup>2</sup>X.

**Corollary (the classical limit; Corollary 1.4).** Let pf[τ] be the Pfaffian for the odd spin structure, restricted to double loops that are constant in one direction. Then q<sup>−n/12</sup> · pf\[τ\](γ) tends to the classical Pfaffian of the covariant derivative along γ as q → 0. So the classical formula sits at the cusp τ → i∞.

**Claim (elliptic Bismut–Chern character; Sections 4 and 6).** The local trace formula for the elliptic Chern character converges and defines a global D<sub>τ</sub>-closed form on LX. On L<sup>2</sup>X there is an elliptic Bismut–Chern character whose degree-zero part is the elliptic holonomy. Its restrictions along the two loop directions give the two characters on LX. The authors say that convergence is known only on gauged polystable double loops, so part of this picture is future work.
- Convergence on LX uses energy estimates and Floquet theory.

## Note, then ignore

- The punctured disc. The notation suggests that the disc 0 &lt; |q| &lt; 1 acts on LX. It does not. It only records that K becomes τK in the differential. Safe to skip.
- Index flip. The theorem pairs the Pfaffian for spin structure (1−i, 1−j) with the representation S<sub>ij</sub>. This is bookkeeping for the labelling of spin structures. Safe to skip.
- Modular anomaly. The powers of q in front, such as q<sup>n/12</sup>, restore modular behaviour. They come from regularising 1 + 2 + 3 + … to −1/12. Safe to skip on a first reading.
- Vanishing moment map. The general theory of Section 3 assumes it for the gerbe. The authors say it is not essential and holds for the lifting gerbe anyway. Safe to skip.
- Quantisation commutes with reduction. Theorem 1.5 is quoted from a separate work, cited as [DLZ]. It feeds the proof, not the statement. Safe to skip.

## One next step

Open the paper at page 10 and read Theorem 1.2 and Remark 1.3 after it.

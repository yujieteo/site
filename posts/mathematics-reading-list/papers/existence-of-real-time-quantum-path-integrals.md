source: https://arxiv.org/pdf/2207.12798
slogan: Bend the space of paths into complex directions where Feynman's oscillating integral converges absolutely, so real time needs no detour through imaginary time.
basis: the introduction and the main theorem statements

## Before you start

This is a physics paper that talks about infinite-dimensional measures, and the authors say openly that their arguments are not fully rigorous. You may feel uneasy: where does the proof end and the hope begin? That unease is fair, and you can carry it with you. If you want to see why an oscillating integral over paths can mean anything at all, section II shows it on a free particle. Read for the fun of the contour trick. Finishing can wait.

## The story

Feynman wrote the quantum propagator as an integral of exp(iS/ħ) over all paths. The integrand has modulus 1, so the integral does not converge absolutely, and its value can depend on how you cut it off. The usual escape, due to Kac, rotates time to imaginary values. That trades interference for statistics, and the way back is often impractical. Feldbrugge and Turok keep time real and complexify the paths instead. For an analytic action, Cauchy's theorem lets you push the integration domain onto "thimbles", one for each relevant classical solution, where the integrand decays. The usual tool for finding thimbles, gradient flow, breaks down in infinite dimensions. They replace it with a mode-by-mode flow and then bound the high-frequency part by the free particle, whose integral is a known Gaussian measure.

## Main definitions

**Smooth regulator.** A function f on the integration domain that is absolutely integrable, tends to 1 pointwise in a limit L → ∞, and is analytic where the contour will move. You insert f, deform the contour, then remove f.
- Example: any f whose Fourier transform is smooth and supported in a ball of radius 1/L.

**Thimble.** For a finite-dimensional integral of exp(iS), each non-degenerate saddle has a steepest descent thimble J and a steepest ascent thimble K. A saddle is relevant when K meets the original real domain.

**Wiener thimble and Brownian bridge.** For a free particle, write the fluctuation as a sum of sine modes with amplitudes δx<sub>m</sub>. Rotating each amplitude by δx<sub>m</sub> = e<sup>iπ/4</sup> w<sub>m</sub>, with w<sub>m</sub> real, turns the oscillating integral into a product of Gaussians. That product is the Brownian bridge measure: Wiener measure on paths that return to zero.

**Eigenflow and eigenthimble.** Let h = Re(iS) be the height function. Eigenflow extremises h + ½λ(∫|x|<sup>2</sup> dt − R<sup>2</sup>), with λ a Lagrange multiplier that fixes the squared distance R<sup>2</sup> from the saddle. The eigenthimble is the half-dimensional surface swept out by flowing along the modes one after another.
- Step: start each flow along an eigenfunction of the Hessian operator, the shallowest direction first.
- Step: the flow equations are ordinary differential equations in t, not partial differential equations.

## Main results

The authors present arguments, not complete proofs, and ask mathematicians to finish the job. The paper has no numbered theorems.

**Claim (regulators agree; section II).** For the discretised free particle, a sharp spherical cutoff has no limit when there is more than one integration variable, while a box cutoff gives the right answer. Every smooth regulator of the class above gives the same, correct limit.
- Step 1: at fixed L, deform each contour to the 45 degree line. A Paley-Wiener bound on f kills the arcs at infinity.
- Step 2: the integral is now absolutely convergent, so dominated convergence lets you send L → ∞ inside it.

**Claim (physics argument; gradient flow fails; section IV, eqns. (11) and (12)).** In the space of paths, the descent equations are partial differential equations. One of them is a diffusion equation run backwards, so high frequencies blow up in arbitrarily short time and no solution exists.

**Claim (physics argument; existence; sections IV and V).** Let V be a polynomial potential that is bounded below. On the high-frequency eigenthimble, the magnitude of the integrand is at most exp(h/ħ), and h is bounded by the free particle value. Dominated convergence then gives a well-defined measure for the interacting theory.
- Step 1: along the m-th eigenflow, dh/d(R<sup>2</sup>) = −λ/2 and λ > λ<sub>m</sub>, so h &lt; −½λ<sub>m</sub>R<sup>2</sup>.
- Step 2: in proper length coordinates the Jacobian has modulus at most 1.

**Claim (physics argument; exact formula; eqn. (2)).** The propagator equals the free prefactor times Σ n<sub>C</sub> exp(iS<sub>C</sub>/ħ) ∫ e<sup>iθ<sub>C</sub></sup> dμ<sub>C</sub>, summed over relevant classical paths C, real or complex. Each μ<sub>C</sub> is a positive measure on a thimble, and n<sub>C</sub> is an integer intersection number. The authors assume that the finite-dimensional relevance criterion still holds.

## Note, then ignore

- Order of limits. You must send the contour radius to infinity before you remove the regulator. It matters for the proof only, so skip it at first.
- Varying phase. On an eigenthimble the imaginary part of iS is not constant, unlike on a steepest descent thimble. It only adds a phase factor, so skip it.
- Complex saddles. The Hessian operator is then complex symmetric, and the authors mostly ignore this. Safe to skip.
- Low versus high modes. Only modes above a cutoff m<sub>C</sub> get the eigenthimble. The finite number of low modes use ordinary Picard-Lefschetz theory. Safe to skip.
- Time discretisation. The authors avoid it because it creates exponentially many spurious saddles. Safe to skip.

## One next step

Open the paper at section II and read from eqn. (3) to eqn. (5). Watch the box cutoff succeed and the spherical cutoff fail on the same integral.

source: https://arxiv.org/pdf/1909.04632
slogan: Bend the integration path into the complex plane, and a wildly oscillating lensing integral becomes a few fast-decaying integrals a computer handles easily.
basis: the introduction and the main theorem statements

## Before you start

This paper has 88 pages and its home is radio astronomy, a field you may not know. You may feel like an outsider, or fear that the physics will slow you down. That feeling is welcome here. The mathematics is one idea from complex analysis, applied to an integral in one or two variables. If you want to watch Cauchy's theorem do numerical work on a real problem, the introduction gives you that. Enjoy the pictures first.

## The story

Radio waves from a pulsar pass through a cloud of plasma on their way to Earth. The cloud acts as a lens, and the waves interfere. The observed amplitude is an integral of exp(iνφ(x)) over the lens plane. This integrand has modulus one everywhere. The integral converges only conditionally, so numerical methods are slow and sensitive to cutoffs. Feldbrugge, Pen and Turok continue the phase φ to complex x. Cauchy's theorem then lets them move the real line onto steepest descent contours through saddle points. On these contours the integrand does not oscillate. It decays. The example φ(x) = (x − μ)<sup>2</sup> + α/(1 + x<sup>2</sup>) shows it all: one saddle matters for a weak lens, three for a strong one.

## Main definitions

**Fresnel-Kirchhoff integral.** The normalised amplitude is Ψ(μ; ν) = (ν/π)<sup>N/2</sup> ∫ exp(iνφ(x; μ)) dx over ℝ<sup>N</sup>, with φ(x; μ) = (x − μ)<sup>2</sup> + ϕ(x) (eqn. (13)). The intensity is |Ψ|<sup>2</sup>.
- μ: the position of source and observer relative to the lens.
- ν: proportional to frequency. The lens profile ϕ is proportional to the electron column density.

**Lefschetz thimble.** For a saddle point of the continued exponent iνφ, the thimble is its steepest descent contour in ℂ<sup>N</sup>. Along it the imaginary part of the exponent is constant and the real part h = Re(iνφ) decreases.

**Relevant saddle.** A saddle whose thimble appears in the deformed contour. The test: its steepest ascent contour meets the original real domain.

**Caustic.** A value of μ where several real saddles merge into a degenerate one. Thom's seven elementary catastrophes classify the stable types. Among them are the fold, the cusp, the swallowtail, and the elliptic and hyperbolic umbilics.

## Main results

The paper has no theorems. These are its main claims.

**Claim (physics argument; from Feynman to Fresnel-Kirchhoff; section II).** The path integral for a massless particle in a medium with dispersion relation ω<sup>2</sup> = k<sup>2</sup>c<sup>2</sup> + ω<sub>p</sub><sup>2</sup>(x) reduces, for a thin lens, to the finite-dimensional integral above.

**Claim (thimble decomposition; eqn. (23)).** Suppose φ continues analytically to ℂ<sup>N</sup>. Then Ψ equals (ν/π)<sup>N/2</sup> times the sum, over relevant saddles, of the integrals of exp(iνφ) over their thimbles. Each of these integrals converges absolutely. The authors take this sum as the definition of the oscillatory integral.
- Step 1: Cauchy's theorem permits the deformation of ℝ<sup>N</sup>.
- Step 2: Picard-Lefschetz theory identifies which thimbles appear.

**Claim (flow method; section IV B).** Flow the real domain along the downward gradient of h. The flowed contour converges to the correct sum of thimbles. You need not find the saddles, the ascent contours or their intersections first. The authors cite Morse-Smale theory for convergence and report that the algorithm ends in a polynomial number of steps.
- Case 1: where saddles merge, the thimble structure changes at a caustic.
- Case 2: where two saddles share the same imaginary part of the exponent, it can change at a Stokes line.

**Claim (numerical; sections V to VII).** The method computes interference patterns near each elementary catastrophe, in normal form and in localised lens models, at all frequencies. The authors report agreement with earlier results of Berry, Nye and collaborators.

## Note, then ignore

- Rational lenses. The worked examples use rational ϕ so that there are finitely many saddles and no branch cuts. The theory covers analytic lenses in general. Safe to skip on a first reading.
- Poles. A lens such as α/(1 + x<sup>2</sup>) has poles at x = ±i, and the numerical flow must cut out small neighbourhoods of them. Safe to skip at first.
- Normalisation. The amplitude is divided by the amplitude with no lens. This fixes the prefactor (ν/π)<sup>N/2</sup>. Safe to skip.
- Lossy lenses. Appendix B treats a double slit where the lens changes the modulus, not only the phase. It is a side story.
- Code. The public code covers one-dimensional lenses. A two-dimensional version was promised in the paper. Safe to skip.

## One next step

Open the paper and read the paragraph around eqn. (1) in the introduction. Then look only at Figure 7, which shows the thimbles for α = 1/2, 1 and 2.

source: https://arxiv.org/pdf/2608.20311
slogan: Photographs of a cold atomic gas show the ground-state jitter of a quantum field, mode by mode, at the size the uncertainty principle predicts.
basis: the abstract and introduction

## Before you start

This is a short experimental physics letter, not mathematics. You may feel out of place among Rabi frequencies, Bloch vectors and hyperfine states, or doubt that it belongs on your list. That unease is fine to have. If you have met vacuum fluctuations only as a formula in field theory, here you can see them as speckle in a picture. Look at the figures for pleasure first. The lab details can stay unread.

## The story

A free quantum field is a collection of harmonic oscillators, one for each wave vector k. Each oscillator has a ground state with a spread in position and momentum, so a snapshot of the field shows random structure even in the vacuum. People usually see only consequences, such as the Casimir force. This group images the structure. Their field is the spin of a flat, uniform Bose-Einstein condensate of potassium-39 atoms in two internal states, coupled by a radio-frequency field. A camera records the population imbalance Z. A fast spin rotation just before the picture turns the relative phase φ into a population, so both conjugate variables can be imaged. The measured fluctuation strength falls off as 1/ω<sub>k</sub>, as the vacuum predicts. Thermal noise would fall off as 1/ω<sub>k</sub><sup>2</sup>.

## Main definitions

**The spin field.** The condensate has two components with relative phase φ(x, y) and population imbalance Z(x, y). These are conjugate variables. The field is the pair of small deviations (δφ, δZ) from the uniform classical ground state.
- Each Fourier mode k acts as a harmonic oscillator with position ∝ δφ<sub>k</sub> and momentum ∝ δZ′<sub>k</sub>, where δZ′ is a rescaled δZ.

**Dispersion relation.** ħω<sub>k</sub> = √((ε<sub>k</sub> + ħΩ′ + 2μ′<sub>s</sub>)(ε<sub>k</sub> + ħΩ′)), with ε<sub>k</sub> = ħ<sup>2</sup>k<sup>2</sup>/2m. Here Ω′ is the scaled coupling strength and μ′<sub>s</sub> the scaled spin interaction energy.
- Rabi regime, ħΩ′ much larger than μ′<sub>s</sub>: nearly flat, ω<sub>k</sub> ≈ Ω′.
- Josephson regime, ħΩ′ much smaller than μ′<sub>s</sub>: a massive relativistic dispersion.

**Structure factor S<sub>Y</sub>(k, t).** The Fourier transform of the density-density correlation in images taken after the spin rotation. It equals a constant from density fluctuations plus αn̄⟨|δφ<sub>k</sub>(t)|<sup>2</sup>⟩/2, where n̄ is the mean density and α = 0.72.

## Main results

**Claim (theory; Eq. (4)).** In the ground state, ⟨|δφ<sub>k</sub>|<sup>2</sup>⟩ = (1/αn̄) √((ε<sub>k</sub> + ħΩ′ + 2μ′<sub>s</sub>)/(ε<sub>k</sub> + ħΩ′)), and ⟨|δZ′<sub>k</sub>|<sup>2</sup>⟩ is the same with the fraction inverted. Both scale as 1/n̄, so infinite density is the classical limit.

**Claim (experiment; amplified fluctuations; Fig. 2).** Prepare the ground state deep in the Rabi regime, with ħΩ′ about 10μ′<sub>s</sub>, then suddenly lower Ω′ to a value Ω′<sub>f</sub> at or below μ′<sub>s</sub>/ħ. The structure factor then oscillates at 2ω<sub>k</sub>. Its amplitude follows the vacuum prediction μ′<sub>s</sub>/(ε<sub>k</sub> + ħΩ′<sub>f</sub>) in trend, but sits lower by a factor of about 0.7.
- Why it oscillates: the quench stretches each oscillator's orbit into an ellipse, so the ground-state spread rotates between δZ and δφ.
- Why this is quantum: a classical particle at rest at zero energy would not move after the quench.

**Claim (experiment; direct imaging; Fig. 3).** Ramp Ω′ down slowly over 9 ms so each mode stays near its ground state. Then jump Ω′ up to about 20μ′<sub>s</sub>/ħ and watch the distribution rotate. The oscillation amplitude is predicted to be (2μ′<sub>s</sub>/ħω<sub>k</sub>)(1/2 + N<sub>k</sub>), where N<sub>k</sub> is the thermal occupation. The data follow the 1/ω<sub>k</sub> scaling of the "1/2" term. A fit gives a temperature of 6 ± 6 nK, which means N<sub>k</sub> at most about 0.1 where the ramp is slow enough.

**Claim (outlook, not shown here).** In the Josephson regime and beyond small deviations, the phase φ feels a cos φ potential, so the system encodes the sine-Gordon model. The paper measures only the small-fluctuation regime. Simulating non-perturbative sine-Gordon physics is a stated hope.

## Note, then ignore

- The factor 0.7. The authors put it down to imperfect atom detection, which lowers measured two-particle correlations. It rescales the data and does not change the scaling law. Safe to skip.
- The 20% theory correction. The prediction in Fig. 2 includes a reduction for the finite coupling strengths used in preparation and in the spin rotation. Safe to skip.
- Non-zero imbalance Z<sub>0</sub> = 0.53. The two states interact unequally, so the ground state is unbalanced. This is why primes and the factor α appear on the variables. Safe to skip.
- The shaded region in Fig. 3(b). There the ramp is too fast for the slow modes, so they are left out of the fit. Safe to skip.
- Density fluctuations. They add a time-independent term to S<sub>Y</sub>, and the oscillation amplitude does not see it. Safe to skip.

## One next step

Open the paper at Fig. 1(a) and read its caption. It shows a field split into oscillators, each with its own ground-state spread.

### Electromagnetic potentials satisfy the homogeneous Maxwell equations

**Remember:** The exterior derivative of an exterior derivative is zero.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 35Q61, 58A10. arXiv math-ph, physics.class-ph. Level 2: later undergraduate.

**Definition.** Write the electromagnetic field strength as F = dA. Here A is a potential 1-form, which assigns a linear measurement to each spacetime direction. The exterior derivative d turns A into a 2-form, which measures oriented area elements. The vector formulation instead starts with separate electric and magnetic fields.

**Problem.** The homogeneous Maxwell equations say that magnetic fields have zero divergence and that a changing magnetic field induces electric circulation. Together they say dF = 0.

**How the definition helps.** The potential makes both equations automatic because dF = d(dA) = 0. The vector proof uses separate identities for divergence and curl. The converse takes the Poincaré lemma, which gives a potential for any closed form on a smoothly contractible region (our own). A global potential can fail to exist when there is nonzero magnetic flux through a closed surface (our own).

**nLab:** [electromagnetic field](https://ncatlab.org/nlab/show/electromagnetic+field). It says: “Maxwell's equations say that (using the experimentally observed absence of net magnetic charge) the field strength of electromagnetism is a closed differential 2-form on spacetime;”

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “Faraday's law and Gauss's law for magnetism (the homogeneous equations) turn out to be identically true for any potentials.”

**Sources:** none listed. No primary source with a working link was found.

### The electromagnetic tensor makes Maxwell’s equations Lorentz covariant

**Remember:** Tensor equations hold in every inertial frame if they hold in one.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 83A05. arXiv math-ph, physics.class-ph. Level 2: later undergraduate.

**Definition.** Combine the electric and magnetic fields into the electromagnetic tensor F, an antisymmetric array with two spacetime indices. The tensor formulation also combines charge and current densities into one spacetime vector. The usual vector formulation separates electric from magnetic and time from space.

**Problem.** The transformed fields and sources satisfy Maxwell’s equations in every inertial frame if they satisfy them in one. Lorentz transformations relate these frames and preserve the spacetime interval.

**How the definition helps.** The tensor definition makes covariance immediate because a Lorentz transformation changes both sides of each tensor equation by the same rule. With separate electric and magnetic vectors, one must check their mixing under a change of frame. The work moves into checking that the tensor equations reproduce the four vector equations (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field), [Covariant formulation of classical electromagnetism](https://en.wikipedia.org/wiki/Covariant_formulation_of_classical_electromagnetism). It says: “Maxwell's equations are exactly consistent with special relativity—i.e., if they are valid in one inertial reference frame, then they are automatically valid in every other inertial reference frame.”

**Sources:** none listed. No primary source with a working link was found.

### The Lorenz gauge turns Maxwell's equations into wave equations

**Remember:** One gauge choice, and the potentials obey plain wave equations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 78A25 (Electromagnetic theory (general)), 78A40. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The Lorenz gauge is the condition that the four-divergence of the electromagnetic four-potential is zero. In terms of the scalar potential φ and the vector potential A, this is ∇·A + (1/c²) ∂φ/∂t = 0.

**Problem.** Show that in a suitable gauge, Maxwell's equations for the potentials become separate inhomogeneous wave equations. There is one for φ and one for each component of A, and the form is visibly Lorentz invariant.

**How the definition helps.** The Lorenz gauge separates the equations and keeps Lorentz invariance in view. The potentials of electromagnetism are fixed only up to a gauge transformation, so we may add one condition. In the Lorenz gauge, each potential obeys its own inhomogeneous wave equation. The source of each equation is the charge density or a component of the current density. The condition itself is Lorentz invariant. The Coulomb gauge instead gives a scalar potential that responds instantly, and it is not Lorentz covariant. What remains: the Lorenz gauge leaves some gauge freedom (solutions of the wave equation), so it does not fix the gauge completely.

**Wikipedia:** [Gauge fixing](https://en.wikipedia.org/wiki/Gauge_fixing). It says: “It is unique among the constraint gauges in retaining manifest Lorentz invariance.”

**Sources:**

- [L. Lorenz, On the identity of the vibrations of light with electrical currents, Philosophical Magazine 34 (1867) 287–301](https://doi.org/10.1080/14786446708639882)

### Maxwell’s current 3-form makes charge conservation automatic

**Remember:** The derivative of the current vanishes because the current is itself a derivative.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 35Q61. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** Package charge density and current density into a current 3-form J, which measures charge flux through three-dimensional slices of spacetime. The Maxwell source equation is d⋆F = J in units that absorb the coupling constant. Here F is the electromagnetic 2-form, d is the exterior derivative, and ⋆ is the Hodge star, a map built from the metric.

**Problem.** The Maxwell source equation implies local charge conservation, which is dJ = 0.

**How the definition helps.** The current 3-form makes conservation immediate because dJ = d(d⋆F) = 0. In the vector formulation, take the divergence of the Ampère–Maxwell equation and use Gauss’s law to replace the electric divergence (our own). The work is in showing that the form equation combines those two vector equations (our own). The source equation constrains J rather than defining the physical current (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “Since d² = 0, the 3-form J satisfies the conservation of current (continuity equation):”

**Sources:** none listed. No primary source with a working link was found.

---
title: "Wilsonian renormalisation from QED to epidemic events"
date: "2026-09-26"
summary: "A mental ladder from exact Gaussian elimination to the one-loop QED charge flow, cumulant coarse-graining, and epidemic thresholds."
category: Mathematical Physics
tags: mental-computation, renormalisation, quantum-field-theory, probability, epidemics, effective-theory
slug: wilsonian-renormalisation-from-qed-to-epidemics
---

Renormalisation is not principally the removal of infinities. It is controlled
forgetting: eliminate unresolved variables, rewrite the remaining law, and ask
which parameters survive repeated changes of scale.

The checkable target is one-flavour QED at one loop. Lower the Wilsonian scale
from $\Lambda$ to $\Lambda/b$, with $b>1$, and reconstruct mentally

$$
\boxed{\frac1{e^2(\Lambda/b)}=
\frac1{e^2(\Lambda)}+\frac{\log b}{6\pi^2}}.
$$

The same operations will then compute a probability-law flow and a
near-threshold epidemic survival probability. The applications share a
calculus of marginalisation and scale; they do **not** share QED's particles or
quantum interpretation.

Route: Gaussian elimination $\to$ exact marginal $\to$ rescale $\to$ classify
couplings $\to$ QED charge flow $\to$ cumulant flow $\to$ epidemic threshold.

## 1. Shadow: eliminate one Gaussian variable

**Prompt.** Integrate out $y$ from
$Q(x,y)=\tfrac12(ax^2+2bxy+cy^2)$, where $c>0$.

<details>
<summary>Mental route</summary>

Complete one square:

$$
Q=\frac c2\left(y+\frac bc x\right)^2
 +\frac12\left(a-\frac{b^2}{c}\right)x^2.
$$

The shifted Gaussian integral contributes only an $x$-independent factor.
Therefore the effective quadratic coefficient is

$$a_{\rm eff}=a-b^2/c.$$

Governing idea: integrating out a coupled variable subtracts its mediated
response. This is the Schur complement, the finite-dimensional shadow of a
Wilsonian effective action.

Check independently: $\det\begin{pmatrix}a&b\\b&c\end{pmatrix}
=c(a-b^2/c)$. Positivity of the full quadratic form implies positivity of the
remaining coefficient.

**Status:** exact theorem-backed Gaussian marginalisation.

</details>

## 2. Higher object: a Wilson step is a marginal

**Prompt.** Define the effective action after removing momenta
$\Lambda/b<|p|<\Lambda$.

<details>
<summary>Mental route</summary>

Split the field into low and shell modes, $\phi=\phi_<+\phi_>$. Define

$$
e^{-S_{\Lambda/b}[\phi_<]}
=\int\mathcal D\phi_>\,e^{-S_\Lambda[\phi_<+\phi_>]}.
$$

This is the Gaussian calculation with infinitely many coupled coordinates.
It is an exact marginal before approximation. Then rescale momenta and fields
so the cutoff again reads $\Lambda$; the resulting couplings can be compared
with their old values.

The three verbs are **eliminate, rescale, reparametrise**. A practical model
usually projects the exact answer onto a tractable family; that projection,
not marginalisation itself, introduces closure error.

Check: integrating the remaining modes reproduces the original partition
function. Polchinski's flow equation is the differential, smooth-cutoff form
of this idea.

**Status:** exact formal identity; a functional measure may require
regularisation.

</details>

## 3. Natural family: relevant, marginal, irrelevant

**Prompt.** Under a length rescaling $x\mapsto bx$, how does a coupling to an
operator of scaling dimension $\Delta$ change in $d$ dimensions?

<details>
<summary>Mental route</summary>

In $g\int d^dx\,\mathcal O(x)$, volume contributes $b^d$ and the operator
contributes $b^{-\Delta}$. Hence

$$g' = b^{d-\Delta}g.$$

Read the sign of $y=d-\Delta$: positive grows and is **relevant**; zero is
**marginal** and needs loop corrections; negative shrinks and is
**irrelevant**. Near a fixed point, the same classification comes from the
eigenvalues of the linearised RG map.

Check: a mass-squared term in four dimensions has $y=2$ and grows toward long
distances; a dimension-six interaction has $y=-2$ and fades.

This is why coarse models can have few parameters: repeated blocking suppresses
many microscopic directions while retaining relevant ones.

**Status:** theorem-backed dimensional scaling at a scale-invariant fixed
point; engineering dimensions are the free-theory approximation.

</details>

## 4. The QED loop coefficient

**Prompt.** Recover the number behind the one-loop QED beta function.

<details>
<summary>Mental route</summary>

Gauge symmetry makes the photon vacuum-polarisation tensor transverse. In the
standard one-loop Feynman-parameter form, the logarithmic coefficient contains

$$
\frac{e^2}{2\pi^2}\int_0^1x(1-x)\,dx.
$$

Compute the only arithmetic:

$$\int_0^1(x-x^2)dx=\frac12-\frac13=\frac16.$$

Thus the logarithm carries $e^2/(12\pi^2)$. The Ward identity ties charge
renormalisation to photon-field renormalisation, yielding for one unit-charge
Dirac fermion

$$\beta(e)=\frac{de}{d\log\mu}=\frac{e^3}{12\pi^2}+O(e^5).$$

Check: the sign is positive—screening makes the effective electric charge
larger at shorter distances. With several active Dirac fields, multiply the
coefficient by $\sum_iQ_i^2$; below a particle's mass, match to a theory with
that field removed.

**Status:** standard perturbative one-loop result; the integral alone is not a
derivation of the tensor and symmetry factors.

</details>

## 5. Target: run the QED coupling downward

**Prompt.** Starting from $\beta(e)=e^3/(12\pi^2)$, lower the scale by $b$.

<details>
<summary>One-shot solution</summary>

Differentiate the inverse square, because the powers cancel:

$$
\frac{d(e^{-2})}{d\log\mu}
=-2e^{-3}\beta(e)=-\frac1{6\pi^2}.
$$

Integrate from $\Lambda$ to $\Lambda/b$; the log interval is $-\log b$:

$$
\boxed{\frac1{e^2(\Lambda/b)}=
\frac1{e^2(\Lambda)}+\frac{\log b}{6\pi^2}}.
$$

Check one: going to the infrared increases $1/e^2$, so $e$ decreases. Check
two: with $\alpha=e^2/(4\pi)$, differentiation gives
$d(1/\alpha)/d\log\mu=-2/(3\pi)$, the familiar form. Check three: reversing
the endpoints reverses the sign.

Permanent memory: $\beta(e)=e^3/(12\pi^2)$. Reconstruct everything else by
choosing $e^{-2}$.

**Status:** perturbative through one loop and valid between mass thresholds.

</details>

## 6. Probability: the central limit theorem as an RG flow

**Prompt.** Let $X_1,\ldots,X_b$ be independent centred copies of $X$, with
unit variance, and $Y=b^{-1/2}\sum_iX_i$. How do its cumulants flow?

<details>
<summary>Mental route</summary>

Cumulants add for independent sums and scale as the corresponding power under
multiplication. Therefore

$$\kappa_n(Y)=b\,b^{-n/2}\kappa_n(X)=b^{1-n/2}\kappa_n(X).$$

The variance ($n=2$) is fixed. Every finite cumulant with $n>2$ shrinks. In
particular, skewness gains $b^{-1/2}$ and excess kurtosis gains $b^{-1}$ per
blocking step. The Gaussian is the fixed distribution because all cumulants
beyond the second vanish.

Check with two variables: variance is
$2^{-1}(1+1)=1$. The exponent $1-n/2$ is zero exactly at $n=2$ and negative
after it.

This is Wilsonian thinking without quantum mechanics: convolution eliminates
microscopic detail, rescaling fixes the variance, and cumulants are coupling
coordinates.

**Status:** exact cumulant algebra; convergence needs the hypotheses of an
appropriate central limit theorem.

</details>

## 7. Epidemic event shadow: survival near threshold

**Prompt.** Early in a well-mixed outbreak, suppose each infection produces a
Poisson number of secondary infections with mean $R=1+\varepsilon$. Find the
survival probability to first order for small $\varepsilon>0$.

<details>
<summary>Mental route</summary>

The offspring generating function is $G(s)=e^{R(s-1)}$. Extinction means every
descendant branch goes extinct, so its probability $q$ obeys

$$q=G(q)=e^{R(q-1)}.$$

Write survival as $x=1-q$. Taking logs gives
$\log(1-x)=-(1+\varepsilon)x$. Expand:

$$-x-\frac{x^2}{2}+\cdots=-x-\varepsilon x,$$

so the nonzero root is

$$\boxed{x=1-q\simeq2\varepsilon}.$$

Check: $x$ vanishes continuously at $R=1$ and is positive only above the
threshold. This is an early-outbreak branching approximation, not a forecast
for a depleted, networked, time-varying population.

**Status:** exact fixed-point equation inside the Poisson Galton--Watson model;
the final answer is a first-order asymptotic.

</details>

## 8. Higher stochastic object: an epidemic field theory

**Prompt.** What survives when infection events are spatial, stochastic, and
correlated?

<details>
<summary>Mental route</summary>

A master equation for births, infections, recoveries, and motion can be encoded
by a generating functional; the Doi--Peliti construction turns it into a path
integral with density and response fields. Coarse-graining that action uses the
same loop, beta-function, fixed-point, and relevance machinery as QFT.

The universality class depends on the state structure:

- repeated infection with a unique absorbing healthy state gives the simple
  epidemic/contact-process route to directed percolation, with upper critical
  spatial dimension $4$;
- permanent removal or immunisation introduces memory and leads to the general
  epidemic process/dynamic isotropic percolation, with upper critical dimension
  $6$.

The relevant lesson is not “all epidemics are identical.” It is that symmetry,
absorbing states, conservation laws, memory, dimensionality, and interaction
range determine which microscopic details can disappear at large scales.

Check: adding immunisation changes the state space and supplies a relevant
memory perturbation, so it should not be silently fitted by the reinfection
class.

**Status:** theorem-backed formal mapping for specified Markov processes;
universality claims are asymptotic model statements.

</details>

## 9. Compressed shadow: renormalise a general model

**Prompt.** Apply the method outside physics without importing physics by
analogy alone.

<details>
<summary>Mental route</summary>

Use seven questions:

1. **Resolution:** what spatial, temporal, or population scale is changing?
2. **Retained observables:** which predictions must remain invariant?
3. **Elimination:** what latent or fine variables are marginalised?
4. **Rescaling:** how are units restored so successive models are comparable?
5. **Coordinates:** which cumulants, rates, kernels, or operators parameterise
   the effective law?
6. **Flow:** which coordinates grow, remain, or decay under repetition?
7. **Validation:** do held-out aggregates agree across more than one scale?

This yields a semigroup of coarse-graining maps; information loss usually
prevents inverses, despite the historical word “group.” Exact closure is rare.
Record projection error, observation error, and sensitivity to the chosen
coarse variables.

Check: Gaussian elimination, QED shells, block sums, and epidemic field
theories all answer the seven questions, but with different objects and
evidence.

**Status:** modelling protocol; its usefulness must be validated case by case.

</details>

## Compressed run

1. Complete the square: $a\mapsto a-b^2/c$.
2. Split low/shell modes; integrate the shell; rescale.
3. Read relevance from $y=d-\Delta$.
4. Remember $\int_0^1x(1-x)dx=1/6$ and
   $\beta(e)=e^3/(12\pi^2)$.
5. Differentiate $e^{-2}$ and integrate over $-\log b$.
6. For block sums, $\kappa_n\mapsto b^{1-n/2}\kappa_n$.
7. For Poisson offspring, $q=e^{R(q-1)}$ and
   $1-q\simeq2(R-1)$ just above threshold.
8. Reinfection suggests DP; permanent immunisation changes the theory to dIP.
9. For any model: resolution, observables, elimination, rescaling,
   coordinates, flow, validation.

Recall tomorrow: derive the QED target from “inverse square, minus one over six
pi squared.” After one week: derive the cumulant exponent without looking.
After one month: classify a new event model's retained observables, absorbing
states, memory, and relevant parameters before writing an action.

## References

- Joseph Polchinski, [“Renormalization and Effective Lagrangians”](https://doi.org/10.1016/0550-3213(84)90287-6), especially the cutoff-dependent effective Lagrangian and relevant/irrelevant decomposition.
- Mark Srednicki, [*Quantum Field Theory*](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), §§65–66, especially eqs. (66.29)–(66.32) for the QED beta function and thresholds.
- Giovanni Jona-Lasinio, [“Renormalization Group and Probability Theory”](https://arxiv.org/abs/cond-mat/0009219), §§I–II.
- Hans-Karl Janssen and Uwe C. Täuber, [“The Field Theory Approach to Percolation Processes”](https://arxiv.org/abs/cond-mat/0409670), §§2–4.
- Tom Britton, [“Stochastic epidemic models: a survey”](https://arxiv.org/abs/0910.4443), for branching approximations to early epidemic spread.

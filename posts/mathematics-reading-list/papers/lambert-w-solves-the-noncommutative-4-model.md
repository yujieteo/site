source: https://arxiv.org/pdf/1807.02945
slogan: A nonlinear integral equation from a quantum field theory on a noncommutative plane has an exact solution built from Lambert's W function.
basis: the introduction and the main theorem statements

## Before you start

The first page shows a nonlinear integral equation four lines long, and the words "noncommutative quantum field theory" sit in the title. You may feel dread at the formulas, or doubt that you can follow without the physics. That is a fair reaction and you may keep it. The proof uses tools you may already like: the Hilbert transform, power series and Lagrange inversion. If you enjoy seeing a guess from ten computed terms turn into a theorem, this paper is for you. Go at the pace that is fun.

## The story

The Φ<sup>4</sup> model on the two-dimensional Moyal plane is a quantum field theory that can be written as a matrix model. In a large-size limit its 2-point function G(a, b) satisfies a closed but nonlinear integral equation. Nobody had an exact solution. Panzer and Wulkenhaar first rewrite the equation as a boundary value problem for a function holomorphic off a cut. That reduces everything to one unknown function of one variable. Then they expand in the coupling λ and compute ten orders by computer. The coefficients are far simpler than expected: only powers of log(1 + a). They guess the general term, sum the series with the Lagrange-Bürmann formula, and find the Lambert function W. Then they prove the guess is right.

## Main definitions

**Lambert function.** W is defined by W(z) exp(W(z)) = z. The principal branch W<sub>0</sub> is the real branch used for positive arguments.

**The model.** The action on the Moyal plane has a harmonic oscillator term at critical frequency Ω = 1. In a matrix basis it becomes S(Φ) = V tr(EΦ<sup>2</sup> + (λ/4)Φ<sup>4</sup>) for self-adjoint matrices Φ, with E diagonal.
- Limit: matrix size N and volume V go to infinity with N/V fixed, and matrix indices become real variables a, b ≥ 0.

**2-point function G<sub>λ</sub>(a, b).** The limit of the connected 2-point function of the matrix model. It satisfies the integral equation (1) of the paper, which is quadratic in G and contains principal value integrals over (0, ∞).

**Angle function τ<sub>b</sub>(a).** A function with values in [0, π] that satisfies the fixed-point equation (21). The solution is G<sub>λ</sub>(a, b) = sin τ<sub>b</sub>(a) exp(H<sub>a</sub>[τ<sub>b</sub>]) / (λπ), where H is the one-sided Hilbert transform.

## Main results

**Theorem (exact solution; Theorem 1).** For every real λ > 0, equation (1) has the solution G<sub>λ</sub>(a, b) = (1 + a + b) exp(N<sub>λ</sub>(a, b)) / ((a + λW<sub>0</sub>(e<sup>(1+b)/λ</sup>/λ)) (b + λW<sub>0</sub>(e<sup>(1+a)/λ</sup>/λ))). Here N<sub>λ</sub>(a, b) is an explicit single integral of logarithms over the real line, given in eqn. (3). The solution is symmetric in a and b.
- Step 1: turn the equation into a boundary value problem and solve the resulting Carleman-type singular equations by an angle function.
- Step 2: find the angle function as a power series in λ and sum it.

**Theorem (analyticity; Theorem 1, second part).** The solution and the equation continue analytically to a domain of complex λ that contains the real interval (−1/log 4, ∞). G<sub>λ</sub> is the unique solution that is analytic at λ = 0. Its power series in λ has radius of convergence 1/log 4, about 0.72.

**Theorem (resummation; eqns. (29) to (31)).** The series K(a, λ) = Σ (λ<sup>n</sup>/n!) d<sup>n−1</sup>/da<sup>n−1</sup> (−log(1 + a))<sup>n</sup> satisfies K = −λ log(1 + a + K). Hence K(a, λ) = λW((1/λ)e<sup>(1+a)/λ</sup>) − 1 − a.
- Step 1: the Lagrange-Bürmann inversion formula identifies K as an inverse function.
- Step 2: the functional equation is the defining equation of W after a change of variable.

## Note, then ignore

- Other solutions. The authors fix a free function h(a) to zero. They do not rule out further solutions that are not analytic at λ = 0. Safe to skip on a first reading.
- Mass renormalisation. The bare mass is chosen as μ<sup>2</sup> = 1 − 2λ log(1 + Λ<sup>2</sup>) so that the cutoff Λ can go to infinity. Safe to skip.
- Sign of λ. The method is run for λ > 0, and negative λ is reached only at the end by continuation. Safe to skip.
- Stirling numbers. The guessed series (Conjecture 6) is written with Stirling numbers of the first kind. It is proved later in the paper. Safe to skip.
- By-product identities. Equations (4a) to (4c) are integral identities for W that fall out of the proof. Safe to skip.

## One next step

Open the paper at section 4 and read eqn. (22). Look at how few kinds of term appear in the first four orders.

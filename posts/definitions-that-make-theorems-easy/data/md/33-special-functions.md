### Defining cosh and sinh by exponentials makes their addition laws algebra

**Remember:** The exponential addition law gives the hyperbolic addition laws.

*True by definition. Confidence: medium.* MSC 33B10 (Exponential and trigonometric functions), 26A09. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define cosh t = (eᵗ + e⁻ᵗ)/2 and sinh t = (eᵗ − e⁻ᵗ)/2. The geometric definition takes (cosh t, sinh t) as the point on the right branch of x² − y² = 1. There, t is twice the signed area of the sector from (1, 0) to that point.

**Problem.** For real x and y, sinh(x + y) = sinh x cosh y + cosh x sinh y.

**How the definition helps.** With exponential definitions, the identity is a polynomial identity in eˣ and eʸ (our own). Expanding the right side, the terms eˣ⁻ʸ and eʸ⁻ˣ cancel, and only eˣ⁺ʸ and e⁻ˣ⁻ʸ remain (our own). With the geometric definition, the work moves into an area calculation. For a point (p, q) on the hyperbola, twice the sector area equals ln(p + q), which gives the exponential formulas (our own).

**Wikipedia:** [Hyperbolic functions](https://en.wikipedia.org/wiki/Hyperbolic_functions). It says: “sinh(x + y) = sinh x cosh y + cosh x sinh y”

**Sources:**

- [James McMahon, Hyperbolic Functions, John Wiley and Sons (1896).](https://archive.org/details/hyperbolicfuncti031883mbp)

### Unit-circle coordinates give the Pythagorean identity

**Remember:** The squares of the coordinates of a point on the unit circle sum to one.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 97G60. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** On the unit circle centred at (0, 0), start at (1, 0) and turn through the angle θ in radians. Take counterclockwise turns as positive. Define cos θ as the horizontal coordinate of the endpoint and sin θ as the vertical coordinate. The right-triangle definition instead uses ratios of sides and starts with acute angles.

**Problem.** For every real angle θ, cos²θ + sin²θ = 1.

**How the definition helps.** The coordinate definition makes cos²θ + sin²θ = 1 the equation of the circle. The Pythagorean theorem gives that equation by relating distance from the origin to the two coordinates. For acute angles, the triangle definition gives the same coordinates because the hypotenuse has length 1.

**Wikipedia:** [Trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions). It says: “And since the equation x²+y²=1 holds for all points P = (x,y) on the unit circle, this definition of cosine and sine also satisfies the Pythagorean identity.”

**Paper or page:** [Sum of Squares of Sine and Cosine](https://proofwiki.org/wiki/Sum_of_Squares_of_Sine_and_Cosine). It says: “cos² x + sin² x = 1 where sin and cos are sine and cosine.”

**Sources:** none listed. No primary source with a working link was found.

### Unit-circle coordinates make sine and cosine periodic

**Remember:** One more full turn lands on the same point, so the values repeat.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 97G60. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** Start at (1, 0) and travel a signed distance θ along the unit circle, with positive distance measured counterclockwise. Define cos θ as the horizontal coordinate of the endpoint and sin θ as the vertical coordinate.

**Problem.** For every real θ and every integer k, sin(θ + 2πk) = sin θ and cos(θ + 2πk) = cos θ.

**How the definition helps.** Sine and cosine repeat because travelling one more circumference returns to the same point. The circumference of a unit circle is 2π, so any whole number of extra turns leaves both coordinates unchanged. With power-series definitions, a different proof is needed. One route proves that the series agree with the circle coordinates, using arc length to link the angle to the series (our own).

**Wikipedia:** [Trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions). It says: “the points A, B, C, D, and E are the same for two angles whose difference is an integer multiple of 2π. Thus trigonometric functions are periodic functions with period 2π.”

**Sources:** none listed. No primary source with a working link was found.

### One Lambert branch gives uniqueness

**Remember:** Keep w at least minus one to get a single inverse.

*Rules out counterexamples.* MSC 33E20 (Other functions defined by series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define the principal real Lambert branch W₀ as the inverse of w ↦ w exp(w) restricted to w ≥ −1. The unrestricted inverse is a relation that can return more than one value.

**Problem.** For every x ≥ −1/e, the equation w exp(w) = x has exactly one real solution with w ≥ −1. It is W₀(x).

**How the definition helps.** In our own proof, the restriction puts w on the strictly increasing part of w exp(w). Our own calculation uses the derivative exp(w)(1 + w) to show that this part runs from −1/e to infinity. In our own counterexample, x = −2 exp(−2) also has the solution w = −2 on the other branch.

**nLab:** [Lambert W-function](https://ncatlab.org/nlab/show/Lambert+W-function). It says: “In complex analysis, the Lambert W-function is a multi-branched function inverse to the function f(z) = zeᶻ.”

**Wikipedia:** [Lambert W function](https://en.wikipedia.org/wiki/Lambert_W_function). It says: “When dealing with real numbers only, the two branches W₀ and W₋₁ suffice”

**Sources:**

- [R. M. Corless et al., On the Lambert W function (1996)](https://doi.org/10.1007/bf02124750)

### An exponential average makes sinc entire

**Remember:** The exponential average has no division by zero.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define normalized sinc by integrating exp(2πizt) for −½ ≤ t ≤ ½. The usual quotient definition uses sin(πz)/(πz) and fills in its value at zero separately.

**Problem.** Normalized sinc is entire, meaning complex differentiable everywhere, and has value 1 at zero.

**How the definition helps.** In our own proof, averaging an exponential over a bounded interval gives a power series converging uniformly on every bounded set of z. At zero the integrand equals one throughout an interval of length one. Integrating explicitly for z ≠ 0 identifies the average with the usual quotient.

**Wikipedia:** [Sinc function](https://en.wikipedia.org/wiki/Sinc_function). It says: “The normalized sinc function is the Fourier transform of the rectangular function with no scaling.”

**Sources:** none listed. No primary source with a working link was found.

### Defining π through the exponential gives Euler’s identity

**Remember:** π is where exp(it) first reaches −1, so exp(iπ) = −1 is the definition.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 26A09. arXiv math.CA, math.CV. Level 2: later undergraduate.

**Definition.** For real t, let φ(t) = exp(it), where i² = −1. Define π as the least positive t with φ(t) = −1. The geometric definition uses the ratio of a circle’s circumference to its diameter.

**Problem.** exp(iπ) = −1. Also, exp(z + 2πi) = exp(z) for every complex number z.

**How the definition helps.** Euler’s identity is the condition that defines π. Squaring it gives exp(2πi) = 1, so the addition law for exp gives the stated period. The work is to show that φ reaches −1, which the nLab does by showing that φ covers the whole circle. Continuity then keeps solutions away from 0, so a first positive solution exists (our own).

**nLab:** [pi](https://ncatlab.org/nlab/show/pi). It says: “We may define π to be the least positive t such that φ(t) = −1”

**Sources:** none listed. No primary source with a working link was found.

### Exponential definitions make the cosine product-to-sum rule algebra

**Remember:** Write everything as exponentials, multiply out, and read off the identity.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 30D20. arXiv math.CA, math.CV. Level 2: later undergraduate.

**Definition.** Define the complex exponential by the series exp(z) = 1 + z + z²/2! + z³/3! + ⋯. For real x, define cos x = (exp(ix) + exp(−ix))/2. Define sin x = (exp(ix) − exp(−ix))/(2i), where i² = −1. The geometric definition instead uses the coordinates of a point on the unit circle.

**Problem.** For all real a and b, 2 cos a cos b = cos(a − b) + cos(a + b).

**How the definition helps.** The exponential definition reduces the product of cosines to four products of exponentials. The law exp(u + v) = exp(u) exp(v) converts each product to a single exponential. Pairing exponents of opposite sign gives the two cosines (our own calculation). With the circle definition, one can instead add the formulas for cos(a + b) and cos(a − b). The work moves into proving the exponential law and showing that these formulas for sine and cosine give the circle coordinates (our own comparison).

**nLab:** [trigonometric function](https://ncatlab.org/nlab/show/trigonometric+function). It says: “The most useful modern approach to cos and sin comes from taking Euler's formula as a working definition”

**Wikipedia:** [Euler's formula](https://en.wikipedia.org/wiki/Euler%27s_formula). It says: “Euler's formula, the definitions of the trigonometric functions and the standard identities for exponentials are sufficient to easily derive most trigonometric identities.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperbola coordinates give the identity cosh²t − sinh²t = 1

**Remember:** The point (cosh t, sinh t) sits on x² − y² = 1 by construction.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 26A09. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Take the branch x &gt; 0 of the hyperbola x² − y² = 1. For a point on it, let t be twice the area between the ray from the origin, the hyperbola, and the horizontal axis. Give t a negative sign below the axis and define cosh t = x and sinh t = y. Another definition sets cosh t = (exp(t) + exp(−t))/2 and sinh t = (exp(t) − exp(−t))/2.

**Problem.** For every real t, cosh²t − sinh²t = 1.

**How the definition helps.** The coordinate definition makes the identity the equation of the hyperbola. With the exponential definition, one instead expands and subtracts the two squares. The work moves into showing that the signed area gives the exponential formulas. With u = x + y, twice the signed area is the integral of 1/u from 1 to x + y, so x + y = exp(t) (our own).

**Wikipedia:** [Hyperbolic functions](https://en.wikipedia.org/wiki/Hyperbolic_functions). It says: “Just as the points (cos t, sin t) form a circle with a unit radius, the points (cosh t, sinh t) form the right half of the unit hyperbola.”

**Sources:** none listed. No primary source with a working link was found.

### The exponential definition makes de Moivre’s formula an exponent law

**Remember:** Raising exp(ix) to the n-th power just multiplies the angle by n.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 97F50. arXiv math.CV, math.HO. Level 2: later undergraduate.

**Definition.** For real x, define cos x and sin x as the real and imaginary parts of the complex exponential exp(ix), where i² = −1. Thus cos x + i sin x = exp(ix) by definition. The geometric definition instead takes the two coordinates from the unit circle.

**Problem.** For every integer n and real x, (cos x + i sin x)ⁿ = cos nx + i sin nx.

**How the definition helps.** The exponential definition makes de Moivre’s formula the integer power law exp(ix)ⁿ = exp(inx). This law follows from exp(u + v) = exp(u) exp(v). Negative powers work because exp(−u) = 1/exp(u). With the circle definition, another proof uses the angle-addition formulas and induction, then takes reciprocals for negative powers (our own). The exponent proof relies on the addition law for exp and on proving that the exponential definition gives the circle coordinates (our own).

**nLab:** [trigonometric function](https://ncatlab.org/nlab/show/trigonometric+function). It says: “In other words: exp(i t) = cos(t) + i sin(t) (Euler).”

**Wikipedia:** [De Moivre's formula](https://en.wikipedia.org/wiki/De_Moivre%27s_formula). It says: “One can derive de Moivre's formula using Euler's formula and the exponential law for integer powers”

**Sources:** none listed. No primary source with a working link was found.

### Defining beta as a gamma quotient makes beta products telescope

**Remember:** Write each beta as gammas, and the middle gamma factors cancel.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For positive x and y, define Β(x, y) = Γ(x)Γ(y)/Γ(x + y). Euler’s integral instead integrates t raised to x − 1 times (1 − t) raised to y − 1 over \[0, 1\].

**Problem.** For positive x, y, z, Β(x, y)Β(x + y, z) = Β(x, y + z)Β(y, z).

**How the definition helps.** With the gamma quotient, both sides equal Γ(x)Γ(y)Γ(z)/Γ(x + y + z) after one cancellation (our own). With Euler’s integral, the identity needs a change of variables in a double integral. The work moves to the theorem that the quotient equals Euler’s integral, which the cited ProofWiki page states.

**Paper or page:** [Beta Function expressed using Gamma Functions](https://proofwiki.org/wiki/Beta_Function_expressed_using_Gamma_Functions). It says: “Β(x, y) = Γ(x) Γ(y)/Γ(x + y)”

**Sources:** none listed. No primary source with a working link was found.

### Defining beta by gamma quotients gives its recurrence at once

**Remember:** Raising x by one raises two gamma arguments and leaves x/(x + y).

*True by definition. Confidence: medium.* MSC 33B15 (Gamma, beta and polygamma functions), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x, y &gt; 0, define B(x, y) = Γ(x)Γ(y)/Γ(x + y). Here Γ(x) is the integral of tˣ⁻¹exp(−t) over t &gt; 0. The other definition is Euler's integral of tˣ⁻¹(1 − t)ʸ⁻¹ over (0, 1).

**Problem.** For x, y &gt; 0, B(x + 1, y) = x B(x, y)/(x + y).

**How the definition helps.** With the gamma quotient, the recurrence follows from Γ(s + 1) = sΓ(s) used twice (our own). The numerator gains a factor x, and the denominator gains a factor x + y (our own). With the integral definition, one instead integrates by parts and uses B(x, y) = B(x + 1, y) + B(x, y + 1) (our own). The work moves into the identity B(x, y) = Γ(x)Γ(y)/Γ(x + y). Wikipedia proves it by multiplying two gamma integrals and changing variables.

**Wikipedia:** [Beta function](https://en.wikipedia.org/wiki/Beta_function). It says: “Β(z₁,z₂) = Γ(z₁)Γ(z₂)/Γ(z₁ + z₂)”

**Sources:** none listed. No primary source with a working link was found.

### Euler’s limit definition gives Γ(x + 1) = xΓ(x) at every non-pole

**Remember:** In Euler’s limit, neighbouring products cancel and leave a factor tending to x.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let x be complex, other than 0, −1, −2, …. Define Γ(x) as the limit of k!·k raised to x − 1, over x(x + 1)⋯(x + k − 1), as k grows. The usual definition is Euler’s integral of t raised to x − 1 times exp(−t) over the positive half-line. That integral converges only when the real part of x is positive.

**Problem.** For every complex x other than 0, −1, −2, …, Γ(x + 1) = xΓ(x).

**How the definition helps.** With Euler’s limit, the quotient of the finite expressions at x + 1 and at x is kx/(x + k), which tends to x. So the formula holds at once on the whole domain. The integral definition gives it by integration by parts only where the real part of x is positive, and continuation beyond needs the formula itself. The work moves to showing that the limit exists and equals the integral there (our own proof steps).

**nLab:** [Gamma function](https://ncatlab.org/nlab/show/Gamma+function). It says: “the Gamma function satisfies the following translation formula”

**Sources:** none listed. No primary source with a working link was found.

### The polygamma integral fixes signs

**Remember:** Each derivative adds one negative logarithm under the polygamma integral.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Take x &gt; 0 and an integer n ≥ 1. Define ψₙ(x) as the integral of −uˣ⁻¹(log u)ⁿ/(1 − u) from zero to one. The usual definition takes n + 1 derivatives of log Γ(x).

**Problem.** For each integer n ≥ 1, let f(x) = (−1)ⁿ⁺¹ψₙ(x). This function is completely monotone on x &gt; 0. Its kth derivative has sign (−1)ᵏ for every integer k ≥ 0.

**How the definition helps.** In our own proof, the integral has a fixed sign, and each x derivative adds a factor log u ≤ 0. Our own argument uses integrable bounds on compact intervals of x to justify those derivatives. In our own account, the main work is to match the integral to the corresponding derivative of log Γ.

**Paper or page:** [Integral Form of Polygamma Function/Corollary](https://proofwiki.org/wiki/Integral_Form_of_Polygamma_Function/Corollary). It says: “ψₙ(z) = −∫₀¹ uᶻ⁻¹ (ln u)ⁿ/(1 − u) du”

**Sources:** none listed. No primary source with a working link was found.

### Working with 1/Γ gives a gamma product formula with no exceptions

**Remember:** The gamma function has poles; its reciprocal has zeros and no exceptions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The reciprocal gamma function is 1/Γ(z). It is entire of order 1. It has simple zeros at 0, −1, −2, … and no other zeros.

**Problem.** For every complex z, 1/Γ(z) = z exp(γz) ∏ (1 + z/n) exp(−z/n), where γ is the Euler–Mascheroni constant. The reflection formula becomes 1/(Γ(z)Γ(1 − z)) = sin(πz)/π for all z (our own).

**How the definition helps.** Turning the poles of Γ into zeros gives an entire function, so its identities hold at every point (our own explanation). For Γ itself, each formula must exclude the non-positive integers. As an entire function of order 1, 1/Γ is a Weierstrass product over its zeros. Weierstrass used this product in developing his factorization theorem.

**Wikipedia:** [Reciprocal gamma function](https://en.wikipedia.org/wiki/Reciprocal_gamma_function). It says: “Since the gamma function is meromorphic and nonzero everywhere in the complex plane, its reciprocal is an entire function.”

**Sources:** none listed. No primary source with a working link was found.

### Poisson arrival times make the regularized incomplete gamma a Poisson probability

**Remember:** The nth arrival is late exactly when fewer than n have arrived.

*True by definition.* MSC 33B20 (Incomplete beta and gamma functions (error functions, probability integral, Fresnel integrals)), 60G55. arXiv math.CA, math.PR. Level 2: later undergraduate.

**Definition.** Fix a positive integer n and x ≥ 0. Let Q(n, x) be the chance that the nth event of a rate-one Poisson process comes after time x. In such a process the waiting times between events are independent and exponential with mean one. The usual definition is the integral of t raised to n − 1 times exp(−t) from x to infinity, divided by (n − 1)!.

**Problem.** For each positive integer n and x ≥ 0, Q(n, x) equals the probability that a Poisson variable with mean x is less than n.

**How the definition helps.** The nth event comes after time x exactly when fewer than n events have happened by time x (our own). The number of events by time x is a Poisson variable with mean x, so the two probabilities agree. With the integral definition, the formula needs repeated integration by parts. The work moves to showing that the nth arrival time has density tⁿ⁻¹exp(−t)/(n − 1)!, by convolving n exponential densities (our own).

**Wikipedia:** [Incomplete gamma function](https://en.wikipedia.org/wiki/Incomplete_gamma_function). It says: “When s is an integer, Q(s + 1, λ) is the cumulative distribution function for Poisson random variables”

**Sources:** none listed. No primary source with a working link was found.

### Reversing the interval complements incomplete beta

**Remember:** Reverse the beta integral to swap the parameters and take the complement.

*True by definition.* MSC 33B20 (Incomplete beta and gamma functions (error functions, probability integral, Fresnel integrals)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a,b &gt; 0, integrate tᵃ⁻¹(1 − t)ᵇ⁻¹ from zero to x. Divide by its integral from zero to one to define the regularized incomplete beta function Iₓ(a,b). Another definition uses the Gauss hypergeometric series.

**Problem.** For 0 ≤ x ≤ 1, the two fractions satisfy Iₓ(a,b) + I₁₋ₓ(b,a) = 1.

**How the definition helps.** In our own derivation, substituting t ↦ 1 − t swaps the parameters and turns the remaining interval into an initial interval. The same substitution in our own proof preserves the total integral, so the denominator stays the same. In our own account, the work shifts to matching the series expression through Euler’s integral.

**Wikipedia:** [Beta function](https://en.wikipedia.org/wiki/Beta_function). It says: “Iₓ(a,b) = 1 − I₁₋ₓ(b,a)”

**Sources:** none listed. No primary source with a working link was found.

### Even powers give dilogarithm duplication

**Remember:** Adding opposite inputs leaves even powers and halves the dilogarithm at the square.

*True by definition.* MSC 33B30 (Higher logarithm functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the dilogarithm Li₂(z) by summing the nth power of z divided by n² for n ≥ 1 and \|z\| &lt; 1. Another definition integrates −log(1 − z)/z from zero to z.

**Problem.** For \|z\| &lt; 1, Li₂(z) + Li₂(−z) = ½ Li₂(z²).

**How the definition helps.** In our own proof, adding the series at z and −z cancels every odd power. Our own calculation gives the even index 2n the factor 2/(2n)² = 1/(2n²). In our own account, the work moves to matching the series to the integral by integrating the logarithm series.

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “Euler's dilogarithm is a complex-valued function Li₂ given by the series”

**Paper or page:** [Dilogarithm of Square](https://proofwiki.org/wiki/Dilogarithm_of_Square). It says: “Li₂(z) + Li₂(−z) = ½ Li₂(z²)”

**Sources:** none listed. No primary source with a working link was found.

### Differentiating Gauss’s series shifts parameters

**Remember:** A derivative raises every Gauss hypergeometric parameter by one.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Write (a)ₙ for the product of n consecutive factors starting at a and increasing by one, with (a)₀ = 1. Define ₂F₁(a,b;c;z) by its power series with coefficient (a)ₙ(b)ₙ/((c)ₙ n!) at degree n. Another definition selects the solution of the Gauss differential equation that is analytic at zero and equals 1 there.

**Problem.** For \|z\| &lt; 1 and c not a nonpositive integer, the derivative of ₂F₁(a,b;c;z) is (ab/c) ₂F₁(a+1,b+1;c+1;z).

**How the definition helps.** In our own proof, differentiation exposes the first factor of each rising product. Removing those factors gives ab/c and leaves the three products starting at a+1, b+1 and c+1. The work lies in proving convergence and identifying the series with the normalized solution.

**Paper or page:** [Derivative of Gaussian Hypergeometric Function](https://proofwiki.org/wiki/Derivative_of_Gaussian_Hypergeometric_Function). It says: “dF(a,b;c;x)/dx = (ab/c) F(a+1,b+1;c+1;x)”

**Sources:** none listed. No primary source with a working link was found.

### Euler’s integral gives Gauss summation

**Remember:** At one, Euler’s hypergeometric integral is just another beta integral.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For positive u and v, B(u, v) is the integral of tᵘ⁻¹(1 − t)ᵛ⁻¹ over 0 &lt; t &lt; 1. For c &gt; b &gt; 0, Euler’s integral defines ₂F₁(a,b;c;z) as an average of (1 − zt)⁻ᵃ over 0 &lt; t &lt; 1. The weight is tᵇ⁻¹(1 − t)ᶜ⁻ᵇ⁻¹/B(b, c − b). The usual definition starts from a power series.

**Problem.** Take real a, b and c with c &gt; b &gt; 0 and c − a − b &gt; 0. Then ₂F₁(a,b;c;1) = Γ(c)Γ(c − a − b)/(Γ(c − a)Γ(c − b)).

**How the definition helps.** In our own proof, setting z = 1 combines two powers of 1 − t. The integral becomes B(b,c − a − b)/B(b,c − b). The beta identity B(u,v) = Γ(u)Γ(v)/Γ(u+v) gives the result. The remaining work identifies the integral with the series and justifies its limit at one.

**Paper or page:** [Gauss's Hypergeometric Theorem](https://proofwiki.org/wiki/Gauss's_Hypergeometric_Theorem), [Euler's Integral Representation of Hypergeometric Function](https://proofwiki.org/wiki/Euler's_Integral_Representation_of_Hypergeometric_Function). It says: “F(a,b;c;1) = Γ(c)Γ(c − a − b)/(Γ(c − a)Γ(c − b))”

**Sources:** none listed. No primary source with a working link was found.

### The Bessel generating function gives J₋ₙ = (−1)ⁿJₙ by one substitution

**Remember:** Replacing t by −1/t swaps the orders.

*True by definition. Confidence: medium.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integers n, define Jₙ(x) as the coefficient of tⁿ in the Laurent series of exp((x/2)(t − 1/t)). A Laurent series allows negative powers of t. The usual definition is a power series in x with reciprocal gamma factors, which needs care at negative orders.

**Problem.** For every integer n, J₋ₙ(x) = (−1)ⁿJₙ(x).

**How the definition helps.** The generating function does not change when t is replaced by −1/t. Comparing coefficients of tⁿ before and after this change gives Jₙ = (−1)ⁿJ₋ₙ (our own). From the series definition, one must instead show that the first n terms vanish, because 1/Γ is zero at nonpositive integers, and then reindex. The work moves to showing that the coefficients equal the series, by multiplying the series for exp(xt/2) and exp(−x/(2t)).

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “is often defined via a Laurent series for a generating function:”

**Sources:** none listed. No primary source with a working link was found.

### Weighted differentiation lowers Bessel order

**Remember:** Weight Bessel J before differentiating, and its order drops by one.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integers n ≥ 0, define Jₙ(x) by summing over integers m ≥ 0. Each term is (−1)ᵐ(x/2)²ᵐ⁺ⁿ divided by m!(m+n)!. Another definition selects the solution of Bessel’s equation with leading term (x/2)ⁿ/n! at zero.

**Problem.** For integers n ≥ 1, the derivative of xⁿJₙ(x) equals xⁿJₙ₋₁(x).

**How the definition helps.** In our own proof, multiplying by xⁿ makes differentiation bring down 2(m+n) in each term. Canceling m+n against (m+n)! leaves precisely the series for xⁿJₙ₋₁(x). The remaining work proves convergence and identifies the series with the normalized solution.

**Paper or page:** [Derivative of x<sup>n</sup> by Bessel Function of the First Kind of Order n of x](https://proofwiki.org/wiki/Derivative_of_x^n_by_Bessel_Function_of_the_First_Kind_of_Order_n_of_x), [Series Expansion of Bessel Function of the First Kind](https://proofwiki.org/wiki/Series_Expansion_of_Bessel_Function_of_the_First_Kind). It says: “d(xⁿ Jₙ(x))/dx = xⁿ Jₙ₋₁(x)”

**Sources:** none listed. No primary source with a working link was found.

### Chebyshev angles give the derivative

**Remember:** Differentiate the cosine through its angle to get the sine quotient.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0 &lt; θ &lt; π, define Tₙ(cos θ) = cos(nθ) and Uₙ(cos θ) = sin((n + 1)θ)/sin θ. These are the Chebyshev polynomials of the first and second kinds. Another definition builds each family by its recurrence in degree.

**Problem.** For n ≥ 1, the derivative of Tₙ is n Uₙ₋₁.

**How the definition helps.** In our own proof, the chain rule gives the sine quotient that defines the second family. Our own account puts the work in showing that the trigonometric formulas are polynomials and agree with the recurrences. In our own argument, the polynomial identity then extends the result to every x.

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “dTₙ/dx = n Uₙ₋₁”

**Sources:** none listed. No primary source with a working link was found.

### Derivatives give preceding Hermite polynomials

**Remember:** For Hermite polynomials, differentiation in x shifts the generating series by one power.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define Hₙ(x) as n! times the coefficient of tⁿ in exp(2tx − t²). Equivalently, multiply the nth derivative of exp(−x²) by (−1)ⁿ exp(x²).

**Problem.** For n ≥ 1, the derivative of the nth Hermite polynomial is 2n times the preceding polynomial.

**How the definition helps.** In our own proof, differentiating the generating function in x multiplies it by 2t. Comparing coefficients of tⁿ gives the factor 2n. Taylor expansion of exp(−(x − t)²) in t identifies the two definitions.

**Paper or page:** [Generating Function for Hermite Polynomials](https://proofwiki.org/wiki/Generating_Function_for_Hermite_Polynomials), [Recurrence Formula for Hermite Polynomials using Derivative](https://proofwiki.org/wiki/Recurrence_Formula_for_Hermite_Polynomials_using_Derivative). It says: “dHₙ(x)/dx = 2n Hₙ₋₁(x)”

**Sources:** none listed. No primary source with a working link was found.

### Rodrigues’s formula makes Hermite polynomials orthogonal by integration by parts

**Remember:** Integrate by parts n times, and the derivatives kill the lower degree polynomial.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Rodrigues’s formula defines the nth Hermite polynomial Hₙ as (−1)ⁿ exp(x²/2) times the nth derivative of exp(−x²/2). Another definition takes n! times the coefficient of tⁿ in the generating function exp(xt − t²/2).

**Problem.** For the weight exp(−x²/2) on the real line, Hₙ is orthogonal to every polynomial q of degree below n.

**How the definition helps.** With Rodrigues’s formula the weight cancels, so the integral pairs q with an nth derivative of the Gaussian exp(−x²/2). Integration by parts n times moves every derivative onto q, and the boundary terms vanish because the Gaussian decays fast. The nth derivative of q is zero, since its degree is below n. The work moves to showing that the two definitions agree, by Taylor expansion of exp(−(x − t)²/2) in t (our own proof steps).

**nLab:** [Hermite polynomial](https://ncatlab.org/nlab/show/Hermite+polynomial). It says: “where exp(−) denotes the exponential function and d/dxⁿ denotes the nth derivative with respect to x”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition gives Chebyshev roots and bounds

**Remember:** On the interval from −1 to 1, Tₙ is a cosine in disguise.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)), 26C10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each nonnegative integer n, define Tₙ as the unique polynomial with Tₙ(cos θ) = cos(nθ) for every real θ. Another definition starts with T₀ = 1 and T₁ = x, then uses Tₙ₊₁ = 2xTₙ − Tₙ₋₁ for n ≥ 1.

**Problem.** For n ≥ 1, Tₙ has the n distinct roots cos((2k − 1)π/(2n)), for k = 1, …, n, all between −1 and 1. Also \|Tₙ(x)\| ≤ 1 for every x between −1 and 1.

**How the definition helps.** The cosine definition gives the bound and the roots by evaluating cos(nθ) for 0 ≤ θ ≤ π. Cosine has size at most 1, and cos(nθ) vanishes at n distinct values of θ in that interval, where cos θ is strictly decreasing. The work is to prove that Tₙ is a polynomial of degree n, so there are no more roots. The angle-addition formulas give the recurrence, which proves the degree by induction.

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “Using the trigonometric definition and the fact that cos((2k+1)π/2) = 0, one can show that the roots of Tₙ are”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition makes Chebyshev polynomials compose by multiplying indices

**Remember:** Tₙ multiplies the angle by n, so composing multiplies the factors.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each nonnegative integer n, define Tₙ as the unique polynomial with Tₙ(cos θ) = cos(nθ) for every real θ. Another common definition starts with T₀ = 1 and T₁ = x, then uses Tₙ₊₁ = 2xTₙ − Tₙ₋₁ for n ≥ 1.

**Problem.** For nonnegative integers m and n, Tₘ(Tₙ(x)) = Tₘₙ(x) for every real x.

**How the definition helps.** The cosine definition makes Tₙ multiply the angle by n, so composition multiplies the indices. Indeed, Tₘ(Tₙ(cos θ)) = Tₘ(cos(nθ)) = cos(mnθ). Both polynomials agree for every x between −1 and 1, so they are equal. The work is to show that cos(nθ) is a polynomial in cos θ, which the angle-addition formulas give by induction.

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “The trigonometric definitions of Tₙ and Uₙ imply the composition or nesting properties: Tₘₙ(x) = Tₘ(Tₙ(x)),”

**Sources:** none listed. No primary source with a working link was found.

### The generating function makes the Legendre recurrence a coefficient comparison

**Remember:** Differentiate the generating function in t once and compare neighbouring coefficients.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the nth Legendre polynomial Pₙ as the coefficient of tⁿ in 1/√(1 − 2xt + t²). Rodrigues’s formula instead defines Pₙ as the nth derivative of (x² − 1)ⁿ, divided by 2ⁿn!.

**Problem.** For n ≥ 1, (n + 1)Pₙ₊₁(x) = (2n + 1)xPₙ(x) − nPₙ₋₁(x).

**How the definition helps.** The generating function G satisfies (1 − 2xt + t²)·∂G/∂t = (x − t)G (our own). The recurrence is this equation read coefficient by coefficient. From Rodrigues’s formula, the recurrence needs a longer calculation with repeated derivatives. The work moves to showing that the two definitions agree, for example by orthogonality on \[−1, 1\] and the value one at x = 1 (our own).

**nLab:** [Legendre polynomial](https://ncatlab.org/nlab/show/Legendre+polynomial). It says: “Alternatively they can be defined via a generating function:”

**Sources:** none listed. No primary source with a working link was found.

### The q-gamma product telescopes under shifts

**Remember:** Shifting x by one removes the first denominator factor.

*True by definition.* MSC 33D05 (\\(q\\)-gamma functions, \\(q\\)-beta functions and integrals), 39A10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0&lt;q&lt;1 and x&gt;0, define Γ at base q by multiplying the factors (1−qⁿ⁺¹)/(1−qⁿ⁺ˣ) for n≥0. Include the factor (1−q) to the power 1−x.

**Problem.** Increasing x by one multiplies the q-gamma function by (1−qˣ)/(1−q).

**How the definition helps.** The product definition makes the shift remove exactly one denominator factor. In our own calculation, the common product factors cancel and the prefactor contributes 1/(1−q). This proves the shift law directly without evaluating an integral representation. The work lies in proving that the infinite products converge to nonzero limits. For x&gt;0 and 0&lt;q&lt;1, the deviations of their factors from one have finite geometric sums.

**Wikipedia:** [q-gamma function](https://en.wikipedia.org/wiki/q-gamma_function). It says: “The q-gamma function satisfies the functional equation”

**Sources:** none listed. No primary source with a working link was found.

### The q-gamma shift telescopes

**Remember:** A unit shift drops the first denominator factor of the q-gamma product.

*True by definition.* MSC 33D05 (\\(q\\)-gamma functions, \\(q\\)-beta functions and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; q &lt; 1 and x &gt; 0. Define Γ₍q₎(x) as (1 − q)¹⁻ˣ times the product of (1 − qⁿ⁺¹)/(1 − qⁿ⁺ˣ) over integers n ≥ 0. A Jackson integral, a weighted sum over geometrically spaced points, gives another definition.

**Problem.** For x &gt; 0, the q-gamma value at x + 1 is the value at x multiplied by (1 − qˣ)/(1 − q).

**How the definition helps.** In our own calculation, increasing x drops the first denominator factor, while the prefactor contributes 1/(1 − q). In our own account, the work moves to product convergence and agreement with the Jackson integral.

**Wikipedia:** [Q-gamma function](https://en.wikipedia.org/wiki/Q-gamma_function). It says: “Γ₍q₎(x+1) = (1−qˣ)/(1−q) Γ₍q₎(x) = \[x\]₍q₎ Γ₍q₎(x)”

**Sources:** none listed. No primary source with a working link was found.

### Carlson’s first integral is symmetric

**Remember:** Carlson’s first elliptic integral gives all three inputs the same role.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For positive x, y and z, Carlson’s first symmetric elliptic integral is half the integral of 1/√((t+x)(t+y)(t+z)) from zero to infinity. Legendre’s form uses an upper integration limit and a parameter in the integrand.

**Problem.** Carlson’s first symmetric elliptic integral has the same value after any permutation of x, y and z.

**How the definition helps.** In our own explanation, the product of three factors in the integrand is unchanged when the inputs trade places. In our own account, the work moves to the change of variables that recovers Legendre’s form.

**Wikipedia:** [Carlson symmetric form](https://en.wikipedia.org/wiki/Carlson_symmetric_form). It says: “The value of Rꜰ(x,y,z) is the same for any permutation of its arguments”

**Sources:**

- [B. C. Carlson, Numerical computation of real or complex elliptic integrals (1995)](https://doi.org/10.1007/bf02198293)

### Euler’s product gives the Gamma reflection formula by cancellation

**Remember:** Pair the factors for z and −z to obtain Euler’s product for sine.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA, math.CV. Level 3: graduate.

**Definition.** Define Γ(z) as 1/z times the product of (1 + 1/n)ᶻ/(1 + z/n) over positive integers n. The product applies away from zero and the negative integers. The usual starting definition integrates exp((z − 1) log t − t) over t &gt; 0, where it converges for positive real part of z.

**Problem.** For every noninteger complex z, Γ(z)Γ(1 − z) = π/sin(πz).

**How the definition helps.** The product definition makes the reflection formula a cancellation followed by the sine product. In the product for Γ(z)Γ(−z), the powers of 1 + 1/n cancel, and Γ(1 − z) = −zΓ(−z). So 1/(Γ(z)Γ(1 − z)) is z times the product of 1 − z²/n², which Euler’s sine product identifies with sin(πz)/π. With the integral definition, the work shifts to proving convergence, agreement with the integral, and Euler’s sine product (our own comparison).

**Wikipedia:** [Gamma function](https://en.wikipedia.org/wiki/Gamma_function). It says: “With Euler's infinite product Γ(z) = (1/z) ∏ₙ₌₁<sup>∞</sup> (1+1/n)ᶻ/(1 + z/n) compute”

**Sources:** none listed. No primary source with a working link was found.

### Multivariate gamma half-steps telescope

**Remember:** A half-step keeps every gamma factor except the two ends.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 3: graduate.

**Definition.** For integers p ≥ 1 and real a &gt; (p − 1)/2, start with the product of p ordinary gamma values. Their arguments run from a to a − (p − 1)/2 in steps of −½. Multiply by π to the power p(p − 1)/4 to obtain multivariate gamma. Another definition integrates over real symmetric matrices with positive eigenvalues.

**Problem.** The ratio of multivariate gamma at a + ½ to its value at a is Γ(a + ½)/Γ(a − (p − 1)/2).

**How the definition helps.** In our own calculation, shifting a by ½ keeps all but one gamma factor in common and leaves the power of π unchanged. In our own account, the work lies in proving that the product agrees with the matrix integral.

**Wikipedia:** [Multivariate gamma function](https://en.wikipedia.org/wiki/Multivariate_gamma_function). It says: “It has two equivalent definitions. One is given as the following integral over the p × p positive-definite real matrices”

**Sources:** none listed. No primary source with a working link was found.

### A strip fixes polylogarithm inversion

**Remember:** Choose one logarithm before evaluating its Bernoulli polynomial.

*Rules out counterexamples.* MSC 33B30 (Higher logarithm functions), 11M35. arXiv math.CA, math.NT. Level 3: graduate.

**Definition.** For Jonquière’s inversion write z = exp(2πix) with 0 &lt; Re x &lt; 1. This chooses one logarithmic coordinate for every z outside the nonnegative real axis. Use the principal branches of the two polylogarithms.

**Problem.** Let n≥1 be an integer and Bₙ the nth Bernoulli polynomial. Then Liₙ(z)+(−1)ⁿLiₙ(1/z)=−(2πi)ⁿBₙ(x)/n!.

**How the definition helps.** In our own terms, fixing the coordinate makes the Bernoulli expression agree with the principal branches. In our own terms, x = 1/4 and x = 5/4 give the same z, but their quadratic Bernoulli values differ by 1/2. In our own terms, the work is the Hurwitz zeta functional equation and its specialization at 1−n.

**Wikipedia:** [Polylogarithm](https://en.wikipedia.org/wiki/Polylogarithm). It says: “For positive integer polylogarithm orders s, the Hurwitz zeta function ζ(1−s, x) reduces to Bernoulli polynomials, ζ(1−n, x) = −Bₙ(x) / n”

**Sources:**

- [Alfred Jonquière, Note sur la série (1889), pp. 142–152](https://www.numdam.org/item/BSMF_1889__17__142_1/)

### Clausen values give tetrahedron volumes

**Remember:** Three angles turn a complex shape into three values on the circle.

*True by definition.* MSC 33B30 (Higher logarithm functions), 51M10. arXiv math.CA, math.GT. Level 3: graduate.

**Definition.** An ideal hyperbolic tetrahedron has all four vertices at infinity. Let α, β and γ be the angles between faces meeting at one vertex, and let Λ(θ) be the integral of −log\|2 sin t\| from 0 to θ. The Bloch–Wigner dilogarithm D(z) is the volume Λ(α) + Λ(β) + Λ(γ) of the ideal tetrahedron with shape z.

**Problem.** For Im z&gt;0, let α, β and γ be the arguments of z, 1/(1−z) and 1−1/z. The Bloch–Wigner dilogarithm satisfies 2D(z)=D(exp(2iα))+D(exp(2iβ))+D(exp(2iγ)).

**How the definition helps.** In our own terms, the angle formula already writes the volume as three real functions of one angle each. The Fourier series of Λ gives 2Λ(θ) = D(exp(2iθ)). In our own terms, the remaining work is the hyperbolic volume formula in angle coordinates.

**Wikipedia:** [Clausen function](https://en.wikipedia.org/wiki/Clausen_function). It says: “The Lobachevsky function Λ or Л is essentially the same function with a change of variable”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Dilogarithms control Euler product asymptotics

**Remember:** The logarithm of the product is a sum for the dilogarithm integral.

*True by definition.* MSC 33B30 (Higher logarithm functions), 33D05. arXiv math.CA. Level 3: graduate.

**Definition.** For 0 &lt; a &lt; 1 define Li₂(a) by the integral of −log(1−u)/u from 0 to a. Substitution u = a exp(−t) gives the integral of −log(1−a exp(−t)) over t ≥ 0.

**Problem.** As h tends to zero through positive values, the product of 1−a exp(−kh) over integers k ≥ 0 is asymptotic to √(1−a) exp(−Li₂(a)/h).

**How the definition helps.** In our own proof, the integral definition identifies the leading term of the logarithm directly, without expanding the dilogarithm in powers of a. The Euler–Maclaurin summation formula adds half the endpoint value log(1−a). Its remainder is O(h) because the integrand has an integrable second derivative. Exponentiating gives the stated equivalent.

**Paper or page:** [Evaluation of beta integrals of Ramanujan type and integral representations for bilateral hypergeometric series](https://arxiv.org/abs/2411.03574v1). It says: “Let a ∈ ℂ ∖ \[1,∞). Then (a;q)∞ ∼ (1−a)¹⁄² exp(−u⁻¹ Li(a)), where Li denotes the dilogarithm function”

**Sources:**

- [Howard Cohl and Hans Volkmer, Evaluation of beta integrals of Ramanujan type and integral representations for bilateral hypergeometric series (2024)](https://arxiv.org/abs/2411.03574v1)

### Equal angles maximize dilogarithm volume

**Remember:** Equal angles give the largest ideal tetrahedron.

*True by definition.* MSC 33B30 (Higher logarithm functions), 51M10. arXiv math.CA, math.GT. Level 3: graduate.

**Definition.** An ideal tetrahedron has its vertices on the boundary of hyperbolic space. Describe its shape by the three angles between faces meeting at one vertex. These positive angles sum to π. Its volume is Λ(α)+Λ(β)+Λ(γ), where Λ(θ) integrates −log\|2 sin t\| from 0 to θ.

**Problem.** The Bloch–Wigner dilogarithm D, which gives signed volume at complex shape z, has a unique maximum on the upper half-plane at z=(1+i√3)/2.

**How the definition helps.** Our own proof uses the angle formula to replace a complex maximization by a real one with a single linear constraint. The boundary has volume zero since Λ(π−θ)=−Λ(θ). At an interior maximum the three sines agree. Supplementary angles would leave no room for the third, so each angle equals π/3. The volume formula identifies this maximum with the maximum of D.

**Paper or page:** [The Andersen-Kashaev volume conjecture for FAMED geometric triangulations](https://arxiv.org/abs/2410.10776v1). It says: “Let T be an ideal tetrahedron in ℍ³ with complex shape structure z. Then, its volume is given by Vol(T) = D(z)”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Gamma normalization removes order poles

**Remember:** The zeros of reciprocal gamma cancel the Mellin poles.

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions). arXiv math.CA. Level 3: graduate.

**Definition.** Fix z outside the real interval \[1,∞). For Re s&gt;0, integrate tˢ⁻¹z/(exp(t)−z) over t&gt;0 and divide by the gamma function Γ(s). This defines Liₛ(z) and agrees with its power series for \|z\|&lt;1.

**Problem.** For each z outside \[1,∞), Li of order s at z is an entire function of s.

**How the definition helps.** In our own terms, dividing by gamma cancels the only possible poles of the Mellin integral. In our own terms, subtract successively more Taylor terms of z/(exp(t)−z) at zero to continue the integral. In our own terms, the subtracted monomials give simple poles only at the nonpositive integers, where 1/Γ has simple zeros.

**Wikipedia:** [Polylogarithm](https://en.wikipedia.org/wiki/Polylogarithm). It says: “This converges for Re(s) &gt; 0 and all z except for z real and ≥ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Matching parity recovers Dirichlet values

**Remember:** Match the character parity to the retained part of the polylogarithm.

*Rules out counterexamples. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 11M06. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** On the unit circle, define Pₙ(z) as the real part of Liₙ(z) for odd n and its imaginary part for even n. Here Liₙ denotes the polylogarithm of order n. Set c=1 for odd n and c=i for even n.

**Problem.** Let χ be a primitive Dirichlet character modulo N with χ(−1) = (−1)ⁿ⁻¹, and let n ≥ 2. Then cΣχ̄(a)Pₙ(exp(2πia/N)) = τL(n,χ), where τ = Σχ̄(a)exp(2πia/N) and both sums run over residues a modulo N.

**How the definition helps.** Pairing a with −a cancels the part of Liₙ that Pₙ drops, because χ has the matching parity (our own). Expanding the series and summing χ̄(a)exp(2πiak/N) over a gives the Gauss sum, so the full polylogarithm sum is τL(n,χ) (our own). With the wrong parity the identity fails: at n = 3 the odd character modulo 4 gives zero on the left, but its L-value is positive (our own).

**Paper or page:** [Clean Single-Valued Polylogarithms](https://arxiv.org/abs/2104.04344v2). It says: “where Clₙ(α) ≔ ℜₙ(Liₙ(eⁱᵅ)) denotes the Clausen function.”

**Sources:**

- [Don Zagier, Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields (1990)](https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf)
- [Steven Charlton, Claude Duhr and Herbert Gangl, Clean Single-Valued Polylogarithms (2021)](https://arxiv.org/abs/2104.04344v2)

### Nested integrals expose branch changes

**Remember:** Each extra integration adds one power of log z.

*True by definition.* MSC 33B30 (Higher logarithm functions). arXiv math.CA. Level 3: graduate.

**Definition.** Start with Li₁(z)=−log(1−z) near zero. For n&gt;1, define Liₙ(z) by integrating Liₙ₋₁(t)dt/t from 0 to z. Continuing the integral along a path chooses a branch.

**Problem.** Start at 1/2 on the principal branch and follow the circle centered at 1 through 1/2 once counterclockwise. Near the starting point, Liₙ changes by −2πi(log z)ⁿ⁻¹/(n−1)! for every integer n≥1, with the principal logarithm.

**How the definition helps.** The integral definition turns the jump of the logarithm into a recursion for all higher jumps (our own). The jumps of Liₙ and of Liₙ₋₁ are related by the same factor dz/z, starting from the jump −2πi of Li₁ (our own). The small-circle limit at 1 fixes each integration constant for n &gt; 1 (our own). Termwise integration matches the path definition with the power series on the first sheet (our own).

**nLab:** [iterated integral](https://ncatlab.org/nlab/show/iterated+integral). It says: “expression involving nested integrals”

**Sources:**

- [Richard M. Hain, Classical Polylogarithms (1994)](https://doi.org/10.1090/pspum/055.2/1265550)

### Ordered simplices give shuffle products

**Remember:** Sort the combined times and keep each word in order.

*True by definition.* MSC 33B30 (Higher logarithm functions), 11M32. arXiv math.NT. Level 3: graduate.

**Definition.** A multiple polylogarithm can be written as repeated integration of forms dz/(z − a) along one path. Integrate their product over increasing times, one time for each letter a. A shuffle interleaves two letter sequences while preserving their internal orders.

**Problem.** For a piecewise smooth path avoiding the poles, the product of two such integrals equals the sum over their shuffles.

**How the definition helps.** The ordered times turn multiplication into a partition of the integration domain (our own). In the nested integral formula, each letter supplies another integration limit (our own). Fubini’s theorem combines the two domains, and sorting their times gives one region per shuffle, apart from boundaries of measure zero (our own).

**Paper or page:** [Duality on symmetric multiple polylogarithms](https://arxiv.org/abs/2411.08711). It says: “(Shuffle product formula) Iγ(w ⧢ w′) = Iγ(w)Iγ(w′).”

**Sources:**

- [Kuo-Tsai Chen, Iterated path integrals (1977)](https://doi.org/10.1090/S0002-9904-1977-14320-6)

### Tetrahedron volume proves five-term cancellation

**Remember:** Five tetrahedra cancel in the oriented boundary of a simplex.

*True by definition.* MSC 33B30 (Higher logarithm functions), 51M10. arXiv math.CA, math.GT. Level 3: graduate.

**Definition.** For a tetrahedron in hyperbolic space, “ideal” means that all four vertices lie on the boundary at infinity. Define D(z) as the signed volume with ordered vertices ∞,0,1,z, taking D(z)=0 for real z. For any four distinct boundary points, their shape is the fourth coordinate after a fractional linear transformation sends the first three to ∞,0,1.

**Problem.** For five distinct ordered points on the boundary at infinity, omit each point in turn and take D of the shape of the remaining tetrahedron. The alternating sum of these five values is zero.

**How the definition helps.** Our own proof uses signed volume so that tetrahedra sharing a face contribute opposite signs there. Cone each oriented face to the same interior point. Every face occurs twice and its two cone volumes cancel. The volume formula identifies this geometric definition with the analytic Bloch–Wigner dilogarithm.

**Paper or page:** [The Andersen-Kashaev volume conjecture for FAMED geometric triangulations](https://arxiv.org/abs/2410.10776v1). It says: “Let T be an ideal tetrahedron in ℍ³ with complex shape structure z. Then, its volume is given by Vol(T) = D(z) = D((z−1)/z) = D(1/(1−z)).”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### The dilogarithm correction cancels its jump

**Remember:** Add the argument term to cancel the imaginary jump on the cut.

*Makes the theorem clean to state or prove.* MSC 33B30 (Higher logarithm functions). arXiv math.CV. Level 3: graduate.

**Definition.** For z outside the real ray \[1,∞), define Li₂(z) by integrating −log(1 − t)/t from 0 to z using the principal logarithm. For z ≠ 0, define D(z) = Im Li₂(z) + arg(1 − z) log\|z\|. Here arg takes values between −π and π.

**Problem.** The Bloch–Wigner dilogarithm extends to a single-valued continuous real function on the complex plane.

**How the definition helps.** The added term cancels the jump of Im Li₂ across the cut (our own). Above and below a point x &gt; 1, Im Li₂ tends to π log x and −π log x, and the correction tends to the opposite values. So D extends continuously with D(x) = 0 on the cut. Near 0 and 1 the correction tends to zero and Li₂ has finite limits.

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “The Bloch–Wigner dilogarithm is defined by D(z) ≔ Im(Li₂(z)) + arg(1−z) log\|z\|.”

**Wikipedia:** [Dilogarithm](https://en.wikipedia.org/wiki/Dilogarithm). It says: “D(z) = Im Li₂(z) + arg(1−z) log\|z\|.”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://doi.org/10.1007/978-3-540-30308-4_1)

### Reflection gives Pfaff’s transformation

**Remember:** Reflect the averaging density, then factor out one minus z.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** Take complex a, real z &lt; 1, and real 0 &lt; b &lt; c. Euler’s integral defines the Gauss hypergeometric function F(a,b;c;z) as the average of exp(−a log(1 − zt)) over 0 &lt; t &lt; 1. The averaging density is proportional to exp((b − 1)log t + (c − b − 1)log(1 − t)).

**Problem.** For these parameters, F(a,b;c;z) = exp(−a log(1 − z)) F(a,c − b;c;z/(z − 1)).

**How the definition helps.** Reflecting t to 1 − t exchanges b and c − b in the density (our own). The new base of the power factors as (1 − z)(1 − zt/(z − 1)), with both factors positive. So the logarithms add, and the first factor gives the constant multiplier. The remaining work identifies Euler’s integral with the Gauss series.

**Wikipedia:** [Hypergeometric function](https://en.wikipedia.org/wiki/Hypergeometric_function). It says: “₂F₁(a,b;c;z) = (1−z)⁻ᵃ ₂F₁(a,c−b;c;z/(z−1))”

**Sources:** none listed. No primary source with a working link was found.

### Regularizing Gauss removes parameter poles

**Remember:** Use reciprocal gamma in the coefficients, including its zeros.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CV. Level 3: graduate.

**Definition.** The regularized Gauss series gives zⁿ the coefficient (a)ₙ(b)ₙ/(n!·Γ(c+n)), with (a)ₙ = a(a+1)⋯(a+n−1). Here 1/Γ is entire and is zero at nonpositive integers. Away from those integers the series equals ₂F₁(a,b;c;z)/Γ(c).

**Problem.** For fixed a and b and \|z\| &lt; 1, the regularized Gauss function is analytic in c on the whole complex plane. The ordinary ₂F₁ need not exist at c = 0, −1, −2 and so on.

**How the definition helps.** In our own proof, every regularized coefficient uses the entire reciprocal gamma function and thus has no parameter poles. Our own account puts the work in proving uniform convergence on compact sets of c and showing agreement with ₂F₁/Γ(c) elsewhere. In our own example, ₂F₁(1,1;c;z) has a pole at c = 0 for real 0 &lt; z &lt; 1.

**Wikipedia:** [Hypergeometric function](https://en.wikipedia.org/wiki/Hypergeometric_function). It says: “Dividing by the value Γ(c) of the gamma function, we have the limit”

**Sources:** none listed. No primary source with a working link was found.

### Airy’s contour gives its equation

**Remember:** Two Airy derivatives turn the equation into a vanishing boundary term.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CV. Level 3: graduate.

**Definition.** Define Ai(z) by integrating exp(t³/3 − zt) along two rays joined at zero and dividing by 2πi. The path comes in at angle −π/3 and goes out at angle π/3. The real oscillatory integral gives another definition.

**Problem.** The Airy function satisfies Ai″(z) = z Ai(z) for every complex z.

**How the definition helps.** In our own proof, applying the Airy equation to the contour integral gives the integral of a single derivative. Indeed, (t² − z) exp(t³/3 − zt) is the t derivative of the exponential. On either ray, t³ is negative real, so the exponential tends to zero at both ends. The remaining work justifies differentiation and identifies the contour integral with the real oscillatory integral.

**nLab:** [Airy function](https://ncatlab.org/nlab/show/Airy+function). It says: “y″(x) − x · y(x) = 0”

**Wikipedia:** [Airy function](https://en.wikipedia.org/wiki/Airy_function). It says: “where the integral is over a path C starting at the point at infinity with argument −π/3 and ending at the point at infinity with argument π/3.”

**Sources:** none listed. No primary source with a working link was found.

### The Bessel integral gives order log-convexity

**Remember:** A positive integral of exponentials is log-convex in their order parameter.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** For x &gt; 0, the modified Bessel function K of order ν is half the integral of exp(−x cosh t + νt) over all real t. Pairing t with −t gives the usual integral of exp(−x cosh t)cosh(νt) over t &gt; 0. Another definition selects the decaying solution of the modified Bessel equation.

**Problem.** For each x &gt; 0, the logarithm of K at x is convex in the real order ν.

**How the definition helps.** The order ν appears only in a positive exponential, so interpolating orders takes geometric means of integrands (our own). At fixed x, Hölder’s inequality then gives K((1−s)ν+sμ) ≤ K(ν)¹⁻ˢK(μ)ˢ for 0 &lt; s &lt; 1. Taking logarithms gives convexity. The remaining work identifies the integral with the normalized decaying solution.

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “K₍α₎(x) = ∫₀∞ exp(−x cosh t) cosh αt dt.”

**Sources:** none listed. No primary source with a working link was found.

### Beta reflection gives Kummer’s transformation

**Remember:** Reflecting the beta variable swaps its two parameters.

*True by definition.* MSC 33C15 (Confluent hypergeometric functions, Whittaker functions, \\(\_1F<sub>1</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** For real 0 &lt; a &lt; b, take a probability density on (0,1) proportional to tᵃ⁻¹(1 − t)ᵇ⁻ᵃ⁻¹. Represent Kummer’s confluent hypergeometric function M(a,b,z) by the mean of exp(zt) under this density.

**Problem.** For b not a nonpositive integer, M(a,b,z) = exp(z) M(b − a,b,−z).

**How the definition helps.** In our own proof, reflecting t to 1 − t swaps the density parameters and extracts the factor exp(z). The usual power series hides this symmetry. Expanding the exponential and integrating gives the series definition. Analytic continuation then extends the identity to complex parameters wherever both sides are defined.

**Wikipedia:** [Confluent hypergeometric function](https://en.wikipedia.org/wiki/Confluent_hypergeometric_function). It says: “Kummer's functions are also related by Kummer's transformations”

**Sources:** none listed. No primary source with a working link was found.

### Distributional differentiation gives moment recurrences

**Remember:** Testing the Pearson equation on powers gives the moment recurrence.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** A polynomial functional u assigns numbers linearly to polynomials. Define its derivative by u′(f) = −u(f′), and define multiplication by (φu)(f) = u(φf). The Pearson equation is (φu)′ = ψu, with φ(x) = ax² + bx + c and ψ(x) = px + q.

**Problem.** Let mₙ = u(xⁿ) be the moments. The Pearson equation holds exactly when (na + p)mₙ₊₁ + (nb + q)mₙ + ncmₙ₋₁ = 0 for every n ≥ 0, where the last term is absent at n = 0.

**How the definition helps.** In our own comparison, differentiating the test polynomial replaces integration by parts against a differentiable weight. Testing on each power of x gives the recurrence directly. Powers span the polynomials, so linearity gives the converse. Finding a functional that gives classical orthogonal polynomials is a separate problem.

**Paper or page:** [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1). It says: “satisfies the distributional differential equation”

**Sources:**

- [K. Castillo, J. Petronilho. Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1)

### Rodrigues’s formula makes the Jacobi reflection symmetry a change of variable

**Remember:** Reflection swaps the two weight factors and negates each derivative.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Let w(x) be (1 − x) raised to α times (1 + x) raised to β, with α, β &gt; −1. Rodrigues’s formula defines P(n; α, β) as (−1)ⁿ/(2ⁿn!) times 1/w times the nth derivative of w·(1 − x²)ⁿ. The usual definition is a terminating Gauss hypergeometric series, a power series that stops after finitely many terms.

**Problem.** For α, β &gt; −1, P(n; α, β)(−x) = (−1)ⁿP(n; β, α)(x).

**How the definition helps.** Replacing x by −x swaps 1 − x and 1 + x, so it swaps α and β in the formula (our own). Each of the n derivatives picks up a factor −1, which gives the sign (−1)ⁿ (our own). The hypergeometric series is centred at x = 1, so from it the symmetry needs a transformation formula (our own). The work moves to showing that the two definitions agree, by the Leibniz rule (our own).

**Wikipedia:** [Jacobi polynomials](https://en.wikipedia.org/wiki/Jacobi_polynomials). It says: “An equivalent definition is given by Rodrigues' formula:”

**Sources:** none listed. No primary source with a working link was found.

### The generating function makes the Gegenbauer derivative rule one differentiation

**Remember:** One derivative raises the parameter and lowers the degree.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** For λ &gt; 0, define C(n; λ)(x) as the coefficient of tⁿ in (1 − 2xt + t²) raised to −λ. The alternative uses orthogonal polynomials for the weight (1 − x²) raised to λ − ½, normalized at x = 1. That value is 2λ(2λ + 1)⋯(2λ + n − 1)/n!, and one when n = 0.

**Problem.** For n ≥ 1 and λ &gt; 0, the derivative of C(n; λ) is 2λ·C(n − 1; λ + 1).

**How the definition helps.** Differentiating the generating function in x gives 2λt times the generating function for λ + 1 (our own). Comparing coefficients of tⁿ gives the rule (our own). From the orthogonality definition, the rule needs a proof that the derivatives are orthogonal for the shifted weight (our own). The work moves to showing that the two definitions agree, for example through Gegenbauer’s differential equation (our own).

**Wikipedia:** [Gegenbauer polynomials](https://en.wikipedia.org/wiki/Gegenbauer_polynomials). It says: “The polynomials can be defined in terms of their generating function:”

**Sources:** none listed. No primary source with a working link was found.

### Defining spherical harmonics by harmonic polynomials makes each degree rotation invariant

**Remember:** Rotations preserve degree and commute with the Laplacian.

*True by definition.* MSC 33C55 (Spherical harmonics). arXiv math.CA. Level 3: graduate.

**Definition.** A degree n spherical harmonic is the restriction to the unit sphere of a harmonic homogeneous polynomial of degree n in x, y, z. Harmonic means that the Laplacian, the sum of the three second partial derivatives, is zero. The usual definition uses explicit formulas in spherical coordinates with associated Legendre functions.

**Problem.** For each n, every rotation of the sphere maps degree n spherical harmonics to degree n spherical harmonics.

**How the definition helps.** Rotations preserve both conditions in the definition (our own). Composing with a rotation keeps a polynomial homogeneous of degree n, and the Laplacian commutes with rotations (our own). From the coordinate formulas, the same fact needs the addition theorem or Wigner’s rotation matrices (our own). The work moves to showing that the coordinate formulas give a basis of the polynomial space (our own).

**Wikipedia:** [Spherical harmonics](https://en.wikipedia.org/wiki/Spherical_harmonics). It says: “The spherical harmonics can be expressed as the restriction to the unit sphere of certain polynomial functions”

**Sources:** none listed. No primary source with a working link was found.

### Mellin powers shift Meijer parameters

**Remember:** A power of z shifts the Mellin variable.

*True by definition.* MSC 33C60 (Hypergeometric integrals and functions defined by them (\\(E\\), \\(G\\), \\(H\\) and \\(I\\) functions)). arXiv math.CA. Level 3: graduate.

**Definition.** Define Meijer’s G-function as a contour integral in s of exp(s log z) times a quotient of gamma products. The gamma arguments have the forms b − s, 1 − a + s, 1 − b + s and a − s. Here a runs over the upper parameters and b over the lower ones.

**Problem.** Fix a branch of log z. Then exp(h log z) times Meijer’s G-function equals the G-function with h added to every upper and lower parameter, wherever the integrals converge.

**How the definition helps.** Multiplying exponentials replaces s by s + h in the power of z (our own). Translating the path by h then adds h to every parameter in the gamma factors. This single substitution replaces separate calculations in the different series expansions. The work lies in establishing the contour representation and its convergence.

**Wikipedia:** [Meijer G-function](https://en.wikipedia.org/wiki/Meijer_G-function). It says: “a functional equation that allows to liberate from a G-function”

**Sources:** none listed. No primary source with a working link was found.

### Coincident Appell arguments give Gauss

**Remember:** Two equal Appell inputs combine their exponents into one Gauss parameter.

*True by definition.* MSC 33C65 (Appell, Horn and Lauricella functions). arXiv math.CA. Level 3: graduate.

**Definition.** For real c &gt; a &gt; 0, normalize the weight tᵃ⁻¹(1 − t)ᶜ⁻ᵃ⁻¹ to integrate to one over 0 &lt; t &lt; 1. Define F₁ by averaging the product of (1 − xt) to the power −b and (1 − yt) to the power −b′. Appell’s series instead sums over two indices, one for each variable.

**Problem.** For real c &gt; a &gt; 0, b and b′ real, and \|x\| &lt; 1, F₁(a;b,b′;c;x,x) = ₂F₁(b + b′,a;c;x).

**How the definition helps.** In our own calculation, setting y = x makes the factors share a base, so adding the exponents gives Euler’s integral. In our own account, the work moves to proving that Picard’s integral matches the double series.

**Wikipedia:** [Appell series](https://en.wikipedia.org/wiki/Appell_series). It says: “discovered that Appell's F₁ can also be written as a one-dimensional Euler-type integral”

**Sources:**

- [Émile Picard, Sur une extension aux fonctions de deux variables du problème de Riemann relatif aux fonctions hypergéométriques (1881)](https://www.numdam.org/item/ASENS_1881_2_10__305_0/)

### Geometric products give q-gamma multiplication

**Remember:** Split the product into residue classes to change the base to qⁿ.

*True by definition.* MSC 33D05 (\\(q\\)-gamma functions, \\(q\\)-beta functions and integrals), 39A13. arXiv math.CA. Level 3: graduate.

**Definition.** For 0 &lt; q &lt; 1 and x &gt; 0, the q-gamma function is Γ<sub>q</sub>(x) = (1−q)⁽¹⁻ˣ⁾ times the infinite product of (1−qᵏ⁺¹)/(1−qᵏ⁺ˣ) over integers k ≥ 0.

**Problem.** Fix an integer n ≥ 2 and put r = qⁿ. Then Γ<sub>q</sub>(nx)·Γ<sub>r</sub>(1/n)⋯Γ<sub>r</sub>((n−1)/n) = \[(1−r)/(1−q)\]⁽ⁿˣ⁻¹⁾·Γ<sub>r</sub>(x)Γ<sub>r</sub>(x+1/n)⋯Γ<sub>r</sub>(x+(n−1)/n).

**How the definition helps.** The infinite product exposes the n residue classes that a recurrence in x hides. Our own derivation groups denominator factors by writing k = nj+i with 0 ≤ i &lt; n. Each group gives the denominator for Γ<sub>r</sub>(x+i/n). Convergence justifies regrouping, and evaluation at x = 1/n fixes the constant independent of x.

**Wikipedia:** [q-gamma function](https://en.wikipedia.org/wiki/q-gamma_function). It says: “Γq(nx)Γr(1/n)Γr(2/n)⋯Γr((n−1)/n) = ((1−qⁿ)/(1−q))⁽ⁿˣ⁻¹⁾ Γr(x)Γr(x+1/n)⋯Γr(x+(n−1)/n), r = qⁿ”

**Sources:** none listed. No primary source with a working link was found.

### One product shift proves the q-binomial theorem

**Remember:** Peel off the first factor to find every coefficient.

*True by definition.* MSC 33D15 (Basic hypergeometric functions in one variable, \\(\_r\\phi<sub>s</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** For 0 &lt; \|q\| &lt; 1 and \|z\| &lt; 1, define F(z) by multiplying (1 − aqʲz)/(1 − qʲz) over integers j ≥ 0.

**Problem.** On \|z\| &lt; 1, this quotient of products equals the q-binomial series. Its coefficient of degree n is the product of the first n factors (1 − aqʲ)/(1 − qʲ⁺¹), starting at j = 0.

**How the definition helps.** Removing the first factor gives (1 − z)F(z) = (1 − az)F(qz). In our own comparison, the product gives this equation without manipulating the series coefficients first. Comparing powers of z fixes each coefficient from the previous one, starting with F(0) = 1. Convergence of the product on compact subsets of the disk justifies the power series expansion.

**Wikipedia:** [Basic hypergeometric series](https://en.wikipedia.org/wiki/Basic_hypergeometric_series). It says: “₁φ₀(a;q,z) = (az;q)∞/(z;q)∞”

**Sources:** none listed. No primary source with a working link was found.

### A theta shift reindexes terms

**Remember:** One theta shift adds a full turn, and the other shifts the summation index.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 3: graduate.

**Definition.** Use θ(z,τ) = ∑ exp(πin²τ + 2πinz), summed over all integers n, with τ in the upper half-plane. The same theta function can also be given by an infinite product.

**Problem.** The Jacobi theta function obeys θ(z + 1,τ) = θ(z,τ) and θ(z + τ,τ) = exp(−πiτ − 2πiz) θ(z,τ).

**How the definition helps.** In our own proof, a unit shift leaves each term unchanged, and a shift by τ completes a square in n. Replacing n by n+1 leaves the sum unchanged because it converges absolutely. The cited formula uses πz as its argument and q = exp(2πiτ). Jacobi’s triple product theorem identifies the sum with the infinite product.

**nLab:** [Jacobi theta function](https://ncatlab.org/nlab/show/Jacobi+theta+function). It says: “The fundamental example of theta functions is the Jacobi theta function given by”

**Paper or page:** [Kronecker theta function and a decomposition theorem for theta functions I](https://arxiv.org/abs/2012.01670v1). It says: “θ₃(z\|τ) = θ₃(z+π\|τ) = q¹ᐟ² e²ⁱᶻ θ₃(z+πτ\|τ)”

**Sources:** none listed. No primary source with a working link was found.

### Arithmetic–geometric means evaluate elliptic integrals

**Remember:** Keep the integral unchanged until its integrand is constant.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** Replace two positive numbers by their arithmetic and geometric means, then repeat. Their common limit is the arithmetic–geometric mean.

**Problem.** For 0 ≤ k &lt; 1, let K(k) be the complete elliptic integral of 1/√(1 − k² sin²t) over 0 ≤ t ≤ π/2. Then K(k) = π/(2M), where M is the arithmetic–geometric mean of 1 and √(1 − k²).

**How the definition helps.** The common limit turns a sequence of equal integrals into one with a constant integrand. Landen’s transformation preserves the integral at each step. Our own limit argument bounds every integrand by the reciprocal of the smaller starting value. The work lies in proving the transformation and the convergence of the two means.

**Wikipedia:** [Landen's transformation](https://en.wikipedia.org/wiki/Landen%27s_transformation). It says: “In the limit, the integrand becomes a constant, so that integration is trivial”

**Sources:** none listed. No primary source with a working link was found.

### Elliptic gamma factors cancel under inversion

**Remember:** The inversion swaps the top and bottom of every factor.

*True by definition.* MSC 33E05 (Elliptic functions and integrals), 33D65. arXiv math.CV. Level 3: graduate.

**Definition.** For nonzero p and q with \|p\|, \|q\| &lt; 1, the elliptic gamma function Γ(z;p,q) is the product over m, n ≥ 0 of (1 − pᵐ⁺¹qⁿ⁺¹/z)/(1 − pᵐqⁿz). An alternative starts with a series for its logarithm on \|pq\| &lt; \|z\| &lt; 1.

**Problem.** As meromorphic functions of z ≠ 0, the elliptic gamma values at z and pq/z multiply to one.

**How the definition helps.** In our own calculation, replacing z by pq/z interchanges the numerator and denominator of every factor. The work lies in proving convergence away from poles. Expanding the logarithms there on \|pq\| &lt; \|z\| &lt; 1 gives the alternative series.

**Wikipedia:** [Elliptic gamma function](https://en.wikipedia.org/wiki/Elliptic_gamma_function). It says: “Γ(z;p,q) = 1/Γ(pq/z;p,q)”

**Sources:**

- [S. N. M. Ruijsenaars, First order analytic difference equations and integrable quantum systems (1997)](https://doi.org/10.1063/1.531809)

### Lattice sums give Weierstrass scaling

**Remember:** Scale the argument and the whole lattice together.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** A lattice consists of all integer combinations of two complex numbers independent over the reals. For z outside the lattice, define ℘ by adding z⁻² to the sum of (z − λ)⁻² − λ⁻² over nonzero lattice points λ.

**Problem.** Multiplying z and every lattice point by the same nonzero complex number c multiplies ℘ by 1/c².

**How the definition helps.** Keeping the whole lattice as an argument makes scaling visible in each summand. In our own comparison, fixing one period to one hides the effect of changing both periods. Multiplying z and λ by c extracts the same factor 1/c² from every term. The work lies in proving absolute convergence away from the lattice, which permits this reindexing.

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function). It says: “℘ is a homogeneous function in that”

**Sources:** none listed. No primary source with a working link was found.

### One mean step gives Landen’s identity

**Remember:** The limit stays the same after one averaging step.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** The arithmetic–geometric mean M(a,b) of positive a and b is the common limit of repeatedly replacing them by (a + b)/2 and √(ab). For 0 &lt; k &lt; 1, define K(k) = π/(2M(1,√(1 − k²))). Gauss identified this with the integral of 1/√(1 − k² sin² θ) from zero to π/2.

**Problem.** Write h = √(1 − k²). Then K(k) = 2K((1 − h)/(1 + h))/(1 + h).

**How the definition helps.** Starting the mean iteration one step later gives the same limit (our own). One step sends 1 and h to A = (1 + h)/2 and √h, so scaling gives M(1,h) = A·M(1, √h/A). With u = (1 − h)/(1 + h), one has √(1 − u²) = √h/A, so K(k) = K(u)/A. Gauss’s integral identity does the work of linking this to the elliptic integral.

**Wikipedia:** [Arithmetic–geometric mean](https://en.wikipedia.org/wiki/Arithmetic%E2%80%93geometric_mean). It says: “K(k) = π/(2M(1,√(1−k²))).”

**Sources:** none listed. No primary source with a working link was found.

### Sigma factors give Weierstrass differences

**Remember:** Sigma factors put the zeros and poles in place.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** Fix a lattice of complex periods, the integer combinations of two periods independent over the reals. The Weierstrass sigma function σ is the standard entire product with simple zeros at the lattice points and σ′(0) = 1. Translated factors place zeros at chosen points, while denominator factors place poles.

**Problem.** For v outside the lattice, ℘(u) − ℘(v) equals −σ(u + v)σ(u − v) divided by σ(u)²σ(v)², as meromorphic functions of u.

**How the definition helps.** Translated sigma factors encode the zeros and poles of the difference directly. As a function of u, ℘(u) − ℘(v) has zeros at ±v and a double pole at each lattice point. The ratio of the two sides is then periodic with no poles, so it is constant, and the leading term at u = 0 fixes it. The work lies in the period formulas for σ and the count of zeros with multiplicity (our own).

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function). It says: “℘(u)−℘(v)=−σ(u+v)σ(u−v)/(σ(u)²σ(v)²).”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting 1/λ² makes the Weierstrass ℘ series converge without a constant

**Remember:** Subtract each pole's value at zero, and ℘ converges with no constant term.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals), 30D30. arXiv math.CV. Level 3: graduate.

**Definition.** A lattice Λ is the set of all integer combinations of two periods that are independent over ℝ. For such a lattice, ℘(z) = 1/z² + Σ over nonzero λ in Λ of (1/(z − λ)² − 1/λ²). The series converges absolutely, locally uniformly away from the lattice.

**Problem.** ℘ is an even elliptic function with periods in Λ and a double pole at each lattice point. It satisfies (℘′)² = 4℘³ − g₂℘ − g₃, where g₂ and g₃ are Eisenstein sums of the lattice.

**How the definition helps.** Each subtracted term makes the summand of size 1/\|λ\|³, so the series converges absolutely and can be rearranged. The plain sum of 1/(z − λ)² does not converge absolutely, because the sum of 1/\|λ\|² over a lattice diverges (our own). The normalization also makes ℘(z) − 1/z² vanish at z = 0, so the Laurent series has no constant term. Liouville’s theorem then gives the differential equation, with no ℘² term (our own).

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function), [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “It is constructed in such a way that it has a pole of order two at every lattice point. The term −1/λ² is there to make the series convergent.”

**Sources:** none listed. No primary source with a working link was found.

### Theta quotients avoid amplitude branches

**Remember:** Theta quotients give single-valued functions without choosing an angle.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** Fix 0 &lt; m &lt; 1 and let K be the integral of 1/√(1 − m sin²t) from zero to π/2. Evaluate the four Jacobi theta series at πu/(2K) with parameter exp(−πK′/K), where K′ uses 1 − m. Define sn, cn and dn as constant multiples of θ₁/θ₄, θ₂/θ₄ and θ₃/θ₄, respectively. Choose the constants so that sn′(0) = 1 and cn(0) = dn(0) = 1.

**Problem.** The three functions extend from the real line to single-valued meromorphic functions on the complex plane.

**How the definition helps.** Each theta series is analytic throughout the plane, so its quotient gives a single-valued function with at most poles. In our own comparison, the amplitude definition first inverts an elliptic integral and requires a choice of inverse branch. The work lies in proving that the quotients agree on the real axis with the functions defined using that inverse.

**Wikipedia:** [Jacobi elliptic functions](https://en.wikipedia.org/wiki/Jacobi_elliptic_functions). It says: “Equivalently, Jacobi's elliptic functions can be defined in terms of the theta functions.”

**Sources:** none listed. No primary source with a working link was found.

### Theta series solve heat equations

**Remember:** Two space derivatives give the same factor as one time derivative.

*True by definition.* MSC 33E05 (Elliptic functions and integrals), 35K05. arXiv math.CA. Level 3: graduate.

**Definition.** The Jacobi theta function θ(z,τ) is the sum of exp(πin²τ + 2πinz) over all integers n, for Im τ &gt; 0. For x on the circle of circumference one and t &gt; 0, put u(x,t) = θ(x, 4πit).

**Problem.** The function u solves the heat equation: its time derivative equals its second space derivative for t &gt; 0. As t decreases to zero, u tends to the point mass at 0, tested against smooth periodic functions.

**How the definition helps.** The theta series gives each Fourier mode exactly the decay required by the heat equation. In our own comparison, the series supplies the solution directly instead of requiring a separate differential equation for every mode. Exponential decay justifies differentiation for positive time. Fourier inversion gives the initial point mass.

**nLab:** [Jacobi theta function](https://ncatlab.org/nlab/show/Jacobi+theta+function). It says: “The fundamental example of theta functions is the Jacobi theta function given by”

**Wikipedia:** [Theta function](https://en.wikipedia.org/wiki/Theta_function). It says: “The Jacobi theta function is the fundamental solution of the one-dimensional heat equation with spatially periodic boundary conditions.”

**Sources:** none listed. No primary source with a working link was found.

### Two periods forbid lone simple poles

**Remember:** Opposite edges cancel, so one nonzero residue cannot stand alone.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 3: graduate.

**Definition.** An elliptic function is meromorphic on the complex plane, so its only singularities are poles. It must repeat under two shifts that are linearly independent over the real numbers. A singly periodic meromorphic function only has to repeat under one shift.

**Problem.** An elliptic function cannot have exactly one pole per period parallelogram if that pole is simple.

**How the definition helps.** The two periods make the integrals along opposite sides of a period parallelogram cancel (our own). So the residues inside sum to zero, by the residue theorem, and a lone simple pole would have nonzero residue. With only one period the claim fails: cot z has one simple pole per period strip (our own).

**Wikipedia:** [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “Every elliptic function has finitely many poles in ℂ/Λ and the sum of its residues is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass coordinates generate elliptic functions

**Remember:** The even part uses ℘ and the odd part uses ℘′.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals), 30F10. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a period lattice, all integer combinations of two complex numbers independent over the reals. Its Weierstrass function ℘ is even and periodic, with double poles exactly at the lattice points and ℘(z) − 1/z² → 0 at the origin. Use ℘ and its odd derivative ℘′ as coordinates.

**Problem.** Every function periodic under this lattice and analytic except at poles is a rational expression in ℘ and ℘′.

**How the definition helps.** The two coordinates separate the even and odd parts of any such function. ℘ takes equal values exactly at opposite points modulo periods, so every even function is a rational function of ℘ (our own). Dividing the odd part by ℘′ makes it even. The work lies in describing the fibers of ℘, including its repeated points.

**Wikipedia:** [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “Every elliptic function with respect to a given period lattice Λ can be expressed as a rational function in terms of ℘ and ℘′.”

**Sources:** none listed. No primary source with a working link was found.

### A Gaussian contour makes reciprocal gamma entire

**Remember:** Gaussian decay lets the reciprocal gamma integral work at every parameter.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CV. Level 4: research.

**Definition.** Fix σ &gt; 0 and put w = σ + it. Define 1/Γ(z) as 1/π times the integral over all real t of w¹⁻²ᶻexp(w²), using the principal logarithm of w. The usual definition takes the reciprocal of the continued gamma function.

**Problem.** The reciprocal gamma function is entire, meaning that it is complex differentiable everywhere.

**How the definition helps.** In our own proof, the integrand is entire in z and the Gaussian controls its growth along the contour. Our own bound uses that the other factor grows at most as a power of \|t\| when z ranges over a compact set. In our own account, the work is to prove that the contour integral equals the reciprocal of gamma.

**Paper or page:** [A Unifying Integral Representation of the Gamma Function and Its Reciprocal](https://arxiv.org/abs/2506.12112v1). It says: “1/Γ(z) = (1/π)G(z), ∀ z ∈ ℂ”

**Sources:**

- [Peter Reinhard Hansen and Chen Tong, A Unifying Integral Representation of the Gamma Function and Its Reciprocal, Theorem 1](https://arxiv.org/abs/2506.12112v1)

### Bernoulli corrections preserve distribution

**Remember:** The logarithm scales with the weight lost by the polylogarithm.

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 11G55. arXiv math.CA, math.NT. Level 4: research.

**Definition.** The single-valued polylogarithm Pₙ(z) starts from the sum over 0 ≤ k &lt; n of Bₖ(2 log\|z\|)ᵏLiₙ₋ₖ(z)/k!. It keeps the real part of this sum for odd n and the imaginary part for even n. Here Bₖ are the Bernoulli numbers with B₁ = −1/2, and Pₙ is extended continuously at exceptional arguments.

**Problem.** For integers n,m≥2 and nonzero complex z, Pₙ(zᵐ) equals mⁿ⁻¹ times the sum of Pₙ(ωz) over all mth roots of unity ω.

**How the definition helps.** Under z ↦ zᵐ each factor of log\|z\| scales by m, which makes up for the one order of polylogarithm it replaces (our own). Inside the unit disk, the roots-of-unity filter on each power series gives the identity term by term (our own). The work lies in the single-valued real-analytic continuation, which extends the identity outside the disk (our own).

**nLab:** [polylogarithm](https://ncatlab.org/nlab/show/polylogarithm). It says: “Polylogarithms Liₙ(x) generalize dilogarithms.”

**Paper or page:** [Clean Single-Valued Polylogarithms](https://arxiv.org/abs/2104.04344v2). It says: “For any $x\\in \\mathbb {C}\\setminus \\{ 0,1\\} $ and any $n\\in \\mathbb {Z}<sub>&gt;1</sub>$, we have\\begin{gather\*}  I<sup>{\\mathrm{csv}}<sub>n</sub></sup>(x) = 2 (-1)<sup>n</sup> \\Bigg\[P<sub>n</sub>(x) +\\frac{1}{n}\\sum <sub>k=1</sub><sup>\\lceil n/2\\rceil -1</sup>(n-2k-1) \\frac{\\log <sup>2k</sup>\|x\|<sup>2}{</sup>(2k+1)!} P<sub>n-2k</sub>(x)\\Bigg\]. \\end{gather\*}”

**Sources:**

- [Don Zagier, Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields (1990)](https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf)
- [Steven Charlton, Claude Duhr and Herbert Gangl, Clean Single-Valued Polylogarithms (2021)](https://arxiv.org/abs/2104.04344v2)

### Clean polylogarithms give Clausen values

**Remember:** On the unit circle the logarithmic corrections all vanish.

*True by definition.* MSC 33B30 (Higher logarithm functions), 11G55. arXiv math.NT, math.CA. Level 4: research.

**Definition.** Write J(n,z) for the ordinary single-valued evaluation of the integral representing −Liₙ(1/z), where Liₙ is the order-n polylogarithm. For n&gt;1, form J(n,z)+log(\|z\|²)J(n−1,z)/n. Its real part for odd n, or imaginary part for even n, gives the clean value.

**Problem.** At a root of unity z=exp(iθ) other than 1, the clean value equals 2(−1)ⁿClₙ(θ). Here Clₙ(θ) takes the real part of Liₙ(z) for odd n and the imaginary part for even n.

**How the definition helps.** On the unit circle log\|z\|² = 0, so the clean correction term vanishes (our own). What remains is the parity part of the single-valued polylogarithm, which gives the Clausen value. The work lies in deriving the logarithmic correction from the projection that kills products (our own).

**Paper or page:** [Clean Single-Valued Polylogarithms](https://arxiv.org/abs/2104.04344v2). It says: “Then Iₙᶜˢᵛ(ξ(N)ᵃ) = 2(−1)ⁿ Clₙ(2πa/N)”

**Sources:**

- [Steven Charlton, Claude Duhr and Herbert Gangl, Clean Single-Valued Polylogarithms (2021)](https://arxiv.org/abs/2104.04344v2)

### Cross ratios organize fiber identities

**Remember:** Put the four fibers in cross-ratio order before summing their values.

*Makes the theorem clean to state or prove.* MSC 33B30 (Higher logarithm functions), 39B32. arXiv math.CA. Level 4: research.

**Definition.** For four distinct points a,b,c,d on the complex sphere, their cross ratio is (a−c)(b−d)/((a−d)(b−c)). Take a limit if one point is infinity. Define V(a,b,c,d) by evaluating the Bloch–Wigner dilogarithm at this ratio.

**Problem.** Let φ be a rational map of degree n ≥ 1, let A, B, C, D be distinct, and fix a with φ(a) = A. Then the sum of V(a,b,c,d) over all preimages b, c, d of B, C, D, counted with multiplicity, is nV(A,B,C,D).

**How the definition helps.** Our own explanation uses the four-point function to write one formula for every choice of target points, including infinity. Gangl’s Theorem 2.1 gives the identity. The cross ratio supplies its arguments, while the generalized dilogarithm equation supplies the equality.

**nLab:** [cross ratio](https://ncatlab.org/nlab/show/cross+ratio). It says: “The cross ratio (A,B;C,D) is then the image of D under this isomorphism.”

**Sources:**

- [Herbert Gangl, Functional equations for higher logarithms (2003)](https://maths.dur.ac.uk/users/herbert.gangl/feq_polylogs.pdf)
- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Dilogarithm endpoints give Mahler measure

**Remember:** Use a dilogarithm primitive at the ends of the arc.

*True by definition.* MSC 33B30 (Higher logarithm functions), 11R06. arXiv math.NT, math.CA. Level 4: research.

**Definition.** On the unit circle define D(exp(iθ)) by integrating −log\|1−exp(it)\| from 0 to θ. This integral agrees with the Bloch–Wigner dilogarithm on the circle.

**Problem.** The logarithmic Mahler measure of 1+x+y, the mean of log\|1+x+y\| on the unit torus, is D(exp(iπ/3))/π.

**How the definition helps.** The integral definition evaluates the integral over an arc from its endpoints (our own). Jensen’s formula averages over y first, leaving the circle average of max(0, log\|1 + x\|), which is supported on the arc of arguments from −2π/3 to 2π/3. Substituting −x moves the endpoints to π/3 and 5π/3, where D takes opposite values. The Fourier series identifies the integral with the analytic dilogarithm.

**Wikipedia:** [Mahler measure](https://en.wikipedia.org/wiki/Mahler_measure). It says: “m(1+x+y) = 3√3/(4π) L(χ₋₃,2)”

**Sources:**

- [Chris Smyth, Appendix 1 in David W. Boyd, Speculations concerning the range of Mahler’s measure (1981)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S000843950006570X)
- [David W. Boyd and Fernando Rodriguez-Villegas, Mahler’s Measure and the Dilogarithm (I) (2002)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/85ADE50E3B3E825FDF7B5D9C174E44FC/S0008414X00028728a.pdf/mahleras_measure_and_the_dilogarithm_i.pdf)

### Exterior products test dilogarithm identities

**Remember:** Cancel exterior products before integrating any dilogarithm.

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 39B32, 11G55. arXiv math.CA, math.NT. Level 4: research.

**Definition.** For a rational function f on a smooth complex curve X, use the exterior product (1−f) ∧ f in Λ²ℂ(X)×. This is the alternating bilinear product of nonzero functions, using multiplication in each input. Extend the assignment to integer sums of symbols for f other than 0 and 1.

**Problem.** Write D for the Bloch–Wigner dilogarithm. If Σaⱼ(1−fⱼ) ∧ fⱼ=0, then ΣaⱼD(fⱼ) is constant on each connected open set avoiding zeros, poles and values of one.

**How the definition helps.** Our own proof encodes the derivative in an alternating product, so a formal cancellation forces a constant sum. Send u ∧ v to log\|u\| d arg v−log\|v\| d arg u. Differentiating the analytic Bloch–Wigner formula shows that (1−f) ∧ f maps to −dD(f).

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “The Bloch–Wigner dilogarithm is defined by D(z) ≔ Im(Li₂(z)) + arg(1−z) log\|z\|.”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Logarithm sheets resolve Rogers monodromy

**Remember:** Keep the logarithm sheets and take the value modulo π².

*True by definition.* MSC 33B30 (Higher logarithm functions), 11G55, 57K31. arXiv math.CA, math.GT. Level 4: research.

**Definition.** Write log for the principal logarithm and Li₂ for the ordinary dilogarithm. For z outside {0,1}, follow log z+pπi and −log(1−z)+qπi continuously across their cuts, using integer indices p,q. On each sheet set R=Li₂(z)+log(z)log(1−z)/2+πi(p log(1−z)+q log z)/2−π²/6.

**Problem.** The formula for R defines a single-valued function on this logarithm cover with values in ℂ/π²ℤ.

**How the definition helps.** Keeping both branch indices lets the correction compensate for the jumps of the ordinary Rogers dilogarithm. Neumann checks each cut separately. The remaining changes are multiples of π², which represent zero in the stated quotient.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭ PSL(2,ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Rogers complements simplify cluster sums

**Remember:** A negative tropical sign chooses the complementary argument.

*True by definition.* MSC 33B30 (Higher logarithm functions), 13F60. arXiv math.CA. Level 4: research.

**Definition.** The Rogers dilogarithm is L(u) = Li₂(u) + log(u)log(1−u)/2 for 0 &lt; u &lt; 1. Along a sequence of cluster mutations, put u = y/(1+y) at each step, where y is the value of the mutated coefficient at positive initial values. A step is negative when its tropical monomial, computed with coordinatewise minimum in place of addition, has nonpositive exponents, not all zero.

**Problem.** Suppose the mutations return the initial matrix and coefficient variables up to the same permutation. Then the sum of L(u) over the other steps and of −L(1 − u) over the negative steps is zero.

**How the definition helps.** The Rogers normalization turns complementary arguments into a constant sum, L(u)+L(1−u)=π²/6. Each negative step therefore subtracts π²/6 from the unsigned sum. The periodic mutation theorem evaluates that unsigned sum as π²/6 times the number of negative steps.

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “the Bloch group, CFT, Liouville gravity, hyperbolic geometry and cluster transformations”

**Wikipedia:** [Dilogarithm](https://en.wikipedia.org/wiki/Dilogarithm). It says: “Abel's functional equation or five-term relation”

**Sources:**

- [Rinat M. Kashaev and Tomoki Nakanishi, Classical and Quantum Dilogarithm Identities (2011)](https://sigma-journal.com/2011/102/)

### Rogers coordinates telescope a series

**Remember:** Each pair passes two terms of the pentagon to the next pair.

*True by definition.* MSC 33B30 (Higher logarithm functions), 39B32. arXiv math.CA, math.NT. Level 4: research.

**Definition.** The Rogers dilogarithm is L(t) = Li₂(t) + log(t)log(1 − t)/2 for 0 &lt; t &lt; 1. For 0 &lt; b &lt; a &lt; 1, start with (x₀,y₀) = (a,b). Update each pair by (x,y) ↦ (x(1 − y)/(1 − xy), y(1 − x)/(1 − xy)).

**Problem.** The sum of L(xₙyₙ) over integers n≥0 is L(a)+L(b)−L((a−b)/(1−b)).

**How the definition helps.** The pair update uses exactly the two arguments that carry over in Rogers’s five-term relation. So consecutive five-term relations telescope (our own). The recurrence gives xₙ → (a − b)/(1 − b) and yₙ → 0, which fixes the last term (our own).

**Wikipedia:** [Dilogarithm](https://en.wikipedia.org/wiki/Dilogarithm). It says: “L(x)+L(y)=L(xy)+L(x(1−y)/(1−xy))+L(y(1−x)/(1−xy)).”

**Paper or page:** [A Dilogarithm Series and a Generalization of a Theorem of Bridgeman](https://arxiv.org/abs/2410.21619v2). It says: “The terms xₙ and yₙ satisfy the recurrence relations xₙ₊₁ = xₙ(1−yₙ)/(1−xₙyₙ), and yₙ₊₁ = yₙ(1−xₙ)/(1−xₙyₙ).”

**Sources:**

- [Chance Sanford, A Dilogarithm Series and a Generalization of a Theorem of Bridgeman (Integers, 2025)](https://arxiv.org/abs/2410.21619v2)

### Trilogarithm corrections make sums constant

**Remember:** The corrected trilogarithm leaves just a constant in the three-term sum.

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 11G55. arXiv math.CA, math.NT. Level 4: research.

**Definition.** Let A=log\|z\| and B=log\|1−z\|. Write Li₂ and Li₃ for the classical polylogarithms of orders two and three. Define P₃(z)=Re Li₃(z)−A Re Li₂(z)−A²B/3 and use its real-analytic extension across the cut.

**Problem.** For z ∉ {0,1}, P₃(z)+P₃(1−z)+P₃(1−1/z)=ζ(3).

**How the definition helps.** The correction makes the three transformed copies of dP₃ cancel (our own). Differentiation gives dP₃ = −D(z) d arg z + (A/3)(B dA − A dB), where D is the Bloch–Wigner dilogarithm. The symmetries of D cancel the angle terms, and the remaining coefficients sum to zero. Letting z → 0 and using P₃(1/z) = P₃(z) gives the constant ζ(3).

**nLab:** [polylogarithm](https://ncatlab.org/nlab/show/polylogarithm). It says: “Polylogarithms Liₙ(x) generalize dilogarithms.”

**Sources:**

- [Don Zagier, Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields (1990)](https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf)

### Normalized convolution joins parameters

**Remember:** Divide out the binomial before multiplying coefficients.

*True by definition.* MSC 33C20 (Generalized hypergeometric series, \\(\_pF<sub>q</sub>\\)). arXiv math.CA. Level 4: research.

**Definition.** Let Bₖ be the coefficient of degree k in (1 − x)ⁿ. In the constant-term-one convention, finite free multiplicative convolution multiplies corresponding coefficients and divides each product by Bₖ.

**Problem.** Take two terminating hypergeometric polynomials, each with upper parameter −n, whose lower rising products are nonzero up to degree n. Their convolution is the hypergeometric polynomial with upper parameter −n and the two remaining parameter lists joined.

**How the definition helps.** In each factor, the coefficient of xᵏ contains Bₖ = (−n)ₖ/k! once (our own). Multiplying coefficients counts Bₖ twice, and the convolution divides out one copy. What remains is the rising products from both parameter lists.

**Paper or page:** [Zeros of generalized hypergeometric polynomials via finite free convolution. Applications to multiple orthogonality](https://arxiv.org/abs/2404.11479v2). It says: “then their n-th free multiplicative convolution is given by”

**Sources:**

- [Andrei Martinez-Finkelshtein, Rafael Morales, Daniel Perales. Zeros of generalized hypergeometric polynomials via finite free convolution. Applications to multiple orthogonality](https://arxiv.org/abs/2404.11479v2)

### Disjoint weights locate zeros

**Remember:** Each interval contributes its own sign changes to the degree count.

*Rules out counterexamples.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** An Angelesco system assigns a positive measure with finite moments and infinite support to each of several intervals with disjoint interiors. For measure j, require the polynomial to integrate to zero against each power from degree zero through nⱼ − 1.

**Problem.** The polynomial with leading coefficient one and degree n₁ + ⋯ + nᵣ satisfying these conditions has exactly nⱼ simple zeros inside interval j.

**How the definition helps.** Disjoint interiors let the degree count include each sign change only once (our own). If P had fewer than nⱼ sign changes inside interval j, the product of their linear factors would have degree below nⱼ. Orthogonality would then force the integral of this product times P to vanish, yet the integrand has constant sign and is not zero. Two identical measures at index (1,1) impose only one independent condition, so the conclusion fails (our own).

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1). It says: “Then Pₙ has exactly nⱼ zeros on each Γ̊ⱼ, and each zero is simple.”

**Sources:**

- [Rostyslav Kozhan, Marcus Vaktnäs. Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1)

### Divided differences clear Uvarov denominators

**Remember:** Subtract the value at z to leave a polynomial.

*True by definition.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** A Uvarov change replaces a matrix measure μ by ν with dν(x)R(x) = L(x)dμ(x), for polynomial matrices L and R. The Cauchy transform integrates each entry of the measure against 1/(z − x).

**Problem.** For z outside both supports, the new Cauchy transform times R(z) equals L(z) times the old one plus a polynomial matrix. This needs finite moments up to the degrees of L and R, and the polynomial has degree below the larger of them.

**How the definition helps.** The Cauchy transform collects all moment relations into one identity (our own). Subtracting the measure relation inside the integral leaves the differences R(z) − R(x) and L(z) − L(x), each divisible by z − x. This gives the degree bound without solving any moment equations. Constructing the new measure is a separate problem.

**Paper or page:** [Uvarov Perturbations for Multiple Orthogonal Polynomials of the Mixed Type on the Step-Line](https://arxiv.org/abs/2510.13754v1). It says: “induces a matrix linear spectral transformation of the form”

**Sources:**

- [Manuel Mañas, Miguel Rojas. Uvarov Perturbations for Multiple Orthogonal Polynomials of the Mixed Type on the Step-Line](https://arxiv.org/abs/2510.13754v1)

### Double shifts detect Wronskian zeros

**Remember:** A double zero puts a squared factor into the measure.

*Makes the theorem clean to state or prove.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** For each measure j with finite moments, require a polynomial to integrate to zero against the first nⱼ powers, starting with 1. Write N for the sum of the counts nⱼ. Call the list of counts normal if exactly one degree-N polynomial with leading coefficient one meets these conditions.

**Problem.** Let n be a normal list, and let n + eⱼ, which adds one to count j, also be normal. The Wronskian of their two polynomials vanishes at z exactly when multiplying every measure by (x − z)² destroys normality of n.

**How the definition helps.** Normality turns a double-root condition into a uniqueness test on the measures. By normality the two polynomials span all solutions of the lower conditions up to degree N + 1 (our own). So the Wronskian vanishes at z exactly when some nonzero combination has a double root at z. Dividing by (x − z)² gives a solution of degree below N for the modified measures, and multiplication gives the converse.

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1). It says: “Assume n and n + eⱼ are normal for μ.”

**Sources:**

- [Rostyslav Kozhan, Marcus Vaktnäs. Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1)

### Separate intervals locate orthogonal zeros

**Remember:** Each separate interval needs its own quota of sign changes.

*Rules out counterexamples.* MSC 33C47 (Other special orthogonal polynomials and functions). arXiv math.CA. Level 4: research.

**Definition.** An Angelesco system assigns positive measures with infinite support and finite moments to disjoint closed intervals. For indices nⱼ, its polynomial is the monic P of degree n₁ + ⋯ + nᵣ with ∫PQ dμⱼ = 0 whenever Q has degree below nⱼ.

**Problem.** The polynomial has exactly nⱼ simple zeros inside interval j for each j.

**How the definition helps.** Separate intervals let us count sign changes for each measure without counting any root twice (our own). In interval j, let Q be the product of the linear factors at the interior sign changes of P. Then PQ has constant sign there and nonzero integral, so orthogonality forces Q to have degree at least nⱼ. With two identical uniform measures on \[−1,1\] and index (1,1), x² − 1/3 meets both conditions but has two roots there (our own).

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122). It says: “Then Pₙ has exactly nⱼ zeros on each Γ̊ⱼ, and each zero is simple.”

**Sources:**

- [Rostyslav Kozhan and Marcus Vaktnäs, Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122)

### Shifted measures detect zeros

**Remember:** Insert a root by multiplying each measure by its linear factor.

*Makes the theorem clean to state or prove.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** For each measure j with finite moments, require a polynomial to integrate to zero against the first nⱼ powers, starting with 1. Write N for the sum of the counts nⱼ. Call the list of counts normal if exactly one degree-N polynomial with leading coefficient one meets these conditions.

**Problem.** For a normal list, z is a root of its polynomial exactly when multiplying each measure by x − z destroys normality.

**How the definition helps.** Normality lets us state a root test using only uniqueness for modified measures. In our own proof, loss of normality means a nonzero polynomial of degree below N satisfies the modified equations. Multiplying it by x − z gives a multiple of the original polynomial, by uniqueness. Conversely, dividing the original polynomial by its root factor gives a solution of the modified equations of degree below N.

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1). It says: “Let n be normal with respect to μ.”

**Sources:**

- [Rostyslav Kozhan, Marcus Vaktnäs. Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1)

### Macdonald operators give orthogonality

**Remember:** Distinct joint eigenvalues give orthogonal polynomials.

*True by definition.* MSC 33D52 (Basic orthogonal polynomials and functions associated with root systems (Macdonald polynomials, etc.)). arXiv math.CA. Level 4: research.

**Definition.** A difference operator forms a weighted sum of function values at shifted arguments. Define Macdonald polynomials as common eigenvectors of their commuting difference operators. Fix the scale by giving the leading symmetric monomial sum coefficient one.

**Problem.** For generic parameters, distinct labels have different lists of eigenvalues. The corresponding polynomials are orthogonal for the Macdonald inner product.

**How the definition helps.** For each pair, one self-adjoint operator distinguishes their eigenvalues and therefore forces their inner product to vanish. Self-adjoint means the operator can move between the two arguments of the inner product. Our own comparison starts from the usual expansion, which allows only lower symmetric monomials after the leading one. The work lies in constructing the operators and identifying their eigenvectors with those polynomials.

**Wikipedia:** [Macdonald polynomials](https://en.wikipedia.org/wiki/Macdonald_polynomials). It says: “for an algebra of commuting self-adjoint operators with 1-dimensional eigenspaces”

**Sources:** none listed. No primary source with a working link was found.

### Balanced parameters give elliptic ratios

**Remember:** Matching parameter products cancel the period multiplier.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals), 33D15. arXiv math.CA. Level 4: research.

**Definition.** For 0 &lt; \|p\| &lt; 1 and x ≠ 0, let θ(x;p) be the product of (1 − xpʲ)(1 − pʲ⁺¹/x) over j ≥ 0. Consider a ratio with equally many factors θ(ax;p) above and θ(bx;p) below. It is balanced when all a and b are nonzero and the product of the a’s equals the product of the b’s.

**Problem.** A balanced ratio gives a meromorphic function on the complex torus formed by identifying each nonzero x with px.

**How the definition helps.** Balance cancels the multiplier produced by replacing x with px (our own). Shifting the infinite product gives θ(px;p) = −θ(x;p)/x. Equal list lengths cancel the signs and powers of x, and balance cancels the remaining constants. Without balance it fails: θ(2x;p)/θ(3x;p) gains a factor of 3/2 (our own).

**Wikipedia:** [Elliptic hypergeometric series](https://en.wikipedia.org/wiki/Elliptic_hypergeometric_series). It says: “the ratio cₙ/cₙ₋₁ is an elliptic function of n”

**Sources:**

- [S. Ole Warnaar, Summation and transformation formulas for elliptic hypergeometric series (2002)](https://doi.org/10.1007/s00365-002-0501-6)

### Nonmatching multipliers make residues decisive

**Remember:** Exclude the matching multipliers, and no pole-free term survives.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 4: research.

**Definition.** Fix complex y and τ with Im τ &gt; 0, and put q = exp(2πiτ). Consider functions analytic except at poles, unchanged by a shift of π, and multiplied by exp(−2iy) under a shift of πτ. Require exp(2iy) ≠ qⁿ for every integer n.

**Problem.** A function in this class with only simple poles is determined by the locations and residues of its poles in one period parallelogram.

**How the definition helps.** Excluding these multipliers forces two functions with the same pole data to agree (our own). Their difference has no poles, so π-periodicity gives a series in powers of exp(2iz). The second shift multiplies the nth term by qⁿ, which forces every coefficient to vanish. At y = 0 the claim fails, because adding a constant preserves the pole data.

**Paper or page:** [Kronecker theta function and a decomposition theorem for theta functions I](https://arxiv.org/abs/2012.01670v1). It says: “where e²ⁱʸ ≠ qⁿ for n ∈ ℤ.”

**Sources:**

- [Zhi-Guo Liu, Kronecker theta function and a decomposition theorem for theta functions I, Theorem 1.7](https://arxiv.org/abs/2012.01670v1)

### Orbital residues decide elliptic summability up to two terms

**Remember:** Zero orbital residues make f summable, apart from two explicit extra terms.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 33E05 (Elliptic functions and integrals), 39A10, 14K20. arXiv math.NT, math.CV. Level 4: research.

**Definition.** An elliptic function f is summable for a shift by s if f = g(z + s) − g(z) for an elliptic function g. Elliptic orbital residues are numbers computed from the poles of f, grouped by their orbits under the shift. A non-torsion point s is one whose multiples never return to zero on the curve.

**Problem.** Let s be a non-torsion point and fix the normalizing choice the paper calls an analytic pinning. All orbital residues of an elliptic function f vanish exactly when f equals a summable function plus a + b(ζ(z + s) − ζ(z)) for constants a and b. Here ζ is the Weierstrass zeta function, with ζ′ = −℘.

**How the definition helps.** The residues reduce summability to checking that a list of numbers is zero, up to two explicit terms (our own). The abstract calls the residues only a partial obstruction. The corollary shows what remains: a constant and one multiple of ζ(z + s) − ζ(z). That leftover part needs a separate test (our own).

**Paper or page:** [Summability of Elliptic Functions via Residues](https://arxiv.org/abs/2503.22770). It says: “Dreyfus, Hardouin, Roques, and Singer introduced a notion of elliptic orbital residues, which altogether serve as a partial obstruction to summability for elliptic functions with respect to the shift by a non-torsion point over an elliptic curve.”

**Sources:**

- [Matthew Babbitt, Summability of Elliptic Functions via Residues, arXiv:2503.22770 (2025)](https://arxiv.org/abs/2503.22770)

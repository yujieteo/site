### Defining cosh and sinh by exponentials makes their addition laws algebra

**Remember:** The exponential addition law gives the hyperbolic addition laws.

*True by definition. Confidence: medium.* MSC 33B10 (Exponential and trigonometric functions), 26A09. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define cosh t = (eᵗ + e⁻ᵗ)/2 and sinh t = (eᵗ − e⁻ᵗ)/2. The geometric definition takes (cosh t, sinh t) as the point on the right branch of x² − y² = 1. There, t is twice the signed area of the sector from (1, 0) to that point.

**Problem.** For real x and y, sinh(x + y) = sinh x cosh y + cosh x sinh y.

**How the definition helps.** With exponential definitions, the identity is a polynomial identity in eˣ and eʸ (our own). Expanding the right side, the terms eˣ⁻ʸ and eʸ⁻ˣ cancel, and only eˣ⁺ʸ and e⁻ˣ⁻ʸ remain (our own). With the geometric definition, one first needs the exponential formulas. The work moves into an area calculation. For a point (p, q) on the hyperbola, twice the sector area equals ln(p + q) (our own). Solving p + q = eᵗ and p² − q² = 1 then gives the exponential formulas (our own).

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

**How the definition helps.** Euler’s identity is the condition that defines π. Squaring it gives exp(2πi) = 1, so the addition law for exp gives the stated period. The work is to show that φ reaches −1 and has a first positive time at −1. The nLab proves that φ reaches the whole circle by showing it first covers an arc near 1. Since φ(−t) = 1/φ(t), any negative solution gives a positive one. Continuity keeps solutions away from 0 and ensures that the first positive solution exists (our own). To recover geometric π, show that the curve runs along the unit circle at speed 1 (our own).

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

**How the definition helps.** The coordinate definition makes the identity the equation of the hyperbola. With the exponential definition, one instead expands and subtracts the two squares. The work moves into showing that the signed area gives the exponential formulas. Our own calculation uses the fact that twice the signed area is the integral of x dy − y dx along the arc. With u = x + y and x − y = 1/u, this becomes the integral of 1/u from 1 to x + y. Thus x + y = exp(t) and x − y = exp(−t).

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

**How the definition helps.** With the gamma quotient, both sides equal Γ(x)Γ(y)Γ(z)/Γ(x + y + z) after one cancellation. With Euler’s integral, the identity needs a change of variables in a double integral. The work moves to the theorem that the quotient equals Euler’s integral, which the cited ProofWiki page states. A standard proof multiplies the integrals for Γ(x) and Γ(y) and changes variables to u = s + t and v = s/(s + t). The cancellation and the proof outline are our own.

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

**How the definition helps.** With Euler’s limit, the quotient of the finite expressions at x + 1 and at x is kx/(x + k), which tends to x. So the formula holds at once on the whole domain. The integral definition gives the formula by integration by parts, but only where the real part of x is positive. Beyond that region one needs analytic continuation, which itself uses the formula. The work moves to two facts, that the limit exists and that it equals the integral when the real part of x is positive. These proof steps are our own; the nLab page states the definition and the formula.

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

**How the definition helps.** Turning the poles of Γ into zeros gives an entire function, so its identities hold at every point (our own explanation). For Γ itself, each formula must exclude the non-positive integers. As an entire function, 1/Γ is a Weierstrass product over its zeros. Weierstrass called it the factorielle and used it in developing his factorization theorem. The page also gives Hankel's contour integral for 1/Γ, valid for all z. The page notes that 1/Γ has order 1 but infinite type, so its growth is not of the simplest kind.

**Wikipedia:** [Reciprocal gamma function](https://en.wikipedia.org/wiki/Reciprocal_gamma_function). It says: “Since the gamma function is meromorphic and nonzero everywhere in the complex plane, its reciprocal is an entire function.”

**Sources:** none listed. No primary source with a working link was found.

### Poisson arrival times make the regularized incomplete gamma a Poisson probability

**Remember:** The nth arrival is late exactly when fewer than n have arrived.

*True by definition.* MSC 33B20 (Incomplete beta and gamma functions (error functions, probability integral, Fresnel integrals)), 60G55. arXiv math.CA, math.PR. Level 2: later undergraduate.

**Definition.** Fix a positive integer n and x ≥ 0. Let Q(n, x) be the chance that the nth event of a rate-one Poisson process comes after time x. In such a process the waiting times between events are independent and exponential with mean one. The usual definition is the integral of t raised to n − 1 times exp(−t) from x to infinity, divided by (n − 1)!.

**Problem.** For each positive integer n and x ≥ 0, Q(n, x) equals the probability that a Poisson variable with mean x is less than n.

**How the definition helps.** The nth event comes after time x exactly when fewer than n events have happened by time x. The number of events by time x is a Poisson variable with mean x, so the two probabilities agree. With the integral definition, Wikipedia notes that the formula needs repeated integration by parts. The work moves to showing that the nth arrival time has density t raised to n − 1 times exp(−t), divided by (n − 1)!. Convolving n exponential densities gives this. The first two steps and the convolution are our own.

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

**Definition.** For positive u and v, B(u,v) is the integral of tᵘ⁻¹(1 − t)ᵛ⁻¹ over 0 &lt; t &lt; 1. For real c &gt; b &gt; 0, use u = b and v = c − b. Euler’s definition averages (1 − zt) to the power −a against this weight divided by B(u,v). The usual definition starts from a power series.

**Problem.** Take real a, b and c with c &gt; b &gt; 0 and c − a − b &gt; 0. Then ₂F₁(a,b;c;1) = Γ(c)Γ(c − a − b)/(Γ(c − a)Γ(c − b)).

**How the definition helps.** In our own proof, setting z = 1 combines two powers of 1 − t. The integral becomes B(b,c − a − b)/B(b,c − b). The beta identity B(u,v) = Γ(u)Γ(v)/Γ(u+v) gives the result. The remaining work identifies the integral with the series and justifies its limit at one.

**Paper or page:** [Gauss's Hypergeometric Theorem](https://proofwiki.org/wiki/Gauss's_Hypergeometric_Theorem), [Euler's Integral Representation of Hypergeometric Function](https://proofwiki.org/wiki/Euler's_Integral_Representation_of_Hypergeometric_Function). It says: “F(a,b;c;1) = Γ(c)Γ(c − a − b)/(Γ(c − a)Γ(c − b))”

**Sources:** none listed. No primary source with a working link was found.

### The Bessel generating function gives J₋ₙ = (−1)ⁿJₙ by one substitution

**Remember:** Replacing t by −1/t swaps the orders.

*True by definition. Confidence: medium.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integers n, define Jₙ(x) as the coefficient of tⁿ in the Laurent series of exp((x/2)(t − 1/t)). A Laurent series allows negative powers of t. The usual definition is a power series in x with reciprocal gamma factors, which needs care at negative orders.

**Problem.** For every integer n, J₋ₙ(x) = (−1)ⁿJₙ(x).

**How the definition helps.** The generating function does not change when t is replaced by −1/t. Comparing coefficients of tⁿ before and after this change gives Jₙ = (−1)ⁿJ₋ₙ. From the series definition, one shows that the first n terms vanish, because 1/Γ is zero at nonpositive integers, and then reindexes. The work moves to showing that the coefficients equal the series. Multiply the series for exp(xt/2) and exp(−x/(2t)) and collect powers of t. These steps are our own; Wikipedia says this definition is common for integer order.

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

**How the definition helps.** With Rodrigues’s formula the weight cancels, so the integral pairs q with an nth derivative of the Gaussian exp(−x²/2). Integration by parts n times moves every derivative onto q. The boundary terms vanish because the Gaussian decays fast. The nth derivative of q is zero, since its degree is below n. From the generating function, the usual proof instead integrates a product of two generating functions. The work moves to showing that the two definitions agree, by Taylor expansion of exp(−(x − t)²/2) in t. These proof steps are our own; the nLab page gives only the formula.

**nLab:** [Hermite polynomial](https://ncatlab.org/nlab/show/Hermite+polynomial). It says: “where exp(−) denotes the exponential function and d/dxⁿ denotes the nth derivative with respect to x”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition gives Chebyshev roots and bounds

**Remember:** On the interval from −1 to 1, Tₙ is a cosine in disguise.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)), 26C10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each nonnegative integer n, define Tₙ as the unique polynomial with Tₙ(cos θ) = cos(nθ) for every real θ. Another definition starts with T₀ = 1 and T₁ = x, then uses Tₙ₊₁ = 2xTₙ − Tₙ₋₁ for n ≥ 1.

**Problem.** For n ≥ 1, Tₙ has the n distinct roots cos((2k − 1)π/(2n)), for k = 1, …, n, all between −1 and 1. Also \|Tₙ(x)\| ≤ 1 for every x between −1 and 1.

**How the definition helps.** The cosine definition gives the bound and the roots by evaluating cos(nθ) for 0 ≤ θ ≤ π. Cosine has size at most 1, and it vanishes at the odd multiples of π/2. This gives n distinct roots, since cosine is strictly decreasing on that interval for θ. The work is to prove that Tₙ is a polynomial of degree n, so there are no more roots. The angle-addition formulas give the recurrence, which proves the degree by induction. Starting with the recurrence, one can instead prove the cosine formula first and then read off the bound and roots (our own).

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “Using the trigonometric definition and the fact that cos((2k+1)π/2) = 0, one can show that the roots of Tₙ are”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition makes Chebyshev polynomials compose by multiplying indices

**Remember:** Tₙ multiplies the angle by n, so composing multiplies the factors.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each nonnegative integer n, define Tₙ as the unique polynomial with Tₙ(cos θ) = cos(nθ) for every real θ. Another common definition starts with T₀ = 1 and T₁ = x, then uses Tₙ₊₁ = 2xTₙ − Tₙ₋₁ for n ≥ 1.

**Problem.** For nonnegative integers m and n, Tₘ(Tₙ(x)) = Tₘₙ(x) for every real x.

**How the definition helps.** The cosine definition makes Tₙ multiply the angle by n, so composition multiplies the indices. Indeed, Tₘ(Tₙ(cos θ)) = Tₘ(cos(nθ)) = cos(mnθ). Both polynomials agree for every x between −1 and 1, so they are equal. The work is to show that cos(nθ) is a polynomial in cos θ. The angle-addition formulas give the recurrence and prove existence by induction. If one starts from the recurrence, this link to cosine is an extra step before using the angle proof (our own).

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “The trigonometric definitions of Tₙ and Uₙ imply the composition or nesting properties: Tₘₙ(x) = Tₘ(Tₙ(x)),”

**Sources:** none listed. No primary source with a working link was found.

### The generating function makes the Legendre recurrence a coefficient comparison

**Remember:** Differentiate the generating function in t once and compare neighbouring coefficients.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the nth Legendre polynomial Pₙ as the coefficient of tⁿ in 1/√(1 − 2xt + t²). Rodrigues’s formula instead defines Pₙ as the nth derivative of (x² − 1)ⁿ, divided by 2ⁿn!.

**Problem.** For n ≥ 1, (n + 1)Pₙ₊₁(x) = (2n + 1)xPₙ(x) − nPₙ₋₁(x).

**How the definition helps.** The generating function G satisfies a simple first-order equation in t, and the recurrence is that equation read coefficient by coefficient. The equation is (1 − 2xt + t²)·∂G/∂t = (x − t)G. Comparing the coefficients of tⁿ gives the recurrence. From Rodrigues’s formula, the recurrence needs a longer calculation with repeated derivatives. The work moves to showing that the two definitions agree. One way is to show that both families are orthogonal on \[−1, 1\], have degree n and equal one at x = 1. These proof steps are our own; the nLab page states both definitions and the recurrence.

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

**How the definition helps.** The product definition makes the reflection formula a cancellation followed by the sine product. Telescoping the ratios of successive-argument factors gives Γ(1 − z) = −zΓ(−z). In the product for Γ(z)Γ(−z), the powers of 1 + 1/n cancel. Therefore the reciprocal of Γ(z)Γ(1 − z) is z times the product of 1 − z²/n². Euler’s sine product identifies this with sin(πz)/π. Our own comparison with the integral definition shifts the work to proving convergence, consistency with the integral, and Euler’s sine product.

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

### The dilogarithm correction cancels its jump

**Remember:** Add the argument term to cancel the imaginary jump on the cut.

*Makes the theorem clean to state or prove.* MSC 33B30 (Higher logarithm functions). arXiv math.CV. Level 3: graduate.

**Definition.** For z outside the real ray \[1,∞), define Li₂(z) by integrating −log(1 − t)/t from 0 to z using the principal logarithm. For z ≠ 0, define D(z) = Im Li₂(z) + arg(1 − z) log\|z\|. Here arg takes values between −π and π.

**Problem.** The Bloch–Wigner dilogarithm extends to a single-valued continuous real function on the complex plane.

**How the definition helps.** In our own proof, the added term cancels the jump in the imaginary part of Li₂. At x &gt; 1 the upper and lower limits of Im Li₂ are π log x and −π log x. Integrating the imaginary part of −log(1 − z)/z along the cut gives these limits. The correction has the opposite limits, so set D(x) = 0 there. Near zero, arg(1 − z) is of order \|z\|, so its product with log\|z\| tends to zero. Near one, Li₂ has a finite real limit because its derivative has only an integrable logarithmic singularity. The bounded argument times log\|z\| tends to zero there.

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “The Bloch–Wigner dilogarithm is defined by D(z) ≔ Im(Li₂(z)) + arg(1−z) log\|z\|.”

**Wikipedia:** [Dilogarithm](https://en.wikipedia.org/wiki/Dilogarithm). It says: “D(z) = Im Li₂(z) + arg(1−z) log\|z\|.”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://doi.org/10.1007/978-3-540-30308-4_1)

### Regularizing Gauss removes parameter poles

**Remember:** Use reciprocal gamma in the coefficients, including its zeros.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CV. Level 3: graduate.

**Definition.** Write (a)ₙ for the product of n consecutive factors starting at a and increasing by one, with (a)₀ = 1. Define the regularized Gauss series by giving zⁿ the coefficient (a)ₙ(b)ₙ/(n!·Γ(c+n)). Use zero for 1/Γ at each nonpositive integer. Away from those integers the series equals ₂F₁(a,b;c;z)/Γ(c).

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

**Definition.** For x &gt; 0, define the modified Bessel function K of order ν by an integral. Take one half of the integral of exp(−x cosh t + νt) over all real t. Pair t with −t to get the usual integral with cosh(νt) over positive t. Another definition selects the decaying solution of the modified Bessel equation with a specified scale.

**Problem.** For each x &gt; 0, the logarithm of K at x is convex in the real order ν.

**How the definition helps.** In our own proof, the order ν appears only in a positive exponential, so interpolation of orders takes geometric means of integrands. Write K(ν) for the integral at fixed x. Hölder’s inequality gives K((1−s)ν+sμ) ≤ K(ν)¹⁻ˢK(μ)ˢ for 0 &lt; s &lt; 1. Taking logarithms gives convexity. The remaining work identifies the integral with the normalized decaying solution.

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “K₍α₎(x) = ∫₀∞ exp(−x cosh t) cosh αt dt.”

**Sources:** none listed. No primary source with a working link was found.

### Rodrigues’s formula makes the Jacobi reflection symmetry a change of variable

**Remember:** Reflection swaps the two weight factors and negates each derivative.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Let w(x) be (1 − x) raised to α times (1 + x) raised to β, with α, β &gt; −1. Rodrigues’s formula defines P(n; α, β) as (−1)ⁿ/(2ⁿn!) times 1/w times the nth derivative of w·(1 − x²)ⁿ. The usual definition is a terminating Gauss hypergeometric series, a power series that stops after finitely many terms.

**Problem.** For α, β &gt; −1, P(n; α, β)(−x) = (−1)ⁿP(n; β, α)(x).

**How the definition helps.** Replacing x by −x swaps 1 − x and 1 + x, so it swaps the roles of α and β in the formula. Each of the n derivatives also picks up a factor −1 by the chain rule. Together these give the sign (−1)ⁿ. From the hypergeometric series, which is centred at x = 1, the symmetry needs a transformation formula. The work moves to showing that the two definitions agree, by expanding the derivative with the Leibniz rule. These proof steps are our own; Wikipedia calls Rodrigues’s formula an equivalent definition.

**Wikipedia:** [Jacobi polynomials](https://en.wikipedia.org/wiki/Jacobi_polynomials). It says: “An equivalent definition is given by Rodrigues' formula:”

**Sources:** none listed. No primary source with a working link was found.

### The generating function makes the Gegenbauer derivative rule one differentiation

**Remember:** One derivative raises the parameter and lowers the degree.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** For λ &gt; 0, define C(n; λ)(x) as the coefficient of tⁿ in (1 − 2xt + t²) raised to −λ. The alternative uses orthogonal polynomials for the weight (1 − x²) raised to λ − ½, normalized at x = 1. That value is 2λ(2λ + 1)⋯(2λ + n − 1)/n!, and one when n = 0.

**Problem.** For n ≥ 1 and λ &gt; 0, the derivative of C(n; λ) is 2λ·C(n − 1; λ + 1).

**How the definition helps.** Differentiating the generating function in x gives 2λt times the generating function for λ + 1. Comparing coefficients of tⁿ gives the rule. From the orthogonality definition, the rule needs a proof that the derivatives are orthogonal for the shifted weight. The work moves to showing that the two definitions agree. One route checks Gegenbauer’s differential equation, which gives orthogonality, and computes the value at x = 1. These proof steps are our own; Wikipedia gives the generating function as one of several characterizations.

**Wikipedia:** [Gegenbauer polynomials](https://en.wikipedia.org/wiki/Gegenbauer_polynomials). It says: “The polynomials can be defined in terms of their generating function:”

**Sources:** none listed. No primary source with a working link was found.

### Defining spherical harmonics by harmonic polynomials makes each degree rotation invariant

**Remember:** Rotations preserve degree and commute with the Laplacian.

*True by definition.* MSC 33C55 (Spherical harmonics). arXiv math.CA. Level 3: graduate.

**Definition.** A degree n spherical harmonic is the restriction to the unit sphere of a harmonic homogeneous polynomial of degree n in x, y, z. Harmonic means that the Laplacian, the sum of the three second partial derivatives, is zero. The usual definition uses explicit formulas in spherical coordinates with associated Legendre functions.

**Problem.** For each n, every rotation of the sphere maps degree n spherical harmonics to degree n spherical harmonics.

**How the definition helps.** Rotations preserve both conditions in the definition, so they preserve the space of degree n harmonics. A homogeneous polynomial of degree n composed with a rotation is again homogeneous of degree n. The Laplacian commutes with rotations, so harmonic polynomials stay harmonic. From the coordinate formulas, the same fact needs the addition theorem or Wigner’s rotation matrices. The work moves to showing that the coordinate formulas give a basis of the polynomial space. Separation of variables and a dimension count of 2n + 1 do this. These proof steps are our own; Wikipedia gives the polynomial description.

**Wikipedia:** [Spherical harmonics](https://en.wikipedia.org/wiki/Spherical_harmonics). It says: “The spherical harmonics can be expressed as the restriction to the unit sphere of certain polynomial functions”

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

### A theta shift reindexes terms

**Remember:** One theta shift adds a full turn, and the other shifts the summation index.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 3: graduate.

**Definition.** Use θ(z,τ) = ∑ exp(πin²τ + 2πinz), summed over all integers n, with τ in the upper half-plane. The same theta function can also be given by an infinite product.

**Problem.** The Jacobi theta function obeys θ(z + 1,τ) = θ(z,τ) and θ(z + τ,τ) = exp(−πiτ − 2πiz) θ(z,τ).

**How the definition helps.** In our own proof, a unit shift leaves each term unchanged, and a shift by τ completes a square in n. Replacing n by n+1 leaves the sum unchanged because it converges absolutely. The cited formula uses πz as its argument and q = exp(2πiτ). Jacobi’s triple product theorem identifies the sum with the infinite product.

**nLab:** [Jacobi theta function](https://ncatlab.org/nlab/show/Jacobi+theta+function). It says: “The fundamental example of theta functions is the Jacobi theta function given by”

**Paper or page:** [Kronecker theta function and a decomposition theorem for theta functions I](https://arxiv.org/abs/2012.01670v1). It says: “θ₃(z\|τ) = θ₃(z+π\|τ) = q¹ᐟ² e²ⁱᶻ θ₃(z+πτ\|τ)”

**Sources:** none listed. No primary source with a working link was found.

### Elliptic gamma factors cancel under inversion

**Remember:** The inversion swaps the top and bottom of every factor.

*True by definition.* MSC 33E05 (Elliptic functions and integrals), 33D65. arXiv math.CV. Level 3: graduate.

**Definition.** Fix nonzero complex p and q with \|p\|, \|q\| &lt; 1. Define elliptic gamma by a product over pairs of nonnegative integers m and n. Each factor is (1 − pᵐ⁺¹qⁿ⁺¹/z)/(1 − pᵐqⁿz). An alternative starts with a series for its logarithm on \|pq\| &lt; \|z\| &lt; 1.

**Problem.** For z ≠ 0, the elliptic gamma values at z and pq/z multiply to one wherever both are finite. The identity extends across isolated poles by cancellation.

**How the definition helps.** In our own calculation, replacing z by pq/z interchanges the numerator and denominator of every factor. The work lies in proving convergence away from poles. Expanding the logarithms there on \|pq\| &lt; \|z\| &lt; 1 gives the alternative series.

**Wikipedia:** [Elliptic gamma function](https://en.wikipedia.org/wiki/Elliptic_gamma_function). It says: “Γ(z;p,q) = 1/Γ(pq/z;p,q)”

**Sources:**

- [S. N. M. Ruijsenaars, First order analytic difference equations and integrable quantum systems (1997)](https://doi.org/10.1063/1.531809)

### Subtracting 1/λ² makes the Weierstrass ℘ series converge without a constant

**Remember:** Subtract each pole's value at zero, and ℘ converges with no constant term.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals), 30D30. arXiv math.CV. Level 3: graduate.

**Definition.** A lattice Λ is the set of all integer combinations of two periods that are independent over ℝ. For such a lattice, ℘(z) = 1/z² + Σ over nonzero λ in Λ of (1/(z − λ)² − 1/λ²). The series converges absolutely, locally uniformly away from the lattice.

**Problem.** ℘ is an even elliptic function with periods in Λ and a double pole at each lattice point. It satisfies (℘′)² = 4℘³ − g₂℘ − g₃, where g₂ and g₃ are Eisenstein sums of the lattice.

**How the definition helps.** Each subtracted term makes the summand small, of size 1/\|λ\|³, so the series converges absolutely and can be rearranged. The plain sum of 1/(z − λ)² does not converge absolutely, because the sum of 1/\|λ\|² over a lattice diverges (our own). The same normalization gives ℘(z) − 1/z² the value 0 at z = 0, so the Laurent series has no constant term. Then a combination of powers of ℘ and ℘′ has no pole and is constant by Liouville's theorem, which gives the differential equation. With a constant term c, the equation would gain a ℘² term (our own).

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function), [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “It is constructed in such a way that it has a pole of order two at every lattice point. The term −1/λ² is there to make the series convergent.”

**Sources:** none listed. No primary source with a working link was found.

### Two periods forbid lone simple poles

**Remember:** Opposite edges cancel, so one nonzero residue cannot stand alone.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 3: graduate.

**Definition.** An elliptic function is meromorphic on the complex plane, so its only singularities are poles. It must repeat under two shifts that are linearly independent over the real numbers. A singly periodic meromorphic function only has to repeat under one shift.

**Problem.** An elliptic function cannot have exactly one pole per period parallelogram if that pole is simple.

**How the definition helps.** In our own proof, the two periods cancel the integrals along opposite sides of a period parallelogram whose boundary avoids all poles. The residue theorem then gives zero for the sum of residues inside. A residue is the coefficient of 1/(z − a) near a pole a. A simple pole has nonzero residue. Our own counterexample, cot z, has one simple pole per period strip.

**Wikipedia:** [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “Every elliptic function has finitely many poles in ℂ/Λ and the sum of its residues is zero.”

**Sources:** none listed. No primary source with a working link was found.

### A Gaussian contour makes reciprocal gamma entire

**Remember:** Gaussian decay lets the reciprocal gamma integral work at every parameter.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CV. Level 4: research.

**Definition.** Fix σ &gt; 0 and put w = σ + it. Define reciprocal gamma by integrating w to the power 1 − 2z times exp(w²) over all real t, then dividing by π. Use the logarithm of w whose imaginary part lies between −π/2 and π/2. The usual definition takes the reciprocal of the continued gamma function.

**Problem.** The reciprocal gamma function is entire, meaning that it is complex differentiable everywhere.

**How the definition helps.** In our own proof, the integrand is entire in z and the Gaussian controls its growth along the contour. Our own bound uses that the other factor grows at most as a power of \|t\| when z ranges over a compact set. In our own account, the work is to prove that the contour integral equals the reciprocal of gamma.

**Paper or page:** [A Unifying Integral Representation of the Gamma Function and Its Reciprocal](https://arxiv.org/abs/2506.12112v1). It says: “1/Γ(z) = (1/π)G(z), ∀ z ∈ ℂ”

**Sources:**

- [Peter Reinhard Hansen and Chen Tong, A Unifying Integral Representation of the Gamma Function and Its Reciprocal, Theorem 1](https://arxiv.org/abs/2506.12112v1)

### Nonmatching multipliers make residues decisive

**Remember:** Exclude the matching multipliers, and no pole-free term survives.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 4: research.

**Definition.** Fix complex y and τ with Im τ &gt; 0, and put q = exp(2πiτ). Consider functions analytic except at poles, unchanged by a shift of π, and multiplied by exp(−2iy) under a shift of πτ. Require exp(2iy) ≠ qⁿ for every integer n.

**Problem.** For functions in this class with only simple poles, one period parallelogram contains all the pole data needed to recover the function. At each pole a, record its location and its residue, the coefficient of 1/(z − a).

**How the definition helps.** In our own proof, excluding these multipliers forces two functions with the same pole data to agree. The difference has no poles, so its π-periodicity gives a series in integral powers of exp(2iz). The second shift multiplies the nth power by qⁿ, forcing each coefficient to vanish. At y = 0, adding a constant preserves the pole data. The cited theorem reconstructs the function using shifts of a function with residue one and the prescribed shift laws.

**Paper or page:** [Kronecker theta function and a decomposition theorem for theta functions I](https://arxiv.org/abs/2012.01670v1). It says: “where e²ⁱʸ ≠ qⁿ for n ∈ ℤ.”

**Sources:**

- [Zhi-Guo Liu, Kronecker theta function and a decomposition theorem for theta functions I, Theorem 1.7](https://arxiv.org/abs/2012.01670v1)

### Orbital residues decide elliptic summability up to two terms

**Remember:** Zero orbital residues make f summable, apart from two explicit extra terms.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 33E05 (Elliptic functions and integrals), 39A10, 14K20. arXiv math.NT, math.CV. Level 4: research.

**Definition.** An elliptic function f is summable for a shift by s if f = g(z + s) − g(z) for an elliptic function g. Elliptic orbital residues are numbers computed from the poles of f, grouped by their orbits under the shift. A non-torsion point s is one whose multiples never return to zero on the curve.

**Problem.** The Corollary, for a fixed choice it calls an analytic pinning, states when all orbital residues of f vanish. This happens exactly when f minus a summable function equals a + b(ζ(z + s) − ζ(z)), for constants a and b. Here ζ is the Weierstrass zeta function, whose derivative is minus the Weierstrass ℘ function.

**How the definition helps.** Our own reason: the residues reduce summability to a check that a list of numbers is zero, up to two explicit terms. The abstract calls the residues only a partial obstruction. The paper says it refines them into a complete obstruction. The corollary shows what remains: a constant and one multiple of ζ(z + s) − ζ(z). Our own note: that leftover part needs a separate test.

**Paper or page:** [Summability of Elliptic Functions via Residues](https://arxiv.org/abs/2503.22770). It says: “Dreyfus, Hardouin, Roques, and Singer introduced a notion of elliptic orbital residues, which altogether serve as a partial obstruction to summability for elliptic functions with respect to the shift by a non-torsion point over an elliptic curve.”

**Sources:**

- [Matthew Babbitt, Summability of Elliptic Functions via Residues, arXiv:2503.22770 (2025)](https://arxiv.org/abs/2503.22770)

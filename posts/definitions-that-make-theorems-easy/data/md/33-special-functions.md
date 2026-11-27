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

### The Bessel generating function gives J₋ₙ = (−1)ⁿJₙ by one substitution

**Remember:** Replacing t by −1/t swaps the orders.

*True by definition. Confidence: medium.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integers n, define Jₙ(x) as the coefficient of tⁿ in the Laurent series of exp((x/2)(t − 1/t)). A Laurent series allows negative powers of t. The usual definition is a power series in x with reciprocal gamma factors, which needs care at negative orders.

**Problem.** For every integer n, J₋ₙ(x) = (−1)ⁿJₙ(x).

**How the definition helps.** The generating function does not change when t is replaced by −1/t. Comparing coefficients of tⁿ before and after this change gives Jₙ = (−1)ⁿJ₋ₙ. From the series definition, one shows that the first n terms vanish, because 1/Γ is zero at nonpositive integers, and then reindexes. The work moves to showing that the coefficients equal the series. Multiply the series for exp(xt/2) and exp(−x/(2t)) and collect powers of t. These steps are our own; Wikipedia says this definition is common for integer order.

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “is often defined via a Laurent series for a generating function:”

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

### Euler’s product gives the Gamma reflection formula by cancellation

**Remember:** Pair the factors for z and −z to obtain Euler’s product for sine.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA, math.CV. Level 3: graduate.

**Definition.** Define Γ(z) as 1/z times the product of (1 + 1/n)ᶻ/(1 + z/n) over positive integers n. The product applies away from zero and the negative integers. The usual starting definition integrates exp((z − 1) log t − t) over t &gt; 0, where it converges for positive real part of z.

**Problem.** For every noninteger complex z, Γ(z)Γ(1 − z) = π/sin(πz).

**How the definition helps.** The product definition makes the reflection formula a cancellation followed by the sine product. Telescoping the ratios of successive-argument factors gives Γ(1 − z) = −zΓ(−z). In the product for Γ(z)Γ(−z), the powers of 1 + 1/n cancel. Therefore the reciprocal of Γ(z)Γ(1 − z) is z times the product of 1 − z²/n². Euler’s sine product identifies this with sin(πz)/π. Our own comparison with the integral definition shifts the work to proving convergence, consistency with the integral, and Euler’s sine product.

**Wikipedia:** [Gamma function](https://en.wikipedia.org/wiki/Gamma_function). It says: “With Euler's infinite product Γ(z) = (1/z) ∏ₙ₌₁<sup>∞</sup> (1+1/n)ᶻ/(1 + z/n) compute”

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

### Subtracting 1/λ² makes the Weierstrass ℘ series converge without a constant

**Remember:** Subtract each pole's value at zero, and ℘ converges with no constant term.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals), 30D30. arXiv math.CV. Level 3: graduate.

**Definition.** A lattice Λ is the set of all integer combinations of two periods that are independent over ℝ. For such a lattice, ℘(z) = 1/z² + Σ over nonzero λ in Λ of (1/(z − λ)² − 1/λ²). The series converges absolutely, locally uniformly away from the lattice.

**Problem.** ℘ is an even elliptic function with periods in Λ and a double pole at each lattice point. It satisfies (℘′)² = 4℘³ − g₂℘ − g₃, where g₂ and g₃ are Eisenstein sums of the lattice.

**How the definition helps.** Each subtracted term makes the summand small, of size 1/\|λ\|³, so the series converges absolutely and can be rearranged. The plain sum of 1/(z − λ)² does not converge absolutely, because the sum of 1/\|λ\|² over a lattice diverges (our own). The same normalization gives ℘(z) − 1/z² the value 0 at z = 0, so the Laurent series has no constant term. Then a combination of powers of ℘ and ℘′ has no pole and is constant by Liouville's theorem, which gives the differential equation. With a constant term c, the equation would gain a ℘² term (our own).

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function), [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “It is constructed in such a way that it has a pole of order two at every lattice point. The term −1/λ² is there to make the series convergent.”

**Sources:** none listed. No primary source with a working link was found.

### Orbital residues decide elliptic summability up to two terms

**Remember:** Zero orbital residues make f summable, apart from two explicit extra terms.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 33E05 (Elliptic functions and integrals), 39A10, 14K20. arXiv math.NT, math.CV. Level 4: research.

**Definition.** An elliptic function f is summable for a shift by s if f = g(z + s) − g(z) for an elliptic function g. Elliptic orbital residues are numbers computed from the poles of f, grouped by their orbits under the shift. A non-torsion point s is one whose multiples never return to zero on the curve.

**Problem.** The Corollary, for a fixed choice it calls an analytic pinning, states when all orbital residues of f vanish. This happens exactly when f minus a summable function equals a + b(ζ(z + s) − ζ(z)), for constants a and b. Here ζ is the Weierstrass zeta function, whose derivative is minus the Weierstrass ℘ function.

**How the definition helps.** Our own reason: the residues reduce summability to a check that a list of numbers is zero, up to two explicit terms. The abstract calls the residues only a partial obstruction. The paper says it refines them into a complete obstruction. The corollary shows what remains: a constant and one multiple of ζ(z + s) − ζ(z). Our own note: that leftover part needs a separate test.

**Paper or page:** [Summability of Elliptic Functions via Residues](https://arxiv.org/abs/2503.22770). It says: “Dreyfus, Hardouin, Roques, and Singer introduced a notion of elliptic orbital residues, which altogether serve as a partial obstruction to summability for elliptic functions with respect to the shift by a non-torsion point over an elliptic curve.”

**Sources:**

- [Matthew Babbitt, Summability of Elliptic Functions via Residues, arXiv:2503.22770 (2025)](https://arxiv.org/abs/2503.22770)

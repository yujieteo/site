### Defining cosh and sinh by exponentials makes their addition laws algebra

**Remember:** Cosh is the even half of eᵗ, sinh the odd half.

*True by definition. Confidence: medium.* MSC 33B10 (Exponential and trigonometric functions), 26A09. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For every real t, cosh t and sinh t are the even and odd parts of eᵗ: cosh t = (eᵗ + e⁻ᵗ)/2 and sinh t = (eᵗ − e⁻ᵗ)/2.

**Problem.** For real x and y, sinh(x + y) = sinh x cosh y + cosh x sinh y.

**How the definition helps.** The definition turns each product on the right into products of exponentials, which the law eˣeʸ = eˣ⁺ʸ combines (our own). Expanding cancels the mixed terms eˣ⁻ʸ and eʸ⁻ˣ and leaves (eˣ⁺ʸ − e⁻ˣ⁻ʸ)/2 = sinh(x + y).

**Wikipedia:** [Hyperbolic functions](https://en.wikipedia.org/wiki/Hyperbolic_functions). It says: “sinh(x + y) = sinh x cosh y + cosh x sinh y”

**Sources:**

- [James McMahon, Hyperbolic Functions, John Wiley and Sons (1896).](https://archive.org/details/hyperbolicfuncti031883mbp)

### Exponential sums make hyperbolic sine and cosine swap derivatives

**Remember:** Differentiate and the sign on exp(−x) flips.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The hyperbolic cosine and sine are the even and odd parts of exp(x): cosh x = (exp(x) + exp(−x))/2 and sinh x = (exp(x) − exp(−x))/2.

**Problem.** The derivative of cosh x is sinh x. The derivative of sinh x is cosh x.

**How the definition helps.** Differentiating exp(−x) gives −exp(−x), so differentiation flips the sign between the two terms and swaps the two formulas (our own).

**Paper or page:** [Derivative of Hyperbolic Cosine](https://proofwiki.org/wiki/Derivative_of_Hyperbolic_Cosine). It says: “d(cosh x)/dx = sinh x”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative inputs pick the plus root for inverse hyperbolic cosine

**Remember:** Take t ≥ 0, so eᵗ is the larger root.

*Rules out counterexamples.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x ≥ 1, arcosh x is the unique t ≥ 0 with cosh t = x, where cosh t = (eᵗ + e⁻ᵗ)/2.

**Problem.** For x ≥ 1, arcosh x = ln(x + √(x² − 1)).

**How the definition helps.** The condition t ≥ 0 means eᵗ ≥ 1, which picks the larger root of a quadratic. With y = eᵗ, cosh t = x becomes y² − 2xy + 1 = 0, so y = x + √(x² − 1) (our own). Without the condition, both 1 and −1 solve cosh t = cosh 1.

**Wikipedia:** [Inverse hyperbolic functions](https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions). It says: “arcosh x = ln(x + √(x² − 1))”

**Sources:** none listed. No primary source with a working link was found.

### Polar form gives the exact periods of the complex exponential

**Remember:** The real part sets the size and the imaginary part sets the angle.

*True by definition. Confidence: medium.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CV. Level 1: early undergraduate.

**Definition.** For real x and y, define exp(x + iy) = eˣ(cos y + i sin y): the real part x sets the distance eˣ from zero, and the imaginary part y sets the angle.

**Problem.** The complex exponential maps onto the nonzero complex numbers. Two inputs give the same output exactly when they differ by an integer multiple of 2πi.

**How the definition helps.** Every nonzero w has a distance r &gt; 0 and an angle, so x = ln r and y equal to that angle give exp(x + iy) = w (our own). The distance fixes x exactly and the angle fixes y up to whole turns, so two inputs agree exactly when they differ by 2πik (our own).

**Paper or page:** [Period of Complex Exponential Function](https://proofwiki.org/wiki/Period_of_Complex_Exponential_Function). It says: “exp(z + 2kπi) = exp z”

**Sources:** none listed. No primary source with a working link was found.

### The arctangent integral gives the Gregory series for π

**Remember:** Integrate the geometric sum to get the alternating odd reciprocals.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define arctan x as the integral from 0 to x of 1/(1 + t²), which for \|t\| &lt; 1 is the sum of the geometric series 1 − t² + t⁴ − ⋯ (our own).

**Problem.** For \|x\| ≤ 1, arctan x = x − x³/3 + x⁵/5 − ⋯. At x = 1 this gives π/4 = 1 − 1/3 + 1/5 − ⋯.

**How the definition helps.** Integrating the finite geometric sum 1 − t² + ⋯ + (−t²)ᴺ term by term gives the partial series (our own). The leftover integral is at most \|x\|²ᴺ⁺³/(2N + 3) ≤ 1/(2N + 3) for \|x\| ≤ 1, so it tends to zero (our own). This integral is the inverse of tangent because its derivative is 1/(1 + x²) (our own).

**Paper or page:** [Gregory Series](https://proofwiki.org/wiki/Gregory_Series). It says: “θ = tan θ − ⅓ tan³ θ + ⅕ tan⁵ θ − ⋯”

**Sources:** none listed. No primary source with a working link was found.

### The chosen cosine branch fixes the sign of its inverse derivative

**Remember:** Choose angles with positive sine to get a negative derivative.

*Rules out counterexamples.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define arccos x as the unique angle in \[0, π\] whose cosine is x. On this interval sine is positive except at the two ends.

**Problem.** For −1 &lt; x &lt; 1, the derivative of arccos x is −1/√(1 − x²).

**How the definition helps.** Since sin(arccos x) &gt; 0 for −1 &lt; x &lt; 1, the inverse rule gives derivative −1/sin(arccos x) = −1/√(1 − x²). Choosing angles in \[−π, 0\] instead would make sine negative and the slope +1 at zero (our own).

**Wikipedia:** [Inverse trigonometric functions](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions). It says: “This means that θ could be either π/2 or −π/2.”

**Sources:** none listed. No primary source with a working link was found.

### Unit-circle coordinates give the Pythagorean identity

**Remember:** Points on the unit circle have squared coordinates summing to one.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 97G60. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** Turn through θ radians from (1,0) around the unit circle x² + y² = 1, counterclockwise for positive θ. The endpoint is (cos θ, sin θ).

**Problem.** For every real angle θ, cos²θ + sin²θ = 1.

**How the definition helps.** The point (cos θ, sin θ) lies on the circle x² + y² = 1, so the identity is the circle’s equation. For acute angles, the triangle definition gives the same values because the hypotenuse has length 1.

**Wikipedia:** [Trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions). It says: “And since the equation x²+y²=1 holds for all points P = (x,y) on the unit circle, this definition of cosine and sine also satisfies the Pythagorean identity.”

**Paper or page:** [Sum of Squares of Sine and Cosine](https://proofwiki.org/wiki/Sum_of_Squares_of_Sine_and_Cosine). It says: “cos² x + sin² x = 1 where sin and cos are sine and cosine.”

**Sources:** none listed. No primary source with a working link was found.

### Unit-circle coordinates make sine and cosine periodic

**Remember:** One more full turn lands on the same point.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 97G60. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** Start at (1, 0) and travel a signed distance θ along the unit circle, with positive distance measured counterclockwise. Define cos θ as the horizontal coordinate of the endpoint and sin θ as the vertical coordinate.

**Problem.** For every real θ and every integer k, sin(θ + 2πk) = sin θ and cos(θ + 2πk) = cos θ.

**How the definition helps.** Travelling one more circumference, 2π, returns to the same point of the unit circle, so both coordinates repeat. Any whole number k of extra turns does the same.

**Wikipedia:** [Trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions). It says: “the points A, B, C, D, and E are the same for two angles whose difference is an integer multiple of 2π. Thus trigonometric functions are periodic functions with period 2π.”

**Sources:** none listed. No primary source with a working link was found.

### One Lambert branch gives uniqueness

**Remember:** Keep w at least minus one to get a single inverse.

*Rules out counterexamples.* MSC 33E20 (Other functions defined by series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The principal Lambert branch W₀ is the inverse of w ↦ w exp(w) on w ≥ −1, where this function strictly increases from −1/e to infinity (our own).

**Problem.** For every x ≥ −1/e, the equation w exp(w) = x has exactly one real solution with w ≥ −1. It is W₀(x).

**How the definition helps.** For w &gt; −1 the derivative exp(w)(1 + w) is positive, so each x ≥ −1/e has exactly one preimage with w ≥ −1 (our own). Without the restriction, x = −2 exp(−2) also has the solution w = −2 on the other branch (our own).

**nLab:** [Lambert W-function](https://ncatlab.org/nlab/show/Lambert+W-function). It says: “In complex analysis, the Lambert W-function is a multi-branched function inverse to the function f(z) = zeᶻ.”

**Wikipedia:** [Lambert W function](https://en.wikipedia.org/wiki/Lambert_W_function). It says: “When dealing with real numbers only, the two branches W₀ and W₋₁ suffice”

**Sources:**

- [R. M. Corless et al., On the Lambert W function (1996)](https://doi.org/10.1007/bf02124750)

### An exponential average makes sinc entire

**Remember:** The exponential average has no division by zero.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define normalized sinc(z) as the average of exp(2πizt) over t in \[−½, ½\], an integral with no division.

**Problem.** Normalized sinc is entire, meaning complex differentiable everywhere, and has value 1 at zero.

**How the definition helps.** An average of exp(2πizt) over a bounded interval is entire, because it expands as a power series that converges on every bounded set of z (our own). At z = 0 the integrand is 1, so the average is 1. For z ≠ 0, integrating gives sin(πz)/(πz).

**Wikipedia:** [Sinc function](https://en.wikipedia.org/wiki/Sinc_function). It says: “The normalized sinc function is the Fourier transform of the rectangular function with no scaling.”

**Sources:** none listed. No primary source with a working link was found.

### An open strip makes the principal logarithm holomorphic

**Remember:** A branch cut keeps the logarithm away from its jump.

*Rules out counterexamples.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The principal logarithm is the inverse of the exponential restricted to the open strip −π &lt; Im z &lt; π, which the exponential maps one-to-one onto the plane minus the ray (−∞, 0\].

**Problem.** The principal logarithm is holomorphic on the slit plane and its derivative is 1/z.

**How the definition helps.** On the strip the exponential is a bijection onto the slit plane with nonzero derivative exp z, so the complex inverse function theorem gives derivative 1/z (our own proof). Removing the ray removes the jump: at −1 the limits from above and below would be iπ and −iπ (our own example).

**Wikipedia:** [Complex logarithm](https://en.wikipedia.org/wiki/Complex_logarithm). It says: “There is no continuous complex logarithm function defined on all of ℂ∗.”

**Paper or page:** [Theorem 6.2. (Branch cut functions)](https://venhance.github.io/napkin/Napkin.pdf). It says: “There exist holomorphic functions”

**Sources:** none listed. No primary source with a working link was found.

### Defining π through the exponential gives Euler’s identity

**Remember:** π is where exp(it) first reaches −1.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 26A09. arXiv math.CA, math.CV. Level 2: later undergraduate.

**Definition.** Define π as the least positive real t with exp(it) = −1, where i² = −1.

**Problem.** exp(iπ) = −1. Also, exp(z + 2πi) = exp(z) for every complex number z.

**How the definition helps.** Euler’s identity is the condition that defines π, and squaring it gives exp(2πi) = 1, so the addition law gives the period. The work is to show that such a least t exists. The nLab does this by showing that t ↦ exp(it) covers the whole circle.

**nLab:** [pi](https://ncatlab.org/nlab/show/pi). It says: “We may define π to be the least positive t such that φ(t) = −1”

**Sources:** none listed. No primary source with a working link was found.

### Exponential definitions make the cosine product-to-sum rule algebra

**Remember:** Cosine averages opposite exponentials, so products pair into two cosines.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 30D20. arXiv math.CA, math.CV. Level 2: later undergraduate.

**Definition.** For real x, cos x is the average of the opposite exponentials exp(ix) and exp(−ix), where i² = −1.

**Problem.** For all real a and b, 2 cos a cos b = cos(a − b) + cos(a + b).

**How the definition helps.** Multiplying two such averages gives four exponentials, with exponents ±i(a + b) and ±i(a − b) by the addition law. Pairing opposite exponents gives cos(a + b) + cos(a − b) with the factor 2 (our own calculation).

**nLab:** [trigonometric function](https://ncatlab.org/nlab/show/trigonometric+function). It says: “The most useful modern approach to cos and sin comes from taking Euler's formula as a working definition”

**Wikipedia:** [Euler's formula](https://en.wikipedia.org/wiki/Euler%27s_formula). It says: “Euler's formula, the definitions of the trigonometric functions and the standard identities for exponentials are sufficient to easily derive most trigonometric identities.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperbola coordinates give the identity cosh²t − sinh²t = 1

**Remember:** The point (cosh t, sinh t) sits on x² − y² = 1 by construction.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 26A09. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Take the point (x, y) on the right branch of the hyperbola x² − y² = 1 that bounds a sector of signed area t/2 from (1, 0), negative below the axis. Define cosh t = x and sinh t = y.

**Problem.** For every real t, cosh²t − sinh²t = 1.

**How the definition helps.** The point (cosh t, sinh t) lies on x² − y² = 1 by construction. To link this to exponentials, writing the area as an integral of 1/u shows x + y = eᵗ (our own).

**Wikipedia:** [Hyperbolic functions](https://en.wikipedia.org/wiki/Hyperbolic_functions). It says: “Just as the points (cos t, sin t) form a circle with a unit radius, the points (cosh t, sinh t) form the right half of the unit hyperbola.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithms modulo full turns turn every product into a sum

**Remember:** Add logarithms as classes and keep no record of full turns.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The logarithm of a nonzero complex number w is the class of all z with exp z = w. Any two members of the class differ by an integer multiple of 2πi.

**Problem.** The logarithm class of a product is the sum of the logarithm classes of its nonzero factors.

**How the definition helps.** If exp z = w and exp z′ = w′, then exp(z + z′) = ww′, and changing either choice adds only a multiple of 2πi (our own proof). With principal values only, two angles of 3π/4 add to 3π/2, which is outside (−π, π\] (our own example).

**Wikipedia:** [Complex logarithm](https://en.wikipedia.org/wiki/Complex_logarithm). It says: “the two sides can differ by an integer multiple of 2πi”

**Sources:** none listed. No primary source with a working link was found.

### One complex product gives both trigonometric addition laws

**Remember:** Multiply once to add both angles.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define cos t and sin t as the real and imaginary parts of exp(it), where i² = −1, so that multiplying exponentials adds the angles.

**Problem.** For real a and b, cos(a + b) = cos a cos b − sin a sin b. Also, sin(a + b) = sin a cos b + cos a sin b.

**How the definition helps.** Expanding exp(i(a + b)) = exp(ia)exp(ib) gives (cos a cos b − sin a sin b) + i(sin a cos b + cos a sin b). The real and imaginary parts give the two laws (our own proof). The work lies in the exponential addition law.

**Paper or page:** [Euler's Formula/Real Domain](https://proofwiki.org/wiki/Euler's_Formula/Real_Domain). It says: “eⁱᶿ = cos θ + i sin θ”

**Sources:** none listed. No primary source with a working link was found.

### The exponential definition makes de Moivre’s formula an exponent law

**Remember:** The n-th power of exp(ix) multiplies the angle by n.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions), 97F50. arXiv math.CV, math.HO. Level 2: later undergraduate.

**Definition.** For real x, define cos x and sin x as the real and imaginary parts of exp(ix), where i² = −1, so cos x + i sin x = exp(ix).

**Problem.** For every integer n and real x, (cos x + i sin x)ⁿ = cos nx + i sin nx.

**How the definition helps.** The exponential definition makes the formula the integer power law exp(ix)ⁿ = exp(inx). Repeated multiplication proves this for positive n, and both sides equal one for n = 0. Taking reciprocals proves it for negative n because exp(−ix) = 1/exp(ix) (our own explanation).

**nLab:** [trigonometric function](https://ncatlab.org/nlab/show/trigonometric+function). It says: “In other words: exp(i t) = cos(t) + i sin(t) (Euler).”

**Wikipedia:** [De Moivre's formula](https://en.wikipedia.org/wiki/De_Moivre%27s_formula). It says: “One can derive de Moivre's formula using Euler's formula and the exponential law for integer powers”

**Sources:** none listed. No primary source with a working link was found.

### The first cosine zero locates all the other zeros

**Remember:** Fix the first zero and shift by half a turn.

*True by definition.* MSC 33B10 (Exponential and trigonometric functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define π as twice the first positive zero of cos t, the real part of exp(it) for real t.

**Problem.** The real zeros of cosine are exactly (n + ½)π, where n ranges over all integers.

**How the definition helps.** Cosine has no zero in (−π/2, π/2), by the choice of the first zero and evenness. Since exp(iπ/2) = ±i, exp(iπ) = −1, so shifting by π negates cosine. Translating that interval by multiples of π leaves only the points (n + ½)π as zeros (our own).

**Paper or page:** [Zeroes of Sine and Cosine/Cosine](https://proofwiki.org/wiki/Zeroes_of_Sine_and_Cosine/Cosine). It says: “x = (n + ½)π for some n ∈ ℤ.”

**Sources:** none listed. No primary source with a working link was found.

### A centered beta integral gives gamma duplication

**Remember:** Center the equal arguments to turn two factors into one square.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x, y &gt; 0, the beta function B(x,y) = ∫₀¹ tˣ⁻¹(1 − t)ʸ⁻¹ dt also equals Γ(x)Γ(y)/Γ(x + y). At equal arguments its integrand is (t(1 − t))ˣ⁻¹, which is symmetric about t = ½.

**Problem.** For x &gt; 0, Γ(x)Γ(x + ½) = 2¹⁻²ˣ √π Γ(2x).

**How the definition helps.** Centering at ½ with t = (1 + u)/2 turns t(1 − t) into (1 − u²)/4. Symmetry and v = u² then give B(x,x) = 2¹⁻²ˣB(½,x) (our own). The beta–gamma identity and Γ(½) = √π turn this into the formula.

**nLab:** [Euler beta function](https://ncatlab.org/nlab/show/Euler+beta+function). It says: “B(x,y) = ∫₀¹ tˣ⁻¹ (1 − t)ʸ⁻¹ dt = Γ(x)Γ(y)/Γ(x + y)”

**Sources:** none listed. No primary source with a working link was found.

### Defining beta as a gamma quotient makes beta products telescope

**Remember:** Write each beta as gammas, and the middle gamma factors cancel.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For positive x and y, define Β(x, y) as the gamma quotient Γ(x)Γ(y)/Γ(x + y).

**Problem.** For positive x, y, z, Β(x, y)Β(x + y, z) = Β(x, y + z)Β(y, z).

**How the definition helps.** Each side becomes Γ(x)Γ(y)Γ(z)/Γ(x + y + z) after the middle gamma factor cancels (our own). With Euler’s integral, the identity needs a change of variables in a double integral. The work moves to the theorem that the quotient equals Euler’s integral.

**Paper or page:** [Beta Function expressed using Gamma Functions](https://proofwiki.org/wiki/Beta_Function_expressed_using_Gamma_Functions). It says: “Β(x, y) = Γ(x) Γ(y)/Γ(x + y)”

**Sources:** none listed. No primary source with a working link was found.

### Defining beta by gamma quotients gives its recurrence at once

**Remember:** Raising x by one raises two gamma arguments and leaves x/(x + y).

*True by definition. Confidence: medium.* MSC 33B15 (Gamma, beta and polygamma functions), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x, y &gt; 0, define B(x, y) as the gamma quotient Γ(x)Γ(y)/Γ(x + y).

**Problem.** For x, y &gt; 0, B(x + 1, y) = x B(x, y)/(x + y).

**How the definition helps.** Raising x by one raises the arguments of Γ(x) and Γ(x + y) by one (our own). The gamma recurrence Γ(s + 1) = sΓ(s) then multiplies the numerator by x and the denominator by x + y.

**Wikipedia:** [Beta function](https://en.wikipedia.org/wiki/Beta_function). It says: “Β(z₁,z₂) = Γ(z₁)Γ(z₂)/Γ(z₁ + z₂)”

**Sources:** none listed. No primary source with a working link was found.

### Euler’s limit definition gives Γ(x + 1) = xΓ(x) at every non-pole

**Remember:** Neighbouring Euler products differ by a factor tending to x.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For complex x other than 0, −1, −2, …, Euler defines Γ(x) as the limit, as k → ∞, of k! kˣ⁻¹/\[x(x + 1)⋯(x + k − 1)\].

**Problem.** For every complex x other than 0, −1, −2, …, Γ(x + 1) = xΓ(x).

**How the definition helps.** The finite expression at x + 1 is the one at x times kx/(x + k), and this factor tends to x (our own proof). The work lies in showing that the limit exists and equals the gamma integral on the right half-plane.

**nLab:** [Gamma function](https://ncatlab.org/nlab/show/Gamma+function). It says: “the Gamma function satisfies the following translation formula”

**Sources:** none listed. No primary source with a working link was found.

### Log convexity gives Gauss's gamma multiplication law

**Remember:** Log-convexity and the factorial recurrence pin gamma down.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define Γ as the only positive function on (0, ∞) with convex logarithm, Γ(1) = 1 and Γ(x + 1) = xΓ(x). So any positive log-convex function with this recurrence is a constant multiple of Γ.

**Problem.** Fix an integer m ≥ 2 and a real number x &gt; 0. The product of Γ((x + j)/m) for j = 0,…,m − 1 equals (√(2π))ᵐ⁻¹ m⁽½⁻ˣ⁾ Γ(x).

**How the definition helps.** Multiplied by mˣ, the product is positive and log-convex and satisfies the recurrence, so it is a constant multiple of Γ (our own proof). Shifting x by one cancels all but two gamma factors and multiplies it by x. Stirling’s formula supplies the constant.

**nLab:** [Gamma function](https://ncatlab.org/nlab/show/Gamma+function). It says: “\\prod<sub>j=0</sub><sup>N-1</sup> \\Gamma\\left(z+\\tfrac{j}{N}\\right) = (2\\pi)<sup>{\\tfrac{1}{2}</sup>(N-1)} \\cdot N<sup>{\\tfrac{1}{2}-Nz}</sup> \\cdot \\Gamma(Nz).”

**Sources:** none listed. No primary source with a working link was found.

### Shifting the gamma integral exposes its poles and residues

**Remember:** At a pole, exactly one step contributes a zero denominator.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For Re z &gt; 0, Γ(z) = ∫₀<sup>∞</sup> tᶻ⁻¹ exp(−t) dt. Elsewhere, Γ(z) is Γ(z + m) divided by z(z + 1)⋯(z + m − 1), for any positive integer m with Re(z + m) &gt; 0, which fails only where a factor vanishes.

**Problem.** The only poles of Γ are at −n for integers n ≥ 0, and all are simple. The residue at −n is (−1)ⁿ/n!.

**How the definition helps.** Near −n, take m = n + 1: only the factor z + n vanishes, the numerator tends to Γ(1) = 1, and the other factors tend to (−1)ⁿn! (our own). The work is to prove the integral is analytic and that different shifts agree, by the recurrence.

**Paper or page:** [Residue of Gamma Function](https://proofwiki.org/wiki/Residue_of_Gamma_Function). It says: “Res Γ(−n) = (−1)ⁿ/n!”

**Sources:** none listed. No primary source with a working link was found.

### The beta integral evaluates powers of sine and cosine

**Remember:** Substitute t = sin²θ, so 1 − t becomes cos²θ.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x, y &gt; 0, the beta function B(x,y) = ∫₀¹ tˣ⁻¹(1 − t)ʸ⁻¹ dt integrates a power of t times a power of 1 − t.

**Problem.** For p, q &gt; −1, the integral over \[0, π/2\] of sin θ to the power p times cos θ to the power q equals ½B((p + 1)/2, (q + 1)/2).

**How the definition helps.** With t = sin²θ, the two powers become powers of sine and cosine, since 1 − t = cos²θ and dt = 2 sin θ cos θ dθ. Matching exponents gives x = (p + 1)/2 and y = (q + 1)/2 (our own).

**nLab:** [Euler beta function](https://ncatlab.org/nlab/show/Euler+beta+function). It says: “B(x,y) = ∫₀¹ tˣ⁻¹ (1 − t)ʸ⁻¹ dt = Γ(x)Γ(y)/Γ(x + y)”

**Sources:** none listed. No primary source with a working link was found.

### The beta integral makes two shifted values add back

**Remember:** The new factors t and 1 − t add to one.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x, y &gt; 0, the beta function is B(x,y) = ∫₀¹ tˣ⁻¹(1 − t)ʸ⁻¹ dt.

**Problem.** For positive x and y, B(x + 1,y) + B(x,y + 1) = B(x,y).

**How the definition helps.** Raising x by one multiplies the integrand by t, and raising y by one multiplies it by 1 − t. Since t + (1 − t) = 1, the two integrals add to B(x,y).

**Paper or page:** [Beta Function of x+1 with y plus Beta Function of x with y+1](https://proofwiki.org/wiki/Beta_Function_of_x+1_with_y_plus_Beta_Function_of_x_with_y+1). It says: “Β(x + 1,y) + Β(x,y + 1) = Β(x,y)”

**Sources:** none listed. No primary source with a working link was found.

### The gamma integral gives its half value from the Gaussian

**Remember:** At one half, substitute a square to cancel the root.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x &gt; 0, Γ(x) = ∫₀<sup>∞</sup> tˣ⁻¹ exp(−t) dt.

**Problem.** Γ(½) = √π.

**How the definition helps.** At x = ½ the integrand is exp(−t)/√t, and t = u² cancels the root, giving Γ(½) = 2∫₀<sup>∞</sup> exp(−u²) du (our own). The Gaussian integral then gives √π, for example by squaring it and using polar coordinates (our own).

**Paper or page:** [Gamma Function of One Half](https://proofwiki.org/wiki/Gamma_Function_of_One_Half). It says: “Γ(½) = √π”

**Sources:** none listed. No primary source with a working link was found.

### The gamma integral makes its logarithm convex

**Remember:** A weighted average of inputs gives a weighted product inside the integral.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x &gt; 0, Γ(x) = ∫₀<sup>∞</sup> tˣ⁻¹ exp(−t) dt, an integral of the functions tˣ⁻¹ = exp((x − 1) ln t), which are exponential in x.

**Problem.** The logarithm of Γ is convex on (0,∞). Its graph lies below every line segment joining two points on the graph.

**How the definition helps.** At a weighted average λx + (1 − λ)y, the integrand is the product of the x and y integrands raised to the powers λ and 1 − λ. Hölder’s inequality then bounds Γ(λx + (1 − λ)y) by Γ(x) to the power λ times Γ(y) to the power 1 − λ. Taking logarithms gives convexity.

**Paper or page:** [Log of Gamma Function is Convex on Positive Reals](https://proofwiki.org/wiki/Log_of_Gamma_Function_is_Convex_on_Positive_Reals). It says: “Then the composite mapping ln ∘ Γ is a convex function.”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, third edition (1976), Theorem 8.18(c).](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### The gamma product rules out zeros of gamma

**Remember:** A finite reciprocal leaves gamma no place to vanish.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define 1/Γ(z) by the Weierstrass product z exp(γz) times the product over n ≥ 1 of (1 + z/n)exp(−z/n), which is finite at every complex z. Here γ is the Euler–Mascheroni constant.

**Problem.** The gamma function has no zeros wherever it is defined in the complex plane.

**How the definition helps.** Wherever Γ is defined, it is 1 over a finite nonzero value of this product, so it cannot vanish. The work is to prove that the product converges and agrees with 1 over Euler’s integral on the right half-plane (our own).

**Paper or page:** [Zeroes of Gamma Function](https://proofwiki.org/wiki/Zeroes_of_Gamma_Function). It says: “The Gamma function is never equal to 0.”

**Sources:** none listed. No primary source with a working link was found.

### The gamma quotient makes beta symmetric

**Remember:** Swapping beta's arguments swaps the two factors.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x, y &gt; 0, define B(x,y) as the gamma quotient Γ(x)Γ(y)/Γ(x + y).

**Problem.** For positive x and y, B(x,y) = B(y,x).

**How the definition helps.** Swapping x and y swaps the two factors of the numerator and leaves x + y unchanged. With Euler’s integral ∫₀¹ tˣ⁻¹(1 − t)ʸ⁻¹ dt instead, identifying the two definitions needs a double integral (our own).

**Paper or page:** [Commutativity of Parameters of Beta Function](https://proofwiki.org/wiki/Commutativity_of_Parameters_of_Beta_Function). It says: “Β(x,y) = Β(y,x)”

**Sources:** none listed. No primary source with a working link was found.

### The logarithmic gamma derivative extends the harmonic recurrence

**Remember:** Differentiate the gamma shift to get the harmonic shift.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions), 39B22. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x ≥ 0, define H(x) = γ + Γ′(x + 1)/Γ(x + 1), the logarithmic derivative of the gamma function at x + 1 shifted by the Euler–Mascheroni constant γ.

**Problem.** The extension satisfies H(x+1)−H(x) = 1/(x+1) for all x ≥ 0. It agrees with the harmonic numbers at every nonnegative integer.

**How the definition helps.** Differentiating log Γ(t + 1) = log t + log Γ(t) turns the gamma recurrence into H(x + 1) − H(x) = 1/(x + 1) (our own). Since Γ(1) = 1 and Γ′(1) = −γ, H(0) = 0. The recurrence then gives every harmonic number.

**Paper or page:** [Extension of Harmonic Number to Non-Integer Argument](https://proofwiki.org/wiki/Extension_of_Harmonic_Number_to_Non-Integer_Argument). It says: “H(x) = γ + Γ′(x+1)/Γ(x+1)”

**Sources:** none listed. No primary source with a working link was found.

### The polygamma integral fixes signs

**Remember:** Each x-derivative brings down a negative factor log u.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x &gt; 0 and an integer n ≥ 1, ψₙ(x) = −∫₀¹ uˣ⁻¹(log u)ⁿ/(1 − u) du. Each derivative in x multiplies this integrand by log u, which is negative on (0, 1) (our own).

**Problem.** For each integer n ≥ 1, f(x) = (−1)ⁿ⁺¹ψₙ(x) is completely monotone on x &gt; 0. Its kth derivative has sign (−1)ᵏ for every integer k ≥ 0.

**How the definition helps.** The integrand of f is uˣ⁻¹\|log u\|ⁿ/(1 − u) ≥ 0, and each derivative adds a factor log u ≤ 0 (our own). Integrable bounds on compact x-intervals justify differentiating under the integral (our own). The main work is to match the integral to the corresponding derivative of log Γ (our own).

**Paper or page:** [Integral Form of Polygamma Function/Corollary](https://proofwiki.org/wiki/Integral_Form_of_Polygamma_Function/Corollary). It says: “ψₙ(z) = −∫₀¹ uᶻ⁻¹ (ln u)ⁿ/(1 − u) du”

**Sources:** none listed. No primary source with a working link was found.

### Working with 1/Γ gives a gamma product formula with no exceptions

**Remember:** Gamma has poles; its reciprocal has zeros and no exceptions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The reciprocal gamma function R is 1/Γ, extended by the value zero at the poles 0, −1, −2, …, which makes it entire.

**Problem.** For every complex z, R(z) equals z exp(γz) times the product over n ≥ 1 of (1 + z/n)exp(−z/n), with γ the Euler–Mascheroni constant. Also R(z)R(1 − z) = sin(πz)/π for every z (our own).

**How the definition helps.** Working with R removes the poles, so both formulas hold with no exceptions. The Weierstrass product gives the first identity, zeros included. Euler’s reflection formula gives the second away from integers, and continuity extends it (our own explanation).

**Wikipedia:** [Reciprocal gamma function](https://en.wikipedia.org/wiki/Reciprocal_gamma_function). It says: “Since the gamma function is meromorphic and nonzero everywhere in the complex plane, its reciprocal is an entire function.”

**Sources:** none listed. No primary source with a working link was found.

### Poisson arrival times make the regularized incomplete gamma a Poisson probability

**Remember:** The nth arrival is late exactly when fewer than n have arrived.

*True by definition.* MSC 33B20 (Incomplete beta and gamma functions (error functions, probability integral, Fresnel integrals)), 60G55. arXiv math.CA, math.PR. Level 2: later undergraduate.

**Definition.** For a positive integer n and x ≥ 0, Q(n, x) is the probability that the nth arrival of a rate-one Poisson process comes after time x.

**Problem.** For each positive integer n and x ≥ 0, Q(n, x) equals the probability that a Poisson variable with mean x is less than n.

**How the definition helps.** The nth arrival comes after time x exactly when fewer than n arrivals have happened by time x (our own). That count is Poisson with mean x, so the probabilities agree. The work moves to showing that the nth arrival time has density tⁿ⁻¹exp(−t)/(n − 1)!, which matches the integral definition (our own).

**Wikipedia:** [Incomplete gamma function](https://en.wikipedia.org/wiki/Incomplete_gamma_function). It says: “When s is an integer, Q(s + 1, λ) is the cumulative distribution function for Poisson random variables”

**Sources:** none listed. No primary source with a working link was found.

### Reversing the interval complements incomplete beta

**Remember:** Flip the interval, and the leftover fraction has swapped parameters.

*True by definition.* MSC 33B20 (Incomplete beta and gamma functions (error functions, probability integral, Fresnel integrals)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a, b &gt; 0 and 0 ≤ x ≤ 1, Iₓ(a,b) is the fraction of the beta integral ∫₀¹ tᵃ⁻¹(1 − t)ᵇ⁻¹ dt that lies over \[0, x\].

**Problem.** For 0 ≤ x ≤ 1, the two fractions satisfy Iₓ(a,b) + I₁₋ₓ(b,a) = 1.

**How the definition helps.** Substituting t ↦ 1 − t swaps a and b, maps the leftover piece \[x, 1\] onto \[0, 1 − x\], and keeps the total integral (our own). So I₁₋ₓ(b,a) is the fraction over \[x, 1\], and the two fractions add to 1.

**Wikipedia:** [Beta function](https://en.wikipedia.org/wiki/Beta_function). It says: “Iₓ(a,b) = 1 − I₁₋ₓ(b,a)”

**Sources:** none listed. No primary source with a working link was found.

### Even powers give dilogarithm duplication

**Remember:** Odd powers cancel; even powers give half the dilogarithm at z².

*True by definition.* MSC 33B30 (Higher logarithm functions). arXiv math.CV. Level 2: later undergraduate.

**Definition.** For \|z\| &lt; 1, the dilogarithm Li₂(z) is the sum over n ≥ 1 of zⁿ/n².

**Problem.** For \|z\| &lt; 1, Li₂(z) + Li₂(−z) = ½ Li₂(z²).

**How the definition helps.** Adding the series at z and −z cancels the odd powers and doubles the even ones (our own). The term z²ⁿ gets 2/(2n)² = 1/(2n²), which is half the nth term of Li₂(z²) (our own).

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “Euler's dilogarithm is a complex-valued function Li₂ given by the series”

**Paper or page:** [Dilogarithm of Square](https://proofwiki.org/wiki/Dilogarithm_of_Square). It says: “Li₂(z) + Li₂(−z) = ½ Li₂(z²)”

**Sources:** none listed. No primary source with a working link was found.

### Differentiating Gauss’s series shifts parameters

**Remember:** A derivative raises every Gauss hypergeometric parameter by one.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For \|z\| &lt; 1 and c not a nonpositive integer, ₂F₁(a,b;c;z) is the power series with coefficient (a)ₙ(b)ₙ/((c)ₙ n!) at degree n. Here (a)ₙ = a(a + 1)⋯(a + n − 1), with (a)₀ = 1, so (a)ₙ = a·(a + 1)ₙ₋₁.

**Problem.** For \|z\| &lt; 1 and c not a nonpositive integer, the derivative of ₂F₁(a,b;c;z) is (ab/c) ₂F₁(a+1,b+1;c+1;z).

**How the definition helps.** Differentiating zⁿ/n! gives zⁿ⁻¹/(n − 1)!, and each rising product splits off its first factor (our own). Pulling out a, b and c leaves ab/c times the series for ₂F₁(a + 1, b + 1; c + 1; z).

**Paper or page:** [Derivative of Gaussian Hypergeometric Function](https://proofwiki.org/wiki/Derivative_of_Gaussian_Hypergeometric_Function). It says: “dF(a,b;c;x)/dx = (ab/c) F(a+1,b+1;c+1;x)”

**Sources:** none listed. No primary source with a working link was found.

### Euler’s integral gives Gauss summation

**Remember:** At one, Euler’s hypergeometric integral is just another beta integral.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For real a and c &gt; b &gt; 0, Euler’s integral defines ₂F₁(a,b;c;z) as the average of (1 − zt)⁻ᵃ for t drawn from the density proportional to tᵇ⁻¹(1 − t)ᶜ⁻ᵇ⁻¹ on (0,1), for real z ≤ 1 where it converges.

**Problem.** Take real a, b and c with c &gt; b &gt; 0 and c − a − b &gt; 0. Then ₂F₁(a,b;c;1) = Γ(c)Γ(c − a − b)/(Γ(c − a)Γ(c − b)).

**How the definition helps.** At z = 1, the factor (1 − t)⁻ᵃ merges with the density’s power of 1 − t, so the average becomes B(b, c − a − b)/B(b, c − b) (our own). The identity B(u,v) = Γ(u)Γ(v)/Γ(u + v) gives the formula. The remaining work identifies the integral with the series and justifies the limit at one.

**Paper or page:** [Gauss's Hypergeometric Theorem](https://proofwiki.org/wiki/Gauss's_Hypergeometric_Theorem), [Euler's Integral Representation of Hypergeometric Function](https://proofwiki.org/wiki/Euler's_Integral_Representation_of_Hypergeometric_Function). It says: “F(a,b;c;1) = Γ(c)Γ(c − a − b)/(Γ(c − a)Γ(c − b))”

**Sources:** none listed. No primary source with a working link was found.

### Bessel functions of the second kind restore independence at integers

**Remember:** Divide by sin πν so the Wronskian never vanishes.

*Rules out counterexamples.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For noninteger ν, Y(ν,x) = \[cos(πν)J(ν,x) − J(−ν,x)\]/sin(πν), where J is the first-kind Bessel function, and at integer ν take the limit in ν. This choice makes the Wronskian JY′ − J′Y equal 2/(πx) for every ν (our own).

**Problem.** For every real ν, J(ν,x) and Y(ν,x) are independent solutions of Bessel's equation on x &gt; 0. Neither is a constant multiple of the other.

**How the definition helps.** The Wronskian 2/(πx) is never zero, so J and Y are independent for every ν, integers included (our own argument). At integer orders J(−n,x) = (−1)ⁿJ(n,x), so the pair J(ν,x), J(−ν,x) fails there. The work lies in the Wronskian formula and the limit in ν.

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “This means that the two solutions are no longer linearly independent.”

**Sources:** none listed. No primary source with a working link was found.

### One generating function gives the Bessel order recurrence

**Remember:** Differentiate in t to bring down the order n.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integer n, Jₙ(x) is the coefficient of tⁿ in the Laurent expansion of the generating function exp((x/2)(t − 1/t)).

**Problem.** For integer n and real x, 2nJₙ(x) = x\[Jₙ₋₁(x) + Jₙ₊₁(x)\].

**How the definition helps.** Applying t times the t derivative multiplies the generating function by (x/2)(t + 1/t) and multiplies the coefficient of tⁿ by n (our own). Comparing coefficients gives nJₙ = (x/2)(Jₙ₋₁ + Jₙ₊₁) (our own). The work is to justify termwise differentiation and identify the coefficients with the Bessel series (our own).

**Paper or page:** [Recurrence Formula for Bessel Function of the First Kind](https://proofwiki.org/wiki/Recurrence_Formula_for_Bessel_Function_of_the_First_Kind). It says: “Jₙ₊₁(x) = (2n/x)Jₙ(x) − Jₙ₋₁(x)”

**Sources:**

- [E. T. Whittaker and G. N. Watson, A Course of Modern Analysis, chapter XVII, “Bessel Functions,” pp. 355–385.](https://doi.org/10.1017/CBO9780511608759.018)

### The Bessel generating function expands a plane wave

**Remember:** Put the coefficient variable on the unit circle and rotate it.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integer n, Jₙ(x) is the coefficient of tⁿ, with negative powers allowed, in the Laurent expansion of exp((x/2)(t − 1/t)).

**Problem.** For real x and θ, exp(ix cos θ) is the sum of iⁿJₙ(x) exp(inθ) over all integers n. Here i² = −1.

**How the definition helps.** Setting t = i exp(iθ) gives t − 1/t = 2i cos θ, so the generating function becomes exp(ix cos θ) (our own). Each tⁿ becomes iⁿexp(inθ), which gives the stated sum (our own). The work is to identify the coefficients with Bessel solutions and show absolute convergence on \|t\| = 1 (our own).

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “Another important relation for integer orders is the Jacobi–Anger expansion”

**Sources:** none listed. No primary source with a working link was found.

### The Bessel generating function gives J₋ₙ = (−1)ⁿJₙ by one substitution

**Remember:** Replacing t by −1/t swaps the orders.

*True by definition. Confidence: medium.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integer n, Jₙ(x) is the coefficient of tⁿ, with negative powers allowed, in the Laurent series of exp((x/2)(t − 1/t)). This function does not change when t is replaced by −1/t.

**Problem.** For every integer n, J₋ₙ(x) = (−1)ⁿJₙ(x).

**How the definition helps.** Replacing t by −1/t sends tⁿ to (−1)ⁿt⁻ⁿ, so comparing coefficients gives J₋ₙ = (−1)ⁿJₙ (our own). From the series definition, one must instead show the first n terms vanish because 1/Γ is zero at nonpositive integers. The work moves to showing the coefficients equal the series, by multiplying the series for exp(xt/2) and exp(−x/(2t)).

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “is often defined via a Laurent series for a generating function:”

**Sources:** none listed. No primary source with a working link was found.

### The Bessel integral gives a uniform bound of one

**Remember:** An average of cosines has absolute value at most one.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integer n, Jₙ(x) is the average of cos(nθ − x sin θ) over θ in \[0, π\], an average of values between −1 and 1.

**Problem.** For every integer n and real x, \|Jₙ(x)\| ≤ 1.

**How the definition helps.** An average of values in \[−1, 1\] stays in \[−1, 1\]. The work is to identify this average with the Bessel power series, by the integral representation theorem (our own).

**Paper or page:** [Integral Representation of Bessel Function of the First Kind/Integer Order](https://proofwiki.org/wiki/Integral_Representation_of_Bessel_Function_of_the_First_Kind/Integer_Order). It says: “Jₙ(x) = (1/π) ∫₀ to π cos(nθ − x sin θ) dθ”

**Sources:**

- [E. T. Whittaker and G. N. Watson, A Course of Modern Analysis, chapter XVII, “Bessel Functions,” pp. 355–385.](https://doi.org/10.1017/CBO9780511608759.018)

### The Bessel series turns order one half into sine

**Remember:** Half-integer gammas turn the Bessel series into the sine series.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The first-kind Bessel function of order ½ is the sum over m ≥ 0 of (−1)ᵐ(x/2) to the power 2m + ½, divided by m! Γ(m + 3/2). Its gamma values at half integers are rational multiples of √π (our own).

**Problem.** For x &gt; 0, the first-kind Bessel function of order ½ equals √(2/(πx)) sin x.

**How the definition helps.** Using Γ(½) = √π and Γ(s + 1) = sΓ(s) gives m! Γ(m + 3/2) = (2m + 1)! √π/2²ᵐ⁺¹ (our own). So the coefficient of x to the power 2m + ½ is (−1)ᵐ√(2/π)/(2m + 1)!, which is √(2/(πx)) times the sine series (our own).

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “There are simple closed-form expressions for the Bessel functions of half-integer order in terms of the standard trigonometric functions”

**Sources:**

- [E. T. Whittaker and G. N. Watson, A Course of Modern Analysis, chapter XVII, “Bessel Functions,” pp. 355–385.](https://doi.org/10.1017/CBO9780511608759.018)

### Weighted differentiation lowers Bessel order

**Remember:** Weight by xⁿ, and the derivative eats one factor of (m+n)!.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an integer n ≥ 0, the Bessel function Jₙ(x) is the everywhere convergent series of (−1)ᵐ(x/2)²ᵐ⁺ⁿ/(m!(m+n)!) over m ≥ 0. Multiplied by xⁿ, each term is a constant times the power x²ᵐ⁺²ⁿ divided by (m+n)!.

**Problem.** For integers n ≥ 1, the derivative of xⁿJₙ(x) equals xⁿJₙ₋₁(x).

**How the definition helps.** Differentiating x²ᵐ⁺²ⁿ brings down 2(m+n), which cancels against (m+n)! to leave (m+n−1)! (our own). The result is, term by term, the series for xⁿJₙ₋₁(x). Termwise differentiation is valid because the series converges everywhere.

**Paper or page:** [Derivative of x<sup>n</sup> by Bessel Function of the First Kind of Order n of x](https://proofwiki.org/wiki/Derivative_of_x^n_by_Bessel_Function_of_the_First_Kind_of_Order_n_of_x), [Series Expansion of Bessel Function of the First Kind](https://proofwiki.org/wiki/Series_Expansion_of_Bessel_Function_of_the_First_Kind). It says: “d(xⁿ Jₙ(x))/dx = xⁿ Jₙ₋₁(x)”

**Sources:** none listed. No primary source with a working link was found.

### Chebyshev angles give the derivative

**Remember:** Tₙ multiplies the angle by n, and Uₙ₋₁ is its sine ratio.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an integer n ≥ 1 and 0 &lt; θ &lt; π, Tₙ is the polynomial with Tₙ(cos θ) = cos(nθ), and Uₙ₋₁ is the polynomial with Uₙ₋₁(cos θ) = sin(nθ)/sin θ.

**Problem.** For n ≥ 1, the derivative of Tₙ is n Uₙ₋₁.

**How the definition helps.** Differentiate Tₙ(cos θ) = cos(nθ) in θ: the chain rule gives sin θ·Tₙ′(cos θ) = n sin(nθ), so Tₙ′(cos θ) = nUₙ₋₁(cos θ) (our own). Two polynomials that agree on (−1,1) are equal, so the identity holds for every x (our own).

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “dTₙ/dx = n Uₙ₋₁”

**Sources:** none listed. No primary source with a working link was found.

### Derivatives give preceding Hermite polynomials

**Remember:** Differentiating exp(2tx − t²) in x multiplies it by 2t.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Hermite polynomial Hₙ(x) is n! times the coefficient of tⁿ in the generating function exp(2tx − t²), a function whose x-derivative is 2t times itself.

**Problem.** For n ≥ 1, the derivative of the nth Hermite polynomial is 2n times the preceding polynomial.

**How the definition helps.** Differentiating the generating function in x multiplies it by 2t, which moves every coefficient up one power of t (our own). Comparing coefficients of tⁿ gives Hₙ′/n! = 2Hₙ₋₁/(n−1)!, so Hₙ′ = 2nHₙ₋₁.

**Paper or page:** [Generating Function for Hermite Polynomials](https://proofwiki.org/wiki/Generating_Function_for_Hermite_Polynomials), [Recurrence Formula for Hermite Polynomials using Derivative](https://proofwiki.org/wiki/Recurrence_Formula_for_Hermite_Polynomials_using_Derivative). It says: “dHₙ(x)/dx = 2n Hₙ₋₁(x)”

**Sources:** none listed. No primary source with a working link was found.

### Rodrigues's derivatives make Legendre polynomials orthogonal

**Remember:** Pₙ is n derivatives of (x²−1)ⁿ, flat to order n at ±1.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** By Rodrigues's formula, the Legendre polynomial Pₙ is the nth derivative of (x² − 1)ⁿ divided by 2ⁿn!. Since (x² − 1)ⁿ has zeros of order n at ±1, all its derivatives of order below n vanish at both endpoints.

**Problem.** The integral of a Legendre polynomial times any lower-degree polynomial over \[−1,1\] is zero.

**How the definition helps.** Integrate by parts n times to move every derivative onto the lower-degree polynomial q (our own). The boundary terms vanish because the derivatives of (x² − 1)ⁿ of order below n are zero at ±1 (our own). The nth derivative of q is zero, so the integral is zero.

**nLab:** [Legendre polynomial](https://ncatlab.org/nlab/show/Legendre+polynomial). It says: “The Legendre polynomials form a complete system of orthogonal polynomials on the interval \[−1,1\]”

**Sources:** none listed. No primary source with a working link was found.

### Rodrigues's formula reduces the Legendre norm to one beta integral

**Remember:** Pₙ is n derivatives of (x²−1)ⁿ, so squaring leaves a beta integral.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** By Rodrigues's formula, the Legendre polynomial Pₙ is the nth derivative of (x² − 1)ⁿ divided by 2ⁿn!. So (x² − 1)ⁿ vanishes to order n at ±1, and Pₙ has leading coefficient (2n)!/(2ⁿ(n!)²).

**Problem.** The integral of the square of the degree n Legendre polynomial over \[−1,1\] equals 2/(2n + 1).

**How the definition helps.** Write one copy of Pₙ by Rodrigues's formula and integrate by parts n times; the boundary terms vanish at ±1 (our own). The nth derivative of the other copy is the constant n! times its leading coefficient. What remains is a multiple of the integral of (1 − x²)ⁿ, which t = (1 + x)/2 turns into a beta integral.

**Paper or page:** [Length of Legendre Polynomial](https://proofwiki.org/wiki/Length_of_Legendre_Polynomial). It says: “‖Pₙ(x)‖ := √(2/(2n + 1))”

**Sources:** none listed. No primary source with a working link was found.

### Rodrigues’s formula makes Hermite polynomials orthogonal by integration by parts

**Remember:** The weight times Hₙ is an nth derivative of the Gaussian.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** By Rodrigues’s formula, the nth Hermite polynomial is Hₙ(x) = (−1)ⁿ exp(x²/2) times the nth derivative of exp(−x²/2). So the weight exp(−x²/2) times Hₙ is exactly ± the nth derivative of the Gaussian.

**Problem.** For the weight exp(−x²/2) on the real line, Hₙ is orthogonal to every polynomial q of degree below n.

**How the definition helps.** The weighted integral of Hₙ times q is ± the integral of q times the nth derivative of the Gaussian. Integration by parts n times moves every derivative onto q, and the boundary terms vanish because the Gaussian decays fast (our own). The nth derivative of q is zero, since q has degree below n.

**nLab:** [Hermite polynomial](https://ncatlab.org/nlab/show/Hermite+polynomial). It says: “where exp(−) denotes the exponential function and d/dxⁿ denotes the nth derivative with respect to x”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition gives Chebyshev roots and bounds

**Remember:** On the interval from −1 to 1, Tₙ is a cosine in disguise.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)), 26C10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each integer n ≥ 0, Tₙ is the polynomial with Tₙ(cos θ) = cos(nθ) for every real θ, so on \[−1,1\] it is a cosine read through x = cos θ. As θ runs over \[0,π\], x = cos θ runs once over \[−1,1\], strictly decreasing.

**Problem.** For n ≥ 1, Tₙ has the n distinct roots cos((2k − 1)π/(2n)), for k = 1, …, n, all between −1 and 1. Also \|Tₙ(x)\| ≤ 1 for every x between −1 and 1.

**How the definition helps.** Every value of Tₙ on \[−1,1\] is a cosine, so \|Tₙ\| ≤ 1 there. cos(nθ) vanishes at θ = (2k − 1)π/(2n) for k = 1, …, n, which give n distinct roots x = cos θ in (−1,1). The angle-addition formulas give Tₙ₊₁ = 2xTₙ − Tₙ₋₁, so Tₙ has degree n and no other roots.

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “Using the trigonometric definition and the fact that cos((2k+1)π/2) = 0, one can show that the roots of Tₙ are”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition makes Chebyshev polynomials compose by multiplying indices

**Remember:** Tₙ multiplies the angle by n, so composing multiplies the factors.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each integer n ≥ 0, Tₙ is the polynomial with Tₙ(cos θ) = cos(nθ) for every real θ, so in the coordinate x = cos θ it multiplies the angle by n.

**Problem.** For nonnegative integers m and n, Tₘ(Tₙ(x)) = Tₘₙ(x) for every real x.

**How the definition helps.** Multiplying the angle by n and then by m multiplies it by mn: Tₘ(Tₙ(cos θ)) = Tₘ(cos(nθ)) = cos(mnθ) = Tₘₙ(cos θ). The two polynomials agree on \[−1,1\], so they are equal.

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “The trigonometric definitions of Tₙ and Uₙ imply the composition or nesting properties: Tₘₙ(x) = Tₘ(Tₙ(x)),”

**Sources:** none listed. No primary source with a working link was found.

### The generating function makes the Legendre recurrence a coefficient comparison

**Remember:** Legendre polynomials are the coefficients of 1/√(1−2xt+t²).

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Legendre polynomial Pₙ(x) is the coefficient of tⁿ in G = (1 − 2xt + t²)⁻¹ᐟ², a function that satisfies the first-order equation (1 − 2xt + t²)∂G/∂t = (x − t)G (our own).

**Problem.** For n ≥ 1, (n + 1)Pₙ₊₁(x) = (2n + 1)xPₙ(x) − nPₙ₋₁(x).

**How the definition helps.** Comparing coefficients of tⁿ in this equation gives the recurrence directly (our own). The left side gives (n+1)Pₙ₊₁ − 2nxPₙ + (n−1)Pₙ₋₁, and the right side gives xPₙ − Pₙ₋₁.

**nLab:** [Legendre polynomial](https://ncatlab.org/nlab/show/Legendre+polynomial). It says: “Alternatively they can be defined via a generating function:”

**Sources:** none listed. No primary source with a working link was found.

### The Legendre generating function expands the point mass potential

**Remember:** Legendre's generating function is one over a distance.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Pₙ(u) is the coefficient of tⁿ in (1 − 2tu + t²)⁻¹ᐟ². Here 1 − 2tu + t² is the squared distance from a unit vector to a vector of length t whose angle with it has cosine u (our own).

**Problem.** Let two points be at distances a and r from the origin with 0 &lt; a &lt; r. For their angle θ at the origin, their reciprocal distance equals the sum of Pₙ(cos θ)(a/r)ⁿ/r over n ≥ 0.

**How the definition helps.** By the cosine rule, the distance between the points is r√(1 − 2tu + t²) with t = a/r and u = cos θ (our own). Its reciprocal is the generating function divided by r, and the series converges because \|u\| ≤ 1 and 0 &lt; t &lt; 1.

**Wikipedia:** [Legendre polynomials](https://en.wikipedia.org/wiki/Legendre_polynomials). It says: “The left-hand side of the equation is the generating function for the Legendre polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### The Legendre generating function gives both endpoint values

**Remember:** At either endpoint, the square root leaves a geometric series.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Legendre polynomial Pₙ(x) is the coefficient of tⁿ in (1 − 2tx + t²)⁻¹ᐟ². At x = ±1 the quantity under the root is the perfect square (1 ∓ t)² (our own).

**Problem.** The Legendre polynomial of degree n has value 1 at x = 1 and (−1) to power n at x = −1.

**How the definition helps.** At x = 1 the generating function is 1/(1 − t) = ∑tⁿ, so Pₙ(1) = 1 for every n (our own). At x = −1 it is 1/(1 + t) = ∑(−t)ⁿ, so Pₙ(−1) = (−1)ⁿ (our own).

**Paper or page:** [Particular Values of Legendre Polynomials/-1](https://proofwiki.org/wiki/Particular_Values_of_Legendre_Polynomials/-1). It says: “Pₙ(−1) = (−1)ⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneous harmonic polynomials give the spherical Laplacian eigenvalues

**Remember:** Homogeneous of degree ℓ and harmonic: the radial part fixes the eigenvalue.

*True by definition.* MSC 33C55 (Spherical harmonics), 35J05. arXiv math.AP. Level 2: later undergraduate.

**Definition.** A spherical harmonic of degree ℓ is the restriction Y to the unit sphere of a homogeneous harmonic polynomial p in three variables. So p is the ℓth power of the radius r times Y, and Δp = 0.

**Problem.** On the two-dimensional unit sphere, the spherical Laplacian sends each spherical harmonic of degree ℓ to itself times −ℓ(ℓ + 1).

**How the definition helps.** In polar coordinates, Δ = ∂²/∂r² + (2/r)∂/∂r + (1/r²)Δ<sub>S</sub>, where Δ<sub>S</sub> is the spherical Laplacian (our own). On the ℓth power of r times Y, the radial part gives ℓ(ℓ + 1) times the (ℓ − 2)th power of r times Y (our own). Since Δp = 0, the spherical part must give −ℓ(ℓ + 1)Y (our own).

**Wikipedia:** [Spherical harmonics](https://en.wikipedia.org/wiki/Spherical_harmonics). It says: “spherical harmonics of degree ℓ are eigenfunctions of the Laplace–Beltrami operator with eigenvalue −ℓ(ℓ+1).”

**Sources:** none listed. No primary source with a working link was found.

### The q-gamma product telescopes under shifts

**Remember:** Shifting x by one removes the first denominator factor.

*True by definition.* MSC 33D05 (\\(q\\)-gamma functions, \\(q\\)-beta functions and integrals), 39A10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0 &lt; q &lt; 1 and x &gt; 0, the q-gamma function is (1 − q) to the power 1 − x times the infinite product of (1 − qⁿ⁺¹)/(1 − qⁿ⁺ˣ) over n ≥ 0. Replacing x by x + 1 shifts the denominator factors one place, so only the first factor 1 − qˣ is lost.

**Problem.** Increasing x by one multiplies the q-gamma function by (1−qˣ)/(1−q).

**How the definition helps.** Shifting x to x + 1 removes the denominator factor 1 − qˣ, so the product gains the factor 1 − qˣ (our own). The prefactor gains 1/(1 − q), which gives the stated ratio. Both products converge to nonzero limits, so the cancellation is valid.

**Wikipedia:** [q-gamma function](https://en.wikipedia.org/wiki/q-gamma_function). It says: “The q-gamma function satisfies the functional equation”

**Sources:** none listed. No primary source with a working link was found.

### The q-gamma shift telescopes

**Remember:** A unit shift drops the first denominator factor of the q-gamma product.

*True by definition.* MSC 33D05 (\\(q\\)-gamma functions, \\(q\\)-beta functions and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; q &lt; 1 and x &gt; 0. Γ₍q₎(x) is (1 − q)¹⁻ˣ times the product of (1 − qⁿ⁺¹)/(1 − qⁿ⁺ˣ) over integers n ≥ 0, so replacing x by x + 1 shifts the denominator factors one place and loses only 1 − qˣ (our own).

**Problem.** For x &gt; 0, the q-gamma value at x + 1 is the value at x multiplied by (1 − qˣ)/(1 − q).

**How the definition helps.** Increasing x by one drops the denominator factor 1 − qˣ, and the prefactor contributes 1/(1 − q) (our own). Both products converge to nonzero limits, so the cancellation is valid (our own).

**Wikipedia:** [Q-gamma function](https://en.wikipedia.org/wiki/Q-gamma_function). It says: “Γ₍q₎(x+1) = (1−qˣ)/(1−q) Γ₍q₎(x) = \[x\]₍q₎ Γ₍q₎(x)”

**Sources:** none listed. No primary source with a working link was found.

### A symmetric lattice sum makes the Weierstrass function even

**Remember:** A sum over a lattice that equals its own negative.

*True by definition.* MSC 33E05 (Elliptic functions and integrals), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a lattice Λ, all integer combinations of two complex numbers with non-real ratio, ℘(z) = 1/z² + ∑(1/(z − λ)² − 1/λ²) over nonzero λ in Λ, for z outside Λ. The sum converges absolutely and runs over a set that λ ↦ −λ maps to itself.

**Problem.** The Weierstrass function satisfies ℘(−z) = ℘(z) off the lattice.

**How the definition helps.** Replacing z by −z turns the λ term into the −λ term, since 1/(−z − λ)² = 1/(z + λ)², and leaves 1/z² unchanged (our own). Absolute convergence allows this rearrangement (our own).

**Paper or page:** [Weierstrass's Elliptic Function is Even in z](https://proofwiki.org/wiki/Weierstrass's_Elliptic_Function_is_Even_in_z). It says: “That is, Weierstrass's elliptic function is even in z.”

**Sources:** none listed. No primary source with a working link was found.

### Carlson’s first integral is symmetric

**Remember:** Carlson’s first elliptic integral gives all three inputs the same role.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For positive x, y and z, Carlson’s first symmetric elliptic integral is half the integral from 0 to ∞ of 1/√((t+x)(t+y)(t+z)). The three inputs enter only through this product.

**Problem.** Carlson’s first symmetric elliptic integral has the same value after any permutation of x, y and z.

**How the definition helps.** A product does not change when its factors trade places, so the integrand and the integral are unchanged under any permutation of x, y and z (our own).

**Wikipedia:** [Carlson symmetric form](https://en.wikipedia.org/wiki/Carlson_symmetric_form). It says: “The value of Rꜰ(x,y,z) is the same for any permutation of its arguments”

**Sources:**

- [B. C. Carlson, Numerical computation of real or complex elliptic integrals (1995)](https://doi.org/10.1007/bf02198293)

### Elliptic functions take every value equally often modulo periods

**Remember:** Count once per period cell, and opposite sides cancel.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals), 30D30, 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** An elliptic function is a meromorphic function f on ℂ with two periods whose ratio is not real, and their integer combinations form its period lattice. To count values modulo the lattice, count them in one period parallelogram, whose opposite edges are lattice translates of each other (our own).

**Problem.** A nonconstant elliptic function takes every value on the sphere equally often modulo a chosen period lattice, counting multiplicities.

**How the definition helps.** Shift the parallelogram so that its edges avoid poles and solutions of f(z) = b (our own). By periodicity the integrals of f′/(f − b) over opposite edges cancel, so the argument principle makes the number of solutions equal the number of poles (our own). So every finite value b, and ∞, is taken as often as the pole count (our own).

**Wikipedia:** [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “takes on every value the same number of times”

**Sources:** none listed. No primary source with a working link was found.

### Two independent periods force pole-free elliptic functions to be constant

**Remember:** Two independent periods let one compact parallelogram bound the whole function.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** An elliptic function is a meromorphic function on ℂ with two periods whose ratio is not real. So every point of the plane is a lattice shift of a point in one closed period parallelogram, which is compact.

**Problem.** An elliptic function that is holomorphic on the whole plane is constant.

**How the definition helps.** A holomorphic elliptic function is continuous on the compact parallelogram, so it is bounded there, and periodicity makes it bounded everywhere. Liouville’s theorem then makes it constant (our own argument). The nonconstant entire function eᶻ has periods only in 2πiℤ, so one period is not enough.

**Wikipedia:** [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “A holomorphic elliptic function is bounded since it takes on all of its values on the fundamental domain which is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Euler’s product gives the Gamma reflection formula by cancellation

**Remember:** Pair the factors for z and −z to obtain Euler’s product for sine.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA, math.CV. Level 3: graduate.

**Definition.** Euler’s product defines Γ(z), for z not zero or a negative integer, as 1/z times the product of (1 + 1/n)ᶻ/(1 + z/n) over n ≥ 1. In Γ(z)Γ(−z) the powers (1 + 1/n)ᶻ and (1 + 1/n)⁻ᶻ cancel, leaving the factors 1/(1 − z²/n²).

**Problem.** For every noninteger complex z, Γ(z)Γ(1 − z) = π/sin(πz).

**How the definition helps.** With Γ(1 − z) = −zΓ(−z), the product gives 1/(Γ(z)Γ(1 − z)) = z times the product of 1 − z²/n² over n ≥ 1. Euler’s sine product identifies this with sin(πz)/π.

**Wikipedia:** [Gamma function](https://en.wikipedia.org/wiki/Gamma_function). It says: “With Euler's infinite product Γ(z) = (1/z) ∏ₙ₌₁<sup>∞</sup> (1+1/n)ᶻ/(1 + z/n) compute”

**Sources:** none listed. No primary source with a working link was found.

### Multivariate gamma half-steps telescope

**Remember:** A half-step keeps every gamma factor except the two ends.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CA. Level 3: graduate.

**Definition.** For p ≥ 1 and a &gt; (p − 1)/2, Γₚ(a) is π to the power p(p − 1)/4 times the product of Γ(a − j/2) for j = 0, …, p − 1. Its arguments a, a − ½, …, a − (p − 1)/2 are spaced by halves, so a shift by ½ moves the list one place (our own).

**Problem.** The ratio of multivariate gamma at a + ½ to its value at a is Γ(a + ½)/Γ(a − (p − 1)/2).

**How the definition helps.** Replacing a by a + ½ adds the factor Γ(a + ½) at the top and drops Γ(a − (p − 1)/2) at the bottom (our own). All other factors and the power of π stay the same (our own).

**Wikipedia:** [Multivariate gamma function](https://en.wikipedia.org/wiki/Multivariate_gamma_function). It says: “It has two equivalent definitions. One is given as the following integral over the p × p positive-definite real matrices”

**Sources:** none listed. No primary source with a working link was found.

### A strip fixes polylogarithm inversion

**Remember:** Choose one logarithm before evaluating its Bernoulli polynomial.

*Rules out counterexamples.* MSC 33B30 (Higher logarithm functions), 11M35. arXiv math.CA, math.NT. Level 3: graduate.

**Definition.** Jonquière’s inversion needs one logarithm of z: write z = exp(2πix) with 0 &lt; Re x &lt; 1, which fixes x uniquely for each z off the nonnegative real axis. Both polylogarithms use their principal branches.

**Problem.** Let n≥1 be an integer and Bₙ the nth Bernoulli polynomial. Then Liₙ(z)+(−1)ⁿLiₙ(1/z)=−(2πi)ⁿBₙ(x)/n!.

**How the definition helps.** The right side depends on x, while the left side depends only on z, so one logarithm must be fixed (our own). For example, x = 1/4 and x = 5/4 give the same z, but B₂ takes values there that differ by 1/2 (our own). With x fixed, the identity follows from the Hurwitz functional equation at 1 − n, where ζ(1 − n, x) = −Bₙ(x)/n (our own).

**Wikipedia:** [Polylogarithm](https://en.wikipedia.org/wiki/Polylogarithm). It says: “For positive integer polylogarithm orders s, the Hurwitz zeta function ζ(1−s, x) reduces to Bernoulli polynomials, ζ(1−n, x) = −Bₙ(x) / n”

**Sources:**

- [Alfred Jonquière, Note sur la série (1889), pp. 142–152](https://www.numdam.org/item/BSMF_1889__17__142_1/)

### Clausen values give tetrahedron volumes

**Remember:** Tetrahedron volume is one Lobachevsky value per dihedral angle.

*True by definition.* MSC 33B30 (Higher logarithm functions), 51M10. arXiv math.CA, math.GT. Level 3: graduate.

**Definition.** The Lobachevsky function Λ(θ), for 0 &lt; θ &lt; π, is the integral of −log\|2 sin t\| from 0 to θ. For Im z &gt; 0, D(z) is the volume of the ideal tetrahedron with vertices ∞, 0, 1, z. Its dihedral angles are α, β and γ, the arguments of z, 1/(1 − z) and 1 − 1/z.

**Problem.** For Im z&gt;0, let α, β and γ be the arguments of z, 1/(1−z) and 1−1/z. The Bloch–Wigner dilogarithm satisfies 2D(z)=D(exp(2iα))+D(exp(2iβ))+D(exp(2iγ)).

**How the definition helps.** The volume of an ideal tetrahedron is Λ(α) + Λ(β) + Λ(γ), so D(z) is that sum (our own argument). On the unit circle, the Fourier series of Λ gives D(exp(2iθ)) = 2Λ(θ). Substituting each angle gives the identity.

**Wikipedia:** [Clausen function](https://en.wikipedia.org/wiki/Clausen_function). It says: “The Lobachevsky function Λ or Л is essentially the same function with a change of variable”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Dilogarithms control Euler product asymptotics

**Remember:** The log of the product is a Riemann sum for the dilogarithm.

*True by definition.* MSC 33B30 (Higher logarithm functions), 33D05. arXiv math.CA. Level 3: graduate.

**Definition.** For 0 &lt; a &lt; 1, the dilogarithm Li₂(a) is the integral of −log(1 − u)/u from 0 to a. The substitution u = a exp(−t) makes it the integral of −log(1 − a exp(−t)) over t ≥ 0. So −Li₂(a) is the limit, as h → 0, of h times the logarithm of the product.

**Problem.** As h tends to zero through positive values, the product of 1−a exp(−kh) over integers k ≥ 0 is asymptotic to √(1−a) exp(−Li₂(a)/h).

**How the definition helps.** The Euler–Maclaurin formula refines this Riemann sum: the logarithm of the product is −Li₂(a)/h + ½log(1 − a) + O(h) (our own). The remainder is O(h) because the integrand has an integrable second derivative. Exponentiating gives the result.

**Paper or page:** [Evaluation of beta integrals of Ramanujan type and integral representations for bilateral hypergeometric series](https://arxiv.org/abs/2411.03574v1). It says: “Let a ∈ ℂ ∖ \[1,∞). Then (a;q)∞ ∼ (1−a)¹⁄² exp(−u⁻¹ Li(a)), where Li denotes the dilogarithm function”

**Sources:**

- [Howard Cohl and Hans Volkmer, Evaluation of beta integrals of Ramanujan type and integral representations for bilateral hypergeometric series (2024)](https://arxiv.org/abs/2411.03574v1)

### Equal angles maximize dilogarithm volume

**Remember:** One Lobachevsky value per angle, with the angles summing to π.

*True by definition.* MSC 33B30 (Higher logarithm functions), 51M10. arXiv math.CA, math.GT. Level 3: graduate.

**Definition.** An ideal tetrahedron with complex shape z in the upper half-plane has dihedral angles α, β, γ &gt; 0 at a vertex, with α + β + γ = π. Its volume D(z) is Λ(α) + Λ(β) + Λ(γ), where Λ(θ) is the integral of −log\|2 sin t\| from 0 to θ.

**Problem.** The Bloch–Wigner dilogarithm D, which gives signed volume at complex shape z, has a unique maximum on the upper half-plane at z=(1+i√3)/2.

**How the definition helps.** The volume is zero on the boundary of the angle triangle, since Λ(π − θ) = −Λ(θ), and positive inside, so the maximum is at an interior critical point (our own proof). Since Λ′(θ) = −log\|2 sin θ\|, the critical point equates the three sines, and positive angles summing to π then all equal π/3. These angles give the unique shape z = (1 + i√3)/2.

**Paper or page:** [The Andersen-Kashaev volume conjecture for FAMED geometric triangulations](https://arxiv.org/abs/2410.10776v1). It says: “Let T be an ideal tetrahedron in ℍ³ with complex shape structure z. Then, its volume is given by Vol(T) = D(z)”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Gamma normalization removes order poles

**Remember:** The zeros of reciprocal gamma cancel the Mellin poles.

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions). arXiv math.CA. Level 3: graduate.

**Definition.** For z outside \[1,∞) and Re s &gt; 0, Liₛ(z) is the integral of tˢ⁻¹z/(exp(t) − z) over t &gt; 0, divided by Γ(s). The integral continues with at most simple poles at s = 0, −1, −2, …, exactly where 1/Γ(s) has simple zeros (our own).

**Problem.** For each z outside \[1,∞), Li of order s at z is an entire function of s.

**How the definition helps.** Dividing by Γ(s) cancels the only possible poles of the integral, so the quotient is entire in s (our own). To continue the integral, subtract more and more Taylor terms of z/(exp(t) − z) at t = 0 (our own). Each subtracted monomial gives one simple pole at a nonpositive integer (our own).

**Wikipedia:** [Polylogarithm](https://en.wikipedia.org/wiki/Polylogarithm). It says: “This converges for Re(s) &gt; 0 and all z except for z real and ≥ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Matching parity recovers Dirichlet values

**Remember:** Match the character parity to the retained part of the polylogarithm.

*Rules out counterexamples. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 11M06. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** For n ≥ 2 and \|z\| = 1, Pₙ(z) is Re Liₙ(z) for odd n and Im Liₙ(z) for even n. On z = exp(iθ) these are the cosine and sine series, so Pₙ has the same parity in θ as a character with χ(−1) = (−1)ⁿ⁻¹. Set c = 1 for odd n and c = i for even n.

**Problem.** Let χ be a primitive Dirichlet character modulo N with χ(−1) = (−1)ⁿ⁻¹, and let n ≥ 2. Then cΣχ̄(a)Pₙ(exp(2πia/N)) = τL(n,χ), where τ = Σχ̄(a)exp(2πia/N) and both sums run over residues a modulo N.

**How the definition helps.** Pairing residues a and −a cancels the discarded half of Liₙ, because it has the opposite parity to χ (our own argument). Expanding Liₙ then leaves the Gauss sum χ(k)τ at each index k, which gives τL(n,χ). Without matching, n = 3 and the odd character modulo 4 give zero on the left although L(3,χ) is positive.

**Paper or page:** [Clean Single-Valued Polylogarithms](https://arxiv.org/abs/2104.04344v2). It says: “where Clₙ(α) ≔ ℜₙ(Liₙ(eⁱᵅ)) denotes the Clausen function.”

**Sources:**

- [Don Zagier, Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields (1990)](https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf)
- [Steven Charlton, Claude Duhr and Herbert Gangl, Clean Single-Valued Polylogarithms (2021)](https://arxiv.org/abs/2104.04344v2)

### Nested integrals expose branch changes

**Remember:** Each extra integration adds one power of log z.

*True by definition.* MSC 33B30 (Higher logarithm functions). arXiv math.CA. Level 3: graduate.

**Definition.** Li₁(z) = −log(1 − z) near zero, and for n &gt; 1, Liₙ(z) is the integral of Liₙ₋₁(t)dt/t from 0 to z. Continuing along a path chooses a branch, and a change of Liₙ₋₁ along a loop is integrated against dt/t to give the change of Liₙ (our own).

**Problem.** Start at 1/2 on the principal branch and follow the circle centered at 1 through 1/2 once counterclockwise. Near the starting point, Liₙ changes by −2πi(log z)ⁿ⁻¹/(n−1)! for every integer n≥1, with the principal logarithm.

**How the definition helps.** Around the loop, Li₁ = −log(1 − z) changes by −2πi (our own). Each integration against dt/t turns a change c(log z)ᵏ/k! into c(log z)ᵏ⁺¹/(k+1)! plus a constant (our own). Shrinking the loop toward z = 1 fixes each constant at zero (our own).

**nLab:** [iterated integral](https://ncatlab.org/nlab/show/iterated+integral). It says: “expression involving nested integrals”

**Sources:**

- [Richard M. Hain, Classical Polylogarithms (1994)](https://doi.org/10.1090/pspum/055.2/1265550)

### Ordered simplices give shuffle products

**Remember:** Sort the combined times and keep each word in order.

*True by definition.* MSC 33B30 (Higher logarithm functions), 11M32. arXiv math.NT. Level 3: graduate.

**Definition.** Along a piecewise smooth path γ on \[0,1\] that avoids a₁, …, aₙ, the iterated integral of the word a₁…aₙ integrates the product of γ′(tⱼ)/(γ(tⱼ) − aⱼ) over ordered times 0 &lt; t₁ &lt; ⋯ &lt; tₙ &lt; 1. A shuffle of two words interleaves them and keeps each word’s order, as sorting two ordered lists of times does (our own).

**Problem.** For a piecewise smooth path avoiding the poles, the product of two such integrals equals the sum over their shuffles.

**How the definition helps.** The product of two such integrals is one integral over a product of two ordered sets of times (our own). Sorting all the times splits this domain into one ordered region per shuffle, up to boundaries of measure zero (our own). Fubini’s theorem then turns the product into the sum over shuffles (our own).

**Paper or page:** [Duality on symmetric multiple polylogarithms](https://arxiv.org/abs/2411.08711). It says: “(Shuffle product formula) Iγ(w ⧢ w′) = Iγ(w)Iγ(w′).”

**Sources:**

- [Kuo-Tsai Chen, Iterated path integrals (1977)](https://doi.org/10.1090/S0002-9904-1977-14320-6)

### Tetrahedron volume proves five-term cancellation

**Remember:** Five tetrahedra cancel in the oriented boundary of a simplex.

*True by definition.* MSC 33B30 (Higher logarithm functions), 51M10. arXiv math.CA, math.GT. Level 3: graduate.

**Definition.** For four distinct points on the sphere at infinity of hyperbolic space, the shape is the fourth point after a fractional linear map sends the first three to ∞, 0, 1. D of the shape is the signed volume of the ideal tetrahedron they span, and D = 0 for real shapes. The sign follows the vertex order, so reversing orientation negates the volume.

**Problem.** For five distinct ordered points on the boundary at infinity, omit each point in turn and take D of the shape of the remaining tetrahedron. The alternating sum of these five values is zero.

**How the definition helps.** The five tetrahedra with one point omitted form the oriented boundary of a 4-simplex, so their signed volumes cancel (our own proof). Concretely, cone each oriented face to one interior point: every face occurs twice with opposite signs. The volume formula identifies this geometric D with the analytic Bloch–Wigner dilogarithm.

**Paper or page:** [The Andersen-Kashaev volume conjecture for FAMED geometric triangulations](https://arxiv.org/abs/2410.10776v1). It says: “Let T be an ideal tetrahedron in ℍ³ with complex shape structure z. Then, its volume is given by Vol(T) = D(z) = D((z−1)/z) = D(1/(1−z)).”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### The dilogarithm correction cancels its jump

**Remember:** Add the argument term to cancel the imaginary jump on the cut.

*Makes the theorem clean to state or prove.* MSC 33B30 (Higher logarithm functions). arXiv math.CV. Level 3: graduate.

**Definition.** For z ≠ 0, D(z) = Im Li₂(z) + arg(1 − z) log\|z\|, with Li₂ the principal branch off \[1,∞) and arg between −π and π. Across the cut at x &gt; 1, Im Li₂ jumps by 2π log x, and the added term jumps by exactly the opposite amount.

**Problem.** The Bloch–Wigner dilogarithm extends to a single-valued continuous real function on the complex plane.

**How the definition helps.** Above and below a point x &gt; 1, Im Li₂ tends to ±π log x and the added term tends to ∓π log x, so D extends continuously with D(x) = 0 there (our own). Near 0 and 1 the added term tends to zero and Li₂ has finite limits.

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “The Bloch–Wigner dilogarithm is defined by D(z) ≔ Im(Li₂(z)) + arg(1−z) log\|z\|.”

**Wikipedia:** [Dilogarithm](https://en.wikipedia.org/wiki/Dilogarithm). It says: “D(z) = Im Li₂(z) + arg(1−z) log\|z\|.”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://doi.org/10.1007/978-3-540-30308-4_1)

### Reflection gives Pfaff’s transformation

**Remember:** Reflect the averaging density, then factor out one minus z.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** For complex a, real z &lt; 1 and real 0 &lt; b &lt; c, Euler’s integral makes F(a,b;c;z) the average of (1 − zt)⁻ᵃ over 0 &lt; t &lt; 1, with the beta density proportional to tᵇ⁻¹(1 − t)ᶜ⁻ᵇ⁻¹. Reflecting t to 1 − t swaps the two exponents of the density, which turns b into c − b.

**Problem.** For these parameters, F(a,b;c;z) = exp(−a log(1 − z)) F(a,c − b;c;z/(z − 1)).

**How the definition helps.** After reflection, 1 − z(1 − t) = (1 − z)(1 − tz/(z − 1)), with both factors positive (our own). So the integrand splits as (1 − z)⁻ᵃ times (1 − tz/(z − 1))⁻ᵃ, and the remaining average is F(a,c − b;c;z/(z − 1)). The remaining work identifies Euler’s integral with the Gauss series.

**Wikipedia:** [Hypergeometric function](https://en.wikipedia.org/wiki/Hypergeometric_function). It says: “₂F₁(a,b;c;z) = (1−z)⁻ᵃ ₂F₁(a,c−b;c;z/(z−1))”

**Sources:** none listed. No primary source with a working link was found.

### Regularizing Gauss removes parameter poles

**Remember:** Divide by Γ(c + n), whose zeros swallow the poles.

*True by definition.* MSC 33C05 (Classical hypergeometric functions, \\(\_2F<sub>1</sub>\\)). arXiv math.CV. Level 3: graduate.

**Definition.** For \|z\| &lt; 1 and complex a, b, c, the regularized Gauss series has coefficient (a)ₙ(b)ₙ/(n!·Γ(c + n)) at zⁿ, where (a)ₙ = a(a + 1)⋯(a + n − 1) and (a)₀ = 1. It divides by the gamma function, whose reciprocal is entire, so no coefficient has a pole in c.

**Problem.** For fixed a and b and \|z\| &lt; 1, the regularized Gauss function is analytic in c on the whole complex plane. The ordinary ₂F₁ need not exist at c = 0, −1, −2 and so on.

**How the definition helps.** Each coefficient is an entire function of c (our own proof). On compact sets of c, the coefficient ratio (a + n)(b + n)/((n + 1)(c + n)) tends uniformly to one, so the series converges locally uniformly for \|z\| &lt; 1 and is entire in c. For a = b = 1 and 0 &lt; z &lt; 1, the ordinary series has a pole at c = 0 (our own example).

**Wikipedia:** [Hypergeometric function](https://en.wikipedia.org/wiki/Hypergeometric_function). It says: “Dividing by the value Γ(c) of the gamma function, we have the limit”

**Sources:** none listed. No primary source with a working link was found.

### Airy’s contour gives its equation

**Remember:** Ai integrates exp(t³/3 − zt) between two rapidly decaying ends.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CV. Level 3: graduate.

**Definition.** Ai(z) is 1/(2πi) times the integral of exp(t³/3 − zt) along a path that comes in from infinity at angle −π/3 and goes out at angle π/3. On both rays t³ is negative real, so the integrand decays fast at both ends.

**Problem.** The Airy function satisfies Ai″(z) = z Ai(z) for every complex z.

**How the definition helps.** Applying Ai″ − zAi to the integral gives the integral of (t² − z)exp(t³/3 − zt), which is the t-derivative of exp(t³/3 − zt) (our own proof). Its integral is the difference of the end values, which is zero by the decay. The decay also justifies differentiating under the integral.

**nLab:** [Airy function](https://ncatlab.org/nlab/show/Airy+function). It says: “y″(x) − x · y(x) = 0”

**Wikipedia:** [Airy function](https://en.wikipedia.org/wiki/Airy_function). It says: “where the integral is over a path C starting at the point at infinity with argument −π/3 and ending at the point at infinity with argument π/3.”

**Sources:** none listed. No primary source with a working link was found.

### The Bessel integral gives order log-convexity

**Remember:** A positive integral of exponentials is log-convex in their order parameter.

*True by definition.* MSC 33C10 (Bessel and Airy functions, cylinder functions, \\(\_0F<sub>1</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** For x &gt; 0 and real ν, the modified Bessel function K of order ν at x is half the integral over all real t of exp(−x cosh t + νt). The order ν enters only through the factor exp(νt) of a positive integrand.

**Problem.** For each x &gt; 0, the logarithm of K at x is convex in the real order ν.

**How the definition helps.** At an intermediate order (1 − s)ν + sμ, the integrand is the weighted geometric mean of the integrands for ν and μ (our own). Hölder’s inequality then gives K((1 − s)ν + sμ) ≤ K(ν)¹⁻ˢK(μ)ˢ for 0 &lt; s &lt; 1, which is log-convexity.

**Wikipedia:** [Bessel function](https://en.wikipedia.org/wiki/Bessel_function). It says: “K₍α₎(x) = ∫₀∞ exp(−x cosh t) cosh αt dt.”

**Sources:** none listed. No primary source with a working link was found.

### Beta reflection gives Kummer’s transformation

**Remember:** Reflecting the beta variable swaps its two parameters.

*True by definition.* MSC 33C15 (Confluent hypergeometric functions, Whittaker functions, \\(\_1F<sub>1</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** For real 0 &lt; a &lt; b, Kummer’s function M(a,b,z) is the mean of exp(zt) under the beta density on (0,1) proportional to tᵃ⁻¹(1 − t)ᵇ⁻ᵃ⁻¹. Reflecting t to 1 − t swaps the exponents a − 1 and b − a − 1 and turns exp(zt) into exp(z)exp(−zt).

**Problem.** For b not a nonpositive integer, M(a,b,z) = exp(z) M(b − a,b,−z).

**How the definition helps.** After reflection the density is the one for b − a, and the integrand is exp(z) times exp(−zt), which gives exp(z)M(b − a,b,−z) (our own proof). Expanding the exponential and integrating gives the power series definition. Analytic continuation extends the identity to complex parameters wherever both sides are defined.

**Wikipedia:** [Confluent hypergeometric function](https://en.wikipedia.org/wiki/Confluent_hypergeometric_function). It says: “Kummer's functions are also related by Kummer's transformations”

**Sources:** none listed. No primary source with a working link was found.

### Distributional differentiation gives moment recurrences

**Remember:** Derivatives of functionals land on the test polynomial, with a minus sign.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** A polynomial functional u is a linear map from polynomials to numbers, and its derivative and products act on the test polynomial: u′(f) = −u(f′) and (φu)(f) = u(φf). So, with φ(x) = ax² + bx + c and ψ(x) = px + q, the Pearson equation (φu)′ = ψu says u(φf′ + ψf) = 0 for every polynomial f.

**Problem.** Write mₙ=u(xⁿ). The Pearson equation holds exactly when (na+p)mₙ₊₁+(nb+q)mₙ+ncmₙ₋₁=0 for every integer n≥0. At n=0, omit the last term.

**How the definition helps.** Take f = xⁿ: then φf′ + ψf = (na + p)xⁿ⁺¹ + (nb + q)xⁿ + ncxⁿ⁻¹, and applying u gives the recurrence (our own). Powers of x span the polynomials, so by linearity the recurrence for all n gives the equation back.

**Paper or page:** [Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1). It says: “satisfies the distributional differential equation”

**Sources:**

- [K. Castillo, J. Petronilho. Classical orthogonal polynomials revisited](https://arxiv.org/abs/2110.00401v1)

### Rodrigues’s formula makes the Jacobi reflection symmetry a change of variable

**Remember:** Reflection swaps the two weight factors and negates each derivative.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** For n ≥ 0 and α, β &gt; −1, Rodrigues’s formula gives the Jacobi polynomial on −1 &lt; x &lt; 1 as (−1)ⁿ/(2ⁿn!w(x)) times the nth derivative of w(x)(1 − x²)ⁿ, where w(x) = (1 − x)ᵅ(1 + x)ᵝ. The formula treats the two endpoints alike, so swapping 1 − x and 1 + x swaps α and β (our own).

**Problem.** For α, β &gt; −1, P(n; α, β)(−x) = (−1)ⁿP(n; β, α)(x).

**How the definition helps.** Replacing x by −x swaps α and β in w and leaves (1 − x²)ⁿ unchanged (our own). Each of the n derivatives picks up a factor −1, which gives the sign (−1)ⁿ (our own). The two polynomials agree on (−1,1), so they agree everywhere.

**Wikipedia:** [Jacobi polynomials](https://en.wikipedia.org/wiki/Jacobi_polynomials). It says: “An equivalent definition is given by Rodrigues' formula:”

**Sources:** none listed. No primary source with a working link was found.

### The generating function makes the Gegenbauer derivative rule one differentiation

**Remember:** One derivative raises the parameter and lowers the degree.

*True by definition.* MSC 33C45 (Orthogonal polynomials and functions of hypergeometric type (Jacobi, Laguerre, Hermite, Askey scheme, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** For λ &gt; 0, the Gegenbauer polynomial C(n; λ)(x) is the coefficient of tⁿ in (1 − 2xt + t²) raised to the power −λ. Its x-derivative is 2λt times (1 − 2xt + t²) raised to −λ − 1, the generating function for λ + 1 (our own).

**Problem.** For n ≥ 1 and λ &gt; 0, the derivative of C(n; λ) is 2λ·C(n − 1; λ + 1).

**How the definition helps.** Comparing coefficients of tⁿ in this identity gives the derivative of C(n; λ) as 2λ·C(n − 1; λ + 1) (our own).

**Wikipedia:** [Gegenbauer polynomials](https://en.wikipedia.org/wiki/Gegenbauer_polynomials). It says: “The polynomials can be defined in terms of their generating function:”

**Sources:** none listed. No primary source with a working link was found.

### Defining spherical harmonics by harmonic polynomials makes each degree rotation invariant

**Remember:** Rotations preserve degree and commute with the Laplacian.

*True by definition.* MSC 33C55 (Spherical harmonics). arXiv math.CA. Level 3: graduate.

**Definition.** A degree n spherical harmonic is the restriction to the unit sphere of a polynomial in x, y, z that is homogeneous of degree n and harmonic, meaning its Laplacian is zero. Both conditions survive rotation: a rotated homogeneous polynomial keeps its degree, and the Laplacian commutes with rotations (our own).

**Problem.** For each n, every rotation of the sphere maps degree n spherical harmonics to degree n spherical harmonics.

**How the definition helps.** So composing a degree n spherical harmonic with a rotation gives another one (our own). With the coordinate formulas in associated Legendre functions, the same fact needs the addition theorem or Wigner’s rotation matrices (our own).

**Wikipedia:** [Spherical harmonics](https://en.wikipedia.org/wiki/Spherical_harmonics). It says: “The spherical harmonics can be expressed as the restriction to the unit sphere of certain polynomial functions”

**Sources:** none listed. No primary source with a working link was found.

### Mellin powers shift Meijer parameters

**Remember:** Every parameter sits beside s, so shifting s shifts them all.

*True by definition.* MSC 33C60 (Hypergeometric integrals and functions defined by them (\\(E\\), \\(G\\), \\(H\\) and \\(I\\) functions)). arXiv math.CA. Level 3: graduate.

**Definition.** Meijer’s G-function is 1/(2πi) times an integral over s, along an admissible contour, of exp(s log z) times a gamma quotient. The numerator multiplies Γ(bⱼ − s) for j ≤ m and Γ(1 − aⱼ + s) for j ≤ n, and the denominator multiplies Γ(1 − bⱼ + s) for j &gt; m and Γ(aⱼ − s) for j &gt; n. So each parameter appears only through its difference with s.

**Problem.** Fix a branch of log z. Then exp(h log z) times Meijer’s G-function equals the G-function with h added to every upper and lower parameter, wherever the integrals converge.

**How the definition helps.** Multiplying by exp(h log z) turns exp(s log z) into exp((s + h) log z) (our own). Substituting s′ = s + h adds h to every aⱼ and bⱼ in the gamma factors, for example Γ(bⱼ − s) = Γ(bⱼ + h − s′), and moves the path by h. The work lies in establishing the contour representation and its convergence.

**Wikipedia:** [Meijer G-function](https://en.wikipedia.org/wiki/Meijer_G-function). It says: “a functional equation that allows to liberate from a G-function”

**Sources:** none listed. No primary source with a working link was found.

### Coincident Appell arguments give Gauss

**Remember:** Two equal Appell inputs combine their exponents into one Gauss parameter.

*True by definition.* MSC 33C65 (Appell, Horn and Lauricella functions). arXiv math.CA. Level 3: graduate.

**Definition.** For c &gt; a &gt; 0, real b, b′ and \|x\|, \|y\| &lt; 1, F₁(a;b,b′;c;x,y) is the mean of (1 − xt) to the power −b times (1 − yt) to the power −b′ under the beta density on (0,1) proportional to tᵃ⁻¹(1 − t)ᶜ⁻ᵃ⁻¹. Use principal powers.

**Problem.** For real c &gt; a &gt; 0, b and b′ real, and \|x\| &lt; 1, F₁(a;b,b′;c;x,x) = ₂F₁(b + b′,a;c;x).

**How the definition helps.** With y = x the integrand is (1 − xt) to the power −(b + b′), and the mean is Euler’s integral for ₂F₁(b + b′, a; c; x) (our own). The remaining work shows that Picard’s integral matches the double series (our own).

**Wikipedia:** [Appell series](https://en.wikipedia.org/wiki/Appell_series). It says: “discovered that Appell's F₁ can also be written as a one-dimensional Euler-type integral”

**Sources:**

- [Émile Picard, Sur une extension aux fonctions de deux variables du problème de Riemann relatif aux fonctions hypergéométriques (1881)](https://www.numdam.org/item/ASENS_1881_2_10__305_0/)

### Geometric products give q-gamma multiplication

**Remember:** Split the product into residue classes to change the base to qⁿ.

*True by definition.* MSC 33D05 (\\(q\\)-gamma functions, \\(q\\)-beta functions and integrals), 39A13. arXiv math.CA. Level 3: graduate.

**Definition.** For 0 &lt; q &lt; 1 and x &gt; 0, Γ<sub>q</sub>(x) is (1 − q)⁽¹⁻ˣ⁾ times the infinite product of (1 − qᵏ⁺¹)/(1 − qᵏ⁺ˣ) over k ≥ 0. Splitting k by its residue modulo n turns powers of q into powers of r = qⁿ.

**Problem.** Fix an integer n ≥ 2 and put r = qⁿ. Then Γ<sub>q</sub>(nx)·Γ<sub>r</sub>(1/n)⋯Γ<sub>r</sub>((n−1)/n) = \[(1−r)/(1−q)\]⁽ⁿˣ⁻¹⁾·Γ<sub>r</sub>(x)Γ<sub>r</sub>(x+1/n)⋯Γ<sub>r</sub>(x+(n−1)/n).

**How the definition helps.** Writing k = nj + i with 0 ≤ i &lt; n turns the denominator factor 1 − qᵏ⁺ⁿˣ into 1 − rʲ⁺ˣ⁺ⁱᐟⁿ, the denominator of Γ<sub>r</sub>(x + i/n) (our own derivation). The powers of 1 − q and 1 − r give the factor that depends on x, and evaluation at x = 1/n fixes the remaining constant. Convergence justifies the regrouping.

**Wikipedia:** [q-gamma function](https://en.wikipedia.org/wiki/q-gamma_function). It says: “Γq(nx)Γr(1/n)Γr(2/n)⋯Γr((n−1)/n) = ((1−qⁿ)/(1−q))⁽ⁿˣ⁻¹⁾ Γr(x)Γr(x+1/n)⋯Γr(x+(n−1)/n), r = qⁿ”

**Sources:** none listed. No primary source with a working link was found.

### One product shift proves the q-binomial theorem

**Remember:** Shifting z to qz drops just the first factor.

*True by definition.* MSC 33D15 (Basic hypergeometric functions in one variable, \\(\_r\\phi<sub>s</sub>\\)). arXiv math.CA. Level 3: graduate.

**Definition.** For complex a and q with 0 &lt; \|q\| &lt; 1, F(z) on \|z\| &lt; 1 is the infinite product of (1 − aqʲz)/(1 − qʲz) over j ≥ 0. Replacing z by qz shifts every factor one place, so F(z) and F(qz) differ only by the first factor (1 − az)/(1 − z).

**Problem.** On \|z\| &lt; 1, this quotient of products equals the q-binomial series. Its coefficient of degree n is the product of the first n factors (1 − aqʲ)/(1 − qʲ⁺¹), starting at j = 0.

**How the definition helps.** The shift gives (1 − z)F(z) = (1 − az)F(qz) (our own). Comparing coefficients of zⁿ gives cₙ(1 − qⁿ) = cₙ₋₁(1 − aqⁿ⁻¹), starting with F(0) = 1. The product converges uniformly on compact subsets of the disk, so F has a power series there.

**Wikipedia:** [Basic hypergeometric series](https://en.wikipedia.org/wiki/Basic_hypergeometric_series). It says: “₁φ₀(a;q,z) = (az;q)∞/(z;q)∞”

**Sources:** none listed. No primary source with a working link was found.

### A theta shift reindexes terms

**Remember:** One theta shift adds a full turn, and the other shifts the summation index.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 3: graduate.

**Definition.** For τ in the upper half-plane, θ(z,τ) is the sum of exp(πin²τ + 2πinz) over all integers n. Each term has period 1 in z, and shifting z by τ turns the nth term into exp(−πiτ − 2πiz) times the (n + 1)th term.

**Problem.** The Jacobi theta function obeys θ(z + 1,τ) = θ(z,τ) and θ(z + τ,τ) = exp(−πiτ − 2πiz) θ(z,τ).

**How the definition helps.** The unit shift multiplies each term by exp(2πin) = 1 (our own). The τ shift gives the factor exp(−πiτ − 2πiz) times the sum reindexed from n to n + 1, which is allowed because the sum converges absolutely (our own). The cited formula uses πz as its argument and q = exp(2πiτ).

**nLab:** [Jacobi theta function](https://ncatlab.org/nlab/show/Jacobi+theta+function). It says: “The fundamental example of theta functions is the Jacobi theta function given by”

**Paper or page:** [Kronecker theta function and a decomposition theorem for theta functions I](https://arxiv.org/abs/2012.01670v1). It says: “θ₃(z\|τ) = θ₃(z+π\|τ) = q¹ᐟ² e²ⁱᶻ θ₃(z+πτ\|τ)”

**Sources:** none listed. No primary source with a working link was found.

### Arithmetic–geometric means evaluate elliptic integrals

**Remember:** Average arithmetically and geometrically until the two numbers agree.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** The arithmetic–geometric mean of positive a and b is the common limit of repeatedly replacing them by (a + b)/2 and √(ab). By Landen’s transformation, this step does not change the integral of 1/√(a²cos²t + b²sin²t) over \[0,π/2\].

**Problem.** For 0 ≤ k &lt; 1, let K(k) be the complete elliptic integral of 1/√(1 − k² sin²t) over 0 ≤ t ≤ π/2. Then K(k) = π/(2M), where M is the arithmetic–geometric mean of 1 and √(1 − k²).

**How the definition helps.** Starting from a = 1 and b = √(1 − k²), that integral is K(k), and it is the same at every step. Both means tend to M, and every integrand is bounded by 1/b for the initial b, so dominated convergence makes the limit (π/2)/M (our own limit argument).

**Wikipedia:** [Landen's transformation](https://en.wikipedia.org/wiki/Landen%27s_transformation). It says: “In the limit, the integrand becomes a constant, so that integration is trivial”

**Sources:** none listed. No primary source with a working link was found.

### Elliptic gamma factors cancel under inversion

**Remember:** The inversion swaps the top and bottom of every factor.

*True by definition.* MSC 33E05 (Elliptic functions and integrals), 33D65. arXiv math.CV. Level 3: graduate.

**Definition.** For nonzero p, q with \|p\|, \|q\| &lt; 1, Γ(z;p,q) is the product over m, n ≥ 0 of (1 − pᵐ⁺¹qⁿ⁺¹/z)/(1 − pᵐqⁿz), a meromorphic function of z ≠ 0. Replacing z by pq/z turns each numerator into the matching denominator and back.

**Problem.** As meromorphic functions of z ≠ 0, the elliptic gamma values at z and pq/z multiply to one.

**How the definition helps.** So the product at pq/z is the reciprocal of the product at z, factor by factor (our own calculation). The work lies in proving that the double product converges away from its poles.

**Wikipedia:** [Elliptic gamma function](https://en.wikipedia.org/wiki/Elliptic_gamma_function). It says: “Γ(z;p,q) = 1/Γ(pq/z;p,q)”

**Sources:**

- [S. N. M. Ruijsenaars, First order analytic difference equations and integrable quantum systems (1997)](https://doi.org/10.1063/1.531809)

### Lattice sums give Weierstrass scaling

**Remember:** Scale the argument and the whole lattice together.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** For a lattice Λ, the integer combinations of two complex numbers independent over ℝ, ℘(z) is z⁻² plus the sum of (z − λ)⁻² − λ⁻² over nonzero λ in Λ, for z outside Λ. Every term is homogeneous of degree −2 in z and λ together.

**Problem.** Multiplying z and every lattice point by the same nonzero complex number c multiplies ℘ by 1/c².

**How the definition helps.** Replacing z by cz and Λ by cΛ multiplies every term by 1/c² (our own). Absolute convergence away from the lattice allows the two sums to be compared term by term.

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function). It says: “℘ is a homogeneous function in that”

**Sources:** none listed. No primary source with a working link was found.

### One mean step gives Landen’s identity

**Remember:** The limit stays the same after one averaging step.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** The arithmetic–geometric mean M(a,b) of positive a and b is the common limit of repeatedly replacing them by (a + b)/2 and √(ab), so one step does not change it, and scaling both inputs scales it (our own). For 0 &lt; k &lt; 1, K(k) = π/(2M(1,√(1 − k²))), which Gauss showed is the integral of 1/√(1 − k² sin² θ) over \[0,π/2\].

**Problem.** Write h = √(1 − k²). Then K(k) = 2K((1 − h)/(1 + h))/(1 + h).

**How the definition helps.** One step sends 1 and h to A = (1 + h)/2 and √h, so scaling gives M(1,h) = A·M(1, √h/A) (our own). With u = (1 − h)/(1 + h), one has √(1 − u²) = √h/A, so K(k) = K(u)/A, which is the identity.

**Wikipedia:** [Arithmetic–geometric mean](https://en.wikipedia.org/wiki/Arithmetic%E2%80%93geometric_mean). It says: “K(k) = π/(2M(1,√(1−k²))).”

**Sources:** none listed. No primary source with a working link was found.

### Sigma factors give Weierstrass differences

**Remember:** Sigma factors put the zeros and poles in place.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** For a lattice Λ, the integer span of two complex numbers independent over ℝ, σ(u) is u times the product over nonzero λ in Λ of (1 − u/λ)exp(u/λ + u²/(2λ²)). It is an entire odd function with simple zeros exactly at the lattice points, and σ′(0) = 1.

**Problem.** For v outside the lattice, ℘(u) − ℘(v) equals −σ(u + v)σ(u − v) divided by σ(u)²σ(v)², as meromorphic functions of u.

**How the definition helps.** The quotient −σ(u + v)σ(u − v)/(σ(u)²σ(v)²) has zeros at ±v and double poles at lattice points, counted with multiplicity like ℘(u) − ℘(v) (our own proof). The period formulas of σ make it elliptic, so its ratio to ℘(u) − ℘(v) is a pole-free elliptic function and hence constant. Both have leading term 1/u² at u = 0, so the constant is one.

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function). It says: “℘(u)−℘(v)=−σ(u+v)σ(u−v)/(σ(u)²σ(v)²).”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting 1/λ² makes the Weierstrass ℘ series converge without a constant

**Remember:** Subtract 1/λ² from each term, and the lattice sum converges.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals), 30D30. arXiv math.CV. Level 3: graduate.

**Definition.** For a lattice Λ, the integer combinations of two periods independent over ℝ, ℘(z) = 1/z² + ∑(1/(z − λ)² − 1/λ²) over nonzero λ in Λ. Subtracting 1/λ² makes each term of size about 1/\|λ\|³ for large λ, so the series converges absolutely and locally uniformly off Λ.

**Problem.** ℘ is an even elliptic function with periods in Λ and a double pole at each lattice point. It satisfies (℘′)² = 4℘³ − g₂℘ − g₃, where g₂ and g₃ are Eisenstein sums of the lattice.

**How the definition helps.** Convergence makes evenness and the double poles visible term by term, and ℘′ = −2∑1/(z − λ)³ is periodic by reindexing (our own proof). So a lattice shift adds a constant to ℘, which is zero by evenness at the half-period. The Laurent expansion at 0 makes (℘′)² − 4℘³ + g₂℘ + g₃ entire, elliptic and zero at 0, so Liouville’s theorem makes it zero.

**Wikipedia:** [Weierstrass elliptic function](https://en.wikipedia.org/wiki/Weierstrass_elliptic_function), [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “It is constructed in such a way that it has a pole of order two at every lattice point. The term −1/λ² is there to make the series convergent.”

**Sources:** none listed. No primary source with a working link was found.

### Theta quotients avoid amplitude branches

**Remember:** Divide entire theta series, and no inverse branch is ever chosen.

*True by definition.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** Define sn, cn and dn as constant multiples of θ₁/θ₄, θ₂/θ₄ and θ₃/θ₄, quotients of theta series that are entire in u. Each series is evaluated at πu/(2K) with nome exp(−πK′/K), where 0 &lt; m &lt; 1, K is the integral of 1/√(1 − m sin²t) from 0 to π/2, and K′ uses 1 − m. The constants make sn′(0) = 1 and cn(0) = dn(0) = 1.

**Problem.** The three functions extend from the real line to single-valued meromorphic functions on the complex plane.

**How the definition helps.** A quotient of two entire functions is single-valued and meromorphic, so the claim holds at once. The amplitude definition instead inverts an elliptic integral and must choose a branch (our own comparison). The real work is to show that the quotients agree with the amplitude functions on the real line.

**Wikipedia:** [Jacobi elliptic functions](https://en.wikipedia.org/wiki/Jacobi_elliptic_functions). It says: “Equivalently, Jacobi's elliptic functions can be defined in terms of the theta functions.”

**Sources:** none listed. No primary source with a working link was found.

### Theta series solve heat equations

**Remember:** Mode n decays like exp(−4π²n²t), exactly as heat flow demands.

*True by definition.* MSC 33E05 (Elliptic functions and integrals), 35K05. arXiv math.CA. Level 3: graduate.

**Definition.** The Jacobi theta function θ(z,τ) is the sum of exp(πin²τ + 2πinz) over all integers n, for Im τ &gt; 0. For x on the circle of circumference one and t &gt; 0, put u(x,t) = θ(x, 4πit), so the Fourier mode exp(2πinx) carries the weight exp(−4π²n²t).

**Problem.** The function u solves the heat equation: its time derivative equals its second space derivative for t &gt; 0. As t decreases to zero, u tends to the point mass at 0, tested against smooth periodic functions.

**How the definition helps.** The weight exp(−4π²n²t) has time derivative −4π²n² times itself, which matches the second space derivative of exp(2πinx). Exponential decay in n justifies differentiating the series term by term for t &gt; 0. As t → 0 every weight tends to one, so Fourier inversion gives the point mass at 0.

**nLab:** [Jacobi theta function](https://ncatlab.org/nlab/show/Jacobi+theta+function). It says: “The fundamental example of theta functions is the Jacobi theta function given by”

**Wikipedia:** [Theta function](https://en.wikipedia.org/wiki/Theta_function). It says: “The Jacobi theta function is the fundamental solution of the one-dimensional heat equation with spatially periodic boundary conditions.”

**Sources:** none listed. No primary source with a working link was found.

### Two periods forbid lone simple poles

**Remember:** Opposite edges cancel, so one nonzero residue cannot stand alone.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 3: graduate.

**Definition.** An elliptic function is a meromorphic function on ℂ that repeats under two shifts that are linearly independent over the real numbers. So it takes the same values on opposite edges of every period parallelogram, unlike a singly periodic function such as cot z.

**Problem.** An elliptic function cannot have exactly one pole per period parallelogram if that pole is simple.

**How the definition helps.** On a period parallelogram whose edges avoid poles, opposite edge integrals cancel, so the residue theorem makes the enclosed residues sum to zero (our own proof). A single simple pole has nonzero residue, so it cannot occur alone. The singly periodic cot z has one simple pole per period strip (our own counterexample).

**Wikipedia:** [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “Every elliptic function has finitely many poles in ℂ/Λ and the sum of its residues is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Weierstrass coordinates generate elliptic functions

**Remember:** ℘ sees z only up to sign, and ℘′ supplies the sign.

*Makes the theorem clean to state or prove.* MSC 33E05 (Elliptic functions and integrals), 30F10. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a lattice Λ of all integer combinations of two complex numbers independent over the reals. Its Weierstrass function ℘ is the even Λ-periodic function with double poles exactly at Λ and ℘(z) − 1/z² → 0 at 0, and it takes each value only at the points ±z modulo Λ. Its derivative ℘′ is odd.

**Problem.** Every function periodic under this lattice and analytic except at poles is a rational expression in ℘ and ℘′.

**How the definition helps.** Every elliptic function is an even one plus ℘′ times an even one, since the odd part divided by ℘′ is even (our own). Because ℘ identifies only z and −z, an even elliptic function is a meromorphic function of ℘ on the Riemann sphere. A meromorphic function on the sphere is rational.

**Wikipedia:** [Elliptic function](https://en.wikipedia.org/wiki/Elliptic_function). It says: “Every elliptic function with respect to a given period lattice Λ can be expressed as a rational function in terms of ℘ and ℘′.”

**Sources:** none listed. No primary source with a working link was found.

### A Gaussian contour makes reciprocal gamma entire

**Remember:** A Gaussian weight beats every power, so the integral never breaks.

*True by definition.* MSC 33B15 (Gamma, beta and polygamma functions). arXiv math.CV. Level 4: research.

**Definition.** Fix σ &gt; 0 and put w = σ + it. Define 1/Γ(z) as 1/π times the integral over all real t of w¹⁻²ᶻexp(w²), using the principal logarithm of w, where \|exp(w²)\| = exp(σ² − t²) is a Gaussian in t.

**Problem.** The reciprocal gamma function is entire, meaning that it is complex differentiable everywhere.

**How the definition helps.** The integrand is entire in z, and the Gaussian beats the power growth of w¹⁻²ᶻ uniformly for z in a compact set, so the integral is entire (our own proof). The hard part is to show that this integral equals the reciprocal of the usual gamma function (our own account).

**Paper or page:** [A Unifying Integral Representation of the Gamma Function and Its Reciprocal](https://arxiv.org/abs/2506.12112v1). It says: “1/Γ(z) = (1/π)G(z), ∀ z ∈ ℂ”

**Sources:**

- [Peter Reinhard Hansen and Chen Tong, A Unifying Integral Representation of the Gamma Function and Its Reciprocal, Theorem 1](https://arxiv.org/abs/2506.12112v1)

### Bernoulli corrections preserve distribution

**Remember:** Each log\|z\| factor replaces one polylogarithm order, keeping weight n.

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 11G55. arXiv math.CA, math.NT. Level 4: research.

**Definition.** For n ≥ 2 and 0 &lt; \|z\| &lt; 1, Zagier's Pₙ(z) is the real part for odd n, or imaginary part for even n, of the sum of Bₖ(2 log\|z\|)ᵏLiₙ₋ₖ(z)/k! over 0 ≤ k &lt; n, with B₁ = −1/2. Each factor log\|z\| stands in for one lost order of polylogarithm, so every term has total weight n (our own). Extend Pₙ by its single-valued real-analytic continuation away from 0 and 1 and by its continuous limits there.

**Problem.** For integers n,m≥2 and nonzero complex z, Pₙ(zᵐ) equals mⁿ⁻¹ times the sum of Pₙ(ωz) over all mth roots of unity ω.

**How the definition helps.** Under z ↦ zᵐ every term scales by mⁿ⁻¹, since log\|zᵐ\| = m log\|z\| gives mᵏ and the polylogarithm distribution law gives mⁿ⁻ᵏ⁻¹ (our own). Inside the unit disk this proves the identity term by term (our own). The single-valued continuation then carries it to all nonzero z (our own).

**nLab:** [polylogarithm](https://ncatlab.org/nlab/show/polylogarithm). It says: “Polylogarithms Liₙ(x) generalize dilogarithms.”

**Paper or page:** [Clean Single-Valued Polylogarithms](https://arxiv.org/abs/2104.04344v2). It says: “For any $x\\in \\mathbb {C}\\setminus \\{ 0,1\\} $ and any $n\\in \\mathbb {Z}<sub>&gt;1</sub>$, we have\\begin{gather\*}  I<sup>{\\mathrm{csv}}<sub>n</sub></sup>(x) = 2 (-1)<sup>n</sup> \\Bigg\[P<sub>n</sub>(x) +\\frac{1}{n}\\sum <sub>k=1</sub><sup>\\lceil n/2\\rceil -1</sup>(n-2k-1) \\frac{\\log <sup>2k</sup>\|x\|<sup>2}{</sup>(2k+1)!} P<sub>n-2k</sub>(x)\\Bigg\]. \\end{gather\*}”

**Sources:**

- [Don Zagier, Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields (1990)](https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf)
- [Steven Charlton, Claude Duhr and Herbert Gangl, Clean Single-Valued Polylogarithms (2021)](https://arxiv.org/abs/2104.04344v2)

### Clean polylogarithms give Clausen values

**Remember:** On the unit circle the logarithmic corrections all vanish.

*True by definition.* MSC 33B30 (Higher logarithm functions), 11G55. arXiv math.NT, math.CA. Level 4: research.

**Definition.** For integer n &gt; 1 and z ≠ 0,1, the clean value is 2(−1)ⁿ times Pₙ(z) plus the terms (n−2k−1)H²ᵏPₙ₋₂ₖ(z)/(n(2k+1)!) for integers 1 ≤ k &lt; (n−1)/2. Here Pⱼ is Zagier's single-valued polylogarithm and H = log\|z\|², so every added term vanishes on the unit circle.

**Problem.** At a root of unity z=exp(iθ) other than 1, the clean value equals 2(−1)ⁿClₙ(θ). Here Clₙ(θ) takes the real part of Liₙ(z) for odd n and the imaginary part for even n.

**How the definition helps.** On the unit circle H = 0, so the clean value is 2(−1)ⁿPₙ(z) (our own calculation). Zagier's Bernoulli formula builds Pₙ from the real or imaginary part of Liₙ plus terms with a factor log\|z\|, so on the circle Pₙ is that part alone. That part is Clₙ(θ).

**Paper or page:** [Clean Single-Valued Polylogarithms](https://arxiv.org/abs/2104.04344v2). It says: “Then Iₙᶜˢᵛ(ξ(N)ᵃ) = 2(−1)ⁿ Clₙ(2πa/N)”

**Sources:**

- [Steven Charlton, Claude Duhr and Herbert Gangl, Clean Single-Valued Polylogarithms (2021)](https://arxiv.org/abs/2104.04344v2)

### Cross ratios organize fiber identities

**Remember:** Feed cross ratios to the dilogarithm, then sum over preimages.

*Makes the theorem clean to state or prove.* MSC 33B30 (Higher logarithm functions), 39B32. arXiv math.CA. Level 4: research.

**Definition.** V(a,b,c,d) is the Bloch–Wigner dilogarithm of the cross ratio (a−c)(b−d)/((a−d)(b−c)) of four distinct points on the Riemann sphere, taking a limit when one point is ∞. It is one function of four points, so it can be summed over preimages of any four target points.

**Problem.** Let φ be a rational map of degree n ≥ 1, let A, B, C, D be distinct, and fix a with φ(a) = A. Then the sum of V(a,b,c,d) over all preimages b, c, d of B, C, D, counted with multiplicity, is nV(A,B,C,D).

**How the definition helps.** Writing the identity through V gives one formula for every choice of targets, including ∞ (our own explanation). Gangl's Theorem 2.1 supplies the equality, from the generalized functional equation of the dilogarithm.

**nLab:** [cross ratio](https://ncatlab.org/nlab/show/cross+ratio). It says: “The cross ratio (A,B;C,D) is then the image of D under this isomorphism.”

**Sources:**

- [Herbert Gangl, Functional equations for higher logarithms (2003)](https://maths.dur.ac.uk/users/herbert.gangl/feq_polylogs.pdf)
- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Dilogarithm endpoints give Mahler measure

**Remember:** D is the antiderivative, so the measure is two endpoint values.

*True by definition.* MSC 33B30 (Higher logarithm functions), 11R06. arXiv math.NT, math.CA. Level 4: research.

**Definition.** On the unit circle define D(exp(iθ)) by integrating −log\|1−exp(it)\| from 0 to θ. This D agrees with the Bloch–Wigner dilogarithm on the circle.

**Problem.** The logarithmic Mahler measure of 1+x+y, the mean of log\|1+x+y\| on the unit torus, is D(exp(iπ/3))/π.

**How the definition helps.** Jensen's formula averages out y and leaves the mean over x of max(0, log\|1+x\|) (our own proof). After x ↦ −x this is an integral of log\|1−exp(it)\| over t in \[π/3, 5π/3\], so it equals D(exp(iπ/3)) − D(exp(5iπ/3)). The two endpoint values are opposite, and dividing by 2π gives D(exp(iπ/3))/π.

**Wikipedia:** [Mahler measure](https://en.wikipedia.org/wiki/Mahler_measure). It says: “m(1+x+y) = 3√3/(4π) L(χ₋₃,2)”

**Sources:**

- [Chris Smyth, Appendix 1 in David W. Boyd, Speculations concerning the range of Mahler’s measure (1981)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S000843950006570X)
- [David W. Boyd and Fernando Rodriguez-Villegas, Mahler’s Measure and the Dilogarithm (I) (2002)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/85ADE50E3B3E825FDF7B5D9C174E44FC/S0008414X00028728a.pdf/mahleras_measure_and_the_dilogarithm_i.pdf)

### Exterior products test dilogarithm identities

**Remember:** The symbol (1−f) ∧ f records the derivative of D(f).

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 39B32, 11G55. arXiv math.CA, math.NT. Level 4: research.

**Definition.** For a rational function f other than 0 and 1 on a smooth complex curve X, take the symbol (1−f) ∧ f in Λ²ℂ(X)×, the alternating product that is multiplicative in each slot. The map u ∧ v ↦ log\|u\| d arg v − log\|v\| d arg u sends this symbol to −dD(f), where D is the Bloch–Wigner dilogarithm (our own). Extend both to integer sums of symbols.

**Problem.** Write D for the Bloch–Wigner dilogarithm. If Σaⱼ(1−fⱼ) ∧ fⱼ=0, then ΣaⱼD(fⱼ) is constant on each connected open set avoiding zeros, poles and values of one.

**How the definition helps.** A sum of symbols that is zero maps to zero, so d(ΣaⱼD(fⱼ)) = 0 and the sum is locally constant (our own proof). The map is well defined because it is alternating and additive in each slot. Differentiating D(z) = Im Li₂(z) + arg(1−z) log\|z\| gives the image of (1−f) ∧ f.

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “The Bloch–Wigner dilogarithm is defined by D(z) ≔ Im(Li₂(z)) + arg(1−z) log\|z\|.”

**Sources:**

- [Don Zagier, The Dilogarithm Function (2007)](https://maths.dur.ac.uk/users/herbert.gangl/dilog.pdf)

### Logarithm sheets resolve Rogers monodromy

**Remember:** Keep the logarithm sheets and take the value modulo π².

*True by definition.* MSC 33B30 (Higher logarithm functions), 11G55, 57K31. arXiv math.CA, math.GT. Level 4: research.

**Definition.** Write Li₂ for the dilogarithm and log for the principal logarithm. On the cover of ℂ∖{0,1} that follows log z + pπi and −log(1−z) + qπi continuously, with integers p and q, set R = Li₂(z) + log(z)log(1−z)/2 + πi(p log(1−z) + q log z)/2 − π²/6. The integers p and q record the sheet of each logarithm, so they absorb its jump across a cut.

**Problem.** The formula for R defines a single-valued function on this logarithm cover with values in ℂ/π²ℤ.

**How the definition helps.** Crossing a cut changes a logarithm and its sheet index together, and the p and q terms cancel every jump that depends on z (our own account of Neumann's cut calculation). Across the negative axis only an integer multiple of qπ² is left. Across (1,∞) only an integer multiple of pπ² is left.

**nLab:** [Bloch group](https://ncatlab.org/nlab/show/Bloch+group). It says: “Accordingly H₃ᵍʳᵖ(♭ PSL(2,ℂ), ℤ) itself is also called the extended Bloch group”

**Sources:**

- [Walter D. Neumann, Extended Bloch group and the Cheeger–Chern–Simons class (2004)](https://msp.org/gt/2004/8-1/gt-v8-n1-p10-p.pdf)

### Rogers complements simplify cluster sums

**Remember:** A negative tropical sign chooses the complementary argument.

*Makes the theorem clean to state or prove.* MSC 33B30 (Higher logarithm functions), 13F60. arXiv math.CA. Level 4: research.

**Definition.** Along a sequence of cluster mutations, each step gives u = y/(1+y), where y is the mutated coefficient at positive initial values. A step is negative when its tropical monomial, computed with minimum in place of addition, has nonpositive exponents, not all zero, and there we use 1 − u in place of u. The Rogers dilogarithm L(u) = Li₂(u) + log(u)log(1−u)/2 on (0,1) satisfies L(u) + L(1−u) = π²/6.

**Problem.** Suppose the mutations return the initial matrix and coefficient variables up to the same permutation. Then the sum of L(u) over the other steps and of −L(1 − u) over the negative steps is zero.

**How the definition helps.** The periodic mutation theorem says the sum of L(u) over all steps is π²/6 times the number of negative steps. On each negative step L(u) = π²/6 − L(1−u), so moving each π²/6 across leaves the signed sum zero (our own explanation).

**nLab:** [dilogarithm](https://ncatlab.org/nlab/show/dilogarithm). It says: “the Bloch group, CFT, Liouville gravity, hyperbolic geometry and cluster transformations”

**Wikipedia:** [Dilogarithm](https://en.wikipedia.org/wiki/Dilogarithm). It says: “Abel's functional equation or five-term relation”

**Sources:**

- [Rinat M. Kashaev and Tomoki Nakanishi, Classical and Quantum Dilogarithm Identities (2011)](https://sigma-journal.com/2011/102/)

### Rogers coordinates telescope a series

**Remember:** Each five-term step passes two arguments on to the next.

*True by definition.* MSC 33B30 (Higher logarithm functions), 39B32. arXiv math.CA, math.NT. Level 4: research.

**Definition.** The Rogers dilogarithm L(t) = Li₂(t) + log(t)log(1 − t)/2 on (0,1) satisfies L(x) + L(y) = L(xy) + L(x′) + L(y′), where x′ = x(1 − y)/(1 − xy) and y′ = y(1 − x)/(1 − xy). For 0 &lt; b &lt; a &lt; 1, start at (x₀,y₀) = (a,b) and iterate (x,y) ↦ (x′,y′).

**Problem.** The sum of L(xₙyₙ) over integers n≥0 is L(a)+L(b)−L((a−b)/(1−b)).

**How the definition helps.** Each step turns L(xₙ) + L(yₙ) into L(xₙyₙ) + L(xₙ₊₁) + L(yₙ₊₁), so the sum telescopes to L(a) + L(b) minus the limit of L(xₙ) + L(yₙ) (our own). Both coordinates decrease, and (1 − xₙ)/(1 − yₙ) stays equal to (1 − a)/(1 − b). The limit pair is fixed by the update, so yₙ → 0 and xₙ → (a − b)/(1 − b), with L(0) = 0.

**Wikipedia:** [Dilogarithm](https://en.wikipedia.org/wiki/Dilogarithm). It says: “L(x)+L(y)=L(xy)+L(x(1−y)/(1−xy))+L(y(1−x)/(1−xy)).”

**Paper or page:** [A Dilogarithm Series and a Generalization of a Theorem of Bridgeman](https://arxiv.org/abs/2410.21619v2). It says: “The terms xₙ and yₙ satisfy the recurrence relations xₙ₊₁ = xₙ(1−yₙ)/(1−xₙyₙ), and yₙ₊₁ = yₙ(1−xₙ)/(1−xₙyₙ).”

**Sources:**

- [Chance Sanford, A Dilogarithm Series and a Generalization of a Theorem of Bridgeman (Integers, 2025)](https://arxiv.org/abs/2410.21619v2)

### Trilogarithm corrections make sums constant

**Remember:** Two log corrections leave a derivative that the symmetries cancel.

*True by definition. Confidence: medium.* MSC 33B30 (Higher logarithm functions), 11G55. arXiv math.CA, math.NT. Level 4: research.

**Definition.** Let A = log\|z\| and B = log\|1−z\|. Zagier's P₃(z) = Re Li₃(z) − A Re Li₂(z) − A²B/3, extended real-analytically across the cut, has derivative −D(z) d arg z + (A/3)(B dA − A dB), with D the Bloch–Wigner dilogarithm (our own).

**Problem.** For z ∉ {0,1}, P₃(z)+P₃(1−z)+P₃(1−1/z)=ζ(3).

**How the definition helps.** Under z ↦ 1−z and z ↦ 1−1/z, the symmetries of D cancel the angle terms and the log terms sum to zero, so the sum is constant (our own). Letting z → 0 and using P₃(1/z) = P₃(z) gives the constant ζ(3).

**nLab:** [polylogarithm](https://ncatlab.org/nlab/show/polylogarithm). It says: “Polylogarithms Liₙ(x) generalize dilogarithms.”

**Sources:**

- [Don Zagier, Polylogarithms, Dedekind zeta functions, and the algebraic K-theory of fields (1990)](https://people.mpim-bonn.mpg.de/zagier/files/scanned/PolylogsDedekindZetaAndKTheory/fulltext.pdf)

### Normalized convolution joins parameters

**Remember:** Multiply coefficients, then divide out the shared binomial once.

*True by definition.* MSC 33C20 (Generalized hypergeometric series, \\(\_pF<sub>q</sub>\\)). arXiv math.CA. Level 4: research.

**Definition.** For polynomials of degree at most n with constant term one, their finite free multiplicative convolution multiplies the coefficients of xᵏ and divides by Bₖ = (−1)ᵏ binom(n,k), for 0 ≤ k ≤ n. The division removes one copy of the binomial factor when both coefficients contain it.

**Problem.** Take two terminating hypergeometric polynomials, each with upper parameter −n, whose lower rising products are nonzero up to degree n. Their convolution is the hypergeometric polynomial with upper parameter −n and the two remaining parameter lists joined.

**How the definition helps.** Each hypergeometric polynomial with upper parameter −n has xᵏ coefficient Bₖ = (−n)ₖ/k! times a ratio of rising products (our own). The product of coefficients contains Bₖ twice, and the convolution removes one copy. What remains is the hypergeometric polynomial with both parameter lists joined.

**Paper or page:** [Zeros of generalized hypergeometric polynomials via finite free convolution. Applications to multiple orthogonality](https://arxiv.org/abs/2404.11479v2). It says: “then their n-th free multiplicative convolution is given by”

**Sources:**

- [Andrei Martinez-Finkelshtein, Rafael Morales, Daniel Perales. Zeros of generalized hypergeometric polynomials via finite free convolution. Applications to multiple orthogonality](https://arxiv.org/abs/2404.11479v2)

### Disjoint weights locate zeros

**Remember:** Each interval contributes its own sign changes to the degree count.

*Rules out counterexamples.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** An Angelesco system has positive measures μ₁,…,μᵣ with finite moments and infinite supports, each in its own real interval, and the intervals have disjoint interiors. For nonnegative integers n₁,…,nᵣ, the polynomial P must be orthogonal in μⱼ to every polynomial of degree below nⱼ, for each j.

**Problem.** The polynomial with leading coefficient one and degree n₁ + ⋯ + nᵣ satisfying these conditions has exactly nⱼ simple zeros inside interval j.

**How the definition helps.** Fewer than nⱼ sign changes inside interval j would give a polynomial Q of degree below nⱼ with PQ of constant sign there, so ∫PQ dμⱼ ≠ 0 (our own proof). Disjoint interiors keep these sign changes distinct, and together they use up all n₁ + ⋯ + nᵣ zeros, so each zero is simple. Two identical measures at index (1,1) show that the intervals must be separate.

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1). It says: “Then Pₙ has exactly nⱼ zeros on each Γ̊ⱼ, and each zero is simple.”

**Sources:**

- [Rostyslav Kozhan, Marcus Vaktnäs. Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1)

### Divided differences clear Uvarov denominators

**Remember:** R(z) minus R(x) divides by z minus x, leaving a polynomial.

*True by definition.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** A Uvarov change replaces a matrix measure μ by ν with dν(x)R(x) = L(x)dμ(x), for polynomial matrices L and R. The Cauchy transform integrates each entry against 1/(z − x), and each divided difference (R(z) − R(x))/(z − x) is again a polynomial.

**Problem.** For z outside both supports, the new Cauchy transform times R(z) equals L(z) times the old one plus a polynomial matrix. This needs finite moments up to the degrees of L and R, and the polynomial has degree below the larger of them.

**How the definition helps.** Write R(z) = R(x) + (R(z) − R(x)) inside the integral and use the measure relation, so only divided differences of L and R are left, and they are polynomials (our own). Their degree is below the larger of the degrees of L and R. Constructing ν itself is a separate problem.

**Paper or page:** [Uvarov Perturbations for Multiple Orthogonal Polynomials of the Mixed Type on the Step-Line](https://arxiv.org/abs/2510.13754v1). It says: “induces a matrix linear spectral transformation of the form”

**Sources:**

- [Manuel Mañas, Miguel Rojas. Uvarov Perturbations for Multiple Orthogonal Polynomials of the Mixed Type on the Step-Line](https://arxiv.org/abs/2510.13754v1)

### Double shifts detect Wronskian zeros

**Remember:** A double zero at z becomes a squared factor in the measures.

*Makes the theorem clean to state or prove.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** A list of counts n is normal for measures μ₁,…,μᵣ with finite moments when exactly one monic polynomial of degree N = n₁ + ⋯ + nᵣ is orthogonal to 1, x, …, x<sup>(nⱼ−1)</sup> in each μⱼ. Equivalently, no nonzero polynomial of degree below N meets these N conditions (our own).

**Problem.** Let n be a normal list, and let n + eⱼ, which adds one to count j, also be normal. The Wronskian of their two polynomials vanishes at z exactly when multiplying every measure by (x − z)² destroys normality of n.

**How the definition helps.** Normality makes the polynomials for n and n + eⱼ a basis of the polynomials of degree at most N+1 that meet the conditions for n (our own proof). Their Wronskian vanishes at z exactly when a nonzero combination has a double zero at z. Dividing it by (x−z)² gives a nonzero solution of degree below N for the measures (x−z)²μⱼ, which is exactly a loss of normality.

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1). It says: “Assume n and n + eⱼ are normal for μ.”

**Sources:**

- [Rostyslav Kozhan, Marcus Vaktnäs. Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1)

### Separate intervals locate orthogonal zeros

**Remember:** Each separate interval needs its own quota of sign changes.

*Rules out counterexamples.* MSC 33C47 (Other special orthogonal polynomials and functions). arXiv math.CA. Level 4: research.

**Definition.** Take positive measures μ₁,…,μᵣ with all moments finite and infinite supports in disjoint closed real intervals. Their Angelesco polynomial P is monic of degree n₁ + ⋯ + nᵣ and, for each j, orthogonal in μⱼ to every polynomial of degree below nⱼ.

**Problem.** The polynomial has exactly nⱼ simple zeros inside interval j for each j.

**How the definition helps.** Separate intervals let us count sign changes for each measure without counting any root twice (our own). In interval j, let Q be the product of the linear factors at the interior sign changes of P. Then PQ has constant sign there and nonzero integral, so orthogonality forces Q to have degree at least nⱼ. With two identical uniform measures on \[−1,1\] and index (1,1), x² − 1/3 meets both conditions but has two roots there (our own).

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122). It says: “Then Pₙ has exactly nⱼ zeros on each Γ̊ⱼ, and each zero is simple.”

**Sources:**

- [Rostyslav Kozhan and Marcus Vaktnäs, Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122)

### Shifted measures detect zeros

**Remember:** Multiplying each measure by x−z hides the root factor x−z.

*Makes the theorem clean to state or prove.* MSC 33C47 (Other special orthogonal polynomials and functions), 42C05. arXiv math.CA. Level 4: research.

**Definition.** A list of counts n is normal for measures μ₁,…,μᵣ with finite moments when exactly one monic polynomial P of degree N = n₁ + ⋯ + nᵣ is orthogonal to 1, x, …, x<sup>(nⱼ−1)</sup> in each μⱼ. Equivalently, no nonzero polynomial of degree below N meets these conditions (our own).

**Problem.** For a normal list, z is a root of its polynomial exactly when multiplying each measure by x − z destroys normality.

**How the definition helps.** If the measures (x − z)μⱼ are not normal, some nonzero Q of degree below N meets their conditions, so (x − z)Q meets the original ones and is a multiple of P by uniqueness (our own proof). Conversely, if P(z) = 0, then P/(x − z) meets the modified conditions and has degree below N.

**Paper or page:** [Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1). It says: “Let n be normal with respect to μ.”

**Sources:**

- [Rostyslav Kozhan, Marcus Vaktnäs. Zeros of Multiple Orthogonal Polynomials: Location and Interlacing](https://arxiv.org/abs/2503.15122v1)

### Macdonald operators give orthogonality

**Remember:** A self-adjoint operator with distinct eigenvalues has orthogonal eigenvectors.

*True by definition.* MSC 33D52 (Basic orthogonal polynomials and functions associated with root systems (Macdonald polynomials, etc.)). arXiv math.CA. Level 4: research.

**Definition.** In N variables, the first Macdonald operator sums the q-shifts xᵢ ↦ qxᵢ, weighting shift i by the product of (txᵢ − xⱼ)/(xᵢ − xⱼ) over j ≠ i, and it is self-adjoint for the Macdonald inner product. For generic q, t and a partition λ with at most N parts, P\_λ is its symmetric eigenpolynomial with monomial coefficient of m\_λ equal to one and eigenvalue E\_λ = ∑ᵢ q<sup>(λᵢ)</sup>t<sup>(N−i)</sup>, with λ padded by zeros.

**Problem.** For generic parameters, distinct labels have different lists of eigenvalues. The corresponding polynomials are orthogonal for the Macdonald inner product.

**How the definition helps.** Distinct partitions give distinct E\_λ, because the coefficient of each power t<sup>(N−i)</sup> records the part λᵢ (our own argument). Self-adjointness gives (E\_λ − E\_μ)⟨P\_λ,P\_μ⟩ = 0, so ⟨P\_λ,P\_μ⟩ = 0 when λ ≠ μ.

**Wikipedia:** [Macdonald polynomials](https://en.wikipedia.org/wiki/Macdonald_polynomials). It says: “for an algebra of commuting self-adjoint operators with 1-dimensional eigenspaces”

**Sources:** none listed. No primary source with a working link was found.

### Balanced parameters give elliptic ratios

**Remember:** Equal parameter products cancel the multiplier from x ↦ px.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals), 33D15. arXiv math.CA. Level 4: research.

**Definition.** For 0 &lt; \|p\| &lt; 1, let θ(x;p) be the product of (1 − xpʲ)(1 − pʲ⁺¹/x) over j ≥ 0, so that θ(px;p) = −θ(x;p)/x. A ratio with equally many factors θ(ax;p) above and θ(bx;p) below, all a and b nonzero, is balanced when the product of the a's equals the product of the b's.

**Problem.** A balanced ratio gives a meromorphic function on the complex torus formed by identifying each nonzero x with px.

**How the definition helps.** Replacing x by px multiplies each factor by −1/(ax) or −1/(bx), so equal counts leave only the multiplier ∏b/∏a (our own). Balance makes this multiplier one. Without balance, θ(2x;p)/θ(3x;p) gains a factor of 3/2 (our own).

**Wikipedia:** [Elliptic hypergeometric series](https://en.wikipedia.org/wiki/Elliptic_hypergeometric_series). It says: “the ratio cₙ/cₙ₋₁ is an elliptic function of n”

**Sources:**

- [S. Ole Warnaar, Summation and transformation formulas for elliptic hypergeometric series (2002)](https://doi.org/10.1007/s00365-002-0501-6)

### Nonmatching multipliers make residues decisive

**Remember:** Exclude the matching multipliers, and no pole-free term survives.

*Rules out counterexamples.* MSC 33E05 (Elliptic functions and integrals). arXiv math.CV. Level 4: research.

**Definition.** Fix complex y and τ with Im τ &gt; 0, and put q = exp(2πiτ). Consider meromorphic f with f(z + π) = f(z) and f(z + πτ) = exp(−2iy)f(z), where exp(2iy) ≠ qⁿ for every integer n, so that no exponential exp(2inz) has this second multiplier.

**Problem.** A function in this class with only simple poles is determined by the locations and residues of its poles in one period parallelogram.

**How the definition helps.** Two functions with the same pole data differ by a pole-free function in the class, which π-periodicity makes a series of terms cₙexp(2inz) (our own). The shift by πτ multiplies term n by qⁿ, never by exp(−2iy), so every cₙ vanishes. At y = 0 the claim fails, because adding a constant keeps the pole data.

**Paper or page:** [Kronecker theta function and a decomposition theorem for theta functions I](https://arxiv.org/abs/2012.01670v1). It says: “where e²ⁱʸ ≠ qⁿ for n ∈ ℤ.”

**Sources:**

- [Zhi-Guo Liu, Kronecker theta function and a decomposition theorem for theta functions I, Theorem 1.7](https://arxiv.org/abs/2012.01670v1)

### Orbital residues decide elliptic summability up to two terms

**Remember:** Shifts slide poles along orbits, so orbit sums cannot change.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 33E05 (Elliptic functions and integrals), 39A10, 14K20. arXiv math.NT, math.CV. Level 4: research.

**Definition.** Fix a shift s on a complex torus with ks ≠ 0 for every positive integer k, so each orbit of shifts is infinite. The orbital residues of an elliptic function are, for each orbit and each k ≥ 1, the sum of its coefficients of (z − a)⁻ᵏ over the poles a in that orbit. A summable function g(z+s) − g(z), with g elliptic, has all orbital residues zero, since the shift only slides poles along orbits (our own).

**Problem.** Let s be non-torsion and fix the normalization the paper calls an analytic pinning. All orbital residues of an elliptic f vanish exactly when f is summable plus a + b(ζ(z + s) − ζ(z)) for constants a and b, where ζ is the Weierstrass zeta function with ζ′ = −℘.

**How the definition helps.** Orbital residues are exactly the pole data that a shift difference cannot change (our own explanation). The cited corollary with analytic pinning proves the converse, with a constant and a multiple of ζ(z+s) − ζ(z) as the only extra terms.

**Paper or page:** [Summability of Elliptic Functions via Residues](https://arxiv.org/abs/2503.22770). It says: “Dreyfus, Hardouin, Roques, and Singer introduced a notion of elliptic orbital residues, which altogether serve as a partial obstruction to summability for elliptic functions with respect to the shift by a non-torsion point over an elliptic curve.”

**Sources:**

- [Matthew Babbitt, Summability of Elliptic Functions via Residues, arXiv:2503.22770 (2025)](https://arxiv.org/abs/2503.22770)

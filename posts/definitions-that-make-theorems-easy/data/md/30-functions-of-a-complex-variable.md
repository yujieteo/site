### Conjugation makes the complex modulus multiplicative

**Remember:** Conjugation respects products, so the squared modulus does too.

*True by definition.* MSC 30A99 (General properties of functions of one complex variable). arXiv math.CV. Level 1: early undergraduate.

**Definition.** For z = x + iy, its complex conjugate is z̄ = x − iy. Define the modulus by \|z\| = √(z z̄), the nonnegative square root of the real number z z̄. The coordinate definition is \|z\| = √(x² + y²).

**Problem.** For all complex numbers z and w, \|zw\| = \|z\|\|w\|.

**How the definition helps.** The conjugate definition makes the squared modulus of a product a rearrangement of factors. Conjugation sends zw to z̄w̄, so \|zw\|² = (z z̄)(w w̄) = \|z\|²\|w\|². Taking nonnegative square roots gives the result. With coordinates, one would instead expand the squares of the real and imaginary parts of zw (our own comparison). The work moves into showing from complex multiplication that conjugation respects products (our own explanation).

**Wikipedia:** [Absolute value](https://en.wikipedia.org/wiki/Absolute_value). It says: “\|z\| = √(z · z̄).”

**Sources:** none listed. No primary source with a working link was found.

### A complex derivative as an i-linear map gives Cauchy–Riemann at once

**Remember:** The derivative's value on i is i times its value on 1.

*True by definition. Confidence: medium.* MSC 30A05 (Monogenic and polygenic functions of one complex variable), 26B05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Identify ℂ with ℝ². Call f complex differentiable at z if it has a real linear approximation L there with L(iv) = iL(v) for every vector v. The usual definition takes the limit of (f(z + h) − f(z))/h over complex h → 0.

**Problem.** Let f = u + iv be complex differentiable at a point. Then ∂u/∂x = ∂v/∂y and ∂u/∂y = −∂v/∂x at that point.

**How the definition helps.** With this definition, the equations are just L(i) = iL(1) written in coordinates (our own). Here L(1) = ∂u/∂x + i∂v/∂x and L(i) = ∂u/∂y + i∂v/∂y (our own). Since iL(1) = −∂v/∂x + i∂u/∂x, comparing real and imaginary parts gives both equations (our own). The work moves into the lemma that the two definitions agree (our own). It holds because a real linear map that commutes with i is multiplication by one complex number (our own).

**Wikipedia:** [Cauchy–Riemann equations](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations). It says: “the partial derivatives of u and v exist and satisfy the Cauchy–Riemann equations at that point.”

**Paper or page:** [Cauchy-Riemann Equations/Necessary Condition](https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Necessary_Condition). It says: “The following two equations, known as the Cauchy-Riemann equations, hold for the partial derivatives of u and v:”

**Sources:** none listed. No primary source with a working link was found.

### Real differentiability makes the Cauchy–Riemann test sufficient

**Remember:** Check the linear approximation before checking its two columns.

*Rules out counterexamples.* MSC 30A05 (Monogenic and polygenic functions of one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A function is real differentiable at z if a real linear map approximates its change under small displacements h. The error divided by \|h\| must tend to zero as h tends to zero.

**Problem.** Write f = u + iv and suppose f is real differentiable at a point. There f has a complex derivative exactly when its partial derivatives satisfy uₓ = vᵧ and uᵧ = −vₓ.

**How the definition helps.** The equations force the real linear approximation to be multiplication by uₓ + ivₓ (our own proof). Partial derivatives alone miss the failure of f(x + iy) = xy/√(x² + y²), with f(0) = 0. Its partial derivatives vanish at zero, but the difference quotient along the diagonal has opposite one-sided limits (our own example).

**Paper or page:** [Cauchy-Riemann Equations/Sufficient Condition](https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Sufficient_Condition). It says: “u and v be differentiable in their entire domain”

**Sources:** none listed. No primary source with a working link was found.

### The Wirtinger derivative test makes holomorphic functions harmonic

**Remember:** One factor of the Laplacian already vanishes on holomorphic functions.

*True by definition.* MSC 30A05 (Monogenic and polygenic functions of one complex variable), 31A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a continuously differentiable function, define D = ½(∂/∂x − i∂/∂y) and E = ½(∂/∂x + i∂/∂y), the two Wirtinger operators. Call the function holomorphic if E sends it to zero. The usual definition uses a complex difference quotient.

**Problem.** The real and imaginary parts of a holomorphic function are harmonic. Their second partial derivatives in x and y sum to zero.

**How the definition helps.** The Wirtinger definition makes harmonicity follow from a factorization. On twice continuously differentiable functions, the Laplacian, the sum of the two second partial derivatives, is 4DE. This factorization follows by expanding the product and canceling the equal mixed partial derivatives. Since Ef = 0, the Laplacian of f is zero, so both parts have zero Laplacian. This is our own calculation. The equivalence with the difference quotient uses real differentiability, and the power series theorem supplies the second derivatives.

**Wikipedia:** [Wirtinger derivatives](https://en.wikipedia.org/wiki/Wirtinger_derivatives). It says: “The second Wirtinger derivative is also related with complex differentiation; ∂f/∂z̄ = 0 is equivalent to the Cauchy-Riemann equations in a complex form.”

**Paper or page:** [Real and Imaginary Parts of Holomorphic Function are Harmonic](https://proofwiki.org/wiki/Real_and_Imaginary_Parts_of_Holomorphic_Function_are_Harmonic). It says: “Then u and v are harmonic functions.”

**Sources:**

- [W. Wirtinger, Zur formalen Theorie der Funktionen von mehr komplexen Veränderlichen, Mathematische Annalen 97 (1927), 357–375](https://doi.org/10.1007/BF01447872)

### Circle averages give Cauchy’s bounds on Taylor coefficients

**Remember:** The factor that selects a coefficient has magnitude one.

*True by definition.* MSC 30A10 (Inequalities in the complex plane), 30E20, 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a holomorphic function f, one can define its nth Taylor coefficient at a by averaging f(a + r exp(iθ)) exp(−inθ) over all angles. Divide this average by the nth power of r. The usual definition divides the nth derivative at a by n!.

**Problem.** Suppose f is holomorphic near a closed disk centered at a, with radius r and largest boundary magnitude M. Its nth Taylor coefficient at a has magnitude at most M divided by the nth power of r.

**How the definition helps.** The factor exp(−inθ) has magnitude one, so in our own proof the triangle inequality gives the bound directly. The work behind our own use of this definition is proving Cauchy’s formula and identifying its circle averages with Taylor coefficients.

**Wikipedia:** [Cauchy's integral formula](https://en.wikipedia.org/wiki/Cauchy%27s_integral_formula). It says: “then the coefficients aₙ satisfy Cauchy's estimate”

**Sources:** none listed. No primary source with a working link was found.

### Absolute convergence lets a power series change its center

**Remember:** Recenter inside the radius and budget for both distances.

*Makes the theorem clean to state or prove.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a power series ∑ aₙzⁿ, consider the radii r ≥ 0 where ∑ \|aₙ\|rⁿ is finite. Their least upper bound is the radius of convergence, with value ∞ if they are unbounded.

**Problem.** A power series with radius R has a power series about each point a with \|a\| &lt; R. The new series agrees with the old sum throughout \|z − a\| &lt; R − \|a\|.

**How the definition helps.** Absolute convergence allows the expanded terms to be grouped by powers of z − a. Our own proof writes z = a + (z − a) and expands each power by the binomial theorem. The sum of the absolute values is bounded by ∑ \|aₙ\|rⁿ with r = \|a\| + \|z − a\| &lt; R.

**Wikipedia:** [Power series](https://en.wikipedia.org/wiki/Power_series). It says: “The series converges absolutely inside its disc of convergence”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 8.4](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### An everywhere convergent Taylor series exposes Liouville’s theorem

**Remember:** A bounded entire series can keep only its constant term.

*True by definition. Confidence: medium.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** An entire function can be defined by a single power series that converges everywhere in the complex plane. Equivalently it is complex differentiable at every point of the plane.

**Problem.** Every bounded entire function is constant.

**How the definition helps.** One series gives the same coefficients at every radius (our own proof). Cauchy’s estimate bounds each positive-degree coefficient by the global bound divided by the radius raised to that degree. Letting the radius grow forces each such coefficient to vanish. The work lies in proving the global series representation and the coefficient estimate (our own proof).

**Paper or page:** [Liouville's Theorem (Complex Analysis)](https://proofwiki.org/wiki/Liouville's_Theorem_(Complex_Analysis)). It says: “Let f: ℂ → ℂ be a bounded entire function. Then f is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Complex differentiability on a disk gives a Taylor series

**Remember:** A derivative at one point is not a Taylor series around it.

*Rules out counterexamples.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Holomorphic at a point means complex differentiable throughout an open disk about that point. Differentiability at the point alone only tests difference quotients based at that point.

**Problem.** A function holomorphic at a point has a power series expansion on some disk about that point.

**How the definition helps.** The neighborhood condition gives a circle and its interior on which to use Cauchy’s formula (our own). Our own counterexample to using one derivative is f(z) = \|z\|², whose derivative exists at zero and nowhere else. The work is to derive the Taylor series from Cauchy’s formula (our own).

**Wikipedia:** [Complex analysis](https://en.wikipedia.org/wiki/Complex_analysis). It says: “Complex functions that are differentiable at every point of an open subset Ω of the complex plane are said to be holomorphic on Ω.”

**Paper or page:** [Holomorphic Function is Analytic](https://proofwiki.org/wiki/Holomorphic_Function_is_Analytic). It says: “Then f is complex analytic on D.”

**Sources:** none listed. No primary source with a working link was found.

### Differentiation preserves a power series radius

**Remember:** An nth root makes the derivative’s factor n vanish in the limit.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the radius of convergence of ∑ aₙ(z − c)ⁿ as 1/limsup \|aₙ\|<sup>(1/n)</sup>, with 1/0 = ∞ and 1/∞ = 0. Geometrically, it is the supremum of the distances from c at which the series converges.

**Problem.** A complex power series and its termwise derivative have the same radius of convergence.

**How the definition helps.** The coefficient rule makes the extra factor n harmless, since its nth root tends to one (our own). Apply the rule to the derivative multiplied by the variable minus the center to align the powers (our own). That multiplication does not change convergence off the center (our own). The work goes into the Cauchy–Hadamard theorem, which gets the disk from the coefficient rule (our own).

**Paper or page:** [Radius of Convergence of Derivative of Complex Power Series](https://proofwiki.org/wiki/Radius_of_Convergence_of_Derivative_of_Complex_Power_Series). It says: “Then R = R′.”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphic as one power series on a disk gives antiderivatives there

**Remember:** Integrate each power, and the radius of convergence stays the same.

*True by definition. Confidence: medium.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 30A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** On an open disk, describe a holomorphic function by one power series about the centre that converges on the whole disk. The usual definition asks for a complex derivative at each point. A theorem of Cauchy says that the two agree on disks.

**Problem.** Every holomorphic function on an open disk has an antiderivative defined throughout the disk.

**How the definition helps.** With one series on the whole disk, integrating term by term gives an explicit antiderivative (our own). The series of aₙ(z − c)ⁿ⁺¹/(n + 1) has the same radius of convergence as the series for f, and differentiating it term by term gives back f (our own). The work moves into the theorem that a holomorphic function on a disk has one series valid on the whole disk, which rests on Cauchy's integral formula.

**Wikipedia:** [Analyticity of holomorphic functions](https://en.wikipedia.org/wiki/Analyticity_of_holomorphic_functions). It says: “The argument, first given by Cauchy, hinges on Cauchy's integral formula and the power series expansion of the expression”

**Sources:** none listed. No primary source with a working link was found.

### Log-convexity controls reciprocal signs

**Remember:** Nondecreasing coefficient ratios control the signs in the reciprocal series.

*Rules out counterexamples.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive sequence is log-convex if its ratios of successive terms never decrease. This is stronger than requiring positive coefficients in a power series.

**Problem.** For a power series of positive radius with positive log-convex coefficients, its reciprocal has nonpositive coefficients beyond the constant.

**How the definition helps.** Nondecreasing ratios provide the comparisons needed to keep every later reciprocal coefficient nonpositive. Our own explanation uses the identity f(x)(1/f(x)) = 1. Comparing coefficients gives a recurrence, and Kaluza’s sign test follows by induction. Our own counterexample has coefficients 1, 1, ½, ¼, …. Its reciprocal has quadratic coefficient 1 − ½ = ½.

**Paper or page:** [On Kaluza's sign criterion for reciprocal power series](https://arxiv.org/abs/1010.5337v3). It says: “b₀ = 1/a₀ &gt; 0 and bₙ ≤ 0 for all n ∈ {1, 2, …}.”

**Sources:** none listed. No primary source with a working link was found.

### One absolutely convergent boundary point controls the closed disk

**Remember:** The boundary magnitudes bound the terms everywhere inside.

*Rules out counterexamples.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A power series centered at zero converges absolutely at a point if the sum of the magnitudes of its terms there is finite. The closed disk of radius R contains all points whose modulus, or distance from zero, is at most R.

**Problem.** Suppose a power series converges absolutely at a point of modulus R. It converges uniformly to a continuous function on the closed disk of radius R.

**How the definition helps.** Absolute convergence at one boundary point supplies a summable bound for the terms everywhere on the disk (our own argument). The proof applies the Weierstrass M-test, then uses continuity of uniform limits. The series ∑ zⁿ/n, starting at n = 1, converges at −1 and diverges at 1.

**Wikipedia:** [Power series](https://en.wikipedia.org/wiki/Power_series). It says: “Absolute convergence at every point of the boundary”

**Sources:** none listed. No primary source with a working link was found.

### Power series make holomorphic circle averages equal the center value

**Remember:** Only the constant term survives a full turn.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A function is holomorphic if it has a complex derivative at each point of its open domain. Equivalently, it has a convergent power series near each point.

**Problem.** A function holomorphic on an open set containing a closed disk equals its circle average at the disk center.

**How the definition helps.** On a centered circle, every positive power averages to zero, leaving the constant term (our own proof). Cauchy’s formula gives a centered Taylor series valid on a slightly larger disk. Uniform convergence then allows averaging term by term (our own proof).

**Paper or page:** [Mean Value Theorem for Holomorphic Functions](https://proofwiki.org/wiki/Mean_Value_Theorem_for_Holomorphic_Functions). It says: “f(z) = (1/2π) ∫₀²π f(z + r eⁱᶿ) dθ”

**Sources:** none listed. No primary source with a working link was found.

### Power series make holomorphic functions differentiable to every order

**Remember:** Differentiate the power series term by term to get another power series.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a function analytic if it equals a convergent power series near each point of its open domain. The usual definition of holomorphic asks for a complex derivative at every point.

**Problem.** Every holomorphic function has complex derivatives of all orders, and those derivatives are holomorphic.

**How the definition helps.** The power series definition makes each derivative analytic by termwise differentiation. The new series has the same radius of convergence, so we can repeat the step indefinitely. This is our own deduction from the equivalence of analyticity and complex differentiability. The hard part of that equivalence is Goursat’s theorem, which removes the continuity assumption from Cauchy’s integral theorem. Cauchy’s integral formula then gives the power series.

**nLab:** [holomorphic function](https://ncatlab.org/nlab/show/holomorphic+function). It says: “The theorem that every continuously complex-differentiable function is analytic is soft and due to Augustin Cauchy; the theorem that every complex-differentiable function is continuously differentiable is hard and due essentially to Édouard Goursat”

**Paper or page:** [Holomorphic Function is Analytic](https://proofwiki.org/wiki/Holomorphic_Function_is_Analytic). It says: “Let f be a function holomorphic on some open ball D = B(a, r). Then f is complex analytic on D.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Two power series give Laurent series two convergence radii

**Remember:** Test the positive powers in z − a and the negative powers in its reciprocal.

*True by definition.* MSC 30B10 (Power series (including lacunary series) in one complex variable). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A Laurent series about a has one power series in z − a and another in 1/(z − a). The second has no constant term. Convergence requires the two sums to exist separately.

**Problem.** If the Laurent series converges on an open set, its convergence set away from a has an annulus as its interior. The inner radius may be zero and the outer radius infinite.

**How the definition helps.** Separate convergence requires both disk tests to hold at once (our own). The first series gives an outer radius, and the reciprocal variable turns the second radius into an inner boundary (our own). Symmetric partial sums could hide cancellation between the two series (our own). The disk tests use the power series convergence theorem (our own).

**Wikipedia:** [Laurent series](https://en.wikipedia.org/wiki/Laurent_series). It says: “both the positive- and negative degree power series converge.”

**Sources:** none listed. No primary source with a working link was found.

### A bounded approach angle keeps Abel’s boundary limit valid

**Remember:** Approach the boundary point directly enough for the series to follow.

*Rules out counterexamples.* MSC 30B30 (Boundary behavior of power series in one complex variable; over-convergence), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Fix M &gt; 1. The Stolz sector at 1 consists of points z in the open unit disk satisfying \|1−z\| ≤ M(1−\|z\|). This condition limits how closely an approach can follow the boundary circle.

**Problem.** Suppose a power series about zero converges at 1. Its values inside any fixed Stolz sector tend to that same sum as z approaches 1.

**How the definition helps.** The sector bounds the ratio \|1 − z\|/(1 − \|z\|) that multiplies the tail error after summation by parts (our own explanation). The cited counterexample converges at 1 but becomes unbounded near other boundary points arbitrarily close to 1.

**Wikipedia:** [Abel's theorem](https://en.wikipedia.org/wiki/Abel%27s_theorem). It says: “provided that z → 1 entirely within a single Stolz sector”

**Sources:** none listed. No primary source with a working link was found.

### A connected continuation domain makes analytic extensions unique

**Remember:** Agreement on a small open set determines the extension throughout a connected domain.

*Rules out counterexamples.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30C15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A direct analytic continuation extends a holomorphic function from a nonempty open set to a larger domain. A domain is open and connected, unlike an arbitrary open set.

**Problem.** Two direct analytic continuations of the same holomorphic function to the same domain coincide.

**How the definition helps.** The identity theorem applies across the whole continuation domain because it is connected (our own). On two disjoint disks, two extensions can agree on the first disk and be different constants on the second (our own). The work is the identity theorem, which follows from isolated zeros of nonzero holomorphic functions on a domain (our own).

**nLab:** [analytic continuation](https://ncatlab.org/nlab/show/analytic+continuation). It says: “analytic continuation refers to the extension of the domain of an analytic function.”

**Paper or page:** [Uniqueness of Analytic Continuation](https://proofwiki.org/wiki/Uniqueness_of_Analytic_Continuation). It says: “Let V be connected.”

**Sources:** none listed. No primary source with a working link was found.

### Germs turn multivalued functions such as log z into true functions

**Remember:** Do not continue the value; continue the germ, and every branch gets its own point.

*Makes the theorem clean to state or prove.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30F99. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A germ of an analytic function at a point z₀ is its power series at z₀. The set of all germs gets a topology. In it, a basic open set is the set of germs of one analytic function at all points of a disc. A connected component of this space is a Riemann surface, and on it the analytic continuation of a function is one single-valued function.

**Problem.** Analytic continuation of a germ, such as a germ of log z or √z, is a single-valued holomorphic function on the connected component of the space of germs that contains it.

**How the definition helps.** On the space of germs, each branch of the function is a different point, so continuation can never give two values at one point. In the plane, continuing log z once around the origin changes its value by 2πi, so the result is a 'multivalued function'. On its component of the space of germs, the logarithm is one function f with exp(f(z)) = z. What stays hard is to decide when continuation along different paths gives the same result, which is the monodromy theorem.

**Wikipedia:** [Analytic continuation](https://en.wikipedia.org/wiki/Analytic_continuation), [Riemann surface](https://en.wikipedia.org/wiki/Riemann_surface). It says: “The idea of finding the maximal analytic continuation of a function in turn led to the development of the idea of Riemann surfaces.”

**Sources:**

- [H. Weyl, Die Idee der Riemannschen Fläche, Teubner, Leipzig, 1913](https://archive.org/details/dieideederrieman00weyluoft)

### Real boundary values let analytic functions reflect across a line

**Remember:** Conjugate the input and output, and join where the values are real.

*Rules out counterexamples.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a function f holomorphic on an upper half-disk, reflection assigns the complex conjugate of f(z̄) to each point z below the diameter. Here z̄ means the complex conjugate of z.

**Problem.** If f extends continuously to the open diameter and takes real values there, reflection extends f holomorphically to the whole disk.

**How the definition helps.** Real boundary values equal their conjugates, so the two halves fit together continuously (our own). Splitting triangles along the diameter gives zero boundary integrals, and Morera’s theorem gives holomorphicity (our own). Without real boundary values, the square root on the upper half-disk centered at zero need not extend holomorphically across zero (our own).

**Wikipedia:** [Schwarz reflection principle](https://en.wikipedia.org/wiki/Schwarz_reflection_principle). It says: “which takes real values on the real axis.”

**Sources:** none listed. No primary source with a working link was found.

### Zero triangle integrals make locally uniform limits holomorphic

**Remember:** Zero triangle integrals pass to a locally uniform limit.

*True by definition.* MSC 30B60 (Completeness problems, closure of a system of functions of one complex variable), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous function on an open set holomorphic if its contour integral around every solid triangle in the set is zero. The usual definition asks for a complex derivative at each point.

**Problem.** Let holomorphic functions converge uniformly on every compact subset of an open set. Their limit is holomorphic.

**How the definition helps.** The triangle definition makes the proof a passage to the limit inside each contour integral. Uniform convergence on the triangle preserves the zero integral and gives continuity of the limit. The article gives this approach. The work moves into the equivalence of definitions. Goursat’s theorem gives zero integrals from complex differentiability, and Morera’s theorem gives the converse.

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem). It says: “This in fact characterizes holomorphy, i.e. f is holomorphic on D if and only if the above conditions hold.”

**Paper or page:** [Uniform Limit of Analytic Functions is Analytic](https://proofwiki.org/wiki/Uniform_Limit_of_Analytic_Functions_is_Analytic), [Morera's Theorem](https://proofwiki.org/wiki/Morera's_Theorem). It says: “Let ⟨fₙ⟩ converge locally uniformly to f on U. Then f is analytic.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Homogeneous polynomials count every preimage of a rational map

**Remember:** Count the roots of one homogeneous equation, even for the value infinity.

*Makes the theorem clean to state or prove.* MSC 30C10 (Polynomials and rational functions of one complex variable), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Represent a sphere point by a pair \[X:Y\], where multiplying both coordinates by the same nonzero number preserves the point. Represent a rational function by two homogeneous polynomials P and Q of degree d with no common projective zero. Homogeneous means every term has total degree d.

**Problem.** A nonconstant rational map of degree d takes each value exactly d times on the sphere, counting a root of order m as m preimages.

**How the definition helps.** Each target \[A:B\] gives a single homogeneous equation BP − AQ = 0 for its preimages (our own). Setting Y = 1 gives an ordinary polynomial whose finite roots count with multiplicity by the fundamental theorem of algebra (our own). If its degree is k, the homogeneous equation has a factor Y to the power d − k, accounting for infinity (our own).

**nLab:** [Riemann sphere](https://ncatlab.org/nlab/show/Riemann+sphere). It says: “the complex projective line”

**Wikipedia:** [Rational function](https://en.wikipedia.org/wiki/Rational_function). It says: “the maximum of the degrees of its constituent polynomials P and Q”

**Sources:** none listed. No primary source with a working link was found.

### On the Riemann sphere, Möbius maps become bijections with two fixed points

**Remember:** Add one point at infinity and division by zero stops being an exception.

*Makes the theorem clean to state or prove.* MSC 30C10 (Polynomials and rational functions of one complex variable), 30F10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A Möbius transformation is a map z ↦ (az + b)/(cz + d) with ad − bc ≠ 0. It acts on the Riemann sphere, which is the complex plane with one point ∞ added. When c ≠ 0, it sends −d/c to ∞ and ∞ to a/c. When c = 0, it fixes ∞.

**Problem.** The Möbius transformations form a group of bijections. Every one except the identity has exactly two fixed points, counted with multiplicity.

**How the definition helps.** The added point ∞ gives each Möbius transformation a value at every point and a preimage of every point, so each one is a bijection. On the plane alone, z ↦ 1/z is undefined at 0 and never takes the value 0 (our own example). The condition ad − bc ≠ 0 excludes the constant maps. The fixed-point count works because a fixed point may be ∞.

**Wikipedia:** [Möbius transformation](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). It says: “Thus a Möbius transformation is always a bijective holomorphic function from the Riemann sphere to the Riemann sphere.”

**Sources:** none listed. No primary source with a working link was found.

### An interior accumulation point forces analytic functions to agree

**Remember:** Zeros must gather where the function still has a Taylor series.

*Rules out counterexamples.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** An accumulation point of S is a point a where every disk centered at a contains some point of S other than a. For the identity theorem, a must lie inside the domain.

**Problem.** Two holomorphic functions on a connected open set agree everywhere if their agreement set has an accumulation point inside it.

**How the definition helps.** An interior accumulation point gives a Taylor series with no possible first nonzero term for the difference (our own). Our own counterexample is sin(1/z) on the punctured plane, where zeros gather at the missing point zero. The work goes into Taylor factorization and using connectedness to extend the agreement (our own).

**Wikipedia:** [Identity theorem](https://en.wikipedia.org/wiki/Identity_theorem). It says: “if f = g on some S ⊆ D, where S has an accumulation point in D, then f = g on D.”

**Sources:** none listed. No primary source with a working link was found.

### Counting zeros with multiplicity makes the argument principle exact

**Remember:** Count each zero by its multiplicity, and the winding gives the count.

*Makes the theorem clean to state or prove.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** A zero of f at a has multiplicity k if f(z) = (z − a)ᵏ g(z) with g(a) ≠ 0. A pole of order m is a point where f(z) = (z − a)⁻ᵐ h(z) with h(a) ≠ 0. Counting with multiplicity means each zero or pole is counted k or m times.

**Problem.** Let f be meromorphic, with no zeros or poles on a simple closed contour C oriented counter-clockwise. Then (1/2πi) ∮ f′/f dz = Z − P. Here Z and P count the zeros and poles inside C with multiplicity.

**How the definition helps.** At a zero of multiplicity k, f′/f has a simple pole with residue exactly k, so the residue theorem counts multiplicities directly. A count without multiplicity fails: for f(z) = z² on the unit circle, the integral is 2, but there is only one distinct zero (our own example). Multiplicity also makes the count stable under small changes of f, which is Rouché's theorem (our own).

**Wikipedia:** [Argument principle](https://en.wikipedia.org/wiki/Argument_principle). It says: “where Z and P denote respectively the number of zeros and poles of f inside the contour C, with each zero and pole counted as many times as its multiplicity and order, respectively, indicate.”

**Sources:** none listed. No primary source with a working link was found.

### Defining analytic by local power series makes zeros isolated at once

**Remember:** After the first nonzero term, the leftover factor stays nonzero nearby.

*True by definition. Confidence: medium.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a complex function analytic on an open set if, near each point, it equals a convergent power series. The other usual definition, holomorphic, asks for a complex derivative at each point. A theorem says that the two definitions agree.

**Problem.** Let f be analytic near z₀ with f(z₀) = 0. If f is not zero on the whole of any neighbourhood of z₀, then some neighbourhood of z₀ has no other zero.

**How the definition helps.** With the series definition, the local form of f is given, so one factorization proves the claim (our own). Some coefficient is nonzero, since otherwise f is zero on a whole disk; take the first one, aₘ, and write f(z) = (z − z₀)ᵐ g(z) (our own). Then g is a convergent power series with g(z₀) = aₘ ≠ 0, so g has no zeros near z₀ by continuity (our own). The work moves into the theorem that complex differentiable functions are analytic.

**nLab:** [analytic function](https://ncatlab.org/nlab/show/analytic+function). It says: “An analytic function is a function that is locally given by a converging power series.”

**Sources:** none listed. No primary source with a working link was found.

### Defining zero order by factoring out (z − z₀)ⁿ makes orders add

**Remember:** Multiplying the factorizations multiplies the powers, so the orders add.

*True by definition. Confidence: medium.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Let f be analytic near z₀ and not identically zero there. Its order at z₀ is the n ≥ 0 with f(z) = (z − z₀)ⁿ g(z) for some analytic g with g(z₀) ≠ 0. The other common definition takes the least k with f⁽ᵏ⁾(z₀) ≠ 0.

**Problem.** Let f and g be analytic near z₀, and let neither be identically zero there. Then the order of fg at z₀ is the sum of the orders of f and g.

**How the definition helps.** With the factorization definition, the proof is one multiplication (our own). Write f = (z − z₀)ᵐ f₁ and g = (z − z₀)ⁿ g₁ (our own). Then fg = (z − z₀)ᵐ⁺ⁿ f₁g₁, and f₁(z₀)g₁(z₀) ≠ 0 (our own). With the derivative definition, one needs the general Leibniz rule for the derivatives of fg (our own). The work moves into the theorem that the two definitions agree, which uses the Taylor series of f at z₀ (our own).

**Wikipedia:** [Zeros and poles](https://en.wikipedia.org/wiki/Zeros_and_poles). It says: “(z − z₀)ⁿ f(z) is holomorphic and nonzero in a neighbourhood of z₀ (this is a consequence of the analytic property).”

**Sources:** none listed. No primary source with a working link was found.

### An ordered triple fixes a Möbius transformation

**Remember:** Three distinct lines fix a projective basis and hence fix the map.

*True by definition.* MSC 30C20 (Conformal mappings of special domains), 30C10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** View sphere points as lines through the origin in ℂ². Define a Möbius transformation as the action of an invertible two-by-two complex matrix on these lines. Matrices differing by a common nonzero scalar give the same action.

**Problem.** For any two ordered triples of distinct points on the Riemann sphere, exactly one Möbius map sends the first triple to the second in order.

**How the definition helps.** The matrix definition turns the fractional linear interpolation problem into a choice of two basis vectors (our own). Choose vectors on the first two lines, then scale them so their sum lies on the third line (our own). Distinctness fixes their relative scale, so matching these bases gives a unique matrix up to scalar (our own). Identifying lines with sphere points recovers the fractional linear formula (our own).

**nLab:** [Riemann sphere](https://ncatlab.org/nlab/show/Riemann+sphere). It says: “the complex projective line”

**Wikipedia:** [Möbius transformation](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). It says: “for any two ordered triples of distinct points, there is a unique map that takes one triple to the other”

**Sources:** none listed. No primary source with a working link was found.

### Möbius maps on complex lines compose by multiplying matrices

**Remember:** Multiply the matrices to compose their Möbius maps.

*True by definition.* MSC 30C20 (Conformal mappings of special domains), 51B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the Riemann sphere as the set of complex lines through zero in ℂ². An invertible complex matrix sends each such line to another, defining a Möbius map. The usual model starts with the plane and adds ∞, with separate rules for poles and ∞.

**Problem.** Möbius maps form a group under composition. The map for AB is the map for B followed by the map for A.

**How the definition helps.** The projective-line definition makes composition ordinary matrix multiplication on lines. The identity and inverses also come from matrices, without separate cases at poles or ∞. Our own comparison uses z = x/y as the coordinate of the line through (x, y) when y ≠ 0. The remaining line represents ∞. In this coordinate a matrix with rows (a, b) and (c, d) gives the usual map z ↦ (az + b)/(cz + d).

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “Möbius transformations form a group under composition, isomorphic to the projective linear group”

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “Since they act on projective coordinates, two matrices yield the same Möbius transformation if and only if they differ by a nonzero factor. The group of Möbius transformations is the projective linear group PGL(2,C).”

**Paper or page:** [Möbius Transformations form Group under Composition](https://proofwiki.org/wiki/Möbius_Transformations_form_Group_under_Composition). It says: “Let G be the set of Möbius transformations. Let ∘ denote the composition of mappings. Then (G, ∘) is a group.”

**Sources:** none listed. No primary source with a working link was found.

### The disk distance turns Schwarz–Pick into Schwarz at zero

**Remember:** Move both marked points to zero, then apply Schwarz.

*True by definition.* MSC 30C20 (Conformal mappings of special domains), 30C80, 30F45. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The disk map φₐ(z) = (z − a)/(1 − āz) sends a to zero, where ā denotes complex conjugation. The Poincaré distance from a to z is twice the inverse hyperbolic tangent of \|φₐ(z)\|.

**Problem.** Every holomorphic self-map of the open unit disk decreases or preserves Poincaré distance. Equality at two distinct points forces the map to be a disk automorphism.

**How the definition helps.** The distance formula lets Schwarz’s lemma compare ordinary radii after moving a and f(a) to zero (our own). Equality for distinct points makes the centered map a rotation, so the original map is a disk automorphism (our own). The work includes identifying this formula with the distance defined by shortest hyperbolic path length (our own).

**Wikipedia:** [Schwarz lemma](https://en.wikipedia.org/wiki/Schwarz_lemma). It says: “decreases the distance of points in the Poincaré metric.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring a zero gives a local power map

**Remember:** A local root of the nonzero factor turns the function into a power.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30C35 (General theory of conformal mappings), 30C15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The order m of f(z) − f(a) at a is the exponent in f(z) − f(a) = (z − a)ᵐu(z). The factor u is holomorphic and nonzero at a.

**Problem.** Near each point a of a nonconstant holomorphic function on a domain, a holomorphic coordinate w gives f(z) = f(a) + w(z)ᵐ. Consequently the function maps open sets to open sets.

**How the definition helps.** The factorization gives the coordinate directly once u has a holomorphic mth root v on a small disk (our own). Set w(z) = (z − a)v(z), whose derivative at a is nonzero (our own). The inverse function theorem gives a local holomorphic inverse, and the power map sends disks centered at zero onto disks (our own).

**Wikipedia:** [Open mapping theorem (complex analysis)](https://en.wikipedia.org/wiki/Open_mapping_theorem_%28complex_analysis%29). It says: “it sends open subsets of U to open subsets of ℂ”

**Sources:** none listed. No primary source with a working link was found.

### Fixing a base point and direction makes the Riemann map unique

**Remember:** Center the map and fix its direction, and no disk symmetry remains.

*Rules out counterexamples.* MSC 30C35 (General theory of conformal mappings), 30C20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Fix a point a in the domain. Call a conformal bijection to the unit disk normalized if f(a) = 0 and f′(a) is positive real. These conditions fix the image point and the direction of the derivative.

**Problem.** For every proper simply connected plane domain and every point a in it, exactly one normalized conformal bijection to the disk exists.

**How the definition helps.** Normalization excludes every disk symmetry except the identity (our own). Composing one normalized map with the inverse of another gives a disk automorphism fixing zero (our own). Schwarz’s lemma makes it a rotation, and its positive derivative forces the rotation angle to be zero (our own). Existence follows by centering and rotating a map supplied by the Riemann mapping theorem (our own).

**Wikipedia:** [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “normalized such that f(a)=0 and f′(a)&gt;0.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring orientation makes conformal maps exactly the holomorphic ones

**Remember:** Angles kept and orientation kept means holomorphic with nonzero derivative.

*Rules out counterexamples.* MSC 30C35 (General theory of conformal mappings). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A map is conformal at a point if it preserves angles between directed curves through the point, and also preserves orientation. Equivalently, its Jacobian matrix there is a positive multiple of a rotation matrix.

**Problem.** A map on an open set in the plane is conformal if and only if it is holomorphic with nowhere-zero derivative.

**How the definition helps.** A positive multiple of a rotation matrix is exactly multiplication by a nonzero complex number, so the condition is the Cauchy–Riemann equations in another form (our own explanation). Without orientation the theorem fails. Complex conjugation z ↦ z̄ keeps the size of angles but reverses their direction, and it is not holomorphic. Authors who allow orientation-reversing maps must add the antiholomorphic maps to the theorem.

**Wikipedia:** [Conformal map](https://en.wikipedia.org/wiki/Conformal_map). It says: “If U is an open subset of the complex plane ℂ, then a function f:U→ℂ is conformal if and only if it is holomorphic and its derivative is everywhere non-zero on U.”

**Sources:** none listed. No primary source with a working link was found.

### Rotation and scaling derivatives make holomorphic maps preserve angles

**Remember:** A nonzero complex derivative rotates and scales all tangent vectors together.

*True by definition.* MSC 30C35 (General theory of conformal mappings), 30A05. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a real differentiable map holomorphic if its derivative matrix at each point has rows (a, −b) and (b, a). This matrix acts by multiplication by a + ib. The usual definition uses a limit of complex difference quotients.

**Problem.** At any point where its derivative is nonzero, a holomorphic map preserves the angle between smooth curves with nonzero tangent vectors.

**How the definition helps.** The matrix definition makes angle preservation a property of the derivative itself. Multiplication by a nonzero complex number rotates and scales both tangents by the same amounts. The chain rule gives the image tangents. The work moves into showing that this definition agrees with the complex difference quotient. The matrix entries express the Cauchy–Riemann equations when a real derivative exists.

**Wikipedia:** [Cauchy–Riemann equations](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Riemann_equations). It says: “Consequently, a function satisfying the Cauchy–Riemann equations, with a nonzero derivative, preserves the angle between curves in the plane.”

**Sources:** none listed. No primary source with a working link was found.

### The largest derivative forces a disk map to be onto

**Remember:** A missing value lets a square root increase the derivative at the base point.

*Makes the theorem clean to state or prove.* MSC 30C35 (General theory of conformal mappings), 30C70, 30D45. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Fix a point a in a simply connected plane domain other than the whole plane. Consider injective holomorphic maps into the unit disk that send a to zero. An extremal map maximizes the size of the derivative at a among these maps.

**Problem.** An extremal disk map exists, and every such map is onto the disk. This gives a conformal equivalence between any proper simply connected plane domain and the disk.

**How the definition helps.** Maximality rules out any construction that increases the derivative at a (our own). For an omitted value, move it to zero, take a holomorphic square root, and move the new image of a to zero (our own). Reversing these steps gives a disk map fixing zero that includes squaring, so Schwarz’s lemma gives strict contraction there (our own). Given one candidate, Montel’s and Hurwitz’s theorems yield an injective maximizer from a maximizing sequence (our own).

**Wikipedia:** [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “the desired mapping was obtained as the solution of an extremal problem.”

**Sources:** none listed. No primary source with a working link was found.

### A mean square of Taylor terms rules out an interior maximum

**Remember:** Every nonconstant Taylor term adds a positive amount to the mean square.

*True by definition.* MSC 30C80 (Maximum principle, Schwarz's lemma, Lindelöf principle, analogues and generalizations; subordination), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Instead of requiring a complex derivative at every point, describe a holomorphic function near each point by a convergent power series. Its mean square on a circle is the average of its squared magnitude over all angles.

**Problem.** A nonconstant holomorphic function on a connected open set has no interior local maximum of its magnitude. If it extends continuously to a compact closure, its maximum magnitude is on the boundary.

**How the definition helps.** The mean square separates the Taylor terms because products of different powers with their complex conjugates average to zero (our own proof). Every nonzero higher coefficient raises the mean square above the squared center value. The identity theorem ensures such a coefficient exists for a nonconstant function on a connected domain. The calculation uses uniform convergence on small circles (our own proof).

**Paper or page:** [Maximum Modulus Principle](https://proofwiki.org/wiki/Maximum_Modulus_Principle). It says: “Then \|f\| does not have any maximum points in the interior of D.”

**Sources:** none listed. No primary source with a working link was found.

### Circle integrals make bounded singularities removable

**Remember:** Shrinking the circle forces every negative-power coefficient of a bounded function to vanish.

*True by definition.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** For f holomorphic on a punctured disk about a, define its Laurent coefficients by circle integrals. For degree n, integrate f(z) times (z − a) to the power −n−1 counterclockwise around any concentric circle inside the disk. Divide by 2πi.

**Problem.** A holomorphic function bounded near an isolated missing point extends holomorphically over that point.

**How the definition helps.** For k ≥ 1, the circle integral bounds the coefficient of degree −k by Mrᵏ when \|f\| ≤ M (our own). Shrinking the radius r forces every negative-power coefficient to vanish (our own). The Laurent coefficient formula identifies these integrals with the coefficients obtained by matching powers (our own).

**Paper or page:** [Riemann Removable Singularities Theorem](https://proofwiki.org/wiki/Riemann_Removable_Singularities_Theorem). It says: “f is bounded in a deleted neighborhood of z₀.”

**Sources:** none listed. No primary source with a working link was found.

### Principal parts turn meromorphic functions on the sphere into rational functions

**Remember:** Subtract every pole term, including the polynomial terms from infinity.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30F10, 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The principal part of a meromorphic function at a pole is the finite sum of negative powers in its Laurent series. At infinity, use the coordinate w = 1/z, so the principal part becomes a polynomial in z.

**Problem.** Every meromorphic function on the Riemann sphere equals a constant plus the sum of its principal parts, including the part at infinity. Hence it is rational.

**How the definition helps.** Subtracting all principal parts leaves a holomorphic function on the sphere, which is constant (our own). The parts at finite poles are rational and vanish at infinity, while the part at infinity is a polynomial (our own). The work is Laurent's theorem and compactness of the sphere, which gives only finitely many poles (our own).

**nLab:** [Laurent series](https://ncatlab.org/nlab/show/Laurent+series). It says: “if all but finitely many negatively indexed terms are zero.”

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “the field of rational functions on the sphere”

**Sources:** none listed. No primary source with a working link was found.

### Signed orders give the residues of logarithmic derivatives

**Remember:** A power contributes its exponent to the residue of the logarithmic derivative.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30E20. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The signed order of a meromorphic function at a zero or pole a is the integer m in f(z) = (z − a)ᵐu(z). The factor u is holomorphic and nonzero at a. Zeros give positive orders and poles give negative orders.

**Problem.** The residue of the logarithmic derivative f′/f at an isolated zero or pole of f is the signed order of f there.

**How the definition helps.** The signed exponent lets one derivative calculation handle zeros and poles together (our own). Factoring the Laurent series gives u, and differentiation gives f′/f = m/(z − a) + u′/u (our own). The second term is holomorphic, so the residue is m (our own).

**Paper or page:** [Proposition 5.1. (The logarithmic derivative)](https://venhance.github.io/napkin/Napkin.pdf). It says: “A pole at each zero of f whose residue is the multiplicity, and a pole at each pole of f whose residue is the negative of the pole's order.”

**Sources:** none listed. No primary source with a working link was found.

### The limit test makes essential singularities have dense images

**Remember:** An omitted disk makes the reciprocal of a shifted function bounded.

*Rules out counterexamples.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call an isolated singularity essential if the function neither extends holomorphically nor tends to infinity there. The equivalent Laurent test asks for infinitely many nonzero negative powers.

**Problem.** On every sufficiently small punctured disk about an essential singularity, the function takes values in every open disk in the complex plane.

**How the definition helps.** The definition excludes both outcomes of missing a disk of values (our own). If f misses a disk centered at b, then 1/(f − b) is bounded and extends by the removable singularity theorem (our own). A nonzero extension value lets f extend, while a zero forces f to tend to infinity (our own).

**Paper or page:** [Weierstrass-Casorati Theorem](https://proofwiki.org/wiki/Weierstrass-Casorati_Theorem). It says: “Let f have an essential singularity at a.”

**Sources:** none listed. No primary source with a working link was found.

### The principal part classifies isolated singularities

**Remember:** Look at the negative powers to tell what sort of singularity you have.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30B10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The principal part at an isolated singularity a consists of the negative-power terms in the Laurent expansion about a. The function is holomorphic on a disk with only its center a removed.

**Problem.** A zero principal part means the function extends holomorphically, while a finite nonempty principal part gives a pole. Infinitely many nonzero terms give an essential singularity.

**How the definition helps.** Removing the principal part leaves a Taylor series that extends across the center (our own). If the lowest exponent is −m, multiplying by (z − a)ᵐ gives a holomorphic function nonzero at a (our own). Uniqueness of the Laurent expansion rules out either behavior when infinitely many negative-power coefficients are nonzero (our own).

**Wikipedia:** [Laurent series](https://en.wikipedia.org/wiki/Laurent_series). It says: “the series of terms with negative degree”

**Paper or page:** [Existence of Laurent Series](https://proofwiki.org/wiki/Existence_of_Laurent_Series). It says: “Let f: B′(z₀, R) → ℂ be holomorphic.”

**Sources:** none listed. No primary source with a working link was found.

### Arc length bounds contour integrals

**Remember:** Keep total length and discard direction to bound the integral.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30A10. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the length of a piecewise smooth path as the integral of its speed. Equivalently, join successive points along the path by straight segments and take the least upper bound of their total lengths.

**Problem.** The magnitude of the contour integral of a continuous function is at most its largest magnitude on the path times the path length.

**How the definition helps.** The triangle inequality bounds the integral by the integral of \|f\| times speed (our own proof). Replacing \|f\| by its maximum leaves that maximum times the length. The work is proving that integrated speed equals the least upper bound of chord sums (our own comparison).

**Paper or page:** [Lemma 6.3. (ML estimation lemma)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then \|∮α f(z) dz\| ≤ ML.”

**Sources:** none listed. No primary source with a working link was found.

### Complex contour integrals keep direction but ignore speed

**Remember:** The velocity carries both the speed and the direction.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A contour is a path made of smooth pieces. For a continuous function f, its contour integral along γ is the time integral of f(γ(t))γ′(t). The factor γ′(t) records both speed and direction.

**Problem.** An increasing smooth change of parameter preserves a contour integral along the same path. Reversing the path changes the sign.

**How the definition helps.** The velocity supplies the derivative required by the real substitution rule (our own proof). Reversing time reverses the integration limits. Using speed alone would instead give an arc length integral, unchanged on reversal (our own comparison).

**nLab:** [line integral](https://ncatlab.org/nlab/show/line+integral). It says: “In particular, dz is interpreted as z′(t) dt.”

**Paper or page:** [Contour Integral is Independent of Parameterization](https://proofwiki.org/wiki/Contour_Integral_is_Independent_of_Parameterization). It says: “Let C be a contour defined by a finite sequence C₁, …, Cₙ of directed smooth curves.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous complex derivatives let Green’s theorem prove Cauchy’s theorem

**Remember:** A continuous complex derivative lets Green’s theorem apply.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Use Cauchy’s stronger version of holomorphic. Ask for a complex derivative at every point of an open set and require that derivative to be continuous. The modern definition does not require continuity separately.

**Problem.** Let f be holomorphic on an open set containing a simple, closed, piecewise smooth curve and all of its interior. The integral of f around the curve is zero.

**How the definition helps.** The continuity condition lets Green’s theorem turn the curve integral into an area integral. Complex differentiability gives the Cauchy–Riemann equations, which relate the first partial derivatives and make the area integrand zero. Without continuity, Green’s theorem does not apply directly. Goursat proved vanishing for triangles without this assumption. Cauchy’s integral formula then gives a local power series, so the derivative is continuous after all.

**Wikipedia:** [Cauchy's integral theorem](https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem). It says: “Cauchy provided this proof, but it was later proven by Goursat without requiring techniques from vector calculus, or the continuity of partial derivatives.”

**Paper or page:** [Holomorphic 1-forms are closed](https://proofwiki.org/wiki/Holomorphic_1-forms_are_closed), [Cauchy-Goursat Theorem](https://proofwiki.org/wiki/Cauchy-Goursat_Theorem). It says: “Holomorphic 1-forms are closed.”

**Sources:**

- [É. Goursat, Sur la définition générale des fonctions analytiques, d'après Cauchy, Transactions of the American Mathematical Society 1 (1900), 14–16](https://doi.org/10.1090/S0002-9947-1900-1500519-7)

### Defining simple connectivity by primitives gives holomorphic logarithms

**Remember:** A primitive of the logarithmic derivative differs from a logarithm by a constant.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30C35. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a connected open subset of the plane holomorphically simply connected if each holomorphic function has a holomorphic primitive, a function whose derivative equals it. The topological definition asks that every closed path can shrink to a point inside the set.

**Problem.** Every nowhere-zero holomorphic function f on such a set has a holomorphic logarithm g, meaning exp(g) = f.

**How the definition helps.** The primitive definition supplies a function h with derivative f′/f. The derivative of f·exp(−h) is zero, so this product is a nonzero constant, and adding a logarithm of that constant to h gives g (our own calculation). The work is proving that the two definitions agree. Cauchy’s theorem gives primitives on topologically simply connected domains.

**Wikipedia:** [Riemann mapping theorem](https://en.wikipedia.org/wiki/Riemann_mapping_theorem). It says: “(3) ⇒ (4) by integrating f⁻¹ df/dz along γ from a to x to give a branch of the logarithm.”

**Paper or page:** [Existence of logarithms](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let f : U → ℂ be holomorphic. Then f has a logarithm if and only if (1/(2πi)) ∮γ (f′/f) dz = 0 for every contour γ in U.”

**Sources:** none listed. No primary source with a working link was found.

### Laurent coefficients make every derivative have zero residue

**Remember:** The only power that could contribute is constant, and its derivative vanishes.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The residue of a function at an isolated singularity is the coefficient of 1/(z − a) in its Laurent series. One can instead define it by a small circle integral divided by 2πi.

**Problem.** If a function is holomorphic on a punctured disk, its derivative has zero residue at the center.

**How the definition helps.** Differentiation lowers each exponent by one, but the degree-zero term differentiates to zero (our own). The work is Laurent's theorem and the rule that permits term-by-term differentiation on the punctured disk (our own).

**nLab:** [residue](https://ncatlab.org/nlab/show/residue). It says: “the coefficient of (z − ζ)⁻¹”

**Sources:** none listed. No primary source with a working link was found.

### Local circle integrals make the residue theorem a boundary sum

**Remember:** Cut out each singularity and read off its circle integral.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the residue at an isolated singularity as 1/(2πi) times the integral around a small counterclockwise circle. Cauchy's theorem makes it independent of the radius. The equivalent series definition selects the coefficient of 1/(z − a).

**Problem.** Suppose f is holomorphic on and inside a piecewise smooth simple closed contour except for finitely many interior poles. The counterclockwise integral of f equals 2πi times the sum of their residues.

**How the definition helps.** Each small circle integral already equals 2πi times its residue (our own). Remove a small disk around each pole and apply Cauchy’s theorem to the remaining region (our own). Its boundary integral vanishes, so the outer integral equals the sum of the counterclockwise circle integrals (our own). Integrating the Laurent series gives the equivalent coefficient formula (our own).

**Paper or page:** [Theorem 4.3. (Cauchy's residue theorem)](https://venhance.github.io/napkin/Napkin.pdf). It says: “1/(2πi) ∮γ f(z) dz = ∑\[pole p\] Wind(γ, p) Res(f; p)”

**Sources:** none listed. No primary source with a working link was found.

### Local primitives make Morera’s test a segment calculation

**Remember:** Zero triangle integrals turn a long integral into a short difference.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A local primitive of f is a function F on a small disk with complex derivative F′ = f. Having such a primitive near each point is equivalent to being holomorphic, usually defined by complex differentiability throughout an open set.

**Problem.** A continuous function on an open set is holomorphic if its integral around the boundary of every solid triangle in that set vanishes.

**How the definition helps.** The primitive criterion lets us construct F by integrating f along straight segments from a fixed point in a disk (our own proof). Zero triangle integrals turn F(w) − F(z) into the integral along the segment from z to w. Continuity then gives F′(z) = f(z). The remaining theorem says that a holomorphic derivative is itself holomorphic (our own proof).

**Paper or page:** [Morera's Theorem](https://proofwiki.org/wiki/Morera's_Theorem). It says: “Then f is analytic on D.”

**Sources:** none listed. No primary source with a working link was found.

### Locally uniform convergence controls all complex derivatives

**Remember:** Control the function on circles to control its derivatives inside.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A sequence converges locally uniformly on an open set if, on each compact subset, its largest absolute error tends to zero. Here a compact subset is closed and bounded and lies entirely in the open set.

**Problem.** A locally uniform limit of holomorphic functions is holomorphic. For each derivative order, the derivatives converge locally uniformly to that derivative of the limit.

**How the definition helps.** Local uniform convergence gives one error bound on all small circles around points of a compact set (our own proof). Choose a common radius small enough to keep the circles in a larger compact subset of the domain. The holomorphic limit theorem and Cauchy’s derivative estimates then give convergence for each order (our own extension).

**Paper or page:** [Derivative of Uniform Limit of Analytic Functions](https://proofwiki.org/wiki/Derivative_of_Uniform_Limit_of_Analytic_Functions). It says: “converges locally uniformly to f′.”

**Sources:** none listed. No primary source with a working link was found.

### Residues of forms make all residues on the sphere sum to zero

**Remember:** Take residues of f(z) dz, not of f, and they sum to zero.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30F30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The residue at infinity of f is defined as −Res(f(1/z)/z², 0). This is the residue of the form f(z) dz, written in the coordinate w = 1/z near infinity. The extra factor −1/z² comes from the change of variable dz = −dw/w².

**Problem.** Let f be holomorphic on the plane except at finitely many isolated singular points. Then the sum of all its residues, including the residue at infinity, is zero.

**How the definition helps.** A residue of a form does not depend on the coordinate. So one large circle measures the finite residues from inside and the residue at infinity from outside, with opposite orientation, and the two cancel. The naive definition, the residue of f(1/z) at 0, fails (our own example). For f(z) = 1/z, the residue at 0 is 1 and f(1/z) = z has residue 0, while the form definition gives −1 at infinity and a sum of 0.

**Wikipedia:** [Residue at infinity](https://en.wikipedia.org/wiki/Residue_at_infinity), [Residue (complex analysis)](https://en.wikipedia.org/wiki/Residue_%28complex_analysis%29). It says: “the reason that we consider instead −(1/z²) f(1/z) is that one does not take residues of functions, but of differential forms”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric principal values give real poles half a residue

**Remember:** An upper semicircle around a real pole contributes a clockwise half-turn.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the principal value of a real-line integral by cutting out equal intervals on both sides of each real pole. Take the limit as these gaps shrink and the outer endpoints tend to infinity.

**Problem.** Suppose a rational function decays at least as fast as 1/\|z\|² at infinity and each real pole is simple. Its principal value equals 2πi times the upper-half-plane residue sum plus πi times the real residue sum.

**How the definition helps.** Equal cutoffs let each removed interval match an upper semicircle, whose integral tends to −πi times the residue (our own). Only the simple pole term survives on that small arc (our own). The work is the residue theorem and the decay estimate on the large semicircle (our own).

**Wikipedia:** [Cauchy principal value](https://en.wikipedia.org/wiki/Cauchy_principal_value). It says: “where the portion inside the disk of radius ε around the pole has been removed.”

**Paper or page:** [Residue at Simple Pole](https://proofwiki.org/wiki/Residue_at_Simple_Pole). It says: “Let f have a simple pole at a.”

**Sources:** none listed. No primary source with a working link was found.

### Taylor coefficients evaluate residues after clearing a pole

**Remember:** Clear the pole, then read Taylor coefficient number m minus one.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the residue at a as the Laurent coefficient of 1/(z − a), rather than by a contour integral. A pole of order m clears on multiplication by the mth power of z − a.

**Problem.** At a pole a of order m, the product of f with (z − a) to the power m extends holomorphically. The residue is its Taylor coefficient of degree m − 1.

**How the definition helps.** Clearing the pole adds m to every exponent, so the residue term moves from degree −1 to degree m − 1 (our own). The work is Laurent expansion and its identification of the residue with the contour integral (our own).

**Paper or page:** [Residue at Multiple Pole](https://proofwiki.org/wiki/Residue_at_Multiple_Pole). It says: “Let f have a single pole in D, of order N, at a.”

**Sources:** none listed. No primary source with a working link was found.

### The integral definition of winding makes products add their turns

**Remember:** Multiplying loops adds the winding they have separately.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The winding number of a piecewise smooth loop γ avoiding zero counts its signed turns about zero. Its integral definition divides the time integral of γ′(t)/γ(t) by 2πi.

**Problem.** For two such loops on the same time interval, the winding number of their pointwise product equals the sum of their winding numbers.

**How the definition helps.** In our own proof the product rule splits the logarithmic derivative of the product into two summands. Integrating then adds the two winding numbers (our own). The work is showing that this integral measures the change of a continuous angle (our own).

**Paper or page:** [Logarithmic Derivative of Product of Analytic Functions](https://proofwiki.org/wiki/Logarithmic_Derivative_of_Product_of_Analytic_Functions). It says: “(fg)′(z)/(fg)(z) = f′(z)/f(z) + g′(z)/g(z)”

**Sources:** none listed. No primary source with a working link was found.

### The integral winding number is constant between crossings

**Remember:** An integer that changes continuously cannot change at all.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** Define the winding number about a as the contour integral of 1/(z − a) divided by 2πi. Keep a off the fixed closed contour, so the denominator never vanishes.

**Problem.** The winding number is constant on each connected region outside the image of a piecewise smooth loop. It is zero on the unbounded region.

**How the definition helps.** The integral varies continuously as a moves off the contour because the denominator stays locally bounded away from zero (our own proof). Its values are integers, so it is constant on each connected region. Far away the integral tends to zero, fixing its value on the unbounded region. The work is identifying the integral with the total change of angle divided by 2π (our own comparison).

**Wikipedia:** [Winding number](https://en.wikipedia.org/wiki/Winding_number). It says: “The winding numbers of the curve around two points in the same region are equal.”

**Sources:** none listed. No primary source with a working link was found.

### The triangle test makes parameter integrals holomorphic

**Remember:** Check each triangle before taking the parameter integral.

*True by definition.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** One can define a holomorphic function on an open set as a continuous function whose integral around every solid triangle in the set vanishes. Cauchy’s and Morera’s theorems identify this test with complex differentiability.

**Problem.** Let f(z, t) be jointly continuous on an open set of complex z times a compact real interval of t. If f is holomorphic in z for each t, its integral over t is holomorphic in z.

**How the definition helps.** The triangle test lets us integrate the zero triangle integral for each t (our own proof). Joint continuity on compact sets gives continuity of the resulting function and allows the two integrations to change order. Morera’s theorem converts the resulting zero integrals into holomorphy (our own proof).

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem). It says: “This in fact characterizes holomorphy, i.e. f is holomorphic on D if and only if the above conditions hold.”

**Sources:** none listed. No primary source with a working link was found.

### Winding divisible by n detects a holomorphic nth root

**Remember:** Divide the turns by n before asking if the root closes.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A holomorphic nth root of f is a holomorphic function g whose nth power equals f, for a positive integer n. For a holomorphic f without zeros, its winding along a closed contour counts how many signed turns its values make around zero. This number equals the contour integral of f′/f divided by 2πi.

**Problem.** Let f be holomorphic with no zeros on a connected open set. It admits a holomorphic nth root exactly when its winding on every closed contour is a multiple of n.

**How the definition helps.** Winding measures whether a chosen root returns to its starting value after a loop (our own proof). Integrate f′/f along a path from a fixed point, divide by n, and exponentiate. Changing paths preserves this factor precisely when every integral of f′/f around a loop is a multiple of 2πin. Multiplying by a root of the starting value gives the required root, using local antiderivatives and the exponential addition law (our own proof).

**Paper or page:** [Theorem 4.1. (Existence of holomorphic nth roots)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then f has a holomorphic nth root if and only if (1/2πi) ∮γ (f′/f) dz ∈ nℤ for every contour γ in U.”

**Sources:** none listed. No primary source with a working link was found.

### Winding number gives one Cauchy formula for all turns

**Remember:** If a contour turns twice, Cauchy’s formula counts the value twice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** The winding number of a closed piecewise smooth path γ about a point a off γ counts its signed turns around a. It equals the integral of 1/(z − a) along γ divided by 2πi.

**Problem.** Let γ be a closed contour in a disk where f is holomorphic, and let a lie in the disk off γ. The integral of f(z)/(z − a) along γ equals 2πi times f(a) times the winding number about a.

**How the definition helps.** Winding supplies one factor for every signed turn, including turns that cancel (our own extension). Subtracting f(a) from the numerator leaves a quotient that extends holomorphically at a. Cauchy’s theorem makes its integral zero, leaving f(a) times the defining winding integral (our own proof).

**Paper or page:** [Theorem 6.1. (Cauchy's integral formula)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then for any point a in the interior of D, we have f(a) = (1/2πi) ∮γ f(z)/(z − a) dz.”

**Sources:** none listed. No primary source with a working link was found.

### Zero triangle integrals show the Gamma integral is holomorphic

**Remember:** Swap the integrals to expose an inner contour integral equal to zero.

*True by definition. Confidence: medium.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 33B15. arXiv math.CV. Level 2: later undergraduate.

**Definition.** Call a continuous function on an open set holomorphic if its integral around the boundary of every solid triangle in the set is zero. The usual definition asks for a complex derivative at every point.

**Problem.** Define Γ(s) by integrating exp((s − 1) log x − x) over real x &gt; 0. The resulting function is holomorphic where the real part of s is positive.

**How the definition helps.** The triangle definition lets us prove holomorphy by changing the order of integration. For fixed x the integrand is holomorphic in s, so its integral around each triangle is zero. On a compact set of s with real parts between a &gt; 0 and b, the integrand is bounded by xᵃ⁻¹e⁻ˣ for x ≤ 1 and xᵇ⁻¹e⁻ˣ for x ≥ 1. These integrable bounds give continuity and justify the exchange by Fubini’s theorem (our own use of the article’s method).

**Wikipedia:** [Morera's theorem](https://en.wikipedia.org/wiki/Morera%27s_theorem), [Gamma function](https://en.wikipedia.org/wiki/Gamma_function). It says: “Morera's theorem can also be used in conjunction with Fubini's theorem and the Weierstrass M-test to show the analyticity of functions defined by sums or integrals”

**Sources:** none listed. No primary source with a working link was found.

### Zero winding around holes gives Cauchy’s theorem for arbitrary contours

**Remember:** Check winding around missing points, not whether the whole domain has holes.

*Rules out counterexamples.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** A closed contour is a path made of smooth pieces that returns to its start. Its winding number about a point off the path counts signed turns around that point. A closed contour in an open set U is null homologous there if it winds zero times about every point outside U.

**Problem.** If f is holomorphic on U, its integral around each null homologous contour in U is zero.

**How the definition helps.** Zero winding excludes loops that count a missing point with nonzero weight. For example, integrating 1/z around the counterclockwise unit circle gives 2πi because the circle winds once around zero (our own calculation). The general Cauchy theorem proves that zero winding outside U suffices.

**Wikipedia:** [Cauchy's integral theorem](https://en.wikipedia.org/wiki/Cauchy%27s_integral_theorem). It says: “the Cauchy integral theorem does not apply here since f(z) = 1/z is not defined (and is certainly not holomorphic) at z = 0.”

**Paper or page:** [Cauchy-Goursat Theorem/Corollary 1](https://proofwiki.org/wiki/Cauchy-Goursat_Theorem/Corollary_1). It says: “Let Int C ⊆ U, where Int C denotes the interior of C.”

**Sources:**

- [L. V. Ahlfors, Complex Analysis, 3rd ed. (1979), chapter 4, §§4.3–4.5, including A. F. Beardon’s proof.](https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf)

### Zero winding detects a holomorphic logarithm on any domain

**Remember:** A logarithm exists when no loop gains a full turn.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane). arXiv math.CV. Level 2: later undergraduate.

**Definition.** For a holomorphic function f without zeros, a holomorphic logarithm is a holomorphic function L satisfying exp(L) = f. The winding of f along a closed contour counts the signed turns of its values around zero. It equals the contour integral of f′/f divided by 2πi.

**Problem.** A nonvanishing holomorphic function on a connected open set admits a holomorphic logarithm exactly when its winding is zero on every closed contour there.

**How the definition helps.** Zero winding says that integrating f′/f between two points gives the same answer along every path (our own proof). This path integral gives a primitive L, meaning L′ = f′/f. Then f times exp(−L) has zero derivative, so adding a suitable constant to L gives a logarithm. Conversely, any logarithm has derivative f′/f, whose integral around a closed contour vanishes (our own proof).

**Paper or page:** [Theorem 5.1. (Existence of logarithms)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then f has a logarithm if and only if (1/2πi) ∮γ (f′/f) dz = 0 for every contour γ in U.”

**Sources:** none listed. No primary source with a working link was found.

### Adding a point at infinity makes poles ordinary points

**Remember:** Add one point at infinity, and the poles have somewhere to go.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30F10 (Compact Riemann surfaces and uniformization), 30D30. arXiv math.CV. Level 2: later undergraduate.

**Definition.** The Riemann sphere is the complex plane with one point ∞ added. Near ordinary points the coordinate is z, and near ∞ the coordinate is 1/z. These two coordinates decide which functions on the sphere are holomorphic.

**Problem.** Every rational function extends to a holomorphic map from the Riemann sphere to itself that sends its poles to ∞. Apart from the constant map to ∞, these are all the holomorphic maps from the sphere to itself.

**How the definition helps.** On the sphere, a pole is an ordinary point whose image is ∞. On the plane, by contrast, a rational function is undefined at its poles. A Möbius map z ↦ (az + b)/(cz + d) with c ≠ 0 is undefined at one point of the plane and misses one value (our own remark). On the sphere, the Möbius maps are exactly its automorphisms.

**Wikipedia:** [Riemann sphere](https://en.wikipedia.org/wiki/Riemann_sphere). It says: “For example, any rational function on the complex plane can be extended to a holomorphic function on the Riemann sphere, with the poles of the rational function mapping to infinity.”

**Sources:** none listed. No primary source with a working link was found.

### The positive Jacobian test makes every Riemann surface orientable

**Remember:** Complex coordinate changes have positive real determinants.

*True by definition.* MSC 30F99 (Riemann surfaces). arXiv math.CV, math.GT. Level 2: later undergraduate.

**Definition.** A smooth surface is orientable if it has coordinate charts whose changes of coordinates all have positive Jacobian determinant. An alternative asks for a smooth, nowhere-zero choice of signed area on its tangent planes. A Riemann surface has complex charts whose changes of coordinates and their inverses are holomorphic.

**Problem.** Every Riemann surface is orientable.

**How the definition helps.** The positive Jacobian definition lets the complex charts serve as the orientation charts. The real derivative of each change of coordinates is multiplication by its complex derivative α, which is nonzero because the inverse is holomorphic too. Its real determinant is \|α\|², which is positive. In our own comparison, the signed-area definition needs an extra gluing step with a partition of unity.

**Wikipedia:** [Riemann surface](https://en.wikipedia.org/wiki/Riemann_surface). It says: “However, the real determinant of multiplication by a complex number α equals \|α\|², so the Jacobian of h has positive determinant. Consequently, the complex atlas is an oriented atlas.”

**Sources:** none listed. No primary source with a working link was found.

### Germs as a space make monodromy follow from path lifting

**Remember:** Neighboring paths use the same chain of germs, so fixed endpoints give the same result.

*True by definition. Confidence: medium.* MSC 30B40 (Analytic continuation of functions of one complex variable), 30F99. arXiv math.CV. Level 3: graduate.

**Definition.** A germ at z records an analytic function near z, identifying two functions if they agree near z. Give the set of germs a topology using germs of a single function on a disc as basic open sets. Each such set projects to the disc by sending each germ to its center. The usual description of analytic continuation uses chains of overlapping discs along a path.

**Problem.** Let G be a simply connected open region in the plane. If a germ at a point of G continues along every path in G from that point, it extends to one holomorphic function on G.

**How the definition helps.** The germ-space definition turns continuation into a continuous lift of a path, so it suffices to show that the endpoint germ survives a deformation. Each lift can be followed through finitely many basic open sets above discs, and nearby paths with the same endpoints use the same chain (our own explanation). Simple connectivity lets any two paths with the same endpoints deform into each other. So the endpoint germs depend only on the endpoint and form one holomorphic function.

**Wikipedia:** [Analytic continuation](https://en.wikipedia.org/wiki/Analytic_continuation), [Monodromy theorem](https://en.wikipedia.org/wiki/Monodromy_theorem). It says: “In the above language this means that if G is a simply connected domain, and S is a sheaf whose set of base points contains G, then there exists an analytic function f on G whose germs belong to S.”

**Paper or page:** [Uniqueness of Analytic Continuation](https://proofwiki.org/wiki/Uniqueness_of_Analytic_Continuation). It says: “Let F₁ and F₂ be analytic continuations of f to V. Then F₁ = F₂.”

**Sources:** none listed. No primary source with a working link was found.

### Band limits diagonalize mean squares

**Remember:** A narrow Fourier transform cannot see the nonzero frequency gaps.

*Rules out counterexamples. Confidence: medium.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 42A38. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** Fix T &gt; 0 and a positive integer N. Replace a sharp time cutoff by w(t/T), where w is smooth and rapidly decreasing. Define ŵ(ξ) by integrating w(u) exp(−iuξ) over the real line. Require ŵ to vanish whenever \|ξ\| ≥ T/N.

**Problem.** For P(t) = ∑ over n ≤ N of a(n) exp(−it log n), the integral of w(t/T)\|P(t)\|² over ℝ equals Tŵ(0)∑ \|a(n)\|².

**How the definition helps.** The narrow Fourier support removes every term coming from two different indices. In our own calculation, such a term samples ŵ at T log(m/n). Distinct positive integers at most N satisfy \|log(m/n)\| ≥ 1/N. Only the equal indices survive. The cited lemma uses Fourier decay and allows an error.

**Paper or page:** [Extreme values of Dirichlet polynomials with multiplicative coefficients](https://arxiv.org/abs/2303.06739). It says: “M<sub>1</sub>(R, T) = T{\\hat\\Phi }(0) (1 + O(T<sup>-1</sup>) ) \\sum <sub>n\\leqslant X</sub> \|r<sub>f</sub>(n)\|<sup>2</sup>.”

**Sources:**

- [Max Wenqiang Xu, Daodao Yang, Extreme values of Dirichlet polynomials with multiplicative coefficients](https://arxiv.org/abs/2303.06739)

### Prime phases recover time moments

**Remember:** Give each prime its own phase.

*Makes the theorem clean to state or prove.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 11K06. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** Fix an integer N ≥ 1. For each prime p ≤ N, choose an independent uniform point U(p) on the unit circle. Set U(1) = 1 and extend by multiplication, so U(mn) = U(m)U(n) whenever mn ≤ N.

**Problem.** Put P(t) = ∑ a(n) exp(−it log n) and X = ∑ a(n)U(n), summing over 1 ≤ n ≤ N. For each real q &gt; 0, average the qth power of \|P(t)\| over \[0,T\]. As T grows, this approaches the expected qth power of \|X\|.

**How the definition helps.** Independent prime phases turn the time average into an integral over a product of circles. Our own proof tests the phase distribution against products of integer powers of its coordinates. Each nonconstant product oscillates at a nonzero frequency because unique factorization makes the prime logarithms rationally independent. Its time average therefore vanishes. Weyl’s criterion now gives convergence for every continuous function of the phases, including the stated power.

**Wikipedia:** [Equidistribution theorem](https://en.wikipedia.org/wiki/Equidistribution_theorem). It says: “equidistribution is equivalent to having a non-trivial estimate for the exponential sums formed with the sequence as exponents.”

**Sources:** none listed. No primary source with a working link was found.

### Product coefficients simplify even moments

**Remember:** Group products before taking the square.

*Makes the theorem clean to state or prove.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable). arXiv math.NT. Level 3: graduate.

**Definition.** Fix positive integers k and N and put P(t) = ∑ a(n) exp(−it log n), summing over 1 ≤ n ≤ N. Define b(m) by summing a(n₁)⋯a(nₖ) over ordered tuples with product m and entries between 1 and N.

**Problem.** On any interval of length T, the integral of \|P(t)\|²ᵏ equals (T + O(Nᵏ))∑ \|b(m)\|². The implied constant is absolute.

**How the definition helps.** Grouping equal products turns the even moment into a mean square with one coefficient per frequency. In our own derivation, the largest possible product is Nᵏ. The Montgomery–Vaughan mean value theorem then gives the error bound. For prime indices, each product occurs in at most k! orders, giving the cited prime sum estimate.

**Paper or page:** [Conditional mean values of long Dirichlet polynomials](https://arxiv.org/abs/2201.02108). It says: “\\int \_T<sup>2T</sup>\\bigg\|\\sum <sub>p\\leqslant x</sub>\\frac{a(p)}{p<sup>1/2+it</sup>}\\bigg\|<sup>2k</sup>dt\\ll Tk!\\bigg(\\sum <sub>p\\leqslant x</sub>\\frac{\|a(p)\|<sup>2}{p}\\bigg</sup>)<sup>k</sup>.”

**Sources:**

- [H. L. Montgomery and R. C. Vaughan, Hilbert’s inequality, J. London Math. Soc. 8 (1974), 73–82](https://doi.org/10.1112/jlms/s2-8.1.73)

### Summatory weights expose mean squares

**Remember:** The log scale reveals the Fourier transform of the partial sums.

*Makes the theorem clean to state or prove.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 44A15. arXiv math.NT, math.CA. Level 3: graduate.

**Definition.** For a finite Dirichlet polynomial A(s) = ∑ a(n) exp(−s log n), define S(x) = ∑ over n ≤ x of a(n). On the log scale use F(u) = exp(−σu)S(exp u) for σ &gt; 0.

**Problem.** ∫ from 0 to ∞ of \|S(x)\|² exp(−(1+2σ) log x) dx equals (1/(2π))∫ over ℝ of \|A(σ+it)/(σ+it)\|² dt.

**How the definition helps.** The logarithmic variable and exponential weight turn the partial sums into a function with Fourier transform A(σ+it)/(σ+it). In our own derivation, each coefficient contributes an integral starting at log n. Plancherel’s theorem equates the square integrals on the two sides of the Fourier transform. The cited lemma also covers infinite series under convergence assumptions.

**nLab:** [Mellin transform](https://ncatlab.org/nlab/show/Mellin+transform). It says: “its Mellin transform is the function given by the integral expression”

**Paper or page:** [Helson's conjecture for smooth numbers](https://arxiv.org/abs/2511.03430). It says: “\\int \_0<sup>\\infty</sup> \\frac{\|\\sum <sub>1\\leqslant n \\leqslant x</sub> a<sub>n</sub>\|<sup>2}{x<sup>1</sup> + 2 \\sigma </sup>} \\,  dx \\,  = \\frac{1}{2\\pi } \\int <sub>-\\infty </sub><sup>\\infty </sup> \\biggl\| \\frac{A(\\sigma + i t)}{\\sigma + it} \\biggr\|<sup>2</sup> \\,  dt \\,  .”

**Sources:**

- [Seth Hardy, Max Wenqiang Xu, Helson's conjecture for smooth numbers](https://arxiv.org/abs/2511.03430)

### Disk automorphisms preserve Blaschke degree

**Remember:** Composing with a bijection preserves every fiber count.

*True by definition.* MSC 30C10 (Polynomials and rational functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** A disk automorphism is a holomorphic bijection from the disk onto itself. A finite Blaschke product is a product of finitely many such maps times a constant of modulus one. The number of factors is its degree. The positive-degree products are exactly the proper holomorphic disk maps, meaning inverse images of compact sets are compact.

**Problem.** Precomposing or postcomposing a nonconstant finite Blaschke product with a disk automorphism preserves its class and degree.

**How the definition helps.** Use the proper-map characterization, since composing with a homeomorphism preserves properness (our own). The homeomorphism also preserves the degree, which counts preimages of any disk point with multiplicity (our own). To prove the characterization, factor out the finite list of zeros (our own). Apply the maximum principle to the quotient and its reciprocal, whose boundary moduli tend uniformly to one (our own).

**Paper or page:** [Multipoint Julia theorems](https://arxiv.org/abs/2101.03559v1). It says: “In particular, if γ ∈ Aut(𝔻) then B ∘ γ and γ ∘ B are still Blaschke products of the same degree d.”

**Sources:** none listed. No primary source with a working link was found.

### Blaschke sums exclude impossible zeros

**Remember:** Zeros of bounded functions approach the circle fast enough to give a finite sum.

*Rules out counterexamples.* MSC 30C15 (Zeros of polynomials, rational functions, and other analytic functions of one complex variable (e.g., zeros of functions with bounded Dirichlet integral)). arXiv math.CV. Level 3: graduate.

**Definition.** A sequence in the unit disk meets the Blaschke condition if the sum of its distances to the unit circle is finite. This is stronger than requiring no accumulation point inside the disk.

**Problem.** A sequence in the disk, counted with repetitions, is the complete zero list of a nonzero bounded holomorphic function on the disk exactly when it satisfies the Blaschke condition.

**How the definition helps.** The finite sum rules out sequences that approach the circle too slowly (our own). The points 1 − 1/n for n ≥ 2 have no interior accumulation point, but their distances have divergent sum (our own). Jensen’s formula gives the necessary bound from the circular averages of the logarithm of the modulus (our own). Conversely, the sum ensures local uniform convergence of the normalized product with the prescribed zeros, after factoring out zeros at zero (our own).

**Paper or page:** [Translation-based completeness on compact intervals](https://arxiv.org/abs/2409.17563v1). It says: “Let F ∈ 𝒪(𝔻) ∖ {0} be bounded with zeros Z = {zₙ}ₙ∈ℕ. Then the Blaschke condition is satisfied: ∑ₙ∈ℕ 1 − \|zₙ\| &lt; ∞.”

**Sources:** none listed. No primary source with a working link was found.

### Cross-ratio distortion gives the Schwarzian derivative its chain rule

**Remember:** Cross-ratio distortion ratios multiply under composition, so their leading corrections add.

*True by definition. Confidence: medium.* MSC 30C45 (Special classes of univalent and multivalent functions of one complex variable (starlike, convex, bounded rotation, etc.)), 51B10. arXiv math.CV. Level 3: graduate.

**Definition.** For distinct points z₁, z₂, z₃, z₄ approaching z, use the cross-ratio R = ((z₃ − z₁)(z₄ − z₂))/((z₃ − z₂)(z₄ − z₁)). Divide the cross-ratio of their images under f by R. The Schwarzian Sf at z is six times the coefficient of (z₁ − z₂)(z₃ − z₄) in the leading distortion term. The usual formula is Sf = (f″/f′)′ − ½(f″/f′)².

**Problem.** Where the holomorphic functions and the composite are defined and their derivatives are nonzero, S(f∘g) = ((Sf)∘g)·(g′)² + Sg. In particular, Möbius maps have zero Schwarzian wherever finite.

**How the definition helps.** The distortion definition gives the chain rule because the distortion ratio for a composite is the product of two ratios. The leading corrections add because each is already quadratic in the small differences. For f after g, the two differences each gain a factor of g′ to first order, giving the square in the formula. The article gives the expansion and its implication, and the multiplication step is our own explanation. The work moves into the Taylor calculation that identifies the coefficient with the differential formula.

**Wikipedia:** [Schwarzian derivative](https://en.wikipedia.org/wiki/Schwarzian_derivative). It says: “This immediately yields the chain rule S(f∘g) = ((Sf)∘g)·(g′)² + Sg.”

**Sources:** none listed. No primary source with a working link was found.

### Loewner transition maps compose

**Remember:** Changing coordinates twice is the same as changing them once.

*True by definition.* MSC 30C55 (General theory of univalent and multivalent functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** Start with injective holomorphic maps from the disk whose images grow by inclusion with time. Define the transition from time s to time t by applying the inverse of the later map to the earlier map. The differential equation approach instead defines the transitions as solutions of a time-dependent equation.

**Problem.** Fix three times s ≤ t ≤ r in a Loewner chain. Going from s to t and then to r gives the transition from s to r.

**How the definition helps.** The two transitions contain the intermediate map next to its inverse, so they cancel (our own). Image inclusion puts every argument inside the domain of the inverse (our own). Deriving the same law from a time-dependent differential equation requires uniqueness of its solutions (our own).

**Wikipedia:** [Loewner differential equation](https://en.wikipedia.org/wiki/Loewner_differential_equation). It says: “By uniqueness the mappings φₛ,ₜ have the following semigroup property”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing univalent functions makes the Bieberbach coefficient bound statable

**Remember:** Fix f(0) = 0 and f′(0) = 1, then \|aₙ\| ≤ n.

*Makes the theorem clean to state or prove.* MSC 30C55 (General theory of univalent and multivalent functions of one complex variable), 30C50. arXiv math.CV. Level 3: graduate.

**Definition.** A schlicht function is a one-to-one holomorphic function f on the unit disc with f(0) = 0 and f′(0) = 1. So f(z) = z + a₂z² + a₃z³ + … . Any one-to-one holomorphic g becomes schlicht after (g − g(0))/g′(0).

**Problem.** De Branges's theorem, once the Bieberbach conjecture, says that every schlicht function has \|aₙ\| ≤ n for all n ≥ 2. The Koebe function z/(1 − z)², with aₙ = n, shows that the bound is sharp.

**How the definition helps.** The normalization removes the freedom of scaling and translation, which would otherwise make the coefficients unbounded. Without it, cf is one-to-one for every c ≠ 0 and has coefficients caₙ, so no bound can hold (our own). The normalization also makes the class compact, since by Hurwitz's theorem a limit of one-to-one functions is one-to-one or constant (our own link). The hard part was the proof, which de Branges completed in 1985.

**Wikipedia:** [De Branges's theorem](https://en.wikipedia.org/wiki/De_Branges%27s_theorem), [Hurwitz's theorem (complex analysis)](https://en.wikipedia.org/wiki/Hurwitz%27s_theorem_%28complex_analysis%29). It says: “The statement concerns the Taylor coefficients aₙ of a univalent function, i.e., a one-to-one holomorphic function that maps the unit disk into the complex plane, normalized as is always possible so that a₀=0 and a₁=1.”

**Sources:**

- [L. de Branges, A proof of the Bieberbach conjecture, Acta Mathematica 154 (1985)](https://doi.org/10.1007/BF02392821)

### Curve modulus multiplies distortion bounds

**Remember:** Two distortions multiply, and reversing a map swaps the bounds.

*True by definition.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** For K ≥ 1, a plane homeomorphism is K-quasiconformal if it changes every curve family’s modulus by factors between 1/K and K. A nonnegative Borel density is admissible when its line integral along each locally rectifiable curve in the family is at least one. Modulus is the infimum of the area integrals of squared admissible densities. The differential definition bounds the ratio of the major and minor axes of infinitesimal ellipses.

**Problem.** The composition of quasiconformal maps with bounds K and L has bound KL. The inverse of a map with bound K has bound K.

**How the definition helps.** Apply the modulus inequalities successively for composition (our own). For inversion apply them to the inverse image of each curve family and exchange the inequalities (our own). The hard step is the equivalence between the modulus definition and the analytic definition using weak derivatives (our own).

**Wikipedia:** [Quasiconformal mapping](https://en.wikipedia.org/wiki/Quasiconformal_mapping). It says: “The inverse of a K-quasiconformal homeomorphism is K-quasiconformal.”

**Sources:**

- [Lars V. Ahlfors, Lectures on Quasiconformal Mappings, second edition (2006)](https://doi.org/10.1090/ulect/038)

### Geometric and analytic quasiconformality agree, so each proof can choose

**Remember:** Distortion of shapes and the Beltrami bound are the same condition.

*True by definition. Confidence: medium.* MSC 30C62 (Quasiconformal mappings in the complex plane), 30F60. arXiv math.DG, math.CV. Level 3: graduate.

**Definition.** In the geometric sense, a K-quasiconformal map is a homeomorphism that changes the conformal modulus of each quadrilateral by at most a factor K. The modulus is a conformal invariant, like the ratio of the sides of a rectangle. In the analytic sense, it is a homeomorphism with weak derivatives that satisfy \|∂f/∂z̄\| ≤ k\|∂f/∂z\| almost everywhere, where k = (K−1)/(K+1). The theorem adds that these derivatives are locally square-integrable.

**Problem.** For a homeomorphism between plane domains, the geometric and the analytic definitions of K-quasiconformality are equivalent.

**How the definition helps.** Each definition makes some theorems immediate, and the equivalence lets every proof use the easier one. With the geometric definition, the inverse of a K-quasiconformal map is K-quasiconformal by definition (our own). Compositions multiply the constants, also by definition (our own). The analytic definition links the maps to the Beltrami equation ∂f/∂z̄ = μ ∂f/∂z (our own). The work moves into the proof that the two definitions agree.

**Paper or page:** [Survey on the Canonical Metrics on the Teichmüller Spaces and the Moduli Spaces of Riemann Surfaces](https://arxiv.org/abs/2405.00761). It says: “The geometric and the analytic definitions of K-quasiconformality are equivalent.”

**Sources:**

- [K. W. Chan, Survey on the Canonical Metrics on the Teichmüller Spaces and the Moduli Spaces of Riemann Surfaces, arXiv:2405.00761 (2024)](https://arxiv.org/abs/2405.00761)

### Matching Beltrami coefficients cancel distortion

**Remember:** Equal infinitesimal distortions disappear when one map undoes the other.

*True by definition. Confidence: medium.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** An orientation-preserving quasiconformal map is a homeomorphism whose weak derivative distorts infinitesimal circles into ellipses of bounded axis ratio. Here the map has locally square-integrable weak derivatives, defined by integration by parts. Write its derivative almost everywhere as v ↦ av + bv̄, where the bar denotes conjugation. Its Beltrami coefficient b/a records the direction and size of the distortion.

**Problem.** Suppose two such maps on the same plane domain have equal Beltrami coefficients almost everywhere. Then one is the other followed by a holomorphic change of coordinates.

**How the definition helps.** Equal ratios b/a make the derivatives complex scalar multiples of one another (our own). The chain rule then gives a complex-linear derivative for the change of coordinates almost everywhere (our own). The proof uses the chain rule for quasiconformal inverses and the theorem that weak Cauchy–Riemann equations imply holomorphicity (our own).

**nLab:** [quasiconformal map](https://ncatlab.org/nlab/show/quasiconformal+map). It says: “is called the complex dilatation μf of f, a measure for the function's failure to be a conformal map or holomorphic map.”

**Sources:**

- [Lars V. Ahlfors, Lectures on Quasiconformal Mappings, second edition (2006)](https://doi.org/10.1090/ulect/038)

### Measurable Beltrami coefficients and Sobolev maps give the measurable Riemann mapping theorem

**Remember:** Measurable distortion, weak derivatives: every such Beltrami equation has a solution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** A quasiconformal map is a homeomorphism that solves the Beltrami equation ∂f/∂z̄ = μ ∂f/∂z. Here μ is a measurable function with sup \|μ\| &lt; 1, and the derivatives are weak derivatives in the Sobolev space W1,2 (square-integrable first derivatives). To first order, such a map takes small circles to ellipses of bounded eccentricity.

**Problem.** Let D be a simply connected domain other than ℂ, and let μ be measurable on D with ‖μ‖∞ &lt; 1. Then a quasiconformal homeomorphism from D onto the unit disc solves the Beltrami equation for μ. This generalizes the Riemann mapping theorem from conformal to quasiconformal maps.

**How the definition helps.** Measurable coefficients and weak derivatives give a class that is closed under the limits that the existence proof takes (our own). With only continuous coefficients and classical derivatives, such limits can leave the class (our own). In applications μ is often discontinuous, for example when an ellipse field is pulled back by a dynamical system (our own). The weaker definition lets such μ be used at all.

**Wikipedia:** [Quasiconformal mapping](https://en.wikipedia.org/wiki/Quasiconformal_mapping). It says: “suppose that μ : D → ℂ is Lebesgue measurable and satisfies ‖μ‖∞&lt;1. Then there is a quasiconformal homeomorphism f from D to the unit disk which is in the Sobolev space W1,2(D)”

**Sources:**

- [C. B. Morrey, On the solutions of quasi-linear elliptic partial differential equations, Transactions of the American Mathematical Society 43 (1938)](https://doi.org/10.1090/s0002-9947-1938-1501936-8)
- [L. Ahlfors and L. Bers, Riemann's Mapping Theorem for Variable Metrics, Annals of Mathematics 72 (1960)](https://doi.org/10.2307/1970141)

### Curve modulus is subadditive

**Remember:** The largest density meets every length test.

*True by definition.* MSC 30C70 (Extremal problems for conformal and quasiconformal mappings, variational methods), 31A15. arXiv math.CV. Level 3: graduate.

**Definition.** A density is a nonnegative Borel function on a plane domain. It is admissible if its integral along each locally rectifiable curve in the family is at least one. The modulus is the infimum of the area integrals of squared admissible densities. Extremal length is the supremum of squared minimum curve length divided by area over densities of positive finite area.

**Problem.** The modulus of a countable union of curve families is at most the sum of their moduli.

**How the definition helps.** The pointwise supremum of admissible densities meets every length requirement in the union (our own). Its square is at most the sum of their squares (our own). Choose densities with errors below ε/2ⁿ for family n, then let ε decrease to zero (our own). Rescaling densities to give minimum length one explains why modulus is the reciprocal of extremal length (our own).

**Paper or page:** [Divergent geodesics in the Universal Teichmüller space](https://arxiv.org/abs/2307.02775v1). It says: “Subadditivity: mod(⋃ᵢ₌₁…∞ Γᵢ) ≤ ∑ᵢ₌₁…∞ mod(Γᵢ).”

**Sources:**

- [Divergent geodesics in the Universal Teichmüller space](https://arxiv.org/abs/2307.02775v1)

### Excluding rotations makes iterates converge

**Remember:** Exclude every rotation, including the identity, to get a single limit.

*Rules out counterexamples.* MSC 30D05 (Functional equations in the complex plane, iteration and composition of analytic functions of one complex variable). arXiv math.CV, math.DS. Level 3: graduate.

**Definition.** An elliptic automorphism of the disk is an invertible holomorphic disk map with an interior fixed point. In a coordinate taking that point to zero it is a rotation, including the identity. Exclude these maps when asking for convergence to a single point.

**Problem.** If a holomorphic disk self-map is not conjugate to a rotation, its iterates converge locally uniformly to one point of the closed disk.

**How the definition helps.** Excluding rotations removes exactly the maps whose iterates fail to approach a single constant (our own). A nonidentity rotation has a nonconvergent orbit, while the identity keeps every starting point fixed (our own). With an interior fixed point, change coordinates to put it at zero and apply Schwarz’s lemma to the iterates (our own). Without an interior fixed point, the boundary case of the Denjoy–Wolff theorem supplies convergence (our own).

**Paper or page:** [On cubic Blaschke products](https://arxiv.org/abs/2511.13484v1). It says: “Then either f is conjugate to a rotation, or there exists w₀ ∈ 𝔻̄ such that fⁿ converges to the constant map w₀ locally uniformly on 𝔻.”

**Sources:** none listed. No primary source with a working link was found.

### Rotations stop disk iterates converging

**Remember:** An interior rotation keeps orbit points circling instead of settling.

*Rules out counterexamples.* MSC 30D05 (Functional equations in the complex plane, iteration and composition of analytic functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** An elliptic disk automorphism is a holomorphic bijection of the disk with an interior fixed point. Here this includes the identity. After a holomorphic change of disk coordinates, every such bijection is a rotation about zero.

**Problem.** Every holomorphic disk self-map other than an elliptic automorphism has iterates converging locally uniformly to a single point of the closed disk.

**How the definition helps.** The exclusion removes exactly the interior rotations, including the identity (our own). For example, z ↦ −z alternates between two values at every nonzero starting point, and the identity has no common constant limit (our own). The cited theorem handles maps that are not automorphisms. Every remaining automorphism becomes a translation or positive dilation in half-plane coordinates, where iterates tend to one boundary point (our own).

**Wikipedia:** [Denjoy–Wolff theorem](https://en.wikipedia.org/wiki/Denjoy%E2%80%93Wolff_theorem). It says: “the iterates of f tend to z uniformly on compact subsets of D.”

**Sources:** none listed. No primary source with a working link was found.

### Exponential type turns compact Fourier support into a growth bound

**Remember:** Support inside \[−A, A\] means growth like exp(A\|ζ\|).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30D15 (Special classes of entire functions of one complex variable and growth estimates), 42A38. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** An entire function f has exponential type A if there is a constant C with \|f(ζ)\| ≤ C exp(A\|ζ\|) for all complex ζ. This measures growth in every complex direction by one number.

**Problem.** The Paley–Wiener theorem describes the Fourier transforms of L² functions supported in \[−A, A\]. They are exactly the entire functions of exponential type A that are square integrable over horizontal lines.

**How the definition helps.** The number A in the growth bound is the size of the support, so a support condition becomes an equivalent growth condition in the complex plane. The forward direction is easy: \|exp(ixζ)\| ≤ exp(A\|ζ\|) for \|x\| ≤ A. The converse is the real content, and it needs contour shifts and growth estimates (our own summary).

**Wikipedia:** [Paley–Wiener theorem](https://en.wikipedia.org/wiki/Paley%E2%80%93Wiener_theorem). It says: “Conversely, any entire function of exponential type A which is square-integrable over horizontal lines is the holomorphic Fourier transform of an L² function supported in \[−A,A\].”

**Sources:**

- [R. Paley and N. Wiener, Fourier Transforms in the Complex Domain, AMS Colloquium Publications 19 (1934)](https://doi.org/10.1090/coll/019)

### The order of an entire function makes Hadamard's factorization finite

**Remember:** Finite order means a polynomial exponent and one fixed elementary factor.

*Makes the theorem clean to state or prove.* MSC 30D15 (Special classes of entire functions of one complex variable and growth estimates), 30D20. arXiv math.CV. Level 3: graduate.

**Definition.** Let M(r) be the maximum of \|f\| on the circle \|z\| = r. The order of an entire function f is the lim sup of log log M(r) / log r as r → ∞. For example, sin z, cos z and eᶻ have order 1.

**Problem.** Hadamard's theorem says that an entire function of finite order ρ is zᵐ exp(P(z)) times a product of elementary factors Eₚ(z/aₖ) over its zeros. Here P is a polynomial of degree at most ρ, and one integer p ≤ ρ serves for every factor.

**How the definition helps.** One number that measures growth controls both free parts of the Weierstrass product, so the factorization has a short, rigid form. Weierstrass's general theorem leaves the entire function g in exp(g(z)) and the degrees pₙ uncontrolled. Finite order forces g to be a polynomial and lets one degree p work for all zeros. The hard part is the proof, which bounds the zeros by Jensen's formula (our own summary).

**Wikipedia:** [Weierstrass factorization theorem](https://en.wikipedia.org/wiki/Weierstrass_factorization_theorem). It says: “A special case of the Weierstrass factorization theorem occurs for entire functions of finite order. In this case the pₙ can be taken independent of n and the function g(z) is a polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Elementary factors give an entire function for every sequence of zeros

**Remember:** Each elementary factor puts one zero in place and stays near one elsewhere.

*Makes the theorem clean to state or prove.* MSC 30D20 (Entire functions of one complex variable (general theory)), 30C15. arXiv math.CV. Level 3: graduate.

**Definition.** Weierstrass's elementary factors are E₀(z) = 1 − z and Eₙ(z) = (1 − z) exp(z + z²/2 + … + zⁿ/n). Each one vanishes only at z = 1. For \|z\| ≤ 1 it satisfies \|1 − Eₙ(z)\| ≤ \|z\|ⁿ⁺¹, so it is very close to 1 near 0.

**Problem.** Let aₙ be any sequence of nonzero complex numbers with \|aₙ\| → ∞. Then some entire function has zeros exactly at the aₙ, with multiplicity equal to the number of repeats. Every entire function is such a product times zᵐ and a nonvanishing factor exp(g(z)).

**How the definition helps.** An infinite product converges only if its factors tend to 1, and the elementary factors do this while keeping their one zero. The naive product of (1 − z/aₙ) can diverge; for aₙ = n it does, because the sum of 1/n diverges (our own example). The exponential correction cancels the first terms of log(1 − z), so Eₙ(z/aₙ) is within \|z/aₙ\|ⁿ⁺¹ of 1. A suitable choice of degrees then makes the product converge.

**Wikipedia:** [Weierstrass factorization theorem](https://en.wikipedia.org/wiki/Weierstrass_factorization_theorem). It says: “The necessity of additional terms in the product is demonstrated when one considers ∏ₙ(z−cₙ) where the sequence {cₙ} is not finite. It can never define an entire function, because the infinite product does not converge.”

**Sources:** none listed. No primary source with a working link was found.

### Counting infinity as a value unifies Picard's theorems

**Remember:** On the sphere, an essential singularity misses at most two points.

*Makes the theorem clean to state or prove.* MSC 30D30 (Meromorphic functions of one complex variable (general theory)), 30D35. arXiv math.CV. Level 3: graduate.

**Definition.** Treat a meromorphic function as a holomorphic map into the Riemann sphere ℂ ∪ {∞}. Classify its behaviour at ∞ by the behaviour of f(1/z) at 0. An entire function that is not a polynomial has an essential singularity at ∞.

**Problem.** Near an essential singularity, a meromorphic function takes every point of the Riemann sphere infinitely often, with at most two exceptions. So a nonconstant entire function misses at most one complex value.

**How the definition helps.** On the sphere, poles are ordinary values, so the exceptional values of entire and meromorphic functions are counted in one way. An entire function never takes ∞, which uses up one of the two exceptions (our own step). An entire function that is not a polynomial has an essential singularity at ∞, so the Little theorem is a case of the Great one. The page gives 1/(1 − exp(1/z)), which takes ∞ infinitely often but misses 0 and 1.

**Wikipedia:** [Picard theorem](https://en.wikipedia.org/wiki/Picard_theorem). It says: “With this generalization, Little Picard Theorem follows from Great Picard Theorem because an entire function is either a polynomial or it has an essential singularity at infinity.”

**Sources:** none listed. No primary source with a working link was found.

### Adding the proximity function makes Nevanlinna's characteristic independent of the value

**Remember:** Count how often f hits a, plus how close it comes.

*Makes the theorem clean to state or prove.* MSC 30D35 (Value distribution of meromorphic functions of one complex variable, Nevanlinna theory). arXiv math.CV. Level 3: graduate.

**Definition.** Let f be meromorphic and let a be a value. The counting function N(r, a, f) counts the solutions of f = a in the disc \|z\| &lt; r, with a logarithmic weight. The proximity function m(r, a, f) is the average over \|z\| = r of log⁺ 1/\|f − a\|. It measures how close f comes to a on the circle, and the characteristic is T(r, f) = m(r, ∞, f) + N(r, ∞, f).

**Problem.** The First Fundamental Theorem says that for every a on the Riemann sphere, T(r, f) = N(r, a, f) + m(r, a, f) + O(1).

**How the definition helps.** The proximity term is designed so that Jensen's formula turns the sum into a quantity that does not depend on a. Counting alone does depend on a (our own example). The exponential function never takes the value 0, so N(r, 0) = 0, while N(r, 1) grows. But eᶻ comes very close to 0 on the left half of each circle, and m(r, 0) records this.

**Wikipedia:** [Nevanlinna theory](https://en.wikipedia.org/wiki/Nevanlinna_theory). It says: “the First Fundamental Theorem says that the sum N(r,a,f) + m(r,a,f), tends to infinity at the rate which is independent of a. The first Fundamental theorem is a simple consequence of Jensen's formula.”

**Sources:**

- [R. Nevanlinna, Zur Theorie der Meromorphen Funktionen, Acta Mathematica 46 (1925)](https://doi.org/10.1007/BF02543858)

### Normalized deficiencies sum to at most two

**Remember:** A value can fall short without going completely missing.

*Makes the theorem clean to state or prove.* MSC 30D35 (Value distribution of meromorphic functions of one complex variable, Nevanlinna theory). arXiv math.CV. Level 3: graduate.

**Definition.** The Nevanlinna characteristic T(r) combines an integrated pole count with a circular average measuring large values. For each preimage z of a with 0 &lt; \|z\| &lt; r, add log(r/\|z\|) once per unit of multiplicity. A preimage at zero contributes its multiplicity times log r, giving the completed count N(r,a). The deficiency of a is one minus the upper limit of N(r,a)/T(r) as r tends to infinity.

**Problem.** For a transcendental meromorphic function on the plane, the sum of the deficiencies of all sphere values is at most two.

**How the definition helps.** Deficiency expresses the shortfall for every value as a fraction of the same total growth (our own). For finitely many values, the Second Fundamental Theorem bounds the sum of the normalized shortfalls by two plus an error (our own). Along suitable radii tending to infinity outside the exceptional set, the error tends to zero (our own). Taking lower limits bounds the sum of deficiencies for every finite set (our own). The First Fundamental Theorem makes deficiencies nonnegative, so taking the supremum over finite sets proves the result (our own).

**Wikipedia:** [Nevanlinna theory](https://en.wikipedia.org/wiki/Nevanlinna_theory). It says: “The defect relation is one of the main corollaries”

**Sources:** none listed. No primary source with a working link was found.

### Spherical area makes growth rotation invariant

**Remember:** Spherical rotations neither change area nor change the number of sheets.

*True by definition.* MSC 30D35 (Value distribution of meromorphic functions of one complex variable, Nevanlinna theory). arXiv math.CV. Level 3: graduate.

**Definition.** For a meromorphic function on a disk centered at zero, let A(t) be the spherical area covered by the disk of radius t. Count each image point once per preimage, with multiplicity, and divide by the area of the sphere. The Ahlfors–Shimizu characteristic at radius r is the integral of A(t)/t from zero to r. The usual Nevanlinna characteristic combines a pole count with a circular average measuring large values.

**Problem.** Postcomposing a meromorphic function by a rotation of the sphere preserves its Ahlfors–Shimizu characteristic exactly.

**How the definition helps.** Rotation preserves spherical area and the multiplicity at each image point (our own). Thus every disk contributes the same area before and after rotation (our own). The hard comparison identifies this area integral with the usual Nevanlinna characteristic up to a bounded error (our own).

**Wikipedia:** [Nevanlinna theory](https://en.wikipedia.org/wiki/Nevanlinna_theory). It says: “is the spherical area of the image of the disc \|z\| ≤ t, counting multiplicity”

**Sources:** none listed. No primary source with a working link was found.

### Non-tangential approach gives boundary limits of bounded holomorphic functions

**Remember:** Approach the boundary inside a wedge, and the limit exists almost everywhere.

*Rules out counterexamples. Confidence: medium.* MSC 30D40 (Cluster sets, prime ends, boundary behavior), 30H10. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** A path in the unit disc converges non-tangentially to a boundary point if it stays in a wedge at that point. The wedge is symmetric about the radius and has opening angle less than π. Radial approach is the simplest case.

**Problem.** Let f be in the Hardy space Hᵖ of the disc, the holomorphic functions with bounded p-th means on circles, and let f₁ be its boundary function. At almost every boundary point, f(z) tends to f₁ along every non-tangential path.

**How the definition helps.** Inside a wedge, the distance to the boundary is comparable to the distance to the point, so the Poisson kernel and a maximal function control the values. Tangential approach is excluded because it fails (our own). Littlewood showed in 1927 that for any curve tangent to the circle, some bounded holomorphic function has no limit along rotated copies of it at almost every point (our own). The hard part is the maximal function estimate.

**Wikipedia:** [Fatou's theorem](https://en.wikipedia.org/wiki/Fatou%27s_theorem). It says: “Let f ∈ Hᵖ(𝔻). Then for almost all θ ∈ \[0,2π\], lim (t→1) f(γ(t)) = f₁(eⁱᶿ) for every non-tangential limit γ converging to eⁱᶿ, where f₁ is defined as above.”

**Sources:**

- [P. Fatou, Séries trigonométriques et séries de Taylor, Acta Mathematica 30 (1906)](https://doi.org/10.1007/BF02418579)

### Prime ends give every conformal map of the disc a boundary correspondence

**Remember:** Boundary points may fail, but prime ends always match the circle.

*Makes the theorem clean to state or prove.* MSC 30D40 (Cluster sets, prime ends, boundary behavior), 30C35. arXiv math.CV. Level 3: graduate.

**Definition.** A prime end of a simply connected plane domain is an equivalence class of chains of cross-cuts. A cross-cut is an arc in the domain with both ends on the boundary. A chain is a nested sequence of cross-cuts that shrinks toward the boundary.

**Problem.** Let f be a conformal bijection from the unit disc onto a simply connected domain B. Then f gives a bijection from the unit circle onto the prime ends of B.

**How the definition helps.** Prime ends describe the boundary as seen from inside the domain, which is what the conformal map sees. Ordinary boundary points do not work in general (our own examples). In a disc slit along a radius, each slit point is reached from two sides and matches two points of the circle. In a comb-shaped domain, some boundary points cannot be reached by any path from inside.

**Wikipedia:** [Prime end](https://en.wikipedia.org/wiki/Prime_end). It says: “If ƒ maps the unit disk conformally and one-to-one onto the domain B, it induces a one-to-one mapping between the points on the unit circle and the prime ends of B.”

**Sources:**

- [C. Carathéodory, Über die Begrenzung einfach zusammenhängender Gebiete, Mathematische Annalen 73 (1913)](https://doi.org/10.1007/BF01456699)

### Separate accesses distinguish slit sides

**Remember:** One slit point can have two different ways in.

*Makes the theorem clean to state or prove.* MSC 30D40 (Cluster sets, prime ends, boundary behavior). arXiv math.CV. Level 3: graduate.

**Definition.** An access to a boundary point records how a curve reaches it from a fixed interior point. Identify curves that deform into one another with endpoints fixed and with their interiors in the domain. Recording just the boundary point forgets this choice.

**Problem.** Let φ be a holomorphic bijection from the disk onto a simply connected plane domain. Accesses to p correspond bijectively to circle points where φ tends to p along the radius.

**How the definition helps.** An access distinguishes approaches to the same point, such as the two sides at an interior point of a straight slit (our own). The correspondence theorem shows that each access gives one endpoint in disk coordinates. Conversely, a radius whose image tends to p supplies the access for its endpoint.

**Paper or page:** [Boundary behaviour of universal covering maps](https://arxiv.org/abs/2409.01070v1). It says: “Then, there is a one-to-one correspondence between accesses from Ω to p and the points eⁱᶿ ∈ ∂𝔻 such that φ\*(eⁱᶿ) = p.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing the limit infinity makes Montel's two-omitted-values theorem true

**Remember:** Normal families may run off to infinity, and that counts as converging.

*Rules out counterexamples.* MSC 30D45 (Normal functions of one complex variable, normal families), 30D35. arXiv math.CV. Level 3: graduate.

**Definition.** A family of functions on a domain is normal if every sequence in it has a subsequence that converges uniformly on compact sets. For holomorphic and meromorphic functions, the distance on the values is the spherical distance on the Riemann sphere. So a subsequence may converge to the constant ∞.

**Problem.** Montel's theorem says that a family of holomorphic functions on a domain, all omitting the same two complex values, is normal. Its meromorphic form says that omitting three points of the Riemann sphere is enough.

**How the definition helps.** With the spherical distance, escape to infinity becomes one more allowed limit, so the theorem can hold with no exceptions. Without it the theorem is false (our own example). The constant functions fₙ = n, for n ≥ 2, all omit 0 and 1, and no subsequence converges to a finite function. In the spherical distance they converge to ∞.

**Wikipedia:** [Normal family](https://en.wikipedia.org/wiki/Normal_family), [Montel's theorem](https://en.wikipedia.org/wiki/Montel%27s_theorem). It says: “For a family of holomorphic functions, this reduces to requiring two values omitted by viewing each function as a meromorphic function omitting the value infinity.”

**Sources:**

- [P. Montel, Sur les familles de fonctions analytiques qui admettent des valeurs exceptionnelles dans un domaine, Annales scientifiques de l'École normale supérieure 29 (1912)](https://doi.org/10.24033/asens.652)

### Spherical derivatives test normality

**Remember:** Measure the image on the sphere, where poles are ordinary points.

*Makes the theorem clean to state or prove.* MSC 30D45 (Normal functions of one complex variable, normal families). arXiv math.CV. Level 3: graduate.

**Definition.** The spherical derivative measures stretching when the image plane includes infinity as a point on the unit sphere. For a meromorphic function f, it equals 2\|f′\|/(1 + \|f\|²) at finite values. At a pole use the same formula for 1/f.

**Problem.** A family is normal if every sequence has a subsequence converging uniformly on compact sets in spherical distance. Marty’s theorem says a meromorphic family is normal exactly when its spherical derivatives have a common bound on each compact set.

**How the definition helps.** A bound on spherical derivatives bounds the stretching of short line segments, including through poles (our own). The Arzelà–Ascoli theorem then extracts locally uniform subsequences because the sphere is compact (our own). For the converse, choose a finite chart near a value of a spherical limit and use Cauchy’s derivative estimates there (our own). On a small disk about 1 the family fₙ(z) = nz is normal, but its ordinary derivatives are unbounded (our own).

**Wikipedia:** [Normal family](https://en.wikipedia.org/wiki/Normal_family). It says: “Indeed, the expression on the left is the formula for the pull-back of the arclength element on the Riemann sphere to the complex plane via the inverse of stereographic projection.”

**Sources:** none listed. No primary source with a working link was found.

### No holes allow polynomial approximation

**Remember:** One complementary component means one allowed pole, at infinity.

*Rules out counterexamples.* MSC 30E10 (Approximation in the complex plane). arXiv math.CV. Level 3: graduate.

**Definition.** Call a compact plane set full if its complement is connected. Equivalently, every point outside it can be joined to infinity without crossing the set.

**Problem.** Every function holomorphic near a compact plane set with connected complement can be uniformly approximated there by polynomials.

**How the definition helps.** A connected complement lets Runge’s theorem place all poles at infinity, giving polynomial approximants. On the unit circle the integral of 1/z is 2πi, while every polynomial has integral zero (our own). Uniform convergence would force these integrals to agree in the limit (our own). Runge’s theorem does the work of moving poles within each complementary component (our own).

**Wikipedia:** [Runge's theorem](https://en.wikipedia.org/wiki/Runge%27s_theorem). It says: “Since rational functions with no poles except at infinity are simply polynomials”

**Sources:** none listed. No primary source with a working link was found.

### The Cauchy principal value makes the boundary jump formula statable

**Remember:** Boundary value equals principal value plus or minus half the density.

*Makes the theorem clean to state or prove.* MSC 30E20 (Integration, integrals of Cauchy type, integral representations of analytic functions in the complex plane), 46F20, 26A42. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** Take the integral of φ(ζ)/(ζ − z) over a curve C through z. Its Cauchy principal value removes a small piece of C centred at z and lets the piece shrink. The two sides of the singularity cancel in the limit. On the real line this gives P(1/x).

**Problem.** Let Φ(z) be 1/(2πi) times the integral of φ(ζ)/(ζ − z) over a smooth simple closed curve C, with φ analytic on C. Its limits from inside and outside at z on C are the principal value of this integral plus ½φ(z) and minus ½φ(z). On the real line, 1/(x ± iε) tends to ∓iπδ(x) + P(1/x).

**How the definition helps.** The ordinary integral diverges at z, because 1/(ζ − z) is not integrable there, and the principal value is the symmetric limit that does exist. With it, each one-sided limit splits into a common average plus or minus half the density. The difference of the two limits is φ(z), the jump. This is the key step in Plemelj's 1908 solution of the Riemann–Hilbert problem. The hard part is the analysis for less smooth curves and data.

**Wikipedia:** [Sokhotski–Plemelj theorem](https://en.wikipedia.org/wiki/Sokhotski%E2%80%93Plemelj_theorem). It says: “The Sokhotski–Plemelj formulas relate the limiting boundary values of these two analytic functions at a point z on C and the Cauchy principal value P of the integral”

**Sources:**

- [J. Plemelj, Ein Ergänzungssatz zur Cauchyschen Integraldarstellung analytischer Funktionen, Randwerte betreffend, Monatshefte für Mathematik und Physik 19 (1908)](https://doi.org/10.1007/bf01736696)

### Logarithms split scalar jumps

**Remember:** Take a logarithm before splitting the jump, then exponentiate.

*True by definition. Confidence: medium.* MSC 30E25 (Boundary value problems in the complex plane), 45E05. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** Let g be a smooth nonzero function on the counterclockwise unit circle whose values wind zero times around zero. Choose a continuous logarithm ℓ of g. Off the circle, set C(z) equal to the contour integral of ℓ(ζ)/(ζ − z), divided by 2πi.

**Problem.** There are nonvanishing analytic functions inside and outside the circle whose inside boundary value divided by the outside value equals g. The outside function tends to one at infinity.

**How the definition helps.** Taking logarithms turns the prescribed ratio into a difference of boundary values. In our own circle construction, the Cauchy boundary formula gives the inside value of C minus its outside value as ℓ. Exponentiating therefore gives the required ratio. The main theorem is the boundary formula, and zero winding permits the continuous logarithm.

**Wikipedia:** [Riemann–Hilbert problem](https://en.wikipedia.org/wiki/Riemann%E2%80%93Hilbert_problem). It says: “the Sokhotski–Plemelj theorem gives the solution.”

**Sources:** none listed. No primary source with a working link was found.

### Compact meromorphic maps fill the sphere

**Remember:** Compactness and openness force the image to fill the sphere.

*True by definition.* MSC 30F10 (Compact Riemann surfaces and uniformization). arXiv math.CV. Level 3: graduate.

**Definition.** A meromorphic function on a Riemann surface is a holomorphic map to the sphere, with poles mapped to infinity. The alternative definition uses complex values and treats poles as isolated singularities.

**Problem.** Every nonconstant meromorphic function on a compact connected Riemann surface takes every value of the sphere.

**How the definition helps.** Using the sphere puts every value in the target of one continuous, open map (our own). Compactness makes the image closed, and the open mapping theorem makes it open (our own). Connectedness of the sphere forces the image to be the whole sphere (our own). Near a pole the reciprocal is holomorphic, which justifies using the open mapping theorem there too (our own).

**nLab:** [Riemann surface](https://ncatlab.org/nlab/show/Riemann+surface). It says: “If X is compact and f is nonconstant, then f is surjective and Y compact.”

**Sources:** none listed. No primary source with a working link was found.

### Ramification indices make the Riemann–Hurwitz formula an exact count

**Remember:** Each ramification point costs e − 1 from the Euler characteristic.

*Makes the theorem clean to state or prove.* MSC 30F10 (Compact Riemann surfaces and uniformization), 14H30. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** For a nonconstant holomorphic map π between compact Riemann surfaces, every point P′ has local coordinates in which π(z) = zⁿ. The number n is the ramification index e at P′. The map is ramified at P′ when e &gt; 1.

**Problem.** For a map π of degree N from S′ to S, the Euler characteristics satisfy χ(S′) = N·χ(S) − Σ(eₚ − 1). Equivalently, 2g(S′) − 2 = N(2g(S) − 2) + Σ(eₚ − 1).

**How the definition helps.** The local form zⁿ says exactly how many sheets meet at a point, so the correction is a sum of local numbers. Away from ramification points the map is an N-sheeted covering, and Euler characteristics multiply by N. A point of index e is e sheets meeting in one point, so it removes e − 1 points from its fibre. The page checks the formula for ℘ on an elliptic curve, a double cover of the sphere with four points of index 2: 0 = 2·2 − 4.

**Wikipedia:** [Riemann–Hurwitz formula](https://en.wikipedia.org/wiki/Riemann%E2%80%93Hurwitz_formula). It says: “What the Riemann–Hurwitz formula does is to add in a correction to allow for ramification (sheets coming together).”

**Sources:**

- [A. Hurwitz, Ueber Riemann'sche Flächen mit gegebenen Verzweigungspunkten, Mathematische Annalen 39 (1891)](https://doi.org/10.1007/bf01199469)

### Weierstrass non-gaps add

**Remember:** Multiply two functions to add their sole pole orders.

*Makes the theorem clean to state or prove.* MSC 30F10 (Compact Riemann surfaces and uniformization), 14H55. arXiv math.CV. Level 3: graduate.

**Definition.** A positive integer is a non-gap at p if a meromorphic function has a pole of exactly that order at p and no other poles. Include zero for constant functions. Equivalently, positive non-gaps mark the steps where the dimension of the space of permitted functions increases.

**Problem.** The non-gaps at any point of a compact Riemann surface contain zero and are closed under addition. Exactly g positive integers are missing, where g is the genus, or number of handles.

**How the definition helps.** Listing attainable pole orders turns multiplication of functions into addition of orders. The leading coefficients multiply, and the product acquires no other poles (our own). Increasing the allowed order by one adds at most one dimension, because one leading coefficient determines the new term (our own). Riemann–Roch gives dimension n + 1 − g for n &gt; 2g − 2 (our own). Subtract the one dimension of constants to count n − g attained positive orders through n, leaving g gaps (our own).

**Wikipedia:** [Weierstrass point](https://en.wikipedia.org/wiki/Weierstrass_point). It says: “Multiplication of functions gives the non-gaps a numerical semigroup structure”

**Sources:** none listed. No primary source with a working link was found.

### Disk covers force entire maps constant

**Remember:** Lift an entire map to the disk and apply Liouville's theorem.

*True by definition.* MSC 30F20 (Classification theory of Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** Call a Riemann surface hyperbolic when its simply connected covering surface is the unit disk. The metric description instead uses a complete conformal metric of constant curvature −1.

**Problem.** Every holomorphic map from the complex plane to a hyperbolic Riemann surface is constant.

**How the definition helps.** The disk cover turns a map from the plane into a bounded entire function by lifting it (our own). The lift exists because the plane is simply connected, and it is holomorphic because the cover has local holomorphic inverses (our own). Liouville’s theorem says a bounded entire function is constant (our own). Uniformization identifies which surfaces have disk covers, including every compact surface of genus at least two (our own).

**Wikipedia:** [Uniformization theorem](https://en.wikipedia.org/wiki/Uniformization_theorem). It says: “those with the unit disk as universal cover ("hyperbolic")”

**Sources:** none listed. No primary source with a working link was found.

### Periods cancel Abel–Jacobi path choices

**Remember:** Two paths differ by a period, which the Jacobian removes.

*True by definition.* MSC 30F30 (Differentials on Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** On a compact Riemann surface, integrating holomorphic differential forms along a path gives a linear functional on those forms. The functionals from closed paths are called periods. The Jacobian identifies two functionals when their difference is a period. The Abel–Jacobi map assigns each point the class obtained by integrating to it from a fixed base point.

**Problem.** The Abel–Jacobi map of a compact Riemann surface is independent of the integration path.

**How the definition helps.** Following one path out and the other back gives a closed path, so the two functionals differ by a period. Ordinary integration can depend on the path even when its endpoints are fixed (our own). The Riemann bilinear relations show that the periods form a lattice spanning the dual space over the reals (our own). This makes the quotient compact (our own).

**Wikipedia:** [Abel–Jacobi map](https://en.wikipedia.org/wiki/Abel%E2%80%93Jacobi_map). It says: “Thus the difference is erased in the passage to the quotient by Λ.”

**Sources:** none listed. No primary source with a working link was found.

### Schottky quotients omit fixed points

**Remember:** Remove the limit set before identifying points by the group action.

*Rules out counterexamples.* MSC 30F40 (Kleinian groups (aspects of compact Riemann surfaces and uniformization)). arXiv math.CV. Level 3: graduate.

**Definition.** Choose g pairs of disjoint simple closed curves on the sphere bounding 2g mutually disjoint disks. Pair them by Möbius transformations taking the exterior of one disk onto the interior of its partner. These transformations generate a Schottky group of rank g. On its domain of discontinuity, each compact set meets its image under only finitely many group elements.

**Problem.** The quotient of the domain of discontinuity of a rank g Schottky group is a compact Riemann surface of genus g. The quotient map is a holomorphic covering.

**How the definition helps.** Restricting to this domain removes every point fixed by infinitely many group elements (our own). For the group generated by z ↦ 2z, these points are zero and infinity (our own). Inside the domain, only finitely many elements fix a point, and every nonidentity element has infinite order (our own). Thus only the identity fixes a point there, and the quotient map is a holomorphic covering (our own). Gluing the paired boundary curves of the region outside the disks gives a compact surface with g handles.

**Wikipedia:** [Schottky group](https://en.wikipedia.org/wiki/Schottky_group). It says: “The corresponding quotient space Ω(G)/G is given by joining up the Jordan curves in pairs”

**Sources:** none listed. No primary source with a working link was found.

### Cross-ratio distance makes real Möbius maps hyperbolic isometries

**Remember:** Möbius maps preserve the cross-ratio and therefore preserve this distance.

*True by definition. Confidence: medium.* MSC 30F45 (Conformal metrics (hyperbolic, Poincaré, distance functions)), 51M10. arXiv math.CV, math.MG. Level 3: graduate.

**Definition.** In the upper half-plane, the hyperbolic line through distinct p and q is an arc or a vertical ray perpendicular to the boundary. Let a and b be its boundary endpoints in the order a, p, q, b. Define the distance as log \|(q − a)(p − b)/((p − a)(q − b))\|, using a limit for an infinite endpoint. The usual distance minimizes lengths computed from \|dz\|/Im z.

**Problem.** Every Möbius map with real coefficients and positive determinant preserves hyperbolic distance in the upper half-plane.

**How the definition helps.** The cross-ratio definition makes distance invariant because the map preserves both the cross-ratio and the hyperbolic lines with their endpoints. The work is to show that the formula agrees with the distance from the hyperbolic length element. This is our own half-plane version of the argument in the article for the Klein model.

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio), [Poincaré half-plane model](https://en.wikipedia.org/wiki/Poincar%C3%A9_half-plane_model). It says: “Since the cross-ratio is invariant under projective transformations, it follows that the hyperbolic distance is invariant under the projective transformations that preserve the conic C.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithms give the Teichmüller triangle inequality

**Remember:** Compose the maps, multiply the bounds, then add their logarithms.

*True by definition.* MSC 30F60 (Teichmüller theory for Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** A marking identifies a fixed closed oriented surface with a given Riemann surface. Compare two marked surfaces using orientation-preserving quasiconformal maps that respect their markings up to continuous deformation. Each map has a distortion bound K on the axis ratios of infinitesimal ellipses. Teichmüller distance is half the logarithm of the infimum of these bounds.

**Problem.** Teichmüller distance satisfies the triangle inequality.

**How the definition helps.** Taking logarithms turns the product bound for a composition into the sum needed for the triangle inequality (our own). Compose maps whose bounds approach the two infima and pass to the limit (our own). The distance formula using a minimizing map also requires Teichmüller’s existence theorem for closed surfaces of genus at least two (our own).

**Wikipedia:** [Teichmüller space](https://en.wikipedia.org/wiki/Teichm%C3%BCller_space). It says: “then the Teichmüller distance between them is by definition ½ log K.”

**Sources:** none listed. No primary source with a working link was found.

### Markings give moduli by quotient

**Remember:** First identify deformations of the marking, then forget the marking.

*True by definition.* MSC 30F60 (Teichmüller theory for Riemann surfaces). arXiv math.CV. Level 3: graduate.

**Definition.** A marking identifies a fixed closed oriented surface with a Riemann surface by an orientation-preserving homeomorphism. Teichmüller space identifies marked surfaces when a holomorphic isomorphism respects their markings up to continuous deformation through homeomorphisms. The mapping class group consists of orientation-preserving homeomorphisms of the fixed surface up to such deformation.

**Problem.** In genus at least two, quotienting Teichmüller space by the mapping class group gives the moduli space of compact Riemann surfaces.

**How the definition helps.** Changing the marking allows every identification that forgetting it requires (our own). Thus two points lie in one orbit exactly when the underlying Riemann surfaces are holomorphically isomorphic (our own). The deeper theorem gives each point a neighborhood modeled on a ball modulo a finite group of symmetries (our own).

**nLab:** [Teichmüller theory](https://ncatlab.org/nlab/show/Teichm%C3%BCller+theory). It says: “Hence the Riemann moduli space is the orbifold quotient of Teichmüller space by the mapping class group of Σ.”

**Sources:** none listed. No primary source with a working link was found.

### A countable base makes Riemann surfaces metrizable

**Remember:** A countable base lets a general metrization theorem supply the distance.

*True by definition.* MSC 30F99 (Riemann surfaces), 54E35. arXiv math.CV, math.GN. Level 3: graduate.

**Definition.** Define a Riemann surface as a connected Hausdorff space with complex coordinate charts and holomorphic changes of coordinates. In one convention its topology must have a countable base, a countable list of open sets whose unions give all open sets. The other convention leaves out that requirement.

**Problem.** Every Riemann surface is metrizable. This means its open sets can be obtained from a distance function.

**How the definition helps.** The countable-base convention lets us apply Urysohn’s metrization theorem directly. The charts make the space locally compact Hausdorff, and so regular (our own argument). Urysohn’s theorem gives a metric for every regular Hausdorff space with a countable base. Without the countability axiom, Radó’s theorem supplies the countable base.

**Wikipedia:** [Radó's theorem (Riemann surfaces)](https://en.wikipedia.org/wiki/Rad%C3%B3%27s_theorem_%28Riemann_surfaces%29). It says: “states that every connected Riemann surface is second-countable (has a countable base for its topology).”

**Paper or page:** [Riemann Surface is Metrizable](https://proofwiki.org/wiki/Riemann_Surface_is_Metrizable). It says: “A Riemann surface is metrizable.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform separation prevents incompatible interpolation

**Remember:** Discrete points can still be too close for bounded interpolation.

*Rules out counterexamples.* MSC 30H05 (Spaces of bounded analytic functions of one complex variable). arXiv math.CV. Level 3: graduate.

**Definition.** At each point of a disk sequence, multiply its pseudohyperbolic distances to all the other points. This distance is the modulus of the disk automorphism that sends one of the two points to zero, evaluated at the other. Uniform separation requires a positive lower bound on the products. It is stronger than having no accumulation point inside the disk.

**Problem.** A sequence in the disk interpolates all bounded data by bounded holomorphic functions exactly when it is uniformly separated.

**How the definition helps.** The product bound keeps every pair far enough apart for bounded holomorphic functions to tell them apart (our own). For n ≥ 2, pair 1 − 2⁻ⁿ with 1 − 2⁻ⁿ + 4⁻ⁿ; their pseudohyperbolic distances tend to zero (our own). Data equal to 0 on the first point and 1 on the second of each pair have no bounded interpolant, by the Schwarz–Pick lemma (our own). Carleson’s interpolation theorem proves that the product bound suffices.

**Paper or page:** [Random Interpolating Sequences in the Polydisc and the Unit Ball](https://arxiv.org/abs/2012.05381v4). It says: “A sequence Z in 𝔻 is uniformly separated if and only if it is weakly separated and the measure μ<sub>Z</sub> := ∑ₙ∈ℕ (1 − \|zₙ\|²) δ<sub>z</sub>ₙ is a Carleson measure for H²(𝔻).”

**Sources:**

- [Lennart Carleson, An Interpolation Problem for Bounded Analytic Functions](https://doi.org/10.2307/2372840)

### Boundary modulus determines outer functions

**Remember:** The boundary modulus fixes the outer factor up to a constant phase.

*Rules out counterexamples.* MSC 30H10 (Hardy spaces). arXiv math.CV. Level 3: graduate.

**Definition.** Choose a positive boundary modulus whose logarithm is integrable on the unit circle. Its Poisson integral is the harmonic extension obtained by averaging those logarithms with the disk’s Poisson kernel. An outer function is the exponential of a holomorphic function with that real part.

**Problem.** Two outer functions on the disk with equal boundary modulus almost everywhere differ by a constant of modulus one. The statement fails for zero-free bounded holomorphic functions in general.

**How the definition helps.** Prescribing the real part fixes its holomorphic completion up to a purely imaginary constant (our own). Exponentiating leaves only a constant factor of modulus one (our own). The zero-free function exp(−(1 + z)/(1 − z)) has boundary modulus one almost everywhere (our own). The fraction in the exponent is purely imaginary on the circle except at 1 (our own). It is nonconstant, so absence of zeros alone cannot give uniqueness (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “some positive measurable function φ on the unit circle such that log(φ) is integrable on the circle”

**Sources:** none listed. No primary source with a working link was found.

### Disk covers test Hardy membership

**Remember:** A harmonic upper bound survives a lift.

*True by definition. Confidence: medium.* MSC 30H10 (Hardy spaces). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic disk function belongs to the Hardy space at exponent p &gt; 0 if the circular means of \|f\|ᵖ are bounded. Equivalently, \|f\|ᵖ has a harmonic majorant, a harmonic function that bounds it from above.

**Problem.** Let π map the disk onto a plane domain as a holomorphic covering, meaning it has separate inverse branches over each small neighborhood. At fixed p &gt; 0, every holomorphic disk map into that domain belongs to the Hardy space exactly when π does.

**How the definition helps.** A harmonic upper bound for \|π\|ᵖ gives one for every test map by composition (our own). Each test map lifts to a holomorphic disk map because the disk is simply connected, and composing the bound with this lift keeps it harmonic (our own). Conversely, π itself is a test map (our own). The Poisson integral gives the equivalence with bounded circular means (our own).

**Paper or page:** [The Hardy number and the Bergman number of a planar domain are equal](https://arxiv.org/abs/2409.09150v2). It says: “Let D ⊂ ℂ be a hyperbolic domain with universal covering map f<sub>D</sub> : 𝔻 → D. Then, for all α &gt; −1, h(D) = h(f<sub>D</sub>)”

**Sources:**

- [Dimitrios Betsakos, Francisco J. Cruz-Zamorano, The Hardy number and the Bergman number of a planar domain are equal (2024)](https://arxiv.org/abs/2409.09150v2)

### Inner factors preserve Hardy norms

**Remember:** An inner factor changes boundary phase but not boundary size.

*True by definition.* MSC 30H10 (Hardy spaces). arXiv math.CV. Level 3: graduate.

**Definition.** For 1 ≤ p &lt; ∞, the Hardy space consists of holomorphic disk functions with bounded circular means of \|f\|ᵖ. Its norm is the pth root of the supremum of those means. An inner function is bounded and holomorphic on the disk, and its radial boundary values have modulus one almost everywhere.

**Problem.** Multiplying by any inner function preserves every Hardy norm with 1 ≤ p &lt; ∞.

**How the definition helps.** In the boundary formula for the norm, multiplication by an inner function leaves the integrand unchanged almost everywhere (our own). The product still belongs to the space because its inner factor is bounded (our own). The boundary-value theorem identifies the circular norm with the pth root of the boundary mean of \|f\|ᵖ (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “exists for almost all θ and its modulus is equal to 1 a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Modulus fixes normalized outer functions

**Remember:** An outer function has no hidden inner factor.

*Rules out counterexamples.* MSC 30H10 (Hardy spaces), 30J05. arXiv math.CV. Level 3: graduate.

**Definition.** Start with a positive boundary function whose logarithm is integrable on the unit circle. Its Poisson extension is the harmonic function obtained by averaging that logarithm against the disk’s Poisson kernel. Choose the holomorphic function with this real part and imaginary part zero at the center. Its exponential, times any constant of modulus one, is an outer function.

**Problem.** Two outer functions with the same radial boundary modulus almost everywhere differ only by a constant of modulus one. If both are positive at zero, they agree.

**How the definition helps.** The boundary modulus determines the real part in the exponential formula (our own). The Poisson boundary theorem identifies the radial limit of that real part with the prescribed logarithm almost everywhere (our own). The normalization at zero then fixes its harmonic conjugate, the imaginary part of the holomorphic function (our own). Without outerness, 1 and z have equal boundary modulus but differ inside the disk (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “for some complex number c with \|c\| = 1, and some positive measurable function φ on the unit circle such that log(φ) is integrable on the circle.”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative modes bound Hardy evaluation

**Remember:** Point evaluation pairs the coefficients with a geometric sequence.

*True by definition.* MSC 30H10 (Hardy spaces), 42A16. arXiv math.CV, math.CA. Level 3: graduate.

**Definition.** Use circle measure with total mass one. The boundary Hardy space H² consists of square-integrable functions whose negative Fourier coefficients vanish. Its interior description uses analytic functions on the disk whose mean squared magnitude stays bounded on circles centered at zero.

**Problem.** For \|z\| &lt; 1, evaluation at z on the interior function has operator norm 1/√(1 − \|z\|²).

**How the definition helps.** The boundary coefficients turn evaluation into a sum of coefficients times successive powers of z (our own). Parseval identifies the function norm with the square-sum norm of its coefficients (our own). Cauchy–Schwarz bounds evaluation by the norm of the geometric sequence (our own). Choosing the coefficients as successive powers of the complex conjugate of z attains equality (our own). The Hardy boundary theorem identifies the two descriptions of the space (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “the associated holomorphic function f of Hᵖ is given by f(z)=∑ₙ₌₀∞ aₙ zⁿ, \|z\| &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### Inner multipliers preserve Hardy norms

**Remember:** Unit boundary modulus leaves the Hardy norm alone.

*Rules out counterexamples.* MSC 30J05 (Inner functions of one complex variable), 30H10. arXiv math.CV. Level 3: graduate.

**Definition.** An inner function is bounded and holomorphic on the unit disk, and its limits along radii have modulus one almost everywhere on the circle. The Hardy space H² consists of holomorphic disk functions whose mean squared modulus stays bounded on circles centered at zero. Its norm is the square root of the supremum of these means.

**Problem.** Multiplication by an inner function preserves the H² norm.

**How the definition helps.** The boundary norm is an integral of squared modulus, and an inner multiplier leaves its integrand unchanged (our own). A bounded multiplier such as the constant 1/2 instead halves the norm (our own). The work lies in the Hardy boundary theorem, which identifies the radial norm with the square-integrable boundary norm (our own).

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “and its modulus is equal to 1 a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Disk quotients lower Blaschke degree

**Remember:** Move the value to zero and cancel one factor.

*True by definition.* MSC 30J10 (Blaschke products), 30C80. arXiv math.CV. Level 3: graduate.

**Definition.** Write M(a,z) = (z − a)/(1 − āz) for the disk map taking a to zero. Given a holomorphic disk map f and a disk point w, put b = f(w). Its hyperbolic difference quotient at w is M(b,f(z))/M(w,z), with the limiting value at w.

**Problem.** A finite Blaschke product of degree d is a product of d factors of the form M(a,z) and a constant of modulus one. For d ≥ 1, its hyperbolic difference quotient is a finite Blaschke product of degree d − 1.

**How the definition helps.** The numerator has a zero at w, so dividing removes one factor (our own). The ordinary difference f(z) − f(w) need not preserve unit modulus on the circle (our own). Abate’s theorem shows that composing f with the disk map taking f(w) to zero preserves its degree. The product formula then removes precisely the factor M(w,z) (our own).

**Paper or page:** [Multipoint Julia theorems](https://arxiv.org/abs/2101.03559v1). It says: “then B ∘ γ and γ ∘ B are still Blaschke products of the same degree d.”

**Sources:** none listed. No primary source with a working link was found.

### Normalized Blaschke products converge

**Remember:** Fix the phase at zero before multiplying infinitely many factors.

*Rules out counterexamples.* MSC 30J10 (Blaschke products). arXiv math.CV. Level 3: graduate.

**Definition.** For a nonzero point a in the unit disk, set bₐ(z) = (\|a\|/a)(a − z)/(1 − āz). This factor has its zero at a and satisfies bₐ(0) = \|a\|. This positive value fixes the choice of phase.

**Problem.** Take a sequence of nonzero disk points a for which the sum of 1 − \|a\| is finite. The product of their factors converges uniformly on compact subsets. Its zeros are exactly the listed points, counted with repetition.

**How the definition helps.** The normalization bounds each factor’s deviation from one by a disk-dependent constant times 1 − \|a\| on every smaller disk (our own). The infinite-product convergence theorem gives a holomorphic limit with no extra zeros (our own). Choosing the negative of every normalized factor can make the partial products alternate in sign even at the center (our own).

**Wikipedia:** [Blaschke product](https://en.wikipedia.org/wiki/Blaschke_product). It says: “The Blaschke product B(z) defines a function analytic in the open unit disc and vanishing exactly at the points aₙ, with multiplicity counted.”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint prime blocks factor moments

**Remember:** Separate prime sets make each product split in just one way.

*Rules out counterexamples.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable). arXiv math.NT. Level 4: research.

**Definition.** A Dirichlet polynomial has the form A(s) = ∑ a(n) exp(−s log n), with finitely many positive integer indices. Give each of finitely many factors Aⱼ a disjoint set of primes. Allow an index only when all its prime divisors belong to that factor’s set.

**Problem.** Write M(A) for the average of \|A(½+it)\|² over T ≤ t ≤ 2T. Suppose the product has no index above N and N/T tends to zero. Then M(∏ Aⱼ) = (1 + O(N/T))∏ M(Aⱼ) for a fixed number of factors.

**How the definition helps.** Each product index splits uniquely among the disjoint prime sets, so the sum of squared coefficients factors exactly. The Dirichlet polynomial mean value theorem transfers this identity to time averages with the stated error. Our own counterexample uses two copies of 1 + exp(−s log 2)√2. On the stated line, their separate mean squares tend to 2, while their product has limiting mean square 6.

**Paper or page:** [Freezing transition and moments of moments of the Riemann zeta function](https://arxiv.org/abs/2301.10634). It says: “such that aⱼ(n) vanishes unless n is composed of primes in Iⱼ.”

**Sources:**

- [Michael J. Curran, Freezing transition and moments of moments of the Riemann zeta function](https://arxiv.org/abs/2301.10634)

### Hardy spaces of Dirichlet series do not depend on the chosen group

**Remember:** Lift a Dirichlet series to a group, and any good group will do.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 30B50 (Dirichlet series, exponential series and other series in one complex variable), 42B30, 43A25. arXiv math.FA, math.CV. Level 4: research.

**Definition.** A general Dirichlet series is a sum of aₙ e to the power −λₙs, for an increasing sequence of frequencies λₙ. A λ-Dirichlet group is a compact abelian group G with a continuous homomorphism from ℝ into G with dense image. Each map t ↦ e to the power −iλₙt must extend through it to a character of G. The space ℋₚ(λ) consists of the Dirichlet series whose coefficients are the Fourier coefficients of a function in Lᵖ(G) with spectrum in the frequencies.

**Problem.** For a frequency sequence λ, the space ℋₚ(λ) is the same for every λ-Dirichlet group G. For ordinary Dirichlet series, with λₙ = log n, the infinite torus is such a group, so ℋₚ equals the Hardy space of the infinite torus isometrically.

**How the definition helps.** Defining the norm on a compact group, instead of on vertical lines in the complex plane, turns Dirichlet series into Fourier series on a group. Then tools of harmonic analysis apply, and the independence theorem says that the definition is sound. For ordinary Dirichlet series this is Bohr's idea of writing n⁻ˢ as a monomial in the variables p⁻ˢ, one for each prime p (our own remark).

**Paper or page:** [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1), [Hardy spaces of general Dirichlet series - a survey](https://arxiv.org/abs/1902.02073v1). It says: “ℋₚ(λ) is independent of the chosen λ-Dirichlet group G.”

**Sources:**

- [Andreas Defant, Ingo Schoolmann, Hardy spaces of general Dirichlet series - a survey, arXiv:1902.02073 (2019), Banach Center Publ. 119 (2019) 123–149](https://arxiv.org/abs/1902.02073v1)

### Beltrami disks interpolate quasiconformal maps

**Remember:** A straight line of coefficients gives a holomorphic path of maps.

*Makes the theorem clean to state or prove.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 4: research.

**Definition.** A quasiconformal map here is an orientation-preserving sphere homeomorphism with bounded distortion of infinitesimal circles into ellipses. Normalize it to fix 0, 1 and ∞. In plane coordinates its weak derivative, defined by integration by parts, has the form v ↦ av + bv̄ almost everywhere. Its Beltrami coefficient μ = b/a has modulus bounded almost everywhere by some constant less than one.

**Problem.** Let k &gt; 0 be the smallest almost-everywhere bound on \|μ\|. The map occurs at parameter k in a family of injections indexed by the unit disk, starting with the identity at zero. Each point moves holomorphically with the parameter, a property called holomorphic motion.

**How the definition helps.** Coefficients allow interpolation along the explicit straight line λμ/k (our own). For \|λ\| &lt; 1 the coefficient has modulus bounded by \|λ\| almost everywhere (our own). The measurable Riemann mapping theorem supplies a unique normalized solution at every parameter (our own). Holomorphic dependence of these solutions gives the motion, and uniqueness identifies the maps at zero and k (our own).

**Paper or page:** [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2). It says: “If F: ℂ → ℂ is a k-quasiconformal homeomorphism, then there exists a holomorphic motion f: 𝔻 × ℂ → ℂ such that fₖ = F.”

**Sources:**

- [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2)

### Infima preserve Harnack bounds

**Remember:** A common Harnack bound survives taking the infimum.

*Makes the theorem clean to state or prove.* MSC 30C62 (Quasiconformal mappings in the complex plane). arXiv math.CV. Level 4: research.

**Definition.** An inf-harmonic function is the pointwise infimum of a nonempty family of positive harmonic functions. A holomorphic motion starts at the identity, moves each point holomorphically with a disk parameter λ, and keeps distinct points distinct.

**Problem.** Move a bounded plane set of positive diameter by a holomorphic motion, and denote its diameter at λ by d(λ). Fix 0 &lt; ρ &lt; 1 and choose M strictly above all diameters for \|λ\| &lt; ρ. Then h(λ) = log(M/d(λ)) lies between h(0)/C and C h(0), where C = (ρ + \|λ\|)/(ρ − \|λ\|).

**How the definition helps.** The infimum description transfers one harmonic estimate to a diameter even though that diameter need not be harmonic (our own). For each distinct moving pair, log(M/distance) is positive and harmonic because the difference is holomorphic and never zero (our own). Harnack’s inequality bounds each function at λ by its value at zero times factors 1/C and C (our own). Taking infima preserves both inequalities because C is independent of the pair (our own). Joint continuity on compact sets supplies a finite uniform diameter bound (our own).

**Paper or page:** [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2). It says: “the map λ ↦ log(M/diam fλ(S)) is an inf-harmonic function on D(0,ρ).”

**Sources:**

- [Holomorphic motions, dimension, area and quasiconformal mappings](https://arxiv.org/abs/2302.07743v2)

### Disk differences let Schwarz–Pick iterate

**Remember:** Move both base points to zero before taking the quotient.

*True by definition.* MSC 30C80 (Maximum principle, Schwarz's lemma, Lindelöf principle, analogues and generalizations; subordination). arXiv math.CV. Level 4: research.

**Definition.** For a disk point a, write Tₐ(z) = (z − a)/(1 − āz), the disk automorphism sending a to zero. For a holomorphic disk map f, its hyperbolic difference at v is the quotient Tₐ(f(z))/Tᵥ(z), with a = f(v). Fill in its value at v by continuity. Ordinary divided differences use subtraction in place of these disk automorphisms.

**Problem.** Suppose f maps the disk holomorphically into itself and is not a bijection. Its hyperbolic difference at any v never increases hyperbolic distance, the disk distance with length element 2\|dz\|/(1 − \|z\|²).

**How the definition helps.** Schwarz's lemma makes the normalized quotient at most one in modulus (our own). The strict case puts it inside the disk, so Schwarz–Pick applies again without new estimates (our own). The work stays in the ordinary Schwarz and Schwarz–Pick lemmas and in the removable singularity at the base point (our own).

**Paper or page:** [Multipoint Julia theorems](https://arxiv.org/abs/2101.03559v1). It says: “Then ω(f\*(z,v),f\*(w,v)) ≤ ω(z,w) for all z, v, w ∈ 𝔻.”

**Sources:**

- [Marco Abate, Multipoint Julia theorems (2021)](https://arxiv.org/abs/2101.03559v1)

### Analytic capacity zero means removable for bounded holomorphic functions

**Remember:** Ahlfors defined the capacity so that zero capacity means removable.

*True by definition.* MSC 30C85 (Capacity and harmonic measure in the complex plane), 30H05. arXiv math.CV. Level 4: research.

**Definition.** For a compact set K in the plane, consider holomorphic f on the complement of K with \|f\| ≤ 1 and f(∞) = 0. Let f′(∞) be the limit of z f(z) as z → ∞. The analytic capacity γ(K) is the supremum of \|f′(∞)\| over all such f. A set K is removable if every bounded holomorphic function on Ω minus K extends holomorphically to Ω, for every open Ω containing K.

**Problem.** A compact set K in the plane is removable for bounded holomorphic functions exactly when its analytic capacity γ(K) is zero.

**How the definition helps.** The capacity measures the largest normalized bounded function that lives outside K, so it is zero exactly when no such nonconstant function exists. That equivalence is easy. The work moves into a geometric description of the sets of zero capacity, which is Painlevé's problem. Zero length implies zero capacity, but Vitushkin and Garnett gave sets of positive length with zero capacity.

**Wikipedia:** [Analytic capacity](https://en.wikipedia.org/wiki/Analytic_capacity). It says: “It is easy to see that K is removable if and only if γ(K) = 0. However, analytic capacity is a purely complex-analytic concept, and much more work needs to be done in order to obtain a more geometric characterization.”

**Sources:**

- [L. Ahlfors, Bounded analytic functions, Duke Mathematical Journal 14 (1947)](https://doi.org/10.1215/S0012-7094-47-01401-4)
- [X. Tolsa, Painlevé's problem and the semiadditivity of analytic capacity, Acta Mathematica 190 (2003)](https://doi.org/10.1007/BF02393237)

### Translation coordinates make centralizers commutative

**Remember:** Two translations commute even if their disk formulas look unrelated.

*True by definition.* MSC 30D05 (Functional equations in the complex plane, iteration and composition of analytic functions of one complex variable), 37F50. arXiv math.CV, math.DS. Level 4: research.

**Definition.** Let φ be an injective holomorphic disk map without an interior fixed point. Its centralizer consists of the injective holomorphic disk maps commuting with φ. A Koenigs coordinate h is an injective holomorphic change of variable that turns φ into translation by one. Thus h(φ(z)) = h(z) + 1.

**Problem.** Suppose φ has attracting boundary point τ and let λ be the limit of (1 − \|φ(rτ)\|)/(1 − r) as r increases to one. Assume λ &lt; 1, or assume λ = 1 and successive iterates of a point approach each other in the disk’s hyperbolic distance. Then any two members of the centralizer commute.

**How the definition helps.** In the common coordinate, the two compositions add the same translation constants in opposite orders (our own). The work lies in proving that every commuting injective map acts by translation in that coordinate (our own). The hyperbolic distance here measures path length with weight 2/(1 − \|z\|²), taking the infimum over joining paths (our own).

**Paper or page:** [Centralizers of non-elliptic univalent self-maps and the embeddability problem in the unit disc](https://arxiv.org/abs/2311.04134v3). It says: “In particular, the centralizer 𝒵(φ) is abelian.”

**Sources:**

- [Centralizers of non-elliptic univalent self-maps and the embeddability problem in the unit disc, Proposition 4.3](https://arxiv.org/abs/2311.04134v3)

### Pants-gluing hyperbolic structures make Teichmüller space work for infinite-type surfaces

**Remember:** Only pants, no funnels, and big surfaces get a Teichmüller space.

*Rules out counterexamples. Confidence: medium.* MSC 30F60 (Teichmüller theory for Riemann surfaces), 57K20. arXiv math.GT, math.CV. Level 4: research.

**Definition.** A complete hyperbolic surface is Nielsen-convex when it equals its convex core, the smallest convex subsurface that holds all closed geodesics. This holds exactly when the surface is glued from hyperbolic pairs of pants, possibly with cusps. So the surface has no funnels or half-planes.

**Problem.** The space of marked Nielsen-convex hyperbolic structures on a surface has a topology in which the mapping class group acts by homeomorphisms, also for surfaces of infinite type. For finite-type surfaces, this space is the usual Teichmüller space.

**How the definition helps.** A complete hyperbolic structure can have funnels, which add extra parameters and make the space too big (our own example). Asking for Nielsen-convex structures excludes funnels and half-planes, so each structure is glued from pairs of pants. On finite-type surfaces the topology then agrees with that of Teichmüller space. What stays hard is the choice of topology for infinite-type surfaces.

**Paper or page:** [A Moduli Space of Marked Hyperbolic Structures for Big Surfaces](https://arxiv.org/abs/2311.01551), [A Moduli Space of Marked Hyperbolic Structures for Big Surfaces](https://arxiv.org/abs/2311.01551). It says: “We define a topology on the marked moduli space and prove that it reduces to the usual Teichmüller space for finite type surfaces.”

**Sources:**

- [C. Tappu, A Moduli Space of Marked Hyperbolic Structures for Big Surfaces, arXiv:2311.01551 (2023)](https://arxiv.org/abs/2311.01551)

### Linear local connectivity is exactly what quasisymmetric spheres need

**Remember:** No narrow necks at any scale makes a regular sphere round.

*Makes the theorem clean to state or prove.* MSC 30L10 (Quasiconformal mappings in metric spaces), 54F65. arXiv math.CV, math.MG. Level 4: research.

**Definition.** A metric space is linearly locally connected (LLC) with constant λ when two conditions hold for every ball B(a, r). Any two points in the ball can be joined by a connected set inside B(a, λr). Any two points outside the ball can be joined by a connected set outside B(a, r/λ). Ahlfors 2-regular means that balls of radius r have area between c·r² and C·r².

**Problem.** An Ahlfors 2-regular metric 2-sphere is quasisymmetrically equivalent to the round sphere exactly when it is linearly locally connected (Bonk and Kleiner). A quasisymmetric map distorts the ratios of distances from a point only by a controlled amount.

**How the definition helps.** The round sphere is LLC, and a quasisymmetric map keeps the LLC property with a changed constant, so the condition is necessary (our own). The theorem says that, once area is regular, no other condition is needed. So the definition collects exactly the connectivity that a quasisymmetric map preserves (our own reading). The hard direction builds the map from the space.

**Paper or page:** [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1). It says: “Let X be a metric 2-sphere that is Ahlfors 2-regular. Then there exists a quasisymmetric homeomorphism f: Ĉ → X if and only if X is LLC. The statement is quantitative.”

**Sources:**

- [Dimitrios Ntalampekos, Uniformization of metric surfaces: A survey, arXiv:2505.02697 (2025)](https://arxiv.org/abs/2505.02697v1)
- [Bonk, Kleiner, Quasisymmetric parametrizations of two-dimensional metric spheres, Inventiones mathematicae 150 (2002), 127–183](https://doi.org/10.1007/s00222-002-0233-z)

### Local reciprocality is exactly the condition for quasiconformal uniformization

**Remember:** The plane has modulus product one; ask only that it stays bounded.

*Makes the theorem clean to state or prove.* MSC 30L10 (Quasiconformal mappings in metric spaces), 30F10. arXiv math.CV, math.MG. Level 4: research.

**Definition.** A metric surface is a metric space that is locally like the plane. Take one with locally finite area, meaning two-dimensional Hausdorff measure. For a quadrilateral, let M₁ and M₂ be the conformal moduli of the curves that join its two pairs of opposite sides. By Theorem 28, a surface without boundary is reciprocal exactly when M₁·M₂ ≤ κ for all quadrilaterals; in the plane, M₁·M₂ = 1.

**Problem.** A metric surface with locally finite area admits a quasiconformal map from a complete Riemannian surface of constant curvature exactly when it is locally reciprocal. For simply connected surfaces without boundary, the model is the sphere, the plane or the disc (Rajala's theorem).

**How the definition helps.** A quasiconformal map changes the modulus of a curve family by at most a fixed factor. So a quasiconformal image of a Riemannian surface must have locally bounded modulus products, and the condition is necessary (our own). The theorem says that this necessary condition, in its local form, is also sufficient. The hard direction builds the map; Rajala did this first for metric spheres.

**Paper or page:** [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1), [Uniformization of metric surfaces: A survey](https://arxiv.org/abs/2505.02697v1). It says: “Then there exists a complete Riemannian surface (Z,g) of constant curvature that is homeomorphic to X and a quasiconformal map f: Z → X if and only if X is locally reciprocal.”

**Sources:**

- [Dimitrios Ntalampekos, Uniformization of metric surfaces: A survey, arXiv:2505.02697 (2025)](https://arxiv.org/abs/2505.02697v1)
- [Rajala, Uniformization of two-dimensional metric surfaces, Inventiones mathematicae 207 (2016), 1301–1375](https://doi.org/10.1007/s00222-016-0686-0)

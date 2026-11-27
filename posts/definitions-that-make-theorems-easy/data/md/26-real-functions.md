### Counting single points as intervals gives the intermediate value theorem without exceptions

**Remember:** An interval has no gaps, even if it is one point.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** An interval is a set of real numbers that contains every number lying between any two of its elements. Under this definition the empty set, single points and the whole real line are intervals.

**Problem.** The image of an interval under a continuous function is an interval.

**How the definition helps.** With the gap-free definition, the image of a constant function, a single point, is still an interval, so the theorem has no exceptions. The usual form, that a continuous f on \[a, b\] takes every value between f(a) and f(b), is the same statement (our own). The work moves into the theorem that intervals are exactly the connected subsets of the real line. That theorem uses the least upper bound property. The intervals are also exactly the convex subsets of the real line.

**Wikipedia:** [Interval (mathematics)](https://en.wikipedia.org/wiki/Interval_%28mathematics%29). It says: “The intervals are precisely the connected subsets of ℝ. It follows that the image of an interval by any continuous function from ℝ to ℝ is also an interval. This is one formulation of the intermediate value theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Lim sup and lim inf always exist, so convergence means they agree

**Remember:** The upper and lower limits always exist; a limit exists when they meet.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 40A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The limit superior of a sequence is the limit of the suprema of its tails. The limit inferior is the limit of the infima of its tails. The tails' suprema decrease and the infima increase, so both limits exist in the extended reals.

**Problem.** A sequence of extended reals converges exactly when its lim inf equals its lim sup. Theorems such as Fatou's lemma can be stated for sequences that need not converge.

**How the definition helps.** The tails give monotone sequences, which always have limits in the extended reals, so lim sup and lim inf need no hypothesis. A theorem about limits can then be stated for any sequence with lim sup or lim inf in place of lim. Fatou's lemma says ∫ lim inf fₙ ≤ lim inf ∫ fₙ for non-negative fₙ (our own). The root test and the Cauchy–Hadamard formula use lim sup in the same way (our own). The inequalities for sums, such as lim sup (aₙ + bₙ) ≤ lim sup aₙ + lim sup bₙ, need care with ∞ − ∞.

**Wikipedia:** [Limit inferior and limit superior](https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior). It says: “If the terms in the sequence are real numbers, the limit superior and limit inferior always exist, as the real numbers together with ±∞ (i.e. the extended real number line) are complete.”

**Sources:** none listed. No primary source with a working link was found.

### Tail bounds make limit superiors subadditive

**Remember:** The upper bound for a sum comes from adding the two tail bounds.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 40A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The limit superior of a bounded real sequence is the limit of the least upper bounds of its tails. A tail consists of all terms from a given index onward. Another definition takes the largest limit of any convergent subsequence.

**Problem.** For bounded real sequences, the limit superior of their sum cannot exceed the sum of their limit superiors.

**How the definition helps.** On every tail, the sum of the two least upper bounds bounds the summed sequence (our own). Taking limits of the tail bounds gives the inequality (our own). The work moves to proving that the tail bounds converge to the largest subsequential limit (our own).

**Wikipedia:** [Limit inferior and limit superior](https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior). It says: “lim supₙ→∞ (aₙ + bₙ) ≤ lim supₙ→∞ aₙ + lim supₙ→∞ bₙ.”

**Sources:** none listed. No primary source with a working link was found.

### The betweenness definition makes intersections of real intervals intervals

**Remember:** A point between two shared points is shared.

*True by definition. Confidence: medium.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 54F05. arXiv math.CA, math.GN. Level 1: early undergraduate.

**Definition.** A set of real numbers is an interval if it contains every real number between any two of its points. The empty set counts as an interval here. An alternative lists endpoint forms such as (a, b), \[a, b), \[a, ∞) and ℝ, along with singletons and the empty set.

**Problem.** The intersection of any family of real intervals is an interval.

**How the definition helps.** The betweenness definition lets us test the intersection without finding its endpoints. If two points belong to every interval in the family, so does every point between them. This proof is our own. Starting from endpoint forms instead, one must determine bounds and decide whether the endpoints belong to the intersection. The cited equivalence moves the work to describing a single interval by its bounds, using the least upper bound property of ℝ.

**Paper or page:** [Equivalence of Definitions of Real Interval](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Interval). It says: “To prove the other direction, we distinguish according to if the subset is bounded on the left or on the right, and use the Continuum Property.”

**Sources:** none listed. No primary source with a working link was found.

### Using lim sup gives a radius of convergence for every power series

**Remember:** The lim sup always exists, so the formula always applies.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 30B10. arXiv math.CA, math.CV. Level 1: early undergraduate.

**Definition.** The limit superior (lim sup) of a sequence is the limit of the suprema of its tails. A tail is the part of the sequence from some term on. In the extended real numbers the lim sup always exists. For non-negative values, the rules 1/0 = +∞ and 1/(+∞) = 0 apply.

**Problem.** The radius of convergence R of a power series Σcₙ(z − a)ⁿ is given by 1/R = lim sup ⁿ√\|cₙ\|. In words, 1/R is the largest limit point of the nth roots of the sizes of the coefficients.

**How the definition helps.** The lim sup always exists, so the formula has no exceptions. The ordinary limit of ⁿ√\|cₙ\| need not exist, for example when every odd coefficient is 0 (our own example). So a formula with an ordinary limit would have exceptions. With 1/0 = +∞, the same formula also covers series that converge everywhere (R = ∞) and series that converge only at the centre (R = 0). Cauchy published the result in 1821. Hadamard found it again in 1888 and put it in his 1892 thesis. The formula says nothing about convergence on the circle \|z − a\| = R, which stays a separate question (our own remark).

**Wikipedia:** [Cauchy–Hadamard theorem](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Hadamard_theorem), [Extended real number line](https://en.wikipedia.org/wiki/Extended_real_number_line). It says: “Thus, if one allows 1/0 to take the value +∞, then one can use this formula regardless of whether the limit-supremum is 0 or not.”

**Sources:**

- [J. Hadamard, Essai sur l'étude des fonctions données par leur développement de Taylor, J. Math. Pures Appl. (4) 8 (1892)](https://archive.org/details/essaisurltuded00hadauoft)

### With Dedekind cuts, the least upper bound is a union

**Remember:** With cuts, the supremum is just the union.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real number is a Dedekind cut. A cut is a set of rational numbers that is non-empty, not all of ℚ, closed downward and without a greatest element. Closed downward means that if a rational number is in the set, every smaller rational number is too. One real number is at most another when it is a subset of the other.

**Problem.** Prove the least-upper-bound property: every non-empty set of real numbers with an upper bound has a least upper bound.

**How the definition helps.** When real numbers are cuts ordered by inclusion, the least upper bound of a set is simply its union. The rational numbers lack this property: the set of rationals x with x² &lt; 2 has upper bounds but no least one. Let S be a non-empty set of cuts with an upper bound. Its least upper bound is the union ⋃S, and a check of a few lines shows that this union is a cut. The intermediate value theorem and the Bolzano–Weierstrass theorem follow from this property. In this construction the arithmetic stays hard, especially multiplication. Even the proof that the cut for √2 squares to 2 is not immediate.

**Wikipedia:** [Construction of the real numbers](https://en.wikipedia.org/wiki/Construction_of_the_real_numbers), [Least-upper-bound property](https://en.wikipedia.org/wiki/Least-upper-bound_property). It says: “If a nonempty set S of real numbers has any upper bound in R, then it has a least upper bound in R that is equal to ⋃S.”

**Sources:** none listed. No primary source with a working link was found.

### A symmetric restriction makes arcsine odd

**Remember:** The principal interval contains the negative of every angle it contains.

*Rules out counterexamples.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define arcsine as the inverse of sine restricted to \[−π/2, π/2\]. The unrestricted equation sin y = x can give several values of y.

**Problem.** Arcsine is a function on \[−1, 1\] and satisfies arcsin(−x) = −arcsin(x).

**How the definition helps.** The chosen interval contains −y whenever it contains y, and sin(−y) = −sin y (our own). Sine takes each value in \[−1, 1\] exactly once on this interval, so the inverse is odd (our own). On the alternative interval \[π/2, 3π/2\], the inverse sends zero to π and therefore cannot be odd (our own).

**Wikipedia:** [Inverse trigonometric functions](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions). It says: “Since none of the six trigonometric functions are one-to-one, they must be restricted in order to have inverse functions.”

**Paper or page:** [Inverse Sine is Odd Function](https://proofwiki.org/wiki/Inverse_Sine_is_Odd_Function). It says: “arcsin(−x) = −arcsin x”

**Sources:** none listed. No primary source with a working link was found.

### Allowing real powers only for positive bases keeps the exponent laws

**Remember:** Keep the base positive, and (bʳ)ˢ = bʳˢ always.

*Rules out counterexamples.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For b &gt; 0 and any real x, the power bˣ is exp(x ln b), or equivalently the continuous extension of the rational powers. For a negative base, real powers are left undefined, or treated as multivalued.

**Problem.** Let the bases b and c be positive. Then (bʳ)ˢ = bʳˢ, bʳbˢ = bʳ⁺ˢ and (bc)ʳ = bʳcʳ for all real r and s.

**How the definition helps.** Restricting to positive bases makes every power a positive real number with one value, so the identities pass from rational to real exponents. A negative base breaks them. For example, the square root of (−1)² is 1, but (−1) to the power 2 · ½ is −1. The page says that no choice of principal value for negative bases keeps (bʳ)ˢ = bʳˢ. For integer exponents, the identities stay valid for every nonzero base. What stays to prove is that the two definitions, by continuity and by logarithm, agree.

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “exponentiation to a real power of a negative real number is much more difficult to define consistently, as it may be non-real and have several values.”

**Sources:** none listed. No primary source with a working link was found.

### As a power series, exp carries its derivative and addition laws

**Remember:** Differentiate the series term by term, and exp comes back.

*True by definition.* MSC 26A09 (Elementary functions), 33B10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define exp(x) as the sum of xⁿ/n! over all n ≥ 0. The ratio test shows that the series converges for every real or complex x.

**Problem.** The exponential function satisfies exp′ = exp, exp(0) = 1 and exp(x+y) = exp(x)exp(y).

**How the definition helps.** With the series definition, each property is a direct calculation on coefficients. Term-by-term differentiation shifts the index by one and gives the same series back. The addition law is the Cauchy product of two series, and its coefficients are the binomial theorem. The page lists six usual definitions. Each makes a different property easy, so the work moves into the proofs that they agree (our own). Term-by-term differentiation and multiplication still need the theory of uniform or absolute convergence of power series.

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “In the sense of definition 2, the equation exp(x+y) = exp(x)exp(y) follows from the term-by-term manipulation of power series justified by uniform convergence, and the resulting equality of coefficients is just the Binomial theorem.”

**Sources:** none listed. No primary source with a working link was found.

### As the area under 1/t, the logarithm turns products into sums

**Remember:** Scaling by y moves the area under 1/t without changing it.

*True by definition.* MSC 26A09 (Elementary functions), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a &gt; 0, the natural logarithm ln a is the integral of 1/t from 1 to a. For a between 0 and 1 the integral is negative.

**Problem.** Show that ln(xy) = ln x + ln y for all positive x and y. Show also that ln′(x) = 1/x, and that ln is a bijection onto the real line.

**How the definition helps.** With the integral definition, the product law is a change of variables. Split the integral from 1 to xy at the point x (our own). The substitution t = xs turns the second part into the integral from 1 to y (our own). The rule ln′(x) = 1/x is the fundamental theorem of calculus. The exponential function is then defined as the inverse of ln, and its rules follow from the rules of ln. Gregoire de Saint-Vincent and Alphonse Antonio de Sarasa first saw that areas under the hyperbola xy = 1 behave like logarithms. What stays hard is that the integral exists, which needs the theory of the Riemann integral of a continuous function.

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm), [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “The simplicity of this definition, which is matched in many other formulas involving the natural logarithm, leads to the term "natural".”

**Sources:**

- [R. P. Burn, Alphonse Antonio de Sarasa and logarithms, Historia Mathematica 28 (2001) 1–17](https://doi.org/10.1006/hmat.2000.2295)

### Defining exp by f(x+y) = f(x)f(y) needs a regularity condition

**Remember:** Without some regularity, f(x+y) = f(x)f(y) has wild solutions.

*Rules out counterexamples.* MSC 26A09 (Elementary functions), 39B22. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The exponential function is the unique f with f(x+y) = f(x)f(y), f(1) = e, and one regularity condition. The condition can be continuity at one point. It can also be monotonicity on some interval, or Lebesgue measurability.

**Problem.** Show that the multiplicative property, f(1) = e and one regularity condition give exactly one function, namely eˣ.

**How the definition helps.** The regularity condition rules out the only solutions that are not eˣ. Those solutions come from a Hamel basis, which is a basis of the real numbers as a vector space over the rationals. Georg Hamel built such additive solutions in 1905, and their exponentials are multiplicative (our own). They need the axiom of choice and are not measurable (our own). Once any regularity condition holds, f is continuous everywhere, and f agrees with eˣ on the rationals, so f equals eˣ. The same story holds for additive functions f(x+y) = f(x) + f(y), whose regular solutions are exactly f(x) = cx.

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function), [Cauchy's functional equation](https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation). It says: “For the uniqueness, one must impose some regularity condition, since other functions satisfying f(x+y)=f(x)f(y) can be constructed using a basis for the real numbers over the rationals, as described by Hewitt and Stromberg.”

**Sources:**

- [Georg Hamel, Eine Basis aller Zahlen und die unstetigen Lösungen der Funktionalgleichung f(x+y) = f(x) + f(y), Mathematische Annalen (1905)](https://doi.org/10.1007/BF01457624)

### Defining ln x as an integral makes its derivative 1/x immediate

**Remember:** Differentiate an area under 1/t, and you get 1/x back.

*True by definition.* MSC 26A09 (Elementary functions), 26A06. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** For x &gt; 0, define ln x = ∫₁ˣ (1/t) dt. Another definition takes ln as the inverse of the real exponential exp.

**Problem.** For x &gt; 0, the derivative of ln x is 1/x.

**How the definition helps.** The integral definition gives the derivative immediately by the fundamental theorem of calculus. That theorem says that differentiating an integral with a variable upper endpoint gives the continuous integrand at that endpoint. With the inverse definition, one instead uses the derivative of exp and the rule for differentiating an inverse. The work moves into the fundamental theorem and showing that this integral is indeed the inverse of exp (our own comparison).

**nLab:** [logarithm](https://ncatlab.org/nlab/show/logarithm). It says: “The real logarithms are handily defined using the Riemann integral of the reciprocal”

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm). It says: “The natural logarithm can be defined as the area under the graph of a rectangular hyperbola with equation y = 1/x between x = 1 and x = a.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ln x as area under 1/t gives rectangle bounds on it

**Remember:** The area under 1/t lies between its two endpoint rectangles.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26D07. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define ln x, for x &gt; 0, as the signed area under 1/t from 1 to x. The signed area is negative when x &lt; 1. Another common definition makes ln the inverse of the exponential function.

**Problem.** For every x &gt; 0, 1 − 1/x ≤ ln x ≤ x − 1.

**How the definition helps.** With the area definition, the bounds only compare an area with two rectangles (our own). For x &gt; 1, 1/t lies between 1/x and 1 on \[1, x\] (our own). So the area lies between (x − 1)/x and x − 1 (our own). For x &lt; 1, the same comparison on \[x, 1\] and a change of sign give the bounds (our own). With the inverse definition, one instead proves exp(y) ≥ 1 + y, for example by convexity (our own). The work moves into the theorem that the area function is the inverse of exp. That proof uses the fundamental theorem of calculus.

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “Here, the natural logarithm function is defined in terms of a definite integral as above.”

**Paper or page:** [Bounds of Natural Logarithm](https://proofwiki.org/wiki/Bounds_of_Natural_Logarithm). It says: “1 − 1/x ≤ ln x ≤ x − 1”

**Sources:** none listed. No primary source with a working link was found.

### Radian measure makes the derivative of sine exactly cosine

**Remember:** Measure angles by arc length, and calculus formulas lose their stray constants.

*Makes the theorem clean to state or prove.* MSC 26A09 (Elementary functions), 97I40. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** The radian measure of an angle is the length of its arc divided by the radius of the circle. The degree measure counts 360 degrees per full turn, so it is 180/π times the radian measure.

**Problem.** If x measures an angle in radians, the derivative of sin x is cos x. If x measures an angle in degrees, the derivative is (π/180) cos x, with cosine also evaluated in degrees.

**How the definition helps.** Radian measure makes angle and arc length agree on the unit circle, so the derivative has no conversion factor. For 0 &lt; h &lt; π/2, a comparison of triangle and sector areas gives sin h ≤ h ≤ tan h. This proves that sin h / h tends to 1 as h tends to 0. Also, (cos h − 1)/h tends to 0 because cos h − 1 = −2 sin²(h/2). The sine addition formula and these two limits give the derivative (our own explanation). Changing to degrees multiplies the derivative by π/180 by the chain rule (our own).

**Wikipedia:** [Radian](https://en.wikipedia.org/wiki/Radian). It says: “For example, the use of radians leads to the simple limit formula lim (h→0) sin h / h = 1, which is the basis of many other identities in mathematics, including d/dx sin x = cos x”

**Sources:** none listed. No primary source with a working link was found.

### Real powers defined by exp and ln obey the power rule

**Remember:** Rewrite each power through exp and ln, and the chain rule does the rest.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26A24. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For b &gt; 0 and real x, define bˣ = exp(x ln b), where ln is the inverse of the real exponential. Another construction takes roots for rational exponents and uses continuity to extend to real exponents.

**Problem.** For x &gt; 0 and every real r, the derivative of xʳ is r xʳ⁻¹. Also, for b &gt; 0, the derivative of bˣ is bˣ ln b.

**How the definition helps.** The exponential definition makes both derivatives direct uses of the chain rule (our own argument). For a fixed r, differentiating exp(r ln x) gives r exp(r ln x)/x = r xʳ⁻¹. For a fixed b, differentiating exp(x ln b) gives exp(x ln b) ln b. Starting with the extension by continuity requires a separate argument for differentiability (our own comparison). The work moves into proving the derivatives of exp and ln and proving that this definition agrees with rational powers and their continuous extension.

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “So, eˣ ˡⁿ ᵇ can be used as an alternative definition of bˣ for any positive real b.”

**Sources:** none listed. No primary source with a working link was found.

### The sine series gives the limit of sin x / x

**Remember:** Divide the sine series by x, and the constant term is 1.

*True by definition.* MSC 26A09 (Elementary functions), 33B10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For real x, define sin x = x − x³/3! + x⁵/5! − ⋯, a power series that converges for every x. The geometric definition takes sin x as the vertical coordinate of a point on the unit circle.

**Problem.** sin x / x → 1 as x → 0.

**How the definition helps.** Dividing the sine series by x leaves a power series with constant term 1. For x ≠ 0, it gives sin x / x = 1 − x²/3! + x⁴/5! − ⋯. Power series are continuous inside their ranges of convergence, so the limit is 1 (our own argument). The geometric proof compares the areas of two triangles and a sector of the unit circle. To link the two definitions, show that both solve y″ = −y with y(0) = 0 and y′(0) = 1 (our own).

**Wikipedia:** [Trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions). It says: “In fact, the functions sin and cos can be defined for all complex numbers in terms of the exponential function, via power series,”

**Paper or page:** [Limit of Sine of X over X at Zero](https://proofwiki.org/wiki/Limit_of_Sine_of_X_over_X_at_Zero). It says: “lim (x → 0) sin x / x = 1”

**Sources:** none listed. No primary source with a working link was found.

### Testing continuity only inside the domain makes endpoints and restrictions work

**Remember:** Test only the points where the function is defined.

*Rules out counterexamples. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f with domain D is continuous at a point x₀ of D if each ε &gt; 0 has a matching δ &gt; 0. The condition is \|f(x) − f(x₀)\| &lt; ε for all x in D with \|x − x₀\| &lt; δ. Only points of the domain are tested.

**Problem.** Functions on a closed interval \[a, b\] should be continuous at a and b. The restriction of a continuous function to a subset should stay continuous. The reciprocal 1/f should be continuous wherever it is defined.

**How the definition helps.** Jordan's version asks nothing about points outside the domain, so endpoints and restrictions cause no exceptions. With Weierstrass's condition, no function on \[a, b\] could be continuous at a, because no interval around a lies inside \[a, b\] (our own). Then the extreme value theorem and the intermediate value theorem for \[a, b\] would need special wording (our own). With Jordan's definition, 1/x is continuous on its domain, the reals without 0. Every function on the integers is continuous, because each point is isolated. The same idea is the general definition of continuity for subspaces of topological spaces.

**Wikipedia:** [Continuous function](https://en.wikipedia.org/wiki/Continuous_function). It says: “Weierstrass had required that the interval x₀ − δ &lt; x &lt; x₀ + δ be entirely within the domain D, but Jordan removed that restriction.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity makes continuous functions on closed intervals integrable

**Remember:** Uniform continuity is continuity with one δ for the whole domain.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f is uniformly continuous when, for every ε &gt; 0, there is one δ &gt; 0 that works for all points. That is, \|x − y\| &lt; δ implies \|f(x) − f(y)\| &lt; ε for all x and y. In words, points that are close enough always have close values, with the same meaning of 'close enough' everywhere.

**Problem.** Every continuous function on a closed bounded interval \[a,b\] is Riemann integrable, in Darboux's form with upper and lower sums.

**How the definition helps.** One δ for the whole interval controls all pieces of a partition at once. Our own detail: in any partition into pieces shorter than δ, the upper and lower sums differ by at most ε(b − a), so the integral exists. Plain continuity gives a δ that depends on the point, and that does not control all pieces at once. The Heine–Cantor theorem says that a continuous function on a compact set is uniformly continuous. Bolzano had the definition earlier, Dirichlet used the idea in his 1854 lectures, and Heine published the definition in 1870. The hard step moves into the Heine–Cantor theorem, which needs the compactness of \[a,b\].

**Wikipedia:** [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “The Darboux integrability of continuous functions follows almost immediately from this theorem.”

**Sources:**

- [E. Heine, Die Elemente der Functionenlehre, J. reine angew. Math. 74 (1872), 172–188, doi:10.1515/crll.1872.74.172](https://doi.org/10.1515/crll.1872.74.172)

### Carathéodory's definition of the derivative gives a two-line chain rule

**Remember:** Factor out x − a, and the slope becomes a continuous function.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f is differentiable at a if f(x) − f(a) = q(x)(x − a) for all x. Here q is some function that is continuous at a. Then f′(a) = q(a). This is equivalent to the usual limit definition.

**Problem.** If g is differentiable at a and f is differentiable at g(a), then f∘g is differentiable at a with derivative f′(g(a))g′(a).

**How the definition helps.** The definition replaces a limit of quotients with a product, so no division by g(x) − g(a) appears. The usual proof writes the difference quotient of f∘g as a product of two quotients. That fails when g(x) = g(a) for points x arbitrarily close to a, for example for g(x) = x² sin(1/x) (our own). With Carathéodory's definition, f(g(x)) − f(g(a)) = q(g(x)) r(x) (x − a), and q(g(x)) r(x) is continuous at a. So the chain rule is one line. The page adds that the same factoring handles derivatives that must be Lipschitz or Hölder continuous.

**Wikipedia:** [Chain rule](https://en.wikipedia.org/wiki/Chain_rule). It says: “Constantin Carathéodory's alternative definition of the differentiability of a function can be used to give an elegant proof of the chain rule.”

**Sources:**

- [Stephen Kuhn, The derivative à la Carathéodory, The American Mathematical Monthly 98 (1991) 40–44](https://doi.org/10.2307/2324035)

### Derivatives give exact Lipschitz bounds

**Remember:** Chords and derivatives give the same bound on slopes.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Lipschitz bound of a real function on an open interval is the supremum of absolute slopes between distinct points. Allow infinity when no finite bound exists. The usual inequality definition instead seeks the smallest constant that bounds every such slope.

**Problem.** For a differentiable function on an open interval, the Lipschitz bound equals the supremum of the absolute derivative, allowing infinity.

**How the definition helps.** Writing the optimal bound as a supremum of chord slopes lets the mean value theorem compare it directly with the derivative bound (our own). Each chord slope equals some derivative, and each derivative is a limit of chord slopes (our own). These two facts give opposite inequalities between the suprema, including when they are infinite (our own).

**nLab:** [Lipschitz map](https://ncatlab.org/nlab/show/Lipschitz+map). It says: “its Lipschitz norm is the supremum norm ‖f′‖∞ of its derivative f′.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic derivatives turn products into sums

**Remember:** Take logs to add the factors before you differentiate.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define the logarithmic derivative of a real function f as the derivative of ln \|f\| where f is nonzero. The usual formula writes it as f′/f.

**Problem.** At a point where each of finitely many differentiable real factors is nonzero, their product has logarithmic derivative equal to the sum of theirs.

**How the definition helps.** The logarithm of the absolute value of the product is already a sum of logarithms (our own). Differentiation preserves that sum (our own). The work moves to the chain rule, which identifies the derivative of ln \|f\| with f′/f (our own).

**Wikipedia:** [Logarithmic derivative](https://en.wikipedia.org/wiki/Logarithmic_derivative). It says: “the logarithmic derivative of a product is the sum of the logarithmic derivatives of the factors”

**Sources:** none listed. No primary source with a working link was found.

### Normalized Taylor coefficients equal derivatives

**Remember:** Divide by the factorial that differentiation puts back.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For degree k, use the kth power of x − c divided by k!. In this basis, give the degree k term the coefficient equal to the kth derivative at c. For k = 0, use the function value at c.

**Problem.** Suppose f has derivatives through order n at c. Its Taylor polynomial matches all these derivatives and the value at c. It is the unique polynomial of degree at most n with those values.

**How the definition helps.** The kth derivative at the center is one for the normalized power of degree k and zero for all the others (our own). The work of approximation is separate and belongs to Taylor’s remainder theorem (our own).

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “whose derivatives at c match those of f up to order k.”

**Sources:** none listed. No primary source with a working link was found.

### Summing over set partitions turns the higher chain rule into simple induction

**Remember:** A new derivative starts a block or joins one.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 05A18. arXiv math.CA, math.CO. Level 1: early undergraduate.

**Definition.** Label each differentiation by its step number. Group the labels into blocks, with one block for each factor that is a derivative of the inner function. This uses partitions of a labeled set instead of counts of blocks of each size.

**Problem.** The nth derivative of f(g(x)) is a sum over partitions of the n labels. Each partition contributes the outer derivative of order the number of blocks and one inner derivative per block, of order its size.

**How the definition helps.** Each new derivative either starts a new block or joins an existing block, so the induction step is a bijection, in our own explanation. Differentiating the outer factor creates the singleton block {n + 1}. Differentiating a factor for block B adds n + 1 to B. Removing the label n + 1 recovers the unique previous partition, by our own argument. In the usual form, the hard part is collecting equal terms to find their coefficients.

**Paper or page:** [A one-sentence elementary proof of the combinatorial Faà di Bruno's formula](https://arxiv.org/abs/2206.02031v2). It says: “where π ranges over the set Πₙ of all partitions of {1, …, n} and B ranges over the blocks in π.”

**Sources:**

- [Samuel Allen Alexander, A one-sentence elementary proof of the combinatorial Faà di Bruno's formula, arXiv:2206.02031v2 (2022)](https://arxiv.org/abs/2206.02031v2)

### Uniform derivative limits allow differentiation

**Remember:** Control all slopes and anchor one function value.

*Rules out counterexamples. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 40A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Uniform convergence of derivatives requires one error bound for all points after a common cutoff. Uniform convergence of the original functions alone does not control their slopes.

**Problem.** Take real functions continuous on a closed bounded interval and differentiable in its interior. Suppose their values converge at one point of the interval and their derivatives converge uniformly in the interior. Then the functions converge uniformly, and their limit has the limiting derivative at each interior point.

**How the definition helps.** The mean value theorem turns a uniform bound on derivative differences into the same bound on differences of secant slopes (our own). The convergent values at one point then make the functions uniformly Cauchy, so they converge uniformly (our own). Pass the secant bound to the limit in one function index before shrinking the secant interval (our own). On \[−1, 1\], the functions x ↦ √(x² + 1/n) converge uniformly to \|x\|, which has no derivative at zero (our own).

**Wikipedia:** [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence). It says: “With additional hypotheses, differentiability can be transferred to the limit function as well.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the integral by antiderivatives makes integration by parts the product rule

**Remember:** The integral of a product's derivative is the product's change.

*True by definition. Confidence: medium.* MSC 26A36 (Antidifferentiation), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a continuous f on \[a, b\], define its integral as F(b) − F(a), where F is any antiderivative of f. The Riemann definition instead takes limits of sums of sampled values.

**Problem.** For continuously differentiable u and v on \[a, b\], the integral of uv′ plus the integral of u′v equals u(b)v(b) − u(a)v(a).

**How the definition helps.** With this definition, one only needs an antiderivative of uv′ + u′v, and the product rule says uv is one (our own). The integral is linear because a sum of antiderivatives is an antiderivative of the sum (our own). The mean value theorem shows that two antiderivatives differ by a constant, so the choice of F does not matter (our own). The work moves into the fundamental theorem of calculus. It shows that antiderivatives exist and that the two definitions agree.

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “the antiderivatives and indefinite integrals of a function”

**Paper or page:** [Integration by Parts/Definite Integral](https://proofwiki.org/wiki/Integration_by_Parts/Definite_Integral). It says: “Let f and g have primitives F and G respectively on \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### Defining the integral by antiderivatives makes substitution the chain rule

**Remember:** Compose the antiderivative and read off the new endpoints.

*True by definition. Confidence: medium.* MSC 26A36 (Antidifferentiation), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For continuous f, define its definite integral as an endpoint difference of an antiderivative F. The Riemann definition instead uses limits of tagged sums.

**Problem.** Let g be continuously differentiable on \[a, b\], and let f be continuous on an interval that contains g(\[a, b\]). Then the integral of f(g(x))g′(x) from a to b equals the signed integral of f from g(a) to g(b). Here g need not be one-to-one.

**How the definition helps.** With this definition, one only needs an antiderivative of f(g(x))g′(x), and the chain rule says F ∘ g is one. So both sides equal F(g(b)) − F(g(a)). The argument never uses that g is one-to-one or increasing (our own). The work moves into the fundamental theorem of calculus. It gives F and matches this definition with the Riemann integral (our own).

**Wikipedia:** [Integration by substitution](https://en.wikipedia.org/wiki/Integration_by_substitution). It says: “combining the chain rule and the definition of an antiderivative gives:”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums make every monotone function integrable by a telescoping sum

**Remember:** For monotone functions, the gap between upper and lower sums telescopes.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A48. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A bounded function on \[a, b\] is Darboux integrable when the infimum of its upper sums equals the supremum of its lower sums. An upper sum adds the length of each piece of a partition times the supremum of f on that piece. A lower sum uses the infimum instead. The Riemann definition instead asks all fine tagged sums to approach one number.

**Problem.** Every monotone real function on a closed bounded interval \[a, b\] is Darboux integrable, and hence Riemann integrable.

**How the definition helps.** For increasing f on n equal pieces, the upper sum minus the lower sum telescopes to (b − a)(f(b) − f(a))/n, in our own proof. This tends to zero, so the Darboux test holds. With the tagged Riemann definition, one would have to control every fine tagged sum directly. The theorem that the Darboux and Riemann definitions agree carries that work, in our own account.

**Paper or page:** [Monotone Real Function is Darboux Integrable](https://proofwiki.org/wiki/Monotone_Real_Function_is_Darboux_Integrable). It says: “Then f is Darboux integrable over \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums reject the rational indicator

**Remember:** Every interval sees both zeros and ones.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Split the interval and take the greatest lower bound of the function on each piece. Multiply each bound by its piece length and add the products to get a Darboux lower sum. Use least upper bounds for an upper sum. A Riemann sum instead chooses one sample per piece.

**Problem.** The function on \[0, 1\] that equals one on rational numbers and zero elsewhere is not Riemann integrable.

**How the definition helps.** Every partition gives lower sum zero and upper sum one, since each piece contains both rational and irrational numbers (our own). Their gap can never become arbitrarily small, so the function fails the Darboux test (our own). The separate theorem that Riemann and Darboux integrability agree gives the conclusion for the Riemann integral (our own).

**Wikipedia:** [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). It says: “This function does not have a Riemann integral.”

**Paper or page:** [Equivalence of Definitions of Riemann and Darboux Integrals](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Riemann_and_Darboux_Integrals). It says: “the Darboux integral of f over \[a, b\] exists and is equal to L.”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums turn integrability into one test on a single partition

**Remember:** Squeeze the integral between rectangles above and rectangles below.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Take a bounded f on \[a, b\] and a partition P. The upper Darboux sum uses the supremum of f on each piece, and the lower sum uses the infimum. The function is Darboux integrable if the infimum of the upper sums equals the supremum of the lower sums.

**Problem.** A bounded f is integrable exactly when, for every ε &gt; 0, some partition has upper sum minus lower sum below ε. So every monotone function on \[a, b\] is integrable.

**How the definition helps.** The Darboux definition needs no tags and no limit over meshes, so integrability becomes the condition U − L &lt; ε for one partition. For an increasing function on n equal pieces, U − L telescopes to (f(b) − f(a))(b − a)/n (our own). That tends to 0, so monotone functions are integrable even with infinitely many jumps (our own). The work moves into the theorem that Darboux and Riemann integrals agree. That proof shows that Riemann sums lie between the Darboux sums and that refining a partition moves the sums toward each other.

**Wikipedia:** [Darboux integral](https://en.wikipedia.org/wiki/Darboux_integral). It says: “An equivalent and sometimes useful criterion for the integrability of f is to show that for every ε &gt; 0 there exists a partition Pε of \[a, b\] such that”

**Sources:**

- [Gaston Darboux, Mémoire sur les fonctions discontinues, Annales scientifiques de l'École normale supérieure 4 (1875)](https://doi.org/10.24033/asens.122)

### Reversing the limits flips the sign, so interval additivity always holds

**Remember:** Integrate backwards, and the sign flips.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A06. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Riemann integral from a to b is first defined only for a &lt; b. By convention, the integral from b to a is minus the integral from a to b, and the integral from a to a is 0.

**Problem.** The integral from a to c should equal the integral from a to b plus the integral from b to c. This should hold for all a, b and c in any order. The fundamental theorem of calculus, F(x) = ∫ from a to x of f, should hold for x on either side of a.

**How the definition helps.** With signed integrals, the addition rule holds for every order of a, b and c, so proofs need no case split. Without the convention, the rule holds only when b lies between a and c. The page shows that the rule then holds for any cyclic permutation of a, b and c. Then F(x), the integral of f from a to x, is defined on both sides of a (our own). For continuous f, its derivative is f everywhere (our own). The same sign rule becomes the orientation of the interval in the theory of differential forms (our own).

**Wikipedia:** [Integral](https://en.wikipedia.org/wiki/Integral). It says: “The first convention is necessary in consideration of taking integrals over subintervals of \[a, b\]; the second says that an integral taken over a degenerate interval, or a point, should be zero.”

**Sources:** none listed. No primary source with a working link was found.

### Signed heights make integration linear

**Remember:** Signed heights can cancel before or after you add.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Form rectangle sums using sampled function values as signed heights. The definite integral is their limit as the largest subinterval width tends to zero. Using absolute heights gives unsigned area.

**Problem.** Let f and g be Riemann integrable on the same closed bounded interval. Every real linear combination is integrable there, and integration preserves that combination.

**How the definition helps.** At every sample point, signed heights add before or after multiplication by the rectangle width (our own). Unsigned area fails for the constant functions one and minus one, whose sum has zero area (our own). The limit laws carry the equality of rectangle sums to the integrals (our own).

**Paper or page:** [Linear Combination of Integrals/Definite](https://proofwiki.org/wiki/Linear_Combination_of_Integrals/Definite). It says: “The integral of this linear combination equals the same linear combination of their integrals.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform limits preserve Riemann integrals

**Remember:** A small error everywhere gives a small total error.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 40A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Uniform convergence requires one sequence cutoff to make the error small everywhere. Pointwise convergence allows a different cutoff at each point.

**Problem.** If Riemann integrable functions on a closed bounded interval converge uniformly, their limit is integrable. Its integral is the limit of their integrals.

**How the definition helps.** Uniform convergence bounds the error in every Riemann sum by the maximum allowed error times the interval length (our own). The upper and lower sum criterion then gives integrability of the limit (our own). On \[0, 1\], let the nth function equal n on (0, 1/n) and zero elsewhere (our own). Each integral equals one, but the pointwise limit is zero (our own).

**Wikipedia:** [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence). It says: “the uniform limit of Riemann integrable functions is automatically Riemann integrable.”

**Paper or page:** [Definite Integral of Limit of Uniformly Convergent Sequence of Integrable Functions](https://proofwiki.org/wiki/Definite_Integral_of_Limit_of_Uniformly_Convergent_Sequence_of_Integrable_Functions). It says: “Then f is integrable, and”

**Sources:** none listed. No primary source with a working link was found.

### Convex chords order slopes

**Remember:** The middle point below the chord orders the three slopes.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function on an interval is convex if its value between two points lies at or below their chord. For twice differentiable functions, nonnegative second derivative gives an equivalent test.

**Problem.** For u &lt; v &lt; w, a convex function has nondecreasing slopes on \[u, v\], \[u, w\], and \[v, w\], in that order.

**How the definition helps.** The middle point v is a weighted mean of u and w. Writing the chord bound at v and rearranging gives both slope inequalities (our own). No derivative is needed (our own). The mean value theorem carries the work of proving the derivative test when that test applies (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “The proof is virtually trivial; just write v as a convex combination t u + (1−t)w and use the definition of convexity.”

**Sources:** none listed. No primary source with a working link was found.

### Epigraph intersections preserve convexity

**Remember:** The region above the highest graph is the intersection of all the upper regions.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The epigraph of a function consists of all points on or above its graph. Call the function convex if its epigraph contains the segment between any two of its points. The equivalent chord test requires each chord between graph points to lie on or above the graph.

**Problem.** The pointwise supremum of convex functions on a common interval is convex if it is finite there. The pointwise supremum takes the least upper bound of the function values at each input.

**How the definition helps.** The epigraph of the supremum is the intersection of the individual epigraphs (our own). Each shared pair of points belongs to every epigraph, so the whole segment belongs to their intersection (our own). The remaining work is to show that raising either endpoint of a chord keeps the segment on or above the graph (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “The pointwise maximum of two convex functions on D is again convex.”

**Paper or page:** [Pointwise Supremum of Family of Convex Real Functions is Convex](https://proofwiki.org/wiki/Pointwise_Supremum_of_Family_of_Convex_Real_Functions_is_Convex). It says: “Then f is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Ordered slopes give one-sided derivatives

**Remember:** At an interior point, slopes approach from each side without oscillating.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A24. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define convexity on an interval by ordering the slopes of adjacent chords. For x &lt; y &lt; z, the slope from x to y cannot exceed the slope from y to z. The geometric definition puts each chord on or above the graph.

**Problem.** A finite convex function on an open real interval has finite left and right derivatives at each point.

**How the definition helps.** An outer chord slope is a weighted average of its two adjacent chord slopes, so it lies between them (our own). Thus slopes with one endpoint fixed increase or stay constant as the other endpoint moves right (our own). Chords to fixed points on either side bound the nearby slopes, so both one-sided limits exist and are finite (our own). Rearranging the usual chord inequality gives the adjacent slope test (our own).

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “Moreover, f admits left and right derivatives, and these are monotonically non-decreasing.”

**Sources:** none listed. No primary source with a working link was found.

### Reflection makes increasing convex inverses concave

**Remember:** Above an increasing graph becomes below its inverse when you swap coordinates.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A convex function has a convex region on or above its graph. A concave function has a convex region on or below it. An equivalent test compares the graph directly with its chords.

**Problem.** The inverse of a strictly increasing convex function on an open interval is concave on its range.

**How the definition helps.** Within the input and output intervals, swapping coordinates turns points on or above the graph into points on or below the inverse graph (our own). Strict increase gives this correspondence (our own). A real convex function on an open interval is continuous, so its range is an interval (our own). Swapping coordinates preserves segments, so chords of the inverse lie on or below its graph (our own).

**Paper or page:** [Inverse of Strictly Increasing Convex Real Function is Concave](https://proofwiki.org/wiki/Inverse_of_Strictly_Increasing_Convex_Real_Function_is_Concave). It says: “If f be strictly increasing on I, then f⁻¹ is concave on J.”

**Sources:** none listed. No primary source with a working link was found.

### Strict convexity makes minima unique

**Remember:** Two lowest points would force an even lower midpoint.

*Rules out counterexamples.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function on an interval is strictly convex if every chord between distinct graph points lies above the graph between them. Ordinary convexity also allows the chord to lie on the graph.

**Problem.** A strictly convex function on an interval has at most one point where it attains its minimum.

**How the definition helps.** Two distinct minimizers would have a midpoint with a strictly smaller value (our own). The constant zero function on \[0, 1\] shows why ordinary convexity permits several minimizers (our own).

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “A strictly convex function will have at most one global minimum.”

**Sources:** none listed. No primary source with a working link was found.

### Twice differentiable maps have symmetric second derivatives

**Remember:** Twice differentiable means the derivative itself has a derivative, not only the partials.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A map f from an open set in ℝⁿ to ℝᵐ is twice differentiable if it is differentiable and its derivative df is again differentiable. Here df is a map from the open set into the space of linear maps from ℝⁿ to ℝᵐ. The second derivative d(df) at a point is then a bilinear map.

**Problem.** Show that the mixed partial derivatives are equal: ∂²f/∂xᵢ∂xⱼ = ∂²f/∂xⱼ∂xᵢ. In words, the order in which you take the two partial derivatives does not matter.

**How the definition helps.** With this definition the theorem needs no continuity hypothesis, because the second derivative is one bilinear map that a symmetric difference approximates. Look at the second-order difference f(x+v+w) − f(x+v) − f(x+w) + f(x). It is symmetric in v and w. The mean value theorem shows that it equals d(df)(v,w) up to a small error, so the bilinear map is symmetric. The definition excludes the classical counterexample f(x,y) = xy(x² − y²)/(x² + y²). All second partial derivatives of this function exist at (0,0), but its two mixed partials differ there. The textbook version, with continuous second partials, then follows as a corollary.

**nLab:** [differentiable map](https://ncatlab.org/nlab/show/differentiable+map). It says: “However, the theorem shows that if we require f to actually be twice differentiable rather than merely having second-order partial derivatives, then this cannot happen.”

**Sources:** none listed. No primary source with a working link was found.

### Unit directions reveal steepest slopes

**Remember:** Compare equal-length steps to find the steepest slope.

*Makes the theorem clean to state or prove.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define a directional slope as the rate of change per unit distance along a direction. Use a vector of length one to specify that direction. A derivative along an arbitrary velocity instead gives the rate per unit time.

**Problem.** For a differentiable real function, the greatest directional slope equals the length of its gradient. If the gradient is nonzero, that slope occurs in the gradient direction.

**How the definition helps.** A unit vector removes speed from the comparison, so only the angle with the gradient matters (our own). Without that restriction, increasing an uphill velocity makes the rate arbitrarily large (our own). The chain rule gives the dot product formula, and the dot product is largest at alignment (our own).

**Wikipedia:** [Gradient](https://en.wikipedia.org/wiki/Gradient). It says: “The steepness of the slope at that point is given by the magnitude of the gradient vector.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §4.6.](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient)

### Unit speed makes acceleration perpendicular

**Remember:** A constant speed leaves acceleration only to turn the velocity.

*True by definition.* MSC 26B12 (Calculus of vector functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Measure progress along a smooth curve by length traveled from its starting point. This replaces a parameter that may run at varying speed. For a regular curve, its original velocity never vanishes.

**Problem.** When a twice continuously differentiable regular curve is measured by arc length, its acceleration is perpendicular to its velocity.

**How the definition helps.** The squared speed is constant, and its derivative is twice the dot product of velocity and acceleration (our own). The work lies in showing that the derivative of arc length is speed and using it to change parameters (our own).

**Wikipedia:** [Differentiable curve](https://en.wikipedia.org/wiki/Differentiable_curve). It says: “is at a constant unit speed.”

**Sources:** none listed. No primary source with a working link was found.

### Scalar line integrals ignore direction

**Remember:** Reversing the walk reverses the pieces, not their lengths.

*True by definition.* MSC 26B15 (Integration of real functions of several variables: length, area, volume). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Divide the curve into short pieces. Multiply the function value at one point of each piece by its arc length. The scalar line integral is the limit of these sums as the longest piece shrinks to zero. The parameter formula weights function values by speed.

**Problem.** Reversing a smooth curve leaves the scalar line integral of a continuous function unchanged.

**How the definition helps.** Reversing the path keeps all the weighted pieces and only reverses their order (our own). The work is to get the speed formula using the derivative of arc length (our own).

**nLab:** [line integral](https://ncatlab.org/nlab/show/line+integral). It says: “whether increasing or decreasing”

**Wikipedia:** [Line integral](https://en.wikipedia.org/wiki/Line_integral). It says: “Line integrals of scalar fields over a curve C do not depend on the chosen parametrization r of C.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §6.2.](https://openstax.org/books/calculus-volume-3/pages/6-2-line-integrals)

### Clockwise inner boundaries preserve Green’s theorem

**Remember:** Keep the region on your left, even at a hole.

*Rules out counterexamples.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a positive boundary, walk with the region to your left. This rule sends you counterclockwise around the outside and clockwise around any hole. The simpler rule “walk counterclockwise” works only for an outside boundary.

**Problem.** Take a bounded plane region whose boundary consists of finitely many disjoint, simple, piecewise smooth closed curves. Suppose a vector field has continuous first derivatives on a neighborhood of the closed region. Green’s theorem equates circulation around the oriented boundary with the area integral of the scalar curl, the local rotation rate.

**How the definition helps.** The left-hand rule makes the two copies of every cut run in opposite directions, so their integrals cancel (our own). On a ring centered at the origin, the field (−y, x)/(x² + y²) has zero curl (our own). Each counterclockwise circle contributes 2π, so the inner circle must run clockwise (our own). Green’s theorem on the pieces supplies the integral identity (our own).

**Wikipedia:** [Green's theorem](https://en.wikipedia.org/wiki/Green%27s_theorem). It says: “where the path of integration along C is counterclockwise.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §6.4.](https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem)

### All directions detect joint convexity

**Remember:** Test every direction, including directions between the axes.

*Rules out counterexamples.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function on a convex set is convex if its restriction to every line segment is convex. Testing lines parallel to the coordinate axes alone instead defines separate convexity.

**Problem.** A twice continuously differentiable function on an open convex set is convex exactly when its Hessian is positive semidefinite everywhere. That means the matrix of second derivatives gives a nonnegative quadratic value in every direction.

**How the definition helps.** Each directional quadratic value is the second derivative along that line, so the one-variable test applies (our own). The function xy is linear on each coordinate line but concave on y = −x (our own). The work is the chain rule along a line and the one-variable second derivative test (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “a twice-differentiable function f: D → ℝ is convex iff its Hessian is a positive semidefinite bilinear form.”

**Sources:** none listed. No primary source with a working link was found.

### Derivatives lower root multiplicity by one

**Remember:** One derivative shifts the first nonzero derivative down by one place.

*True by definition.* MSC 26C05 (Real polynomials: analytic properties, etc.). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a root of a nonzero real polynomial, define its multiplicity as the least derivative order with nonzero value there. Order zero means the polynomial itself. The factor definition counts copies of the corresponding linear factor.

**Problem.** Differentiating a nonzero real polynomial lowers the multiplicity of each root by one. A root of multiplicity one is no longer a root.

**How the definition helps.** The derivative starts the list of derivative values one place later (our own). The work moves to Taylor’s formula for polynomials, which shows that the first nonzero term gives the number of linear factors (our own).

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “If a is a root of multiplicity k of a polynomial, then it is a root of multiplicity k − 1 of the derivative”

**Sources:** none listed. No primary source with a working link was found.

### Odd multiplicity makes roots cross

**Remember:** An odd number of sign reversals still reverses the sign.

*Makes the theorem clean to state or prove.* MSC 26C05 (Real polynomials: analytic properties, etc.). arXiv math.CA. Level 1: early undergraduate.

**Definition.** At a polynomial root a, remove factors x − a until the remaining factor is nonzero at a. The number removed is the multiplicity. Merely knowing that a is a root does not distinguish a crossing from a touch.

**Problem.** A nonzero real polynomial changes sign across a real root exactly when that root has odd multiplicity.

**How the definition helps.** The remaining factor has constant sign nearby, so only the parity of the removed power matters (our own). The root zero of x² shows why not every root is a crossing (our own). The work is repeated division by x − a and continuity of the remaining factor (our own).

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “The graph traverses the x-axis at roots of odd multiplicity and does not traverse it at roots of even multiplicity”

**Sources:** none listed. No primary source with a working link was found.

### Analytic functions equal their Taylor series

**Remember:** A convergent power series has no freedom to choose its Taylor coefficients.

*Rules out counterexamples.* MSC 26E05 (Real-analytic functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function is analytic at a point if a convergent power series centered there equals the function near the point. Having derivatives of all orders is weaker.

**Problem.** A real analytic function agrees near each point of analyticity with its Taylor series there.

**How the definition helps.** The local power series already represents the function, so only its coefficients need to be identified (our own). The work moves to termwise differentiation of a convergent power series, which extracts each coefficient at the center (our own). The smooth function exp(−1/x²), extended by zero at x = 0, has all derivatives zero there but is positive elsewhere (our own).

**Wikipedia:** [Analytic function](https://en.wikipedia.org/wiki/Analytic_function). It says: “a function that is locally represented by a convergent power series.”

**Paper or page:** [Calculus: Taylor](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then aₙ = f⁽ⁿ⁾(0)/n!.”

**Sources:** none listed. No primary source with a working link was found.

### With M₀ the geometric mean, power means form one monotone family

**Remember:** Zero gives the geometric mean, the limit of the power means.

*Makes the theorem clean to state or prove.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Take positive numbers x₁, …, xₙ and a real p ≠ 0. The power mean Mₚ is the p-th root of the average of the p-th powers. By convention M₀ is the geometric mean, M₊∞ the maximum and M₋∞ the minimum.

**Problem.** The power mean inequality says that the p-th power mean is at most the q-th power mean whenever p &lt; q. For p in {−1, 0, 1} it gives harmonic ≤ geometric ≤ arithmetic.

**How the definition helps.** The formula for Mₚ has no meaning at p = 0, and the convention fills the gap with the limit. So p ↦ Mₚ becomes one continuous non-decreasing function on the extended real line (our own). Then the inequality of arithmetic and geometric means is one case of a single theorem, not a separate fact. The limit p → 0 is a calculation with L'Hôpital's rule on the logarithm of Mₚ. The monotonicity itself still needs Jensen's inequality.

**Wikipedia:** [Generalized mean](https://en.wikipedia.org/wiki/Generalized_mean). It says: “For p = 0 we set it equal to the geometric mean (which is the limit of means with exponents approaching zero, as proved below)”

**Sources:** none listed. No primary source with a working link was found.

### Allowing infinite values makes the monotone convergence theorem statable

**Remember:** Let the integral be infinite, and limits of integrals always exist.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The extended real line adds +∞ and −∞ to the real numbers, with −∞ ≤ a ≤ +∞ for all a. In measure theory, the product 0 · ∞ is defined as 0.

**Problem.** For an increasing sequence of non-negative measurable functions, the integral of the limit equals the limit of the integrals.

**How the definition helps.** With values in \[0, ∞\], increasing limits and integrals of non-negative functions always exist. So the theorem needs no hypothesis of finiteness. The pointwise limit of increasing functions can be +∞ at some points, and the length of the whole real line is +∞. The convention 0 · ∞ = 0 makes the integral of the zero function over the real line equal to 0 (our own). It also lets a function be +∞ on a null set without changing its integral (our own). The proof itself still needs the definition of the integral as a supremum over simple functions.

**Wikipedia:** [Extended real number line](https://en.wikipedia.org/wiki/Extended_real_number_line). It says: “Without allowing functions to take on infinite values, such essential results as the monotone convergence theorem and the dominated convergence theorem would not make sense.”

**Sources:** none listed. No primary source with a working link was found.

### Dedekind cuts are subsets of ℚ, so ℝ injects into P(ℕ)

**Remember:** Different cuts are already different subsets of one countable set.

*True by definition. Confidence: medium.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 03E10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Classically, a real number is a lower cut, a nonempty proper subset of ℚ that is downward closed and has no greatest member. The alternative takes classes of rational Cauchy sequences, whose terms get arbitrarily close together.

**Problem.** There is an injection from ℝ into the power set of ℕ, the set of all subsets of ℕ.

**How the definition helps.** With cuts, each real already is a subset of ℚ, and different reals are different subsets (our own). A fixed bijection between ℚ and ℕ then turns each cut into a subset of ℕ (our own). With Cauchy sequences, a real is a class of sequences, so one must first pick a canonical representative or a canonical subset (our own). The work moves to proving that lower cuts form a complete ordered field (our own).

**nLab:** [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “Any such set L of rational numbers is a lower cut.”

**Sources:** none listed. No primary source with a working link was found.

### Taking ln a as the slope of aˣ at zero differentiates aˣ

**Remember:** The slope at zero fixes the slope at every point.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a &gt; 0, define aˣ for rational x by roots and powers, and extend it to real x by continuity. Then define ln a as the derivative of aˣ at x = 0. The usual definition makes ln the area under 1/t and sets aˣ = exp(x ln a).

**Problem.** For a &gt; 0 and every real x, the derivative of aˣ is aˣ ln a.

**How the definition helps.** With this definition, the slope at every point reduces to the slope at 0 (our own). The exponent law gives (aˣ⁺ʰ − aˣ)/h = aˣ(aʰ − 1)/h (our own). As h → 0, the last quotient tends to ln a by definition (our own). The work moves into showing that this slope at 0 exists. One must also show that it equals the usual logarithm, which is the second cited ProofWiki theorem.

**Paper or page:** [Derivative of General Exponential Function](https://proofwiki.org/wiki/Derivative_of_General_Exponential_Function), [Natural Logarithm as Derivative of Exponential at Zero](https://proofwiki.org/wiki/Natural_Logarithm_as_Derivative_of_Exponential_at_Zero). It says: “d(aˣ)/dx = aˣ ln a”

**Sources:** none listed. No primary source with a working link was found.

### Closed sublevel sets give minima

**Remember:** Closed sets of near-minimizers must meet on a compact domain.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function is lower semicontinuous if every sublevel set is closed. A sublevel set contains all points where the function is at most a specified height. On a metric space, this is equivalent to requiring that a value never exceed the limit inferior along any approaching sequence.

**Problem.** A real-valued lower semicontinuous function on a nonempty compact interval attains its minimum.

**How the definition helps.** Closed sublevel sets let compactness turn arbitrarily close approximations into a minimum (our own). If the infimum were minus infinity, all sublevel sets at heights −n would be nonempty (our own). Compactness would put one point in all of them, impossible for a real value (our own). For finite infimum m, the nonempty closed sublevel sets at heights m + 1/n likewise intersect (our own). Every point in their intersection attains m (our own). From the sequential definition, one first proves that each sublevel set contains the limits of its convergent sequences (our own).

**nLab:** [semicontinuous map](https://ncatlab.org/nlab/show/semicontinuous+map). It says: “for each y ∈ U, f(y) &gt; a.”

**Sources:** none listed. No primary source with a working link was found.

### Oscillation shows that the points of continuity form a G-delta set

**Remember:** Continuity means zero oscillation, and small oscillation is an open condition.

*Makes the theorem clean to state or prove.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A21. arXiv math.CA, math.GN. Level 2: later undergraduate.

**Definition.** On a neighbourhood of x, take the supremum of f minus the infimum of f. The oscillation of f at x is the limit of this as the neighbourhood shrinks. The function is continuous at x exactly when the oscillation there is 0.

**Problem.** For any function f on the real line, the set of points where f is continuous is a countable intersection of open sets. So no function is continuous exactly at the rational numbers.

**How the definition helps.** Oscillation turns continuity at a point into a number, so the set of continuity points is a level set. The set where the oscillation is less than 1/n is open. Their intersection over all n is the set of continuity points, which is therefore a G-delta set. The rationals are not a G-delta set (our own). This follows from the Baire category theorem (our own), which says that a countable intersection of dense open sets of reals is dense. So no function is continuous exactly on the rationals, although Thomae's function is continuous exactly on the irrationals (our own). The same tool proves one direction of Lebesgue's test for Riemann integrability.

**Wikipedia:** [Oscillation (mathematics)](https://en.wikipedia.org/wiki/Oscillation_%28mathematics%29). It says: “the continuous points are the intersection of the sets where the oscillation is less than ε (hence a Gδ set) – and gives a very quick proof of one direction of the Lebesgue integrability condition.”

**Sources:** none listed. No primary source with a working link was found.

### Distance cones extend Lipschitz functions

**Remember:** Take the lowest distance bound from all the known values.

*True by definition.* MSC 26A16 (Lipschitz (Hölder) classes). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function is L-Lipschitz if each absolute change in value is at most L times the distance between inputs. For each x on the line, define its McShane extension as the infimum of f(a) + L\|x − a\| over original points a. This single formula replaces interpolation across individual gaps in the domain.

**Problem.** A real function on any nonempty subset of the line with Lipschitz constant L extends to the whole line with the same bound.

**How the definition helps.** Taking the infimum of distance bounds enforces the same Lipschitz inequality everywhere at once (our own). The triangle inequality bounds the change in each expression by L times the distance between inputs (our own). Taking infima preserves this bound in both directions (our own). Fix an original point b (our own). The Lipschitz and triangle inequalities bound every expression below by f(b) − L\|x − b\| (our own). Choosing a = b gives a finite upper bound (our own). At any original point x, the bounds all exceed or equal f(x), with equality when a = x (our own).

**nLab:** [Lipschitz map](https://ncatlab.org/nlab/show/Lipschitz+map). It says: “d(f(a), f(b)) ≤ K d(a, b)”

**Sources:**

- [E. J. McShane, Extension of range of functions (1934)](https://doi.org/10.1090/S0002-9904-1934-05978-0)

### Defining Baire class one by limits makes derivatives Baire class one

**Remember:** Continuous difference quotients converge to the derivative.

*True by definition.* MSC 26A21 (Classification of real functions; Baire classification of sets and functions), 03E15, 26A24. arXiv math.CA, math.LO. Level 2: later undergraduate.

**Definition.** A real function has Baire class one if it is the pointwise limit of a sequence of continuous functions. On the real line, an equivalent definition asks that the preimage of each open set be a countable union of closed sets.

**Problem.** Let f be differentiable at every point of the real line. Then its derivative f′ has Baire class one.

**How the definition helps.** With the limit definition, the derivative is already a limit of continuous functions. The functions n(f(x + 1/n) − f(x)) are continuous because f is continuous (our own). They converge to f′(x) at every x (our own). With the preimage definition, one would have to show directly that each preimage under f′ is a countable union of closed sets (our own). The work moves to the Lebesgue–Hausdorff theorem that the two definitions agree. Wikipedia notes that the Baire characterisation theorem then gives f′ points of continuity.

**Wikipedia:** [Baire function](https://en.wikipedia.org/wiki/Baire_function). It says: “The derivative of any differentiable function is of class 1.”

**Sources:** none listed. No primary source with a working link was found.

### Strict differentiability makes a nonzero derivative force local injectivity

**Remember:** Control every nearby chord, not only chords through x.

*True by definition. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function f has strict derivative a at x when the slope (f(y) − f(z))/(y − z) tends to a. Here y and z tend to x with y ≠ z. The ordinary derivative keeps one of the two points fixed at x.

**Problem.** A real function with a nonzero strict derivative at x is one-to-one on some interval around x.

**How the definition helps.** The definition controls the slope of every nearby chord, so no chord near x is horizontal, in our own proof. Hence f(y) ≠ f(z) for distinct y and z near x. An ordinary nonzero derivative is not enough, in our own example. The function x + 2x² sin(1/x), with value 0 at 0, has derivative 1 at 0 but is not one-to-one near 0. Wikipedia states that strict differentiability on an interval is the same as continuous differentiability, so the usual C¹ hypothesis supplies it.

**Wikipedia:** [Strict differentiability](https://en.wikipedia.org/wiki/Strict_differentiability). It says: “the definition is made more restrictive by allowing both points used in the difference quotient to "move".”

**Sources:** none listed. No primary source with a working link was found.

### Caputo derivatives vanish on constants

**Remember:** Differentiate first and the constant is already gone.

*Rules out counterexamples.* MSC 26A33 (Fractional derivatives and integrals). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; α &lt; 1 and start all integrals at zero. Integration of order 1 − α weights past values by the time lag raised to −α, divided by Γ(1 − α). Here Γ denotes the gamma function. The Caputo rule differentiates before integration, while the Riemann–Liouville rule differentiates afterwards.

**Problem.** The Caputo derivative of a constant is zero. The Riemann–Liouville derivative of a nonzero constant on positive time is not zero.

**How the definition helps.** A constant has ordinary derivative zero, so the Caputo rule integrates zero (our own). In our own comparison the reversed rule integrates 1 to a positive power of time, which still has a nonzero derivative. For general inputs, our own explanation uses the equivalence with subtracting the initial value before applying the reversed rule.

**Wikipedia:** [Caputo fractional derivative](https://en.wikipedia.org/wiki/Caputo_fractional_derivative). It says: “The Caputo fractional derivative of a constant c is given by”

**Sources:**

- [M. Caputo, Linear Models of Dissipation whose Q is almost Frequency Independent—II (1967)](https://doi.org/10.1111/j.1365-246x.1967.tb02303.x)

### The Henstock integral makes every derivative integrable

**Remember:** Henstock is Riemann with the mesh allowed to vary from point to point.

*Makes the theorem clean to state or prove.* MSC 26A39 (Denjoy and Perron integrals, other special integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A gauge on \[a, b\] is a function δ : \[a, b\] → (0, ∞\]. A tagged partition (a partition with one chosen point, the tag, in each piece) is δ-fine if each piece lies within δ(t) of its tag t. The number I is the Henstock integral of f if for every ε &gt; 0 there is a gauge δ such that every δ-fine tagged partition has a Riemann sum within ε of I. With constant gauges this is the Riemann integral.

**Problem.** If f is differentiable on \[a, b\], then f′ should be integrable, and the integral of f′ from a to b should be f(b) − f(a). This should hold with no further hypothesis on f′.

**How the definition helps.** The gauge can be made very small near the bad points of f′, so every derivative is Henstock integrable. So the fundamental theorem of calculus holds in this clean form. With the Riemann or Lebesgue integral, the same statement needs extra hypotheses on f′. Cousin's lemma is still needed: it shows that δ-fine partitions exist. That is what makes the integral not trivial and unique.

**nLab:** [Henstock integral](https://ncatlab.org/nlab/show/Henstock+integral). It says: “The Henstock integral satisfies a very nice form of the fundamental theorem of calculus”

**Sources:**

- [Ralph Henstock, Definitions of Riemann type of the variational integrals, Proc. London Math. Soc. (3) 11 (1961) 402–418](https://doi.org/10.1112/plms/s3-11.1.402)

### With the Henstock integral, improper integrals are ordinary integrals

**Remember:** A gauge can shrink near a bad endpoint, so the endpoint needs no special limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A39 (Denjoy and Perron integrals, other special integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A gauge on \[a, b\] is a function δ from \[a, b\] to the positive numbers. A tagged partition splits \[a, b\] into pieces and picks a point, the tag, in each piece; it is δ-fine if each piece with tag t lies within distance δ(t) of t. A function f is Henstock integrable on \[a, b\], with integral I, if this holds: for each ε &gt; 0, some gauge δ makes every δ-fine Riemann sum of f lie within ε of I.

**Problem.** An improper integral is the limit of ∫ₐᶜ f as c tends to b from below. It should be the same as the proper integral ∫ₐᵇ f. Then no separate definition of improper integrals is needed.

**How the definition helps.** A gauge can be very small near b, so the Henstock integral already deals with the bad endpoint. Hake's theorem states this. Suppose f is Henstock integrable on each \[a, c\] with c &lt; b. Then ∫ₐᵇ f exists exactly when the limit of ∫ₐᶜ f as c → b from below exists, and then the two are equal. So what is a definition for the improper Riemann integral is a theorem for the Henstock integral. A corollary is that changing f at finitely many points changes no integral. The proof of Hake's theorem is the real work.

**nLab:** [Henstock integral](https://ncatlab.org/nlab/show/Henstock+integral). It says: “in the strong sense that if either side exists, then so does the other, and they are equal.”

**Sources:**

- [Heinrich Hake, Über de la Vallée Poussins Ober- und Unterfunktionen einfacher Integrale und die Integraldefinition von Perron, Mathematische Annalen 83 (1921) 119–142 (for the Perron integral, which is equivalent to the Henstock integral)](https://doi.org/10.1007/BF01464233)

### Darboux brackets recover Lebesgue integrals

**Remember:** Squeeze the Lebesgue integral between the two step integrals.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Darboux construction brackets a bounded function with lower and upper step functions on partitions. Integrability means that the ordinary integrals of these two step functions can differ by arbitrarily little. Riemann’s tagged sums give an equivalent test.

**Problem.** Every Darboux integrable function on a compact interval is Lebesgue integrable with the same integral.

**How the definition helps.** Darboux sums supply pointwise step bounds, while individual tagged Riemann sums need not bound the function (our own). Choose successively finer partitions whose upper and lower integrals differ by less than 1/n (our own). The bounded step functions converge from above and below, apart from countably many partition endpoints (our own). Bounded convergence shows that the limiting bounds have equal integrals (our own). Their nonnegative difference therefore vanishes almost everywhere (our own). Lebesgue measurability follows because the function agrees almost everywhere with the measurable lower limit (our own). The common integral equals the Darboux integral (our own).

**Paper or page:** [Lebesgue Integral is Extension of Darboux Integral](https://proofwiki.org/wiki/Lebesgue_Integral_is_Extension_of_Darboux_Integral). It says: “Then it is also Lebesgue integrable, and furthermore:”

**Sources:** none listed. No primary source with a working link was found.

### Refining partitions let some Stieltjes integrals with shared jumps exist

**Remember:** Once a jump point is in the partition, it stays.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** In Pollard's generalized Riemann–Stieltjes integral, each ε needs a partition P with one property. Every partition that contains the points of P gives sums within ε of the value, for every choice of tags. The usual definition asks this for every partition whose pieces are all short enough.

**Problem.** Give a value to ∫ f dg when f and g jump at the same point. At that point one function is continuous from the left, and the other from the right.

**How the definition helps.** Refinement lets the partition keep a common jump point as a division point, so the tag cannot fall on the wrong side of the jump. With the usual definition, a partition can put the jump inside a piece, and the sum then changes with the choice of tag. So the ordinary integral does not exist when f and g share a discontinuity. Suppose f is continuous from the right and g from the left at the jump. Then the refinement sums no longer depend on the tags (our own). If both are continuous from the same side, the sums still depend on the tag, so not every shared jump is saved (our own). Pollard introduced the refinement version in 1920.

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “A consequence is that with this definition, the integral ∫ f(x) dg(x) can still be defined in cases where f and g have a point of discontinuity in common.”

**Sources:** none listed. No primary source with a working link was found.

### The Darboux criterion makes the positive part of integrable f integrable

**Remember:** Clipping negative values to zero cannot widen the spread of values on an interval.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Call a bounded function on \[a, b\] integrable if, for each ε &gt; 0, some partition has upper sum minus lower sum below ε. The upper and lower sums use the supremum and infimum of f on each piece. This is Darboux's criterion. The Riemann definition instead asks tagged sums to converge as the pieces shrink.

**Problem.** If f is Riemann integrable on \[a, b\], then so is f⁺ = max(f, 0).

**How the definition helps.** With Darboux's criterion, one only compares the spread sup − inf on each piece, which is a pointwise fact (our own). Since \|max(s, 0) − max(t, 0)\| ≤ \|s − t\|, the spread of f⁺ on each piece is at most that of f (our own). So any partition that works for f also works for f⁺ (our own). With tagged sums, one must instead control sums at arbitrary sample points (our own). The work moves into the theorem that Darboux's criterion is equivalent to Riemann integrability.

**Paper or page:** [Positive Part of Darboux Integrable Function is Integrable](https://proofwiki.org/wiki/Positive_Part_of_Darboux_Integrable_Function_is_Integrable). It says: “Then f⁺ is Darboux integrable over \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### The regulated integral, extended from step functions, passes to uniform limits

**Remember:** Integrate steps, then extend by continuity.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A regulated function on \[a, b\] is a uniform limit of step functions. Its integral is the limit of the integrals of the step functions. Bourbaki and Dieudonné advocated this integral instead of the Riemann integral.

**Problem.** Show that the integral of a regulated function exists and does not depend on the approximating sequence. Show also that the integral of a uniform limit is the limit of the integrals.

**How the definition helps.** The integral on step functions is a bounded linear map, so it extends uniquely to the closure of the step functions. Existence and independence of the sequence are then one theorem from functional analysis. Passing to uniform limits is built into the definition. Continuous functions are regulated by uniform continuity, so they are integrable (our own). Regulated functions are exactly those with one-sided limits at every point (our own). The cost is a smaller class than the Riemann integrable functions. A gain is that the definition works unchanged for values in a Banach space, a complete normed vector space.

**Wikipedia:** [Regulated integral](https://en.wikipedia.org/wiki/Regulated_integral). It says: “One must check that this limit exists and is independent of the chosen sequence, but this is an immediate consequence of the continuous linear extension theorem of elementary functional analysis”

**Sources:**

- [S. K. Berberian, Regulated functions: Bourbaki's alternative to the Riemann integral, The American Mathematical Monthly 86 (1979)](https://doi.org/10.1080/00029890.1979.11994771)

### The Stieltjes integral gives one expectation formula for every distribution

**Remember:** Integrate against how much g grows, not against how long the interval is.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 60E05, 46E15. arXiv math.CA, math.PR. Level 2: later undergraduate.

**Definition.** The Riemann–Stieltjes integral ∫ f dg is the limit of the sums Σ f(cᵢ)(g(xᵢ) − g(xᵢ₋₁)) as the partitions get finer. Each term multiplies a value of f by the increase of g over one small interval. So the integral uses the increments of a function g instead of length.

**Problem.** One formula should give the expected value E\[f(X)\] of every real random variable X, whether X is discrete, continuous or neither, for each f for which the integral exists. A second aim is to describe the continuous linear functionals on C\[a,b\], the space of continuous functions on \[a,b\].

**How the definition helps.** The Stieltjes integral needs only the distribution function g(x) = P(X ≤ x), which every random variable has, so no density is needed. The density formula E\[f(X)\] = ∫ f(x) g′(x) dx fails when X is discrete. It also fails when g is continuous but not absolutely continuous (not the integral of its derivative), such as the Cantor function. With the Stieltjes integral, E\[f(X)\] = ∫ f(x) dg(x) holds for every distribution function g, however badly it behaves. F. Riesz used the same integral to state his theorem about C\[a,b\]. It says that every continuous linear functional on C\[a,b\] is a Stieltjes integral against a function of bounded variation (a function whose total up-and-down movement is finite). The theorem was later restated with measures.

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “holds if g is any cumulative probability distribution function on the real line, no matter how ill-behaved.”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues, Ann. Fac. Sci. Toulouse 8 (1894), J1–J122](http://www.numdam.org/item?id=AFST_1894_1_8_4_J1_0)

### Arc length as a polygon supremum ignores every reparametrization

**Remember:** Changing the clock does not change the ordered points the path visits.

*True by definition. Confidence: medium.* MSC 26A45 (Functions of bounded variation, generalizations), 53A04. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the length of a continuous path γ on \[a, b\] as the supremum of polygon lengths. Each polygon joins γ(t₀), …, γ(tₖ) for a partition a = t₀ &lt; … &lt; tₖ = b. For a continuously differentiable path, the other definition integrates the speed \|γ′(t)\|.

**Problem.** Let φ map \[c, d\] onto \[a, b\], and let φ be continuous and strictly increasing. Then the paths γ and γ ∘ φ have the same length.

**How the definition helps.** With the polygon definition, reparametrization only relabels partitions, so the sets of polygon lengths are equal (our own). φ carries each partition of \[c, d\] to a partition of \[a, b\], and its inverse carries them back (our own). Matching partitions give the same polygon, so the suprema agree (our own). With the speed integral, one needs a differentiable φ and the substitution rule (our own). The work moves into the theorem that the two definitions agree for continuously differentiable paths (our own).

**Wikipedia:** [Arc length](https://en.wikipedia.org/wiki/Arc_length). It says: “The arc length of the curve is the same regardless of the parameterization used to define the curve.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded variation extends Dirichlet's Fourier test to more functions

**Remember:** Bounded variation means a difference of two monotone functions.

*Makes the theorem clean to state or prove.* MSC 26A45 (Functions of bounded variation, generalizations), 42A20. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f on \[a,b\] has bounded variation when the sums Σ\|f(xᵢ) − f(xᵢ₋₁)\| over all partitions of \[a,b\] are bounded. In words, the total up-and-down movement of f is finite. Jordan's theorem says that this holds exactly when f is the difference of two non-decreasing functions.

**Problem.** Let f be 2π-periodic and of bounded variation on a period. Then the Fourier series of f converges at every point x to (f(x+) + f(x−))/2. This value is the average of the limits of f from the right and from the left.

**How the definition helps.** A function of bounded variation is a difference of monotone functions, so a result for monotone functions carries over to it. Dirichlet proved convergence in 1829 for piecewise monotone functions. Jordan introduced functions of bounded variation in 1881, in a paper on Fourier series, and the Jordan decomposition shows that they are differences of monotone functions. The partial sums of a Fourier series depend linearly on the function, so Dirichlet's result carries over to the differences at once (our own remark on why the extension is short). If f is also continuous everywhere, the convergence is uniform. Continuous functions that do not have bounded variation can have divergent Fourier series (our own remark).

**Wikipedia:** [Dirichlet–Jordan test](https://en.wikipedia.org/wiki/Dirichlet%E2%80%93Jordan_test), [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “It was extended in the late 19th century by Camille Jordan to functions of bounded variation in each period (any function of bounded variation is the difference of two monotonically increasing functions).”

**Sources:**

- [P. G. L. Dirichlet, Sur la convergence des séries trigonométriques qui servent à représenter une fonction arbitraire entre des limites données, J. reine angew. Math. 4 (1829), 157–169, doi:10.1515/crll.1829.4.157](https://doi.org/10.1515/crll.1829.4.157)

### Lower bounds control reciprocal variation

**Remember:** Keep every denominator away from zero before you sum the increments.

*Rules out counterexamples.* MSC 26A45 (Functions of bounded variation, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Total variation takes the supremum of sums of absolute increments over finite partitions. A function bounded away from zero has \|f(x)\| ≥ M for one M &gt; 0. This is stronger than never taking the value zero.

**Problem.** Let f have bounded variation on a closed interval and satisfy \|f\| ≥ M &gt; 0. Then 1/f has variation at most that of f divided by M².

**How the definition helps.** A uniform lower bound controls both factors in the denominator of each reciprocal difference (our own). Its absolute value is at most the absolute difference of the original values divided by M² (our own). Summing over a partition and taking the supremum gives the bound (our own). On \[0, 1\], set f(0) = 1 and f(x) = x elsewhere (our own). This function has bounded variation, but its reciprocal is unbounded (our own).

**Paper or page:** [Reciprocal of Function of Bounded Variation Bounded away from Zero is of Bounded Variation](https://proofwiki.org/wiki/Reciprocal_of_Function_of_Bounded_Variation_Bounded_away_from_Zero_is_of_Bounded_Variation). It says: “That is, there exists M ∈ ℝ such that: \|f(x)\| ≥ M &gt; 0”

**Sources:** none listed. No primary source with a working link was found.

### The monotone-difference description of bounded variation gives countably many discontinuities

**Remember:** Every discontinuity comes from one of the two monotone parts.

*True by definition.* MSC 26A45 (Functions of bounded variation, generalizations), 26A48. arXiv math.CA. Level 2: later undergraduate.

**Definition.** On a compact interval, take a function of bounded variation to be a difference of two bounded monotone functions. The usual definition bounds the sums of \|f(xᵢ) − f(xᵢ₋₁)\| over all finite partitions.

**Problem.** A function of bounded variation on a compact interval has at most countably many discontinuities.

**How the definition helps.** A monotone function has at most countably many jumps, so a difference of two has at most countably many discontinuities, in our own proof. Wikipedia states that the two descriptions agree and draws this consequence. The work moves into Jordan's decomposition, which builds the monotone functions from the variation of f on \[a, x\], in our own account.

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “In particular, a BV function may have discontinuities, but at most countably many.”

**Sources:** none listed. No primary source with a working link was found.

### Absolute continuity leaves out the Cantor function

**Remember:** Small total length in, small total change out, however you split the length.

*Rules out counterexamples.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f on \[a,b\] is absolutely continuous if, for every ε &gt; 0, there is a δ &gt; 0 with this property. For every finite family of disjoint subintervals (xᵢ, yᵢ) with total length Σ(yᵢ − xᵢ) &lt; δ, we have Σ\|f(yᵢ) − f(xᵢ)\| &lt; ε. In words, intervals of small total length give a small total change in f.

**Problem.** The fundamental theorem of calculus for the Lebesgue integral: f(x) = f(a) + ∫ₐˣ f′(t) dt. In words, integrating the derivative of f gives back f.

**How the definition helps.** The definition leaves out the functions for which the formula fails, such as the Cantor function. The Cantor function is continuous, even uniformly continuous, and its derivative is 0 almost everywhere. But it rises from 0 to 1, so ∫₀¹ f′ = 0 while f(1) − f(0) = 1. Lebesgue's theorem then says that f is absolutely continuous exactly when f is the indefinite Lebesgue integral of some function, and that function is then f′. The Banach–Zarecki theorem gives an equivalent test: f is continuous, of bounded variation, and has the Luzin N property (f maps sets of measure zero to sets of measure zero). The proof still needs the theorem that such functions are differentiable almost everywhere (our own remark on where the work lies).

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity), [Cantor function](https://en.wikipedia.org/wiki/Cantor_function). It says: “The notion of absolute continuity allows one to generalize the fundamental theorem of calculus, originally in the framework of Riemann integration, to Lebesgue integration.”

**Sources:** none listed. No primary source with a working link was found.

### Lipschitz implies absolute continuity

**Remember:** Sum the same Lipschitz bound over all the intervals.

*True by definition.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A16. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Lipschitz function bounds each absolute change in value by a fixed multiple of the distance between inputs. Absolute continuity requires that sufficiently small total length guarantees arbitrarily small total absolute change across finitely many disjoint intervals. On a closed bounded interval, this is equivalent to being a constant plus an indefinite integral of an integrable function.

**Problem.** Every Lipschitz real function on a closed bounded interval is absolutely continuous.

**How the definition helps.** The interval definition lets one sum the Lipschitz bound over the disjoint intervals (our own). The total change is at most the Lipschitz constant times the total length (our own). The work in the integral description moves to the fundamental theorem for absolutely continuous functions (our own).

**Paper or page:** [Lipschitz Continuous Real Function is Absolutely Continuous](https://proofwiki.org/wiki/Lipschitz_Continuous_Real_Function_is_Absolutely_Continuous). It says: “Let f be Lipschitz continuous on I. Then f is absolutely continuous on I.”

**Sources:** none listed. No primary source with a working link was found.

### Coefficient ratios control quotient monotonicity

**Remember:** Larger inputs give higher indices more weight.

*Rules out counterexamples.* MSC 26A48 (Monotonic functions, generalizations), 30B10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f and g be real power series with the same positive radius r. Write aₙ and bₙ for their respective coefficients, with every bₙ positive. At 0 &lt; x &lt; r, give index n the weight bₙxⁿ/g(x). Then f(x)/g(x) is the weighted mean of the ratios aₙ/bₙ.

**Problem.** If the coefficient ratios never decrease, then f(x)/g(x) never decreases on (0,r).

**How the definition helps.** Increasing x favors larger indices, where the coefficient ratios are at least as large. Our own proof pairs indices i &lt; j after differentiating the quotient. Each pair contributes a positive factor times (j − i)(aⱼ/bⱼ − aᵢ/bᵢ). Our own counterexample uses f(x) = 1/(1 − x) and g(x) = 1/(1 − x)². The coefficient ratios decrease and the quotient 1 − x decreases.

**Paper or page:** [On Kaluza's sign criterion for reciprocal power series](https://arxiv.org/abs/1010.5337v3). It says: “Then the function x ↦ f(x)/g(x) is increasing (decreasing) on (0,r) if the sequence {aₙ/bₙ} is increasing (decreasing).”

**Sources:** none listed. No primary source with a working link was found.

### Continuity upgrades midpoint convexity

**Remember:** Repeatedly halve the interval, then use continuity to fill the gaps.

*Rules out counterexamples.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A midpoint-convex function lies below the average of the endpoint values at each midpoint. Full convexity requires the corresponding inequality for every weight between zero and one.

**Problem.** A continuous midpoint-convex function on a real interval is convex.

**How the definition helps.** Continuity lets the midpoint test determine the inequality at every weight (our own). Repeated halving gives the inequality for fractions whose denominator is a power of two (our own). These fractions are dense, so continuity gives the remaining weights (our own). For a counterexample, take a basis of the reals over the rationals containing 1 and √2 (our own). Define a rational-linear map sending √2 to one and every other basis element to zero (our own). It has midpoint equality but is discontinuous because it vanishes on the rationals without vanishing everywhere (our own). Every finite convex function on the line is continuous (our own).

**Wikipedia:** [Cauchy's functional equation](https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation). It says: “Such functions are sometimes called Hamel functions.”

**Paper or page:** [Continuous Midpoint-Convex Function is Convex](https://proofwiki.org/wiki/Continuous_Midpoint-Convex_Function_is_Convex). It says: “Let f be midpoint-convex and continuous on I. Then f is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing ratios allow one turn

**Remember:** An increasing ratio can cross one only once.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive sequence is log-convex if the ratio of each term to its predecessor never decreases. Equivalently, each interior term squared is at most the product of its neighbors.

**Problem.** A positive log-convex sequence is monotone or first decreases and then increases, with ties allowed.

**How the definition helps.** Successive ratios show directly which steps go up and which go down. Our own explanation starts from the usual inequality involving three neighboring terms. Dividing by the first two terms shows that the second ratio is at least the first. Once a ratio exceeds one, every later step goes up.

**Paper or page:** [On Kaluza's sign criterion for reciprocal power series](https://arxiv.org/abs/1010.5337v3). It says: “If a₀ ≤ a₁, then a₀ ≤ a₁ ≤ a₂ ≤ …;”

**Sources:** none listed. No primary source with a working link was found.

### Log-convexity singles out the gamma function among extensions of the factorial

**Remember:** Of all the smooth ways to join the factorials, only Γ is log-convex.

*Rules out counterexamples. Confidence: medium.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive function f is logarithmically convex (log-convex) when log f is a convex function.

**Problem.** The gamma function is the only positive function f on x &gt; 0 with three properties. The properties are f(1) = 1, f(x + 1) = x·f(x), and f is log-convex.

**How the definition helps.** Log-convexity squeezes f between bounds that close up, so only one function is possible. The conditions f(1) = 1 and f(x + 1) = x·f(x) alone do not determine f. Our own example: Γ(x)·p(x) satisfies them for any positive function p with period 1 and p(1) = 1. Log-convexity traps f(x) between bounds that depend on a whole number n and converge to the same limit as n grows. So the proof both shows uniqueness and gives a formula for Γ. Bohr and Mollerup put the theorem in a textbook in 1922, because they thought someone had already proved it.

**Wikipedia:** [Bohr–Mollerup theorem](https://en.wikipedia.org/wiki/Bohr%E2%80%93Mollerup_theorem). It says: “Therefore, there is no other function defined on x &gt; 0 with all the properties assigned to Γ(x).”

**Sources:** none listed. No primary source with a working link was found.

### Sums preserve log-convexity

**Remember:** Apply Hölder to the geometric means of the endpoint values.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive function is log-convex when its logarithm is convex. Equivalently, its value at a weighted mean is no greater than the weighted geometric mean of the endpoint values.

**Problem.** Any finite sum of positive log-convex functions on a real interval is log-convex.

**How the definition helps.** The geometric mean bound lets Hölder’s inequality combine the bounds for all summands (our own). For weights strictly between zero and one, use their reciprocals as the two exponents (our own). This bounds the sum at the weighted mean by the weighted geometric mean of the endpoint sums (our own). At weights zero and one the inequality is equality (our own). Taking logarithms gives convexity of the logarithm of the sum (our own).

**Wikipedia:** [Logarithmically convex function](https://en.wikipedia.org/wiki/Logarithmically_convex_function). It says: “log ∘ f is convex”

**Sources:** none listed. No primary source with a working link was found.

### Fenchel's inequality is one line from the definition of the convex conjugate

**Remember:** The conjugate is a supremum, so it beats every single term.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 49N15. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** The convex conjugate of f is f\*(p) = sup over x of (⟨p, x⟩ − f(x)). It is a convex function even when f is not convex.

**Problem.** Fenchel's inequality says ⟨p, x⟩ ≤ f(x) + f\*(p) for all x and p. With f(x) = xʳ/r on x ≥ 0 and 1/r + 1/s = 1, it gives Young's inequality xy ≤ xʳ/r + yˢ/s.

**How the definition helps.** A supremum is at least each of its terms, so f\*(p) ≥ ⟨p, x⟩ − f(x) for every x. That is the whole proof. Young's inequality for products, used to prove Hölder's inequality, is the case of a power function (our own). For a convex f, equality holds exactly when p is a subgradient of f at x. What stays hard is the converse question of when f\*\* = f, which is the Fenchel–Moreau theorem.

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “The proof follows from the definition of convex conjugate:”

**Sources:**

- [W. Fenchel, On conjugate convex functions, Canadian Journal of Mathematics 1 (1949)](https://doi.org/10.4153/CJM-1949-007-x)

### Gradients of strongly convex functions are invertible maps of space

**Remember:** To undo a convex gradient, minimize the potential minus a linear function.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv cs.LG, math.OC. Level 2: later undergraduate.

**Definition.** A convex potential flow sends a vector to the gradient of a strongly convex function. Strong convexity puts the function above each tangent plane by at least a fixed positive multiple of squared distance.

**Problem.** For a differentiable strongly convex potential on all of Euclidean space, its gradient is one-to-one and onto.

**How the definition helps.** Strong convexity turns finding the inverse into minimizing a strongly convex function. To solve ∇f(x) = y, minimize f(x) − ⟨y, x⟩, which has exactly one minimizer. This argument is our own explanation; the abstract says only that convexity implies invertibility. The paper separately proves that such flows can still approximate any probability density.

**Paper or page:** [Convex Potential Flows: Universal Probability Distributions with Optimal Transport and Convex Optimization](https://arxiv.org/abs/2012.05942v2). It says: “The convexity implies invertibility and allows us to resort to convex optimization to solve the convex conjugate for efficient inversion.”

**Sources:**

- [Chin-Wei Huang, Ricky T. Q. Chen, Christos Tsirigotis, Aaron Courville, Convex Potential Flows: Universal Probability Distributions with Optimal Transport and Convex Optimization, arXiv:2012.05942v2 (2021)](https://arxiv.org/abs/2012.05942v2)

### The value +∞ turns constrained convex problems into unconstrained ones

**Remember:** A wall of height infinity replaces a constraint.

*Makes the theorem clean to state or prove.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** The indicator function of a set A is 0 on A and +∞ outside A. A function with values in \[−∞, +∞\] is convex if its epigraph, the set of points on or above its graph, is convex.

**Problem.** Write ι for the indicator function of A. Minimizing a convex f over a convex set A is the same as minimizing f + ι over the whole space. Theorems about unconstrained minima then apply directly to constrained ones.

**How the definition helps.** With the value +∞, a constraint becomes a term of the function, so one theory covers both cases. The indicator function is convex exactly when A is convex, and lower semicontinuous exactly when A is closed. The sum of the indicator functions of A and B is the indicator function of their intersection. The subgradients of the indicator function of A at a point x form the normal cone of A at x. That cone holds the vectors p with ⟨p, y − x⟩ ≤ 0 for all y in A (our own). So the condition 0 ∈ ∂(f + ι) gives the usual condition for a constrained minimum, when the sum rule for subdifferentials applies (our own). The definition of convexity uses only weights t strictly between 0 and 1, so that the undefined product 0 · ∞ never appears.

**Wikipedia:** [Indicator function (convex analysis)](https://en.wikipedia.org/wiki/Indicator_function_%28convex_analysis%29), [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “It is similar to the indicator function used in probability, but assigns +∞ instead of 0 to the outside elements.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### Eudoxus reals multiply by composition, so multiplication is associative for free

**Remember:** Composition is associative before passing to classes.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 3: graduate.

**Definition.** An almost homomorphism is a function f from ℤ to ℤ for which f(m + n) − f(m) − f(n) is bounded. A Eudoxus real is a class of such functions, where two functions count as the same if their difference is bounded. Add classes by adding functions, and multiply them by composing functions. The usual constructions use Dedekind cuts or classes of Cauchy sequences.

**Problem.** Multiplication of Eudoxus reals is associative.

**How the definition helps.** Composition of functions is associative, so associativity holds before passing to classes (our own). The nLab notes that one distributive law also holds before passing to classes. Commutativity needs a real proof, because composition is not commutative in general (our own). The work moves to proving that composition respects bounded differences and that the result is the usual real line (our own).

**nLab:** [Eudoxus real number](https://ncatlab.org/nlab/show/Eudoxus+real+number). It says: “becomes a commutative ring whose addition and multiplication are descended from + and ∘ on AL(ℤ).”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided Dedekind cuts put a rational between any two ordered reals

**Remember:** An overlap of the two cuts already contains the required rational.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 03F60. arXiv math.CA. Level 3: graduate.

**Definition.** A two-sided Dedekind cut is a pair of nonempty sets of rationals, a lower set L and an upper set U. L is downward closed with no greatest member, and U is upward closed with no least member. Every member of L is below every member of U, and for rationals a &lt; b, either a ∈ L or b ∈ U. Define x &lt; y when the upper set of x and the lower set of y share a rational.

**Problem.** If x &lt; y are real numbers, then a rational number lies strictly between them.

**How the definition helps.** With this order, x &lt; y already means that a rational lies in the upper set of x and the lower set of y. The nLab defines the order this way and proves that it is a linear order. That rational a satisfies x &lt; a &lt; y once each rational is read as its own cut (our own). With Cauchy sequences, reals are ordered by eventual separation (our own). There, one must extract a rational from the gap between two sequences (our own). The work moves to proving that each rational gives its expected cut and that the order is linear (our own).

**nLab:** [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “We define x &lt; y to mean that there exists a rational number a such that x &lt; a &lt; y”

**Sources:** none listed. No primary source with a working link was found.

### Scaling ratios invert growth indices

**Remember:** An inverse undoes a scale factor, so it inverts the index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A12 (Rate of growth of functions, orders of infinity, slowly varying functions). arXiv math.CA. Level 3: graduate.

**Definition.** Let f be positive and measurable on a positive half-line. It varies regularly with index ρ if f(ax)/f(x) tends to a raised to ρ as x tends to infinity, for each a &gt; 0.

**Problem.** If a positive, continuous, strictly increasing function varies regularly with index ρ &gt; 0, its inverse varies regularly with index 1/ρ.

**How the definition helps.** Ratios express the inverse law even when a power alone does not describe growth (our own). Fix a positive multiplier a and choose positive numbers b and c straddling a raised to 1/ρ (our own). For large x, regular variation gives f(bx) &lt; a f(x) &lt; f(cx) (our own). Taking inverses and dividing by x traps the inverse ratio between b and c (our own). The positive index and monotonicity imply unbounded growth, so the inverse covers every sufficiently large argument (our own). Bringing b and c together gives the limit (our own).

**Wikipedia:** [Slowly varying function](https://en.wikipedia.org/wiki/Slowly_varying_function). It says: “Similarly, a regularly varying function is a function of a real variable whose behaviour at infinity is similar to the behaviour of a power law function”

**Sources:** none listed. No primary source with a working link was found.

### Dini continuity gives pointwise Fourier convergence

**Remember:** Dini continuity controls how much small oscillations can accumulate.

*Rules out counterexamples.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 42A20. arXiv math.CA. Level 3: graduate.

**Definition.** For a function f and a point x, let ω(r) be the supremum of \|f(y) − f(x)\| over points within distance r. Dini continuity at x means that ω(r)/r has finite integral near zero.

**Problem.** The Fourier series of an integrable periodic function converges to its value at every point where it is Dini continuous.

**How the definition helps.** Our own explanation uses the Dini bound to make the amplitude in the Fourier error integral integrable. The Riemann–Lebesgue lemma then makes its oscillatory integral tend to zero, in our own proof. Ordinary continuity cannot substitute, as du Bois-Reymond’s continuous periodic example has a Fourier series that diverges at a point, in our own comparison.

**Wikipedia:** [Dini test](https://en.wikipedia.org/wiki/Dini_test). It says: “Then the Fourier series of f converges at t to f(t).”

**Sources:** none listed. No primary source with a working link was found.

### Everywhere approximate continuity gives intermediate values

**Remember:** Approximate continuity everywhere still rules out jumps over values.

*Rules out counterexamples.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A24. arXiv math.CA. Level 3: graduate.

**Definition.** A measurable real function is approximately continuous at a point if nearby points where it differs by more than any fixed tolerance have density zero. Density zero means that their fraction in shrinking intervals about the point tends to zero.

**Problem.** A real function approximately continuous at every point of an open interval takes every value between any two of its values.

**How the definition helps.** In our own proof, approximate continuity everywhere makes each bounded function in this class the derivative of its indefinite integral. At every point, the average absolute difference from the point value tends to zero on shrinking intervals. This gives the derivative there. Darboux’s theorem says derivatives take every intermediate value. For an unbounded function, first apply arctangent, which is bounded, continuous, and strictly increasing. Our own counterexample takes zero on the negative half-line and one elsewhere. It is approximately continuous almost everywhere but skips one half.

**Wikipedia:** [Approximately continuous function](https://en.wikipedia.org/wiki/Approximately_continuous_function). It says: “when f is essentially bounded, its points of approximate continuity coincide with its Lebesgue points.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity with infinitesimals gives a short Heine–Cantor proof

**Remember:** Uniform continuity checks closeness at all hyperreal points, not only real ones.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26E35. arXiv math.CA, math.LO. Level 3: graduate.

**Definition.** In nonstandard analysis, f has a natural extension f\* to the hyperreals. Then f is uniformly continuous on I if f\* sends any two infinitely close points of I\* to infinitely close values. Plain continuity asks this only when one of the two points is a real number.

**Problem.** Every continuous function on a closed bounded interval is uniformly continuous.

**How the definition helps.** The two definitions differ only in which points are tested, so the theorem reduces to finding a real point near any hyperreal point. On a closed bounded interval, every hyperreal point x has a standard part st(x) in I. If x and y are infinitely close, both are infinitely close to st(x). By continuity at st(x), f(x) and f(y) are then infinitely close to f(st(x)). The definition needs two quantifiers, while the epsilon-delta definition needs four (our own). The squaring function on the reals fails the test at an infinite hyperreal point N. The work moves into building the hyperreals and proving the transfer principle. That principle says a first-order statement holds for the reals exactly when it holds for the hyperreals.

**Wikipedia:** [Nonstandard calculus](https://en.wikipedia.org/wiki/Nonstandard_calculus), [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “The fact that a continuous function on a compact interval I is necessarily uniformly continuous (the Heine–Cantor theorem) admits a succinct hyperreal proof.”

**Sources:**

- [Abraham Robinson, Non-standard analysis, Indagationes Mathematicae (Proceedings) 64 (1961)](https://doi.org/10.1016/S1385-7258(61)50044-3)

### Baire-one functions have dense continuity points

**Remember:** Pointwise limits of continuous functions have points of continuity in every interval.

*Rules out counterexamples.* MSC 26A21 (Classification of real functions; Baire classification of sets and functions), 26A15. arXiv math.CA. Level 3: graduate.

**Definition.** A real function is of Baire class one if it is the pointwise limit of a sequence of continuous functions.

**Problem.** Every Baire class one real function on the real line is continuous on a dense set of points.

**How the definition helps.** Continuous approximations give closed sets where every pair of terms after index N differs by at most ε (our own). Pointwise convergence makes these sets cover every closed interval (our own). The Baire category theorem gives one such set containing a smaller interval of positive length (our own). There the limit stays within ε of one continuous term (our own). Shrink the interval until that term varies by less than ε, so the limit varies by at most 3ε (our own). For each ε the resulting open intervals have dense union (our own). Baire’s theorem gives a dense intersection for ε = 1/n, and the limit is continuous at every point there (our own).

**Wikipedia:** [Baire function](https://en.wikipedia.org/wiki/Baire_function). It says: “the pointwise limit of a sequence of Baire class 0 functions.”

**Sources:** none listed. No primary source with a working link was found.

### Dini derivatives exist for every function, so Denjoy–Young–Saks needs no hypothesis

**Remember:** Four one-sided upper and lower slopes always exist.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 26A27. arXiv math.CA. Level 3: graduate.

**Definition.** The four Dini derivatives of f at t are the lim sup and lim inf of the difference quotient. They are taken as h tends to 0 from the right, and from the left. They take values in the extended reals.

**Problem.** Take any real function f on an interval. At almost every point, either f has a finite derivative, or the Dini derivatives follow one of three fixed patterns.

**How the definition helps.** A lim sup or lim inf always exists in the extended reals, so the four Dini derivatives are defined for every function at every point. This lets a theorem speak about arbitrary functions, with no assumption of differentiability. A function is differentiable at a point exactly when all four agree and are finite. Denjoy proved the theorem for continuous functions in 1915. Grace Chisholm Young extended it to measurable functions in 1917, and Saks to all functions in 1924. Those proofs are still long (our own).

**Wikipedia:** [Dini derivative](https://en.wikipedia.org/wiki/Dini_derivative), [Denjoy–Young–Saks theorem](https://en.wikipedia.org/wiki/Denjoy%E2%80%93Young%E2%80%93Saks_theorem). It says: “The functions are defined in terms of the infimum and supremum in order to make the Dini derivatives as "bullet proof" as possible, so that the Dini derivatives are well-defined for almost all functions”

**Sources:**

- [Grace Chisholm Young, On the derivates of a function, Proceedings of the London Mathematical Society 15 (1917) 360–384](https://doi.org/10.1112/plms/s2-15.1.360)

### The Lebesgue point condition makes the indefinite integral differentiable there

**Remember:** A vanishing average error forces the right slope.

*True by definition. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 28A15. arXiv math.CA. Level 3: graduate.

**Definition.** Let f be locally integrable. Call x a Lebesgue point of f when the average of \|f − f(x)\| over \[x − h, x + h\] tends to zero. This weakens continuity at x, which is the usual condition in the fundamental theorem of calculus.

**Problem.** Let F(x) be the integral of f from a to x. Then F′(x) = f(x) at every Lebesgue point x of f inside the interval.

**How the definition helps.** The definition bounds exactly the error that the difference quotient needs, in our own proof. In our own proof, the difference quotient error is at most twice the average of \|f − f(x)\| over \[x − \|h\|, x + \|h\|\]. The Lebesgue differentiation theorem carries the work, because it shows that almost every point is a Lebesgue point.

**Wikipedia:** [Lebesgue differentiation theorem](https://en.wikipedia.org/wiki/Lebesgue_differentiation_theorem). It says: “The points x for which this is true are called the Lebesgue points of f.”

**Sources:** none listed. No primary source with a working link was found.

### Gamma normalization adds fractional orders

**Remember:** Normalized integration kernels add their orders when convolved.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals), 44A35. arXiv math.CA. Level 3: graduate.

**Definition.** For α &gt; 0, set k(t) = exp((α − 1) log t)/Γ(α) for t &gt; 0. Here Γ is the gamma function, with Γ(n + 1) = n! for nonnegative integers n. Define integration of order α by integrating k(t − s)f(s) from 0 to t.

**Problem.** Take an integrable input on \[0,T\] and positive orders α and β. Integrating successively gives integration of order α + β almost everywhere.

**How the definition helps.** The gamma factors cancel the constant produced by convolving two power kernels (our own). Substituting s = tu reduces that constant to an integral on \[0,1\], called the beta integral (our own). The beta–gamma identity evaluates it as Γ(α)Γ(β)/Γ(α + β) (our own). At integer orders the same rule recovers repeated ordinary integration (our own).

**Paper or page:** [An extension of the Cartwright-McMullen theorem in fractional calculus for the smooth Stieltjes case](https://arxiv.org/abs/2309.07148v1). It says: “The Index Law holds. That is, $J<sub>a<sup>+</sub><sup>\\alpha</sup> </sup> \\circ J<sub>a<sup>+</sub><sup>\\beta</sup> </sup>=J<sub>a<sup>+</sub><sup>\\alpha</sup> +\\beta </sup>$ for all $\\alpha ,\\beta &gt; 0$.”

**Sources:** none listed. No primary source with a working link was found.

### Free tags turn gauge Riemann sums into the Lebesgue integral

**Remember:** Free the tags, and the gauge integral becomes Lebesgue's.

*Makes the theorem clean to state or prove.* MSC 26A39 (Denjoy and Perron integrals, other special integrals), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** A free tagged partition is δ-fine if each piece lies within δ(t) of its tag t. The tag need not lie in its piece. The McShane integral is the limit of Riemann sums over δ-fine free tagged partitions.

**Problem.** A function on \[a, b\] is McShane integrable exactly when it is Lebesgue integrable, with the same integral.

**How the definition helps.** Free tags make the McShane integral absolute: if f is integrable, so is \|f\|. This rules out the conditionally convergent integrals that the Henstock–Kurzweil integral allows, such as some derivatives. So the Lebesgue integral gets a definition by Riemann sums, with no measure theory. The page cites McShane's 1973 paper, A Unified Theory of Integration. The work moves into the proof that McShane and Lebesgue integrability agree. The cost is the fundamental theorem of calculus for every derivative, which holds for Henstock–Kurzweil but not for McShane.

**Wikipedia:** [McShane integral](https://en.wikipedia.org/wiki/McShane_integral). It says: “The fact that the tags are allowed to be outside the subintervals is why the partition is called free. It's also the only difference between the definitions of the Henstock-Kurzweil integral and the McShane integral.”

**Sources:**

- [E. J. McShane, A unified theory of integration, The American Mathematical Monthly 80 (1973) 349–359](https://doi.org/10.1080/00029890.1973.11993291)

### Stieltjes integrals describe every continuous linear functional on C\[0, 1\]

**Remember:** Weigh each piece by the jump of g, not its length.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 28C05. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Riemann–Stieltjes integral of f with respect to g is the limit of sums Σ f(cᵢ)(g(xᵢ) − g(xᵢ₋₁)) over finer partitions. The integrator g need not be continuous or differentiable. A function of bounded variation is a difference of two increasing functions.

**Problem.** Every continuous linear functional A on C\[0, 1\] has the form A(f) = ∫ f dα for some function α of bounded variation.

**How the definition helps.** The Stieltjes integral gives one formula for point masses, densities and mixtures, so every functional fits one statement. Evaluation at a point, f ↦ f(1/2), is a continuous linear functional with no density. With a step function α that jumps by 1 at 1/2, it becomes ∫ f dα (our own). The existence theorem says ∫ f dg exists when f is continuous and g has bounded variation. Riesz proved the theorem in 1909. Later the theorem was restated with measures, which extends it to locally compact spaces.

**Wikipedia:** [Riesz–Markov–Kakutani representation theorem](https://en.wikipedia.org/wiki/Riesz%E2%80%93Markov%E2%80%93Kakutani_representation_theorem), [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “The Riemann–Stieltjes integral appears in the original formulation of F. Riesz's theorem which represents the dual space of the Banach space C\[a,b\] of continuous functions in an interval \[a,b\] as Riemann–Stieltjes integrals against functions of bounded variation.”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues, Annales de la Faculté des sciences de Toulouse 8 (1894)](https://doi.org/10.5802/afst.108)

### Absolute continuity as an indefinite integral makes zero derivative force constancy

**Remember:** If the integrand is zero almost everywhere, the integral never moves.

*True by definition. Confidence: medium.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A42. arXiv math.CA. Level 3: graduate.

**Definition.** Call f absolutely continuous on \[a, b\] if f(x) = f(a) plus the integral of g from a to x, for some Lebesgue integrable g. The elementary definition asks that, for every ε &gt; 0, some δ &gt; 0 works as follows. Whenever disjoint subintervals have total length below δ, the total change of f on them is below ε.

**Problem.** If f is absolutely continuous on \[a, b\] and f′ = 0 almost everywhere, then f is constant. Almost everywhere means outside a set of length zero.

**How the definition helps.** With the integral definition, the claim reduces to the integrand being zero almost everywhere (our own). The nLab notes that the integrand g equals f′ almost everywhere. So g = 0 almost everywhere, and every integral of g is zero (our own). That step uses Lebesgue's differentiation theorem, so the definition does not remove all the work (our own). The rest of the work moves into the theorem that the two definitions agree. The nLab calls it the fundamental theorem of calculus for the Lebesgue integral.

**nLab:** [absolutely continuous function](https://ncatlab.org/nlab/show/absolutely+continuous+function). It says: “That the next definition is equivalent is the fundamental theorem of calculus for the Lebesgue integral on the real line.”

**Sources:** none listed. No primary source with a working link was found.

### Defining absolute continuity by indefinite integrals reduces the fundamental theorem to differentiation

**Remember:** An integrable density generates every increment.

*True by definition. Confidence: medium.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A36. arXiv math.CA. Level 3: graduate.

**Definition.** Take an absolutely continuous function on \[a, b\] to be one of the form f(x) = f(a) + ∫ₐˣ g for some Lebesgue integrable g. The usual definition asks that Σ\|f(bᵢ) − f(aᵢ)\| be small whenever disjoint intervals (aᵢ, bᵢ) have small total length.

**Problem.** An absolutely continuous function f on \[a, b\] is differentiable almost everywhere, and f(x) = f(a) + ∫ₐˣ f′ for all x.

**How the definition helps.** With the integral definition, a density g is given, and only g = f′ almost everywhere remains, in our own account. The Lebesgue differentiation theorem supplies that step. The main work moves into the theorem that the integral form agrees with the interval definition. Wikipedia lists the two as equivalent conditions.

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “there exists a Lebesgue integrable function g on \[a,b\] such that f(x) = f(a) + ∫ₐˣ g(t) dt for all x in \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Absolute monotonicity forces analyticity

**Remember:** Signs at every derivative order keep Taylor remainders under control.

*Rules out counterexamples.* MSC 26A48 (Monotonic functions, generalizations), 26E05. arXiv math.CA. Level 3: graduate.

**Definition.** A smooth real function is absolutely monotone on an interval if it and every derivative are nonnegative there.

**Problem.** Every absolutely monotone function on an open interval is real analytic there. That means its Taylor series equals the function near each point.

**How the definition helps.** In our own explanation, the derivative signs bound Taylor coefficients using the function value at a point farther right. Bernstein’s theorem uses this control to show that the Taylor remainder tends to zero. Our own counterexample equals exp(−1/x) for x &gt; 0 and zero elsewhere. It is smooth and nondecreasing, yet its Taylor series at zero vanishes while the function is positive immediately to the right.

**Wikipedia:** [Absolutely and completely monotonic functions and sequences](https://en.wikipedia.org/wiki/Absolutely_and_completely_monotonic_functions_and_sequences). It says: “A function that is absolutely monotonic on the open interval (a,b) can be extended to an analytic function on the open disk”

**Sources:** none listed. No primary source with a working link was found.

### Completely monotone as a Laplace transform makes derivative signs alternate

**Remember:** Each derivative brings a factor −t, so the signs alternate.

*True by definition. Confidence: medium.* MSC 26A48 (Monotonic functions, generalizations), 44A10. arXiv math.CA. Level 3: graduate.

**Definition.** Call f on (0, ∞) completely monotone if f(x) is the integral of exp(−xt) against a positive measure μ on \[0, ∞). The integral must be finite for every x &gt; 0. So f is the Laplace transform of μ. The usual definition asks that f be smooth with (−1)ⁿf⁽ⁿ⁾ ≥ 0 for every n ≥ 0.

**Problem.** Let f be the Laplace transform of a positive measure, finite for every x &gt; 0. Then f is smooth, and (−1)ⁿf⁽ⁿ⁾(x) ≥ 0 for every n and every x &gt; 0.

**How the definition helps.** With the Laplace transform definition, differentiating under the integral shows the signs directly (our own). It gives (−1)ⁿf⁽ⁿ⁾(x) as the integral of tⁿexp(−xt), which is nonnegative (our own). For x near x₀, bound tⁿexp(−xt) by a constant times exp(−x₀t/2) (our own). That bound is integrable because f(x₀/2) is finite (our own). The work moves into Bernstein's theorem, the hard converse. It says that every completely monotone function in the usual sense is such a Laplace transform.

**Wikipedia:** [Bernstein's theorem on monotone functions](https://en.wikipedia.org/wiki/Bernstein%27s_theorem_on_monotone_functions). It says: “it is the Laplace transform of a positive Borel measure”

**Sources:**

- [Serge Bernstein, Sur les fonctions absolument monotones, Acta Mathematica 52 (1929), 1–66.](https://doi.org/10.1007/BF02592679)

### Affine minorants prove conditional Jensen

**Remember:** Average each line first, then take the supremum.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** A finite convex function on the whole line is the supremum of countably many affine minorants. These are straight lines that lie below the function. This describes the same class as requiring the function to lie below each chord between two of its points.

**Problem.** Let X and f(X) be integrable, with f finite and convex on the line. Given the same information, f of the conditional mean of X is at most the conditional mean of f(X), with probability one.

**How the definition helps.** Representing f by countably many lines lets conditional averaging preserve each lower bound simultaneously (our own). A conditional mean averages given a specified collection of events and commutes with affine functions (our own). Its monotonicity gives the desired inequality for each line outside a set of probability zero (our own). Take the supremum outside the union of those exceptional sets, which still has probability zero (our own). The supporting-line theorem supplies lines at rational points, and local bounds on slopes make their supremum equal f everywhere (our own).

**Paper or page:** [Conditional Jensen's Inequality](https://proofwiki.org/wiki/Conditional_Jensen's_Inequality). It says: “f(E\[X \| 𝒢\]) ≤ E\[f(X) \| 𝒢\]”

**Sources:** none listed. No primary source with a working link was found.

### Averaging gradients gives a center that splits expected Bregman divergence exactly

**Remember:** Average gradients to find the center for a random second argument.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 62C05. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** Take a differentiable strictly convex F. Its Bregman divergence D(s‖x) = F(s) − F(x) − ⟨∇F(x), s − x⟩ is the gap between F and its tangent plane at x. For a random second argument X, the center x\* is the point with ∇F(x\*) = E\[∇F(X)\], which minimizes E\[D(z‖X)\] (Lemma 2.2).

**Problem.** If x\* exists and the expectations are finite, then E\[D(s‖X)\] = D(s‖x\*) + E\[D(x\*‖X)\] for every s. This gives a bias–variance decomposition for squared error and for the log loss of exponential families.

**How the definition helps.** The center is chosen so that the linear terms cancel in expectation, so the proof takes two lines. In our own computation, D(s‖X) − D(x\*‖X) = F(s) − F(x\*) − ⟨∇F(X), s − x\*⟩. Taking expectations and using ∇F(x\*) = E\[∇F(X)\] gives D(s‖x\*). The divergence is not symmetric. For a random first argument the center is instead the ordinary mean E\[X\].

**Paper or page:** [A Generalized Bias-Variance Decomposition for Bregman Divergences](https://arxiv.org/abs/2511.08789v1). It says: “Let F : 𝒮 → ℝ be a strictly convex differentiable function, and X be a random variable on 𝒮. Then for any point s ∈ 𝒮, the expected Bregman divergences have the following exact decomposition: 𝔼\[D<sub>F</sub>\[s\|\|X\]\] = D<sub>F</sub>\[s\|\|x\*\] + 𝔼\[D<sub>F</sub>\[x\*\|\|X\]\], where x\* = argmin<sub>z</sub> 𝔼\[D<sub>F</sub>\[z\|\|X\]\]”

**Sources:**

- [David Pfau, A Generalized Bias-Variance Decomposition for Bregman Divergences, arXiv:2511.08789v1 (2025)](https://arxiv.org/abs/2511.08789v1)

### Besides ±∞, only proper closed convex functions equal their biconjugate

**Remember:** Proper, closed and convex means the double conjugate gives f back.

*Rules out counterexamples.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 49N15. arXiv math.OC, math.CA. Level 3: graduate.

**Definition.** A convex function with values in \[−∞, +∞\] is proper if it never takes the value −∞ and is finite at some point. It is lower semicontinuous, or closed, if f(x) ≤ lim inf f(xₙ) whenever xₙ → x.

**Problem.** When is f equal to its biconjugate f\*\*, the conjugate of its conjugate? Always f\*\* ≤ f.

**How the definition helps.** The conditions exclude exactly the functions that the supporting lines of the graph cannot recover. In a Hausdorff locally convex space, a setting that includes all normed spaces, f = f\*\* holds exactly when f is proper, closed and convex. The only other cases are f identically +∞ or −∞. A convex function that is −∞ on part of its domain has conjugate +∞ everywhere, so its biconjugate is −∞ everywhere (our own). A convex function with a jump up at the end of an interval is not lower semicontinuous, and f\*\* lowers that value (our own). Properness also excludes minimization problems that are trivial, where −∞ is the minimum. Every proper convex function on ℝⁿ also has an affine function below it (our own).

**Wikipedia:** [Fenchel–Moreau theorem](https://en.wikipedia.org/wiki/Fenchel%E2%80%93Moreau_theorem), [Proper convex function](https://en.wikipedia.org/wiki/Proper_convex_function). It says: “a proper convex function is an extended real-valued convex function with a non-empty domain, that never takes on the value −∞ and also is not identically equal to +∞.”

**Sources:**

- [W. Fenchel, On conjugate convex functions, Canadian Journal of Mathematics 1 (1949)](https://doi.org/10.4153/CJM-1949-007-x)
- [J. J. Moreau, Proximité et dualité dans un espace hilbertien, Bulletin de la Société Mathématique de France 93 (1965)](https://doi.org/10.24033/bsmf.1625)

### Strict epigraphs make partial minimization a projection

**Remember:** A linear projection of a convex set stays convex.

*True by definition. Confidence: medium.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** The strict epigraph of f is the set of pairs (x, t) with t &gt; f(x). One can define convexity by convexity of this set or by the chord inequality. That inequality bounds the value at a weighted average by the weighted average of the two values. Joint convexity means the chord inequality treats x and y as one input.

**Problem.** Let f(x, y) be jointly convex and let C be a convex set. If the infimum of f(x, y) over y in C is never −∞, then it is convex as a function of x.

**How the definition helps.** The strict-epigraph definition turns partial minimization into a linear projection, which preserves convexity. Our own proof is that a height above the infimum exceeds f(x, y) for at least one y in C. Thus the strict epigraph is the projection obtained by omitting y after restricting it to C. The ordinary epigraph need not project to the ordinary epigraph if the infimum is not attained. The chord proof instead needs two near-minimizers and a limit. The work in relating the definitions is the short proof that convexity of the strict epigraph is equivalent to the chord inequality.

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “provided that C is a convex set and that g(x) ≠ −∞.”

**Sources:** none listed. No primary source with a working link was found.

### The epigraph cone shows why a perspective stays convex

**Remember:** A perspective scales a convex epigraph into a convex cone.

*True by definition. Confidence: medium.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 52A41. arXiv math.OC. Level 3: graduate.

**Definition.** The perspective of f is g(x, t) = t·f(x/t) for t &gt; 0 and x/t in the domain of f. Its epigraph is the set of points (x, t, s) with s ≥ g(x, t). A function is convex exactly when its epigraph is convex.

**Problem.** If f is convex, its perspective is jointly convex in (x, t).

**How the definition helps.** The epigraph definition makes the proof a cone construction on a convex set. Our own argument is that a point (x, t, s) lies in the epigraph of g exactly when (x/t, s/t) lies in that of f. Thus the new epigraph consists of positive multiples of the old one placed at height one. Positive combinations of these points remain in the set, by dividing by their new height and using convexity at height one. The chord definition instead requires computing the new weights on the divided inputs. The work in switching definitions is the equivalence of the epigraph and chord tests.

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “If f is convex, then its perspective g(x, t) = t f(x/t) with domain {(x,t) : x/t ∈ Dom(f), t &gt; 0} is convex.”

**Sources:** none listed. No primary source with a working link was found.

### The duality definition of total variation makes it lower semicontinuous in L¹

**Remember:** A supremum of continuous functionals is lower semicontinuous.

*True by definition.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation), 49J45. arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** For f in L¹ of an open set Ω in ℝⁿ, define its total variation as the supremum of the integrals of f div φ. Here φ ranges over continuously differentiable vector fields with compact support in Ω and \|φ\| ≤ 1 everywhere. For continuously differentiable f, this equals the integral of \|∇f\|.

**Problem.** If fₙ → f in L¹(Ω), then the total variation of f is at most the limit inferior of the total variations of fₙ.

**How the definition helps.** The definition makes total variation a supremum of functionals that are continuous for L¹ convergence, and such a supremum is lower semicontinuous. Each integral of fₙ div φ converges, because div φ is bounded. Wikipedia's article on bounded variation gives this argument. With a definition through the gradient, the statement does not even apply to limits with jumps, in our own account. The work moves to the Riesz representation theorem, which turns finite variation into a vector measure for the derivative.

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation), [Total variation](https://en.wikipedia.org/wiki/Total_variation). It says: “lim infₙ→∞ V(uₙ,Ω) ≥ V(u,Ω) which is exactly the definition of lower semicontinuity.”

**Sources:** none listed. No primary source with a working link was found.

### Testing smoothness on curves gives the exponential law for smooth maps

**Remember:** All derivatives that ought to exist do exist.

*Makes the theorem clean to state or prove.* MSC 26E15 (Calculus of functions on infinite-dimensional spaces), 58B10. arXiv math.FA, math.DG. Level 3: graduate.

**Definition.** A convenient vector space is a locally convex vector space E with one extra property: a curve c : ℝ → E is smooth whenever l ∘ c is smooth for every continuous linear map l : E → ℝ. An equivalent condition is that every Mackey–Cauchy sequence in E converges (a Mackey–Cauchy sequence is one whose differences shrink to zero inside multiples of one fixed bounded set). A map between such spaces is smooth if it sends smooth curves to smooth curves.

**Problem.** Smooth maps between infinite-dimensional spaces should satisfy the exponential law C∞(X × Y, Z) ≅ C∞(X, C∞(Y, Z)). In words, a smooth map of two variables should be the same as a smooth map from X into the space of smooth maps from Y to Z.

**How the definition helps.** Testing smoothness on curves makes the space of smooth maps a space of the same kind, so the exponential law holds. In detail, the space C∞(X, Y) of smooth maps is again a convenient vector space. The category of convenient vector spaces and smooth maps is cartesian closed (it has products and function spaces that obey the exponential law). This cartesian closedness is the main theorem of Kriegl and Michor, who do the real work of building calculus in this setting. In our own reading, not the nLab's, Banach-space or Fréchet-space calculus has no such general exponential law, because spaces of smooth maps leave those classes. Boman's theorem shows that in finite dimensions the curve test gives the usual smoothness. So nothing is lost there.

**nLab:** [convenient vector space](https://ncatlab.org/nlab/show/convenient+vector+space), [Boman's theorem](https://ncatlab.org/nlab/show/Boman%27s+theorem), [manifold structure of mapping spaces](https://ncatlab.org/nlab/show/manifold+structure+of+mapping+spaces). It says: “The category of convenient vector spaces and smooth functions between them is a cartesian closed category.”

**Sources:**

- [Andreas Kriegl, Peter W. Michor, The convenient setting of global analysis, Mathematical Surveys and Monographs 53, AMS (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)
- [Jan Boman, Differentiability of a function and of its compositions with functions of one variable, Mathematica Scandinavica 20 (1967) 249–268](https://journals.msp.org/mscand/article/view/2491)

### Infinitesimals make open, closed and compact one-quantifier conditions

**Remember:** Compact: every hyperreal point is finite, and its standard part stays in the set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26E35 (Nonstandard analysis), 54J05, 03H05. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** The hyperreal numbers \*ℝ are an ultrapower of ℝ (classes of sequences of reals, compared along an ultrafilter). They contain infinitesimals and infinite numbers. Every finite hyperreal x is infinitely close to a unique real number st(x), its standard part. The set of hyperreals infinitely close to a real number r is the monad of r.

**Problem.** Give short characterizations of open, closed and compact subsets of ℝ. Each should use one quantifier over hyperreal points instead of nested ε–δ conditions.

**How the definition helps.** Monads and standard parts replace each nested ε–δ condition by one check on hyperreal points. Let E ⊆ ℝ, and let \*E be its extension to the hyperreals. E is open if and only if the monad of each point of E lies in \*E. E is closed if and only if st(x) ∈ E for every finite x in \*E. E is compact if and only if every x in \*E is finite with st(x) ∈ E. The nLab calls these an elementary fact. The real content is the transfer principle, which follows from Łoś's theorem on ultraproducts and lets statements move between ℝ and \*ℝ.

**nLab:** [nonstandard analysis](https://ncatlab.org/nlab/show/nonstandard+analysis), [ultraproduct](https://ncatlab.org/nlab/show/ultraproduct). It says: “a subset E ⊂ ℝ is open iff μ(r) ⊂ \*E for all r ∈ E; E is closed iff st(x) ∈ E for all finite x ∈ \*E; and E is compact iff, for all x ∈ \*E, x is finite and st(x) ∈ E.”

**Sources:**

- [Abraham Robinson, Non-standard Analysis, North-Holland (1966); revised edition, Princeton University Press (1996)](https://doi.org/10.1515/9781400884223)

### A dense set of non-zeros gives a constructive intermediate value theorem

**Remember:** If f never sits at zero on a whole interval, you can catch its zero.

*Rules out counterexamples. Confidence: medium.* MSC 26E40 (Constructive real analysis), 03F60, 26A15. arXiv math.CA, math.LO. Level 3: graduate.

**Definition.** Add a hypothesis to the intermediate value theorem. The function f is uniformly continuous, and between any two points a &lt; b there is a point c with \|f(c)\| &gt; 0. In words, the set where f is not zero is dense. Related versions ask that f be locally nonzero.

**Problem.** The intermediate value theorem says: if f : \[0,1\] → ℝ is continuous with f(0) &lt; 0 &lt; f(1), then f(c) = 0 for some c. As usually stated, it cannot be proved in constructive mathematics (mathematics without the law of excluded middle).

**How the definition helps.** The extra hypothesis lets the bisection method always step to a point where the sign of f is known. So the search for the zero converges constructively. Our own reading of the trouble that the hypothesis removes: a function can stay at or near zero on a whole interval, and then no finite computation can decide on which side the zero is. Classically the extra hypothesis costs nothing. If \|f(c)\| &gt; 0 for every c, the hypothesis holds and gives a zero, which is a contradiction. So the classical theorem follows. Even read classically, the constructive versions are at first sight weaker results, as the nLab notes.

**nLab:** [intermediate value theorem](https://ncatlab.org/nlab/show/intermediate+value+theorem). It says: “As normally stated, the IVT is not valid in constructive mathematics, although there are constructively valid versions. These versions either weaken the conclusion to an approximate zero, or to strengthen the hypothesis”

**Sources:**

- [Auke B. Booij, Extensional constructive real analysis via locators (2018), arXiv:1805.06781](https://arxiv.org/abs/1805.06781)
- [Andrej Bauer, Five stages of accepting constructive mathematics, Bull. Amer. Math. Soc. 54 (2017) 481–498](https://doi.org/10.1090/bull/1556)

### Dedekind real numbers are always Cauchy complete

**Remember:** A cut gives all rational bounds at once, so no choices are needed.

*Rules out counterexamples.* MSC 26E40 (Constructive real analysis), 03F60. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** A Dedekind real number is a pair (L, U) of sets of rationals: the rationals below the number and the rationals above it. Both sets are inhabited (have an element), L has no largest element, U has no smallest, and every element of L is below every element of U. The pair is also located: for rationals a &lt; b, either a is in L or b is in U. A Cauchy real number is an equivalence class of Cauchy sequences of rationals, with or without a given modulus of convergence (a function that says how far along the sequence one must go for a given accuracy).

**Problem.** The real numbers should be Cauchy complete: every Cauchy sequence of real numbers converges to a real number.

**How the definition helps.** A cut describes a real number by all its rational bounds at once, so no sequence of choices is needed. In constructive mathematics without countable choice, a Cauchy sequence of Cauchy real numbers need not converge to a Cauchy real number. The problem is that one cannot lift it to a sequence of representing sequences in order to diagonalize. Lubarsky constructs a countermodel. The Dedekind real numbers are always Cauchy complete, so the problem disappears with them. The modulated Cauchy reals (those with a given modulus) keep some advantages. For example, they make sense in predicative mathematics (mathematics that avoids power sets), where the Dedekind reals need power sets.

**nLab:** [Cauchy real number](https://ncatlab.org/nlab/show/Cauchy+real+number), [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “a Cauchy sequence (even a modulated one) of Cauchy real numbers need not converge to another Cauchy real number (though it always does converge to a Dedekind real number, since the Dedekind real numbers are always Cauchy complete).”

**Sources:**

- [Robert S. Lubarsky, On the Cauchy completeness of the constructive Cauchy reals, Electronic Notes in Theoretical Computer Science 167 (2007) 225–254](https://doi.org/10.1016/j.entcs.2006.09.012)

### With lower reals, every inhabited set has a supremum constructively

**Remember:** Know a number only from below, and a supremum is just a union.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26E40 (Constructive real analysis), 03F60. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** A lower real number is an inhabited, open, downward-closed set of rational numbers: the set of rationals below the number. Inhabited means that one can show an element of the set, and open means that the set has no largest element. The set may be all of ℚ, which stands for +∞. Upper reals are defined in the same way with upward-closed sets.

**Problem.** In constructive mathematics (mathematics without the law of excluded middle), a bounded inhabited set of real numbers need not have a supremum. One wants a kind of number in which every inhabited set has a supremum.

**How the definition helps.** For lower reals, the supremum of an inhabited set is simply the union of their sets of rationals, and this union is again a lower real. It is a bounded lower real exactly when the set has a bounded upper bound; otherwise it is +∞. A side benefit concerns the sheaf topos on a space X. There, the internal extended lower reals correspond exactly to the lower semicontinuous functions from X to ℝ ∪ {+∞} (Mulvey, Reichman). The price is that, constructively, the order on lower reals is not total and the comparison law for &lt; fails. The comparison law says that if a &lt; b, then a &lt; c or c &lt; b for every c. So lower reals are less well behaved than the usual located reals, where for any rationals q &lt; r, q is below the number or r is above it.

**nLab:** [one-sided real number](https://ncatlab.org/nlab/show/one-sided+real+number). It says: “Explicitly, the supremum of any inhabited set of lower reals is a lower real and the infimum of any inhabited set of upper reals is an upper real.”

**Sources:**

- [J. Z. Reichman, Semicontinuous real numbers in a topos, Journal of Pure and Applied Algebra 28 (1983) 81–91](https://doi.org/10.1016/0022-4049(83)90075-0)

### The genuine integral of cogerm forms ignores second-order terms

**Remember:** Sum the form on small steps of the curve, as in a Riemann sum.

*True by definition. Confidence: medium.* MSC 26A39 (Denjoy and Perron integrals, other special integrals), 58A10. arXiv math.CA, math.DG. Level 4: research.

**Definition.** A cogerm differential 1-form on X gives a number for each germ of a curve in X (the behaviour of the curve near one point). Examples are dx, \|dx\|, dx² and d²x. The genuine integral of a form ω along a curve c is the limit of Riemann sums Σ⟨ω \| Δtᵢ · c at tᵢ\*⟩ over fine tagged partitions: each term applies ω to the germ of c at the tag tᵢ\*, scaled by the step Δtᵢ. The limit is taken in the Henstock style, with gauges (functions that set how fine the partition must be near each point).

**Problem.** Forms such as dx² and d²x are 'second-order', and they should integrate to zero. Then integrands from better approximations give the same integral as f(x) dx. An example is the trapezoid rule integrand f(x) dx + ½ f′(x) dx².

**How the definition helps.** The genuine integral uses Riemann sums of ω itself, so terms that are small on each step add up to something small. Call ω o(dx) if ⟨ω \| h·c⟩/h → 0 as h → 0, that is, if ω on a step of size h is much smaller than h. Then, on a fine enough partition, each term of the sum is smaller than ε·Δtᵢ. So the integral of an o(dx) form is 0, by a short argument from the definition. The naive integral ∫ ⟨ω \| cₜ⟩ dt does not have this property: it gives d²x the integral (x∘c)′(b) − (x∘c)′(a), which is in general not zero. The cost is that the genuine integral satisfies the fundamental theorem of calculus only for differentials of functions. Also, its existence needs extra conditions on the form.

**nLab:** [cogerm differential form](https://ncatlab.org/nlab/show/cogerm+differential+form). It says: “The answer 0 given by the genuine integral is preferable if we regard dx as a "first-order change in x", so that dx² or d²x are "second-order" quantities and hence ought to be negligible.”

**Sources:** none listed. No primary source with a working link was found.

### A weak Jacobian for maps with jumps tracks vortices of circle-valued maps

**Remember:** Use the weak Jacobian to keep track of what jumps carry.

*Makes the theorem clean to state or prove.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation), 49Q15, 49J45. arXiv math.AP. Level 4: research.

**Definition.** A map u of bounded variation has a derivative that is a finite measure, which can charge jump curves. The paper defines the 2 × 2 minors of its gradient as limits of smooth minors along smooth maps that converge strictly to u. On a jump, the limit averages over the segment between the two one-sided values of u. For smooth maps the weak Jacobian is the usual Jacobian determinant.

**Problem.** Take maps u into the unit circle with energy ∫\|∇u\|² plus 1/ε times the jump length, bounded by C\|log ε\|. Then a subsequence of weak Jacobians tends in the flat norm to π times a finite sum of integer-weighted Dirac masses. The energy divided by \|log ε\| Γ-converges to π times the total mass of that sum.

**How the definition helps.** The weak Jacobian is defined for maps with jumps, so the compactness theorem can track defects in the same terms as for Sobolev maps. Our own observation is that the pointwise Jacobian of an S¹-valued map is zero almost everywhere, so it cannot see the vortices. The work is to prove compactness, identify the point masses and obtain the limiting energy.

**Paper or page:** [A new approach to topological singularities via a weak notion of Jacobian for functions of bounded variation](https://arxiv.org/abs/2205.14746v1). It says: “such a notion extends the standard definition of Jacobian determinant to non-Sobolev maps.”

**Sources:**

- [Lucia De Luca, Riccardo Scala, Nicolas Van Goethem, A new approach to topological singularities via a weak notion of Jacobian for functions of bounded variation, arXiv:2205.14746 (2022)](https://arxiv.org/abs/2205.14746v1)

### Derivative growth bounds make Taylor data unique

**Remember:** With the right derivative bounds, a flat point forces a zero function.

*Rules out counterexamples.* MSC 26E10 (\\(C<sup>\\infty\\</sup>)-functions, quasi-analytic functions). arXiv math.CA. Level 4: research.

**Definition.** Take positive weights Mₖ with M₀ = 1 whose successive ratios are nondecreasing and tend to infinity. In the corresponding class, one constant C ≥ 1 bounds the absolute kth derivative everywhere by Mₖ times the (k + 1)st power of C. Require the sum of the reciprocals of the successive ratios to diverge.

**Problem.** Two functions in this class on a closed interval coincide if their values and all their derivatives agree at one interior point.

**How the definition helps.** The Denjoy–Carleman theorem makes the divergent sum a test for uniqueness from derivatives at one point. Our own counterexample for a convergent sum is the smooth bump exp(−1/(1 − x²)) on \|x\| &lt; 1, extended by zero. On \[−2,2\], let Dₖ be the maximum absolute kth derivative. Starting with M₀ = 1, choose nondecreasing successive ratios so that Mₖ ≥ Dₖ and Mₖ/Mₖ₋₁ ≥ k² for k ≥ 1. These weights bound every derivative of the bump, yet the reciprocals of their ratios have finite sum. At the interior point 1 the bump and zero have identical derivatives of every order.

**Wikipedia:** [Quasi-analytic function](https://en.wikipedia.org/wiki/Quasi-analytic_function). It says: “the only function in it having all its partial derivatives equal to zero at a point is the function identically equal to zero.”

**Paper or page:** [Ultradifferentiable extension theorems: a survey](https://arxiv.org/abs/2107.01061v2). It says: “∑ₖ 1/μₖ = ∞.”

**Sources:** none listed. No primary source with a working link was found.

### Convergence at every nonstandard point makes Cauchy's proof correct

**Remember:** Convergence everywhere, nonstandard points included, is uniform convergence.

*True by definition. Confidence: medium.* MSC 26E35 (Nonstandard analysis), 40A30, 26A15. arXiv math.CA, math.HO. Level 4: research.

**Definition.** Read 'the sequence fₙ(x) converges for every x' so that x also ranges over hyperreal points. The hyperreals are the numbers of nonstandard analysis, and they include points infinitely close to a real number. Then fₙ(x + h) must be infinitely close to the limit f∞(x + h) for every infinite n, even when h is infinitesimal.

**Problem.** Cauchy's 1821 sum theorem, with his own proof: a convergent sum of continuous functions is continuous.

**How the definition helps.** If 'everywhere' includes nonstandard points, then Cauchy's hypothesis is uniform convergence, and his proof works. In nonstandard analysis, a sequence converges uniformly exactly when it converges at every hyperreal point. So under this reading, his proof with infinitesimals becomes correct. The counterexamples, such as the Fourier series near x = 1/n, fail to converge at some nonstandard point, which fits how Cauchy rejected them. This hyperreal reading is Robinson's. Lakatos held it to be ahistorical and read Cauchy as asking for convergence at 'variable' points, which again amounts to uniform convergence. It is a reading of history, not a new theorem: the mathematical content is the equivalence of the nonstandard and the ε–N forms of uniform convergence.

**nLab:** [Cauchy sum theorem](https://ncatlab.org/nlab/show/Cauchy+sum+theorem). It says: “By this analysis, Cauchy's notion of convergence everywhere is our modern notion of uniform convergence, not pointwise convergence, and his theorem is true”

**Sources:**

- [Abraham Robinson, Non-standard Analysis, North-Holland (1966); revised edition Princeton University Press (1996)](https://doi.org/10.1515/9781400884223)
- [Imre Lakatos, Mathematics, Science and Epistemology (Philosophical Papers vol. 2), Cambridge University Press (1978), chapter 3](https://doi.org/10.1017/CBO9780511624926)

### The HoTT book real numbers are complete because limits are constructors

**Remember:** Every Cauchy approximation has a limit because "limit" is a constructor.

*True by definition.* MSC 26E40 (Constructive real analysis), 03B38. arXiv math.LO, math.CA. Level 4: research.

**Definition.** The HoTT book real numbers are a higher inductive-inductive type. Such a type is generated by constructors for its points and for equalities between them, defined together with a relation. Here the generators are the rationals, a limit lim for every Cauchy approximation, and a rule that identifies two points that are ε-close for every ε &gt; 0. Equivalently, they are the initial sequentially complete Archimedean ordered field.

**Problem.** The real numbers should be sequentially Cauchy complete, even without countable choice. Then analytic functions such as exp, sin and cos are well defined.

**How the definition helps.** In the higher inductive-inductive type, limits are constructors, so completeness holds by definition and you need no choice. Compare the naive quotient of regular Cauchy sequences. It is complete only if you can lift every sequence of real numbers to a sequence of Cauchy sequences that represent them, and this needs countable choice. That is why Bishop's constructive analysis stays with setoids (sets with an explicit equivalence relation) and does not pass to the quotient. The remaining work is to develop the order and the arithmetic on this type, and the HoTT book does this in Section 11.3.

**nLab:** [HoTT book real number](https://ncatlab.org/nlab/show/HoTT+book+real+number). It says: “The analytic functions, such as the exponential function, the sine function, and the cosine function are well defined in the HoTT book real numbers, since all regular Cauchy sequences converge in the HoTT book real numbers.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)
- [Auke Booij, Analysis in Univalent Type Theory, PhD thesis, University of Birmingham (2020)](http://etheses.bham.ac.uk/id/eprint/10411)

### Time scales prove the discrete and continuous Weyl–Titchmarsh theories at once

**Remember:** One derivative that is a difference on ℤ covers both worlds.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26E70 (Real analysis on time scales or measure chains), 34N05, 34B24. arXiv math.CA, math.SP. Level 4: research.

**Definition.** A time scale is any nonempty closed subset of the real line. The paper uses the nabla derivative, which looks backward. If t has a nearest point ρ(t) &lt; t on its left, the derivative is (f(t) − f(ρ(t)))/(t − ρ(t)). Otherwise it is the usual limit of difference quotients, so on ℝ it is the usual derivative and on ℤ a backward difference.

**Problem.** Weyl–Titchmarsh theory sorts singular linear Hamiltonian systems on a half-line into limit point and limit circle cases, using nested matrix discs. The paper proves this once for systems on a class of time scales. This covers differential and difference equations together.

**How the definition helps.** A single derivative that is a limit on ℝ and a difference on ℤ lets one proof cover both settings. The quote says that the results unify the continuous and the discrete cases. Our own remark is that the two theories had parallel but separate proofs before. Our own remark is that the price is extra terms in product rules, from the gap to the neighbouring point. The Floquet paper uses the same idea to treat discrete, continuous and hybrid periodic systems with one algorithm.

**Paper or page:** [Unifying discrete and continuous Weyl-Titchmarsh theory via a class of linear Hamiltonian systems on Sturmian time scales](https://arxiv.org/abs/1001.4040v1), [Floquet multipliers and the stability of periodic linear differential equations: a unified algorithm and its computer realization](https://arxiv.org/abs/2201.04447v8). It says: “These results unify and extend certain classic and recent results on the subject in the continuous and discrete cases, respectively, to Sturmian time scales.”

**Sources:**

- [Douglas R. Anderson, Unifying discrete and continuous Weyl-Titchmarsh theory via a class of linear Hamiltonian systems on Sturmian time scales, arXiv:1001.4040 (2010)](https://arxiv.org/abs/1001.4040v1)
- [Mengda Wu, Yonghui Xia, Ziyi Xu, Floquet multipliers and the stability of periodic linear differential equations: a unified algorithm and its computer realization, arXiv:2201.04447 (2022)](https://arxiv.org/abs/2201.04447v8)
- [Hilger, Analysis on Measure Chains — A Unified Approach to Continuous and Discrete Calculus, Results in Mathematics 18 (1990), 18–56](https://doi.org/10.1007/bf03323153)

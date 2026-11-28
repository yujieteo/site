### Adding all pairs of rationals makes cut addition associative

**Remember:** Both groupings collect the same sums of three rationals.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A lower Dedekind cut is a set of rationals that is neither empty nor all of ℚ, contains every rational below each member, and has no greatest member. The sum of two cuts is the set of all sums a + b with a from the first cut and b from the second.

**Problem.** Addition of lower Dedekind cuts is associative.

**How the definition helps.** Both (α + β) + γ and α + (β + γ) are the set of all sums a + b + c with one rational from each cut, because rational addition is associative. The only work is to check that a set of such sums is again a cut.

**Paper or page:** [Addition of Cuts is Associative](https://proofwiki.org/wiki/Addition_of_Cuts_is_Associative). It says: “(α + β) + γ = α + (β + γ)”

**Sources:** none listed. No primary source with a working link was found.

### Constant sequences embed the rationals in the Cauchy reals

**Remember:** A rational enters the reals by repeating itself forever.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A Cauchy real is a class of rational Cauchy sequences, those whose late terms all lie within any given tolerance of each other, where two sequences are equal when their difference tends to zero. Sums and products are taken term by term.

**Problem.** Constant sequences give distinct Cauchy reals for distinct rationals and preserve addition and multiplication.

**How the definition helps.** A rational q maps to the constant sequence q, q, q, …, and term-by-term operations give q + r and qr at every position. For q ≠ r the difference of the constant sequences stays at \|q − r\|, so they lie in different classes. One must still check that term-by-term operations respect the classes.

**Paper or page:** [Embedding Division Ring into Quotient Ring of Cauchy Sequences](https://proofwiki.org/wiki/Embedding_Division_Ring_into_Quotient_Ring_of_Cauchy_Sequences). It says: “φ is a distance-preserving ring monomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Counting single points as intervals gives the intermediate value theorem without exceptions

**Remember:** An interval has no gaps, even if it is one point.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** An interval is a set of real numbers that contains every number between any two of its elements. So the empty set, single points and the whole real line are intervals.

**Problem.** The image of a real interval under a continuous real-valued function is an interval.

**How the definition helps.** Intervals in this sense are exactly the connected subsets of ℝ, and continuous images of connected sets are connected. So every image is an interval, including the single point that a constant function produces (our own).

**Wikipedia:** [Interval (mathematics)](https://en.wikipedia.org/wiki/Interval_%28mathematics%29). It says: “The intervals are precisely the connected subsets of ℝ. It follows that the image of an interval by any continuous function from ℝ to ℝ is also an interval. This is one formulation of the intermediate value theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping endpoints makes nested closed intervals share a point

**Remember:** The least upper bound of the left endpoints lies in every closed interval.

*Rules out counterexamples.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A closed interval \[a, b\] keeps its endpoints: it contains every real x with a ≤ x ≤ b. Intervals are nested when each lies inside the one before, so every left endpoint is at most every right endpoint (our own).

**Problem.** Nested nonempty bounded closed intervals have a common point. If their lengths tend to zero, the common point is unique.

**How the definition helps.** Completeness gives the left endpoints a least upper bound, because every right endpoint bounds them, and it lies in every interval because each interval keeps its endpoints (our own). Two distinct common points would keep every length at least their distance (our own). The open intervals (0, 1/n) show that endpoints matter: they have no common point (our own).

**Wikipedia:** [Nested intervals](https://en.wikipedia.org/wiki/Nested_intervals). It says: “Every interval in the sequence is contained in the previous one”

**Sources:** none listed. No primary source with a working link was found.

### Lim sup and lim inf always exist, so convergence means they agree

**Remember:** Take bounds on shrinking tails; convergence means the bounds meet.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 40A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The limit superior of a sequence is the limit of the suprema of its tails, and the limit inferior is the limit of their infima. The suprema decrease, the infima increase, and every term lies between them, so both limits exist in the extended reals.

**Problem.** A sequence of extended reals converges exactly when its lim inf equals its lim sup. Theorems such as Fatou's lemma can be stated for sequences that need not converge.

**How the definition helps.** Each term lies between its tail infimum and tail supremum, so if both tend to the same value, the sequence is squeezed to it, including at either infinity. Conversely, convergence eventually puts each tail inside any neighbourhood of the limit, so both tail limits equal it (our own). Fatou’s lemma uses these always-defined lower limits for nonnegative measurable functions (our own).

**Wikipedia:** [Limit inferior and limit superior](https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior). It says: “If the terms in the sequence are real numbers, the limit superior and limit inferior always exist, as the real numbers together with ±∞ (i.e. the extended real number line) are complete.”

**Sources:** none listed. No primary source with a working link was found.

### Nearby set members make closed sets attain their bounds

**Remember:** A closed set keeps the limit of points approaching its ceiling.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A supremum is an upper bound that set members approach arbitrarily closely, and an infimum is a lower bound with the same property. A set is closed if it contains the limit of every convergent sequence of its members.

**Problem.** A nonempty closed set of real numbers that is bounded above contains its supremum. If bounded below, it contains its infimum.

**How the definition helps.** Choose a member within 1/n of the supremum for each n; these members converge to the supremum, so closedness puts it in the set (our own). The approximation property matches the least upper bound definition, since any smaller number fails to bound the set (our own). Reversing inequalities gives the infimum case (our own).

**Paper or page:** [Closed Subset of Real Numbers with Lower Bound contains Infimum](https://proofwiki.org/wiki/Closed_Subset_of_Real_Numbers_with_Lower_Bound_contains_Infimum). It says: “Then A contains its infimum.”

**Sources:** none listed. No primary source with a working link was found.

### Negation turns least upper bounds into greatest lower bounds

**Remember:** Flip the signs to turn a ceiling into a floor.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define the infimum of a set by negation: negate every member, take the supremum, the least upper bound, and negate the result.

**Problem.** For every nonempty real set bounded below, its greatest lower bound equals the negative of the supremum of its negatives.

**How the definition helps.** Negation reverses order, so it turns lower bounds of the set into upper bounds of the negatives, and the greatest lower bound into the least upper bound (our own). Completeness gives the negatives a supremum because they form a nonempty set bounded above (our own).

**Wikipedia:** [Infimum and supremum](https://en.wikipedia.org/wiki/Infimum_and_supremum). It says: “The infimum is, in a precise sense, dual to the concept of a supremum.”

**Paper or page:** [Negative of Supremum is Infimum of Negatives](https://proofwiki.org/wiki/Negative_of_Supremum_is_Infimum_of_Negatives). It says: “where sup and inf denote the supremum and infimum respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Open lower cuts give a rational boundary only one copy

**Remember:** Put the rational boundary outside its lower cut.

*Rules out counterexamples.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A lower Dedekind cut is a set containing some but not all rationals, containing every rational below each member, and having no greatest member. The last condition forbids a cut from containing its rational boundary q, since q would then be its greatest member.

**Problem.** For each rational q, exactly one lower Dedekind cut has q as its least rational upper bound.

**How the definition helps.** The cut must omit q, so it lies inside the rationals below q, and it contains each of them since none can bound the cut (our own). All rationals below q do form a cut, because another rational always lies between two distinct rationals. Allowing a greatest member would give a second cut, the same set with q added.

**nLab:** [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “we get two cuts for each rational number and must (as in the previous section) pass to a quotient”

**Sources:**

- [Richard Dedekind, Continuity and Irrational Numbers, § IV, “Creation of Irrational Numbers,” excerpt in Classics of Mathematics, p. 585.](https://tildesites.geneseo.edu/~johannes/dedekind.pdf)

### Tail bounds make limit superiors subadditive

**Remember:** The upper bound for a sum comes from adding the two tail bounds.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 40A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The limit superior of a bounded real sequence is the limit of the least upper bounds of its tails, the terms from some index onward.

**Problem.** For bounded real sequences, the limit superior of their sum cannot exceed the sum of their limit superiors.

**How the definition helps.** On every tail, the sum of the two tail suprema bounds the summed sequence, so the tail supremum of the sum is at most that sum (our own). Taking limits gives the inequality (our own).

**Wikipedia:** [Limit inferior and limit superior](https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior). It says: “lim supₙ→∞ (aₙ + bₙ) ≤ lim supₙ→∞ aₙ + lim supₙ→∞ bₙ.”

**Sources:** none listed. No primary source with a working link was found.

### The approximation definition makes suprema add

**Remember:** Get within half the error in each set.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The supremum of a set is an upper bound s that members approach arbitrarily closely: for every ε &gt; 0, some member exceeds s − ε.

**Problem.** Let A and B be nonempty real sets bounded above. The supremum of all sums with one member from each set equals the sum of their suprema.

**How the definition helps.** Pick members within ε/2 of each supremum; their sum lies within ε of sup A + sup B, which bounds every sum (our own). So sup A + sup B is the supremum of the sums. This approximation property agrees with the least upper bound definition (our own).

**Paper or page:** [Supremum of Sum equals Sum of Suprema](https://proofwiki.org/wiki/Supremum_of_Sum_equals_Sum_of_Suprema). It says: “sup(A + B) = sup A + sup B”

**Sources:** none listed. No primary source with a working link was found.

### The betweenness definition makes intersections of real intervals intervals

**Remember:** A point between two shared points is shared.

*True by definition. Confidence: medium.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 54F05. arXiv math.CA, math.GN. Level 1: early undergraduate.

**Definition.** A subset of ℝ is an interval if it contains every real number between any two of its members.

**Problem.** The intersection of any family of real intervals is an interval.

**How the definition helps.** If two points belong to the intersection, each interval contains both points and hence every real number between them (our own). This verifies the interval condition, even when there are no two distinct points to test.

**Paper or page:** [Equivalence of Definitions of Real Interval](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Real_Interval). It says: “To prove the other direction, we distinguish according to if the subset is bounded on the left or on the right, and use the Continuum Property.”

**Sources:** none listed. No primary source with a working link was found.

### Using lim sup gives a radius of convergence for every power series

**Remember:** The lim sup always exists, so the formula always applies.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 30B10. arXiv math.CA, math.CV. Level 1: early undergraduate.

**Definition.** The limit superior of a sequence is the limit of the suprema of its tails, which always exists in the extended reals. With the rules 1/0 = +∞ and 1/(+∞) = 0 for non-negative values, its reciprocal is always defined.

**Problem.** The radius of convergence R of a power series Σcₙ(z − a)ⁿ is given by 1/R = lim sup ⁿ√\|cₙ\|. In words, 1/R is the largest limit point of the nth roots of the sizes of the coefficients.

**How the definition helps.** Because tail suprema always have a limit, the Cauchy–Hadamard formula applies to every coefficient sequence. This holds even when the nth roots have no limit, as for coefficients alternating between zero and one (our own). The root test gives convergence inside the radius and divergence outside it, including R = 0 and R = ∞ (our own).

**Wikipedia:** [Cauchy–Hadamard theorem](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Hadamard_theorem), [Extended real number line](https://en.wikipedia.org/wiki/Extended_real_number_line). It says: “Thus, if one allows 1/0 to take the value +∞, then one can use this formula regardless of whether the limit-supremum is 0 or not.”

**Sources:**

- [J. Hadamard, Essai sur l'étude des fonctions données par leur développement de Taylor, J. Math. Pures Appl. (4) 8 (1892)](https://archive.org/details/essaisurltuded00hadauoft)

### With Dedekind cuts, the least upper bound is a union

**Remember:** With cuts, the supremum is just the union.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** In the cut construction, a real number is a lower Dedekind cut, a nonempty proper subset of ℚ that contains every rational below each member and has no greatest member. Reals are ordered by inclusion, so an upper bound of a set of cuts is a cut containing all of them.

**Problem.** Every non-empty set S of real numbers with an upper bound has a least upper bound, namely the union ⋃S of its cuts.

**How the definition helps.** Since the order is inclusion, the union contains every cut in S and lies inside every upper bound (our own). It is a cut: it is nonempty, it lies inside a given upper bound so it is proper, and each member comes from a cut that supplies every smaller rational and a larger member (our own).

**Wikipedia:** [Construction of the real numbers](https://en.wikipedia.org/wiki/Construction_of_the_real_numbers), [Least-upper-bound property](https://en.wikipedia.org/wiki/Least-upper-bound_property). It says: “If a nonempty set S of real numbers has any upper bound in R, then it has a least upper bound in R that is equal to ⋃S.”

**Sources:** none listed. No primary source with a working link was found.

### Mean value tags turn the integral of a derivative into endpoint subtraction

**Remember:** Pick the tag where the slope equals the slope across the piece.

*True by definition. Confidence: medium.* MSC 26A06 (One-variable calculus), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A tagged Riemann sum multiplies each piece’s length by the function value at a freely chosen point of that piece. The integral is the common limit of these sums, for every choice of tags, as the longest piece shrinks.

**Problem.** Suppose F is continuous on \[a, b\], differentiable on (a, b), and its derivative extends to a Riemann integrable function on \[a, b\]. The integral of that extension is F(b) − F(a).

**How the definition helps.** By the mean value theorem, each piece has a tag where F′ equals the average slope of F on that piece, so each term is the change of F across it and the sum telescopes to F(b) − F(a) (our own). Integrability means these particular sums also tend to the integral (our own).

**Paper or page:** [Fundamental Theorem of Calculus/Second Part](https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/Second_Part). It says: “∫ₐᵇ f(t) dt = F(b) − F(a)”

**Sources:** none listed. No primary source with a working link was found.

### Sequences turn the quotient limit into a sequence limit law

**Remember:** Test a function limit on one approaching sequence at a time.

*True by definition.* MSC 26A06 (One-variable calculus). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function has sequential limit L at a if f(xₙ) tends to L whenever domain points xₙ distinct from a tend to a.

**Problem.** Suppose f and g have limits L and M at a point approached by other points of their common domain. If M ≠ 0, then f/g has limit L/M there.

**How the definition helps.** The sequential definition reduces the claim to the quotient law for sequences, applied along each sequence xₙ → a with xₙ ≠ a. Along such a sequence g(xₙ) → M ≠ 0, so the denominators are eventually nonzero. This uses the equivalence of the sequential test with the usual distance test (our own).

**Paper or page:** [Combination Theorem for Limits of Functions/Real/Quotient Rule](https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Functions/Real/Quotient_Rule). It says: “provided that m ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Signed limits give one derivative rule for two moving endpoints

**Remember:** Only the endpoints move, and the lower endpoint has the minus sign.

*Makes the theorem clean to state or prove.* MSC 26A06 (One-variable calculus), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Signed limits make the integral from v to u the negative of the integral from u to v, and zero when the limits are equal. Then the integral from p to q equals F(q) − F(p) in either order (our own), where F(x) is the integral of f from a fixed point a to x.

**Problem.** Let f be continuous on an open interval containing the values of differentiable functions p and q. The derivative of the integral from p(x) to q(x) is f(q(x))q′(x) − f(p(x))p′(x), even where the endpoints cross.

**How the definition helps.** Signed limits write the moving integral as F(q(x)) − F(p(x)) whether or not p(x) ≤ q(x) (our own). The fundamental theorem gives F′ = f, and the chain rule applied twice gives the formula (our own).

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “Taking for granted that ∫ᵤᵛ = ∫ₐᵛ − ∫ₐᵘ, this generalizes to”

**Sources:** none listed. No primary source with a working link was found.

### A single series term makes the exponential outgrow powers

**Remember:** For positive x, keep one term of degree higher than the power.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define exp(x) as the sum of xⁿ/n! over n ≥ 0. For x &gt; 0 every term is positive, so exp(x) exceeds each single term.

**Problem.** For every nonnegative integer k, exp(x) divided by x to power k tends to infinity as x tends to infinity.

**How the definition helps.** For x &gt; 0 the term of degree k + 1 gives exp(x) &gt; xᵏ⁺¹/(k + 1)!. Dividing by xᵏ leaves x/(k + 1)!, which tends to infinity.

**Paper or page:** [Exponential Dominates Polynomial](https://proofwiki.org/wiki/Exponential_Dominates_Polynomial). It says: “exp(αx) &gt; xᵏ”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, third edition (1976), Theorem 8.6(f).](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### A symmetric restriction makes arcsine odd

**Remember:** The principal interval contains the negative of every angle it contains.

*Rules out counterexamples.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Arcsine is the inverse of sine restricted to \[−π/2, π/2\], an interval symmetric about zero on which sine takes each value in \[−1, 1\] exactly once (our own).

**Problem.** Arcsine is a function on \[−1, 1\] and satisfies arcsin(−x) = −arcsin(x).

**How the definition helps.** If arcsin x = y, then −y lies in the same interval and sin(−y) = −x, so arcsin(−x) = −y (our own). A non-symmetric choice fails: on \[π/2, 3π/2\] the inverse sends 0 to π, so it is not odd (our own).

**Wikipedia:** [Inverse trigonometric functions](https://en.wikipedia.org/wiki/Inverse_trigonometric_functions). It says: “Since none of the six trigonometric functions are one-to-one, they must be restricted in order to have inverse functions.”

**Paper or page:** [Inverse Sine is Odd Function](https://proofwiki.org/wiki/Inverse_Sine_is_Odd_Function). It says: “arcsin(−x) = −arcsin x”

**Sources:** none listed. No primary source with a working link was found.

### Allowing real powers only for positive bases keeps the exponent laws

**Remember:** Keep the base positive, and (bʳ)ˢ = bʳˢ always.

*Rules out counterexamples.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For every positive real b and every real exponent x, define bˣ = exp(x ln b).

**Problem.** Let the bases b and c be positive. Then (bʳ)ˢ = bʳˢ, bʳbˢ = bʳ⁺ˢ and (bc)ʳ = bʳcʳ for all real r and s.

**How the definition helps.** Since ln(bʳ) = r ln b, each law reduces to exp(u + v) = exp(u)exp(v) and ln(bc) = ln b + ln c (our own). Negative bases break the first law: ((−1)²) raised to ½ is 1, but (−1) raised to 2 · ½ is −1 (our own).

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “exponentiation to a real power of a negative real number is much more difficult to define consistently, as it may be non-real and have several values.”

**Sources:** none listed. No primary source with a working link was found.

### As a power series, exp carries its derivative and addition laws

**Remember:** Differentiate the series term by term, and exp comes back.

*True by definition.* MSC 26A09 (Elementary functions), 33B10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define exp(x) as the power series sum of xⁿ/n! over n ≥ 0, which converges absolutely for every real or complex x.

**Problem.** The exponential function satisfies exp′ = exp, exp(0) = 1 and exp(x+y) = exp(x)exp(y).

**How the definition helps.** Every law follows by manipulating the series term by term, which absolute convergence justifies. Termwise differentiation shifts the index and returns the same series, and only the constant term survives at zero (our own). The Cauchy product of exp(x) and exp(y) groups terms of total degree n into (x + y)ⁿ/n! by the binomial theorem.

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “In the sense of definition 2, the equation exp(x+y) = exp(x)exp(y) follows from the term-by-term manipulation of power series justified by uniform convergence, and the resulting equality of coefficients is just the Binomial theorem.”

**Sources:** none listed. No primary source with a working link was found.

### As the area under 1/t, the logarithm turns products into sums

**Remember:** Stretching an interval under 1/t never changes its area.

*True by definition.* MSC 26A09 (Elementary functions), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The natural logarithm ln a, for a &gt; 0, is the area under the curve 1/t from 1 to a, counted negative when a &lt; 1. Stretching an interval \[1, y\] by a factor x turns it into \[x, xy\] and leaves the area under 1/t unchanged (our own).

**Problem.** For all positive x and y, ln(xy) = ln x + ln y. Also ln′(x) = 1/x, and ln is a bijection onto the real line.

**How the definition helps.** Split the integral for ln(xy) at x; the piece from x to xy is the stretched piece from 1 to y, so it equals ln y (our own). The fundamental theorem of calculus gives ln′(x) = 1/x &gt; 0, so ln is continuous and strictly increasing. Since ln(2ⁿ) = n ln 2 with ln 2 &gt; 0, ln is unbounded both ways, and the intermediate value theorem gives every real value (our own).

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm), [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “The simplicity of this definition, which is matched in many other formulas involving the natural logarithm, leads to the term "natural".”

**Sources:**

- [R. P. Burn, Alphonse Antonio de Sarasa and logarithms, Historia Mathematica 28 (2001) 1–17](https://doi.org/10.1006/hmat.2000.2295)

### Defining exp by f(x+y) = f(x)f(y) needs a regularity condition

**Remember:** Tame the solution at one spot, and only eˣ remains.

*Rules out counterexamples.* MSC 26A09 (Elementary functions), 39B22. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A regular exponential solution is a function f: ℝ → ℝ with f(x+y) = f(x)f(y) for all real x, y and f(1) = e that is also regular. Regular means continuous at one point, monotone on an interval of positive length, or Lebesgue measurable; this rules out the wild solutions built from a basis of ℝ over ℚ.

**Problem.** Every function with f(x+y) = f(x)f(y), f(1) = e and one of these regularity conditions equals eˣ.

**How the definition helps.** Such f is positive, since f(x) = f(x/2)² and f(x)f(−x) = f(0) = 1, so ln f is additive with value 1 at 1 (our own). The regularity theorem for Cauchy’s equation makes ln f linear under each listed condition, so f(x) = eˣ. Without regularity, exponentiating a discontinuous additive function from a Hamel basis gives a counterexample (our own).

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function), [Cauchy's functional equation](https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation). It says: “For the uniqueness, one must impose some regularity condition, since other functions satisfying f(x+y)=f(x)f(y) can be constructed using a basis for the real numbers over the rationals, as described by Hewitt and Stromberg.”

**Sources:**

- [Georg Hamel, Eine Basis aller Zahlen und die unstetigen Lösungen der Funktionalgleichung f(x+y) = f(x) + f(y), Mathematische Annalen (1905)](https://doi.org/10.1007/BF01457624)

### Defining ln x as an integral makes its derivative 1/x immediate

**Remember:** Differentiate an area under 1/t, and you get 1/x back.

*True by definition.* MSC 26A09 (Elementary functions), 26A06. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** The natural logarithm ln x, for x &gt; 0, is ∫₁ˣ (1/t) dt, the area under the curve 1/t from 1 to a moving right edge at x.

**Problem.** For x &gt; 0, the derivative of ln x is 1/x.

**How the definition helps.** By the fundamental theorem of calculus, moving the right edge of an area under a continuous curve changes the area at the rate of the curve’s height. Here the height at x is 1/x. If ln is instead the inverse of exp, one needs the derivative of exp and the inverse function rule (our own comparison).

**nLab:** [logarithm](https://ncatlab.org/nlab/show/logarithm). It says: “The real logarithms are handily defined using the Riemann integral of the reciprocal”

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm). It says: “The natural logarithm can be defined as the area under the graph of a rectangular hyperbola with equation y = 1/x between x = 1 and x = a.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ln x as area under 1/t gives rectangle bounds on it

**Remember:** The area under 1/t lies between its two endpoint rectangles.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26D07. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x &gt; 0, ln x is the signed area under the decreasing curve 1/t between 1 and x, counted negative when x &lt; 1. Because the curve decreases, this area lies between the two rectangles over the same interval whose heights are the curve’s values 1 and 1/x at the ends (our own).

**Problem.** For every x &gt; 0, 1 − 1/x ≤ ln x ≤ x − 1.

**How the definition helps.** The bounds are the two rectangle areas with the sign attached. For x &gt; 1 the rectangles have areas (x − 1)/x and x − 1. For 0 &lt; x &lt; 1 the area from x to 1 lies between 1 − x and (1 − x)/x, and the minus sign gives the same bounds (our own).

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “Here, the natural logarithm function is defined in terms of a definite integral as above.”

**Paper or page:** [Bounds of Natural Logarithm](https://proofwiki.org/wiki/Bounds_of_Natural_Logarithm). It says: “1 − 1/x ≤ ln x ≤ x − 1”

**Sources:** none listed. No primary source with a working link was found.

### Radian measure makes the derivative of sine exactly cosine

**Remember:** In radians, a tiny angle equals its sine.

*Makes the theorem clean to state or prove.* MSC 26A09 (Elementary functions), 97I40. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** The radian measure of an oriented angle is its signed arc length on a circle divided by the radius, so a full turn is 2π radians. On the unit circle an angle of h radians cuts an arc of length h whose height sin h is nearly as long, so sin h/h → 1.

**Problem.** If x measures an angle in radians, the derivative of sin x is cos x. If x measures an angle in degrees, the derivative is (π/180) cos x, with cosine also evaluated in degrees.

**How the definition helps.** The derivative of sine at 0 is the limit of sin h/h, which is 1 in radians by the triangle and sector bounds. The addition formula and (cos h − 1)/h → 0 move this to every x, giving cos x (our own). A degree increment is π/180 times a radian increment, so the chain rule gives the degree formula (our own).

**Wikipedia:** [Radian](https://en.wikipedia.org/wiki/Radian). It says: “For example, the use of radians leads to the simple limit formula lim (h→0) sin h / h = 1, which is the basis of many other identities in mathematics, including d/dx sin x = cos x”

**Sources:** none listed. No primary source with a working link was found.

### Real powers defined by exp and ln obey the power rule

**Remember:** Every power is exp of a product.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26A24. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For b &gt; 0 and real x, bˣ is exp(x ln b), where ln is the inverse of exp. This writes every power as exp of a product, so its derivatives come from the chain rule.

**Problem.** For x &gt; 0 and every real r, the derivative of xʳ is r xʳ⁻¹. Also, for b &gt; 0, the derivative of bˣ is bˣ ln b.

**How the definition helps.** Each power is exp of a differentiable inner function, so the chain rule differentiates it (our own). For fixed r, exp(r ln x) has derivative r exp(r ln x)/x = r xʳ⁻¹. For fixed b, exp(x ln b) has derivative exp(x ln b) ln b = bˣ ln b (our own).

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “So, eˣ ˡⁿ ᵇ can be used as an alternative definition of bˣ for any positive real b.”

**Sources:** none listed. No primary source with a working link was found.

### The logarithm integral bounds its growth by every positive power

**Remember:** The area under 1/t sits below a small power’s area.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x &gt; 0, ln x is the area under the curve 1/t from 1 to x. For t ≥ 1 and any a &gt; 0, the curve 1/t lies below the power t<sup>(a/2 − 1)</sup>, so this area is at most the easier area under that power (our own).

**Problem.** For every a &gt; 0, ln x / xᵃ → 0 as x → ∞.

**How the definition helps.** Comparing the two areas gives ln x ≤ (2/a)(√(xᵃ) − 1) for x ≥ 1 (our own). Dividing by xᵃ leaves a bound below (2/a)/√(xᵃ), which tends to zero.

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm). It says: “("slowly" as compared to any power law of x).”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, third edition (1976), equation (45) and its proof.](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### The logarithm integral gives the exponential limit

**Remember:** Logs turn the nth power into n times a small area.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Here the logarithm L(y) is the area ∫₁ʸ dt/t for y &gt; 0, and exp is its inverse, not a power series. L turns powers into multiples, L(yⁿ) = nL(y), and has slope L′(1) = 1 at y = 1 (our own).

**Problem.** For every real x, (1 + x/n) to the nth power tends to exp(x) as n grows.

**How the definition helps.** For x ≠ 0 and n large enough that 1 + x/n &gt; 0, L turns (1 + x/n)ⁿ into nL(1 + x/n) = x · (L(1 + x/n) − L(1))/(x/n). This tends to x because L′(1) = 1. Applying the continuous inverse exp gives the limit; x = 0 is trivial (our own).

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “Define eˣ to be the unique number y &gt; 0 such that ∫₁ʸ dt/t = x.”

**Sources:** none listed. No primary source with a working link was found.

### The logarithm integral gives the Mercator series

**Remember:** Expand the integrand as a geometric sum before integrating.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x &gt; 0, ln x is the area under 1/t from 1 to x, so ln(1 + x) is the area under 1/(1 + t) from 0 to x. That integrand is the geometric series 1 − t + t² − ⋯ when \|t\| &lt; 1, and each power tᵏ integrates to xᵏ⁺¹/(k + 1).

**Problem.** For −1 &lt; x ≤ 1, ln(1 + x) = x − x²/2 + x³/3 − ⋯.

**How the definition helps.** Integrate the finite geometric sum 1 − t + ⋯ ± tᴺ⁻¹ and its remainder ±tᴺ/(1 + t) from 0 to x (our own). For \|x\| &lt; 1 the integrated remainder is at most \|x\|ᴺ⁺¹/((N + 1)(1 − \|x\|)), which tends to zero. At x = 1 it is at most ∫₀¹ tᴺ dt = 1/(N + 1) (our own).

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm). It says: “This is the Taylor series for ln x around 1.”

**Sources:** none listed. No primary source with a working link was found.

### The sine series gives the limit of sin x / x

**Remember:** Divide the sine series by x, and the constant term is 1.

*True by definition.* MSC 26A09 (Elementary functions), 33B10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For real x, sin x is the sum of the power series x − x³/3! + x⁵/5! − ⋯, which converges for every x. Every term has a factor x, so sin x / x is again a power series, with constant term 1.

**Problem.** sin x / x → 1 as x → 0.

**How the definition helps.** For x ≠ 0, sin x / x = 1 − x²/3! + x⁴/5! − ⋯, a power series that converges everywhere. Power series are continuous, so this tends to its value 1 at zero (our own).

**Wikipedia:** [Trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions). It says: “In fact, the functions sin and cos can be defined for all complex numbers in terms of the exponential function, via power series,”

**Paper or page:** [Limit of Sine of X over X at Zero](https://proofwiki.org/wiki/Limit_of_Sine_of_X_over_X_at_Zero). It says: “lim (x → 0) sin x / x = 1”

**Sources:** none listed. No primary source with a working link was found.

### Punctured limits let us fill isolated holes

**Remember:** The limit ignores the hole, then tells you how to fill it.

*True by definition.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The punctured limit of f at a is the number L that f(x) approaches as x approaches a, ignoring the value at a itself. For every ε &gt; 0 some δ &gt; 0 gives \|f(x) − L\| &lt; ε at each domain point x with 0 &lt; \|x − a\| &lt; δ.

**Problem.** Suppose other domain points approach a and f has finite punctured limit L there. Assigning f(a) = L is the unique way to make f continuous at a.

**How the definition helps.** Continuity at a is the punctured test plus the point a itself, where the choice f(a) = L makes the error zero (our own). Any other value fails, because continuity forces f(a) to equal the punctured limit, which is unique since other domain points approach a.

**nLab:** [limit of a function](https://ncatlab.org/nlab/show/limit+of+a+function). It says: “Weierstrass's definition is also referred to as the punctured limit of a function”

**Paper or page:** [Limit of Functions that Agree](https://proofwiki.org/wiki/Limit_of_Functions_that_Agree). It says: “Let f and g agree for all x in a deleted neighborhood of c.”

**Sources:** none listed. No primary source with a working link was found.

### Testing continuity only inside the domain makes endpoints and restrictions work

**Remember:** Test only the points where the function is defined.

*Rules out counterexamples. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f with domain D is continuous at a point x₀ of D if for each ε &gt; 0 some δ &gt; 0 gives \|f(x) − f(x₀)\| &lt; ε for all x in D with \|x − x₀\| &lt; δ. Only points of the domain are tested, so D need not contain an interval around x₀.

**Problem.** A real function on \[a,b\] can be continuous at its endpoints. Every restriction of a continuous real function is continuous, and its reciprocal is continuous wherever defined.

**How the definition helps.** Since only domain points count, an endpoint of \[a,b\] is tested from one side only, and a restriction is tested at fewer points (our own). Weierstrass’s version, which demanded an interval around x₀ inside the domain, fails at the endpoints. On the set where f ≠ 0, 1/f is the restriction of f followed by the continuous map y ↦ 1/y (our own).

**Wikipedia:** [Continuous function](https://en.wikipedia.org/wiki/Continuous_function). It says: “Weierstrass had required that the interval x₀ − δ &lt; x &lt; x₀ + δ be entirely within the domain D, but Jordan removed that restriction.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity makes continuous functions on closed intervals integrable

**Remember:** Uniform continuity is continuity with one δ for the whole domain.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f on D ⊆ ℝ is uniformly continuous if one δ works at every point: for every ε &gt; 0 there is δ &gt; 0 with \|f(x) − f(y)\| &lt; ε whenever x, y ∈ D and \|x − y\| &lt; δ.

**Problem.** Every continuous function on a closed bounded interval \[a,b\] is Riemann integrable, in Darboux's form with upper and lower sums.

**How the definition helps.** One δ controls every piece of a partition at once: if all pieces are shorter than δ, the upper and lower sums differ by at most ε(b − a) (our own). Plain continuity gives a δ that depends on the point. The Heine–Cantor theorem supplies the single δ, since \[a,b\] is compact.

**Wikipedia:** [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “The Darboux integrability of continuous functions follows almost immediately from this theorem.”

**Sources:**

- [E. Heine, Die Elemente der Functionenlehre, J. reine angew. Math. 74 (1872), 172–188, doi:10.1515/crll.1872.74.172](https://doi.org/10.1515/crll.1872.74.172)

### An affine approximation makes differentiability imply continuity

**Remember:** A line plus a tiny error, and both shrink with h.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function f has derivative m at a if f(a + h) = f(a) + mh + r(h) with an error r(h) that is small even compared with h, that is r(h)/h → 0 as h → 0.

**Problem.** Every real function differentiable at a point is continuous there.

**How the definition helps.** The change f(a + h) − f(a) is mh + r(h), and both terms tend to zero. The error does because r(h) = h · (r(h)/h) is a product of two terms that tend to zero (our own).

**Paper or page:** [Differentiable Function is Continuous](https://proofwiki.org/wiki/Differentiable_Function_is_Continuous). It says: “Let x₀ ∈ I such that f is differentiable at x₀. Then f is continuous at x₀.”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory's definition of the derivative gives a two-line chain rule

**Remember:** Factor out x − a, and the slope becomes a continuous function.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function f on an open interval containing a is differentiable at a if its difference quotient extends to a function q continuous at a, so that f(x) − f(a) = q(x)(x − a) for all x in the interval. The derivative is q(a).

**Problem.** If g is differentiable at a and f is differentiable at g(a), then f∘g is differentiable at a with derivative f′(g(a))g′(a).

**How the definition helps.** Factoring both increments gives f(g(x)) − f(g(a)) = q(g(x))r(x)(x − a), with q and r the slope functions of f and g (our own). The factor q(g(x))r(x) is continuous at a because g is, and its value there is f′(g(a))g′(a) (our own).

**Wikipedia:** [Chain rule](https://en.wikipedia.org/wiki/Chain_rule). It says: “Constantin Carathéodory's alternative definition of the differentiability of a function can be used to give an elegant proof of the chain rule.”

**Sources:**

- [Stephen Kuhn, The derivative à la Carathéodory, The American Mathematical Monthly 98 (1991) 40–44](https://doi.org/10.2307/2324035)

### Derivatives give exact Lipschitz bounds

**Remember:** Chords and derivatives give the same bound on slopes.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Lipschitz bound of a real function on an open interval is the supremum of its absolute chord slopes \|f(x) − f(y)\|/\|x − y\| over distinct x and y, and it may be infinite. It is the smallest constant in the usual Lipschitz inequality.

**Problem.** For a differentiable function on an open interval, the Lipschitz bound equals the supremum of the absolute derivative, allowing infinity.

**How the definition helps.** By the mean value theorem each chord slope equals some derivative value, so the Lipschitz bound is at most sup \|f′\| (our own). Each derivative value is a limit of chord slopes, which gives the reverse inequality, also when the suprema are infinite (our own).

**nLab:** [Lipschitz map](https://ncatlab.org/nlab/show/Lipschitz+map). It says: “its Lipschitz norm is the supremum norm ‖f′‖∞ of its derivative f′.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic derivatives turn products into sums

**Remember:** Take logs to add the factors before you differentiate.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The logarithmic derivative of a real function f, at points where f is nonzero, is the derivative of ln \|f\|, which the chain rule makes equal to f′/f. Since ln \|fg\| = ln \|f\| + ln \|g\|, it turns products into sums.

**Problem.** At a point where each of finitely many differentiable real factors is nonzero, their product has logarithmic derivative equal to the sum of theirs.

**How the definition helps.** Near the point, the logarithm of the absolute value of the product is the sum of the logarithms of the absolute values of the factors (our own). Differentiating that sum term by term gives the result, and the chain rule turns each term into f′/f (our own).

**Wikipedia:** [Logarithmic derivative](https://en.wikipedia.org/wiki/Logarithmic_derivative). It says: “the logarithmic derivative of a product is the sum of the logarithmic derivatives of the factors”

**Sources:** none listed. No primary source with a working link was found.

### Normalized Taylor coefficients equal derivatives

**Remember:** Divide by the factorial that differentiation puts back.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The order-n Taylor polynomial at c of a function f with derivatives through order n at c is ∑ₖ₌₀ⁿ f⁽ᵏ⁾(c)(x − c)ᵏ/k!. It is written in the basis (x − c)ᵏ/k!, whose jth derivative at c is 1 when j = k and 0 otherwise.

**Problem.** Suppose f has derivatives through order n at c. Its order-n Taylor polynomial uniquely matches f(c) and those derivatives among all polynomials of degree at most n.

**How the definition helps.** In this basis the jth derivative at c of a polynomial is exactly its jth coefficient (our own). So prescribing f(c) and the derivatives through order n fixes every coefficient once and only once (our own).

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “whose derivatives at c match those of f up to order k.”

**Sources:** none listed. No primary source with a working link was found.

### Summing over set partitions turns the higher chain rule into simple induction

**Remember:** A new derivative starts a block or joins one.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 05A18. arXiv math.CA, math.CO. Level 1: early undergraduate.

**Definition.** A partition of {1,…,n} splits it into disjoint nonempty blocks. In the higher chain rule, each block lists the differentiations that land on one inner factor (our own).

**Problem.** Suppose f and g have derivatives through order n where f∘g is defined. Then (f∘g)⁽ⁿ⁾(x) is the sum over partitions π of {1,…,n} of f⁽ᵏ⁾(g(x)), with k the number of blocks, times the product over blocks B of g⁽ᵐ⁾(x), with m the size of B.

**How the definition helps.** Differentiating a term once more either hits the outer factor, adding a new singleton block, or hits one inner factor, adding the new label to that block (our own). Removing the newest label recovers the unique earlier partition, so each partition arises exactly once. Induction from f′(g(x))g′(x) finishes the proof (our own).

**Paper or page:** [A one-sentence elementary proof of the combinatorial Faà di Bruno's formula](https://arxiv.org/abs/2206.02031v2). It says: “where π ranges over the set Πₙ of all partitions of {1, …, n} and B ranges over the blocks in π.”

**Sources:**

- [Samuel Allen Alexander, A one-sentence elementary proof of the combinatorial Faà di Bruno's formula, arXiv:2206.02031v2 (2022)](https://arxiv.org/abs/2206.02031v2)

### Two-sided slopes force a zero derivative at interior extrema

**Remember:** At an interior peak, the two slopes must meet at zero.

*Rules out counterexamples.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The two-sided derivative at a is the finite number that the slopes (f(x) − f(a))/(x − a) approach as x approaches a from the left and from the right alike.

**Problem.** If a real function has a local maximum or minimum at an interior point and a two-sided derivative there, that derivative is zero.

**How the definition helps.** At a local maximum, left slopes are ≥ 0 and right slopes are ≤ 0, so their common limit is 0; a minimum reverses the signs. The symmetric derivative, the limit of (f(a + h) − f(a − h))/(2h), does not suffice: our own example \|x\| + x/2 has a minimum at 0 but symmetric derivative 1/2.

**Paper or page:** [Theorem 4.3. (Fermat's theorem on stationary points)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Suppose f : U → ℝ is differentiable and p ∈ U is a local extrema. Then f′(p) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform derivative limits allow differentiation

**Remember:** Control all slopes and anchor one function value.

*Rules out counterexamples. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 40A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The derivatives fₙ′ converge uniformly to g on I if they come within any ε of g at all points of I at once: for every ε &gt; 0 some N gives \|fₙ′(x) − g(x)\| &lt; ε for all n ≥ N and all x ∈ I.

**Problem.** Let real functions fₙ be continuous on a closed bounded interval and differentiable inside it, with fₙ converging at one point and fₙ′ converging uniformly inside. Then fₙ converges uniformly, and its limit has derivative lim fₙ′ at each interior point.

**How the definition helps.** By the mean value theorem, uniformly close derivatives give uniformly close secant slopes, so convergence at one point makes fₙ uniformly Cauchy (our own). Fixing the secant, letting the index grow and then shrinking the secant gives the limit’s derivative (our own). Without the derivative condition it fails: √(x² + 1/n) tends uniformly to \|x\| on \[−1, 1\], which has no derivative at 0 (our own).

**Wikipedia:** [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence). It says: “With additional hypotheses, differentiability can be transferred to the limit function as well.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the integral by antiderivatives makes integration by parts the product rule

**Remember:** The integral of a product's derivative is the product's change.

*True by definition. Confidence: medium.* MSC 26A36 (Antidifferentiation), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For continuous f on \[a, b\], the integral of f is F(b) − F(a), the total change of any antiderivative F of f. So each rule for derivatives becomes a rule for integrals (our own).

**Problem.** For continuously differentiable u and v on \[a, b\], the integral of uv′ plus the integral of u′v equals u(b)v(b) − u(a)v(a).

**How the definition helps.** The product rule makes uv an antiderivative of u′v + uv′, so the two integrals add up to the change in uv (our own). The mean value theorem makes this change independent of the chosen antiderivative. The fundamental theorem of calculus gives every continuous f an antiderivative and matches this integral with Riemann’s (our own).

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “the antiderivatives and indefinite integrals of a function”

**Paper or page:** [Integration by Parts/Definite Integral](https://proofwiki.org/wiki/Integration_by_Parts/Definite_Integral). It says: “Let f and g have primitives F and G respectively on \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### Defining the integral by antiderivatives makes substitution the chain rule

**Remember:** Compose the antiderivative and read off the new endpoints.

*True by definition. Confidence: medium.* MSC 26A36 (Antidifferentiation), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a continuous real function f on an interval, the signed integral from u to v is F(v) − F(u), the change between the two points of any antiderivative F of f.

**Problem.** Let g be continuously differentiable on \[a, b\], and let f be continuous on an interval containing g(\[a, b\]). Then the integral of f(g(x))g′(x) from a to b equals the signed integral of f from g(a) to g(b), even when g is not one-to-one.

**How the definition helps.** By the chain rule, F ∘ g is an antiderivative of f(g(x))g′(x). So both integrals equal F(g(b)) − F(g(a)), in whichever order the endpoints come (our own). The fundamental theorem of calculus supplies F and matches this integral with the Riemann integral (our own).

**Wikipedia:** [Integration by substitution](https://en.wikipedia.org/wiki/Integration_by_substitution). It says: “combining the chain rule and the definition of an antiderivative gives:”

**Sources:** none listed. No primary source with a working link was found.

### Darboux bounds ignore changes at finitely many points

**Remember:** A few points sit on pieces you can make arbitrarily thin.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A bounded f on \[a,b\] is Darboux integrable if for every ε &gt; 0 some partition makes its upper and lower sums differ by less than ε, and its integral is the number they squeeze. Each sum adds piece length times the supremum or infimum of f there, so a piece counts only in proportion to its length.

**Problem.** Changing finitely many values of a Riemann integrable function on a closed interval leaves it integrable and preserves its integral.

**How the definition helps.** The difference h of the two functions is zero except at finitely many points, so only pieces containing those points add to its Darboux sums (our own). Making those pieces short makes both sums as small as wanted, so h is integrable with integral 0 (our own). Linearity and the equivalence of Darboux and Riemann integrals give the unchanged integral (our own).

**Wikipedia:** [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). It says: “a finite number of points can always be covered by a finite collection of intervals with arbitrarily small total length”

**Sources:** none listed. No primary source with a working link was found.

### Darboux bounds make accumulated area change at a bounded rate

**Remember:** A short interval cannot accumulate more area than height times length.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For an integrable f on \[a, b\], the accumulated area at x is the integral of f from a to x. Darboux sums trap the integral over any interval between rectangles whose heights bound f there. So when \|f\| ≤ M, its absolute value is at most M times the length (our own).

**Problem.** Suppose \|f\| ≤ M on \[a, b\] and f is Riemann integrable there. Its accumulated area changes by at most M\|y − x\| between any two points x and y.

**How the definition helps.** By interval additivity, the change in accumulated area from x to y is the integral over the interval between them (our own). The Darboux bounds with constant heights −M and M put this integral within M\|y − x\| of zero (our own). Unlike a derivative argument, this needs no continuity of f (our own).

**Paper or page:** [Darboux's Theorem](https://proofwiki.org/wiki/Darboux's_Theorem). It says: “M is an upper bound of f on \[a, b\]”

**Sources:** none listed. No primary source with a working link was found.

### Darboux gaps show that products stay integrable

**Remember:** Product spreads are controlled by the factors’ spreads, piece by piece.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Darboux gap of a bounded f on a partition of \[a,b\] adds, over the pieces, the largest spread \|f(x) − f(y)\| within each piece times its length. f is integrable when, for every ε &gt; 0, some finite partition makes this gap smaller than ε.

**Problem.** The product of two Riemann integrable functions on a closed interval is Riemann integrable.

**How the definition helps.** Since f(x)g(x) − f(y)g(y) = f(x)(g(x) − g(y)) + g(y)(f(x) − f(y)), the spread of fg on a piece is at most M times the spreads of f and g, where M bounds \|f\| and \|g\| (our own). On a common refinement of small-gap partitions for f and g, the gap of fg is at most M times the sum of their gaps (our own). Darboux and Riemann integrability agree, so fg is Riemann integrable (our own).

**Paper or page:** [Condition for Darboux Integrability](https://proofwiki.org/wiki/Condition_for_Darboux_Integrability). It says: “there exists a finite subdivision S of \[a, b\] such that U(S) – L(S) &lt; ε”

**Sources:** none listed. No primary source with a working link was found.

### Darboux gaps split at any cut

**Remember:** The gap adds length times oscillation, piece by piece.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The Darboux gap of a bounded f on a partition of \[a,b\] adds, over the pieces, the oscillation of f (supremum minus infimum) times the piece length, and adding points never increases it (our own). f is integrable when, for every ε &gt; 0, some partition makes the gap smaller than ε.

**Problem.** Let f be bounded on \[a, b\] and let c lie strictly between a and b. The function is integrable on \[a, b\] exactly when it is integrable on both pieces.

**How the definition helps.** A partition containing c splits into partitions of \[a, c\] and \[c, b\], and its gap is the sum of their gaps (our own). To restrict, add c to a small-gap partition; to join, combine small-gap partitions of the two pieces (our own). Darboux and Riemann integrability agree (our own).

**Paper or page:** [Existence of Integral on Union of Adjacent Intervals](https://proofwiki.org/wiki/Existence_of_Integral_on_Union_of_Adjacent_Intervals). It says: “f is Darboux integrable on \[a, c\] and \[c, b\]”

**Sources:** none listed. No primary source with a working link was found.

### Darboux rectangles give the area under an integrable graph

**Remember:** The inner and outer rectangles meet at the integral.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A region has Jordan area A if finite unions of rectangles inside it and finite unions containing it both have areas arbitrarily close to A. For a nonnegative f, the lower and upper Darboux sums are exactly the areas of such inner and outer rectangle unions for the region under the graph (our own).

**Problem.** The region between a nonnegative Riemann integrable function and the horizontal axis on a closed interval has Jordan area equal to the integral.

**How the definition helps.** For integrable f, some partition puts both Darboux sums within ε of the integral, so the inner and outer rectangle unions pin the area to the integral (our own). Darboux integrability matches Riemann integrability, which gives the stated form (our own).

**Paper or page:** [Area under Curve/Lemma](https://proofwiki.org/wiki/Area_under_Curve/Lemma). It says: “Then A equals the Darboux integral of f over \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums make every monotone function integrable by a telescoping sum

**Remember:** For monotone functions, the gap between upper and lower sums telescopes.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A48. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\] and a partition, the upper sum adds each piece length times the supremum of f there, and the lower sum uses the infimum. f is Darboux integrable when the infimum of the upper sums equals the supremum of the lower sums. For monotone f, these heights are the values at the two ends of each piece (our own).

**Problem.** Every monotone real function on a closed bounded interval \[a, b\] is Darboux integrable, and hence Riemann integrable.

**How the definition helps.** On n equal pieces, the gap between the sums is (b − a)/n times the sum of the end-value differences, which telescopes to (b − a)\|f(b) − f(a)\|/n (our own). This tends to zero, so the two bounds agree (our own). Darboux and Riemann integrability are equivalent (our own).

**Paper or page:** [Monotone Real Function is Darboux Integrable](https://proofwiki.org/wiki/Monotone_Real_Function_is_Darboux_Integrable). It says: “Then f is Darboux integrable over \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums reject the rational indicator

**Remember:** Every piece sees heights 0 and 1, so the gap stays 1.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\], a partition gives a lower sum built on the infimum of f on each piece and an upper sum built on the supremum, each times the piece length. f is Darboux integrable when, for every ε &gt; 0, some partition makes the upper sum minus the lower sum smaller than ε.

**Problem.** The function on \[0, 1\] that equals one on rational numbers and zero elsewhere is not Riemann integrable.

**How the definition helps.** Every piece contains rational and irrational numbers, so every lower sum is 0 and every upper sum is 1 (our own). The gap is always 1, so the function fails the Darboux test (our own). Darboux and Riemann integrability agree, which gives the conclusion (our own).

**Wikipedia:** [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). It says: “This function does not have a Riemann integral.”

**Paper or page:** [Equivalence of Definitions of Riemann and Darboux Integrals](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Riemann_and_Darboux_Integrals). It says: “the Darboux integral of f over \[a, b\] exists and is equal to L.”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums turn integrability into one test on a single partition

**Remember:** Squeeze the integral between rectangles above and rectangles below.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\] and a finite partition P, the upper sum U(P) adds each piece length times the supremum of f there, and the lower sum L(P) uses the infimum. f is Darboux integrable when inf U(P) = sup L(P) over all partitions.

**Problem.** A bounded f is integrable exactly when, for every ε &gt; 0, some partition has upper sum minus lower sum below ε. So every monotone function on \[a, b\] is integrable.

**How the definition helps.** One partition traps both bounds between L(P) and U(P), so a small gap forces equality; conversely, refine two near-optimal partitions together (our own). For monotone f, the gap on n equal pieces telescopes to (b − a)\|f(b) − f(a)\|/n, which tends to zero (our own). Darboux and Riemann integrability agree (our own).

**Wikipedia:** [Darboux integral](https://en.wikipedia.org/wiki/Darboux_integral). It says: “An equivalent and sometimes useful criterion for the integrability of f is to show that for every ε &gt; 0 there exists a partition Pε of \[a, b\] such that”

**Sources:**

- [Gaston Darboux, Mémoire sur les fonctions discontinues, Annales scientifiques de l'École normale supérieure 4 (1875)](https://doi.org/10.24033/asens.122)

### Reduced denominators make Thomae’s function integrable with integral zero

**Remember:** Only finitely many points on a bounded interval have small denominators.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Thomae’s function is 0 at each irrational number and 1/q at each rational p/q in lowest terms with q &gt; 0. So it exceeds a height 1/N only at rationals with denominator less than N, and a bounded interval holds finitely many of those (our own).

**Problem.** Thomae’s function is Riemann integrable on every closed bounded interval and has integral zero.

**How the definition helps.** Every lower sum is 0, since each piece contains an irrational number (our own). On a fine partition, the few pieces touching points above height ε have tiny total length, and all other heights are at most ε, so upper sums tend to zero (our own). Giving every rational the height 1 instead makes every upper sum equal the interval length (our own).

**Wikipedia:** [Thomae's function](https://en.wikipedia.org/wiki/Thomae%27s_function). It says: “f is Riemann integrable on any interval”

**Sources:** none listed. No primary source with a working link was found.

### Reversing the limits flips the sign, so interval additivity always holds

**Remember:** Integrate backwards, and the sign flips.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A06. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a &lt; b, the integral from b to a is minus the integral from a to b, and the integral from a to a is zero. This makes the integral signed, so going from a to b and back again gives zero.

**Problem.** If f is Riemann integrable on an interval containing a, b and c in any order, its integrals from a to b and from b to c add up to its integral from a to c. For continuous f, F(x) = ∫ₐˣ f has derivative f(x) at interior points on either side of a.

**How the definition helps.** With signs, each ordering of a, b and c is the ordered additivity rule after moving terms across the equality (our own). For x &lt; a, F(x) = −∫ₓᵃ f, so the fundamental theorem of calculus gives F′ = f on both sides of a (our own).

**Wikipedia:** [Integral](https://en.wikipedia.org/wiki/Integral). It says: “The first convention is necessary in consideration of taking integrals over subintervals of \[a, b\]; the second says that an integral taken over a degenerate interval, or a point, should be zero.”

**Sources:** none listed. No primary source with a working link was found.

### Signed heights make integration linear

**Remember:** Signed heights can cancel before or after you add.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A Riemann sum S(P) of a tagged partition P of \[a,b\] adds each piece length times the signed value of f at its tag, so negative values subtract. The integral is I if for every ε &gt; 0 some δ &gt; 0 gives \|S(P) − I\| &lt; ε whenever every piece is shorter than δ.

**Problem.** Let f and g be Riemann integrable on the same closed bounded interval. Every real linear combination is integrable there, and integration preserves that combination.

**How the definition helps.** With signed values, the Riemann sum of αf + βg is α times that of f plus β times that of g for every tagged partition, so the limit laws give the same combination of integrals (our own). Unsigned area fails: the constant functions 1 and −1 each bound area 1, but their sum bounds area 0 (our own).

**Paper or page:** [Linear Combination of Integrals/Definite](https://proofwiki.org/wiki/Linear_Combination_of_Integrals/Definite). It says: “The integral of this linear combination equals the same linear combination of their integrals.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform limits preserve Riemann integrals

**Remember:** A small error everywhere gives a small total error.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 40A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence fₙ converges uniformly to f on E if the errors shrink everywhere at once: for every ε &gt; 0 some N gives \|fₙ(x) − f(x)\| &lt; ε for all n ≥ N and all x in E.

**Problem.** If Riemann integrable functions on a closed bounded interval converge uniformly, their limit is integrable. Its integral is the limit of their integrals.

**How the definition helps.** If \|fₙ − f\| &lt; ε on all of \[a, b\], every upper and lower sum of f is within ε(b − a) of the matching sum of fₙ (our own). So f passes the Darboux test, and its integral is within ε(b − a) of that of fₙ (our own). Pointwise convergence is not enough: on \[0, 1\], the function equal to n on (0, 1/n) and 0 elsewhere has integral 1 but tends to 0 (our own).

**Wikipedia:** [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence). It says: “the uniform limit of Riemann integrable functions is automatically Riemann integrable.”

**Paper or page:** [Definite Integral of Limit of Uniformly Convergent Sequence of Integrable Functions](https://proofwiki.org/wiki/Definite_Integral_of_Limit_of_Uniformly_Convergent_Sequence_of_Integrable_Functions). It says: “Then f is integrable, and”

**Sources:** none listed. No primary source with a working link was found.

### Convex chords order slopes

**Remember:** The middle point below the chord orders the three slopes.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function f on an interval is convex if every chord lies on or above the graph: f((1−t)u + tw) ≤ (1−t)f(u) + tf(w) for all u, w in the interval and t ∈ \[0,1\]. So a middle point v between u and w has its value on or below the chord from u to w.

**Problem.** For u &lt; v &lt; w, a convex function has nondecreasing slopes on \[u, v\], \[u, w\], and \[v, w\], in that order.

**How the definition helps.** Write v = (1 − t)u + tw with t = (v − u)/(w − u), and apply the chord bound at v. Rearranging gives slope\[u, v\] ≤ slope\[u, w\] and slope\[u, w\] ≤ slope\[v, w\] (our own). No derivative is needed (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “The proof is virtually trivial; just write v as a convex combination t u + (1−t)w and use the definition of convexity.”

**Sources:** none listed. No primary source with a working link was found.

### Epigraph intersections preserve convexity

**Remember:** Above the highest graph means above every graph.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function is convex if its epigraph, the set of points on or above its graph, contains the segment between any two of its points. A point lies above the pointwise supremum of a family exactly when it lies above every member.

**Problem.** On a common interval, the pointwise supremum of convex functions is convex if it is finite everywhere there.

**How the definition helps.** The epigraph of the supremum is the intersection of the epigraphs (our own). A segment between two points of the intersection lies in every epigraph, hence in the intersection (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “The pointwise maximum of two convex functions on D is again convex.”

**Paper or page:** [Pointwise Supremum of Family of Convex Real Functions is Convex](https://proofwiki.org/wiki/Pointwise_Supremum_of_Family_of_Convex_Real_Functions_is_Convex). It says: “Then f is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Ordered slopes give one-sided derivatives

**Remember:** Chord slopes only rise, so they settle from each side.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A24. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Here f is convex on an interval when its chord slopes rise from left to right: for x &lt; y &lt; z, the slope from x to y is at most the slope from y to z. This is equivalent to every chord lying on or above the graph (our own).

**Problem.** A finite convex function on an open real interval has finite left and right derivatives at each point.

**How the definition helps.** The slope from x to z is a weighted average of the two adjacent slopes, so slopes with one end fixed rise as the other end moves right (our own). Near an interior point, chords to fixed points on each side bound these monotone slopes, so both one-sided limits exist and are finite (our own).

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “Moreover, f admits left and right derivatives, and these are monotonically non-decreasing.”

**Sources:** none listed. No primary source with a working link was found.

### Reflection makes increasing convex inverses concave

**Remember:** Swap the axes, and above an increasing graph becomes below its inverse.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function is convex if the region on or above its graph is a convex set, and concave if the region on or below its graph is convex. For a strictly increasing function, swapping the coordinates turns the region above its graph into the region below the inverse’s graph, within the domain and range (our own).

**Problem.** The inverse of a strictly increasing convex function on an open interval is concave on its range.

**How the definition helps.** Strict increase makes the swap a bijection from the convex region above f, cut to the domain I and range J, onto the region below f⁻¹ (our own). Swapping preserves segments, so the region below f⁻¹ is convex (our own). A convex function on an open interval is continuous, so the range J is an interval (our own).

**Paper or page:** [Inverse of Strictly Increasing Convex Real Function is Concave](https://proofwiki.org/wiki/Inverse_of_Strictly_Increasing_Convex_Real_Function_is_Concave). It says: “If f be strictly increasing on I, then f⁻¹ is concave on J.”

**Sources:** none listed. No primary source with a working link was found.

### Strict convexity makes minima unique

**Remember:** Two lowest points would force an even lower midpoint.

*Rules out counterexamples.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function on an interval is strictly convex if each chord between two distinct graph points lies strictly above the graph between them. So between two points with equal values, the midpoint has a strictly lower value.

**Problem.** A strictly convex function on an interval has at most one point where it attains its minimum.

**How the definition helps.** If two distinct points were both minimizers, their midpoint would have a value strictly below the minimum (our own). Ordinary convexity allows several minimizers, as the constant zero function on \[0, 1\] shows (our own).

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “A strictly convex function will have at most one global minimum.”

**Sources:** none listed. No primary source with a working link was found.

### One linear derivative gives every directional derivative

**Remember:** Feed a direction into the derivative to get its slope.

*True by definition.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The total derivative of f at a is one linear map L with f(a + h) = f(a) + Lh + r(h), where the error r(h) divided by the length of h tends to zero as h → 0. It approximates f in every direction at once.

**Problem.** If f has total derivative L at a, then for every vector v, the function t ↦ f(a + tv) has slope Lv at t = 0.

**How the definition helps.** For nonzero v, put h = tv: then (f(a + tv) − f(a))/t = Lv + r(tv)/t, and r(tv)/t → 0 because r(tv)/\|tv\| → 0 (our own). For v = 0 the slope is 0 = Lv.

**nLab:** [differentiable map](https://ncatlab.org/nlab/show/differentiable+map). It says: “then dfₓ(v) is its directional derivative along v.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-7](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Twice differentiable maps have symmetric second derivatives

**Remember:** The derivative itself must be differentiable, not just its partials.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A map f from an open set in ℝⁿ to ℝᵐ is twice differentiable if its derivative df, a map into the linear maps from ℝⁿ to ℝᵐ, is itself differentiable. Then d(df)ₓ(v, w) is the limit as t → 0 of \[f(x + tv + tw) − f(x + tv) − f(x + tw) + f(x)\]/t², which is symmetric in v and w (our own).

**Problem.** If f is twice differentiable, its mixed partial derivatives are equal: ∂²f/∂xᵢ∂xⱼ = ∂²f/∂xⱼ∂xᵢ. Equivalently, the bilinear map d(df) is symmetric at every point.

**How the definition helps.** Differentiability of df at x and the mean value theorem make the mixed difference over t² tend to d(df)ₓ(v, w) (our own). The difference does not change when v and w swap, so neither does the limit (our own). Second partials alone are not enough: xy(x² − y²)/(x² + y²), extended by 0 at the origin, has unequal mixed partials there (our own).

**nLab:** [differentiable map](https://ncatlab.org/nlab/show/differentiable+map). It says: “However, the theorem shows that if we require f to actually be twice differentiable rather than merely having second-order partial derivatives, then this cannot happen.”

**Sources:** none listed. No primary source with a working link was found.

### Unit directions reveal steepest slopes

**Remember:** Compare equal-length steps to find the steepest slope.

*Makes the theorem clean to state or prove.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Let f be a real function on an open subset of ℝⁿ. Its directional slope at a along a unit vector u is the limit of (f(a + tu) − f(a))/t as t → 0. Unit vectors compare steps of equal length, so for differentiable f the slope ∇f(a) · u depends only on the angle between u and the gradient (our own).

**Problem.** For a differentiable real function, the greatest directional slope equals the length of its gradient. If the gradient is nonzero, that slope occurs in the gradient direction.

**How the definition helps.** By the chain rule the slope along u is ∇f(a) · u = \|∇f(a)\| cos θ, where θ is the angle to the gradient (our own). This is largest, equal to \|∇f(a)\|, when u points along a nonzero gradient (our own). Without unit length, scaling an uphill vector would make the rate arbitrarily large (our own).

**Wikipedia:** [Gradient](https://en.wikipedia.org/wiki/Gradient). It says: “The steepness of the slope at that point is given by the magnitude of the gradient vector.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §4.6.](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient)

### Bilinearity gives one product rule for vector products

**Remember:** A bilinear product is linear in either input when the other stays fixed.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B12 (Calculus of vector functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A bilinear map B between finite-dimensional real vector spaces is linear in each input when the other is held fixed, like the product of numbers or the dot product. So a change in B(u, v) splits as B(Δu, v) + B(u, Δv) + B(Δu, Δv).

**Problem.** Let u and v be differentiable at a, with derivatives U and V. The derivative of x ↦ B(u(x),v(x)) sends h to B(Uh,v(a)) + B(u(a),Vh).

**How the definition helps.** Expand the change in B(u(x), v(x)) between a and a + h into these three terms (our own). The two linear terms give B(Uh, v(a)) + B(u(a), Vh) up to errors small compared with \|h\| (our own). In finite dimensions the cross term is at most a constant times \|Δu\|\|Δv\|, which is also small compared with \|h\|.

**nLab:** [bilinear map](https://ncatlab.org/nlab/show/bilinear+map). It says: “a bilinear map f : A × B → C is a function of sets”

**Paper or page:** [Derivative of Dot Product of Vector-Valued Functions](https://proofwiki.org/wiki/Derivative_of_Dot_Product_of_Vector-Valued_Functions). It says: “The derivative of their dot product is given by”

**Sources:** none listed. No primary source with a working link was found.

### Unit speed makes acceleration perpendicular

**Remember:** A constant speed leaves acceleration only to turn the velocity.

*True by definition.* MSC 26B12 (Calculus of vector functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A curve γ is parametrized by arc length if it has unit speed, ‖γ′(s)‖ = 1 at every s, so each parameter interval \[s, t\] has length t − s. Then γ′ · γ′ is the constant 1.

**Problem.** When a twice continuously differentiable regular curve is measured by arc length, its acceleration is perpendicular to its velocity.

**How the definition helps.** Differentiating γ′ · γ′ = 1 gives 2γ′ · γ″ = 0, so acceleration is perpendicular to velocity (our own). Every regular curve can be reparametrized this way, since arc length has derivative equal to the speed (our own).

**Wikipedia:** [Differentiable curve](https://en.wikipedia.org/wiki/Differentiable_curve). It says: “is at a constant unit speed.”

**Sources:** none listed. No primary source with a working link was found.

### Scalar line integrals ignore direction

**Remember:** Reversing the walk reverses the pieces, not their lengths.

*True by definition.* MSC 26B15 (Integration of real functions of several variables: length, area, volume). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The scalar line integral of a continuous f along a smooth path γ on \[a,b\] is ∫ₐᵇ f(γ(t))‖γ′(t)‖ dt, which weights f by the speed ‖γ′‖. Speed has no direction, so reversing the path does not change the weights (our own).

**Problem.** Reversing a smooth curve leaves the scalar line integral of a continuous function unchanged.

**How the definition helps.** The reversed path t ↦ γ(a + b − t) has velocity −γ′(a + b − t), with the same speed (our own). The substitution s = a + b − t turns its integral into the original one (our own).

**nLab:** [line integral](https://ncatlab.org/nlab/show/line+integral). It says: “whether increasing or decreasing”

**Wikipedia:** [Line integral](https://en.wikipedia.org/wiki/Line_integral). It says: “Line integrals of scalar fields over a curve C do not depend on the chosen parametrization r of C.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §6.2.](https://openstax.org/books/calculus-volume-3/pages/6-2-line-integrals)

### Clockwise inner boundaries preserve Green’s theorem

**Remember:** Keep the region on your left, even at a hole.

*Rules out counterexamples.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A boundary curve is positively oriented if walking along it keeps the region on your left. This sends you counterclockwise around the outer boundary and clockwise around each hole.

**Problem.** Let a bounded plane region have a boundary of finitely many disjoint, simple, piecewise smooth closed curves, oriented positively. For a vector field with continuous first derivatives near the closed region, the circulation around this boundary equals the area integral of the scalar curl.

**How the definition helps.** Cut the region into pieces without holes; Green’s theorem holds on each, and the left-hand rule makes the two sides of every cut run in opposite directions, so they cancel (our own). With all circles counterclockwise it fails: on a ring around the origin, (−y, x)/(x² + y²) has zero curl, but each circle has circulation 2π (our own).

**Wikipedia:** [Green's theorem](https://en.wikipedia.org/wiki/Green%27s_theorem). It says: “where the path of integration along C is counterclockwise.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §6.4.](https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem)

### Differentials turn gradient line integrals into endpoint differences

**Remember:** A pulled-back differential is the derivative of the function along the path.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The differential df of f takes a velocity v and returns the rate of change of f in that direction, ∇f · v. To integrate df along a path, integrate df(γ′(t)) over time; this is the rate of change of f along the path (our own).

**Problem.** Let f have continuous first derivatives. The line integral of its gradient ∇f along a piecewise smooth path from a to b is f(b) − f(a).

**How the definition helps.** By the chain rule, df(γ′(t)) = (f ∘ γ)′(t), so on each smooth piece the fundamental theorem of calculus makes the integral a change in f (our own). Adding the pieces, the intermediate values cancel, leaving f(b) − f(a) (our own).

**Paper or page:** [Fundamental Theorem of Line Integrals](https://proofwiki.org/wiki/Fundamental_Theorem_of_Line_Integrals). It says: “∫₍C₎ ∇f · d𝐫 = f(𝐫(b)) − f(𝐫(a))”

**Sources:** none listed. No primary source with a working link was found.

### All directions detect joint convexity

**Remember:** Test every direction, including directions between the axes.

*Rules out counterexamples.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function on a convex set is convex if it is convex along every line segment in the set, in every direction. Convexity along lines parallel to the axes only, called separate convexity, is weaker.

**Problem.** A twice continuously differentiable function on an open convex set is convex exactly when its Hessian is positive semidefinite everywhere. That means the matrix of second derivatives gives a nonnegative quadratic value in every direction.

**How the definition helps.** Along the line through x in direction v, the second derivative is the Hessian’s quadratic value at v, so the one-variable second derivative test gives the result (our own). Directions between the axes matter: xy is linear along each coordinate line but concave along y = −x (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “a twice-differentiable function f: D → ℝ is convex iff its Hessian is a positive semidefinite bilinear form.”

**Sources:** none listed. No primary source with a working link was found.

### Derivatives lower root multiplicity by one

**Remember:** Differentiating moves the first nonzero derivative one place earlier.

*True by definition.* MSC 26C05 (Real polynomials: analytic properties, etc.). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The multiplicity of a root a of a nonzero real polynomial p is the order of the first derivative of p that is nonzero at a, where order zero is p itself.

**Problem.** Differentiating a nonzero real polynomial lowers the multiplicity of each root by one. A root of multiplicity one is no longer a root.

**How the definition helps.** The derivatives of p′ at a are those of p shifted one place, so the first nonzero one comes one order earlier (our own). Multiplicity one means p′(a) ≠ 0, so a is no longer a root. Taylor’s formula for polynomials shows that this count equals the number of factors x − a (our own).

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “If a is a root of multiplicity k of a polynomial, then it is a root of multiplicity k − 1 of the derivative”

**Sources:** none listed. No primary source with a working link was found.

### Odd multiplicity makes roots cross

**Remember:** Split off (x − a)ᵐ; only its parity decides the sign change.

*True by definition.* MSC 26C05 (Real polynomials: analytic properties, etc.). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The multiplicity of a real root a of a nonzero real polynomial P is the largest m with P(x) = (x − a)ᵐQ(x) for a polynomial Q. Then Q(a) ≠ 0, so Q keeps one sign near a (our own).

**Problem.** A nonzero real polynomial changes sign across a real root exactly when that root has odd multiplicity.

**How the definition helps.** Near a, P has the sign of (x − a)ᵐ times a fixed sign, and (x − a)ᵐ changes sign at a exactly when m is odd (our own). The root 0 of x² is a root where the graph does not cross (our own).

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “The graph traverses the x-axis at roots of odd multiplicity and does not traverse it at roots of even multiplicity”

**Sources:** none listed. No primary source with a working link was found.

### Tangent lines give Bernoulli’s inequality for real exponents

**Remember:** Convex graphs lie above their tangents, and 1 + rx is one.

*True by definition.* MSC 26D07 (Inequalities involving other types of functions), 26A51. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A differentiable function f on an open interval is convex when its graph lies above every tangent line: f(y) ≥ f(x) + f′(x)(y − x) for all x, y there. It is concave when its graph lies below every tangent line.

**Problem.** For x &gt; −1 and r ≥ 1, the rth power of 1 + x is at least 1 + rx. For 0 &lt; r &lt; 1, the inequality reverses.

**How the definition helps.** The tangent line to (1 + x)ʳ at x = 0 is 1 + rx, so the inequality is the tangent-line test at zero (our own). On x &gt; −1 the second derivative r(r − 1)(1 + x)ʳ⁻² is ≥ 0 for r ≥ 1 and ≤ 0 for 0 &lt; r &lt; 1, which fixes the direction (our own).

**Wikipedia:** [Bernoulli's inequality](https://en.wikipedia.org/wiki/Bernoulli%27s_inequality). It says: “(1 + x)ʳ ≥ 1 + rx for every real number r ≥ 1 and x ≥ −1”

**Sources:** none listed. No primary source with a working link was found.

### Pairwise covariance proves Chebyshev’s sum inequality

**Remember:** Lists sorted alike make every pairwise product of differences nonnegative.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The covariance of two lists a and b of length n is half the average, over all n² ordered pairs (i, j), of (aᵢ − aⱼ)(bᵢ − bⱼ). It equals the mean of the products aᵢbᵢ minus the product of the means.

**Problem.** If two real lists are both sorted in decreasing order, the mean of their termwise products is at least the product of their means.

**How the definition helps.** When both lists are sorted the same way, each product (aᵢ − aⱼ)(bᵢ − bⱼ) is ≥ 0, so the covariance is ≥ 0 (our own). Expanding the pairwise sum gives the second form, which is the inequality (our own).

**Paper or page:** [Chebyshev's Sum Inequality/Discrete](https://proofwiki.org/wiki/Chebyshev's_Sum_Inequality/Discrete). It says: “Then: (1/n) ∑ₖ₌₁ⁿ aₖbₖ ≥ ((1/n) ∑ₖ₌₁ⁿ aₖ)((1/n) ∑ₖ₌₁ⁿ bₖ)”

**Sources:** none listed. No primary source with a working link was found.

### Strict convexity rules out equality for different inputs

**Remember:** No straight part means no equality for different inputs.

*Rules out counterexamples. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function on an interval is strictly convex if, for any two distinct points of its graph, the graph lies strictly below the chord at every point strictly between them. So the graph has no straight piece.

**Problem.** Take a weighted average with nonnegative weights totaling one. For a strictly convex function, averaging before or after applying the function gives equal results exactly when all positive-weight inputs coincide.

**How the definition helps.** If two distinct inputs have positive weight, replacing them by their weighted mean makes the weighted average of f-values strictly drop (our own). Ordinary Jensen for the shortened list then gives a strict inequality (our own). The function \|x\| is convex but not strictly, and the inputs 1 and 3 with equal weights give equality (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “A function f is strictly convex if the inequality holds strictly whenever 0 &lt; t &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### Strict ordering makes the best rearrangement unique

**Remember:** With no ties, correcting a reversed pair always helps.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A list is strictly increasing if each entry is larger than the one before it, so no two entries tie.

**Problem.** For two strictly increasing real lists of the same finite length, only pairing equal positions maximizes the sum of pairwise products.

**How the definition helps.** Swapping a reversed pair changes the sum by a product of two positive differences, so it strictly increases the sum (our own). Every pairing other than the identity has a reversed pair, so it is not a maximum (our own). With ties, such as (1, 1) against (2, 3), both pairings give 5 (our own).

**Wikipedia:** [Rearrangement inequality](https://en.wikipedia.org/wiki/Rearrangement_inequality). It says: “If y₁ &lt; ⋯ &lt; yₙ, then the only such σ is the identity.”

**Sources:** none listed. No primary source with a working link was found.

### The convex unit ball keeps the triangle inequality

**Remember:** Scale the convex unit ball until it just holds the vector.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For p ≥ 1, the p-norm ‖x‖ of a vector x is the infimum of the s &gt; 0 with x in sB, where B is the convex set of vectors with ∑\|xᵢ\|ᵖ ≤ 1. This infimum equals (∑\|xᵢ\|ᵖ)¹⁄ᵖ.

**Problem.** For finite vectors and p ≥ 1, the p-norm of a sum is at most the sum of the two p-norms.

**How the definition helps.** For nonzero x and y, x + y is (‖x‖ + ‖y‖) times a weighted average of x/‖x‖ and y/‖y‖, and convexity keeps that average in B (our own). The ball B is convex because t ↦ \|t\|ᵖ is convex for p ≥ 1 (our own). At p = ½ the ball is not convex: the two coordinate vectors in the plane have length one, but their sum has length four (our own).

**nLab:** [p-norm](https://ncatlab.org/nlab/show/p-norm). It says: “For 0 ≤ p &lt; 1 one may still make sense of the formulas that define p-norms for p ≥ 1 (see at Generalizations below), but the resulting concepts are no longer genuine norms.”

**Sources:** none listed. No primary source with a working link was found.

### The maximum norm includes Hölder’s endpoint

**Remember:** Bound every entry of b by its largest absolute entry.

*Makes the theorem clean to state or prove.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The ∞-norm ‖b‖∞ of a finite list b is its largest absolute entry. With 1/∞ read as 0, the pair p = 1, q = ∞ satisfies 1/p + 1/q = 1, so Hölder’s inequality covers it.

**Problem.** For finite lists a and b of the same length, ∑\|aᵢbᵢ\| ≤ (∑\|aᵢ\|)‖b‖∞.

**How the definition helps.** Each \|bᵢ\| is at most ‖b‖∞, so each term \|aᵢbᵢ\| is at most \|aᵢ\|‖b‖∞, and summing gives the bound (our own). The name fits because the p-norm tends to the largest absolute entry as p → ∞ (our own).

**nLab:** [p-norm](https://ncatlab.org/nlab/show/p-norm). It says: “For p = ∞ the p-norm (found by taking the limit p → ∞) is the supremum (or essential supremum in the continuous case) of the absolute values of the components of vectors, then called the supremum norm.”

**Sources:** none listed. No primary source with a working link was found.

### Analytic functions equal their Taylor series

**Remember:** A function that is a power series is its own Taylor series.

*Rules out counterexamples.* MSC 26E05 (Real-analytic functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function is analytic at a point if, near that point, it equals the sum of a convergent power series centered there.

**Problem.** A real analytic function agrees near each point of analyticity with its Taylor series there.

**How the definition helps.** A convergent power series can be differentiated term by term, and this gives aₙ = f⁽ⁿ⁾(a)/n!, so the series is the Taylor series (our own). Smoothness alone is not enough: exp(−1/x²), extended by 0 at 0, has all derivatives zero at 0 but is positive elsewhere (our own).

**Wikipedia:** [Analytic function](https://en.wikipedia.org/wiki/Analytic_function). It says: “a function that is locally represented by a convergent power series.”

**Paper or page:** [Calculus: Taylor](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then aₙ = f⁽ⁿ⁾(0)/n!.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic averaging gives the arithmetic–geometric mean inequality

**Remember:** Geometric mean: average the logarithms, then exponentiate.

*True by definition.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For positive inputs and positive weights that sum to one, the weighted geometric mean is the exponential of the weighted average of the logarithms. It equals the product of the inputs raised to their weights (our own).

**Problem.** The weighted arithmetic mean is at least the weighted geometric mean for the same positive inputs and weights. Equality holds exactly when all inputs are equal.

**How the definition helps.** With yᵢ = log xᵢ, the claim says that exp of an average is at most the average of exp, which is Jensen’s inequality for the strictly convex exponential (our own). Strict convexity gives equality only when all yᵢ, hence all inputs, are equal (our own).

**Wikipedia:** [Geometric mean](https://en.wikipedia.org/wiki/Geometric_mean). It says: “The geometric mean can also be expressed as the exponential of the arithmetic mean of logarithms.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### With M₀ the geometric mean, power means form one monotone family

**Remember:** Zero gives the geometric mean, the limit of the power means.

*Makes the theorem clean to state or prove.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For positive x₁, …, xₙ and real p ≠ 0, the power mean Mₚ is the p-th root of the average of the p-th powers. Set M₀ to the geometric mean, the limit of Mₚ as p → 0, and M₊∞ and M₋∞ to the maximum and the minimum.

**Problem.** The power mean inequality says that the p-th power mean is at most the q-th power mean whenever p &lt; q. For p in {−1, 0, 1} it gives harmonic ≤ geometric ≤ arithmetic.

**How the definition helps.** With the missing exponents filled by limits, one monotone statement covers every exponent (our own). Jensen’s inequality gives Mₚ ≤ M<sub>q</sub> for nonzero p &lt; q, and the cases with 0 or ±∞ follow by taking limits (our own). L’Hôpital’s rule on log Mₚ at p = 0 gives the average logarithm (our own).

**Wikipedia:** [Generalized mean](https://en.wikipedia.org/wiki/Generalized_mean). It says: “For p = 0 we set it equal to the geometric mean (which is the limit of means with exponents approaching zero, as proved below)”

**Sources:** none listed. No primary source with a working link was found.

### A fixed positive gap makes the order of Cauchy reals well-defined

**Remember:** A positive gap survives a change of sequence.

*Rules out counterexamples.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Cauchy real is a class of rational Cauchy sequences, two sequences being equal when their difference tends to zero. One class is larger than another if, from some term on, its terms exceed the other’s by at least a fixed positive rational.

**Problem.** Strict comparison of Cauchy reals does not depend on which sequences represent them.

**How the definition helps.** A fixed gap ε survives a change of representatives: each new sequence eventually differs from the old one by less than ε/4, which leaves a gap of at least ε/2 (our own). Eventual strict inequality alone is not well defined, since 1, 1/2, 1/3, … exceeds 0, 0, 0, … but represents zero.

**nLab:** [Cauchy real number](https://ncatlab.org/nlab/show/Cauchy+real+number). It says: “with two sequences considered equivalent if their difference converges to zero.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing infinite values makes the monotone convergence theorem statable

**Remember:** Add +∞ so every increasing sequence has a limit.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The extended nonnegative reals \[0, +∞\] add +∞ to the nonnegative reals, so that every increasing sequence has a limit, its supremum (our own). Measure theory sets 0 · ∞ = 0.

**Problem.** For an increasing sequence of non-negative measurable functions, the integral of the limit equals the limit of the integrals.

**How the definition helps.** Both the limit of the functions and the limit of their integrals then exist, possibly +∞, so the equation makes sense for every such sequence (our own). The proof that the two sides agree approximates from below by nonnegative simple functions (our own).

**Wikipedia:** [Extended real number line](https://en.wikipedia.org/wiki/Extended_real_number_line). It says: “Without allowing functions to take on infinite values, such essential results as the monotone convergence theorem and the dominated convergence theorem would not make sense.”

**Sources:** none listed. No primary source with a working link was found.

### Dedekind cuts are subsets of ℚ, so ℝ injects into P(ℕ)

**Remember:** Different cuts are already different subsets of one countable set.

*True by definition. Confidence: medium.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 03E10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real number is a lower Dedekind cut: a nonempty proper subset of ℚ that is closed downward and has no largest element. So each real is a subset of ℚ, and different reals are different subsets (our own).

**Problem.** There is an injection from ℝ into the power set of ℕ, the set of all subsets of ℕ.

**How the definition helps.** A fixed bijection between ℚ and ℕ sends each cut to a subset of ℕ, and distinct cuts to distinct subsets (our own). With Cauchy sequences a real is a class of sequences, so one must first pick a canonical subset (our own).

**nLab:** [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “Any such set L of rational numbers is a lower cut.”

**Sources:** none listed. No primary source with a working link was found.

### Quotienting by null sequences makes the Cauchy reals a field

**Remember:** Ignore errors that tend to zero, and every nonzero class inverts.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Cauchy reals are the quotient of the ring of rational Cauchy sequences, with termwise operations, by the null sequences, those tending to zero. In the quotient, changing finitely many terms of a sequence does not change its class.

**Problem.** The Cauchy reals form a field under termwise operations on representatives.

**How the definition helps.** A nonzero class eventually stays a fixed distance from zero, so after changing finitely many terms its reciprocals form a Cauchy sequence (our own). Their product with the original sequence eventually equals one, which gives an inverse in the quotient (our own). The ring laws pass to the quotient because the null sequences form an ideal (our own).

**Paper or page:** [Quotient Ring of Cauchy Sequences is Division Ring/Corollary 1](https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Division_Ring/Corollary_1). It says: “Then the quotient ring 𝒞 / 𝒩 is a field.”

**Sources:** none listed. No primary source with a working link was found.

### Rational Cauchy sequences supply limits of real Cauchy sequences

**Remember:** Replace each real by a nearby rational; their class is the limit.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Cauchy real is a class of rational Cauchy sequences, two being equal when their difference tends to zero. So each real comes with rational approximations, and a limit can be built from them.

**Problem.** Every Cauchy sequence of Cauchy reals converges to a Cauchy real.

**How the definition helps.** Choose a rational qₙ within 1/n of the nth real xₙ; the class of (qₙ) is the limit (our own). The triangle inequality shows both that (qₙ) is Cauchy and that (xₙ) converges to its class (our own).

**Paper or page:** [Quotient of Cauchy Sequences is Metric Completion](https://proofwiki.org/wiki/Quotient_of_Cauchy_Sequences_is_Metric_Completion). It says: “(𝒞 / 𝒩, d′) is the metric completion of (R, d)”

**Sources:** none listed. No primary source with a working link was found.

### Taking ln a as the slope of aˣ at zero differentiates aˣ

**Remember:** The slope at zero fixes the slope at every point.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a &gt; 0, define aˣ for rational x by roots and powers and extend it to real x by continuity. Then define ln a as the slope of aˣ at x = 0, the limit of (aʰ − 1)/h as h → 0.

**Problem.** For a &gt; 0 and every real x, the derivative of aˣ is aˣ ln a.

**How the definition helps.** The exponent law gives (aˣ⁺ʰ − aˣ)/h = aˣ · (aʰ − 1)/h, and the second factor tends to ln a by definition (our own). The work moves to proving that this limit exists and agrees with the usual logarithm (our own).

**Paper or page:** [Derivative of General Exponential Function](https://proofwiki.org/wiki/Derivative_of_General_Exponential_Function), [Natural Logarithm as Derivative of Exponential at Zero](https://proofwiki.org/wiki/Natural_Logarithm_as_Derivative_of_Exponential_at_Zero). It says: “d(aˣ)/dx = aˣ ln a”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy continuity lets a function extend to missing endpoints

**Remember:** Cauchy inputs give Cauchy outputs, even near a missing endpoint.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function is Cauchy continuous if it sends every Cauchy sequence, one whose terms eventually stay arbitrarily close together, to a Cauchy sequence.

**Problem.** A Cauchy continuous real function on an interval extends uniquely and continuously to its finite endpoints. In particular, every uniformly continuous real function on an interval has this extension.

**How the definition helps.** A sequence tending to a missing endpoint is Cauchy, so its image is Cauchy and converges in ℝ; that limit is the value at the endpoint (our own). Interleaving two such sequences gives a Cauchy sequence, so all of them give the same limit, and the extension is continuous (our own). A uniformly continuous function is Cauchy continuous, because one input bound works for all pairs (our own).

**Paper or page:** [Uniformly Continuous Function to Complete Metric Space has Unique Continuous Extension to Closure of Domain](https://proofwiki.org/wiki/Uniformly_Continuous_Function_to_Complete_Metric_Space_has_Unique_Continuous_Extension_to_Closure_of_Domain). It says: “Then there exists a unique continuous function g : A⁻ → Y”

**Sources:** none listed. No primary source with a working link was found.

### Closed sublevel sets give minima

**Remember:** Closed sets of near-minimizers must meet on a compact domain.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function is lower semicontinuous if each sublevel set {x : f(x) ≤ t}, the points where f is at most t, is closed.

**Problem.** A real-valued lower semicontinuous function on a nonempty compact interval attains its minimum.

**How the definition helps.** In a compact interval, nested nonempty closed sets have a common point (our own). Let m be the infimum: the sets {f ≤ m + 1/n} are nonempty, closed and nested, so a common point attains m (our own). If m were −∞, the sets {f ≤ −n} would share a point where f has no real value (our own).

**nLab:** [semicontinuous map](https://ncatlab.org/nlab/show/semicontinuous+map). It says: “for each y ∈ U, f(y) &gt; a.”

**Sources:** none listed. No primary source with a working link was found.

### Moduli of continuity compose with their functions

**Remember:** Feed the first error bound into the second.

*True by definition.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A modulus of continuity for f is a nondecreasing function ω from \[0, ∞) to \[0, ∞), with ω(0) = 0 and ω(t) → 0 as t → 0, such that \|f(x) − f(y)\| ≤ ω(\|x − y\|) for all inputs x, y.

**Problem.** If f has modulus ω and g has modulus η on the range of f, then g ∘ f has modulus η ∘ ω.

**How the definition helps.** The bound \|g(f(x)) − g(f(y))\| ≤ η(\|f(x) − f(y)\|) becomes ≤ η(ω(\|x − y\|)), since η is nondecreasing (our own). The composite η ∘ ω is again nondecreasing and tends to 0 at 0, so it is a modulus (our own).

**Wikipedia:** [Modulus of continuity](https://en.wikipedia.org/wiki/Modulus_of_continuity). It says: “then the composition map g ∘ f : X → Z has modulus of continuity ω₂ ∘ ω₁.”

**Sources:** none listed. No primary source with a working link was found.

### Open rays make a strictly monotone inverse continuous

**Remember:** An order cut in the interval pulls back to an order cut.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A map into a real interval is continuous exactly when, for every cutoff, the inputs sent above it and the inputs sent below it form relatively open sets.

**Problem.** A strictly monotone real function on an interval has a continuous inverse on its range, even if the function itself has jumps.

**How the definition helps.** For increasing f, the inverse sends values above f(c) exactly to inputs above c, so the preimage of a ray is a ray in the range, which is relatively open (our own). Lower rays work the same way, and a decreasing f swaps the rays (our own). Jumps of f leave gaps in the range, but these do not affect the argument (our own).

**Paper or page:** [Continuous Inverse Theorem](https://proofwiki.org/wiki/Continuous_Inverse_Theorem). It says: “Then g is strictly monotone and continuous on J.”

**Sources:** none listed. No primary source with a working link was found.

### Oscillation shows that the points of continuity form a G-delta set

**Remember:** Continuity means zero oscillation, and small oscillation is an open condition.

*Makes the theorem clean to state or prove.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A21. arXiv math.CA, math.GN. Level 2: later undergraduate.

**Definition.** The oscillation of f at x is the limit, as r → 0, of the spread sup{\|f(u) − f(v)\| : u, v in (x − r, x + r)}, allowing +∞. So f is continuous at x exactly when its oscillation there is zero.

**Problem.** For any function f on the real line, the set of points where f is continuous is a countable intersection of open sets. So no function is continuous exactly at the rational numbers.

**How the definition helps.** The set where the oscillation is less than 1/n is open, and the continuity points are the intersection of these sets over all n. The rationals are not such an intersection, by the Baire category theorem (our own).

**Wikipedia:** [Oscillation (mathematics)](https://en.wikipedia.org/wiki/Oscillation_%28mathematics%29). It says: “the continuous points are the intersection of the sets where the oscillation is less than ε (hence a Gδ set) – and gives a very quick proof of one direction of the Lebesgue integrability condition.”

**Sources:** none listed. No primary source with a working link was found.

### Shrinking oscillation tests for a limit without guessing its value

**Remember:** A shrinking spread forces the values to settle at one number.

*Makes the theorem clean to state or prove.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The oscillation of f on a set is the supremum of \|f(x) − f(y)\| over x, y in the set, the width of its range there. Near a, use the domain points with 0 &lt; \|x − a\| &lt; r.

**Problem.** Suppose other domain points approach a. A finite punctured limit exists at a exactly when the oscillation on these sets tends to zero as r tends to zero.

**How the definition helps.** Oscillation tests clustering without naming the limit first. Values within ε of a limit differ by at most 2ε, which gives one direction. Conversely, the closed intervals spanned by the nearby values are nested and shrink to width zero, so the nested interval theorem gives one number, the limit (our own).

**Wikipedia:** [Oscillation (mathematics)](https://en.wikipedia.org/wiki/Oscillation_%28mathematics%29). It says: “The oscillation of f on an interval I in its domain is the difference between the supremum and infimum of f:”

**Sources:** none listed. No primary source with a working link was found.

### Distance cones extend Lipschitz functions

**Remember:** Take the lowest distance bound from all the known values.

*True by definition.* MSC 26A16 (Lipschitz (Hölder) classes). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f on a set A satisfy \|f(a) − f(b)\| ≤ L\|a − b\|. Its McShane extension is F(x) = inf over a in A of f(a) + L\|x − a\|, the lowest of the slope-L cones above the known values.

**Problem.** A real function on any nonempty subset of the line with Lipschitz constant L extends to the whole line with the same bound.

**How the definition helps.** Each cone x ↦ f(a) + L\|x − a\| changes by at most L times the change in x, and a finite infimum of such functions keeps this bound (our own). The infimum is finite because each cone lies above f(b) − L\|x − b\| for a fixed b in A (our own). At a point x of A the infimum is f(x), attained at a = x (our own).

**nLab:** [Lipschitz map](https://ncatlab.org/nlab/show/Lipschitz+map). It says: “d(f(a), f(b)) ≤ K d(a, b)”

**Sources:**

- [E. J. McShane, Extension of range of functions (1934)](https://doi.org/10.1090/S0002-9904-1934-05978-0)

### Defining Baire class one by limits makes derivatives Baire class one

**Remember:** Continuous difference quotients converge to the derivative.

*True by definition.* MSC 26A21 (Classification of real functions; Baire classification of sets and functions), 03E15, 26A24. arXiv math.CA, math.LO. Level 2: later undergraduate.

**Definition.** A real function has Baire class one if it is the pointwise limit of a sequence of continuous functions.

**Problem.** Let f be differentiable at every point of the real line. Then its derivative f′ has Baire class one.

**How the definition helps.** The difference quotients n(f(x + 1/n) − f(x)) are continuous, because a differentiable f is continuous, and they tend to f′(x) at every x (our own).

**Wikipedia:** [Baire function](https://en.wikipedia.org/wiki/Baire_function). It says: “The derivative of any differentiable function is of class 1.”

**Sources:** none listed. No primary source with a working link was found.

### A determinant states Cauchy's mean value theorem without division

**Remember:** Equal slopes become a zero determinant without dividing.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The determinant of plane vectors (u, v) and (s, t) is ut − vs. It is zero exactly when the vectors are parallel or one of them is zero, and it needs no division.

**Problem.** Let f and g be continuous on \[a, b\] and differentiable on (a, b), with a &lt; b. For some c in (a, b), the vectors (f′(c), g′(c)) and (f(b) − f(a), g(b) − g(a)) have determinant zero.

**How the definition helps.** Let D be the endpoint displacement and apply Rolle’s theorem to h(t) = det((f(t), g(t)), D) (our own). Then h(b) − h(a) = det(D, D) = 0, so h′(c) = 0 for some c in (a, b), and h′(c) is the stated determinant (our own).

**nLab:** [mean value theorem](https://ncatlab.org/nlab/show/mean+value+theorem). It says: “f′(c) (g(b) − g(a)) = g′(c) (f(b) − f(a))”

**Sources:** none listed. No primary source with a working link was found.

### Factoring differences gives the derivative of an inverse

**Remember:** Swap the input and output gaps to invert the slope.

*True by definition. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f has derivative m at a if f(x) − f(a) = (x − a)q(x) near a, for a slope function q that is continuous at a with q(a) = m.

**Problem.** Let f have a continuous inverse on an open interval about f(a). If f′(a) ≠ 0, that inverse is differentiable at f(a) with derivative 1/f′(a).

**How the definition helps.** Put y = f(x); then x − a = (y − f(a)) / q(f⁻¹(y)), so the inverse has slope function 1/q(f⁻¹(y)) (our own). This is continuous at f(a), because f⁻¹ and q are continuous and q(a) ≠ 0, and its value there is 1/f′(a) (our own).

**Paper or page:** [Derivative of Inverse Function](https://proofwiki.org/wiki/Derivative_of_Inverse_Function). It says: “∀ y ∈ Jᵒ: Df⁻¹(y) = 1/Df(x)”

**Sources:** none listed. No primary source with a working link was found.

### Strict differentiability makes a nonzero derivative force local injectivity

**Remember:** Control every nearby chord, not only chords through x.

*True by definition. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f has strict derivative a at x if the chord slope (f(y) − f(z))/(y − z) tends to a as y and z both tend to x with y ≠ z. The ordinary derivative fixes one end of the chord at x.

**Problem.** Suppose a real function is defined on an open interval containing x and has a nonzero strict derivative there at x. It is one-to-one on some interval around x.

**How the definition helps.** For a ≠ 0, every chord slope near x lies within \|a\|/2 of a, so it is nonzero (our own). A nonzero chord slope means f(y) ≠ f(z), so f is one-to-one near x (our own).

**Wikipedia:** [Strict differentiability](https://en.wikipedia.org/wiki/Strict_differentiability). It says: “the definition is made more restrictive by allowing both points used in the difference quotient to "move".”

**Sources:** none listed. No primary source with a working link was found.

### Taylor's small remainder gives the second derivative test

**Remember:** Divide the remainder by h² and it tends to zero.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A second-order Peano remainder is an error r(h) that is small compared with h², so r(h)/h² → 0 as h → 0. If f″(a) exists, f(a + h) = f(a) + f′(a)h + ½f″(a)h² + r(h) with such a remainder.

**Problem.** At an interior point a where f′(a) = 0 and f″(a) exists, f″(a) &gt; 0 gives a strict local minimum. If f″(a) &lt; 0, it gives a strict local maximum.

**How the definition helps.** With f′(a) = 0, dividing by h² gives (f(a + h) − f(a))/h² → f″(a)/2 (our own). So for small h ≠ 0, f(a + h) − f(a) has the sign of f″(a), which gives the strict extremum (our own).

**Wikipedia:** [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem). It says: “This is called the Peano form of the remainder.”

**Sources:**

- [Angelo Genocchi and Giuseppe Peano, Calcolo differenziale e principii di calcolo integrale (1884), note 67, pp. XVII–XIX.](https://archive.org/details/calcolodifferenz00genouoft)

### Caputo derivatives vanish on constants

**Remember:** Differentiate first and the constant is already gone.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; α &lt; 1 and let I(g)(t) = ∫₀ᵗ (t − s)⁻ᵅ g(s) ds / Γ(1 − α) for t &gt; 0. For continuously differentiable f, the Caputo derivative I(f′) differentiates first, and the Riemann–Liouville derivative (I(f))′ integrates first.

**Problem.** The Caputo derivative of a constant is zero. The Riemann–Liouville derivative of a nonzero constant on positive time is not zero.

**How the definition helps.** A constant has derivative zero, so the Caputo rule integrates zero (our own). For a constant c, I(c)(t) = c t¹⁻ᵅ / Γ(2 − α), whose derivative c t⁻ᵅ / Γ(1 − α) is nonzero for c ≠ 0 (our own).

**Wikipedia:** [Caputo fractional derivative](https://en.wikipedia.org/wiki/Caputo_fractional_derivative). It says: “The Caputo fractional derivative of a constant c is given by”

**Sources:**

- [M. Caputo, Linear Models of Dissipation whose Q is almost Frequency Independent—II (1967)](https://doi.org/10.1111/j.1365-246x.1967.tb02303.x)

### The Henstock integral makes every derivative integrable

**Remember:** Henstock is Riemann with a mesh that varies point by point.

*Makes the theorem clean to state or prove.* MSC 26A39 (Denjoy and Perron integrals, other special integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A gauge δ gives each point of \[a, b\] a positive radius. A tagged partition is δ-fine if each piece lies in (t − δ(t), t + δ(t)) for its tag t, a point of that piece. The Henstock integral is I if for every ε &gt; 0 some gauge makes every δ-fine Riemann sum lie within ε of I.

**Problem.** If f is differentiable on \[a, b\], then f′ is Henstock integrable and its integral from a to b is f(b) − f(a). No further hypothesis on f′ is needed.

**How the definition helps.** Differentiability lets the gauge be chosen point by point, so that \|f(v) − f(u) − f′(t)(v − u)\| ≤ ε(v − u) for every piece \[u, v\] with tag t inside (t − δ(t), t + δ(t)) (our own). Summing these, the Riemann sum for f′ differs from the telescoping sum f(b) − f(a) by at most ε(b − a) (our own). Cousin’s lemma gives a δ-fine partition for every gauge (our own).

**nLab:** [Henstock integral](https://ncatlab.org/nlab/show/Henstock+integral). It says: “The Henstock integral satisfies a very nice form of the fundamental theorem of calculus”

**Sources:**

- [Ralph Henstock, Definitions of Riemann type of the variational integrals, Proc. London Math. Soc. (3) 11 (1961) 402–418](https://doi.org/10.1112/plms/s3-11.1.402)

### With the Henstock integral, improper integrals are ordinary integrals

**Remember:** The gauge shrinks near the bad endpoint, so no special limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A39 (Denjoy and Perron integrals, other special integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A gauge δ gives each point of \[a, b\] a positive radius. A tagged partition is δ-fine if each piece lies in (t − δ(t), t + δ(t)) for its tag t, a point of that piece. The Henstock integral is I if for every ε &gt; 0 some gauge makes every δ-fine Riemann sum lie within ε of I.

**Problem.** Suppose f on \[a,b\] is Henstock integrable on \[a,c\] for every a &lt; c &lt; b. Its Henstock integral on \[a,b\] exists exactly when ∫ₐᶜ f has a finite limit as c increases to b. The integral then equals that limit.

**How the definition helps.** A gauge can be very small near b, so Henstock sums already control the bad endpoint without a separate limit. Thus the improper limit is a theorem, Hake’s theorem, rather than a definition, and its proof is the real work.

**nLab:** [Henstock integral](https://ncatlab.org/nlab/show/Henstock+integral). It says: “in the strong sense that if either side exists, then so does the other, and they are equal.”

**Sources:**

- [Heinrich Hake, Über de la Vallée Poussins Ober- und Unterfunktionen einfacher Integrale und die Integraldefinition von Perron, Mathematische Annalen 83 (1921) 119–142 (for the Perron integral, which is equivalent to the Henstock integral)](https://doi.org/10.1007/BF01464233)

### A step integrator makes the integral a weighted point value

**Remember:** Only a piece that carries the jump contributes.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the sample f(t) on each piece \[u, v\] by g(v) − g(u), and ∫ f dg is the limit of these sums as the longest piece shrinks. For this step g, every weight is zero except J on the one piece with u &lt; c ≤ v (our own).

**Problem.** Let g be zero before an interior point c and equal to J at and after c. If f is bounded and continuous at c, then ∫ f dg exists and equals Jf(c).

**How the definition helps.** So each sum equals J f(t) for the tag t of that one piece, and t tends to c as the pieces shrink (our own). Continuity of f at c gives the limit J f(c) (our own).

**Paper or page:** [Riemann-Stieltjes Integral with Step Integrator](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_with_Step_Integrator). It says: “∫ₐᵇ f dα = f(c)(α(b) − α(a))”

**Sources:** none listed. No primary source with a working link was found.

### Continuous changes of values preserve Riemann integrability

**Remember:** Pieces with large changes already have little total length.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A bounded f on \[a, b\] is Riemann integrable if for every ε &gt; 0 some partition has Darboux gap below ε. The gap is the sum over the pieces of the spread of f there, supremum minus infimum, times the piece length.

**Problem.** Let f be Riemann integrable and let φ be continuous on a closed bounded interval containing the values of f. Then φ composed with f is Riemann integrable.

**How the definition helps.** A gap below εη forces the pieces where f spreads by more than η to have total length below ε (our own). Choose η by uniform continuity of φ, so φ ∘ f spreads little on the other pieces, and boundedness of φ caps the bad pieces (our own).

**Paper or page:** [Condition for Darboux Integrability](https://proofwiki.org/wiki/Condition_for_Darboux_Integrability). It says: “there exists a finite subdivision S of \[a, b\] such that U(S) – L(S) &lt; ε”

**Sources:** none listed. No primary source with a working link was found.

### Continuous Stieltjes weights integrate every monotone function

**Remember:** The spreads of a monotone function add up to its total change.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f and nondecreasing g on \[a, b\], the Stieltjes gap of a partition adds, over the pieces \[u, v\], the spread sup f − inf f times the weight g(v) − g(u). The mesh criterion asks this gap to tend to zero as the longest piece shrinks.

**Problem.** If f is monotone and g is continuous and nondecreasing on a closed interval, the mesh-limit Riemann–Stieltjes integral ∫ f dg exists.

**How the definition helps.** For monotone f, the spreads on consecutive pieces add up to \|f(b) − f(a)\|, so the gap is at most \|f(b) − f(a)\| times the largest increment of g (our own). Uniform continuity of g makes that increment tend to zero with the mesh (our own). A small gap traps every tagged sum, so the integral exists (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “if f is of bounded variation and g is continuous”

**Paper or page:** [Monotone Real Function is Darboux Integrable](https://proofwiki.org/wiki/Monotone_Real_Function_is_Darboux_Integrable). It says: “Let f: \[a, b\] → ℝ be a monotone real function. Then f is Darboux integrable over \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### Darboux bounds and tagged Riemann sums give the same integral

**Remember:** The extreme sums trap every choice of sample points.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f on \[a, b\] and a partition, the lower and upper Darboux sums use the infimum and supremum of f on each piece as heights. They are the infimum and supremum of all tagged Riemann sums on that partition (our own). Darboux integrable means that for every ε &gt; 0 some partition has upper minus lower sum below ε.

**Problem.** A bounded function on a closed interval is Darboux integrable exactly when its tagged Riemann sums converge as the longest piece shrinks. The two values agree.

**How the definition helps.** Since the Darboux sums are the extreme tagged sums, convergence of tagged sums forces the Darboux gap to shrink (our own). Conversely, add the cuts of a partition with small gap to any fine partition; only pieces that cross those cuts change, and their total length tends to zero (our own).

**Paper or page:** [Equivalence of Definitions of Riemann and Darboux Integrals](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Riemann_and_Darboux_Integrals). It says: “the Riemann integral of f over \[a, b\] exists and is equal to L”

**Sources:** none listed. No primary source with a working link was found.

### Darboux brackets recover Lebesgue integrals

**Remember:** Squeeze the Lebesgue integral between the two step integrals.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A bounded function on \[a, b\] is Darboux integrable if lower and upper step functions on partitions squeeze it, with integrals that differ by arbitrarily little.

**Problem.** Every Darboux integrable function on a compact interval is Lebesgue integrable with the same integral.

**How the definition helps.** Refine so the lower step functions increase and the upper ones decrease, with integral gap tending to zero (our own). Their limits ℓ ≤ f ≤ u have equal integrals by bounded convergence, so ℓ = u almost everywhere (our own). Completeness of Lebesgue measure makes f measurable, with the common Darboux value as its integral (our own).

**Paper or page:** [Lebesgue Integral is Extension of Darboux Integral](https://proofwiki.org/wiki/Lebesgue_Integral_is_Extension_of_Darboux_Integral). It says: “Then it is also Lebesgue integrable, and furthermore:”

**Sources:** none listed. No primary source with a working link was found.

### Darboux rectangles show an integrable graph has zero area

**Remember:** The gap is the total area of rectangles covering the graph.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Darboux gap of a partition of \[a, b\] is the sum over the pieces of the piece length times the spread of f there, supremum minus infimum. This is the total area of the rectangles that cover the graph piece by piece (our own), and f is integrable if the gap can be made below any ε &gt; 0.

**Problem.** The graph of a Riemann integrable function on a closed interval has Jordan area zero. This means finite rectangle covers of the graph can have arbitrarily small total area.

**How the definition helps.** A small gap therefore gives a rectangle cover of the graph with small total area, even when f has jumps (our own). Riemann and Darboux integrability agree, so this applies to every Riemann integrable f (our own).

**Wikipedia:** [Darboux integral](https://en.wikipedia.org/wiki/Darboux_integral). It says: “the upper and lower sums add together the areas of rectangular slices”

**Sources:** none listed. No primary source with a working link was found.

### Indicators turn boundary length into a test for integrability

**Remember:** The indicator jumps exactly on the boundary.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The indicator of a set E is 1 on E and 0 elsewhere. It is discontinuous exactly at the boundary of E, the points where every neighborhood meets both E and its complement (our own).

**Problem.** Let E be a bounded set of real numbers inside an open interval (a, b). Its indicator is Riemann integrable on \[a, b\] exactly when its boundary has length zero, that is, countably many intervals of arbitrarily small total length cover it.

**How the definition helps.** Lebesgue’s criterion says a bounded function is Riemann integrable exactly when its discontinuities have length zero (our own). For an indicator, that set of discontinuities is the boundary of E (our own).

**nLab:** [Jordan content](https://ncatlab.org/nlab/show/Jordan+content). It says: “A Jordan content is a kind of content which may be used to define the Riemann integral of indicator functions over a bounded set”

**Wikipedia:** [Peano–Jordan measure](https://en.wikipedia.org/wiki/Peano%E2%80%93Jordan_measure). It says: “From this it follows that a bounded set is Jordan measurable if and only if its topological boundary has Lebesgue measure zero.”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative Stieltjes weights give an integral mean value theorem

**Remember:** Nonnegative weights keep the average between the two extreme values.

*Rules out counterexamples. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the sample f(t) on each piece \[u, v\] by g(v) − g(u), and ∫ f dg is the limit of these sums as the longest piece shrinks. For nondecreasing g, the weights are nonnegative, and they add up to g(b) − g(a) (our own).

**Problem.** Suppose f is continuous and g is nondecreasing on \[a, b\]. Some c in \[a, b\] then satisfies ∫ f dg = f(c)(g(b) − g(a)).

**How the definition helps.** So every sum lies between min f and max f times g(b) − g(a), and so does the integral, which exists for continuous f (our own). If g(b) &gt; g(a), the intermediate value theorem gives c, and if g(b) = g(a), any c works (our own). Without monotone g this fails: f(t) = t and g(t) = t(1 − t) on \[0, 1\] give total weight 0 but integral −1/6 (our own).

**Paper or page:** [Riemann-Stieltjes Integral of Constant Integrand](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_of_Constant_Integrand). It says: “∫ₐᵇ f dα = c α(b) − c α(a)”

**Sources:** none listed. No primary source with a working link was found.

### Refinement lets adjacent Stieltjes integrals join at a jump

**Remember:** Keep the joining point in every partition.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Stieltjes sum adds f(t)(g(v) − g(u)) over the pieces \[u, v\] with tags t. A refinement of a partition P keeps all cuts of P. The refinement integral is L if each tolerance has a partition P whose every refinement gives sums within it of L, for all tags.

**Problem.** Fix a &lt; c &lt; b. If the refinement Stieltjes integrals on \[a, c\] and \[c, b\] exist, their sum is the refinement integral on \[a, b\].

**How the definition helps.** Join the controlling partitions of \[a, c\] and \[c, b\]; every refinement keeps the cut c, so each sum splits there and the two errors add (our own). In the mesh version a piece may straddle c (our own). For g zero up to 0 and one after, and f one before 0 and zero from 0 on, fine partitions of \[−1, 1\] give sums 0 or 1, though both halves give 0 (our own).

**Paper or page:** [Sum of Riemann-Stieltjes Integrals on Adjacent Intervals/Part to Whole](https://proofwiki.org/wiki/Sum_of_Riemann-Stieltjes_Integrals_on_Adjacent_Intervals/Part_to_Whole). It says: “Then, f is Riemann-Stieltjes integrable with respect to α on \[a, b\], and:”

**Sources:** none listed. No primary source with a working link was found.

### Refining partitions let some Stieltjes integrals with shared jumps exist

**Remember:** Once a jump point is in the partition, it stays.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A tagged Stieltjes sum adds f(t)(g(v) − g(u)) over pieces \[u, v\] with tags t in \[u, v\]. The refinement integral equals I if for every ε &gt; 0 some partition P makes every tagged refinement of P, one that keeps all cuts of P, give a sum within ε of I.

**Problem.** For a nondecreasing integrator, a refinement integral can exist at a shared jump when the functions are continuous from opposite sides there. A shared interior discontinuity prevents the mesh-limit integral from existing.

**How the definition helps.** Putting the shared jump point into P keeps it as a cut, so no piece straddles it (our own). For example, let g jump from 0 to 1 just after 0 and f drop from 1 to 0 at 0; with 0 a cut, every product is zero (our own). The mesh limit cannot fix a cut, so fine pieces straddle a shared interior discontinuity and two tag choices keep the sums apart (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “A consequence is that with this definition, the integral ∫ f(x) dg(x) can still be defined in cases where f and g have a point of discontinuity in common.”

**Sources:** none listed. No primary source with a working link was found.

### Small Stieltjes increments isolate finitely many discontinuities

**Remember:** A discontinuity costs little where the integrator hardly grows.

*Rules out counterexamples. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f and nondecreasing g on \[a, b\], the Stieltjes gap of a partition adds, over the pieces \[u, v\], the spread sup f − inf f times the weight g(v) − g(u). The mesh criterion asks this gap to tend to zero as the longest piece shrinks.

**Problem.** Let f be bounded on \[a, b\] and continuous except at finitely many points. If g is nondecreasing and continuous at each of those points, then the mesh-limit Riemann–Stieltjes integral ∫ f dg exists.

**How the definition helps.** Continuity of g at the bad points gives them small neighborhoods of tiny total weight, where boundedness of f caps the gap (our own). Outside slightly smaller neighborhoods f is uniformly continuous, so its spreads are small on fine pieces (our own). If f and g both jump from 0 to 1 at the same interior point, different tags give sums 0 or 1 (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “if f and g share any points of discontinuity”

**Sources:** none listed. No primary source with a working link was found.

### Smooth Stieltjes increments become ordinary derivative weights

**Remember:** On short pieces the increment is width times a nearby derivative.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the sample f(t) on each piece \[u, v\] by g(v) − g(u), and ∫ f dg is the limit of these sums as the longest piece shrinks. When g has a continuous derivative, the mean value theorem makes each weight g′(s)(v − u) for some s in the piece (our own).

**Problem.** Suppose f is bounded, ∫ f dg exists on \[a, b\], and g has a continuous derivative there. Then fg′ is Riemann integrable and its ordinary integral equals ∫ f dg.

**How the definition helps.** By uniform continuity of g′, g′(s) is close to g′(t) at the tag, so the Stieltjes sum and the Riemann sum of fg′ differ by at most (b − a) sup\|f\| times a small bound (our own). Hence the Riemann sums of fg′ converge to ∫ f dg (our own).

**Paper or page:** [Reduction of Riemann-Stieltjes Integral to Identity Integrator](https://proofwiki.org/wiki/Reduction_of_Riemann-Stieltjes_Integral_to_Identity_Integrator). It says: “Let g : \[a, b\] → ℝ be defined as: g(x) = f(x) α′(x)”

**Sources:** none listed. No primary source with a working link was found.

### Splitting at each tag makes Stieltjes integration by parts telescope

**Remember:** Swap cuts and tags; the two sums add to the product’s change.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the sample f(t) on each piece \[u, v\] by g(v) − g(u), and ∫ f dg is the limit of these sums as the longest piece shrinks. Only values of f at tags and of g at cuts enter the sum.

**Problem.** If ∫ f dg exists for bounded f and g on \[a, b\], then ∫ g df exists too. Their sum equals f(b)g(b) − f(a)g(a).

**How the definition helps.** Summation by parts turns a sum for ∫ g df into f(b)g(b) − f(a)g(a) minus a sum for ∫ f dg, whose cuts are the old tags and whose tags are the old cuts (our own). The new pieces are at most twice as long as the old ones, so the second sum tends to ∫ f dg (our own).

**Paper or page:** [Integration by Parts/Riemann-Stieltjes Integral](https://proofwiki.org/wiki/Integration_by_Parts/Riemann-Stieltjes_Integral). It says: “∫ₐᵇ f dα + ∫ₐᵇ α df = f(b) α(b) − f(a) α(a)”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes increments follow an increasing change of variable

**Remember:** Move every cut and every sample along the same increasing map.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the sample f(t) on each piece \[u, v\] by g(v) − g(u), and ∫ f dg is the limit of these sums as the longest piece shrinks. Only values of f at tags and of g at cuts enter the sum.

**Problem.** Let φ be continuous and strictly increasing on \[a, b\], and suppose ∫ f dg exists from φ(a) to φ(b). The integral of f composed with φ against g composed with φ exists on \[a, b\] and equals it.

**How the definition helps.** Mapping the cuts and tags of a partition of \[a, b\] by φ gives a partition of \[φ(a), φ(b)\] with the same Stieltjes sum (our own). Uniform continuity of φ makes the longest image piece shrink with the longest original piece (our own).

**Paper or page:** [Integration by Substitution/Riemann-Stieltjes Integral/Increasing](https://proofwiki.org/wiki/Integration_by_Substitution/Riemann-Stieltjes_Integral/Increasing). It says: “h is Riemann-Stieltjes integrable with respect to β on \[a, b\]”

**Sources:** none listed. No primary source with a working link was found.

### Strictly increasing integrators make zero area detect the zero function

**Remember:** Every interval of positive length gets positive weight.

*Rules out counterexamples. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the sample f(t) on each piece \[u, v\] by g(v) − g(u), and ∫ f dg is the limit of these sums as the longest piece shrinks. A strictly increasing g gives every piece of positive length a positive weight.

**Problem.** Let a &lt; b, let f be continuous and nonnegative on \[a, b\], and let g be strictly increasing. If ∫ f dg = 0, then f is zero everywhere.

**How the definition helps.** If f(x₀) &gt; 0, continuity keeps f above f(x₀)/2 on an interval of positive length, which has positive weight, so the integral is positive (our own). Nonnegativity of f prevents cancellation elsewhere (our own). With a flat part, g(t) = max(0, t − ½) and f(t) = max(0, ½ − t) on \[0, 1\] give integral zero although f(0) &gt; 0 (our own).

**Paper or page:** [Riemann-Stieltjes Integral of Constant Integrand](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_of_Constant_Integrand). It says: “∫ₐᵇ f dα = c α(b) − c α(a)”

**Sources:** none listed. No primary source with a working link was found.

### Tagged Stieltjes sums are linear in the integrator

**Remember:** Add the increment weights before or after summing.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks.

**Problem.** Whenever both original integrals exist, taking a linear combination of two integrators gives the same linear combination of their integrals. The same rule holds for two integrands with a fixed integrator.

**How the definition helps.** The increment of c₁g₁ + c₂g₂ is c₁ times the increment of g₁ plus c₂ times the increment of g₂, so each tagged sum splits the same way (our own). Linearity of limits then gives the law, and the same argument works for two integrands (our own).

**Paper or page:** [Linear Combination of Riemann-Stieltjes Integrals/Integrator](https://proofwiki.org/wiki/Linear_Combination_of_Riemann-Stieltjes_Integrals/Integrator). It says: “∫ₐᵇ f dγ = c₁ A + c₂ B”

**Sources:** none listed. No primary source with a working link was found.

### The Darboux criterion makes the positive part of integrable f integrable

**Remember:** Clipping at zero never widens the spread on a piece.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A bounded f on \[a, b\] is integrable if for every ε &gt; 0 some finite partition has Darboux gap below ε. The gap is the sum over the pieces of the spread of f there, supremum minus infimum, times the piece length.

**Problem.** If f is Riemann integrable on \[a, b\], then so is f⁺ = max(f, 0).

**How the definition helps.** The map t ↦ max(t, 0) never moves two values further apart, so the spread of f⁺ on each piece is at most that of f (our own). Hence every partition with small gap for f has small gap for f⁺, and Darboux and Riemann integrability agree (our own).

**Paper or page:** [Positive Part of Darboux Integrable Function is Integrable](https://proofwiki.org/wiki/Positive_Part_of_Darboux_Integrable_Function_is_Integrable). It says: “Then f⁺ is Darboux integrable over \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### The identity integrator recovers the ordinary Riemann integral

**Remember:** The identity function grows by exactly the length of each piece.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riemann–Stieltjes sum weights the sample f(t) on each piece \[u, v\] by g(v) − g(u), and ∫ f dg is the limit of these sums as the longest piece shrinks. For g(x) = x, each weight is the piece length v − u (our own).

**Problem.** On a closed interval, f is Riemann–Stieltjes integrable with respect to g(x) = x exactly when it is Riemann integrable. The integrals agree.

**How the definition helps.** So each Stieltjes sum is the ordinary tagged Riemann sum, and the two limits are the same limit (our own).

**Paper or page:** [Riemann-Stieltjes Integral by Norm of Subdivision/Riemann Integral](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_by_Norm_of_Subdivision/Riemann_Integral). It says: “∫ₐᵇ f dι = ∫ₐᵇ f(x) dx”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues (1894), pp. J1–J122](https://doi.org/10.5802/afst.108)

### The regulated integral, extended from step functions, passes to uniform limits

**Remember:** Integrate steps, then extend by continuity.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A regulated function on \[a, b\] is a uniform limit of step functions, and its integral is the limit of the step integrals. So the regulated integral is the continuous extension of the step integral to the uniform closure of the step functions.

**Problem.** The integral of a regulated function exists and does not depend on the approximating sequence. The integral of a uniform limit of regulated functions is the limit of their integrals.

**How the definition helps.** The step integral is linear with \|∫ s\| ≤ (b − a) sup\|s\|, so the continuous linear extension theorem gives existence and independence of the sequence. Uniform limits stay in the closure, and continuity of the extension passes the integral to the limit. The cost is a smaller class than the Riemann integrable functions.

**Wikipedia:** [Regulated integral](https://en.wikipedia.org/wiki/Regulated_integral). It says: “One must check that this limit exists and is independent of the chosen sequence, but this is an immediate consequence of the continuous linear extension theorem of elementary functional analysis”

**Sources:**

- [S. K. Berberian, Regulated functions: Bourbaki's alternative to the Riemann integral, The American Mathematical Monthly 86 (1979)](https://doi.org/10.1080/00029890.1979.11994771)

### The Stieltjes integral gives one expectation formula for every distribution

**Remember:** Weight each value of f by how much g grows.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 60E05, 46E15. arXiv math.CA, math.PR. Level 2: later undergraduate.

**Definition.** The Stieltjes integral ∫ f dg weights each value of f by the growth of g, not by interval length. It is the limit of the sums of f(t)(g(v)−g(u)) over the pieces \[u,v\] of a partition, with any tag t in each piece, as the largest piece shrinks to zero. On ℝ, take the limits at −∞ and +∞ separately.

**Problem.** Let X have distribution function g, and let f be Borel measurable with E\[\|f(X)\|\] finite. If the improper Riemann–Stieltjes integral ∫ f dg exists, it equals E\[f(X)\], whatever kind of distribution X has.

**How the definition helps.** Each weight g(v)−g(u) is exactly the probability that u &lt; X ≤ v, for every distribution (our own). So the expectation over a finite interval lies between the lower and upper Stieltjes sums, which meet when the integral exists (our own). Finite E\[\|f(X)\|\] lets the finite-interval expectations converge to E\[f(X)\] (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “holds if g is any cumulative probability distribution function on the real line, no matter how ill-behaved.”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues, Ann. Fac. Sci. Toulouse 8 (1894), J1–J122](http://www.numdam.org/item?id=AFST_1894_1_8_4_J1_0)

### The supremum norm gives a sharp bound on the integral

**Remember:** No rectangle is taller than the supremum norm.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The supremum norm ‖f‖ is the least upper bound of \|f\| on \[a, b\], so f lies between the constant functions −‖f‖ and ‖f‖. The integral of f lies between all its lower and upper Darboux sums.

**Problem.** For Riemann integrable f on \[a, b\], the absolute value of its integral is at most (b − a)‖f‖. So integration is continuous for the supremum norm, and the constant function one attains equality.

**How the definition helps.** Integration preserves order, so the bounds −‖f‖ ≤ f ≤ ‖f‖ give \|∫f\| ≤ (b − a)‖f‖ (our own). For a linear map, such a bound is continuity (our own). The constant function one gives equality, so no smaller constant works (our own).

**Paper or page:** [Riemann Integral Operator is Continuous Linear Transformation](https://proofwiki.org/wiki/Riemann_Integral_Operator_is_Continuous_Linear_Transformation). It says: “Then T is a continuous mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Total variation bounds the cost of resampling a Stieltjes sum

**Remember:** Total variation caps the total size of the weights.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A45. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The total variation of g is the least upper bound of the sums of \|g(v) − g(u)\| over the pieces of a partition. Bounded variation means that it is finite. A Stieltjes sum weights each sample of f by an increment of g, so its absolute weights total at most the variation (our own).

**Problem.** Every continuous f on \[a, b\] has a Riemann–Stieltjes integral against any g of bounded variation there. Its absolute value is at most the maximum of \|f\| times the total variation of g.

**How the definition helps.** Since absolute weights total at most V, the variation, changing each sampled value by at most ε changes a sum by at most εV (our own). Refining moves samples only within original pieces, so by uniform continuity of f, two fine partitions have sums near their common refinement’s (our own). Completeness gives the limit, and the bound by max\|f\| times V gives its size (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “if f is continuous and g is of bounded variation”

**Sources:** none listed. No primary source with a working link was found.

### Arc length as a polygon supremum ignores every reparametrization

**Remember:** Length is the longest inscribed polygon; speed never enters.

*True by definition. Confidence: medium.* MSC 26A45 (Functions of bounded variation, generalizations), 53A04. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The length of a continuous path γ on \[a, b\] is the supremum of the lengths of the polygons through γ(t₀), …, γ(tₖ), over partitions a = t₀ &lt; … &lt; tₖ = b. Each polygon uses only points of the path, in the order the path visits them.

**Problem.** Let φ map \[c, d\] onto \[a, b\], and let φ be continuous and strictly increasing. Then the paths γ and γ ∘ φ have the same length.

**How the definition helps.** The increasing bijection φ and its inverse carry partitions to partitions in both directions, and corresponding partitions give the same polygon (our own). So both paths have the same polygon lengths and the same supremum (our own).

**Wikipedia:** [Arc length](https://en.wikipedia.org/wiki/Arc_length). It says: “The arc length of the curve is the same regardless of the parameterization used to define the curve.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded variation extends Dirichlet's Fourier test to more functions

**Remember:** Bounded variation means a difference of two monotone functions.

*Makes the theorem clean to state or prove.* MSC 26A45 (Functions of bounded variation, generalizations), 42A20. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f on \[a,b\] has bounded variation when its total up-and-down movement, the supremum of Σ\|f(xᵢ) − f(xᵢ₋₁)\| over partitions, is finite. By Jordan's theorem, these are exactly the differences of two non-decreasing functions.

**Problem.** Let f be 2π-periodic and of bounded variation on a period. Then the Fourier series of f converges at every x to (f(x+) + f(x−))/2, the average of its one-sided limits.

**How the definition helps.** Dirichlet proved this convergence for monotone functions, and Fourier partial sums depend linearly on the function, so it passes to differences of monotone functions (our own remark). Jordan's theorem makes these differences exactly the functions of bounded variation, which is why he introduced them.

**Wikipedia:** [Dirichlet–Jordan test](https://en.wikipedia.org/wiki/Dirichlet%E2%80%93Jordan_test), [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “It was extended in the late 19th century by Camille Jordan to functions of bounded variation in each period (any function of bounded variation is the difference of two monotonically increasing functions).”

**Sources:**

- [P. G. L. Dirichlet, Sur la convergence des séries trigonométriques qui servent à représenter une fonction arbitraire entre des limites données, J. reine angew. Math. 4 (1829), 157–169, doi:10.1515/crll.1829.4.157](https://doi.org/10.1515/crll.1829.4.157)

### Lower bounds control reciprocal variation

**Remember:** Keep f a fixed distance from zero, and 1/f stays tame.

*Rules out counterexamples.* MSC 26A45 (Functions of bounded variation, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f is bounded away from zero when one constant M &gt; 0 satisfies \|f(x)\| ≥ M for every x; never vanishing is not enough. Then every product \|f(x)f(y)\| is at least M².

**Problem.** Let f have bounded variation on a closed interval and satisfy \|f\| ≥ M &gt; 0. Then the variation of 1/f is at most the variation of f divided by M².

**How the definition helps.** Each increment of 1/f is \|f(y)−f(x)\|/\|f(x)f(y)\|, at most \|f(y)−f(x)\|/M², and summing over partitions gives the bound (our own). On \[0,1\], f(0)=1 and f(x)=x for x&gt;0 has bounded variation and never vanishes, but 1/f is unbounded (our own).

**Paper or page:** [Reciprocal of Function of Bounded Variation Bounded away from Zero is of Bounded Variation](https://proofwiki.org/wiki/Reciprocal_of_Function_of_Bounded_Variation_Bounded_away_from_Zero_is_of_Bounded_Variation). It says: “That is, there exists M ∈ ℝ such that: \|f(x)\| ≥ M &gt; 0”

**Sources:** none listed. No primary source with a working link was found.

### The monotone-difference description of bounded variation gives countably many discontinuities

**Remember:** Every discontinuity comes from one of the two monotone parts.

*True by definition.* MSC 26A45 (Functions of bounded variation, generalizations), 26A48. arXiv math.CA. Level 2: later undergraduate.

**Definition.** On a compact interval, a function of bounded variation is a difference of two bounded monotone functions. This is equivalent to the usual finite bound on Σ\|f(xᵢ) − f(xᵢ₋₁)\| over all partitions.

**Problem.** A function of bounded variation on a compact interval has at most countably many discontinuities.

**How the definition helps.** Each monotone part has at most countably many jumps, and f is continuous wherever both parts are, so f has at most countably many discontinuities (our own). The work lies in Jordan's decomposition, which builds the monotone parts from the variation of f on \[a, x\] (our own).

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “In particular, a BV function may have discontinuities, but at most countably many.”

**Sources:** none listed. No primary source with a working link was found.

### Absolute continuity leaves out the Cantor function

**Remember:** Small total length in, small total change out.

*Makes the theorem clean to state or prove.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f on \[a,b\] is absolutely continuous if intervals of small total length always give small total change in f. Precisely, for every ε &gt; 0 there is δ &gt; 0 such that Σ\|f(yᵢ) − f(xᵢ)\| &lt; ε for every finite family of disjoint subintervals (xᵢ, yᵢ) with Σ(yᵢ − xᵢ) &lt; δ.

**Problem.** If f is absolutely continuous on \[a,b\], then f′ exists almost everywhere. For every x in \[a,b\], f(x) = f(a) + ∫ₐˣ f′(t) dt.

**How the definition helps.** The definition forbids a large total change across intervals of tiny total length (our own). The Cantor function does this: it rises by one across intervals of total length tending to zero, though its derivative is zero almost everywhere (our own). The fundamental theorem for absolutely continuous functions then gives f′ almost everywhere and recovers f by integrating it (our own).

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity), [Cantor function](https://en.wikipedia.org/wiki/Cantor_function). It says: “The notion of absolute continuity allows one to generalize the fundamental theorem of calculus, originally in the framework of Riemann integration, to Lebesgue integration.”

**Sources:** none listed. No primary source with a working link was found.

### Lipschitz implies absolute continuity

**Remember:** Change at most K times length, piece by piece and summed.

*True by definition.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A16. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function is absolutely continuous on an interval if finitely many disjoint subintervals of small total length always have small total change. A Lipschitz function, one with \|f(x) − f(y)\| ≤ K\|x − y\|, bounds the change on each subinterval by K times its length.

**Problem.** Every Lipschitz real function on a closed bounded interval is absolutely continuous.

**How the definition helps.** Summing the Lipschitz bound over the subintervals bounds the total change by K times the total length, so δ = ε/K works (our own).

**Paper or page:** [Lipschitz Continuous Real Function is Absolutely Continuous](https://proofwiki.org/wiki/Lipschitz_Continuous_Real_Function_is_Absolutely_Continuous). It says: “Let f be Lipschitz continuous on I. Then f is absolutely continuous on I.”

**Sources:** none listed. No primary source with a working link was found.

### Coefficient ratios control quotient monotonicity

**Remember:** Larger x pushes the weights toward higher indices.

*Rules out counterexamples.* MSC 26A48 (Monotonic functions, generalizations), 30B10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f = Σaₙxⁿ and g = Σbₙxⁿ have common radius r &gt; 0, with every bₙ &gt; 0. For 0 &lt; x &lt; r, f(x)/g(x) is the average of the ratios aₙ/bₙ with weights bₙxⁿ/g(x), and larger x shifts weight toward larger n.

**Problem.** If the ratios aₙ/bₙ never decrease, then f(x)/g(x) never decreases on (0,r).

**How the definition helps.** Shifting weight toward higher indices cannot lower the average of a nondecreasing sequence (our own). Precisely, the derivative of f/g is the sum over i &lt; j of (j−i)(aⱼ/bⱼ−aᵢ/bᵢ)bᵢbⱼxⁱ⁺ʲ⁻¹/g(x)², which is nonnegative (our own). For f = 1/(1−x) and g = 1/(1−x)², the ratios 1/(n+1) decrease, and so does f/g = 1−x (our own).

**Paper or page:** [On Kaluza's sign criterion for reciprocal power series](https://arxiv.org/abs/1010.5337v3). It says: “Then the function x ↦ f(x)/g(x) is increasing (decreasing) on (0,r) if the sequence {aₙ/bₙ} is increasing (decreasing).”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint jump intervals make monotone discontinuities countable

**Remember:** Each jump gets its own rational number.

*True by definition.* MSC 26A48 (Monotonic functions, generalizations), 26A15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** At an interior point of a monotone real function, the jump interval is the open interval between the left and right limits. The function is discontinuous there exactly when this interval is nonempty, and monotonicity makes the jump intervals at different points disjoint.

**Problem.** A monotone real function on an interval has at most countably many interior discontinuities. Each occurs where the jump interval is nonempty.

**How the definition helps.** Disjoint nonempty open intervals each contain a different rational number, so there are at most countably many of them (our own).

**Wikipedia:** [Discontinuities of monotone functions](https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions). It says: “all discontinuities of such a (monotone) function are necessarily jump discontinuities and there are at most countably many of them.”

**Sources:** none listed. No primary source with a working link was found.

### Continuity upgrades midpoint convexity

**Remember:** Halving reaches dyadic weights; continuity fills in the rest.

*Rules out counterexamples.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function f on an interval is midpoint-convex if f((x+y)/2) ≤ (f(x)+f(y))/2 for all x, y in the interval. Repeated halving then gives the chord inequality f((1−t)x + ty) ≤ (1−t)f(x) + tf(y) for every dyadic t, and these t are dense in \[0,1\] (our own).

**Problem.** A continuous midpoint-convex function on a real interval is convex.

**How the definition helps.** Continuity carries the chord inequality from the dense dyadic weights to every weight, which is convexity (our own). Without continuity, a rational-linear map ℝ → ℝ that is not x ↦ cx has midpoint equality but is discontinuous (our own). It is not convex, because every finite convex function on ℝ is continuous (our own).

**Wikipedia:** [Cauchy's functional equation](https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation). It says: “Such functions are sometimes called Hamel functions.”

**Paper or page:** [Continuous Midpoint-Convex Function is Convex](https://proofwiki.org/wiki/Continuous_Midpoint-Convex_Function_is_Convex). It says: “Let f be midpoint-convex and continuous on I. Then f is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Increasing ratios allow one turn

**Remember:** Rising ratios cross one at most once.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive sequence aₙ is log-convex if the ratios aₙ₊₁/aₙ never decrease. Equivalently, aₙ² ≤ aₙ₋₁aₙ₊₁ for every interior n.

**Problem.** A positive log-convex sequence is monotone or first decreases and then increases, with ties allowed.

**How the definition helps.** A step goes up exactly when its ratio is at least one. The ratios never decrease, so every step with ratio below one comes before every step with ratio at least one (our own).

**Paper or page:** [On Kaluza's sign criterion for reciprocal power series](https://arxiv.org/abs/1010.5337v3). It says: “If a₀ ≤ a₁, then a₀ ≤ a₁ ≤ a₂ ≤ …;”

**Sources:** none listed. No primary source with a working link was found.

### Log-convexity singles out the gamma function among extensions of the factorial

**Remember:** On a logarithmic scale, every chord lies above the graph.

*Rules out counterexamples. Confidence: medium.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive function f on an interval is log-convex if log f is convex, so the chord slopes of log f increase from left to right.

**Problem.** The gamma function is the only positive function f on x &gt; 0 with three properties. The properties are f(1) = 1, f(x + 1) = x·f(x), and f is log-convex.

**How the definition helps.** The recurrence fixes the chord slopes of log f between integers, log(n−1) on \[n−1, n\] and log n on \[n, n+1\], and increasing slopes trap the slope on \[n, n+x\] between them (our own). This gives (n−1)ˣ ≤ f(n+x)/f(n) ≤ nˣ for 0 &lt; x ≤ 1, and the recurrence writes the middle as f(x) times a known factor, with bounds whose ratio tends to one (our own). The gamma function satisfies all three conditions, so it is the only such function (our own).

**Wikipedia:** [Bohr–Mollerup theorem](https://en.wikipedia.org/wiki/Bohr%E2%80%93Mollerup_theorem). It says: “Therefore, there is no other function defined on x &gt; 0 with all the properties assigned to Γ(x).”

**Sources:** none listed. No primary source with a working link was found.

### Ordered secants give convex functions a local Lipschitz bound

**Remember:** Two outer chords bound every slope between them.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function on an interval is convex if its chord slopes increase: for u &lt; v &lt; w, the slope from u to v is at most the slope from v to w.

**Problem.** A convex real function on an open interval is Lipschitz on each closed bounded subinterval inside it. That is, one constant bounds \|f(x) − f(y)\|/\|x − y\| for distinct x, y in that subinterval.

**How the definition helps.** Pick s &lt; c and t &gt; d in the open interval around \[c, d\] (our own). Increasing slopes place every chord slope inside \[c, d\] between the slope from s to c and the slope from d to t (our own). The larger absolute value of these two slopes is a Lipschitz constant (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “If f : (a, b) → ℝ is convex and u &lt; v &lt; w ∈ (a, b), then (f(u) − f(v))/(u − v) ≤ (f(u) − f(w))/(u − w) ≤ (f(v) − f(w))/(v − w).”

**Paper or page:** [Convex Real Function is Continuous](https://proofwiki.org/wiki/Convex_Real_Function_is_Continuous). It says: “Then f is continuous on (a, b).”

**Sources:** none listed. No primary source with a working link was found.

### Ordered slopes make differentiable convex functions continuously differentiable

**Remember:** Nearby derivatives are trapped between chords on either side.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function on an interval is convex if its chord slopes increase: for u &lt; v &lt; w, the slope from u to v is at most the slope from v to w. So a derivative at x lies between every chord slope ending at x and every chord slope starting at x.

**Problem.** If a real convex function on an open interval is differentiable everywhere, its derivative is continuous there.

**How the definition helps.** Fix u &lt; a &lt; v. For x near a, f′(x) lies between the slope from u to x and the slope from x to v, which tend to the slopes from u to a and from a to v (our own). Letting u and v tend to a squeezes both to f′(a), so f′(x) tends to f′(a) (our own).

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “If a function is differentiable and convex then it is also continuously differentiable.”

**Sources:** none listed. No primary source with a working link was found.

### Sums preserve log-convexity

**Remember:** Value at a mean stays below the ends' geometric mean.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive function f is log-convex if f((1−t)x + ty) ≤ f(x)¹⁻ᵗf(y)ᵗ for 0 ≤ t ≤ 1, so its value at a weighted mean is at most the weighted geometric mean of the end values. This is the same as log f being convex.

**Problem.** Any finite sum of positive log-convex functions on a real interval is log-convex.

**How the definition helps.** Adding the bounds for each summand gives ∑ fₖ(x)¹⁻ᵗfₖ(y)ᵗ (our own). For 0 &lt; t &lt; 1, Hölder’s inequality with exponents 1/(1−t) and 1/t bounds this by (∑fₖ(x))¹⁻ᵗ(∑fₖ(y))ᵗ, the same bound for the sum (our own).

**Wikipedia:** [Logarithmically convex function](https://en.wikipedia.org/wiki/Logarithmically_convex_function). It says: “log ∘ f is convex”

**Sources:** none listed. No primary source with a working link was found.

### Supporting tangents show when a derivative is nondecreasing

**Remember:** Two supporting tangents trap the secant slope between their slopes.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a differentiable function on an open interval, convexity means every tangent line lies below the graph, which agrees with the usual chord definition. The tangent inequalities at x &lt; y trap the chord slope between f′(x) and f′(y).

**Problem.** A differentiable real function on an open interval is convex exactly when its derivative is nondecreasing.

**How the definition helps.** The two tangent inequalities give f′(x) ≤ (f(y)−f(x))/(y−x) ≤ f′(y), so f′ is nondecreasing. Conversely, if f′ is nondecreasing, the mean value theorem puts that chord slope between f′(x) and f′(y), which gives both tangent inequalities (our own). The separate geometric work is to show that the tangent and chord definitions agree.

**Paper or page:** [Tangent Line to Convex Graph](https://proofwiki.org/wiki/Tangent_Line_to_Convex_Graph). It says: “Then all the tangent lines to f are below the graph of f.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous partial derivatives give a total derivative

**Remember:** Each coordinate slope must approach its value at the point.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The partial derivative ∂ᵢf(x) is the slope of f along the ith coordinate direction at x. The partial derivatives are continuous at a when each ∂ᵢf(x) tends to ∂ᵢf(a) as x tends to a, so slopes on short coordinate segments near a are close to those at a.

**Problem.** If all first partial derivatives exist near a and are continuous at a, the total derivative at a exists. Its matrix consists of those partial derivatives at a.

**How the definition helps.** Split the step from a to a + h into coordinate segments; on each, the mean value theorem gives a slope ∂ᵢf at a nearby point, close to ∂ᵢf(a) by continuity (our own). Without continuity, xy/(x²+y²), with value zero at the origin, has both partial derivatives at the origin but is not continuous there.

**Paper or page:** [Diffgeo: Multivar](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let f : U → ℝ and suppose that ∂f/∂eᵢ is defined for each i and moreover is continuous. Then f is differentiable”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-8](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Continuous total derivatives stay continuous under composition

**Remember:** Continuous derivative matrices can be multiplied without losing continuity.

*True by definition.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A map is continuously differentiable, or C¹, when its derivative matrix depends continuously on the point. In finite dimensions this means that every entry of the matrix is continuous.

**Problem.** The composition of two C¹ maps between open sets in Euclidean spaces is C¹ wherever it is defined.

**How the definition helps.** The chain rule gives D(g∘f)(x) = Dg(f(x))Df(x), a product of two continuous matrix-valued functions (our own). Matrix multiplication is continuous, so the product is continuous (our own).

**nLab:** [Jacobian](https://ncatlab.org/nlab/show/Jacobian). It says: “The chain rule may be phrased by saying that the Jacobian matrix of the composition”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-2](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Linear approximations compose by the chain rule

**Remember:** Compose the two linear approximations in the same order as the functions.

*True by definition.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The total derivative of f at a is the linear map L that approximates f near a, with error f(a+h) − f(a) − Lh small compared with ‖h‖. Precisely, this error divided by ‖h‖ tends to zero as nonzero h tends to zero.

**Problem.** If f is differentiable at a and g at f(a), then g∘f is differentiable at a. Its total derivative is Dg(f(a))∘Df(a).

**How the definition helps.** Composing the two linear approximations gives a linear approximation of g∘f, so the chain rule is a composition of maps (our own). The inner change f(a+h) − f(a) is at most a constant times ‖h‖, so both errors divided by ‖h‖ tend to zero (our own).

**Paper or page:** [Derivative of Composite Function/Jacobians](https://proofwiki.org/wiki/Derivative_of_Composite_Function/Jacobians). It says: “The Jacobian matrix of a composite function g ∘ f is obtained by multiplying the Jacobian matrices of f and g”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-2](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Only degenerate critical points can leave the Hessian test undecided

**Remember:** With no zero eigenvalues, the quadratic term settles the test.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A critical point, where the first derivative vanishes, is nondegenerate if its Hessian, the matrix of second partial derivatives, has no zero eigenvalue. Then every eigenvalue of the Hessian is strictly positive or strictly negative.

**Problem.** At a nondegenerate critical point of a C² real function, a Hessian with only positive eigenvalues gives a strict local minimum. Only negative eigenvalues give a strict local maximum, and mixed signs give a saddle point.

**How the definition helps.** With no zero eigenvalue, the quadratic Taylor term outweighs the remainder, uniformly in direction when it is definite and along eigenvectors of each sign when it is not (our own). The examples x⁴+y⁴, −x⁴−y⁴ and x⁴−y⁴ have the same zero Hessian but give a minimum, a maximum and a saddle (our own).

**Wikipedia:** [Second partial derivative test](https://en.wikipedia.org/wiki/Second_partial_derivative_test). It says: “The following test can be applied at any critical point a for which the Hessian matrix is invertible”

**Sources:** none listed. No primary source with a working link was found.

### Repeated directions turn Taylor expansion into one variable

**Remember:** Use the same step twice to read the quadratic term.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The second total derivative D²f(a) is the derivative of x ↦ Df(x), a map that takes two vectors and is linear in each. Applied to the same step h twice, it gives the second derivative of t ↦ f(a + th) at t = 0.

**Problem.** For a C² function, the second-order Taylor polynomial is f(a) + Df(a)h + ½D²f(a)(h,h). The error divided by ‖h‖² tends to zero as h tends to zero.

**How the definition helps.** Taylor’s theorem in one variable along t ↦ a + th writes the error with D²f at points between a and a + h, applied to (h,h) (our own). Continuity of D²f at a makes this error small compared with ‖h‖² (our own).

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “The Taylor polynomials of a differentiable function approximate it by polynomial functions”

**Sources:** none listed. No primary source with a working link was found.

### Uniform difference quotients let a parameter derivative pass through an integral

**Remember:** One error bound for every slice lets the limit pass through.

*Makes the theorem clean to state or prove.* MSC 26B05 (Continuity and differentiation questions), 26B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The difference quotients (f(x+h,y) − f(x,y))/h converge uniformly to ∂ₓf(x,y) when one error bound, tending to zero with h, works for every y in the integration interval.

**Problem.** Suppose f and its partial derivative in x are continuous on a closed rectangle. At interior x, the derivative of ∫ f(x,y) dy is ∫ (∂f/∂x)(x,y) dy, over the same fixed y interval.

**How the definition helps.** Uniform convergence lets the limit pass through the integral, because the integral error is at most the interval length times the common bound (our own). The mean value theorem writes each quotient as ∂ₓf at a nearby point, and uniform continuity of ∂ₓf on the closed rectangle gives the common bound (our own).

**Wikipedia:** [Leibniz integral rule](https://en.wikipedia.org/wiki/Leibniz_integral_rule). It says: “so we can take the limit where h approaches zero.”

**Paper or page:** [Definite Integral of Partial Derivative](https://proofwiki.org/wiki/Definite_Integral_of_Partial_Derivative). It says: “Let f(x, y) and (∂f/∂x)(x, y) be continuous functions of x and y”

**Sources:** none listed. No primary source with a working link was found.

### A differentiable inverse has the inverse derivative

**Remember:** Differentiate both ways round, and the derivatives must undo each other.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A C¹ diffeomorphism is a bijection between open sets such that both the map and its inverse have continuous first derivatives.

**Problem.** For a C¹ diffeomorphism f the derivative Df(a) is invertible. The derivative of the inverse at f(a) is the inverse linear map of Df(a).

**How the definition helps.** Both maps are differentiable, so the chain rule applies to the identities f⁻¹∘f = id and f∘f⁻¹ = id, and the two derivatives undo each other. In our own counterexample, x ↦ x³ is a smooth bijection whose derivative vanishes at zero, and its inverse has no derivative there.

**Wikipedia:** [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem). It says: “the existence and differentiability of f⁻¹”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-11 and its proof](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### An absolute Jacobian makes substitution independent of orientation

**Remember:** Reversing an axis changes orientation, not volume.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables), 26B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a C¹ coordinate change g, the local volume factor is the absolute Jacobian Jg = \|det Dg\|. Volume is never negative, while det Dg is negative where g reverses orientation.

**Problem.** Let g be a one-to-one C¹ map between Euclidean spaces of equal dimension, with open domain and invertible derivative everywhere. For continuous f supported on a compact subset of the image, integrating f there gives the domain integral of (f∘g)Jg.

**How the definition helps.** A linear map scales volume by the absolute value of its determinant, whatever its orientation, so one formula serves both orientations. With the signed determinant, our own reflection across a coordinate plane would give negative volume. The proof still has to pass from linear maps to variable derivatives.

**Wikipedia:** [Integration by substitution](https://en.wikipedia.org/wiki/Integration_by_substitution). It says: “the absolute value of the determinant of a matrix equals the volume of the parallelotope spanned by its columns or rows.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 3-13](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Constant rank rules out extra output directions nearby

**Remember:** Keep the rank fixed and no extra output direction can appear.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The rank of a derivative is the dimension of its image. A map has constant rank r near a point when every derivative in some neighborhood has rank exactly r, so no new output direction appears nearby.

**Problem.** A continuously differentiable map of constant rank r locally has the form (x₁,…,xᵣ,0,…,0) after continuously differentiable changes of input and output coordinates.

**How the definition helps.** The inverse function theorem makes r independent outputs into input coordinates, and constant rank forces the other outputs to depend only on these (our own). Subtracting that dependence straightens the map (our own). The map (x,y) ↦ (x,y²) has rank one at the origin and rank two where y ≠ 0 (our own).

**Wikipedia:** [Rank (differential topology)](https://en.wikipedia.org/wiki/Rank_%28differential_topology%29). It says: “Constant rank maps have a nice description in terms of local coordinates.”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 9.32](https://david92jackson.neocities.org/images/Principles_of_Mathematical_Analysis-Rudin.pdf)

### Continuous derivatives rule out oscillation that defeats local inversion

**Remember:** Continuity keeps nearby linear approximations close to the one you can invert.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A map is C¹ near a point if its total derivative exists throughout a neighborhood and varies continuously there. So derivatives at nearby points stay close to the derivative at the point, which is stronger than having a derivative at each point.

**Problem.** A C¹ map between open sets of the same Euclidean dimension has a local C¹ inverse wherever its total derivative is invertible.

**How the definition helps.** Nearby derivatives close to the invertible one make a contraction, so the contraction mapping theorem gives each nearby output a unique nearby input. Our own example (x,y) ↦ (x + 2x² sin(1/x), y), with first component zero at x = 0, has the identity as derivative at the origin. Its first component’s slope changes sign arbitrarily close to zero, so it is not injective near the origin.

**Wikipedia:** [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem). It says: “the function should also be invertible near that point”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-11](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Defining smoothness recursively gives the inverse the same regularity

**Remember:** Cᵏ means the derivative is Cᵏ⁻¹, one order at a time.

*True by definition.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A map is C¹ when its total derivative is continuous, and for an integer k &gt; 1 it is Cᵏ when its total derivative, as a map to matrices, is Cᵏ⁻¹.

**Problem.** If a Cᵏ map between open sets of the same Euclidean dimension has an invertible derivative at a point, its local inverse is Cᵏ.

**How the definition helps.** The inverse function theorem gives a C¹ inverse g with Dg = (Df∘g)⁻¹, and matrix inversion is smooth. If g is Cʲ with j &lt; k, the right side is Cʲ, so g is Cʲ⁺¹ by the recursive definition (our own).

**Wikipedia:** [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem). It says: “the same is true for the inverse function.”

**Sources:** none listed. No primary source with a working link was found.

### Independent constraint gradients make Lagrange multipliers unique

**Remember:** Independent gradients give only one set of weights.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Equality constraints are regular at a point when their gradients there are linearly independent. Lagrange multipliers are the coefficients that write the objective’s gradient as a combination of the constraint gradients, so independence makes them unique.

**Problem.** At a local extremum of a C¹ objective under regular C¹ equality constraints, the Lagrange multiplier vector exists and is unique.

**How the definition helps.** Linearly independent vectors give each vector in their span only one set of coefficients, and the Lagrange multiplier theorem gives existence. In our own example, minimize y subject to y = 0 and 2y = 0, where both (1,0) and (0,½) solve the multiplier equation.

**Wikipedia:** [Lagrange multiplier](https://en.wikipedia.org/wiki/Lagrange_multiplier). It says: “The constraint qualification assumption when there are multiple constraints is that the constraint gradients at the relevant point are linearly independent.”

**Sources:** none listed. No primary source with a working link was found.

### The derivative kernel gives tangents to regular level sets

**Remember:** Feasible velocities are exactly the steps the constraint derivative sends to zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A tangent vector to a level set at a is the velocity at a of a differentiable curve that stays in the level set, and the level F = c is regular if DF maps onto the output space at each of its points. Since F is constant along such a curve, its velocity v satisfies DF(a)v = 0.

**Problem.** On a regular level F = c of a C¹ map, the tangent vectors at a are exactly the vectors v with DF(a)v = 0.

**How the definition helps.** The chain rule applied to F(γ(t)) = c gives DF(a)v = 0. For the converse, our own proof uses the implicit function theorem to write the level set near a as a graph over free coordinates. Lines in those coordinates give curves with every velocity in the kernel.

**nLab:** [Lagrange multiplier](https://ncatlab.org/nlab/show/Lagrange+multiplier). It says: “and such that dGₓ is surjective for each x ∈ S.”

**Sources:** none listed. No primary source with a working link was found.

### The Lagrangian Hessian gives the second derivative along constraints

**Remember:** On the constraint, L equals f but has no first-order term.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables), 26B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For constraints G(x) = 0 and a multiplier vector λ, the Lagrangian L = f − λ·G equals f on the constraint set. Choosing λ with DL(a) = 0 removes its first-order term at a.

**Problem.** Let a be a constrained critical point of C² data, with DG(a) surjective and λ chosen so DL(a) = 0. Along every C² constraint curve through a with velocity v, the second derivative of f is D²L(a)\[v,v\], and positivity on every nonzero tangent gives a strict constrained local minimum.

**How the definition helps.** Along a constraint curve γ, f∘γ = L∘γ, whose second derivative is D²L(a)\[v,v\] + DL(a)γ″(0), and the second term vanishes. The implicit function theorem supplies local coordinates on the constraint set, where the ordinary second derivative test proves the minimum.

**nLab:** [Lagrange multiplier](https://ncatlab.org/nlab/show/Lagrange+multiplier). It says: “there is a function(al) l in Y\* such that x is a critical point of the function F − l∘G”

**Wikipedia:** [Hessian matrix](https://en.wikipedia.org/wiki/Hessian_matrix). It says: “The second derivative test consists here of sign restrictions of the determinants”

**Sources:** none listed. No primary source with a working link was found.

### The operator norm gives a vector mean value bound

**Remember:** Bound the largest stretch and you bound the whole change.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B12 (Calculus of vector functions), 26B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The operator norm ‖A‖ of a linear map A between Euclidean spaces is its largest stretch, the greatest length of Av over vectors v of length at most one. So ‖Av‖ ≤ ‖A‖‖v‖ for every v.

**Problem.** Let f be differentiable on an open set containing the segment from a to b. If ‖Df‖ ≤ M on that segment, then ‖f(b) − f(a)‖ ≤ M‖b − a‖.

**How the definition helps.** If f(b) ≠ f(a), let u be the unit vector along f(b) − f(a), so t ↦ u·f(a + t(b − a)) changes by ‖f(b) − f(a)‖ on \[0, 1\] (our own). The ordinary mean value theorem bounds that change by ‖Df‖‖b − a‖ ≤ M‖b − a‖ at some point of the segment (our own).

**nLab:** [operator norm](https://ncatlab.org/nlab/show/operator+norm). It says: “the supremum of the norms of A-images of unit-norm vectors v ∈ V”

**Sources:** none listed. No primary source with a working link was found.

### Divergence of the gradient puts Green’s identities in product form

**Remember:** The Laplacian is divergence of gradient; apply the divergence theorem to u∇v.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the Laplacian Δv as the divergence of the gradient ∇v, so the product rule gives div(u∇v) = uΔv + ∇u·∇v (our own). The normal derivative ∂ₙv is ∇v·n, with n the outward unit normal.

**Problem.** Take functions u and v smooth up to the boundary of a smooth bounded region. The boundary integrals of u∂ₙv and u∂ₙv − v∂ₙu equal the interior integrals of uΔv + ∇u·∇v and uΔv − vΔu, respectively.

**How the definition helps.** The divergence theorem turns the interior integral of div(u∇v) into the boundary integral of u∂ₙv (our own). Exchanging u and v and subtracting cancels ∇u·∇v (our own).

**Paper or page:** [Divergence of Product of Scalar Field with Gradient of Scalar Field](https://proofwiki.org/wiki/Divergence_of_Product_of_Scalar_Field_with_Gradient_of_Scalar_Field). It says: “div(U grad W) = U∇²W + (grad U) · (grad W)”

**Sources:** none listed. No primary source with a working link was found.

### Flux forms make divergence the limit of average outward flux

**Remember:** Outward flux divided by volume averages divergence over the region.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a smooth field F in ℝ³, the flux form β sends vectors u, v to det(F, u, v), the flux of F through the parallelogram they span. Define div F by dβ = (div F) times the volume form, so by Stokes’s theorem its integral over a region is the outward flux.

**Problem.** Let smooth bounded regions of positive volume lie inside balls centered at p whose radii tend to zero. For a smooth field near p, outward flux divided by volume tends to the divergence at p.

**How the definition helps.** Outward flux divided by volume is therefore the average of div F over the region (our own). The regions shrink to p and div F is continuous, so the average tends to div F(p) (our own). A coordinate calculation shows that this divergence is the usual sum of three partial derivatives (our own).

**nLab:** [divergence](https://ncatlab.org/nlab/show/divergence). It says: “The formula does not depend on the shape of boundaries taken in limiting process”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected domains give curl-free fields potentials

**Remember:** A loop that can shrink has no circulation in a curl-free field.

*Rules out counterexamples.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A domain is simply connected if it is path connected and every loop in it can shrink to a point inside it. A shrinking loop sweeps out a surface, so Stokes’s theorem makes the circulation of a curl-free field around the loop zero (our own). A potential for a vector field is a function whose gradient is that field.

**Problem.** On a simply connected open subset of ℝ³, every continuously differentiable vector field with zero curl has a potential.

**How the definition helps.** Zero circulation makes line integrals independent of path, so integrating from a fixed point gives a potential. Passing from a continuous contraction to a smooth one takes a smoothing theorem (our own). Off the z-axis, (−y,x,0)/(x² + y²) has zero curl but circulation 2π around the unit circle, counterclockwise as seen from above (our own).

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “a closed differential 1-form ω is exact, with potential function given at x ∈ X by the integral of ω from any fixed base point along any smooth path to x.”

**Sources:** none listed. No primary source with a working link was found.

### Small disk circulation recovers the normal component of curl

**Remember:** Circulation per unit area averages the normal component of curl.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a smooth field F in oriented ℝ³, the 1-form α(u) = F·u measures circulation. Define curl F by dα(u, v) = det(curl F, u, v), so the integral of dα over a surface is the flux of curl F through it.

**Problem.** Take disks centered at p with unit normal n and traverse their boundaries counterclockwise as seen from the tip of n. As their radii shrink, the line integral of F divided by disk area tends to curl F(p) · n.

**How the definition helps.** By Stokes’s theorem, the circulation around a disk’s boundary is the flux of curl F through the disk, the integral of curl F·n. Dividing by area gives the average of curl F·n over the disk, which tends to curl F(p)·n by continuity (our own).

**nLab:** [curl](https://ncatlab.org/nlab/show/curl). It says: “the integral of a vector field v along the boundary of an oriented surface D in X is equal to the integral of the vector field's curl across the surface”

**Sources:** none listed. No primary source with a working link was found.

### Equalizing transfers give the derivative test for Schur convexity

**Remember:** Majorization is a chain of transfers from larger to smaller entries.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** An equalizing transfer moves an amount from a larger entry to a smaller one without reversing their order. Say x majorizes y if permutations and finitely many such transfers turn x into y.

**Problem.** Let f be symmetric and continuously differentiable on ℝⁿ. Then f(x) ≥ f(y) whenever x majorizes y, exactly when xᵢ &gt; xⱼ implies ∂ᵢf(x) ≥ ∂ⱼf(x) for all x, i and j.

**How the definition helps.** Along a transfer from xᵢ to xⱼ, f changes at rate ∂ⱼf − ∂ᵢf, which the condition makes nonpositive, so f cannot increase (our own). A tiny transfer gives the converse (our own). The work is to show that transfers give the usual majorization by sorted prefix sums (our own).

**Wikipedia:** [Schur-convex function](https://en.wikipedia.org/wiki/Schur-convex_function). It says: “(xᵢ − xⱼ)(∂f/∂xᵢ − ∂f/∂xⱼ) ≥ 0”

**Sources:** none listed. No primary source with a working link was found.

### Fenchel's inequality is one line from the definition of the convex conjugate

**Remember:** The conjugate is a supremum, so it beats every single term.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 49N15. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** For a real function f on a nonempty set D ⊆ ℝⁿ, the convex conjugate f\*(p) = sup over x ∈ D of (⟨p,x⟩ − f(x)) is the largest gap between the linear function ⟨p,·⟩ and f.

**Problem.** Fenchel’s inequality gives ⟨p,x⟩ ≤ f(x) + f\*(p) for every x ∈ D and p ∈ ℝⁿ. For x,y ≥ 0 and r,s &gt; 1 with 1/r + 1/s = 1, Young’s inequality gives xy ≤ xʳ/r + yˢ/s.

**How the definition helps.** A supremum is at least each of its terms, so ⟨p,x⟩ − f(x) ≤ f\*(p). For f(t) = tʳ/r on t ≥ 0, ty − tʳ/r is largest at t = yˢ⁻¹, with value yˢ/s, which gives Young’s inequality (our own).

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “The proof follows from the definition of convex conjugate:”

**Sources:**

- [W. Fenchel, On conjugate convex functions, Canadian Journal of Mathematics 1 (1949)](https://doi.org/10.4153/CJM-1949-007-x)

### Gradients of strongly convex functions are invertible maps of space

**Remember:** To undo a convex gradient, minimize the potential minus a linear function.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv cs.LG, math.OC. Level 2: later undergraduate.

**Definition.** A convex potential flow is the map x ↦ ∇f(x) for a differentiable strongly convex potential f. Strong convexity means f(z) ≥ f(x) + ⟨∇f(x),z−x⟩ + c‖z−x‖² for a fixed c &gt; 0, so f clears every tangent plane by a quadratic margin. Then each tilted function f(x) − ⟨y,x⟩ grows to infinity and has one minimizer, where ∇f(x) = y (our own).

**Problem.** For a differentiable strongly convex potential on all of Euclidean space, its gradient is one-to-one and onto.

**How the definition helps.** For each y, the tangent bound at zero makes f(x) − ⟨y,x⟩ tend to infinity, so this continuous function has a minimizer, unique by strong convexity (our own). For differentiable convex functions the minimizers are exactly the points with ∇f(x) = y (our own).

**Paper or page:** [Convex Potential Flows: Universal Probability Distributions with Optimal Transport and Convex Optimization](https://arxiv.org/abs/2012.05942v2). It says: “The convexity implies invertibility and allows us to resort to convex optimization to solve the convex conjugate for efficient inversion.”

**Sources:**

- [Chin-Wei Huang, Ricky T. Q. Chen, Christos Tsirigotis, Aaron Courville, Convex Potential Flows: Universal Probability Distributions with Optimal Transport and Convex Optimization, arXiv:2012.05942v2 (2021)](https://arxiv.org/abs/2012.05942v2)

### The value +∞ turns constrained convex problems into unconstrained ones

**Remember:** A wall of height infinity replaces a constraint.

*Makes the theorem clean to state or prove.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** The convex-analysis indicator ι of a set A is zero on A and +∞ off A. Adding it to f leaves f unchanged on A and rules out every point outside A.

**Problem.** Let f be convex with values in ℝ ∪ {+∞} and finite somewhere on the convex set A. Minimizing f over A is equivalent to minimizing f + ι over the whole space, so theorems on unconstrained minima apply under their usual hypotheses.

**How the definition helps.** The sum agrees with f on A and is +∞ elsewhere, so both problems have the same infimum and minimizers (our own). A convex set has a convex indicator, so the sum is convex (our own).

**Wikipedia:** [Indicator function (convex analysis)](https://en.wikipedia.org/wiki/Indicator_function_%28convex_analysis%29), [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “It is similar to the indicator function used in probability, but assigns +∞ instead of 0 to the outside elements.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### Averaging dilations gives the integral Hardy inequality

**Remember:** Each dilation has a known cost, so average those costs.

*True by definition.* MSC 26D10 (Inequalities involving derivatives and differential and integral operators). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Write the Hardy average of f at x &gt; 0 as ∫₀¹ f(tx) dt, an average over t of the dilations f(t·), each with p-norm t<sup>(−1/p)</sup> times that of f (our own). By substitution it equals the usual (1/x)∫₀ˣ f (our own).

**Problem.** Let f be nonnegative and measurable on (0, ∞), with finite p-norm for p &gt; 1. Its Hardy average has p-norm at most p/(p − 1) times that of f.

**How the definition helps.** Minkowski’s integral inequality bounds the norm of the average by the average of the norms, ∫₀¹ t<sup>(−1/p)</sup> dt times the p-norm of f. That integral is p/(p − 1) for p &gt; 1 (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “by Minkowski's integral inequality.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Log coordinates give the exact Hardy bound

**Remember:** In log coordinates, Hardy's operator averages translates with total weight p/(p−1).

*True by definition. Confidence: medium.* MSC 26D10 (Inequalities involving derivatives and differential and integral operators). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For p &gt; 1, the Hardy operator H averages a nonnegative function f over each interval \[0, x\]. In the logarithmic coordinates g(s) = exp(s/p) f(exp(s)), which preserve the p-norm, H becomes an integral of translates of g against a positive weight (our own).

**Problem.** For nonnegative measurable functions of finite p-norm on (0, ∞), the smallest C satisfying ‖Hf‖ₚ ≤ C‖f‖ₚ is p/(p − 1).

**How the definition helps.** In these coordinates, H integrates g(s − u) against exp(−(1 − 1/p)u) over u ≥ 0, a weight of total mass p/(p − 1) (our own). Translation preserves norms, so the integral triangle inequality gives the bound (our own). Taking g to be the indicator of \[0, L\], with L tending to infinity, shows that no smaller constant works (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “An integral version of Hardy's inequality states the following”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Testing against unit functions gives Minkowski’s integral inequality

**Remember:** The largest pairing with a nonnegative unit test gives the norm.

*True by definition.* MSC 26D10 (Inequalities involving derivatives and differential and integral operators). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On \[0, 1\], take p, q &gt; 1 with 1/p + 1/q = 1. Define the p-norm of a continuous nonnegative h as its largest pairing ∫₀¹ hz with a continuous nonnegative z of q-norm at most one.

**Problem.** Let F be continuous and nonnegative on \[0, 1\]². The p-norm in x of its y-integral is at most the y-integral of its p-norms in x.

**How the definition helps.** For each test z, exchanging the integrals gives the y-integral of each slice’s pairing with z, and each pairing is at most that slice’s p-norm (our own). Taking the largest pairing gives the inequality (our own). Hölder’s inequality, with equality for z proportional to h<sup>(p−1)</sup>, shows that this norm agrees with the usual formula (our own).

**Wikipedia:** [Minkowski inequality](https://en.wikipedia.org/wiki/Minkowski_inequality). It says: “then Minkowski's integral inequality gives the usual Minkowski inequality as a special case”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### A convex perspective gives the log-sum bound

**Remember:** Apply the function to the ratio, then multiply by its denominator.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For positive a and b and f(t) = t log t, the perspective P(a, b) = b f(a/b) = a log(a/b) applies f to the ratio a/b and weights the result by b.

**Problem.** For positive lists a and b with totals A and B, the sum of their perspectives P(aᵢ, bᵢ) is at least P(A, B). This gives ∑ aᵢ log(aᵢ/bᵢ) ≥ A log(A/B).

**How the definition helps.** Jensen’s inequality for the convex f, with weights bᵢ/B at the points aᵢ/bᵢ, gives f(A/B) ≤ ∑(bᵢ/B)f(aᵢ/bᵢ) (our own). Multiplying by B gives P(A, B) ≤ ∑ P(aᵢ, bᵢ) (our own).

**Wikipedia:** [Log sum inequality](https://en.wikipedia.org/wiki/Log_sum_inequality). It says: “where the inequality follows from Jensen's inequality since bᵢ/b ≥ 0, ∑ᵢ₌₁ⁿ bᵢ/b = 1, and f is convex.”

**Sources:** none listed. No primary source with a working link was found.

### A convex set above unit length reverses Minkowski’s inequality

**Remember:** Power mean measures how far x shrinks before leaving a convex set.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; p &lt; 1. Let U be the set of nonnegative vectors whose pth powers average at least one, a convex set because t ↦ tᵖ is concave. The power mean of nonzero x is the largest t &gt; 0 with x/t in U, and the zero vector has mean zero.

**Problem.** For 0 &lt; p &lt; 1, the power mean obeys a reverse triangle inequality for nonnegative vectors of the same size. The power mean of their sum is at least the sum of their power means.

**How the definition helps.** Dividing nonzero x and y by their means puts both in U, and their average with weights proportional to the means is x + y divided by the sum of the means (our own). Convexity keeps this point in U, so the mean of x + y is at least that sum (our own). Solving for t shows that the mean is the pth root of the average of pth powers (our own).

**Paper or page:** [Minkowski's Inequality for Sums/Index Less than 1](https://proofwiki.org/wiki/Minkowski's_Inequality_for_Sums/Index_Less_than_1). It says: “If p &lt; 1, p ≠ 0, then: (∑ₖ₌₁ⁿ (aₖ + bₖ)ᵖ)¹⁄ᵖ ≥ (∑ₖ₌₁ⁿ aₖᵖ)¹⁄ᵖ + (∑ₖ₌₁ⁿ bₖᵖ)¹⁄ᵖ”

**Sources:** none listed. No primary source with a working link was found.

### A decreasing step function transfers Hardy’s bound to sums

**Remember:** Sort first so every prefix average can only go up.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Turn a finite nonnegative list into a decreasing step function: sort it from largest to smallest, put the kth entry on \[k − 1, k), and put zero beyond the list.

**Problem.** For p &gt; 1, take a nonnegative sequence with finite p-norm, the pth root of the sum of its pth powers. The sequence of averages of its first n entries has p-norm at most p/(p − 1) times the original norm.

**How the definition helps.** Sorting can only raise each initial sum, and at each integer n the step function’s integral average equals the average of the first n sorted entries (our own). This integral average decreases, so its pth power on \[n − 1, n\] is at least its value at n, and the integral Hardy inequality bounds the sum (our own). Truncation extends the result to infinite sequences (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “This follows directly from the integral form”

**Sources:**

- [G. H. Hardy, Note on a theorem of Hilbert, Mathematische Zeitschrift 6 (1920), 314–317. Early discrete bound.](https://doi.org/10.1007/BF01199965)

### A generalized inverse keeps Young’s area bound across jumps

**Remember:** Use the first crossing, even when the graph skips a height.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f be nondecreasing on \[0, A\] with f(0) = 0. Its generalized inverse g(y) = inf{x : f(x) ≥ y}, for 0 ≤ y ≤ f(A), is the first point where the graph reaches height y, even when f jumps over y.

**Problem.** For 0 ≤ a ≤ A and 0 ≤ b ≤ f(A), Young’s inequality gives ∫₀ᵃ f(x) dx + ∫₀ᵇ g(y) dy ≥ ab.

**How the definition helps.** The region under the graph over \[0, a\] and the region of width g(y) at each height y in \[0, b\] together cover the rectangle \[0, a\] × \[0, b\] (our own). This works because f(x) &lt; y forces x ≤ g(y) when f is nondecreasing (our own). For a step from zero to one, g is defined at height ½ although no ordinary inverse is (our own).

**Wikipedia:** [Young's inequality for products](https://en.wikipedia.org/wiki/Young%27s_inequality_for_products). It says: “let f denote a real-valued, continuous and strictly increasing function on \[0, c\] with c &gt; 0 and f(0) = 0. Let f⁻¹ denote the inverse function of f.”

**Sources:** none listed. No primary source with a working link was found.

### A supremum over test vectors gives Minkowski’s inequality

**Remember:** A supremum of absolute linear functions is automatically subadditive.

*True by definition. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For p &gt; 1 and q with 1/p + 1/q = 1, define the p-norm of a real vector x as the largest \|x·z\| over vectors z with q-norm at most one. So the p-norm is a supremum of absolute values of linear functions of x.

**Problem.** For real vectors x and y, Minkowski’s inequality bounds the p-norm of x + y by the sum of their p-norms.

**How the definition helps.** For each test z, \|(x + y)·z\| ≤ \|x·z\| + \|y·z\|, so taking the supremum gives Minkowski’s inequality (our own). Hölder’s inequality and the test z proportional to sign(xᵢ)\|xᵢ\|<sup>(p−1)</sup> show that this norm agrees with the pth-root formula (our own).

**Paper or page:** [Minkowski's Inequality for Sums](https://proofwiki.org/wiki/Minkowski's_Inequality_for_Sums). It says: “If p &gt; 1, then: (∑ₖ₌₁ⁿ (aₖ + bₖ)ᵖ)¹⁄ᵖ ≤ (∑ₖ₌₁ⁿ aₖᵖ)¹⁄ᵖ + (∑ₖ₌₁ⁿ bₖᵖ)¹⁄ᵖ”

**Sources:** none listed. No primary source with a working link was found.

### Averaging permuted exponents gives Muirhead’s inequality

**Remember:** Mixing the exponents can only lower a convex symmetric average.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Say a majorizes b if b is a mixture of permutations of a, with nonnegative weights totaling one. For fixed positive inputs x, the symmetric monomial average of an exponent vector a averages the products of each xᵢ raised to a\_σ(i) over all permutations σ, and it is a convex, permutation-invariant function of a.

**Problem.** For fixed positive inputs, the symmetric monomial average for a is at least the one for b whenever a majorizes b.

**How the definition helps.** Each monomial is the exponential of a linear function of the exponents, so the average is convex and unchanged by permuting them (our own). Jensen’s inequality over the mixture then bounds the value at b by the value at a (our own). Rado’s theorem shows that this majorization agrees with the usual sorted-sum test (our own).

**Wikipedia:** [Muirhead's inequality](https://en.wikipedia.org/wiki/Muirhead%27s_inequality). It says: “where the sum extends over all permutations σ of { 1, ..., n }.”

**Sources:**

- [R. F. Muirhead, Some Methods applicable to Identities and Inequalities of Symmetric Algebraic Functions of n Letters, Proceedings of the Edinburgh Mathematical Society 21, 144–162.](https://doi.org/10.1017/S001309150003460X)

### Maximal subset sums give the rearrangement inequality

**Remember:** No k entries can outsum the k largest.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The kth top sum of a list is the largest total of any k of its entries, which is the sum of its k largest entries. So the first k entries of any reordering add up to at most the kth top sum (our own).

**Problem.** Pairing two real lists in the same sorted order maximizes their sum of pairwise products. Pairing them in opposite orders minimizes it.

**How the definition helps.** Sort the first list in decreasing order; the product sum is then the prefix sums of the second list weighted by nonnegative drops, plus a fixed multiple of its total (our own). Each prefix sum is at most the top sum, and sorting the second list decreasingly attains every top sum at once (our own). Negating the second list gives the minimum (our own).

**Wikipedia:** [Rearrangement inequality](https://en.wikipedia.org/wiki/Rearrangement_inequality). It says: “for every permutation σ of 1, …, n.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Mixing permutations makes Karamata’s inequality Jensen’s inequality

**Remember:** Averaging rearrangements of x can only lower a convex sum.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Say x majorizes y if y is a mixture of rearrangements of x: a weighted average of coordinate permutations of x, with nonnegative weights summing to one.

**Problem.** If x majorizes y, the sum of a convex function’s values on x is at least its sum on y. For a strictly convex function, equality holds exactly when y is a permutation of x.

**How the definition helps.** Jensen’s inequality at each coordinate bounds f(yᵢ) by the weighted average of f at the permuted entries, and summing gives the claim because each permutation keeps the sum (our own). For strictly convex f, equality forces all permutations with positive weight to give the same vector, so y is a permutation of x (our own). Rado’s theorem shows this definition agrees with the usual test by sorted prefix sums (our own).

**Wikipedia:** [Majorization](https://en.wikipedia.org/wiki/Majorization). It says: “we have x ≺ y if and only if x is in the convex hull of all vectors obtained by permuting the coordinates of y.”

**Sources:**

- [R. Rado, An Inequality, Journal of the London Mathematical Society 27 (1952), 1–6.](https://doi.org/10.1112/jlms/s1-27.1.1)
- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Normalized coefficients make Newton’s inequalities survive differentiation

**Remember:** Averaged k-fold products survive differentiation unchanged.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For the polynomial ∏(t + aᵢ) of degree n, the kth normalized coefficient Sₖ is the coefficient of tⁿ⁻ᵏ divided by (n choose k), the average of all products of k distinct aᵢ. Differentiating and dividing by n keeps S₀, …, Sₙ₋₁ unchanged.

**Problem.** The polynomial is a product of factors t + aᵢ with aᵢ ≥ 0. Each interior normalized coefficient is at least the geometric mean of its two neighbors.

**How the definition helps.** The derivative keeps the normalized coefficients, and by Rolle’s theorem its roots stay real and nonpositive, so induction on n gives every comparison except the last (our own). For positive entries, reversing the coefficients gives the last one, and a limit covers zeros (our own). The base case is a quadratic, whose discriminant is nonnegative (our own).

**Wikipedia:** [Newton's inequalities](https://en.wikipedia.org/wiki/Newton%27s_inequalities). It says: “Then the elementary symmetric means, given by Sₖ = eₖ/(n choose k),”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Strict convexity identifies equality in Minkowski’s inequality

**Remember:** No flat piece on the unit sphere, so equality needs one direction.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A norm is strictly convex if its unit sphere contains no line segment: the midpoint of two distinct unit vectors has norm less than one.

**Problem.** Two nonzero vectors in a strictly convex norm attain equality in the triangle inequality exactly when one is a positive multiple of the other. This applies to the p-norm when 1 &lt; p &lt; ∞.

**How the definition helps.** Normalize both vectors and average the two unit vectors with weights proportional to the norms; strict convexity makes the triangle inequality strict unless the unit vectors coincide (our own). The p-norm for 1 &lt; p &lt; ∞ is strictly convex because the pth power of the absolute value is strictly convex (our own). In the 1-norm, (1, 0) and (0, 1) give equality, so the condition is needed (our own).

**Wikipedia:** [Minkowski inequality](https://en.wikipedia.org/wiki/Minkowski_inequality). It says: “with equality for 1 &lt; p &lt; ∞ if and only if f and g are positively linearly dependent”

**Paper or page:** [Minkowski's Inequality for Sums](https://proofwiki.org/wiki/Minkowski's_Inequality_for_Sums). It says: “If p &gt; 1, then: (∑ₖ₌₁ⁿ (aₖ + bₖ)ᵖ)¹⁄ᵖ ≤ (∑ₖ₌₁ⁿ aₖᵖ)¹⁄ᵖ + (∑ₖ₌₁ⁿ bₖᵖ)¹⁄ᵖ”

**Sources:** none listed. No primary source with a working link was found.

### Taking an infimum of linear functions proves Hölder’s inequality

**Remember:** The best common scale cannot beat separate best scales.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For p, q &gt; 1 with 1/p + 1/q = 1, the weighted geometric mean of u, v ≥ 0 is the infimum of su/p + tv/q over positive scales s, t with s<sup>(1/p)</sup>·t<sup>(1/q)</sup> = 1. As an infimum of sums, the mean of a sum of pairs is at least the sum of their means (our own).

**Problem.** For nonnegative lists a and b of equal length, ∑ aᵢbᵢ is at most the weighted geometric mean of ∑ aᵢᵖ and ∑ bᵢᑫ. This bound is the p-norm of a times the q-norm of b.

**How the definition helps.** Each aᵢbᵢ is the mean of aᵢᵖ and bᵢᑫ, so superadditivity of the infimum gives the bound for the sums (our own). The weighted arithmetic–geometric mean inequality shows that the infimum equals u<sup>(1/p)</sup>·v<sup>(1/q)</sup> (our own).

**Paper or page:** [Hölder's Inequality for Sums/Finite](https://proofwiki.org/wiki/Hölder's_Inequality_for_Sums/Finite). It says: “∑ₖ₌₁ⁿ \|xₖyₖ\| ≤ (∑ₖ₌₁ⁿ \|xₖ\|ᵖ)¹⁄ᵖ (∑ₖ₌₁ⁿ \|yₖ\|ᑫ)¹⁄ᑫ”

**Sources:** none listed. No primary source with a working link was found.

### Tests with all convex functions force equal totals

**Remember:** Without equal totals, a falling straight line can reverse the comparison.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Sort two equal-length real lists in decreasing order. Then x majorizes y if each sum of the first k entries of x is at least the matching sum for y, and the two totals are equal.

**Problem.** A list x majorizes y exactly when the sum of f on x is at least the sum on y for every convex f.

**How the definition helps.** The linear tests f(t) = t and f(t) = −t force equal totals, and the tests max(t − c, 0) give the prefix inequalities (our own). Conversely, Rado’s theorem writes y as an average of permutations of x, so Jensen’s inequality applies (our own). Without equal totals, (2, 2) beats (1, 1) on every prefix, but f(t) = −t reverses the bound (our own).

**Wikipedia:** [Majorization](https://en.wikipedia.org/wiki/Majorization). It says: “For every convex function h: ℝ → ℝ, ∑ᵢ₌₁ᵈ h(xᵢ) ≥ ∑ᵢ₌₁ᵈ h(yᵢ).”

**Sources:**

- [R. Rado, An Inequality, Journal of the London Mathematical Society 27 (1952), 1–6.](https://doi.org/10.1112/jlms/s1-27.1.1)

### The adjoint of Hardy averaging gives Copson’s bound

**Remember:** Copson’s operator is Hardy’s average turned on its side.

*True by definition. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Copson operator C is the transpose of Hardy’s averaging matrix, whose row n averages the first n entries. So (Cb)ₙ = ∑ₖ≥ₙ bₖ/k, and ⟨a, Cb⟩ = ⟨Ha, b⟩ for nonnegative sequences a and b.

**Problem.** For q &gt; 1, take a nonnegative sequence b with finite q-norm, the qth root of the sum of its qth powers. The q-norm of Cb is at most q times the q-norm of b.

**How the definition helps.** The q-norm of Cb is the supremum of ⟨a, Cb⟩ over nonnegative a of unit p-norm, where 1/p + 1/q = 1, and transposing turns this into ⟨Ha, b⟩ (our own). Hardy’s inequality bounds the p-norm of Ha by q times that of a, and Hölder’s inequality finishes (our own). Truncation and a limit handle infinite sequences (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “Its discrete version states that if a₁, a₂, a₃, … is a sequence of non-negative real numbers, then for every real number p &gt; 1 one has”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Threshold sums give the inequality for weak majorization

**Remember:** Compare the sums of excesses above every threshold.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For equal-length real lists, x weakly majorizes y if at every threshold c the total excess ∑ max(xᵢ − c, 0) of x is at least that of y. This matches the usual test that compares the sums of the k largest entries.

**Problem.** If x weakly majorizes y, the sum of any increasing convex function’s values on x is at least the sum on y.

**How the definition helps.** On the list entries, every increasing convex function agrees with a constant plus nonnegative multiples of max(t − c, 0), and the threshold test compares each such term (our own). To see this, join its values at the entries of both lists by straight segments and extend it constantly to the left (our own). Placing the threshold between consecutive sorted entries gives the match with sorted sums (our own).

**Paper or page:** [Integral means of solutions of the one-dimensional Poisson equation with Robin boundary conditions](https://arxiv.org/abs/2312.12535). It says: “Under these assumptions, the following inequality holds φ(x₁) + ⋯ + φ(xₙ) ≤ φ(y₁) + ⋯ + φ(yₙ).”

**Sources:** none listed. No primary source with a working link was found.

### A change of coordinates orders quasi-arithmetic means

**Remember:** Transform each input, take the weighted average, then undo the transformation.

*True by definition.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For f continuous and strictly increasing on an interval, the f-mean applies f to each input, takes a weighted average with nonnegative weights summing to one, then applies the inverse of f. So it is the ordinary weighted mean in the coordinate u = f(x).

**Problem.** Let f and g be continuous and strictly increasing on one interval. The f-mean never exceeds the g-mean for any finite weighted list exactly when g composed with the inverse of f is convex.

**How the definition helps.** In the coordinate u = f(x), applying the increasing g turns the comparison into Jensen’s inequality for h = g composed with the inverse of f (our own). Two-point lists show that the comparison forces h to be convex (our own). Conversely, induction extends the chord inequality of h to all finite weighted lists (our own).

**Wikipedia:** [Quasi-arithmetic mean](https://en.wikipedia.org/wiki/Quasi-arithmetic_mean). It says: “in order to ensure that an average of any finite (or infinite) subset of values within J will always correspond to a value in I.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Averages of successive ratios give Maclaurin’s chain

**Remember:** Adding a smaller ratio cannot raise its geometric average.

*True by definition.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let Sₖ be the average of all products of k distinct positive entries, with S₀ = 1. The kth Maclaurin mean is the geometric mean of the first k ratios Sⱼ/Sⱼ₋₁, which equals the kth root of Sₖ, a formula that extends it to nonnegative entries.

**Problem.** The Maclaurin means do not increase as k increases. They start at the arithmetic mean and end at the geometric mean.

**How the definition helps.** Newton’s inequalities make the ratios Sⱼ/Sⱼ₋₁ nonincreasing, and a geometric mean cannot rise when a smaller term joins it (our own). The first mean S₁ is the arithmetic mean, and the nth root of Sₙ is the geometric mean (our own). Continuity extends the chain to zero entries (our own).

**Wikipedia:** [Maclaurin's inequality](https://en.wikipedia.org/wiki/Maclaurin%27s_inequality). It says: “Maclaurin's inequality can be proved using Newton's inequalities or a generalised version of Bernoulli's inequality.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Eudoxus reals multiply by composition, so multiplication is associative for free

**Remember:** Composition is associative before passing to classes.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 3: graduate.

**Definition.** An almost homomorphism is a map f from ℤ to ℤ with f(m + n) − f(m) − f(n) bounded over all integers m, n. A Eudoxus real is a class of almost homomorphisms whose differences are bounded, and two classes multiply by composing representatives.

**Problem.** Multiplication of Eudoxus reals is associative.

**How the definition helps.** Composition of functions is associative, so associativity holds already for representatives (our own). The work goes into showing that composition respects bounded differences (our own).

**nLab:** [Eudoxus real number](https://ncatlab.org/nlab/show/Eudoxus+real+number). It says: “becomes a commutative ring whose addition and multiplication are descended from + and ∘ on AL(ℤ).”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided Dedekind cuts put a rational between any two ordered reals

**Remember:** A rational shared by Uₓ and Lᵧ sits between x and y.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 03F60. arXiv math.CA. Level 3: graduate.

**Definition.** A two-sided Dedekind cut is a pair of nonempty sets of rationals: a downward closed L with no greatest member, and an upward closed U with no least member. Every member of L lies below every member of U, and for rationals a &lt; b, either a ∈ L or b ∈ U. Set x &lt; y when Uₓ and Lᵧ share a rational.

**Problem.** If x &lt; y are real numbers, then a rational number lies strictly between them.

**How the definition helps.** A rational q in both Uₓ and Lᵧ lies between x and y (our own). Since Uₓ has no least member, it contains a rational below q, so x &lt; q; in the same way, q &lt; y (our own).

**nLab:** [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “We define x &lt; y to mean that there exists a rational number a such that x &lt; a &lt; y”

**Sources:** none listed. No primary source with a working link was found.

### Scaling ratios invert growth indices

**Remember:** Stretch the input by a, and the output stretches by about a<sup>ρ</sup>.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A12 (Rate of growth of functions, orders of infinity, slowly varying functions). arXiv math.CA. Level 3: graduate.

**Definition.** A positive measurable function f on a half-line varies regularly with index ρ if, for every a &gt; 0, the ratio f(ax)/f(x) tends to a<sup>ρ</sup> as x → ∞. So stretching the input by a stretches the output by about a<sup>ρ</sup>.

**Problem.** If a positive, continuous, strictly increasing function varies regularly with index ρ &gt; 0, its inverse varies regularly with index 1/ρ.

**How the definition helps.** Read backwards, the definition says that multiplying the output by a needs an input stretch of about a<sup>(1/ρ)</sup> (our own). For b &lt; a<sup>(1/ρ)</sup> &lt; c, it gives f(bx) &lt; a·f(x) &lt; f(cx) for large x, and f takes every large value, so the inverse ratio lies between b and c (our own). Letting b and c approach a<sup>(1/ρ)</sup> gives the limit (our own).

**Wikipedia:** [Slowly varying function](https://en.wikipedia.org/wiki/Slowly_varying_function). It says: “Similarly, a regularly varying function is a function of a real variable whose behaviour at infinity is similar to the behaviour of a power law function”

**Sources:** none listed. No primary source with a working link was found.

### Dini continuity gives pointwise Fourier convergence

**Remember:** Small changes near x must shrink fast enough to integrate against 1/r.

*Rules out counterexamples.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 42A20. arXiv math.CA. Level 3: graduate.

**Definition.** Let ω(r) be the supremum of \|f(y) − f(x)\| over points y within distance r of x. Then f is Dini continuous at x if ω(r)/r has finite integral near zero, so the slope (f(x + t) − f(x))/t is integrable near t = 0.

**Problem.** The Fourier series of an integrable periodic function converges to its value at every point where it is Dini continuous.

**How the definition helps.** The Fourier error at x integrates roughly this slope against sin((n + ½)t), and Dini continuity makes it integrable (our own). The Riemann–Lebesgue lemma then sends the integral to zero (our own). Mere continuity is not enough: du Bois-Reymond gave a continuous periodic function whose Fourier series diverges at a point (our own).

**Wikipedia:** [Dini test](https://en.wikipedia.org/wiki/Dini_test). It says: “Then the Fourier series of f converges at t to f(t).”

**Sources:** none listed. No primary source with a working link was found.

### Everywhere approximate continuity gives intermediate values

**Remember:** Outside a set of density zero, nearby values stay close.

*Rules out counterexamples.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A24. arXiv math.CA. Level 3: graduate.

**Definition.** A measurable real function f is approximately continuous at x if, for each tolerance ε &gt; 0, the points where it differs from f(x) by more than ε fill a fraction of small intervals about x that tends to zero.

**Problem.** A real function approximately continuous at every point of an open interval takes every value between any two of its values.

**How the definition helps.** Everywhere approximate continuity makes a bounded function the derivative of its indefinite integral, and Darboux’s theorem gives derivatives every intermediate value (our own). For an unbounded function, first apply arctangent, which keeps approximate continuity (our own). A step from zero to one is approximately continuous except at the jump, and it skips values (our own).

**Wikipedia:** [Approximately continuous function](https://en.wikipedia.org/wiki/Approximately_continuous_function). It says: “when f is essentially bounded, its points of approximate continuity coincide with its Lebesgue points.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity with infinitesimals gives a short Heine–Cantor proof

**Remember:** Uniform continuity checks closeness at all hyperreal points, not only real ones.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26E35. arXiv math.CA, math.LO. Level 3: graduate.

**Definition.** In nonstandard analysis, f is uniformly continuous on I if its extension f\* sends any two infinitely close points of I\* to infinitely close values. Plain continuity asks this only when one of the two points is real.

**Problem.** Every continuous function on a closed bounded interval is uniformly continuous.

**How the definition helps.** On a closed bounded interval, every hyperreal point is infinitely close to a real point of the interval, its standard part, so the uniform test reduces to the plain one (our own). Infinitely close x and y share a standard part s, and continuity at s makes f\*(x) and f\*(y) both infinitely close to f(s) (our own).

**Wikipedia:** [Nonstandard calculus](https://en.wikipedia.org/wiki/Nonstandard_calculus), [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “The fact that a continuous function on a compact interval I is necessarily uniformly continuous (the Heine–Cantor theorem) admits a succinct hyperreal proof.”

**Sources:**

- [Abraham Robinson, Non-standard analysis, Indagationes Mathematicae (Proceedings) 64 (1961)](https://doi.org/10.1016/S1385-7258(61)50044-3)

### Baire-one functions have dense continuity points

**Remember:** One sequence of continuous functions converges at every point.

*Makes the theorem clean to state or prove.* MSC 26A21 (Classification of real functions; Baire classification of sets and functions), 26A15. arXiv math.CA. Level 3: graduate.

**Definition.** A real function is of Baire class one if it is the pointwise limit of a sequence of continuous functions.

**Problem.** Every Baire class one real function on the real line is continuous on a dense set of points.

**How the definition helps.** Baire’s theorem finds, in every interval, a subinterval where the tail terms stay within ε of each other, so the limit stays within ε of one continuous term there (our own). Shrinking that subinterval bounds the oscillation of the limit by 3ε, so small oscillation holds on a dense open set (our own). Intersecting these sets for ε = 1/n gives a dense set of continuity points, again by Baire’s theorem (our own).

**Wikipedia:** [Baire function](https://en.wikipedia.org/wiki/Baire_function). It says: “the pointwise limit of a sequence of Baire class 0 functions.”

**Sources:** none listed. No primary source with a working link was found.

### Dini derivatives exist for every function, so Denjoy–Young–Saks needs no hypothesis

**Remember:** Four one-sided upper and lower slopes always exist.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 26A27. arXiv math.CA. Level 3: graduate.

**Definition.** The four Dini derivatives of f at t are the upper and lower limits of the slope (f(t + h) − f(t))/h as h tends to zero from the right and from the left, with ±∞ allowed. Unlike the derivative, they exist at every interior point.

**Problem.** Almost everywhere on an interval, a real function has a finite derivative, or both upper Dini derivatives are +∞ and both lower ones are −∞. Otherwise one upper derivative equals the lower one from the opposite side and is finite, while the other upper is +∞ and the other lower is −∞.

**How the definition helps.** Because the four Dini derivatives exist for every function, the theorem needs no hypothesis on f (our own). The Denjoy–Young–Saks theorem does the work of limiting their patterns outside a null set (our own).

**Wikipedia:** [Dini derivative](https://en.wikipedia.org/wiki/Dini_derivative), [Denjoy–Young–Saks theorem](https://en.wikipedia.org/wiki/Denjoy%E2%80%93Young%E2%80%93Saks_theorem). It says: “The functions are defined in terms of the infimum and supremum in order to make the Dini derivatives as "bullet proof" as possible, so that the Dini derivatives are well-defined for almost all functions”

**Sources:**

- [Grace Chisholm Young, On the derivates of a function, Proceedings of the London Mathematical Society 15 (1917) 360–384](https://doi.org/10.1112/plms/s2-15.1.360)

### The Lebesgue point condition makes the indefinite integral differentiable there

**Remember:** A vanishing average error forces the right slope.

*True by definition. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 28A15. arXiv math.CA. Level 3: graduate.

**Definition.** A point x is a Lebesgue point of a locally integrable f if the average of \|f − f(x)\| over \[x − h, x + h\] tends to zero as h → 0. This weakens continuity at x but still controls averages of f near x, which is what difference quotients of its integral are (our own).

**Problem.** Let F(x) be the integral of f from a to x. Then F′(x) = f(x) at every Lebesgue point x of f inside the interval.

**How the definition helps.** The difference quotient of F at x minus f(x) is an average of f − f(x) over an interval of length \|h\|, at most twice the average of \|f − f(x)\| over \[x − \|h\|, x + \|h\|\] (our own). At a Lebesgue point this tends to zero. The Lebesgue differentiation theorem makes almost every point a Lebesgue point.

**Wikipedia:** [Lebesgue differentiation theorem](https://en.wikipedia.org/wiki/Lebesgue_differentiation_theorem). It says: “The points x for which this is true are called the Lebesgue points of f.”

**Sources:** none listed. No primary source with a working link was found.

### Clock changes preserve fractional composition

**Remember:** A fractional integral on a changed clock is the usual one.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals), 45D05. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a clock ψ on \[a, b\], continuously differentiable with ψ′ &gt; 0. The order-α integral for ψ, with α &gt; 0, integrates f(s) from a to t against ψ′(s)(ψ(t) − ψ(s))ᵅ⁻¹/Γ(α), which is the usual fractional integral in the new time u = ψ(s).

**Problem.** On continuous inputs, applying these integrals successively with positive orders α and β gives the integral of order α + β for the same clock.

**How the definition helps.** Substituting u = ψ(s) turns each operator into the usual fractional integral with lower endpoint ψ(a), so the usual composition law transfers (our own). That law combines the two power kernels by the beta integral.

**Wikipedia:** [Riemann–Liouville integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Liouville_integral). It says: “the latter of which is a semigroup property.”

**Paper or page:** [Existence and Ulam-Hyers Mittag-Leffler stability of ψ-Hilfer fractional functional integrodifferential equation](https://arxiv.org/abs/2001.01567v1). It says: “Then, we have the following semigroup property given by \\(I\_{a<sup>+</sup>}<sup>\\alpha ,\\psi </sup>I\_{a<sup>+</sup>}<sup>\\beta ,\\psi </sup>(\\cdot )=I\_{a<sup>+</sup>}<sup>\\alpha +\\beta ,\\psi </sup>(\\cdot )\\)”

**Sources:** none listed. No primary source with a working link was found.

### Gamma normalization adds fractional orders

**Remember:** Normalized integration kernels add their orders when convolved.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals), 44A35. arXiv math.CA. Level 3: graduate.

**Definition.** For α &gt; 0, integration of order α convolves f on \[0, t\] with the kernel tᵅ⁻¹/Γ(α), where Γ is the gamma function. Dividing by Γ(α) is what makes two such kernels convolve to the kernel of order α + β.

**Problem.** Take an integrable input on \[0,T\] and positive orders α and β. Integrating successively gives integration of order α + β almost everywhere.

**How the definition helps.** Convolving the two kernels gives tᵅ⁺ᵝ⁻¹ times the beta integral Γ(α)Γ(β)/Γ(α + β), so the gamma factors leave exactly the kernel of order α + β (our own). Substituting s = tu reduces the convolution to this integral on \[0, 1\] (our own).

**Paper or page:** [An extension of the Cartwright-McMullen theorem in fractional calculus for the smooth Stieltjes case](https://arxiv.org/abs/2309.07148v1). It says: “The Index Law holds. That is, $J<sub>a<sup>+</sub><sup>\\alpha</sup> </sup> \\circ J<sub>a<sup>+</sub><sup>\\beta</sup> </sup>=J<sub>a<sup>+</sub><sup>\\alpha</sup> +\\beta </sup>$ for all $\\alpha ,\\beta &gt; 0$.”

**Sources:** none listed. No primary source with a working link was found.

### Half integration squares to integration

**Remember:** Two copies of the half-order kernel convolve to the constant one.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals), 45P05. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** On L²(\[0, 1\]), half integration integrates f(s)/√(π(x − s)) from zero to x. Its kernel is chosen so that convolving it with itself gives the constant one, the kernel of ordinary integration.

**Problem.** Applying this operator twice gives ordinary integration from zero to x.

**How the definition helps.** Applying the operator twice convolves its kernel with itself, after exchanging the two integrals (our own). Rescaling the inner interval to \[0, 1\] gives (1/π)∫₀¹ ds/√(s(1 − s)) = 1 (our own). That this operator and its negative are the only square roots of integration is a separate theorem.

**Wikipedia:** [Riemann–Liouville integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Liouville_integral). It says: “the latter of which is a semigroup property.”

**Paper or page:** [Square roots of some classical operators](https://arxiv.org/abs/2109.13688v1). It says: “The operators ±Y are the only two square roots of V.”

**Sources:** none listed. No primary source with a working link was found.

### Free tags turn gauge Riemann sums into the Lebesgue integral

**Remember:** Free the tags, and the gauge integral becomes Lebesgue's.

*Makes the theorem clean to state or prove.* MSC 26A39 (Denjoy and Perron integrals, other special integrals), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** The McShane integral is a gauge integral with free tags: each tag tⱼ may lie anywhere in \[a, b\], not only in its interval Iⱼ. For a positive gauge δ, a partition is fine if each Iⱼ lies within δ(tⱼ) of tⱼ. The integral is S if, for every ε &gt; 0, some δ makes every fine sum ∑ f(tⱼ)·length(Iⱼ) differ from S by less than ε.

**Problem.** A function on \[a, b\] is McShane integrable exactly when it is Lebesgue integrable, with the same integral.

**How the definition helps.** Freeing the tags forces absolute integrability, which is what the Lebesgue integral requires (our own). The McShane–Lebesgue equivalence theorem proves that the two integrals agree (our own).

**Wikipedia:** [McShane integral](https://en.wikipedia.org/wiki/McShane_integral). It says: “The fact that the tags are allowed to be outside the subintervals is why the partition is called free. It's also the only difference between the definitions of the Henstock-Kurzweil integral and the McShane integral.”

**Sources:**

- [E. J. McShane, A unified theory of integration, The American Mathematical Monthly 80 (1973) 349–359](https://doi.org/10.1080/00029890.1973.11993291)

### Stieltjes integrals describe every continuous linear functional on C\[0, 1\]

**Remember:** Weigh each piece by the jump of g, not its length.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 28C05. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Riemann–Stieltjes integral of f against g weighs each piece \[xᵢ₋₁, xᵢ\] of a partition by g(xᵢ) − g(xᵢ₋₁) instead of its length. It is the limit of ∑ f(cᵢ)(g(xᵢ) − g(xᵢ₋₁)), for any tags cᵢ in the pieces, as the longest piece shrinks to zero.

**Problem.** Every continuous linear functional A on real C\[0,1\] with its supremum norm satisfies A(f) = ∫ f dα for some α of bounded variation.

**How the definition helps.** Increments of g can encode point masses, through jumps, and spread-out mass in one formula (our own). Riesz’s representation theorem supplies an integrator α of bounded variation for each continuous linear functional.

**Wikipedia:** [Riesz–Markov–Kakutani representation theorem](https://en.wikipedia.org/wiki/Riesz%E2%80%93Markov%E2%80%93Kakutani_representation_theorem), [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “The Riemann–Stieltjes integral appears in the original formulation of F. Riesz's theorem which represents the dual space of the Banach space C\[a,b\] of continuous functions in an interval \[a,b\] as Riemann–Stieltjes integrals against functions of bounded variation.”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues, Annales de la Faculté des sciences de Toulouse 8 (1894)](https://doi.org/10.5802/afst.108)

### A variation clock gives compactness

**Remember:** Count length as time, and every curve moves at bounded speed.

*Makes the theorem clean to state or prove.* MSC 26A45 (Functions of bounded variation, generalizations), 26B12. arXiv math.CA. Level 3: graduate.

**Definition.** For a continuous curve of finite length on a fixed interval \[a, b\] with a &lt; b, the new clock at time t is (t − a plus the length up to t), divided by (b − a plus the total length). This clock rises strictly from zero to one, and in it the curve is Lipschitz with constant b − a plus its length (our own).

**Problem.** Suppose a sequence of such curves has bounded lengths and bounded starting points. In the new clock, some subsequence converges uniformly.

**How the definition helps.** Bounded lengths give the reparametrized curves a common Lipschitz constant, and bounded starting points keep them in one compact ball (our own). The Arzelà–Ascoli theorem then gives a uniformly convergent subsequence (our own).

**Paper or page:** [On the relaxation of polyconvex functionals with linear growth under strict convergence in BV](https://arxiv.org/abs/2508.11041v1). It says: “are Lipschitz continuous with uniformly bounded Lipschitz constants”

**Sources:** none listed. No primary source with a working link was found.

### Continuity removes exponential jump terms

**Remember:** A continuous f has no jumps, so df has no point masses.

*Rules out counterexamples.* MSC 26A45 (Functions of bounded variation, generalizations), 26A24. arXiv math.CA. Level 3: graduate.

**Definition.** A function of locally bounded variation, one whose sums of absolute increments stay bounded on each compact interval, has a signed Stieltjes measure df. For right-continuous f, df gives (a, b\] the mass f(b) − f(a). A jump puts mass at one point, so continuity means df has no point masses.

**Problem.** For continuous f of locally bounded variation, d(exp f) = exp(f) df.

**How the definition helps.** Without jumps, every increment on a fine partition is small, so each change of exp(f) equals exp(f) times the change of f up to an error quadratic in the increment (our own). The total error is at most a constant times the largest increment times the total variation, which tends to zero (our own). For a right-continuous jump from zero to one, the two sides give masses e − 1 and e (our own).

**Paper or page:** [Semiclassical estimates for measure potentials on the real line](https://arxiv.org/abs/2303.17722v2). It says: “Then, as measures on a bounded Borel set of ℝ, d(eᶠ) = eᶠ df.”

**Sources:** none listed. No primary source with a working link was found.

### Absolute continuity as an indefinite integral makes zero derivative force constancy

**Remember:** If the integrand is zero almost everywhere, the integral never moves.

*True by definition. Confidence: medium.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A42. arXiv math.CA. Level 3: graduate.

**Definition.** A function f on \[a, b\] is absolutely continuous if it is an indefinite integral: f(x) = f(a) + ∫ₐˣ g(t) dt on \[a, b\] for some Lebesgue integrable g.

**Problem.** If f is absolutely continuous on \[a, b\] and f′ = 0 almost everywhere, then f is constant. Almost everywhere means outside a set of length zero.

**How the definition helps.** The Lebesgue differentiation theorem gives g = f′ = 0 almost everywhere, so every integral of g vanishes and f(x) = f(a) (our own). The fundamental theorem for the Lebesgue integral shows that this definition agrees with the usual one by sums over small intervals.

**nLab:** [absolutely continuous function](https://ncatlab.org/nlab/show/absolutely+continuous+function). It says: “That the next definition is equivalent is the fundamental theorem of calculus for the Lebesgue integral on the real line.”

**Sources:** none listed. No primary source with a working link was found.

### Defining absolute continuity by indefinite integrals reduces the fundamental theorem to differentiation

**Remember:** An integrable density generates every increment.

*True by definition. Confidence: medium.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A36. arXiv math.CA. Level 3: graduate.

**Definition.** A function f on \[a, b\] is absolutely continuous if it is an indefinite integral: f(x) = f(a) + ∫ₐˣ g(t) dt on \[a, b\] for some Lebesgue integrable g.

**Problem.** An absolutely continuous function f on \[a, b\] is differentiable almost everywhere, and f(x) = f(a) + ∫ₐˣ f′ for all x.

**How the definition helps.** The definition already supplies a density g, so only g = f′ almost everywhere remains, and the Lebesgue differentiation theorem gives it (our own). The real work moves into showing that this integral form agrees with the usual definition by sums over small intervals, which Wikipedia lists as equivalent.

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “there exists a Lebesgue integrable function g on \[a,b\] such that f(x) = f(a) + ∫ₐˣ g(t) dt for all x in \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Weak derivatives determine continuous representatives

**Remember:** Integrate the weak derivative and recover only a missing constant.

*Makes the theorem clean to state or prove.* MSC 26A46 (Absolutely continuous real functions in one variable). arXiv math.CA. Level 3: graduate.

**Definition.** On (a, b), an integrable g is the weak derivative of an integrable f if ∫fφ′ = −∫gφ for every smooth φ with compact support in (a, b). This is integration by parts, so f minus the indefinite integral of g has weak derivative zero (our own).

**Problem.** An integrable real function with an integrable weak derivative on a bounded interval has a unique absolutely continuous representative on the closed interval.

**How the definition helps.** A function with weak derivative zero on an interval is constant almost everywhere, so f agrees almost everywhere with a constant plus the indefinite integral of g (our own). That function is absolutely continuous on \[a, b\], and continuity makes it the only such representative (our own).

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “it coincides almost everywhere with an absolutely continuous function”

**Sources:** none listed. No primary source with a working link was found.

### Absolute monotonicity forces analyticity

**Remember:** Signs at every derivative order keep Taylor remainders under control.

*Rules out counterexamples.* MSC 26A48 (Monotonic functions, generalizations), 26E05. arXiv math.CA. Level 3: graduate.

**Definition.** A smooth real function is absolutely monotone on an interval if it and all its derivatives are nonnegative there. Then every Taylor partial sum at x is at most the value f(y) at any point y to the right of x (our own).

**Problem.** Every absolutely monotone function on an open interval is real analytic there. That means its Taylor series equals the function near each point.

**How the definition helps.** These bounds make the Taylor remainder tend to zero, which is Bernstein’s theorem. Our own counterexample is exp(−1/x) for x &gt; 0 and zero elsewhere: it is smooth and nondecreasing, but its Taylor series at zero vanishes.

**Wikipedia:** [Absolutely and completely monotonic functions and sequences](https://en.wikipedia.org/wiki/Absolutely_and_completely_monotonic_functions_and_sequences). It says: “A function that is absolutely monotonic on the open interval (a,b) can be extended to an analytic function on the open disk”

**Sources:** none listed. No primary source with a working link was found.

### Completely monotone as a Laplace transform makes derivative signs alternate

**Remember:** Each derivative brings a factor −t, so the signs alternate.

*True by definition. Confidence: medium.* MSC 26A48 (Monotonic functions, generalizations), 44A10. arXiv math.CA. Level 3: graduate.

**Definition.** Call f completely monotone if f(x) = ∫ exp(−xt) dμ(t) for one positive Borel measure μ on \[0, ∞), with the integral finite for every x &gt; 0. So f is a mixture of the decaying exponentials exp(−xt), whose nth derivatives have sign (−1)ⁿ.

**Problem.** Let f be the Laplace transform of a positive measure, finite for every x &gt; 0. Then f is smooth, and (−1)ⁿf⁽ⁿ⁾(x) ≥ 0 for every n and every x &gt; 0.

**How the definition helps.** Differentiating under the integral gives (−1)ⁿf⁽ⁿ⁾(x) = ∫ tⁿexp(−xt) dμ(t) ≥ 0 (our own). Near x₀ &gt; 0, a constant times exp(−x₀t/2) dominates each integrand, so dominated convergence justifies this (our own). Bernstein’s theorem gives the converse (our own).

**Wikipedia:** [Bernstein's theorem on monotone functions](https://en.wikipedia.org/wiki/Bernstein%27s_theorem_on_monotone_functions). It says: “it is the Laplace transform of a positive Borel measure”

**Sources:**

- [Serge Bernstein, Sur les fonctions absolument monotones, Acta Mathematica 52 (1929), 1–66.](https://doi.org/10.1007/BF02592679)

### Affine minorants prove conditional Jensen

**Remember:** Average each line first, then take the supremum.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** A finite convex function on the line is the supremum of countably many affine minorants, straight lines that lie below it. This is equivalent to the usual chord condition.

**Problem.** Let X and f(X) be integrable, with f finite and convex on the line. Given the same information, f of the conditional mean of X is at most the conditional mean of f(X), with probability one.

**How the definition helps.** Conditional expectation commutes with each affine minorant ℓ, so ℓ(E\[X \| 𝒢\]) = E\[ℓ(X) \| 𝒢\] ≤ E\[f(X) \| 𝒢\] almost surely (our own). With countably many ℓ, the null sets combine into one, and taking the supremum gives the claim (our own). Supporting lines at rational points suffice, by continuity of f and local bounds on their slopes (our own).

**Paper or page:** [Conditional Jensen's Inequality](https://proofwiki.org/wiki/Conditional_Jensen's_Inequality). It says: “f(E\[X \| 𝒢\]) ≤ E\[f(X) \| 𝒢\]”

**Sources:** none listed. No primary source with a working link was found.

### Whitney compatibility excludes impossible slopes

**Remember:** Values and slopes must tell the same Taylor story.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 3: graduate.

**Definition.** A first-order Whitney jet on a closed set in Euclidean space gives each point a value f(x) and a continuous slope vector p(x) that agree to first order. That is, on each compact subset, \|f(y) − f(x) − p(x)·(y − x)\|/‖y − x‖ tends to zero uniformly as distinct points approach each other.

**Problem.** A first-order Whitney jet on a closed subset of Euclidean space extends to a continuously differentiable function with the prescribed values and slopes.

**How the definition helps.** Whitney’s extension theorem shows that this compatibility is all an extension needs, by gluing local Taylor polynomials off the closed set (our own). It rules out, for example, value zero and slope one on {0, 1, ½, ⅓, …}, since along that sequence the slope at zero would have to be zero (our own).

**Wikipedia:** [Whitney extension theorem](https://en.wikipedia.org/wiki/Whitney_extension_theorem). It says: “it is possible to extend a given function of A in such a way as to have prescribed derivatives”

**Sources:**

- [Hassler Whitney, Analytic extensions of differentiable functions defined in closed sets (1934)](https://doi.org/10.1090/S0002-9947-1934-1501735-3)

### Null-set preservation prevents uncounted area

**Remember:** A map must not create positive area from a null set.

*Rules out counterexamples.* MSC 26B15 (Integration of real functions of several variables: length, area, volume), 26B05. arXiv math.CA. Level 3: graduate.

**Definition.** A map f has Lusin’s property N if it sends every Lebesgue null set to a null set. An approximate derivative at x is a linear map A with f(x + h) − f(x) − Ah = o(‖h‖) as h → 0 through a set of density one at zero.

**Problem.** Let f map an open subset of ℝⁿ to ℝⁿ, with an approximate derivative almost everywhere and property N. Then the integral of the absolute determinant of that derivative equals the integral, over target points, of the number of preimages.

**How the definition helps.** Property N stops the null set where f has no approximate derivative from carrying any image area, so only the differentiable pieces count (our own). Federer’s area theorem gives the formula on those pieces (our own). The Cantor function lacks property N: it has derivative zero almost everywhere but maps the null Cantor set onto the unit interval (our own).

**Paper or page:** [Local L¹-convergence of Jacobians of Sobolev homeomorphisms via area formula](https://arxiv.org/abs/2501.11106v2). It says: “If f satisfies the Lusin condition (N), then for any measurable function”

**Sources:** none listed. No primary source with a working link was found.

### Averaging gradients gives a center that splits expected Bregman divergence exactly

**Remember:** Average gradients to find the center for a random second argument.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 62C05. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** For a differentiable, strictly convex F on an open convex set, the Bregman divergence D(s‖x) = F(s) − F(x) − ⟨∇F(x), s − x⟩ is the gap between F and its tangent at x. The center of a random X is the point x\* whose gradient is the mean gradient, ∇F(x\*) = E\[∇F(X)\], when such a point exists.

**Problem.** If x\* exists and the expectations are finite, then E\[D(s‖X)\] = D(s‖x\*) + E\[D(x\*‖X)\] for every s. This gives a bias–variance decomposition for squared error and for the log loss of exponential families.

**How the definition helps.** The difference D(s‖X) − D(x\*‖X) equals F(s) − F(x\*) − ⟨∇F(X), s − x\*⟩, which is affine in ∇F(X) (our own). Taking expectations replaces ∇F(X) by its mean ∇F(x\*), which gives exactly D(s‖x\*) (our own).

**Paper or page:** [A Generalized Bias-Variance Decomposition for Bregman Divergences](https://arxiv.org/abs/2511.08789v1). It says: “Let F : 𝒮 → ℝ be a strictly convex differentiable function, and X be a random variable on 𝒮. Then for any point s ∈ 𝒮, the expected Bregman divergences have the following exact decomposition: 𝔼\[D<sub>F</sub>\[s\|\|X\]\] = D<sub>F</sub>\[s\|\|x\*\] + 𝔼\[D<sub>F</sub>\[x\*\|\|X\]\], where x\* = argmin<sub>z</sub> 𝔼\[D<sub>F</sub>\[z\|\|X\]\]”

**Sources:**

- [David Pfau, A Generalized Bias-Variance Decomposition for Bregman Divergences, arXiv:2511.08789v1 (2025)](https://arxiv.org/abs/2511.08789v1)

### Besides ±∞, only proper closed convex functions equal their biconjugate

**Remember:** Proper, closed and convex means the double conjugate gives f back.

*Rules out counterexamples.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 49N15. arXiv math.OC, math.CA. Level 3: graduate.

**Definition.** An extended real function is proper if it never takes −∞ and is finite somewhere, and lower semicontinuous if each set {x : f(x) ≤ c} is closed. A supremum of continuous affine functions is always convex and lower semicontinuous, and it is proper unless it is identically +∞ or −∞ (our own).

**Problem.** On a Hausdorff locally convex space, every extended real function satisfies f\*\* ≤ f, using the continuous dual. Equality holds exactly for proper lower semicontinuous convex functions and the two constant functions +∞ and −∞.

**How the definition helps.** The biconjugate f\*\* is the supremum of the continuous affine functions below f, so f\*\* ≤ f and f\*\* has the properties above (our own). Fenchel–Moreau separation shows that every proper lower semicontinuous convex f is recovered this way (our own). If f takes the value −∞, no affine function lies below it, so f\*\* is identically −∞ (our own).

**Wikipedia:** [Fenchel–Moreau theorem](https://en.wikipedia.org/wiki/Fenchel%E2%80%93Moreau_theorem), [Proper convex function](https://en.wikipedia.org/wiki/Proper_convex_function). It says: “a proper convex function is an extended real-valued convex function with a non-empty domain, that never takes on the value −∞ and also is not identically equal to +∞.”

**Sources:**

- [W. Fenchel, On conjugate convex functions, Canadian Journal of Mathematics 1 (1949)](https://doi.org/10.4153/CJM-1949-007-x)
- [J. J. Moreau, Proximité et dualité dans un espace hilbertien, Bulletin de la Société Mathématique de France 93 (1965)](https://doi.org/10.24033/bsmf.1625)

### Curvature bounds survive limits

**Remember:** Subtract the same quadratic before passing to the limit.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 3: graduate.

**Definition.** For K ≥ 0, a function on a convex domain is K-semiconcave if subtracting K‖x‖²/2 leaves a concave function. This bounds second derivatives above by K without asking that they exist.

**Problem.** A uniform limit of functions with the same semiconcavity constant K is K-semiconcave.

**How the definition helps.** After subtracting the same quadratic, each function satisfies the concavity inequality, and such pointwise inequalities pass to uniform limits (our own). For twice differentiable functions, the definition means that every second derivative along a unit direction is at most K (our own).

**Paper or page:** [Global propagation of singularities for magnetic mechanical systems](https://arxiv.org/abs/2509.13433v1). It says: “then ψ is K-semiconcave.”

**Sources:** none listed. No primary source with a working link was found.

### Log-concavity survives integration

**Remember:** The middle beats the geometric mean of the ends.

*Makes the theorem clean to state or prove.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 26D15. arXiv math.CA. Level 3: graduate.

**Definition.** A nonnegative function F is log-concave if F((1 − λ)x + λy) ≥ F(x)<sup>(1−λ)</sup>·F(y)<sup>λ</sup> for every λ strictly between zero and one. Unlike asking that log F be concave, this allows zeros.

**Problem.** Let F be a nonnegative measurable log-concave function on a product of Euclidean spaces, with finite integrals over all second-variable slices. Integrating over the second variable gives a log-concave function of the first.

**How the definition helps.** On slices, log-concavity says the middle slice is at least the geometric mean of the two end slices at matching points, which is the hypothesis of the Prékopa–Leindler inequality (our own). That inequality gives the same bound for their integrals (our own).

**Wikipedia:** [Logarithmically concave function](https://en.wikipedia.org/wiki/Logarithmically_concave_function). It says: “is log-concave (see Prékopa–Leindler inequality).”

**Sources:** none listed. No primary source with a working link was found.

### Strict epigraphs make partial minimization a projection

**Remember:** A height strictly above the infimum already lies above some feasible value.

*True by definition. Confidence: medium.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** The strict epigraph of f is the set of points (x, t) with t &gt; f(x), and f is convex when this set is convex. A height lies strictly above an infimum exactly when it lies strictly above one of its values.

**Problem.** Let f(x, y) be jointly convex and let C be a convex set. If the infimum of f(x, y) over y in C is never −∞, then it is convex as a function of x.

**How the definition helps.** So the strict epigraph of the infimum is the projection, dropping y, of the convex set of (x, y, t) with y ∈ C and t &gt; f(x, y) (our own). Linear projections keep sets convex. The ordinary epigraph fails here when the infimum is not attained.

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “provided that C is a convex set and that g(x) ≠ −∞.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting quadratics gives strong monotonicity

**Remember:** Subtract the quadratic, use monotonicity, then put the quadratic back.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 3: graduate.

**Definition.** For ρ &gt; 0, a function on Euclidean space is strongly convex with constant ρ if subtracting ρ‖x‖²/2 leaves a convex function. This shifts each subgradient p at x, the slope of an affine function touching the graph from below, to p − ρx (our own).

**Problem.** For a strongly convex function with constant ρ, subgradients p at x and q at y satisfy ⟨p − q, x − y⟩ ≥ ρ‖x − y‖².

**How the definition helps.** Subtracting the quadratic turns the claim into monotonicity of subgradients of a convex function (our own). Adding the two supporting inequalities of the convex remainder gives ⟨(p − ρx) − (q − ρy), x − y⟩ ≥ 0 (our own). Expanding this inner product gives the bound (our own).

**Paper or page:** [New Douglas-Rashford Splitting Algorithms for Generalized DC Programming with Applications in Machine Learning](https://arxiv.org/abs/2404.14800v1). It says: “If f is ρ-strongly convex, then ∂f is ρ-strongly monotone.”

**Sources:** none listed. No primary source with a working link was found.

### The epigraph cone shows why a perspective stays convex

**Remember:** A perspective scales a convex epigraph into a convex cone.

*True by definition. Confidence: medium.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 52A41. arXiv math.OC. Level 3: graduate.

**Definition.** The perspective of f is g(x, t) = t·f(x/t) for t &gt; 0 and x/t in the domain of f. Its epigraph is the set of positive multiples of the points (u, 1, r) with r ≥ f(u) (our own).

**Problem.** If f is convex, its perspective is jointly convex in (x, t).

**How the definition helps.** A point (x, t, s) lies above g exactly when t &gt; 0 and s/t ≥ f(x/t), that is, when it is t times a point (u, 1, r) above f (our own). Positive multiples of a convex set form a convex cone, so g has a convex epigraph and is convex (our own).

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “If f is convex, then its perspective g(x, t) = t f(x/t) with domain {(x,t) : x/t ∈ Dom(f), t &gt; 0} is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Clipping removes perimeter levels

**Remember:** Clipping throws away levels without changing the levels it keeps.

*True by definition.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation). arXiv math.CA. Level 3: graduate.

**Definition.** The variation of f on Ω is the integral, over all heights t, of the perimeter of the level set {x ∈ Ω : f(x) &gt; t}. The perimeter of E is the supremum of ∫<sub>E</sub> div φ over smooth compactly supported vector fields φ on Ω with ‖φ‖ ≤ 1.

**Problem.** Let f be integrable with finite variation on an open Euclidean set. Clipping its values to \[a,b\], where a ≤ 0 ≤ b, cannot increase its variation.

**How the definition helps.** Clipping to \[a, b\] keeps the level sets for heights between a and b and makes the others empty or all of Ω, which have zero perimeter in Ω (our own). So the clipped variation integrates fewer perimeters (our own). Clipping toward an interval containing zero keeps f integrable (our own), and the coarea theorem matches this variation with the usual one.

**Paper or page:** [Free-Boundary Monotonicity for Almost-Minimizers of the Relative Perimeter](https://arxiv.org/abs/2407.05039v2). It says: “\|Df\|(Ω) = ∫ℝ P(Eₜ; Ω) dt”

**Sources:** none listed. No primary source with a working link was found.

### Smoothing cannot increase variation

**Remember:** Average translated derivatives before taking their mass.

*True by definition.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation). arXiv math.CA. Level 3: graduate.

**Definition.** The total variation of an integrable function of bounded variation is the mass of its derivative Df, a vector measure defined by integration by parts. Smoothing averages translates of f against a nonnegative smooth bump with compact support and integral one, so its derivative is the same average of translates of Df.

**Problem.** On all of Euclidean space, smoothing an integrable function of bounded variation cannot increase its total variation.

**How the definition helps.** The mass of an average is at most the average of the masses, and translation keeps mass, so smoothing cannot increase total variation (our own). The cited identity lets the derivative pass through the average.

**Paper or page:** [Weighted Bounded Variation Revisited](https://arxiv.org/abs/2510.14105v1). It says: “D(f ∗ ηε) = \[Df\] ∗ ηε”

**Sources:** none listed. No primary source with a working link was found.

### The duality definition of total variation makes it lower semicontinuous in L¹

**Remember:** A supremum of continuous functionals is lower semicontinuous.

*True by definition.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation), 49J45. arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** For f in L¹(Ω), the total variation is the supremum of ∫ f div φ over continuously differentiable vector fields φ with compact support in Ω and \|φ\| ≤ 1. Each such integral is continuous in f for the L¹ distance, since div φ is bounded (our own).

**Problem.** If fₙ → f in L¹(Ω), then the total variation of f is at most the limit inferior of the total variations of fₙ.

**How the definition helps.** A supremum of continuous functions is lower semicontinuous (our own). Each test integral for f is the limit of those for fₙ, so it is at most the limit inferior of their variations; then take the supremum over φ (our own).

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation), [Total variation](https://en.wikipedia.org/wiki/Total_variation). It says: “lim infₙ→∞ V(uₙ,Ω) ≥ V(u,Ω) which is exactly the definition of lower semicontinuity.”

**Sources:** none listed. No primary source with a working link was found.

### Centered balls maximize rearranged overlap

**Remember:** Centered balls nest, so their overlap is as large as possible.

*Makes the theorem clean to state or prove.* MSC 26D15 (Inequalities for sums, series and integrals), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** The symmetric decreasing rearrangement of a nonnegative function replaces each level set {f &gt; t} by the centered ball of the same volume. Centered balls are nested, so two of them overlap in the whole smaller ball, the most two sets of those volumes can share.

**Problem.** For nonnegative measurable functions on Euclidean space with finite positive-height level volumes, rearranging both cannot decrease the integral of their product.

**How the definition helps.** By the layer cake formula, the integral of a product is the integral over pairs of heights of the volume where both functions exceed them (our own). That volume is at most the smaller of the two volumes, which the centered balls attain. Tonelli’s theorem allows the change of integration order (our own).

**Wikipedia:** [Hardy–Littlewood inequality](https://en.wikipedia.org/wiki/Hardy%E2%80%93Littlewood_inequality). It says: “is exactly the smaller one of the two balls:”

**Sources:** none listed. No primary source with a working link was found.

### Concentration is convex by supremum

**Remember:** Concentration at a fixed length is a maximum over linear tests.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** On a finite interval, the concentration of an integrable real function at a length t is the supremum of its integrals over measurable subsets of length t. Each such integral is linear in the function (our own).

**Problem.** On a finite interval, concentration at fixed length is convex as a function of the input function.

**How the definition helps.** A supremum of linear functions is convex (our own). The decreasing rearrangement, which takes the highest values first, shows which sets attain the supremum (our own).

**Paper or page:** [Symmetrization of measures and the one-dimensional Poisson equation with Dirichlet boundary conditions](https://arxiv.org/abs/2506.13311v1). It says: “there exists a Borel set E ⊂ \[−π, π\] with λ(E) = t”

**Sources:**

- [Symmetrization of measures and the one-dimensional Poisson equation with Dirichlet boundary conditions](https://arxiv.org/abs/2506.13311v1)

### Concentric levels maximize product integrals

**Remember:** Concentric balls overlap as much as their volumes allow.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** Symmetric decreasing rearrangement replaces each upper level set of a nonnegative function by a ball of the same volume centered at zero. Concentric balls are nested, so they overlap as much as any two sets of their volumes can.

**Problem.** For two nonnegative measurable functions with finite upper level volumes at every positive height, rearranging both cannot decrease the integral of their product.

**How the definition helps.** By Tonelli’s theorem, the product integral is the integral over pairs of heights of the volume where both functions exceed them (our own). Each such volume is at most the smaller volume, and concentric balls attain it. The nested balls define a radially decreasing function with the original volumes above each height, up to null sets (our own).

**Wikipedia:** [Hardy–Littlewood inequality](https://en.wikipedia.org/wiki/Hardy%E2%80%93Littlewood_inequality). It says: “we continue by estimating the volume of the intersection by the minimum of the volumes of the two sets.”

**Sources:** none listed. No primary source with a working link was found.

### Frequency gaps bound mean squares

**Remember:** Close frequencies behave like one frequency until the interval resolves them.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals), 30B50. arXiv math.CA, math.NT. Level 3: graduate.

**Definition.** Let P(t) = ∑ aⱼ exp(itλⱼ) be a finite sum of at least two terms with distinct real frequencies. The gap δ &gt; 0 is the smallest distance between two of the frequencies.

**Problem.** On every interval of length T, the integral of \|P(t)\|² equals (T + O(1/δ))∑ \|aⱼ\|². The implied constant is absolute.

**How the definition helps.** Expanding \|P\|² gives the diagonal T∑ \|aⱼ\|² plus cross terms, whose integrals are endpoint sums with denominators λⱼ − λₖ (our own). Montgomery and Vaughan’s Hilbert inequality bounds these sums by an absolute constant times ∑ \|aⱼ\|²/δ (our own). With δ = 0, two equal frequencies with unit coefficients give 4T against a diagonal of only 2T (our own).

**Wikipedia:** [Hilbert's inequality](https://en.wikipedia.org/wiki/Hilbert%27s_inequality). It says: “Montgomery &amp; Vaughan reported several generalizations of Hilbert's inequality”

**Paper or page:** [Negative moments of the Riemann zeta-function](https://arxiv.org/abs/2302.07226). It says: “\\int \_T<sup>2T</sup> \\Big\|\\sum <sub>n\\leq N</sub> \\frac{a(n)}{n<sup>1/2+it</sup>}\\Big\|<sup>2</sup> \\,  dt = \\big(T+O(N)\\big)\\sum <sub>n\\leq N</sub>\\frac{\|a(n)\|<sup>2}{n}</sup>.”

**Sources:**

- [H. L. Montgomery and R. C. Vaughan, Hilbert’s inequality, J. London Math. Soc. 8 (1974), 73–82](https://doi.org/10.1112/jlms/s2-8.1.73)

### Local gaps sharpen mean squares

**Remember:** One close pair need not penalize all the coefficients.

*Makes the theorem clean to state or prove.* MSC 26D15 (Inequalities for sums, series and integrals), 30B50. arXiv math.CA, math.NT. Level 3: graduate.

**Definition.** Let P(t) = ∑ aⱼ exp(itλⱼ) be a finite sum of at least two terms with distinct real frequencies λⱼ. Each coefficient aⱼ carries its own gap δⱼ, the distance from λⱼ to its nearest other frequency.

**Problem.** On any interval of length T, the integral of \|P(t)\|² differs from T∑ \|aⱼ\|² by at most C∑ \|aⱼ\|²/δⱼ. The constant C is absolute.

**How the definition helps.** Each coefficient pays only for the gap at its own frequency, which the weighted Hilbert inequality allows. Expanding the square gives T∑ \|aⱼ\|² plus endpoint sums over pairs of unequal frequencies (our own). Montgomery and Vaughan’s weighted Hilbert inequality bounds those sums by an absolute constant times ∑ \|aⱼ\|²/δⱼ.

**Wikipedia:** [Hilbert's inequality](https://en.wikipedia.org/wiki/Hilbert%27s_inequality). It says: “are distinct real numbers.”

**Paper or page:** [Negative moments of the Riemann zeta-function](https://arxiv.org/abs/2302.07226). It says: “\\int \_T<sup>2T</sup> \\Big\|\\sum <sub>n\\leq N</sub> \\frac{a(n)}{n<sup>1/2+it</sup>}\\Big\|<sup>2</sup> \\,  dt = \\big(T+O(N)\\big)\\sum <sub>n\\leq N</sub>\\frac{\|a(n)\|<sup>2}{n}</sup>.”

**Sources:**

- [H. L. Montgomery and R. C. Vaughan, Hilbert’s inequality, J. London Math. Soc. 8 (1974), 73–82](https://doi.org/10.1112/jlms/s2-8.1.73)

### Testing smoothness on curves gives the exponential law for smooth maps

**Remember:** Test curves by linear functionals, then test maps by curves.

*Makes the theorem clean to state or prove.* MSC 26E15 (Calculus of functions on infinite-dimensional spaces), 58B10. arXiv math.FA, math.DG. Level 3: graduate.

**Definition.** A convenient vector space is a Hausdorff locally convex space X in which a curve c from ℝ to X is smooth as soon as ℓ∘c is smooth for every continuous linear functional ℓ. A map between convenient spaces is smooth if it sends smooth curves to smooth curves.

**Problem.** For convenient vector spaces X, Y and Z, the exponential law C∞(X × Y, Z) ≅ C∞(X, C∞(Y, Z)) holds. So the category of convenient vector spaces and smooth maps is cartesian closed.

**How the definition helps.** Because smoothness of maps is tested only on curves, a map on X × Y and its curried form face the same tests (our own). Kriegl and Michor’s exponential law supplies the smooth structure on C∞(Y, Z) and identifies the two kinds of maps (our own).

**nLab:** [convenient vector space](https://ncatlab.org/nlab/show/convenient+vector+space), [Boman's theorem](https://ncatlab.org/nlab/show/Boman%27s+theorem), [manifold structure of mapping spaces](https://ncatlab.org/nlab/show/manifold+structure+of+mapping+spaces). It says: “The category of convenient vector spaces and smooth functions between them is a cartesian closed category.”

**Sources:**

- [Andreas Kriegl, Peter W. Michor, The convenient setting of global analysis, Mathematical Surveys and Monographs 53, AMS (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)
- [Jan Boman, Differentiability of a function and of its compositions with functions of one variable, Mathematica Scandinavica 20 (1967) 249–268](https://journals.msp.org/mscand/article/view/2491)

### Infinitesimals make open, closed and compact one-quantifier conditions

**Remember:** Monads hold the infinitely close points; standard part rounds back to ℝ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26E35 (Nonstandard analysis), 54J05, 03H05. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** The monad of a real r is the set of hyperreals infinitely close to r, that is, closer to r than every positive real distance. The standard part of a finite hyperreal is the one real whose monad contains it.

**Problem.** A set E ⊆ ℝ is open exactly when its hyperreal extension \*E contains the monad of each point of E, and closed exactly when every finite point of \*E has standard part in E. E is compact exactly when every point of \*E is finite and has standard part in E.

**How the definition helps.** “Within every ε” becomes “infinitely close”, so each nested ε–δ condition turns into one check on hyperreal points. The nLab calls these an elementary fact. The transfer principle, which follows from Łoś's theorem on ultraproducts, does the real work.

**nLab:** [nonstandard analysis](https://ncatlab.org/nlab/show/nonstandard+analysis), [ultraproduct](https://ncatlab.org/nlab/show/ultraproduct). It says: “a subset E ⊂ ℝ is open iff μ(r) ⊂ \*E for all r ∈ E; E is closed iff st(x) ∈ E for all finite x ∈ \*E; and E is compact iff, for all x ∈ \*E, x is finite and st(x) ∈ E.”

**Sources:**

- [Abraham Robinson, Non-standard Analysis, North-Holland (1966); revised edition, Princeton University Press (1996)](https://doi.org/10.1515/9781400884223)

### A dense set of non-zeros gives a constructive intermediate value theorem

**Remember:** Every gap holds a point whose sign you can read.

*Rules out counterexamples. Confidence: medium.* MSC 26E40 (Constructive real analysis), 03F60, 26A15. arXiv math.CA, math.LO. Level 3: graduate.

**Definition.** Say that f has dense non-zeros when every interval (a, b) inside \[0, 1\] contains a point c with \|f(c)\| &gt; 0, so that f(c) is known to be positive or known to be negative (our own).

**Problem.** Constructively, a uniformly continuous f : \[0,1\] → ℝ with f(0) &lt; 0 &lt; f(1) and dense non-zeros has a zero. The usual intermediate value theorem, without the extra hypothesis, cannot be proved constructively.

**How the definition helps.** Bisection works again, because each step can find a point of known sign (our own). Pick such a point in the middle third of the current bracket, and keep the sub-bracket whose endpoints have opposite signs; uniform continuity makes the limit a zero (our own). Without the hypothesis, a flat stretch of zeros can block every sign decision (our own).

**nLab:** [intermediate value theorem](https://ncatlab.org/nlab/show/intermediate+value+theorem). It says: “As normally stated, the IVT is not valid in constructive mathematics, although there are constructively valid versions. These versions either weaken the conclusion to an approximate zero, or to strengthen the hypothesis”

**Sources:**

- [Auke B. Booij, Extensional constructive real analysis via locators (2018), arXiv:1805.06781](https://arxiv.org/abs/1805.06781)
- [Andrej Bauer, Five stages of accepting constructive mathematics, Bull. Amer. Math. Soc. 54 (2017) 481–498](https://doi.org/10.1090/bull/1556)

### Dedekind real numbers are always Cauchy complete

**Remember:** A cut holds all rational bounds at once, so nothing is chosen.

*Rules out counterexamples.* MSC 26E40 (Constructive real analysis), 03F60. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** A Dedekind real is given by all its rational bounds at once: an inhabited set L of lower bounds and an inhabited set U of upper bounds. L is downward closed with no largest member, and U is upward closed with no smallest member. Every member of L lies below every member of U, and for rationals a &lt; b, either a ∈ L or b ∈ U.

**Problem.** The Dedekind real numbers are Cauchy complete, even without countable choice: every Cauchy sequence of Dedekind reals converges to a Dedekind real.

**How the definition helps.** The limit can be read off from the rational bounds of the terms, so no rational approximants need to be chosen (our own). Put q in L when some rational r &gt; q lies eventually below every term, define U symmetrically, and Cauchy closeness gives locatedness and convergence (our own). Lubarsky’s countermodel shows that Cauchy reals can lack this completeness without countable choice.

**nLab:** [Cauchy real number](https://ncatlab.org/nlab/show/Cauchy+real+number), [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “a Cauchy sequence (even a modulated one) of Cauchy real numbers need not converge to another Cauchy real number (though it always does converge to a Dedekind real number, since the Dedekind real numbers are always Cauchy complete).”

**Sources:**

- [Robert S. Lubarsky, On the Cauchy completeness of the constructive Cauchy reals, Electronic Notes in Theoretical Computer Science 167 (2007) 225–254](https://doi.org/10.1016/j.entcs.2006.09.012)

### With lower reals, every inhabited set has a supremum constructively

**Remember:** Know a number only from below, and a supremum is just a union.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26E40 (Constructive real analysis), 03F60. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** A lower real is a number known only by its rational lower bounds: an inhabited, downward-closed set L of rationals with no largest member. Lower reals are ordered by inclusion, and ℚ itself stands for +∞.

**Problem.** Constructively, every inhabited set of lower reals has a supremum, namely the union of their sets of rationals. For the usual real numbers, a bounded inhabited set need not have a supremum constructively.

**How the definition helps.** Every defining condition passes from the members of an inhabited family to their union, so the union is a lower real (our own). Since the order is inclusion, the union contains each member and lies inside every common upper bound (our own).

**nLab:** [one-sided real number](https://ncatlab.org/nlab/show/one-sided+real+number). It says: “Explicitly, the supremum of any inhabited set of lower reals is a lower real and the infimum of any inhabited set of upper reals is an upper real.”

**Sources:**

- [J. Z. Reichman, Semicontinuous real numbers in a topos, Journal of Pure and Applied Algebra 28 (1983) 81–91](https://doi.org/10.1016/0022-4049(83)90075-0)

### The genuine integral of cogerm forms ignores second-order terms

**Remember:** Each small tagged piece is tiny compared with its own length.

*True by definition. Confidence: medium.* MSC 26A39 (Denjoy and Perron integrals, other special integrals), 58A10. arXiv math.CA, math.DG. Level 4: research.

**Definition.** Along a smooth curve, a form is o(dx) when its contribution on each small interval \[u, v\] tagged at t has absolute value at most ε(v − u). Precisely, each ε &gt; 0 and tag t admit δ &gt; 0 with this bound whenever t ∈ \[u, v\] ⊂ (t − δ, t + δ).

**Problem.** The genuine integral of every o(dx) form, such as dx² or d²x, is zero. So the trapezoid integrand f(x) dx + ½ f′(x) dx² has the same genuine integral as f(x) dx.

**How the definition helps.** A fine tagged partition adds contributions of absolute value at most ε times each length, so every fine sum on \[a, b\] has absolute value at most ε(b − a) (our own). The local radii δ serve as the gauge that makes the partition fine (our own). Since ε is arbitrary, the genuine integral is zero; dx², d²x and ½ f′(x) dx² satisfy the bound, so adding them changes no integral (our own).

**nLab:** [cogerm differential form](https://ncatlab.org/nlab/show/cogerm+differential+form). It says: “The answer 0 given by the genuine integral is preferable if we regard dx as a "first-order change in x", so that dx² or d²x are "second-order" quantities and hence ought to be negligible.”

**Sources:** none listed. No primary source with a working link was found.

### Flat directions block convex smoothing

**Remember:** A flat direction can repeat a corner across infinite space.

*Rules out counterexamples.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 4: research.

**Definition.** The graph of a finite convex function f on Euclidean space contains a full line when f is affine along some entire straight line. Such a line lets a corner of f, like the crease of \|x\| in the plane, run on forever (our own).

**Problem.** Let f be finite and convex on Euclidean space, without a locally Lipschitz gradient. For every ε &gt; 0, f has a convex approximation with locally Lipschitz gradient that differs from f on a set of measure below ε, exactly when the graph of f contains no full line.

**How the definition helps.** Excluding full lines rules out a corner that repeats unchanged along an infinite direction (our own). For f(x, y) = \|x\|, small disagreement forces agreement far up and down almost every vertical line, and convexity then makes the approximation equal \|x\|, corner included (our own). The cited theorem proves that having no full line suffices.

**Paper or page:** [C²-Lusin approximation of convex functions: one variable case](https://arxiv.org/abs/2505.22975v2). It says: “The graph of f does not contain any line isometric to ℝ.”

**Sources:** none listed. No primary source with a working link was found.

### Retained slopes preserve contact

**Remember:** Keep only bounded slopes; you keep f where one still touches.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 4: research.

**Definition.** Let f be a proper closed convex function on Euclidean space, and let C be a compact set of slopes that contains the slope of at least one affine function below f. Let g be the supremum of all affine functions below f whose slopes lie in C.

**Problem.** The function g is globally Lipschitz, meaning its changes are bounded by a constant times distance. It equals f at x exactly when some affine function below f with slope in C touches f at x.

**How the definition helps.** Each allowed affine function has Lipschitz constant at most the largest norm of a slope in C, and the supremum keeps that bound (our own). A touching allowed function forces g(x) = f(x) (our own). Conversely, the best height at x for slope p, inf<sub>y</sub> (f(y) + ⟨p, x − y⟩), is upper semicontinuous in p, so its maximum on compact C gives a touching function (our own).

**Paper or page:** [Singularities of Fitzpatrick and convex functions](https://arxiv.org/abs/2212.09954v3). It says: “∂f(x) ∩ C ≠ ∅ ⇔ f(x) = f꜀(x)”

**Sources:** none listed. No primary source with a working link was found.

### Height absorbs variation weights

**Remember:** Make a weight the height of an extra coordinate.

*Makes the theorem clean to state or prove.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation). arXiv math.CA. Level 4: research.

**Definition.** Lift f to one more dimension by giving the value f(x) to every point (x, t) with 0 &lt; t &lt; w(x). Here w is a positive weight on an open set whose strict upper level sets are open, and weighted variation integrates w against the total variation measure of the distributional derivative of f.

**Problem.** Suppose the weighted integral of \|f\| and the weighted variation of f are both finite. Then the ordinary integral of the absolute value of the lift and its ordinary variation equal these weighted quantities.

**How the definition helps.** Each vertical interval has length w(x), so integrating the lift counts the value at x with weight w(x) (our own). For variation, the lifting theorem shows that only horizontal changes contribute. Integrating their mass up each interval gives the same factor w(x) (our own).

**Paper or page:** [Weighted Bounded Variation Revisited](https://arxiv.org/abs/2510.14105v1). It says: “is an isometric embedding”

**Sources:**

- [Weighted Bounded Variation Revisited](https://arxiv.org/abs/2510.14105v1)

### Derivative growth bounds make Taylor data unique

**Remember:** Derivatives that grow slowly enough pin a function to one point.

*Rules out counterexamples.* MSC 26E10 (C<sup>∞</sup>-functions, quasi-analytic functions). arXiv math.CA. Level 4: research.

**Definition.** A function lies in the Denjoy–Carleman class of the weights Mₖ when one constant C ≥ 1 bounds its kth derivative everywhere by Cᵏ⁺¹Mₖ, for every k. The weights are positive with M₀ = 1, their successive ratios Mₖ/Mₖ₋₁ increase to infinity, and the reciprocals of these ratios have divergent sum.

**Problem.** Two functions in this class on a closed interval coincide if their values and all their derivatives agree at one interior point.

**How the definition helps.** The Denjoy–Carleman theorem says that a divergent sum is exactly what makes derivatives at one point determine the function. For a convergent sum, our own counterexample is the bump exp(−1/(1 − x²)) on \|x\| &lt; 1, extended by zero, which fits weights on \[−2, 2\] with ratios at least k². At the interior point 1, the bump and zero have the same derivatives of every order (our own).

**Wikipedia:** [Quasi-analytic function](https://en.wikipedia.org/wiki/Quasi-analytic_function). It says: “the only function in it having all its partial derivatives equal to zero at a point is the function identically equal to zero.”

**Paper or page:** [Ultradifferentiable extension theorems: a survey](https://arxiv.org/abs/2107.01061v2). It says: “∑ₖ 1/μₖ = ∞.”

**Sources:** none listed. No primary source with a working link was found.

### Convergence at every nonstandard point makes Cauchy's proof correct

**Remember:** Convergence everywhere, nonstandard points included, is uniform convergence.

*True by definition. Confidence: medium.* MSC 26E35 (Nonstandard analysis), 40A30, 26A15. arXiv math.CA, math.HO. Level 4: research.

**Definition.** Extend the functions fₙ and f on D to the hyperreals. The sequence converges at every hyperreal point when, for every infinite index n and every x ∈ \*D, fₙ(x) is infinitely close to f(x); this is exactly uniform convergence.

**Problem.** If continuous functions fₙ converge at every hyperreal point, their limit is continuous. Under this reading, Cauchy's 1821 proof of his sum theorem works as written.

**How the definition helps.** For x infinitely close to a real a ∈ D, compare f(x) and f(a) through one standard continuous fₙ: they differ by two small errors plus an infinitesimal (our own). Uniform convergence makes the errors smaller than any positive real, so f(x) is infinitely close to f(a), and f is continuous (our own). The cited historical reading takes Cauchy’s convergence hypothesis to be this uniform condition.

**nLab:** [Cauchy sum theorem](https://ncatlab.org/nlab/show/Cauchy+sum+theorem). It says: “By this analysis, Cauchy's notion of convergence everywhere is our modern notion of uniform convergence, not pointwise convergence, and his theorem is true”

**Sources:**

- [Abraham Robinson, Non-standard Analysis, North-Holland (1966); revised edition Princeton University Press (1996)](https://doi.org/10.1515/9781400884223)
- [Imre Lakatos, Mathematics, Science and Epistemology (Philosophical Papers vol. 2), Cambridge University Press (1978), chapter 3](https://doi.org/10.1017/CBO9780511624926)

### The HoTT book real numbers are complete because limits are constructors

**Remember:** Every Cauchy approximation has a limit because "limit" is a constructor.

*True by definition.* MSC 26E40 (Constructive real analysis), 03B38. arXiv math.LO, math.CA. Level 4: research.

**Definition.** The HoTT reals are ℚ with a limit freely added for every Cauchy approximation, a family x(ε) over positive rationals ε with x(ε) and x(δ) within ε + δ. Points within ε of each other for every positive rational ε are made equal.

**Problem.** The HoTT reals admit limits of regular Cauchy sequences without countable choice. In particular, analytic functions such as exp, sin and cos are well defined on them.

**How the definition helps.** A regular Cauchy sequence, with its fixed rate, is already a Cauchy approximation, so the limit constructor gives it a limit without any choice (our own). The closeness rules show that this point is its limit (our own). Power series such as exp, sin and cos then converge, as the cited examples use.

**nLab:** [HoTT book real number](https://ncatlab.org/nlab/show/HoTT+book+real+number). It says: “The analytic functions, such as the exponential function, the sine function, and the cosine function are well defined in the HoTT book real numbers, since all regular Cauchy sequences converge in the HoTT book real numbers.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)
- [Auke Booij, Analysis in Univalent Type Theory, PhD thesis, University of Birmingham (2020)](http://etheses.bham.ac.uk/id/eprint/10411)

### Changed coordinates reveal mean convexity

**Remember:** In the f-scale, means are averages and the midpoint is H.

*Makes the theorem clean to state or prove.* MSC 26E60 (Means), 26B25. arXiv math.CA. Level 4: research.

**Definition.** For a continuous strictly increasing f on an interval, the f-mean of a list averages the f-values with nonnegative weights summing to one, then applies f⁻¹. In the f-scale, taking a midpoint becomes H(u, v) = f((f⁻¹(u) + f⁻¹(v))/2).

**Problem.** For two lists with common weights, the f-mean of their coordinatewise midpoints never exceeds the midpoint of their f-means, for all lists and weights, exactly when H is concave.

**How the definition helps.** Applying f turns the comparison into ∑ wᵢ H(uᵢ, vᵢ) ≤ H(∑ wᵢuᵢ, ∑ wᵢvᵢ), which is Jensen’s inequality for H (our own). Every pair in the range comes from some entries, so the comparisons for all lists give every weighted concavity inequality for H (our own).

**Paper or page:** [Hölder- and Minkowski-type inequalities for generalized quasi-arithmetic means](https://arxiv.org/abs/2511.05411v1). It says: “The function f is continuous and the function Ψ: f(I)² → ℝ defined by”

**Sources:** none listed. No primary source with a working link was found.

### Adding all pairs of rationals makes cut addition associative

**Remember:** Both groupings collect the same sums of three rationals.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A lower Dedekind cut contains some but not all rationals, contains every rational below each member, and has no greatest member. The sum of two cuts contains exactly the sums made by taking one rational from each cut.

**Problem.** Addition of lower Dedekind cuts is associative.

**How the definition helps.** Both groupings collect the same three-term sums because rational addition is associative. Our own comparison avoids first defining real addition through limits of approximations. The work moves to showing that all pairwise sums together form another cut.

**Paper or page:** [Addition of Cuts is Associative](https://proofwiki.org/wiki/Addition_of_Cuts_is_Associative). It says: “(α + β) + γ = α + (β + γ)”

**Sources:** none listed. No primary source with a working link was found.

### Constant sequences embed the rationals in the Cauchy reals

**Remember:** A rational enters the reals by repeating itself forever.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A rational sequence is Cauchy if, for every positive tolerance, all sufficiently late terms lie within that distance of each other. A Cauchy real groups together rational Cauchy sequences whose differences tend to zero. Add and multiply their terms at matching positions.

**Problem.** Constant sequences give distinct Cauchy reals for distinct rationals and preserve addition and multiplication.

**How the definition helps.** Repeating each rational at every position makes sums and products agree at every position. Our own comparison uses the usual fraction description, which sends a/b to a times the inverse of b. Constant sequences avoid constructing that inverse for the embedding. Distinct constants stay a fixed distance apart, and one must check that the operations respect the grouping.

**Paper or page:** [Embedding Division Ring into Quotient Ring of Cauchy Sequences](https://proofwiki.org/wiki/Embedding_Division_Ring_into_Quotient_Ring_of_Cauchy_Sequences). It says: “φ is a distance-preserving ring monomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Counting single points as intervals gives the intermediate value theorem without exceptions

**Remember:** An interval has no gaps, even if it is one point.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 26A15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** An interval is a set of real numbers that contains every number lying between any two of its elements. Under this definition the empty set, single points and the whole real line are intervals.

**Problem.** The image of a real interval under a continuous real-valued function is an interval.

**How the definition helps.** The gap-free definition includes the singleton image of every constant function on a nonempty interval. Real intervals are exactly the connected subsets of ℝ, and continuous images of connected sets are connected. Thus every image satisfies the same interval definition, including the empty image (our own).

**Wikipedia:** [Interval (mathematics)](https://en.wikipedia.org/wiki/Interval_%28mathematics%29). It says: “The intervals are precisely the connected subsets of ℝ. It follows that the image of an interval by any continuous function from ℝ to ℝ is also an interval. This is one formulation of the intermediate value theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping endpoints makes nested closed intervals share a point

**Remember:** The least upper bound of the left endpoints lies in every closed interval.

*Rules out counterexamples.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A closed interval \[a, b\] contains every real x with a ≤ x ≤ b. A sequence of intervals is nested if each interval lies inside the preceding one.

**Problem.** Nested nonempty bounded closed intervals have a common point. If their lengths tend to zero, the common point is unique.

**How the definition helps.** Keeping both endpoints includes the least upper bound of the left endpoints in every interval (our own). Completeness supplies this bound because nesting puts every right endpoint above or equal to every left endpoint (our own). Two distinct common points would force every length to exceed or equal their distance (our own). The open intervals (0, 1/n) have no common point (our own).

**Wikipedia:** [Nested intervals](https://en.wikipedia.org/wiki/Nested_intervals). It says: “Every interval in the sequence is contained in the previous one”

**Sources:** none listed. No primary source with a working link was found.

### Lim sup and lim inf always exist, so convergence means they agree

**Remember:** Take bounds on shrinking tails; convergence means the bounds meet.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 40A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The limit superior of a sequence is the limit of the suprema of its tails. The limit inferior is the limit of the infima of its tails. The tails' suprema decrease and the infima increase, so both limits exist in the extended reals.

**Problem.** A sequence of extended reals converges exactly when its lim inf equals its lim sup. Theorems such as Fatou's lemma can be stated for sequences that need not converge.

**How the definition helps.** Every term lies between its tail infimum and supremum, so equality of their limits forces convergence, including at either infinity. Conversely, convergence eventually puts each tail within any prescribed neighbourhood bounds of the limit, forcing both tail limits there too (our own). Fatou’s lemma uses these always-defined lower limits for nonnegative measurable functions (our own).

**Wikipedia:** [Limit inferior and limit superior](https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior). It says: “If the terms in the sequence are real numbers, the limit superior and limit inferior always exist, as the real numbers together with ±∞ (i.e. the extended real number line) are complete.”

**Sources:** none listed. No primary source with a working link was found.

### Nearby set members make closed sets attain their bounds

**Remember:** A closed set keeps the limit of points approaching its ceiling.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A supremum is an upper bound with set members arbitrarily close to it. An infimum is a lower bound with the same property. A set is closed if it contains every limit of a convergent sequence of its members.

**Problem.** A nonempty closed set of real numbers that is bounded above contains its supremum. If bounded below, it contains its infimum.

**How the definition helps.** The approximation rule supplies a member within 1/n of the bound for each positive integer n (our own). These members converge to the bound, so closedness puts it in the set (our own). The rule agrees with the least upper bound definition because every smaller number fails to bound the set (our own). Reversing the inequalities gives the greatest lower bound case (our own).

**Paper or page:** [Closed Subset of Real Numbers with Lower Bound contains Infimum](https://proofwiki.org/wiki/Closed_Subset_of_Real_Numbers_with_Lower_Bound_contains_Infimum). It says: “Then A contains its infimum.”

**Sources:** none listed. No primary source with a working link was found.

### Negation turns least upper bounds into greatest lower bounds

**Remember:** Flip the signs to turn a ceiling into a floor.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** An upper bound is at least every member of a set. The supremum is the least such bound. Define the infimum by negating every member, taking the supremum, and negating the result.

**Problem.** For every nonempty real set bounded below, its greatest lower bound equals the negative of the supremum of its negatives.

**How the definition helps.** Negation turns each lower bound into an upper bound of the negatives (our own). Completeness gives the negatives a least upper bound because they form a nonempty set bounded above (our own). Negating that bound reverses every comparison, so the formula gives the usual greatest lower bound (our own).

**Wikipedia:** [Infimum and supremum](https://en.wikipedia.org/wiki/Infimum_and_supremum). It says: “The infimum is, in a precise sense, dual to the concept of a supremum.”

**Paper or page:** [Negative of Supremum is Infimum of Negatives](https://proofwiki.org/wiki/Negative_of_Supremum_is_Infimum_of_Negatives). It says: “where sup and inf denote the supremum and infimum respectively.”

**Sources:** none listed. No primary source with a working link was found.

### Open lower cuts give a rational boundary only one copy

**Remember:** Put the rational boundary outside its lower cut.

*Rules out counterexamples.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A lower Dedekind cut is a set containing some but not all rationals. It contains every rational below each of its members and has no greatest member.

**Problem.** For each rational q, exactly one lower Dedekind cut has q as its least rational upper bound.

**How the definition helps.** The cut must omit q because including q would give it a greatest member. Our own argument shows that every rational below q lies below some member, since it cannot bound the cut. All rationals below q form such a cut because another rational always lies between two distinct rationals. Allowing a greatest member would also admit this same cut with q added.

**nLab:** [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “we get two cuts for each rational number and must (as in the previous section) pass to a quotient”

**Sources:**

- [Richard Dedekind, Continuity and Irrational Numbers, § IV, “Creation of Irrational Numbers,” excerpt in Classics of Mathematics, p. 585.](https://tildesites.geneseo.edu/~johannes/dedekind.pdf)

### Tail bounds make limit superiors subadditive

**Remember:** The upper bound for a sum comes from adding the two tail bounds.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 40A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The limit superior of a bounded real sequence is the limit of the least upper bounds of its tails. A tail consists of all terms from a given index onward. Another definition takes the largest limit of any convergent subsequence.

**Problem.** For bounded real sequences, the limit superior of their sum cannot exceed the sum of their limit superiors.

**How the definition helps.** On every tail, the sum of the two least upper bounds bounds the summed sequence (our own). Taking limits of the tail bounds gives the inequality (our own). The work moves to proving that the tail bounds converge to the largest subsequential limit (our own).

**Wikipedia:** [Limit inferior and limit superior](https://en.wikipedia.org/wiki/Limit_inferior_and_limit_superior). It says: “lim supₙ→∞ (aₙ + bₙ) ≤ lim supₙ→∞ aₙ + lim supₙ→∞ bₙ.”

**Sources:** none listed. No primary source with a working link was found.

### The approximation definition makes suprema add

**Remember:** Get within half the error in each set.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** An upper bound is at least every member of a set. Its supremum is an upper bound s such that, for every ε &gt; 0, some member exceeds s − ε.

**Problem.** Let A and B be nonempty real sets bounded above. The supremum of all sums with one member from each set equals the sum of their suprema.

**How the definition helps.** Each set supplies a member less than ε/2 away from its supremum (our own). Their sum lies less than ε below the sum of the suprema, which bounds every possible sum (our own). This approximation rule agrees with the least upper bound definition because lowering a least bound by any positive amount excludes some member (our own).

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

**Definition.** The limit superior (lim sup) of a sequence is the limit of the suprema of its tails. In the extended real numbers the lim sup always exists. For non-negative values, the rules 1/0 = +∞ and 1/(+∞) = 0 apply.

**Problem.** The radius of convergence R of a power series Σcₙ(z − a)ⁿ is given by 1/R = lim sup ⁿ√\|cₙ\|. In words, 1/R is the largest limit point of the nth roots of the sizes of the coefficients.

**How the definition helps.** Tail suprema always have an extended real limit, so the Cauchy–Hadamard formula applies to every coefficient sequence. For instance, coefficients alternating between zero and one have nth roots with no ordinary limit (our own). The root test gives convergence inside the stated radius and divergence outside it, including the cases R = 0 and R = ∞ (our own).

**Wikipedia:** [Cauchy–Hadamard theorem](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Hadamard_theorem), [Extended real number line](https://en.wikipedia.org/wiki/Extended_real_number_line). It says: “Thus, if one allows 1/0 to take the value +∞, then one can use this formula regardless of whether the limit-supremum is 0 or not.”

**Sources:**

- [J. Hadamard, Essai sur l'étude des fonctions données par leur développement de Taylor, J. Math. Pures Appl. (4) 8 (1892)](https://archive.org/details/essaisurltuded00hadauoft)

### With Dedekind cuts, the least upper bound is a union

**Remember:** With cuts, the supremum is just the union.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A lower Dedekind cut is a nonempty proper subset of ℚ that contains every rational below each member and has no greatest member. In the cut construction, reals are lower cuts ordered by inclusion.

**Problem.** Every non-empty set S of real numbers with an upper bound has a least upper bound, namely the union ⋃S of its cuts.

**How the definition helps.** The union contains each cut and lies in every upper bound, since the order is inclusion (our own). It is nonempty and lies inside the given upper cut, so it is proper. Each member comes from a cut that supplies every smaller rational and some larger member. Thus the union is itself a cut (our own).

**Wikipedia:** [Construction of the real numbers](https://en.wikipedia.org/wiki/Construction_of_the_real_numbers), [Least-upper-bound property](https://en.wikipedia.org/wiki/Least-upper-bound_property). It says: “If a nonempty set S of real numbers has any upper bound in R, then it has a least upper bound in R that is equal to ⋃S.”

**Sources:** none listed. No primary source with a working link was found.

### Mean value tags turn the integral of a derivative into endpoint subtraction

**Remember:** Pick the tag where the slope equals the slope across the piece.

*True by definition. Confidence: medium.* MSC 26A06 (One-variable calculus), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A tagged Riemann sum multiplies each piece’s length by the function value at any chosen point in that piece. The integral is the common limit of these sums as the longest piece shrinks.

**Problem.** Suppose F is continuous on \[a, b\], differentiable on (a, b), and its derivative extends to a Riemann integrable function on \[a, b\]. The integral of that extension is F(b) − F(a).

**How the definition helps.** Unlike fixed endpoint samples, free tags can realize the average slope on each piece by the mean value theorem (our own). Each term then equals the change in F across that piece, so the sum equals F(b) − F(a) (our own). Integrability of the derivative ensures these particular sums approach its integral (our own).

**Paper or page:** [Fundamental Theorem of Calculus/Second Part](https://proofwiki.org/wiki/Fundamental_Theorem_of_Calculus/Second_Part). It says: “∫ₐᵇ f(t) dt = F(b) − F(a)”

**Sources:** none listed. No primary source with a working link was found.

### Sequences turn the quotient limit into a sequence limit law

**Remember:** Test a function limit on one approaching sequence at a time.

*True by definition.* MSC 26A06 (One-variable calculus). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function has sequential limit L at a if f(xₙ) tends to L whenever domain points xₙ distinct from a tend to a.

**Problem.** Suppose f and g have limits L and M at a point approached by other points of their common domain. If M ≠ 0, then f/g has limit L/M there.

**How the definition helps.** The sequential test lets us apply the quotient law for sequences to any inputs approaching a. Along each such sequence, the denominators eventually stay away from zero. Our own proof uses the sequence law and the equivalence between the sequential test and the usual distance test.

**Paper or page:** [Combination Theorem for Limits of Functions/Real/Quotient Rule](https://proofwiki.org/wiki/Combination_Theorem_for_Limits_of_Functions/Real/Quotient_Rule). It says: “provided that m ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Signed limits give one derivative rule for two moving endpoints

**Remember:** Only the endpoints move, and the lower endpoint has the minus sign.

*Makes the theorem clean to state or prove.* MSC 26A06 (One-variable calculus), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For an integrable f, the integral from v to u is the negative of the integral from u to v. Equal limits give zero. The accumulated area F(x) is the integral from a to x for a fixed starting point a.

**Problem.** Let f be continuous on an open interval containing the values of differentiable functions p and q. The derivative of the integral from p(x) to q(x) is f(q(x))q′(x) − f(p(x))p′(x), even where the endpoints cross.

**How the definition helps.** Signed limits let us write the moving integral as F(q(x)) − F(p(x)) in either order (our own). Apply the chain rule twice (our own). The work moves to interval additivity with signed limits and the fundamental theorem that gives F′ = f (our own).

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “Taking for granted that ∫ᵤᵛ = ∫ₐᵛ − ∫ₐᵘ, this generalizes to”

**Sources:** none listed. No primary source with a working link was found.

### A single series term makes the exponential outgrow powers

**Remember:** For positive x, keep one term of degree higher than the power.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define exp(x) by the sum of x to power n divided by n!, starting at n = 0. Another definition inverts the natural logarithm.

**Problem.** For every nonnegative integer k, exp(x) divided by x to power k tends to infinity as x tends to infinity.

**How the definition helps.** For x &gt; 0, the series has only positive terms, so its term of degree k + 1 gives a lower bound. Dividing by xᵏ leaves x/(k + 1)!, which tends to infinity. Our own comparison with the inverse logarithm requires convergence of the series and agreement of the two definitions.

**Paper or page:** [Exponential Dominates Polynomial](https://proofwiki.org/wiki/Exponential_Dominates_Polynomial). It says: “exp(αx) &gt; xᵏ”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, third edition (1976), Theorem 8.6(f).](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

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

**Definition.** For every positive real b and every real exponent x, define bˣ = exp(x ln b).

**Problem.** Let the bases b and c be positive. Then (bʳ)ˢ = bʳˢ, bʳbˢ = bʳ⁺ˢ and (bc)ʳ = bʳcʳ for all real r and s.

**How the definition helps.** The logarithm and exponential are inverses on positive bases, so ln(bʳ) = r ln b (our own). Applying the exponential addition law and the logarithm product law gives all three identities. For a negative base, the square root of (−1)² equals 1, whereas (−1) raised to 2 · ½ equals −1 (our own).

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “exponentiation to a real power of a negative real number is much more difficult to define consistently, as it may be non-real and have several values.”

**Sources:** none listed. No primary source with a working link was found.

### As a power series, exp carries its derivative and addition laws

**Remember:** Differentiate the series term by term, and exp comes back.

*True by definition.* MSC 26A09 (Elementary functions), 33B10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define exp(x) as the sum of xⁿ/n! over all n ≥ 0. The ratio test shows that the series converges for every real or complex x.

**Problem.** The exponential function satisfies exp′ = exp, exp(0) = 1 and exp(x+y) = exp(x)exp(y).

**How the definition helps.** At zero only the constant term survives, giving exp(0) = 1 (our own). Termwise differentiation of the power series shifts the index and reproduces exp. Absolute convergence permits the Cauchy product for exp(x)exp(y). The binomial theorem combines each total degree n into (x+y)ⁿ/n!.

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “In the sense of definition 2, the equation exp(x+y) = exp(x)exp(y) follows from the term-by-term manipulation of power series justified by uniform convergence, and the resulting equality of coefficients is just the Binomial theorem.”

**Sources:** none listed. No primary source with a working link was found.

### As the area under 1/t, the logarithm turns products into sums

**Remember:** Scaling by y moves the area under 1/t without changing it.

*True by definition.* MSC 26A09 (Elementary functions), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a &gt; 0, the natural logarithm ln a is the integral of 1/t from 1 to a. For a between 0 and 1 the integral is negative.

**Problem.** For all positive x and y, ln(xy) = ln x + ln y. Also ln′(x) = 1/x, and ln is a bijection onto the real line.

**How the definition helps.** Splitting the defining integral at x and substituting t = xs in the second part gives the product law (our own). The fundamental theorem of calculus gives ln′(x) = 1/x &gt; 0, so ln is strictly increasing. The product law gives ln(2ⁿ) = n ln 2 for every integer n, and ln 2 &gt; 0. Continuity now gives every real value (our own).

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm), [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “The simplicity of this definition, which is matched in many other formulas involving the natural logarithm, leads to the term "natural".”

**Sources:**

- [R. P. Burn, Alphonse Antonio de Sarasa and logarithms, Historia Mathematica 28 (2001) 1–17](https://doi.org/10.1006/hmat.2000.2295)

### Defining exp by f(x+y) = f(x)f(y) needs a regularity condition

**Remember:** Without some regularity, f(x+y) = f(x)f(y) has wild solutions.

*Rules out counterexamples.* MSC 26A09 (Elementary functions), 39B22. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Consider functions f from ℝ to ℝ satisfying f(1) = e and f(x+y) = f(x)f(y) for all real x,y. Require continuity at one point, monotonicity on an interval of positive length, or Lebesgue measurability.

**Problem.** Every function with f(x+y) = f(x)f(y), f(1) = e and one such regularity condition equals eˣ.

**How the definition helps.** The equation forces f(0) = 1 and f(x) = f(x/2)² &gt; 0, since f(x)f(−x) = 1 (our own). Thus log f is additive and sends 1 to 1. The regularity theorem for Cauchy’s equation makes it linear under any listed condition, giving f(x) = eˣ. Discontinuous additive functions from a Hamel basis yield counterexamples by exponentiation (our own).

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

**How the definition helps.** Since 1/t decreases, its integral lies between the two endpoint rectangle areas (our own). For x &gt; 1, these areas are (x−1)/x and x−1. For 0 &lt; x &lt; 1, integrating from x to 1 and reversing the sign gives the same ordered bounds. Both bounds equal zero at x = 1 (our own).

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “Here, the natural logarithm function is defined in terms of a definite integral as above.”

**Paper or page:** [Bounds of Natural Logarithm](https://proofwiki.org/wiki/Bounds_of_Natural_Logarithm). It says: “1 − 1/x ≤ ln x ≤ x − 1”

**Sources:** none listed. No primary source with a working link was found.

### Radian measure makes the derivative of sine exactly cosine

**Remember:** Measure angles by arc length, and calculus formulas lose their stray constants.

*Makes the theorem clean to state or prove.* MSC 26A09 (Elementary functions), 97I40. arXiv math.CA, math.HO. Level 1: early undergraduate.

**Definition.** The radian measure of an oriented angle is its signed arc length divided by the circle’s radius. One full positive turn measures 2π radians or 360 degrees.

**Problem.** If x measures an angle in radians, the derivative of sin x is cos x. If x measures an angle in degrees, the derivative is (π/180) cos x, with cosine also evaluated in degrees.

**How the definition helps.** On the unit circle the radian increment equals signed arc length, giving sin h/h → 1 by the triangle and sector bounds. The half-angle identity then gives (cos h − 1)/h → 0. The addition formula yields the derivative cos x (our own). Converting a degree increment to radians multiplies it by π/180, so the chain rule gives the degree formula (our own).

**Wikipedia:** [Radian](https://en.wikipedia.org/wiki/Radian). It says: “For example, the use of radians leads to the simple limit formula lim (h→0) sin h / h = 1, which is the basis of many other identities in mathematics, including d/dx sin x = cos x”

**Sources:** none listed. No primary source with a working link was found.

### Real powers defined by exp and ln obey the power rule

**Remember:** Rewrite each power through exp and ln, and the chain rule does the rest.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26A24. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For b &gt; 0 and real x, define bˣ = exp(x ln b), where ln is the inverse of the real exponential. Another construction takes roots for rational exponents and uses continuity to extend to real exponents.

**Problem.** For x &gt; 0 and every real r, the derivative of xʳ is r xʳ⁻¹. Also, for b &gt; 0, the derivative of bˣ is bˣ ln b.

**How the definition helps.** Writing each power through the exponential makes both derivatives applications of the chain rule (our own). For fixed r, differentiating exp(r ln x) gives r exp(r ln x)/x = r xʳ⁻¹. For fixed b, differentiating exp(x ln b) gives exp(x ln b) ln b (our own).

**Wikipedia:** [Exponentiation](https://en.wikipedia.org/wiki/Exponentiation). It says: “So, eˣ ˡⁿ ᵇ can be used as an alternative definition of bˣ for any positive real b.”

**Sources:** none listed. No primary source with a working link was found.

### The logarithm integral bounds its growth by every positive power

**Remember:** Bound 1/t by a power that is easier to integrate.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define ln x for x &gt; 0 as the integral of 1/t from 1 to x. The alternative takes the inverse of exp.

**Problem.** For every a &gt; 0, ln x divided by x to power a tends to zero as x tends to infinity.

**How the definition helps.** The integral lets us bound 1/t by t raised to (a/2 − 1) for t ≥ 1. Integration gives ln x ≤ (2/a)(√(xᵃ) − 1) for x ≥ 1. Dividing by xᵃ gives a bound tending to zero. Our own comparison with inverse exp requires showing that the integral defines the same logarithm.

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm). It says: “("slowly" as compared to any power law of x).”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, third edition (1976), equation (45) and its proof.](https://www.lehman.edu/faculty/rbettiol/lehman_teaching/2020mat320/baby_Rudin.pdf)

### The logarithm integral gives the exponential limit

**Remember:** Take logs before raising to a large power.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define L(y) = ∫₁ʸ dt/t for y &gt; 0. Define exp as the inverse of L, instead of as a power series.

**Problem.** For every real x, (1 + x/n) to the nth power tends to exp(x) as n grows.

**How the definition helps.** The logarithm turns the nth power into nL(1 + x/n) once the base is positive. Since L(1) = 0 and L′(1) = 1, this tends to x. Continuity of exp gives the stated limit. Our own argument uses the logarithm product law and the fact that L has a continuous inverse on all real numbers.

**Wikipedia:** [Characterizations of the exponential function](https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function). It says: “Define eˣ to be the unique number y &gt; 0 such that ∫₁ʸ dt/t = x.”

**Sources:** none listed. No primary source with a working link was found.

### The logarithm integral gives the Mercator series

**Remember:** Expand the integrand as a geometric sum before integrating.

*True by definition.* MSC 26A09 (Elementary functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x &gt; 0, define ln x as the integral of 1/t from 1 to x. An alternative defines ln as the inverse of exp.

**Problem.** For −1 &lt; x ≤ 1, ln(1 + x) = x − x²/2 + x³/3 − ⋯.

**How the definition helps.** The integral turns a finite geometric sum for 1/(1 + t) into successive powers divided by their degrees. For \|x\| &lt; 1, the integrated error tends to zero because the powers shrink geometrically. At x = 1, its absolute value after degree N is at most ∫₀¹ tᴺ dt = 1/(N + 1). Our own proof also uses agreement with the inverse exponential definition.

**Wikipedia:** [Natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm). It says: “This is the Taylor series for ln x around 1.”

**Sources:** none listed. No primary source with a working link was found.

### The sine series gives the limit of sin x / x

**Remember:** Divide the sine series by x, and the constant term is 1.

*True by definition.* MSC 26A09 (Elementary functions), 33B10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For real x, define sin x by the series ∑ₙ₌₀∞ (−1)ⁿx²ⁿ⁺¹/(2n+1)!, which converges for every x.

**Problem.** sin x / x → 1 as x → 0.

**How the definition helps.** Dividing the sine series by x for x ≠ 0 gives 1 − x²/3! + x⁴/5! − ⋯. The resulting power series is continuous at zero and takes the value one there, giving the limit (our own).

**Wikipedia:** [Trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions). It says: “In fact, the functions sin and cos can be defined for all complex numbers in terms of the exponential function, via power series,”

**Paper or page:** [Limit of Sine of X over X at Zero](https://proofwiki.org/wiki/Limit_of_Sine_of_X_over_X_at_Zero). It says: “lim (x → 0) sin x / x = 1”

**Sources:** none listed. No primary source with a working link was found.

### Punctured limits let us fill isolated holes

**Remember:** The limit ignores the hole, then tells you how to fill it.

*True by definition.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A punctured limit L at a ignores a itself. For every ε &gt; 0, choose δ &gt; 0. Each domain point with 0 &lt; \|x − a\| &lt; δ must then satisfy \|f(x) − L\| &lt; ε.

**Problem.** Suppose other domain points approach a and f has finite punctured limit L there. Assigning f(a) = L is the unique way to make f continuous at a.

**How the definition helps.** The punctured test already controls every nearby value except the one we assign. Our own proof checks the usual continuity test at the remaining input a, where the error is zero. Any continuous assignment must equal the punctured limit, which is unique.

**nLab:** [limit of a function](https://ncatlab.org/nlab/show/limit+of+a+function). It says: “Weierstrass's definition is also referred to as the punctured limit of a function”

**Paper or page:** [Limit of Functions that Agree](https://proofwiki.org/wiki/Limit_of_Functions_that_Agree). It says: “Let f and g agree for all x in a deleted neighborhood of c.”

**Sources:** none listed. No primary source with a working link was found.

### Testing continuity only inside the domain makes endpoints and restrictions work

**Remember:** Test only the points where the function is defined.

*Rules out counterexamples. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f with domain D is continuous at a point x₀ of D if each ε &gt; 0 has a matching δ &gt; 0. The condition is \|f(x) − f(x₀)\| &lt; ε for all x in D with \|x − x₀\| &lt; δ. Only points of the domain are tested.

**Problem.** A real function on \[a,b\] can be continuous at its endpoints. Every restriction of a continuous real function is continuous, and its reciprocal is continuous wherever defined.

**How the definition helps.** Testing only domain points allows one-sided continuity at endpoints and preserves every continuity estimate after restriction (our own). Requiring a full open interval inside the domain would exclude the endpoints of \[a,b\]. On the subset where f ≠ 0, composing its continuous restriction with the continuous reciprocal map proves continuity of 1/f (our own).

**Wikipedia:** [Continuous function](https://en.wikipedia.org/wiki/Continuous_function). It says: “Weierstrass had required that the interval x₀ − δ &lt; x &lt; x₀ + δ be entirely within the domain D, but Jordan removed that restriction.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity makes continuous functions on closed intervals integrable

**Remember:** Uniform continuity is continuity with one δ for the whole domain.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function f on D ⊆ ℝ is uniformly continuous if every ε &gt; 0 admits a δ &gt; 0 with the following property. For all x,y ∈ D, if \|x−y\| &lt; δ then \|f(x)−f(y)\| &lt; ε.

**Problem.** Every continuous function on a closed bounded interval \[a,b\] is Riemann integrable, in Darboux's form with upper and lower sums.

**How the definition helps.** One δ for the whole interval controls all pieces of a partition at once. In our own detail, for any partition into pieces shorter than δ, the upper and lower sums differ by at most ε(b − a). Plain continuity gives a δ that depends on the point, and that does not control all pieces at once. The hard step moves into the Heine–Cantor theorem, which uses the compactness of \[a,b\].

**Wikipedia:** [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “The Darboux integrability of continuous functions follows almost immediately from this theorem.”

**Sources:**

- [E. Heine, Die Elemente der Functionenlehre, J. reine angew. Math. 74 (1872), 172–188, doi:10.1515/crll.1872.74.172](https://doi.org/10.1515/crll.1872.74.172)

### An affine approximation makes differentiability imply continuity

**Remember:** Both the linear change and the smaller error go to zero.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function has derivative m at a if the line f(a) + mh approximates f(a + h) with error r(h). The error must satisfy r(h)/h → 0 as h → 0.

**Problem.** Every real function differentiable at a point is continuous there.

**How the definition helps.** The approximation splits the change in f into mh and r(h), both of which tend to zero. For h ≠ 0, the error equals h times r(h)/h. Our own comparison recovers the usual slope limit by dividing the change by h.

**Paper or page:** [Differentiable Function is Continuous](https://proofwiki.org/wiki/Differentiable_Function_is_Continuous). It says: “Let x₀ ∈ I such that f is differentiable at x₀. Then f is continuous at x₀.”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory's definition of the derivative gives a two-line chain rule

**Remember:** Factor out x − a, and the slope becomes a continuous function.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Let f be a real function on an open interval containing a. It is differentiable at a if some function q continuous there satisfies f(x)−f(a)=q(x)(x−a) throughout the interval. Its derivative is q(a).

**Problem.** If g is differentiable at a and f is differentiable at g(a), then f∘g is differentiable at a with derivative f′(g(a))g′(a).

**How the definition helps.** Factoring both increments gives f(g(x))−f(g(a)) = q(g(x))r(x)(x−a), where q and r are the slope functions for f and g (our own). Since g is continuous at a, the new factor is continuous there. Its value at a is q(g(a))r(a) = f′(g(a))g′(a), as required (our own).

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

**Definition.** For a function f with derivatives through order n at c, its order-n Taylor polynomial is the sum of f⁽ᵏ⁾(c)(x−c)ᵏ/k! over 0 ≤ k ≤ n.

**Problem.** Suppose f has derivatives through order n at c. Its order-n Taylor polynomial uniquely matches f(c) and those derivatives among all polynomials of degree at most n.

**How the definition helps.** At c, the jth derivative of (x−c)ᵏ/k! equals one if j=k and zero otherwise, including j=0 (our own). Thus each prescribed derivative fixes exactly one coefficient in this basis, proving existence and uniqueness (our own).

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “whose derivatives at c match those of f up to order k.”

**Sources:** none listed. No primary source with a working link was found.

### Summing over set partitions turns the higher chain rule into simple induction

**Remember:** A new derivative starts a block or joins one.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 05A18. arXiv math.CA, math.CO. Level 1: early undergraduate.

**Definition.** A partition of {1,…,n} is a collection of disjoint nonempty blocks whose union is {1,…,n}. In the higher chain rule, each block groups the differentiations applied to one inner factor (our own).

**Problem.** Suppose f and g have derivatives through order n on intervals where their composition is defined. The nth derivative of f∘g at x sums one product per partition of {1,…,n}. That product uses the outer derivative at g(x) of order the block count and one inner derivative at x of order each block’s size.

**How the definition helps.** Each new derivative starts a singleton block by differentiating the outer factor or joins an existing block by differentiating its inner factor (our own). Removing the newest label recovers the unique preceding partition. Thus the product and chain rules generate each partition exactly once, starting with the ordinary first derivative (our own).

**Paper or page:** [A one-sentence elementary proof of the combinatorial Faà di Bruno's formula](https://arxiv.org/abs/2206.02031v2). It says: “where π ranges over the set Πₙ of all partitions of {1, …, n} and B ranges over the blocks in π.”

**Sources:**

- [Samuel Allen Alexander, A one-sentence elementary proof of the combinatorial Faà di Bruno's formula, arXiv:2206.02031v2 (2022)](https://arxiv.org/abs/2206.02031v2)

### Two-sided slopes force a zero derivative at interior extrema

**Remember:** At an interior peak, the two slopes must meet at zero.

*Rules out counterexamples.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The two-sided derivative at a is the common finite limit of the slopes from a to nearby points on either side. The symmetric derivative uses the slope between a − h and a + h as h tends to zero.

**Problem.** If a real function has a local maximum or minimum at an interior point and a two-sided derivative there, that derivative is zero.

**How the definition helps.** At a local maximum, slopes from the left are nonnegative and slopes from the right are nonpositive. Their common limit must be zero, and the signs reverse at a minimum. Our own example \|x\| + x/2 has a minimum at zero but symmetric derivative 1/2.

**Paper or page:** [Theorem 4.3. (Fermat's theorem on stationary points)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Suppose f : U → ℝ is differentiable and p ∈ U is a local extrema. Then f′(p) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform derivative limits allow differentiation

**Remember:** Control all slopes and anchor one function value.

*Rules out counterexamples. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 40A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The derivatives fₙ′ converge uniformly to g on I if for every ε &gt; 0 some integer N satisfies the following condition. For every n ≥ N and every x ∈ I, \|fₙ′(x)−g(x)\| &lt; ε.

**Problem.** Take real functions continuous on a closed bounded interval and differentiable in its interior. Suppose their values converge at one point of the interval and their derivatives converge uniformly in the interior. Then the functions converge uniformly, and their limit has the limiting derivative at each interior point.

**How the definition helps.** The mean value theorem turns a uniform bound on derivative differences into the same bound on differences of secant slopes (our own). The convergent values at one point then make the functions uniformly Cauchy, so they converge uniformly (our own). Pass the secant bound to the limit in one function index before shrinking the secant interval (our own). On \[−1, 1\], the functions x ↦ √(x² + 1/n) converge uniformly to \|x\|, which has no derivative at zero (our own).

**Wikipedia:** [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence). It says: “With additional hypotheses, differentiability can be transferred to the limit function as well.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the integral by antiderivatives makes integration by parts the product rule

**Remember:** The integral of a product's derivative is the product's change.

*True by definition. Confidence: medium.* MSC 26A36 (Antidifferentiation), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a continuous f on \[a, b\], define its integral as F(b) − F(a), where F is any antiderivative of f. The Riemann definition instead takes limits of sums of sampled values.

**Problem.** For continuously differentiable u and v on \[a, b\], the integral of uv′ plus the integral of u′v equals u(b)v(b) − u(a)v(a).

**How the definition helps.** The product rule makes uv an antiderivative of u′v + uv′ (our own). Endpoint subtraction therefore gives the change in uv, and adding antiderivatives gives linearity of the integral. The mean value theorem makes the endpoint difference independent of the chosen antiderivative. The fundamental theorem of calculus supplies antiderivatives for continuous integrands and identifies this integral with the Riemann integral (our own).

**nLab:** [fundamental theorem of calculus](https://ncatlab.org/nlab/show/fundamental+theorem+of+calculus). It says: “the antiderivatives and indefinite integrals of a function”

**Paper or page:** [Integration by Parts/Definite Integral](https://proofwiki.org/wiki/Integration_by_Parts/Definite_Integral). It says: “Let f and g have primitives F and G respectively on \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### Defining the integral by antiderivatives makes substitution the chain rule

**Remember:** Compose the antiderivative and read off the new endpoints.

*True by definition. Confidence: medium.* MSC 26A36 (Antidifferentiation), 26A42. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a continuous real function f on an interval, choose any antiderivative F there. Define the signed integral from u to v in that interval as F(v) − F(u).

**Problem.** Let g be continuously differentiable on \[a, b\], and let f be continuous on an interval that contains g(\[a, b\]). Then the integral of f(g(x))g′(x) from a to b equals the signed integral of f from g(a) to g(b). Here g need not be one-to-one.

**How the definition helps.** The chain rule makes F ∘ g an antiderivative of x ↦ f(g(x))g′(x). Both endpoint differences therefore equal F(g(b)) − F(g(a)) regardless of the order of the endpoints (our own). The fundamental theorem of calculus supplies F and identifies the endpoint difference with the Riemann integral (our own).

**Wikipedia:** [Integration by substitution](https://en.wikipedia.org/wiki/Integration_by_substitution). It says: “combining the chain rule and the definition of an antiderivative gives:”

**Sources:** none listed. No primary source with a working link was found.

### Darboux bounds ignore changes at finitely many points

**Remember:** Squeeze the integral between lower and upper rectangle sums on one partition.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\], each finite partition P gives two rectangle sums with the piece lengths as widths. The lower sum L(P) uses the infimum on each piece as height, and the upper sum U(P) uses the supremum. Darboux integrability means every ε &gt; 0 admits P with U(P)−L(P) &lt; ε, and the integral is the supremum of the lower sums.

**Problem.** Changing finitely many values of a Riemann integrable function on a closed interval leaves it integrable and preserves its integral.

**How the definition helps.** For the difference of the two functions, only pieces touching the changed points contribute to the Darboux sums (our own). With short enough pieces their total length is arbitrarily small, so both sums tend to zero (our own). Use linearity and the equivalence of Darboux and tagged integrals to get the unchanged integral (our own).

**Wikipedia:** [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). It says: “a finite number of points can always be covered by a finite collection of intervals with arbitrarily small total length”

**Sources:** none listed. No primary source with a working link was found.

### Darboux bounds make accumulated area change at a bounded rate

**Remember:** A short interval cannot accumulate more area than height times length.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For an integrable f on \[a, b\], its accumulated area at x is its integral from a to x. Each Darboux sum bounds this area using rectangles whose heights bound f on each piece.

**Problem.** Suppose \|f\| ≤ M on \[a, b\] and f is Riemann integrable there. Its accumulated area changes by at most M\|y − x\| between any two points x and y.

**How the definition helps.** Darboux bounds place the integral over a short interval between two constant rectangles of heights −M and M (our own). Interval additivity identifies that integral with the change in accumulated area (our own). Unlike a derivative argument, this needs no continuity of f or differentiability of the accumulated area (our own).

**Paper or page:** [Darboux's Theorem](https://proofwiki.org/wiki/Darboux's_Theorem). It says: “M is an upper bound of f on \[a, b\]”

**Sources:** none listed. No primary source with a working link was found.

### Darboux gaps show that products stay integrable

**Remember:** Weight each oscillation by its interval length and make their sum arbitrarily small.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\], its oscillation on each partition piece is its supremum there minus its infimum there. The Darboux gap sums each oscillation times the corresponding piece length. The function is integrable if every ε &gt; 0 admits a finite partition with gap below ε.

**Problem.** The product of two Riemann integrable functions on a closed interval is Riemann integrable.

**How the definition helps.** The Darboux gap tracks value spreads, so a bound for each product spread gives a bound for the whole gap (our own). Write f(x)g(x) − f(y)g(y) as f(x)(g(x) − g(y)) + g(y)(f(x) − f(y)) (our own). Combining both partitions only shrinks each gap, and boundedness controls the factors multiplying those gaps (our own). The Darboux criterion converts this estimate into convergence for every choice of sample points (our own).

**Paper or page:** [Condition for Darboux Integrability](https://proofwiki.org/wiki/Condition_for_Darboux_Integrability). It says: “there exists a finite subdivision S of \[a, b\] such that U(S) – L(S) &lt; ε”

**Sources:** none listed. No primary source with a working link was found.

### Darboux gaps split at any cut

**Remember:** The gap adds length times oscillation, piece by piece.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\], its oscillation on each partition piece is its supremum there minus its infimum there. The Darboux gap sums each oscillation times the corresponding piece length. The function is integrable if every ε &gt; 0 admits a finite partition with gap below ε.

**Problem.** Let f be bounded on \[a, b\] and let c lie strictly between a and b. The function is integrable on \[a, b\] exactly when it is integrable on both pieces.

**How the definition helps.** A partition containing c has a gap equal to the two smaller gaps added together (our own). To restrict, insert c into a partition with small gap, which cannot increase the gap (our own). To join, put together two partitions with small gaps (our own). The link to arbitrary tagged sums uses the equivalence of Darboux and Riemann integrability (our own).

**Paper or page:** [Existence of Integral on Union of Adjacent Intervals](https://proofwiki.org/wiki/Existence_of_Integral_on_Union_of_Adjacent_Intervals). It says: “f is Darboux integrable on \[a, c\] and \[c, b\]”

**Sources:** none listed. No primary source with a working link was found.

### Darboux rectangles give the area under an integrable graph

**Remember:** The inner and outer rectangles meet at the integral.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Darboux sums add rectangle areas using each piece’s greatest lower bound or least upper bound as height. A Darboux integrable function has partitions whose lower and upper sums come arbitrarily close to its integral. A region has Jordan area A if finite rectangle unions inside it and containing it can approximate A arbitrarily closely.

**Problem.** The region between a nonnegative Riemann integrable function and the horizontal axis on a closed interval has Jordan area equal to the integral.

**How the definition helps.** The rectangles in the Darboux sums provide the inner and outer rectangle unions (our own). Their area difference is the Darboux gap, which can be made arbitrarily small (our own). The work moves to the equivalence between Darboux bounds and tagged sums (our own).

**Paper or page:** [Area under Curve/Lemma](https://proofwiki.org/wiki/Area_under_Curve/Lemma). It says: “Then A equals the Darboux integral of f over \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums make every monotone function integrable by a telescoping sum

**Remember:** For monotone functions, the gap between upper and lower sums telescopes.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A48. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\], each finite partition gives an upper sum and a lower sum. Multiply each piece length by the supremum or infimum there, respectively, and add. Darboux integrability means the infimum of all upper sums equals the supremum of all lower sums.

**Problem.** Every monotone real function on a closed bounded interval \[a, b\] is Darboux integrable, and hence Riemann integrable.

**How the definition helps.** On n equal pieces, monotonicity puts each supremum and infimum at opposite endpoints (our own). The differences telescope, giving total gap (b−a)\|f(b)−f(a)\|/n, which tends to zero (our own). The Darboux criterion gives integrability, and the equivalence theorem gives Riemann integrability (our own).

**Paper or page:** [Monotone Real Function is Darboux Integrable](https://proofwiki.org/wiki/Monotone_Real_Function_is_Darboux_Integrable). It says: “Then f is Darboux integrable over \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums reject the rational indicator

**Remember:** Lower rectangles use each infimum, upper rectangles each supremum, and integrability closes the gap.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\], each finite partition P gives two rectangle sums with the piece lengths as widths. The lower sum L(P) uses the infimum on each piece as height, and the upper sum U(P) uses the supremum. Darboux integrability means every ε &gt; 0 admits P with U(P)−L(P) &lt; ε.

**Problem.** The function on \[0, 1\] that equals one on rational numbers and zero elsewhere is not Riemann integrable.

**How the definition helps.** Every partition gives lower sum zero and upper sum one, since each piece contains both rational and irrational numbers (our own). Their gap can never become arbitrarily small, so the function fails the Darboux test (our own). The separate theorem that Riemann and Darboux integrability agree gives the conclusion for the Riemann integral (our own).

**Wikipedia:** [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). It says: “This function does not have a Riemann integral.”

**Paper or page:** [Equivalence of Definitions of Riemann and Darboux Integrals](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Riemann_and_Darboux_Integrals). It says: “the Darboux integral of f over \[a, b\] exists and is equal to L.”

**Sources:** none listed. No primary source with a working link was found.

### Darboux sums turn integrability into one test on a single partition

**Remember:** Squeeze the integral between rectangles above and rectangles below.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For bounded f on \[a,b\], U(P) sums each piece length of a finite partition P times the supremum there. L(P) uses the infimum instead. Darboux integrability means inf U(P) = sup L(P) over all finite partitions.

**Problem.** A bounded f is integrable exactly when, for every ε &gt; 0, some partition has upper sum minus lower sum below ε. So every monotone function on \[a, b\] is integrable.

**How the definition helps.** If the bounds agree, choose upper and lower sums within ε/2 of their common bound (our own). Their common refinement has gap below ε, while every partition gap bounds the difference between the two integral bounds (our own). For monotone f, the gap on n equal pieces telescopes to (b−a)\|f(b)−f(a)\|/n (our own). This tends to zero, and Darboux and Riemann integrability agree (our own).

**Wikipedia:** [Darboux integral](https://en.wikipedia.org/wiki/Darboux_integral). It says: “An equivalent and sometimes useful criterion for the integrability of f is to show that for every ε &gt; 0 there exists a partition Pε of \[a, b\] such that”

**Sources:**

- [Gaston Darboux, Mémoire sur les fonctions discontinues, Annales scientifiques de l'École normale supérieure 4 (1875)](https://doi.org/10.24033/asens.122)

### Reduced denominators make Thomae’s function integrable with integral zero

**Remember:** Only finitely many points on a bounded interval have small denominators.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Thomae’s function is zero at irrational numbers. At a rational number p/q in lowest terms with q positive, the function equals 1/q. In lowest terms, the numerator and denominator have no common factor greater than one.

**Problem.** Thomae’s function is Riemann integrable on every closed bounded interval and has integral zero.

**How the definition helps.** The denominator rule leaves only finitely many points above each positive height on a bounded interval (our own). Pieces touching those points have arbitrarily small total length on fine partitions, and all remaining heights are small (our own). Every lower sum is zero because each piece contains an irrational number (our own). Giving every rational height one instead makes every upper sum equal the interval length (our own).

**Wikipedia:** [Thomae's function](https://en.wikipedia.org/wiki/Thomae%27s_function). It says: “f is Riemann integrable on any interval”

**Sources:** none listed. No primary source with a working link was found.

### Reversing the limits flips the sign, so interval additivity always holds

**Remember:** Integrate backwards, and the sign flips.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A06. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a &lt; b and f Riemann integrable on \[a,b\], define its integral from b to a as minus its integral from a to b. Define its integral from a to a as zero.

**Problem.** Let f be Riemann integrable on an interval containing a, b and c in any order. Its integrals from a to b and b to c sum to its integral from a to c. For continuous f, F(x) = ∫ₐˣ f has derivative f(x) at interior points on either side of a.

**How the definition helps.** Ordered interval additivity gives every ordering after reversing limits and moving terms across the equality (our own). The fundamental theorem of calculus gives F′ = f for continuous f (our own).

**Wikipedia:** [Integral](https://en.wikipedia.org/wiki/Integral). It says: “The first convention is necessary in consideration of taking integrals over subintervals of \[a, b\]; the second says that an integral taken over a degenerate interval, or a point, should be zero.”

**Sources:** none listed. No primary source with a working link was found.

### Signed heights make integration linear

**Remember:** Signed heights can cancel before or after you add.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a finite tagged partition P of \[a,b\], let S(P) sum each piece length times the signed function value at its tag. Its mesh is the largest piece length. The integral equals I if every ε &gt; 0 admits δ &gt; 0 with \|S(P)−I\| &lt; ε whenever the mesh is below δ.

**Problem.** Let f and g be Riemann integrable on the same closed bounded interval. Every real linear combination is integrable there, and integration preserves that combination.

**How the definition helps.** At every sample point, signed heights add before or after multiplication by the rectangle width (our own). Unsigned area fails for the constant functions one and minus one, whose sum has zero area (our own). The limit laws carry the equality of rectangle sums to the integrals (our own).

**Paper or page:** [Linear Combination of Integrals/Definite](https://proofwiki.org/wiki/Linear_Combination_of_Integrals/Definite). It says: “The integral of this linear combination equals the same linear combination of their integrals.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform limits preserve Riemann integrals

**Remember:** A small error everywhere gives a small total error.

*Rules out counterexamples.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 40A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A sequence fₙ converges uniformly to f on E if every ε &gt; 0 admits an integer N with the following property. For every n ≥ N and every x in E, \|fₙ(x)−f(x)\| &lt; ε.

**Problem.** If Riemann integrable functions on a closed bounded interval converge uniformly, their limit is integrable. Its integral is the limit of their integrals.

**How the definition helps.** Uniform convergence bounds the error in every Riemann sum by the maximum allowed error times the interval length (our own). The upper and lower sum criterion then gives integrability of the limit (our own). On \[0, 1\], let the nth function equal n on (0, 1/n) and zero elsewhere (our own). Each integral equals one, but the pointwise limit is zero (our own).

**Wikipedia:** [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence). It says: “the uniform limit of Riemann integrable functions is automatically Riemann integrable.”

**Paper or page:** [Definite Integral of Limit of Uniformly Convergent Sequence of Integrable Functions](https://proofwiki.org/wiki/Definite_Integral_of_Limit_of_Uniformly_Convergent_Sequence_of_Integrable_Functions). It says: “Then f is integrable, and”

**Sources:** none listed. No primary source with a working link was found.

### Convex chords order slopes

**Remember:** The middle point below the chord orders the three slopes.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A real function f on an interval is convex if f((1−t)u+tw) ≤ (1−t)f(u)+tf(w) for every u,w in the interval and every t ∈ \[0,1\].

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

### One linear derivative gives every directional derivative

**Remember:** Feed a direction into the derivative to get its slope.

*True by definition.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The total derivative at a is a linear map L that approximates the change from f(a) to f(a+h). The error divided by the length of h tends to zero as h approaches zero.

**Problem.** For every vector v, the function t ↦ f(a+tv) has slope Lv at zero if f has total derivative L at a.

**How the definition helps.** One linear approximation controls every line through a before we choose a direction. In our own proof, take h = tv and divide the error by t for nonzero v. The error tends to zero after division, and the slope for v = 0 is zero. Computing line limits separately would still leave linearity and the total error bound to prove.

**nLab:** [differentiable map](https://ncatlab.org/nlab/show/differentiable+map). It says: “then dfₓ(v) is its directional derivative along v.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-7](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Twice differentiable maps have symmetric second derivatives

**Remember:** Twice differentiable means the derivative itself has a derivative, not only the partials.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A map f from an open set in ℝⁿ to ℝᵐ is twice differentiable if it is differentiable and its derivative df is again differentiable. Here df is a map from the open set into the space of linear maps from ℝⁿ to ℝᵐ. The second derivative d(df) at a point is then a bilinear map.

**Problem.** If f is twice differentiable, its mixed partial derivatives are equal: ∂²f/∂xᵢ∂xⱼ = ∂²f/∂xⱼ∂xᵢ. Equivalently, the bilinear map d(df) is symmetric at every point.

**How the definition helps.** Differentiability of df at x gives a linear approximation to df near x (our own). Along a shrinking parallelogram, the mean value theorem then gives the mixed difference divided by t² tending to d(df)ₓ(v,w), using sides tv,tw (our own). Swapping the sides preserves that difference and therefore its limit (our own). The function xy(x²−y²)/(x²+y²), extended by zero at the origin, has unequal mixed partials there and fails this differentiability condition (our own).

**nLab:** [differentiable map](https://ncatlab.org/nlab/show/differentiable+map). It says: “However, the theorem shows that if we require f to actually be twice differentiable rather than merely having second-order partial derivatives, then this cannot happen.”

**Sources:** none listed. No primary source with a working link was found.

### Unit directions reveal steepest slopes

**Remember:** Compare equal-length steps to find the steepest slope.

*Makes the theorem clean to state or prove.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a real function f on an open subset of ℝⁿ, choose a point a and a unit vector u. Its directional slope at a along u is the limit of (f(a+tu)−f(a))/t as t tends to zero, when this limit exists.

**Problem.** For a differentiable real function, the greatest directional slope equals the length of its gradient. If the gradient is nonzero, that slope occurs in the gradient direction.

**How the definition helps.** A unit vector removes speed from the comparison, so only the angle with the gradient matters (our own). Without that restriction, increasing an uphill velocity makes the rate arbitrarily large (our own). The chain rule gives the dot product formula, and the dot product is largest at alignment (our own).

**Wikipedia:** [Gradient](https://en.wikipedia.org/wiki/Gradient). It says: “The steepness of the slope at that point is given by the magnitude of the gradient vector.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §4.6.](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient)

### Bilinearity gives one product rule for vector products

**Remember:** A bilinear product is linear in either input when the other stays fixed.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B12 (Calculus of vector functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A bilinear map B between finite-dimensional real vector spaces is linear in each input when we hold the other fixed. Examples include multiplication of real numbers and the dot product of vectors.

**Problem.** Let u and v be differentiable at a, with derivatives U and V. The derivative of x ↦ B(u(x),v(x)) sends h to B(Uh,v(a)) + B(u(a),Vh).

**How the definition helps.** Bilinearity gives one formula for differentiating products with scalar or vector outputs. Our own proof expands the change into two terms linear in the input changes and one term containing both changes. In finite dimensions, the last term is bounded by a constant times the product of their lengths.

**nLab:** [bilinear map](https://ncatlab.org/nlab/show/bilinear+map). It says: “a bilinear map f : A × B → C is a function of sets”

**Paper or page:** [Derivative of Dot Product of Vector-Valued Functions](https://proofwiki.org/wiki/Derivative_of_Dot_Product_of_Vector-Valued_Functions). It says: “The derivative of their dot product is given by”

**Sources:** none listed. No primary source with a working link was found.

### Unit speed makes acceleration perpendicular

**Remember:** A constant speed leaves acceleration only to turn the velocity.

*True by definition.* MSC 26B12 (Calculus of vector functions). arXiv math.CA. Level 1: early undergraduate.

**Definition.** A smooth curve γ has an arc length parameter if every parameter interval \[s,t\] has traveled length t−s. Equivalently, ‖γ′(s)‖ = 1 throughout the parameter interval.

**Problem.** When a twice continuously differentiable regular curve is measured by arc length, its acceleration is perpendicular to its velocity.

**How the definition helps.** The squared speed is constant, and its derivative is twice the dot product of velocity and acceleration (our own). The work lies in showing that the derivative of arc length is speed and using it to change parameters (our own).

**Wikipedia:** [Differentiable curve](https://en.wikipedia.org/wiki/Differentiable_curve). It says: “is at a constant unit speed.”

**Sources:** none listed. No primary source with a working link was found.

### Scalar line integrals ignore direction

**Remember:** Reversing the walk reverses the pieces, not their lengths.

*True by definition.* MSC 26B15 (Integration of real functions of several variables: length, area, volume). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a smooth path γ on \[a,b\] and continuous f on its image, the scalar line integral is ∫ₐᵇ f(γ(t))‖γ′(t)‖ dt.

**Problem.** Reversing a smooth curve leaves the scalar line integral of a continuous function unchanged.

**How the definition helps.** The reversed path t ↦ γ(a+b−t) visits each point with the same speed (our own). Substituting s = a+b−t in the integral gives the original value (our own).

**nLab:** [line integral](https://ncatlab.org/nlab/show/line+integral). It says: “whether increasing or decreasing”

**Wikipedia:** [Line integral](https://en.wikipedia.org/wiki/Line_integral). It says: “Line integrals of scalar fields over a curve C do not depend on the chosen parametrization r of C.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §6.2.](https://openstax.org/books/calculus-volume-3/pages/6-2-line-integrals)

### Clockwise inner boundaries preserve Green’s theorem

**Remember:** Keep the region on your left, even at a hole.

*Rules out counterexamples.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a positive boundary, walk with the region to your left. This rule sends you counterclockwise around the outside and clockwise around any hole. The simpler rule “walk counterclockwise” works only for an outside boundary.

**Problem.** Let a bounded plane region have a boundary of finitely many disjoint, simple, piecewise smooth closed curves, oriented positively. For a vector field with continuous first derivatives near the closed region, the circulation around this boundary equals the area integral of the scalar curl.

**How the definition helps.** The left-hand rule makes the two copies of every cut run in opposite directions, so their integrals cancel (our own). On a ring centered at the origin, the field (−y, x)/(x² + y²) has zero curl (our own). Each counterclockwise circle contributes 2π, so the inner circle must run clockwise (our own). Green’s theorem on the pieces supplies the integral identity (our own).

**Wikipedia:** [Green's theorem](https://en.wikipedia.org/wiki/Green%27s_theorem). It says: “where the path of integration along C is counterclockwise.”

**Sources:**

- [Gilbert Strang and Edwin Herman, Calculus Volume 3, OpenStax (2016), §6.4.](https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem)

### Differentials turn gradient line integrals into endpoint differences

**Remember:** A pulled-back differential is the derivative of the function along the path.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The differential df assigns each velocity v the rate of change ∇f · v. To integrate df along a path, evaluate it on the path’s velocity and integrate over time.

**Problem.** Let f have continuous first derivatives. The line integral of its gradient ∇f along a piecewise smooth path from a to b is f(b) − f(a).

**How the definition helps.** Using df turns the whole integrand into the rate of change of f along the path (our own). The chain rule gives this equality without integrating the coordinate terms separately (our own). The fundamental theorem of calculus gives the endpoint difference on each smooth piece, and the intermediate values cancel (our own).

**Paper or page:** [Fundamental Theorem of Line Integrals](https://proofwiki.org/wiki/Fundamental_Theorem_of_Line_Integrals). It says: “∫₍C₎ ∇f · d𝐫 = f(𝐫(b)) − f(𝐫(a))”

**Sources:** none listed. No primary source with a working link was found.

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

*True by definition.* MSC 26C05 (Real polynomials: analytic properties, etc.). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Let a be a real root of a nonzero real polynomial P. Its multiplicity is the integer m ≥ 1 such that (x−a)ᵐ divides P but (x−a)ᵐ⁺¹ does not.

**Problem.** A nonzero real polynomial changes sign across a real root exactly when that root has odd multiplicity.

**How the definition helps.** The remaining factor has constant sign nearby, so only the parity of the removed power matters (our own). The root zero of x² shows why not every root is a crossing (our own). The work is repeated division by x − a and continuity of the remaining factor (our own).

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “The graph traverses the x-axis at roots of odd multiplicity and does not traverse it at roots of even multiplicity”

**Sources:** none listed. No primary source with a working link was found.

### Tangent lines give Bernoulli’s inequality for real exponents

**Remember:** The tangent at zero bounds each power in the direction its graph bends.

*True by definition.* MSC 26D07 (Inequalities involving other types of functions), 26A51. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A differentiable real function f on an open interval is convex if f(y) ≥ f(x)+f′(x)(y−x) for every x,y there. Reverse the inequality for concavity.

**Problem.** For x &gt; −1 and r ≥ 1, the rth power of 1 + x is at least 1 + rx. For 0 &lt; r &lt; 1, the inequality reverses.

**How the definition helps.** The tangent to the power function at x = 0 has height 1 + rx (our own). The second derivative shows which way the power function bends, and the tangent-line test gives the right direction (our own). The mean value theorem proves equivalence with the chord test (our own).

**Wikipedia:** [Bernoulli's inequality](https://en.wikipedia.org/wiki/Bernoulli%27s_inequality). It says: “(1 + x)ʳ ≥ 1 + rx for every real number r ≥ 1 and x ≥ −1”

**Sources:** none listed. No primary source with a working link was found.

### Pairwise covariance proves Chebyshev’s sum inequality

**Remember:** When both lists move together, every pair contributes a nonnegative product.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For two lists of length n, define their covariance as the sum of (aᵢ − aⱼ)(bᵢ − bⱼ) over all ordered pairs, divided by 2n². The usual formula subtracts the product of the means from the mean of the products.

**Problem.** If two real lists are both sorted in decreasing order, the mean of their termwise products is at least the product of their means.

**How the definition helps.** Both differences in each pair have the same sign or one is zero (our own). The work goes into expanding the pairwise formula to recover the difference between the two means in the inequality (our own).

**Paper or page:** [Chebyshev's Sum Inequality/Discrete](https://proofwiki.org/wiki/Chebyshev's_Sum_Inequality/Discrete). It says: “Then: (1/n) ∑ₖ₌₁ⁿ aₖbₖ ≥ ((1/n) ∑ₖ₌₁ⁿ aₖ)((1/n) ∑ₖ₌₁ⁿ bₖ)”

**Sources:** none listed. No primary source with a working link was found.

### Strict convexity rules out equality for different inputs

**Remember:** No straight part means no equality for different inputs.

*Rules out counterexamples. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** On an interval, a function is strictly convex if every chord between distinct graph points lies above the graph between its endpoints. Ordinary convexity allows the chord to touch the graph there.

**Problem.** Take a weighted average with nonnegative weights totaling one. For a strictly convex function, averaging before or after applying the function gives equal results exactly when all positive-weight inputs coincide.

**How the definition helps.** Strict convexity makes combining two distinct inputs with positive weight lose height (our own). Apply ordinary Jensen to the combined point and the remaining inputs (our own). Ordinary convexity leaves in f(x) = \|x\|, which gives equality at the average of 1 and 3 (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “A function f is strictly convex if the inequality holds strictly whenever 0 &lt; t &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### Strict ordering makes the best rearrangement unique

**Remember:** With no ties, correcting a reversed pair always helps.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Call a list strictly increasing if each entry is larger than its predecessor. Unlike a nondecreasing list, it cannot repeat a value.

**Problem.** For two strictly increasing real lists of the same finite length, only pairing equal positions maximizes the sum of pairwise products.

**How the definition helps.** Strict ordering makes the gain from correcting any reversed pair positive, since the gain is a product of two positive differences (our own). Every nonidentity permutation has a reversed pair (our own). If the first list is (1, 1) and the second is (2, 3), both pairings give 5 (our own).

**Wikipedia:** [Rearrangement inequality](https://en.wikipedia.org/wiki/Rearrangement_inequality). It says: “If y₁ &lt; ⋯ &lt; yₙ, then the only such σ is the identity.”

**Sources:** none listed. No primary source with a working link was found.

### The convex unit ball keeps the triangle inequality

**Remember:** A convex unit ball gives a triangle inequality.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For real p ≥ 1, the p-unit ball B consists of finite vectors in a fixed dimension satisfying ∑\|xᵢ\|ᵖ ≤ 1. The p-norm of x is inf{s &gt; 0 : x ∈ sB}, equal to (∑\|xᵢ\|ᵖ)¹⁄ᵖ.

**Problem.** For finite vectors and p ≥ 1, the p-norm of a sum is at most the sum of the two p-norms.

**How the definition helps.** For p ≥ 1, convexity of the function t ↦ \|t\|ᵖ keeps every segment between points of the ball inside it (our own). For nonzero x and y, dividing x + y by the sum of their lengths gives a weighted average of unit vectors (our own). At p = ½, each coordinate vector in the plane has length one, but their sum has length four (our own).

**nLab:** [p-norm](https://ncatlab.org/nlab/show/p-norm). It says: “For 0 ≤ p &lt; 1 one may still make sense of the formulas that define p-norms for p ≥ 1 (see at Generalizations below), but the resulting concepts are no longer genuine norms.”

**Sources:** none listed. No primary source with a working link was found.

### The maximum norm includes Hölder’s endpoint

**Remember:** At the endpoint, bound each factor by its largest absolute entry.

*Makes the theorem clean to state or prove.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Extend the p-norm of a finite list to p = ∞ by using its largest absolute entry. Interpret 1/∞ as zero, so Hölder’s rule 1/p + 1/q = 1 includes p = 1 and q = ∞.

**Problem.** For finite lists a and b of the same length, ∑\|aᵢbᵢ\| ≤ (∑\|aᵢ\|)‖b‖∞.

**How the definition helps.** The maximum bounds each entry of the second list, so the sum is at most that maximum times the first list’s 1-norm (our own). The work in justifying this extension is to show that the pth root of the sum of powers tends to the maximum (our own).

**nLab:** [p-norm](https://ncatlab.org/nlab/show/p-norm). It says: “For p = ∞ the p-norm (found by taking the limit p → ∞) is the supremum (or essential supremum in the continuous case) of the absolute values of the components of vectors, then called the supremum norm.”

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

### Logarithmic averaging gives the arithmetic–geometric mean inequality

**Remember:** Average before applying the exponential and the result can only fall.

*True by definition.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Define a weighted geometric mean by taking the exponential of the weighted average of the logarithms. Use positive inputs and positive weights that sum to one. The usual formula multiplies each input raised to its weight.

**Problem.** The weighted arithmetic mean is at least the weighted geometric mean for the same positive inputs and weights. Equality holds exactly when all inputs are equal.

**How the definition helps.** The exponential curves strictly below every chord, so its value at the average logarithm cannot exceed the average of the exponentials (our own). Those exponentials are the original inputs, and equality requires all their logarithms to coincide (our own). The logarithm laws recover the usual product formula (our own).

**Wikipedia:** [Geometric mean](https://en.wikipedia.org/wiki/Geometric_mean). It says: “The geometric mean can also be expressed as the exponential of the arithmetic mean of logarithms.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### With M₀ the geometric mean, power means form one monotone family

**Remember:** Zero gives the geometric mean, the limit of the power means.

*Makes the theorem clean to state or prove.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Take positive numbers x₁, …, xₙ and a real p ≠ 0. The power mean Mₚ is the p-th root of the average of the p-th powers. By convention M₀ is the geometric mean, M₊∞ the maximum and M₋∞ the minimum.

**Problem.** The power mean inequality says that the p-th power mean is at most the q-th power mean whenever p &lt; q. For p in {−1, 0, 1} it gives harmonic ≤ geometric ≤ arithmetic.

**How the definition helps.** Setting M₀ to the geometric mean fills the missing exponent with its limiting value. Apply L’Hôpital’s rule to log Mₚ at zero to obtain the average logarithm (our own). Jensen’s inequality gives monotonicity for finite nonzero exponents, and the limiting values include zero and both infinite endpoints (our own).

**Wikipedia:** [Generalized mean](https://en.wikipedia.org/wiki/Generalized_mean). It says: “For p = 0 we set it equal to the geometric mean (which is the limit of means with exponents approaching zero, as proved below)”

**Sources:** none listed. No primary source with a working link was found.

### A fixed positive gap makes the order of Cauchy reals well-defined

**Remember:** A positive gap survives a change of sequence.

*Rules out counterexamples.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Cauchy sequence has all sufficiently late terms within any prescribed positive distance of each other. A Cauchy real groups together rational Cauchy sequences whose differences tend to zero. Call one class larger if its terms eventually exceed the other’s by at least some fixed positive rational number.

**Problem.** Strict comparison of Cauchy reals does not depend on which sequences represent them.

**How the definition helps.** A fixed positive gap survives small changes in both sequences. In our own proof, each sequence eventually changes by less than a quarter of the gap, leaving at least half. Eventual strict inequality alone fails because 1, 1/2, 1/3, … represents zero.

**nLab:** [Cauchy real number](https://ncatlab.org/nlab/show/Cauchy+real+number). It says: “with two sequences considered equivalent if their difference converges to zero.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing infinite values makes the monotone convergence theorem statable

**Remember:** An increasing sequence of nonnegative integrals may have limit +∞.

*Makes the theorem clean to state or prove.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The extended real line adds +∞ and −∞ to the real numbers, with −∞ ≤ a ≤ +∞ for all a. In measure theory, the product 0 · ∞ is defined as 0.

**Problem.** For an increasing sequence of non-negative measurable functions, the integral of the limit equals the limit of the integrals.

**How the definition helps.** The extended nonnegative reals contain the supremum of every increasing sequence, so both sides exist even when infinite (our own). The monotone convergence theorem identifies them using approximation from below by nonnegative simple functions (our own).

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

### Quotienting by null sequences makes the Cauchy reals a field

**Remember:** Discard errors tending to zero, then invert every remaining nonzero class.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Use the ring of rational Cauchy sequences with termwise addition and multiplication. Define the reals as its quotient by null sequences, those tending to zero. This identifies sequences whose difference tends to zero, rather than keeping every approximation separate.

**Problem.** The Cauchy reals form a field under termwise operations on representatives.

**How the definition helps.** Identifying sequences whose difference tends to zero lets an inverse ignore finitely many zero terms. Our own proof uses the fact that a nonzero class eventually stays a fixed positive distance from zero. Reciprocals on that tail form a Cauchy sequence when extended by zero at earlier positions. The product eventually equals one, and the remaining ring laws follow once termwise operations respect the classes.

**Paper or page:** [Quotient Ring of Cauchy Sequences is Division Ring/Corollary 1](https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Division_Ring/Corollary_1). It says: “Then the quotient ring 𝒞 / 𝒩 is a field.”

**Sources:** none listed. No primary source with a working link was found.

### Rational Cauchy sequences supply limits of real Cauchy sequences

**Remember:** Approximate each real by a rational, then take that rational sequence as the limit.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A sequence is Cauchy if all sufficiently late terms lie within any prescribed positive distance of each other. A Cauchy real is a class of rational Cauchy sequences whose differences tend to zero.

**Problem.** Every Cauchy sequence of Cauchy reals converges to a Cauchy real.

**How the definition helps.** The sequence construction supplies a candidate limit directly as a class of rational approximations. Our own proof chooses a rational within 1/n of the nth real for each positive integer n. The triangle inequality makes these rationals Cauchy and shows that the original sequence converges to their class. Compared with constructing a limit from least upper bounds, the work moves to defining distance and proving that rationals approximate every class.

**Paper or page:** [Quotient of Cauchy Sequences is Metric Completion](https://proofwiki.org/wiki/Quotient_of_Cauchy_Sequences_is_Metric_Completion). It says: “(𝒞 / 𝒩, d′) is the metric completion of (R, d)”

**Sources:** none listed. No primary source with a working link was found.

### Taking ln a as the slope of aˣ at zero differentiates aˣ

**Remember:** The slope at zero fixes the slope at every point.

*True by definition. Confidence: medium.* MSC 26A09 (Elementary functions), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a &gt; 0, define aˣ for rational x by roots and powers, and extend it to real x by continuity. Then define ln a as the derivative of aˣ at x = 0. The usual definition makes ln the area under 1/t and sets aˣ = exp(x ln a).

**Problem.** For a &gt; 0 and every real x, the derivative of aˣ is aˣ ln a.

**How the definition helps.** The exponent law factors the difference quotient at x as aˣ times (aʰ−1)/h (our own). The second factor tends to ln a by definition (our own). The work lies in proving that the slope at zero exists and agrees with the usual logarithm (our own).

**Paper or page:** [Derivative of General Exponential Function](https://proofwiki.org/wiki/Derivative_of_General_Exponential_Function), [Natural Logarithm as Derivative of Exponential at Zero](https://proofwiki.org/wiki/Natural_Logarithm_as_Derivative_of_Exponential_at_Zero). It says: “d(aˣ)/dx = aˣ ln a”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy continuity lets a function extend to missing endpoints

**Remember:** Cauchy inputs give Cauchy outputs, even when the inputs approach a missing endpoint.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function is Cauchy continuous if it sends Cauchy sequences to Cauchy sequences. A Cauchy sequence has terms that eventually stay arbitrarily close to each other.

**Problem.** A Cauchy continuous real function on an interval extends uniquely and continuously to its finite endpoints. In particular, every uniformly continuous real function on an interval has this extension.

**How the definition helps.** Interleaving two sequences approaching an endpoint makes their outputs share one limit. The interleaved inputs are Cauchy, so their outputs are Cauchy and converge in ℝ. Our own proof assigns that limit at each endpoint and tests interior continuity by interleaving with constant sequences. Uniform continuity guarantees Cauchy continuity because one input distance bound works for every pair.

**Paper or page:** [Uniformly Continuous Function to Complete Metric Space has Unique Continuous Extension to Closure of Domain](https://proofwiki.org/wiki/Uniformly_Continuous_Function_to_Complete_Metric_Space_has_Unique_Continuous_Extension_to_Closure_of_Domain). It says: “Then there exists a unique continuous function g : A⁻ → Y”

**Sources:** none listed. No primary source with a working link was found.

### Closed sublevel sets give minima

**Remember:** Closed sets of near-minimizers must meet on a compact domain.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function is lower semicontinuous if every sublevel set is closed. A sublevel set contains all points where the function is at most a specified height. On a metric space, this is equivalent to requiring that a value never exceed the limit inferior along any approaching sequence.

**Problem.** A real-valued lower semicontinuous function on a nonempty compact interval attains its minimum.

**How the definition helps.** Closed sublevel sets let compactness turn near-minimizers into a minimizer (our own). Let m be the infimum. The sublevel sets at heights m + 1/n are nonempty, closed and nested, so they share a point, and that point attains m (our own). If m were −∞, the same argument at heights −n would give a point with no real value (our own).

**nLab:** [semicontinuous map](https://ncatlab.org/nlab/show/semicontinuous+map). It says: “for each y ∈ U, f(y) &gt; a.”

**Sources:** none listed. No primary source with a working link was found.

### Moduli of continuity compose with their functions

**Remember:** Feed the first error bound into the second.

*True by definition.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A modulus of continuity for f is a nondecreasing function ω from nonnegative reals to nonnegative reals. It satisfies ω(0) = 0 and tends to zero at zero. For every pair of inputs, \|f(x) − f(y)\| ≤ ω(\|x − y\|).

**Problem.** If f has modulus ω and g has modulus η on the range of f, then g ∘ f has modulus η ∘ ω.

**How the definition helps.** The outer modulus bounds the output gap in terms of the inner output gap. Since η is nondecreasing, substituting the bound ω(\|x − y\|) gives the claimed result. Our own comparison with the usual distance test puts the work into finding a modulus for each function.

**Wikipedia:** [Modulus of continuity](https://en.wikipedia.org/wiki/Modulus_of_continuity). It says: “then the composition map g ∘ f : X → Z has modulus of continuity ω₂ ∘ ω₁.”

**Sources:** none listed. No primary source with a working link was found.

### Open rays make a strictly monotone inverse continuous

**Remember:** An order cut in the interval pulls back to an order cut.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For maps into a real interval, continuity can be tested with open rays, the sets above or below a cutoff. The inputs sent into each ray must form an open set relative to the domain.

**Problem.** A strictly monotone real function on an interval has a continuous inverse on its range, even if the function itself has jumps.

**How the definition helps.** The inverse of an increasing function sends values above f(c) precisely to inputs above c. Thus the preimage of the upper ray at c is an open ray intersected with the range. Lower rays work the same way, and a decreasing function reverses the rays. Our own proof uses the equivalence of the ray test and ordinary continuity, with cutoffs c in the original interval.

**Paper or page:** [Continuous Inverse Theorem](https://proofwiki.org/wiki/Continuous_Inverse_Theorem). It says: “Then g is strictly monotone and continuous on J.”

**Sources:** none listed. No primary source with a working link was found.

### Oscillation shows that the points of continuity form a G-delta set

**Remember:** Continuity means zero oscillation, and small oscillation is an open condition.

*Makes the theorem clean to state or prove.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A21. arXiv math.CA, math.GN. Level 2: later undergraduate.

**Definition.** For a real function f on ℝ, its oscillation at x is the infimum, over r &gt; 0, of the spreads on (x−r,x+r). The spread on I is sup{\|f(u)−f(v)\| : u,v ∈ I}, allowing +∞.

**Problem.** For any function f on the real line, the set of points where f is continuous is a countable intersection of open sets. So no function is continuous exactly at the rational numbers.

**How the definition helps.** Oscillation turns continuity at a point into a number, so the set of continuity points is a level set. The set where the oscillation is less than 1/n is open, and the intersection over all n is the set of continuity points. The rationals are not a G-delta set, by the Baire category theorem (our own). So no function is continuous exactly on the rationals, although Thomae's function is continuous exactly on the irrationals (our own).

**Wikipedia:** [Oscillation (mathematics)](https://en.wikipedia.org/wiki/Oscillation_%28mathematics%29). It says: “the continuous points are the intersection of the sets where the oscillation is less than ε (hence a Gδ set) – and gives a very quick proof of one direction of the Lebesgue integrability condition.”

**Sources:** none listed. No primary source with a working link was found.

### Shrinking oscillation tests for a limit without guessing its value

**Remember:** A shrinking spread forces the values to settle at one number.

*Makes the theorem clean to state or prove.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The oscillation of a real function on a set is the smallest upper bound of all absolute differences between its values there. Around a, measure it on domain points satisfying 0 &lt; \|x − a\| &lt; r.

**Problem.** Suppose other domain points approach a. A finite punctured limit exists at a exactly when the oscillation on these sets tends to zero as r tends to zero.

**How the definition helps.** Oscillation measures how closely the values cluster without choosing their limit first. Once the oscillation is finite, the nearby values lie between finite lower and upper bounds. Our own proof uses the nested interval theorem on their tightest closed intervals as the radii halve. Conversely, values within ε of one limit differ from each other by at most 2ε.

**Wikipedia:** [Oscillation (mathematics)](https://en.wikipedia.org/wiki/Oscillation_%28mathematics%29). It says: “The oscillation of f on an interval I in its domain is the difference between the supremum and infimum of f:”

**Sources:** none listed. No primary source with a working link was found.

### Distance cones extend Lipschitz functions

**Remember:** Take the lowest distance bound from all the known values.

*True by definition.* MSC 26A16 (Lipschitz (Hölder) classes). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function is L-Lipschitz if each absolute change in value is at most L times the distance between inputs. For each x on the line, define its McShane extension as the infimum of f(a) + L\|x − a\| over original points a. This single formula replaces interpolation across individual gaps in the domain.

**Problem.** A real function on any nonempty subset of the line with Lipschitz constant L extends to the whole line with the same bound.

**How the definition helps.** Taking the infimum of distance bounds enforces the Lipschitz inequality everywhere at once (our own). Each expression f(a) + L\|x − a\| changes by at most L times the change in x, and infima keep this bound (our own). Every expression is at least f(b) − L\|x − b\| for a fixed original point b, so the infimum is finite (our own). At an original point x, the infimum is f(x), attained at a = x (our own).

**nLab:** [Lipschitz map](https://ncatlab.org/nlab/show/Lipschitz+map). It says: “d(f(a), f(b)) ≤ K d(a, b)”

**Sources:**

- [E. J. McShane, Extension of range of functions (1934)](https://doi.org/10.1090/S0002-9904-1934-05978-0)

### Defining Baire class one by limits makes derivatives Baire class one

**Remember:** Continuous difference quotients converge to the derivative.

*True by definition.* MSC 26A21 (Classification of real functions; Baire classification of sets and functions), 03E15, 26A24. arXiv math.CA, math.LO. Level 2: later undergraduate.

**Definition.** A real function has Baire class one if it is the pointwise limit of a sequence of continuous functions. On the real line, an equivalent definition asks that the preimage of each open set be a countable union of closed sets.

**Problem.** Let f be differentiable at every point of the real line. Then its derivative f′ has Baire class one.

**How the definition helps.** Difference quotients supply the continuous approximations required by the definition (our own). Each function x ↦ n(f(x+1/n)−f(x)) is continuous because differentiability implies continuity (our own). At every x these values tend to f′(x) as n tends to infinity (our own).

**Wikipedia:** [Baire function](https://en.wikipedia.org/wiki/Baire_function). It says: “The derivative of any differentiable function is of class 1.”

**Sources:** none listed. No primary source with a working link was found.

### A determinant states Cauchy's mean value theorem without division

**Remember:** Equal slopes become a zero determinant without dividing.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The determinant of two plane vectors (u, v) and (s, t) is ut − vs. It compares their directions by multiplication and subtraction alone.

**Problem.** Let f and g be continuous on \[a, b\] and differentiable on (a, b), with a &lt; b. For some c in (a, b), the vectors (f′(c), g′(c)) and (f(b) − f(a), g(b) − g(a)) have determinant zero.

**How the definition helps.** The determinant compares the tangent and the endpoint displacement even when either vector is zero. In our own proof, take the determinant of (f(t), g(t)) and the fixed endpoint displacement. Its endpoint values agree because their difference is the determinant of that displacement with itself. Rolle’s theorem gives a zero derivative somewhere inside, and differentiating gives the stated determinant.

**nLab:** [mean value theorem](https://ncatlab.org/nlab/show/mean+value+theorem). It says: “f′(c) (g(b) − g(a)) = g′(c) (f(b) − f(a))”

**Sources:** none listed. No primary source with a working link was found.

### Factoring differences gives the derivative of an inverse

**Remember:** Swap the input and output gaps to invert the slope.

*True by definition. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function has derivative m at a if its differences factor as f(x) − f(a) = (x − a)q(x) near a. The factor q must be continuous at a with q(a) = m.

**Problem.** Let f have a continuous inverse on an open interval about f(a). If f′(a) ≠ 0, that inverse is differentiable at f(a) with derivative 1/f′(a).

**How the definition helps.** Factoring the forward difference gives the inverse difference factor 1/q(f⁻¹(y)). Its limit at f(a) equals 1/q(a). Our own local proof uses continuity of the inverse at f(a) and q(a) ≠ 0. Dividing the forward difference by x − a recovers the usual slope limit.

**Paper or page:** [Derivative of Inverse Function](https://proofwiki.org/wiki/Derivative_of_Inverse_Function). It says: “∀ y ∈ Jᵒ: Df⁻¹(y) = 1/Df(x)”

**Sources:** none listed. No primary source with a working link was found.

### Strict differentiability makes a nonzero derivative force local injectivity

**Remember:** Control every nearby chord, not only chords through x.

*True by definition. Confidence: medium.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function f has strict derivative a at x when the slope (f(y) − f(z))/(y − z) tends to a. Here y and z tend to x with y ≠ z. The ordinary derivative keeps one of the two points fixed at x.

**Problem.** Suppose a real function is defined on an open interval containing x and has a nonzero strict derivative there at x. It is one-to-one on some interval around x.

**How the definition helps.** All nearby chord slopes stay within half the magnitude of the nonzero strict derivative from that derivative (our own). Thus no two distinct nearby points have equal values (our own).

**Wikipedia:** [Strict differentiability](https://en.wikipedia.org/wiki/Strict_differentiability). It says: “the definition is made more restrictive by allowing both points used in the difference quotient to "move".”

**Sources:** none listed. No primary source with a working link was found.

### Taylor's small remainder gives the second derivative test

**Remember:** Divide the remainder by the squared step and it tends to zero.

*True by definition.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A second-order Peano remainder is an error r(h) with r(h)/h² → 0 as h → 0.

**Problem.** At an interior point a where f′(a) = 0 and f″(a) exists, f″(a) &gt; 0 gives a strict local minimum. If f″(a) &lt; 0, it gives a strict local maximum.

**How the definition helps.** The Peano remainder becomes negligible after division by h². When f′(a) = 0, Taylor’s theorem gives (f(a + h) − f(a))/h² → f″(a)/2. Since h² is positive for h ≠ 0, the sign of this limit determines the strict extremum when f″(a) ≠ 0. Our own argument uses the Peano expansion in place of a remainder evaluated at an unknown nearby point.

**Wikipedia:** [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem). It says: “This is called the Peano form of the remainder.”

**Sources:**

- [Angelo Genocchi and Giuseppe Peano, Calcolo differenziale e principii di calcolo integrale (1884), note 67, pp. XVII–XIX.](https://archive.org/details/calcolodifferenz00genouoft)

### Caputo derivatives vanish on constants

**Remember:** Differentiate first and the constant is already gone.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; α &lt; 1 and write I(g)(t) = ∫₀ᵗ (t−s)⁻ᵅg(s) ds / Γ(1−α) for t &gt; 0. For continuously differentiable f, its Caputo derivative of order α is I(f′), and its Riemann–Liouville derivative is (I(f))′.

**Problem.** The Caputo derivative of a constant is zero. The Riemann–Liouville derivative of a nonzero constant on positive time is not zero.

**How the definition helps.** The Caputo rule integrates the derivative of a constant, hence integrates zero (our own). For constant c, I(c)(t) = c t¹⁻ᵅ / ((1−α)Γ(1−α)) (our own). Differentiating gives c t⁻ᵅ / Γ(1−α), nonzero when c ≠ 0 (our own).

**Wikipedia:** [Caputo fractional derivative](https://en.wikipedia.org/wiki/Caputo_fractional_derivative). It says: “The Caputo fractional derivative of a constant c is given by”

**Sources:**

- [M. Caputo, Linear Models of Dissipation whose Q is almost Frequency Independent—II (1967)](https://doi.org/10.1111/j.1365-246x.1967.tb02303.x)

### The Henstock integral makes every derivative integrable

**Remember:** Henstock is Riemann with the mesh allowed to vary from point to point.

*Makes the theorem clean to state or prove.* MSC 26A39 (Denjoy and Perron integrals, other special integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A gauge δ assigns each point of \[a,b\] a positive radius. A tagged partition is δ-fine if every piece lies inside the open interval of radius δ(t) centered at its tag t within that piece. The Henstock integral equals I if every ε &gt; 0 admits a gauge making every δ-fine tagged sum differ from I by less than ε.

**Problem.** If f is differentiable on \[a, b\], then f′ is Henstock integrable and its integral from a to b is f(b) − f(a). No further hypothesis on f′ is needed.

**How the definition helps.** At each tag t, differentiability gives a radius within which the linear approximation has error at most ε times the distance from t (our own). Apply the estimate to both endpoints of each piece and sum (our own). The increments telescope to f(b)−f(a), with total error at most ε(b−a) (our own). Cousin’s lemma supplies a fine partition for every gauge (our own).

**nLab:** [Henstock integral](https://ncatlab.org/nlab/show/Henstock+integral). It says: “The Henstock integral satisfies a very nice form of the fundamental theorem of calculus”

**Sources:**

- [Ralph Henstock, Definitions of Riemann type of the variational integrals, Proc. London Math. Soc. (3) 11 (1961) 402–418](https://doi.org/10.1112/plms/s3-11.1.402)

### With the Henstock integral, improper integrals are ordinary integrals

**Remember:** A gauge can shrink near a bad endpoint, so the endpoint needs no special limit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A39 (Denjoy and Perron integrals, other special integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A gauge δ assigns each point of \[a,b\] a positive radius. A tagged partition is δ-fine if every piece lies inside the open interval of radius δ(t) centered at its tag t within that piece. The Henstock integral equals I if every ε &gt; 0 admits a gauge making every δ-fine tagged sum differ from I by less than ε.

**Problem.** Suppose f on \[a,b\] is Henstock integrable on \[a,c\] for every a &lt; c &lt; b. Its Henstock integral on \[a,b\] exists exactly when ∫ₐᶜ f has a finite limit as c increases to b. The integral then equals that limit.

**How the definition helps.** A gauge can be very small near b, so the Henstock integral already deals with the bad endpoint. So what is a definition for the improper Riemann integral is a theorem for the Henstock integral, and no separate definition is needed. The proof of Hake's theorem is the real work.

**nLab:** [Henstock integral](https://ncatlab.org/nlab/show/Henstock+integral). It says: “in the strong sense that if either side exists, then so does the other, and they are equal.”

**Sources:**

- [Heinrich Hake, Über de la Vallée Poussins Ober- und Unterfunktionen einfacher Integrale und die Integraldefinition von Perron, Mathematische Annalen 83 (1921) 119–142 (for the Perron integral, which is equivalent to the Henstock integral)](https://doi.org/10.1007/BF01464233)

### A step integrator makes the integral a weighted point value

**Remember:** Only a piece that carries the jump contributes.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks. A step function with one jump takes one constant value before the jump and another from the jump onward.

**Problem.** Let g be zero before an interior point c and equal to J at and after c. If f is bounded and continuous at c, then ∫ f dg exists and equals Jf(c).

**How the definition helps.** Only the piece carrying the jump can have a nonzero weight (our own). Its sample point tends to c as the longest piece shrinks, so continuity of f supplies convergence (our own). A formula using g′ alone misses the jump, since g′ vanishes away from c (our own).

**Paper or page:** [Riemann-Stieltjes Integral with Step Integrator](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_with_Step_Integrator). It says: “∫ₐᵇ f dα = f(c)(α(b) − α(a))”

**Sources:** none listed. No primary source with a working link was found.

### Continuous changes of values preserve Riemann integrability

**Remember:** Pieces with large changes already have little total length.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f on \[a,b\], its oscillation on each partition piece is its supremum there minus its infimum there. The Darboux gap sums each oscillation times the corresponding piece length. The function is integrable if every ε &gt; 0 admits a finite partition with gap below ε.

**Problem.** Let f be Riemann integrable and let φ be continuous on a closed bounded interval containing the values of f. Then φ composed with f is Riemann integrable.

**How the definition helps.** A small Darboux gap limits the total length of pieces where f varies by more than a fixed positive amount (our own). Uniform continuity of φ keeps the new spreads small on the other pieces (our own). Boundedness of φ controls the contribution from the exceptional pieces (our own). The proof uses uniform continuity on closed bounded intervals and the equivalence with tagged sums (our own).

**Paper or page:** [Condition for Darboux Integrability](https://proofwiki.org/wiki/Condition_for_Darboux_Integrability). It says: “there exists a finite subdivision S of \[a, b\] such that U(S) – L(S) &lt; ε”

**Sources:** none listed. No primary source with a working link was found.

### Continuous Stieltjes weights integrate every monotone function

**Remember:** The spreads of a monotone function add up to its total change.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f and nondecreasing g on \[a,b\], each upper sum uses the supremum of f on every partition piece \[u,v\]. Multiply each supremum by g(v)−g(u) and add, using infima instead for the lower sum. The mesh criterion requires their difference to tend to zero as the longest piece shrinks.

**Problem.** If f is monotone and g is continuous and nondecreasing on a closed interval, the mesh-limit Riemann–Stieltjes integral ∫ f dg exists.

**How the definition helps.** Using upper and lower bounds in place of arbitrary samples gives a weighted gap with one term per piece (our own). For monotone f, its spreads on consecutive pieces add to its absolute change over the whole interval (our own). The gap is therefore at most that change times the largest increment of g (our own). Uniform continuity of g makes this bound vanish, and the weighted gap criterion gives convergence for arbitrary samples (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “if f is of bounded variation and g is continuous”

**Paper or page:** [Monotone Real Function is Darboux Integrable](https://proofwiki.org/wiki/Monotone_Real_Function_is_Darboux_Integrable). It says: “Let f: \[a, b\] → ℝ be a monotone real function. Then f is Darboux integrable over \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### Darboux bounds and tagged Riemann sums give the same integral

**Remember:** The extreme sums trap every choice of sample points.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f on \[a,b\], each finite partition gives rectangle sums using piece lengths as widths. Lower and upper sums use each piece’s infimum and supremum as heights, while tagged sums use values sampled within each piece. Darboux integrability means every ε &gt; 0 admits a partition with upper sum minus lower sum below ε.

**Problem.** A bounded function on a closed interval is Darboux integrable exactly when its tagged Riemann sums converge as the longest piece shrinks. The two values agree.

**How the definition helps.** On any partition the Darboux sums are the greatest lower and least upper bounds of all tagged sums (our own). Thus convergence for every choice of tags forces the Darboux gap to shrink (our own). Conversely, insert the cuts of a fixed partition with small gap into any fine partition (our own). Only pieces crossing those cuts need new samples, and their total length tends to zero (our own).

**Paper or page:** [Equivalence of Definitions of Riemann and Darboux Integrals](https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Riemann_and_Darboux_Integrals). It says: “the Riemann integral of f over \[a, b\] exists and is equal to L”

**Sources:** none listed. No primary source with a working link was found.

### Darboux brackets recover Lebesgue integrals

**Remember:** Squeeze the Lebesgue integral between the two step integrals.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 28A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Darboux construction brackets a bounded function with lower and upper step functions on partitions. Integrability means that the ordinary integrals of these two step functions can differ by arbitrarily little. Riemann’s tagged sums give an equivalent test.

**Problem.** Every Darboux integrable function on a compact interval is Lebesgue integrable with the same integral.

**How the definition helps.** Choose successive common refinements so the upper and lower step bounds are nested and their integral gap tends to zero (our own). Bounded convergence gives limits with equal integrals (our own). The nonnegative difference of the limits therefore vanishes almost everywhere (our own). Completeness of Lebesgue measure makes the sandwiched function measurable, and its integral equals the common Darboux value (our own).

**Paper or page:** [Lebesgue Integral is Extension of Darboux Integral](https://proofwiki.org/wiki/Lebesgue_Integral_is_Extension_of_Darboux_Integral). It says: “Then it is also Lebesgue integrable, and furthermore:”

**Sources:** none listed. No primary source with a working link was found.

### Darboux rectangles show an integrable graph has zero area

**Remember:** The gap is the total area of rectangles covering the graph.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f on \[a,b\], its oscillation on each partition piece is its supremum there minus its infimum there. The Darboux gap sums each oscillation times the corresponding piece length. The function is integrable if every ε &gt; 0 admits a finite partition with gap below ε.

**Problem.** The graph of a Riemann integrable function on a closed interval has Jordan area zero. This means finite rectangle covers of the graph can have arbitrarily small total area.

**How the definition helps.** Each piece gives one covering rectangle from its lowest bound to its highest bound (our own). Thus the total area of the cover is the Darboux gap, even when the function has jumps (our own). The work moves to the equivalence between the small-gap criterion and convergence of tagged sums (our own).

**Wikipedia:** [Darboux integral](https://en.wikipedia.org/wiki/Darboux_integral). It says: “the upper and lower sums add together the areas of rectangular slices”

**Sources:** none listed. No primary source with a working link was found.

### Indicators turn boundary length into a test for integrability

**Remember:** The indicator is discontinuous where both sides are always nearby.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The indicator of a set E is one on E and zero elsewhere. The boundary consists of points whose every neighborhood meets both E and its complement. A set has length zero if countably many intervals can cover it with arbitrarily small total length.

**Problem.** Let E be a bounded set of real numbers inside an open interval (a, b). Its indicator is Riemann integrable on \[a, b\] exactly when its boundary has length zero.

**How the definition helps.** The indicator turns the boundary of E into exactly the set whose every neighborhood contains both indicator values (our own). Off the boundary the indicator is constant on a neighborhood (our own). Lebesgue’s criterion says a bounded function is Riemann integrable exactly when its discontinuities have length zero (our own).

**nLab:** [Jordan content](https://ncatlab.org/nlab/show/Jordan+content). It says: “A Jordan content is a kind of content which may be used to define the Riemann integral of indicator functions over a bounded set”

**Wikipedia:** [Peano–Jordan measure](https://en.wikipedia.org/wiki/Peano%E2%80%93Jordan_measure). It says: “From this it follows that a bounded set is Jordan measurable if and only if its topological boundary has Lebesgue measure zero.”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative Stieltjes weights give an integral mean value theorem

**Remember:** Nonnegative weights keep the average between the two extreme values.

*Rules out counterexamples. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks. A nondecreasing g gives every piece a nonnegative weight.

**Problem.** Suppose f is continuous and g is nondecreasing on \[a, b\]. Some c in \[a, b\] then satisfies ∫ f dg = f(c)(g(b) − g(a)).

**How the definition helps.** Nonnegative weights place every sum between the minimum and maximum of f times the total weight g(b) − g(a) (our own). Continuity of f and monotonicity of g ensure the integral exists (our own). For positive total weight apply the intermediate value theorem to the weighted average, and for zero weight take any c (our own). With f(t) = t and g(t) = t(1 − t) on \[0, 1\], the total weight is zero but the integral is −1/6 (our own).

**Paper or page:** [Riemann-Stieltjes Integral of Constant Integrand](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_of_Constant_Integrand). It says: “∫ₐᵇ f dα = c α(b) − c α(a)”

**Sources:** none listed. No primary source with a working link was found.

### Refinement lets adjacent Stieltjes integrals join at a jump

**Remember:** Keep the joining point in every partition.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Stieltjes sum multiplies each sampled value of f by the change of g across its piece, then adds the products. A refinement keeps all earlier cuts. The refinement integral is L if every tolerance admits a partition whose refinements give sums within that tolerance of L for every sample choice.

**Problem.** Fix a &lt; c &lt; b. If the refinement Stieltjes integrals on \[a, c\] and \[c, b\] exist, their sum is the refinement integral on \[a, b\].

**How the definition helps.** Joining two controlling partitions forces every refinement to keep their common endpoint (our own). Each sum splits there, so the two errors add and can be made arbitrarily small (our own). For comparison, let g be zero through 0 and one thereafter, and let f be one before 0 and zero thereafter (our own). On \[−1, 1\] both half integrals vanish, yet fine partitions crossing zero can give sums of either zero or one (our own).

**Paper or page:** [Sum of Riemann-Stieltjes Integrals on Adjacent Intervals/Part to Whole](https://proofwiki.org/wiki/Sum_of_Riemann-Stieltjes_Integrals_on_Adjacent_Intervals/Part_to_Whole). It says: “Then, f is Riemann-Stieltjes integrable with respect to α on \[a, b\], and:”

**Sources:** none listed. No primary source with a working link was found.

### Refining partitions let some Stieltjes integrals with shared jumps exist

**Remember:** Once a jump point is in the partition, it stays.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a tagged partition, the Stieltjes sum adds f(t)(g(v)−g(u)) over pieces \[u,v\] with tags t ∈ \[u,v\]. Its refinement integral equals I if every ε &gt; 0 admits a partition whose every tagged refinement gives a sum within ε of I.

**Problem.** For a nondecreasing integrator, a refinement integral can exist at a shared jump when the functions are continuous from opposite sides there. A shared interior discontinuity prevents the mesh-limit integral from existing.

**How the definition helps.** For example, let g jump from zero to one immediately after zero, and let f drop from one to zero at zero (our own). Keeping zero as a cut gives only zero products (our own). For a shared interior discontinuity, fine partitions can straddle it where the oscillation of f and the increment of g both stay positive (our own). Two tag choices then keep the sums apart (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “A consequence is that with this definition, the integral ∫ f(x) dg(x) can still be defined in cases where f and g have a point of discontinuity in common.”

**Sources:** none listed. No primary source with a working link was found.

### Small Stieltjes increments isolate finitely many discontinuities

**Remember:** A discontinuity costs little where the integrator hardly grows.

*Rules out counterexamples. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f and nondecreasing g on \[a,b\], each upper sum uses the supremum of f on every partition piece \[u,v\]. Multiply each supremum by g(v)−g(u) and add, using infima instead for the lower sum. The mesh criterion requires their difference to tend to zero as the longest piece shrinks.

**Problem.** Let f be bounded on \[a, b\] and continuous except at finitely many points. If g is nondecreasing and continuous at each of those points, then the mesh-limit Riemann–Stieltjes integral ∫ f dg exists.

**How the definition helps.** Continuity of g lets neighborhoods around the finitely many exceptional points have arbitrarily small total weight (our own). Boundedness of f controls the gap there, while uniform continuity controls spreads outside smaller neighborhoods (our own). On sufficiently fine partitions each piece lies inside a chosen neighborhood or outside all smaller ones (our own). If both functions jump from zero to one at the same interior point, different sample choices can give zero or one (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “if f and g share any points of discontinuity”

**Sources:** none listed. No primary source with a working link was found.

### Smooth Stieltjes increments become ordinary derivative weights

**Remember:** On short pieces the increment is width times a nearby derivative.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks.

**Problem.** Suppose f is bounded, ∫ f dg exists on \[a, b\], and g has a continuous derivative there. Then fg′ is Riemann integrable and its ordinary integral equals ∫ f dg.

**How the definition helps.** The mean value theorem turns each increment of g into the piece length times a nearby value of g′ (our own). Uniform continuity makes the difference between that derivative and its value at the sample uniformly small (our own). The error in the whole sum is at most that difference bound times (b − a) times a bound for \|f\| (our own). Thus ordinary tagged sums for fg′ approach the given Stieltjes integral (our own).

**Paper or page:** [Reduction of Riemann-Stieltjes Integral to Identity Integrator](https://proofwiki.org/wiki/Reduction_of_Riemann-Stieltjes_Integral_to_Identity_Integrator). It says: “Let g : \[a, b\] → ℝ be defined as: g(x) = f(x) α′(x)”

**Sources:** none listed. No primary source with a working link was found.

### Splitting at each tag makes Stieltjes integration by parts telescope

**Remember:** Split at each sample to pair the two sums exactly.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks.

**Problem.** If ∫ f dg exists for bounded f and g on \[a, b\], then ∫ g df exists too. Their sum equals f(b)g(b) − f(a)g(a).

**How the definition helps.** Splitting at the sample pairs two Stieltjes sums whose terms add to the exact change of the product (our own). Given a sample t of g, sample f at the outer endpoint of each positive-length piece created by splitting at t (our own). The product changes add to f(b)g(b) − f(a)g(a), while the refined sum for ∫ f dg approaches its limit (our own). This finite identity takes the place of the derivative product rule (our own).

**Paper or page:** [Integration by Parts/Riemann-Stieltjes Integral](https://proofwiki.org/wiki/Integration_by_Parts/Riemann-Stieltjes_Integral). It says: “∫ₐᵇ f dα + ∫ₐᵇ α df = f(b) α(b) − f(a) α(a)”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes increments follow an increasing change of variable

**Remember:** Move every cut and every sample along the same increasing map.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks.

**Problem.** Let φ be continuous and strictly increasing on \[a, b\], and suppose ∫ f dg exists from φ(a) to φ(b). The integral of f composed with φ against g composed with φ exists on \[a, b\] and equals it.

**How the definition helps.** Mapping the cuts and samples by φ gives exactly the Stieltjes sum on the image partition (our own). Uniform continuity of φ makes the longest image piece shrink with the longest original piece (our own). Ordinary substitution proofs use derivatives, but the equality here already holds for finite sums (our own).

**Paper or page:** [Integration by Substitution/Riemann-Stieltjes Integral/Increasing](https://proofwiki.org/wiki/Integration_by_Substitution/Riemann-Stieltjes_Integral/Increasing). It says: “h is Riemann-Stieltjes integrable with respect to β on \[a, b\]”

**Sources:** none listed. No primary source with a working link was found.

### Strictly increasing integrators make zero area detect the zero function

**Remember:** Every interval of positive length gets positive weight.

*Rules out counterexamples. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks. A strictly increasing g gives every piece of positive length a positive weight.

**Problem.** Let a &lt; b, let f be continuous and nonnegative on \[a, b\], and let g be strictly increasing. If ∫ f dg = 0, then f is zero everywhere.

**How the definition helps.** Continuity turns a positive value of f into a positive lower bound on a whole interval (our own). Strict increase gives that interval positive weight, and nonnegativity prevents cancellation elsewhere (our own). For a counterexample with a flat part, take g(t) = max(0, t − ½) on \[0, 1\] (our own). The continuous function f(t) = max(0, ½ − t) then has integral zero although f(0) is positive (our own).

**Paper or page:** [Riemann-Stieltjes Integral of Constant Integrand](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_of_Constant_Integrand). It says: “∫ₐᵇ f dα = c α(b) − c α(a)”

**Sources:** none listed. No primary source with a working link was found.

### Tagged Stieltjes sums are linear in the integrator

**Remember:** Add the increment weights before or after summing.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks.

**Problem.** Whenever both original integrals exist, taking a linear combination of two integrators gives the same linear combination of their integrals. The same rule holds for two integrands with a fixed integrator.

**How the definition helps.** An increment of a linear combination is the same linear combination of the increments (our own). Taking linear combinations of samples gives the law in the function being integrated (our own). Both identities hold for each tagged sum, so linearity of limits gives the two laws (our own). Weighted upper and lower sums alone use nonnegative weights, so signed combinations need an extension (our own).

**Paper or page:** [Linear Combination of Riemann-Stieltjes Integrals/Integrator](https://proofwiki.org/wiki/Linear_Combination_of_Riemann-Stieltjes_Integrals/Integrator). It says: “∫ₐᵇ f dγ = c₁ A + c₂ B”

**Sources:** none listed. No primary source with a working link was found.

### The Darboux criterion makes the positive part of integrable f integrable

**Remember:** Clipping negative values to zero cannot widen the spread of values on an interval.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For bounded f on \[a,b\], its oscillation on each partition piece is its supremum there minus its infimum there. The Darboux gap sums each oscillation times the corresponding piece length. The function is integrable if every ε &gt; 0 admits a finite partition with gap below ε.

**Problem.** If f is Riemann integrable on \[a, b\], then so is f⁺ = max(f, 0).

**How the definition helps.** The map t ↦ max(t,0) changes distances by at most a factor of one (our own). Hence clipping cannot increase any piece’s oscillation or the Darboux gap (our own). Every partition meeting the criterion for f also works for f⁺, and Darboux and Riemann integrability agree (our own).

**Paper or page:** [Positive Part of Darboux Integrable Function is Integrable](https://proofwiki.org/wiki/Positive_Part_of_Darboux_Integrable_Function_is_Integrable). It says: “Then f⁺ is Darboux integrable over \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.

### The identity integrator recovers the ordinary Riemann integral

**Remember:** The identity function grows by exactly the length of each piece.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On each piece \[u, v\], a Riemann–Stieltjes sum multiplies a sampled value of f by g(v) − g(u). The integral ∫ f dg exists if all such sums approach one value as the longest piece shrinks.

**Problem.** On a closed interval, f is Riemann–Stieltjes integrable with respect to g(x) = x exactly when it is Riemann integrable. The integrals agree.

**How the definition helps.** Each increment g(v) − g(u) is the ordinary width v − u, making the tagged sums identical (our own). Thus existence and equality reduce to the same limit without an extra comparison theorem (our own). The underlying convergence question remains ordinary Riemann integrability (our own).

**Paper or page:** [Riemann-Stieltjes Integral by Norm of Subdivision/Riemann Integral](https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_by_Norm_of_Subdivision/Riemann_Integral). It says: “∫ₐᵇ f dι = ∫ₐᵇ f(x) dx”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues (1894), pp. J1–J122](https://doi.org/10.5802/afst.108)

### The regulated integral, extended from step functions, passes to uniform limits

**Remember:** Integrate steps, then extend by continuity.

*True by definition.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 40A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A regulated function on \[a, b\] is a uniform limit of step functions. Its integral is the limit of the integrals of the step functions. Bourbaki and Dieudonné advocated this integral instead of the Riemann integral.

**Problem.** The integral of a regulated function exists and does not depend on the approximating sequence. The integral of a uniform limit of regulated functions is the limit of their integrals.

**How the definition helps.** The integral on step functions is a bounded linear map, so it extends uniquely to the closure of the step functions. Existence and independence of the sequence are then one theorem from functional analysis. Passing to uniform limits is built into the definition. The cost is a smaller class than the Riemann integrable functions.

**Wikipedia:** [Regulated integral](https://en.wikipedia.org/wiki/Regulated_integral). It says: “One must check that this limit exists and is independent of the chosen sequence, but this is an immediate consequence of the continuous linear extension theorem of elementary functional analysis”

**Sources:**

- [S. K. Berberian, Regulated functions: Bourbaki's alternative to the Riemann integral, The American Mathematical Monthly 86 (1979)](https://doi.org/10.1080/00029890.1979.11994771)

### The Stieltjes integral gives one expectation formula for every distribution

**Remember:** Integrate against how much g grows, not against how long the interval is.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 60E05, 46E15. arXiv math.CA, math.PR. Level 2: later undergraduate.

**Definition.** On \[a,b\], a Stieltjes sum adds f(t)(g(v)−g(u)) over partition pieces \[u,v\], with any tag t in each piece. The integral is the common limit of all such sums as the largest piece length tends to zero. On ℝ, take the two improper limits separately at −∞ and +∞.

**Problem.** Let X have distribution function g, and let f be Borel measurable with E\[\|f(X)\|\] finite. Whenever its improper Riemann–Stieltjes integral exists, E\[f(X)\] = ∫ f dg for every such distribution.

**How the definition helps.** Each increment g(v)−g(u) is the probability of u &lt; X ≤ v, regardless of the distribution type (our own). On finite intervals, expectations over those pieces lie between lower and upper Stieltjes sums, which converge together when the integral exists (our own). Absolute integrability lets the finite-interval expectations converge to E\[f(X)\] (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “holds if g is any cumulative probability distribution function on the real line, no matter how ill-behaved.”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues, Ann. Fac. Sci. Toulouse 8 (1894), J1–J122](http://www.numdam.org/item?id=AFST_1894_1_8_4_J1_0)

### The supremum norm gives a sharp bound on the integral

**Remember:** Bound every rectangle height by the supremum of the absolute value.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The supremum norm of f is the least upper bound of \|f\| on the interval. The Darboux integral of an integrable function lies between all its lower and upper sums.

**Problem.** For Riemann integrable f on \[a, b\], the absolute value of its integral is at most (b − a) times its supremum norm. Integration is therefore continuous, and the constant function one attains equality.

**How the definition helps.** The two constant functions with values plus and minus the supremum norm bound every Darboux sum (our own). The constant function one gives equality, so no smaller bound is possible (our own). Linearity of tagged sums and the equivalence with Darboux integration supply the remaining facts (our own).

**Paper or page:** [Riemann Integral Operator is Continuous Linear Transformation](https://proofwiki.org/wiki/Riemann_Integral_Operator_is_Continuous_Linear_Transformation). It says: “Then T is a continuous mapping.”

**Sources:** none listed. No primary source with a working link was found.

### Total variation bounds the cost of resampling a Stieltjes sum

**Remember:** Total variation bounds the sum of the absolute weights.

*True by definition. Confidence: medium.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 26A45. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The total variation of g is the least upper bound of the sums of its absolute increments over all partitions. Bounded variation means that this bound is finite. Stieltjes sums weight each sample of f by the corresponding increment of g.

**Problem.** Every continuous f on \[a, b\] has a Riemann–Stieltjes integral against any g of bounded variation there. Its absolute value is at most the maximum of \|f\| times the total variation of g.

**How the definition helps.** Total variation bounds the sum of the absolute weights on every refinement (our own). Refining a partition changes its sum by at most the total variation times the largest spread of f on an original piece (our own). Two fine partitions have a common refinement, so uniform continuity makes their sums arbitrarily close (our own). Completeness gives the integral, and the same absolute weight bound gives its size (our own).

**Wikipedia:** [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “if f is continuous and g is of bounded variation”

**Sources:** none listed. No primary source with a working link was found.

### Arc length as a polygon supremum ignores every reparametrization

**Remember:** Changing the clock does not change the ordered points the path visits.

*True by definition. Confidence: medium.* MSC 26A45 (Functions of bounded variation, generalizations), 53A04. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the length of a continuous path γ on \[a, b\] as the supremum of polygon lengths. Each polygon joins γ(t₀), …, γ(tₖ) for a partition a = t₀ &lt; … &lt; tₖ = b. For a continuously differentiable path, the other definition integrates the speed \|γ′(t)\|.

**Problem.** Let φ map \[c, d\] onto \[a, b\], and let φ be continuous and strictly increasing. Then the paths γ and γ ∘ φ have the same length.

**How the definition helps.** The increasing bijection φ and its inverse carry partitions to partitions in both directions (our own). Corresponding partitions visit the same points in order, so their polygons have equal lengths (our own). Taking suprema gives equal path lengths (our own).

**Wikipedia:** [Arc length](https://en.wikipedia.org/wiki/Arc_length). It says: “The arc length of the curve is the same regardless of the parameterization used to define the curve.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded variation extends Dirichlet's Fourier test to more functions

**Remember:** Bounded variation means a difference of two monotone functions.

*Makes the theorem clean to state or prove.* MSC 26A45 (Functions of bounded variation, generalizations), 42A20. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f on \[a,b\] has bounded variation when the sums Σ\|f(xᵢ) − f(xᵢ₋₁)\| over all partitions of \[a,b\] are bounded. In words, the total up-and-down movement of f is finite. Jordan's theorem says that this holds exactly when f is the difference of two non-decreasing functions.

**Problem.** Let f be 2π-periodic and of bounded variation on a period. Then the Fourier series of f converges at every point x to (f(x+) + f(x−))/2. This value is the average of the limits of f from the right and from the left.

**How the definition helps.** A function of bounded variation is a difference of monotone functions, so a result for monotone functions carries over to it. Dirichlet proved convergence for piecewise monotone functions. The partial sums of a Fourier series depend linearly on the function, so his result passes to differences at once (our own remark). Jordan introduced bounded variation for exactly this extension.

**Wikipedia:** [Dirichlet–Jordan test](https://en.wikipedia.org/wiki/Dirichlet%E2%80%93Jordan_test), [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “It was extended in the late 19th century by Camille Jordan to functions of bounded variation in each period (any function of bounded variation is the difference of two monotonically increasing functions).”

**Sources:**

- [P. G. L. Dirichlet, Sur la convergence des séries trigonométriques qui servent à représenter une fonction arbitraire entre des limites données, J. reine angew. Math. 4 (1829), 157–169, doi:10.1515/crll.1829.4.157](https://doi.org/10.1515/crll.1829.4.157)

### Lower bounds control reciprocal variation

**Remember:** Keep every denominator away from zero before you sum the increments.

*Rules out counterexamples.* MSC 26A45 (Functions of bounded variation, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Total variation takes the supremum of sums of absolute increments over finite partitions. A function bounded away from zero has \|f(x)\| ≥ M for one M &gt; 0. This is stronger than never taking the value zero.

**Problem.** Let f have bounded variation on a closed interval and satisfy \|f\| ≥ M &gt; 0. Then 1/f has variation at most that of f divided by M².

**How the definition helps.** Each absolute reciprocal difference equals \|f(y)−f(x)\|/\|f(x)f(y)\|, at most \|f(y)−f(x)\|/M² (our own). Summing over each partition and taking the supremum proves the bound (our own). On \[0,1\], set f(0)=1 and f(x)=x for x&gt;0 (our own). This function has bounded variation but its reciprocal is unbounded (our own).

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

*Makes the theorem clean to state or prove.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A42. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f on \[a,b\] is absolutely continuous if, for every ε &gt; 0, there is a δ &gt; 0 with this property. For every finite family of disjoint subintervals (xᵢ, yᵢ) with total length Σ(yᵢ − xᵢ) &lt; δ, we have Σ\|f(yᵢ) − f(xᵢ)\| &lt; ε. In words, intervals of small total length give a small total change in f.

**Problem.** If f is absolutely continuous on \[a,b\], then f′ exists almost everywhere. For every x in \[a,b\], f(x) = f(a) + ∫ₐˣ f′(t) dt.

**How the definition helps.** Absolute continuity controls total change on short interval families, including those covering a null set (our own). The Cantor function gains one across the surviving intervals at each stage although their total length tends to zero (our own). The fundamental theorem for absolutely continuous functions supplies both almost-everywhere differentiability and recovery by integrating the derivative (our own).

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

**Definition.** Let f and g have real power series with coefficients aₙ and bₙ, common positive radius r, and every bₙ &gt; 0. For 0 &lt; x &lt; r, assign each index n probability bₙxⁿ/g(x). The mean of aₙ/bₙ with these probabilities equals f(x)/g(x).

**Problem.** If the coefficient ratios never decrease, then f(x)/g(x) never decreases on (0,r).

**How the definition helps.** Differentiating the weighted mean and pairing indices i &lt; j gives nonnegative contributions when the ratios are nondecreasing (our own). Each contribution is (j−i)(aⱼ/bⱼ−aᵢ/bᵢ)bᵢbⱼxⁱ⁺ʲ⁻¹/g(x)² (our own). For f(x)=1/(1−x) and g(x)=1/(1−x)², the ratios instead decrease, and so does f/g=1−x (our own).

**Paper or page:** [On Kaluza's sign criterion for reciprocal power series](https://arxiv.org/abs/1010.5337v3). It says: “Then the function x ↦ f(x)/g(x) is increasing (decreasing) on (0,r) if the sequence {aₙ/bₙ} is increasing (decreasing).”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint jump intervals make monotone discontinuities countable

**Remember:** Each jump gets a different rational number.

*True by definition.* MSC 26A48 (Monotonic functions, generalizations), 26A15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** At an interior point of a monotone real function, the jump interval is the open interval between its left and right limits. It is empty when the limits agree.

**Problem.** A monotone real function on an interval has at most countably many interior discontinuities. Each occurs where the jump interval is nonempty.

**How the definition helps.** Recording each jump as an interval gives it room for a rational number. Monotonicity makes different jump intervals disjoint, so the rationals chosen for them are distinct. The one-sided limits exist and bracket the function value, so the nonempty intervals account for every interior discontinuity. Our own comparison uses the whole interval between the limits in place of the numerical jump size.

**Wikipedia:** [Discontinuities of monotone functions](https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions). It says: “all discontinuities of such a (monotone) function are necessarily jump discontinuities and there are at most countably many of them.”

**Sources:** none listed. No primary source with a working link was found.

### Continuity upgrades midpoint convexity

**Remember:** Repeatedly halve the interval, then use continuity to fill the gaps.

*Rules out counterexamples.* MSC 26A51 (Convexity of real functions in one variable, generalizations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real function f on an interval is midpoint-convex if f((x+y)/2) ≤ (f(x)+f(y))/2 for every pair x,y in the interval.

**Problem.** A continuous midpoint-convex function on a real interval is convex.

**How the definition helps.** Iteration gives the chord inequality for every dyadic weight, and continuity extends it to every weight by density (our own). Without continuity, choose a rational-linear map ℝ → ℝ that is not a real scalar multiple of the identity (our own). It has midpoint equality but is discontinuous, whereas every finite convex function on ℝ is continuous (our own).

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

**Remember:** On a logarithmic scale, every chord lies above the graph.

*Rules out counterexamples. Confidence: medium.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive real function on an interval is log-convex if its logarithm is convex there.

**Problem.** The gamma function is the only positive function f on x &gt; 0 with three properties. The properties are f(1) = 1, f(x + 1) = x·f(x), and f is log-convex.

**How the definition helps.** Convexity of log f bounds its secant slopes between neighboring integer slopes, which the recurrence fixes (our own). For 0 &lt; x ≤ 1 and n ≥ 2, this gives (n−1)ˣ ≤ f(n+x)/f(n) ≤ nˣ (our own). The recurrence expresses the middle term using f(x), and the bounds have ratio tending to one, giving uniqueness (our own). The gamma function satisfies the conditions, whereas a nonconstant positive period-one multiplier preserving f(1) breaks log-convexity (our own).

**Wikipedia:** [Bohr–Mollerup theorem](https://en.wikipedia.org/wiki/Bohr%E2%80%93Mollerup_theorem). It says: “Therefore, there is no other function defined on x &gt; 0 with all the properties assigned to Γ(x).”

**Sources:** none listed. No primary source with a working link was found.

### Ordered secants give convex functions a local Lipschitz bound

**Remember:** Two outer secants bound all the slopes between them.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For three increasing inputs, compare the slopes between successive graph points. A function on an interval is convex if the first slope never exceeds the second. This rearranges the usual inequality that places the graph below each chord.

**Problem.** A convex real function on an open interval is Lipschitz on each closed bounded subinterval inside it. This means one constant bounds every absolute change in value divided by the distance between distinct inputs in that subinterval.

**How the definition helps.** Two outer secants bound every slope in the chosen subinterval by convexity (our own). Choose one extra point beyond each endpoint and join it to its nearer endpoint (our own). The larger absolute outer slope is then a Lipschitz constant for the entire subinterval (our own).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “If f : (a, b) → ℝ is convex and u &lt; v &lt; w ∈ (a, b), then (f(u) − f(v))/(u − v) ≤ (f(u) − f(w))/(u − w) ≤ (f(v) − f(w))/(v − w).”

**Paper or page:** [Convex Real Function is Continuous](https://proofwiki.org/wiki/Convex_Real_Function_is_Continuous). It says: “Then f is continuous on (a, b).”

**Sources:** none listed. No primary source with a working link was found.

### Ordered slopes make differentiable convex functions continuously differentiable

**Remember:** Trap nearby derivatives between slopes on either side.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A secant slope is the change in function value divided by the change in input between two distinct points. Convexity on an interval means that for any three increasing inputs the first secant slope is at most the second.

**Problem.** If a real convex function on an open interval is differentiable everywhere, its derivative is continuous there.

**How the definition helps.** Ordered secants bound nearby derivatives between slopes that approach the derivative at the point. Fix u &lt; a &lt; v and take u &lt; x &lt; v. Letting a secant endpoint approach x bounds f′(x) between the slopes from u to x and from x to v. Our own proof first lets x approach a, then brings u and v toward a, using the slope form of the chord inequality.

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “If a function is differentiable and convex then it is also continuously differentiable.”

**Sources:** none listed. No primary source with a working link was found.

### Sums preserve log-convexity

**Remember:** Apply Hölder to the geometric means of the endpoint values.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive function is log-convex when its logarithm is convex. Equivalently, its value at a weighted mean is no greater than the weighted geometric mean of the endpoint values.

**Problem.** Any finite sum of positive log-convex functions on a real interval is log-convex.

**How the definition helps.** Apply the log-convexity bound to each summand and add (our own). For weights t and 1−t strictly between zero and one, Hölder’s inequality with exponents 1/t and 1/(1−t) combines the bounds (our own). The result is the weighted geometric mean of the endpoint sums, with equality automatic at t=0 and t=1 (our own).

**Wikipedia:** [Logarithmically convex function](https://en.wikipedia.org/wiki/Logarithmically_convex_function). It says: “log ∘ f is convex”

**Sources:** none listed. No primary source with a working link was found.

### Supporting tangents show when a derivative is nondecreasing

**Remember:** Two supporting tangents trap the secant slope between their slopes.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a differentiable function on an open interval, define convexity by requiring every tangent line to lie below the graph. The usual chord definition requires the graph to lie below every chord.

**Problem.** A differentiable real function on an open interval is convex exactly when its derivative is nondecreasing.

**How the definition helps.** The two tangent inequalities trap the slope between two graph points between their derivatives. In our own reverse argument, the mean value theorem places that slope between the derivatives whenever the derivative is nondecreasing. This gives both tangent inequalities. The geometric work lies in proving that the tangent and chord definitions agree.

**Paper or page:** [Tangent Line to Convex Graph](https://proofwiki.org/wiki/Tangent_Line_to_Convex_Graph). It says: “Then all the tangent lines to f are below the graph of f.”

**Sources:** none listed. No primary source with a working link was found.

### Continuous partial derivatives give a total derivative

**Remember:** Each coordinate slope must approach its value at the point.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a real function f on an open subset of ℝⁿ, the ith partial derivative at x is the limit of (f(x+teᵢ)−f(x))/t as t→0. Here eᵢ is the ith coordinate unit vector. Continuity at a means ∂ᵢf(x) tends to ∂ᵢf(a) as x tends to a.

**Problem.** If all first partial derivatives exist near a and are continuous at a, the total derivative at a exists. Its matrix consists of those partial derivatives at a.

**How the definition helps.** Continuity keeps slopes on each short coordinate segment close to their values at a. Our own proof splits the step into coordinate segments and applies the one-variable mean value theorem on each. Without continuity, xy/(x²+y²), assigned zero at the origin, has both partial derivatives there but is discontinuous.

**Paper or page:** [Diffgeo: Multivar](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let f : U → ℝ and suppose that ∂f/∂eᵢ is defined for each i and moreover is continuous. Then f is differentiable”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-8](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Continuous total derivatives stay continuous under composition

**Remember:** Continuous derivative matrices can be multiplied without losing continuity.

*True by definition.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function is continuously differentiable, or C¹, when its total derivative varies continuously as a linear map. In finite dimensions this means continuity of each entry of its matrix.

**Problem.** The composition of two C¹ maps between open sets in Euclidean spaces is C¹ wherever it is defined.

**How the definition helps.** Viewing the derivative as one continuous matrix replaces a separate continuity proof for each partial derivative. The chain rule gives the matrix product Dg(f(x))Df(x). In our own argument, continuity of f and of matrix multiplication gives continuity of that product.

**nLab:** [Jacobian](https://ncatlab.org/nlab/show/Jacobian). It says: “The chain rule may be phrased by saying that the Jacobian matrix of the composition”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-2](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Linear approximations compose by the chain rule

**Remember:** Compose the two linear approximations in the same order as the functions.

*True by definition.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a map f between Euclidean spaces defined near a, its total derivative at a is a linear map L satisfying a limit condition. As nonzero h tends to zero, ‖f(a+h)−f(a)−Lh‖/‖h‖ tends to zero.

**Problem.** If f is differentiable at a and g at f(a), then g∘f is differentiable at a. Its total derivative is Dg(f(a))∘Df(a).

**How the definition helps.** Using linear approximations makes the chain rule a composition of maps instead of a sum for each coordinate. In our own proof the inner change is bounded by a constant times the original step length. Thus both approximation errors, divided by the original step length, tend to zero.

**Paper or page:** [Derivative of Composite Function/Jacobians](https://proofwiki.org/wiki/Derivative_of_Composite_Function/Jacobians). It says: “The Jacobian matrix of a composite function g ∘ f is obtained by multiplying the Jacobian matrices of f and g”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-2](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Only degenerate critical points can leave the Hessian test undecided

**Remember:** With no zero eigenvalues, the quadratic term settles the test.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A critical point is a point where the first derivative vanishes. It is nondegenerate if its Hessian, the matrix of second partial derivatives, has no zero eigenvalue.

**Problem.** At a nondegenerate critical point of a C² real function, a Hessian with only positive eigenvalues gives a strict local minimum. Only negative eigenvalues give a strict local maximum, and mixed signs give a saddle point.

**How the definition helps.** Excluding zero eigenvalues makes the quadratic Taylor term decide the type of critical point. In our own proof, a definite quadratic term dominates the smaller remainder uniformly in direction. With mixed signs, two eigenvectors give directions of increase and decrease. Our own examples x⁴+y⁴, −x⁴−y⁴ and x⁴−y⁴ give all three outcomes with identical zero Hessians.

**Wikipedia:** [Second partial derivative test](https://en.wikipedia.org/wiki/Second_partial_derivative_test). It says: “The following test can be applied at any critical point a for which the Hessian matrix is invertible”

**Sources:** none listed. No primary source with a working link was found.

### Repeated directions turn Taylor expansion into one variable

**Remember:** Use the same step twice to read the quadratic term.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The second total derivative D²f(a) is the derivative of the map x ↦ Df(x). It acts on two vectors and is linear in each. A C² function has continuous derivatives through order two.

**Problem.** For a C² function, the second-order Taylor polynomial is f(a) + Df(a)h + ½D²f(a)(h,h). The error divided by ‖h‖² tends to zero as h tends to zero.

**How the definition helps.** Treating the second derivative as a map of two vectors collects all mixed partial derivatives into one term. Our own proof applies the one-variable Taylor theorem along the line t ↦ a+th. The chain rule inserts h into both inputs of the second derivative. Its continuity gives the stated error bound.

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “The Taylor polynomials of a differentiable function approximate it by polynomial functions”

**Sources:** none listed. No primary source with a working link was found.

### Uniform difference quotients let a parameter derivative pass through an integral

**Remember:** Control every slice at once before passing the limit through.

*Makes the theorem clean to state or prove.* MSC 26B05 (Continuity and differentiation questions), 26B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For fixed x and h ≠ 0, set Qₕ(y) = (f(x+h,y) − f(x,y))/h. These quotients converge uniformly to ∂ₓf when sup<sub>y</sub> \|Qₕ(y) − ∂ₓf(x,y)\| tends to zero as h → 0. The supremum covers the whole integration interval.

**Problem.** Suppose f and its partial derivative in x are continuous on a closed rectangle. At interior x, the derivative of ∫ f(x,y) dy is ∫ (∂f/∂x)(x,y) dy, over the same fixed y interval.

**How the definition helps.** Uniform convergence bounds the integral error by the interval length times one error bound. In our own proof the mean value theorem expresses each quotient as a partial derivative at a nearby point. Uniform continuity of that derivative on the closed rectangle gives the common bound.

**Wikipedia:** [Leibniz integral rule](https://en.wikipedia.org/wiki/Leibniz_integral_rule). It says: “so we can take the limit where h approaches zero.”

**Paper or page:** [Definite Integral of Partial Derivative](https://proofwiki.org/wiki/Definite_Integral_of_Partial_Derivative). It says: “Let f(x, y) and (∂f/∂x)(x, y) be continuous functions of x and y”

**Sources:** none listed. No primary source with a working link was found.

### A differentiable inverse has the inverse derivative

**Remember:** A bijection and its inverse both have continuous first derivatives.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A C¹ diffeomorphism is a bijection between open sets whose forward and inverse maps both have continuous first derivatives.

**Problem.** For a C¹ diffeomorphism f the derivative Df(a) is invertible. The derivative of the inverse at f(a) is the inverse linear map of Df(a).

**How the definition helps.** A differentiable inverse lets us apply the chain rule to both inverse identities. Their derivatives show that the two derivative maps undo each other. In our own counterexample, x ↦ x³ is a smooth bijection, but its derivative vanishes at zero and its inverse has no derivative there.

**Wikipedia:** [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem). It says: “the existence and differentiability of f⁻¹”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-11 and its proof](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### An absolute Jacobian makes substitution independent of orientation

**Remember:** Reversing an axis changes orientation, not volume.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables), 26B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a C¹ coordinate change g, use the absolute Jacobian determinant Jg = \|det Dg\| as the local volume factor. The signed determinant can be negative when g reverses orientation.

**Problem.** Let g be a one-to-one C¹ map between Euclidean spaces of equal dimension, with open domain and invertible derivative everywhere. For continuous f supported on a compact subset of the image, integrating f there gives the domain integral of (f∘g)Jg.

**How the definition helps.** Our own reflection across a coordinate plane would give negative volume with the signed determinant. The absolute value gives the same substitution formula for either orientation. The change-of-variables proof must still pass from exact volume scaling for linear maps to variable derivatives.

**Wikipedia:** [Integration by substitution](https://en.wikipedia.org/wiki/Integration_by_substitution). It says: “the absolute value of the determinant of a matrix equals the volume of the parallelotope spanned by its columns or rows.”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 3-13](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Constant rank rules out extra output directions nearby

**Remember:** Keep the rank fixed and no extra output direction can appear.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The rank of a derivative is the dimension of its image. A map has constant rank near a point when this number stays fixed throughout some neighborhood of the point.

**Problem.** A continuously differentiable map of constant rank r locally has the form (x₁,…,xᵣ,0,…,0) after continuously differentiable changes of input and output coordinates.

**How the definition helps.** Our own proof uses the inverse function theorem to make r independent outputs into input coordinates. Constant rank then forces the remaining outputs to depend only on those coordinates, so subtracting them straightens the image. Our own counterexample (x,y) ↦ (x,y²) has rank one at the origin and rank two nearby when y ≠ 0.

**Wikipedia:** [Rank (differential topology)](https://en.wikipedia.org/wiki/Rank_%28differential_topology%29). It says: “Constant rank maps have a nice description in terms of local coordinates.”

**Sources:**

- [Walter Rudin, Principles of Mathematical Analysis, 3rd ed. (1976), Theorem 9.32](https://david92jackson.neocities.org/images/Principles_of_Mathematical_Analysis-Rudin.pdf)

### Continuous derivatives rule out oscillation that defeats local inversion

**Remember:** Continuity keeps nearby linear approximations close to the one you can invert.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A map is C¹ if its total derivative exists near the point and varies continuously there. This is stronger than having a derivative at each point.

**Problem.** A C¹ map between open sets of the same Euclidean dimension has a local C¹ inverse wherever its total derivative is invertible.

**How the definition helps.** Continuity keeps nearby derivatives close to the invertible derivative at the chosen point. After a linear change of coordinates, the contraction mapping theorem gives a unique nearby input for each nearby output. Our own example is (x,y) ↦ (x + 2x² sin(1/x), y), with first component zero at x = 0. Its derivative at the origin is the identity, but sign changes in the first component’s slope prevent local injectivity.

**Wikipedia:** [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem). It says: “the function should also be invertible near that point”

**Sources:**

- [Michael Spivak, Calculus on Manifolds (1965), Theorem 2-11](https://web.math.ucsb.edu/~bigelow/books/spivak.pdf)

### Defining smoothness recursively gives the inverse the same regularity

**Remember:** Each derivative lowers the smoothness order by one, down to continuity.

*True by definition.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an integer k greater than one, a map is Cᵏ when its total derivative is Cᵏ⁻¹. A C¹ map has a continuous total derivative.

**Problem.** If a Cᵏ map between open sets of the same Euclidean dimension has an invertible derivative at a point, its local inverse is Cᵏ.

**How the definition helps.** Defining smoothness through the derivative lets us raise the inverse’s regularity one order at a time without expanding higher partial derivatives. The inverse function theorem supplies a C¹ inverse g and the identity Dg = (Df∘g)⁻¹. In our own induction, composition and smooth matrix inversion preserve each available derivative order up to k−1. The recursive definition then gives the next order for g.

**Wikipedia:** [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem). It says: “the same is true for the inverse function.”

**Sources:** none listed. No primary source with a working link was found.

### Independent constraint gradients make Lagrange multipliers unique

**Remember:** Independent gradients give only one set of weights.

*Rules out counterexamples.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A gradient is the vector of first partial derivatives. Equality constraints are regular at a point if their gradients there are linearly independent. Lagrange multipliers are coefficients expressing the objective gradient as a linear combination of the constraint gradients.

**Problem.** At a local extremum of a C¹ objective under regular C¹ equality constraints, the Lagrange multiplier vector exists and is unique.

**How the definition helps.** Linear independence makes the coefficients in the gradient equation unique. The Lagrange multiplier theorem gives their existence. In our own example, minimize y subject to y = 0 and 2y = 0. Both (1,0) and (0,½) satisfy the multiplier equation.

**Wikipedia:** [Lagrange multiplier](https://en.wikipedia.org/wiki/Lagrange_multiplier). It says: “The constraint qualification assumption when there are multiple constraints is that the constraint gradients at the relevant point are linearly independent.”

**Sources:** none listed. No primary source with a working link was found.

### The derivative kernel gives tangents to regular level sets

**Remember:** Feasible velocities are exactly the steps the constraint derivative sends to zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A tangent vector at a is the velocity of a differentiable curve through a that stays in the level set. A level is regular if the derivative maps onto the output space at every point of that level.

**Problem.** On a regular level F = c of a C¹ map, the tangent vectors at a are exactly the vectors v with DF(a)v = 0.

**How the definition helps.** Taking curve velocities makes the tangent condition an equation obtained by differentiating the constant value along the curve. Our own proof of the converse uses the implicit function theorem to write the level set locally as a graph. Straight lines in the free coordinates then give curves with every velocity that satisfies the equation.

**nLab:** [Lagrange multiplier](https://ncatlab.org/nlab/show/Lagrange+multiplier). It says: “and such that dGₓ is surjective for each x ∈ S.”

**Sources:** none listed. No primary source with a working link was found.

### The Lagrangian Hessian gives the second derivative along constraints

**Remember:** Subtract the constraints before taking second derivatives on feasible steps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B10 (Implicit function theorems, Jacobians, transformations with several variables), 26B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For equality constraints G(x) = 0 and a multiplier vector λ, the Lagrangian is L(x) = f(x) − λ·G(x).

**Problem.** Let a be a constrained critical point of C² data, with DG(a) surjective and λ chosen so DL(a) = 0. Along every C² constraint curve through a with velocity v, the second derivative of f there equals D²L(a)\[v,v\]. Positivity on every nonzero tangent gives a strict constrained local minimum.

**How the definition helps.** The Lagrangian equals f on the constraint, and its zero derivative removes the curve’s acceleration from the second derivative formula. Our own argument uses twice continuously differentiable constraint curves. The implicit function theorem supplies local coordinates where the ordinary second derivative test proves the minimum.

**nLab:** [Lagrange multiplier](https://ncatlab.org/nlab/show/Lagrange+multiplier). It says: “there is a function(al) l in Y\* such that x is a critical point of the function F − l∘G”

**Wikipedia:** [Hessian matrix](https://en.wikipedia.org/wiki/Hessian_matrix). It says: “The second derivative test consists here of sign restrictions of the determinants”

**Sources:** none listed. No primary source with a working link was found.

### The operator norm gives a vector mean value bound

**Remember:** Bound the largest stretch and you bound the whole change.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26B12 (Calculus of vector functions), 26B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let A be a linear map between Euclidean spaces. Its operator norm ‖A‖ is the greatest length of Av over vectors v of length at most one.

**Problem.** Let f be differentiable on an open set containing the segment from a to b. If ‖Df‖ ≤ M on that segment, then ‖f(b) − f(a)‖ ≤ M‖b − a‖.

**How the definition helps.** The operator norm bounds the change in every direction by one number. In our own proof, project onto the direction of f(b) − f(a) when this difference is nonzero. The ordinary mean value theorem bounds the projected change along the segment, which equals the length we need.

**nLab:** [operator norm](https://ncatlab.org/nlab/show/operator+norm). It says: “the supremum of the norms of A-images of unit-norm vectors v ∈ V”

**Sources:** none listed. No primary source with a working link was found.

### Divergence of the gradient puts Green’s identities in product form

**Remember:** Put the product of a function and a gradient into the divergence theorem.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the Laplacian Δv as the divergence of the gradient ∇v. The normal derivative ∂ₙv is the dot product of ∇v with the outward unit normal n.

**Problem.** Take functions u and v smooth up to the boundary of a smooth bounded region. The boundary integrals of u∂ₙv and u∂ₙv − v∂ₙu equal the interior integrals of uΔv + ∇u·∇v and uΔv − vΔu, respectively.

**How the definition helps.** Defining the Laplacian through divergence puts uΔv inside the product rule for div(u∇v), without expanding second derivatives (our own). The divergence theorem converts this product’s outward flux to its interior integral (our own). Exchanging u and v and subtracting cancels the gradient dot products (our own).

**Paper or page:** [Divergence of Product of Scalar Field with Gradient of Scalar Field](https://proofwiki.org/wiki/Divergence_of_Product_of_Scalar_Field_with_Gradient_of_Scalar_Field). It says: “div(U grad W) = U∇²W + (grad U) · (grad W)”

**Sources:** none listed. No primary source with a working link was found.

### Flux forms make divergence the limit of average outward flux

**Remember:** Outward flux divided by volume averages divergence over the region.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a smooth field F in ℝ³, its flux form β sends vectors u,v to det(F,u,v). Define divergence as the scalar coefficient of dβ relative to the usual volume form instead of summing coordinate derivatives.

**Problem.** Let smooth bounded regions of positive volume lie inside balls centered at p whose radii tend to zero. For a smooth field near p, outward flux divided by volume tends to the divergence at p.

**How the definition helps.** Defining divergence through the flux form makes outward flux equal to the integral of divergence by Stokes’s theorem (our own). Dividing by volume gives an average, which tends to the value at p by continuity (our own). A coordinate calculation identifies this definition with the sum of the three partial derivatives (our own).

**nLab:** [divergence](https://ncatlab.org/nlab/show/divergence). It says: “The formula does not depend on the shape of boundaries taken in limiting process”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected domains give curl-free fields potentials

**Remember:** A loop that can shrink has no circulation in a curl-free field.

*Rules out counterexamples.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A domain is simply connected if it is path connected and every loop can shrink to a point inside the domain. A potential for a vector field is a function whose gradient is that field.

**Problem.** On a simply connected open subset of ℝ³, every continuously differentiable vector field with zero curl has a potential.

**How the definition helps.** Every loop contracts, and Stokes’s theorem on a smooth contraction makes its circulation zero (our own). Passing from a continuous contraction to a smooth one takes a smoothing theorem (our own). Integrating from a fixed point then gives a path-independent function whose gradient is the field. Off the z-axis, (−y,x,0)/(x² + y²) has zero curl but circulation 2π around the counterclockwise unit circle viewed from above (our own).

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “a closed differential 1-form ω is exact, with potential function given at x ∈ X by the integral of ω from any fixed base point along any smooth path to x.”

**Sources:** none listed. No primary source with a working link was found.

### Small disk circulation recovers the normal component of curl

**Remember:** Circulation per unit area averages the normal component of curl.

*True by definition.* MSC 26B20 (Integral formulas of real functions of several variables (Stokes, Gauss, Green, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a smooth field F in oriented Euclidean three-space, let α(u) = F · u. Define curl by dα(u,v) = det(curl F,u,v), where d is the exterior derivative and the determinant measures signed volume.

**Problem.** Take disks centered at p with unit normal n and traverse their boundaries counterclockwise as seen from the tip of n. As their radii shrink, the line integral of F divided by disk area tends to curl F(p) · n.

**How the definition helps.** Defining curl through dα makes Stokes’s boundary integral equal the integral of the normal curl over the disk. Dividing by area gives an average, which tends to the center value by continuity (our own). This avoids expanding the line integral in coordinates once the defining equation has been matched to coordinate curl (our own).

**nLab:** [curl](https://ncatlab.org/nlab/show/curl). It says: “the integral of a vector field v along the boundary of an oriented surface D in X is equal to the integral of the vector field's curl across the surface”

**Sources:** none listed. No primary source with a working link was found.

### Equalizing transfers give the derivative test for Schur convexity

**Remember:** Test how the function changes when two entries move together.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** An equalizing transfer subtracts an amount from a larger entry and adds it to a smaller entry, without reversing their order. Say x majorizes y if finitely many such transfers and permutations can turn x into y.

**Problem.** Let f be symmetric and continuously differentiable on ℝⁿ. Then f respects majorization exactly when xᵢ &gt; xⱼ implies ∂ᵢf(x) ≥ ∂ⱼf(x) for every x, i and j. Respecting majorization means f(x) ≥ f(y) whenever x majorizes y.

**How the definition helps.** During each transfer the derivative along the path is the smaller entry’s partial derivative minus the larger entry’s partial derivative (our own). If this is nonpositive, the function cannot increase, and a tiny transfer gives the converse (our own). The work is to prove the transfer characterization from the usual test with sorted prefix sums (our own).

**Wikipedia:** [Schur-convex function](https://en.wikipedia.org/wiki/Schur-convex_function). It says: “(xᵢ − xⱼ)(∂f/∂xᵢ − ∂f/∂xⱼ) ≥ 0”

**Sources:** none listed. No primary source with a working link was found.

### Fenchel's inequality is one line from the definition of the convex conjugate

**Remember:** The conjugate is a supremum, so it beats every single term.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 49N15. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** For a real function f on a nonempty set D ⊆ ℝⁿ, its convex conjugate at p ∈ ℝⁿ is f\*(p) = sup<sub>x∈D</sub>(⟨p,x⟩ − f(x)).

**Problem.** Fenchel’s inequality gives ⟨p,x⟩ ≤ f(x) + f\*(p) for every x ∈ D and p ∈ ℝⁿ. For x,y ≥ 0 and r,s &gt; 1 with 1/r + 1/s = 1, Young’s inequality gives xy ≤ xʳ/r + yˢ/s.

**How the definition helps.** The supremum bounds each term, so rearranging gives Fenchel’s inequality. For f(t) = tʳ/r on t ≥ 0, ty − tʳ/r reaches its maximum at t = yˢ⁻¹ (our own). Its value is yˢ/s, giving Young’s inequality (our own).

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “The proof follows from the definition of convex conjugate:”

**Sources:**

- [W. Fenchel, On conjugate convex functions, Canadian Journal of Mathematics 1 (1949)](https://doi.org/10.4153/CJM-1949-007-x)

### Gradients of strongly convex functions are invertible maps of space

**Remember:** To undo a convex gradient, minimize the potential minus a linear function.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv cs.LG, math.OC. Level 2: later undergraduate.

**Definition.** A convex potential flow maps x to ∇f(x) for a differentiable strongly convex potential f. Strong convexity means some c &gt; 0 satisfies f(z) ≥ f(x) + ⟨∇f(x),z−x⟩ + c‖z−x‖² for every x and z.

**Problem.** For a differentiable strongly convex potential on all of Euclidean space, its gradient is one-to-one and onto.

**How the definition helps.** For any y, the tangent bound at zero makes f(x) − ⟨y,x⟩ tend to infinity as ‖x‖ grows (our own). This continuous function attains a minimum, and strong convexity makes the minimizer unique (our own). Its minimizers are exactly the solutions of ∇f(x) = y by differentiable convexity (our own).

**Paper or page:** [Convex Potential Flows: Universal Probability Distributions with Optimal Transport and Convex Optimization](https://arxiv.org/abs/2012.05942v2). It says: “The convexity implies invertibility and allows us to resort to convex optimization to solve the convex conjugate for efficient inversion.”

**Sources:**

- [Chin-Wei Huang, Ricky T. Q. Chen, Christos Tsirigotis, Aaron Courville, Convex Potential Flows: Universal Probability Distributions with Optimal Transport and Convex Optimization, arXiv:2012.05942v2 (2021)](https://arxiv.org/abs/2012.05942v2)

### The value +∞ turns constrained convex problems into unconstrained ones

**Remember:** A wall of height infinity replaces a constraint.

*Makes the theorem clean to state or prove.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** The convex-analysis indicator ι of a set A takes the value zero on A and +∞ everywhere else.

**Problem.** Let f be convex with values in ℝ ∪ {+∞} and finite somewhere on the convex set A. Minimizing f over A is equivalent to minimizing f + ι over the whole space. Theorems about unconstrained minima then apply under their usual hypotheses.

**How the definition helps.** The sum agrees with f on A and equals +∞ elsewhere, so both problems have the same infimum and minimizers (our own). Convexity of A makes its indicator convex, so the sum is convex (our own).

**Wikipedia:** [Indicator function (convex analysis)](https://en.wikipedia.org/wiki/Indicator_function_%28convex_analysis%29), [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “It is similar to the indicator function used in probability, but assigns +∞ instead of 0 to the outside elements.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### Averaging dilations gives the integral Hardy inequality

**Remember:** Each dilation has a known cost, so average those costs.

*True by definition.* MSC 26D10 (Inequalities involving derivatives and differential and integral operators). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The p-norm of a nonnegative function is the pth root of the integral of its pth power. Define its Hardy average at x &gt; 0 as ∫₀¹ f(tx) dt. The usual formula integrates f from 0 to x and divides by x.

**Problem.** Let f be nonnegative and measurable on (0, ∞), with finite p-norm for p &gt; 1. Its Hardy average has p-norm at most p/(p − 1) times that of f.

**How the definition helps.** Minkowski bounds the norm of the average by the average of the norms. Scaling the input by t multiplies the norm by t to the power −1/p (our own). The integral of this factor from 0 to 1 is p/(p − 1), and substitution recovers the prefix average (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “by Minkowski's integral inequality.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Log coordinates give the exact Hardy bound

**Remember:** Weight by exp(s/p) in log coordinates to turn dilations into translations.

*True by definition. Confidence: medium.* MSC 26D10 (Inequalities involving derivatives and differential and integral operators). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For p &gt; 1, the Hardy operator H averages a nonnegative function f on each interval \[0, x\]. Define its logarithmic coordinates by g(s) = exp(s/p) f(exp(s)). Substitution preserves the p-norm, the pth root of the integral of the absolute pth power.

**Problem.** For nonnegative measurable functions of finite p-norm on (0, ∞), the smallest C satisfying ‖Hf‖ₚ ≤ C‖f‖ₚ is p/(p − 1).

**How the definition helps.** In logarithmic coordinates, H integrates translates g(s − u) against the weight exp(−(1 − 1/p)u) for u ≥ 0 (our own). The integral triangle inequality bounds its norm by the total weight, p/(p − 1), since translation preserves norms (our own). For the indicator of \[0, L\], each point of \[M, L\] captures at least the weight from zero to M (our own). Let L tend to infinity first, then M, to attain the bound in the limit (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “An integral version of Hardy's inequality states the following”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Testing against unit functions gives Minkowski’s integral inequality

**Remember:** The largest pairing with a nonnegative unit test gives the norm.

*True by definition.* MSC 26D10 (Inequalities involving derivatives and differential and integral operators). arXiv math.CA. Level 2: later undergraduate.

**Definition.** On \[0, 1\], take p, q &gt; 1 with 1/p + 1/q = 1. For continuous nonnegative h, define its p-norm as the largest ∫₀¹ hz among continuous nonnegative z with q-norm at most one. The q-norm takes the qth root of the integral of the qth power.

**Problem.** Let F be continuous and nonnegative on \[0, 1\]². The p-norm in x of its y-integral is at most the y-integral of its p-norms in x.

**How the definition helps.** Exchanging the two integrals puts the same test function inside each slice, where its pairing is bounded by that slice’s p-norm (our own). Taking the largest pairing proves the bound (our own). Hölder’s inequality gives one direction of agreement with the usual integral formula (our own). For nonzero h, a test proportional to h raised to p − 1 gives equality (our own).

**Wikipedia:** [Minkowski inequality](https://en.wikipedia.org/wiki/Minkowski_inequality). It says: “then Minkowski's integral inequality gives the usual Minkowski inequality as a special case”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### A convex perspective gives the log-sum bound

**Remember:** Apply the function to the ratio, then multiply by its denominator.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For positive a and b, define the perspective of f(t) = t log t as P(a, b) = b f(a/b). This treats the ratio and its weight together instead of treating a log ratio term on its own.

**Problem.** For positive lists a and b with totals A and B, the sum of their perspectives P(aᵢ, bᵢ) is at least P(A, B). This gives ∑ aᵢ log(aᵢ/bᵢ) ≥ A log(A/B).

**How the definition helps.** The perspective is convex and scales linearly, so Jensen for pairs gives P(A, B) ≤ ∑ P(aᵢ, bᵢ) (our own). The work goes into proving convexity of the perspective by using the b-coordinates as weights for the ratios (our own).

**Wikipedia:** [Log sum inequality](https://en.wikipedia.org/wiki/Log_sum_inequality). It says: “where the inequality follows from Jensen's inequality since bᵢ/b ≥ 0, ∑ᵢ₌₁ⁿ bᵢ/b = 1, and f is convex.”

**Sources:** none listed. No primary source with a working link was found.

### A convex set above unit length reverses Minkowski’s inequality

**Remember:** Scale up until the average pth power reaches one when you divide.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; p &lt; 1. Let U contain exactly the nonnegative vectors whose entries raised to p average at least one. Define the power mean of nonzero x as the largest t &gt; 0 with x/t in U, and assign zero mean to the zero vector.

**Problem.** For 0 &lt; p &lt; 1, the power mean obeys a reverse triangle inequality for nonnegative vectors of the same size. The power mean of their sum is at least the sum of their power means.

**How the definition helps.** Concavity of the pth power makes U convex, so a weighted average of two points in U stays there (our own). Divide each nonzero vector by its mean, and average the results with weights proportional to those means (our own). Solving for t recovers the pth root of the average of the pth powers (our own).

**Paper or page:** [Minkowski's Inequality for Sums/Index Less than 1](https://proofwiki.org/wiki/Minkowski's_Inequality_for_Sums/Index_Less_than_1). It says: “If p &lt; 1, p ≠ 0, then: (∑ₖ₌₁ⁿ (aₖ + bₖ)ᵖ)¹⁄ᵖ ≥ (∑ₖ₌₁ⁿ aₖᵖ)¹⁄ᵖ + (∑ₖ₌₁ⁿ bₖᵖ)¹⁄ᵖ”

**Sources:** none listed. No primary source with a working link was found.

### A decreasing step function transfers Hardy’s bound to sums

**Remember:** Sort first so every prefix average can only go up.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Sort a finite nonnegative list from largest to smallest to form its decreasing rearrangement. Put each sorted entry on its own unit interval in order, then put zero on the rest of the positive real line.

**Problem.** For p &gt; 1, take a nonnegative sequence with finite p-norm, the pth root of the sum of its pth powers. The sequence of averages of its first n entries has p-norm at most p/(p − 1) times the original norm.

**How the definition helps.** At each positive integer, the step function’s integral average equals the corresponding sorted list average. Sorting can only increase each initial sum. The integral average decreases, so its pth power on each unit interval bounds its value at the right endpoint. The integral Hardy inequality now replaces a separate sum estimate, and truncation extends the result to infinite sequences (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “This follows directly from the integral form”

**Sources:**

- [G. H. Hardy, Note on a theorem of Hilbert, Mathematische Zeitschrift 6 (1920), 314–317. Early discrete bound.](https://doi.org/10.1007/BF01199965)

### A generalized inverse keeps Young’s area bound across jumps

**Remember:** Use the first crossing, even when the graph skips a height.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f be nondecreasing on \[0, A\] with f(0) = 0. For 0 ≤ y ≤ f(A), define its generalized inverse g(y) as the infimum of x with f(x) ≥ y. An ordinary inverse requires an x with f(x) = y.

**Problem.** For 0 ≤ a ≤ A and 0 ≤ b ≤ f(A), Young’s inequality gives ∫₀ᵃ f(x) dx + ∫₀ᵇ g(y) dy ≥ ab.

**How the definition helps.** Vertical slices below the graph and horizontal slices above it cover the rectangle of sides a and b (our own). The slice widths above the graph are at most g(y) because f is nondecreasing (our own). The generalized inverse covers a step from zero to one, which has no ordinary inverse at height ½ (our own).

**Wikipedia:** [Young's inequality for products](https://en.wikipedia.org/wiki/Young%27s_inequality_for_products). It says: “let f denote a real-valued, continuous and strictly increasing function on \[0, c\] with c &gt; 0 and f(0) = 0. Let f⁻¹ denote the inverse function of f.”

**Sources:** none listed. No primary source with a working link was found.

### A supremum over test vectors gives Minkowski’s inequality

**Remember:** A shared test set turns addition into an upper bound.

*True by definition. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a finite real vector x and p &gt; 1, choose q with 1/p + 1/q = 1. Define the p-norm of x as the largest \|x · z\| among vectors z of the same size with q-norm at most one. The q-norm takes the qth root of the sum of the absolute entries raised to q.

**Problem.** For real vectors x and y, Minkowski’s inequality bounds the p-norm of x + y by the sum of their p-norms.

**How the definition helps.** Take the supremum of the ordinary triangle inequality for each dot product (our own). Hölder’s inequality gives one side of the equivalence with the pth-root formula (our own). For x ≠ 0, a unit test vector proportional to sign(xᵢ) times \|xᵢ\| to the power p − 1 attains the bound (our own).

**Paper or page:** [Minkowski's Inequality for Sums](https://proofwiki.org/wiki/Minkowski's_Inequality_for_Sums). It says: “If p &gt; 1, then: (∑ₖ₌₁ⁿ (aₖ + bₖ)ᵖ)¹⁄ᵖ ≤ (∑ₖ₌₁ⁿ aₖᵖ)¹⁄ᵖ + (∑ₖ₌₁ⁿ bₖᵖ)¹⁄ᵖ”

**Sources:** none listed. No primary source with a working link was found.

### Averaging permuted exponents gives Muirhead’s inequality

**Remember:** Mix permutations of the exponents, then compare permutation averages of their monomials.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Say a majorizes b if b is a weighted average of permutations of a, with nonnegative weights totaling one. For fixed positive inputs, raise each input to its assigned exponent and multiply. The symmetric monomial average averages this product over all permutations of the exponents.

**Problem.** For fixed positive inputs, the symmetric monomial average for a is at least the one for b whenever a majorizes b.

**How the definition helps.** Each monomial is convex in its exponents because it is the exponential of a linear function of them (our own). Their average is convex and unchanged by permutations, so apply Jensen to the exponent mixture (our own). Rado’s theorem proves equivalence with the usual sorted-sum test (our own).

**Wikipedia:** [Muirhead's inequality](https://en.wikipedia.org/wiki/Muirhead%27s_inequality). It says: “where the sum extends over all permutations σ of { 1, ..., n }.”

**Sources:**

- [R. F. Muirhead, Some Methods applicable to Identities and Inequalities of Symmetric Algebraic Functions of n Letters, Proceedings of the Edinburgh Mathematical Society 21, 144–162.](https://doi.org/10.1017/S001309150003460X)

### Maximal subset sums give the rearrangement inequality

**Remember:** Each prefix of a rearrangement can only lose against the largest entries.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the kth largest-entry sum of a list as the maximum sum over all subsets of k positions. The equivalent sorted-list formula adds its first k entries after sorting from largest to smallest.

**Problem.** Pairing two real lists in the same sorted order maximizes their sum of pairwise products. Pairing them in opposite orders minimizes it.

**How the definition helps.** A prefix of k entries from any reordering has sum at most the sum of the k largest entries (our own). Sort the first list in decreasing order and expand each entry as its last entry plus the subsequent drops (our own). The product sum then weights each second-list prefix sum by a nonnegative drop, with a fixed term from the total (our own). Sorting the second list decreasingly attains every maximum together, and negating that list gives the minimum (our own).

**Wikipedia:** [Rearrangement inequality](https://en.wikipedia.org/wiki/Rearrangement_inequality). It says: “for every permutation σ of 1, …, n.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Mixing permutations makes Karamata’s inequality Jensen’s inequality

**Remember:** Mixing permutations cannot increase a sum of convex values.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Say x majorizes y if y is a weighted average of coordinate permutations of x, with nonnegative weights summing to one. The sorted-sum definition compares decreasing prefix sums and requires equal totals.

**Problem.** If x majorizes y, the sum of a convex function’s values on x is at least its sum on y. For a strictly convex function, equality holds exactly when y is a permutation of x.

**How the definition helps.** Apply Jensen at each coordinate and sum, since permuting coordinates leaves the sum unchanged (our own). Strict convexity forces all positive-weight permutations to agree at every coordinate if equality holds (our own). The work moves into Rado’s theorem, which matches the mixture definition with the sorted-sum definition (our own).

**Wikipedia:** [Majorization](https://en.wikipedia.org/wiki/Majorization). It says: “we have x ≺ y if and only if x is in the convex hull of all vectors obtained by permuting the coordinates of y.”

**Sources:**

- [R. Rado, An Inequality, Journal of the London Mathematical Society 27 (1952), 1–6.](https://doi.org/10.1112/jlms/s1-27.1.1)
- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Normalized coefficients make Newton’s inequalities survive differentiation

**Remember:** Divide coefficient k by the number of k-element subsets.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Write the coefficients of a degree n polynomial in descending order, starting at position zero. Normalize the coefficient at position k by dividing by the number of ways to choose k of n objects. For the product of factors t + aᵢ, this averages all products of k distinct entries.

**Problem.** The polynomial is a product of factors t + aᵢ with aᵢ ≥ 0. Each interior normalized coefficient is at least the geometric mean of its two neighbors.

**How the definition helps.** Differentiating and dividing by n preserves every normalized coefficient except the last (our own). Rolle’s theorem keeps the derivative roots real and nonpositive, so induction gives every comparison except the last (our own). For positive entries, reversing the coefficients gives the missing comparison, and a limit covers zeros (our own). For a quadratic the claim follows from its nonnegative discriminant (our own).

**Wikipedia:** [Newton's inequalities](https://en.wikipedia.org/wiki/Newton%27s_inequalities). It says: “Then the elementary symmetric means, given by Sₖ = eₖ/(n choose k),”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Strict convexity identifies equality in Minkowski’s inequality

**Remember:** A straight edge would allow equality in a new direction.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A norm is strictly convex if the midpoint of distinct unit vectors has norm less than one. This rules out line segments on the boundary of the unit ball.

**Problem.** Two nonzero vectors in a strictly convex norm attain equality in the triangle inequality exactly when one is a positive multiple of the other. This applies to the p-norm when 1 &lt; p &lt; ∞.

**How the definition helps.** Strict convexity puts any nontrivial weighted average of distinct unit vectors inside the ball (our own). Normalize both vectors, then average with weights proportional to their norms (our own). For the p-norm, strict convexity of the absolute pth power supplies the work (our own). In the 1-norm, (1, 0) and (0, 1) still give equality (our own).

**Wikipedia:** [Minkowski inequality](https://en.wikipedia.org/wiki/Minkowski_inequality). It says: “with equality for 1 &lt; p &lt; ∞ if and only if f and g are positively linearly dependent”

**Paper or page:** [Minkowski's Inequality for Sums](https://proofwiki.org/wiki/Minkowski's_Inequality_for_Sums). It says: “If p &gt; 1, then: (∑ₖ₌₁ⁿ (aₖ + bₖ)ᵖ)¹⁄ᵖ ≤ (∑ₖ₌₁ⁿ aₖᵖ)¹⁄ᵖ + (∑ₖ₌₁ⁿ bₖᵖ)¹⁄ᵖ”

**Sources:** none listed. No primary source with a working link was found.

### Taking an infimum of linear functions proves Hölder’s inequality

**Remember:** One choice of scale cannot beat the best scale for each pair.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Choose p, q &gt; 1 with 1/p + 1/q = 1. For nonnegative u and v, define their weighted geometric mean as the greatest lower bound of su/p + tv/q. Allow positive scales s and t with (log s)/p + (log t)/q = 0.

**Problem.** For equal-length nonnegative lists a and b, ∑ aᵢbᵢ is at most the weighted geometric mean of ∑ aᵢᵖ and ∑ bᵢᑫ. In the usual notation, this bound is the p-norm of a times the q-norm of b.

**How the definition helps.** A single choice of scales gives at least the sum of the separate lower bounds (our own). Apply this to pairs of pth and qth powers, then take the greatest lower bound for their sums (our own). Weighted arithmetic–geometric mean bounds each expression below by the usual product of powers (our own). For positive inputs equality occurs at su = tv, and zero inputs follow by limits (our own).

**Paper or page:** [Hölder's Inequality for Sums/Finite](https://proofwiki.org/wiki/Hölder's_Inequality_for_Sums/Finite). It says: “∑ₖ₌₁ⁿ \|xₖyₖ\| ≤ (∑ₖ₌₁ⁿ \|xₖ\|ᵖ)¹⁄ᵖ (∑ₖ₌₁ⁿ \|yₖ\|ᑫ)¹⁄ᑫ”

**Sources:** none listed. No primary source with a working link was found.

### Tests with all convex functions force equal totals

**Remember:** Without equal totals, a falling straight line can reverse the comparison.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Sort two equal-length real lists in decreasing order. Say x weakly majorizes y if the first k entries of x sum to at least the corresponding sum of y for every k. Full majorization also requires equal totals.

**Problem.** A list x majorizes y exactly when the sum of f on x is at least the sum on y for every convex f.

**How the definition helps.** The two linear tests f(t) = t and f(t) = −t force equal totals (our own). Tests f(t) = max(t − c, 0) give the prefix inequalities by minimizing the sum of excesses plus kc over c (our own). In the other direction, Rado’s theorem gives an average of permutations, so Jensen applies (our own). Without equal totals, (2, 2) weakly majorizes (1, 1), but f(t) = −t reverses the bound (our own).

**Wikipedia:** [Majorization](https://en.wikipedia.org/wiki/Majorization). It says: “For every convex function h: ℝ → ℝ, ∑ᵢ₌₁ᵈ h(xᵢ) ≥ ∑ᵢ₌₁ᵈ h(yᵢ).”

**Sources:**

- [R. Rado, An Inequality, Journal of the London Mathematical Society 27 (1952), 1–6.](https://doi.org/10.1112/jlms/s1-27.1.1)

### The adjoint of Hardy averaging gives Copson’s bound

**Remember:** Transposing switches the two exponents without changing the bound.

*True by definition. Confidence: medium.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Hardy matrix averages the first n entries in row n. Define the Copson operator C by interchanging its rows and columns. Thus (Cb)ₙ sums bₖ/k over k ≥ n.

**Problem.** For q &gt; 1, take a nonnegative sequence b with finite q-norm, the qth root of the sum of its qth powers. The q-norm of Cb is at most q times the q-norm of b.

**How the definition helps.** Transposing moves Hardy averaging onto the test sequence (our own). Choose a unit test in the conjugate p-norm, where 1/p + 1/q = 1 (our own). Hardy’s bound there is q, and Hölder’s attaining test recovers the q-norm of the result (our own). Finite truncation and a limit give the bound for infinite sequences (our own).

**Wikipedia:** [Hardy's inequality](https://en.wikipedia.org/wiki/Hardy%27s_inequality). It says: “Its discrete version states that if a₁, a₂, a₃, … is a sequence of non-negative real numbers, then for every real number p &gt; 1 one has”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Threshold sums give the inequality for weak majorization

**Remember:** Compare the sums of excesses above every threshold.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For equal-length real lists, define the excess above c as the sum of max(xᵢ − c, 0). Say x weakly majorizes y if its excess is at least as large at every threshold c. The usual test compares sums of the k largest entries for every k.

**Problem.** If x weakly majorizes y, the sum of any increasing convex function’s values on x is at least the sum on y.

**How the definition helps.** Every upward change in slope contributes a nonnegative multiple of max(t − c, 0), which the threshold test compares directly (our own). Join the function values at the list entries by straight segments and extend constantly to the left of the smallest entry (our own). This gives a constant plus such terms, including the first slope at the smallest entry (our own). Equivalence with sorted sums follows by placing the threshold between consecutive sorted entries (our own).

**Paper or page:** [Integral means of solutions of the one-dimensional Poisson equation with Robin boundary conditions](https://arxiv.org/abs/2312.12535). It says: “Under these assumptions, the following inequality holds φ(x₁) + ⋯ + φ(xₙ) ≤ φ(y₁) + ⋯ + φ(yₙ).”

**Sources:** none listed. No primary source with a working link was found.

### A change of coordinates orders quasi-arithmetic means

**Remember:** Transform each input, take the weighted average, then undo the transformation.

*True by definition.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f and g be continuous and strictly increasing on the same interval. The quasi-arithmetic mean from f applies f to each input, averages with nonnegative weights totaling one, then applies the inverse of f.

**Problem.** The f-mean never exceeds the g-mean for any finite weighted list exactly when g composed with the inverse of f is convex.

**How the definition helps.** Writing the mean with the inverse of f turns the comparison into Jensen’s inequality for g composed with that inverse (our own). Indeed, applying g preserves the inequality, and the inputs in the new coordinates are the f-values (our own). Two-point averages give convexity back, and induction extends the chord inequality to all finite weighted lists (our own).

**Wikipedia:** [Quasi-arithmetic mean](https://en.wikipedia.org/wiki/Quasi-arithmetic_mean). It says: “in order to ensure that an average of any finite (or infinite) subset of values within J will always correspond to a value in I.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Averages of successive ratios give Maclaurin’s chain

**Remember:** Adding a smaller ratio cannot raise its geometric average.

*True by definition.* MSC 26E60 (Means), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let Sₖ be the average of all products of k distinct positive entries and set S₀ = 1. Define the kth Maclaurin mean as the geometric mean of the first k successive ratios Sⱼ/Sⱼ₋₁. Extend these means to nonnegative entries by continuity.

**Problem.** The Maclaurin means do not increase as k increases. They start at the arithmetic mean and end at the geometric mean.

**How the definition helps.** Newton’s inequalities make the successive ratios nonincreasing, so each new ratio is at most the preceding mean (our own). Multiplying the ratios cancels the intermediate factors and recovers the usual kth root of Sₖ (our own). This root formula also gives the continuous extension to zero entries (our own).

**Wikipedia:** [Maclaurin's inequality](https://en.wikipedia.org/wiki/Maclaurin%27s_inequality). It says: “Maclaurin's inequality can be proved using Newton's inequalities or a generalised version of Bernoulli's inequality.”

**Sources:**

- [G. H. Hardy, J. E. Littlewood and G. Pólya, Inequalities, 2nd ed. (1952).](https://books.google.com/books?vid=ISBN9780521358804)

### Eudoxus reals multiply by composition, so multiplication is associative for free

**Remember:** Composition is associative before passing to classes.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 12J15. arXiv math.CA. Level 3: graduate.

**Definition.** An almost homomorphism f from ℤ to ℤ has \|f(m+n) − f(m) − f(n)\| ≤ C for some C and all integers m,n. A Eudoxus real groups together almost homomorphisms whose differences are bounded on ℤ. Multiply two classes by composing representatives.

**Problem.** Multiplication of Eudoxus reals is associative.

**How the definition helps.** Composition of functions is associative, so associativity holds before passing to classes (our own). The nLab notes that one distributive law also holds before passing to classes. Commutativity needs a real proof, because composition is not commutative in general (our own). The work moves to proving that composition respects bounded differences and that the result is the usual real line (our own).

**nLab:** [Eudoxus real number](https://ncatlab.org/nlab/show/Eudoxus+real+number). It says: “becomes a commutative ring whose addition and multiplication are descended from + and ∘ on AL(ℤ).”

**Sources:** none listed. No primary source with a working link was found.

### Two-sided Dedekind cuts put a rational between any two ordered reals

**Remember:** An overlap of the two cuts already contains the required rational.

*True by definition.* MSC 26A03 (Foundations: limits and generalizations, elementary topology of the line), 03F60. arXiv math.CA. Level 3: graduate.

**Definition.** A two-sided Dedekind cut consists of nonempty rational sets L,U, respectively downward and upward closed. Every lower member has a larger lower member, and every upper member has a smaller upper member. Every lower member lies below every upper member, and for rationals a &lt; b either a ∈ L or b ∈ U. Define x &lt; y when Uₓ intersects Lᵧ.

**Problem.** If x &lt; y are real numbers, then a rational number lies strictly between them.

**How the definition helps.** Choose q ∈ Uₓ ∩ Lᵧ. Since Uₓ has no least member, it meets the lower cut of q, giving x &lt; q (our own). Since Lᵧ has no greatest member, it meets the upper cut of q, giving q &lt; y (our own).

**nLab:** [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “We define x &lt; y to mean that there exists a rational number a such that x &lt; a &lt; y”

**Sources:** none listed. No primary source with a working link was found.

### Scaling ratios invert growth indices

**Remember:** Scaling the input by a fixed factor scales the output asymptotically by its power.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26A12 (Rate of growth of functions, orders of infinity, slowly varying functions). arXiv math.CA. Level 3: graduate.

**Definition.** Let f be positive and measurable on a positive half-line. It varies regularly with index ρ if f(ax)/f(x) tends to a raised to ρ as x tends to infinity, for each a &gt; 0.

**Problem.** If a positive, continuous, strictly increasing function varies regularly with index ρ &gt; 0, its inverse varies regularly with index 1/ρ.

**How the definition helps.** Ratios express the inverse law even when a power alone does not describe growth (our own). For b &lt; a<sup>(1/ρ)</sup> &lt; c, regular variation gives f(bx) &lt; a f(x) &lt; f(cx) for large x (our own). Applying the inverse traps the inverse ratio between b and c, and unbounded growth makes this cover every large argument (our own). Bringing b and c together gives the limit (our own).

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

**Remember:** At every tolerance, the fraction of nearby points exceeding that error vanishes.

*Rules out counterexamples.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26A24. arXiv math.CA. Level 3: graduate.

**Definition.** A measurable real function is approximately continuous at a point if nearby points where it differs by more than any fixed tolerance have density zero. Density zero means that their fraction in shrinking intervals about the point tends to zero.

**Problem.** A real function approximately continuous at every point of an open interval takes every value between any two of its values.

**How the definition helps.** In our own proof, approximate continuity everywhere makes each bounded function in this class the derivative of its indefinite integral. Darboux’s theorem says derivatives take every intermediate value. For an unbounded function, first apply arctangent, which is bounded, continuous and strictly increasing. Our own counterexample is the function that is zero on the negative half-line and one elsewhere, which is approximately continuous almost everywhere but skips values.

**Wikipedia:** [Approximately continuous function](https://en.wikipedia.org/wiki/Approximately_continuous_function). It says: “when f is essentially bounded, its points of approximate continuity coincide with its Lebesgue points.”

**Sources:** none listed. No primary source with a working link was found.

### Uniform continuity with infinitesimals gives a short Heine–Cantor proof

**Remember:** Uniform continuity checks closeness at all hyperreal points, not only real ones.

*True by definition. Confidence: medium.* MSC 26A15 (Continuity and related questions (modulus of continuity, semicontinuity, discontinuities, etc.) for real functions in one variable), 26E35. arXiv math.CA, math.LO. Level 3: graduate.

**Definition.** In nonstandard analysis, f has a natural extension f\* to the hyperreals. Then f is uniformly continuous on I if f\* sends any two infinitely close points of I\* to infinitely close values. Plain continuity asks this only when one of the two points is a real number.

**Problem.** Every continuous function on a closed bounded interval is uniformly continuous.

**How the definition helps.** Each hyperreal point of the extended closed bounded interval is infinitely close to its real standard part in the interval (our own). Infinitely close points x and y share that standard part s, so continuity makes f\*(x) and f\*(y) infinitely close to f(s) (our own). Thus the extensions satisfy the uniform continuity test (our own).

**Wikipedia:** [Nonstandard calculus](https://en.wikipedia.org/wiki/Nonstandard_calculus), [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity). It says: “The fact that a continuous function on a compact interval I is necessarily uniformly continuous (the Heine–Cantor theorem) admits a succinct hyperreal proof.”

**Sources:**

- [Abraham Robinson, Non-standard analysis, Indagationes Mathematicae (Proceedings) 64 (1961)](https://doi.org/10.1016/S1385-7258(61)50044-3)

### Baire-one functions have dense continuity points

**Remember:** One sequence of continuous functions converges at every point.

*True by definition.* MSC 26A21 (Classification of real functions; Baire classification of sets and functions), 26A15. arXiv math.CA. Level 3: graduate.

**Definition.** A real function is of Baire class one if it is the pointwise limit of a sequence of continuous functions.

**Problem.** Every Baire class one real function on the real line is continuous on a dense set of points.

**How the definition helps.** For each ε &gt; 0, closed sets of points with pairwise tail differences ≤ ε cover each closed interval (our own). Baire’s theorem gives a subinterval in one such set, where the limit lies within ε of one continuous term (our own). Shrinking this interval bounds the limit’s oscillation by 3ε, so small oscillation holds on a dense open set (our own). Intersecting these sets for ε = 1/n gives a dense set of continuity points by Baire’s theorem (our own).

**Wikipedia:** [Baire function](https://en.wikipedia.org/wiki/Baire_function). It says: “the pointwise limit of a sequence of Baire class 0 functions.”

**Sources:** none listed. No primary source with a working link was found.

### Dini derivatives exist for every function, so Denjoy–Young–Saks needs no hypothesis

**Remember:** Four one-sided upper and lower slopes always exist.

*Makes the theorem clean to state or prove.* MSC 26A24 (Differentiation (real functions of one variable): general theory, generalized derivatives, mean value theorems), 26A27. arXiv math.CA. Level 3: graduate.

**Definition.** At an interior point t, form the quotient (f(t+h) − f(t))/h. Its right and left limits superior and inferior are the four Dini derivatives, with infinite values allowed.

**Problem.** Almost everywhere on an interval, a real function has a finite derivative or satisfies one of three alternatives. Both upper slopes can be +∞ and both lower slopes −∞. Otherwise one upper slope equals the opposite lower slope finitely, while the remaining upper and lower slopes are +∞ and −∞ respectively.

**How the definition helps.** The four extended slopes always exist at interior points, even where the ordinary derivative fails (our own). The Denjoy–Young–Saks theorem classifies their possible patterns outside a null set (our own).

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

### Clock changes preserve fractional composition

**Remember:** Integrate against the clock increment and a power of the elapsed clock time.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals), 45D05. arXiv math.CA. Level 3: graduate.

**Definition.** On \[a,b\], choose a continuously differentiable clock ψ with ψ′ &gt; 0. For α &gt; 0, integrate f(s) from a to t against the weight ψ′(s)(ψ(t) − ψ(s))ᵅ⁻¹/Γ(α). Here Γ denotes the gamma function.

**Problem.** On continuous inputs, applying these integrals successively with positive orders α and β gives the integral of order α + β for the same clock.

**How the definition helps.** The derivative turns integration in s into ordinary integration in the new coordinate ψ(s). In our own derivation, this substitution turns each operator into the usual fractional integral with lower endpoint ψ(a). The ordinary composition law then gives the stated result. Its proof uses the beta integral to combine the two power kernels.

**Wikipedia:** [Riemann–Liouville integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Liouville_integral). It says: “the latter of which is a semigroup property.”

**Paper or page:** [Existence and Ulam-Hyers Mittag-Leffler stability of ψ-Hilfer fractional functional integrodifferential equation](https://arxiv.org/abs/2001.01567v1). It says: “Then, we have the following semigroup property given by \\(I\_{a<sup>+</sup>}<sup>\\alpha ,\\psi </sup>I\_{a<sup>+</sup>}<sup>\\beta ,\\psi </sup>(\\cdot )=I\_{a<sup>+</sup>}<sup>\\alpha +\\beta ,\\psi </sup>(\\cdot )\\)”

**Sources:** none listed. No primary source with a working link was found.

### Gamma normalization adds fractional orders

**Remember:** Normalized integration kernels add their orders when convolved.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals), 44A35. arXiv math.CA. Level 3: graduate.

**Definition.** For α &gt; 0, set k(t) = exp((α − 1) log t)/Γ(α) for t &gt; 0. Here Γ is the gamma function, with Γ(n + 1) = n! for nonnegative integers n. Define integration of order α by integrating k(t − s)f(s) from 0 to t.

**Problem.** Take an integrable input on \[0,T\] and positive orders α and β. Integrating successively gives integration of order α + β almost everywhere.

**How the definition helps.** The gamma factors cancel the constant produced by convolving two power kernels (our own). Substituting s = tu reduces that constant to an integral on \[0,1\], called the beta integral (our own). The beta–gamma identity evaluates it as Γ(α)Γ(β)/Γ(α + β) (our own). At integer orders the same rule recovers repeated ordinary integration (our own).

**Paper or page:** [An extension of the Cartwright-McMullen theorem in fractional calculus for the smooth Stieltjes case](https://arxiv.org/abs/2309.07148v1). It says: “The Index Law holds. That is, $J<sub>a<sup>+</sub><sup>\\alpha</sup> </sup> \\circ J<sub>a<sup>+</sub><sup>\\beta</sup> </sup>=J<sub>a<sup>+</sub><sup>\\alpha</sup> +\\beta </sup>$ for all $\\alpha ,\\beta &gt; 0$.”

**Sources:** none listed. No primary source with a working link was found.

### Half integration squares to integration

**Remember:** Two copies of the half-order kernel convolve to the constant one.

*True by definition.* MSC 26A33 (Fractional derivatives and integrals), 45P05. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** On L²(\[0,1\]), seek an operator whose square is integration from zero to x. Define half integration by integrating f(s)/√(π(x − s)) from zero to x.

**Problem.** Applying this operator twice gives ordinary integration from zero to x.

**How the definition helps.** Choosing a convolution kernel turns the operator square into the convolution square of one function. In our own proof, interchange the two integrals and rescale the inner interval to \[0,1\]. Its kernel integral becomes ∫₀¹ ds/√(s(1 − s)) divided by π, which equals one. The quoted classification of all square roots requires a separate theorem.

**Wikipedia:** [Riemann–Liouville integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Liouville_integral). It says: “the latter of which is a semigroup property.”

**Paper or page:** [Square roots of some classical operators](https://arxiv.org/abs/2109.13688v1). It says: “The operators ±Y are the only two square roots of V.”

**Sources:** none listed. No primary source with a working link was found.

### Free tags turn gauge Riemann sums into the Lebesgue integral

**Remember:** Free the tags, and the gauge integral becomes Lebesgue's.

*Makes the theorem clean to state or prove.* MSC 26A39 (Denjoy and Perron integrals, other special integrals), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** A free partition divides \[a,b\] into intervals Iⱼ with tags tⱼ anywhere in \[a,b\]. For a positive function δ on \[a,b\], fineness means \|x−tⱼ\| &lt; δ(tⱼ) for every j and x ∈ Iⱼ. The McShane integral is S if every ε &gt; 0 admits δ making all fine sums ∑ⱼ f(tⱼ)·length(Iⱼ) differ from S by less than ε.

**Problem.** A function on \[a, b\] is McShane integrable exactly when it is Lebesgue integrable, with the same integral.

**How the definition helps.** Free tags let one gauge sum formula describe all Lebesgue integrable real functions (our own). The McShane–Lebesgue equivalence theorem proves that both integrability tests agree and give the same value (our own).

**Wikipedia:** [McShane integral](https://en.wikipedia.org/wiki/McShane_integral). It says: “The fact that the tags are allowed to be outside the subintervals is why the partition is called free. It's also the only difference between the definitions of the Henstock-Kurzweil integral and the McShane integral.”

**Sources:**

- [E. J. McShane, A unified theory of integration, The American Mathematical Monthly 80 (1973) 349–359](https://doi.org/10.1080/00029890.1973.11993291)

### Stieltjes integrals describe every continuous linear functional on C\[0, 1\]

**Remember:** Weigh each piece by the jump of g, not its length.

*Makes the theorem clean to state or prove.* MSC 26A42 (Integrals of Riemann, Stieltjes and Lebesgue type), 28C05. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** For a partition a = x₀ &lt; ⋯ &lt; xₙ = b, choose each tag cᵢ in \[xᵢ₋₁,xᵢ\]. The Riemann–Stieltjes integral is the common limit of ∑ᵢ f(cᵢ)(g(xᵢ) − g(xᵢ₋₁)) as the largest interval length tends to zero, over all tags and partitions.

**Problem.** Every continuous linear functional A on real C\[0,1\] with its supremum norm satisfies A(f) = ∫ f dα for some α of bounded variation.

**How the definition helps.** Stieltjes increments represent point masses and distributed mass in one formula (our own). A unit jump at ½ gives point evaluation there (our own). Riesz’s representation theorem supplies an integrator of bounded variation for each continuous linear functional.

**Wikipedia:** [Riesz–Markov–Kakutani representation theorem](https://en.wikipedia.org/wiki/Riesz%E2%80%93Markov%E2%80%93Kakutani_representation_theorem), [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral). It says: “The Riemann–Stieltjes integral appears in the original formulation of F. Riesz's theorem which represents the dual space of the Banach space C\[a,b\] of continuous functions in an interval \[a,b\] as Riemann–Stieltjes integrals against functions of bounded variation.”

**Sources:**

- [T. J. Stieltjes, Recherches sur les fractions continues, Annales de la Faculté des sciences de Toulouse 8 (1894)](https://doi.org/10.5802/afst.108)

### A variation clock gives compactness

**Remember:** Charge each change in position to the new clock.

*Makes the theorem clean to state or prove.* MSC 26A45 (Functions of bounded variation, generalizations), 26B12. arXiv math.CA. Level 3: graduate.

**Definition.** For a continuous curve in Euclidean space, accumulated variation is its length up to the current time. On a fixed nondegenerate compact interval, add elapsed time to accumulated variation, then divide by the final sum. For a curve of finite length, this gives a continuous strictly increasing clock from zero to one.

**Problem.** Suppose a sequence of such curves has bounded lengths and bounded starting points. In the new clock, some subsequence converges uniformly.

**How the definition helps.** Each change in position is at most the length traveled, so the normalized clocks give a common bound on speed (our own). Bounded starting points and lengths keep every curve in one compact ball (our own). The Arzelà–Ascoli theorem now gives a uniformly convergent subsequence (our own). The cited proposition identifies a particular limit under stronger convergence hypotheses.

**Paper or page:** [On the relaxation of polyconvex functionals with linear growth under strict convergence in BV](https://arxiv.org/abs/2508.11041v1). It says: “are Lipschitz continuous with uniformly bounded Lipschitz constants”

**Sources:** none listed. No primary source with a working link was found.

### Continuity removes exponential jump terms

**Remember:** No jumps means small increments make the Taylor errors vanish.

*Rules out counterexamples.* MSC 26A45 (Functions of bounded variation, generalizations), 26A24. arXiv math.CA. Level 3: graduate.

**Definition.** A real function has locally bounded variation if sums of absolute increments stay bounded over partitions of each compact interval. Its signed Stieltjes measure df assigns f(b) − f(a) to (a,b\] when f is right-continuous. A jump contributes its size as mass at one point.

**Problem.** For continuous f of locally bounded variation, d(exp f) = exp(f) df.

**How the definition helps.** Continuity makes the largest increment on a fine partition small, so the linear Taylor terms give the entire measure (our own). On a compact interval, the total error is bounded by a constant times that increment bound times total variation (our own). For a right-continuous jump from zero to one, the two sides assign masses e − 1 and e respectively (our own).

**Paper or page:** [Semiclassical estimates for measure potentials on the real line](https://arxiv.org/abs/2303.17722v2). It says: “Then, as measures on a bounded Borel set of ℝ, d(eᶠ) = eᶠ df.”

**Sources:** none listed. No primary source with a working link was found.

### Absolute continuity as an indefinite integral makes zero derivative force constancy

**Remember:** If the integrand is zero almost everywhere, the integral never moves.

*True by definition. Confidence: medium.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A42. arXiv math.CA. Level 3: graduate.

**Definition.** A function f on \[a,b\] is absolutely continuous if some Lebesgue integrable g satisfies f(x) = f(a) + ∫ₐˣ g(t) dt throughout \[a,b\].

**Problem.** If f is absolutely continuous on \[a, b\] and f′ = 0 almost everywhere, then f is constant. Almost everywhere means outside a set of length zero.

**How the definition helps.** Lebesgue differentiation gives f′ = g almost everywhere (our own). Since f′ vanishes almost everywhere, every integral of g vanishes, so f(x) = f(a) throughout (our own). The fundamental theorem for the Lebesgue integral identifies this definition with the usual interval condition.

**nLab:** [absolutely continuous function](https://ncatlab.org/nlab/show/absolutely+continuous+function). It says: “That the next definition is equivalent is the fundamental theorem of calculus for the Lebesgue integral on the real line.”

**Sources:** none listed. No primary source with a working link was found.

### Defining absolute continuity by indefinite integrals reduces the fundamental theorem to differentiation

**Remember:** An integrable density generates every increment.

*True by definition. Confidence: medium.* MSC 26A46 (Absolutely continuous real functions in one variable), 26A36. arXiv math.CA. Level 3: graduate.

**Definition.** A function f on \[a,b\] is absolutely continuous if some Lebesgue integrable g satisfies f(x) = f(a) + ∫ₐˣ g(t) dt throughout \[a,b\].

**Problem.** An absolutely continuous function f on \[a, b\] is differentiable almost everywhere, and f(x) = f(a) + ∫ₐˣ f′ for all x.

**How the definition helps.** With the integral definition, a density g is given, and only g = f′ almost everywhere remains, in our own account. The Lebesgue differentiation theorem supplies that step. The main work moves into the theorem that the integral form agrees with the interval definition. Wikipedia lists the two as equivalent conditions.

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “there exists a Lebesgue integrable function g on \[a,b\] such that f(x) = f(a) + ∫ₐˣ g(t) dt for all x in \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Weak derivatives determine continuous representatives

**Remember:** Integrate the weak derivative and recover only a missing constant.

*Makes the theorem clean to state or prove.* MSC 26A46 (Absolutely continuous real functions in one variable). arXiv math.CA. Level 3: graduate.

**Definition.** On (a,b), an integrable g is the weak derivative of integrable f if ∫fφ′ = −∫gφ for every smooth φ compactly supported in (a,b). An absolutely continuous representative agrees with f almost everywhere and is absolutely continuous.

**Problem.** An integrable real function with an integrable weak derivative on a bounded interval has a unique absolutely continuous representative on the closed interval.

**How the definition helps.** The indefinite integral of g has weak derivative g, so subtracting it from f leaves a function with weak derivative zero (our own). Such a function equals a constant almost everywhere on an interval (our own). Adding that constant to the integral gives an absolutely continuous representative on \[a,b\] (our own). Continuity forces two such representatives agreeing almost everywhere to agree everywhere (our own).

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “it coincides almost everywhere with an absolutely continuous function”

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

**Definition.** In the Laplace representation, f is completely monotone if one positive Borel measure μ on \[0,∞) satisfies f(x) = ∫ exp(−xt) dμ(t) for every x&gt;0. Each integral must be finite.

**Problem.** Let f be the Laplace transform of a positive measure, finite for every x &gt; 0. Then f is smooth, and (−1)ⁿf⁽ⁿ⁾(x) ≥ 0 for every n and every x &gt; 0.

**How the definition helps.** Differentiation gives (−1)ⁿf⁽ⁿ⁾(x) = ∫ tⁿexp(−xt) dμ(t) ≥ 0 (our own). Near each x₀ &gt; 0, a constant times exp(−x₀t/2) dominates each fixed derivative integrand and is integrable (our own). Dominated convergence therefore justifies repeated differentiation (our own). Bernstein’s theorem gives the converse representation (our own).

**Wikipedia:** [Bernstein's theorem on monotone functions](https://en.wikipedia.org/wiki/Bernstein%27s_theorem_on_monotone_functions). It says: “it is the Laplace transform of a positive Borel measure”

**Sources:**

- [Serge Bernstein, Sur les fonctions absolument monotones, Acta Mathematica 52 (1929), 1–66.](https://doi.org/10.1007/BF02592679)

### Affine minorants prove conditional Jensen

**Remember:** Average each line first, then take the supremum.

*True by definition.* MSC 26A51 (Convexity of real functions in one variable, generalizations), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** A finite convex function on the whole line is the supremum of countably many affine minorants. These are straight lines that lie below the function. This describes the same class as requiring the function to lie below each chord between two of its points.

**Problem.** Let X and f(X) be integrable, with f finite and convex on the line. Given the same information, f of the conditional mean of X is at most the conditional mean of f(X), with probability one.

**How the definition helps.** A countable family of affine minorants gives simultaneous lower bounds outside one null set (our own). For each minorant ℓ, conditional averaging gives ℓ(E\[X \| 𝒢\]) = E\[ℓ(X) \| 𝒢\] ≤ E\[f(X) \| 𝒢\] almost surely (our own). Taking the supremum gives the claim (our own). Supporting lines at rational points suffice by continuity and local bounds on their slopes (our own).

**Paper or page:** [Conditional Jensen's Inequality](https://proofwiki.org/wiki/Conditional_Jensen's_Inequality). It says: “f(E\[X \| 𝒢\]) ≤ E\[f(X) \| 𝒢\]”

**Sources:** none listed. No primary source with a working link was found.

### Whitney compatibility excludes impossible slopes

**Remember:** Values and slopes must tell the same Taylor story.

*Rules out counterexamples.* MSC 26B05 (Continuity and differentiation questions). arXiv math.CA. Level 3: graduate.

**Definition.** A first-order Whitney jet assigns a value f(x) and a continuous slope vector p(x) on a closed Euclidean set. On each compact subset, the ratio \|f(y) − f(x) − p(x)·(y−x)\|/‖y−x‖ must tend uniformly to zero as distinct points approach each other.

**Problem.** A first-order Whitney jet on a closed subset of Euclidean space extends to a continuously differentiable function with the prescribed values and slopes.

**How the definition helps.** Taylor compatibility rules out assigning value zero and slope one at every point of {0, 1, ½, ⅓, …} (our own). The slope at zero would have to be zero along that sequence (our own). Whitney’s extension theorem proves sufficiency by gluing local Taylor polynomials off the closed set (our own).

**Wikipedia:** [Whitney extension theorem](https://en.wikipedia.org/wiki/Whitney_extension_theorem). It says: “it is possible to extend a given function of A in such a way as to have prescribed derivatives”

**Sources:**

- [Hassler Whitney, Analytic extensions of differentiable functions defined in closed sets (1934)](https://doi.org/10.1090/S0002-9947-1934-1501735-3)

### Null-set preservation prevents uncounted area

**Remember:** A map must not create positive area from a null set.

*Rules out counterexamples.* MSC 26B15 (Integration of real functions of several variables: length, area, volume), 26B05. arXiv math.CA. Level 3: graduate.

**Definition.** Lusin’s property N means that f sends every Lebesgue null set to a Lebesgue null set. An approximate derivative at x is a linear map A satisfying f(x+h)−f(x)−Ah = o(‖h‖) along a measurable set of increments of density one at zero.

**Problem.** Let f map an open Euclidean set into Euclidean space of the same dimension. Assume f has an approximate derivative almost everywhere and satisfies property N. The integral of the absolute determinant of that derivative equals the integral counting preimages at each target point.

**How the definition helps.** Property N makes the image of the exceptional null set invisible to the preimage integral (our own). Federer’s area theorem supplies the formula on the differentiable pieces (our own). The Cantor function has derivative zero almost everywhere but maps the null Cantor set onto the unit interval (our own).

**Paper or page:** [Local L¹-convergence of Jacobians of Sobolev homeomorphisms via area formula](https://arxiv.org/abs/2501.11106v2). It says: “If f satisfies the Lusin condition (N), then for any measurable function”

**Sources:** none listed. No primary source with a working link was found.

### Averaging gradients gives a center that splits expected Bregman divergence exactly

**Remember:** Average gradients to find the center for a random second argument.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 62C05. arXiv cs.LG, stat.ML. Level 3: graduate.

**Definition.** Let F be differentiable and strictly convex on an open convex set. Its Bregman divergence is D(s‖x) = F(s) − F(x) − ⟨∇F(x),s−x⟩. For a random second argument X, its center x\* satisfies ∇F(x\*) = E\[∇F(X)\] when such a point exists.

**Problem.** If x\* exists and the expectations are finite, then E\[D(s‖X)\] = D(s‖x\*) + E\[D(x\*‖X)\] for every s. This gives a bias–variance decomposition for squared error and for the log loss of exponential families.

**How the definition helps.** Subtracting D(x\*‖X) from D(s‖X) cancels F(X) (our own). The remaining expression is F(s) − F(x\*) − ⟨∇F(X),s−x\*⟩ (our own). Taking expectations replaces the random gradient by ∇F(x\*), giving D(s‖x\*) (our own).

**Paper or page:** [A Generalized Bias-Variance Decomposition for Bregman Divergences](https://arxiv.org/abs/2511.08789v1). It says: “Let F : 𝒮 → ℝ be a strictly convex differentiable function, and X be a random variable on 𝒮. Then for any point s ∈ 𝒮, the expected Bregman divergences have the following exact decomposition: 𝔼\[D<sub>F</sub>\[s\|\|X\]\] = D<sub>F</sub>\[s\|\|x\*\] + 𝔼\[D<sub>F</sub>\[x\*\|\|X\]\], where x\* = argmin<sub>z</sub> 𝔼\[D<sub>F</sub>\[z\|\|X\]\]”

**Sources:**

- [David Pfau, A Generalized Bias-Variance Decomposition for Bregman Divergences, arXiv:2511.08789v1 (2025)](https://arxiv.org/abs/2511.08789v1)

### Besides ±∞, only proper closed convex functions equal their biconjugate

**Remember:** Proper, closed and convex means the double conjugate gives f back.

*Rules out counterexamples.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 49N15. arXiv math.OC, math.CA. Level 3: graduate.

**Definition.** An extended real function is proper if it never takes −∞ and has at least one finite value. It is lower semicontinuous if {x : f(x) ≤ c} is closed for every real c.

**Problem.** On a Hausdorff locally convex space, every extended real function satisfies f\*\* ≤ f, using the continuous dual. Equality holds exactly for proper lower semicontinuous convex functions and the two constant functions +∞ and −∞.

**How the definition helps.** The biconjugate takes the supremum of continuous affine minorants, giving f\*\* ≤ f (our own). Fenchel–Moreau separation recovers each proper lower semicontinuous convex function this way (our own). An upward endpoint jump breaks lower semicontinuity, and any value −∞ forces f\*\* to be identically −∞ (our own). Both infinite constant functions equal their biconjugates (our own).

**Wikipedia:** [Fenchel–Moreau theorem](https://en.wikipedia.org/wiki/Fenchel%E2%80%93Moreau_theorem), [Proper convex function](https://en.wikipedia.org/wiki/Proper_convex_function). It says: “a proper convex function is an extended real-valued convex function with a non-empty domain, that never takes on the value −∞ and also is not identically equal to +∞.”

**Sources:**

- [W. Fenchel, On conjugate convex functions, Canadian Journal of Mathematics 1 (1949)](https://doi.org/10.4153/CJM-1949-007-x)
- [J. J. Moreau, Proximité et dualité dans un espace hilbertien, Bulletin de la Société Mathématique de France 93 (1965)](https://doi.org/10.24033/bsmf.1625)

### Curvature bounds survive limits

**Remember:** Subtract the same quadratic before passing to the limit.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 3: graduate.

**Definition.** For K ≥ 0, a function on a convex domain is K-semiconcave when subtracting K times half the squared norm makes it concave. This replaces an upper bound on second derivatives, which may not exist.

**Problem.** A uniform limit of functions with the same semiconcavity constant K is K-semiconcave.

**How the definition helps.** After subtracting the same quadratic, every function satisfies the ordinary concavity inequality, which passes to the limit (our own). For twice differentiable functions, this definition bounds every second derivative along a unit direction from above by K (our own). The one-variable second derivative test along lines proves the equivalence (our own).

**Paper or page:** [Global propagation of singularities for magnetic mechanical systems](https://arxiv.org/abs/2509.13433v1). It says: “then ψ is K-semiconcave.”

**Sources:** none listed. No primary source with a working link was found.

### Log-concavity survives integration

**Remember:** The geometric-mean inequality lets you integrate whole slices at once.

*Makes the theorem clean to state or prove.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 26D15. arXiv math.CA. Level 3: graduate.

**Definition.** Call a nonnegative function log-concave if its value at a weighted average is at least the weighted geometric mean of its endpoint values. Unlike the formula using an ordinary logarithm, this definition allows zeros for weights strictly between zero and one.

**Problem.** Let F be a nonnegative measurable log-concave function on a product of Euclidean spaces, with finite integrals over all second-variable slices. Integrating over the second variable gives a log-concave function of the first.

**How the definition helps.** Joint log-concavity is exactly the pointwise comparison that Prékopa–Leindler needs for two endpoint slices and the middle slice (our own). The hard work shifts to that integral inequality, which turns the pointwise geometric mean bound into the same bound for the integrals (our own).

**Wikipedia:** [Logarithmically concave function](https://en.wikipedia.org/wiki/Logarithmically_concave_function). It says: “is log-concave (see Prékopa–Leindler inequality).”

**Sources:** none listed. No primary source with a working link was found.

### Strict epigraphs make partial minimization a projection

**Remember:** A height strictly above the infimum already lies above some feasible value.

*True by definition. Confidence: medium.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** The strict epigraph of f consists of all (x,t) with t &gt; f(x). A function is convex if its strict epigraph is a convex set.

**Problem.** Let f(x, y) be jointly convex and let C be a convex set. If the infimum of f(x, y) over y in C is never −∞, then it is convex as a function of x.

**How the definition helps.** The strict-epigraph definition turns partial minimization into a linear projection, which preserves convexity. In our own proof, a height above the infimum exceeds f(x, y) for at least one y in C. So the strict epigraph of the infimum is the projection, omitting y, of the strict epigraph restricted to y in C. The ordinary epigraph need not project onto the ordinary epigraph when the infimum is not attained.

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “provided that C is a convex set and that g(x) ≠ −∞.”

**Sources:** none listed. No primary source with a working link was found.

### Subtracting quadratics gives strong monotonicity

**Remember:** Subtract the quadratic, use monotonicity, then put the quadratic back.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 3: graduate.

**Definition.** For ρ &gt; 0, call a real function on Euclidean space strongly convex with constant ρ if subtracting ρ‖x‖²/2 leaves a convex function. Equivalently, its chord inequality improves the ordinary convexity bound by a quadratic term. A subgradient is the slope of an affine function touching the graph from below.

**Problem.** Subgradients p and q at x and y satisfy ⟨p − q, x − y⟩ ≥ ρ‖x − y‖².

**How the definition helps.** Subtracting the quadratic turns the claimed bound into ordinary monotonicity of supporting slopes (our own). The subgradient sum rule subtracts ρx from the slope at x (our own). Adding the two supporting inequalities gives monotonicity (our own). Expanding the squared norm in the chord inequality proves the two definitions agree (our own).

**Paper or page:** [New Douglas-Rashford Splitting Algorithms for Generalized DC Programming with Applications in Machine Learning](https://arxiv.org/abs/2404.14800v1). It says: “If f is ρ-strongly convex, then ∂f is ρ-strongly monotone.”

**Sources:** none listed. No primary source with a working link was found.

### The epigraph cone shows why a perspective stays convex

**Remember:** A perspective scales a convex epigraph into a convex cone.

*True by definition. Confidence: medium.* MSC 26B25 (Convexity of real functions of several variables, generalizations), 52A41. arXiv math.OC. Level 3: graduate.

**Definition.** The perspective of f is g(x, t) = t·f(x/t) for t &gt; 0 and x/t in the domain of f. Its epigraph is the set of points (x, t, s) with s ≥ g(x, t). A function is convex exactly when its epigraph is convex.

**Problem.** If f is convex, its perspective is jointly convex in (x, t).

**How the definition helps.** The perspective epigraph consists of the positive multiples of points (u,1,r) with r ≥ f(u) (our own). Indeed, (x,t,s) belongs exactly when t &gt; 0 and s/t ≥ f(x/t) (our own). Positive multiples of a convex set form a convex set, so the epigraph is convex (our own).

**Wikipedia:** [Convex function](https://en.wikipedia.org/wiki/Convex_function). It says: “If f is convex, then its perspective g(x, t) = t f(x/t) with domain {(x,t) : x/t ∈ Dom(f), t &gt; 0} is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Clipping removes perimeter levels

**Remember:** Clipping throws away levels without changing the levels it keeps.

*True by definition.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation). arXiv math.CA. Level 3: graduate.

**Definition.** For measurable E in Ω, its perimeter is sup ∫<sub>E</sub> div φ over smooth compactly supported vector fields on Ω with ‖φ‖ ≤ 1 everywhere. Define the variation of f by integrating the perimeters of {x ∈ Ω : f(x) &gt; t} over all real t.

**Problem.** Let f be integrable with finite variation on an open Euclidean set. Clipping its values to \[a,b\], where a ≤ 0 ≤ b, cannot increase its variation.

**How the definition helps.** Clipping keeps the upper level sets for heights strictly between a and b (our own). At other heights, apart from endpoints, the sets are empty or full and have zero perimeter inside the domain (our own). Clipping toward an interval containing zero preserves integrability (our own). The coarea theorem identifies variation with the perimeter integral and gives finite variation when that integral is finite.

**Paper or page:** [Free-Boundary Monotonicity for Almost-Minimizers of the Relative Perimeter](https://arxiv.org/abs/2407.05039v2). It says: “\|Df\|(Ω) = ∫ℝ P(Eₜ; Ω) dt”

**Sources:** none listed. No primary source with a working link was found.

### Smoothing cannot increase variation

**Remember:** Average translated derivatives before taking their mass.

*True by definition.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation). arXiv math.CA. Level 3: graduate.

**Definition.** Integration by parts defines the weak derivative. For a function of bounded variation, this derivative is a vector measure, and total variation is its mass. Smooth the function by averaging translates against a nonnegative smooth function with compact support and integral one.

**Problem.** On all of Euclidean space, smoothing an integrable function of bounded variation cannot increase its total variation.

**How the definition helps.** The smoothed derivative averages translated derivative measures, so the triangle inequality bounds its mass by their average mass (our own). Translation preserves that mass (our own). The cited identity lets the derivative pass through the average. The measure representation theorem identifies this mass with the usual supremum over smooth test fields of length at most one (our own).

**Paper or page:** [Weighted Bounded Variation Revisited](https://arxiv.org/abs/2510.14105v1). It says: “D(f ∗ ηε) = \[Df\] ∗ ηε”

**Sources:** none listed. No primary source with a working link was found.

### The duality definition of total variation makes it lower semicontinuous in L¹

**Remember:** A supremum of continuous functionals is lower semicontinuous.

*True by definition.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation), 49J45. arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** For f in L¹ of an open set Ω in ℝⁿ, define its total variation as the supremum of the integrals of f div φ. Here φ ranges over continuously differentiable vector fields with compact support in Ω and \|φ\| ≤ 1 everywhere. For continuously differentiable f, this equals the integral of \|∇f\|.

**Problem.** If fₙ → f in L¹(Ω), then the total variation of f is at most the limit inferior of the total variations of fₙ.

**How the definition helps.** Each test integral is continuous in L¹ because div φ is bounded (our own). Its limit therefore cannot exceed the limit inferior of the variations of fₙ (our own). Taking the supremum over φ gives the asserted bound.

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation), [Total variation](https://en.wikipedia.org/wiki/Total_variation). It says: “lim infₙ→∞ V(uₙ,Ω) ≥ V(u,Ω) which is exactly the definition of lower semicontinuity.”

**Sources:** none listed. No primary source with a working link was found.

### Centered balls maximize rearranged overlap

**Remember:** Centered balls nest, so their overlap is as large as possible.

*Makes the theorem clean to state or prove.* MSC 26D15 (Inequalities for sums, series and integrals), 28A25. arXiv math.CA. Level 3: graduate.

**Definition.** Symmetric decreasing rearrangement replaces every set where a nonnegative function exceeds a given height by a centered ball of equal volume. The nested balls determine the rearranged function.

**Problem.** For nonnegative measurable functions on Euclidean space with finite positive-height level volumes, rearranging both cannot decrease the integral of their product.

**How the definition helps.** Two centered balls overlap in the entire smaller ball, the largest possible overlap for sets of their volumes. The layer cake formula expresses each function value as the length of the interval of heights below it. Integrating the resulting product counts overlaps over all pairs of heights. In our own justification, Tonelli’s theorem permits this change of integration order because the integrand is nonnegative.

**Wikipedia:** [Hardy–Littlewood inequality](https://en.wikipedia.org/wiki/Hardy%E2%80%93Littlewood_inequality). It says: “is exactly the smaller one of the two balls:”

**Sources:** none listed. No primary source with a working link was found.

### Concentration is convex by supremum

**Remember:** Concentration at a fixed length is a maximum over linear tests.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** Take a real integrable function on a finite interval. For each length t between zero and the interval length, its concentration is the supremum of its integrals over measurable subsets of length t. Another formula integrates its decreasing rearrangement, which sorts function values from largest to smallest while preserving the measure above every height.

**Problem.** On a finite interval, concentration at fixed length is convex as a function of the input function.

**How the definition helps.** Each test integrates over a fixed set, so it is linear, and the supremum of linear tests is convex (our own). The rearrangement formula carries the work of showing which sets attain the supremum (our own). Pick the highest values first and split a level set when ties occur (our own).

**Paper or page:** [Symmetrization of measures and the one-dimensional Poisson equation with Dirichlet boundary conditions](https://arxiv.org/abs/2506.13311v1). It says: “there exists a Borel set E ⊂ \[−π, π\] with λ(E) = t”

**Sources:**

- [Symmetrization of measures and the one-dimensional Poisson equation with Dirichlet boundary conditions](https://arxiv.org/abs/2506.13311v1)

### Concentric levels maximize product integrals

**Remember:** Concentric balls overlap as much as their volumes allow.

*True by definition.* MSC 26D15 (Inequalities for sums, series and integrals). arXiv math.CA. Level 3: graduate.

**Definition.** Define the symmetric decreasing rearrangement by replacing every upper level set by a ball of the same volume centered at zero. These nested balls determine a new nonnegative function.

**Problem.** For two nonnegative measurable functions with finite upper level volumes at every positive height, rearranging both cannot decrease the integral of their product.

**How the definition helps.** Concentric balls realize the largest possible intersection at each pair of heights. The usual description asks for a radially decreasing function with the original volumes above each height (our own). Taking centered balls constructs those level sets up to sets of measure zero (our own). Integrating their intersection volumes over both heights gives the product integral by Tonelli’s theorem (our own).

**Wikipedia:** [Hardy–Littlewood inequality](https://en.wikipedia.org/wiki/Hardy%E2%80%93Littlewood_inequality). It says: “we continue by estimating the volume of the intersection by the minimum of the volumes of the two sets.”

**Sources:** none listed. No primary source with a working link was found.

### Frequency gaps bound mean squares

**Remember:** Close frequencies behave like one frequency until the interval resolves them.

*Rules out counterexamples.* MSC 26D15 (Inequalities for sums, series and integrals), 30B50. arXiv math.CA, math.NT. Level 3: graduate.

**Definition.** Let P(t) = ∑ aⱼ exp(itλⱼ) have finitely many real frequencies, with at least two terms. Define δ as the smallest distance between two differently indexed frequencies. Require δ &gt; 0.

**Problem.** On every interval of length T, the integral of \|P(t)\|² equals (T + O(1/δ))∑ \|aⱼ\|². The implied constant is absolute.

**How the definition helps.** Separation bounds interference through the minimum frequency gap (our own). Two identical frequencies with unit coefficients instead give integral 4T while their diagonal contribution is only 2T (our own). For distinct frequencies, integrating the off-diagonal terms gives two endpoint sums (our own). Montgomery and Vaughan’s Hilbert inequality bounds each by an absolute constant times ∑ⱼ \|aⱼ\|²/δ (our own).

**Wikipedia:** [Hilbert's inequality](https://en.wikipedia.org/wiki/Hilbert%27s_inequality). It says: “Montgomery &amp; Vaughan reported several generalizations of Hilbert's inequality”

**Paper or page:** [Negative moments of the Riemann zeta-function](https://arxiv.org/abs/2302.07226). It says: “\\int \_T<sup>2T</sup> \\Big\|\\sum <sub>n\\leq N</sub> \\frac{a(n)}{n<sup>1/2+it</sup>}\\Big\|<sup>2</sup> \\,  dt = \\big(T+O(N)\\big)\\sum <sub>n\\leq N</sub>\\frac{\|a(n)\|<sup>2}{n}</sup>.”

**Sources:**

- [H. L. Montgomery and R. C. Vaughan, Hilbert’s inequality, J. London Math. Soc. 8 (1974), 73–82](https://doi.org/10.1112/jlms/s2-8.1.73)

### Local gaps sharpen mean squares

**Remember:** One close pair need not penalize all the coefficients.

*Makes the theorem clean to state or prove.* MSC 26D15 (Inequalities for sums, series and integrals), 30B50. arXiv math.CA, math.NT. Level 3: graduate.

**Definition.** Take finitely many distinct real frequencies λⱼ, with at least two terms. Let δⱼ be the distance from λⱼ to its nearest neighbor. Write P(t) = ∑ aⱼ exp(itλⱼ).

**Problem.** On any interval of length T, the integral of \|P(t)\|² differs from T∑ \|aⱼ\|² by at most C∑ \|aⱼ\|²/δⱼ. The constant C is absolute.

**How the definition helps.** Each coefficient pays for the distance to its own nearest frequency. In our own derivation, expanding the square gives two endpoint sums over unequal frequencies. Montgomery and Vaughan’s weighted Hilbert inequality bounds both sums using the individual gaps.

**Wikipedia:** [Hilbert's inequality](https://en.wikipedia.org/wiki/Hilbert%27s_inequality). It says: “are distinct real numbers.”

**Paper or page:** [Negative moments of the Riemann zeta-function](https://arxiv.org/abs/2302.07226). It says: “\\int \_T<sup>2T</sup> \\Big\|\\sum <sub>n\\leq N</sub> \\frac{a(n)}{n<sup>1/2+it</sup>}\\Big\|<sup>2</sup> \\,  dt = \\big(T+O(N)\\big)\\sum <sub>n\\leq N</sub>\\frac{\|a(n)\|<sup>2}{n}</sup>.”

**Sources:**

- [H. L. Montgomery and R. C. Vaughan, Hilbert’s inequality, J. London Math. Soc. 8 (1974), 73–82](https://doi.org/10.1112/jlms/s2-8.1.73)

### Testing smoothness on curves gives the exponential law for smooth maps

**Remember:** Test curves by linear functionals, then test maps by curves.

*Makes the theorem clean to state or prove.* MSC 26E15 (Calculus of functions on infinite-dimensional spaces), 58B10. arXiv math.FA, math.DG. Level 3: graduate.

**Definition.** A Hausdorff locally convex space is convenient if every scalarwise smooth curve c from ℝ has continuous derivatives of all orders in the space. Scalarwise smooth means ℓ∘c is smooth for every continuous linear functional ℓ. A smooth map between convenient spaces sends each smooth curve to a smooth curve.

**Problem.** For convenient vector spaces X, Y and Z, the exponential law C∞(X × Y, Z) ≅ C∞(X, C∞(Y, Z)) holds. So the category of convenient vector spaces and smooth maps is cartesian closed.

**How the definition helps.** Testing maps on curves gives a common smoothness condition for maps into function spaces and maps on products (our own). The convenient exponential law of Kriegl and Michor supplies the smooth function-space structure and identifies the two kinds of maps (our own).

**nLab:** [convenient vector space](https://ncatlab.org/nlab/show/convenient+vector+space), [Boman's theorem](https://ncatlab.org/nlab/show/Boman%27s+theorem), [manifold structure of mapping spaces](https://ncatlab.org/nlab/show/manifold+structure+of+mapping+spaces). It says: “The category of convenient vector spaces and smooth functions between them is a cartesian closed category.”

**Sources:**

- [Andreas Kriegl, Peter W. Michor, The convenient setting of global analysis, Mathematical Surveys and Monographs 53, AMS (1997)](https://www.mat.univie.ac.at/~michor/apbookh.pdf)
- [Jan Boman, Differentiability of a function and of its compositions with functions of one variable, Mathematica Scandinavica 20 (1967) 249–268](https://journals.msp.org/mscand/article/view/2491)

### Infinitesimals make open, closed and compact one-quantifier conditions

**Remember:** Monads collect infinitely close points, and standard parts identify their real neighbors.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26E35 (Nonstandard analysis), 54J05, 03H05. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** Use a hyperreal ultrapower of ℝ over a nonprincipal ultrafilter on the natural numbers. The monad of r consists of points closer to r than every positive real distance. The standard part of a finite hyperreal is the unique real whose monad contains it.

**Problem.** Let E ⊆ ℝ have hyperreal extension \*E. Openness means each member’s monad lies in \*E, and closedness means every finite point of \*E has standard part in E. Compactness means every point of \*E is finite and has standard part in E.

**How the definition helps.** Monads and standard parts replace each nested ε–δ condition by one check on hyperreal points. The nLab calls these an elementary fact. The real content is the transfer principle, which follows from Łoś's theorem on ultraproducts.

**nLab:** [nonstandard analysis](https://ncatlab.org/nlab/show/nonstandard+analysis), [ultraproduct](https://ncatlab.org/nlab/show/ultraproduct). It says: “a subset E ⊂ ℝ is open iff μ(r) ⊂ \*E for all r ∈ E; E is closed iff st(x) ∈ E for all finite x ∈ \*E; and E is compact iff, for all x ∈ \*E, x is finite and st(x) ∈ E.”

**Sources:**

- [Abraham Robinson, Non-standard Analysis, North-Holland (1966); revised edition, Princeton University Press (1996)](https://doi.org/10.1515/9781400884223)

### A dense set of non-zeros gives a constructive intermediate value theorem

**Remember:** Every open subinterval contains a point whose value has positive absolute value.

*Rules out counterexamples. Confidence: medium.* MSC 26E40 (Constructive real analysis), 03F60, 26A15. arXiv math.CA, math.LO. Level 3: graduate.

**Definition.** Say that f has dense non-zeros when, between any two points a &lt; b, there is a point c with \|f(c)\| &gt; 0.

**Problem.** Constructively, a uniformly continuous f : \[0,1\] → ℝ with f(0) &lt; 0 &lt; f(1) and dense non-zeros has a zero. The usual intermediate value theorem, without the extra hypothesis, cannot be proved constructively.

**How the definition helps.** Dense nonzeros give a point of decidable sign in the middle third of each bracket (our own). Retain the bracket with opposite endpoint signs, shrinking its length by at least one third (our own). Uniform continuity makes the common limit a zero (our own). A zero plateau can prevent a sign decision throughout the middle third (our own).

**nLab:** [intermediate value theorem](https://ncatlab.org/nlab/show/intermediate+value+theorem). It says: “As normally stated, the IVT is not valid in constructive mathematics, although there are constructively valid versions. These versions either weaken the conclusion to an approximate zero, or to strengthen the hypothesis”

**Sources:**

- [Auke B. Booij, Extensional constructive real analysis via locators (2018), arXiv:1805.06781](https://arxiv.org/abs/1805.06781)
- [Andrej Bauer, Five stages of accepting constructive mathematics, Bull. Amer. Math. Soc. 54 (2017) 481–498](https://doi.org/10.1090/bull/1556)

### Dedekind real numbers are always Cauchy complete

**Remember:** A cut gives all rational bounds at once, so no choices are needed.

*Rules out counterexamples.* MSC 26E40 (Constructive real analysis), 03F60. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** A Dedekind real consists of nonempty rational sets L,U, respectively downward and upward closed. Every lower member has a larger lower member, and every upper member has a smaller upper member. Every lower member lies below every upper member, and for rationals a &lt; b either a ∈ L or b ∈ U.

**Problem.** The Dedekind real numbers are Cauchy complete, even without countable choice: every Cauchy sequence of Dedekind reals converges to a Dedekind real.

**How the definition helps.** The limit cut records eventual bounds with a positive rational margin (our own). Put q in L when some rational r &gt; q eventually lies below every sequence term, and define U symmetrically (our own). Cauchy closeness gives locatedness and convergence without choosing rational approximants for every term (our own). Lubarsky’s countermodel shows that Cauchy reals can lack this completeness without countable choice.

**nLab:** [Cauchy real number](https://ncatlab.org/nlab/show/Cauchy+real+number), [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut). It says: “a Cauchy sequence (even a modulated one) of Cauchy real numbers need not converge to another Cauchy real number (though it always does converge to a Dedekind real number, since the Dedekind real numbers are always Cauchy complete).”

**Sources:**

- [Robert S. Lubarsky, On the Cauchy completeness of the constructive Cauchy reals, Electronic Notes in Theoretical Computer Science 167 (2007) 225–254](https://doi.org/10.1016/j.entcs.2006.09.012)

### With lower reals, every inhabited set has a supremum constructively

**Remember:** Know a number only from below, and a supremum is just a union.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 26E40 (Constructive real analysis), 03F60. arXiv math.LO, math.CA. Level 3: graduate.

**Definition.** A lower real is an inhabited downward-closed set L of rationals such that each q ∈ L lies below some r ∈ L. Inclusion orders lower reals, and ℚ itself represents +∞.

**Problem.** Constructively, every inhabited set of lower reals has a supremum, namely the union of their sets of rationals. For the usual real numbers, a bounded inhabited set need not have a supremum constructively.

**How the definition helps.** The union contains each member and lies inside every common upper bound (our own). An inhabited family of inhabited cuts has inhabited union (our own). Downward closure and the existence of a larger member both pass from each cut to the union (our own).

**nLab:** [one-sided real number](https://ncatlab.org/nlab/show/one-sided+real+number). It says: “Explicitly, the supremum of any inhabited set of lower reals is a lower real and the infimum of any inhabited set of upper reals is an upper real.”

**Sources:**

- [J. Z. Reichman, Semicontinuous real numbers in a topos, Journal of Pure and Applied Algebra 28 (1983) 81–91](https://doi.org/10.1016/0022-4049(83)90075-0)

### The genuine integral of cogerm forms ignores second-order terms

**Remember:** Every sufficiently local tagged contribution is negligible compared with its interval length.

*True by definition. Confidence: medium.* MSC 26A39 (Denjoy and Perron integrals, other special integrals), 58A10. arXiv math.CA, math.DG. Level 4: research.

**Definition.** Along a given smooth curve, write W(t,u,v) for the form’s contribution on \[u,v\] tagged at t ∈ \[u,v\]. The form is o(dx) there if each ε&gt;0 and tag t admit δ&gt;0 with \|W(t,u,v)\| ≤ ε(v−u) whenever \[u,v\] ⊂ (t−δ,t+δ).

**Problem.** The genuine integral of every o(dx) form, such as dx² or d²x, is zero. So the trapezoid integrand f(x) dx + ½ f′(x) dx² has the same genuine integral as f(x) dx.

**How the definition helps.** Choose the local radii as a gauge for the tagged partitions (our own). Every fine sum on \[a,b\] has absolute value at most ε(b−a), so the genuine integral vanishes (our own). Along a smooth curve the second-order terms satisfy this bound, and adding them leaves the integral unchanged (our own).

**nLab:** [cogerm differential form](https://ncatlab.org/nlab/show/cogerm+differential+form). It says: “The answer 0 given by the genuine integral is preferable if we regard dx as a "first-order change in x", so that dx² or d²x are "second-order" quantities and hence ought to be negligible.”

**Sources:** none listed. No primary source with a working link was found.

### Flat directions block convex smoothing

**Remember:** A flat direction can repeat a corner across infinite space.

*Rules out counterexamples.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 4: research.

**Definition.** Consider a finite convex function on Euclidean space. Its graph contains a full line if the function is affine along some entire straight line. A locally Lipschitz gradient changes by at most a constant times distance near each point.

**Problem.** Let f be finite and convex on Euclidean space, without a locally Lipschitz gradient. Call g an ε-approximation if it is convex, has locally Lipschitz gradient and differs from f on a set of measure below ε. Such approximations exist for every ε &gt; 0 exactly when the graph of f contains no full line.

**How the definition helps.** Excluding full lines rules out a corner that repeats unchanged along an infinite direction (our own). For f(x,y) = \|x\|, a small disagreement area forces agreement at points arbitrarily far up and down almost every vertical line (our own). Convexity then makes the approximation constant on those lines, so it agrees with \|x\| everywhere, corner included (our own). The cited theorem proves sufficiency.

**Paper or page:** [C²-Lusin approximation of convex functions: one variable case](https://arxiv.org/abs/2505.22975v2). It says: “The graph of f does not contain any line isometric to ℝ.”

**Sources:** none listed. No primary source with a working link was found.

### Retained slopes preserve contact

**Remember:** Keep the touching slope and you keep the value.

*True by definition.* MSC 26B25 (Convexity of real functions of several variables, generalizations). arXiv math.CA. Level 4: research.

**Definition.** Let f be a proper closed convex function on Euclidean space. Let C be a compact set containing the slope of at least one affine minorant of f. Define g as the supremum of all affine minorants of f with slopes in C.

**Problem.** The function g has a global Lipschitz bound, meaning its changes are bounded by a constant times distance. It equals f at x exactly when an allowed affine function touches f there.

**How the definition helps.** Every allowed affine minorant has Lipschitz constant at most max<sub>p∈C</sub>‖p‖, so the finite supremum function shares that bound (our own). A touching minorant forces equality at its contact point (our own). At fixed x, the best height for slope p is inf<sub>y</sub>(f(y) + ⟨p,x−y⟩), upper semicontinuous in p (our own). Its maximum on C gives a touching minorant whenever g(x) = f(x) (our own).

**Paper or page:** [Singularities of Fitzpatrick and convex functions](https://arxiv.org/abs/2212.09954v3). It says: “∂f(x) ∩ C ≠ ∅ ⇔ f(x) = f꜀(x)”

**Sources:** none listed. No primary source with a working link was found.

### Height absorbs variation weights

**Remember:** Make a weight the height of an extra coordinate.

*Makes the theorem clean to state or prove.* MSC 26B30 (Absolutely continuous real functions of several variables, functions of bounded variation). arXiv math.CA. Level 4: research.

**Definition.** On an open subset of Euclidean space, take a positive weight w whose strict upper level sets are open. Above each point x, use the vertical interval 0 &lt; t &lt; w(x). Give every point in that interval the value f(x). Weighted variation integrates w against the total mass measure of the derivative defined by integration by parts.

**Problem.** Suppose both the weighted integral of \|f\| and the weighted variation of f are finite. The ordinary integral of the lifted absolute value and its ordinary variation equal the respective weighted quantities.

**How the definition helps.** Each vertical interval contributes its length w(x) when we integrate the lifted absolute value (our own). For variation, the lifting theorem shows that only horizontal changes contribute. Integrating their mass up each interval gives the same factor w(x) (our own).

**Paper or page:** [Weighted Bounded Variation Revisited](https://arxiv.org/abs/2510.14105v1). It says: “is an isometric embedding”

**Sources:**

- [Weighted Bounded Variation Revisited](https://arxiv.org/abs/2510.14105v1)

### Derivative growth bounds make Taylor data unique

**Remember:** Bound all derivatives by weights whose successive ratios have divergent reciprocal sum.

*Rules out counterexamples.* MSC 26E10 (\\(C<sup>\\infty\\</sup>)-functions, quasi-analytic functions). arXiv math.CA. Level 4: research.

**Definition.** Take positive weights Mₖ with M₀ = 1 whose successive ratios are nondecreasing and tend to infinity. In the corresponding class, one constant C ≥ 1 bounds the absolute kth derivative everywhere by Mₖ times the (k + 1)st power of C. Require the sum of the reciprocals of the successive ratios to diverge.

**Problem.** Two functions in this class on a closed interval coincide if their values and all their derivatives agree at one interior point.

**How the definition helps.** The Denjoy–Carleman theorem makes the divergent sum a test for uniqueness from derivatives at one point. Our own counterexample for a convergent sum is the smooth bump exp(−1/(1 − x²)) on \|x\| &lt; 1, extended by zero. Weights that bound its derivatives on \[−2,2\] can be chosen with ratios at least k², so the reciprocal sum is finite. At the interior point 1 the bump and zero have the same derivatives of every order.

**Wikipedia:** [Quasi-analytic function](https://en.wikipedia.org/wiki/Quasi-analytic_function). It says: “the only function in it having all its partial derivatives equal to zero at a point is the function identically equal to zero.”

**Paper or page:** [Ultradifferentiable extension theorems: a survey](https://arxiv.org/abs/2107.01061v2). It says: “∑ₖ 1/μₖ = ∞.”

**Sources:** none listed. No primary source with a working link was found.

### Convergence at every nonstandard point makes Cauchy's proof correct

**Remember:** Convergence everywhere, nonstandard points included, is uniform convergence.

*True by definition. Confidence: medium.* MSC 26E35 (Nonstandard analysis), 40A30, 26A15. arXiv math.CA, math.HO. Level 4: research.

**Definition.** Let fₙ and f be real functions on D, and extend the sequence and f to the hyperreals. Uniform convergence means that for every infinite hypernatural n and every x ∈ \*D, the extended value (\*f)ₙ(x) is infinitely close to f\*(x).

**Problem.** If continuous functions fₙ converge at every hyperreal point, their limit is continuous. Under this reading, Cauchy's 1821 proof of his sum theorem works as written.

**How the definition helps.** For x infinitely close to a real a ∈ D, compare f\*(x) and f(a) through one standard continuous approximant (our own). Uniform convergence makes both approximation errors arbitrarily small, while continuity makes the approximant’s change infinitesimal (our own). Thus f is continuous (our own). The cited historical reading interprets Cauchy’s convergence hypothesis as this uniform condition.

**nLab:** [Cauchy sum theorem](https://ncatlab.org/nlab/show/Cauchy+sum+theorem). It says: “By this analysis, Cauchy's notion of convergence everywhere is our modern notion of uniform convergence, not pointwise convergence, and his theorem is true”

**Sources:**

- [Abraham Robinson, Non-standard Analysis, North-Holland (1966); revised edition Princeton University Press (1996)](https://doi.org/10.1515/9781400884223)
- [Imre Lakatos, Mathematics, Science and Epistemology (Philosophical Papers vol. 2), Cambridge University Press (1978), chapter 3](https://doi.org/10.1017/CBO9780511624926)

### The HoTT book real numbers are complete because limits are constructors

**Remember:** Every Cauchy approximation has a limit because "limit" is a constructor.

*True by definition.* MSC 26E40 (Constructive real analysis), 03B38. arXiv math.LO, math.CA. Level 4: research.

**Definition.** The HoTT reals are the freely generated Cauchy completion of ℚ, with a limit constructor for each Cauchy approximation x. Such an approximation assigns x(ε) to each positive rational ε, with x(ε) and x(δ) within ε+δ for all positive rational ε,δ. The construction identifies points within ε of each other for every positive rational ε.

**Problem.** The HoTT reals admit limits of regular Cauchy sequences without countable choice. In particular, analytic functions such as exp, sin and cos are well defined on them.

**How the definition helps.** A specified Cauchy rate turns a regular sequence into an approximation accepted by the limit constructor (our own). The accompanying closeness rules ensure that the constructed point is its limit (our own). The cited power-series examples use this completeness.

**nLab:** [HoTT book real number](https://ncatlab.org/nlab/show/HoTT+book+real+number). It says: “The analytic functions, such as the exponential function, the sine function, and the cosine function are well defined in the HoTT book real numbers, since all regular Cauchy sequences converge in the HoTT book real numbers.”

**Sources:**

- [The Univalent Foundations Program, Homotopy Type Theory: Univalent Foundations of Mathematics, Institute for Advanced Study (2013)](https://homotopytypetheory.org/book/)
- [Auke Booij, Analysis in Univalent Type Theory, PhD thesis, University of Birmingham (2020)](http://etheses.bham.ac.uk/id/eprint/10411)

### Changed coordinates reveal mean convexity

**Remember:** Change scale, then use Jensen on the midpoint map.

*Makes the theorem clean to state or prove.* MSC 26E60 (Means), 26B25. arXiv math.CA. Level 4: research.

**Definition.** Let f be continuous and strictly increasing on an interval. Define the mean of a list by averaging its f-values with nonnegative weights totaling one, then applying the inverse of f. For u and v in the range, let H(u,v) be f at the midpoint of their inverse images.

**Problem.** For two lists with common weights, compare the mean of their coordinatewise midpoints with the midpoint of their means. The first never exceeds the second, for any lists and weights, exactly when H is concave.

**How the definition helps.** Applying f turns the comparison of means into Jensen’s inequality for H on pairs of transformed entries (our own). Every pair in the range has inverse images, so the mean comparisons also give every weighted concavity inequality for H (our own).

**Paper or page:** [Hölder- and Minkowski-type inequalities for generalized quasi-arithmetic means](https://arxiv.org/abs/2511.05411v1). It says: “The function f is continuous and the function Ψ: f(I)² → ℝ defined by”

**Sources:** none listed. No primary source with a working link was found.

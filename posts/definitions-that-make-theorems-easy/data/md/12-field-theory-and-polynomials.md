### Counting roots with multiplicity makes every degree-n polynomial have n roots

**Remember:** A double root is one root that you count twice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 30C15. arXiv math.AC, math.CV. Level 1: early undergraduate.

**Definition.** Let a be a root of a polynomial p. The multiplicity of a is the largest k such that (x−a)ᵏ divides p.

**Problem.** Over the complex numbers, every polynomial of degree n ≥ 1 has exactly n roots.

**How the definition helps.** Counting with multiplicity lets the statement hold with no exceptions. Take x³ + 2x² − 7x + 4 = (x+4)(x−1)². As a set, its roots are only −4 and 1, so 'exactly n roots' would be false. With multiplicity, the root 1 counts twice, and the count is 3. The hard part does not become easier: a complex root must exist at all, and that is the fundamental theorem of algebra (our own remark).

**Wikipedia:** [Multiplicity (mathematics)](https://en.wikipedia.org/wiki/Multiplicity_%28mathematics%29). It says: “The notion of multiplicity is important to be able to count correctly without specifying exceptions (for example, double roots counted twice).”

**Sources:** none listed. No primary source with a working link was found.

### Zero coefficients cannot hide sign changes

**Remember:** Skip zeros before counting signs.

*Rules out counterexamples.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 01A45. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Count a polynomial’s sign changes after deleting all zero coefficients. A tempting alternative counts only adjacent coefficients with opposite signs.

**Problem.** For a real polynomial with a nonzero constant term, the positive root count equals the sign count minus a nonnegative even integer. Count roots with multiplicity.

**How the definition helps.** Deleting zeros counts a sign change across a missing power. In our own example, x² − 1 has one positive root, but neither adjacent coefficient pair changes sign. Our own proof outline uses the fact that multiplying by x − a for positive a adds at least one sign change. For parity, compare the first and last nonzero coefficients. Their signs also give the signs near zero and near positive infinity, and only roots of odd multiplicity reverse the polynomial’s sign.

**Wikipedia:** [Descartes's rule of signs](https://en.wikipedia.org/wiki/Descartes%27s_rule_of_signs). It says: “the number of sign changes in the sequence of the polynomial's coefficients (omitting zero coefficients)”

**Paper or page:** [Gauss's proof of Descartes's rule of signs](https://arxiv.org/abs/2205.04249v2). It says: “Let f(x) be a polynomial with f(0) ≠ 0. There exists a nonnegative even integer ν such that”

**Sources:**

- [Melvyn B. Nathanson, Gauss's proof of Descartes's rule of signs](https://arxiv.org/abs/2205.04249v2)

### Formal differentiation detects repeated roots

**Remember:** At a root, the derivative detects a second copy of the same linear factor.

*Makes the theorem clean to state or prove.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** The formal derivative sends constants to zero. For each positive power, multiply the coefficient by the exponent and lower the exponent by one. A root a is repeated when (x − a)² divides the polynomial.

**Problem.** If a is a root of a nonzero polynomial f over a field, then a is a repeated root exactly when f′(a) = 0.

**How the definition helps.** The formal product rule turns the test into one substitution at the root (our own). Write f = (x − a)g by the factor theorem, so the product rule gives f′(a) = g(a) (our own). Apply the factor theorem again to see that g(a) vanishes exactly when x − a divides g (our own). The work is in proving the formal product rule from the rule on powers (our own).

**Wikipedia:** [Formal derivative](https://en.wikipedia.org/wiki/Formal_derivative). It says: “Formal differentiation is used in algebra to test for multiple roots of a polynomial.”

**Paper or page:** [Double Root of Polynomial is Root of Derivative](https://proofwiki.org/wiki/Double_Root_of_Polynomial_is_Root_of_Derivative). It says: “Then a is a root of f′.”

**Sources:** none listed. No primary source with a working link was found.

### Lagrange basis polynomials isolate data points

**Remember:** Each basis polynomial contributes only its own prescribed value at the given inputs.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC. Level 1: early undergraduate.

**Definition.** For each distinct input, multiply the linear factors that vanish at every other input. Divide by the value of that product at the chosen input. These Lagrange basis polynomials replace the usual basis of successive powers of x.

**Problem.** Choose n + 1 distinct inputs in a field. Exactly one polynomial of degree at most n takes prescribed values from that field at those inputs.

**How the definition helps.** Each basis polynomial is 1 at its own input and 0 at the others (our own). Distinct inputs make each denominator a product of nonzero differences (our own). Weight each basis polynomial by its prescribed value and add the results (our own). The root bound does the remaining work, since the difference of two solutions would have more roots than its degree (our own).

**Wikipedia:** [Lagrange polynomial](https://en.wikipedia.org/wiki/Lagrange_polynomial). It says: “The interpolating polynomial is unique.”

**Paper or page:** [Lagrange Interpolation Formula/Formulation 1](https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1). It says: “Then there exists a unique polynomial P ∈ ℝ\[X\] of degree at most n such that”

**Sources:** none listed. No primary source with a working link was found.

### Over an algebraically closed field every linear map has an eigenvector

**Remember:** Every characteristic polynomial has a root, so every linear map has an eigenvalue.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 15A18. arXiv math.AC. Level 1: early undergraduate.

**Definition.** A field F is algebraically closed when every non-constant polynomial with coefficients in F has a root in F.

**Problem.** Every linear map from Fⁿ to itself, for n ≥ 1, has an eigenvector.

**How the definition helps.** A linear map has an eigenvector exactly when its characteristic polynomial has a root. So over an algebraically closed field the theorem is immediate. The article shows that the converse also holds. So the eigenvector property is an equivalent definition of algebraic closure. The real numbers fail: our own example is a rotation of ℝ² by 90°, which has no eigenvector. What stays hard is the fundamental theorem of algebra, which says that ℂ is algebraically closed.

**Wikipedia:** [Algebraically closed field](https://en.wikipedia.org/wiki/Algebraically_closed_field). It says: “The field F is algebraically closed if and only if, for each natural number n, every linear map from Fⁿ into itself has some eigenvector.”

**Sources:** none listed. No primary source with a working link was found.

### Every field has a smallest subfield

**Remember:** Keep exactly the elements that every subfield must contain.

*True by definition.* MSC 12E99 (General field theory). arXiv math.AC. Level 1: early undergraduate.

**Definition.** Define the prime subfield as the intersection of all subfields that share the field's one. An alternative builds it from one using the field operations.

**Problem.** Every field has a unique smallest subfield.

**How the definition helps.** The intersection automatically lies in every subfield, which is the required minimality. In our own proof, zero and one belong to every subfield. The intersection inherits addition, subtraction, multiplication, and inversion of nonzero elements. Constructing the smallest subfield from one instead requires showing that the construction gives exactly this intersection.

**Paper or page:** [Intersection of All Division Subrings is Prime Subfield](https://proofwiki.org/wiki/Intersection_of_All_Division_Subrings_is_Prime_Subfield). It says: “Let P be the intersection of the set of all division subrings of K. Then P is the prime subfield of K.”

**Sources:** none listed. No primary source with a working link was found.

### As the terminal Archimedean ordered field, the reals are unique by definition

**Remember:** Every Archimedean ordered field maps into the reals in exactly one way.

*True by definition. Confidence: medium.* MSC 12J15 (Ordered fields), 26A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** An Archimedean ordered field is an ordered field in which no element is larger than every natural number. The real numbers are the terminal one, which means that every Archimedean ordered field has exactly one order-preserving field homomorphism into it.

**Problem.** All constructions of the real numbers give the same field, up to a unique isomorphism.

**How the definition helps.** A terminal object is unique up to a unique isomorphism, so uniqueness holds by definition. The classical theorem says that any two complete ordered fields are isomorphic, and its proof builds the isomorphism by hand (our own). Here that work moves into existence, which needs a construction such as Dedekind cuts or Cauchy sequences. One must also show that the constructed field receives exactly one map from each Archimedean ordered field. The nLab cites Fred Richman for this description.

**nLab:** [real number](https://ncatlab.org/nlab/show/real+number). It says: “We speak of the such field because it is unique up to unique isomorphism by definition of terminal object.”

**Sources:**

- [Fred Richman, Real numbers and other completions, Mathematical Logic Quarterly 54 (2008) 98–108](https://doi.org/10.1002/malq.200710024)

### Asking that −1 is not a sum of squares characterizes orderable fields

**Remember:** If −1 is no sum of squares, some ordering exists.

*Makes the theorem clean to state or prove.* MSC 12D15 (Fields related with sums of squares (formally real fields, Pythagorean fields, etc.)), 12J15. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** A field is formally real if −1 is not a sum of squares in it. Artin and Schreier showed that this is the same as having an ordering that makes the field an ordered field.

**Problem.** A field can be ordered exactly when −1 is not a sum of squares. Every formally real field also sits inside a real closed field, one with no larger formally real algebraic extension.

**How the definition helps.** The sum-of-squares condition is purely algebraic, so it can be checked inside the field and stated as a list of first-order sentences. The definition by existence of an ordering quantifies over sets, as the page says. One direction is easy, because squares are positive in every ordering. The other direction uses Zorn's lemma to enlarge the sums of squares to a positive cone, the set of positive elements of an ordering. Artin used these fields in 1927 to solve Hilbert's seventeenth problem (our own).

**Wikipedia:** [Formally real field](https://en.wikipedia.org/wiki/Formally_real_field). It says: “It is also easy to see that a field that admits an ordering must satisfy these three properties.”

**Sources:**

- [Emil Artin and Otto Schreier, Algebraische Konstruktion reeller Körper, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927)](https://doi.org/10.1007/bf02952512)

### A monic greatest common divisor does not change when the field grows

**Remember:** Normalize the gcd to be monic and it ignores the field.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)), 13F07. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** Over a field, a greatest common divisor of two polynomials is unique only up to a nonzero constant factor. The usual convention takes the monic one, with leading coefficient 1.

**Problem.** Let E be an extension field of F, and let P and Q have coefficients in F. Then their greatest common divisor over E equals their greatest common divisor over F.

**How the definition helps.** The theorem says R = S, and this equality only makes sense when the gcd is one fixed polynomial. In our own reading, the monic convention is what makes it one. Then the Euclidean algorithm, done in F, gives the same answer as in E, so the gcd lies in F\[X\]; this argument is our own. Without the convention, the statement could only say that R and S differ by a constant. A useful corollary, in our own reading, concerns common roots. Two polynomials over F have a common root in some extension exactly when their gcd over F is not constant.

**Paper or page:** [GCD of Polynomials does not depend on Base Field](https://proofwiki.org/wiki/GCD_of_Polynomials_does_not_depend_on_Base_Field). It says: “Let: gcd {P, Q} = R in F\[X\] gcd {P, Q} = S in E\[X\]. Then R = S. In particular, S ∈ F\[X\].”

**Sources:**

- [ProofWiki, GCD of Polynomials does not depend on Base Field](https://proofwiki.org/wiki/GCD_of_Polynomials_does_not_depend_on_Base_Field)

### Defining the discriminant by root differences makes repeated roots visible

**Remember:** A product of squared root gaps vanishes exactly when two roots meet.

*True by definition.* MSC 12E05 (Polynomials in general fields (irreducibility, etc.)). arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Let f be a polynomial over a field with degree n ≥ 2 and leading coefficient a. List its roots r₁, …, rₙ in a field where f factors into linear terms, repeating each root according to its multiplicity. Define the discriminant as a²ⁿ⁻² times the product of (rᵢ − rⱼ)² over all pairs i &lt; j. Another definition uses the coefficients, giving b² − 4ac for a quadratic ax² + bx + c.

**Problem.** The discriminant of f is zero if and only if f has a repeated root. If f has real coefficients and all its roots are real and distinct, the discriminant is positive.

**How the definition helps.** The product definition makes a repeated root exactly a zero factor. If all roots are real and distinct, the squared differences and the even power of a are positive. These facts are not visible directly in a coefficient formula. The work moves into proving that the product agrees with the coefficient formula. The root expression is symmetric, meaning that permuting the roots leaves it unchanged. The theorem on symmetric polynomials and the relations between roots and coefficients let one write the product in terms of the coefficients.

**Wikipedia:** [Discriminant](https://en.wikipedia.org/wiki/Discriminant). It says: “This expression for the discriminant is often taken as a definition. It makes clear that if the polynomial has a multiple root, then its discriminant is zero,”

**Sources:** none listed. No primary source with a working link was found.

### Finite fields as Frobenius fixed fields make intersections use greatest common divisors

**Remember:** A point fixed by two powers is fixed by their greatest common divisor.

*True by definition.* MSC 12E20 (Finite fields (field-theoretic aspects)), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Fix an algebraic closure K of the field with p elements. The Frobenius map σ raises each element to the pth power, and it is an automorphism of K. Define the subfield of size pⁿ as the set of elements that σⁿ fixes. The usual definition takes the subfield with exactly pⁿ elements.

**Problem.** The intersection of the finite subfields of degrees m and n has degree gcd(m, n) over the prime field.

**How the definition helps.** With the fixed-field definition, an intersection of subfields is the fixed set of a group of powers of σ (our own). The elements fixed by σᵐ and σⁿ are those fixed by the subgroup they generate (our own). By Bézout’s identity, this subgroup is generated by σ to the power gcd(m, n) (our own). The work moves to proving that σ is bijective on K and that σⁿ has exactly pⁿ fixed points (our own).

**nLab:** [finite field](https://ncatlab.org/nlab/show/finite+field). It says: “may be defined to be the fixed field of the automorphism σⁿ: K → K.”

**Sources:** none listed. No primary source with a working link was found.

### A commutative unital ring with exactly two ideals is a field

**Remember:** A field has two ideals, and the zero ring has only one.

*Makes the theorem clean to state or prove.* MSC 12E99 (General field theory), 13A15. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A field is a commutative ring with 1 ≠ 0 in which every nonzero element has an inverse. An ideal is an additive subgroup that is closed under multiplication by every ring element.

**Problem.** A commutative ring with unity is a field exactly when its only ideals are {0} and the whole ring, and these two are different.

**How the definition helps.** Because a field must have 1 ≠ 0, being a field matches having exactly two ideals. Our own sketch: if a ≠ 0, then Ra is not {0}, so Ra = R and 1 = ra. ProofWiki shows the converse, that a field has only the ideals {0} and F. Our own remark: the zero ring has only one ideal, so the rule 1 ≠ 0 is what makes the count exactly two. ProofWiki shows that commutativity is needed, since a noncommutative ring with unity and two ideals need not be a division ring. Our own example: the ring of 2 × 2 real matrices has only two two-sided ideals but has zero divisors.

**Paper or page:** [Commutative and Unitary Ring with 2 Ideals is Field](https://proofwiki.org/wiki/Commutative_and_Unitary_Ring_with_2_Ideals_is_Field), [Field has 2 Ideals](https://proofwiki.org/wiki/Field_has_2_Ideals), [Non-Commutative Ring with Unity and 2 Ideals not necessarily Division Ring](https://proofwiki.org/wiki/Non-Commutative_Ring_with_Unity_and_2_Ideals_not_necessarily_Division_Ring). It says: “That is, such that (R, +, ∘) has no non-null proper ideals. Then (R, +, ∘) is a field.”

**Sources:**

- [ProofWiki, Commutative and Unitary Ring with 2 Ideals is Field](https://proofwiki.org/wiki/Commutative_and_Unitary_Ring_with_2_Ideals_is_Field)
- [ProofWiki, Field has 2 Ideals](https://proofwiki.org/wiki/Field_has_2_Ideals)
- [ProofWiki, Non-Commutative Ring with Unity and 2 Ideals not necessarily Division Ring](https://proofwiki.org/wiki/Non-Commutative_Ring_with_Unity_and_2_Ideals_not_necessarily_Division_Ring)

### Sending 1 to 1 makes every field homomorphism injective

**Remember:** A field map that keeps 1 cannot collapse anything.

*Rules out counterexamples.* MSC 12E99 (General field theory), 13B10, 13A35. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** A field homomorphism is a map between fields that keeps sums and products. Many authors also require that it sends 1 to 1. In a field, 1 is not equal to 0.

**Problem.** Every homomorphism between fields that sends 1 to 1 is injective. So a surjective one is an isomorphism, and the Frobenius map x ↦ xᵖ is injective in characteristic p.

**How the definition helps.** Asking that 1 goes to 1 rules out the zero map, which is the only field map that is not injective. The reason is that the kernel of a ring map is an ideal, and a field has only two ideals. The ProofWiki page keeps the zero map, the trivial homomorphism, as a second case. In our own reading, the condition that 1 goes to 1 removes this case, because 1 does not go to 0. The theorem then has no exceptions, and the surjective case and the Frobenius case follow at once. Our own remark is that the hard part of field theory, such as finding the embeddings, stays hard.

**Paper or page:** [Field Homomorphism is either Trivial or Injection](https://proofwiki.org/wiki/Field_Homomorphism_is_either_Trivial_or_Injection), [Surjective Field Homomorphism is Field Isomorphism](https://proofwiki.org/wiki/Surjective_Field_Homomorphism_is_Field_Isomorphism), [Frobenius Endomorphism on Field is Injective](https://proofwiki.org/wiki/Frobenius_Endomorphism_on_Field_is_Injective). It says: “Then φ is either an injection or the trivial homomorphism.”

**Sources:**

- [ProofWiki, Field Homomorphism is either Trivial or Injection](https://proofwiki.org/wiki/Field_Homomorphism_is_either_Trivial_or_Injection)
- [ProofWiki, Surjective Field Homomorphism is Field Isomorphism](https://proofwiki.org/wiki/Surjective_Field_Homomorphism_is_Field_Isomorphism)
- [ProofWiki, Frobenius Endomorphism on Field is Injective](https://proofwiki.org/wiki/Frobenius_Endomorphism_on_Field_is_Injective)

### Constructible numbers sit at the top of towers of degree-2 steps

**Remember:** A compass solves only quadratic equations, so each step doubles the degree.

*Makes the theorem clean to state or prove.* MSC 12F05 (Algebraic field extensions), 51M04. arXiv math.AC, math.MG. Level 2: later undergraduate.

**Definition.** A real number is constructible if you can reach it with straightedge and compass, starting from 0 and 1. In algebra, this means it lies at the top of a tower of fields that starts at ℚ. Each step in the tower is a field extension of degree 2.

**Problem.** Doubling the cube and trisecting a general angle are impossible with straightedge and compass (Wantzel, 1837).

**How the definition helps.** The definition turns a question about geometry into a question about degrees of field extensions. The tower shows that a constructible number γ has \[ℚ(γ):ℚ\] = 2ʳ, where r is the number of steps. So the degree of γ over ℚ is always a power of 2. The number ∛2 has degree 3, so it is not constructible. To trisect 60°, you need cos 20°, which is a root of an irreducible cubic, so it has degree 3 and is not constructible either. Squaring the circle needed more: the proof that π is transcendental.

**Wikipedia:** [Constructible number](https://en.wikipedia.org/wiki/Constructible_number). It says: “It follows from this decomposition that the degree of the field extension \[ℚ(γ):ℚ\] is 2ʳ, where r counts the number of quadratic extension steps.”

**Sources:**

- [P. L. Wantzel, Recherches sur les moyens de reconnaître si un Problème de Géométrie peut se résoudre avec la règle et le compas, Journal de Mathématiques Pures et Appliquées 2 (1837), 366–372](http://www.numdam.org/item/JMPA_1837_1_2__366_0/)

### Defining field trace as a matrix trace makes it linear

**Remember:** Add the multiplication maps, then add their traces.

*True by definition.* MSC 12F05 (Algebraic field extensions), 11R04. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** For a finite field extension L of K, multiplication by an element a is a K-linear map of L. Define the trace of a as the matrix trace of this map. Another definition adds the roots of the minimal polynomial of a, each counted \[L : K(a)\] times.

**Problem.** The field trace is linear over the base field.

**How the definition helps.** With the matrix-trace definition, the theorem is the linearity of matrix trace (our own). Multiplication by xa + yb is x times multiplication by a plus y times multiplication by b (our own). With the root-sum definition, the roots for a + b are not simply sums of roots for a and b (our own). The Napkin proves that the two definitions agree for number fields, and the work moves there.

**Paper or page:** [Theorem 2.8. (Morally correct definition of norm and trace)](https://venhance.github.io/napkin/Napkin.pdf). It says: “the trace of α equals the trace”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal extensions as splitting fields makes composita normal

**Remember:** Combine the polynomial families to combine their splitting fields.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Define a normal extension of K as a splitting field of a family of polynomials over K. That is the field generated over K by all roots of those polynomials. Another definition asks that every irreducible polynomial over K with one root in the extension splits there.

**Problem.** The compositum of normal algebraic extensions in a common algebraic closure is normal. The compositum is the smallest field containing them all.

**How the definition helps.** With the splitting-field definition, the compositum is generated by all roots of the combined families, so it is a splitting field (our own). The work moves to proving that splitting fields pass the other test (our own).

**nLab:** [normal field extension](https://ncatlab.org/nlab/show/normal+field+extension). It says: “A field extension K ⊂ L is said to be normal if L is the splitting field of a family of polynomials in K\[x\].”

**Sources:** none listed. No primary source with a working link was found.

### Norms as products over embeddings compose down towers of separable extensions

**Remember:** Group the conjugates by their restriction to the middle field.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Let L be a finite separable extension of K, and fix an algebraic closure of K. Define the norm of an element a as the product of σ(a) over all field maps σ from L to the closure that fix K. Another definition uses the determinant of multiplication by a.

**Problem.** Take finite separable extensions K ⊂ L ⊂ M. The norm from M to K is the norm from M to L followed by the norm from L to K.

**How the definition helps.** With the embedding definition, transitivity is a regrouping of one product (our own). Sort the field maps from M by their restrictions τ to L (our own). The maps above one τ multiply to τ applied to the norm from M to L (our own). Multiplying over all τ gives the norm from L to K of that norm (our own). The work moves to counting the extensions of each τ, and to agreement with the determinant definition (our own). Stacks Lemma 9.20.5 proves the result even without separability.

**Paper or page:** [Lemma 9.20.5.](https://stacks.math.columbia.edu/tag/0BIJ). It says: “Let M/L/K be a tower of finite extensions of fields.”

**Sources:** none listed. No primary source with a working link was found.

### Requiring the minimal polynomial to be monic makes it unique

**Remember:** Fix the leading coefficient at 1 and only one polynomial is left.

*Rules out counterexamples.* MSC 12F05 (Algebraic field extensions), 12E05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The minimal polynomial of α over a field K is a monic polynomial with coefficients in K that has α as a root. It has the smallest degree among such polynomials. Monic means that the leading coefficient is 1.

**Problem.** For each element α that is algebraic over K, there is exactly one minimal polynomial.

**How the definition helps.** Without the word 'monic', any nonzero constant multiple of a smallest polynomial would also be smallest, so there would be many. The monic condition picks one polynomial from each such family. The slogan in the data set gives the monic condition and the constant-multiple point. In our own proof, two such monic polynomials differ by a polynomial of lower degree. That difference also vanishes at α, so it is 0. What stays hard is to find the minimal polynomial.

**Paper or page:** [Minimal Polynomial is Unique](https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique). It says: “Let α ∈ L be algebraic over K. Then the minimal polynomial of α over K is unique.”

**Sources:**

- [ProofWiki, Minimal Polynomial is Unique](https://proofwiki.org/wiki/Minimal_Polynomial_is_Unique)

### The field norm as a determinant multiplies because multiplication maps compose

**Remember:** Multiplication maps compose, so their determinants multiply.

*True by definition.* MSC 12F05 (Algebraic field extensions), 11R04. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** For a finite field extension L of K, multiplication by an element a is a K-linear map of L. Define the norm of a as the determinant of this map. Another definition multiplies the roots of the minimal polynomial of a, each counted \[L : K(a)\] times.

**Problem.** The norm of a product equals the product of the norms.

**How the definition helps.** With the determinant definition, the theorem is the product rule for determinants (our own). Multiplying by b and then by a is the same as multiplying by ab (our own). With the root-product definition, the roots for ab are not simply products of roots for a and b (our own). The work moves to proving that the two definitions agree (our own).

**Wikipedia:** [Field norm](https://en.wikipedia.org/wiki/Field_norm). It says: “is defined as the determinant of this linear transformation.”

**Sources:** none listed. No primary source with a working link was found.

### The root test makes intersections of normal extensions normal

**Remember:** If a polynomial splits in both fields, its roots lie in both.

*True by definition.* MSC 12F05 (Algebraic field extensions), 12F10. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** An algebraic extension L of K is normal if each irreducible polynomial over K with a root in L splits into linear factors in L. Another definition says L is the splitting field of a family of polynomials over K. That means their roots generate L over K.

**Problem.** Let E and F be normal extensions of K in a common field. Then E ∩ F is normal over K.

**How the definition helps.** The root test gives the claim without finding generators for the intersection. An irreducible polynomial with a root in E ∩ F splits in E and in F. In a common algebraic closure, all its roots therefore lie in E ∩ F. This proof is our own. The splitting-field definition would ask which family of polynomials generates the intersection by its roots. The comparison theorem supplies the link between the two definitions. In the root-to-splitting-field direction, use the minimal polynomials of all elements of the extension (our own).

**Wikipedia:** [Normal extension](https://en.wikipedia.org/wiki/Normal_extension). It says: “If E and F are normal extensions of K contained in L, then the compositum EF and E ∩ F are also normal extensions of K.”

**Sources:** none listed. No primary source with a working link was found.

### Artin–Schreier polynomials replace roots in degree equal to the characteristic

**Remember:** In characteristic p, use xᵖ − x − a instead of xᵖ − a.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 12E10. arXiv math.NT. Level 2: later undergraduate.

**Definition.** Let K have characteristic p. An Artin–Schreier polynomial is xᵖ − x − a with a in K. If a is not of the form bᵖ − b, it is irreducible and its splitting field is cyclic of degree p.

**Problem.** Every Galois extension of degree p of a field of characteristic p is the splitting field of an Artin–Schreier polynomial.

**How the definition helps.** The additive map x ↦ xᵖ − x has kernel 𝔽ₚ, so it plays the part that the n-th power map plays in Kummer theory. Kummer theory fails in degree p because xᵖ − 1 = (x − 1)ᵖ, so there are no nontrivial p-th roots of unity (our own). Also xᵖ − a gives only inseparable extensions (our own). The proof uses the additive form of Hilbert's Theorem 90 in place of the multiplicative one, as the page says. Witt later used Witt vectors for cyclic degree pⁿ.

**Wikipedia:** [Artin–Schreier theory](https://en.wikipedia.org/wiki/Artin%E2%80%93Schreier_theory), [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “Artin–Schreier theory is a branch of Galois theory, specifically a positive characteristic analogue of Kummer theory, for Galois extensions of degree equal to the characteristic p.”

**Sources:**

- [Emil Artin and Otto Schreier, Eine Kennzeichnung der reell abgeschlossenen Körper, Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg 5 (1927)](https://doi.org/10.1007/BF02952522)
- [Ernst Witt, Zyklische Körper und Algebren der Charakteristik p vom Grad pⁿ, Journal für die reine und angewandte Mathematik 176 (1937)](https://doi.org/10.1515/crll.1937.176.126)

### Asking for separability makes the Galois correspondence work

**Remember:** A separable polynomial never has a repeated root.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An algebraic extension E/F is separable if the minimal polynomial of every element of E has distinct roots. An extension is normal if every irreducible polynomial over F that has one root in E splits into linear factors in E. A Galois extension is one that is both normal and separable.

**Problem.** The fundamental theorem of Galois theory is about a finite Galois extension. It says that the intermediate fields correspond one to one with the subgroups of the Galois group (the automorphisms of E that fix F). It also says that the degree of the extension equals the order of this group.

**How the definition helps.** Separability excludes the purely inseparable cases, which have too few automorphisms for the correspondence. In characteristic 0 every extension is separable, so the condition does not show. In characteristic p, our own example is E = 𝔽ₚ(x) over F = 𝔽ₚ(xᵖ), where x is a variable. The degree is p, and the minimal polynomial of x is Xᵖ − xᵖ = (X − x)ᵖ, so x is its only root. So E is the splitting field of this polynomial and is normal, but x has only one conjugate and the automorphism group is trivial. Because p is prime, there are two intermediate fields (E and F) but only one subgroup, so the correspondence fails. The primitive element theorem also uses separability.

**Wikipedia:** [Separable extension](https://en.wikipedia.org/wiki/Separable_extension). It says: “the fundamental theorem of Galois theory is a theorem about normal extensions, which remains true in non-zero characteristic only if the extensions are also assumed to be separable.”

**Sources:** none listed. No primary source with a working link was found.

### Counting embeddings as separable degree makes separable degrees multiply in towers

**Remember:** Count embeddings by the intermediate field, then count the extensions of each.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 12F15. arXiv math.NT, math.AC. Level 2: later undergraduate.

**Definition.** Let K be a finite extension of F, and fix an algebraic closure of F. Define the separable degree of K over F as the number of field maps from K to that closure that fix F. Another definition takes the degree over F of the largest subfield of K that is separable over F. Separable means each element has a minimal polynomial with distinct roots.

**Problem.** Take finite extensions F ⊂ M ⊂ K. The separable degree of K over F is the product of those of K over M and M over F.

**How the definition helps.** With the counting definition, the proof is a count of field maps (our own). Sort the field maps from K by their restrictions to M (our own). Each field map from M extends to K in exactly as many ways as the separable degree of K over M (our own). The work moves to this extension count and to Stacks Lemma 9.14.8, which proves that the two definitions agree.

**Paper or page:** [Lemma 9.14.8.](https://stacks.math.columbia.edu/tag/09HJ). It says: “Then \[K : F\]ₛ = \|Morꜰ(K, F̄)\|.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Galois extensions by fixed fields frees Galois theory from primitive elements

**Remember:** Start from a group of symmetries, and the base field comes for free.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** Let G be a finite group of automorphisms of a field E. The fixed field F is the set of elements of E that every element of G fixes. Artin takes such pairs E and F as the starting point of Galois theory.

**Problem.** If G is a finite group of automorphisms of E with fixed field F, then E over F is a Galois extension. Its degree equals the order of G, and its Galois group is G.

**How the definition helps.** Starting from a group and its fixed field turns the main count into linear algebra. The page states the result of Artin that such an extension is always Galois. The proof that the degree equals the order of G uses the linear independence of distinct field homomorphisms (our own). The older approach first wrote the field as F(α) for one primitive element and then counted the roots of the minimal polynomial of α. Artin's route needs no primitive element, so it works in the same form for all fields (our own). What stays hard is to show that a given splitting field has enough automorphisms.

**Wikipedia:** [Primitive element theorem](https://en.wikipedia.org/wiki/Primitive_element_theorem), [Galois extension](https://en.wikipedia.org/wiki/Galois_extension). It says: “Emil Artin reformulated Galois theory in the 1930s without relying on primitive elements.”

**Sources:** none listed. No primary source with a working link was found.

### Kummer theory needs the n-th roots of unity in the base field

**Remember:** With the roots of unity at home, cyclic means radical.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** A Kummer extension of K is a field made by adjoining n-th roots of elements of K. Kummer theory assumes that K contains n distinct n-th roots of unity.

**Problem.** If K contains n distinct n-th roots of unity, every abelian extension of exponent dividing n comes from adjoining n-th roots. These extensions match subgroups of K× modulo n-th powers.

**How the definition helps.** With the roots of unity already in K, adjoining one n-th root gives all its conjugates, so the extension is normal with a cyclic group. Without them, the splitting field of x³ − 2 over ℚ has group S₃, which is not abelian (our own). The page says that ℚ has no degree 3 Kummer extensions for this reason. The cyclic cubic fields over ℚ exist, but they are not made by cube roots (our own). The page says that removing the extra roots of unity is the main burden of class field theory.

**Wikipedia:** [Kummer theory](https://en.wikipedia.org/wiki/Kummer_theory). It says: “Taking n = 3, there are no degree 3 Kummer extensions of the rational number field Q, since for three cube roots of 1 complex numbers are required.”

**Sources:**

- [David Hilbert, Die Theorie der algebraischen Zahlkörper, Jahresbericht der Deutschen Mathematiker-Vereinigung 4 (1897)](http://resolver.sub.uni-goettingen.de/purl?GDZPPN002115344)

### Normality makes the automorphisms fix exactly the base field

**Remember:** A normal field keeps all the roots, so its symmetries can move them.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** An algebraic extension L of K is normal when every irreducible polynomial over K with one root in L has all its roots in L. For a finite extension, this means that L is the splitting field of a polynomial. An extension is separable if each element's minimal polynomial has distinct roots, and Galois if it is both normal and separable.

**Problem.** For a separable extension L of K, the automorphisms of L that fix K should fix exactly K and nothing more. Then the Galois correspondence between subgroups and intermediate fields holds.

**How the definition helps.** Normality makes sure that each root has its partner roots in the field, so automorphisms have somewhere to send it. The bad case is ℚ(∛2) over ℚ. It is separable, but it holds only the real cube root of 2. Its only automorphism is the identity, so the fixed field is ℚ(∛2) itself, not ℚ. The page gives this example and shows that the embedding to the complex cube roots is not an automorphism. Normality alone is not enough: a purely inseparable extension is normal but has only the identity automorphism (our own). What stays hard is the proof that a normal and separable extension has as many automorphisms as its degree.

**Wikipedia:** [Galois extension](https://en.wikipedia.org/wiki/Galois_extension), [Normal extension](https://en.wikipedia.org/wiki/Normal_extension). It says: “a Galois extension is an algebraic field extension E/F that is normal and separable; or equivalently, E/F is algebraic, and the field fixed by the automorphism group Aut(E/F) is precisely the base field F.”

**Sources:** none listed. No primary source with a working link was found.

### Over a perfect field every algebraic extension is separable

**Remember:** In a perfect field, p-th roots already exist, so no root repeats.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 12F15. arXiv math.NT. Level 2: later undergraduate.

**Definition.** A field K is perfect if every irreducible polynomial over K has distinct roots. An extension is separable if the minimal polynomial of each of its elements has distinct roots. Equivalently, K has characteristic 0, or K has characteristic p and every element of K is a p-th power.

**Problem.** Over a perfect field, every algebraic extension is separable. So for Galois theory over such a field, only normality needs checking.

**How the definition helps.** One of the equivalent definitions says exactly that every algebraic extension is separable, so the theorem is a restatement. The work moves to the proof that the definitions agree. That proof uses the fact that an irreducible inseparable polynomial has zero derivative, so it is a polynomial in xᵖ. The field 𝔽ₚ(t) of rational functions is not perfect, and xᵖ − t is irreducible but has one repeated root. The page names this example. Imperfect fields still matter in algebraic geometry in characteristic p.

**Wikipedia:** [Perfect field](https://en.wikipedia.org/wiki/Perfect_field), [Separable polynomial](https://en.wikipedia.org/wiki/Separable_polynomial). It says: “Perfect fields are significant because Galois theory over these fields becomes simpler, since the general Galois assumption of field extensions being separable is automatically satisfied over these fields”

**Sources:**

- [Ernst Steinitz, Algebraische Theorie der Körper, Journal für die reine und angewandte Mathematik 137 (1910)](https://doi.org/10.1515/crll.1910.137.167)

### Separability is what the primitive element theorem needs

**Remember:** Separable finite extensions are always generated by one element.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory). arXiv math.NT. Level 2: later undergraduate.

**Definition.** A finite extension E of F is separable if the minimal polynomial of each element of E has distinct roots. An element α is primitive if E = F(α), so one element generates the whole extension.

**Problem.** Every finite separable extension is generated by a single element. This holds for all number fields and all finite extensions of finite fields.

**How the definition helps.** Separability gives the extension only finitely many intermediate fields, and that is enough for one element to generate it. The page gives the counterexample. Let E = 𝔽ₚ(T, U), rational functions in two variables, and F = 𝔽ₚ(Tᵖ, Uᵖ). Then E has degree p² over F. Every element α of E has αᵖ in F, so F(α) has degree at most p. So no single element generates E. Steinitz proved the modern form of the theorem in 1910.

**Wikipedia:** [Primitive element theorem](https://en.wikipedia.org/wiki/Primitive_element_theorem). It says: “When \[E : F\] = p², there may not be a primitive element (in which case there are infinitely many intermediate fields by Steinitz's theorem).”

**Sources:**

- [Ernst Steinitz, Algebraische Theorie der Körper, Journal für die reine und angewandte Mathematik 137 (1910)](https://doi.org/10.1515/crll.1910.137.167)

### The power test makes pure inseparability pass through towers

**Remember:** Raising to powers in succession multiplies the exponents.

*True by definition.* MSC 12F15 (Inseparable field extensions), 12F05. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Let E be an algebraic extension of a field F of prime characteristic p. The extension is purely inseparable if each element of E has a power with exponent pⁿ in F, for some integer n ≥ 0. Another definition requires that every element outside F have a minimal polynomial with a repeated root.

**Problem.** Let F ⊆ M ⊆ E be fields of characteristic p. If E is purely inseparable over M and M is purely inseparable over F, then E is purely inseparable over F.

**How the definition helps.** The power test makes the tower claim a rule for multiplying exponents. For α in E choose n so that β = α raised to pⁿ lies in M. Then choose m so that β raised to pᵐ lies in F. This is α raised to pⁿ⁺ᵐ, which proves the claim (our own). The minimal-polynomial test does not directly say how to combine the two extensions. In the comparison theorem, the key step is that some such power has a minimal polynomial without repeated roots. Pure inseparability then forces that power to lie in the base field.

**Wikipedia:** [Purely inseparable extension](https://en.wikipedia.org/wiki/Purely_inseparable_extension). It says: “For each element α ∈ E, there exists n ≥ 0 such that \\(\\alpha<sup>p<sup>n</sup>\\in</sup> F\\).”

**Sources:** none listed. No primary source with a working link was found.

### Equivalence of absolute values gives Ostrowski's short list

**Remember:** Up to powers, ℚ has only the real size and the p-adic sizes.

*Makes the theorem clean to state or prove.* MSC 12J10 (Valued fields), 11S85. arXiv math.NT. Level 2: later undergraduate.

**Definition.** Two absolute values are equivalent if they give the same topology. Equivalently, one is a positive power of the other.

**Problem.** Every nontrivial absolute value on ℚ is equivalent to the real one or to a p-adic one.

**How the definition helps.** Grouping absolute values that differ by a power turns an infinite family into one class per prime, plus one real class. Without this, each power of the real absolute value with exponent between 0 and 1 counts as a different absolute value (our own). The trivial absolute value, which is 1 on every nonzero number, is excluded. The classes are the places of ℚ. Ostrowski proved the theorem in 1916.

**Wikipedia:** [Ostrowski's theorem](https://en.wikipedia.org/wiki/Ostrowski%27s_theorem). It says: “is equivalent to either the usual real absolute value or a p-adic absolute value.”

**Sources:**

- [Alexander Ostrowski, Über einige Lösungen der Funktionalgleichung φ(x)·φ(y) = φ(xy), Acta Mathematica 41 (1916)](https://doi.org/10.1007/bf02422947)

### The ultrametric inequality makes p-adic series converge when terms tend to zero

**Remember:** In ℚₚ, a sum is never bigger than its biggest part.

*True by definition. Confidence: low.* MSC 12J25 (Non-Archimedean valued fields), 26E30. arXiv math.NT, math.CA. Level 2: later undergraduate.

**Definition.** For a prime p, the p-adic absolute value of a nonzero rational x is p⁻ᵛ. Here v is the exponent of p in x, negative when p divides the denominator. It satisfies the strong triangle inequality: \|x + y\|ₚ is at most the larger of \|x\|ₚ and \|y\|ₚ. The field ℚₚ of p-adic numbers is the completion of ℚ for this absolute value.

**Problem.** In ℚₚ, a series converges exactly when its terms tend to 0.

**How the definition helps.** With the strong triangle inequality, the sum of a block of consecutive terms is no larger than its largest term (our own). So if the terms tend to 0, the partial sums form a Cauchy sequence, and completeness of ℚₚ gives a limit (our own). Over the real numbers this test fails: the terms of the harmonic series tend to 0, but the series diverges (our own). The converse direction holds in every field with an absolute value (our own). What stays hard is to build ℚₚ as a complete field (our own).

**Paper or page:** [An Infinitely Large Napkin: Calculus: P Adic](https://venhance.github.io/napkin/Napkin.pdf). It says: “A series ∑ xₖ (k = 1 to ∞) in ℚₚ converges to some limit if and only if lim (k → ∞) \|xₖ\|ₚ = 0.”

**Sources:**

- [Evan Chen, An Infinitely Large Napkin (open textbook)](https://venhance.github.io/napkin/Napkin.pdf)

### Using base p for p-adic sizes makes the product formula exact

**Remember:** Base p makes each prime's p-adic size exactly cancel its ordinary size.

*True by definition.* MSC 12J25 (Non-Archimedean valued fields), 13A18. arXiv math.NT. Level 2: later undergraduate.

**Definition.** For a nonzero rational r, write vₚ(r) for the exponent of the prime p in r. The p-adic absolute value of r is \|r\|ₚ = p to the power −vₚ(r). So r has a small p-adic size when p appears in r to a high power.

**Problem.** The product formula: for every nonzero rational r, \|r\| · ∏ₚ \|r\|ₚ = 1. In words, the ordinary size of r times all its p-adic sizes is exactly 1.

**How the definition helps.** In our own words: base p is the one base that makes the sizes cancel exactly. Any base greater than 1 gives an absolute value with the same topology. But only base p gives each prime power pᵏ the p-adic size 1/pᵏ, which cancels its ordinary size pᵏ. So the product formula follows from unique factorization. The article notes that a similar product formula can be used to define global fields by axioms. (Global fields are the finite extensions of ℚ and of the field of rational functions over a finite field.)

**Wikipedia:** [P-adic valuation](https://en.wikipedia.org/wiki/P-adic_valuation). It says: “The choice of base p in the exponentiation p<sup>(−νₚ(r))</sup> makes no difference for most of the properties, but supports the product formula”

**Sources:** none listed. No primary source with a working link was found.

### Defining separable as geometrically reduced makes separability survive base change

**Remember:** Changing the base field just changes which tensor product you test.

*True by definition.* MSC 12F10 (Separable extensions, Galois theory), 13B40. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** Call a finite field extension K of k separable when K ⊗ₖ k′ is reduced for every field extension k′ of k. Reduced means that no nonzero element has a power equal to zero. The usual definition asks that each minimal polynomial has distinct roots.

**Problem.** Let K be a finite separable extension of k, and let k′ be any extension field of k. Then K ⊗ₖ k′ is a finite product of finite separable extensions of k′.

**How the definition helps.** With the tensor definition, the test for each factor is already one of the original tests (our own). The ring K ⊗ₖ k′ is reduced and finite over k′, so it is a product of fields (our own). For a further extension k″ of k′, each factor tensored with k″ is a factor of K ⊗ₖ k″, which is reduced (our own). The work moves to Stacks Lemma 10.44.2, which proves that the tensor test agrees with the usual definition in characteristic p. It also moves to the splitting of finite reduced algebras into fields (our own).

**Paper or page:** [Lemma 10.44.2.](https://stacks.math.columbia.edu/tag/030W). It says: “K is geometrically reduced over k.”

**Sources:** none listed. No primary source with a working link was found.

### Frobenius generates the Galois group of a finite field topologically

**Remember:** Frobenius powers are dense, not everything, in the profinite integers.

*Makes the theorem clean to state or prove.* MSC 12F10 (Separable extensions, Galois theory), 12E20. arXiv math.NT. Level 3: graduate.

**Definition.** An element generates a topological group topologically if the closure of its powers is the whole group. The absolute Galois group carries the Krull topology.

**Problem.** The absolute Galois group of a field is the Galois group of its separable closure. For a finite field with q elements, it is the profinite integers, the limit of all the groups ℤ/n. The map that sends x to x raised to the power q generates it topologically.

**How the definition helps.** The profinite group is uncountable, so no single element generates it as an abstract group; topological generation is the right sense. The powers of Frobenius form only a copy of ℤ inside it (our own). With the Krull topology, this copy is dense, so Frobenius determines every continuous action. The page on Weil groups says that the Weil group of a finite field is exactly this infinite cyclic group. Krull introduced the topology in 1928 (our own).

**Wikipedia:** [Absolute Galois group](https://en.wikipedia.org/wiki/Absolute_Galois_group), [Weil group](https://en.wikipedia.org/wiki/Weil_group). It says: “The Frobenius automorphism is a canonical (topological) generator of GK.”

**Sources:**

- [Wolfgang Krull, Galoissche Theorie der unendlichen algebraischen Erweiterungen, Mathematische Annalen 100 (1928)](https://doi.org/10.1007/bf01448872)

### In infinite Galois theory, closed subgroups correspond to intermediate fields

**Remember:** Topologize the Galois group, and only closed subgroups correspond to fields.

*Rules out counterexamples.* MSC 12F10 (Separable extensions, Galois theory), 20E18. arXiv math.AC, math.GR. Level 3: graduate.

**Definition.** Let L/K be an infinite Galois extension. Its Galois group Gal(L/K) is the inverse limit of the finite groups Gal(E/K), over all finite Galois subextensions E. It carries the resulting profinite topology, also called the Krull topology. This is the topology that the inverse limit gets from the product of the finite groups, each with the discrete topology.

**Problem.** Extend the fundamental theorem of Galois theory to infinite algebraic extensions, such as the algebraic closure of a finite field.

**How the definition helps.** The topology picks out the subgroups that come from fields, so the bijection holds again. For infinite extensions there are more subgroups than intermediate fields, so the naive bijection fails. For example, Gal(F̄ₚ/Fₚ) ≅ Ẑ, the profinite completion of ℤ, and the subgroup ℤ generated by Frobenius is dense in it. So ℤ has the same fixed field Fₚ as the whole group Ẑ (this example is ours, not from the nLab). With the Krull topology, the theorem holds again if 'subgroup' is replaced by 'closed subgroup'. Finite subextensions then correspond exactly to open subgroups. The finite theorem is still needed as input.

**nLab:** [Galois theory](https://ncatlab.org/nlab/show/Galois+theory). It says: “correspond bijectively to the closed subgroups of”

**Sources:**

- [Hendrik Lenstra, Galois theory for schemes, Mathematisch Instituut, Universiteit van Amsterdam (1985; electronic third edition, Leiden, 2008), Section 2.1](https://websites.math.leidenuniv.nl/algebra/GSchemes.pdf)
- [Wolfgang Krull, Galoissche Theorie der unendlichen algebraischen Erweiterungen, Mathematische Annalen 100 (1928) 687–698](https://doi.org/10.1007/BF01448872)

### Building perfect closures from pth roots makes field maps extend uniquely

**Remember:** Each new root has only one possible image.

*True by definition.* MSC 12F15 (Inseparable field extensions). arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** For a field k of characteristic p, form its perfect closure by adjoining every iterated pth root of every element. A field is perfect when the map x ↦ xᵖ is bijective. Another definition asks for a perfect extension of k that is purely inseparable. Purely inseparable means some iterated pth power of each new element lies in k.

**Problem.** Every homomorphism between fields of characteristic p extends uniquely to a homomorphism between their perfect closures.

**How the definition helps.** In characteristic p an element has at most one pth root, so each adjoined root has only one possible image (our own). A map φ sends the pⁿth root of a to the pⁿth root of φ(a) in the target closure (our own). This rule preserves sums and products because x ↦ xᵖ does (our own). The work moves to Stacks Lemma 10.45.4, which shows that this construction is the unique perfect, purely inseparable extension.

**Paper or page:** [Lemma 10.45.4.](https://stacks.math.columbia.edu/tag/046W). It says: “The field extension k′/k is unique up to unique isomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Group cohomology states Hilbert's Theorem 90 for every Galois group

**Remember:** Every cocycle into L× has the form σ(b)/b; that is Theorem 90.

*Makes the theorem clean to state or prove.* MSC 12G05 (Galois cohomology), 20J06. arXiv math.NT. Level 3: graduate.

**Definition.** A 1-cocycle of G with values in L× is a map f from G to L× with f(στ) = f(σ)·σ(f(τ)). A coboundary is a cocycle of the form σ ↦ σ(b)/b. The first cohomology group is cocycles modulo coboundaries.

**Problem.** For a finite Galois extension L of K with group G, the first cohomology group H¹(G, L×) is trivial. For a cyclic group this says that each element of norm 1 has the form σ(b)/b.

**How the definition helps.** The cohomology definition turns the special statement about norm-one elements into one vanishing statement that makes sense for any Galois group. Kummer and Hilbert stated it for cyclic groups. There a cocycle is fixed by its value at a generator, which is an element of norm 1. Noether gave the general form in 1933. The proof is short: average a cocycle against independent characters to find b (our own). For ℚ(i) the theorem gives every rational point on the unit circle, as the page shows. The same form then extends to GLₙ and to Picard groups of schemes.

**Wikipedia:** [Hilbert's Theorem 90](https://en.wikipedia.org/wiki/Hilbert%27s_Theorem_90). It says: “the first cohomology group of G, with coefficients in the multiplicative group of L, is trivial”

**Sources:**

- [Emmy Noether, Der Hauptgeschlechtssatz für relativ-galoissche Zahlkörper, Mathematische Annalen 108 (1933)](https://doi.org/10.1007/BF01452845)
- [David Hilbert, Die Theorie der algebraischen Zahlkörper, Jahresbericht der Deutschen Mathematiker-Vereinigung 4 (1897)](http://resolver.sub.uni-goettingen.de/purl?GDZPPN002115344)

### Henselian as unique extension makes conjugate elements have equal values

**Remember:** Conjugating an extended valuation gives the same extension.

*True by definition.* MSC 12J10 (Valued fields), 13J15. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** A valuation sends products to sums and measures how divisible an element is. Call a valued field K henselian if its valuation extends uniquely, up to equivalence, to an algebraic closure. The usual definition asks that simple roots modulo the maximal ideal of the valuation ring lift to roots. Wikipedia states that the two definitions agree.

**Problem.** Let K be a henselian field with a real-valued valuation v, extended to an algebraic closure. Conjugate elements, which are roots of the same irreducible polynomial over K, have equal values.

**How the definition helps.** With the uniqueness definition, the theorem takes one line (our own). For an automorphism σ of the closure that fixes K, the map x ↦ v(σ(x)) also extends v (our own). It agrees with v on K, so for real values uniqueness makes it equal to v (our own). Any two conjugates differ by such a σ (our own). The work moves to the theorem that root lifting agrees with unique extension.

**Wikipedia:** [Henselian ring](https://en.wikipedia.org/wiki/Henselian_ring). It says: “if and only if v extends uniquely to every finite extension of K”

**Sources:** none listed. No primary source with a working link was found.

### Non-discreteness gives the classification of local fields

**Remember:** Locally compact but not discrete gives ℝ, ℂ, p-adic fields and Laurent series.

*Rules out counterexamples.* MSC 12J10 (Valued fields), 11S85. arXiv math.NT. Level 3: graduate.

**Definition.** A local field is a field with a topology that is locally compact, Hausdorff and not discrete. The page takes this definition from Weil.

**Problem.** Every local field is ℝ, ℂ, a finite extension of a p-adic field ℚₚ, or a field 𝔽q((t)) of Laurent series over a finite field.

**How the definition helps.** The non-discrete condition rules out the trivial case and leaves only fields whose topology comes from an absolute value. Any field with the discrete topology is locally compact, so without the condition every field would count (our own). The page builds that absolute value from Haar measure, the translation-invariant measure on the field. Sorting the resulting complete fields into the four types is the remaining work (our own). The topological definition treats real and p-adic fields together. That is what lets Haar measure and Fourier analysis work the same way at every place (our own). Some authors use the name only for non-archimedean local fields, as the page notes.

**Wikipedia:** [Local field](https://en.wikipedia.org/wiki/Local_field). It says: “In mathematics, a local field is a locally compact Hausdorff non-discrete topological field.”

**Sources:**

- [André Weil, Basic Number Theory, Springer (1974)](https://doi.org/10.1007/978-3-642-61945-8)

### Haar scaling makes a local field’s module multiplicative

**Remember:** Multiplying twice multiplies the volume scaling factors.

*True by definition.* MSC 12J25 (Non-Archimedean valued fields), 28C10. arXiv math.NT. Level 3: graduate.

**Definition.** A local field is a nondiscrete, locally compact Hausdorff topological field. Fix Haar measure μ on its additive group, so μ is unchanged by addition of a fixed element. For nonzero a, the module \|a\| is the factor with μ(aS) = \|a\|μ(S) for Borel sets S, and set \|0\| = 0. Another approach starts with a chosen absolute value on the field.

**Problem.** The module is multiplicative. On ℚₚ, the field of p-adic numbers, \|p\| = 1/p for the prime p.

**How the definition helps.** The scaling definition makes multiplication of field elements into composition of volume changes. Each scaling factor is well defined because μ(aS) gives another translation invariant measure for a ≠ 0, and Haar measure is unique up to scale. The p-adic integers ℤₚ split into p translates of pℤₚ, which all have the same measure (our own). This gives \|p\| = 1/p (our own). A chosen absolute value already assumes multiplicativity, whereas this proof recovers a natural normalization from the additive group alone (our own).

**Wikipedia:** [Local field](https://en.wikipedia.org/wiki/Local_field). It says: “The module of an element a of F is defined so as to measure the change in size of a set after multiplying it by a.”

**Sources:**

- [A. Weil, Basic Number Theory, Springer (2nd ed. 1974)](https://doi.org/10.1007/978-3-642-61945-8)

### p-adic numbers make Hasse–Minkowski a test one prime at a time

**Remember:** ℚₚ looks at ℚ through a lens that sees only divisibility by p.

*Makes the theorem clean to state or prove.* MSC 12J25 (Non-Archimedean valued fields), 11E12, 11E08. arXiv math.NT. Level 3: graduate.

**Definition.** Fix a prime p. The p-adic absolute value makes a rational number small when a high power of p divides it. The p-adic numbers ℚₚ are the completion of ℚ for this absolute value. Together with ℝ, the fields ℚₚ are the completions of ℚ.

**Problem.** The Hasse–Minkowski theorem: a quadratic form over ℚ represents 0 nontrivially (it is 0 at some nonzero point) if and only if this holds over ℝ and over every ℚₚ. The same is true for the equivalence of two quadratic forms.

**How the definition helps.** The field ℚₚ packs the congruence conditions modulo every power of p into one complete field. In ℚₚ, Hensel's lemma lets you solve equations as in analysis. Hensel's lemma turns a root modulo p into an exact root when the derivative there is not 0 modulo p. With these fields, the theorem has the form 'global if and only if everywhere local'. The theorem fails for cubic forms, for example Selmer's 3x³ + 4y³ + 5z³ = 0 (our own example, not from the article). So the local–global principle is not a general fact.

**Wikipedia:** [Hasse–Minkowski theorem](https://en.wikipedia.org/wiki/Hasse%E2%80%93Minkowski_theorem). It says: “in order to determine whether an equation of a certain type has a solution in rational numbers, it is sufficient to test whether it has solutions over complete fields of real and p-adic numbers”

**Sources:**

- [H. Hasse, Über die Darstellbarkeit von Zahlen durch quadratische Formen im Körper der rationalen Zahlen, Journal für die reine und angewandte Mathematik 152 (1923)](https://doi.org/10.1515/crll.1923.152.129)

### Residue sequences make p-adic units exactly those nonzero modulo p

**Remember:** Invert each residue, and uniqueness makes the inverses fit together.

*True by definition. Confidence: medium.* MSC 12J25 (Non-Archimedean valued fields), 11S99. arXiv math.NT. Level 3: graduate.

**Definition.** For a prime p, define a p-adic integer as a sequence of residues xₙ modulo pⁿ. Each xₙ₊₁ reduces to xₙ, and multiplication takes place at each level. An alternative completes ℤ for the p-adic metric, in which multiples of high powers of p are small.

**Problem.** A p-adic integer is a unit, meaning it has a multiplicative inverse, exactly when its first residue x₁ is not zero.

**How the definition helps.** The residue definition makes the inverse a sequence of ordinary modular inverses. If x₁ is nonzero, every xₙ is coprime to pⁿ and has an inverse. The inverses reduce to each other because inverses are unique (our own). Conversely, reduction modulo p sends units to units. The work moves into inversion modulo pⁿ and the equivalence with the metric completion (our own).

**Paper or page:** [An Infinitely Large Napkin: Calculus: P Adic](https://venhance.github.io/napkin/Napkin.pdf). It says: “The number x ∈ ℤₚ is invertible if and only if x₁ ≠ 0. In symbols, x ∈ ℤₚˣ ⟺ x ≢ 0 (mod p).”

**Sources:** none listed. No primary source with a working link was found.

### The fundamental theorem of algebra, stated for the multiset of roots

**Remember:** Find the roots as one bag, not one by one.

*Makes the theorem clean to state or prove.* MSC 12D10 (Polynomials in real and complex fields: location of zeros (algebraic theorems)), 03F60. arXiv math.AC, math.LO. Level 4: research.

**Definition.** Richman builds a complete metric space of multisets of n complex numbers. A multiset is a set in which an element can occur more than once. Constructively, this space is the completion of the space of such multisets. The roots of a polynomial of degree n are then one point of this space, not a list of n separate numbers.

**Problem.** Prove the fundamental theorem of algebra in constructive mathematics (mathematics without the law of excluded middle) without the axiom of choice.

**How the definition helps.** Stated for the multiset of roots, the theorem becomes provable without choice (Richman 2000). Constructively, one cannot pick out the individual roots. To factor every monic polynomial into linear factors, one needs a weak choice principle, because the complex numbers are not a discrete field. A discrete field is a field in which one can decide whether two elements are equal. The nLab notes the same reformulation for the Weierstrass factorization of entire functions.

**nLab:** [fundamental theorem of algebra](https://ncatlab.org/nlab/show/fundamental+theorem+of+algebra), [Weierstrass factorization theorem](https://ncatlab.org/nlab/show/Weierstrass+factorization+theorem). It says: “In light of this, one can instead interpret the constructive FTA as a statement about sets of roots rather than about individual roots, an interpretation that dates from Richman 2000.”

**Sources:**

- [F. Richman, The fundamental theorem of algebra: a constructive development without choice, Pacific Journal of Mathematics 196 (2000) 213–230](https://doi.org/10.2140/pjm.2000.196.213)

### Hopf–Galois Kummer theory needs no roots of unity

**Remember:** Change the symmetry object, and radical extensions become Kummer without roots of unity.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 12F10 (Separable extensions, Galois theory), 16T05, 12F05. arXiv math.NT, math.RA. Level 4: research.

**Definition.** A Hopf–Galois structure on a field extension L/K replaces the Galois group by a Hopf algebra H that acts on L. Every Galois extension has the classical structure, given by its Galois group. The extension is H-Kummer if eigenvectors of this action generate L over K.

**Problem.** Classical Kummer theory describes radical extensions only over fields that contain the n-th roots of unity. The paper characterizes a class of H-Kummer extensions as radical extensions that are linearly disjoint from the n-th cyclotomic extension of K. Here the cyclotomic extension adds the n-th roots of unity to K, and linearly disjoint means, roughly, that the fields share only K.

**How the definition helps.** Our own reason: the new structure lets the eigenvector idea of Kummer theory work over fields without the roots of unity. The abstract says this extends the classical Kummer condition for the classical Galois structure. Our own example: ℚ(∛2)/ℚ is not Galois, so classical Kummer theory does not apply. It does have a Hopf–Galois structure (our own note). The main tool, says the abstract, is a product Hopf–Galois structure on a compositum.

**Paper or page:** [A generalization of Kummer theory to Hopf-Galois extensions](https://arxiv.org/abs/2305.08648). It says: “an H-Galois extension L/K is H-Kummer if L can be generated by adjoining to K a finite set S of eigenvectors for the action of the Hopf algebra H on L.”

**Sources:**

- [Daniel Gil-Muñoz, A generalization of Kummer theory to Hopf-Galois extensions, arXiv:2305.08648 (2024)](https://arxiv.org/abs/2305.08648)

### Derivations replace automorphisms in the Galois theory of purely inseparable extensions

**Remember:** When automorphisms see nothing, derivations see everything.

*Makes the theorem clean to state or prove.* MSC 12F15 (Inseparable field extensions), 12H05. arXiv math.NT, math.RA. Level 4: research.

**Definition.** An extension L of K in characteristic p is purely inseparable of exponent 1 if xᵖ is in K for every x in L. A derivation is an additive map D with D(xy) = xD(y) + yD(x). A restricted Lie algebra is a Lie algebra with a p-th power operation.

**Problem.** Let L over K be finite and purely inseparable of exponent 1. Its intermediate fields match the restricted Lie subalgebras of the K-derivations of L that are also L-subspaces.

**How the definition helps.** Derivations detect inseparable structure that automorphisms miss, so they can replace the Galois group. A purely inseparable extension has only the identity automorphism over K (our own). So the classical Galois group sees no intermediate fields. Jacobson used derivations instead in 1937 and 1944. Later work by Sweedler and by Gerstenhaber and Zaromp used higher derivations for modular extensions. Extensions of higher exponent need these more complex objects.

**Wikipedia:** [Purely inseparable extension](https://en.wikipedia.org/wiki/Purely_inseparable_extension). It says: “introduced a variation of Galois theory for purely inseparable extensions of exponent 1, where the Galois groups of field automorphisms in Galois theory are replaced by restricted Lie algebras of derivations.”

**Sources:**

- [Nathan Jacobson, Galois theory of purely inseparable fields of exponent one, American Journal of Mathematics 66 (1944)](https://doi.org/10.2307/2371772)

### L'Hôpital's rule holds in an ordered field exactly when suprema exist

**Remember:** Without suprema, a function with zero derivative can still jump.

*Rules out counterexamples.* MSC 12J15 (Ordered fields), 26A24. arXiv math.CA, math.RA. Level 4: research.

**Definition.** An ordered field has the least upper bound property when every nonempty subset that is bounded above has a least upper bound. Up to isomorphism, the real numbers are the only ordered field with this property.

**Problem.** In an ordered field, consider L'Hôpital's rule, Taylor's theorem with Peano remainder and the limit-of-derivatives property. Each of them holds for all functions exactly when the field has the least upper bound property.

**How the definition helps.** The usual proofs of these rules go through the mean value theorem, which needs suprema to exist; this is our own summary. Our own counterexample in ℚ is f(x) = 0 for x &lt; √2 and f(x) = 1 for x &gt; √2. On ℚ this function has derivative 0 at every point, yet it is not constant. Our own remark is that functions like this break each of the rules, so completeness is forced. In our own reading, the paper's new work is the reverse direction, that each rule implies the least upper bound property.

**Paper or page:** [L'Hôpital's Rule is Equivalent to the Least Upper Bound Property](https://arxiv.org/abs/2505.23092v1). It says: “In an arbitrary ordered field 𝔽, the following are equivalent. (a) Least Upper Bound Property (b) L'Hôpital's Rule (c) Taylor's Theorem with Peano Remainder (d) Limit of Derivatives Property”

**Sources:**

- [Martin Grant, Kyle Hambrook, Alex Rusterholtz, L'Hôpital's Rule is Equivalent to the Least Upper Bound Property, arXiv:2505.23092 (2025)](https://arxiv.org/abs/2505.23092v1)

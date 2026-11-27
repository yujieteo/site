### Formal power series need no convergence

**Remember:** A formal power series is just its list of coefficients.

*Makes the theorem clean to state or prove.* MSC 13F25 (Formal power series rings), 05A15. arXiv math.CO, math.AC. Level 1: early undergraduate.

**Definition.** A formal power series is a sequence of coefficients a₀, a₁, a₂, …, written as Σ aₙXⁿ. Here X is an indeterminate (a symbol), not a number. Sums and products are defined coefficient by coefficient, as for polynomials.

**Problem.** Manipulate generating functions (multiply, invert, differentiate, compose) to prove counting identities. This must work even when the series has radius of convergence zero, such as Σ n! Xⁿ.

**How the definition helps.** A formal power series is not a function, so there is nothing to converge. Products need no conditions about absolute, conditional or uniform convergence. Identities that you prove by algebra in the ring of formal power series are valid for every sequence. Analytic methods, such as finding asymptotics from singularities, still need convergence (our own remark).

**Wikipedia:** [Generating function](https://en.wikipedia.org/wiki/Generating_function), [Formal power series](https://en.wikipedia.org/wiki/Formal_power_series). It says: “Unlike an ordinary series, the formal power series is not required to converge: in fact, the generating function is not actually regarded as a function, and the "variable" remains an indeterminate.”

**Sources:**

- [I. Niven, Formal power series, The American Mathematical Monthly 76 (1969), 871–889, doi:10.1080/00029890.1969.12000359](https://doi.org/10.1080/00029890.1969.12000359)

### Asking for a 1 gives every nonzero ring a maximal ideal

**Remember:** An ideal is proper exactly when it misses 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring must have a multiplicative identity 1. An ideal is proper when it is not the whole ring. In a ring with 1, an ideal is proper exactly when it does not contain 1.

**Problem.** Krull's theorem (1929) says that every nonzero ring has at least one maximal ideal. A maximal ideal is a proper ideal that no larger proper ideal contains.

**How the definition helps.** The 1 gives a simple test for being proper, and this test survives unions. An ideal is proper if and only if it does not contain 1. So the union of a chain of proper ideals does not contain 1, and it is still proper. Zorn's lemma then gives a maximal ideal. Without a 1 the theorem can fail. Our own example: the rational numbers ℚ with zero multiplication form a ring without 1, whose ideals are the additive subgroups, and ℚ has no maximal subgroup. Hodges showed that Krull's theorem in turn implies the axiom of choice.

**Wikipedia:** [Krull's theorem](https://en.wikipedia.org/wiki/Krull%27s_theorem), [Ring (mathematics)](https://en.wikipedia.org/wiki/Ring_%28mathematics%29). It says: “a union of ideals not containing 1 does not contain 1, so J ∈ S. By Zorn's lemma, S has a maximal element M.”

**Sources:**

- [W. Krull, Idealtheorie in Ringen ohne Endlichkeitsbedingungen, Mathematische Annalen 101 (1929) 729–744](https://doi.org/10.1007/BF01454872)
- [W. Hodges, Krull implies Zorn, Journal of the London Mathematical Society (2) 19 (1979) 285–287](https://doi.org/10.1112/jlms/s2-19.2.285)

### Coprime ideals give the Chinese remainder theorem in any ring

**Remember:** Coprime ideals are ideals with elements that add up to 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 11A07. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** Two ideals I and J of a ring R are coprime (also called comaximal) if I + J is the whole ring. This means that i + j = 1 for some i in I and some j in J.

**Problem.** Let I₁, …, Iₖ be ideals that are coprime in pairs. Then R/(I₁ ∩ … ∩ Iₖ) ≅ R/I₁ × … × R/Iₖ. In words, a system of congruences, one for each ideal, has a solution, and the solution is unique modulo the intersection.

**How the definition helps.** The definition makes the one fact that the classical proof uses into the condition itself. For integers, people usually say that moduli are coprime when their gcd is 1. But in a general commutative ring, a greatest common divisor need not exist. The condition i + j = 1 is exactly the Bézout identity (1 written as a combination of the two moduli) that the classical proof uses. So the same proof works in any ring, including polynomial rings and rings of algebraic integers. For commutative rings, the intersection of ideals that are coprime in pairs also equals their product.

**Wikipedia:** [Chinese remainder theorem](https://en.wikipedia.org/wiki/Chinese_remainder_theorem). It says: “This relation plays the role of Bézout's identity in the proofs related to this generalization, which otherwise are very similar.”

**Sources:**

- [M. F. Atiyah and I. G. Macdonald, Introduction to Commutative Algebra, Addison-Wesley (1969), Proposition 1.10; reissued by CRC Press (2018)](https://doi.org/10.1201/9780429493621)

### Maximal ideals are exactly the ideals whose quotient is a field

**Remember:** The whole ring and the trivial ring are too simple, and both are excluded.

*Rules out counterexamples. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A maximal ideal of a commutative ring R is an ideal that is maximal among the proper ideals (the ideals other than R). So the whole ring R is not a maximal ideal. A field is a ring in which 0 is not invertible and every other element is invertible. So the trivial ring, in which 0 = 1, is not a field.

**Problem.** Show that an ideal M of R is maximal if and only if the quotient ring R/M is a field.

**How the definition helps.** The two definitions exclude matching trivial cases, so the equivalence has no exception. The quotient R/R is the trivial ring. The whole ring R is not a maximal ideal, and the trivial ring is not a field. If one definition allowed its trivial case and the other did not, the theorem would fail for M = R. The nLab states both exclusions and the equivalence. The observation that they match is our own reading.

**nLab:** [maximal ideal](https://ncatlab.org/nlab/show/maximal+ideal), [too simple to be simple](https://ncatlab.org/nlab/show/too+simple+to+be+simple), [field](https://ncatlab.org/nlab/show/field). It says: “The improper ideal is not a maximal ideal or even a prime ideal.”

**Sources:** none listed. No primary source with a working link was found.

### The nilradical as an intersection of primes detects nilpotent coefficients

**Remember:** Reduce modulo each prime, where every nonzero polynomial has nonzero powers.

*True by definition. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An element is nilpotent if some positive power of it is zero. The nilradical of a commutative ring is the ideal of its nilpotent elements. An equivalent definition takes the intersection of all prime ideals.

**Problem.** A polynomial over a commutative ring is nilpotent exactly when every coefficient is nilpotent.

**How the definition helps.** The prime ideal definition lets us test nilpotence in quotient rings with no nonzero nilpotent polynomials. If f is nilpotent, its image modulo each prime is zero because the quotient is an integral domain. Thus each coefficient lies in every prime and is nilpotent. Conversely, a finite sum of nilpotent terms is nilpotent. This proof is our own. Starting only with powers, one can instead remove the nilpotent leading coefficient and use induction on degree. The work behind the prime ideal definition uses Zorn’s lemma to find a prime avoiding every power of a nonnilpotent element.

**Wikipedia:** [Nilradical of a ring](https://en.wikipedia.org/wiki/Nilradical_of_a_ring). It says: “The nilradical of a commutative ring is the intersection of all prime ideals.”

**Sources:** none listed. No primary source with a working link was found.

### With a unity, every maximal ideal of a commutative ring is prime

**Remember:** Without a 1, the ideal 4ℤ is maximal in 2ℤ but not prime.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A unity is an element 1 with 1x = x for every x. An ideal M is maximal when M ≠ R and no ideal lies strictly between M and R. An ideal P ≠ R is prime when ab ∈ P implies a ∈ P or b ∈ P.

**Problem.** In a commutative ring with unity, every maximal ideal is a prime ideal.

**How the definition helps.** The unity lets the proof write 1 as m + ra and multiply by b. Our own sketch: if ab ∈ M and a ∉ M, then M + Ra is an ideal larger than M, so it is R. Then 1 = m + ra for some m ∈ M and r ∈ R, and b = mb + rab lies in M. Our own counterexample shows the unity is needed. In the ring 2ℤ of even integers, the ideal 4ℤ has index 2, so it is maximal. But 2·2 = 4 lies in 4ℤ while 2 does not, so 4ℤ is not prime. Nothing hard remains once the ring has a unity.

**Paper or page:** [Maximal Ideal of Commutative and Unitary Ring is Prime Ideal](https://proofwiki.org/wiki/Maximal_Ideal_of_Commutative_and_Unitary_Ring_is_Prime_Ideal). It says: “Let R be a commutative ring with unity. Let M be a maximal ideal of R. Then M is a prime ideal of R.”

**Sources:**

- [ProofWiki, Maximal Ideal of Commutative and Unitary Ring is Prime Ideal](https://proofwiki.org/wiki/Maximal_Ideal_of_Commutative_and_Unitary_Ring_is_Prime_Ideal)

### Sending 1 to 1 makes preimages of prime ideals prime

**Remember:** Keep the 1, and the pull-back of a prime is prime.

*Rules out counterexamples.* MSC 13B10 (Morphisms of commutative rings), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring homomorphism f from R to S keeps addition and multiplication, and also sends the 1 of R to the 1 of S. A map that keeps only addition and multiplication is called a rng homomorphism.

**Problem.** For a ring homomorphism f between commutative rings, the preimage of every prime ideal is a prime ideal. So every ring map gives a map between the sets of prime ideals, in the opposite direction.

**How the definition helps.** Because f(1) = 1, the preimage of a prime ideal never contains 1, so it is a proper ideal. The other condition of a prime ideal (if ab is in it, then a or b is in it) pulls back by itself. Without the rule f(1) = 1, the zero map from R to a nonzero ring S keeps addition and multiplication. The page notes that the zero map is a ring homomorphism only when S is the zero ring. Its preimage of any prime ideal is all of R, which is not a prime ideal (our own). So this rule is what lets every ring map give a map between the sets of prime ideals (our own).

**Wikipedia:** [Ring homomorphism](https://en.wikipedia.org/wiki/Ring_homomorphism). It says: “If R and S are commutative and P is a prime ideal of S then f⁻¹(P) is a prime ideal of R.”

**Sources:** none listed. No primary source with a working link was found.

### The finite-module definition of integrality makes integral extensions compose

**Remember:** Only finitely many coefficients matter when you stack two integral extensions.

*True by definition. Confidence: medium.* MSC 13B21 (Integral dependence in commutative rings; going up, going down). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Call an element integral over A when it lies in a subring that is finitely generated as an A-module. The usual definition asks for a monic polynomial, one with leading coefficient one, that has the element as a root.

**Problem.** If B is integral over A and C is integral over B, then C is integral over A.

**How the definition helps.** With this definition, a tower of two finitely generated steps is finitely generated, and that gives the theorem. Take x in C with a monic equation over B, with coefficients b₁, …, bₙ (our own). Each bᵢ is integral over A, so A\[b₁, …, bₙ\] is a finitely generated A-module (our own). The ring A\[b₁, …, bₙ, x\] is finitely generated over A\[b₁, …, bₙ\], because x satisfies a monic equation (our own). Products of the two sets of generators then generate it as an A-module, so x is integral over A (our own). The proof uses both definitions, so the work moves to their equivalence (our own).

**Paper or page:** [Algebra, Lemma 10.36.6.](https://stacks.math.columbia.edu/tag/00GN). It says: “Suppose that R → S and S → T are integral ring maps. Then R → T is integral.”

**Sources:** none listed. No primary source with a working link was found.

### The finite-module definition of integrality makes integral elements a subring

**Remember:** Put two elements in one finite algebra to add or multiply them.

*True by definition.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B21. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Call x in B integral over a subring A if x lies in a subring of B that is finitely generated as an A-module. The usual definition asks for a monic polynomial over A with root x. A monic polynomial has leading coefficient one.

**Problem.** The elements of a commutative ring B that are integral over a subring A form a subring of B.

**How the definition helps.** With this definition, closure under sums and products only needs one finite subring that holds both elements. Suppose x lies in C and y lies in D, and both are finitely generated A-modules. Products of their generators span the subring CD, so CD is also finitely generated. CD contains x + y, x − y and xy, so these are integral. Wikipedia gives this argument with A\[x\]A\[y\] in place of CD. The work moves to the equivalence of the two definitions. That proof uses the determinant trick to turn a finite module into a monic polynomial (our own).

**Wikipedia:** [Integral element](https://en.wikipedia.org/wiki/Integral_element). It says: “there exists a subring C of B containing A\[b\] and which is a finitely generated A-module”

**Sources:** none listed. No primary source with a working link was found.

### Giving the zero polynomial degree −∞ makes the degree rules always hold

**Remember:** Zero is smaller than every constant, so its degree is below every number.

*Makes the theorem clean to state or prove.* MSC 13B25 (Polynomials over commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The degree of the zero polynomial is set to −∞. Two rules govern −∞: max(a, −∞) = a and a + (−∞) = −∞. In words, −∞ is smaller than every number, and adding it to any number gives −∞.

**Problem.** Two degree rules should hold for all polynomials f and g over an integral domain. The degree of a product is the sum of the degrees: deg(fg) = deg f + deg g. The degree of a sum is at most the larger degree: deg(f + g) ≤ max(deg f, deg g).

**How the definition helps.** The value −∞ lets both rules hold for every pair of polynomials, with no exception for zero. The zero polynomial has no nonzero terms, so strictly it has no degree. If you give it degree 0 or −1, the product rule fails: 0·(x² + 1) = 0, but the rule asks for degree 0 + 2 or −1 + 2. With −∞ and the two rules for −∞, both degree rules hold for every pair, as Axler says. The product rule still needs a coefficient ring with no zero divisors (nonzero elements whose product is zero).

**Wikipedia:** [Degree of a polynomial](https://en.wikipedia.org/wiki/Degree_of_a_polynomial). It says: “The 0 polynomial is declared to have degree −∞ so that exceptions are not needed for various reasonable results.”

**Sources:**

- [S. Axler, Linear Algebra Done Right, Springer (1997), p. 64](https://doi.org/10.1007/b97662)

### Primitive polynomials make Gauss's lemma true

**Remember:** A primitive polynomial has no common factor left to pull out.

*Rules out counterexamples.* MSC 13B25 (Polynomials over commutative rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A polynomial with integer coefficients is primitive if the greatest common divisor of its coefficients is 1. The content of a polynomial is this greatest common divisor. Every polynomial is its content times a primitive polynomial.

**Problem.** The product of two primitive polynomials is primitive. A primitive polynomial is irreducible over ℤ if and only if it is irreducible over ℚ.

**How the definition helps.** The primitive condition removes exactly the constant factors, which are what break the equivalence. Without it, the equivalence is false. The polynomial 2x + 2 is irreducible over ℚ. But over ℤ it factors as 2(x + 1), because 2 is not a unit in ℤ. For primitive polynomials, a short argument modulo a prime p proves the product statement, and the irreducibility statement follows. Gauss's own version in the Disquisitiones was about monic polynomials.

**Wikipedia:** [Gauss's lemma (polynomials)](https://en.wikipedia.org/wiki/Gauss%27s_lemma_%28polynomials%29). It says: “A non-constant polynomial in Z\[X\] is irreducible in Z\[X\] if and only if it is both irreducible in Q\[X\] and primitive in Z\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### A correction factor makes localization work with zero divisors

**Remember:** Fractions are equal if their cross difference dies after multiplying by some t.

*Rules out counterexamples.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicative set in a commutative ring R: it contains 1 and is closed under products. The localization S⁻¹R is the set of fractions r/s with s in S. Two fractions r₁/s₁ and r₂/s₂ are equal when t(s₁r₂ − s₂r₁) = 0 for some t in S.

**Problem.** The localization should be a ring in which every element of S has an inverse. Every ring map from R that sends S to units should factor through it in exactly one way.

**How the definition helps.** The factor t makes the relation an equivalence relation even when R has zero divisors. If as = 0 with a ≠ 0 and s in S, then a/1 must equal as/s = 0/s = 0/1. But the cross difference a·1 − 0·1 = a is not zero, so the naive rule cannot see this. Take ℤ/6 with S = {1, 2, 4}. The naive rule gives 3/1 = 0/2 and 0/2 = 0/1, but not 3/1 = 0/1, so it is not transitive (our own). In an integral domain t cancels, so the rule is the usual one for fractions.

**Wikipedia:** [Localization (commutative algebra)](https://en.wikipedia.org/wiki/Localization_%28commutative_algebra%29). It says: “The reason for the t is to handle cases such as the above a/1 = 0/1, where s₁r₂ − s₂r₁ is nonzero even though the fractions should be regarded as equal.”

**Sources:** none listed. No primary source with a working link was found.

### Defining ℚ as a localization of ℤ embeds it in characteristic-zero fields

**Remember:** Every nonzero integer is already invertible in a characteristic zero field.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Define ℚ as the localization of ℤ at the nonzero integers. A localization is the universal ring in which given elements become invertible. Universal means that it maps uniquely to each ring in which those elements are invertible. The usual construction takes classes of fractions a/b, with a/b = c/d when ad = bc.

**Problem.** Every field of characteristic zero has exactly one ring homomorphism from ℚ that sends 1 to 1, and it is injective. Characteristic zero means that n · 1 ≠ 0 for every positive integer n.

**How the definition helps.** The universal property reduces the theorem to one check, that nonzero integers map to units of the field (our own). That holds because n · 1 ≠ 0 for each nonzero integer n, and nonzero elements of a field are units (our own). The map is injective, because the kernel of a ring map out of a field is an ideal without 1, hence zero (our own). With fractions, one defines a/b ↦ a · b⁻¹ by hand and checks that it respects equality and the operations (our own). The work moves to proving that classes of fractions have the universal property (our own).

**nLab:** [rational number](https://ncatlab.org/nlab/show/rational+number). It says: “is the field of fractions of the commutative ring of integers, ℤ”

**Sources:** none listed. No primary source with a working link was found.

### The field of fractions puts ℚ in every characteristic-zero field

**Remember:** Fractions go wherever their numerators and denominators already go.

*True by definition.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 in which products of nonzero elements are nonzero. Define its field of fractions by the property that every embedding of the domain into a field extends uniquely to the field of fractions. All ring maps here preserve 1, and an embedding is an injective map. The concrete construction uses fractions a/b with b ≠ 0, where a/b = c/d if ad = bc.

**Problem.** If a field F has characteristic zero, meaning no positive integer multiple of 1 is zero, then F contains exactly one copy of ℚ.

**How the definition helps.** The defining property extends the map from ℤ to F to a unique map from ℚ to F. This works because characteristic zero makes the integer map injective, and ℚ is the field of fractions of ℤ. The resulting map is injective because it is a map of fields that preserves 1. With concrete fractions, one checks directly that a/b must map to the image of a divided by the image of b. The work moves into showing that this rule is well defined and preserves the field operations for every integral domain (our own explanation).

**nLab:** [field of fractions](https://ncatlab.org/nlab/show/field+of+fractions). It says: “The field of fractions Q(D) is unique minimal field in which the integral domain D is embedded in the sense that every field K ⊃ D contains the subfield isomorphic to Q(D)”

**Wikipedia:** [Field of fractions](https://en.wikipedia.org/wiki/Field_of_fractions). It says: “if h: R → F is an injective ring homomorphism from R into a field F, then there exists a unique ring homomorphism g: Frac(R) → F that extends h.”

**Sources:** none listed. No primary source with a working link was found.

### The fraction definition of localized modules makes localization exact

**Remember:** Clear a denominator to move a localized kernel element into the original kernel.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings), 13C11. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicatively closed subset of R. Define S⁻¹M as the fractions m/s with m in M and s in S. Two fractions m/s and m′/s′ are equal when t(s′m − sm′) = 0 for some t in S. Another definition sets S⁻¹M = S⁻¹R ⊗ M, the extension of scalars to S⁻¹R.

**Problem.** Let u: L → M and v: M → N form an exact sequence of R-modules. Then the localized sequence S⁻¹L → S⁻¹M → S⁻¹N is exact.

**How the definition helps.** With fractions, exactness is a direct check on elements. Take m/s in the kernel of S⁻¹M → S⁻¹N, so t·v(m) = 0 for some t in S (our own). Then tm is in the kernel of v, so tm = u(l) for some l in L (our own). Hence m/s = u(l)/(ts) comes from S⁻¹L (our own). With the tensor definition, exactness needs a separate proof that S⁻¹R is flat, meaning that tensoring with it keeps injections (our own). The work moves to checking the equality rule and to identifying fractions with the tensor product (our own).

**Paper or page:** [Algebra, Proposition 10.9.12.](https://stacks.math.columbia.edu/tag/00CS). It says: “Let L → M → N be an exact sequence of R-modules. Then S⁻¹L → S⁻¹M → S⁻¹N is also exact.”

**Sources:** none listed. No primary source with a working link was found.

### The universal property of localization makes successive localizations combine

**Remember:** Inverting two sets one after the other allows the same maps as inverting both.

*True by definition. Confidence: medium.* MSC 13B30 (Rings of fractions and localization for commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let S be a multiplicatively closed subset of a commutative ring A, so S contains 1 and is closed under products. Define S⁻¹A by its universal property. Every ring map that sends S to units factors uniquely through A → S⁻¹A. The usual definition builds S⁻¹A from fractions a/s with an explicit rule for equality.

**Problem.** Let S and S′ be multiplicatively closed subsets of A. Localizing first at S′ and then at the image of S gives the localization at the products ss′.

**How the definition helps.** With this definition, both rings receive the same maps, so the universal property makes them isomorphic. A ring map out of either ring is the same as a map out of A that sends S and S′ to units (our own). Two rings with the same universal property are isomorphic by a unique compatible map (our own). The work moves to proving that the fraction ring exists and has the universal property (our own).

**Paper or page:** [Algebra, Proposition 10.9.10.](https://stacks.math.columbia.edu/tag/02C6). It says: “Let S̄ be the image of S in S′⁻¹A, then (SS′)⁻¹A is isomorphic to S̄⁻¹(S′⁻¹A).”

**Sources:** none listed. No primary source with a working link was found.

### Over a nonzero commutative ring, finite free modules have one rank

**Remember:** Free rank is well defined, except over the zero ring.

*Rules out counterexamples.* MSC 13C10 (Projective and free modules and ideals in commutative rings). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring has the invariant basis number property if Rⁿ ≅ Rᵐ implies n = m. Then the rank of a finite free module is well defined. In the Stacks Project, all rings are commutative with 1.

**Problem.** Show that a finite free module has only one rank. Over the zero ring every Rⁿ is the zero module, so this fails there.

**How the definition helps.** Excluding the zero ring removes the only commutative counterexample. The proof is then short (our own summary). A nonzero ring has a maximal ideal 𝔪, and tensoring with the field R/𝔪 reduces the claim to linear algebra. A second lemma in the data set (Tag 01C9) uses the same condition for sheaves. If every stalk of the structure sheaf is a nonzero ring, a locally free sheaf has a locally constant rank. For noncommutative rings the property can fail even for nonzero rings, for example for rings of column-finite infinite matrices (from Wikipedia).

**Wikipedia:** [Invariant basis number](https://en.wikipedia.org/wiki/Invariant_basis_number). It says: “any commutative ring (except the zero ring) satisfies IBN”

**Paper or page:** [Stacks Project, Algebra, Lemma 10.15.8](https://stacks.math.columbia.edu/tag/0FJ7), [Stacks Project, Modules, Lemma 17.14.4](https://stacks.math.columbia.edu/tag/01C9). It says: “Let R be a nonzero ring. Let n, m ≥ 0 be integers. If R⊕ⁿ is isomorphic to R⊕ᵐ as R-modules, then n = m.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0FJ7 (Algebra, Lemma 10.15.8)](https://stacks.math.columbia.edu/tag/0FJ7)
- [The Stacks Project Authors, The Stacks Project, Tag 01C9 (Modules, Lemma 17.14.4)](https://stacks.math.columbia.edu/tag/01C9)

### Factoring ideals instead of numbers makes factorization unique

**Remember:** Factor ideals, not numbers: Kummer's ideal numbers became Dedekind's ideals.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 11R27. arXiv math.AC, math.NT. Level 2: later undergraduate.

**Definition.** A Dedekind domain is a Noetherian integral domain (every ideal is finitely generated) that is integrally closed and in which every nonzero prime ideal is maximal. Integrally closed means that each element of the fraction field that is a root of a monic polynomial over the ring is already in the ring. The product of two ideals is the ideal that all products of their elements generate.

**Problem.** In rings of algebraic integers, a number need not factor uniquely into irreducibles. The task is to state and prove a unique-factorization theorem that holds in the ring of integers of every number field.

**How the definition helps.** Unique factorization comes back when you factor ideals instead of elements. In a ring of integers such as ℤ\[√−5\], elements do not factor uniquely into irreducibles, so the fundamental theorem of arithmetic fails for elements. Dedekind replaced Kummer's ideal numbers by ideals, and in every Dedekind domain each nonzero proper ideal is a unique product of prime ideals. Also, the nonzero fractional ideals (ideals that may have denominators, that is, nonzero finitely generated submodules of the fraction field) form a group. A separate group, the ideal class group, measures how much factorization of elements fails: it is the group of fractional ideals modulo the principal ones. The ring of integers is a unique factorization domain exactly when this group is trivial. It is still necessary to prove that rings of integers are Dedekind domains.

**nLab:** [Dedekind ring](https://ncatlab.org/nlab/show/Dedekind+ring), [Dedekind domain](https://ncatlab.org/nlab/show/Dedekind+domain), [Dedekind cut](https://ncatlab.org/nlab/show/Dedekind+cut), [ideal class group](https://ncatlab.org/nlab/show/ideal+class+group), [Picard group](https://ncatlab.org/nlab/show/Picard+group). It says: “every ideal can be uniquely factored into prime ideals and the non-zero fractional ideals form a group under multiplication of ideals.”

**Sources:**

- [Serge Lang, Algebraic number theory, Graduate Texts in Mathematics 110, Springer (1970, 1994)](https://doi.org/10.1007/978-1-4612-0853-2)

### Division with a smaller remainder makes every ideal principal

**Remember:** You can always divide and get a smaller remainder.

*Makes the theorem clean to state or prove.* MSC 13F07 (Euclidean rings and generalizations), 13F10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A Euclidean domain is an integral domain with a function f from the nonzero elements to the natural numbers. The function f must allow division with remainder. For any a and any nonzero b, there are q and r with a = bq + r. Either r = 0 or f(r) &lt; f(b): the remainder is smaller than the divisor, as f measures size.

**Problem.** Every Euclidean domain is a principal ideal domain, that is, a ring in which every ideal is generated by one element. So every Euclidean domain is also a unique factorization domain.

**How the definition helps.** The definition keeps exactly the step that the proof for the integers uses, so the proof carries over in one line. Take a nonzero ideal I and an element b of I with the smallest value of f. Divide any element a of I by b; the remainder r = a − bq is also in I. If r were nonzero, f(r) &lt; f(b) would contradict the choice of b, so b divides a. So I is principal, and unique factorization follows. The converse fails: Motzkin showed that the ring of integers of ℚ(√−19) is a principal ideal domain but not Euclidean. So it remains hard to decide which rings are Euclidean.

**Wikipedia:** [Euclidean domain](https://en.wikipedia.org/wiki/Euclidean_domain). It says: “if I is a nonzero ideal of R then any element a of I \\ {0} with minimal value (on that set) of f(a) is a generator of I.”

**Sources:**

- [T. Motzkin, The Euclidean algorithm, Bulletin of the American Mathematical Society 55 (1949) 1142–1146](https://doi.org/10.1090/S0002-9904-1949-09344-8)

### Principal ideal domains are exactly the domains with a Dedekind–Hasse norm

**Remember:** Euclidean division, but you may first multiply a by any p.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F10 (Principal ideal rings), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let R be an integral domain. A Dedekind–Hasse norm on R is a function v : R → ℕ with v(s) = 0 only for s = 0. It must satisfy this: for all a and all b ≠ 0, either b divides a, or there are p, q, r with pa = bq + r and 0 &lt; v(r) &lt; v(b). In words, after you multiply a by a suitable p, you can divide by b with a remainder smaller than b.

**Problem.** We want to characterize principal ideal domains (PIDs: domains in which every ideal is generated by one element) by a division property. Euclidean domains are defined by such a property.

**How the definition helps.** The weaker division still runs the usual proof that Euclidean domains are PIDs. A Euclidean norm gives a PID, but many PIDs, such as ℤ\[(1 + √−19)/2\], are not Euclidean. Take an element b of smallest norm in a nonzero ideal I. It must divide every a in I, or else r = pa − bq would be an element of I with smaller norm. Conversely, every PID has such a norm: 2 to the power of the number of prime factors. So 'R is a PID if and only if R has a Dedekind–Hasse norm' holds, and the easy direction is the Euclidean argument word for word. This is a classical result: the nLab notes that it fails in constructive mathematics.

**nLab:** [Dedekind-Hasse norm](https://ncatlab.org/nlab/show/Dedekind-Hasse+norm). It says: “a pid is like an Euclidean domain but with a weaker notion of Euclidean division.”

**Sources:**

- [John Greene, Principal ideal domains are almost Euclidean, American Mathematical Monthly 104 (1997) 154–156](https://doi.org/10.1080/00029890.1997.11990615)

### Ascending chain conditions guarantee that factorizations into irreducibles exist

**Remember:** Chains of divisors must stop, so factoring must stop.

*Rules out counterexamples.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A ring is Noetherian if every increasing chain of ideals I₁ ⊆ I₂ ⊆ … becomes constant; equivalently, every ideal is finitely generated. The ascending chain condition on principal ideals asks this only for chains of principal ideals.

**Problem.** Take a Noetherian domain, or any domain with the ascending chain condition on principal ideals. Then every nonzero non-unit is a finite product of irreducible elements. This is the existence half of unique factorization.

**How the definition helps.** With the chain condition, existence takes two lines. If some element had no factorization, it would split into two non-units, one again without one; the principal ideals would grow forever (our own). Without a chain condition existence can fail, as in the ring of all algebraic integers. There every non-unit a is √a · √a, a product of two non-units, so there are no irreducible elements at all (our own). Uniqueness is a separate matter, since the Noetherian ring ℤ\[√−5\] has 6 = 2 · 3 = (1 + √−5)(1 − √−5). The page notes that the converse, from atomic to the chain condition, is false (Grams).

**Wikipedia:** [Atomic domain](https://en.wikipedia.org/wiki/Atomic_domain), [Noetherian ring](https://en.wikipedia.org/wiki/Noetherian_ring). It says: “More generally, any integral domain satisfying the ascending chain condition on principal ideals (ACCP) is an atomic domain.”

**Sources:**

- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)
- [A. Grams, Atomic rings and the ascending chain condition for principal ideals, Mathematical Proceedings of the Cambridge Philosophical Society 75 (1974) 321–329](https://doi.org/10.1017/S0305004100048532)

### Counting factorizations up to units makes them unique

**Remember:** Units are the signs of a ring: they move freely between factors.

*Makes the theorem clean to state or prove.* MSC 13F15 (Commutative rings defined by factorization properties (e.g., atomic, factorial, half-factorial)), 13A05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** A unit is an element with a multiplicative inverse, such as 1 and −1 in ℤ. An irreducible element is a nonzero non-unit that is not a product of two non-units. Two factorizations count as the same if their factors match after a change of order and multiplication by units.

**Problem.** In a unique factorization domain, every nonzero non-unit is a product of irreducible elements in exactly one way.

**How the definition helps.** Uniqueness can only be true if factorizations that differ by units count as the same. For example (our own), 6 = 2·3 = (−2)·(−3) in ℤ. In the Gaussian integers (the numbers a + bi with a and b integers), 2 = (1+i)(1−i) = −i(1+i)². We compare factors up to associates, that is, up to multiplication by a unit. This removes these false counterexamples, so we can state uniqueness at all. The definition does not make every ring a unique factorization domain. In ℤ\[√−5\], 6 = 2·3 = (1+√−5)(1−√−5) gives two truly different factorizations into irreducible elements.

**Wikipedia:** [Irreducible element](https://en.wikipedia.org/wiki/Irreducible_element), [Unique factorization domain](https://en.wikipedia.org/wiki/Unique_factorization_domain). It says: “If the irreducible factors of every non-zero non-unit element are uniquely defined, up to the multiplication by a unit, then the integral domain is called a unique factorization domain”

**Sources:** none listed. No primary source with a working link was found.

### Formal polynomial rings have evaluation maps by their universal property

**Remember:** Choose where the variables go, and evaluation is a ring map.

*True by definition. Confidence: medium.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials). arXiv math.AC. Level 2: later undergraduate.

**Definition.** The polynomial ring R\[X\] is built from formal sums of monomials with coefficients in R. Its universal property is as follows. A ring map from R to S, with a chosen value in S for each variable, extends in exactly one way to a ring map from R\[X\] to S.

**Problem.** Let R and S be commutative rings with 1, let ψ be a ring map from R to S, and choose elements sⱼ of S. There is a unique ring homomorphism from the polynomial ring to S that extends ψ and sends each Xⱼ to sⱼ.

**How the definition helps.** Because the polynomial ring is free on its variables, substituting values is automatically a ring homomorphism. So 'the value of fg at s is f(s)g(s)' needs no separate calculation. In our own reading, this is what lets one define the minimal polynomial as a generator of the kernel of evaluation. The work moves into the construction of the ring and the check of the universal property.

**Paper or page:** [Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set). It says: “Then there exists a unique evaluation homomorphism φ: R\[{Xⱼ: j ∈ J}\] → S at (sⱼ) extending ψ.”

**Sources:**

- [ProofWiki, Universal Property of Polynomial Ring/Free Monoid on Set](https://proofwiki.org/wiki/Universal_Property_of_Polynomial_Ring/Free_Monoid_on_Set)

### Over an integral domain, the only invertible polynomials are invertible constants

**Remember:** Over ℤ/4, (1 + 2X)² = 1, so 1 + 2X is a unit.

*Rules out counterexamples. Confidence: medium.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials), 13G05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 and no zero divisors. A unit is an element that has a multiplicative inverse.

**Problem.** Find all units of the polynomial ring D\[X\].

**How the definition helps.** Our own sketch: with no zero divisors, the product of two leading coefficients is nonzero, so degrees add. Then fg = 1 forces deg f + deg g = 0, so f and g are constants. ProofWiki gives the general rule for a nonzero commutative ring. There, P is a unit exactly when its constant term is a unit and its other coefficients are nilpotent. A nilpotent element is one with some power equal to 0. Our own example: in (ℤ/4)\[X\], (1 + 2X)(1 + 2X) = 1 + 4X + 4X² = 1. Our own remark: only the absence of nilpotent elements matters, so the same result holds over any reduced ring.

**Paper or page:** [Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain), [Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring). It says: “Then the group of units of D\[X\] is precisely the group of elements of D\[X\] of degree zero that are units of D.”

**Sources:**

- [ProofWiki, Units of Ring of Polynomial Forms over Integral Domain](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Integral_Domain)
- [ProofWiki, Units of Ring of Polynomial Forms over Commutative Ring](https://proofwiki.org/wiki/Units_of_Ring_of_Polynomial_Forms_over_Commutative_Ring)

### Polynomials as coefficient lists, not functions, keep distinct polynomials distinct

**Remember:** A polynomial is its coefficients, not the values it takes.

*Rules out counterexamples.* MSC 13F20 (Polynomial rings and ideals; rings of integer-valued polynomials). arXiv math.AC. Level 2: later undergraduate.

**Definition.** A polynomial form is a finite list of coefficients, written with an indeterminate X. A polynomial function is the map from the ring to itself that the form defines by substitution.

**Problem.** Over an integral domain D, the ring of polynomial forms D\[X\] need not be isomorphic to the ring of polynomial functions on D.

**How the definition helps.** If polynomials were functions, over a finite field two different polynomials could be the same object. In our own example, over the field with p elements, Xᵖ and X give the same function, so Xᵖ − X would be zero. With forms, degree and coefficients are well defined over every ring. The slogan in the data set names finite domains as the case where the two rings differ. Our own remark is that over an infinite integral domain the two rings are isomorphic, so the choice only matters in the finite case.

**Paper or page:** [Ring of Polynomial Forms is not necessarily Isomorphic to Ring of Polynomial Functions](https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_not_necessarily_Isomorphic_to_Ring_of_Polynomial_Functions). It says: “Then it is not necessarily the case that D\[X\] is isomorphic with P(D).”

**Sources:**

- [ProofWiki, Ring of Polynomial Forms is not necessarily Isomorphic to Ring of Polynomial Functions](https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_is_not_necessarily_Isomorphic_to_Ring_of_Polynomial_Functions)

### Dual numbers define the formal derivative of power series

**Remember:** Substitute X + ε with ε² = 0, and read off the coefficient of ε.

*True by definition. Confidence: medium.* MSC 13F25 (Formal power series rings), 13N15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** The dual numbers over a ring S are S\[ε\]/(ε²): S with a new element ε added, where ε² = 0. Let δ : R\[\[X\]\] → R\[\[X\]\]\[ε\]/(ε²) be the unique continuous R-algebra map with δ(X) = X + ε. In words, δ substitutes X + ε for X. The derivative p′ of a power series p is the unique element with δ(p) = p + p′ε.

**Problem.** Show that formal differentiation of power series is a derivation, which means that it obeys the Leibniz rule (pq)′ = p′q + pq′. Also show that it obeys the chain rule.

**How the definition helps.** The map δ is a ring map, so the product rule comes out of multiplying two expressions. The coefficient of ε in δ(pq) = δ(p)δ(q) is p′q + pq′, because ε² = 0. So the Leibniz rule holds by construction. The nLab says this for polynomials, and the short computation for all power series is our own. The chain rule has a conceptual proof from the universal property of adic completion (R\[\[X\]\] is the completion of R\[X\] for the powers of X). The remaining work is to check that this p′ agrees with the coefficient formula Σ aₙ₊₁(n + 1)Xⁿ. The nLab leaves this check as an exercise with a hint.

**nLab:** [power series](https://ncatlab.org/nlab/show/power+series). It says: “the restriction of p ↦ p′ to R\[X\] is by construction a derivation such that X′ = 1”

**Sources:** none listed. No primary source with a working link was found.

### The valuation definition makes nonzero ideals of discrete valuation rings uniformizer powers

**Remember:** An element of least value generates the whole ideal.

*True by definition. Confidence: medium.* MSC 13F30 (Valuation rings), 12J10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let v map the nonzero elements of a field onto ℤ, with v(xy) = v(x) + v(y) and v(x + y) ≥ min(v(x), v(y)). Define the discrete valuation ring as 0 together with the elements where v ≥ 0. A uniformizer is an element t with v(t) = 1. Another definition takes a local principal ideal domain that is not a field.

**Problem.** In a discrete valuation ring, every nonzero ideal is generated by a power of a uniformizer, an element of value one.

**How the definition helps.** With the valuation definition, divisibility is read off from values: a divides b exactly when v(a) ≤ v(b) (our own). Let n be the least value in a nonzero ideal I (our own). Then tⁿ lies in I and divides every element of I, so I = (tⁿ) (our own). The work moves to building the valuation from a local principal ideal domain (our own).

**Paper or page:** [Proposition 4.13.](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “is of the form (tⁿ) for some unique n ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Integral domains leave out the zero ring, as primes leave out 1

**Remember:** A domain needs at least two elements, as a prime must be bigger than 1.

*Rules out counterexamples.* MSC 13G05 (Integral domains), 13A15. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a nonzero commutative ring with no zero divisors other than 0. A zero divisor is an element a with ab = 0 for some nonzero b. A prime ideal must be a proper ideal, that is, not the whole ring.

**Problem.** Let R be a commutative ring and P an ideal of R. Then R/P is an integral domain if and only if P is prime. In particular, for a positive integer n, ℤ/nℤ is an integral domain if and only if n is prime.

**How the definition helps.** The two exclusions match, so the theorem has no exceptions. Suppose the zero ring were an integral domain. Then R/R would be an integral domain, but R is not a prime ideal. Also ℤ/1ℤ would be an integral domain, but 1 is not prime. When integral domains leave out the zero ring and prime ideals leave out the whole ring, both exceptions go away together. The article also notes that this agrees with defining a domain as a ring in which 0 is the only zero divisor.

**Wikipedia:** [Zero ring](https://en.wikipedia.org/wiki/Zero_ring), [Prime ideal](https://en.wikipedia.org/wiki/Prime_ideal). It says: “Second, this way, for a positive integer n, the ring Z/nZ is a domain if and only if n is prime, but 1 is not prime.”

**Sources:** none listed. No primary source with a working link was found.

### Into an integral domain, every nonzero ring map sends 1 to 1

**Remember:** With no zero divisors, the image of 1 is 0 or 1.

*Rules out counterexamples.* MSC 13G05 (Integral domains), 13B10. arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 that has no zero divisors. A zero divisor is a nonzero element whose product with some other nonzero element is 0.

**Problem.** Let φ be a ring homomorphism from a ring with 1 to an integral domain. If φ is not the zero map, then φ sends 1 to 1.

**How the definition helps.** The rule 'no zero divisors' leaves the image of 1 only two choices, 0 or 1. The element e = φ(1) satisfies e² = e, so e(e − 1) = 0. In an integral domain, this forces e = 0 or e = 1. If e = 0, then φ(r) = φ(r·1) = 0 for every r, so φ is the zero map. The rule excludes targets such as ℤ × ℤ. There, in our own example, the map n ↦ (n, 0) keeps sums and products but sends 1 to (1, 0). So for nonzero maps into a domain, the extra rule that 1 goes to 1 costs nothing.

**Paper or page:** [Ring Homomorphism from Ring with Unity to Integral Domain Preserves Unity](https://proofwiki.org/wiki/Ring_Homomorphism_from_Ring_with_Unity_to_Integral_Domain_Preserves_Unity). It says: “Let φ: R → D be a ring homomorphism such that ker φ ≠ R where ker φ denotes the kernel of φ.”

**Sources:**

- [ProofWiki, Ring Homomorphism from Ring with Unity to Integral Domain Preserves Unity](https://proofwiki.org/wiki/Ring_Homomorphism_from_Ring_with_Unity_to_Integral_Domain_Preserves_Unity)

### No zero divisors force the characteristic of a domain to be prime

**Remember:** If n = ab and n·1 = 0, then a·1 or b·1 is already 0.

*Rules out counterexamples.* MSC 13G05 (Integral domains). arXiv math.AC. Level 2: later undergraduate.

**Definition.** An integral domain is a commutative ring with 1 ≠ 0 and no zero divisors. So ab = 0 implies a = 0 or b = 0. Its characteristic is the least n &gt; 0 with n·1 = 0, or 0 if no such n exists.

**Problem.** Every integral domain, and so every field, has characteristic 0 or a prime number.

**How the definition helps.** The ban on zero divisors splits a composite characteristic into a smaller one, which is impossible. Our own sketch: let n = ab be least with n·1 = 0, where 1 &lt; a, b &lt; n. Then (a·1)(b·1) = 0, so a·1 = 0 or b·1 = 0. Our own example: the ring ℤ/6 has characteristic 6 and 2·3 = 0 there, so it is excluded because it has zero divisors. The condition 1 ≠ 0 removes the other exception. ProofWiki shows that the null ring, with one element, is the only ring of characteristic 1, and 1 is not a prime. So each clause of the definition removes one kind of exception, and the proof is three lines.

**Paper or page:** [Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime), [Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One), [Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime). It says: “Let D be an integral domain. Let Char D be the characteristic of D. Then Char D is either 0 or a prime number.”

**Sources:**

- [ProofWiki, Characteristic of Integral Domain is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Integral_Domain_is_Zero_or_Prime)
- [ProofWiki, Null Ring iff Characteristic is One](https://proofwiki.org/wiki/Null_Ring_iff_Characteristic_is_One)
- [ProofWiki, Characteristic of Field is Zero or Prime](https://proofwiki.org/wiki/Characteristic_of_Field_is_Zero_or_Prime)

### Making reduced Gröbner bases monic gives every ideal one canonical basis

**Remember:** Scale to leading coefficient 1, and the Gröbner basis is unique.

*Rules out counterexamples.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)). arXiv math.AC. Level 2: later undergraduate.

**Definition.** Fix a monomial ordering, a total order of monomials with M ≤ MP, and with MP ≤ NP when M ≤ N. It is then a well-order. A Gröbner basis of an ideal I is a finite generating set whose leading monomials generate the ideal of all leading monomials of I. It is reduced if every element has leading coefficient 1 and no element can be reduced by the others.

**Problem.** Decide whether two ideals of k\[x₁, …, xₙ\], each given by a finite list of generators, are equal.

**How the definition helps.** Reduction removes redundant elements and terms, and the condition on leading coefficients removes rescaling. The page notes that without this condition, reduced bases are unique only up to multiplying by nonzero constants. For example, {x} and {2x} would both be reduced bases of the ideal (x) over ℚ (our own). With both conditions each ideal has one reduced basis, so equality of ideals becomes equality of two finite lists. Because the monomial order is a well-order, the reduction steps always stop (our own). The hard part is computing the basis, which Buchberger's algorithm does.

**Wikipedia:** [Gröbner basis](https://en.wikipedia.org/wiki/Gr%C3%B6bner_basis). It says: “All reduced Gröbner bases of an ideal (for a fixed monomial ordering) are equal. It follows that two ideals are equal if and only if they have the same reduced Gröbner basis.”

**Sources:**

- [B. Buchberger, Bruno Buchberger's PhD thesis 1965: An algorithm for finding the basis elements of the residue class ring of a zero dimensional polynomial ideal, Journal of Symbolic Computation (2006), English translation](https://doi.org/10.1016/j.jsc.2005.09.007)

### Root differences make resultants detect common roots and multiply

**Remember:** A product of root gaps is zero exactly when some gap is zero.

*True by definition.* MSC 13P15 (Solving polynomial systems; resultants), 12E05. arXiv math.AC. Level 2: later undergraduate.

**Definition.** Let A and B have degrees d and e, both positive, and leading coefficients a and b in the same field. List their roots λᵢ and μⱼ in a field where both split into linear factors, repeating each root according to its multiplicity. Define res(A, B) as aᵉbᵈ times the product of all differences λᵢ − μⱼ. Another definition takes the determinant of the Sylvester matrix, whose columns are shifted copies of the coefficient lists.

**Problem.** The resultant res(A, B) is zero exactly when A and B have a common root in a field where both split. For nonconstant C over the same base field, res(A, BC) = res(A, B) res(A, C).

**How the definition helps.** The product definition makes a common root exactly a zero factor, and it makes multiplication split the factors into two groups. The root list of BC combines the lists of B and C, including repeats. Its degree adds and its leading coefficients multiply, giving the stated product. The work is to prove that this product equals the Sylvester determinant, so it can be computed from coefficients without finding roots. Wikipedia starts with the determinant, and taking the root product as the definition is our own framing.

**Wikipedia:** [Resultant](https://en.wikipedia.org/wiki/Resultant). It says: “The resultant of two polynomials with coefficients in an integral domain is zero if and only if they have a common root in an algebraically closed field containing the coefficients.”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric algebras as free commutative algebras makes sums become tensor products

**Remember:** Mapping out of a direct sum means giving one map from each summand.

*True by definition. Confidence: medium.* MSC 13A02 (Graded rings), 15A69. arXiv math.AC. Level 3: graduate.

**Definition.** Define the symmetric algebra Sym(M) of a module M over a commutative ring R as the free commutative R-algebra on M. This means each linear map from M to a commutative R-algebra extends uniquely to an algebra map from Sym(M). The tensor algebra is the sum of all tensor powers of M. The explicit construction divides it by the elements x ⊗ y − y ⊗ x.

**Problem.** For modules M and N, Sym(M ⊕ N) is isomorphic to Sym(M) ⊗ Sym(N).

**How the definition helps.** With this definition, both algebras have the same maps out, so they are isomorphic. A linear map from M ⊕ N is a pair of linear maps, hence a pair of algebra maps from Sym(M) and Sym(N) (our own). For commutative algebras, such a pair is the same as one map from the tensor product of the two algebras (our own). So both sides have the same maps into every commutative algebra (our own). The work moves to proving that the quotient of the tensor algebra has the universal property (our own).

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra S V of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional ideals make the ideals of a Dedekind domain a group

**Remember:** Allow denominators, and ideals get inverses as fractions get them.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13F05. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A fractional ideal of a domain R is an R-submodule I of its field of fractions. Some nonzero r in R must give rI inside R. So it is an ideal with a common denominator. It is invertible if IJ = R for some fractional ideal J.

**Problem.** A domain is a Dedekind domain exactly when every nonzero fractional ideal is invertible. Then the fractional ideals form a group, and the class group is its quotient by the principal ones.

**How the definition helps.** Ordinary ideals form only a monoid, a set with an associative product and a unit but no inverses. No proper ideal times an ideal gives R, so denominators must supply the inverses. With this definition the ideal class group is a quotient of groups, so it is a group by definition. The bad case is ℤ\[√−3\], which is not integrally closed (our own). There the ideal I = (2, 1 + √−3) satisfies I² = 2I, so I cannot be invertible (our own). What stays hard is the proof that rings of integers are Dedekind domains and that the class group is finite. Unique factorization of ideals is a separate entry.

**Wikipedia:** [Fractional ideal](https://en.wikipedia.org/wiki/Fractional_ideal), [Ideal class group](https://en.wikipedia.org/wiki/Ideal_class_group). It says: “An integral domain is a Dedekind domain if and only if every non-zero fractional ideal is invertible.”

**Sources:** none listed. No primary source with a working link was found.

### Irredundant primary decompositions have uniquely determined primes

**Remember:** Remove the spare pieces, and the primes of an ideal are fixed.

*Rules out counterexamples.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** A proper ideal Q is primary if xy in Q implies that x or some power of y is in Q. Its radical √Q is then a prime ideal. A primary decomposition I = Q₁ ∩ … ∩ Qₙ is irredundant if no Qᵢ can be removed and the primes √Qᵢ are all distinct.

**Problem.** Lasker–Noether theorem: in a Noetherian ring every ideal has an irredundant primary decomposition. The set of primes √Qᵢ depends only on I, and so do the components that belong to minimal primes.

**How the definition helps.** The two conditions forbid padding a decomposition with spare pieces. Without them, the ideal (x) of k\[x, y\] could be written as (x) ∩ (x, y), which adds the prime (x, y) (our own). Two primary ideals with the same radical P meet in a P-primary ideal, so they can be merged (our own). Even for irredundant decompositions, the components of embedded primes are not unique: (x², xy) = (x) ∩ (x², xy, yⁿ) for every positive n. So uniqueness holds exactly for the primes and for the isolated components. The real work is the proof that the primes √Qᵢ do not depend on the chosen decomposition. The page says the theorem extends the fundamental theorem of arithmetic and splits each algebraic set uniquely into irreducible components.

**Wikipedia:** [Primary decomposition](https://en.wikipedia.org/wiki/Primary_decomposition). It says: “Removing any of the Qᵢ changes the intersection”

**Sources:**

- [E. Lasker, Zur Theorie der Moduln und Ideale, Mathematische Annalen 60 (1905) 20–116](https://doi.org/10.1007/BF01447495)
- [E. Noether, Idealtheorie in Ringbereichen, Mathematische Annalen 83 (1921) 24–66](https://doi.org/10.1007/BF01464225)

### Jacobson rings state the Nullstellensatz for all finitely generated algebras

**Remember:** In a Jacobson ring, maximal ideals see every prime.

*Makes the theorem clean to state or prove.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13B10. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A commutative ring is a Jacobson ring (or Hilbert ring) if every prime ideal is an intersection of maximal ideals.

**Problem.** Hilbert's Nullstellensatz is a special case of this: the polynomial ring in finitely many variables over a field is a Jacobson ring. In general, every finitely generated algebra S over a Jacobson ring R is Jacobson. Every maximal ideal of S pulls back to a maximal ideal of R.

**How the definition helps.** The definition picks out the property that passes to finitely generated algebras. So the general theorem reduces to one hard step, from R to R\[x\], plus induction and quotients (our own). This explains why classical varieties over a field could use maximal ideals only. Local rings show the limit: let ℤ₍₂₎ be the ring of fractions with odd denominators. Its only maximal ideal is (2), so its zero ideal, a prime, is not an intersection of maximal ideals (our own). Also ℚ = ℤ₍₂₎\[1/2\] is finitely generated over it, yet the maximal ideal 0 of ℚ pulls back to a non-maximal ideal (our own). For such rings the page says that prime ideals give a cleaner theory.

**Wikipedia:** [Jacobson ring](https://en.wikipedia.org/wiki/Jacobson_ring). It says: “A general form of the Nullstellensatz states that if R is a Jacobson ring, then so is any finitely generated R-algebra S.”

**Sources:**

- [O. Goldman, Hilbert rings and the Hilbert Nullstellensatz, Mathematische Zeitschrift 54 (1951) 136–140](https://doi.org/10.1007/BF01179855)
- [W. Krull, Jacobsonsche Ringe, Hilbertscher Nullstellensatz, Dimensionstheorie, Mathematische Zeitschrift 54 (1951) 354–387](https://doi.org/10.1007/BF01238035)

### The square-zero ring R ⊕ M gives Lasker–Noether for modules from ideals

**Remember:** Turn submodules into ideals by declaring their internal products zero.

*True by definition. Confidence: medium.* MSC 13A15 (Ideals and multiplicative ideal theory in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** For a module M over a commutative ring R, form the ring R ⊕ M with product (r, m)(s, n) = (rs, rn + sm). Products of two elements of M are then zero. The submodules of M are exactly the ideals of R ⊕ M that lie inside M.

**Problem.** Let R be Noetherian and M finitely generated. Then every proper submodule of M is a finite intersection of primary submodules. A submodule N is primary when each r in R acts on M/N either injectively or nilpotently.

**How the definition helps.** The construction turns the module theorem into a case of the ideal theorem, so no separate proof is needed. Wikipedia says that this deduction is straightforward. In our own details, R ⊕ M is Noetherian because it is finite over R. Write the submodule as an intersection of primary ideals Q, then intersect each Q with M. Each intersection is M or a primary submodule, since rm in Q with m not in Q forces a power of r into Q. The real work stays in the Lasker–Noether theorem for ideals.

**Wikipedia:** [Algebra over a field](https://en.wikipedia.org/wiki/Algebra_over_a_field). It says: “Similarly, unital zero algebras allow to deduce straightforwardly the Lasker–Noether theorem for modules”

**Sources:** none listed. No primary source with a working link was found.

### Defining normal rings by their local rings makes normality local

**Remember:** Normal is checked prime by prime, so products of normal domains are normal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13B22 (Integral closure of commutative rings and ideals), 13B30, 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** In the Stacks Project, a ring R is normal if its localization at every prime ideal is a normal domain. A normal domain is an integral domain that is integrally closed in its fraction field. So a normal ring need not be a domain. The total ring of fractions inverts all nonzerodivisors.

**Problem.** A normal scheme should be one whose local rings are normal domains. With the older definition 'integrally closed domain', the disjoint union of two normal varieties would fail. Its ring is not a domain.

**How the definition helps.** Defining normality one prime at a time makes it a local property by definition, so normal schemes can be defined by their local rings. The quoted lemma shows that, with finitely many minimal primes, this agrees with the older notions: it means a finite product of normal domains. For example (our own), k\[x\] × k\[y\] is normal but not a domain. The condition 'integrally closed in its total ring of fractions' alone is too weak (our own example). The ring k\[ε\]/(ε²) is its own total ring of fractions, so it is integrally closed there. But it is not reduced, so it is not normal.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.37.16](https://stacks.math.columbia.edu/tag/030C). It says: “Assume R is reduced and has finitely many minimal primes. Then the following are equivalent: (1) R is a normal ring, … and (3) R is a finite product of normal domains.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 030C (Algebra, Lemma 10.37.16)](https://stacks.math.columbia.edu/tag/030C)

### The Rees algebra definition shows an ideal's integral closure is an ideal

**Remember:** An ideal's closure is the degree-one part of a ring's closure.

*True by definition.* MSC 13B22 (Integral closure of commutative rings and ideals), 13A30. arXiv math.AC. Level 3: graduate.

**Definition.** The Rees algebra R\[It\] of an ideal I is the subring of R\[t\] generated by R and all products at with a in I. Say r is in the integral closure of I when rt is integral over R\[It\], that is, a root of a monic polynomial over it. The usual definition asks for an equation rⁿ + a₁rⁿ⁻¹ + ⋯ + aₙ = 0 with each aᵢ in Iⁱ.

**Problem.** The integral closure of an ideal is an ideal.

**How the definition helps.** With this definition, the theorem follows from the fact that integral elements form a subring. If rt and st are integral over R\[It\], so is their sum (r + s)t (our own). For a in R, the product a·rt is integral, because a lies in R\[It\] (our own). Wikipedia states that the integral closure of R\[It\] in R\[t\] has degree-n part equal to the closure of Iⁿ times tⁿ. Its degree-one case says that the two definitions agree, and that is where the work goes. To turn an equation for rt into one for r, take its part of degree n in t (our own).

**Wikipedia:** [Integral closure of an ideal](https://en.wikipedia.org/wiki/Integral_closure_of_an_ideal). It says: “In particular, Ī is an ideal”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit completion of R\[x\] at x is the power series ring

**Remember:** A power series is exactly one compatible choice of every finite truncation.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13F25. arXiv math.AC. Level 3: graduate.

**Definition.** Define the completion of a ring at an ideal I as the inverse limit of its quotients by the powers Iⁿ. An element is a sequence of residues that agree under reduction. Another definition uses Cauchy sequences of elements, with two sequences identified when their difference tends to zero.

**Problem.** The completion of R\[x\] at the ideal (x) is the ring R\[\[x\]\] of formal power series over R.

**How the definition helps.** With this definition, the completion is visibly a ring of compatible truncations. A residue modulo xⁿ is a polynomial of degree below n (our own). Compatibility means that each truncation extends the one before, so the sequence fixes one power series (our own). Sums and products of residues follow the usual coefficient rules (our own). The work moves to showing that the Cauchy sequence completion is the same ring (our own). The nLab states the result and calls power series rings the archetypal completions.

**nLab:** [completion of a ring](https://ncatlab.org/nlab/show/completion+of+a+ring). It says: “then the formal completion of R\[x\] at the ideal (x) generated by the free generator x is the ring of formal power series”

**Sources:** none listed. No primary source with a working link was found.

### The inverse-limit definition of completion lets units lift from R/I

**Remember:** Take inverses at every finite level, where uniqueness keeps them compatible.

*True by definition. Confidence: medium.* MSC 13B35 (Completion of commutative rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** Define the I-adic completion of R as the inverse limit of the rings R/Iⁿ. An element is a sequence of residues, one modulo each Iⁿ, that agree under reduction. Another definition uses classes of Cauchy sequences for the topology in which the powers Iⁿ are the small neighbourhoods of zero.

**Problem.** Let I be an ideal of R. An element of the completion that maps to a unit of R/I is a unit.

**How the definition helps.** With this definition, it is enough to invert the element in each ring R/Iⁿ. The kernel of R/Iⁿ → R/I is I/Iⁿ, which is nilpotent (our own). An element that is a unit modulo a nilpotent ideal is a unit, so the residue is invertible in R/Iⁿ (our own). Inverses are unique, so they agree under reduction and form an inverse in the completion (our own). The work moves to showing that the Cauchy sequence completion is the same ring (our own).

**Paper or page:** [Algebra, Lemma 10.96.6.](https://stacks.math.columbia.edu/tag/05GI). It says: “any element of R̂ which maps to a unit of R/I is a unit”

**Sources:** none listed. No primary source with a working link was found.

### Defining henselization by a universal property makes it extend local maps

**Remember:** The universal map extends each local map in only one way.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring is henselian when every simple root of a monic polynomial modulo the maximal ideal lifts to a root in the ring. Define the henselization of a local ring R as a local map R → Rʰ into a henselian ring. Every local map from R to a henselian local ring must factor uniquely through it. The Stacks Project instead builds Rʰ as a direct limit of étale algebras over R, which are flat algebras with no ramification.

**Problem.** Every local map of local rings induces a unique compatible local map of henselizations.

**How the definition helps.** With the universal property, the induced map exists and is unique with no construction (our own). Compose R → S with S → Sʰ to get a local map into a henselian ring (our own). It factors uniquely through Rʰ, which gives the map Rʰ → Sʰ (our own). The work moves to proving that the direct-limit construction is henselian and has the universal property.

**Paper or page:** [Lemma 10.155.6.](https://stacks.math.columbia.edu/tag/04GS). It says: “There exists a unique local ring map Rʰ → Sʰ fitting into the commutative diagram”

**Sources:**

- [Masayoshi Nagata, On the Theory of Henselian Rings, Nagoya Mathematical Journal 5 (1953), 45–57.](https://doi.org/10.1017/S0027763000015439)

### The universal property of henselization makes it commute with quotients

**Remember:** Killing an ideal imposes the same condition before or after henselization.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13J15. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring is henselian when every simple root of a monic polynomial modulo the maximal ideal lifts to a root in the ring. Define the henselization Rʰ of a local ring R by a universal property. Every local map from R to a henselian local ring must factor uniquely through R → Rʰ. The Stacks Project instead builds Rʰ as a direct limit of étale algebras over R.

**Problem.** Let I be an ideal inside the maximal ideal of a local ring R. Then Rʰ/IRʰ is the henselization of R/I.

**How the definition helps.** With the universal property, it is enough to show that both rings receive the same maps (our own). A local map from R/I to a henselian ring is a local map from R that kills I (our own). It factors uniquely through Rʰ, and the factored map kills IRʰ (our own). Rʰ/IRʰ is henselian by Stacks Lemma 10.153.4, since it is finite over Rʰ. The work moves to constructing Rʰ and to that lemma.

**Paper or page:** [Lemma 10.156.2.](https://stacks.math.columbia.edu/tag/05WQ). It says: “Then Rʰ/IRʰ is the henselization of R/I.”

**Sources:** none listed. No primary source with a working link was found.

### Unique infinitesimal lifts make every localization formally étale

**Remember:** Units stay units modulo a nilpotent ideal, so fractions lift uniquely.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13B30. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A localization S⁻¹R is the ring obtained by making every element of a multiplicatively closed set S invertible. Let B be an R-algebra and I an ideal of B with some power equal to zero. The map R → A is formally étale if every R-algebra map A → B/I lifts uniquely to B, for all such B and I.

**Problem.** For a commutative ring R and a multiplicatively closed subset S, the localization map R → S⁻¹R is formally étale.

**How the definition helps.** The lifting test reduces the claim to checking that the denominators are units in B. If an element has an inverse modulo I, the product with a representative of that inverse differs from 1 by a nilpotent element. A finite geometric sum then gives an inverse in B. Thus S maps to units, and the localization property gives a unique lift. This direct proof is our own. For one denominator s, the classical étale test uses the equation st = 1 with invertible derivative s. An arbitrary localization need not have finite presentation, the condition under which the classical and lifting tests agree (Tag 00UR).

**Paper or page:** [Algebra, Lemma 10.150.5](https://stacks.math.columbia.edu/tag/04EG). It says: “Let R be a ring. Let S ⊂ R be any multiplicative subset. Then the ring map R → S⁻¹R is formally étale.”

**Sources:**

- [The Stacks Project, Lemma 10.150.5, Tag 04EG](https://stacks.math.columbia.edu/tag/04EG)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Unique lifts make formally étale algebras survive directed colimits

**Remember:** A map out of a colimit is a compatible family of maps.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 14B25. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A ring map R → A is formally étale if every R-algebra map A → B/I lifts uniquely to B. This must hold for every R-algebra B and every ideal I of B with some power equal to zero. Unlike étale maps, formally étale maps need not have a presentation with finitely many generators and relations.

**Problem.** Take a directed system of R-algebras that are formally étale over R. Its colimit combines the algebras along the maps in the system. The colimit is formally étale over R.

**How the definition helps.** The lifting definition makes a lift from the colimit a compatible family of lifts from the individual algebras. Each of those lifts exists and is unique. Uniqueness ensures that the lifts agree along the maps of the system. This is our own explanation. The usual étale definition also requires finite presentation, and that condition can fail in the colimit. For example, ℚ is the directed union of the étale ℤ-algebras ℤ\[1/n\], but it is not even finitely generated as a ℤ-algebra (our own). Tag 00UR proves that the two tests agree when finite presentation holds.

**Paper or page:** [Algebra, Lemma 10.150.4](https://stacks.math.columbia.edu/tag/031N). It says: “If each R → Sᵢ is formally étale, then S = \\(\\operatorname{colim}<sub>i\\in I</sub> S<sub>i</sub>\\) is formally étale over R”

**Sources:**

- [The Stacks Project, Lemma 10.150.4, Tag 031N](https://stacks.math.columbia.edu/tag/031N)
- [The Stacks Project, Lemma 10.150.3, Tag 00UR](https://stacks.math.columbia.edu/tag/00UR)

### Weakly associated primes detect nonzero modules over every ring

**Remember:** Ask for a minimal prime over an annihilator, and Noetherian is unneeded.

*Rules out counterexamples.* MSC 13C05 (Structure, classification theorems for modules and ideals in commutative rings), 13A15. arXiv math.AC. Level 3: graduate.

**Definition.** A prime 𝔭 is associated to a module M if 𝔭 is the annihilator of one element of M. It is weakly associated if 𝔭 is a minimal prime over the annihilator of one element. Every associated prime is weakly associated.

**Problem.** Over a Noetherian ring, a module is zero exactly when it has no associated primes. Also, the zerodivisors on M form the union of the associated primes. One wants these facts over every ring.

**How the definition helps.** A nonzero element has a proper annihilator, and a proper ideal always has a minimal prime over it. The quoted lemma states this, and a second lemma (Tag 05C3) describes the zerodivisors, for every ring. With associated primes this fails (our own example). Let V be a valuation ring with value group ℚ and M = V/(t), where t has value 1. Each nonzero element of M has as annihilator the ideal of elements of value at least b, for some b &gt; 0. Such an ideal is never prime, so M has no associated prime. A third lemma (Tag 058A) shows that the two notions agree for Noetherian rings, so nothing is lost there.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.66.5](https://stacks.math.columbia.edu/tag/0588), [Stacks Project, Algebra, Lemma 10.66.7](https://stacks.math.columbia.edu/tag/05C3), [Stacks Project, Algebra, Lemma 10.66.9](https://stacks.math.columbia.edu/tag/058A). It says: “Let R be a ring. Let M be an R-module. Then M = (0) ⇔ WeakAss(M) = ∅”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0588 (Algebra, Lemma 10.66.5)](https://stacks.math.columbia.edu/tag/0588)
- [The Stacks Project Authors, The Stacks Project, Tag 05C3 (Algebra, Lemma 10.66.7)](https://stacks.math.columbia.edu/tag/05C3)
- [The Stacks Project Authors, The Stacks Project, Tag 058A (Algebra, Lemma 10.66.9)](https://stacks.math.columbia.edu/tag/058A)

### Duals defined by evaluation and coevaluation survive any change of scalars

**Remember:** A change of scalars carries the two duality identities along.

*True by definition.* MSC 13C10 (Projective and free modules and ideals in commutative rings), 18M05. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A module P has a dual P\* when maps P\* ⊗ P → R and R → P ⊗ P\* exist. These maps must satisfy two triangle identities. The usual dual is the module of linear maps P → R. The nLab proves that a module has such a dual exactly when it is finitely generated projective.

**Problem.** Let P be a finitely generated projective module over a commutative ring R, and let R → S be a ring map. Then S ⊗ Hom(P, R) is isomorphic to Hom(S ⊗ P, S).

**How the definition helps.** Extension of scalars preserves tensor products, so it carries the two maps and their identities over to S ⊗ P. Hence S ⊗ P\* is a dual of S ⊗ P, and duals are unique up to isomorphism. The real work is the nLab theorem that dualizable modules are the finitely generated projective ones. The base-change argument is our own.

**nLab:** [dualizable module](https://ncatlab.org/nlab/show/dualizable+module). It says: “An R-module is dualizable if and only if it is a finitely generated projective module.”

**Sources:** none listed. No primary source with a working link was found.

### Baer's test for injectivity makes divisible modules injective over principal ideal domains

**Remember:** Extending from a principal ideal means dividing the image of its generator.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13F10. arXiv math.AC. Level 3: graduate.

**Definition.** A module Q is injective if every map into Q from a submodule extends to the whole module. Baer's test asks this only for ideals of the ring: every map I → Q extends to R. A module is divisible if multiplication by each nonzero scalar is onto.

**Problem.** Every divisible module over a principal ideal domain is injective.

**How the definition helps.** With Baer's test, only principal ideals need checking, and there the extension is one division. A map f on a nonzero ideal (a) is fixed by f(a) (our own). Choose q with aq = f(a), which divisibility allows, and send 1 to q (our own). The zero ideal needs no work (our own). The work moves to Baer's criterion, which shows that the test agrees with the usual definition. The nLab proves that criterion with Zorn's lemma.

**nLab:** [Baer's criterion](https://ncatlab.org/nlab/show/Baer%27s+criterion). It says: “any morphism g : I → Q in C can be extended to all of R along the inclusion I ↪︎ R.”

**Sources:** none listed. No primary source with a working link was found.

### Baer's test makes direct sums of injective modules injective over Noetherian rings

**Remember:** Finitely many generators send an ideal map into finitely many summands.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13E05. arXiv math.AC. Level 3: graduate.

**Definition.** A module Q is injective if every map into Q from a submodule extends to the whole module. Baer's test asks this only for ideals: every map I → Q extends to R. A ring is Noetherian if every ideal is finitely generated.

**Problem.** Over a commutative Noetherian ring, any direct sum of injective modules is injective.

**How the definition helps.** With Baer's test, only maps from finitely generated ideals need extending, and these meet only finitely many summands. Each generator of the ideal maps into finitely many summands. So the map lands in a finite direct sum, which is a product of injective modules. Each coordinate extends to R, and the extensions combine. The work moves to Baer's criterion, which shows that the test agrees with the usual definition. The nLab gives this proof.

**nLab:** [injective module](https://ncatlab.org/nlab/show/injective+module). It says: “Since R is Noetherian, I is finitely generated as an R-module”

**Sources:** none listed. No primary source with a working link was found.

### Faithful flatness lets exactness be checked after a change of ring

**Remember:** Faithfully flat base change neither creates nor hides exactness.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A module M over R is flat if tensoring with M keeps exact sequences exact. It is faithfully flat if, in addition, a sequence is exact whenever it becomes exact after tensoring with M. Serre introduced flatness in his 1956 paper on algebraic and analytic geometry.

**Problem.** To prove a property of R-modules, such as exactness or injectivity, one often wants to prove it after a change of ring R → S. Examples are completion, or passing to a product of localizations.

**How the definition helps.** The definition says exactly that exactness can be tested after base change, so the reduction is free. The work moves into recognizing faithfully flat maps. A flat map R → S is faithfully flat exactly when every prime of R is the pullback of a prime of S. Field extensions and polynomial rings are faithfully flat over their coefficients. A product of localizations R\[1/tᵢ\] is faithfully flat exactly when the tᵢ generate the unit ideal, so Zariski open covers become a special case (our own). Grothendieck showed that a certain complex built from a faithfully flat map is exact, and this is the start of descent theory (our own).

**Wikipedia:** [Flat module](https://en.wikipedia.org/wiki/Flat_module). It says: “A module is faithfully flat if taking the tensor product with a sequence produces an exact sequence if and only if the original sequence is exact.”

**Sources:**

- [J.-P. Serre, Géométrie algébrique et géométrie analytique, Annales de l'Institut Fourier 6 (1956) 1–42](https://doi.org/10.5802/aif.59)

### Lazard's criterion makes torsion-free modules over principal ideal domains flat

**Remember:** Over a principal ideal domain, finitely generated torsion-free modules are free.

*True by definition. Confidence: medium.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** By Lazard's criterion, a module is flat exactly when it is a filtered colimit of finitely generated free modules. A filtered colimit glues a system in which any two stages map to a common later stage. The usual definition asks that tensoring with the module preserve injective maps.

**Problem.** Every torsion-free module over a principal ideal domain is flat.

**How the definition helps.** The module is the directed union of its finitely generated submodules, which are free by the structure theorem, so it meets Lazard's description (our own). For this direction one needs only that tensor products commute with directed unions (our own). The usual proof instead checks that tensoring with each ideal (a) ≅ R stays injective (our own).

**nLab:** [Lazard's criterion](https://ncatlab.org/nlab/show/Lazard%27s+criterion). It says: “An left R-module is a flat module precisely if it is a filtered colimit of finitely generated free modules.”

**Sources:** none listed. No primary source with a working link was found.

### The maximal-ideal test for faithful flatness makes flat local maps faithfully flat

**Remember:** A local map cannot make the quotient by the source maximal ideal vanish.

*True by definition.* MSC 13C11 (Injective and flat modules and ideals in commutative rings), 13B40, 13H99. arXiv math.AC. Level 3: graduate.

**Definition.** A flat R-module M is one for which tensoring keeps injective maps injective. Call a flat M faithfully flat if M/𝔪M ≠ 0 for every maximal ideal 𝔪 of R. The usual definition says that tensoring with M preserves and detects exact sequences. A local map R → S between local rings sends the maximal ideal of R into that of S.

**Problem.** Every flat local ring map between local rings is faithfully flat.

**How the definition helps.** With this definition, a local source has only one maximal ideal to test. Let 𝔪 be the maximal ideal of R and 𝔫 that of S. The ideal 𝔪S lies inside 𝔫, so S/𝔪S is not zero (our own). So the one test holds and S is faithfully flat. The work moves to Stacks Lemma 10.39.15, which shows that the test agrees with the usual definition.

**Paper or page:** [Algebra, Lemma 10.39.17.](https://stacks.math.columbia.edu/tag/00HR), [Algebra, Lemma 10.39.15.](https://stacks.math.columbia.edu/tag/00HP). It says: “A flat local ring homomorphism of local rings is faithfully flat.”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion with non-zero-divisors gives torsion-free modules over every ring

**Remember:** Torsion means killed by a non-zero-divisor, not by any nonzero element.

*Rules out counterexamples.* MSC 13C12 (Torsion modules and ideals in commutative rings), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** An element r of a ring is regular if it is not a zero divisor. An element m of a module is a torsion element if rm = 0 for some regular r. A module is torsion-free if 0 is its only torsion element.

**Problem.** Over every commutative ring, free modules are torsion-free. So are flat modules, the modules M for which tensoring with M keeps exact sequences exact.

**How the definition helps.** With a regular element in the definition, the ring R itself is torsion-free as a module, so free modules are torsion-free. The older domain-only definition uses any nonzero element instead. Over a ring with zero divisors that definition fails for every nonzero module, as the page says. Suppose ab = 0 with a and b nonzero, and m ≠ 0. Then either bm = 0, or a kills the nonzero element bm (our own). Over an integral domain the two definitions agree. The converse stays false: the ideal (x, y) of k\[x, y\] is torsion-free but not flat.

**Wikipedia:** [Torsion-free module](https://en.wikipedia.org/wiki/Torsion-free_module). It says: “this does not work well over more general rings, for if the ring contains zero-divisors then the only module satisfying this condition is the zero module.”

**Sources:** none listed. No primary source with a working link was found.

### The Ext definition of depth makes depth bounds follow from exact sequences

**Remember:** If both ends have zero Ext in low degrees, the middle does too.

*True by definition.* MSC 13C15 (Dimension theory, depth, related commutative rings (catenary, etc.)), 13D07. arXiv math.AC. Level 3: graduate.

**Definition.** Let R be a Noetherian local ring, one with a single maximal ideal 𝔪 and finitely generated ideals, and let k = R/𝔪. Define the depth of a nonzero finitely generated module M as the least i with Extⁱ(k, M) ≠ 0. Here Ext is the derived functor of Hom, which measures how far Hom is from exact. The usual definition counts the longest sequence in the maximal ideal where each element is a nonzero divisor modulo the earlier ones.

**Problem.** Let 0 → N′ → N → N″ → 0 be a short exact sequence of nonzero finitely generated modules over a Noetherian local ring. Then depth(N) ≥ min{depth(N′), depth(N″)}.

**How the definition helps.** With this definition, the bound is read off from the long exact sequence of Ext. That sequence contains Extⁱ(k, N′) → Extⁱ(k, N) → Extⁱ(k, N″) (our own). Below both outer depths, the outer groups are zero, so the middle one is zero too (our own). The work moves to Stacks Lemma 10.72.5, which shows that the Ext definition agrees with the usual one. With regular sequences, the bound needs a separate induction (our own).

**Paper or page:** [Algebra, Lemma 10.72.6.](https://stacks.math.columbia.edu/tag/00LX), [Algebra, Lemma 10.72.5.](https://stacks.math.columbia.edu/tag/00LW). It says: “depth(N) ≥ min{depth(N′), depth(N″)}”

**Sources:** none listed. No primary source with a working link was found.

### Fitting ideals make 'locally free of rank r' a representable condition

**Remember:** Minors of a presentation detect the rank after any base change.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C40 (Linkage, complete intersections and determinantal ideals), 14F06. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** Take a finitely generated module M with a presentation Rᵐ → Rⁿ → M → 0. Its k-th Fitting ideal is generated by the minors of size n − k of the presentation matrix. It does not depend on the presentation, and it commutes with base change.

**Problem.** For a finite type quasi-coherent sheaf ℱ on a scheme S, find the universal subscheme over which ℱ becomes locally free of rank r. This is a first step towards flattening stratifications.

**How the definition helps.** Fitting ideals are defined by minors, so they commute with base change. So a condition on them is automatically a condition over every T mapping to S. A finite module is locally free of rank r exactly when two conditions hold (our own). Its r-th Fitting ideal is the whole ring, and its (r − 1)-th is zero. The quoted lemma turns this into a locally closed subscheme. A pointwise test by fibre dimension would give the wrong scheme structure (our own example). Over R = k\[ε\]/(ε²), the module R/(ε) has fibre dimension 1 but is not free, and the rank-1 locus is the reduced point only.

**Paper or page:** [Stacks Project, Divisors, Lemma 31.9.6](https://stacks.math.columbia.edu/tag/05P8). It says: “The closed subschemes … defined by the Fitting ideals of ℱ have the following properties … The functor Fᵣ … is representable by the locally closed subscheme Zᵣ₋₁ ∖ Zᵣ of S.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 05P8 (Divisors, Lemma 31.9.6)](https://stacks.math.columbia.edu/tag/05P8)

### Defining Koszul complexes as tensor products makes them iterated cones

**Remember:** Adding one element takes the cone of multiplication by that element.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 18G35. arXiv math.KT. Level 3: graduate.

**Definition.** For ring elements f₁, …, fᵣ, the Koszul complex is a tensor product of two-term complexes R → R. The i-th one is multiplication by fᵢ. The classical definition uses exterior powers of a free module with an alternating-sum differential.

**Problem.** The Koszul complex on f₁, …, fᵣ is the mapping cone of multiplication by fᵣ on the Koszul complex on f₁, …, fᵣ₋₁.

**How the definition helps.** Tensoring any complex with the two-term complex for f is exactly the cone of multiplication by f, so the result is immediate (our own). The work goes into matching the tensor product with the exterior-power definition, including signs (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.28.8](https://stacks.math.columbia.edu/tag/0629). It says: “is isomorphic to the cone of the map of complexes”

**Sources:** none listed. No primary source with a working link was found.

### Koszul differentials defined as derivations give exact complexes for nonzero functionals

**Remember:** Wedging with a vector of value one undoes the differential.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 15A75. arXiv math.AC. Level 3: graduate.

**Definition.** Let φ be a linear functional on V. On the exterior algebra of alternating wedge products, define the Koszul differential d to lower degree by one and equal φ on V. It must also obey a signed product rule, d(a ∧ b) = d(a) ∧ b + (−1)ᵏ a ∧ d(b) when a has degree k. The coordinate definition is an alternating sum that deletes one basis vector at a time.

**Problem.** Let φ be a nonzero linear functional on a vector space over a field. Then its Koszul complex has zero homology in every degree. That is, every x with d(x) = 0 equals d(y) for some y.

**How the definition helps.** With this definition, one short identity shows that every cycle is a boundary. Choose v with φ(v) = 1. The product rule gives d(v ∧ x) + v ∧ d(x) = x for every x. So if d(x) = 0, then x = d(v ∧ x). With the coordinate formula, the same identity needs an index computation. The work moves into showing that a map with these properties exists and agrees with the coordinate formula. These steps are our own, and the nLab gives the coordinate description.

**nLab:** [Koszul complex](https://ncatlab.org/nlab/show/Koszul+complex). It says: “The differential can be obtained from the faces of the obvious Koszul semi-simplicial R-module”

**Sources:** none listed. No primary source with a working link was found.

### Koszul-regular sequences do not depend on order, unlike regular sequences

**Remember:** The Koszul complex forgets the order, so Koszul-regularity does too.

*Rules out counterexamples. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13C40. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A sequence f₁, …, fᵣ is regular if each fᵢ is a nonzerodivisor modulo the earlier ones. It is Koszul-regular if its Koszul complex, a standard finite complex of free modules built from the fᵢ, has no homology except in degree 0. The Koszul complex does not change, up to isomorphism, when the fᵢ are permuted.

**Problem.** Define regular immersions, also called local complete intersections, for all schemes, so that the notion is local and independent of the chosen generators. Regular sequences fail this in general.

**How the definition helps.** The Koszul complex is symmetric in the fᵢ, so Koszul-regularity cannot depend on their order. Regular sequences can (our own, a standard example). In k\[x, y, z\], the sequence x, y(1 − x), z(1 − x) is regular, but y(1 − x), z(1 − x), x is not. The quoted lemma shows that the notions agree on locally Noetherian schemes, so nothing is lost there. Another lemma in the data set (Tag 08SJ) shows that a Koszul-regular kernel I gives the simple cotangent complex I/I²\[1\]. Outside the Noetherian case the four notions can differ, and one must choose (our own).

**Paper or page:** [Stacks Project, Divisors, Lemma 31.20.8](https://stacks.math.columbia.edu/tag/063I), [Stacks Project, Divisors, Lemma 31.20.1](https://stacks.math.columbia.edu/tag/063C), [Stacks Project, Cotangent, Lemma 92.14.2](https://stacks.math.columbia.edu/tag/08SJ). It says: “In particular, on a locally Noetherian scheme the notions of regular, Koszul-regular, H₁-regular, or quasi-regular ideal sheaf all agree.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 063I (Divisors, Lemma 31.20.8)](https://stacks.math.columbia.edu/tag/063I)
- [The Stacks Project Authors, The Stacks Project, Tag 063C (Divisors, Lemma 31.20.1)](https://stacks.math.columbia.edu/tag/063C)
- [The Stacks Project Authors, The Stacks Project, Tag 08SJ (Cotangent, Lemma 92.14.2)](https://stacks.math.columbia.edu/tag/08SJ)

### Perfect complexes are exactly the compact objects of the derived category

**Remember:** A purely categorical property picks out the perfect complexes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A complex of R-modules is perfect if it is quasi-isomorphic to a bounded complex of finite projective modules. An object K of a triangulated category is compact if Hom(K, −) commutes with arbitrary direct sums. D(R) is the derived category of R-modules.

**Problem.** Describe perfect complexes by a property of the derived category alone, without resolutions. Then the notion transfers to settings with few projective objects, such as schemes.

**How the definition helps.** Compactness uses only Hom and direct sums, so it is kept by every equivalence of triangulated categories. The quoted proposition shows that it agrees with perfectness over any ring. On a scheme, finite projective modules do not give global resolutions, but compactness still makes sense (our own). Neeman used this to prove Grothendieck duality with Brown representability (our own summary of the cited paper). There, the compact objects for a quasi-compact separated scheme are the perfect complexes. The hard part there is to show that the perfect complexes generate the whole category (our own).

**Paper or page:** [Stacks Project, More Algebra, Proposition 15.79.3](https://stacks.math.columbia.edu/tag/07LT). It says: “Let R be a ring. For an object K of D(R) the following are equivalent (1) K is perfect, and (2) K is a compact object of D(R).”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 07LT (More Algebra, Proposition 15.79.3)](https://stacks.math.columbia.edu/tag/07LT)
- [A. Neeman, The Grothendieck duality theorem via Bousfield's techniques and Brown representability, J. Amer. Math. Soc. 9 (1996) 205–236](https://doi.org/10.1090/s0894-0347-96-00174-9)

### Pseudo-coherence equals finite cohomology over Noetherian rings and works beyond them

**Remember:** Ask for a finite free resolution, not for finite cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D09 (Derived categories and commutative rings), 13D02, 13E15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A complex of R-modules is pseudo-coherent if it is quasi-isomorphic to a bounded above complex of finite free modules. For a module, this means a resolution by finite free modules, as long as one likes. D⁻(R) is the derived category of complexes with bounded above cohomology.

**Problem.** Over a Noetherian ring, complexes with finitely generated cohomology form a good class for duality and base change. Over a non-Noetherian ring this class is not closed under cones, because kernels of maps between finite modules need not be finite.

**How the definition helps.** Cones and derived base change keep resolutions by finite free modules (our own). So pseudo-coherent complexes form a good class over any ring. Finite cohomology is not kept (our own example). Over k\[x₁, x₂, …\], the map to k that sends every xᵢ to 0 has a kernel that is not finitely generated. The quoted lemma shows that over Noetherian rings the new notion is the old one, so classical results still apply. The idea is Illusie's, from SGA 6 (our own). In particular, over a Noetherian ring a module is pseudo-coherent exactly when it is finite, by the same lemma.

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.65.17](https://stacks.math.columbia.edu/tag/066E). It says: “Let R be a Noetherian ring. Then … (2) A complex of R-modules K is pseudo-coherent if and only if K ∈ D⁻(R) and Hⁱ(K) is a finite R-module for all i.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 066E (More Algebra, Lemma 15.65.17)](https://stacks.math.columbia.edu/tag/066E)

### Defining coherence by kernels gives finitely presented modules finite free resolutions

**Remember:** A finitely presented kernel lets you repeat the same finite free step.

*True by definition. Confidence: medium.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13D02. arXiv math.AC. Level 3: graduate.

**Definition.** A module is finitely presented if it has finitely many generators and finitely many relations. Call a commutative ring coherent if every kernel of a map between finitely presented modules is finitely presented. Equivalently, finitely presented modules are closed under taking kernels and cokernels, so they form an abelian category. The usual definition asks that every finitely generated ideal be finitely presented.

**Problem.** Over a coherent ring, every finitely presented module has a free resolution with finite rank in each degree.

**How the definition helps.** With this definition, each kernel in the resolution is again finitely presented, so the next step is again finite. Map a finite free module onto the given module (our own). Its kernel is finitely presented by the definition, so a finite free module maps onto it (our own). Repeating this step builds the resolution (our own). The work moves to proving that the condition on ideals forces such kernels to be finitely presented (our own). The nLab states a related form, with resolutions by finitely presented projective modules.

**nLab:** [coherent ring](https://ncatlab.org/nlab/show/coherent+ring). It says: “A ring is left coherent iff every finitely presented left module has a resolution by finitely presented projective left modules.”

**Sources:** none listed. No primary source with a working link was found.

### Finite presentation makes flat modules projective and locally free

**Remember:** Flat plus finitely presented equals finite locally free.

*Rules out counterexamples.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 13C11, 13C10. arXiv math.AC. Level 3: graduate.

**Definition.** A module M is finitely presented if it is the cokernel of a map between finite free modules. It is flat if tensoring with M keeps injective maps injective. It is finite projective if it is a direct summand of a finite free module. It is finite locally free if it becomes free of finite rank after inverting suitable elements that generate the unit ideal.

**Problem.** Over a Noetherian local ring, finite flat modules are free. Over a general ring, one wants to know when flat, projective and locally free agree.

**How the definition helps.** Finite presentation lets freeness at one prime spread to a neighbourhood, so a pointwise property becomes a local one (our own summary). A second lemma in the data set (Tag 00NX) lists eight equivalent forms of this. Finite generation alone is not enough (our own example). Let R be a product of infinitely many copies of a field and I the ideal of sequences with finitely many nonzero entries. Every R-module is flat, because R is absolutely flat, but R/I is not projective, since I is not generated by an idempotent. Finite presentation rules out exactly this, because then the ideal I would be finitely generated.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.83.1](https://stacks.math.columbia.edu/tag/058R), [Stacks Project, Algebra, Lemma 10.78.2](https://stacks.math.columbia.edu/tag/00NX). It says: “Let M be an R-module. Then M is finite projective if and only if M is finitely presented and flat.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 058R (Algebra, Lemma 10.83.1)](https://stacks.math.columbia.edu/tag/058R)
- [The Stacks Project Authors, The Stacks Project, Tag 00NX (Algebra, Lemma 10.78.2)](https://stacks.math.columbia.edu/tag/00NX)

### Finitely presented modules are exactly those whose maps commute with filtered colimits

**Remember:** Finitely presented objects meet a filtered colimit at some finite stage.

*True by definition.* MSC 13E15 (Commutative rings and modules of finite generation or presentation; number of generators), 18A30. arXiv math.AC, math.CT. Level 3: graduate.

**Definition.** A module is finitely presented if it is the cokernel of a map between finite free modules. A ring map R → S is of finite presentation if S is a polynomial ring in finitely many variables modulo a finitely generated ideal. A filtered colimit is a colimit over a directed system, such as the union of a chain.

**Problem.** Limit arguments reduce statements about a ring to statements about its finitely generated subrings. They need that maps out of an object into a filtered colimit come from a finite stage.

**How the definition helps.** With finitely many generators and relations, a map into a colimit and its relations are all visible at one finite stage. Finite generation alone is not enough. Then the map of the lemma is injective but can fail to be surjective (our own). In category theory this property defines a compact, or finitely presented, object. The CRing Project states that the compact R-modules are the finitely presented ones. So the colimit statement becomes true by definition, and the work moves into the quoted lemma showing that the two notions agree. A second lemma (Tag 00QO) does the same for algebras of finite presentation.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.11.4](https://stacks.math.columbia.edu/tag/0G8P), [Stacks Project, Algebra, Lemma 10.127.3](https://stacks.math.columbia.edu/tag/00QO), [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “Let N be an R-module. The following are equivalent (1) N is a finitely presented R-module, (2) for any filtered colimit M = colim Mᵢ of R-modules the map colim Hom(N, Mᵢ) → Hom(N, M) is bijective.”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 0G8P (Algebra, Lemma 10.11.4)](https://stacks.math.columbia.edu/tag/0G8P)
- [The Stacks Project Authors, The Stacks Project, Tag 00QO (Algebra, Lemma 10.127.3)](https://stacks.math.columbia.edu/tag/00QO)
- [The CRing Project, Various, Proposition 3.3](https://math.uchicago.edu/~amathew/CRing.pdf)

### Being Dedekind is a local property and survives integral closure

**Remember:** Principal ideal domains are fragile; Dedekind domains are robust.

*Makes the theorem clean to state or prove.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13B22. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A Dedekind domain is a Noetherian integral domain that is integrally closed in its fraction field and in which every nonzero prime ideal is maximal. Here integrally closed means that every fraction that is a root of a monic polynomial over the ring lies in the ring.

**Problem.** Let R be a Dedekind domain with fraction field K, and let L be a finite extension of K. Then the integral closure of R in L is again a Dedekind domain. Also, a Noetherian domain is Dedekind exactly when all its localizations at maximal ideals are.

**How the definition helps.** The defining conditions pass to integral closures in finite extensions and to localizations, so the class is closed under the operations of number theory. The integral closure step uses the Krull–Akizuki theorem. Starting from ℤ, this shows at once that every ring of integers of a number field is Dedekind. Principal ideal domains fail the first property: ℤ is one, but its integral closure ℤ\[√−5\] in ℚ(√−5) is not (our own). So number theory takes Dedekind domains as its basic objects and measures the gap to principal ideal domains with the ideal class group.

**Wikipedia:** [Dedekind domain](https://en.wikipedia.org/wiki/Dedekind_domain). It says: “By the 20th century, algebraists and number theorists had come to realize that the condition of being a PID is rather delicate, whereas the condition of being a Dedekind domain is quite robust.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Prüfer domains by flatness makes tensor products of torsion-free modules torsion-free

**Remember:** Tensoring with a flat module keeps multiplication by a scalar injective.

*True by definition.* MSC 13F05 (Dedekind, Prüfer, Krull and Mori rings and their generalizations), 13C11. arXiv math.AC. Level 3: graduate.

**Definition.** A module is torsion-free if multiplication by each nonzero scalar is injective. A module is flat if tensoring with it keeps injective maps injective. Define a Prüfer domain as an integral domain over which every torsion-free module is flat. The usual definition asks that each nonzero finitely generated ideal I be invertible, meaning IJ = R for some fractional ideal J.

**Problem.** Over a Prüfer domain, the tensor product of two torsion-free modules is torsion-free.

**How the definition helps.** With this definition, one factor is flat, so tensoring keeps multiplication by a scalar injective. Let M and N be torsion-free, and let a be a nonzero scalar (our own). Multiplication by a on N is injective (our own). Tensoring with the flat module M keeps it injective, and the result is multiplication by a on M ⊗ N (our own). The work moves to proving that this definition agrees with the usual one. Wikipedia lists both conditions, and the tensor property, among its equivalent conditions.

**Wikipedia:** [Prüfer domain](https://en.wikipedia.org/wiki/Pr%C3%BCfer_domain). It says: “If M and N are torsion-free R-modules then their tensor product M ⊗ᵣ N is torsion-free.”

**Sources:** none listed. No primary source with a working link was found.

### Fractional exponents give every branch of an algebraic curve a series

**Remember:** Allow fractional powers of x, and every polynomial equation in y has roots.

*Makes the theorem clean to state or prove.* MSC 13F25 (Formal power series rings), 32S05, 30B10. arXiv math.CV, math.AG. Level 3: graduate.

**Definition.** A Puiseux series in x is a series Σ cₖ times x to the power k/n, over integers k ≥ k₀. Here n is one fixed positive integer. So it allows negative and fractional exponents, as long as the denominators are bounded. With the usual sum and product, these series form a field.

**Problem.** Newton–Puiseux theorem: take a polynomial equation P(x, y) = 0 with complex coefficients. Every solution y near x = 0 is a Puiseux series in x that converges near 0. In modern terms, Puiseux series over an algebraically closed field of characteristic 0 form an algebraically closed field.

**How the definition helps.** Branch points need roots of x, and fractional exponents supply them, so every branch becomes an ordinary series in an n-th root of x. Ordinary power series cannot do it. The equation y² = x has the solutions ±√x, which are not power series in x (our own example). Bounded denominators keep the set a field, because each series lies in Laurent series in one n-th root of x. The result needs characteristic 0. In characteristic p, the equation yᵖ − y = 1/x has no Puiseux series root (our own). The proof uses the Newton polygon, which finds the leading exponent of each root.

**Wikipedia:** [Puiseux series](https://en.wikipedia.org/wiki/Puiseux_series). It says: “Using modern terminology, Puiseux's theorem asserts that the set of Puiseux series over an algebraically closed field of characteristic 0 is itself an algebraically closed field, called the field of Puiseux series.”

**Sources:** none listed. No primary source with a working link was found.

### Left-finite support makes Novikov series closed under multiplication

**Remember:** Below any bound there are finitely many terms, so each product coefficient is finite.

*Rules out counterexamples. Confidence: medium.* MSC 13F25 (Formal power series rings), 12J25, 16W60. arXiv math.AC, math.SG. Level 3: graduate.

**Definition.** Let k be a commutative ring and G a linearly ordered abelian group. The Novikov ring is the set of functions f : G → k such that, for each y ∈ G, only finitely many x &lt; y have f(x) ≠ 0. Addition is pointwise. Multiplication is (f·g)(z) = Σ f(x)g(y), the sum over all x and y with x + y = z.

**Problem.** We want a ring of formal series Σ f(x)tˣ with real or other non-integer exponents, in which the product is well defined. When k is a field, this ring should be a field.

**How the definition helps.** Left-finiteness makes each coefficient of a product a finite sum. Without a support condition, the sum for (f·g)(z) can have infinitely many non-zero terms. An example is two series whose support is all of ℤ ⊂ ℝ. With left-finiteness, let y₀ be the least exponent of g. Then only the finitely many x ≤ z − y₀ in the support of f can contribute. The nLab notes that the argument needs G to be totally ordered and a group, and fails for partially ordered monoids. The page states, but does not prove, that a field k gives a field.

**nLab:** [Novikov field](https://ncatlab.org/nlab/show/Novikov+field). It says: “Left-finiteness of the support of f and g implies that the above sum is finite.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing any ordered value group gives every valuation ring a valuation

**Remember:** Let the values be any ordered group, and every valuation ring has one.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A valuation ring of a field K is a subring D such that, for each nonzero x in K, x or 1/x is in D. A Krull valuation sends K× to a totally ordered abelian group Γ, not only to the real numbers.

**Problem.** Every valuation ring D comes from a valuation, with D the set of elements of value at least 0.

**How the definition helps.** With general ordered groups allowed, the value group can be taken as K×/D×, ordered by divisibility, so the theorem is almost a definition. The page credits this theorem to Krull. If values had to be real numbers, the theorem would fail. Valuation rings of Krull dimension 2 can have the value group ℤ × ℤ in lexicographic order (our own). That group does not embed in ℝ as an ordered group (our own). The page says that height one is exactly the case of subgroups of ℝ. What stays hard is the theory of value groups and the subgroups that match prime ideals.

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “take Γ to be the quotient K×/D× of the unit group of K by the unit group of D, and take ν to be the natural projection.”

**Sources:**

- [Wolfgang Krull, Allgemeine Bewertungstheorie, Journal für die reine und angewandte Mathematik 167 (1932)](https://doi.org/10.1515/crll.1932.167.160)

### The divisibility test makes quotients of valuation rings by primes valuation rings

**Remember:** Test a fraction before reducing it modulo the prime ideal.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** Define a valuation ring as a domain in which, of any two elements, one divides the other. This is the same as asking that x or 1/x lies in the ring for each nonzero fraction x. The usual definition takes the elements of a field where a valuation is nonnegative.

**Problem.** The quotient of a valuation ring by a prime ideal is a valuation ring.

**How the definition helps.** With the divisibility test, the property passes to every quotient that is a domain (our own). Lift two elements of A/𝔭 to A, where one divides the other, and reduce (our own). The quotient is a domain because 𝔭 is prime. With the value-based definition, one would first have to build a valuation for the quotient (our own).

**Paper or page:** [Lemma 10.50.9.](https://stacks.math.columbia.edu/tag/088Y). It says: “For any prime ideal 𝔭 ⊂ A the quotient A/𝔭 is a valuation ring.”

**Sources:** none listed. No primary source with a working link was found.

### The inverse test makes valuation ring ideals linearly ordered

**Remember:** One of two nonzero elements divides the other.

*True by definition.* MSC 13F30 (Valuation rings), 13A18. arXiv math.AC. Level 3: graduate.

**Definition.** A subring A of a field K is a valuation ring of K if it contains x or 1/x for every nonzero x in K. Stacks instead starts with a local subring, one with a single maximal ideal, that is maximal for domination. A local ring dominates a smaller one if its maximal ideal meets the smaller ring in that ring’s maximal ideal.

**Problem.** In a valuation ring, any two ideals are comparable: one contains the other.

**How the definition helps.** The inverse test compares ideals by comparing the quotient of two elements. Suppose a lies in I but not in J, and take a nonzero b in J. If a/b lies in A, then a lies in J, a contradiction. So b/a lies in A, which puts b in I. Thus J is contained in I. This argument is our own. The work behind the choice is the comparison with maximality for domination (Tags 00IB and 052K).

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “Another way to characterize the valuation rings of a field F is that valuation rings D of F have F as their field of fractions, and their ideals are totally ordered by inclusion”

**Paper or page:** [More Algebra, Lemma 15.125.2](https://stacks.math.columbia.edu/tag/0ASN), [Algebra, Lemma 10.50.4](https://stacks.math.columbia.edu/tag/00IB), [Algebra, Lemma 10.50.5](https://stacks.math.columbia.edu/tag/052K). It says: “Let A be a valuation ring with maximal ideal 𝔪 and fraction field K. Let x ∈ K. Then either x ∈ A or x⁻¹ ∈ A or both.”

**Sources:**

- [The Stacks Project, Lemma 10.50.4, Tag 00IB](https://stacks.math.columbia.edu/tag/00IB)
- [The Stacks Project, Lemma 10.50.5, Tag 052K](https://stacks.math.columbia.edu/tag/052K)
- [The Stacks Project, Lemma 15.125.2, Tag 0ASN](https://stacks.math.columbia.edu/tag/0ASN)

### The x-or-1/x test makes composite valuation rings valuation rings

**Remember:** Test an element first, then test its residue if it is a unit.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** Define a valuation ring as a domain A such that x or 1/x lies in A for each nonzero x in its fraction field. Let A′ be a valuation ring whose residue field, the quotient by its maximal ideal, is K. Let A be a valuation ring with fraction field K. The composite ring C is the set of elements of A′ whose residues lie in A.

**Problem.** The composite ring C is a valuation ring.

**How the definition helps.** With the x-or-1/x test, one checks C one element at a time (our own). Take x nonzero in the fraction field of A′, so x or 1/x lies in A′ (our own). If that element is not a unit of A′, its residue is zero, which lies in A (our own). If x is a unit of A′, the residues of x and 1/x are inverse, so one of them lies in A (our own). The value-based definition would first need the combined value group (our own).

**Paper or page:** [Lemma 10.50.10.](https://stacks.math.columbia.edu/tag/088Z). It says: “Let A′ be a valuation ring with residue field K. Let A be a valuation ring with fraction field K.”

**Sources:** none listed. No primary source with a working link was found.

### The x-or-1/x test survives directed limits of valuation rings

**Remember:** Test each fraction at the stage that contains its numerator and denominator.

*True by definition.* MSC 13F30 (Valuation rings), 12J20. arXiv math.AC. Level 3: graduate.

**Definition.** Define a valuation ring as a domain A such that x or 1/x lies in A for each nonzero x in its fraction field. Equivalently, of any two elements of A, one divides the other. Another definition takes the elements of a field where a valuation is nonnegative. A valuation is a map to an ordered group that turns products into sums.

**Problem.** The direct limit of a directed system of valuation rings is a valuation ring. In a directed system, any two stages map into a common later stage.

**How the definition helps.** With the divisibility test, each check involves two elements, and any two elements already live at one stage (our own). At that stage one divides the other, so the same holds in the limit (our own). The limit is a domain, since a product that is zero in the limit is zero at some stage (our own). With the valuation definition, one would first have to build a value group for the limit (our own).

**Paper or page:** [Lemma 10.50.6.](https://stacks.math.columbia.edu/tag/0AS4). It says: “Let I be a directed set. Let (Aᵢ, φᵢⱼ) be a system of valuation rings over I.”

**Sources:** none listed. No primary source with a working link was found.

### Valuation rings, holding x or 1/x, capture integral closure

**Remember:** Of x and 1/x, a valuation ring always holds one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13F30 (Valuation rings), 13B22. arXiv math.AC, math.NT. Level 3: graduate.

**Definition.** A valuation ring of a field K is a subring D such that, for every nonzero x in K, x or 1/x lies in D.

**Problem.** Describe the integral closure of a domain A, the set of fractions that are roots of monic polynomials over A. Show that it is the intersection of all valuation rings of K that contain A.

**How the definition helps.** The condition that x or 1/x lies in D makes it easy to show that valuation rings are integrally closed, as follows (our own). If x is integral over D but not in D, then 1/x is in D. Divide the monic equation of x by a power of x. This writes x as a polynomial in 1/x with coefficients in D, so x is in D after all. The other inclusion is the real work. For each x not integral over A, Zorn's lemma gives a valuation ring that contains A but not x. Krull proved that every such ring comes from a valuation with values in an ordered group.

**Wikipedia:** [Valuation ring](https://en.wikipedia.org/wiki/Valuation_ring). It says: “In fact, the integral closure of an integral domain A in the field of fractions K of A is the intersection of all valuation rings of K containing A.”

**Sources:**

- [W. Krull, Beiträge zur Arithmetik kommutativer Integritätsbereiche VI, Mathematische Zeitschrift 45 (1939) 1–19](https://doi.org/10.1007/BF01580269)

### Ghost coordinates make big Witt vectors over rational algebras a ring

**Remember:** In ghost coordinates, all operations are coordinate by coordinate.

*True by definition.* MSC 13F35 (Witt vectors and related rings). arXiv math.AC. Level 3: graduate.

**Definition.** Big Witt vectors over a ring A are sequences (a₁, a₂, …) of elements of A. The nth ghost coordinate wₙ is a fixed integer polynomial in a₁, …, aₙ whose last term is n·aₙ. Over a ℚ-algebra, define addition and multiplication to act on ghost coordinates entry by entry. The usual definition gives explicit integer polynomials for the operations in the original coordinates.

**Problem.** Big Witt vectors of a rational algebra satisfy the ring axioms.

**How the definition helps.** With the ghost definition, the ring axioms come from the ring of sequences with entrywise operations. Over ℚ the ghost map is a bijection, since one solves for each aₙ in turn by dividing by n (our own). The nLab extends this to rings without additive torsion by embedding A in A ⊗ ℚ. For general rings, the work moves to the integer polynomials and the identities between them (our own).

**nLab:** [ring of Witt vectors](https://ncatlab.org/nlab/show/ring+of+Witt+vectors). It says: “the addition and multiplication is taken to component-wise addition and multiplication, so since this is the standard ring structure we know W(A) is a ring.”

**Sources:** none listed. No primary source with a working link was found.

### Excellent rings shut out Nagata's badly behaved Noetherian rings

**Remember:** Excellent rings are the Noetherian rings that behave like geometry expects.

*Rules out counterexamples.* MSC 13F40 (Excellent rings). arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian ring is excellent if three conditions hold. First, the map from each local ring to its completion is regular, a technical smoothness condition. Second, in every finitely generated algebra over it, the regular points form an open set. Third, in every finitely generated algebra, all maximal chains of primes between two given primes have the same length.

**Problem.** Good properties should pass from a local ring to its completion and to finitely generated algebras. A normal (integrally closed) local ring should have a normal completion. The integral closure of a domain should be a finitely generated module, and the singular points should form a closed set.

**How the definition helps.** Grothendieck in 1965 chose conditions that rule out the known bad Noetherian rings. The open regular set holds by definition, and other good properties follow as theorems, such as finite integral closures. One excluded ring is a normal Noetherian local ring whose completion is not normal. Another is a one-dimensional Noetherian domain whose integral closure is not finitely generated and whose singular points are not closed. A third is Nagata's local ring whose chains of primes have equal length, but not after passing to a finitely generated algebra. The work moves into showing that common rings are excellent: fields, ℤ, complete Noetherian local rings, and their finitely generated algebras and localizations. Quasi-excellent rings, those meeting the first two conditions, are conjectured to be where singularities can be resolved, that is, removed by a suitable birational map.

**Wikipedia:** [Excellent ring](https://en.wikipedia.org/wiki/Excellent_ring), [Nagata ring](https://en.wikipedia.org/wiki/Nagata_ring), [Catenary ring](https://en.wikipedia.org/wiki/Catenary_ring). It says: “At one time it seemed that the class of Noetherian rings might be an answer to this problem, but Masayoshi Nagata and others found several strange counterexamples showing that in general Noetherian rings need not be well-behaved”

**Sources:**

- [A. Grothendieck, Éléments de géométrie algébrique IV, seconde partie, Publications Mathématiques de l'IHÉS 24 (1965)](https://doi.org/10.1007/BF02684322)

### Finite global dimension makes localizations of regular local rings regular

**Remember:** Serre's homological test turns a hard localization problem into a short check.

*True by definition.* MSC 13H05 (Regular local rings), 13D05. arXiv math.AC. Level 3: graduate.

**Definition.** The Krull dimension of a ring is the length of its longest chain of prime ideals. A Noetherian local ring is regular if its maximal ideal has as many generators as this dimension. Serre proved that this is the same as finite global dimension. So every module has a finite projective resolution: a finite exact sequence of projective modules that ends in the module.

**Problem.** Geometry suggests that a variety smooth at a point is smooth at nearby points. In algebra: the localization of a regular local ring at a prime ideal should be regular. Before homological methods this was unsolved.

**How the definition helps.** With Serre's homological description, the result needs only that localization keeps finite projective resolutions finite. Localization is exact and sends projective modules to projective modules, so this is short (our own). The work moves into Serre's theorem that the two definitions agree. The same homological methods let Auslander and Buchsbaum prove that every regular local ring is a unique factorization domain. Serre also used finite global dimension to define regular rings that are not local.

**Wikipedia:** [Regular local ring](https://en.wikipedia.org/wiki/Regular_local_ring), [Global dimension](https://en.wikipedia.org/wiki/Global_dimension). It says: “It is easy to show that the property of having finite global dimension is preserved under localization, and consequently that localizations of regular local rings at prime ideals are again regular.”

**Sources:**

- [M. Auslander and D. A. Buchsbaum, Homological dimension in local rings, Transactions of the American Mathematical Society 85 (1957) 390–405](https://doi.org/10.1090/S0002-9947-1957-0086822-7)

### Regular local rings make smoothness independent of the embedding

**Remember:** Smoothness belongs to the local ring, not to the equations.

*True by definition.* MSC 13H05 (Regular local rings), 14B05. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A Noetherian local ring is regular if its maximal ideal is generated by as many elements as its Krull dimension. The local ring of a variety at a point is made from the functions defined near the point.

**Problem.** The Jacobian criterion defines a nonsingular point by the rank of a matrix of partial derivatives of chosen equations. It is not clear that the answer does not depend on the equations or on the embedding in affine space.

**How the definition helps.** The local ring at a point depends only on the variety near the point, so a property of it cannot depend on equations. Zariski proved that, over a perfect field, a point is nonsingular by the Jacobian criterion exactly when its local ring is regular. So independence of the embedding is free once smoothness means regularity; the work moves into Zariski's theorem. Zariski observed that the equivalence can fail over fields that are not perfect. Krull had defined regular local rings in 1937, but Zariski's work made them important.

**Wikipedia:** [Regular local ring](https://en.wikipedia.org/wiki/Regular_local_ring). It says: “This implies that smoothness is an intrinsic property of the variety, in other words it does not depend on where or how the variety is embedded in affine space.”

**Sources:**

- [O. Zariski, The concept of a simple point of an abstract algebraic variety, Transactions of the American Mathematical Society 62 (1947) 1–52](https://doi.org/10.1090/s0002-9947-1947-0021694-1)
- [W. Krull, Beiträge zur Arithmetik kommutativer Integritätsbereiche III, Mathematische Zeitschrift 42 (1937) 745–766](https://doi.org/10.1007/BF01160110)

### Testing every prime makes Cohen–Macaulay rings stay Cohen–Macaulay after localization

**Remember:** Each prime localization of the new ring was already a test of the original.

*True by definition.* MSC 13H10 (Special types (Cohen-Macaulay, Gorenstein, Buchsbaum, etc.)), 13B30. arXiv math.AC. Level 3: graduate.

**Definition.** A Noetherian local ring is Cohen–Macaulay if its depth equals its dimension, the maximum length of a chain of prime ideals. Depth is the maximum length of a sequence in its maximal ideal whose terms are not zero divisors modulo the preceding terms. A Noetherian ring is Cohen–Macaulay if its localization at every prime has this property. The alternative tests only maximal ideals.

**Problem.** If R is Cohen–Macaulay and S is a multiplicatively closed subset, then S⁻¹R is Cohen–Macaulay.

**How the definition helps.** Testing every prime makes the claim follow from how localizations compose. Each prime of S⁻¹R comes from a prime of R disjoint from S. Localizing at that prime of S⁻¹R gives the same local ring as localizing R at the corresponding prime. This is our own account of the argument. Starting with tests at maximal ideals alone, one needs the theorem that Cohen–Macaulay local rings stay Cohen–Macaulay at every prime. Tag 00NB proves this and thus shows why the two definitions agree.

**Paper or page:** [Homological Local, Theorem 4.18](https://math.uchicago.edu/~amathew/CRing.pdf), [Algebra, Lemma 10.104.5](https://stacks.math.columbia.edu/tag/00NB). It says: “That is, its localizations at any prime—or, though we haven't proved yet, at any maximal ideal—are.”

**Sources:**

- [The Stacks Project, Lemma 10.104.5, Tag 00NB](https://stacks.math.columbia.edu/tag/00NB)

### Early local rings had to be Noetherian, which keeps Krull's intersection theorem

**Remember:** Noetherian local rings have no nonzero element in every power of m.

*Rules out counterexamples. Confidence: medium.* MSC 13H99 (Local rings and semilocal rings), 13J10. arXiv math.AC. Level 3: graduate.

**Definition.** Krull introduced local rings in 1938, and many authors until about 1960 required them to be Noetherian: every ideal is finitely generated. A local ring without this condition was called quasi-local.

**Problem.** Krull's intersection theorem: in a commutative Noetherian local ring with maximal ideal m, the intersection of all powers mⁿ is 0. So the powers of m separate the elements of the ring, and the ring embeds in its completion.

**How the definition helps.** Building the Noetherian condition into the definition made Krull's theorem hold for every commutative local ring, with no extra hypothesis (our own). The Noetherian condition gives the Artin–Rees lemma, and together with Nakayama's lemma this shows that the intersection is 0. The page shows that the condition is needed. Take the ring of germs at 0 of smooth real functions, a local ring with maximal ideal m = (x). The nonzero function e to the power −1/x² lies in every power mⁿ, because it is still smooth after division by xⁿ. This ring is local but not Noetherian. The page, like most modern texts, drops the condition from the definition and states it as a hypothesis of the theorem.

**Wikipedia:** [Local ring](https://en.wikipedia.org/wiki/Local_ring). It says: “Before about 1960 many authors required that a local ring be (left and right) Noetherian, and (possibly non-Noetherian) local rings were called quasi-local rings.”

**Sources:**

- [W. Krull, Dimensionstheorie in Stellenringen, Journal für die reine und angewandte Mathematik 179 (1938) 204](https://doi.org/10.1515/crll.1938.179.204)

### Excluding the zero ring makes local rings those with one closed point

**Remember:** Local means exactly one closed point, and the empty spectrum has none.

*Rules out counterexamples.* MSC 13H99 (Local rings and semilocal rings), 14A15. arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A local ring is a ring with exactly one maximal ideal. The zero ring, where 0 = 1, has no maximal ideal, so it is not local.

**Problem.** Local rings should be the rings whose spectrum has exactly one closed point. They should also be the rings in which, for each x, x or 1 − x is a unit.

**How the definition helps.** The definition 'exactly one maximal ideal' excludes the zero ring at once, and then the descriptions agree. The zero ring passes the element test, because there every element, even 0, is a unit. But its spectrum is empty and it has no maximal ideal. So the element test needs the extra clause 'R is not the zero ring', as the quoted lemma shows. The proof of the equivalence is then short: the non-units form the unique maximal ideal (our own summary).

**Paper or page:** [Stacks Project, Algebra, Lemma 10.18.3](https://stacks.math.columbia.edu/tag/00E9). It says: “The following are equivalent: (1) R is a local ring, (2) Spec(R) has exactly one closed point, … (4) R is not the zero ring and for every x ∈ R either x or 1 − x is invertible”

**Sources:**

- [The Stacks Project Authors, The Stacks Project, Tag 00E9 (Algebra, Lemma 10.18.3)](https://stacks.math.columbia.edu/tag/00E9)

### Residue sequences show p-adic integers modulo pⁿ are integers modulo pⁿ

**Remember:** Reduction modulo a power is just reading that term.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 11S99. arXiv math.NT, math.AC. Level 3: graduate.

**Definition.** Define a p-adic integer as a sequence (x₁, x₂, …) in which xₖ is an integer modulo pᵏ. Each term must reduce to the previous term modulo the smaller power. The alternative completes ℤ for the p-adic distance, in which a number is small when a high power of p divides it.

**Problem.** Write ℤₚ for the ring of p-adic integers. For each n ≥ 1, the quotient ℤₚ/pⁿℤₚ is the ring ℤ/pⁿℤ of integers modulo pⁿ.

**How the definition helps.** With residue sequences, the map to ℤ/pⁿℤ is just reading the n-th term (our own). It is onto, because an ordinary integer gives the sequence of its residues (our own). Its kernel consists of the sequences whose n-th term is zero (our own). For such a sequence, each term xₙ₊ₖ is divisible by pⁿ, and dividing gives a residue yₖ modulo pᵏ (our own). These yₖ form a p-adic integer y with x = pⁿy, so the kernel is pⁿℤₚ (our own). The nLab describes ℤₚ as this limit of rings. The work moves to proving that the residue model agrees with the metric completion (our own).

**nLab:** [p-adic integer](https://ncatlab.org/nlab/show/p-adic+integer). It says: “More abstractly, it is the limit lim ℤ/(pⁿ), in the category of (unital) rings”

**Sources:** none listed. No primary source with a working link was found.

### Henselian as finite algebras split makes finite local extensions henselian

**Remember:** An algebra finite over a finite algebra is finite over the original ring.

*True by definition.* MSC 13J15 (Henselian rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A local ring has exactly one maximal ideal. Call a local ring R henselian if every finite R-algebra is a finite product of local rings. The usual definition asks that each simple root of a monic polynomial modulo the maximal ideal lifts to a root in R. Stacks Lemma 10.153.3 proves that the two definitions agree.

**Problem.** If R is a henselian local ring and S is a finite R-algebra that is a local ring, then S is henselian.

**How the definition helps.** With the splitting definition, the new ring passes the test because the old ring does (our own). A finite algebra over S is also finite over R, so it is a finite product of local rings (our own). The work moves to Stacks Lemma 10.153.3, which proves that the splitting test agrees with root lifting.

**Paper or page:** [Lemma 10.153.4.](https://stacks.math.columbia.edu/tag/04GH). It says: “If R → S is a finite ring map and S is local, then S is a henselian local ring and R → S is a (finite) local ring map.”

**Sources:** none listed. No primary source with a working link was found.

### Henselian rings are defined as the local rings where Hensel's lemma holds

**Remember:** Henselian rings are where factorizations modulo m lift.

*True by definition.* MSC 13J15 (Henselian rings), 13B40. arXiv math.AC. Level 3: graduate.

**Definition.** A commutative local ring R with maximal ideal m is Henselian if this holds for every monic polynomial over R. Every factorization of its image over R/m into coprime monic factors lifts to a factorization over R.

**Problem.** Hensel's lemma lifts roots and factorizations from the residue field to the ring, for example from ℤ/p to the p-adic integers. One wants the class of local rings where this works, and a smallest such ring built from a given local ring.

**How the definition helps.** Hensel's lemma becomes true by definition, and the work moves into showing which rings are Henselian. The page lists complete Hausdorff local rings, such as the p-adic integers and power series rings over a field. A local ring is Henselian exactly when every finite ring extension of it is a product of local rings. A valued field is Henselian exactly when its valuation extends uniquely to every finite extension. Nagata's Henselization is the universal Henselian ring over a local ring A. It is an algebraic substitute for the completion, with the same completion and residue field as A.

**Wikipedia:** [Henselian ring](https://en.wikipedia.org/wiki/Henselian_ring). It says: “a Henselian ring (or Hensel ring) is a local ring in which Hensel's lemma holds.”

**Sources:**

- [G. Azumaya, On maximally central algebras, Nagoya Mathematical Journal 2 (1951) 119–150](https://doi.org/10.1017/s0027763000010114)
- [M. Nagata, On the theory of Henselian rings, Nagoya Mathematical Journal 5 (1953) 45–57](https://doi.org/10.1017/s0027763000015439)

### Defining differentials through derivations gives their transitivity sequence at once

**Remember:** To vanish on the middle ring, kill all differentials coming from it.

*True by definition. Confidence: medium.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A derivation from a B-algebra C to a C-module N is an additive map that obeys the product rule and vanishes on B. Define the module of differentials Ω(C/B) by its universal property: C-module maps Ω(C/B) → N match such derivations. Another definition takes J/J², where J is the kernel of multiplication C ⊗ C → C over B.

**Problem.** Let A → B → C be ring maps. Then Ω(C/B) is Ω(C/A) divided by the C-submodule generated by the differentials db of elements b of B.

**How the definition helps.** With this definition, both modules have the same maps out, so they are isomorphic. A map out of the quotient is a map out of Ω(C/A) that kills every db (our own). That is an A-derivation of C that vanishes on B, which is a B-derivation (our own). This gives the exact sequence in the Stacks quote (our own). The work moves to proving that the universal module exists, for example as J/J² (our own).

**Paper or page:** [Algebra, Lemma 10.131.7.](https://stacks.math.columbia.edu/tag/00RS). It says: “Let A → B → C be ring maps. Then there is a canonical exact sequence C ⊗ʙ Ω(B/A) → Ω(C/A) → Ω(C/B) → 0 of C-modules.”

**Sources:** none listed. No primary source with a working link was found.

### Defining differentials through derivations makes them commute with base change

**Remember:** A derivation on the changed algebra is fixed by its values on the original.

*True by definition.* MSC 13N05 (Modules of differentials). arXiv math.AC, math.AG. Level 3: graduate.

**Definition.** A derivation from an R-algebra S to an S-module N is an additive map D that vanishes on R. It obeys the product rule D(ab) = aD(b) + bD(a). Define the module of differentials Ω(S/R) by its universal property: S-module maps Ω(S/R) → N match derivations S → N. Another definition takes J/J², where J is the kernel of the multiplication map S ⊗ S → S.

**Problem.** Let R → R′ and R → S be ring maps, and let S′ be the tensor product S ⊗ R′ over R. Then Ω(S/R) ⊗ R′ is isomorphic to Ω(S′/R′).

**How the definition helps.** With this definition, both modules have the same maps out, so the universal property makes them isomorphic. An R′-derivation S′ → N is fixed by its restriction to S, which is an R-derivation (our own). Conversely, an R-derivation D on S extends by D(s ⊗ r′) = r′D(s) (our own). So both modules represent R-derivations S → N, for every S′-module N (our own). The work moves to proving that the universal module exists, for example as J/J² in Stacks Lemma 10.131.13.

**Paper or page:** [Algebra, Lemma 10.131.12.](https://stacks.math.columbia.edu/tag/00RV), [Algebra, Lemma 10.131.13.](https://stacks.math.columbia.edu/tag/00RW). It says: “Then the canonical map defined above induces an isomorphism Ω(S/R) ⊗ᵣ R′ = Ω(S′/R′).”

**Sources:** none listed. No primary source with a working link was found.

### Kähler C∞-differentials of smooth functions are exactly the smooth 1-forms

**Remember:** Require the chain rule for all smooth functions, not just sums and products.

*Rules out counterexamples.* MSC 13N05 (Modules of differentials), 58A10, 58A40. arXiv math.DG, math.AC. Level 3: graduate.

**Definition.** A C∞-ring is a ring in which you can apply every smooth function f on ℝⁿ, not only polynomials; C∞(M) is the main example. A C∞-derivation of a C∞-ring A into an A-module M is a map d : A → M such that d(f(a₁,…,aₙ)) = Σᵢ (∂f/∂xᵢ)(a₁,…,aₙ) daᵢ for every smooth function f on ℝⁿ. This formula is the chain rule. The Kähler C∞-differentials are the universal target of such a derivation.

**Problem.** The module of Kähler differentials of C∞(M) should be the module of smooth 1-forms on M, that is, the sections of the cotangent bundle.

**How the definition helps.** The chain rule for all smooth f fixes the derivative of non-polynomial functions such as exp. If you treat C∞(M) only as a commutative ring, its ordinary Kähler differentials are far too big. For M = ℝ one has d(exp(x)) ≠ exp(x) dx, because the Leibniz rule reaches only finite polynomial expressions. The known proof of this inequality uses the axiom of choice. Asking for the chain rule for all smooth f forces d(exp(x)) = exp(x) dx. With this definition, Dubuc and Kock proved that the Kähler C∞-differentials of C∞(M) are exactly the smooth 1-forms. That proof is a real theorem, not a tautology.

**nLab:** [Kähler C<sup>∞</sup>-differentials of smooth functions are differential 1-forms](https://ncatlab.org/nlab/show/K%C3%A4hler+C%5E%E2%88%9E-differentials+of+smooth+functions+are+differential+1-forms), [Kähler differential](https://ncatlab.org/nlab/show/K%C3%A4hler+differential). It says: “However, this is not a defect in the conceptual idea itself, but merely a failure to use the correct formalism.”

**Sources:**

- [E. J. Dubuc, A. Kock, On 1-form classifiers, Communications in Algebra 12 (1984) 1471–1531](https://doi.org/10.1080/00927878408823064)

### A Newton polygon formalism shows perfectoid Tate algebras have uncountable Krull dimension

**Remember:** Keep the convex data, change the ring.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A18 (Valuations and their generalizations for commutative rings), 14G22, 13C15. arXiv math.NT, math.AC. Level 4: research.

**Definition.** The Newton polygon of a power series records the valuations of its coefficients as a convex function. A Newton polygon formalism on a ring R assigns such a convex function to each element of R. It comes from a family of valuations vₛ, indexed by s in a range such as (0, 1\].

**Problem.** Theorem 4.8, after Du, needs a formalism on (0, 1\] that discretely approximates, in the paper’s sense, each suitable convex function g. Any ring with such a formalism has uncountable Krull dimension. The perfectoid Tate algebra over a perfectoid field has one, so it has an uncountable chain of prime ideals.

**How the definition helps.** The formalism isolates the property of the ring that Du’s proof uses, so the proof applies to any ring that has it. Du’s cases include V\[\[x\]\] for a nondiscrete valuation ring V. For the perfectoid Tate algebra, the paper uses a nonstandard formalism in which the series variable x and the pseudo-uniformizer π switch roles. A pseudo-uniformizer is a nonzero element of absolute value less than one whose powers define the topology. The hard step is to check that this formalism approximates finely enough.

**Paper or page:** [The perfectoid Tate algebra has uncountable Krull dimension](https://arxiv.org/abs/2212.13315v2). It says: “We prove a version of Du's theorem in the prescence of a sufficiently nondiscrete Newton polygon formalism.”

**Sources:**

- [Jack J Garzella, The perfectoid Tate algebra has uncountable Krull dimension, arXiv:2212.13315v2 (2024)](https://arxiv.org/abs/2212.13315v2)

### Small separating invariant sets force large components in the separating variety

**Remember:** A separating set of m invariants cuts out the separating variety with m equations.

*Makes the theorem clean to state or prove.* MSC 13A50 (Actions of groups on commutative rings; invariant theory), 14L24. arXiv math.RT, math.AC. Level 4: research.

**Definition.** Let a group G act linearly on a vector space V over an algebraically closed field. The separating variety is the set of pairs of points of V on which every invariant polynomial takes the same value. A set of invariant polynomials is separating if it distinguishes every pair that some invariant distinguishes.

**Problem.** Suppose that m invariant polynomials form a separating set. Then every irreducible component of the separating variety has dimension at least 2·dim V − m. For n-tuples of p × p matrices this gives the paper's bound m ≥ (n − 1)p² + p when n ≥ 3.

**How the definition helps.** The separating variety turns a question about separating sets into a question about the dimension of one fixed variety. The paper's Proposition 1.5 says that m invariants are separating exactly when the m differences f(u) − f(v) cut out the separating variety. V × V has dimension 2·dim V. In our own explanation, Krull's principal ideal theorem then says that each component of that zero set has dimension at least 2·dim V − m. The hard work in the paper is to find the smallest component for tuples of matrices under simultaneous conjugation.

**Paper or page:** [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1), [The separating variety for matrix invariants](https://arxiv.org/abs/2508.13865v1). It says: “Its geometry places restrictions on the existence of small separating sets, i.e. sets of invariants which distinguish the same points as the full algebra of invariants.”

**Sources:**

- [Jonathan Elmer, The separating variety for matrix invariants, arXiv:2508.13865 (2025)](https://arxiv.org/abs/2508.13865v1)

### Torsion-free λ-rings are rings with commuting Frobenius lifts

**Remember:** Torsion-free λ-ring: one Frobenius lift for each prime, all commuting.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13A99 (General commutative ring theory), 13A35, 19A99. arXiv math.AC, math.KT. Level 4: research.

**Definition.** In the 'heterodox' view, a torsion-free λ-ring is a torsion-free commutative ring with endomorphisms ψₚ, one for each prime p, that commute with each other. Each ψₚ must be a Frobenius lift: modulo p it equals the map x ↦ xᵖ. The orthodox definition instead uses operations λⁿ and six axioms written with universal polynomials.

**Problem.** Decide whether a torsion-free ring carries a λ-ring structure. Also decide whether a ring map respects that structure.

**How the definition helps.** The Frobenius-lift view turns both questions into questions about endomorphisms modulo p. With the orthodox axioms, you must check identities with the complicated universal polynomials Pₙ and Pₘ,ₙ. Wilkerson's theorem says that on a torsion-free ring, a commuting family of Frobenius lifts determines a unique λ-structure whose Adams operations (the ring maps ψₚ that every λ-ring has) are these lifts. A ring map is then a λ-map exactly when it commutes with the Adams operations. The real content is Wilkerson's theorem. The page states it for torsion-free rings and says that the torsion-free assumption can later be removed. Borger uses the Frobenius-lift view to set up λ-algebraic geometry as geometry 'over the field with one element'.

**nLab:** [Lambda-ring](https://ncatlab.org/nlab/show/Lambda-ring). It says: “Equivalently, it turns out (Wilkerson 82) that a λ-ring is a commutative ring equipped with an endomorphism that lifts the Frobenius endomorphism after reduction mod p at each prime number p.”

**Sources:**

- [C. Wilkerson, Lambda-rings, binomial domains, and vector bundles over CP(∞), Communications in Algebra 10 (1982) 311–328](https://doi.org/10.1080/00927878208822717)
- [J. Borger, The basic geometry of Witt vectors, I: The affine case, 2008, arXiv:0801.1691](https://arxiv.org/abs/0801.1691)
- [J. Borger, Lambda-rings and the field with one element, 2009, arXiv:0906.3146](https://arxiv.org/abs/0906.3146)

### Flatness makes weakly étale maps compose and survive base change

**Remember:** Both tests reduce to flatness after tensoring or composing.

*True by definition.* MSC 13B40 (Étale and flat extensions; Henselization; Artin approximation), 13C11. arXiv math.AC, math.AG. Level 4: research.

**Definition.** A ring map A → B is flat if tensoring with B over A preserves injections of modules. It is weakly étale if both A → B and the multiplication map B ⊗ₐ B → B are flat. Over a field, an equivalent test asks whether B is a directed colimit of étale algebras.

**Problem.** Weakly étale ring maps remain weakly étale after composition or base change, which replaces A by A′ and B by B ⊗ₐ A′.

**How the definition helps.** The two flatness tests turn base change and composition into familiar rules about flat maps. For base change, both maps in the test are obtained by tensoring the original maps with A′ over A. For composition A → B → C, factor multiplication as C ⊗ₐ C → C ⊗ᵦ C → C. The first map is a base change of B ⊗ₐ B → B, and the second is flat by assumption. This is our own account of the proof. A separate theorem gives the comparison with directed colimits of étale algebras over a field (Tag 092Q). We do not need that description over general base rings.

**Paper or page:** [More Algebra, Lemma 15.105.7](https://stacks.math.columbia.edu/tag/092H), [More Algebra, Lemma 15.105.9](https://stacks.math.columbia.edu/tag/092J), [More Algebra, Lemma 15.105.16](https://stacks.math.columbia.edu/tag/092Q). It says: “If A → B is weakly étale, then A′ → B′ is weakly étale.”

**Sources:**

- [The Stacks Project, Lemma 15.105.7, Tag 092H](https://stacks.math.columbia.edu/tag/092H)
- [The Stacks Project, Lemma 15.105.9, Tag 092J](https://stacks.math.columbia.edu/tag/092J)
- [The Stacks Project, Lemma 15.105.16, Tag 092Q](https://stacks.math.columbia.edu/tag/092Q)
- [B. Bhatt and P. Scholze, The pro-étale topology for schemes, Astérisque 369](https://doi.org/10.24033/ast.960)

### Cohen–Macaulay complexes give new proofs of homological conjectures

**Remember:** Complexes can be Cohen–Macaulay where modules are hard to find.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules), 13D02, 13D22. arXiv math.AC. Level 4: research.

**Definition.** Over a Noetherian local ring R, a maximal Cohen–Macaulay (MCM) complex is a complex with finitely generated homology whose depth equals dim R. Depth is the length of a longest regular sequence, and the survey adds a nonvanishing condition in degree 0 (our own summary). Lemma 3.2 shows that the cohomology of an MCM complex lives in degrees 0 to dim R, with H⁰ nonzero. It plays the role of a big Cohen–Macaulay module, a module whose depth is dim R.

**Problem.** Hochster's homological conjectures, such as the new intersection theorem, follow from the existence of big Cohen–Macaulay modules. Such modules were hard to construct, and André's proof in mixed characteristic is deep.

**How the definition helps.** Complexes are easier to build than modules, and the conjectures only need the depth property (our own reading). Proposition 3.20 gives an example, for R essentially of finite type over a field of characteristic zero. There the derived pushforward of the structure sheaf along a resolution of singularities is MCM. Theorem 2.4 is the new intersection theorem: a finite free complex F with H₀(F) ≠ 0 and finite-length homology has length at least dim R. The abstract says that the existence of MCM complexes gives new proofs of some of these conjectures. In our own reading, the survey still uses deep inputs, such as André's theorem that big Cohen–Macaulay algebras exist (Theorem 2.3).

**Paper or page:** [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1), [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1), [Maximal Cohen-Macaulay complexes and their uses: A partial survey](https://arxiv.org/abs/2106.08173v1). It says: “Various constructions of maximal Cohen-Macaulay complexes are described, and their existence is applied to give new proofs of some of the homological conjectures, and also of certain results in birational geometry.”

**Sources:**

- [Srikanth B. Iyengar, Linquan Ma, Karl Schwede, Mark E. Walker, Maximal Cohen-Macaulay complexes and their uses: A partial survey, arXiv:2106.08173 (2021)](https://arxiv.org/abs/2106.08173v1)

### Sequentially Cohen–Macaulay modules are closed under direct sums

**Remember:** Sort the pieces by dimension, and each piece can be Cohen–Macaulay.

*Rules out counterexamples. Confidence: medium.* MSC 13C14 (Cohen-Macaulay modules). arXiv math.AC. Level 4: research.

**Definition.** A module is Cohen–Macaulay when its depth, the length of a longest regular sequence on it, equals its dimension. A module is sequentially Cohen–Macaulay when it has a filtration whose quotients are Cohen–Macaulay with strictly increasing dimensions. Every Cohen–Macaulay module is sequentially Cohen–Macaulay.

**Problem.** A direct sum of Cohen–Macaulay modules of different dimensions is not Cohen–Macaulay. So the class is not closed under direct sums. One wants a class that is.

**How the definition helps.** The filtration lets each dimension carry its own Cohen–Macaulay piece, which is the room that direct sums need. In our own reading, the easy direction merges the two filtrations dimension by dimension, since a sum of Cohen–Macaulay modules of one dimension is Cohen–Macaulay. The hard direction, that a direct summand is again sequentially Cohen–Macaulay, uses duality with the canonical module (our own reading). Corollary 2.14 assumes that R is Cohen–Macaulay with a canonical module, a module that gives a duality theory. Our own example: over the graded ring R = k\[x, y\], the module R ⊕ R/(x) has depth 1 and dimension 2. So it is not Cohen–Macaulay, yet it is sequentially Cohen–Macaulay. Corollary 2.9 shows that for unmixed modules, in our own gloss those whose associated primes all have full dimension, the two notions coincide.

**Paper or page:** [On the notion of sequentially Cohen-Macaulay modules](https://arxiv.org/abs/2304.06609v1). It says: “Then, M and N are sequentially Cohen-Macaulay if and only if M ⊕ N is sequentially Cohen-Macaulay.”

**Sources:**

- [Giulio Caviglia, Alessandro De Stefani, Enrico Sbarra, Francesco Strazzanti, On the notion of sequentially Cohen-Macaulay modules, arXiv:2304.06609 (2023), Research in the Mathematical Sciences 9 (2022), Article 40](https://arxiv.org/abs/2304.06609v1)

### Weak proregularity makes derived completion agree with completion

**Remember:** Weakly proregular ideals let completion behave as over Noetherian rings.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** A finitely generated ideal is weakly proregular when, for a generating sequence, the Koszul homology of its powers is pro-zero in positive degrees. Koszul homology is the homology of a standard complex that measures how far a sequence is from being regular. Pro-zero means that each n has some m ≥ n for which the homology map from m-th powers to n-th powers is zero. Every ideal of a Noetherian ring has this property.

**Problem.** Derived completion LΛ𝔞 is the left derived functor of 𝔞-adic completion Λ𝔞. For a complex P of 𝔞-adically flat modules, one wants the map from LΛ𝔞(P) to Λ𝔞(P) to be an isomorphism. Over a Noetherian ring this is known.

**How the definition helps.** In our own reading, weak proregularity is the finiteness condition that the completion arguments use, so it replaces the Noetherian hypothesis. With it, Theorem 0.2 holds for every complex of 𝔞-adically flat modules, bounded or not. Without it, the theorem needs the complex to be bounded above. The abstract says that such ideals occur often in non-Noetherian rings from Hochschild and prismatic cohomology. The proof of the comparison itself, and the related Nakayama theorem, still take work.

**Paper or page:** [Derived Complete Complexes at Weakly Proregular Ideals](https://arxiv.org/abs/2309.01687v4). It says: “Assume either of these two conditions hold: either the complex P is bounded above, or the ideal 𝔞 is weakly proregular. Then the canonical morphism … LΛ𝔞(P) → Λ𝔞(P) in D(A) is an isomorphism.”

**Sources:**

- [Amnon Yekutieli, Derived Complete Complexes at Weakly Proregular Ideals, arXiv:2309.01687 (2023)](https://arxiv.org/abs/2309.01687v4)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Weak proregularity makes Čech cohomology compute local cohomology

**Remember:** Weakly proregular is exactly when the Čech complex tells the truth.

*True by definition.* MSC 13D02 (Syzygies, resolutions, complexes and commutative rings), 13B35, 13D45. arXiv math.AC, math.RA. Level 4: research.

**Definition.** Take a sequence a₁, …, aᵣ in a commutative ring. It is weakly proregular when the Koszul homology of the powers a₁ⁿ, …, aᵣⁿ forms a pro-zero inverse system in positive degrees. Local cohomology is the derived functor of taking elements killed by a power of the ideal. Čech cohomology is the cohomology of an explicit complex of localizations.

**Problem.** Local cohomology and Čech cohomology agree for every sequence in a Noetherian ring. One wants this comparison for rings that are not Noetherian.

**How the definition helps.** The definition asks for exactly the vanishing that makes the Čech functors effaceable, so they become the derived functors. A functor F is effaceable when each object A has an embedding u into some M with F(u) = 0 (Proposition 2.5). Proposition 4.4 proves that a sequence is weakly proregular exactly when Čech cohomology is an effaceable δ-functor. A δ-functor is a family of functors joined by connecting maps for short exact sequences. Corollary 4.8 shows that every sequence in a Noetherian ring is weakly proregular, so the classical case is included. The note avoids the derived categories that Schenzel used in his proof.

**Paper or page:** [A note on weakly proregular sequences and local cohomology](https://arxiv.org/abs/2105.07652v2). It says: “In this note, we give an elementary proof of the result given by Schenzel that there are functorial isomorphisms between local cohomology groups and Čech cohomology groups, by using weakly proregular sequences.”

**Sources:**

- [Ryoya Ando, A note on weakly proregular sequences and local cohomology, arXiv:2105.07652 (2021), Moroccan J. Algebra Geom. Appl. 1 (2022), 98-107](https://arxiv.org/abs/2105.07652v2)
- [Peter Schenzel, Proregular sequences, local cohomology, and completion, Math. Scand. 92 (2003), 161](https://doi.org/10.7146/math.scand.a-14399)

### Higher congruence modules extend Wiles's numerical criterion

**Remember:** Two lengths agree exactly when A is a complete intersection and M is nearly free.

*Makes the theorem clean to state or prove. Confidence: low.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13C40, 13D09. arXiv math.NT, math.AC. Level 4: research.

**Definition.** Wiles's numerical criterion compares two numbers attached to a map from a local ring A to a ring 𝒪. The congruence module measures how much the part of A over 𝒪 meets the rest of A. The paper defines a version of this module that works when the kernel of the map has higher codimension.

**Problem.** Theorem 24 assumes a depth condition on a finitely generated A-module M. Then A is a complete intersection and M is μ copies of A plus a negligible part exactly when two lengths agree. In our own reading, these are μ times a length built from A and the length of the congruence module of M.

**How the definition helps.** Our own reading: the new congruence module lets the criterion be stated as one equality of lengths in higher codimension. A complete intersection is a ring cut out by as many equations as its codimension (our own gloss). Wiles used the codimension-zero version in his work on Fermat's Last Theorem (our own note). The abstract says the definition proved useful beyond this criterion. Our own note: the proof of Theorem 24 needs commutative algebra beyond this record.

**Paper or page:** [The commutative algebra of congruence ideals and applications to number theory](https://arxiv.org/abs/2510.05418). It says: “A critical ingredient is a notion of congruence module in higher codimension: this has turned out to be a key definition whose utility extends beyond the role it plays in the numerical criterion.”

**Sources:**

- [Srikanth B. Iyengar, Chandrashekhar B. Khare, Jeffrey Manning, The commutative algebra of congruence ideals and applications to number theory, arXiv:2510.05418 (2025)](https://arxiv.org/abs/2510.05418)
- [Andrew Wiles, Modular Elliptic Curves and Fermat's Last Theorem, The Annals of Mathematics (1995)](https://doi.org/10.2307/2118559)

### L-complete modules form the abelian category that I-adically complete modules cannot

**Remember:** Complete modules are not closed under cokernels; deriving the completion fixes this.

*Rules out counterexamples.* MSC 13D07 (Homological functors on modules of commutative rings (Tor, Ext, etc.)), 13B35, 13J10. arXiv math.AC. Level 4: research.

**Definition.** Let I be a finitely generated ideal of a commutative ring R. I-adic completion sends a module M to the inverse limit of the quotients M/IⁿM. Let L be the 0th left derived functor of I-adic completion, which is the closest right exact functor to it. A module M is L-complete if the canonical map M → L(M) is an isomorphism.

**Problem.** We want an abelian category of 'complete' modules, so that homological algebra works. The I-adically complete modules do not form one, because a quotient of complete modules need not be complete.

**How the definition helps.** The left derived functor L of completion is right exact, and that repairs the failure at cokernels. The completion functor is not right exact, which is why cokernels of complete modules can fail to be complete. L is right exact by definition, and every complete module is L-complete. Salch proves a result for a weakly proregular ideal I (a technical condition that holds, for example, for any ideal of a Noetherian ring). For such I, L-complete modules form the smallest replete exact abelian subcategory of R-modules that contains the complete modules. Here replete means closed under isomorphism, and exact means that kernels and cokernels are those of R-modules. So the definition repairs the failure of abelianness; the proof of minimality is a real theorem.

**nLab:** [L-complete module](https://ncatlab.org/nlab/show/L-complete+module). It says: “The category of L-complete modules is the smallest abelian full subcategory of RMod which contains the I-adically complete modules.”

**Sources:**

- [J. P. C. Greenlees, J. P. May, Derived functors of I-adic completion and local homology, Journal of Algebra 149 (1992) 438–453](https://doi.org/10.1016/0021-8693(92)90026-I)
- [Andrew Salch, Approximation of subcategories by abelian subcategories, arXiv:1006.0048](https://arxiv.org/abs/1006.0048)

### Defining derived tensors by K-flat replacements makes them associative

**Remember:** Replace all three inputs once, then regroup the ordinary tensor product.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 18G80. arXiv math.KT. Level 4: research.

**Definition.** Define the derived tensor product of two complexes over a commutative ring as follows. Replace both by K-flat complexes through quasi-isomorphisms, which are maps that keep homology, and tensor them. A K-flat complex keeps zero homology under tensoring. One can also compute it by replacing just one factor.

**Problem.** The derived tensor product of complexes over a commutative ring is associative up to natural isomorphism.

**How the definition helps.** A tensor product of K-flat complexes is again K-flat, so both groupings reduce to ordinary tensor products of the same three replacements (our own). Ordinary tensor products are associative (our own). The work goes into the existence and uniqueness up to quasi-isomorphism of K-flat replacements (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.127.1](https://stacks.math.columbia.edu/tag/0FNQ). It says: “with tensor product given by derived tensor product and associativity and commutativity constraints”

**Sources:**

- [Nicolas Spaltenstein, Resolutions of unbounded complexes (1988)](https://www.numdam.org/item/CM_1988__65_2_121_0/)

### Defining K-flat complexes by a tensor test makes them survive base change

**Remember:** After changing rings, test on the same complexes viewed over the old ring.

*True by definition.* MSC 13D09 (Derived categories and commutative rings), 18G35. arXiv math.KT, math.AC. Level 4: research.

**Definition.** A complex K of R-modules is K-flat if K ⊗ M has zero homology for every complex M with zero homology. This extends to unbounded complexes the role of bounded-above complexes of flat modules.

**Problem.** For any map of commutative rings R → R′, if K is K-flat over R then K ⊗ R′ is K-flat over R′. The map R → R′ need not be flat.

**How the definition helps.** The test reduces to one identity: (K ⊗ R′) ⊗ M equals K ⊗ M for an R′-complex M (our own). M has zero homology as a complex of R-modules too, so K-flatness over R applies (our own). The work goes into proving that K-flat replacements exist and compute derived tensor products of unbounded complexes (our own).

**Paper or page:** [Stacks Project, More Algebra, Lemma 15.59.3](https://stacks.math.columbia.edu/tag/06Y1). It says: “is a K-flat complex of R′-modules.”

**Sources:**

- [Nicolas Spaltenstein, Resolutions of unbounded complexes (1988)](https://www.numdam.org/item/CM_1988__65_2_121_0/)

### Counting generators up to symmetry makes infinite polynomial rings Noetherian

**Remember:** Count generators together with all their translates under variable permutations.

*Makes the theorem clean to state or prove.* MSC 13E05 (Commutative Noetherian rings and modules), 13A50. arXiv math.RT, math.AC. Level 4: research.

**Definition.** A group of permutations of the variables acts on the polynomial ring. The ring is Noetherian up to that action if each invariant ideal is generated by the translates of finitely many polynomials.

**Problem.** Let k be a commutative Noetherian ring and let a group act on an infinite set of variables. If the action is highly homogeneous, the polynomial ring is Noetherian up to that action. Highly homogeneous means that any finite set of variables can be moved onto any other set of the same size.

**How the definition helps.** Counting generators up to symmetry lets a finite generation theorem hold for a ring in infinitely many variables. In our own example, the ideal generated by all variables needs infinitely many ordinary generators but just one orbit of generators. Proving finite generation for every invariant ideal stays hard.

**Paper or page:** [Noetherianity of polynomial rings up to group actions](https://arxiv.org/abs/2502.14306v2). It says: “We show that k\[S\] is Noetherian up to highly homogenous actions of groups.”

**Sources:**

- [Liping Li, Yinhe Peng, Zhengjun Yuan, Noetherianity of polynomial rings up to group actions, arXiv:2502.14306 (2025)](https://arxiv.org/abs/2502.14306v2)

### With the Noetherian Bézout definition, ℤ is constructively a principal ideal domain

**Remember:** Ask only finitely generated ideals to be principal, and let Noetherianity do the rest.

*Makes the theorem clean to state or prove.* MSC 13F10 (Principal ideal rings), 13E05, 03F65. arXiv math.AC, math.LO. Level 4: research.

**Definition.** Lombardi and Quitté define a principal ideal domain as an integral domain that is Bézout and Noetherian. Bézout means that every finitely generated ideal is principal. They do not require that every ideal be principal.

**Problem.** Show, in constructive mathematics, that the ring of integers ℤ is a principal ideal domain.

**How the definition helps.** The new definition drops the one requirement that needs excluded middle. With the classical definition, the statement that every ideal of ℤ is principal is equivalent to excluded middle. So constructively you cannot prove that ℤ is a principal ideal domain in the classical sense. Our own illustration of the reason: for a proposition P, the ideal {n \| n = 0, or P holds} has no generator that you can compute without deciding P. Classically the two definitions agree, so nothing is lost, and ℤ is constructively Noetherian and Bézout. The real work is then to develop the theory of principal ideal domains from the Noetherian Bézout definition.

**nLab:** [noetherian ring](https://ncatlab.org/nlab/show/noetherian+ring), [principal ideal domain](https://ncatlab.org/nlab/show/principal+ideal+domain). It says: “the ring of integers is both Noetherian and Bézout, but it is a principal ideal domain if and only if excluded middle holds.”

**Sources:**

- [H. Lombardi, C. Quitté, Commutative Algebra: Constructive Methods (Finite projective modules), Springer 2015](https://doi.org/10.1007/978-94-017-9944-7)

### Modified power series over zero-dimensional rings stay flat

**Remember:** Keep each power series inside one Artinian piece, and flatness returns.

*Rules out counterexamples. Confidence: medium.* MSC 13F25 (Formal power series rings), 13C11, 13C15. arXiv math.AC, math.RA. Level 4: research.

**Definition.** Let R be a ring of Krull dimension 0 that is integral over an Artinian subring R₀. Then R is a directed union of a family 𝓕 of Artinian subrings Rα (Proposition 2.1). The modified ring 𝓕⟦X₁, …, Xₙ⟧ takes only those power series whose coefficients all lie in one Rα (Lemma 2.4). Krull dimension is the greatest length of a chain of prime ideals.

**Problem.** Over a Noetherian ring, R⟦X₁, …, Xₙ⟧ is flat over R and has dimension dim R + n. Over a non-Noetherian ring, both facts can fail, even when dim R is finite. One wants a power series ring that keeps them.

**How the definition helps.** In our own reading, each power series lives over an Artinian ring, where power series behave well, so good properties pass to the union. Theorem 3.4 shows that the modified ring is faithfully flat over R. Theorem 4.6 shows that its dimension is exactly n, which is dim R + n because dim R = 0. The abstract says the paper also extends Krull's height theorem and unmixedness to this ring. The bad behaviour of the full power series ring is what the definition excludes. In our own reading, the hard part is the dimension count, which uses that R is integral over R₀.

**Paper or page:** [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1), [Power Series Rings over Zero-Dimensional Rings](https://arxiv.org/abs/2510.07496v1). It says: “A power series ring over non-Noetherian rings can fail to be flat over the base ring, and its dimension can be infinite, even when the dimension of the base ring is finite.”

**Sources:**

- [M. Richard Sayanagi, Power Series Rings over Zero-Dimensional Rings, arXiv:2510.07496 (2025)](https://arxiv.org/abs/2510.07496v1)

### For absolute-valued Huber rings, topological simplicity means the completion is a field

**Remember:** A dense ideal contains elements close to one.

*True by definition. Confidence: medium.* MSC 13J10 (Complete rings, completion), 13A18, 14G22. arXiv math.NT, math.AC. Level 4: research.

**Definition.** A topological ring is topologically simple if its only closed ideals are 0 and the whole ring. For a Hausdorff ring, this means every nonzero ideal is dense. A Huber ring has an open subring whose topology is the I-adic topology for a finitely generated ideal I.

**Problem.** If the completion of a topological ring A is a field, then A is topologically simple. The converse holds when A is a Huber ring whose topology comes from an absolute value.

**How the definition helps.** Topological simplicity is the condition on A that a field completion forces, so one direction is nearly immediate. In our own proof sketch, a nonzero closed ideal of A has a nonzero closure in the completion, which is then everything. So the ideal is dense and closed, hence all of A. In our own sketch of the converse, take a nonzero x in the completion and a nonzero a in A close to x. In our own sketch, the ideal aA is dense, so some ab is close to 1 and has an inverse by a geometric series. In our own sketch, the absolute value then makes x invertible as well, since x is close to the invertible a.

**Paper or page:** [Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras](https://arxiv.org/abs/2510.22678v2). It says: “If the completion of A is a field, then A is topologically simple. If A is a Huber ring and its topology is defined by an absolute value, then the converse is also true.”

**Sources:**

- [Dimitri Dine, Jack J Garzella, Abhyankar valuations, Prüfer-Manis valuations, and perfectoid Tate algebras, arXiv:2510.22678v2 (2025)](https://arxiv.org/abs/2510.22678v2)

### A p-derivation row gives a Jacobian criterion in mixed characteristic

**Remember:** A p-derivation is the missing derivative in the direction of p.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 13N15 (Derivations and commutative rings), 13H05, 14B05. arXiv math.AC, math.AG. Level 4: research.

**Definition.** Let p be a prime that is not a zero divisor in the ring. In our own summary, a p-derivation is a map δ such that x ↦ xᵖ + pδ(x) is a ring map. The paper builds a mixed Jacobian matrix of f₁, …, fₐ. In the abstract's words, it includes a row coming from the values of a p-derivation.

**Problem.** The Jacobian criterion finds the singular points of R = T/(f₁, …, fₐ) from the minors of the matrix of partial derivatives. It works over a perfect field, but over the p-adic integers, p is a direction with no derivative. So the criterion fails at primes that contain p.

**How the definition helps.** In our own reading, the p-derivation acts as a derivative with respect to p, so it fills the missing row. With this row, the paper's Theorem 4.11 makes regularity at a prime that contains p again a rank condition. It needs an ideal of pure height h and an unramified base with an algebraically closed residue field. At primes that do not contain p, the classical matrix is enough. Our own example of failure is ℤₚ\[x\]/(x² − p), the p-adic integers with a square root of p. It is regular, but the derivative 2x lies in the maximal ideal (p, x). To study the matching modules of differentials, the paper introduces perivations, roughly linearizations of p-derivations.

**Paper or page:** [A Jacobian criterion for nonsingularity in mixed characteristic](https://arxiv.org/abs/2106.01996v2), [A Jacobian criterion for nonsingularity in mixed characteristic](https://arxiv.org/abs/2106.01996v2). It says: “Let 𝔭 be a prime ideal of R with p∈𝔭. Then, the mixed Jacobian matrix J̃(f) considered in κ(𝔭) has rank at most h, and equality holds if and only if R𝔭 is regular.”

**Sources:**

- [Melvin Hochster, Jack Jeffries, A Jacobian criterion for nonsingularity in mixed characteristic, arXiv:2106.01996 (2021)](https://arxiv.org/abs/2106.01996v2)

### Degree-compatible orders make two kinds of confluence agree

**Remember:** Order by degree, and the weaker confluence is already enough.

*Rules out counterexamples. Confidence: medium.* MSC 13P10 (Gröbner bases; other bases for ideals and modules (e.g., Janet and border bases)), 13F25, 68Q42. arXiv math.AC, math.RA. Level 4: research.

**Definition.** A rewriting system reduces power series step by step, replacing leading terms with the help of a standard basis of an ideal. Topological confluence asks that any two reductions of a series can be continued to results that are arbitrarily close (our own paraphrase). Infinitary confluence asks that they can be joined exactly by possibly infinite, convergent reduction sequences (our own paraphrase). The abstract says that in general the second is strictly stronger.

**Problem.** For polynomials, a Gröbner basis is the same as a confluent rewriting system. For formal power series one wants the same statement for standard bases. One must choose which notion of confluence to use.

**How the definition helps.** A degree-compatible order compares monomials first by total degree, so in our own gloss reductions push terms to higher degree and converge. In that topology two series are close when they agree up to a high degree. Ideals of a formal power series ring are closed in it, so limits of reductions stay in the ideal. With such an order, the paper uses this closure to show that the two notions of confluence are equal. So one can check the weaker one and get the stronger one. The paper gives explicit examples where, in general, the two notions differ. The closure of ideals is the classical fact that power series rings are Zariski rings, and the paper gives a constructive proof of it.

**Paper or page:** [Topological closure of formal power series ideals and application to topological rewriting theory](https://arxiv.org/abs/2402.05511v3). It says: “Using topological closure of ideals, we finally show that in the context of rewriting theory on commutative formal power series, infinitary and topological confluences are equivalent when the monomial order considered is compatible with the degree.”

**Sources:**

- [Cyrille Chenavier, Thomas Cluzeau, Adya Musson-Leymarie, Topological closure of formal power series ideals and application to topological rewriting theory, arXiv:2402.05511 (2024)](https://arxiv.org/abs/2402.05511v3)

source: https://people.mpim-bonn.mpg.de/zagier/files/ams/stud-adv-math/7/fulltext.pdf
slogan: One sequence of orthogonal polynomials in j, reduced modulo p, lists the supersingular elliptic curves for every prime p.
basis: the introduction and the main theorem statements

## Before you start

The paper is 30 pages and full of explicit formulas with large coefficients, including a fourth-order differential equation. The likely feeling is fatigue at the sight of them, and a doubt that you can check anything yourself. Feel that if it comes. The formulas are there to be used, not memorised. If you like results you can test on a computer in an afternoon, this paper has several. Play with one example first. Reading to the end is optional.

## The story

An elliptic curve in characteristic p is supersingular when it has no p-torsion points. Only finitely many j-invariants are supersingular, so they are the roots of one polynomial ss<sub>p</sub>(j) over 𝔽<sub>p</sub>. In terms of the Legendre parameter λ there is a simple classical formula. In terms of j there was none as clean. Kaneko and Zagier collect polynomials with rational coefficients that reduce to ss<sub>p</sub> modulo p. Four come from modular forms of weight p−1. The surprise is Atkin's, whose proofs were never published. Put a scalar product on polynomials in j that makes all Hecke operators self-adjoint. Take its orthogonal polynomials A<sub>n</sub>. Then A<sub>n</sub> modulo p is ss<sub>p</sub>, where n is the degree of ss<sub>p</sub>. For example A<sub>3</sub> serves the four primes 23, 29, 31 and 37.

## Main definitions

**Supersingular polynomial.** For a prime p, ss<sub>p</sub>(j) is the product of (j − j(E)) over the supersingular curves E over the algebraic closure of 𝔽<sub>p</sub>, one for each j-invariant. It lies in 𝔽<sub>p</sub>[j]. Its degree n<sub>p</sub> is about p/12.

**Polynomial attached to a modular form.** Write an even weight k > 2 as k = 12m + 4δ + 6ε with δ in {0, 1, 2} and ε in {0, 1}. Each modular form f of weight k on the full modular group is Δ<sup>m</sup> E<sub>4</sub><sup>δ</sup> E<sub>6</sub><sup>ε</sup> f̃(j) for a unique polynomial f̃ of degree at most m.
- For k = p−1 with p ≥ 5: n<sub>p</sub> = m + δ + ε, and ss<sub>p</sub>(j) is divisible by j<sup>δ</sup>(j − 1728)<sup>ε</sup>.

**Atkin scalar product.** View polynomials in j as modular functions. Set (f, g) equal to the constant term of f(τ)g(τ) written as a Laurent series in Δ(τ) = q − 24q<sup>2</sup> + ..., not in q.

**Atkin polynomials.** The monic polynomials A<sub>n</sub>(j) of degree n that are mutually orthogonal for this product.
- First cases: A<sub>0</sub> = 1, A<sub>1</sub> = j − 720, A<sub>2</sub> = j<sup>2</sup> − 1640j + 269280.

## Main results

**Theorem (four modular forms; Theorem 1).** Let p ≥ 5 be prime and k = p−1. Let f be one of four explicit forms of weight k: the Eisenstein series E<sub>k</sub>, the forms G<sub>k</sub> and H<sub>k</sub> given by generating functions in E<sub>4</sub> and E<sub>6</sub>, or F<sub>k</sub>, the solution of a second-order differential equation (defined only when k is not 2 mod 3). Then f̃ has p-integral coefficients and ss<sub>p</sub>(j) ≡ ± j<sup>δ</sup>(j − 1728)<sup>ε</sup> f̃(j) mod p.
- H<sub>k</sub>: the classical criterion of Hasse and Deuring, by counting points on y<sup>2</sup> = x<sup>3</sup> − 3Qx + 2R.
- E<sub>k</sub>: a result the authors credit to Deligne.

**Theorem (Atkin; Theorem 2).** Up to a scalar, there is exactly one linear functional φ on polynomials in j such that every Hecke operator T<sub>n</sub> is self-adjoint for (f, g) = φ(fg). There is a unique family of monic orthogonal polynomials A<sub>n</sub> for this product, one in each degree.

**Theorem (Atkin; Theorem 3).** Let p be a prime. Then ss<sub>p</sub>(j) ≡ A<sub>n<sub>p</sub></sub>(j) mod p. The coefficients of A<sub>n</sub> are p-integral for p > 2n, so the reduction makes sense.
- Proof 1 (Section 6): through modular forms.
- Proof 2 (Section 7): through hypergeometric functions, starting from the recursion below.

**Theorem (recursion; Theorem 4, part i).** For n ≥ 2, A<sub>n+1</sub>(j) = (j − 24(144n<sup>2</sup> − 29)/((2n+1)(2n−1))) A<sub>n</sub>(j) − 36(12n−13)(12n−7)(12n−5)(12n+1)/(n(n−1)(2n−1)<sup>2</sup>) A<sub>n−1</sub>(j). The theorem also gives a closed formula with binomial coefficients, and a fourth-order differential equation with A<sub>n</sub> as its unique monic polynomial solution.

## Note, then ignore

- The sign ±. In Theorem 1 the sign is (−1)<sup>δ+ε</sup> for G and H, and + for E and F. It only fixes the leading coefficient. Safe to skip.
- Four numbers m, δ, ε, n. The forms of Theorem 1 depend on m, δ and ε separately. The Atkin polynomial depends only on the sum n. This is why one A<sub>n</sub> can serve up to four primes: 12n−13, 12n−7, 12n−5 and 12n+1. Safe to skip at first.
- Denominators. The recursion bounds the denominators of A<sub>n</sub> only crudely. Section 9 shows they are far smaller. This matters for computation, not for the story.
- Roots in 𝔽<sub>p<sup>2</sup></sub>. All supersingular j-invariants lie in the field with p<sup>2</sup> elements. Section 10 proves it. The main theorems do not need it.
- A second family (Theorem 5, Section 8). The polynomials F̃<sub>k</sub> are also orthogonal, for a simpler product that does not respect Hecke operators. I did not read that statement in detail. Safe to skip.

## One next step

Open the paper at Theorem 3 on page 3 and check it by hand for A<sub>1</sub> = j − 720 and p = 13. Then read the paragraph after the theorem.

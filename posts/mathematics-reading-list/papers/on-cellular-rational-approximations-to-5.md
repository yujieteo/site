source: https://arxiv.org/pdf/2210.03391
slogan: One five-fold integral on a moduli space of marked spheres hides fractions that approach ζ(5) faster than any other known explicit construction.
basis: the introduction and the main theorem statements

## Before you start

The likely feeling here is disappointment in advance. The paper does not prove that ζ(5) is irrational, and it says so on page 3. You may feel that a near miss is not worth your time. That feeling is fair, and you can let it sit there. What the paper offers is a clear view of how an irrationality proof is built and where it runs short. If you have wanted to see inside Apéry's method, this is a friendly window. Read for the mechanism. Finishing is optional.

## The story

Apéry proved ζ(3) irrational by finding fractions p/q that approach it faster than their denominators grow. For ζ(5), people have tried for decades to build small linear forms in 1 and ζ(5) alone, and have failed. Brown and Zudilin try another route. They take a family of integrals over the simplex 0 &lt; t<sub>1</sub> &lt; ... &lt; t<sub>5</sub> &lt; 1, with eight integer exponents. Each integral is a small rational combination of 1, ζ(2) and ζ(5) + 2ζ(3)ζ(2). The unwanted ζ(2) can be removed by a cohomological argument, and what remains is a pair of small forms Qζ(5) − P and Qζ(3) − P̂ with the same Q. A symmetry group of order 5040 then controls the denominators of P. The fractions P/Q are not good enough for irrationality, but they beat every earlier explicit construction.

## Main definitions

**Cellular integral I(a).** A 5-fold integral over 0 &lt; t<sub>1</sub> &lt; ... &lt; t<sub>5</sub> &lt; 1 of a product of powers of the t<sub>i</sub>, 1 − t<sub>i</sub> and t<sub>j</sub> − t<sub>i</sub>, with exponents fixed by eight integers a = (a<sub>1</sub>, ..., a<sub>8</sub>). It is a period of the moduli space M<sub>0,8</sub> of spheres with eight marked points.
- Convergence: I(a) converges exactly when seventeen explicit linear forms in the a<sub>i</sub> are non-negative.
- Shape: I = Q·(2ζ(5) + 4ζ(3)ζ(2)) − 4P̂·ζ(2) − 2P with Q an integer and P, P̂ rational.

**The forms I′ and I″.** Set I′ = Qζ(5) − P and I″ = Qζ(3) − P̂. Then I = 2I′ + 4I″ζ(2). Passing from I to I′ is called "setting ζ(2) to zero".

**Effective approximations.** A family of forms q<sub>n</sub>α − p<sub>n</sub> is effective when p<sub>n</sub> and q<sub>n</sub> solve a linear recursion with polynomial coefficients, as in Apéry's proof. This rules out the trivial fractions you get by rounding qα.

**Worthiness.** Suppose q<sub>n</sub> and p<sub>n</sub> are integers, log|q<sub>n</sub>|/n → c<sub>1</sub> and log|q<sub>n</sub>ζ(5) − p<sub>n</sub>|/n → c<sub>0</sub> &lt; c<sub>1</sub>. The worthiness is γ = (c<sub>1</sub> − c<sub>0</sub>)/c<sub>1</sub>. For any ε > 0 and large n, |ζ(5) − p<sub>n</sub>/q<sub>n</sub>| &lt; 1/q<sub>n</sub><sup>γ−ε</sup>.
- If γ > 1, the number is irrational.

## Main results

**Theorem (approximations to ζ(5); Theorem 1).** There is an effective infinite sequence of fractions p/q, with p and q integers, such that 0 &lt; ζ(5) − p/q &lt; 1/q<sup>0.86</sup>.
- Step 1: choose the exponents a = (8, 16, 10, 15, 12, 16, 18, 13), scale them by n, and compute the growth rates of Q and of I′ from the integral.
- Step 2: use the group of order 5040 to bound the common denominator of the coefficients, so that the forms become integral at low cost.

**Claim (totally symmetric case; Section 2).** When all a<sub>i</sub> equal n, the integrals I<sub>n</sub> and the coefficients Q<sub>n</sub>, P<sub>n</sub>, P̂<sub>n</sub> satisfy one third-order recursion with polynomial coefficients. With d<sub>n</sub> = lcm(1, ..., n), the forms d<sub>n</sub><sup>5</sup>(Q<sub>n</sub>ζ(5) − P<sub>n</sub>) have worthiness about 0.778. In this section the denominator bound d<sub>n</sub><sup>5</sup>P<sub>n</sub> ∈ ℤ is an experimental observation.
- Why it matters: the group acts trivially here, so this case shows what the method gives before the group helps.

**Claim (the group; Sections 1 and 7).** A group G of order 7! = 5040 acts on normalised versions of I(a), I′(a), I″(a) and on the coefficients Q, P, P̂. It gives a sharp denominator D(a) with D·I′ in ℤζ(5) + ℤ. I read only the statement of this in the introduction, not the proof.

## Note, then ignore

- "Setting ζ(2) to zero". This is not an operation on real numbers. The paper justifies it by a change of homology cycle, or by passing to motivic zeta values. Safe to skip on a first reading.
- The combination ζ(5) + 2ζ(3)ζ(2). Cohomology forces ζ(5) and ζ(2)ζ(3) to appear in this fixed ratio. Once ζ(2) goes, the product term goes too. Safe to skip.
- Middle weights of the motive. The paper says the rank 3 shape of the underlying motive rests on period computations and is not rigorously established. The theorem does not depend on it. Safe to skip.
- Computer verification. The authors omit proofs that are finite calculations or were checked by computer, and say so. Safe to skip.
- Twelve-parameter integrals J(p; q). A change of variables embeds I(a) in a larger family with a simpler denominator. It serves the later sections. Safe to skip.

## One next step

Open the paper at page 3 and read Theorem 1 and the paragraph after it, which says exactly why 0.86 falls short of irrationality.

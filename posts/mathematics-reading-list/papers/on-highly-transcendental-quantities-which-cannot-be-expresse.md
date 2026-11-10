source: https://arxiv.org/pdf/0711.4986
slogan: Simple series such as the sum of 1/(2ⁿ − 1) have values no integral seems to reach, so integrals do not give every transcendental number.
basis: the full text

## Before you start

This is a five-page note from 1775 with no proofs, and the feeling it may raise is doubt: is an old paper of guesses worth your time when harder things wait? You are allowed to feel that, and to read it anyway. If you like to see how a master decides what counts as "known", this is a clear sample. It is short enough to read whole in one sitting, so simply enjoy the numbers. There is nothing here to finish beyond that.

## The story

In Euler's time, transcendental quantities came from integrals. The integral of dx/x gives logarithms. The integral of dx/(1 + x<sup>2</sup>) gives circular arcs. Arc lengths of conic sections give more. It was common to regard integral formulas as the only source of transcendental quantities. Euler disagrees. He writes down series that are easy to compute to many decimals, yet he sees no way to express their sums by any integral. His first example is 1 + 1/3 + 1/7 + 1/15 + 1/31 + ..., with denominators one less than powers of two. His second kind is power series with gaps, such as 1 + x + x<sup>3</sup> + x<sup>6</sup> + x<sup>10</sup> + ..., where the exponents are triangular numbers. He concludes that there are countless kinds of transcendental quantity beyond those that integrals give. He proves none of this. The paper is a list of well-chosen examples and a judgement.

## Main definitions

**Integral formula.** An expression of a quantity as the integral of an algebraic function, or as the area under a curve (a quadrature). For Euler, logarithms, circular arcs and elliptic arc lengths are quantities of this kind.

**The series of powers of two less one.** The sum 1 + 1/3 + 1/7 + 1/15 + 1/31 + 1/63 + ..., whose n-th term is 1/(2<sup>n</sup> − 1).
- Variant: the curve y = 1/(1 + x) + 1/(2 + x) + 1/(4 + x) + 1/(8 + x) + ..., and the same with a general number a in place of 2.

**Series with gaps.** A power series y = A x<sup>α</sup> + B x<sup>β</sup> + C x<sup>γ</sup> + ... whose exponents do not form an arithmetic progression.
- Main case: y = 1 + x + x<sup>3</sup> + x<sup>6</sup> + x<sup>10</sup> + x<sup>15</sup> + ..., with triangular exponents.

## Main results

**Claim (the first series; Section 2).** The sum of the series with terms 1/(2<sup>n</sup> − 1) is about 1.606695152. Euler asserts that it is neither rational nor an irrational of the algebraic kind, and that it seems to be no logarithm or circular arc. He gives no proof.
- Step: he expands each term as a geometric series and regroups, which gives series whose terms have exponents x<sup>2</sup>, x<sup>2</sup> + x, x<sup>2</sup> + 2x and so on. These he cannot sum either.

**Claim (the curve; Sections 3 and 4).** For y = 1/(1 + x) + 1/(2 + x) + 1/(4 + x) + ..., the value at x = 0 is 2, and the curve has infinite ordinates at x = −1, −2, −4, −8, .... With a in place of 2 the value at 0 is a/(a − 1), and with alternating signs it is a/(a + 1). Euler states that every other ordinate seems highly transcendental, and that no differential or integral equation describes the curve.

**Claim (the triangular series; Sections 5 to 7).** At x = 1/10 the series 1 + x + x<sup>3</sup> + x<sup>6</sup> + ... equals 1.1010010001..., and at x = 1/2 it is about 1.64163256066. Euler states that no integral formula gives its sum. He adds that a finite expression for the sum would open a proof of Fermat's theorem that every whole number is a sum of three triangular numbers: one would show that the cube of the series contains every power of x.

**Claim (the general statement; Sections 8 and 9).** Euler asserts that a series with exponents not in arithmetic progression never has a sum expressible in finite terms by quadratures, whatever the coefficients. So there are innumerable kinds of transcendental quantity that do not reduce to those from integrals. This is stated as a conviction, not proved.

## Note, then ignore

- "Cannot" means "I see no way". The title's claim is Euler's belief from failed attempts. The note has no impossibility proof. Keep that in mind and read on.
- The integral sign in Section 2. In the regrouped formula Euler uses the sign ∫ to mean a sum over the index x. It is not an integral there. Safe to skip on a first reading.
- Decimal commas and xx. The translation keeps Euler's "1,606695152" and "xx" for x<sup>2</sup>. Safe to skip.
- The translator's footnote. Jordan Bell notes that the integral in Section 1 is an elliptic integral and points to Euler's paper E273. Safe to skip.
- Catalogue number. This is E565 in the Eneström index, presented in 1775 and printed in 1784. Safe to skip.

## One next step

Open the paper and read only Section 2, on pages 1 and 2, then check the first three decimals of 1.606 by adding the first twelve terms on a calculator.

source: https://www.math.columbia.edu/~goldfeld/BumpGoldfeld.pdf
slogan: The zeta function of a totally real cubic field has a constant Laurent term given by integrating an explicit GL(3) function over the units' torus.
basis: the full text

## Before you start

This note is seven pages, and it leans on Eisenstein series for SL(3, ℤ) and on the Rankin–Selberg method. If you have not met those, you may feel a small shame at reading formulas you cannot yet derive. That feeling is allowed. The note itself calls its proof "purely computational" and gives almost none of it. What you can take away is a pattern: zeta of a field equals an Eisenstein series summed or integrated over special points. If that pattern appeals to you, read for the pleasure of seeing it three times in a row.

## The story

Kronecker found the constant term of the SL(2, ℤ) Eisenstein series at its pole: it is the logarithm of the Dedekind eta function. The zeta function of an imaginary quadratic field is a finite sum of that Eisenstein series over Heegner points, so its constant term is a sum of log|η|. Hecke did the same for real quadratic fields, with the sum replaced by an integral over a closed cycle. People wanted cubic fields next. The block: the natural integral of an SL(3, ℤ) Eisenstein series over the units' torus does not split off the zeta function of an ideal class. Bump and Goldfeld's idea is to recognise that integral as a Rankin–Selberg convolution on GL(2), in two complex variables. Comparing Laurent expansions at the origin then gives the formula.

## Main definitions

**Completed Eisenstein series E\*(z, s).** For z = x + iy in the upper half plane, E(z, s) is half the sum of y<sup>s</sup>/|cz + d|<sup>2s</sup> over coprime integer pairs (c, d), and E\*(z, s) = π<sup>−s</sup> Γ(s) ζ(2s) E(z, s). It satisfies E\*(z, s) = E\*(z, 1 − s).
- Kronecker: near s = 0, E\*(z, s) = −1/(2s) + γ/2 − log(2√(πy)) − 2 log|η(z)| + O(s).

**Epstein zeta function on SL(3).** For a positive definite 3 × 3 symmetric matrix S, ζ<sub>S</sub>(ν<sub>1</sub>, ν<sub>2</sub>) is a completed double sum of S[ξ]<sup>−3ν<sub>1</sub>/2</sup> S[η]<sup>−3ν<sub>2</sub>/2</sup> over non-zero integer vectors ξ, η with ξ·η = 0. It is an Eisenstein series for SL(3, ℤ) in two variables.

**Heegner cycle of a cubic field.** Let K be a totally real cubic field of discriminant D, and 𝔞 an ideal with ℤ-basis α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub>. Form the matrix g(t<sub>1</sub>, t<sub>2</sub>) of the three real embeddings of the basis, scaled by D<sup>−1/6</sup> N𝔞<sup>−1/3</sup> and by the diagonal (t<sub>1</sub>, t<sub>2</sub>, 1/(t<sub>1</sub>t<sub>2</sub>)). The unit group U acts on (t<sub>1</sub>, t<sub>2</sub>), and the cycle is (ℝ<sub>+</sub>)<sup>2</sup>/U.
- Quadratic analogue: one parameter t and a closed curve ℝ<sub>+</sub>/U.

**The function c(g).** An explicit SL(3, ℤ)-automorphic function on GL(3, ℝ), written in Iwasawa coordinates. It combines γ, logarithms of y<sub>1</sub>, y<sub>2</sub>, a value of E\*(τ<sub>2</sub>, 3/2), and a sum over coprime (c, d) of η̂(z) = log|η(z)| + πy/12. It is a Laurent coefficient of ζ<sub>S</sub> at ν<sub>1</sub> = ν<sub>2</sub> = 0.

## Main results

**Theorem (cubic limit formula; Theorem 3.1).** Let K be a totally real cubic field with regulator R and discriminant D. Then near s = 0, as printed in the note, π<sup>−3s/2</sup> Γ(s/2)<sup>3</sup> D<sup>s/2</sup> ζ<sub>K</sub>(s, 𝔞) = −4R/s + L<sub>A</sub> + ..., where L<sub>A</sub> = −12 ∫∫ c(g(t<sub>1</sub>, t<sub>2</sub>)) dt<sub>1</sub>dt<sub>2</sub>/(t<sub>1</sub>t<sub>2</sub>) over (ℝ<sub>+</sub>)<sup>2</sup>/U.
- Step 1: integrate ζ<sub>S(t)</sub>(ν<sub>1</sub>, ν<sub>2</sub>) over the Heegner cycle and apply the identity below.
- Step 2: compare Laurent expansions of both sides at ν<sub>1</sub> = ν<sub>2</sub> = 0.

**Theorem (the key identity; equation (10)).** The integral of ζ<sub>S(t<sub>1</sub>,t<sub>2</sub>)</sub>(ν<sub>1</sub>, ν<sub>2</sub>) over (ℝ<sub>+</sub>)<sup>2</sup>/U equals 1/12 times the integral over SL(2, ℤ)\\H of E\*<sub>K</sub>(z, ν; 𝔞) E\*(z, s) dx dy/y<sup>2</sup>, after a linear change of variables between (ν<sub>1</sub>, ν<sub>2</sub>) and (s, ν). Here E\*<sub>K</sub> is a Hilbert modular Eisenstein series for K restricted to the diagonal.
- The right side diverges as written. Zagier's regularised Rankin–Selberg method gives it meaning.
- The note states this identity without proof.

**Claim (generalisation; introduction).** The authors expect the method to extend to GL(n) and fields of degree n. They present this as work still to be done.

## Note, then ignore

- Heegner points for negative discriminant. The quadratic sum runs over reduced forms b<sup>2</sup> − 4ac = −D, with a factor depending on the number w of roots of unity. It is background. Safe to skip on a first reading.
- Six polar lines. Zagier's convolution has poles on six lines in the (s, ν) plane forming a hexagon. Their symmetries explain extra functional equations. Safe to skip.
- The dual basis. The definition of the cycle uses a basis of (𝔞𝔡)<sup>−1</sup> dual under the trace form, where 𝔡 is the different. It enters only the unfolded integral. Safe to skip.
- Origin of the identity. The authors report a remark of Kudla that it comes from a see-saw dual pair in Sp(6). The note does not develop this. Safe to skip.
- Typographical slips. The text has a few misprints, and the PDF is a short announcement. Check signs and constants against a published version before you use them. Safe to skip for the story.

## One next step

Open the PDF at page 2 and read equation (1), Kronecker's expansion, and the paragraph after equation (2).

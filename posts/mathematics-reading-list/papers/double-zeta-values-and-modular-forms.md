source: https://people.mpim-bonn.mpg.de/zagier/files/mpim/05-96/fulltext.pdf
slogan: Each cusp form of weight k forces a linear relation among double zeta values with odd arguments, so modular forms count the relations.
basis: the introduction and the main theorem statements

## Before you start

The feeling to expect is fatigue at formulas. The introduction states seven theorems and several identities with binomial coefficients and Bernoulli numbers, and the eye starts to slide. That is a normal reaction to dense indices, and you may let it be there. If you want to see modular forms turn up in a place with no upper half-plane in sight, this paper gives a clean case. Enjoy the weight 12 example first. The rest can come later, or not.

## The story

Double zeta values ζ(r, s) = Σ 1/(m<sup>r</sup>n<sup>s</sup>), summed over m > n > 0, satisfy many linear relations. Two easy families, the double shuffle relations, come from multiplying ζ(r)ζ(s) in two ways. Nobody can prove these are all the relations, since even irrationality is out of reach. So the authors study a formal vector space D<sub>k</sub> with the double shuffle relations built in.

In D<sub>k</sub> the symbols with both arguments odd form a basis. For real double zeta values this fails, first in weight 12: 28ζ(9, 3) + 150ζ(7, 5) + 168ζ(5, 7) = (5197/691)ζ(12). Weight 12 is where the first cusp form lives. The link is period polynomials. Each one produces a relation. Double Eisenstein series, which satisfy the same double shuffle relations, explain why.

## Main definitions

**Formal double zeta space D<sub>k</sub>.** The ℚ-vector space on symbols Z<sub>r,s</sub>, P<sub>r,s</sub> (r + s = k, r, s ≥ 1) and Z<sub>k</sub>, modulo the double shuffle relations. The symbols stand for ζ(r, s), ζ(r)ζ(s) and ζ(k).
- First relation: Z<sub>r,s</sub> + Z<sub>s,r</sub> = P<sub>r,s</sub> − Z<sub>k</sub>.
- Second relation: a sum of Z<sub>r,s</sub> with binomial coefficients equals P<sub>i,j</sub>, from a partial fraction expansion.

**Period polynomials W<sub>k</sub>.** Homogeneous polynomials P(X, Y) of degree k − 2 with P(X, Y) + P(−Y, X) = 0 and P(X, Y) + P(X − Y, X) + P(Y, Y − X) = 0. By Eichler, Shimura and Manin, the symmetric part W<sub>k</sub><sup>+</sup> matches the cusp forms S<sub>k</sub> and the antisymmetric part W<sub>k</sub><sup>−</sup> matches all modular forms M<sub>k</sub>, over ℂ.

**Double Eisenstein series.** G<sub>r,s</sub>(τ) = Σ 1/(m<sup>r</sup>n<sup>s</sup>) over lattice points m, n ∈ ℤτ + ℤ with m ≻ n ≻ 0 in a fixed ordering. It converges absolutely for r ≥ 3, s ≥ 2.

## Main results

**Theorem (sum formula in ratio 3 to 1; Theorem 1).** For even k > 2, in D<sub>k</sub> the sum of Z<sub>r,k−r</sub> over even r from 2 to k − 1 equals (3/4)Z<sub>k</sub>, and the sum over odd r equals (1/4)Z<sub>k</sub>.

**Theorem (odd basis; Theorem 2).** For even k > 2, the Z<sub>r,k−r</sub> with r odd, 0 &lt; r &lt; k, form a basis of D<sub>k</sub>.
- Step 1: rewrite the defining relations as an action of the group ring of PSL(2, ℤ) on polynomials.
- Step 2: read off explicit formulas for the even-argument symbols in terms of the odd ones.

**Theorem (relations from cusp forms; Theorem 3, rough statement).** The real numbers ζ(odd, odd) of even weight k satisfy at least dim S<sub>k</sub> linearly independent relations. The full version sends each polynomial in W<sub>k</sub><sup>−</sup>, injectively, to a relation among Z<sub>odd,odd</sub>, P<sub>even,even</sub> and Z<sub>k</sub>. I read only the rough statement and the examples.
- Step 1: prove the relation in the formal space D<sub>k</sub>.
- Step 2: Euler's formula makes every ζ(even)ζ(even) a rational multiple of π<sup>k</sup>, which removes the P terms for real values.

**Theorem (products of Eisenstein series; Theorem 5).** The subspace of D<sub>k</sub> spanned by the P<sub>r,s</sub> with r, s even is canonically isomorphic to the space of weight k modular forms with rational coefficients. The map sends P<sub>r,s</sub> to (2πi)<sup>−k</sup>G<sub>r</sub>G<sub>s</sub> and Z<sub>k</sub> to (2πi)<sup>−k</sup>G<sub>k</sub>, with a derivative correction when r or s is 2.

## Note, then ignore

- Formal versus real. Theorem 2 holds in D<sub>k</sub> and fails for real double zeta values, while Theorem 3 holds for real values and fails in D<sub>k</sub>. This is the point of the paper, but the bookkeeping is safe to skip on a first reading.
- The index r = 1. The formal space allows r = 1, where the real series diverges, and a free constant κ fills the gap. Safe to skip.
- Weight 2. G<sub>2</sub> is only quasimodular, so products with G<sub>2</sub> need a derivative term. Safe to skip.
- Completeness is conjectural. The authors expect no further relations among ζ(odd, odd), with numerical support up to weight 16. It is not proved. Safe to skip.
- Combinatorial double Eisenstein series. Theorems 6 and 7 split the Fourier expansion of G<sub>r,s</sub> into three parts and extend it to missing indices. Safe to skip.

## One next step

Open the PDF at page 2 and read only the Example after Theorem 3, the weight 12 identity (8), then check its coefficients 28, 150, 168 against relation (9) on page 3.

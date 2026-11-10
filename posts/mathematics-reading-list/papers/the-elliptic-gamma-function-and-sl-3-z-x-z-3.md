source: https://arxiv.org/pdf/math/9907061
slogan: The elliptic gamma function obeys three-term modular relations under SL(3,ℤ), so it behaves like a modular form one cohomological degree higher.
basis: the introduction and the main theorem statements

## Before you start

The title joins a special function to a group that looks too large for it, and the paper has roots in statistical mechanics and qKZB equations. The likely feeling is doubt that you belong in the room without that physics. You can have that doubt and still read. Nothing in the first four sections needs more than infinite products and Liouville's theorem. If you like how theta functions transform, here it happens one step up. Read for the pleasure of one identity.

## The story

Euler's gamma function solves Γ(z + 1) = z Γ(z). Replace the factor z by a theta function θ<sub>0</sub>(z, τ) and the step 1 by σ, and the solution is the elliptic gamma function Γ(z, τ, σ), a double infinite product introduced by Ruijsenaars. It has three periods: 1, τ and σ. A theta function has two and transforms under SL(2,ℤ), so ask what Γ does under SL(3,ℤ). The obstacle is that Γ does not simply pick up a factor. The authors find that three gamma functions, with periods permuted by SL(3,ℤ), multiply to the exponential of a cubic polynomial. Then they explain the shape. A two-term relation is a 1-cocycle. A three-term relation is a 2-cocycle. So Γ is an "automorphic form of degree 1", tied to a class in H<sup>3</sup> of the group.

## Main definitions

**Theta function θ<sub>0</sub>.** For Im τ > 0, θ<sub>0</sub>(z, τ) is the product over j ≥ 0 of (1 − e<sup>2πi((j+1)τ − z)</sup>)(1 − e<sup>2πi(jτ + z)</sup>). It equals Jacobi's odd theta function up to an elementary factor.
- θ<sub>0</sub>(z + 1, τ) = θ<sub>0</sub>(z, τ) and θ<sub>0</sub>(z + τ, τ) = −e<sup>−2πiz</sup> θ<sub>0</sub>(z, τ).

**Elliptic gamma function.** For Im τ, Im σ > 0, Γ(z, τ, σ) is the product over j, k ≥ 0 of (1 − e<sup>2πi((j+1)τ + (k+1)σ − z)</sup>) / (1 − e<sup>2πi(jτ + kσ + z)</sup>). It is meromorphic in z with simple zeros and poles, and symmetric in τ and σ.
- Zeros at z = (j+1)τ + (k+1)σ + l, poles at z = −jτ − kσ + l, for j, k ≥ 0 and l ∈ ℤ.

**Automorphic form of degree 1.** Let a group G act on a complex manifold, N be the group of meromorphic functions and M a subgroup of nowhere-vanishing ones. A degree 0 form is a function u with δu a 1-cocycle in M. A degree 1 form is a 1-cochain u: G → N whose class in N/M is a cocycle, so δu is a 2-cocycle in M.
- Degree 0 example: θ<sub>0</sub> for G = SL(2,ℤ) ⋉ ℤ<sup>2</sup>.

## Main results

**Theorem (characterisation; Theorem 1.1).** Let Im τ, Im σ > 0. Then u(z) = Γ(z, τ, σ) is the unique meromorphic solution of u(z + σ) = θ<sub>0</sub>(z, τ) u(z) that has period 1, is holomorphic for Im z > 0, and has u((τ + σ)/2) = 1.
- Step 1: the product satisfies the equation by a direct check.
- Step 2: the ratio of two solutions is doubly periodic and entire, so Liouville's theorem makes it constant.

**Theorem (modular relations; Theorem 4.1).** Suppose τ, σ, σ/τ and τ + σ all lie in ℂ − ℝ. Then Γ(z, τ + 1, σ) = Γ(z, τ, σ), and Γ(z, τ + σ, σ) = Γ(z, τ, σ) / Γ(z + τ, τ, σ + τ), and Γ(z/σ, τ/σ, −1/σ) = e<sup>iπQ(z; τ, σ)</sup> Γ((z − σ)/τ, −1/τ, −σ/τ) Γ(z, τ, σ). Here Q is an explicit polynomial of degree 3 in z with coefficients rational in τ and σ.
- Step 1: the ratio of the two sides is a meromorphic function of z with three periods, so it is constant.
- Step 2: evaluate at a special point to find the constant.

**Theorem (cohomological meaning; Theorem 7.2).** Let G = SL(3,ℤ) ⋉ ℤ<sup>3</sup> act on ℂ × ℂ<sup>3</sup>. Take M to be the functions exp(2πi f) with f a polynomial in z/x<sub>3</sub> whose coefficients are rational functions of x<sub>1</sub>/x<sub>3</sub>, x<sub>2</sub>/x<sub>3</sub>. Assign gamma functions to two elementary matrices, a theta function to one translation, and 1 to the other generators. These values extend to a 1-cocycle u: G → N/M, and its class in H<sup>1</sup>(G, N/M) is non-trivial.
- The proof checks each relation in a presentation of G against the identities for Γ and θ<sub>0</sub>.
- Non-triviality: restricted to ℤ<sup>3</sup>, the class δ[u] ∈ H<sup>2</sup>(G, M) maps to a non-trivial class in H<sup>3</sup>(ℤ<sup>3</sup>, 2πiℤ).

**Theorem (limits; Theorems 3.5 and 5.2 to 5.5).** Γ has a limit as τ approaches, from either side, any point of a full-measure subset of the real axis that contains all irrational algebraic numbers. When the periods become linearly dependent over ℚ, limiting forms of the modular relations involve Euler's dilogarithm. I did not read the precise statements of 5.2 to 5.5.

## Note, then ignore

- Extension to ℂ − ℝ. Reflection rules such as Γ(z, −τ, σ) = 1/Γ(z + τ, τ, σ) define Γ off the upper half planes, so SL(3,ℤ) can act. The identities survive, but the list of zeros and poles does not. Safe to skip on a first reading.
- Invertible analytic functions. In Section 7 a "function" is defined only on a dense open set, because Γ is not defined for real periods. Safe to skip.
- The polynomial Q. Its coefficients are written out in Theorem 4.1. Only its degree matters for the story. Safe to skip.
- Trigonometric and rational limits. Section 3.2 recovers Jackson's q-gamma function and then Euler's. This is a consistency check on the name. Safe to skip.
- The D<sub>4</sub> subgroup. Proposition 7.4 shows the class is already non-trivial on SL(3,ℤ) by restricting to a dihedral subgroup. Safe to skip.

## One next step

Open the paper at page 2 and read the displayed identity that begins Γ(z/σ, τ/σ, −1/σ), then the paragraph after it.

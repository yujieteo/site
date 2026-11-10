source: https://arxiv.org/pdf/2411.06763
slogan: A limit of ratios of q-Pochhammer products at a real quadratic number gives the square root of a Stark invariant, sign included.
basis: the introduction and the main theorem statements

## Before you start

The paper is 80 pages long, with a notation list, ray classes of non-maximal orders and a Hebrew letter for its main function. The likely feeling is fear of drowning in bookkeeping before any idea shows up. That fear is fair, and you can keep it while you read. If you want to see what an explicit class field theory for real quadratic fields could look like, the first six pages already show it. Read those for pleasure. The rest can wait.

## The story

For an imaginary quadratic field, values of modular functions at quadratic points generate abelian extensions. Many of those functions are ratios of q-Pochhammer products, such as eta and theta quotients. For a real quadratic field the quadratic points sit on the real line, where these products stop converging. Stark predicted that the units still exist: exponentials of derivatives of partial zeta functions at s = 0. Shintani gave a formula for them, built from double sine functions and a continued fraction. Kopp's idea is to study the factor by which a q-Pochhammer product changes under a modular substitution. That factor is a cocycle, and it continues to part of the real line. The cocycle rule makes Shintani's long product telescope to one value at a real quadratic point.

## Main definitions

**q-Pochhammer symbol.** For |q| &lt; 1, set (w, q)<sub>∞</sub> = ∏<sub>k≥0</sub> (1 − wq<sup>k</sup>). Write e(z) = e<sup>2πiz</sup>.

**Shintani-Faddeev modular cocycle.** Fix r = (r<sub>1</sub>, r<sub>2</sub>) in ℚ<sup>2</sup> and let Γ<sub>r</sub> be the group of A in SL<sub>2</sub>(ℤ) with Ar − r in ℤ<sup>2</sup>. For A in Γ<sub>r</sub> and τ in the upper half plane, the "shin" function is the ratio (w̃, q̃)<sub>∞</sub> / (w, q)<sub>∞</sub>, where q = e(τ), w = e(r<sub>2</sub>τ − r<sub>1</sub>), and q̃, w̃ are the same expressions with τ replaced by A·τ. The paper writes it with the Hebrew letter shin. Here it is S<sup>r</sup><sub>A</sub>(τ). The map A ↦ S<sup>r</sup><sub>A</sub> is the cocycle.
- Continuation: for A with lower row (c, d) and c &gt; 0, the function extends meromorphically to ℂ minus the ray (−∞, −d/c].
- Jacobi version: a function σ<sub>m,A</sub>(z, τ) of two variables, with S<sup>r</sup><sub>A</sub>(τ) = σ<sub>r,A</sub>(0, τ).

**Real multiplication (RM) value.** Let β be a real quadratic number and A a generator, with eigenvalue λ &gt; 1 on the vector (β, 1), of the stabiliser of β in Γ<sub>r</sub> (up to −I). The RM value is S<sup>r</sup><sub>A</sub>(β), the limit of S<sup>r</sup><sub>A</sub>(β + iy) as y → 0 from above.

**Differenced partial zeta function.** For a real quadratic field F, an ideal 𝔪 and a ray class 𝒜 modulo 𝔪∞<sub>2</sub>, let ζ(s, 𝒜) = Σ N(𝔞)<sup>−s</sup> over ideals 𝔞 in 𝒜. Let R be the class of principal ideals (α) with α ≡ −1 mod 𝔪 and α positive at the second real place. Then Z(s, 𝒜) = ζ(s, 𝒜) − ζ(s, R𝒜).
- Stark's prediction: exp(−Z′(0, 𝒜)) is an algebraic unit in the ray class field of F modulo 𝔪∞<sub>2</sub>.

## Main results

**Theorem (limit formula; Theorem 1.1).** Let O be an order in a real quadratic field F, 𝔪 a nonzero O-ideal, and 𝒜 a class modulo 𝔪∞<sub>2</sub> that is not a "zero class". Choose β in F and r in ℚ<sup>2</sup> from 𝒜 as the theorem prescribes, and let A be the generator above. Then exp(n·Z′(0, 𝒜)) = u · S<sup>r</sup><sub>A</sub>(β)<sup>2</sup>. Here u is an explicit root of unity, built from the multiplier characters of the Dedekind eta function and of a Jacobi theta function, evaluated at A. The constant n is explicit and depends on the fibre of 𝒜 over classes with both real places in the modulus. I did not verify its exact form.
- Step 1: write Shintani's formula as a product of double sine values along a continued fraction of Hirzebruch-Jung type.
- Step 2: use the cocycle rule to telescope the product, then track the phases.

**Corollary (positivity; Corollary 1.2).** For β and A as above, the product u · S<sup>r</sup><sub>A</sub>(β)<sup>2</sup> is a positive real number. So S<sup>r</sup><sub>A</sub>(β) itself is a square root with a definite sign, and that sign is a new invariant of the class.

**Theorem (conditional algebraicity; Theorem 1.3).** Assume Conjecture 6.9 of the paper, which follows from Tate's refinement of the Stark conjectures. Let β be a real root of an integer quadratic with non-square discriminant. Then some power of the RM value at β is an algebraic unit in an abelian extension of ℚ(β).
- Fundamental discriminant: the first power already works, and the RM value times its root of unity lies in a ray class field that the paper names.

**Conjecture (Conjecture 1.4).** The fundamental discriminant hypothesis is not needed: the RM value is always an algebraic unit in an abelian extension of ℚ(β).

## Note, then ignore

- Orders that are not maximal. The paper works with ray class groups and a "flat imprimitive ray class monoid" of any order O, because the application needs them. Take O to be the full ring of integers on a first reading.
- The two roots of unity. The characters ψ and χ<sub>r</sub> come from eta and theta transformation laws and need the metaplectic group to define. They only fix a phase. Safe to skip.
- Two cohomological readings. Section 5 puts the cocycle in an equivariant cohomology group of sheaves. Section 4 gives a working definition that is enough. Safe to skip.
- SIC-POVMs. The sign of the square root matters for an application to quantum information in a companion paper. Safe to skip here.

## One next step

Open the paper at Section 1.1 on page 3 and read the product formula for σ and the definition of the shin function, about one page.

source: https://arxiv.org/pdf/1009.1769
slogan: Deforming max-plus addition by the entropy function gives back ordinary addition, so tropical arithmetic can be quantised the way Witt vectors lift characteristic p.
basis: the introduction and the main theorem statements

## Before you start

"Characteristic one" sounds like a joke or a provocation, and the author is Alain Connes. A likely feeling is suspicion mixed with intimidation: is this real, and am I equipped for it? Both halves are welcome. The core of the paper is a functional equation you can check with a pencil. You may want to see why algebra alone forces entropy on you. Play with the formula first. The rest of the paper will keep.

## The story

Witt vectors rebuild the p-adic integers from the finite field 𝔽<sub>p</sub>. The Teichmüller lift τ is multiplicative but not additive. A formula going back to Teichmüller writes τ(x) + τ(y) as a sum of terms w<sub>p</sub>(α) x<sup>α</sup> y<sup>1−α</sup> with universal coefficients. Connes wants the same when 1 + 1 = 1, as in the non-negative reals with max as addition. There, fractional powers x ↦ x<sup>α</sup> are automorphisms. He asks which coefficients w(α) make the deformed sum associative. Under a positivity condition the answer is unique up to one parameter ρ: w(α) = ρ<sup>S(α)</sup>, where S is the entropy function. With ρ = e<sup>T</sup> the deformed sum of x and y is (x<sup>1/T</sup> + y<sup>1/T</sup>)<sup>T</sup>. As T → 0 this tends to max(x, y), so T behaves like Planck's constant.

## Main definitions

**Semi-ring of characteristic one (Definition 4.1).** A semi-ring R in which 1 + 1 = 1. Then a + a = a for all a, and R carries a partial order: x ≤ y when x + y = y.
- Smallest case: 𝔹 = {0, 1}.
- Main case: ℝ<sub>+</sub><sup>max</sup>, the set [0, ∞) with the usual product and x + y = max(x, y).

**Perfect (Definition 4.4).** A multiplicatively cancellative semi-ring R of characteristic one is perfect when x ↦ x<sup>n</sup> is surjective for every positive integer n. Then x ↦ x<sup>α</sup> is an automorphism θ<sub>α</sub> of R for every positive rational α.

**Deformed addition.** Given coefficients w(α) in the invertible elements of R, for rational α in [0, 1], with w(0) = w(1) = 1, set x +<sub>w</sub> y = Σ<sub>α</sub> w(α) x<sup>α</sup> y<sup>1−α</sup>. The sum on the right uses the idempotent addition of R, so it is a supremum.
- Commutative when w(1 − α) = w(α).
- Associative when a certain three-variable function built from w is symmetric (equation 11 of the introduction).

**Entropy function.** S(α) = −α log α − (1 − α) log(1 − α) for α in [0, 1].

## Main results

**Theorem (all solutions; Theorem 5.2).** Let G be a uniquely divisible abelian group, written multiplicatively. For any homomorphism χ from the positive rationals to G, the function w(α) = χ(α)<sup>α</sup> χ(1 − α)<sup>1−α</sup> satisfies the commutativity and associativity equations. Every solution has this form.
- So without an order, one may choose χ(p) freely at each prime p.

**Theorem (entropy is forced; Theorem 5.3).** Suppose w satisfies the two equations and w(α) ≥ 1 for all rational α in (0, 1). Then there is ρ ≥ 1 in G with w(α) = ρ<sup>S(α)</sup>. The introduction adds the hypothesis that the θ<sub>α</sub> extend by continuity to real exponents, which gives meaning to ρ raised to a real power.
- Step 1: take logarithms. The equations become an additive functional equation for s = log w.
- Step 2: the inequality s ≥ 0 then forces the entropy form.

**Theorem (the functor W; Theorems 6.11 and 6.15).** Let R be a multiplicatively cancellative perfect semi-ring of characteristic one and ρ > 1 an invertible element. Then W(R, ρ) is an algebra over ℝ, and its completion is a unital real Banach algebra, functorial in (R, ρ).
- Step 1: complete R for a ρ-adic distance, then replace the addition by +<sub>w</sub> with w = ρ<sup>S</sup>. Here ρ<sup>a</sup> +<sub>w</sub> ρ<sup>b</sup> = ρ<sup>c</sup> with c = log(e<sup>a</sup> + e<sup>b</sup>).
- Step 2: symmetrise, as one passes from ℕ to ℤ, to get a ring from a semi-ring.

**Theorem (the tropical case; Corollary 7.2, Proposition 7.5).** For R = ℝ<sub>+</sub><sup>max</sup> and ρ = e<sup>T</sup>, the deformed sum of constants is x<sub>1</sub> +<sub>w</sub> ⋯ +<sub>w</sub> x<sub>n</sub> = (Σ x<sub>j</sub><sup>1/T</sup>)<sup>T</sup>. The map f ↦ f(T)<sup>1/T</sup> is a homomorphism to functions of T with pointwise sum and product. It sends the Teichmüller lift of x to T ↦ x<sup>1/T</sup>.

## Note, then ignore

- Cancellative hypothesis. It guarantees that x ↦ x<sup>n</sup> is injective, so fractional powers are well defined. Safe to take on trust.
- Symmetrisation. Passing from a semi-ring to a ring takes a formal construction with pairs, treated in Section 4.2. It is routine. Skip it at first.
- Section 3. It reviews strict p-rings and computes the coefficients w<sub>p</sub>(α) in 𝔽<sub>p</sub>[[T]]. It is motivation only, and the characteristic one results do not depend on it.
- The extension ℝ<sup>un</sup>. Section 7 offers a first hint of an analogue of the maximal unramified extension, and no definition. The link to functional integrals is a conjecture. Read it as a programme.
- Divergent series. Borel summation enters in Section 7.6 to handle elements given by asymptotic series in T. Safe to skip.

## One next step

Open the introduction and read equations (19) to (21) on page 4. Then check on paper that (x<sup>1/T</sup> + y<sup>1/T</sup>)<sup>T</sup> tends to max(x, y) as T → 0.

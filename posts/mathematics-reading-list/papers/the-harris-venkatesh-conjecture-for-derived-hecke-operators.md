source: https://arxiv.org/pdf/2305.08956
slogan: For imaginary dihedral weight 1 forms, one unit gives both the Petersson norm over ℝ and the derived Hecke action mod p.
basis: the introduction and the main theorem statements

## Before you start

The title alone names two conjectures and a "part II", so the natural feeling is that you have arrived late and should have read three other things first. You can feel behind and still read this. The introduction restates both conjectures in two pages. If you are curious how a real number (a logarithm of a unit) and a residue mod p can be shadows of one algebraic object, this is a concrete case. Read for that one idea and let the rest go by for now.

## The story

A weight 1 newform f has a 2-dimensional Galois representation ρ<sub>f</sub> with finite image. Two conjectures attach units to its adjoint Ad(ρ<sub>f</sub>). Stark's conjecture says the leading term L′(Ad(ρ<sub>f</sub>), 0) is a regulator of a unit. Stark observed that the Petersson norm of f is proportional to this value. The Harris-Venkatesh conjecture is newer. Weight 1 forms live in both H<sup>0</sup> and H<sup>1</sup> of the same line bundle, and derived Hecke operators T<sub>p,N</sub> shift degree from one to the other with coefficients mod p − 1. The conjecture says their action is given by a global unit reduced mod p. Both are known when f is imaginary dihedral. Gross asked whether the two units agree. Zhang proves they do, using a two-variable Siegel-Weil formula for Eisenstein series.

## Main definitions

**Imaginary dihedral form.** A weight 1 newform f for Γ<sub>1</sub>(N) whose representation ρ<sub>f</sub> is induced from a character of the Galois group of an imaginary quadratic field K.

**Unit group U(Ad(ρ<sub>f</sub>)).** Let E/ℚ be a finite Galois extension through which Ad(ρ<sub>f</sub>) factors, and M a certain lattice in Ad(ρ<sub>f</sub>). Then U(Ad(ρ<sub>f</sub>)) is the module of Gal(E/ℚ)-equivariant maps from M to the units of E, tensored with ℤ[χ<sub>ρ<sub>f</sub></sub>]. It has rank 1 over ℤ[χ<sub>ρ<sub>f</sub></sub>] and does not depend on E.
- Real regulator: evaluation at an archimedean place gives a map to ℝ ⊗ ℚ[χ<sub>ρ<sub>f</sub></sub>].
- Mod p regulator: for p not dividing 6N, evaluation at a place above p gives a map to 𝔽<sub>p</sub><sup>×</sup> tensored with ℤ[χ<sub>ρ<sub>f</sub></sub>, 1/6N].

**Harris-Venkatesh norm.** For a prime p not dividing 6N, take f(z)f\*(pz), trace it down to Γ<sub>0</sub>(p), and apply the Shimura class, a homomorphism from weight 2 cusp forms for Γ<sub>0</sub>(p) to 𝔽<sub>p</sub><sup>×</sup> ⊗ ℤ[1/6]. The result measures the derived Hecke operator T<sub>p,N</sub> applied to f.

## Main results

**Theorem (one unit for both; Theorem 1).** Let f be an imaginary dihedral newform of weight 1 and level N. There is a unit u<sub>f</sub> in U(Ad(ρ<sub>f</sub>)) ⊗ ℚ, unique up to roots of unity, such that (a) the squared Petersson norm of f equals the real regulator of u<sub>f</sub>, compatibly with Aut(ℂ) acting on f, and (b) for every sufficiently large prime p, the Harris-Venkatesh norm of f equals the mod p regulator of u<sub>f</sub>.
- Step 1: the Siegel-Weil formula computes Rankin-Selberg periods of theta series (the "optimal forms" of part I), and this produces units satisfying (b).
- Step 2: the Kronecker limit formula and a refined Stark formula (Proposition 5) identify the unit as an explicit elliptic unit.

**Theorem (two-variable Siegel-Weil; Theorem 4).** Let E<sub>s</sub> = Σ<sub>n≥−1</sub> E<sub>n</sub>s<sup>n</sup> be the Eisenstein series on PGL<sub>2</sub> with its Laurent expansion, and Θ\* the dual theta lift from PGL<sub>2</sub> to PGL<sub>2</sub> × PGL<sub>2</sub>. Then Θ\*(E<sub>s</sub>) = E<sub>s</sub> ⊗ E<sub>s</sub>, and so Θ\*(E<sub>n</sub>) = Σ<sub>i+j=n</sub> E<sub>i</sub> · E<sub>j</sub> for n ≥ −1. One special case is Θ\*(1) = 1 ⊗ E<sub>0</sub> + E<sub>0</sub> ⊗ 1.

**Proposition (refined Stark formula; Proposition 5).** For an imaginary quadratic field K and a ring class character ξ of conductor c > 1, L′(ξ, 0) = −log(u<sub>ξ</sub>) / (6m(ξ)), where u<sub>ξ</sub> is an explicit elliptic unit from part I.

**Conjecture (unified Stark; Conjecture 6).** The statement of Theorem 1 holds for every weight 1 newform, including the exotic ones with projective image A<sub>4</sub>, S<sub>4</sub> or A<sub>5</sub>.

## Note, then ignore

- "Sufficiently large p". Small primes are excluded, and the Harris-Venkatesh conjecture allows multiplying by an integer m to absorb them. Part III of the series pins down the bound. Safe to skip.
- Proportionality constants. The Petersson norm and L′(Ad(ρ<sub>f</sub>), 0) differ by finitely many Euler factors, so u<sub>f</sub> and the Stark unit differ by a known ratio (Remark 2). Safe to skip.
- Conductor c > 1. Proposition 5 excludes c = 1 because ζ<sub>K</sub>(0) does not vanish. Safe to skip on a first reading.
- Serre dual form. The original conjecture is phrased with the Serre dual of the conjugate form f\*. The norm notation hides this. Safe to skip.
- Horawa's motivic version. Remark 3 restates the theorem as an action of the dual of the unit group on coherent cohomology. Skip it until you want the wider programme.

## One next step

Read Theorem 1 and Remark 2 on page 3. Together they say exactly how the theorem contains both conjectures.

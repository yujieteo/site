source: https://arxiv.org/pdf/2010.00759
slogan: Cusp forms for a lattice give operators that generate the whole commutant of the lattice acting on a holomorphic discrete series representation.
basis: the introduction and the main theorem statements

## Before you start

This paper needs three subjects at once: representations of real Lie groups, von Neumann algebras, and automorphic forms. It runs to 43 pages. The likely feeling is fear of being an outsider to at least one of the three. That is a normal reaction to a paper at a crossroads, and you can keep it with you. If you know modular forms and are curious how they can act as operators on a Hilbert space, the SL(2, ℝ) case in section 5 shows it with familiar objects. Enjoy that case first. The general case can wait.

## The story

SL(2, ℝ) acts on Hilbert spaces H<sub>m</sub> of holomorphic functions on the upper half-plane. Vaughan Jones noticed that multiplication by a cusp form f of weight p maps H<sub>m</sub> to H<sub>m+p</sub> and commutes with the action of SL(2, ℤ). So M<sub>g</sub>\*M<sub>f</sub> lies in the commutant of the group, which is a II<sub>1</sub> factor. Do these operators generate all of it? Radulescu proved yes for SL(2, ℤ) in 1994. Nothing was known for other lattices or other groups. Yang's idea is to use Berezin quantisation: turn operators into functions on the symmetric domain, and functions back into Toeplitz operators. Then the question becomes whether the functions built from pairs of cusp forms are dense among functions on the quotient. Riemann-Roch settles this for Fuchsian groups, and the Baily-Borel compactification settles it in general.

## Main definitions

**Holomorphic discrete series (L<sub>π</sub>, H<sub>π</sub>).** Let G be a connected non-compact semisimple real Lie group with maximal compact K, and π an irreducible representation of K on V<sub>π</sub>. H<sub>π</sub> is a Hilbert space of square-integrable holomorphic V<sub>π</sub>-valued functions on the bounded symmetric domain D = G/K, and G acts on it irreducibly and unitarily.
- G = SL(2, ℝ): D is the upper half-plane and the spaces are H<sub>m</sub>, m ≥ 2.

**Commutant L<sub>π</sub>(Γ)′.** For a lattice Γ in G, this is the algebra of bounded operators on H<sub>π</sub> that commute with every L<sub>π</sub>(γ), γ ∈ Γ. It is a II<sub>1</sub> factor when Γ is an ICC group (every non-trivial conjugacy class is infinite).

**Berezin symbol and Toeplitz operator.** The Berezin symbol S(A) of a bounded operator A on H<sub>π</sub> is an End(V<sub>π</sub>)-valued function on D, built from evaluation maps (Definition 3.1). In the other direction, an essentially bounded matrix-valued function f gives the Toeplitz operator T<sub>f</sub> = P<sub>π</sub>M<sub>f</sub>: multiply by f, then project back to H<sub>π</sub> (Definition 3.2).

**Operator of a cusp form.** For a cusp form f for Γ of type (ρ, V<sub>ρ</sub>), T<sub>f</sub> : H<sub>π</sub> → H<sub>ρ⊗π</sub> sends φ to the holomorphic projection of f ⊗ φ. It commutes with the actions of Γ, so T<sub>g</sub>\*T<sub>f</sub> lies in L<sub>π</sub>(Γ)′ when f and g have the same type.

## Main results

**Proposition (trace formula; Proposition 1.2).** Let F be a fundamental domain for Γ in D with invariant measure μ. The functional τ(A) = μ(F)<sup>−1</sup> ∫<sub>F</sub> tr S(A)(z) dμ(z) is a faithful normal normalised trace on L<sub>π</sub>(Γ)′. If Γ is ICC it is the unique normalised trace on this II<sub>1</sub> factor.

**Theorem (Toeplitz operators generate; Theorem 1.3).** The Toeplitz operators T<sub>f</sub>, for f an essentially bounded End(V<sub>π</sub>)-valued function on Γ∖D, generate L<sub>π</sub>(Γ)′ as a von Neumann algebra (closure in the weak operator topology).

**Theorem (Fuchsian groups; Theorem 5.1).** Let Γ be a Fuchsian subgroup of SL(2, ℝ) of the first kind, that is, a lattice, and m ≥ 2. The weak closure of the span of the operators T<sub>g</sub>\*T<sub>f</sub>, for cusp forms f, g of equal weight, is the commutant of Γ on H<sub>m</sub>.
- Step 1: T<sub>g</sub>\*T<sub>f</sub> is the Toeplitz operator of the bounded function f·ḡ·y<sup>k</sup> on the quotient.
- Step 2: Riemann-Roch on the compactified quotient surface gives enough cusp forms to separate points, so these functions are dense.

**Theorem (general lattices; Theorems 1.4 and 6.1).** Let G be the real points of a connected reductive group over ℚ, semisimple as a real Lie group with holomorphic discrete series, and Γ a lattice. The paper assumes throughout that G has no normal ℚ-subgroup of dimension 3. Then the operators T<sub>g</sub>\*T<sub>f</sub>, for holomorphic cusp forms f, g of the same type, tensored with End(V<sub>π</sub>), generate L<sub>π</sub>(Γ)′. If V<sub>π</sub> has dimension 1, the T<sub>g</sub>\*T<sub>f</sub> alone generate it.
- Step 1: reduce to showing that the functions (f, g)<sub>ρ</sub> on Γ∖D are dense.
- Step 2: use the Baily-Borel compactification and Poincaré series to separate points of the quotient.

## Note, then ignore

- Multiplication versus Toeplitz. For SL(2, ℝ) the cusp form acts by plain multiplication. For general G a cusp form need not be holomorphic and multiplication does not land in the right space, so a projection is added. Skip this distinction at first.
- Four Berezin symbols. Definition 3.1 gives K<sub>A</sub>, R(A), S(A) and Q(A). Only S(A) enters the trace formula. Ignore the others on a first reading.
- "Lattice of the first kind". For Fuchsian groups this is the same as having finite covolume. It is the hypothesis that makes the compactified quotient a compact Riemann surface.
- The dimension 3 hypothesis. It ensures the boundary of the Baily-Borel compactification has codimension at least 2. It is used in one step of section 6.
- Formal dimension. The II<sub>1</sub> factor claim needs the coupling constant to be finite. This holds for lattices and you can take it on trust.

## One next step

Open the paper at page 3 and read only the paragraph that starts "The first non-trivial example" up to Theorem 1.1.

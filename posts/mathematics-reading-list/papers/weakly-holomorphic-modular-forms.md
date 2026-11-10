source: http://shmakov.us/docs/Slides/WeaklyHolomorphic.pdf
slogan: Modular forms with poles at the cusp fill in the missing half of de Rham cohomology, so every cusp form gets a full period matrix.
basis: the full text

## Before you start

This is a slide deck of 28 pages, many of them repeats of the slide before. Slides carry no proofs and little motivation, so the likely feeling is unease at nodding along without checking anything. That unease is reasonable, and you may keep it while you read. The deck answers a question you may have had about Eichler–Shimura: where is the other half of the cohomology on the de Rham side? Read it as a picture book. The numbers on the last slides are the reward, and there is no need to verify them.

## The story

The Eichler–Shimura theorem says that cusp forms of weight k + 2 account for half of the cuspidal cohomology of SL<sub>2</sub>(ℤ) with coefficients in Sym<sup>k</sup>. Each Hecke eigenform owns a 2-dimensional piece, but the eigenform itself gives only one de Rham class. So its period matrix has an empty column. The idea is to allow poles at the cusp. Weakly holomorphic forms are too many, but Bol's operator D<sup>k+1</sup> maps weight −k to weight k + 2, and its image is exactly the surplus. The quotient is the full de Rham cohomology. For the discriminant Δ of weight 12, a second form δ = q<sup>−1</sup> + … fills the column. The four periods of Δ and δ form a matrix with determinant 10!(2πi)<sup>11</sup>.

## Main definitions

**Weakly holomorphic modular form.** A holomorphic function f on the upper half-plane that satisfies f((aτ + b)/(cτ + d)) = (cτ + d)<sup>k</sup>f(τ) for all matrices in Γ = SL<sub>2</sub>(ℤ), and whose Fourier expansion Σ a<sub>n</sub>q<sup>n</sup> has only finitely many negative powers of q. The space is M<sup>!</sup><sub>k</sub>(Γ), for any integer k.
- Subspace: S<sup>!</sup><sub>k</sub>(Γ) is cut out by a<sub>0</sub>(f) = 0.
- Structure: all weights together form the ring ℚ[E<sub>4</sub>, E<sub>6</sub>, Δ<sup>−1</sup>].

**Bol operator.** D = q ∂/∂q. It raises the weight by 2 but does not preserve modularity. For example DE<sub>4</sub> = (E<sub>2</sub>E<sub>4</sub> − E<sub>6</sub>)/3, which involves the non-modular E<sub>2</sub>.

**The bundle V<sub>k</sub>.** Let A<sub>1</sub> be the moduli stack of elliptic curves over ℚ. V is the bundle whose fibre at a curve E is H<sup>1</sup><sub>dR</sub>(E/ℚ), with its Gauss–Manin connection, and V<sub>k</sub> = Sym<sup>k</sup>V.
- Betti side: V<sub>k</sub> also denotes the local system on Γ\H from the k-th symmetric power of the standard representation of SL<sub>2</sub>.

**Period matrix.** For a cuspidal Hecke eigenform f with coefficient field K<sub>f</sub>, P<sub>f</sub> is the matrix of the comparison isomorphism from the de Rham eigenspace of f to the Betti eigenspace, in K<sub>f</sub>-bases. Its entries are ω<sup>+</sup>, iω<sup>−</sup> (periods of f) and η<sup>+</sup>, iη<sup>−</sup> (periods of a weakly holomorphic partner).

## Main results

**Theorem (Bol).** For k ≥ 0, D<sup>k+1</sup> is a ℚ-linear map M<sup>!</sup><sub>−k</sub>(Γ) → S<sup>!</sup><sub>k+2</sub>(Γ).
- Step 1: the operator d<sub>k</sub>f = (1/2πi)(∂f/∂τ + kf/(τ − τ̄)) sends real analytic modular forms of weight k to weight k + 2.
- Step 2: D<sup>k+1</sup> equals the composite d<sub>k</sub>d<sub>k−2</sub>…d<sub>−k</sub>, checked on monomials in τ − τ̄ and τ.

**Theorem (Brown–Hain).** For even k > 0 there is a canonical isomorphism M<sup>!</sup><sub>k+2</sub>(Γ)/D<sup>k+1</sup>M<sup>!</sup><sub>−k</sub>(Γ) ≅ H<sup>1</sup><sub>dR</sub>(A<sub>1</sub>, V<sub>k</sub>). The holomorphic forms M<sub>k+2</sub>(Γ) map isomorphically onto the top step F<sup>k+1</sup> of the Hodge filtration.
- Case cusp: S<sup>!</sup><sub>k+2</sub>(Γ)/D<sup>k+1</sup>M<sup>!</sup><sub>−k</sub>(Γ) is the cuspidal part, of dimension 2 dim S<sub>k+2</sub>(Γ).
- Case Eisenstein: the complement is spanned by one Eisenstein series.

**Theorem (Eichler–Shimura).** For even k > 0, M<sub>k+2</sub>(Γ) ⊗ ℂ is isomorphic to the plus part of H<sup>1</sup>(Γ, V<sub>k</sub>) ⊗ ℂ, and S<sub>k+2</sub>(Γ) ⊗ ℂ to the minus part, for the action of complex conjugation. Under the comparison with de Rham cohomology, a weakly holomorphic f goes to the cocycle γ ↦ (2πi)<sup>k+1</sup> ∫ f(τ)(X − τY)<sup>k</sup> dτ, taken from γ<sup>−1</sup>τ<sub>0</sub> to τ<sub>0</sub>.

**Theorem (Brown–Hain, determinant).** For a cuspidal Hecke eigenform f of weight k + 2, det(P<sub>f</sub>) lies in (2πi)<sup>k+1</sup>K<sub>f</sub><sup>×</sup>.
- Example: for Δ, the partner is δ = q<sup>−1</sup> + 47709536q<sup>2</sup> + …, the unique such form with a<sub>0</sub> = a<sub>1</sub> = 0 and a pole of order at most 1. The deck checks numerically that det(P<sub>Δ</sub>) = 10!(2πi)<sup>11</sup>.

## Note, then ignore

- Rational coefficients. The deck calls M<sup>!</sup><sub>k</sub> a ℚ-vector space without saying so in the definition. Read it as forms with rational Fourier coefficients. Safe to skip on a first reading.
- A misprint. The slide gives −1642 for the q<sup>4</sup> coefficient of Δ. The standard value is −1472. Nothing depends on it, so it is safe to skip.
- "Unless k = 2". The Eisenstein part has dimension 1 with a stated exception, and the slide lists the two dimensions in swapped order on the Betti side. Bookkeeping only, safe to skip.
- Ambiguity of P<sub>f</sub>. The matrix is defined up to right multiplication by lower triangular matrices over K<sub>f</sub>, because the partner form is defined modulo f and scaling. The determinant statement survives this. Safe to skip.
- Stack language. A<sub>1</sub> is a stack because elliptic curves have automorphisms. Over ℂ you can think of Γ\H. Safe to skip.

## One next step

Open the deck at the last three pages and read the Δ and δ example: the two q-expansions, the four periods, and the determinant.

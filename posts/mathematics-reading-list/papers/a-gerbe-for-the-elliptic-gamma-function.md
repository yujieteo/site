source: https://arxiv.org/pdf/math/0601337
slogan: The theta function is a section of a line bundle, and the elliptic gamma function is a section of a gerbe, one level up.
basis: the introduction and the main theorem statements

## Before you start

This paper is 54 pages and its abstract says "stacks", "gerbes" and "triptic curve" in three lines. The likely feeling is shame at not having the vocabulary. That feeling makes sense, and you can let it be there. The introduction knows about it: it explains a gerbe with open covers and transition functions before using any stack language. This is one concrete case of what a gerbe is good for. Read the introduction for the analogy and stop when it stops being fun.

## The story

The theta function θ<sub>0</sub>(z, τ) is not invariant under SL<sub>2</sub>(ℤ) ⋉ ℤ<sup>2</sup>. Its explicit factors are the transition functions of a line bundle on the universal elliptic curve. The elliptic gamma function Γ(z, τ, σ) has three periods 1, τ, σ, so the group to expect is SL<sub>3</sub>(ℤ) ⋉ ℤ<sup>3</sup>. Felder and Varchenko found identities under this group, but they have three terms, not two. So Γ cannot be a section of a line bundle. The authors move up one level. Where a line bundle has transition functions on double overlaps, a gerbe has transition line bundles on double overlaps and functions on triple overlaps. A three-term identity is what a section of a gerbe satisfies. The paper builds this gerbe, with Γ as one component of a section, and shows it is not trivial.

## Main definitions

**Elliptic gamma function.** For Im τ > 0 and Im σ > 0, Γ(z, τ, σ) is the product over j, k ≥ 0 of (1 − e<sup>2πi((j+1)τ + (k+1)σ − z)</sup>) / (1 − e<sup>2πi(jτ + kσ + z)</sup>). It satisfies Γ(z + σ, τ, σ) = θ<sub>0</sub>(z, τ) Γ(z, τ, σ), an elliptic version of Euler's Γ(z + 1) = z Γ(z).
- Extension: reflection rules extend Γ to a meromorphic function for τ, σ ∈ ℂ − ℝ.

**The space X and the group G.** X is the total space of O(1) restricted to ℂP<sup>2</sup> − ℝP<sup>2</sup>. A point is a pair (w, x) with x ∈ ℂ<sup>3</sup> not a complex multiple of a real vector, up to common scaling. G = SL<sub>3</sub>(ℤ) ⋉ ℤ<sup>3</sup> acts on it.
- SL<sub>3</sub>(ℤ) acts linearly on x.
- ℤ<sup>3</sup> shifts w by integer combinations of x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>.

**Equivariant holomorphic gerbe (cocycle form).** Fix a G-invariant open cover of X. A gerbe is a 2-cocycle φ with values in nowhere-vanishing holomorphic functions, in the double complex that mixes group cochains and Čech cochains. A meromorphic section is a 1-cochain s of non-zero meromorphic functions with Ds = φ.
- Geometric form: line bundles L<sub>a,b</sub> on double overlaps, with isomorphisms L<sub>a,c</sub> → L<sub>a,b</sub> ⊗ L<sub>b,c</sub> on triple overlaps.

**Triptic curve.** The quotient stack [ℂ/ι(ℤ<sup>3</sup>)] for a surjective real-linear map ι: ℝ<sup>3</sup> → ℂ. It plays the part of the elliptic curve ℂ/ℤ<sup>2</sup>. "Oriented" means a generator of H<sup>3</sup> ≅ ℤ is chosen.

## Main results

**Theorem (gamma gerbe; Theorem 1.1, proved as Theorem 4.1).** Take the cover of X indexed by oriented planes in ℚ<sup>3</sup>. There is a G-equivariant holomorphic gerbe on X, given by a 2-cocycle φ, and a meromorphic section s = (Γ<sub>a,b</sub>, Δ<sub>a</sub>(g)) of it. The function Γ(w/x<sub>3</sub>, x<sub>1</sub>/x<sub>3</sub>, x<sub>2</sub>/x<sub>3</sub>) is the component for one particular pair of coordinate planes.
- In concrete terms: Γ<sub>a,b</sub> Γ<sub>b,a</sub> = 1 and φ<sub>a,b,c</sub> Γ<sub>a,c</sub> = Γ<sub>a,b</sub> Γ<sub>b,c</sub>, plus two identities that involve the group action.
- The Felder and Varchenko relations are special cases of this infinite family.

**Theorem (the gerbe is not trivial; Theorem 1.2, refined in Theorem 7.6).** The group H<sup>3</sup><sub>G</sub>(X, ℤ) modulo torsion is ℤ ⊕ ℤ. The Dixmier–Douady class of the gamma gerbe maps to a primitive vector there.
- Restricted to one triptic curve E, the paper computes Br(E) = E × ℤ and the gamma gerbe has class (0, 1).

**Theorem (geometric description; Section 5).** The gamma gerbe is isomorphic to a "pseudodivisor gerbe" defined geometrically on the universal oriented triptic curve. I read only the introduction's summary of this, not the precise statement.

**Theorem (connective structure; Theorem 8.4).** Every hermitian equivariant holomorphic gerbe on a complex manifold has a unique equivariant connective structure compatible with both the complex and the hermitian structure. The gamma gerbe is hermitian, so this applies to it.
- This is the gerbe analogue of the unique compatible connection on a hermitian holomorphic line bundle.

## Note, then ignore

- Two languages. The introduction uses covers and cocycles. Section 5 and the appendix use stacks and central extensions of groupoids. They describe the same objects. Safe to skip the second on a first reading.
- Multiple Bernoulli polynomials. The cocycle φ and the hermitian structure are written with them, following Narukawa. They are bookkeeping for the exponential factors. Safe to skip.
- Reflection rules. Γ and θ<sub>0</sub> are extended from the upper half plane to Im ≠ 0 so that the group can act. The formulas stay the same. Safe to skip.
- Higher n. The algebraic identities extend to multiple elliptic gamma functions and ISL<sub>n</sub>(ℤ). The authors say the geometry is limited to n ≤ 3 for now. Safe to skip.
- Brauer group. The paper calls H<sup>2</sup><sub>G</sub>(X, O<sup>×</sup>) the Brauer group of the stack [X/G]. It is only the name of the group that classifies these gerbes. Safe to skip.

## One next step

Open the paper at page 2 and read the paragraph that begins "Equivariant holomorphic (abelian) gerbes can be understood", up to the cocycle condition for line bundles.

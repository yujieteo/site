source: https://www.math.arizona.edu/~swc/aws/2005/05MatsumotoNotes.pdf
slogan: The Galois group of ℚ acts on loops around three punctures of the sphere, and Lie algebras turn that action into computable cocycles.
basis: the full text

## Before you start

These lecture notes start from the definition of the fundamental group, then reach étale covers and Galois categories within ten pages. The feeling may be shame at not knowing SGA1. You do not have to fix that feeling, and the notes do not ask you to know SGA1. If you want a concrete handle on the absolute Galois group of ℚ, this is one: it acts on a free group on two generators. Enjoy the pictures of paths. Getting to the end is optional.

## The story

The Galois group G<sub>ℚ</sub> is hard to describe. Apart from complex conjugation, it is difficult to name a single element. Grothendieck's fundamental group gives it something concrete to act on. A variety X over a field K is like a family over the "space" Spec K, and G<sub>K</sub> is the fundamental group of the base. So G<sub>K</sub> acts on the fundamental group of the fibre, as monodromy does in topology. For the line minus 0, 1, ∞ over ℚ, the fibre group is the profinite free group on two loops x and y. Belyi proved that the action is faithful. The action on x is a cyclotomic power. The action on y is hard. The unblocking idea is to replace the group by its Lie algebra, where the action breaks into pieces that can be matched with known Galois cohomology classes.

## Main definitions

**Algebraic fundamental group.** For a connected scheme X with a geometric point x, it is the automorphism group of the fibre functor that sends a finite étale cover Y → X to its fibre over x. It is a profinite group.
- For X of finite type over an algebraically closed K ⊂ ℂ, it is the profinite completion of the topological fundamental group of X<sup>an</sup>.
- For X normal, it is the Galois group of the maximal extension of the function field unramified over X.

**Outer Galois representation.** For X geometrically connected over K, there is an exact sequence 1 → π<sub>1</sub>(X over K̄) → π<sub>1</sub>(X) → G<sub>K</sub> → 1. Conjugation by lifts gives a map from G<sub>K</sub> to Out(π<sub>1</sub>(X over K̄)).
- A K-rational base point splits the sequence and gives a map to Aut.

**Tangential base point.** On a curve with a puncture z and a local coordinate t at z, the "point" is the short real segment 0 &lt; t &lt; ε. Functions are expanded as Puiseux series in t<sup>1/N</sup>, and G<sub>K</sub> acts on the coefficients. This also splits the sequence.

**Malcev Lie algebra.** Complete the group ring K[G] at its augmentation ideal. The group-like elements form the Malcev completion of G, and their logarithms form a Lie algebra L. For a free group, L is the completed free Lie algebra on the same generators.

## Main results

**Theorem (Grothendieck's Riemann existence theorem; Theorem 1.12, quoted from SGA1).** Let K ⊂ ℂ be algebraically closed and X a connected scheme locally of finite type over K. Then analytification is an equivalence between finite étale covers of X and finite unramified topological coverings of X<sup>an</sup>.

**Theorem (Belyi; quoted).** For X the projective line minus 0, 1, ∞ over ℚ, the outer representation of G<sub>ℚ</sub> on the profinite free group on two generators is injective.

**Claim (shape of the action; formula (11) and §4.2).** Take the tangential base point at 0 pointing towards 1. Let x be the loop around 0 and y the loop around 1. Then every σ ∈ G<sub>ℚ</sub> sends x ↦ x<sup>χ(σ)</sup> and y ↦ f<sub>σ</sub><sup>−1</sup> y<sup>χ(σ)</sup> f<sub>σ</sub>. Here χ is the cyclotomic character, and f<sub>σ</sub> is a unique element of the commutator subgroup of the profinite free group.
- Step 1: a loop around the puncture multiplies t<sup>1/N</sup> by a root of unity, and σ moves that root by χ(σ).
- Step 2: f<sub>σ</sub> = p<sup>−1</sup>σ(p), where p is the real path from 0 to 1. It acts trivially on t<sup>1/N</sup> and (1 − t)<sup>1/N</sup> because the relevant power series have rational coefficients.

**Theorem (Soulé cocycles appear; Anderson, Coleman, Ihara; quoted in §6).** Fix a prime ℓ and pass to the pro-ℓ completion and its Lie algebra L, on which the action is unramified outside ℓ. The extension of L/[L, L] by L′/[L′, L′], with L′ = [L, L], defines Galois cohomology classes with values in ℚ<sub>ℓ</sub>(n + 1). For even n ≥ 2, the class is a nonzero constant multiple of Soulé's cocycle χ<sub>n+1</sub>. The notes state this without proof.

## Note, then ignore

- Order of composing paths. The notes compose γ∘γ′ as "first γ′, then γ", and say that other papers do the reverse. Safe to skip on a first reading.
- Outer versus honest action. Without a rational base point the action is defined only up to inner automorphisms. Safe to skip, since the main example has a base point.
- Dependence on t. The splitting from a tangential base point changes if you replace t by 2t. Safe to skip.
- The functor behind tangential base points. The author says he knows no good reference for making it a fibre functor, and points to one paper. Safe to skip.
- Soulé's result as stated. The notes say H<sup>1</sup>(G<sub>ℓ</sub>, ℤ<sub>ℓ</sub>(m)) is ℤ<sub>ℓ</sub> for odd m > 0 and 0 for even m > 0, and omit the construction of the cocycle. Take it as a black box. Safe to skip.

## One next step

Open the PDF at §4.2, "Case of the line minus three points" (about page 20), and read only the definitions of x, y and the two displayed formulas for the action of σ.

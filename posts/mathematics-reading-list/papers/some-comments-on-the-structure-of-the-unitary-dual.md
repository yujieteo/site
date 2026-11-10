source: https://math.mit.edu/events/lie-groups-day/Mason-Brown_Slides.pdf
slogan: A complex group's spherical unitary dual should grow from finitely many unipotent points by induction and deformation, and quantised nilpotent covers make that precise.
basis: the full text

## Before you start

The likely feeling is frustration at missing context. These are 79 talk slides with no spoken words, and terms such as "filtered quantisation" arrive without proof or motivation. It is reasonable to feel shut out by that. If you want a mental picture of what a unitary dual looks like, the pictures for SL(2, ℂ), Sp(4, ℂ) and G<sub>2</sub>(ℂ) give you one that no theorem statement does. Look at the pictures for pleasure first. The definitions will make more sense afterwards.

## The story

For a complex connected reductive group G, people want to list the irreducible unitary spherical representations. The answer is known for GL(n), Sp(2n), SO(n) and a few small groups, case by case. Each spherical representation has a parameter in 𝔥<sup>\*</sup>/W, so the unitary ones form a W-invariant subset of 𝔥<sup>\*</sup>. The slides say it is closed, lies in the ball of radius |ρ|, and is a union of facets cut out by hyperplanes. Vogan's philosophy explains the shape: start from finitely many "unipotent" representations of Levi subgroups, induce, and deform along complementary series. The blocker is that "unipotent" and "complementary series" had no general definition. Mason-Brown proposes both, using quantisations of covers of nilpotent orbits.

## Main definitions

**Harish-Chandra bimodule.** A U(𝔤)-bimodule V on which the adjoint action ξ·v = ξv − vξ integrates to a locally finite action of G. It is spherical if it contains a non-zero G-fixed vector. It is unitary if it carries a positive-definite Hermitian form invariant with respect to a compact real form σ.

**Nilpotent cover.** A finite, connected, G-equivariant cover Õ of a nilpotent coadjoint orbit O. Covers of O correspond to conjugacy classes of subgroups of the component group A(O) of the centraliser of a point.
- Example: SL(2, ℂ) has two nilpotent orbits. The non-zero one has A(O) = ℤ/2 and one non-trivial cover, of degree two.

**Birational induction.** For each Levi L ⊂ G there is a map Bind from covers for L to covers for G. A cover is birationally rigid if it does not come from a proper Levi. Losev and Matvieievskyi show that every cover is induced from a rigid cover Õ<sub>L</sub> of a Levi L, uniquely up to conjugacy.

**Quantisation parameters.** The functions ℂ[Õ] form a graded Poisson algebra. Set 𝔥(Õ) = 𝔷(𝔩 ∩ [𝔤, 𝔤])<sup>\*</sup>. Each λ in 𝔥(Õ) gives a filtered quantisation A<sub>λ</sub>(Õ), which receives a map Φ from U(𝔤). The kernel of Φ at λ = 0 is the unipotent ideal of Õ.

## Main results

**Theorem (classification of quantisations; Losev, Losev–Mason-Brown–Matvieievskyi).** There is a finite group W(Õ) inside N<sub>G</sub>(L)/L and a canonical bijection between 𝔥(Õ)/W(Õ) and the filtered quantisations of ℂ[Õ], sending λ to A<sub>λ</sub>(Õ).
- Example: for a parabolic P = LU, the open orbit in T<sup>\*</sup>(G/P) is a cover induced from (L, {0}), and A<sub>λ</sub> is global sections of twisted differential operators on G/P.

**Claim (Hermitian means simple).** Take a "relevant" cover, one induced from an orbit, and a real quantisation A<sub>λ</sub>(Õ). It has a unique invariant Hermitian form, and the form is non-degenerate exactly when A<sub>λ</sub>(Õ) is a simple algebra. Simplicity holds exactly when the kernel of Φ is a maximal ideal, which is an open condition on λ that includes 0.

**Proposition (complementary series).** Let 𝔥<sub>h</sub>(Õ) be the set of Hermitian parameters. If a set S of parameters consists of unitary quantisations, then every connected component of 𝔥<sub>h</sub>(Õ) that meets S consists of unitary quantisations.
- Note: some members of such a family may be reducible as U(𝔤)-bimodules, so this can extend the usual complementary series.

**Conjecture (structure of the unitary dual).** Two statements. First, for a relevant cover, the unitary quantisations are exactly those reached from Hermitian quantisations induced from unitary quantisations for Levi subgroups M ⊇ L, followed by the component operation above. Second, the spherical unitary dual of G is the set of bimodules U(𝔤)/ker Φ over all relevant covers and all unitary parameters λ.
- Evidence shown: parameter pictures for every orbit and cover of Sp(4, ℂ) and G<sub>2</sub>(ℂ), assembled into the known unitary duals.

## Note, then ignore

- **Real infinitesimal character.** The slides restrict to parameters in the real span of the character lattice. Unitary induction reduces the general case to this. Safe to skip on a first reading.
- **Relevant covers.** Only covers birationally induced from an orbit get a real form from σ. This restricts which covers enter the conjecture. Safe to skip.
- **Range of M in the conjecture.** The slide writes the union over all Levi subgroups M ⊇ L and does not say whether M = G is allowed. The statement has content only for proper M. This is unclear in the source, so hold it loosely.
- **Four parameter sets.** Each example shows 𝔥(Õ), then the real, Hermitian and unitary parameters inside it, one slide each. This is why the deck is long. Safe to skip the intermediate slides.
- **Infinitesimal characters.** A lemma reduces the infinitesimal character of any A<sub>λ</sub> to the rigid case plus λ. The rigid cases are computed in separate papers. Safe to skip.

## One next step

Open the slides and look at the three pictures titled SL(2, ℂ), Sp(4, ℂ) and G<sub>2</sub>(ℂ), then read the slide straight after them, "How should we understand these pictures?".

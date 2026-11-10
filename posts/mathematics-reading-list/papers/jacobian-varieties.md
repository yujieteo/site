source: https://www.jmilne.org/math/xnotes/JVs.pdf
slogan: Every curve sits inside a group variety built from its own degree zero line bundles, and that group remembers the curve.
basis: the introduction and the main theorem statements

## Before you start

This is a 50-page chapter written as a companion to another chapter, "Abelian Varieties", which it cites on almost every page as "AVs". The likely feeling is a quiet shame at not having read the companion first. That feeling is fair, and you can let it sit there. If you want to see how a curve turns into a group you can do arithmetic on, the first two sections show it with little outside help. Read those for the pleasure of the construction. The remaining sections are largely independent and can wait.

## The story

Over ℂ, a curve C of genus g has a Jacobian: a complex torus of dimension g whose points are the degree zero line bundles on C. Number theory needs the same object over any field k, as a variety and not only as a group. The first obstacle is to say what "the same object" means. Milne's answer is a functor: the Jacobian J should parametrise families of degree zero line bundles on C. The second obstacle is to build it. The idea goes back to Weil. A general degree zero class, after a shift, is a sum of g points of C in exactly one way. So the g-th symmetric power C<sup>(g)</sup> already looks like J on an open set, and its partial group law extends to a true group variety. The reward is an abelian variety that is its own dual and that determines C.

## Main definitions

**The functor P<sub>C</sub><sup>0</sup>.** Let C be a complete nonsingular curve over a field k. For a connected k-scheme T, P<sub>C</sub><sup>0</sup>(T) is the group of invertible sheaves on C × T that have degree 0 on every fibre C<sub>t</sub>, modulo sheaves pulled back from T.
- Meaning: families of degree zero line bundles on C parametrised by T, modulo trivial families.

**Jacobian variety.** An abelian variety J over k with a map of functors P<sub>C</sub><sup>0</sup> → J that is an isomorphism on T-points whenever C(T) is non-empty. These conditions fix J up to a unique isomorphism.
- Points: if C has a point over a field k′ containing k, then J(k′) ≅ Pic<sup>0</sup>(C<sub>k′</sub>).

**The map f<sup>P</sup>.** For a k-rational point P on C, the morphism f<sup>P</sup>: C → J that sends Q to the class of the divisor Q − P. Summing r points gives maps f<sup>(r)</sup>: C<sup>(r)</sup> → J from the symmetric powers, with image W<sup>r</sup>.

**Theta divisor.** Θ = W<sup>g−1</sup>, the image of C<sup>(g−1)</sup> in J. It is a divisor on J, well defined up to translation.

## Main results

**Theorem (existence; Theorem 1.1).** For every complete nonsingular curve C over a field k, the Jacobian variety J exists. Its tangent space at 0 is canonically H<sup>1</sup>(C, O<sub>C</sub>), so dim J equals the genus g (Proposition 2.1).
- Step 1: when C has a rational point, build J from C<sup>(g)</sup> (Sections 3 and 4).
- Step 2: for general C, pass to a finite separable extension where C has a point and descend (Proposition 1.9).

**Theorem (the curve inside J; Proposition 2.3, Theorem 5.1, Proposition 6.1).** Assume g > 0 and P ∈ C(k). Then f<sup>P</sup> is a closed immersion. The map f<sup>(r)</sup>: C<sup>(r)</sup> → W<sup>r</sup> is birational for r ≤ g, so C<sup>(g)</sup> → J is birational. Every map from C to an abelian variety A that sends P to 0 factors through f<sup>P</sup> by a unique homomorphism J → A.

**Theorem (autoduality; Theorem 6.6).** The homomorphism J → J<sup>∨</sup> defined by the invertible sheaf L(Θ) is an isomorphism. So Θ gives J a principal polarisation, called the canonical polarisation.

**Theorem (Torelli; Theorem 12.1).** Let C and C′ be complete smooth curves over an algebraically closed field. If their canonically polarised Jacobians (J, λ) and (J′, λ′) are isomorphic by β, then there is an isomorphism α: C → C′ with f′ ∘ α = ±β ∘ f + c for some point c of J′.
- Case: for genus at least 2 and C not hyperelliptic, α, the sign and c are determined by β and the base points.
- Case: for C hyperelliptic, the sign is free, and then α and c are determined.

## Note, then ignore

- No rational point. The functor P<sub>C</sub><sup>0</sup> itself may fail to be representable when C(k) is empty, which is why the definition has the clause "whenever C(T) is non-empty". Safe to skip on a first reading.
- Citations to "AVs". The chapter leans on the companion chapter for facts about abelian varieties. Take each cited fact on trust the first time through.
- The printed symbols. The PDF comes from the original TeX file of the 1986 chapter, with corrections. The numbering matches the published version, so either copy serves.
- Divisorial correspondences. Theorem 1.2 rephrases the definition with a base point and a universal sheaf M<sup>P</sup> on C × J. It is the same statement in a more usable form. Safe to skip.
- Infinite fields. Theorem 10.1, that every abelian variety is a quotient of a Jacobian, is stated over an infinite field. A footnote says it holds over finite fields too. Safe to skip.

## One next step

Open the PDF at Section 1 (page 2) and read from the first line down to the statement of Theorem 1.1, about one page.

source: https://shmakov.us/docs/EtaleRevised.pdf
slogan: The absolute Galois group of ℚ acts faithfully on loops in the sphere minus three points, and that action obeys two explicit equations.
basis: the abstract and introduction

## Before you start

At 73 pages of expository notes, the feeling most likely to arrive is tiredness before you begin: covering spaces again, then Galois categories, then étale morphisms, with the reward far off. It is fine to feel that and to skip ahead. If you want to see Gal(ℚ̄/ℚ) act on something you can draw, the introduction gets there in four pages. Read it for the drawings on surfaces. The foundations can wait until you miss them.

## The story

The absolute Galois group of ℚ is known mostly through its action on number fields, and that description is circular: it tells you little about the group itself. Grothendieck suggested watching it act on geometry instead. Take the projective line minus 0, 1 and ∞. Its geometric fundamental group is the profinite free group on two loops x and y. The Galois group acts on this free group, and Belyi showed that the action is faithful. So Gal(ℚ̄/ℚ) sits inside the automorphisms of a group you can write down. The notes compute the action: each σ is recorded by a pair (χ(σ), f<sub>σ</sub>). Two symmetries of the three punctures force two equations on the pair. Those equations define a group that contains Gal(ℚ̄/ℚ).

## Main definitions

**Étale fundamental group.** For a connected scheme X with geometric point x, π<sub>1</sub><sup>et</sup>(X, x) is a profinite group whose conjugacy classes of open subgroups correspond to isomorphism classes of connected finite étale covers of X.
- A field k: π<sub>1</sub><sup>et</sup>(Spec k) ≃ Gal(k<sup>s</sup>/k).
- X of finite type over k: there is an exact sequence π<sub>1</sub><sup>et</sup>(X<sub>k̄</sub>) → π<sub>1</sub><sup>et</sup>(X) → Gal(k̄/k), with the first map injective and the second surjective.

**Outer Galois representation.** Conjugation in π<sub>1</sub><sup>et</sup>(X) gives a map ρ<sup>out</sup>: Gal(k̄/k) → Out(π<sub>1</sub><sup>et</sup>(X<sub>k̄</sub>)). A section of the exact sequence, for example from a rational point or a tangential basepoint, lifts it to a map into Aut.

**Dessin d'enfant.** Given a finite map β: X → ℙ<sup>1</sup> unramified outside {0, 1, ∞}, lift the interval [0, 1] to X. The result is a bipartite graph on the surface X, with vertices coloured by β<sup>−1</sup>(0) and β<sup>−1</sup>(1).

**Coarse Grothendieck-Teichmüller group.** The subgroup ĜT<sub>0</sub> of Out(F̂<sub>2</sub>) given by pairs (λ, f) ∈ Ẑ<sup>×</sup> × [F̂<sub>2</sub>, F̂<sub>2</sub>] that satisfy the 2-cycle and 3-cycle relations below.

## Main results

**Theorem (Belyi, three points; Theorem 0.1).** Let X be an integral proper normal curve over an algebraically closed field k of characteristic 0. Then X is defined over ℚ̄ if and only if there is a finite morphism X → ℙ<sup>1</sup> unramified outside {0, 1, ∞}.

**Theorem (Belyi, faithfulness; Theorem 0.2).** The outer representation ρ<sup>out</sup>: Gal(ℚ̄/ℚ) → Out(F̂<sub>2</sub>), coming from ℙ<sup>1</sup> − {0, 1, ∞} over ℚ, is injective.

**Theorem (explicit action and relations; Theorem 0.3).** With the tangential basepoint at 0 pointing towards 1, each σ acts on F̂<sub>2</sub> = ⟨x, y⟩ by σ·x = x<sup>χ(σ)</sup> and σ·y = f<sub>σ</sub><sup>−1</sup> y<sup>χ(σ)</sup> f<sub>σ</sub>. Here χ is the cyclotomic character and f<sub>σ</sub> lies in the derived subgroup. With z defined by xyz = 1 and m = (χ(σ) − 1)/2, the pair satisfies f<sub>σ</sub>(y, x) f<sub>σ</sub>(x, y) = 1 and f<sub>σ</sub>(z, x) z<sup>m</sup> f<sub>σ</sub>(y, z) y<sup>m</sup> f<sub>σ</sub>(x, y) x<sup>m</sup> = 1.
- Step 1: f<sub>σ</sub> records how σ moves the straight path p from 0 to 1.
- Step 2: the automorphisms θ(t) = 1 − t and ω(t) = 1/(1 − t) satisfy θ(p)p = 1 and ω<sup>2</sup>(p)ω(p)p = 1. Galois equivariance turns these into the two relations.

**Conjecture (stated in the notes).** The full group ĜT, cut out by one further relation from moduli spaces of curves, is isomorphic to Gal(ℚ̄/ℚ). The notes survey the evidence. They do not prove it.

## Note, then ignore

- Tangential basepoints. 0 and 1 are not points of the punctured line, so the basepoint is a tangent direction at a puncture. This is what makes the formulas clean. Safe to skip on a first reading.
- Outer versus honest action. Without a basepoint the action is defined only up to inner automorphisms. A section fixes that. Skip the distinction at first.
- Notation f(u, v). This means the image of f under the map of F̂<sub>2</sub> sending x to u and y to v. It is only substitution. Skip it once you have seen it.
- Positive characteristic. The comparison with the topological fundamental group needs characteristic 0, or completion away from the characteristic. The main story is over ℚ. Skip it.
- Coarse versus full group. ĜT<sub>0</sub> uses two relations, ĜT uses three. Only ĜT<sub>0</sub> is treated in detail here.

## One next step

Read the statement of Theorem 0.3 on pages 4 and 5 of the introduction, and the paragraph after it on θ and ω.

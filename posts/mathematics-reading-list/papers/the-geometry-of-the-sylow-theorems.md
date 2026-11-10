source: https://www.daniellitt.com/blog/2020/12/26/the-geometry-of-the-sylow-theorems
slogan: Counting flags over a finite field proves Sylow's third theorem for matrix groups, and the same count works for varieties over any field.
basis: the page itself

## Before you start

You may feel a quiet embarrassment that the Sylow theorems, which you met long ago, still feel like bookkeeping. That is a fair feeling. They are usually taught that way. This post offers pictures instead: a tetrahedron, an icosahedron, the Fano plane, then flags in a vector space. If you want to see group theory and algebraic geometry say the same sentence, this is a short route. Enjoy the pictures first. The final theorem can wait for a second visit.

## The story

The three Sylow theorems say that a finite group G has a subgroup of maximal p-power order, that all such subgroups are conjugate, and that their number is 1 modulo p. Litt first makes them visible. In S<sub>4</sub> acting on a tetrahedron, the 3-Sylow subgroups fix faces and the 2-Sylow subgroups fix pairs of opposite edges. Then he turns to GL<sub>n</sub>(𝔽<sub>q</sub>). Its p-Sylow subgroups are the stabilisers of full flags that act trivially on the successive quotients. A student asked what happens over an infinite field, where you cannot count. The answer is to stop counting subgroups and study the space that parametrises them, the flag variety. Its class in the Grothendieck ring of varieties is 1 modulo the class of the affine line.

## Main definitions

**Full flag.** A chain of subspaces 0 = F<sup>0</sup> ⊂ F<sup>1</sup> ⊂ … ⊂ F<sup>n</sup> = V with dim F<sup>i</sup> = i.

**Maximal unipotent subgroup.** For a field k, the subgroup of GL<sub>n</sub>(k) that stabilises a full flag and acts trivially on each quotient F<sup>i</sup>/F<sup>i−1</sup>.
- Standard flag: the upper triangular matrices with ones on the diagonal.
- Over 𝔽<sub>q</sub> with q a power of p: these are exactly the p-Sylow subgroups, of order q<sup>n(n−1)/2</sup>.

**Flag variety.** The quotient G/B, where G = GL<sub>n</sub> and B is the stabiliser of a full flag (a Borel subgroup). Its points are the full flags, or equally the maximal unipotent subgroups.

**Grothendieck ring of varieties K<sub>0</sub>(Var<sub>k</sub>).** The free abelian group on isomorphism classes [X] of varieties over k, modulo [X] = [Y] + [X ∖ Y] for each closed subvariety Y ⊂ X. The product is [X]·[Y] = [X × Y]. Write 𝕃 for the class of the affine line.

## Main results

**Theorem (counting flags over a finite field; stated as a claim in the post).** The number of full flags in 𝔽<sub>q</sub><sup>n</sup> is (1 + q)(1 + q + q<sup>2</sup>)⋯(1 + q + … + q<sup>n−1</sup>). This number is 1 modulo p, which is Sylow's third theorem for the p-Sylow subgroups of GL<sub>n</sub>(𝔽<sub>q</sub>).
- Step 1: induct on n. A full flag is a hyperplane together with a full flag inside it.
- Step 2: hyperplanes are nonzero linear functionals up to scaling, so there are (q<sup>n</sup> − 1)/(q − 1) of them.

**Claim (first two Sylow theorems, geometric form).** For any field k, maximal unipotent subgroups of GL<sub>n</sub>(k) exist and are all conjugate. The reason: full flags exist in k<sup>n</sup>, and GL<sub>n</sub>(k) acts transitively on them. The post credits the observation to Litt's student Sasha Shmakov.

**Theorem (third Sylow theorem, geometric form; the unnumbered Theorem at the end).** Over any field k, the class of the full flag variety of GL<sub>n</sub> is the product over i from 1 to n of (1 + 𝕃 + … + 𝕃<sup>i−1</sup>) in K<sub>0</sub>(Var<sub>k</sub>). So it is 1 modulo 𝕃.
- Step 1: forgetting all but the hyperplane maps the flag variety to a projective space, with fibres that are smaller flag varieties.
- Step 2: projective space is a union of affine spaces, so its class is 1 + 𝕃 + … + 𝕃<sup>m</sup>. The fibre bundle is Zariski-locally trivial, so the classes multiply.

## Note, then ignore

- Local triviality. Classes in the Grothendieck ring multiply over a bundle only if the bundle is trivial on Zariski open sets. Litt gets this from Grothendieck's form of Hilbert's Theorem 90. Safe to skip on a first reading.
- An index slip. The post writes the space of hyperplanes in an n-dimensional space as ℙ<sup>n</sup>. It has dimension n − 1, and the final product formula is consistent with that. Safe to skip.
- Why G/B is a variety. The post says this follows from general theory and does not prove it. Safe to skip.
- Other groups. Litt remarks that the same statement holds for split reductive groups over any field, without proof. Safe to skip.
- Other primes. Sylow subgroups for primes not dividing q, and non-split groups, are left to a later post. Safe to skip.

## One next step

Open the post and read only Example 1, the tetrahedron, with its pictures. It shows both kinds of Sylow subgroup of S<sub>4</sub> in about two minutes.

source: https://math.berkeley.edu/~wodzicki/257/G36.pdf
slogan: Let a group of order 36 act on four cosets, and it either has a normal subgroup of order 9 or maps onto A<sub>4</sub>.
basis: the full text

## Before you start

This is a three-page outline, terse, with steps left to you and a couple of misprints. You may feel slow when a one-line claim takes you twenty minutes to check. That is what an outline does to every reader, and the feeling can stay while you work. If you want to see Sylow theory, group actions and semidirect products work together on one concrete order, this is a compact place. Take the first page for the fun of it. The case list can wait.

## The story

You want every group of order 36 = 4 × 9 up to isomorphism. Sylow's theorems give subgroups of order 9, but they do not say whether one is normal. The note splits on exactly that. If no subgroup P of order 9 is normal, let G act on the four cosets of P. This gives a map from G to S<sub>4</sub>. Counting orders forces the image to have 12 elements, and it must be A<sub>4</sub>. The kernel is a central C<sub>3</sub>. So G is a central extension of A<sub>4</sub> by C<sub>3</sub>, and there are only two. If instead a subgroup of order 9 is normal, G is a semidirect product of it with a group of order 4, and you list the possible actions.

## Main definitions

**Coset action.** For a subgroup P of G, the group G permutes the left cosets G/P by left multiplication. This gives a homomorphism φ from G to Sym(G/P). Here |G/P| = 4, so the target is S<sub>4</sub>.
- The action is transitive, so 4 divides |φ(G)|.

**Central extension.** A surjection π from G onto a group Q whose kernel lies in the centre of G. Here Q = A<sub>4</sub> and the kernel is C<sub>3</sub>.

**Semidirect product.** A group G with a normal subgroup N and a subgroup Q such that G = NQ and N ∩ Q = 1. It is fixed by N, Q and a homomorphism ρ from Q to Aut N.
- Trivial ρ gives the direct product.

## Main results

**Theorem (no normal subgroup of order 9; first section, unnumbered).** Let G have order 36 and no normal subgroup of order 9. Then G has centre C<sub>3</sub>, G/C<sub>3</sub> ≅ A<sub>4</sub>, and G has a unique, hence normal, subgroup V of order 4, isomorphic to C<sub>2</sub> × C<sub>2</sub>.
- Step 1: |φ(G)| divides 24 and 36 and is a multiple of 4, so it is 4 or 12. Order 4 would make the kernel a normal subgroup of order 9. So it is 12, and the image is A<sub>4</sub> because A<sub>4</sub> has no non-trivial map to a group of order 2.
- Step 2: A<sub>4</sub> has no non-trivial map to Aut C<sub>3</sub>, which has order 2, so the kernel is central. Cubing lifts of the Klein four-group of A<sub>4</sub> gives V.

**Theorem (the two groups; first section, unnumbered).** Up to isomorphism there are exactly two groups of order 36 with no normal subgroup of order 9.
- Case 1: G has more than two elements of order 3. Then G ≅ C<sub>3</sub> × A<sub>4</sub>.
- Case 2: G has exactly two elements of order 3. Then every lift of an element of order 3 in A<sub>4</sub> has order 9, and G ≅ V ⋊ C<sub>9</sub>, with C<sub>9</sub> acting on the normal subgroup V through a non-trivial map to Aut V ≅ S<sub>3</sub>. The two such maps differ by inversion on C<sub>9</sub>, so one group results.

**Theorem (a normal subgroup of order 9; second section, unnumbered).** If G has a normal subgroup N of order 9, then G is a semidirect product of N with a Sylow 2-subgroup Q, and four cases arise from N ∈ {C<sub>9</sub>, C<sub>3</sub> × C<sub>3</sub>} and Q ∈ {C<sub>4</sub>, C<sub>2</sub> × C<sub>2</sub>}.
- N = C<sub>9</sub>: with Q = C<sub>4</sub> you get the cyclic group or one non-abelian group, a central extension of D<sub>9</sub> by C<sub>2</sub>. With Q = C<sub>2</sub> × C<sub>2</sub> you get C<sub>18</sub> × C<sub>2</sub> or D<sub>18</sub> ≅ D<sub>9</sub> × C<sub>2</sub>.
- N = C<sub>3</sub> × C<sub>3</sub>: the groups come from two-dimensional representations of Q over 𝔽<sub>3</sub>. The note stops here and does not list them.

## Note, then ignore

- V and W: the note calls the Klein subgroup of A<sub>4</sub> by W and its lift to G by V, but one displayed map has the wrong letter. Safe to skip.
- Dihedral names: D<sub>9</sub> means the dihedral group of order 18 and D<sub>18</sub> the one of order 36. Safe to skip once noted.
- Element counts: the note counts elements of each order in both cases, as a check. For C<sub>3</sub> × A<sub>4</sub> it gives 3 of order 2, 26 of order 3 and 6 of order 6. Safe to skip at first.
- Why the cube works: cubing a lift kills the ambiguity because the kernel is central of order 3. This detail is needed only to build V. Safe to skip on a first reading.
- No final total: the note never adds up the full list, because the cases with N = C<sub>3</sub> × C<sub>3</sub> are left open. Safe to skip.

## One next step

Open the note and read only the first paragraph of page 1, down to the line that says the kernel of φ is a normal subgroup of order 3.

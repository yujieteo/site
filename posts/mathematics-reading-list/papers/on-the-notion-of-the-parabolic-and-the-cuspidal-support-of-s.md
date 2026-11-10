source: https://arxiv.org/pdf/2108.06369
slogan: Drop K-finiteness and automorphic forms still split by parabolic and cuspidal support, now as topological representations of the whole adelic group.
basis: the introduction and the main theorem statements

## Before you start

The likely feeling is boredom, with some worry underneath. This is a 30-page foundations paper about topologies on function spaces, and the words "LF-space" and "locally convex direct sum" appear on every page. Feeling that this is dry is a fair response. If you want automorphic forms on which the whole group G(𝔸) acts, with no special rules at the real places, this paper sets that up with care. Read the introduction for interest and let the functional analysis go by.

## The story

Classical automorphic forms are K<sub>∞</sub>-finite. That condition is not preserved by the real group, so the space of forms is only a (𝔤, K)-module at the archimedean places while the p-adic groups act honestly. Smooth-automorphic forms drop K<sub>∞</sub>-finiteness and restore the symmetry. People have used them, notably in work on the Gan–Gross–Prasad conjectures, but the foundations were thin, and the authors report that several published topologies on the space are not complete. The key fact that repairs this is a uniform growth bound: once the ideal J is fixed, one exponent of growth works for all forms. That gives a natural LF-space topology. With it, the known decompositions of Franke's space of automorphic forms, by parabolic support and by cuspidal support, pass to the larger smooth space as topological direct sums.

## Main definitions

**Smooth-automorphic form.** A smooth function on G(F)\G(𝔸), right-invariant under some open compact subgroup K<sub>n</sub> of G(𝔸<sub>f</sub>), of uniform moderate growth, and killed by a power of an ideal J of finite codimension in the centre Z(𝔤) of the enveloping algebra. Here G is connected reductive over a number field F. The space is A<sup>∞</sup><sub>J</sub>(G).
- Compared with the classical definition: K<sub>∞</sub>-finiteness is dropped, and nothing else.

**LF-space topology.** For fixed n and growth exponent d, the forms fixed by K<sub>n</sub> and killed by J<sup>n</sup> make a Fréchet space. A<sup>∞</sup><sub>J</sub>(G) is the increasing union over n, with the inductive limit topology.

**Parabolic support.** A function f is negligible along a parabolic Q = LN if its constant term along Q is orthogonal to all cuspidal smooth-automorphic forms on L. For an associate class {P}, the space A<sup>∞</sup><sub>J,{P}</sub>([G]) consists of forms negligible along every Q outside {P}.

**Cuspidal support.** An associate class φ is represented by an irreducible cuspidal smooth-automorphic representation π of the Levi L<sub>P</sub>(𝔸), up to Weyl conjugacy. The space A<sup>∞</sup><sub>J,{P},φ</sub>([G]) is the closure of the span of derivatives of regularised values of Eisenstein series built from π.

## Main results

**Proposition (uniform growth; Proposition 2.8).** Fix an ideal J of finite codimension in Z(𝔤). Then there is one exponent d such that every smooth-automorphic form in A<sup>∞</sup><sub>J</sub>(G) has uniform moderate growth of exponent d.
- Step 1: bound the exponents that occur in constant terms along each parabolic, using the finite codimension of J.
- Step 2: this makes the LF-space topology well defined and independent of the choice of d.

**Theorem (parabolic support; Theorem 4.20).** A<sup>∞</sup><sub>J</sub>([G]) is the locally convex direct sum, over associate classes {P} of parabolic F-subgroups, of the G(𝔸)-subrepresentations A<sup>∞</sup><sub>J,{P}</sub>([G]).
- Step 1: the K<sub>∞</sub>-finite version is the known decomposition of Franke's space.
- Step 2: a general proposition on closures (Proposition 4.7) carries an algebraic direct sum of K<sub>∞</sub>-finite modules to a topological direct sum.

**Theorem (cusp forms; Theorem 4.30).** The space of cuspidal smooth-automorphic forms is a countable locally convex direct sum of the spaces of globally smooth vectors in the irreducible summands of the cuspidal L<sup>2</sup>-space.
- Consequence: every cuspidal smooth-automorphic form is a finite sum of smooth vectors from irreducible summands. That fails for general L<sup>2</sup> cuspidal functions.

**Theorem (cuspidal support; Theorem 4.33).** For each standard parabolic P, A<sup>∞</sup><sub>J,{P}</sub>([G]) is the locally convex direct sum of the spaces A<sup>∞</sup><sub>J,{P},φ</sub>([G]) over the associate classes φ of cuspidal smooth-automorphic representations of the Levi.
- Step 1: the K<sub>∞</sub>-finite case is the theorem of Franke and Schwermer.
- Step 2: Proposition 4.7 again passes to closures.

## Note, then ignore

- **The quotient [G].** The main theorems use G(F)A<sub>G</sub><sup>ℝ</sup>\G(𝔸), which removes a central real torus. It keeps the cuspidal spectrum discrete. Safe to skip on a first reading.
- **Closed subspaces of LF-spaces.** A closed subspace of an LF-space need not be an LF-space. The authors prove it for the subrepresentations they need (Proposition 3.8). Safe to skip.
- **"LF-compatible".** This is a technical label for subrepresentations whose topology agrees with the limit of their K<sub>n</sub>-fixed parts. It makes direct sums behave. Safe to skip.
- **Dictionary with classical forms.** Theorem 3.12 matches irreducible smooth-automorphic representations with classical irreducible automorphic representations, and Theorem 3.15 is a topological tensor product theorem. Good to know, not needed for the story.
- **Completeness of quotients.** The authors conjecture, but do not prove, that every quotient of subrepresentations is complete (Remark 3.2). Safe to skip.

## One next step

Open the paper and read only the displayed Theorem on page 2 of the Introduction and the paragraph after it.

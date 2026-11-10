source: https://arxiv.org/pdf/hep-th/0512172
slogan: Conformal field theory at the critical level builds the Hecke eigensheaves that geometric Langlands asks for, so physics hands you the answer.
basis: the introduction and the main theorem statements

## Before you start

These notes run to 128 pages and cross three subjects: number theory, sheaves on moduli spaces, and conformal field theory. The likely feeling is fear of being too slow, since each part assumes a different training. You can let that feeling be there. Frenkel wrote the notes for physicists and says the three parts can be read independently. You may want one thing from them: to see why a dual group appears at all. Read the part that pleases you most, and leave the rest.

## The story

Langlands asked for a match between representations of a Galois group and automorphic representations. Over number fields this is very hard. Over function fields of curves it is a theorem for GL<sub>n</sub>, by Drinfeld and Lafforgue. Geometry suggests a further move: replace the finite field by ℂ. Galois representations become flat bundles on a Riemann surface X. Automorphic functions become D-modules on Bun<sub>G</sub>, the moduli space of G-bundles on X. The wanted objects are Hecke eigensheaves. The block is how to construct one. The idea, due to Beilinson and Drinfeld, uses an affine Lie algebra at the critical level. There the Sugawara field becomes central. The centre is the algebra of functions on opers for the dual group. Fix an oper, take conformal blocks, and you get the eigensheaf.

## Main definitions

**Hecke eigensheaf.** A D-module (or perverse sheaf) on Bun<sub>G</sub> is a Hecke eigensheaf with eigenvalue E, an <sup>L</sup>G-local system on X, if each Hecke functor acts on it by tensoring with the bundle that the matching representation of <sup>L</sup>G attaches to E.
- For GL<sub>n</sub>: E is a rank n bundle with flat connection, and Bun<sub>n</sub> is the moduli space of rank n bundles.

**Critical level.** For a simple Lie algebra 𝔤 with dual Coxeter number h<sup>∨</sup>, the level k = −h<sup>∨</sup> of the affine Lie algebra. At this level the Segal–Sugawara field commutes with everything, so there is no stress tensor.

**Oper.** For 𝔰𝔩<sub>2</sub>, a projective connection: an operator ∂<sup>2</sup> − v(t) from Ω<sup>−1/2</sup> to Ω<sup>3/2</sup>. In general, a G-bundle with a connection and a reduction to a Borel subgroup, where the connection has a prescribed form relative to the reduction.
- On a disc with coordinate t, a 𝔤-oper is given by ℓ = rank 𝔤 functions v<sub>1</sub>(t), ..., v<sub>ℓ</sub>(t).

**The centre 𝔷(𝔤).** The centre of the vertex (chiral) algebra of the affine Lie algebra of 𝔤 at the critical level.

## Main results

**Theorem (geometric Langlands for GL<sub>n</sub>; Theorem 3).** For each irreducible rank n local system E on a curve X, over 𝔽<sub>q</sub> or over ℂ, there is a perverse sheaf Aut<sub>E</sub> on Bun<sub>n</sub> that is a Hecke eigensheaf with eigenvalue E. It is irreducible on each connected component.
- Case n = 1 is Deligne's, and n = 2 is Drinfeld's. The notes cite later work for general n.

**Theorem (geometric Satake; Theorem 6).** The tensor category of G(O)-equivariant perverse sheaves on the affine Grassmannian of G is equivalent to the category of representations of <sup>L</sup>G. Global cohomology gives the fibre functor. The notes credit Mirković and Vilonen for the general proof.

**Theorem (Feigin–Frenkel; Theorems 8 and 9).** Away from the critical level the centre is trivial. At the critical level, 𝔷(𝔤) is canonically isomorphic to the algebra of functions on <sup>L</sup>𝔤-opers on the formal disc.
- Concretely: 𝔷(𝔤) is a polynomial algebra on generators S<sub>1</sub>, ..., S<sub>ℓ</sub> and their derivatives, and S<sub>1</sub> is the Sugawara element.

**Theorem (Beilinson–Drinfeld; Theorem 10).** Let G be simple, connected and simply connected. Let χ be an <sup>L</sup>𝔤-oper on X. The 𝔤-module attached to the restriction of χ to a disc at a point x localises to a D-module on Bun<sub>G</sub>. After a twist by K<sup>−1/2</sup> it is holonomic and is a Hecke eigensheaf with eigenvalue the flat <sup>L</sup>G-bundle E<sub>χ</sub>.
- It is non-zero exactly when the local oper extends to all of X.
- It does not depend on the point x.

For general G the existence of Aut<sub>E</sub> is stated as Conjecture 1 in the notes.

## Note, then ignore

- Twisted D-modules. Conformal blocks give modules over differential operators on a line bundle. The twist by a square root of the canonical bundle removes this at the critical level. Safe to skip on a first reading.
- "Irreducible" for general G. The notes say there is no consensus and use a provisional definition: no reduction to a proper parabolic. Safe to skip.
- Only opers. Theorem 10 covers local systems that carry an oper structure. Section 9.6 sketches the others. Safe to skip.
- The second scenario. Levels below critical and the chiral Hecke algebra give a conjectural construction. The notes do not develop it. Safe to skip.
- The date. The notes are from 2005 and mention Kapustin and Witten's work as new. The gauge theory side is only outlined. Safe to skip.

## One next step

Open the PDF at page 4 and read the two displayed arrows from bundles with connection to Hecke eigensheaves, with the paragraph between them.

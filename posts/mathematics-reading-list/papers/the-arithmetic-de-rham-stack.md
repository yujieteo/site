source: https://arxiv.org/pdf/2608.20203
slogan: One stack attached to a characteristic p scheme carries rigid cohomology and its coefficients, so nobody has to choose a lift and check independence.
basis: the introduction and the main theorem statements

## Before you start

This is over 80 pages built on Gelfand stacks, analytic stacks, perfectoid rings and Berthelot's theory of arithmetic D-modules. The likely feeling is overwhelm: each prerequisite is a subject, and several are only a few years old. You are allowed to feel swamped by that. The introduction, about eight pages, tells the whole plot with one toy model, the affine line. If you want to see how a definition one line long replaces a long gluing argument, read those pages for enjoyment and leave the rest for later, or never.

## The story

For a variety X over a field k of characteristic p, the right p-adic cohomology is Berthelot's rigid cohomology. Its definition lifts X to characteristic 0, takes overconvergent de Rham cohomology of the generic fibre, and then proves the answer did not depend on the lift. Coefficients (overconvergent isocrystals, arithmetic D-modules) inherit the same problem, and the six operations were hard to build. The paper follows the "stacky approach": find a stack X<sup>arith</sup> whose coherent cohomology is rigid cohomology. Then quasi-coherent sheaves on it are the coefficients, and six functors come from the general theory of analytic stacks. The stack is defined by a functor of points, with no lift chosen. For the affine line over 𝔽<sub>p</sub> it is the overconvergent unit disc modulo the open unit disc. As an application the paper proves Berthelot's conjecture on smooth proper pushforward.

## Main definitions

**Gelfand ring.** A kind of analytic ring, roughly an overconvergent thickening of a Banach ℚ<sub>p</sub>-algebra A. It has a subring A<sup>≤1</sup> of elements of norm at most 1, with ideal A<sup>&lt;1</sup> of elements of norm less than 1. The paper restricts to separable, quasi-finite-dimensional ones.

**Arithmetic de Rham stack (Definition 3.1.4).** Let k be a field of characteristic p, perfect or not, and X a qcqs separated k-scheme of finite type. X<sup>arith</sup> is the sheafification of A ↦ X(A<sup>≤1</sup>/A<sup>&lt;1</sup>) on uniformly strictly totally disconnected perfectoid Gelfand rings A.
- Relative version: for a complete discretely valued field K with residue field k, X<sup>arith/K</sup> is the fibre product of X<sup>arith</sup> with GSpec K over (Spec k)<sup>arith</sup>.
- Toy model: for X the affine line, X<sup>arith/K</sup> is the overconvergent unit disc over K modulo the open unit disc.

**Hyodo–Kato stack of X.** The sheafification of A ↦ X(A<sup>u,♭</sup>), where A<sup>u,♭</sup> is the tilt of the uniform completion, then the quotient by Frobenius. It is a second stack attached to X with better-behaved geometry.

## Main results

**Theorem (six functors; Theorem 3.3.1).** For f: X → Y étale, f<sup>arith</sup> is cohomologically proper. For f proper, f<sup>arith</sup> is cohomologically étale. For f smooth, f<sup>arith</sup> is prim with invertible prim dual, and for relative dimension n the prim dual of the unit is the unit shifted by −2n. Pullback along the affine line over X followed by pushforward is the identity on D(X<sup>arith</sup>).
- Point: the roles of "proper" and "étale" swap compared with geometric intuition. Poincaré duality still follows (Corollary 3.3.15).

**Theorem (coefficients; Theorems 4.1.23 and 4.2.14).** For X qcqs, separated and of finite type over k, D(X<sup>arith/K</sup>) is equivalent to solid overconvergent crystals on X over K, and perfect complexes correspond to the bounded derived category of overconvergent isocrystals. The cohomology of the structure sheaf of X<sup>arith/K</sup> is rigid cohomology of X over K. For realizable X with a chosen frame, the category is modules over a ring of arithmetic differential operators.
- Toy model: on the disc quotient, the overconvergent disc gives the action of T, the open disc gives the divided powers of ∂ through a twisted Cartier duality, and the action of one disc on the other gives [∂, T] = 1.

**Theorem (Berthelot's conjecture; Theorem 6.1.1).** Let f: X → Y be a proper smooth morphism of qcqs separated schemes of finite type over k. Then the derived pushforward along f, in each degree, sends overconvergent isocrystals on X to overconvergent isocrystals on Y.
- Step 1: identify isocrystals with perfect complexes on the stack, and their pushforward with the six-functor pushforward.
- Step 2: the claim becomes a formal property of the six-functor formalism, given the first theorem.

**Theorem (Kedlaya's finiteness, new proof; Theorem 6.3.1).** For X a smooth variety over k and E an overconvergent F-isocrystal on X over K, each rigid cohomology group of E is finite-dimensional over K.
- Step: the complex is basic nuclear from the Hyodo–Kato side and dual to basic nuclear from the arithmetic side, hence dualizable.

## Note, then ignore

- "Separable qfd". The test rings are restricted to separable quasi-finite-dimensional Gelfand rings for technical reasons the introduction itself glosses over. Safe to skip on a first reading.
- Closed and open swap. For a closed Z in X with open complement U, U<sup>arith</sup> is the closed piece and Z<sup>arith</sup> the open piece. This is another face of the role reversal. Safe to skip.
- Realizable schemes. The D-module description needs an embedding into a proper smooth scheme with a lift. Every finite type k-scheme has this Zariski locally. Safe to skip.
- Hypotheses on K. The Hyodo–Kato comparisons (Theorems 5.3.2 and 5.4.1) assume k perfect and K perfect with a Frobenius lift. The arithmetic stack does not. Safe to skip.
- Fourier transform. Section 6.2 fixes a (p − 1)-th root of −p to define the kernel. The paper says the choice of −p is a convention. Safe to skip.

## One next step

Open the paper at Remark 1.3.2 and the paragraph after it (page 3) and read only the affine line example and the "universal among lifts" sentence.

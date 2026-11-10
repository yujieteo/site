source: https://arxiv.org/pdf/0911.3212
slogan: A bundle with connection is the same thing as its holonomy, and holonomy is exactly a smooth function on loops that respects gluing of paths.
basis: the introduction and the main theorem statements

## Before you start

The word "diffeological" in the title can raise a small dread: one more foundation to learn before the content starts. That reaction is fair, and you can let it sit there. The main theorems are also statements about ordinary manifolds, and the introduction says so. If you have ever wanted holonomy to be the whole story of a connection, this paper makes that precise. Read the three theorems for the fun of it. The diffeology is in an appendix, there when you want it.

## The story

A connection on a principal bundle gives each loop a group element, its holonomy. People long wanted the converse: start with a function on loops and rebuild the bundle and connection. Two things blocked a clean statement. Loop spaces are infinite-dimensional, so "smooth function on loops" needs care. And not every smooth function on loops is a holonomy, so one needs the right condition. Waldorf solves the first by working with diffeological spaces, where loop spaces and their quotients are honest objects. For the second he uses a condition from Stolz and Teichner, called fusion. Take three paths from x to y. Each pair makes a loop. Fusion says the values on the loops (1,2) and (2,3) multiply to the value on (1,3). Smooth fusion maps are exactly the holonomies.

## Main definitions

**Diffeological space.** A set X together with a chosen class of "plots", maps from open subsets of Euclidean spaces into X, that behave like the smooth maps. Smooth manifolds and Fréchet manifolds form full subcategories. Mapping spaces, subsets and quotients of diffeological spaces are again diffeological.

**Thin homotopy and the thin loop space.** A homotopy h between two paths with the same endpoints is thin if the map (s, t) ↦ h(s)(t) from the square to X has rank one, so it sweeps out no area. The thin loop space LX is the set of smooth loops S<sup>1</sup> → X up to thin homotopy.
- Example: a reparametrisation of a path is a thin homotopy.

**Fusion map.** Let A be an abelian Lie group. A fusion map is a smooth map f : LX → A such that, for any three paths γ<sub>1</sub>, γ<sub>2</sub>, γ<sub>3</sub> with a common start and a common end, f(γ̄<sub>2</sub> ⋆ γ<sub>1</sub>) · f(γ̄<sub>3</sub> ⋆ γ<sub>2</sub>) = f(γ̄<sub>3</sub> ⋆ γ<sub>1</sub>). Here ⋆ is composition of paths and the bar reverses a path.
- Fusion maps form a group Fus(LX, A) under pointwise multiplication.

## Main results

**Theorem (bundles with connection; Theorem A).** Let X be a connected diffeological space and A an abelian Lie group. The group of isomorphism classes of principal A-bundles with connection over X is isomorphic to Fus(LX, A).
- Step 1, transgression: send a bundle with connection to its holonomy, and check that holonomy is smooth, thin-homotopy invariant and fusion.
- Step 2, regression: from a fusion map f, build the bundle as a quotient of paths from a base point times A, where two paths with the same end are identified using the value of f on the loop they form.

**Corollary (flat bundles; Corollary A).** Under the isomorphism of Theorem A, flat bundles correspond to the locally constant fusion maps.

**Theorem (bundles without connection; Theorems B and C).** Let M be a connected smooth manifold. The group of isomorphism classes of smooth principal A-bundles over M is isomorphic to hFus(LM, A), the group of fusion maps up to paths in the space of fusion maps. Forgetting the connection on the bundle side matches passing to these classes on the loop side.
- Why manifolds only: the proof uses that every bundle over a manifold admits a connection.

## Note, then ignore

- Sitting instants. Paths are required to be constant near both ends, so that composed paths stay smooth. Safe to skip on a first reading.
- A can be discrete. The structure group is any abelian Lie group, also a discrete or non-compact one. The non-abelian case is not treated here. Safe to skip.
- Barrett's earlier theorem. Barrett proved a version of Theorem A for manifolds with a fixed base point and a slightly different loop condition. The paper extends it. Safe to skip.
- Sheaf theory. Section 3 puts a Grothendieck topology on diffeological spaces and proves that bundles glue (Theorems 3.1.5 and 3.2.2). This is machinery for the proofs. Safe to skip.
- The notation h<sub>0</sub>. It means "isomorphism classes of objects" of a groupoid of bundles. Safe to skip.

## One next step

Open the paper at Section 1 and read from the displayed fusion identity down to the end of the statement of Theorem A, about ten lines on pages 3 and 4.

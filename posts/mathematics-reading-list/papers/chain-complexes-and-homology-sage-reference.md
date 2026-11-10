source: https://doc.sagemath.org/pdf/en/reference/homology/homology.pdf
slogan: Sage stores a chain complex as a list of matrices, so homology becomes a matrix calculation you can run and check by hand.
basis: the introduction and the main theorem statements

## Before you start

This is a software manual of about 120 pages, most of it method signatures and doctests. The likely feeling is boredom, with a little guilt for being bored by something useful. Both are fine. Nobody reads a reference from front to back, and you need not either. What the manual offers is a way to test a homology computation in seconds after you have done it on paper. Play with one example first. Coverage of the rest can wait, or never happen.

## The story

Homology on paper is slow. You write boundary matrices, row-reduce, and hope the signs are right. People wanted a machine to do this and return honest groups, torsion included. The obstacle is small but real: a program needs fixed conventions for grading, for the direction of the differential, and for the ring. Sage's answer is plain. A chain complex is a dictionary of matrices, one per degree. Homology over a field is rank and nullity. Homology over ℤ comes from the Smith normal form of the boundary matrices. The manual's first example is the complex with one map ℤ<sup>3</sup> → ℤ<sup>2</sup> given by the matrix with rows (3, 0, 0) and (0, 0, 0). Sage returns ℤ × ℤ in degree 0 and ℤ × C3 in degree 1. Later chapters add chain maps, homotopies, and cup products.

## Main definitions

**Chain complex (Chapter 1).** A family of R-modules C<sub>n</sub> with maps d<sub>n</sub> : C<sub>n</sub> → C<sub>n+1</sub> such that d<sub>n+1</sub> ∘ d<sub>n</sub> = 0. In Sage, R is commutative and every C<sub>n</sub> is free, so each d<sub>n</sub> is a matrix.
- Direction: the differential raises degree by 1 by default. The parameter `degree_of_differential` changes this, for example to −1.
- Grading: the default is ℤ. Any free abelian group is allowed.

**Chain homotopy (Chapter 4).** For chain maps f, g : C → D, with differential of degree −1, a family of maps H<sub>n</sub> : C<sub>n</sub> → D<sub>n+1</sub> with ∂H + H∂ = f − g. Homotopic maps induce the same map on homology.

**Chain contraction (Chapter 4).** A chain homotopy H : C → C together with chain maps π : C → D and ι : D → C such that H is a homotopy between the identity of C and ιπ, and πι = 1, πH = 0, Hι = 0, HH = 0. It makes C and D have isomorphic homology.

**Algebraic topological model (Chapter 10).** For a simplicial or cubical complex K and a field F, a chain complex M with zero differential, with a chain contraction from the chain complex of K onto M. Then M is the homology of K, and ι sends each class to a cycle that represents it.

## Main results

**Claim (homology algorithm; the `homology` method, Chapter 1).** For a bounded complex of free modules over a field, Sage finds the dimension of each homology space from ranks and nullities. Over ℤ, it finds each homology group from the Smith normal form of the boundary matrices. For any other base ring, the method returns an error.
- Case small matrices: Sage calls PARI. This is the default.
- Case large matrices: the option `'dhsw'` uses an elimination algorithm of Dumas, Heckenbach, Saunders and Welker.

**Claim (cup products from a model; Chapters 9 and 10).** Given an algebraic topological model of K over a field, Sage builds homology and cohomology as vector spaces with a basis. It then computes cup products and cohomology operations on the cohomology of K. The construction follows Pilarczyk and Réal. I read the module descriptions here, not the code.

**Claim (induced maps; Chapter 11).** A map of simplicial complexes gives a matrix for the induced map on homology or cohomology. This works with field coefficients only, and the default field is ℚ.

**Claim (two built-in complexes; Chapters 6 and 7).** Sage constructs the Koszul complex of elements x<sub>1</sub>, …, x<sub>n</sub> of a ring R, as a differential on the exterior algebra. It also constructs the Hochschild complex C<sub>n</sub>(A, M) = M ⊗ A<sup>⊗n</sup> of an algebra A with a bimodule M.

## Note, then ignore

- Cochain convention by default. Sage's differential goes up in degree unless you say otherwise, so a "chain complex" in Sage looks like a cochain complex in most textbooks. It matters only when you compare indices. Safe to skip on a first reading.
- Only ℤ or a field. You can define a complex over any commutative ring, but homology will not compute there. Safe to skip.
- `'no_chomp'`. This is an old name for the option `'auto'`, kept for backward compatibility. Safe to skip.
- Printing of groups. C3 means the cyclic group of order 3, and the `HomologyGroup` class exists only to print groups this way. Safe to skip.
- Classes "not intended to be created directly". Several classes, such as the cohomology ring, are reached through methods of a cell complex. The manual says so in notes. Safe to skip.

## One next step

Open the manual at the `homology` method in Chapter 1 and read only the paragraph headed ALGORITHM and the first example after it. Then type that example into Sage.

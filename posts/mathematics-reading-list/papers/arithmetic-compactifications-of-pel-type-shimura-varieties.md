source: https://www.kwlan.org/articles/cpt-PEL-type-thesis.pdf
slogan: Every smooth integral model of a PEL-type Shimura variety has smooth toroidal and projective minimal compactifications, so its boundary is under control over the integers.
basis: the introduction and the main theorem statements

## Before you start

This thesis has 1117 pages. The feeling it raises is overwhelm, and perhaps dread that it is too long ever to know. Nothing is wrong with you for feeling that. The author himself calls the work "a long student exercise", and nobody reads it front to back. What you may want from it is small: to know what a compactified Shimura variety over the integers looks like at the boundary. Two theorem statements give you that. Enjoy those two pages, and treat the other thousand as a library.

## The story

Over ℂ, moduli spaces of abelian varieties with polarisation, endomorphisms and level structure (PEL) are quotients of Hermitian symmetric spaces. Baily and Borel gave each a canonical projective compactification, which is very singular. Mumford and coworkers built toroidal ones, which can be smooth but depend on choices. Arithmetic needs both over rings of integers. Faltings and Chai did this for Siegel modular varieties by studying how abelian varieties degenerate to semi-abelian ones, and claimed the method was general. Lan carries it out for all smooth PEL moduli problems in Kottwitz's sense. The new difficulty is level structures. A symplectic isomorphism mod n need not lift, and a naive construction adds unwanted boundary components. A Weil pairing calculation on degeneration data picks out the right ones.

## Main definitions

**PEL-type O-lattice and good primes.** B is a finite-dimensional semisimple ℚ-algebra with a positive involution, and O is an order in B stable under the involution. A PEL-type O-lattice is a lattice L with an alternating pairing and a compatible action of O, plus a complex structure on L ⊗ ℝ. A finite list of primes is bad. □ is a chosen set of good primes, and S<sub>0</sub> = Spec(O<sub>F<sub>0</sub>,(□)</sub>), where F<sub>0</sub> is the reflex field.

**Moduli problem M<sub>H</sub> (Definition 1.4.1.4).** Let H be an open compact subgroup of G(ℤ̂<sup>□</sup>). Over a scheme S over S<sub>0</sub>, M<sub>H</sub>(S) is the groupoid of tuples (A, λ, i, α<sub>H</sub>). Here A is an abelian scheme over S, λ is a polarisation of degree prime to □, i: O → End<sub>S</sub>(A) is compatible with λ, and α<sub>H</sub> is a level-H structure.
- Condition: Lie(A) satisfies the determinantal condition given by L ⊗ ℝ.
- Morphisms: isomorphisms of A that respect λ, i and α<sub>H</sub>.

**Degenerating family.** A semi-abelian scheme G over a base, with λ, i and α<sub>H</sub> defined where G is abelian. Semi-abelian means that each fibre is an extension of an abelian variety by a torus.

**Cone decomposition Σ.** A compatible choice of rational polyhedral cone decompositions, one for each cusp label. "Smooth" and "projective" are conditions on Σ that pass to the compactification.

## Main results

**Theorem (representability; Theorem 1.4.1.12).** M<sub>H</sub> is a smooth separated algebraic stack of finite type over S<sub>0</sub>. It is an algebraic space when the objects have no non-trivial automorphisms, in particular when H is neat.
- Method: prorepresentability of local moduli and Artin's criterion, in Chapter 2.

**Theorem (toroidal compactifications; Theorem 6.4.1.1).** For each compatible admissible smooth Σ there is a proper smooth algebraic stack M<sub>H</sub><sup>tor</sup> over S<sub>0</sub> that contains M<sub>H</sub> as an open dense substack, with a degenerating family extending the universal tuple. It is an algebraic space when H is neat. The complement of M<sub>H</sub> is a relative Cartier divisor with normal crossings. The extended Kodaira-Spencer map identifies a sheaf built from the family with the logarithmic 1-differentials of M<sub>H</sub><sup>tor</sup>.
- Strata: indexed by classes of (cusp label, cone). Each is a torus torsor over an abelian scheme over a smaller PEL moduli stack.
- Method: build boundary charts from degeneration data by Mumford's construction, then approximate and glue in the étale topology as Faltings and Chai do.

**Theorem (minimal compactification; Theorem 7.2.4.1).** There is a normal projective scheme M<sub>H</sub><sup>min</sup> over S<sub>0</sub> that contains the coarse moduli space of M<sub>H</sub> as an open dense subscheme. Let ω be the top exterior power of the dual of Lie(G). Some power of ω is the pullback of an ample line bundle on M<sub>H</sub><sup>min</sup>. When H is neat, ω itself extends to an ample line bundle.
- Construction: M<sub>H</sub><sup>min</sup> is Proj of the graded algebra of sections of powers of ω on any M<sub>H</sub><sup>tor</sup>. The algebra is finitely generated and does not depend on Σ.
- Strata: indexed by cusp labels alone, and there is a canonical map M<sub>H</sub><sup>tor</sup> → M<sub>H</sub><sup>min</sup>.

## Note, then ignore

- Stacks versus spaces. The statements are for algebraic stacks. For neat H you get algebraic spaces, and M<sub>H</sub> is then an open subscheme of M<sub>H</sub><sup>min</sup>. Safe to skip on a first reading.
- Thesis versus book. This is the 2008 Harvard thesis. A revised version appeared later as a book, and numbering may differ. Safe to skip.
- Smooth models only. The level H involves only primes outside □. The thesis leaves non-smooth models aside, because it is unclear what the right statement is there. Safe to skip.
- Symplectic-liftability. This technical condition turns adelic level structures into ones on finite étale group schemes. It is the heart of the new work and not needed to read the theorems. Safe to skip.
- Order of construction. Unlike over ℂ, the toroidal compactification comes first and the minimal one is deduced from it. Safe to skip.

## One next step

Open the thesis at Theorem 6.4.1.1 (printed page 836) and read items 1 to 3 only.

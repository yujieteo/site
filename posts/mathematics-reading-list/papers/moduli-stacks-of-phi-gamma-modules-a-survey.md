source: https://www.math.uchicago.edu/~emerton/pdffiles/bonn-lectures-survey-article.pdf
slogan: Galois representations of a p-adic field form bad families, but their (φ, Γ)-modules form a stack whose components match Serre weights.
basis: the introduction and the main theorem statements

## Before you start

This survey sits on top of p-adic Hodge theory, formal algebraic stacks and the Langlands programme at once. The likely feeling is overwhelm: three subjects, 59 pages, and a 250-page book behind them. It is fine to feel that. The authors wrote these ten lectures in an informal voice, and Lecture 1 needs only the idea of a Galois representation. If you have wondered what "a space of all Galois representations" could mean, that lecture answers it with pictures. Read it for the pictures first.

## The story

Fix a finite extension K of ℚ<sub>p</sub> and a dimension d. One wants a moduli space of continuous representations of G<sub>K</sub> = Gal(K̄/K) on rank d modules over p-adic rings. The topology of G<sub>K</sub> blocks this. Even the family of unramified characters "Frobenius ↦ x" is not continuous over the ring 𝔽<sub>p</sub>[x, x<sup>−1</sup>]. Replacing G<sub>K</sub> by its Weil–Deligne group works when p is invertible. With p-adic coefficients and d > 1 the result is an Ind-scheme with the right points but a broken shape, like a plane replaced by a line with formal fuzz. The unblocking idea: Fontaine's theory turns a representation into an étale (φ, Γ)-module, a piece of semilinear algebra. Such modules make sense over any coefficient ring. Their moduli stack X<sub>d</sub> contains the old space and has good geometry.

## Main definitions

**Étale φ-module (Definition 3.3.1).** Let R be a ℤ<sub>p</sub>-algebra with an endomorphism φ lifting Frobenius mod p. An étale φ-module is a finite R-module M with a φ-semilinear map M → M whose linearisation φ<sup>\*</sup>M → M is an isomorphism.

**Étale (φ, Γ)-module (Section 3.3).** An étale φ-module over the ring A<sub>K,A</sub>, with a commuting continuous semilinear action of Γ. Here A is the coefficient ring, and A<sub>K,A</sub> is a ring of Laurent series type in one variable with coefficients built from A.
- Over a finite ℤ<sub>p</sub>-algebra, these are equivalent to G<sub>K</sub>-representations.
- Over a general A there are more modules than representations. That is the point.

**The stack X<sub>d</sub> (Definition 5.1.1).** For a p-adically complete ℤ<sub>p</sub>-algebra A, X<sub>d</sub>(A) is the groupoid of projective étale (φ, Γ)-modules of rank d with A-coefficients.
- Its points over the algebraic closure of 𝔽<sub>p</sub> are the representations G<sub>K</sub> → GL<sub>d</sub>.
- At each point, the framed deformation ring of the representation gives a versal ring.

**Serre weight (Section 7.3).** An irreducible representation of GL<sub>d</sub>(k) in characteristic p, where k is the residue field of K. These are given by highest weights.

## Main results

**Theorem (X<sub>d</sub> is a formal algebraic stack; announced after Definition 5.1.1, Ind-algebraic in Proposition 5.3.9).** X<sub>d</sub> is a Noetherian formal algebraic stack. The survey proves the weaker statement that it is a limit of algebraic stacks of finite presentation along closed immersions. I saw the stronger one stated as a main result without a number.
- Step 1: stacks of étale φ-modules are Ind-algebraic, after Pappas and Rapoport (Lecture 4).
- Step 2: add the Γ-action using a dense copy of ℤ in Γ and a bound on heights.

**Theorem (crystalline substacks; Theorem 6.2.4).** For h ≥ 0 there is a closed substack of X<sub>d</sub>, a p-adic formal algebraic stack of finite type and flat over Spf ℤ<sub>p</sub>. Its points over a finite flat ℤ<sub>p</sub>-algebra are exactly the representations that are crystalline with Hodge–Tate weights in [0, h].

**Theorem (the reduced stack; Theorems 7.3.3 and 9.1.1).** The underlying reduced stack X<sub>d,red</sub> is an algebraic stack of finite presentation over a finite field. It is equidimensional of dimension [K : ℚ<sub>p</sub>] d(d−1)/2. Over the algebraic closure of 𝔽<sub>p</sub>, its irreducible components are in bijection with Serre weights.
- Step 1: build families of successive extensions of characters and count dimensions with the Herr complex (Lecture 7).
- Step 2: show there are no other components, using Theorem 8.1.1: every representation G<sub>K</sub> → GL<sub>d</sub> over the algebraic closure of 𝔽<sub>p</sub> lifts to a crystalline representation with regular Hodge–Tate weights.

**Conjecture (geometric Breuil–Mézard; Conjecture 9.2.5).** There are cycles Z<sub>k</sub> on X<sub>d,red</sub>, one for each Serre weight k, such that the special fibre of every potentially crystalline substack of regular Hodge type λ and inertial type τ is the sum of the Z<sub>k</sub> with the multiplicities read off from representation theory of GL<sub>d</sub>.

## Note, then ignore

- K unramified. Lectures 3 and 4 assume K/ℚ<sub>p</sub> unramified to keep the rings simple. The authors say this is for exposition only. Safe to skip on a first reading.
- Several period rings. Lecture 3 introduces a diagram of rings because different steps need different ones. They give equivalent module categories (Proposition 3.4.3). Skip the diagram at first.
- Labelling convention. The survey labels components by a Serre weight that differs from the book's by a duality twist (footnote 4). Skip it unless you compare the two.
- Formal versus algebraic. X<sub>d</sub> is formal because p is topologically nilpotent on it, and only the crystalline pieces and the reduced stack are close to ordinary geometry. Lecture 2 has the definitions. Skim it.
- Lecture 10. It is marked speculative and reports work in progress on a categorical p-adic Langlands programme. Skip it at first.

## One next step

Open the survey at Section 1.1 and read Example 1.1.1, then look at Figures 1 to 4 on the next pages.

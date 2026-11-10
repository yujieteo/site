source: https://arxiv.org/pdf/math/0612371
slogan: Chiral differential operators on X are the same data as factorising trivialisations of the determinant gerbe on the formal loop space of X.
basis: the introduction and the main theorem statements

## Before you start

This is the fourth paper of a series, and it leans on the first three and on Beilinson and Drinfeld. You may feel shut out, as if you arrived late to a long conversation. That feeling is fair, and you can let it be there. If you want to see why vertex algebras on a manifold meet an obstruction built from Chern classes, the introduction alone tells you. Read it for the picture. The 33 pages can wait.

## The story

On flat space ℂ<sup>N</sup> there is a basic vertex algebra, the Heisenberg module V<sub>N</sub>, built from fields a(t) and b(t). People wanted the same thing on a curved complex manifold X: a sheaf of vertex algebras that looks like V<sub>N</sub> locally. Gorbounov, Malikov and Schechtman glued local copies by changes of coordinates. The coordinate changes act only projectively, so the gluing can fail. Such sheaves form a gerbe, and its class is ½c<sub>1</sub>(X)<sup>2</sup> − c<sub>2</sub>(X). Kapranov and Vasserot explain this from the loop space. The sheaf "should" be the global sections of a D-module of delta functions along the Taylor loops inside all formal loops. Taking sections of a D-module on an infinite-dimensional space needs a choice of determinant. That choice is an object of the determinantal gerbe. So the two anomalies are one.

## Main definitions

**Formal arcs and formal loops.** For a scheme X of finite type over ℂ, the scheme L<sup>0</sup>X represents maps from the formal disc: an S-point is a map of ringed spaces from (S, 𝒪<sub>S</sub>[[t]]) to X. The ind-scheme LX does the same with Laurent series whose negative coefficients are nilpotent. So LX is a formal thickening of L<sup>0</sup>X.
- Maps: X ← L<sup>0</sup>X → LX, where the first map π is affine.
- For smooth X, LX is smooth and "locally locally compact", which is the class of ind-schemes Section 1 treats.

**Determinantal gerbe Det<sub>LX</sub>.** The tangent spaces of LX are infinite-dimensional but have a Tate structure. So they have no determinant line, only a gerbe of determinant theories, with band the invertible functions 𝒪<sup>×</sup><sub>LX</sub>. An object E of this gerbe gives a functor Γ<sub>E</sub> of "global sections" on D-modules.

**Sheaf of chiral differential operators (CDO).** A sheaf V of filtered graded vertex algebras on X with an isomorphism from gr(V) to a fixed commutative model S<sub>LX/L<sup>0</sup>X</sub>, the symmetric algebra of the normal bundle of L<sup>0</sup>X in LX pushed down to X (Definition 3.3.2).
- On affine space 𝔸<sup>N</sup>: the sheaf made from the Heisenberg module V<sub>N</sub>.
- Locally trivial CDO: locally the pullback of that model along an étale map to 𝔸<sup>N</sup>.

**Factorising object.** The loop spaces over powers of a curve C form a factorisation semigroup, and the determinantal gerbes form a factorisation gerbe over it. A factorising object is an object of the gerbe that is compatible with restriction to diagonals and with splitting over disjoint points (Definition 2.7.3).

## Main results

**Theorem (the gerbe of CDO; Theorem 3.3.4, due to Gorbounov, Malikov and Schechtman).** For X smooth of finite type over ℂ, sheaves of CDO form a stack on the Zariski topology of X with band Ω<sup>2,cl</sup>, the sheaf of closed 2-forms. The sheaf of isomorphism classes is the third de Rham cohomology sheaf. The locally trivial ones form a gerbe with band Ω<sup>2,cl</sup>.
- Consequence stated in the introduction: the class of the gerbe in H<sup>2</sup>(X, Ω<sup>2,cl</sup>) is ½c<sub>1</sub>(X)<sup>2</sup> − c<sub>2</sub>(X).

**Theorem (main theorem; Theorem 3.4.2).** Let X be smooth of finite type over ℂ. For each global, locally trivial, factorising object E of the determinantal gerbe, the sections Γ<sub>E</sub> of the delta-function D-module form a sheaf of factorisation algebras over X. Its fibre at a point of the curve is a sheaf of vertex algebras with a filtration that makes it a sheaf of CDO. The functor E ↦ Γ<sub>E</sub> is an equivalence from the gerbe of such objects to the gerbe of locally trivial CDO.
- Step 1: define Γ<sub>E</sub> for D-modules on locally locally compact ind-schemes (Section 1), and check factorisation one coherence level up, for gerbes (Section 2).
- Step 2: match the bands. The symplectic action map S sends a closed 2-form ω to the function exp(∫ d<sup>−1</sup>ω) on LX, and it identifies Ω<sup>2,cl</sup> with the factorisable invertible functions.

**Corollary (the two classes agree; Corollary 3.4.3).** After inverting 2, the image under S of the class of the CDO gerbe equals the class built from the Chern character ch<sub>2</sub> of the tangent bundle by evaluation and a boundary map. That second class is the class of the determinantal gerbe, computed in the second paper of the series.

## Note, then ignore

- "Locally locally compact". The first "locally" is Zariski-local. "Locally compact" is an ind-pro condition due to Kato. It fixes the class of ind-schemes where sections make sense. Safe to skip on a first reading.
- Countable index sets. The authors assume the indexing posets of ind-schemes are countable so that cofinal reindexing works. Safe to skip.
- The square-root sign on R((t)). It marks Laurent series with nilpotent negative coefficients, which is what makes the loops "formal". Safe to skip.
- Polyhedral axioms. Section 2 rewrites the Beilinson–Drinfeld factorisation axioms with a family of polyhedra, to handle gerbes. Safe to skip at first.
- The Itô analogy. Paragraph (0.4) compares the second-derivative term in the change of variables to Itô's formula. It is a remark, not used in proofs. Safe to skip, though pleasant.

## One next step

Open the paper and read only paragraphs (0.2) and (0.3) of the introduction, half a page in all. They state the anomaly formula and the main identification.

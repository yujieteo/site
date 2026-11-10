source: https://webhomes.maths.ed.ac.uk/~v1ranick/maslovnotes.pdf
slogan: The Maslov index of three lagrangians is the signature of one symmetric form, and it corrects the sum when signatures of glued manifolds are added.
basis: the introduction and the main theorem statements

## Before you start

These are 125 pages of working notes dated November 2016, with no introduction and no abstract. They open on sawtooth functions without saying why. The likely feeling is confusion, a sense of having missed the first lecture. You have not missed anything, and it is fine to feel adrift. If you want one algebraic definition that covers the many versions of the Maslov index, Section 5.1 has it in two pages. Go there for the pleasure of seeing them agree. Nobody needs to read these notes end to end.

## The story

The signature of a 4k-dimensional manifold adds up when you glue two manifolds along a closed boundary component. Wall noticed that it fails to add when the gluing region itself has a boundary. The error depends on three lagrangian subspaces of a symplectic vector space, one from each of three pieces meeting along a codimension 2 manifold. The same integer appears elsewhere under the name Maslov index: in Arnold's and Leray's work on paths of lagrangians, in Kashiwara's triple index, and in Meyer's cocycle on the symplectic group. Ranicki's notes put all of these in one algebraic frame. Each is the signature of a symmetric form built from the three lagrangians. For lines in the plane the answer is the sign of a product of three sines.

## Main definitions

**Lagrangian and triformation.** Let (K, φ) be a nonsingular symplectic form over ℝ. A lagrangian is a subspace L ⊂ K on which φ vanishes and which equals its own annihilator. A symplectic triformation (K, φ; L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub>) is such a form with three lagrangians (Definition 4.12). The notes work over a general ring with involution first.
- Example: in the plane with the standard form, the lagrangians are the lines L(θ) spanned by (cos θ, sin θ).

**Triple signature.** Let U be the space of triples (x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>) ∈ L<sub>1</sub> ⊕ L<sub>2</sub> ⊕ L<sub>3</sub> with x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub> = 0 in K. It carries the symmetric form ψ(x, y) = φ(x<sub>1</sub>, y<sub>2</sub>). The triple signature σ(K, φ; L<sub>1</sub>, L<sub>2</sub>, L<sub>3</sub>) is the signature of (U, ψ), an integer (Definitions 5.1 and 5.3).

**Maslov index of a loop.** Let Λ(n) be the space of lagrangians in the standard symplectic ℝ<sup>2n</sup>. Each lagrangian is A(ℝ<sup>n</sup> ⊕ 0) for a unitary matrix A, and Λ(n) = U(n)/O(n). The map Mas : Λ(n) → S<sup>1</sup> sends this lagrangian to det(A)<sup>2</sup>. The Maslov index of a loop in Λ(n) is the degree of its image under Mas (Definition 6.9).

**Meyer cocycle.** A function τ : Sp(2g, ℝ) × Sp(2g, ℝ) → ℤ, defined as the signature of an explicit symmetric form built from two symplectic matrices A and B (Definition 5.11).

## Main results

**Proposition (two definitions agree; Proposition 5.2).** For a symplectic triformation over ℝ, Wall's non-additivity invariant, the signature of (U, ψ), equals the Kashiwara-Shapira Maslov index, the signature of an explicit symmetric form on L<sub>1</sub> ⊕ L<sub>2</sub> ⊕ L<sub>3</sub> built from φ.
- Step 1: L<sub>1</sub> is a sublagrangian of the big form on L<sub>1</sub> ⊕ L<sub>2</sub> ⊕ L<sub>3</sub>.
- Step 2: the quotient L<sub>1</sub><sup>⊥</sup>/L<sub>1</sub> is isomorphic to (U, ψ), and passing to such a quotient keeps the signature.

**Proposition (the plane; Proposition 5.5).** For three lines L(θ<sub>1</sub>), L(θ<sub>2</sub>), L(θ<sub>3</sub>) in the symplectic plane, the triple signature is sgn(sin(θ<sub>2</sub> − θ<sub>1</sub>) sin(θ<sub>3</sub> − θ<sub>2</sub>) sin(θ<sub>1</sub> − θ<sub>3</sub>)). It is 0 when two lines coincide and ±1 otherwise, according to the cyclic order of the lines.

**Theorem (Wall non-additivity; Proposition 5.7).** Let W and W′ be 4k-dimensional relative cobordisms glued along N<sub>2</sub>, where N<sub>1</sub>, N<sub>2</sub>, N<sub>3</sub> are three null-cobordisms of a closed (4k−2)-manifold M. Then σ(W ∪ W′) = σ(W) + σ(W′) + σ(M; N<sub>1</sub>, N<sub>2</sub>, N<sub>3</sub>). The last term is the triple signature of the lagrangians L<sub>j</sub> = ker(H<sub>2k−1</sub>(M; ℝ) → H<sub>2k−1</sub>(N<sub>j</sub>; ℝ)) in the intersection form of M.

**Theorem (Arnold; Proposition 6.8).** The map Mas induces an isomorphism π<sub>1</sub>(Λ(n)) ≅ ℤ. The universal cover of Λ(n) is the pullback of ℝ → S<sup>1</sup> along Mas.
- Step 1: identify Λ(n) with U(n)/O(n).
- Step 2: det<sup>2</sup> is well defined on the quotient because det = ±1 on O(n).

## Note, then ignore

- Sign conventions. The notes give the plane formula with sin(θ<sub>1</sub> − θ<sub>3</sub>) in Proposition 5.5 and with sin(θ<sub>3</sub> − θ<sub>1</sub>) in Example 6.2. These differ by a sign. The notes are a draft. Safe to skip on a first reading.
- Section 1. The sawtooth, η and logarithm functions there are tools for later formulas, not the main story. Safe to skip on a first reading.
- General rings. Section 4 works over a ring with involution, and some statements need 1/2 in the ring. Over ℝ this is automatic. Safe to skip on a first reading.
- Real-valued Maslov index of a path. For a path that is not a loop the index is a real number, defined by a lift to the universal cover. Safe to skip on a first reading.
- Discrete topology. The cocycles live on S<sup>1</sup> and Sp(2g, ℝ) viewed as discrete groups, which is what S<sup>1δ</sup> means. Safe to skip on a first reading.

## One next step

Open the PDF at page 55, Section 5.1, and read Definition 5.1 and Proposition 5.2. Then look at the sine formula in Proposition 5.5 on page 57.

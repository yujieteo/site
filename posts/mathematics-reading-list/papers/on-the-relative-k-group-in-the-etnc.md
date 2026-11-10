source: https://arxiv.org/pdf/1806.10856
slogan: The relative K-group that holds equivariant Tamagawa numbers is the K<sub>1</sub> of locally compact modules, so a Tamagawa number is again a Haar measure.
basis: the introduction and the main theorem statements

## Before you start

The paper opens by assuming you know the Burns–Flach form of the equivariant Tamagawa number conjecture. Few people do. That sentence can bring a flush of embarrassment, as if you came to the wrong room. You are allowed to feel that and stay. The second section is a gentle survey that needs only Haar measure and exact sequences. If you want to know why a Tamagawa number deserves to be called a volume, that section answers it. Read it for the idea. The fifty pages after it are optional.

## The story

A classical Tamagawa number is a ratio of volumes, a positive real number. Burns and Flach let a ring 𝔄 act, and their Tamagawa number lives in a relative K-group K<sub>0</sub>(𝔄, ℝ). For 𝔄 = ℤ this group is ℝ<sub>>0</sub>, so the volume is still visible. In general the group is defined only as the term that completes a long exact sequence. It has no meaning of its own. Braunling looks for one. Locally compact abelian groups form an exact category, and work of Clausen shows that its universal determinant is Haar measure. So take locally compact groups with an 𝔄-action and compute the K-theory of that category. For regular orders, its K<sub>1</sub> is the relative group. The "equivariant Haar measure" is then the universal determinant of that category.

## Main definitions

**Order and regularity.** A is a finite-dimensional semisimple ℚ-algebra and 𝔄 ⊂ A is an order, with A<sub>ℝ</sub> = A ⊗ ℝ. The order is regular if every finitely generated right 𝔄-module has a finite projective resolution.
- Regular: maximal orders and, more generally, hereditary orders.
- Not covered: group rings ℤ[G], which the paper describes as only Gorenstein.

**The category LCA<sub>𝔄</sub>.** An object is a right 𝔄-module with a locally compact abelian group structure on its additive group, such that each element of 𝔄 acts continuously. Morphisms are continuous module maps. It is an exact category, so it has K-groups.
- For 𝔄 = ℤ this is the category LCA of locally compact abelian groups.

**Relative K-group.** K<sub>0</sub>(𝔄, ℝ) is the group that fits in the long exact sequence … → K<sub>1</sub>(𝔄) → K<sub>1</sub>(A<sub>ℝ</sub>) → K<sub>0</sub>(𝔄, ℝ) → K<sub>0</sub>(𝔄) → …. There is a canonical isomorphism K<sub>0</sub>(ℤ, ℝ) ≅ ℝ<sub>>0</sub>.

**Determinant functor and Haar torsor.** A determinant functor sends each object of an exact category to an object of a Picard groupoid, with a compatible isomorphism for each short exact sequence. Deligne showed there is a universal one, with values in "virtual objects". The Haar functor Ha sends a locally compact abelian group G to the set of its Haar measures, a torsor under ℝ<sub>>0</sub>.

## Main results

**Theorem (relative equals absolute; Theorem 11.3).** Let 𝔄 be a regular order in a finite-dimensional semisimple ℚ-algebra A. Then there is a canonical long exact sequence … → K<sub>n</sub>(𝔄) → K<sub>n</sub>(A<sub>ℝ</sub>) → K<sub>n</sub>(LCA<sub>𝔄</sub>) → K<sub>n−1</sub>(𝔄) → …, and canonical isomorphisms K<sub>n</sub>(LCA<sub>𝔄</sub>) ≅ K<sub>n−1</sub>(𝔄, ℝ) for all n. In particular K<sub>1</sub>(LCA<sub>𝔄</sub>) ≅ K<sub>0</sub>(𝔄, ℝ).
- Idea: compact and discrete modules have trivial determinant, by an Eilenberg swindle with infinite products and sums. So only the lattice 𝔄 inside the real vector space A<sub>ℝ</sub> contributes.
- Regularity enters to compare projective modules with all finitely generated modules. I did not read the proof beyond this.

**Theorem (any order, G-theory; Theorem 11.4).** For an arbitrary order 𝔄 the same long exact sequence holds with G<sub>n</sub>(𝔄), the K-theory of all finitely generated modules, in place of K<sub>n</sub>(𝔄). The author does not know whether this version is useful for the conjecture.

**Theorem (Haar measure is universal; Theorem 12.8).** The Haar functor from LCA to ℝ<sub>>0</sub>-torsors is the universal determinant functor of LCA. So Deligne's virtual objects for LCA are the ℝ<sub>>0</sub>-torsors. The paper credits this essentially to Clausen.
- Example: multiplication by −1 on ℝ has trivial determinant in LCA, because ℤ ⊂ ℝ is discrete and ℝ/ℤ is compact. Haar measure forgets the sign that the top exterior power keeps.

**Theorem (reciprocity law; Theorem 13.1).** For an arbitrary order 𝔄, the composite of natural maps from K(𝔄) to the K-theory of the finite adelic and real completions, and on to K(LCA<sub>𝔄</sub>), is zero.

## Note, then ignore

- Index shift. K<sub>1</sub> of the new category matches K<sub>0</sub> of the relative group. The shift comes from the place of the term in the long exact sequence. Safe to skip.
- Presentation by double exact sequences. Theorem 2.5 uses Nenashev's generators and relations for K<sub>1</sub> to present K<sub>0</sub>(𝔄, ℝ). It is a restatement. Safe to skip.
- Rationality. The image of K<sub>0</sub>(𝔄, ℚ) inside K<sub>1</sub>(LCA<sub>𝔄</sub>) is not identified. The conjecture's rationality part needs it, and the paper leaves it open. Safe to skip.
- Only the reals. The method uses that ℝ is a locally compact field. It is not a general recipe for relative K-groups. Safe to skip.
- Non-connective K-theory. The proof runs in a stable ∞-categorical setting with localising invariants. For regular rings this agrees with Quillen K-theory. Safe to skip.

## One next step

Open the paper at Section 2 and read only Example 2.2, where the sequence ℤ → ℝ → ℝ/ℤ shows that Haar measure cannot see orientation.

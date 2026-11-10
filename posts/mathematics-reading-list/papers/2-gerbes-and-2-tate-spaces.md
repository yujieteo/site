source: https://arxiv.org/pdf/0708.4401
slogan: A group acting on a 2-gerbe yields a central extension one categorical level up, and double loop groups get theirs this way.
basis: the full text

## Before you start

The words here may raise a quiet dread: gerbes, 2-gerbes, bicategories, ind-pro objects, all in 14 pages. You may feel you lack the background, and that feeling is allowed to sit there while you read. The authors only sketch most proofs, so nobody expects you to check diagrams. If you want to see where the central extension of a loop group comes from, this is the short route. Read for the pattern first. Finishing can wait.

## The story

A central extension of the loop group G((t)) is the starting point of affine Lie theory. People wanted the same for the double loop group G((s))((t)), and the usual cocycle formulas become unpleasant there. The authors use one observation instead. A central extension of G by 𝔾<sub>m</sub> is the same thing as a 𝔾<sub>m</sub>-gerbe with a G-action. So you do not write a cocycle. You find a category that G acts on. For V((t)) that category is the gerbe of determinant theories. Then they climb one step. A group acting on a 2-gerbe gives a central extension of the group seen as a 2-group. For a 2-Tate space such as V((s))((t)), the 2-gerbe consists of "gerbel theories". The double loop group acts on it, and the extension follows.

## Main definitions

**𝔾<sub>m</sub>-gerbe and 2-gerbe (over a point).** A 𝔾<sub>m</sub>-gerbe is a connected groupoid in which every object has automorphism group 𝔾<sub>m</sub>. A 2-gerbe with band A is a connected 2-groupoid (a bicategory with all arrows invertible in the weak sense) in which every 1-arrow has automorphism group A.
- Consequence: every Hom category C(A, B) of a 2-gerbe is a 1-gerbe with band A.

**2-group and its central extension.** A 2-group is a monoidal groupoid whose set of connected components π<sub>0</sub> is a group. A central extension of a group G, seen as a discrete 2-group, by an abelian group A is a 2-group with π<sub>0</sub> ≅ G and with automorphism group of the unit object ≅ A.
- Discrete 2-group: objects are the elements of G, and the only morphisms are identities.

**n-Tate space and lattice.** A 0-Tate space is a finite-dimensional vector space. An (n+1)-Tate space is a locally compact object of the category of n-Tate spaces, which is a special kind of ind-pro object. A lattice is an admissible compact subobject.
- n = 1: any 1-Tate space is non-canonically of the form V((t)), with V finite-dimensional.
- n = 2: any 2-Tate space is V((t)) with V a 1-Tate space, and V[[t]] is a lattice.

**Determinant theory and gerbel theory.** A determinant theory on a 1-Tate space assigns a line Δ<sub>L</sub> to each lattice L, with isomorphisms Δ<sub>L1</sub> ⊗ Det(L<sub>2</sub>/L<sub>1</sub>) → Δ<sub>L2</sub> for L<sub>1</sub> ⊂ L<sub>2</sub>, compatible on triples. A gerbel theory on a 2-Tate space assigns a 𝔾<sub>m</sub>-gerbe D<sub>L</sub> to each lattice, with equivalences D<sub>L</sub> → D<sub>L′</sub> ⊗ D<sub>L/L′</sub> for L′ ⊂ L, where D<sub>L/L′</sub> is the determinant gerbe of the 1-Tate space L/L′.
- Level 1: determinant theories form a 𝔾<sub>m</sub>-gerbe.

## Main results

**Theorem (action on a gerbe gives an extension; Theorem 1, credited to Brylinski).** Let a group G act on a 𝔾<sub>m</sub>-gerbe C. Each object A of C gives a central extension of G by 𝔾<sub>m</sub>. These depend functorially on A, so all are isomorphic. If an equivariant object exists, the extension splits.
- Step 1: take the set of pairs (g, φ) with g ∈ G and φ a morphism F<sub>g</sub>(A) → A.
- Step 2: multiply by (g<sub>1</sub>, φ<sub>1</sub>)(g<sub>2</sub>, φ<sub>2</sub>) = (g<sub>1</sub>g<sub>2</sub>, φ<sub>1</sub> ∘ F<sub>g1</sub>(φ<sub>2</sub>)). The axiom of an action gives associativity.

**Theorem (one level up; Theorem 3 and Lemma 1).** If G acts on a 2-gerbe with band A, there is an associated central extension of the discrete 2-group of G by A. Conversely, such a central extension is the same as a 2-gerbe over BG with band A.
- Step 1: by descent, a 2-gerbe with G-action is a 2-gerbe over BG.
- Step 2: pulling back along pt → BG gives a multiplicative gerbe on G, and this supplies the Hom-torsors and the monoidal structure.

**Theorem (2-Tate spaces; Theorems 5 and 6).** Gerbel theories on a 2-Tate space V form a 𝔾<sub>m</sub> 2-gerbe. The group GL(V) of continuous automorphisms acts on it. So each lattice L ⊂ V gives a 𝔾<sub>m</sub> central extension of the discrete 2-group of GL(V).
- Application: for a reductive group G with a finite-dimensional representation V, the map G((s))((t)) → GL(V((s))((t))) restricts the extension to the double loop group.

## Note, then ignore

- Sketched proofs. The paper says the 2-gerbe construction is "the same" as the 1-gerbe case with more diagrams, and does not write them out. Safe to skip on a first reading.
- Countable index sets. The authors assume the ind and pro systems are countable so that a reindexing trick works. Safe to skip.
- Exact, not abelian. The category of Tate spaces is only an exact category, which is why the word "admissible" appears. Safe to skip.
- The graded variant. Section 4.3.2 replaces lines by ℤ-graded lines. This yields a central extension of the group GL(V) itself, not only of the 2-group, and makes direct sums behave canonically. Safe to skip at first.
- Priority. The authors credit the idea to Kapranov and mention a similar unpublished result of Osipov. Safe to skip.

## One next step

Open the paper at Section 2.1 and read only Theorem 1 with its five-line proof. That is the whole mechanism in its smallest case.

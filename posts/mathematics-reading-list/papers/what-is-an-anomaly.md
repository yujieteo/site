source: https://arxiv.org/pdf/2307.08147
slogan: An anomaly is the projective nature of a quantum theory, the same way a projective representation carries a central extension.
basis: the introduction and the main theorem statements

## Before you start

"Anomaly" is a word that physicists use with ease and mathematicians often hear with unease. The likely feeling is a quiet worry that you are missing some folklore. You may be, and that is fine. This note is 17 pages and starts from projective spaces and linear algebra, not from Feynman diagrams. If you want one clean definition to hang the folklore on, it is here. Read sections 1 and 2 slowly and enjoy how little is needed.

## The story

A quantum state is a line in a Hilbert space, not a vector. So quantum mechanics lives on a projective space, and a symmetry group acts projectively. A projective representation of G has a "projectivity": a central extension of G by ℂ<sup>×</sup>, which measures the failure to lift to a linear representation. Freed carries this picture to field theory. A field theory in Segal's sense is a linear representation of a bordism category. Replace vector spaces by projective spaces and you get a projective field theory. Its projectivity is the anomaly. The anomaly is itself a field theory of a special kind: invertible, and one categorical level up. On a closed n-manifold it gives a line, and the partition function is an element of that line. The anomaly becomes an obstruction only when you try to integrate over some of the fields.

## Main definitions

**Projectivity of a projective representation.** For a homomorphism G → PGL, the composite G → Bℂ<sup>×</sup>, which is the same as the pulled-back central extension of G by ℂ<sup>×</sup>. A linearisation is a splitting of that extension.
- Splittings, if any exist, form a torsor over characters of G.

**Field theory (Axiom System 3.4).** Fix a dimension n and a sheaf F of background fields such as orientations or metrics. A field theory is a symmetric monoidal functor from the bordism category Bord<sub>⟨n−1,n⟩</sub>(F) to a category Vect of topological vector spaces.

**Projective field theory and its anomaly.** A projective theory is a symmetric monoidal functor from the same bordism category to Proj, the quotient of Vect by the action of the groupoid Line of complex lines. Proj is a 2-category. The anomaly α is the composite to B Line.

**Invertible and once-categorified invertible theories (Definition 3.15).** An invertible theory is a homomorphism from the bordism category to Line. A once-categorified invertible theory is a homomorphism to B Line.
- Invertible: a closed (n−1)-manifold gives a line, a closed n-manifold gives a non-zero number.
- Once-categorified: a closed (n−1)-manifold gives a gerbe, a closed n-manifold gives a line.

## Main results

**Claim (the main takeaway; statement 1.12).** The projectivity of a projective representation is a delooped invertible representation. Its class lies in H<sup>2</sup>(G; ℂ<sup>×</sup>), one degree above the group H<sup>1</sup>(G; ℂ<sup>×</sup>) of characters.

**Theorem (von Neumann-Wigner; Theorem 2.9).** Let PQ be the group of bijections of the projective space of a complex separable Hilbert space H that preserve transition probabilities. Then every element lifts to H. There is a group extension 𝕋 → Q → PQ, where Q is the group of unitary and antiunitary maps of H and 𝕋 is the unit complex numbers.
- Example: for H = ℂ<sup>2</sup> the projective space is the round 2-sphere and PQ is the orthogonal group O<sub>3</sub>.

**Claim (anomaly as a field theory; section 3).** The anomaly of an n-dimensional projective field theory is a once-categorified invertible n-dimensional field theory. Trivialisations of it are the same as lifts to a linear theory, and they form a torsor over invertible theories. Often the anomaly extends to an ordinary invertible theory in dimension n+1, and then the original theory is a boundary theory of that one.

**Claim (spinor field, conjectural; Claim 5.7).** The anomaly theory of a massless free spinor field in dimension n is a differential lift of an explicit map of spectra from MSpin to a shift of the Anderson dual of the sphere. The map uses the class of the spinor module in KO-theory. Freed says this formula is a conjecture until more foundations are in place.

## Note, then ignore

- Which projective group. For quantum mechanics the structure group is PQ, with antiunitary maps. For the field theory axioms, which do not include unitarity, it is PGL. Safe to skip on a first reading.
- Nuclear maps. Vect means topological vector spaces with nuclear maps, a smallness condition. Safe to skip.
- The definition of Proj. It is only sketched in Appendix A, and a full account is left to a forthcoming thesis. Safe to skip.
- Two myths. Anomalies do not need a symmetry and do not need fermions. The examples are a single free spinor field and the theory of pions. Worth noting, then safe to move on.
- Descent need not match. After integrating out fields, the quantum theory can have an anomaly that the descended classical anomaly does not show. Safe to skip.

## One next step

Open the note and read the first page only: thesis (A), answer (B), and the paragraph on two myths that follows.

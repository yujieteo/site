source: https://www.preschema.com/papers/stacksncts.pdf
slogan: Once sheaves of groupoids are set up with ∞-categories, the cotangent complex decides when a moduli problem is an algebraic stack.
basis: the introduction and the main theorem statements

## Before you start

Much of these 79 pages is about ∞-categories, animated rings and derived stacks. The likely feeling is fear of being too slow: every section leans on the one before. That fear is allowed. Nothing here needs speed. What the notes offer is a reason, in the form of a checklist, why the moduli of bundles on a curve is a geometric object. Enjoy one section at a time. Reaching Section 10 is a bonus.

## The story

Classical texts build algebraic stacks from fibred categories and prove that each moduli stack is algebraic by hand, with Artin's criteria and a lot of obstruction theory. That route is long, and the deformation theory looks ad hoc. Khan's lectures take a different road. They start from sheaves of groupoids, phrased in ∞-categories. This costs one chapter. The gain is that derived categories, animated rings and the cotangent complex then fit the same frame. A derived stack carries a cotangent complex, and for the stack of perfect complexes it is an explicit formula. A single criterion, due to Artin and Lurie, then says: if the cotangent complex exists and a few formal conditions hold, the stack is algebraic. The moduli of vector bundles, G-bundles and coherent sheaves follow in one stroke.

## Main definitions

**Stack (Definition 2.1.10).** A sheaf of groupoids on the category of schemes with the étale topology.
- Theorem 2.2.1: restriction to affine schemes loses nothing.

**Algebraic stack (Definition 5.2.2).** A stack whose diagonal is representable by algebraic spaces and which admits a smooth surjection from a scheme, the atlas.
- Deligne–Mumford: the atlas can be taken étale.

**Global quotient stack (Definition/Proposition 6.2.3).** A stack isomorphic to [U/GL<sub>n</sub>] for a quasi-affine scheme U with an action of GL<sub>n</sub>. Equivalently, a stack with a quasi-affine morphism to BGL<sub>n</sub>.

**Cotangent complex of a derived stack (Section 8).** A derived stack is a sheaf of ∞-groupoids on animated commutative rings. Its cotangent complex L<sub>X</sub>, when it exists, is the quasi-coherent complex that represents derivations: lifts of a point along a square-zero extension A ⊕ N → A correspond to maps from the pullback of L<sub>X</sub> to N.
- For an affine scheme it is the classical cotangent complex of the ring.

## Main results

**Theorem (quotients are algebraic; Theorem 5.3.1).** Let G be a smooth group algebraic space over a scheme S, and U a stack with G-action. If U is algebraic, so is [U/G].

**Theorem (Totaro, Gross; Theorem 6.2.5).** An algebraic stack has the resolution property (every quasi-coherent sheaf is a quotient of a sum of vector bundles) if and only if it is a global quotient stack.
- "If" is Thomason's Theorem 6.3.5, using equivariant sheaves on a quasi-affine scheme.
- "Only if" builds a quasi-affine frame bundle. See Sections 6.4 and 6.5.

**Theorem (deformations of perfect complexes; Theorem 9.2.1).** Let M<sub>Perf</sub> be the derived stack of perfect complexes, with universal complex E. Then E ⊗ E<sup>∨</sup>[−1] is a cotangent complex for M<sub>Perf</sub>.
- Step 1: identify the fibre of perfect complexes over A ⊕ N above a fixed M (Lemma 9.2.2).
- Step 2: read off that this fibre is represented by maps out of M ⊗ M<sup>∨</sup>[−1].

**Theorem (Artin–Lurie, with application; Theorems 10.3.1 and 10.3.3).** Let k be a G-ring, for example an excellent ring. A derived stack X over k is algebraic if and only if it has a cotangent complex, takes 1-groupoid values on ordinary rings, is almost of finite presentation, and satisfies integrability, nil-completeness and infinitesimal cohesion. I state the last three by name only. Their precise forms are in the source.
- Consequence: for X an algebraic space, proper and of finite Tor-amplitude over k, the derived moduli stacks of vector bundles and of G-bundles (G a smooth group scheme) are algebraic. So is the stack of coherent sheaves when X is smooth.
- They are smooth if X is a relative curve and quasi-smooth if X is a relative surface.

## Note, then ignore

- Earlier version. A 2022 version titled "A modern introduction to algebraic stacks" has two-level numbering. This revision is dated 2023-10-19 and adds Section 4.1 on ∞-stacks and Section 8.8 on tangent and cotangent bundles. Safe to skip on a first reading.
- "Anima" and "animated". These are the notes' words for ∞-groupoids and for simplicial commutative rings up to homotopy. Section 7 builds them by a universal construction called animation, so that derived functors come for free. Skip the terminology at first.
- 1-groupoid condition. Condition (ii) of Artin–Lurie only rules out higher stacks. It holds for every moduli problem in Section 10. Skip it at first.
- Shift convention. The [−1] in the cotangent complex of M<sub>Perf</sub> reflects that automorphisms sit in degree 1 of a stack's cotangent complex. Cohomological or homological grading changes the sign. Skip it at first.
- Section 11. Cohomology, intersection theory and localisation for stacks are a separate topic, not needed for the moduli results. Skip it at first.

## One next step

Open the notes at Section 10.3 and read only the statement of Theorem 10.3.3, then look back at Theorem 9.2.1 to see the formula it rests on.

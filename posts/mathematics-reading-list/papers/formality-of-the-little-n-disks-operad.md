source: https://arxiv.org/pdf/0808.0457
slogan: Over ℝ, the chains on the little N-disks operad are equivalent to their homology, so a space-level operad becomes a table of algebra.
basis: the introduction and the main theorem statements

## Before you start

This is 110 pages written to fill in a proof that Kontsevich only sketched. The feeling it may raise is overwhelm, with a touch of suspicion: if the details take 110 pages, how could you ever hold them? You are allowed to feel that, and nothing needs fixing first. The introduction alone gives you the whole mechanism in one worked integral, and that is likely what you want from it. Read for the pleasure of seeing one differential form cancel a relation. The other hundred pages will still be there.

## The story

The little N-disks operad B<sub>N</sub> records how to put n small disks inside a unit disk in ℝ<sup>N</sup>. The authors need it to study spaces of embeddings of manifolds in ℝ<sup>N</sup>. Its homology is known. People wanted to replace the chains by the homology without losing the operad structure. That is formality. For N = 2 Arnold's forms d log(z<sub>j</sub> − z<sub>i</sub>) satisfy a three-term relation exactly, so cohomology sits inside the forms. For larger N the analogous forms ω<sub>ij</sub>, pulled back from the sphere S<sup>N−1</sup>, satisfy the relation only up to an exact form. Kontsevich's idea is to produce the correcting form by a rule: add a fourth point, wedge three forms, and integrate the fourth point out. Graphs organise all such integrals into one map. Lambrechts and Volić write out the full proof and extend it.

## Main definitions

**Little N-disks operad.** B<sub>N</sub>(n) is the space of n closed N-disks with disjoint interiors inside the unit disk of ℝ<sup>N</sup>. Composition puts a configuration inside one of the disks. In this paper B<sub>N</sub>(0) is a point, so forgetting a disk is an operation.

**Stable formality (Theorem 1.1, Definition 1.3).** A topological operad is stably formal over a ring K if a zig-zag of quasi-isomorphisms of operads of chain complexes joins its singular chains S<sub>\*</sub>(−; K) to its homology H<sub>\*</sub>(−; K) with zero differential.
- For a morphism of operads: the zig-zag must connect the chain-level map to the map on homology.

**Formality (Definition 3.1).** Over a field of characteristic 0, an operad is formal if its cohomology, as a cooperad of commutative differential graded algebras (CDGAs), is a CDGA model for it. This is the unstable version: it keeps the cup product, as in rational homotopy theory.

**Fulton–MacPherson operad.** C[n] is a compactification of the space of n distinct points in ℝ<sup>N</sup> modulo translation and positive scaling. It is a compact manifold with corners. The C[n] form an operad homotopy equivalent to B<sub>N</sub>.

## Main results

**Theorem (stable formality; Theorem 1.1, due to Kontsevich, and to Tamarkin for N = 2).** For every N ≥ 1 there is a chain of weak equivalences of operads of chain complexes between S<sub>\*</sub>(B<sub>N</sub>; ℝ) and H<sub>\*</sub>(B<sub>N</sub>; ℝ).
- Step 1: build a combinatorial CDGA cooperad D of admissible diagrams and show it is quasi-isomorphic to the cohomology of the operad.
- Step 2: map D(n) to semi-algebraic forms on C[n] by the configuration space integral I, and show I is a quasi-isomorphism that respects the cooperad structures closely enough.

**Theorem (unstable formality; Theorem 1.2).** For N ≠ 2, the cohomology algebra is a CDGA model over ℝ of the little N-disks operad. So the operad is formal over ℝ in the sense of Definition 3.1.

**Theorem (relative formality; Theorem 1.4).** Let m ≥ 1 and N ≥ 2m + 1, and let ℝ<sup>m</sup> → ℝ<sup>N</sup> be a linear isometry. The induced map of operads B<sub>m</sub> → B<sub>N</sub> is stably formal over ℝ. If m ≠ 2 it is also formal over ℝ.

## Note, then ignore

- The case N = 2 in Theorem 1.2. The proof fails there because some CDGAs acquire negative degrees. The authors expect an adaptation to work. Safe to skip on a first reading.
- ℝ and not ℚ. The integrals give real numbers. The paper notes that stable formality descends to ℚ when the arity 0 part is empty, by a result it cites, but not obviously with the nullary operation kept. Safe to skip.
- Semi-algebraic forms. Integration along the fibre of C[n+1] → C[n] needs a class of forms that survives the corners, so the paper uses semi-algebraic forms in place of smooth de Rham forms. Safe to skip.
- Why the definition of a CDGA model is indirect. The polynomial forms functor A<sub>PL</sub> is not comonoidal, so forms on an operad are not a cooperad on the nose. Definition 3.1 works around this. Safe to skip.
- Positive characteristic. The paper reports a computer result of Salvatore that B<sub>2</sub>(4) is not formal over ℤ/2. Safe to skip.

## One next step

Open the paper at page 7 and follow the single calculation there: the form ω<sub>14</sub> ∧ ω<sub>24</sub> ∧ ω<sub>34</sub> is integrated over the fourth point, and Stokes' formula returns the three-term relation.

source: https://ncatlab.org/nlab/files/Schreiber_pQFT20211103.pdf
slogan: Perturbative quantum field theory deforms an algebra of observables, and renormalisation is a finite choice of how to extend distributions to a point.
basis: the introduction and the main theorem statements

## Before you start

This is a 323-page printout of a web page, with sixteen chapters and hundreds of numbered definitions that point at each other. Overwhelm is the natural response, and perhaps impatience to reach a quantum field. Both are welcome here. If you trained as an engineer and want to know what a Feynman diagram is in terms a mathematician accepts, chapters 15 and 16 answer that. Start where your curiosity is. Nothing requires you to read the pages in order.

## The story

Physicists compute scattering with Feynman diagrams, and the integrals diverge. The textbook cure subtracts infinities. These notes follow Stückelberg, Bogoliubov, Epstein and Glaser, whose route never meets an infinity. A free field theory has an algebra of observables with a product that is deformed by a propagator: the Wick algebra. An interaction is switched on by an S-matrix, a formal power series in the coupling and in ℏ. The S-matrix is fixed by one axiom, causality: what happens later cannot affect what happened earlier. Causality determines every term as long as the interaction points stay apart. Where points collide, the term is a distribution that must be extended. The extension exists, and the freedom is a finite number of constants at each order. Those constants are the renormalisation.

## Main definitions

**Free vacuum (Definition 15.1).** A free Lagrangian field theory on a spacetime, gauge fixed in the BV-BRST formalism, together with a choice of Wightman propagator. The propagator plays the role of the vacuum state.

**Wick algebra (Proposition 14.5).** The space of microcausal polynomial observables, as formal power series in ℏ, with the star product obtained by exponentiating the Wightman propagator. Microcausal means that the wave front sets of the coefficient distributions avoid the directions where the product would be undefined.
- The star product induced by the Feynman propagator is the time-ordered product. It is defined only partially.

**S-matrix scheme (Definition 15.3).** A function S from local observables to the Wick algebra, with formal parameters adjoined, such that two axioms hold.
- Perturbation: S is an exponential series built from multilinear maps T<sub>k</sub>, the time-ordered products, with T<sub>0</sub> = 1 and T<sub>1</sub> the normal-ordered inclusion.
- Causal additivity: if the support of O<sub>1</sub> does not lie in the causal past of the support of O<sub>2</sub>, then S(O<sub>1</sub> + O + O<sub>2</sub>) = S(O<sub>1</sub> + O) S(O)<sup>−1</sup> S(O + O<sub>2</sub>).

**Vertex redefinition (Definition 16.15).** A map Z from local observables to local observables, given by a formal power series of multilinear maps, that starts with the identity. It changes the interaction by terms of higher order.

## Main results

**Proposition (causality fixes the products away from the diagonal; Proposition 15.47).** Suppose the time-ordered products of arity up to n are given. Then the product of arity n + 1 is uniquely fixed on the set of configurations where the n + 1 points do not all coincide.
- Step 1: cover that set by open pieces on which some points are causally later than the rest. Causal factorisation gives the product on each piece.
- Step 2: the pieces agree on overlaps, and a partition of unity glues them.

**Theorem (existence and choices of renormalisation; Theorem 16.14).** Take a gauge-fixed free vacuum on Minkowski spacetime with a translation-invariant Wightman propagator. Then an S-matrix scheme exists. For a fixed local interaction, the possible S-matrices form, at each order, a finite-dimensional affine space.
- Step 1: the Feynman propagator has finite scaling degree, so every induction step is an extension of a distribution of finite scaling degree to a point.
- Step 2: such an extension exists, and two extensions differ by finitely many derivatives of the delta distribution (Proposition 16.12).

**Theorem (main theorem of perturbative renormalisation; Theorem 16.19).** Vertex redefinitions form a group under composition, the Stückelberg–Petermann renormalisation group. The S-matrix schemes that satisfy the condition called field independence form a torsor over it: the set is non-empty, and any two schemes S and S′ satisfy S′ = S ∘ Z for a unique vertex redefinition Z.

**Proposition (the output is a local net; Propositions 15.25 and 15.30).** Bogoliubov's formula turns an S-matrix scheme and an interaction into interacting field observables. They form a formal deformation quantisation of the interacting classical theory. The algebras attached to causally closed regions satisfy isotony and causal locality. The second property means that observables in spacelike separated regions commute.

## Note, then ignore

- Adiabatic switching. The interaction is multiplied by a cutoff function of compact support so that integrals converge. Local algebras do not depend on it (Proposition 15.27). Safe to skip on a first reading.
- Smooth sets and supergeometry. The first chapters set up generalised spaces so that field histories and fermions have a home. Ordinary intuition about function spaces is enough at first. Safe to skip.
- "Re"-normalisation. Schreiber writes the prefix in quotation marks, because in this approach nothing infinite is ever removed. Safe to skip.
- No C\*-algebras. The Haag–Kastler axioms also ask for C\*-algebras. Formal power series cannot provide them, so the result is called perturbative AQFT. Safe to skip.
- Negative powers of ℏ. The exponential in the S-matrix carries a factor 1/(iℏ), so its values are Laurent series in ℏ and not power series. Safe to skip.

## One next step

Open the PDF at page 2 and read only the table of running examples. It shows that the whole text tracks the scalar field, the Dirac field and the electromagnetic field side by side.

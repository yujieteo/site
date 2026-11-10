source: https://arxiv.org/pdf/2011.05730
slogan: Geometric quantization extends to shifted symplectic stacks, where a gerbe replaces the line bundle and a category replaces the space of states.
basis: the introduction and the main theorem statements

## Before you start

The paper assumes derived algebraic geometry: Artin stacks, cotangent complexes, ∞-categories, shifted symplectic forms. Shame at not owning that background is the feeling most likely to make you close the file. You are allowed to feel it and to read on anyway. If you want to see why a line bundle with connection turns into a gerbe one level up, the introduction shows it with a single diagram. Follow what interests you. Coverage is not the goal.

## The story

Ordinary geometric quantization takes a symplectic manifold, a line bundle whose curvature is the symplectic form, and a Lagrangian foliation. It returns the sections that are flat along the leaves. Field theory needs more. In Chern–Simons theory a surface gives a symplectic space, a circle gives a 1-shifted symplectic stack, and a point gives the 2-shifted stack BG. What should quantization mean there? Safronov's answer is to raise every ingredient by n levels. The line bundle becomes an n-gerbe. The foliation becomes a map X → B with Lagrangian fibres. To avoid "flat sections along leaves", he asks that the gerbe already live on the base B, and then takes its global sections there. For n = 0 the output is a chain complex. For n = 1 it is a category of twisted sheaves.

## Main definitions

**n-shifted symplectic structure.** On a derived Artin stack X locally of finite presentation over a field k of characteristic zero: a closed 2-form ω of cohomological degree n such that the induced map from the tangent complex T<sub>X</sub> to the shifted cotangent complex L<sub>X</sub>[n] is a quasi-isomorphism.
- n = 0 on a smooth scheme: an ordinary algebraic symplectic form.
- Example: BG is 2-shifted symplectic when the Lie algebra of G has a nondegenerate invariant symmetric pairing.

**n-shifted Lagrangian fibration (Definition 1.4).** A map π : X → B with a closed 2-form of degree n on X and a trivialisation of its restriction to relative forms, such that T<sub>X/B</sub> → T<sub>X</sub> → L<sub>X/B</sub>[n] is a fibre sequence. This plays the role of a polarisation.

**Prequantum n-shifted Lagrangian fibration (Definition 2.13).** A map π : X → B, an n-gerbe G on B (a map B → B<sup>n+1</sup>𝔾<sub>m</sub>), and an extension of the natural relative flat connection on π<sup>∗</sup>G to a connective structure ∇, such that the isotropic fibration this induces is Lagrangian.
- n = 0: G is a line bundle L on B.
- n = 1: G is a gerbe in the usual sense.

**Geometric quantization (Definitions 3.1 and 3.7).** For a prequantum 0-shifted Lagrangian fibration with line bundle L, it is the chain complex Γ(B, L). For a prequantum 1-shifted one with gerbe G, it is the ∞-category QCoh<sup>G</sup>(B) of G-twisted quasi-coherent sheaves on B.

## Main results

**Theorem (intersections; Theorem 2.20).** Let X → B<sub>X</sub> be an n-shifted Lagrangian fibration, let L<sub>1</sub>, L<sub>2</sub> → X be Lagrangian morphisms, and let L<sub>i</sub> → B<sub>L<sub>i</sub></sub> be compatible relative Lagrangian fibrations. Then the derived intersection L<sub>1</sub> ×<sub>X</sub> L<sub>2</sub> carries an (n − 1)-shifted Lagrangian fibration over the fibre product of the bases. The same holds with prequantum data throughout.

**Theorem (twisted cotangent bundles; Theorem 2.24).** Let X be a derived Artin stack locally of finite presentation and G an n-gerbe on X with characteristic class c<sub>1</sub>(G). Then the projection from the n-shifted cotangent bundle twisted by c<sub>1</sub>(G) down to X has a natural structure of prequantum n-shifted Lagrangian fibration.
- Step 1: write the twisted cotangent bundle as an intersection of two Lagrangians, the zero section and the graph of c<sub>1</sub>(G), inside the (n + 1)-shifted cotangent bundle.
- Step 2: apply the intersection theorem.

**Proposition (quantization commutes with reduction; Proposition 4.13).** Let G be a reductive group and X a Hamiltonian G-scheme with a G-equivariant prequantisation and polarisation X → B, where B is a quasi-compact, quasi-separated smooth scheme with line bundle L. Then the derived Hamiltonian reduction X//G → [B/G] has a natural prequantum 0-shifted Lagrangian fibration, and its geometric quantization is the G-invariants Γ(B, L)<sup>G</sup>.
- Step 1: [X/G] → [𝔤<sup>∗</sup>/G] and BG → [𝔤<sup>∗</sup>/G] are prequantum 1-shifted Lagrangians.
- Step 2: X//G is their intersection, so Theorem 2.20 applies.

**Theorem (flat connections on a curve; Theorem 4.22).** Let G be a split, connected, simply connected semisimple group, let C be a smooth proper curve, and suppose the invariant pairing on the Lie algebra of G is integral. Then LocSys<sub>G</sub>(C) → Bun<sub>G</sub>(C) is a prequantum 0-shifted Lagrangian fibration given by a line bundle L on Bun<sub>G</sub>(C), with geometric quantization Γ(Bun<sub>G</sub>(C), L).

## Note, then ignore

- No metaplectic correction. The classical half-form twist is left out on purpose. It does not affect the definitions, so skip it.
- Only n = 0 and n = 1 are spelled out. The quantization is defined explicitly in those two shifts, and the general n is described as an (∞, n)-category in outline. Safe to leave.
- BG has no algebraic prequantisation. For split connected reductive G the 2-shifted stack BG admits none (Proposition 2.27). The paper notes that for compact Lie groups one exists. This is a limit of the algebraic setting and can wait.
- The (−1)-shifted case. A prequantisation there reproduces the Batalin–Vilkovisky operator on T<sup>∗</sup>[−1]Y (Proposition 2.34). It is a side road on a first reading.
- "Fibration" instead of "foliation". The paper asks the gerbe to descend to a base B. A full theory with Lagrangian foliations is cited but not used. Skip the difference.

## One next step

Open the PDF at page 3 and read the paragraph headed "Geometric quantization", stopping after the two displayed chains of functors through Vect and Pr<sup>L</sup>.

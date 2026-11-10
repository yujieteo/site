source: https://arxiv.org/pdf/1401.1044
slogan: Replace equality by a path, and bad intersections and bad quotients become geometric objects that still remember their multiplicities.
basis: the introduction and the main theorem statements

## Before you start

This survey runs to about eighty pages and leans on ∞-categories from Section 2 onward. The likely feeling is dread of the foundations: the sense that you must master simplicial sets before you may read a single theorem. You do not have to resolve that feeling. Toën says himself that he picks the definition that costs the reader the least energy. If you want to know why moduli spaces are "really" derived, the introduction alone tells you. Read that for pleasure. The rest is there when you want it.

## The story

Take two smooth subvarieties Y and Z of a smooth variety X. When they meet transversally, Y ∩ Z behaves well. When they do not, the naive intersection has the wrong dimension or loses multiplicities. The classical repair moves Y and Z and keeps only a cohomology class, so the geometry is gone. Serre's formula showed what was missing: higher Tor groups. The derived repair keeps a space. A point of the derived intersection is a triple (y, z, α), with α an infinitesimal path from y to z in X. Its structure sheaf is a simplicial ring whose homotopy sheaves are those Tor groups. Quotients by non-free group actions get the same treatment and give stacks. With both in place, moduli spaces gain cotangent complexes that control obstructions, and many gain shifted symplectic structures.

## Main definitions

**Derived scheme (Definitions 2.1 and 2.5).** A pair (X, 𝒪<sub>X</sub>) of a topological space and a sheaf of simplicial commutative rings such that (X, π<sub>0</sub>(𝒪<sub>X</sub>)) is a scheme and each π<sub>i</sub>(𝒪<sub>X</sub>) is a quasi-coherent sheaf on it. The scheme (X, π<sub>0</sub>(𝒪<sub>X</sub>)) is the truncation.
- Fibre products: for schemes X and Y over S, the derived fibre product has π<sub>n</sub> of its structure sheaf equal to Tor<sub>n</sub><sup>𝒪<sub>S</sub></sup>(𝒪<sub>X</sub>, 𝒪<sub>Y</sub>).
- Characteristic zero: simplicial commutative ℚ-algebras can be replaced by non-positively graded commutative dg-algebras.

**Derived Artin stack (Definitions 3.1 and 3.2).** A derived stack is a functor from derived rings to spaces with descent. It is a derived 1-Artin stack if it is the quotient |X<sub>\*</sub>| of a smooth groupoid of derived schemes, and a derived n-Artin stack if it is the quotient of a smooth groupoid of derived (n − 1)-Artin stacks.

**Shifted symplectic structure (Definition 5.4).** Let X be a derived Artin stack locally of finite presentation over a base k of characteristic zero. An n-shifted symplectic structure is a closed 2-form ω of degree n whose underlying 2-form induces an equivalence from the tangent complex to the cotangent complex shifted by n.
- Closed is data: a closed form is a form together with a chosen homotopy that kills its de Rham differential, and further higher homotopies.
- Example: for reductive G, the 2-shifted symplectic structures on BG correspond to non-degenerate invariant scalar products on the Lie algebra.

## Main results

**Theorem (Lurie's representability; Theorem 3.2).** Let k be a noetherian commutative ring. A derived stack F over k is a derived Artin stack locally of finite presentation exactly when five conditions hold: its values on underived affine schemes are n-truncated for some n, it commutes with filtered colimits of derived algebras, it is the limit over Postnikov towers, it has an obstruction theory, and it is the limit over the powers of the maximal ideal for complete local noetherian rings.
- Role: it extends Artin's representability theorem to the derived setting. Toën quotes it from Lurie's thesis.

**Corollary (mapping stacks; Corollary 3.3).** If X is a flat and proper scheme over S and F is a derived Artin stack locally of finite presentation over S, then the derived mapping stack ℝMap(X, F) is again a derived Artin stack locally of finite presentation over S.

**Theorem (symplectic mapping stacks; Theorem 5.4, from Pantev–Toën–Vaquié–Vezzosi).** Let X be an oriented derived stack of dimension d and Y a derived Artin stack with an n-shifted symplectic structure. If ℝMap(X, Y) is a derived Artin stack locally of finite presentation, it carries a canonical (n − d)-shifted symplectic structure.
- Step 1: pull the form back along evaluation X × ℝMap(X, Y) → Y.
- Step 2: integrate along X using the orientation. Orientations come from Calabi–Yau varieties, from de Rham stacks and from compact oriented manifolds.

**Claim (Lagrangian intersections; stated in §5.2).** If Y → X and Z → X carry Lagrangian structures for an n-shifted symplectic X, the derived fibre product Y ×<sub>X</sub> Z carries a canonical (n − 1)-shifted symplectic structure. For two smooth Lagrangians in an ordinary symplectic variety this gives a (−1)-shifted structure on their derived intersection.

## Note, then ignore

- Model of ∞-categories. Toën uses simplicially enriched categories and says any other model gives an equivalent theory. Pick none and read on.
- Two definitions of derived scheme. Definition 2.1 is a first version, and Definition 2.5 restates it inside the ∞-category of derived locally ringed spaces. They describe the same objects. Skip the difference.
- Simplicial rings or E<sub>∞</sub>-rings. Section 3.4 mentions spectral geometry and other variants. They agree over ℚ. Safe to skip.
- "Locally geometric". The stack of all perfect complexes is only a union of open Artin substacks, and Toën still calls it Artin. Ignore the distinction.
- Section 1. The history section is pleasant reading and has no dependencies. It is also optional.

## One next step

Open the paper and read only the second and third paragraphs of the Introduction, which describe the triple (y, z, α). That picture is the whole subject in small.

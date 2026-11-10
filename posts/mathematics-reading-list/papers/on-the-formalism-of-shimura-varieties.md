source: https://virtualmath1.stanford.edu/~rltaylor/shim2.pdf
slogan: Index Shimura varieties by data over their field of definition, and Galois conjugation becomes the obvious action on a conjugacy class of cocharacters.
basis: the introduction and the main theorem statements

## Before you start

This is 83 pages, and the introduction alone fills its pages with cocycle sets carrying three or four subscripts. The likely feeling is dread of the notation, and a worry that you need all of Kottwitz's theory of B(G) first. That worry is reasonable, and you can let it sit there. If you want to know what a Shimura variety is as an object over a number field, and not only over ℂ, this paper speaks to that. Read the cubic-field example for pleasure. The rest can wait.

## The story

Deligne attaches a tower of varieties Sh(G, X) to a pair (G, X). The tower has a canonical model over a number field E, the reflex field. But the pair (G, X) remembers more than the variety: it also fixes an embedding of E into ℂ. So one tower over E gets several labels. The authors' example is a non-Galois totally real cubic field F and three quaternion algebras D<sub>i</sub> over F, each split at exactly one real place. The three groups differ over ℚ, yet they share finite adelic points and one tower over F. Langlands gave a formula for the conjugate of a Shimura variety by an automorphism of ℂ, and Milne proved it, but the formula rests on choices of cocycles and special points. The authors use Kottwitz's algebraic cohomology at the level of cocycles. They get a cleaner conjugation theorem, and then a new kind of datum whose Galois action is plain.

## Main definitions

**Shimura datum (Deligne, in cocharacter form).** A pair (G, Y). Here G is a connected reductive group over ℚ, and Y is a G(ℝ)-conjugacy class of minuscule cocharacters μ : 𝔾<sub>m</sub> → G over ℂ that are compactifying.
- Compactifying: the product of μ and its complex conjugate is central, and ad μ(−1) is a Cartan involution of G<sup>ad</sup>(ℝ).
- Reflex field E(G, Y): the fixed field of the automorphisms of ℂ that preserve the G(ℂ)-conjugacy class of Y.

**Algebraic cocycles.** Kottwitz defines pointed sets B(ℚ, G)<sub>basic</sub> of algebraic cohomology classes, which contain the usual Galois H<sup>1</sup>. After a choice of auxiliary data (a finite Galois extension E/ℚ and an element a<sup>+</sup>), the authors' companion paper defines sets of cocycles representing these classes, globally and adelically. A cocycle φ twists G to an inner form <sup>φ</sup>G.

**Rational Shimura datum over a field L of characteristic 0.** A 4-tuple (G, ψ, C, U). G is connected reductive over ℚ. ψ is a basic adelic algebraic cocycle with values in G whose twist of G<sup>ad</sup> at the real place is compact. C is a conjugacy class of minuscule cocharacters of G defined over L, whose image in the coinvariants of the algebraic fundamental group equals the Kottwitz invariant of ψ. U is an open compact subgroup of (<sup>ψ</sup>G)(𝔸<sup>∞</sup>).
- Role of G: it only fixes a base point among inner forms.
- Incoherence: the adelic group <sup>ψ</sup>G need not come from any group over ℚ.

## Main results

**Theorem (conjugation of Deligne's Shimura varieties; Theorem 3.5).** Let (G, Y) be a Shimura datum and τ an automorphism of ℂ. There is a canonical class φ<sub>G,Y,τ</sub> of global algebraic cocycles. For a cocycle φ in it, and a finite adelic element b that trivialises the localisation of φ away from ∞, there is an isomorphism Φ(τ, φ, b) from the τ-conjugate of Sh(G, Y)<sub>U</sub> to Sh(<sup>φ</sup>G, <sup>τ,φ</sup>Y)<sub>bUb⁻¹</sub>. These maps commute with the G(𝔸<sup>∞</sup>)-action and with morphisms of Shimura data, satisfy a cocycle relation in τ, and have an explicit formula for tori. These properties determine them.
- Step 1: find the right formulation, which packages Langlands's choices into Kottwitz cocycles.
- Step 2: deduce the statement from Milne's theorem. The authors say this part is easy once the formulation is in hand.

**Corollary (canonical models).** For τ fixing E(G, Y), the maps Φ(τ, 1, 1) are descent data. They give the canonical model of Sh(G, Y)<sub>U</sub> over E(G, Y).

**Theorem (rational Shimura varieties; Theorem 4.3).** To a rational Shimura datum (G, ψ, C, U) over L the paper attaches a normal quasi-projective variety Sh(G, ψ, C, U) over L, smooth for small U. The tower over U carries an action of (<sup>ψ</sup>G)(𝔸<sup>∞</sup>). For a field map τ : L → L′, the τ-conjugate of Sh(G, ψ, C, U) is Sh(G, ψ, τC, U).
- Relation to Deligne: each rational Shimura variety is a finite union of isomorphic copies of one canonical model.
- Extra symmetry: a larger group, an extension of (<sup>ψ</sup>G)(𝔸<sup>∞</sup>)/Z(G)(ℚ), acts and permutes these copies transitively.

**Claim (PEL moduli; Section 5.1).** Kottwitz's PEL moduli spaces of types A and C are rational Shimura varieties in this sense.

## Note, then ignore

- Compact factors. Deligne assumes G<sup>ad</sup> has no ℚ-simple factor with compact real points. Section 3.4 removes this, and it does not touch the main story. Safe to skip on a first reading.
- The choices E and a<sup>+</sup>. Cocycles need a large Galois extension and an auxiliary element. The paper proves the theory does not depend on them. Safe to skip.
- Cocycles, not classes. The tower depends on the class of ψ only up to a non-canonical isomorphism, so the paper carries cocycles everywhere. Safe to skip.
- Complex uniformisation. A rational Shimura variety over ℂ is a quotient of a Hermitian symmetric space, but writing it so needs further choices of φ and b. Safe to skip.

## One next step

Open the PDF at page 1 and read the "simple illustration" of point (1): the cubic field F and the three quaternion algebras D<sub>i</sub>, ending at the displayed formula for (τS<sub>U</sub>)(ℂ) on page 2.

source: https://pages.uoregon.edu/ddugger/hocolim.pdf
slogan: A homotopy colimit glues spaces along cylinders instead of points, so the result survives replacing each space by an equivalent one.
basis: the introduction and the main theorem statements

## Before you start

This primer runs to 109 pages, and its author admits it is not very short. The likely feeling is overwhelm, mixed with the suspicion that you need model categories before you may begin. Let that feeling be there. It is a fair response to a long text. Dugger wrote the first sections for a student one or two years past a first topology course, with spaces and almost no model categories. If you have met the mapping cone, you already know one homotopy colimit. Read Section 2 for the pleasure of seeing that. Reaching page 109 is optional.

## The story

Colimits glue spaces together. Homotopy theorists want every construction to respect weak equivalences, and colimits do not. Take the pushout of ∗ ← S<sup>n</sup> → D<sup>n+1</sup>, which is the sphere S<sup>n+1</sup>. Replace the disc by a point, a weak equivalence, and the pushout collapses to a point. The repair is to glue up to homotopy. For a pushout X ← A → Y, insert a cylinder A × I between X and Y instead of identifying points directly. The result is easy to study with Mayer–Vietoris and Van Kampen, and it is invariant. For a general diagram one needs higher homotopies, and a simplicial space keeps track of them. The primer builds that construction, then shows how to compute with it and how to change the indexing category.

## Main definitions

**Simplicial replacement (Section 4).** For a small category I and a diagram D: I → Top, srep(D) is the simplicial space whose n-th space is the disjoint union, over all chains i<sub>0</sub> ← i<sub>1</sub> ← … ← i<sub>n</sub> of composable maps in I, of copies of D(i<sub>n</sub>).
- Faces: cover up one object of the chain. The last face also applies the map D(i<sub>n</sub>) → D(i<sub>n−1</sub>).
- Degeneracies: insert an identity map into the chain.

**Homotopy colimit (Definition 4.5).** hocolim D is the geometric realisation of srep(D). There is a natural map hocolim D → colim D that collapses the homotopies.
- For X ← A → Y this model is equivalent to the double mapping cylinder, X and Y joined by A × I.
- For the constant diagram at a point it is the classifying space of I<sup>op</sup>.

**Homotopy terminal functor (Definition 6.6).** A functor α: I → J is homotopy terminal if, for every object j of J, the undercategory (j ↓ α) is non-empty and has contractible nerve.
- Compare Definition 6.2: for ordinary colimits one only asks that (j ↓ α) be non-empty and connected.

## Main results

**Proposition (homotopy invariance; Proposition 4.7).** Let D and D′ be diagrams I → Top of cofibrant spaces, for example CW-complexes. If D → D′ is a natural transformation that is a weak equivalence at every object, then hocolim D → hocolim D′ is a weak equivalence.
- Step 1: because each D(i) is cofibrant, srep(D) is Reedy cofibrant (Remark 4.4).
- Step 2: an objectwise weak equivalence of Reedy cofibrant simplicial spaces gives a weak equivalence of realisations (Theorem 3.5).

**Theorem (cofinality; Theorem 6.7).** If α: I → J is homotopy terminal, then for every diagram X: J → Top the natural map from the homotopy colimit over I of X ∘ α to the homotopy colimit of X over J is a weak equivalence.
- Use: replace a large indexing category by a small one without changing the answer.

**Proposition (derived functor; Corollary 9.8 and Proposition 9.11).** There is a diagram QX with a map QX → X such that colim QX is isomorphic to hocolim X. If X is objectwise cofibrant, QX → X is a cofibrant replacement in the category of I-diagrams. So the homotopy colimit is the left derived functor of the colimit.
- Step 1: maps of diagrams QX → Y correspond to homotopy coherent maps X → Y (Proposition 9.7).
- Step 2: homotopy coherent maps lift along objectwise trivial fibrations (Proposition 9.9), which gives cofibrancy.

**Theorem (spectral sequence; Theorem 18.3).** For a diagram D: I → Top and a homology theory E, there is a spectral sequence with E<sup>2</sup><sub>p,q</sub> = H<sub>p</sub>(I; E<sub>q</sub>(D)) converging to E<sub>p+q</sub>(hocolim D). Here H<sub>p</sub>(I; −) is the homology of the category I with coefficients in a diagram of abelian groups.
- For a pushout diagram it reduces to the Mayer–Vietoris sequence.

## Note, then ignore

- Two conventions for chains. One can index by i<sub>0</sub> ← … ← i<sub>n</sub> or by i<sub>0</sub> → … → i<sub>n</sub>. The two realisations are homeomorphic, and Dugger follows Hirschhorn. Safe to skip on a first reading.
- "A" homotopy colimit. Many constructions give weakly equivalent answers, so no single model is the definition. Safe to skip.
- Cofibrancy hypotheses. Invariance needs the spaces to be cofibrant, which holds for CW-complexes. Safe to skip if you only use CW-complexes.
- Terminal, final, cofinal. The literature uses several names, and "left" and "right" vary between authors. Remark 6.13 sorts them out. Safe to skip.
- Unfinished spots. The text has a few placeholders, such as theorems labelled "(???)" in Section 16 and a citation with question marks. They do not affect Part 1. Safe to skip.

## One next step

Open the primer at page 4 and read Examples 2.1 and 2.2, the failing pushout and its repair. Stop before Section 2.3.

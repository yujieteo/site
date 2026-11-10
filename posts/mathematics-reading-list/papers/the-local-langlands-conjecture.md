source: https://otaibi.perso.math.cnrs.fr/kaletha-taibi-llc.pdf
slogan: The local Langlands conjecture sorts representations of a reductive group over a local field into finite packets labelled by Galois-type parameters, and labels inside each packet too.
basis: the introduction and the main theorem statements

## Before you start

This is a 36-page statement of a conjecture, with no big theorem at the end. Its definitions pile up: dual groups, Weil–Deligne groups, endoscopic data, Galois gerbs. The likely feeling is a fear of being slow, of reading three pages an hour. That fear is welcome here. A list of ten properties is slow reading for everyone. If you want to know exactly what "local Langlands" asserts when people cite it, this text tells you. Read Conjecture 6.1 as a list to browse, for interest. Completion can come later or never.

## The story

For GL<sub>1</sub> over a local field F, class field theory matches characters of F<sup>×</sup> with characters of the Weil group. Langlands asked for the same for any connected reductive group G: match irreducible representations of G(F) with parameters, which are maps from the Weil–Deligne group to the L-group. The match cannot be one to one. Several representations share a parameter and form an L-packet. So the conjecture has two layers. The crude layer is a finite-to-one map LL with a list of compatibilities. The refined layer labels the members of a packet by representations of a finite group built from the centraliser of the parameter. For quasi-split G this is direct. For other G it needs Galois gerbs in place of Galois groups, an idea of Vogan that Kaletha extended.

## Main definitions

**Langlands parameter.** A continuous map φ from the Weil–Deligne group WD<sub>F</sub> to the L-group of G, compatible with the projections to the Galois group, taken up to conjugation by the dual group Ĝ. Φ(G) is the set of these.
- φ is essentially discrete when its centraliser, modulo the Galois-invariant centre of Ĝ, is finite.

**L-packet.** The fibre Π<sub>φ</sub>(G) = LL<sup>−1</sup>(φ) of the conjectured map LL: Π(G) → Φ(G), where Π(G) is the set of irreducible admissible representations of G(F) up to isomorphism.

**Centraliser group.** For a parameter φ, S<sub>φ</sub> is the centraliser of φ in Ĝ, and S̄<sub>φ</sub> is S<sub>φ</sub> modulo the Galois invariants of the centre of Ĝ. The finite group π<sub>0</sub>(S̄<sub>φ</sub>) labels the packet. It can be non-abelian.

**Whittaker datum.** For quasi-split G, a pair (U, θ): the unipotent radical U of a Borel subgroup and a generic character θ of U(F). A representation is generic for it when it has a non-zero functional that transforms by θ under U(F).

## Main results

**Conjecture (crude correspondence; Conjecture 6.1).** For every connected reductive G over a local field F there is a map LL: Π(G) → Φ(G) with finite fibres whose image contains all essentially discrete parameters. For tori it is Langlands' bijection from class field theory. It respects products, central isogenies, Weil restriction and parabolic induction. A representation is essentially square-integrable exactly when its parameter is essentially discrete.
- Known cases named by the authors: archimedean F, GL<sub>n</sub>, GSp<sub>4</sub>, inner forms of SL<sub>n</sub>, and quasi-split classical groups, the last three over finite extensions of ℚ<sub>p</sub>.
- The listed properties do not characterise LL. The authors say so.

**Conjecture (semisimplified correspondence; Conjecture 6.2).** For non-archimedean F and any algebraically closed coefficient field C of characteristic zero, with a chosen square root of q, there is a map LL<sup>ss</sup> from irreducible smooth representations to semisimple parameters of the Weil group. It is compatible with supercuspidal support.
- Genestier–Lafforgue (positive characteristic) and Fargues–Scholze constructed such maps for C = ℚ̄<sub>ℓ</sub>, with ℓ different from the residue characteristic. Functoriality in C remains open.

**Conjecture (inside a packet, quasi-split case; Conjectures 6.4 and 6.5).** For quasi-split G and each φ there is an embedding of Π<sub>φ</sub>(G) into the irreducible representations of π<sub>0</sub>(S̄<sub>φ</sub>). It is a bijection when F is non-archimedean. It depends on a Whittaker datum 𝔴, and by Shahidi's conjecture the unique 𝔴-generic member of a tempered packet goes to the trivial representation.
- Conjecture 6.8 pins the bijection down by endoscopic character identities for tempered φ.

**Conjecture (all inner forms; Conjecture 6.12).** For a quasi-split G\* and tempered φ, one bijection labels the packets of all inner twists of G\* at once, where the inner twists come with extra data from a Galois gerb. There are three versions: pure, isocrystal and rigid.

## Note, then ignore

- Two normalisations. The conjecture has two versions, one for each normalisation of the Artin reciprocity map. They should differ by taking contragredients. Safe to skip on a first reading.
- Coefficients. Most of the text takes complex coefficients, and the archimedean case uses (𝔤, K)-modules. Safe to skip.
- Relevance. For non-quasi-split G only "relevant" parameters should occur in the image of LL. Safe to skip.
- Transfer factors. The character identities need transfer factors, which also come in several normalisations. Safe to skip until you study endoscopy.
- L-functions. The authors leave out the compatibility with L-functions, ε-factors and γ-factors. Safe to skip, but know that it exists.

## One next step

Open the notes at Section 6.1 (page 15) and read only items (1), (2) and (6) of Conjecture 6.1.

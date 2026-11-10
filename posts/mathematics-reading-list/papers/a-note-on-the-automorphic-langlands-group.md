source: https://www.math.toronto.edu/arthur/pdf/automorphic-langlands-group.pdf
slogan: Arthur builds a candidate Langlands group as a fibre product over the Weil group, one compact factor for each primitive automorphic family.
basis: the full text

## Before you start

This note is 17 pages and almost all of it is hypothesis. That can raise a quiet unease: how do you study something whose author calls it "highly speculative"? You are allowed that unease. Nothing here needs to be checked line by line, because nothing is proved. What you may want is a picture of the object that the whole Langlands programme points at. Read it as you would read a map of a country nobody has visited, and enjoy the outline.

## The story

Langlands wanted one universal group L<sub>F</sub> for a number field F. Its homomorphisms into the L-group of G would parametrise automorphic representations of G, as the Galois group parametrises field extensions. Nobody knows how to construct it. Arthur does not construct it either. He assumes the local Langlands correspondence and global functoriality, and asks what the simplest possible L<sub>F</sub> would look like. His answer: the Weil group W<sub>F</sub> handles the abelian part. The rest comes from "primitive" automorphic representations of simple, simply connected groups, the ones that are not functorial images from anything smaller. Each primitive family contributes one compact simply connected Lie group. Glue them all over W<sub>F</sub>. The last section does the same for Grothendieck's motivic Galois group.

## Main definitions

**Automorphic family.** For a quasi-split group G over F, an automorphic representation π gives semisimple conjugacy classes c<sub>v</sub>(π) in <sup>L</sup>G at almost all places v. C<sub>aut</sub>(G) is the set of such families, where two families are identified if they agree at almost all v.

**Primitive family.** Assume functoriality, so that L(s, c, r) continues meromorphically for every representation r of <sup>L</sup>G. Its order of pole at s = 1 is at least the multiplicity of the trivial representation in r. The family c is primitive if equality holds for every r.
- Reason for the name: a family that comes from a proper subgroup of <sup>L</sup>G gives a larger pole for some r.

**The index set C<sub>F</sub>.** Isomorphism classes of pairs (G, c), with G quasi-split, simple and simply connected over F, and c a primitive family for G.

**The extension L<sub>c</sub>.** For c in C<sub>F</sub>, let K<sub>c</sub> be a compact real form of the simply connected cover of the dual group of G. L<sub>c</sub> is an extension 1 → K<sub>c</sub> → L<sub>c</sub> → W<sub>F</sub> → 1.
- Its class in H<sup>2</sup>(W<sub>F</sub>, Z(Ĝ<sub>sc</sub>)) comes from the central character of a representation π with c(π) = c.

## Main results

**Claim (the candidate group; Section 4).** Assume the local Langlands correspondence, functoriality, and two further hypotheses listed below. Define L<sub>F</sub> as the fibre product over W<sub>F</sub> of all the L<sub>c</sub>, for c in C<sub>F</sub>. Then L<sub>F</sub> is an extension of W<sub>F</sub> by the compact group K<sub>F</sub> = Π K<sub>c</sub>, and it has local maps L<sub>F<sub>v</sub></sub> → L<sub>F</sub> for every v.
- Hypothesis 1: each primitive c lifts to a cuspidal representation of a z-extension G̃ of the adjoint group.
- Hypothesis 2: the extension and the local maps depend only on c, not on the chosen lift.

**Claim (temperedness; Section 4).** Under functoriality, a primitive family satisfies the general Ramanujan conjecture: the local components of the lift are tempered, up to a twist by a real-valued character. This is why the local maps land in a compact group. Arthur attributes the argument to Langlands.

**Conjecture (what L<sub>F</sub> would give; Sections 3 and 5).** For every quasi-split G, the map φ ↦ c(φ) from L-homomorphisms L<sub>F</sub> → <sup>L</sup>G to C<sub>aut</sub>(G) is surjective. This implies functoriality. It also implies a converse: each automorphic family comes from a primitive family on a group H<sub>φ</sub> attached to the image of φ.
- The map is not injective in general. Tori already show this.

**Claim (motivic group; Section 6).** Replace W<sub>F</sub> by the Taniyama group T<sub>F</sub>. Keep only primitive families of type A<sub>0</sub>, a Hodge-type condition at the archimedean places. Use complex groups in place of compact ones. The same fibre product gives a candidate for the complexified motivic Galois group G<sub>F</sub>, with a map L<sub>F</sub> → G<sub>F</sub>.

## Note, then ignore

- Locally compact, not proalgebraic. Following Kottwitz, Arthur takes L<sub>F</sub> as a locally compact group over W<sub>F</sub>. Langlands's original was proalgebraic over the Galois group. Safe to skip on a first reading.
- z-extensions. The auxiliary group G̃ = (G × Z)/Z(G) exists only to write the extension L<sub>c</sub> concretely. Safe to skip.
- Why simply connected kernels. Section 5 asks this and gives only heuristic support, including a theorem of Labesse for the Weil group. Safe to skip.
- Fibres of φ ↦ c(φ). They are tied to failure of multiplicity one. Arthur says he does not know how to classify them. Safe to skip.
- Section 6 is the most tentative part. It rests on the standard conjectures as well as everything before. Treat its details with caution. Safe to skip for the story.

## One next step

Open the PDF and read Section 1, about one page. Stop at the sentence where Arthur says how speculative the construction is.

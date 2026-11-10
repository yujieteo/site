source: https://stacks.math.columbia.edu/
slogan: One linked, open reference builds algebraic geometry from commutative algebra up to algebraic stacks, so every lemma you need has a permanent address.
basis: the page itself

## Before you start

The front page reports more than 7,600 pages in 116 chapters. The likely feeling is overwhelm, with a little shame that you have not "read the Stacks project". Let that feeling be there. Nobody reads this front to back, and the authors say it is meant to be read online, by search and by link. If you want to check one fact about schemes or stacks with full proof, this is the place. Go for the pleasure of one clean lookup. Coverage comes later, if ever.

## The story

Algebraic stacks describe moduli problems where objects have automorphisms, such as curves or vector bundles. For a long time the foundations sat in scattered papers and notes, with different conventions and gaps between them. In 2005 the idea arose of a collaborative web text on stacks. The first commit came in 2008, as 70 pages of notes. The unblocking idea is organisational, not mathematical. Write everything in one place, from commutative algebra through schemes and algebraic spaces to stacks. Give every result a permanent four-character tag. Link each proof to the results it uses. The outcome is a reference that keeps growing, has one maintainer (Aise Johan de Jong) who accepts changes from contributors, and can be cited down to the single lemma.

## Main definitions

**Tag.** A permanent identifier, four characters long, attached to one definition, lemma, section or chapter. Numbering such as "Proposition 35.5.2" can change as the text grows. The tag does not.

**Algebraic space (Tag 025Y).** Fix a base scheme S. An algebraic space over S is a sheaf F of sets on the big fppf site of S with two properties.
- The diagonal F → F × F is representable.
- There is a scheme U and a surjective étale map from U to F.

**Algebraic stack (Tag 026O).** An algebraic stack over S is a category 𝒳 over the big fppf site of S with three properties: it is a stack in groupoids, its diagonal 𝒳 → 𝒳 × 𝒳 is representable by algebraic spaces, and there is a scheme U with a surjective smooth 1-morphism from U to 𝒳.
- Compared with an algebraic space: sets become groupoids, and the étale cover becomes a smooth cover.

## Main results

**Claim (scope; About page).** The project is not an introductory text. It aims to build algebraic geometry and to use it to lay the foundations of algebraic stacks. Commutative algebra, schemes, varieties and algebraic spaces are all part of it.

**Theorem (fpqc descent for quasi-coherent sheaves; Proposition 35.5.2, Tag 023T).** Let S be a scheme and let {U<sub>i</sub> → S} be an fpqc covering. Then every descent datum on quasi-coherent sheaves for this covering is effective. Also, the functor from quasi-coherent sheaves on S to descent data is fully faithful.
- Step 1: pass to an affine open covering of S and refine to standard fpqc coverings of the affine pieces.
- Step 2: prove faithfulness, then fullness, then essential surjectivity, in that order.

**Claim (Artin's axioms; Chapter 98, Tag 07SZ).** The chapter develops deformation categories, formal objects, versality and openness of versality. It builds to criteria for a functor to be an algebraic space (Proposition 98.16.1) and for a stack to be algebraic (Proposition 98.17.2). I read only the chapter's table of contents, so I do not state the hypotheses here.

## Note, then ignore

- Big sites and set theory. The definitions fix a scheme "contained in Sch<sub>fppf</sub>", a chosen big site, to avoid size problems. Safe to skip on a first reading.
- fppf, not étale. The project defines algebraic spaces and stacks on the fppf site, where some other texts use the étale site. It is a convention for now. Safe to skip.
- No separation hypothesis. The definitions above put no quasi-separatedness condition on the diagonal, unlike some older sources. This matters only when you compare with those sources. Safe to skip.
- Numbers move, tags stay. Chapter and lemma numbers shift when material is added. Cite by tag and ignore the numbers.
- Length of chapters. The authors do not try to keep chapters short, because the text is read through links and search. Safe to ignore.

## One next step

Open https://stacks.math.columbia.edu/tag/026O and read only Definition 94.12.1 and its footnote.

source: https://www.3blue1brown.com/blog/exact-sequence-picturebook
slogan: Draw subgroups and quotients as jigsaw pieces, and the snake lemma, long exact sequences and spectral sequences become pictures you can read off.
basis: the page itself

## Before you start

This one is a hand-drawn picture book of 57 pages by Ravi Vakil, posted as a guest piece on Grant Sanderson's site. The feeling it may raise is mild embarrassment: you have seen the snake lemma proved and still cannot say what it means. Plenty of people carry that. It is meant as bedtime reading. If you want homological algebra to feel like something you can see, this is a pleasant way in.

## The story

Diagram chasing proves the snake lemma, but the proof leaves no picture behind. Ravi Vakil asks for a picture for a group A with a subgroup B. Venn diagrams fail, because the quotient A/B is not a subset. His answer is a jigsaw. Draw A as a region cut into two pieces, B and A/B, joined by a puzzle connector that records which piece is the sub and which is the quotient. A homomorphism X → Y is then two regions that share one piece, the image. Longer diagrams are built the same way. A commuting square, the snake lemma, the long exact sequence in cohomology and, as a finale, the spectral sequence of a filtered complex each become one drawing.

## Main definitions

**Sub and quotient pieces.** A group A with subgroup B is one region split into the pieces B and A/B. The connector between them points from sub to quotient. Dimensions, where they make sense, add over the pieces.
- A three-step filtration C ⊂ B ⊂ A has three pieces. The third isomorphism theorem can be read off the picture.

**Picture of a homomorphism.** For X → Y, the image is at once a quotient piece of X and a sub piece of Y. Drawing it once is the first isomorphism theorem. The other piece of X is the kernel, and the other piece of Y is the cokernel.

**Cohomology of a complex.** For a complex with maps d<sup>i</sup> : C<sup>i</sup> → C<sup>i+1</sup>, each C<sup>i</sup> has three pieces: the image of d<sup>i−1</sup>, then H<sup>i</sup>, then a copy of the image of d<sup>i</sup>. The complex is exact when the middle pieces are empty.

## Main results

**Claim (snake lemma as a picture).** For a map between two short exact sequences, one drawing shows the kernels, the cokernels and the connecting map all at once. The picture says what each piece of the six-term sequence is. Vakil says it is not a formal proof, but it can be turned into one.

**Claim (long exact sequence).** A short exact sequence of complexes gives each middle term a two-step filtration. Drawing the three complexes together shows the cohomology groups and the maps between them, the connecting map included.
- The picture contains the snake lemma, turned on its side.

**Claim (spectral sequences).** For a complex with a finite filtration, each page of the spectral sequence takes cohomology along the arrows visible so far. This removes pairs of matching pieces and reveals new, longer arrows. After finitely many pages only the graded pieces of the cohomology remain.
- The worked example uses a four-step filtration.
- The usual formulas for the pages are translations of the pictures, left to the reader as homework.

## Note, then ignore

- No unions. The picture of X → Y has three pieces, but no object corresponds to all three together. Vakil flags this as a caution. Once you have noted it, move on.
- Abelian categories. He draws abelian groups and says that modules, or objects of any abelian category, work the same way. Safe to skip.
- The web page against the PDF. The page shows the drawings as images with no text. The linked PDF is the same book. Safe to skip.
- Not an introduction. The post says it assumes that you have met exact sequences and cohomology already. It is a companion to a textbook. Safe to skip.
- Bonus material. The last pages recast each page of a spectral sequence as an object of its own category. Safe to skip on a first reading.

## One next step

Open the page and scroll to the drawing of a single homomorphism X → Y. Do its homework: label the kernel and the image.

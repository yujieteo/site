source: https://blogs.ams.org/visualinsight/2016/03/15/zamolodchikov-tetrahedron-equation/
slogan: The tetrahedron equation is the Yang-Baxter equation one dimension up, and you can read it off pictures of four strands crossing.
basis: the page itself

## Before you start

This is a short blog post, but in the middle sits one equation eight lines long. The likely feeling is a flinch at that wall of symbols, and a thought that you ought to parse it. You don't have to, and the flinch is fine. The post exists for its pictures. If you like the idea that algebraic laws are shadows of topology, it gives you one clean example in a few minutes. Look at the drawings and enjoy them. Understanding every symbol is optional.

## The story

Take three strands of a braid. You can slide one crossing under the third strand. This is the third Reidemeister move, and in algebra it is the Yang-Baxter equation: two ways of composing three crossings are equal. Now go up a dimension. In a 2-category, do not demand that the two sides are equal. Ask only for a 2-morphism from one side to the other. Call it the Yang-Baxterator. It is the process of doing the move, and it traces out a surface in 4-dimensional space. A process should obey a law of its own. With four strands there are two routes from one braid to its mirror arrangement, each made of four Yang-Baxterators. The Zamolodchikov tetrahedron equation says the two routes agree. Carter and Saito's illustration shows both routes as movies of braids.

## Main definitions

**Yang-Baxter equation.** For an object x in a monoidal category and a morphism B : x ⊗ x → x ⊗ x, the equation (B ⊗ 1)(1 ⊗ B)(B ⊗ 1) = (1 ⊗ B)(B ⊗ 1)(1 ⊗ B). Draw B as two strands crossing. The equation then says a crossing slides under a third strand.

**Yang-Baxterator.** For an object x in a monoidal 2-category and a morphism B : x ⊗ x → x ⊗ x, a 2-morphism Y from (B ⊗ 1)(1 ⊗ B)(B ⊗ 1) to (1 ⊗ B)(B ⊗ 1)(1 ⊗ B). The Yang-Baxter equation now holds only up to Y.

**Zamolodchikov tetrahedron equation.** An equation between two composites of four copies of Y each, padded with copies of B on the remaining strand. Both composites are 2-morphisms between the same two braids on four strands.
- Left side: perform the third Reidemeister move on a threefold crossing, then slide the result under the fourth strand.
- Right side: slide the threefold crossing under the fourth strand first, then perform the move.

## Main results

The page has no theorems. These are its main claims, and it gives references in place of proofs.

**Claim (topological meaning).** Think of Y as the surface in 4-dimensional space traced out by the third Reidemeister move. Then the tetrahedron equation says that the surface traced by the left-side route can be deformed into the surface traced by the right-side route. The post calls the equation a basic law for surfaces embedded in 4-dimensional space, and points to the books of Carter, Kamada and Saito.

**Claim (algebraic source).** The Yang-Baxter equation follows from the definition of a braided monoidal category. In the same way, the tetrahedron equation follows from the definition of a braided monoidal 2-category. The post cites Baez and Neuchl, Crans, Baez and Langford, and Baez and Crans for the details.

**Claim (reading the picture).** In Carter and Saito's second drawing, the numbers on each step name the three strands, out of four, that take part in that Yang-Baxterator. Each side of the equation uses four such steps.

## Note, then ignore

- Line thickness in the first image. A commenter noticed that the shaded picture once drew near and far strands the wrong way round. Carter corrected it. Safe to ignore.
- Brackets and the symbol ∘ in the long formula. They record how 2-morphisms are composed and padded with identity 1-morphisms. The pictures carry the same information. Skip the formula on a first reading.
- Which 2-category. The post does not fix a definition of monoidal 2-category, and several versions exist in the papers it cites. This does not affect the picture. Skip it.
- Credit for the diagrams. The black and white string diagrams come from the paper by Baez and Crans, and most were drawn by Aaron Lauda. The coloured ones are by Carter and Saito. Only useful if you want to trace sources.
- The name "tetrahedron". The post does not explain the name. Do not let it distract you.

## One next step

Open the page and look only at the two black and white string diagrams of the Yang-Baxter equation and the Yang-Baxterator, about a third of the way down. Then scroll to the four-strand picture that follows the long formula.

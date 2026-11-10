source: https://www.daniellitt.com/blog/2019/2/12/holding-the-p-adics-in-the-palm-of-your-hand
slogan: The 3-adic integers are a tree that splits in three at every level, so you can render it, print it and hold it.
basis: the page itself

## Before you start

This post is one picture, one tweet and a few lines of text. The likely feeling is a small guilt that looking at a picture is not real study. You can feel that and look anyway. If you want an image of the p-adic numbers that stays with you when the algebra gets heavy, this is one. Enjoy the picture first. There is nothing here to finish.

## The story

Students meet the 3-adic integers as infinite strings of digits, or as an inverse limit. Both are correct, and neither is easy to see. A few years before the post, Litt answered a MathOverflow question on how to picture such things, and made a 3D model for it in the free program Blender. He lost the file, so in 2019 he built it again. The model is a set of stacked cones. Each cone carries three smaller cones, and each of those carries three more. He posted the render online. Matt Kukla, then a student at the University of Maryland, asked for the source file and 3D printed it. The post shows the render and the print, and links to the files.

## Main definitions

**3-adic integers ℤ<sub>3</sub>.** The set of sequences (a<sub>1</sub>, a<sub>2</sub>, ...) with a<sub>n</sub> in ℤ/3<sup>n</sup>ℤ and a<sub>n+1</sub> ≡ a<sub>n</sub> mod 3<sup>n</sup>. Equivalently, the formal sums c<sub>0</sub> + 3c<sub>1</sub> + 9c<sub>2</sub> + ... with digits c<sub>i</sub> in {0, 1, 2}. This is the standard definition. The post does not restate it.

**Residue class mod 3<sup>n</sup>.** The set of 3-adic integers with a fixed image in ℤ/3<sup>n</sup>ℤ. Each class mod 3<sup>n</sup> splits into exactly three classes mod 3<sup>n+1</sup>.
- In the model: one cone is one class, and the three cones standing on it are its three subclasses.

**The tree of ℤ<sub>3</sub>.** The rooted tree whose vertices at depth n are the classes mod 3<sup>n</sup>, with an edge from each class to its three subclasses. A 3-adic integer is an infinite path down from the root.

## Main results

**Claim (what the picture shows).** Litt's caption says the model is really ℤ/243ℤ. Since 243 = 3<sup>5</sup>, the model is the tree of ℤ<sub>3</sub> cut off after five levels of splitting, with 243 tips. The true ℤ<sub>3</sub> is the limit as the number of levels grows.
- Kukla's remark in the embedded tweet makes the same point: the printer has only finite filament.

**Claim (how to read the levels; from the linked MathOverflow answer, not the post).** In the flat version of the picture, the three largest circles are the classes mod 3, the next circles are the classes mod 9, and so on. Zero is the single point lying in the class of 0 at every level.
- Addition permutes the classes cyclically at each level.
- Multiplication by 3<sup>n</sup> shrinks the whole picture into the class of 0 mod 3<sup>n</sup>.

**Claim (you can make one).** In an edit dated 19 May 2019, the post links to the original .blend file and an exported .obj file. With those a reader can render or print the model.

## Note, then ignore

- ℤ/243ℤ against ℤ<sub>3</sub>. The object in your hand is a finite ring, not the 3-adic integers. Any physical model has to stop somewhere. Safe to ignore once you have noted it.
- Why cones. The post gives no reason for the shapes or the spacing. Only the branching pattern carries meaning. Safe to skip.
- ℤ<sub>3</sub> against ℚ<sub>3</sub>. The MathOverflow answer says that for ℚ<sub>p</sub> you continue the picture upward without end, so that this whole model becomes one of three branches of a larger one. The post shows only the integers. Safe to skip at first.
- The original question. The MathOverflow thread asks about ℂ<sub>p</sub>, which is a much larger field. The model does not show it. Safe to skip.
- Comments. The page says its comments need JavaScript. Nothing in the argument depends on them.

## One next step

Open the post, look at the first image, and count three levels of splitting upward from one of the big bases. Name the classes mod 3, mod 9 and mod 27 as you go.

source: https://blogs.ams.org/visualinsight/2015/12/01/golay-code/
slogan: Put 12 data bits on the faces of a great dodecahedron and 12 check bits on its vertices, and you get the extended Golay code.
basis: the page itself

## Before you start

This short blog post has three pictures. Nothing in it is hard, so the feeling to expect is different: a mild guilt that a picture page is not real study, and an urge to save it for a tired day. You may notice that urge without obeying it. The post lets you hold a famous code in your head with no table of 0s and 1s. Watch the animation because it is fun. The Mathieu groups can wait.

## The story

The extended binary Golay code packs 12 bits of data into 24-bit words so that the receiver can repair up to 3 flipped bits. The usual description is a 12 × 24 matrix of 0s and 1s that is hard to remember. The post gives a picture instead. The great dodecahedron has the 12 vertices of an icosahedron and 12 large pentagonal faces that pass through each other. Put the 12 data bits on the faces and 12 parity bits on the vertices. The bit at a vertex is the sum, modulo 2, of the data bits on the faces that do not contain that vertex. Switching on one face at a time lights up a pattern of vertices, and those 12 patterns are a basis of the code.

## Main definitions

**Linear code and Hamming distance.** A binary linear code of length n is a subspace W of 𝔽<sub>2</sub><sup>n</sup>. The Hamming distance between two words is the number of coordinates where they differ.
- Why distance matters: if any two code words differ in at least 8 places, an error in at most 3 bits can be corrected and an error in at most 7 bits can be detected.

**Extended binary Golay code.** A 12-dimensional subspace W of 𝔽<sub>2</sub><sup>24</sup> in which any two elements differ in at least 8 coordinates.
- Construction on the page: 12 data bits on the faces of the great dodecahedron, and 12 parity bits on the vertices, each the sum modulo 2 of the bits on the faces not containing that vertex.

**Perfect binary Golay code.** The subspace W′ of 𝔽<sub>2</sub><sup>23</sup> obtained from W by deleting any one coordinate. It has dimension 12 and minimum distance at least 7.
- Perfect means: the balls of Hamming radius 3 around the code words partition 𝔽<sub>2</sub><sup>23</sup>.

**k-transitive action.** A group G acts k-transitively on a set X if any k distinct points can be sent to any other k distinct points, in order, by one element of G.

## Main results

The page states these without proof.

**Claim (uniqueness).** Up to permuting the 24 coordinates, W is the only 12-dimensional subspace of 𝔽<sub>2</sub><sup>24</sup> in which any two elements differ in at least 8 coordinates.

**Claim (the dodecahedron works).** The 12 words obtained by switching on one face of the great dodecahedron at a time, with the vertex rule above, form a basis of W.

**Claim (symmetry groups).** The permutations of the 24 coordinates that preserve W form the Mathieu group M<sub>24</sub>. It is simple, has 244,823,040 = 24 · 23 · 22 · 21 · 20 · 16 · 3 elements, and acts 5-transitively on the 24 coordinates. The permutations of 23 coordinates that preserve W′ form the simple group M<sub>23</sub>, with 10,200,960 = 23 · 22 · 21 · 20 · 16 · 3 elements, acting 4-transitively.
- Why the factorisation: a group that acts k-transitively on n points has order divisible by n(n − 1)···(n − k + 1).

**Claim (use).** The page, paraphrasing Wikipedia, says the Voyager 1 and 2 spacecraft used the extended Golay code to send colour pictures of Jupiter and Saturn. It corrects fewer errors than the Hadamard code used before it but allows a much higher data rate.

## Note, then ignore

- Great dodecahedron versus dodecahedron. The solid used has the vertices of an icosahedron, not of the ordinary dodecahedron. Its faces are pentagons that cross each other. Safe to skip on a first reading.
- "Do not contain". The parity rule sums over faces that miss the vertex, not faces that touch it. This is easy to misread and matters only if you compute. Safe to skip.
- Extended versus perfect. The 24-bit code is "extended" and the 23-bit code is "perfect". They differ by one coordinate. Safe to skip.
- Generator matrix. The coloured grid on the page is the same 12 basis words written as rows, data bits on the left and parity bits on the right. Safe to skip.
- The comments. A reader adds that the 759 code words of weight 8 form a Steiner system. This is a comment, not part of the post. Safe to skip.

## One next step

Open the page and watch Greg Egan's animation, the second moving image, for one full cycle. Count how many vertices light up when one face is switched on.

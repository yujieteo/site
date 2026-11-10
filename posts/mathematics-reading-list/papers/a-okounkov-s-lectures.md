source: https://sites.google.com/view/andrei-okounkov-lecture-course/home
slogan: Thirty-three lectures build quantum groups from the geometry of Hilbert schemes and quiver varieties, then use them to count curves.
basis: the page itself

## Before you start

The page lists 33 lectures, each with notes and a video, and the topic lines are dense with names you may not know. The likely feeling is overwhelm, mixed with a sense of being under-prepared. Both are reasonable here, and you do not need to argue with them. If you want to see how counting curves turns into representation theory, lecture 1 is an introduction with that aim. Watch for pleasure. The other 32 will still be there.

## The story

Fix a space X: the Hilbert scheme of points of ℂ<sup>2</sup>, or more generally a Nakajima quiver variety. Enumerative geometry wants to count maps from curves to X, in K-theory. Direct computation is hard. The course takes a detour through algebra. First it builds special correspondences, called stable envelopes, in the equivariant elliptic cohomology of X. From these come R-matrices, and from R-matrices a quantum group that acts on the cohomology, the K-theory and the elliptic cohomology of X. Then the counting problem is cut into building blocks, which are operators on K(X). The representation theory of the quantum group gives formulas for these blocks. Okounkov advises watching the videos at well above normal speed.

## Main definitions

The page defines nothing formally. These are the objects it names, with the standard meaning.

**Hilbert scheme of points of ℂ<sup>2</sup>.** The space whose points are the ideals of finite codimension n in ℂ[x, y]. It is the running example X of the course.
- Wider setting named on the page: Nakajima quiver varieties, and moduli of vacua of certain supersymmetric gauge theories in 2+1 dimensions.

**Stable envelope.** A correspondence in the equivariant elliptic cohomology of X, and hence in K(X) and H(X). The page does not define it. Lectures 9 and 10 set it up as an interpolation problem on attracting manifolds and prove existence and uniqueness.

**R-matrix and Yang–Baxter equation.** An R-matrix is an operator on a tensor product of two spaces that satisfies the Yang–Baxter equation, a consistency condition on three factors. Lectures 2 and 3 explain how to rebuild a quantum group from its R-matrices.

**Quasimap and vertex function.** Quasimaps to a quotient X give moduli spaces suited to K-theoretic counting (lecture 21). Vertex functions are basic counts of this kind. Lecture 2 presents q-hypergeometric functions and Macdonald polynomials as examples.

## Main results

**Claim (stable envelopes exist).** Elliptic stable envelopes exist and are unique in the setting of the course (topic of lecture 10). They are computed for projective spaces, hypertoric varieties and Grassmannians (lectures 11 and 12).

**Claim (quantum group from geometry).** Stable envelopes give R-matrices that satisfy the Yang–Baxter equation in its dynamical form (lecture 13). These generate a quantum group acting on the elliptic cohomology, K-theory and cohomology of X. For instanton moduli spaces the group is the Yangian of the affine gl(1), with links to the Virasoro algebra and W-algebras (lecture 17).

**Claim (difference equations).** The curve counts satisfy q-difference equations in the equivariant variables and in the Kähler variables. The first kind are quantum Knizhnik–Zamolodchikov equations (lectures 26 to 28).
- Solutions: integral formulas, tied to the Bethe Ansatz (lectures 24, 31, 32).

**Claim (monodromy).** The monodromy of vertex functions is given by elliptic stable envelopes (lecture 33).

These are topic lines from the page, not theorem statements. The precise hypotheses are in the two papers "Inductive construction of stable envelopes and applications" that the page names as its technical references.

## Note, then ignore

- Guest lectures. Lecture 5 (Krichever, equivariant cobordism) and lecture 20 (Melissa Liu, virtual fundamental classes) stand apart from the main line. Safe to skip on a first pass.
- Henry Liu's notes. The page links typed notes for the whole course, which may become a book. They are a second source, not a requirement. Safe to skip at first.
- Physics language. Words such as "vacua", "supersymmetry" and "3d mirror symmetry" give motivation. The page states the goals in mathematical terms too. Safe to skip.
- A defective video. The page flags one video near lecture 32 as defective. Use the PDF notes there. Safe to ignore.
- The title "Summer 2020". The course was planned for a summer and ran to 33 lectures through 2020. Safe to ignore.

## One next step

Open the page, read the four bullet points under "goals", then open Summer2020\_lecture1.pdf and read its first two pages.

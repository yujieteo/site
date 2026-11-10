source: https://www.cs.ox.ac.uk/files/12921/book.pdf
slogan: Row reduction, done with proofs from day one, grows into vector spaces, linear maps and Jordan form, with exercises that teach you to argue.
basis: the introduction and the main theorem statements

## Before you start

This is a 500-page first textbook, and you already know much of it. The likely feeling is boredom, or a quiet embarrassment at going back to the start. Both are fine to have while you read. The book is built for self-study and proves every result, so it is a cheap place to practise writing proofs you can trust. Pick the exercises that look like fun. Covering every section is not the aim.

## The story

Many first courses start with matrix arithmetic and determinants. Then vector spaces and proofs arrive all at once, and students stall. Hefferon wants the change to be gradual. So the book opens with Gauss's Method for linear systems, and already there it proves that the method returns the full and correct solution set. That proof needs linear combinations of rows, which leads to vector spaces in Chapter Two. Maps between spaces follow, and matrices appear as their representations with respect to bases. Determinants come late. The last chapter asks when two matrices represent the same map in different bases, and answers with Jordan form. Each chapter ends with short Topics on applications, such as Markov chains, voting paradoxes and coupled oscillators. The preface says a learner progresses most by doing exercises.

## Main definitions

**Vector space.** A set V with an addition and a scalar multiplication satisfying ten closure and arithmetic conditions (Definition Two.I.1.1). Scalars are real numbers until Chapter Five, which moves to ℂ.
- From Two.III.2 on, "vector space" means a finite-dimensional one.

**Basis and dimension.** A basis is a sequence of vectors that is linearly independent and spans the space. The dimension is the number of vectors in any basis.

**Rank and nullity.** For a linear map h from V to W, the rank is the dimension of the range space and the nullity is the dimension of the null space, the set of vectors sent to zero.

**Jordan block.** A square block with one number λ ∈ ℂ in every diagonal entry, 1 in every subdiagonal entry, and zero elsewhere (Definition Five.IV.2.6).
- A 1×1 block is the number λ alone.

## Main results

**Theorem (unique reduced echelon form; Theorem One.III.2.6).** Each matrix is row equivalent to exactly one reduced echelon form matrix.
- Step 1: row operations replace rows by linear combinations of rows (the Linear Combination Lemma).
- Step 2: induct on the number of columns.

**Theorem (dimension is well defined; Theorem Two.III.2.4).** In a finite-dimensional vector space, all bases have the same number of elements.
- Step 1: take a basis B of minimal size n and another basis D.
- Step 2: swap vectors of D into B one at a time with the Exchange Lemma. D cannot have more than n.

**Theorem (rank plus nullity; Theorem Three.II.2.14).** For a linear map h from a finite-dimensional space V, rank(h) + nullity(h) = dim V.
- Step 1: take a basis of the null space and extend it to a basis of V.
- Step 2: show the images of the added vectors form a basis of the range space.

**Theorem (Jordan form; Theorem Five.IV.2.8).** Any linear map from ℂ<sup>n</sup> to itself has a matrix representation made of Jordan blocks along the diagonal with zeros elsewhere. Equivalently, any n×n complex matrix is similar to one in this form.
- Step 1: induct on n. Pick an eigenvalue λ, which exists over ℂ, and apply the hypothesis to the range of t − λ, which has smaller dimension.
- Step 2: extend the strings of basis vectors from that range to a basis of the whole space.

## Note, then ignore

- Subdiagonal ones: this book puts the 1's of a Jordan block below the diagonal. Many books put them above. It is a convention, safe to skip.
- Uniqueness of Jordan form: the theorem gives existence. Remark Five.IV.2.9 says you get uniqueness after fixing an order for the blocks. Safe to skip at first.
- Bases as sequences: a basis is ordered here, so the same vectors in another order count as a different basis. This matters for representing maps by matrices. Safe to skip on a first reading.
- Starred subsections: the contents mark optional subsections with a star, including most of the route to Jordan form. Safe to skip, as the author says.
- Section numbering: "Three.II.2" means Chapter Three, Section II, Subsection 2, and theorem numbers restart in each subsection. Safe to skip once noted.

## One next step

Open the book at the Preface and read only the paragraph headed "Advice", including the 14-week timetable.

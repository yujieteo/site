source: https://swc-math.github.io/aws/2000/00AndersonN.pdf
slogan: Infinite matrices act on a space of semi-infinite wedges, and the scalars by which two such actions fail to commute give reciprocity laws on curves.
basis: the introduction and the main theorem statements

## Before you start

This is a 99-page notebook from March 2000, written mostly as numbered examples, with twelve sections of tools before Fock space appears. That can raise impatience, or the worry that you are slow with index-heavy notation. Either feeling is fine. The notebook is unfinished. If you want to see a physics object give a number-theory law by pure algebra, this is a direct route. Play with one definition and enjoy it. Completing the notebook is optional.

## The story

Number theorists wanted the uses of fermionic Fock space, such as τ-functions and reciprocity laws, without analysis. Anderson rebuilds it by linear algebra over an artinian local ring k. Take ℤ by ℤ matrices that are almost upper triangular. Take a module F with one basis vector for each "wedge index". Think of e<sub>i<sub>1</sub></sub> ∧ e<sub>i<sub>2</sub></sub> ∧ ... with decreasing indices. The author says this picture is strictly nonsense but a good guide. Each invertible matrix lifts to an operator on F, unique up to a scalar. That loose scalar is the plot. Two commuting matrices have lifts that commute only up to a scalar. For Laurent series the notes compute this scalar and reach the Contou-Carrère symbol. An adelic set-up then gives a product formula, which contains Weil reciprocity.

## Main definitions

**H and Q (Chapter 1, Definitions 4.1 and 4.2).** H is the k-module of column vectors indexed by ℤ whose entries vanish for all large positive indices. Q is the set of ℤ by ℤ matrices A that are almost upper triangular: for each n, only finitely many non-zero entries A<sub>ij</sub> have i ≥ n ≥ j.

**Wedge index and Fock space (Definitions 9.8 and 13.1).** A wedge index is a subset I of ℤ that is bounded above and whose complement is bounded below. The infinite wedge model F is the free k-module on symbols |I⟩. Each f in H gives an operator f<sup>♯</sup> that inserts indices and an operator f<sup>♭</sup> that removes them, with signs.
- Vacuum: |•⟩ = |ℤ \ ℕ⟩, where ℕ is the set of positive integers.
- Relations: both operators square to zero, and f<sup>♯</sup>g<sup>♭</sup> + g<sup>♭</sup>f<sup>♯</sup> = Σ f<sub>n</sub>g<sub>1−n</sub>.

**Infinite wedge representation (Definition 15.2).** For an invertible A in Q, a k-linear automorphism Ã of F such that Ã g<sup>♯</sup> = (Ag)<sup>♯</sup> Ã and Ã h<sup>♭</sup> = (A<sup>−†</sup>h)<sup>♭</sup> Ã for all g, h in H.

**Commutator symbol (Chapter 3, Definition 1.1).** For commuting invertible A, B in Q, the unique invertible scalar {A, B} with B̃Ã = {A, B} ÃB̃ for all lifts.

## Main results

**Theorem (fundamental theorem; Chapter 1, Theorem 15.10).** Every invertible A in Q has an infinite wedge representation, unique up to an invertible scalar. Every split orthogonal matrix in Q has a representation on the second, "diamond" model, also unique up to an invertible scalar.
- Step 1: uniqueness is settled earlier in the notes (Propositions 13.6 and 14.5).
- Step 2: existence comes from factoring A into simple pieces (Section 11), each with an explicit lift.

**Theorem (transversality; Chapter 1, Theorem 17.1).** Let A in Q be split orthogonal and Ã a diamond representation. The vacuum coefficient ⟨•|Ã|•⟩ is non-zero modulo the maximal ideal of k if and only if H = H(ℕ) ⊕ A·H(1 − ℕ).
- Equivalent: the block of A with rows and columns in 1 − ℕ is invertible.

**Theorem (reciprocity law; Chapter 3, Theorem 3.12).** Let 𝔸 be the universal adele ring of the notes, a commutative ring of matrices in Q with one copy of k((t)) for each "standard place" P. Let O be its upper triangular part. Let K ⊂ 𝔸 be a flat k-subalgebra such that K ∩ O and 𝔸/(K + O) are finitely generated k-modules. Then for all invertible f, g in K, the product over all P of the Contou-Carrère symbols {f<sub>P</sub>, g<sub>P</sub>} equals 1.
- Case k a field: the symbol is the tame symbol. With K the function field of a curve over a countable algebraically closed field, this is the Weil reciprocity law (Chapter 3, Examples 2.4 and 4.7).
- Case of a nilpotent parameter ε with ε<sup>3</sup> = 0: the law says that the residues of a differential g<sub>0</sub> df<sub>0</sub> sum to zero (Example 4.8).

## Note, then ignore

- Artinian local ring. The base k is not a field, so that nilpotent deformation parameters are allowed. Read k as a field at first. Safe to skip.
- Two models. The diamond model handles the orthogonal group and contains the infinite wedge model (Example 15.3). Safe to ignore the diamond model on a first reading.
- Signs. Each insertion or removal carries a sign that counts the indices above n. It is the usual cost of reordering a wedge. Safe to skip.
- The dagger. A<sup>†</sup> reflects a matrix in the anti-diagonal, and A<sup>−†</sup> means the dagger of the inverse. It plays the part of an inverse transpose. Safe to skip.
- Draft status. Most statements are "Examples" left as exercises, and a few references are unfinished. Safe to accept for the story.

## One next step

Open the PDF at Chapter 1, Section 13 (page 46) and read only Definition 13.1 and Remark 13.3.

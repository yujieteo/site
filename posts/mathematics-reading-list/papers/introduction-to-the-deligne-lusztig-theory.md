source: https://viasm.edu.vn/Cms_Data/Contents/viasm/Media/file/viasm_2016.pdf
slogan: Cohomology of a variety cut out by Frobenius yields every irreducible character of a finite group of Lie type, sorted by a dual group.
basis: the introduction and the main theorem statements

## Before you start

The file shows 217 pages, and the subject is said to need algebraic groups and ℓ-adic cohomology before you may begin. The likely feeling is intimidation. You are allowed to feel that. These are lecture slides with overlays, so the real length is about 120 frames, and the first third works by hand with GL<sub>2</sub>(q). If you want to know where character tables of matrix groups come from, this is a kind route. Enjoy the GL<sub>2</sub>(q) table first.

## The story

You want the character table of a group such as GL<sub>n</sub>(q). Inducing characters from the diagonal torus through the upper triangular subgroup gives many characters, but not all. The missing ones belong to tori that are not split over 𝔽<sub>q</sub>, such as the cyclic group of order q² − 1 inside GL<sub>2</sub>(q). Such a torus lies in no Borel subgroup stable under Frobenius F, so ordinary induction has nothing to induce through. Deligne and Lusztig use a variety instead: the set of x with x<sup>−1</sup>F(x) in a unipotent group. The finite group and the torus both act on it, so its ℓ-adic cohomology is a bimodule, and a bimodule gives an induction. Every irreducible character then appears in some induced virtual character. Lusztig sorts them by a dual group.

## Main definitions

**Finite group of Lie type.** Let **G** be a connected reductive algebraic group over the algebraic closure of 𝔽<sub>p</sub>, and F : **G** → **G** a Frobenius map. The finite group is the fixed-point group G = **G**<sup>F</sup> (Definition 4.18).
- Example: **G** = GL<sub>n</sub> with F raising entries to the q-th power gives GL<sub>n</sub>(q). Composing with inverse transpose gives the unitary group GU<sub>n</sub>(q).

**Deligne-Lusztig character R<sub>T</sub><sup>G</sup>(θ).** Let **T** be an F-stable maximal torus in a Borel subgroup **B** with unipotent radical **U**, where **B** need not be F-stable. Let L(x) = x<sup>−1</sup>F(x) be the Lang map. The groups G and **T**<sup>F</sup> act on the variety L<sup>−1</sup>(**U**), so the alternating sum of its compactly supported ℓ-adic cohomology is a virtual bimodule. For a character θ of **T**<sup>F</sup>, R<sub>T</sub><sup>G</sup>(θ) is the virtual character of G on the θ-part (Definitions 5.7 and 5.14).
- If **B** is F-stable, this is ordinary Harish-Chandra induction (Corollary 5.10).

**Dual group and Lusztig series.** The dual group **G**\* has the roots and coroots of **G** exchanged, with a matching Frobenius (Definition 7.3). Pairs (**T**, θ) up to geometric conjugacy correspond to conjugacy classes of semisimple elements s of the dual (Proposition 7.8). The Lusztig series E(G, (s)) is the set of irreducible characters that occur in some R<sub>T</sub><sup>G</sup>(θ) with (**T**, θ) matching s (Definition 7.9).
- Unipotent characters: the series for s = 1 (Definition 7.12).

## Main results

**Theorem (inner products; Corollary 5.15).** For F-stable maximal tori **T**, **T**′ and characters θ, θ′, the inner product of R<sub>T</sub><sup>G</sup>(θ) and R<sub>T′</sub><sup>G</sup>(θ′) equals the number of n in G that conjugate (**T**, θ) to (**T**′, θ′), divided by the order of **T**<sup>F</sup>. Also R<sub>T</sub><sup>G</sup>(θ) does not depend on the Borel subgroup chosen.
- Step 1: apply the Mackey formula (Theorem 5.12), which holds when one of the two Levi subgroups is a maximal torus.
- Step 2: for independence of **B**, show the difference of two candidates has norm zero.

**Theorem (every character appears; Theorem 7.2).** The regular character of G is a signed sum of all R<sub>T</sub><sup>G</sup>(θ), divided by the p-part of the order of G. So every irreducible character of G is a constituent of some R<sub>T</sub><sup>G</sup>(θ).
- Step 1: the character formula (Theorem 6.2) reduces values to Green functions on unipotent elements.
- Step 2: the Steinberg character vanishes off semisimple elements (Theorem 6.9), which converts the formula for it into one for the regular character.

**Theorem (disjointness; Theorem 7.7 and Proposition 7.11).** If (**T**, θ) and (**T**′, θ′) are not geometrically conjugate, then R<sub>T</sub><sup>G</sup>(θ) and R<sub>T′</sub><sup>G</sup>(θ′) share no irreducible constituent. So the irreducible characters of G are a disjoint union of Lusztig series, indexed by semisimple classes s in the dual group.

**Theorem (Jordan decomposition of characters, Lusztig; Theorem 7.16).** For each semisimple s in the dual finite group G\* there is a bijection J<sub>s</sub> from E(G, (s)) to the unipotent characters of the centraliser C<sub>G\*</sub>(s). Degrees satisfy χ(1) = [G\* : C<sub>G\*</sub>(s)]<sub>p′</sub> · J<sub>s</sub>(χ)(1), where the subscript p′ means the part prime to p.
- Case connected centre: Lusztig proved this first.
- Other cases: embed **G** in a group with connected centre and the same derived subgroup.

## Note, then ignore

- Virtual characters. R<sub>T</sub><sup>G</sup>(θ) is a difference of characters, not a character. Signs ε<sub>G</sub>ε<sub>T</sub> keep track of this. Safe to skip on a first reading.
- The prime ℓ. Cohomology uses a prime ℓ different from p, and the Lefschetz numbers do not depend on it (Fact 5.6). Safe to skip.
- Disconnected centralisers. When the centre of **G** is disconnected, as for SL<sub>n</sub>, there are two kinds of Lusztig series, geometric and rational. They agree for GL<sub>n</sub>. Safe to skip.
- Lang-Steinberg (Theorem 4.17). The Lang map is onto for connected groups. Every proof uses it, but you can take it on trust. Safe to skip.
- Mackey formula conditions. Theorem 5.12 lists four cases where the formula is known. Only the torus case is needed here. Safe to skip.

## One next step

Open the slides at Section 2 and find the character table of GL<sub>2</sub>(q). Then jump to Example 7.13, which sorts those same characters into Lusztig series.

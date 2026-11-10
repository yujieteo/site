source: https://kskedlaya.org/cft/preface-1.html
slogan: A full proof of class field theory, from Kronecker–Weber through group cohomology to ideles, sits free online in short linked sections.
basis: the introduction and the main theorem statements

## Before you start

Seven chapters stand between you and the proof, and one whole chapter is group cohomology. That can raise the fear of being too slow, or of never reaching the end. You are allowed to feel that. The notes come from a one-semester course, and they state the theorems long before they prove them. If you want to see how primes split in abelian extensions, Chapters 1 and 2 already show you. Enjoy the trailer first. The rest stays online.

## The story

These are notes from a Berkeley course in spring 2002, corrected after a second run online in 2021. The plot has a clear shape. First a trailer. Every abelian extension of ℚ sits inside a cyclotomic field, and you can prove this by hand, one prime at a time. Then the general statements, in the language of ideals, with no proofs yet. What blocks the general proof is a lack of tools. The notes build them: cohomology of groups, then local class field theory through a theorem of Tate, then an abstract framework after Artin and Tate. Last, ideles replace ideals, and two inequalities on idele class groups finish the global proof.

## Main definitions

**Modulus and ray class group (Definition 2.2.3).** A modulus 𝔪 of a number field K is a formal product of places. Let J<sup>𝔪</sup> be the fractional ideals prime to the finite part of 𝔪, and P<sup>𝔪</sup> the principal ideals (α) with α ≡ 1 modulo each prime power in 𝔪 and α positive at each real place in 𝔪. The ray class group is Cl<sup>𝔪</sup>(K) = J<sup>𝔪</sup>/P<sup>𝔪</sup>.
- Complex places impose no condition.

**Artin map (Definition 2.2.4).** Let L/K be a finite abelian extension and 𝔪 a modulus divisible by every prime that ramifies in L. The Artin map J<sup>𝔪</sup> → Gal(L/K) sends each prime 𝔭 to its Frobenius element. This is well defined because the extension is abelian.

**Ray class field and conductor (Definition 2.2.7).** The conductor of L/K is the smallest modulus for which Artin reciprocity holds. L is the ray class field of 𝔪 if its conductor divides 𝔪 and the Artin map gives an isomorphism Cl<sup>𝔪</sup>(K) ≅ Gal(L/K).

**Idele class group (Section 6.2).** C<sub>K</sub> = I<sub>K</sub>/K<sup>×</sup>, the ideles of K modulo the principal ideles.

## Main results

**Theorem (Kronecker–Weber; Theorem 1.1.2).** Every finite abelian extension of ℚ lies in ℚ(ζ<sub>n</sub>) for some n.
- Step 1: prove the local version, that every finite abelian extension of ℚ<sub>p</sub> lies in some ℚ<sub>p</sub>(ζ<sub>n</sub>) (Theorem 1.1.5, proved as Theorem 1.3.4).
- Step 2: glue the local answers with inertia groups and Minkowski's theorem that ℚ has no extension unramified everywhere (Lemma 1.1.10).

**Theorem (Artin reciprocity and existence; Theorems 2.2.6 and 2.2.8).** Let L/K be a finite abelian extension of number fields. Some modulus 𝔪, divisible by every place that ramifies in L, has P<sup>𝔪</sup> inside the kernel of the Artin map. The induced map Cl<sup>𝔪</sup>(K) → Gal(L/K) is surjective. Conversely, every modulus has a ray class field.
- Meaning: the Frobenius of a prime depends only on its class modulo 𝔪. Over ℚ, it depends only on p modulo the conductor.

**Theorem (local reciprocity; Theorem 4.1.2).** Let K be a local field. There is a unique map φ<sub>K</sub>: K<sup>×</sup> → Gal(K<sup>ab</sup>/K) with two properties.
- Frobenius: for each uniformiser π and each finite unramified L/K, φ<sub>K</sub>(π) acts on L as Frobenius.
- Norms: for each finite abelian L/K, the map induces an isomorphism from K<sup>×</sup> modulo the norms from L<sup>×</sup> to Gal(L/K).

**Theorem (adelic reciprocity and existence; Theorems 6.4.3 and 6.4.4).** Let K be a number field. There is a map r<sub>K</sub>: C<sub>K</sub> → Gal(K<sup>ab</sup>/K). For each finite Galois extension L/K it induces an isomorphism from C<sub>K</sub> modulo the norms from C<sub>L</sub> to the abelianisation of Gal(L/K). Every open subgroup of finite index in C<sub>K</sub> is the norm group of a finite abelian extension.
- Step 1: Chapter 7 proves this through the First and Second Inequalities on the cohomology of ideles.
- Step 2: Proposition 6.4.9 deduces Artin reciprocity. An idele that is a uniformiser at 𝔭 and 1 elsewhere maps to the Frobenius of 𝔭.

## Note, then ignore

- Topology on K<sup>×</sup>. The local existence theorem speaks of open subgroups of finite index. For finite extensions of ℚ<sub>p</sub> every subgroup of finite index is open. Safe to skip on a first reading.
- Norm limitation (Theorem 4.1.7). Norms from a non-abelian extension give the same group as norms from its maximal abelian subextension. It explains why only abelian extensions appear. Safe to skip at first.
- The invariant map (Theorem 4.1.12). The second cohomology of the multiplicative group of a local field is ℚ/ℤ. It drives the proof and links to Brauer groups. Safe to skip until Chapter 4.
- Existence is inexplicit. The existence theorem does not hand you generators of the ray class field. The notes say so. Safe to skip.
- Not a textbook. The preface says the notes are no stand-alone replacement for one. Safe to ignore while you read for the story.

## One next step

Open Section 1.1, "The Kronecker-Weber theorem", and read Theorem 1.1.2 and Example 1.1.3 on quadratic fields.

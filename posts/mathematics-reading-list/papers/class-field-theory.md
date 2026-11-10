source: https://www.jmilne.org/math/CourseNotes/CFT.pdf
slogan: The abelian extensions of a number field are listed by groups built from the field itself, so Galois questions become arithmetic ones.
basis: the abstract and introduction

## Before you start

These notes run to 294 pages and ask for a prior course in algebraic number theory. The likely feeling is overwhelm, with some fear that group cohomology will slow you to a crawl. You can feel both and still open the file. If you want to know why primes split according to congruence conditions, the 18-page introduction already tells you, with history. Read that for enjoyment first. The other 270 pages can wait.

## The story

Take a finite extension L of a number field K. People wanted to know which primes of K split completely in L. For ℚ(√p\*) over ℚ, quadratic reciprocity answers this: a prime splits when it lies in certain residue classes. Cyclotomic fields behave the same way. The block was to find the right "congruence classes" for a general K. The idea is to replace residue classes by ray class groups, which are ideal class groups with a congruence condition attached. Takagi showed that every abelian extension of K matches a subgroup of some ray class group. Artin then gave the isomorphism explicitly: send a prime to its Frobenius element. Chevalley later packed all moduli into one group, the idèle class group, and built the global map from local ones.

## Main definitions

**Frobenius element.** Let L/K be a finite Galois extension of number fields with group G, and 𝔓 a prime of L unramified over 𝔭 = 𝔓 ∩ O<sub>K</sub>. Then (𝔓, L/K) is the unique σ ∈ G with σ𝔓 = 𝔓 and σα ≡ α<sup>q</sup> mod 𝔓 for all α in O<sub>L</sub>, where q is the size of O<sub>K</sub>/𝔭.
- Abelian case: it depends only on 𝔭, and is written (𝔭, L/K).

**Modulus and ray class group.** A modulus 𝔪 is a formal product of an integral ideal 𝔪<sub>0</sub> and some real primes. The ray class group C<sub>𝔪</sub> is the group of fractional ideals prime to 𝔪, modulo the principal ideals (a) with a positive at the real primes in 𝔪 and a ≡ 1 to the order given by 𝔪<sub>0</sub>.
- 𝔪 = 1: the usual class group.
- K = ℚ, 𝔪 = (m)∞: the group (ℤ/mℤ)<sup>×</sup>.

**Idèle class group.** The idèle group I<sub>K</sub> is the group of families (a<sub>v</sub>) with a<sub>v</sub> in K<sub>v</sub><sup>×</sup>, and a<sub>v</sub> a unit for almost all finite primes v. It is locally compact. The idèle class group is C<sub>K</sub> = I<sub>K</sub>/K<sup>×</sup>.

**Class field.** For a subgroup H of C<sub>𝔪</sub>, a class field is an abelian extension L of K, unramified at the primes dividing 𝔪, in which the primes that split completely are exactly those whose class lies in H.

## Main results

**Theorem (Takagi; Theorem 0.5).** Let K be a number field. Each subgroup H of a ray class group C<sub>𝔪</sub> has a class field L, and it is unique. Every finite abelian extension of K arises this way. Then Gal(L/K) is isomorphic to C<sub>𝔪</sub>/H, and a prime 𝔭 not dividing 𝔪 is unramified with residue degree equal to the order of its image in C<sub>𝔪</sub>/H.

**Theorem (Artin reciprocity; Theorem 0.8).** Let L/K be a finite abelian extension of number fields and S the set of primes that ramify. For some modulus 𝔪 with support S, the map 𝔭 ↦ (𝔭, L/K) factors through C<sub>𝔪</sub>. It gives an isomorphism from the ideals prime to S, modulo the principal ideals of the modulus times norms of ideals from L, onto Gal(L/K).
- Surjectivity: this uses analysis, namely the density theorem of Frobenius.
- The hard part: showing that the map admits a modulus at all.

**Theorem (local reciprocity and existence; Chapter I, Theorems 1.1 and 1.4).** Let K be a nonarchimedean local field. There is a unique homomorphism φ<sub>K</sub> : K<sup>×</sup> → Gal(K<sup>ab</sup>/K) such that a prime element acts as Frobenius on every finite unramified extension, and such that for every finite abelian L it induces an isomorphism K<sup>×</sup>/Nm(L<sup>×</sup>) ≅ Gal(L/K). The norm groups are exactly the open subgroups of finite index.
- Route 1 (Chapter I): Lubin-Tate formal groups build the extensions explicitly.
- Route 2 (Chapter III): group cohomology and a theorem of Tate build the map.

**Theorem (global reciprocity and existence, idèlic form; Chapter V, Theorems 5.3 and 5.5).** For a number field K, the product of the local Artin maps is a homomorphism φ<sub>K</sub> : I<sub>K</sub> → Gal(K<sup>ab</sup>/K). It is trivial on K<sup>×</sup>. For every finite abelian L it induces an isomorphism C<sub>K</sub>/Nm(C<sub>L</sub>) ≅ Gal(L/K). Every open subgroup of finite index in C<sub>K</sub> is Nm(C<sub>L</sub>) for a unique finite abelian L inside a fixed algebraic closure.

## Note, then ignore

- "Prime" includes infinite primes. Milne uses the word for a class of valuations, so real and complex embeddings count. This matters for narrow class groups, and is safe to skip at first.
- "m odd or divisible by 4". This convention makes the ramified primes of the m-th cyclotomic field exactly those dividing m. Safe to skip.
- Which chapters to read. Milne says the odd chapters are the core. Chapter II is needed, but IV, VI and VIII are not needed for III, V and VII. Most of Chapter I can be skipped on the way to the global theorems.
- Kernel of the global map. For number fields the idèlic map is onto, and its kernel on C<sub>K</sub> is the identity connected component. It affects only infinite extensions. Safe to skip.
- Versions. The link gives v4.03 from 2020. Page counts differ from older versions. Safe to skip.

## One next step

Open the PDF at the Introduction, find the heading "Ramified abelian extensions", and read down to Theorem 0.5.

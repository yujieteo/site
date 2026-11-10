source: http://www.fen.bilkent.edu.tr/~franz/cryp/ECC.pdf
slogan: Points on an elliptic curve over a finite field form a group where logarithms are hard, so short keys give strong cryptography.
basis: the full text

## Before you start

This is a 20-page tutorial from 2005, written for cryptographers, with tables of field-operation counts and lists of standards. If you come from the number theory side, the likely feeling is mild boredom, or a worry that applied material is a detour. Either is fine to feel. The tutorial does show something you may want: the group law, the zeta function and Hasse's bound doing a job, with numbers you can check by hand. Read the parts that amuse you and skim the tables.

## The story

RSA and ElGamal work, so why look further? Small devices need small keys and short signatures. The best known attacks on the multiplicative group of a finite field run in subexponential time, which forces long keys. Around 1985 Miller and Koblitz independently proposed the group of points of an elliptic curve over a finite field. For this group no subexponential algorithm for the discrete logarithm is known, so shorter keys reach the same security. The tutorial builds the group from the chord and tangent rule, counts its points, and warns which curves to avoid. Then every classical scheme carries over by writing the group additively: Diffie–Hellman, ElGamal and the signature algorithm ECDSA. The same group law, run modulo a number n of unknown status, also factors n or proves it prime.

## Main definitions

**Elliptic curve over a finite field.** A smooth curve given by a Weierstrass equation, together with one point O at infinity.
- Over 𝔽<sub>p</sub> with p > 3: Y<sup>2</sup> = X<sup>3</sup> + aX + b with 4a<sup>3</sup> + 27b<sup>2</sup> ≠ 0.
- Over 𝔽<sub>2<sup>m</sup></sub>, non-supersingular case: Y<sup>2</sup> + XY = X<sup>3</sup> + aX<sup>2</sup> + b.

**Group law.** O is the zero element. Three points where a line meets the curve sum to zero. So P + Q is the reflection of the third intersection point of the line through P and Q, and 2P uses the tangent at P.
- Over 𝔽<sub>p</sub>: −(x, y) = (x, −y), and x(P + Q) = α<sup>2</sup> − x<sub>1</sub> − x<sub>2</sub>, where α is the slope of the line.

**Zeta function.** Let N<sub>r</sub> be the number of points of E over 𝔽<sub>q<sup>r</sup></sub>. Then Z(E/𝔽<sub>q</sub>; T) = exp(Σ N<sub>r</sub> T<sup>r</sup>/r), a formal power series in T.

**Elliptic curve discrete logarithm problem (ECDLP).** Given a curve E over 𝔽<sub>q</sub>, a base point B and a point P, find an integer x with xB = P, if one exists.

## Main results

**Theorem (zeta function; Theorem 1).** For an elliptic curve E over 𝔽<sub>q</sub>, Z(E/𝔽<sub>q</sub>; T) = (1 − aT + qT<sup>2</sup>) / ((1 − T)(1 − qT)), where a = q + 1 − N<sub>1</sub> and a<sup>2</sup> ≤ 4q. The tutorial gives no proof and refers to Silverman.
- Consequence (Corollary 1): if α and its conjugate are the roots of T<sup>2</sup> − aT + q, then N<sub>r</sub> = q<sup>r</sup> + 1 − α<sup>r</sup> − ᾱ<sup>r</sup>. One point count gives all the others.
- Consequence (Corollary 2, Hasse): q + 1 − 2√q ≤ N<sub>1</sub> ≤ q + 1 + 2√q.

**Claim (which curves are safe).** The discrete logarithm is only as hard as the largest prime factor of the group order allows. If the order n is a product of small primes, the Silver–Pohlig–Hellman method solves the problem modulo each factor and combines the answers by the Chinese remainder theorem.
- Example 2 in the text does this for y<sup>2</sup> = x<sup>3</sup> + 3x + 1 over 𝔽<sub>p</sub> with p = 10<sup>7</sup> + 19, where n = 2 · 3<sup>2</sup> · 347 · 1601.
- Supersingular curves are also avoided: Menezes, Okamoto and Vanstone use the Weil pairing to move their logarithm problem into a small extension field.

**Claim (the schemes carry over).** In Diffie–Hellman, Alice sends aB, Bob sends bB, and both compute abB. In the ElGamal analogue, Alice sends (kB, P + k(bB)) and Bob subtracts b(kB) to recover P. ECDSA signs with a pair (r, s) where r is the x-coordinate of kG modulo n and s = k<sup>−1</sup>(e + dr) modulo n.
- Verification of ECDSA works because u<sub>1</sub>G + u<sub>2</sub>Q = kG when the signature is genuine.

**Proposition (primality test; Proposition 4).** Let E be an elliptic curve modulo n and m an integer with a prime factor q > (n<sup>1/4</sup> + 1)<sup>2</sup>. If some point P has mP = O, and (m/q)P is defined and not O, then n is prime.
- Step 1: if n had a prime factor p ≤ √n, Hasse bounds the order of E modulo p below q.
- Step 2: so q is invertible modulo that order, which forces (m/q)P = O modulo p. Contradiction.

## Note, then ignore

- Two kinds of field. Every formula is given twice, for 𝔽<sub>p</sub> and for 𝔽<sub>2<sup>m</sup></sub>, because binary fields suit hardware. Safe to follow only 𝔽<sub>p</sub> on a first reading.
- Projective coordinates. Section 3 uses weighted projective coordinates so that addition needs no field inversion. The tables count multiplications. Safe to skip.
- Associativity. The proof quotes, without proof, a statement about two triples of lines meeting a cubic in nine points, and handles only distinct points. Safe to skip.
- Misprints. The text has several, for example a sign in Example 1 where it writes N = q + 1 + a. Trust Theorem 1 and move on.
- Age. The security claims and the list of standards date from 2005, and the signature scheme uses SHA-1. Treat them as history. Safe to skip.

## One next step

Open the PDF at page 4 and look at Figure 1, the picture of P, Q and P + Q on y<sup>2</sup> = x<sup>3</sup> − 4x + 1. Then read the sentence just above it, which says that three points on a line sum to zero.

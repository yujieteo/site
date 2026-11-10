source: https://arxiv.org/pdf/1812.09946
slogan: The Frobenius eigenvalues of a curve modulo p have angles, and played as beat times those angles give a palindromic rhythm you can hear.
basis: the introduction and the main theorem statements

## Before you start

The title has the word "motive" in it, and that word can raise a quick dread: you may expect Grothendieck-level machinery that you have not learned. That reaction is fine to have. Here it turns out to be a false alarm, because the only motive used is H<sup>1</sup> of a curve over a finite field, and most of the pages are pictures. If you want a way to feel what Weil's theorem says, this gives one. Read it as you would listen to a piece of music. Finishing is optional.

## The story

Kac asked whether you can hear the shape of a drum: a Riemannian space has a spectrum, and a spectrum is a set of pitches. Connes wants to hear a motive, and he argues that pitch is the wrong ear. In his own work on the Riemann zeta function the zeros appeared as moments in time, not as energy levels. For a curve over a finite field 𝔽<sub>q</sub> this is concrete. The zeros of its zeta function lie on a circle, and their imaginary parts repeat with period 2π/log q. So he reads the angles of the zeros as times at which notes are struck. The result is a repeating rhythm with 2g beats for a curve of genus g. The functional equation makes the rhythm read the same backwards. Messiaen built such rhythms by hand.

## Main definitions

**L-function of a curve over 𝔽<sub>q</sub>.** For a curve C of genus g over 𝔽<sub>q</sub>, the analogue of ζ(s) is a rational function of z = q<sup>−s</sup>. Its zeros are the roots z<sub>j</sub> of a numerator polynomial P(z) of degree 2g.
- These roots are the eigenvalue data of Frobenius acting on H<sup>1</sup> of the curve.

**Time onsets.** Write the argument of z<sub>j</sub> as −α<sub>j</sub>, with −π ≤ α<sub>j</sub> ≤ π. The numbers α<sub>1</sub> ≤ ... ≤ α<sub>2g</sub> are the onsets: the moments in one period at which a note is played.
- In the variable s, the zeros have imaginary parts (α<sub>j</sub> + 2πk)/log q for k ∈ ℤ, so the pattern repeats.

**Motivic rhythm of a curve at p.** Take a hyperelliptic curve y<sup>2</sup> = P(x) over ℚ, with P of degree 11, so g = 5. For each prime p not dividing the discriminant of P, reduce mod p and take the 10 onsets. The paper does this for two explicit curves and the primes from 7 to 67.

**Non-retrogradable rhythm.** Messiaen's name for a rhythm that is the same played forwards and backwards.

## Main results

**Theorem (Weil; quoted in Section 1).** For a curve of genus g over 𝔽<sub>q</sub>, all 2g zeros z<sub>j</sub> of P(z) have absolute value q<sup>−1/2</sup>. So the zeros in s all have real part 1/2.
- This is cited, not proved. It is what makes the zeros sit on one circle, so that only their angles carry information.

**Claim (palindrome; Section 1, item 1).** The onsets satisfy α<sub>2g+1−j</sub> = −α<sub>j</sub>.
- Step 1: the functional equation s ↦ 1 − s acts on z = p<sup>−s</sup> as z ↦ 1/(pz).
- Step 2: for g = 5 the paper writes this as p<sup>5</sup> z<sup>10</sup> P(1/(pz)) = P(z), which pairs each zero with its complex conjugate.

**Claim (irrational onsets and tempo; Section 1, items 2 and 3).** The onsets are in general irrational numbers. The period of the rhythm is 2π/log q, so the tempo rises as q grows.
- The paper states the irrationality as an observation and gives no proof.

**Claim (a score for each prime; Section 3).** To give each prime p a recognisable tune of five notes, take the continued fraction of 6 log p/log 2 and form alternating partial sums of its first five terms. Mirror the five notes to get ten.
- The first term is the integer part of 6 log p/log 2. It picks the note of the twelve-tone scale closest to √p, which matches the radius of the circle of zeros.

## Note, then ignore

- The sign of α<sub>j</sub>. The onset is minus the argument of the zero. This is a convention that makes time run forwards. Safe to skip on a first reading.
- Bad primes. Primes dividing the discriminant of P(x) give a badly behaved reduction, so the two curves are chosen with no bad prime between 7 and 67. Safe to skip.
- Why genus 5. The paper says any genus would do. Five gives ten beats, a convenient number for a tune. Safe to skip.
- Rhythm and pitch kept apart. The onsets come from the curve and the pitches from the prime alone, by a separate recipe. The mathematics is all in the onsets. Safe to skip.
- The Bost–Connes system. The introduction mentions it as the origin of the view that zeros are times. It is not used afterwards. Safe to skip.

## One next step

Open the paper at Section 1 and read only the three numbered "striking facts", then look at Figure 3, the rhythm for p = 7.

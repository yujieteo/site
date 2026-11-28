### March numbering removes leap day cases

**Remember:** Start the year in March, so the leap day comes last.

*Makes the theorem clean to state or prove.* MSC 00A08 (Recreational mathematics), 01A55, 11A07. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Zeller's congruence starts the year in March: March to December are months 3 to 12, and January and February are months 13 and 14 of the previous year. The leap day then falls at the end of the year, so every month starts at a fixed offset from March 1.

**Problem.** With Gregorian day d, March-based month m and adjusted year 100j + k (0 ≤ k &lt; 100), the weekday is d + ⌊13(m + 1)/5⌋ + k + ⌊k/4⌋ + ⌊j/4⌋ + 5j modulo 7. Remainders 0 to 6 give Saturday to Friday.

**How the definition helps.** Because the leap day comes last, the month term needs only fixed offsets, and the year terms count all earlier leap days (our own). The term ⌊13(m + 1)/5⌋ matches the fixed month lengths from March to January (our own). The terms k, ⌊k/4⌋, ⌊j/4⌋ and 5j add the Gregorian leap-year and century rules (our own).

**Wikipedia:** [Zeller's congruence](https://en.wikipedia.org/wiki/Zeller%27s_congruence). It says: “In this algorithm January and February are counted as months 13 and 14 of the previous year.”

**Sources:**

- [Christian Zeller, Kalender-Formeln](https://doi.org/10.1007/BF02406733)

### Two parities block the puzzle

**Remember:** Each slide flips both signs, so their product stays put.

*True by definition.* MSC 00A08 (Recreational mathematics), 05A05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** The invariant is the sign of the permutation of the fifteen tiles and the blank, times the colour of the blank's square on a checkerboard (+1 white, −1 black). Each slide swaps the blank with a neighbour, so it flips both factors (our own).

**Problem.** The standard solved 15 puzzle board cannot reach a board with just tiles 14 and 15 swapped.

**How the definition helps.** Each move flips both signs, so their product never changes. Swapping only tiles 14 and 15 flips the permutation sign but not the blank's colour, so that board has the other product (our own calculation).

**Wikipedia:** [15 puzzle](https://en.wikipedia.org/wiki/15_puzzle). It says: “This is an invariant because each move changes both the parity of the permutation and the parity of the taxicab distance.”

**Paper or page:** [Modeling the 15 Tile Puzzle Through the Lens of Group Theory](https://arxiv.org/abs/2112.11634v1). It says: “Lloyd's 15 Tile Puzzle is unsolvable”

**Sources:**

- [Wm. Woolsey Johnson and William E. Story, Notes on the "15" Puzzle (1879)](https://doi.org/10.2307/2369492)
- [Viren Khandal, Modeling the 15 Tile Puzzle Through the Lens of Group Theory](https://arxiv.org/abs/2112.11634v1)

### Dimension labels preserve unit arithmetic

**Remember:** A unit change rescales each quantity by its dimension's powers.

*True by definition.* MSC 00A79 (Physics). arXiv math-ph. Level 3: graduate.

**Definition.** Give each base dimension a one-dimensional real vector space, and fix a unit, a basis vector, in each. A quantity of a derived dimension is a number times the product of these units raised to the dimension's integer powers, so a change of units rescales it by those powers of the conversion factors.

**Problem.** Two choices of base units give isomorphic arithmetic on quantities. The change preserves addition within a dimension and multiplication across dimensions.

**How the definition helps.** Changing base units multiplies every number of one dimension by the same factor, so sums within a dimension are preserved (our own). The factor for a product is the product of the factors, because dimension powers add, so products are preserved too (our own).

**Paper or page:** [Measurand Spaces and Dimensioned Hamiltonian Mechanics](https://arxiv.org/abs/2208.08893). It says: “are related by a type-preserving isomorphism of typed fields.”

**Sources:**

- [Carlos Zapata-Carratala, Measurand Spaces and Dimensioned Hamiltonian Mechanics](https://arxiv.org/abs/2208.08893)

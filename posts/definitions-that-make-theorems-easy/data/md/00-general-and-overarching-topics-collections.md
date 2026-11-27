### March numbering removes leap day cases

**Remember:** Put the leap day at the end.

*Makes the theorem clean to state or prove.* MSC 00A08 (Recreational mathematics), 01A55, 11A07. arXiv math.HO. Level 1: early undergraduate.

**Definition.** For a Gregorian date, number March through February from 3 through 14. Use the preceding year for January and February. Write the adjusted year as 100j + k, with 0 ≤ k &lt; 100. Let m be the month number and d the day of the month.

**Problem.** Find the remainder of d + ⌊13(m + 1)/5⌋ + k + ⌊k/4⌋ + ⌊j/4⌋ + 5j modulo 7. Remainders 0 through 6 give Saturday through Friday.

**How the definition helps.** Starting in March puts the variable day after every fixed month start (our own). The year term can then count past leap days and the month term can use only fixed offsets (our own). In our own check, the work is to match the offsets to the fixed month lengths and include the Gregorian century rule.

**Wikipedia:** [Zeller's congruence](https://en.wikipedia.org/wiki/Zeller%27s_congruence). It says: “In this algorithm January and February are counted as months 13 and 14 of the previous year.”

**Sources:**

- [Christian Zeller, Kalender-Formeln](https://doi.org/10.1007/BF02406733)

### Two parities block the puzzle

**Remember:** Each slide flips both signs, so their product stays put.

*True by definition.* MSC 00A08 (Recreational mathematics), 05A05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Color the board like a checkerboard, assigning +1 to white squares and −1 to black squares. Compare the positions of all fifteen tiles and the blank with their solved positions. Multiply the sign of that permutation by the sign of the blank’s square.

**Problem.** The standard solved 15 puzzle board cannot reach a board with just tiles 14 and 15 swapped.

**How the definition helps.** The combined sign stays fixed because each move swaps two objects and changes the blank’s color. In our own calculation, swapping 14 and 15 flips only the permutation sign. The work is to model each legal slide as one swap across neighboring squares of opposite colors (our own).

**Wikipedia:** [15 puzzle](https://en.wikipedia.org/wiki/15_puzzle). It says: “This is an invariant because each move changes both the parity of the permutation and the parity of the taxicab distance.”

**Paper or page:** [Modeling the 15 Tile Puzzle Through the Lens of Group Theory](https://arxiv.org/abs/2112.11634v1). It says: “Lloyd's 15 Tile Puzzle is unsolvable”

**Sources:**

- [Wm. Woolsey Johnson and William E. Story, Notes on the "15" Puzzle (1879)](https://doi.org/10.2307/2369492)
- [Viren Khandal, Modeling the 15 Tile Puzzle Through the Lens of Group Theory](https://arxiv.org/abs/2112.11634v1)

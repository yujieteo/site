### Mixed strategies give every finite zero-sum game a value

**Remember:** Randomizing makes the best guaranteed gain equal the least guaranteed loss.

*Rules out counterexamples.* MSC 91A05 (2-person games), 90C47. arXiv econ.TH, math.OC. Level 2: later undergraduate.

**Definition.** In a finite two-player zero-sum game with payoff matrix A, a mixed strategy is a probability vector over a player's actions. If the players use mixed strategies x and y, player one's expected payoff is xᵀAy and player two loses that amount.

**Problem.** Von Neumann's minimax theorem (1928): max over x of min over y of xᵀAy equals min over y of max over x. This common number is the value of the game. With pure strategies only, the two sides can differ.

**How the definition helps.** Mixed strategies make the strategy sets compact convex simplices and the payoff bilinear, and those are exactly the conditions a minimax theorem needs. Our own example: in matching pennies, with payoffs ±1, the pure max-min is −1 and the pure min-max is +1. With fifty-fifty mixing both equal 0. The page states the theorem in general, for compact convex sets and continuous concave-convex functions. The theorem is equivalent to linear programming duality (our own). What stays hard is infinite games, where the theorem can fail without compactness or continuity (our own).

**Wikipedia:** [Minimax theorem](https://en.wikipedia.org/wiki/Minimax_theorem). It says: “In the context of two-player zero-sum games, the sets X and Y correspond to the strategy sets of the first and second player, respectively, which consist of lotteries over their actions (so-called mixed strategies)”

**Sources:**

- [J. v. Neumann, Zur Theorie der Gesellschaftsspiele, Mathematische Annalen 100 (1928), 295–320](https://doi.org/10.1007/BF01448847)

### Letting players randomize makes Nash equilibria exist

**Remember:** Allow players to randomize, and every finite game has an equilibrium.

*Rules out counterexamples.* MSC 91A10 (Noncooperative games). arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A mixed strategy is a probability distribution over a player's pure strategies. A Nash equilibrium is a choice of one mixed strategy for each player with this property: if the strategies of the others stay fixed, no player can raise their own expected payoff by a change of strategy.

**Problem.** Every finite game in normal form (a game given by a table of payoffs) has at least one Nash equilibrium.

**How the definition helps.** Mixed strategies make the set of strategies compact and convex, so a fixed-point theorem applies. With pure strategies only, some finite games have no equilibrium. The article shows a 2×2 game in which, in each of the 4 cells, some player gains by a change of strategy. With mixed strategies, each player's set of strategies is a simplex, which is compact and convex. Expected payoffs are continuous, so the Kakutani or Brouwer fixed-point theorem applies. Von Neumann and Morgenstern had used mixed strategies only for zero-sum games; Nash defined the equilibrium for every finite game. What stays hard: the fixed-point proof does not say how to find an equilibrium.

**Wikipedia:** [Nash equilibrium](https://en.wikipedia.org/wiki/Nash_equilibrium). It says: “The key to Nash's ability to prove existence far more generally than von Neumann lay in his definition of equilibrium.”

**Sources:**

- [Nash, J. F. (1950). Equilibrium points in n-person games. PNAS 36(1), 48–49.](https://doi.org/10.1073/pnas.36.1.48)

### Subgame perfection removes non-credible threats, so backward induction finds equilibria

**Remember:** An equilibrium must stay an equilibrium wherever the game happens to go.

*Rules out counterexamples.* MSC 91A11 (Equilibrium refinements), 91A18. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A subgame is the part of a game tree that starts at one decision point and contains everything after it. A strategy profile is a subgame perfect equilibrium if it is a Nash equilibrium in every subgame. Reinhard Selten introduced the idea in 1965.

**Problem.** Every finite game with perfect information has a subgame perfect equilibrium, and backward induction computes it. Plain Nash equilibrium does not give this result, because some Nash equilibria rest on threats that a player would never carry out.

**How the definition helps.** Subgame perfection tests a plan in every subgame, so a threat that a player would not carry out fails the test. Nash equilibrium tests a plan only along the path that is played, so such a threat costs nothing. Our own example: an incumbent firm threatens a price war if a rival enters. The profile 'rival stays out, incumbent fights after entry' is a Nash equilibrium, but fighting is worse for the incumbent once entry has happened. Subgame perfection excludes it, and backward induction then fixes the last mover's best choice first and works backwards. The page notes that backward induction does not apply to infinite horizons or imperfect information. For infinite horizons it names the one-shot deviation principle instead.

**Wikipedia:** [Subgame perfect equilibrium](https://en.wikipedia.org/wiki/Subgame_perfect_equilibrium). It says: “This ensures that strategies are credible and rational throughout the entire game, eliminating non-credible threats.”

**Sources:**

- [R. Selten, Spieltheoretische Behandlung eines Oligopolmodells mit Nachfrageträgheit, Zeitschrift für die gesamte Staatswissenschaft 121 (1965), 301–324 and 667–689](https://www.jstor.org/stable/40748884)
- [R. Selten, Reexamination of the perfectness concept for equilibrium points in extensive games, International Journal of Game Theory 4 (1975), 25–55](https://doi.org/10.1007/BF01766400)

### Dominating sets survive voting cycles

**Remember:** A majority cycle can remove the winner but not the winning set.

*Makes the theorem clean to state or prove.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** For a finite election, call a set dominating if each member beats each outsider by majority vote. The Smith set is the least nonempty dominating set. It extends the Condorcet winner, who beats every other candidate alone.

**Problem.** A nonempty finite election always has exactly one least nonempty dominating set, even when no candidate beats all others.

**How the definition helps.** Allowing a set of winners makes the full candidate set a possible answer even in a cycle. Our own proof shows that any two dominating sets are nested. Otherwise, take a candidate belonging only to each set. Each would have to beat the other. A finite nested family of nonempty sets has a least member. In our own example, A beats B, B beats C, and C beats A. Only the full set dominates.

**Wikipedia:** [Smith set](https://en.wikipedia.org/wiki/Smith_set). It says: “It follows that the Smith set is the smallest non-empty dominating set, and that it is well defined.”

**Sources:**

- [Smith, Aggregation of Preferences with Variable Electorate (1973)](https://doi.org/10.2307/1914033)

### Gibbard–Satterthwaite counts possible outcomes, so two-outcome rules escape

**Remember:** Three possible winners force a dictator or a chance to lie.

*Rules out counterexamples.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A voting rule maps each list of voters' strict rankings of the candidates to one winner. The possible outcomes of the rule are the candidates that win for at least one list of rankings. A rule is manipulable if some voter can get a winner she prefers by reporting a false ranking.

**Problem.** Gibbard–Satterthwaite theorem: every voting rule with at least three possible outcomes is dictatorial or manipulable. A rule is dictatorial if it always picks the top choice of one fixed voter.

**How the definition helps.** With only two possible outcomes, majority vote between them, with a fixed rule for ties, is neither dictatorial nor manipulable (our own). A false ranking can only help the candidate the voter likes less. So the theorem must exclude rules with two outcomes. The page stresses that the condition is on possible outcomes, not on the number of candidates. Candidates who can never win do not matter, so the theorem applies whenever at least three can win. Some books assume instead at least three candidates and that every candidate can win; that version is less general. What stays hard is the proof, which goes through Arrow's theorem or a direct pivotal-voter argument.

**Wikipedia:** [Gibbard–Satterthwaite theorem](https://en.wikipedia.org/wiki/Gibbard%E2%80%93Satterthwaite_theorem). It says: “It is only assumed that at least three of them can win, i.e. are possible outcomes of the voting rule.”

**Sources:**

- [A. Gibbard, Manipulation of Voting Schemes: A General Result, Econometrica 41 (1973), 587–601](https://doi.org/10.2307/1914083)
- [M. A. Satterthwaite, Strategy-proofness and Arrow's conditions, Journal of Economic Theory 10 (1975), 187–217](https://doi.org/10.1016/0022-0531(75)90050-2)

### Single-peaked preferences escape Arrow's theorem

**Remember:** One peak per voter on one line means no majority cycles.

*Rules out counterexamples.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH. Level 2: later undergraduate.

**Definition.** A group of voters has single-peaked preferences if the alternatives can be put in one order, like points on a line, with this property. Each voter has an ideal point. Between two alternatives on the same side of that point, the voter prefers the closer one.

**Problem.** Majority rule can produce cycles, where A beats B, B beats C and C beats A (Condorcet's paradox). Arrow's theorem says that no ranked voting rule meets all of his conditions on the unrestricted domain. On that domain, every profile (one ranking for each voter) is allowed.

**How the definition helps.** Arrow's theorem needs every profile to be allowed, and single-peaked preferences remove the profiles that cause cycles. The standard bad profile is the Condorcet cycle, with voters ranking A-B-C, B-C-A and C-A-B. It is not single-peaked on any line, because each alternative is ranked last by some voter. When preferences are single-peaked, majority preferences have no cycles. The ideal point of the median voter is then the Condorcet winner, the alternative that beats every other alternative in a majority vote. With an odd number of voters, majority rule meets all of Arrow's conditions (Black). What stays hard: in two or more dimensions a Condorcet winner usually does not exist and cycles come back (the McKelvey–Schofield chaos theorem).

**Wikipedia:** [Single peaked preferences](https://en.wikipedia.org/wiki/Single_peaked_preferences), [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem), [Median voter theorem](https://en.wikipedia.org/wiki/Median_voter_theorem). It says: “If the domain is restricted to profiles where every individual has a single-peaked preference with respect to the linear ordering, then social preferences are acyclic.”

**Sources:**

- [Black, D. (1948). On the rationale of group decision-making. Journal of Political Economy 56(1), 23–34.](https://doi.org/10.1086/256633)
- [Arrow, K. J. (1950). A difficulty in the concept of social welfare. Journal of Political Economy 58(4), 328–346.](https://doi.org/10.1086/256963)

### With two alternatives Arrow's conditions hold, and May picks majority rule

**Remember:** Two options give majority rule; three options give Arrow's impossibility.

*Rules out counterexamples. Confidence: medium.* MSC 91B14 (Social choice), 91B12. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A social welfare function turns every list of voters' rankings into one ranking for society. Independence of irrelevant alternatives says that society's order of two alternatives depends only on the voters' orders of those two. Arrow's theorem assumes at least three alternatives.

**Problem.** Arrow's theorem: with at least three alternatives, every social welfare function with unanimity and independence of irrelevant alternatives is a dictatorship. With two alternatives this is false, since majority rule satisfies every condition. May's theorem shows that for two alternatives, majority rule is the only rule that is anonymous, neutral and positively responsive.

**How the definition helps.** With two alternatives there is no third alternative to be irrelevant, so independence says nothing and majority rule passes every test. The condition of three alternatives in Arrow's theorem excludes exactly this case. A Condorcet cycle needs three alternatives: majorities can prefer A to B, B to C and C to A. Arrow's proof uses such patterns (our own). May's theorem is the matching positive result for two alternatives, with anonymity, a condition stronger than non-dictatorship. What stays hard is the case of three or more, where only restrictions on the preferences, such as single-peakedness, restore a possibility result.

**Wikipedia:** [May's theorem](https://en.wikipedia.org/wiki/May%27s_theorem), [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem). It says: “Arrow's theorem does not apply to the case of two candidates (when there are trivially no "independent alternatives"), so this possibility result can be seen as the mirror analogue of that theorem.”

**Sources:**

- [K. J. Arrow, A Difficulty in the Concept of Social Welfare, Journal of Political Economy 58 (1950), 328–346](https://doi.org/10.1086/256963)
- [K. O. May, A Set of Independent Necessary and Sufficient Conditions for Simple Majority Decision, Econometrica 20 (1952), 680–684](https://doi.org/10.2307/1907651)

### The continuity axiom excludes lexicographic preferences

**Remember:** Continuity forbids one good that matters infinitely more than another.

*Rules out counterexamples.* MSC 91B16 (Utility theory), 91B06. arXiv econ.TH. Level 2: later undergraduate.

**Definition.** A lottery is a probability distribution over outcomes. The continuity axiom says the following. If lottery L is weakly worse than M, and M is weakly worse than N, then some probability p makes M exactly as good as a mixture of L and N. The mixture gives weight p to L and weight 1 − p to N.

**Problem.** The von Neumann–Morgenstern theorem: preferences over lotteries that satisfy the axioms can be represented by the expected value of a real-valued utility function. That is, one lottery is at least as good as another exactly when its expected utility is at least as large.

**How the definition helps.** The continuity axiom removes lexicographic preferences, so that the theorem can give a real number. Lexicographic preferences rank by a first criterion and use a second criterion only to break ties. They can be complete and transitive, but no real-valued utility function represents them at all. The reason is that each value of the first good would need its own interval of utility values, and there are uncountably many such values. Over lotteries, lexicographic preferences break continuity. Take a bad outcome L, a middle outcome M that ties L on the first criterion and beats it on the second, and a good outcome N that beats both on the first criterion. Every mixture that gives N a positive weight is better than M, and the mixture with weight 0 on N is worse, so no mixture balances M (our own example).

**Wikipedia:** [Von Neumann–Morgenstern utility theorem](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem), [Lexicographic preferences](https://en.wikipedia.org/wiki/Lexicographic_preferences). It says: “These axioms, apart from continuity, are often justified using the Dutch book theorems (whereas continuity is used to set aside lexicographic or infinitesimal utilities).”

**Sources:**

- [J. von Neumann and O. Morgenstern, Theory of Games and Economic Behavior, Princeton University Press (1944; 2nd ed. 1947, with the utility axioms)](https://doi.org/10.1515/9781400829460)

### Log wealth turns growth into addition

**Remember:** Logarithms turn compounded returns into an average of one-round gains.

*True by definition.* MSC 91G10 (Portfolio theory), 91A60. arXiv q-fin.PM. Level 2: later undergraduate.

**Definition.** For repeated bets, compare fixed betting fractions by their expected one-round log return. Divide wealth after one round by wealth before it. The logarithm of this ratio is the log return.

**Problem.** Suppose successive wealth multipliers are independent, identically distributed, positive, and have integrable logarithms. Log wealth gained per round converges with probability one to the expected one-round log return.

**How the definition helps.** The logarithm turns compounded wealth into a sum of one-round log returns. In our own proof the strong law of large numbers gives the limit of their average. Comparing expected wealth instead gives a different decision. In our own even-odds example, a player wins with probability 60%. Betting everything maximizes expected one-round wealth but loses everything at the first defeat.

**Wikipedia:** [Kelly criterion](https://en.wikipedia.org/wiki/Kelly_criterion). It says: “maximizing the long-term expected value of the logarithm of wealth”

**Sources:**

- [Kelly, A New Interpretation of Information Rate (1956)](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)

### Best-response sets contain the supports of Nash equilibria

**Remember:** At equilibrium, each chosen strategy is justified by the other players’ choices.

*True by definition. Confidence: medium.* MSC 91A10 (Noncooperative games), 91A26. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** In a finite game, choose one set of pure strategies for each player. These form a best-response set if each included strategy is optimal for some independent random choices of the opponents on their chosen sets. A pure strategy is rationalizable if it belongs to such a set. An equivalent definition repeatedly deletes strategies that are never best replies to such random choices among the surviving strategies.

**Problem.** Every pure strategy played with positive probability in a Nash equilibrium is rationalizable.

**How the definition helps.** The best-response-set definition makes the proof immediate because the strategies played with positive probability at equilibrium form such a set. Each of those strategies is optimal against the other players’ equilibrium choices. Our own comparison is that the deletion proof needs an induction showing that each round keeps those strategies. The work in relating the definitions is to show that the deletion process leaves the largest best-response set.

**Wikipedia:** [Rationalizable strategy](https://en.wikipedia.org/wiki/Rationalizable_strategy). It says: “Rationalizability is a broader concept than a Nash equilibrium. Both require players to respond optimally to some belief about their opponents' actions, but Nash equilibrium requires these beliefs to be correct, while rationalizability does not.”

**Sources:**

- [B. Douglas Bernheim, Rationalizable Strategic Behavior, Econometrica 52 (1984) 1007–1028](https://doi.org/10.2307/1911196)

### Correlated equilibria form a polytope, so a linear program finds one

**Remember:** A correlated equilibrium is a solution of a linear program.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91A11 (Equilibrium refinements), 91A68. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A correlated equilibrium is a probability distribution over action profiles (choices of one action for each player). A mediator draws a profile and tells each player only their own action. The distribution is an equilibrium if no player then gains by deviating from the recommended action. These conditions are linear inequalities in the probabilities.

**Problem.** Find an equilibrium of a game efficiently.

**How the definition helps.** The equilibrium conditions are linear in the unknown distribution, so a linear program finds a correlated equilibrium. In our own words, the set of correlated equilibria is a convex polytope (a bounded region cut out by finitely many linear inequalities). A Nash equilibrium instead needs a fixed point of a nonlinear map. Every Nash equilibrium is a correlated equilibrium, so the set is never empty (our own remark). What stays hard is games given in a compact form with many players. For them the linear program is exponentially large, and Papadimitriou and Roughgarden treat that case separately.

**Wikipedia:** [Correlated equilibrium](https://en.wikipedia.org/wiki/Correlated_equilibrium). It says: “computing a correlated equilibrium only requires solving a linear program whereas solving a Nash equilibrium requires finding its fixed point completely.”

**Sources:**

- [Aumann, R. J. (1974). Subjectivity and correlation in randomized strategies. Journal of Mathematical Economics 1(1), 67–96.](https://doi.org/10.1016/0304-4068(74)90037-8)
- [C. H. Papadimitriou and T. Roughgarden, Computing correlated equilibria in multi-player games, Journal of the ACM 55(3) (2008), article 14](https://doi.org/10.1145/1379759.1379762)

### Trembling-hand perfection removes equilibria in weakly dominated strategies

**Remember:** If opponents might slip, weakly dominated strategies are never best.

*Rules out counterexamples.* MSC 91A11 (Equilibrium refinements), 91A10. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** In a perturbed game each player must play every strategy with some small positive probability, called a tremble. An equilibrium is trembling-hand perfect if it is a limit of equilibria of perturbed games as the trembles go to zero. Selten introduced it in 1975.

**Problem.** In 2×2 games, the perfect equilibria are exactly the Nash equilibria in which both players use undominated strategies. A strategy is weakly dominated if another strategy is never worse and sometimes better. Every finite game has at least one perfect equilibrium.

**How the definition helps.** If the opponent might tremble onto any strategy, a weakly dominated strategy does strictly worse against that mix, so it cannot be a best reply. The page's example has a Nash equilibrium (Down, Right) in which both players use weakly dominated strategies, and perfection excludes it. Existence still needs a fixed-point argument for each perturbed game and then a limit. What stays hard: Myerson showed that adding a strictly dominated strategy can change which equilibria are perfect, and this led him to proper equilibrium.

**Wikipedia:** [Trembling hand perfect equilibrium](https://en.wikipedia.org/wiki/Trembling_hand_perfect_equilibrium). It says: “For 2×2 games, the set of trembling-hand perfect equilibria coincides with the set of equilibria consisting of two undominated strategies.”

**Sources:**

- [R. Selten, Reexamination of the perfectness concept for equilibrium points in extensive games, International Journal of Game Theory 4 (1975), 25–55](https://doi.org/10.1007/BF01766400)
- [R. B. Myerson, Refinements of the Nash equilibrium concept, International Journal of Game Theory 7 (1978), 73–80](https://doi.org/10.1007/BF01753236)

### Arrival orders make the Shapley efficiency proof a telescoping sum

**Remember:** In each arrival order, the increases in worth add up to the total.

*True by definition.* MSC 91A12 (Cooperative games). arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A cooperative game assigns a worth v(S) to each group S of players, with v(∅) = 0. Order the players uniformly at random and pay each player the increase in worth when they join. The Shapley value is the average payment across orders. The other formula weights each increase by a coefficient that depends on the size of the preceding group.

**Problem.** The Shapley values sum to the worth of the group of all players. This property is called efficiency.

**How the definition helps.** The order formula makes efficiency a telescoping sum, since the group’s worth after each arrival is its worth before the next. Only the final worth and the empty group’s zero worth remain. Our own comparison is that the weighted formula hides this cancellation in its coefficients. To show the formulas agree, count the orders in which exactly a given group precedes a particular player. The separate uniqueness theorem shows that the Shapley value is the only rule that satisfies its four axioms.

**Wikipedia:** [Shapley value](https://en.wikipedia.org/wiki/Shapley_value). It says: “The sum of the Shapley values of all agents equals the value of the grand coalition, so that all the gain is distributed among the agents:”

**Sources:**

- [Lloyd S. Shapley, A Value for n-Person Games, in Contributions to the Theory of Games II, Annals of Mathematics Studies 28 (1953) 307–317](https://doi.org/10.1515/9781400881970-018)

### Balanced games are exactly the cooperative games with a nonempty core

**Remember:** Balancedness is the dual linear program of finding a core split.

*True by definition.* MSC 91A12 (Cooperative games), 90C46. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A cooperative game gives each coalition S of players a value v(S). The core is the set of ways to split v(N) among all players so that every coalition S gets at least v(S) in total. Weights α(S) ≥ 0 on coalitions are balanced if, for each player, the weights of the coalitions that contain her add up to 1. A game is balanced if Σ α(S) v(S) ≤ v(N) for all balanced weights.

**Problem.** Bondareva–Shapley theorem: the core of a game is nonempty exactly when the game is balanced. It follows that market games and convex games have nonempty cores.

**How the definition helps.** Balancedness is the dual linear program of 'find the cheapest payment that satisfies every coalition', so the theorem is linear programming duality read off. The primal problem minimizes the total payment Σ xᵢ, subject to each coalition S getting at least v(S). The core is nonempty when this minimum is at most v(N), and the dual maximizes Σ α(S) v(S) over balanced weights (our own explanation). Our own example of an empty core: with n odd, any coalition of at least (n+1)/2 players can split one unit. Suitable equal weights on all coalitions of size (n+1)/2 are balanced and give a total of 2n/(n+1) &gt; 1. So this game is not balanced. What stays hard is checking balancedness in practice, since it needs one inequality for each minimal balanced family, and there are very many.

**Wikipedia:** [Bondareva–Shapley theorem](https://en.wikipedia.org/wiki/Bondareva%E2%80%93Shapley_theorem), [Core (game theory)](https://en.wikipedia.org/wiki/Core_%28game_theory%29). It says: “Specifically, the game's core is non-empty if and only if the game is balanced.”

**Sources:**

- [L. S. Shapley, On balanced sets and cores, Naval Research Logistics Quarterly 14 (1967), 453–460](https://doi.org/10.1002/nav.3800140404)

### Harsanyi dividends give a direct check of the Shapley axioms

**Remember:** Split each group’s extra worth equally among its members.

*True by definition. Confidence: medium.* MSC 91A12 (Cooperative games). arXiv cs.GT. Level 3: graduate.

**Definition.** A cooperative game gives each group S a worth v(S), with v(∅) = 0. The dividend of S is its worth minus the dividends of all its proper subsets. In the dividend formula, each player receives an equal share of every dividend for a group that contains them. The arrival-order formula instead averages each player’s added worth over all orders.

**Problem.** The Shapley value distributes the full worth, adds across games, treats interchangeable players equally, and pays nothing to players who never add worth.

**How the definition helps.** Equal shares make full distribution immediate, and the dividend recursion respects addition and relabeling. Our own check of the last axiom uses induction. If a player adds nothing, compare each group containing that player with the same group without them. Their worths agree, and all smaller dividends involving that player vanish, so the group’s dividend is zero. Our own proof of the formula comparison uses the fact that each dividend goes to the last member to join in the arrival-order formula. Each member is equally likely to join last.

**Wikipedia:** [Shapley value](https://en.wikipedia.org/wiki/Shapley_value). It says: “In other words, the synergy of each coalition is divided equally between all members.”

**Sources:** none listed. No primary source with a working link was found.

### Potential games always have pure equilibria

**Remember:** Every selfish improvement climbs the same hill.

*True by definition.* MSC 91A14 (Potential and congestion games), 91A10. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A strategy profile is a choice of one strategy for each player. A game is a potential game if there is one function on strategy profiles, the potential, with this property. Whenever one player changes strategy, the change in the potential equals the change in that player's payoff, or at least has the same sign.

**Problem.** A pure-strategy Nash equilibrium should exist: a strategy profile where no single player gains by changing strategy. Improvement dynamics, where players one at a time make moves that raise their own payoff, should also converge.

**How the definition helps.** Each improving move strictly raises the potential, so an improvement path cannot cycle. In a finite game the path must stop. Where it stops no player can improve, so the stopping point is a pure Nash equilibrium, and a maximizer of the potential is an equilibrium by definition. Rosenthal (1973) proved that congestion games have pure equilibria by building such a function, and Monderer and Shapley (1996) made the potential the definition. In a congestion game, players choose resources, and the cost of a resource depends on how many players use it. What stays hard (our own summary): the path can be exponentially long. Fabrikant, Papadimitriou and Talwar proved that finding a pure equilibrium of a congestion game is PLS-complete (as hard as any local search problem whose single steps are easy to compute).

**Wikipedia:** [Potential game](https://en.wikipedia.org/wiki/Potential_game). It says: “We have just proved that every finite generalized-ordinal-potential game has the FIP.”

**Sources:**

- [Monderer, D.; Shapley, L. S. (1996). Potential games. Games and Economic Behavior 14(1), 124–143.](https://doi.org/10.1006/game.1996.0044)
- [Rosenthal, R. W. (1973). A class of games possessing pure-strategy Nash equilibria. International Journal of Game Theory 2, 65–67.](https://doi.org/10.1007/BF01737559)
- [Fabrikant, A.; Papadimitriou, C.; Talwar, K. (2004). The complexity of pure Nash equilibria. Proceedings of the 36th ACM Symposium on Theory of Computing, 604–612.](https://doi.org/10.1145/1007352.1007445)

### Perfect recall makes mixed and behavior strategies equivalent

**Remember:** A player who never forgets can randomize one move at a time.

*Rules out counterexamples.* MSC 91A18 (Games in extensive form), 91A10. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A player has perfect recall if she never forgets her own earlier moves or what she knew. A mixed strategy is a probability distribution over complete plans of action. A behavior strategy picks an independent random action at each information set, a set of decision points that the player cannot tell apart.

**Problem.** Kuhn's theorem (1953): in a finite game with perfect recall, every mixed strategy has a behavior strategy with the same outcome probabilities, and conversely. So one can work with the much smaller behavior strategies.

**How the definition helps.** With perfect recall, each information set is reached through one known history of the player's own moves (our own explanation). So the conditional probabilities of a mixed strategy at each information set define a behavior strategy. Without perfect recall this fails, as in the absent-minded driver of Piccione and Rubinstein (our own example). The driver cannot tell two exits apart, so his only plans are 'always exit' and 'always continue'. No mixed strategy passes the first exit and takes the second. With the usual payoffs, a behavior strategy that continues with probability 2/3 often does this, and it earns more. Aumann extended Kuhn's theorem to infinite games in 1964.

**Wikipedia:** [Kuhn's theorem](https://en.wikipedia.org/wiki/Kuhn%27s_theorem). It says: “in any finite extensive-form game where players have perfect recall (the ability to remember all of their previous moves and information), every mixed strategy has an equivalent behavior strategy that yields the same outcome probabilities, and vice versa.”

**Sources:**

- [H. W. Kuhn, Extensive Games and the Problem of Information, in Contributions to the Theory of Games II, Annals of Mathematics Studies 28 (1953), 193–216](https://doi.org/10.1515/9781400881970-012)
- [M. Piccione and A. Rubinstein, On the Interpretation of Decision Problems with Imperfect Recall, Games and Economic Behavior 20 (1997), 3–24](https://doi.org/10.1006/game.1997.0536)

### Invasion resistance breaks Nash ties

**Remember:** If mutants tie against residents, compare how both do against mutants.

*Rules out counterexamples.* MSC 91A22 (Evolutionary games). arXiv econ.TH. Level 3: graduate.

**Definition.** The resident strategy is the one initially used throughout the population. It is evolutionarily stable if, against each distinct mutant strategy, residents earn strictly more than mutants at every sufficiently small positive mutant share. Both face opponents drawn from the same population.

**Problem.** In a finite symmetric two-player game, an evolutionarily stable strategy is a symmetric Nash equilibrium. If a mutant ties against the resident, the resident must earn more against the mutant than the mutant does against itself.

**How the definition helps.** Testing positive mutant shares distinguishes strategies that tie when everyone plays the resident strategy. Our own proof writes the resident’s payoff advantage as an affine function of the mutant share. At zero, the advantage must be nonnegative. If it vanishes there, the slope must be positive. In the article’s example, B ties A against residents playing A, yet B earns more than A against B.

**Wikipedia:** [Evolutionarily stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy). It says: “only B is an ESS”

**Sources:**

- [Maynard Smith and Price, The Logic of Animal Conflict (1973)](https://doi.org/10.1038/246015a0)

### Defining common knowledge by a common partition makes agreement immediate

**Remember:** Same prior, common knowledge of opinions, so the opinions are equal.

*Makes the theorem clean to state or prove.* MSC 91A27 (Games with incomplete information, Bayesian games), 03B42. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** Each agent's knowledge is a partition of a finite set of states: the agent learns which part contains the true state. The meet of the partitions is their finest common coarsening. An event is common knowledge at a state if it contains the part of the meet that holds that state. The agents share a common prior probability.

**Problem.** Aumann's agreement theorem: if the agents' posterior probabilities of an event are common knowledge, then the posteriors are equal. Agents with a common prior cannot agree to disagree.

**How the definition helps.** The partition definition turns the proof into one short computation with conditional probabilities (our own summary). The part of the meet that holds the true state is a union of each agent's own parts. Each agent has the same posterior on all her parts inside it, so that posterior equals the probability conditional on the whole part. That number does not depend on the agent, so the posteriors agree. The set definition replaces the endless hierarchy 'I know that you know that I know' by one partition. The page gives Aumann's example in which the agents know each other's posteriors, 1/2 and 1/3, but these are not common knowledge. What stays hard is how agents reach common knowledge, for example by announcing their posteriors back and forth (our own).

**Wikipedia:** [Aumann's agreement theorem](https://en.wikipedia.org/wiki/Aumann%27s_agreement_theorem). It says: “The theorem was proved by Robert Aumann in his 1976 paper "Agreeing to Disagree", which also introduced the formal, set-theoretic definition of common knowledge.”

**Sources:**

- [R. J. Aumann, Agreeing to Disagree, Annals of Statistics 4 (1976), 1236–1239](https://doi.org/10.1214/aos/1176343654)

### Harsanyi's types turn incomplete information into a game with a chance move

**Remember:** Let Nature deal the private information, and ordinary game theory applies.

*Makes the theorem clean to state or prove.* MSC 91A27 (Games with incomplete information, Bayesian games), 91A18. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** In a Bayesian game each player has a type, which is private information such as the player's own payoffs. The types are drawn by a chance move, 'Nature', from a common prior distribution that all players know. A strategy maps each type to an action. In a Bayesian Nash equilibrium, each type maximizes its expected payoff, given its beliefs about the other players' types.

**Problem.** Every finite Bayesian game has a Bayesian Nash equilibrium in mixed strategies. Without types, players would have to reason about beliefs about beliefs without end, and it is unclear what an equilibrium would be.

**How the definition helps.** With a common prior, the game becomes an ordinary game with imperfect information in which Nature moves first. So Nash's existence theorem applies, for example by treating each type as a separate player (our own). The page says that Bayesian games avoid the endless chain 'I expect that you expect that I expect'. They do this by putting probability weights on all outcomes at once. Harsanyi introduced the model in three papers in 1967 and 1968. What stays hard is the common prior itself, which is a strong assumption; without it one needs universal type spaces (our own).

**Wikipedia:** [Bayesian game](https://en.wikipedia.org/wiki/Bayesian_game). It says: “both players are aware of this probability (common prior assumption, which can be converted into a complete-information game with imperfect information).”

**Sources:**

- [J. C. Harsanyi, Games with Incomplete Information Played by 'Bayesian' Players, I–III. Part I. The Basic Model, Management Science 14 (1967), 159–182](https://doi.org/10.1287/mnsc.14.3.159)

### Quasilinear utility lets VCG payments make truth-telling a dominant strategy

**Remember:** Pay each agent everyone else's value, and her interest becomes society's.

*True by definition.* MSC 91B03 (Mechanism design theory), 91B16, 91B26. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A utility is quasilinear if it is the value of the outcome plus money. So an agent with value vᵢ(x) for outcome x and payment pᵢ has utility vᵢ(x) + pᵢ. The VCG mechanism picks the outcome with the largest total reported value. It pays each agent the total reported value of the other agents, minus a term that does not depend on her own report.

**Problem.** In every VCG mechanism, reporting one's true values is a dominant strategy, best whatever the others report. The Vickrey second-price auction is a special case.

**How the definition helps.** With quasilinear utility, an agent's payoff under VCG equals the total welfare of society minus a term she cannot affect. The mechanism maximizes the reported total welfare, so a true report gives her the maximum. Without quasilinearity, money and value do not simply add, and this alignment can fail (our own). What stays hard is money: VCG payments need not balance (our own). In bilateral trade, the Myerson–Satterthwaite theorem shows that no mechanism is efficient, truthful, voluntary and budget-balanced at once (our own link).

**Wikipedia:** [Vickrey–Clarke–Groves mechanism](https://en.wikipedia.org/wiki/Vickrey%E2%80%93Clarke%E2%80%93Groves_mechanism), [Quasilinear utility](https://en.wikipedia.org/wiki/Quasilinear_utility). It says: “The agent is paid the total value of the other agents; hence, together with its own value, the total welfare of the agent is exactly equal to the total welfare of society.”

**Sources:**

- [W. Vickrey, Counterspeculation, Auctions, and Competitive Sealed Tenders, Journal of Finance 16 (1961), 8–37](https://doi.org/10.1111/j.1540-6261.1961.tb02789.x)
- [T. Groves, Incentives in Teams, Econometrica 41 (1973), 617–631](https://doi.org/10.2307/1914085)
- [E. H. Clarke, Multipart pricing of public goods, Public Choice 11 (1971), 17–33](https://doi.org/10.1007/BF01726210)

### The revelation principle lets designers study only truthful mechanisms

**Remember:** Any equilibrium outcome can be reached by asking people for the truth.

*Makes the theorem clean to state or prove.* MSC 91B03 (Mechanism design theory), 91B14. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A mechanism is a game that a designer sets up to pick an outcome from the players' actions. A direct mechanism is one in which each player's only action is to report a preference. A direct mechanism is incentive-compatible if telling the truth is an equilibrium.

**Problem.** The problem is to find which social choice functions some mechanism can implement. A social choice function picks an outcome for each list of the players' preferences.

**How the definition helps.** The revelation principle replaces the huge space of all mechanisms with a small one. Suppose some mechanism implements a social choice function in dominant strategies, or in Bayesian Nash equilibrium. Then the principle says that a direct incentive-compatible mechanism also implements it. That direct mechanism takes the players' reports and plays their equilibrium strategies for them. So a designer can study only truthful direct mechanisms. An impossibility result for those is an impossibility result for all mechanisms. What remains hard (our own remark): the truthful mechanism may also have other, untruthful equilibria.

**Wikipedia:** [Revelation principle](https://en.wikipedia.org/wiki/Revelation_principle). It says: “By narrowing the area needed to be searched, the problem of finding a mechanism becomes much easier.”

**Sources:**

- [Gibbard, A. (1973). Manipulation of voting schemes: a general result. Econometrica 41(4), 587–601.](https://doi.org/10.2307/1914083)
- [Myerson, R. B. (1979). Incentive compatibility and the bargaining problem. Econometrica 47(1), 61–73.](https://doi.org/10.2307/1912346)

### Consumers who always want a bit more make equilibria efficient

**Remember:** Near every bundle of goods there is a slightly better one.

*Makes the theorem clean to state or prove.* MSC 91B08 (Individual preferences), 91B15, 91B50. arXiv econ.TH. Level 3: graduate.

**Definition.** A bundle is a list of amounts of each good. A preference is locally nonsatiated if, for every bundle and every distance ε &gt; 0, there is a strictly preferred bundle within distance ε. In words, near every bundle there is a slightly better one.

**Problem.** The first fundamental theorem of welfare economics says that every competitive equilibrium allocation is Pareto optimal. (In a competitive equilibrium, each consumer buys the best bundle they can afford at the given prices. Pareto optimal means that no feasible allocation makes someone better off and nobody worse off.)

**How the definition helps.** Local nonsatiation gives a simple price inequality for each consumer, and the theorem follows by adding these up. The inequality says that any bundle at least as good as the chosen one costs at least as much. Summing over consumers shows at once that no feasible allocation can make everyone weakly better off and someone strictly better off. So the proof takes a few lines and needs no convexity or differentiability. The condition rules out consumers with a satiation point (a bundle they like best of all), who may leave money unspent inside the budget set. The article says that Arrow and Debreu (1951) replaced the older tangency arguments with this style of proof, which also covers equilibria on the boundary.

**Wikipedia:** [Fundamental theorems of welfare economics](https://en.wikipedia.org/wiki/Fundamental_theorems_of_welfare_economics). It says: “If preferences are locally nonsatiated, and if (X\*, Y\*, p) is a price equilibrium with transfers, then the allocation (X\*, Y\*) is Pareto optimal.”

**Sources:**

- [Debreu, G. (1951). The coefficient of resource utilization. Econometrica 19(3), 273–292.](https://doi.org/10.2307/1906814)

### The Arrow–Pratt ratio keeps risk aversion independent of utility units

**Remember:** Divide curvature by slope, and the units of utility cancel.

*True by definition.* MSC 91B16 (Utility theory), 91B06. arXiv econ.TH, q-fin.RM. Level 3: graduate.

**Definition.** Let u be a twice differentiable utility of wealth with positive derivative. The Arrow–Pratt coefficient of absolute risk aversion at wealth c is −u″(c)/u′(c). Using curvature alone, u″(c), would make the measure depend on the scale of utility.

**Problem.** Replacing u by αu + β with α &gt; 0 preserves expected-utility preferences and leaves the Arrow–Pratt coefficient unchanged.

**How the definition helps.** The ratio makes invariance immediate because α multiplies both derivatives and cancels, while differentiation removes β. Bare curvature instead changes by a factor of α. The work in Pratt’s comparison theorem is to connect the coefficient to choices over risk. It shows that a decision maker with a larger coefficient at every wealth level will pay at least as much to avoid the same risk.

**Wikipedia:** [Risk aversion](https://en.wikipedia.org/wiki/Risk_aversion). It says: “However, since expected utility functions are not uniquely defined (are defined only up to affine transformations), a measure that stays constant with respect to these transformations is needed rather than just the second derivative of u(c).”

**Sources:**

- [John W. Pratt, Risk Aversion in the Small and in the Large, Econometrica 32 (1964) 122–136](https://doi.org/10.2307/1913738)

### Virtual valuations turn auction revenue into a pointwise objective

**Remember:** Use virtual values to choose who should win the item.

*Makes the theorem clean to state or prove.* MSC 91B26 (Auctions, bargaining, bidding and selling, and other market models), 91B03. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** Each bidder has an independent private value v from a bounded interval starting at zero. For each bidder, F(v) is the chance their value is at most v, and f(v) is the positive probability density. The bidder’s virtual valuation is v − (1 − F(v))/f(v). Virtual surplus is the winner’s virtual valuation, or zero if nobody wins.

**Problem.** Suppose each bidder’s virtual valuation is nondecreasing in their value. Allocate the single item to a bidder whose virtual valuation is highest and positive, and break ties in a fixed order. With threshold payments, this rule maximizes expected revenue among truthful auctions that give bidders nonnegative expected utility at value zero.

**How the definition helps.** Virtual valuations make the choice pointwise once Myerson’s identity rewrites expected payments as expected virtual surplus. The highest positive virtual valuation then gives the best feasible choice at each list of bids. With fixed tie-breaking, raising a bid cannot turn a win into a loss, so threshold payments make truthful bidding optimal. The real work is the revenue identity and the payment rule for truthful auctions. Without the identity, the seller faces an optimization over allocation and payment rules constrained by truthful bidding.

**Wikipedia:** [Virtual valuation](https://en.wikipedia.org/wiki/Virtual_valuation). It says: “The expected profit of any truthful mechanism is equal to its expected virtual surplus.”

**Sources:**

- [Roger B. Myerson, Optimal Auction Design, Mathematics of Operations Research 6 (1981) 58–73](https://doi.org/10.1287/moor.6.1.58)

### Equal budgets rule out envy at competitive equilibrium

**Remember:** With the same budget, you could afford anything another buyer chose.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91B50, 91B15. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** In a competitive equilibrium, each buyer chooses a best affordable bundle, and total demand equals total supply. With equal incomes, all buyers face the same prices and have the same budget. An allocation is envy-free if no buyer strictly prefers another buyer’s bundle.

**Problem.** Every competitive equilibrium with equal incomes is envy-free.

**How the definition helps.** Equal budgets make every other buyer’s bundle affordable, so choosing a best bundle rules out envy. Our own example with unequal budgets uses one divisible good at price one. With three units for sale, two buyers with budgets one and two buy one and two units respectively. If both prefer more of the good, the first buyer envies the second. To get an equal-budget equilibrium, start with equal shares of divisible goods and use a competitive equilibrium existence theorem under its usual assumptions. The first welfare theorem supplies efficiency separately, when buyers can always find a better bundle arbitrarily close by.

**Wikipedia:** [Competitive equilibrium](https://en.wikipedia.org/wiki/Competitive_equilibrium), [Efficient envy-free division](https://en.wikipedia.org/wiki/Efficient_envy-free_division). It says: “Furthermore, by Varian's theorems, a CE allocation in which all agents have the same income is also envy-free.”

**Sources:**

- [Hal R. Varian, Equity, envy, and efficiency, Journal of Economic Theory 9 (1974) 63–91](https://doi.org/10.1016/0022-0531(74)90075-1)

### Support functions make profit convex in prices

**Remember:** Linear revenue at each production plan gives convex profit across prices.

*True by definition. Confidence: medium.* MSC 91B38 (Production theory, theory of the firm), 52A41. arXiv econ.TH, math.OC. Level 3: graduate.

**Definition.** A production set Y lists the firm’s feasible net output vectors. At prices p the profit π(p) is the supremum of p·y over y in Y. This is the support function of Y, meaning the supremum of the dot products with p, with no need for a maximizing point.

**Problem.** The profit function is convex and positively homogeneous in prices. If profit-maximizing plans y(p) and y(q) exist, then (p − q)·(y(p) − y(q)) ≥ 0.

**How the definition helps.** The support-function formula makes profit convex because it takes the supremum of linear functions of price. Scaling prices by a positive constant scales that supremum by the same amount. Our own comparison is with defining profit through a chosen supply plan, which requires a maximizer and hides both facts. Our own check of the supply inequality compares the two chosen plans at each price and adds the inequalities. The separate work in Hotelling’s lemma is to recover supply from derivatives of profit where those derivatives exist.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function), [Hotelling's lemma](https://en.wikipedia.org/wiki/Hotelling%27s_lemma). It says: “It follows directly from its definition that the support function is positive homogeneous”

**Sources:** none listed. No primary source with a working link was found.

### Budget sets show why indirect utility is homogeneous and quasiconvex

**Remember:** Same budget set, same best utility.

*True by definition. Confidence: medium.* MSC 91B42 (Consumer behavior, demand theory), 91B16. arXiv econ.TH. Level 3: graduate.

**Definition.** Indirect utility v(p, w) is the supremum of utility over bundles x with p·x ≤ w. The alternative formula evaluates utility at a demand bundle, one that maximizes utility among affordable bundles.

**Problem.** Scaling prices and income together by a positive number leaves indirect utility unchanged. Indirect utility is quasiconvex in prices and income, so its value at a mixture is at most the larger endpoint value.

**How the definition helps.** The budget-set definition makes scale invariance immediate because joint rescaling leaves every affordability inequality unchanged. Our own quasiconvexity proof uses the fact that a bundle affordable at a mixture must be affordable at one endpoint. Otherwise its cost exceeds income at both endpoints, and therefore at the mixture. The demand formula hides this argument and requires an optimizer to exist. Separate work goes into Roy’s identity, which under differentiability and a nonzero income derivative recovers demand from derivatives of indirect utility.

**Wikipedia:** [Indirect utility function](https://en.wikipedia.org/wiki/Indirect_utility_function). It says: “if prices and income are all multiplied by a given constant the same bundle of consumption represents a maximum, so optimal utility does not change”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-equilibrium makes the second welfare theorem hold without extra conditions

**Remember:** A quasi-equilibrium is what the separating hyperplane gives you directly.

*Makes the theorem clean to state or prove.* MSC 91B52 (Special types of economic equilibria), 91B15, 91B50. arXiv econ.TH. Level 3: graduate.

**Definition.** A bundle is a list of amounts of each good. A price quasi-equilibrium with transfers asks only that any bundle a consumer strictly prefers costs at least the consumer's wealth. A price equilibrium asks that such a bundle cost strictly more than the wealth.

**Problem.** The second fundamental theorem of welfare economics. Assume convex production sets and preferences that are convex and locally nonsatiated (near any bundle there is a bundle the consumer prefers). Then a market equilibrium after lump-sum transfers can reach every Pareto-efficient allocation (an allocation where no consumer can gain unless another consumer loses).

**How the definition helps.** The definition separates the geometric part of the theorem from the boundary cases. The proof uses a hyperplane to separate two convex sets of total bundles. The first set holds the sums of bundles that each consumer strictly prefers. The second set holds the bundles that production and endowments make feasible. The hyperplane gives the prices, and with only convexity and local nonsatiation these prices support the allocation in the weaker quasi-equilibrium sense. So the theorem stated for quasi-equilibria needs no further conditions. A genuine price equilibrium needs extra conditions, such as convex consumption sets, continuous preferences and a cheaper bundle for each consumer, for example strictly positive wealth.

**Wikipedia:** [Fundamental theorems of welfare economics](https://en.wikipedia.org/wiki/Fundamental_theorems_of_welfare_economics). It says: “any desired Pareto-efficient allocation can be supported as a price quasi-equilibrium with transfers.”

**Sources:**

- [G. Debreu, Valuation equilibrium and Pareto optimum, Proceedings of the National Academy of Sciences 40 (1954) 588–592](https://doi.org/10.1073/pnas.40.7.588)

### Benchmarks maximize expected log wealth

**Remember:** If relative wealth cannot grow on average, neither can its expected logarithm.

*True by definition.* MSC 91G10 (Portfolio theory), 91G15. arXiv q-fin.PM. Level 3: graduate.

**Definition.** A numeraire portfolio is an attainable portfolio with strictly positive wealth. Divide any allowed wealth process by its wealth. At any future date, the conditional expected ratio given current information is at most the current ratio.

**Problem.** Suppose a numeraire portfolio exists and has finite expected terminal log wealth. It maximizes expected terminal log wealth among positive portfolios with equal initial wealth and finite expected logarithms.

**How the definition helps.** Our own proof compares each portfolio directly with the benchmark, whose defining property bounds the expected terminal wealth ratio by one. Concavity of the logarithm bounds the expected log ratio by the log of that expectation. The resulting bound is zero. The market theorem supplies the benchmark’s existence under its trading assumptions.

**Paper or page:** [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3). It says: “the numeraire portfolio is the log-optimal portfolio.”

**Sources:** none listed. No primary source with a working link was found.

### Convex order tests whether two price laws admit a martingale

**Remember:** Under a martingale, convex payoff averages cannot fall over time.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91G15 (Financial markets), 91G20. arXiv q-fin.MF. Level 3: graduate.

**Definition.** One price distribution lies below another in convex order when every convex function integrable under both has a smaller or equal mean under the first. A martingale is a price process whose expected next price, given the current price, equals the current price.

**Problem.** Two real price distributions with finite first moments can occur successively in a martingale exactly when the first lies below the second in convex order.

**How the definition helps.** Convex order collects all the inequalities that conditional Jensen’s inequality gives for a martingale. In our own example, equal means alone permit a random first price followed by a constant price. Absolute distance from that constant violates convex order unless the first price is already constant. Strassen’s theorem proves the difficult converse by constructing a joint distribution with the required conditional mean.

**Paper or page:** [Convex Order and Arbitrage](https://arxiv.org/abs/2510.01599v1). It says: “The following are equivalent: The market is free of model-independent arbitrage. $\\mathcal{M}(\\mu ,\\nu ) \\neq \\emptyset $. $\\mu \\preceq \_c \\nu $.”

**Sources:**

- [Convex Order and Arbitrage](https://arxiv.org/abs/2510.01599v1)

### Convex acceptance makes capital convex

**Remember:** Mix acceptable positions and mix their cash cushions in the same proportions.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** An acceptance set lists safe financial positions and stays acceptable when a payoff increases. The capital required for a position is the infimum of the cash deposits that make it safe. A negative deposit means a withdrawal.

**Problem.** Assume the capital requirement is finite for every position. A convex acceptance set gives a convex capital requirement.

**How the definition helps.** Our own proof mixes the deposits in the same proportions as the positions. Convexity keeps the resulting position safe. Take deposits arbitrarily close to their infima to get the convexity inequality for capital. Starting from a capital formula would require checking that inequality for every pair of positions. Here the work lies in checking which mixtures the safety rule accepts.

**Paper or page:** [A note on the induction of comonotonic additive risk measures from acceptance sets](https://arxiv.org/abs/2307.04647v2). It says: “If A is convex, then ρₐ is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Worst-case averages make expected shortfall subadditive

**Remember:** The worst average of a sum cannot exceed the sum of the worst averages.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** Fix a tail fraction α strictly between zero and one. Expected shortfall averages the worst α fraction of losses, using just enough of any tied losses. Equivalently, maximize expected loss after reweighting outcomes by nonnegative factors with mean one and upper bound 1/α. Value at risk uses a single percentile of the loss distribution.

**Problem.** For two integrable losses, expected shortfall of their sum is at most the sum of their expected shortfalls.

**How the definition helps.** Our own proof uses the same weights for both losses, so their weighted averages add. Each average is at most its separate maximum. The representation theorem shows that this maximum equals the tail average. In our own example, two independent losses each equal one with probability 4% and zero otherwise. Each has a 95th percentile of zero, but their sum has a 95th percentile of one.

**Wikipedia:** [Value at risk](https://en.wikipedia.org/wiki/Value_at_risk). It says: “VaR of a combined portfolio can be larger than the sum of the VaRs of its components.”

**Paper or page:** [An elementary proof of the dual representation of Expected Shortfall](https://arxiv.org/abs/2306.14506v1). It says: “In particular, ESα is subadditive, i.e., for all X,Y ∈ L¹, ESα(X + Y) ≤ ESα(X) + ESα(Y).”

**Sources:**

- [Herdegen and Munari, An elementary proof of the dual representation of Expected Shortfall (2023)](https://doi.org/10.1007/s11579-023-00346-8)

### An extra payoff row makes Dantzig's game always decode a linear program

**Remember:** Add one row so optimal play cannot hide at zero scale.

*Rules out counterexamples.* MSC 91A05 (2-person games), 90C46, 90C05. arXiv econ.TH, math.OC. Level 4: research.

**Definition.** Dantzig turns a linear program and its dual into a zero-sum game with a skew-symmetric payoff matrix. An optimal strategy gives solutions of both programs after dividing by its weight t on one special column. The argument fails when an optimal strategy has t = 0. Von Stengel adds one row with entries 1, …, 1, −M for a large number M.

**Problem.** Take M large enough. Then every max-min strategy of the enlarged game either gives optimal solutions of both programs or shows that one of them is infeasible.

**How the definition helps.** The extra row lets the maximizing player punish weight on the program variables that comes without enough weight t. So optimal play cannot sit at t = 0 when both programs are feasible. Our own example: if A, b and c are all zero, Dantzig's game is all zeros. Then every strategy is optimal, including those with t = 0, which give no solution. Theorem 7 first bounds the size of some optimal solutions to choose M. The rest of its proof checks that each max-min strategy decodes correctly.

**Paper or page:** [Zero-Sum Games and Linear Programming Duality](https://arxiv.org/abs/2205.11196v6). It says: “We also extend Dantzig's game so that any max-min strategy gives either an optimal LP solution or shows that none exists.”

**Sources:**

- [Bernhard von Stengel, Zero-Sum Games and Linear Programming Duality, arXiv:2205.11196v6 (2023); Mathematics of Operations Research 49:2 (2024), 1091-1108](https://arxiv.org/abs/2205.11196v6)

### Minimax holds in all subgames exactly when no infinite triangular subgame exists

**Remember:** Without an infinite larger-number pattern, every subgame has a minimax value.

*Rules out counterexamples.* MSC 91A05 (2-person games), 68Q32. arXiv cs.LG, cs.GT. Level 4: research.

**Definition.** A binary zero-sum game has payoffs 0 or 1. A subgame restricts both players to subsets of their actions. An infinite triangular subgame has rows a₁, a₂, … and columns b₁, b₂, … whose payoff depends only on whether i &lt; j. This is the game in which the larger number wins, with payoffs possibly swapped.

**Problem.** Take a binary game whose payoff functions have finite Vapnik–Chervonenkis dimension. Every subgame then has equal upper and lower values exactly when there is no infinite triangular subgame. This stays true even with mixed strategies of finite support.

**How the definition helps.** The definition names the one pattern that breaks minimax, so the theorem can say it is the only obstruction. In the larger-number game, each player can beat any fixed mixed strategy of the other with probability close to one. So its upper value is 1 and its lower value is 0 (Proposition 10 of the paper). The hard direction is the converse, which must handle infinitely many actions. That direction uses the finite dimension.

**Paper or page:** [Online Learning with Simple Predictors and a Combinatorial Characterization of Minimax in 0/1 Games](https://arxiv.org/abs/2102.01646v1). It says: “for all subgames (𝒜′, ℬ′, val) if and only if it has no infinite triangular subgame.”

**Sources:**

- [Steve Hanneke, Roi Livni, Shay Moran, Online Learning with Simple Predictors and a Combinatorial Characterization of Minimax in 0/1 Games, arXiv:2102.01646v1 (2021)](https://arxiv.org/abs/2102.01646v1)

### Equilibria are exactly the feasible profiles where the Nikaido–Isoda merit function vanishes

**Remember:** At equilibrium, no player saves anything by switching alone.

*True by definition.* MSC 91A10 (Noncooperative games), 90C33, 90C11. arXiv econ.TH, math.OC. Level 4: research.

**Definition.** In a generalized Nash game, each player's allowed strategies may depend on the other players' choices. For a profile x, the Nikaido–Isoda function adds up, over all players, the cost each would save by switching alone to a proposed allowed strategy. The merit function V̂(x) is the supremum of this sum over all proposed switches.

**Problem.** A profile x is a generalized Nash equilibrium exactly when x is feasible and V̂(x) = 0.

**How the definition helps.** The merit function packs the definition of equilibrium into one number, so the theorem follows directly. Our own explanation: every player may propose to stay put, so V̂(x) ≥ 0 when x is feasible. Each player's switch is chosen separately, so V̂(x) &gt; 0 exactly when some player has a profitable switch. The paper's harder work uses this function to replace a nonconvex game by convexified games with the same equilibria.

**Paper or page:** [Generalized Nash Equilibrium Problems with Mixed-Integer Variables](https://arxiv.org/abs/2107.13298v3). It says: “We present a new approach to characterize equilibria via a convexification technique using the Nikaido-Isoda function.”

**Sources:**

- [Tobias Harks, Julian Schwarz, Generalized Nash Equilibrium Problems with Mixed-Integer Variables, arXiv:2107.13298v3 (2024); Mathematical Programming (2024)](https://arxiv.org/abs/2107.13298v3)

### Pseudo-Nash equilibria carry over from ideal to real cryptographic protocols

**Remember:** Ignore gains that no efficient test can detect.

*Makes the theorem clean to state or prove.* MSC 91A11 (Equilibrium refinements), 91A68, 94A60. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** In a pseudo-Nash equilibrium, take any deviation by one player that raises her expected utility. No efficient test can tell her new utility apart from her original utility. Efficient here means computable in time polynomial in the security parameter, which sets the key length.

**Problem.** An ideal functionality is a trusted party that performs a cryptographic task perfectly. Let a protocol securely realize it against one corrupted player. Then each computational pseudo-equilibrium of the ideal game stays one when the protocol replaces the functionality.

**How the definition helps.** Secure protocols promise only that real and ideal runs cannot be told apart efficiently, and pseudo-Nash ignores exactly such gains (our own). So the equilibrium notion matches the guarantee that secure protocols give. The paper shows that ordinary Nash and ε-Nash equilibria can fail to transfer from the ideal world to the real world. The proof must still show that each deviation in the real game has an ideal counterpart (our own).

**Paper or page:** [Pseudo-Equilibria, or: How to Stop Worrying About Crypto and Just Analyze the Game](https://arxiv.org/abs/2506.22089v1). It says: “We prove that Nash equilibria in games with ideal, unbreakable cryptography correspond to pseudo-Nash equilibria when ideal cryptography is instantiated with real protocols”

**Sources:**

- [Alexandros Psomas, Athina Terzoglou, Yu Wei, Vassilis Zikas, Pseudo-Equilibria, or: How to Stop Worrying About Crypto and Just Analyze the Game, arXiv:2506.22089v1 (2025)](https://arxiv.org/abs/2506.22089v1)

### Random partitions with the right block odds give the Shapley potential

**Remember:** Average the total worth of the groups in a random split.

*Makes the theorem clean to state or prove.* MSC 91A14 (Potential and congestion games), 91A12, 05A18. arXiv econ.TH. Level 4: research.

**Definition.** A cooperative game gives each coalition of players a worth. Its potential is the number whose drop, when one player leaves, is that player’s Shapley value. A random partition is a probability distribution on the ways to split the players into disjoint groups.

**Problem.** A random partition gives the potential as its expected total group worth exactly under one condition. Each nonempty coalition T must be a group with probability (t − 1)!(n − t)!/n!. Here t and n count the players in T and in the game.

**How the definition helps.** The expected total worth is linear in the worths, so the potential reduces to the chance that each coalition is a group. This form also makes sense for games with externalities, where a coalition’s worth depends on how the other players group. The paper shows that exactly one such extension also generalizes the old potential and gives a value with the null player property. A null player adds nothing to any coalition. Our own example is the cycles of a uniform random permutation. A set of t players is one cycle in exactly (t − 1)!(n − t)! of the n! permutations.

**Paper or page:** [Random partitions, potential, value, and externalities](https://arxiv.org/abs/2402.00394v2). It says: “the expected accumulated worth of a random partition of the players.”

**Sources:**

- [André Casajus, Yukihiko Funaki, Frank Huettner, Random partitions, potential, value, and externalities, arXiv:2402.00394v2 (2024)](https://arxiv.org/abs/2402.00394v2)

### Discounting past and future rewards multiplies game values by 1/(1 − γλ)

**Remember:** Two geometric discounts in a row only rescale the payoff.

*True by definition.* MSC 91A15 (Stochastic games, stochastic differential games), 91A50. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Past discounting with factor γ replaces the reward at step n by the sum of γⁿ⁻ᵏ rₖ over all steps k ≤ n. Future discounting with factor λ then scores a play by the sum of λⁿ times these new rewards.

**Problem.** Take a stochastic game and discount factors γ and λ in \[0, 1). The game with both discounts has 1/(1 − γλ) times the value of the ordinary λ-discounted game.

**How the definition helps.** Both discounts are geometric, so swapping the order of the two sums is a one-line calculation. Our own calculation: the reward rₖ appears at each later step k + m with total weight λᵏ⁺ᵐ γᵐ. Summing over m ≥ 0 gives λᵏ/(1 − γλ). So each play's payoff is 1/(1 − γλ) times its ordinary discounted payoff, for every pair of strategies. The values therefore scale by the same factor. Computing the ordinary discounted value still requires solving that game.

**Paper or page:** [Discounting the Past](https://arxiv.org/abs/2102.06985v2). It says: “the values of these games may be computed via reductions to standard discounted and mean-payoff games.”

**Sources:**

- [Taylor Dohmen, Ashutosh Trivedi, Discounting the Past, arXiv:2102.06985v2 (2021)](https://arxiv.org/abs/2102.06985v2)

### Low swap regret makes play an approximate correlated equilibrium

**Remember:** No regret for any swap is the equilibrium condition, averaged over time.

*True by definition.* MSC 91A26 (Rationality and learning in game theory), 91A10, 68Q32. arXiv cs.GT, cs.LG. Level 4: research.

**Definition.** In a finite game, draw one action for each player from a joint distribution and recommend those actions privately. The distribution is a correlated equilibrium if no player gains in expectation by replacing their recommendation according to a fixed rule. The swap regret of a player is the greatest total gain they could have made using one such rule throughout the recorded rounds. Players compare against the same actions of their opponents in each round.

**Problem.** If each player has swap regret at most R(T) in T rounds, the recorded actions, sampled uniformly, form an R(T)/T-approximate correlated equilibrium.

**How the definition helps.** The rule-based definition turns the equilibrium error into swap regret divided by the number of rounds. Here the error is the greatest expected gain from any one replacement rule. The usual exact test checks one recommended action and one possible replacement at a time. Our own comparison is that the rule-based test groups these changes and therefore directly matches the regret bound. The hard part is finding algorithms that keep swap regret small, which is the paper’s main task.

**Paper or page:** [Fast swap regret minimization and applications to approximate correlated equilibria](https://arxiv.org/abs/2310.19647v2). It says: “If an m-player normal-form game is played repeatedly for T days, and each player incurs no more than R(T) swap regret over the T days, then the empirical distribution of the joint actions by the players is an R(T)/T-correlated equilibrium.”

**Sources:**

- [Binghui Peng and Aviad Rubinstein, Fast swap regret minimization and applications to approximate correlated equilibria, arXiv 2310.19647](https://arxiv.org/abs/2310.19647v2)

### Monotone rationality makes elimination order-preserving, so Tarski's fixed-point theorem applies

**Remember:** A monotone test keeps its order through every stage, even limit stages.

*Makes the theorem clean to state or prove.* MSC 91A26 (Rationality and learning in game theory), 91A44, 03B42. arXiv econ.TH. Level 4: research.

**Definition.** A rationality notion says when a player's strategy is acceptable, given which strategies remain available. It is monotone if a strategy acceptable in a smaller restriction of the game stays acceptable in any larger one. Iterated elimination repeatedly deletes unacceptable strategies and takes intersections at limit stages.

**Problem.** This holds in any strategic game, finite or infinite. Common knowledge of a monotone kind of rationality implies that players choose only strategies that survive the elimination for that notion. The elimination may need transfinitely many steps.

**How the definition helps.** Monotonicity makes the elimination step an order-preserving map on the restrictions of the game, so Tarski's fixed-point theorem applies. Iterating from the whole game then reaches the largest fixed point, possibly after transfinitely many steps. Our own remark is that one argument thus covers every monotone notion and every game. The paper separately explains what follows for customary dominance notions that are not monotone.

**Paper or page:** [The Role of Monotonicity in the Epistemic Analysis of Strategic Games](https://arxiv.org/abs/1010.5595v2). It says: “We establish a general theorem that deals with monotonic rationality notions and arbitrary strategic games and allows to strengthen the above result to arbitrary games, other rationality notions, and transfinite iterations of the elimination process.”

**Sources:**

- [Krzysztof R. Apt, Jonathan A. Zvesper, The Role of Monotonicity in the Epistemic Analysis of Strategic Games, arXiv:1010.5595v2 (2010); Games 2010, 1(4), 381-394; see http://www.mdpi.com/2073-4336/1/4/381/](https://arxiv.org/abs/1010.5595v2)

### Onto belief maps let a type structure represent all conditional belief hierarchies

**Remember:** Give every possible belief a type, and every belief hierarchy appears.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91A27 (Games with incomplete information, Bayesian games), 91A44, 91B44. arXiv econ.TH. Level 4: research.

**Definition.** A type structure models beliefs: each type of a player has a conditional probability system over the basic uncertainty and the other players' types. A conditional probability system gives one belief for each event in a fixed family of conditioning events, linked by Bayes' rule. The structure is complete if every such system is the belief of some type, so the belief maps are onto.

**Problem.** A complete type structure that is compact and has continuous belief maps represents all hierarchies of conditional beliefs; the paper calls this terminal. A complete Souslin structure satisfies a weaker finite version. Souslin is a mild regularity condition on the spaces.

**How the definition helps.** Completeness is a condition on the type structure alone, so one can check it without writing down infinite belief hierarchies. The abstract stresses this point. Our own explanation is that onto belief maps supply a type for every belief needed at each finite level of a hierarchy. Passing from all finite levels to whole hierarchies is where compactness and continuity enter. The result extends Friedenberg's 2010 theorem to conditional beliefs.

**Paper or page:** [Complete Conditional Type Structures (Extended Abstract)](https://arxiv.org/abs/2307.05630v1). It says: “We provide sufficient conditions under which a complete type structure represents all hierarchies of conditional beliefs.”

**Sources:**

- [Nicodemo De Vito, Complete Conditional Type Structures (Extended Abstract), arXiv:2307.05630v1 (2023); EPTCS 379, 2023, pp. 173-184](https://arxiv.org/abs/2307.05630v1)

### Credibility with fixed message frequencies is tested by cyclical monotonicity

**Remember:** Fix how often each message is sent, then check that no swap pays.

*Makes the theorem clean to state or prove.* MSC 91A28 (Signaling and communication in game theory), 91B44. arXiv econ.TH. Level 4: research.

**Definition.** In Bayesian persuasion, a sender commits to a rule that sends messages depending on the state, and a receiver acts on each message. The rule is credible if the sender cannot gain by changing which states send which messages while keeping each message's overall frequency. A distribution over state–action pairs is cyclically monotone if no cyclic swap of actions among pairs in its support raises the sender's total payoff.

**Problem.** In the paper's finite model, a disclosure rule is credible exactly when its distribution over states and actions is cyclically monotone for the sender's payoff.

**How the definition helps.** Keeping message frequencies fixed turns the sender's possible deviations into couplings with fixed marginals, the objects of optimal transport. A coupling is a joint distribution with given marginal distributions. So credibility says the sender's current coupling of states and messages already maximizes her expected payoff. The paper's Lemma 2 is the classical fact that, on finite sets, a coupling is optimal exactly when its support is cyclically monotone. Our own remark is that the hard step is this classical lemma, which the new definition makes available.

**Paper or page:** [Credible Persuasion](https://arxiv.org/abs/2205.03495v1). It says: “We show that the credibility of a disclosure policy is equivalent to a cyclical monotonicity condition on its induced distribution over states and actions.”

**Sources:**

- [Xiao Lin, Ce Liu, Credible Persuasion, arXiv:2205.03495v1 (2022)](https://arxiv.org/abs/2205.03495v1)

### Smoothness gives a short price of anarchy bound

**Remember:** Smoothness packages the inequality needed to bound equilibrium cost.

*True by definition.* MSC 91A68 (Algorithmic game theory and complexity), 91A10. arXiv cs.GT. Level 4: research.

**Definition.** Let C(a) be the sum of all players’ costs at outcome a. A game is (λ, μ)-smooth if the costs from individual switches from a to parts of b total at most λC(b) + μC(a). This must hold for every pair of outcomes a and b, with λ ≥ 0 and μ &lt; 1. Each switch changes only the action of the player whose cost is counted.

**Problem.** The price of anarchy is the worst ratio of equilibrium cost to optimal cost, when the optimal cost is positive. In a smooth game, every pure Nash equilibrium costs at most λ/(1 − μ) times the optimum. A pure Nash equilibrium is an outcome at which no player can cut their cost by switching alone.

**How the definition helps.** Smoothness gives exactly the bound on individual switching costs that the equilibrium proof needs. Choose b to minimize total cost. At equilibrium a, the current total cost cannot exceed the sum of the costs from switching alone toward b. Apply smoothness to this sum and collect the two terms involving C(a). Our own comparison is with bounding the worst equilibrium-to-optimum cost ratio directly for each game. The work now lies in finding and proving a useful smoothness inequality for the class of games.

**Wikipedia:** [Price of anarchy](https://en.wikipedia.org/wiki/Price_of_anarchy). It says: “PoA upper bounds can be obtained if the game is shown to satisfy a so-called smoothness inequality.”

**Sources:**

- [Tim Roughgarden, Intrinsic Robustness of the Price of Anarchy, Journal of the ACM 62 (2015)](https://doi.org/10.1145/2806883)

### Coarser voting groups preserve obvious truthfulness

**Remember:** Larger groups leave fewer voters free to vary across the comparison.

*True by definition.* MSC 91B03 (Mechanism design theory), 91B12. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Compare truthful play with a deviation at the first decision where they differ. Fix the strategies of the other voters in the same group, allowing each possible choice of those strategies. Across the remaining voters’ possible actions, the worst truthful outcome must rank at least as high as the best outcome from deviating.

**Problem.** If a voting procedure passes this test for a partition of the voters, it passes after any groups merge.

**How the definition helps.** Our own explanation holds more strategies fixed after groups merge, so both ranges of possible outcomes shrink. The worst truthful outcome can only improve, and the best outcome from deviating can only worsen. The original procedure still works. The work lies in finding a procedure that passes the stronger test.

**Paper or page:** [Obvious Strategy-proofness with Respect to a Partition](https://arxiv.org/abs/2409.05315v1). It says: “Let f: D → A be OSP with respect to S\* and let S be a coarser partition of S\*. Then, f: D → A is OSP with respect to S.”

**Sources:**

- [Obvious Strategy-proofness with Respect to a Partition](https://arxiv.org/abs/2409.05315v1)

### Paying reports against a better-informed later report makes truthful reporting an equilibrium

**Remember:** Score each report against a better-informed later forecast instead of the unseen truth.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91B03 (Mechanism design theory), 91B26, 91A27. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** In a self-resolving prediction market, agents report probabilities in turn, and the market stops at random after each report. All but the last few agents are paid the negative cross-entropy between their report and a later reference report. The negative cross-entropy is the average logarithm of one's reported probabilities, weighted by the reference probabilities.

**Problem.** If the reference agent sees at least k further predictions, with k chosen as in the paper, truthful reporting is a strict perfect Bayesian equilibrium. In such an equilibrium, no agent gains by deviating, given the others' strategies and beliefs updated by Bayes' rule.

**How the definition helps.** A better-informed later report replaces the unobservable outcome as the target, so truthfulness can be proved without the truth. Our own explanation: the payment is linear in the reference probabilities. Under truthful play, the agent expects the reference report to equal her own current belief. So the payment acts like the logarithmic scoring rule, which rewards honest reports. The paper must still handle how a report changes later reports, which is why the reference agent needs enough extra information.

**Paper or page:** [Self-Resolving Prediction Markets for Unverifiable Outcomes](https://arxiv.org/abs/2306.04305v2). It says: “Our key insight is that a reference agent with access to more information can serve as a reasonable proxy for the ground truth.”

**Sources:**

- [Siddarth Srinivasan, Ezra Karger, Yiling Chen, Self-Resolving Prediction Markets for Unverifiable Outcomes, arXiv:2306.04305v2 (2025)](https://arxiv.org/abs/2306.04305v2)

### A prior must average the player's beliefs to avoid money pumps

**Remember:** A prior must reproduce the beliefs when it averages them.

*Rules out counterexamples. Confidence: medium.* MSC 91B06 (Decision theory), 91B44, 91A27. arXiv econ.TH. Level 4: research.

**Definition.** A single player has an information partition of a finite state space and a belief, a probability distribution, at each state. A distribution p is disintegrable if it is a weighted average of these beliefs. Roughly, p is a money pump if some bet looks acceptable under each of the player's beliefs but has negative expected value under p.

**Problem.** For one player with finitely many states, every distribution is either disintegrable or a money pump, and never both. So disintegrability is the right definition of a prior.

**How the definition helps.** Asking that a prior average the beliefs is what rules out money pumps. Our own explanation: an average of nonnegative expected payoffs cannot be negative. The paper's Lemma 6 shows that disintegrable means lying in the convex hull of the beliefs. Our own reading of the converse is that a separating hyperplane gives a bet that every belief accepts but p rejects.

**Paper or page:** [Three Variations on Money Pump, Common Prior, and Trade](https://arxiv.org/abs/2401.13132v1). It says: “In the single player setting we conclude that a probability distribution is a prior if it is disintegrable, because this definition excludes money pump.”

**Sources:**

- [Ziv Hellman, Miklos Pinter, Three Variations on Money Pump, Common Prior, and Trade, arXiv:2401.13132v1 (2024)](https://arxiv.org/abs/2401.13132v1)

### Positional voting rules with shrinking score gaps cannot be obviously manipulated

**Remember:** Compare only best and worst cases, since other ballots are unknown.

*Makes the theorem clean to state or prove.* MSC 91B12 (Voting theory), 91B14, 91B03. arXiv econ.TH. Level 4: research.

**Definition.** A voter manipulates obviously if some false ballot gives her a better best-case outcome, or a better worst-case outcome, than her true ballot. The best and worst cases range over all possible ballots of the other voters. A positional scoring rule gives each candidate points by its rank on each ballot.

**Problem.** A strict positional scoring rule whose gaps between the scores of consecutive ranks weakly shrink down the ballot cannot be obviously manipulated. By contrast, the Gibbard–Satterthwaite theorem says every unanimous, non-dictatorial rule with at least three candidates can be manipulated.

**How the definition helps.** The definition compares only best and worst cases, so a voter needs no information about other ballots to see the gain. Manipulations that pay only at particular profiles of other ballots are therefore not obvious. This is why the Gibbard–Satterthwaite impossibility does not settle the weaker question. Proving that shrinking score gaps protect both extremes is still the content of Theorem 4.

**Paper or page:** [Obvious Manipulability of Voting Rules](https://arxiv.org/abs/2111.01983v3). It says: “In contrast to the Gibbard-Satterthwaite theorem, many of the rules we examined are not obviously manipulable.”

**Sources:**

- [Haris Aziz, Alexander Lam, Obvious Manipulability of Voting Rules, arXiv:2111.01983v3 (2022)](https://arxiv.org/abs/2111.01983v3)

### Bets on a stake-free proxy identify beliefs despite state-dependent utility

**Remember:** Fix the state, then ask about a proxy that cannot change the stakes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91B16 (Utility theory), 91B06, 91B44. arXiv econ.TH. Level 4: research.

**Definition.** A proxy for the state space S is an auxiliary random variable T used to learn about the state. The agent has no stakes in T given S if, once the state is known, her utility does not depend on the value of T.

**Problem.** If the agent has no stakes in the proxy given the state, her choices determine her beliefs about the states uniquely. This holds even when her utility depends on the state. Ordinary choice data cannot then separate beliefs from utilities.

**How the definition helps.** With no stakes in the proxy, bets on the proxy conditional on each state reveal beliefs without utility getting in the way. The abstract says these conditional beliefs can be elicited with existing tools. Theorem 1 then gives an explicit formula for the belief about each state from the joint distribution of state and proxy. Our own remark is that the work moves to finding a usable proxy. The paper shows that one can almost always be found.

**Paper or page:** [Belief identification with state-dependent utilities](https://arxiv.org/abs/2203.10505v3). It says: “The crucial property is that the agent does not have any stakes in the proxy conditional on the realization of the original state space.”

**Sources:**

- [Elias Tsakas, Belief identification with state-dependent utilities, arXiv:2203.10505v3 (2022)](https://arxiv.org/abs/2203.10505v3)

### Stable market segmentations are the efficient saturated ones, so they always exist

**Remember:** Fill the cheap segments until one more buyer would raise their price.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91B24 (Microeconomic theory (price theory and economic markets)), 91B54. arXiv econ.TH. Level 4: research.

**Definition.** A single seller faces consumers split into segments and charges each segment its profit-maximizing price. A segmentation is saturated if no consumers can move from a high-price segment to a low-price segment without the seller raising the low price. A segmentation is stable if, against any alternative segmentation, some original segment of consumers prefers the original. The canonical segmentation merges segments with the same price.

**Problem.** A segmentation is stable exactly when its canonical segmentation is efficient and saturated. Efficient means that total surplus is as large as possible. The paper uses this to construct stable segmentations, so they always exist.

**How the definition helps.** Saturation replaces a comparison with every rival segmentation by a test of moving consumers between two price groups. That local test is what lets the paper construct a stable segmentation and so prove existence. Our own remark is that proving the local test equivalent to stability is the main work of Theorem 1.

**Paper or page:** [A Theory of Stable Market Segmentations](https://arxiv.org/abs/2210.13194v1). It says: “Our main result characterizes stable segmentations as efficient and saturated.”

**Sources:**

- [Nima Haghpanah, Ron Siegel, A Theory of Stable Market Segmentations, arXiv:2210.13194v1 (2022)](https://arxiv.org/abs/2210.13194v1)

### An allocation that is envy-free up to one item always exists

**Remember:** EF1 forgives the envy that one item can cause.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91A68. arXiv cs.GT, econ.TH. Level 4: research.

**Definition.** An allocation gives each item, which cannot be divided, to one agent. The allocation is EF1 (envy-free up to one item) if the following holds for every two agents A and B. If we remove at most one item from the bundle of B, then A does not envy B.

**Problem.** In fair division of indivisible goods, an envy-free allocation of all items need not exist.

**How the definition helps.** EF1 is weakened just enough to remove the simplest counterexample. With one item and two agents, the agent who does not get the item envies the other. So no allocation of all items is exactly envy-free. But an EF1 allocation always exists. For additive utilities, round-robin picking finds one: the agents take turns to choose an item. For monotone utilities, the envy-graph procedure finds one. What stays hard: nobody knows if the stronger EFX notion always exists, where removing any one item removes the envy.

**Wikipedia:** [Envy-free item allocation](https://en.wikipedia.org/wiki/Envy-free_item_allocation). It says: “An EF1 allocation always exists and can be found efficiently by various procedures”

**Sources:**

- [Lipton, R. J.; Markakis, E.; Mossel, E.; Saberi, A. (2004). On approximately fair allocations of indivisible goods. Proc. 5th ACM Conference on Electronic Commerce, 125–131.](https://doi.org/10.1145/988772.988792)
- [Budish, E. (2011). The combinatorial assignment problem: approximate competitive equilibrium from equal incomes. Journal of Political Economy 119(6), 1061–1103.](https://doi.org/10.1086/664613)

### Judging envy in expectation makes envy-free efficient lotteries always exist

**Remember:** Fairness before the draw can hold when fairness after the draw cannot.

*Makes the theorem clean to state or prove.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91B15. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** An allocation lottery is a probability distribution over the allowed allocations of indivisible items. It is ex-ante envy-free if each agent's expected value for her own bundle is at least her expected value for any other agent's bundle.

**Problem.** In the paper's general fair-division setting, some lottery is both ex-ante envy-free and Pareto optimal (Cole and Tao, 2021). Pareto optimal means no other lottery makes some agent better off and no agent worse off. Without randomness, envy-free allocations need not exist.

**How the definition helps.** Judging envy in expectation lets an existence theorem hold where every deterministic allocation causes envy. Our own example: two people both want one indivisible item. Whoever does not get it envies the other, but a fair coin gives both the same expected value. The general existence theorem is still a real result, due to Cole and Tao. This paper shows that finding such a lottery lies in PPAD, a class of search problems solved by fixed-point style arguments. It also gives a polynomial-time algorithm when the number of agents is fixed.

**Paper or page:** [On the complexity of Pareto-optimal and envy-free lotteries](https://arxiv.org/abs/2307.12605v1). It says: “Cole and Tao (2021) have proved that an ex-ante envy-free and Pareto-optimal allocation lottery is always guaranteed to exist.”

**Sources:**

- [Ioannis Caragiannis, Kristoffer Arnsfelt Hansen, Nidhi Rathi, On the complexity of Pareto-optimal and envy-free lotteries, arXiv:2307.12605v1 (2023)](https://arxiv.org/abs/2307.12605v1)

### One allocation gives every agent half of any feasible fair share

**Remember:** Half of every feasible share is achievable for everyone at once.

*Makes the theorem clean to state or prove.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91A68. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Agents divide indivisible goods and have entitlements, which are weights that sum to 1. A share rule maps an agent’s valuation and entitlement to a minimum value she should get. A share rule is feasible if every instance has an allocation that gives every agent at least her share.

**Problem.** Agents value bundles additively, and each agent may pick a different feasible share rule. Some allocation gives every agent at least half her chosen share. The factor one half cannot be improved in general.

**How the definition helps.** Restricting fairness notions to share rules lets one theorem quantify over all feasible notions at once. A share depends only on the agent’s own valuation and entitlement, so one allocation can serve all choices together (our own). Each rule is feasible when all agents use it, but a mix of rules need not be feasible (our own). The proof must still build the common allocation and give instances where no larger factor works.

**Paper or page:** [Share-Based Fairness for Arbitrary Entitlements](https://arxiv.org/abs/2405.14575v1). It says: “there is an allocation that gives every agent at least half her share value, regardless of which feasible share-based fairness notion the agent wishes to use.”

**Sources:**

- [Moshe Babaioff, Uriel Feige, Share-Based Fairness for Arbitrary Entitlements, arXiv:2405.14575v1 (2024)](https://arxiv.org/abs/2405.14575v1)

### Posterior messages preserve feasible beliefs

**Remember:** Tell each player the probability their old signal implied.

*True by definition.* MSC 91B44 (Economics of information), 91A27. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Start with a common distribution over possible winners, called the prior. Each player receives a private signal. The posterior is the player’s probability of winning after seeing that signal. A direct signal reports that probability itself.

**Problem.** Any joint distribution of posterior winning probabilities obtainable from private signals is also obtainable from direct signals under the same prior.

**How the definition helps.** Our own proof replaces each arbitrary signal by the winning probability it implies, preserving the whole vector of reported probabilities. Averaging the old conditional probability given its reported value returns that same value. Each report is therefore still the receiver’s winning probability. The work lies in deciding which joint distributions any signals could generate.

**Paper or page:** [A Belief-Based Characterization of Reduced-Form Auctions](https://arxiv.org/abs/2307.04070v1). It says: “then there exists a direct information structure I such that ν is p₀-feasible for I.”

**Sources:**

- [A Belief-Based Characterization of Reduced-Form Auctions](https://arxiv.org/abs/2307.04070v1)

### Saturated agent spaces make fractional and ordinary coalitions block the same allocations

**Remember:** On a saturated space, some whole coalition matches every fractional coalition's totals.

*Makes the theorem clean to state or prove.* MSC 91B50 (General equilibrium theory), 91A12, 28B05. arXiv econ.TH. Level 4: research.

**Definition.** A finite measure space of agents is saturated if, on every subset of positive measure, the space of integrable functions has no countable dense subset. The core is the set of allocations that no coalition of agents can improve on by trading among themselves. The fuzzy core also rules out improvements by fuzzy coalitions, where each agent takes part with a fraction between 0 and 1.

**Problem.** If the measure space of agents is saturated, the core equals the fuzzy core, with commodities in any Banach space and minimal assumptions on preferences.

**How the definition helps.** Saturation is exactly what makes Lyapunov's convexity theorem hold for vector measures with values in infinite-dimensional spaces. That theorem says each fractional participation profile has the same vector integral as some ordinary coalition. Our own summary is that a fuzzy coalition's blocking trade can therefore be copied by an ordinary coalition. The paper quotes Khan and Sagara's converse: for infinite-dimensional values, this convexity for all measures forces saturation. Without saturation, earlier results needed extra structure on commodities and preferences.

**Paper or page:** [Fuzzy Core Equivalence in Large Economies: A Role for the Infinite-Dimensional Lyapunov Theorem](https://arxiv.org/abs/2112.15539v1). It says: “Due to the exact version of the Lyapunov convexity theorem in Banach spaces, we clarify that the additional structure of commodity spaces and preferences is unnecessary whenever the measure space of agents is "saturated".”

**Sources:**

- [M. Ali Khan, Nobusumi Sagara, Fuzzy Core Equivalence in Large Economies: A Role for the Infinite-Dimensional Lyapunov Theorem, arXiv:2112.15539v1 (2021)](https://arxiv.org/abs/2112.15539v1)

### One blocking rule for pairs and coalitions equates strong core and stability

**Remember:** Allow ties in both tests, but always require someone to gain.

*Makes the theorem clean to state or prove.* MSC 91B68 (Matching models), 91A12. arXiv econ.TH. Level 4: research.

**Definition.** A group blocks a matching in the strong sense if it can rematch among itself so that every member is at least as well off. At least one member must also be strictly better off. A matching is strongly stable if every match is acceptable and no worker–firm pair blocks it in this sense. The strong core is the set of matchings that no coalition blocks in this sense.

**Problem.** In many-to-one matching with responsive preferences that may contain ties, the strong core equals the set of strongly stable matchings. Responsive means a firm compares two groups that differ in one worker by comparing those two workers.

**How the definition helps.** Applying the same weak-improvement, strict-gain test to pairs and to coalitions lets the two sets be compared directly. Our own explanation: a pair is a coalition, so every matching in the strong core is strongly stable. The reverse inclusion needs a blocking pair to be found inside any blocking coalition. For the ordinary notions, the abstract states only that the core contains the stable set.

**Paper or page:** [Core and stability notions in many-to-one matching markets with indifferences](https://arxiv.org/abs/2203.16293v1). It says: “the strong core coincides with the strongly stable set”

**Sources:**

- [Agustín G. Bonifacio, Noelia Juarez, Pablo Neme, Jorge Oviedo, Core and stability notions in many-to-one matching markets with indifferences, arXiv:2203.16293v1 (2022)](https://arxiv.org/abs/2203.16293v1)

### Quasi-stability permits repair by iteration

**Remember:** Allow blocks from unemployed workers while the matching is being repaired.

*Makes the theorem clean to state or prove.* MSC 91B68 (Matching models). arXiv econ.TH. Level 4: research.

**Definition.** A worker and firm block a matching if the worker prefers the firm and the firm would choose the worker from its enlarged staff. A stable matching has no such pair, and each participant accepts their assignment. A worker-quasi-stable matching requires acceptable assignments but permits blocking pairs involving unemployed workers only.

**Problem.** Consider finitely many workers and firms, strict preferences, and substitutable firm choices. Substitutability means a firm still selects a chosen worker from any smaller pool containing that worker. The paper’s repair round preserves worker-quasi-stability and leaves a matching unchanged exactly when it is stable.

**How the definition helps.** Our own explanation uses the restriction on blocking pairs to identify all workers who can start a repair. Each unemployed worker with a blocking firm applies to their favorite such firm. Firms choose from their applicants and current workers. The hard step proves that no employed worker can block after the round. The paper shows that the rounds improve the matching in the firms’ ordering until it becomes stable.

**Paper or page:** [The lattice of worker-quasi-stable matchings](https://arxiv.org/abs/2103.16330v4). It says: “T(μ) = μ if and only if μ is stable.”

**Sources:**

- [Bonifacio, Guiñazú, Juarez, Neme and Oviedo, The lattice of worker-quasi-stable matchings (2022)](https://doi.org/10.1016/j.geb.2022.06.004)

### Vote-margin edge weights turn popularity into one maximum-weight matching test

**Remember:** A rival matching's total weight is its vote margin against M.

*True by definition.* MSC 91B68 (Matching models), 05C70, 90C27. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** In a bipartite graph where each vertex ranks its neighbours, a matching M is popular if no other matching beats M in a majority vote. To test M, a vertex scores a proposed partner 1, 0 or −1. The score is 1 if it prefers that partner to its partner in M, 0 if it is indifferent, and −1 otherwise. Each edge gets the sum of its two endpoint scores, with extra terms for unmatched vertices.

**Problem.** With strict preferences on both sides and incomplete lists, M is popular exactly when it is a maximum-weight matching for these weights. This test is due to Biró, Irving and Manlove (2010). The paper derives the separate graph-structural tests for popularity from it, and back.

**How the definition helps.** The weights are chosen so that the weight of any matching N equals N's vote margin against M. Our own explanation: M has weight 0 against itself, so M is popular exactly when no matching has positive weight. Applying the definition directly means checking exponentially many rivals. The weights replace this with one maximum-weight matching problem, which takes polynomial time. The paper's own work is to connect this test with the graph-structural tests.

**Paper or page:** [On the Equivalence of the Graph-Structural and Optimization-Based Characterizations of Popular Matchings](https://arxiv.org/abs/2508.00349v1). It says: “an optimization-based characterization described by maximum-weight matchings.”

**Sources:**

- [Yuga Kanaya, Kenjiro Takazawa, On the Equivalence of the Graph-Structural and Optimization-Based Characterizations of Popular Matchings, arXiv:2508.00349v1 (2025)](https://arxiv.org/abs/2508.00349v1)
- [Péter Biró, Robert W. Irving, David F. Manlove, Popular Matchings in the Marriage and Roommates Problems, Algorithms and Complexity (CIAC 2010), Lecture Notes in Computer Science 6078 (2010), 97-108](https://doi.org/10.1007/978-3-642-13073-1_10)

### Linear portfolio rules make mean–variance optimization quadratic

**Remember:** Affine returns give linear means and quadratic variances.

*True by definition.* MSC 91G10 (Portfolio theory), 90C20. arXiv q-fin.PM, math.OC. Level 4: research.

**Definition.** Start with benchmark portfolio weights and choose functions of observed price history. Adjust the weights using a linear combination of those functions while keeping the weights summing to one. In the paper’s construction, the next return equals a baseline return plus a linear function of the chosen coefficients.

**Problem.** Assume the return terms have finite second moments. Minimizing return variance minus a nonnegative multiple of expected return gives a convex quadratic problem in the coefficients.

**How the definition helps.** The restricted portfolio definition makes the next return affine in the coefficients, even when the signals depend nonlinearly on past prices. In our own calculation, its expectation is affine and its variance is quadratic. The covariance matrix gives the quadratic term and is positive semidefinite. The work lies in constructing this representation for the trading rules.

**Paper or page:** [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3). It says: “the following two optimization problems are convex quadratic optimization problems”

**Sources:**

- [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3)

### Portfolio choice is well-posed exactly when utility or risk punishes large losses

**Remember:** Either the utility or the risk must notice large losses.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91G10 (Portfolio theory), 91G70, 91B16. arXiv econ.TH, q-fin.PM. Level 4: research.

**Definition.** An investor maximizes a utility functional subject to a bound on a risk functional. A functional is sensitive to large losses if each position that loses money with positive probability has a positive multiple that it rejects. Both functionals are zero at the zero position, so rejecting means negative utility or positive risk.

**Problem.** Assume the paper’s continuity, convexity and law-invariance conditions. Then the problem is well-posed in every market exactly when utility or risk is sensitive to large losses. Roughly, well-posed means the investor cannot keep gaining by taking ever larger positions (our own gloss).

**How the definition helps.** The axiom gives one either-or test, instead of a separate analysis for each pair of utility and risk functionals. Without either axiom, some market lets the investor improve by scaling up a risky position without end (our own). With a sensitive utility, the utility itself rejects very large positions, even if the risk bound allows them (our own). The hard part is the converse direction. The paper needs extra conditions for a unique optimal portfolio.

**Paper or page:** [The Interplay between Utility and Risk in Portfolio Selection](https://arxiv.org/abs/2509.10351v1). It says: “either the utility functional or the risk functional need to satisfy the axiom of sensitivity to large losses.”

**Sources:**

- [Leonardo Baggiani, Martin Herdegen, Nazem Khan, The Interplay between Utility and Risk in Portfolio Selection, arXiv:2509.10351v1 (2025)](https://arxiv.org/abs/2509.10351v1)

### Comonotonic prices satisfy put–call parity

**Remember:** Split a payoff into two parts that rise together, then add their prices.

*Makes the theorem clean to state or prove.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 4: research.

**Definition.** Two payoffs are comonotonic if no two states rank them in opposite orders. A comonotonic additive rule prices their sum by adding their prices. A monotone rule gives a higher or equal price to a payoff that is at least as large in every state.

**Problem.** For bounded measurable payoffs, a monotone pricing rule satisfies the paper’s put–call parity exactly when it is comonotonic additive.

**How the definition helps.** Our own explanation uses the fact that both option payoffs increase or stay constant as the underlying payoff rises. At strike k ≥ 0, the call pays the excess above k, or zero. The short put pays minus the shortfall below k, or zero. Together with cash k, these payoffs sum to the underlying payoff. Additivity prices the pieces separately. The converse must recover additivity for every comonotonic pair from these special decompositions.

**Paper or page:** [Put-Call Parities, absence of arbitrage opportunities and non-linear pricing rules](https://arxiv.org/abs/2203.16292v1). It says: “satisfies PCP if and only if it is Comonotonic Additive.”

**Sources:**

- [Bastianello, Chateauneuf and Cornet, Put–Call Parities, absence of arbitrage opportunities, and nonlinear pricing rules (2024)](https://doi.org/10.1111/mafi.12433)

### Directional closure makes capital limits attainable

**Remember:** Including limits along the priced direction makes the boundary budget work.

*Rules out counterexamples.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 4: research.

**Definition.** Safe positions form a set that stays safe when payoffs increase. Allow trades in a vector space of payoffs with linear prices, including a nonnegative payoff U priced at one. Add all zero-price trades to the safe set to form B. Directional closure means x belongs to B whenever x + εU belongs to B for every ε &gt; 0.

**Problem.** Required capital is the infimum price of trades making a position safe. Fix any real budget m. Directional closure holds exactly when every position requiring at most m admits a trade costing m that makes it safe.

**How the definition helps.** Directional closure includes the boundary reached by trades costing arbitrarily little above the budget. Our own argument writes every trade of price m as mU plus a zero-price trade. Thus a trade at price m works exactly when the position plus mU belongs to B. In our own cash example only positive balances are safe. Starting from zero, every positive deposit works, but depositing the infimum of zero fails.

**Paper or page:** [A new view on risk measures associated with acceptance sets](https://arxiv.org/abs/2109.12320v2). It says: “holds if and only if A + ker π is (−U)-directionally closed.”

**Sources:**

- [A new view on risk measures associated with acceptance sets](https://arxiv.org/abs/2109.12320v2)

### Logarithms turn risk products into sums

**Remember:** Taking logs turns multiplication of risk bounds into addition.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 4: research.

**Definition.** For a positive loss factor X, let η(X) be the infimum price of an eligible payoff H that makes X/H acceptable. Use positive payoffs and prices. In logarithmic units, an eligible payoff becomes log H and its cost becomes the logarithm of its price.

**Problem.** Assume products stay in the loss domain and the risks are positive and finite. Then η(XY) ≤ η(X)η(Y) exactly when the corresponding risk on log losses is subadditive, meaning the risk of a sum never exceeds the summed risks.

**How the definition helps.** Our own explanation takes logarithms of both sides, turning a product bound into a sum bound. The essential identity says that the transformed capital requirement at log X equals log η(X). It follows by translating every acceptable trade and taking its infimum cost.

**Paper or page:** [Multi-asset return risk measures](https://arxiv.org/abs/2411.08763v2). It says: “is subadditive if and only if ηℜ is submultiplicative, i.e., ∀ X,Y ∈ C: ηℜ(XY) ≤ ηℜ(X)ηℜ(Y).”

**Sources:**

- [Multi-asset return risk measures](https://arxiv.org/abs/2411.08763v2)

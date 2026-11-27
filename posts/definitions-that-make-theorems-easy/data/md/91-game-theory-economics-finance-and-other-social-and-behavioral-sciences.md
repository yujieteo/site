### Conventional cash flows yield one return

**Remember:** One initial cost and only later gains give one break-even rate.

*Rules out counterexamples.* MSC 91G50 (Corporate finance (dividends, real options, etc.)). arXiv q-fin.MF. Level 1: early undergraduate.

**Definition.** Call a cash stream conventional here if it starts with an outflow followed only by inflows or zero payments. The internal rate of return is a discount rate above minus one that makes the sum of discounted cash flows zero.

**Problem.** For a finite conventional cash stream with at least one later positive inflow, the internal rate of return is unique.

**How the definition helps.** Every later inflow falls in present value as the discount rate rises (our own). Their sum decreases continuously from infinity to zero as the rate runs from minus one to infinity (our own). It therefore equals the initial cost exactly once (our own). At dates zero, one, and two, payments of −10, 21, and −11 give two rates, zero and ten percent (our own).

**Wikipedia:** [Internal rate of return](https://en.wikipedia.org/wiki/Internal_rate_of_return). It says: “In this case the NPV of the payment stream is a convex, strictly decreasing function of interest rate.”

**Sources:** none listed. No primary source with a working link was found.

### Mixed strategies give every finite zero-sum game a value

**Remember:** Randomizing makes the best guaranteed gain equal the least guaranteed loss.

*Rules out counterexamples.* MSC 91A05 (2-person games), 90C47. arXiv econ.TH, math.OC. Level 2: later undergraduate.

**Definition.** In a finite two-player zero-sum game with payoff matrix A, a mixed strategy is a probability vector over a player's actions. If the players use mixed strategies x and y, player one's expected payoff is xᵀAy and player two loses that amount.

**Problem.** For a finite two-player zero-sum game, maxₓ minᵧ xᵀAy = minᵧ maxₓ xᵀAy over mixed strategies. This common payoff is the game’s value. Restricting both players to pure strategies can give different bounds.

**How the definition helps.** Mixed strategies make the strategy sets compact convex simplices and the payoff bilinear, which is what a minimax theorem needs. In our own example, matching pennies with payoffs ±1, the pure max-min is −1 and the pure min-max is +1. With fifty-fifty mixing both equal 0. The theorem is equivalent to linear programming duality (our own).

**Wikipedia:** [Minimax theorem](https://en.wikipedia.org/wiki/Minimax_theorem). It says: “In the context of two-player zero-sum games, the sets X and Y correspond to the strategy sets of the first and second player, respectively, which consist of lotteries over their actions (so-called mixed strategies)”

**Sources:**

- [J. v. Neumann, Zur Theorie der Gesellschaftsspiele, Mathematische Annalen 100 (1928), 295–320](https://doi.org/10.1007/BF01448847)

### Letting players randomize makes Nash equilibria exist

**Remember:** Allow players to randomize, and every finite game has an equilibrium.

*Rules out counterexamples.* MSC 91A10 (Noncooperative games). arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A mixed strategy assigns probabilities to a player’s pure strategies. A Nash equilibrium specifies one mixed strategy per player, with independent draws. No player can increase their expected payoff by changing only their own strategy.

**Problem.** Every finite game in normal form (a game given by a table of payoffs) has at least one Nash equilibrium.

**How the definition helps.** Each player’s expected payoff is linear in their own probabilities, so their best responses form a nonempty convex set (our own). Payoff continuity gives the joint best-response correspondence a closed graph on the compact product of simplices (our own). Kakutani’s fixed-point theorem gives a profile of mutual best responses (our own). In matching pennies each pure profile lets one player gain by switching (our own).

**Wikipedia:** [Nash equilibrium](https://en.wikipedia.org/wiki/Nash_equilibrium). It says: “The key to Nash's ability to prove existence far more generally than von Neumann lay in his definition of equilibrium.”

**Sources:**

- [Nash, J. F. (1950). Equilibrium points in n-person games. PNAS 36(1), 48–49.](https://doi.org/10.1073/pnas.36.1.48)

### Subgame perfection removes non-credible threats, so backward induction finds equilibria

**Remember:** An equilibrium must stay an equilibrium wherever the game happens to go.

*Rules out counterexamples.* MSC 91A11 (Equilibrium refinements), 91A18. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** In a perfect-information game, a subgame consists of a decision node and the entire tree below it. A strategy profile is subgame perfect if its restriction is a Nash equilibrium in every subgame, including the whole game.

**Problem.** Every finite game with perfect information has a subgame perfect equilibrium, and backward induction computes it. Plain Nash equilibrium does not give this result, because some Nash equilibria rest on threats that a player would never carry out.

**How the definition helps.** Subgame perfection requires optimal choices even after a history the equilibrium strategies never reach. An incumbent’s threat to fight entry fails if accommodation pays more once entry occurs (our own). Working backward, choose a best action given the chosen continuations at every node (our own). Induction gives a Nash equilibrium in each subtree (our own).

**Wikipedia:** [Subgame perfect equilibrium](https://en.wikipedia.org/wiki/Subgame_perfect_equilibrium). It says: “This ensures that strategies are credible and rational throughout the entire game, eliminating non-credible threats.”

**Sources:**

- [R. Selten, Spieltheoretische Behandlung eines Oligopolmodells mit Nachfrageträgheit, Zeitschrift für die gesamte Staatswissenschaft 121 (1965), 301–324 and 667–689](https://www.jstor.org/stable/40748884)
- [R. Selten, Reexamination of the perfectness concept for equilibrium points in extensive games, International Journal of Game Theory 4 (1975), 25–55](https://doi.org/10.1007/BF01766400)

### Dominating sets survive voting cycles

**Remember:** Every member beats every outsider, so two dominating sets must nest.

*Makes the theorem clean to state or prove.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** For a finite election, call a set dominating if each member beats each outsider by majority vote. The Smith set is the least nonempty dominating set. It extends the Condorcet winner, who beats every other candidate alone.

**Problem.** A nonempty finite election always has exactly one least nonempty dominating set, even when no candidate beats all others.

**How the definition helps.** The full candidate set dominates, so at least one nonempty dominating set exists (our own). If two dominating sets were incomparable, choose one candidate in each but outside the other (our own). Each candidate would have to beat the other, so the sets must be nested (our own). The finite family therefore has a unique least member even in a majority cycle (our own).

**Wikipedia:** [Smith set](https://en.wikipedia.org/wiki/Smith_set). It says: “It follows that the Smith set is the smallest non-empty dominating set, and that it is well defined.”

**Sources:**

- [Smith, Aggregation of Preferences with Variable Electorate (1973)](https://doi.org/10.2307/1914033)

### Gibbard–Satterthwaite counts possible outcomes, so two-outcome rules escape

**Remember:** Three possible winners force a dictator or a chance to lie.

*Rules out counterexamples.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A voting rule maps each list of voters' strict rankings of the candidates to one winner. The possible outcomes of the rule are the candidates that win for at least one list of rankings. A rule is manipulable if some voter can get a winner she prefers by reporting a false ranking.

**Problem.** For finitely many voters and candidates, every voting rule on unrestricted strict rankings with at least three possible winners is dictatorial or manipulable. A dictator always gets their favorite among the possible winners.

**How the definition helps.** With three voters and two possible winners, majority vote is strategyproof because misreporting can only hurt the voter’s preferred option (our own). No single voter determines every winner (our own). Counting possible winners excludes this counterexample even when other candidates appear on the ballot.

**Wikipedia:** [Gibbard–Satterthwaite theorem](https://en.wikipedia.org/wiki/Gibbard%E2%80%93Satterthwaite_theorem). It says: “It is only assumed that at least three of them can win, i.e. are possible outcomes of the voting rule.”

**Sources:**

- [A. Gibbard, Manipulation of Voting Schemes: A General Result, Econometrica 41 (1973), 587–601](https://doi.org/10.2307/1914083)
- [M. A. Satterthwaite, Strategy-proofness and Arrow's conditions, Journal of Economic Theory 10 (1975), 187–217](https://doi.org/10.1016/0022-0531(75)90050-2)

### Single-peaked preferences escape Arrow's theorem

**Remember:** One peak per voter on one line means no majority cycles.

*Rules out counterexamples.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH. Level 2: later undergraduate.

**Definition.** Strict rankings are single-peaked if one common order of alternatives gives each voter a favorite with preferences decreasing on either side. On either side, that voter prefers the alternative nearer the favorite in the common order.

**Problem.** With an odd number of at least three voters and finite alternatives, single-peaked rankings yield an acyclic majority order. The median voter’s favorite beats every other alternative. On this domain majority rule satisfies unanimity, independence of irrelevant alternatives and nondictatorship.

**How the definition helps.** On any triple in axis order, single-peakedness forbids ranking the middle option last (our own). This excludes the cyclic triple of rankings A-B-C, B-C-A and C-A-B on every axis (our own). Against any challenger, a majority have peaks at the median peak or beyond it and therefore prefer it (our own). Black’s theorem gives majority transitivity on this restricted domain (our own).

**Wikipedia:** [Single peaked preferences](https://en.wikipedia.org/wiki/Single_peaked_preferences), [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem), [Median voter theorem](https://en.wikipedia.org/wiki/Median_voter_theorem). It says: “If the domain is restricted to profiles where every individual has a single-peaked preference with respect to the linear ordering, then social preferences are acyclic.”

**Sources:**

- [Black, D. (1948). On the rationale of group decision-making. Journal of Political Economy 56(1), 23–34.](https://doi.org/10.1086/256633)
- [Arrow, K. J. (1950). A difficulty in the concept of social welfare. Journal of Political Economy 58(4), 328–346.](https://doi.org/10.1086/256963)

### With two alternatives Arrow's conditions hold, and May picks majority rule

**Remember:** Two options give majority rule; three options give Arrow's impossibility.

*Rules out counterexamples. Confidence: medium.* MSC 91B14 (Social choice), 91B12. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A social welfare function turns every list of voters' rankings into one ranking for society. Independence of irrelevant alternatives says that society's order of two alternatives depends only on the voters' orders of those two. Arrow's theorem assumes at least three alternatives.

**Problem.** For finitely many voters and a finite set of three or more alternatives, unanimity and independence force dictatorship on the unrestricted domain of strict rankings. With an odd electorate of at least three voters and two alternatives, majority rule satisfies both conditions without a dictator. May’s theorem characterizes it there by anonymity, neutrality and positive responsiveness.

**How the definition helps.** With two alternatives there is no third alternative to be irrelevant, so independence says nothing and majority rule passes every test. The condition of three alternatives in Arrow's theorem excludes exactly this case. A Condorcet cycle, where majorities prefer A to B, B to C and C to A, needs three alternatives (our own). May's theorem is the matching positive result for two alternatives.

**Wikipedia:** [May's theorem](https://en.wikipedia.org/wiki/May%27s_theorem), [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem). It says: “Arrow's theorem does not apply to the case of two candidates (when there are trivially no "independent alternatives"), so this possibility result can be seen as the mirror analogue of that theorem.”

**Sources:**

- [K. J. Arrow, A Difficulty in the Concept of Social Welfare, Journal of Political Economy 58 (1950), 328–346](https://doi.org/10.1086/256963)
- [K. O. May, A Set of Independent Necessary and Sufficient Conditions for Simple Majority Decision, Econometrica 20 (1952), 680–684](https://doi.org/10.2307/1907651)

### The continuity axiom excludes lexicographic preferences

**Remember:** Continuity forbids one good that matters infinitely more than another.

*Rules out counterexamples.* MSC 91B16 (Utility theory), 91B06. arXiv econ.TH. Level 2: later undergraduate.

**Definition.** A finite lottery assigns nonnegative probabilities summing to one to finitely many outcomes. Continuity requires that whenever L ≼ M ≼ N, some p ∈ \[0,1\] makes M indifferent to the mixture pL + (1−p)N.

**Problem.** For finite lotteries, complete, transitive, continuous and independent preferences admit an expected utility representation. One lottery is weakly preferred to another exactly when its expected utility is at least as high.

**How the definition helps.** Continuity rules out preferences that compare two expected scores lexicographically (our own). Let M tie L on the first score and beat it on the second, while N beats both on the first (our own). Any positive weight on N puts the mixture above M, and zero weight leaves it below M (our own). This violates the mixture test used by the expected utility theorem (our own).

**Wikipedia:** [Von Neumann–Morgenstern utility theorem](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem), [Lexicographic preferences](https://en.wikipedia.org/wiki/Lexicographic_preferences). It says: “These axioms, apart from continuity, are often justified using the Dutch book theorems (whereas continuity is used to set aside lexicographic or infinitesimal utilities).”

**Sources:**

- [J. von Neumann and O. Morgenstern, Theory of Games and Economic Behavior, Princeton University Press (1944; 2nd ed. 1947, with the utility axioms)](https://doi.org/10.1515/9781400829460)

### Compensated demand cannot slope upward

**Remember:** Hold utility fixed and a price rise cannot increase demand.

*True by definition.* MSC 91B42 (Consumer behavior, demand theory). arXiv econ.TH. Level 2: later undergraduate.

**Definition.** Compensated demand selects a cheapest bundle that gives the buyer at least a fixed level of satisfaction, called utility. Ordinary demand instead maximizes utility at a fixed budget.

**Problem.** If only one price rises, the cost-minimizing quantity of that good cannot increase, provided both minima exist.

**How the definition helps.** Holding utility fixed lets each bundle compete with the other at both price vectors (our own). Each chosen bundle costs no more than the other at its own prices (our own). Adding the inequalities cancels the unchanged prices and shows that the quantity bought cannot rise (our own).

**Wikipedia:** [Hicksian demand function](https://en.wikipedia.org/wiki/Hicksian_demand_function). It says: “Hicksian demand always slopes down.”

**Sources:** none listed. No primary source with a working link was found.

### Minimum expenditure is price-concave

**Remember:** The cheapest of linear cost plans is concave in prices.

*True by definition.* MSC 91B42 (Consumer behavior, demand theory). arXiv econ.TH. Level 2: later undergraduate.

**Definition.** The expenditure function gives the least cost of reaching a fixed level of satisfaction, called utility. Take the infimum of costs over all bundles reaching that target.

**Problem.** At any fixed attainable utility level, minimum expenditure is concave in prices where its value is finite.

**How the definition helps.** Each feasible bundle gives one linear cost function, and the same bundles compete at every price (our own). Their pointwise infimum is concave (our own). Using expenditure avoids tracking switches between the bundles chosen by a consumer with a fixed budget (our own). Connecting the two descriptions requires the duality theorem for consumer choice (our own).

**Wikipedia:** [Expenditure function](https://en.wikipedia.org/wiki/Expenditure_function). It says: “Concave in p”

**Sources:** none listed. No primary source with a working link was found.

### Separate sides guarantee stable matching

**Remember:** Separate the people who propose from the people who hold offers.

*Rules out counterexamples.* MSC 91B68 (Matching models). arXiv econ.TH. Level 2: later undergraduate.

**Definition.** A stable matching has no two people who would rather pair with each other than keep their assigned partners. In the two-sided model, only members of opposite sides can pair. The roommates model instead allows any pair.

**Problem.** Two finite, equally sized sides with strict, complete rankings of the opposite side always admit a stable matching.

**How the definition helps.** In deferred acceptance, each receiver keeps the best offer so far, so a rejected proposer can never form a blocking pair (our own). In a roommates example, A ranks B then C, B ranks C then A, and C ranks A then B (our own). All three rank D last (our own). Whoever pairs with D can form a mutually preferred pair among the first three (our own).

**Wikipedia:** [Stable roommates problem](https://en.wikipedia.org/wiki/Stable_roommates_problem), [Gale–Shapley algorithm](https://en.wikipedia.org/wiki/Gale%E2%80%93Shapley_algorithm). It says: “Unlike the stable marriage problem, a stable matching may fail to exist for certain sets of participants and their preferences.”

**Sources:**

- [D. Gale, L. S. Shapley. College Admissions and the Stability of Marriage (1962).](https://doi.org/10.1080/00029890.1962.11989827)

### Log wealth turns growth into addition

**Remember:** Logarithms turn products into sums, so average log gains obey the strong law.

*True by definition.* MSC 91G10 (Portfolio theory), 91A60. arXiv q-fin.PM. Level 2: later undergraduate.

**Definition.** For repeated bets, compare fixed betting fractions by their expected one-round log return. Divide wealth after one round by wealth before it. The logarithm of this ratio is the log return.

**Problem.** Suppose successive wealth multipliers are independent, identically distributed, positive, and have integrable logarithms. Total log wealth gain divided by the number of rounds converges almost surely to the expected one-round log return.

**How the definition helps.** The logarithm turns compounded wealth into a sum of one-round log returns. In our own proof the strong law of large numbers gives the limit of their average. Comparing expected wealth instead gives a different decision. In our own even-odds example with a 60% chance of winning, betting everything maximizes expected wealth but loses everything at the first defeat.

**Wikipedia:** [Kelly criterion](https://en.wikipedia.org/wiki/Kelly_criterion). It says: “maximizing the long-term expected value of the logarithm of wealth”

**Sources:**

- [Kelly, A New Interpretation of Information Rate (1956)](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)

### Two funds span minimum-variance portfolios

**Remember:** Find two points on the line of variance-minimizing portfolios.

*Makes the theorem clean to state or prove.* MSC 91G10 (Portfolio theory). arXiv q-fin.PM. Level 2: later undergraduate.

**Definition.** At a target expected return, choose asset weights summing to one that minimize return variance. Allow negative weights, which represent selling borrowed assets. A positive definite covariance matrix makes variance the squared length of the weight vector in the corresponding inner product.

**Problem.** Assume the covariance matrix is positive definite and the asset means are not all equal. All target-return minimizers lie on one line. Any two minimizers at different targets generate the others by combinations whose coefficients sum to one.

**How the definition helps.** Viewing variance as squared length turns each minimizer into the closest feasible point to zero (our own). It lies in the span of the two normals to the budget and return constraints in this inner product (our own). The budget equation cuts that plane in a line, and each target return selects one point (our own).

**Wikipedia:** [Mutual fund separation theorem](https://en.wikipedia.org/wiki/Mutual_fund_separation_theorem). It says: “Now consider two benchmark efficient portfolios constructed at benchmark expected returns”

**Sources:**

- [Robert C. Merton. An Analytic Derivation of the Efficient Portfolio Frontier (1972).](https://doi.org/10.2307/2329621)

### Risk-neutral prices exclude arbitrage

**Remember:** A fair average cannot hide a gain that never loses.

*True by definition.* MSC 91G15 (Financial markets). arXiv q-fin.MF. Level 2: later undergraduate.

**Definition.** Consider finitely many states and trading dates, with a positive bank account and no dividends. Risk-neutral probabilities give positive weight to exactly the states possible under the original probabilities. Under them, each asset price in bank-account units equals its expected next price given current information.

**Problem.** An arbitrage is a self-financing strategy using only information available at each trade. It starts from zero, avoids terminal loss almost surely, and gives a positive terminal gain with positive probability. In a finite market with finitely many trading dates, risk-neutral probabilities rule out arbitrage.

**How the definition helps.** Each asset’s discounted price change has conditional mean zero under risk-neutral probabilities (our own). Holdings chosen before that change preserve zero expected gain, and self-financing makes discounted terminal wealth their sum from zero initial wealth (our own). An arbitrage would have strictly positive expectation since both probability laws agree on which states are possible (our own).

**nLab:** [martingale](https://ncatlab.org/nlab/show/martingale). It says: “For each n ≤ m, the function fₙ is a conditional expectation of fₘ given ℱₙ:”

**Paper or page:** [The Golden Age of the Mathematical Finance](https://arxiv.org/abs/2102.06693v2). It says: “There are not arbitrage opportunities if and only if there is a probability ℙ∗ ∼ ℙ under which the process S̃ is a martingale.”

**Sources:**

- [J. Michael Harrison, Stanley R. Pliska. Martingales and stochastic integrals in the theory of continuous trading (1981).](https://doi.org/10.1016/0304-4149(81)90026-0)

### Risk-neutral averages price exact hedges

**Remember:** Risk-neutral averaging preserves discounted prices and therefore preserves a self-financing hedge’s value.

*True by definition.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 2: later undergraduate.

**Definition.** Express dividend-free prices in units of a positive bank account. A probability is risk-neutral if it preserves null events and each price equals its conditional expected next price given current information. A self-financing exact hedge funds all trades internally and matches the claim at maturity in every possible state.

**Problem.** In a finite-state, finite-period market without arbitrage, a self-financing exact hedge costs the expected discounted payoff under any risk-neutral probability.

**How the definition helps.** Pricing by a risk-neutral average avoids solving again for the holdings in an exact hedge (our own). Each trade has zero conditional expected gain in bank-account units, so expected final wealth equals initial wealth (our own). Every risk-neutral probability therefore gives the same cost for a payoff the hedge replicates (our own). Existence of pricing probabilities uses the fundamental theorem, and existence of a hedge still requires proof (our own).

**Paper or page:** [Asset pricing under model uncertainty with discrete time and states](https://arxiv.org/abs/2408.13048v2). It says: “Π(F) := {x ∈ ℝ: ∃ H such that x + H·S\*(T) = F\*, 𝒫-q.s.} = E<sub>Q</sub>\[F\*\],”

**Sources:**

- [J. Michael Harrison, Stanley R. Pliska. Martingales and stochastic integrals in the theory of continuous trading (1981).](https://doi.org/10.1016/0304-4149(81)90026-0)

### State securities linearize pricing

**Remember:** Price each state separately and add the pieces.

*True by definition.* MSC 91G30 (Interest rates, asset pricing, etc. (stochastic models)). arXiv q-fin.PR. Level 2: later undergraduate.

**Definition.** A state security pays one unit in one specified state and zero elsewhere. Its current cost is the state price. A complete market can reproduce any future payoff by trading existing assets.

**Problem.** Consider a complete, frictionless finite-state market with one payment date and unrestricted holdings. Without arbitrage, every payoff costs the sum of its state payments times their state prices.

**How the definition helps.** Writing a payoff in state securities gives an explicit portfolio with exactly that payoff (our own). Hold as many units of each security as the payment required in its state (our own). This replaces a new search for a replicating portfolio with a sum of known costs (our own). Completeness supplies the securities, and arbitrage rules out different prices for identical payments (our own).

**Wikipedia:** [Arrow–Debreu model](https://en.wikipedia.org/wiki/Arrow%E2%80%93Debreu_model). It says: “An Arrow security is an instrument with a fixed payout of one unit in a specified state and no payout in other states.”

**Sources:**

- [K. J. Arrow. The Role of Securities in the Optimal Allocation of Risk-bearing (1964).](https://doi.org/10.2307/2296188)

### Quantile averages handle tied losses

**Remember:** Fill the whole tail, even when losses tie.

*Rules out counterexamples.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 2: later undergraduate.

**Definition.** For probability p between zero and one, the loss quantile is the smallest threshold with probability at least p of loss at or below it. Expected shortfall averages these quantiles over the highest chosen fraction of probabilities. It includes just enough probability at a tied cutoff to fill that fraction.

**Problem.** Expected shortfall is finite for every integrable loss and every tail fraction strictly between zero and one. For a continuously distributed loss it equals the average loss conditional on exceeding the cutoff.

**How the definition helps.** The quantile integral always covers exactly the chosen fraction, even at a tied cutoff (our own). If a bet loses one unit with probability 5 percent and otherwise zero, the worst 10 percent average is one half (our own). Conditioning strictly above the zero cutoff instead gives one (our own). Proving the formula agrees with conditional averaging for continuous laws uses the distribution of a uniform quantile (our own).

**Wikipedia:** [Expected shortfall](https://en.wikipedia.org/wiki/Expected_shortfall). It says: “but may differ for distributions having atoms at the quantile.”

**Sources:**

- [Carlo Acerbi, Dirk Tasche. On the coherence of expected shortfall (2002).](https://doi.org/10.1016/s0378-4266(02)00283-2)

### Best-response sets contain the supports of Nash equilibria

**Remember:** Each surviving choice needs a best-reply witness among the opponents’ surviving choices.

*True by definition. Confidence: medium.* MSC 91A10 (Noncooperative games), 91A26. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** Choose a nonempty set of pure strategies for each player in a finite game. Every included strategy must maximize payoff among all pure strategies against some independent opponent mixtures supported on their respective sets. A strategy is rationalizable if it belongs to some such family.

**Problem.** Every pure strategy played with positive probability in a Nash equilibrium is rationalizable.

**How the definition helps.** The best-response-set definition makes the proof immediate because the strategies played with positive probability at equilibrium form such a set. Each of those strategies is optimal against the other players’ equilibrium choices. Our own comparison is that the deletion proof needs an induction showing that each round keeps those strategies. The work in relating the definitions is to show that the deletion process leaves the largest best-response set.

**Wikipedia:** [Rationalizable strategy](https://en.wikipedia.org/wiki/Rationalizable_strategy). It says: “Rationalizability is a broader concept than a Nash equilibrium. Both require players to respond optimally to some belief about their opponents' actions, but Nash equilibrium requires these beliefs to be correct, while rationalizability does not.”

**Sources:**

- [B. Douglas Bernheim, Rationalizable Strategic Behavior, Econometrica 52 (1984) 1007–1028](https://doi.org/10.2307/1911196)

### Correlated equilibria form a polytope, so a linear program finds one

**Remember:** Given your recommendation, obeying pays at least as much as any deviation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91A11 (Equilibrium refinements), 91A68. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A correlated equilibrium of a finite game is a distribution over action profiles satisfying every player's obedience conditions. Given any recommendation of positive probability, following it must yield at least the conditional expected payoff of every alternative action.

**Problem.** In a finite game, the correlated equilibria form a nonempty convex polytope. For rational payoffs, a linear program finds one in time polynomial in the payoff table’s bit length.

**How the definition helps.** Multiply each obedience inequality by its recommendation probability to obtain a linear constraint, valid even at zero probability (our own). These constraints cut out a polytope inside the probability simplex (our own). Nash’s existence theorem supplies a feasible product distribution (our own). The explicit payoff table bounds the linear program’s encoding length polynomially (our own).

**Wikipedia:** [Correlated equilibrium](https://en.wikipedia.org/wiki/Correlated_equilibrium). It says: “computing a correlated equilibrium only requires solving a linear program whereas solving a Nash equilibrium requires finding its fixed point completely.”

**Sources:**

- [Aumann, R. J. (1974). Subjectivity and correlation in randomized strategies. Journal of Mathematical Economics 1(1), 67–96.](https://doi.org/10.1016/0304-4068(74)90037-8)
- [C. H. Papadimitriou and T. Roughgarden, Computing correlated equilibria in multi-player games, Journal of the ACM 55(3) (2008), article 14](https://doi.org/10.1145/1379759.1379762)

### Trembling-hand perfection removes equilibria in weakly dominated strategies

**Remember:** If opponents might slip, weakly dominated strategies are never best.

*Rules out counterexamples.* MSC 91A11 (Equilibrium refinements), 91A10. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A perturbation imposes a positive minimum probability on each pure action, with each player's minima summing to less than one. A perfect equilibrium is a limit of equilibria of such perturbations as all minima approach zero.

**Problem.** In 2×2 games, the perfect equilibria are exactly the Nash equilibria in which both players use undominated strategies. A strategy is weakly dominated if another strategy is never worse and sometimes better. Every finite game has at least one perfect equilibrium.

**How the definition helps.** Against a fully mixed opponent, weak domination gives a strict payoff loss, so dominated actions receive only their minimum probabilities (our own). The quoted two-by-two characterization gives the converse and excludes the dominated equilibrium (Down, Right). Each perturbed finite game has an equilibrium by the fixed-point argument, and compactness gives a convergent subsequence (our own).

**Wikipedia:** [Trembling hand perfect equilibrium](https://en.wikipedia.org/wiki/Trembling_hand_perfect_equilibrium). It says: “For 2×2 games, the set of trembling-hand perfect equilibria coincides with the set of equilibria consisting of two undominated strategies.”

**Sources:**

- [R. Selten, Reexamination of the perfectness concept for equilibrium points in extensive games, International Journal of Game Theory 4 (1975), 25–55](https://doi.org/10.1007/BF01766400)
- [R. B. Myerson, Refinements of the Nash equilibrium concept, International Journal of Game Theory 7 (1978), 73–80](https://doi.org/10.1007/BF01753236)

### Arrival orders make the Shapley efficiency proof a telescoping sum

**Remember:** In each arrival order, the increases in worth add up to the total.

*True by definition.* MSC 91A12 (Cooperative games). arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** In a finite cooperative game with v(∅) = 0, order the players uniformly at random. Each player’s Shapley value is the expected increase in coalition worth when that player joins their predecessors.

**Problem.** The Shapley values sum to the worth of the group of all players. This property is called efficiency.

**How the definition helps.** The order formula makes efficiency a telescoping sum, since the group's worth after each arrival is its worth before the next. Only the final worth and the empty group's zero worth remain. The weighted formula hides this cancellation in its coefficients (our own comparison). To show the formulas agree, count the orders in which exactly a given group precedes a particular player.

**Wikipedia:** [Shapley value](https://en.wikipedia.org/wiki/Shapley_value). It says: “The sum of the Shapley values of all agents equals the value of the grand coalition, so that all the gain is distributed among the agents:”

**Sources:**

- [Lloyd S. Shapley, A Value for n-Person Games, in Contributions to the Theory of Games II, Annals of Mathematics Studies 28 (1953) 307–317](https://doi.org/10.1515/9781400881970-018)

### Balanced games are exactly the cooperative games with a nonempty core

**Remember:** Cover each player with weight one and compare weighted worth with grand-coalition worth.

*True by definition.* MSC 91A12 (Cooperative games), 90C46. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A finite cooperative game assigns worth v(S) to each coalition of players in N, with v(∅) = 0. Its core consists of payments totaling v(N) that give each coalition S at least v(S) in total. The game is balanced if ∑ₛ α(S)v(S) ≤ v(N) whenever nonnegative coalition weights sum to one around every player.

**Problem.** Bondareva–Shapley theorem: the core of a game is nonempty exactly when the game is balanced. It follows that market games and convex games have nonempty cores.

**How the definition helps.** Minimize total payments subject to every coalition receiving its worth (our own). The dual maximizes weighted worth over balanced weights, so strong duality gives the core criterion (our own). The standard balancedness results for market games and convex games give the two applications (our own).

**Wikipedia:** [Bondareva–Shapley theorem](https://en.wikipedia.org/wiki/Bondareva%E2%80%93Shapley_theorem), [Core (game theory)](https://en.wikipedia.org/wiki/Core_%28game_theory%29). It says: “Specifically, the game's core is non-empty if and only if the game is balanced.”

**Sources:**

- [L. S. Shapley, On balanced sets and cores, Naval Research Logistics Quarterly 14 (1967), 453–460](https://doi.org/10.1002/nav.3800140404)

### Harsanyi dividends give a direct check of the Shapley axioms

**Remember:** Split each group’s extra worth equally among its members.

*True by definition. Confidence: medium.* MSC 91A12 (Cooperative games). arXiv cs.GT. Level 3: graduate.

**Definition.** A finite cooperative game assigns worth v(S) to each coalition S, with v(∅) = 0. Its dividend for S equals v(S) minus the sum of all proper-subset dividends. Each player's Shapley value sums equal shares of the dividends of coalitions containing that player.

**Problem.** The Shapley value distributes the full worth, adds across games, treats interchangeable players equally, and pays nothing to players who never add worth.

**How the definition helps.** Equal shares make full distribution immediate, and the dividend recursion respects addition and relabeling. For the last axiom, our own induction compares each group containing a null player with the same group without them. Their worths agree and all smaller dividends involving that player vanish, so the group's dividend is zero. To compare formulas, note that each dividend goes to the last member to arrive, and each member is equally likely to arrive last (our own).

**Wikipedia:** [Shapley value](https://en.wikipedia.org/wiki/Shapley_value). It says: “In other words, the synergy of each coalition is divided equally between all members.”

**Sources:** none listed. No primary source with a working link was found.

### Potential games always have pure equilibria

**Remember:** Every selfish improvement climbs the same hill.

*True by definition.* MSC 91A14 (Potential and congestion games), 91A10. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A finite game has a generalized ordinal potential if some real function on pure profiles strictly increases whenever a unilateral move increases the mover's payoff.

**Problem.** Every finite potential game has a pure-strategy Nash equilibrium. Improvement dynamics, in which one player at a time makes a move that raises their own payoff, always stop at one.

**How the definition helps.** Each improving move strictly raises the potential, so an improvement path cannot cycle. In a finite game the path must stop, and where it stops no player can improve. Rosenthal (1973) proved that congestion games have pure equilibria by building such a function, and Monderer and Shapley (1996) made the potential the definition. What stays hard is that the path can be exponentially long (our own summary).

**Wikipedia:** [Potential game](https://en.wikipedia.org/wiki/Potential_game). It says: “We have just proved that every finite generalized-ordinal-potential game has the FIP.”

**Sources:**

- [Monderer, D.; Shapley, L. S. (1996). Potential games. Games and Economic Behavior 14(1), 124–143.](https://doi.org/10.1006/game.1996.0044)
- [Rosenthal, R. W. (1973). A class of games possessing pure-strategy Nash equilibria. International Journal of Game Theory 2, 65–67.](https://doi.org/10.1007/BF01737559)
- [Fabrikant, A.; Papadimitriou, C.; Talwar, K. (2004). The complexity of pure Nash equilibria. Proceedings of the 36th ACM Symposium on Theory of Computing, 604–612.](https://doi.org/10.1145/1007352.1007445)

### Perfect recall makes mixed and behavior strategies equivalent

**Remember:** A player who never forgets can randomize one move at a time.

*Rules out counterexamples.* MSC 91A18 (Games in extensive form), 91A10. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A player has perfect recall if any two nodes in one information set have identical sequences of her earlier information sets and actions. A mixed strategy randomizes over complete plans. A behavior strategy independently randomizes over available actions at each information set.

**Problem.** Kuhn's theorem (1953): in a finite game with perfect recall, every mixed strategy has a behavior strategy with the same outcome probabilities, and conversely. So one can work with the much smaller behavior strategies.

**How the definition helps.** Perfect recall identifies the earlier personal choices on which to condition each mixed plan’s next action (our own). Use any distribution at histories with zero weight and the conditional distribution elsewhere (our own). Conversely, sampling all local choices independently gives a mixed plan with the same outcome probabilities (our own). The absent-minded driver revisits one information set, so independent choices can produce different actions there on successive visits (our own).

**Wikipedia:** [Kuhn's theorem](https://en.wikipedia.org/wiki/Kuhn%27s_theorem). It says: “in any finite extensive-form game where players have perfect recall (the ability to remember all of their previous moves and information), every mixed strategy has an equivalent behavior strategy that yields the same outcome probabilities, and vice versa.”

**Sources:**

- [H. W. Kuhn, Extensive Games and the Problem of Information, in Contributions to the Theory of Games II, Annals of Mathematics Studies 28 (1953), 193–216](https://doi.org/10.1515/9781400881970-012)
- [M. Piccione and A. Rubinstein, On the Interpretation of Decision Problems with Imperfect Recall, Games and Economic Behavior 20 (1997), 3–24](https://doi.org/10.1006/game.1997.0536)

### Invasion resistance breaks Nash ties

**Remember:** If mutants tie against residents, compare how both do against mutants.

*Rules out counterexamples.* MSC 91A22 (Evolutionary games). arXiv econ.TH. Level 3: graduate.

**Definition.** The resident strategy is the one initially used throughout the population. It is evolutionarily stable if, against each distinct mutant strategy, residents earn strictly more than mutants at every sufficiently small positive mutant share. Both face opponents drawn from the same population.

**Problem.** In a finite symmetric two-player game, an evolutionarily stable strategy is a symmetric Nash equilibrium. If a mutant ties against the resident, the resident must earn more against the mutant than the mutant does against itself.

**How the definition helps.** Testing positive mutant shares distinguishes strategies that tie when everyone plays the resident strategy. Our own proof writes the resident's payoff advantage as an affine function of the mutant share. At zero the advantage must be nonnegative, and if it vanishes there, the slope must be positive. In the article's example, B ties A against residents playing A, yet B earns more than A against B.

**Wikipedia:** [Evolutionarily stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy). It says: “only B is an ESS”

**Sources:**

- [Maynard Smith and Price, The Logic of Animal Conflict (1973)](https://doi.org/10.1038/246015a0)

### Defining common knowledge by a common partition makes agreement immediate

**Remember:** Common knowledge holds throughout the cell shared by all partitions after coarsening.

*Makes the theorem clean to state or prove.* MSC 91A27 (Games with incomplete information, Bayesian games), 03B42. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** Each agent observes a cell of a partition of a finite state space. An event is common knowledge at a state if it contains that state's cell in the finest common coarsening of all agents’ partitions.

**Problem.** Suppose agents share a prior giving every state positive probability. If their posterior probabilities of an event are common knowledge, their posteriors agree.

**How the definition helps.** The partition definition turns the proof into one short computation with conditional probabilities (our own summary). The part of the meet that holds the true state is a union of each agent's own parts. Each agent has the same posterior on all her parts inside it, so that posterior equals the probability conditional on the whole part. That number does not depend on the agent, so the posteriors agree.

**Wikipedia:** [Aumann's agreement theorem](https://en.wikipedia.org/wiki/Aumann%27s_agreement_theorem). It says: “The theorem was proved by Robert Aumann in his 1976 paper "Agreeing to Disagree", which also introduced the formal, set-theoretic definition of common knowledge.”

**Sources:**

- [R. J. Aumann, Agreeing to Disagree, Annals of Statistics 4 (1976), 1236–1239](https://doi.org/10.1214/aos/1176343654)

### Harsanyi's types turn incomplete information into a game with a chance move

**Remember:** Let Nature deal the private information, and ordinary game theory applies.

*Makes the theorem clean to state or prove.* MSC 91A27 (Games with incomplete information, Bayesian games), 91A18. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** In a finite Bayesian game, Nature draws a type profile from a known common prior and privately tells each player their type. A mixed action rule assigns an action distribution to each possible type. At Bayesian Nash equilibrium, each positive-probability type maximizes conditional expected payoff given everyone else's rules.

**Problem.** Every finite Bayesian game has a Bayesian Nash equilibrium in mixed strategies.

**How the definition helps.** With a common prior, the game becomes an ordinary game with imperfect information in which Nature moves first. So Nash's existence theorem applies, for example by treating each type as a separate player (our own). Without types, players would reason about beliefs about beliefs without end. What stays hard is the common prior itself, which is a strong assumption (our own).

**Wikipedia:** [Bayesian game](https://en.wikipedia.org/wiki/Bayesian_game). It says: “both players are aware of this probability (common prior assumption, which can be converted into a complete-information game with imperfect information).”

**Sources:**

- [J. C. Harsanyi, Games with Incomplete Information Played by 'Bayesian' Players, I–III. Part I. The Basic Model, Management Science 14 (1967), 159–182](https://doi.org/10.1287/mnsc.14.3.159)

### Quasilinear utility lets VCG payments make truth-telling a dominant strategy

**Remember:** Pay each agent everyone else's value, and her interest becomes society's.

*True by definition.* MSC 91B03 (Mechanism design theory), 91B16, 91B26. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** With quasilinear utility, an agent values outcome x and transfer t at vᵢ(x) + t. VCG selects an outcome maximizing total reported value. Each agent receives the others’ total reported value there minus a function of their reports alone.

**Problem.** In every VCG mechanism, reporting one's true values is a dominant strategy, best whatever the others report. The Vickrey second-price auction is a special case.

**How the definition helps.** With others’ reports fixed, the agent maximizes her true value plus their reported values because the subtracted term stays fixed (our own). Reporting truthfully makes the mechanism maximize exactly that sum (our own). In a single-item auction, the pivot payment charges the winner the highest losing bid (our own).

**Wikipedia:** [Vickrey–Clarke–Groves mechanism](https://en.wikipedia.org/wiki/Vickrey%E2%80%93Clarke%E2%80%93Groves_mechanism), [Quasilinear utility](https://en.wikipedia.org/wiki/Quasilinear_utility). It says: “The agent is paid the total value of the other agents; hence, together with its own value, the total welfare of the agent is exactly equal to the total welfare of society.”

**Sources:**

- [W. Vickrey, Counterspeculation, Auctions, and Competitive Sealed Tenders, Journal of Finance 16 (1961), 8–37](https://doi.org/10.1111/j.1540-6261.1961.tb02789.x)
- [T. Groves, Incentives in Teams, Econometrica 41 (1973), 617–631](https://doi.org/10.2307/1914085)
- [E. H. Clarke, Multipart pricing of public goods, Public Choice 11 (1971), 17–33](https://doi.org/10.1007/BF01726210)

### The revelation principle lets designers study only truthful mechanisms

**Remember:** Any equilibrium outcome can be reached by asking people for the truth.

*Makes the theorem clean to state or prove.* MSC 91B03 (Mechanism design theory), 91B14. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A mechanism is a game that a designer sets up to pick an outcome from the players' actions. A social choice function picks an outcome for each list of the players' preferences. A direct mechanism asks each player only to report a preference, and it is incentive-compatible if telling the truth is an equilibrium.

**Problem.** If some mechanism implements a social choice function in dominant strategies or in Bayesian Nash equilibrium, then a direct incentive-compatible mechanism implements it too.

**How the definition helps.** A direct mechanism can run the original equilibrium strategies on the reported types (our own). Any profitable false report would give a profitable deviation in the original mechanism under the same equilibrium criterion (our own). Truth therefore reproduces the original outcome (our own).

**Wikipedia:** [Revelation principle](https://en.wikipedia.org/wiki/Revelation_principle). It says: “By narrowing the area needed to be searched, the problem of finding a mechanism becomes much easier.”

**Sources:**

- [Gibbard, A. (1973). Manipulation of voting schemes: a general result. Econometrica 41(4), 587–601.](https://doi.org/10.2307/1914083)
- [Myerson, R. B. (1979). Incentive compatibility and the bargaining problem. Econometrica 47(1), 61–73.](https://doi.org/10.2307/1912346)

### Certainty equivalents compose

**Remember:** Replace risk with certainty without changing its averaged utility.

*True by definition.* MSC 91B06 (Decision theory). arXiv econ.TH. Level 3: graduate.

**Definition.** Fix a continuous, strictly increasing utility function that assigns a numerical value to each payoff. For a bounded risky payoff, its conditional certainty equivalent is the amount known from current information with the same conditional expected utility.

**Problem.** Compute a certainty equivalent with finer information, then compute its certainty equivalent with coarser information. The result equals the certainty equivalent computed directly with coarser information.

**How the definition helps.** Matching conditional expected utility makes two successive replacements preserve the same average as one replacement (our own). Averaging first with finer information and then with coarser information gives the coarser average directly (our own). Strict increase gives just one amount with this utility (our own). The paper’s representation theorem identifies when an abstract family of consistent evaluations admits a utility description.

**Paper or page:** [On conditioning and consistency for nonlinear functionals](https://arxiv.org/abs/2401.09054v2). It says: “is a family of time consistent conditional nonlinear expectations”

**Sources:**

- [Edoardo Berton, Alessandro Doldi, Marco Maggis. On conditioning and consistency for nonlinear functionals (2024).](https://arxiv.org/abs/2401.09054v2)

### Consumers who always want a bit more make equilibria efficient

**Remember:** Near every bundle of goods there is a slightly better one.

*Makes the theorem clean to state or prove.* MSC 91B08 (Individual preferences), 91B15, 91B50. arXiv econ.TH. Level 3: graduate.

**Definition.** A bundle is a list of amounts of each good. A preference is locally nonsatiated if, for every bundle and every distance ε &gt; 0, there is a strictly preferred bundle within distance ε. In words, near every bundle there is a slightly better one.

**Problem.** The first fundamental theorem of welfare economics: if preferences are locally nonsatiated, every competitive equilibrium allocation is Pareto optimal. Pareto optimal means that no feasible allocation makes someone better off and nobody worse off.

**How the definition helps.** Local nonsatiation makes every weakly preferred bundle cost at least equilibrium expenditure, since a cheaper bundle permits a nearby affordable improvement (our own). A strictly preferred bundle costs strictly more by consumer optimality (our own). A Pareto improvement would therefore increase total expenditure beyond what feasibility and profit maximization allow (our own).

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

### Allocation probabilities determine auction payments

**Remember:** Match the chances of winning and pin down one payment.

*Makes the theorem clean to state or prove.* MSC 91B26 (Auctions, bargaining, bidding and selling, and other market models). arXiv econ.TH. Level 3: graduate.

**Definition.** For each bidder, record the probability of winning at each private value, averaging over the other bidders’ values and any auction randomness. This function summarizes how the auction allocates the item.

**Problem.** Suppose bidders have independent private values on closed intervals and maximize expected value received minus payment. In each auction, truthful reporting maximizes this expectation when others report truthfully. If win probabilities agree at each value and expected payments agree at each bidder’s lowest value, expected payments agree throughout.

**How the definition helps.** The win probability gives the slope of expected surplus, value received minus payment, as the bidder's value varies (our own). Truthful reporting bounds each change in surplus between the endpoint win probabilities times the change in value (our own). Integrating the win probability therefore recovers surplus up to its starting value (our own). Subtracting surplus from value times win probability then gives the expected payment (our own).

**Wikipedia:** [Revenue equivalence](https://en.wikipedia.org/wiki/Revenue_equivalence). It says: “The expected payments of all types are the same in both mechanisms, and hence:”

**Sources:**

- [Roger B. Myerson. Optimal Auction Design (1981).](https://doi.org/10.1287/moor.6.1.58)

### Virtual valuations turn auction revenue into a pointwise objective

**Remember:** Subtract the upper-tail probability divided by density from the bidder’s value.

*Makes the theorem clean to state or prove.* MSC 91B26 (Auctions, bargaining, bidding and selling, and other market models), 91B03. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** For a bidder with distribution function F and positive density f on \[0,b\], the virtual value at v is v − (1 − F(v))/f(v). Virtual surplus equals the winner’s virtual value, or zero without a sale.

**Problem.** Suppose risk-neutral bidders have independent private values and nondecreasing virtual values. Award the item to the highest positive virtual bidder, using fixed tie-breaking and threshold payments. This maximizes expected revenue among truthful auctions giving each lowest-value type nonnegative expected utility.

**How the definition helps.** Myerson’s payment identity gives expected revenue as expected virtual surplus minus the bidders’ expected utilities at their lowest values (our own). The rule maximizes virtual surplus at each bid profile (our own). Fixed tie-breaking preserves monotonicity, and threshold payments implement truthfulness with zero utility at value zero (our own).

**Wikipedia:** [Virtual valuation](https://en.wikipedia.org/wiki/Virtual_valuation). It says: “The expected profit of any truthful mechanism is equal to its expected virtual surplus.”

**Sources:**

- [Roger B. Myerson, Optimal Auction Design, Mathematics of Operations Research 6 (1981) 58–73](https://doi.org/10.1287/moor.6.1.58)

### Equal budgets rule out envy at competitive equilibrium

**Remember:** With the same budget, you could afford anything another buyer chose.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91B50, 91B15. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** In a competitive equilibrium, each buyer chooses a best affordable bundle, and total demand equals total supply. With equal incomes, all buyers face the same prices and have the same budget. An allocation is envy-free if no buyer strictly prefers another buyer’s bundle.

**Problem.** Every competitive equilibrium with equal incomes is envy-free.

**How the definition helps.** Equal budgets make every other buyer's bundle affordable, so choosing a best bundle rules out envy. Our own example with unequal budgets has three units of one divisible good at price one. Two buyers with budgets one and two buy one and two units. If both prefer more of the good, the first buyer envies the second.

**Wikipedia:** [Competitive equilibrium](https://en.wikipedia.org/wiki/Competitive_equilibrium), [Efficient envy-free division](https://en.wikipedia.org/wiki/Efficient_envy-free_division). It says: “Furthermore, by Varian's theorems, a CE allocation in which all agents have the same income is also envy-free.”

**Sources:**

- [Hal R. Varian, Equity, envy, and efficiency, Journal of Economic Theory 9 (1974) 63–91](https://doi.org/10.1016/0022-0531(74)90075-1)

### Strict housing preferences force uniqueness

**Remember:** Give everyone in a top-choice cycle their first choice.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)). arXiv econ.TH. Level 3: graduate.

**Definition.** Each person owns one house and ranks the houses. A group blocks an assignment if it can redistribute its original houses and help someone without hurting any member. The strict core consists of assignments that no group can block.

**Problem.** With finitely many owners and strict rankings, the strict core has exactly one assignment, the one found by top trading cycles. In each round, owners point to the owners of their favorite remaining houses, trade along the resulting cycles, and leave.

**How the definition helps.** Every strict-core assignment must honor each top-choice cycle, since its members could reclaim their favorite houses together (our own). Removing those cycles forces each later round in turn (our own). Conversely, earliest-round members of any proposed block must keep their unique favorites, consuming their cycles’ houses whenever the block preserves their welfare (our own). Removing these cycles successively leaves nobody strictly better off, while two indifferent owners permit both assignments (our own).

**Wikipedia:** [Top trading cycle](https://en.wikipedia.org/wiki/Top_trading_cycle). It says: “Moreover, with strict preferences, there is a unique core-stable allocation, and it is the one found by TTC.”

**Sources:**

- [Lloyd Shapley, Herbert Scarf. On cores and indivisibility (1974).](https://doi.org/10.1016/0304-4068(74)90033-0)
- [Alvin E. Roth, Andrew Postlewaite. Weak versus strong domination in a market with indivisible goods (1977).](https://doi.org/10.1016/0304-4068(77)90004-0)

### Utility weights certify fractional efficiency

**Remember:** Allow every fractional split before testing whether anyone can gain without another losing.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)). arXiv econ.TH. Level 3: graduate.

**Definition.** With additive item values, permit each item to be split into fractions, with value proportional to the fraction. An allocation is fractionally Pareto efficient when no such allocation helps anyone without hurting someone.

**Problem.** An allocation of finitely many goods with additive values is fractionally Pareto efficient exactly when it maximizes a strictly positive weighted sum of utilities.

**How the definition helps.** Fractional splits give a utility polytope, where the polyhedral supporting-weight theorem gives every efficient point strictly positive supporting weights (our own). Any Pareto improvement raises every positively weighted sum (our own). Alice values two goods at 3 and 2, George at 4 and 1, and each initially owns the correspondingly numbered good (our own). No whole-item exchange helps both, but splitting the first equally and giving Alice the second raises both utilities (our own).

**Wikipedia:** [Pareto efficiency](https://en.wikipedia.org/wiki/Pareto_efficiency). It says: “it is not Pareto dominated even by an allocation in which some items are split between agents.”

**Sources:**

- [Siddharth Barman, Sanath Kumar Krishnamurthy, Rohit Vaish. Finding Fair and Efficient Allocations (2018).](https://doi.org/10.1145/3219166.3219176)

### Support functions make profit convex in prices

**Remember:** Linear revenue at each production plan gives convex profit across prices.

*True by definition. Confidence: medium.* MSC 91B38 (Production theory, theory of the firm), 52A41. arXiv econ.TH, math.OC. Level 3: graduate.

**Definition.** A production set Y lists the firm’s feasible net output vectors. At prices p the profit π(p) is the supremum of p·y over y in Y. This is the support function of Y, meaning the supremum of the dot products with p, with no need for a maximizing point.

**Problem.** The profit function is convex and positively homogeneous in prices. If profit-maximizing plans y(p) and y(q) exist, then (p − q)·(y(p) − y(q)) ≥ 0.

**How the definition helps.** The support-function formula makes profit convex because it takes the supremum of linear functions of price. Scaling prices by a positive constant scales that supremum by the same amount. Defining profit through a chosen supply plan would need a maximizer and hide both facts (our own comparison). For the supply inequality, our own check compares the two chosen plans at each price and adds the inequalities.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function), [Hotelling's lemma](https://en.wikipedia.org/wiki/Hotelling%27s_lemma). It says: “It follows directly from its definition that the support function is positive homogeneous”

**Sources:** none listed. No primary source with a working link was found.

### Budget sets show why indirect utility is homogeneous and quasiconvex

**Remember:** Same budget set, same best utility.

*True by definition. Confidence: medium.* MSC 91B42 (Consumer behavior, demand theory), 91B16. arXiv econ.TH. Level 3: graduate.

**Definition.** Indirect utility v(p, w) is the supremum of utility over bundles x with p·x ≤ w. The alternative formula evaluates utility at a demand bundle, one that maximizes utility among affordable bundles.

**Problem.** Scaling prices and income together by a positive number leaves indirect utility unchanged. Indirect utility is quasiconvex in prices and income, so its value at a mixture is at most the larger endpoint value.

**How the definition helps.** The budget-set definition makes scale invariance immediate because joint rescaling leaves every affordability inequality unchanged. Our own quasiconvexity proof uses the fact that a bundle affordable at a mixture is affordable at one endpoint. Otherwise its cost exceeds income at both endpoints, and therefore at the mixture. The demand formula hides this argument and requires an optimizer to exist.

**Wikipedia:** [Indirect utility function](https://en.wikipedia.org/wiki/Indirect_utility_function). It says: “if prices and income are all multiplied by a given constant the same bundle of consumption represents a maximum, so optimal utility does not change”

**Sources:** none listed. No primary source with a working link was found.

### Expenditure slopes give compensated demand

**Remember:** At the minimum, one extra unit of price reveals the quantity.

*True by definition.* MSC 91B42 (Consumer behavior, demand theory). arXiv econ.TH. Level 3: graduate.

**Definition.** For utility u, prices p and target a, expenditure is the infimum of p·x over consumption bundles x satisfying u(x) ≥ a. Compensated demand consists of all bundles attaining that cost.

**Problem.** If expenditure is differentiable at a positive price vector and a minimizing bundle exists, its price gradient equals that bundle.

**How the definition helps.** A minimizing bundle gives a linear function of prices that touches the expenditure function from above (our own). At a point of differentiability their gradients agree, and the linear function has the bundle itself as gradient (our own). This identifies demand directly from minimum cost (our own). Differentiability still needs proof when several bundles compete (our own).

**Wikipedia:** [Shephard's lemma](https://en.wikipedia.org/wiki/Shephard%27s_lemma). It says: “the partial derivatives of the expenditure function with respect to the prices of goods equal the Hicksian demand functions for the relevant goods.”

**Sources:**

- [Lionel McKenzie. Demand Theory Without a Utility Index (1957).](https://doi.org/10.2307/2296067)

### Simulating signals cannot improve decisions

**Remember:** Better data can imitate worse data and then use its strategy.

*True by definition.* MSC 91B44 (Economics of information). arXiv econ.TH. Level 3: graduate.

**Definition.** A finite experiment gives a signal distribution for each hidden state. One experiment garbles another if a single randomized map between signal sets transforms the original distribution into the new one in every state.

**Problem.** If one finite experiment is a garbling of another, the original yields at least as much optimal expected utility in every finite decision problem.

**How the definition helps.** Defining information by signal simulation gives a decision maker an explicit way to copy every strategy using the weaker signal (our own). For each state, the copied strategy gives the same distribution of actions and the same expected payoff (our own). Blackwell’s converse supplies the difficult direction, deriving simulation from payoff comparisons across all decision problems.

**Wikipedia:** [Blackwell's informativeness theorem](https://en.wikipedia.org/wiki/Blackwell%27s_informativeness_theorem). It says: “Intuitively, garbling is a way of adding "noise" to an information structure, such that the garbled information structure is considered to be less informative.”

**Sources:** none listed. No primary source with a working link was found.

### Gross substitutes ensure price equilibria

**Remember:** Raise some prices without driving demand away from unchanged items.

*Makes the theorem clean to state or prove.* MSC 91B50 (General equilibrium theory). arXiv econ.TH. Level 3: graduate.

**Definition.** A buyer’s best bundle maximizes its value minus its total price. A valuation has gross substitutes if the following holds after any price increases. For every formerly best bundle, some new best bundle retains all its items whose prices stayed fixed.

**Problem.** Suppose finitely many buyers have gross substitutes valuations for finitely many distinct goods, and adding goods never lowers value. Some nonnegative item prices let each buyer receive a best bundle, with each unassigned item priced at zero.

**How the definition helps.** Gross substitutes describes the demand response used in the Kelso–Crawford equilibrium existence theorem (our own). Complementary pairs can prevent equilibrium when three buyers each want a different pair of three items and value it at one (our own). A winning pair leaves one free item, so deterring the two losers requires each winning item to cost at least one (our own). With no winning pair, total payments are zero and free pairs attract demand (our own).

**Wikipedia:** [Gross substitutes (indivisible items)](https://en.wikipedia.org/wiki/Gross_substitutes_%28indivisible_items%29). It says: “The GS property means that when the price of some items increases, the demand for other items does not decrease.”

**Sources:**

- [Faruk Gul, Ennio Stacchetti. Walrasian Equilibrium with Gross Substitutes (1999).](https://doi.org/10.1006/jeth.1999.2531)

### Quasi-equilibrium makes the second welfare theorem hold without extra conditions

**Remember:** Supporting prices make every strictly preferred bundle cost at least the assigned wealth.

*Makes the theorem clean to state or prove.* MSC 91B52 (Special types of economic equilibria), 91B15, 91B50. arXiv econ.TH. Level 3: graduate.

**Definition.** A price quasi-equilibrium with transfers is a feasible allocation with nonzero prices at which firms maximize profits and each consumer’s bundle costs their assigned wealth. Every strictly preferred bundle must cost at least that wealth.

**Problem.** Consider a finite-dimensional economy with convex consumption and production sets, convex locally nonsatiated preferences, and nonempty interior of the aggregate production set. Every Pareto-efficient allocation admits a price quasi-equilibrium with transfers.

**How the definition helps.** The definition separates the geometric part of the theorem from the boundary cases. A hyperplane separates the sums of strictly preferred bundles from the feasible total bundles, and it gives the prices. With only convexity and local nonsatiation, these prices support the allocation in the weaker quasi-equilibrium sense. A genuine price equilibrium needs extra conditions, such as a cheaper bundle for each consumer.

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

**Definition.** One integrable real law lies below another in convex order if every convex function integrable under both has no greater expectation under the first. A two-date martingale consists of integrable prices X and Y satisfying E\[Y \| X\] = X almost surely.

**Problem.** Two real price distributions with finite first moments can occur successively in a martingale exactly when the first lies below the second in convex order.

**How the definition helps.** Convex order collects all the inequalities that conditional Jensen’s inequality gives for a martingale. In our own example, equal means alone permit a random first price followed by a constant price. Absolute distance from that constant violates convex order unless the first price is already constant. Strassen’s theorem proves the difficult converse by constructing a joint distribution with the required conditional mean.

**Paper or page:** [Convex Order and Arbitrage](https://arxiv.org/abs/2510.01599v1). It says: “The following are equivalent: The market is free of model-independent arbitrage. $\\mathcal{M}(\\mu ,\\nu ) \\neq \\emptyset $. $\\mu \\preceq \_c \\nu $.”

**Sources:**

- [Convex Order and Arbitrage](https://arxiv.org/abs/2510.01599v1)

### Exchange options become calls

**Remember:** Use the asset you give up as your unit.

*Makes the theorem clean to state or prove.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 3: graduate.

**Definition.** An exchange option lets its holder give one unit of a second asset for one unit of the first at expiry. In units of the second asset, its payoff is the larger of zero and the price ratio minus one.

**Problem.** Assume two dividend-free assets with positive prices follow correlated geometric Brownian motions with constant volatilities and correlation in a frictionless Black–Scholes market. The exchange option costs as much, in second-asset units, as a call on their ratio with exercise price one.

**How the definition helps.** Dividing by the asset to be delivered makes the exercise price constant (our own). The change of pricing unit gives a probability under which the ratio has zero expected instantaneous change (our own). Its logarithm has normally distributed increments with variance computed from both volatilities and their correlation (our own). The ordinary call formula then prices the exchange (our own).

**Wikipedia:** [Margrabe's formula](https://en.wikipedia.org/wiki/Margrabe%27s_formula). It says: “has become a call option on the first asset (with its numeraire pricing) with a strike of 1 unit of the riskless asset.”

**Sources:**

- [William Margrabe. The Value of an Option to Exchange One Asset for Another (1978).](https://doi.org/10.1111/j.1540-6261.1978.tb03397.x)

### Geometric averaging makes averages lognormal

**Remember:** Logarithms turn the nth root of a product into an average of logs.

*True by definition.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 3: graduate.

**Definition.** For positive prices S₁,…,Sₙ at n fixed dates, their geometric average is the positive nth root of S₁⋯Sₙ.

**Problem.** Assume the stock’s log price follows Brownian motion with constant drift and volatility under the pricing probability, with a constant interest rate. Then the geometric average at fixed dates is lognormal, meaning its logarithm is normally distributed.

**How the definition helps.** Taking the logarithm turns the geometric average into an arithmetic average of jointly normal log prices (our own). Their average is normal, with mean and variance determined by the observation dates (our own). For a call, average the excess above the agreed exercise price, counting negative excess as zero, and discount to today (our own).

**Wikipedia:** [Asian option](https://en.wikipedia.org/wiki/Asian_option). It says: “However, an exact result is easily obtained for Asian options with geometric averaging”

**Sources:**

- [A.G.Z. Kemna, A.C.F. Vorst. A pricing method for options based on average asset values (1990).](https://doi.org/10.1016/0378-4266(90)90039-5)

### Changing units preserves martingale pricing

**Remember:** Change the unit and reweight by the same asset.

*True by definition.* MSC 91G30 (Interest rates, asset pricing, etc. (stochastic models)). arXiv q-fin.PR. Level 3: graduate.

**Definition.** Use a strictly positive traded asset with a known initial price as the unit for quoting all prices. Discounting a price means dividing it by the value of the bank account. Weight each outcome by the new unit’s final discounted price divided by its initial discounted price.

**Problem.** Consider assets paying no dividends over a fixed finite horizon. Suppose each discounted price, including the new unit’s, equals its expected future value given current information. Under the reweighted probability, prices expressed in the new unit have the same property.

**How the definition helps.** The weight used in the conditional average cancels the asset used as the unit (our own). Applying the original conditional pricing identities to the numerator and denominator gives today’s price ratio (our own). The original pricing probability must exist, and the discounted unit must have constant expectation for its weight to define a probability (our own).

**Wikipedia:** [Numéraire](https://en.wikipedia.org/wiki/Num%C3%A9raire). It says: “Then it can be shown that S(t) is a martingale under Qᴺ when priced in terms of the new numéraire N(t):”

**Sources:**

- [Hélyette Geman, Nicole El Karoui, Jean-Charles Rochet. Changes of numéraire, changes of probability measure and option pricing (1995).](https://doi.org/10.2307/3215299)

### Convex acceptance makes capital convex

**Remember:** Mix acceptable positions and mix their cash cushions in the same proportions.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** An acceptance set lists safe financial positions and stays acceptable when a payoff increases. The capital required for a position is the infimum of the cash deposits that make it safe. A negative deposit means a withdrawal.

**Problem.** Assume the capital requirement is finite for every position. A convex acceptance set gives a convex capital requirement.

**How the definition helps.** Our own proof mixes the deposits in the same proportions as the positions, and convexity keeps the mixed position safe. Taking deposits arbitrarily close to their infima gives the convexity inequality for capital. Starting from a capital formula would require checking that inequality for every pair of positions. Here the work lies in checking which mixtures the safety rule accepts.

**Paper or page:** [A note on the induction of comonotonic additive risk measures from acceptance sets](https://arxiv.org/abs/2307.04647v2). It says: “If A is convex, then ρₐ is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Firm tails bound systemic exposure

**Remember:** A market crash need not select a firm’s worst losses.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** Fix a tail fraction t strictly between zero and one, with integrable losses and continuous firm and market loss distributions. Marginal expected shortfall averages firm loss over the market’s worst fraction t. Firm expected shortfall averages firm loss over its own worst fraction t.

**Problem.** A firm’s marginal expected shortfall cannot exceed its own expected shortfall. The bound is sharp when all losses increase with the same uniform random variable.

**How the definition helps.** The event selected by total market loss is one candidate in the maximum defining the firm’s expected shortfall (our own). If every firm’s loss increases with the same uniform random draw, the market and firm select the same tail. The work lies in proving that the usual tail average equals the maximum over events (our own).

**Paper or page:** [Static marginal expected shortfall: Systemic risk measurement under dependence uncertainty](https://arxiv.org/abs/2504.19953v2), [An elementary proof of the dual representation of Expected Shortfall](https://arxiv.org/abs/2306.14506v1). It says: “The upper bound of MESₚ(Xᵢ, S) is M(p) = ESₚ(Xᵢ).”

**Sources:**

- [Jinghui Chen, Edward Furman, X. Sheldon Lin. Static marginal expected shortfall: Systemic risk measurement under dependence uncertainty (2025).](https://arxiv.org/abs/2504.19953v2)

### Independent entropic risks add

**Remember:** Independence multiplies exponential averages, and the log adds them.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** For risk aversion a &gt; 0, entropic risk assigns a loss X the sure loss with the same expected exponential disutility. Equating disutilities gives exp(a times sure loss) = E\[exp(aX)\], where E means expectation. Equivalently, entropic risk is ln(E\[exp(aX)\])/a.

**Problem.** Entropic risk adds across independent losses when both use the same parameter and their exponential moments are finite.

**How the definition helps.** The logarithm formula turns independent losses into an addition rule (our own). Independence makes the expected exponential of the sum the product of the two expected exponentials (our own). The logarithm adds their risks (our own). The conversion from the preference definition consists of solving the equal-disutility equation for the sure loss (our own).

**Wikipedia:** [Entropic risk measure](https://en.wikipedia.org/wiki/Entropic_risk_measure). It says: “the entropic risk measure is a risk measure which depends on the risk aversion of the user through the exponential utility function.”

**Sources:** none listed. No primary source with a working link was found.

### Quantile averages handle tail ties

**Remember:** Take exactly the chosen probability mass, splitting ties at the cutoff.

*Rules out counterexamples.* MSC 91G70 (Statistical methods; risk measures), 90C15. arXiv q-fin.RM, math.OC. Level 3: graduate.

**Definition.** At probability p between zero and one, the loss quantile is the smallest value with cumulative probability at least p. For a tail fraction t strictly between zero and one, define expected shortfall as the average quantile over levels between 1 − t and one.

**Problem.** For an integrable loss X and tail fraction t, expected shortfall equals the minimum over real thresholds c of c + E\[max(X − c, 0)\]/t.

**How the definition helps.** Write q for the cutoff quantile and U for a uniform draw on (0,1), so Q(U) has the loss distribution (our own). For any c, max(Q(U) − c,0) dominates (Q(U) − c) times the indicator of U &gt; 1 − t (our own). Averaging gives the claimed bound, with equality at c = q even with ties (our own). A loss of 100 with probability 0.05 and zero otherwise averages 50 in its upper tenth, despite averaging 100 above zero (our own).

**Paper or page:** [Risk-Adaptive Approaches to Stochastic Optimization: A Survey](https://arxiv.org/abs/2212.00856v3). It says: “expectation of the α-tail distribution of ξ”

**Sources:**

- [Johannes O. Royset, Risk-Adaptive Approaches to Stochastic Optimization: A Survey](https://arxiv.org/abs/2212.00856v3)

### Scaled tail risk is concave

**Remember:** Scale out the tail probability and minimize lines.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** For an integrable loss Y, expected shortfall averages its quantiles from probability β to one, where 0 &lt; β &lt; 1. Equivalently, minimize t + E\[max(Y − t, 0)\]/(1 − β) over real thresholds t. Here E denotes expectation.

**Problem.** Multiplying expected shortfall by 1 − β gives a concave function of β for each fixed loss.

**How the definition helps.** The threshold formula expresses scaled expected shortfall as the infimum of lines in β (our own). Each line has value (1 − β)t + E\[max(Y − t, 0)\] at β (our own). An infimum of affine functions is concave (our own). The work lies in proving that threshold minimization gives the same value as the quantile average (our own).

**Paper or page:** [Higher order measures of risk and stochastic dominance](https://arxiv.org/abs/2402.15387v1). It says: “For Y fixed in the domain of ℛ, the mapping β ↦ (1 − β) · ℛᵦ(Y) is concave.”

**Sources:**

- [Alois Pichler. Higher order measures of risk and stochastic dominance (2024).](https://arxiv.org/abs/2402.15387v1)

### Worst-case averages make expected shortfall subadditive

**Remember:** The worst average of a sum cannot exceed the sum of the worst averages.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** Fix a tail fraction 0 &lt; α &lt; 1. Expected shortfall averages the worst α fraction of losses, using just enough mass at a tied cutoff. Equivalently, it maximizes E\[ZX\] over random weights Z satisfying 0 ≤ Z ≤ 1/α and E\[Z\] = 1 for loss X.

**Problem.** For two integrable losses, expected shortfall of their sum is at most the sum of their expected shortfalls.

**How the definition helps.** Our own proof uses the same weights for both losses, so their weighted averages add, and each average is at most its separate maximum. The representation theorem shows that this maximum equals the tail average. In our own example, two independent losses each equal one with probability 4% and zero otherwise. Each has a 95th percentile of zero, but their sum has a 95th percentile of one.

**Wikipedia:** [Value at risk](https://en.wikipedia.org/wiki/Value_at_risk). It says: “VaR of a combined portfolio can be larger than the sum of the VaRs of its components.”

**Paper or page:** [An elementary proof of the dual representation of Expected Shortfall](https://arxiv.org/abs/2306.14506v1). It says: “In particular, ESα is subadditive, i.e., for all X,Y ∈ L¹, ESα(X + Y) ≤ ESα(X) + ESα(Y).”

**Sources:**

- [Herdegen and Munari, An elementary proof of the dual representation of Expected Shortfall (2023)](https://doi.org/10.1007/s11579-023-00346-8)

### Minimax holds in all subgames exactly when no infinite triangular subgame exists

**Remember:** Without an infinite larger-number pattern, every subgame has a minimax value.

*Makes the theorem clean to state or prove.* MSC 91A05 (2-person games), 68Q32. arXiv cs.LG, cs.GT. Level 4: research.

**Definition.** A subgame of a binary zero-sum game restricts each player to a nonempty subset of actions. An infinite triangular subgame has distinct rows aᵢ and distinct columns bⱼ indexed by positive integers. Its payoff is one for i &lt; j and zero otherwise, or the reverse throughout.

**Problem.** Take a binary game whose payoff functions have finite Vapnik–Chervonenkis dimension. Every subgame then has equal upper and lower values exactly when there is no infinite triangular subgame. This stays true even with mixed strategies of finite support.

**How the definition helps.** The definition names the one pattern that breaks minimax, so the theorem can say it is the only obstruction. In the larger-number game, each player can beat any fixed mixed strategy of the other with probability close to one. So its upper value is 1 and its lower value is 0 (Proposition 10 of the paper). The hard direction is the converse, which uses the finite dimension to handle infinitely many actions.

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

### Random partitions with the right block odds give the Shapley potential

**Remember:** Average the total worth of the groups in a random split.

*Makes the theorem clean to state or prove.* MSC 91A14 (Potential and congestion games), 91A12, 05A18. arXiv econ.TH. Level 4: research.

**Definition.** For finite cooperative games with empty-coalition worth zero, the potential assigns zero to the empty game. Removing any player decreases the potential by that player's Shapley value. A random partition draws disjoint nonempty coalitions covering the player set.

**Problem.** Fix a random partition of n players. Its expected total block worth equals the potential for every game exactly when each nonempty coalition of size t has block probability (t−1)!(n−t)!/n!.

**How the definition helps.** Each coalition’s coefficient in expected total worth is its block probability (our own). The Shapley potential formula gives coefficient (t−1)!(n−t)!/n! for a coalition of size t (our own). Equality for every worth function therefore requires and suffices for matching coefficients (our own).

**Paper or page:** [Random partitions, potential, value, and externalities](https://arxiv.org/abs/2402.00394v2). It says: “the expected accumulated worth of a random partition of the players.”

**Sources:**

- [André Casajus, Yukihiko Funaki, Frank Huettner, Random partitions, potential, value, and externalities, arXiv:2402.00394v2 (2024)](https://arxiv.org/abs/2402.00394v2)

### Discounting past and future rewards multiplies game values by 1/(1 − γλ)

**Remember:** Two geometric discounts in a row only rescale the payoff.

*True by definition.* MSC 91A15 (Stochastic games, stochastic differential games), 91A50. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Past discounting with factor γ replaces the reward at step n by the sum of γⁿ⁻ᵏ rₖ over all steps k ≤ n. Future discounting with factor λ then scores a play by the sum of λⁿ times these new rewards.

**Problem.** Consider a stochastic game with bounded rewards and discount factors γ and λ in \[0,1). Its value with both discounts equals its ordinary λ-discounted value divided by 1 − γλ.

**How the definition helps.** Bounded rewards and geometric discounting permit us to exchange the sums by absolute convergence (our own). The reward at step k then receives total weight λᵏ times the geometric sum with ratio γλ (our own). This scales every play’s payoff and hence the game value by 1/(1 − γλ) (our own).

**Paper or page:** [Discounting the Past](https://arxiv.org/abs/2102.06985v2). It says: “the values of these games may be computed via reductions to standard discounted and mean-payoff games.”

**Sources:**

- [Taylor Dohmen, Ashutosh Trivedi, Discounting the Past, arXiv:2102.06985v2 (2021)](https://arxiv.org/abs/2102.06985v2)

### Low swap regret makes play an approximate correlated equilibrium

**Remember:** No regret for any swap is the equilibrium condition, averaged over time.

*True by definition.* MSC 91A26 (Rationality and learning in game theory), 91A10, 68Q32. arXiv cs.GT, cs.LG. Level 4: research.

**Definition.** A swap rule maps each of a player's actions to a replacement action. Swap regret is the largest cumulative payoff gain from applying one rule to every recorded round while keeping opponents’ actions fixed. A joint distribution is an ε-correlated equilibrium if every player's expected gain from each such rule is at most ε.

**Problem.** If each player has swap regret at most R(T) in T rounds, the recorded actions, sampled uniformly, form an R(T)/T-approximate correlated equilibrium.

**How the definition helps.** The rule-based definition turns the equilibrium error into swap regret divided by the number of rounds. Here the error is the greatest expected gain from any one replacement rule. The usual exact test checks one recommended action and one replacement at a time; the rule-based test groups these changes to match the regret bound (our own comparison). The hard part is finding algorithms that keep swap regret small.

**Paper or page:** [Fast swap regret minimization and applications to approximate correlated equilibria](https://arxiv.org/abs/2310.19647v2). It says: “If an m-player normal-form game is played repeatedly for T days, and each player incurs no more than R(T) swap regret over the T days, then the empirical distribution of the joint actions by the players is an R(T)/T-correlated equilibrium.”

**Sources:**

- [Binghui Peng and Aviad Rubinstein, Fast swap regret minimization and applications to approximate correlated equilibria, arXiv 2310.19647](https://arxiv.org/abs/2310.19647v2)

### Monotone rationality makes elimination order-preserving, so Tarski's fixed-point theorem applies

**Remember:** A monotone test keeps its order through every stage, even limit stages.

*Makes the theorem clean to state or prove.* MSC 91A26 (Rationality and learning in game theory), 91A44, 03B42. arXiv econ.TH. Level 4: research.

**Definition.** A rationality notion says when a player's strategy is acceptable, given which strategies remain available. It is monotone if a strategy acceptable in a smaller restriction of the game stays acceptable in any larger one. Iterated elimination repeatedly deletes unacceptable strategies and takes intersections at limit stages.

**Problem.** In any strategic game, finite or infinite, common knowledge of a monotone rationality notion implies that players choose only strategies that survive the elimination for that notion. The elimination may need transfinitely many steps.

**How the definition helps.** On a common-knowledge event, each player's possible opponents’ actions lie within the strategies represented there (our own). Rationality and monotonicity therefore keep every represented strategy acceptable within that restriction (our own). Tarski’s theorem places this restriction inside the greatest fixed point, obtained by transfinite elimination from the full game (our own).

**Paper or page:** [The Role of Monotonicity in the Epistemic Analysis of Strategic Games](https://arxiv.org/abs/1010.5595v2). It says: “We establish a general theorem that deals with monotonic rationality notions and arbitrary strategic games and allows to strengthen the above result to arbitrary games, other rationality notions, and transfinite iterations of the elimination process.”

**Sources:**

- [Krzysztof R. Apt, Jonathan A. Zvesper, The Role of Monotonicity in the Epistemic Analysis of Strategic Games, arXiv:1010.5595v2 (2010); Games 2010, 1(4), 381-394; see http://www.mdpi.com/2073-4336/1/4/381/](https://arxiv.org/abs/1010.5595v2)

### Onto belief maps let a type structure represent all conditional belief hierarchies

**Remember:** Give every possible belief a type, and every belief hierarchy appears.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91A27 (Games with incomplete information, Bayesian games), 91A44, 91B44. arXiv econ.TH. Level 4: research.

**Definition.** A type structure models beliefs: each type of a player has a conditional probability system over the basic uncertainty and the other players' types. A conditional probability system gives one belief for each event in a fixed family of conditioning events, linked by Bayes' rule. The structure is complete if every such system is the belief of some type, so the belief maps are onto.

**Problem.** A complete type structure that is compact and has continuous belief maps represents all hierarchies of conditional beliefs; the paper calls this terminal. A complete Souslin structure satisfies a weaker finite version. Souslin is a mild regularity condition on the spaces.

**How the definition helps.** Completeness is a condition on the type structure alone, so one can check it without writing down infinite belief hierarchies. Our own explanation is that onto belief maps supply a type for every belief needed at each finite level of a hierarchy. Passing from all finite levels to whole hierarchies is where compactness and continuity enter. The result extends Friedenberg's 2010 theorem to conditional beliefs.

**Paper or page:** [Complete Conditional Type Structures (Extended Abstract)](https://arxiv.org/abs/2307.05630v1). It says: “We provide sufficient conditions under which a complete type structure represents all hierarchies of conditional beliefs.”

**Sources:**

- [Nicodemo De Vito, Complete Conditional Type Structures (Extended Abstract), arXiv:2307.05630v1 (2023); EPTCS 379, 2023, pp. 173-184](https://arxiv.org/abs/2307.05630v1)

### Credibility with fixed message frequencies is tested by cyclical monotonicity

**Remember:** Fix how often each message is sent, then check that no swap pays.

*Makes the theorem clean to state or prove.* MSC 91A28 (Signaling and communication in game theory), 91B44. arXiv econ.TH. Level 4: research.

**Definition.** In Bayesian persuasion, a sender commits to a rule that sends messages depending on the state, and a receiver acts on each message. The rule is credible if the sender cannot gain by changing which states send which messages while keeping each message's overall frequency. A distribution over state–action pairs is cyclically monotone if no cyclic swap of actions among pairs in its support raises the sender's total payoff.

**Problem.** In the paper's finite model, a disclosure rule is credible exactly when its distribution over states and actions is cyclically monotone for the sender's payoff.

**How the definition helps.** Keeping message frequencies fixed turns the sender's deviations into couplings with fixed marginals, the objects of optimal transport. A coupling is a joint distribution with given marginal distributions. So credibility says that the current coupling of states and messages already maximizes the sender's expected payoff. The paper's Lemma 2 is the classical fact that, on finite sets, a coupling is optimal exactly when its support is cyclically monotone.

**Paper or page:** [Credible Persuasion](https://arxiv.org/abs/2205.03495v1). It says: “We show that the credibility of a disclosure policy is equivalent to a cyclical monotonicity condition on its induced distribution over states and actions.”

**Sources:**

- [Xiao Lin, Ce Liu, Credible Persuasion, arXiv:2205.03495v1 (2022)](https://arxiv.org/abs/2205.03495v1)

### Smoothness gives a short price of anarchy bound

**Remember:** Bound total unilateral switching costs by weighted target and starting costs.

*True by definition.* MSC 91A68 (Algorithmic game theory and complexity), 91A10. arXiv cs.GT. Level 4: research.

**Definition.** Let C(a) be the total cost of all players at outcome a. A game is (λ, μ)-smooth, with λ ≥ 0 and μ &lt; 1, if for every pair of outcomes a and b the following holds. The sum over players i of i's cost when i alone switches from aᵢ to bᵢ is at most λC(b) + μC(a).

**Problem.** In a (λ, μ)-smooth game with positive optimal cost, every pure Nash equilibrium costs at most λ/(1 − μ) times the optimum. So the price of anarchy for pure equilibria is at most λ/(1 − μ).

**How the definition helps.** Smoothness gives exactly the bound on individual switching costs that the equilibrium proof needs. Let b be optimal and a an equilibrium; then C(a) is at most the sum of the costs of switching alone toward b. Smoothness bounds this sum by λC(b) + μC(a), and rearranging gives the bound. The work now lies in proving a useful smoothness inequality for the class of games.

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

### A prior must average the player's beliefs to avoid money pumps

**Remember:** A prior must reproduce the beliefs when it averages them.

*Rules out counterexamples. Confidence: medium.* MSC 91B06 (Decision theory), 91B44, 91A27. arXiv econ.TH. Level 4: research.

**Definition.** Let B be the finite family of a player's posterior distributions on a finite state space. A distribution p is disintegrable if it is a convex combination of members of B. It is a money pump if some real payoff has nonnegative expectation under every member of B and negative expectation under p.

**Problem.** For one player with finitely many states, every distribution is either disintegrable or a money pump, and never both.

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

### An allocation that is envy-free up to one item always exists

**Remember:** EF1 forgives the envy that one item can cause.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91A68. arXiv cs.GT, econ.TH. Level 4: research.

**Definition.** An allocation partitions finitely many indivisible goods among finitely many agents. For each ordered pair A,B, A must weakly prefer her bundle to B’s after removing at most one good from B’s bundle. An allocation satisfying this condition is envy-free up to one item.

**Problem.** For indivisible goods and monotone utilities, an allocation of all items that is EF1 always exists, although an envy-free one need not.

**How the definition helps.** When two agents strictly want the only good, exact envy-freeness fails, but removing that good resolves the comparison (our own). The envy-cycle elimination algorithm proves existence for monotone utilities by preserving this one-good bound as it allocates each remaining good (our own).

**Wikipedia:** [Envy-free item allocation](https://en.wikipedia.org/wiki/Envy-free_item_allocation). It says: “An EF1 allocation always exists and can be found efficiently by various procedures”

**Sources:**

- [Lipton, R. J.; Markakis, E.; Mossel, E.; Saberi, A. (2004). On approximately fair allocations of indivisible goods. Proc. 5th ACM Conference on Electronic Commerce, 125–131.](https://doi.org/10.1145/988772.988792)
- [Budish, E. (2011). The combinatorial assignment problem: approximate competitive equilibrium from equal incomes. Journal of Political Economy 119(6), 1061–1103.](https://doi.org/10.1086/664613)

### Judging envy in expectation makes envy-free efficient lotteries always exist

**Remember:** Fairness before the draw can hold when fairness after the draw cannot.

*Makes the theorem clean to state or prove.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91B15. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** An allocation lottery is a probability distribution over the allowed allocations of indivisible items. It is ex-ante envy-free if each agent's expected value for her own bundle is at least her expected value for any other agent's bundle.

**Problem.** In the finite fair-division model with feasible allocations closed under exchanges of agents’ bundles, some allocation lottery is ex-ante envy-free and Pareto optimal. No other lottery can improve anyone’s expected utility without lowering someone else’s. A deterministic envy-free allocation need not exist.

**How the definition helps.** Judging envy in expectation lets an existence theorem hold where every deterministic allocation causes envy. In our own example, two people both want one indivisible item, and a fair coin gives both the same expected value. The general existence theorem is a real result, due to Cole and Tao. This paper shows that finding such a lottery lies in PPAD, a class of problems solved by fixed-point style arguments.

**Paper or page:** [On the complexity of Pareto-optimal and envy-free lotteries](https://arxiv.org/abs/2307.12605v1). It says: “Cole and Tao (2021) have proved that an ex-ante envy-free and Pareto-optimal allocation lottery is always guaranteed to exist.”

**Sources:**

- [Ioannis Caragiannis, Kristoffer Arnsfelt Hansen, Nidhi Rathi, On the complexity of Pareto-optimal and envy-free lotteries, arXiv:2307.12605v1 (2023)](https://arxiv.org/abs/2307.12605v1)

### One allocation gives every agent half of any feasible fair share

**Remember:** A feasible rule sets individual targets that everyone can receive when using that rule.

*Makes the theorem clean to state or prove.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91A68. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Agents divide indivisible goods and have entitlements, which are weights that sum to 1. A share rule maps an agent’s valuation and entitlement to a minimum value she should get. A share rule is feasible if every instance has an allocation that gives every agent at least her share.

**Problem.** Agents value bundles additively, and each agent may pick a different feasible share rule. Some allocation gives every agent at least half her chosen share. The factor one half cannot be improved in general.

**How the definition helps.** Feasibility compares all share rules using the same guarantee when everyone uses one rule (our own). The quoted half-share theorem supplies a common allocation even when the selected rules differ. Its matching upper bound requires a separate worst-case instance (our own).

**Paper or page:** [Share-Based Fairness for Arbitrary Entitlements](https://arxiv.org/abs/2405.14575v1). It says: “there is an allocation that gives every agent at least half her share value, regardless of which feasible share-based fairness notion the agent wishes to use.”

**Sources:**

- [Moshe Babaioff, Uriel Feige, Share-Based Fairness for Arbitrary Entitlements, arXiv:2405.14575v1 (2024)](https://arxiv.org/abs/2405.14575v1)

### Posterior messages preserve feasible beliefs

**Remember:** Tell each player the probability their old signal implied.

*True by definition.* MSC 91B44 (Economics of information), 91A27. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Given a common prior and private signals, a player's posterior is the conditional probability of winning given their signal. A signal is direct if its numerical value equals that posterior almost surely.

**Problem.** Any joint distribution of posterior winning probabilities obtainable from private signals is also obtainable from direct signals under the same prior.

**How the definition helps.** Our own proof replaces each arbitrary signal by the winning probability it implies, preserving the whole vector of reported probabilities. Averaging the old conditional probability given its reported value returns that same value. Each report is therefore still the receiver’s winning probability. The work lies in deciding which joint distributions any signals could generate.

**Paper or page:** [A Belief-Based Characterization of Reduced-Form Auctions](https://arxiv.org/abs/2307.04070v1). It says: “then there exists a direct information structure I such that ν is p₀-feasible for I.”

**Sources:**

- [A Belief-Based Characterization of Reduced-Form Auctions](https://arxiv.org/abs/2307.04070v1)

### Unbiased statistics elicit posterior means

**Remember:** Score the report against a signal with the right mean.

*True by definition.* MSC 91B44 (Economics of information). arXiv econ.TH. Level 4: research.

**Definition.** For hidden state θ and target g(θ), an analyst’s posterior mean is the expected target given their information. Given θ, the verifier’s signal Y is independent of that information. A statistic h(Y) is unbiased if its conditional mean in each possible state θ equals g(θ).

**Problem.** For finite states and signals, an unbiased statistic lets a verifier reward a risk-neutral analyst for reporting the posterior mean. A risk-neutral analyst maximizes expected payment.

**How the definition helps.** Unbiasedness makes the expected statistic given the analyst’s information equal the posterior mean (our own). Pay twice the report times the statistic minus the square of the report (our own). The expected payment is a quadratic uniquely maximized at the posterior mean (our own).

**Paper or page:** [Elicitability](https://arxiv.org/abs/2510.00879v1). It says: “then the mean of g(θ) is elicitable with (Y, π).”

**Sources:**

- [Yaron Azrieli, Christopher Chambers, Paul Healy, Nicolas Lambert. Elicitability (2025).](https://arxiv.org/abs/2510.00879v1)

### Saturated agent spaces make fractional and ordinary coalitions block the same allocations

**Remember:** On every positive-measure part, countably many functions cannot approximate all integrable functions.

*Makes the theorem clean to state or prove.* MSC 91B50 (General equilibrium theory), 91A12, 28B05. arXiv econ.TH. Level 4: research.

**Definition.** An agent measure space is saturated if L¹ on every measurable set of positive measure has no countable norm-dense subset. Ordinary blocking uses a coalition’s members at full weight. Fuzzy blocking permits measurable participation weights in \[0,1\], positive on a set of positive measure, in the coalition’s aggregate trade.

**Problem.** If the measure space of agents is saturated, the core equals the fuzzy core, with commodities in any Banach space and minimal assumptions on preferences.

**How the definition helps.** Saturation permits exact Lyapunov purification of the integrals in a fuzzy block (our own). Include participation mass alongside net trades to obtain a positive-measure ordinary blocking coalition with the same totals (our own). Conversely, an ordinary coalition’s indicator supplies fuzzy participation weights (our own).

**Paper or page:** [Fuzzy Core Equivalence in Large Economies: A Role for the Infinite-Dimensional Lyapunov Theorem](https://arxiv.org/abs/2112.15539v1). It says: “Due to the exact version of the Lyapunov convexity theorem in Banach spaces, we clarify that the additional structure of commodity spaces and preferences is unnecessary whenever the measure space of agents is "saturated".”

**Sources:**

- [M. Ali Khan, Nobusumi Sagara, Fuzzy Core Equivalence in Large Economies: A Role for the Infinite-Dimensional Lyapunov Theorem, arXiv:2112.15539v1 (2021)](https://arxiv.org/abs/2112.15539v1)

### One blocking rule for pairs and coalitions equates strong core and stability

**Remember:** Allow ties in both tests, but always require someone to gain.

*Makes the theorem clean to state or prove.* MSC 91B68 (Matching models), 91A12. arXiv econ.TH. Level 4: research.

**Definition.** A coalition strongly blocks a matching if a feasible internal rematching weakly benefits all members and strictly benefits at least one. The strong core excludes every such block. Strong stability requires individual rationality and excludes every feasible worker–firm deviation satisfying the same improvement test.

**Problem.** For many-to-one matching with responsive preferences and possible ties, the strong core equals the set of strongly stable matchings.

**How the definition helps.** Applying the same weak-improvement, strict-gain test to pairs and to coalitions lets the two sets be compared directly. Our own explanation: a pair is a coalition, so every matching in the strong core is strongly stable. The reverse inclusion needs a blocking pair to be found inside any blocking coalition. For the ordinary notions, the abstract states only that the core contains the stable set.

**Paper or page:** [Core and stability notions in many-to-one matching markets with indifferences](https://arxiv.org/abs/2203.16293v1). It says: “the strong core coincides with the strongly stable set”

**Sources:**

- [Agustín G. Bonifacio, Noelia Juarez, Pablo Neme, Jorge Oviedo, Core and stability notions in many-to-one matching markets with indifferences, arXiv:2203.16293v1 (2022)](https://arxiv.org/abs/2203.16293v1)

### Quasi-stability permits repair by iteration

**Remember:** Allow blocks from unemployed workers while the matching is being repaired.

*Makes the theorem clean to state or prove.* MSC 91B68 (Matching models). arXiv econ.TH. Level 4: research.

**Definition.** A worker and firm block a matching if the worker prefers the firm and the firm would choose the worker from its enlarged staff. A stable matching has no such pair, and each participant accepts their assignment. A worker-quasi-stable matching has acceptable assignments, and only unemployed workers may be in blocking pairs.

**Problem.** Assume finitely many workers and firms, strict preferences, and substitutable firm choices. The paper's repair round maps worker-quasi-stable matchings to worker-quasi-stable matchings, and its fixed points are exactly the stable matchings.

**How the definition helps.** The restriction on blocking pairs identifies all workers who can start a repair (our own explanation). Each unemployed worker with a blocking firm applies to their favorite such firm, and firms choose from applicants and current workers. The hard step proves that no employed worker can block after the round. The paper shows that the rounds improve the matching in the firms' ordering until it becomes stable.

**Paper or page:** [The lattice of worker-quasi-stable matchings](https://arxiv.org/abs/2103.16330v4). It says: “T(μ) = μ if and only if μ is stable.”

**Sources:**

- [Bonifacio, Guiñazú, Juarez, Neme and Oviedo, The lattice of worker-quasi-stable matchings (2022)](https://doi.org/10.1016/j.geb.2022.06.004)

### Vote-margin edge weights turn popularity into one maximum-weight matching test

**Remember:** A rival matching's total weight is its vote margin against M.

*True by definition.* MSC 91B68 (Matching models), 05C70, 90C27. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** A matching M is popular if no rival wins more votes in their pairwise comparison. Each vertex scores its proposed partner +1, 0 or −1 according to preference over its partner in M, ranking unmatched below acceptable partners. Each matched edge sums its endpoints’ scores, and an unmatched vertex contributes its single score through a self-loop.

**Problem.** With strict preferences on both sides and incomplete lists, M is popular exactly when it is a maximum-weight matching for these weights. This test is due to Biró, Irving and Manlove (2010). The paper derives the separate graph-structural tests for popularity from it, and back.

**How the definition helps.** Every completed matching, including its unmatched self-loops, counts each vertex's vote exactly once (our own). Its weight is therefore its vote margin against M, whose own weight is zero (our own). A maximum-weight completed matching tests popularity, and the paper connects this optimization to graph-structural tests.

**Paper or page:** [On the Equivalence of the Graph-Structural and Optimization-Based Characterizations of Popular Matchings](https://arxiv.org/abs/2508.00349v1). It says: “an optimization-based characterization described by maximum-weight matchings.”

**Sources:**

- [Yuga Kanaya, Kenjiro Takazawa, On the Equivalence of the Graph-Structural and Optimization-Based Characterizations of Popular Matchings, arXiv:2508.00349v1 (2025)](https://arxiv.org/abs/2508.00349v1)
- [Péter Biró, Robert W. Irving, David F. Manlove, Popular Matchings in the Marriage and Roommates Problems, Algorithms and Complexity (CIAC 2010), Lecture Notes in Computer Science 6078 (2010), 97-108](https://doi.org/10.1007/978-3-642-13073-1_10)

### Linear portfolio rules make mean–variance optimization quadratic

**Remember:** Affine returns give linear means and quadratic variances.

*True by definition.* MSC 91G10 (Portfolio theory), 90C20. arXiv q-fin.PM, math.OC. Level 4: research.

**Definition.** An affine portfolio rule has weights w₀(h) + ∑ⱼ θⱼwⱼ(h) at each observed history h. The baseline weights sum to one and each adjustment vector sums to zero. The coefficients θⱼ are the decision variables.

**Problem.** Assume the return terms have finite second moments. Minimizing return variance minus a nonnegative multiple of expected return gives a convex quadratic problem in the coefficients.

**How the definition helps.** The restricted portfolio definition makes the next return affine in the coefficients, even when the signals depend nonlinearly on past prices. In our own calculation, its expectation is affine and its variance is quadratic. The covariance matrix gives the quadratic term and is positive semidefinite. The work lies in constructing this representation for the trading rules.

**Paper or page:** [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3). It says: “the following two optimization problems are convex quadratic optimization problems”

**Sources:**

- [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3)

### Wealth-weighted portfolios add their wealth

**Remember:** Combine the accounts by current size, not by their starting shares.

*True by definition.* MSC 91G10 (Portfolio theory). arXiv q-fin.PM. Level 4: research.

**Definition.** Split one unit of initial wealth into nonnegative shares summing to one. Each account follows a strategy that funds trades from its own holdings. While total wealth is positive, weight each account’s asset mix by its current share of total wealth.

**Problem.** Under the paper’s continuous-time trading assumptions, this mix funds its own trades. On each price path its wealth equals the sum of the separately funded accounts.

**How the definition helps.** Current wealth shares make the combined holdings exactly the sum of the individual holdings (our own). Fixed starting weights would require moving money between accounts when their returns differ (our own). The paper proves that the resulting continuous-time rule remains a valid trading strategy path by path.

**Paper or page:** [Model-free portfolio allocation in continuous-time](https://arxiv.org/abs/2411.05470v3). It says: “then θ̂(b) ∈ Θ and W(θ̂(b)) = ∑ₖ₌₁ᵐ bₖ W(θ⁽ᵏ⁾)”

**Sources:**

- [Henry Chiu. Model-free portfolio allocation in continuous-time (2025).](https://arxiv.org/abs/2411.05470v3)

### Closures catch vanishing-risk free lunches

**Remember:** No exact arbitrage is not enough when trades can approach one.

*Makes the theorem clean to state or prove.* MSC 91G15 (Financial markets). arXiv q-fin.MF. Level 4: research.

**Definition.** Start with bounded payoffs no greater than the final gains of zero-cost trades whose wealth stays bounded below. Include all limits in the essential supremum norm, which ignores events of probability zero. No free lunch with vanishing risk means that only zero among these payoffs is everywhere nonnegative, apart from events of probability zero.

**Problem.** Let finitely many discounted prices over a finite horizon be locally bounded semimartingales. There is no free lunch with vanishing risk exactly when some probability with the same null events makes the prices local martingales.

**How the definition helps.** The norm closure captures uniformly approximable arbitrage gains, including a positive limit of trades whose possible losses shrink to zero (our own). The Delbaen–Schachermayer fundamental theorem identifies this closed-cone condition with existence of an equivalent local martingale measure (our own).

**Paper or page:** [The Golden Age of the Mathematical Finance](https://arxiv.org/abs/2102.06693v2). It says: “There are not free lunches with vanishing risk if and only if there is probability ℙ∗ ∼ ℙ under which S̃ is a local martingale.”

**Sources:**

- [Freddy Delbaen, Walter Schachermayer. A general version of the fundamental theorem of asset pricing (1994).](https://doi.org/10.1007/bf01450498)

### Comonotonic prices satisfy put–call parity

**Remember:** Split a payoff into two parts that rise together, then add their prices.

*Makes the theorem clean to state or prove.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 4: research.

**Definition.** Payoffs X and Y are comonotonic if (X(s) − X(t))(Y(s) − Y(t)) ≥ 0 for every pair of states s,t. A pricing rule f is comonotonic additive if f(X + Y) = f(X) + f(Y) for every such pair. It is monotone if X ≤ Y pointwise implies f(X) ≤ f(Y).

**Problem.** For bounded measurable payoffs, a monotone pricing rule satisfies the paper’s put–call parity exactly when it is comonotonic additive.

**How the definition helps.** The call, short put and constant strike are comonotonic and sum to the underlying payoff (our own). Comonotonic additivity therefore prices their sum by adding their separate prices (our own). The paper’s parity characterization proves the converse for monotone rules on bounded measurable payoffs.

**Paper or page:** [Put-Call Parities, absence of arbitrage opportunities and non-linear pricing rules](https://arxiv.org/abs/2203.16292v1). It says: “satisfies PCP if and only if it is Comonotonic Additive.”

**Sources:**

- [Bastianello, Chateauneuf and Cornet, Put–Call Parities, absence of arbitrage opportunities, and nonlinear pricing rules (2024)](https://doi.org/10.1111/mafi.12433)

### One currency prices both markets

**Remember:** Use one unit for both currencies, then convert the answer back.

*Makes the theorem clean to state or prove.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 4: research.

**Definition.** Let f be the dollar price of one euro. In an intermediate currency, one euro costs √f and one dollar costs 1/√f. A payoff has degree one if multiplying both inputs by a positive factor multiplies the payoff by that factor.

**Problem.** In the paper’s euro–dollar model, consider options payable only at expiry with degree-one payoffs. The same pricing probability values options written on euros and options written on dollars.

**How the definition helps.** Measuring both currencies in the same unit gives both contracts the same pricing probability (our own). Degree-one scaling converts the amount paid at expiry into that unit (our own). The paper constructs the intermediate interest rate and proves that the corresponding pricing probability exists.

**Paper or page:** [Pricing FX Options under Intermediate Currency](https://arxiv.org/abs/1912.01387v2), [Pricing FX Options under Intermediate Currency](https://arxiv.org/abs/1912.01387v2). It says: “Then the arbitrage price of a European option on EUR with a payoff g(x; K) being homogeneous function of order 1 and maturity time T is given by”

**Sources:**

- [S. Maurer, T. E. Sharp, M. V. Tretyakov. Pricing FX Options under Intermediate Currency (2021).](https://arxiv.org/abs/1912.01387v2)

### Directional closure makes capital limits attainable

**Remember:** Including limits along the priced direction makes the boundary budget work.

*Rules out counterexamples.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 4: research.

**Definition.** Let A be an upward-closed acceptance set and π a linear price on eligible trades including U ≥ 0 with π(U) = 1. Put B = A + ker π, adding all zero-price trades. Directional closure requires x ∈ B whenever x + εU ∈ B for every ε &gt; 0.

**Problem.** Required capital is the infimum price of trades making a position safe. Fix any real budget m. Directional closure holds exactly when every position requiring at most m admits a trade costing m that makes it safe.

**How the definition helps.** A trade costing m works at x exactly when x + mU belongs to B (our own). Capital at most m gives membership at every budget m + ε, so closure gives membership at m (our own). Conversely, apply budget attainment to x − mU whenever x + εU belongs to B for every ε &gt; 0 (our own). With only strictly positive balances acceptable, every positive deposit works at zero, but zero fails (our own).

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

### Moment bounds control worst-case risk

**Remember:** Match means and covariances with Gaussians, then measure their transport distance.

*Makes the theorem clean to state or prove.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 4: research.

**Definition.** Quadratic transport distance minimizes root mean square separation over all joint realizations of two finite-second-moment laws. A transport ball bounds this distance from a reference law by a radius. A Gelbrich set imposes that bound on the Gaussian laws matching the respective means and covariances.

**Problem.** For the same reference law and radius, the supremum of risk over the Gelbrich set bounds the supremum over the transport ball from above.

**How the definition helps.** Using only means and covariances enlarges the set over which one takes the worst risk (our own). The Gelbrich inequality proves that replacing both laws by their matching Gaussians cannot increase their transport distance (our own). Set inclusion then gives the risk bound for each fixed loss function.

**Paper or page:** [Mean-Covariance Robust Risk Measurement](https://arxiv.org/abs/2112.09959v3), [Mean-Covariance Robust Risk Measurement](https://arxiv.org/abs/2112.09959v3). It says: “then we have 𝒲ᵨ(ℙ̂) ⊆ 𝒢ᵨ(μ̂, Σ̂).”

**Sources:**

- [Viet Anh Nguyen, Soroosh Shafiee, Damir Filipović, Daniel Kuhn. Mean-Covariance Robust Risk Measurement (2025).](https://arxiv.org/abs/2112.09959v3)

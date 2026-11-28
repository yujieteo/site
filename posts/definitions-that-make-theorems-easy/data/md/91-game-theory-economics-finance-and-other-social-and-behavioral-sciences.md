### Conventional cash flows yield one return

**Remember:** One cost first, then only gains, gives one break-even rate.

*Rules out counterexamples.* MSC 91G50 (Corporate finance (dividends, real options, etc.)). arXiv q-fin.MF. Level 1: early undergraduate.

**Definition.** A cash stream is conventional if it starts with one outflow and has only inflows or zero payments afterwards. Its internal rate of return is a discount rate above minus one at which the discounted later inflows exactly repay the initial cost.

**Problem.** For a finite conventional cash stream with at least one later positive inflow, the internal rate of return is unique.

**How the definition helps.** The discounted value of the later inflows falls strictly and continuously from infinity to zero as the rate runs from minus one to infinity, so it equals the initial cost exactly once (our own). Without the condition, payments −10, 21 and −11 at dates zero, one and two have two rates, zero and ten percent (our own).

**Wikipedia:** [Internal rate of return](https://en.wikipedia.org/wiki/Internal_rate_of_return). It says: “In this case the NPV of the payment stream is a convex, strictly decreasing function of interest rate.”

**Sources:** none listed. No primary source with a working link was found.

### Mixed strategies give every finite zero-sum game a value

**Remember:** Randomizing makes the best guaranteed gain equal the least guaranteed loss.

*Rules out counterexamples.* MSC 91A05 (2-person games), 90C47. arXiv econ.TH, math.OC. Level 2: later undergraduate.

**Definition.** A mixed strategy is a probability vector over a player's actions, so each player's strategy set is a simplex. In a finite two-player zero-sum game with payoff matrix A, mixed strategies x and y give player one the expected payoff xᵀAy, linear in each, and player two loses that amount.

**Problem.** For a finite two-player zero-sum game, maxₓ minᵧ xᵀAy = minᵧ maxₓ xᵀAy over mixed strategies, and this common payoff is the game's value. With pure strategies only, the two sides can differ.

**How the definition helps.** Compact convex strategy sets and a payoff linear in each strategy are what a minimax theorem needs. In matching pennies with payoffs ±1, the pure max-min is −1 and the pure min-max is +1, while fifty-fifty mixing makes both 0 (our own).

**Wikipedia:** [Minimax theorem](https://en.wikipedia.org/wiki/Minimax_theorem). It says: “In the context of two-player zero-sum games, the sets X and Y correspond to the strategy sets of the first and second player, respectively, which consist of lotteries over their actions (so-called mixed strategies)”

**Sources:**

- [J. v. Neumann, Zur Theorie der Gesellschaftsspiele, Mathematische Annalen 100 (1928), 295–320](https://doi.org/10.1007/BF01448847)

### Letting players randomize makes Nash equilibria exist

**Remember:** Allow players to randomize, and every finite game has an equilibrium.

*Rules out counterexamples.* MSC 91A10 (Noncooperative games). arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A mixed strategy assigns probabilities to a player's pure strategies, so each player chooses from a compact convex simplex. A Nash equilibrium is one independent mixed strategy per player such that no player can raise their expected payoff by changing only their own strategy.

**Problem.** Every finite game in normal form (a game given by a table of payoffs) has at least one Nash equilibrium.

**How the definition helps.** Expected payoff is linear in a player's own probabilities, so best responses form a nonempty convex set, and continuity gives the best-response correspondence a closed graph (our own). Kakutani's fixed-point theorem then gives a profile of mutual best responses (our own). In matching pennies no pure profile works, because one player always gains by switching (our own).

**Wikipedia:** [Nash equilibrium](https://en.wikipedia.org/wiki/Nash_equilibrium). It says: “The key to Nash's ability to prove existence far more generally than von Neumann lay in his definition of equilibrium.”

**Sources:**

- [Nash, J. F. (1950). Equilibrium points in n-person games. PNAS 36(1), 48–49.](https://doi.org/10.1073/pnas.36.1.48)

### Subgame perfection removes non-credible threats, so backward induction finds equilibria

**Remember:** An equilibrium must stay an equilibrium wherever the game happens to go.

*Rules out counterexamples.* MSC 91A11 (Equilibrium refinements), 91A18. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A strategy profile is subgame perfect if it is a Nash equilibrium in every subgame, so each player must choose well even after histories the equilibrium never reaches. In a perfect-information game, a subgame is a decision node together with the whole tree below it.

**Problem.** Every finite game with perfect information has a subgame perfect equilibrium, and backward induction computes it. Plain Nash equilibrium does not give this result, because some Nash equilibria rest on threats that a player would never carry out.

**How the definition helps.** Backward induction builds such a profile by choosing, at each node, a best action given the continuations already chosen below (our own). Induction makes the result a Nash equilibrium in each subtree (our own). An incumbent's threat to fight entry fails this test if accommodating pays more once entry occurs (our own).

**Wikipedia:** [Subgame perfect equilibrium](https://en.wikipedia.org/wiki/Subgame_perfect_equilibrium). It says: “This ensures that strategies are credible and rational throughout the entire game, eliminating non-credible threats.”

**Sources:**

- [R. Selten, Spieltheoretische Behandlung eines Oligopolmodells mit Nachfrageträgheit, Zeitschrift für die gesamte Staatswissenschaft 121 (1965), 301–324 and 667–689](https://www.jstor.org/stable/40748884)
- [R. Selten, Reexamination of the perfectness concept for equilibrium points in extensive games, International Journal of Game Theory 4 (1975), 25–55](https://doi.org/10.1007/BF01766400)

### Dominating sets survive voting cycles

**Remember:** Every member beats every outsider, so two dominating sets must nest.

*Makes the theorem clean to state or prove.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** In a finite election, a set of candidates is dominating if every member beats every outsider by majority vote. The Smith set is the least nonempty dominating set.

**Problem.** A nonempty finite election always has exactly one least nonempty dominating set, even when no candidate beats all others.

**How the definition helps.** Two dominating sets are always nested, because a candidate in each but outside the other would have to beat the other and lose to them (our own). The full candidate set is dominating, so the nonempty dominating sets form a finite chain with a unique least member (our own).

**Wikipedia:** [Smith set](https://en.wikipedia.org/wiki/Smith_set). It says: “It follows that the Smith set is the smallest non-empty dominating set, and that it is well defined.”

**Sources:**

- [Smith, Aggregation of Preferences with Variable Electorate (1973)](https://doi.org/10.2307/1914033)

### Gibbard–Satterthwaite counts possible outcomes, so two-outcome rules escape

**Remember:** Three possible winners force a dictator or a chance to lie.

*Rules out counterexamples.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** A voting rule maps each list of voters' strict rankings to one winner, and its possible outcomes are the candidates that win for at least one list. The rule is manipulable if some voter can get a winner they prefer by reporting a false ranking.

**Problem.** For finitely many voters and candidates, every voting rule on unrestricted strict rankings with at least three possible winners is dictatorial or manipulable. A dictator always gets their favorite among the possible winners.

**How the definition helps.** The theorem counts possible winners, not names on the ballot, so a rule that only ever picks between two candidates escapes it. With three voters, majority vote between two possible winners is strategyproof and not dictatorial, because misreporting can only hurt the voter's preferred option (our own).

**Wikipedia:** [Gibbard–Satterthwaite theorem](https://en.wikipedia.org/wiki/Gibbard%E2%80%93Satterthwaite_theorem). It says: “It is only assumed that at least three of them can win, i.e. are possible outcomes of the voting rule.”

**Sources:**

- [A. Gibbard, Manipulation of Voting Schemes: A General Result, Econometrica 41 (1973), 587–601](https://doi.org/10.2307/1914083)
- [M. A. Satterthwaite, Strategy-proofness and Arrow's conditions, Journal of Economic Theory 10 (1975), 187–217](https://doi.org/10.1016/0022-0531(75)90050-2)

### Single-peaked preferences escape Arrow's theorem

**Remember:** One peak per voter on one line means no majority cycles.

*Rules out counterexamples.* MSC 91B12 (Voting theory), 91B14. arXiv econ.TH. Level 2: later undergraduate.

**Definition.** Strict rankings are single-peaked if the alternatives lie on one common line on which each voter has a favorite and prefers alternatives nearer that favorite on either side.

**Problem.** With an odd number of at least three voters and finitely many alternatives, single-peaked rankings give an acyclic majority order in which the median voter's favorite beats every other alternative. On this domain majority rule satisfies unanimity, independence of irrelevant alternatives and nondictatorship.

**How the definition helps.** Against any challenger, every voter whose peak is at the median peak or beyond it prefers the median peak, and these voters form a majority (our own). On any three alternatives in line order no voter ranks the middle one last, which rules out the cyclic profile A-B-C, B-C-A, C-A-B (our own). Black's theorem gives majority transitivity on this domain (our own).

**Wikipedia:** [Single peaked preferences](https://en.wikipedia.org/wiki/Single_peaked_preferences), [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem), [Median voter theorem](https://en.wikipedia.org/wiki/Median_voter_theorem). It says: “If the domain is restricted to profiles where every individual has a single-peaked preference with respect to the linear ordering, then social preferences are acyclic.”

**Sources:**

- [Black, D. (1948). On the rationale of group decision-making. Journal of Political Economy 56(1), 23–34.](https://doi.org/10.1086/256633)
- [Arrow, K. J. (1950). A difficulty in the concept of social welfare. Journal of Political Economy 58(4), 328–346.](https://doi.org/10.1086/256963)

### With two alternatives Arrow's conditions hold, and May picks majority rule

**Remember:** Two options give majority rule; three options give Arrow's impossibility.

*Rules out counterexamples. Confidence: medium.* MSC 91B14 (Social choice), 91B12. arXiv econ.TH, cs.GT. Level 2: later undergraduate.

**Definition.** Independence of irrelevant alternatives says that society's order of two alternatives depends only on the voters' orders of those two. It constrains a social welfare function, which turns every list of voters' rankings into one ranking for society, and it has force only when a third alternative exists.

**Problem.** For finitely many voters and three or more alternatives, unanimity and independence force dictatorship on unrestricted strict rankings. With two alternatives and an odd electorate of at least three, majority rule satisfies both without a dictator, and May's theorem characterizes it by anonymity, neutrality and positive responsiveness.

**How the definition helps.** With two alternatives there is no third alternative to be irrelevant, so independence says nothing and majority rule passes every test. A Condorcet cycle, where majorities prefer A to B, B to C and C to A, needs three alternatives (our own).

**Wikipedia:** [May's theorem](https://en.wikipedia.org/wiki/May%27s_theorem), [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem). It says: “Arrow's theorem does not apply to the case of two candidates (when there are trivially no "independent alternatives"), so this possibility result can be seen as the mirror analogue of that theorem.”

**Sources:**

- [K. J. Arrow, A Difficulty in the Concept of Social Welfare, Journal of Political Economy 58 (1950), 328–346](https://doi.org/10.1086/256963)
- [K. O. May, A Set of Independent Necessary and Sufficient Conditions for Simple Majority Decision, Econometrica 20 (1952), 680–684](https://doi.org/10.2307/1907651)

### The continuity axiom excludes lexicographic preferences

**Remember:** Continuity forbids one good that matters infinitely more than another.

*Rules out counterexamples.* MSC 91B16 (Utility theory), 91B06. arXiv econ.TH. Level 2: later undergraduate.

**Definition.** Continuity says that no lottery is infinitely better or worse than another: whenever L ≼ M ≼ N, some p ∈ \[0,1\] makes M indifferent to the mixture pL + (1−p)N. A finite lottery assigns nonnegative probabilities summing to one to finitely many outcomes.

**Problem.** For finite lotteries, complete, transitive, continuous and independent preferences admit an expected utility representation. One lottery is weakly preferred to another exactly when its expected utility is at least as high.

**How the definition helps.** Continuity rules out ranking lotteries by two expected scores lexicographically (our own). If M ties L on the first score but beats it on the second, and N beats both on the first, then any positive weight on N puts the mixture above M and zero weight leaves it below M (our own). The expected utility theorem needs this mixture test to calibrate utilities (our own).

**Wikipedia:** [Von Neumann–Morgenstern utility theorem](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem), [Lexicographic preferences](https://en.wikipedia.org/wiki/Lexicographic_preferences). It says: “These axioms, apart from continuity, are often justified using the Dutch book theorems (whereas continuity is used to set aside lexicographic or infinitesimal utilities).”

**Sources:**

- [J. von Neumann and O. Morgenstern, Theory of Games and Economic Behavior, Princeton University Press (1944; 2nd ed. 1947, with the utility axioms)](https://doi.org/10.1515/9781400829460)

### Compensated demand cannot slope upward

**Remember:** Hold utility fixed and a price rise cannot increase demand.

*True by definition.* MSC 91B42 (Consumer behavior, demand theory). arXiv econ.TH. Level 2: later undergraduate.

**Definition.** Compensated demand selects a cheapest bundle that reaches a fixed level of satisfaction, called utility, so the same set of bundles competes at every price vector (our own).

**Problem.** If only one price rises, the cost-minimizing quantity of that good cannot increase, provided both minima exist.

**How the definition helps.** Each chosen bundle costs no more than the other at its own prices, because both reach the utility level (our own). Adding the two inequalities cancels the unchanged prices and shows that the price change times the quantity change is at most zero (our own).

**Wikipedia:** [Hicksian demand function](https://en.wikipedia.org/wiki/Hicksian_demand_function). It says: “Hicksian demand always slopes down.”

**Sources:** none listed. No primary source with a working link was found.

### Minimum expenditure is price-concave

**Remember:** The cheapest of linear cost plans is concave in prices.

*True by definition.* MSC 91B42 (Consumer behavior, demand theory). arXiv econ.TH. Level 2: later undergraduate.

**Definition.** The expenditure function gives, at each price vector, the least cost of a bundle reaching a fixed utility level, the infimum over those bundles of price times quantity. Each bundle's cost is linear in prices, and the same bundles compete at every price (our own).

**Problem.** At any fixed attainable utility level, minimum expenditure is concave in prices where its value is finite.

**How the definition helps.** A pointwise infimum of linear functions is concave (our own). This avoids tracking how a consumer with a fixed budget switches between bundles (our own).

**Wikipedia:** [Expenditure function](https://en.wikipedia.org/wiki/Expenditure_function). It says: “Concave in p”

**Sources:** none listed. No primary source with a working link was found.

### Separate sides guarantee stable matching

**Remember:** Separate the people who propose from the people who hold offers.

*Rules out counterexamples.* MSC 91B68 (Matching models). arXiv econ.TH. Level 2: later undergraduate.

**Definition.** A matching is stable if no two people would both rather pair with each other than keep their assigned partners. In the two-sided model only members of opposite sides can pair, so one side can propose while the other holds offers.

**Problem.** Two finite, equally sized sides with strict, complete rankings of the opposite side always admit a stable matching.

**How the definition helps.** In deferred acceptance each receiver keeps the best offer so far, so no rejected proposer can form a blocking pair (our own). In the roommates model, where any pair may form, let A rank B then C, B rank C then A, C rank A then B, and all rank D last (our own). Whoever pairs with D can form a mutually preferred pair, so no stable matching exists (our own).

**Wikipedia:** [Stable roommates problem](https://en.wikipedia.org/wiki/Stable_roommates_problem), [Gale–Shapley algorithm](https://en.wikipedia.org/wiki/Gale%E2%80%93Shapley_algorithm). It says: “Unlike the stable marriage problem, a stable matching may fail to exist for certain sets of participants and their preferences.”

**Sources:**

- [D. Gale, L. S. Shapley. College Admissions and the Stability of Marriage (1962).](https://doi.org/10.1080/00029890.1962.11989827)

### Log wealth turns growth into addition

**Remember:** Logs turn compounding into sums, so the strong law applies.

*True by definition.* MSC 91G10 (Portfolio theory), 91A60. arXiv q-fin.PM. Level 2: later undergraduate.

**Definition.** The log return of a round is the logarithm of wealth after the round divided by wealth before it. Logarithms turn products into sums, so total log gain is the sum of the one-round log returns, and fixed betting fractions are compared by their expected one-round log return.

**Problem.** Suppose successive wealth multipliers are independent, identically distributed, positive, and have integrable logarithms. Total log wealth gain divided by the number of rounds converges almost surely to the expected one-round log return.

**How the definition helps.** Total log gain is a sum of independent, identically distributed log returns, so the strong law of large numbers gives the limit of their average (our own proof). Comparing expected wealth gives a different choice: with even odds and a 60% chance of winning, betting everything maximizes expected wealth but loses everything at the first defeat (our own).

**Wikipedia:** [Kelly criterion](https://en.wikipedia.org/wiki/Kelly_criterion). It says: “maximizing the long-term expected value of the logarithm of wealth”

**Sources:**

- [Kelly, A New Interpretation of Information Rate (1956)](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)

### Two funds span minimum-variance portfolios

**Remember:** Variance is squared length, so minimizers lie on one line.

*Makes the theorem clean to state or prove.* MSC 91G10 (Portfolio theory). arXiv q-fin.PM. Level 2: later undergraduate.

**Definition.** A minimum-variance portfolio at a target expected return is a weight vector summing to one, with negative weights allowed for short sales, that minimizes variance. With positive definite covariance, variance is a squared length, so this portfolio is the point nearest zero on the set cut out by two linear constraints (our own).

**Problem.** Assume a positive definite covariance matrix and asset means that are not all equal. Then all target-return minimizers lie on one line, and any two at different targets generate the others by combinations with coefficients summing to one.

**How the definition helps.** The point nearest zero lies in the span of the two constraint normals in this inner product (our own). The budget equation cuts that plane in a line, and each target return picks one point on it (our own).

**Wikipedia:** [Mutual fund separation theorem](https://en.wikipedia.org/wiki/Mutual_fund_separation_theorem). It says: “Now consider two benchmark efficient portfolios constructed at benchmark expected returns”

**Sources:**

- [Robert C. Merton. An Analytic Derivation of the Efficient Portfolio Frontier (1972).](https://doi.org/10.2307/2329621)

### Risk-neutral prices exclude arbitrage

**Remember:** A fair average cannot hide a gain that never loses.

*True by definition.* MSC 91G15 (Financial markets). arXiv q-fin.MF. Level 2: later undergraduate.

**Definition.** Risk-neutral probabilities make every asset price, in bank-account units, a fair game: it equals its expected next price given current information. They give positive weight to exactly the states the original probabilities allow, in a market with finitely many states and dates, a positive bank account and no dividends.

**Problem.** An arbitrage is a self-financing strategy, using only current information, that starts from zero, avoids terminal loss almost surely, and gains with positive probability. In a finite market with finitely many trading dates, risk-neutral probabilities rule out arbitrage.

**How the definition helps.** Each discounted price change has conditional mean zero, so self-financing trades from zero give discounted terminal wealth with expectation zero (our own). An arbitrage would have strictly positive expectation, because both probability laws agree on which states are possible (our own).

**nLab:** [martingale](https://ncatlab.org/nlab/show/martingale). It says: “For each n ≤ m, the function fₙ is a conditional expectation of fₘ given ℱₙ:”

**Paper or page:** [The Golden Age of the Mathematical Finance](https://arxiv.org/abs/2102.06693v2). It says: “There are not arbitrage opportunities if and only if there is a probability ℙ∗ ∼ ℙ under which the process S̃ is a martingale.”

**Sources:**

- [J. Michael Harrison, Stanley R. Pliska. Martingales and stochastic integrals in the theory of continuous trading (1981).](https://doi.org/10.1016/0304-4149(81)90026-0)

### Risk-neutral averages price exact hedges

**Remember:** Fair prices keep a hedge's expected value equal to its cost.

*True by definition.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 2: later undergraduate.

**Definition.** A probability is risk-neutral if it keeps the same null events and makes each dividend-free price, in units of a positive bank account, equal its conditional expected next price. A self-financing exact hedge funds all trades internally and matches the claim at maturity in every possible state.

**Problem.** In a finite-state, finite-period market without arbitrage, a self-financing exact hedge costs the expected discounted payoff under any risk-neutral probability.

**How the definition helps.** Each trade has zero conditional expected gain in bank-account units, so the hedge's expected final wealth equals its initial cost (our own). Its final wealth is the payoff, so every risk-neutral probability gives the same cost (our own). The existence of a hedge still needs its own proof (our own).

**Paper or page:** [Asset pricing under model uncertainty with discrete time and states](https://arxiv.org/abs/2408.13048v2). It says: “Π(F) := {x ∈ ℝ: ∃ H such that x + H·S\*(T) = F\*, 𝒫-q.s.} = E<sub>Q</sub>\[F\*\],”

**Sources:**

- [J. Michael Harrison, Stanley R. Pliska. Martingales and stochastic integrals in the theory of continuous trading (1981).](https://doi.org/10.1016/0304-4149(81)90026-0)

### State securities linearize pricing

**Remember:** Price each state separately and add the pieces.

*True by definition.* MSC 91G30 (Interest rates, asset pricing, etc. (stochastic models)). arXiv q-fin.PR. Level 2: later undergraduate.

**Definition.** A state security pays one unit in one specified state and nothing elsewhere, and its current cost is the state price. Any payoff is a bundle of state securities, holding as many units of each as the payoff pays in that state (our own).

**Problem.** Consider a complete, frictionless finite-state market with one payment date and unrestricted holdings. Without arbitrage, every payoff costs the sum of its state payments times their state prices.

**How the definition helps.** Completeness lets traders build each state security from existing assets, and no arbitrage forces identical payments to have equal prices (our own). So a payoff costs the sum of its state payments times their state prices (our own).

**Wikipedia:** [Arrow–Debreu model](https://en.wikipedia.org/wiki/Arrow%E2%80%93Debreu_model). It says: “An Arrow security is an instrument with a fixed payout of one unit in a specified state and no payout in other states.”

**Sources:**

- [K. J. Arrow. The Role of Securities in the Optimal Allocation of Risk-bearing (1964).](https://doi.org/10.2307/2296188)

### Quantile averages handle tied losses

**Remember:** Fill the whole tail, even when losses tie.

*Rules out counterexamples.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 2: later undergraduate.

**Definition.** Expected shortfall at a tail fraction averages the loss quantiles over that top fraction of probability levels, so it covers exactly that fraction and takes only part of a tied loss at the cutoff. The loss quantile at level p is the smallest threshold with probability at least p that the loss is at or below it.

**Problem.** Expected shortfall is finite for every integrable loss and every tail fraction strictly between zero and one. For a continuously distributed loss it equals the average loss conditional on exceeding the cutoff.

**How the definition helps.** The quantile average always covers exactly the chosen fraction, even when the cutoff loss has positive probability (our own). If a bet loses one unit with probability 5 percent and otherwise zero, the worst 10 percent averages one half, while conditioning on losses above the cutoff gives one (our own). Proving agreement for continuous laws uses the distribution of a uniform quantile (our own).

**Wikipedia:** [Expected shortfall](https://en.wikipedia.org/wiki/Expected_shortfall). It says: “but may differ for distributions having atoms at the quantile.”

**Sources:**

- [Carlo Acerbi, Dirk Tasche. On the coherence of expected shortfall (2002).](https://doi.org/10.1016/s0378-4266(02)00283-2)

### Best-response sets contain the supports of Nash equilibria

**Remember:** Each chosen strategy needs a best-reply reason inside the chosen sets.

*True by definition. Confidence: medium.* MSC 91A10 (Noncooperative games), 91A26. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A best-response set picks a nonempty set of pure strategies for each player of a finite game, such that every included strategy is a best reply, among all pure strategies, to some independent opponent mixtures on the opponents' sets. A strategy is rationalizable if it belongs to some best-response set.

**Problem.** Every pure strategy played with positive probability in a Nash equilibrium is rationalizable.

**How the definition helps.** The supports of a Nash equilibrium form a best-response set, since each strategy played with positive probability is optimal against the others' equilibrium mixtures. Relating this definition to iterated deletion is separate work, namely showing that deletion leaves the largest best-response set.

**Wikipedia:** [Rationalizable strategy](https://en.wikipedia.org/wiki/Rationalizable_strategy). It says: “Rationalizability is a broader concept than a Nash equilibrium. Both require players to respond optimally to some belief about their opponents' actions, but Nash equilibrium requires these beliefs to be correct, while rationalizability does not.”

**Sources:**

- [B. Douglas Bernheim, Rationalizable Strategic Behavior, Econometrica 52 (1984) 1007–1028](https://doi.org/10.2307/1911196)

### Correlated equilibria form a polytope, so a linear program finds one

**Remember:** Given your recommendation, obeying pays at least as much as any deviation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91A11 (Equilibrium refinements), 91A68. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A correlated equilibrium of a finite game is a distribution over action profiles under which obeying pays: each recommended action of positive probability yields at least the conditional expected payoff of every alternative. Multiplied by the recommendation's probability, each such condition is a linear inequality in the distribution (our own).

**Problem.** In a finite game, the correlated equilibria form a nonempty convex polytope. For rational payoffs, a linear program finds one in time polynomial in the payoff table’s bit length.

**How the definition helps.** These linear inequalities cut out a polytope inside the probability simplex (our own). Nash's existence theorem supplies a feasible product distribution, so the polytope is nonempty (our own). The explicit payoff table bounds the linear program's encoding length polynomially (our own).

**Wikipedia:** [Correlated equilibrium](https://en.wikipedia.org/wiki/Correlated_equilibrium). It says: “computing a correlated equilibrium only requires solving a linear program whereas solving a Nash equilibrium requires finding its fixed point completely.”

**Sources:**

- [Aumann, R. J. (1974). Subjectivity and correlation in randomized strategies. Journal of Mathematical Economics 1(1), 67–96.](https://doi.org/10.1016/0304-4068(74)90037-8)
- [C. H. Papadimitriou and T. Roughgarden, Computing correlated equilibria in multi-player games, Journal of the ACM 55(3) (2008), article 14](https://doi.org/10.1145/1379759.1379762)

### Trembling-hand perfection removes equilibria in weakly dominated strategies

**Remember:** If opponents might slip, weakly dominated strategies are never best.

*Rules out counterexamples.* MSC 91A11 (Equilibrium refinements), 91A10. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A perfect equilibrium survives small mistakes: it is a limit of equilibria of perturbed games, in which every pure action must get at least a positive minimum probability, as all minima tend to zero. Each player's minima sum to less than one.

**Problem.** In 2×2 games, the perfect equilibria are exactly the Nash equilibria in which neither player uses a weakly dominated strategy, one that another strategy never does worse than and sometimes beats. Every finite game has at least one perfect equilibrium.

**How the definition helps.** Against an opponent who plays every action with positive probability, a weakly dominated action does strictly worse, so it gets only its minimum probability and vanishes in the limit (our own). Each perturbed game has an equilibrium by a fixed-point argument, and compactness gives a convergent subsequence (our own). The quoted 2×2 characterization supplies the converse.

**Wikipedia:** [Trembling hand perfect equilibrium](https://en.wikipedia.org/wiki/Trembling_hand_perfect_equilibrium). It says: “For 2×2 games, the set of trembling-hand perfect equilibria coincides with the set of equilibria consisting of two undominated strategies.”

**Sources:**

- [R. Selten, Reexamination of the perfectness concept for equilibrium points in extensive games, International Journal of Game Theory 4 (1975), 25–55](https://doi.org/10.1007/BF01766400)
- [R. B. Myerson, Refinements of the Nash equilibrium concept, International Journal of Game Theory 7 (1978), 73–80](https://doi.org/10.1007/BF01753236)

### Arrival orders make the Shapley efficiency proof a telescoping sum

**Remember:** In every arrival order, the worth increases add up to the total.

*True by definition.* MSC 91A12 (Cooperative games). arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** Order the players of a finite cooperative game with v(∅) = 0 uniformly at random, and let each join the players before them. A player's Shapley value is the expected increase in coalition worth when that player joins.

**Problem.** The Shapley values sum to the worth of the group of all players. This property is called efficiency.

**How the definition helps.** In each order the increases telescope to v(N) − v(∅) = v(N), so their expectations also sum to v(N). The weighted-subset formula hides this cancellation in its coefficients (our own comparison).

**Wikipedia:** [Shapley value](https://en.wikipedia.org/wiki/Shapley_value). It says: “The sum of the Shapley values of all agents equals the value of the grand coalition, so that all the gain is distributed among the agents:”

**Sources:**

- [Lloyd S. Shapley, A Value for n-Person Games, in Contributions to the Theory of Games II, Annals of Mathematics Studies 28 (1953) 307–317](https://doi.org/10.1515/9781400881970-018)

### Balanced games are exactly the cooperative games with a nonempty core

**Remember:** Part-time coalitions never earn more than everyone together.

*True by definition.* MSC 91A12 (Cooperative games), 90C46. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A finite cooperative game gives worth v(S) to each coalition S of players in N, with v(∅) = 0, and its core is the set of payments totaling v(N) that give each coalition S at least v(S). The game is balanced if ∑ₛ α(S)v(S) ≤ v(N) for all nonnegative coalition weights α that add up to one at every player, so part-time coalitions never beat the grand coalition (our own gloss).

**Problem.** Bondareva–Shapley theorem: the core of a game is nonempty exactly when the game is balanced. It follows that market games and convex games have nonempty cores.

**How the definition helps.** The core is nonempty exactly when the least total payment meeting every coalition's worth is at most v(N) (our own). The dual of that linear program maximizes weighted worth over balanced weights, so strong duality gives the criterion (our own). Standard balancedness results for market games and convex games give the two applications (our own).

**Wikipedia:** [Bondareva–Shapley theorem](https://en.wikipedia.org/wiki/Bondareva%E2%80%93Shapley_theorem), [Core (game theory)](https://en.wikipedia.org/wiki/Core_%28game_theory%29). It says: “Specifically, the game's core is non-empty if and only if the game is balanced.”

**Sources:**

- [L. S. Shapley, On balanced sets and cores, Naval Research Logistics Quarterly 14 (1967), 453–460](https://doi.org/10.1002/nav.3800140404)

### Harsanyi dividends give a direct check of the Shapley axioms

**Remember:** Split each group’s extra worth equally among its members.

*True by definition. Confidence: medium.* MSC 91A12 (Cooperative games). arXiv cs.GT. Level 3: graduate.

**Definition.** A coalition's Harsanyi dividend is its extra worth beyond what its proper subcoalitions already produce, v(S) minus the sum of the dividends of its proper subsets, in a finite game with v(∅) = 0. Each player's Shapley value sums an equal share of the dividend of every coalition containing that player.

**Problem.** The Shapley value distributes the full worth, adds across games, treats interchangeable players equally, and pays nothing to players who never add worth.

**How the definition helps.** The dividends of all coalitions sum to v(N), dividends add across games, and relabeling players relabels dividends, which gives three axioms at once. By induction on coalition size, every dividend of a coalition containing a player who never adds worth is zero, so that player gets nothing (our own).

**Wikipedia:** [Shapley value](https://en.wikipedia.org/wiki/Shapley_value). It says: “In other words, the synergy of each coalition is divided equally between all members.”

**Sources:** none listed. No primary source with a working link was found.

### Potential games always have pure equilibria

**Remember:** Every selfish improvement climbs the same hill.

*True by definition.* MSC 91A14 (Potential and congestion games), 91A10. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** A finite game has a generalized ordinal potential if some real function on pure profiles strictly increases whenever a unilateral move increases the mover's payoff.

**Problem.** Every finite potential game has a pure-strategy Nash equilibrium. Improvement dynamics, in which one player at a time makes a move that raises their own payoff, always stop at one.

**How the definition helps.** Each improving move strictly raises the potential, so an improvement path cannot cycle. In a finite game the path must stop, and where it stops no player can improve. The path can still be exponentially long (our own summary).

**Wikipedia:** [Potential game](https://en.wikipedia.org/wiki/Potential_game). It says: “We have just proved that every finite generalized-ordinal-potential game has the FIP.”

**Sources:**

- [Monderer, D.; Shapley, L. S. (1996). Potential games. Games and Economic Behavior 14(1), 124–143.](https://doi.org/10.1006/game.1996.0044)
- [Rosenthal, R. W. (1973). A class of games possessing pure-strategy Nash equilibria. International Journal of Game Theory 2, 65–67.](https://doi.org/10.1007/BF01737559)
- [Fabrikant, A.; Papadimitriou, C.; Talwar, K. (2004). The complexity of pure Nash equilibria. Proceedings of the 36th ACM Symposium on Theory of Computing, 604–612.](https://doi.org/10.1145/1007352.1007445)

### Perfect recall makes mixed and behavior strategies equivalent

**Remember:** A player who never forgets can randomize one move at a time.

*Rules out counterexamples.* MSC 91A18 (Games in extensive form), 91A10. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A player has perfect recall if any two nodes in one information set have the same sequence of that player's earlier information sets and actions, so the player never forgets what they knew or did. A mixed strategy randomizes over complete plans, and a behavior strategy randomizes independently at each information set.

**Problem.** Kuhn's theorem (1953): in a finite game with perfect recall, every mixed strategy has a behavior strategy with the same outcome probabilities, and conversely. So one can work with the much smaller behavior strategies.

**How the definition helps.** Perfect recall tells each information set which earlier choices of the player led there, so a mixed plan's next action can be replaced by its conditional distribution given those choices (our own). At histories of zero weight any distribution works, and conversely, sampling all local choices independently gives a mixed plan with the same outcome probabilities (our own). The absent-minded driver, who revisits one information set, shows that the condition is needed (our own).

**Wikipedia:** [Kuhn's theorem](https://en.wikipedia.org/wiki/Kuhn%27s_theorem). It says: “in any finite extensive-form game where players have perfect recall (the ability to remember all of their previous moves and information), every mixed strategy has an equivalent behavior strategy that yields the same outcome probabilities, and vice versa.”

**Sources:**

- [H. W. Kuhn, Extensive Games and the Problem of Information, in Contributions to the Theory of Games II, Annals of Mathematics Studies 28 (1953), 193–216](https://doi.org/10.1515/9781400881970-012)
- [M. Piccione and A. Rubinstein, On the Interpretation of Decision Problems with Imperfect Recall, Games and Economic Behavior 20 (1997), 3–24](https://doi.org/10.1006/game.1997.0536)

### Invasion resistance breaks Nash ties

**Remember:** If mutants tie against residents, compare how both do against mutants.

*Rules out counterexamples.* MSC 91A22 (Evolutionary games). arXiv econ.TH. Level 3: graduate.

**Definition.** A resident strategy is evolutionarily stable if every different mutant strategy, at every small enough positive population share, earns strictly less than the residents. Residents and mutants both meet opponents drawn from the mixed population, so a tie against residents is broken by play against mutants.

**Problem.** In a finite symmetric two-player game, an evolutionarily stable strategy is a symmetric Nash equilibrium. If a mutant ties against the resident, the resident must earn more against the mutant than the mutant does against itself.

**How the definition helps.** The residents' payoff advantage is affine in the mutant share (our own proof). It must be nonnegative at share zero, which gives a Nash equilibrium, and if it is zero there, its slope must be positive, which gives the tie-break condition (our own proof). In the article's example, B ties A against residents playing A but earns more than A against B.

**Wikipedia:** [Evolutionarily stable strategy](https://en.wikipedia.org/wiki/Evolutionarily_stable_strategy). It says: “only B is an ESS”

**Sources:**

- [Maynard Smith and Price, The Logic of Animal Conflict (1973)](https://doi.org/10.1038/246015a0)

### Defining common knowledge by a common partition makes agreement immediate

**Remember:** Common knowledge fills a whole cell of the shared coarsening.

*Makes the theorem clean to state or prove.* MSC 91A27 (Games with incomplete information, Bayesian games), 03B42. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** Each agent learns only which cell of their own partition of a finite state space contains the true state. An event is common knowledge at a state if it contains that state's cell in the meet, the finest partition coarser than every agent's partition.

**Problem.** Suppose agents share a prior giving every state positive probability. If their posterior probabilities of an event are common knowledge, their posteriors agree.

**How the definition helps.** The meet cell holding the true state is a union of each agent's own cells. If an agent's posterior is common knowledge, it is the same number on each of those cells, so it equals the probability conditional on the whole meet cell. That number does not depend on the agent, so the posteriors agree.

**Wikipedia:** [Aumann's agreement theorem](https://en.wikipedia.org/wiki/Aumann%27s_agreement_theorem). It says: “The theorem was proved by Robert Aumann in his 1976 paper "Agreeing to Disagree", which also introduced the formal, set-theoretic definition of common knowledge.”

**Sources:**

- [R. J. Aumann, Agreeing to Disagree, Annals of Statistics 4 (1976), 1236–1239](https://doi.org/10.1214/aos/1176343654)

### Harsanyi's types turn incomplete information into a game with a chance move

**Remember:** Let Nature deal the private information, and ordinary game theory applies.

*Makes the theorem clean to state or prove.* MSC 91A27 (Games with incomplete information, Bayesian games), 91A18. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** In a finite Bayesian game, Nature first draws a type profile from a known common prior and tells each player only their own type. A mixed action rule assigns an action distribution to each type, and at a Bayesian Nash equilibrium each positive-probability type maximizes its conditional expected payoff given the others' rules.

**Problem.** Every finite Bayesian game has a Bayesian Nash equilibrium in mixed strategies.

**How the definition helps.** Nature's move turns the game into an ordinary finite game with imperfect information. Treating each type as a separate player, Nash's existence theorem gives an equilibrium (our own). The common prior makes this possible, and it is a strong assumption (our own).

**Wikipedia:** [Bayesian game](https://en.wikipedia.org/wiki/Bayesian_game). It says: “both players are aware of this probability (common prior assumption, which can be converted into a complete-information game with imperfect information).”

**Sources:**

- [J. C. Harsanyi, Games with Incomplete Information Played by 'Bayesian' Players, I–III. Part I. The Basic Model, Management Science 14 (1967), 159–182](https://doi.org/10.1287/mnsc.14.3.159)

### Quasilinear utility lets VCG payments make truth-telling a dominant strategy

**Remember:** Pay each agent everyone else's value, and her interest becomes society's.

*True by definition.* MSC 91B03 (Mechanism design theory), 91B16, 91B26. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** Under quasilinear utility, an agent's payoff is her value for the outcome plus the money she receives, vᵢ(x) + t. A VCG mechanism picks an outcome with the largest total reported value. It pays each agent the others' total reported value there, minus an amount that depends only on the others' reports.

**Problem.** In every VCG mechanism, reporting one's true values is a dominant strategy, best whatever the others report. The Vickrey second-price auction is a special case.

**How the definition helps.** Each agent's payoff becomes her true value plus the others' reported values, minus a term she cannot affect (our own). So she wants the outcome that maximizes that sum, and truthful reporting makes the mechanism pick it (our own). In a single-item auction, the pivot payment charges the winner the highest losing bid (our own).

**Wikipedia:** [Vickrey–Clarke–Groves mechanism](https://en.wikipedia.org/wiki/Vickrey%E2%80%93Clarke%E2%80%93Groves_mechanism), [Quasilinear utility](https://en.wikipedia.org/wiki/Quasilinear_utility). It says: “The agent is paid the total value of the other agents; hence, together with its own value, the total welfare of the agent is exactly equal to the total welfare of society.”

**Sources:**

- [W. Vickrey, Counterspeculation, Auctions, and Competitive Sealed Tenders, Journal of Finance 16 (1961), 8–37](https://doi.org/10.1111/j.1540-6261.1961.tb02789.x)
- [T. Groves, Incentives in Teams, Econometrica 41 (1973), 617–631](https://doi.org/10.2307/1914085)
- [E. H. Clarke, Multipart pricing of public goods, Public Choice 11 (1971), 17–33](https://doi.org/10.1007/BF01726210)

### The revelation principle lets designers study only truthful mechanisms

**Remember:** The mechanism plays your equilibrium strategy, so you only tell the truth.

*Makes the theorem clean to state or prove.* MSC 91B03 (Mechanism design theory), 91B14. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** A direct mechanism asks each player only to report a preference, then picks the outcome from the reports. It is incentive-compatible if truthful reporting is an equilibrium, so it carries out a social choice function, a rule from preference lists to outcomes, by evaluating it at the true preferences.

**Problem.** If some mechanism implements a social choice function in dominant strategies or in Bayesian Nash equilibrium, then a direct incentive-compatible mechanism implements it too.

**How the definition helps.** Build the direct mechanism that feeds the reports into the original equilibrium strategies and plays the original game (our own). A profitable false report would then be a profitable deviation in the original game under the same equilibrium notion (our own). So truth is an equilibrium and gives the original outcome (our own).

**Wikipedia:** [Revelation principle](https://en.wikipedia.org/wiki/Revelation_principle). It says: “By narrowing the area needed to be searched, the problem of finding a mechanism becomes much easier.”

**Sources:**

- [Gibbard, A. (1973). Manipulation of voting schemes: a general result. Econometrica 41(4), 587–601.](https://doi.org/10.2307/1914083)
- [Myerson, R. B. (1979). Incentive compatibility and the bargaining problem. Econometrica 47(1), 61–73.](https://doi.org/10.2307/1912346)

### Certainty equivalents compose

**Remember:** The sure amount whose utility equals the expected utility.

*True by definition.* MSC 91B06 (Decision theory). arXiv econ.TH. Level 3: graduate.

**Definition.** Fix a continuous, strictly increasing utility u. Given some information, the conditional certainty equivalent of a bounded risky payoff X is the unique amount, known from that information, whose utility equals E\[u(X) \| that information\].

**Problem.** Compute a certainty equivalent with finer information, then compute its certainty equivalent with coarser information. The result equals the certainty equivalent computed directly with coarser information.

**How the definition helps.** In utility terms each certainty equivalent is a conditional expectation of u(X), so composing two of them is the tower property of conditional expectation (our own). Strict increase of u makes equal utilities give equal amounts (our own).

**Paper or page:** [On conditioning and consistency for nonlinear functionals](https://arxiv.org/abs/2401.09054v2). It says: “is a family of time consistent conditional nonlinear expectations”

**Sources:**

- [Edoardo Berton, Alessandro Doldi, Marco Maggis. On conditioning and consistency for nonlinear functionals (2024).](https://arxiv.org/abs/2401.09054v2)

### Consumers who always want a bit more make equilibria efficient

**Remember:** Near every bundle of goods there is a slightly better one.

*Makes the theorem clean to state or prove.* MSC 91B08 (Individual preferences), 91B15, 91B50. arXiv econ.TH. Level 3: graduate.

**Definition.** A preference is locally nonsatiated if every bundle of goods has a strictly preferred bundle arbitrarily close to it: for every bundle x and every ε &gt; 0, some bundle within distance ε of x is strictly preferred. So a consumer never leaves money unspent at a best affordable bundle (our own).

**Problem.** The first fundamental theorem of welfare economics: if preferences are locally nonsatiated, every competitive equilibrium allocation is Pareto optimal. That is, no feasible allocation makes someone better off and nobody worse off.

**How the definition helps.** Local nonsatiation makes every bundle at least as good as a consumer's equilibrium bundle cost at least as much, and every strictly better bundle cost strictly more (our own). A Pareto improvement would then cost more in total at equilibrium prices than profit-maximizing firms can supply (our own).

**Wikipedia:** [Fundamental theorems of welfare economics](https://en.wikipedia.org/wiki/Fundamental_theorems_of_welfare_economics). It says: “If preferences are locally nonsatiated, and if (X\*, Y\*, p) is a price equilibrium with transfers, then the allocation (X\*, Y\*) is Pareto optimal.”

**Sources:**

- [Debreu, G. (1951). The coefficient of resource utilization. Econometrica 19(3), 273–292.](https://doi.org/10.2307/1906814)

### The Arrow–Pratt ratio keeps risk aversion independent of utility units

**Remember:** Divide curvature by slope, and the units of utility cancel.

*True by definition.* MSC 91B16 (Utility theory), 91B06. arXiv econ.TH, q-fin.RM. Level 3: graduate.

**Definition.** For a twice differentiable utility of wealth u with u′ &gt; 0, the Arrow–Pratt coefficient of absolute risk aversion at c is the curvature divided by the slope, −u″(c)/u′(c). Dividing by the slope makes the measure ignore the units of utility.

**Problem.** Replacing u by αu + β with α &gt; 0 preserves expected-utility preferences and leaves the Arrow–Pratt coefficient unchanged.

**How the definition helps.** Replacing u by αu + β multiplies both u″ and u′ by α, which cancels, and β disappears on differentiation. Bare curvature u″ would instead change by the factor α.

**Wikipedia:** [Risk aversion](https://en.wikipedia.org/wiki/Risk_aversion). It says: “However, since expected utility functions are not uniquely defined (are defined only up to affine transformations), a measure that stays constant with respect to these transformations is needed rather than just the second derivative of u(c).”

**Sources:**

- [John W. Pratt, Risk Aversion in the Small and in the Large, Econometrica 32 (1964) 122–136](https://doi.org/10.2307/1913738)

### Allocation probabilities determine auction payments

**Remember:** Win chances fix the slope of surplus, so payments follow.

*Makes the theorem clean to state or prove.* MSC 91B26 (Auctions, bargaining, bidding and selling, and other market models). arXiv econ.TH. Level 3: graduate.

**Definition.** A bidder's win probability is her chance of winning as a function of her own private value, averaged over the other bidders' values and any randomness in the auction. In a truthful auction it is the slope of her expected surplus, value received minus payment, as her value varies (our own).

**Problem.** Suppose bidders have independent private values on closed intervals, maximize expected value received minus payment, and report truthfully in equilibrium in two auctions. If the auctions give the same win probability at each value and the same expected payment at each lowest value, they give the same expected payment at every value.

**How the definition helps.** Truthful reporting makes expected surplus equal its value at the lowest type plus the integral of the win probability (our own). Expected payment is value times win probability minus surplus, so the same data fix it (our own).

**Wikipedia:** [Revenue equivalence](https://en.wikipedia.org/wiki/Revenue_equivalence). It says: “The expected payments of all types are the same in both mechanisms, and hence:”

**Sources:**

- [Roger B. Myerson. Optimal Auction Design (1981).](https://doi.org/10.1287/moor.6.1.58)

### Virtual valuations turn auction revenue into a pointwise objective

**Remember:** Value minus information rent: revenue is the winner's virtual value.

*Makes the theorem clean to state or prove.* MSC 91B26 (Auctions, bargaining, bidding and selling, and other market models), 91B03. arXiv cs.GT, econ.TH. Level 3: graduate.

**Definition.** For a bidder with distribution function F and positive density f on \[0,b\], the virtual value at v is v − (1 − F(v))/f(v). Virtual surplus is the winner's virtual value, or zero with no sale, and a truthful auction's expected revenue is its expected virtual surplus, less the lowest types' expected utilities.

**Problem.** Suppose risk-neutral bidders have independent private values and nondecreasing virtual values. Then giving the item to the highest positive virtual bidder, with fixed tie-breaking and threshold payments, maximizes expected revenue among truthful auctions giving each lowest-value type nonnegative expected utility.

**How the definition helps.** Since revenue is expected virtual surplus minus the lowest types' utilities, the best auction maximizes virtual surplus at every bid profile and leaves the lowest types zero (our own). Nondecreasing virtual values make this rule monotone in bids, with fixed tie-breaking preserving this (our own). Threshold payments then make it truthful with zero utility at value zero (our own).

**Wikipedia:** [Virtual valuation](https://en.wikipedia.org/wiki/Virtual_valuation). It says: “The expected profit of any truthful mechanism is equal to its expected virtual surplus.”

**Sources:**

- [Roger B. Myerson, Optimal Auction Design, Mathematics of Operations Research 6 (1981) 58–73](https://doi.org/10.1287/moor.6.1.58)

### Equal budgets rule out envy at competitive equilibrium

**Remember:** With the same budget, you could afford anything another buyer chose.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91B50, 91B15. arXiv econ.TH, cs.GT. Level 3: graduate.

**Definition.** An allocation is envy-free if no buyer strictly prefers another buyer's bundle. In a competitive equilibrium with equal incomes, all buyers face the same prices and the same budget, and each picks a best bundle she can afford, so every other buyer's bundle is affordable to her.

**Problem.** Every competitive equilibrium with equal incomes is envy-free.

**How the definition helps.** Each buyer could afford any other buyer's bundle and chose her own as best, so she envies no one. Our own example: with one divisible good at price one and budgets one and two, the poorer buyer envies the richer one if both prefer more.

**Wikipedia:** [Competitive equilibrium](https://en.wikipedia.org/wiki/Competitive_equilibrium), [Efficient envy-free division](https://en.wikipedia.org/wiki/Efficient_envy-free_division). It says: “Furthermore, by Varian's theorems, a CE allocation in which all agents have the same income is also envy-free.”

**Sources:**

- [Hal R. Varian, Equity, envy, and efficiency, Journal of Economic Theory 9 (1974) 63–91](https://doi.org/10.1016/0022-0531(74)90075-1)

### Strict housing preferences force uniqueness

**Remember:** No group can reshuffle its own houses to help someone, hurting nobody.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)). arXiv econ.TH. Level 3: graduate.

**Definition.** Each person owns one house and ranks the houses. A group blocks an assignment if, by trading only its members' original houses, it can make one member better off and no member worse off, and the strict core is the set of assignments no group blocks.

**Problem.** With finitely many owners and strict rankings, the strict core has exactly one assignment, the one found by top trading cycles. In each round, owners point to the owners of their favorite remaining houses, trade along the resulting cycles, and leave.

**How the definition helps.** Owners in a top-choice cycle can each get their favorite house by trading among themselves, so every strict-core assignment gives them those houses (our own). Removing them and repeating forces each later round, and one checks that the resulting assignment is unblocked (our own). With ties, two owners indifferent between their houses can swap or not, and both assignments are in the strict core (our own).

**Wikipedia:** [Top trading cycle](https://en.wikipedia.org/wiki/Top_trading_cycle). It says: “Moreover, with strict preferences, there is a unique core-stable allocation, and it is the one found by TTC.”

**Sources:**

- [Lloyd Shapley, Herbert Scarf. On cores and indivisibility (1974).](https://doi.org/10.1016/0304-4068(74)90033-0)
- [Alvin E. Roth, Andrew Postlewaite. Weak versus strong domination in a market with indivisible goods (1977).](https://doi.org/10.1016/0304-4068(77)90004-0)

### Utility weights certify fractional efficiency

**Remember:** Test efficiency against every fractional split, not only whole-item trades.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)). arXiv econ.TH. Level 3: graduate.

**Definition.** With additive item values, an allocation is fractionally Pareto efficient if no allocation that may split items, with value proportional to the fraction, helps someone without hurting anyone. Splitting makes the set of reachable utility vectors a polytope (our own).

**Problem.** An allocation of finitely many goods with additive values is fractionally Pareto efficient exactly when it maximizes a strictly positive weighted sum of utilities.

**How the definition helps.** On a polytope every Pareto-efficient point has a supporting hyperplane with strictly positive weights, and a maximizer of a positively weighted sum cannot be Pareto improved (our own). For example, Alice values goods 1 and 2 at 3 and 2, George at 4 and 1, and Alice holds good 1 and George good 2 (our own). No whole-item change helps both, but splitting good 1 equally and giving Alice good 2 raises both utilities (our own).

**Wikipedia:** [Pareto efficiency](https://en.wikipedia.org/wiki/Pareto_efficiency). It says: “it is not Pareto dominated even by an allocation in which some items are split between agents.”

**Sources:**

- [Siddharth Barman, Sanath Kumar Krishnamurthy, Rohit Vaish. Finding Fair and Efficient Allocations (2018).](https://doi.org/10.1145/3219166.3219176)

### Support functions make profit convex in prices

**Remember:** Linear revenue at each production plan gives convex profit across prices.

*True by definition. Confidence: medium.* MSC 91B38 (Production theory, theory of the firm), 52A41. arXiv econ.TH, math.OC. Level 3: graduate.

**Definition.** Profit at prices p is the support function of the production set Y: the supremum of p·y over all feasible net output vectors y in Y, whether or not a maximizer exists. So profit is a supremum of functions that are linear in p.

**Problem.** The profit function is convex and positively homogeneous in prices. If profit-maximizing plans y(p) and y(q) exist, then (p − q)·(y(p) − y(q)) ≥ 0.

**How the definition helps.** A supremum of linear functions of p is convex, and scaling p by a positive constant scales it by the same constant. For the supply inequality, p·y(p) ≥ p·y(q) and q·y(q) ≥ q·y(p), and adding them gives the result (our own).

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function), [Hotelling's lemma](https://en.wikipedia.org/wiki/Hotelling%27s_lemma). It says: “It follows directly from its definition that the support function is positive homogeneous”

**Sources:** none listed. No primary source with a working link was found.

### Budget sets show why indirect utility is homogeneous and quasiconvex

**Remember:** Same budget set, same best utility.

*True by definition. Confidence: medium.* MSC 91B42 (Consumer behavior, demand theory), 91B16. arXiv econ.TH. Level 3: graduate.

**Definition.** Indirect utility v(p, w) is the supremum of utility over the budget set, the bundles x with p·x ≤ w. So it depends on prices and income only through that set.

**Problem.** Scaling prices and income together by a positive number leaves indirect utility unchanged. Indirect utility is quasiconvex in prices and income, so its value at a mixture is at most the larger endpoint value.

**How the definition helps.** Scaling p and w together leaves the budget set unchanged, so v is unchanged. For quasiconvexity, a bundle affordable at a mixture of two price–income pairs is affordable at one of them (our own). Otherwise its cost exceeds income at both, and therefore at the mixture (our own).

**Wikipedia:** [Indirect utility function](https://en.wikipedia.org/wiki/Indirect_utility_function). It says: “if prices and income are all multiplied by a given constant the same bundle of consumption represents a maximum, so optimal utility does not change”

**Sources:** none listed. No primary source with a working link was found.

### Expenditure slopes give compensated demand

**Remember:** Expenditure lies under each bundle's cost line and touches at the best.

*True by definition.* MSC 91B42 (Consumer behavior, demand theory). arXiv econ.TH. Level 3: graduate.

**Definition.** Expenditure e(p, a) is the least cost of reaching utility at least a, the infimum of p·x over bundles x with u(x) ≥ a. So e lies below the cost line p′ ↦ p′·x\* of a minimizing bundle x\* at p, and touches it at p (our own).

**Problem.** If expenditure is differentiable at a positive price vector and a minimizing bundle exists, its price gradient equals that bundle.

**How the definition helps.** Where a differentiable function touches a linear one from below, their gradients agree, and the cost line has gradient x\* (our own). So the price gradient of expenditure is the minimizing bundle (our own).

**Wikipedia:** [Shephard's lemma](https://en.wikipedia.org/wiki/Shephard%27s_lemma). It says: “the partial derivatives of the expenditure function with respect to the prices of goods equal the Hicksian demand functions for the relevant goods.”

**Sources:**

- [Lionel McKenzie. Demand Theory Without a Utility Index (1957).](https://doi.org/10.2307/2296067)

### Simulating signals cannot improve decisions

**Remember:** Better data can imitate worse data and then use its strategy.

*True by definition.* MSC 91B44 (Economics of information). arXiv econ.TH. Level 3: graduate.

**Definition.** One finite experiment is a garbling of another if its signal can be produced from the other's signal by one randomized map, the same in every hidden state.

**Problem.** If one finite experiment is a garbling of another, the original yields at least as much optimal expected utility in every finite decision problem.

**How the definition helps.** Whoever sees the original signal can run the garbling map and then any strategy for the garbled signal, getting the same action distribution and payoff in every state (our own). So the best original strategy does at least as well. Blackwell's theorem supplies the converse.

**Wikipedia:** [Blackwell's informativeness theorem](https://en.wikipedia.org/wiki/Blackwell%27s_informativeness_theorem). It says: “Intuitively, garbling is a way of adding "noise" to an information structure, such that the garbled information structure is considered to be less informative.”

**Sources:** none listed. No primary source with a working link was found.

### Gross substitutes ensure price equilibria

**Remember:** Raising some prices never drives you from the items that stayed cheap.

*Makes the theorem clean to state or prove.* MSC 91B50 (General equilibrium theory). arXiv econ.TH. Level 3: graduate.

**Definition.** A buyer's best bundle maximizes value minus total price. A valuation has gross substitutes if, after any price increases, every formerly best bundle has some new best bundle that keeps all its items whose prices did not change.

**Problem.** Suppose finitely many buyers have gross substitutes valuations for finitely many distinct goods, and adding goods never lowers value. Some nonnegative item prices let each buyer receive a best bundle, with each unassigned item priced at zero.

**How the definition helps.** Gross substitutes means that raising the prices of over-demanded items never removes demand for the others, which lets the Kelso–Crawford ascending process reach equilibrium prices (our own). Without it, three buyers who each value a different pair of three items at one admit no equilibrium (our own).

**Wikipedia:** [Gross substitutes (indivisible items)](https://en.wikipedia.org/wiki/Gross_substitutes_%28indivisible_items%29). It says: “The GS property means that when the price of some items increases, the demand for other items does not decrease.”

**Sources:**

- [Faruk Gul, Ennio Stacchetti. Walrasian Equilibrium with Gross Substitutes (1999).](https://doi.org/10.1006/jeth.1999.2531)

### Quasi-equilibrium makes the second welfare theorem hold without extra conditions

**Remember:** Separating prices: anything strictly better costs at least your wealth.

*Makes the theorem clean to state or prove.* MSC 91B52 (Special types of economic equilibria), 91B15, 91B50. arXiv econ.TH. Level 3: graduate.

**Definition.** A price quasi-equilibrium with transfers is a feasible allocation with nonzero prices at which every firm maximizes profit and each consumer's bundle costs her assigned wealth. Every strictly preferred bundle must cost at least that wealth, a weak inequality, which is what a separating hyperplane gives.

**Problem.** Consider a finite-dimensional economy with convex consumption and production sets, convex locally nonsatiated preferences, and nonempty interior of the aggregate production set. Every Pareto-efficient allocation admits a price quasi-equilibrium with transfers.

**How the definition helps.** A hyperplane separating the sums of strictly preferred bundles from the feasible totals gives prices that satisfy only weak inequalities, which is exactly the quasi-equilibrium condition. A genuine price equilibrium needs extra conditions, such as a cheaper bundle for each consumer.

**Wikipedia:** [Fundamental theorems of welfare economics](https://en.wikipedia.org/wiki/Fundamental_theorems_of_welfare_economics). It says: “any desired Pareto-efficient allocation can be supported as a price quasi-equilibrium with transfers.”

**Sources:**

- [G. Debreu, Valuation equilibrium and Pareto optimum, Proceedings of the National Academy of Sciences 40 (1954) 588–592](https://doi.org/10.1073/pnas.40.7.588)

### Benchmarks maximize expected log wealth

**Remember:** If relative wealth cannot grow on average, neither can its expected logarithm.

*True by definition.* MSC 91G10 (Portfolio theory), 91G15. arXiv q-fin.PM. Level 3: graduate.

**Definition.** A numeraire portfolio is an attainable portfolio with strictly positive wealth against which no allowed wealth process grows on average. That is, each process divided by its wealth has conditional expected future ratio at most its current ratio.

**Problem.** Suppose a numeraire portfolio exists and has finite expected terminal log wealth. It maximizes expected terminal log wealth among positive portfolios with equal initial wealth and finite expected logarithms.

**How the definition helps.** Another portfolio with the same initial wealth has expected terminal wealth ratio to the benchmark at most one (our own). By Jensen's inequality for the concave logarithm, its expected log ratio is at most log 1 = 0 (our own). Existence of the benchmark is the market theorem's job.

**Paper or page:** [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3). It says: “the numeraire portfolio is the log-optimal portfolio.”

**Sources:** none listed. No primary source with a working link was found.

### Convex order tests whether two price laws admit a martingale

**Remember:** Martingales only spread prices out, so convex averages cannot fall.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91G15 (Financial markets), 91G20. arXiv q-fin.MF. Level 3: graduate.

**Definition.** One integrable law on ℝ lies below another in convex order if every convex function integrable under both has expectation no greater under the first. Roughly, the second law is a more spread-out version with the same mean (our own).

**Problem.** Two real price distributions with finite first moments are the laws of X and Y for some martingale, E\[Y \| X\] = X, exactly when the first lies below the second in convex order.

**How the definition helps.** For a martingale, conditional Jensen's inequality gives E\[φ(X)\] ≤ E\[φ(Y)\] for every convex φ, so convex order is necessary. Strassen's theorem gives the converse by constructing a joint law with the required conditional mean.

**Paper or page:** [Convex Order and Arbitrage](https://arxiv.org/abs/2510.01599v1). It says: “The following are equivalent: The market is free of model-independent arbitrage. $\\mathcal{M}(\\mu ,\\nu ) \\neq \\emptyset $. $\\mu \\preceq \_c \\nu $.”

**Sources:**

- [Convex Order and Arbitrage](https://arxiv.org/abs/2510.01599v1)

### Exchange options become calls

**Remember:** Use the asset you give up as your unit.

*Makes the theorem clean to state or prove.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 3: graduate.

**Definition.** An exchange option lets its holder give one unit of the second asset for one unit of the first at expiry. Measured in units of the second asset, its payoff is the larger of zero and the price ratio minus one, a call on the ratio with exercise price one (our own).

**Problem.** Assume two dividend-free assets with positive prices follow correlated geometric Brownian motions with constant volatilities and correlation in a frictionless Black–Scholes market. The exchange option costs as much, in second-asset units, as a call on their ratio with exercise price one.

**How the definition helps.** Using the second asset as the unit gives a pricing probability under which the price ratio is a martingale (our own). The ratio is lognormal, with variance from both volatilities and their correlation, so the call formula with zero interest prices it (our own).

**Wikipedia:** [Margrabe's formula](https://en.wikipedia.org/wiki/Margrabe%27s_formula). It says: “has become a call option on the first asset (with its numeraire pricing) with a strike of 1 unit of the riskless asset.”

**Sources:**

- [William Margrabe. The Value of an Option to Exchange One Asset for Another (1978).](https://doi.org/10.1111/j.1540-6261.1978.tb03397.x)

### Geometric averaging makes averages lognormal

**Remember:** Logarithms turn the nth root of a product into an average of logs.

*True by definition.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 3: graduate.

**Definition.** For positive prices S₁,…,Sₙ at n fixed dates, the geometric average is the positive nth root of S₁⋯Sₙ. Its logarithm is the ordinary average of the log prices (our own).

**Problem.** Assume the stock’s log price follows Brownian motion with constant drift and volatility under the pricing probability, with a constant interest rate. Then the geometric average at fixed dates is lognormal, meaning its logarithm is normally distributed.

**How the definition helps.** Under these assumptions the log prices are jointly normal, so their average is normal, with mean and variance set by the dates (our own). This gives a closed-form price for a geometric Asian call (our own).

**Wikipedia:** [Asian option](https://en.wikipedia.org/wiki/Asian_option). It says: “However, an exact result is easily obtained for Asian options with geometric averaging”

**Sources:**

- [A.G.Z. Kemna, A.C.F. Vorst. A pricing method for options based on average asset values (1990).](https://doi.org/10.1016/0378-4266(90)90039-5)

### Changing units preserves martingale pricing

**Remember:** Change the unit and reweight by the same asset.

*True by definition.* MSC 91G30 (Interest rates, asset pricing, etc. (stochastic models)). arXiv q-fin.PR. Level 3: graduate.

**Definition.** Pick a strictly positive traded asset with known initial price as the new unit for quoting prices. Weight each outcome by the new unit's final discounted price, its price divided by the bank account, over its initial discounted price, so the weight cancels the division by the unit (our own).

**Problem.** Consider dividend-free assets over a fixed finite horizon whose discounted prices, including the new unit's, equal their expected future values given current information. Under the reweighted probability, prices quoted in the new unit have the same property.

**How the definition helps.** In the conditional average of a price quoted in the new unit, the weight cancels the unit and leaves the original discounted conditional average, divided by today's discounted unit (our own). The original pricing probability must exist, and the discounted unit must have constant expectation so that its weight defines a probability (our own).

**Wikipedia:** [Numéraire](https://en.wikipedia.org/wiki/Num%C3%A9raire). It says: “Then it can be shown that S(t) is a martingale under Qᴺ when priced in terms of the new numéraire N(t):”

**Sources:**

- [Hélyette Geman, Nicole El Karoui, Jean-Charles Rochet. Changes of numéraire, changes of probability measure and option pricing (1995).](https://doi.org/10.2307/3215299)

### Convex acceptance makes capital convex

**Remember:** Mix acceptable positions and mix their cash cushions in the same proportions.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** An acceptance set lists the safe financial positions and stays safe when a payoff increases. The capital required for a position is the infimum of the cash amounts which, added to it, make it safe, and a negative amount means a withdrawal.

**Problem.** Assume the capital requirement is finite for every position. A convex acceptance set gives a convex capital requirement.

**How the definition helps.** If X plus m and Y plus n are safe, convexity makes their mixture safe, so the mixed position needs at most the mixed cash amount (our own). Letting m and n approach their infima gives the convexity inequality for capital (our own).

**Paper or page:** [A note on the induction of comonotonic additive risk measures from acceptance sets](https://arxiv.org/abs/2307.04647v2). It says: “If A is convex, then ρₐ is convex.”

**Sources:** none listed. No primary source with a working link was found.

### Firm tails bound systemic exposure

**Remember:** Your own worst tail beats any other event of that size.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** Fix a tail fraction t in (0,1), with integrable losses and continuous loss distributions. A firm's expected shortfall averages its loss over its own worst fraction t, which is the largest average loss over any event of probability t (our own). Its marginal expected shortfall averages its loss over the market's worst fraction t, one such event.

**Problem.** A firm’s marginal expected shortfall cannot exceed its own expected shortfall. The bound is sharp when all losses increase with the same uniform random variable.

**How the definition helps.** The market's tail is one candidate event in the maximum, so it gives an average no larger than the firm's own tail (our own). If every loss increases with the same uniform random variable, the market and the firm select the same tail, and equality holds (our own).

**Paper or page:** [Static marginal expected shortfall: Systemic risk measurement under dependence uncertainty](https://arxiv.org/abs/2504.19953v2), [An elementary proof of the dual representation of Expected Shortfall](https://arxiv.org/abs/2306.14506v1). It says: “The upper bound of MESₚ(Xᵢ, S) is M(p) = ESₚ(Xᵢ).”

**Sources:**

- [Jinghui Chen, Edward Furman, X. Sheldon Lin. Static marginal expected shortfall: Systemic risk measurement under dependence uncertainty (2025).](https://arxiv.org/abs/2504.19953v2)

### Independent entropic risks add

**Remember:** Independence multiplies exponential averages, and the log adds them.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** For risk aversion a &gt; 0, the entropic risk of a loss X is the sure loss with the same expected exponential disutility. Solving for it gives ln(E\[exp(aX)\])/a, where E means expectation.

**Problem.** Entropic risk adds across independent losses when both use the same parameter and their exponential moments are finite.

**How the definition helps.** For independent losses, E\[exp(a(X + Y))\] is the product E\[exp(aX)\]·E\[exp(aY)\] (our own). The logarithm turns this product into a sum of the two risks (our own).

**Wikipedia:** [Entropic risk measure](https://en.wikipedia.org/wiki/Entropic_risk_measure). It says: “the entropic risk measure is a risk measure which depends on the risk aversion of the user through the exponential utility function.”

**Sources:** none listed. No primary source with a working link was found.

### Quantile averages handle tail ties

**Remember:** Take exactly the chosen probability mass, splitting ties at the cutoff.

*Rules out counterexamples.* MSC 91G70 (Statistical methods; risk measures), 90C15. arXiv q-fin.RM, math.OC. Level 3: graduate.

**Definition.** For a tail fraction t in (0,1), expected shortfall is the average of the loss quantiles over levels from 1 − t to 1. Here the quantile at p is the smallest value with cumulative probability at least p, so the average takes exactly mass t from the top, splitting a tie at the cutoff (our own).

**Problem.** For an integrable loss X and tail fraction t, expected shortfall equals the minimum over real thresholds c of c + E\[max(X − c, 0)\]/t.

**How the definition helps.** Write X as Q(U), with Q the quantile function and U uniform on (0,1) (our own). For every c, max(Q(U) − c, 0) is at least Q(U) − c on the event U &gt; 1 − t, which gives the bound, with equality at the cutoff quantile (our own). Ties matter: a loss of 100 with probability 0.05 has expected shortfall 50 at t = 0.1, but averages 100 above zero (our own).

**Paper or page:** [Risk-Adaptive Approaches to Stochastic Optimization: A Survey](https://arxiv.org/abs/2212.00856v3). It says: “expectation of the α-tail distribution of ξ”

**Sources:**

- [Johannes O. Royset, Risk-Adaptive Approaches to Stochastic Optimization: A Survey](https://arxiv.org/abs/2212.00856v3)

### Scaled tail risk is concave

**Remember:** Scaled shortfall is the lowest of a family of lines.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** For an integrable loss Y and 0 &lt; β &lt; 1, expected shortfall averages the quantiles of Y from level β to 1. Equivalently, it is the minimum over real thresholds t of t + E\[max(Y − t, 0)\]/(1 − β), where E means expectation.

**Problem.** Multiplying expected shortfall by 1 − β gives a concave function of β for each fixed loss.

**How the definition helps.** Times 1 − β, it becomes the minimum over t of (1 − β)t + E\[max(Y − t, 0)\], and each of these is an affine function of β (our own). A minimum of affine functions is concave (our own).

**Paper or page:** [Higher order measures of risk and stochastic dominance](https://arxiv.org/abs/2402.15387v1). It says: “For Y fixed in the domain of ℛ, the mapping β ↦ (1 − β) · ℛᵦ(Y) is concave.”

**Sources:**

- [Alois Pichler. Higher order measures of risk and stochastic dominance (2024).](https://arxiv.org/abs/2402.15387v1)

### Worst-case averages make expected shortfall subadditive

**Remember:** A sum's worst average is at most the sum of worst averages.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 3: graduate.

**Definition.** Fix a tail fraction α in (0,1). Expected shortfall of a loss X is its worst reweighted average, the maximum of E\[ZX\] over random weights Z with 0 ≤ Z ≤ 1/α and E\[Z\] = 1. This equals the average of the worst α fraction of losses, with just enough mass taken at a tied cutoff.

**Problem.** For two integrable losses, expected shortfall of their sum is at most the sum of their expected shortfalls.

**How the definition helps.** Take the best weights Z for X + Y; then E\[Z(X + Y)\] = E\[ZX\] + E\[ZY\], and each term is at most its own maximum (our own). Value at risk fails this: two independent losses, each one with probability 4% and zero otherwise, have 95th percentile zero, but their sum has 95th percentile one (our own).

**Wikipedia:** [Value at risk](https://en.wikipedia.org/wiki/Value_at_risk). It says: “VaR of a combined portfolio can be larger than the sum of the VaRs of its components.”

**Paper or page:** [An elementary proof of the dual representation of Expected Shortfall](https://arxiv.org/abs/2306.14506v1). It says: “In particular, ESα is subadditive, i.e., for all X,Y ∈ L¹, ESα(X + Y) ≤ ESα(X) + ESα(Y).”

**Sources:**

- [Herdegen and Munari, An elementary proof of the dual representation of Expected Shortfall (2023)](https://doi.org/10.1007/s11579-023-00346-8)

### Minimax holds in all subgames exactly when no infinite triangular subgame exists

**Remember:** Whoever names the larger number wins, and no value exists.

*Makes the theorem clean to state or prove.* MSC 91A05 (2-person games), 68Q32. arXiv cs.LG, cs.GT. Level 4: research.

**Definition.** An infinite triangular subgame is a copy of the game 'larger number wins' inside a binary zero-sum game. It has distinct rows a₁, a₂, … and distinct columns b₁, b₂, …, with payoff one for i &lt; j and zero otherwise, or the reverse throughout.

**Problem.** Take a binary zero-sum game whose payoff functions have finite Vapnik–Chervonenkis dimension. Every subgame, a restriction to nonempty action sets, has equal upper and lower values over finitely supported mixed strategies exactly when there is no infinite triangular subgame.

**How the definition helps.** In the larger-number game each player beats any finitely supported mixed strategy of the other by naming a larger index, so the upper value is 1 and the lower value 0 (Proposition 10 of the paper). The hard direction is the converse, which uses the finite dimension to handle infinitely many actions.

**Paper or page:** [Online Learning with Simple Predictors and a Combinatorial Characterization of Minimax in 0/1 Games](https://arxiv.org/abs/2102.01646v1). It says: “for all subgames (𝒜′, ℬ′, val) if and only if it has no infinite triangular subgame.”

**Sources:**

- [Steve Hanneke, Roi Livni, Shay Moran, Online Learning with Simple Predictors and a Combinatorial Characterization of Minimax in 0/1 Games, arXiv:2102.01646v1 (2021)](https://arxiv.org/abs/2102.01646v1)

### Equilibria are exactly the feasible profiles where the Nikaido–Isoda merit function vanishes

**Remember:** At equilibrium, no player saves anything by switching alone.

*True by definition.* MSC 91A10 (Noncooperative games), 90C33, 90C11. arXiv econ.TH, math.OC. Level 4: research.

**Definition.** In a generalized Nash game, each player's allowed strategies may depend on the other players' choices. The merit function V̂(x) is the largest total cost that the players could save, each switching alone to an allowed strategy, with the switches chosen separately.

**Problem.** A profile x is a generalized Nash equilibrium exactly when x is feasible and V̂(x) = 0.

**How the definition helps.** Each player may stay put, so V̂(x) ≥ 0 when x is feasible (our own). Because the switches are chosen separately, V̂(x) = 0 exactly when no player can save by switching alone, which is the definition of equilibrium (our own).

**Paper or page:** [Generalized Nash Equilibrium Problems with Mixed-Integer Variables](https://arxiv.org/abs/2107.13298v3). It says: “We present a new approach to characterize equilibria via a convexification technique using the Nikaido-Isoda function.”

**Sources:**

- [Tobias Harks, Julian Schwarz, Generalized Nash Equilibrium Problems with Mixed-Integer Variables, arXiv:2107.13298v3 (2024); Mathematical Programming (2024)](https://arxiv.org/abs/2107.13298v3)

### Random partitions with the right block odds give the Shapley potential

**Remember:** Average the total worth of the groups in a random split.

*Makes the theorem clean to state or prove.* MSC 91A14 (Potential and congestion games), 91A12, 05A18. arXiv econ.TH. Level 4: research.

**Definition.** The potential of a finite cooperative game with v(∅) = 0 is zero for the empty game and drops by a player's Shapley value when that player is removed. It equals the sum over nonempty coalitions S of (\|S\|−1)!(n−\|S\|)!/n! times the worth of S (our own).

**Problem.** Fix a random partition of n players. Its expected total block worth equals the potential for every game exactly when each nonempty coalition of size t has block probability (t−1)!(n−t)!/n!.

**How the definition helps.** Expected total block worth is the sum of each coalition's worth times its probability of being a block (our own). Matching the potential formula for every worth function forces, and is ensured by, equal coefficients (our own).

**Paper or page:** [Random partitions, potential, value, and externalities](https://arxiv.org/abs/2402.00394v2). It says: “the expected accumulated worth of a random partition of the players.”

**Sources:**

- [André Casajus, Yukihiko Funaki, Frank Huettner, Random partitions, potential, value, and externalities, arXiv:2402.00394v2 (2024)](https://arxiv.org/abs/2402.00394v2)

### Discounting past and future rewards multiplies game values by 1/(1 − γλ)

**Remember:** Two geometric discounts in a row only rescale the payoff.

*True by definition.* MSC 91A15 (Stochastic games, stochastic differential games), 91A50. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Past discounting with factor γ replaces the reward at step n by the sum of γⁿ⁻ᵏ rₖ over all k ≤ n, and future discounting with factor λ then scores a play by the sum of λⁿ times these new rewards. So each original reward rₖ gets weight λᵏ times 1 + γλ + (γλ)² + ⋯ (our own).

**Problem.** Consider a stochastic game with bounded rewards and discount factors γ and λ in \[0,1). Its value with both discounts equals its ordinary λ-discounted value divided by 1 − γλ.

**How the definition helps.** Bounded rewards let us exchange the two sums, and the geometric sum equals 1/(1 − γλ) (our own). So every play's payoff, and hence the value, is the λ-discounted one divided by 1 − γλ (our own).

**Paper or page:** [Discounting the Past](https://arxiv.org/abs/2102.06985v2). It says: “the values of these games may be computed via reductions to standard discounted and mean-payoff games.”

**Sources:**

- [Taylor Dohmen, Ashutosh Trivedi, Discounting the Past, arXiv:2102.06985v2 (2021)](https://arxiv.org/abs/2102.06985v2)

### Low swap regret makes play an approximate correlated equilibrium

**Remember:** No regret for any swap is the equilibrium condition, averaged over time.

*True by definition.* MSC 91A26 (Rationality and learning in game theory), 91A10, 68Q32. arXiv cs.GT, cs.LG. Level 4: research.

**Definition.** A swap rule replaces each of a player's actions by some action. Swap regret is the largest total gain a player could have had by applying one swap rule in every past round, with opponents' actions unchanged. An ε-correlated equilibrium is a joint distribution in which no swap rule gains any player more than ε in expectation.

**Problem.** If each player has swap regret at most R(T) in T rounds, the recorded actions, sampled uniformly, form an R(T)/T-approximate correlated equilibrium.

**How the definition helps.** Under the uniform distribution on the T recorded rounds, a swap rule's expected gain is its total gain divided by T, which is at most R(T)/T. The hard part is finding algorithms with small swap regret.

**Paper or page:** [Fast swap regret minimization and applications to approximate correlated equilibria](https://arxiv.org/abs/2310.19647v2). It says: “If an m-player normal-form game is played repeatedly for T days, and each player incurs no more than R(T) swap regret over the T days, then the empirical distribution of the joint actions by the players is an R(T)/T-correlated equilibrium.”

**Sources:**

- [Binghui Peng and Aviad Rubinstein, Fast swap regret minimization and applications to approximate correlated equilibria, arXiv 2310.19647](https://arxiv.org/abs/2310.19647v2)

### Monotone rationality makes elimination order-preserving, so Tarski's fixed-point theorem applies

**Remember:** Acceptable in a small game stays acceptable in a bigger one.

*Makes the theorem clean to state or prove.* MSC 91A26 (Rationality and learning in game theory), 91A44, 03B42. arXiv econ.TH. Level 4: research.

**Definition.** A rationality notion says which strategies are acceptable, given the strategies still available. It is monotone if a strategy acceptable in a restriction of the game stays acceptable in every larger restriction, so elimination preserves the order of restrictions. Iterated elimination deletes unacceptable strategies and takes intersections at limit stages.

**Problem.** In any strategic game, finite or infinite, common knowledge of a monotone rationality notion implies that players choose only strategies that survive the elimination for that notion. The elimination may need transfinitely many steps.

**How the definition helps.** On a common-knowledge event, rationality and monotonicity make every represented strategy acceptable within the restriction they form, so elimination deletes none of them (our own). Tarski's theorem puts every such restriction inside the greatest fixed point, which transfinite elimination from the full game reaches (our own).

**Paper or page:** [The Role of Monotonicity in the Epistemic Analysis of Strategic Games](https://arxiv.org/abs/1010.5595v2). It says: “We establish a general theorem that deals with monotonic rationality notions and arbitrary strategic games and allows to strengthen the above result to arbitrary games, other rationality notions, and transfinite iterations of the elimination process.”

**Sources:**

- [Krzysztof R. Apt, Jonathan A. Zvesper, The Role of Monotonicity in the Epistemic Analysis of Strategic Games, arXiv:1010.5595v2 (2010); Games 2010, 1(4), 381-394; see http://www.mdpi.com/2073-4336/1/4/381/](https://arxiv.org/abs/1010.5595v2)

### Onto belief maps let a type structure represent all conditional belief hierarchies

**Remember:** Give every possible belief a type, and every belief hierarchy appears.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 91A27 (Games with incomplete information, Bayesian games), 91A44, 91B44. arXiv econ.TH. Level 4: research.

**Definition.** A type structure gives each type of a player a conditional probability system, beliefs for each conditioning event linked by Bayes' rule, about the basic uncertainty and the other players' types. It is complete if every such system is the belief of some type, so the belief maps are onto.

**Problem.** A complete type structure that is compact with continuous belief maps represents all hierarchies of conditional beliefs, which the paper calls terminal. A complete Souslin structure, with spaces meeting a mild regularity condition, satisfies a weaker finite version.

**How the definition helps.** Onto belief maps supply a type for every belief needed at each finite level of a hierarchy (our own). Compactness and continuity carry this from all finite levels to whole hierarchies. The result extends Friedenberg's 2010 theorem to conditional beliefs.

**Paper or page:** [Complete Conditional Type Structures (Extended Abstract)](https://arxiv.org/abs/2307.05630v1). It says: “We provide sufficient conditions under which a complete type structure represents all hierarchies of conditional beliefs.”

**Sources:**

- [Nicodemo De Vito, Complete Conditional Type Structures (Extended Abstract), arXiv:2307.05630v1 (2023); EPTCS 379, 2023, pp. 173-184](https://arxiv.org/abs/2307.05630v1)

### Credibility with fixed message frequencies is tested by cyclical monotonicity

**Remember:** Keep each message's frequency fixed; no reshuffle of states may pay.

*Makes the theorem clean to state or prove.* MSC 91A28 (Signaling and communication in game theory), 91B44. arXiv econ.TH. Level 4: research.

**Definition.** In Bayesian persuasion, a sender commits to a rule that sends messages depending on the state. The rule is credible if the sender cannot gain by reassigning states to messages while keeping each message's overall frequency, so the current joint law is a best coupling with those fixed marginals. A distribution over state–action pairs is cyclically monotone if no cyclic swap of actions among its support pairs raises the sender's total payoff.

**Problem.** In the paper's finite model, a disclosure rule is credible exactly when its distribution over states and actions is cyclically monotone for the sender's payoff.

**How the definition helps.** Fixed message frequencies make the sender's deviations exactly the couplings with the same marginals, so credibility means the current coupling is optimal for the sender. On finite sets a coupling is optimal exactly when its support is cyclically monotone, the classical fact in the paper's Lemma 2.

**Paper or page:** [Credible Persuasion](https://arxiv.org/abs/2205.03495v1). It says: “We show that the credibility of a disclosure policy is equivalent to a cyclical monotonicity condition on its induced distribution over states and actions.”

**Sources:**

- [Xiao Lin, Ce Liu, Credible Persuasion, arXiv:2205.03495v1 (2022)](https://arxiv.org/abs/2205.03495v1)

### Smoothness gives a short price of anarchy bound

**Remember:** Lone switches toward b cost at most λC(b) plus μC(a).

*True by definition.* MSC 91A68 (Algorithmic game theory and complexity), 91A10. arXiv cs.GT. Level 4: research.

**Definition.** Let C(a) be the total cost of all players at outcome a. A game is (λ, μ)-smooth, with λ ≥ 0 and μ &lt; 1, if for every pair of outcomes a and b, the players' costs of switching alone from aᵢ to bᵢ sum to at most λC(b) + μC(a).

**Problem.** In a (λ, μ)-smooth game with positive optimal cost, every pure Nash equilibrium costs at most λ/(1 − μ) times the optimum. So the price of anarchy for pure equilibria is at most λ/(1 − μ).

**How the definition helps.** Take a an equilibrium and b optimal; each player's equilibrium cost is at most the cost of switching alone to bᵢ, so C(a) ≤ λC(b) + μC(a). Rearranging gives C(a) ≤ λC(b)/(1 − μ).

**Wikipedia:** [Price of anarchy](https://en.wikipedia.org/wiki/Price_of_anarchy). It says: “PoA upper bounds can be obtained if the game is shown to satisfy a so-called smoothness inequality.”

**Sources:**

- [Tim Roughgarden, Intrinsic Robustness of the Price of Anarchy, Journal of the ACM 62 (2015)](https://doi.org/10.1145/2806883)

### Coarser voting groups preserve obvious truthfulness

**Remember:** Bigger groups fix more voters, so worst cases only improve.

*True by definition.* MSC 91B03 (Mechanism design theory), 91B12. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Group voters into a partition. A procedure passes the obvious-truthfulness test if, at the first decision where truthful play and a deviation differ, the worst truthful outcome ranks at least as high as the best deviating outcome. Worst and best range over the other groups' actions, for each fixed choice of strategies of the other voters in one's own group.

**Problem.** If a voting procedure passes this test for a partition of the voters, it passes after any groups merge.

**How the definition helps.** Merging groups fixes more strategies, so both ranges of outcomes shrink (our own). The worst truthful outcome can only rise and the best deviating outcome can only fall, so the test still passes (our own).

**Paper or page:** [Obvious Strategy-proofness with Respect to a Partition](https://arxiv.org/abs/2409.05315v1). It says: “Let f: D → A be OSP with respect to S\* and let S be a coarser partition of S\*. Then, f: D → A is OSP with respect to S.”

**Sources:**

- [Obvious Strategy-proofness with Respect to a Partition](https://arxiv.org/abs/2409.05315v1)

### A prior must average the player's beliefs to avoid money pumps

**Remember:** A prior must reproduce the beliefs when it averages them.

*Rules out counterexamples. Confidence: medium.* MSC 91B06 (Decision theory), 91B44, 91A27. arXiv econ.TH. Level 4: research.

**Definition.** Let B be the finite family of a player's posterior beliefs on a finite state space. A distribution p is disintegrable if it is an average (convex combination) of members of B. It is a money pump if some bet has nonnegative expected value under every belief in B but negative expected value under p.

**Problem.** For one player with finitely many states, every distribution is either disintegrable or a money pump, and never both.

**How the definition helps.** An average of nonnegative expected payoffs is nonnegative, so no distribution is both (our own). If p is not an average of the beliefs, a hyperplane separating p from their convex hull gives a bet that every belief accepts but p rejects (our own reading of the converse).

**Paper or page:** [Three Variations on Money Pump, Common Prior, and Trade](https://arxiv.org/abs/2401.13132v1). It says: “In the single player setting we conclude that a probability distribution is a prior if it is disintegrable, because this definition excludes money pump.”

**Sources:**

- [Ziv Hellman, Miklos Pinter, Three Variations on Money Pump, Common Prior, and Trade, arXiv:2401.13132v1 (2024)](https://arxiv.org/abs/2401.13132v1)

### Positional voting rules with shrinking score gaps cannot be obviously manipulated

**Remember:** Obvious lies improve the best case or the worst case.

*Makes the theorem clean to state or prove.* MSC 91B12 (Voting theory), 91B14, 91B03. arXiv econ.TH. Level 4: research.

**Definition.** A voter manipulates obviously if some false ballot gives her a better best-case outcome, or a better worst-case outcome, than her true ballot, with cases ranging over all ballots of the other voters. A positional scoring rule gives each candidate points by its rank on each ballot.

**Problem.** A strict positional scoring rule whose gaps between the scores of consecutive ranks weakly shrink down the ballot cannot be obviously manipulated. By contrast, the Gibbard–Satterthwaite theorem says every unanimous, non-dictatorial rule with at least three candidates can be manipulated.

**How the definition helps.** The definition compares only the extremes, so manipulations that pay only at particular profiles of other ballots do not count. So the Gibbard–Satterthwaite theorem does not settle this weaker question. Theorem 4 proves that shrinking score gaps protect both extremes.

**Paper or page:** [Obvious Manipulability of Voting Rules](https://arxiv.org/abs/2111.01983v3). It says: “In contrast to the Gibbard-Satterthwaite theorem, many of the rules we examined are not obviously manipulable.”

**Sources:**

- [Haris Aziz, Alexander Lam, Obvious Manipulability of Voting Rules, arXiv:2111.01983v3 (2022)](https://arxiv.org/abs/2111.01983v3)

### An allocation that is envy-free up to one item always exists

**Remember:** Envy is forgiven if removing one good from the other ends it.

*Rules out counterexamples.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91A68. arXiv cs.GT, econ.TH. Level 4: research.

**Definition.** An allocation of indivisible goods is envy-free up to one item if each agent weakly prefers her own bundle to any other agent's bundle once at most one good is removed from that other bundle.

**Problem.** For indivisible goods and monotone utilities, an allocation of all items that is envy-free up to one item always exists, although an envy-free one need not.

**How the definition helps.** With one good and two agents who both want it, every allocation causes envy, but removing that good ends it (our own). The envy-cycle elimination algorithm keeps this one-good bound while it hands out the goods one at a time (our own).

**Wikipedia:** [Envy-free item allocation](https://en.wikipedia.org/wiki/Envy-free_item_allocation). It says: “An EF1 allocation always exists and can be found efficiently by various procedures”

**Sources:**

- [Lipton, R. J.; Markakis, E.; Mossel, E.; Saberi, A. (2004). On approximately fair allocations of indivisible goods. Proc. 5th ACM Conference on Electronic Commerce, 125–131.](https://doi.org/10.1145/988772.988792)
- [Budish, E. (2011). The combinatorial assignment problem: approximate competitive equilibrium from equal incomes. Journal of Political Economy 119(6), 1061–1103.](https://doi.org/10.1086/664613)

### Judging envy in expectation makes envy-free efficient lotteries always exist

**Remember:** Fairness before the draw can hold when fairness after the draw cannot.

*Makes the theorem clean to state or prove.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91B15. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** An allocation lottery is a random allocation of indivisible items. It is ex-ante envy-free if each agent values her own random bundle, in expectation, at least as much as any other agent's random bundle.

**Problem.** In the finite fair-division model, with feasible allocations closed under exchanging agents' bundles, some allocation lottery is ex-ante envy-free and Pareto optimal in expected utility. A deterministic envy-free allocation need not exist.

**How the definition helps.** Judging envy in expectation lets a lottery share what no single allocation can: two people who both want one item each get it with probability one half (our own). Existence in general is the theorem of Cole and Tao. This paper shows that finding such a lottery lies in PPAD.

**Paper or page:** [On the complexity of Pareto-optimal and envy-free lotteries](https://arxiv.org/abs/2307.12605v1). It says: “Cole and Tao (2021) have proved that an ex-ante envy-free and Pareto-optimal allocation lottery is always guaranteed to exist.”

**Sources:**

- [Ioannis Caragiannis, Kristoffer Arnsfelt Hansen, Nidhi Rathi, On the complexity of Pareto-optimal and envy-free lotteries, arXiv:2307.12605v1 (2023)](https://arxiv.org/abs/2307.12605v1)

### One allocation gives every agent half of any feasible fair share

**Remember:** A feasible share can be given to everyone at once.

*Makes the theorem clean to state or prove.* MSC 91B32 (Resource and cost allocation (including fair division, apportionment, etc.)), 91A68. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Agents with entitlements, weights summing to one, divide indivisible goods. A share rule gives each agent a minimum value from her valuation and entitlement, and it is feasible if every instance has an allocation giving every agent her share.

**Problem.** Suppose agents value bundles additively and each picks her own feasible share rule. Then some allocation gives every agent at least half her chosen share, and one half cannot be improved in general.

**How the definition helps.** Feasibility bounds each rule's shares by what one allocation can give everyone at once (our own). The quoted theorem turns this into one allocation meeting half of each agent's own rule, even when the rules differ. A separate worst-case instance shows one half is best possible (our own).

**Paper or page:** [Share-Based Fairness for Arbitrary Entitlements](https://arxiv.org/abs/2405.14575v1). It says: “there is an allocation that gives every agent at least half her share value, regardless of which feasible share-based fairness notion the agent wishes to use.”

**Sources:**

- [Moshe Babaioff, Uriel Feige, Share-Based Fairness for Arbitrary Entitlements, arXiv:2405.14575v1 (2024)](https://arxiv.org/abs/2405.14575v1)

### Posterior messages preserve feasible beliefs

**Remember:** Tell each player the probability their old signal implied.

*True by definition.* MSC 91B44 (Economics of information), 91A27. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** Given a common prior and private signals, a player's posterior is the conditional probability of winning given their signal. A signal is direct if its value is that posterior, the winning probability it implies.

**Problem.** Any joint distribution of posterior winning probabilities obtainable from private signals is also obtainable from direct signals under the same prior.

**How the definition helps.** Replace each signal by the winning probability it implies; by the tower property, the probability of winning given this new report is the report itself (our own). So the joint law of posteriors is unchanged (our own).

**Paper or page:** [A Belief-Based Characterization of Reduced-Form Auctions](https://arxiv.org/abs/2307.04070v1). It says: “then there exists a direct information structure I such that ν is p₀-feasible for I.”

**Sources:**

- [A Belief-Based Characterization of Reduced-Form Auctions](https://arxiv.org/abs/2307.04070v1)

### Unbiased statistics elicit posterior means

**Remember:** Score the report against a signal with the right mean.

*True by definition.* MSC 91B44 (Economics of information). arXiv econ.TH. Level 4: research.

**Definition.** A statistic h(Y) of the verifier's signal is unbiased for the target g(θ) if its conditional mean in each state θ equals g(θ). Since Y is independent of the analyst's information given θ, h(Y) then has conditional mean equal to the analyst's posterior mean of g(θ) (our own).

**Problem.** For finite states and signals, an unbiased statistic lets a verifier pay a risk-neutral analyst, who maximizes expected payment, so that reporting the posterior mean is optimal.

**How the definition helps.** Pay twice the report r times h(Y), minus r² (our own). Its expectation is 2rm − r², where m is the posterior mean, and this is uniquely maximized at r = m (our own).

**Paper or page:** [Elicitability](https://arxiv.org/abs/2510.00879v1). It says: “then the mean of g(θ) is elicitable with (Y, π).”

**Sources:**

- [Yaron Azrieli, Christopher Chambers, Paul Healy, Nicolas Lambert. Elicitability (2025).](https://arxiv.org/abs/2510.00879v1)

### Saturated agent spaces make fractional and ordinary coalitions block the same allocations

**Remember:** Saturation lets some agents fully join in place of all partly joining.

*Makes the theorem clean to state or prove.* MSC 91B50 (General equilibrium theory), 91A12, 28B05. arXiv econ.TH. Level 4: research.

**Definition.** An agent measure space is saturated if L¹ on every set of positive measure has no countable norm-dense subset, so Lyapunov's convexity theorem holds exactly, even in Banach spaces (our own). A fuzzy coalition joins a trade with measurable weights in \[0,1\], positive on a set of positive measure, and an ordinary coalition joins at full weight.

**Problem.** If the measure space of agents is saturated, the core equals the fuzzy core, the allocations that no fuzzy coalition can block. This holds with commodities in any Banach space and minimal assumptions on preferences.

**How the definition helps.** Exact Lyapunov convexity turns the integrals of a fuzzy block, with participation mass included, into those of an ordinary coalition of positive measure with the same totals (our own). Conversely, an ordinary coalition is a fuzzy one with weights 0 and 1 (our own).

**Paper or page:** [Fuzzy Core Equivalence in Large Economies: A Role for the Infinite-Dimensional Lyapunov Theorem](https://arxiv.org/abs/2112.15539v1). It says: “Due to the exact version of the Lyapunov convexity theorem in Banach spaces, we clarify that the additional structure of commodity spaces and preferences is unnecessary whenever the measure space of agents is "saturated".”

**Sources:**

- [M. Ali Khan, Nobusumi Sagara, Fuzzy Core Equivalence in Large Economies: A Role for the Infinite-Dimensional Lyapunov Theorem, arXiv:2112.15539v1 (2021)](https://arxiv.org/abs/2112.15539v1)

### One blocking rule for pairs and coalitions equates strong core and stability

**Remember:** Allow ties in both tests, but always require someone to gain.

*Makes the theorem clean to state or prove.* MSC 91B68 (Matching models), 91A12. arXiv econ.TH. Level 4: research.

**Definition.** A coalition strongly blocks a matching if a feasible rematching among its members makes all of them weakly better off and at least one strictly better off. The strong core excludes all such blocks, and strong stability requires individual rationality and excludes such blocks by worker–firm pairs.

**Problem.** For many-to-one matching with responsive preferences and possible ties, the strong core equals the set of strongly stable matchings.

**How the definition helps.** Pairs and coalitions use the same improvement test, so every matching in the strong core is strongly stable (our own). The paper's work is the reverse inclusion, which finds a blocking pair inside any blocking coalition.

**Paper or page:** [Core and stability notions in many-to-one matching markets with indifferences](https://arxiv.org/abs/2203.16293v1). It says: “the strong core coincides with the strongly stable set”

**Sources:**

- [Agustín G. Bonifacio, Noelia Juarez, Pablo Neme, Jorge Oviedo, Core and stability notions in many-to-one matching markets with indifferences, arXiv:2203.16293v1 (2022)](https://arxiv.org/abs/2203.16293v1)

### Quasi-stability permits repair by iteration

**Remember:** Allow blocks from unemployed workers while the matching is being repaired.

*Makes the theorem clean to state or prove.* MSC 91B68 (Matching models). arXiv econ.TH. Level 4: research.

**Definition.** A worker and firm block a matching if the worker prefers the firm and the firm would choose the worker from its staff plus that worker. A matching is worker-quasi-stable if all assignments are acceptable and every blocking pair has an unemployed worker. It is stable if all assignments are acceptable and there are no blocking pairs at all.

**Problem.** Assume finitely many workers and firms, strict preferences, and substitutable firm choices. The paper's repair round maps worker-quasi-stable matchings to worker-quasi-stable matchings, and its fixed points are exactly the stable matchings.

**How the definition helps.** Quasi-stability confines blocks to unemployed workers, so a repair round lets each apply to their favorite blocking firm while firms choose from applicants and staff (our own explanation). The hard step shows that no employed worker can block afterwards. A fixed point therefore has no unemployed blocker either, so it is stable; a stable matching has no applicants, so it is fixed.

**Paper or page:** [The lattice of worker-quasi-stable matchings](https://arxiv.org/abs/2103.16330v4). It says: “T(μ) = μ if and only if μ is stable.”

**Sources:**

- [Bonifacio, Guiñazú, Juarez, Neme and Oviedo, The lattice of worker-quasi-stable matchings (2022)](https://doi.org/10.1016/j.geb.2022.06.004)

### Vote-margin edge weights turn popularity into one maximum-weight matching test

**Remember:** A rival matching's total weight is its vote margin against M.

*True by definition.* MSC 91B68 (Matching models), 05C70, 90C27. arXiv econ.TH, cs.GT. Level 4: research.

**Definition.** A matching M is popular if no rival matching wins more votes against it in a head-to-head vote. Weight each edge by the sum of its endpoints' votes, +1, 0 or −1 for preferring that partner to their partner in M, with unmatched ranked below acceptable partners. Give each vertex a self-loop weighted by its vote for being unmatched, so a rival's weight is its vote margin against M.

**Problem.** With strict preferences on both sides and incomplete lists, M is popular exactly when it is a maximum-weight matching for these weights, a test due to Biró, Irving and Manlove (2010). The paper derives the separate graph-structural tests for popularity from it, and back.

**How the definition helps.** A rival matching, completed with self-loops, counts each vertex's vote exactly once, so its weight is its vote margin against M, and M itself has weight zero (our own). So M is popular exactly when no matching has positive weight, that is, when M has maximum weight (our own).

**Paper or page:** [On the Equivalence of the Graph-Structural and Optimization-Based Characterizations of Popular Matchings](https://arxiv.org/abs/2508.00349v1). It says: “an optimization-based characterization described by maximum-weight matchings.”

**Sources:**

- [Yuga Kanaya, Kenjiro Takazawa, On the Equivalence of the Graph-Structural and Optimization-Based Characterizations of Popular Matchings, arXiv:2508.00349v1 (2025)](https://arxiv.org/abs/2508.00349v1)
- [Péter Biró, Robert W. Irving, David F. Manlove, Popular Matchings in the Marriage and Roommates Problems, Algorithms and Complexity (CIAC 2010), Lecture Notes in Computer Science 6078 (2010), 97-108](https://doi.org/10.1007/978-3-642-13073-1_10)

### Linear portfolio rules make mean–variance optimization quadratic

**Remember:** Affine returns give linear means and quadratic variances.

*True by definition.* MSC 91G10 (Portfolio theory), 90C20. arXiv q-fin.PM, math.OC. Level 4: research.

**Definition.** An affine portfolio rule chooses weights w₀(h) + ∑ⱼ θⱼwⱼ(h) at each observed history h, with baseline weights summing to one, adjustment vectors summing to zero, and coefficients θⱼ as the decision variables. The next return is then affine in the θⱼ, however nonlinearly the weights depend on h.

**Problem.** Assume the return terms have finite second moments. Minimizing return variance minus a nonnegative multiple of expected return gives a convex quadratic problem in the coefficients.

**How the definition helps.** An affine return has expectation affine in θ and variance quadratic in θ, with a positive semidefinite covariance matrix (our own). So variance minus a nonnegative multiple of the mean is a convex quadratic (our own).

**Paper or page:** [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3). It says: “the following two optimization problems are convex quadratic optimization problems”

**Sources:**

- [Signature Methods in Stochastic Portfolio Theory](https://arxiv.org/abs/2310.02322v3)

### Wealth-weighted portfolios add their wealth

**Remember:** Combine the accounts by current size, not by their starting shares.

*True by definition.* MSC 91G10 (Portfolio theory). arXiv q-fin.PM. Level 4: research.

**Definition.** Split one unit of initial wealth into nonnegative shares summing to one, and let each account follow its own self-financing strategy. While total wealth is positive, the combined strategy weights each account's asset mix by that account's current share of total wealth, so it holds exactly the sum of the accounts' holdings (our own).

**Problem.** Under the paper’s continuous-time trading assumptions, this mix funds its own trades. On each price path its wealth equals the sum of the separately funded accounts.

**How the definition helps.** Since the combined holdings are the sum of the separate holdings, its gains are the sum of their gains (our own). Fixed starting weights would instead need money moved between accounts when returns differ (our own). The paper checks that this rule is a valid continuous-time trading strategy path by path.

**Paper or page:** [Model-free portfolio allocation in continuous-time](https://arxiv.org/abs/2411.05470v3). It says: “then θ̂(b) ∈ Θ and W(θ̂(b)) = ∑ₖ₌₁ᵐ bₖ W(θ⁽ᵏ⁾)”

**Sources:**

- [Henry Chiu. Model-free portfolio allocation in continuous-time (2025).](https://arxiv.org/abs/2411.05470v3)

### Closures catch vanishing-risk free lunches

**Remember:** Not even a limit of trades may give a riskless profit.

*Makes the theorem clean to state or prove.* MSC 91G15 (Financial markets). arXiv q-fin.MF. Level 4: research.

**Definition.** No free lunch with vanishing risk says that trades cannot even approach a riskless profit. Take the bounded payoffs no greater than the final gains of zero-cost trades whose wealth stays bounded below, and add all their limits in the essential supremum norm. The condition holds when zero is the only payoff in this closed set that is nonnegative apart from events of probability zero.

**Problem.** Let finitely many discounted prices over a finite horizon be locally bounded semimartingales. There is no free lunch with vanishing risk exactly when some probability with the same null events makes the prices local martingales.

**How the definition helps.** Closing the set in the uniform norm adds the limits of trades whose possible losses shrink to zero, so the condition rules these out too (our own). The Delbaen–Schachermayer fundamental theorem matches this closed condition with a probability that has the same null events and makes the prices local martingales (our own).

**Paper or page:** [The Golden Age of the Mathematical Finance](https://arxiv.org/abs/2102.06693v2). It says: “There are not free lunches with vanishing risk if and only if there is probability ℙ∗ ∼ ℙ under which S̃ is a local martingale.”

**Sources:**

- [Freddy Delbaen, Walter Schachermayer. A general version of the fundamental theorem of asset pricing (1994).](https://doi.org/10.1007/bf01450498)

### Comonotonic prices satisfy put–call parity

**Remember:** Payoffs that rise together are priced by adding.

*Makes the theorem clean to state or prove.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 4: research.

**Definition.** Two payoffs X and Y are comonotonic when they rise and fall together: (X(s) − X(t))(Y(s) − Y(t)) ≥ 0 for every pair of states s, t. A pricing rule f is comonotonic additive when f(X + Y) = f(X) + f(Y) for every comonotonic pair.

**Problem.** For bounded measurable payoffs, a monotone pricing rule, one that never prices a pointwise smaller payoff higher, satisfies the paper’s put–call parity exactly when it is comonotonic additive.

**How the definition helps.** A call, a short put and a constant strike rise together and sum to the underlying payoff, so comonotonic additivity prices the underlying as the sum of their prices (our own). The paper’s parity characterization proves the converse for monotone rules on bounded measurable payoffs.

**Paper or page:** [Put-Call Parities, absence of arbitrage opportunities and non-linear pricing rules](https://arxiv.org/abs/2203.16292v1). It says: “satisfies PCP if and only if it is Comonotonic Additive.”

**Sources:**

- [Bastianello, Chateauneuf and Cornet, Put–Call Parities, absence of arbitrage opportunities, and nonlinear pricing rules (2024)](https://doi.org/10.1111/mafi.12433)

### One currency prices both markets

**Remember:** Measure euros and dollars in one shared unit.

*Makes the theorem clean to state or prove.* MSC 91G20 (Derivative securities (option pricing, hedging, etc.)). arXiv q-fin.PR. Level 4: research.

**Definition.** Price both currencies in an intermediate unit in which they play symmetric roles: if one euro costs f dollars, one euro costs √f units and one dollar costs 1/√f units. A payoff has degree one if multiplying both its inputs by a positive factor multiplies the payoff by that factor.

**Problem.** In the paper’s euro–dollar model, consider options payable only at expiry with degree-one payoffs. The same pricing probability values options written on euros and options written on dollars.

**How the definition helps.** In the shared unit, options on euros and options on dollars are priced under one probability, and degree one lets the payoff be rescaled into that unit (our own). The paper constructs the intermediate interest rate and proves that this pricing probability exists.

**Paper or page:** [Pricing FX Options under Intermediate Currency](https://arxiv.org/abs/1912.01387v2), [Pricing FX Options under Intermediate Currency](https://arxiv.org/abs/1912.01387v2). It says: “Then the arbitrage price of a European option on EUR with a payoff g(x; K) being homogeneous function of order 1 and maturity time T is given by”

**Sources:**

- [S. Maurer, T. E. Sharp, M. V. Tretyakov. Pricing FX Options under Intermediate Currency (2021).](https://arxiv.org/abs/1912.01387v2)

### Directional closure makes capital limits attainable

**Remember:** If every extra sliver suffices, nothing extra is needed.

*Rules out counterexamples.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 4: research.

**Definition.** Let A be an upward-closed set of acceptable positions and π a linear price on eligible trades, with an eligible U ≥ 0 of price one. Put B = A + ker π, the positions that some zero-price trade makes acceptable. Directional closure says that x lies in B whenever x + εU lies in B for every ε &gt; 0.

**Problem.** Required capital is the infimum price of trades making a position safe. Fix any real budget m. Directional closure holds exactly when every position requiring at most m admits a trade costing m that makes it safe.

**How the definition helps.** A trade costing m makes x safe exactly when x + mU lies in B, and capital at most m puts x + (m + ε)U in B for every ε &gt; 0 (our own). Closure then gives x + mU; conversely, budget attainment applied to y − mU puts y in B whenever every y + εU lies in B (our own). If only strictly positive balances are acceptable, every positive deposit works at the zero position but zero does not (our own).

**Paper or page:** [A new view on risk measures associated with acceptance sets](https://arxiv.org/abs/2109.12320v2). It says: “holds if and only if A + ker π is (−U)-directionally closed.”

**Sources:**

- [A new view on risk measures associated with acceptance sets](https://arxiv.org/abs/2109.12320v2)

### Logarithms turn risk products into sums

**Remember:** Logs turn dividing by a payoff into subtracting capital.

*True by definition.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 4: research.

**Definition.** For a positive loss factor X, η(X) is the infimum price of a positive eligible payoff H that makes X/H acceptable, with positive prices. In logarithmic units, dividing by H becomes subtracting log H, at a cost equal to the logarithm of H's price. So log η(X) is the capital requirement for log X with these log payoffs and log costs (our own).

**Problem.** Assume products stay in the loss domain and the risks are positive and finite. Then η(XY) ≤ η(X)η(Y) exactly when the corresponding risk on log losses is subadditive, meaning the risk of a sum never exceeds the summed risks.

**How the definition helps.** Since log η(X) is the risk of log X, taking logarithms turns η(XY) ≤ η(X)η(Y) into subadditivity of the log risk (our own). The identity follows by translating every acceptable trade into log units and taking its infimum cost (our own).

**Paper or page:** [Multi-asset return risk measures](https://arxiv.org/abs/2411.08763v2). It says: “is subadditive if and only if ηℜ is submultiplicative, i.e., ∀ X,Y ∈ C: ηℜ(XY) ≤ ηℜ(X)ηℜ(Y).”

**Sources:**

- [Multi-asset return risk measures](https://arxiv.org/abs/2411.08763v2)

### Moment bounds control worst-case risk

**Remember:** Compare only means and covariances, and the ball can only grow.

*Makes the theorem clean to state or prove.* MSC 91G70 (Statistical methods; risk measures). arXiv q-fin.RM. Level 4: research.

**Definition.** Quadratic transport distance is the least root mean square separation over all joint realizations of two finite-second-moment laws. The transport ball of radius ρ contains every such law within this distance ρ of the reference law. The Gelbrich set of radius ρ contains every such law whose mean and covariance lie within ρ of the reference’s, comparing moments by the transport distance between the matching Gaussian laws.

**Problem.** For the same reference law and radius, the supremum of risk over the Gelbrich set bounds the supremum over the transport ball from above.

**How the definition helps.** By the Gelbrich inequality, replacing two laws by Gaussians with the same means and covariances never increases their transport distance, so the transport ball lies inside the Gelbrich set (our own). A supremum over a larger set is larger, for each fixed loss function.

**Paper or page:** [Mean-Covariance Robust Risk Measurement](https://arxiv.org/abs/2112.09959v3), [Mean-Covariance Robust Risk Measurement](https://arxiv.org/abs/2112.09959v3). It says: “then we have 𝒲ᵨ(ℙ̂) ⊆ 𝒢ᵨ(μ̂, Σ̂).”

**Sources:**

- [Viet Anh Nguyen, Soroosh Shafiee, Damir Filipović, Daniel Kuhn. Mean-Covariance Robust Risk Measurement (2025).](https://arxiv.org/abs/2112.09959v3)

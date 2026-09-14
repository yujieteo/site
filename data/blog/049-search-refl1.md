---
title: "Search Reflections I"
date: ""
summary: "A compact survey of objectives, heuristics, pruning, search trade-offs, and repairability."
category: "Algorithms"
tags: "search, algorithms, heuristics, optimisation"
---
## Search

### Summary approach

Define objectives (Pareto optimal and scalarisation) and constraints, lookahead for problems, define time and memory bound, admissibility (never overestimating the true cost, if overestimate it make take a shortcut), for heuristic creation, strategy pruning, lookahead again and define pruning or bisection strategy, lastly define acceptable failure standards and repairability. Implementation: simulated annealing, high randomness explore first, use tableau to forbid revisiting, low randomness to explore later

### Pruning and beam search

Check bounded many outcomes prune the worst proportion. Or use A*, prune the worst when memory is full.

### Tabu list

Forbit returning to visited states unless it is really good.

### Simulated annealing

Use high randomness at the beginning to escape local optima, lower randomness later.

### Bisection

Either start from where you are and the goal to meet in the middle, or do binary search and cut half each time (Shannon entropy)

### Repairable improvement and constraint propagation

Find a feasible solution first, repair later. Related, find a solution meeting the constraints, backtrack when violated. Key word: define objectives and constraints violations

### Lookahead

### Memory and time tradeoffs

Think about tradeoffs in memory (evaluating all possible outcomes), and time (opportunity cost of bad search, time needed).

### Multiple objective Pareto optimality and scalarisation

First step is always to identify outcomes, scalarisation means weigh your different outcomes to one outcome, Pareto optimality means I must make adjacent outcomes worse.

### Bitter lesson in scalability

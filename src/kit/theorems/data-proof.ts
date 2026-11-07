export interface ProofStep {
  readonly slogan: string;
  readonly detail: string;
  readonly cites: string;
}

export interface ProofHypothesis {
  readonly text: string;
  readonly why: string;
  readonly steps: readonly number[];
}

export interface Proof {
  readonly theorem: string;
  readonly name: string;
  readonly statement: string;
  readonly decl: string;
  readonly hypotheses: readonly ProofHypothesis[];
  readonly steps: readonly ProofStep[];
  readonly edges: readonly (readonly [number, number])[];
}

const ARITHMETIC: Proof = {
  theorem: "Fundamental theorem of arithmetic",
  name: "Least prime factors and cancellation",
  statement: "Every integer n > 1 is a product of primes, and this factorization is unique up to the order of the factors.",
  decl: "Nat.primeFactorsList_unique",
  hypotheses: [
    { text: "n > 1", why: "Because n > 1, the number n has a divisor greater than 1, so a least one exists and the factorization starts.", steps: [0, 1] },
  ],
  steps: [
    { slogan: "The least divisor p > 1 of n is prime.", detail: "The divisors of n greater than 1 include n, so there is a least one, p. A divisor d of p with 1 < d < p would also divide n and be smaller than p. So p is prime.", cites: "" },
    { slogan: "Split off the least prime and factor the rest by strong induction.", detail: "Write n = pm. If m = 1, then n = p. If m > 1, then m < n, so m is a product of primes by induction, and so is n.", cites: "induction" },
    { slogan: "Euclid's lemma: a prime that divides ab divides a or b.", detail: "Let p divide ab but not a. Then gcd(p, a) = 1, so Bézout gives px + ay = 1. Then b = pbx + aby, which p divides.", cites: "Bézout's identity" },
    { slogan: "Match each prime of another factorization and cancel it.", detail: "Let q₁ ⋯ qₛ = n. By Euclid's lemma, q₁ divides some pᵢ, so q₁ = pᵢ. Cancel both and repeat. The empty product 1 has no prime divisor, so the two lists end together.", cites: "" },
  ],
  edges: [[0, 1], [1, 3], [2, 3]],
};

const MARKOV: Proof = {
  theorem: "Markov's inequality",
  name: "Step function below the function",
  statement: "If f ≥ 0 is measurable and 0 < t < ∞, then μ({f ≥ t}) ≤ (1/t) ∫ f dμ.",
  decl: "MeasureTheory.mul_meas_ge_le_lintegral",
  hypotheses: [
    { text: "f is measurable", why: "Measurability makes the level set measurable, so μ(A) and the integral of its indicator exist.", steps: [0, 2] },
    { text: "f ≥ 0", why: "Nonnegativity keeps the step function g below f off the level set.", steps: [1] },
    { text: "0 < t < ∞", why: "A finite positive level can be divided out of the inequality.", steps: [3] },
  ],
  steps: [
    { slogan: "Define the level set A = {x : f(x) ≥ t}.", detail: "A is the preimage of the ray [t, ∞] under the measurable map f. So A is measurable and μ(A) is defined.", cites: "" },
    { slogan: "Put a step function g under f: g = t on A and 0 off A.", detail: "On A, g = t ≤ f. Off A, g = 0 ≤ f, because f is nonnegative. So g ≤ f everywhere.", cites: "" },
    { slogan: "Integrate both sides.", detail: "The integral of g is t·μ(A). The integral is monotone, so t·μ(A) ≤ ∫ f dμ.", cites: "" },
    { slogan: "Divide by t.", detail: "Because 0 < t < ∞, division by t keeps the inequality, also when the integral is infinite. So μ(A) ≤ (1/t) ∫ f dμ.", cites: "" },
  ],
  edges: [[0, 1], [0, 2], [1, 2], [2, 3]],
};

const HOEFFDING: Proof = {
  theorem: "Hoeffding inequality",
  name: "Sub-Gaussian moments and the Chernoff bound",
  statement: "If X₁, …, Xₙ are independent with aᵢ ≤ Xᵢ ≤ bᵢ, Σ(bᵢ − aᵢ)² > 0, S is their sum and ε ≥ 0, then P(S − E[S] ≥ ε) ≤ exp(−2ε² / Σ(bᵢ − aᵢ)²).",
  decl: "ProbabilityTheory.HasSubgaussianMGF.measure_sum_range_ge_le_of_iIndepFun",
  hypotheses: [
    { text: "independent", why: "Independence makes the moment generating function of the sum the product of those of the summands.", steps: [1] },
    { text: "aᵢ ≤ Xᵢ ≤ bᵢ", why: "The ranges give each centred summand the parameter (bᵢ − aᵢ)²/4 in Hoeffding's lemma.", steps: [0, 1] },
    { text: "Σ(bᵢ − aᵢ)² > 0", why: "A positive total range makes c > 0, so t = ε/c is defined. With every range zero the sum is constant and the bound would divide by zero.", steps: [3] },
    { text: "ε ≥ 0", why: "With ε ≥ 0 the best choice t = ε/c is not negative, as the Markov step needs.", steps: [3] },
  ],
  steps: [
    { slogan: "Bound each centred summand's moment generating function.", detail: "Let Yᵢ = Xᵢ − E[Xᵢ]. Hoeffding's lemma gives E[e^(tYᵢ)] ≤ exp(t²(bᵢ − aᵢ)²/8) for every real t.", cites: "Hoeffding's lemma" },
    { slogan: "Multiply the bounds, by independence.", detail: "The e^(tYᵢ) are independent, so E[e^(t(S − E[S]))] is the product of the E[e^(tYᵢ)], at most exp(ct²/2) with c = Σ(bᵢ − aᵢ)²/4.", cites: "" },
    { slogan: "Apply Markov's inequality to e^(t(S − E[S])).", detail: "For t ≥ 0, S − E[S] ≥ ε means e^(t(S − E[S])) ≥ e^(tε). Markov's inequality gives P(S − E[S] ≥ ε) ≤ exp(−tε + ct²/2).", cites: "Markov's inequality" },
    { slogan: "Choose t = ε/c.", detail: "The exponent −tε + ct²/2 is smallest at t = ε/c, where it is −ε²/(2c) = −2ε² / Σ(bᵢ − aᵢ)². That is the bound.", cites: "" },
  ],
  edges: [[0, 1], [1, 2], [2, 3]],
};

export const PROOFS: readonly [Proof, ...Proof[]] = [MARKOV, HOEFFDING, ARITHMETIC];

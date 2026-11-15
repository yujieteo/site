"""Joint model of backing, survival and price for the Tampines food places.

See research/tampines/prereg.md. Run through scripts/tampines/run.py; this module only defines
the model, the fake-data generator used for calibration, and the posterior summaries.
"""
from __future__ import annotations

import os
from dataclasses import dataclass, field

# PyTensor's C backend fails to link on this macOS; the model is compiled to JAX instead.
os.environ.setdefault("PYTENSOR_FLAGS", "cxx=")

import numpy as np
import pymc as pm
import pytensor.tensor as pt
from scipy.special import expit
from scipy.stats import norm

KINDS = ["h", "r", "c", "f"]


@dataclass
class Inputs:
    n_places: int
    kind: np.ndarray                 # (P,) int, index into KINDS
    outlets: list[str]               # (G,) names; Michelin is one of them
    pair_place: np.ndarray           # (N,) int, in-scope place for each guide pair
    pair_outlet: np.ndarray          # (N,) int
    pair_named: np.ndarray           # (N,) 0/1
    surv_place: np.ndarray           # (S,) int, places with an exact age
    surv_log: np.ndarray             # (S,) log years at address
    cens_place: np.ndarray           # (C,) int, places with only a lower bound
    cens_log: np.ndarray             # (C,) log years lower bound
    item_place: np.ndarray           # (I,) int
    item_type: np.ndarray            # (I,) int, index into types
    item_log: np.ndarray             # (I,) log deflated price
    types: list[str] = field(default_factory=list)

    @property
    def type_weights(self) -> np.ndarray:
        counts = np.bincount(self.item_type, minlength=len(self.types)).astype(float)
        return counts / counts.sum()


def build(data: Inputs) -> pm.Model:
    P, G, K, T = data.n_places, len(data.outlets), len(KINDS), len(data.types)
    with pm.Model() as model:
        theta = pm.Normal("theta", 0.0, 1.0, shape=P)

        a = pm.LogNormal("a", 0.0, 0.5, shape=G)
        b = pm.Normal("b", 0.0, 2.0, shape=G)
        if len(data.pair_named):
            pm.Bernoulli("named", logit_p=a[data.pair_outlet] * theta[data.pair_place] - b[data.pair_outlet], observed=data.pair_named)

        c = pm.Normal("c", 1.0, 1.0, shape=K)
        tau = pm.Gamma("tau", alpha=3.0, beta=3.0, shape=K)
        lam = pm.HalfNormal("lam", 0.5)
        if len(data.surv_log):
            mu = c[data.kind[data.surv_place]] + lam * theta[data.surv_place]
            pm.Normal("age", mu, tau[data.kind[data.surv_place]], observed=data.surv_log)
        if len(data.cens_log):
            mu_c = c[data.kind[data.cens_place]] + lam * theta[data.cens_place]
            # Right-censored: the true log age is at least the floor. log P(X >= floor) = log(erfc(z / sqrt 2) / 2).
            zc = (data.cens_log - mu_c) / tau[data.kind[data.cens_place]]
            pm.Potential("age_floor", pt.sum(pt.log(0.5 * pt.erfc(zc / np.sqrt(2.0)) + 1e-300)))

        # Type means as one level plus offsets that sum to zero, so the level does not trade
        # off against the place effects.
        level = pm.Normal("level", 2.0, 1.0)
        offset = pm.ZeroSumNormal("offset", sigma=1.0, shape=T)
        d = pm.Deterministic("d", level + offset)
        sig = pm.Gamma("sig", alpha=4.0, beta=10.0, shape=T)
        m = pm.ZeroSumNormal("m", sigma=0.5, shape=K)
        s = pm.Gamma("s", alpha=3.0, beta=6.0, shape=K)
        z = pm.ZeroSumNormal("z", sigma=1.0, shape=P)
        pi = pm.Deterministic("pi", m[data.kind] + s[data.kind] * z)
        if len(data.item_log):
            pm.Normal("price", d[data.item_type] + pi[data.item_place], sig[data.item_type], observed=data.item_log)
    return model


def fit(data: Inputs, draws: int = 1000, tune: int = 1000, chains: int = 4, seed: int = 20261115, progress: bool = False):
    with build(data):
        return pm.sample(draws=draws, tune=tune, chains=chains, random_seed=seed, target_accept=0.95, progressbar=progress, nuts_sampler="numpyro", nuts_sampler_kwargs={"chain_method": "parallel"})


def simulate(shape: Inputs, rng: np.random.Generator) -> tuple[Inputs, dict[str, np.ndarray]]:
    """Draw parameters from the priors and data of the same shape as `shape`."""
    P, G, K, T = shape.n_places, len(shape.outlets), len(KINDS), len(shape.types)
    truth = {
        "theta": rng.normal(0, 1, P),
        "a": rng.lognormal(0, 0.5, G),
        "b": rng.normal(0, 2, G),
        "c": rng.normal(1, 1, K),
        "tau": rng.gamma(3.0, 1 / 3.0, K),
        "lam": abs(rng.normal(0, 0.5)),
        "d": rng.normal(2, 1) + (lambda v: v - v.mean())(rng.normal(0, 1, T)),
        "sig": rng.gamma(4.0, 1 / 10.0, T),
        "m": (lambda v: v - v.mean())(rng.normal(0, 0.5, K)),
        "s": rng.gamma(3.0, 1 / 6.0, K),
        "z": (lambda v: v - v.mean())(rng.normal(0, 1, P)),
    }
    th = truth["theta"]
    named = rng.binomial(1, expit(truth["a"][shape.pair_outlet] * th[shape.pair_place] - truth["b"][shape.pair_outlet]))
    k = shape.kind
    age = rng.normal(truth["c"][k[shape.surv_place]] + truth["lam"] * th[shape.surv_place], truth["tau"][k[shape.surv_place]])
    # A censored place keeps its real lower bound when the true age exceeds it; otherwise
    # the simulated true age would be below the bound, so the bound is set to the true age
    # minus a gap, keeping it a valid lower bound.
    true_c = rng.normal(truth["c"][k[shape.cens_place]] + truth["lam"] * th[shape.cens_place], truth["tau"][k[shape.cens_place]])
    floor = np.minimum(shape.cens_log, true_c - rng.exponential(0.3, len(true_c)))
    pi = truth["m"][k] + truth["s"][k] * truth["z"]
    price = rng.normal(truth["d"][shape.item_type] + pi[shape.item_place], truth["sig"][shape.item_type])
    fake = Inputs(P, k, shape.outlets, shape.pair_place, shape.pair_outlet, named, shape.surv_place, age, shape.cens_place, floor, shape.item_place, shape.item_type, price, shape.types)
    return fake, truth


def draws_of(idata, name: str) -> np.ndarray:
    x = idata.posterior[name].values
    return x.reshape(-1, *x.shape[2:])


def derived(idata, data: Inputs) -> dict[str, np.ndarray]:
    """Per-draw place quantities: backing θ, percentile, standard price and value."""
    theta = draws_of(idata, "theta")
    pi = draws_of(idata, "pi")
    d = draws_of(idata, "d")
    basket = d @ data.type_weights
    price = np.exp(pi + basket[:, None])
    pct = norm.cdf(theta) * 100
    value = pct / price * 10
    return {"theta": theta, "pct": pct, "price": price, "value": value}


def ranks(values: np.ndarray, subset: np.ndarray) -> np.ndarray:
    """Rank 1 = highest, per draw, among the places in `subset`."""
    sub = values[:, subset]
    order = np.argsort(-sub, axis=1)
    out = np.empty_like(order)
    rows = np.arange(sub.shape[0])[:, None]
    out[rows, order] = np.arange(1, sub.shape[1] + 1)
    return out


def closure_probability(idata, data: Inputs, age_now: np.ndarray, years: float = 1.0) -> np.ndarray:
    """P(gone within `years`), reading the fitted log-age distribution as a lifetime distribution
    and conditioning on survival to the current age. age_now is in years; NaN means unknown, in
    which case the kind's median age is used."""
    theta = draws_of(idata, "theta")
    c = draws_of(idata, "c")
    tau = draws_of(idata, "tau")
    lam = draws_of(idata, "lam")
    mu = c[:, data.kind] + lam[:, None] * theta
    sd = tau[:, data.kind]
    a = np.where(np.isnan(age_now)[None, :], np.exp(mu), np.maximum(age_now, 0.25)[None, :])
    s_now = norm.sf((np.log(a) - mu) / sd)
    s_next = norm.sf((np.log(a + years) - mu) / sd)
    p = np.where(s_now > 1e-12, 1 - s_next / np.maximum(s_now, 1e-12), 1.0)
    return p.mean(axis=0)

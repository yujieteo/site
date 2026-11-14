# /// script
# requires-python = ">=3.12"
# dependencies = ["numpy==2.2.6"]
# ///
"""Score every person, shrink the records, rank them, and test the ranks against chance.

Input: data/calls.tsv, one scored call per line (made by calls.py).
Output: data/scores.tsv, data/null.tsv, data/oos.tsv, data/sensitivity.tsv.
Every number and rule here is part of the frozen method (METHOD.md).
"""

import csv
import json
import math
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from common import DATA, HN_PEOPLE, LW_PEOPLE  # noqa: E402

LAMBDA = 0.5  # fraction of wealth staked on a call that has no stated probability
CLIP = (0.01, 0.99)  # stated probabilities and prices are held inside this range
SIMS = 10_000
TOP = 20
SEED = 20261115


def clip(x):
    return np.clip(np.asarray(x, dtype=float), *CLIP)


# --- One call -------------------------------------------------------------------------------
def call_scores(kind, p, ref, asserted):
    """Log-score skill d of each call if its claim comes true (d1) or not (d0).

    stated: d = ln P(outcome) - ln R(outcome), P the person's stated probability for the claim,
            R the market price that day for the claim, or 1/2 when no market priced it.
    bet:    no stated probability. The person stakes LAMBDA of wealth on the side they assert,
            at the market price of that side: d = ln(1 - LAMBDA + LAMBDA * win / q).
    exp(d) has mean 1 when outcomes follow R, so a product of exp(d) is an e-value against R.
    """
    kind, asserted = np.asarray(kind), np.asarray(asserted, dtype=float)
    p, ref = clip(np.where(np.isnan(p), 0.5, p)), clip(ref)
    stated = kind == "stated"
    s1, s0 = np.log(p) - np.log(ref), np.log1p(-p) - np.log1p(-ref)
    q_true, q_false = ref, 1 - ref  # price of the side "claim true" / "claim false"
    b1 = np.where(asserted == 1, np.log(1 - LAMBDA + LAMBDA / q_true), math.log(1 - LAMBDA))
    b0 = np.where(asserted == 1, math.log(1 - LAMBDA), np.log(1 - LAMBDA + LAMBDA / q_false))
    return np.where(stated, s1, b1), np.where(stated, s0, b0)


def asserted_side(kind, p, asserted):
    """1 if the person says the claim comes true, 0 if not, nan for a stated 50%."""
    side = np.where(np.asarray(kind) == "stated", np.where(p > 0.5, 1.0, np.where(p < 0.5, 0.0, np.nan)),
                    np.asarray(asserted, dtype=float))
    return side


# --- Shrinkage --------------------------------------------------------------------------------
def eb(x, s2, iters=80):
    """Efron-Morris empirical Bayes for x_i ~ N(theta_i, s2_i), theta_i ~ N(mu, tau2).

    tau2 is the Paule-Mandel moment estimate (positive part), mu the precision-weighted mean.
    x may be (N,) or (S, N); s2 is (N,). Returns posterior means and variances, mu, tau2.
    """
    x = np.atleast_2d(x)
    n = x.shape[1]
    s2 = np.broadcast_to(s2, x.shape[1:])

    def q(t2):
        w = 1 / (s2[None, :] + t2[:, None])
        mu = (w * x).sum(1) / w.sum(1)
        return (w * (x - mu[:, None]) ** 2).sum(1), mu

    zero = np.zeros(x.shape[0])
    q0, _ = q(zero)
    lo, hi = zero.copy(), np.full(x.shape[0], float(x.var(1).max() * 10 + s2.max() * 10 + 1e-9))
    for _ in range(iters):
        mid = (lo + hi) / 2
        qm, _ = q(mid)
        big = qm > n - 1
        lo, hi = np.where(big, mid, lo), np.where(big, hi, mid)
    tau2 = np.where(q0 <= n - 1, 0.0, (lo + hi) / 2)
    _, mu = q(tau2)
    b = s2[None, :] / (s2[None, :] + tau2[:, None])
    post = mu[:, None] + (1 - b) * (x - mu[:, None])
    pvar = s2[None, :] * (1 - b)
    return post, pvar, mu, tau2


def hit_x(k, m):
    """Rule of succession, then the arcsine transform with variance 1/(4m)."""
    return np.arcsin(np.sqrt((k + 1) / (m + 2))), 1 / (4 * np.maximum(m, 1))


# --- A site's table of calls ------------------------------------------------------------------
class Site:
    def __init__(self, rows, people_order):
        rows = sorted(rows, key=lambda r: r["person"])
        self.people = sorted({r["person"] for r in rows})
        idx = {p: i for i, p in enumerate(self.people)}
        self.pi = np.array([idx[r["person"]] for r in rows])
        self.n = np.bincount(self.pi, minlength=len(self.people))
        self.starts = np.searchsorted(self.pi, np.arange(len(self.people)))
        self.kind = np.array([r["kind"] for r in rows])
        self.p = np.array([float(r["p"]) if r["p"] not in ("", None) else np.nan for r in rows])
        self.ref = clip([float(r["ref"]) for r in rows])
        self.asserted = np.array([float(r["asserted"]) if r["asserted"] not in ("", None) else np.nan
                                  for r in rows])
        self.y = np.array([float(r["outcome"]) for r in rows])
        self.d1, self.d0 = call_scores(self.kind, self.p, self.ref, self.asserted)
        self.side = asserted_side(self.kind, self.p, self.asserted)
        # The flipped call: same confidence, other side.
        fp = np.where(self.kind == "stated", 1 - self.p, self.p)
        fa = np.where(self.kind == "stated", self.asserted, 1 - self.asserted)
        self.f1, self.f0 = call_scores(self.kind, fp, self.ref, fa)
        # Null variance of d per call when outcomes follow ref; fixed, so sigma2 is fixed.
        var = self.ref * (1 - self.ref) * (self.d1 - self.d0) ** 2
        self.s2 = self.person_sum(var)[0] / np.maximum(self.n, 1) ** 2
        self.m = np.bincount(self.pi, weights=~np.isnan(self.side), minlength=len(self.people))
        self.published = [p for p in people_order if p in idx]
        self.order = people_order

    def person_sum(self, a):
        a = np.atleast_2d(a)
        return np.add.reduceat(a, self.starts, axis=1) if a.shape[1] else np.zeros((a.shape[0], 0))

    def stats(self, d, hits):
        """Shrunk skill and shrunk hit rate, for one (C,) or many (S, C) outcome draws."""
        dbar = self.person_sum(d) / self.n
        post, pvar, mu, tau2 = eb(dbar, self.s2)
        k = self.person_sum(np.nan_to_num(hits))
        hx, hs2 = hit_x(k, self.m)
        ok = self.m > 0
        hpost, hpvar, _, _ = eb(hx[:, ok], hs2[ok])
        hfull = np.full(hx.shape, np.nan)
        hfull[:, ok] = hpost
        return dict(dbar=dbar, post=post, pvar=pvar, mu=mu, tau2=tau2, k=k, hit=np.sin(hfull) ** 2)

    def observed(self):
        y = self.y
        d = np.where(y == 1, self.d1, self.d0)
        hits = np.where(np.isnan(self.side), np.nan, (y == self.side).astype(float))
        return self.stats(d, hits), d

    def simulate(self, null, sims, rng, chunk=500):
        """Yield stats for sims drawn under the null: 'coin' or 'market'."""
        y = self.y
        done = 0
        while done < sims:
            s = min(chunk, sims - done)
            if null == "coin":
                # A coin picks the side; the world, the confidence and the call count stay real.
                keep = rng.random((s, len(y))) < 0.5
                d_keep = np.where(y == 1, self.d1, self.d0)
                d_flip = np.where(y == 1, self.f1, self.f0)
                d = np.where(keep, d_keep, d_flip)
                real_hit = np.where(np.isnan(self.side), np.nan, (y == self.side).astype(float))
                hits = np.where(keep, real_hit, 1 - real_hit)
            else:
                # Outcomes follow the reference price; the person's sides and confidence stay real.
                ys = (rng.random((s, len(y))) < self.ref).astype(float)
                d = np.where(ys == 1, self.d1, self.d0)
                hits = np.where(np.isnan(self.side), np.nan, (ys == self.side).astype(float))
            yield self.stats(d, hits)
            done += s


def ranks_desc(v):
    """Rank 1 = largest; ties share the mean rank."""
    order = np.argsort(-v, kind="stable")
    r = np.empty(len(v))
    r[order] = np.arange(1, len(v) + 1)
    for val in np.unique(v):
        same = v == val
        if same.sum() > 1:
            r[same] = r[same].mean()
    return r


def rank_intervals(post, pvar, draws, rng):
    """5th-95th percentile of each person's rank when skills are drawn from their posteriors."""
    n = len(post)
    out = np.zeros((draws, n))
    for i in range(draws):
        th = post + np.sqrt(pvar) * rng.standard_normal(n)
        th = th + 1e-12 * rng.random(n)  # random order among exact ties
        out[i] = np.argsort(np.argsort(-th)) + 1
    return np.percentile(out, 5, axis=0), np.percentile(out, 95, axis=0)


def null_test(site, theta, t_obs, order, sims, rng):
    """Order statistics of the shrunk skill among the whole pool, under each null.

    site: the pool whose calls are simulated (it may hold more people than were observed).
    theta: observed shrunk skill by person. t_obs: observed top order statistics.
    p_rank[r]: how often chance's r-th best is at least the observed r-th best.
    p_pub[person]: how often chance's r-th best is at least the skill of the person published at rank r.
    """
    top = len(t_obs)
    res = {}
    for null in ("coin", "market"):
        exceed_rank = np.zeros(top)
        exceed_pub = {p: 0 for p in order[:top]}
        top_sum = []
        for st in site.simulate(null, sims, rng):
            t = np.sort(st["post"], axis=1)[:, ::-1][:, :top]
            if t.shape[1] < top:
                t = np.pad(t, ((0, 0), (0, top - t.shape[1])), constant_values=-np.inf)
            exceed_rank += (t >= t_obs[None, :] - 1e-12).sum(0)
            top_sum.append(t.sum(1))
            for r, p in enumerate(order[:top]):
                if p in theta:
                    exceed_pub[p] += int((t[:, r] >= theta[p] - 1e-12).sum())
                else:
                    exceed_pub[p] += t.shape[0]  # no scored call: chance always does as well
        top_sum = np.concatenate(top_sum)
        res[null] = dict(
            p_rank=(1 + exceed_rank) / (1 + sims),
            p_pub={p: (1 + exceed_pub[p]) / (1 + sims) for p in order[:top]},
            p_topsum=(1 + (top_sum >= t_obs.sum() - 1e-12).sum()) / (1 + sims),
        )
    return res


def theta_of(site, obs):
    return {p: float(obs["post"][0, i]) for i, p in enumerate(site.people)}


def top_obs(obs, top=TOP):
    return np.sort(obs["post"][0])[::-1][:top]


def with_extra_people(rows, extra, rng):
    """The search-size variant: add every searched account outside the pool as a pseudo-person.

    Each gets Binomial(candidates, rate) calls drawn from the pool's own calls, where rate is the
    pool's scored calls per candidate. Only the nulls use them; observed records stay real.
    """
    pool_candidates = sum(e["candidates"] for e in extra if e["in_pool"])
    rate = len(rows) / pool_candidates if pool_candidates else 0
    out = list(rows)
    for e in extra:
        if e["in_pool"]:
            continue
        for _ in range(rng.binomial(e["candidates"], min(rate, 1))):
            r = dict(rows[rng.integers(len(rows))])
            r["person"] = "extra:" + e["account"]
            out.append(r)
    return out


def load_calls(path):
    with open(path, newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f, delimiter="\t"))


def variant(rows, name):
    """The pre-registered sensitivity variants of the outcome and reference rules."""
    out = []
    true_rate = None
    if name == "coin_ref_base_rate":
        res = [float(r["outcome"]) for r in rows if r["outcome"] in ("0", "1")]
        true_rate = sum(res) / len(res) if res else 0.5
    for r in rows:
        r = dict(r)
        if r["outcome"] == "partly":
            if name == "partly_true":
                r["outcome"] = "1"
            elif name == "partly_false":
                r["outcome"] = "0"
            else:
                continue  # primary rule: a partly-right call is not scored
        if name == "coin_ref_base_rate" and r["ref_source"] == "coin":
            r["ref"] = str(true_rate)
        out.append(r)
    return out


def site_rows(rows, site, sample):
    """A site's scored calls in one sample; planted test calls are left to inject.py."""
    return [r for r in rows if r["site"] == site and r["sample"] == sample and r.get("planted", "0") != "1"]


def main():
    calls = load_calls(DATA / "calls.tsv")
    rng = np.random.default_rng(SEED)
    orders = {"hn": HN_PEOPLE, "lw": [n for n, _ in LW_PEOPLE]}
    scores, nulls, summary = [], [], {}
    for site_name, order in orders.items():
        rows = variant(site_rows(calls, site_name, "in"), "primary")
        if not rows:
            print(f"{site_name}: no scored calls")
            continue
        site = Site(rows, order)
        obs, d = site.observed()
        lo, hi = rank_intervals(obs["post"][0], obs["pvar"][0], 10_000, rng)
        rank = ranks_desc(obs["post"][0])
        t_obs = top_obs(obs)
        res = null_test(site, theta_of(site, obs), t_obs, order, SIMS, rng)
        summary[site_name] = dict(pool=len(site.people), calls=len(rows), mu=float(obs["mu"][0]),
                                  tau2=float(obs["tau2"][0]),
                                  p_topsum={k: v["p_topsum"] for k, v in res.items()})
        for i, p in enumerate(site.people):
            pub = order.index(p) + 1 if p in order else ""
            scores.append(dict(
                site=site_name, person=p, published_rank=pub, n=int(site.n[i]), asserted=int(site.m[i]),
                hits=int(obs["k"][0, i]), mean_skill=round(float(obs["dbar"][0, i]), 4),
                shrunk_skill=round(float(obs["post"][0, i]), 4), sd=round(math.sqrt(obs["pvar"][0, i]), 4),
                shrunk_hit=round(float(obs["hit"][0, i]), 4) if not np.isnan(obs["hit"][0, i]) else "",
                rank=float(rank[i]), rank_lo=float(lo[i]), rank_hi=float(hi[i]),
                log_e=round(float(site.person_sum(d)[0, i]), 4)))
        for r in range(len(t_obs)):
            pub = order[r] if r < len(order) else ""
            nulls.append(dict(
                site=site_name, rank=r + 1, t_obs=round(float(t_obs[r]), 4),
                p_rank_coin=res["coin"]["p_rank"][r], p_rank_market=res["market"]["p_rank"][r],
                published_person=pub, p_pub_coin=res["coin"]["p_pub"].get(pub, ""),
                p_pub_market=res["market"]["p_pub"].get(pub, "")))
        print(f"{site_name}: pool {len(site.people)}, calls {len(rows)}")
    write_tsv(DATA / "scores.tsv", scores)
    write_tsv(DATA / "null.tsv", nulls)
    oos(calls, orders)
    sensitivity(calls, orders, rng)
    (DATA / "summary.json").write_text(json.dumps(summary, indent=1) + "\n")


def oos(calls, orders):
    """Out-of-sample: the 40 people's calls made after their selection window."""
    rows_out = []
    for site_name, order in orders.items():
        rows = variant(site_rows(calls, site_name, "out"), "primary")
        total = 0.0
        for p in order:
            mine = [r for r in rows if r["person"] == p]
            if not mine:
                rows_out.append(dict(site=site_name, person=p, n=0, log_e="", e_value=""))
                continue
            # Only the sum of d is needed; shrinkage over one person is undefined.
            kind = np.array([r["kind"] for r in mine])
            pp = np.array([float(r["p"]) if r["p"] not in ("", None) else np.nan for r in mine])
            ref = np.array([float(r["ref"]) for r in mine])
            asr = np.array([float(r["asserted"]) if r["asserted"] not in ("", None) else np.nan for r in mine])
            y = np.array([float(r["outcome"]) for r in mine])
            d1, d0 = call_scores(kind, pp, ref, asr)
            le = float(np.where(y == 1, d1, d0).sum())
            total += le
            rows_out.append(dict(site=site_name, person=p, n=len(mine), log_e=round(le, 4),
                                 e_value=f"{math.exp(le):.4g}"))
        rows_out.append(dict(site=site_name, person="ALL 20", n=sum(r["n"] for r in rows_out
                                                                     if r["site"] == site_name and r["person"] != "ALL 20"),
                             log_e=round(total, 4), e_value=f"{math.exp(total):.4g}"))
    write_tsv(DATA / "oos.tsv", rows_out)


def sensitivity(calls, orders, rng):
    out = []
    for name in ("partly_true", "partly_false", "coin_ref_base_rate"):
        for site_name, order in orders.items():
            rows = variant(site_rows(calls, site_name, "in"), name)
            if not rows:
                continue
            site = Site(rows, order)
            obs, _ = site.observed()
            res = null_test(site, theta_of(site, obs), top_obs(obs), order, 2_000, rng)
            rank = ranks_desc(obs["post"][0])
            for r, p in enumerate(order[:3]):
                rk = rank[site.people.index(p)] if p in site.people else ""
                out.append(dict(variant=name, site=site_name, published_rank=r + 1, person=p, rank=rk,
                                p_pub_coin=res["coin"]["p_pub"][p], p_pub_market=res["market"]["p_pub"][p]))
    # Search size: chance gets a turn for every searched account, not only the pool.
    extra_path = DATA / "search_population.tsv"
    if extra_path.exists():
        extra = [dict(site=r["site"], account=r["account"], candidates=int(r["candidates"]),
                      in_pool=r["in_pool"] == "1") for r in load_calls(extra_path)]
        for site_name, order in orders.items():
            rows = variant(site_rows(calls, site_name, "in"), "primary")
            ex = [e for e in extra if e["site"] == site_name]
            if not rows or not ex:
                continue
            real = Site(rows, order)
            obs, _ = real.observed()
            big = Site(with_extra_people(rows, ex, rng), order)
            res = null_test(big, theta_of(real, obs), top_obs(obs), order, 2_000, rng)
            rank = ranks_desc(obs["post"][0])
            for r, p in enumerate(order[:3]):
                rk = rank[real.people.index(p)] if p in real.people else ""
                out.append(dict(variant="search_population", site=site_name, published_rank=r + 1, person=p,
                                rank=rk, p_pub_coin=res["coin"]["p_pub"][p],
                                p_pub_market=res["market"]["p_pub"][p]))
    write_tsv(DATA / "sensitivity.tsv", out)


def write_tsv(path, rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    if not rows:
        path.write_text("")
        return
    keys = list(rows[0].keys())
    for r in rows:
        keys += [k for k in r if k not in keys]
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, keys, delimiter="\t", lineterminator="\n")
        w.writeheader()
        w.writerows(rows)


if __name__ == "__main__":
    main()

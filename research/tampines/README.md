# Tampines food: backing, price and value

The study behind the ranking in `posts/tampines-food/post.md`. Read `prereg.md` first: it fixed the method before the data was collected, and lists every change since.

## Files

- `prereg.md`: the plan and every deviation from it.
- `raw/`: inputs, collected by script. Each part has its own README: `README-guides.md`, `README-survival.md` and `README-prices.md`.
- `derived/sbc.md`: the calibration on fake data.
- `derived/fit.md`: the real fit's checks and filter report.
- `derived/places.tsv`: every place's backing, price, value, rank ranges and forecasts.
- `derived/outlets.tsv`: each outlet's weight (a) and choosiness (b).
- `forecasts.tsv`: frozen on 15 November 2026. Never edit it.
- `new_articles.tsv`, `status.tsv` and `scores.tsv`: written by the monthly check.

## Rerun

From `scripts/tampines`. PyTensor's C backend does not link on macOS 27, so the model runs on JAX:

```bash
python3 places.py
```

```bash
uv run --with beautifulsoup4 python guides.py --michelin
```

```bash
uv run --with rapidfuzz python survival.py
```

```bash
python3 prices.py
```

```bash
PYTENSOR_FLAGS=cxx= uv run --no-project -p 3.13 --with-requirements requirements.txt python run.py sbc
```

```bash
TAMPINES_DRAWS=2000 PYTENSOR_FLAGS=cxx= uv run --no-project -p 3.13 --with-requirements requirements.txt python run.py fit
```

`run.py fit` writes `src/kit/food-model.ts` for the page only when every check passes. It will not overwrite `forecasts.tsv`.

The monthly check:

```bash
uv run --no-project -p 3.13 --with beautifulsoup4 python scripts/tampines/check.py
```

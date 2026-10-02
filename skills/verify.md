# Verify a published content change

Report one record per check with these fields.

```text
stage,check,status,evidence
```

Use `PASS` or `FAIL` for `status`. Report each stage separately. Stop after a failure and mark the remaining checks `NOT RUN`.

## Review tier

Read the tier from the diff (`git diff --name-only origin/main...HEAD`), not from the request.

- **Fast path:** Stage A below, then a plain pull request without the no-mistakes pipeline; the change reaches `main` only through [green CI](#fast-path-landing). It applies only when every changed path is one of:
  - content under `data/`: notes, `data/calibrator/raw.toon`, catalogue stubs `data/visuals/<slug>.yaml`, blog posts, decks, podcasts and media, paper links and resources, but not a `data/visuals/<slug>.pin`;
  - a straight port: `visuals/<slug>/` for a slug already in `PORTS` in `tests/test_visual_ports.py`, byte-identical to a `yujieteo/<slug>` commit (minus `tests/` and `.github/`) whose own no-mistakes run and CI passed. Name that commit in the pull request.
- **Full pipeline:** everything else, including any change to `scripts/`, `templates/`, `static/`, `schema/`, `tests/`, `.github/`, deploy files, a `.pin`, `beamdswitch` or `fbd`, a first port (it adds to `PORTS`), or a port edited after copying. One such path puts the whole pull request on the full pipeline.

### Fast-path landing

Stage A alone is not enough to land a fast-path change: CI must pass on the exact commit that reaches `main`.

1. Rebase the branch onto the current `origin/main`, push it, and open a pull request. CI runs on pull requests and on pushes to `main`, not on other branch pushes, so a pushed branch alone gets no run.
2. Wait for the pull request's CI run on that head commit to pass.
3. Only then merge the pull request, or fast-forward `main` to that commit. Never push a fast-path commit to `main` directly.

On a red run, fix the change on the branch, push, and wait for green again; never push to `main` red. If `main` moves before landing, rebase, push with `--force-with-lease`, and wait for CI on the new head.

## Stage A: pre-deploy

Run these commands from the repository root. The build and the Python tests
need the separate `visuals` checkout described in the [README](../README.md#build);
set `VISUALS_REPO` when it is not at a supported sibling path.

```sh
.venv/bin/python scripts/validate.py
.venv/bin/python scripts/build.py
.venv/bin/python scripts/run_tests.py --base origin/main  # Python and Node tests, timed against tests/time-budget.json
```

Every command above must exit successfully; on `main`, omit `--base` to run every
per-visualization check (see the [README](../README.md#test)). The build recreates `site/` from the
sources; `site/` is ignored by Git, so `git status` shows only source changes.
Review the generated changes with `.venv/bin/python scripts/site_diff.py <base>`
(see [Deploy generated files](playbooks/deploy.md)) and stop if they go beyond
the intended sources. Do not deploy after a failure.

A site test you add must stay cheap and be timed: follow
[Site test cost](playbooks/add-visualization.md#site-test-cost). Browser end-to-end
tests belong in the dedicated technical E2E repository (pending; until it exists,
the visualization's own repository stands in), never here. This stage is the
site-level end-to-end check of a visualization port, run inside the second of the
[two no-mistakes runs](playbooks/add-visualization.md#end-to-end-testing-and-the-two-pipeline-runs),
or alone for a straight port on the [fast path](#review-tier).

After deploying, run [Stage B](verify-post-deploy.md) and report it with the same fields.

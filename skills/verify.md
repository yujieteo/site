# Verify a published content change

Report one record per check with these fields.

```text
stage,check,status,evidence
```

Use `PASS` or `FAIL` for `status`. Report each stage separately. Stop after a failure and mark the remaining checks `NOT RUN`.

## Review tier

Read the tier from the diff, not from the request: `.venv/bin/python scripts/repo_check.py tier --base origin/main` prints it, with the paths that decide it.

- **Fast path:** Stage A below, then a plain pull request without the no-mistakes pipeline; the change reaches `main` only through [green CI](#fast-path-landing). It applies only when every changed path is one of:
  - content: `data/notes.md` and `data/note-tags.json`, `data/calibrator/raw.toon`, catalogue stubs `data/visuals/<slug>.yaml`, blog posts, decks, podcasts and media, paper links (with the `exports/paper-links.toon` they regenerate) and resources;
  - a straight copy of a private visualization: `visuals/connes-qft/` byte-identical to a yujieteo/connes-qft commit (minus `tests/`, `.github/` and its type-check tooling) whose own checks passed, or `visuals/beamdswitch/` re-vendored as its README says. Name that commit in the pull request. The script cannot see whether a copy was edited after copying: that stays a judgment, made against the named commit.
- **Full pipeline:** everything else, including any change to `scripts/`, `templates/`, `static/`, `schema/`, `tests/`, `.github/`, deploy files, other files under `data/` (such as `data/tag-facets.yaml`), a new private visualization (it adds to `PORTS`), or a copy edited after copying. One such path puts the whole pull request on the full pipeline.

### Fast-path landing

Stage A alone is not enough to land a fast-path change: CI must pass on the exact commit that reaches `main`.

1. Rebase the branch onto the current `origin/main`, push it, and open a pull request. CI runs on pull requests and on pushes to `main`, not on other branch pushes, so a pushed branch alone gets no run.
2. Wait for the pull request's CI run on that head commit to pass.
3. Only then merge the pull request, or fast-forward `main` to that commit. Never push a fast-path commit to `main` directly.

On a red run, fix the change on the branch, push, and wait for green again; never push to `main` red. If `main` moves before landing, rebase, push with `--force-with-lease`, and wait for CI on the new head.

## Stage A: pre-deploy

Run Stage A with one call, from the repository root:

```sh
.venv/bin/python scripts/verify.py stage-a --base origin/main   # every step below, one TOON verdict
.venv/bin/python scripts/verify.py typecheck                    # tsc errors by code and by file, first 20
.venv/bin/python scripts/verify.py last                         # the last stage-a verdict, or stale
```

`stage-a` runs the steps below in order and stops at the first failure. It prints the
verdict, the failed tests with their `file:line`, each step's status and time, the test
time budget and the review tier, and writes each step's full output to `.verify/stage-a/<step>.log`.
Read that log; do not pipe a build or test run through `tail` or `grep`. Exit codes: 0 pass,
1 fail, 2 usage or environment error. After a fix, `--only <steps> --scoped-verdict` reruns the
failed steps; without `--scoped-verdict`, `--only` reports `incomplete`, never `pass`. Run the
whole of Stage A again before the pull request. `typecheck --file <path>` and `--since <ref>`
narrow the counts and the listed errors, but the verdict and exit code always count every error.

The steps it runs, which you can also run by hand. The build and the Python tests
need the separate `visuals` checkout described in the [README](../README.md#build);
set `VISUALS_REPO` when it is not a sibling of this checkout or of its primary checkout.

```sh
.venv/bin/python scripts/validate.py                      # data against schema/, notes tags, todos and date order
.venv/bin/python scripts/repo_check.py --base origin/main # committed artifacts, source-grep tests, review tier
.venv/bin/ruff check                                      # unused or undefined Python names (pip install -r requirements-lint.txt)
.venv/bin/python scripts/build.py
npm ci && npm run typecheck                               # JSDoc types and unused locals in the site's JavaScript, checked by tsc
.venv/bin/python scripts/run_tests.py --base origin/main  # Python and Node tests, timed against tests/time-budget.json
```

`.venv/bin/python scripts/stage_a.py --base origin/main` runs the same commands in this order and prints one row each, stopping at the first failure with the rest `NOT RUN`; pass `--no-npm-ci` when `node_modules` is already installed. Every command above must exit successfully; on `main`, omit `--base` to run every
per-visualization check (see the [README](../README.md#test)). `scripts/repo_check.py`
prints its rows in the `stage,check,status,evidence` form above. For now the source-grep
check only reports a test that asserts on the text of a code file (a `PASS` row that starts
`report only:`); it fails only on an allow-list entry with no reason or one that no longer
matches. Making it fail on a new case is a later step, after a replay against past pull
requests shows no false positives. Rewrite a reported test to run the code; add it to
`tests/source-grep-allowlist.txt`, with the reason, only when the code cannot run without
a browser.

`tests/test_theme_contrast.py` checks text at 4.5:1 and the focus ring at 3:1 in both
themes. It does not check `--border` against WCAG 1.4.11 (3:1). This is a known deviation:
the border is about 1.5:1 in the light theme and 1.9:1 in the dark theme. A border change
is a design follow-up for the captain.

The build recreates `site/` from the
sources; `site/` is ignored by Git, so `git status` shows only source changes.
Review the generated changes with
`.venv/bin/python scripts/site_diff.py <base> --visuals-base <visuals-base>`, where
`<visuals-base>` is the yujieteo/visuals commit the base's build read (for a pull
request, the visuals commit `scripts/build.py` printed; see
[Deploy generated files](playbooks/deploy.md)), and stop if they go beyond
the intended sources. Do not deploy after a failure.

A site test you add must stay cheap and be timed: follow
[Site test cost](playbooks/add-visualization.md#site-test-cost). Model and browser
end-to-end tests belong to the visualization's folder in yujieteo/visuals or the
technical E2E checks, never here ([Test ownership](playbooks/add-visualization.md#test-ownership)).
This stage is the site-level check of every visualization the site publishes.

After deploying, run [Stage B](verify-post-deploy.md) and report it with the same fields.

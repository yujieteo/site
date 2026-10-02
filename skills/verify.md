# Verify a published content change

Report one record per check with these fields.

```text
stage,check,status,evidence
```

Use `PASS` or `FAIL` for `status`. Report each stage separately. Stop after a failure and mark the remaining checks `NOT RUN`.

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
site-level end-to-end check of a visualization port, the second of the
[two no-mistakes runs](playbooks/add-visualization.md#end-to-end-testing-and-the-two-pipeline-runs).

After deploying, run [Stage B](verify-post-deploy.md) and report it with the same fields.

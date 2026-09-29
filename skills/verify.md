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
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
node --test tests/corpus.test.mjs
```

All four commands must exit successfully. The build recreates `site/` from the
sources, so a clean run leaves no Git diff; review that diff and stop if it
contains changes beyond the intended sources. Do not deploy after a failure.

After deploying, run [Stage B](verify-post-deploy.md) and report it with the same fields.

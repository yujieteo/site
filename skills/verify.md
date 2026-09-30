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
# Node tests: run the `node --test` command from the [README Test section](../README.md#test).
```

Every command above must exit successfully. The build recreates `site/` from the
sources; `site/` is ignored by Git, so `git status` shows only source changes.
Review the generated changes with `.venv/bin/python scripts/site_diff.py <base>`
(see [Deploy generated files](playbooks/deploy.md)) and stop if they go beyond
the intended sources. Do not deploy after a failure.

After deploying, run [Stage B](verify-post-deploy.md) and report it with the same fields.

# Verify a published content change

Report one record per check with these fields.

```text
stage,check,status,evidence
```

Use `PASS` or `FAIL` for `status`. Report each stage separately. Stop after a failure and mark the remaining checks `NOT RUN`.

## Stage A: pre-deploy

Run these commands from the repository root.

```sh
.venv/bin/python scripts/validate.py
.venv/bin/python scripts/build.py
.venv/bin/python -m unittest discover -s tests -p 'test_*.py'
node --test tests/corpus.test.mjs
```

All four commands must exit successfully. Review the generated diff after the build. Do not deploy after a failure.

## Stage B: post-deploy

1. Compare the local and remote checksum for every uploaded file.
2. Fetch each changed public page over HTTPS. Confirm that the expected date, title, tag, or record is present in the served HTML.
3. Fetch public `corpus.json`. Confirm that it contains each matching Corpus Record with the expected revision.
4. If any check fails, restore the preserved prior files according to [Atomic safe deploy](principles/atomic-safe-deploy.md). Report the mismatch and the restore result.

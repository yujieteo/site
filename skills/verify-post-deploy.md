# Verify a deployment (Stage B: post-deploy)

Report each check with the `stage,check,status,evidence` fields from [verify.md](verify.md). Stop after a failure and mark the remaining checks `NOT RUN`.

1. Compare the local and remote checksum for every uploaded file. A matching checksum proves only identical bytes; it does not prove the file is readable.
   For large pinned downloads, compare the remote `sha256sum` with the `sha256` pinned in the visualization's `downloads` file instead of downloading them again.
2. Check for stray files: `.venv/bin/python scripts/deploy_check.py paths <rows> --host <alias> --docroot <path> --backup <fm-dir>`, where `<rows>` is the saved `scripts/site_diff.py` output from the deploy and `<fm-dir>` is this deploy's backup folder if it sits in the document root. It fails on an AppleDouble `._*` file, any other dotfile (apart from `.well-known/`), or a private path in the upload set and in the live document root, which it lists over SSH.
3. Fetch each changed public page over HTTPS and require an HTTP 200 response. For a large pinned download, send a `HEAD` request instead and require HTTP 200 with a `Content-Length` equal to its pinned `bytes`. A 403 means the installed file is not web-readable, so treat any non-200 status as a failure before checking content.
4. Confirm that the served HTML of each changed public page contains the expected date, title, tag, or record.
5. Load each changed page once in a headless browser: `.venv/bin/python scripts/deploy_check.py console <rows> --base-url https://<site>/`. It fails on any console error and on any request that did not load, naming its URL.
6. Fetch public `corpus.json` over HTTPS and require an HTTP 200 response, then confirm that it contains each matching Corpus Record with the expected revision.
7. If any check fails, restore the preserved prior files according to [Atomic safe deploy](principles/atomic-safe-deploy.md). Report the mismatch and the restore result.

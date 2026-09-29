# Verify a deployment (Stage B: post-deploy)

Report each check with the `stage,check,status,evidence` fields from [verify.md](verify.md). Stop after a failure and mark the remaining checks `NOT RUN`.

1. Compare the local and remote checksum for every uploaded file. A matching checksum proves only identical bytes; it does not prove the file is readable.
2. Fetch each changed public page over HTTPS and require an HTTP 200 response. A 403 means the installed file is not web-readable, so treat any non-200 status as a failure before checking content.
3. Confirm that the served HTML of each changed public page contains the expected date, title, tag, or record.
4. Fetch public `corpus.json` over HTTPS and require an HTTP 200 response, then confirm that it contains each matching Corpus Record with the expected revision.
5. If any check fails, restore the preserved prior files according to [Atomic safe deploy](principles/atomic-safe-deploy.md). Report the mismatch and the restore result.

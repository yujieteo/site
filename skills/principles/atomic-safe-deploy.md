# Deploy atomically and safely

Use a unique temporary filename for each upload. Verify its checksum. Preserve the current file temporarily, then atomically rename the verified upload into place. Never use deletion, mirroring, or removal flags. Never remove remote files, except the one backup directory this deploy created for its preserved files (name it with an `fm-` prefix), once Stage B has passed.

Set a web-readable mode on every installed file as part of the install: `chmod 644` the temporary file before the rename, or install it with `install -m 644`. Set the mode on the temporary file so the rename stays atomic and the file is never briefly unreadable. A matching checksum proves identical bytes, not that the web server can read them.

Deploys change only files in the site's document root. Never change the web server's configuration (such as nginx) or anything else on the server; a feature that seems to need it must work with static, page-level methods instead.

On any post-deploy mismatch, restore every preserved prior file and report the failure.

`scripts/deploy.py run --execute` follows these rules; see [Deploy generated files](../playbooks/deploy.md).

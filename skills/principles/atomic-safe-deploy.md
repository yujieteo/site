# Deploy atomically and safely

Use a unique temporary filename for each upload. Verify its checksum. Preserve the current file temporarily, then atomically rename the verified upload into place. Never use deletion, mirroring, or removal flags. Never remove remote files.

On any post-deploy mismatch, restore every preserved prior file and report the failure.

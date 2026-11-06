import { expect, test } from "bun:test";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

test("the wallpaper builder rejects an unpinned compiler before execution", () => {
  const root = fileURLToPath(new URL("../", import.meta.url));
  const temp = mkdtempSync(join(tmpdir(), "site-compiler-"));
  try {
    const compiler = join(temp, "goose"), marker = join(temp, "executed");
    writeFileSync(compiler, `#!/bin/sh\nprintf executed > '${marker}'\nprintf 'goose v2026.3\\n'\n`, { mode: 0o755 });
    const result = Bun.spawnSync(["/bin/sh", "scripts/build-wallpaper.sh"], {
      cwd: root, env: { ...process.env, GOOSE: compiler },
    });
    expect(result.exitCode).toBe(1);
    expect(result.stderr.toString()).toContain("is not the official compiler pinned in goose.lock");
    expect(existsSync(marker)).toBe(false);
  } finally {
    rmSync(temp, { recursive: true });
  }
});

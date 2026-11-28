import { describe, expect, test } from "bun:test";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");
const CMD_HOOK = resolve(ROOT, ".claude/hooks/guard-commands.py");
const DIST_HOOK = resolve(ROOT, ".claude/hooks/guard-dist.py");

function runHook(hook: string, stdin: string, env?: Record<string, string>) {
  const proc = Bun.spawnSync(["python3", "-I", hook], {
    cwd: ROOT,
    stdin: new TextEncoder().encode(stdin),
    stdout: "pipe",
    stderr: "pipe",
    env: { ...process.env, CLAUDE_PROJECT_DIR: ROOT, ...env },
  });
  return { code: proc.exitCode, stderr: proc.stderr.toString() };
}

describe("guard-commands hook", () => {
  const blocked = [
    "bun src/build.ts",
    "bun run ./src/build.ts",
    "bun src/build.ts --drafts",
    "echo --out && bun src/build.ts",
    "scripts/deploy.sh",
    "sh ./scripts/deploy.sh",
    "bash -lc 'scripts/deploy.sh'",
    "env -u FOO scripts/deploy.sh",
    "cd /tmp && ssh deploy@10.8.0.1",
  ];
  for (const command of blocked) {
    test(`blocks: ${command}`, () => {
      const res = runHook(CMD_HOOK, JSON.stringify({ tool_input: { command } }));
      expect(res.code).toBe(2);
    });
  }

  const allowed = [
    'bun src/build.ts --out "$(mktemp -d)"',
    "bun run ./src/build.ts --drafts --out /tmp/site",
    "bun src/build.ts --out=/tmp/site",
    "bash -n scripts/deploy.sh",
    "shellcheck scripts/deploy.sh",
    "bun test",
  ];
  for (const command of allowed) {
    test(`allows: ${command}`, () => {
      const res = runHook(CMD_HOOK, JSON.stringify({ tool_input: { command } }));
      expect(res.code).toBe(0);
    });
  }

  test("fails closed on malformed input", () => {
    expect(runHook(CMD_HOOK, "not json").code).toBe(2);
  });
});

describe("guard-dist hook", () => {
  const blocked = [
    "dist/index.html",
    "./dist/index.html",
    resolve(ROOT, "dist/api/manifest.json"),
    resolve(ROOT, "src/../dist/index.html"),
  ];
  for (const file_path of blocked) {
    test(`blocks: ${file_path}`, () => {
      const res = runHook(DIST_HOOK, JSON.stringify({ tool_input: { file_path } }));
      expect(res.code).toBe(2);
    });
  }

  test("allows source files", () => {
    const res = runHook(DIST_HOOK, JSON.stringify({ tool_input: { file_path: resolve(ROOT, "src/build.ts") } }));
    expect(res.code).toBe(0);
  });

  test("fails closed on malformed input", () => {
    expect(runHook(DIST_HOOK, "not json").code).toBe(2);
  });
});

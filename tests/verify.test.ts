import { expect, test } from "bun:test";
import { fileURLToPath } from "node:url";

const preload = fileURLToPath(new URL("fixtures/verify-fetch.ts", import.meta.url));
const verify = fileURLToPath(new URL("../scripts/api/verify.ts", import.meta.url));

function run(scenario: string, ...args: string[]) {
  const child = Bun.spawnSync([process.execPath, "--preload", preload, verify, ...args], {
    env: { ...process.env, VERIFY_TEST: scenario },
  });
  return { code: child.exitCode, out: child.stdout.toString(), err: child.stderr.toString() };
}

test("a normal check reports both static and live files verified", () => {
  const result = run("healthy");
  expect(result.code).toBe(0);
  expect(result.out).toContain("OK: all static and live files match");
});

test("missing live manifest fails by default", () => {
  const result = run("missing");
  expect(result.code).toBe(1);
  expect(result.out).toContain("FAIL /feeds-manifest.json: HTTP 404");
  expect(result.out).not.toContain("OK:");
});

test("a preview may explicitly skip a missing live manifest", () => {
  const result = run("missing", "https://preview.invalid", "--allow-missing-feeds");
  expect(result.code).toBe(0);
  expect(result.out).toContain("SKIP live feeds");
  expect(result.out).toContain("OK: all static files match; live feeds skipped");
  expect(result.out).not.toContain("all static and live");
});

test("unexpected live manifest statuses fail even when missing feeds are allowed", () => {
  const production = run("unavailable");
  expect(production.code).toBe(1);
  expect(production.out).toContain("FAIL /feeds-manifest.json: HTTP 503");
  expect(production.out).not.toContain("OK:");
  for (const [fixture, status] of [["unavailable", 503], ["unauthorized", 401]] as const) {
    const result = run(fixture, "https://preview.invalid", "--allow-missing-feeds");
    expect(result.code).toBe(1);
    expect(result.out).toContain(`FAIL /feeds-manifest.json: HTTP ${status}`);
    expect(result.out).not.toContain("SKIP live feeds");
    expect(result.out).not.toContain("OK:");
  }
});

test("live manifest transport errors fail even when missing feeds are allowed", () => {
  const result = run("transport", "https://preview.invalid", "--allow-missing-feeds");
  expect(result.code).toBe(1);
  expect(result.err).toContain("fixture transport failed");
  expect(result.out).not.toContain("OK:");
});

// The Node tests find the yujieteo/visuals checkout as the build does, so a disposable worktree needs no
// VISUALS_REPO: each test builds its checkouts in a temporary directory.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, realpathSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { findVisualsRepo } from "./visuals-repo.mjs";

/** @param {string} dir */
const makeVisuals = (dir) => { mkdirSync(path.join(dir, "viz"), { recursive: true }); mkdirSync(path.join(dir, ".git")); return dir; };
/** @param {string} cwd @param {string[]} args */
const git = (cwd, ...args) => execFileSync("git", ["-c", "user.name=t", "-c", "user.email=t@t", ...args], { cwd, stdio: "ignore" });

/** A primary checkout tmp/src/site and its linked worktree tmp/pool/site-1/3/site. @param {import("node:test").TestContext} t */
function checkouts(t) {
  const tmp = realpathSync(mkdtempSync(path.join(tmpdir(), "visuals-repo-")));
  t.after(() => rmSync(tmp, { recursive: true, force: true }));
  const primary = path.join(tmp, "src", "site");
  mkdirSync(primary, { recursive: true });
  git(primary, "init", "-q");
  git(primary, "commit", "-q", "--allow-empty", "-m", "init");
  const worktree = path.join(tmp, "pool", "site-1", "3", "site");
  git(primary, "worktree", "add", "-q", "--detach", worktree);
  return { tmp, worktree };
}

test("a worktree finds the visuals checkout beside its primary checkout", (t) => {
  const { tmp, worktree } = checkouts(t);
  const visuals = makeVisuals(path.join(tmp, "src", "visuals"));
  assert.equal(findVisualsRepo(worktree, {}), visuals);
});

test("a worktree prefers its own sibling", (t) => {
  const { tmp, worktree } = checkouts(t);
  makeVisuals(path.join(tmp, "src", "visuals"));
  const own = makeVisuals(path.join(tmp, "pool", "site-1", "3", "visuals"));
  assert.equal(findVisualsRepo(worktree, {}), own);
});

test("VISUALS_REPO wins, and a wrong one is an error naming it", (t) => {
  const { tmp, worktree } = checkouts(t);
  makeVisuals(path.join(tmp, "src", "visuals"));
  const configured = makeVisuals(path.join(tmp, "elsewhere", "visuals"));
  assert.equal(findVisualsRepo(worktree, { VISUALS_REPO: configured }), configured);
  const missing = path.join(tmp, "missing");
  assert.throws(() => findVisualsRepo(worktree, { VISUALS_REPO: missing }),
    { message: new RegExp(`VISUALS_REPO is "${missing}".*not a yujieteo/visuals checkout`) });
});

test("nothing found lists every path tried and the fix", (t) => {
  const { tmp, worktree } = checkouts(t);
  assert.throws(() => findVisualsRepo(worktree, {}), (/** @type {Error} */ error) => {
    for (const p of ["pool/site-1/3/visuals", "src/visuals", "tmp/visuals"]) assert.ok(error.message.includes(path.join(tmp, p)), p);
    assert.match(error.message, /export VISUALS_REPO=/);
    return true;
  });
});

test("a VISUALS_REPO under ~ is read from the home directory", (t) => {
  const { tmp, worktree } = checkouts(t);
  const home = process.env.HOME;
  t.after(() => { process.env.HOME = home; });
  process.env.HOME = tmp;
  const visuals = makeVisuals(path.join(tmp, "elsewhere", "visuals"));
  assert.equal(findVisualsRepo(worktree, { VISUALS_REPO: "~/elsewhere/visuals" }), visuals);
});

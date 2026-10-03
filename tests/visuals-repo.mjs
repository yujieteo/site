/* The yujieteo/visuals checkout the Node tests read, found as scripts/visual_sources.py finds it for the
   build: VISUALS_REPO when it is set, else ../visuals, ../../visuals or ../../tmp/visuals of this checkout,
   then of the primary checkout when this checkout is a linked Git worktree. */
import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SIBLINGS = [["..", "visuals"], ["..", "..", "visuals"], ["..", "..", "tmp", "visuals"]];

/** @param {string} dir */
const isVisualsCheckout = (dir) => existsSync(path.join(dir, "viz")) && statSync(path.join(dir, "viz")).isDirectory()
  && existsSync(path.join(dir, ".git"));

/** The primary checkout of the repository at root, or null when Git cannot tell. @param {string} root */
function primaryCheckout(root) {
  try {
    const common = execFileSync("git", ["rev-parse", "--path-format=absolute", "--git-common-dir"],
      { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    return path.basename(common) === ".git" ? path.dirname(common) : common;
  } catch {
    return null;
  }
}

/**
 * The visuals checkout's absolute path; throws naming the bad VISUALS_REPO, or every path tried, and the fix.
 * @param {string} root @param {NodeJS.ProcessEnv} env
 */
export function findVisualsRepo(root, env) {
  if (env.VISUALS_REPO) {
    const configured = env.VISUALS_REPO.replace(/^~(?=$|\/)/, homedir());
    if (!isVisualsCheckout(configured)) {
      throw new Error(`VISUALS_REPO is ${JSON.stringify(env.VISUALS_REPO)}, which is not a yujieteo/visuals checkout `
        + "(a Git checkout with a viz/ folder). Fix: set VISUALS_REPO to the path of a yujieteo/visuals checkout, "
        + "or unset it to use a sibling checkout.");
    }
    return path.resolve(configured);
  }
  const bases = [root];
  const primary = primaryCheckout(root);
  if (primary !== null && path.resolve(primary) !== path.resolve(root)) bases.push(primary);
  const tried = bases.flatMap((base) => SIBLINGS.map((sibling) => path.resolve(base, ...sibling)));
  const found = tried.find(isVisualsCheckout);
  if (found === undefined) {
    throw new Error(`Visuals repository not found. Tried, in order:\n${tried.map((p) => `  ${p}`).join("\n")}\n`
      + "Fix: export VISUALS_REPO=/path/to/visuals, or clone it next to the site checkout:\n"
      + `  git clone https://github.com/yujieteo/visuals.git ${path.resolve(root, "..", "visuals")}`);
  }
  return found;
}

/** This checkout's visuals checkout as a directory URL, for the tests to read its files. */
export const visualsUrl = () => pathToFileURL(`${findVisualsRepo(fileURLToPath(new URL("..", import.meta.url)), process.env)}/`);

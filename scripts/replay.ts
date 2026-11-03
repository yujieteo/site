import { createHash } from "node:crypto";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  BEAM_WASM, INPUTS_FILE, WALLPAPER_WASM, type ReplayInput,
  drawWallpaper, loadWallpaper, parseReplayInput, runBeamSession,
} from "./replay-lib";

const LARGE_CHANGE_SHARE = 0.2;
const LARGE_CHANGE_MIN_COMPARED = 10;
const MAX_DIFF_LINES = 40;
const PAGE_C = "beamdiag/c/page.c";
const PAGE_SHIM = "beamdiag/src/shim.c";

interface Difference {
  what: string;
  detail: string;
}

function run(command: string[], cwd: string): string {
  const result = Bun.spawnSync(command, { cwd, stdout: "pipe", stderr: "pipe" });
  if (result.exitCode !== 0 && !(command[0] === "diff" && result.exitCode === 1)) {
    throw new Error(`${command.join(" ")} failed in ${cwd}: ${result.stderr.toString()}`);
  }
  return result.stdout.toString();
}

function copyOfCommit(revision: string, parent: string, name: string): string {
  const folder = join(parent, name);
  Bun.spawnSync(["mkdir", folder]);
  const archive = Bun.spawnSync(["git", "archive", revision], { stdout: "pipe" });
  if (archive.exitCode !== 0) throw new Error(`git archive ${revision} failed`);
  const unpack = Bun.spawnSync(["tar", "-x", "-C", folder], { stdin: archive.stdout });
  if (unpack.exitCode !== 0) throw new Error(`tar failed for ${revision}`);
  return folder;
}

function buildPage(copy: string, out: string): string {
  const program = join(out, "page");
  run(["cc", "-O1", "-w", PAGE_C, PAGE_SHIM, "-lm", "-o", program], copy);
  const html = join(out, "index.html");
  run([program, html], copy);
  return html;
}

function wallpaperDigest(pixels: Uint8Array): string {
  return createHash("sha256").update(pixels).digest("hex");
}

function describe(input: ReplayInput): string {
  return input.kind === "beam" ? `beam session "${input.name}"` : `wallpaper seed ${input.seed} ${input.width}x${input.height}`;
}

async function outputs(copy: string, inputs: ReplayInput[]): Promise<string[]> {
  const wallpaper = await loadWallpaper(join(copy, WALLPAPER_WASM));
  const results: string[] = [];
  for (const input of inputs) {
    if (input.kind === "wallpaper") results.push(wallpaperDigest(await drawWallpaper(wallpaper, input)));
    else results.push((await runBeamSession(join(copy, BEAM_WASM), input.messages)).join("\n"));
  }
  return results;
}

function readInputs(): ReplayInput[] {
  if (!existsSync(INPUTS_FILE)) throw new Error(`no captured inputs at ${INPUTS_FILE}. Run: REPLAY_CAPTURE=1 bun test`);
  const lines = [...new Set(readFileSync(INPUTS_FILE, "utf8").split("\n").filter(Boolean))];
  return lines.map((line) => parseReplayInput(JSON.parse(line)));
}

function defaultBase(): string {
  const branch = run(["git", "rev-parse", "--abbrev-ref", "HEAD"], ".").trim();
  return branch === "main" ? "HEAD~1" : "main";
}

async function main(): Promise<number> {
  const args = process.argv.slice(2);
  const accept = args.includes("--accept");
  const baseIndex = args.indexOf("--base");
  const base = baseIndex >= 0 ? args[baseIndex + 1] ?? "" : defaultBase();
  if (!base) throw new Error("--base needs a revision");
  if (run(["git", "status", "--porcelain"], ".").trim() !== "") throw new Error("replay: commit first. The replay runs the committed branch.");
  const inputs = readInputs();
  const work = mkdtempSync(join(tmpdir(), "site-replay-"));
  try {
    const baseCopy = copyOfCommit(base, work, "base");
    const headCopy = copyOfCommit("HEAD", work, "head");
    const differences: Difference[] = [];
    const baseOutputs = await outputs(baseCopy, inputs);
    const headOutputs = await outputs(headCopy, inputs);
    let compared = 0, stoppedEarly = false;
    for (const [index, input] of inputs.entries()) {
      compared++;
      if (baseOutputs[index] !== headOutputs[index]) differences.push({ what: describe(input), detail: "output differs" });
      if (compared >= LARGE_CHANGE_MIN_COMPARED && differences.length / compared > LARGE_CHANGE_SHARE) { stoppedEarly = true; break; }
    }
    const baseHtml = buildPage(baseCopy, join(work, "base"));
    const headHtml = buildPage(headCopy, join(work, "head"));
    const pageDiff = run(["diff", "-u", baseHtml, headHtml], work);
    if (pageDiff) differences.push({ what: "beam page index.html", detail: pageDiff.split("\n").slice(0, MAX_DIFF_LINES).join("\n") });
    console.log(`replay: ${compared} of ${inputs.length} captured inputs compared against ${base}, plus the beam page`);
    if (stoppedEarly) console.log(`replay: large change. More than ${LARGE_CHANGE_SHARE * 100}% of the outputs differ, so the replay stopped early.`);
    for (const difference of differences) console.log(`replay: DIFF ${difference.what}\n${difference.detail}`);
    if (differences.length === 0) { console.log("replay: no output differs"); return 0; }
    if (accept) { console.log("replay: the diff above is accepted on this run"); return 0; }
    console.error("replay: the outputs differ. Read the diff. Run again with --accept only if the change must change the output.");
    return 1;
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
}

process.exitCode = await main();

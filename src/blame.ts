import { today } from "./notes.ts";

// The day each line of a file last changed in git. A row of base data or a note line has no date of its
// own, so its as_of is the day its line last changed: the day someone last wrote or checked it. A line not
// yet committed gets today.

const cache = new Map<string, { text: string; day: string }[]>();

function blame(file: string): { text: string; day: string }[] {
  const hit = cache.get(file);
  if (hit) return hit;
  const run = Bun.spawnSync(["git", "blame", "--line-porcelain", "--", file]);
  if (run.exitCode !== 0) throw new Error(`blame: git blame ${file} failed: ${run.stderr.toString().trim()}`);
  const lines: { text: string; day: string }[] = [];
  let time = 0;
  let committed = true;
  for (const line of run.stdout.toString().split("\n")) {
    if (/^[0-9a-f]{40} /.test(line)) committed = !line.startsWith("0000000000000000000000000000000000000000");
    else if (line.startsWith("committer-time ")) time = Number(line.slice(15));
    else if (line.startsWith("\t")) lines.push({ text: line.slice(1), day: committed ? new Date(time * 1000).toISOString().slice(0, 10) : today() });
  }
  cache.set(file, lines);
  return lines;
}

// The day of the first line of the file that holds every needle. A row that no line holds stops the build,
// so no row goes out with a guessed date.
export function lineDay(file: string, needles: readonly string[]): string {
  const found = blame(file).find((line) => needles.every((needle) => line.text.includes(needle)));
  if (!found) throw new Error(`blame: no line of ${file} holds ${needles.map((n) => JSON.stringify(n)).join(" and ")}`);
  return found.day;
}

// The day a file or folder last changed in a commit.
export function lastChanged(path: string): string {
  const run = Bun.spawnSync(["git", "log", "-1", "--format=%cs", "--", path]);
  const day = run.stdout.toString().trim();
  const dirty = Bun.spawnSync(["git", "status", "--porcelain", "--", path]).stdout.toString().trim() !== "";
  return dirty || day === "" ? today() : day;
}

// The commit the site is built from and its time, so two builds of one commit give the same bytes.
export function headCommit(): { commit: string; at: string; dirty: boolean } {
  const run = Bun.spawnSync(["git", "log", "-1", "--format=%H %cI"]);
  const [commit = "", at = ""] = run.stdout.toString().trim().split(" ");
  const dirty = Bun.spawnSync(["git", "status", "--porcelain"]).stdout.toString().trim() !== "";
  return { commit, at: new Date(at).toISOString().replace(".000Z", "Z"), dirty };
}

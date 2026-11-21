// Writes an outcome for each call whose month SingStat has published, from the newest saved CPI table.
//
//   bun scripts/prices/upstream.ts      # save the newest tables first
//   bun scripts/prices/resolve.ts       # appends lines to notes/outcomes.tsv
//
// It never touches notes/calls.tsv. A call that already has an outcome is left alone.
import { appendFileSync, existsSync, readdirSync, readFileSync } from "node:fs";
import { DIR } from "./collect.ts";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TABLE = "https://tablebuilder.singstat.gov.sg/table/TS/M213751";

function newestCpi(): { day: string; series: Map<string, Map<string, string>> } {
  const days = readdirSync(`${DIR}/upstream`).filter((d) => existsSync(`${DIR}/upstream/${d}/singstat-M213751.json.gz`)).sort();
  const day = days.at(-1);
  if (!day) throw new Error("no saved CPI table: run bun scripts/prices/upstream.ts");
  const rows = JSON.parse(new TextDecoder().decode(Bun.gunzipSync(readFileSync(`${DIR}/upstream/${day}/singstat-M213751.json.gz`)))) as { seriesNo: string; columns: { key: string; value: string }[] }[];
  const series = new Map<string, Map<string, string>>();
  for (const row of rows) series.set(row.seriesNo, new Map(row.columns.map((c) => [c.key, c.value])));
  return { day, series };
}

function lines(path: string): string[][] {
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8").split("\n").filter((l) => l !== "" && !l.startsWith("#")).map((l) => l.split("\t"));
}

const { day, series } = newestCpi();
const done = new Set(lines("notes/outcomes.tsv").map((cells) => cells[0]));
let added = 0;
for (const cells of lines("notes/calls.tsv")) {
  const id = cells[0] ?? "";
  if (done.has(id)) continue;
  const field = (key: string) => cells.find((c) => c.startsWith(`${key}=`))?.slice(key.length + 1) ?? "";
  const [year, month] = field("month").split("-");
  const key = `${year} ${MONTHS[Number(month) - 1]}`;
  const value = series.get(field("series"))?.get(key);
  if (value === undefined || value === "" || !Number.isFinite(Number(value)) || Number(value) <= 0) continue;
  appendFileSync("notes/outcomes.tsv", `${id}\t0\tSingStat M213751, ${field("series")}, ${key}\tactual=${Number(value)}\turl=${TABLE}\tdate=${day}\n`);
  added++;
}
console.log(`${added} outcome(s) added from the CPI table saved on ${day}`);

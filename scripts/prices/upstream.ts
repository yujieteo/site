// Saves the upstream data behind each good's price, as the sources send it, to $PRICES_DIR/upstream/DAY/.
//
//   bun scripts/prices/upstream.ts
//
// - SingStat CPI (M213751) and average retail prices (M213761), every series, all months.
// - World Bank Pink Sheet: monthly world commodity prices in US$ (rice, palm, soy and sunflower oil, coffee,
//   wheat, maize, soybean meal, Brent, Asian LNG).
// - UN Comtrade: Singapore's monthly imports by HS code, value and weight, from all partners and from
//   Malaysia, so a landed cost per kg can be worked out.
// - Exchange rates, monthly: US$ and ringgit in S$.
//
// Each source is saved once a day. Rerun after a source updates; passthrough.py reads the newest copy.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { DIR } from "./collect.ts";

const DAY = new Date(Date.now() + 8 * 3600000).toISOString().slice(0, 10);
const OUT = `${DIR}/upstream/${DAY}`;
const AGENT = { "User-Agent": "teoyujie.org price research" };

// The World Bank moves this file each month. The page that links it is
// https://www.worldbank.org/en/research/commodity-markets
const PINK_SHEET = "https://thedocs.worldbank.org/en/doc/74e8be41ceb20fa0da750cda2f6b9e4e-0050012026/related/CMO-Historical-Data-Monthly.xlsx";

// HS codes: eggs in shell, rice, poultry meat, fresh, frozen and filleted fish, coffee, coffee extracts,
// palm, sunflower and canola oil, milk and cream, flour, bread and bakery.
const HS = ["0407", "1006", "0207", "0302", "0303", "0304", "0901", "2101", "1511", "1512", "1514", "0401", "1101", "1905"];
const FIRST_YEAR = 2015;

function save(name: string, body: string | Uint8Array): void {
  writeFileSync(`${OUT}/${name}`, typeof body === "string" ? Bun.gzipSync(body) : body);
}

async function get(url: string): Promise<Response> {
  for (let attempt = 1; ; attempt++) {
    const reply = await fetch(url, { headers: AGENT });
    if (reply.ok) return reply;
    if (attempt >= 4) throw new Error(`${url}: HTTP ${reply.status}`);
    await Bun.sleep(3000 * 2 ** attempt);
  }
}

// TableBuilder returns at most 5,000 data points a call, and its offset counts data points.
async function singstat(table: string): Promise<void> {
  const name = `singstat-${table}.json.gz`;
  if (existsSync(`${OUT}/${name}`)) return;
  const rows = new Map<string, { seriesNo: string; rowText: string; uoM: string; columns: { key: string; value: string }[] }>();
  for (let offset = 0; ; offset += 5000) {
    const reply = await get(`https://tablebuilder.singstat.gov.sg/api/table/tabledata/${table}?offset=${offset}&limit=5000`);
    const data = ((await reply.json()) as { Data: { row: { seriesNo: string; rowText: string; uoM: string; columns: { key: string; value: string }[] }[] } }).Data;
    if (data.row.length === 0) break;
    for (const row of data.row) {
      const have = rows.get(row.seriesNo);
      if (have) have.columns.push(...row.columns);
      else rows.set(row.seriesNo, { ...row, columns: [...row.columns] });
    }
    await Bun.sleep(500);
  }
  save(name, JSON.stringify([...rows.values()]));
  console.log(`${table}: ${rows.size} series`);
}

async function pinkSheet(): Promise<void> {
  const name = "worldbank-pink-sheet-monthly.xlsx";
  if (existsSync(`${OUT}/${name}`)) return;
  save(name, new Uint8Array(await (await get(PINK_SHEET)).arrayBuffer()));
  console.log("World Bank Pink Sheet saved");
}

// The free Comtrade preview takes one period a call, returns at most 500 records and answers 429 when called
// too often. Each month is saved as it arrives, under upstream/comtrade/, so a stopped run resumes. A month
// is fetched again only while it is under a year old, since Comtrade fills recent months late.
async function comtrade(): Promise<void> {
  const dir = `${DIR}/upstream/comtrade`;
  mkdirSync(dir, { recursive: true });
  const now = new Date();
  let fetched = 0;
  for (let year = FIRST_YEAR; year <= now.getUTCFullYear(); year++) {
    for (let month = 1; month <= 12; month++) {
      const age = (now.getUTCFullYear() - year) * 12 + now.getUTCMonth() + 1 - month;
      if (age < 1) break;
      const period = `${year}${String(month).padStart(2, "0")}`;
      const file = `${dir}/${period}.json.gz`;
      if (existsSync(file) && (age > 12 || Bun.file(file).lastModified > Date.now() - 20 * 86400000)) continue;
      const url = `https://comtradeapi.un.org/public/v1/preview/C/M/HS?reporterCode=702&period=${period}&cmdCode=${HS.join(",")}&flowCode=M&partnerCode=0,458&partner2Code=0&customsCode=C00&motCode=0`;
      let body: { data?: unknown[]; error?: string } = {};
      for (let attempt = 1; ; attempt++) {
        const reply = await fetch(url, { headers: AGENT });
        if (reply.ok) {
          body = (await reply.json()) as typeof body;
          break;
        }
        if (attempt >= 6) throw new Error(`Comtrade ${period}: HTTP ${reply.status} after ${attempt} tries; rerun later to resume`);
        await Bun.sleep(15000 * attempt);
      }
      if (body.error) throw new Error(`Comtrade ${period}: ${body.error}`);
      writeFileSync(file, Bun.gzipSync(JSON.stringify(body.data ?? [])));
      fetched++;
      await Bun.sleep(4000);
    }
  }
  console.log(`Comtrade: ${fetched} month(s) fetched into ${dir}`);
}

async function rates(): Promise<void> {
  const name = "fx-monthly.json.gz";
  if (existsSync(`${OUT}/${name}`)) return;
  const out: Record<string, unknown> = {};
  // SGD=X is S$ per US$. MYRSGD=X is S$ per ringgit.
  for (const pair of ["SGD=X", "MYRSGD=X"]) {
    out[pair] = await (await get(`https://query1.finance.yahoo.com/v8/finance/chart/${pair}?range=15y&interval=1mo`)).json();
    await Bun.sleep(1000);
  }
  save(name, JSON.stringify(out));
  console.log("exchange rates saved");
}

mkdirSync(OUT, { recursive: true });
await singstat("M213751");
await singstat("M213761");
await pinkSheet();
await rates();
await comtrade();
console.log(`upstream data in ${OUT}`);

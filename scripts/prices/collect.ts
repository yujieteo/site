// Saves one day of shelf prices for the goods of the Singapore prices post, as the shop sends them.
//
// The raw replies are the record: a price that was not saved today cannot be read later. So this keeps the
// whole reply, gzipped, and leaves all reading of it to history.ts, which can be rerun on the raw files when
// its rules change. It was run once, on 2026-11-15; a later run adds another day:
//
//   bun scripts/prices/collect.ts            # writes $PRICES_DIR/fairprice/YYYY-MM-DD/<category>.json.gz
//
// PRICES_DIR defaults to ~/data/library/sg-prices. A day that is already saved is skipped, so a second run
// on the same day costs nothing.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";

export const GOODS: Record<string, readonly string[]> = {
  eggs: ["fresh-eggs"],
  rice: ["white-rice"],
  chicken: ["fresh-chicken"],
  fish: ["fresh-fish---seafood"],
  coffee: ["instant-coffee"],
  oil: ["cooking-oil", "canola-oil", "sunflower-oil", "vegetable-oil"],
  milk: ["fresh-milk"],
  bread: ["bread-slice"],
};

export const DIR = process.env.PRICES_DIR ?? `${homedir()}/data/library/sg-prices`;
const API = "https://website-api.omni.fairprice.com.sg/api/product/v2";
// Store 165 is the one the website uses when no address is set. Prices are national; stock is per store.
const STORE = 165;
const PAUSE_MS = 1500;

function singaporeDay(): string {
  return new Date(Date.now() + 8 * 3600000).toISOString().slice(0, 10);
}

async function page(category: string, n: number): Promise<{ products: unknown[]; pages: number }> {
  const url = `${API}?category=${category}&storeId=${STORE}&pageType=category&url=${category}&page=${n}`;
  for (let attempt = 1; ; attempt++) {
    try {
      const reply = await fetch(url, { headers: { "User-Agent": "teoyujie.org price research" } });
      if (!reply.ok) throw new Error(`HTTP ${reply.status}`);
      const body = (await reply.json()) as { data?: { product?: unknown[]; pagination?: { total_pages?: number } } };
      const products = body.data?.product;
      if (!Array.isArray(products)) throw new Error("no product list in the reply");
      return { products, pages: body.data?.pagination?.total_pages ?? 1 };
    } catch (error) {
      if (attempt >= 4) throw new Error(`${category} page ${n}: ${String(error)}`);
      await Bun.sleep(PAUSE_MS * 2 ** attempt);
    }
  }
}

async function main(): Promise<void> {
  const day = singaporeDay();
  const dir = `${DIR}/fairprice/${day}`;
  mkdirSync(dir, { recursive: true });
  let total = 0;
  for (const [good, categories] of Object.entries(GOODS)) {
    for (const category of categories) {
      const file = `${dir}/${category}.json.gz`;
      if (existsSync(file)) continue;
      const products: unknown[] = [];
      let pages = 1;
      for (let n = 1; n <= pages; n++) {
        const got = await page(category, n);
        products.push(...got.products);
        pages = got.pages;
        await Bun.sleep(PAUSE_MS);
      }
      const record = { shop: "FairPrice", store: STORE, good, category, fetched: new Date().toISOString(), products };
      writeFileSync(file, Bun.gzipSync(JSON.stringify(record)));
      total += products.length;
      console.log(`${day} ${good} ${category}: ${products.length} products`);
    }
  }
  console.log(`saved ${total} products to ${dir}`);
}

if (import.meta.main) await main();

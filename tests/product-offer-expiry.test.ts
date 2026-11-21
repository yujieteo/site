import { expect, spyOn, test } from "bun:test";
import { lifeFigure, productRows, useLifeNotes } from "../src/kit/life.ts";
import type { Note } from "../src/notes.ts";

const RICE = "rice-thai-hom-mali-5-kg";
const PROMO = "FairPrice Thai Hom Mali Superior Fragrant Rice";
const ALTERNATIVE = "Double FP Thai Hom Mali Premium Quality Fragrant Rice";

const PROMO_URL = "https://www.fairprice.com.sg/product/fairprice-gold-thai-hom-malt-superior-fragrant-rice-5kg-13097848";
const ALTERNATIVE_URL = "https://www.fairprice.com.sg/product/double-fp-thai-hom-mali-premium-quality-fragrant-rice-5kg-13097846";

function offer(id: string, text: string, url: string, price: string, per: string, pack: string, until?: string): Note {
  return { id, text, points: 0, fields: { url, price, per, pack, shop: "FairPrice", date: "2026-11-12", ...(until ? { until } : {}) } };
}

const products = [
  offer(RICE, PROMO, PROMO_URL, "11.95", "2.39", "5 kg", "2026-11-19"),
  offer(RICE, ALTERNATIVE, ALTERNATIVE_URL, "14.10", "2.82", "5 kg"),
];
const checks: Note[] = [
  { id: `${RICE}-fairprice-thai-hom-mali-superior-fragrant-rice`, text: "Thai Hom Mali in the name", points: 0, fields: { verdict: "pass", url: PROMO_URL } },
  { id: `${RICE}-double-fp-thai-hom-mali-premium-quality-fragrant-rice`, text: "Thai Hom Mali in the name", points: 0, fields: { verdict: "pass", url: ALTERNATIVE_URL } },
];

function riceRows() {
  return productRows().filter((row) => row.id === RICE);
}

function summary(): string {
  return lifeFigure("fixture").match(/<summary class="life-row"><b>Rice: Thai hom mali, 5 kg[^]*?<\/summary>/)?.[0] ?? "";
}

test("headline and API switch picks after the final Singapore offer day without deleting the price", () => {
  const now = spyOn(Date, "now");
  try {
    now.mockReturnValue(Date.parse("2026-11-19T15:59:59.999Z"));
    useLifeNotes({ products, checks, advice: [] });
    const before = riceRows();
    expect(before.filter((row) => row.pick).map((row) => row.product)).toEqual([PROMO]);
    expect(summary()).toContain("S$2.39/kg");

    now.mockReturnValue(Date.parse("2026-11-19T16:00:00.000Z"));
    useLifeNotes({ products, checks, advice: [] });
    const after = riceRows();
    expect(after.filter((row) => row.pick).map((row) => row.product)).toEqual([ALTERNATIVE]);
    expect(summary()).toContain("S$2.82/kg");
    expect(summary()).not.toContain("S$2.39/kg");
    expect(lifeFigure("fixture").match(/<li class="life-row life-buy[^>]*>[^]*?FairPrice Thai Hom Mali Superior Fragrant Rice[^]*?<\/li>/)?.[0]?.includes("S$11.95 (till 19 Nov 2026)")).toBe(true);
    expect(after.map(({ pick, ...row }) => row)).toEqual(before.map(({ pick, ...row }) => row));
    expect(after.find((row) => row.product === PROMO)).toMatchObject({
      pick: false, until: "2026-11-19", price_low_sgd: 11.95,
    });

    // Of the rice products, make the expired FairPrice offer the only verified pass.
    useLifeNotes({
      products, advice: [],
      checks: checks.filter((note) => !note.id.startsWith(RICE) || note.id.includes("fairprice-thai-hom-mali-superior")),
    });
    expect(riceRows().filter((row) => row.pick)).toEqual([]);
    expect(summary()).toContain("all passing offers ended");
  } finally {
    now.mockRestore();
    useLifeNotes({ products: [], checks: [], advice: [] });
  }
});

test("a guide without a pass mark uses the lowest remaining price", () => {
  const now = spyOn(Date, "now");
  const items = [
    offer("canned-sardines", "Battle-Ship Sardines in Tomato Sauce",
      "https://www.fairprice.com.sg/product/battleship-sardines-in-tomato-sauce-425g-12156037", "1.48", "0.35", "425 g", "2026-11-19"),
  ];
  const sardineSummary = () => lifeFigure("fixture").match(/<summary class="life-row"><b>Canned sardines[^]*?<\/summary>/)?.[0] ?? "";
  try {
    now.mockReturnValue(Date.parse("2026-11-19T15:59:59.999Z"));
    useLifeNotes({ products: items, checks: [], advice: [] });
    expect(sardineSummary()).toContain("S$0.35/100 g");
    now.mockReturnValue(Date.parse("2026-11-19T16:00:00.000Z"));
    useLifeNotes({ products: items, checks: [], advice: [] });
    expect(sardineSummary()).toContain("S$0.89/100 g");
    expect(sardineSummary()).not.toContain("S$0.35/100 g");
  } finally {
    now.mockRestore();
    useLifeNotes({ products: [], checks: [], advice: [] });
  }
});

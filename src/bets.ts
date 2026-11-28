import type { Note } from "./notes.ts";
import { LIMITS } from "./kit/limits.ts";

// The bet ledger in notes/forecasts.tsv. scripts/bets/bets.py writes its lines from raw APIs. The build
// checks what one line cannot check alone, scores the settled bets against that day's market price, and
// writes api/bets.txt, which feed-update on the server turns into /forecasters.html each hour.

// The 40 people of the two rankings, by the names they give themselves there.
const PEOPLE: readonly string[] = [
  "stcredzero", "wmf", "gojomo", "adventured", "jonnathanson", "earl", "Zigurd", "gbog", "nostrademons", "potatolicious",
  "dasil003", "snowwrestler", "nl", "jsjenkins168", "Samuel_Michon", "bane", "bryanlarsen", "SwellJoe", "tptacek", "btilly",
  "Zvi", "gwern", "Daniel Kokotajlo", "Matthew Barnett", "Rohin Shah", "Richard_Kennaway", "paulfchristiano", "knb", "Costanza",
  "jsteinhardt", "Mati_Roy", "orthonormal", "Cthulhoo", "mfb", "JoshuaZ", "Liam Donovan", "Dagon", "Kevin", "TheRev", "AspiringKnitter",
];

// As in the frozen audit method: prices and stated chances are clipped, and a bet with no stated chance
// stakes half of the bankroll at the market price.
const CLIP = 0.01;
const STAKE = 0.5;

const clip = (x: number): number => Math.min(1 - CLIP, Math.max(CLIP, x));
const host = (url: string): string => new URL(url).host;
const time = (iso: string): number => Date.parse(iso);

export interface Bet {
  note: Note;
  factor: number | null;
  running: number;
  repeatOf: string | null;
  fermi: { text: string; url: string };
}

// How much a bettor's bankroll is multiplied by the outcome, against a bettor who takes the market price.
// Its expected value is 1 if the scoring price equals the conditional YES probability.
export function factor(f: Record<string, string>): number | null {
  if (f.outcome !== "yes" && f.outcome !== "no") return null;
  const q = clip(Number(f.price));
  const yes = f.outcome === "yes";
  if (f.p !== undefined) {
    const p = clip(Number(f.p));
    return yes ? p / q : (1 - p) / (1 - q);
  }
  const side = f.side === "yes" ? q : 1 - q;
  return (f.side === "yes") === yes ? 1 - STAKE + STAKE / side : 1 - STAKE;
}

function fermi(value: string): { text: string; url: string } {
  if (value === "none") return { text: "The claim implies no build rate or capacity that a physical limit bounds.", url: "" };
  const [key = "", amount = ""] = value.split(":");
  const limit = LIMITS[key];
  if (!limit) throw new Error(`notes/forecasts.tsv: no limit has the key ${key}`);
  const ratio = Number(amount) / limit.value;
  const times = ratio >= 10 ? ratio.toFixed(0) : ratio.toFixed(1);
  const verdict = ratio <= 1 ? "within the record" : `${times} times the record`;
  return { text: `Implies ${Number(amount).toLocaleString("en")} ${limit.unit}. The most so far: ${limit.value.toLocaleString("en")} (${limit.year}, ${limit.by}). ${verdict[0]?.toUpperCase()}${verdict.slice(1)}.`, url: limit.url };
}

// The checks across fields and lines. A bad line stops the build, as for every part.
export function checkBets(notes: Note[]): void {
  const byId = new Map(notes.map((note) => [note.id, note]));
  for (const note of notes) {
    const f = note.fields;
    const where = `notes/forecasts.tsv, bet ${note.id}`;
    const fail: (why: string) => never = (why) => { throw new Error(`${where}: ${why}`); };
    if (!PEOPLE.includes(f.by ?? "")) fail(`${f.by} is not one of the 40 people of the rankings`);
    for (const key of ["p", "price"] as const) {
      if (f[key] !== undefined && !(Number(f[key]) > 0 && Number(f[key]) < 1)) fail(`${key} must be between 0 and 1`);
    }
    const made = time(f.made ?? "");
    const day = (f.made ?? "").slice(0, 10);
    if (!(made < Date.now())) fail("made must be a past time");
    if (!(time(f.price_at ?? "") < Date.parse(day) + 86400000)) fail("price_at must be before the end of the day the bet was made");
    const target = (f.archive ?? "").replace(/^https:\/\/web\.archive\.org\/web\/\d{14}\//, "");
    const withoutScheme = (url: string) => url.replace(/^(?:https?:\/\/)?(?:www\.)?/, "");
    if (withoutScheme(target) !== withoutScheme(f.url ?? "")) fail("the archive snapshot must be of the url");
    if (f.edited && f.edited < day) fail("edited is before made");
    if (host(f.source ?? "") !== host(f.market ?? "")) fail("the source must come from the market");
    if (f.outcome === "open") {
      if (f.settled || f.evidence) fail("an open bet has no settled date and no evidence");
    } else {
      if (!f.settled || !f.evidence) fail("a settled bet needs settled and evidence");
      if (host(f.evidence) !== host(f.source ?? "")) fail("the evidence must come from the named source");
      if (f.settled < day) fail("settled is before made");
    }
    if (f.revises) {
      const old = byId.get(f.revises);
      if (!old || old.fields.by !== f.by || time(old.fields.made ?? "") >= made) fail("revises must name an earlier bet by the same person");
    }
    fermi(f.fermi ?? "");
  }
}

// Count the first occurrence of each author and exact recorded market URL, in posting order.
// Keep every row; a settled repeat uses a neutral multiplier rather than creating another stake.
export function scoreBets(notes: Note[]): Bet[] {
  const order = [...notes].sort((a, b) => (a.fields.made ?? "").localeCompare(b.fields.made ?? "") || a.id.localeCompare(b.id));
  const bank = new Map<string, number>();
  const marketsByPerson = new Map<string, Map<string, string>>();
  return order.map((note) => {
    const f = note.fields;
    const by = f.by ?? "";
    const market = f.market ?? "";
    const seen = marketsByPerson.get(by) ?? new Map<string, string>();
    const repeatOf = seen.get(market) ?? null;
    if (repeatOf === null) seen.set(market, note.id);
    marketsByPerson.set(by, seen);
    const raw = factor(f);
    const x = repeatOf !== null && raw !== null ? 1 : raw;
    const running = (bank.get(by) ?? 1) * (x ?? 1);
    bank.set(by, running);
    return { note, factor: x, running, repeatOf, fermi: fermi(f.fermi ?? "") };
  });
}

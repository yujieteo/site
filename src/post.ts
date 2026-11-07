import { readFileSync } from "node:fs";
import { FIGURE_KINDS, figureHtml } from "./figures.ts";

export interface Post {
  slug: string;
  title: string;
  date: string;
  draft: boolean;
  budgetKb: number;
  summary: string[];
  source: string;
}

export interface Heading {
  id: string;
  text: string;
}

const DEFAULT_BUDGET_KB = 80;
const WORDS_PER_MINUTE = 220;

export function parsePost(slug: string, raw: string): Post {
  const parts = raw.split("\n---\n");
  const head = (parts[0] ?? "").replace(/^---\n/, "");
  const post: Post = { slug, title: "", date: "", draft: false, budgetKb: DEFAULT_BUDGET_KB, summary: [], source: parts.slice(1).join("\n---\n").trim() };
  for (const line of head.split("\n")) {
    const at = line.indexOf(": ");
    const key = line.slice(0, at);
    const value = line.slice(at + 2).trim();
    if (key === "title") post.title = value;
    if (key === "date") post.date = value;
    if (key === "draft") post.draft = value === "true";
    if (key === "budget_kb") post.budgetKb = Number(value);
    if (key === "summary") post.summary.push(value);
  }
  if (post.title === "" || post.date === "" || post.summary.length === 0) throw new Error(`${slug}: a post needs title, date and summary`);
  return post;
}

export function readingMinutes(source: string): number {
  const words = source.split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function footnotes(source: string): { body: string; notes: Map<string, string> } {
  const notes = new Map<string, string>();
  const kept: string[] = [];
  for (const line of source.split("\n")) {
    const found = /^\[\^(\w+)\]:\s*(.+)$/.exec(line);
    if (found) notes.set(found[1] ?? "", found[2] ?? "");
    else kept.push(line);
  }
  return { body: kept.join("\n"), notes };
}

export function footnoteHtml(body: string, notes: Map<string, string>): string {
  let out = body;
  let number = 0;
  for (const [id, text] of notes) {
    number++;
    const html = `<span class="fn"><button class="fn-ref" type="button" aria-expanded="false" aria-controls="fn-${number}">${number}</button><span class="fn-note" id="fn-${number}" role="note">${text}</span></span>`;
    out = out.split(`[^${id}]`).join(html);
  }
  return out;
}

function parseAttributes(rest: string): Map<string, string> {
  const found = new Map<string, string>();
  for (const m of rest.matchAll(/(\w+)=(?:"([^"]*)"|(\S+))/g)) found.set(m[1] ?? "", m[2] ?? m[3] ?? "");
  return found;
}

export function figures(source: string, slug: string, dir: string): string {
  const out: string[] = [];
  let index = 0;
  for (const line of source.split("\n")) {
    if (!line.startsWith("::figure ")) {
      out.push(line);
      continue;
    }
    index++;
    const a = parseAttributes(line.slice(9));
    const kind = a.get("kind") ?? "";
    const alt = a.get("alt") ?? "";
    const caption = a.get("caption") ?? "";
    if (!FIGURE_KINDS.includes(kind)) throw new Error(`${slug}: figure ${index} has an unknown kind "${kind}"`);
    if (alt === "" || caption === "") throw new Error(`${slug}: figure ${index} needs alt text and a caption`);
    const src = a.get("src") ?? "";
    if (kind === "schematic" && !/^[\w-]+\.svg$/.test(src)) throw new Error(`${slug}: figure ${index} needs src=NAME.svg`);
    const svg = kind === "schematic" ? readFileSync(`${dir}/${slug}/${src}`, "utf8") : "";
    out.push(figureHtml(kind, `${slug}-${index}`, alt, caption, svg, a.get("wide") === "true", a.get("lazy") === "true"));
  }
  return out.join("\n");
}

export function figureKinds(source: string): string[] {
  const kinds: string[] = [];
  for (const line of source.split("\n")) {
    const a = line.startsWith("::figure ") ? parseAttributes(line.slice(9)) : undefined;
    const kind = a?.get("lazy") === "true" ? "" : (a?.get("kind") ?? "");
    if (kind !== "" && !kinds.includes(kind)) kinds.push(kind);
  }
  return kinds;
}

export function headings(html: string): Heading[] {
  const found: Heading[] = [];
  for (const m of html.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)) found.push({ id: m[1] ?? "", text: m[2] ?? "" });
  return found;
}

export function textVersion(post: Post): string {
  const lines = [`# ${post.title}`, "", post.date, ""];
  for (const item of post.summary) lines.push(`- ${item}`);
  lines.push("");
  for (const line of post.source.split("\n")) {
    const a = line.startsWith("::figure ") ? parseAttributes(line.slice(9)) : undefined;
    lines.push(a ? `Figure: ${a.get("caption") ?? ""} (Image: ${a.get("alt") ?? ""})` : line);
  }
  return `${lines.join("\n")}\n`;
}

import { existsSync } from "node:fs";
import { chromium } from "playwright-core";

export function browserPath(): string {
  const override = process.env["CHROMIUM"] ?? "";
  const path = override !== "" ? Bun.which(override) : Bun.which("chromium") ?? chromium.executablePath();
  if (path === null || !existsSync(path)) throw new Error("Chromium is missing. Run: bun install --frozen-lockfile && bunx playwright-core install chromium. Or set CHROMIUM to a browser path.");
  return path;
}

if (import.meta.main) console.log(browserPath());

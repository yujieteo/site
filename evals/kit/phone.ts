import { rmSync } from "node:fs";
import { close, evaluate, launch, open, phone, send, stage } from "./cdp.ts";

const WIDTHS = [320, 390];
const POSTS = ["snowmobile", "goosestrike", "theorems"];

async function script(): Promise<string> {
  const built = await Bun.build({ entrypoints: ["evals/kit/phone-page.ts"], target: "browser", format: "iife" });
  return (await built.outputs[0]?.text()) ?? "";
}

async function settle(b: Awaited<ReturnType<typeof launch>>, index: number): Promise<void> {
  await evaluate(b, `document.querySelectorAll('main.page figure')[${index}].scrollIntoView({block:'center'})`);
  for (let i = 0; i < 100; i++) {
    if (!(await evaluate(b, `document.querySelectorAll('main.page figure')[${index}].hasAttribute('data-lazy')`))) break;
    await Bun.sleep(50);
  }
  await Bun.sleep(120);
}

async function checkPost(b: Awaited<ReturnType<typeof launch>>, post: string, code: string, width: number): Promise<string[]> {
  await open(b, `/essays/${post}/`);
  await send(b, "Runtime.evaluate", { expression: code });
  const count = Number(await evaluate(b, "document.querySelectorAll('main.page figure').length"));
  const problems: string[] = [];
  for (let i = 0; i < count; i++) {
    await settle(b, i);
    const id = String(await evaluate(b, `document.querySelectorAll('main.page figure')[${i}].id`));
    const found = JSON.parse(String(await evaluate(b, `phoneCheck(${i})`))) as string[];
    for (const line of found) problems.push(`${post} ${id} at ${width}px: ${line}`);
  }
  return problems;
}

async function main(): Promise<void> {
  const built = Bun.argv[2] ?? "dist";
  const code = await script();
  const problems: string[] = [];
  for (const width of WIDTHS) {
    const copy = `${built}-phone-${width}`;
    rmSync(copy, { recursive: true, force: true });
    stage(built, copy);
    const b = await launch(`${copy}-profile`, copy);
    await phone(b, width, 800);
    for (const post of POSTS) problems.push(...(await checkPost(b, post, code, width)));
    close(b);
    rmSync(copy, { recursive: true, force: true });
    rmSync(`${copy}-profile`, { recursive: true, force: true });
  }
  for (const line of problems) console.log(line);
  console.log(problems.length === 0 ? "OK" : `${problems.length} problem(s)`);
}

await main();

import { createHash } from "node:crypto";

const scenario = process.env.VERIFY_TEST;
const payload = "matching asset";
const hash = createHash("sha256").update(payload).digest("hex");
const record = (path: string) => ({ path, sha256: hash, bytes: payload.length });

// Only the call is replaced, so the cast covers the other members of fetch, such as preconnect.
globalThis.fetch = (async (input: URL | RequestInfo) => {
  const { pathname } = new URL(String(input));
  if (pathname === "/api/manifest.json") return Response.json({
    built_at: "2026-11-20", commit: "abc1234", files: [record("/static.txt")],
  });
  if (pathname === "/static.txt") return new Response(payload);
  if (pathname === "/feeds-manifest.json") {
    if (scenario === "transport") throw new Error("fixture transport failed");
    if (scenario === "missing") return new Response("missing", { status: 404 });
    if (scenario === "unavailable") return new Response("unavailable", { status: 503 });
    if (scenario === "unauthorized") return new Response("unauthorized", { status: 401 });
    return Response.json({ built_at: "2026-11-20", files: [record("/live.txt")] });
  }
  if (pathname === "/live.txt") return new Response(payload);
  throw new Error(`unexpected test URL: ${pathname}`);
}) as typeof fetch;

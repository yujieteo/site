// Checks a deployed site against its own manifest: every file listed must be served with the bytes and
// SHA-256 the manifest gives. Then checks the live tables against /feeds-manifest.json where the server has
// one. Run: bun scripts/api/verify.ts [https://teoyujie.org]
// For the tables' types, also run: uvx --from 'frictionless==5.18.0' frictionless validate https://teoyujie.org/api/datapackage.json

import { createHash } from "node:crypto";

const base = (Bun.argv[2] ?? "https://teoyujie.org").replace(/\/$/, "");
const sha = (data: ArrayBuffer) => createHash("sha256").update(new Uint8Array(data)).digest("hex");

async function get(path: string, tries = 3): Promise<{ status: number; data: ArrayBuffer; headers: Headers }> {
  try {
    const res = await fetch(`${base}${path}`, { headers: { "user-agent": "teoyujie-manifest-check" } });
    return { status: res.status, data: await res.arrayBuffer(), headers: res.headers };
  } catch (error) {
    if (tries <= 1) throw error;
    await Bun.sleep(300);
    return get(path, tries - 1);
  }
}

interface FileEntry { path: string; bytes: number; sha256: string }
async function check(file: FileEntry): Promise<string | undefined> {
  const got = await get(file.path);
  if (got.status !== 200) return `${file.path}: HTTP ${got.status}`;
  if (got.data.byteLength !== file.bytes) return `${file.path}: ${got.data.byteLength} bytes, manifest says ${file.bytes}`;
  if (sha(got.data) !== file.sha256) return `${file.path}: SHA-256 differs from the manifest`;
}

const failures: string[] = [];
const manifest = await get("/api/manifest.json");
if (manifest.status !== 200) throw new Error(`/api/manifest.json returned ${manifest.status}`);
const { files, built_at, commit } = JSON.parse(new TextDecoder().decode(manifest.data)) as { files: FileEntry[]; built_at: string; commit: string };
console.log(`manifest: ${files.length} files, built ${built_at} from ${commit.slice(0, 7)}`);
console.log(`headers of /api/manifest.json: cache-control=${manifest.headers.get("cache-control")} last-modified=${manifest.headers.get("last-modified")} etag=${manifest.headers.get("etag")}`);

const queue = [...files];
await Promise.all(Array.from({ length: 6 }, async () => {
  for (let file = queue.shift(); file; file = queue.shift()) {
    const error = await check(file);
    if (error) failures.push(error);
  }
}));

const feedPath = "/feeds-manifest.json";
let feeds = await get(feedPath);
if (feeds.status === 404) console.log(`${feedPath}: HTTP 404; checked static files only`);
else {
  for (let attempt = 0; attempt < 2; attempt++) {
    if (feeds.status !== 200) {
      failures.push(`${feedPath}: HTTP ${feeds.status}`);
      break;
    }
    const live = JSON.parse(new TextDecoder().decode(feeds.data)) as { built_at: string; files: FileEntry[] };
    const errors: string[] = [];
    for (const file of live.files) {
      const error = await check(file);
      if (error) errors.push(error);
    }
    if (errors.length && attempt === 0) {
      const latest = await get(feedPath);
      if (latest.status === 200 && sha(latest.data) !== sha(feeds.data)) {
        feeds = latest;
        continue;
      }
    }
    failures.push(...errors);
    console.log(`feeds manifest: ${live.files.length} files, built ${live.built_at}`);
    break;
  }
}

for (const line of failures) console.log(`FAIL ${line}`);
console.log(failures.length === 0 ? `OK: every file matches` : `${failures.length} failure(s)`);
process.exit(failures.length === 0 ? 0 : 1);

// Source: https://github.com/lgwrightlab/schematic-figure (MIT), foundation/tools/lib/cdp.mjs
import { createServer } from 'node:http';
import type { IncomingMessage, Server, ServerResponse } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { once } from 'node:events';
import type { Bundle } from './cdp.ts';

const MIME: Record<string, string> = {
  '.js': 'text/javascript', '.mjs': 'text/javascript', '.html': 'text/html', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.otf': 'font/otf', '.ttf': 'font/ttf', '.woff2': 'font/woff2',
};
export const BUNDLE_URL = '/__bundle/';


export interface StaticServer {
  port: number;
  srv: Server;
}

interface Routes {
  root: string;
  proj: string | null;
  bundle: Bundle | null;
}

function resolveFile(routes: Routes, u: string): string | null {
  if (u.startsWith(BUNDLE_URL)) return join(routes.bundle?.dir ?? '', u.slice(BUNDLE_URL.length));
  let base = routes.root;
  const proj = routes.proj;
  const foundationOnly = u.startsWith('/engine/') || u.startsWith('/fonts/');
  if (proj !== null && !foundationOnly && existsSync(normalize(join(proj, u)))) base = proj;
  const f = normalize(join(base, u));
  return f.startsWith(base) ? f : null;
}

function handle(routes: Routes, req: IncomingMessage, res: ServerResponse): void {
  const u = decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname);
  const f = resolveFile(routes, u);
  if (f === null || !existsSync(f)) {
    res.writeHead(404);
    res.end();
    return;
  }
  res.writeHead(200, { 'content-type': MIME[extname(f)] ?? 'application/octet-stream', 'cache-control': 'no-store' });
  res.end(u === '/engine/page.html' ? pageHtml(routes, f) : readFileSync(f));
}

function pageHtml(routes: Routes, f: string): string {
  const b = routes.bundle;
  const html = readFileSync(f, 'utf8');
  if (b === null) return html;
  return html.replace(`${BUNDLE_URL}page.js`, `${BUNDLE_URL}${b.pageJs}`).replace(`${BUNDLE_URL}inpage.js`, `${BUNDLE_URL}${b.toolsJs}`);
}

export function serve(root: string, projectRoot: string | null, bundle: Bundle | null): Promise<StaticServer> {
  const routes: Routes = { root: resolve(root), proj: projectRoot === null ? null : resolve(projectRoot), bundle };
  return listen(createServer(handle.bind(null, routes)));
}

async function listen(srv: Server): Promise<StaticServer> {
  srv.listen(0, '127.0.0.1');
  await once(srv, 'listening');
  const a = srv.address();
  if (a === null || typeof a === 'string') throw new Error('server has no port');
  return { srv, port: a.port };
}

/*! Cross-origin isolation for /visuals/beamdswitch/ without server headers.
 * Adapted from coi-serviceworker v0.1.7 (Guido Zuidhof and contributors, MIT):
 * https://github.com/gzuidhof/coi-serviceworker
 *
 * The site's nginx sends no COOP/COEP headers, and it must not be reconfigured,
 * so ONNX Runtime's WASM would run on one thread. This file does two jobs:
 *
 * - In the page it registers itself as a service worker. Its scope is this
 *   directory, so it controls beamdswitch only and no other page on the site.
 *   The first visit reloads once so the worker controls the page.
 * - In the service worker it adds COOP same-origin and COEP require-corp to
 *   every same-origin response, which makes the page cross-origin isolated
 *   (SharedArrayBuffer, so WASM threads). It also gives .mjs files a
 *   JavaScript type and .wasm files application/wasm: nginx 1.22's mime.types
 *   has no .mjs entry, and browsers refuse to import a module served as
 *   application/octet-stream.
 *
 * Cross-origin requests are left alone; under require-corp the browser blocks
 * them, which suits a page that loads everything from this site.
 */
const TYPES = { '.mjs': 'text/javascript', '.wasm': 'application/wasm' };
const RELOADED = 'beamdswitch-coi-reload';

function isolate(response, url) {
  // Opaque and error responses cannot be rewritten.
  if (response.status === 0) return response;
  const headers = new Headers(response.headers);
  headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  const path = new URL(url).pathname;
  const type = Object.keys(TYPES).find(ext => path.endsWith(ext));
  if (type && response.ok) headers.set('Content-Type', TYPES[type]);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

if (typeof window === 'undefined') {
  self.addEventListener('install', () => self.skipWaiting());
  self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
  self.addEventListener('fetch', event => {
    const request = event.request;
    if (new URL(request.url).origin !== self.location.origin) return;
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;
    event.respondWith(fetch(request).then(response => isolate(response, request.url)));
  });
} else {
  (() => {
    const sw = navigator.serviceWorker;
    const store = {
      get() { try { return sessionStorage.getItem(RELOADED); } catch { return '1'; } },
      set(v) { try { v ? sessionStorage.setItem(RELOADED, '1') : sessionStorage.removeItem(RELOADED); } catch { /* storage blocked */ } },
    };
    if (window.crossOriginIsolated !== false) { store.set(false); return; }
    if (!window.isSecureContext || !sw) return;
    // Reload at most once per tab session, so a browser that ignores the
    // headers keeps the single-threaded page instead of reloading forever.
    const reload = () => { if (!store.get()) { store.set(true); location.reload(); } };
    sw.register(document.currentScript.src).then(registration => {
      if (sw.controller) return;
      sw.addEventListener('controllerchange', reload);
      // Active but not in control: a hard reload bypassed the worker.
      if (registration.active) reload();
    }, error => console.warn('beamdswitch: service worker not registered; WASM stays single-threaded', error));
  })();
}

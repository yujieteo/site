// The Marklove core: Goose compiled to WebAssembly. Each function writes its
// inputs (strings or bytes) into the core, calls one export, and copies the
// result out. See core/marklove.goose for the meaning of each call.

import createModule from "./marklove.js";

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const O_TAKAHASHI = 1, O_TOC = 2, O_NARRATION = 4, O_PUBLIC_NOTES = 8;
export const PAGE_SLIDES = 0, PAGE_ARTICLE = 1;
export const TEXT_ARTICLE_MD = 0, TEXT_REVISED_MD = 1, TEXT_NARRATION = 2,
    TEXT_TRANSCRIPT = 3, TEXT_VTT = 4, TEXT_SRT = 5;
export const LIST_LISTENER_MD = 0, LIST_PUBLIC_ASSETS = 1, LIST_PRIVATE_ASSETS = 2,
    LIST_REVISION_PROMPT = 3;

// The core keeps each value in a data stack of 8 MB with no guard page
// (see core/io.h), so a larger text could overwrite other data. A source
// of this size is far larger than a long talk or article. Each text input
// has this limit.
export const MAX_SOURCE_BYTES = 512 * 1024;
export class TooLarge extends Error {}

let M = null;
let wasm = null;

// The server sends .wasm as application/octet-stream, so give each module the bytes.
async function wasmBinary() {
    assert(typeof fetch === "function", "fetch exists");
    assert(wasm === null || typeof wasm.then === "function", "the cached binary is a promise");
    wasm ??= fetch(new URL("marklove.wasm", import.meta.url)).then((r) => {
        if (!r.ok) throw new Error("marklove.wasm: " + r.status);
        assert(typeof r.arrayBuffer === "function", "the response has bytes");
        return r.arrayBuffer();
    });
    return wasm;
}
let lenPtr = 0;

export async function load() {
    if (M) return;
    M = await createModule({ wasmBinary: await wasmBinary() });
    assert(typeof M._goose_init === "function", "the core exports goose_init");
    M._goose_init(0, 0);
    lenPtr = M._malloc(8);
    assert(lenPtr > 0, "the length cell is allocated");
}

function putOne(v) {
    assert(typeof v === "string" || v instanceof Uint8Array, "an input is a string or bytes");
    if (typeof v !== "string") return v;
    const b = encoder.encode(v);
    if (b.length > MAX_SOURCE_BYTES)
        throw new TooLarge("The text is larger than 512 KB.");
    return b;
}

function put(inputs, m = M) {
    assert(Array.isArray(inputs), "inputs are a list");
    assert(m !== null && typeof m._ml_in_alloc === "function", "the core is loaded");
    const all = inputs.map((v) => putOne(v));
    all.forEach((b, i) => {
        assert(b.length >= 0 && i >= 0, "an input has a length and a slot");
        const p = m._ml_in_alloc(i, b.length);
        assert(p >= 0, "the input slot is allocated");
        m.HEAPU8.set(b, p);
    });
}

function result(m, p, len) {
    assert(p >= 0 && len > 0, "the result and length pointers are set");
    assert(m.HEAPU8 instanceof Uint8Array, "the heap is bytes");
    const n = Number(new BigInt64Array(m.HEAPU8.buffer, len, 1)[0]);
    assert(n >= 0, "the result length is not negative");
    return m.HEAPU8.slice(p, p + n);
}

function bytes(name, inputs, ...ints) {
    assert(typeof name === "string" && name.startsWith("ml_"), "a core call has a name");
    assert(typeof M["_" + name] === "function", "the core exports the call");
    put(inputs);
    return result(M, M["_" + name](...ints, lenPtr), lenPtr);
}

// A second core for the page layouts (web/pages.js), so that the preview
// does not change its state. hooks go into the module (Module.mlMeasure).
// The result calls an export and gives the bytes of its result.
export async function instance(hooks) {
    assert(typeof hooks === "object" && hooks !== null, "hooks are an object");
    const m = await createModule({ ...hooks, wasmBinary: await wasmBinary() });
    m._goose_init(0, 0);
    const len = m._malloc(8);
    assert(len > 0, "the length cell is allocated");
    const call = (name, inputs, ...ints) => {
        assert(typeof name === "string" && Array.isArray(inputs), "a call has a name and inputs");
        assert(typeof m["_" + name] === "function", "the core exports the call");
        put(inputs, m);
        return result(m, m["_" + name](...ints, len), len);
    };
    return call;
}

function text(name, inputs, ...ints) {
    assert(typeof name === "string", "a call has a name");
    assert(Array.isArray(inputs), "inputs are a list");
    return decoder.decode(bytes(name, inputs, ...ints));
}
function json(name, inputs, ...ints) {
    assert(typeof name === "string", "a call has a name");
    assert(Array.isArray(inputs), "inputs are a list");
    return JSON.parse(text(name, inputs, ...ints));
}

function plain(name, inputs, ...ints) {
    assert(typeof name === "string" && name.startsWith("ml_"), "a core call has a name");
    assert(typeof M["_" + name] === "function", "the core exports the call");
    put(inputs);
    return M["_" + name](...ints);
}

function part(t) {
    const b = encoder.encode(t || "");
    assert(b instanceof Uint8Array, "a part is bytes");
    assert(b.length >= 0, "a part has a length");
    return b;
}

// A document: the source, the assets ({path: url}) and the page parts.
// The page parts come from the app, not from the user, so they go in as
// bytes, with no limit: the embedded fonts are larger than 512 KB.
export function docArgs(d) {
    assert(typeof d === "object" && d !== null, "a document is an object");
    if (encoder.encode(d.source).length > MAX_SOURCE_BYTES)
        throw new TooLarge("The Markdown file is larger than 512 KB. Split it into more projects.");
    const assets = Object.entries(d.assets || {}).map(([k, v]) => k + "\t" + v + "\n").join("");
    const args = [d.source, assets, part(d.fonts), part(d.style), part(d.script), d.appearance || ""];
    assert(args.length === 6, "a document has six parts");
    return args;
}

export function meta(source, key) {
    assert(typeof key === "string", "a meta key is text");
    const r = text("ml_meta", [...docArgs({ source }), key]);
    assert(typeof r === "string", "a meta value is text");
    return r;
}
export function page(d, kind, opts) {
    assert(kind === PAGE_SLIDES || kind === PAGE_ARTICLE, "a page kind is known");
    const r = text("ml_page", docArgs(d), kind, opts);
    assert(typeof r === "string", "a page is text");
    return r;
}
export function textOutput(d, kind, opts) {
    assert(kind >= TEXT_ARTICLE_MD && kind <= TEXT_SRT, "a text kind is known");
    const r = text("ml_text", docArgs(d), kind, opts);
    assert(typeof r === "string", "a text output is text");
    return r;
}
export function outline(d, opts) {
    const r = json("ml_outline", docArgs(d), opts);
    assert(r !== undefined, "an outline is returned");
    assert(typeof r === "object", "an outline is an object");
    return r;
}
// assets: {path: url}, as in page(). A path without an entry gives "missingImage".
export function lint(source, assets) {
    const r = json("ml_lint", docArgs({ source, assets }));
    assert(r !== undefined, "lint results are returned");
    assert(typeof r === "object", "lint results are an object");
    return r;
}
// Starts an EPUB in the ZIP builder. Returns the media paths that it links.
export function epub(d, date, opts) {
    const r = text("ml_epub", docArgs(d), date, opts).split("\n").filter(Boolean);
    assert(Array.isArray(r), "media paths are a list");
    assert(r.every((x) => x.length > 0), "media paths are not empty");
    return r;
}

export function listener(source, kind) {
    assert(kind >= LIST_LISTENER_MD && kind <= LIST_REVISION_PROMPT, "a listener kind is known");
    const t = text("ml_listener", docArgs({ source }), kind);
    assert(typeof t === "string", "a listener output is text");
    return kind === LIST_PUBLIC_ASSETS || kind === LIST_PRIVATE_ASSETS ? JSON.parse(t) : t;
}
export function authoringPrompt(draft) {
    assert(typeof draft === "string", "a draft is text");
    const r = text("ml_authoring_prompt", [draft]);
    assert(typeof r === "string", "a prompt is text");
    return r;
}
// The tour project: {name, markdown, assets: {project path: bundled file}}.
export function tour() {
    const r = json("ml_tour", []);
    assert(typeof r === "object" && r !== null, "the tour is an object");
    assert(typeof r.markdown === "string", "the tour has Markdown");
    return r;
}
// The equation at a UTF-16 offset: {latex, display, start, end} or null.
export function mathAt(t, offset) {
    assert(typeof t === "string", "the text is a string");
    assert(typeof offset === "number", "the offset is a number");
    const r = json("ml_math_at", [t], offset);
    assert(r === null || typeof r.latex === "string", "an equation has LaTeX");
    return r;
}
export function mathSpeech(latex) {
    assert(typeof latex === "string", "LaTeX is text");
    const r = text("ml_math_speech", [latex]);
    assert(typeof r === "string", "speech is text");
    return r;
}

export function math(latex, display) {
    assert(typeof latex === "string", "LaTeX is text");
    const r = text("ml_math", [latex], display ? 1 : 0);
    assert(typeof r === "string", "math output is text");
    return r;
}
export function mathCheck(latex) {
    assert(typeof latex === "string", "LaTeX is text");
    const r = text("ml_math_check", [latex]);
    assert(typeof r === "string", "a math check is text");
    return r;
}

export function themes() {
    const r = json("ml_theme_list", []);
    assert(Array.isArray(r), "themes are a list");
    assert(r.length > 0, "there is at least one theme");
    return r;
}
export function themeResolve(theme, accent) {
    const r = json("ml_theme_resolve", [theme, accent]);
    assert(typeof r === "object" && r !== null, "a resolved theme is an object");
    assert(!Array.isArray(r), "a resolved theme is not a list");
    return r;
}
export function themeCSS(theme, accent) {
    const r = text("ml_theme_css", [theme, accent]);
    assert(typeof r === "string", "theme CSS is text");
    assert(r.length >= 0, "theme CSS has a length");
    return r;
}
export function themePalette(theme, accent, dark, moreContrast) {
    const r = json("ml_theme_palette", [theme, accent], dark ? 1 : 0, moreContrast ? 1 : 0);
    assert(typeof r === "object" && r !== null, "a palette is an object");
    assert(!Array.isArray(r), "a palette is not a list");
    return r;
}
export function typography() {
    const r = json("ml_typography", []);
    assert(typeof r === "object" && r !== null, "typography is an object");
    assert(r.editor !== undefined, "typography has editor settings");
    return r;
}

export function highlightMarkdown(source) {
    assert(typeof source === "string", "the source is text");
    const r = json("ml_highlight_md", [source]);
    assert(Array.isArray(r), "highlights are a list");
    return r;
}

// Editing. The offsets are UTF-8 bytes: see utf8Offset and utf16Offset.
// syntax: "sam", "plain" or "vim" (the Find setting).
const SYNTAX = { sam: 0, plain: 1, vim: 2 };
export function find(t, pattern, syntax, ignoreCase) {
    assert(typeof t === "string", "the text is a string");
    assert(syntax in SYNTAX, "the syntax is known");
    const r = json("ml_find", [t, pattern], SYNTAX[syntax], ignoreCase ? 1 : 0);
    assert(r !== undefined, "the core gave a result");
    return r;
}
export function replace(t, pattern, replacement, syntax, ignoreCase, selS, selE, all) {
    assert(typeof t === "string", "the text is a string");
    assert(syntax in SYNTAX, "the syntax is known");
    const r = json("ml_replace", [t, pattern, replacement], SYNTAX[syntax], ignoreCase ? 1 : 0, selS, selE, all ? 1 : 0);
    assert(r !== undefined, "the core gave a result");
    return r;
}
export function sam(command, t, selS, selE, ignoreCase) {
    assert(typeof t === "string", "the text is a string");
    assert(selS >= 0 && selE >= 0, "the selection offsets are not negative");
    const r = json("ml_sam", [command, t], selS, selE, ignoreCase ? 1 : 0);
    assert(r !== undefined, "the core gave a result");
    return r;
}
export function diff(a, b) {
    assert(typeof a === "string" && typeof b === "string", "both sides are text");
    const r = json("ml_diff", [a, b]);
    assert(r !== undefined, "a diff is returned");
    return r;
}
export function commitMessage(a, b) {
    assert(typeof a === "string" && typeof b === "string", "both sides are text");
    const r = text("ml_commit_message", [a, b]);
    assert(typeof r === "string", "a message is text");
    return r;
}

export function vimReset() {
    const r = plain("ml_vim_reset", []);
    assert(r === undefined || typeof r === "number", "a reset gives nothing or a number");
    return r;
}
// The system clipboard text, for the "+ and "* registers.
export function vimClipboard(t) {
    assert(typeof t === "string", "the clipboard is text");
    const r = plain("ml_vim_clipboard", [t]);
    assert(r === undefined || typeof r === "number", "a clipboard call gives nothing or a number");
    return r;
}
export function vimKey(t, selS, selE, key) {
    assert(typeof t === "string", "the text is a string");
    assert(selS >= 0 && selE >= 0, "the selection offsets are not negative");
    const r = json("ml_vim_key", [t, key], selS, selE);
    assert(r !== undefined, "the core gave a result");
    return r;
}

// ZIP files. Times are Unix seconds. Large files (media) stay in
// JavaScript: zipAddBlob gives the parts to put into the final Blob.
export function zipBegin() {
    const r = plain("ml_zip_begin", []);
    assert(r === undefined || typeof r === "number", "a begin gives nothing or a number");
    return r;
}
export function zipAdd(name, data, mtime) {
    assert(typeof name === "string", "a name is text");
    assert(typeof mtime === "number", "a time is a number");
    const r = plain("ml_zip_add", [name, data], mtime);
    assert(r !== undefined, "the core gave a result");
    return r;
}
export function zipTake() {
    const r = bytes("ml_zip_take", []);
    assert(r instanceof Uint8Array, "a taken part is bytes");
    return r;
}
export function zipFinish() {
    const r = bytes("ml_zip_finish", []);
    assert(r instanceof Uint8Array, "the archive tail is bytes");
    return r;
}

const CHUNK = 1 << 20;

export async function crc32(blob) {
    assert(typeof blob.size === "number" && blob.size >= 0, "a blob has a size");
    assert(CHUNK > 0, "chunks have a size");
    let crc = 0;
    for (let i = 0; i < blob.size; i += CHUNK) {
        const part = new Uint8Array(await blob.slice(i, i + CHUNK).arrayBuffer());
        crc = plain("ml_crc32", [part], crc);
    }
    return crc;
}

// Adds a file whose bytes stay in a Blob. Returns the parts to append to
// the archive, or null when the name is not valid or already there.
export async function zipAddBlob(name, blob, mtime) {
    assert(typeof name === "string", "a name is text");
    assert(typeof blob.size === "number", "a blob has a size");
    const crc = await crc32(blob);
    const head = bytes("ml_zip_add_ref", [name], blob.size, crc, mtime);
    assert(head instanceof Uint8Array, "a header is bytes");
    return head.length ? [head, blob] : null;
}

async function inflated(data) {
    assert(typeof data.stream === "function", "a blob has a stream");
    assert(typeof DecompressionStream === "function", "inflating is supported");
    return new Response(data.stream().pipeThrough(new DecompressionStream("deflate-raw"))).blob();
}

async function packAssets(zipBlob, result) {
    assert(Array.isArray(result.assets), "a pack lists its assets");
    assert(Array.isArray(result.warnings), "a pack lists its warnings");
    const assets = {};
    for (const a of result.assets) {
        let data = zipBlob.slice(a.offset, a.offset + a.csize);
        if (a.method === 8) data = await inflated(data);
        if (data.size !== a.usize || (await crc32(data)) >>> 0 !== a.crc >>> 0) {
            result.warnings.push("Skipped " + a.path + ": the file is damaged.");
            continue;
        }
        assets[a.path] = data;
    }
    return assets;
}

// Reads a project ZIP: {markdownName, markdown, assets, warnings} with each
// asset as a Blob, or {error}.
export async function packImport(zipBlob) {
    assert(typeof zipBlob.arrayBuffer === "function", "a pack is a blob");
    assert(M !== null, "the core is loaded");
    const z = new Uint8Array(await zipBlob.arrayBuffer());
    const p = M._ml_in_alloc(0, z.length);
    M.HEAPU8.set(z, p);
    const r = M._ml_pack_import_arg(lenPtr);
    const n = Number(new BigInt64Array(M.HEAPU8.buffer, lenPtr, 1)[0]);
    const result = JSON.parse(decoder.decode(M.HEAPU8.slice(r, r + n)));
    M._ml_in_alloc(0, 0);
    assert(typeof result === "object" && result !== null, "a pack result is an object");
    if (result.error) return result;
    result.assets = await packAssets(zipBlob, result);
    return result;
}

// A Git history in the ZIP builder, oldest version first: gitBegin, then
// for each version gitFile or gitFileBlob for each file and gitCommit, then
// gitFinish. Call zipBegin first and zipTake after each commit.
export function gitBegin(name, email, mtime) {
    assert(typeof name === "string" && typeof email === "string", "the author is text");
    assert(typeof mtime === "number", "a time is a number");
    const r = plain("ml_git_begin", [name, email], mtime);
    assert(r !== undefined, "the core gave a result");
    return r;
}
export function gitFile(path, data) {
    assert(typeof path === "string", "a path is text");
    assert(data !== undefined && data !== null, "a file has data");
    const r = plain("ml_git_file", [path, data]);
    assert(typeof r === "number", "a file call gives a number");
    return r !== 0;
}
export function gitCommit(message, time, tzMinutes) {
    assert(typeof message === "string", "a message is text");
    assert(typeof time === "number" && typeof tzMinutes === "number", "a time and a zone are numbers");
    const r = text("ml_git_commit", [message], time, tzMinutes);
    assert(typeof r === "string", "a commit is text");
    return r;
}
export function gitFinish(mtime) {
    assert(typeof mtime === "number", "a time is a number");
    const r = plain("ml_git_finish", [], mtime);
    assert(r === undefined || typeof r === "number", "a finish gives nothing or a number");
    return r;
}

async function sha1Hex(raw) {
    assert(raw instanceof Blob, "the object is a blob");
    const sum = new Uint8Array(await crypto.subtle.digest("SHA-1", await raw.arrayBuffer()));
    assert(sum.length === 20, "a SHA-1 sum has 20 bytes");
    return [...sum].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// A large file in the history. Its blob object stays in JavaScript: the
// result is the archive parts of the object, or null when the history has
// the object already (seen holds the object names).
export async function gitFileBlob(path, blob, mtime, seen) {
    assert(typeof path === "string", "a path is text");
    assert(seen instanceof Set, "seen holds object names");
    const head = encoder.encode("blob " + blob.size + "\0");
    const raw = new Blob([head, blob]);
    const sha = await sha1Hex(raw);
    if (plain("ml_git_file_ref", [path, sha], blob.size) === 0) return null;
    if (seen.has(sha)) return null;
    seen.add(sha);
    const z = await new Response(raw.stream().pipeThrough(new CompressionStream("deflate"))).blob();
    return zipAddBlob(".git/objects/" + sha.slice(0, 2) + "/" + sha.slice(2), z, mtime);
}

// Offsets between a JavaScript string (UTF-16) and its UTF-8 bytes.
export function utf8Offset(s, u16) {
    assert(typeof s === "string", "the text is a string");
    assert(u16 >= 0, "the offset is not negative");
    return encoder.encode(s.slice(0, u16)).length;
}
export function utf16Offset(s, u8) {
    assert(typeof s === "string", "the text is a string");
    assert(u8 >= 0, "the offset is not negative");
    const b = encoder.encode(s);
    return decoder.decode(b.subarray(0, u8)).length;
}

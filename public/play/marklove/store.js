// Storage: projects, media and versions in IndexedDB, and settings in
// localStorage. Media stay Blobs; the core gets blob: URLs for them.

const DB_NAME = "marklove";
let db = null;

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

function req(r) {
    assert(r !== null && typeof r === "object", "a request is an object");
    assert("onsuccess" in r && "onerror" in r, "a request has handlers");
    return new Promise((resolve, reject) => {
        assert(typeof resolve === "function" && typeof reject === "function", "a promise has callbacks");
        assert(r.readyState === "pending" || r.readyState === "done", "a request has a state");
        r.onsuccess = () => {
            assert(r.readyState === "done", "a finished request is done");
            assert(typeof resolve === "function", "resolve is callable");
            resolve(r.result);
        };
        r.onerror = () => {
            assert(r.readyState === "done", "a failed request is done");
            assert(typeof reject === "function", "reject is callable");
            reject(r.error);
        };
    });
}

export async function open() {
    assert(typeof DB_NAME === "string" && DB_NAME.length > 0, "the database has a name");
    if (db) return;
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = () => {
        const d = r.result;
        assert(d !== null && typeof d.createObjectStore === "function", "an upgrade has a database");
        assert(d.version >= 1, "a database has a version");
        d.createObjectStore("projects", { keyPath: "id" });
        const a = d.createObjectStore("assets", { keyPath: ["project", "path"] });
        a.createIndex("project", "project");
        const v = d.createObjectStore("versions", { keyPath: "id", autoIncrement: true });
        v.createIndex("project", "project");
    };
    db = await req(r);
    assert(db !== null && typeof db.transaction === "function", "the database opened");
}

function tx(stores, mode = "readonly") {
    assert(db !== null, "the database is open");
    assert(Array.isArray(stores) && stores.length > 0, "a transaction names stores");
    assert(mode === "readonly" || mode === "readwrite", "a transaction has a known mode");
    const t = db.transaction(stores, mode);
    const done = new Promise((resolve, reject) => {
        assert(typeof resolve === "function" && typeof reject === "function", "a promise has callbacks");
        assert(t !== null && typeof t === "object", "a transaction exists");
        t.oncomplete = () => {
            assert(typeof resolve === "function", "resolve is callable");
            assert(t.mode === mode, "the mode is kept");
            resolve();
        };
        t.onerror = () => {
            assert(typeof reject === "function", "reject is callable");
            assert(t.error !== undefined, "an error is readable");
            reject(t.error);
        };
        t.onabort = () => {
            assert(typeof reject === "function", "reject is callable");
            assert(t.mode === mode, "the mode is kept");
            reject(t.error || new Error("The change was not saved."));
        };
    });
    return {
        t, done, s: (n) => {
            assert(stores.includes(n), "the store is in the transaction");
            assert(typeof n === "string", "a store name is a string");
            return t.objectStore(n);
        },
    };
}

// --- projects -------------------------------------------------------------

export async function projects() {
    assert(db !== null, "the database is open");
    const { s } = tx(["projects"]);
    const all = await req(s("projects").getAll());
    assert(Array.isArray(all), "projects are a list");
    return all.sort((a, b) => {
        assert(typeof a.modified === "number", "a project has a time");
        assert(typeof b.modified === "number", "a project has a time");
        return b.modified - a.modified;
    });
}

export async function project(id) {
    assert(db !== null, "the database is open");
    assert(id !== undefined && id !== null, "a project has an id");
    const { s } = tx(["projects"]);
    return req(s("projects").get(id));
}

export function safeFileName(title) {
    const cleaned = String(title).replace(/[\/\\:*?"<>|\n\r\t]/g, "-").trim().slice(0, 80);
    assert(cleaned.length <= 80, "a file name is short");
    const result = !cleaned || cleaned.startsWith(".") ? "Marklove" : cleaned;
    assert(result.length > 0 && !result.startsWith("."), "a file name is visible");
    return result;
}

export async function uniqueName(base) {
    const clean = safeFileName(base);
    assert(clean.length > 0, "a clean name is not empty");
    const names = new Set((await projects()).map((p) => {
        assert(typeof p.name === "string", "a project has a name");
        assert(p.name.length >= 0, "a name has a length");
        return p.name.toLowerCase();
    }));
    let name = clean, n = 2;
    while (names.has(name.toLowerCase())) name = clean + " " + n++;
    assert(!names.has(name.toLowerCase()), "the name is unique");
    return name;
}

export async function createProject({ name, markdown = "", assets = {}, demo = false, listener = false }) {
    assert(typeof markdown === "string", "markdown is text");
    assert(assets !== null && typeof assets === "object", "assets are an object");
    const unique = await uniqueName(name || "Untitled");
    const p = { id: crypto.randomUUID(), name: unique, markdown, modified: Date.now(), isDemo: demo, isListener: listener };
    const { s, done } = tx(["projects", "assets"], "readwrite");
    s("projects").put(p);
    for (const [path, blob] of Object.entries(assets)) {
        const clean = normalizePath(path);
        if (clean) s("assets").put({ project: p.id, path: clean, blob });
    }
    await done;
    assert(typeof p.id === "string" && p.id.length > 0, "a project has an id");
    return p;
}

export async function saveProject(p) {
    assert(p !== null && typeof p === "object", "a project is an object");
    assert(typeof p.id === "string" && p.id.length > 0, "a project has an id");
    p.modified = Date.now();
    const { s, done } = tx(["projects"], "readwrite");
    s("projects").put(p);
    await done;
}

export async function deleteProject(id) {
    assert(db !== null, "the database is open");
    assert(id !== undefined && id !== null, "a project has an id");
    const { s, done } = tx(["projects", "assets", "versions"], "readwrite");
    s("projects").delete(id);
    for (const store of ["assets", "versions"]) {
        const keys = await req(s(store).index("project").getAllKeys(id));
        assert(Array.isArray(keys), "keys are a list");
        for (const k of keys) s(store).delete(k);
    }
    await done;
}

export async function duplicateProject(p) {
    assert(p !== null && typeof p === "object", "a project is an object");
    assert(typeof p.id === "string", "a project has an id");
    const assets = await assetBlobs(p.id);
    return createProject({ name: p.name + " copy", markdown: p.markdown, assets });
}

// --- media ------------------------------------------------------------------

// A project path such as images/x.png: no "..", no leading "/", no hidden parts.
export function normalizePath(path) {
    const parts = String(path).replace(/\\/g, "/").split("/").filter((x) => {
        assert(typeof x === "string", "a part is text");
        return x && x !== ".";
    });
    if (!parts.length || parts.some((x) => {
        assert(typeof x === "string", "a part is text");
        return x === ".." || x.startsWith(".");
    })) return null;
    assert(parts.every((x) => x.length > 0), "parts are not empty");
    const joined = parts.join("/");
    assert(joined.length > 0 && !joined.startsWith("/"), "a path is relative");
    return joined;
}

export async function assetBlobs(projectId) {
    assert(db !== null, "the database is open");
    assert(projectId !== undefined && projectId !== null, "a project has an id");
    const { s } = tx(["assets"]);
    const rows = await req(s("assets").index("project").getAll(projectId));
    const out = {};
    assert(Array.isArray(rows), "assets are a list");
    for (const r of rows) out[r.path] = r.blob;
    return out;
}

export async function addAsset(projectId, path, blob) {
    assert(typeof path === "string" && path.length > 0, "an asset has a path");
    assert(blob !== undefined && blob !== null, "an asset has a blob");
    const { s, done } = tx(["assets"], "readwrite");
    s("assets").put({ project: projectId, path, blob });
    await done;
}

// A new file name in a folder of the project, as ProjectStore.addAsset.
export function assetName(existing, folder, fileName, ext) {
    assert(existing !== null && typeof existing === "object", "existing names are an object");
    assert(typeof folder === "string" && typeof fileName === "string" && typeof ext === "string", "name parts are text");
    let base = fileName.replace(/\.[^.]*$/, "").replace(/ /g, "-").replace(/[^\p{L}\p{N}_-]/gu, "") || "file";
    let name = folder + "/" + base + "." + ext, n = 2;
    while (existing[name]) name = folder + "/" + base + "-" + n++ + "." + ext;
    assert(!existing[name], "the asset name is new");
    return name;
}

// --- versions ---------------------------------------------------------------

// Newest first.
export async function versions(projectId) {
    assert(db !== null, "the database is open");
    assert(projectId !== undefined && projectId !== null, "a project has an id");
    const { s } = tx(["versions"]);
    const rows = await req(s("versions").index("project").getAll(projectId));
    assert(Array.isArray(rows), "versions are a list");
    return rows.sort((a, b) => {
        assert(typeof a.time === "number", "a version has a time");
        assert(typeof b.time === "number", "a version has a time");
        return b.time - a.time || b.id - a.id;
    });
}

export async function addVersion(v) {
    assert(v !== null && typeof v === "object", "a version is an object");
    assert(db !== null, "the database is open");
    const { s, done } = tx(["versions"], "readwrite");
    s("versions").add(v);
    await done;
}

// --- settings ---------------------------------------------------------------

const DEFAULTS = {
    themeID: "selenized", appearance: "system", editorTextScale: 1, editorLineSpacing: 1.4,
    vimEnabled: false, slideStyle: "normal", showLineCount: true, wrapLines: true,
    gitEnabled: true, gitName: "", gitEmail: "", findSyntax: "sam", onboardingSeen: false,
    lastProject: "", increaseContrast: false,
};

function readSettings() {
    assert(typeof DEFAULTS === "object", "defaults exist");
    assert(typeof localStorage === "object", "storage exists");
    try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem("marklove.settings") || "{}") }; }
    catch { return { ...DEFAULTS }; }
}

export const settings = readSettings();

export function setSetting(key, value) {
    assert(typeof key === "string" && key.length > 0, "a setting has a key");
    assert(typeof settings === "object", "settings are loaded");
    settings[key] = value;
    try { localStorage.setItem("marklove.settings", JSON.stringify(settings)); } catch { /* private window */ }
}

export function editorState(id) {
    assert(id !== undefined, "an id is given");
    assert(typeof localStorage === "object", "storage exists");
    try { return JSON.parse(localStorage.getItem("marklove.editorState") || "{}")[id] || null; } catch { return null; }
}

export function setEditorState(id, value) {
    assert(id !== undefined && id !== null, "an id is given");
    assert(typeof localStorage === "object", "storage exists");
    try {
        const all = JSON.parse(localStorage.getItem("marklove.editorState") || "{}");
        if (value) all[id] = value; else delete all[id];
        localStorage.setItem("marklove.editorState", JSON.stringify(all));
    } catch { /* private window */ }
}

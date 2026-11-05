// The Marklove web app: projects, the editor, Preview and the menus
// (RootView, EditorScreen, AppModel). The core does the Markdown work.

import * as C from "./core.js";
import * as S from "./store.js";
import * as E from "./editor.js";
import * as P from "./preview.js";
import * as F from "./find.js";
import * as X from "./export.js";
import * as UI from "./panels.js";
import { h, announce, attachMenu, closeMenu, alertBox, confirmBox, segmented, download, pickFile, copyText, isMac, cmdKey } from "./ui.js";

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

function $(id) {
    assert(typeof id === "string" && id.length > 0, "an element id is a non-empty string");
    const node = document.getElementById(id);
    assert(node !== null, "the page has the element " + id);
    return node;
}
const enc = new TextEncoder();

assert(typeof document.getElementById === "function", "the page has a document");
assert(typeof TextEncoder === "function", "the browser has a text encoder");
const state = {
    project: null, assets: {}, assetURLs: {}, list: [],
    mode: "edit", view: "slides", outline: [], previewOffset: 0, html: "",
    saveTimer: 0, idleTimer: 0, lastVersion: 0, focus: null, exportChoice: "all",
};
let frame = null;
assert(frame === null, "there is no preview frame before the start");
assert(enc instanceof TextEncoder, "the encoder is ready");

function readOnly() {
    assert(typeof state.project === "object", "the project slot is empty or an object");
    assert(state !== null && typeof state === "object", "the state exists");
    assert("project" in state, "the state has a project slot");
    return !!(state.project && state.project.isListener);
}

function tooLarge(t) {
    assert(t.length >= 0, "text has a length");
    assert(typeof t === "string", "the size check needs text");
    assert(Number.isFinite(C.MAX_SOURCE_BYTES) && C.MAX_SOURCE_BYTES > 0, "the source limit is a positive number");
    return enc.encode(t).length > C.MAX_SOURCE_BYTES;
}

function frontValue(source, key) {
    assert(key === key.toLowerCase(), "front matter keys are lower case");
    assert(source.length < 1e9, "the source is a sane size");
    assert(typeof source === "string", "frontValue needs text");
    assert(typeof key === "string" && key.length > 0, "frontValue needs a key");
    if (!source.startsWith("---")) return "";
    const end = source.indexOf("\n---", 3);
    if (end < 0) return "";
    const line = source.slice(0, end).split("\n").find((l) => l.toLowerCase().startsWith(key + ":"));
    return line ? line.slice(key.length + 1).trim().replace(/^["']|["']$/g, "") : "";
}
function docTitle() {
    assert(state.project === null || typeof state.project.name === "string", "a project has a name");
    assert(typeof frontValue === "function", "the front matter reader exists");
    const text = E.text();
    assert(typeof text === "string", "the editor text is a string");
    const title = frontValue(text, "title") || (state.project ? state.project.name : "Marklove");
    assert(typeof title === "string" && title.length > 0, "the title is not empty");
    return title;
}

// --- themes -------------------------------------------------------------------------

const darkQuery = matchMedia("(prefers-color-scheme: dark)");
const contrastQuery = matchMedia("(prefers-contrast: more)");

function applyTheme() {
    assert(typeof darkQuery.matches === "boolean", "the dark query answers");
    assert(typeof contrastQuery.matches === "boolean", "the contrast query answers");
    const themes = C.themes();
    assert(Array.isArray(themes) && themes.length > 0, "the core lists themes");
    const t = themes.find((x) => x.id === S.settings.themeID) || themes[0];
    assert(t && typeof t.id === "string", "a theme has an id");
    const a = S.settings.appearance;
    const dark = t.darkOnly || a === "dark" || (a === "system" && darkQuery.matches);
    const contrast = S.settings.increaseContrast || contrastQuery.matches;
    const p = C.themePalette(t.id, "", dark, contrast);
    assert(p && typeof p === "object", "the theme has a palette");
    assert(p.roles !== undefined, "the palette has roles");
    // The theme colors the document (the editor and the preview). The app chrome
    // keeps the light Kowalski look of /shared/kowalski.css.
    const s = $("workspace").style;
    for (const k of ["bg:background", "surface", "border", "dim", "text", "strong", "accent", "red", "green", "orange", "violet", "yellow"]) {
        const [v, key] = k.includes(":") ? k.split(":") : [k, k];
        s.setProperty("--" + v, p[key]);
    }
    s.colorScheme = dark ? "dark" : "light";
    document.documentElement.classList.toggle("contrast", contrast);
    E.setPalette(p.roles);
    assert(typeof s.colorScheme === "string", "the color scheme is set");
}

function applySettings(reset = false) {
    assert(typeof applyTheme === "function", "the theme can apply");
    assert(typeof E.setMetrics === "function", "the editor sets metrics");
    assert(typeof reset === "boolean", "reset is a flag");
    assert(S.settings !== null && typeof S.settings === "object", "settings are loaded");
    applyTheme();
    E.setMetrics({ scale: S.settings.editorTextScale, spacing: S.settings.editorLineSpacing, wrap: S.settings.wrapLines });
    const vim = S.settings.vimEnabled && !readOnly();
    if (E.editor.vim !== vim || reset) E.setVim(vim);
    if (vim && tooLarge(E.text())) E.vimInsert();
    updateStatus();
    assert(typeof vim === "boolean", "vim is on or off");
}
assert(typeof darkQuery.addEventListener === "function", "the dark query reports changes");
assert(typeof contrastQuery.addEventListener === "function", "the contrast query reports changes");
darkQuery.addEventListener("change", applyTheme);
contrastQuery.addEventListener("change", applyTheme);

// --- the status bar -------------------------------------------------------------------

function updateStatus() {
    assert(typeof E.lineStatus === "function", "the editor counts lines");
    assert(typeof E.vimModeName === "function", "the editor names vim modes");
    assert(E.editor !== null && typeof E.editor === "object", "the editor exists");
    assert(typeof S.settings.showLineCount === "boolean" || S.settings.showLineCount === undefined, "the line count setting is a flag");
    const vim = E.editor.vim;
    $("vim-mode").hidden = !vim;
    $("vim-mode").textContent = vim ? E.vimModeName(E.editor.vimMode) : "";
    $("vim-line").textContent = vim ? E.editor.vimStatus : "";
    const ls = $("line-status");
    ls.hidden = !S.settings.showLineCount;
    if (S.settings.showLineCount) {
        const s = E.lineStatus();
        ls.textContent = `Line ${s.line} of ${s.lines} · Words: ${s.words}`;
    }
    $("statusbar").hidden = !vim && !S.settings.showLineCount;
    assert(typeof $("statusbar").hidden === "boolean", "the status bar is shown or hidden");
}

// --- banners ---------------------------------------------------------------------------

function renderBanners() {
    assert(typeof tooLarge === "function", "size can be checked");
    assert(typeof h === "function", "elements can be made");
    assert(state.focus === null || typeof state.focus === "object", "the focus is empty or an object");
    const box = $("banners");
    box.replaceChildren();
    assert(box.childElementCount === 0, "the banners start empty");
    if (readOnly()) {
        box.append(h("div", { class: "banner", role: "status" }, h("span", { "aria-hidden": "true" }, "👥"),
            h("span", { class: "msg" }, h("strong", { text: "Received presentation" }), h("span", { class: "detail", text: "This presentation opens view only. Select Present to show it." }))));
    }
    if (tooLarge(E.text())) {
        box.append(h("div", { class: "banner", role: "alert" }, h("span", { class: "warn", "aria-hidden": "true" }, "⚠"),
            h("span", { class: "msg" }, h("strong", { text: "The Markdown file is larger than 512 KB." }), h("span", { class: "detail", text: "Preview, checks, and export stop at this size. Split the text into more projects." }))));
    }
    const f = state.focus;
    if (f) {
        box.append(h("div", { class: "banner", role: "region", "aria-label": "Source issue" },
            h("span", { class: "warn", "aria-hidden": "true" }, "⚠"),
            h("span", { class: "msg" }, h("strong", { text: f.message || "Source passage" }), f.detail ? h("span", { class: "detail", text: f.detail }) : null),
            f.returnToExport ? h("button", { type: "button", class: "button", onclick: () => { state.focus = null; renderBanners(); openExport(); } }, "Back to Export") : null,
            h("button", { type: "button", class: "iconbtn", "aria-label": "Close the explanation", title: "Close the explanation", onclick: () => { state.focus = null; renderBanners(); E.focus(); } }, "✕")));
    }
    assert(box.childElementCount <= 3, "there are at most three banners");
}

// --- projects ---------------------------------------------------------------------------

async function refreshList() {
    assert(typeof S.projects === "function", "the store lists projects");
    assert(Array.isArray(state.list), "the list is an array");
    const list = await S.projects();
    assert(Array.isArray(list), "the store lists projects in an array");
    state.list = list;
    assert(state.list.length === list.length, "the list is kept");
}

function urlsFor(assets) {
    assert(typeof URL.createObjectURL === "function", "the browser makes object URLs");
    assert(typeof URL.revokeObjectURL === "function", "the browser frees object URLs");
    assert(assets !== null && typeof assets === "object", "assets are an object");
    assert(typeof state.assetURLs === "object", "the old URLs are an object");
    for (const u of Object.values(state.assetURLs)) URL.revokeObjectURL(u);
    const out = {};
    for (const [p, b] of Object.entries(assets)) out[p] = URL.createObjectURL(b);
    assert(Object.keys(out).length === Object.keys(assets).length, "every asset has a URL");
    return out;
}

async function openProject(id, { preview = false } = {}) {
    assert(typeof S.project === "function", "the store opens projects");
    assert(typeof refreshList === "function", "the list can refresh");
    assert(typeof id === "string" && id.length > 0, "a project id is a string");
    assert(typeof preview === "boolean", "preview is a flag");
    if (state.project && state.project.id !== id) { await flushSave(); await saveVersion({ auto: true }); saveEditorState(); }
    const p = await S.project(id);
    if (!p) return;
    assert(p.id === id, "the store returned the project that was asked for");
    assert(typeof p.markdown === "string", "a project has Markdown");
    state.project = p;
    state.assets = await S.assetBlobs(id);
    state.assetURLs = urlsFor(state.assets);
    state.focus = null;
    state.lastVersion = 0;
    S.setSetting("lastProject", id);
    E.editor.readOnly = readOnly();
    $("source").readOnly = readOnly();
    E.setText(p.markdown);
    updatePlaceholder();
    $("title-text").textContent = p.name;
    $("title-menu").setAttribute("aria-label", "Project: " + p.name);
    $("title-menu").title = p.name;
    document.title = p.name + " – Marklove";
    restoreEditorState();
    applySettings(true);
    renderBanners();
    if (F.find.open) F.refresh();
    await refreshList();
    if (preview || readOnly()) showPreview(); else showEdit(false);
    assert(state.project !== null, "a project is open");
}

function saveEditorState() {
    assert(typeof $("source").scrollTop === "number", "the editor scrolls");
    assert(typeof S.setEditorState === "function", "the store keeps editor states");
    assert(state !== null, "the state exists");
    if (!state.project) return;
    const [s, e] = E.selection();
    assert(Number.isInteger(s) && Number.isInteger(e), "the selection is two integers");
    S.setEditorState(state.project.id, { s, e, top: $("source").scrollTop });
}

function restoreEditorState() {
    assert(typeof S.editorState === "function", "the store reads editor states");
    assert(typeof E.setSelection === "function", "the editor sets a selection");
    assert(state.project !== null, "a project is open");
    assert(typeof state.project.id === "string", "the project has an id");
    const st = S.editorState(state.project.id);
    if (st) { E.setSelection(st.s, st.e, false); $("source").scrollTop = st.top || 0; $("highlight").scrollTop = st.top || 0; }
}

function updatePlaceholder() {
    assert(typeof E.text === "function", "the editor gives its text");
    assert($("placeholder") !== null, "the placeholder exists");
    const text = E.text();
    assert(typeof text === "string", "the editor text is a string");
    $("placeholder").hidden = text.length > 0;
    assert($("placeholder").hidden === (text.length > 0), "the placeholder follows the text");
}

async function newProject() {
    assert(typeof firstVersion === "function", "first versions exist");
    assert(typeof openProject === "function", "projects open");
    assert(typeof S.createProject === "function", "the store creates projects");
    const p = await S.createProject({ name: "Untitled", markdown: "" });
    await firstVersion(p, `Create project “${p.name}”`);
    assert(typeof p.id === "string", "the new project has an id");
    await openProject(p.id);
    E.focus();
}

async function firstVersion(p, message) {
    assert(typeof S.addVersion === "function", "the store adds versions");
    assert(typeof S.assetBlobs === "function", "the store reads assets");
    assert(p && typeof p.id === "string", "a project has an id");
    assert(typeof message === "string" && message.length > 0, "a version has a message");
    if (!S.settings.gitEnabled || tooLarge(p.markdown)) return;
    const assets = await S.assetBlobs(p.id);
    assert(assets !== null && typeof assets === "object", "assets are an object");
    await S.addVersion({ project: p.id, time: Date.now(), message, markdown: p.markdown, assets: Object.keys(assets) });
}

async function openTour() {
    assert(typeof S.createProject === "function", "the store creates projects");
    assert(typeof firstVersion === "function", "first versions exist");
    assert(typeof C.tour === "function", "the core has a tour");
    const existing = (await S.projects()).find((p) => p.isDemo);
    if (existing) { await openProject(existing.id); return; }
    const t = C.tour();
    assert(t && typeof t.name === "string" && typeof t.markdown === "string", "the tour has a name and Markdown");
    assert(t.assets !== null && typeof t.assets === "object", "the tour has assets");
    const assets = {};
    for (const [path, file] of Object.entries(t.assets)) {
        try { const r = await fetch(file); if (r.ok) assets[path] = await r.blob(); } catch { /* offline */ }
    }
    const p = await S.createProject({ name: t.name, markdown: t.markdown, assets, demo: true });
    assert(p.isDemo === true, "the tour project is a demo");
    await firstVersion(p, `Create project “${p.name}”`);
    await openProject(p.id);
}

function nameFromMarkdown(md, fallback) {
    assert(typeof frontValue === "function", "front matter can be read");
    assert(fallback.length >= 0, "the fallback has a length");
    assert(typeof md === "string", "the Markdown is a string");
    assert(typeof fallback === "string", "the fallback name is a string");
    return frontValue(md, "title") || fallback.replace(/\.(md|markdown|txt|zip)$/i, "") || "Imported";
}

async function importFiles() {
    assert(typeof pickFile === "function", "files can be picked");
    assert(typeof C.packImport === "function", "the core imports ZIP files");
    const files = await pickFile(".md,.markdown,.txt,.zip,text/markdown,text/plain,application/zip", true);
    assert(files !== null && typeof files[Symbol.iterator] === "function", "the picker returns files");
    let last = null;
    for (const f of files) {
        try {
            if (/\.zip$/i.test(f.name) || f.type === "application/zip") {
                const r = await C.packImport(f);
                if (r.error) { await alertBox(`Marklove could not import “${f.name}”. ${r.error}`); continue; }
                const listener = frontValue(r.markdown, "marklove") === "listener";
                const name = (r.markdownName || f.name).replace(/\.(md|markdown|txt)$/i, "");
                const p = await S.createProject({ name, markdown: r.markdown, assets: r.assets, listener });
                if (!listener) await firstVersion(p, `Import project “${p.name}”`);
                if (r.warnings && r.warnings.length) await alertBox(r.warnings.join("\n"), "Imported with warnings");
                last = p;
            } else {
                const md = (await f.text()).replace(/\r\n?/g, "\n");
                if (tooLarge(md)) { await alertBox(`“${f.name}” is larger than 512 KB. Split it into more files, and import each file.`); continue; }
                const p = await S.createProject({ name: nameFromMarkdown(md, f.name), markdown: md });
                await firstVersion(p, `Import project “${p.name}”`);
                last = p;
            }
        } catch (e) { await alertBox(`Marklove could not import “${f.name}”. ${e.message}`); }
    }
    assert(last === null || typeof last.id === "string", "the last import has an id");
    if (last) { await openProject(last.id); announce(`Imported “${last.name}”.`); }
}

async function deleteProject(p) {
    assert(typeof confirmBox === "function", "choices can be asked");
    assert(typeof saveZipCopy === "function", "ZIP copies can be saved");
    assert(p && typeof p.id === "string", "a project has an id");
    assert(typeof p.name === "string", "a project has a name");
    const choice = await confirmBox({
        title: `Delete “${p.name}”?`,
        message: "This deletes the project, its images and media, and its version history from this browser. You cannot undo this.",
        choices: [{ label: "Save a ZIP Copy First", value: "zip" }, { label: "Delete Project", value: "delete", danger: true }],
    });
    if (!choice) return false;
    if (choice === "zip") { await saveZipCopy(p); return false; }
    assert(choice === "delete", "the only other choice is to delete");
    await S.deleteProject(p.id);
    S.setEditorState(p.id, null);
    await refreshList();
    if (state.project && state.project.id === p.id) {
        state.project = null;
        const next = state.list.find((x) => !x.isListener) || state.list[0];
        if (next) await openProject(next.id); else await newProject();
    }
    announce(`Deleted “${p.name}”.`);
    return true;
}

async function saveZipCopy(p = state.project) {
    assert(typeof X.projectZip === "function", "the export makes ZIP files");
    assert(typeof download === "function", "files can be downloaded");
    assert(p && typeof p.id === "string", "a project to copy is open");
    assert(state.project !== null, "a project is open");
    if (p.id === state.project.id) await flushSave();
    const proj = await S.project(p.id);
    assert(proj && typeof proj.markdown === "string", "the project is in the store");
    const ctx = { name: proj.name, source: proj.markdown, assets: await S.assetBlobs(p.id), gitName: gitName(proj.markdown), gitEmail: S.settings.gitEmail };
    const blob = await X.projectZip(ctx, S.settings.gitEnabled ? await S.versions(p.id) : []);
    assert(blob !== null && typeof blob === "object", "the ZIP is a blob");
    download(blob, S.safeFileName(proj.name) + ".zip");
}

async function rename(name) {
    assert(typeof S.saveProject === "function", "the store saves projects");
    assert(Array.isArray(state.list), "the project list is an array");
    assert(typeof name === "string", "a name is a string");
    assert(state.project !== null, "a project is open");
    const p = state.project;
    if (name === p.name) return;
    const others = new Set(state.list.filter((x) => x.id !== p.id).map((x) => x.name.toLowerCase()));
    let n = S.safeFileName(name), i = 2;
    const base = n;
    while (others.has(n.toLowerCase())) n = base + " " + i++;
    assert(n.length > 0, "the new name is not empty");
    p.name = n;
    await S.saveProject(p);
    $("title-text").textContent = n;
    $("title-menu").setAttribute("aria-label", "Project: " + n);
    $("title-menu").title = n;
    document.title = n + " – Marklove";
    await refreshList();
}

async function duplicate() {
    assert(typeof S.duplicateProject === "function", "the store duplicates projects");
    assert(typeof state.project.name === "string", "the project has a name");
    assert(state.project !== null, "a project is open");
    await flushSave();
    const p = await S.duplicateProject(state.project);
    assert(p && p.id !== state.project.id, "the copy is a new project");
    await firstVersion(p, `Create project “${p.name}”`);
    await openProject(p.id);
}

// --- saving and versions -------------------------------------------------------------------

function textChanged() {
    assert(typeof F.textChanged === "function", "Find hears text changes");
    assert(typeof flushSave === "function", "text can be saved");
    assert(E.editor !== null, "the editor exists");
    assert(typeof state.saveTimer !== "undefined", "the save timer slot exists");
    updatePlaceholder();
    updateStatus();
    F.textChanged();
    if (state.focus) { state.focus = null; renderBanners(); }
    clearTimeout(state.saveTimer);
    state.saveTimer = setTimeout(flushSave, 500);
    clearTimeout(state.idleTimer);
    state.idleTimer = setTimeout(autoVersion, 30000);
    if (state.mode === "preview") schedulePreview();
    const big = tooLarge(E.text());
    if (big) E.vimInsert();
    if (big !== state.wasLarge) { state.wasLarge = big; renderBanners(); }
    updateEquation();
    assert(typeof big === "boolean", "the size check gives a flag");
}

async function flushSave() {
    assert(typeof S.saveProject === "function", "the store saves projects");
    assert(typeof state.saveTimer !== "undefined", "the save timer slot exists");
    assert(state !== null, "the state exists");
    assert(typeof E.text === "function", "the editor gives its text");
    clearTimeout(state.saveTimer);
    const p = state.project;
    if (!p || readOnly()) return;
    const t = E.text();
    assert(typeof t === "string", "the editor text is a string");
    if (p.markdown === t) return;
    p.markdown = t;
    try { await S.saveProject(p); }
    catch (e) { announce("Marklove could not save the change. " + e.message); }
}

// VersionHistory: after a pause of 30 seconds, at most once in two minutes.
function autoVersion() {
    assert(typeof saveVersion === "function", "versions can be saved");
    assert(typeof state.idleTimer !== "undefined", "the idle timer slot exists");
    assert(Number.isFinite(state.lastVersion), "the last version time is a number");
    const wait = state.lastVersion + 120000 - Date.now();
    assert(Number.isFinite(wait), "the wait is a number");
    if (wait > 0) { state.idleTimer = setTimeout(autoVersion, wait); return; }
    saveVersion({ auto: true });
}

function gitName(md) {
    assert(S.settings.gitName === undefined || typeof S.settings.gitName === "string", "the git name is text");
    assert(md.length >= 0, "the Markdown has a length");
    assert(typeof md === "string", "the Markdown is a string");
    const name = S.settings.gitName || frontValue(md, "author") || "Marklove";
    assert(typeof name === "string" && name.length > 0, "the git name is not empty");
    return name;
}

async function saveVersion({ explicit = false, message = "" } = {}) {
    assert(typeof S.addVersion === "function", "the store adds versions");
    assert(typeof C.commitMessage === "function", "the core writes commit messages");
    assert(typeof explicit === "boolean", "explicit is a flag");
    assert(typeof message === "string", "the message is a string");
    const p = state.project;
    if (!p || readOnly()) return false;
    await flushSave();
    if (!S.settings.gitEnabled) { if (explicit) announce("Saved. Versions are off in Settings."); return false; }
    if (tooLarge(p.markdown)) { if (explicit) announce("The Markdown file is larger than 512 KB. Split it into more projects."); return false; }
    const all = await S.versions(p.id);
    assert(Array.isArray(all), "versions come in an array");
    const last = all[0];
    const paths = Object.keys(state.assets).sort();
    const same = last && last.markdown === p.markdown && (last.assets || []).slice().sort().join("\n") === paths.join("\n");
    if (same && !message) { if (explicit) announce("Saved. No changes since the last version."); return false; }
    let msg = message;
    if (!msg) {
        try { msg = C.commitMessage(last ? last.markdown : "", p.markdown); }
        catch { msg = ""; }
        if (!msg.trim()) msg = last ? `Change “${p.name}”` : `Create project “${p.name}”`;
    }
    assert(msg.trim().length > 0, "the version message is not empty");
    await S.addVersion({ project: p.id, time: Date.now(), message: msg, markdown: p.markdown, assets: paths });
    state.lastVersion = Date.now();
    clearTimeout(state.idleTimer);
    if (explicit) announce("Saved a version: " + msg.split("\n")[0]);
    return true;
}

async function restoreVersion(v) {
    assert(state.project !== null, "a project is open");
    assert(typeof saveVersion === "function", "versions can be saved");
    assert(v && typeof v.markdown === "string", "a version has Markdown");
    assert(Number.isFinite(v.time), "a version has a time");
    if (tooLarge(E.text())) {
        await alertBox("The text is larger than 512 KB, so Marklove cannot keep it as a version. Make it shorter before you restore an older version.");
        return;
    }
    if (!(await saveVersion({ auto: true }))) {
        const last = (await S.versions(state.project.id))[0];
        if (!last || last.markdown !== E.text()) {
            await alertBox("Marklove cannot keep the current text as a version. Turn on versions in Settings before you restore an older version.");
            return;
        }
    }
    E.replaceAll(v.markdown);
    await flushSave();
    const date = new Date(v.time).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    await saveVersion({ message: `Restore the version from ${date}` });
    announce("Restored the version from " + date);
}

// :q! goes back to the last version.
async function discardToLastVersion() {
    assert(typeof S.versions === "function", "the store lists versions");
    assert(typeof E.replaceAll === "function", "the editor replaces its text");
    assert(state.project !== null, "a project is open");
    const last = (await S.versions(state.project.id))[0];
    if (!last) { announce("No version to go back to."); return; }
    assert(typeof last.markdown === "string", "a version has Markdown");
    E.replaceAll(last.markdown);
    announce("Went back to the last version.");
}

// --- media -----------------------------------------------------------------------------------

// ImageFit: a long edge of at most 2560 pixels and at most 3 MB.
async function fitImage(file) {
    assert(typeof createImageBitmap === "function", "the browser decodes images");
    assert(file.size >= 0, "a file has a size");
    assert(file && typeof file.name === "string", "an image file has a name");
    assert(Number.isFinite(file.size), "an image file has a size");
    let bmp;
    try { bmp = await createImageBitmap(file); } catch { return { blob: file, ext: (file.name.split(".").pop() || "png").toLowerCase() }; }
    const long = Math.max(bmp.width, bmp.height);
    const ext = (file.name.split(".").pop() || "").toLowerCase();
    if (long <= 2560 && file.size <= 3 * 1024 * 1024 && ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) return { blob: file, ext: ext === "jpeg" ? "jpg" : ext };
    const scale = Math.min(1, 2560 / long);
    assert(scale > 0 && scale <= 1, "the scale shrinks and never grows");
    assert(long > 0, "the image has a size");
    const c = document.createElement("canvas");
    c.width = Math.round(bmp.width * scale);
    c.height = Math.round(bmp.height * scale);
    const g = c.getContext("2d");
    g.fillStyle = "#fff";
    g.fillRect(0, 0, c.width, c.height);
    g.drawImage(bmp, 0, 0, c.width, c.height);
    const blob = await new Promise((r) => c.toBlob(r, "image/jpeg", 0.85));
    assert(c.width > 0 && c.height > 0, "the picture has a size");
    return { blob, ext: "jpg" };
}

async function addMedia(kind) {
    assert(typeof pickFile === "function", "files can be picked");
    assert(typeof fitImage === "function", "images can be fitted");
    assert(kind === "image" || kind === "video" || kind === "any", "the media kind is known");
    assert(state.project !== null, "a project is open");
    if (readOnly()) return;
    const accept = kind === "image" ? "image/*" : kind === "video" ? "video/*" : "image/*,video/*";
    const [file] = await pickFile(accept);
    if (!file) return;
    const video = file.type.startsWith("video/");
    const folder = kind === "image" ? "images" : "media";
    assert(file.name.length >= 0, "the file has a name");
    const fitted = video ? { blob: file, ext: (file.name.split(".").pop() || "mp4").toLowerCase() } : await fitImage(file);
    const path = S.assetName(state.assets, folder, file.name, fitted.ext);
    assert(typeof path === "string" && path.startsWith(folder), "the asset path is in its folder");
    await S.addAsset(state.project.id, path, fitted.blob);
    state.assets[path] = fitted.blob;
    state.assetURLs[path] = URL.createObjectURL(fitted.blob);
    E.insert(E.snippet(`![⟦Describe the ${video ? "video" : "image"}⟧](${path})`));
}

// --- Insert ------------------------------------------------------------------------------------

const SNIPPETS = {
    slide: ["Slide", "## ⟦Slide title⟧\n"], section: ["Section", "# ⟦Section title⟧\n"], pause: ["Pause (Reveal)", ". . .\n\n⟦Next part⟧"],
    notes: ["Speaker Notes", "::: notes\n⟦Notes for the presenter only.⟧\n:::"],
    narration: ["Narration", "::: narration\n⟦The words that narration speaks for this slide.⟧\n:::"],
    explanation: ["Spoken Explanation", "::: explain\n⟦Explain the equation or picture above in words.⟧\n:::"],
    publicNotes: ["Notes for Listeners", "::: public-notes\n⟦Notes for listeners and the handout.⟧\n:::"],
    inlineMath: ["Inline Math", "$⟦x^2⟧$", false], displayMath: ["Equation", "$$\n⟦E = mc^2⟧\n$$"],
    equationSteps: ["Equation Steps", "::: morph\n$$⟦a = b + c⟧$$\n$$a - c = b$$\n:::"],
    table: ["Table", "| ⟦Heading⟧ | Heading |\n| --- | --- |\n| Cell | Cell |\n| Cell | Cell |"],
    chart: ["Bar Chart from Table", "::: chart bar\n| ⟦Label⟧ | Value |\n| --- | ---: |\n| A | 1 |\n| B | 2 |\n:::"],
    plot: ["Plot with Slider", "::: plot\nx: 0, 6.28\nxlabel: x\nylabel: y\nslider: k, 0.5, 3, 1, Frequency\ny = ⟦sin(k*x)⟧\n:::"],
    codeBlock: ["Code Block", "```swift\n⟦code⟧\n```"],
    theorem: ["Theorem", "::: theorem ⟦Name⟧\nStatement.\n:::"], definition: ["Definition", "::: definition ⟦Term⟧\nMeaning.\n:::"],
    example: ["Example", "::: example ⟦Title⟧\nText.\n:::"], alert: ["Alert", "::: alert ⟦Title⟧\nText.\n:::"],
    columns: ["Two Columns", "::: columns\n::: column\n⟦Left⟧\n:::\n::: column\nRight\n:::\n:::"],
    articleOnly: ["Article-Only Text", "<!-- article -->\n⟦Text for the article only.⟧\n<!-- /article -->"],
    slidesOnly: ["Slide-Only Text", "<!-- slides -->\n⟦Text for the slides only.⟧\n<!-- /slides -->"],
};

function perform(id) {
    assert(typeof E.insert === "function", "the editor inserts text");
    assert(typeof E.snippet === "function", "the editor makes snippets");
    assert(typeof id === "string", "an insert id is a string");
    assert(id === "title" || id in SNIPPETS, "the insert id is known");
    if (readOnly()) return;
    if (id === "title") { E.insertFrontMatter(); return; }
    const [s, e] = E.selection();
    if (id === "articleOnly" && s !== e) { E.wrapSelectionInLines("<!-- article -->", "<!-- /article -->"); return; }
    if (id === "slidesOnly" && s !== e) { E.wrapSelectionInLines("<!-- slides -->", "<!-- /slides -->"); return; }
    const [, text, block = true] = SNIPPETS[id];
    assert(typeof text === "string", "a snippet has text");
    E.insert(E.snippet(text, block));
}

function insertItems() {
    assert(typeof addMedia === "function", "media can be added");
    assert(typeof perform === "function", "inserts can be performed");
    assert(Object.keys(SNIPPETS).length > 0, "there are snippets");
    const it = (id) => ({ label: id === "title" ? "Title and Details" : SNIPPETS[id][0], action: () => perform(id) });
    const groups = [
        ["Structure", ["title", "section", "columns"]], ["Narration", ["narration", "explanation", "publicNotes"]],
        ["Math", ["inlineMath", "equationSteps"]], ["Data", ["table", "plot", "chart", "codeBlock"]],
        ["Blocks", ["theorem", "definition", "example", "alert"]], ["Scope", ["articleOnly", "slidesOnly"]],
    ];
    const items = [it("slide"), { label: "Photo or Video…", action: () => addMedia("any") }, it("displayMath"), it("notes"), it("pause")];
    for (const [name, ids] of groups) {
        items.push({ separator: true }, { header: name }, ...ids.map(it));
        if (name === "Data") items.push({ separator: true }, { header: "Files" },
            { label: "Image File…", action: () => addMedia("image") }, { label: "Video File…", action: () => addMedia("video") });
    }
    assert(items.length > 0, "the Insert menu has items");
    return items;
}

// --- Preview ------------------------------------------------------------------------------------

function takahashi() {
    assert(typeof S.settings.slideStyle !== "number", "the slide style is not a number");
    assert(typeof S.setSetting === "function", "settings can be set");
    assert(S.settings !== null && typeof S.settings === "object", "settings are loaded");
    assert(S.settings.slideStyle === undefined || typeof S.settings.slideStyle === "string", "the slide style is a string");
    return S.settings.slideStyle === "takahashi";
}

function buildPage(source) {
    assert(typeof C.page === "function", "the core makes pages");
    assert(typeof P.doc === "function", "Preview makes documents");
    assert(typeof source === "string", "the source is a string");
    assert(state.view === "slides" || state.view === "article", "the view is known");
    const article = state.view === "article";
    const kind = article ? C.PAGE_ARTICLE : C.PAGE_SLIDES;
    const opts = article ? C.O_TOC : P.slideOptions(takahashi());
    const d = P.doc(source, state.assetURLs, { kind });
    const html = C.page(d, kind, opts);
    let outline = [];
    try { outline = C.outline(P.doc(source, state.assetURLs), P.slideOptions(takahashi())); } catch { outline = []; }
    assert(typeof html === "string", "the page is a string");
    assert(Array.isArray(outline), "the outline is an array");
    return { html, outline };
}

function showPreviewMessage(text) {
    assert(typeof h === "function", "elements can be made");
    assert(typeof frame.clear === "function", "the frame can clear");
    assert(typeof text === "string" && text.length > 0, "a preview message has text");
    assert(frame !== null, "the preview frame exists");
    frame.clear();
    const old = $("preview-pane").querySelector(".preview-message");
    if (old) old.remove();
    $("preview-pane").append(h("div", { class: "preview-message alert-text", role: "status", style: { padding: "24px" }, text }));
    assert($("preview-pane").querySelector(".preview-message") !== null, "the message is shown");
}

function refreshPreview(jump = false) {
    assert(typeof buildPage === "function", "pages can be built");
    assert(typeof tooLarge === "function", "size can be checked");
    assert(typeof jump === "boolean", "jump is a flag");
    assert(frame !== null, "the preview frame exists");
    const t = E.text();
    $("preview-pane").querySelector(".preview-message")?.remove();
    if (tooLarge(t)) { showPreviewMessage("The Markdown file is larger than 512 KB. Split it into more projects to see the preview."); return; }
    let r;
    try { r = buildPage(t); } catch (e) { showPreviewMessage("Marklove could not make the preview. " + e.message); return; }
    assert(r && Array.isArray(r.outline), "the page has an outline");
    state.outline = r.outline;
    state.html = r.html;
    const offset = jump ? state.previewOffset : E.selection()[0];
    const slide = r.outline.length ? P.slideAt(r.outline, offset) : null;
    if (state.view === "slides") frame.show(r.html, slide ? encodeURIComponent(slide.id) : "");
    else {
        frame.onload = (f) => { frame.onload = null; if (jump && slide) scrollArticle(f, slide.id); };
        frame.show(r.html, "", !jump);
    }
    assert(typeof state.html === "string", "the page is kept");
}

function scrollArticle(f, id) {
    assert(id.length >= 0, "a slide id has a length");
    assert(typeof f.contentDocument !== "function", "the frame has a document slot");
    assert(f !== null && typeof f === "object", "the frame is an object");
    assert(typeof id === "string", "a slide id is a string");
    try { f.contentDocument.getElementById(id)?.scrollIntoView({ block: "start" }); } catch { /* not loaded */ }
}

let previewTimer = 0;
function schedulePreview() {
    assert(typeof refreshPreview === "function", "the preview can refresh");
    assert(frame !== null, "the preview frame exists");
    assert(state.mode === "preview", "a preview is scheduled only in Preview");
    assert(typeof previewTimer === "number", "the preview timer is a number");
    clearTimeout(previewTimer);
    previewTimer = setTimeout(() => refreshPreview(false), 350);
}

// In the split view, the preview follows the slide at the cursor.
let followTimer = 0;
function followCursor() {
    assert(frame !== null, "the preview frame exists");
    assert(typeof P.slideAt === "function", "Preview finds the slide at an offset");
    assert(typeof followTimer === "number", "the follow timer is a number");
    assert(state.outline !== null, "the outline exists");
    if (state.mode !== "preview" || !split()) return;
    clearTimeout(followTimer);
    followTimer = setTimeout(() => {
        if (!state.outline.length || !state.html) return;
        const s = P.slideAt(state.outline, E.selection()[0]);
        if (!s) return;
        if (state.view === "slides") { if (frame.currentId() !== s.id) frame.show(state.html, encodeURIComponent(s.id)); }
        else if (frame.frame) scrollArticle(frame.frame, s.id);
    }, 300);
}

function split() {
    assert(innerWidth >= 0, "the window width is not negative");
    assert(typeof readOnly === "function", "read-only can be asked");
    assert(Number.isFinite(innerWidth), "the window has a width");
    assert(typeof readOnly() === "boolean", "read-only is a flag");
    return !readOnly() && innerWidth > 900;
}

function layout() {
    assert(typeof readOnly === "function", "read-only can be asked");
    assert($("workspace") !== null, "the workspace exists");
    assert(state.mode === "edit" || state.mode === "preview", "the mode is known");
    assert(typeof document.fullscreenEnabled === "boolean", "full screen support is known");
    const editing = state.mode === "edit";
    $("edit-actions").hidden = !editing || readOnly();
    $("present-actions").hidden = !editing || !readOnly();
    $("preview-actions").hidden = editing;
    $("preview-pane").hidden = editing;
    $("workspace").classList.toggle("split", !editing && !readOnly());
    $("editor-pane").hidden = !editing && readOnly();
    $("statusbar").classList.toggle("in-preview", !editing);
    $("fullscreen-btn").hidden = !document.fullscreenEnabled;
    $("edit-btn").hidden = readOnly();
    assert($("preview-pane").hidden === editing, "the preview pane is shown only in Preview");
}

function showPreview() {
    assert(typeof layout === "function", "the layout can change");
    assert(typeof refreshPreview === "function", "the preview can refresh");
    assert(state.project !== null, "a project is open");
    assert(frame !== null, "the preview frame exists");
    if (state.mode !== "preview") { state.previewOffset = E.selection()[0]; saveEditorState(); }
    state.mode = "preview";
    layout();
    refreshPreview(true);
    assert(state.mode === "preview", "the mode is Preview");
    if (!split()) setTimeout(() => $("edit-btn").focus(), 0);
}

// Edit returns to the source of the visible slide, if it is not the slide at the cursor.
function showEdit(focusEditor = true) {
    assert(typeof layout === "function", "the layout can change");
    assert(typeof E.setSelection === "function", "the editor sets a selection");
    assert(typeof focusEditor === "boolean", "focusEditor is a flag");
    assert(frame !== null, "the preview frame exists");
    const wasPreview = state.mode === "preview";
    if (wasPreview && state.view === "slides" && state.outline.length) {
        const id = frame.currentId();
        const s = state.outline.find((x) => x.id === id);
        if (s && !(s.s0 <= state.previewOffset && state.previewOffset < s.s1)) E.setSelection(s.s0, s.s0);
    }
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    state.mode = "edit";
    layout();
    frame.clear();
    assert(state.mode === "edit", "the mode is Edit");
    if (focusEditor) E.focus();
}

function present() {
    assert(typeof showPreview === "function", "Preview can show");
    assert(state.mode === "edit" || state.mode === "preview", "the mode is known");
    assert(frame !== null, "the preview frame exists");
    assert(state.project !== null, "a project is open");
    if (state.mode !== "preview") showPreview();
    const pane = $("preview-pane");
    if (pane.requestFullscreen) pane.requestFullscreen().then(() => frame.frame?.focus()).catch(() => announce("The browser did not allow full screen."));
}

// --- the equation preview -----------------------------------------------------------------------

const eq = { open: false };

function toggleEquation() {
    assert(typeof updateEquation === "function", "the equation preview can update");
    assert(typeof announce === "function", "the app can announce");
    assert(typeof eq.open === "boolean", "the equation preview is open or closed");
    eq.open = !eq.open;
    if (!eq.open) { $("eq-pop").hidden = true; return; }
    if (!updateEquation()) { eq.open = false; announce("Put the cursor in an equation to preview it."); }
    assert(typeof eq.open === "boolean", "the equation preview is open or closed");
}

function updateEquation() {
    assert($("eq-pop") !== null, "the equation pop-up exists");
    assert(typeof C.mathAt === "function", "the core finds equations");
    assert(typeof eq.open === "boolean", "the equation preview is open or closed");
    const pop = $("eq-pop");
    if (!eq.open) return false;
    const t = E.text();
    let m = null;
    try { m = C.mathAt(t, E.selection()[0]); } catch { m = null; }
    if (!m) { pop.hidden = true; return false; }
    assert(typeof m.latex === "string", "an equation has LaTeX");
    const bad = (C.mathCheck(m.latex) || "").split("\n").filter(Boolean);
    const spoken = C.mathSpeech(m.latex).replace(/^[,\s]+|[,\s]+$/g, "");
    const math = h("div", { class: "eq-math" });
    if (bad.length) math.append(h("p", { class: "eq-warn", text: `⚠ Marklove cannot draw ${bad.join(", ")}. Exports show the LaTeX text.` }));
    else math.innerHTML = C.math(m.latex, true);
    pop.replaceChildren(math,
        h("p", { class: "eq-spoken", "aria-label": "Spoken as: " + spoken, text: spoken }),
        h("div", { class: "eq-foot" }, h("span", { text: m.display ? "Display equation" : "Inline equation" }), h("span", { class: "spacer" }),
            h("button", { type: "button", class: "button", onclick: async () => { await copyText(m.latex); announce("Copied the LaTeX."); } }, "Copy LaTeX"),
            h("button", { type: "button", class: "iconbtn", "aria-label": "Close the equation preview", onclick: () => { eq.open = false; pop.hidden = true; E.focus(); } }, "✕")));
    pop.hidden = false;
    assert(pop.childElementCount === 3, "the preview has math, speech and a footer");
    return true;
}

// --- Export and the presenter tools ----------------------------------------------------------------

function exportContext() {
    assert(typeof saveVersion === "function", "versions can be saved");
    assert(typeof state.exportChoice === "string", "the export choice is text");
    assert(typeof S.versions === "function", "the store lists versions");
    assert(state.project !== null, "a project is open");
    assert(typeof stylePicker === "object", "the style picker exists");
    const src = E.text();
    let prefersDark = null;
    try { prefersDark = C.themeResolve(frontValue(src, "theme"), frontValue(src, "accent")).prefersDark; } catch { prefersDark = null; }
    return {
        title: docTitle(), name: state.project.name, source: src, assets: state.assets, assetURLs: state.assetURLs, prefersDark,
        lastChoice: state.exportChoice, setChoice: (v) => { state.exportChoice = v; },
        style: () => S.settings.slideStyle, setStyle: (v) => { S.setSetting("slideStyle", v); stylePicker.setValue(v); if (state.mode === "preview") refreshPreview(); },
        versions: () => (S.settings.gitEnabled ? S.versions(state.project.id) : Promise.resolve([])),
        gitName: gitName(src), gitEmail: S.settings.gitEmail,
        beforeExport: async () => { await saveVersion({ auto: true }); },
        listenerPreview: () => openListenerPreview(),
        speakerReady: () => openSpeakerReady(),
        goToSource,
    };
}

function openExport() {
    assert(typeof X.exportSheet === "function", "the export sheet exists");
    assert(typeof exportContext === "function", "the export context can be made");
    assert(state.project !== null, "a project is open");
    if (tooLarge(E.text())) { alertBox("The Markdown file is larger than 512 KB. Split it into more projects to export it."); return; }
    const ctx = exportContext();
    assert(typeof ctx.goToSource === "function", "the export can go to the source");
    X.exportSheet(ctx);
}

function goToSource(d, fromExport) {
    assert(typeof renderBanners === "function", "banners can render");
    assert(typeof showEdit === "function", "Edit can show");
    assert(d && Number.isFinite(d.start), "a source passage starts somewhere");
    assert(typeof fromExport === "boolean" || fromExport === undefined, "fromExport is a flag");
    if (state.mode !== "edit") showEdit(false);
    state.focus = { message: d.message, detail: d.detail, returnToExport: fromExport };
    renderBanners();
    E.focus();
    E.setSelection(d.start, Math.max(d.start, d.end));
    assert(state.mode === "edit", "the mode is Edit");
}

function openSpeakerReady() {
    assert(typeof takahashi === "function", "the slide style can be asked");
    assert(typeof alertBox === "function", "alerts can be shown");
    assert(state.project !== null, "a project is open");
    assert(typeof P.speakerReady === "function", "Preview has Speaker Ready");
    const r = P.speakerReady({ source: E.text(), assets: state.assetURLs, takahashi: takahashi(), appearance: "", startOffset: E.selection()[0] });
    if (r && r.error) alertBox(r.error, "Speaker Ready");
}

function openListenerPreview() {
    assert(typeof takahashi === "function", "the slide style can be asked");
    assert(typeof alertBox === "function", "alerts can be shown");
    assert(state.project !== null, "a project is open");
    assert(typeof P.listenerPreview === "function", "Preview has Listener Preview");
    const r = P.listenerPreview({ source: E.text(), assets: state.assetURLs, takahashi: takahashi(), appearance: "" });
    if (r && r.error) alertBox(r.error, "Listener Preview");
}

// --- the title menu -----------------------------------------------------------------------------------

function titleItems() {
    assert(Array.isArray(state.list), "the project list is an array");
    assert(typeof isMac === "boolean", "the platform is known");
    const projects = state.list.filter((p) => !p.isListener).slice(0, 8);
    assert(projects.length <= 8, "the title menu lists at most eight projects");
    assert(state.project !== null, "a project is open");
    return [
        { header: "Projects" },
        ...projects.map((p) => ({ label: p.name, checked: p.id === state.project?.id, action: () => openProject(p.id) })),
        { label: "New Project", shortcut: isMac ? "⌥⌘N" : "Ctrl+Alt+N", action: newProject },
        { label: "All Projects…", shortcut: isMac ? "⇧⌘O" : "Ctrl+Shift+O", action: () => UI.projectsPanel(app) },
        { label: "Received", action: () => UI.projectsPanel(app, { received: true }) },
        { separator: true },
        { label: "Rename…", disabled: readOnly(), action: () => UI.renamePanel(app) },
        { label: "Version History…", disabled: readOnly(), shortcut: isMac ? "⌥⌘Y" : "Ctrl+Alt+Y", action: () => UI.historyPanel(app) },
        { label: "Duplicate", action: duplicate },
        { label: "Import Markdown or ZIP…", shortcut: cmdKey + "O", action: importFiles },
        { label: "Save a ZIP Copy…", action: () => saveZipCopy() },
        { label: "Delete Project…", danger: true, action: () => deleteProject(state.project) },
        { separator: true },
        { label: "Find and Replace…", disabled: readOnly(), shortcut: isMac ? "⌥⌘F" : "Ctrl+Alt+F", action: () => F.openFind({ replace: true }) },
        { label: "Outline", shortcut: isMac ? "⇧⌘L" : "Ctrl+Shift+L", action: () => UI.outlinePanel(app) },
        { label: "Speaker Ready", shortcut: isMac ? "⇧⌘R" : "Ctrl+Shift+R", action: openSpeakerReady },
        { label: "Customize…", disabled: readOnly(), action: () => UI.customizePanel(app) },
        { label: "Settings", action: () => UI.settingsPanel(app) },
        { label: "Help and Examples", action: () => UI.helpPanel(app) },
    ];
}

// --- shortcuts -------------------------------------------------------------------------------------------

function handleKey(e) {
    assert(typeof e.preventDefault === "function", "a key event can be stopped");
    assert(typeof closeMenu === "function", "menus can close");
    assert(e && typeof e.key === "string", "a key event has a key");
    assert(typeof e.code === "string", "a key event has a code");
    if (e.defaultPrevented) return;
    const mod = isMac ? e.metaKey : e.ctrlKey;
    const ctlMac = isMac && e.ctrlKey;
    const code = e.code;
    const inDialog = !!document.querySelector("dialog[open]");
    const run = (fn) => { assert(typeof fn === "function", "a shortcut runs a function"); e.preventDefault(); e.stopPropagation(); closeMenu(); fn(); };
    if (e.key === "Escape" && state.mode === "preview" && !inDialog && !document.fullscreenElement && !(F.find.open && document.activeElement?.closest("#findbar"))) {
        if (!readOnly()) return run(() => showEdit());
    }
    if (!mod) return;
    if (inDialog) return;
    if (code === "KeyS" && !e.shiftKey && !e.altKey) return run(() => saveVersion({ explicit: true }));
    if (code === "KeyE" && (ctlMac || (!isMac && e.altKey))) return run(toggleEquation);
    if (code === "KeyE" && !e.shiftKey && !e.altKey) return run(openExport);
    if (code === "KeyF" && e.altKey) return run(() => F.openFind({ replace: true }));
    if (code === "KeyF" && !e.shiftKey) return run(() => F.openFind());
    if (code === "KeyG" && F.find.open) return run(() => F.next(!e.shiftKey));
    if (code === "KeyX" && e.altKey) return run(() => F.openFind({ command: true }));
    if (code === "KeyO" && e.shiftKey) return run(() => UI.projectsPanel(app));
    if (code === "KeyO") return run(importFiles);
    if (code === "KeyY" && e.altKey) return run(() => UI.historyPanel(app));
    if (code === "KeyL" && e.altKey) return run(() => { S.setSetting("showLineCount", !S.settings.showLineCount); updateStatus(); });
    if (code === "KeyL" && e.shiftKey) return run(() => UI.outlinePanel(app));
    if (code === "KeyR" && e.shiftKey) return run(openSpeakerReady);
    if (code === "KeyN" && e.altKey) return run(newProject);
    if (e.key === "Enter") return run(() => (state.mode === "edit" ? showPreview() : readOnly() ? null : showEdit()));
}

function goToRange(s, e) {
    assert(s <= e || e >= 0, "the range has an end");
    assert(typeof showEdit === "function", "Edit can show");
    assert(Number.isFinite(s), "the range starts somewhere");
    assert(Number.isFinite(e), "the range ends somewhere");
    if (state.mode !== "edit") showEdit(false);
    E.focus();
    E.setSelection(s, e);
}

// --- the object that the panels and Find use -------------------------------------------------------------

assert(typeof openProject === "function", "projects open");
assert(typeof saveVersion === "function", "versions can be saved");
assert(typeof goToRange === "function", "ranges can be shown");
const app = {
    readOnly, text: () => E.text(), title: docTitle, projectId: () => state.project?.id, projectName: () => state.project?.name || "",
    selectedText: () => E.text().slice(...E.selection()),
    replaceAll: (t) => E.replaceAll(t),
    insertText: (t) => E.insert(E.snippet(t)),
    applySettings, openSettings: () => UI.settingsPanel(app), findSyntaxChanged: () => F.syntaxChanged(),
    openProject, newProject, importFiles, openTour, deleteProject, rename,
    saveVersion, restoreVersion,
    goToSource: goToRange,
};

// --- start ----------------------------------------------------------------------------------------------------

let stylePicker;

async function start() {
    assert(typeof C.load === "function", "the core loads");
    assert(typeof handleKey === "function", "keys can be handled");
    assert(typeof layout === "function", "the layout can change");
    assert(frame === null, "start runs once");
    try {
        await C.load();
        await P.loadParts();
        await S.open();
    } catch (e) {
        $("loading").textContent = "Marklove could not start. " + (e.message || e) + " Use a current browser, and open the page from a web server.";
        return;
    }
    $("preview-frame").remove();
    frame = new P.PageFrame($("preview-pane"), "Preview");
    assert(frame !== null, "the preview frame is made");
    frame.onkey = handleKey;
    E.init({ textarea: $("source"), highlight: $("highlight"), box: $("editor"), placeholder: $("placeholder") });
    E.editor.onChange = textChanged;
    E.editor.onSelect = () => { updateStatus(); E.syncVimCursor(); updateEquation(); followCursor(); };
    E.editor.onVimState = updateStatus;
    E.editor.onVimAction = (action, clip) => {
        if (action === "save") saveVersion({ explicit: true });
        else if (action === "discard") discardToLastVersion();
        else if (action === "copy" && clip) copyText(clip);
    };
    F.initFind($("findbar"), app);

    attachMenu($("title-menu"), titleItems);
    attachMenu($("insert-btn"), insertItems);
    $("preview-btn").addEventListener("click", showPreview);
    $("export-btn").addEventListener("click", openExport);
    $("edit-btn").addEventListener("click", () => showEdit());
    $("present-only-btn").addEventListener("click", present);
    $("fullscreen-btn").addEventListener("click", present);
    $("export-btn").title = `Export slides, article, and other formats (${cmdKey}E)`;
    $("preview-btn").title = `Preview the slides (${cmdKey}Return)`;
    const viewPicker = segmented("View", [["slides", "Slides"], ["article", "Article"]], state.view, (v) => { state.view = v; $("style-picker").hidden = v !== "slides"; refreshPreview(false); });
    $("view-picker").append(viewPicker);
    stylePicker = segmented("Slide style", [["normal", "Normal"], ["takahashi", "Takahashi"]], S.settings.slideStyle, (v) => { S.setSetting("slideStyle", v); refreshPreview(false); });
    $("style-picker").append(stylePicker);
    document.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", () => { $("workspace").classList.toggle("presenting", !!document.fullscreenElement); });
    addEventListener("resize", () => { if (state.mode === "preview") layout(); });
    addEventListener("pagehide", () => { flushSave(); saveEditorState(); });
    document.addEventListener("visibilitychange", () => { if (document.hidden) { flushSave(); saveEditorState(); } });

    assert(stylePicker !== undefined, "the style picker is made");
    applySettings();
    await refreshList();
    const last = state.list.find((p) => p.id === S.settings.lastProject);
    if (last) await openProject(last.id);
    else if (state.list.length) await openProject((state.list.find((p) => !p.isListener) || state.list[0]).id);
    else await openTour();
    $("loading").hidden = true;
    assert(state.project !== null, "a project is open after the start");
    if (!S.settings.onboardingSeen) UI.welcome(app);
}

assert(typeof start === "function", "the app can start");
assert(typeof app === "object", "the app object exists");
start();

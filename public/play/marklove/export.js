// Export (ExportSheet.swift and ExportRunner.swift). The core lays out the
// PDF pages, the slide images and the video (web/pages.js, web/video.js).
// PDFs open the print dialog with these pages.

import * as C from "./core.js";
import * as P from "./preview.js";
import * as S from "./store.js";
import * as G from "./pages.js";
import * as V from "./video.js";
import * as Voice from "./voice.js";
import { h, dialog, section, footnote, segmented, selectRow, download, blobToDataURL, announce } from "./ui.js";

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

const PRINT_NOTE = "Opens the print dialog. Select Save as PDF.";
const NO_VOICE = "Download the Kokoro voice in Settings first.";

// ExportFormat, in the same sequence.
function toFormat([id, group, name, label, summary, web]) {
    assert(typeof id === "string" && id.length > 0, "a format has an id");
    assert(typeof group === "string" && typeof name === "string", "a format has a group and a name");
    assert(typeof label === "string" && typeof summary === "string", "a format has a label and a summary");
    assert(web === "print" || web === "", "the web column is print or empty");
    return { id, group, name, label, summary, print: web === "print" };
}

export const FORMATS = [
    ["slidesPDF", "Slides and article", "Slides", "PDF", "Normal or Takahashi slides.", "print"],
    ["slidesPNG", "Slides and article", "Slide images", "PNG in ZIP", "One PNG image for each slide, 1920 pixels wide, with text descriptions.", ""],
    ["slidesSVG", "Slides and article", "Slide vector images", "SVG in ZIP", "One SVG file for each slide. Text, photos, equations, and plots become vector shapes.", ""],
    ["articlePDF", "Slides and article", "Article", "PDF", "A continuous, typeset article.", "print"],
    ["articleHTML", "Slides and article", "Article web page", "HTML", "The article as one web page. It works offline and keeps sliders.", ""],
    ["epub", "Slides and article", "Article book", "EPUB", "The article as an EPUB book for Books and other readers.", ""],
    ["handoutPDF", "Documents", "Handout with notes", "PDF", "Slides with public notes at the side, in black and white.", "print"],
    ["posterPDF", "Documents", "Conference poster", "PDF", "The article on one large page, in columns. A0, A1, 48 × 36 in, or 42 × 42 in.", "print"],
    ["articleMarkdown", "Documents", "Article Markdown", "Markdown", "The article text as one Markdown file.", ""],
    ["revisedMarkdown", "Documents", "Takahashi Markdown copy", "Markdown", "A copy with one Takahashi slide per paragraph. Your project does not change.", ""],
    ["interactiveHTML", "Interactive", "Interactive presentation", "HTML", "Works offline in a browser. Keeps reveals, sliders, and charts.", ""],
    ["video", "Audio and video", "Video", "MP4", "The presentation without sound.", ""],
    ["narratedVideo", "Audio and video", "Narrated video", "MP4", "The presentation with Kokoro narration and captions.", ""],
    ["manimVideo", "Audio and video", "Math animation video", "MP4", "Equations, plots, and steps with purposeful motion.", ""],
    ["podcast", "Audio and video", "Podcast", "M4A", "Kokoro narration as audio.", ""],
    ["narrationScript", "Text", "Narration script", "Text", "The exact text that narration speaks.", ""],
    ["transcript", "Text", "Transcript", "Text", "The narration text for readers.", ""],
    ["subtitles", "Text", "Subtitles", "WebVTT and SRT", "Timed captions for the video.", ""],
    ["promptText", "Text", "Prompt text for AI tools", "Text", "The Marklove rules and this project, to revise with an AI tool.", ""],
    ["presenterZIP", "Packages", "Presenter package", "ZIP", "Markdown, assets, and private notes.", ""],
    ["listenerZIP", "Packages", "Listener package", "ZIP", "Public content only. Private notes are removed.", ""],
    ["projectZIP", "Packages", "Project with version history", "ZIP", "The project folder with its Git history. Other Git apps can read it.", ""],
].map(toFormat);

// The share of the progress for each format (ExportRunner.weight).
const WEIGHTS = { video: 6, manimVideo: 6, narratedVideo: 10, podcast: 4, slidesPDF: 2, articlePDF: 2, handoutPDF: 2, posterPDF: 2, slidesPNG: 3, slidesSVG: 5 };

const GROUPS = ["Slides and article", "Documents", "Interactive", "Audio and video", "Text", "Packages"];
const byId = Object.fromEntries(FORMATS.map((f) => [f.id, f]));
const usesSlideStyle = new Set(["slidesPDF", "slidesPNG", "slidesSVG", "handoutPDF", "interactiveHTML", "video", "narratedVideo"]);

const US = ["US", "CA", "MX", "PH"];
const region = () => {
    assert(typeof navigator === "object" && navigator !== null, "the browser has a navigator");
    assert(US.length > 0, "the list of US regions is not empty");
    return (navigator.language || "").split("-")[1]?.toUpperCase() || "";
};

export const POSTERS = {
    a0: ["A0 (841 × 1189 mm)", 841, 1189, "mm"], a1: ["A1 (594 × 841 mm)", 594, 841, "mm"],
    in48x36: ["48 × 36 in", 36, 48, "in"], in42x42: ["42 × 42 in (square)", 42, 42, "in"],
};

export function fileName(id, title, style) {
    assert(typeof id === "string" && id.length > 0, "the format id is a string");
    assert(style === undefined || typeof style === "string", "the style is a string");
    assert(byId[id] !== undefined, "the format is known");
    const b = S.safeFileName(title);
    const st = style === "takahashi" ? "Takahashi" : "Normal";
    return {
        slidesPDF: `${b} – slides (${st}).pdf`, slidesPNG: `${b} – slides (${st}) PNG.zip`, slidesSVG: `${b} – slides (${st}) SVG.zip`, articlePDF: `${b} – article.pdf`, articleHTML: `${b} – article.html`, epub: `${b}.epub`,
        handoutPDF: `${b} – handout.pdf`, posterPDF: `${b} – poster.pdf`, interactiveHTML: `${b} – presentation.html`,
        articleMarkdown: `${b} – article.md`, revisedMarkdown: `${b} – Takahashi.md`, narrationScript: `${b} – narration script.txt`,
        transcript: `${b} – transcript.txt`, subtitles: `${b} – subtitles.vtt`, presenterZIP: `${b} – presenter.zip`,
        listenerZIP: `${b} – listener.zip`, projectZIP: `${b} – project with history.zip`, promptText: `${b} – prompt.txt`,
        video: `${b} – video.mp4`, narratedVideo: `${b} – narrated video.mp4`, manimVideo: `${b} – math animation.mp4`, podcast: `${b} – podcast.m4a`,
    }[id];
}

// --- the source checks ----------------------------------------------------------

// The assets are the {path: URL} map, as for core.page.
export function diagnostics(source, assetURLs = {}) {
    assert(typeof source === "string", "the source is a string");
    assert(typeof assetURLs === "object" && assetURLs !== null, "the asset map is an object");
    try { return { list: C.lint(source, assetURLs), error: "" }; }
    catch (e) { return { list: [], error: e instanceof C.TooLarge ? e.message : "Marklove could not check the source. " + e.message }; }
}

function affects(d, id, style) {
    assert(d && Array.isArray(d.formats), "a diagnostic lists its formats");
    assert(typeof id === "string", "the format id is a string");
    if (!d.formats.includes(id)) return false;
    if (d.style === "takahashi" && style !== "takahashi") return false;
    return true;
}

export function lineOf(text, offset) {
    assert(typeof text === "string", "the text is a string");
    assert(typeof offset === "number", "the offset is a number");
    let n = 1;
    for (let i = text.indexOf("\n"); i >= 0 && i < offset; i = text.indexOf("\n", i + 1)) n++;
    return n;
}

function formatNames(d) {
    assert(d && Array.isArray(d.formats), "a diagnostic lists its formats");
    assert(FORMATS.length > 2, "there are formats");
    if (d.formats.length >= FORMATS.length - 2) return "All outputs";
    const names = FORMATS.filter((f) => d.formats.includes(f.id)).map((f) => {
        assert(typeof f.name === "string", "a format has a name");
        assert(typeof f.id === "string", "a format has an id");
        return f.name;
    });
    return names.length > 3 ? `${names.slice(0, 3).join(", ")}, and ${names.length - 3} more` : names.join(", ");
}

export function issueRow(d, text, goToSource) {
    assert(d && typeof d.message === "string", "a diagnostic has a message");
    assert(typeof text === "string", "the text is a string");
    assert(typeof goToSource === "function", "the go to source handler is a function");
    assert(typeof d.start === "number", "a diagnostic has a start");
    assert(Number.isFinite(d.start), "a diagnostic has a finite start");
    assert(Array.isArray(d.formats), "a diagnostic lists its formats");
    const warn = d.severity === "warning";
    return h("div", { class: "issue" },
        h("div", { class: "msg" }, h("span", { class: warn ? "status-warn" : "", "aria-label": warn ? "Warning" : "Information" }, warn ? "⚠ " : "ⓘ "), d.message),
        h("div", { class: "where", text: `Line ${lineOf(text, d.start)} · ${formatNames(d)}` }),
        d.detail ? h("details", {}, h("summary", { text: "More" }), h("p", { text: d.detail })) : null,
        h("button", { type: "button", class: "button", onclick: goToSource }, "Go to Source"));
}

// --- builders -------------------------------------------------------------------------

const now = () => {
    const t = Math.floor(Date.now() / 1000);
    assert(Number.isFinite(t), "the time is finite");
    assert(t >= 0, "the time is not negative");
    return t;
};

async function singleFile(html, ctx) {
    assert(typeof html === "string", "the page is a string");
    assert(ctx && typeof ctx.assetURLs === "object", "the context has asset URLs");
    assert(typeof ctx.assets === "object", "the context has assets");
    assert(html.length >= 0, "the page has a length");
    assert(typeof blobToDataURL === "function", "the converter exists");
    for (const [path, url] of Object.entries(ctx.assetURLs)) {
        if (!html.includes(url)) continue;
        const data = await blobToDataURL(ctx.assets[path]);
        html = html.split(url).join(data);
    }
    return html;
}

const textBlob = (t, type = "text/plain") => {
    assert(typeof t === "string", "the text is a string");
    assert(typeof type === "string", "the type is a string");
    return new Blob([t], { type: type + ";charset=utf-8" });
};

async function zipOf(files, mtime) {
    assert(Array.isArray(files), "the files are a list");
    assert(Number.isFinite(mtime), "the time is finite");
    assert(files.every((f) => Array.isArray(f)), "every file is a name and data pair");
    assert(mtime >= 0, "the time is not negative");
    assert(typeof C.zipBegin === "function", "the core zips");
    C.zipBegin();
    const parts = [];
    for (const [name, data] of files) {
        if (data instanceof Blob) { const g = await C.zipAddBlob(name, data, mtime); if (g) parts.push(...g); }
        else C.zipAdd(name, data, mtime);
    }
    parts.push(C.zipFinish());
    return new Blob(parts, { type: "application/zip" });
}

function packageFiles(ctx, markdown, paths) {
    assert(typeof markdown === "string", "the markdown is a string");
    assert(Array.isArray(paths), "the paths are a list");
    assert(ctx && typeof ctx.assets === "object", "the context has assets");
    assert(markdown.length >= 0, "the markdown has a length");
    assert(paths.every((p) => typeof p === "string"), "every path is a string");
    const files = [[S.safeFileName(ctx.name) + ".md", markdown]];
    const missing = [];
    for (const p of paths) {
        if (ctx.assets[p]) files.push([p, ctx.assets[p]]);
        else missing.push("Not included because the file is missing: " + p);
    }
    return { files, missing };
}

export async function projectZip(ctx, versions) {
    assert(Array.isArray(versions), "the versions are a list");
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    assert(typeof ctx.assets === "object", "the context has assets");
    assert(ctx.name !== undefined, "the project has a name");
    assert(versions.every((v) => v !== null), "every version exists");
    const t = now();
    const md = S.safeFileName(ctx.name) + ".md";
    C.zipBegin();
    const parts = [];
    if (versions.length) {
        const name = ctx.gitName || "Marklove";
        C.gitBegin(name, ctx.gitEmail || "", t);
        const seen = new Set();
        for (const v of versions.slice().reverse()) {
            C.gitFile(md, v.markdown);
            for (const p of v.assets || []) {
                const blob = ctx.assets[p];
                if (!blob) continue;
                const g = await C.gitFileBlob(p, blob, t, seen);
                if (g) parts.push(...g);
            }
            C.gitCommit(v.message, Math.floor(v.time / 1000), -new Date(v.time).getTimezoneOffset());
            parts.push(C.zipTake());
        }
        C.gitFinish(t);
    }
    C.zipAdd(md, ctx.source, t);
    parts.push(C.zipTake());
    for (const [p, blob] of Object.entries(ctx.assets)) {
        const g = await C.zipAddBlob(p, blob, t);
        if (g) parts.push(...g);
    }
    parts.push(C.zipFinish());
    return new Blob(parts, { type: "application/zip" });
}

async function epub(ctx, d) {
    assert(ctx && typeof ctx.assets === "object", "the context has assets");
    assert(d !== undefined && d !== null, "the document exists");
    assert(typeof ctx.assetURLs === "object", "the context has asset URLs");
    assert(typeof C.epub === "function", "the core makes EPUB");
    assert(typeof C.zipFinish === "function", "the core finishes ZIPs");
    const linked = C.epub(d, now(), 0);
    const parts = [];
    for (const p of linked) {
        const blob = ctx.assets[p];
        if (!blob) continue;
        const g = await C.zipAddBlob("OEBPS/media/" + p, blob, now());
        if (g) parts.push(...g);
    }
    parts.push(C.zipFinish());
    return new Blob(parts, { type: "application/epub+zip" });
}

// Video and audio: [extension, blob] parts get the name of the format.
function named(name, r) {
    assert(typeof name === "string", "the name is a string");
    assert(r && Array.isArray(r.files), "the result lists its files");
    return { files: r.files.map(([ext, blob]) => {
        assert(typeof ext === "string", "the extension is a string");
        assert(blob !== undefined, "the part has a blob");
        return [name.replace(/\.\w+$/, "." + ext), blob];
    }), notes: r.notes };
}

// Makes one format. Returns {files: [[name, blob]], notes}, {print: fn},
// or {reason} when it cannot be made. progress receives values from 0 to 1.
async function buildEnv(id, ctx, opt) {
    assert(byId[id] !== undefined, "the format is known");
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    assert(typeof opt === "object" && opt !== null, "the options are an object");
    assert(typeof ctx.assetURLs === "object", "the asset map is an object");
    assert(typeof byId[id].name === "string", "the format has a name");
    const takahashi = opt.style === "takahashi";
    const dark = opt.appearance === "system" ? (ctx.prefersDark === null ? "" : ctx.prefersDark ? "dark" : "light") : opt.appearance;
    const name = fileName(id, ctx.title, opt.style);
    const fonts = await P.embeddedFonts();
    const slideDoc = P.doc(ctx.source, ctx.assetURLs, { appearance: dark, fonts });
    const articleDoc = P.doc(ctx.source, ctx.assetURLs, { kind: C.PAGE_ARTICLE, appearance: dark, fonts });
    assert(typeof takahashi === "boolean", "takahashi is a flag");
    return { takahashi, dark, name, fonts, slideDoc, articleDoc, tk: takahashi ? C.O_TAKAHASHI : 0 };
}

function buildText(id, ctx, env) {
    assert(typeof id === "string", "the id is a string");
    assert(env && typeof env.name === "string", "the environment has a name");
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    assert(typeof env.takahashi === "boolean", "the takahashi flag is a boolean");
    assert(env.tk === 0 || env.tk === C.O_TAKAHASHI, "tk is zero or the takahashi option");
    const { name, slideDoc, tk } = env;
    switch (id) {
        case "articleMarkdown": return { files: [[name, textBlob(C.textOutput(slideDoc, C.TEXT_ARTICLE_MD, 0), "text/markdown")]] };
        case "revisedMarkdown": return { files: [[name, textBlob(C.textOutput(slideDoc, C.TEXT_REVISED_MD, tk), "text/markdown")]] };
        case "narrationScript": return { files: [[name, textBlob(C.textOutput(slideDoc, C.TEXT_NARRATION, 0))]] };
        case "transcript": return { files: [[name, textBlob(C.textOutput(slideDoc, C.TEXT_TRANSCRIPT, 0))]] };
        case "promptText": return { files: [[name, textBlob(C.listener(ctx.source, C.LIST_REVISION_PROMPT))]] };
    }
    return null;
}

async function buildHTML(id, ctx, env) {
    assert(typeof id === "string", "the id is a string");
    assert(env && env.slideDoc !== undefined, "the environment has documents");
    assert(ctx && typeof ctx.assetURLs === "object", "the context has asset URLs");
    assert(typeof env.name === "string", "the environment has a name");
    assert(typeof env.takahashi === "boolean", "the takahashi flag is a boolean");
    const { name, slideDoc, articleDoc, takahashi } = env;
    switch (id) {
        case "interactiveHTML":
            return { files: [[name, textBlob(await singleFile(C.page(slideDoc, C.PAGE_SLIDES, P.slideOptions(takahashi)), ctx), "text/html")]] };
        case "articleHTML":
            return { files: [[name, textBlob(await singleFile(C.page(articleDoc, C.PAGE_ARTICLE, C.O_TOC), ctx), "text/html")]] };
        case "epub":
            return { files: [[name, await epub(ctx, P.doc(ctx.source, ctx.assetURLs, { kind: C.PAGE_ARTICLE, fonts: "" }))]] };
        case "subtitles": {
            await G.load();
            const m = await G.media(ctx);
            return { files: [[name, textBlob(G.captions(ctx, m, { takahashi }), "text/vtt")],
                [name.replace(/\.vtt$/, ".srt"), textBlob(G.captions(ctx, m, { takahashi, srt: true }), "application/x-subrip")]] };
        }
    }
    return null;
}

async function buildPackage(id, ctx, env) {
    assert(typeof id === "string", "the id is a string");
    assert(env && typeof env.name === "string", "the environment has a name");
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    assert(typeof ctx.assets === "object", "the context has assets");
    assert(name.length > 0, "the name is not empty");
    const name = env.name;
    switch (id) {
        case "presenterZIP": {
            const paths = [...C.listener(ctx.source, C.LIST_PUBLIC_ASSETS), ...C.listener(ctx.source, C.LIST_PRIVATE_ASSETS)];
            const { files, missing } = packageFiles(ctx, ctx.source, paths);
            return { files: [[name, await zipOf(files, now())]], notes: missing };
        }
        case "listenerZIP": {
            const { files, missing } = packageFiles(ctx, C.listener(ctx.source, C.LIST_LISTENER_MD), C.listener(ctx.source, C.LIST_PUBLIC_ASSETS));
            return { files: [[name, await zipOf(files, now())]], notes: missing };
        }
        case "projectZIP": return { files: [[name, await projectZip(ctx, await ctx.versions())]] };
    }
    return null;
}

function printSpec(id, opt, env) {
    assert(typeof id === "string", "the id is a string");
    assert(opt && typeof opt === "object", "the options are an object");
    assert(typeof env.takahashi === "boolean", "the takahashi flag is a boolean");
    assert(typeof env.dark === "string", "the appearance is a string");
    assert(Array.isArray(G.POSTER_SIZES), "the poster sizes are a list");
    const { takahashi, dark } = env;
    const letter = opt.paper === "letter" ? 1 : 0;
    return {
        slidesPDF: [G.LAYOUT_SLIDES, { takahashi, appearance: dark }],
        handoutPDF: [G.LAYOUT_HANDOUT, { takahashi, a: letter }],
        articlePDF: [G.LAYOUT_ARTICLE, { appearance: "light", a: letter }],
        posterPDF: [G.LAYOUT_POSTER, { appearance: "light", a: G.POSTER_SIZES.indexOf(opt.posterSize), b: opt.posterOrientation === "landscape" ? 1 : 0 }],
    }[id];
}

async function buildPrint(id, ctx, opt, env) {
    assert(typeof id === "string", "the id is a string");
    assert(env && typeof env.name === "string", "the environment has a name");
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    assert(opt && typeof opt === "object", "the options are an object");
    assert(typeof env.dark === "string", "the appearance is a string");
    if (!["slidesPDF", "handoutPDF", "articlePDF", "posterPDF"].includes(id)) return null;
    await G.load();
    const [kind, o] = printSpec(id, opt, env);
    const { html, notes } = await G.printHTML(ctx, kind, o);
    return { print: () => printPage(html), name: env.name, notes };
}

async function buildMedia(id, ctx, env, progress) {
    assert(typeof id === "string", "the id is a string");
    assert(env && typeof env.name === "string", "the environment has a name");
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    const { name, takahashi, dark } = env;
    assert(typeof takahashi === "boolean", "the takahashi flag is a boolean");
    assert(typeof dark === "string", "the appearance is a string");
    switch (id) {
        case "slidesPNG": case "slidesSVG": {
            await G.load();
            const { files, notes } = await (id === "slidesPNG" ? G.slidesPNG : G.slidesSVG)(ctx, { takahashi, appearance: dark }, progress);
            return { files: [[name, await zipOf(files, now())]], notes };
        }
        case "video": case "manimVideo":
            await G.load();
            return named(name, await V.video(ctx, { takahashi, appearance: dark }, id === "video" ? "video" : "manim", progress));
        case "narratedVideo": case "podcast":
            if (!(await Voice.installed())) return { reason: NO_VOICE };
            await G.load();
            return named(name, id === "podcast" ? await V.podcast(ctx, progress)
                : await V.video(ctx, { takahashi, appearance: dark }, "narrated", progress));
    }
    return null;
}

async function build(id, ctx, opt, progress) {
    assert(typeof id === "string", "the id is a string");
    assert(opt && typeof opt === "object", "the options are an object");
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    assert(byId[id] !== undefined, "the format is known");
    assert(progress === undefined || typeof progress === "function", "the progress is a function");
    const env = await buildEnv(id, ctx, opt);
    const text = buildText(id, ctx, env);
    if (text) return text;
    const html = await buildHTML(id, ctx, env);
    if (html) return html;
    const pack = await buildPackage(id, ctx, env);
    if (pack) return pack;
    const print = await buildPrint(id, ctx, opt, env);
    if (print) return print;
    return await buildMedia(id, ctx, env, progress);
}

// --- printing ------------------------------------------------------------------------

// Prints the pages of a page HTML (pages.printHTML) from a hidden frame.
async function printPage(html) {
    assert(typeof html === "string", "the page is a string");
    assert(document.body !== null, "the document has a body");
    assert(typeof URL.createObjectURL === "function", "the browser makes object URLs");
    assert(typeof setTimeout === "function", "the browser has timers");
    const frame = h("iframe", { title: "Print", style: { position: "fixed", left: "-10000px", top: "0", width: "1280px", height: "720px", border: "0" } });
    document.body.append(frame);
    const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
    await new Promise((res) => { frame.onload = res; frame.src = url; });
    const win = frame.contentWindow;
    assert(win !== null, "the frame has a window");
    try { await win.document.fonts.ready; } catch { /* no fonts */ }
    await Promise.all([...win.document.images].map((im) => im.complete ? 0 : new Promise((r) => { im.onload = im.onerror = r; })));
    await new Promise((r) => setTimeout(r, 200));
    win.focus();
    win.print();
    setTimeout(() => { frame.remove(); URL.revokeObjectURL(url); }, 2000);
}

// --- the sheet --------------------------------------------------------------------------

function style(sh) {
    assert(sh && typeof sh.ctx.style === "function", "the sheet has a style function");
    assert(sh.st !== undefined, "the sheet has a state");
    return sh.ctx.style();
}

function issuesFor(sh, id) {
    assert(Array.isArray(sh.diags), "the sheet has diagnostics");
    assert(typeof id === "string", "the format id is a string");
    return sh.diags.filter((d) => affects(d, id, style(sh)) && d.severity === "warning");
}

function selected(sh) {
    assert(Array.isArray(sh.diags), "the sheet has diagnostics");
    assert(typeof sh.st.choice === "string", "a choice is made");
    return sh.st.choice === "all" ? sh.diags : sh.diags.filter((d) => affects(d, sh.st.choice, style(sh)));
}

function weight(id) {
    assert(typeof id === "string", "the format id is a string");
    assert(WEIGHTS !== null, "the weights exist");
    return WEIGHTS[id] || 1;
}

function choiceRow(sh, id, title, label, sub, count, disabled) {
    assert(typeof id === "string" && typeof title === "string", "the row has an id and a title");
    assert(typeof sub === "string", "the row has a summary");
    assert(typeof label === "string", "the row has a label");
    assert(sh && sh.st && sh.body, "the sheet has a state and a body");
    assert(count === undefined || typeof count === "number", "the count is a number");
    const on = sh.st.choice === id;
    return h("button", {
        type: "button", class: "choice", role: "radio", "aria-checked": String(on), disabled: !!disabled,
        "aria-label": title, "aria-description": sub + (count ? ` Warnings: ${count}` : ""),
        onclick: () => { sh.st.choice = id; render(sh); sh.body.querySelector(`[data-id="${id}"]`)?.focus(); }, "data-id": id,
    }, h("span", { class: "dot", "aria-hidden": "true", text: on ? "◉" : "○" }),
        h("span", {}, h("span", { class: "name", text: title }), h("span", { class: "fmt", text: label }),
            h("span", { class: "sub", text: sub }), count ? h("span", { class: "warncount", text: `⚠ Warnings: ${count}` }) : null));
}

function renderTop(sh) {
    assert(sh && sh.body, "the sheet has a body");
    assert(Array.isArray(sh.diags), "the sheet has diagnostics");
    assert(sh.ctx && typeof sh.ctx.setStyle === "function", "the context sets the style");
    assert(sh.st !== undefined, "the sheet has a state");
    const warnCount = sh.diags.filter((x) => x.severity === "warning").length;
    assert(warnCount >= 0, "the warning count is not negative");
    sh.body.append(section(null,
        h("div", { role: "radiogroup", "aria-label": "Output" }, choiceRow(sh, "all", "All outputs", "ZIP", "Every format that the web version makes, in one ZIP file. The PDFs open the print dialog separately.", warnCount)),
        h("div", { class: "row" }, h("span", { class: "row-label", text: "Slide style" }),
            segmented("Slide style", [["normal", "Normal"], ["takahashi", "Takahashi"]], style(sh), (v) => { sh.ctx.setStyle(v); render(sh); })),
        footnote("Every format is free.")));
}

function formatSub(sh, f) {
    assert(f && typeof f.summary === "string", "the format has a summary");
    assert(typeof f.print === "boolean", "the print flag is a boolean");
    assert(sh && sh.ctx, "the sheet has a context");
    assert(typeof f.id === "string", "the format has an id");
    assert(typeof PRINT_NOTE === "string", "the print note is a string");
    let sub = f.summary;
    if (f.id === "slidesPDF") sub = `${style(sh) === "takahashi" ? "Takahashi" : "Normal"} slides. Change the style above.`;
    if (f.print) sub += " " + PRINT_NOTE;
    return sub;
}

function renderGroups(sh) {
    assert(sh && sh.body, "the sheet has a body");
    assert(GROUPS.length > 0, "there are groups");
    assert(sh.ctx && typeof sh.ctx.listenerPreview === "function", "the context previews the listener");
    assert(FORMATS.length > 0, "there are formats");
    assert(Array.isArray(sh.diags), "the sheet has diagnostics");
    for (const g of GROUPS) {
        const rows = FORMATS.filter((f) => f.group === g).map((f) => choiceRow(sh, f.id, f.name, f.label, formatSub(sh, f), issuesFor(sh, f.id).length));
        const extra = g === "Packages" ? h("div", { class: "row" }, h("button", { type: "button", class: "linkbtn", title: "See the slides and notes that a listener gets from the Listener package", onclick: () => sh.ctx.listenerPreview() }, "👥 Preview as a Listener")) : null;
        sh.body.append(section(g, h("div", { role: "radiogroup", "aria-label": g }, rows), extra));
    }
}

function renderChecks(sh) {
    assert(sh && sh.body, "the sheet has a body");
    assert(typeof sh.st.showIssues === "boolean", "showIssues is a flag");
    assert(sh.ctx && typeof sh.ctx.goToSource === "function", "the context goes to the source");
    assert(sh.d !== undefined || !sh.st.showIssues, "the dialog exists when issues are shown");
    const sel = selected(sh);
    assert(sel.length >= 0, "the selection has a length");
    const checks = [];
    if (sh.lintError) checks.push(h("div", { class: "row" }, h("span", { class: "status-warn", text: "⚠ " + sh.lintError })));
    else if (!sel.length) checks.push(h("div", { class: "row" }, h("span", { class: "status-ok", text: "✓ Ready to export" })));
    else {
        checks.push(h("div", { class: "row" }, h("span", { class: "status-warn", text: `⚠ Source checks to review: ${sel.length}` }),
            h("button", { type: "button", class: "button", "aria-expanded": String(sh.st.showIssues), onclick: () => { sh.st.showIssues = !sh.st.showIssues; render(sh); } }, sh.st.showIssues ? "Hide" : "Show")));
        checks.push(footnote("Export stays available. Marklove uses a clear fallback for each issue and keeps every word."));
        if (sh.st.showIssues) checks.push(h("div", {}, sel.map((x) => issueRow(x, sh.ctx.source, () => { sh.d.close(); sh.ctx.goToSource(x, true); }))));
    }
    sh.body.append(section("Source checks", ...checks));
}

function renderOptions(sh) {
    assert(sh && sh.body, "the sheet has a body");
    assert(POSTERS[sh.st.posterSize] !== undefined, "the poster size is known");
    const st = sh.st;
    assert(typeof st.appearance === "string" && typeof st.paper === "string", "the appearance and paper are strings");
    assert(typeof st.posterOrientation === "string", "the orientation is a string");
    assert(POSTERS[st.posterSize].length === 4, "a poster has four fields");
    const optBox = h("details", { class: "group", open: st.optionsOpen }, h("summary", { text: "Options" }),
        selectRow("Appearance", [["system", "From the Project"], ["light", "Light"], ["dark", "Dark"]], st.appearance, (v) => { st.appearance = v; }),
        selectRow("Paper", [["a4", "A4"], ["letter", "US Letter"]], st.paper, (v) => { st.paper = v; }),
        selectRow("Poster size", Object.entries(POSTERS).map(([k, v]) => [k, v[0]]), st.posterSize, (v) => { st.posterSize = v; render(sh); }),
        h("div", { class: "row" }, h("span", { class: "row-label", text: "Poster orientation" }),
            POSTERS[st.posterSize][1] === POSTERS[st.posterSize][2] ? h("span", { class: "row-hint", text: "Square" }) :
                segmented("Poster orientation", [["portrait", "Portrait"], ["landscape", "Landscape"]], st.posterOrientation, (v) => { st.posterOrientation = v; })));
    optBox.addEventListener("toggle", () => { st.optionsOpen = optBox.open; });
    sh.body.append(section(null, optBox));
}

function renderFoot(sh) {
    assert(sh && sh.body, "the sheet has a body");
    assert(sh.d !== undefined, "the dialog exists");
    assert(sh.ctx && typeof sh.ctx.speakerReady === "function", "the context starts Speaker Ready");
    assert(typeof sh.st === "object", "the state is an object");
    assert(typeof sh.st.error === "string" || sh.st.error === undefined, "the error is a string or unset");
    sh.body.append(section(null, h("div", { class: "row" }, h("button", { type: "button", class: "linkbtn", onclick: () => { sh.d.close(); sh.ctx.speakerReady(); } }, "Start Speaker Ready")),
        footnote("Present with the current slide, the next slide, private notes, and a timer. The audience window shows the slides only.")));
    if (sh.st.error) sh.body.append(section(null, h("div", { class: "row" }, h("span", { class: "status-bad", role: "alert", text: "⊗ " + sh.st.error }))));
}

function render(sh) {
    assert(sh && sh.body, "the sheet has a body");
    assert(sh.st && sh.ctx, "the sheet has a state and a context");
    assert(sh.diags !== undefined, "the sheet has diagnostics");
    assert(typeof sh.body.replaceChildren === "function", "the body is an element");
    const scroll = sh.d ? sh.d.body.scrollTop : 0;
    assert(typeof scroll === "number", "the scroll is a number");
    sh.body.replaceChildren();
    renderTop(sh);
    renderGroups(sh);
    renderChecks(sh);
    renderOptions(sh);
    renderFoot(sh);
    if (sh.d) sh.d.body.scrollTop = scroll;
}

async function runOne(sh, id, opt, progress, base, files) {
    assert(byId[id] !== undefined, "the format is known");
    assert(typeof base === "number" && Array.isArray(files), "the progress base and the files list are valid");
    assert(sh && sh.ctx, "the sheet has a context");
    assert(opt && typeof opt === "object", "the options are an object");
    assert(progress && progress.firstChild, "the progress has a bar");
    try {
        const r = await build(id, sh.ctx, opt, (p) => { progress.firstChild.value = base + p * weight(id); });
        if (r.reason) return { id, ok: false, reason: r.reason, notes: [] };
        if (r.print) {
            await r.print();
            return { id, ok: true, notes: ["The print dialog opened. Select Save as PDF. Suggested name: " + r.name, ...r.notes] };
        }
        files.push(...r.files);
        return { id, ok: true, files: r.files, notes: r.notes || [] };
    } catch (e) {
        const msg = e instanceof C.TooLarge ? e.message : "Marklove could not make the file. " + (e.message || e);
        return { id, ok: false, reason: msg, notes: [] };
    }
}

async function runFormats(sh, ids, opt, progress) {
    assert(Array.isArray(ids), "the ids are a list");
    assert(progress && progress.lastChild && progress.firstChild, "the progress has two children");
    assert(sh && sh.ctx, "the sheet has a context");
    assert(opt && typeof opt === "object", "the options are an object");
    assert(ids.every((id) => byId[id] !== undefined), "every id is known");
    const results = [];
    const files = [];
    let base = 0;
    for (const id of ids) {
        progress.lastChild.textContent = `Exporting ${byId[id].name}…`;
        progress.firstChild.value = base;
        await new Promise((r) => setTimeout(r, 0));
        results.push(await runOne(sh, id, opt, progress, base, files));
        base += weight(id);
    }
    return { results, files };
}

async function zipAll(sh, results, files, progress) {
    assert(Array.isArray(results) && Array.isArray(files), "results and files are lists");
    assert(progress && progress.lastChild, "the progress has a label");
    assert(sh && sh.ctx, "the sheet has a context");
    assert(results.length > 0, "there are results");
    assert(sh.ctx.title !== undefined, "the project has a title");
    let deliver = files;
    progress.lastChild.textContent = "Making the ZIP file…";
    const lines = [`Marklove exports for "${sh.ctx.title}"`, ""];
    for (const r of results) lines.push(`${byId[r.id].name}: ${r.ok ? "created" : "not created. " + r.reason}`, ...r.notes.map((n) => "  " + n));
    for (const f of FORMATS.filter((f) => f.print)) lines.push(`${f.name}: not in this ZIP. Select it in Export to print it as PDF.`);
    try {
        const zip = await zipOf([...files, ["README.txt", lines.join("\n") + "\n"]], now());
        deliver = [[`${S.safeFileName(sh.ctx.title)} – Marklove exports.zip`, zip]];
    } catch (e) { sh.st.error = "Export did not complete. " + e.message; }
    return deliver;
}

async function start(sh) {
    assert(sh && sh.st && sh.d, "the sheet is open");
    assert(typeof sh.st.choice === "string", "a choice is made");
    assert(typeof sh.body.replaceChildren === "function", "the body is an element");
    assert(Array.isArray(sh.d.buttons), "the dialog has buttons");
    assert(byId[sh.st.choice] !== undefined || sh.st.choice === "all", "the choice is a format or all");
    const st = sh.st;
    st.error = "";
    sh.ctx.setChoice(st.choice);
    const ids = st.choice === "all" ? FORMATS.filter((f) => !f.print).map((f) => f.id) : [st.choice];
    const progress = h("div", { class: "progress", role: "status" }, h("progress", { max: String(ids.reduce((n, id) => n + weight(id), 0)) }), h("span", { text: "Preparing…" }));
    sh.body.replaceChildren(progress);
    sh.d.buttons.forEach((b) => { b.disabled = b.textContent === "Export"; });
    await sh.ctx.beforeExport();
    const opt = { style: style(sh), appearance: st.appearance, paper: st.paper, posterSize: st.posterSize, posterOrientation: st.posterOrientation };
    const { results, files } = await runFormats(sh, ids, opt, progress);
    Voice.forget();
    const deliver = st.choice === "all" ? await zipAll(sh, results, files, progress) : files;
    for (const [n, b] of deliver) download(b, n);
    showResults(sh, results, deliver);
}

function showResults(sh, results, deliver) {
    assert(Array.isArray(results) && Array.isArray(deliver), "results and files are lists");
    assert(sh && sh.d && sh.body, "the sheet is open");
    assert(results.every((r) => byId[r.id] !== undefined), "every result names a known format");
    assert(results.every((r) => Array.isArray(r.notes)), "every result has notes");
    assert(Array.isArray(sh.d.buttons), "the dialog has buttons");
    const { body, d, st } = sh;
    body.replaceChildren();
    d.buttons.forEach((b) => { if (b.textContent === "Export") b.hidden = true; if (b.textContent === "Cancel") b.textContent = "Done"; b.disabled = false; });
    body.append(section(null, h("div", { class: "group" },
        deliver.length ? h("p", { text: "The browser saves the files in its downloads folder. Select a file to save it again." }) : null,
        deliver.map(([n, b]) => h("div", {}, h("button", { type: "button", class: "linkbtn", onclick: () => download(b, n) }, "⇩ " + n))))));
    body.append(section("Results", h("div", {}, results.map((r) => h("div", { class: "issue" },
        r.ok ? h("div", { class: "status-ok", text: "✓ " + byId[r.id].name }) : h("div", { class: "status-bad", text: `${byId[r.id].name}: not created` }),
        r.reason ? h("p", { class: "footnote", text: r.reason }) : null,
        r.notes.map((n) => h("p", { class: "footnote", text: n })))))));
    if (st.error) body.append(h("p", { class: "status-bad", role: "alert", text: st.error }));
    announce("Export complete.");
}

export function exportSheet(ctx) {
    assert(ctx && typeof ctx.source === "string", "the context has a source");
    assert(typeof ctx.style === "function", "the context has a style function");
    assert(typeof ctx.setChoice === "function", "the context sets the choice");
    assert(typeof ctx.beforeExport === "function", "the context prepares the export");
    assert(typeof ctx.setStyle === "function", "the context sets the style");
    const st = {
        choice: ctx.lastChoice || "all", appearance: "system", paper: US.includes(region()) ? "letter" : "a4",
        posterSize: US.includes(region()) ? "in48x36" : "a0", posterOrientation: "portrait", showIssues: false,
    };
    const { list: diags, error: lintError } = diagnostics(ctx.source, ctx.assetURLs);
    const sh = { ctx, st, diags, lintError, body: h("div", {}), d: undefined };
    sh.d = dialog({
        title: "Export", body: sh.body, wide: false,
        buttons: [{ label: "Cancel", cancel: true }, { label: "Export", primary: true, action: () => { start(sh); return false; } }],
    });
    render(sh);
    sh.body.querySelector('[aria-checked="true"]')?.focus();
}

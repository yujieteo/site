// Laid-out pages (PageRenderer): the core lays out the slides, the article,
// the handout and the poster, and draws each page as SVG (core/pagesvg.goose).
// This file measures the text for the core, draws the SVG into a canvas, and
// makes the PNG, SVG and PDF exports from the pages.

import * as C from "./core.js";
import * as P from "./preview.js";

export const LAYOUT_SLIDES = 0, LAYOUT_VIDEO = 1, LAYOUT_ARTICLE = 2, LAYOUT_HANDOUT = 3, LAYOUT_POSTER = 4;
export const LY_ALL = 0, LY_BASE = 1, LY_NEW = 2, LY_LEAVE = 3, LY_GROW = 4, LY_BG = 5;
export const POSTER_SIZES = ["a0", "a1", "in48x36", "in42x42"];

function assert(condition, message) {
    if (typeof message !== "string") throw new Error("assert needs a message");
    if (!condition) throw new Error(message);
}

const decoder = new TextDecoder();
let core = null;

// --- measurement --------------------------------------------------------------------

const canvas2d = document.createElement("canvas").getContext("2d");

// The advance of the text at 100 px (font is a CSS font with "100px").
function measure(text, font) {
    assert(typeof text === "string", "measure takes text");
    assert(typeof font === "string", "measure takes a font");
    canvas2d.font = font;
    const width = canvas2d.measureText(text).width;
    assert(Number.isFinite(width), "the width is finite");
    return width;
}

// Equation metrics at a font size of 1: which 0 width, 1 ascent, 2 descent,
// 3 the distance from the top of the box to the baseline. The box has the
// style of math_div in core/pagesvg.goose.
const mathCache = new Map();
let mathHost = null;
function mathMetric(latex, display, which) {
    assert(typeof latex === "string", "math takes a string");
    assert(which === 0 || which === 1 || which === 2 || which === 3, "which is a metric index");
    assert(display === 0 || display === 1, "display is 0 or 1");
    const key = display + "\n" + latex;
    assert(mathCache instanceof Map, "the math cache is a map");
    let m = mathCache.get(key);
    if (!m) {
        if (!mathHost) {
            mathHost = document.createElement("div");
            mathHost.setAttribute("aria-hidden", "true");
            mathHost.style.cssText = "position:absolute;left:-10000px;top:0;visibility:hidden";
            document.body.append(mathHost);
        }
        const box = document.createElement("div");
        box.style.cssText = "font-family:KpMath,math;line-height:0;white-space:nowrap;width:max-content;font-size:100px";
        box.innerHTML = C.math(latex, display === 1);
        const base = document.createElement("span");
        base.style.cssText = "display:inline-block;width:0;height:0";
        box.append(base);
        mathHost.append(box);
        // Block math puts the baseline mark on a new line: measure it inline.
        // In the page, the box of block math starts at the top of the math.
        const el = box.querySelector("math") || box.firstElementChild;
        if (el && display === 1) el.style.display = "inline math";
        const b = box.getBoundingClientRect(), r = el ? el.getBoundingClientRect() : b;
        const y = base.getBoundingClientRect().bottom;
        m = el ? [r.width / 100, (y - r.top) / 100, (r.bottom - y) / 100, (y - (display === 1 ? r.top : b.top)) / 100] : [-1, -1, -1, -1];
        box.remove();
        assert(m.every(Number.isFinite), "a metric is finite");
        mathCache.set(key, m);
    }
    assert(m.length === 4, "a metric has four numbers");
    return m[which];
}

function loadFace([family, , style, weight]) {
    assert(typeof weight === "string", "a face has a weight");
    assert(typeof family === "string", "a face has a family");
    return Promise.all(weight.split(" ").map(weightLoader(family, style)));
}

function weightLoader(family, style) {
    assert(typeof family === "string", "a family is a string");
    assert(typeof style === "string", "a style is a string");
    return (w) => {
        assert(typeof w === "string", "a weight is a string");
        assert(w.length >= 0, "a weight has a length");
        return document.fonts.load(`${style} ${w} 16px "${family}"`).catch(() => null);
    };
}

// The fonts of the pages must be ready before the core measures text.
async function loadFonts() {
    const st = document.createElement("style");
    st.textContent = P.faceCSS(P.fontURL, P.PAGE_FACES);
    assert(Array.isArray(P.PAGE_FACES), "the page faces are a list");
    assert(st.textContent.length > 0, "the font style is not empty");
    document.head.append(st);
    await Promise.all(P.PAGE_FACES.map(loadFace));
}

export async function load() {
    assert(typeof C.instance === "function", "the core can be started");
    if (core) return;
    await loadFonts();
    core = await C.instance({ mlMeasure: measure, mlMath: mathMetric });
    assert(typeof core === "function", "the core is a function");
}

const text = (name, inputs, ...ints) => {
    assert(typeof name === "string", "a core call has a name");
    assert(Array.isArray(inputs), "a core call has a list of inputs");
    return decoder.decode(core(name, inputs, ...ints));
};

// --- media ----------------------------------------------------------------------------

const isVideo = (path) => {
    assert(typeof path === "string", "a path is a string");
    assert(path.length >= 0, "a path has a length");
    return /\.(mp4|m4v|mov|webm)$/i.test(path);
};

function videoElement(blob) {
    assert(blob instanceof Blob, "a video comes from a blob");
    assert(typeof URL.createObjectURL === "function", "object URLs exist");
    const v = document.createElement("video");
    v.muted = true;
    v.preload = "auto";
    v.src = URL.createObjectURL(blob);
    return new Promise((res) => {
        assert(typeof res === "function", "a promise resolves");
        v.onloadeddata = () => { assert(v.readyState >= 2, "a loaded video has data"); res(v); };
        v.onerror = () => { assert(typeof res === "function", "the promise still resolves"); res(null); };
    });
}

const toDataURL = (blob) => {
    assert(blob instanceof Blob, "a data URL comes from a blob");
    assert(typeof FileReader === "function", "files can be read");
    return new Promise((res) => {
        assert(typeof res === "function", "a promise resolves");
        const r = new FileReader();
        r.onload = () => { assert(typeof r.result === "string", "the data URL is text"); res(r.result); };
        r.readAsDataURL(blob);
    });
};

// The sizes of the images and videos (argument 6), and the data: URLs that
// the SVG pages use: an image as it is, a video as its first frame.
export async function media(ctx) {
    assert(ctx && typeof ctx.assetURLs === "object", "media needs the asset URLs");
    assert(ctx.assets !== null && typeof ctx.assets === "object", "media needs the assets");
    const paths = Object.keys(ctx.assetURLs);
    const sizes = [], urls = [];
    for (const path of paths) {
        const blob = ctx.assets[path];
        let url = "";
        if (!blob) { urls.push(url); continue; }
        try {
            if (isVideo(path)) {
                const v = await videoElement(blob);
                if (v) {
                    const c = document.createElement("canvas");
                    c.width = v.videoWidth; c.height = v.videoHeight;
                    c.getContext("2d").drawImage(v, 0, 0);
                    url = c.toDataURL("image/jpeg", 0.9);
                    sizes.push(`${path}\t${v.videoWidth}\t${v.videoHeight}\n`);
                    URL.revokeObjectURL(v.src);
                }
            } else {
                const bm = await createImageBitmap(blob);
                sizes.push(`${path}\t${bm.width}\t${bm.height}\n`);
                bm.close();
                url = await toDataURL(blob);
            }
        } catch { url = ""; }
        urls.push(url);
    }
    assert(urls.length === paths.length, "each asset has one URL");
    return { sizes: sizes.join(""), urls };
}

// --- layout and drawing ----------------------------------------------------------------

// Lays out the document. The core keeps the pages for pageSVG and the
// exports below. durations: "sentence\tseconds" lines for the video.
// warnings: the layout warnings, one string each.
export function layout(ctx, m, kind, { takahashi = false, appearance = "", a = 0, b = 0, durations = "" } = {}) {
    assert(typeof m.sizes === "string", "layout needs the media sizes");
    assert(typeof ctx.source === "string", "layout needs the source");
    const args = C.docArgs({ source: ctx.source, assets: ctx.assetURLs, appearance });
    const opts = (takahashi ? C.O_TAKAHASHI : 0) | C.O_NARRATION | C.O_PUBLIC_NOTES;
    const r = JSON.parse(text("ml_layout", [...args, m.sizes, durations], kind, opts, a, b));
    r.warnings = r.warnings.split("\n").filter(Boolean);
    assert(Array.isArray(r.pages), "layout returns pages");
    return r;
}

// The narration cues of the podcast, with the real sentence lengths.
export function podcast(ctx, durations) {
    assert(typeof ctx.source === "string", "the podcast needs the source");
    assert(typeof ctx.assetURLs === "object", "the podcast needs the asset URLs");
    const args = C.docArgs({ source: ctx.source, assets: ctx.assetURLs });
    return JSON.parse(text("ml_podcast", [...args, "", durations], C.O_NARRATION));
}

export const pageSVG = (page, step, layer = LY_ALL, progress = 1, scale = 1) => {
    assert(Number.isInteger(page) && page >= 0, "a page is an index");
    assert(Number.isFinite(scale) && scale > 0, "the scale is positive");
    return text("ml_page_svg", [], page, step, layer, progress, scale);
};

// Puts the fonts and the media into an SVG page, so that it draws alone.
export function resolve(svg, m, fonts) {
    assert(typeof svg === "string", "resolve needs an SVG");
    assert(Array.isArray(m.urls), "resolve needs the URLs");
    assert(svg.length > 0, "an SVG page is not empty");
    return svg.replace("/*ml-fonts*/", fonts)
        .replace(/href="(asset|poster):(-?\d+)"/g, (_, kind, i) => {
            assert(kind === "asset" || kind === "poster", "a link is an asset or a poster");
            assert(Number.isInteger(+i), "a link has an index");
            return `href="${m.urls[+i] || ""}"`;
        });
}

// Draws an SVG page into a new canvas of w × h pixels.
export async function raster(svg, w, h) {
    assert(typeof svg === "string", "raster needs an SVG");
    assert(w > 0 && h > 0, "raster needs a size");
    const img = new Image();
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    await img.decode();
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    c.getContext("2d").drawImage(img, 0, 0, w, h);
    assert(c.width === w && c.height === h, "the canvas has the asked size");
    return c;
}

const toBlob = (c, type) => {
    assert(c instanceof HTMLCanvasElement, "a blob comes from a canvas");
    assert(typeof type === "string", "a blob has a type");
    return new Promise((res) => c.toBlob(res, type));
};

// --- exports ---------------------------------------------------------------------------

// "Slide 01.png": at least two digits (SlideImageExporter).
const slideName = (i, n, ext) => {
    assert(Number.isInteger(i) && i >= 0, "a slide is an index");
    assert(Number.isInteger(n) && n > i, "the count is above the index");
    return slideNameOf(i, n, ext);
};
const slideNameOf = (i, n, ext) => {
    assert(typeof ext === "string", "a slide name has an extension");
    assert(n >= 1, "there is at least one slide");
    return slideNameText(i, n, ext);
};
const slideNameText = (i, n, ext) => {
    assert(i < n, "the slide is among the slides");
    assert(ext.length > 0, "the extension is not empty");
    return `Slide ${String(i + 1).padStart(Math.max(2, String(n).length), "0")}.${ext}`;
};

function descriptions(pages, ext) {
    assert(Array.isArray(pages), "descriptions need pages");
    assert(typeof ext === "string", "descriptions need an extension");
    return pages.map((p, i) => {
        assert(typeof p === "object", "a page is an object");
        assert(i < pages.length, "the index is in range");
        return slideName(i, pages.length, ext).replace(/\.\w+$/, "") + "\n" + p.text;
    }).join("\n\n") + "\n";
}

// One PNG image for each slide, 1920 pixels wide, with Descriptions.txt.
// Returns {files, notes}.
export async function slidesPNG(ctx, opt, progress) {
    assert(typeof ctx === "object", "the PNG export needs a context");
    assert(typeof opt === "object", "the PNG export needs options");
    assert(!progress || typeof progress === "function", "progress is a function");
    const m = await media(ctx);
    const fonts = await P.embeddedFonts(P.PAGE_FACES);
    const { pages, warnings } = layout(ctx, m, LAYOUT_SLIDES, opt);
    const files = [];
    for (let i = 0; i < pages.length; i++) {
        progress?.(i / pages.length);
        const s = 1920 / pages[i].width;
        const w = 1920, hgt = Math.round(pages[i].height * s);
        files.push([slideName(i, pages.length, "png"), await toBlob(await raster(resolve(pageSVG(i, -1, LY_ALL, 1, s), m, fonts), w, hgt), "image/png")]);
    }
    files.push(["Descriptions.txt", descriptions(pages, "png")]);
    assert(files.length === pages.length + 1, "each slide has a file");
    return { files, notes: warnings };
}

// One SVG file for each slide. The text, photos, equations and plots are
// drawn alone and traced into vector shapes (SlideImageExporter.svg).
// Returns {files, notes}.
export async function slidesSVG(ctx, opt, progress) {
    assert(typeof ctx === "object", "the SVG export needs a context");
    assert(typeof opt === "object", "the SVG export needs options");
    assert(!progress || typeof progress === "function", "progress is a function");
    const m = await media(ctx);
    const fonts = await P.embeddedFonts(P.PAGE_FACES);
    const { pages, warnings } = layout(ctx, m, LAYOUT_SLIDES, opt);
    const files = [];
    for (let i = 0; i < pages.length; i++) {
        progress?.(i / pages.length);
        let svg = text("ml_export_svg", [], i);
        const regions = JSON.parse(text("ml_regions", []));
        const traced = [];
        for (let k = 0; k < regions.length; k++) {
            const r = regions[k];
            const c = await raster(resolve(text("ml_region_svg", [], k), m, fonts), r.width, r.height);
            const px = c.getContext("2d").getImageData(0, 0, r.width, r.height).data;
            traced.push(text("ml_trace_arg", [new Uint8Array(px.buffer), r.label], r.width, r.height, r.colors, r.minArea, r.tolerance, r.x, r.y, r.scale));
        }
        svg = svg.replace(/<!--ml-region (\d+)-->\n/g, (_, k) => traced[+k] || "");
        files.push([slideName(i, pages.length, "svg"), new Blob([svg], { type: "image/svg+xml" })]);
    }
    files.push(["Descriptions.txt", descriptions(pages, "svg")]);
    assert(files.length === pages.length + 1, "each slide has a file");
    return { files, notes: warnings };
}

// The pages of a PDF as one HTML page for the print dialog: each page is an
// SVG image at its own paper size. Returns {html, notes}.
export async function printHTML(ctx, kind, opt) {
    assert(typeof ctx.title === "string", "the print page needs a title");
    assert(Number.isInteger(kind), "the layout kind is an integer");
    const m = await media(ctx);
    const urls = m.urls.slice();
    Object.values(ctx.assetURLs).forEach((u, i) => {
        assert(i < urls.length, "each asset has a URL slot");
        assert(typeof u === "string", "an asset URL is a string");
        if (!isVideo(Object.keys(ctx.assetURLs)[i])) urls[i] = u;
    });
    const { pages, warnings } = layout(ctx, m, kind, opt);
    const w = pages[0]?.width || 960, hgt = pages[0]?.height || 540;
    const body = pages.map((p, i) => {
        assert(typeof p === "object", "a page is an object");
        assert(i < pages.length, "the index is in range");
        return resolve(pageSVG(i, -1), { urls }, "").replace(/^<svg /, `<svg class="page" `);
    }).join("");
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${ctx.title.replace(/[<&]/g, "")}</title>
<style>${P.faceCSS(P.fontURL, P.PAGE_FACES)}@page{size:${w}pt ${hgt}pt;margin:0}html,body{margin:0;padding:0}
svg.page{display:block;width:${w}pt;height:${hgt}pt;break-after:page;page-break-after:always}
svg.page:last-child{break-after:auto;page-break-after:auto}</style></head><body>${body}</body></html>`;
    return { html, notes: warnings };
}

// The captions of the video (WebVTT, or SRT when srt), with the real sentence lengths.
export function captions(ctx, m, { takahashi = false, durations = "", srt = false } = {}) {
    assert(typeof m.sizes === "string", "captions need the media sizes");
    assert(typeof ctx.source === "string", "captions need the source");
    const args = C.docArgs({ source: ctx.source, assets: ctx.assetURLs });
    return text("ml_text", [...args, m.sizes, durations], srt ? C.TEXT_SRT : C.TEXT_VTT, takahashi ? C.O_TAKAHASHI : 0);
}

// The start of an MP4 file (core/video.goose). The samples follow it.
export const mp4Head = (inputs, ...ints) => {
    assert(Array.isArray(inputs), "the MP4 head needs a list of inputs");
    assert(core !== null, "the core is loaded");
    return core("ml_mp4", inputs, ...ints);
};

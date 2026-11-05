// Pages from the core: Preview, Present, Speaker Ready and the listener
// preview (PreviewScreen, SpeakerReadyView, ListenerPreviewView).

import * as C from "./core.js";
import { h, dialog, segmented, announce } from "./ui.js";

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

export const parts = { style: "", runtime: "", articleStyle: "", articleScript: "", fonts: "" };

const FACES = [
    ["Courier Prime", "CourierPrime-Regular.woff2", "normal", "400"],
    ["Courier Prime", "CourierPrime-Bold.woff2", "normal", "700"],
    ["Courier Prime", "CourierPrime-Italic.woff2", "italic", "400"],
    ["Courier Prime", "CourierPrime-BoldItalic.woff2", "italic", "700"],
    ["KpMath", "KpMath-Light.otf", "normal", "400"],
    ["Courier Prime Sans", "CourierPrimeSans-Regular.woff2", "normal", "400"],
    ["Courier Prime Sans", "CourierPrimeSans-Bold.woff2", "normal", "700"],
];

// The laid-out pages (web/pages.js) also use Libre Baskerville for the slides.
export const PAGE_FACES = [
    ["Libre Baskerville", "LibreBaskerville-Variable.ttf", "normal", "400 700"],
    ["Libre Baskerville", "LibreBaskerville-Italic-Variable.ttf", "italic", "400 700"],
    ...FACES,
];

assert(FACES.length > 0, "there are faces");
assert(PAGE_FACES.length === FACES.length + 2, "page faces add two");
assert(Object.keys(parts).length === 5, "there are five parts");

export function faceCSS(url, faces = FACES) {
    assert(typeof url === "function", "url is a function");
    assert(Array.isArray(faces) && faces.length > 0, "faces are a list");
    return faces.map(([family, file, style, weight]) => {
        assert(typeof file === "string" && file.includes("."), "a face has a file");
        assert(typeof family === "string" && family.length > 0, "a face has a family");
        const format = file.endsWith(".woff2") ? "woff2" : file.endsWith(".ttf") ? "truetype" : "opentype";
        return `@font-face{font-family:"${family}";src:url(${url(file)}) format("${format}");font-style:${style};font-weight:${weight};font-display:swap}\n`;
    }).join("");
}

export const fontURL = (f) => {
    assert(typeof f === "string" && f.length > 0, "a font file is named");
    assert(typeof location.href === "string", "the page has an address");
    return new URL("fonts/" + f, location.href).href;
};

export async function loadParts() {
    assert(typeof fetch === "function", "fetch exists");
    const get = (p) => {
        assert(typeof p === "string" && p.length > 0, "a part has a path");
        assert(p.endsWith(".css") || p.endsWith(".js"), "a part is a style or a script");
        return fetch(p).then((r) => {
            assert(r !== null && typeof r === "object", "a response is given");
            if (!r.ok) throw new Error(p);
            return r.text();
        });
    };
    [parts.style, parts.runtime, parts.articleStyle, parts.articleScript] =
        await Promise.all([get("style.css"), get("runtime.js"), get("article.css"), get("article.js")]);
    // The preview loads the fonts from the app folder: a short style sheet.
    parts.fonts = faceCSS(fontURL);
    assert(parts.style.length > 0 && parts.runtime.length > 0, "the page parts are loaded");
}

// The fonts as data: URLs, so that an exported file works offline (HTMLExporter.fontFaces).
const embedded = new Map();
export async function embeddedFonts(faces = FACES) {
    assert(Array.isArray(faces) && faces.length > 0, "faces are a list");
    assert(embedded instanceof Map, "embedded fonts are cached in a map");
    if (embedded.has(faces)) return embedded.get(faces);
    const urls = {};
    for (const [, file] of faces) {
        const blob = await (await fetch("fonts/" + file)).blob();
        const mime = file.endsWith(".woff2") ? "font/woff2" : file.endsWith(".ttf") ? "font/ttf" : "font/otf";
        const b64 = await new Promise((res) => {
            assert(typeof res === "function", "res is a function");
            assert(blob instanceof Blob, "a font is a blob");
            const r = new FileReader();
            r.onload = () => {
                assert(typeof r.result === "string", "a data URL is text");
                assert(r.result.includes(","), "a data URL has a payload");
                res(r.result.split(",")[1]);
            };
            r.readAsDataURL(blob);
        });
        assert(typeof b64 === "string", "the payload is text");
        urls[file] = `data:${mime};base64,${b64}`;
    }
    embedded.set(faces, faceCSS((f) => {
        assert(typeof urls[f] === "string", "every face was fetched");
        assert(typeof f === "string", "a font file is named");
        return urls[f];
    }, faces));
    return embedded.get(faces);
}

// A document for the core.
export function doc(source, assets, { kind = C.PAGE_SLIDES, appearance = "", fonts = parts.fonts } = {}) {
    assert(typeof source === "string", "the source is text");
    assert(assets !== null && typeof assets === "object", "assets are an object");
    const article = kind === C.PAGE_ARTICLE;
    return { source, assets, fonts, style: article ? parts.articleStyle : parts.style, script: article ? parts.articleScript : parts.runtime, appearance };
}

export function slideOptions(takahashi) {
    const opts = (takahashi ? C.O_TAKAHASHI : 0) | C.O_NARRATION | C.O_PUBLIC_NOTES;
    assert(Number.isInteger(opts), "options are a bit set");
    assert(opts >= 0, "options are not negative");
    return opts;
}

// --- a page in a frame ------------------------------------------------------------

// Shows HTML in a frame from a blob: URL, so that the runtime can use the
// address (#slide). The frame changes only when the new page has loaded.
export class PageFrame {
    constructor(host, title, { chrome = true } = {}) {
        assert(host !== null && typeof host === "object", "a frame has a host");
        assert(typeof title === "string" && title.length > 0, "a frame has a title");
        this.host = host;
        this.title = title;
        this.chrome = chrome;
        this.frame = null;
        this.url = null;
        this.html = "";
        this.onload = null;
        this.onkey = null;
    }

    show(html, hash = "", keepScroll = false) {
        assert(typeof html === "string", "the page is text");
        assert(typeof hash === "string", "the hash is text");
        this.html = html;
        const url = URL.createObjectURL(new Blob([html], { type: "text/html" }));
        const f = document.createElement("iframe");
        f.title = this.title;
        const old = this.frame, oldURL = this.url;
        let scroll = 0;
        if (keepScroll && old) { try { scroll = old.contentWindow.scrollY; } catch { scroll = 0; } }
        if (old) { f.style.position = "absolute"; f.style.visibility = "hidden"; f.style.inset = "0"; }
        f.addEventListener("load", () => {
            assert(f.isConnected, "the frame is in the page");
            assert(typeof this.chrome === "boolean", "chrome is a flag");
            try {
                const d = f.contentDocument;
                if (!this.chrome) {
                    const st = d.createElement("style");
                    st.textContent = ".bar{display:none!important}.deck{padding:8px!important}.skip{display:none}";
                    d.head.append(st);
                }
                if (scroll) f.contentWindow.scrollTo(0, scroll);
                d.addEventListener("keydown", (e) => {
                    assert(e !== null && typeof e === "object", "a key event is given");
                    assert(typeof e.key === "string", "a key has a name");
                    return this.onkey && this.onkey(e);
                });
            } catch { /* not the same origin */ }
            if (old) { old.remove(); f.style.position = ""; f.style.visibility = ""; f.style.inset = ""; }
            if (oldURL) URL.revokeObjectURL(oldURL);
            this.onload && this.onload(f);
        }, { once: true });
        f.src = url + (hash ? "#" + hash : "");
        this.host.append(f);
        this.frame = f;
        this.url = url;
    }

    // The id of the slide that the runtime shows.
    currentId() {
        assert(this.host !== null, "the frame has a host");
        assert(typeof this.html === "string", "the page is text");
        try { return decodeURIComponent(this.frame.contentWindow.location.hash.slice(1)); } catch { return ""; }
    }

    key(name, times = 1) {
        assert(typeof name === "string" && name.length > 0, "a key is named");
        assert(Number.isInteger(times), "times is a whole number");
        try {
            const d = this.frame.contentDocument;
            for (let i = 0; i < times; i++) d.dispatchEvent(new KeyboardEvent("keydown", { key: name, bubbles: true }));
        } catch { /* not loaded */ }
    }

    clear() {
        assert(this.host !== null, "the frame has a host");
        assert(this.frame === null || this.url !== null, "a shown frame has an address");
        if (this.frame) this.frame.remove();
        if (this.url) URL.revokeObjectURL(this.url);
        this.frame = null;
        this.url = null;
    }
}

// The slide that contains a UTF-16 offset of the source.
export function slideAt(outline, offset) {
    assert(Array.isArray(outline) && outline.length > 0, "an outline has slides");
    assert(outline[0] !== null && typeof outline[0] === "object", "a slide is an object");
    let best = outline[0];
    for (const s of outline) {
        if (s.s0 <= offset && offset < s.s1) return s;
        if (s.s0 <= offset) best = s;
    }
    assert(best !== undefined, "a slide is found");
    return best;
}

// --- Speaker Ready -----------------------------------------------------------------

const isForward = (k) => {
    assert(typeof k === "string", "a key is a name");
    assert(k !== "", "a key is not empty");
    return ["ArrowRight", " ", "PageDown"].includes(k);
};
const isBack = (k) => {
    assert(typeof k === "string", "a key is a name");
    assert(k !== "", "a key is not empty");
    return ["ArrowLeft", "PageUp"].includes(k);
};

function sendKey(win, key) {
    assert(win !== null && typeof win === "object", "a window is given");
    assert(typeof key === "string" && key.length > 0, "a key is named");
    win.document.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true }));
}

function speakerTimer() {
    const t = { started: 0, elapsed: 0, id: 0 };
    assert(t.started === 0, "the timer starts stopped");
    const time = h("span", { class: "time", role: "timer" }, "0:00:00");
    const fmt = (s) => {
        assert(Number.isFinite(s) && s >= 0, "seconds are a count");
        assert(Number.isInteger(s), "seconds are whole");
        return `${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
    };
    const tick = () => {
        assert(t.started >= 0, "the start time is not negative");
        const s = Math.floor((t.elapsed + (t.started ? Date.now() - t.started : 0)) / 1000);
        assert(Number.isFinite(s), "the time is a number");
        time.textContent = fmt(s);
        time.setAttribute("aria-label", "Time: " + fmt(s));
    };
    const startBtn = h("button", { type: "button", class: "button primary", onclick: () => {
        assert(t.elapsed >= 0, "elapsed time is not negative");
        assert(t.started >= 0, "the start time is not negative");
        if (t.started) { t.elapsed += Date.now() - t.started; t.started = 0; clearInterval(t.id); startBtn.textContent = "Start"; }
        else { t.started = Date.now(); t.id = setInterval(tick, 1000); startBtn.textContent = "Pause"; }
        tick();
    } }, "Start");
    const resetBtn = h("button", { type: "button", class: "button", onclick: () => {
        assert(t.elapsed >= 0, "elapsed time is not negative");
        assert(t.started >= 0, "the start time is not negative");
        t.elapsed = 0; if (t.started) t.started = Date.now(); tick();
    } }, "Reset");
    assert(startBtn !== null && resetBtn !== null, "the buttons exist");
    return { time, startBtn, resetBtn, tick, stop: () => {
        assert(t.elapsed >= 0, "elapsed time is not negative");
        assert(t.started >= 0, "the start time is not negative");
        clearInterval(t.id);
    } };
}

function counterText(st) {
    const sl = st.outline[st.index];
    assert(st.index >= 0 && st.index < st.outline.length, "the slide index is in range");
    assert(Number.isInteger(st.step), "the step is a whole number");
    return `Slide ${st.index + 1} of ${st.outline.length}` + (sl.steps > 1 ? `, step ${st.step + 1} of ${sl.steps}` : "");
}

function speakerFrames(st) {
    assert(st.outline.length > 0, "there are slides");
    assert(typeof st.html === "string", "the page is text");
    const curHost = h("div", { style: { position: "relative" } });
    const nextHost = h("div", { style: { position: "relative" } });
    const v = {
        curHost, nextHost,
        cur: new PageFrame(curHost, "Current slide", { chrome: false }),
        nxt: new PageFrame(nextHost, "Next slide", { chrome: false }),
        counter: h("span", { class: "counter", role: "status" }),
        nextLabel: h("p", { class: "cap-label", text: "Next" }),
        last: h("p", { class: "footnote", text: "This is the last slide.", hidden: true }),
        notes: h("div", { class: "notes", tabindex: "0", "aria-label": "Private notes" }),
    };
    v.nxt.onload = () => {
        assert(st.outline.length > 0, "there are slides");
        const n = st.outline[st.index + 1];
        assert(st.index >= 0, "the slide index is not negative");
        if (n && n.steps > 1) v.nxt.key("ArrowRight", n.steps - 1);
    };
    v.cur.onload = () => {
        assert(Number.isInteger(st.step), "the step is a whole number");
        assert(st.outline.length > 0, "there are slides");
        v.cur.key("ArrowRight", st.step);
    };
    return v;
}

function speakerUpdate(st, v) {
    const s = st.outline[st.index];
    assert(st.index >= 0 && st.index < st.outline.length, "the slide index is in range");
    assert(s !== undefined, "the slide exists");
    v.counter.textContent = counterText(st);
    v.notes.textContent = s.notes || "No notes for this slide.";
    const n = st.outline[st.index + 1];
    v.nextLabel.hidden = v.nextHost.hidden = !n;
    v.last.hidden = !!n;
    if (n) v.nxt.show(st.html, n.id);
}

function speakerStep(st, v, delta) {
    const s = st.outline[st.index];
    assert(delta === 1 || delta === -1, "a move is one step");
    assert(s !== undefined, "the slide exists");
    let moved = false;
    if (delta > 0) {
        if (st.step < s.steps - 1) { st.step++; moved = true; }
        else if (st.index < st.outline.length - 1) { st.index++; st.step = 0; moved = true; speakerUpdate(st, v); }
    } else {
        if (st.step > 0) { st.step--; moved = true; }
        else if (st.index > 0) { st.index--; st.step = st.outline[st.index].steps - 1; moved = true; speakerUpdate(st, v); }
    }
    return moved;
}

function speakerGo(st, v, delta, toCur = true, toAudience = true) {
    assert(delta === 1 || delta === -1, "a move is one step");
    assert(st.outline.length > 0, "there are slides");
    if (!speakerStep(st, v, delta)) return;
    const k = delta > 0 ? "ArrowRight" : "ArrowLeft";
    if (toCur) v.cur.key(k);
    if (toAudience && st.audience && !st.audience.closed) {
        try { sendKey(st.audience, k); } catch { /* closed */ }
    }
    v.counter.textContent = counterText(st);
}

function speakerKeys(go, v) {
    assert(typeof go === "function", "go is a function");
    assert(v.cur !== null, "the current frame exists");
    v.cur.onkey = (e) => {
        assert(e !== null && typeof e === "object", "a key event is given");
        assert(typeof e.key === "string", "a key has a name");
        if (!e.isTrusted) return;
        if (isForward(e.key)) go(1, false, true);
        else if (isBack(e.key)) go(-1, false, true);
    };
    return (e) => {
        assert(e !== null && typeof e === "object", "a key event is given");
        assert(typeof e.key === "string", "a key has a name");
        if (isForward(e.key)) { e.preventDefault(); go(1); }
        else if (isBack(e.key)) { e.preventDefault(); go(-1); }
    };
}

function openAudience(st, go) {
    assert(st.outline.length > 0, "there are slides");
    assert(typeof go === "function", "go is a function");
    const url = URL.createObjectURL(new Blob([st.html], { type: "text/html" }));
    st.audience = window.open(url + "#" + encodeURIComponent(st.outline[st.index].id), "marklove-audience");
    const audience = st.audience;
    if (!audience) { announce("The browser blocked the audience window. Allow pop-ups for this page."); return; }
    audience.addEventListener("load", () => {
        assert(Number.isInteger(st.step), "the step is a whole number");
        assert(typeof audience.closed === "boolean", "the audience window has a state");
        try {
            if (st.step) for (let i = 0; i < st.step; i++) sendKey(audience, "ArrowRight");
            // Keys in the audience window move the speaker view too.
            audience.document.addEventListener("keydown", (e) => {
                assert(e !== null && typeof e === "object", "a key event is given");
                assert(typeof e.key === "string", "a key has a name");
                if (!e.isTrusted) return;
                if (isForward(e.key)) go(1, true, false);
                else if (isBack(e.key)) go(-1, true, false);
            });
        } catch { /* closed */ }
        setTimeout(() => {
            assert(typeof url === "string", "the url is text");
            assert(url.startsWith("blob:"), "the url is a blob address");
            URL.revokeObjectURL(url); }, 5000);
    }, { once: true });
}

function speakerBody(v, tm, go) {
    assert(typeof go === "function", "go is a function");
    assert(tm.time !== null, "the timer exists");
    const prevBtn = h("button", { type: "button", class: "button", "aria-label": "Previous Slide", title: "Previous slide", onclick: () => {
        assert(typeof go === "function", "go is a function");
        assert(v.counter !== null, "the counter exists");
        go(-1);
    } }, "◀");
    const nextBtn = h("button", { type: "button", class: "button", "aria-label": "Next Slide", title: "Next slide", onclick: () => {
        assert(typeof go === "function", "go is a function");
        assert(v.counter !== null, "the counter exists");
        go(1);
    } }, "▶");
    const body = h("div", { class: "speaker" },
        h("div", { class: "col" }, v.curHost, h("div", { class: "ctl" }, prevBtn, v.counter, nextBtn)),
        h("div", { class: "col" }, h("div", { class: "timer" }, tm.time, tm.startBtn, tm.resetBtn), v.nextLabel, v.nextHost, v.last,
            h("p", { class: "cap-label", text: "Notes" }), v.notes));
    return { body, prevBtn };
}

function speakerDialog(st, v, tm, go, keys) {
    assert(typeof keys === "function", "keys is a function");
    assert(typeof go === "function", "go is a function");
    const { body, prevBtn } = speakerBody(v, tm, go);
    const dlg = dialog({
        title: "Speaker Ready", body, buttons: [
            { label: "End", cancel: true },
            { label: "Open Audience Window", action: () => {
                assert(typeof go === "function", "go is a function");
                assert(st.outline.length > 0, "there are slides");
                openAudience(st, go);
                return false;
            } },
        ],
        onClose: () => {
            assert(st.outline.length > 0, "there are slides");
            assert(typeof tm.stop === "function", "the timer can stop");
            tm.stop(); v.cur.clear(); v.nxt.clear(); if (st.audience && !st.audience.closed) st.audience.close();
        },
    });
    dlg.dlg.classList.add("full");
    dlg.buttons[1].title = "Show the slides in a separate window. Move it to the projector and make it full screen.";
    dlg.dlg.addEventListener("keydown", (e) => {
        assert(e !== null && typeof e === "object", "a key event is given");
        assert(typeof e.key === "string", "a key has a name");
        if (e.target.tagName !== "BUTTON" || e.key !== " ") keys(e);
    });
    return { dlg, prevBtn };
}

export function speakerReady({ source, assets, takahashi, appearance, startOffset }) {
    assert(typeof source === "string", "the source is text");
    assert(assets !== null && typeof assets === "object", "assets are an object");
    const d = doc(source, assets, { appearance });
    const opts = slideOptions(takahashi);
    let html, outline;
    try { html = C.page(d, C.PAGE_SLIDES, opts); outline = C.outline(d, opts); }
    catch (e) { return { error: e.message }; }
    if (!outline.length) return { error: "No Slides. Add a slide title with ## to make a slide." };
    let index = Math.max(0, outline.indexOf(slideAt(outline, startOffset ?? 0)));
    if (startOffset === null || startOffset === undefined) index = 0;
    const st = { html, outline, index, step: 0, audience: null };
    const v = speakerFrames(st);
    const tm = speakerTimer();
    const go = (delta, toCur = true, toAudience = true) => {
        assert(delta === 1 || delta === -1, "a move is one step");
        assert(typeof toCur === "boolean" && typeof toAudience === "boolean", "targets are flags");
        speakerGo(st, v, delta, toCur, toAudience);
    };
    const keys = speakerKeys(go, v);
    const { dlg, prevBtn } = speakerDialog(st, v, tm, go, keys);
    v.cur.show(html, outline[index].id);
    speakerUpdate(st, v);
    tm.tick();
    prevBtn.focus();
    return { dlg };
}

// --- the listener preview -----------------------------------------------------------

export function listenerPreview({ source, assets, takahashi, appearance }) {
    assert(typeof source === "string", "the source is text");
    assert(assets !== null && typeof assets === "object", "assets are an object");
    let md, html;
    try {
        md = C.listener(source, C.LIST_LISTENER_MD);
        html = C.page(doc(md, assets, { appearance }), C.PAGE_SLIDES, (takahashi ? C.O_TAKAHASHI : 0) | C.O_PUBLIC_NOTES);
    } catch (e) { return { error: e.message }; }
    const host = h("div", { style: { position: "relative", flex: "1", display: "flex" } });
    const frame = new PageFrame(host, "Listener slides");
    const text = h("pre", { class: "code", hidden: true, tabindex: "0", "aria-label": "Listener Markdown", text: md });
    const pick = segmented("Show", [["slides", "Slides"], ["text", "Text"]], "slides", (v) => {
        assert(v === "slides" || v === "text", "the view is known");
        assert(host !== null && text !== null, "both views exist");
        host.hidden = v !== "slides";
        host.style.display = v === "slides" ? "flex" : "none";
        text.hidden = v !== "text";
    });
    const body = h("div", { style: { display: "flex", flexDirection: "column", gap: "10px", flex: "1" } },
        h("div", { class: "banner", style: { borderRadius: "8px" } }, h("span", { "aria-hidden": "true" }, "👥"),
            h("span", { class: "msg", text: "This is what a listener sees. Private notes are not in the Listener package. Select Reading view in the page to see the notes for listeners." })),
        pick, host, text);
    const d = dialog({ title: "Listener Preview", body, wide: true, onClose: () => {
        assert(frame !== null, "the frame exists");
        assert(host !== null, "the host exists");
        frame.clear();
    } });
    d.dlg.classList.add("full");
    frame.show(html);
    host.firstChild && host.firstChild.classList.add("listener-frame");
    frame.onload = (f) => {
        assert(f !== null && typeof f === "object", "a frame is given");
        assert(f.classList !== undefined, "a frame has classes");
        f.classList.add("listener-frame");
    };
    return d;
}

// The panels: Settings, Customize, Outline, Help, projects, Rename, Version
// History and the welcome (Panels.swift, VersionHistory.swift, OnboardingView.swift).

import * as C from "./core.js";
import * as S from "./store.js";
import * as Voice from "./voice.js";
import { samTutorial, SYNTAXES } from "./find.js";
import { h, dialog, section, footnote, toggleRow, selectRow, segmented, confirmBox, copyText, announce, cmdKey } from "./ui.js";

function assert(condition, message) {
    if (typeof message !== "string") throw new Error("assert needs a message");
    if (!condition) throw new Error(message);
}

// --- Settings -------------------------------------------------------------------------

function slider(label, min, max, step, value, fmt, onchange) {
    assert(typeof fmt === "function", "a slider formats its value");
    assert(typeof onchange === "function", "a slider reports changes");
    assert(min < max && step > 0, "a slider has a range and a step");
    const id = "r-" + Math.random().toString(36).slice(2);
    const out = h("span", { class: "row-hint", "aria-hidden": "true", text: fmt(value) });
    const input = h("input", {
        type: "range", id, min: String(min), max: String(max), step: String(step), value: String(value), "aria-valuetext": fmt(value),
        oninput: (e) => {
            const v = Number(e.target.value);
            assert(Number.isFinite(v), "a slider value is a number");
            assert(v >= min && v <= max, "a slider value is in range");
            out.textContent = fmt(v); e.target.setAttribute("aria-valuetext", fmt(v)); onchange(v);
        },
    });
    return h("div", { class: "row" }, h("label", { for: id, class: "row-label" }, label, out), input);
}

function textRow(label, value, placeholder, onchange, attrs = {}) {
    assert(typeof onchange === "function", "a text row reports changes");
    assert(typeof attrs === "object", "attributes are a record");
    const id = "x-" + Math.random().toString(36).slice(2);
    return h("div", { class: "row" }, h("label", { for: id, class: "row-label", text: label }),
        h("input", { type: "text", id, value, placeholder, oninput: (e) => {
            assert(typeof e.target.value === "string", "an input value is text");
            assert(typeof onchange === "function", "a text row reports changes");
            onchange(e.target.value);
        }, ...attrs }));
}

const themeOptions = () => {
    const themes = C.themes();
    assert(Array.isArray(themes), "themes come as a list");
    return themes.map((t) => {
        assert(typeof t.id === "string", "a theme has an id");
        assert(typeof t.name === "string", "a theme has a name");
        return [t.id, t.name];
    });
};

function settingSetter(set, key) {
    assert(typeof set === "function", "a setter is a function");
    assert(typeof key === "string" && key.length > 0, "a setting has a name");
    return (v) => {
        assert(v !== undefined, "a setting has a value");
        assert(typeof key === "string", "a setting has a name");
        set(key, v);
    };
}

export function settingsPanel(app) {
    assert(typeof app.applySettings === "function", "the app applies settings");
    assert(typeof app.text === "function", "the app has text");
    const set = (k, v) => {
        assert(typeof k === "string", "a setting has a name");
        assert(typeof app.applySettings === "function", "the app applies settings");
        S.setSetting(k, v); app.applySettings();
    };
    const body = h("div", {},
        section("Editor",
            selectRow("Theme", themeOptions(), S.settings.themeID, settingSetter(set, "themeID")),
            selectRow("Appearance", [["system", "Automatic"], ["light", "Light"], ["dark", "Dark"]], S.settings.appearance, settingSetter(set, "appearance")),
            slider("Text size", 0.8, 1.8, 0.1, S.settings.editorTextScale, (v) => {
                assert(Number.isFinite(v), "a size is a number");
                assert(v > 0, "a size is positive");
                return Math.round(v * 100) + "%";
            }, settingSetter(set, "editorTextScale")),
            slider("Line spacing", 1, 2, 0.1, S.settings.editorLineSpacing, (v) => {
                assert(Number.isFinite(v), "a spacing is a number");
                assert(v > 0, "a spacing is positive");
                return v.toFixed(1);
            }, settingSetter(set, "editorLineSpacing")),
            toggleRow("Show Line Count", S.settings.showLineCount, settingSetter(set, "showLineCount")),
            toggleRow("Wrap Lines", S.settings.wrapLines, settingSetter(set, "wrapLines")),
            toggleRow("Increase Contrast", S.settings.increaseContrast, settingSetter(set, "increaseContrast"), "Text colors at 7:1 contrast or more."),
            selectRow("Find patterns", SYNTAXES, S.settings.findSyntax, (v) => {
                assert(typeof v === "string", "a syntax is text");
                assert(typeof app.findSyntaxChanged === "function", "the app tracks the syntax");
                set("findSyntax", v); app.findSyntaxChanged();
            }),
            h("div", { class: "row" }, h("button", { type: "button", class: "linkbtn", onclick: () => { assert(d, "the dialog exists"); assert(typeof samTutorial === "function", "the tutorial exists"); d.close(); samTutorial(); } }, "Sam Tutorial")),
            toggleRow("Vim Mode", S.settings.vimEnabled, settingSetter(set, "vimEnabled"), "Text commands and navigation. Marklove saves each change. :w saves a version. :q! goes back to the last version."),
            footnote("These settings stay in this browser. They do not change the project.")),
        section("Versions",
            toggleRow("Save Versions", S.settings.gitEnabled, settingSetter(set, "gitEnabled")),
            textRow("Name", S.settings.gitName, "The front matter author", settingSetter(S.setSetting, "gitName"), { autocomplete: "name" }),
            textRow("Email", S.settings.gitEmail, "Optional", settingSetter(S.setSetting, "gitEmail"), { type: "email", autocomplete: "email", autocapitalize: "off", spellcheck: false }),
            footnote(`Marklove saves each change at once. It also saves a version after a pause in your typing, and when you press ${cmdKey}S or type :w. The version message says what changed. The project ZIP copy includes the history as Git, and other Git apps can read it.`)),
        voiceSection(app.text()),
        section("Storage",
            footnote("Projects, media, and versions stay in this browser, on this device. Nothing goes to a server. To move a project, save a ZIP copy and import it on the other device.")),
        section("About",
            footnote("Fonts: Courier Prime, Courier Prime Sans, Libre Baskerville, and KpMath, under the SIL Open Font License. The Kokoro voice is the kokoro-js web version of Kokoro-82M, under the Apache License 2.0.")));
    const d = dialog({ title: "Settings", body });
    assert(d && typeof d.close === "function", "the dialog can close");
}

// The Kokoro voice (VoiceModelControls): Download, Play a Sample, and Delete.
function voiceSection(source) {
    assert(typeof source === "string", "the voice section needs the source");
    assert(typeof Voice.playSample === "function", "the voice can play a sample");
    const voice = C.meta(source, "voice") || Voice.DEFAULT_VOICE;
    const controls = h("div", {});
    const status = (t) => {
        assert(typeof t === "string", "a status is text");
        assert(t.length > 0, "a status says something");
        return h("p", { class: "footnote", role: "status", text: t });
    };
    async function render(state, p) {
        assert(state === undefined || typeof state === "string", "a state is text");
        assert(p === undefined || Number.isFinite(p), "a progress is a number");
        controls.replaceChildren();
        if (state === "downloading") {
            controls.append(h("progress", { max: "1", value: String(p || 0), "aria-label": "Downloading the Voice" }),
                status(`Downloading the voice: ${Math.floor((p || 0) * 100)} percent.`));
            return;
        }
        if (state !== "installed") {
            controls.append(h("div", { class: "row" }, h("button", { type: "button", class: "button", onclick: download }, `Download the Voice (${Voice.SIZE_TEXT})`)),
                status(state ? "The download stopped. " + state : `Narrated video and the podcast need the Kokoro voice (${Voice.SIZE_TEXT}). After the download, the browser keeps the voice.`));
            return;
        }
        const play = h("button", { type: "button", class: "button", "aria-description": `Speaks one sentence in the voice ${voice}.` }, "Play a Sample");
        play.onclick = async () => {
            assert(play.disabled === false, "a sample plays once at a time");
            assert(typeof Voice.playSample === "function", "the voice can play a sample");
            play.disabled = true;
            try { await Voice.playSample(voice); } catch (e) { controls.append(status("The sample did not play. " + (e.message || e))); }
            play.disabled = false;
        };
        const del = h("button", { type: "button", class: "button", onclick: async () => {
            assert(typeof Voice.remove === "function", "the voice can be removed");
            assert(typeof render === "function", "the section can render");
            if (!(await confirmBox({ title: "Delete the voice from this browser?", message: `This removes ${Voice.SIZE_TEXT}. You can download it again later.`, choices: [{ label: "Delete the Voice", value: true, danger: true }] }))) return;
            await Voice.remove();
            render("");
        } }, "Delete the Voice");
        controls.append(h("div", { class: "row" }, play, del), status("The voice is in this browser. Narrated video and the podcast are available."));
    }
    async function download() {
        assert(typeof Voice.load === "function", "the voice can load");
        assert(typeof render === "function", "the section can render");
        render("downloading", 0);
        try { await Voice.load((p) => {
                assert(Number.isFinite(p), "a progress is a number");
                assert(typeof render === "function", "the section can render");
                render("downloading", p);
            }); render("installed"); announce("The voice is ready."); }
        catch (e) { render(e.message || String(e)); }
    }
    Voice.installed().then((ok) => {
        assert(typeof ok === "boolean" || ok === undefined || ok === null || typeof ok === "object", "installed answers yes or no");
        assert(controls instanceof Element, "the controls are an element");
        render(ok ? "installed" : "");
    });
    return section("Narration", h("div", { class: "row" }, h("span", { class: "row-label", text: "Voice" }), h("span", { class: "row-hint", text: voice })), controls,
        footnote("Kokoro speaks the narration in this browser. The first download comes from jsDelivr and Hugging Face. To use a different voice, add voice: to the front matter, for example voice: bf_emma."));
}

// --- Customize ------------------------------------------------------------------------

function luminance(hex) {
    assert(typeof hex === "string", "a color is text");
    assert(hex.length > 0, "a color is not empty");
    const n = parseInt(hex.slice(1), 16);
    const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
        assert(c >= 0 && c <= 255, "a channel is a byte");
        assert(Number.isInteger(c), "a channel is an integer");
        c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    assert(ch.length === 3, "a color has three channels");
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
}
function contrast(a, b) {
    assert(typeof a === "string", "the first color is text");
    assert(typeof b === "string", "the second color is text");
    const x = luminance(a), y = luminance(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

// ThemeValidator.issues.
export function themeIssues(p) {
    assert(p !== null && typeof p === "object", "a palette is a record");
    assert(typeof p.name === "string", "a palette has a name");
    const out = [];
    const roles = [["Body text", p.text], ["Heading text", p.strong], ["Secondary text", p.dim], ["Accent", p.accent],
        ["Red", p.red], ["Green", p.green], ["Yellow", p.yellow], ["Blue", p.blue], ["Magenta", p.magenta], ["Cyan", p.cyan], ["Orange", p.orange], ["Violet", p.violet]];
    for (const [role, fg] of roles) {
        const c = Math.min(contrast(fg, p.background), contrast(fg, p.surface));
        if (c < 4.495) out.push(`${p.name}: ${role} has a contrast of ${c.toFixed(2)}:1. It must be 4.5:1 or more.`);
    }
    assert(Array.isArray(out), "the issues come as a list");
    return out;
}

// FrontMatterEditor.set: sets each key to its value. A null value removes the key.
export function frontMatterSet(values, source) {
    assert(Array.isArray(values), "front matter values come as a list");
    assert(typeof source === "string", "front matter is set in text");
    const lines = source.split("\n");
    if (lines[0]?.trim() === "---") {
        let end = lines.findIndex((l, i) => {
            assert(typeof l === "string", "a line is text");
            assert(i < lines.length, "the index is in range");
            return i > 0 && l.trim() === "---";
        });
        if (end > 0) {
            for (const [key, value] of values) {
                let i = lines.slice(1, end).findIndex((l) => {
                    assert(typeof l === "string", "a line is text");
                    assert(typeof key === "string", "a key is text");
                    return l.toLowerCase().startsWith(key + ":");
                });
                i = i < 0 ? -1 : i + 1;
                if (i > 0 && value !== null) lines[i] = `${key}: ${value}`;
                else if (i > 0) { lines.splice(i, 1); end--; }
                else if (value !== null) { lines.splice(end, 0, `${key}: ${value}`); end++; }
            }
            assert(end > 0 && end <= lines.length, "the front matter ends inside the text");
            return lines.join("\n");
        }
    }
    const set = values.filter(([, v]) => {
        assert(v !== undefined, "a value is set or null");
        return v !== null;
    }).map(([k, v]) => {
        assert(typeof k === "string", "a key is text");
        return `${k}: ${v}`;
    });
    if (!set.length) return source;
    return ["---", ...set, "---", "", ...lines].join("\n");
}

function frontValue(source, key) {
    assert(typeof source === "string", "front matter is read from text");
    assert(typeof key === "string" && key.length > 0, "a key is text");
    if (!source.startsWith("---")) return "";
    const end = source.indexOf("\n---", 3);
    if (end < 0) return "";
    const line = source.slice(0, end).split("\n").find((l) => {
        assert(typeof l === "string", "a line is text");
        assert(typeof key === "string", "a key is text");
        return l.toLowerCase().startsWith(key + ":");
    });
    return line ? line.slice(key.length + 1).trim().replace(/^["']|["']$/g, "") : "";
}

const ACCENTS = ["", "blue", "violet", "magenta", "red", "orange", "yellow", "green", "cyan"];

function previewNodes(p, issues) {
    assert(Array.isArray(issues), "the issues come as a list");
    assert(typeof p.background === "string", "a palette has a background");
    return [
        h("div", { class: "theme-preview", style: { background: p.background, color: p.text } },
            h("div", { style: { color: p.strong, fontWeight: "700" }, text: "Heading" }),
            h("div", {}, "Body text with a ", h("u", { style: { color: p.accent }, text: "link" })),
            h("div", { style: { color: p.dim, fontSize: "0.85em" }, text: "Secondary text" })),
        issues.length ? h("div", {}, issues.map((i) => {
            assert(typeof i === "string", "an issue is text");
            assert(i.length > 0, "an issue says something");
            return h("p", { class: "status-warn", text: "⚠ " + i });
        }))
            : h("p", { class: "status-ok", text: "✓ All colors meet the readability checks." }),
    ];
}

function applyTheme(app, st, t) {
    assert(typeof app.applySettings === "function", "the app applies settings");
    assert(typeof st.useInEditor === "boolean", "the editor choice is a boolean");
    assert(typeof t.id === "string", "a theme has an id");
    const value = st.appearance === null || t.darkOnly ? t.id : t.id + (st.appearance ? "-dark" : "-light");
    const text = app.text();
    const next = frontMatterSet([["theme", value], ["accent", st.accent || null]], text);
    if (next !== text) app.replaceAll(next);
    if (st.useInEditor) {
        S.setSetting("themeID", t.id);
        if (!t.darkOnly && st.appearance !== null) S.setSetting("appearance", st.appearance ? "dark" : "light");
        app.applySettings();
    }
    assert(typeof t.name === "string", "a theme has a name");
    announce(`The project theme is ${t.name}.`);
}

function currentTheme(themes, st) {
    assert(themes.length > 0, "there is at least one theme");
    assert(typeof st.themeID === "string", "the theme id is text");
    return themes.find((t) => {
        assert(typeof t.id === "string", "a theme has an id");
        assert(typeof st.themeID === "string", "the theme id is text");
        return t.id === st.themeID;
    }) || themes[0];
}

function themeChoices(themes) {
    assert(Array.isArray(themes), "themes come as a list");
    return themes.map((t) => {
        assert(typeof t.id === "string", "a theme has an id");
        assert(typeof t.name === "string", "a theme has a name");
        return [t.id, t.name];
    });
}

function setUseInEditor(st, v) {
    assert(typeof v === "boolean", "a switch is a boolean");
    assert(st !== null, "the choices exist");
    st.useInEditor = v;
}

function accentOptions(accents) {
    assert(Array.isArray(accents), "accents come as a list");
    assert(accents.length >= ACCENTS.length, "the accents include the standard ones");
    return accents.map((a) => {
        assert(typeof a === "string", "an accent is text");
        assert(accents.includes(a), "the accent is listed");
        return [a, a ? (a.startsWith("#") ? a.toUpperCase() : a[0].toUpperCase() + a.slice(1)) : "Theme default"];
    });
}

export function customizePanel(app) {
    assert(typeof app.text === "function", "the app has text");
    assert(typeof app.replaceAll === "function", "the app can replace the text");
    const src = app.text();
    assert(typeof src === "string", "the text is a string");
    const r = C.themeResolve(frontValue(src, "theme"), "");
    const st = { themeID: r.id, appearance: r.darkOnly ? null : r.prefersDark, accent: frontValue(src, "accent"), useInEditor: false };
    const themes = C.themes();
    assert(themes.length > 0, "there is at least one theme");
    const theme = () => {
        assert(Array.isArray(themes), "themes come as a list");
        assert(st !== null, "the choices exist");
        return currentTheme(themes, st);
    };
    const accents = ACCENTS.includes(st.accent) ? ACCENTS : [...ACCENTS, st.accent];
    const previewBox = h("div", {});
    const appearanceRow = selectRow("Appearance", [["auto", "Automatic"], ["light", "Light"], ["dark", "Dark"]],
        st.appearance === null ? "auto" : st.appearance ? "dark" : "light",
        (v) => {
            assert(v === "auto" || v === "light" || v === "dark", "an appearance is auto, light or dark");
            assert(typeof update === "function", "the preview can update");
            st.appearance = v === "auto" ? null : v === "dark"; update();
        });
    let d;
    function update() {
        assert(previewBox instanceof Element, "the preview box exists");
        assert(appearanceRow instanceof Element, "the appearance row exists");
        const t = theme();
        appearanceRow.querySelector("select").disabled = t.darkOnly;
        const p = C.themePalette(t.id, st.accent, t.darkOnly ? true : !!st.appearance, false);
        const issues = themeIssues(p);
        previewBox.replaceChildren(...previewNodes(p, issues));
        if (d) d.buttons.find((b) => {
            assert(b instanceof Element, "a dialog button is an element");
            assert(typeof b.textContent === "string", "a button has a label");
            return b.textContent === "Apply";
        }).disabled = issues.length > 0;
    }
    const apply = () => { assert(typeof theme === "function", "there is a current theme"); assert(typeof app.replaceAll === "function", "the app can replace the text"); applyTheme(app, st, theme()); };
    const body = h("div", {},
        section("Project Theme",
            selectRow("Theme", themeChoices(themes), st.themeID, (v) => {
                assert(typeof v === "string", "a theme id is text");
                assert(themes.some((t) => t.id === v), "the theme exists");
                st.themeID = v; update();
            }),
            appearanceRow,
            toggleRow("Use This Theme in the Editor Too", false, (v) => setUseInEditor(st, v)),
            footnote("For Preview, slides, the article, and the interactive page of this project. The editor uses the theme in Settings, unless you turn on the option above. Every theme is free. Marklove makes text colors darker or lighter where they are below 4.5:1 contrast.")),
        section("Accent", selectRow("Accent", accentOptions(accents), st.accent, (v) => {
            assert(typeof v === "string", "an accent is text");
            assert(accents.includes(v), "the accent is listed");
            st.accent = v; update();
        })),
        section("Preview", h("div", { class: "group" }, previewBox)));
    d = dialog({ title: "Customize", body, buttons: [{ label: "Cancel", cancel: true }, { label: "Apply", primary: true, disabled: app.readOnly(), action: apply }] });
    assert(d && Array.isArray(d.buttons), "the dialog has buttons");
    update();
}

// --- Outline ------------------------------------------------------------------------------

export function outlinePanel(app) {
    assert(typeof app.goToSource === "function", "the app can go to a source position");
    assert(typeof app.title === "function", "the app has a title");
    let items = [];
    try { items = C.outline({ source: app.text() }, 0); } catch (e) { items = []; }
    const title = app.title();
    assert(Array.isArray(items), "the outline is a list");
    const list = h("div", { role: "list" }, items.map((f) => {
        assert(Number.isInteger(f.s0), "an outline item has a source position");
        assert(Number.isInteger(f.kind), "an outline item has a kind");
        const t = app.text();
        const line = t.slice(f.s0, t.indexOf("\n", f.s0) < 0 ? t.length : t.indexOf("\n", f.s0));
        const label = f.kind === 0 ? title : line.replace(/^#+\s*/, "") || "Slide";
        return h("div", { role: "listitem" }, h("button", {
            type: "button", class: "item linkbtn", style: { paddingLeft: f.kind === 2 ? "28px" : "12px", fontWeight: f.kind === 1 ? "700" : "400", display: "flex", width: "100%" },
            onclick: () => { assert(d, "the dialog exists"); assert(Number.isInteger(f.s0), "the position is an integer"); d.close(); app.goToSource(f.s0, f.s0); },
        }, h("span", { text: label }), h("span", { class: "spacer" }), f.notes ? h("span", { class: "row-hint", "aria-label": "Has notes", text: "✎" }) : null));
    }));
    const d = dialog({ title: "Outline", body: items.length ? section(null, list) : h("p", { class: "alert-text", text: "The project has no slides yet. Add a heading with ## to make a slide." }) });
}

// --- Help ------------------------------------------------------------------------------------

const SYNTAX = [
    ["Slides", "# Section\n## Slide title\nText for the slide."],
    ["Reveal", "First point.\n\n. . .\n\nSecond point appears on the next click."],
    ["Speaker notes", "::: notes\nPrivate text for the presenter.\n:::"],
    ["Narration", "::: narration\nThe words that narration speaks for this slide.\n:::"],
    ["Spoken explanation", "$$ E = mc^2 $$\n\n::: explain\nEnergy equals mass times the speed of light squared.\n:::"],
    ["Image", "![A description for people who cannot see it](images/photo.png \"Optional caption\")"],
    ["Decorative image", "<!-- decorative -->\n![](images/pattern.png)"],
    ["Equation steps", "::: morph\n$$ a = b + c $$\n$$ a - c = b $$\n:::"],
    ["Plot with slider", "::: plot\nx: 0, 6.28\nslider: k, 0.5, 3, 1, Frequency\ny = sin(k*x)\n:::"],
    ["Bar chart", "::: chart bar\n| Item | Value |\n| --- | ---: |\n| A | 3 |\n| B | 5 |\n:::"],
    ["Article only", "<!-- article -->\nText for the article only.\n<!-- /article -->"],
    ["Slides only", "<!-- slides -->\nText for the slides only.\n<!-- /slides -->"],
];

export function helpPanel(app) {
    assert(typeof app.openTour === "function", "the app has a tour");
    assert(typeof app.insertText === "function", "the app can insert text");
    let includeSelection = false;
    const copyBtn = (label, make) => {
        assert(typeof label === "string", "a button has a label");
        assert(typeof make === "function", "a button makes the text to copy");
        const b = h("button", { type: "button", class: "button", onclick: async () => {
            assert(typeof make === "function", "a button makes the text to copy");
            assert(b instanceof Element, "the button exists");
            try { await copyText(make()); } catch (e) { announce(e.message); return; }
            b.textContent = "Copied"; announce("Copied");
        } }, label);
        return b;
    };
    const body = h("div", {},
        section("Write in Markdown. Preview it. Export it.",
            h("p", { class: "group", text: "Marklove keeps your Markdown as plain text. Every rule below is visible in the source. Insert adds the same text for you." }),
            h("div", { class: "row" }, h("button", { type: "button", class: "linkbtn", onclick: () => { assert(d, "the dialog exists"); assert(typeof app.openTour === "function", "the app has a tour"); d.close(); app.openTour(); } }, "✦ Open the Tour")),
            h("div", { class: "row" }, h("button", { type: "button", class: "linkbtn", onclick: () => { assert(d, "the dialog exists"); assert(typeof app === "object", "the app exists"); d.close(); samTutorial(); } }, "Sam Tutorial: Structural Editing")),
            h("div", { class: "row" }, h("button", { type: "button", class: "linkbtn", onclick: () => { assert(d, "the dialog exists"); assert(typeof app === "object", "the app exists"); d.close(); welcome(app); } }, "Show the Welcome Again"))),
        section("Syntax", ...SYNTAX.map(([name, text]) => {
            assert(typeof name === "string", "a syntax has a name");
            assert(typeof text === "string", "a syntax has an example");
            return h("div", { class: "item" },
            h("div", { class: "item-title", text: name }),
            h("pre", { class: "code", text }),
            h("div", { class: "item-actions" }, h("button", { type: "button", class: "button", disabled: app.readOnly(), "aria-label": "Insert " + name, onclick: () => { assert(d, "the dialog exists"); assert(typeof text === "string", "the example is text"); d.close(); app.insertText(text); } }, "Insert")));
        })),
        section("Write with an AI Tool",
            h("p", { class: "group", text: "Copy a prompt with the Marklove rules. Paste it into Claude, ChatGPT, or another tool. The rules ask for short sentences that fit Takahashi slides, and for plots, charts, and equation steps. Then paste the Markdown back here. Marklove sends nothing by itself." }),
            toggleRow("Include the selected text", false, (v) => {
                assert(typeof v === "boolean", "a switch is a boolean");
                assert(typeof includeSelection === "boolean", "the choice is a boolean");
                includeSelection = v;
            }),
            h("div", { class: "row" }, copyBtn("Copy a Prompt for a New Presentation", () => {
                assert(typeof includeSelection === "boolean", "the choice is a boolean");
                assert(typeof app.selectedText === "function", "the app has a selection");
                return C.authoringPrompt(includeSelection ? app.selectedText() : "");
            })),
            h("div", { class: "row" }, copyBtn("Copy a Prompt to Revise This Project", () => {
                assert(typeof app.text === "function", "the app has text");
                assert(C.LIST_REVISION_PROMPT !== undefined, "the revision prompt exists");
                return C.listener(app.text(), C.LIST_REVISION_PROMPT);
            })),
            footnote("The revision prompt includes your project without private notes.")),
        section("Vim Mode",
            h("p", { class: "group", text: "Motions: h j k l w b e 0 ^ $ gg G f t % { }. Operators: d c y > < with motions and text objects such as iw, i\", i(, ip, and i$ for math. Also x, p, u, Ctrl-R, ., v, V, /, n, :s, :w, and :q!. Shell commands and plugins are not available." })),
        section("Keyboard Shortcuts", h("div", { class: "group" }, SHORTCUTS.map(([k, t]) => {
            assert(typeof k === "string", "a shortcut has keys");
            assert(typeof t === "string", "a shortcut has a name");
            return h("div", { class: "row" }, h("span", { class: "row-label", text: t }), h("kbd", { text: k }));
        }))));
    const d = dialog({ title: "Help", body, wide: true });
    assert(d && typeof d.close === "function", "the dialog can close");
}

const K = cmdKey, ALT = cmdKey === "⌘" ? "⌥" : "Alt+", SH = cmdKey === "⌘" ? "⇧" : "Shift+", CTL = cmdKey === "⌘" ? "⌃" : "Ctrl+";
const combo = (...p) => {
    assert(p.length > 0, "a combo has keys");
    assert(p.every((x) => typeof x === "string"), "keys are text");
    return cmdKey === "⌘" ? p.join("") : p.join("").replace(/\+(?=.)/g, "+");
};
const SHORTCUTS = [
    [combo(ALT, K, "N"), "New Project"], [combo(K, "O"), "Import Markdown or ZIP"], [combo(SH, K, "O"), "All Projects"],
    [combo(K, "S"), "Save a Version"], [combo(ALT, K, "Y"), "Version History"], [combo(K, "E"), "Export"],
    [combo(K, "F"), "Find"], [combo(ALT, K, "F"), "Find and Replace"], [combo(K, "G"), "Find Next"], [combo(SH, K, "G"), "Find Previous"],
    [combo(ALT, K, "X"), "Sam Command Line"], [combo(CTL === "Ctrl+" ? "Ctrl+Alt+" : "⌃⌘", "E"), "Preview Equation"],
    [combo(SH, K, "L"), "Outline"], [combo(ALT, K, "L"), "Show Line Count"], [combo(K, "Return"), "Preview or Edit"],
    [combo(SH, K, "R"), "Speaker Ready"], ["Escape", "Edit (in Preview)"],
];

// --- projects -------------------------------------------------------------------------------

export async function projectsPanel(app, { received = false } = {}) {
    assert(typeof received === "boolean", "received is a boolean");
    assert(typeof app.openProject === "function", "the app opens projects");
    const list = h("div", { role: "list" });
    let d;
    async function render() {
        assert(list instanceof Element, "the list exists");
        const all = (await S.projects()).filter((p) => {
            assert(typeof p === "object", "a project is a record");
            assert(typeof received === "boolean", "received is a boolean");
            return !!p.isListener === received;
        });
        list.replaceChildren();
        if (!all.length) list.append(h("p", { class: "alert-text", text: received ? "Nothing Received. Import a listener package (ZIP) to see it here. Received items open view only." : "No projects yet." }));
        for (const p of all) {
            assert(typeof p.name === "string", "a project has a name");
            const current = p.id === app.projectId();
            list.append(h("div", { class: "item", role: "listitem" },
                h("button", { type: "button", class: "linkbtn", "aria-current": current ? "true" : null, onclick: () => { assert(d, "the dialog exists"); assert(p.id !== undefined, "a project has an id"); d.close(); app.openProject(p.id); } },
                    h("span", { class: "item-title", text: (current ? "✓ " : "") + p.name }),
                    h("span", { class: "item-sub", text: new Date(p.modified).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) })),
                h("div", { class: "item-actions" },
                    h("button", { type: "button", class: "button danger", "aria-label": "Delete " + p.name, onclick: async () => {
                        assert(typeof app.deleteProject === "function", "the app deletes projects");
                        assert(typeof render === "function", "the list can render");
                        if (await app.deleteProject(p)) render();
                    } }, "Delete"))));
        }
    }
    await render();
    d = dialog({
        title: received ? "Received" : "All Projects", body: section(null, list),
        buttons: [{ label: "Done", cancel: true }, { label: received ? "Import" : "New Project", primary: true, action: () => {
            assert(typeof app.importFiles === "function", "the app imports files");
            assert(typeof app.newProject === "function", "the app makes projects");
            return received ? app.importFiles() : app.newProject();
        } }],
    });
    assert(d && typeof d.close === "function", "the dialog can close");
}

export function renamePanel(app) {
    assert(typeof app.rename === "function", "the app renames projects");
    assert(typeof app.projectName === "function", "the app has a project name");
    const input = h("input", { type: "text", value: app.projectName(), "aria-label": "Name", autocomplete: "off" });
    const go = async () => {
        assert(typeof input.value === "string", "the input has text");
        assert(typeof app.rename === "function", "the app renames projects");
        const n = input.value.trim(); if (!n) return false; await app.rename(n);
    };
    input.addEventListener("keydown", (e) => {
        assert(typeof e.key === "string", "a key event has a key");
        assert(typeof go === "function", "the rename can run");
        if (e.key === "Enter") {
            e.preventDefault();
            go().then((r) => {
                assert(r === false || r === undefined, "a rename returns false or nothing");
                assert(d, "the dialog exists");
                return r !== false && d.close();
            });
        }
    });
    const d = dialog({ title: "Rename Project", body: section(null, h("div", { class: "row" }, input)), buttons: [{ label: "Cancel", cancel: true }, { label: "Rename", primary: true, action: go }] });
    assert(d && typeof d.close === "function", "the dialog can close");
    input.select();
}

// --- Version History --------------------------------------------------------------------------

const when = (t) => {
    assert(Number.isFinite(+new Date(t)), "a time is a date");
    assert(t !== undefined && t !== null, "a version has a time");
    return whenText(t);
};
const whenText = (t) => {
    assert(typeof t === "number" || typeof t === "string" || t instanceof Date, "a time is a number, text or date");
    assert(typeof Intl === "object", "dates can be formatted");
    return new Date(t).toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" });
};

export async function historyPanel(app) {
    assert(typeof app.restoreVersion === "function", "the app restores versions");
    assert(typeof app.saveVersion === "function", "the app saves versions");
    const list = h("div", {});
    let d;
    async function render() {
        assert(list instanceof Element, "the list exists");
        const all = await S.versions(app.projectId());
        assert(Array.isArray(all), "versions come as a list");
        list.replaceChildren();
        if (!S.settings.gitEnabled) list.append(h("p", { class: "status-warn", text: "⚠ Versions are off. Turn on Save Versions in Settings." }));
        if (!all.length) list.append(h("p", { class: "alert-text", text: `No Versions Yet. Marklove saves a version after a pause in your typing, and when you press ${cmdKey}S.` }));
        all.forEach((v, i) => {
            assert(typeof v.message === "string", "a version has a message");
            assert(i < all.length, "the index is in range");
            const [subject, ...rest] = v.message.split("\n");
            const bodyText = rest.join("\n").trim();
            list.append(h("div", { class: "item" },
                h("div", { class: "item-title", text: subject }),
                h("div", { class: "item-sub", text: when(v.time) }),
                bodyText ? h("div", { class: "item-sub", style: { whiteSpace: "pre-wrap" }, text: bodyText.split("\n").slice(0, 6).join("\n") }) : null,
                h("div", { class: "item-actions" },
                    h("button", { type: "button", class: "button", onclick: () => {
                        assert(typeof app.text === "function", "the app has text");
                        assert(i < all.length, "the index is in range");
                        versionDetail(v, all[i + 1] || null, app.text());
                    } }, "Changes"),
                    h("button", { type: "button", class: "button", disabled: i === 0 || app.readOnly(), onclick: async () => {
                        assert(typeof app.readOnly === "function", "the app knows if it is read only");
                        assert(i > 0, "the newest version is not restored");
                        const ok = await confirmBox({ title: "Restore this version?", message: `The project text and its files change to the version from ${when(v.time)}. Marklove first saves the current text as a version, so you can go back.`, choices: [{ label: "Restore", value: true, primary: true }] });
                        assert(typeof render === "function", "the list can render");
                        if (ok) { await app.restoreVersion(v); render(); }
                    } }, "Restore…"))));
        });
    }
    await render();
    d = dialog({
        title: "Version History", body: section(null, list),
        buttons: [{ label: "Done", cancel: true }, { label: "Save a Version Now", primary: true, disabled: !S.settings.gitEnabled || app.readOnly(), action: async () => {
            assert(typeof app.saveVersion === "function", "the app saves versions");
            assert(typeof render === "function", "the list can render");
            await app.saveVersion({ explicit: true }); await render(); return false;
        } }],
    });
    assert(d && typeof d.close === "function", "the dialog can close");
}

// LineDiff.hunks: changed lines with three lines of context.
function hunks(a, b) {
    assert(typeof a === "string", "the old text is a string");
    assert(typeof b === "string", "the new text is a string");
    let lines;
    try { lines = C.diff(a, b); } catch { lines = []; }
    const ranges = [];
    assert(Array.isArray(lines), "the diff is a list of lines");
    lines.forEach((l, i) => {
        assert(typeof l.op === "string", "a diff line has an operation");
        assert(i < lines.length, "the index is in range");
        if (l.op === "same") return;
        const lo = Math.max(0, i - 3), hi = Math.min(lines.length - 1, i + 3);
        const last = ranges[ranges.length - 1];
        if (last && lo <= last[1] + 1) last[1] = hi; else ranges.push([lo, hi]);
    });
    return ranges.map(([lo, hi]) => {
        assert(lo <= hi, "a range runs forward");
        assert(hi < lines.length, "a range ends inside the lines");
        const part = lines.slice(lo, hi + 1);
        return { lines: part, added: part.filter((l) => {
            assert(typeof l.op === "string", "a diff line has an operation");
            return l.op === "add";
        }).length, removed: part.filter((l) => {
            assert(typeof l.op === "string", "a diff line has an operation");
            return l.op === "remove";
        }).length };
    });
}

function diffView(hs, summary) {
    assert(Array.isArray(hs), "the hunks come as a list");
    assert(typeof summary === "string", "the summary is text");
    const box = h("div", {}, h("p", { class: "footnote", text: summary }));
    for (const hk of hs) {
        assert(Array.isArray(hk.lines), "a hunk has lines");
        const shown = hk.lines.filter((l) => {
            assert(typeof l.op === "string", "a diff line has an operation");
            return l.op !== "remove";
        });
        const start = (shown[0] && shown[0].new) || (hk.lines[0] && (hk.lines[0].new || hk.lines[0].old)) || 1;
        box.append(h("h4", { class: "hunk-head", text: shown.length <= 1 ? `Line ${start}` : `Lines ${start} to ${start + shown.length - 1}` }));
        for (const l of hk.lines) {
            const sign = l.op === "add" ? "+" : l.op === "remove" ? "−" : " ";
            const spoken = l.op === "add" ? "Added: " : l.op === "remove" ? "Removed: " : "";
            box.append(h("div", { class: "diff-line " + l.op, role: "text", "aria-label": spoken + l.text },
                h("span", { class: "n", "aria-hidden": "true", text: String(l.new || l.old || "") }),
                h("span", { class: "s", "aria-hidden": "true", text: sign }),
                h("span", { class: "t", "aria-hidden": "true", text: l.text || " " })));
        }
    }
    assert(box instanceof Element, "the view is an element");
    return box;
}

function versionDetail(v, previous, current) {
    assert(typeof v.markdown === "string", "a version has text");
    assert(typeof current === "string", "the current text is a string");
    const content = h("div", {});
    const sum = (hs) => {
        assert(Array.isArray(hs), "the hunks come as a list");
        assert(hs.every((x) => Number.isInteger(x.added) && Number.isInteger(x.removed)), "a hunk counts its lines");
        return [hs.reduce((n, x) => n + x.added, 0), hs.reduce((n, x) => n + x.removed, 0)];
    };
    function show(mode) {
        assert(mode === "changes" || mode === "compare" || mode === "text", "the mode is known");
        assert(content instanceof Element, "the content exists");
        content.replaceChildren();
        if (mode === "text") { content.append(h("pre", { class: "code", text: v.markdown })); return; }
        const hs = mode === "changes" ? hunks(previous ? previous.markdown : "", v.markdown) : hunks(v.markdown, current);
        const [a, r] = sum(hs);
        let s;
        if (mode === "changes") s = !previous ? `The first version. Lines: ${a}.` : a + r === 0 ? "The text did not change in this version. Other files changed." : `Added lines: ${a}. Removed lines: ${r}.`;
        else s = a + r === 0 ? "This version has the same text as now." : `Since this version: added lines: ${a}. Removed lines: ${r}.`;
        assert(typeof s === "string", "the summary is text");
        content.append(diffView(hs, s));
    }
    const body = h("div", {}, h("div", { class: "row" }, segmented("Show", [["changes", "Changes"], ["compare", "Compared with Now"], ["text", "Text"]], "changes", show)), content);
    dialog({ title: v.message.split("\n")[0], body, wide: true });
    show("changes");
}

// --- the welcome --------------------------------------------------------------------------------

const PAGES = [
    ["Markdown in, slides out", "You write plain Markdown. Marklove draws each form from it.", "## Math that looks like math\n\n::: morph\n$$(a + b)^2$$\n$$(a + b)(a + b)$$\n$$a^2 + 2ab + b^2$$\n:::"],
    ["Two styles, one file", "Normal slides hold a full idea. Takahashi slides show one short sentence in large type.", ""],
    ["Plots that move", "Drag a slider. The curve changes at once. Your audience can do this on the web page too. Marklove does not run code from your file. Plots use a small, safe formula language.", ""],
    ["Your words, in every form", "Export makes every form from the same file. Every export is free. Marklove saves each change at once, in this browser, and keeps versions that tell what changed.", ""],
];

export function welcome(app) {
    assert(typeof app.openTour === "function", "the app has a tour");
    assert(PAGES.length > 0, "the welcome has pages");
    let page = 0;
    const content = h("div", { class: "group" });
    let d;
    function render() {
        assert(page >= 0 && page < PAGES.length, "the page is in range");
        assert(d && Array.isArray(d.buttons), "the dialog has buttons");
        const [title, text, code] = PAGES[page];
        content.replaceChildren(
            h("h3", { text: title, tabindex: "-1" }), h("p", { text }),
            code ? h("pre", { class: "code", "aria-label": "Markdown source", text: code }) : null,
            h("p", { class: "footnote", text: `Page ${page + 1} of ${PAGES.length}` }));
        const [skip, back, next] = d.buttons;
        back.hidden = page === 0;
        next.textContent = page === PAGES.length - 1 ? "Start Writing" : "Continue";
        skip.hidden = page === PAGES.length - 1;
        assert(content.querySelector("h3") !== null, "the page has a heading");
        content.querySelector("h3").focus();
    }
    const finish = () => {
        assert(typeof S.setSetting === "function", "settings can be set");
        assert(typeof page === "number", "the page is a number");
        S.setSetting("onboardingSeen", true);
    };
    d = dialog({
        title: "Welcome to Marklove", body: content, onClose: finish,
        buttons: [
            { label: "Skip", cancel: true },
            { label: "Back", action: () => {
                assert(page >= 0, "the page is not negative");
                assert(page < PAGES.length, "the page is in range");
                page = Math.max(0, page - 1); render(); return false;
            } },
            { label: "Continue", primary: true, action: () => {
                assert(page >= 0, "the page is not negative");
                assert(page < PAGES.length, "the page is in range");
                if (page < PAGES.length - 1) { page++; render(); return false; }
            } },
        ],
    });
    d.body.append(h("div", { class: "row" }, h("button", { type: "button", class: "linkbtn", onclick: () => { assert(d, "the dialog exists"); assert(typeof app === "object", "the app exists"); d.close(); app.openTour(); } }, "Open the Tour")));
    render();
}

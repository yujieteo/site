// Small DOM helpers: elements, menus, dialogs, announcements, downloads.

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

export function h(tag, attrs, ...children) {
    assert(typeof tag === "string" && tag.length > 0, "h needs a tag name");
    assert(Array.isArray(children), "children come as a list");
    assert(attrs === undefined || attrs === null || typeof attrs === "object", "attributes are a record");
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
        if (v === undefined || v === null || v === false) continue;
        if (k === "class") el.className = v;
        else if (k === "text") el.textContent = v;
        else if (k === "html") el.innerHTML = v;
        else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
        else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
        else if (v === true) el.setAttribute(k, "");
        else el.setAttribute(k, v);
    }
    for (const c of children.flat()) {
        if (c === null || c === undefined || c === false) continue;
        el.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    assert(el instanceof Element, "h returns an element");
    return el;
}

// --- announcements ------------------------------------------------------------

export function announce(text) {
    assert(text === undefined || text === null || typeof text === "string", "announce takes text");
    assert(typeof document.getElementById === "function", "the document is ready");
    const live = document.getElementById("live");
    if (!live || !text) return;
    live.textContent = "";
    setTimeout(() => {
        assert(live instanceof Element, "the live region stays");
        assert(typeof text === "string" && text.length > 0, "the text is spoken once");
        live.textContent = text;
    }, 30);
}

// --- menus ------------------------------------------------------------------

// items: [{label, action, checked, disabled, danger, header, separator, hint}]
// A function gives fresh items each time the menu opens.
let openMenuEl = null;

export function closeMenu() {
    assert(openMenuEl === null || typeof openMenuEl === "object", "the open menu is a record or nothing");
    assert(typeof document === "object", "the document exists");
    if (!openMenuEl) return;
    const { el, button } = openMenuEl;
    openMenuEl = null;
    el.remove();
    button.setAttribute("aria-expanded", "false");
    assert(openMenuEl === null, "the menu is closed");
}

function menuItem(it, button) {
    assert(it !== null && typeof it === "object", "a menu item is a record");
    assert(button instanceof Element, "a menu belongs to a button");
    const role = it.checked === undefined ? "menuitem" : "menuitemcheckbox";
    return h("button", {
        type: "button", role, class: "menu-item" + (it.danger ? " danger" : ""), tabindex: "-1",
        "aria-checked": it.checked === undefined ? null : String(!!it.checked),
        disabled: it.disabled, title: it.hint,
        onclick: () => {
            assert(typeof closeMenu === "function", "the menu can close");
            assert(button instanceof Element, "the button stays");
            closeMenu(); button.focus(); it.action && it.action();
        },
    }, h("span", { class: "menu-check", "aria-hidden": "true", text: it.checked ? "✓" : "" }), h("span", { text: it.label }),
        it.shortcut ? h("span", { class: "menu-key", "aria-hidden": "true", text: it.shortcut }) : null);
}

function buildMenu(button, list) {
    assert(Array.isArray(list), "menu items come as a list");
    assert(list.every((it) => it !== null && typeof it === "object"), "menu items are records");
    assert(button instanceof Element, "a menu belongs to a button");
    assert(typeof button.getAttribute === "function", "a button has attributes");
    const el = h("div", { class: "menu", role: "menu", "aria-label": button.getAttribute("aria-label") || button.textContent });
    for (const it of list) {
        if (it.separator) { el.append(h("div", { class: "menu-sep", role: "separator" })); continue; }
        if (it.header) { el.append(h("div", { class: "menu-header", role: "presentation", text: it.header })); continue; }
        el.append(menuItem(it, button));
    }
    return el;
}

function placeMenu(el, button, align) {
    assert(el instanceof Element && button instanceof Element, "a menu and its button");
    assert(align === "start" || align === "end", "align is start or end");
    const r = button.getBoundingClientRect();
    const w = el.offsetWidth, hgt = el.offsetHeight;
    let left = align === "end" ? r.right - w : r.left;
    left = Math.max(8, Math.min(left, innerWidth - w - 8));
    let top = r.bottom + 4;
    if (top + hgt > innerHeight - 8) top = Math.max(8, innerHeight - hgt - 8);
    el.style.left = left + "px";
    el.style.top = top + "px";
}

function menuKeydown(e, el, button) {
    assert(e && typeof e.key === "string", "a key event");
    assert(typeof e.preventDefault === "function", "events can be cancelled");
    assert(el instanceof Element && button instanceof Element, "a menu and its button");
    assert(el.isConnected !== undefined, "the menu is a node");
    const all = [...el.querySelectorAll(".menu-item:not([disabled])")];
    const i = all.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { all[(i + 1) % all.length]?.focus(); e.preventDefault(); }
    else if (e.key === "ArrowUp") { all[(i - 1 + all.length) % all.length]?.focus(); e.preventDefault(); }
    else if (e.key === "Home") { all[0]?.focus(); e.preventDefault(); }
    else if (e.key === "End") { all[all.length - 1]?.focus(); e.preventDefault(); }
    else if (e.key === "Escape") { closeMenu(); button.focus(); e.preventDefault(); e.stopPropagation(); }
    else if (e.key === "Tab") { closeMenu(); }
    else if (e.key.length === 1 && /\S/.test(e.key)) {
        const k = e.key.toLowerCase();
        const next = all.slice(i + 1).concat(all.slice(0, i + 1)).find((b) => b.textContent.trim().toLowerCase().startsWith(k));
        next?.focus();
    }
}

export function attachMenu(button, items, { align = "start" } = {}) {
    assert(button instanceof Element, "a menu belongs to a button");
    assert(align === "start" || align === "end", "align is start or end");
    button.setAttribute("aria-haspopup", "menu");
    button.setAttribute("aria-expanded", "false");
    const show = (focusLast) => {
        assert(focusLast === true || focusLast === false, "focusLast is a flag");
        assert(typeof items === "function" || Array.isArray(items), "items are a list or a function");
        if (openMenuEl && openMenuEl.button === button) { closeMenu(); return; }
        closeMenu();
        const el = buildMenu(button, typeof items === "function" ? items() : items);
        document.body.append(el);
        placeMenu(el, button, align);
        openMenuEl = { el, button };
        button.setAttribute("aria-expanded", "true");
        const enabled = [...el.querySelectorAll(".menu-item:not([disabled])")];
        (focusLast ? enabled[enabled.length - 1] : enabled[0])?.focus();
        el.addEventListener("keydown", (e) => menuKeydown(e, el, button));
    };
    button.addEventListener("click", () => {
        assert(typeof show === "function", "the menu can open");
        assert(button.isConnected !== undefined, "the button is a node");
        show(false);
    });
    button.addEventListener("keydown", (e) => {
        assert(e && typeof e.key === "string", "a key event");
        assert(typeof e.preventDefault === "function", "events can be cancelled");
        if (e.key === "ArrowDown") { e.preventDefault(); show(false); }
        if (e.key === "ArrowUp") { e.preventDefault(); show(true); }
    });
}

document.addEventListener("pointerdown", (e) => {
    assert(e && e.target !== undefined, "a pointer event has a target");
    assert(openMenuEl === null || openMenuEl.el instanceof Element, "the open menu has an element");
    if (openMenuEl && !openMenuEl.el.contains(e.target) && !openMenuEl.button.contains(e.target)) closeMenu();
});
window.addEventListener("resize", closeMenu);

// --- dialogs ----------------------------------------------------------------

// Opens a modal sheet. buttons: [{label, action, primary, cancel, danger, disabled}]
// An action that returns false keeps the dialog open.
export function dialog({ title, body, buttons = [{ label: "Done", primary: true }], wide = false, onClose, label }) {
    assert(typeof title === "string", "a dialog has a title");
    assert(Array.isArray(buttons), "buttons come as a list");
    const titleId = "dlg-" + Math.random().toString(36).slice(2);
    const bar = h("div", { class: "sheet-bar" });
    const left = h("div", { class: "sheet-bar-side" });
    const right = h("div", { class: "sheet-bar-side end" });
    const dlg = h("dialog", { class: "sheet" + (wide ? " wide" : ""), "aria-labelledby": titleId });
    const close = () => {
        assert(dlg instanceof Element, "the dialog is an element");
        assert(typeof dlg.close === "function", "the dialog can close");
        if (dlg.open) dlg.close();
    };
    const made = [];
    for (const b of buttons) {
        const el = h("button", {
            type: "button", class: "button" + (b.primary ? " primary" : "") + (b.danger ? " danger" : ""), disabled: b.disabled,
            onclick: async () => {
                assert(typeof close === "function", "the dialog can close");
                assert(b.action === undefined || typeof b.action === "function", "an action is a function");
                const r = b.action ? await b.action() : undefined; if (r !== false) close();
            },
        }, b.label);
        made.push(el);
        (b.cancel ? left : right).append(el);
    }
    bar.append(left, h("h2", { id: titleId, class: "sheet-title", text: title }), right);
    const content = h("div", { class: "sheet-body" });
    if (body) content.append(body);
    dlg.append(bar, content);
    dlg.addEventListener("close", () => {
        assert(dlg instanceof Element, "the dialog is an element");
        assert(onClose === undefined || typeof onClose === "function", "onClose is a function");
        dlg.remove(); onClose && onClose();
    });
    dlg.addEventListener("click", (e) => {
        assert(e && e.target !== undefined, "a click has a target");
        assert(typeof close === "function", "the dialog can close");
        if (e.target === dlg) close();
    });
    document.body.append(dlg);
    dlg.showModal();
    const first = content.querySelector("input, textarea, select, button, [tabindex='0']");
    if (first && first.tagName !== "BUTTON") first.focus();
    assert(made.length === buttons.length, "one element per button");
    assert(dlg.open === true, "the dialog is open");
    assert(content.parentNode === dlg, "the body sits in the dialog");
    const setTitle = (t) => {
        assert(typeof t === "string", "a title is text");
        assert(dlg.querySelector(".sheet-title") !== null, "the title element exists");
        dlg.querySelector(".sheet-title").textContent = t;
    };
    return { dlg, body: content, close, buttons: made, setTitle };
}

export function alertBox(message, title = "Marklove") {
    assert(typeof title === "string", "an alert has a title");
    assert(message !== undefined, "an alert has a message");
    return new Promise((resolve) => {
        assert(typeof resolve === "function", "a promise can resolve");
        assert(typeof dialog === "function", "dialogs exist");
        dialog({ title, body: h("p", { class: "alert-text", text: message }), buttons: [{ label: "OK", primary: true }], onClose: resolve });
    });
}

// A choice with a destructive or other button. Resolves to the chosen value or null.
export function confirmBox({ title, message, choices }) {
    assert(typeof title === "string", "a choice has a title");
    assert(Array.isArray(choices), "choices come as a list");
    return new Promise((resolve) => {
        assert(typeof resolve === "function", "a promise can resolve");
        assert(typeof dialog === "function", "dialogs exist");
        let value = null;
        const body = h("div", {}, h("p", { class: "alert-text", text: message }));
        const row = h("div", { class: "confirm-row" });
        for (const c of choices) {
            row.append(h("button", {
                type: "button", class: "button" + (c.danger ? " danger" : "") + (c.primary ? " primary" : ""),
                onclick: () => {
                    assert(d !== undefined, "the dialog is open");
                    assert(c !== null && typeof c === "object", "a choice is a record");
                    value = c.value; d.close();
                },
            }, c.label));
        }
        row.append(h("button", { type: "button", class: "button", onclick: () => {
            assert(d !== undefined, "the dialog is open");
            assert(typeof d.close === "function", "the dialog can close");
            d.close();
        } }, "Cancel"));
        body.append(row);
        const d = dialog({ title, body, buttons: [], onClose: () => {
            assert(typeof resolve === "function", "a promise can resolve");
            assert(typeof value !== "function", "the value is data");
            resolve(value);
        } });
        row.querySelector("button")?.focus();
    });
}

// --- form rows -----------------------------------------------------------------

export function section(title, ...children) {
    assert(title === null || title === undefined || typeof title === "string", "a title is text or nothing");
    assert(Array.isArray(children), "children come as a list");
    const id = "sec-" + Math.random().toString(36).slice(2);
    return h("section", { class: "form-section", "aria-labelledby": title ? id : null },
        title ? h("h3", { id, class: "form-section-title", text: title }) : null, ...children);
}

export function footnote(text) {
    assert(text !== undefined && text !== null, "a footnote has text");
    assert(typeof h === "function", "elements can be made");
    return h("p", { class: "footnote", text });
}

export function toggleRow(label, checked, onChange, hint) {
    assert(typeof onChange === "function", "a toggle reports changes");
    assert(hint === undefined || typeof hint === "string", "a hint is text");
    const id = "t-" + Math.random().toString(36).slice(2);
    const input = h("input", { type: "checkbox", id, role: "switch", checked, onchange: (e) => {
        assert(e && e.target !== undefined, "a change has a target");
        assert(typeof onChange === "function", "a toggle reports changes");
        onChange(e.target.checked);
    } });
    return h("div", { class: "row" }, h("label", { for: id, class: "row-label" }, label, hint ? h("span", { class: "row-hint", text: hint }) : null), input);
}

export function selectRow(label, options, value, onChange) {
    assert(typeof onChange === "function", "a select reports changes");
    assert(Array.isArray(options), "options come as a list");
    const id = "s-" + Math.random().toString(36).slice(2);
    const sel = h("select", { id, onchange: (e) => {
        assert(e && e.target !== undefined, "a change has a target");
        assert(typeof onChange === "function", "a select reports changes");
        onChange(e.target.value);
    } }, options.map(([v, t]) => {
        assert(Array.isArray(options), "options come as a list");
        assert(v !== undefined, "an option has a value");
        return h("option", { value: v, selected: v === value }, t);
    }));
    return h("div", { class: "row" }, h("label", { for: id, class: "row-label", text: label }), sel);
}

export function segmented(label, options, value, onchange) {
    assert(typeof onchange === "function", "a picker reports changes");
    assert(Array.isArray(options), "options come as a list");
    const group = h("div", { class: "segmented", role: "radiogroup", "aria-label": label });
    const set = (v) => {
        assert(v === undefined || typeof v === "string", "a value is text");
        assert(group.children !== undefined, "the group has children");
        for (const b of group.children) {
            const on = b.dataset.value === v;
            b.setAttribute("aria-checked", String(on));
            b.dataset.active = String(on);
            b.tabIndex = on ? 0 : -1;
        }
    };
    for (const [v, t] of options) {
        group.append(h("button", { type: "button", class: "button", role: "radio", "data-value": v, onclick: () => {
            assert(typeof set === "function", "the picker can set");
            assert(typeof onchange === "function", "a picker reports changes");
            set(v); onchange(v);
        } }, t));
    }
    group.addEventListener("keydown", (e) => {
        assert(e && typeof e.key === "string", "a key event");
        assert(group.children !== undefined, "the group has children");
        const all = [...group.children];
        const i = all.indexOf(document.activeElement);
        if (i < 0) return;
        let j = -1;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % all.length;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + all.length) % all.length;
        if (j >= 0) { e.preventDefault(); all[j].focus(); all[j].click(); }
    });
    set(value);
    group.setValue = set;
    return group;
}

// --- files ------------------------------------------------------------------

export function download(blob, name) {
    assert(blob !== undefined && blob !== null, "a download has content");
    assert(typeof name === "string" && name.length > 0, "a download has a name");
    const url = URL.createObjectURL(blob);
    const a = h("a", { href: url, download: name, hidden: true });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => {
        assert(typeof url === "string", "the object URL is text");
        assert(url.length > 0, "the object URL is set");
        URL.revokeObjectURL(url);
    }, 60000);
}

export function pickFile(accept, multiple = false) {
    assert(typeof accept === "string", "accept is text");
    assert(typeof multiple === "boolean", "multiple is a flag");
    return new Promise((resolve) => {
        assert(typeof resolve === "function", "a promise can resolve");
        const input = h("input", { type: "file", accept, multiple, hidden: true });
        input.addEventListener("change", () => {
            assert(input.files !== null, "the input has files");
            assert(typeof resolve === "function", "a promise can resolve");
            resolve([...input.files]); input.remove();
        });
        input.addEventListener("cancel", () => {
            assert(typeof resolve === "function", "a promise can resolve");
            assert(input instanceof Element, "the input is an element");
            resolve([]); input.remove();
        });
        document.body.append(input);
        input.click();
    });
}

export async function copyText(text) {
    assert(text !== undefined && text !== null, "there is text to copy");
    assert(typeof navigator === "object", "the navigator exists");
    try { await navigator.clipboard.writeText(text); return true; }
    catch {
        const t = h("textarea", { style: { position: "fixed", opacity: "0" } });
        t.value = text;
        document.body.append(t);
        t.select();
        const ok = document.execCommand("copy");
        t.remove();
        return ok;
    }
}

export function blobToDataURL(blob) {
    assert(blob !== undefined && blob !== null, "a data URL comes from a blob");
    assert(typeof FileReader === "function", "the browser reads files");
    return new Promise((resolve, reject) => {
        assert(typeof resolve === "function", "a promise can resolve");
        assert(typeof reject === "function", "a promise can reject");
        const r = new FileReader();
        r.onload = () => {
            assert(typeof r.result === "string", "the result is a data URL");
            assert(typeof resolve === "function", "a promise can resolve");
            resolve(r.result);
        };
        r.onerror = () => {
            assert(typeof reject === "function", "a promise can reject");
            assert(r.error !== undefined, "the reader has an error");
            reject(r.error);
        };
        r.readAsDataURL(blob);
    });
}

export const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
export const cmdKey = isMac ? "⌘" : "Ctrl+";

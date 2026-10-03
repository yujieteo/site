// Page-shell controls shared by every page: the narrow-screen navigation menu
// and the footer's colour-theme switch. Both are hidden until this script runs,
// so without JavaScript the navigation stays open and the theme follows the
// system setting.
import { fadeIn } from "./fade.js";

const header = document.querySelector(".site-header");
const toggle = header?.querySelector("[data-nav-toggle]");
const nav = header?.querySelector(".site-nav");
if (header instanceof HTMLElement && toggle instanceof HTMLElement && nav instanceof HTMLElement) {
  const narrow = window.matchMedia("(max-width: 36rem)");
  header.classList.add("has-nav-toggle");
  toggle.hidden = false;

  /** @param {boolean} open */
  const setOpen = (open, { focus = false } = {}) => {
    toggle.setAttribute("aria-expanded", String(open));
    header.classList.toggle("nav-open", open);
    if (open) {
      fadeIn(nav);
      if (focus) nav.querySelector("a")?.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true", { focus: true });
  });
  // Escape closes the menu and returns focus to its button.
  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  // Tabbing out of the open menu closes it, so it never covers the page.
  header.addEventListener("focusout", (event) => {
    if (narrow.matches && header.classList.contains("nav-open") && !header.contains(/** @type {Node | null} */ (event.relatedTarget))
        && event.relatedTarget) {
      setOpen(false);
    }
  });
  narrow.addEventListener("change", () => setOpen(false));
}

const themeSwitch = document.querySelector("[data-theme-switch]");
if (themeSwitch instanceof HTMLElement) {
  const root = document.documentElement;
  const read = () => {
    try { return localStorage.getItem("theme") || "system"; } catch { return "system"; }
  };
  /** @param {string} choice */
  const apply = (choice) => {
    if (choice === "light" || choice === "dark") root.dataset.theme = choice;
    else delete root.dataset.theme;
    /** @type {NodeListOf<HTMLElement>} */ (themeSwitch.querySelectorAll("[data-theme-choice]")).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === choice));
    });
  };
  apply(read());
  themeSwitch.hidden = false;
  themeSwitch.addEventListener("click", (event) => {
    const button = /** @type {HTMLElement | null} */ (/** @type {Element} */ (event.target).closest("[data-theme-choice]"));
    if (!button) return;
    // The selector above guarantees the attribute.
    const choice = /** @type {string} */ (button.dataset.themeChoice);
    try {
      if (choice === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", choice);
    } catch { /* Storage can be unavailable; the choice still applies to this page. */ }
    apply(choice);
  });
}

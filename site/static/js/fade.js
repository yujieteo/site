// Shared fade helpers. Fading is the site's only motion: CSS handles page
// loads, hover/focus states and elements that appear (see "Fades" in
// style.css); these helpers cover state changes CSS cannot see, such as text
// replaced in place, <details> opening and panels closing. Durations and easing
// come from the --fade-duration and --fade-ease tokens, and everything is
// skipped under prefers-reduced-motion. Nothing here ever starts hidden, so
// content stays visible if this script fails to load.

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const timing = () => {
  const style = getComputedStyle(document.documentElement);
  const value = style.getPropertyValue("--fade-duration").trim() || "200ms";
  const duration = value.endsWith("ms") ? parseFloat(value) : parseFloat(value) * 1000;
  return {
    duration: Number.isFinite(duration) ? duration : 200,
    easing: style.getPropertyValue("--fade-ease").trim() || "ease-out",
  };
};

const enabled = (element) => element && typeof element.animate === "function"
  && !reducedMotion.matches && timing().duration > 0;

export function fadeIn(element) {
  if (!enabled(element)) return;
  element.animate([{ opacity: 0 }, { opacity: 1 }], timing());
}

// Resolves true once the element has faded out (or at once when motion is
// off), false if the fade was cancelled, for example by reopening.
export function fadeOut(element, options = {}) {
  if (!enabled(element)) return Promise.resolve(true);
  const animation = element.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    { ...timing(), fill: "forwards", ...options },
  );
  return animation.finished.then(() => true, () => false);
}

export function cancelFade(element) {
  element?.getAnimations?.().forEach((animation) => animation.cancel());
}

// Fade in the body of any <details> as it opens (toggle does not bubble).
document.addEventListener("toggle", (event) => {
  const details = event.target;
  if (!(details instanceof HTMLDetailsElement) || !details.open) return;
  for (const child of details.children) {
    if (child.tagName !== "SUMMARY") fadeIn(child);
  }
}, true);

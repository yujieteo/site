// Blog post page: highlight the current section in the "On this page" list,
// and collapse the post list on narrow screens. Copy Markdown is
// copy-markdown.js.

const nav = document.querySelector("[data-docs-nav]");
const narrow = window.matchMedia("(max-width: 48rem)");
if (nav instanceof HTMLDetailsElement && narrow.matches) nav.open = false;

const toc = document.querySelector("[data-toc]");
if (toc) {
  const links = new Map(
    [.../** @type {NodeListOf<HTMLAnchorElement>} */ (toc.querySelectorAll('a[href^="#"]'))].map((link) => [
      decodeURIComponent(link.hash.slice(1)),
      link,
    ]),
  );
  const headings = [...links.keys()]
    .map((id) => document.getElementById(id))
    .filter((heading) => heading !== null);

  const update = () => {
    // The current section is the last heading scrolled past the top band.
    const threshold = window.innerHeight * 0.25;
    let current = headings[0];
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= threshold) current = heading;
      else break;
    }
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = headings[headings.length - 1];
    for (const [id, link] of links) {
      if (current && id === current.id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

  let queued = false;
  window.addEventListener(
    "scroll",
    () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        update();
      });
    },
    { passive: true },
  );
  window.addEventListener("resize", update);
  update();
}

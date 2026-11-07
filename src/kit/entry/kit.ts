function closeNotes(except: Element | null): void {
  for (const fn of document.querySelectorAll(".fn[data-open]")) {
    if (fn === except) continue;
    fn.removeAttribute("data-open");
    fn.querySelector(".fn-ref")?.setAttribute("aria-expanded", "false");
  }
}

function toggleNote(fn: Element): void {
  const open = fn.hasAttribute("data-open");
  closeNotes(fn);
  if (open) fn.removeAttribute("data-open");
  else fn.setAttribute("data-open", "");
  fn.querySelector(".fn-ref")?.setAttribute("aria-expanded", String(!open));
}

function wireNotes(): void {
  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const fn = target?.closest(".fn") ?? null;
    if (fn && target?.closest(".fn-ref")) toggleNote(fn);
    else closeNotes(null);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNotes(null);
  });
}

wireNotes();

const MARGIN = "900px 0px";

function watchLazy(): void {
  const seen = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const kind = entry.target.getAttribute("data-kind") ?? "";
        if (!entry.isIntersecting || seen.has(kind)) continue;
        seen.add(kind);
        void import(`/kit/${kind}.js`);
      }
    },
    { rootMargin: MARGIN },
  );
  for (const figure of document.querySelectorAll("figure[data-lazy]")) observer.observe(figure);
}

watchLazy();

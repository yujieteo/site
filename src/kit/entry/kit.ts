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
    if (event.key !== "Escape") return;
    closeNotes(null);
    const held = document.activeElement;
    if (held instanceof HTMLElement && held.closest(".fn")) held.blur();
  });
}

wireNotes();

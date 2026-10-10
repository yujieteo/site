// Notes: search the notes and their summaries (every word must appear), and open the tree to a hit.
(() => {
  const $ = (s, r = document) => r.querySelector(s), form = $(".sift"), q = $("input", form), out = $("output", form), hits = $(".hits");
  const items = [...document.querySelectorAll(".tree li[id]")].map((li) => {
    const head = $(":scope > details > summary", li) || li, label = head.firstElementChild.textContent;
    return [li.id, label, head.textContent.slice(label.length), head.textContent.toLowerCase()];
  });
  const on = { s: true, n: true }, most = 200;
  const show = () => {
    const words = q.value.toLowerCase().split(/\s+/).filter(Boolean);
    const found = words.length ? items.filter(([id, , , hay]) => on[id[0]] && words.every((w) => hay.includes(w))) : [];
    const s = found.filter(([id]) => id[0] === "s").length, n = found.length - s;
    hits.hidden = !words.length;
    out.value = words.length ? `${s} ${s === 1 ? "summary" : "summaries"}, ${n} ${n === 1 ? "note" : "notes"}${found.length > most ? `; the first ${most} shown` : ""}` : "";
    hits.replaceChildren(...found.slice(0, most).map(([id, label, text]) => {
      const li = document.createElement("li"), a = li.appendChild(Object.assign(document.createElement("a"), { href: "#" + id }));
      a.append(Object.assign(document.createElement("span"), { textContent: label }), text.length > 280 ? text.slice(0, 280) + "…" : text);
      return li;
    }));
  };
  // A hit's link opens every branch above it; so does a link from the site's search.
  const go = () => {
    const t = document.getElementById(location.hash.slice(1));
    if (!t?.closest(".tree")) return;
    for (let d = t.closest("details"); d; d = d.parentElement.closest("details")) d.open = true;
    t.scrollIntoView();
  };
  form.addEventListener("submit", (e) => e.preventDefault());
  q.addEventListener("input", show);
  for (const b of form.querySelectorAll("button")) b.addEventListener("click", () => (b.setAttribute("aria-pressed", (on[b.value] = !on[b.value])), show()));
  hits.addEventListener("click", (e) => e.target.closest("a")?.hash === location.hash && go());
  addEventListener("hashchange", go), go();
})();

/* ==========================================================================
   Savana — i18n engine
   Reads the active locale, sets <html lang/dir>, fills every [data-i18n*]
   hook, and renders the data-driven collections (dishes, gallery,
   testimonials). Runs before main.js (both are deferred, order preserved),
   so the interaction layer always sees a fully-populated DOM.

   Adding a language = add js/i18n/<code>.js + list it in <head>. No markup
   changes, no strings hard-coded in components.
   ========================================================================== */
(() => {
  "use strict";

  const I18N = window.SAVANA_I18N;
  const DEFAULT = "ar";
  const STORE_KEY = "savana.locale";

  if (!I18N || !I18N.locales || !I18N.locales[DEFAULT]) return;

  const base = I18N.locales[DEFAULT];
  const saved = (() => {
    try { return localStorage.getItem(STORE_KEY); } catch { return null; }
  })();
  const code = saved && I18N.locales[saved] ? saved : DEFAULT;
  const L = I18N.locales[code];

  /* string lookup: active locale → base locale → key (never blank) */
  const t = (key) =>
    (L.strings && L.strings[key]) ??
    (base.strings && base.strings[key]) ??
    key;

  /* ---------- document shell ---------- */
  const root = document.documentElement;
  root.lang = L.meta.lang;
  root.dir = L.meta.dir;

  document.title = t("meta.title");
  const setMeta = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) el.setAttribute("content", val);
  };
  setMeta('meta[name="description"]', t("meta.description"));
  setMeta('meta[property="og:title"]', t("meta.title"));
  setMeta('meta[property="og:description"]', t("footer.tag"));

  /* ---------- text hooks ---------- */
  // plain text
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  // trusted rich text (line breaks etc.) — all values are authored by us
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  // attributes: data-i18n-attr="aria-label:key; placeholder:key2"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const idx = pair.indexOf(":");
      if (idx === -1) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  /* ---------- collections (merge active text over base structure) ---------- */
  const collection = (name) => {
    const src = (L[name] && L[name].length ? L[name] : base[name]) || [];
    return src.map((item, i) => ({ ...(base[name] && base[name][i]), ...item }));
  };

  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  };

  const imgTag = (src, alt, w, h) =>
    `<img src="${src}" alt="${alt}" width="${w}" height="${h}"` +
    ` loading="lazy" decoding="async" data-placeholder>`;

  // ---- dishes ----
  const dishesWrap = document.querySelector("[data-dishes]");
  if (dishesWrap) {
    dishesWrap.replaceChildren(
      ...collection("dishes").map((d, i) => {
        const card = el("article", "dish reveal");
        card.setAttribute("role", "listitem");
        card.style.setProperty("--d", `${0.05 + i * 0.07}s`);
        card.innerHTML =
          `<div class="dish__media img-reveal">${imgTag(d.img, d.alt || d.name, 900, 1125)}</div>` +
          `<p class="dish__tag">${d.tag}</p>` +
          `<h3 class="dish__name">${d.name}</h3>` +
          `<p class="dish__desc">${d.desc}</p>` +
          `<p class="dish__price"><bdi class="dish__amount">₪${d.price}</bdi></p>`;
        return card;
      })
    );
  }

  // ---- gallery ----
  const galleryWrap = document.querySelector("[data-gallery]");
  if (galleryWrap) {
    galleryWrap.replaceChildren(
      ...collection("gallery").map((g, i) => {
        const fig = el(
          "figure",
          "gallery__item reveal" + (g.wide ? " gallery__item--wide" : "")
        );
        fig.style.setProperty("--d", `${0.05 + i * 0.05}s`);
        const w = g.wide ? 1200 : 800;
        const h = g.wide ? 800 : 1000;
        fig.innerHTML =
          imgTag(g.img, g.caption, w, h) +
          `<figcaption>${g.caption}</figcaption>`;
        return fig;
      })
    );
  }

  // ---- testimonials ----
  const quotesTrack = document.querySelector("[data-testimonials]");
  if (quotesTrack) {
    quotesTrack.replaceChildren(
      ...collection("testimonials").map((q, i) => {
        const fig = el("figure", "quote" + (i === 0 ? " is-active" : ""));
        fig.innerHTML =
          `<blockquote>${q.quote}</blockquote>` +
          `<figcaption>${q.name} <span>· ${q.place}</span></figcaption>`;
        return fig;
      })
    );
  }

  /* ---------- language toggle ---------- */
  const setLocale = (next) => {
    try { localStorage.setItem(STORE_KEY, next); } catch { /* ignore */ }
    location.reload();
  };

  // the toggle always points to the "other" locale (2-language setup)
  const others = Object.keys(I18N.locales).filter((c) => c !== code);
  const nextCode = others[0];
  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    if (!nextCode) { btn.hidden = true; return; }
    const target = I18N.locales[nextCode];
    btn.textContent = target.meta.switchLabel || target.meta.label;
    btn.setAttribute("aria-label", t("lang.toggle.aria"));
    btn.addEventListener("click", () => setLocale(nextCode));
  });

  /* expose a tiny API for main.js (direction-aware behaviour) */
  window.SAVANA = Object.assign(window.SAVANA || {}, {
    locale: code,
    dir: L.meta.dir,
    t,
    setLocale,
  });
})();

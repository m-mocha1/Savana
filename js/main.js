/* Savana — Restaurant & Caffe · interactions */
(() => {
  "use strict";

  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header: solid after scrolling past the hero's top ---------- */
  const header = document.getElementById("site-header");
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const overlay = document.getElementById("menu-overlay");

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    overlay.classList.toggle("is-open", open);
    overlay.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () =>
    setMenu(toggle.getAttribute("aria-expanded") !== "true")
  );
  overlay.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setMenu(false))
  );
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) setMenu(false);
  });

  /* ---------- Scroll reveals ---------- */
  const revealables = document.querySelectorAll(".reveal, .img-reveal");
  if (prefersReducedMotion) {
    revealables.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );
    revealables.forEach((el) => io.observe(el));
  }

  /* ---------- Hero parallax ---------- */
  const heroBg = document.querySelector(".hero__bg");
  if (heroBg && !prefersReducedMotion) {
    let ticking = false;
    const parallax = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `translate3d(0, ${y * 0.3}px, 0)`;
      }
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(parallax);
        }
      },
      { passive: true }
    );
  }

  /* ---------- Active nav link ---------- */
  const navLinks = document.querySelectorAll(".site-nav__list a");
  const sectionByLink = new Map(
    [...navLinks].map((a) => [document.querySelector(a.hash), a])
  );
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.removeAttribute("aria-current"));
          const link = sectionByLink.get(entry.target);
          if (link) link.setAttribute("aria-current", "true");
        }
      }
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sectionByLink.forEach((_, section) => section && spy.observe(section));

  /* ---------- Testimonials slider ---------- */
  const slider = document.querySelector("[data-slider]");
  if (slider) {
    const slides = [...slider.querySelectorAll(".quote")];
    const dotsWrap = slider.querySelector(".quotes__dots");
    let index = 0;
    let timer = null;

    const dots = slides.map((_, i) => {
      const dot = document.createElement("button");
      dot.className = "quotes__dot";
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Testimonial ${i + 1}`);
      dot.addEventListener("click", () => go(i, true));
      dotsWrap.appendChild(dot);
      return dot;
    });

    const render = () => {
      slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
      dots.forEach((d, i) =>
        d.setAttribute("aria-selected", String(i === index))
      );
    };

    const go = (i, user) => {
      index = (i + slides.length) % slides.length;
      render();
      if (user) restart();
    };

    const restart = () => {
      clearInterval(timer);
      if (!prefersReducedMotion) {
        timer = setInterval(() => go(index + 1), 6500);
      }
    };

    slider.querySelector("[data-prev]").addEventListener("click", () => go(index - 1, true));
    slider.querySelector("[data-next]").addEventListener("click", () => go(index + 1, true));
    slider.addEventListener("mouseenter", () => clearInterval(timer));
    slider.addEventListener("mouseleave", restart);
    document.addEventListener("visibilitychange", () =>
      document.hidden ? clearInterval(timer) : restart()
    );

    render();
    restart();
  }

  /* ---------- Placeholder image fallback ----------
     If a remote placeholder fails to load (offline, URL retired),
     swap in a branded stone-and-crest tile so the layout never breaks. */
  const CREST =
    "<svg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>" +
    "<path d='M32 4c4.5 9.5 8.5 18.5 0 32C23.5 22.5 27.5 13.5 32 4Z'/>" +
    "<path d='M12 18c10 2 17 8 18.6 19C19 35 12 28.5 12 18Z'/>" +
    "<path d='M52 18c-10 2-17 8-18.6 19C45 35 52 28.5 52 18Z'/>" +
    "<rect x='20' y='42' width='24' height='5' rx='2.5'/>" +
    "<rect x='25' y='50' width='14' height='4' rx='2'/></svg>";

  document.querySelectorAll("img[data-placeholder]").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        const tile = document.createElement("div");
        tile.className = "img-fallback";
        tile.setAttribute("role", "img");
        tile.setAttribute("aria-label", img.alt || "Savana");
        tile.innerHTML = CREST;
        img.replaceWith(tile);
      },
      { once: true }
    );
    // handle images that already failed before this script ran
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event("error"));
    }
  });

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();

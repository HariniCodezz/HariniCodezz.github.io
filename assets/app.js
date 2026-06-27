import "../src/render.js";

const $ = (s) => document.querySelector(s);

function setTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch (_) {}
}

function initThemeToggle() {
  const btn = $("#themeToggle");
  if (!btn) return;

  const saved = (() => {
    try { return localStorage.getItem("theme"); } catch { return null; }
  })();

  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else {
    const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }

  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(cur === "dark" ? "light" : "dark");
  });
}

function initSmoothNav() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-scroll]");
    if (!a) return;
    const id = a.getAttribute("href");
    if (!id || !id.startsWith("#")) return;
    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function initReveal() {
  const nodes = Array.from(document.querySelectorAll(".reveal"));
  if (!nodes.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const ent of entries) {
        if (ent.isIntersecting) {
          ent.target.classList.add("in");
          io.unobserve(ent.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  nodes.forEach((n) => io.observe(n));
}

function initContactScroll() {
  const btn = $("#btnContactMe");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const target = document.querySelector("#contact");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

initThemeToggle();
initSmoothNav();
initReveal();
initContactScroll();


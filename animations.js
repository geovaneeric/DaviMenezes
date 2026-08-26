/**
 * animations.js
 * Scroll-reveal via IntersectionObserver e a animação do "slate" no hero.
 */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
  });
}

function initTimecode() {
  const el = document.getElementById("timecode");
  if (!el || prefersReducedMotion) return;

  let frame = 0;
  const fps = 24;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    frame++;
    const totalSeconds = Math.floor(frame / fps);
    const hh = Math.floor(totalSeconds / 3600);
    const mm = Math.floor((totalSeconds % 3600) / 60);
    const ss = totalSeconds % 60;
    const ff = frame % fps;
    el.textContent = `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", initTimecode);

// re-observa quando os cartões de pacote forem injetados por packages.js
document.addEventListener("packages:rendered", initScrollReveal);
document.addEventListener("DOMContentLoaded", initScrollReveal);

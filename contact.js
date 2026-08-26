/**
 * contact.js
 * Copiar e-mail com um clique, toast de feedback e o efeito de
 * spotlight que segue o cursor no botão de WhatsApp.
 */

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function initCopyToClipboard() {
  document.querySelectorAll("[data-copy]").forEach((el) => {
    el.addEventListener("click", async () => {
      const value = el.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(value);
        showToast("E-mail copiado!");
      } catch (err) {
        showToast(value); // fallback: mostra o valor caso o clipboard falhe
      }
    });
  });
}

function initPrimarySpotlight() {
  const primary = document.getElementById("contactPrimary");
  if (!primary) return;

  primary.addEventListener("pointermove", (e) => {
    const rect = primary.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    primary.style.setProperty("--mx", `${x}%`);
    primary.style.setProperty("--my", `${y}%`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCopyToClipboard();
  initPrimarySpotlight();
});
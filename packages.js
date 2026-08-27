/**
 * packages.js
 * Renderiza os cartões de pacotes e serviços a partir de data.js.
 */

function createPackageCard(pkg) {
  const card = document.createElement("article");

  if (pkg.cta) {
    card.className = "package-card package-card--cta reveal";
    card.innerHTML = `
      <span class="package-card__name">${pkg.tier}</span>
      <p class="package-card__cta-desc">${pkg.desc}</p>
      <a class="package-card__cta-link" href="${pkg.ctaHref}" target="_blank" rel="noopener">
        ${pkg.ctaLabel} →
      </a>
    `;
    return card;
  }

  card.className = "package-card reveal" + (pkg.plus ? " package-card--plus" : "");

  const list = pkg.items.map((item) => `<li>${item}</li>`).join("");

  card.innerHTML = `
    <div class="package-card__head">
      <span class="package-card__name">${pkg.tier}</span>
    </div>
    <div class="package-card__price">
      R$ ${pkg.price.toLocaleString("pt-BR")}
    </div>
    <ul class="package-card__list">${list}</ul>
  `;

  return card;
}

function renderMainPackages() {
  const container = document.getElementById("mainPackages");
  if (!container) return;

  const pairs = MAIN_PACKAGES.filter((pkg) => !pkg.cta);
  const ctaCards = MAIN_PACKAGES.filter((pkg) => pkg.cta);

  // agrupa em pares: [Básico, Básico Plus], [Intermediário, Intermediário Plus], ...
  for (let i = 0; i < pairs.length; i += 2) {
    const row = document.createElement("div");
    row.className = "tier-row";
    row.dataset.stagger = "";
    row.appendChild(createPackageCard(pairs[i]));
    if (pairs[i + 1]) row.appendChild(createPackageCard(pairs[i + 1]));
    container.appendChild(row);
  }

  // card(s) de CTA ficam sozinhos, ocupando a linha inteira
  ctaCards.forEach((pkg) => {
    const row = document.createElement("div");
    row.className = "tier-row tier-row--cta";
    row.appendChild(createPackageCard(pkg));
    container.appendChild(row);
  });
}

function renderShortPackages() {
  const container = document.getElementById("shortPackages");
  if (!container) return;

  SHORT_PACKAGES.forEach((pkg) => container.appendChild(createPackageCard(pkg)));
}

function renderExtraServices() {
  const container = document.getElementById("extraServices");
  if (!container) return;

  EXTRA_SERVICES.forEach((service) => {
    const card = document.createElement("article");
    card.className = "extra-card reveal";
    card.innerHTML = `
      <span class="extra-card__label">${service.label}</span>
      <div class="extra-card__price">${service.price}</div>
      <p class="extra-card__desc">${service.desc}</p>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMainPackages();
  renderShortPackages();
  renderExtraServices();
  // avisa main.js/animations.js que novos elementos .reveal existem
  document.dispatchEvent(new CustomEvent("packages:rendered"));
});

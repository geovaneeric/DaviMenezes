/**
 * packages.js
 * Renderiza os cartões de pacotes e serviços a partir de data.js.
 */

function createPackageCard(pkg) {
  const card = document.createElement("article");

  if (pkg.cta) {
    card.className = "package-card package-card--cta reveal";
    card.innerHTML = `
      <div class="package-card__head">
        <span class="package-card__name">${pkg.tier}</span>
      </div>
      <div class="package-card__price package-card__price--cta">Sob consulta</div>
      <ul class="package-card__list">
        <li>${pkg.desc}</li>
      </ul>
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

  // agrupa em pares, na ordem normal do array (o CTA entra no par que sobrar)
  for (let i = 0; i < MAIN_PACKAGES.length; i += 2) {
    const row = document.createElement("div");
    row.className = "tier-row";
    row.dataset.stagger = "";
    row.appendChild(createPackageCard(MAIN_PACKAGES[i]));
    if (MAIN_PACKAGES[i + 1]) row.appendChild(createPackageCard(MAIN_PACKAGES[i + 1]));
    container.appendChild(row);
  }
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
  document.dispatchEvent(new CustomEvent("packages:rendered"));
});

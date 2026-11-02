const GITHUB_USERNAME = "dannymedinacoronel";
const MARKETPLACE_REPOSITORY = "marketplace-extensiones";
const GITHUB_API = "https://api.github.com";
const DEFAULT_REPOSITORIES = [
  {
    name: "DivisaGo-Extension",
    description: "Conversor de divisas, criptomonedas y metales para Chrome.",
    topics: ["chrome-extension", "currency"],
    html_url: `https://github.com/${GITHUB_USERNAME}/DivisaGo-Extension`,
    stargazers_count: null,
    updated_at: "",
    language: null,
    fork: false,
    archived: false,
    private: false,
  },
  {
    name: "Fraseo-Extension",
    description: "Plantillas de texto y abreviaturas para escribir más rápido.",
    topics: ["chrome-extension", "productivity"],
    html_url: `https://github.com/${GITHUB_USERNAME}/Fraseo-Extension`,
    stargazers_count: null,
    updated_at: "",
    language: null,
    fork: false,
    archived: false,
    private: false,
  },
  {
    name: "FullPagesaver-Extension",
    description: "Guarda páginas web completas como HTML o PDF.",
    topics: ["chrome-extension", "productivity"],
    html_url: `https://github.com/${GITHUB_USERNAME}/FullPagesaver-Extension`,
    stargazers_count: null,
    updated_at: "",
    language: null,
    fork: false,
    archived: false,
    private: false,
  },
  {
    name: "Pausa-Bloom",
    description: "Organiza tus descansos y cultiva un jardín con cada pausa.",
    topics: ["chrome-extension", "wellness"],
    html_url: `https://github.com/${GITHUB_USERNAME}/Pausa-Bloom`,
    stargazers_count: null,
    updated_at: "",
    language: null,
    fork: false,
    archived: false,
    private: false,
  },
];
const EXTENSION_PATTERN = /extension|chrome[- ]?addon|browser[- ]?addon|browser[- ]?extension|pausa[- ]?bloom/i;
const CATEGORY_RULES = [
  { id: "finance", label: "Finanzas", pattern: /divisa|currency|finance|finanzas|crypto|cripto|exchange|conversor/i },
  { id: "wellness", label: "Bienestar", pattern: /pausa[- ]?bloom|descanso|pausas|wellness/i },
  { id: "productivity", label: "Productividad", pattern: /fraseo|productiv|texto|text|shortcut|snippet|plantilla|abbreviation/i },
];
const ICON_STYLES = ["lime", "lilac", "peach", "blue", "rose", "mint"];
const PRODUCT_IMAGES = {
  "DivisaGo-Extension": "https://raw.githubusercontent.com/dannymedinacoronel/DivisaGo-Extension/b18e90ead874d717e74ab856cfa0b87a8e15e7cb/docs/capturas/captura-1-convertir-1280x800.png",
  "Fraseo-Extension": "https://raw.githubusercontent.com/dannymedinacoronel/Fraseo-Extension/3ce77cddfc5460c8f4beaa1c58a7950221bc1297/docs/capturas/panel-claro.png",
  "FullPagesaver-Extension": "https://raw.githubusercontent.com/dannymedinacoronel/FullPagesaver-Extension/b63df417d9318de9797d7ee7621c121ccef31a9d/docs/capturas/portada.png",
  "Pausa-Bloom": "https://raw.githubusercontent.com/dannymedinacoronel/Pausa-Bloom/main/assets/hero.svg",
};
const STORE_LINKS = {
  "DivisaGo-Extension": "https://chromewebstore.google.com/detail/divisago/jogebdgecfomainlnogekiafnflbbfak",
  "FullPagesaver-Extension": "https://chromewebstore.google.com/detail/fullpage-saver-%E2%80%93-guardar/igjphghlkmidddmnmlmdnhnepehpoena",
};
const PRODUCT_TITLES = {
  "DivisaGo-Extension": "Divisa&Go",
  "Fraseo-Extension": "Fraseo",
  "FullPagesaver-Extension": "FullPage Saver",
  "Pausa-Bloom": "Pausa Bloom",
};
const PRODUCT_DETAILS = {
  "DivisaGo-Extension": {
    tagline: "Tu dinero, sin fronteras.",
    features: [
      "Conversor de más de 150 divisas con referencias diarias.",
      "Calculadora con márgenes, evolución de tipos y comparación de fuentes.",
      "Consulta precios de criptomonedas y metales.",
    ],
    install: ["Abre la ficha en Chrome Web Store.", "Pulsa «Añadir a Chrome» y confirma la instalación."],
    screenshots: [
      { url: PRODUCT_IMAGES["DivisaGo-Extension"], alt: "Vista principal del conversor Divisa&Go" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/DivisaGo-Extension/b18e90ead874d717e74ab856cfa0b87a8e15e7cb/docs/capturas/captura-2-calculadora-1280x800.png", alt: "Calculadora de Divisa&Go" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/DivisaGo-Extension/b18e90ead874d717e74ab856cfa0b87a8e15e7cb/docs/capturas/captura-3-evolucion-1280x800.png", alt: "Evolución de tipos de cambio en Divisa&Go" },
    ],
  },
  "Fraseo-Extension": {
    tagline: "Tus textos de siempre, listos con un atajo.",
    features: [
      "Guarda plantillas y pégalas desde el panel lateral o con abreviaturas.",
      "Rellena campos y variables como fecha y hora automáticamente.",
      "Organiza tus textos, usa atajos y crea copias de seguridad.",
    ],
    install: [
      "Descarga el ZIP desde la última versión de GitHub y descomprímelo.",
      "Abre chrome://extensions y activa el modo de desarrollador.",
      "Pulsa «Cargar descomprimida» y selecciona la carpeta.",
    ],
    screenshots: [
      { url: PRODUCT_IMAGES["Fraseo-Extension"], alt: "Panel de plantillas de Fraseo" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/Fraseo-Extension/3ce77cddfc5460c8f4beaa1c58a7950221bc1297/docs/capturas/editor.png", alt: "Editor de plantillas de Fraseo" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/Fraseo-Extension/3ce77cddfc5460c8f4beaa1c58a7950221bc1297/docs/capturas/ajustes.png", alt: "Ajustes de Fraseo" },
    ],
  },
  "FullPagesaver-Extension": {
    tagline: "Guarda la web entera, tal y como la ves.",
    features: [
      "Guarda páginas completas como HTML o PDF.",
      "Prepara el contenido de la página antes de guardarlo.",
      "Consulta la ficha de Chrome Web Store para ver requisitos y detalles.",
    ],
    install: ["Abre la ficha de FullPage Saver en Chrome Web Store.", "Pulsa «Añadir a Chrome» y confirma la instalación."],
    screenshots: [
      { url: PRODUCT_IMAGES["FullPagesaver-Extension"], alt: "Presentación de FullPage Saver" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/FullPagesaver-Extension/b63df417d9318de9797d7ee7621c121ccef31a9d/docs/capturas/tienda-1.png", alt: "Captura de FullPage Saver en Chrome Web Store" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/FullPagesaver-Extension/b63df417d9318de9797d7ee7621c121ccef31a9d/docs/capturas/vista-previa.png", alt: "Vista previa en FullPage Saver" },
    ],
  },
  "Pausa-Bloom": {
    tagline: "Tus descansos, a tu ritmo. Un jardín que crece contigo.",
    features: [
      "Configura jornadas largas o cortas y organiza las pausas de tu día.",
      "Registra descansos con un toque, con temporizador opcional y calendario mensual.",
      "Sigue tu progreso con estadísticas, rachas y un jardín animado.",
      "Personaliza temas e iconos; exporta y restaura tus datos con copias de seguridad y CSV.",
      "Tus pausas se guardan localmente; Telegram es opcional para recibir avisos en el móvil.",
    ],
    install: [
      "Descarga PausaBloom-Chrome-Edge.zip desde el último lanzamiento de GitHub y descomprímelo.",
      "Abre chrome://extensions en Chrome o edge://extensions en Edge.",
      "Activa el modo de desarrollador, pulsa «Cargar descomprimida» y selecciona la carpeta extraída.",
    ],
    screenshots: [
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/Pausa-Bloom/main/assets/hoy.svg", alt: "Vista de hoy y progreso en Pausa Bloom" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/Pausa-Bloom/main/assets/calendario.svg", alt: "Calendario de descansos en Pausa Bloom" },
      { url: "https://raw.githubusercontent.com/dannymedinacoronel/Pausa-Bloom/main/assets/ajustes.svg", alt: "Temas y ajustes de Pausa Bloom" },
    ],
  },
};
const STORE_REVIEW_LINKS = {
  "DivisaGo-Extension": `${STORE_LINKS["DivisaGo-Extension"]}/reviews`,
  "FullPagesaver-Extension": `${STORE_LINKS["FullPagesaver-Extension"]}/reviews`,
};
const INSTALL_STEPS = {
  "DivisaGo-Extension": "store",
  "FullPagesaver-Extension": "store",
  "Fraseo-Extension": "download",
  "Pausa-Bloom": "download",
};
const DOWNLOAD_LINKS = {
  "Pausa-Bloom": "https://github.com/dannymedinacoronel/Pausa-Bloom/releases/latest/download/PausaBloom-Chrome-Edge.zip",
};

const elements = {
  grid: document.querySelector("#product-grid"),
  count: document.querySelector("#catalog-count"),
  results: document.querySelector("#results-label"),
  search: document.querySelector("#search-input"),
  sort: document.querySelector("#sort-select"),
  installFilter: document.querySelector("#install-filter"),
  filters: [...document.querySelectorAll(".filter-chip")],
  empty: document.querySelector("#empty-state"),
  error: document.querySelector("#error-state"),
  errorMessage: document.querySelector("#error-message"),
  refresh: document.querySelector("#refresh-button"),
  clearSearch: document.querySelector("#clear-search"),
  retry: document.querySelector("#retry-button"),
  releaseList: document.querySelector("#release-list"),
  dialog: document.querySelector("#product-dialog"),
  dialogContent: document.querySelector("#dialog-content"),
};

let allExtensions = [];
let currentFilter = "all";
let profile = {
  login: GITHUB_USERNAME,
  name: "Danny Medina Coronel",
  avatar_url: "https://avatars.githubusercontent.com/u/39246816?v=4",
  html_url: `https://github.com/${GITHUB_USERNAME}`,
};
let releaseData = [];
let carouselTimer;
let heroTimer;
let heroSlides = [];
let heroSlideIndex = 0;
let heroImageLayer = "a";
let heroImageRequest = 0;
const HERO_SLIDE_DURATION = 7200;
const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

document.documentElement.dataset.theme = localStorage.getItem("marketplace-theme") === "light" ? "light" : "dark";
const themeToggle = document.querySelector("#theme-toggle");
themeToggle.setAttribute("aria-label", `Cambiar a tema ${document.documentElement.dataset.theme === "dark" ? "claro" : "oscuro"}`);
themeToggle.querySelector(".theme-icon").textContent = document.documentElement.dataset.theme === "dark" ? "☼" : "☾";

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function repositoryText(repo) {
  return [repo.name, repo.description, ...(repo.topics || [])].filter(Boolean).join(" ");
}

function getCategory(repo) {
  const text = repositoryText(repo);
  return CATEGORY_RULES.find((category) => category.pattern.test(text))
    || { id: "utility", label: "Utilidades" };
}

function getTags(repo) {
  if (repo.name === "Pausa-Bloom") return ["Chrome", "Edge", "Instalación manual"];
  const tags = [...(repo.topics || [])];
  if (/chrome/i.test(repositoryText(repo))) tags.push("Chrome");
  if (!STORE_LINKS[repo.name] && /manual/i.test(repo.description || "")) tags.push("Instalación manual");
  if (repo.language && repo.language !== "HTML") tags.push(repo.language);
  return [...new Set(tags)].slice(0, 3);
}

function makeCard(repo, index) {
  const category = getCategory(repo);
  const description = PRODUCT_DETAILS[repo.name]?.tagline || repo.description || "Una extensión creada para hacer más fácil tu día a día.";
  const initial = [...repo.name.replace(/[-_ ]?extension/i, "")][0] || "✳";
  const tags = getTags(repo);
  const avatar = profile?.avatar_url || "";
  const image = PRODUCT_IMAGES[repo.name];
  const productName = PRODUCT_TITLES[repo.name]
    || repo.name.replace(/[-_]?extension/i, "").replace(/([a-z])([A-Z])/g, "$1 $2");
  const starCount = Number.isFinite(repo.stargazers_count)
    ? new Intl.NumberFormat("es-ES").format(repo.stargazers_count)
    : "—";
  const storeUrl = STORE_LINKS[repo.name];
  const githubUrl = escapeHtml(repo.html_url);
  const screenshots = PRODUCT_DETAILS[repo.name]?.screenshots
    || (image ? [{ url: image, alt: `Captura de ${productName}` }] : []);

  return `
    <article class="product-card" style="animation-delay:${index * 55}ms">
      <div class="product-visual">
        <a class="product-art ${image ? "" : `no-image ${ICON_STYLES[index % ICON_STYLES.length]}`}" href="${githubUrl}" target="_blank" rel="noreferrer" aria-label="Ver ${escapeHtml(productName)} en GitHub">
          <span class="product-placeholder" aria-hidden="true">${escapeHtml(initial.toUpperCase())}</span>
          ${screenshots.map((shot, slideIndex) => `<img class="card-slide${slideIndex === 0 ? " is-active" : ""}" src="${escapeHtml(shot.url)}" alt="" aria-hidden="true" loading="${slideIndex === 0 ? "eager" : "lazy"}" decoding="async">`).join("")}
          <span class="category-tag">${escapeHtml(category.label)}</span>
          <span class="art-view" aria-hidden="true">VER EN GITHUB <span>↗</span></span>
        </a>
        ${screenshots.length ? `<div class="slide-controls" role="group" aria-label="Capturas de ${escapeHtml(productName)}">
          <button class="slide-arrow" type="button" data-slide-previous aria-label="Captura anterior de ${escapeHtml(productName)}">‹</button>
          <div class="slide-dots">${screenshots.map((shot, slideIndex) => `<button class="slide-dot${slideIndex === 0 ? " is-active" : ""}" type="button" data-slide-index="${slideIndex}" aria-label="Ver captura ${slideIndex + 1} de ${screenshots.length}" aria-pressed="${slideIndex === 0}"></button>`).join("")}</div>
          <button class="slide-arrow" type="button" data-slide-next aria-label="Captura siguiente de ${escapeHtml(productName)}">›</button>
          <button class="zoom-button" type="button" data-zoom-image aria-label="Ampliar captura de ${escapeHtml(productName)}" title="Ampliar imagen">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.3"></circle><path d="m15.4 15.4 5 5M10.8 7.8v6m-3-3h6"></path></svg>
          </button>
        </div>` : ""}
      </div>
      <div class="product-info">
        <div class="product-title-line">
          <h3><a href="${githubUrl}" target="_blank" rel="noreferrer">${escapeHtml(productName)}</a></h3>
          <span class="star-count"><span aria-hidden="true">★</span>${starCount}</span>
        </div>
        <p>${escapeHtml(description)}</p>
        <div class="card-footer">
          <a class="card-author" href="${escapeHtml(profile?.html_url || `https://github.com/${GITHUB_USERNAME}`)}" target="_blank" rel="noreferrer">
            ${avatar ? `<img class="author-avatar" src="${escapeHtml(avatar)}" alt="" loading="lazy">` : ""}Danny Medina
          </a>
          <span class="card-tags">${tags.map((tag) => `<span class="mini-tag">${escapeHtml(tag)}</span>`).join("")}</span>
        </div>
        <div class="card-actions">
          <button class="product-action details-action" type="button" data-details="${escapeHtml(repo.name)}">
            <span aria-hidden="true">＋</span>Detalles
          </button>
          <a class="product-action github-action" href="${githubUrl}" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13.2 13.2 0 0 0-6.9 0C5.4 1.1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22"></path></svg>
            GitHub
          </a>
          <a class="product-action store-action" href="${escapeHtml(storeUrl || DOWNLOAD_LINKS[repo.name] || `${repo.html_url}/releases/latest`)}" target="_blank" rel="noreferrer">
            ${storeUrl ? '<span class="store-icon" aria-hidden="true">▣</span>Chrome Web Store' : '<span aria-hidden="true">↓</span>Descargar'}
          </a>
        </div>
        ${storeUrl ? `<a class="review-link" href="${escapeHtml(STORE_REVIEW_LINKS[repo.name])}" target="_blank" rel="noreferrer">Ver opiniones en Chrome Web Store ↗</a>` : ""}
      </div>
    </article>`;
}

function renderExtensions() {
  const query = elements.search.value.trim().toLocaleLowerCase("es");
  const sortBy = elements.sort.value;
  const filtered = allExtensions
    .filter((repo) => currentFilter === "all" || getCategory(repo).id === currentFilter)
    .filter((repo) => elements.installFilter.value === "all" || INSTALL_STEPS[repo.name] === elements.installFilter.value)
    .filter((repo) => !query || `${repositoryText(repo)} ${getTags(repo).join(" ")} ${PRODUCT_DETAILS[repo.name]?.features.join(" ") || ""}`.toLocaleLowerCase("es").includes(query));

  if (sortBy === "stars") filtered.sort((a, b) => (b.stargazers_count ?? -1) - (a.stargazers_count ?? -1) || a.name.localeCompare(b.name));
  if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));
  if (sortBy === "updated") filtered.sort((a, b) => {
    const updatedA = Date.parse(a.updated_at);
    const updatedB = Date.parse(b.updated_at);
    return Number.isNaN(updatedA) || Number.isNaN(updatedB) ? 0 : updatedB - updatedA;
  });

  elements.grid.innerHTML = filtered.map(makeCard).join("");
  clearInterval(carouselTimer);
  elements.grid.querySelectorAll(".product-art img").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.parentElement.classList.add("image-unavailable");
    }, { once: true });
  });
  elements.grid.hidden = filtered.length === 0;
  elements.empty.hidden = filtered.length !== 0;
  elements.count.innerHTML = `<span class="count-number">${filtered.length}</span> ${filtered.length === 1 ? "extensión" : "extensiones"}`;
  elements.results.textContent = `Mostrando ${filtered.length} de ${allExtensions.length} ${allExtensions.length === 1 ? "extensión" : "extensiones"}`;
  carouselTimer = setInterval(() => {
    if (document.hidden || reducedMotionPreference.matches || elements.dialog.open || imageZoomDialog.open) return;
    elements.grid.querySelectorAll(".product-visual").forEach((visual) => {
      if (!visual.matches(":hover") && !visual.contains(document.activeElement)) advanceCardSlide(visual, 1);
    });
  }, 4200);
}

function advanceCardSlide(visual, direction, selectedIndex = null) {
  const slides = [...visual.querySelectorAll(".card-slide")];
  if (slides.length < 2) return;
  const dots = [...visual.querySelectorAll(".slide-dot")];
  const currentIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
  const nextIndex = selectedIndex ?? (currentIndex + direction + slides.length) % slides.length;
  if (nextIndex === currentIndex) return;
  slides[currentIndex].classList.remove("is-active");
  slides[nextIndex].classList.add("is-active");
  dots[currentIndex].classList.remove("is-active");
  dots[currentIndex].setAttribute("aria-pressed", "false");
  dots[nextIndex].classList.add("is-active");
  dots[nextIndex].setAttribute("aria-pressed", "true");
}

function renderHeroSlides(repos) {
  heroSlides = repos.flatMap((repo) => {
    const image = PRODUCT_IMAGES[repo.name] || PRODUCT_DETAILS[repo.name]?.screenshots?.[0]?.url;
    if (!image) return [];
    return [{
      name: PRODUCT_TITLES[repo.name] || repo.name.replace(/[-_]?extension/i, "").replace(/([a-z])([A-Z])/g, "$1 $2"),
      image,
      caption: PRODUCT_DETAILS[repo.name]?.tagline || repo.description || "Una extensión creada para hacer más fácil tu día a día.",
      github: repo.html_url,
      install: STORE_LINKS[repo.name] || DOWNLOAD_LINKS[repo.name] || `${repo.html_url}/releases/latest`,
      installLabel: STORE_LINKS[repo.name] ? "Chrome Web Store" : "Descargar",
    }];
  });

  const dots = document.querySelector("#hero-slide-dots");
  dots.replaceChildren(...heroSlides.map((slide, index) => {
    const button = document.createElement("button");
    button.className = "hero-slide-dot";
    button.type = "button";
    button.setAttribute("aria-label", `Mostrar ${slide.name} en portada`);
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => showHeroSlide(index));
    return button;
  }));
  document.querySelector("#hero-slide-controls").hidden = heroSlides.length < 2;
  if (!heroSlides.length) return;

  heroSlideIndex = 0;
  heroImageLayer = document.querySelector("#hero-image-a").classList.contains("is-visible") ? "a" : "b";
  showHeroSlide(0);
  startHeroRotation();
}

function startHeroRotation() {
  clearInterval(heroTimer);
  if (heroSlides.length < 2) return;
  heroTimer = setInterval(() => {
    if (document.hidden || elements.dialog.open || imageZoomDialog.open) return;
    showHeroSlide(heroSlideIndex + 1, false);
  }, HERO_SLIDE_DURATION);
}

function showHeroSlide(index, restartTimer = true) {
  if (!heroSlides.length) return;
  const previousIndex = heroSlideIndex;
  heroSlideIndex = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[heroSlideIndex];
  const request = ++heroImageRequest;
  const currentImage = document.querySelector(`#hero-image-${heroImageLayer}`);
  const nextLayer = heroImageLayer === "a" ? "b" : "a";
  const nextImage = document.querySelector(`#hero-image-${nextLayer}`);
  const updateContent = () => {
    if (request !== heroImageRequest) return;
    if (nextImage.src !== currentImage.src) {
      currentImage.classList.remove("is-visible");
      nextImage.classList.add("is-visible");
      heroImageLayer = nextLayer;
    }

    const hero = document.querySelector(".hero");
    const isFirstSlide = !hero.dataset.initialized;
    if (!isFirstSlide && previousIndex !== heroSlideIndex) {
      hero.classList.remove("is-transitioning");
      void hero.offsetWidth;
      hero.classList.add("is-transitioning");
    }
    hero.dataset.initialized = "true";
    document.querySelector("#hero-product-name").textContent = slide.name;
    document.querySelector("#hero-product-caption").textContent = slide.caption;
    document.querySelector("#hero-slide-count").textContent = `${String(heroSlideIndex + 1).padStart(2, "0")} / ${String(heroSlides.length).padStart(2, "0")} · EN PORTADA`;
    const installLink = document.querySelector("#hero-install-link");
    installLink.href = slide.install;
    installLink.firstChild.textContent = `${slide.installLabel} `;
    document.querySelector("#hero-github-link").href = slide.github;
    document.querySelectorAll(".hero-slide-dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === heroSlideIndex);
      dot.setAttribute("aria-pressed", String(dotIndex === heroSlideIndex));
    });
    if (restartTimer) startHeroRotation();
  };

  if (nextImage.src === slide.image) {
    updateContent();
    return;
  }
  nextImage.onload = updateContent;
  nextImage.onerror = () => {
    if (request === heroImageRequest) updateContent();
  };
  nextImage.src = slide.image;
}

function openProductDetails(repoName) {
  const repo = allExtensions.find((item) => item.name === repoName);
  if (!repo) return;

  const details = PRODUCT_DETAILS[repo.name];
  const productName = PRODUCT_TITLES[repo.name] || repo.name;
  const storeUrl = STORE_LINKS[repo.name];
  const downloadUrl = DOWNLOAD_LINKS[repo.name] || `${repo.html_url}/releases/latest`;
  const release = releaseData.find((item) => item.repo.name === repo.name)?.release;
  const installUrl = storeUrl || downloadUrl;
  const installLabel = storeUrl ? "Añadir desde Chrome Web Store" : "Descargar última versión";
  const starCount = Number.isFinite(repo.stargazers_count)
    ? new Intl.NumberFormat("es-ES").format(repo.stargazers_count)
    : "—";
  const screenshotList = details?.screenshots || (PRODUCT_IMAGES[repo.name]
    ? [{ url: PRODUCT_IMAGES[repo.name], alt: `Captura de ${productName}` }]
    : []);

  elements.dialogContent.innerHTML = `
    <div class="detail-hero">
      ${PRODUCT_IMAGES[repo.name] ? `<img class="detail-cover" src="${PRODUCT_IMAGES[repo.name]}" alt="">` : ""}
      <div class="detail-hero-copy">
        <span class="detail-kicker">${escapeHtml(getCategory(repo).label)} · ${repo.name === "Pausa-Bloom" ? "EXTENSIÓN PARA CHROME Y EDGE" : "EXTENSIÓN PARA CHROME"}</span>
        <h2 id="dialog-title">${escapeHtml(productName)}</h2>
        <p>${escapeHtml(details?.tagline || repo.description || "Una extensión de Danny Medina.")}</p>
        <div class="detail-badges">
          ${release?.tag_name ? `<span>Versión ${escapeHtml(release.tag_name)}</span>` : ""}
          <span>${storeUrl ? "Chrome Web Store" : "Instalación manual"}</span>
          <span>★ ${starCount}</span>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <section class="detail-block">
        <h3>Qué puedes hacer</h3>
        <ul class="feature-list">${(details?.features || [repo.description || "Explora las funciones en GitHub."]).map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3>Cómo instalarla</h3>
        <ol class="install-steps">${(details?.install || ["Consulta las instrucciones de instalación en GitHub."]).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      </section>
      ${screenshotList.length ? `<section class="detail-block"><h3>Un vistazo</h3><div class="detail-gallery">${screenshotList.map((shot) => `<a href="${escapeHtml(shot.url)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(shot.url)}" alt="${escapeHtml(shot.alt)}" loading="lazy"></a>`).join("")}</div></section>` : ""}
      <div class="detail-actions">
        <a class="product-action store-action" href="${escapeHtml(installUrl)}" target="_blank" rel="noreferrer">${escapeHtml(installLabel)} ↗</a>
        <a class="product-action github-action" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">Repositorio en GitHub ↗</a>
        ${repo.name === "Pausa-Bloom" ? `<a class="detail-review-link" href="${escapeHtml(repo.html_url)}#readme" target="_blank" rel="noreferrer">Leer README completo ↗</a>` : ""}
        ${storeUrl ? `<a class="detail-review-link" href="${escapeHtml(STORE_REVIEW_LINKS[repo.name])}" target="_blank" rel="noreferrer">Ver opiniones de usuarios ↗</a>` : ""}
      </div>
    </div>`;
  elements.dialog.showModal();
}

function renderReleases() {
  if (!releaseData.length) {
    elements.releaseList.innerHTML = '<p class="release-loading">No hay información de versiones disponible ahora mismo. Puedes consultar los repositorios en GitHub.</p>';
    return;
  }
  elements.releaseList.innerHTML = releaseData
    .filter((item) => item.release)
    .sort((a, b) => new Date(b.release.published_at) - new Date(a.release.published_at))
    .map(({ repo, release }) => {
      const releaseTitle = release.name || release.tag_name;
      const notes = release.body?.trim() || "Consulta GitHub para ver los detalles de esta versión.";
      const releasedAt = release.published_at
        ? new Intl.DateTimeFormat("es-ES", { dateStyle: "medium" }).format(new Date(release.published_at))
        : "Fecha no disponible";
      return `
        <article class="release-card">
          <div class="release-date">${escapeHtml(releasedAt)}</div>
          <div class="release-copy">
            <span class="release-product">${escapeHtml(PRODUCT_TITLES[repo.name] || repo.name)}</span>
            <h3>${escapeHtml(releaseTitle)}</h3>
            <p>${escapeHtml(notes.replace(/[#*_`>-]/g, "").slice(0, 210))}${notes.length > 210 ? "…" : ""}</p>
          </div>
          <div class="release-actions">
            <span class="release-version">${escapeHtml(release.tag_name)}</span>
            <a href="${escapeHtml(release.html_url)}" target="_blank" rel="noreferrer">Ver versión ↗</a>
          </div>
        </article>`;
    }).join("");
  if (!elements.releaseList.innerHTML) {
    elements.releaseList.innerHTML = '<p class="release-loading">Aún no hay versiones públicas disponibles. Consulta las novedades en GitHub.</p>';
  }
}

async function loadLatestReleases(repos) {
  elements.releaseList.innerHTML = '<p class="release-loading">Consultando las últimas versiones en GitHub…</p>';
  const results = await Promise.all(repos.map(async (repo) => {
    try {
      const response = await fetch(`${GITHUB_API}/repos/${GITHUB_USERNAME}/${encodeURIComponent(repo.name)}/releases/latest`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!response.ok) return { repo, release: null };
      return { repo, release: await response.json() };
    } catch (error) {
      console.error(`No se pudo consultar la versión de ${repo.name}.`, error);
      return { repo, release: null };
    }
  }));
  releaseData = results;
  renderReleases();
}

async function fetchAllRepos() {
  const repositories = [];
  for (let page = 1; ; page += 1) {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?type=owner&per_page=100&sort=updated&page=${page}`,
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!response.ok) {
      if (response.status === 403 || response.status === 429) {
        throw new Error("GitHub ha limitado temporalmente las consultas. Espera un momento y vuelve a intentarlo.");
      }
      throw new Error(`GitHub respondió con un error (${response.status}).`);
    }
    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error("GitHub devolvió una respuesta inesperada.");
    repositories.push(...batch);
    if (batch.length < 100) return repositories;
  }
}

async function loadProfile() {
  const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!response.ok) throw new Error(`No se pudo cargar el perfil de GitHub (${response.status}).`);
  const data = await response.json();
  if (!data || data.login?.toLowerCase() !== GITHUB_USERNAME) {
    throw new Error("El perfil recibido no coincide con el desarrollador configurado.");
  }
  profile = data;
  document.querySelector("#developer-avatar").src = data.avatar_url;
  document.querySelector("#developer-avatar").alt = `Foto de perfil de ${data.name || data.login}`;
  ["#nav-avatar", "#footer-avatar", "#hero-avatar"].forEach((selector) => {
    const avatar = document.querySelector(selector);
    avatar.src = data.avatar_url;
    avatar.alt = `Avatar de ${data.name || data.login}`;
  });
  document.querySelector("#hero-author-name").textContent = data.name || data.login;
  document.querySelector("#developer-avatar-link").href = data.html_url;
  document.querySelector("#developer-title").innerHTML = `Hola, soy ${escapeHtml((data.name || "Danny").split(" ")[0])}<span class="heading-period">.</span>`;
  document.querySelector("#developer-location").textContent = data.location || "Barcelona, España";
  document.querySelector("#developer-followers").textContent = new Intl.NumberFormat("es-ES").format(data.followers);
  document.querySelector("#developer-repositories").textContent = new Intl.NumberFormat("es-ES").format(data.public_repos);
  document.querySelector("#developer-since").textContent = new Intl.DateTimeFormat("es-ES", { year: "numeric" }).format(new Date(data.created_at));
  const website = data.blog ? (data.blog.startsWith("http") ? data.blog : `https://${data.blog}`) : `https://github.com/${GITHUB_USERNAME}`;
  const websiteLabel = data.blog ? data.blog.replace(/^https?:\/\//, "").replace(/\/$/, "") : "GitHub";
  const websiteLink = document.querySelector("#developer-website");
  websiteLink.href = website;
  document.querySelector("#developer-website-label").textContent = websiteLabel;
  document.querySelector("#developer-profile").href = data.html_url;
  document.querySelector("#developer-socials a:nth-child(1)").href = data.html_url;
  if (data.blog) document.querySelector("#developer-socials a:nth-child(2)").href = website;
}

async function loadMarketplace(refreshFromGitHub = false) {
  elements.error.hidden = true;
  elements.empty.hidden = true;
  elements.grid.hidden = false;
  elements.grid.setAttribute("aria-busy", "true");
  if (!allExtensions.length) {
    elements.grid.innerHTML = '<div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>';
    elements.results.textContent = "Cargando extensiones";
  }
  elements.refresh.classList.add("is-loading");

  try {
    if (!refreshFromGitHub) {
      allExtensions = [...DEFAULT_REPOSITORIES];
      renderHeroSlides(allExtensions);
      renderExtensions();
      renderReleases();
      return;
    }

    const [reposResult, profileResult] = await Promise.allSettled([fetchAllRepos(), loadProfile()]);
    const refreshErrors = [];
    if (reposResult.status === "fulfilled") {
      const repos = reposResult.value
        .filter((repo) => !repo.fork && !repo.archived && !repo.private)
        .filter((repo) => repo.name.toLowerCase() !== MARKETPLACE_REPOSITORY)
        .filter((repo) => EXTENSION_PATTERN.test(repositoryText(repo)))
        .sort((a, b) => {
          const updatedA = Date.parse(a.updated_at);
          const updatedB = Date.parse(b.updated_at);
          return Number.isNaN(updatedA) || Number.isNaN(updatedB) ? 0 : updatedB - updatedA;
        });
      if (repos.length) {
        allExtensions = repos;
        void loadLatestReleases(allExtensions);
      } else {
        refreshErrors.push("GitHub no devolvió extensiones; se conserva el catálogo guardado.");
      }
    } else {
      refreshErrors.push(reposResult.reason instanceof Error
        ? reposResult.reason.message
        : "No se pudieron consultar los repositorios de GitHub.");
    }
    if (profileResult.status === "rejected") {
      refreshErrors.push("No se pudo actualizar la información del perfil.");
      console.error("No se pudo actualizar el perfil de GitHub.", profileResult.reason);
    }

    renderHeroSlides(allExtensions);
    renderExtensions();
    if (refreshErrors.length) {
      elements.results.textContent += ` · ${refreshErrors.join(" ")}`;
    }
  } catch (error) {
    console.error("No se pudo mostrar el catálogo de extensiones.", error);
    if (allExtensions.length) {
      renderHeroSlides(allExtensions);
      renderExtensions();
      elements.results.textContent += " · Se conserva la colección disponible.";
    } else {
      elements.grid.hidden = true;
      elements.error.hidden = false;
      elements.errorMessage.textContent = error instanceof Error ? error.message : "Ha ocurrido un error inesperado.";
      elements.count.innerHTML = '<span class="count-number">—</span> extensiones';
      elements.results.textContent = "No se pudieron cargar las extensiones";
    }
  } finally {
    elements.grid.setAttribute("aria-busy", "false");
    elements.refresh.classList.remove("is-loading");
  }
}

elements.filters.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    elements.filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-pressed", String(active));
    });
    renderExtensions();
  });
});
elements.search.addEventListener("input", renderExtensions);
elements.sort.addEventListener("change", renderExtensions);
elements.installFilter.addEventListener("change", renderExtensions);
elements.grid.addEventListener("click", (event) => {
  const visual = event.target.closest(".product-visual");
  if (visual) {
    if (event.target.closest("[data-slide-previous]")) {
      advanceCardSlide(visual, -1);
      return;
    }
    if (event.target.closest("[data-slide-next]")) {
      advanceCardSlide(visual, 1);
      return;
    }
    const slideDot = event.target.closest("[data-slide-index]");
    if (slideDot) {
      advanceCardSlide(visual, 0, Number(slideDot.dataset.slideIndex));
      return;
    }
    if (event.target.closest("[data-zoom-image]")) {
      const activeSlide = visual.querySelector(".card-slide.is-active");
      if (activeSlide) openImageZoom(activeSlide);
      return;
    }
  }
  const button = event.target.closest("[data-details]");
  if (button) openProductDetails(button.dataset.details);
});
document.querySelector("#hero-slide-previous").addEventListener("click", () => {
  showHeroSlide(heroSlideIndex - 1);
});
document.querySelector("#hero-slide-next").addEventListener("click", () => {
  showHeroSlide(heroSlideIndex + 1);
});
function openImageZoom(slide) {
  const zoomImage = document.querySelector("#zoomed-image");
  zoomImage.src = slide.src;
  zoomImage.alt = slide.closest(".product-card").querySelector("h3").textContent;
  document.querySelector("#zoom-caption").textContent = `${zoomImage.alt} · Vista ampliada`;
  imageZoomDialog.showModal();
}
document.querySelector("#dialog-close").addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  elements.dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.dialog.open) elements.dialog.close();
});
elements.dialog.addEventListener("click", (event) => {
  if (event.target === elements.dialog) elements.dialog.close();
});
const imageZoomDialog = document.querySelector("#image-zoom-dialog");
document.querySelector("#zoom-close").addEventListener("click", () => imageZoomDialog.close());
imageZoomDialog.addEventListener("click", (event) => {
  if (event.target === imageZoomDialog) imageZoomDialog.close();
});
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("marketplace-theme", nextTheme);
  document.querySelector('meta[name="theme-color"]').content = nextTheme === "dark" ? "#101010" : "#f3f4f0";
  themeToggle.setAttribute("aria-label", `Cambiar a tema ${nextTheme === "dark" ? "claro" : "oscuro"}`);
  themeToggle.querySelector(".theme-icon").textContent = nextTheme === "dark" ? "☼" : "☾";
});
elements.clearSearch.addEventListener("click", () => {
  elements.search.value = "";
  currentFilter = "all";
  elements.filters.forEach((filter) => {
    const active = filter.dataset.filter === "all";
    filter.classList.toggle("is-active", active);
    filter.setAttribute("aria-pressed", String(active));
  });
  renderExtensions();
});
elements.refresh.addEventListener("click", () => loadMarketplace(true));
elements.retry.addEventListener("click", () => loadMarketplace(true));

void loadProfile().catch((error) => {
  console.error("No se pudo actualizar la información del perfil de GitHub.", error);
});
loadMarketplace();

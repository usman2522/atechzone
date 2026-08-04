/* ============================================
   ATech Zones — Interactions
   Vanilla JavaScript
   ============================================ */

(function () {
  "use strict";

  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mainNav = document.getElementById("main-nav");
  const navBackdrop = document.getElementById("nav-backdrop");
  const navDrawer = document.getElementById("nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- i18n ---------- */
  const translations = {
    it: {
      "meta.title": "ATech Zones | Bellezza Eccellente. Qualità Affidabile.",
      "meta.description":
        "ATech Zones — impresa italiana e-commerce specializzata in prodotti cosmetici di eccellenza per la cura e la bellezza della pelle e dei capelli. Bellezza Eccellente. Qualità Affidabile.",
      "nav.home": "Casa",
      "nav.about": "Chi siamo",
      "nav.why": "Perché sceglierci",
      "nav.distributor": "Distributore ufficiale",
      "nav.contact": "Contatto",
      "nav.shop": "Acquista AARKADA",
      "aria.home": "ATech Zones — Casa",
      "aria.shop": "Acquista AARKADA",
      "aria.openMenu": "Apri menu",
      "aria.closeMenu": "Chiudi menu",
      "aria.menu": "Menu",
      "aria.call": "Chiama ATech Zones al +39 351 8218799",
      "aria.email": "Invia email a ATech Zones a Info@atechzones.com",
      "hero.label": "Benvenuti alla ATech Zones!",
      "hero.heading": "Bellezza Eccellente. Qualità Affidabile.",
      "hero.text":
        "ATech Zones è un'impresa italiana e-commerce specializzata in approvvigionamento, distribuzione e vendita al dettaglio di prodotti cosmetici di eccellenza per la cura e la bellezza della pelle e dei capelli.",
      "hero.ctaSecondary": "Scopri la partnership",
      "about.heading": "Informazioni su ATech Zones",
      "about.p1":
        "ATech Zones è un'impresa italiana e-commerce specializzata in approvvigionamento, distribuzione e vendita al dettaglio di prodotti cosmetici di eccellenza per la cura e la bellezza della pelle e dei capelli.",
      "about.p2":
        "Serviamo rivenditori, grossisti, partner commerciali e consumatori finali offrendo prodotti autentici e di alta qualità forniti da produttori affidabili e marchi rinomati in tutto il mondo.",
      "about.p3":
        "I nostri prodotti sono acquistabili nei marketplace online più conosciuti e nel nostro e-shop. Questo ci permette di offrire un servizio efficiente sia ai clienti B2B che B2C con affidabilità e convenienza.",
      "about.p4":
        "Che tu sia un rivenditore, un grossista, un partner commerciale o un amante della bellezza, noi ci impegniamo a consegnare prodotti originali dal valore competitivo e un'eccezionale esperienza cliente.",
      "about.p5":
        "Supportati da uno stoccaggio efficiente, da una logistica affidabile e da una filiera ottimizzata, assicuriamo la rapida evasione degli ordini, consegne affidabili e un servizio efficiente dall'acquisto al domicilio.",
      "about.p6":
        "Il nostro successo è costruito sulla dedizione del nostro team la cui competenza, la passione e l'impegno verso l'eccellenza ci permettono di stabilire partnership durature e di guadagnare la fiducia dei clienti a livello internazionale.",
      "about.p7":
        "Alla ATech Zones la qualità, l'autenticità e la soddisfazione del cliente sono al centro di ogni cosa che facciamo.",
      "about.box1": "Soluzioni B2B e B2C",
      "about.box2": "Prodotti globali autentici",
      "about.box3": "Servizio clienti affidabile",
      "about.readMore": "Leggi di più",
      "about.readLess": "Leggi meno",
      "why.label": "Perché sceglierci",
      "why.heading": "Un partner affidabile nel settore della bellezza premium",
      "why.card1Title": "Prodotti autentici",
      "why.card1Text":
        "Selezioniamo prodotti autentici da produttori affidabili e marchi riconosciuti a livello internazionale.",
      "why.card2Title": "Qualità superiore",
      "why.card2Text":
        "Ogni prodotto è selezionato con particolare attenzione a qualità, performance e soddisfazione del cliente.",
      "why.card3Title": "Competenza B2B e B2C",
      "why.card3Text":
        "Serviamo rivenditori, grossisti, partner commerciali e singoli consumatori di prodotti di bellezza.",
      "cta.heading": "Scopri la bellezza premium con AARKADA",
      "cta.text":
        "Scopri prodotti autentici di bellezza, cura della pelle, cura dei capelli e cosmetica selezionati per qualità e affidabilità.",
      "partner.label":
        "Portiamo l'eccellenza Europea nella cura della pelle ai Clienti di tutta Italia.",
      "partner.heading":
        "ATech Zones diventa distributore ufficiale della Aarkada in Italia.",
      "partner.c1p1":
        "Alla ATech Zones siamo orgogliosi di annunciare che siamo stati nominati Distributori Ufficiali Aarkada per tutto il mercato italiano.",
      "partner.c1p2":
        "Questa partnership è una tappa fondamentale per la crescita della nostra impresa, rinforza il nostro impegno a offrire prodotti autentici e di qualità eccellente per la bellezza e la cura della pelle in tutta Italia.",
      "partner.c1p3":
        "ATech Zones fornisce i prodotti originali Aarkada direttamente dal produttore al consumatore e al rivenditore B2B, assicurando i più alti standard di qualità (e garantendo la disponibilità di magazzino).",
      "partner.c2p1":
        "La nostra missione è portare sul mercato italiano marchi di eccellenza per la bellezza e la cura della persona, attraverso il nostro e-shop e altri marketplace. Diventando il Distributore Ufficiale Aarkada abbiamo assolto una volta di più il nostro impegno.",
      "partner.c2p2":
        "Un ringraziamento particolare va ai nostri clienti e partner commerciali per la fiducia e il supporto che continuano a dimostrarci. Siamo lieti di continuare a servirvi con la professionalità che contraddistingue ATech Zones e Aarkada.",
      "partner.signBrand": "ATech Zones",
      "partner.signRole": "Distributore Ufficiale Aarkada in Italy",
      "contact.label": "Contattaci",
      "contact.heading": "Costruiamo un rapporto di fiducia",
      "contact.lead":
        "Per informazioni sui prodotti, opportunità di vendita all'ingrosso, partnership commerciali o assistenza generale, contatta il team di ATech Zones.",
      "contact.phone": "Telefono",
      "contact.email": "E-mail",
      "contact.address": "Indirizzo",
      "contact.addressValue":
        "Via Gian Carlo Conestabile Della Staffa, 00124, Roma",
      "footer.text":
        "Azienda italiana di e-commerce specializzata in prodotti premium per la bellezza, la cura della pelle, la cura dei capelli e la cosmetica.",
      "footer.badge": "Distributore ufficiale di Aarkada in Italia",
      "footer.linksTitle": "Link rapidi",
      "footer.contactTitle": "Contatti",
      "footer.copy": "© 2026 ATech Zones. Tutti i diritti riservati.",
    },
    en: {
      "meta.title": "ATech Zones | Premium Beauty. Trusted Quality.",
      "meta.description":
        "ATech Zones — Italian e-commerce for premium beauty, skincare, haircare, and cosmetic products. Premium Beauty. Trusted Quality.",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.why": "Why Choose Us",
      "nav.distributor": "Official Distributor",
      "nav.contact": "Contact",
      "nav.shop": "Shop AARKADA",
      "aria.home": "ATech Zones — Home",
      "aria.shop": "Shop AARKADA",
      "aria.openMenu": "Open menu",
      "aria.closeMenu": "Close menu",
      "aria.menu": "Menu",
      "aria.call": "Call ATech Zones at +39 351 8218799",
      "aria.email": "Email ATech Zones at Info@atechzones.com",
      "hero.label": "Welcome to ATech Zones",
      "hero.heading": "Premium Beauty. Trusted Quality.",
      "hero.text":
        "ATech Zones is an Italian e-commerce company specializing in the sourcing, distribution, and online retail of premium beauty, skincare, haircare, and cosmetic products.",
      "hero.ctaSecondary": "Discover the partnership",
      "about.heading": "About ATech Zones",
      "about.p1":
        "ATech Zones is an Italian e-commerce company specializing in the sourcing, distribution, and online retail of premium beauty, skincare, haircare, and cosmetic products.",
      "about.p2":
        "We proudly serve retailers, wholesalers, business partners, and individual consumers by offering authentic, high-quality products sourced from trusted manufacturers and renowned brands worldwide.",
      "about.p3":
        "Our products are available through leading online marketplaces as well as our own online store, enabling us to efficiently serve both B2B and B2C customers with reliability and convenience.",
      "about.p4":
        "Whether you are a retailer, wholesaler, business partner, or beauty enthusiast, we are committed to delivering genuine products, competitive value, and an exceptional customer experience.",
      "about.p5":
        "Supported by efficient warehousing, reliable logistics, and an optimised supply chain, we ensure fast order fulfilment, dependable delivery, and consistent service from purchase to doorstep.",
      "about.p6":
        "Our success is built on the dedication of our team. Their expertise, passion, and commitment to excellence enable us to build lasting partnerships and earn the trust of customers across international markets.",
      "about.p7":
        "At ATech Zones, quality, authenticity, and customer satisfaction are at the heart of everything we do.",
      "about.box1": "B2B & B2C Solutions",
      "about.box2": "Authentic Global Products",
      "about.box3": "Reliable Customer Service",
      "about.readMore": "Read more",
      "about.readLess": "Read less",
      "why.label": "Why Choose Us",
      "why.heading": "A Reliable Partner in Premium Beauty",
      "why.card1Title": "Authentic Products",
      "why.card1Text":
        "We source genuine products from trusted manufacturers and internationally recognized brands.",
      "why.card2Title": "Premium Quality",
      "why.card2Text":
        "Every product is selected with a strong focus on quality, performance, and customer satisfaction.",
      "why.card3Title": "B2B & B2C Expertise",
      "why.card3Text":
        "We serve retailers, wholesalers, business partners, and individual beauty consumers.",
      "cta.heading": "Explore Premium Beauty with AARKADA",
      "cta.text":
        "Discover authentic beauty, skincare, haircare, and cosmetic products selected for quality and trust.",
      "partner.label":
        "Bringing Premium European Skincare to the Italian Market",
      "partner.heading":
        "ATech Zones Appointed as the Official Distributor of Aarkada in Italy",
      "partner.c1p1":
        "ATech Zones is proud to announce its official appointment as the Official Distributor of Aarkada in Italy.",
      "partner.c1p2":
        "This strategic partnership represents an important milestone in our company's growth and reflects our ongoing commitment to bringing exceptional European beauty and skincare brands to customers and business partners across Italy.",
      "partner.c1p3":
        "As the Official Distributor, ATech Zones will provide direct access to genuine Aarkada products, supplied straight from the manufacturer. This guarantees the highest standards of authenticity, quality, consistent product availability, and reliable service for both individual consumers and B2B partners.",
      "partner.c2p1":
        "At ATech Zones, we are committed to introducing carefully selected premium European beauty and skincare brands to the Italian market. Becoming the Official Distributor of Aarkada is an important step in that commitment and further strengthens our position as a trusted partner for premium beauty brands.",
      "partner.c2p2":
        "We extend our sincere gratitude to our customers, retailers, and business partners for their continued trust and support. We look forward to delivering the excellence, innovation, and professionalism that define both ATech Zones and Aarkada, while making authentic Aarkada products more accessible than ever throughout Italy.",
      "partner.signBrand": "ATech Zones",
      "partner.signRole": "Official Distributor of Aarkada in Italy",
      "contact.label": "Contact Us",
      "contact.heading": "Let’s Build a Trusted Connection",
      "contact.lead":
        "For product enquiries, wholesale opportunities, business partnerships, or general assistance, contact the ATech Zones team.",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.address": "Address",
      "contact.addressValue":
        "Via Gian Carlo Conestabile Della Staffa, 00124, Rome",
      "footer.text":
        "Italian e-commerce company specializing in premium beauty, skincare, haircare, and cosmetic products.",
      "footer.badge": "Official Distributor of Aarkada in Italy",
      "footer.linksTitle": "Quick Links",
      "footer.contactTitle": "Get in Touch",
      "footer.copy": "© 2026 ATech Zones. All rights reserved.",
    },
  };

  const LANG_KEY = "atechzones-lang";
  let currentLang = "it";

  function getNestedOrFlat(dict, key) {
    return dict[key];
  }

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = getNestedOrFlat(dict, key);
      if (value == null) return;

      /* Read-more label depends on expanded state — handled separately */
      if (el.id === "about-read-more") return;

      if (el.tagName === "TITLE") {
        document.title = value;
        return;
      }
      if (el.tagName === "META" && el.getAttribute("name") === "description") {
        el.setAttribute("content", value);
        return;
      }
      el.textContent = value;
    });

    const aboutReadMoreBtn = document.getElementById("about-read-more");
    if (aboutReadMoreBtn) {
      const expanded = aboutReadMoreBtn.getAttribute("aria-expanded") === "true";
      aboutReadMoreBtn.textContent = expanded
        ? dict["about.readLess"]
        : dict["about.readMore"];
    }

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      const value = getNestedOrFlat(dict, key);
      if (value != null) el.setAttribute("aria-label", value);
    });

    /* Keep menu toggle label in sync with open/closed state */
    if (menuToggle) {
      const isOpen = mainNav && mainNav.classList.contains("is-open");
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? dict["aria.closeMenu"] : dict["aria.openMenu"]
      );
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* ignore storage errors */
    }
  }

  function initLanguage() {
    let saved = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch (e) {
      saved = null;
    }
    const initial = saved === "en" || saved === "it" ? saved : "it";
    applyLanguage(initial);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        if (lang && lang !== currentLang) applyLanguage(lang);
      });
    });
  }

  initLanguage();

  /* ---------- Sticky header on scroll ---------- */
  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 24) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ---------- Mobile menu drawer ---------- */
  function openMenu() {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.add("is-open");
    if (navBackdrop) navBackdrop.hidden = false;
    menuToggle.setAttribute("aria-expanded", "true");
    const dict = translations[currentLang];
    menuToggle.setAttribute("aria-label", dict["aria.closeMenu"]);
    document.body.classList.add("menu-open");
    if (menuClose) menuClose.focus();
  }

  function closeMenu() {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    const dict = translations[currentLang];
    menuToggle.setAttribute("aria-label", dict["aria.openMenu"]);
    document.body.classList.remove("menu-open");
    if (navBackdrop) {
      window.setTimeout(function () {
        if (!mainNav.classList.contains("is-open")) {
          navBackdrop.hidden = true;
        }
      }, 400);
    }
  }

  function toggleMenu() {
    const isOpen = mainNav && mainNav.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMenu);
  }

  /* Close menu when a nav link or CTA inside drawer is clicked */
  if (navDrawer) {
    navDrawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* Close menu on Escape */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mainNav && mainNav.classList.contains("is-open")) {
      closeMenu();
      if (menuToggle) menuToggle.focus();
    }
  });

  /* Close menu if viewport grows past mobile breakpoint */
  window.addEventListener(
    "resize",
    function () {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    },
    { passive: true }
  );

  /* ---------- Active nav link on scroll ---------- */
  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    let currentId = "";

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === "#" + currentId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  /* ---------- About read more ---------- */
  const aboutMore = document.getElementById("about-more");
  const aboutReadMore = document.getElementById("about-read-more");

  if (aboutReadMore && aboutMore) {
    aboutReadMore.addEventListener("click", function () {
      const expanded = aboutReadMore.getAttribute("aria-expanded") === "true";
      const next = !expanded;
      aboutReadMore.setAttribute("aria-expanded", next ? "true" : "false");
      aboutMore.classList.toggle("is-open", next);
      const dict = translations[currentLang];
      aboutReadMore.textContent = next
        ? dict["about.readLess"]
        : dict["about.readMore"];
    });
  }

  /* ---------- Partnership image slider ---------- */
  const slider = document.getElementById("partnership-slider");

  if (slider) {
    const track = slider.querySelector(".partnership-slider-track");
    const slides = Array.prototype.slice.call(
      slider.querySelectorAll(".partnership-slide")
    );
    const dotsWrap = slider.querySelector(".partnership-slider-dots");
    const prevBtn = slider.querySelector(".partnership-slider-prev");
    const nextBtn = slider.querySelector(".partnership-slider-next");
    let index = 0;
    let timer = null;
    const autoplayMs = 4500;

    function updateSlider() {
      if (!slides.length || !track) return;

      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === index);
      });

      if (dotsWrap) {
        const dots = dotsWrap.querySelectorAll(".partnership-slider-dot");
        dots.forEach(function (dot, i) {
          dot.classList.toggle("is-active", i === index);
        });
      }

      track.style.transform = "translateX(-" + index * 100 + "%)";
    }

    function goTo(nextIndex) {
      if (!slides.length) return;
      index = (nextIndex + slides.length) % slides.length;
      updateSlider();
    }

    function next() {
      goTo(index + 1);
    }

    function prev() {
      goTo(index - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      if (prefersReducedMotion || slides.length < 2) return;
      timer = window.setInterval(next, autoplayMs);
    }

    function stopAutoplay() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className =
          "partnership-slider-dot" + (i === 0 ? " is-active" : "");
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        dot.addEventListener("click", function () {
          goTo(i);
          startAutoplay();
        });
        dotsWrap.appendChild(dot);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        prev();
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        next();
        startAutoplay();
      });
    }

    slider.addEventListener("mouseenter", stopAutoplay);
    slider.addEventListener("mouseleave", startAutoplay);
    slider.addEventListener("focusin", stopAutoplay);
    slider.addEventListener("focusout", startAutoplay);

    updateSlider();
    startAutoplay();
  }

  /* ---------- Intersection Observer: fade-up reveals ---------- */
  const revealElements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    /* Fallback for older browsers */
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();

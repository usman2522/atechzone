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
      "meta.title": "ATech Zones | Bellezza premium. Qualità affidabile.",
      "meta.description":
        "ATech Zones — e-commerce italiano per prodotti premium di bellezza, cura della pelle, cura dei capelli e cosmetica. Bellezza premium. Qualità affidabile.",
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
      "hero.label": "Benvenuti su ATech Zones",
      "hero.heading": "Bellezza premium. Qualità affidabile.",
      "hero.text":
        "ATech Zones è un'azienda italiana di e-commerce specializzata nell'approvvigionamento, nella distribuzione e nella vendita online di prodotti di alta gamma per la bellezza, la cura della pelle, la cura dei capelli e la cosmetica.",
      "hero.ctaSecondary": "Scopri la partnership",
      "about.heading": "Informazioni su ATech Zones",
      "about.p1":
        "ATech Zones è un'azienda italiana di e-commerce specializzata nell'approvvigionamento, nella distribuzione e nella vendita online di prodotti premium per la bellezza, la cura della pelle, la cura dei capelli e la cosmetica.",
      "about.p2":
        "Serviamo con orgoglio rivenditori, grossisti, partner commerciali e consumatori privati, offrendo prodotti autentici e di alta qualità provenienti da produttori affidabili e marchi rinomati a livello mondiale.",
      "about.p3":
        "I nostri prodotti sono disponibili sia sui principali marketplace online che sul nostro store dedicato, consentendoci di servire in modo efficiente, affidabile e conveniente sia i clienti B2B che quelli B2C.",
      "about.p4":
        "Che siate rivenditori, grossisti, partner commerciali o appassionati di bellezza, ci impegniamo a offrire prodotti autentici, condizioni vantaggiose e un'esperienza cliente eccellente.",
      "about.p5":
        "Grazie a una gestione efficiente del magazzino, a una logistica affidabile e a una catena di approvvigionamento ottimizzata, garantiamo una rapida evasione degli ordini, consegne sicure e un servizio costante, dall'acquisto fino alla consegna a domicilio.",
      "about.p6":
        "Il nostro successo si fonda sulla dedizione del nostro team. La competenza, la passione e l'impegno verso l'eccellenza dei nostri collaboratori ci permettono di costruire partnership durature e di conquistare la fiducia dei clienti sui mercati internazionali.",
      "about.p7":
        "In ATech Zones, la qualità, l'autenticità e la soddisfazione del cliente sono al centro di tutto ciò che facciamo.",
      "about.box1": "Soluzioni B2B e B2C",
      "about.box2": "Prodotti globali autentici",
      "about.box3": "Servizio clienti affidabile",
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
        "Portare la skincare europea di alta gamma sul mercato italiano",
      "partner.heading":
        "ATech Zones nominata distributore ufficiale di Aarkada in Italia",
      "partner.c1p1":
        "ATech Zones è orgogliosa di annunciare la propria nomina a distributore ufficiale di Aarkada per l'Italia.",
      "partner.c1p2":
        "Questa partnership strategica rappresenta un traguardo importante per la crescita della nostra azienda e riflette il nostro costante impegno nel portare eccezionali marchi europei di bellezza e cura della pelle ai clienti e ai partner commerciali in tutta Italia.",
      "partner.c1p3":
        "In qualità di distributore ufficiale, ATech Zones garantirà l'accesso diretto ai prodotti originali Aarkada, provenienti direttamente dal produttore. Ciò assicura i più elevati standard di autenticità, qualità, costante disponibilità dei prodotti e affidabilità del servizio, sia per i consumatori privati che per i partner B2B.",
      "partner.c2p1":
        "Noi di ATech Zones ci impegniamo a introdurre sul mercato italiano marchi europei di bellezza e cura della pelle di alta gamma, accuratamente selezionati. Diventare distributori ufficiali di Aarkada rappresenta un passo importante in questo percorso e rafforza ulteriormente la nostra posizione di partner di fiducia per i brand di bellezza premium.",
      "partner.c2p2":
        "Desideriamo esprimere la nostra sincera gratitudine a clienti, rivenditori e partner commerciali per la fiducia e il sostegno che ci dimostrano costantemente. Siamo entusiasti di portare l'eccellenza, l'innovazione e la professionalità che contraddistinguono sia ATech Zones che Aarkada, rendendo al contempo i prodotti originali Aarkada più accessibili che mai in tutta Italia.",
      "partner.signBrand": "ATech Zones",
      "partner.signRole": "Distributore Ufficiale Aarkada in Italia",
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

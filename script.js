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
    menuToggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");
    if (menuClose) menuClose.focus();
  }

  function closeMenu() {
    if (!mainNav || !menuToggle) return;
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
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

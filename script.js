/*
  TAG Landing Page - script.js

  EDIT THESE VALUES:
  - FOOTER_EMAIL: used for footer contact link
  - PRIVACY_URL / TERMS_URL: footer links
*/

const CONFIG = {
  FOOTER_EMAIL: "Info@transactionauthority.com",
  PRIVACY_URL: "PASTE_HERE",
  TERMS_URL: "PASTE_HERE",
};

function isProbablyUrl(value) {
  if (!value) return false;
  if (value === "PASTE_HERE") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function isProbablyEmail(value) {
  if (!value) return false;
  if (value === "PASTE_HERE") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setLink(el, href) {
  if (!el) return;
  el.setAttribute("href", href || "#");
}

function setText(el, text) {
  if (!el) return;
  el.textContent = text;
}

function renderFooterConfig() {
  const emailText = document.querySelector("[data-email-text]");
  const emailLink = document.querySelector("[data-email-link]");
  const privacyLink = document.querySelector("[data-privacy-link]");
  const termsLink = document.querySelector("[data-terms-link]");

  if (isProbablyEmail(CONFIG.FOOTER_EMAIL)) {
    setText(emailText, CONFIG.FOOTER_EMAIL);
    setLink(emailLink, `mailto:${CONFIG.FOOTER_EMAIL}`);
    emailLink?.classList.remove("is-placeholder");
    emailLink?.removeAttribute("aria-disabled");
  } else {
    setText(emailText, "Set contact email");
    setLink(emailLink, "#");
    emailLink?.classList.add("is-placeholder");
    emailLink?.setAttribute("aria-disabled", "true");
  }

  // Leave the default HTML hrefs in place unless configured with a valid URL.
  if (isProbablyUrl(CONFIG.PRIVACY_URL)) setLink(privacyLink, CONFIG.PRIVACY_URL);
  if (isProbablyUrl(CONFIG.TERMS_URL)) setLink(termsLink, CONFIG.TERMS_URL);
}

function wireStickyCtaVisibility() {
  const sticky = document.querySelector(".sticky-cta");
  if (!sticky) return;

  const media = window.matchMedia("(min-width: 900px)");
  let listening = false;
  let ticking = false;

  function setVisible(visible) {
    sticky.classList.toggle("is-visible", visible);
    if (visible) {
      sticky.removeAttribute("aria-hidden");
      sticky.removeAttribute("tabindex");
    } else {
      sticky.setAttribute("aria-hidden", "true");
      sticky.setAttribute("tabindex", "-1");
    }
  }

  function computeVisible() {
    if (!media.matches) return false;
    const threshold = window.innerHeight * 0.2;
    return window.scrollY > threshold;
  }

  function update() {
    ticking = false;
    setVisible(computeVisible());
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  function start() {
    if (listening) return;
    listening = true;
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();
  }

  function stop() {
    if (!listening) return;
    listening = false;
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
    setVisible(false);
  }

  function sync() {
    if (media.matches) start();
    else stop();
  }

  setVisible(false);
  sync();
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", sync);
  } else {
    media.addListener(sync);
  }
}

/**
 * Scroll Animation Observer
 * Triggers fade-in animations when elements enter the viewport
 */
function initScrollAnimations() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    // Make all animated elements visible immediately
    document.querySelectorAll(".animate-on-scroll, .animate-stagger").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  document.querySelectorAll(".animate-on-scroll, .animate-stagger").forEach((el) => {
    observer.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFooterConfig();
  wireStickyCtaVisibility();
  initScrollAnimations();
});

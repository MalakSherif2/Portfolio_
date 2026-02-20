const revealSettings = {
  keyframes: [
    { opacity: 0, transform: "translateY(30px)" },
    { opacity: 1, transform: "translateY(0)" }
  ],
  timing: {
    duration: 800,
    easing: "ease-out",
    fill: "forwards"
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      const delay = index * 100;

      setTimeout(() => {
        entry.target.animate(
          revealSettings.keyframes,
          revealSettings.timing
        );
        entry.target.style.opacity = "1";
      }, delay);

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal-item").forEach((el) => {
  el.style.opacity = "0";
  observer.observe(el);
});


/* ================= MOBILE MENU (SAFE VERSION) ================= */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMenu");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".navItem");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    if (!icon) return;

    if (navLinks.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-xmark");
    } else {
      icon.classList.replace("fa-xmark", "fa-bars");
    }
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      const icon = hamburger.querySelector("i");
      if (icon) icon.classList.replace("fa-xmark", "fa-bars");
    });
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      const icon = hamburger.querySelector("i");
      if (icon) icon.classList.replace("fa-xmark", "fa-bars");
    }
  });
});

/* ===========================
   Smooth Scroll on Navigation
   =========================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

/* ===========================
   Header Scroll Behavior
   - Adds shadow when scrolled
   - Hides when scrolling down
   - Reappears when scrolling up
   =========================== */
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Apply shadow when scrolling past 100px
  if (currentScrollY > 100) header.classList.add("scrolled");
  else header.classList.remove("scrolled");

  // Hide header when scrolling down, show when scrolling up
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

/* ===========================
   Section Reveal on Scroll
   =========================== */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 } // Trigger when 20% of section is visible
);

// Observe all sections
sections.forEach((section) => observer.observe(section));

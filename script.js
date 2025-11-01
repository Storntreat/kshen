// 1) Start background gradient after full load (so the white -> gradient reveal looks smooth)
window.addEventListener("load", () => {
  // add small delay so reveal feels polished
  setTimeout(() => document.body.classList.add("loaded"), 120);
});

// 2) Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// 3) Header hide/show & scrolled shadow
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // shadow when past top
  if (currentScrollY > 100) header.classList.add("scrolled");
  else header.classList.remove("scrolled");

  // hide on scroll down, show on scroll up
  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

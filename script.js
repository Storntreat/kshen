
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Header scroll effect
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    // Scrolling down
    header.classList.add("hide");
  } else {
    // Scrolling up
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

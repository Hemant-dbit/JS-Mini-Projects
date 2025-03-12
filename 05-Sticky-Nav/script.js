const navElement = document.querySelector("nav");
const navPosition = navElement.getBoundingClientRect().top;
const navbarLinks = navElement.querySelectorAll("a");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  navElement.style.top = scrollPos + "px";

  let activeLink = null;

  navbarLinks.forEach((link) => {
    const offset = 50;
    const sectionElement = document.querySelector(link.hash);

    if (scrollPos >= sectionElement.offsetTop - offset) {
      activeLink = link; // Store the last valid link
    }
  });

  // Remove "active" from all links
  navbarLinks.forEach((link) => link.classList.remove("active"));

  // Activate the last valid link
  if (activeLink) activeLink.classList.add("active");
});

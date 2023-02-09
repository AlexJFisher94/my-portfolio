const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");
const pageLinks = document.querySelector("ul");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    navMenu.classList.remove("hidden");
    navBar.classList.add("hidden");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navMenu.classList.add("hidden");
    navBar.classList.remove("hidden");
  }
});

pageLinks.addEventListener('click', () => {
    navMenu.classList.add("hidden");
    menuBtn.classList.remove("open");
    menuOpen = false;
})

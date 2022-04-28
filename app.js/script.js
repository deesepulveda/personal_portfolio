"use strict";

const burgerOpen = document.querySelector(".burger-open");
const burgerClose = document.querySelector(".burger-close");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links");

// Open Nav Menu Function
function openNavMenu() {
  nav.classList.add("navOpen");
  burgerClose.classList.remove("removeBlock");
  burgerOpen.classList.add("removeBlock");
}

// Close Nav Menu Function
function closeNavMenu() {
  nav.classList.remove("navOpen");
  burgerClose.classList.add("removeBlock");
  burgerOpen.classList.remove("removeBlock");
}

// Click to Open Nav Menu
burgerOpen.addEventListener("click", () => {
  openNavMenu();
});

// Click to Close Nav Menu
burgerClose.addEventListener("click", () => {
  closeNavMenu();
});

// Click List/Links to Close Nav Menu
navLinks.forEach((nl) => {
  nl.addEventListener("click", () => {
    closeNavMenu();
  });
});

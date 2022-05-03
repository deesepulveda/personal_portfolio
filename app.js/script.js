"use strict";

const burgerOpen = document.querySelector(".burger-open");
const burgerClose = document.querySelector(".burger-close");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links");
const hoverLines = document.querySelectorAll(".hoverlines");

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

// Reset Links that are not clicked

function resetLinks() {
  navLinks.forEach((nl) => {
    nl.classList.remove("activeLink");
  });
}

function resetHoverLines() {
  hoverLines.forEach((hl) => {
    hl.classList.remove("activeLines");
  });
}

function addHoverLines() {
  hoverLines.forEach((hl) => {
    hl.classList.add("activeLines");
  });
}

// Media Query

const mediaQueryDesktop = window.matchMedia("(min-width: 1224px)");

// Nav Link added to Home Link when in landscape desktop mode

if (mediaQueryDesktop.matches === true) {
  navLinks[0].classList.add("activeLink");
  hoverLines[0].classList.add("activeLines");
}

// Click Event for Links

navLinks.forEach((nl) => {
  nl.addEventListener("click", (e) => {
    resetLinks();
    resetHoverLines();
    if (e.currentTarget) nl.classList.add("activeLink");
    console.log("working");
  });
});

"use strict";

const burgerOpen = document.querySelector(".burger-open");
const burgerClose = document.querySelector(".burger-close");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links");
const hoverLines = document.querySelectorAll(".hoverlines");
const scrolledNav = document.querySelectorAll(".scroll-nav");

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

const mediaQueryMobile = window.matchMedia("(min-width: 300px)");
const mediaQueryTabletLandscape = window.matchMedia("(max-width: 1024px)");
const mediaQueryDesktop = window.matchMedia("(min-width: 1224px)");

// Active added to Home Link when in desktop mode

if (mediaQueryDesktop.matches === true) {
  navLinks[0].classList.add("activeLink");
  hoverLines[0].classList.add("activeLines");
}

// Click Event for Links / Links highlight when clicked on

navLinks.forEach((nl) => {
  nl.addEventListener("click", (e) => {
    resetLinks();
    if (e.currentTarget) nl.classList.add("activeLink");
  });
});

// Scroll Event for Links / Links highlight when scrolled to section

if (mediaQueryDesktop.matches === true) {
  window.addEventListener("scroll", () => {
    let current = "";
    scrolledNav.forEach((sn) => {
      const sectionTop = sn.offsetTop;
      const sectionHeight = sn.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = sn.getAttribute("id");
      }
    });

    navLinks.forEach((nl) => {
      if (nl.classList.contains(current)) {
        resetLinks();
        nl.classList.add("activeLink");
      }
    });

    hoverLines.forEach((hl) => {
      if (hl.classList.contains(current)) {
        resetHoverLines();
        hl.classList.add("activeLines");
      }
    });
  });
}

// Carousel Slider Function

const projectBoxes = document.querySelectorAll(".projects-box");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

// Set Boxes in row, Transform Boxes side by side

if (mediaQueryMobile.matches === true && mediaQueryTabletLandscape === true) {
  projectBoxes.forEach((p, i) => {
    p.style.transform = `translateX(${100 * i}%)`;
  });
}

let currentSlide = 0;
const maxSlide = projectBoxes.length;

// Move Slides 100% left and right Function

const moveSlide = function () {
  projectBoxes.forEach((p, i) => {
    p.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};

// Click Event for Next and Prev Buttons

nextBtn.addEventListener("click", () => {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  moveSlide();
});

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = 0;
  } else {
    currentSlide--;
  }

  moveSlide();
});

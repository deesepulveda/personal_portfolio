"use strict";

// DOM Select Variables

const header = document.querySelector(".header");
const burgerOpen = document.querySelector(".burger-open");
const burgerClose = document.querySelector(".burger-close");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links");
const hoverLines = document.querySelectorAll(".hoverlines");
const scrolledNav = document.querySelectorAll(".scroll-nav");
const sectionTitles = document.querySelectorAll(".section-title");
const projectBoxes = document.querySelectorAll(".projects-box");
const projectContainer = document.querySelector(".projects-container");
const heroContainer = document.querySelector(".hero-container");
const nameTitle = document.querySelector(".title");
const nameSubtitle = document.querySelector(".subtitle");
const btnBox = document.querySelector(".btn-box");
const contactBox = document.querySelector(".contact-box");

// Media Query

const mediaQueryMobile = window.matchMedia("(min-width: 300px)");
const mediaQueryTabletLandscapeMin = window.matchMedia("(min-width: 1024px)");
const mediaQueryTabletLandscape = window.matchMedia("(max-width: 1023px)");
const mediaQueryDesktop = window.matchMedia("(min-width: 1224px)");

// Load Title, Subtitle and CTA Button

window.addEventListener("load", () => {
  // Animetion on Load for Hero Section

  nameTitle.classList.add("galleryAnimateUp");
  nameSubtitle.classList.add("galleryAnimateUp");
  btnBox.classList.add("galleryAnimateUp");
  if (mediaQueryTabletLandscapeMin.matches === true)
    header.classList.add("galleryAnimateIn");
});

// Parallax Effect for Hero Section

window.addEventListener("scroll", () => {
  nameTitle.classList.remove("galleryAnimateUp");
  nameSubtitle.classList.remove("galleryAnimateUp");
  btnBox.classList.remove("galleryAnimateUp");

  nameTitle.style.opacity = "1";
  nameSubtitle.style.opacity = "1";
  btnBox.style.opacity = "1";

  // Set Scroll and Speed

  let rate = window.pageYOffset;
  let speed = rate * 0.5 + "px";
  let speedFast = rate * 1 + "px";
  let speedFastest = rate * 2 + "px";

  // Parallax Effect when scrolling

  nameTitle.style.transform = `translateX(${speedFastest})`;
  nameSubtitle.style.transform = `translateX(${speedFast})`;
  btnBox.style.transform = `translateX(${speed})`;

  // Fade Out when scrolling

  if (window.scrollY > 300) {
    nameTitle.style.opacity = "0";
    nameSubtitle.style.opacity = "0";
    btnBox.style.opacity = "0";
  }
});

// Intersection Observer for Section Titles

const sectionObserverFunction = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting) entry.target.classList.toggle("galleryAnimateIn");

  if (
    entry.isIntersecting &&
    entry.target.classList.contains("section-title-contact")
  )
    contactBox.classList.add("scaleUp");

  if (entry.isIntersecting && projectContainer.clientWidth < 200) {
    projectContainer.classList.toggle("galleryAnimateIn");
  }

  if (entry.isIntersecting && projectContainer.clientWidth > 200) {
    projectBoxes.forEach((pb) => {
      pb.classList.toggle("galleryAnimateIn");
    });
  }

  // Stop Observer after Intersecting

  if (entry.isIntersecting) sectionObserver.unobserve(entry.target);
};

const sectionObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

const sectionObserver = new IntersectionObserver(
  sectionObserverFunction,
  sectionObserverOptions
);

sectionTitles.forEach((st) => {
  sectionObserver.observe(st);
});

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

      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = sn.getAttribute("id");
      }
    });

    // console.log(current);

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

const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

// Set Boxes in row, Transform Boxes side by side

projectBoxes.forEach((p, i) => {
  if (projectContainer.clientWidth <= 150) {
    p.style.transform = `translateX(${100 * i}%)`;
  }
});

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

const modalContainer = document.querySelector(".projects-modal-container");
const modalClose = document.querySelector(".modal-close-box");
const modalProjectName = document.querySelector(".modal-project-name");
const modalContentImage = document.querySelector(".modal-content-image");
const siteLink = document.querySelector(".site-link");
const actualSiteLink = document.querySelector(".actual-site-link");

// Open Modal after Project Boxes are Clicked

projectBoxes.forEach((p) => {
  p.addEventListener("click", (e) => {
    modalContainer.classList.remove("closeModal");
    if (!modalContainer.classList.contains("closeModal")) {
      modalContainer.classList.add("galleryFromLeft");
      modalContainer.classList.remove("galleryBackLeft");

      // Setting Title Name in Modal

      const nameTitleText =
        e.currentTarget.lastElementChild.lastElementChild.lastElementChild
          .textContent;

      // Remove All White Spaces in String

      const newNameTitleText = nameTitleText.replace(/\s/g, "");

      // Dynamically Setting Modal Name to Current Target

      modalProjectName.textContent = nameTitleText;

      // Dynamically Setting Modal Actual Website Links to Current Target

      if (e.currentTarget.classList.contains("has-website")) {
        actualSiteLink.lastElementChild.href = `https://www.${newNameTitleText}.com`;
        actualSiteLink.lastElementChild.textContent = `https://www.${newNameTitleText}.com`;
      } else {
        actualSiteLink.lastElementChild.href = "";
        actualSiteLink.lastElementChild.textContent = "";
      }

      // Dynamically Setting Modal Links to Current Target

      siteLink.lastElementChild.href = `https://deesepulveda.github.io/${newNameTitleText}/`;
      siteLink.lastElementChild.textContent = `https://deesepulveda.github.io/${newNameTitleText}/`;
    }

    // Additional Conditions When in Landscape Mode

    if (
      !modalContainer.classList.contains("closeModal") &&
      mediaQueryTabletLandscapeMin.matches === true
    ) {
      modalContainer.classList.add("galleryFromLeft");
      modalContainer.classList.remove("galleryBackLeft");

      // Setting Image in Modal

      const currentModalImages =
        e.currentTarget.firstElementChild.firstElementChild.src;
      modalContentImage.src = currentModalImages;
    }
  });
});

// Close Modal after Close Box has been Clicked

modalClose.addEventListener("click", () => {
  modalContainer.classList.remove("galleryFromLeft");
  modalContainer.classList.add("galleryBackLeft");
  modalContainer.classList.add("closeModal");
});

// About Section

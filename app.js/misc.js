// const aboutTitle = document.querySelector(".section-title-about");
// const contactSection = document.querySelector(".section-contact");
// const aboutSection = document.querySelector(".section-about");
// const aboutContentInfo = document.querySelectorAll(".about-content-info");
// const aboutContentInfoBoxes = document.querySelectorAll(
//   ".about-content-info-boxes"
// );
// const slideBoxes = document.querySelectorAll(".slide-boxes");

// // Intersection Observer for About Part I

// const sectionAboutFunction = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   // entry.target.classList.add("slideFarRight", entry.isIntersecting);

//   if (
//     entry.isIntersecting &&
//     entry.target.classList.contains("about-content-current")
//   ) {
//     aboutContentInfoBoxes[0].classList.add("slideFarRight");
//   }

//   if (
//     !entry.isIntersecting &&
//     entry.target.classList.contains("about-content-current")
//   ) {
//     aboutContentInfoBoxes[0].classList.remove("slideFarRight");
//   }

//   if (
//     entry.isIntersecting &&
//     entry.target.classList.contains("about-content-future")
//   ) {
//     aboutContentInfoBoxes[1].classList.add("slideFarRight");
//     // aboutTitle.classList.remove("stickyTop");
//   }

//   if (
//     !entry.isIntersecting &&
//     entry.target.classList.contains("about-content-future")
//   ) {
//     aboutContentInfoBoxes[1].classList.remove("slideFarRight");
//     // aboutTitle.classList.add("stickyTop");
//   }

//   if (
//     entry.isIntersecting &&
//     entry.target.classList.contains("about-content-blank")
//   ) {
//     aboutContentInfoBoxes[2].classList.add("slideFarRight");
//     // aboutTitle.classList.remove("stickyTop");
//   }

//   if (
//     !entry.isIntersecting &&
//     entry.target.classList.contains("about-content-blank")
//   ) {
//     aboutContentInfoBoxes[2].classList.remove("slideFarRight");
//     // aboutTitle.classList.add("stickyTop");
//   }
// };

// const sectionAboutOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: "-100px",
// };

// const sectionAboutObserver = new IntersectionObserver(
//   sectionAboutFunction,
//   sectionAboutOptions
// );

// aboutContentInfo.forEach((ab) => {
//   sectionAboutObserver.observe(ab);
// });

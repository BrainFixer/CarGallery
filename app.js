const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("mouseenter", function () {
    clearActiveClasses();
    slide.querySelector("h3").style.transitionDelay = "0.5s";
    slide.querySelector("h3").style.transitionDuration = "0.5s";
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  for (const slide of slides) {
    slide.querySelector("h3").style.transitionDelay = "0s";
    slide.querySelector("h3").style.transitionDuration = "0s";
    slide.classList.remove("active");
  }
}

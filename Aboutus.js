// script.js
let currentIndex = 0;
// Get the carousel track and items
const carouselTrack = document.querySelector(".carousel-track");
const testimonialItems = document.querySelectorAll(".testimonial-item");
// Auto-scroll every 4 seconds
function moveCarousel() {
  currentIndex++;
  if (currentIndex >= testimonialItems.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * 100; // Each item is 100% wide
  carouselTrack.style.transform = `translateX(${offset}%)`;
}
function visitMenuHtml() {
  window.location.href = "ourmenu.html";
}
// Start the carousel
setInterval(moveCarousel, 2000);

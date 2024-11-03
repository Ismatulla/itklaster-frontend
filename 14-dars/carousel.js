let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(${-currentSlide * 600}px)`;
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}

// Initial display
showSlide(currentSlide);

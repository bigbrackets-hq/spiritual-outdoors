const slides = document.querySelectorAll('.slide');
let current = 0;
const slideInterval = 3000;

function updateSlides() {
  const total = slides.length;

  slides.forEach((slide) => slide.classList.remove('active', 'next', 'prev'));

  const next = (current + 1) % total;
  const prev = (current - 1 + total) % total;

  slides[current].classList.add('active');
  slides[next].classList.add('next');
  slides[prev].classList.add('prev');
}

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    current = index;
    updateSlides();
    resetAutoSlide(); // reset timer when manually clicked
  });
});

updateSlides();

let autoSlide = setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlides();
}, slideInterval);

// Reset auto slide when manually clicked
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlides();
  }, slideInterval);
}

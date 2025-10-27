const slides = document.querySelectorAll('.slide');

let current = 0;

function updateSlides() {
  slides.forEach((slide) => slide.classList.remove('active', 'next', 'prev'));
  const total = slides.length;
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
  });
});
updateSlides();
